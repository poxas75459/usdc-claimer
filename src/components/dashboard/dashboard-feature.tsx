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
    "fvyaNJ8K9XYdUz6bhuJqJu33DokB7FcNzvNtwQnuZYJg8s3tz2xHWPVdhtYcKUGhBRvqzZ4qY6wsqKRXEoRLaXR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D5GAcGqDMj2wqqGN6kVZ8xoqhiZHc5azCjTEJrUb8RofYZw8gdXfNdtHVc3i9jqf4WgYEHFMyFX1D81UP2zP57q",
  "key1": "4BZBjU8nRRgm5jk7RfvAdpcqbAYX2MmtMiMZ4rqdZfZCQ13voKeSf2DDH7EpSrKxZ72NNsoMGHFoq5RCy22uXggt",
  "key2": "2HcUGNGJCk8MrLwqnrKxcc4mAQ6YHK4biHwBbN8Qxramf4N7KeFpzoE23xqBG2yWGJhGvw1ifnV8RCkkH29Ydfji",
  "key3": "4YPPnrRVSDQ7Cf4xKt5YnP7J5Rpjdeyc13Mpv3BiLsp2LnuHHTaPTu7n9YHjSW9pwQtFFeKLGodBy8dMU8pMGqhb",
  "key4": "4jwVEgKVjniQyKSywH2MBKDfpAmynt3fttKjFuwbizZeRQRvCFcKythmQPgNZshLBzsUprmezgyEXsir82fQhEtK",
  "key5": "4hDVq6ZQBotFbsJ3cpRzQyNiX8WGhtZvewjSyS2foGMCrBpJuBHH4Sy7Duivx8TzyHEaD3HvN1dLSHLcEd6ZSpyz",
  "key6": "dy7mXH6Y8B9MJ8uqqxTYDZXeGngjpAxVJsT7DetJp56qBcdUUCzPupTDeoACfgUxkd3b74UYVxe9NtZCgmGNcx5",
  "key7": "5YtiFxdCnJAAhRo72dLtmQYUE3pGQk3bi9vxZ7cPbyqzLhFF5aN3uYGQvNTKvMLU5osiQdGxHTwqKMNNHGpt4ukR",
  "key8": "ysKFjF7bZ72gBcMVjW9sMnXunRoNwASwGyeDML7hVMZ2XHnsX1973Yhxv8eZdYMpprHWXL1rLyb5mPsEmVPcTxi",
  "key9": "5XkGY5DiDRHzcCzJJogei8GfuEms6DRZ8dFTVFi9q5Q6WSzxEsZQia29BcLhBVS6NXhYjqeq4dEQf3azUkofActE",
  "key10": "4FzgjPV3s9irqGtH6HbFLmA79qaLuHQb4SPtQGXcZ5jrzn7XQvaDvCwTxGBo9YZYH2Nv9dkCJrNahzCy5y74NEwU",
  "key11": "2cZsKavJceFvbwKECLnA57Rdq7XM2DMJG8pBqZsPYuvD6U8XkHUeqAYGbRqmmpVYHk6373LjZKunGrYPb9S87Z6z",
  "key12": "62w1iGQsG17TMDjHj5Emo1bWWaQ3xn1xtJBcGaGxGhhcjVfheu1FtWojHyXpKogAgWGb1HY5rMJKTJorEUqzyZ8n",
  "key13": "4fahZS6EfZL7ib7MVADzRo3pJQiJz1ts9Bw3ixEvQieLAV9pfdp6gN5atU1Pkq62Amn9QfY2XfQiMZ2Jo4C9WiZs",
  "key14": "2wSqHwvFJ7ciQ2gASj4LZfgH1Xd19tHat8rsQv2SzbUphv7U48v1oJZWmUxvef4i1nfTBaX1YmrBc2iGKuMPFK2E",
  "key15": "4vqUYjUyjaqkVXovgzx2XGN2cf4goc5efCEJZS7v4Gr7vekiTBvGUXowyPUHqdyuJjYZcC8osZzSDEUKimBRhnb3",
  "key16": "2j9FhF7QooyXcvmvtYMTUfhFprdSNRG8jtJK4fvwvLgi6ppntt1gGAJ7uSKZLSxfxN48e8AGLtHtP7Xws6up48Ge",
  "key17": "4fmy8hB6ket4P3PkHrZdX2rPTWAgcxPYZDHwjWr5aMdR5jQcSRvBWE5UeJdaPX75kJEb5NpuWig1iodMEHk7YPRy",
  "key18": "2S3Uup816KmGGqdrNpw9bSnCrpsj1yhPhe1PCtLgXUMjrGVyMWPirqfwYp7KXF6sxDY2UEni4JwgRPvVfp7Wqwh2",
  "key19": "3ooeZtPzbAGaqXQkRGw8qDNSFo16SuCdk6EjJ2EnN8XxXGBKZ5EQ5qtD9AkYV1E9fS7Aj5GVjZgYnQaaQnwP5u5D",
  "key20": "7vk4HLfKk6AxfHgAhiTUoECjNEYF7WGEZRYkAYSXQ94CB3RhuywKVD5nak54Yt7oBag42xPVYAk9g7LpVTYpAdU",
  "key21": "3Hx6NXioZq843hm6xNkZNrF3sei4xE9AqTEs62dbstvD4hHZ1Kt8atosYeQKD9jJefSxambDg2zPFqhTk1NztHDm",
  "key22": "vgJspX8Zq8Cys8kJYq52con1tKnMpTq5QVjt8qDi9CzgjV9YA8yBwgpsXwzLfKS8Sq9XaJ5mgJ5G94i3Y3H6ckG",
  "key23": "2yrJpdWURpYs9NJtiUBGJewZi61jJiKad7AWbHfXgAyBvjNN4zauksVAhmfKiZXbHCcUEwavADaoVWVq8NayiGq4",
  "key24": "5KejGy8tr5ACzhB1mE5xcsCFanDVUExtEbzvbY9wjm4QZnx4szioxjLd8JWdt9bimKw1WxH16FWDZyDKrCvvbEiG"
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
