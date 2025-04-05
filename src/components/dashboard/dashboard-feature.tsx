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
    "2NWQAF8uAToGfpps7cczVTr51TicWtRJn4Lz78d4Uinb9rgRtTUrPMnS6TiZGPoGMSrfWMAbT12PERjP3p5PgmCc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31hnooWA7UwuSy4ZX3a35xkMUX4yPVMe4sEcjFHJKSRb2WKUHXxdHuVeeJroxjtG8az2W9zxH28qAT3qLaaqfCcJ",
  "key1": "3xatxHXiooewHBdguZxydZ3gni49CpyLzM59njgTwRaZVn55U5HSaXfhtsyio3zU9aAVSLL541xkwzFyxPoMFsAx",
  "key2": "5GWFroyqDyyo4dTegy47UEWjdTZs36S5DkymRFY9xCGhDmVxdYqpP444WjKJjg3dYiXjodDWiJUbHkSHBF46tiQr",
  "key3": "4LpNEStUdWWqFePvc21o9AGhyMPMbdbwo7mmamcWwx4K6GVAjugqxnuGuhx2jG6UC4Vbu27T3gKgeopyQJCkSSk1",
  "key4": "23qnr7qfXbUNJc1b8HQXNPnGFsYmjTUiyAyCRxpWDgLFtc6TZFD4BF5BRsmDdp8XMgsRiE61EVhJWTKKDm45ca8M",
  "key5": "7WytbpMk33PC1JQAny82Yu9yS92f59RyuBqrkPFzGN5sUQottdv2hxDHnDTmYFgqY8egyt2fks8XhTGyNxDwnVw",
  "key6": "3TMqva74opiVYxqc1cz3LhzH8XQXaTyfBRxEDTnCo3qPCydYCQdbwg2hU7cREtLG6bGYebbfb7gGoiMtfAtGrzM",
  "key7": "36czKkhBSpMmCQmLwXpMXNa5R8RnNXpqB2rx23nc3k2PuEjNdcUkB2RY2hjENHK8Y8ibrcvzsSsfAfiDDz5g1sfZ",
  "key8": "26zx1otYkB1BifnsfaDkmRfQtaa6pU1XT6QUYYcpVw3TLwpvTKoRWgE8mxmkNFWWPK8KqPjq8jDwRuupgtg9wT4p",
  "key9": "59EommQT2iieY83LSHTckBrTJAwwY8JhBRgPVtJ7rDNrcueQkR88n8E3tAcMjZFfFViBDFX9TYyUUo8gquB8dQUU",
  "key10": "2a62f6v48PptLbAjjD8CdeFh6kKtnLwY38YuA5odef7utbaXbZKoC5Quru6sYMGc4kgbM6SyAZP8ZAas5zcXHRi",
  "key11": "hThRUuV4mzjzaV9WKwqebSefLr1fRJPy5cTCGfwhYtdo1irLGvmgxJyyKC596vwzEt9gTq2YXquPdDUy7GLpq7i",
  "key12": "4YdgGZELD1GGZP6huzo5NnprWvPDreT1PBvzp9XJKbzJFGr2HKEHdqSJd54WPHf5ii2LV2t9c9qVZU1ZHFT9SLRF",
  "key13": "5F6mTrPJDZGB7LE6fjESL5eE48rvktAvvrCSiJmuLWiE3juZmCMbhBRPY3j5BnWhDWZ8KusGB86gstkijkSvNXov",
  "key14": "51QWuFU3XG8Ws8guYzSdDzVJnYRbbYzt9cwo6b5qeifbh7sjTa8ghebGdVvZAaDV8zCW741uW6YPnMUxr3pT7m7o",
  "key15": "3HkqwwVFSXvTLkb7Lujji9AYSuAyeck2PFmmhqm8MBBTDSBUgGwmNrmn5CCJaW6fDCVcJKZ1zkcPeGxxCW5xALYt",
  "key16": "62CSwgGZ9fUqxEugFjvoQ9uZUdQAmkHUu9VXqpsYPgKUVftMGdpe8bHfo7U5jLSCAjLjT6e3fqqKGzxj8EsYqAmE",
  "key17": "3gU8HUJiGmpGZDz2SDamGKVQbc6NK2HyRqWfHe6JDNFCnJRuJcqJ13q3o1BBzcd7NgoL4M88xR1dE2zh5wFoG2c",
  "key18": "yk9xXmgZNQCeCBM75pg9uK2LihmqSxnc75nvGYXHFZyBKQVHbJ8cZR4E85guhudGro3zvRyvYi13ZjDxYzPr9Ln",
  "key19": "2iJ8CJGntC37XZPJyFnce2d1tW7iMC5eBCaEHbcKhrR5ZGaDefBd7kGMeK6ZcLHffG2rTHiE8sxaF1LtnQ8BozDX",
  "key20": "64KJaUzZ6jwPnEEpAc1XuX6ypXLwYYRm2afMsPbbg9Xf1JV3qs5Stzn3TSo9n518XRGBmf4yqXsJUkWqLbR7YLuU",
  "key21": "V9tktFoeuoVbaMTE1VoGikTadw5Z7HqV4CaTjqFm7xGJtfXLLnHYtRP2duGkDdQgmprKdUrzHnJrLaTP5gCKJCQ",
  "key22": "35ckZ7tqJSJEXSBXX3YP2CayDxibFDRXPQ14YjCJepmmvmXwyCBPg2N7GdhXksyYqZhUfyinQHyYsovdSTYDopB5",
  "key23": "4TQfztdQmmCDmaYRUUtDHsMDDxwmt8miK6viRHme3LzLkjdLgEyFtTWMATv8B8ZFrvbveFVUQgERoWcLxbcDLRQp",
  "key24": "5CTqnXtsD4gpd1aBDSPYMeJY3VRp3vniWYTRxKCg4PU4ADZwu5r6YBvhKoDoZtG8jcGeAFaYNiGFhWGxj5DtFU7i",
  "key25": "4wsFZ99VeF84ScjGZ1fUkWkf357e5f8rfFN5Zc94tKNsytKUaEyMfMbTESJrvf3HFvZeFzAV7yqBaa2vAaLoQsHa",
  "key26": "4nDq3GY7JqrtDwBTcnFVfXt6yqeDzBejkUKHqPhSPmiJb2JSqhNv61CtjLfbRyMyemZGVuodRYps8ifKYmLTMRxY",
  "key27": "vEXUxuZDtgmjUYD5XfTwom5rmPsST8VHqiXDr5EFHpQquc7PhSDKXixiVvt9b1wf1t5ZubYYJxDvVbzjsjwZgJZ",
  "key28": "2DVBKHcfwMeMq4uqrntEPQiPJFAwKwmwNL2WYWvqVGSSsiQ1CDMLtcjQFB4CEKz3oUes7DjSaZJu48P3QqNtX2et",
  "key29": "3V91rEdg6eKjdQF8npZUoLPpbXPkgHb8pvhHM7HHRapkcViCSM3MhASFQQEYJ6bGJyy4CUdzP9FC6nDopNwQqg5s",
  "key30": "8Mg8GhE4xLojzwUymYccwLUKpKtCDbGRGeHVjFSLGwaztuC7Fm9DJC5FRXUGR8VoRi1yzRaucNLKcmBEfexVm4N",
  "key31": "2QcXJjXo6TDdw5XJkeFhwFcaHFLcaGWizaSh1Smi5r2ofTA6wNBM1AGvw9wWqsBJ3USgXQsTcSKYJSNTczDS4VDb",
  "key32": "56KvRzj6APh6P4EGJiK7bbropDnPcn7cyMsQK5dQFj1aqY7ZAQfXmsN5DmybssfEoTBe2H93QC8tVxyLGBVH5JxK"
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
