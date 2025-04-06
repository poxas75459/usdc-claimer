/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "8oTxG3p4Wm4deQnnQfWgDLJSAur4e7kpJ8HZ58njwt3uHHTsPuSxF9CeJjpAezAzMrR9J8w4G67pcq2DBro13C1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zpy4PDcwtyMtCyK6xDKqEZmBCi63EzJ2bGKk28XK1VMocTEoCrVyqRYz3uHxoNWBFt9NWyT66fMzvkvou76EFmg",
  "key1": "5geoNthbdTWnQdacnDLTMfxnxGTm1ofh64Vx9SzJoiYEMZhexzXiYRgA8REBNDQje3Yboemcs1NWSJsDHh82knm",
  "key2": "3k9rrxR6jKeMN4ogYYySAi8awDstZEHXDvhuZA5jVqNoS5ye8i9wWQNXyPpBnv2dHzhHyLXHzETdxip9oXUUJLJp",
  "key3": "47CWhaAiVLRhZ4kE7xia5ctyNym7x7Gx7M4ZGairshD32kq93eNMWNsFxddhj3AYKhSkoFqXVovjuipz3HgaKKtq",
  "key4": "58AHyFp3SedpSSgaQvjL91stZRvESqbPvphgR1XVfwYjqP577QiNAHxpsa95Nb7iFjKoWKsLbwHZYnRyne2WRryE",
  "key5": "246TokAKpm1wYrzzZkQow2JyGRxPwdsDvrCJ6VXk5XPZeUJX44cF1jEjEHoMTfm3X8tpwbwzNr7Ddm9hEch6Xucd",
  "key6": "64rTBXYsCJucPnZx4fna7b46gPfczSpSD4MtzTYjwQj5pQRMpSLfBvTc7jfW5RLDbp96AQxWb8Rtd9MeCRKXwMm2",
  "key7": "2d7yxWYZSoPNiQEE3gRCN8G2wey5xSTYnEw8W6Zq1azLsJ4PLShRcLRqSZ4gA5o3ccUcNaPfXrkbztSe6JaMWsoV",
  "key8": "5cSzNhi1c25K3XfRPGhKu55PcrAmMxE9H4BS2rtSazi95fuJL7wx8yFDKWvYpaUUZRhJTCqwqYFiQRfjAUsLkK3a",
  "key9": "27BsDJy6EimkbJZtZHdRUyQ2Rb51NQaK6gU1GRzZUzyTroQVJNzznPkMsZiBzwu1nHD9b4aFtx3yRrwn8tCjsbfg",
  "key10": "23TBnrpHqQY3Ph9nW7s9ENn4jhmbK9jPUBSc9jZ5ubApwk9eSouf8UuU2peKaz8vrdu1irhHNA6xjK4WWntkoMMV",
  "key11": "4XWDXzq7DDKobqbbqgEPJRZhrSdSUUoQCh1gJ5EgyBGRwSK34V9RGgj3ANDzUUSKenU34FnqPVqCQvVJuepFSD9u",
  "key12": "2sqskRj9XGiLxwbXrw3D1yP2J3WQoWMbbyuj8Kzk4fZTtv2RWLGDWVfiVTFVJX2Vp2XttfzfbDDUFKAuQpoEEvn8",
  "key13": "NbkRcWoES6s3S3afiAevwam6LBP48QSyzZ4BmFzEzntTLHnXZqcSwVNcQbzBtpYzUrhcpPpNNreGoePHgf11Uwa",
  "key14": "67DanUjoK8DkXFzhRjBA64MKo1CULv3Lz6Kig5e7NKB76x6eiCevK4ep8pS4z1Vmrm3iGfLoF1vrKJqvfZmiCZ4L",
  "key15": "38TsetAF5DNkAt3syerqzrHifCLsoWm3C25evNDppWHuDkFGhLhqhBEnDo11HaLUH6GXky4qiCV5MfB3bTFrt8x2",
  "key16": "5N87gcvmuLeWwZUBiq5UUStjJGDD26e9MGzoZDNqw42e8AbXUxhFN7ZKxM8fJqjPV5K6Xfz8JHSH3vFPJWVnVAD6",
  "key17": "LUa11CcuT4S2mDqinPrXvrW4VZ75HG7yhyzLo2FKG5UXTv6Jup1ec3uArLE8RSs1FnFzh14cAbWseW8xFMqrxWo",
  "key18": "5VtVRqUEALgLgGLgApqvh6sNg9CkiDs7WXnz8Z1YVhcBXxHxepWjLan5QSBTLtfioLZomsKAqud8wnwshmo7g83",
  "key19": "5B9vF84XrM39wMqf3TGvuujdNWurVNmm6MNj49LVRAEbxmKr3SP9chKbNtHjNicboxbk1r5rFqQLKQ84KSqS7Wx4",
  "key20": "53x9bPXXmfVYV38gE3xEzfkJj4CcDjXnxRkxxE1T2cS6C789mbCDb6AgaQCRNFVJWnTp75HGY7WkevUW5n1S9rKa",
  "key21": "2MLwpFV8cqN1mNonZbk8yeBmiPNpucJfXoL92dqG7mtSt4ZWbcntekAtqWS2cwpcuU9ExfcZfKPuobVC9cbqmFFQ",
  "key22": "4UEgQZJK4MU4ztBKJYfyFzA83mUJf14aQf2t84L6AvLrvFPcZSRbkwG1d2zUUfDyviEM7ug5ZgBiEKWsYqSrnUpN",
  "key23": "2g2uV3Get7BSHXRZrYr2yTB8GygBeEYd4XQQG6rjhfe9mVauefPQur9b7VTTS77GQrLXUJGkMvtV6mqUESEhjxDM",
  "key24": "4vEkVqxChVXFuDtxgjx3YZPDqL7qy8CTK57fE3wNUcfxo8GFRrsZJaGEt66jvXf8Sc3AvGp1p7aFjtMAqAqrMQRL"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
