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
    "4h1Q2FT4fDuG3uHxsSkZ7nL2yhSxzLQbx7nzu8HExK3eb7CEH9qdgW8M5GayFruCegczCW2TrqaQ5PTLwLaEJp2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58Uxjq9Z3seMFBBwsPjANcFzqkViR6Z328eKuCGVdAgXMsaL35jcMMrSKhPSefSq81kQfq9bcVXFZ2WZg5zeVRQq",
  "key1": "3assyAZUsfFSYBBKvBQiwasnRoTE3QEARtXvKaGuwVm6LYBartyDy2DwzbDBkTXs3rD5TJrg8X9nExNjY6HBYwCE",
  "key2": "3QxCQp23WcJcNRwQe8aAp6LCxddjfiBoAWHC1SFj95uWBeMoVUWDCdnGrYBpYwhQV6DEUnr8mWvHLDn1YjuEHDur",
  "key3": "5hdjYRWXHJ83MzJgopRkcAmhxV8CoSpAsu6ZxmvK9tiKhrECpZhHDkZDS8qmat5q9uH9obYuDetM2tpmajczfG7E",
  "key4": "eennJ4KQcfPgih4YvLUXKDxjCcUGWciqdPfiRVL1yNWszDj7ySNGMKFCMbRzbTteUtfttxs8VXMfHUpRHPSb1Ce",
  "key5": "5ZcVTrVtyEVXk7SUPjCczRRZkkK1DZ7PFLWEa8PzhQ24kDxLNgTGTbqjWCEMr7RszemjU9FL1YTmYdsu6D15bgKi",
  "key6": "2BR6MXsSDFWrf9cooRoazTTQV7QfkQKKBqHQ8t21BxTfcZmPnp8TkJwoAN3W8vHsawkYTTd4tkvLUhvG7yQNGNLg",
  "key7": "41UQUj5MZCL1JpqvSzXgvLGY3X9XDj7azAWAzTwaPrPyaWT4N7WYUEmWyJ6hgv5gqvsetE3aY8SYgfgwtYNDTv7B",
  "key8": "UzVSjdrKunMiBZytvan2qS2f4svykYM24Qh7vVf2n7uqyufkPV6weHExd6VQgL7sdLC5CKosRgLbDGtrbMMe9V5",
  "key9": "5QTQERA37AotLcLr4FwTF97W9KFvrjbxvEdpikYFCsncqbax18dw4vxSJjnvavqHyGFk64dJ3B2NHPR4hvR59qMh",
  "key10": "3sgirFjamtRRdD2KziGVyFiziPcC6gGC4bk1y9ThxGVRVaR3ddDhnn3cqJxzZ9U9UCspoNjExQtiHoBTS65r9maj",
  "key11": "58Gi82a5YJLRQaaojrYuRP8zsgd6vXoNPwysp6RNAE9Xc3y2QAbhLYiLFAQK3UCtG9DLnWH1TGi9DRjm3cYnfYbQ",
  "key12": "YYdioi8Q3RcZydHv9UVWJpH4khwQMoiqFAvvU42MNcFvUsxKPpfWe6JfGAN6UjykZ9nrNdBpFb6VdsPF461wGfB",
  "key13": "4aLfcR5Zv1BoDEVDNN3HwioYQwN7qu9hbaxAa5eiqWe2yuW3eUH45f35HDLcbptUm79tj6riunKSkdRUfBdz3831",
  "key14": "2dRj2e4s5goKDU6hEJEmMspo2QYRXK7SWiYSJTFj2JL1jRgYW53wtybrSVD8sVWZpmNN7dSodJN384tf7r3PgWV5",
  "key15": "2VYd6v1etEvJaFUtwi7qHHTxTr6UNCnEMkW34ew1jS3CCYx6mD5MPBJ9SarwcNJA1ZAWBGTSEtPzi4NGzvwkvTDF",
  "key16": "4qwyL68QHKT27SzWxvaDZ8N13v4WwmxPZhYQ5JD6Y3HoKYC1ABckLFEiMPUoLUzqtC3CjfuqaBaDcf4gPYEjsfDr",
  "key17": "43993YggLBJLv89fz2S6jK8wuMa1uy5nGzwqBWGm3129WU5enAtHRqNKEXBccAu4qixZeuWjBTd6nBSM1jGJqFSH",
  "key18": "5UohryfoQLTQArJKavP6VeAzEwJd8VCH9pBajtJuRgUqMogH6w1S4ZeyX45i8LepDxAM6YYk4XJANnrhBqh2j1Gm",
  "key19": "5DaTm5V8THVRRpGpyA3RSrVyys5hQbfEqJgqrDimERZkozAaiV1NqZAKj9XWGgWcjh6YkDJdYtXCwPVm3t9NzXY",
  "key20": "5FewybyXAkvG1acAgt2MJARA4Zzco7hj9xGKqb393WGao2uCZUQYUaheHmGVGe61HefAAi9Ku8iP1SjKgfQSbVXT",
  "key21": "67BbPesvvEKDyTTNeg9xSRPHsorgC1krdwaSZxhQT4FBw4gcw8QZC1m5auKcjmDTa51EkxKjX6YiKiV3MBhaLjyY",
  "key22": "4kyzLPoazdW7QaoGzMyQvuiTzDsGYo51GYPTrLnWvxYoDkWsjFUaFHNY58PZsjfddVMuH9DLSdfWC9ib1jZJ7ym9",
  "key23": "2oRirvYJKrArs9h9ZCa6JPaTDXaayHv4f5ASXsRbyDqSxr2TKfPKJJhV9N2QQA9jjm7DSfmUdbWYM8jUgtiA2wh8",
  "key24": "3HadP6BMSvRcgUGVZxKMxfCbEuwGqU22W6SNbSE1Jph94xQZoWuqWi41AgdJ3z4M8Ka8kWERNS3U1xWzbsToZ2G3",
  "key25": "3Y5cSAS5E9UegdJ8F9jUNAS3FvA1y2QUrznoFXFH3kCT9iTpz9vUmSDwx4RMY1h5Y7EnCb4TqPVBnLrsGoMucDi7",
  "key26": "3SjggkV22hrnSE7YpKyQnoC9uwqAEV3djtm4vvyiPYfsLQ368zrPUC9gzLy5oWqZdYd584h37VtHiT3KnoopMxPQ",
  "key27": "vpFB4vshD5sPKGS8JL8m8GVpwaGLrwzJJx8eiqPEpXot1mQxBMF2CuFYQnCGJPRCYNd76pNn8fDgEP2NzjHGxKU",
  "key28": "3MQ6CFfMYXsAm9G6u87aaJK4GY8Hb58Nsn9pNsq7P2iLKPBKv16jwnndpkDwpKrKEH9hq3rWSc8LeD1nuFm6RrQf",
  "key29": "5CueeowZfER2jvDjXEKW5292KgDkeKhnRXFhAL8VFSrmNqEHnFtDFHrkyY3eTGNKSAZbHBYgjxKhrGKs3ZU3JULh",
  "key30": "5s2c9nHskrH56iTEA5QLUh4ujGBUWzM2mdMnh9HE235LeKEYuzoSNyYSB8r9R6oQ9dGbbEvF1itQMgTcPX6FEg5r",
  "key31": "2ULsrpCFqNvU2iHrYJHBeNJUUdTV77LgSvochMm3afq68bmvhoSQ8DzwtjByPottjKbg1ZkkyrL2TJyrmiJgzU4C",
  "key32": "5pCtahFPvMLz4MyxyUuD8MF6QpsNFGY833mo43YgCxTadpusWXhGgb5nPYazEQb98zHmPxFS8kUKABq8dGEhPP8L",
  "key33": "54gcgECVvRZF31TcRX1exJVbj9r8ocqw3qvDQtvodHrE4WoTicMDxbSKJBKQTN8ohY7dyR8byndibH3BMNKT4qNN",
  "key34": "44Fv3sbNa1ACBofDACJxav1V6FEMepRpj9QSmM5kVeX4UxwU2nLb36x7ZnywWgh6EPN4Ye6V3qzG2VkRPEGrVTXk",
  "key35": "5GdGLoStnuoMTDQByuVKuKbmFRCgE1wPf5f9aDpbA6u5kHNTNLv13uXKW43AvT7pvjkMkkguPFfkoftWWiK6oVEm",
  "key36": "3DshvhZmLQWB7667ybuoJZMVBEXNzEoXmSHU3Ewu2M2sVCJTRbU6FQoSHrxtDBbjdw7FyW2bQMEacmjKR8v8VbFx",
  "key37": "64H1n4uwUbFFWja1DrWsermgFVB41MMroiPHAApK39DK62ECfPnp5rbkdTxV3Xrk6HcHLLuW8UEHSr5rtZ8NTEEm",
  "key38": "5Ps1JSjGMgZy2jg1VVxpJFTJz7RwjyR6T5nstomAHFmphMNhW6Va1u7KUQS1VzPEFZkp4Rr5KRajc7WTVbkN4teT",
  "key39": "2m6Z6MauekDgTq12M9fsJv6knncrxntwEprK2ESdZCjQcgPZeNg7gVDPXBMKNaGrvMyED7buMdAbkiUtRRTwjiN1",
  "key40": "3btCEx4bmJvCfVJ9wqzz3dnv8HdCsLU5kasvf1JAZLE4VpfXdrw3rjGP2ZgY39HJKnLwoScPcBA8ibrdcz6GXPm1",
  "key41": "5C6ZnCqmGv2bFRp7zJgukfd8YXGa3qT3Zz9UHNDZeZUrGyRj4VWeZ13y1D6nVV6wciCn5vnVZRXWP7N2RyU5w6T"
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
