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
    "3JPw12NbNdPhuJvPZ5mh8pXgxgnmrY1zumfC9thRweDxm2BxNo8BBJLN2qdPQ5B5AoKM5HEZ7UYSide6fghozc1o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F1T8HkvnmnfgopdZ8jh56mPxjiPVNiuwV1X6FsfHnd2uW7Q8gLjszqKWXhRbVYXjE1uG98btwkNy64nSAD7uk6W",
  "key1": "26fnM53GtuES8Pt7Qh8uttsxRriJQp7JeaXGvVAGabw7unMCf5w4cuGgQKXV2oCxNo7ReWTajDE2GaVxhZDgGVG4",
  "key2": "AM3YzNnrTn2c2D35n9mSTEwQTFp2944qKTzN8isMoi3atwyBcXCLSwKniLyWbWAg5z8PLMGLd7hTHhAjtVRD1hK",
  "key3": "CFQkjQKtJMfHCdSD3yb4w2Sbh5BRFMLnp1b1Yb5x2v7WAakSJY9hgirRYE59qPA6o1YpcLvgLYie3Wdewu8HnzA",
  "key4": "2x3vXKdtSDqBMqdXgp94WxSJfP8WKrjiAqtdKpthfHpbRAd56wkcyWxie4PVHc6M9aQrZz6nuuiqpfhfTuHHxvst",
  "key5": "4NhHRmSwqZo5k9Ec2eTcLxRNGK8Se7fMsQUv5pZDL6aprjryAujNJohmqezHPWDB1KrdT3gQJxTnvG1UXQzBK8nQ",
  "key6": "4sufJeiziA1vMv2imexzsBNLFdMEbeF52qxL5hKHBeNDdhmGgDHDZjuhwMyy7BMkDkDFtSypXtaxuwhjCNsCBfwJ",
  "key7": "5GZ6UYWdJ4RF7Z34kZENx5mz3qs16iSxPFHqBMvWXEHUHVvo2eXyZQWsnNQpmvmg8kF2Sxw7fFb3Z2rZ9nfqmsMT",
  "key8": "5WkhFHA4hZh4HzcjUZnADsAnCg6Wmd69ZnU1rPnqH9pZqbSjuqafzcNHp2NpNvUdBzcjZrb7bzNkGu4nhnC7XsmB",
  "key9": "3h6QHgEFUiR6MuCrG7o6x5XeU8JZTXo4vAjpkafqMYtejciMWC3pcWmFcUy6gbSR91FAuqtLzSsiqovFH154kRdi",
  "key10": "3SFH5rNtiyaQ7Lr8Cm8ryt3StZYFCMNovTKTECawJQP7CeMzaqcQ9KsozVe3Rkh9RuZkZGPt6Z5YE8wBhs97MiNE",
  "key11": "3YpKaFNxDdeiL4AmAmhj2vs2ms6a8dfzpEeK5zJsQHnaEc67HCpRaqpBn9BpMVBwKh4Y1AjRs1nmbyTEkUmoaK5a",
  "key12": "56AfrFiXUrDiYbtqtGH8AL96v5Ya9sTCuCAver5cqvTFf4uYk1kqUeQMkW2mPrNeeDCszLvdhgqPdUjAn3UqDVEX",
  "key13": "4VRfwTCXH7sSyQphKuCKjdaVwwyXMMBLrsdYGrL3XZ1pdwmte4uTgySRfQD7HH4pi5Y39buvS1FQGvmDVmoRNtrg",
  "key14": "58k9GLyDzYzUB3CB9haBiVfHhZmt6Ud9YJ1b83cq9v4cECF7EPSTKqFcJxztx8istSzqHrYgTZxpr6WJTNWZ8CKQ",
  "key15": "4xYsyxU6AtMx4gvSFMoqntVtz1juLab7kGVBVcdensSBTzgzBiiU8MvqkTvQmHBZb24bLsFJ7Fu13x6d6QbreS8f",
  "key16": "GPQWFSxB7BSVzREBfNtZxMiqK1sDWJBs3N5jeBX5txxb4rFdjJNyBcG1j3kHX7BzyzKi5xvJwNgS3bygEKtv3Dw",
  "key17": "5BSL1Ls5En9GHgaEEuLR7s5ogPtucYxgvvFqMBayC8HKQDhwh3xGWtBQqcRSS1PvZQXvXoyGXW9YTbwzjyVNZrzo",
  "key18": "5Ty2VmYcgZzG1PHbAPsMs1cBkuEUsmvPc1ZTQ7FrGEh6bj5LjHjjvVNcbuNQJjV4MXd3WK45XMDyPk9BeQ7CtWAs",
  "key19": "GEJ3sHgu5EJ9pyGcrSs9SmXJiWmfwKSV5CwT9svJc4pqQsfVHa2UhP6huQUrBbkxP3wAEBfv3UzoYpMwcicDsDM",
  "key20": "5MUnRJMi53zvHeWJpwKiwWEi4QLNFYxqM7BZtNDtv1h4JHEwkkVsNeLBNbxUuqTY9qFUKuNL5Eu2s917bsp87sfy",
  "key21": "mgc4cCDzDujfLMh5X1brgie6nfdpsKRTr3ebvf2SvuFS4N1pMmaXTyinVV2o2pX9zHpLvyT8CNcSJUCQF4u8f6m",
  "key22": "8xR4Df3nDedziDxx4syrGz36t7cVe7S8RmumeAszk3zgtfmVdwpzfdmnDi1JkB943CZConae4NC23fW9TjXWw3B",
  "key23": "5ynoBqsDKHEzaYoEPojydwUoNdyJuvrL6mgrTeS2X4Z7KsjUCAAEsZHMJFFryhsKKCmGVNoEhFEFdSm17TUG86Wt",
  "key24": "5A9U6edXRmgX2SrMEKBUKVji5UUejhi9fRkac4GQuqCNiAam775u9ni14i3knKf6BqGdeRthVY9BEFUVvmqrqDRm",
  "key25": "2VCgUx11ErXF13HDgEikMdSLjrW8sNwYcgdaAeKbh85gYhGiRHtUGqc23K1EooNU1qK73nXva3yUZqKpqWy8xinG",
  "key26": "W8TBGFeTgmHAbkgcoQvWMATMoshwy6NkQnbEU6bMR1eCTYYx3N6xCnrzSqaZ56CZGgJaZB49AYKhZvaDKLTqTxS",
  "key27": "M2Zt4SDcaNHmdZFntifr2A9sBefT9bUa3bA9WX6uASrybmQsg1BDSFaKnEXfptbB4Y3SLBrSpBDSRAWMNRvsVWz",
  "key28": "7T8iYfS51S48VBvohdAJp8hcjhyD7j6Zp14pDLdZR7jACskrWnUCKbEd9Q1xA8q5bGiibb8d4yVr4gcxJj2eeGf",
  "key29": "F28zmBT8icMnQDJDzzDD5k1kwzHZdJD8v54BHMmcnAe4PaA6m5g5ra6CKWUo3eZPVrQG854Ey8hZFW4xK2neFqF",
  "key30": "45d6ygJtjPqhmix8pAkzUPSoLYLNoszTxGE3Q57jLAfHyb5kCk4WVUQiyeA3tUVyg9SQh7hTYeTZGHAqUYZ6S3Pw",
  "key31": "2dvMQAzDtAFapec9ntnMBUvTgiGHLaYhDU8oio7y13LC6HWjk7woaUDWDMHgJ2b26mTDAGLfpCyx62UQaKnShV6s",
  "key32": "2vS3J6uyfjbz8tyQ7y5dP4oNGKsmUfXozNHGVprFui6fYZ47pztd3vBhg7EsfYpN9s6AQc9eu2cD3oaAuU3HY3iN",
  "key33": "5u61zWVa9Qon1vYPfAfszPh1S2z3wVi7LAPGFMjRXoVF25ffPb12j3ygNkZDbL69DHyzgQ2HDqM7ShD6ewE8uQNN",
  "key34": "2bQmksZg9DstEnmGwR13TBthMUnXSn6wrCsWE7SdkAi7ftbVQYsGEDKH34ucXcsE1wKMgCw7q5XbicHTc74pcCka",
  "key35": "5wuVUM6J5gJ3FYAtXewAt5nLMSBBD5oFMN6mBehWae4gHk5ruufkP3geTUc26hys1g8EtMEeUgASZq9DZLeK1dbS",
  "key36": "47z4bRNAbBU5JYpXwnNEtRfXZ9c52ocR6wEbGnN7hqiysCNatjCP7qZgmGXWMk8gSVvsSVZASDU7EMyiUPGsUycV",
  "key37": "5K53s9aU5XRv84GWakuzJCAqvW5TcVNgtHUYcT9zLdtQ41ZTzoXJDg151eHN2ceNCtaAzzbDwmCfMjGds7BqpzYR",
  "key38": "4rrJdrrVn39Yh9LVeHM18kPavm8j5VDT9jeChrKwCETJV3cDrWzkDfZp4Kog6kAwrPqrKAzM6p69HpyU6LyUCS5w",
  "key39": "4cVQTaxkU81sDZj7PKFS8MQJWpJ87RqN1fqPRghSPdAdukwmJTTbnFizCjoKh1eNmhvGanrAWER5fBDC4tAJzXne",
  "key40": "TvNNnb6BAMTFZqcZ6Tj6aPjCnkAFffYALGPqboFGFGduJRL14F2bBPWXyWCnPgeVFE6mH5QN5L8xScZ2UCZF6Gn",
  "key41": "FJ2MURBMrn5kLWBnRAWDk4ETkqq5XttjpXsuUEyf1Bxupj7JjfuvX9VAfVh9pb7LW4uYvourTS69rautxReT2jd"
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
