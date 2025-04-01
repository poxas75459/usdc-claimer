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
    "4L7cq2NVL9AuAhKfiroKCS11VLLgAQS9xHhMeSDt4qLwmBYDbra4FtG91afvADLNXWPMpjQFyAajYoq4GyB4R34Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45EehQSZnA44McadYjudyWi7wzwb3tkDGLS8FCsyV7AUg78jE6dgLjpssa3HsD56jzjPXRUaCcGsTkBC9H4VxazY",
  "key1": "2E9a8AhxwoK3zNo9toxw4eGuLVWqs7wmopRA1MejsftLSbDphVKtuPkZMZ3RvFoHr5cGK7kd4tGPwhXtMrmhXBLg",
  "key2": "529XTMCML6FPFFGurerx5MWaM4zKCenFbihc6FxV6TodXWnCax1fMrQG5DoVqSRYAcHo2knbgPV7CKSjHG4bfeAj",
  "key3": "5yssYXV22FxWx2xmThFiXWdUoYxuxQdHtPgdU6L9nHUXf4EPcNepsQfRB1bzzoJrFSkww3efHJsinjNsfkzDXog3",
  "key4": "LNCXVdkwFEX4pz4Si52rhTT2gKWpNyBy1858UWzZwGX4q2E9NEtsvdBkbq38UUvpyXJmmEdwPvGhX9zFYPPKuyP",
  "key5": "2UNYNN9pooRyZF13gTtLtid9ScaMF3YmSGbZ89nUSHQD2p3Dd67c3ndmzXiNa1QX1R76VrcMGCJRinYGk8WEyB3G",
  "key6": "4a26jf3NY5JoSGck8ty9BEGzTRyFdz4hyd3My7e3yJ6BEG22yFDMk3oZ7rKvjVg62fTqcki5GkAY9TDN1PVPaaFe",
  "key7": "3vkVH179vtCUECFDVfyiF3ZRxoyB91fBCmxB7LH6Egr8dtoG8hBqt7Qx61Ryi2eDoMmfmdWPMhVNn6ofosAGxegt",
  "key8": "2q3QUZHmnUbeVoKJkeBcgBuRffp6uzkbJhRqLRTDyiE1q67X6Uqp6B6kTepXxBUKtKbxk8MoN7toZMU1FzDe7Wtq",
  "key9": "3mB9AkiLH5Z6ZDjQwjj183tdQYE9tmTtEKA9dQ6JteBGExV5dVujrigYAJobPN1MHkCbr69YHu8WB3GyNZpj81kt",
  "key10": "3yGEJ3x9CPppaet5167W3A4U99SD2zRM4jxwatKwTDLoayzSKmfCSW7vuBjaqzfjtmj9QxEcpd2Br5zuV8Nn8VWZ",
  "key11": "5PjMLHSNmEGdAhBZ9MP4q481sVmQX9Qw87MAT3RDiwd5gMkUk7QCdmGw81zevAf4VQ8CJmDgrjeC4VTXhoub8Hcx",
  "key12": "YQiycyWqA23cbar9Emg7t2fnd7ZnV59Z6imvVeSjViyFaV11dKmENkYDNSKQcG6JrH4dLJ4jeGtoJ4vtfTH8aUc",
  "key13": "2DHZGYsSHE6KDMFWniqsqhqWnzqfsyFusdVEjV1uPohtiPazg58N5VsL5uCq6HiH6sKUcYc9NKsYeSA31PQGAg9k",
  "key14": "2vhhEYiLkof13t8ZDaHf7hJamB5q6ukFFd59UzV6dcZNwzwusgrs2XeHpFW63m5RsV3LeMXx5xGqaFUcsYEranAc",
  "key15": "3iXrP44acnyiJVe8L3rREYeGbkMqeVcyAQ1YhtkiHyRW1LvAvFTLYpeuu2hja47RkRQiwRm3jKcMqhxNQbnJ8fKH",
  "key16": "2Bz6moVVUUQWuSPecwe5mUD4aqPtwivxqGSCvLtTmCQf71JEPeosSDkA3UVViKfX8KbMF5GK4Z8zSuVUJvZ2EBMm",
  "key17": "5t5pN1kRWAGyYWNGHKGXaKpYrGZgAj9tvSzE3LUPaUgdfPpW8FqBbZy77ekL8jcAeA1ZyHAZr7Wg63XhBMJDgg1p",
  "key18": "4BMPuJTapGjQUYzaRxfRJ3EBYaDQsqMnptbbtweCYUXDz5bdYP3438GAYJimA4Z474TwnZirz57A3Zw1wdWwecC5",
  "key19": "5kz1TnUs4Q7g3XJugw82f2sxGqv9YHV6RS7zr6Ja6KcUTo2NyN5RS9TBFGKeV6PWQ6YuNATMSWmhvXDFspy4S74W",
  "key20": "5WYkzQ49296jQLE2QKVuNy9tdMgXnRDGLnbDzbJyxTfbtf21TK3KsYV84BtryecTcvgFAKeyt17EKujAG3kXNmgL",
  "key21": "2p4QJMvQWWKR8QZUWrRAGQ2X5jvXKiNaxaGifxhpe2Y6TKine343SUBheKiNbHzMKTfoBGpVtYM6uR9gVk5JZh8D",
  "key22": "5uwBSQhcM4NsyRb2BoXG67zttmXYGRqhKP35b1FykjXytbUSjr3CAsBBcqkvSCAKJg5cuS5wg5FYZE5rPQNYiqQ6",
  "key23": "2sk32jNYM14da37HbQe1nLyQqidcjqqxsBcHwV6juegSjSf3GKh7zq1nNG6jpxSS8gC2rGqjbVgc1GB6Fv9Afpo1",
  "key24": "5n3PXXcfr7pAbNWEYVjySvVQNwDFtn9wwD3W6hgp2vK8WC1hcHgQuPiShYnzm6cDkrn63pY3NrBdMxsCSzhnHBGe",
  "key25": "3WZjDWJZe4pcab3s9H7hc4YsrnLDRGVUs4X9qBne1ta7BjtLamVnMXVaxFHA263oLne5GmCtk4vSSFczB5xdnL2Q",
  "key26": "65p157m7h4BEDjhTPvn8aJfTW6yUFf8uqMghs11Jt8qxbJKfsjoGX3v4dJtS6isAYhtA3dvKpio59ErdKYPhZQnu"
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
