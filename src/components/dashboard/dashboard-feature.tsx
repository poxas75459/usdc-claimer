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
    "5VwKuYwY5NqXxiX3xBjrXygG7DfVZH1ACc69DeMg8Y9UpqaNMYHCWVn6KL1XTkKqPi6Y5q6Grcvy5ipoF1fTzqSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h6RCvy7UQM2bctWgabRXkVvw4WBaNVYo2is52NAL6Mn7f5RughXRZSVYg2v81y5Jojo353LhbnZ3W3yDCckheSk",
  "key1": "4b9wCU9vbg97RukA4aQNCnKKXerdWsgRzPnj1xeSPrGNPKJXNhZDckg4QjiDQ8jjyF4U8bQbCJCerb31XGAChwTk",
  "key2": "2a5i8cYtWHDqEsqWs6xn4Sz4w5hgYahjHkr1Dhnv98UaKLAmFMvqnMzLpHCfUu9eeUJeKpmAyDqf1ZHAj6pzmaag",
  "key3": "TxNZzVowc8k2b8DYczrRkXNA9Z6L4WwFn6bQwdQKQS79VjPAqeKaWuq1sS2WKEx9NDoJyCgXAPZwHmuKH1HCjEM",
  "key4": "4NFuvC8jEzctaiaZmkSPYyM4E2RSRZN3vjYxSWyDkhJauETMo6NDM1o3wSppHLEFYmgF2tndNSSqTXhc2aJLsNvb",
  "key5": "4jNbU7xMZyQrrpnR73zypfDjpGWExmXNqHR9QeJcg4RRMw1sCpaKMmobiwUsU8XeJujugXCxiG7nHwvWkQ4MxRbj",
  "key6": "2vimRDD4vM47Vo5uLXPQDdpYjjGoHk5xRpTjVEoiKrBw1Tiy9CuZbJyHWumZLbUX2Tza9PWkNc7Qn7WCiSWtmhZL",
  "key7": "57Z7HH9qTAWHQGmwhzQibKwgyn7KJXKfuexybe9hASD4GeKXyjPpQYnSNFCt74vmkXr4dogR8Zo9UyTYVEeaQfmX",
  "key8": "26sgDSJD2sjG8Hwa8ijVcHkZkyWsX1ncf9W7JH5PKssiPoQzbnbPhjgVbSqMR712XNpdPuKdeej2rBxkZcyzH7iq",
  "key9": "4LQzCKk5Sd8vWUnAhP9ym2BJRSwkx9et7pbepwDyxvr1VercLGGAg1zh4yngZAy3m5PbGkVSfDLtGkYJ3W5J9QXp",
  "key10": "5rHmLB3WmMDo8URAiXtw3kb3ZErUQA1aCvuvF2YFHhCPwhWKXwgpAVrPn8DjLRhbaw69czW84SNQeDuwgTaM7grL",
  "key11": "2KQpXUZ54hutjwbbrp1m7RddcqZrqdNYiAKWQWJAVrBUcCPq9C9kHJUH3cmUGysomFJd7Dzq7RoAH5Tfy6cpMik6",
  "key12": "4waTeJwpLcdLmPecrDL2w5ie9URkCepeojyThPhqwLEWwCC5MjKbDrhfYAvu7RbENaY27kyRMNLzTmwJKMS5Q3sD",
  "key13": "4TosTWoXMtTbL1MDMrKaFjtCCEhTWod2fi2utmL6uP52aaPR6bJJW4VBkekpARdKEdHtb51nh7DJMmxvsxRPp5ha",
  "key14": "57R91AUvAZXcYCmJvN9ZPP1RWPhw9tuAfXATZqLsgdf78BFVa662Y7KgZYsJuUmL6FEiXM4od8Lcp5Wn19UTdbww",
  "key15": "8NWyL6Seke5eDRYfcgCUT1uhVta979N45eaWRA1ouM1vngT8jC2xrPWcXJvFcVWrZUj9mQFQWkAVdNiyXdB71aq",
  "key16": "3C8ypjZvFhiiPF8GmF6dXDUEEndLCPm2t6u5UieRSaMoJPErJmDwNb4ardBHQ2dAJHHcfY21BjLkzFMv2AFEWKAT",
  "key17": "653PPvBdPHpMjsbF9XFKnWRRCAAy8A1z8BizopQXBbsVg7T1RWvJTDMev7nLhUGE6XLFHP3trXQH2AMM6AW2tTtz",
  "key18": "2CHUkqcs1j8jtPrX2iSRMY6XxyfMkQtNajm167NMKWLEQQR2uzp9aiEThKfTt52tDpHtokQmanMpvwWEs22JudEe",
  "key19": "52Y85pgTEbnz4SN7K3K6RLEdsUbFXThaxkEXyWVFdHQJykKrkyHn3HfiCxJhXZFqYmNhdaWnbh9U3nAFUp1sqNKC",
  "key20": "fyjKF4DYgqPPs9EkMCk2jKd9DEYKLVFjve2qQGfP7nNhjHQpyC2uU9X9y2T9CnwoZRrHV6qYh3gNhoeUGnjyBrF",
  "key21": "4xrnr6sFnLehXo8d7KLXA2z27NS7Hc836CWDNbU54YNJhcYmPwVYP64ou1suRxn6tEnsBJvPLG7eRctHydyHipPL",
  "key22": "4fJzUusiEtik2d6mnqPn6EbBHzezr4obkRVEMsLEZaKVvw28Jbc7Xj1gveemDv9yFYXitJe3WjUEecAZFRUR6gkt",
  "key23": "3ieZnWAoR85g1HFq7XQiEURKdxJxwvejXUHFJsVwx3QRjrWvT6QRrcSaiUBHJCpwoHWrSHn9HvjrVGw45U4dkeDp",
  "key24": "2X1Tb3MJB967crKa3U9aCifXYik3dNkWTBtjtE74giwDRTMN7q1siFqPeHyZ7UhL4senSx9PC76e2MrKppAAkzhn",
  "key25": "2HF1fhE35T7sxC3QVva988GvrTtPnhV1Wv2tG263f6S9811w3pzzyXZFqjF9UJwcSsrBsNSHhhoM6qx83caVFW7W"
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
