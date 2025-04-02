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
    "JuZCxQNF64qCVfWG95rVCf1gzutzN5cBc8rq48C5muuYbZVRUBLLpq3CdQSv9XJjwUHCgxtEuMR3zTcTqWNFx1C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wzrAgU3YP5qR5BR8dLmmzMWTv87ziKBcjdTnUvYQZHE8jXCK9qbWERLB4MpyY77YKooRUcAkUGDjqQzDRWcwLEo",
  "key1": "5bLUXq9K94GJ6hLzLRmDUmxvb8Gc9mCZHVFFdewShnrEoap2ZuakmyZHLsb2amipUt1cswVi6zHLChSb513TiVpk",
  "key2": "2deChAbGYHSvduU8Yfxdtp7CPZAAPHGfjNkWsB9bQda4q2NRqaQU8bSDxBzpNvThUWhNJzAsfUywB9H7w6m14gKV",
  "key3": "2eWoUehU6KeDrEpNHwpFuJMZ6xyupDA4sJ1ix8d28VZ7f8jF8a366s1jusRtPS3T5nGuYAfP4Rfif5AdebqyKmpX",
  "key4": "5hF2GXHKvqo1HrSxFzkq11h1uxtRh7QWipn47D7EXZdKhSXQjyXomvnC1ZAsYwzZqw9a5hGdjC2e2JPFwcHWL77W",
  "key5": "418ambwUYLivSN5seArWB8FciWu2h27rqyu4ZAVfuRKmAAdh3rUA8KmGKryhK42YgTxioFUQzjv6nRunKiJ2NS8e",
  "key6": "215goS2kEVHeznE1Av2GHAnifkhZhpTHthv1MgxkvbCsVDfwteQjJaZDV7DDDMbqdX4oGas267HsyZcJxeRNsjvG",
  "key7": "2G4wr62ncvz1KWMc8T5Q83v4CUBo9SQWj8axZzykMAb5LhxZ5RYchA946CjSsJtXJXLXGhVTqUf14NEnuAax57Bj",
  "key8": "i78evJEtVrFZcWJomUriDcdcXn9n43rJCXuYdQZsVz1ckDJFRLYNWy6acHSxEwgrLQj3vfXV1MG94h69kDuf7rh",
  "key9": "CeMZMwUxumxVj6GZ8HfqVXnYiUhSLrH5SkYWcW2xtnGpG2j4873RcxpLhbGwLXfvRJznDvAgzgTbw2txhM13uYy",
  "key10": "2M7jKATb9N9UD6SzMkmjrog4b1LNeXGgoXrbbTLcqEne47oJdYHNGzS27na15hhe82xNtDd321HKKRosREUPGjtG",
  "key11": "4YP6Pua5AiEGDtFUGrNnyXyq4DAbaf1U4jqAjHSZJSJ8KwWmaDLyQ5FoKwqirPkqE5uvHixF4cdznBxL4hDFMLRt",
  "key12": "3Ao1FZT6ETrE27Hy2KNLUyo9BJfEhsYSvxDoRgQqMTMFawnrYmwSztnbvspdH87zh4VVT5sz4vaoj5G5hUL36be7",
  "key13": "3t7yUMMA7Pb4gpFUNgeDNnyoqneyji3x1irqMKvrjjKF4Rt6SLKLNFHD3KtxWbXyHkZ2CKVQ9sMZkS27ecjtRoMD",
  "key14": "3uPH76gFw1VXnuRxU9GaQhrxEg3P3xKDeP5y9gMi9tC5WCpQ1gfVJjB2AfYQHC5YKMYYcZECmzo9FbQCm86fgPtA",
  "key15": "SqrNYKbDVxyVbA6CVBhGc932ALuzeBd3fR3kZVQJJDRHJZEcddDeM7wnbrK8twQLquVTYoxBA1UV9awmYE1TJiD",
  "key16": "kFnTroFBbRXCGLfo88mZSuZpHsgcNFJ4GHroPqonGvLzHEn6CGQGzyzQ4yGVwZnKaoE55d38TdqhNUQvFAgFMtd",
  "key17": "4Y7LEyg2dUSt26jSNMVvdXP5nTEfTTFma6A3Bkm51E38J1xbrhZV7JJYD8fogaZ7Vwh8eHpzh6HMBSEBsX8ePML8",
  "key18": "YRJxSn9VGom94H8M4WDmehZ1ecHPQakCdKz4S3vvbiBke2NvVpfewQFpS9LsMmcwhgUmjKeUw23vzH7aGfoXxN6",
  "key19": "2GbYWWCWZ3w6opMCdHRepwc435qkk3TsB2HDyUzUxhx4Gd1WpaMRUZzfcbPqGnEB8miw1JeLpC3AvgREoidMjdWm",
  "key20": "3cnPgrAFHNAwYQwdPK4SVDYGRcReb7RgizQD2SYESebKq3n3dDZYjB43WpC4JqMdfe6Hh5K1J2FSpQoBWGmNaxnY",
  "key21": "4jeKXoaiTMRu76fxtqid13hw8zDQU6GKHoPLH27J1umiwvfeoKcaNTnmfjsqXTG5aebvxWxWxpTVwsaxUbtQMuoz",
  "key22": "3KVuEvpSmXjVRmJYAaNDGWPbTuotvq1cYVgSCDkodJ7YVYC7Y7zucbMDvGFFsHeWsiEB3njnXV2PFcnikuQcSWhR",
  "key23": "2p52bHJxbUd7ZxoxMzunfiVbyuQ6vwNs71PEX4ky9dBQnhzUk6TSVJynsaKrsKcdGfQmjrVc7mHitZcncsavyNSc",
  "key24": "3gomvcgMNxyYs2Se5ZaxA7kGwFffEBzg1izPxGpiCE33fTtvUgLBH1KULwWYJStMwLLwvjFnwDYHmNkrgjD1oi79",
  "key25": "hPfuRdkEugMVMReQnFu5CEcJ4rGD3czxb3ib2we4WYJUCYuKy3ReDPWgZmpRYK3SxifCE4vxXK7a1LNd2cbJTgN",
  "key26": "3buNC4spV8av9SjW7BjD9tkVDzPghS3WKcRBS273iVDov6xNFpApBveRrL5hCjD4HJ8jENcvUNBo44bzeqre1jB4",
  "key27": "26LE8K5N7ovwQJwX7W5ApFwDGpbhZFRSCGNnPRjYmSf5AdJEkDoee2BqWGNuBdZnRHzq86BD5U1qJQneTwhxeTNu",
  "key28": "vowoEiCdt4bKhrRwda6ez5FjQYcBw2QDAM9HbPDm6PdamTCqA3mHdwgYEkMWgzYEfBTrspeeXYTWdUrQUjbMKTw",
  "key29": "64e6xfidVpegUW8tKzYg4MBHfuoBkZ7Tg1bF8PCBaJg88yLKCF1HUiPxX5LLFTMRxFFhhgWVX9udWL6Wt2QDBgUn",
  "key30": "4DVsPHZydiUSA91YrnZ7LQr5eR9waR4iQSy22HMGaNEsdgc3YoBthuWY1dRWLYjP3d18soiQcqz7psTyWW4q1oZa",
  "key31": "36L89oucPvGeJG3Q4Ec7hwWUGpLsAXSVTUqeRnij8nz9PXFpxkkC5LtphQeSMpe3crKz3n5WXHvsLMZcyrLXHNKY",
  "key32": "261U4weP6jeYVEpev2EHaav73f2uWv916r3QonXHxumWBtydAgq8d3YCGNxpafzg2iNmy1Yu2vBsTKcGMQqdw9L6",
  "key33": "4zkq6KNwDSGZtishhtD2DqMgpx4YKy516WFnHG58zjd5DGKd49s7AYBFDdTetZMWeF7ccXfBQbuUf8f7xksv1ahV",
  "key34": "2jvC24e7KciHFHA8LJ43WLqAuyfvcf4D99uGgDpbfAMFvTyC5Dgrgv9HVhvg7ANAjPfQZXC87w5sRQhyYZodJuAZ",
  "key35": "4uM8uukd1pS1rkrJ51xyHuCkFsXoP4G78diFtBTBiUANspnUH7LzgpQHfxi4WsPShALVniX8DrbmcTiAw4eHSXmk",
  "key36": "4AHYpBbCQBjBUHmJHSacVUGC6WzAsPhcNB4iiiGXRcQcoSpLBJssiszSNH4yoXgRG66KnLCToXKCw4zE66isuZzE",
  "key37": "5RGiEwtUH8hMaacxmdsvFYq9UbJ5bFeqj7RzS7XZKV8rvyeTuoWrLuD67PsfcVNb8GHxQ4ks6aTgfoM93fCh5syy",
  "key38": "3ootMdSGab3rc3fL2AQNmfr47dPFktZJqpaM2BufBpZXzkcCT53AVBrRgjxckWPkYcM1Rjecu1ZcKU7f4mpWkk2k",
  "key39": "asNwrcteVAFdBtEid5Q3YxPLp6PP5aGjqU9Tx73msxH8s2b8Z1MCtn2PCQPf1j8AE4WLoT9M88cWk2ihD48DRso",
  "key40": "4gHqiVY3qfJbiNYLUwun3fYiez9RcQnAtRciZY3D9oaGwJJcf1YrWjvxrZn6p7z8mMF1Vh8CiraVGoGuDsirkgTs",
  "key41": "4qFd2YiG5rv87utJt7RDbKgLEGZz6Mf9CnN6pdJHkRdHW6sXUfmn7QzZkFUMmKrDFU1QopG3R8QtjDeacPUpJdLV",
  "key42": "5FRLC8kDyPZxcAfRt25ZzL3xhPHFjfFuGyW6zsKXQEo6j43wqW3TuTPGob8D4Q5xqE4MdgpET2Xath1ofyvMrcSa",
  "key43": "4cZacb7pGFeJ3sY8Fn4oStHJRCYyUWnmSDpGJka33p1m3kh8jKU5xnRC3dUD69hUG5k1CEUMv6tjVDjhnPh44iu6",
  "key44": "2CgZNQMXkWQkh2316tsefw2Qr3sn3i7jMrQcd9bqaBDhiyhmpnWaFQ9JCaYkgiTckFYmqHZHMb6usk8o3L9mrH7C",
  "key45": "bKmXn36VTc1ctArMNJZ2Xn2grq1wwjFcUVv8tQMa2TeHHDLKpsve1f33LNA6cs2mNDiS1noQK65A9UQnjWo9V1a",
  "key46": "5E4iCBPQi87BWNipRNM9iA2dLFBdAqes9gkh7MggkbzkoEMMmrygoAVKaJfpNsMmTnyG6REoYF7sUghXjz5eWyTp",
  "key47": "58c1BKYEKKSoKmMkEAN6FYRYxDgfW97AduvAuULwtv2WwYhKGL7Kjkjz2yD7E86gE1SZA9PnniFEDC1Cn1CqSk3u",
  "key48": "8JdQHrfsxTVwy5s1UNYKiCU1f6aWsLh5Egzmfd9uPwbANpDdWj29xKdwenwKU4XLxAHqLGzcWpmBJxDVgFBtG6f",
  "key49": "2b7amVkcG7bUkQH3GZMcN6K56uZ9g95stC9cbsWABhCsjhdjG7BmcYYqfxVT3JTWsBkdtSBWtRqWayY8rheLuQwq"
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
