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
    "2kY6BtmXhvXMCo7FpdNRK1MpdyyftLSbSHaKciD4xsJStbKCQKnn68EKGtknMjKnnJYXBCfP4mFymHePGq4brEcH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gCBhyimMBEzWaj5Et4FDKFtoLQ1174j7PXBW6Ppyav76HW2rjiCNmeQ8ZT61WCrdXYEmaQrLksgiGLvFEGxbUn9",
  "key1": "5EFHw1uSjaXBBAjWGxJ3nRiowW9E43z7xT7VV3aFAZz15gZ56kLFMaSiGP6ENo6g7VFBuAEfpGVyEViyyQkFafd4",
  "key2": "onBEaph1iK8LtVWpssSBxUfVGVe9C4qUApYnohu9nLMppF3p6bFxhUd4MXYHU4reEu4Tbpi41gCkfSNPkbr8qZo",
  "key3": "2TWE35zFFueMi8q2WR28WNrB8yJ3b6UyoxULViMfRQA3VMKiHBrwGZ95iu5tHqfoGWUWBzaQVE5HC4enCFvd8ELk",
  "key4": "5wbYf4mYanoccLJqnZGVPc4mkE7Yq5vmEyrrQFgyd6k58wgRbUPHpEyzVkmaXytc4LUJrXHv8XnNCNseuYW5DiLi",
  "key5": "5wKbL9jsowBWfAAZa5isdB4k82Yba6Hz57s6eBcDvxAEUGVjVjV6EzSKYMZ3zR8N9NTFHDiq5X9Yr2y7nZwK5SLf",
  "key6": "5RV7bp7oE6rD6Pp3XYKQZMKfQok8Vyu98KrH6CkgrGT2SzfegEypjxDRWYCGJLF1wH6HtvdoSdpi1QhWhqoNMWqw",
  "key7": "2NK8p596EeTD8ApgNg7dX256tSn792Q7sbxVErYyB6Uu2RSirgizagsMMG6BQRzWtT6mx7uEmNKYZC4qaLgApotr",
  "key8": "24GjkRH4rnzeTJA4ni98c92RtXCxknC5fmfrvZUUTRv7dsuxr4YcSA3nkUFfgaxz6UHzTphVXjyuBAhLjTA3qv3e",
  "key9": "2kD8VXZWXfaq5ZW2MxDpLouhjZj8Akz4EBdWmPLT5RYc74UEcMmrEcoxPZYJmzTdGQcPhH2eGAqC8Smufvs8e19a",
  "key10": "4LaQeLS5sjKJ8Jsz6JSNGxA1PCULEXXJiMf9xn5QMCpkYc1pHDASB3gUPQ4XoPCeGdAbixAF2PAHce7q2yrqSeez",
  "key11": "4pxC4AaTW1E24p1MSFHHBsyfXPDXfG2QcBof54s6TLfF3tiHSTyPnCFG5wDUE1UbEGNB5HFjToUa3BhcX67pE78r",
  "key12": "2VcH9rFyemiY7d5pfsnAUWjiFLXz3ZZTTGiMAr4XNKmZyoCsUjGJ581XgMK98fA5HZmctTTubcZckZqVGBkbLapT",
  "key13": "4Yzt1bLbvffPzUcfT1z72dxFMNxqM11FpP6QXtnHCoEScA4X5AhDPPJ9XTuoPK7KPq4DfYSBEVWptMw8eThqWWVh",
  "key14": "65LnAA8JeqnytKLQBaekVL3UV2fTQ7mkHUx4hpfn7pmXmNHEk7uNMLFBmjVGDzgW9mEN44NDdQ8P4QngZ22Jt25n",
  "key15": "4hEqzxvnY14T2CwVJHZhwpubtb7VNQ3XPgskoxowLe8DqtEiJi728t8ugo6kSFY1TNgo87U3NVv6XrpP3hoJpmyB",
  "key16": "3L4rea6gNv9TgcmWPzt27DudPHAitoa5u25Z53bTw2phh8jPWFNiUwdcxZvB5xQBuerviiKJfWDU28gg9TpY7rWt",
  "key17": "avaKRa18EE8QSVYTL7XYqi49pZsUEg2cgKrNWGZWFtR37uJpxWdFppNeasiKv5oLMhp4T6t4reT21bPE6jyADDb",
  "key18": "41Qz3ead5W27G5TbvVPPp4FTdL789tRoECYHotect1RecJmQUDDhKNmC6YhgHcf87iJtrbhJLRVBMF1q5sX82Mbd",
  "key19": "2fDsReLnNMBhcmEupsw1UwSLf4nJxfJkD2FYJYp8dm6EYJJtQLwagELN3aPcFNkZWrcoLiMmSWE9odMKHNi1Z1mv",
  "key20": "58Z3VuAfuVNrXm4baDnhooGdTdZhKHEo5VEMY6jwQMEGmtdvzG54ioL5mdu51oFtrKJPhXaZ2dviJPTZTyoPnLF",
  "key21": "RFsuYNi5ekCYaoAkXTYfuVFv4j1SsuZvkiBX6sVoqeuRMFWppTKLViftJWeYfSfZK6WBqwbP8vHamA2P8iPsNzm",
  "key22": "46Pq8aMbooW7shaskBcFG5Dm6RAPxjRrGTnF17XTUyYvDgNwmK3pejCLKi8yT2MdB2MksP2SZsbaXBhSMAmkVz4F",
  "key23": "49njVyvnm6e2oR1p4yamw7MPXwS6dtKVwzVTpZmUgvyEzJ8XF5dTJRC5BfqTDAiBf7WsLgvXt7qudskrCgD8jiJv",
  "key24": "2Emy74APwUQ1kwJjsqymKGhXR8mMRnvHgYU8TnyLdtGR8vdbdYVsZi2gTh9pCqkyHaC4Zy6MAyr7uUieG334JYM4",
  "key25": "5nXaD4F6ZLojmUjSxXjW2qNdpqH55tXeYw5uKfjuEodaRB1TwiAEBpYeMJCFb3rnSWv3tFBs4Hj1K3kjpZuULAq3",
  "key26": "4cv2hz1bYQwe4Dw5SZtEimxWK9JTkW8RmWKYPmjvVDSSS3mQ82x7AtNjLbV4A2hr1Pa8rUzFNtGf51V7vsLBvYtn",
  "key27": "4LCALvNE1ZBSScxUavKXXdQHWKZQvsV5bAuyKFmtgzuEDrEvRxkPQStmFsciCKr2ydt1fCdNA9V8LH1wZgntXhha",
  "key28": "x1HceGZ43jrQ9mYfcRmDgpM4SRJQRQujHP46JeUjg2dG8SHPETHNtiz2vNxtKW6F6h9Mk6pVJFmErpRhHfVEFBV",
  "key29": "5rR5VjkkBrriBioJoxVoE7J7WRcE8vgZ5PDsCsqRdUcwSsmAspnoLqFaXRLLwM4d6tzqfBNV2KRVnZttpSTWt9kK",
  "key30": "2xbuKN5ZwYVvpu1Q1JbxmqW3YnBLgikpcXS8z4Cxi8tJt4ZapBDjV3V7FsxTemUdGkuwEQ5efhcvNKVYKPcUQeov",
  "key31": "5ccvX7QZu989tWFVkuRjqunA4qg3EmWF1T6UUNBVtfee2jGaWDbKaEqeD1ctKWek3kEDRqDQVA9hwdPJf6jpt15W",
  "key32": "5ddZL8oH3FQ6oAqZQP7roitRAV5g4cXcj2HcFZi3FgMKpkRdHk83rhoVcLM33BUGxyo4pMFuBSQbGGfDrmKeMQLD",
  "key33": "3Jg7z1K795svhGFL3oGyeYt14CXYJTuDSaiuZxHyqm4G9Qr4qQKVJv1bupFv1FpVPridkoiGL9YzgCKqfLHUS7di",
  "key34": "wppEkzz4nvVaWv7BakyVf91uBNCLV6fyqnxFpK2cn9SWiHSikxN63bkCcc8yBohXhgobuoa5FcKaPbYWqYwz24x",
  "key35": "4NqE9GoE5sMaBMhRjFQCB3kC6MdfeQuboAv3F45CWs7JkWuHZpA7whtjGzLqBi4No4FJ34jbLKGiJWHJMQfZHhXp",
  "key36": "5M59haaVSzeVtGqK4w5W9v89D5w3pX3WMxhV4wDPoNfJA6ma1xamhjs95a3hoYkoQPb34dfdsevodqwPfEvqqcCY",
  "key37": "2Cg1oLudfjqQMPGDd6njEKzRnHMyoP28SFtiuDErMMmAZBd9GAiLUYKCSLkQ9pUD3UeGQQVyMHEBGa4t5g1QdE5P",
  "key38": "4cJx6JVUmLacyKidd5UjbdaGGefvKiq2MQqxkXXrHMrCa7BJewJq2N78twRUTMPVdDgQbUuZeZ18cpqBTMnXTALw",
  "key39": "2r1nXvTpqepK3wYxEsLEJ3xm9mGqVRUGDL8LWd8eXGQ3SjjoF8EGPuh4xsfRsRXPbnm5Rmq3uppPAyrnV9R3h4jg",
  "key40": "2ookjfZJQtVMUmeJqH25szxMRTpftegCxo3TUUC8aWQshdrv3XzHMN8uUGFbb2ghFcEKpVYv6ChRaSnsqSztCdXr",
  "key41": "2HZzJKaodMaSwwWaf6CGLrHr9D4df9P5W42B9BZKChwEMMWtGif3VFADb3C6XjCryzT9VjY6ShPAuhdcAtYaXyEd",
  "key42": "2hVGC4Z2zhP1QCMs7ZSJk8wKvTeFokXcg8dR4aCxfB4LLo7qCfaFchPnECvHB1DyWRYBLhwGssNKZ1jQAbrmdXSY",
  "key43": "2Hqa2pky9usih4ctUyYiybn1kvJFy6cgvAKhDmAkVMTAzvkWcmobD8kVKP8Lq8sp3emuyjSJnyMhUkNJnZDx36RD",
  "key44": "2D1ZQJ2xNP8npd1D7unP6A28RMajeHRK4mcS5eH9FJ4ZRSoy5jAUqYvRVVhfULJmqsYJAFkeKHM59gS9FikJcTm5",
  "key45": "ZCv2jAHVY5tjSmMRKCihNskK2T6p5G1dRPhuZbZcHQBMsYBSy2aD9WSu3GvpupC1pdtT8eks9fBnZpnPRSmpNDj",
  "key46": "3ArSiBF3ircAGtYVfy4ek9teho7imwpJkNeW7dijC5XHAUBkzKkLf9dfRHgm3CCbDmcboGk4Kpx6Wjivx7V1brb2",
  "key47": "AisgY2iNsQEf9WzrFsPcd5MrqPPqZrVYAMUcsX6JvVL1DShzTFyWY7Kb4aMN9h7y8juGJD7km2wiCv6FPnMVEUV",
  "key48": "5Zi2xKm6LbaqLMoQu3ijsmUJzFfDZxKkkDWZhfz8Vfpy6iZf79DRNNP9CpqoZwUZhmFjE1PwCnc64XAvNbBkt8Sx"
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
