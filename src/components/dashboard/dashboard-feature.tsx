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
    "4KVx32wCeXz7Xzyd5C2Hv4QNu7RVsoNe69yexhANHNuYVu2UYkUXWPLhE8QUyMHAPQoGKZbAWCngV5vksXBntRtk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kVMz6qSiVQeaU7YCGjN8orFig6fx5gsv4Bq3dVhjFvYUJZ49VWueLi2nBq4gs16SnuszoQgQbKFjMBK2CR5BoMq",
  "key1": "5ATmRRHw19YZM45BythR8k5e4ht6zYY8KxdTW46gAzPkPvSzJJv1pXzL5k78q7ReBDY1VKr2mQiuP4yED88ZANqz",
  "key2": "3qS7Qopu5Xxvc7MjeoE1rXfiYbCNxLqEJaQEhrmGwWQTpebzph9FJG23v5tUzT1AmA6QYHjHYDyyk4xx4KKeMRU1",
  "key3": "65zD7EE4BTF6mwzeJUy3D4QmLBT8v7nH7Rt3576Ut3MMjE9pJD9mdAZwTeeQaGTknyvh5wJJC1CQfgzNr2w5Mh86",
  "key4": "3eMZshqt8dvRs1anSWeu2u3or98eoCZSY1wRB8JYbDPKMkan49R5UAEDvzGEpaHmVXoS2AshjTfVbBrLnh65giAJ",
  "key5": "4AN2UdvH3WYPPxEzJ982WrJ3AhCk3reiadX2Sb6VTeHFddSs6SvYUjiLX8UGxtTB5Z5wLAiHJ3YF7Fr2Spp2nkFH",
  "key6": "2c3LakBGg8tgoLVDFBXJNPHhF5wPA4GWJyQzybbsNXTZuYPyaYb6kF7qAj1WXCHWe9FX3TChA3S7BZ5uEuRJjDYV",
  "key7": "2THv37WjscmudDkWVSbMREEbHqSxshw2WZRDz9SkwWMk17Q2LdaQ9ejC883zmAV4h4FESsZZBd3MWqyGXkANuyGe",
  "key8": "4K27ABqZ7E32FuH1436hmrjjD9EM7zBDGPza4g53beh5bgtoeZ7oSrNL2U3iTf4xw67Ceoc5aG7QTugfxdT87CYh",
  "key9": "5tJmREsgDjxpnoXB5KVB5u4rK6dw2nGEZEeKwU3WoP1uPAoWDbmKwqEH7mr4kBf3fYJQMuSBz7uyWdbfc1FQHge4",
  "key10": "29GtKuhJqiCgYZDNGSKNj6MpZf7zdPFCRyBpdESYEd8Q5vqGFHMSE5fcjhBAEw4TEFQHS2GVZm7eWLGPHuK5Caab",
  "key11": "M1RuYiuaUJvyD4MCReFHAJfvQz2JAY47cdptJGnuTvE8bVm851QFFUqbzQyQDmCvcqiuj6cfc63vPnZitCvKfmt",
  "key12": "23SLK47SMxY5a8t4KBvNSciDoxGANghcXaGVzGDD4JKnJRcz87VTyCKnscVJ1XZrxDnx2kewuWp7haxmFDUAjMNv",
  "key13": "2jW92DVRgyTfLDQowmBDtE9DhatJDeUTgLcXkCSfJPZzPLPgRHpcB9FTC9Usd5t575VJMX2azCqq7RN1mXaoVBhZ",
  "key14": "2MuEijCYd9PcG3Ctczfunf9omq2HJB2d7Zjt3AtYj9wqyjweV5NE1gKSPTVbRtgdbVYtaHZ6cMKVfjUKYxgziMJe",
  "key15": "o2z1AfLYZyW3FcZdYo2E5zfNZfAopq5Wzoo6LtzAQd2bvP1ZHFxXVnS13kUk4Rogu5c8tFc3RML2YzhBYrb35Ps",
  "key16": "2RxmTaqg7bXsYsweZQxM6rLCsAHoKfxJtEwcVp63Cvi9FHnPeFViPk2EF8yKTpFU81s4R3J4cE8YXqs3Fw3KFXAr",
  "key17": "2PECgZG8m3jiijEfU23pZf89L3uq5ft3iHspcB2HrGZ7RFLNDaWTKQG8qw8BmKihZjZJZGTM8j4Xq4ztGo9UmyCG",
  "key18": "3mDYaxzRag8worKtaJ89BRrjsoZEbGfUfvXuatm5bgtiiFwvEc6JVvHXacrKjKsESaHXWJJ4dy641XwQjQ4BkNg7",
  "key19": "2WjKTp43VRuw3ZHHjuiQJHNfR4HeJRQWwPC4tNuWJ2C69zjdqgJSbnPfSxURgCChtFhAiSXjQV9PzUC7QZyLkyqn",
  "key20": "5DekvbFjF4ve3wYMGVdqqSWBMGs5SmD1VeGbwNfKs1zvZjH5SQg2TLYV9qVR6mtVFrjQZFna4c2sG5b3nuGqc7Pq",
  "key21": "Y6zPWaN7EVR8nUZzvkzjUVXLpu2pY6TVSKxbyMCD5ZuaFhakh1tZFiZmZbfxe2SBjWaw6Fjq6Ph7QtVb3NpKDdc",
  "key22": "Xut8o719wpFw7NxArZk6NzX5DRXPE7aVgNjZg22Hcfj6iJZbDtNXdrSysyRHavSyTQqUJk6WEGQrexuYvEA7diz",
  "key23": "4v1yXJYvXN3y6cvnahruNvbBkLg94FwYErBKpCww8GJiXNFsXhehsP4aH55zArxzYs4HNwvrZhEqSoe4xwV3Y8Wy",
  "key24": "5eS3scBKooDXKmzCbncE3W34oH7Fhy9mg7Z8vKhbrGuweyQUV4PWPCLfEF6fq1fmEPKTnsWZNpEE8h5SvVkq2YeH",
  "key25": "9WbNGS1HYiHzCXdWcv5MDLYZyodHGrpJkL6RizBFadUAABj45MHmUn18ACr4TeP6oKmnbavojQCDPaD2u6jf4qx"
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
