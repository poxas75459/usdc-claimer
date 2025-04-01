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
    "2Niw7sxRHcWGfMMSR6Ugnxg2x7t5F12m285Q98YkibhiSuZRYSvX1quQuVEHqLQ2zcw5zJFNJBBM2YTaCWJyyxH6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MiiA5QTZNEMMbKd1TxGv2sCj7as2G899RqKsCkJYSJgHC6uw65i4cwK1QgyhLBLnepzwSKp1MEZrBcxKiptaRSg",
  "key1": "5sshGckSTXhizKZGpYbuVipqeeMq6K3ky7amTvFgrPp3vXswVYfWUGzHT6CUurbSM4Z6AG367AdcS8HVT88zm5Rw",
  "key2": "2aMCLuHsqbEtdofpQWCxznYXAEVoRPji9nnzyvfmapf3pS8wP9YqnYozs6xQtiCyQmHEmFXpeNiY4uaqVgUzyJt6",
  "key3": "4fuaL29ZbPPM74qbpzETGWZR93NWFEPrej336ekBAo9Xzbt5GMKZY32Smept8ZpxijxyodS1G56vbkGisujUg5fr",
  "key4": "3R48D8z5xf5dwMoYZ4FEwZmhtPBgmjm1HF9e1vk9EeS7KECBaaT4PwpvBZ5e12ZyvEDgt9VTCbedgS6sciALN36G",
  "key5": "3feFrVrby7QbJVsu7Arc42NjNZ7hsM1P5EG2zPnTP8Pg2GnAdZwXBRKYKtDg73DmNjpvcwgB3atWHQWLFq7D8MpU",
  "key6": "5TznpRie9Jh2q74hqbKyJaV9TYp5wo1L21g5U3bWLU5uCAeKUVLajCGqrPAMmtcovzYXXS9WhsTFdFemZVfLpWtx",
  "key7": "4prqiumaCHiUHMgfJL85Xdgw33NSNm12wLn7rdYD7DHXgC2sJ4CjFUicRd9gFckMcYdPneBaX7qxK1NhXbPYbZ1G",
  "key8": "3scK2MTu3JpkztM1bEyBCbUqXhEHMMmp868EH15MgDaQXifXy3N5Q59To1m8ankGwzB2Jcu4QjAgv3Hi191bpCbg",
  "key9": "2RjgsfHKJcGuYZ7LkxWSG7oy5WJVN6ui4E3KUVJiQA6x8o8brGRPnijnuMQ6x6DZYkjtPR9QsoboAHFSyVcJYd9g",
  "key10": "2my5zJEgcd8tCzfArSdQh9MT3qVQ5eZ4CxQ4qLjW89PzUguMob6gq1f82h95Rrm1CmgC2aCv6i2AcpxX1YAzRbic",
  "key11": "4Q8fZ51NTWmQDteJkfmxjb5J2uQw2ufoxyRHjCp4meBizMFqtATLrC81YXiXHNtga3372Hd2HmnV3EgTtPpbxs7t",
  "key12": "4GhTab1P3eRvzz4TBXu7ShsepFCeEEpn3APYr5vPyNhTCy8Qj2wjm246Hq4g4do8xZ1q8KqrkSryE9WJ6okf3L1d",
  "key13": "22giUFYSoydnqX64RoYLhcxtv2rVraYGs8ddNsjUFMX2GGV5g5HcUuA7HPCYpwfcnuZpzHfMmtDtsiJ9fXZXEu1T",
  "key14": "MC4f9o4yGby539LQuRzrZgu8pxuFyrxRtG2mW6XgEzTo6fxPjmrvqtL55dQ7TTK4LYNGTWPGmDJcvmZZBS3q7RR",
  "key15": "2RhgWaSYYAtTGEtcLhWQHSdfKUeeeJSagBPy4o6qkNidv3dTq1CkjzwGU2ps83JwYijBsChJKG5ooEDgSnr17Be",
  "key16": "4VZ8zquzjouLSaFT82HSJ62nzCUqCiVzYWe7rEzggC34gheWhgXFonrt1DUct9RG9LYpGxWUt5dFZiRRRis4nCyy",
  "key17": "4sFzwBG7GFPGxgDiZ2RPVsw91BXi1oTiQE2vhogCG5W7JENxKjfE51fPqfhzhHQD1j1RckMTUygRGvAQ4VLp4s2B",
  "key18": "4sYrUhpoZDwe6spg2BEguqWTe6BNx5UWxfSTgUcKRgMC1Z7T3LwU9KYpeb9Y2mawr49g6iAL3GQB3owwhfMvSh7C",
  "key19": "4BoCGG6BUfjHy7yTm47tLCxoexmTYvhhzq2FtZR2pd752SbYk2DkxtsvWvPn9C3yJC1kAw6qMQAVhPHBBtQwPjBu",
  "key20": "79S6GNtmWKYUXTHMHEPfkaR6jPBqA51JEtEzTAP1VDy588DHQs5pv2YKsAGmWxpCSR52wfXnw17eVF2E5Z7Xrnv",
  "key21": "gunUpTZehqiFkBCMjrTyn627wBbG7wfajymikjG5XZ5d24U6y9DNs19zvBV3ZVtvWLA4J2XqRvDger2umCzQyGi",
  "key22": "4sqotVXMHd6ZVpzuZqCSMUS82WKUesj6UoAGRVG7CgswuLeFhV5vF6P45Q6dgAydmnH5T4LSA7CQQxnDQeqrTbhs",
  "key23": "3f4VZHSPwxFp5BSoSPrsjefeCowSxgZXLkqPqL9ze7ULXkvUKCSvo1GvHK3h6wj5Y4KWsyCAZMvxNWVapbNCoeZ6",
  "key24": "4qvQnyPSa7AWNekesy77y74ZvF1CcFet64y7y4uapVBnGKowyCrAeMNF2BUxArVgy8AKvV98UAHtfY3Qq788KeRG",
  "key25": "5YdBCmByYY6yyHWhgkVTTN5B4LPREuuCNdc6j9BLf3kq6S73dttQN3SWAKpqCaxiY1BfNgqAgwezhTdCKfWX9z2D",
  "key26": "5cc4ZRAK2nJB7trm1oLKQ6JTRDheUmQSwZv6JuPYHZpYJ3yirEh95wwXd1PXrjzT4kz7eseN2kBzPpDwaMUfgDyW",
  "key27": "4W2AXDMVcayCmQxzspB8cFaJfZpGFPmFnG2rhEhkXv3mTuLAbGNa5KMU8XyycEFDset4kKobNwiRE37DtkjRAEtt",
  "key28": "HaDXYeqXKK9udg489XsDjwQoxVhGT6FDQxkBpEZJ1sXxyLUApiVFrrymsLspXFWBAVooAM4kCk1msk2W3jQnnJV",
  "key29": "4ySsu1FQHtzprNEWfeWRQpTkPS2W9dnsm3CKMhrcojiMwQtbK8Cj1j2XYArzTjkaiBdkU4kyymF13SPMBe7CpdHz",
  "key30": "pqqgfbbtvKdEiLu6Vh6M6s8vAnSD24LHBQ8FAJy38SxTipoBxuAcXWaEmjJTBpTngRqEdtbVm4T376nQYdW3PCj",
  "key31": "4mzYCoSGDLP13zqGre3Z7p1n554AAF3d3iKRDDb6uBkJc7vZiLxotQ6vj5YQeDtudxY6qXy4BLtQ6y3eSbfsADGJ",
  "key32": "59GoGmY9FCvVXjhjhS8oxEgefqpXtNZwYindDJSmQYSTJ6JnHMYqkEdy3T8R8inEGbo5A3ans3ZWjTdW5n7NutEN",
  "key33": "5CVJvbJ5K2zB9HHuuQZY8n5w4RMm9LAhjrWgxGAsYnA87XKNzQpQbWzySAfu8sqxmHKUGXJojTrx2raeKUokMxFf",
  "key34": "3tXLUUUaRQ7KdGCs8FLK62pwZUCbdYEZeYRrGTQeQs4XjPw5crixT5dycpaRXz1q8UDrQsVMCVWJGN1anu2uMZCk",
  "key35": "pV9y2FmdVPiVYSs7QZ3B7YhAXe9qeGQvS2CNEmWkY53VcwRPfoKrBwg6BmosgS3x1w5TsCfb7GzovGJPXbekrVg",
  "key36": "22wvaXztqwRfqDRTGQoa4PKdb8ggw3MQjxbHgMpj1gQjFwpRikMjt8Spz3PBxDyYHX32xgmgrXX2k58SVMYs33x5",
  "key37": "49mvPba9yUiSjNghuUY47yHWn2rWmeK3RXsNkZSiwgnCPce7vAvFFH5Mc8c7q2dcMnYBf4sE3UNcgA8P2hj4vdSJ",
  "key38": "2yHK9xwjZVH4nbK7Et4ELL5CybEFfSje2LNYM4Hi8BvkHFcbb2knrFs3gNqZUsh43grHpt5SZfEp3WFxsHdaWUY1",
  "key39": "aWhymc7ZD7Qfrx6oFKNeJfDEmEL3K4KZP8FowT7kXwcHzMK9jwDiinuspkmddZc3BBUKh47yixr6TiRwqmTi5cC",
  "key40": "9o9RiVnBuuJdQvRXeaNmsZucNy6mDp8DgDUMGmkAhpkbmJuoJ2SzBnRRoQx7YVX1S9XjqXEfijVhEx5NzNVEXZF",
  "key41": "3CzuvfTxDsAYrBWDrkDEANVdqcnNQmxHDaiyneRc5aKkjEg2YRSeeEQ6VsU2uGWtGVhpuJdwKFgLhwjLmwQ8fDZz",
  "key42": "MCuHDpb6KPNfkChbe8MyqKMoh3ZfApPpVMrMfVHkmDjWEs9EagiWdNf1ny4qAVSKsj3Ci4FXAMJfwcHjbMjtZd7",
  "key43": "38pymex5rzxsde7Cae8MCnQi4k13DKsSGpYzkom3k8Cjtv5HrfNPpCjobALB8WrEjgDST6vjBf76qvcTk5huUF6u",
  "key44": "548UHrjT1hYbWgPVETWWt7osrkheaGwQp9dgnuR66GANzx7zUBRK74ksMAVWf2vbcieTXnwN7gqJ6da44CFxcwh3",
  "key45": "8JsAnCpTwaHSZVKMwh9oBTUMAsb1Gc3reoBLa31gKiYbUyquzZFZVrnfn6ekxJr6vCcoBcEVbFBqjWX8FA653aW",
  "key46": "3cvUfewaoHuhN84Y9d7jaXUzEfgAbr33Ly7AgdxQWNUMddSB4FqxP4N7FJRJNHzWamCxLT44vzFcLXGUhYafYuRj",
  "key47": "3ykdfEpSPVnV3YkpvXCxA4VxXViyZ9qcf26nhhYP6K3j1aC4fHavDr95ihVXuYAt5NQ3JvvYqg3DMD3tFXfN3rvr",
  "key48": "3PKeH42bCDEwYLbNsvnkFrf9i3hCHULDJarxHNw9BUXq3FL2fB6nLXXFoFYndrAGnatD6wxUvUDKLStBEJTyL5HE"
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
