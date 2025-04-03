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
    "RrZ9hfVHd4ZrQAQuNrs1onUe44VM4vUTaaxA9CFqXwHgVw8Rk7fWq2vQXJoTZQpi7qCr2xcGdySTwUepn8K1fu8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "319h8nQjEvGe4mv7nnnGuYyxifb4MNgifYTjZ9ZzXiLxFTGdSyXqpDk1ig3BMi8HVR5GQzigwjLBAooQTkwaMWLW",
  "key1": "5KyrUFQqmy6dRa1bZRQtSghXN4oTqAsXWyvszVSSQKxpqftnqTCsinb915RT5bXHaRbtcEQS3SqnDebjfYmHTzNY",
  "key2": "2GFH6qdppqyRMrUoQ5mFa1enFdDEjGD8Qbgw499HhhZuKi6iZMPmdjJ48UgFc3fjGF5XZeiQncNmhdzQcjBchWDn",
  "key3": "3kgsSWVK8Z67WVHjH96TNZc4wcU1pegRL5wkFRhHszuMWWhDwzDJWbEGyqEA5Ng1zyRMaxc4nYZgi6y2GUmST1r2",
  "key4": "2vbfmrPsNK78HVruyZovCFm3GxJQtQ4kopXBEGp4Ry6DzKKgKLY5f9TZPG6ciem8f4ty7ftdT6haGfcdhg7d9ZWA",
  "key5": "NZWf3MWSxbmp9PR1k5dLTEmoXsanr4eKyAFcbA247bAQsKBmPw1tekFazyrZ3nrRWgFsSR6mDyefJFeTANFsqp4",
  "key6": "2DZuc27aCHXKMocRAwLAMzNYqeHoFGp5sCwaueVhoCSkfKpBnCpKfqhhN27LtYK8kGm7KHwXMLVSond8cHACKf8G",
  "key7": "2ZqPJ5ERPECFHTYu7ajMT1pkH92T5sMqvZynfYhejrk7QSfkXx18Nf6puCgGw4PMGVpovnSiRiQmP9CNy4jMNiod",
  "key8": "zRvnWuhJLoYMhFCZYF9kkxKBXLenNacnwvgGmcJAbFxx3jG2JaoNdLbYamd59nMXnFyTw7uZC2i1w2SKbxus7Aq",
  "key9": "4t73EBcLfiJAENCPqSE9bk66jkCZ7j1WsSHrWqonXMX73AJ9HyfskSwEgTjX2L2y9n5zc5pEjpqcPJxJ1hfZfuji",
  "key10": "48beoMaANkLW5XcAVUVkEtPKLSkRtavKja7i7Dn9iPruCw98JZfo5B6Mewncg3cpZRJsBWJM1NmVZNUeASDMkLK2",
  "key11": "5dX2pv1jADm1357xWX74m2osqaSnuhJ8iHGparRBRscpw4tFxr81aquxayfum6WZn62QykcbLWnoZDxzVu2Gnvb2",
  "key12": "JNtYTTw2DYFDpb5UanbWw8ZJc1surdp6Yj5kynLa34q16f7b8QGZk4J33gDmFS6bYRcj5bBB7KZWvBKWLKRC8DM",
  "key13": "f444uQgLmFZdwN29aLxvwrHeuCk6FMcDV1VT533tb1pF3U5LGJeJGcrG6ZvqDATbQR8HukhrnDNJWHkRBfpi8Lw",
  "key14": "258f1MDab1LcozbbPE4DyAo2kY5iCNqHSbmAcKaERN21YPJBy4qZMp7zRvfYFni5xB7uu88MswdNJkwDDdYuaipZ",
  "key15": "4fZQ9ef9RibgYPrnjFneK4RNrLHpNktDHnhSU7jxhh6KiGcRYJ7UXRg1eyDkNTePjWcMYdiofhsqHbDdgv3nw95g",
  "key16": "2Qr3KtZRySdS1Mh1Z3TLfAhTu6ZqD93z8Zenj7bAfm49p7h626Udn68GUDkPrLuuMbf2bvBKqYDQGTxyTP4T8LfB",
  "key17": "3vjFiECERYmX22HC6QAMzLe9h3wx51HGzRrwbULFuF3nS4F5TSNj2LzfaQhFRznTkG9w6yyxkfNJz1mVNN8vkeQN",
  "key18": "XTwCUDD5e27gLVjYohUrfK6U3CMsVhq7eL3VzYGrxKk7i7ssBnNQb8iFaKC96KUvRr5LAZHwe7a5wwcsuaRxxJP",
  "key19": "3xCnZadkjakmv2GshysvpXkMJ8f4FjWN72c6FNkGuGCoLwkiFfbp9D4yK3Hs9h4x3qBHjbqoQWn1UWt8qP9GyGmG",
  "key20": "nNVMYEoYMLWsZ5QjoidcuioQknJB9mRcwdWMkLbeWsVMpzNexbH2KUCCA4QUrhvsXVrW7xoKUKwWEvsTvmQKU2r",
  "key21": "5AFWqiE2r8JabQxZYD2cyXNRY6vVZa7JhBAd6w9pwU3WFC1gwZDSS2Q9qXHQhkVxw3kjsuUAVAQJApcugpkSLoNM",
  "key22": "3qgSUz9fLyszfrR6fzyqySinKRf6Q3zPZhuqak4QpJYK6WHULooETDkEWTDgCmPHwFbPiFJGXofvnHZyncHcWvDB",
  "key23": "2vzoXZfnGZxy4NqBNWAYKKCU6iNyvoeT6uAjTMVMFAxjLzA7iu2CXBChHm58Ja3KaekifAx8GNVC4PxZ93HnK4Eo",
  "key24": "4CQprKLTeEQY4AqDJrAEj2Cvyin4dKftKro7wTRDTMoERxmaPwoo4zxeeGP3QTJjFE4BKKLsTHaaZxti2WkjjKNB",
  "key25": "3c28pH8amx4owWcCan19HpqUoNSqVYn4EhTdZJW4x2kULZJxzLCVuH744nGrKcG9TMTchcv5dB7TYFR9KoYwPFKj",
  "key26": "5irN1E3avuXRwc1qzBaE7QABiCBrEMYisksyuyy4sCxDD764eqNHCMPRmA5k4qyPBZbBmkiSCprFcM9KTcfZHRVS",
  "key27": "5kZXyopGEDjGtYBGpjbBzPShVftHTtCtR2sg7QmFfmGHGt6w6dm1f2gRWPjHmYeK9kuzWv1WZTiFNwCxLJT2GyvW",
  "key28": "2ZW8jzS622dSGRxMChnPuaveu2LW2vxqoYrEaor1JW7j4k4NCZFuHwmrSQ5RGGF8D669gUtLzRjc3GZPdxsUM8p2",
  "key29": "5s2g7XgvWJNWgyvuz9h7rwYgan9DecdJ5joYFGYL8grEXV7PjCnhQNxKJSqL5GLChdPFpUbv5YxKjQZQiQfKTWh9",
  "key30": "5H6xmNJaLg45hDCCbZqfUwz37DSsLqoKqaU2yPe7aoQ7TLyDUaHaHQUrN2QXBXC1HSUNjXqnLT7iiKgGaHX9zUM4",
  "key31": "5mbHm5GcXur8KQR1qiCFYeEwjcMW9kAj3uDFBftnUYKico79WcVyCV9KyWntM8FC3KjBY2oN2Kt7AhqjgDNJ5cxa",
  "key32": "Z4AAa5gPFaT8cvvk42TWuSzormLLG9VUscvSGC8h1Js8GE55N6cDZaRpqTKpVC1cbMcxZs5mJCWrUzUJ2L6ztYH",
  "key33": "4En8aXxdeBXg51xHcYJrJBVtRFRQSQJBtJJ4L28ifxQtqBFtUJtmwNzTLw1wLijvC4tY5jSLxPT5jgCwqDoEzbsg",
  "key34": "3GYCkDP2QyjDLjmyVEoHfcMbRUqMhBm5sXcXuhwTKxDivd8v1za7M2cXuBpevh5sf98wdZZ8r4otHyEiiWq6cisb",
  "key35": "2drETm11193KJK2k4vb7QYGx3U3498ypfm4yof4tpnDyFN5R1TCB2A4C9Fm1XzztCEsCGu4e4vo8sMNd2GtmLWPZ",
  "key36": "3Hs2Um5wT9V7hdaJ7SaiKjKLMbXvmL2AMZviHxSSnvFu6YVuM7EqfAkVnMCtA8h4AN4MazixZjHYoMCDUynWS48s",
  "key37": "2hn5PukvJrMCk4TtDdhYeENoDoAYENbewCkomP9PBRiDcNGxQXxKX9jqnUGdq8uHH9zn1qvtu9hkqmkke7Zhfhx5",
  "key38": "5oQbopK3HuFcMM7thEPkNUMaB27ChUU5iCPX5fXPKxG8PBQED6pXc66Ghm7syQfy1T3SbfsN2t3ZsHcQRog3Ch5Y",
  "key39": "3UrvYRx1ef5ky1M2SjKwVCzW1bCF3Mox576TSiK46nuL2kgMhHQrzsX1GhfuipWHoQ48hiHBt4VpzkdST1Kq6gAG",
  "key40": "3VanT4n82cvuaDeajNFptqHjAiLJ11tQni5FzoyJd6okTAYKLrSkGZF2Cxdced2zXwSdzHkiKx7PMEUUgFtbyL7x"
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
