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
    "54APXfwqQy3UYyNLR1YoBfRCa4PNG1aa4F9bXAg6B6KcVi3622ABeF6kZW2TaoVs97gnXRxgWA8eU4g62EtE9GW4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34woSJAbGgfRcRFLJva49S74LjavkjVoBKTc88rnQsmTHP3cQLHedymxnU1WLYXvHeJCq5KBWS9pWkffBjc1tqNj",
  "key1": "4fxEKR3XNdjHZRqJ1crzeKpsGRUvHiQsSffo5LrBfoorHm9G3E9cqeUPidjgGgabog8BoZTHyMxNwDxriQpmaCbQ",
  "key2": "5tLSXk5x8NAhZmmhHPUhRskDw4GvrP6756BRC2qCKVHY47bTeLrZkjcyxXgoT8y2gLENCwW6qVCj9PDRVbcDdJp5",
  "key3": "3kN74N1G4AAit1GrFk7QXdUKTBThMr252XXqS7JcAUZzzzacq8DEHVMfPanoatVgoP9a96wUrtCt7ZfFmPNkkaYj",
  "key4": "35By6qszo5TKVrY32C1yWqpRmoircXWLkWuVZXhNZxy9KyDWvUQny6t5sLVHxUsrqcFdc5u9Z88mAQFVXTxxSj9s",
  "key5": "51XwjFNwmCaTtKCFJZtjmwZ9SnJ27QEkLCj5UWpDrDdMP8gtgoVaFuYt7wgJXnypu1NQ6NPG4m781MgAfKLdnVyE",
  "key6": "u6P9N9e9rk8g2Z2JoiBt92dWoEWS41N2xU8bMjQBwdCG4HdXwTaL1EAW4HPSRMkQ9fGwDfnhygENZhgBrxkunPC",
  "key7": "3bTm9u6kRLkwLP5w6eZse9oZV726EQqGUeMrkrTfY3QDimACmT3tJsYFXk5MYcPVqAaoLQzjBCZkFVMUKzZ8NprK",
  "key8": "4WW4yiy7y1kDEgFFzC2rqkTVgtzK4qhY3LX9LNR9qEfD7FVRCfdTDMAvBN7Sn88xcBWJ1XubEVJuFgCgbirukytG",
  "key9": "5exJL4ELMDw9W963AibbxKysBPJwH152wqkwKKxWxM5JXdepHookD9m7zmbJpV4PwmgL5Lumjn5obYZFibeoetjm",
  "key10": "WBhcztsFqbBuAxr4VWFRdcT8AuNjQ1bJ6Hi1QMhgbS94HigH5Av1kTvVahRuM338GrKmchUAPLGSgDZmhYJpqf1",
  "key11": "3gRhWAqkx3h9htqeR7esQURTU7yrqqu3p9vhdwX9VjdkrSY6KLaXrKByfPnVAoMEYoaotYp39yzCBDzRVBNQn5qL",
  "key12": "uDJcMS2BEgUBrTPqQWajkb5YqeKosx8H3bn7x2PchVn1rDkkYqjFFt8gjxezLKURb9Z5mupEkfdkUcRfPhAsrJD",
  "key13": "1xzK4EwsE4w7fevLtraZtUnbuQ4ZXRrYVJGgqswPCS293S8XERqrJPmarwvWGp7ansRkYccgGeVwRUH7pyGryXJ",
  "key14": "42FpnrrreG6YRTYPWikv35aaQ71tdEG1Ed3S6JAHKwfTswzZaTYEazXcu268JeD6nKBarvYA7DVcrxfvwMTvoLZ8",
  "key15": "29SKiHTC2JwQ4X2xSSTgwGyNToJxF39U1ZFcZXjSxshto2sc4neWUhmewJ2aY841vyWTpAEbqN2qk82j3AcaQ2zE",
  "key16": "2sQMALxXZfFzGVFbgnxScQPXJuDUTdPjSyzRkzUqLpJPUR6uyRyBVtkzYyP9MYyDu25xV4Ztze4b3PxmJmpTzJwL",
  "key17": "3arRB5B8cZJqs1Xrybr2YwAwN7qK9bMAF7X1VqLCQSusjC24vmtvYxEfYXTgifSgZmTDdcBGxT3ezpV1metUKSPf",
  "key18": "h1Qb7fGj3grSfy27My5kcnX17STBhKAJg9SKUFw3mimFR5bkE7PK93hb8fZq14L71kjju4ghRXHjuc6J7mG6QAP",
  "key19": "39kPjT7dpioPbRnMHadr3ai5B7JcPx8uAuGFNeHt5DqbberFe9zKgHzifWFsu1crZNv98KrEevD765KAsTQHH6h8",
  "key20": "nDvQ5RbyhThnriWZfCuqnwn2RUZaFpBSibbC5V2J7JuSQ8G8zA1MH4x8ui4s9zD5MsGhgpyS4VdFBhD1KAnZ36v",
  "key21": "3yaCUtjQnfQQbuyb2uEsZqKpHXxUVM8fGYVwF7qxFEgcPfUvk5AEL2FTzWbaT5hS8yUwNvxH5FhCZ2SrbqgaSXS6",
  "key22": "5C65a2bzbNWuT2bSLCHS5ckxhQDGhzHAh6C8Pf1BRMN3EievwcxQ47eVgHdan8mJmmWWQd4Xo48NB9DvjUQAKkWj",
  "key23": "B7xtE8ffSk7RYvbnY8bj1jLZyeojaMVcL5U92T5NzzLAkmvJCvEYxUYBPocfVkL9oM7gfihXTufJsCg82NAD7LF",
  "key24": "K4wiWr5bsNFxRjQPtg4iHkvQfoM229ZXaEnn2VZy8eiiMvFCbGum58aJKQrw3rEjiReiBaXvqtT2AUXarDpFirg",
  "key25": "5BoYBh8j2WQneK1LEsoauUqeEt7CQek3kkTw8T9wDQ5VAUzjKetgpEqqSR5EwWcfAaGEiMAqeu2cNAymdU79xsk4",
  "key26": "z4g48PcNqn4bzZsGxP1x4N3KErC6hbwt2VmndoYRXMjUaQhBB6Gx8KqHZFcX3kNg7uNF2AuhKec23f1vGaAyaz8",
  "key27": "4E9X1Qi7abtjJUHk9a7JUL2X26gq1YdBvKrhYfgMGaST8WNrdkqzAgNw2VbwKyq8B7XHK8JEZkyKzFa9b56xdLSn",
  "key28": "4ZNt7rs3zWkaXJSqynDDhghDrHsZAuzs2P8nVSaspBGHDAgoRrfx5riqHABYKk9LPrHPJZrmqXxMfbQk1QFeYPGg",
  "key29": "3zwbjcjjaAWB2LizGdt8t37VCzwcgMXBKRfjNSLx5iQhYXaBtEPaWEcCn1Adt23HDdqRw6YZVzcsbkiYcBex7GN3",
  "key30": "2NiobH6THiMKmFjSZUxqSByTCoMdNUrPJnzVeeeGwYBvRDYdAgJzw2PLUzScyrcai3MRVz251Xa5tbrDjjSWbrLf",
  "key31": "nvUjpAoB76vC4SxUiNMKLTAzZRNf4HBWJ19Vqidnaka9cVVKf6fRiJ7kDxwZw6s6KkwJb2RUtMEFHhVzUP34goz",
  "key32": "3AhdaXD9bdUo1Kck5mAKf92SrTdMFXYm783CiyAT69HYkAEKa3LRPvH6Yx5DE5G24AVt3BnXNXVcvUVZX7ULTg8z",
  "key33": "4mZxeMvrt9zZDR92vqqM78mA3t5uqSBJ2FfzRJ7LNX5MRzvqRctDnFCdk7nkH66i5XnPMF387KqPqVMAtU2KDZtF",
  "key34": "3Fu97pktXJGfnkgnZ6bxFuqCS6zVqif7WfhmmYehHBL9CqFBemxXtobQS31RaeHschj8vdoPuEWZ4UNWdu7jRZDr",
  "key35": "DVW1ZENSWWjARZUqSEkioCfcVcYoWHBUSsnHAyZ3ANe59JkK1c6NEebQRxR25XZYezrGDHKvGGZpAVTBdgSqXZL"
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
