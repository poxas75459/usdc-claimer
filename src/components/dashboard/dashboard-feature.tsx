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
    "2dVQREuVY7QQ5Tn8y2QvVxowbwLqfA6C2KDLU8SfRZaWYm6EWi6YUnxnrx1BDUe6bMWa4JmPoZp8otuA7yXxhf5v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rexWhEq89dJwnT5vHnR91RBPe3nRxMtN9EvLJELMLuWG9vf9muJkBkhD6HM7Expce8xhjyeCEYvbgP3xUS78cR5",
  "key1": "4pspbke1BAqNhZXKnxQHSnnWjHqvULxm8UAwTThkHoA12r6seBoTMVbaV8TMiSMrbgs7xs5jAZjjqNoQejsd9qKC",
  "key2": "4uBQCe8R1dBc8HnZ3keZrLb6YwYbkKT9X1ZUy6KhBx7jEKeY6pDoJsVprkqA7GcNi57e6StYwNSFj4J4wjYL2pmg",
  "key3": "5yWKEfAtDrcSf8eVVtDYEZ6qeRXo2xUz2X681wfUoRVLyBs2Js755QTakwtzffKj7bE65TggSFGTMysntEHnvRVL",
  "key4": "5KoSX81w6BbkToxEov4efhc1nqvNfg8h99aB2YAAA4KCAFLvcQcrz5Xnpy2fo2pnxybHcMtNReTEn6naRCsvZnyy",
  "key5": "3ZvFoeYLTZeftEb35W9sKnrC2R66AmgHnC9LjoZyv4PH3Xitx9ATp5GqALqAaVPRVrUo5nrAa8gstFHZ1p8wVhQA",
  "key6": "3MVVG2wwPZA9mf4yo4UJb4c8sKcuMJyPURq56sxf1z3hknztgWR5iWAcN9UtzPjEDcAkXicXsYLqGiM8obEmAfF7",
  "key7": "4UjHiehkuuf17svH7yW1xpR2mM6oA8rwTFSWEqKh71wT6xtpkLozgf49gZDabdAMxnoqp7MVxWGP2bxPeZ8FfP4q",
  "key8": "3e1bh1V85pLN7Tqmbvw8ycpX7NWV2px1Z8bWjj8CQnXpNVb6VFbHnpobh6f2PJECasaUtdxPqDsybsphubRpKQoQ",
  "key9": "4pQ1YStipMvyZBXGvpLrVgBzeGzTFtUKSvV4i2gZcSSM9oxxqevyzhzWt6bPAQhLRzEf3hGQYGnw2krdDmqRPDbe",
  "key10": "2dH2NpxBGXvJL3gaLTiLBefT7VQKAAFVBtC1tjUH6Eg7dFFpvrAY5zCvXhrNGsUc5SbjxVLUEK6GCsMz5izpQK15",
  "key11": "2tzSqFgCUu3zSZoyuKjLCfDj45gDgGxLN1Vq9VsbhxXRd6PwWyVwFtKJU2hzGpi6GxpAUML17TNR6iGkKAbU8gjo",
  "key12": "3J4SJoHa4p5Vo7aHEZ1HbPAncTFzVuGcsT6FNBKjSp8pswRBvLnd8ZkWyrWAKor9zCRCZJc8bKqfFjTrVjVhHd1M",
  "key13": "419ayCmdzfXfFXV6s8fQ8zFfhKcDvLGKXa573Ey44NCiBRBWenc5VJvdiUTSNHRjatx6mq6ekrTLQGbdjQii8e7y",
  "key14": "5z44bPKTJTQneZUqmV2gFk9Tb1ewg3KZ35Rn7vZNpwWZXF4TokoU6EHf9ahUS4r3uvqm668bkkdQ85dqgEPshd9L",
  "key15": "3QYpSF2Vsv2AWmMWMzmMDyC6hXAWVQg6ZE3jenMnZu2YBC4wFCKRN2FS74khj2iGiSEPiPdkehrsQv1oJQEjgGS",
  "key16": "2v3N97yDov3YFDWgdAjZQr28LGZ5CBSvxFEgr5wXzQm2LhKKjpUQKFCXTireXxhiFUas3n856Fr3zbd9hbUgfwYi",
  "key17": "3aBXLus3c8QLeGEoSaXD1xx5FqmNxivbA9UGzF2UR8tkM5vbFJZQqrbSyyEhbcfdkuoSZzoNmd6oVogRM4vJfWUS",
  "key18": "4N1wdeLxYabXqvpDwzJaepz1seWXRnPMLHECEjjEcLSVonVgDYefnFK4dTCgwRrmCE6aVyeAFoqJbdV3DRPpAo6A",
  "key19": "2LFPguyoJgt94nVDJzbW2HENedb9cLDH1VrCeW8KoN2VGJdT76tspRH5nP3pdWYTWUstHSX1ud8RSHZZ1FyXAJZo",
  "key20": "64DTDdipxx4ASRJkXTLo9ZXCw79oRkb1xi3F8ENBUvdtVCNMazLkxB3s2nVisNwEZVfRzDSudk5KApCgKNbNCWpW",
  "key21": "2cRDr2vxyXaJ5dDbyi6N232P9MAe88uQfPG6wNHUyZQU9ZeVubLqzzWmrqwCqCZEE5yKas5VQaLJauquNHNYXEmV",
  "key22": "5DJepY9hBjEeWx8icUxyAhyX216JtnpF84LZr5af2NhcMw4Aftcg3EWSZiE7NTVv2zYVBB8yeKKRNRXFDMDTxeqY",
  "key23": "3nGErbJ8DLYL4oEB5zUStq38bNvaxW6NSSnheaAgpTMBQdkQfJC32yCH7AgjAY3uSpVMNsMFzjtF3rpL5zMbHGWf",
  "key24": "2hP5XcsxWQKhAfL8bWRKEpEb4J85Cr6Bq8fCMLFVTGixszygWNS1KFk3TkZwJFHnXSrG5c8NArymMJqik7fwBbsH",
  "key25": "42umYbpyPXj7S44b76Efjsry3LR1zw4kBHLTXT3jhzsUzkXEbLq6KeXtvqE2eUvihyX9YfZZHTke4Ub3psHr23Ys",
  "key26": "cXvzAbFHWjqtUEg4ctED27NaxY3ASszizoLHa2MmGGbvqrm2HWUhpquDNAFg13jBRHNoYLwKx47ZPNmqJSaEGwP",
  "key27": "3CBxdFyUuHYHUQpe4dofaq15odQhPsNQ1Ng1iXQvysEfbZdz8Me7boeDBKcHEtdeYRuqePeSxPb7jvkvmuFpEEhk",
  "key28": "3Zr2syWzn1D75gu2eKFhpWrcfG9jp7qq8jtqLianphdMqATv1zWonXUqGm45ghEu9pdGczoR1RuuJHUqssE1ANcc",
  "key29": "tvxtRBKF1vJ8Tf2QdZ2SVrU7qoPi4xjZQDPcaLrM389sFuRtgwRJD1Pz9DuBQrtqU3rPhdwaaocA6BYLSX4Jy32",
  "key30": "3TdkUrX1LpaLko9Wrcb2yuQSJoY3uRqTxuR2pxvEd7AcZE9dTqNCWw5PYb3TwxnSV9d4Pgi8wogDCSV3HgPnZhco",
  "key31": "2dxToUKxLGtgT52GsbopGQDicGfYX5a15sRB181vXZSYwy9ew9aJqg9f2iGJcJZbqG4rsaCFiBBaPKazkHveaW7k",
  "key32": "5X3kCGVaAFpiufsx3xFkHV1TfRzdSuD51Hcj7odrdk3LejUHrFQipVwVdj7HPNJy7M23qUfXEtbvULVMQCRTbMt6",
  "key33": "3PCy2aQDJkra7BYe5eZBBEfFEbWQnrSzgQsxFhLMvn8QDFfwHB42xQhzwsrWUxWjSybzdAfVi2p1QUp6tUt3PTr9",
  "key34": "LFTCU5kGwymgErJzTjDwqXA4xZoa1r17mYwcN2NS8cRqsuK3mcPQgRGvhCm79UezHLinCzb7pFf867Lxa1LqQch",
  "key35": "4JsGuvCsnfa2hn9oWTVLcrkhMNhpp3QLU9SMUoXqsTf9r2PBSLmNAj3XFaMcjUbAj6YsxF2Y4hxYWefTwwUaw1br",
  "key36": "wSFfHKhe2uSuq8FM7UAjkqz8bAZEb6h5BupLDVWbkPuTjcdoJSzHMh3rKh3AZVSQQsfSJQYxJQXVTMbMi47qYV8",
  "key37": "5nbK187grNgGXVnTJSwngKQVjzUy2RV88HpyRUfCfpBBJRFfC6R92Y1kLybcdN2XJ57fozQ67SdhwhiXczy8S9E5",
  "key38": "3sXZJBHxWF4YqgGWepQ4uF9wakGtvgWZzrkKDrEnkcFWioMBu6Ch9XGZu7S1zp5nTpJse96qs4haUj19TGnRmHKY",
  "key39": "2o5ZGNqmd4J3ErggKaGQnaafS2HcKs3ZkwYdEQW99tEEoSxVbVme6hBB5btvjLiN55dH1xtYBSyz2e3BbFR9SiGx"
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
