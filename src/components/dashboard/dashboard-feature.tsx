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
    "2SmiCR9xhZnmh9Tkz9vYL1WUNPJyozFpxZezafSGnVHUBqkV4BJgCs9bU3BvVFF8JgPArFZscHcvDqzKdPegZV6g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GZqrbFXHgxK6MjgFQAnGtfvVeQ8wDZf8qiXJ5FECtYMVqVHt86EBPknhAX9GGpBaKZhY2ENUaFftyo6a5t8P1gp",
  "key1": "5AWwLjghQJNxZUpUV8oaWBpB9Mqgp5UXNTTupe7KByJiD2qpZ3D41wiSweekesXauVa4GtMGWxADfxJRzi4bZXPd",
  "key2": "topWANKprpb2t2viEQNBEYeB5RSLvhkGXN2dNWGMhTwcazmMEevZJmqw95Cnu68tvB7ARSkfKmDT8H5T1RRJ7x1",
  "key3": "2GMfEcbGSbrRR913kBdrm8QmB7iJpjTs6aLFbzS18Ry3QoTXSrdoHfLvXG4NnngP3MymgRc5vRDdeo2o5c3M9dXt",
  "key4": "2mR4KtT5z9tPL2DFU8TiKsX9DkzCEyLDAVDT8kcA4dWbNeSG9k2CarzashucBmckVtNXKA5zF62mPBuDNHod9vPJ",
  "key5": "4Gd9aK7joZA9mhYxwXuZ1rBgzGrWBeGTRxQTtNt5U6ETLJGgnPhu22miHGHEShweWK6NmhTY4bbCpMrj8W2a2rhK",
  "key6": "3QVnnqCM1CJQVs72t8Xgo8RUJ8kT1e2ocYU59dcRrtjZWv2SJwj2hgzazcE1Mw49TKiJS8sNEv5rqYfeRiVEcJqM",
  "key7": "31Cm5WaLL4sTK9LjkpWTZ73PB7w5sV1Fwn3GaHVEBB6KmXdee1n5RBA4uAQ54ioNwW3XigN4PfSzK9uZJoi8wmgp",
  "key8": "2xQRGwGXqoB6zAMA1BiqsqX9rBAU6wCwiDYzidgAHhz8rE6rVCXMewm4ULiWH677gEVLxbc3aTumch2eikpLHwLS",
  "key9": "ZkG8CaSGfS4YBgPRMUUWYQaxVPS5tsqE1CUtknNf2z1D8prxH6vMg6Ay7VEbZY8BjsMTStX19wzjEgrAbQwi7jN",
  "key10": "2wB1ANE8txJcgGuLFeYX7cBs9PsVbiKNWsm4kFzjpB9r5NQC48jtGeDDUc1PiUPDaoqPmgin7doGAKwnbtwVLsoP",
  "key11": "2qU1GjTPXh3EhCETvr1UWvp6Nrr4PfePH95jytmsgGfYKGn1XnytnwUh8sDJ9oSmb8otFf2mUcvbbZjpKA9K48d2",
  "key12": "5o5BKY778gKRieY7LppFVd4hxmjVNEsp8AbVUWeUrf9BW9ejbraxvvA8YfgRmF36kUj81rPV9mZ8A3Nm5C1xZ31L",
  "key13": "3zdCtRifHqgeYNsHpBsR29jgCZGvqFmVf43nNFZ7wjg7bfnrA4CxxbppgsVHNHg6MzTJUb5HvRAzGndka8iq8jfx",
  "key14": "2vo3jqEUb6cDz3S2z3sA2SWyfc3PMac51Z8KM8xYZitFY7QNDjKg8Wh5SWRX4pMpJ1usdfRhd8GrqRLkaAY7XUk1",
  "key15": "4oxXCLvwb4uwcMqw2oo8RgzgQE98CCArVZ9TfGvNWSp73Ae7AbhwgpdWKAxwc4R7zwnYWUN2AK12W54fdBwFr784",
  "key16": "5h7m1N1LCiRV8jNqEQFPxjjzirsJqhAGW6qD3X91518RyimxYWv2cB3tiD6F12NVxcY7qJ3J4dq4UzXSBfXW1ooo",
  "key17": "mhLxWeBm4vUxEUtUHhzZJdtd4skFSQLvK5YfGiYrHP9uE5tTasFzXufL21YLUqkwh66eGnNmvq25GgPuAa3deRz",
  "key18": "Nd4Pt7qdJZQsNCJec3iFfrDwHmZ31YukVtdLbTHYZwmTSWecqLUinuQo7xkmWEhoHP9URsJWGQy2jPZHuJntbcK",
  "key19": "z4bhhvPci4nzajjfgBpaARRiKppFGj1vQ4QMtTvKgnAa85cCHe9hu3hPuq3uHETHvVyyUtx1faS3ko4v2HBvXfp",
  "key20": "4KFTZttBUokwfkWuykh9bgBrZLeyqRZnRYww7uoYqDc8ZPYFA9yDAc9vor49fKDTXQDmXtE8AFq98TXAmNq7Fcur",
  "key21": "3d2EU82eon951MvYhzhBFcDWnLGfhVmcv5DEnw84a2DTTe94KgmSTMimQNtxXoBETPoXgDVRDXpZdSaMhsLwge4v",
  "key22": "Yj2VGtaTuDwo6ZtsGjgsDKRn5SzdiAoeA9qKiPfGKAtxej9uhQ72QDHvCNTiC9fBJnwB8z9tdwJpBgNimkZV9Ke",
  "key23": "2BMfMUJnaSQXaH8Bnh2NYRyDpvLNeyuk8j7uifHrKcdueS7NzwihyKDLZDH1eWkg6Ppw273DYWzH5ypyChM7yfDq",
  "key24": "z3AXHTzVk3C2fXTKKLPKPGeZhi8nwvokTqdS8yEyWbfk2JYQc7vRMconZTTv53oV2wr7TpAwQz9q1cLaAi46MXo",
  "key25": "9Q58cW57RjPW6PB4TCdKvcChdzvfwXx6f7dgMjEAU8KLz34Sd1ysvXKBiQkavtGYdsAXJa7KuB4a7jM1qrwLCNd",
  "key26": "39Vr6bR7fscvUtyDZSPnjR21bBWyLQctp6Sm99bx2BSAvxQYaW4tWy7ZEzjGBv2P3rKa4TiD9cq7wCwvsgT4zC5i",
  "key27": "5t4GygstqbgjoH4AoUUimYtZyU3z23EEVcRX4Gdj4pG7bpcCJzXXqbp4aTF2VznuPSUieZzXQ4qKSYPkLqqij9Rj",
  "key28": "46dZzbQ9Eb5x83ouguYcdiqfzj7MP4Sr3r3KdDci9SLH54GFMqtAHx1LgzdbCLXGhqJ6RBdZgDYkFMywiYwLseKe",
  "key29": "3RfTeXCRXuAaWPJ9uKz7dMg8bfzQPhedz6UkXH2mEtQkV78mzfjJ5gF3QHveyEjuNyzzZJiLF58xQY5qYrjXQHqC",
  "key30": "3a9RKur95BNtRBA7cWHs81ww8GYEonxCvyWE68edHgtZ2GE1xZWwpfrs7zbkHuQU4YTzCT5MJcquwMmz39A5zaEF",
  "key31": "5QFt3tGhdJARZnWHJfMHvEgMFPe7TmYMd3hEf4Yz4NHpH177CHFatovmjLiz9xivKqh1xtocWiH3wVRuWbBUsUJC",
  "key32": "2MfrgUNpzLNS9Ez1B33y2AseiefDqyzVBnFu9pJZ4JkT47b5EX5kdurdPu5LK1wHZ6Dt79pzYHjUSxUYHjWiw6Ag",
  "key33": "63DgFY3CmUnjMhAqDQ4eodR4gfnHMvLbYCKFxnetTjVtor9GxjKty4exFoSUDwzXJttU4TspsSbCupzWGeYN3yzr",
  "key34": "3VDM6yMbCup6ojdqbZeQomEwRKzpTCFEE52Z4ZAcc4ce72LFDchNonmG27z2SYnrctt6NXLQX8NbMh1FzxW9rDK7"
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
