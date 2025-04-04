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
    "cborY9PuiftN6yXmhojuBMr3FTo7vugjtqncpF5kw8vEdtzrUr6FDvkaE9xf9gcMoLLGWB8JoQ8TMQdcELRA4uY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pjJHp2AEeqequUX3B1QfgCJfnjxYnKihhTqyoEunEsHLQKmE11ZTwxqMw3Pk4sskMu1rGfM4S9mbhpgvS7dBMDT",
  "key1": "5LYjLCML2QeWwxGbnptHE1K4xg2N4zGqtKNSoF85r2z3g8122frcS5TYKh82hBnMqHsu57y8u2u5zgEXRF8nS7qY",
  "key2": "5qer1MMDukJ4uMNTozPcQcD8DyFwL94gohZwjsTUgefSLZ9MrMndgAEBguyiikpjb6XC6Kcx3QxHAb6ydUnpJVoz",
  "key3": "24479bRbTL7K97ftk9uQYksn4HWLVYYZtzR4zRJGdXudspUcJHG54bQkc67PTRJnHuKUb2ZoLMBTuS7gkANefjsK",
  "key4": "35EjHZLzUSGXupN6WFnCgwPkfNrykxxv37L51qwwsHjbUcvPKYbMoskSPuPyjbhNLqdcUDJ3fMMgjrYuQZwUYLLW",
  "key5": "2xZh1es5LdJ1Di5nKb8LjU4BXQzHJnf6cWs4L23xPqBNb23vBcMQXWvQXLXrKKWUwYo9WYAp7JHyU1Ui6HFZVf9Y",
  "key6": "4a6iHX7C6GywzKZuAxPMQSyrjLdqdofqnpSGD8EePVPPffvPbTvHgNU8ACpzrPBvj25jHeoPt3pQFC44duFQyQVT",
  "key7": "teGmb2Eg1n7uv19mQSdJsv7hoiXjePeACWJFEUW4rfzzN4vqAJ4unT5ZWCChQJzMqR2Q23xY2rsyE4jGu9GPPbA",
  "key8": "3TSbZxbcvrhXkDUi6qvBs5kYo2huZRxwMBjHk6XXHkgTmMeSY2vphmvcRVVM259ZWpWaSnjSA2rvKWKeDAUaKeok",
  "key9": "2gozJaEQYJyf6Rzh2Y6eNk8862ZibjLDsPnEVxwtXe7DjrfzHSgB4MEntusv2v3tukYNbhoqKARcbAw9MKewDegd",
  "key10": "PVqB5nj1g5zLgi1UKm5MaXhW3ALfi3LhYGBEiTSq2Nd7hMTSRiV2pUqq2aLKjNg7QmkMtrVKGrmmkb6zTDmDYQN",
  "key11": "46VHRhFbcB6x39KDhri2W9y6EYLovbpRXyc3VTeLn41Ys6tPuq8YhNxptA6dDdXyS34wA4EUd2CpnSsMr7WcRiBC",
  "key12": "2EW57NzjBhuoEz34mtH6fMx2ShGR3ekFTRSTGzTFWcKGoFweiZV3dUSjjrdYvZE6jGD4GU7jmjdy1Me6vfMGsVYw",
  "key13": "tAqrwW8zLYz7TqBe8kKNPdA6Bvf5PAtnJ6RhbQLuoasijTzKsJPNyWosMMpX8FxLF2QWWDKyxxKxYALpJA3M2MK",
  "key14": "2t7xvoU7jQf9NMNvpfXkFahGPLzeffbfgXxjeyddD1XCR7mmGDWwqPVHJsPtaE2JffS29uZGcvKWaGXd4ivkYvy6",
  "key15": "5n51mJn4mv7UHqeZDbwRodAVTyzLy1sRY1VY8i2WpAJKRppp9fCZeD9g6gHe4MEcVbjXeNdSeKmWKxww5iPUYytB",
  "key16": "3WdbnXrkjvg9yZW7CmXvaebYz8HrWBD8eAgGre1CPti3HVPDLY4SQhzqyVAGnCefdRZuZAuucpzCdPDENqdrPvnK",
  "key17": "429KcHfwreU9vSYjzSitBRUA69i2dLwiJSx4dMbKUGMN9u7yUgFSLmupU1RzGCHU4ZdnMMmf87jUFgPfeC6juW9K",
  "key18": "JFrqcwJpgXc7J8YUob62qfv2WH4odanLAo5Q1RvD59rQucYU7ziKkugNYTbkSdcRRuYkupAiBwcLjesH8DKXYRP",
  "key19": "3X1EDwhzo4pWuFkJrPyKbEST65HQKiLNXm8tx1JuFBhr5JtV5dooDbwCsPPvzjpn1SDFFLcDU2ysT7iq1ACZSFHg",
  "key20": "3WT4yUFY2zQVGdk7kBX52JhgPXMy9nerKaPQQRJ5pwDaaRxQNc5mS78wZR2kjkhb6rnkGwSbz6A8hYTRHf3SLfU8",
  "key21": "2ATJdWxjxqA6QngVqrrweR9kcGai3pfzAM7yrADirYSarQ8K3AWMgbWAYDDskkTUKAVScpqjfecnukYxhp4KXdL5",
  "key22": "ZV5avq45PDQpzKsYmP6z66RnL12wtNx2zpPuUzkcVJifziax8PcLbbjPYxmkUdRkwy5ZATuTr1U4GEpRy1r7T4X",
  "key23": "5eEDMhS9qRcLNgFcZbKQgtNPRYJe69PgZ73fKz7WEaNnDEuhquJUxiUuw77L8eMawTKncqbpoB5YTbiKqXq1bKW5",
  "key24": "2U7NjkAXtnFQDqMQQTnj1RSAcDPx21KEdiUvsLYLaLakZ5v7Xb98fQBRuR4GiM91GR46GajrK8eZwfuNSyfxj78e",
  "key25": "5VwXgaNDrd1GFVdH6WVPnaH7YrEXoErq9a4VHZXC8ZnLsa6hPSbdAeiA1YDjXfZ6aa4xbcyJmToYR75wKNur9rab",
  "key26": "2VNmCkUBdBvMZW58tPawvqYcdPo8eCEbC3545hNE7DyHt9jV9bD9C27C6SSL7qFVNkk8cpqm7PfGbE3HrnNfQBPh",
  "key27": "zkePo46ZV4QD3FaTTZ5xnrpYszwuburtChMCnQ9FtzrNjtku6XV2BJ66YgVpRQ4HPvMuL7ZMcEinaEPnH2BLaxY",
  "key28": "3NtHW4Tfi5EPR5Jz1KPpnLPMQpBezF7hVkbbbVaRBVE4oNy67GmLRYA7LuLh6jEXEnoR2J2v7quGv5zjoZECQ8bT",
  "key29": "2tuEg9hbcvCGqvVNVc5j4KzkoVgGpFcewAmXkz2s3HdkgrYgu7Uam18CkQzUinVXKgLR32mhDHPRSVAXjTXyTfTb",
  "key30": "U77KJYkU4VJSVWCbcUFtjN5F88HaNeDTikhwa8HSamErXYKiyFQ9NcRZEccfAKJH3Vs1skAVNXbJJKb7rm26GWb"
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
