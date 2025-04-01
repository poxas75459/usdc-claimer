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
    "53Tgz4h5c2AASeX68qJtKvLYw1WyF9xAuy425eENFBcTufunE3eTSnJTnoWM2Pgt8jmC8DMyeFr4yDG7RZQgRyza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gP8f8uRQ817NWaWp6v3s5zFrRPx6RJKiZ2uUrhGujemkydqCe4q4TBZtYRjc3jvR7CUJ525iNdDskxEvMqA5GWS",
  "key1": "5NvpLR9X6Ta1c3qK5HXqMB2wdF3wg1GeixdW7NXekDNvzZxoX7LgRKBfXz2ugvXNMGv8SsiuqRKP5MLxoLvnJXsF",
  "key2": "4nddzKfAHy2qdgMsftZEDt1z58ET5zgEw6H2Vyk55Tr86s8Momh5pFttYRHpkmS7BfD5YQbPsy4TEMj95Lee4MCP",
  "key3": "5FQe7B7DDij2f8fuUgM9LEGLAcAkejoSqCVn8KNn8NGX9aHGC6g3TDnF1hQijzQQqSaLNkN9WYxSVFjt2SkoCgNj",
  "key4": "23LBaPyZZwRoaXQpDNnbtsFFQgEJL7rUwM2Dfw9edHG3JF9qrdWbC5zYCSzQtB9S5DVUMWPjkdds1osHJa3YP4gk",
  "key5": "3KkFPMSuVcbC1gATtMauFZqz9rbLq7ZYhFHYiMjXg6gRNusmdZTA3NXUi6DZEk5agZx5ii9GCAereNy8Q7edmGsQ",
  "key6": "59fUYR861YFaSUfu3zAikFDcp7xZcDTrkWkpvLvzSFG5eQRrNaVTzm2CdBC1R5WE4UPZYFztJuvkDqNYskDFXjtt",
  "key7": "2yfMYMfatyWHjeyPzXyavbyVa9eNwhEt7kLvAwmcnTqzSD5128SAtfocdfG6SVC3p2qPpDBs5JffP7wKJUb7Zgct",
  "key8": "3WXsfqtSS2WHnME9XktJQW1gGa77ZCVvw9yK4rvUDFpeQTBKMEXPxNqbf1n6txecdErYdXxLf9e7t1nddjEyg5Fu",
  "key9": "5V793Tkrp1VUACebzXk9PRqS8w82MN5U9gXutGT6yrAk7fJzbM8YYf8WXMJxiSG6gP3QsP2pAsaio7HTSYstWyCD",
  "key10": "hRx78zec9ne7sa6SoTJ6gnhUbDpAoP3HNZKaTfAkknXYWnSLxWasd8RoZopHuBVAL3M6PhZffgH9K2HmzXf2y9A",
  "key11": "4ApQB7SXJ6FkqNWzEwPLNNCtRFkBF2mdMPm2xQYpvfjD1b9XYshEyL9ZgzAUm2tNDdw77WkxbQV2QMK2LbyL7W6X",
  "key12": "4RBhbT3YbmQq6c2y8odPDn9XZ3YWTgQFeRVU4WntFNaNjaFQ4pdyU3KiqJ2T4Y2wMRxf1Gc36JVLydPdfMNoHgEZ",
  "key13": "58EVNtXZRb1gTw5YKhdNRcaLjEo2xb2d4nqMhTzfu3BsPLFoFFk6q6VKyNJPFGebRd8o4nZvQ1pmEXvF4ng4zT1t",
  "key14": "5pMfNwtgmmZSKdgfgdWZd9ihsJe58x1j65bA5nenJPypvQzZQ2swyrfnsybs7Ab3k6P4JbMTkzfZ3soyWiU26H9A",
  "key15": "5KN3GsrCbtjcxWaTCNBxs47PEh4daeNsmyvaFRYTzMvHirRKxexrdDBR1qXhGuegZGAzirdFPNsRBMYmhWomo6LK",
  "key16": "3V8LgzK6Ur9nBJYRmAxksDir8dGtUryQFuv5jmp4y1x773KshoWW9zUhcsyvdAAm9oXZ2gQ96tfwucro1bjk54Fi",
  "key17": "3pLbejQKgtWj9nBrFd7sMyFHHJTv4f9aCKFk32jTYtti7ABHutUxK1u3QCwcRLWNHVwngGh9xypJxK6pd9TF17je",
  "key18": "31MzsoSvMvJjTeitC7FkTSZrSrjqn7BanHa936uK3x7zxny8hjMBVCRinV1tRrfjB9M5bbBytYj4PhpDJ6vgnucA",
  "key19": "5w574dGi7FBZFYXjzjYa4ZypSnic6u75HVd5bnZFMUj9VFjYb8p1UYy8xR77fXXZbwzc9fRECU916jpcSunmbXZp",
  "key20": "4P8tufEBiJvoDzpku2CoCPcMm2VYAVMHN9eQkf1YNRDhqHa6BAAke33QRDgdD9Q87aMDLQQUJ8avjG4HSsnLjfbR",
  "key21": "22yyQQssku8qB43jdqqpUKWDU7aRDny2ZdUfeVdA8GBR5kv6azcXWhKtSiR4mWcvunnb9xbkAcJVxfqxSPcHwmQc",
  "key22": "4HMZCUDnjkcuhaydXixaz74F443gzAGGBfZDH9zCsVngJRkutD65HNNwCZey7XNXDXRLHUe4dPfKt9zT2qSvXSUh",
  "key23": "61xDwsgoi25bvNiC6UeJea83zbSPbzqDREvNAfrLQNMqkUiHzDhYhvqj3yFeWZqZ8TTBZ8SZVfWzfJtfmQFDrzJX",
  "key24": "2zm6WHAZgXBJiGfMGToPyqWsjYFXqzsithTT8nTCKbLPcKBx1jFTaqpsC3JoVv9DuB7VFMqjYicXX2zuF3JU5oeW",
  "key25": "4mM6Mv8r9GC13XsXwwTg1q3Nzz9stbeCFyZxveAhHcg8ugWKDjPQ6JmDDymYFEiS8P7CDSkoXPwxRTKocxDaEaXH",
  "key26": "XCaiERww693sd74tt5yjk1PkBL8Cp1yXYgayuWeY6RoyN8gCVgHc8GT7XTJLDbwGD4uRiQLDWvSQk8ZeqgCvmbx",
  "key27": "2zj1QvwaRf2cdpxo18QtNDmxEWXS9EVCHgy16ue5rBME6j7pbYCsfsitSWrazPMTUF1tKzkeNShv53zsoiRigJy6",
  "key28": "4gmTLpN2d6X6wxCLWHBHBwdiUUA5ruMzf8qcRHvpyYGrggsKBFgdUWXjFoihks234SZmQB2WvA7PZ7TGg7dr2D1S",
  "key29": "35CeYavQ4a1WrgdunnYpdCRkrnSjw4bYuMaAHAsFQmTUpY5hythH7DxqsAFh2XB2JR4CLQ5M7ySKWsnVEN32G8it",
  "key30": "27tuNTaJzT1rrqHmuRAygVwqxQ93yWYXzwiiLHGsg28dH7PUt77fAkNfLRKNDKvoZ8LJUu79Cyp8CSSBzS4v1Jzc",
  "key31": "3hzq8y1TqgMuf1KebhQ32Mf7gHdHMdXebgjAVA3w1ZmyyWgY4AJAL4XtVzRP2NUm4tbgkawM1x6QbSGHmqpss2jQ",
  "key32": "4iTbfPrQY4QT8vimKz2KQgUjTpqnqYpnRUsVK5Ukyn3V8XYGmC1xNFuZfjWb9eALBMcBGWh7WQ3GZzGsHiwdW3Ek",
  "key33": "gvtKhnyQgVhjuGh37EAeQanU2fsTziKBfaGMNGXddD1GwmuPQpaBwhor55WuK6RM4gasRK2h22eTHxLUgVgACS9",
  "key34": "MGC7iKKYztnU3s3eSfzYkbVWcpbEE4wWxmwpSXD6ngDgbY8BwPe7b4tS4mjpbYS8Z1bmnbMUJfsmfVYxyU9RiBE",
  "key35": "33QcTEUERjZv2NumMAkqutpcfDXLGK7mTadEoT8vYQdkdsyNAZbQeFjvidwpuGDoAhs3obfDgWDdw7iCj5YuTSjY",
  "key36": "sV31nPEZz4aEpx3CiSAPmTGE1qAQbW93JUVPwKoGM7ETZFguoDLmnHmQu1mCjT3MiqjmyKqE5ZdpBaYDx8FFY7G",
  "key37": "2XbJm65ybyfqFFsLaYSH7dP3BTDbfEtjQHg5vqzH4SGitvqQedBpERWRQcLMTRWya66w5Cj76aMr91DPERpDKvEj",
  "key38": "62y9HhHkh6uDeB3tfqmfJDHS33WfKwhfqR3zLptVwUrWYpGiBBDpZ2wKZeEJc3UrbR1hp1m4YjUNpyoYZM9Er99W",
  "key39": "2Jux77YH3rEBAyPiUbtRUtAAwNJhedwB269E9Ws9RGq1LkxAC3icien2HNWMAwB1EShwCbtduhcwF5MJhxeNb5n9",
  "key40": "4LwRyRxwbT9LDpUv9dG3GEjouhrKR7B5bZCRuHVcQ71i9ZCsDAjziPdBqRxUigPAk13BWUS2X2DfDfJKDYi79Mpr",
  "key41": "5RgXuz7kVF5BjJ3SiPW3sipPDB2vF5v7FKcQchvAcqdj5T1HQg6g9PzXDWcgWSr5NQazhRBKV9wBqTrZyzJ1PoaL",
  "key42": "3yoEAw6d8fEn6WS4QzUoV89TEKg27vVwtNbu8mma3i12rqp8HgNhcspWr8au2U8HbqGs8zfyaH8ssupRksYGNe8P"
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
