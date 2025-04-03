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
    "3kiudBDCvYQoJUQpraR3WjcE81WRinfJ7XaoXZwpTSTenYqrGPXakbAaMoUy9GndhTjXAVHiRAgZBGnCcvL39VKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EhSFVYcsCsnXYzHEupFrBdj2XU9MR4PdUoMdHZTuQyKzyXL9EoQnGxqJoVDQKk1b3J4shKwhKjZb7aureuqrsUM",
  "key1": "4ZhRBnJTfXPdbu4bJZQjHefXV8pDYZvpFgfyCiN7TFnpVbzEeBDW1ndLc7BBZ5b1Km3vkMWgyehL4oy9tk8ECpPF",
  "key2": "55RrnW3hDUVaSGEc7LnuDhnN1NrWGvZnE4gY3EVrYDHLipKkatmhymq4iuJ58rPu1ZWjmQHA54jPiTkoLWcgfK2i",
  "key3": "5PeqizKUDLVk6B7wMxQmEG2UiW4SLxAtxteesjm3rVa8m4KLUcKgSQ95usd11kXBqxGzpeQkvqd9AgGpuyDYECQm",
  "key4": "mjkwy9cZCd2Jeazz5JVMuA8PcnNGBpLHnYHzxCRw9drDykACumvB71Dhh2rVc253kQ5pcFjA7PfPv1b9j1x2o2o",
  "key5": "2M1CFmwZ3NZhSn143RrifvcPKpwKLqeTJV1KBEvPFCxLjVHR4DCjuLQsFrGe1NN2QPUjoFCrAjMApR2SEvKLiF2P",
  "key6": "3mnuBfkGxrNQwGGm5MjyPWqobLrALg3gU43ubmQGuKmBAuFRAV3foP7gV7Pkd54iHEmRWj1kBZjg8ApdEFQv2eXK",
  "key7": "4kkVGBvdP9vUJBwYgGjuo31JC97VyQdpMVUt2UW6LdrfuJJzsMqzSCKSLDVc1iLZjpyMC3ZrCaRyXTQ4c1vvzane",
  "key8": "3Bc6TwusP6BT7kc2nhxB6SDuR2mq6gGLpuNZQWYVjRfq5jxiNcsx1ZnRVaKcsrAtgkJnxwupRCryncr2TzCoCbLd",
  "key9": "AXb5JFdfPdwFxvx9GY7JyuF3B7oHo4PkUo2MQxJYMQ4bQPTms82x5t1W2HtCfC2ycpv4DDUQoJXPk8eNAAw972H",
  "key10": "396kbKmHWYNizgSyuVdQbKSSGGT8pgZB98nXdzfWeYHbMTQxiiBQGitQtYXvxUMqgf8wBgft6ZT9NvA2rbh1SD6w",
  "key11": "57ioPm1CSp96Y9cQYcnyfDMvyosZPZAJzGPCfCGjT7mEotBwaEL23gyqBwosJzhfCVL9GoECNZTtXqSv5bZeNZAN",
  "key12": "4ytd2ta94ftgHwctS8EZekTvFdv3Wob3XQQQe58CbHessDTASJ8PtKuS7iSJNxFzRXCE84nvYjMudnLqitTePvDA",
  "key13": "5ryMhjgyH9EP1ox47SXFvQYMTWX1jVrJYJS86dGjNEn1cecm9mXhup15qx8Nb5uMZWZoDai6sQe49ZsGBEh2tgTV",
  "key14": "3jp4bL9DDkEofXMJQpwwxcUxqV5tdiDrLHcX2rZWQZPEbKLXvM3hhdGLd1yXTrJQMb8Azd3hXGk9fSqb49kgAatJ",
  "key15": "4k7YozW8BErFbMFJVfry8SjiwQVjH59CwEmGGdKGvdKc6UhUzMakKPW226UVfDER2jSgA2uy1mwX3BoN3CmSPUTj",
  "key16": "tDmvSY1qqLQWdUPcA3B6iJeXMi2Ps23kN5td7UGG5q2wBU2USbmjnSRShiA35pRcSdTU9nroz7EkWerUPTQExa2",
  "key17": "RqjAXJyzh37DwBC3eb8CWqdjMWp2FTxh15d2MG4Uu6xpa611kU4Yc4YRKVgSCRavwdXVUXW1ATL78xn7P8uWEuz",
  "key18": "3Yo9QNYdgYTMhBJYs2UPZcaD6WFr1jEc3zKvpgRGaxAEjT1Lnjr5zJs285iU6UR9ihkDYnmy3PzJYfAY5eTMrono",
  "key19": "5xw6i9YnqtAUrhCbD5MpAwwfNq9D2XY4R8FhujmvoqRn2i9tn1JrgEbTDiPmsdom4saEMFdjsLdfsuYV85ZDj7Xw",
  "key20": "5ZEQ7k3XkQ4ckzJtJgMzuyDzWHwMryBU1JVDWR7dmMG48UY4pSJWmSJPqxMhZMuGQBmMdEoUMbkGrQBq3y7U4Un1",
  "key21": "4Pxpe59oU1zeQgG4JAhSTCNW8aL7qFmk9wzNkxSLTBkpiWgYBKMGG3No7XZ9PERCKvGNqrpTgqV6zeUP4pLZNPAu",
  "key22": "3fZTZ1wavroCYAgxbMpYh4Gtg9aRd9S4UY8LJasNVEaNc4F3f1b7fv26rbB1ifuh8ysYtMa5wvzqiu6TsHRpg1fv",
  "key23": "4DqmhFbFDvBbMNiTxdTpkrL2NKjwt5GQ9awgXVmEzEPaK9GDapnYYkoqbwhUj6637o4XrM9MEhw2WrFacDxSHDVi",
  "key24": "3FNmqSeLFWaTzY1ZhSunG6hGEhP9LJbkqkQCcnj1FXzKfM78hca8ZB27oM7N8LRJ6bP9GiUY7g25yVLtieuxsWAf",
  "key25": "4L5x1ir4ARBZ4oDTkfGPrnKh6Nk8mus9k5HjXjCS9Xd1rEidG6DeeckJxYW1RUCtHUtHMK3FUjZF6kfYxeXmTLm4",
  "key26": "HTctDe5cjQh2hjUGpJzV8rpEPEkfhVXxkEQuGxjKyenVMmk7xZFmrB3daEnX8hzMpXtrbED1f2KDay8oThz39uo",
  "key27": "4KbUJExCCJgd2bL1MXS76fXnnSjZFUKcLHamwfG4qqpnGfLdpgTyDenhbRQWmx8SxDdTzBZ7ECMwLxVThJDPfkGJ",
  "key28": "viwrfgY9x4E44DUSMFkkoQEgvqUMQ88quq81cMUikZ6vZmcnar7hhUEZCmR9qsxobobTd114acFopXdpeLYiU71",
  "key29": "35YA1U2uWnd5ctcF5T4eeeHdbXvaXWW2YZxZUrTqJYZsBqUXDD13P233NAj9jnWjdV1cGCJLpfmGuGFfFNnfSd7i",
  "key30": "2bmUv83pmscagHDcrBYnGHYPoE1R7SQfqhvfVkqVeqqzjsYqc43Tk42FKf8x6AkCNXrVLyN5QaZ1GJbRVHgdsVVj",
  "key31": "obHPsRbrfabc71T29EAbGkg5rz8msygiGvbvgMNtjhZiMPYyLJHvP5PwzRb27mEjBf1urrM3gdYnVfCnKg84qih",
  "key32": "rC6cRLZ93pA1zSrhirMpxtwQ2aXku2CsbMB5cGJ9bEGHPqzTYTwBCdBCwai38co89ggqxUFRwSMae5bxY2NQ3vv",
  "key33": "4DybDUjbDmGi5r6fTXXx4hDQSpM8zTPi5Za2m1DhYn3Zi7YDDWTyuKhNeGsxLjQdc8MVpoJoUesymnhpxRBNuGLH",
  "key34": "3AcmRnxiwJzVeztZ8eGNjvvbTAm89GBh863pwGEMGv6dEPyxq37zpWkaygzR6hHC5ZWwmqkPg49iYFUkW2ksFA2v",
  "key35": "3YziUMoAW1s5r28eLb3uHAU4mjnfAy4vfdRNP4vhz1RN5LfZqRYtvKZCPmzw89VuLg2URv7PhJAJucLeAv86rg6E",
  "key36": "4c2EdvHgoRrrFXboJ3G7QzG2JjqbpBooJzv3ZLwPbiBcgqaoDCFRfrjh6cucnrKDDjo7Ebo6Z9cdAYid77Kzzkyw",
  "key37": "4DEAuoxQYL394FZ9uKfC3TuwETA7yMhgqiAAS4wXs31zPZEwiisbuQQVYFD7V79LChV8JWqUmqJiozWY8gcrdwcr",
  "key38": "4XzVfMLNPucsTTgTQp5SMExPRkWofZVuR8P5Dkm5c3VSLPaYnrpSzHVsB47mLTYXKTbdM5oBA2FDtcRgi2ivLiGs",
  "key39": "CBn6Lf2FkC6HNhXcBc5LoZHpxbJJ83uZfQuWhu2rZ2nhsGPYJxxt6JFkag5jMByWfx5gVUgH94mJzsEZfMk6VBL",
  "key40": "611VEwpV8eK69EM58xab2GnkHc3YZLxCvRauwxM6bAsv5xZvc7H61Fb37Eze7WbSyKcpRhEWf88Vb2t3xARaQzNT",
  "key41": "35YWtBCY77spnXQ2t7Y4hxSFTNAY9Nr5F1PzE9sgkDHQeRScpCBW7i1kFXjHteCBWm3nvvqeWk2yA8HdsMucxc8B",
  "key42": "3CY1dPhpNejUhpn1VStjbFmFTMVBLZyDWuPDkNrqxUQ1kdcHiCYKZeKwrX1quiU2QC8b6bvnb9q5r3mTtRUn4cah",
  "key43": "33jsucHya1Hvx595Np3DZWPH8niXtQ4YeynU9Xov66x6cUonXeqo7zsmumTr8JnmQEDG6eEP8CoorRpiYT2Sbc5K"
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
