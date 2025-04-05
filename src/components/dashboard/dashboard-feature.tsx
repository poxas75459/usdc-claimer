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
    "5hxCkDVVmqTyKpbJ3WfXTnkjFVgWd8muTFLTSaohGxY7L3CkYaX6bqspffPXB46p2gJ5NQXZUcmUk73Zh5bxy7S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cnQH8ww8QyEvhWmy5EsDfdaDYvyobH3aiMuo5iKhrC23nw5RKSsdHPQLvPxpBooBKRvNNrRirzHYMiAHbNwJoqs",
  "key1": "4vSbVrgmn5YYQJAWKSFrvYNJ83eYWqwQyk5hCzN9osTVwHcEjoYFcCB31yU1XD2yp9QoxGKuZxH3TFaeKfwvtPaA",
  "key2": "UrQM4Z62WxZuY2HRRCVropCQhypByNz5pZ6Ge4vJecQL8dnzTXj2cjUXFX15E66PYoUDtRBnEW269Aszk3it9n9",
  "key3": "5ffueK6CB24M8XtwMsu6NNcKRmZDH71V5h1NxuPSHJZ9wRFv2sAxFbu44VZFoiM75irDmZ5qqiXZjrWr9yu7ccCT",
  "key4": "4BjnMd8eAs1RPkU8oNesobJTfTTt3HrNJdRQgXNmuzGBpZrBbu2EpnAyAFxLXssAg2SANa1qqWjutq2LTJYhxmW7",
  "key5": "WWdrEhoeSX7JtxPqd6WaPNNdWA3zWHeSiqaYaZZnvhNnmVmJTCCdXau46atkfN2KSXJnUKyCLSJKBT8cK4k7f6t",
  "key6": "4xhMyVi5KUooMT4XwLTRi39W4sj7Hx2TkHUoFmfU7QPNP5UJd65GBfwpA3R76amxX5EWHmiWcQjdRusBWY1m4sUy",
  "key7": "42jcbYpa4QPbkZoHaBsyuzhfpciH8E9QQ7x1dkQzSqN6Jb7XTsFTk1ARw7AxfyEfrSjd5vELoAS7svKdF9wpxQw9",
  "key8": "4c9SrnxmNHyCsDDSbP3m8niGDVu7YdjXypLbkyTdvmpmeqrJ4t4YYSudSxNopP8mCy4niYU8xwCuABYCh4koKp6f",
  "key9": "3w3L9ureo8rPie5gT4GcTdWgVg84DGmjsyMwqVS4z1vRN1v1FLav96Avueas3tLxyUcxh9rUAuxtRgQZyFL9H56o",
  "key10": "3B8FQAQzsaMTv7dgZ6YAg4RUwSopEKFwyHXtc4uKVxV6Qxi9N4QLL9zYSUV26bWAPtYuAepbwuAPRdrQRqE9G2zG",
  "key11": "2aFgQzTqxzWLDow8HRDNzzXqE2NNtHnt8Cc2gsnvhW6XCC2dF98HZLrXLL2UQT4zn5mnthrkvTWkQ43gaxdUU5me",
  "key12": "4vgkuf815h6aBcjtsxxeoWFZocpBKxFPCk9WbTW8w9Juk3ao36zEtpqridTkM1K64viY6j44C4vU9sbqx1jLDyo7",
  "key13": "2M3BCiZhp1ScEJwpSKPDgJ8N8g1sjEfakpNrtDuc698ueczxJExpus9c9fgS6uy5NP7v2ujCQ9bDeTjgMuwzgQcV",
  "key14": "3Vskcibe2GAj5PCQtA2E5KVmNaf1FDbkjxJoTE5mmyYHUp5NEVtoZxJ9Aofsqz5F1Lmtkb2Q1DgghZUKMkZjGL3y",
  "key15": "4czfbkQNrN6P3AqF1xBo75vbF9EVxTRyYshD12y768KFFYLZ4h8AkojormZFEmAn1RAMuiv34eQaEGPxDv1ZW5u3",
  "key16": "27GhGDg8mdZnV3Lroc4dLptjDuRtupC5byiW6xv5TsMGjgQ4WQReup8WDci7B6UVVwYm89fcpS3XomnBVZJ4XXpH",
  "key17": "QAPVzgUohkgp6q9NBGhrMwE7UBsVV21wLTaPWRic8cBbqVcjDrQ4PWrZAGxVyPqtP2562kTY9MSJoapaLXLsiHT",
  "key18": "ejRZoqULAcSpb8494nbBuu4QKNhQ84zXXLaVhvMihim6kvphfSv4QT1C5f9Z6iAUqQnFAH18PdDa3v5E44CHE1t",
  "key19": "5h2eYZN6R3aVPHvLrfrkWtFRdrbpivEgZ4SyhmKwQ6KGCerNrnGsJTfzNeoGr3dESMomFYKDnoA9bWoWKh7gM7zr",
  "key20": "5KSspg73XJUu4PTJPBbMhvyHW3K9mL7DcTxutTjH1dWHEDcQ1nL5TJ2FrsFhet8VFNX2YACHdyFYbJdA1t3xEaL5",
  "key21": "4Z3JwzsFctgunyBMFewTmb1fPbJDog3A4pPWAPwWNznuw42iJNBkDRUU4uHJB3MCMDxcE6eeqNyX11JsodvuAEf6",
  "key22": "5xn8ZFatCreMCKkCW3twVz1Gf1nbAGLkpznsEcYRAaPiAGenRPKM2tasaNyy1obBmoNPcUKXFi3uJnp6wchSpXkA",
  "key23": "2ypjhQhbSVHNPMVoigw4vCBg7mVJsL1vCj5gfReuwJKkJC2D9AQsEGzrhfbXmtnSiqL3kv2wyZm9Bn7Qq7S3Eiuj",
  "key24": "4SsjGcEVZtLRfkKC3DJHEJgHe6F8L1QLNyiRa8p6eTuMxGooPqzTreHcCKw4eJ7ZRrxjnJSc2qoype8uqnzrNW5B",
  "key25": "4fqKtipJRaN6gXwVL3xwuUb5W92Qe6Kx6bPcPyuVGt8n4gdWL6odqZqSw1ncjtXUg3Ei6C8yyTCsjNU3WRhz6fbd",
  "key26": "2uRNPWKW3GiexE7XzVDKxjrooadFFmkQaVmKy7Tqv6uAK5fefLcjP3KjsKbDoKjsUNPhikFFCyeNLQDAeR9NBeaF",
  "key27": "3AHHfwgxfzdreHUJgRs3FueDLH2FGaERB2zHaBrHMiWAuGcdaVCheauSH7FndsFM8mcKz9FbbfhEdSHTGvmzsTjV",
  "key28": "tfPsubozAvMZFJTQHGSUJMxebUgYgiHHM1iZBcxT4xHLZXfp1uHNz9jYqXLwtiCc5GGaxXxV1uKNzWuhUihVw6a",
  "key29": "2WrduHHNP4ByaZ1oWZkGsKvn1hzEZTBC84RDPPSTYMkoMQ5iq74dTQFeAztqiJhXYgpubmSu4crrBH8ArUDXZueN",
  "key30": "sHifSg1ctHaYxAtz8xabkURDuFDYAPxVfv2LibDGq9HKb19M2xpQwKgpue9Bdqm5yu4dvZSLC8WeP8D79udXZv7",
  "key31": "3EToFRVY32mYgJ8odi5GtfrTUVvWMAGmTVbhou7vCYXzsfiwySitz1yNqoyFm1wtZd2MT9L3WRyfF773hbgpHwjD",
  "key32": "2T2jGEGLZTvwfxvueCsqE1PXYiRAsK5CkeZvLG14PNxcDUtq3M1ciV9uv4FAqZQCvMaS3MoC2LnpAeXv8qBz3eiT",
  "key33": "36eAbi18ti96NwVnff2pbMojNjSQ3h7w1Gvg3JnQTLwj92u95MXc9QvfPZAFzHzNJ1a8pb5mM6SS4Es25fQZHp2F",
  "key34": "5Fnnzs6YiQVM3LXFQLkq1xzKrwK3E9BjmwxLwGnie8efvvPE8yttfeNKZ9b6W3B7H2Xy7Wp6uD7tpSdqe77PGtHS",
  "key35": "3jN2jK16KsVkvcS9z6xShkVELeDUkh2jQcQmLtQMZLDtQ9h7QUMD41dRqr9TCD3niyGEUhB3oRTEj92jbEyFfLkw",
  "key36": "5xuUQZKXJeW4dUjQwxhWs1un56v5VrBDJrc887m8PtEEKsB1coCiZDwwz2xQDT897LnjTcXiVsZvrhavx8ku4Wff",
  "key37": "24VRCcHHREqhctDw2o4tychYb7dSv6LLP4dtNNXBcSmYKQ7fWS64NLuve3yTxtpbW1VZuhSRvZFF3t6iBxBq1SiX",
  "key38": "42c1xZGw712hLEiGUykyzgjDRq2jPmuN2qc7omZ5MHt25KYiyScGPG8q5qsF2bjxLGsWPyWvX9Xmf4rJCHG7F4Su"
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
