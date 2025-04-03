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
    "5yH3Ca52JcdWN9HgthXH9DPHf2nrY2wKFFSYN5uKCvGDZcMngaNKHsCr2cQz8DPgZuVG5inR9bXSftVqK85z8Wd4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P8ERyi6z9vYsGB2nLT2ZLvmZhcJaFgmi9xeP63o5eHuwKKfgKLeB5Jf9pZaeDvh4knFvkeNLyAyHuJPN4jBbGsF",
  "key1": "2rAdbY3dBLtfGeUFVnckT8ii2zwrKGspow6JvUDZHg72T8KtYDqo3ijWEdmP3gWcuY11ZBm5rdySJYZEDDknTgh1",
  "key2": "44h9Saoc4f8v4whSRUQ8J23t65qaTWhhAngShbpTjKPZKt7bTgQuE9657WJWAFfSKioZ7CQD4orBBaMd2cUkvsEh",
  "key3": "63UDU5DGiGTiP6wa5DUCFkFEtL2otawKHR3Maf7yK9zcP1Ey2h7VcTQv8r1hXrhwCM9o43w2Ln1NB6DTKCTqUAyH",
  "key4": "Tm7pamz2kLJvxjDidvv796EDNCZtS4YNziHvaFYkP8G6e1cbcHDJqjdRYhXbEiKuRaQVeKf39eaxk3W3WLn6rLQ",
  "key5": "3wmGSQyVqFe7xQnyJySYoqp7DEmLTLzZvtXVgaomBRSMuNKWtGKpGfihuLQksrTdxTR2ugfU63ZrgKz8A11fL5a5",
  "key6": "552NBGvyTrH9k5Cyj71abrem9s8ikemfu2gJJVE9ufPdHX7J3xf3JpBG6UPdA8nw6x1q49n2Tpgruzf1bR3qBvxD",
  "key7": "4BSjJGmeRsnpic9JcMUPEJh285aeRbgdGddQ1ue9nMo92LJ4AikBAWj1vqANDyQ5wvHJe8tKd1nQbAzABjmjvQSt",
  "key8": "5wu1Xo5ZUFz3U5AJHHBYXwfvsEcmDaqE82JZ6R2hgsY2N6rMWvhm1oRzVJ2zWYEJyAvo9xSc8C9cZTccFyz3j4B3",
  "key9": "4KhhS5GmUDZ8qh5qxtrqtvK98nHrZZfkCvoSEaqe3zCKpTVLwjaLd1MrxcGHFsigZkopJxCBqewVHkeHF4yvH1xj",
  "key10": "59BkE5PyQN4TY1ofmmnQABdv2WZmhL5YMXvqyrU4yQE8TXTEVJ7AFHw4yA41TPteBFE3FGtS8vqa63NuFN8cTtbx",
  "key11": "5mM72tfUocJSFQehhkCyhnc438K69DshUxpWy8HbdGX6QmSg11MVRmUDgq7Q5VVTyRqsM6GkMAuR729GudbmXcAQ",
  "key12": "TbrcxTeU2iBFzJkpQQX2Wd1wd1LfLk2R8y6N4NMWVnbSjWqPXvhfQBj4taDsBxBzKVNkZdN72E2Lk4rZ9bdnGi8",
  "key13": "RG8HicGKndiuCFgTkH6fKshBgihLuDBASbad3PZXcpUJdveJpfoNXbEUo9wmEXmBbxvjqzW7ZGvf3eYTi4mdDuk",
  "key14": "4j4gNncRzfn23VFNNprqmHffL67BYFGnzAXqzC7uXXr5KxFi7L8kGL2Dc4YNtRW9kHamdzXTMJjCvHLx7bnzxQMp",
  "key15": "3bzvpBiVuWi86of5V6eeNiJaFrf2NGXXhZRABPp3QFDmsU9GYE7pZmPHtJGbWR6dZkPyf621PQsPqW3RJNHj4HGf",
  "key16": "52TsFvCq16tpqQxVmNurzFnzpXW6FnQJQwk8MGFuUjkskxryvaxsYqd6MGTeXakzmGLYvmgBEpT4hw2DoNt4Qk6",
  "key17": "3bZKer2vwN4Ta3FNAH89vdZcoYSDqHHDz9xzA6qznHN4y9g2rkYMg53A1Fjs7624JaZq72AtxiM76gRbg7As1PSs",
  "key18": "3KZxwefsC8CwmsLn8MXmhewAvdSJa3eZcpuBGGuT17pgdFqhuEN81T3pCwjFgkSJqh8cpPi8PKQTfrj6ooN86L8N",
  "key19": "3fuoLC1Ntq8FrHaB7boj54XxitFtpUkunChU6Z6bmE7dzaFe8BgvFnXYBkLQ4yYtWSDmJtSmBxfswnP25SpJnS9v",
  "key20": "4AZwHujTmbRFn7J2UZ8bhTmYthP9x9rff6wGXFtHPmUJDaD8s3MeLwSPht3dPtRspWF5zqgDfyHjUKqNXuTMLSa7",
  "key21": "22GcchKhdymMJf9rEMLaHxaBVHJ1MCMLWhxE2nhxysCpMJ3cSaw63gPUVzzp6KDFFeG7tnxeDDywQhdbo4ADERhm",
  "key22": "4GuXduvzmUVTTfcWsY1WFKdMWFR11KDGRdLJYEx6LmVik8TqScA5eCHzu7c2JKhqeRtXA4bpBVDFAPUjRVzNVvFZ",
  "key23": "3ZK34soqyU6VsBqHevCVC3Z5osmWs5PamvXSu4UudaiptAEbhGJa2eq7KwkiZdhKgcFSruFoJyi5SY7m33uscxNy",
  "key24": "3LG1fD2Mwnytv9abZ4aCfc1aT8yJZ87tnFtDwsPnDwRVGzgxDfaSkrgbCnHmJQaLUsoGnD1hGfK57PVA7MeNaUKG",
  "key25": "f8DEVxNSyAP1sa61zno7UUYY3sSWjQUV3rCkTvT8QEv2rRzQHv8hmy4P9D9fw5Mq3kZJ3v77hFQSMkh1fx7SqoB",
  "key26": "5Ef4RcjeQ2j5V4gFhEJkzGMDaQcEsA6oNFQx8YE2iHDcw1FMvkQTbpERi2adz1yyHSCR6EsEQhEX83x5Uq5yHpGn",
  "key27": "24tzxZpuzLS9tFkMUKEt1Y97YsTJUAjEa6GKis9PDeptfVUdDAm6x6H5PfNSTtftPYLuS2BHM2dvTj5fLNgMoXW1",
  "key28": "KfEpG2t81by6MNDMiYEB6vKvMB1RnwrkxRzJdcHtLs3ZX41gizgfJRFGq4bgkZLfhgvH2eacsaU3kfvX5snjAEG",
  "key29": "2yahejGYVcaUGcnoFDGnWBtgtYQWndX3bGcYR4nbPPRvYpf5E6izBPq9DRzPtdcf1qYizprXMhmrDLu4Czn7DYvo",
  "key30": "2DNv55td5Pn67FNbWCJ9iQnyEETRQibPpy8zNobnHRQtvDBmVV4f822GbLJHYnjUjUYrYbwxvg1U3VKyV4By3tJK",
  "key31": "5hEsW3J43nxcFiEQcnyrNimxBwD4kfVvSLkTFxRYUNRJpCaTbPyFwsqhqeLbqM6im1BqiaCN4Mw77D6QUnvNwJXb",
  "key32": "5YWtjdtF7HxhvxitTj7FiyWPDrTPc5ePUx6ZZD36KdaJT3V68orrniNooxLspDvYm46rXNcW6uJNFssLfqWdEqY7",
  "key33": "33sxwCicSmjHZP9TTjWTe1Bi3NVnEAJi33P8gkBzYG9uUNyEb5FTxgpBQcbGJ7W9A8ananKmBacdhTrziWkY7eEy",
  "key34": "4wk6WnBTJyGi4ZJW8zHAggNVgAEoYMiYt4p6BnPymGfs8F6adnVSvDf5ZeXNMVdqdqXrNtAfZmAALuuUgQjjPQsr",
  "key35": "4EMhRU6sEgXEH1YQLW3Wiv5p9eFBtw4jUCMmkoyiDJ3LjoHnnw8eeS7YGgqvP2VK5SHJ5ZZbgrWGjJxCa1ehrEqs"
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
