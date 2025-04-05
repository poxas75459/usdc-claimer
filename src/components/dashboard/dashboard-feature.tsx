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
    "3Nm9kFukkcLCytARKdiTNzCxmVBKrYbJVqs2Zcf6vWZg8u1NQ4QutVGLXv9GpUe3RFWwz9HP5gEKoiS7zignAkEz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oQADnVqgr7a5APZZVQRan9KLwdn6fGvt4fnbg2zoX1EnpHM4ynQKf7mokuSumMQCMLf7A1dBJJwA2qxSJah7sc6",
  "key1": "8u8WxaSbMFsDeqxgFDR7AHRKMYpdChpWYRCZLyYnhgiQCr4BP6hfrTDm9Jmgyb9GcX8aYwQuDkQuPuYZDNZpvDp",
  "key2": "2LpibEvXekdhfQt2Aj59qAhV8CU6GN4TBbrWw6CurZeF3cdxLN1t94c4NdFaXQqKwbxbi1UTVojL4a3ZoQWiqu8R",
  "key3": "2x1dZ8mcmb78AM63SxdEv3jYka6EME8hHxmBk6x85uNGmwHPg5EML4xcj3LXN6AcdcQzePxmAwjRpRWmdEFTuK7B",
  "key4": "373GH6eGsGtvqQYUUY5nF7oSdKacVrbxM1kT7DEX4492CF71nPtmhumSqhMoRSs5PBP7pxdZEWm6TDC54qnwLrS8",
  "key5": "2WnCoL3HLro6mAY8xEx9tvHihC759Jh79VKuR1dSB2KRxF6J8E467cbENcDXw44fHfRU89beAWp7X27V2JbQCU23",
  "key6": "5AhsQnKhgtcs5KHnrmMV7rXPbvHiDi6xLsRHQ5wAYTkq8D6eTgn9i5rnazU6LympUHmihe1mSaxGBZ3gq6ZUbSej",
  "key7": "274aYXi983CzpHgXkjgtqmr3UGQot9UNedR1yvRXkMjewQmqG7AbYBmHeNmDHRjdDhESDGw5mCr5EKS8jnL2Cd3W",
  "key8": "5xTyq6P4YupF8ZTx7Yfpa6XgrjW44MhSSYjNuguZtuCgRXVpjFYkursiCmwfwkRfkgrvNGLKGVo24iPB6dHc5bNu",
  "key9": "2ZdAvxPsXdS2zqLYgssPHE2fpVb1SXh8REfuB1pKBzeCy2wSE52iVnHdqpTDp8i8WnFjfV3ACA5ZGiaidE7rheRa",
  "key10": "4uEGAE5ZLUzyhGW51GAwHiUH8o3gbNa6kzwzDvkVwKwAHLnUAdUAErWvYaALCTG8gZr8aktBUgj5kgxCkQmMuG3B",
  "key11": "3EeBNoYYZ1q92nz97W32vZUVUxGcrrSz1Kmbs47ueUrTRrs3XF2dEnhoy9HdngLVKvUbUC4VH48AU4eZSVNj3kWv",
  "key12": "5j5LZv2NeLW5szyFpiW5kRXuAUxejv59kL31vCCbXeo5gx5SzzUSm56cuWXm1ZBZkf6M9Ygw4t5J1qaXUYXRUHgn",
  "key13": "KWtJt5QKWEK5CJLajzmhQJH5Kqm2VmYmWHu7NuHKFXKBj2Sppo5VmBMLrtnrFhkjPaLSm8yFi3UMvtMkJVEuf1F",
  "key14": "3hoYL4xFTKKTypkz5pMRtVL4RnZWC54Z6Dz4RupZ3q8VCUpvkHEfYqAaXp3piE9P5PiZvceFxTWqyNYQQY3rvtrL",
  "key15": "49d4aF11H3pAQCRxx9AzmhkPL6wxwLD6tbzxgodJ5CypkNYjo8ssFR7ZKmCLhSSXw8NuVWgqMAdWGqKykq8k8Vbb",
  "key16": "233FbrN7u1iicMDbCNDfxYFeUDXD3PcQyw1tueM24CfKNfbTpQE3WgszxqoVrUZb62AhEeqPT1krohvAKc3efHSn",
  "key17": "5QJ3eJtaH2chyLLyzHJvHjcqu6bd6KRdVRNnq8V7MvHqgBHyjeP8ZDFP19vwZNmDeQpY8XEAXGYFxSrxTVvVpgFJ",
  "key18": "2JvMudggrnSMh8hj4Geh2MSseP19dR3UdQqciRUefbHeaM9RhNra2PGVQMjsdWyXjVAkesk96vaR1qcMNgccSPQ6",
  "key19": "2xVMHvTWcWLzuU5KVYNnmRCKJ2pLFPEkTGbXCn9L9iqLeNJKmPwQQUA1wZmWzMfA5UmMuV8fMcy5HjCKdD7nMqDM",
  "key20": "KZe4qaraBKfdiWLo72iTExECGJ72C2TNmvzUdWKUgJnopYxfA77Q1LvHBmgaSyGcTeZayr4JfSNj4V4FYB8NtHz",
  "key21": "3kE2kRpc3W5EFX26NpDcBoRuP9381T6TXjHWk6SkhKPVu4x2pe3ZrPQEYdTaCo8fh7h3RRjqyEEkxHCWsRfMaPaa",
  "key22": "4TUSp1eWBUcCu5wCc9JqhzzM1Zy3HKNNeem3XHvoYQkHai2Rr4s7pzBZK1HhS2P7qYFNk2NehnNzsrG1TX1L18nX",
  "key23": "25Npd1oiq34mAMGZVzY83Mow7A6Nu5VXqfUoB61DY3GrDzUiHGrAJKVTURyogAw2uD94YGpKHd4DykE9NyaVJVSV",
  "key24": "52J12pHbgHpB4vU5MijnoTc3NpKkjxLEb2Vxeguc44u5Q23BirLaJwvCd8mqmFn3S6Qv7qfuqQ7iPAAbrmPvniNs",
  "key25": "3cM6n31FzRsqJGnBgxN57pffKPK4bNb4uPmcXcjoeCofW23uSMuboKmi7irB6mzgRdAd8tMpFACYp9PWB9pRTvCK",
  "key26": "2FfLNK22YtupjXDXY85fHvSweL1q7STEyzGhWEJvm1g1u3BRgc624W216haGsXS3h6wdgq35vXU8A97XWaqrHPSb",
  "key27": "oyB1f5d2xCQEztCW2m4ASLmUHu8P2LPy5iJkE3Kj5rnts2oUHPMovm7uYN8tiq96FDHt8jSPP9ji9Ytc2VvDp5N",
  "key28": "4ptuPa2kGSjYmG9YkdBASFzg7AHqFtBMhppnFKAKqtpVBaxpJAFnpux9CXJiV6vX86vp7zr1ny91k8vUC4vrDbyu",
  "key29": "3tRLpojiLxr7d5dGtabXxGk8mVh9aiYheZaHGY3rwPPUAgepb3vpsNQnnmbLmYJR4HgwgnAL4naXrA1mHVmk1jeF",
  "key30": "XRbFvf62qyBWGLen4Qbdj8WE6eB2EBeJ8LHSegWWy2fEixMmq4Jcvnq3hu6P9LxsBZGpZ2DRFWoEga2k84yDY8K",
  "key31": "5PbhDAPbEdQTqYMf3CtwesaHGaMRAnTWMgUEcZgukbyZiyw7B8ZX3CePVdakpGmubY2SRjjthy6nuL3VULPA4NHf",
  "key32": "4mwF3BvFCS2hJLaM5WAKJGvJpdJqxz1Wg48ZnnFfZsRPdPnRrbB3rZ9DJQzYKVjgDc2FxztWu1zQgSADTDDJRyyj",
  "key33": "2W4FUMt9P5b5dP5BdzK7rjb9CrW4vpywHXNtet9D5PPD9BUSS2ZfaW47ijCQQK8oyo7ogAcTBNwbxdPLyzLYBFym",
  "key34": "xJGkbwTJos9UhL68Yv5kEQmvkBefBb5XMWmTTgefKVpCaBvYkDcZfdEjtebvw6ECMBfG43H1MgtB81p5QTU78sA",
  "key35": "4uGoLrAyJYdq2xQaGZJW5VADjed2QZKXsDakxM8RgNknXmiK6uLywmyoriDkCZfD9Szt182SqRRBQBSk9BZupxXk",
  "key36": "3YutbUFsnNBcogoqH6gjQDZ3PCRbtF95s6b3tZ8aT73L5xRHpc2iPoobJfUW6vZoG8Ffnp9Nc3XMvN8QQp9H9B81",
  "key37": "3BZPBHmeCe9wy9i7LiKTcJF89EMXaR2cz6idyRDj29LgJn81U1GErHKdZgkwt1pVBKNXyadp2wQYgTVBWtJ9UWLM",
  "key38": "gFJyLTbeMqL8GA2QD3pwob8jJLmaAdHM9zhr3cb3FpJ3ZGENLtkCcZtkUZDtxceCFTmMDWMNn4VNxgkEQfFjzPV",
  "key39": "5gZd6xbrLhPYzmz4CaAYmTqxQfiybPhG2sbDToiz9UY1KLZT8tV5wEmmKQ5YXqPQCYE3RonwZQ39V59yymuo2kKz",
  "key40": "4P2txquBxjDSj5owUK81FTTKoEZx6ZnwdBiR9pPyvDrdqsFqaQzgEDVU7h2kwHVpga18gJNEgYUPipDjfZWKoGgo",
  "key41": "2oZovSUjZWriGQq5Qkc7LxvZ1VkQzzKHRZhxre8CxAcviiJdB6HDgEX542SoFBRxPWkHGgCQ2RzHGiAd1NmNTLdB",
  "key42": "2FdHbqgTwuemGtb5XQcdVvLqoHuoQQFnHY2dNHiBwg9bG51iuJwhRB6WHwiuxHr7eTho8EJZjjCN6rBoxcwsjsr8",
  "key43": "4rjtiVwuNMV7qxvP4pGUqBbr7MiuzoyygCJs6Emgo5SryL8axKDLHgv7Vd61fUcp5YRzhMk33LS8mGPUoLR7m2eh",
  "key44": "q1mD2gcQ7S9PfitXEERxbGGg5u1U3Bp8YvsFfAjjithMp2RTPE2DUJdaH22nc8Xx3UmPMYXwRbDzrc2NanU7VNH",
  "key45": "huMvDg164YFcAy3jBFPqi7vHb1UCpciRjxfLAa5cpQeFhHZMwqPbgYYqtgDeDtFWC4LQpb45pJUZwvVtKxrfseN",
  "key46": "RCHaU33mGABsnR47ftbKESLwAmmfK9MCbJZkFdkkzx68Jb2ZYEzVRi1H3W5hsAYhUYcaS2pxGYUJGJtrv1BbcCh"
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
