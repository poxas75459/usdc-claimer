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
    "1haPkqPBSH87LqfeVzNu9jE8KubtF2N67afPX4YcBQRtCQtCMzU4f5U9RyEqDNUim7RYU4rBe5cRaBDkdmKQE7c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L5V7N49DDYxfyPEdoq1VKyiS7LhxbdCDC9iDapoUiAqRPnxe4Vbrjn5VTW3Von17mzqNgee6jDojD1BquBTMqRr",
  "key1": "5nUoDN3xqiNQEsqYGW1cuJtgA7H9YHXiAoE95JDFunAwmwJYnjdtZj3nCFYTGw2ty4ALNRjbmZn4y1bLdPDaR7jr",
  "key2": "5sPeV7Ce9Rci5X3bok126VXzUCdSpJozaG7QhksEAVKPCnwwNbcZ6xGwWTTeQtLMHJ8GjjwSL48G7RpZw2w7vyyS",
  "key3": "5mRUWakYeSC5PZsryf1cQZevudtHvGqJ3bRhJZG44BgY731N12gidyrchyCMffh38GnueYArsr8faLcvKo4QsMqm",
  "key4": "4Xdn5r4yDwr1hR21DyE9P9meZX4xvgHom1B5HtXmLftSbvA4FDyEKBdP9scUsZVA9E6cxsrTbxdFEtJxhBoMMmxc",
  "key5": "3TAwkfZaxyjSVC5UdknPAr8i7Xvvb48kCL6zSwSvRbw69T7uUXJC5PEpkg8MLiAxE1d8qLrEgXFzLox5NP9Mxcv1",
  "key6": "22qQwjPDpjqWzEWQRCZbp8BZr3pStKyW5ss2V8zmFhdHUgGYauBGdNW5En4hTwuaiBJSdNNjZc8c4eFVVmvoP5TL",
  "key7": "35WCUcMxFh3iDDs3bzREDfUxXeE39Fa6cdL5yduRKd6AbA1Ca187C7ms9q8BGFxqPrDgffoTTVkPhacaHyxShv6G",
  "key8": "7pmkaHsVtZ931Lui8EmofMqqRgzdJRFnCkP8Xv4GPU12VTCiykHyTkAeCttrqej5oFjcBm7fw6zaWSEcwRB3eWo",
  "key9": "jqBbmyvXzb81HYrf3BQEqj59NRuso5yF4MdwvZ6PDcKFhhesw35P5c97U7SaXyeQWrkRBZKrbtaRh9jszV2KkMq",
  "key10": "31Me1Dqw6LG4Ncc7JvbyC3sFMz8V4c6GoCVhUiLSw3JZtF4QpmH1eB1dhq1XyCoGEpQ8NSMnNsBvJAUjDxYLgCWX",
  "key11": "3yZAxFzHPzAY8DvorSkmv1tgizqk6XbP338uYrvsagYFeypmpY4H8op4Mka7692MqCQadSWv8m7VXfNLAneMQVZy",
  "key12": "5oJvNDcQaBQUjzkmGG8bSEHotUt5TEUHE3k1XLY67U2CYzVG2K3iLaodcHLEaNNFCL8qaezPP5Rwmrzdz281xuPn",
  "key13": "2kXekoYAZwjBdTDK21WJ1g5s7dGxzg7sbvsdKFXQh7fqXqu1qHWq1vDUqJnzeeqHXy7EiyUdWVztfBwAF4v3HVTi",
  "key14": "4Jirnt9BzZRvgmreqcNZuKffbRiL5H29g73qWKwHnKnrHBwXj6HpMy8c9aFbX3ZVKWo9pduXb7Gvmbh5oFNn7jod",
  "key15": "5PUUKfCJxsjsYRiFLMv9gXMJwGnuCF93o3QdYbNVAE5QHWofdHLUFG4SWZjyQiTHT2FL8wpjkbwAikti65PoN6PY",
  "key16": "eibMKXeVGBB6YY8h3EZj4NpdZXuADPmtsJVD6bMTx6tKmXPXxmPCs3U3YeBwSbheVTBYp6YmskPZBYnWEtnNaj1",
  "key17": "4nE6zmw37rAYPX7b7GSVTVcEmxBHpyG4fbPhQP6xVwArwRfr6nuXC9Cid9J4DrPfHC2BYL4sCzxiTa8kCFNuKoaG",
  "key18": "5g95BcrVyGUTs7SPZ12k376LryHoTxkvpWZmREpndVvgPhYbURW5jNmBY49kmvTV19sTxmCjvCiqQqW25F84f4R1",
  "key19": "325e2YXNxGdu8mjqLP68tNVepGwKr3JeLbNMgbZqk6BPt6pwCwLQfskxsFCxG9jgk2qPABJ14xrtrbEjTo66B85d",
  "key20": "3xLbRbs46jU8YYrLmzkVkjwtv9RkeHfNw8x6XMXLkPnY1WEaiHwif6MjpEhMfmcqharBxEg2jZxyDfLNpB5Rq4jb",
  "key21": "5tzdcVtJTjR8Sc4jXHKckaM1YhSMjC1QYUP4oxW6iFVTP7ujKYCdoG3JFV9vAZxrorhNrh4fdymTLzpNsVY7bAt",
  "key22": "G24Uv5CUJMgEf3HTxTrej8g5fJqurXBUWJ37RSJm48Vv8E5rwrhsg4LMVD3oGWWejZwuVAyNfcYzkrqwaUmyuSD",
  "key23": "2FdqqmWTKRcmXnr37dXLhJCcbNCeCkrYKvDEnkZpnBTUTBS3SGZMDyDj7SD3HDC23onZTQTy1JJzrQQT8FiK4bUU",
  "key24": "3JUHiTZ72tfzSUFXum2SWqt6vVQZ7UfGC7XNfJt3ieWr6XSd3VnF8NbmjP7nsaPhhEqtE8uLuwBYfwzdCnSiT9M6",
  "key25": "JKvY9VTKWWzzm455mXSrDQELXVtDfXKTEzu2J2D6gtrGNxaPdrNZZUHTieTTktCBTEUZ5LSYy1kSGyWVbpzXCq4",
  "key26": "22XzVwW8ZZrcnhhx2JtUUcpN8af9avi9JTMoKyZHKbCYEDWqKeriybJfbCPCLfXEY7uWW19YxYp9Vqg87NggRDay",
  "key27": "5NEtmcHabBae2kD1WwNYQiA8ESS6HSbW71Y4R9pCtqZx88ScmQYB5JRa4ExGtLeftYik3Ta4UXVss2hkZxCLobx9",
  "key28": "4QvzRVQovKLRdnJmhDyYLdXHnPbgzXELot6SQd836YbuJrLqBoWvtsnKRVSMb2CJEVrsE7rKDhpicth4uMR883f1",
  "key29": "2k4tExawrUEqoB5pgBtJttngWV7UMSSNr7QDJcQ7tNgL57TJEhbJdY8paeQYWuyNEbnusYev1M4C3tqvE94PAah7",
  "key30": "5iAiGXx9jHAoL9FuKoivueSCLCDsCcybrwr5xwFtPxQvQxJK2V5gDxe1QnaXHKjocQjFfDpjgGtPH4SYFfSC3uXd",
  "key31": "5T5VBxow9xqp8EynXyypkuaN6oNuKPnfrkQ1vR7TytpLQffUq7f9vqH72wPEXbkoM4xg1Cyug7Qp7yLV9AREVxhs",
  "key32": "62HDxPEs4bu4WJc4CTgX2mtCBxvAc61EyXz5wfuCWki41dHLc5p2SkjXMjigXMPHfLWL7yZFuRHzqFxLRZ4p7A8B",
  "key33": "4sqN5LEw2fA1qnkEw6kbyYKRh2Ap7kQbzwSYCn1A8ySFUnyMhViL6rh23egDj6pyXmUdNkQXG8CbCCV7vqLnZKZG",
  "key34": "4CZ1i7i7mkWPNnMVSKsjfWZNidupyzmyzusGcgxw3qvvEApr41NW2HmtGFYSmKXzHWQQkFWgjnCWM46AoNSynYzC",
  "key35": "3ZkAZB7AZEGPW7x2cxXX8Fkzw3QMyYH69wDm6iZDwQgLgwZFvixZ1YRRpShVhV7WswPSGzaRb7EG8BA2dBZonYyL",
  "key36": "2tbeVrUa35nDLFZTjbYuwXi7kH2qC8aWsXQo6aRkGdvoyQe9szSSZk8Qutbmd7rZe651kNhGSyy6kcUj4xoUGiia"
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
