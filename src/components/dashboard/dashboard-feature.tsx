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
    "3bnCjvbVZgPbZdmuTtkgQfEXLbeyp1cWYgC4Nej9ZPfBoeHvU1sTHBvQe4e6cNyCdivaQZaCk7D3jLqXgB7y1yfx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f6UuAcYZNa7tmkCEWtmqnyVuPCs6necnM1MfYhrwGcSwiDu4KavXVhJRNBxHbxdZ9BxZDZ1cgTuMuN7ZzBEWziJ",
  "key1": "2jJuBaf6mykmQWqZ4sm49p9sNKnUSqi8CbQngH4BeVRuviH54yziM68ebDbvGKt8etZMFHHdVsfo9CJqr1jxiPvx",
  "key2": "2y8qYHSm4QTvLftDS9auJJrhZFXfRzczTPCB6rq8YsuY2dxufL5hgjM9ZccmVLSPU4L4xQ7iExLcxXWshLpgv8rk",
  "key3": "21JsoojwUuZhAfCnnE9A6aAAbhW1K1ab7qbtDkL8gzVL7irbJJC52LVhiFL9vBFdsRAf3JnDt5chYx4TyRYhKH4o",
  "key4": "3d8mkeFhTrZGuJYDzwrbiVdQ9ux1CTJMAUL7FUuuxkRkq8Y8ZXeKXqJiqpNGhZXJXVxNNDVFmD9zeNhSPPhWUJCN",
  "key5": "5tJdRyMYp2qz5U592gxpYQSfu4cFSv8h8QYrk24Pa1Pw6thNzeVzb924YbrnAsVnxKUdePEaWqm3i8qoqLPUaGSe",
  "key6": "44y84NSypQq3yGiZbzBoV2VQ9P3vRRjfgR4CZ3jLrDBT9HoVoEsZYirryPCfLwftxtu9XrzUpqydn4gUG5mi5gPb",
  "key7": "3oqPXdZVTqEDWsxzDMzhZWyEpiQHJTrDnsFZc1kCHwqETZK29LwYh7QiR7FvaCyKG1mcMpphvyrgvWqc6cYzKtxa",
  "key8": "5JZ5vG7hSsFjDcPVfzLqwqfAjEZ5PQ7FmLc8XngEXcfxwWxpsurpoffoYToxzGwEMT7DUsaA2PKgKQUsDBDSyjnD",
  "key9": "456Lv63rHLCG8wCA78pk62V6jsfGxxnqQu6SvfDBatZNBi2kEw3cNZmhk9zMsFDmVLU7mCsp8XpWtx8uzZbZZBzC",
  "key10": "2291q3UWKRcTY2AJmAeqqn6L8qvb2Fb5KMh72XPguUpjc5ydYAsJYPAHWDyysMBurJHfVoYPzBuDsqKpBvHDTDuB",
  "key11": "5JP2PxS5Hq1dhdXJZa5MCTeZuuoFxtzCwMPSjD8taiwBf5VPojdNY24rHC2Uo9YN3e9hTgLQ5SoY16fdJqYY82tz",
  "key12": "4mJvgtHhWTS6CYgW9QvWkxkCXWV7Z4EpVcozU21pQbM61SBzTRnAL4ea8EgaJ9uzxpijeP59jUFxrwGBzfKNUzwB",
  "key13": "3LrSTjb9A2o1P7UbtYa1p5oy91UHTvasG95v7bJ5FMXf4rbST9ePKaEy1hQSsev8VwrfgUtJg23qmDVebPcd3qF2",
  "key14": "61Gsg9DHhT5rFmG3Hiem6WegrSPfBwbNMTKrGXj1eSPipTjnkc9FLiUzfB1uRxi5YCUYGq2huEryYAq1aiB7Xag5",
  "key15": "2bogzBVhFHeuM18wrJ98qubjwm5b9QT9dNgCqZYSC7TAd9iTNWboxUMHu7TPZBVf4ofBctU2QXmHJTLfCsjyJD8U",
  "key16": "4huvfvNcvUrTATDPLHBg8rnmn23NnmvExgnPx1Ko3CiwdFeaVWmryFLGh6hoJDtRovjdKEUg3YTqVGaaiR85GFXy",
  "key17": "2z2Kw4hY8BFeUSMRRh8SbDcGTY7nP3gLLFZayWD9omdv3kBXLp2LdybYZprKLPFnY9bHX8KdPEo58kDGTG5rw4AS",
  "key18": "5YiwJaDgM3WaikBp4xRRaQXattGtVtC1jJD3j3qUiRFLoPCaEb6i1Q7Z9V4Fkybki3Dgb7Rgm1YYkf2eXi2ZBsHd",
  "key19": "5zYYEj3695irBsyfdrEncVoRR8PbjnBuT8nAmDZ1LN21eEMwSWeuqBis1HepP1FP2xPNHmrkHvG2VJ2qua6NVBJm",
  "key20": "AzXX1zsFvpzzoFNAdhF2y727NnhThDxzKW2HTs9oZ79DakEHHAnN1trdYk9nMv4RT2Pd1gjsEKycUitkLSrfRKH",
  "key21": "5Sz28G14bSdFkjjm6Y68rS85LYH44bnX1oDwR6GEE3h6JAC9vbakPudsWBRxCwS65ezWp6kmiynxkvrUhyMtD8KU",
  "key22": "3JBPXWvtDWCVoofJQUsrLK6E6Mbtehw89pL84QhbBti1FAe7pUPPrPkD7V2vDzcv88uvjZZQ4vSSEvswoHvhVgK5",
  "key23": "2xSz1Xwn1i9U59rFFBN6Y7kvo51SmU7zasZiHdK3sdv2sHbpDjZ8Y6Dc7S7P79GG2awYN2mnDekiDgR3sF1CUinr",
  "key24": "5iy8AzQeHZiw8pjN4b4qRPDdfpNEBVwgzHm7mnL8yPYjqwkAMZ1iSrCoAi9sPyZJQABq2HjErBvNxPF8xGvjuFim",
  "key25": "4xXtAn3bwpxxBKqxykjwV7boPB4tPQbkpq1RSy4Kn48sTZbRR7c1h53QVNMUdSTpxyNxMiTUV1YYrAXufimPCcT2",
  "key26": "2pFj2H8BnsJdToaE5gbUjVVZXXsXLzoMSuw6gxThtcVzsMP4JkaSQ2LEMdemfQ7bSDkKzqPAwfxGah3JwQZTZk3y",
  "key27": "6dNn2L3DmxL5myGefaxno4ZV9QLq6Yac8se3sM6NqkMzamv7Bbd2ypDDn9JJ6uD1AdH7LU9io63ATkFu8rocyRK",
  "key28": "4aXfci9taeJrdGq7a7wWRatepMU1P4bopsMCoPFmG9eoog3vqmbSvLtMnLByHgpdMKVi9ZowSqhGC8R72jewwztu",
  "key29": "bK5FbD8cByYGpFfZLzBtHZNySBoTnqUn5kWosAgcwYqGfd5b4QZspTfpN6PX1GXiHiYsGaSinByyaC3HGsgyZX8",
  "key30": "5EAQ2muDrPxAn5X9FyEKsFzsAHZBZP9cmiygAdaLRWbxbkqg3SmYLKyfxJCerkyb5o38EhzaDcnNzoLyics5uXoR",
  "key31": "NNWBcNk6VkHA77y8fRGJj3sYEo8wNmHVsJED2Yf96Yafko41wm57CczDMrBiLcErT2hCKCM1mvqSivtUXPoL8qf",
  "key32": "4oiTKVTk9wgNMfbc9sS8k35U4xmtowumVzBiJeAAbLmE4AthARPc3zrTnZzeaKLmUfAnuXjkQvc1pJRRiZNXwMvx",
  "key33": "PCU9K83v4LrABwDGaQDZiWBnzV6n3KHrLXGpT5BV4JdTVHWkDYNwNTYj2hgzwNVxDf4sbzmRbmDGUEbFUGCvgjP",
  "key34": "3FaAdwZUNecAYNKwkypzmhHfwCy8rSaDP4z7Cs33KHKKBn2E2BTPikj6AB99Umg7xeyyQS4XhgFg1jXQmLvai1Hn",
  "key35": "pVAdSumaqxkZFHAq6FfZasZEbPvR3adaWTmBU4rE5unq7h3czSY4Tz3TWnDWVvaH43euhFV95QLfBfMPQP28qgA",
  "key36": "2ULudmJ5hd4s7biU3THen6KDBssGMjQW2fz4N62oRT6PVdeHuKe2gswugTbCFed3n7MSV3PuepDq6CQFRULwDRi5",
  "key37": "3Ympda83zU6tgp7wp3wMi4aJq6LWzGBvaFCRDbZbqyGVth13fD1TKCfjLTCqLWXWkjcMV4MxSP3TpWZbgXM2cXcF",
  "key38": "oB4X3i6YfdjMv5RRjvZAuSJhJMR3vAXLLZCf4b2pKpnp5zcsf171wqQ6TipGH12md1499o2SXEkcLiGuSaWwTUi",
  "key39": "4UkjxrPujmYowkLkz5KKXAB6yrWx18qh12tTjUtX6Peg5H33T5Cffzw7aFWfohGMHsp56f8uxrKQ4VQQrR7jvhUN",
  "key40": "4nH3iTEPtKnPFHyX2TDAqhmXTAe52VaTuc4uFfd9oG5Xc6Mg94UvdrzdcRKU4oRrmRAJuFsjseUWXnQVoA8SEW4G",
  "key41": "5fKS7Ep1poVHigRXKQo8WCUcV2nofTQNi7MDEKXWmJtgT2sdeEqMnAdYi6mjhSNDU9XRLBJiGuSkjwTbKwdAHcsi",
  "key42": "2sKyYmVv8Anq8mniV4bHhUHRLn9ALUCWNFnBorBoutxMty3G5ERmKm1K2jm8FJmsL8yF9E9MSL4XVG8VLKWk3k33",
  "key43": "5euUgUzkLPSxu6kUDetbg9EekZXdLJKyhLJsSaoKvjRS3saJfEr5isSw3zJtuXUGyu97VHN19PKr7QA5r55rgKxv",
  "key44": "3ZSqbPziJGtfg2MQLsitUYSfXjaKwtMVc92u6gZUnQodevBeea1z78SbcQDSC1pfNx3T7bJxXgbQyGLeg7aesmab",
  "key45": "6UzciWRWJmYe8ZJM4orXpsk3NFLq8AHjJao1chUXkzrXmqWJFeoFD6W87zjDvY9ZYtkYcoH468xc4Kfak8G6BcG",
  "key46": "64dL6SDJutJC8V4MxoVLt72go9DZxffSkgnyeG6f2xt7QCR1EmGQcYgnrPtLHWcFw4A2g7k2LaCuhY2HxgKQNkXr",
  "key47": "2FZMuKEGXFZi8rbYjJ96QsSwaeNVdzxuKSvn2jThW493SRbYDYU6mxZyakRssxW2nSU7iszUuE5rWMe91yreSoom",
  "key48": "3H7uFdWyXczK6QDXFSERKfsg1KzDwkUx4EQd2RLJc3p6iPaWdgQ3J1qxwZ6Mkqs4jHSo6A75k2WxUSL88HfbjtJo"
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
