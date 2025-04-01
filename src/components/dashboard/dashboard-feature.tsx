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
    "4WuyD3vjEumfsx16zMCyxeUqfY9pB8N9yuzEzXXrLiVJf88RWJoMguPa3vriSgBESYv5kyCzoTTzfcdeApXJn5z4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v3jr4DdZDA6VdUhhtZU4pP9zwEYcryZhr2wipYnRzGe2etpmS2un48kqcxfn4VH5SxVM6pVqaoZcYXukcyCWDAH",
  "key1": "5KUfQcK4rsj5ktKN23ENztbrvqw6NWywQi6cVi2XWz861QQ1wTTHSiYo5amAU8NYyMSrsMXkdYHJS271s58Ksfix",
  "key2": "UHta86f7rGNAcfzvDFLzvhptQfMzDNCZUYFou2W7bftxyCoKDXkEiREHDqYHRSz8XKWovooE4GyNAxznc47ou4s",
  "key3": "VuhjLrGbSb47NPpxQJV1LVgAi4scHWNDpBDW1DgkzMqycEy21RuPBzWWWQULodcXK4DoKnBF2ZwF3QBJzok4xHq",
  "key4": "2dFwZ57osdFkDhSQbBqm4jgFsC2xgpZGYN1urdLzGE5tUsr6HHrxFtzL8vfmmcPRLE14FQmmXpPJqvwUV91QX56j",
  "key5": "5mTrjyMhCAsHfU4LpgCMfQZ7kjoc1UHH6jzAFfJ7xNk3VApSS7rtaKZc3sLrF6CtKf5v3KZMJrRUdCpL9zJ1jpXm",
  "key6": "2PTezqZqDP9zNsuVA5UXwUD367a1JuCYVxYAndEh7Z5QRpWuD9Z76psXUi5sYzMi7rTVmQEAfZiWzqPb4NsorVx8",
  "key7": "qYPQH2PjbRDJNPbVmeQRnoB1afcX1hQKNMLgBuydR1BsFGw6Gtqs77djjA2anxKiAbd3qcZ7Kax8ujix5L6Vurg",
  "key8": "3V1HS2DCzYbF3mswWm7R5U3uKMKxoXefSALYaUvtFSxRSiSMnaGzfep2ng36VySMQAwgg1dSu5qcJ939o16bW7By",
  "key9": "3JNVoGdSc9MHLJ8cZrdc5fgAzGPXAvH9HNU4axDNprU6LW93XtDLxyRiCC6rMExVShaTFyx3beFvFRyT9Nz6WNRF",
  "key10": "3x7RsHKHg639L7NjB9vYEq4nAER9EUBAiv3ZTUVL75nQp5Y9zaCrvU1vvicSXBTCfn6W1jiD7qEgNM39vg9UamG",
  "key11": "2rYmrCFVHtbs83uUMLXGHy2DE9Q6PUjUPffCVxEoKDDTiS8UsvxTJRcJuJQiecphVRbRLu4r2PibzNRVpYVSo4jS",
  "key12": "22bkhy3QnfqZprz3dCydix9KvXvszxKbWVZJ1nYxAhUbVFHyspKjTaKcjXFvAsiLxWaEeBusDLJmxb2Ti5CqmusE",
  "key13": "5M9FKFPLScdi5vJsQyzWQ22BS1fX4LuNE7ma5gi7XidsR841u4TNw4xXd8iu91kFVRQW9aaVaYAguDWfnN75ZBk",
  "key14": "qUggoLqn7HdP84nPWJjVpiTwWUraSb4pfpso8RUHeAQxb4hRHGvuEAuCyxm9S2vSvbyp4HAMWMtFLCjsddL5UMh",
  "key15": "29PFqmE6AWTBFVJxeL8CLEt5YttGbQEJQevm1mQbsTfRLJ6dq5SSLRjhjei6XLyAyfcp4gY9bZe4D1spGrth65Pd",
  "key16": "5EcKr9c95cteVEsWTz5fqrbEDYKHwdkHo9EnHA24yQjfLnMorbLuGX89a6QisM4Dh42yHEQBqx2wEZiCnHdZoKSF",
  "key17": "36mELQrucSUtqTjMBjzns7UKvRfp5v2PHMBG4wtihpPzfEHkUs1VVcvwHNJSUVUYg3nk5N5Z7GezDRrYVP85vikV",
  "key18": "5pc6omByLQtJiycvi28PswvphdTZUHHmoDqxnWDnvVhMz7btvVarmuAKQSLivMuyo7AtVPNY5Y9KYrrKvqvg63no",
  "key19": "394SqVYF4RZ87aU58RRq4UjPW299keL4B7jtXMWqz24mJrUNvQuEkEWB4wHkQqsRkRd3NFm32qn9QB5YnxvUynS4",
  "key20": "4CxMNUZmGCDXwN6Xd6hxcSY1sKW3DC11T6ookBkwVEdRLRSqG5XKTrUC9HDoUccF4BiLwGsJuXCJJ2B7mSdDbRpM",
  "key21": "4gt3u476UfKh3yivMvJf5S1fG6u7wca12EpxznTaPj3egCTmY8CAHuJ5hBJvSRSMFXUDvTdwwnmcDYskPtbAZSft",
  "key22": "3ezCrRhVrUqAyzwqNqqVDLUTZ7cgFAZeQa9weyXZi1qPYdBcYk5rpkjH1XQ1JN3JsUPs1uDg1UvrQoJcaenhUXVc",
  "key23": "2eT6teFnNHXu7Zt6ywTgUFExEZw7rhShMLzkqbr42Y3X1doQoVQwzT9FoAYkfMtzBwSD3yqhBrhKYeA6cW6TZJ1g",
  "key24": "2vBAZQbptUr4HmGKLVUBo6LmCHk2EjosMN8sitY6j867Wj6CcqSkxSCViBwfVGH5EqpT5LbdPTJDZHR3vip7NcPg",
  "key25": "5jEiprKm1Q5S9fTqW4bzcPGym6TRbA8bPHr7grMEN4qoqasCitZ54bBdCXW4HkjMFp58whdhe1PfwJLQPTia1hwk",
  "key26": "5XXLbKq7M9NUJ3Tx69hJe7iKd9huHR8GS4SPNqR9LoCKnHvvu521bCdosJ8kFHzeJNScGbkSoWUVtWuruhfMPZLE",
  "key27": "2zXj2PuXhoBr6c7j3uX2URin1dPHZmdKMH7y9qWUkmnmt8qtYAPnRPg3sPMEkDXjioQ3zJyk2VYtMt5URrAGXPKi",
  "key28": "DiDpkz8eWowfdWataxamdZ1D2qkPuPyKyoXsRa6M1HwiyoPS22X1afS2FfVji7gYmb8fQDtLjhYnai2du9zDeQG",
  "key29": "4Ms5AEwPpfpR2BcYxBnm4sYxdsFYgNabtFwuP6zkTfKkb57FwUAm7ci4unWqFmFesxuq48iZgvf7y2MhLjQWqqmQ",
  "key30": "3jBcaZqVjM2ZN2R4oSqEKdy5Mb4fhJSQerXrjjX3LgY6BtGvg4N84KsYRZrvTJJ27qzDXcDf2Hp5WsvQHqAkLMno",
  "key31": "5d2Dr2u93NshY5JRzo3yqvWF81wCZfCSn72Lq81W7u5L6MJJpYUv2mWF1LCmkJYe6sXToH5aj64JPZR24magzS7C",
  "key32": "CKYtoZRUUk14WyXiGJYc1XVtrN1UonF6dvQXPhuAycAeFapUC6GSV5Zz7YJMQhFTGLhxERpP12oi7upq7QBBcLs",
  "key33": "4BMTdyiWMUMWSvebyo6rFAY46jGnYW16rerMhouSjqS3gKE4pJtxXkXcAvrVWuZRxYu9NYhF1UnQcK61Sz5h9enh",
  "key34": "4oYoaqYASVPzFQBYQ5Ny86ciy5ccqBTio2HJMbHmuoMN4fAmCgcg5fERqfbp9KkCFw63HGdrhPyiJczkJyEcawE2",
  "key35": "2RdNaMndPxWohWRCots2AWJygCbkv6uGJirTcLSYxiwJeB1pPCUv4VqcFyfU88kbdRju5Uvwf4DDTwtavYQDXpve",
  "key36": "WUdgoi7tz9AaFsbcgzHu8dfyEzypQTeuLbUJtsDJMLP56p7An69gj9PUTbAgj1ZMvT7HeZBG6Cn2khn4nPXiJE7",
  "key37": "3oLJgWSnmrY8Si6uZRe5UvcjHJ5ovAx8BgsxMQ3mrerti8vNwPkGd2CVtxZgit8UcndcJgUMj14kYs899umJG1FZ",
  "key38": "5VePSqh4Y1nUsXxhEzjF1Fj7q9H5mLMrzJ5dT1C39KGtUHwBqdTSc3fzkPx8L69h4MAXRfLKHYhDkVUGCNqYTFH7",
  "key39": "3M87svnyVkbsUPA31dboAMC5Sq9vJm8S9QJThNHBL2zYFYiBjhkogejtBrGjp4UNegYdw3VvS7qGtmiCgou4gk1R",
  "key40": "2bUPfwJ6XWBVFL2BXoyzZ59RJtiAJZNFLwwNYDNz8uJRgphABK5mhYDyiuaVXHNtsBNq8z4XJCHAbs7Dd2PjEm6b",
  "key41": "EteYA98m3LacBrHVBNRBawTjd5FEe29Vs2aypad41g8tzNiYAxbAAfAaNGBHirnpXFzsi9tLR4sZooXT5vZm3yQ",
  "key42": "3UJwKvJsH5AgW4HLVMyCoRjEDmo3t7vuog6b68qvKnpmsndWSxn8HdUfm6GGQR4xonG9wbDkj3hxkqyt3siqrEgP",
  "key43": "3pKvTJvqDH72jmSfxSuVny8m9NKPavBGXsQ87TZunnAXRSxNbCoXDpRDz4HKLVL2n7rYCLa5kNuyFWoHPyCJxNgL",
  "key44": "4nLRM6ZNNYxvRyb8TwHBujz4XrKzt4S2w6Fv9m8F14gwYMfv5HZXPgyQKiVAu2ACapV7JJqUbQ6XsabLrjSWsrtx",
  "key45": "4K6LLr4R1WYG6usEFmmkzrXuBhseERfX6PRD11mpZDdKxVEEifhzvZwhhhRU5aUQJtwpFknwmuSEhj7GjV8Z9DMQ",
  "key46": "4UvBsqYojh32kHHHY7qMR5uYjuK4chMJaBkhsEMpf4fip1JbGXtYmUBqrFfQfbt6TA9jEprHgjuM7EeFPZeMYeQP",
  "key47": "3EciAGjMNUk2ZWa7fe1Y4YaqcPhfX4gEn7RX3uvH6uoUpWshDR95qLaedYEbFiHMgmMA8BjGN7i5qCSTnXumizfx",
  "key48": "4RGi3UinpvV2HoFLvJyoaU1XieieFiDy3arszu9tNfbAgmZCnPxStE9fLUufqt1M7jqZKPbTWJNrSK3AZ3J26aD1"
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
