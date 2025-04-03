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
    "46HSBU6XqiBL9yuWAEeaHr3w1wNcJNXhjJ5CDYY8TTio48iofJUWLB1QepqvB73WAAR5VEDYjYThA5dMkHvm2h9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hmyKyXBUQHs2AsJXLfkg9ACynzZQsFG6V7Y6fBK1XBtXn12ut7p3ZejoicYUy2GBTMWoFrBDimEJSMyG5S8GwQG",
  "key1": "4sTLadNCSmfBQmsm2VUeNnXx6Vt29yJ2rpRqY5sJk7vuusvpgM1pJ4etHVC1TLWHDu2Kz5e9etNXYjAfRT6Zb6y1",
  "key2": "3WR681xuCSHXii25yW4XHgxVxWCSuo62gHMGh6GuL6CPTNPWyUcjMMdqf7X4Qgoc6rF7uZ5ghnUJFmjgbRfELp92",
  "key3": "5waDP8jBvtHdVjZoMTe1bELzULcuSsg42gwuVtKXoZCgKRVLo1Vhp2BPyKKxgCTubWnYaBcRAohcfc92NSZrsX6J",
  "key4": "3y7NmnQcdJXMLnFyXL2e4UaSWnWc313H2zUrFMZYbQewCjiVQzqib51B6vQ4Z57WWQDvEkCUvUKosdUC2cZycrPv",
  "key5": "3opyoYxjuLCZ7f6NpdNrgBp7CoNjZfTqhtgcJD3oeXAKDW2BStUJ6uUh5utFTkA7h7wzn7KuSktQFo4TgobhnH6V",
  "key6": "3mPqRUNmvG9iy1EwL7ERSigkD1NGAh3J8e3QLHsaBpkEy1Cg3CtvRsyT5CrLpJkMWNxUULS41zjCVt9NNanWmdVm",
  "key7": "5GxpujGs1ouaEBevTt21x4oLaPyFnZqWEtACMZrCsqXUvup4hqTxy7mRvfM1V62mDvyCo7RhKXC1jEdEdRfqAdzy",
  "key8": "3f9jmU1pD7FfZhkWVxwgGxcKJQCFfTDBbfx4uNgghu2f6ceWXRk67QChwwfWtootAZ8Mbh75dW89yyEZkXba4un1",
  "key9": "4CAAoaWpQnYppb2Nr9j4woREYNmKzPTbcrWxQMKMgfum4Uyg1zmAoACUJM18HPvdYFA1f5fdW9rRE1FpspuSSsAE",
  "key10": "4D4VY1pZ1ehbJLjJ8RPY3CbSMDv5TnZpBHwd8d1YZJrbGLbfKmZF2gh77jG9pSMYBh7uBtsN4y269SDkAHb4XQBc",
  "key11": "3TGtyWnjmHWherqMm3P98CWTayE2M9hao5C9kyGRqVzKcFCFxErGLNAT66zujav8RWURKNKSqotp362twC8KRuhz",
  "key12": "PrNc665nFc2Xy23Xs9XRqQpaJq6RnBx65GKDh9qCwvv9H7RxFHuctuTbmyD6jkj6HhwZNnoxhkqMEftPykF9dec",
  "key13": "3PX4Chgddyqxg65e33RNxpgwmmWt3NBYdmmURpi2Fb4Af3mENYq7YyVk8eXqBbcUQe7Z3RLQAxfcaquu8DVtpTCr",
  "key14": "5eNrvfWCbC1oaYX3MCpYD7BWn28zDrfJnYpmfbWMTSpfQmaoyjRT42if5p632wo3Xcev6mUPRAT9HXvAdhsSPJms",
  "key15": "4Np3r8EbBUT3UDLMXCx4fuw5nCJrM79WT9NUENUXpxa8jxQqzArX1bXzV661yXSKJwb9kapk14T9z11QdSS9kHxq",
  "key16": "FimaCD1xS3rMP7P7DTSyrjg5J2pb4TecwGEN2KPiTHk8mpBgfzThXUQ86dsaefhPfTU8bAinib8rahwDmgqCsDU",
  "key17": "4RJTJ5gMWcjddWfMCMYHtdiw6oWhcstFAkpDK1LBa7wPyCwtTKs728dEk7qHKHrsuTjgdtZMp2zfV3guCeX5ZM65",
  "key18": "2eFpDw1ttH1ygECX7eKDiEUyqXGQNszCoLyH87pGVq2NQNfwHX4z1povDR6fRPCA6ePbBvHLEX7ob14iYHaD1teW",
  "key19": "43xRgQiXyTLGyGiAkC93cBrwj1P1xnNAb6ERmc38mSkdF8aiiSsuU8LHr28KUBC9TVGLrPeCL3zuK1ZWYBYF1oYk",
  "key20": "4Zb2Q5Hi66dyFcomUND6xWtJrHR6wtomjzLFZG655GZDUKvx7cFgichpe3uKUqCztSXd7UBmJSNHVvCEP57MghHd",
  "key21": "krp5CU2iVw7o6o6Yqy3Ue19Jiz2HJDw7EUXx9XWtNG8xFgkgg89uVHkucdoirxxMtxWmuGXHuNniH6W4s1yFcrW",
  "key22": "QSxR2xSqYTypbu4CeBGueZr13z73HGXSiqiiBbvqJ6yRSMPGQnMCcSqm7Nz2KtjkH6q1gJmThZzzuBsdd12eiDR",
  "key23": "4NTQCwu5oDBJ4XVCjHeWio6kA4YqPJULiyZLMCCBC73E2otW7rX9aaog2kjM1pM7GwWcPKWdYgWLfuUemXp4dHSc",
  "key24": "2nqevkEhNyp7t83j3njvpheSC95jkZFJ7umxxtkXdEvYGLiZJ4v2RCgppEuKGDyshpy2Q27cYhbJb9PRv7ardtXo",
  "key25": "3qU8PfiyfuMQyURqMchgqbi7rxTKwgxi8YZU4kXL5pgJmrPb94L5UbYYShduHpS3awTcMEmzGaq2RC6TLb8m5Yqu",
  "key26": "PfjL28tiRicdyweUYeaGbo3fa6jnqUuYVCwx7sNgvFnSCbaSqoWSZmLYKj4LQ9MesbY5B46Cgz2rB8qgCqJRrDY",
  "key27": "566GywbjaahujK17ifzj31vMU6HZ6Em2Qow3FkuodW5edHni1LjX8bVuiqRhWbNtZcYVUmi5p8UfxUK9g5xTzP5c",
  "key28": "2uRzfDH1YtKnyCJAqc4oFfpaYUbt8DsJJxNWpUpmEJJFxt2JKeQHwnKns3CJdRDidy5y4R4Jw9MjFkeKyo6XPxMw",
  "key29": "35LrVrN9JpakcjwnsW133sUJd1AVaph5j5qhpY8H1zLPxoe2s1BUKensCtwWWxD7zM8aAtmgLxwdn47sgFd6esTS",
  "key30": "96dp22Gt3goUJraemTjtKemL4pXxh3jyuxZHYQv3oBpHfxje2AVVM9aasuU8eVwSBZPwR8mHmGojcMVgogkdGXi",
  "key31": "4JMYPqjz4f6L7PAFUCo15PPq8kjLWbFd6Sqcm34joQPFSbtS8zqXYd2nKaPMeFkBoPaZVX4PtaVBQGAF6yUUnw89",
  "key32": "5hnW8h5XfM4K5pxnqdfsjtx2FAwePM94hTZAmScTfXjieHzgt6BPPFTaS2FtRxKyxCiWhvxhQs3bP5puwm25oiLR",
  "key33": "4NxDrHgNMELfW1TvpqLJ6YXS5ED4ssh9jRZHhQTMePkdcuAiCF3wVtt21Q5YuGWFN5yK25Jb6ncPQt6Lyh6U3BUA",
  "key34": "388dazPtB4AMSnmYqQEsRLRHu2shAVkkYeUH8K1vwn9fotEsCW7puTbG3nyHojxFUqyVdTLZcFqC5uQ1BFbP1Vvt",
  "key35": "57d8EpQ9z4ujpTiJ6W2sp2aJ4zNtBiCdWBojjUvwvwXkqXR17SCB64hFr8Dg7q5KvYUduNHLsmnaLnZYJ8Tw4iDh",
  "key36": "as3QRD52DHu5qQ9iyYxXJjnrzWgVVxZBU2uuoSRbMQdFVUBzgoLscchxnEFfLHp5Harp2DxBwyRQW2tRuZLj2mn",
  "key37": "3yjXnQ5dLGKuck47Jw61b5MGfRrGhWMk7joJQwfu6Fz4hux2Z2V8MbyhwRFjhqhJsDW1EVWmx3zsyu8TdbhwWxaL",
  "key38": "3cnmPS8fsZGyfUhy7pJMpvmtFcxHS6K3dTfMeJcUYgLmE7iQsecNA1UzSc54XyedBZGdpS8jyzipuib4gLMQbfWv",
  "key39": "3FNBqZdPjUC9bUYK1Cj13TKP7vbELgtGZFV6jjfwc9RsQi1PnBgZpGR1S33PNGKCBfgWEeb8YpDSmNDRrXoLxy7R",
  "key40": "5mAnUYGu5VqSckBaNsbeW9XF5Z81j7WeP8KkA4Cp8azefBmj2DYZ2HwS2PGPjxETnUSYduRdNHERiBvAdyQ7gwei",
  "key41": "5ktZ9s28PDAGVyE6BN8yejTkXNM7zsCovhEntm75EhZjsJT5L34xUWvxTRokLJ8NTv8q9zP6ENzkHmnR46PATsw3"
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
