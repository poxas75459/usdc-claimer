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
    "5kFnghDuY9FLspgE1yxhoBUQXbQ55iRFskbnetzyUGjDMFetctJemULu8Rzer4NNscGqnjhqqXevU4BhetSP16uU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WmqoV2duzjY3RGyZuM2QafaRhctjdLMhSqAdryepMqipgL5cV3xfScmvpCeUp1uHiz1TR7bEMPsjWdFtgJdgMST",
  "key1": "5brnPEudPBMt7odVA4y9ky8zed9hie2bacyu8iqiKP3ikGc1DvHGdBoUigpycxQpoQXnc3GCzVbMYBFgn2o58cnx",
  "key2": "4SNhNUEyqTzvD7uUvivJa7q9qgPovoagrKQwS46unGK69RnZqEjPRMAHkHvT9WVhX9X34FrfshcTUb66qaUE46qp",
  "key3": "3WDABDqAe67fe7RQscQuVdTpBbLPsb4XZ4qEqKxtA4unmzKimzZtWVdpToMFjnbzDsHwTUwm4U2mLyniKwiX1g17",
  "key4": "5xHq5Axheb1Yu7XpomxtrdBrewyWP8qwETVzWSR25MvoKrekYvkHnmhsLVfMmJE9QQBNcH7pZ1qjnb4J7zYTrk6W",
  "key5": "55btzycA5A6jhbY5RTbyesLfhzzr8WUzVYoYBqEF9onvTCGCpFAYS3wjib6aYadku8sqjmqttDu9gvnNYmmxg1MD",
  "key6": "fnD6yHa1y1ut6quPRwdinPm6isNrutXAaJV8k237gCxwzGCXh9WsyvBSj6XAgUNvFojRU6FFXwwavD2DUpTQeVZ",
  "key7": "4hKjU1ASuL1zbTNbgv43Sndue9JA9ob5Ev3vKJYDFH2wN8vvAgQAMrCoq2v7m36jzoQEw9Bse1p4kPor6RCmhBZY",
  "key8": "MeJyqS6QbbbKVzx3fWAzHqBgs7hed9PvFeL9qUynDhqUi1u5RK5ZbMmjafDCpGfSSGPW3Wn48WXu5Lw8H4zW41s",
  "key9": "4bENn2GCiSaxiYshTJkgfhka9PMwkjHcsLwTvecdqbrmeFeAT7fjjCrAWdiLW4rBC9wXqjyV7QXojsBvjUis4Mwh",
  "key10": "48UDse9k9SZ9Q5rEB1cBusUw7GWnJJwkDdnU3GsBb5QpTWXu35q6wPoZyhoqo7SC4KQqb4h2AvGvfGYRYnm4uKTc",
  "key11": "2dGhuHQTZhxiRvn5bZRiiUqQNk7VGSF4eYQiPcuUP2yaA551VN5ZhyGX3nW5DAM9FExqQjmGGFXgMaXiRZ2UM3F4",
  "key12": "5jwuaxijxa8wa11xUQ5E3QqfNWKanbUBbtNYDQDgGBjj5Guyx3KH4CcYFoFdFu47UAz2XGGsdNawxhUTJ28TsMio",
  "key13": "41oZNiJG4eT3v3KLcbaHgQnaUiHTXYdLHuec4prJcetnJWwkHzDF3DLTwatpgakWoPjVUg2ngKEyTaULdozuVh7v",
  "key14": "6WnU3MGWrYZNUbvF5XVrntxMYZWiBZ39iWhJ4n1GhY4BzXGbGXa4hzQKWPM5Qg18VMPdasXiaGgwqPMEFS1JCzp",
  "key15": "yTRp6fmqyBT1RnWj5ybkY8sqVtMT7hhmfpWPyYki57JCNDgSjkFk9a1E8hgeLjVYGUqU7ijnJL92zZpqdU8Ys2c",
  "key16": "3RmQnCMca5c46NJyXRGoMKYw2ZGhbHqhjxFtWGPwc5xCRyWRjWGyjqbP1wR1ccbqHTLuzt7SvV5kwzrsDwKDuHb9",
  "key17": "3XHRA5FFT1pVUhgKxNvzeXSYbv98EmcwvBqV7zxXgsaETNBY3tfrju5Cgi3eb6ZAo9AVJkn9335LgxuTWN5caDqd",
  "key18": "EgWUMAu2VUFjqf861NkDFxbbJmLR9vDD9vQTCmyY2s3DcniGCicwzJEbzT5NMqrgShEpJsfYb5JAFNCAxYBWRTh",
  "key19": "4CjDZFhX8EzQiyvQXdxrV1krZtzmyYXbwAkqHH7StGWnEFeGiQ88Qzwvnbt4fy6ZJVt4cTJPEqw6GF15zThw21a7",
  "key20": "eQ4dPTVXXQiJsf5kBYEqYhGvUVxhgepws5UhPCYrijEv5kdKtXC4ZAxKKHodpoZcbErVERutamJLwnQ5hF9SVcL",
  "key21": "3KMmBV5X5izPkxq6tWMoVUemMYKNLs7Y9RfNUQxj2FyETV4WgRbsHLJ57GbQiRsRTmSr1RS48eDrsAxei91MDtgT",
  "key22": "4ve7VaduiyTGncp81xNdutzqoy6uYbXJnzRo92FuVzsQW1q7nZ1Ze3t8iNoQ98YoFPXhzSuFDLswXGJLsxbqCEWZ",
  "key23": "rJLdsXA5HVZv9VHgsPdUBm7gd72mXwTpSJ4W7W1UQ9vbynsKP38GfWAwFUghFBgJG9ZPbzWDJwQDVyCLvZk3rvY",
  "key24": "3METG1uyjHgyeVxDgNXLHnctPBUkbR8yaUYX4nJd6S7gDGq4gzM8ss3yQDUeSHcJsBq88UUVKd2c4mC9gR6ZEBgP",
  "key25": "4dHGB5XAtD6xFXx21TXg3bPNKHdpqhcj6g9BstqYshMGU82KmBFSoCbGyLfpiAfS2HF7fDwf8YfiBotnj94CHBD8",
  "key26": "4nVAVy8VQEqsFuGsHU3rxDE1XEnk4Pxu74XT8t3DmVXX3f4E7pFET26k1BHKaVaL3dRrrNVkbGX3RRDotxNrueSD",
  "key27": "4cTtxLczr65gg1QKomKw2utwUAoHbsRo2VYm1zmoHNCLsNYJ7qJN9vWTpLp3rN2bUXd45unLUpLeywBWsW9Gwc1m",
  "key28": "2ynpi3j8sjLSL2K2EVLt9LFfq3eN94gaS5Nuq1j8LhwRExQDZ1w2WFz5XhTvQoa4oZceFvsGLBi8jK57iYerSjo6",
  "key29": "4MfVuzNU42fifJZwtTqp8JQMp9nLUv6WYBVaNhupmKyCzV7V7EdSNmVhV78B1VQ6EA4FBEQjapegAnpCYF4AAv5H",
  "key30": "2hU11bkdsGaQaAER7gJbkfFYdGWobVcusJtkM1mV275RNVXDZ4LU9oLfZc9RfM2d1mzaAw55YRWQebBVmgAnwEPF",
  "key31": "2PPeF3T9EwmuAxjsuwsY6uf6n8xk9zdvv96MNrpGqnJQmKMAKNJmg3w393wyZyVepwvshy3oK1ZptLmpBfe7AMp"
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
