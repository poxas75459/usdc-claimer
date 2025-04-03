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
    "EHFJXrwZ9VyppnhQ7rd69RcHuHfKavMM5yHFUBFcx3H8G51iMZE4SV4HUhpgjMA3LcvJv58iuWpLKrkFszRZG2t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BSHdHSq4EA63fmXawKLRWXfnmiXmP3ybiLo2Ri43eHVVLhtZpoNWWqzv56KLxejqcLm374WGrYSxbbqKFTxrE8K",
  "key1": "31NxGHUHwWTFtZNUPrJzh4vJVeJqro6RkP8r3Ln4wN18zJsp6NCfP9PTzpzBtJQX6mCLjcDsv22znVLpSGdKqUqU",
  "key2": "5zMFJ7vnoaiJ9dXz5KjU9RzWZmKs5a95f2qufeeK3GhrurSqM9ojbgSrj73W2e83X8K3PG6CQW6vNBx9XUicvYNy",
  "key3": "5Ziy1ZGvKYvTXQRm7fBAQdvy5DLFtbyskeS5poic4CaxTzyTZY2PeMCy1Kg3upeeVs1GSfnGTxYk1XEv2PUmXbUQ",
  "key4": "2be6ZCMMm7h7aYeygWeBmSxkarNLXjgeZZ28dZdcqU3SZfRbuKUYt4r1qFeZa84QNiUBZ1jQQe5YP4GpnZoUNjff",
  "key5": "5FSWKhjbkvH7fmBMcVVqFHPVitRradBPjFpru1PNBD2JwKVQn8JjfRLLLHxTP8bdbMmcPBHWdhMs2aUDZUtjuULF",
  "key6": "pizEYhD3yBrk9hPjuQAi5u8Woz75xbhXVCfs38zdu2xYpUySnZ5TdtC4kikb2vCNgFaQR8wggYTTqWv8rKdcnAR",
  "key7": "GDKwBdUju78bbJuN97EQMJZSjpfUX1EEDTqxFqJHygjQVDhXpSvkjXYnqJc3W3EjmQ79AGQauNizRSkVjYQRtcp",
  "key8": "3VdwYr3qEJx8aTdi3W6UUdpz4Py4Mxj2U3dT3pstL6tHozKrShroJFU48w2ZBnAqYtqf2nD2BzWkaAHS1GTFvmod",
  "key9": "5PYo9TZLWm3zAwSPzvA5otaHuVbs3A1NiG89k5SJuihpT59HbvArUVEJFSmNMiKBsoUFJajEWmyB9Lgh15LthG4G",
  "key10": "3FvdUP5EpJ6DzutkwFHGfGFBk2DJFDZDdDEM1Wu5u8uKGq7DQcrbk9uBbR9XZUwzsaRrqauH1i1etGFEDM2mGCGM",
  "key11": "6pJTBgDRDqwVWWXdF8pnrwVBonVAeMXyYH2iPzXwSeQWT1Xe1FTWFVmKp7w1eZTaYJAdRQ1xu1cRCH4SouHmzVn",
  "key12": "2tsGpRAVv1T2SGh2LvbD46CKb9zXFbgokuLWtTYxvUVJaQJRocaNbRjuuzpcNn3k5mpZ4kaLmgqA6xteZ61YYces",
  "key13": "5tcAHcpvq3djDMCAwEmhCgnpP9yA7icU91QjBuncvGTUD35fCaRdvooSaPn9y4H5RF1X5cd7b8P74n83vui67WsA",
  "key14": "5zbiptdaraoeXvSEaoBRzXtAQX7WSReeaJDB4K7fxaGczB9hNxrN3J9CmC8xJBXRaKdVgjW9LKfJ8Y814GNoRRoB",
  "key15": "3dRa8iX3KiiG6JNVGaAGyUoXAbGCAw8jQTgd1YewKv4K4516AL3ktCrYLEqQFKBkub3FERnVxaPCCnWvmYKY8ssa",
  "key16": "3UpHdruyPG95ByiK7wQoGUi6uDSg5MTAhMMEfAJ8Mz2yez1NFAt3jMcsmitFCxb3h8JecZHMhQLowB7Neybg4vev",
  "key17": "2U71GCjTX88coDychAcamheCLU9rLaD2HD59qBjJieSvMDSuJnysgYgVcbr4xLB1qn3YS9usb78kBDSgrDpmpV6",
  "key18": "3XuJXxsPeBpxSmwZggYXkhXxmx5KP2JZb1xqmE2CvTbh1p3Ss5rAL3abgkKUX58RXHR7JjsXRyKeRLbzQVYrQEEz",
  "key19": "2X6hon3w3dScnFJGSfNfHZu96acMShFok24pPJtKS25UwvJCXghmaMD2Ry6EbuBdpgP5XXRChGGd29KCeWxhVxMj",
  "key20": "2yLVaPLQjDPrLRexxFjDeqnhD6k4CLQPGSN5uhBS1hhfkSAHSzhEMY1C9GwaXpRbzcEuM93tmLmkYkVcdL6oSMyW",
  "key21": "3Rq3A5h3hZ4vu7W4AtbJHMxnfzAKuN8LfzoAQ9b7VQZwrWd42GW6pdWKEGrKCKiydecxVyNVM2ZEUuxbZi3hFHii",
  "key22": "4EjRsE8qhp2ipdqGztmPY9CsCrH8rxGzQqFamcmSo8ZDVuNhAqDB3uaYQdK8n8CGVBQceHzqbkg2YP2K2r1TezUK",
  "key23": "48qMonZKSAXLWrNsozqJBGNwm9AMMLd81y3q5uEp5vdQ4mJH9mPwCMHYcNo9rGPYkNLrsD1Grx3L8i4gh8TtFjXQ",
  "key24": "3d73fKjpEf4U3VzoWtUDr5cectvW2fWnfURk6wd7LVsbyPjRh8Fqo2hckQXsRQfUEVgyVai1t2CbNguLkTFAwrXX",
  "key25": "5zR1uEfDiu29e98JbGW3Vhtith7dE89gSCXLbdNBqrjpJS4bfX1oZspC1BW74qfxK869kyGhQPZCXnbHz2WmHyK7",
  "key26": "2iSppJSrL6kXGgBbvYweHpBV96rrDeff789zPqVC5TPhWdr4cy1eD1LTHzxbyzVgKU4bbTTYRjLMiFCnniYFCooq",
  "key27": "5jkuTpPZAGGC8TdiNdEFnfNSTYpyJojhv8xKK1ZKdAJRqhfSX8BU5tHqZMXXkqW82zdREF6sUejGap4ChAxRRXcg",
  "key28": "2qq7Zp5cSeE6WV6kY77YnjNnyARq3vYth1i3wrWFoUbD3EjxpBVXxcSxqRN1SeEPA7anzJ7BVSNs3F9SeSBw5Ayq",
  "key29": "4bomRTfvG8NLRDBYBvfCG93YvVfPPVgwhzJ1dH2Hob7mFac3QF9eMW8G7HwnxjsHDxWktg4SV334PtDwYJ85j3FR",
  "key30": "Jow915JFi4hiozemYEFE8nrXFQgY6fSNxnjRoECURXX7fAu1ita5NKB7EegWDLGYeWVnRKoqq5ni28k5qHcEtwv",
  "key31": "4JGyYVGrkU2AzCx5GGD3HPPWBykuygws7Y95VtnSgo6fKYvSMLaqRgG5yXAbreta2AohBuowbpCUsSH8Dkg6HMyw",
  "key32": "2cpXN1ae3UU5q9w53ZLRQFCphCbKfE9EyyNA93yEhoUt6Bk1hU51pqgqh15yER5SKSV3H6UpU3Rv2EkjKgAbTBVV",
  "key33": "4F7rHShdgqqw7JamJ7mCap7dr4SXC5rBA5PTQirEDA473hanxWKwiB6wcEnyW9L89ZqAkgDxB9Jy9MwAZgXNP37h",
  "key34": "DGkwdYwsF1Z1EjoQ6X5LyucLG8gXNPhGubKSZJ4P67dNJf69UH8Av8XiPzmWzvMT8BzP1oHPWAtetFz5wLvsedH",
  "key35": "3M7VaQsYPQ3pEZVgFRx5DATsuG4pcyrytjLXHLtjyr8JMwB5RgxGW3DkgLL4eYk1nuJkr7T7K9eJwjrqd6UNhYxJ"
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
