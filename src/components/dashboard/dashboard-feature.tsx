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
    "48WMwPtVDpwFKaBXsbWSgwv7LMWo2y9jeNHEUtrwExZkRooC5ULfdTPdkB9ocsWgt5HJCjXhsapxWFw6PYVfBdWd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M1jehgkS3uc8DbwnQVkf4b2AbZSkKDSbNKT2PVzUfoPRAmwrm7GXZtQ6jaeCEJc2JF4ofxzwju5jw3ytYPZ34Sz",
  "key1": "er7sh19hLSy8AnE6oyYVas6fC1oEtsp7sbU4mb2Sp5E57iCj7Zcmpm31U545zZD1EnitYvYrFZVJACYRpHTftzL",
  "key2": "26SwMTHsRD4appKZjKwv81h1DsWUWsqvhMQGUP66VkiLmFtsnXPjZuNwmWz2boV9a9gw3bMXyx2cLWK7v5i5wNn1",
  "key3": "5hg6VhcWGteTfUSvm2EFoYMusAqS2ceJoAGWTfK3nUPo7WpGyzcunY4cge44rBRpJg15a1t5hjYsc72MSgBbDfYN",
  "key4": "3ZQov1Zvp5qzF8YffDqfj3wEWJ3n56rM7ZCHteCAcbLcrp2ig4FA49Sb5qMYzUBZX8r3ejfwAZdhQEeiQQRhwA5d",
  "key5": "4WGmRexpa23xLZU5NM1MoeWsQ7H3jBeBF3fAuWDr3dF5itYGhkor52oJVwPNmoHLr9CJF1U1FFTGwXqwFSzdAxHW",
  "key6": "5TvjfF5YtMXUF4TRBFrYHh89fNKvK3ViH6P9rq9LNTEUuJyMJZV5xtDRpjFTs9HfG8rTStg7c5WywKYfPckHNXkc",
  "key7": "3FeCe3csTDijUdh68GwLPbwhjY8euiphrh1QhdPWMT2BKN9SYK24bsRnLAZwCHADkcA7G9Vx6QBvf8Y8wxGXwjQc",
  "key8": "4wD3MQmcgAVjm7NvBVr8ELjy3499y8gD1qfgAoA2mmPRjqM8ekiPscdS9HAHJQDrXeeyAQXJqF2vbrCnnJfjWgcY",
  "key9": "5TsRhSSjpTR148Dsz79rRtSb6pgTveSkRKDJbpSYVo57dAdFpZwimowgnWsXYb4XbWCYHDDGb5e4G8p3KsURibTh",
  "key10": "5vdoC9bpv9k6qyuBE3A6V2A1QT6HzVP6cN5biRAE1kJFe1BEGah7HHRqZuP8Syt9Vv8eupVirZftn9AKiJcqbAQb",
  "key11": "3KKT6vDyoVVLDrWkgde1unBkmUABMqQMC4kX6FxRXLNGSrUYMmnneHvQsS9YTy1q5NnhvHiG1J9bLyNYyE6Qng7n",
  "key12": "2a6MYJH4BvGL9g9dw31Zd5mCuKQsWG7zxGj4qZrW68fWKRJiaMV8Vux8rKqhQowTeRS4E6y5C6JWzohZZd6AqKJp",
  "key13": "2UcWWxP73Amnpx3kSiwPKRuM5WuNJzhxefCbWU8XbEafAapphRmTMyZDC32GQxj7FSwCaNjhccbXbFtLaVcsmfrz",
  "key14": "2x8ANYgJqLZmHobj87ebBo7kz5gosPCEtqniegookbzshBKnDU8nur44THN2Hg4QgQACKMbU3Yi5E8FBKMwNmZ8y",
  "key15": "89cBBNb9EnjkP7kxGzySs8t3MgdGEE9ttBhrJ3tLPwE17L5j7LmcH3FDLncyacfNY62CGmAwXZg2UpoEMh4AFrS",
  "key16": "4SyDNfMKJ36i6J41pzCx9JHtjXLGN8uTFx6KvykUUufVwfVFLMpvsJtGpUQkge68EZ7vb7K4jxSmvLKZTDfdLtod",
  "key17": "556FMB4ajwPwZGEo9ccWVFxEzp3SguKt2UqTZEzGmyKdLcyRMt75ag3iyaTdodAxLMf4jnUhcQVxyXcsnWaT2UFA",
  "key18": "RbiGiyqiSDKc3DTvpwE7pZv1dJWNmhQBxGyHHvm5o43vBsGWqVUapubAXfXhsbjQ6MyV4UwALtyzX2yzvXykDX9",
  "key19": "2yJor5iSUGRJ9X6JEzoBG8DQZzyLf257dVdZ5vtSyPQyR4gHgGtLJ1yEjiVJKKneyB8ccbmEoRcCEUYCBMmqf78v",
  "key20": "2fUTp6ToiiByke2QREJSQWbjUCkeFHtyTfcstbgZW7JyCKcDeX3ur3sZNswGjhxBEoUHEZP6VJnWz9XrWN2oztgD",
  "key21": "24bs5MLeqQovvcUa7WhYzkhgTyEkrCF72scePY143dRQF493NsNzN9vh2vhhkpaGFhc26tE4faXa652izvaqZBAX",
  "key22": "4nbArG1WCK4yBuyuKo34HGazLve71SDsLy31KCZPH4a8MvyULhyfxdPqVVPrX86eMnibtKfGC8R9NeDogBBwo8tk",
  "key23": "ujUBrdU6DNQkkaDvLATysRNQC9KDpWYQarCcCc7G4cb3bxMG77LcJhfreNoAwDnMeb6cz4Kp6DZWXifSK5kZWer",
  "key24": "5iJ6UVGW63TpYPXaxNpH5zPbfUh37apJXCfqiSnGxekPm22nQZSjrM3hd1kcTJZsvRAabqimwYyJdpLaxKqaTsv9",
  "key25": "59NwRQVQoZX1rC83LRjSGyZbnscpKjtZW7XWjPTHDxanb39t6S3qBSy7AFJeXjuoEfFq6mgVLGgxTc7HbddRRiyW",
  "key26": "36o1pAHJdMDNFd9zJDFgC7hAmGd1WTD46SCXWrQGdAHHxSetfKdWHtyAn5prZjAkNzavgVDzTWY4pFCFRQyyAHvv",
  "key27": "31fsV6fAA3SrGjkGJEyhi3nENWANGayBRbtZefMtcQ8QsrSLJBSD3RnS6un9pM9sHrvrhvLCVjspX1RB7whs15JX",
  "key28": "qWz2Qu4ojuxYskhwTU3PXYTmfXjaP6ckkuo5us1JPcU4gsanpnM4GPjk484mnhX6PQLoGKYJkVKPc3s1ujZbLUZ",
  "key29": "2AfpzbsNmpj3AHXmxFUChSRWKyJPgUESEwFfU2pggNH2Df1nhmB4nkYShngf2rc4t7njtkCUXeVEQeHtFkjdgEvx",
  "key30": "2dSk86j47LEKEsySFJFGDynmoVEWZrruSeUjuPL2D2bPQkqgnxDmUCYmswwe14At6HcdKY8FN5tVyZjWef8HbcPU",
  "key31": "5B3u5Km631NnxCy4J2bijXTTs8dZbyHmBXypvav2k94EvqR7YoVQb5Zkpb7VDjuRToUYduckenCzs9WZGXvta5L8",
  "key32": "mgtk3FHAq8RY8u77tUMC7AdH7SXJxyZGJXed9KQe9VoQHoxqhUN9dGrMaSqxcsiRQ3mXNkGcEpKt1WQ5zxgBvce",
  "key33": "4hZU8KoLFoHox5WNap7gwvezgYU65oFycGKTJ6yegA9B8EFKMRummaMMM6zy3iyZrfq3LjcVzn2rdQkG5b8ASdp3",
  "key34": "281Nsj4FqgSKFtUPdcLe3aAvWfCeTwWHnoBNVjNAkNtXyZ6jgcZbPiRNJPHheoAbZLEQkMZLXJXdFbes3FGkGDiY",
  "key35": "3gnPMvBPAmWcQ8HAq8X3PJu77MGEo4QXMgc7mDbBVsNTrDQ9pUUT197Q3BqC94ecjnzc2f9948PtX5SuTwo1pNfW",
  "key36": "5yLkbJrnx1q4ixTcFwZStp2QkXF2w9bTNCLcUU9iwFaLqY1pd89oqD8KK2BPASxeQs8qMr8Fki5Mtcm33v7RyByS",
  "key37": "Zqk7pDFh8Q2hS84CY3JhcCQ9FSinELAWfUY1MkzKZUnvwNoxu5qGAypVwhNo2zJUPqSoiCN7urLHF2r2pJuSfrz",
  "key38": "rCtb1AYbKqyzMzYLsDmUAi3PwYoeWHGccUxT7opuiMVyCjwLuwWHbLkt8J62ZQVP3jAuXZdohrADn3R5Gm6wdgo",
  "key39": "35W8rGvd8QcVxthc5SbZH58q6tXYQPRYDmRtvWyv14jWH1mbcHvNsvJtPeWCkzueX1LEtfve3mg35CbpUkJj3zBe",
  "key40": "5zeFVMEqmrRAB4bQrHhPagMc51n81bT7CcB8sQeuFhCVcz95jkcM4YSg7wiKixgxte78n4tCXq7UL9hKqs5FHWpj",
  "key41": "4gm5UEzzYNNSr3H91XX9Ws2UCCo1Qwc1Vh1UhqykKV66dA2DSvt39FLSKbpEKEqNJtCCXZ9jy8PX1TXLwDmP1qkZ",
  "key42": "2NwvNxSjVxvEHmtyqnJPojbN5ZzPE1tHzvXxMj2VC9oDmQ3yJ3TwJ84or8xzcvPzvvtNhFTA2g7t9ec7FrXscdYP",
  "key43": "UFSLo4A37jajNYRan36RcncTUzV4ogtif9Sbf2N7vwxHZTEE6Nk5YAXV3W7zEwo2ZbrX5qXpBcHzGr9cGufykU9",
  "key44": "J76YE97KFMgeJQ9c6Szg4ZqgJ9yHWSSfDQCUxENhuaHEAQ6Yvus9LpmRM72rGfCuLDjgtznYeqxF99dbMfLhJJ1",
  "key45": "sAb93MxzS4zbNtyxsKaEXsmZzA71bHyj3mCuEYdvPYeWDP4Q6xqWE14EArYvx7eVovfia6TDcftaBYvDn1o7ECf",
  "key46": "zotWqCDKkuS5Z7sDD3nwSMrzgTknh2DJQxSVmBGgpCEeEittXeJKbA5cZ516iTP8Gui9c9mBfbLA37TDqLdZWMC"
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
