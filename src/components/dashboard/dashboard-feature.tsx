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
    "4mPfHmsKJG7Uwku6LYs3r3yVJE7Y632XyWDADKNtjpXFnu6nbJRfnYCMdApyNG4M1U4FAzMnoXDfmUJ41cmQ9q5L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j7k1ouScq8W3EvVzBv5kJEdcVn21YkDWmfWjjuwkv4ZkKe9V8WKNcD5xBBBudjTCwc2GGsd3HroyoCRxyPDh1WY",
  "key1": "3QXdb5NK2f8PMXRWkKrNMJQ89wdGSvBagtPThR9RN3JRKwMtmucbgRJVaDnGQPf1WHeSh7PnFBSMFbF9MdWhdCEw",
  "key2": "4xUoAtmdMbzEkeW2TWSCFrNSuyjE3SmLLhLQ1tMyQfQ9dkekA7SaFQ8Up7Ko99bptMi3dYADWpCzL7ji2BnybU5b",
  "key3": "P9oRNMvWR6NQf23mv8wGQXYiKXAaSxQQpTHrE3cLnVSAKwhVZCbMnUWRFDPMiyA46Pganp92BWRdZEAgXukyRda",
  "key4": "61K9fcmMqiPovZSZcdRy4Kw1R4gRT5oSzRiMXHeqVTBJtD1dbDrShjSNpGsorBrPs3nSLoSHE9TsiWDRYkTNbtQk",
  "key5": "5P7At7SDBcYjUX5w9VeMS61Er1cyvvwvbiX3hhP18AR5VFGtJHjvd1PmVNRjZtZ8C6VKG4Hpr5tWEQ7MiWLZr3q3",
  "key6": "4mLMRnoycmEnmi9yZnoZjkV5YWm1sHkkaZ6wxDnBC2e2grBoyVwsRPfyFHLP6puweyixtPEKBd5f5FaRTwwTv4zM",
  "key7": "5N14JiWofg7sM4ooiivaUc9VEmPk7P2inYufTMjk6cxSoLeW5dV1YfFugETEwpPACAFgRMss4Cs7do1yacTVGTmo",
  "key8": "tNd63iqQ59rjtNJyAyUCEygJATLi8qBsxY1jtdYxuEbTMJhi6urhz4EedYj8MbJjJz1DV2uvMjSb7dvgZTppsrJ",
  "key9": "3t6Bdd7Ur4U4WTHTyjrKtkLZ9gPv5PFq65aAtH4aYNj6PqiBCS3VP1gAWuyswRnR5vZv2GFDoBTrRdgnweqGtSfb",
  "key10": "4eXtSEEUAaWETrUF7GRhrbxm5a9qv7jj4UF6Kk6scPqaHTvbmXTLeAeh8UYXXDCU9e72LiMhff7AGyrdcFu9jtfr",
  "key11": "3xF6Bgg5ziWxDvWfrE7YKcHSp3hWWjbHt82fDUNMdXNi1koNNTsNVcT8TJ1mFzoTkqnruG5DfiCUAYL1srC9k2BT",
  "key12": "5HGX7NDDe3bth4QaGV2ZeYfZ6ec4PPFTbEdTxPJqnWzuWYJkyPUqf4Bc97YsgCZo6vVbvQtKHQ5k558orLDbJBar",
  "key13": "55jKjmD8fLkQonU3ZyTPh5YkJiQoRBUGXCM95KDB2NvM5EpXKh7Mmc76ZgkfUK1FyLNDYywMmh3odKi2JVpMaMqM",
  "key14": "2Hm7kzDCnuGMiV998VXKx5VrVr7qC3MQ75FBCxPK4QQTEPBXFE8dcjm6NddZEpFfpqqktxw7YFfZpPjBzuhTydMN",
  "key15": "5Yc2NJQM4iGJaL21QELKBVtQ9UmuKAPEfuznFjEX7m3tbRNb6SFXjECQED6Bge3tBvXtyubQcARQ2gjQLULucWu8",
  "key16": "2xbxFLweddxHuCWd7vdPecSQmU8XKRhDSY3djCHefFMwbJpEzhxqm5KqvbAXWAgWFWs472ouwv1HoZAhasuJLyqp",
  "key17": "iinGxEfFJv3YiTPwSMfULzm8mWjqN9E1CQSBnKK4wa2PLSCvN7FvdWBtPTvmQcJVeTjYNKpEyECAoLV31DhVMmG",
  "key18": "2RvxMKisMqU2z7xKtiY9JfjVaHp9EcPWLcHJWu9hRqfyHCfvWZDzHVJp9mNgMw3RpPTUquBwqM5FRGw3w12re7nb",
  "key19": "2yXi9MDSDfrxcSgexLEzS8h44TW5ZYv9XGqZDFa2HyCQuVyhk1hNeexyVEpdUPJRumvbfELGCeG6kbrNRNzz4BVs",
  "key20": "2a4dKW7XUyK4aqFue2njtZLdKBBA64A5wTq1kZ2uSGbi35dBiq2reNUhYSLWwsV2UF3opTaGzMXn2B6Y2JyjUbKi",
  "key21": "3xfzUxUMR6aBSmb1FGgqLX8W4puJhpGLU4FWFMzZEnZoQaB7Htons1wdkiEjBq5ToWnPZubG19Cfp5csL3S9KeUA",
  "key22": "3sGBZvTRMvT3QiHKLm5psuVG3DHriww8sHzcrKGjBBFHFTdJtRj9MMptqD5U9EUtxsYVErtxVgEJGEXYwNUdveMk",
  "key23": "DvXXfZfMDg7ciYo2NJovh8iFpmJTinodN96njoUqtcZ32K57hu9KqTmyHoXK3XUfpAsxcxNQEXWoT9HFnZKjSuD",
  "key24": "uZdLdPUqhqQwXP1tbvg3UQsEY2j2RMdVCUXWqTJcvXkWfCJG7jVPiKgRgAMv8jHsc8RELH2JPtQmWf6kcK8wdVU",
  "key25": "9J32eFvZPd9YBobmzFjP8zSecocbmSMKyozmWnhAszo6FaNtFdgRdqQ4Lz8koziQ7kfzeXXxMDPiBqH1LfhfTAH",
  "key26": "Q4NK7j9Cj75QRnkRV29pQU4pE1o6xwEdAZkLEWqRomsQWvkVxDPmbxwNrxBeNY2qkxcoPWU6aQQJFMbgUtKjZ5b",
  "key27": "3g76VRnmgKdUUsM9tSKbY6atgGXEv74e8BzT348geery3UCH7jsfZD62GyMP75XpXjfVyp3TDCzwWmmqfM9Yepkt",
  "key28": "V8ryfT3yjo93NXbmy5YSqmgPjGwLrL7DnxGofrayXBTG4XPPXpWeSg2Ti3tBsTRCu2rp3VPHZYuZHAhb8qd1Lnx",
  "key29": "woLpUdFp2KAWcLKbD5i9JdKXp88iS82RXu7U3Skpm86iDjgCR5ydC9ipUSYYFvstmM2ESkJfcfimzXcUhZnc6sB"
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
