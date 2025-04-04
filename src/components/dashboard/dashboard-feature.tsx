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
    "3L77KVkjmhD675rociiM4qVZyNnk8s4hYp5LK196UbtY35txitktFQHAiZswUU6h6BJY8DD3KSJm1NvUi2Yc7EMF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4roriAgTQWn1h3Pbv5x4rrZmznkE5C7XCxyWdkJrzmw5sJe8ffBCoHDCbd89gLeuJvXjdPZEfXFoPvU4j4mJut9i",
  "key1": "5Cs4s8TNQsu6aYosh1HtGWHmuTtr7dUQ8FV2q51TvtJDDwY5MscqNHibQX4neDmatC1pzvTTbi6jCgUPVLov2sZe",
  "key2": "3srxXrmCEKjmcMC8x3YvSp6LR5jV4EK486t96dRtRSxVhXomySi75xcDpBFYTRm5hgVY4dumhUBqAu3MJpkyWFxA",
  "key3": "3ZJGtMyK18sAXiJcSZsvDZGg6hmDVxW5WC7VMhBM8SkGMMZWTbMLEuNVzF1z8vYvnABU4cu33iaxV8sttM6JPn7u",
  "key4": "4J5H3VHZguzkcfMue4LXAY7oSHVt1u3Sj9sGPoc4LPnjZN2VsNCsgdT8HWBcNsBWeronpkNGJL3xSzGo7881QWMt",
  "key5": "4vsqrHbCufvaChdY8csCEacFv8ZRa8jT4hhzihkdm9AMzjvxNFhzrEZ3K8GCug2MMa83ajEx5dQNHRqJUUfmyuTH",
  "key6": "TmCX9ptEJP3oftLGFsKjrqtL5dcaLf3cHxmtdxdq7nVLZ3AP3cMtURxchYomu8JtwSXjg17rgHB3QihUNJUqRqq",
  "key7": "3T3q9PcRUUBFcSWYCyoBNfF5gy8mziP5QNapgMJin63z1SnzE2Sq7TzceWqh72cxsCEWJkZ92uH7bqoZBghmcxqF",
  "key8": "y3k9xgvyycwXLCRmTzQjXZbeY1LfqcTJoLaFtNmR1w29wLoWvjhfe6DmgRAgF8EVpuqspe6uAaCGrzGCJwztcij",
  "key9": "3L9xJpWHrYFebYDKNRPUi1C2Xax7TY5aVts1Gtd1xCrrbSECWkabawnLz6aUEQzvi9XQw39sPtoyeoCwwtWwHjhR",
  "key10": "2WQsaWKxeyVisFBMfyh17sTMduzrYAdYodcEMvqB3sFW58ELpELJos2Qi3ET5BX25U3T6xZdkHQNf4m99ycs6y1X",
  "key11": "3fY43Lo1UBTy1kB4dzzN1KdktPAE8UUiRddvpWRhn7af5QXvdE6DvnoePMRJ3PsxCuCG9A2vhBKfbRGHQVGyb8oc",
  "key12": "3SJ4peGiKRFGyE7TNa1xVXT9UzH64aRt914gWewJRYEjBcEByPP1cXXsxNR2wdG7vNg19e61GKPKw3a8omAjfQNz",
  "key13": "4G4YpYNGBjKE9YehdRfFdJfsqb6AAv26otSeSidVcVdF7KsJM1XxRUhMiS6uTA5EJfTxiW1E6Z4279gVMiHKWrcj",
  "key14": "3GfhaXQLJD1v9e6DHGfvGatH7ni7c2spR1GqxPKQQrA3zeWcoob8Kfhdsb4SkKbdRHcJaGemZRcPRK8p8CaFbF3m",
  "key15": "3AJir4HkLp9zkCKnDqY8Kh1wbaYB3yNsUN6DS4wUYAKKhbcp87HsnvLybD28mrLxexvH5uu7zgyy7AYxEdPmDxBv",
  "key16": "2tkUBgZNx1trSQw3insAUZf77Di2zvdVehy67t8z5kZyuxBabQNXEuKaqH7bwodPWgQydtFfXHwrxtufKAWcQm6j",
  "key17": "ujA7dUW9jjb2C9BcCQ6xiK6W1FsJPTi45YrR5zqUaRdrVuGuxDiR2KsYqbWdJtgTddGmXsL6vuiq21eTRo8SrNo",
  "key18": "2523BkNm8apZfhZSzpFBFXzMTdzzKv6wgGk9WwrgbdeqpAFqBLRzKqJN9xLEoRDsv3vVReWABbRpeKpbRVzJx5wN",
  "key19": "62HX8yaqW1RU5rdLgRwhoLUtxGmW7SKVSmp9zHZ3ywrYDGBhmW5WLRbyRYJyqywqSfuAfTkSG4PuZ9RKYoAnmati",
  "key20": "3z5EofjeJNuhotTk62KidTnzDV6ypMGWXMiTiNatz7NMS25QLZ8r6x1TCW69ARXnqaVKEqc5Ug32JpnLNBqnmZii",
  "key21": "4vYjVuz47LgpAG9PJGh6Rt492a6MfQ3y7GqRochxkUmrUNGerRhMBYeG7e4Ro7p5unW6oy4R92GjeLq3N4wkJfts",
  "key22": "4hxuXeuCSGy3YY8uiX8xmn5DcSDyq6Z4aLhNzCLcBkk69vvjvzXCTL97e2518y9VyEZX3Xzi3VXzu8rG6Gv6E6SQ",
  "key23": "4BCz6PSVFxMDUq6X5skjhDCyrVif4Ez7DAadhVVGSe2bGPZ37AGX9xdj1MMD3XUrnUPzTNvVGZUrE35jvyF5cPko",
  "key24": "2RkeyZUZrngS4z1msuZrxZLnjNMyJYFJuSRDbkSdwLJQWFPzuusibyB57Xu6nD1oT44jKeaKdXQhHzaPSRXhaEZg",
  "key25": "57tBqZr4EwhHKTCNRmGUMPQPdsgyVhKim91G1VfTXX52e7TFyxPEcDj52eFL1UpV91dB479D3Hkb5YhcTGHv9feV",
  "key26": "5o6FQRJy5B8fhs3Xg8eERhxqThTgmamw2pU3wjDd6vxeCwnW96yiMg8nx1nLxe1F8Wdq4F3zNEhv7NMcezjufmzj",
  "key27": "5KA8V9jLijPTAQ2zPTFh555me76kZfcvsosLco58uCqfHNREpMS2DrmFUGyQTm1AJbW9YWxiiBHAyeR9B5m98n3i",
  "key28": "5DTLhmJkkDYqviwNP5Q5X1EHp2DTPtA3YQS5SdEsAvkV7VJCzYyBEqZTxTUHiaU8WxdKKLXGRtEnqvWQRcxCGWt8",
  "key29": "2FcYSrgXyK1SD4LjTZae2Lx7CzeSquX8EpHXJZhvePpouDuP9pDYhJqVwaFp3162m8m7B222NV62LJKFrDZRtVCX",
  "key30": "5WExD9bjWewhasWuFo6A1R7nn1MHXXAXpxETRG4kVYRJb3KhP5xA7KND9nrSpwrv1425LYTjjHxMTXa5DH9RbfiB",
  "key31": "4VFjsyufNwdiqEPpexBUh1dVzitsQcQSxdNcsKtNGse3k4HJfgZarjj5RjcoCdmVSB8g3PjeugFoMcGA2vEYMsnm",
  "key32": "2GzhH8FWSnXKR4ufGEyrCVGjzNpD9aoZhEw4Q2B1o3d2YzuwFkWLAwkY3RpfeN7yQ57Qbeegq51S7z7dqMsAfcGM",
  "key33": "5eypJJrMBsu5z4EFYV84YithoiQuwsskeAn5VPesUm4qst9onM3D2Rk7bwcmteq9E6v5aHi5LCrVhuweUamf3bJD",
  "key34": "5kh2bNF91onKGPnVfAHzxXH4rZQWVEpdGee9qwJ8hps1VPyGhR9unF9McRri4DGEucsN3gQoLzyeFzGWpiwqieme",
  "key35": "47u3iAWJDYq1ChXKV2dCG5R6o7CU3s7FRhwVPHDDZGyfEEnJiteEWfAuFifvY1EyJAvmRxiwHiHyJceznAN7KMnY",
  "key36": "26kQx5oHNBWqQaJJh1SuKg6bn9AGrsrzKSY8dYtGJQkrUtzPvakHwdnquhsp195FjsU2eFL6pKwTjHAXeTuxWU9a",
  "key37": "4LwHCBQDzPdyecLrRvfBUURiRSgHwSwRczEgT6Ax3pEVkrrDJttVKYRfg2h4nmuz9hV3mJPUG575aDooPVXUZP7J",
  "key38": "5j5cnskXu4ZtxwECCWaPtWQf2f5RKyHV82ws6n8EMpo17xAZABD5XQSKuNbujdqFuMjn9HZ4UvSizpxqkiNsn6ki",
  "key39": "5V1nwQbVbKZBTNQQCJe42UqAHvbN69jp1cYKPLYVPeZWyswAoqv9nJtwURe7MMFFsTXALeZpNbZcZDEHUTZEWGqD",
  "key40": "3F8B8Z7osnZrYr8r8Xpo96dWmLpCUPjq4wEBPnwnXsNgadUjkDqx59HYYyQo4YTMik7E14PK8gntmvc7P9PsL9LK",
  "key41": "3VykxLvUGeFhJhLUJFz9q2s2GKFeo5juh3WArtrmanknz1DqSDM3mb3wRDKVsLJcf5f3EzCHvpkU3RY1FwSbU6FG",
  "key42": "5aPvXg5AGnmFVZA9izhRidKePvfc93AwoexvmxvWNYLS1MDnZMM6EWWP6CjzGyJbCXnHuZPC1GK7sQCwJD1Lej74",
  "key43": "5qvwbth4Uf9aFB5d8C3y66rHVRHjKEvN7LUTkerrGh4cxP21zaGoJoFkFAs6YXrvjcXGsAV3ZHyi7U18McQjPDay",
  "key44": "3S8KUhRYDBRNUYEDtiNN2ygEuJGGrzE54h7JnnChjXcRX1YuYgAcd1eLE7Uk6rLXtfS5pzMQcVD2zJeuoQmK4E1P",
  "key45": "5AVssXtga66cbkM18imdmK3ytdNuTvvhan4NAfxgkiWRKz3LRQsCt7kkH4HUX4qQzNwGKSUtExyRwKnwXyx8keth",
  "key46": "2sKAq2UM1nC2Hg5trzZsWHKAUWkfqWpXS2PAeTGRTdigh8cHE2HXky9RNQxj2NpAmosvoPMnZ3d8XQqEvoMQrA7M",
  "key47": "3gNDK6gJF1xamLJJWQ1VYx9Des9Xt3Hp8eNLnTwjZxCWes7MkR6p6W8fc19kNp2gZvBLRMmCg2fUWPPVtPRvpVit"
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
