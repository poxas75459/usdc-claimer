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
    "3zF8LPozdF1NhJ3HeHmSMDaLyYiZVH2rNyeYAQZsvMPB2esNWcxTVsBiC3aqEoQ8wA87UCwGQ3Q5AGEQAj94XRUf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58si8zBogauabyhH9XcZmC7UFv34xvZ1mqEUuYwSa268bfvDRQp4Aq5cT1K3toBGSqKvgF64CeEdiwzAcwnCZZk3",
  "key1": "5q65tXcmnrCgZv81Hcc8jM8Zesyan2XbzjqGSP8WgmHBPy6uMLRkHGuR8wpqpNkbCyYudy9uTSqoBgbiMnsomyKD",
  "key2": "3CRmqhBWfX2nfYLjS13DVjaZ8oaSzcHWwa5nbq5VbpTgEpUcijSUb3pe7fpqqwVYty5Dw7Rtm4ZV82gj1Zaso6rc",
  "key3": "2yf6Rn4bmFeL8f5V1CPZRn9Ghf75HM8gGo1EDH3b1ETr9K47gdNS8JiuG9wQsVZbRqM6mmjaoGuRnWdbRttn6XqK",
  "key4": "L9x764BmiBHb6LR3ukj22NpogSFZXZ6DLSzcypcb5jmqLtPejSGUf1uHoBY17eyUkaW1W7tFmuvBcEXnrSdjHWx",
  "key5": "27AT4kq4dqUAs8eUMCanJfRuXTciaobmzKPECXV7jQ3UGNxRzgvHxfph8nsyFVB8pZQsK9LqNCZmtDG7LAqiazzj",
  "key6": "2umtHNbZq9RbuehXAu1hxas7szS1hu9z8scY6vXhniDVvNjFnuerCn8i52i7jUCRCUnytKdGh2BVZyW2djguFPYg",
  "key7": "2a5kpvQ3ms9aEE7qU3NmZFr68mGh3wrfe2yQkkLGHQJgzirp8rGeV5RZDHyvQfq93brwXeG7shaxsc9vGYJnaBQP",
  "key8": "3x9zU7iyo916rVG1btszYMEkTAnfmcnpUNnR2oi8a1FrPjJTuYKGu63gsF3kVGvSYtZ1BXQ8J1ufTYYtof2NPwmt",
  "key9": "2VykxewoJWyhQ2WgyFJQweJDEQ6p6A7BNUL3FCMzerqniTp8kNXuVogcN3KfEFt8W7aTEaN7LiNmF2C9Jy12Ypf8",
  "key10": "LyRrMMeogXHy3SKJzXmDfPLArqBfr1RiehYr1R953GQMDPi2DpRms7j3ev3q6okAHNGGMYUHuuTeibyERKBdNhs",
  "key11": "3sGQmZPBrAAM4PtSrNc9fMzToU7bdKuXofyaaZjuaGBEMRG1SYs26HJd4AY4ubN35e4Jy2B3gk2KaAMGPit8brAy",
  "key12": "o22yZGivNHQsVQ4eb5tgNmEsY7tQAC3u1BFsPsF9kdGkYJBJ6VGRGKEaN4EK9szE1kzWWosGmtPv8nxwdAWSJeK",
  "key13": "4zLEwzH3FaQ8RUR6tMocjTXHob1odbgVLfTtrnpRCBRJNjEFCshT1qutfBAo36zTXduZTJNMUJYGcB1DRgEbYhSA",
  "key14": "4BRiJrFN3FcbV2kCMpJp4NcV7Hmjbyzs7e8jEsn293WVutMLheKoHd44aSN5dadDv9c6zmnHYWS8ybCwR79ckTHC",
  "key15": "2yf2RdMZSRGCDVPrQvm8EPH1NALGRm46SHZYPdSmyNuQAry1prHPasTrN1VeN4Fhhyg4pP3f28BU1P4QVLeDuGvn",
  "key16": "36mrYj39zHeiJUasqAYUR3QkBd3fP3hnQ1YFaEEJmpxW3QjmgiT1Su5EofohgKBTuk5oibyGNTAuUYsMmGCVACFU",
  "key17": "5YXbvzNrKi3eihS8gb4TfCTdDptqHZkvmJT4U5eutnh6moFDkFHhx1bXcUtriLd7wicyEoEnHdyend4vMTBPApP",
  "key18": "4F6SJ79z6XPWKVwDXwAuVR1JxC7JbQWpKVD6RAH8rXLABGWtpHEcYrksVRLELX1PfGtFSMubpuJUaHKjwdgiJQLb",
  "key19": "fGtqHxo94ohjwLW6g4erxC77pkAy2pjKoXdn6UG7iki9CypTqg7GjRHDVLKpThsDyL6C1mryVaZ1a6N99Uj8qPq",
  "key20": "33n5eC6BeEgQLJ2GGajhrSXrRi1B5bjnYkRdVfWNRZWWgTesSEYG5bZrrvYaz3BfKfbFvrAWxPdAxiHPWWWVyhqw",
  "key21": "3pbSk3rzM4bba87K3ZCrXYiu2g3F713MxfuV9ZSkgL7dxDHYzanuMWe915WvaeHCx8Y7AdmXttsryArEXZFhrhKx",
  "key22": "4qBBGSpVmgBYiJDAfQKTqUct1eU1xmQvEUki6kUST1eD7Qdw3RHf6s9PPiQfiCtypFhRC6H9eWGv12jWvWVJWjXa",
  "key23": "42apWY9wJBnPUN9ePHwS9PBqx3UQexivfFuzTDA1NSUoSGzwe6QRZMJv9UUhztvJ8nZ58V4bxv5PUCSCYbAaYcRk",
  "key24": "34XGU5KqGfysHaoMMnDxEYBkWDche2UJq32gEVH524CGKfKN82SKckMYf8fpcAQErH5ZLSYeRbwHYR1DJEy6DGfc",
  "key25": "5VFK9M4wVRcFubxqDx16HgYed5gaZ1vyefwHsKjsWrX9gpWuYUfebTtHjW6nWregzgvuAh3Mq8yHHDf7a1Y94y8m",
  "key26": "jDRoZyk7XyVNXNmJ1q8EHeRKciLmRAZoveFZE97vuPiymAGKZ6upQezk15HfzXBCUSpuCEwp5gxWPY3sXrUa9pr",
  "key27": "bYnnUJGEhxszFp6ZtWy3ggVSFjzGVjivne4cFo7aEdY7ysXnhRBKWGiH3BMHVpnjWCwrZRCA2rJYLevncPyLADc",
  "key28": "behfPJmRfF9djwaYxekv8snYhf3wgbdNMRiafmXKrWckug3LbusYGmVEYfVVavc9MD7ZhS7UUMJXqT8bc5vjRsV",
  "key29": "4GPLbX2WNudYrHtDq9oQMuFgoirUwD7KALCYu7E6L7oucTVANycaLrqSjRkACxfEHiAhpP8tBHeDb6MqnCMwGW8w",
  "key30": "3ySHQmZumZmvdJK3djkC7Qpsr1GDkrbCgSusZprZi69ULMDBK8Nb3Eaf539aSDzECjqoUtnHCz9jqye63XC1sv6Q",
  "key31": "62937vRWdXjMF5Ciws64crY51fC6qEcuZMR58Nc1dfNYZiebASoLNUKPvZ9wR2NTbYPDUX2G8eUXTxQHKSyWBcgs",
  "key32": "2ZJxrjmBk7tShm86j1K89L73fULGy2ftyRmH8Y2GXMK2rnLaGFgjXwAZTw1LzoLvN9LDhhjn7keeaC8ti72CcpgZ",
  "key33": "5j9wfFWWSCxas2ptM6LzqC4CuWcoKpwuP68RH6qQaJoUyLyJ3bQm5qh5yasRbMd6fqXDAL56qSHoccoNLPVc1tpG",
  "key34": "2pkUrKgojnsABYuaE9hrmvr4vdJvLn8ubymxjB4NcRwVgVmRKPud5UDpvH6LraHMftsaqYV9NooTvKzEEtLXMQWG",
  "key35": "onNu8NApbKfHoB4QZ84hWXQ2RkGMnTJjhMsR3Dko7mF6hRcDfGYPfBdbPikTP4dbC456QQcAzLkYhGmB6MER4ji",
  "key36": "2q5pP6zJX3bM1nG8UJtQbG9J8gaAmDF5v5GQyCb9feCLym1ohyMtzjXkjdXNo6UXfNtBaxJZPCirukfw1o3U2gm",
  "key37": "5FZgJYCzcEnJ1ExotVuedecndKvPP95F4cdf5rmu3ne2WRc9RaR1G4bQAYd8mcGWw2EqK8zaeYkYGWjAFotdwiPs",
  "key38": "52p8GJLXKLvrp9QUnX5tneAEtcJUej7XpHcsC8rbUKabmg3RjNHexodyzQRpS1oktUM8xhRKYrN3aYXkM9gM8YQu",
  "key39": "3BuPW9TzRyqTRzhrM5vT4PvGf69MxU3aEc5iWWeVTSDqW2dA49m1pUTW38UDo8z2EFkJzWHcVrBhCuq9FP9WEd95",
  "key40": "2L6TP1AGPkdV1328MhxHmRjMHngk4NRX3EDdDehG3at9arwPfduVrKiGxfmUt4ZsXbQQwStg5hrTEYrFyjWJRaCm",
  "key41": "5H3AnrQyjsU7dYb5VbkySnrfBxntQnRu54so6vgymJVZgaGv2LYWWJeiyy4xgsJS4qqhgtqvfSWow9ShrMQ8DeVT",
  "key42": "4Z8NK8xd5xnzYkRafEoz4626uju4nHBNNiQGaqBSYKSLxG79qWHcn6N2xutqysSJwNC6padvpFWp5r8rHHC9WNdr",
  "key43": "4YizJ5xJrBfSCuqcqMMsdqD4zWMkcn5decBAHv2AF71QXZyjwUdCZgiQofCz5QNG5GoPhZTnUJXvUrStRMqJid9F"
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
