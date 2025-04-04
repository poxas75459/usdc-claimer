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
    "2TKL97bahBALqQvfjjfiodU5MZzix1u5oNNrD4A5zh1RS2dchSbk3vHXZoD5bnurfGtmJbP4ooT8yLCZGouqiSLY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GPtH8QukboWSqLpy3ojn9ExbM7CkXA1qXho1spYDYoyh6T9CW8NzkPGcDqeBXP2jwzGQhKNLtPMaYAybHKcRT9L",
  "key1": "4JHenuLtWKiVhAQkY6JbXh83DvLtkuAQiCbEu7ra5XV3VQSDktugCUPzgNFfwt1W7SUAghqB5nGaN9nKhyZRmRmj",
  "key2": "5EjoykCo3fEVW9eNuLoh9sW6QmdUJmi3sYRyaDupZ6tPeoQkeCet29trGsF2n4PD7q5on74VDyAgMo3mrjjCZZ2x",
  "key3": "5tK3atzYmEATTCPQ5o5pfunbywgFVaxMnyLqh4ZrcEopfcPUrRBMyq9SgBjmswUs58oECUP25RrfW4ZFiUeV8Pny",
  "key4": "cGwU9vu3RobmHi8jw8Nwc1MKXkUD35f5usbzgMfQjDugeEiZmqmn3ya5wi9WSYrHHXZcQGCuWdjfbvsoEr81xbE",
  "key5": "psa4icXCgRgHCXeVooLE1f33hyYPg9zDAQzgeFpjgp2EdHe5PdpxQxnEoLZsaA7wXHDsuxdJ6pucd7SjDYiXfHM",
  "key6": "2CkhxMMGkEH8EsSbySq9ur3Pe9VWV3ovvnyLe2aDBKG4MHrHgFu6UwgwgHDyQfgD4T9R3AYFzRbGC5UYsEUMn3Em",
  "key7": "3Mgx4o7SWsyzq75hhzFJhPTXp6w7ecyiMA2xgR8rXs43FB9kY74L2iA11asK7F6wFwkSh58unphkr5bWGejmgyy3",
  "key8": "tY7mZm9Gzzjg7QeKS33dfZFMgRAmLMgemSNebh4gijHdDvQfDTDd6uXmqMrhgHdXgmChqRk9AaeZKfzYNcZzpzM",
  "key9": "39LDctWX1cfrxeDtcuyKuX9WkxERmpiN6dnh4TUQGqhhEZfG2pqek5CPjcYRh2sZkBLwQAfeyJtub39xegjqociC",
  "key10": "4wjz9oz3Egz6bhQ66LqMDCsuPfjWAJzRyiVgfadKh2qNen8KzxnsmGv4jgTXzfXscmZDwDwaycwnSJeEF2d1aRVA",
  "key11": "5RhLYyHhCuy8uk6suKL4TeeE1toNbmefcjBS6R9XzNfcaHL7LjJSSPwJvk3P9yEUw4TS8FbtunAmyeTj6Cc8Ff8z",
  "key12": "4gbGUe6RVpAsXSyjXQvXN7kXWTv3Ca251pxEx4aebFPnUoksVuZdhiRcTWq9TdfK8fMVHus6jY33gsgkycdfNsfr",
  "key13": "2HFqcF6V1rK5wF4hN73fjqsTRYWuD5aGKTpKqfQHpsoiLeWhrQ1s7Gzw5CzaaCXmpSt1YidwuJMTF4sumkPTk5jV",
  "key14": "5joEnEvxj9dhGF1ZkZEvgnx86CnAdS3QkLFp3j6zQW3PAyVoQpNWRKYraFMRASHqRDpCqBLt9URwPtZqcnCDjP8W",
  "key15": "hMK5NNUvarD3fsghLNa4SUtdqDyZwBHkh1dKU9dRTyLsny64UYNnPD6EnDB9jKzeWka7Vvz5NSrFugMdb7NNXHG",
  "key16": "5rN2uTVt76wHJpdJdQmbJV4mxPMiayyjYbqxk28z4Ws76hmttjcdLP3TU3Np7JV2S61zHNuGCjyjgHitWvoUARsK",
  "key17": "33mLT7X5UGnJ7gWWbGF4anSXXFmUmT3bwfgHYPtmxrfMF2ZTLzjM1wBtGLsUMM8C8o8iWhUmCf5xwoaUkoaWcSKb",
  "key18": "5FEECKSbFaRNBr2dp9C6GR17K5aFtoEGVoPjwn7J9LyQbfVTh2g5yEfnem3FtNWhU19gErSfNuW6aCe7co69mHoB",
  "key19": "4TQ7mJegtEc755ZuvoqAqxChYk5My2Uhp7yi6rzwmVrKU5G7uAxmxEsV14GLVTCukNqgPQQWMsfWWe6jMGyUNybx",
  "key20": "3k8v1sFgaUwJKLT6S1GY3M5chTSGX7XiLDW9JN9FuvofjTJebKPgK6fsgYAjHg3ZkHHRbxsoJcmSUjQsU1cvP5Fi",
  "key21": "3NaryQunSYv9jaJKzghyskvCg2iw8GcZgNDC9Kog2nfoXtuVcSkapSJrHC8SPmb9Whphqcz8Kw57JL6PCbrG16jJ",
  "key22": "2faLvuAigxiVT9RpJZAGXDwFzudDtZERZ1fT924Mg6WK3162G4kbaRgERhD5XCm6N1xT7sGAHr6RvA18wyoNQLkg",
  "key23": "2CPepCgXiUqXaxqnTwncbgRSHYUGPyjMzHUheGEtHNUiu6Sd15WS8xdZKWbrynPFc7vqqqWsU5nJtqVJa4EbVbYg",
  "key24": "3JNzqSNVhV9h1FteqGAHwZYdZRoeerQWWV6o7CCyYfxFxwqdEDqX8Li36AoRxJZFD7yp4MsudTvMzNxQNTDU6C1W",
  "key25": "2MCtdALeDHz5fH5owuxDwaqZ3wwGVdd5AEaUH3tSTjdbCtYYjC7wDMfW6pwQrv7pdUmLKPkW3kuri5cDMiC5wAMh",
  "key26": "4bnsTkRr753MmLw3KqgnkrcBSMG969PTiaMU8orMA1ufVfuNDU6gJNwGV8CVrhBbA7it3jbgE7ufMK7jeFmhaE1t",
  "key27": "3o3TX6Xd7CZ8buwc2RpUSwHgbQXhqpd1cqvv4k5Lx9BEU5EgmLazdJGAtSJHDGynXNBkTqUyymxJAsRifoXwoeCw",
  "key28": "sW5exLQeM4U8jtYkohP1jESegtuHxk8sERYTj7DxdwuMcM4Fwjx47VgoY8ULnn7dAB8Frfxq8AjeJLrdKeg3TFG",
  "key29": "3NCZBFmSymM26WRWUsYjXPj5wRwXsJUJfk6ta4GcnAsT71yztGZ6ia3ueFZs9UM2AvtwDu8i1ywJQ68GWDESoMq2",
  "key30": "2cqJULUWRSqyzmPj1kHFvjUTRoSNwqHcdExy8k2AZCzd9gvcfLv9XC1Tc9a67TQRWSjHjK16eqG1ZXsZiT2iTRrz"
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
