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
    "4FRtYxv4VNqzEbyq2tJ4CA1ViuLhswoTSYyRfYzD3FiBVeomKcN1QLswg1swNwMSvekZD1NkXNHVeuAj8oTnrrxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aAxJb3mKNqRjHVYzYmeq44WvR3vGRNKWQqUFP7P71qTKWWWc1N8MJHW8TnmUEe8AKdMtMDn3ffpkjvSwdwnQ9CC",
  "key1": "3DsmFaUJFxJNWe3pceiHZVdR4KmFNjiGTfZDTcikpuk1oaZ6wLynCG7ukb3AYPt4VNv4zFvpMPaL1RqWwPY6M1mY",
  "key2": "4uwMVLcvVw9k12Yu4bk8ToAUvE6qVDEroBsb6sRz38YY3Bjq6vHLaneHqAkGRv7aVrdTUwjnkT1gDyEddR9JkVsy",
  "key3": "4KDy9Yg3ZRws8jfLq3sUFMhUhqJc6hZFzP4jH4rHuzJFNHXo3mfdgGoZJZxsUAUHUFAewd6dbxiH9TMUawvBpiDh",
  "key4": "4g9rETze65GXEHMddrxDuCb2T9kxmvEF58cdxkLvi9nWWRBKXWE1mHnufjgf7jtEckySsw4EwnKRPwUF6aV9idVr",
  "key5": "3f6NeERAynwqvHh9vUFRnYTi1jf3t93vVb8ApTEGS1th396mPBMnNDKEEhFJZe3rPFJ6o2RvyGrK8ZNjwTFKApfc",
  "key6": "3qEmN4cfVGjjRT5q54MANSMLctBZrYVyY8BJ9gjDWnhFrVDqAUVjTfQF7gj6vqKfPzxoWmrHwA8iF43JAaEkjXsZ",
  "key7": "3MZGZUSLg9pAWBgUrifBDsWt7eXpDG35g6dCNwZD8iev5pSE3Hdm5vQJtjiaGPiGetDree38i56vxDfffhkSMiUg",
  "key8": "3DQyPn4Yz6FEeQEufnpYysmPpRLxzxJNpb9brbWLyXRSiPCDMX7ebXfnFNZycCwXzHTG3D8cD8yg5N1RVrbifAUv",
  "key9": "jdjJJMJQ1N5NLMUSVHDdgHERDY1EvVtwt6zrKUJvGRe4huqvDDY9Mgwk74budk7TCcvUQeV8jeK85t3wLt7xtvt",
  "key10": "4CEhZEosvuispqexrfjcBM4csyxA6w1MpaCWEp7YRWhLikhUS3XaWw9qqTNmgaHP7hv7n6hvBFRoiMxunYgvG5TR",
  "key11": "2XmQvrBqaRNcFgyK6TLZYYU5sZA9CBRDE8CajT9PXUCgkydDTZcKFaKvfBWm1N57YeK6oh1eGsceyobs3djW6taE",
  "key12": "2SSP4oP5Ctc5raNAfgbG9Gb78i2dYuJBwLx4EGxZLtozCccCWBn3bfvhSXGyD9XE2MiUEwUh3SBdyUdDvypCWWcS",
  "key13": "3kTGTcFHayc28bbJBWa7X5fAZCRLx8XdgRKVtuHaJFn9d7eekp4CGMp4H43J7a9WvFA332DNptVALbbYWCNy6Zt5",
  "key14": "2izXxXWPrCfyNZMkToobbcq3Y6gePt4xcjJPiT5RWBTmxEo6CynRHaEh6LxvkhGtywwPjUfMTWR7KnzrZDHiAjC9",
  "key15": "q85z7gPZQWPRepgiXGPsz2uUQ33FbedGePPqSAtZXZQKohjswAKxKJnV3eB9KmdoxGadWvfeBue3YNUBCxB877g",
  "key16": "5pEEgKyrF8cX28DSZHSDhe3fgmmYZx2kGYxgLqr341nFCSyeAoDnKSoVM3BKrZ9SnWHo2XfYpxDf4iaYtEpF5LXT",
  "key17": "44UrBnf5MNfBDFjYdB3gKS4hzcyuGVZuvnxW3sVRY5yVyC7yk9T8pEsUQjGumQwEtNPJDXSLHJ18PEg7H2e5t6E4",
  "key18": "65M3hheCidapxRVDNtYSa2YEScvZSTrC3fDC1eRWQ6jnxXrfuLg4xamtsoN6h8AgcgTVDEREzcvFhyCE7ng6Wcdu",
  "key19": "2iZp3o83kQqxt9oTyYjdgUjEAGbDtg6ixaA9xVfgt5FgxN5Fby4koqHZDwKDWArUyHqfJvo4g7xBx6CxApWmDfcp",
  "key20": "5tSeyS6YJwpMQ7MWsWYu1AHczKu93RJPUBAnbxSJMdd1zDjLMCDDgWZmRnSgKo2gP2utMNaVtXwNcWxWBfBdC54B",
  "key21": "2BAtS48yCiUY4zkcccS7MXE5Q1s2P6rKWvCDZgZYVK88hYHaWKJMUzSbpx6u2T2wMtYzHj8q3vJJKBCT3p19jxYc",
  "key22": "wBHGfRBCs5StpvBkyPEFY4mfqJX8CfYkfMnQy4tb9CTnXSSrtAsocxzzgbysyV5HCW7bcQzGXQTc1wBwi5gac2y",
  "key23": "3BqrSB2RtXmZD1GHunEcaRoYwU6Tord6EvcujFDQDPE7v1KXkAeWtC5JfKgdBoZQQB5uDFoF9TKpULMAjod6Ka4W",
  "key24": "5QGXQv1GvUh9h8p8jWk6Kh1HSZYfr7YKhhgF51BJjpBBSYosaXtDaXNkrZ1r8Y5jFZy6SRd7dj1tbnpQYJLuPkMw",
  "key25": "38cvrfCXaMSUzA1PMe1LVL3MNnQCZqEvC6EXJA7QtjRwxDyGA4fwKqZ8dorhj8n3Ky7sGFAzkHm3WAMe7AGAy9Zg",
  "key26": "4gBaZJT5ZXYjmBY1p1racBwu9mh7vPBfwehooB6VvYMFtfti8uixh9BPHEHa3jyYGDxQDgTSYk1u5MsLbrvwkWJF",
  "key27": "3fdotvCWyxx56wQN5u2rPxZEvSm2XqkStEwgbVVNapeYntPN7MSrbiX7eyyCZ4YkbRM56D1YBvNV23ifDUSZn6Tn",
  "key28": "4LodPFY6PxfMpp6gH4q56tySqRatJT5ppnCXwd82zYNaJBUqB2S2e5NcGTaGW2eNopJD5PhyxdmXZyBc4oMLzuut",
  "key29": "3pTbzBVWUhKL8G1P1hfRxVFWxxdpkRA6pNUoVT9kSqWuKs1KJuANGA5zpCvtDgU7M362kPUyKk5TgUUtGpzkYUy",
  "key30": "5h1si7BQDbN9JfMcZnydVeW66YcJ75fWgwXpHLqEnRRVEB1G9kWXgWmTgM1kkoDqghQHVHkepCZZQEeuL7qBdDzM",
  "key31": "5h9rnduwWkuFDpz1tjH6jyMxiK4JTpswVKaPoydZkae43gTDrFaerGYWqmTmtJb7Go1BLMzf2bkdgP722U2ARAp7",
  "key32": "FciDcjnqqfpn45L1uhoPsAQmjrdZNzqJkEgEjCMVUs5Ri1yuiYC2s7D2j4FHBKD1oiNpuzbaLsAuGS83wgExqWJ",
  "key33": "3Ef2fbn6JJ18rp97sXRiVGmcTqkuGRKbwBMAbvF8TN8Jwh4pBo9xS5ChPProW4xmYQPhDCTNSPmHxbPzNgT71ZAR",
  "key34": "2CBzQt5Tv72YpkESVxLgR5rMW251jtsXGSiceL9r9gkTmPk4o9JC1m7WbHr4MZLbbGPtxDEe3WFVvPpJjG1xiPaA",
  "key35": "zoxLuWVtQUK57xDCQdqgPNVM1w1z4PchKj4xsgx57sAomGNF5i1E9HpKWWtdUQb8EdpffjsSYN5qL6SbVX6c6RN",
  "key36": "3vdWonS6rLUpGLxgZhyt9gavgJC61EGSx6xRnZqL9Nd7XPWSEturZTv3FreuL65AUzxmDhmgq9TtZs6FB8SoXWjo",
  "key37": "5WsoFcqdkHQ3kSk3YpLKLc3Q9BmD2rVDynJCX1ERCpQD2Pqa2AqMBfjjz8XjwWrMt45gAJxzJ3t4gFxkCRMCtbaJ",
  "key38": "3xbo6qFVUP45BioVQrxcS7eybJnS5BxLu7P9oLPmmd8SXKbn7vDsy4WjXyN8gpdRAsrY29g6ak6ZH95myin1BHs2",
  "key39": "etGJMbtH9QQvSqmiTjNRpoZVSMVJSNLTW7Yq3Q4skNKTErkWz8ajip9nczw1GPgBsozqTZ6oSjYqXa53ae1GqdF",
  "key40": "3z62pRH6267dMxD7kdHUfpqqP1HgdqH4pneAXnbFTJpsic965v5drJhEMJoGchosBLW9qoCrUGLENvtEaWHDcQTn",
  "key41": "2pNq1qQHsyTHNiSUfcnsAP7SP27PUdayjoDanngCHrBjx7gBvQbBuyWcWxEhPsL5gzqHEoNyUtJeGQ563fGT9PaY",
  "key42": "Bfs5SBPtPCB3kt2dR3zCRGqCv2EdP3CAxaaRs2pFBpsZbCn3EkiLpXR9cWTR274m3uz5atM8DuZfwanyArT96ak",
  "key43": "3gcVQdWzXf7s4irbSki89TcSn17GZWTwhpJvFpP58MCniqrWQ3tyT2aNKZs5jN87WrD3DWUdBZZH3k2hc469WQxU",
  "key44": "aH8wvj1tUQdxfpsy4XNUCWERPrsNBM7B2GWoPUd8q7pu5Ayyb11NTWHaD58adRroX9RkJ4wqpTNUH1F5Amq3sKR",
  "key45": "2VtHRGv2FQmhUM8TT7atcm2s3WZMjY8oaA3sy55aRessdzJTWbWxvF5nn2r7Q3xp3QG9iSD2vDEB4BEXCGvqs7Nw",
  "key46": "3PwTvSKUFBEAVwj7d5XNUwaa7g1873SZFiE3djm2AFJvNWB9rwAWE3zaaAyh5cmQidVGP6cUdEH4U5vwX7qjKqsW"
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
