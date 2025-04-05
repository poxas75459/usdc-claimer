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
    "euYWXvRfTLt3SEyQiVVAb6eaQY42gPuaj7trHTuns5QMux3ZH6VJKYjqcGk4PncjoPs7EuSpdW62W8fKF9tNfaP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57FQP5vs2iE6gthku5GQBsoqk9WaV8g1S3y8pW4H8KYJ9i13ahDQBmtu2RpFFwyTXZfb5L97pG7hVBgZZCbBf7pr",
  "key1": "4rkoTnU4csiwE5KohJ9BtfpmHVUogqhkx3x8KvnmuvMBDAzgPsuNhCpUZ4St9nGJPF9PbDRHFsScYVBV3fsfxvj",
  "key2": "pdqskgGCSZpdzfYd6gonRTALKvb5f98uGyyZJNxqV5sHUAw4Q2deAXEAHeYG5QB8gVdjoMP5EYxxEe1AbwDWyp3",
  "key3": "5RQiAgVTEwenYjRZ6qKrQGRCkjw7ZDGXp5xmodTRY6W6jbvHvz6B3JUeYBZ3CB7cLjUHenB4iSyaqhwc7CgZL5Gr",
  "key4": "4s6yJFjGp2L2DQQYFPE2VPtFDUYUUonxkXXL6sV6TymDJcPWHmRJ5QZGDhi9T9cXnnH92ZuUHLHSpLQptCpfoX4H",
  "key5": "2F3DEF14izmbJS7ZkGUM84YL13K7VcK1okhhHeujpV6vP8DoK4mAGy4gVgnEJNHdkQtjG4e8tiqzULQqcH6enodx",
  "key6": "4NFhTkZJWunxvzBnS9tRrdEhdk9eWenRC16nVhZKsLYA4XApiAYgZeQScM6KCWq4gDHpmsiCjnU2a3sJxmLys7mo",
  "key7": "3YQtJ3oVbv6XbmZCdRmkRmLxB5T8qb5LRD5hNCYfXiptEuNyfTJDgHn9wdr7GVbBWsopNvEg37RNupFkpk73YrnL",
  "key8": "28JTZG2RoedUB6wgrM48sxUzEMYb4Fwzk851P7UowoxjQ2Y1ZQntLJaXusnSU9qnyUQVLDATxzechLxgGEzCTb9D",
  "key9": "47rUTC7A8r6pQ6z3pJNPKERorEXvMn4EWwBXMWBYcoTBgyPBWE4LfeEuBxBEHDvHeJHvunv5N5GXSSyo3njJWDLv",
  "key10": "2tsYxn116CsoRZDGF2SNF9JEzzKmSymcGcLhUDsSbWubzibg1HgHQbsgoMsSnsNnwSsQB9fCA34UyG7VjNNjTsYd",
  "key11": "ahzvWNT5MdyrrMnttJAki8SF9GSn4XKG4QWfxTBCiTa7Fojxry3rUvLXHB5uMMKTtBNzDG36hffmy6fW5Xd7fhK",
  "key12": "3dm7pg5ZjreNbt3N9fHtev3G9zvLGxzwGNiHQi6HLYi5CeNUr6KBoiTRoDDKvaaTBWfgd12z2v6U3p9d2e1kCBD8",
  "key13": "67RDiv4ZN1ERHFNpkQt73WrTvnRgwnmfXNsSZQFRKqSBRqM2WTKV8D8aPDJDEWtHnHVx3Fbna3ec8LaCCMQbt8e3",
  "key14": "2bWWU91CmaJAqRZ8wn66551SW8ot4gwMZKkzWGYQPbEjdaHcvcyN1wNj8v4XxEmJfLtY4meGeUsE9dYETjDbn9dy",
  "key15": "4tqXZ8tvFDg9eSgwWW58cnV1F4XBZfQPeqqUDPeiZy8uoR5drDX95Jvzb5zZXtZybtYGV3VyStc9izZEVPrH3GhH",
  "key16": "2PgZtayxKMfNKiGbTZG9spA9ESGKLrPzvPUCaHvqeBXx1iK54ka9UJhHX4Thfvtn2vP9Z7HR3TXcbFEkTU4kYf4T",
  "key17": "2yPnEfSEayngsuA2KxTQxSuGkfEGKX2S86z9GpugXAgYiuSoqXwrCDpaZEf71MH9xEgKwPehP3kv2kHFVMd5J8G2",
  "key18": "5yRUbbh3rZAzqeWJYoU1EFVYNR2Mb3oD1FDeZVsZLzt2pbjRZK81NpW84EMdGNiGosAvKENUN18uJc7ugJrPDixD",
  "key19": "2ETsmTqwkbWKAanRGboT232gQHLP4ir7EKQmTqwXVBuAdVW5jec14Tw3KqoAxpLnVhBP929ivhpVsUAdnJ3G1212",
  "key20": "3gSNnwJSt2fUycvcMzpZyhwopjMt4y5Ax2viyzMHRN9P9ocQmxRLji5sWtbVntwqhhWEzG3S5kUuESCYWZzdEyAh",
  "key21": "2H6gWQVs9UmMLJNRqWky8gVNDjkkVckhhbZx6SUnw7uV4S5j8ADxzuD7D4UWM2B9w4Fk1Yq3s7zYQ1NBH9YpVdgD",
  "key22": "3b1p2s512intPrJj6vvHZoKH9hq8WodXGCGNMCtA4YyVJgUzs3gQQHG3VXsSmi2vaAcAE5nrj545aKbwgzhVS7u9",
  "key23": "3y5jZPBh6EVZZqMbKLGubJhJx9massv1ab7SmGKty4yiLKD2gdEq4xzz3iBJYy5LFqZeFoHV9V3gePKVuHuUsaAF",
  "key24": "xYgXeMSFk1dQ6AGmc2QQ3H2dYAkaQQSGbSQiMGSxdUGjqcPv42v3RS7b3NhWa16zLUXpqqNZRYt2Twd3EPU2DCa",
  "key25": "JCuxd9v5qg78KqnXvY1tQDMVku5kmxnbst3bVzrpv1eqwnbfwAXQggwLZSYMZsQm9kuVhWee4PCC9waEpab8dJd",
  "key26": "5Lv7TEkPasFgPeKshL49ZCoisTTUPz8XDhwDTdpaBuGtqQWGkXPmachvUFq3uxhYakNNwDLxLavEPQEwNoagdRb4",
  "key27": "P3oaoau9PvuWkXM9mEgqfcS3otniv6YQSj71UDkrQAjpAojzabNJWFztLaPy96MsfjxkK8NuUZyvoyfPhY6AJLM",
  "key28": "2g62Jsd8MonQ7VM2QaZr3Z7rtWravhvaaDBWmpzbrPZrL6N8LtVPhNiaPb4zhycZ7vwh1uZYcgD7KQpfpL6DvA22",
  "key29": "5bSWj9uQJ4HJ4F69wQhL3BZXSXsrQReF8VWpRQFm9Zho78nCXKZJ8sRJSdd4DBudzjELV8e1kx7McXJQnCKSbAKC",
  "key30": "5TxXt5VomDECYGLwbVJypDnLHBnHNQtT6FLQ6xvvxopivMcvow4PPu77ZGJiFf9Yw4mSm8DNog7R2coaMLtLizD2",
  "key31": "t4NGGq15nTeKQurJ37v93BUef8cuptrpZbzitDGJuu6VEqWTah7WD3zeoKGhCmTELrn8pBaKYB6DhSQRhVfkdWS",
  "key32": "5rGZKBTyadWYnz52RBytwRu8vvh1UTVTQFU7grksi2MxuCFon3a1Q1U7TzU6y8PyJiRj55UNFRrtixc9Qe8RzEeF",
  "key33": "3zktYuuVvZZFJUFMxKZod9sRPVjNT8HSkP6CAK77KGcNDaNozg7bBVGqxswgoR8Bk6UUZMSt9TK51YCTkCbiGE8k",
  "key34": "2SAZMMZJPHaG74w2PD7GXHAKkLs23TzdVuoZALYoG2CvDpJfRFfF1TaMDusY643uvF3GSDuykk82NBE4N7PLYeyf",
  "key35": "3n3sPQaESmWSu6ZosWu29zrrFyP2YG1YcMHAAq69A3V8HMVFANxW4iNmpABuNaLLpevz86AJNqb6umxvrjPr18qg",
  "key36": "64n1qB9vB5VB4Wy4WFkF4JFU2Ucj4MnAuDpUAvHUhi4xrNDCoMUzHgEQ4wrJ12uTvFuDzD7HrujixMK468RUg45B",
  "key37": "Cw56afNhSKoPP17fqqRpsTkLNSqmkQEHnL22Ur149CPxYpbNi8juhx9dvwmb1Gjx72P5nWmowUGvsDh4fKhdRfE",
  "key38": "o9wSHumNyYhtHjX2jEEHk2cK4cBAYRunqHuTnxk5wQ7XbYcUYpUGiGKnPoincdVnddc4N5gVhGtzSuMx1tBTUaL",
  "key39": "o3WoNFnGJbynSpgvHXDw2RwqxcLuQMGQ7VxDFBH3N68adzMjDhLFuNo2DAjRrUxymwnud6yMwz76t5VFyUpXbpk",
  "key40": "2QwubEBjJ1aWrQuHqgsE3TyT2Uxqc2cBwaws1LRYDGtsJJwcCJ4EocCb5pHK4MmWATHVt8gFv4JXNZsLYGJaRUrX",
  "key41": "23c8B5agZLn5gGq7oXs3QinYPDhDBdyJcAfLuMxDnjTtgSa2bbMHEDtx1jRiw1Kp9Z5mQrQUtkNa99yzdDNvpYix",
  "key42": "4y1kpY9SnjK4yZdZGZG6ZCEAbotS6CTaYf5oddtLk89PnHMLhvc78xwApM1J6DRs9notNYDEQgexUAY8o8fhygqy",
  "key43": "2KsuKLRAVyo2Zt6KGAXyVzx4weWHx2U3xFxSZDKq8dY6Lr5kSuzfpEhGgvaJNH5kYBQbLw3jBnXN1t26VaH1NDcW",
  "key44": "3p3SbqoF53CGouvQdASDcHMWZBf2xxS7bTGeBUZy43gQnHFYZr6QznHuqajuVFQ7gcNXEKRKJWChLG21BU7rSLiP",
  "key45": "2zBKHfCuSDCParTrqCbjbZpjBzLgK72tcPXPLPKQ26pRN7JAxnQNHs5rasMJQCmmxzgC2oVD8HED2D4tSgbf4gDG",
  "key46": "5q3h7DgFrCLYUBEtKR32P9yp89mn2Y2AGvXqzDd6YfL6hn1iwm5D8xGn7zcARWbHhBuhMXeuBMoqG2ZiGt1GWsaB",
  "key47": "3J2Rs4beStdQ8sEF495wfJsaUgQkJxLK99xAL5XRAbEH185AMNXvgAwBKP6zcSJDY5CbtL4SX4a2t1KB4CrDo2gc",
  "key48": "36MW8YspmrmUGbhj8eGhHAUrvvUohKaFzKP8jKQfdZY8HwTyoBp8U5L9Fg4FPuwqi37S6xF7b7hE6BvP13pRkx9t",
  "key49": "49nKTc1D4vBxJyGgiti4BdsNbEMzD4mfuD6NXTEoubYqQ2LnRCnfRfXDNTSh1HXeryqfaK3wLiEThv5FR74qgvD2"
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
