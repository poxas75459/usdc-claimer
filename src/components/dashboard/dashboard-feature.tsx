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
    "P5WfwbH8uueK2sDVc2b23a1PP2EHZG3Xvj4QUKpAJY5LjSuSUYw4CHgGrH1yJTjwp4HeBTgzjymqknNBzYFLMci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VbYm7E5AUyffcYZsNrb7upuYAuzMRjuu6V7FTMcJK7gqASxDG3w8Uoz2DCS4YkYXJphQGkTko5242m1WJLmcVxL",
  "key1": "33voehiEEBfe3tPpZzXM5ZLUspDHtoYFGmiX9PzjhvgMnNmi25cAhAKryLW7rrnD4jrYt4rERcUVqdasjyZpdj2o",
  "key2": "3cfzHcFvwuBuz3SRByb69xDtREFRRokNirDbT9uCB77d1CHFfKhznC2cZLYf5Bc8sse8VfLRb3jxVX8WY17V95rn",
  "key3": "61gWVgxVYJrATUwEQwYtQ7bbo4N2hT3jvhfHFxZ8id4gfsY6guqdLTpyNPsGZYVj8kLZ8w2teeZXhvWBG85aGgfK",
  "key4": "3PrcN3wdAhqaRJZnXDWFHxMBEfpHFsqNUBjZgRzrnfGnQDyUU2efZeLUhqQMhuHG1rzBpwzyeEfyZ8SPQPYvKwXH",
  "key5": "da1dyr5bM2CDtXWDtodWxCfFhsMmncoacHQdwB1aYHawZivfxf1f5mdDnJnTTF3FbpMkpxbgDJDB7P1YsjJsa8v",
  "key6": "QByFVRTBGooMqTVhtTCY21VYvndWMkY8xVhXBo9JSz4MQxc1LGtfBUiJaDGrLfAGJL6ssx27t5z99pqAp11GeU1",
  "key7": "3FTkuQAvmc8nEHomtL2WahHnzbFfGgkUGLYntaN68seEfTNnvm3QLpGaJi3rbLenwY9LUEL1d8VymQNvHpRxT79k",
  "key8": "2LGpMbFuAe3E5pYtboHp9t4ZYy8rFiEquJdGSkZAw6vPBS4LdNVS3sy3vnXwU9Ukb1uKHK9Hek26kQwqLjwx4zW1",
  "key9": "3roUr1UqpzZquLQsdXwqMyDDXkQMUXG7tcPMpF27REQtmmREH4rtuizXWTrqCvHtyoepFrvjTN8Kv6sew26Jhdbo",
  "key10": "3FYbt5dGjfWLcx2wTW7dLiNia3GYCbRZ9tuLVLzHFDim7k1ajBU7P78PnAQj13aMwBUX1eJ68BiQe9bo1GPpBmGP",
  "key11": "5eWjYdCP1EoEfFscEH38tQVbXyDnGg3SUB8iL5kzqHQ18hRrb7N4m3XSZBxQzaPRi5EpoPR8yH14h4yNtzVgkC8Y",
  "key12": "4Xg5Vr5VskFsW7BJAB2nsKuD93x6A8EKk9ahztoDJJeK1rFnURi3WbXMNsnVETcC5wFadzZSSVDaDzs3adYz5a2Y",
  "key13": "3zJMEQpofBLWNRyTCB2FPKYJicPiiFSHinafNgf7mynrAWaP6ccmoHPtp5h2DBQD4FarwD8NP8QT1aKvgJVeUMcn",
  "key14": "2RPmUL7njLvBjUNjneUyCeMAymrEVh7c7dc6sm4YaD4tRtX1JJrcxLwLnpZE7mYQj6HpF6zBnBrdfMtopV1eUqyL",
  "key15": "4sbqKAJ5TXDnALtzRxxYr8fhmvf7BuZRSRRcChjRSazCpxH5jjKgJTDGDi98Qkrn2JVU8S96VQgNizMu7YfXDe2x",
  "key16": "5NXr5bKuztTL1VjotdYLmvkB2JQHoKNbk6cUUHTnVzcbgPEiLsvmaXPm5ALxDWXGVS5wHvFEEw9s3mVH2EvVMdTw",
  "key17": "4vYwRsw8P1yDcf4eS3cdV866gM8JHv8h67PnEiu2MitrfuvtMoiFhntG3RfioMXjayUwZLfoDrVURkeVFre7nCGY",
  "key18": "byKwm3NvNBugxoEe46qMDM5MzzEUuudBH5tTWCZSVMzygciYNjqP627hakNSNAa5fdUVmNwKp2YyfUkTdTEcuq1",
  "key19": "3seLcJw41eKh5BQZjSJSbvQyaDXJ8CQc2jMWKPdpr173v9okmKKw2tRUJebBJdp8tAUKQwozJoShrxqu7HvCm5Vn",
  "key20": "2fZ3hYxWvXYHYRB9RGr8Rou2d1aan4mT9yZvxmsn8wTRhB7YuYq355vwAS9zDbZL2NcfMFQWMTiRg77KjhCcxUZn",
  "key21": "5MC7bHZbgfdiCzewMTKAd5UaNQz5ZnyzfjjgeJxjFNkUepJQRtKJhkNd9XyXQr1DLCKufQqWbgAc6UoZKNyHVTaZ",
  "key22": "2svpYBaTHSNvW6TyKnHQhYL5PniHWJAQLCXXXmxQfnDJgCCu98zBPuS3yuDE14Mquzr64aenHj8A9MrQYkQV6CDQ",
  "key23": "61UYi6WM5eR9Vd6TZJVzfZH4A2jawbRxuv1iXD5Dmz7CQFAYE7VDDJ3ksp6yFugjXu9z1PRnmpN7TSR3B7JDnybd",
  "key24": "35bVWiKr49unhz9vLm2gqmnDWbC7uiqUF31xpUt5ATzybUUhVJrW7QaeCxqFY7e7N6AygrSMfdBAdirgSuywAHMJ",
  "key25": "3tGggdv99s8tVc5vyW5k9Wa8gjMajvKnQFECT3iWvRiWdNRxdU7d6EqmCVmnaELsqWTmS1r5M1AaQRntfLhCWEkZ",
  "key26": "2bgAioAc6eYJeJKf1Tm5tMsj79hKpmDDoWUg8UaSwnvEqKF16a2cgmH6hvww9a7SUtLwxxgC2AGUF87wy5YXnicB",
  "key27": "5xi5A2jpz3nARNmDgM8boGZc1USPw6KxFVx4h5Zuj6nbiWHnJpSD4wLN7wTpGgUYKGAJUMMJi7a2auWTRcXBqkT",
  "key28": "4mXYkobkTnjSj6KZPAFscFeSZs8AFDk9JPKAo5v7DF4sCe4UoZowPK9FPoCLAHHkHeLn89DUP91JzuFk69XM1h7M",
  "key29": "525GjNzJBwLAZJuxE1odm25YHe4dYpan9G2gQTPqaitVx3XBdJUzWTS44ZXwGJ2RYZzKyusxGB3M1oe5fuGV7b6z",
  "key30": "2wVdWTNPEP6i4wsbV9A9RjciVQ7XJCAHH5nQFy1Fzfiuq4smgz2mFrjSVSzYWuM5tVsxVvQbAMnYJGTEHHtiBPAN",
  "key31": "tinmT3XbQ1BP5JxVbBZmqcRA7xdUdXaTjgJKNsEqHdxf6aKKd7GnqiG5BRmsFJFznk4b3YB6YHLAvpk9HRpZT5Q",
  "key32": "2wcKWJ5EAZRh1MYVkdhkVvsSUJQ4ysB7GoCDFW8AYaHBsfFjmNGcUatnqThY1o6G7QctagEckWxQAd2NbRNzaFze",
  "key33": "3qubAgmJun8sEn7xi6abbDcQcbJUzP92rhZNmSaZaQsT7p4Ybj9yT6qPc2iHdymNNNaiWJesYbHiQp669ds7MQjZ",
  "key34": "3XgkAvTJGvZPe8h258Hkn98odyQbo7cLgyi1iH4SY5vdsJUWb75J38ss21bqi6Ju96Gqu3ZFjhHRJzeBTwHHUHdS",
  "key35": "3KAi7XdbVbnfjhSaJmgnMvugrPhh11UBuT5JSQgsE2RjS6F8f1tim53iPHYA2qj9qD96YQ2WRsMmUqvg7DHeL9Hi",
  "key36": "4ruX91LxkP1sLBDsx7xcisrSPyG5TrP7RPxvLMoA2F2JW9xAznD2TMAksyL5FC4ctjnG9hJeNSD8d9pBQiXJXGM5",
  "key37": "59wwuKu4iRcT3adERVYtE1LDgL6w99h8m9Z4gLG5xBcBEFXnKcmxWFne1LxLYm4UwF84AQSgEJSeSgAtQScXHJJD",
  "key38": "2WRmLAQsnyQQEMZpc73N35MfJsh87zuAXB5uiP1KeVHoeFUAHhuP1yaJodS2NQaBkgex9uqkH2YHcgqUgi6foBjf",
  "key39": "3J3h1Z8vDjurGZwVJXC3d4ePR1beRc4XyQTJb3NfvJENKRGjCHfBHv347gqmfU8GzpezJMVkyB69fHoQLiQP97mP",
  "key40": "39TB1wMacGeinB4tHP5ZDFi1yPYrSvwTfLba9ADhiyGKB651NAsNx9sfHNLi7peEYXXWTYnrBVtfoHzFoRjx7jvW",
  "key41": "2eJK3b6evY5cXi1ncnLZBcssxbmznsPB6UAQ2F5SK2FMuNKENarGof2ndbzmLAfMF5HbB1UVjW4mAS9XTN1GmfSv",
  "key42": "39tN4WGGmApGJMDa8GGyHa8md2gg2m47VdMFZ7LWV6icHz3KK2656umbhiF32wLd52yTJXNJ9LcjPuZNroLkXcp4",
  "key43": "o9MK1fFR6XX9pFnj7DV3iqxuStLEscJ6nFXbc3r7RfwQY96nZ7jLhHSCP51HtYspPmkRq2torKJ7rHgg3TciGqB",
  "key44": "4Qsqoj3fvr9PZ5ka4T6fNHppq7SBd9reWaVWHqsBdZFiJxisi7M5bGdrFpFYFJaXQqRZuEMjWTtZ3YopY78eDJ7M",
  "key45": "5nR5n9VsuvWQotMDuT1mMcvF45UvH6pXYDvG27oV85EDZZEHjACEQXVpUNi4HDRX8aWKVu4GTzDK4VSu9n9frx1o"
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
