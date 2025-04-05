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
    "3UEKTnTaFFM9qYeqeXKFjPLDC3rZeK5gpvvmVPS7rqUBxUpgNn8rPMrvEHjynpDyZR4kD8TegfAnpBTv38WQxh3f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PR1adsEXTnt2J5LvbTgNhUeLGteaPHQYfDg5oT3stkf1HtPXWskqAWeHkxBoecZDX1zMbjGemmpeTBVFh3VSSfW",
  "key1": "5WnTU2TAZci5ZZp2A8NFMsFGyRhLyADA36tA5xT8TGFTxA79QjC2KPRUkRmzzJ9qfFsK3rhNBsyCEMhMEqStZWPq",
  "key2": "3R67vrwjUNm7Q6oLbYkLJuwCfHadBz9eZm1VL1sKyxDczSuHtLhywDf1Ci1VQhGAkiSHzq9yoafoZtW2pa9RQEEo",
  "key3": "2QTsu7uVdqciWmFT4tD6oiycUxxmXGRkQCbsYQCapcTLuY1NYck1B6dVe5gRcae41GJuw6SjMcXeFrvqwAg5gjz6",
  "key4": "3kLih7QcmWB35dg7fm28mXLy1Ai5hbnp5aCfqRTaYbtg5yMjf7aEEVz8EGmJ7jQNQTRbUW8GWMA9z21JvL6wynxE",
  "key5": "4J9B1fNxoeyeNbE1UcXJ9gnyexEWZd5VuM8rsfW5cqZv4684aoKkpV6cNGqQfGM666fKJHemrhvoh5YBp2TDwepK",
  "key6": "22Sdv7AYwnWMfKgbBDfoRVeNhCXpFFgypF8WSJawbZkpq2R3JoYcybo5UkpJUa1UEeYaJ7NWk6KbzsaErgib4spY",
  "key7": "4HxAnh7yGiRmLx2t7i4NEfsF2h7mqqCCfNkVtTFz8BSbjjoWF22qMKbNq3uWQ31nRFK6osocxGUQ7t4Ydg4Pxqn3",
  "key8": "2KMnBAmMq1G1h8TnDv8CkunxSMnMRGurdFMj2yjVBKkbk5YzV7TDg1wG6pZb4xxbC2qgvjUzn2ik6UyGKWvubbqt",
  "key9": "3MRTGp7N2xungqBvFQsJqFD8jm1mQEtsdvGFh72LVG3yAzKiwjbkcGcG59iDXjuFHBwgBfN6SxLRNrJN9JLaXRbc",
  "key10": "2GNpTZBE2JbRbz6AUZWJxRidq1HybLqANCSTA5Maa42HeRcUXGBrVyrpK8HJJgna85cKNQSTE6wk6aAE34B3SsW8",
  "key11": "49vwrKvn79NMt43UGXgUWR9gU4CX7BhrN4yPMK6m82PW4BUYQJm2PbjJ3B5nsneRGyCUKVzZRT19n44LzposhUYk",
  "key12": "ct5CrM9r86PaBtitseeq8EWjZF9CAjJTjnQyDqe1uHURfYP4hfSAVTsjn1f7bAtMm1eCoStZCLeDCS2b8H39cZR",
  "key13": "66NpGrb3WYNovgAqGrnmZ99PN8niMVu73dSjJXRhouFGkB96a9Kcwhv3jbm5qXNUwHijWHG1UdF1gUZiz6MwjHoe",
  "key14": "4vsY4w4Zm6MQ8kQqY6ptRDeyFwdLESSQuyqBowSyKV2BegD15pKG64aZxpYjtkaYGoW4Yr5bzWqZjvJjrchRMPfC",
  "key15": "Pk4GReM9wBN9b6pgUSLWR29qCDXutBWcqD7NC7e254YtpvUiAdaQUhTnNX35BVZeFzBLLFcowQTF4b2rM7EDHQN",
  "key16": "2vVUhYj4dPTrQCw9bsM8iVRCW4bGZLUmhFYhTF4UBuvLU2XpNaNuLPhbq8BAANHQZfcGCvQuFY5MRBVUdTXFAe2e",
  "key17": "58QK8Eavxihs4AvPW2U929YMqwJDijwv3LUyvP3EyenVDmt632iRC8JcehYChnZTLTXe8AcJkZQA6nLxqtNpaE8k",
  "key18": "vgTV6AYQoKkosep5tXbfjNEUCe4o5udt9bbcSfDmU7zBYKZpyfapjvmGqLKNW1HoxDnWics8LhbNDJkG7B7LPpF",
  "key19": "5CGFp6vSNjZFHgmSEyWVYU5TJbq5kuHPPuhxfwLhVttNjrovt5BV8HyAN5n1eLiXQwJ3XpJNkuef9AUeVVhnxgf8",
  "key20": "4kDPZQUZs9RJoYDHWvUp5XuHxHsN3kAPhVJeFZe3TYLTk5Z2HuHSadMGZvB1DRf78Gxi9sdMfNWY5FmDmr26adey",
  "key21": "jGHJErc2vZ3LJREokSTW7A2kddXpk9nZL4MkoHCRsMue4gnv1JV3KxzdH6PNpYgpjnJ5b1S1gFGnZUQBdSwutoe",
  "key22": "Bcn3nv1bHa2GSjeF5h9ea3bNjkA8HVUAf2GYsTczhHnjs1mwEk4ieVUaoBKLzGDMDA21PNBQiD9kbV5TCbmC88L",
  "key23": "TU6PjNbRmUoFX8HrNLBvAeS2nPaVxJKChqfyT7duuKFv8eissfwUahKeFtqFx4kkLdxLng3n54dREPpiud6jzM8",
  "key24": "2MNjLe5kVXZw4h4hxWWYAGzKbGd7anRaQcUSZoHYfcgSQ2Hna2oRu9BVFe7ojTF5HNyd7SuWogzjmYx5WwspZTMD",
  "key25": "KnZ7UNqmc44VSZRvCybfLhfYUip4qXxNg8TWx77zfBHSs6zbSYJ4gGGUNQKAdoPowgwE6wxERpM7ge5VNUMLmM5",
  "key26": "2bmTskoNXPXuJJV77y1rCtFiCF2hc58ooQUG4LBvVa77A3RjxHURQbb8vpTXDoNKF1k4FevHbJe4WDLEFcnzAUmk",
  "key27": "2hK6GicfnhX2n2cnVqtqbAC3owdL3cQ6HghWQocLwvMDQWvgPBVdkisZa9QGnoiSQzuVXStWeqQvKACYh5E44Chz",
  "key28": "DevTJJHLg8j9ihCwZbMZPXse2K2AyXpdCDo6WebkV1znTfiM9G6CanwPDP2fEuzED2MrUtjiuJDMqbKknyPqYkP",
  "key29": "BhFe83gzLbTyP5CRsn9Kk2gMmF8TykZ5fvz34jyRzDn9Boyiat32CMjSM4fEvQPjFPgPogboPtQLEqkgphZywBZ",
  "key30": "zen6hkmxPPTb9aUetbebty1k7fPr3hk3ikraHW4q7v28GEqc1ccCZtbv6xcrw26jCAiRiADXJPKDVEfuxxcu5Wj",
  "key31": "3uDZTzQ8sFJdWJVuXPk8YtFJsXnzm7hLqFcfqtnAApz2yt6rekxqKjhoEQBE3YiWQvMmKoTE1UGqVX3wZ8EfvVQd",
  "key32": "egecJPTtPT5DfbuTSMJV3KnR6bsFfqJFAXtRji4K6xayz6yb1HXspLVJSeCeYvb1TZ9XAbL7K193DxL97p7UYm3",
  "key33": "2VwkTbzurf5Mx8AbniAMTdQy8JWkeZfxK6AqCxJ3GfXkcpxjd7wpQdePfBoed4CcazM57SJPZNNevwypfCJH3Cca",
  "key34": "5SjaCgLh1Yfi98w4s56XfjsemGMZmyC2yaWh5XfdP8zKJQzbFxhAquEC99pBzT1xJMu22MoeQ3rEpRs6LbTn6Bq9",
  "key35": "2j6THbwLgz3gMbipMv4kpY86QSnawJAR96JGvGroyA9cwVWqZf2TeuJYKktwj32ZDbKdx4fUtjaoyffcdjzKpz6n",
  "key36": "5NxieujHpd4PHFaZFpKDMxmDs2zW99c9nYCE6ZQP9R2YkyP11Ywz4yCkYcWi6JMhKG2to25wk9sjEjWH8b1gs8wh",
  "key37": "3cCfpH37siJm3ZNy6Hb59w9AYqEkuY9LP676q1NTqV9CEBLjc76PfuXqgvgUu1iH4fBv6SaR4iWJRzTPy32D1zBf",
  "key38": "zx7BQ5Pnm11RzBdyBoZgE89ZFs8oZzMqQSyNPaAPiy42L9hTxwsi6xf4BKjjERR3RqQgDGpeVV9c7jPas81EPFV",
  "key39": "5E3uBWxgivNf9nb6zLN6PHGTKV9P63zvmcu42gXAzofjC8MxP5jpbbofHsm6qWgV81zYNRpHP44tTteCGycL9ecV"
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
