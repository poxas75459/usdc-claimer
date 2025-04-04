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
    "3Ri5Cyc2hMaWf6h9dVyz7DCBsRyvugQiQ7TKEMzRkWDrziVL5jqYsWTSwop8qX4RUefwMbpHdiCRw45kpvzokqxT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xSkdfngMxUohuEFcpuqNd6tFy8hsuEyTbAy1WN2vmuva2xShe3JMqmiF1DPB4iYEGJ3F2JEsmVBDwCxS5Dp8kn4",
  "key1": "5J1EQ1pmSsv7k63QnqARhj2U2G4CirFDANRgtgrjQqfHshhAt4wQozVvDCThLQK49RzXpoCvEVQWHG8XyJkL1awF",
  "key2": "4krra4zJrBG3mrZDDQLHNWHEwGwEV7wy87omGaTJjJa2GSkaCkQxVTYANHET1mKddxALAzAyvm3ExBdysraS8hd",
  "key3": "2MLLVsjKi58V7eDWmGeiQYE9HeFDYEHYXuXSC2YBpMjKrjN43tveQAJTFmkB5GF64Pfhmo1tonjvLUH3QM2kLBF",
  "key4": "3w5tTuasQ5mFcb5a5eaJAAAnXDd9JKcCQ1wNV5LqAiS6az6ZNqEKULvWFxsU6hxH8Gub25TDadnKxtA9JKPpMQ95",
  "key5": "2cpNbVXrgYNSENv7ULAm1EYYu7xuoGSoexo6NMgSHpGYmUd6X4XFojVajBfgDKxjS8bFE2c2QMbm6MrgojCXhwbT",
  "key6": "2CPRf1hjZqfbWVrYEGTPWtA3SAaLXq3pGinfCcBia5BaJoDYAL2o1DdAdWLQFxJDAaaB83qb2oZTXDgnr6eaV8TX",
  "key7": "2mGzGUorhNoY5zRBEZUhyxjXQeQHZHDFuDy5Ng2Q6YieDCjuAKhZKmrQex21j5wo2GSeXnqz4fAnu12m2WpSDD3X",
  "key8": "Fft4rnTnWcVjPTbtGWQw8sYMuxkkUhjp98u5maD9khRCLj24BpjsKJmv3bB1EXaZHbKbbmpKpQt5EUAGbMUBcG2",
  "key9": "4STZYP9Pq8MzNhc2XhNfcPJUzQCL11CuP4LwiMT6hZD84jrxy7qRuFNYmnf7nVQGieciaCMRJFka1u2p1e3az1gs",
  "key10": "4XQxWZuw5wVS97s68SwEaA8rGeLyiTrZtUAL3Xnw7NaLKAMHzsm3sjFazJ6ANxwue1BydiCfGzeQ5skAdJHMqgmC",
  "key11": "4qLtrHpyfikGjDuemn4kSFhhBuqybcDDgEwNfd3WJd4WtoMt2hdEEfrXQBvHTUtez6puzNUDSWDCBoA6tpRu3rgt",
  "key12": "DSHDBFrrBz6ZkqwutEFPzkF74bgYqMjLviwYmCRJYnw4omZAXpVaHiQ4Q4ihcfWawhS6x6qqHdJexaNVXPKEcwX",
  "key13": "2edznZDoVBgfNm4A73AiTrtgHKz5YbH64AsVDTwqDMFjQwTxLTxpRvPPXrRqfm5vP7KofaXQPRKHBrcZCRnzg9WJ",
  "key14": "385AE7t5bTfKWe6GNXBG6x9uXGuJQcBNocrdmZARsaYN9W78EyAmfjAUHLFYcvRHvah6idEH7BQ6ySGgs9dZ9Bp9",
  "key15": "tgKZGcvU5i6rA3z87HZfJV3njcjGE3ubsCEXCb5taLCnhTU6CtgDHChreEx3nW6n6k6rThsJeFxrX7CQ3qDuqfW",
  "key16": "5qCYzXyzk3M7PrjahDsDXVAQnZBsrWXEjk2zettHfADx2v49KRuHvD9NT9zcT9jWj4rB1fQ3VoKT5xVL6YZ8NJ7Q",
  "key17": "G1kjwmYUkBKzW8J2Bk9BTR4z7D7Hnx9f4UpeCprVtPtuHuxbv68Tivm3JqyFEpUnVrFHcWhZYMLj3hiH72CEacJ",
  "key18": "5zP4jFr1saUnmYvZuXYsVbrVJtNB9eq1BobvJUByPWT335D1CWPMTL7RmRvbVezBF697eUaZp7wJvFTtJxiosA8A",
  "key19": "ofssuo1zcAKq22xepEixDkm8vY15fWZU6YZdNDtDGicvCs3JVz7P94RtSsAkzozgBbT6HpVvdMGSCkSGE2mtMii",
  "key20": "rkPSyEFnxVg41wcV51s2ymvWc9gdnRuCyFVAGvGJE1uNvNmx3tRqFEbahJMWJ9batsE2m6S4wsVfpp1Cbi3KaZU",
  "key21": "5QkCgFaAf44f8ePnecbb2zc2KtuZ3DPN8pXwbfDrTSAWFmgxpCR78v79Bht5vaGAbYk7fot7ZbMhzKpngVxxCjeh",
  "key22": "cNoGYuuMtgZCKjCqhemEQor8AvZ2wc5kt2hcmQ2qsk2FG2uSUYjLhdHYFUWGXHX6V9NvqvLhB9KPuGD9JovMa7c",
  "key23": "43AxD1B1o7dzxQkHR7Dsv6v8gndBu3mYf3ujxWtPQYAuz2zruVca6XE6AG6375RCnnveMcQbPsMVf2KKo3qwgjmW",
  "key24": "4yWhtsHbBYk1cC8V4jtYC5xKHLC2xFi4HCk1K1v3DfhXxBAtREnE41mABmiugsdhZPhLoJkesz8Y5UtQsyn1vBJD",
  "key25": "C5PUcRQp8svzQvGg7jV6nv7md8j5u6yG4PbCdkNA9jmRDg3Q3wCwUNaWrZfHbmCZU4HmsG3rBSCHe9WNFtABknQ",
  "key26": "5EBiFoYb9sjBk3gKY7d4QbPyzhK6SApjzqy6ujGvzjY5b8XnPkMKiteUjdFCrb2X5Q9fQQAXHEFqN6wuKMjLvo3q",
  "key27": "3qHxwFaTWtk2X64Mu4dotFzz3FokrZxfvsux7JVapBrKvWvP2ANADCN3uxRxgMJXcEqTyZNHyfazEYfoDMcBGzhX",
  "key28": "2U1ziTgvEn48nZX8nUaWWYrJmxLmUW39m91MCDLadXABPzz1VWoNnzWa5UYfJ9FfJUXq2GVv7Ao3hExPeTrAuEwh",
  "key29": "5atnXPgTJoFo1ochkFVp4fFVAeRHpkUoM9y5q4Wnoqw3mXztzk7UL1x1a5q1ttdBC1hTueJL8SZmXA2KSm19tXhP",
  "key30": "A4BqJyWbVcGGLeaK1sXQXVmqeP1b5SFVXqceaYYDPxtTuehkeyzAVfzAHxVaDgpRaV6GLN9sraJQ8wiw52qdepk",
  "key31": "5QbytYJTZ8WdQc5iHBCHzaxbmnRMxswJih3KxQwRXizk2RfYRgLaByLHoFhqwBZYpEriBbQLfLESWFmR45oLU4yr",
  "key32": "4jUZHrgeJqCfPw3zQFAbFzHondNgobgQLJTQKe8fxqSGXPhNjoqKtdNPjV2FtcvGoQdLatXGPEqwDaK6toywNQnF",
  "key33": "3bQutW2Fjj2CX1yvDoUCAqV1hNbDEkimgLEAfZgJfGK9SwjYWe8c4JT2CjC6SeWCU6wtb8NWxvLUQEvXCQBFte2G",
  "key34": "2QwHSWW7YipuU1ewz66GcN7Nw5LPzJAVA3UT8BDEqHVnE9Wdc8UP195iKhRNoRWYRUAgzQggpx3uQCFCc8TCQUgS",
  "key35": "5CD3Y3EcgFjnwhGwMG5AbZ2pMziR3WC6avF5PRj8FpL6h3F43cCdjA8pv4N3GxPZzPn1T2e9NPx2oLgRWHLf4zAn",
  "key36": "5e96NHNxnA4X1t8ZxKkqd7tv6xgqY2jenLtFnoB96htEjEEfexTbDq1qJ93xc9QW3YC1k4bqeqCsWSVRQcMZ8biX",
  "key37": "5DzVf6xe7mdJUa6Aag7RuMDdFgSUBgZN4KK2iZSDSA2GmxibBgsQXk6LhALuiZy566fLMyqLK6fDzQCKmupqF5Zi",
  "key38": "311NNfGpiwoqcsm7wLv7pmScVB3iyKyqLgoVhMy94DsWkEESypzPvWUWnvLMbUFAGDyyXrbLnAhCYXGH6424sAjs",
  "key39": "5sXVAvm8MKaLysiTUAyomRYP5uEo4gd1SGv4cqHxdM1JT7ZfS2ktwARW4ak3FxkLwofzx9kjJ7x6g233VZ5y9d6T",
  "key40": "4p8NG14nFq1yELDsjNbfS15UfctK5nzcSfLYpT8LB1xTmndi7GmVw65xHN3Zqev1Ronj8HHcxAHGebW6Q7QapDzz",
  "key41": "9PvVrmNyfdo7F9VU282pZF3MWdT4PrEDmnfnZdX5jJmufcDdDTgD1sNMxcB7dacLTS5zYzC1JFENK8t5QoUJ8gr",
  "key42": "2ZezLgMSYTTTW5f1LqtfQWCu8bC8c7MSrf7EJ9mRgzMHAVG948NVDg6W8voJYvfUu56EHzstYxrd6ZPXyTPrVSfR"
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
