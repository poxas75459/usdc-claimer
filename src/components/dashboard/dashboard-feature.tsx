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
    "2ddpCb8SRy2rZe7hvKhXUxbqR22JBVBvMKSBQZNU1aM3jDMs4MkXQ2pDiYnHZ3dFNoEhzxCQu1wJADRHLQ3kN2kb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "672eEiyPUc8zAr5kkD4JQW9D1SQ1MsJUi4sLVmZs8omapi5mnyWZToZSopRWwGg9Ksueo1LJmcXHaZho68UDuSLb",
  "key1": "agtTnY8CM6dwcY7b7NNvaSSYQJni14Cj9Asua6gA7ocC2WSNkZWQtz2UuavT3FwAbBZCiwLr1jFdWihrY79spGD",
  "key2": "3ggDMCtJT2fii43SQMgsGHrUUgZ6syfFPmM7YoqLZWXPCsPF7ETyjFtfdCM84sEMWyfU9tcrjcV4cYegkh4kFZnE",
  "key3": "4dQGhvR6UsnJKphX7tfGSjdSkrpWvEUFcRSfxbpb2cD7uKQmpMB3sSZBX5e8vVdFWPoYGsKVhtZoWTSKHCoWhZ3r",
  "key4": "3wYdiZNEYgPBDYDb28t1q1DMMCz7owxqzFcTxMh1XJR8cmCsejjUPWTd3uM2qnAdvDnkWfaPmzh9Jyg32AV216Ur",
  "key5": "4fdsr53BobwFreKkP6wEYdz1HnsbPem4urRRYBZhWWpG1HCk42KAkpBsWSrPDTS7M63npritCgzsDijeLcHxLdhk",
  "key6": "2pBiij9CBMjX6Z6P4tqgo2QbSadiTr79DuRDzN4BtN4oTfbwzJ5frXkjbpM3yktrf8hYyKSgF7uH7WKsrKAjCU6B",
  "key7": "51TRNa2z8movSnLp2XVXpwC8xRaBzBa6VihoKC2PZFLyujsmbig83mtYV2Bz1FJxSy1xHuWj9T7ZYnWBGu7pF4rh",
  "key8": "3doEREqBxsccRmk8qoE3Cwy9fCbzsCasr5ATGZmw4zkKQ4rJfovA49uCSy2v47g9bfeFwLyQUtEvYCXFnL1yGjAY",
  "key9": "4zT7vvg24k5HgdkR2LdAqQgTYt1nxxtMa7cqXs5oVg7Er3okxvXFDo74BeYabp3t2AHs8n6zRsrmNa7EDRLRqoHh",
  "key10": "4dDnBHdRKdnXNkHR4rMo5kDAMXPKGfhZEfDFVVY15UNvnutnTD19nbR41c1bkF8hSVjg1sxi7afnmeaqx77emreV",
  "key11": "3wiJQPxwYcn3Sb5FE38rwh7xKydygGxDZd3dhuDcekUPvKRVtEDDGU1Jg64HZUAYED6cnZvCARz9GEf1LByB7YwF",
  "key12": "2rVJs2KtKynjvM8rZFLzHggMnYuue2t51j3XCMuHauNC2SaJA41BYpWAxTbNMg3Zf1ZYvTimnqPtKafrWVmMe4hP",
  "key13": "Q4hJDcwpGy7eiheMap9q1QUVmQcxdMhopwby1BKCiinE7ns1MBSqNocWvtLeH4eWHwrJHBnbqAqVf4h6car5MLu",
  "key14": "2uCt1ioUdjPm1zYbxzLJdtm1jXwqztc5jXUsdiPgYp2tzcKsw3kvWLbVUwEJG95p8jVFb9eUx8qkrhQjpdzst4xH",
  "key15": "63UqKaayQ3v5ttYntEbYH8G6SujTgQ3ZtaJ2Jwb4pXgkFRkgqLrtPNRiMF7myaiMXtQPDaoxCeTP1RoxEx195xEs",
  "key16": "4D8zVMve7N29KETo5woyyaPNgBFbX41Yxz36FCcVBkNmiErWbfX4LwQ4t1gMW4VzSuhnZ92t4bqbA9n2CPCyxacm",
  "key17": "61djhnjv4KQjrudSVzACMHUoFDAqe3RnB4u5TTRHKtkvZhynk4GgPuzrQ1FSqrzc7tAU4twek7Y6qxq9HxCv7PKY",
  "key18": "53VLgMo2ATR4jWDY3SY6gthETxm7iGdWsS7vMAcWojMAYNdSQbjjHNn58K4i23Gx3LzWyqjzjaVnnUi3FjSFEspL",
  "key19": "3WXFwwYEd21F9V82ue39ajkFAWa12Rvk7xgN65zQ4GJTaXfjT5hqAvpLRYCowd3CJUgkbrTsXpSaaEXrqxfduBes",
  "key20": "2vPDi9aRQRggHSrFvavZXn5UetyGbnLsvUYJhNxzCNQfC5Lgj35PmFB5hBoaMMAE9q2ciMs74f9ij7ZpTbfAY7Lo",
  "key21": "3m62nsvgsndwaRBFbyiLTWsiKiaJdVeKDEryEC5kd5TNMuDiJQBZ1EkfWuKouxixu3dD8JGCVbraGAEeivzHZGqa",
  "key22": "2Ubpqub6vq75WApMNHPFQpPb4iQNZHeLcFKnMu5LUXw79KnpkeyEtLdpKySNHPobNNRcUZqxFUSMyqoBjGVLVJ3M",
  "key23": "3qt5uDaDDDLPyzRPQA5oFhEpXS9c5HBhVhj4bcqdpkGzsBf3SjzSrxzhfXiQfWPHki3jFpkhiQfB5BHikjim6ZsN",
  "key24": "3eepnDvM1dc12nGFs2VYoRjZwkg2JivRBE43KuyyZSjygstrbRiF7qRUfXPgCQ13faSJdjCSVKfiX8CvVYQ5HHb6",
  "key25": "8upLG5d1nj3UT24gZciMzpcc8S8uDqfiG45tKdbTmtqrpJHoNZAQZHZsghE5jmWtRazzGWSuqgx6vfKHN8wRSEE",
  "key26": "3Q85PMsKm3K5vdn2hPHfMBE5ZE8Y7esQSYwYj3g4HwW6aRWyXgUrAAvPcmrmvV6VaTMY15462a44xsX5XRPRxkyk",
  "key27": "36hvknSf2VyonJoBE4cxDFyx8QnsgXS6Z55HHcEbKw1ttWUA688NHezirXf2xB2y4dE7THKwCoje9QHDKUxaKGc9",
  "key28": "7y1tPXdGbPfWQuY26iG7pud4eXewd8hD4uHtHeds75GXdDsjWsnT432fU7cDEvbgNrGVGF9QhNRuLvxAR7nQWtQ",
  "key29": "44ggFzCMMq9UTu3uDiP5PdR4FELBiMbwPTnhRHokKgTHvPgeMNLuae1B4JfieomHdsTrYREkYcyZXTRK6tNyDoeK",
  "key30": "49cmJ8m9FVra6Vu8uGtJvGjx6ppFufASzMfXdeQ2pcW8KMLx3NJYUm6Qg7Phx6V33gE4SVG4NdtLHLSnDnM7urdx",
  "key31": "4a6CvqBWXVRCeJGToTHE5RpMcs5wwdzSFBoLttUzDVDEBzz2jyQiuksnUJW6cdsL6AAHB6sbM4kG7JKj1exNCoDg",
  "key32": "55EBrz872EjLTduJ7gEeazFLDjXtbVNK2JgrjksukAHXghXAtBdTao6PRtVdCXvAMS7yavnfgZBSNGYyuP9K1oUD",
  "key33": "zx6Y7uaEfesRkMTtRdfynAKHJu8P7AABSSE8SrumBvg3ad1yrGtMexCwuZG8mnPKDLhdtDxapTC4LqmhdZjvzjF",
  "key34": "R8A3KjJX3GzDNFzS4zDT2iJPuSwNv3FLjpUUg79Jhy46qPRuJYRJPnwtxAXCNkvCPbku3gd9b7ENRMGTn2YPYec"
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
