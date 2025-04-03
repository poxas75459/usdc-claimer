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
    "2uS3JvV425ET1wuvFqQP4jQUpfLY4CrHWEcEHoPWtV37XeoNpZcizXF234jhsWnFoJRWYgKmJrdC3HNVj9niLo99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34bu8wmRgWPTCxZR8ULsJFXvH6BrRPVZBPUzPRiokFr617Fp79uKiCwgSSjMZkzzUUSL4SX3A6bcRjeb7pDopYVB",
  "key1": "4P9xszWmrPMRDsH8aGhDqGqzqQ7oZ5hYv6NDDPqpnzEMStmcX6Ln9VFmv817RvNneSjz5i2bovDVwKGZPd9x6KtK",
  "key2": "2JAwKWVvmJsSyLBBQu8vp1fjPjVK8uJCko2AW5XErinhsvXLJ972E4SA2o4EqssACPUH4BugUhkruPjyaLgKGkWQ",
  "key3": "PU7eR2wJ1obMVLP1D8TC3nTHjLGudXWrJX5ruwR61u1YFgncYuM1by4J62NKwq9GPgkNkQiUgnE3F9uDv3kXQdg",
  "key4": "5Y8LthgKkZu1J4d4Z9Rdyy681JeXh1PDihdYhWCg4m8D7mJLrh48W9MponND7mjq4jnbaYzgzxzVyhYHWgWJBqxu",
  "key5": "3U3NXUzsy2jKYkYKykiVkkFib15RwQvD5L8TCEidEqEiu6YXyj5HmiUXT3JS9GywHWRnSdpvuMQ2uR8RxLtLE2Jp",
  "key6": "3u74b4eudymgSrZr5WqvYNWV5k4i7FarWVXZnRTWd6DFe6FdBMqotvB57memn9tvMcCr5jCEwbBXkieA16Uv2ANV",
  "key7": "4LfxHvmoiyWXdSePgQj339vw98W9c6N3H3ebMtrA1drY886643kMgqTw2tX1EtVsELYUGdNR25mpJTPgQGfoC9Vg",
  "key8": "UW11xtf9RgzHe6YhYQNe9aLZPCZkPwVtqe8aEE6dk4RGtkwJ2GAFKSguX6uujTrin5VyyMY32mk1taLRaaehBJD",
  "key9": "3AJbWF7QHBeNh79XAv6XAcKArqCpy5M7kERoLoe5Uj6GKrRxNaic29AQydMf7TeewfwAWeD74SwYzDfKcDPkAmjV",
  "key10": "4Xq43NMXp6VTriDqS1Cjazc5uUYCYNUjPFPvS5k1ZHLTd1Z7GRBQUUocqYAdTrg62pfwQeBbKTD5RG4adRQkrSWK",
  "key11": "na3iRmiuAvvMeVBzU2RRjG5kbsVhyNPJ2LcRByyAMoSyQs1h8JvEFyuy1hVd8jUK5NpJcNcsrxPYUbWzEXeYKna",
  "key12": "25DnUNvHFeFHV3FQztKiWQU873Fr66WqsebkwEQmAZR6k7cwFCt2CZGNzyfJ97E2UhNytt71iWByLsE83iZQRgbY",
  "key13": "6rrQ3dJAZktBZm91DqpiWG8YxBZ6rximNFC91tABdzNeEJLqZDBVGaAbAaXvAX3G2ygeXxfhW9ZJe3QRZxVTqYH",
  "key14": "5shTttsm3KUQFeaLDbp84Juo3RQkWDXjZXptregP2jBwDTwY9oqsPNiZpVBbAeEzXAXJnHQjQKf4hJggYq6uRm6V",
  "key15": "EuvWw9LjWfrnwvoMVoDvKgwfBttQTg3aP34husXiehdDFKwFA8J1Vra1wS1eqVxAJPKAVHQ3fhGTUo8VvHu1U3W",
  "key16": "2Fyp8JDpNGEFFM2iXwU4xfAzbZzySuBeB52vyJnLTjSen1WzRV5DWj2AN8PtJHCwnTpscsTjZE9S1uCi5ixBjeNz",
  "key17": "5TGMFtA7oqt7DxNJ5magc1WLRGDVyr65Tq9oTxY1jTVNLp5XtFRinxezYPCNraWtZTqMA1yTrD1khCop1ZknHKLP",
  "key18": "3x2vXwNqX5b1Kpp8TYqmgsvnEgdiMDfVNevKDL8JjhGDM7S6zC1VsHLcj2ETCzfXMe5WXkWUMU6absAyDE5AiJnJ",
  "key19": "H6dmY66o26NpypgFoXZaGyTy2qfU5C5vGHwjQpQQVUTUJkvrhSqecn26fudaK7xJZwYt4mruE3XJULvokMJcC3D",
  "key20": "2mHyC1SBwH2yvq3LreofWQGDtgxK4ek4RFj1FiJgrUETKAswfow2xXRCbQXHXdbCHGzmt7EAUaqZG7cRAHQccsAC",
  "key21": "3G2sUyeYHYe7woJqHan2HQ5qXidtuVKygxnzeABcDm1As4ZcAwfMDwELqGTFsHiKwB7RQT73voCaxCVdxRZYZitL",
  "key22": "5ZHRUgL5nxgEaeTX4rfqwRk75LWrbEKKwGLsZgpuUbVT65pQbNaGEsVkVwbaSA814XUK8m8Sdpws7h2PExT9ZbcH",
  "key23": "hsk9P6Kqq3JcuhzHAGVguwACWRdRT1sXQNJek7XZJ9X1XDc1cifVMWdozrsvy6WG6YDrEx99QLW4yaKmDe7CUrA",
  "key24": "5He45cA5ZypQQss5jusxn1b2FL1HJKBsKG3ATEQTcs5Tvfemt5xMTuJv83C1JHWSobhmxDQiBks6X5nFsJLa91Gc",
  "key25": "3y83snPikghmVDCycccQUXrnYyaakwqnefbyxgf9kgLNZahurmfvz9sZx2CTfVRoc44yvq8BZ6ouEttc2qGPyBP4",
  "key26": "zJS6zD3fHRoxcWV7VZfzYwbcn3zVwfWWEmnX8SgBdhn4owx22mGFg4vkTWPHdMz3miy4ybXJ7ZU6H28kJ4wANxL",
  "key27": "AQmdTLoXmaMb3qFts37n5KSRM6ndD6YZAhPnjbycisdisEszoU1NpJW1Q7MHP1RBfyfexN7eWsCC6ea8XTnQ6tJ",
  "key28": "57F9d9LuTk9pYPmJh7hmkFZN3od6RGL8Dh8qSvt6wSzZKHTURguLRVrhSU2XrqBsK1dbfab2ohAWP28k3u5wXxVW",
  "key29": "2u6xXEqr75wqMNnzyf4KYvGAYSaMVBt1WUKg9XQE2m8oF62JEbguFMSnQPeikB3Gt5S6k77pwiQT8XT78L5HNAA",
  "key30": "2Axx6Wbvs8Zh821pa5hFBjCxoKDTnQ8Xag4uKDdyVNFh2Vd8HEaHCxE3JeDAkkWpxWcxjimjHA5STC3ZPbXSz5pF",
  "key31": "5JrR2d9ScFr8zzGWy2ZjNxGDqLLyABZM2juVDsXTLcx3wwAs22e3DqjybmMVyPHg2rzMwXdGmTUcjeBf7p1zt9WR",
  "key32": "46qGnPD9irgugqZqJx4nuRPF91TZc2mKzwAUgJ6FNXFF41ZhA3Tu36jhhHbmkgZVa6vUnkJocg92ZteQvELh8n6W",
  "key33": "43P7ephZRXpY1FtP5kNZiEKwL5AQihUcd2vrj5GFJ8BZpzGJ49SdPyGm3meatgCiJiYeP4vnRdV8ggtrzmjCVQ7s",
  "key34": "5SKvRTXeocYqeqKuF7PuD41Sw7wUTCyog5G8W2D3qtcmrQ8rbvNEKqRGgYBStdjQ1gDBe6dJSoCLx8fv1SwNvvdj",
  "key35": "3QgSVnJ94bK7zz2FzMTsuZRFsHTpaprtKHdyTojZrfzD4z8Sinr8qxBMHDCfPkWv4eVT5Y1Lhf4bWYcdsbuCZYq2",
  "key36": "TyExeUpDYjy4AUjYU7d2xHJpSBXVQey1TTaFVJ4zp3BsxBWPxutdjF2WZiqKZtkW79Nb6Xs2xGAvqw2rPqE9zaU",
  "key37": "2RDcBzZFJTsKGKh2RB6wnhrefTJvJbPtzLo6qnN85bGok86eTHirgoqzu3GgdNzQxmVTYfM2AJerUvpxmvsNo2Ew",
  "key38": "2hJqfrrr1vkXvVqrEixCwsQ2JrPC8S9m1mrBDaqk8KsyHZRiPCHH5GsjyAQC5MsE8ijRjgJdSpcEwy7ACa3cDs3",
  "key39": "6bVtEd4QbPkaEnYUfkR1Ngm29Pp7od9LZkWWmXt5aAbmtRWk7c7gkeU39NvGsr3DYQhX2N3rAr62CgpfEZqoj25",
  "key40": "25Mx9VDD5BXcD3AgQ3xqUuhan5TokQHKwrumJUwEbwqvRptYpbcQRTaaGJLurwyrsAyrLtxuTFvYThSNyS5XsWkg",
  "key41": "3zpmVfodLuZnLPCqJu2C6tpRT48ZtNDf3myGbfPbDoLrdncoVCQEEPWG5mbSrZgHKPQT2m7TqSBpxhyJE7geNGUq",
  "key42": "5urS5PxPiwZLAwxnKaUHcGLMphs4eKx6NWuGse8hETkXLkwwkQURoGRUNNrrj5Y1naBUMztoonxTM8BVriEg3ymQ",
  "key43": "2ae5fgqTSTJhy9wnRnN4QxomURZ8gCRkUHAEWF92KZUiE1qhFnnUMQfGvh37RtzR7HESLHD9pxnZGabBDjP6Vg5d"
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
