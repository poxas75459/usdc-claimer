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
    "3LcrTYgUgnfa7askKaBZoqZFsnfYhfVEsVB9AQuoZ1obJrUdQ8HEsu6LTXWwMGGRYun3TsPCX8H8hpiNLdZsMzM7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fje7wwXQVnZhCBc4SmmLXQzYCaAimsYWL9Y6NPdvRFTrLokNxBDpcfJzPFRAVs8X7xDyYo8yP9gs9rmcAyLnQKc",
  "key1": "4HwrfQkFwbFmfAgAYGB5yQ9dqFH5sWYN8kMfB86knXMukoCu8kk4K4i92We2cFnL5hSbMrBEXumwP5gF7YaAccR1",
  "key2": "5WwXEscRwGoqhLZzyEUp36RtFMSwELBYvXTMWtKGnMzffVHrhndSiE5QUXUYFm96Thvc6A7mgwGvSy6w1NV6PPZU",
  "key3": "5J9ePNRZ926QdbzPmF3zyfGLE5PYRHTPABPtbiyQMBMmvWfcoNtXsJbMbmgrA5PG8pzKFsP8DK5W4vr2NW2HE6UJ",
  "key4": "g6NS2qBFcNyCdDGjRgk5epPGidFhKdb9DXZdCt55UMFuykUkR4rh763F4vTsySW4aB7eGxiKwmTHxeoJbmercW2",
  "key5": "44G2wM2W4ZuSuJYtBiXCQqrxi9JJt2Jkbk9PmcjFyucmeie8oTwgoo8Cx4kNgXcL7ZNn5Hd2AkpTK1PpLMhwUZpA",
  "key6": "4VwyMuq9m2u9qrR5UFWdmCezbxwJNhBDNSUwvRZ1y1b9JpqAcZJ3thHk4uzTMaC7Nxhab93k5ysXtygcx6QSFt1E",
  "key7": "2BgzjfhvsvSKZLRYA4pdwZrDwwkBmjDwfSFLEFJ6er5ZYUyprgjFMHP8Rb1fwjRY8UxWaUgtah6yo55soiswQJEw",
  "key8": "43c2ntN6fnqKdNjD2FDeroj83khhB9D5jhqt94xMB5xYyqdjtZhNMURjkkpdmPSgWn5fXBZ7N4BSxGFXxj8LuNwv",
  "key9": "54FCR2Fi85khmk3RfrzVAEWRr1pvwMmAB7KqXzg2TnHMutstByEHYx8ZemqqD7TTbpJGD4hYPpgPYFvLcGmyWHQN",
  "key10": "5rf2JqQPDoSQ2aazYZHCPFRbv62kUCRDt7eoQZbhdUCDjPFMHKxsvzH31q2GXBrmYZnNJwnBmdmWMRPqYg5tSXnQ",
  "key11": "4LibUpor2rG5tTgYGg1GAHX9keotMwaZbgQbge8P3XpbCjEqq2kL8r5WWPdUHjL4L7H3U7PmfxXKD5jSh7CeMaiF",
  "key12": "YbDqeTBkE3CJLykLY2pgDZ9k7r9X3Sn9YdrF4x2eYiytPtC6Z1hsQh6aSn2uPuwfp8LgCwJvvaJ2xCdHxzFJjYi",
  "key13": "67AA3CJUY4TyZZNuThfhqSA1trHSo32ZcA7rgJK2pWHoQY4eJVDxkHxz64FpameXn3mdjXSEstfm4ahR1h3SuXtw",
  "key14": "2DyQefPhW5y3CQZd1298WDo8ZuPpt9TBEKdAtXmTACbj5AYHx68hysMiKxfr6y6qvZR8pXZ4R4mswqmzUegUVb3P",
  "key15": "3FhKQ7Hg3PZTtcUUDAYyV4AjetPXandnU1fT5BLJSL1FUKfenSmrivn3z2yK8c8obd52cNo9cs4MLQnKPWwxJAZT",
  "key16": "2jt47Ek6JnQi4yh2ctFbakXJv3VHD2de1Nc6ur48WuLQ4w8yXLhj7YvELmgDQe8FFEGRtWRn2fJUHDFZMuAN1cnX",
  "key17": "2Jh43JpaQ1x6XcRJVt3UvTHUL7NEUuuS8pymX9t8haEwPb7pwG3xyGpmjTPwjRkDoLKLE4vTa8y5hUWX7AqW4Zkx",
  "key18": "2SZrwpufpEwP6JH2YvJtdacya3q1WAVQQty8eCziXtsBoULeTJ7HFsWVA7yaiJJqVx1cqS9vNifbgFKnC6E7fLcU",
  "key19": "4XHQEMTD13UwV4qcm8rcpVoEvUKcZ36HMaEKfg6dmEwq5wJNGgLpa3p9heSqPHRQCtsBWYpCPEAysAnYgBdpR8oi",
  "key20": "43F7Pf41TkaPc9Ko38izbWN2W5kbA4vYtPB6G5bkVQP8B9Jr8zYsNZRWJxwnJDezgpY1JT9mRwVjD8VHX9XRTJ9F",
  "key21": "2c1KZv1iNW2uiNiDHQzZNGC2ckncsefBSwQTCyq3wMkwhkt5MWZHczCUuDJST2sc1qU35BUaSeiw5xP5PE9BPxQd",
  "key22": "2tvNKGzNjQ2eTEvh7NVqkHNhUwW8ngyty5RwjkELckYMkBHxFTi5avcgGjyXapkcD4Mwx4MiyhisSWUveu8oTuT7",
  "key23": "2iDEsAxmw9yRLjrULUpvWndQxEJQS7YwMp3fR1VGQdNiZ9HP6DJFncAAidz3hxMjkgzzRvw5Z6UUGwBHT59xk5qx",
  "key24": "2upfaXmX6ezJPpCbCordZsqxSVpxfidnhF4tHrMNv8sBQooL9sD1Zg1faNKFeRrMFqBDUAXWiQFihXhyLE9Q9QvG",
  "key25": "5u7RBnjCi56bb2DLMrEmNfALpfhh99XFP5oNRcmFHw6CorPQjsX2SYzcaobbRYu3vpQNpzezsTQVfj1NhQGVoSxx",
  "key26": "64BoBSFi9cxygzfWsx2jpwJKz7z4LpFBZJcT3RPDWYogtVFV5Hnhru5QFQ7XJVLeqZ7gC8DVbN3sCuaqcgs7c5ut",
  "key27": "2XYbVpuSANKtrjSTmXJZXozS1LgKeruTJVCtPzWwYPtgvy6PPAcJApRFvYCjxqoHPsGQWXK91LQnwxZibCdgvcUp",
  "key28": "5yL4qiX7wskqSj4UzeGAS6P9KdQurzZwtHv75Tn1uBJ4ws6RVkpBLJ9eDke7ftePkHjjBZuVawJ2erpBkQKUEBV6",
  "key29": "2tfyUmEiJPzmfBK4Ra9SrwjGRs1jU3Qok6kf6JhNrxg5YMkV573nSt3H7A8hMUPvGwoZPCyXx8d4U2PRRHDafSAy",
  "key30": "5GH2XGMi33z4wmCWtitsH6XysoSR873Fwa8dggzYo51z4FadC7U8Dkm5K5XzzRE79bnH5rzJHxMJ2i9piXgFDhzg",
  "key31": "5qkLM6noWwrMF81DedTJVf87Z1sXJ9DpsVRC9xWzxrvFRn1SHG9Vksad8vAiYYethXqzpxp5geE66wp9EHJDz61H",
  "key32": "3QzohRsFfLMjkCVgrGYJL3ZGowe5qeGFRsoe7uXkYhj1ow79guSHFL1Y1VmqP3xrDLp4RQxEMB8krA8zP42dSS1m",
  "key33": "4ra1dD8NeeJxhDDfW2A2pTAH53ioKiQJS1WF4tVm8Wfz5tc8WnzLwEg4fGQ7jphQhetmthZNFiXUcfkeXnk23xWv",
  "key34": "4aGhXsWNh5sfFALBarfNESCFdgQN4ksXed4nirTkYNpvQUZbjwxGkbwC8hdNzaopu56sAXPtWoQn8RjUEyqqRm4A",
  "key35": "3MhpYoV7bc2qw7BE2xZx2rsFwte6cuRsA5VvdEVChi1jyrHWDQ5uEaH3N2WWidXsTR7BwY7z2AiGwB1VzyHqN7h4",
  "key36": "66dnCQJgK5PmGRs5r3v44T8R5tLbdFQuHxfF2S2xgTfCE6qjwHsvJaWWWp1CWZ9SLJLdGZc5RN1mzQHAjQMGRmkf",
  "key37": "5hKe2P3RUJKDwgh576hqmyeyK9tE7S6jseMfXLeh2drhf6hqgnwPJtKPNqjGA3ryCJRGHsABjDqm9vESAse5Wt2y",
  "key38": "9Z8ihi3mTxZvHbDU1zmHn2yHSjU6uA6FivbYMPSharLiJJk3tbZESMKEaopLtLtQUDnJCJCoBoiTWgfF9Su9ipJ",
  "key39": "5SvzBp1NyYpysZELV9qG5h4WELfqCT3DxaxgRMGs7cQCEy9AHGHUhFmRiK1kvwh2XCcghxFTNpcAH1UC12eHE1Jo",
  "key40": "4ivje56WhTwNEUo5Hev1y6c11FypfiuF6AtVFRxKzN5kBiWtA6H5nXMtuDs4yTHHbSVFiK4HrLjLzczgmegtHVue",
  "key41": "3NkqVDJcvFUPv74NJW2zyiXhUpHjMhYqESUYHywErmsSMe8S7UC7FRyMuoFZMeNonbvmGoubWXyMeVJiECge67Qi",
  "key42": "44CtHacwrH7nLakuX7resFiQzGQH9xmoT1prjMeiCa3iaoDtvZ9TYzdShtX9zZYWSq7QrgvdGK4YYNGoAAWXL6C4",
  "key43": "jL8cbYb6PPdHnrwYWG7CYEwdfgkFMYAxaR1cFGa4ocrFb7pXXWkjw2e5Vew1xhnzqUoQHLgSYrL6WD9xdtyFxSf",
  "key44": "2A5jhyzZyQ5cVnBCrxDw2r6781d8Gje6qPwfo8GphPWyrKuRmSGV8hgBSDsThhHpgcBR1oDiMzGPqPKTQpXEYBHa",
  "key45": "3D1FbBwWtdinJX7pEY7cscAwLunoxtHcEjMgJDuuvQHTjpmcjoUUiYHavuizwHRsmr4pTeauYTJ5qTFDELx9iEPK",
  "key46": "53jMPEKtkA16ffPyRSddCAL1iCWrVkUfMt6vnk9nyTUocDUqZk3oN9gyBDGbWmTMGPMMpNfxBHsVvY14Eu7xwJqN",
  "key47": "4KF1hdguGFhC11jq1aG5BYS9VU2y6H8x54MwfrpTbHepGN1CNRst65kfxxwhr2PYqick67U5pbhmgRizMH5pYfrT",
  "key48": "65uRNnXWusesgLHcmqWs2Pa9wHFq54A2DP6ZauDy29Zbfceux7xsNXGgK14FtGBrF9eGS6U1azNeMRob7bGMLXC",
  "key49": "3e33uRYoMfCvEV2y1Lqvadm2LDWMbo6QTcPHVRYPSY95ay1TZ49teWD4uwubwTMeGcJK3JRgNGDs5RuWqtWcLhZw"
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
