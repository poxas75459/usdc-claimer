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
    "5hMgdxvBG8hyCt7y6ZpFt1vFWPJxLdXJ7aRo8dvkS3cHtABZe8Nog449uXwEmeC4wL7p41WpYAMRAmkqQPFm83sn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HB6ow1xmG5P6h8Au77NMYMDQ9doLQa2jCjCkj5GA3UiFu1ALG7FvehNkttZdr7ygUWqh1vm8sfD5quD5iBamAn1",
  "key1": "3qKsAF4yMSR1pc2ZFeKMhAKyjtgcqJdhsniv6a6ngGUJp8vTwph5iedarRdrXsWPu9pDzBLULMe2y5XpnjknjBmw",
  "key2": "2yU38NuS5DPchKZqPYJnkK5BcsTYNwSMX4pNtTa1QvFecTMr1BaTYQgWmWGbPiTTspqVyXGX3RY9RpEsny7iUwPu",
  "key3": "22ffnixcv8iR2mu58Hdw9e9SLqC3aiU8231uCyXECUDCd8pqSujn4Ng4dT5UxYvEnbgqPCLXiCpCq2k3p6yLS75p",
  "key4": "6pG96hJYjAmxMKDCSreGKjumG2HujU7TavcDwuepjzZ8CqsPrMNwaqNxCpC6WdT5dz61stEbRd5Qv9T8SiX27km",
  "key5": "22euCqZ3LAdqs4f51oPaRJyeg9gfiyD2bhT4ijzx6SeSaKGRCQeuJ2SJf4r6pW7tpQ3ZGPXXpZZ3iymPErQgRDaW",
  "key6": "3j5jegbeKe4hHcvoxYszksu9EnfwYcQb3KYRhJcobseYJtj9EcXJuYQ3QVZhRUxPiKyexGDP38YJaMAGjvPUwzxd",
  "key7": "3ZReUh2wTBdurgS2HejAFnfF2DvK2gQwJav1e6LDhvWUrDpg796g3ikVHcT5S2FV5zCp8E3SDeoRkgaWFHzA5csW",
  "key8": "vbV7LokpJDd2gqAQorJgzN2jSAjx5o8wRUXQVVVd68otnZVpKksjfCmmzuS6pHnTnAZ4CH27cqudEn9qGWQ5kJU",
  "key9": "3ff5aR6UmJziYc5NuBu8CQzYBhYgFUt2pNZXTFan85D9gjtjLWhP6VX2hSEzg25GzVZwQea18QstNCApzHjN3JML",
  "key10": "3sNhW3s7uPXif3wK9V9YgUorX6ZKs3XgsqUbwxM6unKYWUbh6XrBXFi8yXTN51TWkCV2RmamDxvNeTyoRc3AGqfr",
  "key11": "hWAuHLRYNKJfeytkqyn9puTtnYeJww9vQrrtD1EJYpair2bgX3hnFD7zvbXnvEZzdijhntERyxotvyLDezTNuwf",
  "key12": "2cBCbpn4Eh2jKrGCaGyFQGhzfjvTxdWXLxRodQJGy357HeHiN7QLeQGGWUZX2yF4KizC2EEAw7H23a6ajz1waJsE",
  "key13": "VtJo4czLRKm22n73KJjJ2CWT244Mwqk93UgECVkpnXUtMM4dyEBisETPPiyWHWoyeXnvDRDCmqL8GxHyNkXr1s7",
  "key14": "2ksnnv2utgt1P2JNE2raP6cM2q8NoUv2nvePeZyongu5wcgjXYJQxv3vTH3xHNoBvMkUcbnsVpvwNEt4R8viWujm",
  "key15": "516VFZ34mKxsp9hxhD8VBugQ58p8tGWyyV4swzzAw4rzw5YugGaSgs8wHFFeDLarQm78p9G2nfqfv4vZuSV4Jfey",
  "key16": "4BPuAmpTRYKHiHyc8pQaaUZoAbDhLcB4RVmYaaWQfK2Jp1YMK9NUDR6vVpVwGzPGg85h8fiSGmAy6xLPFgcSfcop",
  "key17": "5o7JrRrzq7TtBwYeMH3kMHqnXsdCPsiLjYbsRz2D3MiV5A6oRZdr6N1BVauEGiS1S5Vb6KWjyotuPEcQKvjeWYmV",
  "key18": "32JrzUTbSmGrUVBYZi8Ev8WpFC2nDau3VeHDcDyeLsX6fynNU2CSbPShMvbBVnxERw7d9z1tdrgsXYg78gt9avMp",
  "key19": "4ZgNZqpL4mSCMJYbyJ34qZFjaNipM3vL3eZPUqgKwTptmYpM3tHSDE8iQxoJmXBz8BJtaAyFedFRprhysS7W2ntw",
  "key20": "5MRsX5McDGjr1d9mdNYL7Nz8acSxdJG1CV63d3g5UTK73z2xXbRX2NwfASB4movaYMwhuMVedG113Dc1EmDv9k8h",
  "key21": "2vxuJhqbD78FmbC1W6JiDczCjdkxbaUcT4DmkJPAVMXSSkebjsULg1b4Cph6mJV5ef3VuD286ZGtAq1YARcdqRF",
  "key22": "3Y8p2rY6oBrv4mNj9nsyUFmsXYNXpSyGCv7fW1CCrFFNkn7S26q1xCQDTtTvgNPrYNSYtY2CoxJBXDEhJEWnHBcS",
  "key23": "2iSymViPaUP3W95CcKKkzggYzde6K3p829rY7k1C75XzXqQb9ZPfzYATuUsc3t1bjUAtG6MdV6pWJiCYgLArEubj",
  "key24": "52JYMcRoBVLzHhYgx2E5nxxGk4JBTPQpx7aHcbaToPfgv1Xaie7UzjFCm4cd3pemkaGPByBBXC8vEf1fDi6QatTf",
  "key25": "JdryAhtfaK289GdKFdM7MYzjKU65tnTE8EJJF7qeE1fLrVfwpHcFgBreq51xiigFojxT57yMZ7pzGRnXuZNsq55",
  "key26": "xWLa2wokW3UA6Yt2u2V6avaYZFY5TfnULmnBHqMmhGYVYicc44ZVcY47xKJhLyfuVawXs8QVK2tL3YoA7bD8J84",
  "key27": "4BKQuBEKFjStyXtuG8ZF79pJeybif4NCferhie4cMJiY3htyYBa5t6gGFNtfCBXScTYyLUmWLVoPMAfecSZy76bB",
  "key28": "2fYk7Fwwn3ismoXSL3ZC6gfKdTaMtDLjJKkaT6RiiWiAoGyPGWgy4TWGptP34GdSF8YktYEmK73wWx6SqYwyWsfN"
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
