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
    "62kiYB9DjDG6Ey1bqnCXRVk2kvkhwex1hUg1DK2DULyk3yS23oUdGGNMvkRihK7PY2hmYz4reMZUBSeTQyHVMUW1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KAAptt7PuA7vYg7tNsirtTBYQE6AeYQsUiyXh6P1p94hu9HSpzJJHj5Cju1hTV3px28RywmPufKbHUgVXLNoLAZ",
  "key1": "5SfhU41uUu5D6A2SXPXG36pPA88pDKKeMAUAoEX3HbPmMFgeja6Wmiac2uuN77CqkkxyL1kNixeEv2ajpo3ue2Jy",
  "key2": "4cQuGhEtGqtGVLPkXbZjMSAKRWrTJAowizbPSbNvFHmHLc68bsvkDTNYFHCBpqjX42n6iJLTcbLHNNsduouYnuwW",
  "key3": "M9igTUB8kBhCsjn4XmwpMGVmX4cGcyinTy7JkifnHKYmeBdCTMq7k8zzGxuh9WrEYgMNsdiJyy32kLS4Ggo3WPg",
  "key4": "4YvH6yy4pkZoHqsfPG7CRBjVazR3fCtKoY5MYWVbfiQNstzaeTg2Z5UM3qFAjtxEcm41FSwFgkAufuHMfYzsYYK8",
  "key5": "5XXQ5oi2Lh7zRVaL1ZWPoThtFitadFYc4aVf5zmWXFs7oUwU4rPAJn4GUtYJP6SwsLiLkWoEVMsUvnQBxCxCj3Tc",
  "key6": "YMzKtmU3UwmAZzoaaHrm9pg57JQSgCXqhmJpc76U512EarUjzKLTs9q84rWaDcAeW4HjYDNdE7tTr7LADH4rpDR",
  "key7": "5837ZqyyC62RXqx5WhV8VqMSxxsFJh3baLz8Ypu3T1y8xtKrhkQQQQ3gQwEYtK8JdxiGx24H4Dm949e3wXBcw78G",
  "key8": "5vzPzYudDNamHMzyUstHXozePWmCpw5NXiBfMP2hYZwrDbopXHtjEg8Y8z4QC3ZR9pYHQVq6GmbRB6SafZ2HdutU",
  "key9": "5rbmPZBT2eXjQu7uVR7EJe5KBvqSqkUNsV37dG515HTKKcXkDCp6BtJHc2K2EN33W5fpsmUWZC6hnsVuJ3SWUGiD",
  "key10": "45FhU2aGR6ybSSsk7WSK6K7rkLiXwpqENGF9s42QfXRPoLEJFJCVjT1fMNRgq7PQW1fConNTqUheGAaj15PjAErg",
  "key11": "5PPfYKWXhNPg5jx4VBN8BN43y2J8eb1hrtDjUEoVprNZUc1Du3BxJ1tqpfhkCvjS5wjkYdtsmsgyT9tkPX5jR7fN",
  "key12": "EYk11npD4DkfU1H6WYTN3QZEa5tqHFzNdJVvZfgqgRbfKhDh5TcJcuGs8NJXYQFdQfsyNrZ7cWYTwZiQFBx3yYT",
  "key13": "kvrPiUPMyNAeHstuaGBvg6vPfqaWbX7DG5DE5znFUKGVTdBuS6sA5WWC5AEyVkFLmJ4LpZ588ff2uBPRfdYu7qt",
  "key14": "4htJgtddXVwq51cgRjeSFAdHKHeCpXf6yfHuVm9JUmtB16JDSGRFMZvPhq5P3C4ofniSRLCk9tQNNVRThGB6LXRu",
  "key15": "3WHUghUM2owm6TnRof5Gdg2a49boPQMYeLYdqdFwKFeYPsW1nAWcrk8AHBCkEQ2QeMcSA2fZwAGt38sJXfNnfHst",
  "key16": "2z3YgwUJWFY8EQPF8cPnzQa7QLx88KgY9i9WmKbfqtc8iXYeUpRm1aZvB516VQeoEtrsyEDfUiqX92Sg2FkwMhfv",
  "key17": "4Rh4xVWfcmGMQYNN1yXqV94sbMCrcJhxE7Byx6qTKE1LFcsGDrPC35XG4GktU6ar8fHmHLmezbn17GGeuXyhDqWn",
  "key18": "3FNNrBegFuF1QYVK5ohcd5HdFYQFMdztSri5uwyAqfP5pshcpWaFCyvJS89RkygAEpA3HcK7MBi9NW7dVZ8GzXyK",
  "key19": "4mtaQRAiy51gF6ZERm3yzt4fcyN4iDpSEd51fj54bqFX8jNTNNudn3mLCwvQ9DNqBhnfemeuZL3JYuVRfBi2gDuj",
  "key20": "uhYTuKJ8tUwFDMZS7YUqn8hdyjn8Yumr9prarnsCwCFQjuRhYzCiFSaarJa2zUNh8NcZGJcnoJeym3w8hnJnoN3",
  "key21": "Rc2UVuW2mqj4BHvULo1V4ypQYLwRaUj17cyomWhEmUCw7NLt39P1yP2UE2GKqo9qB31CPDa3MAXb7271rYZfxFK",
  "key22": "34pYMkRq2zMXiXCGg75irZ7XNGrpcyjBPsrJPQUHgGXv2ykRno2Ffj9mSWgsQUygWjueSQkTokt5ksYKjbgCxuwF",
  "key23": "23pYzCc87bVWmvrMGMfGDDZezzNCW2U5Cg7EBtbbG8xT4bKwbzPfL5nGaZDdnYPaQHeMAHMPyGFFsUNcjtYGPDbs",
  "key24": "4uXCHNNeEZ7wMxY2ARYzhsCUDnTs8TXc9TSTzS4z4WgKTaG3uPWAhzdSjjZzKV76F1HzBh6zJ63uraybDsZ59K8V",
  "key25": "nwHHdZoHo5od16nniz3EPkGeSPabMx34Dq7fyewnfsp5BhgVYsDbNC27PamSwTMuoY9i76nXt9TNmzZuKdc2yze",
  "key26": "5STDyRYmcPPLXECRewb3YXS9M1xtx42kMSugwNZTx6dmaLZ2b5dj16mxhdDuHcD1MDQeopFuRwwczqHXYSUr8R11",
  "key27": "2jFSdWbebxXaJbvcLjso6ESp6RptgBucuMw5otCxQAiKtA85JSyqteSyDGDqrN6DHJk5NH4qz3JG34Kn27QGAe4B",
  "key28": "5meV715wCh4C2Kn4Gb3sqfcPaZQ9iDQcmZXF9aJKbS2BiQLG5k9uUtLPYaVQmNLXjrqLeTgAx3SHpWGzdRz3QtmH",
  "key29": "yAJMzHheoxYFHm9DdwBxjWcYa2DUUQ7y565CzkJMTN5r597d2GEh5WMu6Y1z6vhp6rE9etVZn7jrC5xnS9SEswQ",
  "key30": "2nAgh2JZiaWGuDV3iWHgkZ2rXhgRJVokbDRZgo7PsMqkWMEKyWF9on3SMbdFKkD6tAGLD4QtS4VuH6HWpfC2gPPS",
  "key31": "53qU4bGtBuFVyYjDCWVAYGNcUdgkAQFHNjNmkXs425Brxr9Asz9f3dzfdgBhzwE93zhhL4QZe9Di1QTTPBpxXkf",
  "key32": "2YL1apXhZE8izNUbYRHoYPcwTZ1uTECDR8NXXi2RTybgJ8dgyAE2tpWR5vVgi3sZ3RqLiadBAF82kR4We5Z917FR",
  "key33": "33GeGYzQJ1yaQxhRfrxQnWvZwBEgtFsaQ8P8376JMr5vr6U5mxivS7vQNMcTbtv6PY6WqGgBH362FQSdWEMifonA",
  "key34": "3xuB8T8HUR9Sos2oABuAVYugbdgfPZUWRMrF7WCXEMUgPVtKajjLVVuNK8FD5tTZSfavjm4TMeoP9WyeyciDnW9i",
  "key35": "z79NQmTcki6aJuz4EGgzwAC4eEtaEoFaPqt6FVvjbdUSMaUxdZz3axStL5FVUQHmzagxgYsLxFoBbet3fk7SgLt",
  "key36": "5GZTHvJCs8AgzAjxXAkBzPFw3tGTTNJbWQAHmggkg5ksrqPE4iBBNJmBGreFqaYVVNDP6h1JqYdB8DSrxuKRWjo1",
  "key37": "5d8UxdTMCVAcbGxwXzgWvckKMJvCnZGZ9DYnLM5L7rjT4mZALvkkGuYY8t8DNWSeskSaV2idMLzEAvSAPnGk3RhQ",
  "key38": "5g9muCSdzAtjrKRdx2NgYErEgdWYbuVMGmNqGtPvwzgLpFNA7VipzcWiAQ3spyquQmcGuUWy6BcC67ixz6aG6zb3",
  "key39": "2K1vV9yAfJu1kqes7hYan6NLC4M8k3L92fMMGreHCaTR3gVMcBCRXt9EDGUU1QauLh6GK4HvxjtWdxSiGeNxiJbt",
  "key40": "5bf46Y3qSemvy6iAEK1jVyCi6f94ZagXH3FXn2gXAFCasPTUPy5nz2bNCGihQgE3msaaZm9VQ9FRs9jHMT3HFvhK"
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
