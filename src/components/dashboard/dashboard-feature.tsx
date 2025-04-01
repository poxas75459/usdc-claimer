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
    "5DRtWksQJ9iPEYd3PgCngskk2foiiWtVKuNPmq6RnjXnySVJDMnSXMfLhpNnA37FZ3UNqsnj3hSiepcQYahHakyf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xRCV6weyHMej9AGxrnA4VpjkyyVXU58hXErxYBd2EHQ6Swm62QejLBsAGM17reaG3RhG1imhKkXQtxHiroPVzUM",
  "key1": "2bJdYRvueG1tayaQ9NwAYHxPsMPTRZxo2DcqUVBAqJ63J7bnz6hZCoUnfiF3nawWf7p5RhzXKbNXvckU9GhqCD3q",
  "key2": "5XS9Unw7kyB83aZULQPvnDmLAQBaU3ALzYdy4YyrtVSJdeCF2R3WqYHg4tKujMFtzco43jLSWaKQvkpPgAQoF9cR",
  "key3": "4ENmEcuWRPA22hwWwnhkGsy8VR1XGELYhzmBCyGwz1Dow9rThtm4RN3esabiy3mKjRJGm9pmLBrxy5pAdrXm2JDx",
  "key4": "2DB9CWoUSaYVofuSof8A34yxf3Pc3RhCF1cxWMPAeeH9KxuqdwRnM84buRycBui431JDq9WWqfq96untV12pVwsC",
  "key5": "4Jep41k5EnvNKFKQkkKW7KhCxRFpZN6xJntR1DK3MnGsWwLswVadyfSramATwoWnGS9YQuAzNcXmCQbkxyh5Jv8d",
  "key6": "55EJmXWua9nKbaCsuQCVWGpUgsQrfLmg7tgf2NJyMeSNoAncCtTvjahW6L5SPFZ8jUm9Vu1MU2yGpD8UyYxeLSv5",
  "key7": "5CdzuMRZuEwP7CGU1A4x4Tkh2HkaSMNdD8TaY1ED4PKzu3u1YYn8qs3YmhyQD8TPCCTvo4becXMbA2tE5aRKyDbM",
  "key8": "z1SqFukDKM2cXSNsXZSFsgmgjbcf3nHVvhsJL6kUUd2JkVDqQVvYyYVD8vzRCNNvuhZxzabVWnPtWYeiZ44UQGG",
  "key9": "5ub8PxFi3ihV9B29HkCYmJHmWHmzENgqN4aXymL892i8yG9E6qosE9XzV42VKkEvBzjDfpChpXh4sQieK7dQxqxs",
  "key10": "5e1zajwc66JocjVEUz5uP4nNP2oL5pA1W71Erxtd1GZSo7Svk2xVddn5ZGem8yHFRkGmtYCiDdvj12qkoXD31T3x",
  "key11": "i9BCso4FfBKTDUL7UTwzhbboWXpnsxQanEbY6Lz1ZCg2dbJ35sU3SUPoX4yiHD4XBm4E92nzReUXk9VZG7jLTTt",
  "key12": "2aNYRu9eNJyTZuLLXgd4rHztJVCivAMpqC5h77QBUE8rt3ukJA2BBFrDWbvGYAmUj7Zn52kauA688S7ZnyyV68n2",
  "key13": "2cT7XTvAoV4fGbUU1xsemEX5zY72dE9UrfmRnH3LL8HJJ5n5WBwg5iV2WJSY4agjBA2eEXok6QiCPWG6nLLbv1ds",
  "key14": "e6u8BXRLgYu9wm7STj5WDnPnc7bxtQpT1NtqtfLwhfnJcNQD8vwiSuuSv77WbMNjPW9j3qUJeUWu2T4bBVFpnFc",
  "key15": "3gMNMMdDe288dGYmejbcwPR2QghkS5FdDGdJL59NvYdhn6V6eAfT7WjWfVV1PK81KPhdTkCsfm7nkxf8Xf36ucr8",
  "key16": "SerMzpgVgz41Etb74YoGsMEhSVKdjNZSUdGKw5RusdFVs1faZKa4nHBDQ91uZoCh8nDDL9QoKhNmT1pw6RcEv7S",
  "key17": "3kRQ2kFtsHkMeP4N1h9f4gLKYGigpd7qjpFV4EJUbBRMcYKpNUPjnzF5iYaEki6v9SXgDGVHPNvgfaow2d7kmE6H",
  "key18": "3N9ESJFvrxqpz8g9yDSaByF2tEQdjAwWRa5vhrFVtu513kAio9rqjsfK3KXyYSbri4vSyEARMAoDgNNLSSzSFKcr",
  "key19": "24VqTxnQzqxvLzi46X7ys1yiy69AtrQ4SCtv8MajJhqPsKxHAtwo1kBac3Vbpo2NRih4MvFvjz8Etz7txn1zue48",
  "key20": "5Xtvk4MhDWphtpDmQiHAKJd5aAffJX3NSWRPhFxo1GTXe63RDsrwrm4poF9DeWsNFKhGcjFDqCphYEqY9YTTamzw",
  "key21": "3oQayVCTQpvu9u5M7BYUgoWPcbCqGsTpgNP5AEDW44BS3xJiuT6pLhJGzeVPgwTPU8MzVJnwYGcUpTJHcC9gG25i",
  "key22": "4Y9dEhokTZg4tkdsFNMhxxWXps7b3kyDUQ3hffnBtgYbUpwF9t9LGyiVoBLRGr9dynww3PUUj3EwYQwkE1zxpuSQ",
  "key23": "4SAS9AfysTKcoqRyMcJURBcaXypkNb5tUDHE2jKbWYhLRuk7eoGADgbH1ynXJYyLSWcF8sm5965DN9u6Shpg6svJ",
  "key24": "3shteGmYqPmN2ZFoGE3VhSPgJTbdr4tnL4Jqyp2GS6KJvvvBHG1yxQqGCS7gmdnrQPuLgLRLjQ9mEyV68FqYWh49",
  "key25": "39PEsBEYLjLTuYSnHMg6wb27yMg245f8ut3jQht3B8GdyjtrgztZBeWpkSovFQX9DXYaHLApoWxc88MuaZe9PV3z",
  "key26": "4mQfMEoDXNDxBZ8M2tiQK1pvSWV5CYseMg5VFSse7gpP6SHFf7rU2WeCHKnx1HTbqjAxH7DRSzfTwLQtZcxKfBN7",
  "key27": "2k8ATeoa44HGqTBt6Noc6GPyKyfdWRasNNufWR9YoM5ncFA2yQ4dkQsXx1CX21rJjzqvXWrN6QiFLm8TNzDijv9m",
  "key28": "3HHe3W8jeJEcpnfhJuRH42ZxoBjWj8uhAKbEeaGBgVos942MU1HfyvkQUBZV89sVkEEsmV6h244STy4tQcUS9sE2",
  "key29": "3DUMBKztT2FyxSnfqN9iBVH87gmpuhkGb1hhx4PRX2My9VEsRm5VUjjTukwT2VvnYCgqANR7wJhoXL9WfgnjMG7z",
  "key30": "4NDfkZMDGvE92BqHmgsXzcMSQ2YYCv85PDh7nbw71GvqeUi8iX7W9mFPbPLhSDK4r6bFhBKLo7aYxvHo4wxVhZLY",
  "key31": "3nEyCuGmiRW8a8FkYtiErL1CMeJaBakipmF1uhW4QaY4W7UvYs248yd8RFHmoXcgUHgRu6SYzM3gxdBdQSdpLguM",
  "key32": "YVLAE4LqRwarkAv6GnsGKgzBvtnHaFrfVxofJXyc1qAibue6w8GJ8zC2VT9MnQo16M4d9SCaYospaEbTje6eReA",
  "key33": "3dSrqLQ3ZUu3uREUTzUWEzajkvQNYXoF8NPTDnn4vjJ4cSYr7uY6dCR2hrjVrfydvykJg9ZUbqSPZJYfBCFZYepw",
  "key34": "4eR5nMcqcwRe1QkMRy2KFwCAUPEAmQ4Pr5vhGwH2vikbwBX8mWXybkYkVuCv361KomdvxKqztkF81e6vq5HkAgg1",
  "key35": "53g6bXTKujj1K9V3epQxptgcwfeQKxzgeoLbREdYViSVLKbDi9dKCfGvf2V4SEzuLwDW1jtsA7WQTirJ4zoASrnc",
  "key36": "31BCHCPzzFCLPtjy54XXC911SJVJb4WjwUBvjp993YPjHSYSrZUMBCNZvPNwf6PgQejGG2bXvSHCvnmf5FXG78Xa",
  "key37": "MrgYJf84av2WUhUVr2qj2ZWDfNzCEoPAWHnYDquXnMtnSMJf1pQNBrvWKANAqi6VNYKwwoWFSTb8Sd1uFKdxNqC",
  "key38": "5R1H46Dz69xf3D1dtvNfkXkoZG8nhEwfnsyraQxpri9WM9HYtRV24RyKMFPMxkY6xsTespLW9wZEF3ZVauK7oM4m",
  "key39": "xaKQK5nCHBqxkWP7dHDPccyKeL3PxT5uTNyAEsAkd4ZWEqxkqN616wGn6wEbEkMeRKvxz1gvgqezEF8NwTNUCrX"
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
