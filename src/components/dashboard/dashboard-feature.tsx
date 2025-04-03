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
    "5CsspCTT1UpJrrVfvWjByvTkQw6NXy4s9Kbm99NdwQu5vimoUyWP6NwAtQQXGJFzRpbNTKnGwstuJcb2KYZiBVNJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "415z5dXUdoMhVfRsJ61Fng7dhVT5bdudk93YY7UHh1A4iNLVC9ySVBEwAaLRrXPN1qpNcSLrtnFFJw2eKcEetbYV",
  "key1": "KsGnqaxc7AtooYMLexiBpNTcap6jagbCHVeAyNaZFL2SnasFUdfS6wqURB4L8mXZThHs5BVkBuChKq6WwcUjV8R",
  "key2": "5HTQv5PLrmGHtyovgx3HBHdncdZkfaakhpAor6tZ95QjFzyzs52cLVLWD15NeuAiRo6oJp4EuXNW1SKZba65YkTa",
  "key3": "nmyT3sZT6inq1vGg5edAXkFDGA2JEfk5cn9fgRCKri21sRz36fraRx3WdwiNEvkz28HrcwjuuzKxEeK9AcgDRWB",
  "key4": "3GNJGkZXsonQJ9fAf4YufSNpLRaS5igMe4mHNxMR4VPDXAgWRdTY6u5kDAGa1jR7CGKW3ZPSfbspC5x2TsYpBTEj",
  "key5": "46vSavkof48eyro7p1kL8dedCvxGKhatMp5cgQmoqsHPba9sbuneekrdMqaXUjWUyKd9csnsZMCSQdmk1dJEP8se",
  "key6": "5BtZGLqqQUjqNPYMVTs7diXewMwqwA3K2zi4JpmCPFngUrBSjnkeKWBdC5gH2MzxMYtXZ6XieHAf72yqYg9HnsqW",
  "key7": "2DXW8G7rdcQXyNqYgmJDebR8YSeNMX833GfQqMC38r35qvxLKpPoCCTMYHmmHQNDJzpRK8fBGqeNxrRvgKUpYHvL",
  "key8": "2UE4QQmEUCgtK4qztZ1FUcLQvj6N66YYKxKeWymmPZekucnn3roLzouSQBEhLduYrSf9gpjXKnQ49Egyh1eVvrVn",
  "key9": "5kxgen2XotFNKLfg5EDhmEPexwFHdf1LhKYDHJ22EkR7XKVMfZCEJ68b3FJSRVo2123HPC9EjMyKZJjE4htziVoK",
  "key10": "4yAAKN6Tob534Uetrb62cJoThRafidimetXqXeEsRDmDBW71qtM92AHyu3t5p6H9vXJA9LC2sgyE1G3DTjKZe2SB",
  "key11": "2f5c4cy1VnttSyLqL8HXA7zJYc7rXwvNRABw3Cgqd3dfP1x9xiasT3LwXmWnuAoDvikBMJCThCa6eUhBeJRu2TQP",
  "key12": "2Ffc4f4dbYqNYhmpBqi75bQYJGn9uLuxRhDtt7eB6wvEjSn3mgsy3nwxZAUhrFqna5cEuWzWcFiS1G6xNbcBTeYn",
  "key13": "WeUedbyeh8AytX5eZEShiMkko5x4NX4vrEbkbB8giNE1mzM8AYdLUo4CJmjDzX1GyeWpvjAqiD96wipcYEoN2WH",
  "key14": "owpVntaPW5emXzTAPRLwMRT11dbkifiZAGKuchmq1xkrg7insmcDPF3pc9uqTiCgr9XRcHr38wg5XvTt4p8xqXG",
  "key15": "4Lsue9pWoMQ1dFVjzeJTWexEdNPkhhR9qGzny4Jb6tcAA5bYRCbDD1fwmht4dHixoURDFT8gcKS23hPU1V6WcSNW",
  "key16": "3mBfmUnthtCNPqFP8qyP4RUuFrhuttg6v26e7AokxH34C7NhgEyNeS5jEt2Lu6XBeiMzzgLC1TsSYFWYFnp7gKGc",
  "key17": "5BW2QGYMAbjMVRJRXGnoi7KvztdmNf53xosZaXeYnbJ1z58iFCvQQpJfPCxUjwGZ9yF9NXFou98oAtY35NRNkY3j",
  "key18": "5W9eQuDUqYFWQTfiSryPvRYj4TE9e9v3gNyhXuLeH4Q7vCao4oZKPAwFNFa7eVae75Xwrns6KU8ZukQ2Mz2isfLy",
  "key19": "4NdY7xeGxWiQghf5vZjPf3Qe8FoomByRkdr5aaZc3yr3X8ATAmzgabxTT1HSfChwmV44r327knoqGwHfdyhXrXT8",
  "key20": "5fR6VBA9VZuSRLABTcLBuS9jjmRFDLF2r6GT1BdxyJmB3JKm9UwM72J7ZxBoSFAxrvndgWp4dgPYQUHvMfqWoMcn",
  "key21": "448YRuufhWm2zbfy6jUcno4X3GYARbjA7GDHn6jXczEJyG8dvMXRUETbkXx7dzH2RS9c7khCwYKbR3iJDxa5txZq",
  "key22": "4H2TWJAxypZv71txmukkwmencpn4h9EjGrbfcynQGhGyjBXss2q4AzuznZD4dMfKWZDeeWKHirvumCkmRrXkAK9b",
  "key23": "3K3tynmWzazuoCuTbyWSMYw9g46TVVj7jS91MqGZxxYcs5WasmMJuB6EDHPxJNQa9KeTzF5R9aMQUNTg41KMtVsL",
  "key24": "3jAhmGYeWSmdGmLE8csQNbGRA4G71UQuUXt6LgB3cxG1YZ6ZZHciUxrm6LBAUgxe4rtVSvnmLgQosghdacKjrP5L",
  "key25": "2ahGg3BS7eh52akPtRjX4Vkb1k9diZBNuRj9ebhPdijG48V3KT6RGXUR73T3h6J7k9XBLmi4P37RP3F22pBYkeUq",
  "key26": "5WtdkTJGRPxsMuDnNwxdY2bYSpJL1mAyw1LVZ2Vi3FmRKVVqGVqodfDyA2Yf1aDgkq7V8D2bwbQqr7eV4BJJ3Zne",
  "key27": "3wyYXWn8BgDsCDLGskU36eo38ut6DwGfqJH527iPPpVdrwzNhRBxySMQUnVKcYLduKSDDf4SNpF6pDVe7wdCAza",
  "key28": "4t4sSbakeewQdx2XLRnRppoMpZ82ENsTFJn8n8yWPPNKcsWoH2eGi9wznZ3DPSov8fsacUByfoDUWKQQHVfg8CoN",
  "key29": "3PR7hcByayj7JWWgfVi9MafqRSrXrvTPbi96qBjRLxtij2W7SrFu5eUVEe7gDTuVH43thTzKg4dzJtoHnhDmF2ys",
  "key30": "XwWQgtU14AW9VzKrYP9aVBq5Hj3bFvENxSzN19F6fTygxNrx6rrkRVY4pFZhddhYaU5TW1nURwCQd1RTnzGgmx5",
  "key31": "4rpjZcd3heoY4LtATBGhY6VVvL8yRaP9k1oJRCcPgYiwugQnsLfiKc5iXQFp4n1RcaqqVXVvKD8zDNRAfjovLtCf",
  "key32": "3SRW3Xbs6976zsSmg7t4SDqQ5qq7CgaRWzgdfq4BJy3ASTe6TWQw72LjUuS89YzhGUSzLp4sAr3CCGXf2chqm472",
  "key33": "3G9H7cqAcgiGUyEq6b3ixrgTDnjvfLhXxRWN86LxFpHkUSJGHzk9fWYJxzLSsoUhUh5KeoQ6ENZzZ2XegAjJG6CD",
  "key34": "2Vh8fMgSuX2UNE73EUix87m3KcBsaFYwCgr7b9d7jfB5pjvAn8cuKaM4L1hGuXy1ha5LWLDYewt1DBjgW5cbWgZ9",
  "key35": "2fsSjG6uALfdS69enEzuMRxBYUnS8m95gX9ZDPDYQFoFpPbcC1RAv1xkYjKntmS7pf39Lrk8TDfRTYKYpcfDGodZ",
  "key36": "8x3nZuEHKWFyPVvueimi9GpMp5EVXSiLW2mu79GvLu6xr5Noj5Qo8sseoRPzGRadpu46jRrrj4kAUyNC142ze4i",
  "key37": "32s4pgNeHecKkUza6EzbfgSwL2rAwimufkFXiA8f5Vw4fHeysDa5JNq5EQR93FmrbNzh5ZGkLNFhpvpv2mAfRxpA",
  "key38": "2rfDDFJcYAkrcg5Wz3FZRxjfuG12bqo3Fs1DopziVDtA1Gt6gCQM1yUhMumaKBSJ1SoXqofZqJKJ5UqF2B2pb3Rb",
  "key39": "2zPtH8iWmQsmUVWVMD4vjC9ujQQAQs4WBQNB2AZYvcTFCeMBNuDjRkvdKPwWmF8ASMDf9Bgmsichd2aB4hBxPYad",
  "key40": "3TmYgPC51H9zTn13oHyhoxVFh9g5q98hTMHnDuN5C7ty8npv7SnMcv9SAufG8JVC4rtGoFo7KgpVMv5or1Z99rRw",
  "key41": "5Fap88NPvaXRhQbUky6sGEWvAh3BRhfvk7txh15xVB2DrcjNw8DX32mLTCm5TyHnfxdSoFsGGDJFGBLcqCKiRqFs",
  "key42": "2SsimNcHxVvQsrJyoTVMebnJgrVPbQPQEyYnxG3GsrVm3YtDhdpQSRcct3MKgkLhpcm57TPucmLLrVjKJw8ptre9"
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
