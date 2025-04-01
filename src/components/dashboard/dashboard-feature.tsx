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
    "3BpxgzYb84cEc822RHBEkB7TcxwbBbcLc6whkpLwSeRdr4VqvuCEyE92HSuRVLkUaEnd1DHeMwfsWqmZ49vgecba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mEegSMVG5UaZnY8xHLK2JMJpXB2kziksEysWYSLdJj5hBJeeg3JBkLrdTQJiUo7dAJtJ1zFrm45tkXfYnN7s5s1",
  "key1": "5kZyu6scRGEuP2zXs7cw9otCWRt4DWE53V7AyMJBHdZZRmwEQ6mCDD3v9exyFe3YkUUwkG2SKSS5xFjeMStMwXGW",
  "key2": "M9E6V1shFRZLUrJ5GsyBVZT1xkPqRyYPeowtj9fT2wJXzY1Kd6JLsa24hu5k3v9CKFygJM1b2XQT2U839HuSkqk",
  "key3": "4pbNnqu9wc6o2Qt1MT31M9mJqcBQWVqxsZ8oUUyoqDe2F6ToPoGTHjktetP5QWft7C1uFVagDzF2FDXTQtaQ5zxc",
  "key4": "5ocwpJqc41nAdtZTjeRZ81XH16tJKYQk6Yp4dUQ32yJhFB1fFwPXUeULPhrfvSkPSuFTWAtNdoh5dtePmNWaKqkW",
  "key5": "45pGbYYY7asAY6eyxUmzHBDhV2hb7kmUi95mwCda4VPLbpBUQj7SW7XRgNBJcGsscUWug8x6SwCJUdJKdgsZwFwn",
  "key6": "2gLLEhDNmiJfjFLCHevsBQef78wMB1tFng2xwnCjaivjEVS9oTLFU5K5BhbJXiT6kCkQ3BFocXSsAuYdorQ2pMx1",
  "key7": "4a4bb9CSp4fN1iLmzPwTew6ddjWKH4Rd48QzZjdB2yUzC7Lkx5zBQeakhEGLEaPcQi4WFC8mC8RVJHxUuVb4Rp8C",
  "key8": "2we6jYGxQhkwESfZLKoeAVD9hC1FAobM2GrVRgvtto2cX7CDorwEq3ZqUDf8YviDETWsBiVsaMqttgQ7yeozA7Zq",
  "key9": "5w573dDoJKxKRwTFQm5HtsMF4DdeCeUXHVB72x7uJzbkZMfUSpkykTfEdmdu2zdo9xfkEm1pkF9qQkP466jupqzG",
  "key10": "5VPkS1Hn9duYTgrqTRoBMNKLCN9cYki3nBm4ePXG6or9zrTfHduvhKaQrk4kVtXFc1898S87ndgxF7d1mdRRH8tL",
  "key11": "4cGHYBQoXL1CnZJqRafxT69suTa1Ma3vvYSRhZzbY3J4k23ZThznQh8PWFQm5n74i44CpQhufSnzfAUgAodiQd35",
  "key12": "3tkacsWCTZy984UBUjo4zNBFQbpimH8oS7epze6ZXFqsHKG42ohX36CvP3NgpoZFzgCr9fSymbWJF6cBxt8Dcqr9",
  "key13": "5LgoQd6o3HpXc7XSAMPHevdy8Evn8CivdcJakme4f4W81dGWwiav8z21fxUFN1JoapiXZ3rZZiBS7XmSVsihU3NG",
  "key14": "33fGbjKAZnKharErFMH1nr5ugw3hwBiyNV4DV6hEPgq8NCMpoXNWiVituhvBwjffkJ6GsY4rDvwUMkkouLQ9oJNd",
  "key15": "44iqRa2BucwUSKRbDS9AdrHgFBSE8Z15ebN5fHyBA1Ud2pyKNvNmhDZHRTNCSsfJN1y8oGTrvjotFD3oqbvGxX1B",
  "key16": "27N4BDbWDMLXmM1BvcKNGmoai4xzmD46Wxx2Xt3SVpM7tNSQwjvDXQnuGbVqYJuZFhktJ4XMjoJ39LD7sTo2EHkX",
  "key17": "55Wrns47gDuUBSq3DwoYoofYCGHyMb71eT6SENLGsdFQ98XvNwdueUgg3qpW1KSh17MoQf3Px5gQZthwr1qxUvsi",
  "key18": "5TvnU5v19fGhUPZZyvkdq2dcUcwK5b3px4w3LUMm2bAQoGHktovEMgSkrWsa6bDune2FAu9hqjcmWXh7thJbaZ6T",
  "key19": "5iWPNuTLuqGUrBcTMehM894ddEqdCMWfKMeCFowueSgqB2EnK45CP6YR1Ke2oNZ2XqKVdzJfSJto7Ftz4np4PTEZ",
  "key20": "258Zz6gF9gGNuX4JoV7cWcLWcYqAHMvpUBCAiU6y4Qpd4k8de1cRtmosSF75vAek1chh5eAa4jLwMj2TFrD45sDv",
  "key21": "27Hf9DEd5PXqqox8n84FYhE935tnXHVAKy8eVejCRLGBMQc3ZDqFbYsPccx9sHwefJMVW426BLkMfAUkBPG5gYzX",
  "key22": "4dzbZRthsKS5aVjkqWTTqPRaCFR7ZG3Uv6Afa1nVvxbFVsBjFz34XUkL6ow7sPiAg4gM1rpo1sjpaSSrxn1ZZB2T",
  "key23": "2mKjcceRxiP8A39Kw6x9XHxZKQPWyGE2yTbEr7Q6BeKKfKFBL4Vr5QB4CSbvxmaxaZTrpanXkGDMVw9u3TJedhzj",
  "key24": "5u41ygb9vGxprchu1mGhETsKvuRR4t8hUpApUPfbUvVYz52vvFj8jXfcvSoQbAqAbv2L1CKK1AgGG2kFeCA7xvVr",
  "key25": "4GvPq67d5nmEv3bcF9oBFjWVp1bjFyXaT9WJizDn56DK3zcQURmbQJKEeRdoWJ3VwdicEQB5MV1gYWHD7h3vYM9n",
  "key26": "5gHHvvE8C2xQL4p46CqzMUtcjyGCtYP1uAPZTRVv5GZqntkAnFwL1ymZ8dWNGhshd8pHkAJJEyWAezWdGbAMEo1k",
  "key27": "3LiSAn7cJMuunBMRJv3WHmAZVN1dHwB6bbGptiPT25Uciv2Rgq1kFgWiR311LiwVetjAYJoqS3egVqaMwGNkFch",
  "key28": "3xSNwzDkqpsE7pmoFJDSVBiZh2sqYsaNeYJ2CkxF9xYryFiTb6xsSsypsBXh2oYx6bZ3wTphCraba1iEobGE8Sr4",
  "key29": "UvbhRdm5GM8hTkZr4Qvkpnxb65EgQ3PyfYhmjBYhdrQkyZwNMbzvrm6rQYZ6H6oW7wK7bb2T9AY8LwXZVKDmw2s",
  "key30": "EEzJg6cXgXdA72PayPPWLdoeVvfFPgM3wKM7bB9VwNk6j6UnPtQn3cbNvcnn7zpm4vAtEkfgPFCGSCmWH5t3TYn",
  "key31": "638GrDL8wGVPcGwuKrrMeHDTCgwQvt68N7AGzpkNjtqQYYzRcwyNXAmXQ4jow3mxkF3PrJ46zqeQsrSzauFBFHtN",
  "key32": "3rn3sSibn2tVUuU1t43gWwRCZQTjGfUCtx9xujcmcLmy5L2Vgfrrd8XHx5pv85v7xsUh9ydxFTrxkNx7YjAZSs5S",
  "key33": "4wMdHj8YUdxhzGgCyLkKwCh4DZ8t2tY2UCeAnHKrQezThZ3QwMkwmnqo2nK5MYCTSDSisxCfMPwUS513fsiQjT38",
  "key34": "582XF3XM2LVJjeLiDbdCtvggGM711dLTLhoTwTDQmpJoM22WJiYmT9d6KA3UyKz8DTtw8YKbfftCtC7gR6E9Kk42",
  "key35": "SFHK8f65FqpgjPA8ZJkBwqW1WcNZU9PCaommSAg8Z5ZqQzmTAViMDmAgarJzLEoBNuN83VWba3UjHmsKE9PBMCe",
  "key36": "2k3vgRLghqu1YcJCgBtZHC1kRkQgVzN7UXX6AxqkjxsXFF5CVWhHiVwVa4cz893ySHP4vSq1BCkSvpZCxtEUvCoP",
  "key37": "BxJwXpYPQQYCBKULKzaM5tJpnSda4qTkqfNEhq7aPkqDFgP3ce5JpzyG6LXjkiap8pyScV27xotDQbgtmHc71ic",
  "key38": "4v5uC9LFrJWhwV2697TeErXwMz32yHd1iRCMv6vJWc32R8LuVY771WwNajt9kWjT3Sb7cWL3X8BYWkaoAEYoYt4j"
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
