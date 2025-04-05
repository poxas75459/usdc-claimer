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
    "4UogEf2AcvkRnt4knwBSnKLu1uFLNHCFVb4q5DYBYhRCDbjR7MecuH79QCututkzxF7DKcw8jgrtrat1XErjrHRK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SSA5deNTMcVhFbUr1JMjRHqUGD5yi4HtjBCGwDnRTtfCh7bitYqJ3RgUoLgKv5cgJTjg1Rr9DNZpLcifHGEQkdd",
  "key1": "2iBMedbpKgCyCjaTi7iFF84NkgXzTm9igtRXmktNBNynxcAGPEKxQCpwjmGXj5FAZSgu9wVAN86hxz2ZaZqU31we",
  "key2": "32bpq6VojUiGEEcaK2kaBnrNamChZbSao4ehAUr9Rh7S7w4ChSa3Y6xK5y3ewc1SJWQok3prB17tiL8yy3RpTict",
  "key3": "4rgsjLTimDXpJCbKmjoykYky8KUAwYFvm99xND8BY27QPetE3GNUL5WQZaBMWiBoLZq2ZcMRrVPi9CyR9XWa6GXQ",
  "key4": "2viwN2jc4vw7pXERepSuLsohQS4w7Yx4fwUFEQpNbbR8VxcowVqJ4uXLFNpVMoi4QkCpwZvg8eWGxjFbU84eCYQ1",
  "key5": "5birDUs9hb4XpVLhSmbm43CZKPPiLEfmxm6XiUgjEPHnTnDTosW2hr8pajQs817nrxqwNP3g9K9fttEMnMmxXKXp",
  "key6": "2ECBn6pXhrxFr5Nkf76mKGDoPmuF31isTZfwQshPyV3bPwuBQWuodyFW4scfHpXRHxpZ6DNBj3YZtZxiuuZdT5Y4",
  "key7": "x7Wc5t4zHsp3njmbRfN6Zv28njDm8pSjk95Q1hXkfLBBNKRCg8U1McfcJbkW559AJAkfMnBMJiGSqMt8F6ZqZPe",
  "key8": "2YhNH7yUiUYqXRyFDKYVbbTHdvNagqWvAtntcs4x3G4NaJPForstfsEUNX3uJsGe97kuGiceYM6i4XdiEB41SuzY",
  "key9": "VUb5WkdvWDTf8Hskoq6waFssG8NZ64D3SLRXkMjuCv17JNFMfWi1MRYUXaDHmRNvxywvhMGQ5Mcgmp2f9dY4Fu1",
  "key10": "2yYf5KWvdttNdGwTca8qD5gsmgF7hzHYtWLyeqp4uixQfhnamiujym8fRTusWu5KB6LsJwZbMbBUFvvuCfsbVb9n",
  "key11": "zNQDUdKg853BiGrVXK7XWd3uTzB18faZNCyhhZN8BsMimqAjtDGLKnkeF9RmCSbZoFLE2NDtdTws9aBoSgfBeWU",
  "key12": "3bPvtZk2by6r3oJjVPNqj5see2AhXT5LNMKpmSg6JszitL4roLfgUUzr2TKb5a2sXQRgSPwuVKVs1zctrjbwinm3",
  "key13": "5AmgWns9ywELVyuCPZDfxUN3wY47awEy5NRCXDQYDRBfWRq63guyr1UZZCZeC9zYDkQ376o8qASWR1vCJF3L3HS9",
  "key14": "5rmvcqE4Qk4PbuRFpi1pgn3TgmE9Zh1xJBKiP5BovwS4SJJc5VzrTr6FppjsFM7FT6xoJF8aWz5VGcDjfdXGMJmr",
  "key15": "5xNBDksgvLPxc1E4DsfXUCWZaCakxN8xG3hjX1LLzgzJhfDbM1wy3Ekcw3fxPmF6AtTvSp3fWuJ9AsjDARBVbFRK",
  "key16": "5Q3HANJhRsUdUU9wmuJuigQgEfFVwev1viqkYhobQCTVhVpZGE7QD7e8RChBFGvvsFEfkbTvvzBzjHiwAfL33ck9",
  "key17": "pyU1q86UnsEdFREzgnG7ZvLxK58p2qErL71CQyStdE8Lo4NLqg5ypRW1nz8Lg1PDCBJ4aZc7yiLesQCqkpqojNC",
  "key18": "3Ho2hrUuoNhP8hUBbq73bQwe4Wq2ZcqzCT4TgRZBfbcr8E55d5aMM4e4td5P1sT7oo6APsBss9uvxSBmbp2Hj5HQ",
  "key19": "3sTPdnWAxGKzRS4Bm35vuGo2VdDhQGVfTa7sVbAwxCA7UBMLbZKNJhTDjtw6LdTdZuSEMTxuFPnffCbCwwnyUaYY",
  "key20": "TJZ3P1WjbjatZvJnE8TPBmRGjeNdinTzmBzFYmcX4tb7vAnvC4MXZfgwA1kLL1KT85SkCWf187mGdBH6saoZn62",
  "key21": "3K8KJETZzce5uPnzaRbgsSzmfC9LYzJmBWB3gtLV9S9dijETW1jss4p7JNrWJaxzrwJJecESvtCioNF63Dm6fRTp",
  "key22": "2zLuRP39n4CFtRsuRbLx7K52LEGLCeEbvgZLa6Ke4gyAFn7Um3Fu9E7kM3HmAyeKPnd2wZZZr1VHcdZNPNFoXVwq",
  "key23": "4cVb4DvZygAP43SuPU2Wymi913GwiKjViy9mbjXNtuib5qPB3W9c7wgTcSXvqd2oFvd54LLi9XNsih6z4ktTYScW",
  "key24": "3mEJNe8aC2DfNHRawMVwJGA3f127hqsxqsL8NiEYSjePqwPm2LyH3hrUBEQCR71oHz6bjYsG8iZ8fQBscTHp8nsU",
  "key25": "f9UTtDnsX1TZwpruBYB5oz2NqZv23ui7t5cwzpK9aHLWYhsAZA7dwyhs6vcGNb8252jvHXFrBz8BMqyLCmiDYhU",
  "key26": "3NpXMa7r8ctiyBpTadzv2YoFYCaNYKaLjt64b3ELU1XSsFee26NhAQJ8q2VPtjevucHuU6cmXZPaiYpZqdkTYMEp",
  "key27": "33TDvixtofYqQSxA2ZNu5WKw9awnU4TJGAzMfSCkAvFLsPSjzzGzSGCCC5e3qtUKFdxRjJNpiE71kEFA1RmT2uPP",
  "key28": "5Vqx1KErLQJdZfUfVbA6PrAMYNnW9MLVykwXV5JwbqVQtQYSWmC7gXRX6H2Hq8hqeY9w3b3pqP4sJ3unH5NhmqHb",
  "key29": "3R7nfNB7EdE9Pw6qr5BjTu1BgpSwVaWCGGKNYFMGVb2Ad9DSScDi6gyWBwnYDqXFr9AKBQp5dtwd4UUAncy96Ezu",
  "key30": "2w1BQJFTDHPacajAjbD33nEbHYc2KLZwct5Tpxib3pGcvpMsYyeWzGcLhsWMh8JjLm8kt1vYD1HZXgHMh5remNkr",
  "key31": "45AfSmzPPuCVKnmyWsTsSTTYeGdHq3cthU9CfZmUGqgJMXZaCG6Vc1V2rztJT1jQnWiiwmjM6nKYnsnDr74NfTmj",
  "key32": "yxPG6WanSKvyHTQqwPSJXZk5eoKUa7WpzGa8zEsKwxEsudP1JNuFFZUMaTjji67EocS6jjg24kpFPdP7HjtJAGW",
  "key33": "4rkBvjzHmgazu5L3nL9pLabh8RnugogLFuBMBTfdrx65WJZfYXFLvFW6rwE2367vHaoe9AUxP77H1drasgPdoVg7",
  "key34": "56qTRAX5i2zHg8pZ3tbSb1qbX8arAmgDkipFAFqgb2ZfGkuSAoTrcNL3G5SGBjEMT3jTkyKyZpydNd5cidKwnYm3",
  "key35": "4mP6QhDKCmUDwmCoyNnZNyf3Dwabv3TYve576P9n3GGKKce7DXfKVozMuD6XEPnCq9iAj3iJ3MDwFdrx7bBH8YUU",
  "key36": "4GsMEtJh9Xmm1V7NQgCFjQtGxrkZozbRYTwz59zP2tXEg5vzJQZoqXz8cmriXDCf5dzSg9ogf51P4YWUpMtqhYwY",
  "key37": "5zvhdbe8YvXJaCnjDX6A92zAWnMLaZffnQhumFGDkAEqw3umJtZgD2UYCwRtox2t5ovbkRKDMEwFD16qDwgWNNWx",
  "key38": "3okYHeUQgsZ8v4hteuWtoBwdZjqxdWhcy5Wf8TYQ9gkP9baEG1z3z2v7d3bhiZaShXYS57HQUzsQjjzASE9HVFFY",
  "key39": "5jHSvemwYynsNLYezeNXu8xEfnzwtfEgZEMWUVVCA4SjJVMDYKmc5md6v9rjFDLsvRoBCbtLuhHdDMfG4MTdMKk2",
  "key40": "5As6ZE25EDzpt1UGqpY2iCpo1tch84uKKA6afBMj9yxyoNbLc47QGA7mtyk4SAwtQeH5BTCKx6wUtiYCi9iHFnNZ",
  "key41": "1izbot4uradMGAesxL6YCByUFDKyekU35EV9uzkpkKA6N5HnQZZPedpguf6WmegyQ6RF1CkN2RbxpHy119k9cpQ",
  "key42": "5L24e9oDGJH3xom5KHjSqjWsDQMXu5KibXQ4Du3mtN77wqUSs9hTvmDaWLGRkspb1jPjmoxX6n48giiVYyc56KTc",
  "key43": "3xLiAvxtaXYbgcTngm2nJ4j4G74SuHtAVRvAt76vTVRv5du2jdB7vUWBg4Aw6zpcxKY5pTUQZReLgWkZX6BUygNi",
  "key44": "2M168HtoxGwG8mNL3R5wc1gZmxSMZXC251xpdBEHn14h7G6RF3u2hjeniov82WS8MLSQ154S2jUZ5JDe5BcKqnpW",
  "key45": "38bgssTNgziro3ExwTdrjDoGuXAJcJDtqshC8R36Ks6rBEjYhGNW2eY2Mm9ZgWQXLWbFzPf22xzvAS3JWFWTvhCd"
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
