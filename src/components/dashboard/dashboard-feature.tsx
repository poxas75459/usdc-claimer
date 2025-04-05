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
    "35MJMgHJYisFzyWbPazKcZKGyeMawUyKznMg4eXNfT7mkjwPZoQyLFBXAdGakJJe9CuW3sFno9ZSQPdLz8uUPJBq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FSU4HxyjUdJKruvXrV1DbeFBb3UzoS9dnmk75ozgLtAX1bDsFJfAzSeU9hPWen3ZmFxPM3JGT5dXihvQcMGyrRB",
  "key1": "5sH4hwNotrZcduBt4Ry94Af4HZNJ6WpqDKBi8jPXpeSU3jzzDj4j2Hazxvdwwp6pkuPLXMUX83PBrZvvrGWQkchM",
  "key2": "2Vg9yNHj8dzFttSTx8HtXNd3WR9Dm8RuaGuLpwJAsMFK2cbamQBLMYY93WPGCKXGR21RzRbebEAAAXmHZDAcXu7N",
  "key3": "3YanT5AGETPaxusLeEYb8UbX66WCJxJ5Z9TPUJoqVo7xV1DaELmLWLpFHbiNYYjYU5D1G8j31CTy4wggMJWsPaU3",
  "key4": "4mLHvHggaKD22PWvLXSnVLRtztHBj44B8qkJp4cEDTtzK7Dmr5VMTUviTZzKdsgpgi1Apt769KqVPctpKj1QgJSu",
  "key5": "2Kg1M5ves62564ZooSZRgvMjUWkPsqwGdjVPF2CWRPMddAo8Yzf3gw6YyLCZnjMtQc6LEEutW5gDEgVzgoF9hxdG",
  "key6": "5WSq1vtMif38pxSyDh9PxZT9EXuc6YLQmYTUzE1S2NJnfPT77q8x5HxDHPrqN3eSS1bqdrVEgWGbsj6gdn3qEEL1",
  "key7": "5FRPKpboW9dBcadbR6tUDtmvtEigHb2nJgShaLi31mmJu9gHRcgSQ2PHXGSv34WmVZHTUsbvbyACLrSHsBQAsbbd",
  "key8": "URqGKfgMjsDdtkGWeNtvU6qGX6QFxP2DbwFXAyGMFshE5ska18DsRV2HLNC1aSgeyALVvduaEGEQpRnGoUVpp9i",
  "key9": "58nXx9AenvNzPZzJyCCLLBJvS8oev9qEF5fU2Kr6sTe77gRbYQU4JznJyNDh8aBRURskas5ytGw7pQQhDiLqGEA2",
  "key10": "51r7fxpS2FxsXeqzXaUjCD2AFMKhAXVxzqLMXSw7BWhYL9Bw5KUCxQiC56n3oJ2Ay7gZdKLWfwvEvFFcZUGesQMf",
  "key11": "2LuFXB5jTuooSXAqyUrp9UfQFBWH5yEmuddyALeDpVyDenRrci483b8RYTHEcydzEnaVLSf4mTwFxFYTGLpMLMTz",
  "key12": "3jzXxtgmjPtySVRNXSYgxxpJ6Rr3RKiKtrtHWJTrBHgNJWvxs5ekTMD4DKkoNwqk6LJBTAfWAMhNZkHqmwMqe392",
  "key13": "WeFabX8PTv9gSSTKsGNwfDEJDPWBhKt5NX9HetGmMHSnm7BY3nEJz77HohRUz3wCDFg5mXTDceoScjoR2gLxNQk",
  "key14": "4uTftiDoMRDBmK81zsodjr7BNAto222Q4au5ddmAmRJn4YqqkNhujgxjJ9EGCxVJj8nijRDWCEyLv6GoogGjj4qW",
  "key15": "ucPgHKK5vZkwakb2QaiTSQTDNZcErq8jcYvnvZZ8279TTUvLpnToWtmhUsiztbp7jT5QBxYujQqqyfn6eDbYu76",
  "key16": "2zJ9vCG8AT19WkfbXZv4HK8UVX2EeYjt2wKqbDCWgobggpe8ttKcGZBpuU2MiR1YTgkrP4R8fj6MzrwP21NrdRwy",
  "key17": "21Avn6jAkABiy5wtgDTtJdyT7MrU7Ej8s6io6JCMKC2Wv93rppJAoiQekftjevVAYxABZAQt26GK8uzWyumprA9W",
  "key18": "5gq1BNGVC3RoCZtm9YoNP7nHwjAPXKPahHqt7nVfeBJv4sgkzovDpVmri11r7erDtxgyFwL6oE3uwa2enSxMe1Vv",
  "key19": "4C7Sqj96uu97WpiPwosuxiv3o2mjpGAX4vPxQqT9tHBFbnDQUTA3Wnex8WitvVZmtfCaCXiiSBd12MVi4Z1AA6Eh",
  "key20": "2kwdT3EjGWywMKHtFP6c6EafKmCLb44YmCbRp3BzRa2EGomR4oNKpFqUj3usuUwjK4HS6nmKtqUKEZs51hmK2FDM",
  "key21": "2SxfrLEuoCycJTtjjTkqmJyyWi7MPvhs5WREx1daCpAHQbBv1amWHnTBiuJmWw7KZHsgm6pMQgNcgVacXQiLsgH7",
  "key22": "4FV2HSaVw5eaX4rP6VjJcZJf88rGndzdJcLRiMnqwVwQ3iePFfgDaYbNnDQbeWBtgwJybqpFJ7ia5jom6Vst9N8s",
  "key23": "eZo4tEJ45qjRZrToSDbU8mr1VoDeKTkpwLVuPUfbTQ436nvKLwWW8hrZjubuMuWXj5p7YwrWcSb2buNdcJGFMwM",
  "key24": "55yimSXmwco4DK7AnjrjdEedtqS5sfBUqBJunGkUzY55NZeU4CxKKv2eK1fivuZPy7rdP8hFk7RTKBN6HJLA4RNu",
  "key25": "3W8MHzTu7pFR8d9qEFSbMS8KTj9HikjQgKVqjiEwkZ1XM3oLxhimQww7tmVfoi5FAjnXpDFhgazdz6tZRy3u47Ah",
  "key26": "3w538ew8qjjPmrsdp9qzc2rnC36LPAjG1ZeuYs9jWPcKYvUDdVjPMSMXQP3nBRbMowpdbjFcTnEwW4U9n8tuYjFJ",
  "key27": "2YnxxBfomfDCfpoRtuaFPcVEDQZWuwgohZ45c8VQXQFmuLHC8aG2WrZ8cwdMyEfWiSeEDhi3pz8vLbCyBCHMsR6y",
  "key28": "gWyjUL2jk44hkLniJc16zpFEW6VXznTK84i2CQ7kfeqbrgnuZmsrnCQY2QWvE7Zg4dpyruXVBibNda42ydWqh4e",
  "key29": "3PmGMqgKZFoUeZxp3Wcnehh7tkNKjYup5K41Wf2d4YCi5ugzhvx7rkqtukTLPmhQDGkPFTp9WvCxWJvqg76hnG4z"
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
