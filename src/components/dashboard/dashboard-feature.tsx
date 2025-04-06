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
    "3G26kkbGUkPP6G7vUXjhDngcXwmypNggkRySYeoKUKpKV4AAHMDNwCAHsW6ZhkbDTfKvFyDuaK7cGAETcojeSTpe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GQDkcmRd6pLq1w8QFuGZfjGz9ajXKuyMtYcDpj3JJCAoKVunMZ4NuoCKEc78kVUvhYxTxDXNnHhmni19PK1qbXT",
  "key1": "34jRJCwtRadwejmoHFWiZahT1UhR59wHcw3QLfjNRWKaea7oEtJRqAZKH5ztmjbo5GGysv6C7CobfvACXVnYmH9N",
  "key2": "5mTW1aamqhBD3LVaF1yoyQvcRMBqJ9eJegW81tu8hQb4zewWZdwaBjdGzuqt2NQHx6BVTswYDmgWAAAZQQhGDivD",
  "key3": "2ae679hC3Jq2CkgQ8q37ncX4JM6973RN8zhXXGKASMokakYHoL3YY4DEm3ksrv1d2pFgRo4QKMcfSA3FiiLvqdwe",
  "key4": "2bZYhPDxzrRzhjvwaKL3FMH3aUoVgQnh9FYhscdM7dzXrj7FY6sx77VLJ7E8KDBqAdyZGUQAATDT5F6XtVfSsm34",
  "key5": "4Sa4aDAm2PXGDLCmYB8gwHft1P8qzDSgeon3wgRrsziw7ghUQMTSUnmFDRugvMy1spNsUdaSr5rmgoECiu5kaGmf",
  "key6": "21EbKMPz8AihpGpbmD2xNjCvnKMs3teSZ2GBUeknpszuYqA7KSEu6UjEC8CtZd3EQ3YJ6kySMDqVA42VT29zYZfH",
  "key7": "3wrBMHTHHrN98HQaRsJRKXXCn1EXUzGhEaVGjkpGdvqnpbxerhLu9cE3S9pKFS25jtxs7hEWfzvXAmsMp3Mfcesj",
  "key8": "4gJQovSU5nzuwz288toePDfZhkYBny9ZZoqQ6PQ1zS96b5ZCbQsRd6wpC7ZfKCrPDUsE3SmU3dBYCWCSNa1a7kX8",
  "key9": "4b2hVKWA2uf8MDdYrbKhWAEXfSNKEQkcGSLdFyv7w2VsqZefYs5qtcC3rfWZgwG1URK9Fn2T6E3VWJCXvQgd3drY",
  "key10": "4vUiZLW5mW67w3RNaXmRKrfSvoxj8VCMUt4ZSiq7Vr8FbRQtNbZhtzg7f92rAmsJ3rR8p7SZ8RND6iEEJTh5SubK",
  "key11": "2pApesUw1pMGhssogWskDF1LPgFgqNJNwuxRJk9y7CNg7jrmaDLSxtYdi3nWVDc12LjeP9Y4Ds8KxiM2APSw7TU1",
  "key12": "3EgYcnT3tTxuyVEXQmWJpZtZVGihG4ALRh95emkXkmQr5oUTnYZ4j7oWJ43DWtBA95y6D46sahscV4UKYAtP6Qps",
  "key13": "39bZZJuzKwPTJgJWtgTwPCbdrdzAK6K6yNefASVx6AHjuZpT1AVBNj9xJGEU8VeH8KjYYyrXhLsUMB62mvo5ZdY4",
  "key14": "3oyuUgKnzrxUcEW8yaHT7QQUdhPb9xEPVURmHw85vQarCEKZGcAr8LJEXQQbutoWXnVKXbFLJY3sJY4x6hXJvFLP",
  "key15": "2bSsjNSmkax9meuZqJ3NXXPwEGnF8Je329cKjevz4JPzhfv7BbHXT3gQ2CwiENSN24HGPZ7vVeg9LzXHfVMzgr64",
  "key16": "46xV6BaVZdrSVTxz6nPkRMJ1VSv7WafKu3KKCRxySL2djD3EScQxHgPsyYyM422WcvPqjyzNVF4Na4D7jmkYTkur",
  "key17": "5HER1Wx2JLMxboF74PvutHbxSAfH9tZ8JpHDvZgtn631CTPaJRJZMuAJgfgCvkugik2rzWQReopgKdGTL4SCJP8p",
  "key18": "51cBEnoKhpXjHactbrn4JYip3UnUBNcUPNViKnEqJ2JtRzYkMuQssV2jQB51NJequ7NP46prbs26md9n2MWs2U9y",
  "key19": "2HsS8Xetx9yZDyJ9JMbqbGgyTPQeVPa1FxKx9RLSrpHRaYVThaUMswJ5mNF7f5X2aaCuD5kXu5U62j6tKuCZVxTc",
  "key20": "5f2TvJ2ZbLSwbEdDZXYtgtVvZQVpE3Ts5H3x6uK2dBbPFSwKS9pddDtZdLFTjzqDu1TNgoiEqv8xa1LpyXKtxUGt",
  "key21": "1soD4KNNJQyS4Kcxpag1LcXvDEFfiDnp6jf9cP9eehFiZkVSHA4sjTAmrh2KUtt3jywMaKUn4i3NzKvNq3Z55Aq",
  "key22": "313vKpZWrsShcwDuD8Nz7irMu3BwY2ffYcTTprkZ3RJE1jr55fkX4Bx3NXaixjJ7ExLVgoKK2MaFuLUU4MH67BHf",
  "key23": "2MJ1NkmoZxZAnDYH4MnGwxqjZCLXfQm5pLCM8frd3P1ATgSn9DcY92b2Ky6Mcjsn2hAwZzSu3ihNDQx2FuKc5ife",
  "key24": "kBeGVMPTKsCTozR8Hnps9GvAxqoqRtanfzcCSghcR3g1jmAJf1mSP9r5yA57NfAdEiCofiyxt1c8DdVgBu5QnBv",
  "key25": "3R4CKBLnBJ2uqTgysVMvbzcNsYGBD8fR8cZkZFPTqwX2SrkxNJzCroWWb8TKYi8Q5tEaaBrVnN42RmxhsuAqm1uQ",
  "key26": "3y3QuVevTv6b7LEXNXkPAx8N9oZVaH5PbBvGKQfN4eksP1zhMSq6tCjL8fXVxoN8F6uVLAnXsi5pqShnH78U6Zrx",
  "key27": "4esAFWEtqnUFtscU4w3a6G1T7bFXVEyFQdov9uQSXmUoVbEHVqgYiPjAQiKLTPwb5Se3JuxzPhdME2AoVwtrA4bE",
  "key28": "4PFredpYjULDrSm3m6PcMxuo7p1xS7Vh76TCDMEWWBE8jqeRqm5ZMTqBBxS9GUk4LxZSDCxkjAJ5s1QJh2MEB6D8",
  "key29": "5q3XSsCP7uaJDTvFquPdbcrqfYn2jRoh8zWLJk5iTXADnw9TWEfzM1SaYoAebTanGskHzyTgbRjbjitHbuHGA2V4",
  "key30": "39QjCVssxgoa4aV7eGYEiXJYYYKg2rtUeqgJZ4Q73fHGCVdCv3BP2Pw9hDjECmWvwGRPgZsP9JrUD1eyiVqJhQsR",
  "key31": "3NHxuiBsCXVymTs1sw65GJsSx2WdJR1atSzyyvURVjtRN8JSsGWpJABKj8HGAuwToQbCjGdQ873BMWHTbBPnkxnf",
  "key32": "58CgeHeQUvmPdN1fXJf3b8nBHCSCHTwhqCoLsFKx5kH6FmGFJiVLg6HLHPNHebP1PZd2VpeKP4mWQjh42KULN4s",
  "key33": "3SKNE8pjxkVg5MsNGWFxpxNVSbLyuC5YQw3wndMrbV4aHombq5pZ8jRkEYzLrTxJf24Ykf51RsxJ4qh79Tn8YL3o",
  "key34": "3fbgV4U3Vr7ph6DX9sTC6DC52yDvAVSHuz9ZrTHfqpiLtwc3a6bkQadAqSRqtKW5DngNBCdVdTWgZ5SddPXusL8S",
  "key35": "bCoizTLFXPYrmzAN385W4CPgrXBm58YzwdQSqaqw7XL9QokHZTem7eBTmxpafccFzEhcWKefG2McE4CWcEnenj6",
  "key36": "5jC8e781JkrX9pqgGWifMGPt89hqJLiosiudHwEEoX9DNYUhAupeg1AbuG3vPH8Vx1BKidLSyAZuC3fiA9w8fZm2",
  "key37": "4yQn1xHdrMXhYV4iEEUugFWqXKW53x27FHC3KqUYSexVSoTyhMZjHpwrgkzLiXQrJTEpaXR3TmaDKgozbpqj6EYv",
  "key38": "3Z4bqivgeJFxiSg2p3uZWkwJ4aZLXnaSyQUTHxZPFbnzWPbX2EQQ7daaQ3FqMqEp9FZkfjMDEz4rUTRUcCzRxLgH",
  "key39": "5yfHTpvqViQekUGhTn8i8cmL3tLzsEeDNNmhWoDpmc5BL9zEjaC4CTz6dLLebCL7vxWMfxjuxjY8qajwLb3xijDY",
  "key40": "4UKKRWTh1JcodcncqmbWRxuW6HrQ51e2Jdg91PPzfczNc3fyfZXyXxevucXJXNT3qGhRjBgm2w3qLYAT7qgXsvkG",
  "key41": "2ZCdw5ufVwaUwJELpsTxG1drMUtAtPz1wJApNPqyGB6SKfDcfWU2uqPFCKusUVbTyPumduZYjBqSBVetpwjuZNPT",
  "key42": "5LTxDKoztWZ2HkZ8ZEFGDQSmsCh6N6kM6jK7PJgeFWX8z6pEpig5unRaAc8Dm9V8NVyN9jFaTDtnZR9CsKzrHQx8",
  "key43": "5zuBPrDNVMq364JCctB3GxCbPyn91Je5KjKjid4U8ZmrNKmGZ6s6JemofRsDwVVKrW8xiocohtKTbV9LuaCA6ueL",
  "key44": "3xC6Jdhop3Sq8E5PSe42j52BZDsXxnUDjAPmRfni6tQNx76ZAu5GYNTx5FCkkYKPTBVTDu3FLS4LzvHazLwUQqsS"
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
