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
    "gYpgtgiWD8EJ41AdFf1ftdQ1hRmGBoYmbDZEP1dcXDzS97LzZasgz8pw3UQMn5tW4dfUtQDvLkS7mRHa7z1hvxc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eJThey2nZ5ecqBoQr1qs8qoSu2TgBqKSC5RcV6bM4VpdoJYf5v7DBjqSh6yZamg6dA9Eg2qoCw9Yd6YmYqRHxuw",
  "key1": "2ZK9mgF1Vg2qMgXv3CpcqYzG59CCLPNvwBvuFtFPFgdRxakGnbNN1MJWFXB6Nsz8RDayRjzfKXDPaCHKgjfQ8vb3",
  "key2": "iMG9rAQwkxXyjwD82nUhbdd4JcaYM57K7F6Uae8hD9SYmc2UUWfJ4vHssAWVjofqvhBxu7GjLNQdW7RPf3zZkNi",
  "key3": "4ThZ5Zp3Cwx2eifSQBq8C3QQSEUaUcPPY7rdwAqPtVXv8xmzo7n5jhnw6k5SMtRjwdJ6ntfU3kTndhYU1xpDK3J8",
  "key4": "hCJiNwW3iSCZwma3kr1zvmg2nbdYbiaSpdzzACn9hAeEoM5mFt3BpSa3k9DCYD8wVf9vBnXZtE2z5b1oH8QW9KW",
  "key5": "5ZNXd42PASA2zsNqVpxAwkL6iTxLDNy1kfZMtxS6MPSYza8dCWkQPCr9BwnM8fJi159MDSHJE2z1XYFcWorfUf9a",
  "key6": "5sAWfyd38GGaoH3YGQZqDQ7J7qTf1TimLoBmBSmJsXVQGxwxpfbMvQVy2RRWcQe6qqfbu6sPXMPghd9757sJYmVf",
  "key7": "6AN7w1FbCbJztavJVSTHrHBVzbY4yimLHvbgsgj3tajYUkjjgHXWjUPdTU378EFzytQscB9E6bGXcs1R68YHYag",
  "key8": "2xTgRbFx4PUanxmFfRhd3ShToTQCti1yJNdytTrfpjQAAyruHhZMgRteLML6Y33BW6nYe25bM3dkEc7a2VeV1B8L",
  "key9": "3pTEqYYyUSNwevQB5r6MyKZQhL1s5gcgQ5HMB6QtKgBnwXmz8sUQT744bC7qLHpFC2qVUG7nEnXhmjiHqwgKDwbx",
  "key10": "4Cfn39UKZr8WYYfYED4d3WdaV18o6bs4Z96pcaR2KsXC9NYDfySubDkkahZqrpav2SMtXwZcxe7krQ6wANsqXgwp",
  "key11": "5dA3j5bKSWKnVz6ahFeNzC3DuUNamu3hX3HX8Y77JQaNniX3A3XMp3cXsYG4iEuJXekwY6TVzXqVVHHCPicLX6Rt",
  "key12": "4bXiL9uugQ3aCcKhtKBxpS4rotmP3tHpNTMjHuEPTw56yg5hmkizdPEEPLrwJsNFXiKPvXA7WMLEDmnh2cja711S",
  "key13": "SsPQhWX5v8QtmskoPMsP7XorAMfcUAnhipuPEhSQgdao9CxiBBvGZF7Cpk9XutxgZBgVtfqV2gkR5zWh2xTXfxi",
  "key14": "4FzhfHbSRRxFDA1ZnAraRGH31ZYS2Do4YcR84mxwQScqKPLS89fhLRSY7JT3jxLUuyLoWPLP5DnHQqg6ZEXmJ4FW",
  "key15": "fTy7wwK6mJocqWS9BydazEgvTpfPm4JRct55WzMytZh5CyXqLN8r79nWvzGUFdzwEdM5CvX8nyCiZry1t8RwhVn",
  "key16": "4s41BCH84xMiGcd5NFjs3wJoMNeKi2pSRWwuz7FJTqtmEGF4CTLmMReRJSvxozJv6DqU6jQNFSqthxRFUwRUFSfk",
  "key17": "5UDPiGp7ZpBMrxJWe1sVCqp9ABZWpz3DVXYVqaKi7THzbbvrqHU2nyMYvkmMap1KAdkCqtqD4PSeNw8NkUqMNroj",
  "key18": "2QZYSES4CHfwVoo1PS6pK89pDsDuc6GLpTmJdpN5bzfXU5F1BJuRRzeKEWEUJikCEroAAH6mue7pxDVkjsRkX2ni",
  "key19": "2wZ9E1gJvxKkXRKvoBqgRcziJyYn3MTr2aM4Dm2MvqzhTvVZDt2YAwR83KhZ8AepkmCUKHXT48PhXRFpiZ2mdzmy",
  "key20": "C8vhG5B314rHNaqQXhTXfgSt53GXnUuxpF7uk5JUp7YWEvaqh54UnnU6hwzKKieQKUdGqLqQpUpc6XCS9CMUAbx",
  "key21": "t69NB99oQDAy8oK4S3uy7xersEuSMSssbFtkd7mxSjr7SnxfPSLtZTLKTERt9CyQ8g6EMtJMWHN1FxB2aQf11nh",
  "key22": "5LgnuiQ7abe91EQr7AmECCnWPRfqaWgMd2kWjXcZMGWfCJ3Uo8r1in8wjmWRGDrhxW2heeSHEXEFGDHGRvkN31SU",
  "key23": "44Y4vksYKbNbdC3DEiZqeJ1j49vx4tNYn9zVW9JZQf1eQn1rCU2ZYvag9M9HmPYDv5seRHd4TZgc2krNPb2Vo8oD",
  "key24": "3TgACb2XZa5L3ha2wRQJqYESxvwyhJdV8Mfd3eCsPmkWv3Tfd9jYuqAxBG1xua3qygw8pzv2W8YeFGd5KXCHk67J",
  "key25": "9xYW9rSMuj7y2ftscxs3eKYXM3MTfUDjoEW8mF4gC39WgYueSJy1ij7AZbg2D1tvKhEo8Sg5ycSg6Xkv6SspRWy",
  "key26": "4LXMPNDz8pUxjvrcycTTCtChMoYjPfzH2pKj2gjNiapHHUCSM9E8G8B76NhWMi68wSfaJAySU5LkC5bwdj24YEwF",
  "key27": "23M4dvmCk3VXzopvMpbNuXjEjeo43qQkTb8pL6e9wknnDkvJdfRcdsNzh19iLd6D87igLtTAZd9o7MwXWZAz9GxG",
  "key28": "5V5fnFgC6S5tWQcsFmxtmeTo4HmANcHYAvY4H2w4bo6AtDKEwnviLaveFh6YBGgiNKAZP9sxHUNAuP82k9iQWEBx",
  "key29": "4yJ7UcU3nRiYAW5mvo5Ssk4RmfTaYmHpCDufsaJY4aDTq4Zttjt44yBQsGBEYb47MmoSJ62o3YfYPvtw4XFrHYJ8",
  "key30": "4xepo1mz31ntrEzNvUmzRzSC9qp5yLYi6RuELQZcnTjQdXy3XY1vLbcdDVDQh41xGmgWbVgrPmWMEuiideH3Gj3N",
  "key31": "2GrWqZoaWdz7fueK3CpJ5jexMZvLHynUkXeC7GNFq61DWzJnKjTxTL5UPhhRGk9SChpx5jDf4Mfoso38hA8fmiq2",
  "key32": "5Hb5y3VBCUPd9q1FmwikFhUcvCSFUomjuWeGTmH6GRYUfHnhe6p9A4PGigvdTq3bsfSKY2W4jpA5kbkn5vLZCjHa",
  "key33": "4dMixY5rdfDJ521uYq8D2Sbvn45Ey8zPqq2L4geurbBVpiQsnwpqC5T1TLZTnv8yitWSF6Gdvbzg9n4gcoVBX4nt",
  "key34": "5m4REj1yhadbb7zFaKbR5WiU3UkYi8pvvdiKzcJU8dXgktVMcCCommq378ezqDcfHvi66bt3EVpj8GzNtb817stw",
  "key35": "ZPMcu3bqVWB7RHmUZikBJ41U7YuywLZaFe3bqy3c6DJdNL6vvBJQP9N6J46o4kt4x7D4f6uMKX9DB9juS3BThcG",
  "key36": "5ch2GyGA6S3CitTUd1QHmdEgDUGoPG3ybviYnwnMt6St1fwKz33QqKNHAuG8jsdNXyGLq9j9ZWE48JGsJmgEhcru",
  "key37": "3RBzMG5niDcAca6HE5jzLEbvJxoDETmD6dbwo5mfQx9nzPBYxm7RgAJSCGqs1BG1EHmKp5raLPjAPoVgBtsEbEPE",
  "key38": "HFXwp99NaRncXPHe5cQRbfCVS1drEB4BTzj7y7FMhWWPAan9CYHfaC3fbP3E4JwAJwfGapqs7ujFxrRSJyLnRuN",
  "key39": "4atgMqGSx9thmsCunnrDZVn2HstA9odw2sd3LbPC7uMZwXkyriQgdstgNbEjanBjqRsACAxT7eE9F1a8c7PZ8byT",
  "key40": "5Xha59AxgRFFeVnyBWvqjRPYd5YZNGMnX7zZ6KMg93ayjjqe8kqiAGz6ftXHFxHDjEbTDpsNfB5EWmaTZecF4PEt",
  "key41": "2zWx9tLk5A3Vcjycf2x8eSHNXADdHMCW2T755aEie7ySNJdnnYqi2LY21MLyRcKyLg2rxXbqiR5bocvKSTgBKWbp",
  "key42": "jRkfi4ur8wLsNJQHYMWcYDuMgVBSYiSa17Ndb2f94UGAduuwkW3P7N6SVuXpyWXL2XTkHoXw73Uh7zdE1Vtj7EB",
  "key43": "2N84Zktdvjw6MNoWQ1JZME1XFDRYf5zH3UPWrnHy5GU2WdRJUUuZAhyBb2xVFa9ZnUwtGPRBdrGfE6tBJkQA6hoT",
  "key44": "2Q11zbhzgH8pCdEDqEt7KUjFjNLj2pWqEFykK698s3ijbuqTsH8aZnXY2wq6CPMYoUNE5FnqQ4cS9S2sk4MV77g4",
  "key45": "wCxJT714stR6oKPin9U5XG9Fkhw87TcPXJTqgAWwgDqSR4DuSXT2CQMGQNibinRTaMC3TmaWH6iU9N5cxfdx9u5",
  "key46": "2gmyvgahdpZ2qXgiad8WkQbqPWo6bhrW5ioLsyA19Q3TYVQsR7Fpfv7cMQ7YpvL4eJcpAwaJm62zwnHiGoAjarEz",
  "key47": "5oaJJHvuSKSFpJnT93pb5gHb6im1vsZ6da2HJeSiS7jYXPZiJ2rMseqYhGtCYHrWwe9Ler7vDVzT8ChVLJ3jphYB",
  "key48": "47yiU2gBw1eg7vcFM52o51D8ynwq1xtqtvzpbdZaArEfHSykSZ7iVXurHo8bP86iWM9rifbf3qQGgWPqoaYRBdTh",
  "key49": "5WhF6ZiUNXdtzZzD9w5y6jMrfnyQkqhhobzrrGqFMtSN8Cs2pZ2DqGQiCxPx5Hf75dAAJKRKvXXk7KqkU97XEKex"
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
