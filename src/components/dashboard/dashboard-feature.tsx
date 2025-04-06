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
    "5DWkTpCPWmpxnvoANnmmr42gDq261NxTqPkvuMSdBbKENEQ35QSCgsnQcibrSGtbaHcTd21s9BaDdqUe5p21mWjJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hRnYkSnTQKHRwf6jAkZ3izQ2Mqp9mBMo42ELoXaRYw8LwYU8kRXbkoktpXdhejvkFu1stNKh5Hj56JjEZojGaGy",
  "key1": "CKghUFUUKUw2Exk2Vmf6mcbK2yVrgWqjYnSXygC91NzeVNYr3wwmajbeBCqd2obaPiKCVuvNe9U2ro77rAuPEEW",
  "key2": "5UoYksRpWLwYiURuZBu5MrH5THqdHAZgSivjDwP67zD16XXRogKPze28Gf3Cvw7WFbzGSvHMoZpJUdwipPcKVVKk",
  "key3": "485gQ5hPjNXSG83iV8HgMBfiBiZ3wc4LpWjpLTHgBaWiw4UMcqFsUGTCBpqK1xe471ERsB2T7R1LYNs4M2EAZxvX",
  "key4": "49TdsKB3uK5AyQ8FySaYhanj6tCEcPgrstbDbMNbh8hN95TaPq9QjApmPLVGRBP2zQsJ2VghCtTYQfGaRcZVcFJN",
  "key5": "4N6x2DiSXC1ve2vQXuP4Heh4rWK9PhNWs2mvsHT1RFAV5CDvCcKaMQ2ypzPT7iCyUZ3Rf35ebER8dTDB84tn4Fs",
  "key6": "2Mkz1xViVJBR6us4Ji6WM2t4iLzytqV1aYAtCm9CuMicV6FYPoqkzhgPpHswjMdenawwoqvU6EDy4U1ViRUczQjP",
  "key7": "k5rHthHQHAaAWdNjWWgMutkoXrSnGsWm1DxZseN9zibkkAZhPWLQGrucuXf5rwXGbM25GwZ7SPF7aqbmZgBbSUk",
  "key8": "VRS9WPN3u38joR9SXpm7SHycxn6RS1T4gKfkxTXV8Es4GVy7GpH34kzWUiJYMSnWpEgn5wNcxnX4QPpGotxE9Y7",
  "key9": "4tWJ5E869zPBjiFVoH4Qoofch9WAVuqFeVPufw8iS6Mw8Yiw8jKGMdabbCCVJ56C3Q5EMjQ4peZhSZftTgRgoDbi",
  "key10": "3WETWmmdpQgRhzFaETduu8EXReRyiZwQCYJuuzUnBK2a21vn7rujs3pwYtgyHyyEsBDfYPhSYQWSc6pb5C1itdKm",
  "key11": "3JDRxDE2x3q5QKN5G4RjZ6TE167hMa3YnFVQNWyqYKvCGn2S6MxthPchcdgzMbRMRqZg4sBZKqwU4NMKasufCiZq",
  "key12": "5jm1EDqfGnNW6D4x95TyQ5Yf19YY1jz2ac8cvgTLfWNoAPgt4dHaWN8ZrBPhRJM2t5PVXLTNoj1HYUwWZW24HXAx",
  "key13": "3q2NJDh6eJqXftgdj9NLQ5NyFQSVWnPvbLiGHtpqDNfzyhNU56WVBMdxQMHZJVMgQDkKYu2DBWAaejQtp7h28La4",
  "key14": "WPLAwvgwd5E1Y2DFjxy6pBgKuzUFgjUNH3SHJeLQmmRrEKminSzyeMDmo7fbpYQUN2FMcQoBgtKJdYgTsA8hgny",
  "key15": "3B1EKvr52BzTwZkAXzsRY7AHpvvNGLmPa6kG8Wb3JtHa1E7ATeE8RSJBMVKi1SrxZFEVJRjtxYuYcdo9Cy7kSfCe",
  "key16": "99W5zUbp4VS7YjsY2y2guBekKjCcP6kaWe2vJXnet5jjojqWpw9rdiWGUNboq8z3rmWoJyBGvtPQAArUkYwHS4J",
  "key17": "66wXDPVcufvPbAw3eEDUeFAtM2ncjZTDaQWd1SHd3QFEEZLWTjijzPMyq7mE4TCrKxvuuGTUfnh9dPCJXm5M8a1P",
  "key18": "23By3Kmdp1YNgPVM2JxRDr4nqnJ574Hcow256FH5eB6FCViWyGSvWycZVF3kMtuRfqkoExMbSQfpG28FUJ4QzB3o",
  "key19": "4ogrbprYebLvDk1hTx6kjPnK4sPTv7aUZfwwbJe1dyGZJXmMSkiPzU3HSHt94tTUN5BtEtndHDHaZPyRmo1bfVSa",
  "key20": "4ThF79uK9FJjYqQ1WxewZP8BJg52HQW2RjfYAhRqvRGCqGCZpTArZMKy35nTjyxt9V8BGNGUbFEKFKgz2zUGdoSZ",
  "key21": "efqK19yrMhrTEj62pfDeePTvULTEjt3Z4JAzmB7oD28SAtmdoR9bWDQbyftEKw2ZBcHky7Msxc7Jja5XYNpWjxU",
  "key22": "2RjhBSLFw2ycQdqdbKzW5SpWYCAgLBydCfTxDCgAm9c9TubGs11dJ56jzQdx5aPXkf6V6hBip9JMX8JNqhAZKhZd",
  "key23": "5ndPmZ4K9QMnvJCcakP71n9bS2pumLQtbKcPyUafyRYD5Rid9pzCeTe2RBLS7fkaNSZBLaseZG6VNsDfVxAq7rCg",
  "key24": "3pg61KFSBbFer71traMb1HwdUpH6SJph6UR5mudW7oooMR43LhvEZzAhGGBJZuucknUmYomqDmGJ7hkiK9ygcMHs",
  "key25": "56XTtya4tY7HW1JfgCQMm7h3EqmQj8fJLULM58siC3zSEWLi1rPKWQ8hFduVfRMX6gJL7GwqRgHwSfvQmbNF2QGu",
  "key26": "CmNXKLJH5m5KDzcb8v3ZYgmfGMZnbadiUi39uGSUCLPqpsaVEQg6EMtP9DaHbGyDMJmHHa5PFvVNVQzAKMquWLj",
  "key27": "39udc8mDeozKNnp3cssjKQgGZdmBPTEztUJZgo1vtXyojVuZLh23HqVEYeSGYv9RERhxUQQ6jmu1DktUBGxMDxsD",
  "key28": "TgqWtESXxAfs4yoZxS1UscnJTNcHHnqNq1fyF9oMd5KLX4abVfuwscZVvcmxqpv1udtY2KRbdQfxhve1hhCNHvW",
  "key29": "4hESfLLcrGec6ctF7a9t4CAwXp9d2HEr7dz59XVZoG7CArFsybsmeLEmd3E2jEoxLtd18CMQfCgLYybPwbJopPtJ",
  "key30": "5A47ZK1ssXzNGaGBYagqerKCM1wjoZjhDywgSAmNaLsJSfWX8XY1NHSCdjvc4wKdyMWaURQE9syiigqxzbUYbZi9",
  "key31": "LBL4ieKkvRghSWV6VLV8GvNGE5AHNGE9VkNEhGgubnpUXXMYGu7gPZbKAKngAqcbnTn1rDXXYsZJNjhGGknb73h",
  "key32": "3HvLars9JKrYSmQtxM6oaXE5jC9kEDVL3qoZBkBKMgGDx6eC2UgzKaQT4Lg2eo7yHTZeZzonbnyGGbFgJpV7APVn",
  "key33": "2K9G6e4N5DzQVaFPX2LedkvUhBUAgHsNfnaV1L6xUKP3MM7pSk5xRgCKTcmdw4VvvPjjR5zWXZEwNYoGadFJRGGF",
  "key34": "kwd2uzy4jBR8sgpJfqWpboMdvXY32pWm7oyFg9mtobmABVfQvgWyZQ6qZCLzU1Yb76et8nG5RKEp3VDAidNTV9d",
  "key35": "4hPDETPdNVBVrK7grh6FVnujL3wnvxyjdGF2ybKsCjU9AVdqPdeQBBTWv8o97BWdDH9S56mP6U7iAMFE4FYcao6S",
  "key36": "4AndCyXFpz4rTnc56Nfs4xMKGPJAMZWkzsgup5wVfTYqYJRNqwsZAHwyV9tVVXirPtCSWU8ADJ7UE3whC6rJPsrS",
  "key37": "3eWfXYymXQPx8KMzZ3x6yPP3U8Bj9pwacpTjA26oH8i28DydCSGVVTUyDDquV13vb4X2MY6vx33zZCeumiQ3FSkE",
  "key38": "5swFVCp21bwuVhoF4HeE4ckyosqD6d6rGbvgHXmH6n2t8R3ewWGSSt9vBbnoREqWrwyFoXA6sH3qRpSjwYRNViNf",
  "key39": "4PMv6JmZuHHAUBq8YWE8ERkARTza4pJUKVYmaAjffBqTd2qiUUNqn84V2dPAjLUPJzishhrcqphJSWHdBRMr52Vk",
  "key40": "2cXCU5kUpHYfL6iQB6r4R5WnfkPvzM634NSb8ojqV26poSC96b7KMkvsJde9332RRLwr3YAN7gQ2uQ5WyFQqQ8SL"
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
