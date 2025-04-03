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
    "3CEsipr9MDRrKjcr4fa9TDX24XUVck1y8emSWdMwU1XpM7x4A9nweF4Z5NiicfFyo3x8zBwyXSE8LBQAHEmK8jMh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KgXZPwmdzNM3PQmAQoN9f6BcNWyb821QeUonWwJaiC7fKsgxjWCiNRwjAuE8qRHdhpVXBSaB9hYSCotTqMTb1eZ",
  "key1": "5THAvjUrbNKhBiRKVYuz76qqmZR16jiJjqSQoLpoNJ8m6nYXEBuBagHDoJioTixr7bECgfbUR1qqgvHZAXxca7mE",
  "key2": "7HHmG5UpBMAiRFkwgu86Y842jRKnnXGrkmvaeruVxQgtgf15pQVQcXKtJDXmhNz4CJNhX2JzUjpS5rQBJB2Asmq",
  "key3": "4BkmAucoDJgG8fNaiQfHqx9vXbQQHKvpKj2ZNA191Gok7uXnJTjW1esn2kVkpFxgc4LJdsNGqLDGV4HodzEKuTHe",
  "key4": "5CBNBrfmx8E12hS2Tds1fnfnWbcd4wdBBSt4MUFEZqQdBDVkCG6stqjLSw2RnsDxChAGzxz98FCivyezwaBY1u7r",
  "key5": "5pjoar92UiW63Mn8yzx3b1EeqLFukrpZ4dKvihET25habE2kAJVkcV6uEARVLWPfJNf7RR2Q2ahwqbhBN2psSL7c",
  "key6": "4mfFbp9D7QWG9MEhZ6qMw1hPpGaHQEPP5pke8AoxTEVgTFZ9Vzs6Z4DWMfJoNHX6vdx7zJoFHPgRhPZtbPQdazjE",
  "key7": "zAiP6UQfVuaQKaNEVSN1xJWU1uGUuMcwc6e7tuGZZpAm2RX9yqZLWXPzLxtiWiuGkaRNc4ScSobRMcGKpDyANsh",
  "key8": "4oKW4DiEiG5ffHgXJm2oUCQWc3wBurGfBTxh5knWWQSkwRhqPx566baaMDEYn2Rwa5maPzQn2Qe1ncwCDHHLg5VP",
  "key9": "3sMe27qf4sapNUyEuLWFdFodSVigSf2MPhzMpaMv8yAbCevmgGqA2HPXotZN7Jv6zqUr61BQwiAnW3jHvVSHAUa1",
  "key10": "5ukdwCVAg3kHJW8qbpXcUmAomMkuCLPkkyoaDQvrJro6TTj6kxmHNtTMTi6EJXsjLHeBR4JBJQDboiWSS24RNVqG",
  "key11": "3BgfoDrdkQ4DSq5qYzLs8BL9t6WVWW4bp8d83uXVdwSiUgMmsp7LdyzYmuFYBAS3516sGn1axLD3TBGnfqV9voqr",
  "key12": "5mPKeP6aPS7nF961sU5YxG2x8w3A7qQXwkEceQNg1PRHCbPZum8niZi2zAP5vndHSvQLLj7YsqzUcXFgcSPDapjA",
  "key13": "6TdwNpoojqtdZQ9unCagevtMejgDzSQRyrVSgcV7ytSjBMUC77LfJxpzZrZdo5GEEuDAdo1g6t1Paorb2zyAsvR",
  "key14": "2D8xqHb3Pvdo34WxiDzMTF5Fg2eiuZgbu1XeRgk9UdV6oHTAdXDsP7K3spnPwC6CMVfKH43w51q53rhLN3qsiix8",
  "key15": "4coXVm3NxWkzxLwZ1uhv7CrroeNy4eAD5n1MUNDLBGfqtWQYucUQx2KnmSsBtthwq34qqQzR4AMqgGUzTqDp1Ca5",
  "key16": "v1ji6S8XacrXp8E7kvtd3t4vQGsEybwVnkFk2ngQmp7NbHxQspDbd6wvjkjCZdvkh4avAixGU9zw755SEPCHLAa",
  "key17": "41dzELUwcXJBTNqehkNBCmoYZg1LUPpo2RntNdmNYM8etMMRJhUEZNohk2hELsnMpndd6rTtTj9Vc4taQNwUACdr",
  "key18": "AAZZzVQ1KFQeDDutmBaq3JhZ98xEhTz34qecE2UbEfXKdt1K9xcAbpSzACgeNEcx1saBU66WzTbheQ78TvhRSEr",
  "key19": "4ZQrS8iYZtTaE26Nc52Xc4NbBn74xe97mXwSPncKm1oRoPqFbWWdoZv19yTgv7Dxq5ZuqkgtXDjoMV2qVVwNC3SG",
  "key20": "5vjiytfVk7MceLk2rWF3Kur3AvhoWmspTfD1ZT7un21iwe4sBnusKovcWgr9ctqNvSeW2kP2BytBF9PHi2pnbfgZ",
  "key21": "3B2c9MzAZTtd3DHykPT3732ngAdaqv4o9FAwwmPXpVU8PAGMCFwyPrUiBK5jtbPJRXsSVU42cajbksN3T4TxWTsa",
  "key22": "5kq4ZkiKoSq4rPSuKPN19VK6j8W5h72jeAkKGWoD6WqzHnbJM5fhVsbfS1T4EginWDLvaqsbz3Pa6FWw3eCfJ8pJ",
  "key23": "3y2RQ3WedbxDTTH29XvKXWJXTwTS1UxCrY6bto1WQ4xeCXVAtEaUct6vLnDwVc2GWHAPUwhgEnVppE5TDfs4d5dt",
  "key24": "2ALCaMSJMQGVpxcb7jdDeVvPEwpCVvKmeJq9VWyNUgef7xBsxpbzRPd5xJT3Da5faSUxx4GxxsvEpj28RqUKJHPo",
  "key25": "4abWfZqmxeYa5uafwc8bkS4PD3BAgzNrHdpqNFzHjj76mE4Q8TgGj7Hs8LQvsvocZYMTVhH2865xgfrozfMf6RmF",
  "key26": "NdBARMajrZP3vTpP7VmMbQ9BwZowb5e3N5GJaYv3huxC72NQSYCkVeUQ6jSowxu1Zwid4DvRV9F6V8fEbVVtUEW",
  "key27": "5czXUJYfZHuqjMhTkMhs9jVAyL1oupNxgYmQ9gXrS55e8rT6uHqCsdnVo1bAh4YTJTpuW27LPTqLpHprTPLvc4YY",
  "key28": "3XrbpoVuHWYQ3KiZKVon5wijMVX94rxtuNCSxFsLpS9aWoNzZ3b5DUL1QWZieWW1TFn3u5pA3XKUjw54KeKFU4bM",
  "key29": "3L4nYk5BsA5gfC3A9DBaRfe8Ge9GKGs6QgmBBHcZdcP77S4QgWHyMJPzNHjhxT83E3eF8G1t6nbEYRwJHU1VaaQ",
  "key30": "35eSWAyyvcwdozooXMmbMVYiim64fJ3QaQKVesYiDbX5Ht5LrHpEL9rWidGpJsfoMFVTYYy8jXZo6VyCSzs8ciYU",
  "key31": "2oPVJ5QuqFAc8byiKkkLsG2qFkhzqgqVuzhw3imhfnXmBBcp1WaxdxH94GyDdRHzFY91uaDiRrDt1mN3rpMgmiDK",
  "key32": "aAawDqxhSvvyT7gccjws8YeXTNdjjiVzwiAt3YNJkhhAZTUMG4U7RgNCn8n4JBKU2duJoNA8X7og74nxeWLuREA",
  "key33": "3GYcUPVZxno5c2tq4D7VN7i3edwjg8KWSrcCgu4fRuLWB4Kk3YccixjVjZ9nvq8i548DASGsrXMSQgaUQFeMcuas",
  "key34": "5tv2gEtc5z37gNSH7E9DTB8tYvByThk1XTSpnAQHkQc5rTDzMmeWvoMSRDJZmU3CBmuM84CKzJ24WbXCYbGxVRST",
  "key35": "JALDxjvonoRemhgHZPyHKptLLrsCz3njYtBRAwWwYMAGCs3N719SZ5gd4VyUhKwXNeyA6KkZkTY5i3YzznfA1TQ",
  "key36": "HYqackREcmWY87Pq8UWTgzbstUu9zTEyGvpft9o6Qrx2NurihbSqLx24mrS8ah5njt6DwqW98xUxgj9t23D9XiS",
  "key37": "5aA95GLwNG6N2AAyAPMquEbbHULbqaYEwUYWW4d7icjDJfxxucT1Fayfvv1a9MJnn437gCcELwa58xRqnkYnMebm"
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
