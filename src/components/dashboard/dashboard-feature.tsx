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
    "2j5zcu1ejkGEjNPq6cdzW1PSVJGLFqM6jaK9hbLW1d2SRn9BWkarbCFLvgDHqV9TScnZWVLsFXpCjR1zitd7GiCW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mLP9Q5WYh1fFj7NDF637hV9uxCXeePxppH1hzLWWLUirXDqUXPYLFfdGmtwFn6jgmhZCihzpCVTCksigJVWb6QJ",
  "key1": "2ALA3CFyq8VhooZfRw3snWYg5rN4RzhWDvG7GhrwjN2rSa6xiYVSV4hMY6vrAfQVP7DhheG9qQgK7yik398XMpL8",
  "key2": "399n5F3eBbrNjLLU2gdoiLVzDCZr8SfQrLN8SK25jMwS4txzR8cvyukERhoYyvGxxdLww9f1Fq9kJRDZWJZft38h",
  "key3": "3q5EosqyR8xEucWPhborLPFg5gdQqo5ezQKHrLYaeUTP31rFbPmvdNKwqfUyjmmr6RrWcyhBjp8AuCSFxo72QfDC",
  "key4": "3qg1rfSBYvDPhmsXjPEkuPY5Kg9fRz5HkimiJkqc6dERDU8iPiHmP4cXK6MmyvdHxFWBNqePySPZ2fsvBnNVWY4h",
  "key5": "JBswQg79LnKDbjSxj2hEvg14FGmDZ6RsZMz42qHYafgBG1WMkJmnaVcxFxoK1XDAsqVL2eRetJkpmNexYjW2DrX",
  "key6": "5v8mFw4cNEtsy9vgrp4bkmeNbSV6Zz4wsfJVmhCz6A5s6AuAPn84byr2Vj2XpBTWZwP4n5vuoYDcVzYykQMK85Xi",
  "key7": "qvUkXajFbd1DNC5hpUES6ArTRSMDEvS3bnB1Ekgm26ypp7MwsjsWpQXkeSY936aXu312x3NLG229HJLW9PR25Zh",
  "key8": "4YYH39XSU2rvSkDfCzBSAYTKoBbwevT1XuMXremtYx1N4DV7qZVx416pEv5cxfhZ1TY37rBaohUwKytQLPxCB5Mk",
  "key9": "51mjTPY9UaEpyKWvPKic9yL7NHEJJjr5ZdxcLQ4EJrvQmi1o9eNLvtp4DNUgqwk3B6M34t3D1AvH7SXAMDDGnzhC",
  "key10": "4n2qnVZPcWU25tSkbq6acY491BETu2hYfsh27VbF5qtMs991JMFAasqJXRYoYEiUoAYAKbAaU6eELJ3nuCThvrzh",
  "key11": "53AfjkAT7QB71hVBWF5yE1dpzfZtSBA2MD59vKPqnnpUfss5UjnhnwNDVMEDTAMGfj8cupgYNfDnqqfLcwuYi8wg",
  "key12": "2aiFmkpubCcDri7r3CrbWXRnXZQ3b7att8xtFKAKqYuUTZ99gGWcPSQVLRLEEHnuxSZB2N3asadDkcqLdqKi7XEu",
  "key13": "e45sAmz8kmGY45V4B59UHhgfXcYEsZwaXsmm3HBGLmjNFnhModaQGKY49q4Cvg9ZHGWU8NdV8VBQvd9fZ75KXA8",
  "key14": "R5waiMFQNyC3NZGMAdBHfpGXYhuvCMtL4hMaX5bLmTZgMywNTN4SCQEstkqrDwDtkY6W5umMw8zpb7NutXLDfax",
  "key15": "3FF549RkQMwVjYa6oQ86PfQRABb1Sw8MaiVZiPhRjH1fFsTpfpVfGe35Brm5DQZz2PTqVNayMftGnezLLM7kjfhy",
  "key16": "4FW4HaPUd7wmt2dmnR8SuquTg7jAxGhvJBtnW8c7XRGovbAZxPWTwZYL9kBDDyWChwf9HGpgeGEz6nNyMUsfoXTN",
  "key17": "5m7XUfXBWwfh1Wh38Hb5kCorXXv8d58vTZREvzqDbSHn31TUDcVk9dTFuKgqp3AUp2VyndL3i2pxfgpmVpSAVAet",
  "key18": "5XBN2TttAPerLoahWkPxgz9m4oje7o1mgjtyTbj5TCGeuEJpWU4QSdNY92f2MTiHtcWPUrtUuCQmPHE2o5pRobr5",
  "key19": "46zDsna92ZLmqsTXZozvVMWR33G19rNbYHGERGoZkGV1D3qRHLyrwvTp2AtPBCfFnNW59uE59oPWV4Hu7Db6FDW6",
  "key20": "Qfr9gzKyYHJVJVFq8yvMBpgdZBgN5QGU5N2fRQVNMjV2V6jZZe2j5eVQRc2QuR6DuzH9qqrcTsdmCvHkbZvSXck",
  "key21": "HzEpicELEuakrQxE9pGTYh9GZiEdjDC5Nxe5FRxUGv9rSLoEzRSTXDEHva26oQcy4tMf9qT13wzbaPyyaCeGztf",
  "key22": "M7xjTR1jBzdy5sqWeX6uL9qNqQPr2LHqC3QWLvrQrzf5AR2fqyiSEv5FaaoAZ7YcXnpwWSRZwsQk9dpJaobnU86",
  "key23": "XyDE2GHvs2SdT2THJCeAQUMBmcrS2TgGXX11hoAtceyMQCr9bkA9mzsTH75vwZg5UDS1MxLiYrYp8S7dHhNxQva",
  "key24": "2wxPP3fmGpURNKbaYxBEUfBpUYzCF4bLQwzs1AMKVDaWBptir62tbgGCZ7q8pYAZoqV8mR3KCXbzAm4qTErfKYAc",
  "key25": "UC64ZPyhbecDKLFs6n2vPhHiKx5omMiM4SPDwN5aVpYA3uysLVEmGtMU1oP1CzGt3tESDudfeaP2rhxFkok2DSx",
  "key26": "5Z2PqjQ1E2UajeypKLxSRZoBeUZGLKVBMktxdN8tdRSmEvDXxKZ81JtksTNyh1ZLgnKq9M3yAUa7m6GS8T2V5tEJ",
  "key27": "Nqzb4CTRdyFAzTRXFhApqBM5TH2sB1rUhq4BJkDHJ2bGooKyWrRd32PBiKQVxnvHBAqwdMWEcY1H2ok8ipWkqMq",
  "key28": "5FAZmhpcohk8jqVNhhbSPRTb5Goz9cXY2XsQyF64yGGzSv7oAHgAbBaVVTJA4VH5uiPSFQX8eqnfAJ4P9FHva7hd",
  "key29": "2VKabppyPCbLx7CZ9dRZ4f9UVMmgAgkU4M9ZvGQdco9rFpvVXBLrzU3xnPEgj1kHZ5C5gq51AZZsR65LPXDU6D7e",
  "key30": "4EnHte29fniq43VXA3t8mo3rYxGGZfxATwNWwPgr9i4zYHGG2BgNhiCtd6aTBsSAFFGcRsnVUF5zKSPnYmZxC75f",
  "key31": "3134FhcAYv2953zMxJQrnHbcbsV3z1ybPkGfqZNEDr9GystuBdks89WuBk4S7XeuFKtzVZtxATXm53DKvD7Qcii5",
  "key32": "5chHQnwbjcCMK3MNNebdiLU2JaYA9YEvtbck5WCxMUHmYehNxsQPcaGYNBaFX9HaM3oQ7jLkWmt5qgP2sRaH6Hpe",
  "key33": "24UmoJSYvaqcMtpwXz58zPC5AuLcw8QYQ6eMMb5pt8ogTqZBQr6hB6QkqyzLw2WHGkqLb5MN2UyTowPzzDa91CnZ",
  "key34": "2jntBhVBg77p9WvoKsoQbXZr7BPLUxKBFTQ147cLN6vjBQAxHt8zvRGsWk8Dq9DzxC6Eq8ZZD7Ye1S7bdjTKfuyC",
  "key35": "5kLhfafjfDCJXwxynaLyoXhAsCPo7zZ6dnNgGEYQnczNXnkYS4Gkwfy2M9crGAvsWuqpdVFhkF71pXPpBxmcuKVT",
  "key36": "jURpcy4qdM9cQtA2eMyUQtqyzLQQ8DsuZU4BuNrez3h8KVvoY58k6AszPqECdTQMgNMuSGUm5svMr31bXA4GKXm",
  "key37": "4mJPzXACA4VmQ4vsKyrcr9Bea3Ey2j81eSqLCfCZVW2yyoLygiNjxL1jauL37qzBck2Yi8gDL5KuwSm9QpKwv6ZP",
  "key38": "5PtfQGo3XrZSXGdnxbgBcvvJKY5bBQnyKG7fWLWTpdH84qgrSi5cnQeU4DBssyrDVU7JLm29f43ZssgxERkMP5WR",
  "key39": "37KQhsuUwwYZ6vZ9wbNUg6DrENg7WbQi2XNx1KzARD7TMuH3YB89JRXm9vPW1PrzFbgc7J2QaV8rBN68BAHZRjnx",
  "key40": "3TTrej7Mk4AFU3aARo71d7zLWjYfPSsjHt1sxsqpRuX4HK56ta5LrjKqZ8fE75wS4XB3XrMyYN62vQ3PnMyTpKKt",
  "key41": "2uzp4xEUs48J5AjrCJX7jge5niM92gp5qgD6DXE6MUydxiFFSqd1TbyVWPQ4PDjQJoEBt4b8266JmEShUp9Jmi25",
  "key42": "4pHLTha1drjUuZ8vyFAUNmuLYDyBjCM9C9jtFW38UPJGQ4JYhHaumNVfvcsspyhv4vYUePpvP4yUsLYMtaCwCiVu"
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
