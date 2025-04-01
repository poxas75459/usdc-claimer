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
    "5DKqfUYtLgv4Lr1y1zLhdAqn6x2PK8tVh7TjKZe7T6PKJh3stCCFQ9gm7Dj3UuKiCQfWwBXdLtAWaTdKQ3XrGMyX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MRpdXUPrdu5osFhHc34j6zsVCSD3dqyLWRpKhMwiuV3SkCKJ14au7Lwe2KquqrAPDqEsgr4t6NV9b2KXJ752qWX",
  "key1": "2LWyiua5wbeAZr16V7b8sft76bnw8zThoHsszTP2QeS1b4aR6gF6ZfU2HDvGuupe8dCNyp2hiX2nQt2EDrNzXj8p",
  "key2": "4PimPNAW58wASoGi5fNSsWoNsTqGWxChS88w4bS41yazyaBgCYR6WZ74CkkbCTDy2hreHNVs5xypCDrNjvkJRTYH",
  "key3": "2q37Su6ZnU7CuaSkFnG6kruM6nXdjVQ6AXMD2pPU73YZwAoatE9vNfWScdwKnhb3f6pf4eTRwxh9JosnEd6Q3n2i",
  "key4": "46Qbu16dYTkDSQuVj1dyYAQvwNurwWSW6YigrccJZ5hNZqcMFq43n97SdvSrac3xLb7qN6iZesB9ioqv3dGpkyQu",
  "key5": "4DPecX3swgNd3MTB7mV3tm9ybZ55r3FVWW3w49n6uF1pM9i5ngNcW3qvZfyfsnScqq7PiMhK93kT9yk6YScpb99U",
  "key6": "vNLz94QAM98TLNkjBJpQ16asozJe6GQgGJ5Rz4g1vZKtZaCcXg22cYXJeZEJjhEe7SS8aBVQZyXKmFHJxHLRbFS",
  "key7": "RqAfe65RirWM84SEV3kAG71EpGxYTE4AbRdvtERDdFxJcG5cBGvahWw4YqaCrJtUg7cCGYVHpeF98UbAwRH5DuZ",
  "key8": "4wfCxchuHSz1mUgH1YDaVkdfu2gtqC4gVVsPAgknM6uyBrcQm9BHXjwNohYPBvGE7L9MTbV1SGecHmGBcQp7Bq8d",
  "key9": "DarvsQAYy3tWhRABgQrFBkyshNDAZQ6K18SsHWj9VYj674rSwMq1hiZna9uSquKgp5bo5jdmAkdSuUHFXkWjEk3",
  "key10": "4ZVBX7tU67FepQTjXxKUAPGiJGyurgKXFGYJmNNNtCsQFxxbQtr2LMiEkahSLr3VpvWExR5BfhHXBwLkqgG1kz2Z",
  "key11": "2Kmn3VQMWrSCNkfxFa6WxikKQiD7bxv4hA3q4JWZRWQVzdRJnJA6cPCmBWwnv9faV2Yy8AQMe8EtqwQ4bAvKgGVK",
  "key12": "2XAUNwZq6uKP6eVRDCDXmJ6hx4aCbT7yJF8VeMZPxaou9BGH2iT52mhssPo1HurHv1Gv2SPrqt1xf4eCdTKkTjXp",
  "key13": "3CLsUFfoXFRL68jnMi6Ws3QN3yw4EW5GQLTb54FCHC87LzHEEDcMF7fbRoL6sAaDCzDSEVhLnbJEcgKxuNjCQ4cc",
  "key14": "52kEyf72PZerEKCu6HHhfQnoq52auuFUfJr5BBH5W43Bd2g4z2j4TgCG9YTTw7oqFN7YEB5Y1DEm6H6EaH1kqAjB",
  "key15": "3x6gEiq3ohhrJou5guyBLEiKhDU4zkpKSKmjd68gxPqVvXieNf9yiYTowDqPPXtpobhqvbgAXLAJFePSwfqUov43",
  "key16": "3FqpFhWjoMnTuXWzLhhyPnCnZL7wYhcgPGtffzdkozJfoahVXpLbdgL76DCy2tqcXued1kmVJgCRmZcWityfXefD",
  "key17": "2W6UBtCcVGC1Aze644ahaSeG3XaezVeXhkcSVyFgXWUKFbo12GQ1iEojrxUWxCEE8pTJj7if8vC5YDqaPGyWJYYh",
  "key18": "2Qa52SbSU8uyNCkG2agtNExEGetiM5SUo8QxdJ7ZZ5BYzcB4Nvyp9f4xpX1ejGzLWMw4jAiaaKBceC5vLjXgoz4o",
  "key19": "3WzFnT9CQDk7mvuAcwmMX2cDsV8dt4ngPHko8PxjVTVQBaAg7XFGnSs67qZ5h4tp7FihWgPSM3udCY99RssZ31wp",
  "key20": "4WAx7msGoc6XWsppk7raVc7jkepNrUPRF9ofFaZWfXvnDhRFxxNeabxMu7hyhgbNWfBSmd1tRtQ3k9CNqXqzskV5",
  "key21": "3sbz7CTkuBHnwLA9gUqBhtZRJ7admdfkek8r5rpuWUhks1YNyrcEj2GaNFEU6EhAWvXqe4UTqio7Su93Kdkv2Mf4",
  "key22": "Q2iQotG3WQ1CX8ZMpi9XB2DzZYWDswU3bzM7ehUuS1sytHvGHnY2DcQizfsmAvAARiCiCt8SZNAtBWuYwB8uHQS",
  "key23": "2LfrypLipL2NbSxLM8PfhY7dNtJCUE6G71qff6zhzkRRo3SEB5jzCmaGbcZy9wSFR5u3tEPksHq7fBq5hjVP6jd",
  "key24": "3jXxvJ2JYgoKUK91KscXg6RrS3wxcYg9DWqfU9xQC1e6nCpThosXWL9vSA8cTT5Mjgkwf2DzMYQm3q51brLT6khk",
  "key25": "5huDLU8GGaPgV1zyN5axueueH6rd9k4u82p2tMrKKgjnNoQyVNKsvjnnZZe4F9mrpL2YFkT38EEUpzyjgYW8XfxX",
  "key26": "63vGa8AiFKDdf2AXaodVadaFERQ4zHiPKeRPeqwMPUg9nHQjGZ22jE9Skt2RchrqGc8dJ8WE8XdfP1MZeNar7A3u",
  "key27": "3uWq67At8i48x87fbv6hzADcL7CTmvnwipMUYANBRRnthVTHewj3yznCfSwMB73hRzryxiZKDe2zeuBCBotphR9C",
  "key28": "khPdWdfYpyZkD3NzNNqpc6xGeNvfMAVdHyS1izaEYBFs5BtpiGkvqPjmttShraJPK6acJy1tUQHQ2qJdJaM7zTg",
  "key29": "4cXmom2qexY7oiopkEv7cJbyYRHDtp4FwRykcdnBspWvTErAAxnQQnsCP9hLnADZmdq8ryyQYnybsPVsApAP82eP",
  "key30": "e2XVmRqHNdWg57zJi13YHVYcB9Cyc2p71dtKCqG5UVjcaNp7aJrq51hW3vAedrxAfy2wyPP6McRoVS3tWVNJC77",
  "key31": "3RYZRVoZ9h1CQqbEwHHAesewkR6WYtBsHsPhanwjMEe7YoKGC9RBzDBBTuhuuKobRjichHQWFJVCSh2XtR3pPoss",
  "key32": "3typmdpnxiAgvH39Xg2rifZnR8HkBEgRkS2bKExNAUmARzdtpy858QQCjEGLiD8y1cFkHbHf9rS7VEvMu94j5SY6",
  "key33": "47fnDLerqG2bkvwVMaVtzYQTD6aQkkRrYmMupSBtY4ePhn7GYNB4WRMonMUnGko9XHxRZc6gpbLHVLG4hjXuV6ub",
  "key34": "5gsm3GCLLj5W9xGN2cnbx3gjzJcW6a9Vad7meisApaeKAmf34vfxQYHtLskiaimzMxetfuSSnC93DtHLGGSyMdTe",
  "key35": "51are8tKqg6fHuEcN5AYQ8cx7L3THHK4KFUVGNauSfv1fkAtyJSApkGhd5b4n8ndGtrp9sbWUystMhgorT3ndNuY",
  "key36": "2XBsRoMBiiddLg6ySdDDsN4iqdZ2MAwUVf5fYup3utoAWeEcqpJZnQQo6ZgUu9whbzXzmdLxQMZNSeiGF8RBh4VZ",
  "key37": "25wY3V7sEbJCH6CRKtkcKkKb1ZzXTew75QjdVuqvqUQsir1EYeWHn8a9V3T5awa4FDbmKJUhhXYhqFoCsQc1TDk9",
  "key38": "3tXdsDVqvXVKuXizayvm74QqucL1Kh67dzYVNUcwYomdWdV631Jvgm82g4H2d8Vop3zb2gAQkwCmpsS4iFCfcwez",
  "key39": "3eKwEoQU9g1xkMKZULnFKwSkfGLmP5CnTjR476AMUf73qFd4ViAiaW3MhAtgH4qfp4HsokB5jNzrweBxg2bQ2Uui",
  "key40": "41rEpQdZBnPeczSUEx3PvYXiTGfTe3Yt6RUTBj81mR2nDCcS2uFrW8HndK5q1KbkNjmNjKRhHeRD6Q6SGdYvHhE4",
  "key41": "5HCMepxJ3iq7Ry2tgxm5yjNSiAFBxfcdyxpLtyTK41YDV6DGsGNQA5AGjHDfi2rytzsv9Gohdo3MFDcRm4mDcqD6",
  "key42": "5aEzB2Lz85F4fur5twoCbiWSsMBjL4j6TkoCKpN9wzTgaH9wCVbyHfENKSwPmoQEpskC7sDDVNBMvnQzhXyFEEau"
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
