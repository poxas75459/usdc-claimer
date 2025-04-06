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
    "4kMk4wPypgcxnSkgCvmYrBiT8YZDqkgxcCJffjMFWTWWJ6mDpCxdNEP6RJRZLqBt6fLbGm7ricWU2Q4RrhXCAtB5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EDJQ8bNwbeW9miwMyeHv16o4R33qs4RYUCWvQXmsHPoQz9f5KjLCcpFBWECPMnsp7CftReKUh6aWz8wRKweM3cb",
  "key1": "3F38UaX2cqVg3ciNk267JPUH2aw9YZFAY846jYeyeS9dFxv3BizGheYtxx6wpeZfaZr5X3sPehUEo2ym5uPqNESC",
  "key2": "4hxYLk52iQBedPzLwj1FDCmhRRxxFG6dAtonYWe31WY5GynuGcNaL42v6Dr7g3FkZZnH4m4o29c565HKCciELcjg",
  "key3": "2w546KDLYmsG2X7Y3eNVU9nxqwfMk1U9SJb2uGJnRN43LHvwaUgSCz2mCA9o4dqnLs4spXGUYPVHBozanA1SwVsq",
  "key4": "3c7JnMY2VjScJRSHTjvu2JmKvUkovayeXw7FPijY6DxW6aoakHT7waLCzfAcyWUodxT7kdsca6iqL3A2EnAN2zWB",
  "key5": "45WzcCgZNfLqhJj64K5p3uzFUUWbHZ7Usv7EeqgfDrjzbthQ5j4Wja6JDfYAGubg8USsRj3ipt8jxgRk2GNvv7An",
  "key6": "nfhsagSaCUtYn18NEZ9EbWYGey6QdXh7GBu8nCZAWQmdrENVTrkZdhe94M2eqyQBd3v9tnVMPp4SbYBnArwW1nf",
  "key7": "2ktCjKQK4DS4Cv3TDdwXaXQqXYhPvNfX2iemTSFYeNLBUn7Afzn1yybkLYpsGdFiSgkWaMMa8vwrEQ6JdMBZ6A1W",
  "key8": "2r6UxH8JKXUFqF81u3jVFVA3zxDbzvYoTTZPPzE3nW9Wh2VN21iXpvzsDHQWhujYX8Ne7QiEsv6J5jKh7fjRWRCt",
  "key9": "5T4youju1xAxNe27WnmeZgPsRRXL7zmSX5LirpRDp5yfuZtZWUh43YLaHSRyV3zMHhL1eYr1CW6G4Mq1KjvRn1SA",
  "key10": "2nMf4MoHuSpXQk3XyU4DrnFy7NXBGvxMk4t6SFkmmdQVLTjNxPqrnt6XMUoNj3GAjDL1BZ7u7ny9u9pf1TNXwPGE",
  "key11": "5nHMQtxAxYERPx966S3hng3jjSxnb8HXxyZ7gpzCZYb3c2s1a5p5Z9fmDvm1vuj35F7GheKTVFoGQPbuvdzDQ4H3",
  "key12": "2eqK7Gwt9tLhemmwJfphGdWwyKj29LSZ4pYCXda3WrwwR7MfdGiDLGFAKoUJ22zfZd2uwkicNbmEixgUxd7eytpj",
  "key13": "5Vk5yGJe3uMToPVHgce49UYEFUECFv8PoGTm1Lq6bJMZzUtnLH4MMMzM5d5qJqYMm4i89QwFuoqNBn9cyDfqYvyE",
  "key14": "P31W9mV5wYhtK8DY4ZCK1VK4qhk6PniR7Wd4bzmBRVz9HKpmiqQ3Gn9izE6pokvR1Y2S8bYodEjNqcgZnNjs22h",
  "key15": "22ZFVDuMZJm2D5HycCy8DhLHEgFv9ujPvt5hD1LyvowJmcVYJsoTu8gSrLoiTWZu1WviR4CxwDWk9uWBH8LqMMws",
  "key16": "4KJFnziTG1ppSAnQdmD5NQy3brz8c5k7SVnDZqq6YH34az712DGUJLakuaaWAPeYA82cHypyMetwYtyJrXVjiWuh",
  "key17": "5yP79rFBG4bngdfXtP59Rgyvju1dkb2s5DyVeyysWPh2nFgqjKTnGssRdL38MbgwTMJJurrjcqg8SALdrPQmQY7C",
  "key18": "2TjMGP2FvdooVs4AKerQVzKqLcWSDPSHzrJcP6Jo5ydhYyjCr5LYf4vBuCiq51UNrMF3eVUYgUT1e1yxH8s1Br9Y",
  "key19": "4LKpmUuzfB26ha8h9jbsGhyqttFk7rvjP75TLxexUjPVwa98WmY2wXy8UazVpuDTNBzKAVjGSVe1ngtCGwQPtzjF",
  "key20": "SqztPck1kEzSJGBxqfJ5TqB9aojSYYAw3sxic3j9PX7E9rsBSqusp3v2qyE6zxQcJ7Ehd6mgU25539JjEPVzkU2",
  "key21": "4ZbE1wR8U5mwgCXwW6ctwEgbqyc45tsdKpcLBfij9HybePZ2ywxpfAy9zMkKGg63D4t56H5zh9gB1KyXuc82TV73",
  "key22": "2L3YMQyHiqFBPadfMADrbfrSKoGbVxRchRqjMUtL3c67eonX1An64rpbWwS2y9WzCcrNHHtxw55PyvvP5ibAhbW8",
  "key23": "6KV1iq16TWDYwrJLAwJTitYwrCLzLAhyRG9Wg4sooTx91xvUq9XXZTzM2Tio4YshUcUxUDuHvAbedbVVNR1kT54",
  "key24": "4tFELnrcgdivCVyiwUMCcLvGvsZm6YTMtwZFEj2NPZGpXTC6xa7QCLD63TAoTdVfe5CFwFaTStB1GK2bHM4Jzha5",
  "key25": "4AWSD39CmqWhhhsRgEmMJCVXjMUdKTrfZhoo6Fg7iNHB6EHjJY2Vi2V9n6LZpzR9nEcugWPRzCujB6tnd29PVhdG",
  "key26": "5AxGopgqcYJxEp9kXGrf9AkfanxLcZHWSp3LnpoKEzdfXNoktyimNFaAoZtcVvnv5vRhWonF4cX2JkvUKZzSk181",
  "key27": "2LXu5sQBCMCPYeLTpjfCLcVxVrkRwKd5pF9sZzyr6h68sH9pB9dKMcNpZpLG4qiexHbAFisuWLS4wXzCiu5DYBe9",
  "key28": "2RcTKgXnnUwWethEqfc5nDpmS6iUruQ28YWq55WbUv3QMcS3winzxpK22WSbLGgZaCEDyHCivNuViQaL4sLLd69V",
  "key29": "211xAt1dNfueJjwjuZAJofCyo3XgjhBHS24mbAjbxuaSULWN6ZQTmaWQj4J8qRCD3817vJcWE55yDGntcDkUMWrU",
  "key30": "3qpzV5Ba9ry6RJZ2RU7ShRxE3PfiX4gnS95kX2FZbVe94REZ7kqDiXzNcBi4D6w2HAiZ5uyye44ZJbmsj6QmMVhT",
  "key31": "3brsFzP4jUxg7kv4VAgUzs6At8QZnxTNfjDFUFajtz1CH8Y5ivss7o6A9HzDXwxVgDfAGGf7jYr3p9JykCtK4NJ5",
  "key32": "3WAMrybYbuxERqd7R2KWeuha2WZ929ei1YViCcwQ2UXf7GfNjpNqSbSEYsCrCwb5QAdCjHQ3C9bNi4Y3Zywf69Pf",
  "key33": "5tJadF1ExVKce3veqeFJa64qFBBPjsV2fxbwB1CDHsCvdwvk4MwyfgtmUoU8gCY7MpwBivPBJrsDjNNMjrVt1BjS",
  "key34": "34kBb9g9Xw2XkAMRwsdvAsJDxF17RJKbr9JTcrv4PzC5xq66LqQU6yqHFiJ5vXbsjarCdG268EJwfbtTMkCzKP23",
  "key35": "5brFTdCz4u24t6au69Stp3sbC5ns5CzaPv8jYkcmk5PMzm2aMVko7soYKTRS1vjF2UZCAtfiewQa9DAzEv7WNAXo",
  "key36": "4x5ExxCGLhFkwHJQU6KZX9rWqQRiFkZbUTSUgLpyeygEysaYwcG2LQKHgfunarGP4BfgQsFsMaegE92mVCsLGkvJ",
  "key37": "2p8pUd862oPEgxFaSqkHVVPasfKRgzkq3hZE23g5HPZFuPxswdWgWZNj9PPCWmcpET5QmcobggZusENAckMuA5ar",
  "key38": "26eTsWRq9jQFZP678QLdW5FMHebrEitLgKkMUjzhCMorsYFKNzQcDfju9CaLMzpaocmQPxEigf6PhzvEhNp3Lo3H",
  "key39": "3AJyMR8EZq8g3DK6uvtZaFvDf6ZXfDGvsECzfXEDVbGoDuSDWJvVnwpbzNPUogfUstwWhcdLGVpNP2imKeNZpqUa",
  "key40": "2ZWQfuH9bhRiSfmDuSr29N5iokiiSnYEyfP5YZGG7hfuHsXkNxC55cT5Go92e5XrPevuD51bDSgZ62QrU5dXKHsj"
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
