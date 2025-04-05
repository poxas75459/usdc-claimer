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
    "cDdcayNmjYTHNq4GBvHQVBSbpynrbGttumsEYXe935o5hQzK8i7dH7Ugde2DVxgQFfCwrg9iRyfVxg6vCraSFE4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yUdMUxV6NMyu3SFnYjr6gfpMSKfjNgeBM4vQNtdgh37vPEzUyUCb6JaC3jTm5GdfxKusjmu1pLhBDTxfL9mrzaG",
  "key1": "2R8nwQV6k7fPPZDrDXLitH2t1gcAMDDSL56C7Cwt9KYHuRza7umZV748oHYSEtZAtRuBo2uD1e5w6Rw7ssuhLgAo",
  "key2": "Sd5dWUa4M2GHmyRDQP4jw7UeBXra21sjGcKRKg78EoXcG6pwWa4mnMKoxZXr6kTCb5BYV2X8kWk1bYvzeDnsd7t",
  "key3": "3WeNC61oyUAjnRJ9ShmGytym8yG1hcz3pQVUksv6eYgHsLaCMgEV3RXFXmxDPoHmizae2MsM7FjeyycgfUzuYZze",
  "key4": "qnM1i9ZWwbcN3ExgfUAMBabPyFmW5da1QP8fZXjz9cWvzWXyRUBA6nbW6CJfJ1GRMJnnDavKobopC2GezV4z2TV",
  "key5": "yvkiCYrvAfbnUQWxdq8rZ1XAZ25zhw9EVygKK2uWeafWtbFTZHNBKoooEVhi5iudz4nZuYn4EEfbdJiDvLNFbuP",
  "key6": "2ziQq4AMXxKrxeDaeK6sUCFr2Q635n1bRR1sRY3aCy9aKULY2s5oERNVMo7HdEaeSLEwa2Ld8sQr2eQkE1Lvyoej",
  "key7": "4fSkwJp1hANQG8AVppCBJW3cCFJYwDMA58hE2SpYMsXVCi56gzBMdsBD4vFN39MwyXRKhvLL13DJdLkUwnrCnLSZ",
  "key8": "mq1ViVvAqxaDiGJ3trFnrt2B5KCgN2ZsDAhFPG6cCNRzShchk2VrerfGTT25oyB8FUMMQMtiJb1xjMoi7YNw7m8",
  "key9": "2z1y83Hz5qAexUdZbb9RCb8p7ZZDKpyqqWw39DwFCgcq2Cqr74zmkNALjhJV9quefgj3YYkEc3pcJXJsqbMdqWhi",
  "key10": "5cYwUW7G7aMbj85nBzbz62JZ9qjQR5ecX8A9YL72H2o1s822j4QNP7FCgKPZWCuiezqG593YHneyNR9MRWCRP5UX",
  "key11": "3J7GkJqQMUgcSXP13Cq4hhk5yiT3t4uzRcsHMyFLx7ND51gPk3UuBmvdZkgQS43pyvJQq4Yy4SMzRUDz6bf8XDQd",
  "key12": "4ujUgc3es27Vr8Dsk83vKusWYGFtfhdmiCzaFkpw2D6axAv6ZyYKk3FbATfgUzeLezYxERaJLVg5KwVB8Q44FPvQ",
  "key13": "5dqevukBWLdotMBod3qntKiMH1d69NNpZCktGLjtm5oWob2oJQ6SKuNMPcxUcLhh4YAxKE4oz8aqCauiR6aPyGHQ",
  "key14": "65T6gtAscQ7QWuDeUWL8QvcwtMTyR38LKMWe4z42ftq1bpjz1AAFb1iTvHwVGLx1E6tKaj95vhVZAN8GQL8sNWDz",
  "key15": "4Mnjkh7BGpvmfAxiwS8S53PSUsHTUXhKW6nPA87o9QKvDp6fUf21fPoj3Mn34LLa4zuDQPQJ64oS2ZKucUS9zTpa",
  "key16": "2kiH6V5tyQV4WWz8AJVt7fEYnEEPiandae1kfRuKqav4HL5Gt2wzhJop9FRgKiigaBgjkLbVHFvzqs6zgj98ooN9",
  "key17": "5vdvLYPmyDas756ga3HJ4pM7fWRtTMrGaVcC2x7Gc1QbxR6QFR9TYASVbr4DYjGpxfZWCVgH4qTUZeJhXAr31cpG",
  "key18": "4xYJgr3QWAKkgoNqA73HPtr9zq4d4US7DXLLLn4zBoasxW1i5vFREh3cMTL8UV4ZvfPdJ9VT4Ru96aevFmbCNEga",
  "key19": "GZErxaknWHsN74bQAN5NWDLnxyvm2J1AzD1eLFsiaqBuzb9hTzSW4QeCnXbCiQtdXvYPXoUoEXgNCZHWQgvpPXE",
  "key20": "2jpBF2NZYmXYR4ikcaQV7jnTEigwt2kc7Z4dnXd7kDnWHNU2qmmNfvm8H8TvEnvJcaKMThXufU1M8PEikwg349hz",
  "key21": "3JRFV7vbNr51wyxuMsiLKdN4CD2SL2YLresTvtiuHGsVC8sByNnnjdbH3Sb5osN2gh1b5aXsHWUPB7Bb83PJ69cR",
  "key22": "q33ETBAFmaBKgeYHTSLcvr2tGmPTgYgjqYVQKjxv5u3McsscMzYtA5qPAwnq4pfK23RwLHhf5NBAnMgkey9eMrG",
  "key23": "d1abBtziiXifxcDS1bHVvK3NqG33bHru6yGt4gyS5K8viNQVn1HwwfsrLrpuo4GjBwFE5rumD2JMhx1Jq8ZS1Rv",
  "key24": "25HWKiVLJHundCobmpQ4giJXpLEakhmRAy3UUSw2aaBH4qnKgsaef1zm7WqcF6S98FEhzyDSsq3beowt6oSRxJnF",
  "key25": "bnZ7bhgqZRZi5NwfDJZRVM3NQg3XZdUtF3syQsJTkPSP2KDoFYhXtEe96xuCSeraiqBvCsq8kX6CPWMbNd5mS3a",
  "key26": "5nENcDqMtxPPsiYLBaEUtFG2wn3TPSJPAmJcLJ7cGBKcZ2hYm8PVcW8uFBeqoLpFcevuQvbTTrCfdbsrmVAKiF4E",
  "key27": "56WQYqA6tQcMpzrtZRSixpaGXs4JSzPyJMefPrDTDTHKwS1H1frQ5WMbZsE15UjA9wBEWLyBdcbGZnVyDuz7zTxx",
  "key28": "5TATJ8BMsyL43jFF82wBSxEzx1tqsSUsPJmgZF356kwFdApSxjYqQKgAnNwV7QYPHhpEfaiowLx4Xn9EVFxfewwm",
  "key29": "66fRGKwfjhzFhBMCR1UmP3tAhz1FcvPaFfzbao28WP4YncaiQPdbkzV1kWHhdTGxbyL5Gns4SyjzDqY5Dze3EaT9",
  "key30": "5LYw7LhR7vAaWQZ1BnAFNwb5M2LxLFasu4KJ4JkgxzNvMoWSDcyD45gc2hAnwMFvGwdHKaR3THL89w5gj7wosYcC",
  "key31": "8i38Cb7sQVfyaMbNdr5h8zYYC2CMkK8TJMYdYVidRupvNA6Xgcr6LBpYNdRqxT3tAsaPJEKAxVbDem5iFUSWWY5",
  "key32": "35LsdvEp3fN3k7z8tFyYRfx1uK1SLZC9scAQ9T68cLoW5i283i73ViVX3zbusET6YdjyEgtLAyKi81GxfpFAbm6R",
  "key33": "2dqUamTWSK7bkin5bDaTwQkh6EBD9V5e9xVwYZNPYFtuKPdbbNNDkjWHSLCjNK9Fn9jrQbaRMLpFKUW5EYgHMbAy",
  "key34": "4yqNhmdvkYhi7evACHHhqJBej6JPWBEKHQAgBKsEXbyEqRTJqD9wtmJkd4wKCidSzUCaWXqadFAfp2S8YFXMy6pD",
  "key35": "b24CocCByFQMqriwK17qxTUkUiuBKAHCBXTVkKHMYCh1jHhRN5TokgzoYLDPoPd87s1Zu4f7eYr6xDQpHW1Z1mJ",
  "key36": "4nU92PgQzphJnC5cCqpK3MemDNv3RcaWkj73YRuToq9Nx8Fa1sUGJWzu9JYym7QeX9dhMBPpgRQg1jf6DCJnct2k",
  "key37": "68LfwvqXHnmfnan13r58ccRP1nPJL3US7FdFzqouEkyredokSZ4mYqAQczH1jwtqrr5BG4mGeaAE5Y7p7btpKyx"
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
