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
    "44VuMVUEiMzLVhKxoU3UTDJXNNP776cxLjX83rLLZLLTmZZ2hGoiWg28bSX345Cd4eYbGcAaqhJaEL67RmM8ui63"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8ie8aVuf5oZXidVizM8pAmw483Psy2xQG9bGh7C2XqaounQpvuw7oBB7ibDLuP4g8bdhdPqJEauvoABdtp2HUAa",
  "key1": "6GM5mzJzGnMVPY6DxBhJ354QeBDGiMnaQ4DdfjgnbvaUuMXdMHRbWZsc75Y2g7ZtfELcsiPGzYtFQHLv4XrnQEn",
  "key2": "inAdDqh1cXqxMNipDwTzinh6YUrqzHSkiK6EYVaR5Q3EsEhMth6dPpYstDCjxYj3C73a8PxvpTBar23nPNkxbhw",
  "key3": "pciovt3VnHPW3VW1wCmZ8mcyn36gM1A1iWJs8mqbP3Tnqe3cJxJTFXNhynLToHbN47JfEydXvKDehg1adcuGe5E",
  "key4": "58Ns2xp9Scg9eA1fviusJaWVrUhKhV5JA5HfevqUtfAK1u224v8C9mpQULYuMSGhJ543Zj7JLpZfXVNrFukjaAHd",
  "key5": "JkkWT4CkG2d7pLWzTLVqojGvKkRGwCc8pWrptGyTztAYBnZxKLmt8XbkQihT4MSUzZge3VQW9XcoxdE74ZJ5WrV",
  "key6": "5wswsDaY8CG3NNCtFMRqHvymdpYkxRwzVzCRvJHroKocPrAxFDDExh1CFStEzXJLbDQbERqCkxgUpMRd9RAgFD1h",
  "key7": "24VCVKGLmc4ZrvesxZZfWh9QNTXe93pm88hE34FmP22y7j7kX4dzNdvwQPP6YiQ2g3W8SqPYpP6y7MLYvqmgtSQU",
  "key8": "WmLtZRmLYZfvxfLWaf2YT28Mzm1iLGFBiUhWcsLqe5nKRhZC3SqcWjvq5gBQbyq74q2ChtepMt8u9fs8ENUegRU",
  "key9": "4m9f2fqMPizrAAjQ8LMBAy8ndSyMVHpiFS6KfmapMvNkuEx83W6Yo4b1EaAc8pxsGY2jNo5j4Jr2WgpQDwk3xUkk",
  "key10": "4dAd132MEcYdVPex91pkyu3QVfUcm3aG88jRKxesP3szwQBFFkuDmJVWv3ur5VCTCGbgPzWuysZbjqmR5GQEiNSU",
  "key11": "4TPD5svcLFmyDoezJ1yzihEJtkwvjso3N2iyYGHCvBJK5jGBvLXJbU8n6XMPau5D19ADMpCgdPVNB5nzMqjj1qxz",
  "key12": "3qUN4coTy6f6zamzQyuFninyCZXyirsJxnRDtHDrALGRcFo5Se8BknmUt7q5tfBcWRjtxdpbb6NZRBcxuLgQ7S79",
  "key13": "2AGjvA8MnapGiH3ChmhoHc8Ub5g6znJd7f6ZzXe6DTEK21ZWFmwPz9wFKw4bRP4ThbmakKtPrGkjmwvNK42DsFig",
  "key14": "58wcHV2LoHpSTkUwTmqDQm2R9nad6nrCjV4L577jmazoP5NRaZkjMXnSum1xoiwvytGWnoZdHuB8DWGr3xvAhmav",
  "key15": "2KBUPtGyEdB3fCX6zkZp2ZtrHcfkmYyeJgBU7axqNsp66BY3tqHzfxJpZVwffpZrkfoKEf57h583ihCCwYabiFkx",
  "key16": "sRPpK2V3wqc84EiDzMGSFZyE4kgBWo9edp9xtoaFaTq2npFY1N4w2BSw7ibFiZTeoju2btuEBKMP3xoLqVw2vum",
  "key17": "5Koa7LzVkFoDd7XnLC4FBmDZKzJP2eBJJ8UdbBi7pcuYy1kfFyHueVwe2vnV5TkHjjeRHyK1SHiDMmrnqM8Hyk7s",
  "key18": "64tyByD4aLJZ5TXb9so145BgRb5HreWw5hphWJDXSCpSK45AfxLuyVfHiFkJBGcVjjvwsdzmnaXgKp4cYNGezeEy",
  "key19": "2SSXBEBBVrr6FNP6HVjhZWRvvN641HSe8W1PcW13oeBpMgAtNLCW5TgQCp1AmfRCBQ6brDJWuRzcBL4KJHpWb1Rp",
  "key20": "3ioGUQYPJUwbxpUZwBpUy1xXa7fgERdpvMghj7ahQX1sdJ5e7pLaWQBbNYFBbxpstyQySHTGkDNkyeZFXzjx5D21",
  "key21": "5QQwxWbfqcqGJE7iuNamhMpLjQHhvCjEj4vWvL5dA9vdnhJvAjECQSFkyuGShNLNiY5N8fH1QCP2pyXHeWJm8RGV",
  "key22": "4LqdvNxTqwBYWCMNtmPokcMX4sfFHFDJZRTC72CetRYpHLZSjdNjLRjgRiCJeW3UduydjhoJTxktEBMMfy1wkjh",
  "key23": "2aLgXvkNKgZ3tg2LPcT7rsHS5jp1oWmhNUZkmdiMBqH3BR9vsZYEJGXT2pzHLd6j2aDSQ8yjJ2c7rTTGrdfkK12f",
  "key24": "4bTXVbk3Z9y3B6mdgy7Eru4APzjtALFGGtPW6mHGAYq8ZGsXhqCATKyxYFDZPx6tBJdE89zVSj4vicNd4FXDfyLW",
  "key25": "4EoPuHaWdFsYmtCjMXUfYsFymmFTQnotSfKvwyV4HE2BLEBACh3vh9m4EGJMWyF7uybwQKdPJxuUtzZgG2ieuBWf",
  "key26": "4dafnYW96bMQapfLVP6esY7Y9aLb4cXxeXtk218hvW6ACbK6jgHQR1PMS8vH6su7dEvwB9AaCzuGdHpZim1Lrvf1",
  "key27": "4f3Yhspvv9GdcnvMUFLpj4UMYNWk8ECKgqCxC97xq1szcvctqn6Bvqv4MBdgF6uyXpfEz9XCS5RHMCW7FwjAegNH"
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
