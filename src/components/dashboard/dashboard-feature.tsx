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
    "ywsRqzTLUtougnXLz5LT8PMgmEJBA2Vxvosb6MKFCkKvQyL8xhc2oTZajWfk7p3bbddHPGLFpVGmZc5mwfFSGq1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GRjJx3d2uNRbT4c9MP25ZaTN2z9tsXEWRNWZ4RZkFyHhzbyF3CFKWd3PnnPajv5w2Djz1nnhQpyZUrWmSR1PDqo",
  "key1": "3TLk2iesr2fj96RZ127q3j1trdoAR8iuoANqrq2UwE5rS2NxEtKrjiML6ASxL1P1qC7itUevRy3u8zerXrgSzrCi",
  "key2": "vh1MwTTsUMrkKnHYUXxxoqBMbkAcsnZSgJMPWvgq6hPxKnTSjHki6PiisJm6wkSZTf3MrcCpMUon4FStmuuYVQN",
  "key3": "dKVvTfwie9GhxGCGRdjHSg5oAk8yCAz7tisue5Ws7JMncqNhAsM6nCePL6V1eKWmVmoR2DExZRnFTjNNH5RhV7r",
  "key4": "5Dde4iY5qwxmJ6Stcuf6kNGNXTzkswiBXmtBNcCFih3y8ZkxM18BXNKNKyJ3w68WtLmKME55NDzFxR9NevTT5GXR",
  "key5": "2qYVfWwgwySWZVo6TeruZ4iXgYhGhDSAo2FwCqwG3kbDXqzz1oHuq7UgfoBjvR3ADZZyXHSuy5Qm8Lve3d2QBQgv",
  "key6": "31qnBzF9atz46PD4M4e6PBKAM7XLhXHUG7L53bHWt8PSvuZCRcQHNiFBPiVmbPsFuEAPUcF6RjQdnEe9bN45MpLv",
  "key7": "44GttUUCt3BnE7cqkfufXQk6wunTjcRidSjVWYAuCqSKjRYtomTvKfqtwaTiSjTJXVUntmnRLbQDWZrbL4g8w2Ge",
  "key8": "E1rcnFUpZn6uV2RPxat96NjYmAjUPAbPdVv4M3JRJ4abVP1tNDKnv6j1zbmVPq9bLGmEh49NAFcSjDv28qp5Pf3",
  "key9": "1sLRNt3FcufSqMpFHNKCMSJUwd6pVeVqgvuTeJb7scZdkxWoL5FPqWnCSwK5rdkDcXYghWpt3XzpTJpAvEkzkV7",
  "key10": "5UKnmvLvtetWcZHY6VYasKP1Vh9WbcoyJACjo6Nj1wBawuzMPAwE6mo6SUmwaKpxqF83REcu62W1QGcRMpALria8",
  "key11": "46YSyrhyxkb342c9kAQ7gxSw5BT9UJveNdNk8rRcTvXzGpi1o8KdEEeiXPg9hawtXHXQy5py4637j8D3KjAGMG6x",
  "key12": "5HRnNFqsxwFNtm4vBNZ7KFTv4euvKMGDLBDh6ffckmrsff22jNhGxs5hbJ3HbMQYuQ2NN2aU5LtGZqut19bWgsCK",
  "key13": "EdtWszdnVfaKrZiHrMNJFExrQTYCaRUprRjojGRSLopnK9a1vbU4G8saVkmShnkZzeobfEpRvJ3anJppJcjZNZB",
  "key14": "3hPBaW3tEdu7aSJLLDworPjNFtUoE3hWqS2EsEykB3kbE7L6UYfCvTbDRXmQshC9vFsse8iGyp7cGMsY75Qz3bP3",
  "key15": "2L8QcQgahf7SzdwFs2Bq9Jju3F49BEmpeYfHWYfcqGZp7V8ERoXAZGfFmm2bkEk85ksTMJbCBJXyaWrVvedwJEWY",
  "key16": "3cAvWYjCGw6d4oLmSbJzFzUEGBWdkjyfmqDJmJxpBERGYnXwqE5TPQyziXC2AeGGNAS4xgm1TY2461nXyWJPCWTp",
  "key17": "23uG3LxxMzZmiemQVVgfaBsoSHmGnZvhogjj9KMrUKR5yLasdzpMo7XJAzqPW1Q7eCBwerfRDNLH8nZPQPyLiLDn",
  "key18": "joKfffBPhHfyjJYiEeVJgC4mY1fPun3hmqjngTpzJUnFWDq5xAELFXDrZ7Chz3E3XCJJBXf44EhSNZXB62Cr8By",
  "key19": "3GTCHUCLvGi9ELvPfRQ7bMApjxwLXSwCAe9tP4dUBsvbPmMEiVERJD8eTBJT9pAa9SxsU1mGkd6a6EmUs6Jn1XAE",
  "key20": "3KWufYCVwQ2bTA5f2u56i4rCPaDsdLQrUnWRF5UdnycBiV55h3b96ypTc9jNzikkkfRHgDEwAwfP6v1v2Ew6PgBj",
  "key21": "3FfQRjRZtrm9nQecmzUqfK6Sh1LD9XsaxEt6VKppmTZxRpctwrBY7rd2z3CvL1u48p5pP8t58P6pP5Aqiras2JFv",
  "key22": "ijjvCo2oVsZmAFU1QtudB3H6JWSZQee43zpsudtfZ3yhYm581mFhMyFjL7KXfupU3zEoqQUagdfoJJ6vba9JVCd",
  "key23": "DyRSoWRasFbD58vrMu7AoDecUVWKFZvSKUsSGzv1juw36ttqDoaQX41Ud26487dTbWHDqRN6mpSatPwZd4r1fCt",
  "key24": "ns6LPhnWaQUKopqSMQgTndwXWhzCRhxhr2NWwbY5JmGxfxsP1HMG9wPn8LVtru8s95kYHRJTr4NnxkhRLwgRgWA",
  "key25": "4B8JDbnXteyxjT4wt3jfFmPTKVtgLBxW85KrtyJbtPBsqYfHUR5nFB3sfqbj5bGypELuv6b2FzqTPZ9bMwVXDJH7",
  "key26": "2tduWYyKQCaxp32G9YwF3SpGWvpoEEn1df6B8Fb1sPvw26Sp9sCnEszivDu8NcJLwSHp5rfGXjCxhAacYG6SdLfz",
  "key27": "4DxPrWUJgDqLA8naEkXmveupKgCFnzX5yrYP4M3eKj64U5cbjTk4c3nzAUVNp99Sp8jd8ft9y5whRx3HNc4DSb5u",
  "key28": "EYGq2HMNHaAwrpr8EXJZUxLb5tXzh5W1cVycfsnPPReKLLtAYWy4zy5Az4VKbyPxb9oFpGNjGFV8qvBsLgvUfEW",
  "key29": "4NX7vR8DUZncnyu6aurejhY8HgovecgTCFgHnaM5r98Vje9nXW8GKSbL2evJogDBHPZjpX1sd37oYx2fdoz1dXpw",
  "key30": "55APE95tMmf55XW38MJYitmPM8hCvJgu7Ts8unjPcdLsxuqg42ErvC2hA7LKYpArWvGWjheeHN7ycgQY5cvyuQWD",
  "key31": "5VqozxgWGUhFYLvJMAuYN2sRKjwCZawHv5d5zEcKTsj6LBmGhmEBDtjACsbiYE1S2u8p64bFjYaXe3CQQiTEXyJw",
  "key32": "3H6ECS7sVP8wAREkPB51rczfu7fyWnQ7dxkBkdRo9gqgpEm1LhtQ8tHdHKWrTFTz1MSa5upD4zGByZcT1rmDXncE",
  "key33": "2bmf4oCD8i19o4mimzqHQdStbuU6kw4DKZhCnrwcn8ykZpwCxoEp1HSQpkEXi62KxtbtUQtaHnwN92ykYd5hyXEq",
  "key34": "4EweAJcmw7s3fmgnoR36hvBQPDEd5hbvJsbGkGhYVhFeFappoWtgefgnHatFkAfDBqTM4XDjTB4rK7cMFQj3jwgL",
  "key35": "ur8raWVpr8QKnRNieZmVPnodMg54WhT3JaUHvaQJKihZ3ShUqt66j7P1xDUaHXYncqX3rYiH6gSMnrdbTQff5Ai",
  "key36": "47jsT9ALs2CPPwB3ibXATv6k7hpTedUKP56gyikFXmnpVZxq3oHkaCGgjoZKHZCbbGL9TH5xrfDfwVBfeP3a11Yc",
  "key37": "4cR1ssCaZ7CyMDWusinBfDuSVG7g3w6nXc4d8eQM1mXvbap7sNkucTRJaHzYKnuidJDZATGFZNtfZzFaey9mWdFy",
  "key38": "63ocWLA7iZMCvgP2KiHuBv1Ln8N2V4YMbhD2ybzjHZoGuCEgYd3T3h5gVPauqWcmcvXjPTHPFLuM281bESvb9pZf",
  "key39": "2JN2TH1twaWVk77eRSQdUpJoKJbVsRD9E1FGtLkik91jdUJhZ1CpACyTae69hSWG25hbqE8emX35jRtPDfrsejXB",
  "key40": "nvkwvZTokoLatsfPyfEK3tUYf1e8xPHR2Q75dMBx2HMmFEFD32RGbo9HAjXVwxXVowfk6H8rpiFA5ACCR1uyHzz",
  "key41": "3fscuqBPC3bZhz9FhdYXxdaLvDdo4fzJFocSs3K1B3wswcfKT9sDEeJh8LUBRqC15cNWaZ6V6PGGrYK5WGwgQPVQ",
  "key42": "4Xm5yxCa6utfppABD7C2VjSDnqCJ9uHDZ7nif3kqMXbh1QBoVhU43w38gpgExtbv4gXTqo43snCNiqwppTiwbJmB",
  "key43": "5RZUypERrhVJg7Zp7nrd3rAjAbSDqvtqC3DQknZGTr8eFHELWG2W8MNtw5S7Ga6m7ihWrWDd782PkAVTQetJ4qxn",
  "key44": "4W185XsBCe3vmaXuVeVmDdwdm4ea9HBuLs6nZakSeGBC2QdPK1TMTE7wxYqus9i28GkjHgzqjCzaKdZfRHuqEAX3",
  "key45": "4y4TAuRfzeY1LWSnYidZKLRGiqJGkipd53zaVyeCK8K7Hno5bEVZc9wg9G9Gi9gvQsitjbfxujHsoBKnnEdaYCkk",
  "key46": "4D1NubiS4qEr5A77KEqN63eDRkH2u3LgJWaXhrR54unrjdFhFJbVDfWu6ftMidSxdciMaupvjAXfFi6k1nNV6bHL"
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
