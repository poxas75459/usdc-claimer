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
    "qtzrHGeRkQawuNGMKCWSbqxJz1T1iQk8VmiJgtu6sGm7DEvjZQRpTXtpNXR6YApVyz9e1mg57VUrVmNFjsSXk75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DA3PQXSjjKShy2a3YCxYmb83EBWaTTyRfapcCMdwtqK1Rsfqg5EyjE6Xt4L9kXcoqXnQ84ixeUyadXWSo5qNRm8",
  "key1": "Fb8HBEr3wLL85TTekzPLBjdZciKLwAJRgHuRoxgQA4Vvt8XKNwuLuQ3wDnj9bVFRpgPnxE1wezpvsAtqJMm8soa",
  "key2": "2iiJrhWF2hDGzrX8cpxfpvcCkPPpvwaE7qzonbw8QaiBcMs53p4kL7YwT4r6BZcBHNE9cB3SFedXgqBNPMF4VH3d",
  "key3": "9gTtRDD8ZrXPqR9KxzYvFQze5EudQGDMV52wtxfaonRETd9b3PrzpMhb2s4RL9af5sqYn6omei3iKTCi8zvkdb8",
  "key4": "61j8QJB3fDuE2E5DLTzhH8L3KkbwppT44WibscXqXCjzctB759pBgpZaTthbbDPJmWFXZBr9GGssH3UvNALAT29b",
  "key5": "ReQ2kVABRZk7UfzqYpez2w2iPcLdiir4heJzeyaGwMQSqwijPvrrrSsg5DsdWb2Y3WBUhqbGHQ1mMqXWkHEuTPA",
  "key6": "2MRuN1EcMv2MDWPbnwpkCR3atjLDUhDNbZLfizwKY7ZJZc6SQMfCMJg2M2aNfLzTMh85fUhdVdGCkuQLDSjRrvWf",
  "key7": "44GY22CUVoMz2y6hFSaZTgDrLnc58kYB8qJiC2tTj6ydxMeHvPiGBmcQnZndWkWgPtwiY7saNAbkcdxkq4kjGkvn",
  "key8": "2rCvtPrWSTPFA3RPgGRwp9CEMb1fJMoNDDvdVQQMwF2zvzDRmLW3XsUp6Vgv5YiqUXMojADqepjVZQKYitoTTzQH",
  "key9": "3nt31mTDFAxRAXcXNNboy5J8vPwsnANNkeYx9KiGCcnkaYztMXzBXydThcFdNKMuNoXZtm3iqScDtAZC2RdA1z7y",
  "key10": "3F3FdF1eKj1hp4gg7dFrZE2pW8ij8foiRvHyVLMYggbcvPRdC1iGTZiCGeLRfJTKXPGk9wdZTsu3RHQjjqt5F6PE",
  "key11": "2YKiFnjhffy6wXxTv5ZM2MVn9E6aduXkpd2LzGCoHY2yCD16i5PEDrJj6FjpXtFxu3jRP8khKLmmxKMgWeu5fUUj",
  "key12": "5VfbLYB8fnDqN4VMzqDWf1CyqLToK8VuUrA5goWCygWSyH57yjfGjcxWzs2LB42eQyWSM5DCxwkjjMZXW6eaCMD2",
  "key13": "5sWgeYymsXE6kLPq7SpLNyYxhWmgXaY9x9rkTwVFyCPUGqv32b92PRgthEU88RfChMGQr6CGviFVGv9Jvt6bbzd5",
  "key14": "2dyhkaQC1p1vfTiAbnMV5LiRsHrtqUExPxxYHKgfquth2NFPH6giHdNE82poVxMhsJnPLLPk2Gw1mTxU8bUs1Q7P",
  "key15": "53vtXvCcmiKJytWAYEFHdWPzhPqjNy19XnTqW2MtzSWpEer3gEzMLYYaJfULitGghoGkWsKVHUwy6mduATSQJaoA",
  "key16": "2o3YdRCzPwez3hY2UcG8fFPRxVtwmSfDuATS9HRiuGM1BK84YLY2q2m1SyVj3QrpiVFLNTNHShknH4P6wYxmL2ST",
  "key17": "AZDLMhfXYSoJxtU9tiR1bGy29HD9K9UmPxzEHn7nowhU1uw4y5pR7dGR4RvojpK4Wx6hXcAoQJhAPH9dSQqUdrf",
  "key18": "4oPaMBCj3GSwXefLj3ud5e6KY9D5Kb6wVsNdyKHxqdqAC5XYVimv7SFZQM4hUwQykZs2VNLXR1EU7vQsRDhEYW8i",
  "key19": "26mGzBNsxVH1e31UecsAF2QSxkXUxWjKTtakttoxJMxAym1cAzLAJxMogUu1wnVfnFdNZNoY2oR7CcnJb48pKv8x",
  "key20": "2AjB2d7rQHDGnSjP6H2y4HmGVii2JAG1FJNWAw8FtnqcnEx8n7ws14qVuJAHjSZZYsHzrYQ4VjrqVGBEni3pY3RH",
  "key21": "44pyMKwwxMAAHviutiaX3ZmmnsQGw57oy1tng8YZFL42UusqRxg9wMAE6SaDZpfgtuUPKZ1oUC8xnnrYX3cj82D7",
  "key22": "4vAhRLj6JpCXvDusXUZWt6xqNu37tjKFZZb1m6dd1S8FW3AHKYrHmqc3ZQC4uNi1nEBjs9fmz6XK14rmQERf3CSG",
  "key23": "4oDGeXPiRUGaQcfBH7u4tUfoxEcjavnpngWCUJu5GxvRmNKKhA2aX6EUjvLPEg93nR8YRSpaLrdmHDY1wTZsLm7",
  "key24": "2c5crXgtzLGSCGMPF45PUNV5tnyp2YLRPv9kZ8LEdwQD3oQ2edtPqe11jhdrG1NzUgSdM2wwGr8Ks9QhDoVCmK2a",
  "key25": "4EuwW14znTP7Bxs475jzKgLjEG6Z2acaU1mW3XnMEAmPjs3fDr6nWEucZ9LNbhU6tAZsJrRBjtQQA9VzE8GcQwen",
  "key26": "4FKTeQwfv5SPempq5ToZdnRVWHAtFvtWYzkPUqkdUdNmUsjRW9s7npJZZ53Xos9MryziTn1fp5SqKKhBbQkMyEqa",
  "key27": "44aZuQUMEDq7jhajXMMkprCgJADEzk757m7ZZE6PvJdVMUKYx9xuSCB6wss3BZ5RGxxnGAtwmg9AZSUNobsn7NYs",
  "key28": "3w2YCr3FLZD5eYVoZJR5vTYKx97XTGsvCbochDp6YFcT1CVBbmtSCY1iaHxdRytPZjpVFLGWxVspvLtwc11ZUXrB",
  "key29": "4mfw4yyiD45yaANV9E3EMgjKVztt6S3p7fpjxPodeqs3NZZ1j6aW3qedHHbrPeMwMp594U5sxbFScFF8MwUoFDHs",
  "key30": "4DkwUG8nhBSkarK7i79FMGeMi7rNG3NnhheYDp1u8hnGrLBiiqN1oujhySjTWnXjTZDECUzkjqTZ4ZrmBp2uWGAW",
  "key31": "59TGcuBs9sy7pHggzaqFCm1DKjHKzUHpRYU51V5THXpRMSERrHDABAheuwzbM4E6A4cSmt2qCJ346xdmiWgtWWeF",
  "key32": "3YxzeBpgej59URQwJyp4BNYq2noSB4yX6CdVFjBLiCoR63Ggxs61JhCW9kBwodwTDuyU57AvFty9tMmkhGne7LvZ",
  "key33": "54BhYyi4jWMRudDXvh5PWsd8tNoNbGSUV74NaLJzFtz7VstzaNQeVh2SMsCJcd1kW2XLARsDzZmxA6ZMGrhuDrUZ",
  "key34": "51EUuHcgN799HjoUAgP6Hi4ppSCddSjMKhARp3vX38D38QZvBFF26b8yH15xsEMxchjPFu7orVRUcgbK67Ny5LSC",
  "key35": "4c54hg7rbzYxSXDmCkysmBhd3DKwwu2FRKzF2QMs22XEbu1EscD43R4daAr2T1K4s7vveVKPnBBtVgL951Vfgwpp",
  "key36": "57Enu3fKTtRyFKuRhv2b6HdqkcRsUVs4pvbqpjFSXMg3pwSHBC15cW6PkhJaFVgL7VDB7ufqrfUAMNYmwNBUWzzE",
  "key37": "4iLo2Fy6U2iEDnvq4wi5gL8bxRWSHbp6PWnb2Bi1Sn5jZvfnFbstpck95H7NtGYrnwbR2hmyRMBtbMyUZuNV6KCy"
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
