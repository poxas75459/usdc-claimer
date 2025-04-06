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
    "2JAzALXTkwHFtHErANZbZ55YAAxaCACadnubJuUMG7widr2upCmBf65JHsXFBJeEHyW19b2TjBsX4Y7xR9CTUMKg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XvN6YE1vo7EVXzhdGBCUtArFx2V2JbVdynZzA1iYd8pKYStHGfRikLnmPHeke9n3f2NYWBjcfDm8LtpXMfsNbUM",
  "key1": "2RQoaCixU67QvRgATYqx8pkBMnktDpY5nrJacEnYGaSWme9io5ygZ6taks8Hfwi1unumKW71p6wEggZFqTrok6Vc",
  "key2": "2X8LrbuWKNCnthqa3ssLeoVkvADeKYa67KRyYxJUazkaA2c6fQF7L5DFZ6ZNfLk8EXjxEDSfa44h6mmKzhumoHFq",
  "key3": "5fWJGNBqPj89Ym8bVzWdxST2UG4bqETeHKk6cYQs5RSo8CapV8teqFJSAfz2fjpECKG3vYqUbVzQCx3CfnzDcmK9",
  "key4": "4mMLM7uvu5U1Z9MuxuLwr4x7vZ9NEpKQ2sTbnZQKEoT1v3AJEbrbpQQb2UtpTY5RKtr27RddCRfabNAsdnRfcJaE",
  "key5": "5Vq4Bfw4Xz8kCwj4RYeLviJhhemTQHZJ2UgiPAEdprQaA9De4RdMbKGvX9Peqck1Vqaf5H4fBHy6UWGGyPvmiM2N",
  "key6": "5E71jTkN2FQbvFr6aXLxBTSnC7oa2iUPovam1yEorsnibCQ2ENcVQwbHSvo7xujWAYNWAydn34rC4BtDqEnez3cy",
  "key7": "4SS6qFSdeeWfZHPjB1wv56JyegS3tpvAY2JHxhurFYDSLdxyxuw1GL3qQARvDrusWQqufhQh1apGTWrUpoNu3kB8",
  "key8": "59f3unptAtycWRKYFRdVy9z3j2YoqhxsjZ9sc2S6uuq265fTXCghmYRru7QD6Hhxv3YT588cp1SYb65GHqqp686r",
  "key9": "23joLihVgxa8uDB7n3ADrttxEWqJtiNkNT3v8xBLLwaseBrxnuKEZDbDZm7ZoABBRxnMQfguJLhyZmGtaoBGWFwb",
  "key10": "3Dz6XAVS8hamRJ512uo3aL6yZMNZsm2HG9dehfp8RRx7YXuiDvmsco1svo9appJJq4MGrVzUxQuYPWNVGBbkKRQ1",
  "key11": "4oR6bixz1b7Ym3cZFcfoKGbPZaXtT7FM3UAVJoP39dk4jx9i2wMzmiNtztY4JWKYQiZBd61CUJKjjY3AXnuGFWEe",
  "key12": "DSPkuvdhQugSBo6qoMCaU7cpiwPFqZHdYyrbBU7mwrCKBJhALQVXMNuRDgwffteaHsw9TADFQDiZKnMAhJ2CBdo",
  "key13": "3hGEXUjV2XtLvpLRKtXWKYG52yWFwP37S4LEF8JqEofukL5wMcPCvQUEoEYVEUU63CNReVsyNpPpPrZvt2ntSNEp",
  "key14": "UQkHEeiudBdt5CDg7obkfKUV6fRigmxXCeQ5nAUPwaTzAc587pT2x87UFrZ4asZh6RZ6F21bsLDUT95WDG7UUsy",
  "key15": "5mXszUE5AZz7xekGCWR96rYKiD99bUEcFuGM1VY8fLFwPiUj5X9pLXJRgMnmoeLRDrsoZ8ugc6JSeZMfgnAPB1es",
  "key16": "2TWCo1WmjZ8qyFN7KXe4sefCPWYBS7W9C6UiA3inMUdp9HCYdVtiZQibGVW1WR7c8WmsHX5miqEzH2E2esSB1r4L",
  "key17": "5G4WiYH9Z77vNxMv2dQXJd4owxJfR2scJnvpBveNp6ySo2umwBWGCWQCMTqGTYMih89L6QgQW5Y1uyNnio3D3Lur",
  "key18": "h5ve1E9Er9F9m7Sfu9fFWGgXXYtruB2e6c88UXi2xQHw4jgduzweWt8KoYMH5PG5oJWfeREn2P85YPpXxcoupf4",
  "key19": "3Gga5QVgbVKEyakvZw7fT8z7vTsqm8i53gyZLnFMB6DrP37MtQ5begYsaCMDW75vequA231Tb9zfRwbijsR2h97w",
  "key20": "2b1BMrfSRadXAEv85zHxRvYnfbGxUnPeysSAAEU3mDJQktNg4myY8pyxPwAYbRUP1eckKrajXwk8MpPXxXgrA6mH",
  "key21": "3z571xSsj8bonCr1VckDx7vsRQue2eHrUNrtwQ22TbqfHS6JoupefFkKYDtXV9sdG1hXaQThyyuKbxFdWZiXzqVP",
  "key22": "2h9HqpDVGyVEyVhhpWdks3rGv2LUKfvpTrH1UhfbEQdxB2AnP1mt643PQKMMYAxMYDrFL3T4omE7Joqpq67REPnC",
  "key23": "31AEt8dZpgxAkZXAgWSH1zFQbZW9Fddb8o7k4g45n1qD5Zjnui7itNCkPWq9fVS2gQXCzakc1wspno2kfDXepd3h",
  "key24": "3GsbeH19PEQaD16yTY58UrZdUQyPiUBJLq6oigEBp6ro4PSv3hU6fs3KGyZKYhFbEYd5MGe9YiWG9Pfe8gYyZhJ1",
  "key25": "WNgSkX2X31unUKGRM6tPmb3tRPnpWmTb8nagPnm4jRmDXF56T3iTmBU1XD52RdTSjRty1hN7dsh2etyPGERMXkM",
  "key26": "2WMF7PxL4U2ApFHrJFcKmzswS3FAQqVpbXEvmoiWiXtaHHG1nEWevqxGYEaTkz9ZEvL1pKb4fzQFU9U7nc6pd6QE",
  "key27": "4EkAWF9gmE9zfm8h6sKes1TSZaAxXRcBS9HAaNWxhQNyjoo3m6H4eXhJwrndc5HHjB9dMoSSJrTMpkgFuGmYJeap",
  "key28": "3sMgqvqohiz5azZ8Yp2QEDZ2GzbxBQEWGcbnecKiAbZZLVqjij14976TGHy2ygUgihSkjT2f7Van9ja3RpRe11ad",
  "key29": "4tLQ5yr56RTLM4hqvBZgprrJi6uLvMKL4a5CgUoF8jeLnQGVAc15V97WjmXaTkhXUNwQXkr1zuJbCsuZUtL8UtXG",
  "key30": "3SVSuZp5rcmxatUHpH6WE5dF6X7ZZCqxqmPj9hBE1Zaey8YkbaUwoCBisAQrfsQ6kBfjcSoXKZu5ZkQJGmyehWX5",
  "key31": "5YdhznnZtx6hEVmHyEY71TEN2e6sXLhSRiKPfeUSNKjJUYnmbpEdRGva79sS3G314uSUVi5RPHYoQD3SSH2zW8qe",
  "key32": "MYRUYwhJgUDnh4pmRmRAHSWTiYST4rPJCxJmwxHYhjbEoT9W38xFABbG5VRVmszzAwmsPdZq7uiSCD4JVQMLBEQ",
  "key33": "5SWfPzERGoP7GNgumWndNvaHvTz9q6UFKem3tuYNNZz5nE41Ara3mmGtW8etpR8s3YnVTfpfMtBPm6EhiPZw4dQ",
  "key34": "4xJdvqPtJiCBHPiqT347VDX6wxuVeC5nD9a5k9DfSrUuKs39gpmeZ9rDVa1Dkuax9Kga9QCe61CnZzGD21QgzpNf",
  "key35": "4B5GuUG88S29XL8dms3DcyW1DxkXVNaihbH97vUzERJEYbcrHGaqkkvxSr8bREBjAXtsqoSg3AT7HvFq9QHNEhup",
  "key36": "2Wc6U8vAWBgDKCexv36FApz3eeiNDSpRKYB4DQnMmUUTgAVLMCUoSMWENMaxx3XsYPV9X1eatvMu2KkBqMWmPR8C",
  "key37": "55cxsgvHduPgkdT7asAUR3MUxLbrova6JNnpHyH9Xcn6EDeKgZJbfwSnKBKLcyqi3Fi2iPj554aLzgqZUh7MjJmF",
  "key38": "48cTN3sxUPGRAUEc9frT8GQHZpuZGmk5PsfB4npqgsr3LES4Mw99ESoYzpeYx7YCpUFjVDqwhPfTu4S2z9nSjui",
  "key39": "32BL4nEmDeAh9GKUG3UfEq7cR2R7cnyYPK467RzuxXWVK7TDuGk3DDQZnksxxjxb1MY2MphahfCz8FiyqY857dYx",
  "key40": "4grpsCceAkQF2Cf77En6tCwvLQKZLunbuuaTQtnmuL3qWQkPqRUXFEgXDizs9wvgBUWSd8tSuV7L8pg8MKRT9FfN",
  "key41": "4ckUUJysh3WEf3TfsEToXhDAPvbrv7GYWhhyePCY1ZqkSceFgo55ep35r2WSGZwc8bHUjuG96WSqfxJMTGqXtcq8",
  "key42": "iMuKk5asuVMiWLX9PYCkyXqziLHRq6CSEPrYi55K9q22GZcND9gpktQTcDkwkG7FX9Z4k1EyEZ9LoFjqEePdMAU",
  "key43": "3FeTvFEVzcXNQsR5Bbrf16VZx1yG3dFQxBDVYRoC74NtXyoeFrnPgWfTVYJGrjyKh9fbJxwHkL9TC198j72k31eD",
  "key44": "5WdYHAa3h62FBRzwUg6pitDFwwFqC8hYCBH3G4wvkx8Ez2uqCjPkjw2i54iUxkhgpxs2wVdHEeJHTcqSk4p2yGB1",
  "key45": "46bVmVo2HShX9CbLFKGd8RNeLZy8YW6VqcPzfjBrpCovRNeQpJH245yoFw5bbg2hxvXW9B8wqh1PyDx7dtquVCp9",
  "key46": "59crbRARi1tpwgf1FKNMmZU8JrQeL8zDTJF3uDsejc5zjMHbFu6XQjqx1FxRArVB6to6cLGsc7iJ9Bx3Gvne4N9U",
  "key47": "xEjDiYMnkHcU6PwmEvoWKWVDUGME8sDSLur7cwjekhGytiwVJMPDAaAGv27gjcwxpQaAetrUsaE75pX5B9T91Wm"
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
