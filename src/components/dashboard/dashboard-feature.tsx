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
    "5encBp5YAfJzABcm8MaFHgmEQ8voSRvzMj1HWfhuicmdWKExAR2rDRbDtKDj3hiu4tq211fV97tn569am7Jw2eC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nD3cypuvmWNisfCnR9oCVerCKLwCm6eoN5bWZkkAxNnPvTx8tZAS2hooTn5wWtQriXvpPyLvyMpJHw5YCcQuA5i",
  "key1": "4wqAwkFZ7sdXuv4twAWbgFzkPYuvjCnd4UWxTTjoMuAdbdepmtTNuK6xYWoZivoQnTjvDKbcJCQYv3zbdCedbT12",
  "key2": "3KUcGbRKhK9yZzBHMxA9NZnoerk3ZAWQQwF3V4E7wGn66gXGBsqjXrZNVW4aVnHTi6jyT6ApnxM6SzEcuyNpqnnp",
  "key3": "5cXb42PKW3cuKdrNrw1HTB2QTCaajQR1PXA34obwnZ2zVLNhx1JMATMVAtNucZiQQxJLEjC1ThLgPqQ8ThmQ2zGY",
  "key4": "46UBVV1i8C9RWXHEqMuGM8do5of4htuSprr5xN46pt324RiQPWPkXSqR1NB9XJ5CKwyUK1GSMXeipqa1ojKbKLxg",
  "key5": "4cNXTyqYFwWYEDWLdhJc3wfoAXLhWbtwddBvkBPnh7YNV9MLWXUg6WFNWnfEqGWkqfREtdpmDmZ6FGvMu31iGgVw",
  "key6": "2qGF1D4NUBNUe6PBSScVA3VbmCKWQmYLt8jGD1BMxQrHGcK5KMF6KpozH4wrqezcUNF9jXjCKUKNnyCCAmGDLZYd",
  "key7": "4EvCANmtCjHpPgbVaic4XWuxr5nV9hjSdnkxWB6qSPT8nUgfcN5rNdnop8wTHBtuY7bWmJA8qnDQjFe9o2Ssx9nj",
  "key8": "4J4KZRcCtaZ4PDfr6cQDJ1YDwEJyTa3bYHBP4andcBnzt6dpVG4aL6SRb1AbgTCaMxcYAkjcbethdWZYGSTJ9YTX",
  "key9": "B45Mko2rf1kYhVHg9hgmgFEmbg6mK9XZ6Ezw1oR1CQ27ANayjbPYY7RenjrCSnsCRCgrFv847SAQfi9xP8tDMng",
  "key10": "4MhrQuWWQtiYAxzUZdmb7tzT2F6oGXt6Ao36Vrq11PDnmruCqBLP8sY1pq2WovVqgWk6RWh2CnXdRKTEAUHSL1N7",
  "key11": "PzvSR8C61Kw86e5nw9cPhJo2n9ydLCKYAEN2A1tsSgViL5v1kcSdz8NcKK1Cut9wPym354SyRQppN2pS6g8ZEBY",
  "key12": "5eUrrGrD9QQXLDnxvcwNgnoH5UXFM595Y7cLMcE8WY49bJmCPmt2KVwFZnUjUcCFCVWHbrPxvt7Vjo8vj5MuS9DK",
  "key13": "5sDVQgu8tqCcT4kD2RG9FDWeUrtZjGDvCuCP9RYzxGxjGUHykhm4JaCdPGNSh8TeiPKsYwkNEQjnXwnmZ81mobka",
  "key14": "2VS3HpZTtieSDG56edSFE4vmjxjyPAE2gSGryV4PwhSg2KYqJCAz1BVgmfDzRNb4rnSuzN1uJoZp25ensYaRtf3S",
  "key15": "3RTrPWsho7QrNhZV62SAbiSiCCyiLSzAprbsVBDX1yUbHkvZo6LE6kDAGz4vHjsFQYrXabdS9MSmTB9wgxPGHfrF",
  "key16": "FxdapEPkuJyp6yKC8TRW5T1zttPT6JWV9LJrGa3LnWdTuDHnXf3MzNCNENnipSa8VDN84xx2bJG7djS1bpZxiSk",
  "key17": "5QcQNS1hLaXjrS1AtpTTt4TJnfQjtgD6PfsX5Hhu2JZ8pRvM6nw8r4BUwTnGUPFJwf8z3m7g8EvxMRdoEDMeEP76",
  "key18": "4ANrcgVkD8WefFM9jsA3KPPyyJs3wmG9FVmWKgJaqeyCZZBvsahbUp2e5b9XRM6n4wTr5D1oV8uGBcGGRW22dg6U",
  "key19": "3GCC7jBvdVe9647LtPUdJAGDTyCVxdW1fQaMARBJ3MYbhGPbeowi9THEE3gXy2hWKh8BCT97DTeSvJNKwTeSQt6Y",
  "key20": "4r17ddHMJNsSShR8NuDV54mjUow4Eh7i37NMEKUwoE8bDKhUpXChKXr894dMtYZMYv8USrDSmrRkuJuVCtuaTvmq",
  "key21": "jL2igwqxhbYnFzPNnuqvAoHbuWdUTzp7UUKqcHMipu95ddPbEZ3x3C6FB85f1KQPMfVj2edqeGgRpqxscmDxZS4",
  "key22": "4N3sVhHGydfwfWt9K9PHGJYwpQL5SX2AS8uESv7dq37GQjX3fiCy1qxWtdQ91BTXYcBaViqmZHMWiWQn9K5JXWAU",
  "key23": "YnduuGvtqGYSVxsLzBe6dYUj7FZauf3hLtxZBvF2DwX38UX1ZTHjuckVtNjiXYZGnvFHVhHBwKHEAWiK9meXxh8",
  "key24": "67DJdBxfR3iRCjYsM81iejMfDHUae75oLCFYxDFUcQpxLvhYsRaki7H6vSMgWJzBqrZYFjtEVJcY4KJ899hq2cAP",
  "key25": "4VzXHsFv4w314nRnr2Ye11tdzu2uET6Ak9qva8pDz9abbt1W8YuuaEkmNUAhwPnxbLErVJ2Hwbpq8u4Gpnc5Azk",
  "key26": "4K2GgBSxKcuCMQu2sLByZELk3XQuyri4AMpVTnENie77BoHhGAv5iEk12kSqn6MPrpkb4M5pXYrPCQH5Gyfhxkz9"
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
