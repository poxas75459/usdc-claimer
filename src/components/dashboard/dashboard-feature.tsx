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
    "537oXt2jFZ8e17J8QUKCZoS9Rs8x4NNNUxX6hWE79EFVsLd3exRvbkujp7mzV1SJf4ruGfiHN3y4D2VcWJYZMzTZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NBBFbkgcZwZFRG6TNYm9cNeyqyejJgACyUZ6LPjLwmxTBiJqp3mYturB3cemHuTVRQbQBfdsRKYu6DeT8awv8ag",
  "key1": "2Gnq5Knm9PkaW2FZtmx5eJADjdnqmvLo8mxRENR59uiS8DMJYvhhFk34N2N2n8iqsQE71qsBA3GMWuH1qzusS3nP",
  "key2": "o6Sb3k6qVncbeRMvvQHxiJyanwtVgmKmgVTqxD2rnpEzyXiywL2BaztxpyakjwiLbBxiyE3MdEBegLTMtsa2qoj",
  "key3": "45b8irNrkhSUvYZPpXpSpdW79Vb6mD2tvmjrneVVHRMbiG12AorJKJQmbNVx1hE7wxeHmhxnsckzSLQUuv1jngAg",
  "key4": "5VY6NXsrBFxFxPwXrWHvnA97qQdfYR5YoeqGmAFHCht6zjPNLBZSaQrrDFqQiDPAXSDC5LT6tzpxJbwzwyjDudQc",
  "key5": "2KPDwu8XRXgtwjjT9b7md9fwPqatsbyia2gurgfveY3tv8SSxyMewgh3WbXmZqNqJR9rN1MQN3qgFWFB6mwTcG9V",
  "key6": "dxYJ58Rq3xazGqZTFt7qbToiSzaMBRCkdAP1bMy8hvVirTn8Ye2Bz3skM35TBJJTKLY1zPeQeMZzFEQZNL3XYSD",
  "key7": "3mGtdcx1i7ZTxQ7fFvy8K71QA5DJtZiKXxy7nndMERwHBZ9kJX1C7CzYsGKN1s2ETUdVGKQzBhgWpnGRZzG5T89S",
  "key8": "2zGgmC6gt6djv1Kbgo4AT7xyg2h9W4F1KZpYLwvwLuB368Sw3uPoWeEdhphdQNz1PgpXtPJhsUQvupNSfKLomf1v",
  "key9": "3kXZUufXmSVQPtaLrcpMrxLztoKE4x7tWmTNJpWwnQ9Ep28Pf95GzfhiefK92aofmd8BjLMYK6adKc8UM5JRRhs3",
  "key10": "VKQTh1QdXZTdb9tRuFNWuNY4FGBM65gAtbzjku5S6e6XmSXZjNrmfq3c7KsECTV8RHJHqpnFo1VbFEHrpSm2tug",
  "key11": "5kQ8Y52uL94NZ87CfGwSdUuvtXt5YJdKSxtH8jPvwzHkS2fXfcxjFC4ojhvoNqQN4CaNTVV9JTLP3axgpjv6mH3v",
  "key12": "2RDMsjYfoH7b5xj6YGsHPGgsTihaVr8cnQHAxPhvyxVHTyu1eo8JxZy5seJm8qYR7eKRToyWEBU9HTsTgUuXXeXM",
  "key13": "4sRiCjVfaPhFZtUUMeoqjsrF3jeshXngPNQZEepuWaWd3jZ2ZTsVWV4ybXdFVJHEmZrc4hjTUAwFpZcWxcGzuFkW",
  "key14": "pAvG7PGmJbXNGQsHT58cNXXjG5f6gZZB8KMvBgat3eV4hQS4N4mAQ8SioZ23Ud1eBcxfHxMDm7pQFw4nnuVcMFq",
  "key15": "5ZE22DuDTP7jFd67AQJ1j3F29hVExXgh7EhmYh5QE4VqVeUZjKJpxCRXPmmm3TKtSQRvBkZc1RUmbCFzg5UfWiyQ",
  "key16": "2dJZFbTgnSZuyr2bzsVy9BnLMY8QdFhWTFBMZAWSmpAsxWexeC4QimEvik1YfYo4JqnN2uk5yax1bH9StwhpjeUw",
  "key17": "4NdydMPWuF3RbbFBW8Qk7nwFbwpbXoUbNHsfB63HSHYBGobCLpCAnhnKWy1XXJRLjr11mtBJUwMvtrNtZTZtykzR",
  "key18": "hseP2CcTvWBz7tZUXsosHAwxzxT6XLnb473JdQAawrJpZidCBeYunDDmT41Ra7Ds78S2MaeHaQ8VBhirTej7rzm",
  "key19": "5bKxj7nVVzSYBbEf8U8EiztGsckVk8j2WJWZ5WVjbq6A9k2DrpPzjBmJ19LvV8yqydeZj83XqHN2kipqxKgNvtLG",
  "key20": "5jKcm4eu2YJsgjinpXzMJjy5exFrdajr3SBim9j3165CVX5TG5bB53VKmajsxn59Qr95CMGck65UeeRdu1CBQQj9",
  "key21": "2vgWpfQkxhquCMBbRZritB81HynEY3eoEw5ucvEHU3nyZoT6kBo9JCepjFqk3RvXUn7H1r8bWedhCdpCPuG9yvXq",
  "key22": "7pnwYRse1JHUPZB5yCrzyXFhMrKF77tqVacaNVfPFs6iqPVGz1ZTrD9PZH1PThSDemei3sgmjgYZnAuwWZmTvsL",
  "key23": "5EFNY78RQNsiLfy5gHukzmCmFy85ggBK7AjCRi1xYHnhTeRVix1a6usonXBmhVfSqnQNUr2qPwLZUiPKDBdaHhJu",
  "key24": "4NqFnfYD1cVs3bYxDhRnnVcFjsp114iaVT4qwQN6Np8x5xoMx8aVjJqWfUz3rDc3v4aEVWR4YtMcFCD1iA9PFG4y",
  "key25": "2MeJPUckQJeWwWqvMwW1kktVzvQqy2bB59rTbkweyasmDXhAyUQhkFZQqfaxsDqawn65HRtvCwyqYbfBTVoepAK3",
  "key26": "2Gr48LPGVeiF9gcZj26oG872xfZiMkTKGazWVkuW4jGhDxXYh3wLF7FXDWuAEzqYe5zordcmhD7GTyCvgoW6LB1a",
  "key27": "ep9oZ2XHSTPmGRPoLwGsykArErXmAVUMiVBjUJzKM9sVS725HwLUrjzbCan4WpwqMggBieQfFcw7irk9fmP4ouR",
  "key28": "2RkTYJj9Sx47J8qPMRmyNG4yGT76HMG2JCa3Sjjdqmr7GcA6yPpMBrRFW5228T5v97wC2aJZyJtvNGuXVDTZbnGT",
  "key29": "4W6jaa1u1B5vdstUW2saC35MmQDQFquh7D9TKQmetARtpvxHixioRRKsPZAarCYVQHJuzpysgXSmAe8RBf4SLi2s",
  "key30": "xHvSKSJuj42jaLV3SHg7fjh84GZEPGA4jwJ1c5BbMgYq2FfSFmfsPrXqtw3f2vmkw9nB7dHEgRhVG2Hn1b7Vs5m",
  "key31": "3bjVpX22RvRDXJkgqjU19oCEPrc36vpJZQ3ZrnTAYrm3NV5C4myfnHHNR9UgDGDLStPdAstJrn4CZAv365NB7QGR",
  "key32": "P4o5KRouuv5bm1uhaEg4vattV1whTcx4aiNRZ8ynScoE9mX6cQNjRqFgJkShcPb9z7gwExauXKkcWMaMnMDpd4Q"
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
