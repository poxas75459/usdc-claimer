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
    "2DK15k9mYskjMnh3BUqhCr4xpJtREZsf1j3cfsz8BTzBudQbVfBa8EJjyhtw2S6VSntqVjygwSLzXuV75Z7s59Cd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tibJZX9UBKswr8B9bL9dxXwMUraum6G6C7nSyskcxme4DftAdR5wNfhBjaRis2Cb6rU4t95b7mL5jNs1ZF1dFop",
  "key1": "65BbBWoDCxsjJSUCSxnfAzFgAdPo6MPFuYYVizZoAwZJhVwnJwtfvrVPrUGRHdwJyUAwS5V9XHmPEsgMkJvAWw3y",
  "key2": "zGhmeVJCbhdLmq3Ds4dYeGBmu99fjkwdiqqZ9Vp8B2LAmaWGJPjgtaXYCvvSqrGpV3Jnnzu5GgoL8B87o1uyJRG",
  "key3": "3DY8WVn5k7mqnzFVUBtJrpkmYWyY7hEoAAhidnvXtXh71iPmdUCbWM1qU2ZV81ZqniLuom4frHpYVb57KAbb58MS",
  "key4": "2R8TNsFEh67SKikGFHfiVj9XQVF5m4KE3tgJKzBnZwh6keca9t91e9SfPRU7NvdQvGw6mN9ydcPnoWiTZz1JzMXB",
  "key5": "4vJxA9f9CRoo28tP5UKv24U848CpKXzmESJWXhTa2MWiUsGe26x5ppoCoFEjyaFvZG2NW2dWGBoUeLQn44UfkFSW",
  "key6": "5vtGnsDLHEjtBJwvzrs7wp7JTSKfT9cQX8zB38XVYKp9Wi75SaDjMA8wz8qnEtHwhHNBBnLrfCVEXcVrKhB4wptu",
  "key7": "5eETrcR3Hw5GKkQaPREcVYi6xpcbxkfEJZxJcBBna98g5ZjSuzfDTUHpLr9mWFXo9G3dCpUoFiNkQ8z3G7kdWnTv",
  "key8": "mcnJ2mUnzdGSfFLsaHHkANwN5zLYnjmXzd77oTmWv3uuYTYfj7PYi3b1BcgnzBMnPjHH6ZZLZJ178RdoZp1cxSF",
  "key9": "4o6PCXcGj5QNgcxpeDagnDLrgzmKxR3Ma7i1NKVw4gEinziQuD5PnZrZv9QFjyEJGjNYy8rcxH15jMhWgDvJEuLi",
  "key10": "4gwvCBS9gM13s8zdRA1HnC6zuxSukbqs4MjWFzpkXotruVb3LTZFZtq9eP5fGgu4ju7jCRK2Ex761zVXWgkiDuoT",
  "key11": "27zViab64T6pmFMibYqfEAzqWfxhTUN1c7EBafKgzg2ufPSXLK7cciUTGxBnh9hfg6eCwCBHNVX2gujTZ6juRYCw",
  "key12": "2gLzqcNqUmhJ87NMNWVKMKR6xEJBpr35MR7tScAmJavF3gmeJBLUQ31aLWJ2YPePrZJQiH4L3Akzz2YZjcCp4MC4",
  "key13": "3zNVhxJq69ZqUGpjs7Xfwth2pgFdwq58CFA6XAXWooTtBv2vJ4wxJeXcq6MuMvqHxrgPKgYXT7JeCfigHrFDLHCn",
  "key14": "2D3CQw4MVsp5dHP7Rbns5huGjbVxRY87H7BxyrtvpWp2sZwLQTgrG3cy8i8SWwoVKyc2hFxtA1bq9ge9z9NTaHNG",
  "key15": "4KvhQPwNJeWymeX43KZJNXdHcUckDiUWctFPHEtRGn9smiW7hzbzCs1jm2WoELUwPiDhQyCYTfJQZGxjyNahfZ3M",
  "key16": "2PiECGXoEXkaRkrwoxx9fjYjyuM7rhxkHXgyUQEbvFcMR7deq5gGhZAL3TLxVKy7f7fpRpatTVUi3ZydJWgx6ZPQ",
  "key17": "33hoaftz9GPQkPM1njmqwAonsZKM4GjzaJrHommnUVX4fMiAzmwyWZfD68tjxSnvHqJAuSX5PXqkNmxA5Bc1yDpp",
  "key18": "rdY9sZRHT7TkrPp17BkRAQ5a3pPS9mntYSdmMosDjEiwjwpgJpLRk1pPHFSW947dC78wSddSgLHrULbL9yZKoQX",
  "key19": "KJzNNfJkhywhSLxnpg8i7foG9ZZNpouhuidXzFejQaLUVrqzewW2cpuL9Qvwx3x8EPwuppkYsyyXq3waQVv5TG1",
  "key20": "6zGBECcX9RVsowE143GZJunJsURBWdpbKNeJFvByc6WnbtVvYz2yJLgJYSy384YU4N1uUSk6TZushxr6bPiT5xD",
  "key21": "5oPrTkVwTVpxkrYdVA72iKYqV8zac455Z31b5irMeqWfxFsqTLzAShijz1j4vusYtxnY95WyiQCnowrsqoC6enii",
  "key22": "2Cd6WEcZZ8gsy2HokgeibAKM4gYznFVV4PuWweqpLXy2MZzMzDcLzNonZzH556kPDhcCu4qHbiHDqAoDuTmGJjzo",
  "key23": "4uoGNkqhqWS3jsQWUrKG2qHDTAB9wpDuJGghWmgoCpkNVjwUrrwdFXQ2B2TZZ4njVsErjKm5zFmFGXTD5FU7N1va",
  "key24": "4f25CRN1T8Qo4Mbt26Ck6jdGhmxT3K5CrJ61ceFC1RspXsWHEHchMgKBJnRV3KVFVqE6Bmzio3iorSNpKJTNGPoE",
  "key25": "2oCkAjxTfRJBW54g4H17EhuemjHfv8PDhCG1erD8kE9MheyWepaPBspwJC86ZhE8YGMdgyWEPiEUFjyn27n2mZ6P",
  "key26": "4PQsccddXathyBEZhU7HhQDGZ2HQRkQNk53p52A17YeFQKPtJCggzsmcXjUNQbyNcCiFNVgYgzHtERdKzPaHUnXy",
  "key27": "5BnJRJwtR1h8n2Ad2UqanpF2mNSEeZwyJCoup48yUSEEQSHgv4EAtPZ6kyWXDi9GhUPMxzELJmzueAW7Zaf6B7bR",
  "key28": "2JqPVcaWchmkVyVcqtnJmqSFQBQMJmKnzUcRccjEijkd5jpm3ypxDEeui7XTRCWRURqA3S1KMFaeNHqQCJxphwbD",
  "key29": "3XgoXMSr4Qx6JGvJnRXrh2PiVPGnfynggh5rLmsv4CNQqKcFnGGzKEmSgV94Y6ZAk5buMK2cuvzXTS1kwnDNKv23",
  "key30": "2erBYx8ZbpxSYuwVkMJppkYyYPugY84h5RVYxRbazxWpgsNakRb5osL7QmPvQ75H17rRFMZqNmfYnu8pbheR5PB1",
  "key31": "NiapnXEW72NHDLcH4kXJLd3rigD2VExCpYgFFp7yZ7uUxadAnhgSdS2n5AEVVTAorSRSyhEJfYG2dBHWhPADoyu",
  "key32": "Lmns8eLMjqXZhJGBJzyTqvsjTxdCtnBvUWPW8FCYHXaD3xq3NAxa7gnQjooatJR5KgHGpzGHRpyhhaaJcz7Mm27",
  "key33": "2XPSj3pNKi2VSNt4nLGb3j2W2xfPZKeAVNrqXQ4Kfn9xtDarTrEqqkT2X6K8Vs5sCdvHbzUBA2RRD9h6wYf18mqH",
  "key34": "2zQGtUBBGUUYmGUxWT1852ycnAhVYJMibZUKtEVXzoh44YBPsvaFVwfBdY8S2c6KRZZFkDm1is9QeJ3eYVcy86Ja",
  "key35": "4a1B5Z3szapPh3JAXi4TweJsXZGHR4XJHXHZLxrexDsNpZYb4ysD15G6azogocWhgPV7oMNBhM8vMo5rrqKJHeCH",
  "key36": "5oXbqNBaGH9jX7ZVpRYxdxmRv1sbNXQJhd2xeF226zSNBih9wYS21J32VxmNsqkMjpG9NDU84xT3G3p6oKq3yZtN",
  "key37": "3TgmYfD6iEvcngYTHDLYdbuyiBaq3bupAyzjTrgnhorzjiZud5EwXREvwebPwh4Rr398xzsgKPBLxvq8iHuYJf6A",
  "key38": "5ECJM7FgTAA6Evf6r8SwS5xNLSttU56FbQKj3KL16R2FaGuicmaFcSHXkGz3wLq2QyyJYd33xiSfkKykzSm1qRar",
  "key39": "y2U6sbN7cHF5P2KJWhydhAE2sGsw9eheJ7Ht8DcnKCSu7ZwRS7i8UbnA8tMLDhz3rYMbrkTx6eHdyxKGMWnX7vv",
  "key40": "2KU7V8PBBWn8z1ar7PXUUqP6guBCahVkbkqLMv2PLcCcj3P5P63NFMAcqShYCRLDgd471THnwWTwqJeCMPkdzufQ",
  "key41": "5ttgK6Yv7ynpHK3SMyNTvzkSLW2Kt4KHmERYUjhrJtY2BoHACdecJJ4V7KBbieiAaM1jcudmaSrVwFb16wLQfYf9",
  "key42": "5PdEgAoqWXe2USHWHNpMYBzxDSyJg4tqTtpNsBfv511GY59YcpyLJyRxqHcRNuF83wKiVio54uABhzhKDFqYgEmq",
  "key43": "5tF2vXD3tuWYYNyXJfZWUDcDJah1pUCCNPGwTx8eJ1Cqbs4UBBTnuR7A7wpBSvfAZMXfCcRMh3KjmfzF6uEdo7rN",
  "key44": "2jA52K7XngqBNTnWPSiXe7KnFefitkcFMbiuXZh6AezWRuzHPjiNBeLpNhtCiK99fe9PuHeqdNrH6XDssrzStf2Q",
  "key45": "359W3NyDy513tYt596DJ54dCYA9CuM836UmofkHT1EErfnWzVLjiyYxNefPNYwpku8229CoF27sjn3ubAQvBRyXx",
  "key46": "5kgfBhVM3XPQKgPDniP9TjNG4zoAVs8rpEy2QcL2kHw3DhEBsbHCLqYZZyNQ93KfUu5E5AbHSx3Yrs1wZHXLhZp9",
  "key47": "3C2sWhunjjtEzxjkgvkQZGdsMfYB1M96NWwuU4mkbJ3bRxz3oQExJ5z169L5FMR7ZtzpGT36ZTCNMQGn7JzUn9Yh",
  "key48": "5dMRCfShXTUcHzTGLSJxDk3nNgx6Fbu6rQruAKzYb3RL7svMdAEx3eXf4cNhNZXeruFwKNKWWBvGffS8QP6shZPG",
  "key49": "33qYo5FQdGPwzPQ8BGXvPXYcQe3QEGo5EMxTmFYt4jhgKS1BnDkcEqTDhbwrBvjhGcVzLVSV2MPjsGYWg6GhbsxY"
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
