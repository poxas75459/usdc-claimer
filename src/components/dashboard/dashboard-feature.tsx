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
    "4idVm59LaJFecKkeXKR1bpPq9iWvddxJYGGdgwjbF3rrKJv3ibat4xKbZ91u1XFi1vjKsHzY5KP1eU46LMapyMC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GfiGLPZAxZWv4tcGP2wRuYDwooE6tGmtnBgFYndXzxcBxUXcV1mYvu56i2jnR2KyLevrofU2vbxFSeEDXDVgqFk",
  "key1": "2cegYpwu8w7ssk1GBMb7Kk5JAGPcSmeKgUgtpUbfXHEkvALE91hZzsjSgTMrAXXvEzxLGEbom687n3MX9Pkezwkk",
  "key2": "xpoejhNLQbgc4qnm6P72uqNh5kopfVySVjhVch8KCHmXN9T92VS8ZiE3DK3iGcrejigcY1BgHhWj3kKxoBf6GaU",
  "key3": "2FF6mcj5xRyWLiPEydkycNHQ7TMXdkTgYxh1ErL5amuZBj1N8MQMZL4UN5EGxpvo3FAjF5HE8vWi3tR5mw22ZNEr",
  "key4": "CgexEibLkZxQnr4e7nbkaR7gPuzxBqkgispqC3inNa3xi8yjWkkzfusVMRHjxcF3HRjMKsFWfgs4KumciEJvbuz",
  "key5": "3GTCFTEvPnMTMQSh6PJbE8gDhqxPrx5hLSbctk8vxTRh1jYYsK8BYUez51gEBdS1tVjnkMRzxTsjve65yK7weFNu",
  "key6": "3XECcdfooYuGJfP3BFearZr9GGDzHeD29Qwvi9eWAnjkcEMzcNM9YAjeFXRGXVBW29vfrAA3iBc58cuMrSmLoyMq",
  "key7": "21NQyD3oDqzMjy2zbkoDH1mpaD1XdwguWJ7phGtRnUBU3AXZxzjJepKQBxK4YT7oEyGoS4EZThzuoR1RLvjnfu9u",
  "key8": "2EabWMLV35Uer4XVa28Q8Bg5FAxYAZk5XEr5BXVqp7s3t7cr3feoiecQTS3NDdFmnZ4jkxUy3KNmxAb5qQVnm3F8",
  "key9": "2q4YPSg7DeeJbWrMyBzA8FnP6BaMdZ88uCMXrttyi88cqr63kf65GHFKnhLU4zBKzj3YLKVkQ5DkpxmGH9WNmuqA",
  "key10": "5euCtb5zZxTorkELeRmae9zFBgN4SXoG4uRbVHvCvtQ5phzbCwZosmtCuehr9tDes9U4vMmBNNk2rtvRsUVwMrUD",
  "key11": "f8ZKnaqjnAv1httqCbDfMgbUn2hgCLZLhzt1XUJ2uCek7cD3Sg2GKwrqxv4pfdRtSftBPB9wdBS69JCTwvTXNbE",
  "key12": "2qpbcCzY7mRFGAgPfKhQKtia6wYhRPnpo7tDtZiGhY7vsU3K3jJLRv8w9sRofPfGrA8k6J6mq6jS1WrP49ymdB5q",
  "key13": "2Um3wLrWDkdK8yd1Zdnc7bRDEmK1bBcKdb43F5kec1eaeYDvdTNUSu7PCfh7C9nSFXcUyhiCncg5RmSkytBRAFP9",
  "key14": "4XSKsShqqDh1vKrXkqVh4vtdSQmUoXxUjweauLzKdGWU8qXABqwTp5gQhKFirkudPzgME6qnK1LdAa54FdnJ2jp2",
  "key15": "5tMZ1nULhP52Xwmy3nFNyYsx6JBCtFpdcLbFrRA71U1GsTaenFSDeCrcY7L88TVuoopxGYR8xP8zu6D1QPP1Ar9B",
  "key16": "2jFQ1gzWRNq4r4LRCBGoE2nqiqEoHKPSGKdCHJmhNqZ9DiM7PmKtKyEBbEDNAtLuW4xdrAp51axe8bM7nrPmdn4q",
  "key17": "8d85R2gMBKywi4e1r3KQiW9yfmxEHMShi3DRwKfATzmAz4NvnqLjbckqpvHWKzpSnZmoWNkV3g16auo9MWqiody",
  "key18": "5dBSxqKVjprhNqdX7iEGzUamFa6EmBKWoH3HmfoHADhkd6xZmsf1K6ZwBPyb7GvVrRNq4fCD1wcYoGBUBZvbBxpF",
  "key19": "2ubT8GSSASwNALcmbFzNfrao52uKKMEkqXZVHkPUdhY9ykPhHphYkpzgZ9BdN4wJJcJP28eJKUMJATdvHhfkChWv",
  "key20": "3csmm7vfJpXmuSYxxHt5fUag8PRVsDwRPBQhmyyZ88eARfd77NweATXdRtZU8f5ieEmJqxm4uqhi6GnbfrKyYMuF",
  "key21": "2rxpzbDvdV6hibX9fyoKcbN7pTZnP2eXhHLzCh5SKMuvuikrxfQoAkeNzvrwQEzhCMfS6k4TiNs8NMPAAmpLGZBr",
  "key22": "2XhucnXstQecKYULmhFKfXzXzH8QB4khgkNQqL1ED5MeUzS25usDPvaTHnfzH3qJP4WatwpeibCnaJDgPKGuvXVW",
  "key23": "341a4jxfDgRsS89j1b4sgkNBTqhTQoCy6nsaxgzRBPuj8LuA4NCg7nWxqDyxUCuGHx5ShrctsVxSw52eCy98xypU",
  "key24": "4wPZRQCnvEXN6biPcZY28LCPbFgtgh2oKmcSuWGZt3ELNR4WP7fk8gZhRAFKsoH6u8nebsin4xdymL8ACvR48u7V",
  "key25": "3iCBfJYgcseGwcEJea7Mzc6FJWzCD1w2veLugz8ZCVSxVQxvSjAXEKw7VKHXSN5JqqUfrKws4v2wJskyfPoECfc1",
  "key26": "3ijAemE7p9BPC3YVYBGEXjw5qpi6wyUbzi3mtXHpP1LgLxEo5ZcoUpBEbRuVhFZgW8AbBF6DdBZTA52djwRnoQgX",
  "key27": "2zHox9UCSyQ3r2MCo42n76FPZ3uh7qK5HVqGN3ti6RGLSnJzBuHXPhYt3Q7WnwNTE4kxwF6Xysx2S4ULvj9Azzke",
  "key28": "5WHvrz22ZRTxZ3o9TRXzxFDRMv7aj4cLcevCUqdHsM1LVKHhW1gwHQLB9e4FfW8AdrgTPeS4ZiGjDuE8ypQU7HLa",
  "key29": "3BKRzK4Q27DnsyahoeMM5sYxF9twnDWbHuAE1rR9oHA1v4f41EDXL4YsJSRJpxUUzhMYnxjaKSmFdEwxzpqdKUWT",
  "key30": "4ruPmV3Vt7PMmYQyhHFC3Wqv9sL6PdJgyow9aCYJV3VR7aLJDNiuq8ASJwUUcVrxWBbcn8Nai6HTmAQk7azcnLMj",
  "key31": "Xfs5Hpw2WuECPsLSJunmrLYLmXSPsnsgKc4MAVy9yqY5c9Mx18SEc5c6cFsQkNQoMsMmGNUdeuFRx7j3owsXoEn"
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
