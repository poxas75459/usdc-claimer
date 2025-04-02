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
    "GA4kB8Umx1JGfU3929myYs4eUDdGULRm5LHpbtVoHkrRmMpFnwsY5hRcvuV5Zz65XJzkDD9Y5gW9CStXspFJHzF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4inWZoc9SAtwnwoWzfzusiHBUyUmAjzhf1JGCCgPYHBGX1oLYdoTwQKtYArogpdHJ2qwfW8oEuVG7Fn7LCV6uV19",
  "key1": "41S8D1FVnUM49af4QnfE7yx5DZdmMXY8zMTMquKdfKN88soQPbF1HTT236tbhn24Z8qPWJAuV5Ze5gswz4tRF6MD",
  "key2": "3oGN46wXyx959LxTf1AafXZYmbNXq63u8aZEpYWwjLkrqd6mmkgyn4wMtKCHmBbPNc9gWjEagnNVySVTzEFpm2Be",
  "key3": "4XUbfgRirCmVuMrLKxSjc14KxEinkWvNfCXWjsN1STR4KdXdhYiHmFuCaep6XsXJqQhXfiuZr8zPDNNXGaQPm8Zy",
  "key4": "4J5ofpS2LM9mEePaCNGS4BHY7FA9HK78SLXzKrakMjYi7LsPtHNy54biXmKKv8gQqy8i6cPGpPGh6XcATpoZ75V",
  "key5": "7FXD4YoySotaAXtSJeurtWR4MqB7cggvR9Ws12noAPyewhoMBpeUTb6NwPmgxP3xbSeqPH653TFYPzH51Zdkhs7",
  "key6": "4g4QNKreZ2Qb1jPjRF85d5hov4VhQMVdBSEDf8wsyhgVBkiJNbUVmCcpB7zojCoj73rayCoPm6iWYEfW7RN2wQXx",
  "key7": "4D74ZULZQoFvb98cVD6AtwLBu6rjeW7z3MH1RjwvjVTbeq1NF8KJMr4jgSK2bihnkD3g7qRF4F21JHF8F67y9gkK",
  "key8": "52PTNcGu7cr8Gf9rD9uEVNNruT9PM8edz7WZfwFx7T4evTosyaSQSGE9sMmkNZ2hyFT8z2L7o9JXn5Di8zkzhm7f",
  "key9": "5FfiZk4WWSBVrsqU3kTinXYYV7CgekLRLanFTbP55QPLau9jo8s1krK5UARzn7oYJcaSd3wyKxFJzWEhsfvd9iux",
  "key10": "4vhPNdh6vEYjbAy7xuNvsEDnoyszakdiYZBNojBg4LTaYFavJzoU1xjunxpJGCjLGJ5ZUbnpwdoHDe8kHjURn56i",
  "key11": "461dN9KyXKXWBdbbzYsUeNFBrUNcLjpa9D8BoDsFsob7ZQapFoKR1Errf2rHsBT8zuMaMdseykWimExVa9sxmvTm",
  "key12": "3AGTF1nDtJd974HUyAuFwwjzx4MLGRf7SVXUHAASqhVXy7fUKdenqoFGHnPUffbyDkkvCipQe3F4Aa7eqkiiQWjr",
  "key13": "482fKxwkGzyjoJPEArjdzz3bDtE2z1QzpkL4CqwddYYr8kaHzhtj4ysitErRDWXwQ31xaMEZEwMaF8UD7cAL5R7w",
  "key14": "23fHAVSpWBU9ZqNZRE2WwpDJUWeGjdRXYhzEQDPKVoXX6234qNnRX2Zuy5DpmhxTSQn8ccTTLLXQ9pczVEPS8euo",
  "key15": "495hDwXKPKjb5pmQ6Q1YjZzELptomMaSBnMUtp248keLU1yGBbHvarktwnYB5YjLNsocVfgNSYvULST2EUmftrfB",
  "key16": "3MBiHAu4gtNuBFcBwnDXBWaS1JLKoaxtozBJMrFtNGcKZPTszrg8n5F2fvpMdKWhZgnupV5vEfVTk4JvakruuZYn",
  "key17": "4mjoPHFx16aoaEC7NgX9CquueXdRAo9HhRoG2TiV5o9w47Q9k6M1Asjw7AvaxXxg2HNzHEzpxgjBKx5NPyJRzX3B",
  "key18": "4i2NxcmY4f7mkVTz2TpscJvWTXp1BYpmzJh5LYyNaJEoaUqxw24XDGGYREvDpMihXxsgwtZtUYVUsEsga2AHAKLY",
  "key19": "4mc7EeRuaz6Gk9RgdXtv6CGBXZTvnSnTxVSYP3HmP39RCB7tBwTzcLYYk3oWreXUbBMX4w9UzrtokAE1KfxL9P1c",
  "key20": "2AQaeMXh7DHn3FtYcaJp64XLFKBSRNiTPZqa832QwBDh5UWWmu3uXrPoDn9HK5yR2tabdb8yNxkTQ3GqHmt3uTWz",
  "key21": "4wbYfJ8kwsXnqLssKtfumBaJ58g286kxhurTw3T1Yr794X7kP2KeLgXQtAYw3QBGopddWnfLfCuvsEeNvDrV7vCA",
  "key22": "4VTf2a7ztZKjcE4ndzgo1y5JquJycSCVJgDiKspDXwd7bk2RB19vdzKFwHHmJaioGCCXd5bSUjSXgBpspYaviVbu",
  "key23": "776BRWDzNyi5XDpSuuk4LKB5myvFUPY6cyEE4RPfMrJYsNPPLX23z7U6HM3WUJ59MTif9mY6EkmurdQuG9Tah6C",
  "key24": "5PdDmiaqdQBJiLsSY9neeKdQtoBX5vbjqgF99KqoGFPVzG2Cw3AKYDxDDiwqVJdNQnNAJyoaP6tBJQN7nTL3PNAu",
  "key25": "2mSPn6ew2DMwkpNsywhuV5heyfP9txMbST3B2MtrY2d84sXke74idP5SVT9gitbRo5chUibCXAPvmVBAPfiF9Mg6",
  "key26": "4wn2bKmUrLQa5opDrQ36TbwUd6FLe5mUDRgopDxmXNsBnQFKZqpKzJY8gTogVhYRzf7yJPyNQm79a7fSZX8ytGpx",
  "key27": "36BB1ZweZMM6HHNkoaU9FogobA2EiDytJXQ3iLELo4TNELNdVgzKzFG39hubvuq6Pmqh3HG85X7xEds5wRhy51y3",
  "key28": "2K7e7hVERsGPNp25ENi8vgP6AVmLZG1ASgAVfTQmQuh3p5cQraAd9Y9wQJdPr4LXzBzwLrStoQBWQ9pJHZy2rhb4",
  "key29": "i6a3LgSjkupSTdLtumUqbAQQAUFgzxxiojM5ckgwT4F6QffpNDafs6wwZPreMwFukqPLMsHvPehALXsUganmfXL",
  "key30": "iM6FgpZyQ5LNh9mVQiZcYhSND8KNBXudVo9mbMJ6xagys1HvKPA4QJv26wb5azJf1PDoCnuohJgSrK1bBFzSeGe",
  "key31": "5gX5V6ooQjN5qNfrLKkerNhfbgLTrMYM82KhxCwJGsVYJ3yCofLWTohnHb3yJTgPwQGkjjNSHt9d1wNGXHDoMZ55",
  "key32": "4xXqCWM9nxvwnnMRJrqRf1QYYyoYBFdvKfPRPqgs28Bw7G5T9FP5h7jS6xbGrdTE7cz8TbfftQRAPogm1j2ZQLdC",
  "key33": "3BbzLLtYv9K2ys6EJd9SvTJMxdmjbYEhDBtL3k9Xarnc4knxUFk7zuAvvmbodrvVTMABPKHN9cNiesBKiqyfsutd",
  "key34": "2CXrmm4w46LXziyw3oBDC4nzr9aAofJNHT23fZg94zRwue5uaSwGaRFSnr1Wk67XQ18HqHn18jwktE4SY8eTqhVL",
  "key35": "51HKSsJLFXawvVqV6BENjRxDKze5ENUPav9mj3buo4ws4ikYjPBkNjHnBHCTC822Lojdp6xZxqNwe6UBScw8V2tc",
  "key36": "3pYRHCUYYC6TfpuEZwFZrdvw8bfvrqifqvUNFUsevLvYwSHTAxeAWFpfHrX9nguKHaV5K7qxVArof3nYNRHHMsyo",
  "key37": "4xmzmoFBy6pUyxoKo6fi36YqqtZybhdBREoyzavN1venusYShjryp4sM1r432Re6Z41YpSUsXW6uhXdKGretGCQy"
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
