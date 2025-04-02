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
    "2kj2KvyF1p4VXYwn6brpeWBVtLqBS7zZxWadpCQUDxt2V2unYPiy1WKwQDxwBKBUtEeCxAToHBaprPSpQ4HT1DGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2owdHDESMVPPZ6j7pSqEwLQw83dfhRbQWFtag22RjUCBCB72NC7bwbVZsLsZiBXzGgs4oMByKX4fxwmu8LeowEtK",
  "key1": "npTTSetuMwdR5fiGk7dN9dYb857o2aqjGxSM8kbQKsFLEBcaYWLRHuoUjykoPAxA4x7YiSZov1dVWQ1LiqzdhpJ",
  "key2": "5QXyaHPqzPR8gUiQ33CbdamSBFTq4Sr5BCjD5nNAKoLyxAGrPtsZcPQieBJyJAUErw2HAgLGDZHBHHhqH5HAYHxa",
  "key3": "rGNtL5zLEmLQV5w3hMXqiVsHEX14MqCjYUXQrZzwpxENEYvuBf6ktgfEYREb5qGQ9sstjbSkpbVTXy3kLtkTN2P",
  "key4": "4qJKA9XhsJeDExaWPG7XpZNhcMUNtJsfzbxseG8LKuE7VDZz8eLqMyx4Rr3TvLAhoD96mYZRuoeKA2QVZM5Pgdiz",
  "key5": "4b7ZQd6tdm2cpjACQYRaKqmH3T7m7K3jcgBDCtL8UrAxi1tSLFZbWkABiqct2nCasfF9dQ2G2h9v4P13YQd8Bceg",
  "key6": "4X7aV5FyHY1iE1RHxeyGSkW75GJPnHCdLmzjnXVTtntWttvXw6oj1w24xA8aDJcAEnXSDaREcxUe9Z6iVNPTWgiC",
  "key7": "2URaop7yBwvDSz9zHoBPMFuui2tupWxqWRu1x92XuDnxSC44429n6h2xq9eEowYjBYA7SEsW17W9eh6quUpSQeCr",
  "key8": "3Q8DDF4UWwpuvErCWQUZHjG1tzWZU4WtEsqQx9kqrtSLuqW7Fkogei6vwh9jscCt3vAEMmJ44vnYmafjZFcPjV43",
  "key9": "3JctRH3Gy4Yw1cCZC1CSQJmgNsz8k6LtZwzduv865ZvMByVWjW5CpaH8TmdwZcd65zSv5VV2vmk67MTBw3x5PP3N",
  "key10": "vLoRSFigrmQqfu6Fy4zfNZcn3w9NuanH5jyWG5J7Y3J2ow3XjLvK52FR7YduSpZADRGsqQ7sPXzurrvqNk99FXJ",
  "key11": "24zviBF2BecZhKxrxMXZ6av3FhPB7iorUafABgsFrFCeAgVgueozz9dwgNKyErqNVuaEhco8ggRb4Z8XU8AuXc5w",
  "key12": "3oewyzzCjGmafD1FMnc1tRukvEDMbj1HbztXSPUEdG6BWb1JzJNWFvC7hwcJF3ihUswfGbAPdqVLdvzduPc7X7N3",
  "key13": "yPkXAcWg5aRdeUaXX892E3uN4G8TKFweUGg991GtwPt8e1eJY4QfmAzZrNfcK3AEXLWq8uWPiLtHscsRHejKox6",
  "key14": "C8aRx46k12rky2RezqUrzy7LzVVW4eLzbZ5zPnooVndJH4WKJ7CbgF6YDgUdok1XWDuae4m6tQtsabbawCusLPX",
  "key15": "2SmHCuXv925Skyg2L9D463soUAUQ6ybKtHhxYP34m5kZVAuvyhnvNN126EaVnDXkNJPoRGpELEEPkNoS9HMfMjPQ",
  "key16": "3yCiFTLYnudXdyWwvkUX6BsStkh5EPddUKXTr7Fo5pdZUgVPkCoJfQVpsBBKmLAtme3wHFkMc3dKcQUDhKWfGK9X",
  "key17": "5svkHZavE5hhF7eRaX5L8awznQLRvnvhroB3rGr8ZVsAjsHpho8Pq8YYxd2Bt7dgCrWVMGEFhmupwxNYWM1hjXKa",
  "key18": "3pa2mfuJKjsNYVqEhEth1KkQMx8XifpvfPVTZT6DjZkiGb4h9DWRCSicvwSfEV89JtyK9Q2AVpW9fqLU4zEj8AMg",
  "key19": "5vNqeJsL5Y5SKhMr8mpsNV7wmaRHM1Xiz4HgdGFZhyYdgabmuGCBfbjmUgnvBPP4Q1BCbVTuGNwqUK715Z2wwfvv",
  "key20": "AJLwGHZJ1aQLh96isEirgignv2RR3eA7Rib6MUk35c9GUbzGStN6GbTccoFNsD7Pfjfv4zN5MvVAqAFb5htysDJ",
  "key21": "2NXG4G4kq3Aa9uPTnX7YcSkvAvPP9JCv62ZUDEmPU18WBV8QV739ymhQcTg83W4PyrNXmK2B3wjK5Nbxvku9Zq2",
  "key22": "2pQw7FfXztmEN5orcVtVctWceMa8fQYohXJ1e6y6nRVZNm8akMthCx66NbUpPUZc7guRMzF1smVBvocnjyxX11fM",
  "key23": "2tj71sNAAEZ5SwUkfnqnQWcAJR1S8PX9aQuMpsZ4f5mZR5rLW1fvc4aLY7Rpw1nTJcB6WQirF6DJx49mxNTGbLcf",
  "key24": "5NhiuvKbuoLqJuNBdbhdeGFtVv4GPqNgAuGUHMo4367gG4k927JrsVi9M2YD6zqVhZpkNUaVKAA16sAFetTrSrXu"
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
