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
    "3EsdUmkSRccHNXCxh51nQKvWABeyKaxzx5jGxT3Zk4k4dyzr6Gn3M5h1LMABqUkJAizUQ1wrKYvc2H4XWyrc1xLq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QuqUPbTcfUw1Y2jmGHaKB4RpBh2kVVtKsBXTMra7AyujbPzx622fSjXRDVA82fb3JqdaL4DB5X7HS6vFALbcY5s",
  "key1": "26XRB2HJyawkNT6XnAJtfdCCDTAin9KNbzhQWN15sEgnT2CM4EDpifDBEw5Dwc9pcLmC1cQkN8dx773SQrFgBYu8",
  "key2": "2jBmBDjupdgkFhPXPfpUaCz4nG2F3J8MetXRs7F5Z4Dk1TrkBZZc319GEc2BpnfFHW17YKqnwcWEwqbFYHjb3xRb",
  "key3": "2gGTjfBwWd3xwvspNj6HZVF5jVofhNTfsaNmbuN9UDFFZ1fePfhMW4bwtfqCVQzNsTexk1t3swzA36h1g1k11zRs",
  "key4": "3nMpwjHiiFfj3XhFHYUVW8dvziKBCdR6KyKK6W3ScDeH98S5QbWkspGscqJKPhxotjustdKcunBiBAmjsEHVGfmw",
  "key5": "62HhwXD3aM7YZZYV6N5XpyhqkPZuzHVviCotFDypjzhvvXtFeaqwggTwNCiBmdvRsP8gpqZ4VzMMcPVNY93XBnN1",
  "key6": "65yesiRbLEyYAq5HTyqWbzKEUdpr7HPZFv2iM93dFK7ZKo3amSh5NjR4gojQtHsfGjusLvyhH71xgTXmm1wve5yJ",
  "key7": "2dVdzhqTkrbgiUFfYkfYeSxgcJNJnVSVAdDKk1qBswVPaWn1J3rcbMxbFH3rwsfgEcqj1XGBwmNXy1xyqVoKvgYW",
  "key8": "5rtW1AwyaLRC37iaaqoMiLUVxx5zGtSUZ8Ni69yhbsr1uik2o6vRrJNc2ZyBmkmG45QrX1dX2jW1E28UtJ64gpiy",
  "key9": "ymQFFLCBmLkaKuARe5MDwnMoFB38zFcKc1nJHvEaN1gtfLWYs6aHwgkmNFz3apjNnrerBTiqKzJGfvoCFhHCgUG",
  "key10": "H8VWXF4D3wSU9bJ5eUYXaqy34h2DkqreF8pZ5HyamCKo2XCUVh8Yi2Nhk7S7q94V7gSpjPc4Lcca7yfw2bgo6Qi",
  "key11": "4xzzSYVfjjTgwXhrvsnujJNyxBvUg2JgzEPDA1CQrxK6BBt1kgm7d5FhWvX8TXqhuSVRjSEzBypFU8EDJQx2jSTb",
  "key12": "39epJA3jmq6Puuf89ALj99CWUDeB3KS7HCsmK63fNUUTtXrP2kCYngPU4Myka83D4HnHgod6yi4BeyGo2rtP6Yc8",
  "key13": "5CTXvSmm7ZkNyEQe8dKtkmyuyuLZreGPA3t6KCytNYnzvZvKcq66WujueJsuPo2ErvuXTX3UfuayD7PMFVtr5jAa",
  "key14": "5H8KRnqPuvJhJQ4gjGiJ93KMMuAH5UxR4i3dJA7ARvGAhcfCnhRHoCPwZRGKCnegr8Nbv9d2HNtQC76BLrhpEPuM",
  "key15": "3m9ecb7bb48u5oiXcTHgYyumEpiSd8JE1msswV2AXCesLHbcnEhwjquXQowfWziAprzuAhHkY2pyQTh2cTqRPHNK",
  "key16": "55myW9uZzMr4t1qoNLytCqKmXgW2seKScGTLKsGJMebWzuiavmomHPyyH5GgBrjxABmBijreuvCVyniKsqSgaJdX",
  "key17": "5cw2YsQiMbn3fean3LEwzCTstmQLP1RHEA381WHJ8Q8mpexwxkYNPyG6uxgRnqQGuB5SA1DmnrZDQ9fWhQRCUU4U",
  "key18": "pfyZP4Hi6af9z1J8JEUaGNj1o2FA25SCQvdYmmXqvmADc4EYz4ZSxvAU16wR9ahPDpCyDCPRkPymYcdoRrPpoEz",
  "key19": "58hKrntpUXBVXS76GV8uVkKwvEgng29YoHUpfjgTwwLGTAKcCotXavAmsPQxFvXP9QenhuWqeptjNR6Hmd9mMEoW",
  "key20": "4nqPA2QXccTBQdexSNUessqERMMpmnkRR1LVDgQ45NPhGXwyk73aMLwofvp2qnLuuLXZnEkW2LNQeM4YhZrPPDVp",
  "key21": "3EASdoo8pXRhB95uNGQ4nX4coooWAsPJHyRZcCCBgEYSxeWTASxkE8ceL8aBrVSp65f5z8cRKZVJV1R7DvgK7sNT",
  "key22": "eTtBRCnfHprpUk4nbNdZesghbxw3LGQezB8c8ohUWU631fcTQioyKLdZmUDq5LqyF7qnxLbMJfEwB5E2VJ21fep",
  "key23": "5Cf9JhXx3JzKDtNqS17AMvJnYtf6Km5phC7tCr39EGW8mm9TqnJZJFWTEnSAsfMNoLrmN4D8Zkofq4NHqCQSEeoz",
  "key24": "3vHxpFEkNnkkWGPL6r1WgM2WdMb87GcQrs8PRG1irtWiQCCHADyfGFVK8qquR9Ps1XYUN1SSFZtCu3faU6FRAf33",
  "key25": "3NwFMqYVPDpWPmg3RPL3E1Neeh3zod2vHuxscQMdcJ95xgrjLWMsVWbo3DxGe5oZatcWCDHZwWawRvRKhU7BF9Ap",
  "key26": "3j5T29fbXxZurBm5ASTSLvsxLY4XMPA1KM714vH7C7zwoW1vLqS3WEWH5SFGMxhKKeDwuim1UR5XkoEUbSpJxHjm",
  "key27": "5V5xtySsVkGyLKvGJqkJwACJKU7uUvTBuT6kaZPBD5pexBhN6ky5Kg9RbnHXYwJ85dmHPHvxL4e8igMxNHSJJkWz",
  "key28": "5y3NdVbnbFkMtu7dgTyZsPisx4edgP1KENjPcKynw77P3BQK3KBTtSxuoQ1fhJwkG63smsMB7TbmASWxDmyArDZg",
  "key29": "2YiZ27w22aU4kgbCey11Mf9TDa65eWEwMvH8ivbGA3FYUZ92hor7nGKpGprt6cYDVxWmcBT8tTN9q7WU7hDrEato",
  "key30": "3JgxpQjz8Ug3WJuJeGEVYShJqHqnVWfEhPAfkdmJgtxgD1pad9JxahyQawNp1rRPVxwawF4XPK4ks3t977ctRZye",
  "key31": "1RV1L5wDiwQwSVHfVtz2Zd28jGdMoEBQWCWS3CGaqw9KgMy74P9aXzregxWdPfE4tTqNEhsbbBK2FBC2WkkNRS8",
  "key32": "2bP6FPeFzETB998Luay86A3CC61QYrEyHgmh8wKovUgZtRNhZWs4npsyux4z78sYBBUhd2hbcji28ermSEfhk46g",
  "key33": "2qccEAg1RZfGKWpEGjmGQHSt3KmQc3mZi4sa9KnhpZegHygqnxhxgP1ktV7ce5HEGbbw2ZvYajAWjP5yotHb6ubr",
  "key34": "3RfCjJTzmKXCM1c8CSDk7jot5cQqc8F8wRbzPVxBXA59SMTnnJfQPHwu1hxaHCjdySSKkAb34SsJFzdVLTcNQv4Z",
  "key35": "QddmTwxzbtnxmfuhRnFKLAjYgFWTzNhYCMdvu8NvAH3TDmaF51BKP47ms652pyjiTmijc3NC3WnxTqsG7NiTMMn",
  "key36": "38hZVuEY4Jt9EbePCXxkSrncSV65TCo4gD23oDJTvz74F2zhPUF1qE8tb9erYnEmopQ8bxMyRQ9PDC8qZQdLz19G",
  "key37": "394jZgP69Hy9BienSQEsbHYDPvSbpACARNgu144BsMPau5H9UKwmV6XfcQkqW5jERb3Lf6vLz1mZ4yrohnR1v5wy",
  "key38": "4N8qj8NdEj9rSK2cq1RLpEacuMR5qeC5Qv3qxcrax3bA5qjnFWNuENq2xMmUnuuCf64fiQRSzdu44sBTf2qiUf7E",
  "key39": "5sVHsaE1uJSqkDMouNE1P5zd7c19232erTZvWBPk7GFUoYnqLqQGC3SU6ojVWggCc4kgJWQHoJzQUdEo37EXpRqD",
  "key40": "416z1LZ69qN73xjYJHP5inUpxVvaTy8DHbaLfm9ZyXUV9bDQ7Ns3tjMTyJZ6wGwutYeXsUNawzqUZ95wWA12PnoM",
  "key41": "2BfYewmKLuHHJt1Z53W8kzC18KFtQjy9ksCj6mmGhTkcmV8LxiQRWSdGLjnqMenQ2EWsmCiDnUoJZPogEAvL9UK7",
  "key42": "62x4UL76TEqrsaXj35DJSrcPjt5LBRceQ6p1vbockaMqz4r5Th16MiZk6kfVtfz5xnXpgQ5zFxZVepKrxHjqLWP9",
  "key43": "3GkHWCM5PsFhiwUdo4T6BN1QbwuVzHJWPX49abPJk4Fjjykv1ygLsvvWuuq2PRvg3d6c3uLVxN6fPBP8kBsSMnoG",
  "key44": "nvJgbdrhDMgP2Kpdv94WxYGB9UrVohJh5wGtxEou38cEqgVkf79SaaLDnd8CBEAmaxEuXDt7hzFeveLfuBiyLCE",
  "key45": "3xi2Pa3uo1AVaJe6yVfc6NQ9equHAwWLvhT4fuVjsf3yUGw5brf1SVqG1b5SmJhF8UhvwZ3KEtAojzbbjoEB9n23"
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
