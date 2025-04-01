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
    "2Hy58LxnNtbMEhBBe3ubHErdeNtCANDFWe8YZtuDqd6Dh122yUzwW6QmsY7csFisqtkhmY3dTTZqP4cJkWfGSknQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LD8PTs1g9Xjg3Jbb6rqT46iQiZkfMYpJTb8LjBeAcp9nzbcqBn32teZZaFfbw8BBN9TUwg4S3q9SJ6TCkbP14QP",
  "key1": "5W3wGS5cWHjyLH2cxEhLt972uxitZC8LbdCkXNAaS9uHFkYsPDr56CjnGR9ZKUjvUfJqBBce7PPCvWZNyNwbmTZp",
  "key2": "61KXGDvqREFAmJcxhyHX4QYiKSpAH2oZX4qdLkTeBfqPXh7Y2vCTbCoa27RP55zDofovTnmh44tfZ8Dq38K2p8vu",
  "key3": "4nf1cCa9nRMyomVVoXLmYd2ftjh9AUuqjVW3k73ZFY1ufE1zV21ZtRHuN4UAmJnZAYNJmwZkjrEAgZcGjdaBJ4Gg",
  "key4": "4foGW87Wvk82DCBPT2gHDj2HhJ14TCyciycvgQtPk1DzQAGsmXctaxJ97sembgDkg9pftpk8i4KqD5RKNnKoM9SX",
  "key5": "3d9gLFPEce5qEewdd67Yk49PWtHUfgAdz7scxGyrsVucAYJki5RZ8GdmQE4JByfDiuQV8FUNHAiyu8bhCghsvzNU",
  "key6": "3gYd2KGqjFdpLcr32mx4csymUy5kvgwQ7W7KwidNXm5JT7NzFj9hGwFEW8joyNFy55haGirmxxG2w3zDryRiX3bF",
  "key7": "28254DHJ1adNmy3A5crV5YmpATwyUbykcZd745Bt9FMn1r8vQpxpizChLMZZBLdovJX322foSFsmuZSRu1D3mGwN",
  "key8": "2annsXUiWWrHNHeKU9UWrf6P1m8TBaa59unGpvssFK2qUbxSNXn5ih5v5AQTwYJR4N8qTxTBw1mryxnKVSyzm3oL",
  "key9": "3GRaG2RAc5xzdA9LXjfiWPF9PgGz8PjW8NZU6sJgRGxvbmHYh1gZ76KsUoZ9rXac9Y49Jfq5HbTFfmesz6xrsmFY",
  "key10": "5vKwyMPuryeRgSTHo3HRqfN8ArawpBnBziKaZBKPVgzwxL1XychyRzejF3msRCe16z4zjtcJGdTrEmqCfjHYtDJX",
  "key11": "38bEG5zUwM8kZR481jiMjLzNyaihBjvyYVgxqYpe1pE5chRVd3MZ174rciYjSq8mRwgmNvkMFkGBPNuxjmFdDViL",
  "key12": "5QL86ddw6cyrUorUdkza2PE4cMRXxLjpzp9dXGDwnFNT3jLvTcoKL4aSUs3GW7U9TaV8Eqy6m5GV5NN9syYrARG9",
  "key13": "yGc7ZAPHBTYkFwU46E5Z61XsXVV8EAD1TrZjaFbU6dBUWjX4ccEsvf2EX3B5cm5CT5gUvWrwVEkDmSqiSd6tJmZ",
  "key14": "5bYWrctBKTobWkQkxMC8Hz8QjupnvHN7in1ck86FFtgV2Ujn8K32qPfZrqaTT4THCGfzM32TwCnxGNTBGkAAowfL",
  "key15": "3y8T8AEkfqNRAiXcfTAR79KkrsVeqRMTKFvntAWkmZ35fLDKjFbkee1CwSAwXrLjRGwcCa8Cpk414qs1o3vesCGS",
  "key16": "385N29CbCQYfMF9vYusS53tWLqy6oB7abV9Fa6kDvMcxxDi5x7WVWTLkLoMYWV1W6qMcJXPDZ2BZmeqdzx52krt8",
  "key17": "DBAC89ZuU6KhyzkzN8wJ1mYhYsa4eyYtDxKmkQG96BdhsBr6XJoyAuz41rwfRSLvec8r9jme8po4eEo2xPZR3mT",
  "key18": "2QVewvs8nTYKraVkoEJAH8UtTv533KaoiPRPjL9mH8geArnV7RBHgBkxTAK1TV2dX7grSeKXWeiB4FXZ9dU76o4U",
  "key19": "81wGCN66WnWTVQj2mW9TiMcXyigUaoeaQJKS2mUgGBJWWELzcrcrZ2evypSsB3s2mpRv6ZcbSiwnaZXi8oEx7JB",
  "key20": "2Jtay2X8Wo9XT4Vi4RfhpxPzx3jgkCcUKDZ6E7uDFzV8AqUNgD9DbnAqz7agqHMXyH9RuoVhrJsL7qi8UmVp5ZNL",
  "key21": "29arjR6AwUaHMWNajT2vTnd2jipEAzaEp8suS9mpwTPVSv6xPqcBCVwf6QsEBHY29aCKAZDazAAea8GHqm8Y7wQd",
  "key22": "3HqfQAs6DsWijSX7PVGBDPE1Dxd4qbEF5NTfNYRxjunTbRPoZYiTivp2jeoGtn8qabPrVWCrzxHdcWyJzTaNHZAf",
  "key23": "3HbHJ2SvM65cEn9n7JWS5M5mnhaMSzpDvAvAA2gSksWnRHKapJTQXWiJNMsCzBzr4AkHjBrU4gDyyaAiQyuBe3KE",
  "key24": "kMLPnGsUxe5tA1ok31dMi2ZxouQxRMhSP9Tedff8citL5bXHea9Kv15ZuhDEVVko24s32as7cANk2JDFVfzFnCW",
  "key25": "3bko71x76W7ujjogUSYjVoms3bRXRTZv231TP2aTvyxfGDGc1SLmPMM85HFTf3oX6AGCRC7wRuSJFLRv5yNim5zB",
  "key26": "4CmLMQJ31jpncHmAxmpYgxZK2J9jp5u9nrhUW4gFEEEoPSXTpzfjZN3zH8YzJZ5NVjGkZFe3ySfYqAdX7Z33Loru",
  "key27": "3QE6NZZ1Hwpn1ew997qScodTrdEDmkqwcQS7JsV9u7pksdDdfLq9NryVed8gMmuJBSgyQLaUYN71BmdVxJ8U9w2q",
  "key28": "5T4x4s16rmVeXcDWePfsrbZ6khZYcKd1kxWQ9LTipMWNCTKA4ahU2vbVLe6N9kbkeBamfytVUg9RzSgi7crxpEJt",
  "key29": "5dTRhp89Cc6gYxSG4c2rK4vqQ86xhtf9MnZfLPSRoEGSHi665xaMRtEe3BxNTQPb3q2gpvpdxXcioy76bUyySqvv",
  "key30": "5JHE4yZdSzk8XcVLEgkQqKHjiCx4FrbBAscfgNSu8o5Hzw8QHHGxPgsMhfBuYQMJ34fUhLxeCeGo6D86Z6BcYFZB",
  "key31": "4qTquGQ19GJHHDuiSh8J74obGxW2dzPj7r6N9F1Ajj2UWaDcWXjE6d3XeTp62XwM3SGSi593FCtmUNP446Q7H8UR",
  "key32": "5SGHrkhWULsnyszF9zXQaQMppD5y8oQS3XzY4RALUdqCitZGzZvMg9MTgiAWVTc7Sp7Q8RN4AoGAt4B9vFDgdGfp",
  "key33": "Y5DUe3irUCSTpcyRKNBtiWaGuUhhHynJss6yQCqzTgHagMXQM84chMDEev32PAkuobkqjQ7HLUxGrzmxxerYeKM",
  "key34": "3NZzxTqtX41fnGGdPurMHVNQVJYrx4Xbx7HCLWubkj5ZXggXTEt4AuNVSJDuWmkVJoKADDW2mqZWgsSxRqKAH2ur",
  "key35": "5Y7F53Gg7MPDEujYJzq7WQiFiLCowua8EAEYEBsBcjv6c1KqMyuFqsXm7dcrWYDpWMvUpVG55gLtQUeTeZWk7fY1",
  "key36": "HtQWjhxRD2c6LSmMfcV6gWyCBYiHs8udzNK3xpBvGPNCnABHRvDteGk6xYrH5Ey2Tn4m3fk6XbXwc6J45pEmiQS",
  "key37": "4JAkv1RdeQ655c8pk9iK36oo4JJiYktDEFYkUyxKF86YvhkkFVU4ntUWaC8VNPdsadnMx5D3oCthaHikskQMdFnT",
  "key38": "3DFkK4B5kBy6Z81h3C1wh7HiJPJwC4CyudQnhD6qpBKcgTqLbSwrUvrSe2W21BQpM9niE6LAdsaJxVmazbXHUr3Y",
  "key39": "4HJqvUPJRhS9SWG5cQsSZXJ97VeaoGtSEDfDaDFbn4JBqdot1PXcMxN1gGA8w4vYsZ9fe9AUPdd7HJWxRyv7QSMW",
  "key40": "2R5Sr4mqsjqAe1ScDRbowENsYPsBk91dMZBAiAKGVWySppsauQ9ZPLZ6WSQ68CTYKyYGJ3vQ42i5Myxs8XBUcLzX",
  "key41": "NFzYkiWEmia9RvaKgtwUX8U3KhHeVFbaeBbjmApTV9BftguHwja4x4P6jkWxmvqJJziwkwzfMPRBr8C2u38qp6H",
  "key42": "61dfoWnQFc74UnSXTtQajMAo6GrqGY5XssHBDBU4HoUE8X3e2DRyD9oFFZ9WpLiZsDT6Ep6hRQvYBVcWSW1L4Nib",
  "key43": "3qpmuvnSJRknxWycoH7ujXYwJPbsnXnPgXmSVdhqUWLx6Wx4FXdHhMXc3JtUgJ48XbDY5Ht3dgN4iyqKUZUiFazw",
  "key44": "2AnFzpv6wppKUR1fcxi9ayPEdLq7ehgGyRvzWLpMuLbPKCsQVu7p9uCS74wf1H2ja9Y114ndXZBwe25be79Raqpn",
  "key45": "3wTb47ZMtQt6zdxxfoxfnofk12dQVNoNVMVmcR6eD8sQHRn4Rhk524fb7Ri66vnrxVzb4gyvhY2QDtebJ7CKMKPs",
  "key46": "2Kx5vinLgZ3J2MDeTo58R7hBjPMEbEoDsZkpbggDgUfFHJ9rNjx2129fQZziVBnHiHvSwCAC7yaDpAHVWLeFREED"
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
