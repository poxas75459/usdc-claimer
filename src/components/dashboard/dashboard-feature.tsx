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
    "45nvXkE3BymoBwfqZmJ9TzjUtaFJAfuHtREvLuDDu5x9oqTh6JWeBfbNgMeoaK7viG5bxq37qK6Hpoo9RyPg4DcC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FwyrJZjEpZpizqBKVDXwRnJPudBXKpawjUzKFt7SWEmRXh73K2uEfXFrYXQHD5RtorsBsbmBGmmXPBqXigw5SSz",
  "key1": "3ThSmWGW6eEUsK72LnkLPtD9LiF5mmbHxRyoTnS6bLp4CavYroAod1fPPCehFqPgLabAoixhfsDdvyijUC2fRVmA",
  "key2": "539W5MkBQGS82Sq9H1GqqjhTtNaTz7DUVX5n9aHmZ1RWxnHCtkxytwMAsykrRUV9rPgjjtCWTYEJeY1PgEkBXsyU",
  "key3": "5tYW5rtDY34JkKytTJCLE4tCNcUDJdDiDNocxUorGcFm5aP3QQoxeq5pmGPQKqeiw3rq8De66DPQG2XpSsxNiPeU",
  "key4": "5K6b4X5HQo7qtrAr2Hctf1K3BUKjZqPvNuqPq6M7A1KT4XbEtznL8ifqmqdWwZ7fLGEmg6KZc8RcCrt8VnZ4AkNY",
  "key5": "3GE4XLuWHYRt6GVUkJ3PksLVFAabhMYNRGDuGMB74S9QZo6Zvu3S97Ro9fQRysj9khqndd8TtFFSvk6QSjRWUmWf",
  "key6": "59tzqG2kBLXSJukaYmYrPqfwUkz9vKaWFsgHpVfuEc41N6ojpPWTUvKsEPMG6MNpZ3V8S2fpbkMrWPinUDVSGAyq",
  "key7": "mRn6x27YJa28hmg812DLKLRsCxAGdAorwanBgcpjQ89SCqxyU5CTvuYuAeqfksk9sU9UrfFjC6Y8p5RpsvcQ7iq",
  "key8": "4UcLvumr9AC5GmdSv7sutU7BLFGMnNEJTMRjBLMGZv3f7gQ9yVYqXSsg2DFwmpDw21AhybRX6ZckL6x7u5yZUszx",
  "key9": "3PPoRihrDG8pMkJ48JTrmqgrJXUvMTtmWhJdHm8sYAgxSLghThwjjPZL73NXuoaW2Q2S6Rmp5FEBBLh9eLTVyfe6",
  "key10": "2YjmJsmUozgn3neNCdxQCaREnzesX5jLidxzkWASdVALPdpJVtPyzj7keNB5jHYys3qPkDanNPvfS2tHiD5WrvyR",
  "key11": "XefyMTDn6ksgpqL41kvBZ3nC7RVwu9aYQLftADDiayGg13nyXTBukp5JnCwhDWbDAq4LQyJ2MFpPF8LQFDKSY4K",
  "key12": "6584qhYhGct5n5zddhdHkPUdP7hbNYmWDw8CNbHVwFkQ7F1BAdEkxyuckotYqJNSFqwD3xGg9RHqEWzjQLeFXbFb",
  "key13": "4wRb8J8L6ScnLLaf8WqeziwYGpzEwbr7NRcwaUhS4GiBsXrE19gg19MTTXG5WCA15GiKb9ivNMpfnqB4yricSDXa",
  "key14": "3atP5CBY5n38DKxdWNocLfXtJqnbvpspmqZWvm8uUqMop2ds1PqSC6yhJ7ey388UEdjhb2yc7ZWZHkU8M5j8PE4R",
  "key15": "GkREYbrizReaBUFHpGSSzfWNaWV8YB3Uudwaij5C6ChmVgZ41Lin6nsX8kHkLKRheUADPrkPCheAimz1CcnEHNp",
  "key16": "3hiTu5DySWwy9maL79Zj1xgxAatkyH89GW6pk6DqL5TLgrC6j9WXN3Nv7YdFeXXsoU2FZenWX76nbiEDxPbB6iDB",
  "key17": "61BZkfyyx1VETZmkb6ThfE8LL5UQNayiamT1wCKD4Mhhv9kGQ9Xrmp1FgeUg1vUua1ZM6is6FeX1n4YLGPWcioxz",
  "key18": "43PsPzTvfQ26c2aWge6xN7yPZ5yvCB3izooWxdqJaHwvDRqpgPqdBKrqxo1NpZyRYnMHwdNY37bvBDniXeyLqGY7",
  "key19": "2jix1dkCZcjSk2fewyxV9sw9CCz44EzRSiX8SVTQ5SVLpka8WW298r33hd3Vi47n36WfmNTJPneV1P5u4SVAdAyj",
  "key20": "4TT8mpRAH5HTqX1Trbnh8FXjtNaYBMcytZpaMuXqafG8SeL7umsnAKvfSXa6LCFkYEmKnR4A47VBRtpouGzbWbrK",
  "key21": "5Tj8HgM94RCaEDjnNPCTqGiSb767qX57ou8rwVps63wqAmxaGye6RJnkNUEKJQXSJVeUqeoNETHT7kFTckGbk8xg",
  "key22": "5bHQ85uszNtNuCcGb6o6aKhKjunS7yy9P7KVAr7KqSakic77Wvry9nNncRb3bjPF6k1BWNWbSLSCJb8Hm3fiGUXt",
  "key23": "5fsTQutoZ9undKw6Br6GdwpiA89wysK6SV1rvdnL367maacnAEa6gZUCMUeEwmvYiGpkwWpZ2YJvxcoL5Q473XUE",
  "key24": "tFSJtMMypmbDe6LREomsEX2EvbTcRjbUebLwz1q1Dcciui2KHjk5oLhHc52XYu712b9wTUkrNGwTHUJ3Ev1zo26",
  "key25": "3q1dFxWBx2D5KAnuRkB1hc5SnvAvEgrTrbhzmbMaozxCdHJinXtvCe93j1cT9uQwBiMjmj9Efe5qxkzgjh9eZjA3",
  "key26": "2QQkzoF4WQqaed6XpgWp4BoQZncMM4GzrEnhmjAFkCur2bWkK6UGsxYs2STCdfuLNSLi1erYrV39kzpNS9zfErbz",
  "key27": "5G52JAt3nBgebHxEcwx1Lmx7Gr5BbBSrrd6qgoEWpz33vyuVQEt6csoegxboueLQjx75yRNZ4vazkJrNLuG52iAy",
  "key28": "3pKnFGS1YeoKt9ZDaeF6cSZxJK43Bm6V3rkZn9u1RvWWh5YpzTQLUzzrHkXdzNfhGsr6D4ZwoUbwrLveyS3PBTdV",
  "key29": "5x8U3AQUmq4hHhHTSyRC4tqFuFBr8TCB8cJDPgbzkhaSK5nDagAmJcjL2LndCRLhMGca8zJV65q3hPMDzTDMemJW",
  "key30": "5UXCCyjXzSGESVRh9yxXhsrYgjV2CE3dbrp7hxG8Kw4LCJZbU6aMVEB2boF4SLRtfBpRFKk7rnHSuiwaoCD2naGq",
  "key31": "4ak7yn2GWpBuFEifg1AXbH6taEizeTLv74RoPoEs9k5QrQDwZ9x1Uf1JNGRP3c8eMMGyZmxELAHqdm7LDbhzAtNn",
  "key32": "KsTSnvWy9AN9WJLdzpWz1szj1SpubnxHJoXy4gPtFTaAvzUsguKiJjMdnxikb1z4je1ts1qDUX7iQ1rdNGexPJF",
  "key33": "2BM1ZBdMn3cpSrBiAL1MzX2sNSAySrDKV1jen1miVDABrtsmyHDXBGPQURdVEvkiK5bvCu73ecNL9wpzjQqkxZsm",
  "key34": "48H2HsYzzfUQGGDk4pFbCoTetUF6xRq3SWLJnKTLtsGFNU145fMSiQqKz1dhhbYbbWDvAse1LFvg8ZUBq13Us7HS",
  "key35": "2XchaJ4YDKvYfgzctEpKAvUefJoZhPN1y6cB7HbcEibJA2JevGx5PAzkYYDYJ33XrAV25o96GmuCgScBQ7zLiEnx",
  "key36": "4bt35D7Em6cSRiUqPnBSSsUUq5e9H7bp9sYuy8zkhBuZvRjwMZa13ZmxkaMDKGz4YJsTcPtKZs4aMQxEcX7jnMAY",
  "key37": "3xaUzs3xxnnZMC2eXTJem7Ruh73bHZKrfEbZE3fyMFn2CQvk35abkCfz4M6d7new6z4hcMq8FESmZr5A7PEbAQZ",
  "key38": "25PysN9MozXbpJvop6gzncKnUqaZaeawce9Kh2SLscrSrzD39Rh1X7zJ83PY6i5V1x9LTJNcR1P8fnREFhDRKv7U",
  "key39": "3XjNNzDfUcNa9USEbtUexqbxuEDFNph3UFP8tv2iACMWy6m9Ko7GrSUPSQgony2JXK4C4yqnc1HfUiMLrZkFEUQM",
  "key40": "3gbpggPcNfRtxAe3KPtCYWAheet57rgUeMh8KVo81xwkExgFoXwEtNRfS7mmkb69FhMJ4yBUJvfPDKWgeyJTiXnh",
  "key41": "5GYLC9h3xiCBHuQNg98wVFF87pLcz9qdcZyfrNknNcarUFWQx5vaZposcTVXzHuYa4AjvKYkEapb9h8RAspe39dq",
  "key42": "4y1jchwpXz9auZbTSGtqZYtCd15fJb73jRrTfqTtHbKHmquv75wwtSkGTma8p9rKEryZTFnhxMKMgdEDhpjQkXkd",
  "key43": "3Gp8fxJhi9a4TVAVMM5mPSgpRvhrGKTcCrWADdSjD1DgRgGgKte1tEmpb96sUZpx1UUoM8hmVbftq4BsYq1EBhw7"
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
