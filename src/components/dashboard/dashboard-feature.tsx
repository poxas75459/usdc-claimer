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
    "3jqmyVRt7GAntWyiFTDA1Gn24Cwsvq3EdNriS5CRgBfhKqKDyjAG1YPZqE9iRPjMx9zvnDY8Z9arr5btcjN68inc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KM22Q8ujMwtJ5eduvL4j4t4EA9zPTdFMNZ6cgR8ui4HjM5JjvXzQMsX7fi9fJ3qfk3bNkLDJ89B7ruZK2pqvHoi",
  "key1": "2W3qjx2Zbw8MnUYw62z6hgMaYMMegBcrEjCP1gsLPVrH9HbKdj9XmzsXt62LZe4bt3apZrUe6ewbk2CzzS8vcUUe",
  "key2": "3zWcXgzAsEDTc95Gzpmbb81mSwDJxwv1xCpwWWgH4jBeRzZ8d7ze3Jd7QwAoNG5RDJCS1dDQMZeqhgAngF481Pfq",
  "key3": "sraJwgfryMTpeB9FLrtCJtCW2SN1R13Ra2J3ADxDDZhGPvRUMiCFEbH389xxWrQJV5YQ98cgfrQfMz7L7Rae1fa",
  "key4": "Ro7WTmfaM6VYCDRUS14ef8uuYwniJXME5LGiyFD1wJq373a7hKeTwjCGNjP959fDnUNj3iWg2tBfdnwduiUQpZx",
  "key5": "3ew7WFGkKyuuX5VqxRZbHpxevNGGU8FRfgjrBvsaxoFcb5Y8EHCBCf8gndNcxh9ZxHG37CrQdfyYD4u1sdV1xogu",
  "key6": "3dqnbJ2kdUrfMK9pUc3kxyp3ZhtLJCydAY9nYjAW55Lu5M2P6oABRCofr4hNWjPtKtUgvFf4EAtpwoCaUxhFA5No",
  "key7": "4XPpSGF6zY8eptthSJWiHCna9VQfTWaHR62c7DJXBmtE3NepAXYsakVdhAEFfZsmgf2wLP1oLjgwEdy4aLETjKMP",
  "key8": "55yrjr42ZEaXesEngc52KZQSmyhcHaDRFd4qjUDdBxMdChMBevrXLPoXn1f5xeG38uQ2iAFmLX7cZsCJBuimzmJ9",
  "key9": "3PzRFQN5y3LYjHqU5Wv9mszyeQwqjJtAsL3d8haMoGyx3ip1J4dR7LZVangoAFAPJT8jcyJQ2r8qiqYmWSYRwzk5",
  "key10": "3t9pSdvhEFBYv7L5jHgNdxqDS37dBD8k1xgHKtDMtSmUvD5EA52Xt7KHNjwECRYspRekKpF2dcuDXX55bsYWdeSw",
  "key11": "5W9wAVisWmsASha7jXES6d3dBoptkrb3oTftEeX2bXoRt9ZD2rrNZXyAZPEpM7LrsPHDNnuqVZEP98JEuS1nnafJ",
  "key12": "5QFD8HqnnEQtbuz8mt9BkzC5EtbNrLvqWyAuyAVH2chVkyMSvKqkbY3AxZuDjoTtwqEufa1JhV9oceXjcFBbJrDb",
  "key13": "28B85kCC2Z1NF1bsR1urgef2gpuGsMXXNMn8BKF7Jst4gpPY3Q59UKBaGaCA1wdmfEQ5yHWa4ZV2EbJvEohjpB9g",
  "key14": "5c6QqvSnNH6XPZTxN1H4ejxJT9TCDfdXhmKM95WZjo5zLsQe6N1VZCo53mQmEXQ2Qr2vMP27MvJ1mfusdExXEKJL",
  "key15": "4FHWWe5dWdSnsfgoH7JYTpvtS7Vw6iwS2x3HowPogCJu89o5XiQmC4JxFP6J9tyVJJ3pwmYACJMGy9SwDkCxm9AX",
  "key16": "3d2kR79T2GZ7UAKkAmXW5j41pywBqDdHhtw5Q9Vdhg71rEvAwc52df7L7ctYD3jv1dYzK71ESFX7nwXJ3Vb5jgMZ",
  "key17": "3LpEfArNBB6JsRmjQFgjkeJX4jY5g9wkALusiSbckJA8JtiJCHyVVtqvgKmr2ZECtQ2kxDHuPC3DoGPRKEwkeLr8",
  "key18": "4pLXFBKNifYBThbNm6gnHpRDG92XMfMVtpVVMZKC8hn5Srcec71jc6J8DtibBzPwuNRHBg4isLdh1CcXWz37vPqB",
  "key19": "47auReYHV49p1xbmZ3CvA92h9QTn7SMPN1JbZAwWXMdJXNMrmgMGu6kTMnK5uXNjt1HNQCbZUM6HXUmDA8zNAMCC",
  "key20": "LqsBwm1qsSgiokzr7G96YiLkJrppgw89Sm3pzRJynuZ2mVnTjsBErHQAexA2gP8EMvMo88QQsMsKhiWamtXsbaN",
  "key21": "34pmLEDjPKF4Y8UkCwsPzRG5mGthc3HNgoEh3edMPwdWRdNpTbz8Cw2MUAHV9syUyPeqhfRwJsdnM9uBVvpGbZ6M",
  "key22": "3tWBmHx7GJ2wHLYUT8skzDexPoHV5Hpkp5onT7Kfkg2mpzAs54BHrbVcW8RYjACdb2QbPTRRWiUDBtkdqJLTgm6Q",
  "key23": "3YvnkLMp2rzPcz75bGkF6Cx8RVZuvaeb4UWVWNDHwqNjVhY8Fz1C7tqKREEyQY6hM7sShCKRHTavG2gmAiXNck38",
  "key24": "2jzDKDZEexwYMEmEuuJV98eXukQDFAnkgdD7xG5wKgAtpecbv5ZwtfjEUb9LBeFhyoX5MVC26W7DSL8xu7LtXDw8",
  "key25": "427G6fqLymrdqHHKhwKQvPYt9w6vtvJrhLqrZQWQEmddm7pXbHbWELLWKcWWe4HFEJLdKq7r6Ywx8qiXnKrsoBQu",
  "key26": "2owNk6Gs2e41Sh6ZDHog7bsQLQviYECfUqgAgF11XjZgiXrmqqUihSLbMm8rrtUsfzkx85z2qFxe3hVuPjxYXQWu",
  "key27": "5oXKBgzvoVRdWwP99QZGVVeEqrquWabDc2jGpjqYBgBHzABV2SfZhyDWjF3k3jpHmUSnvvokaTDghzGSdM56xFoH",
  "key28": "34pvdDS3zs6QqnZDw84Ck2XzAGSwJ3Fw5ryfWzPbQzCec69bftzLuoVgzWTSRkuqXxco7P4EdmKz4nwNd97B5jpg"
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
