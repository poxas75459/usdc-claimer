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
    "2frrr5GQUYkLu2ydxLqpTVDKaURpJ8PeMXZUGrMYFmUpLtVqMqoRUvNmvV6TZvsivbM5DAzyTwAWtbdLv928Kf7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q9jEtp6hEDw2Sj9L3bX3argaXjT7F3fJzczKjXWCwi8ogwS9uN9AUVBBFUawNeyRy4sBvnSw11Pk2zhWFQetuWp",
  "key1": "5PdG6fua5dFU371ciwkT2XG7USyHdcdkCibNSnWLm2hcLwSFjz4N3LCYsCgwNp9Nck87q6MvCF31bQ4biRfkwC63",
  "key2": "2DJrAPRuzNR6QcTzk7MYrmWox6HVzCJ3JKXoyu6czWLVLS6ZjDttA7R91tVudDN6NhbzC93GVcBTuMTqAVzuRm8p",
  "key3": "2YrVPgCJ5yKodMYUYGHynQYPzHfYjidAYoj6Yfnj9ghEUR62RJv3uRHFsbhBxvyDeA48wBkE4SKaM698QCTmk3qA",
  "key4": "2UQwGkwNE41PnpwJrY7XFaKBbDfhu5YjqQPREzRKdcdQQu55czjva8X48f7RjjexXBgT7fEeNiN7NyyLGGGuzmnN",
  "key5": "m33LCbbuAv1inZ69uDDphMTzKi7LFj1cvtLoGmARvxcqadxTcPmpoLP9Dohzyywn5RFQDi4JQnpfypRH6pHzLPM",
  "key6": "4W6mTy1TPKf6k4BpLLFc2xdjH6akNqCVfHVqHDKbprfRFEXHAMApPBKaXoACCxQaKG8iv5FPSg4J3GQAq2xR1fxU",
  "key7": "5Bpzyqb9NPwabvyuczUp3EaJUuo9nMWwF2r8JvJCRKXeGUfTwYRBzT7h6Bkdm2AFmt4Mhp1sSuosyqkubeti1p9A",
  "key8": "4kkP7YhwYA1mSadAdBDD4zCMfUDQnSiMucE2Q7iP6D2oefEeRVNcaUaGVd42JHFfNcefDMnLo2ywNQPtQVCDewj",
  "key9": "hGErhZQQjBxMvzKADdYKKgvZjGBsWphM7cKK4pnYCu152aYXUEQzpDhcx9TH3WgrKkNU5m5stotgBp1KmDo4Mjq",
  "key10": "3XewVEGkqnz7irSmKByVnMe16w6D4Lz3UMcxtu7nMuWohEEt8ueYd8znCgWDuZbkVQ9jsw5eUJaiJanHiXwgaffY",
  "key11": "nYKWAGRsSPDgRJNi4pEaw7tuokpMbb2nSJioNVEoBhJipwcdApm2bkcXv7aS9iLHu4K44ufcMKwb3x2dxDr9xyu",
  "key12": "RNSNCjqzVqMjL7UcpZXqF8YdK8ZJSyJS4potNMiJUWDJDnfJsiSFtZJwvDW5ZkUCiakGWEJNqiN2yt8Eym2wKuQ",
  "key13": "2dQdxLpe7eq7U2ENUf78N6TH73VEmrFXD9jjJtNaBnFppYfmArsTbXpEfoFvMaziYpSx3oTmBUXQ4yCPWHQeQ4S9",
  "key14": "3Gi6JPKv4pWBXv3wHc89Aq54GmEuNu6o18n3FuV8uYeDATdQ3JCGUmLqdXZYb8DSbWEcQ2VWc7WHPVFZznwyhvMf",
  "key15": "2M3q5tdPMrKrPj96R1XA957m6xqb8V7oBP2DpGZMYZyhLZ2ZTdZAJV1FpWybJbLCdtqnffogFEgPmZEa4e5CfLoP",
  "key16": "4KZTxwAg83iehjNGbjnoYecSePvgKkofoD6iaAzxiQEHYjz7gqAvD2eFvJoAzxnbxUzbcQvtsuUrt75ewFxLS7Yj",
  "key17": "329CQcjHSDpSUVAMYW3ERZ5EeXHabdrQGeSDHBQT8m6CY715UNFU4BMm9MwcEvnVX2NYLume4K44H9tnCo4kHPdQ",
  "key18": "6TA7sY6E3Wnr4fxvcoqU23bMefnUVPoXWUdu87LePVVRWZhzheiNmXTTfzTKpiWAr92QnyGDcFjqUwC2mvzFd7G",
  "key19": "53esjnMj9LZhW7YiVHHPEKGiaQietq3p1VAuoETjFcsAh1T3sbqhvHeKKd9SobfwQbmqjDVagAWnZs47iaWaL1g9",
  "key20": "5dWsLGzs8qG3xs1gquoZwVWAhuyBb7tYqwCC3rJKfYDuxVDukTmCuBQzq4vcrCYncusA4D72CCvNZKLXeCkA35FB",
  "key21": "282sna5BF17zYH6fsQowr43xSzDsWr87zfHx4ftYeNoSkSgAvTqZ6wLPP99p9Ycpcf1emgrFFCJxtm6xnMHvKzPW",
  "key22": "grY3UHbGUtLzUUquhxkcDsACYbYkg71PKBHDwgNJk6hhf8asehvFQBBzhzZwnxeDyPuNn4bGqda1eRRrvEUyJyR",
  "key23": "5j8o3yHkT5RLkUfbKGJ5eEPvBq8LymgsJjpW6MZjSnu4mzvrQJBS2mZbutCHVwqCKDXNzTteRypUqfj2yTDKavqp",
  "key24": "2Tzr7CHkj7nAJtxnwoc6mW2qhE4qMPHr7sqnKnVGJfBqiQQ8JwoswTDQu1NiWwpXn1fHLFe9QvVXu76eCAuJSDtY",
  "key25": "5bptJuB9zvNmVqZ6dbTZJbAHBBcoMbo85txv39dkhjdZG93bgSyLVhmMZjHAb2whMUPvTcTZGRC8eAga23uM3Eu8",
  "key26": "Su9aHQAprDZhXBapY8RgPmwUBdqLJwMq7N16bTc9LAsGVbcrjDrH9MGRmp5ZseseuvrtNKabpbN9Tfb1WZTYsQj",
  "key27": "2hiwWsujD95K9HgzgceMNmhoCWteYtBNzZbj77RtXrFsPG2ALkFzV2ECg5BGYXzcs8kZ7GM4fA4EzzMqtzFX2fkc",
  "key28": "37ehEamCszggw7xe37NfsWKUqC22z6FbbZ3DNDzhJWqw2eQ1FK7axwJT6NuH8wR67F1vZmCwZoksX8JS1kArineu",
  "key29": "5YXX3qk3eQeiH25Q1sC9LhLyUR3SNLm1u4dxZxDbzFib4QXA8ugNtHC7BrraTMfhNsiBSXQp9V6UZEMP2ZEQtG1E",
  "key30": "5etPkiRnar7VJr67y4W9RxUg8Jxiaiq9PwfoUdCQK4gjFjp4SGB2TipAW6pH5ttyj69dJh17jC5SwuA9ihuvpc9c",
  "key31": "3oryNXDec8EY9Q4AyB2VGeWY3PiwAJ3h57QB2TRcz1haM1uF92TqbZZkeevdrwzdGJfWhPKQyrT9bheDHvVHQCik",
  "key32": "5ZJCL5bqQLCRiAVUHaUFWV1erLSaNZyVS119nsRzJXXkwxHhAbSMmHRwe7BVr2hS86ctNQH5uci1KvtmT8Pb825s",
  "key33": "h6DX8qJXmGGDWwjLb2DVWJ4chGJpY3CP7DpDX76AXtzBoSCq1zmCNKsGrBC5775HEZRzzvHb9u2gGmZJVU5JA49",
  "key34": "qAACZqfJTPZzMdLR4xRTdHbxNd1yWtcbeNw4aker3M3UaSmBYZu5rp468KKzgn5TH67ZQFiRu5TBZXsvCexd35d",
  "key35": "2cKbci8A5bKrokD1SP27ZLymdAtz28eotgELCsXkjbWxj2K51xYiZUCjC7KSXsqWUPHTPVaQZJQZqhijhbq9XTNJ"
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
