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
    "5pmfinbeCFeV7CruBa1iLbMRQiFC1Bx5C2ueMmdFjMGv2d7EyzwsDf7hiBFd7ZB2L5bBT1hADmLp6UAMrNASYPNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56R2X4HCnKb9xxPnu4ZjMborUpdNVATvts6oBJSgGnAGx4EdCt8gV6wYobivnoHoTyKaDB7QCJj5RzHWcr1ZgzK3",
  "key1": "2Mrrh53cXoHpFiF1ELht6qrygGNj82SmCrPDirMyTJFjzJ2hFMvTArPgdqmxpwZg4vYU5MWJvMwXdwq8FzCuw4Pd",
  "key2": "4eGRoD4cewAaY84c18y5i7JyupUySAJMDHLB4S6BpDG9oUyhiZ7v96KRTZ6Myybra1ePSfMUHpD9JxjXXzs7AosY",
  "key3": "4mXUwnbSaaweFS9Ug9axgrMCWyzNt1Z4gDvjPx4cDF3VT4awzvx6EE8UpzZr33a5DxvCXaZDdNUk7PGnLPuzXH6F",
  "key4": "K9FHmWLgi8AdZRzB3WeYP3B2BQ64HDja1wKJREDYrUYN6FmUtEYPPEYAMvq77xbhPT2mTfz95v2cJpG3PCm31Ht",
  "key5": "4bxqCwz34AAU1TQXCdMUKxMUstk7yRvSZsva6ZTrp7qkbSHWjPEQ1yBocy4YDyNMbjC6p1WaMNfiL3K6anTtwTuq",
  "key6": "34oBLRaAHepB9tzTxEPqY7zNv2FGMtD4jXBjmNBFVi7c9834XV2GvVUM1Nh19cfsnGWUo8QA9bc129V9UiJWUrLD",
  "key7": "2gHo5mXjQanRETK7gj23AcyuyPyFjhS6XwBSyAhpg9nR3dUbss4r8GkcPwLRGVLXuK31uhU6VJzHNtn14Ngf2BAT",
  "key8": "4mX1CBwW31kdrvwRrX1m5kjFTFmabNhpY7nvnxiU7sjDpYw3GnjiPYDBzVdWnhKZpGnRGSC2iHUNRyT2LgMGodMp",
  "key9": "4sc1ykKKr2GGLYEWx1NQbACbubm4gPGwuWi1u1jxFZuUrn58gzhFZM1bSEA2C8RnTp3e4ASyF8WKuRfLArh6wJFz",
  "key10": "4rq9tF1X7Kk6qbgKFuSYS7Sf3VSZjQzPLidcXrHCrtpKsXUEcd1mE3ECYoUP9Yhn4EgdTPfn2d2qAn642q5zAr51",
  "key11": "3eU3zVwtxbTLifaiCkmnfNx7SAMjhwpvWNcPM4ZHQFHJUaBT44vs7ftT8K9sussY28adfZZ2UEKMo2X1CDZTx1qC",
  "key12": "LfcQ4BmP7J2YgPaVFDVqQXjbA6TnFRnFx2BKTALZJJQHQ9zWbAyz2W2HjWyzuafm8uNmPK51ruWx6h5QAfJf1eN",
  "key13": "5qHNSjaiKaFB439bExRSE4QNJ9fYmUgjjAyBAnAChhhifhM9H152nmNDvJCvWA5ZQiNeedAnYP2H49NxaZLxAAsY",
  "key14": "59MZgoem5q1E2bGJ6RFQvVidqGTkMp1tDjjuKcXvgFKG1bQdDYQH2Gmita83aZp6hSfTv3AyCA86M6GAuvdG9JY2",
  "key15": "2FEVqdtWkR899T9iXRy3m946N7yrbiWcmnjDcXY8T8aT5MaN8oMnzbvvTCyyiPyq9v28g9V1XcjKSx6DopDw6wGc",
  "key16": "2eNAvEDwnpGWTchs5U4GoTdhkNGBkG5aiKZTfqSTYpDeSgBXrAuLGuzsrartjNCzYFhbUwwvSz8qwsqCAdgDWhLw",
  "key17": "3w2vrmHvwtwDt9qsqG3iZz1rurtXmwTPwEtcox3xCdNeDwhxy6MHkZwSv5m3wigNx8DUJFBZMxpASsvDvLv1NR3f",
  "key18": "4kk9ZWXyHpR5AJ66sAX5fW4b9Aq87a8XUiX2sxwvDufbsZ2HJoz2AnGPtpKNSUYn8m6fWiNj9HDQmUyCB87V1iTf",
  "key19": "5rPSRQ4xM35WYGFQcJe5e1bWY7kEHTeuTtXJ4pF4gJGWMSWs5A4a8guJwg4rjqH7CHD3RZ63RPNRkBAjYxNUZ9eN",
  "key20": "nX6V3GAj1tTRT1kbYWsHRVjXHroP3UoXFmf4wBSuV8GvzH2zAMWRiTEeSf7o4N8a65TSTAC15K42eLNSSuYbdDd",
  "key21": "evztu1CtKfEfRPmFQBG6JYPhioW58m8ztHKNvnJo1YQSTUjS6GZxdvoJ2tTksanbS3RTNrPyRB1ZjU4cFYyQyJt",
  "key22": "AD1PadTfiEzgfjjTpfDFHNxzYg1W45GEB9CQQoA9BhXZkr9L3HreLA4LZwg1GZeear8Aj3gyCoZR9dFYojgyDap",
  "key23": "1QcJ1AB3Tk8V4nJqaisaj6cTjo1x4JaVuYGs4k4e8Vn4GXqSt1jtbVCVf9wzwXFbaJqZAYVeFHRnj5hFxoMDntH",
  "key24": "LcdpUauodRheUWdukdZAu3dgsQhsP4gUNZUkeZg973FyM1Fvfa3zBR3E52SsWn82fCQ1RisXH7T8L85qDh677Bp",
  "key25": "5DFqCdftkpndBQddZqnwM3Qdn38WUxxhyYtqwNhxvCMgifF2EZSsPdsaXJVVGAdFxQSvt7Yp5ti3WqHUmnNQ6Ky4",
  "key26": "453Thb2EzhDUjzpD2dh2M5nGkXk6uJgaRXYWJ7hEnJQ6sEdPvp9T7fxptT48KgdUBjEPNBEvCFHh6M1hkPzPWtHH",
  "key27": "5JH2dGo8roy1sJar59cMgD2NDWEeyKp7zcmcMv3Jpj5jbQroi4ppSxueYvUg4sTXap5NaxRsZw3Ah5AShyKXh2T",
  "key28": "46DysEhYxaMSe7Y4pJQDnA8cgEPP43YGuJp4gUGzLxXkEtUx6Z2sYwkWj1Y6oSwRd7ML4cUxfNpM6sFcCbnfU4BD",
  "key29": "31y59myciyQALb571hrjkXASfqEpy3Y3m8HjwwffSU7agwSkekvuRrXxgK9mdSQ4Eyg7TcKYSftjbR7dUhdVxavk",
  "key30": "4oqijBtwkPQPJAwuY6g4T1nFZ5t5yo58a5DLgy12NJPtuFmjTzgMf1X7VeFovd7AAeUTUNNxghn5AR84fBkqAknQ",
  "key31": "4d7LJefY5QZc9dDu3D2YDWNC6YYvMc3wp88HATaUYJfpBwE71uQ9KJ34eigAcnrPeMRBdGhNmBWoT9N4Dd1kTbKN",
  "key32": "5PbXsEsRsE552hxfRbLmqHRBsgP3iVAHNsgcP11btuBtyYeJCjHZFTzKU5EYDyAutig266cAJ4UoJqezKMx74buj",
  "key33": "5imfVRgLU5CqpqbcGvdGesDVcX8mKsZtvE6dakbXr3JGfdYqv9Kjsa8kZVPFxYMQCKdidScx6PH32DWGkbixZmmX",
  "key34": "5Yof8ZoupBoSFgric6FcXMRiLb2KG3xg1nTp1FLsBJg95k6RRb9R4d6NUELKSXWBGKBCu8T7tALtrwSMMzbfSuvs",
  "key35": "2vbq5EDhbwSK5jzB7FkT9N3opJMFuLbjiB9qwL9Z8zRYUFxn1PuukoJTnwfriNb9rxQpTnoXvjNHPMATKNj1QS2N",
  "key36": "21gTWLRSzTP1fkZq3u6XqAG1eyXzu76dZ2ajaxxEXYbt9B4R6Lh49qrGeMozNtRcY6gzz6joubwoTqk8HkN8jQ1t",
  "key37": "2MKxgsFM9THS4wzk6PpWCswbbeuTsYWUnvMrHeNfWh4DMSg8iDwbS2GetpGRhALEhaDS9mwaxdFTnTSuy3SouzSR"
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
