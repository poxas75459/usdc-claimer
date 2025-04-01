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
    "5u78JnDecBJzZdDznbwj1Eu33b2yqYjwr29NMxV5xihP5eZ5EUhBbhWNDU4S7F6yh76id33XXQgHRTbSEcc9KghG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "msWTPi1HxQnb36Mn8YbrbhZhXhNcVnbaGzAtSWvuTmDSosDr6fsWdUz6ovSEWkQepVwDcskENNn7thMqBrqhaiv",
  "key1": "4RAu2XyaMacBwjRRdSiHf221Q7T9igiQoxv4XSYKgVVA4XgQU1w9m6ar4QekWaFumxtD6joRi4GNq8K57veUuYPa",
  "key2": "3JWmSa4EJkJPjE2TEGzi44jU2J6nxsAx8QPTAWR7K2UtpddjbyVqewKh9RF74xiVKC6rtJ7Pbv8hWY1GS1NRGg4A",
  "key3": "5UHCx6s8C6np3HyMK6wMpqPAWy4ZNzXP8xgvLe3fUhEfzpWF4hzdveE8t1HGgiX5Funxy7RzgZshpMxC8632gYsF",
  "key4": "48VDxbL4CNrXnc2TwUMAu4sm6hccN8UGz1ikNKPEZW6o5NmfxXhePeQGk9smJpmcAsF255nzjxkHVJfBN7uHesDT",
  "key5": "Pgvyfbuqw8j5gvoMmu2yzwyeGDpngMR2RFT4VNxezmPyb7MiHy6Rx6GroDqAdXY6WiTBQg8SNPXsovPYDuxkxAv",
  "key6": "3eWjh5fETmZg9a8g4pzxFgrnmFz5C8omURzwqS6cGbKrzicM9aNBxzPtXtNRxyhDadzjVuMrdstQU5L8CVaNRboV",
  "key7": "4JEuRQDvKmGJ3bpbE9cqK9dapE7LTShjBRnwueshiP8DLyyCznrH4JQdAKHYRN5kke98ew4q5a9bz9CfsDkGpqr9",
  "key8": "2nAY9aERFGgdXC5UawdYazGTbHwM9ttQ4NgSWb1J1SiNzg17Ue68hZsWqUJSaXsmvDwvBefTieXrNPMEfFh5GHLX",
  "key9": "4KmaqgjQ8zdXthmbGp6LDtyccRez4GMQm9qGQdt5R6QAM7BgGaXyGPwUdG2M9Mid1wDJkBaa4rH9n3z3wFzzAHQ7",
  "key10": "5VPUdh3Y71mjcZgg82vb4f6EE7mTttzkD7fkJcjKg4mDF9R8Ffswz2RhNsK9qj8iBjF7HboszkxEb9HS7nw1fMJA",
  "key11": "4PLtaPoPhtvnCmUkmeRSs2Vkj2U286esH5Tqv22rYa2a52CHy9s3BkQGQH4HTBCazMAyGS9u2PP1s1jAu3CdJ7tJ",
  "key12": "5Xs9mrE8sXcRbuybGtf3CgF9nRZcuFE5jimiBUt5XwshReFnQeHTDrznif7gpQzQHZBkscwmqVedPRjSjP1dm39y",
  "key13": "4op8LCwuwLbT2zQWZdZxs9jmjGZQEb1GA3RJbxCsQKXDR81uo7cViN5yK3Vb5zuWvw7q4gf6fT4h2HdBhhVwgM7g",
  "key14": "3bJPquVurr8r2wcSQ5i3jefg3kCE9DqjhMLmSZJKwP2dA1hBcVB9ALG1EaGZTKYh3ZdTW9gJezgS4eapHRANhUjp",
  "key15": "2k3DFHiYAsbySBKLwRwZwrRWaMiaoBMddeAgV6hd2gSD9TYrc7ZNstKV5cfeT3myXcmA7yAWkYASHU6t4Xa8LexB",
  "key16": "5S9wQfPfCcVL5G5rUZCw6zXd2LNhzHoEa4UnR66LDH38yE9b2BXdHt9oHJBci4EkzpctMDHJVmXLSBS5ZU3rDZZh",
  "key17": "4QganaqMbvc4tLbYU4ZVC2zCT2hNGSRaKnZQZsSYZYzunfsfdmPRdjLQCGh5Acogop6Yk4X7sQthpmY3KbjyZreH",
  "key18": "2nuDwf4Ch9e5nMCr6t9g28bUkjBrnux395NwRD3ntrF7b1aWRmbEbjUBHFhszmSG9NwBQoYCy7v38t5kwauMQ2FS",
  "key19": "d2dfthGcpNY3sFrXagauRatqzUfCrdKJuaQRnq7HhfwSALewVUsSqf82PaKJTHCBuLNoGL91dyYdCzFRB7VmueD",
  "key20": "3oKGrd2ASHouJspPhXq9PXt9xj24QTbnABcKemMFcXupw5xGWvgKuheyQWSRtJjcDdMxp63N8yjvN4RBMUYt4VZD",
  "key21": "kkbTWk2uZ5E4YEVMWhAtEbjN7UCxRJHCJvhCzRUHamra4NHwnytDT3b6hxxFd6nxw4wyzwHnDUZMWcGJMnRb5fH",
  "key22": "3LQ1mZ8yaLzJ7z4DzfCKaiSdNXMJqJhvzef2F9NvWXmM9oQz172hDPpe4uRWfKEMkLi5qXNwhoff9bbZ6MKvQYie",
  "key23": "5B7KqnSjdQiW3A5fzyi94gqGbQmSAma8Yt5m8yqD1a7xNSndqEU8LE3bFRxcFSfEzpbwbATYaugFQNhTWBd1t2Yn",
  "key24": "2kMJ14DDavt3RT4vqDhQvhduNrRmWaH5nMZ7ZwsosurR6Zk5G1RJjcBSJBAVPC1U22S3gpC1zJhs3FoqEaYiszpn",
  "key25": "2vBDfznPVFaVnHx8TZXd9rWByH4uA52aj9tajZEvngoaBBuefhNiH2bMz8MtZAS8XpWT8KwUtTsjQ9Z49Nhp8PT1",
  "key26": "2w8nYEoKohfEs1M9FGeV9yTS1KzthBTd4fGXjZbJR1RbLa2vqfn7GJS5nWbXptaR9XTbDEXC2Go6g4HJyjpu7QgM",
  "key27": "24cApvBz4iCxMwBgwmyEuqjiu1ePiQAga1oQ4DiSoNmqgu74ex49rmjpdYVivXNMJM6sAWMasbhuLBFcNkgzPvj5",
  "key28": "2aqFf1u9wa2UB8H8AkS6nerMURQUdcEKnQPwgV8CMEvypwg8NTfArR13fFDevE4bg3prNhFPv36riQU4dbDjKWkR",
  "key29": "xHbL9C6ewVXeSUKLhigChy2TMYxxsYTTfNyJmAwNh8vXDYydoTBrzhtmebF274hKNUGsLGstDVVBsZowtNUZsRq",
  "key30": "4d57eyV8FtRzoXsuBg6bDS3mUfguqFyac7Cgb5dA4N6Kn3EA9e7wCpvSYB63WsZ4ZD2DFCj1bAFBp1MvLRyGJyNn",
  "key31": "5ys5LF5G2P5s1y5y3EK1iz2Xk2hgj7yGFmY6eMWLBRj2xjSN5mvueT47jdzEn7fLoXKZenPCB7f9nKmg7cgnFVRh",
  "key32": "4gbEwGdXeFnfgA8wvqTSKxtPeudtuqNAgvkTrggc672oN76YtYBigAknfjducv3T6KHAaaDawKtUdFWG4mR3zpGy",
  "key33": "52ipQ9dNT7Bj41AxzmJkn11r8rBtPE4mMNTLytrxBkLh1FxSscLiPS3h3cS1WjPzbWCAz78KmjEjbCvYQzKYguxx",
  "key34": "2zLYsg2mu2X7xWYTdKr8DgtWBCbZ39Gy9BufWUT63BvCgVNMmUVMb6EBmnjqWmkubRbfh65VJVDcLRxuddR12aGm",
  "key35": "4SdR9mSWDvomBHCtRhVoaShHqUC8Za48pDYHMvsicGwsKsdQhyM9LKuxgHvuquqyWLDnWtCLmqD99DLLShM1Ktf6",
  "key36": "2VPZDbhEt1zsgqLv97E9N99ZwyszRWamLyYezqQQ3i8UV1bRkpca8NnAUs4Dj4B8qhoyHFu2EN8kzbLiTFArUPH6"
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
