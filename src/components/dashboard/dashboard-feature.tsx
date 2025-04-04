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
    "5gUF6wWsAiqhG8v7kpPDbSU3Yyv4HFVWNjVA21dDBM11hYXLa8R5W4VZJZJXZ3gAw9Yi8FMqXcMXn1xMysBsuNdY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LiATNFt8FTcdC1DgT1KL31vHaLGqeYiqoR6xbkebMSkiYfvtPdMDJs7rBdSz7BZbLevwm9Y8KBcfs8KBovfYCK8",
  "key1": "4zFhcoUC3mTutE6nSpYVxPyNLkGtnGCQBtevf5ApMLArHPQjVeAmXG8pAoe6jCrpMshKrXz8c8ieLZiUDAMGzLij",
  "key2": "5yi16BpVuxaucDarN75di2MhxZy52c99fcuNRCbcrXS9T9k7Yn2GaRA6yMJwt9vfQUbbJGHsmuETrDKHsaX6zJT7",
  "key3": "4nF726PxAqHRYaYb76rpdBk7JnFbjBvMZQR42k3MqirHqcmERtqKJ5zcXW9ABt2oser8a6cFCHY1ykyrD9bRe9hy",
  "key4": "3xJhb5oyNBjPEte1cAnCmGdMFcHyb7LS6wbyrq6RMxk4Xj1tHxSkWHgHP5ENnZoDTptZBSpiLjRrGXJJ2i9cpw1a",
  "key5": "51k4rgM8JaemRdieE1KMbF6t37mNhsoPyG1fCmBcenXto5h1DnfdF6HCtrrtBwrC4ZkobX2pMCrswD4gLnfDJsas",
  "key6": "MDgKq3QhMRUSaUdA1UzxdrkbvuGEiLGyMqxvtF5M3bNqBpuk35wn7b5GHMM6it1wfwixZqpoatjsirabTZb4zPY",
  "key7": "4tByt4vjQ9opmDtEshakGLX4X2QT2R3wkwqqMH8599u8QBJmSxfpxzjZinxC2zrk7DfQATkRcqRCfZ9isSpCYvqf",
  "key8": "2NZWKMBDvvATa1D6QCFC3gSdB33W9YQ1q1hgnHXg4X38dHjDiJuCACrbvehJ95VJExgQXf1oNv9zrzK5AGGsQvtm",
  "key9": "5AQKuiirc9MeDCfVQHwbRKobiQSMLbWA2GB8UhCoGR22PxyC9aDdkzZaMAJugc9JjEy8DLZktabGzp7gu5cthugb",
  "key10": "2oLn5JjewjpDJyYVHyPMWyXABoteaz32kmShR6VCEDNFMrQZeo42XRc2QFketMBs23A1XYC5ude3dpAGY5qTJHr1",
  "key11": "2rvfeHxc2RxvofcqvZP7pjnE46PdBzTQSza9SddDFmYUNby632yGdNzxxuGPbaKYqiECmjMuHQje1nsoPXxq7ZgP",
  "key12": "QTWz5xvBV5bS4vKASmHyyuXw97VDJarCEy8Rgy9Sh68WJqRt7ueTY6zyiai41GnWfFbip7UQsuHTM6TmYsjjtnU",
  "key13": "3d3FJK1u7MUDPbc5jsSvg3egMBxNWKq22hN18o83GwT4kjPGvfJYzumZqkiE97z6Mk9NAJbqCGvgkfwELCsaHggF",
  "key14": "4fZmZiWcdfMZHKqTLg9b7K52E7MWM3UYHDfH6wmM8djgGNDsECvQerzDZjHbabRujNfEQrkSqrchU95Zg6KpXiiS",
  "key15": "mVyxHj59rkdT1WQQpkk1ifokAhz3MXQurPQMFwB3AnGbF6ppmsLtUNk8HFuSEgphJ1dMPsbR1vf5ArSx5gZpzUp",
  "key16": "53J34e9aBcfpDVruuXG1uxDGEPrcXmqSBDiwRaDtEgZ32foKgeMnGMvyoMtDM8TPhrjj7hStbo9rCDoEtbriHkB9",
  "key17": "2BaYn5gDfNmrqKS9pjxj3mxZ3kaSzrXKyxymGSCtFQqbASk7XTNvTLwykseer5Zxpz6f13fPCuvZK4ZQaoQtTWtC",
  "key18": "4eJuNLweK1zK7e6uxuDubLcfx8kq4QJSSMuyJ8Mc2hsnxSVz7dK3xYDYTQn58sDDEmF94gdqXznW3hSroqkhzF49",
  "key19": "5jasPZjnYquqy1UmyZ6P3PVVyo8r3DgF4bdcJz5ZGtckiHyAmrvCr2VT2D9M8Xhb9bYwdrGG5u1eQbyNzTn8Hpjm",
  "key20": "vtjs6NAiFJYzQ8hYpCVqKo3SrfPXmChn51wxGgTpimAAdTb1kA5Ag1a8j6ByW8HuHPPAEoYucP8WRTGTGz4TxWV",
  "key21": "3gbAWUxRUpbntnX4hsbKJTMDHXPssMxiWUZFtEdzE5eprDYDHm95wDbTxmE14yKzQPkEWV6pSGuKN39PPcHfhg6M",
  "key22": "3GKRiBTReN76EgKPTWRnBJiyhTvur6zdDAxpaUaAbsAHZ4Dq1oDvPAQiXch11Qd5mW3A8aUA9yq7F8sDqJG8jbDQ",
  "key23": "3b42Y9z86UZ9khqSigaFrYMCsVdUxr48YUucRPRJcB4r94D6V1nHtjypxdC4FgXcrUEdv2xXqH6mJQPMS3CrzhtR",
  "key24": "WbvwiVgVXhHBEGfVcHmjTtyENKRfbhKMs7UtLoBZYdKihCmQ2ahETZXGcJ2JhPvLAUYoHHrKRhCJwSBZ4VARwHH",
  "key25": "5ST6t1Z6SbT9hVQXiJs3r6eNJU3hSV3gJBbnAfpHNmQmUJR9uAfx6ZvwjeDkHtWCUu2UZ22WoH7fqGy7sDqdwzcq",
  "key26": "4vNwk9n89VTj2g2FLGer8mxSU31gXMY1hFVWsLmM3zhaYinxSSx5rwKTrRSf7UBxzFtHHByLXZ7TwRt4SUW5V4dV",
  "key27": "4ZmttkfhRGNULgsFFAhMLvYAr1sEAnTTLFLMjfUzxjwdBf2Aj6UnsSdjiKniBbkXVz7Hvqs4XMEpiDmEYuWYaF7T",
  "key28": "5UWF66ogbrE2KWxjwhXoLqm3q2DcBWU4VM7anXpvhH3WXFZSSmvqDKNjYgUoHNQfXX7qKRuEjoZQrRk9rgWs3irp",
  "key29": "2GoUdX8X2zdnj1ehT5As6iU67SKkJdRnjTfi3JfbaWtDLQx7RwBTxT6rfvuT5Lekv9M3tC6gS2PAXDZ7NG5GER27",
  "key30": "57UWrMGBimWzWReCGx4TnYprdSr37xPAP51fvf4X3drJHtBCVw2zKMDx1drYKUjYokaAKxWNp9Voemb5CbWVM921",
  "key31": "4vLY1JLYJSocjmD5UGBKbU4fHVGwfi1gRiQNjd2yN8VRsyTDS7ekpBKW7PbzL9p4yrL2t6ybGvecyRJmJDambHYq",
  "key32": "3CLGMkHh5EdvgvPxjFUvmgprCas9tvfDhv2JSYHgmBbqUqVPQd76zsKZxn2z3gCvKDyt6gdTnix3pju14vT8sfMN",
  "key33": "3g8wxr5UK9DipWffndoMxbs7CoEVoMpAdjtyGxucCtLjNuzCVgZfAt8kSa7QtY6M8UTUQVAad3QdLtnQiJBJffEv",
  "key34": "2BTyWVRACYGtpr3cjn3Ap6mVkhNWzH1vUa6XqXnVWSgcfuWEMFfTgrcVpxwi7RvwQJ5jFCDhE1dRTCEi3hsrSw9u"
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
