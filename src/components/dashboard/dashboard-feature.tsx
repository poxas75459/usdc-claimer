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
    "64UZo4PN3j5PX5m8wb9WbxAi8Xow898BjBrXT6kDT7VNP6n9UNx6thGATtNcjonQxYaow2czboaeipsDUi4RDDgM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KJu86UksaM27RYB83NsDi5x9H3sdeAjF8v1FSenjZbPwthgdvzD7YkYXxxmPrqvLpcZKv7xEoVbTasBPF3t1iEv",
  "key1": "3kbXW6YXNezuv1ByMYyYDWX6YaGKoFUJNQM6XSLs8PcAeEYqDJVxDZrDw5FaKC2SbzTqCa2XhVP2h9SfEPh8xZSn",
  "key2": "5GdxQGuv8tPgWnMtJXeLYQQCYy65YAMkJnFj983hHGyknBHCFmYFJUnoQBgdmw9UZktzRidUu2QRpHh8nuT2ckYC",
  "key3": "2qKTHCZ7LPAuTw8ihGkXX56zR49GBTTd2U96S2kLMd2cECAnvE7uMa4hyX2GeLGPL3DcR3VBmXZuAFpSQAP4EqgR",
  "key4": "4AFEuma9dePbAWDhWkfqEQF7iEDXCDEuRNz7g1rDL4Vq3Kbzg6aEJkra4erB1EewT9WswFeMXo47oz6Rr18UEsRo",
  "key5": "59MrVYSuxNhYf7qmPikz8toiE1qg7gGiGiKfkUkfWEfU9SqiL6Rgt7QpxGVNvgSqL3BUQSfQA2MSuzFBi8rp7QER",
  "key6": "5fynxWpFiptzDpYNt75TAfrGtYnvFGgTQKha67c8du1yVa7yBq1G1MNJTwEpV5V9tbEVpeZ3BP6xg7Ct3mw1Td48",
  "key7": "4bM33xC8Uy7WhzDf6MnYEBUuuuZwrzzcvbP35JdU4Bh81PquCzmH7DC9tvyjk24FaNWCrNbc9RziywaosZkC2wyJ",
  "key8": "55x6Bd1hHJxcRFMDVBzfF3Q3SGBM44bz2kyN2E4Q16oVgkHhJt3gjoNwSdjyBG1QqDeDJLMA97REvWEvsPjafhUQ",
  "key9": "2xNhso9VvFqBwj7iwazsRho1femfvWe7C4eExwQBDWHNbhynV23kgjuVADwsQa5ZHHE3Pt3mTv8mPwuqXQrRLp17",
  "key10": "4FPWJP8GNbbRTA9FYtRHRQL48YBgMTr9hwHfoQJdM9PYx2n3BaheLrawnsx3jzPPPQkGoiZKsTJrKDmiD2x2bnsT",
  "key11": "5SmnwqXoVNtFPe9YCAkBR6mRw1NjnLggEvEfBHQPEhhGzoKsRh4kdEMRxdNERUAukvEKbQPyUoQUw4dViQUQShwV",
  "key12": "4Fk3aQeZAJGA6bnZjrHSTXmPgVUmAiSUaf1WAmkxnfYXgWrMiVQub5WWzfS3Zar6gShJmgFkaW5nd1Az1aGXC8iF",
  "key13": "3sxNeEEZm83Sb45NVrNeK85PqQW3S3KHHf3RceHtgbvfoxqndLru4HfHAj7XZDGZX4ab5bgSqz8zUuG3CuK31qGb",
  "key14": "48PH1K6cUEeFQExMvhxKah8RpYHj3ZxeScTkomUwjKF7hnpnywVN8XPBF2ZhtspAvJ6Qz3vMGwqXTt2kZqacyigU",
  "key15": "28MdgXoQa5CfLB9zpTAdk2BdAhZZ2wHK4FdbeVic9vALoi6L7NjrKBhSEaGRQnnUmRibVV5dd9QTam7Lt2WGP2Xu",
  "key16": "61b6XqqWs9h6CrcELiQSy2K46TyjpFVKTx9ZtFxFr5Uu3S4AZBZu1Vtu58dCEdr4KHBMvoBEis6ipobciB4tCNuH",
  "key17": "2G2DCw9fZrk8aWRfaGJ77cKNLk4hBjD7wVbt9SczbA5qnGLdQyGs7Exiy4vcL6FwMBBLMVNwhnpvm4quftsxYEyx",
  "key18": "42it9YU3YVH6vdwzXqm98pDAsVFpG1hszTi2EvsPwg3YFzAtAhvbuzWbzPtWf2bRcZWnnJqYj6M1Tbch9bFoRd23",
  "key19": "5eFUGYTXSzLGiHkwPwRwWA1kcjVPqJdq8R7hsCDfSEiR4uAR51MjAfmsWEMaer42WSoHrpjixAszDHX496EV2D2Q",
  "key20": "3HTe2UxKD4bTieUhP6XC9huKAM7pn2VhEXBb7ZeAKP5ECxNR83innK9J5JUcaTkqpuZ7FyxKrQV46HCxmDFanhr8",
  "key21": "3s1GbqMwjSdjEGNC6VRNqiScJe6rAyfvCycu4iNCDurcAGpqSbEU5nwsjncFmxTNHxUbnHKzcDU8mRwZnGttmG6c",
  "key22": "2H1Vkm3kUr8Cs8cDWmA7shA9aeow7ZvyRVUvDd9NbxKPGCxe1nsXDhQv1jj2cgxXoyH3ZSCMp24K58pk31usa4g6",
  "key23": "47WZJjBx79HievQBugpoeVvphCenqmLZXwthwmD5GTPdkaXM3hhjmYQBUa8RCQDwGiw7quXjWHjzsWZtKCU4xejp",
  "key24": "3tj8rP6esREZZa4GH4k8LvgfqhwnqGcsfNdLZWmCn6BZjsddHEbv9ZA5gM1HeM3VgDf6DkMWB7KgTVfVWt8bH3VE"
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
