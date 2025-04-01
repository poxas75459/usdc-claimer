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
    "3rZryjbMDJFypGRkRtGvyDGV6vwqgSTMCZQgpRfDJy4am2x6EtsmoCAZ7wQCUxtKuZiHWufjKXgZuC49M5gzWWv6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Agn5gFW1AjCHQuzECmvcjQ4dvEr5DfFBcNv5Nfipi7zQNtmgNtjkc1aESgeundF4KNTvqYtjgcZR3q8jYs2UuoN",
  "key1": "2m84MHYbZUgNhyowWx3gzJbWEwoYUEsvY8nF5K49SefecyaZdKEgh15waNruZ65g1hYky2bg1KiozUYhiZcRwzPo",
  "key2": "5fDgH6wvBG2iwyVQ75AS8tCLtbrJFFauHXXMUQ3zAf44bLkfjg7CkAxaqQdrxYCdrs8iC6AkXYe1YWHt2Vvxj2s4",
  "key3": "XuBshYuzdM9DyHDwXxNLFANVkUdHRM9K5jBZ1qkP1bcZG1YWEXzFirkwYKrEdFjkTzN4csoDEGUtCfib1gex6kR",
  "key4": "3mRU8TZHiJXwcmgF99ho5moJiE48FePA8LmzQX99K2yHdShDX8EimVsgsGBcfvs1EEyd3eS8PVPyugmjq4jsroh4",
  "key5": "oAYdCY3Agea448MHvqcUWFMr9ReESyjsNd5ddkaZxdPhhS6KQEMEy3USVP2p9ERuKtyo8fQpNsFVJmpR2R5UQkf",
  "key6": "WXQ1sgo145PYdi2whXChpdPDsDy2vECGRmwghEmwsSYRRfYdu5JwpCTF6h21HcLPScP9U88cssahMW4MYgk1kMr",
  "key7": "5BQqXRpSTipXkyHqyZwBDwdR1vHHfxs2gA9ttHkJDY8zxgjEPpAVqbFdMcZKQE26hodJSPenHqRK2zv2GdsYmMav",
  "key8": "3uLne2SULRvPYmF3myPR6YvsT8SrwC9WSbVrhuASB4i6GQngbjHkAo2Xt3qWg3pRatSHur3oLAH2jvZtCqXew4T9",
  "key9": "5kjemHEc9LAELi2JAD5QhXJMDPVBr5PV856jfx2tRSe5ZJSQo3vjzCxpnntBjdwY9X5ZQHq5JyUv4W2qb5csRZWy",
  "key10": "3L5AB1YSzrEXeSDWtNUprT41mW1cSCmkjFCR6eQCEQebzC1xR2oKXDR1NbRguwjFx4yiVkjCiVSKSLwVP26XiWKL",
  "key11": "gY5ykTQXqTaWJ2koBKmwNNBCYweHkWZv2Q3WbPuPW9d19Hn6Hp4beWM5HbNFKXRTd9N2xsNUmJaCzS1zn3ShzQ5",
  "key12": "4Y6tPR1LfrePzdovxSdFa449pHXuRypcfzpEfJozqSK1UAhveHg4GKzZjhHkBY1yVnfcAJHYMsh8Kssk9yoP7Uft",
  "key13": "5NJBvYnH4CwWs69j6UituJfDxe5fCrBoU2ANtVLAe1yjZxKoUEscUzKmYahAf36DosbNE6JJ9QjkmyC9m9EDoTyG",
  "key14": "mFaZ4tLHzZ4zeB8BgHYAsGtfkk4vRJZT6JF47FRAAuHaTT7ZipgXZMS7qGuyvbu5qtB7HtWV6yW81VWLZ3xdiJd",
  "key15": "64p94wqwixhAUG4PNmv6tKMuVWW7Bpi52QZkAeVoRiPS7VGXfyZm7bg2QkB4VXpki8U8hY8K5yLGuCpUgsNEuxXB",
  "key16": "5Cf64MXAZMhvqhXn5NKfJqyodqbHRpM5f4ofSXweApVuZzhVsgfhjXiHWqNivsp8o5v2YFD39MCwB6ftyjjsSx6F",
  "key17": "4HbEDXKnRPVNyhuBB4azeDCxbxJ1taGkcy7SNGDK5aSSmxcCjs1J8RDpcK8Jgr3eKZbVFKBScGPpKDm35RPh2rSU",
  "key18": "3VKnLa5WfSPPn4shhtbLevfzctq1RG769tRNevSk9YvXn9H14rgL7GXJob8TtoJdBoCDYdsZiGuGiVbwZ24cfTTY",
  "key19": "54pHKbYDyGdxTiueXqN3jUVq2UeBQAPgZ5yPtKR4YeCS4pY6jn2W2qaAjcu2wStu6auZycna3PN46WT2kUxGuopx",
  "key20": "3t6JWDm18CBe6345DrpDrYcLXZ3Q6LvxNg3pivGBhvZgbFetkNuChy1exukeC2ynCW1N6JUZGwTJqRg5t8x8z3p7",
  "key21": "3USvYgifKG6v2z8HjNzKXB9UHH6DRTGjpAxnNkGMSkA8YQEdwAd9oY3VUAWs54YntnPQC9GFqHbugLboqqjS3WuG",
  "key22": "66UvzEcvvS5juDzbYv4oZBbsCz4edAnDiW5SNCnVVbQ5fGMvQPtHqf5jrPnAHZXpUTPopsJBDQQcnurS4G2GjzR9",
  "key23": "54upcXiwNRRtK98ykHSNjfq45C3cih9DXnRDroYVTHokJe66p6quGbHxnSft6sG3sEWx2QkLRis77eJyKoC7BWi",
  "key24": "5fzfukKvSNLgxqNsZbUuTfjXyrJkGtCoAdQyBFEmCtZg57dK11RGSbh9PdrWPXrRXWheMQjFRogaLstzWtwJrv9b",
  "key25": "3cpDGDNh7LQpKDKJxbZ6fNMjTqk2MjVqWM9fFgdwSrYZfwy12MMPUyAtwHup9VwVbjYgcZ37bAtTTYobeT3nq3DL",
  "key26": "4TGjZZKM7Jy2jD7WXcBmV93uPdhJhRAwTGjn4LL9GGamspudNWh8EBh2s3tTsRzQdhEp5Sp7fhyh8kkmo5jPoYgd",
  "key27": "kEyGknZADDGJnC8rPdDDdaiBECPUb6fdrJKeeeimXVTwh1VGjZVAL8c3JADkLzDa7AjphLgN5StbKw55BhZnL6b",
  "key28": "3cwwMQA49PAhuoUDUzfDHitoDcg86UtV9bTaV5wv39sGupncNrKmSa7bDjtnuGMxsd59KBKF275fsw5q6vAJbnyS",
  "key29": "2J6RcvpWpKNjy3WwnmGJYJhCijYAfu5yDqfSG4iXKciShpi7V8bF9KXGXAvyb1tnowVGD4BmKZvS33VXNEDn5Kw9",
  "key30": "24gaSKuFW9ocdQCENpdKkuNVme1QU8pwdyra9hz4xjwivkqa3SVgN2QDgPxaUWAy9SxFy55PqHXHwdVzDCfGbwwF",
  "key31": "3UTQ2Z4NJrYDLBe5yDj8PU1MqNqPRb3iC2FKgVLh7gUN56Z6i5iC4LfMkwwg7HRpedWcP1daoEcj9mhj6mfwihT3",
  "key32": "5QMEeGP6mMBvtF75jq2H88JzdkMGupTsNpC8ygWDiELa5kbgUf2ovAzvbYxNJVmk5sJKvPWAhmvLLgAYqebYuzwf",
  "key33": "23CWimh6LxSFaxiyfe3Hw16ndaki6ooWFXsA8oqjoj78zxvsRPbZh7ebMiJjTcomNBwBSv4WoGoWBYYYCHL8BG2K",
  "key34": "4cdVbq4KxvLkj8fYQe5L4EGSRGiH1vYTu3UnLYX1a9qfrdft52xbEuH4umUQTPDQzL4qj9eD4VRFsp6iXgPNX1Cw",
  "key35": "3t8UE59tg1iaLYRivCRaSTJ2TryjiAUH1UsrcEZxcojRyY9KdS5MFdZ7aGoQn9cN6Kyh4YpzeP4HLXp2zjKyrMRr",
  "key36": "2JtawVg553W93th5WjUX5q1GmQEg4m9RrkSXxJs8Epx4A7ghzjFaBcdwdJ4Qxs9HfRTaYecLzXHPv4ZskeJy5ZXc",
  "key37": "2Hfi39zCEnqgmfPyVxbWwjYzDS5X4KywtehA8tnUwNbfHCfVKJWvtG79m3jD1bwee3H27oPcw1BEcieqpFvaXz9t"
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
