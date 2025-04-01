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
    "2MZPapgnrBDYCJVW5VxSfhNmfY9EjkfZEDyP8ocnEYVTkSnCG5de7bXx94Tvk2TMiXDJedW7wzTy4HVmdAuJ6sKE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ke9MakCPXXqmXgWCQDgLjgVYsEP4BkL8zk4MpHiUXDdoSjss89DTheP2Ahn3FwUFk7RBZNCyegCn9iqkkjSpTEz",
  "key1": "64hMU5ws18zPabbEvZo3SKbkbEpfyYUcNKERLsHNourG7UgtNwYpBrG8fCe4FnESSHdS2pHjJJ5u7a8pkLASX7Ti",
  "key2": "26USPyjzsYGu7Z2SA1kig4ox5rqZjgNTzvGia6frPoHmhvpnRFYwszNkMnXSymoyLtK3F8cLkLN6AQUUFS3TYJYo",
  "key3": "4GNyQejKZboi4qF6f1woe7DCQe9ehFpL4pqAebKPUA7A37oM8fX28xvtrKiJ9iBj29eooooQbFbGV6A2Esrgif87",
  "key4": "4NQNgaQxcEdbySM49dJ7UpVUmsXdWbE7Nie3tbh7aciEuahQpKNJFeLwae6X1hi21VeJpScePmsEUjGpqFAE9Ck5",
  "key5": "4wJmy8jAx1Cajt5fAgbu3u8H1231N64QyXSCt3MT4wzrTRywooGTq7n8CNKTer8yw9Dw4JK51qdiHJ5sm8KcreRb",
  "key6": "5qv3dh3FyfYsszyg4kD8QRit81DAJLHcPcfaKKaPkM6yqGcxZCDFhHZwi7H7FZrteccZ2T5FjZEG4GjH4EYvmdE3",
  "key7": "4yfjyGNdAtQeNm6LpYiMymk5erWS5TKuig1sVigVnauk3vwJgn2EGVJTLn72puJk6e8JMy2qXS7oc1SFfDMonNn7",
  "key8": "533Uzhrx7jrEgR3gGqmrmCwuG9XXvfx7Ms2pCVoapYrU9789ijvXz5GnjnJYJP1ak78YZzcykS4EmgmhACKBKw1s",
  "key9": "3ghhfffgoA41EKoksEK2PywTrar7qpgp9QuuvDdosaRCsNhqfDtrhaTMYvHGs3zE3Bm82vJ9eMiGn1heU9dJoHHb",
  "key10": "yidpXYB5dXaf9rx1WrNfVNLH6hv82J7mj4DRpVCqs7RCeUMzzkULRm5Cu96hghJT86rbCoRywiKJ72xyMiPBvXb",
  "key11": "3744kZzqW48J9p1D7HzuLyUmwU2wYWZ7DpzwQv9X5prBww2sEYRQy93hZEZCeNtc1vqAcRDKgj4XejwX7yN9Yrqf",
  "key12": "37UAnkCWPE6cPKt958pkkEe7mFSojtz63VZSQkFPawd6Gmz3X7cEjyfbBn3qNiD5kCDkxWQyGNVQVtu3mHkHKLJL",
  "key13": "5no8t7e7wfGd3s6ovfrCcvdF5N6iux92JtM78p1Yw25fb14tNToZxzP8C3om8ePFPstUDTbL3DAgYFAgod74bu41",
  "key14": "5xjdeGZXEq8d78TitCVPykQc3FUyU99VaV8cKAzkJPMM6pK72F6M1jnrH2tvEYGzof2gzvAN7NYyAiEp5BWjRNPg",
  "key15": "5eiMkUC7ghH5fc51LxtHAukaWVt1L1HZSaBCrpFTiNiRRbjVFBi6KmCwihAgLcsW9gmipCFxMqy1DY1A9pQ2mxU9",
  "key16": "3feV2xvthkRXWX1WR4QjPpYTgKJ1sRvJA7ajQVW5aKbgSFLQGt4BoAKkaQDtYJ1cRu1q7z6ZWfmjA8QvGvyKQiEn",
  "key17": "pCYwQ5dcJRohA1gTf1yetczd5wkihvAs5vNPRzMT3vYCpbQKUP6ZYmyypz51EHXakraQdhvsAfZpugXCh3A5qpP",
  "key18": "24cEeuFGkqXvdyNHpTfXPCVpFeBneJg4XqdSM7PLFi8Uzq4icVoU3NMQS2ZAUdekBdjSSm9RCCaPV3GmeMPCFVoa",
  "key19": "44CBvNVytYB11oSmkh6dFr79e7TgKtdFake7q4WKFWCpXsk6m6GaZdnsGwvZCBZRr4eFMY5FtsQEtA3F1UCqf39t",
  "key20": "4HG88qtNsw5shet88vfAAQue57kJ8VXnWvVHy9itVGjCRDMNDkWnkohjGgVKNQm1YzsdU5v1rNYPdZmsyF97yCWU",
  "key21": "x9NPqRW5KwSKbgP6kG2kyoWWJ3vriTe3ct4QDcDQb5Ysi36WYJfKb9TsZ4CtT7Hi3wxkEr64kJ6UULiVNJdPZcm",
  "key22": "3Q2GLG7k8QSygJGbxHWRRGFfhCFZCWMxsPuH6xwFmi87snd2Jm5kQeNc9NKmZMsvYhC3CUWXjPkjf5EN3h45JKjk",
  "key23": "mqfdMYFBUqt4hsLtfdrfKmdLBGsGXcujBgXhsiGovwh4RZ5tvcpJVtZkKyuAoL8FZCEZGSJ8fBC9kR8EkjNPiFf",
  "key24": "5z3nHiiJh1oQtqwhExGRR4Xm9vSpsqVXQDKvhFcwvmwJtxSR4zunaZ9bNEWa1zohTAvh6v8dVXYsFsYFyo796XXU",
  "key25": "444LqzSwc1GE7koXemtdzc8br25AzFpKkYDy5TCXMgZ4yfTLbpQ4aPDuqj4faSnDcAuriAZpr2ZTd4R64oMGvu2W",
  "key26": "2kJEv1jAZgYYTFwinUWCnM2rmLGHpELADuwgnbornxiA7xTm183RtK6G1bkDpC4F8eWGPFMKTwkCuC61fiCB38qG",
  "key27": "5DwZwnra16qFEiZpSqkQjaPE4v9kPuBYfoeZEKz8oWTM3uAzVLZMe1sygYWcMCKhkV1vDmDzpKTUKwo6Xt5P6RVh",
  "key28": "2BcfrvEHUrgi2cjj3vJKUVsRq1MuhWDNsk1HquZmT7wuBX1kEZcKxzPRQ6sULY2XxivvjrpB5LNgKhZYqLmvKFHv",
  "key29": "21RniMZezv4VcHnSpPFiURYb2wsETUVann3iH64hjEcmatEmXY3MuP7jrspqkJMej8ERzNbDz6XfSbqzuFZQw776",
  "key30": "5PNhhBsq4RBWSq7JEyisHpGujrK78BJM9rA4ndn4NGeKSTPPTQPvsSb7noe1SNCJHhrNgeBrQfYGzCCoVNUb5W1b",
  "key31": "3Q3AJezaZgoZ4tyNhuSpfGCSJRDCkKMNzgdi8j6SnX6SSrhFTQKT1U6PKFMTGMrYkRQQgkaFaHufUJqgdKwAVP4h",
  "key32": "63rUq2vDi5KRL7bDgjgFeC4rCXaEJ21f7y3FhHJAXkP68jnujhWgPGG2pfEt5Boukifrw75HSAuN9DjgoGowaWt4",
  "key33": "4ghWRUoWLdFzpuWsqy35wgcgz5kTiQ2Yf1mwEnZg6yrAtKE8ymHnVenEFhBFVD7esiAF9k4xbADo6tfuS6f1rWd2",
  "key34": "37fGiLP2YEFgGWunGPCUJzPNPc6QJGypkf64UJWtHDjMvRZg2L16V6519ix4Rva5NX3kCNuKMzuv9XTdz4gbau5A",
  "key35": "5EcRT1E8GtzqrfY2fdqVQqkCdmMrFcinTSu98Y66efExQtTW3TrnJkcemRXNFochJRW6f11uAK3UvFGG9w2R4CZf",
  "key36": "vLpCjNzpVAy48WAn4d8Y85dWSNPbsM8TuKCYwCu7vB9STE1LVpwmv1bJPSYxZBbWXfALu691ksB8P9eUCVtstwE",
  "key37": "37YM1PhRDw2GTXy4ifJqvJnnbFZAruG5CZjXaDNeMEtVGMTnNxBmhBfRABvVJvX8JQY3yFhcDDuN45zt9kfUhRYM",
  "key38": "496ZhPdcLA8HttYWM388qvWEco7a5ENoaqcLQcdYCd2yHC6Ut3dxXMoZRbmUYXZGJVHXtPzTgJLqXVH2GZnmNXLQ"
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
