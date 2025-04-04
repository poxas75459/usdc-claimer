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
    "4bmYLTptRwjy4jB4N9oYiFpNec1ati647GausBgETh9LLYFc7qV1VsTmk5iUGdr3j3xxzThdVznCrWEP5PhzuPx7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gDmVZuAkBUr23hCQmHDMkzorG1RrNsBEkzpFRs5H1SqDAv4L1PdvcD9gui7bW2ZD2XRmnVFXB8h8WP4hAhnUwbZ",
  "key1": "4QR83j8wtWXr351AhkEdFAChtpZARBQn5xwqQzVf4Tn4pkFweq4cKFGwSRKvsYy1iC3rKJGFpRqXT3WWxG52Njjn",
  "key2": "33MWGdVMJECxDXNDh6dJuiMVPanYMiAZa9jrCiJfq8DxjTFE68jFSeMxbvmcLnBTn9MvfcHbDmCiA2vDrJV95eqb",
  "key3": "54v4CrQGxUGFdFDyErjCzdWa9YfREZSbYhFwo9r45Q7gKgdhqm5MRD2WRFuiGJEbtxLMH9QBC4jJsYVsCWxnNtRg",
  "key4": "3nKT57ukm89uMn5sFjzZ4PXwhZJ33qA8opHvvAZ9QEJdGTNNGvpJ5nhEnZ1gLvPSGJd1sSTNrq9YvVzjKJDwaY3p",
  "key5": "46BaoHb2qa8F42ovHMFtrShqDqh1tVPB972iJ7T1ugtg5Hpd5T6jXP1Koi2c5NFMjxwapmfQCwVFCfjcayD2uTzz",
  "key6": "56heJ31Z92oU6Zih4XaoZPj7rMF5ogQewfPc9Pmmt7vw9t8McgAQk7WiBoDZvC4bpuffgxfdFR6BAj8U4rgGduwy",
  "key7": "5bugrfBL319J2dPRZeAYKbcmCWu2iuBWoj6asu4xfThJXgM2utZPYL7AWh3EmJP5x6iCfWvAFjReJ3Bn9HQiwBrf",
  "key8": "TjyDbYuizkp7Z44THBhaaJx5UXFipeTwppPxmKS1BKW2mQuxuKCtDMFKuDKJNLQ75ML6UW9KuoJZsAFZsbPMGn8",
  "key9": "4du2ANqAcZBJtRcTxjX4dkRgQWzsT6XU19fmNZkX4T2LfqVR6LGW8cA65n5QvUuDJjrERjyXSCZ6Ziqy7sC3ycKm",
  "key10": "3sa7yZ2tVt46wbTH7nfU9jTf3TGn3SNX87kcja3E7gwUVm5Mf355htGH3c6ykSLPGswGbNzcuSupo62vyxQpySCq",
  "key11": "4va9J4m6w9BJ7s4dmG3QVDkbXJjrYvgUrSPkVXg4ADTrmXXpbQ6b9kz38PgD8A1zQcBsXzrNjiLQ9poqb52wKEM8",
  "key12": "42W3FpX1dE25wnEhaa34PE4emnWsEAGm8eZmtg9DTat37LLYcLqon6Tr7hYEVTd5QVXaNry3Ht974W9V42AkuvQ6",
  "key13": "3thByU6DpDeydDFe3kFrtLbFhXmq8siy4u2sJivJHipcqYFKKUGkejd95X7Xo12XmtZT2GCg5rKnX7fYSoXuMnAG",
  "key14": "xPzd7zaoZiKAdcydC5pjKq7ucMXWART4TP1VT6zTipeZ4eNyvgoBk2bf1mu7bWWJQyjhv46Z2wtJYyy6i4Hu4MK",
  "key15": "26j4HqGMS1jgVRgNbdP8nch2e5b4VHsYEbi7G4z1uxrpcL3EbbsKr5xKdSS9fihFqzofWV38CqsLoG1S7uJAfBW8",
  "key16": "2ziAZksYWKfFnznD94ABRSg3QFoy2mqoRbTsY48gGBKFKzS8jh8R6zVYPxLjzfTz2QbFz1WRtGrr11ub6S7kCu4g",
  "key17": "2mDF3SpTui8Kv1qPUUpJAaCxmLv6w3K211tYWthbKKTeNUTkmm9Yq6qo5jqFH5k8BpaTEBWrvFSRGWjKALQyrrZB",
  "key18": "2YfQob8fgF7ySsRsEWoFaFTg35r1dvSg59UQLTzDSTbEX382ajPZUdiTt746EpwmF3sTY1kV95GbNSDPWTGAe1FV",
  "key19": "5QNeT4ZYJXiAW7shBne23NZsRucQiJ5nT13HytbTfVj2hxLrzWFQyEepQBrtzafSRHEU4Fa9gm9XHyLCUmotFEZ4",
  "key20": "2HavXrvc8Q7ARnPLiMZyTozydmyZvZVo5QA9ovBZPubJYVnKwR2bGXca2WLPQ77Pvg5GLQVEFGJ2eA3aE5wrMAro",
  "key21": "666uU3DxsEo2DKVrYZV6uXtAAosMqvSY2isRVnZX6ePXQL52oQsbwy4PEWiTER1WoUZutwsjf3Cv6zV6X9b5pEjn",
  "key22": "kw7mKKHEhwYLvqokE88GubLPRq2wZEiu8Q5Qpdv2p1oP2Zidc441itFb96FazAC2WbiXutHGquAC3LRCyedRWMf",
  "key23": "4KLa64hRxGKqnz8yd1czPouMjreeMtQEcpLC5SER2gHJLjw8WhW8d9ZmVhA95sb4CasHpSaGc72ACt4ZXv3beueM",
  "key24": "4Yck4kf2MkBxTjudS2JA4TB27KBtbYerNATARFAU5eCyUsu8TU7wz3msxCwyqjAEbhgomWAN9M1k5ZDozzxfiBnd",
  "key25": "VyjyqZ78dwqLx1hSVB2XrBqQRdqXkFk5K9X4uZUwtKunCGCL9FtHy3bFgLyJq2ppPdjqsc1o1x5xMgV65SKH3Bk",
  "key26": "229DHwx38U1deYAVF1HrUPFDLEJ7H1o95hsiR57yrJUGdVxU8uHbyckgZfVHJLZMoaEeXeNFhFC9gLHh1zuJf7P1",
  "key27": "2rfJXgBk45weT51Mwv74X7uXYygC6G9Yv3x6SNYTRMSN9iiP4cziaFjMjLURVWcyEyzsH9ygDLmHoguj9t6DkNJ7",
  "key28": "2FYcnbzMYPHJUa6pC31uBcD6PFfYPspj9QzbhZbs423AxYU9CJX1asfZQo8tFmykWZpRsAuRGJ2tYAS9pXWTzH4r",
  "key29": "38uAefFCYKcCmm63wcegeo7QbvqadWEkUbKJgNEvDjgxPUvkiD5pYy4L4Z27Yv766jmnZTdyf3rXknDzSZKMFWyo",
  "key30": "27BAcv4mYXiAcWysNfHRGJfxCvxHqhzzzFzLRXZm4Zd2TZYCZyaFQRVxBjjiRwajhRG3XpJZ1y7XK41i2U9FC4xn",
  "key31": "pL4odR66h5vUC6BzkbYaHkYfX9dA7YSfpNhm7mhniAGkjkLwmtXcqMREFjAbo28rBjVPJESK4aYMdChZF83F5K8"
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
