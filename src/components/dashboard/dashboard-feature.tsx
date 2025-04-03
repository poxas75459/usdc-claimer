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
    "m16GVQB6H2cRtCpPfypkFVhGUkpkiypkV81ncRHCbSv77qqSQc3j9ASeCPQo4cWwFGD3cdQNRW2u4NCQZWj9T76"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e7GL2W6ePisXcYmL1zAHg3kWSJjzFtPbas9ShY1MipVdh4hxdAHbuPQiwtCV21EgZ426U5QQ31UQBGmLbRdyN1D",
  "key1": "5fPTQULGbVJcSAEEF67zLiHLeWCQfnaSNyd4o8tbRJ2rEppvLZHWaD9HRghyri9aQssyqAWZENxkoTfNawthE5Kb",
  "key2": "5Sad68QAYGftu2snRibJ93t6r7dy9TWjZyNWLCeyBA9zHGMvHUqoJLAKoBNP6dvLgphktzxGB73J5feqMZuKoAXH",
  "key3": "7PsQYTWCssmppsC1sMeHnJtqJxbARAXRe1Z2jpEvKBuDU9WnHJoajyPnwz2eM8DcySycXV7WYyYac17Vc2VjutQ",
  "key4": "5UCD9tm4VkhoqFVy4wqBhcV4PfXBg17V9smu95oiX1bjy1TQfkbMUnEoMAmjNuWEPsH9MRHx3KqXEGiUmqt55pdG",
  "key5": "48FmJfgvW2oUWTcpQLSPLiXq3kgBH8kQfzDg1XsuHNC27w8irgogVQ9sUANpf6zUeW1DPXdoTaT82rFZqkCisKAt",
  "key6": "1qAAW5kPETNuYvq4NHje3SXTtBQCq8MrGhRXeg1d6nJZNvtzCfX8gRcfRMseymLHCRda1oubdFv5SNcJhbX1ZjC",
  "key7": "2UPD1U6LTZnmVYeYevNvTJQQeMwKBWUPRjwZNHk7bbPbWCCrGCeYJyG1hrFGmaacDT19eNmYmdmFUR46zd9wjM7x",
  "key8": "313g6NYRoSRjjXtfHCmLhMZ9L8HkR4VXsCuGtJJNf9UWXLa5xYvoJvp2qs94M8m7m2K29VhX8rDWM1jY8yvKAdpb",
  "key9": "3fabsfpCFSYg5PXKs5wsqkeifJGg66d11SXLVKakR5NnUMJPZntrBFeZ4LSR8GokH9zFvDiqDvUPUyaLtLSrWm6Y",
  "key10": "262jJNpEehzMD8CKd19fbNbe4y1aMGKHZ7KgSvKQ21vrg2DwwW15LNdtsHdRzxrCD9RPpnNJLaZDarnCXGa2RhPt",
  "key11": "3dPdtR9TGw2bpct4HA2RP6SHxCSJNXjLoNcfjS7KxDEqVasf1sXa8SLqfnLNYb5V6evcJSpk5Zna5kMNuAQBAC1D",
  "key12": "21nQx9jphAowRp8iwxwqJXs8N8T9MvPFaAHJLapPZtYy5wTxZGR7Yrb5UJtJ4pFUvGyGWJ5iQ4gw3pCBkwa4Vx6Z",
  "key13": "2shCAGXE9tKvfoRJFZ6KkTamcn7EtuQVvoopBAjy8PHeudxFcfMdB2S2mmeYPmG5hqa1MXxUScsm66zdgtDgUUEp",
  "key14": "23Xx4KGkhr6UTCo9s6QmkUhtAuraew7s3AcojNAvrha6y56d53eoUVRum8x8o8ziF7bHZsUCEheyA3NNV5XGBZbq",
  "key15": "5oWiJeHNgdFXupSiQET2diDdZtKJ3x4dWtRiHw1NHQtPsKPYCqhhpuiW4SbzRygpyfBZE4qkhp73evncncpvTKhH",
  "key16": "2pMripZsWBwF8Bece5rfBhQkLsRGcnhWAEjW26ya91H1i1zTFka68AmWcSV1MWaGJ4fUVr38bbwPsVpEtyDZX4rF",
  "key17": "5Z2UtA58W969xK6ZdPqRGzC4o5ZF9LoDk7nZHsf4ExtY9SEAwdx88RtKd8EUCDvGQ2AfNoNod6U4fSjdixc9Dow",
  "key18": "3wL7mdiq48g9ZNf7AS1rRP4NgBn4qh7kPrBFKhrrA7r75kbdVjahKr9wMykCVpRJRn9gXo6d39ukr6GzsWuWXfhb",
  "key19": "3M8UoNBHww7SxTjMjBVXu2RiiaJdNaS3U6qHdcXmhjucvMbiwn6pCpVnyDLjM9kw7NtLF82ez1trET6jZQ9aX3JP",
  "key20": "2RsYBYY7QReV6V4Gfy93dRfyNownz3gGZiJpfnFxBvPJsD2298i19dcGMPJCdpRnqw9U9veCDdr979yQPmqcGaTJ",
  "key21": "2g13rdBqDmjYJrapKQmeYPJfnhZR6pdPjc9wcndaqTRTd9mPsbf5nhMuFA1tuTTGo9h83ffnZcj2EqvzYYCZSJEG",
  "key22": "cHKET2PMYXC1jQv6ChPoHQNXgzXbCyas2WGS6YNtgiJ8DWSFabrjdz6dbqmRX1V34xmg5pZajKtFjnRHAKKNDCZ",
  "key23": "2wixSZRQ6P1Xps6VC4ZCdHdQJ7JCFCofmS3s4hENvUEzJyMiRyPRqNkDbkMJ7BW5QGzBGvr4ZbKkpodFgLexLFHN",
  "key24": "5gFLTUMd2LGRauvfxQPCMa4TgVJrLhxGhYb4wdULCHnEkhmzv1JrwXXeHSE1GEzSqEPS6DNnBrAvZbDNT2KJHCHC",
  "key25": "mNMQiKftMNTQALsDeR55bHg6DEQJ8Xoyu4t2V9akgaE44U1Bqh1hQNhte45UjDzk5DBJwFFnWbGJYVKmrc6k7PU",
  "key26": "4EQ8DKFaHuDp1CtXM1Gaqyx9ma3aQZ8ffGnfJVqmKjJCVxkntjfiLpBHHYNb8BoXaTwy5fzDmiT9Xy63kJk5FTww",
  "key27": "3sm4ihsjxpncgZYhqDDb7XjmHa4GwDo7h7625Sun7SJsRhiezArFi5VjcDmw7HuFEvHtY4xWyuUZmfe7pW77ktrc",
  "key28": "L9Zs4NrEmYMUvi8V4wFURyYaRVxpRuxuJAYBzdJAhrh1w38bnM5QciAGwgqKJjXjdwzVruKvzyYyX4As14x7awb",
  "key29": "4CopZB6dYn9BtSvGmuCQb7WyXWaxRM3VYTkbfrcJMxsf7vwVm5Ye5fwjrRR29xcGdE6FgET7khUNxYUb6uaWKgcK"
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
