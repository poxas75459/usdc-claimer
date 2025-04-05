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
    "2FbFnJ7a9vtSx8x493UdJioLwSzFrB9CmiNSQ9w2ZQVKytbYcKGaChUnx3wajxczRtrFFzVp3MWhbg5FuG6gJX8s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zXSmBpmQVAwxEXbhXVnyBCKBiBAXVYYqt1DVpNtFQFw2UvDWUPXk2Cx1BjCijCTBza9HEGV5JjQHqAzetXmo6ee",
  "key1": "s1bS4nwoGM3JKM2gfX6G6ZxCfH6rHbnrtbpmAJazXiE6ZGR1NcwDkGUS8tSn8PPecuS5zMK2v2qBWLuErUja7GS",
  "key2": "2ZsBvCLfKhToa5Fju3NHtuagAved3maFH8h33c6YdKZxmrWejk52VZ3FDEsjXsBKBFoMmHUkSBNT2MDcxFMPbuA9",
  "key3": "4J32rVuB75h6Th1XCMwMEfg7M7UehB8f31RhZu3tWRYhtVpk7wgLeKk1kZNEEAUHRsoRyTaPUzwFGinZB5ComexB",
  "key4": "mnVoXWSz6hf8XZtaasjgAZg63qesbVJB34H95SdSiAzmGX3CKxXhqDH4aTyx9yEs1ifCqacaNGYatsywibCj9WC",
  "key5": "3BBAmMzuNBJCmw37cYcYb7hZjA4fdt6kt5gerC47k95haVcWh1nWrkcNfE5RVXqw94Qb2swZV2wBX628Mg7iktBN",
  "key6": "deRRisjpUHNq6SYrLj3v7xLwf5EUZF3bTPv3eLFHmRuZ4FK63dujkiAkcNuN314rZdydWLaU2j5E7yTQpRGJ8mM",
  "key7": "3i71bji5k2xijo6y4rPdjLzqR9oHyoMRX12rt9N41fjCGPu4zP4mnRPexokocaqQ5QMth3uqGDfiCe9eD6FLUVHx",
  "key8": "L9nEginGgAZuzTvP59v8xQ9Jhi8AjWkoj414r7HYdk6axiPKnTDudLXtURdorMNY8HQ47QgXKvgeSht3k1mZH3y",
  "key9": "5f8MZUPuYRqSoPjww2FWhHetxzA2dcy47AeBG1k12RkrXHH9W4yGTZjrtFFL3v9Xa1uwkCXAoXQWJwkpzog7LESf",
  "key10": "4oeHcRwxvmyTsEqc3djVRtzKSEWVivRk1YvxeGVGyFsUsYuVHtrn3VJaw4QWfxhKyFxdSDMYoKTQBUZoZZpQENYm",
  "key11": "2HujjcuYqkqUjZCDsHN6B9iKzrxyghqaateKNkbqe2WFJ6umzoPrKMoEp1guRaj3bH3rAGQRnRKkjZRBf3p5pbii",
  "key12": "r4CwPXtCZ5eUKCinCkMdm6dYiVhyfNKMTCKx2iMyaz4495BsmzZXtYmxzQ1P5DLiaktaLdUcas7vAj4fJc33J32",
  "key13": "4AfaYFaGDeiW3TYsEMQJSa9t9RJrUmnWcRT5bTJiXkjdAJqNt5eD2XZJowDzDuZWV5Caw4Lj11LfhM6wznPQUY1q",
  "key14": "2FVnrhXWVaYHPqN8UVsLB7TxvvGPLf7cWkTAJqzCzZKTdypJdQdduNX9g8DmMFbPTr6peMoorndXMxKgVeupJrYq",
  "key15": "3SofL6jFSCtWS5tiz35XMDP87vwQ3xCj8ZAMYeA6etuCXrd6kuAsgnr2C1K5m1FvR4hobMpK4mBWimqzRnfKmQmg",
  "key16": "3HNSHqDfHbg2jaNnQ7TqmGrULpp4VmJVwTAMeg3earTJucf4HDkFzaMpKGY5X8QxisChHmdPRXLT1nJrQHjMuQTy",
  "key17": "56TyGm6N23JXgqXa6ZyYDYVhQ1ybjpz6WjzNPL6LExyCRcUS4rP7YNTmAdctKUmgPogJL11prDiUpwmv5ryxwbat",
  "key18": "3XMBMo5XKfwjU5iHq4E1aF5ygJHNVdpc71aaY2Cbydyu6AvUh8nrGgeGJTxDQUiyddM3XxUnEmsvXMFXziHVJEMs",
  "key19": "22BCAc2dV7z2rtDAMD9UErUdNra4MjkVxWdRhJdyH3PmnVYZEirm7LHbvoXpqALWjfmpa87QuuntDFSfKEprMa1K",
  "key20": "3rjhRMKptkuUwnGfrT9oBcMx9STeeNEadvav4QCrnxv2oZZ5x7ZJfbbZgK7v4PjNk2re88T56V8ZNWqaP9Hnvv3u",
  "key21": "5Z1STGB2ytKBgVywnnBFZKxiFe7QGvWsJA9tvVnoUUQSmewQfbyJUo2EGbeMyMSMkvLVCR1Jj3vTE5Gc6FjqwX5w",
  "key22": "2sCMVjANyweKayMme6Go2mtHevjjYvTCZgv3HquorB68Nxa51qUuVpJFyLxm5zFLj4d7yNJz1NkrQCyTS4mvS5ZC",
  "key23": "3Sr3Bmq2DkqxiLieNKuXjmk6ZkHYsPHKm8WCtLmVY6Fpfh2LapsaSG1hWmjCSRVreLZ4E5m8FCxoAfmbSmBptPzz",
  "key24": "53DUcZ9ZDfBb6j6hoBFUZK3ddJ5kEatzCPEPJFoG2oyDcUUwgKq4Wgt4pHsRMFLfEhCBf8SKs5xYzmaJ6EYUPwJf",
  "key25": "4dAhXYuMMCoiKMB29pa1Sp1pEKxyaVZWdDknVArWamcS24iQvEN63pRGrjivfqrRJjZgho8rnJY3t8e3BdoozmUN",
  "key26": "5CM6cFfX692wQd4j1NTgEeMDE6gDcRAxsyvTZES5APiWrtUDAsRdBcmmpWyrgEyBJiGFSezagPBRL8HgnMHMkeck",
  "key27": "2arrbLJ8WzbWMDcZgb32XYvCkBMYq4UPpYbhWWwHVGmYaRdwRWsP5tFw8t7zGdVhkFn8GzEpBbfPeh6CfVDPAGvT",
  "key28": "4SiY2jd68SjEQKzCz6CVMtai8Es7HsLCZPk38G5pXV1xoGVQkMT4i3f33M8tYFDoP4L15CcvNLjpSNcZ8z9fW3KW",
  "key29": "4L719Peo5SaVBbEfWQS9wZ7RsGSbaewWQN9Nezziyy5bNpj6xePzg3F1PMsLWQSfkMUvPUnap4CQ2LCBUrMauw2E",
  "key30": "3brXDzoJd4LXHG1EbRFu6nfwxKrUuggeGXJohrwfwFw5fhoTM4nArer76aE7q69NmTmQCQa7AKUKXzaKBW1tXY8a",
  "key31": "2J7bx7WBeh7y6LyT7sbMmGvUcZ529SEpx4V4hWMjDdS2bUkRmYRkQ1VHTdjrrTN3hp5AXTDo2a5q1fnHbPmWGbG1",
  "key32": "4UZaXFtQJL6Kyj1JZszXFFMfq3kpcQgGEiRxrxNhCUwN5auf1KHWms1Q84kqvBiuCeE6a9Df9bAZH1jUTbF4Kaqj",
  "key33": "4gATWyqMfy8oX5KbiY5JMhQHNtHrV3ZeFvHMS3AC6K5gR26wNubGKrJ41BZdit96TdJhimfmYgPxQcBUZXGTKz7S",
  "key34": "5xraz7pANZ6RoFbLdjvuabLe1cjosx77yrqzYLZ6tD6cPy9hVt5Q2rtngnmi1rNAL8yy2NF2orFXQvFACuXiwRmb",
  "key35": "2ok4o4NbeVVDghrFeC2kc7dQ1KbcLCdd2dZn9Gw9hovf7XKgf2ahZRRM88m7sYwUb2VnVb4TLzdyCTNiwp6vAN44",
  "key36": "4XoAQVnt4sYLvdFotyqB4KnHThBDXXZSmkk3MEscYykUQ5zCFoYFygB8V7UXH1jPf6GNCPBwXoFbyzDgUznYWH6T",
  "key37": "3un8766dRp1AZKpUyq3t98w9SWwHNp2bgYK3HfhA62ow7w5QPNVjETxtmNZ6i9VpaDUA1nES85NP4r4u4wFCBAgE",
  "key38": "4ukozxhS2BtRSNCdi8HUuW4WQr5pwXZ7rKcqUwQuGPQy5SrCnVQd64wJzZmjyDUme22mAaQKMvS4jX2m6A34SQZM"
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
