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
    "3tafnqA4fRVhPz3LwWe7BuL7UoxhSzTNFtYG6b19MSfC577h4VRHUQk3ELDh7REjJhdt95JTnhTdJhAZ8XijK7kj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NqPuYRKtjWiMDgYxTamUcsQfdQXwZoB3AkL1ehTdh24X9rW4giaSrV1vAqde4Ap172ij54SXXiA2hXdhV6PcjLj",
  "key1": "5KmwTUPb9HdjqhrqHuctZHt66fBfaSSEstoRAcVD7auqofMp6DbFKopYZEJhf4qmugHjPBsk8dZpvqvxpgmDsKFo",
  "key2": "4ZYSkF6cJBBip8fqfjjqxC11J6XrnXUeGMKALcGM9p3x2y53wdqYPwHi8BGW35ZAMiF2jx89HDhNYhVcUt7xnecM",
  "key3": "3E4KYtDJEdsTfSChpVRgFqw9DVBmdEV2qopXmLwagiqRZBiszeJ9QKuq6K62BR1a2pP8wTyjuycH4rEHeSfE3C9R",
  "key4": "zoZPC5USSNcPmQ6XuZ3gqEuuPk8dx577LuCqQ1zD6JrdwtjzvbLmjXFXZSQP7xWH2s8vaEPfhKmvzZaMvtiD2EW",
  "key5": "vi7WwnFgvoLTusquyAeWscUhe7tcZkKc26Dde5E2njSpoDNuqpm3o5k2fdw3a8DNK2DEFcxG2iSoJrLgXDmpR4R",
  "key6": "6YFkY1fudUtuxJHTX4KaQJavTpeERVdkqwQd3E6T5LrEY8Fi1t1tsVgPrZqDdm3QKGwQpbr4rKeibujYTpEqyiJ",
  "key7": "4s9J2WUhH1v9RRfhTY1bRTTpviit5XK4R8TB12JsqghB8154XD2hEx4qJwV79jQ7su6bVN4E9forzzeQFeidFzWw",
  "key8": "4Y533D8YxjhUG7GUZDGkhRAze3XQF5s47famhaVJU2UqsPbxrKEfoBFjgNUt5AN76atYqiYJjXCRcwZSoHooyWAP",
  "key9": "3FEHpMGyyJdy5sU2znJpnENXsjrXJ9G5N18MnYxm1F1oNS9hbEUizacbcUrUmhAzNDoH4SWiPP8GxY6qE6V4rgyB",
  "key10": "4NNC2aHfRUBuhv32Tug2XorDmmnyFo5WhCS8GSoUv1P4BevaLh7gJpBmD7c5b9bc7SeCxi3MHodYDJydxGCFYGsk",
  "key11": "2dT8WSXvi2NNfMo6uEuhxJ7WNYXZF84kG5bqQoBf88CyGwchdXRFWZFKALhA3R24uAfJQr7efu44jDw9s839uNAc",
  "key12": "65FEHeGtVRaufiNsVQMLZoP2qjr4KBWmy1igQPXm56VH2Cn8UYENWYDMLjtpXX3a7Gg5NN8htqLgvSCi1uEd74mR",
  "key13": "zu49qjNp5CgBmcpoauyrG17q7dnDc6uERfrSG1EiQ9jNd2UczEbYAGc29wsuzMFuy8AxsPa69drsP3MuM59XUeK",
  "key14": "4pNUUjgr3PJJ4DhAKC3xxNhgWRLZ9tuXEjDf5A6yhZ9rhFdairv7tcjL7zBkGxKQJX5RMp81SbSGBh5JomTyc49s",
  "key15": "5RLcmY92zuXefcFvxKsyiw1XNwzcECPmpbFevwZx94nVYR6AJqjs7k63rTX596xVKHbJwCtN7tBVGj9YPpaDMCn",
  "key16": "4rVuNKLke9k6jRDRwKMrWtufZCSxoCQYx61xaCiE7cLv22Y7Yya4VKk67MvoQoXv2kC5MV3bw9tvWWZBYVTDtbmT",
  "key17": "3ivqKcZwPnaK2vm2ZjFyAmtQbA6Xea7ZCZkewhNz8MmqzFxNn6ZaQ9HFpzA8yqNC3rcTCjqxme9K6c6XBzFBu4Ex",
  "key18": "3QEhgAwQjbg17GxbZY3G1MmRv8PC9UPHdaza9i1DyZHV6UMfUo56qHfxiZPcLV5idMoY2eie1MNzQDPyxLU1p1ye",
  "key19": "3iFY83xXGFYcKbP48txiDWRFqiHyGYEQkzpkuDMGdmMHjtmG3BGdwNQpcmngtUz48LReCz3bYmS6gmj343NNNzSh",
  "key20": "2NgyjrmNsmwjjDy81xj2FFruuggE2vg1gjSm3qDZ8tNkXKtjuGYqKaWC7VB1MP6tSVnJa69C4T6RW1WsenTt5Sxo",
  "key21": "3oWsYffAPkayi8WB5HFxqJneDpGJU57fATcSWJWNgLapUV6LLpdGcT8jCbKrc5iiU2BchEFz5cZN5iZ2UvxJhny4",
  "key22": "5AMTb1xrsKxkJs5yGx7RmVyQiDHoVoaS56pCZmocq3JxXhgdtFjeDhyFtuJt8de7QRGcHfXvr9QcXm6g8GMhavTE",
  "key23": "4dJxnxNQvqZzgXZnVZEQsc2fn7gHqDJL62abqCKUTv4D2onwv4DQapAfeJZGXkeM7dNrJk2Ha516yU5mSfhHYmrS",
  "key24": "3ucEyMxoo5PCgan8hSjtbiSg297LPzQbJHGsaghAe42RTnabSTEDUDUYkZXMF2C5pMMJCNq5c96NmpQ3wGasUbEG",
  "key25": "3Ej8cBWQ298MNeeaPb8c2hLdir47qPtPmkXb48CCHGXHYjrdcZFcoiSL7hcseyjRXE7u5XRcNa43p1rNiVV9P5nu",
  "key26": "5X4Hebh859XVhd4Bnmr1z6Z7LFDxUnPQChDzLKKPDJfF14Zxbur8qDX2Ka9PhZBJoZvEevAcWNWETxPfom2N9CQh",
  "key27": "5HgNMF2fBzMgrArkz3WPUfekhfkawFgq2CuK2fto4R1ej8hifGU8PgDVTVZrZtpc3jtzY5fX6LY1JQ81HUMmWktD",
  "key28": "xbiY5aQcPf8kA4SaMV37aafpRYFojQhJaGsr6Q6NYsG6pi97K8dSQ4pWd6QwLBrS9kfsqZYK3ksgDt8XVDfmFiV",
  "key29": "2wT1Y8X8pmjYGceMf1bfxwZ9Nf4Ve7Jmm2eBwoUrYmocA5iDrigThaTkemcfCuJNStGGCU3cHPynYukhzBoSjYnH",
  "key30": "4FZhgZVxg1MCWYhHPvF5GSGE4qgRjmKfCnWkUyCHARKcTwLiCqRrNhXAWRtp8z2xMgiRHAc8Ehs2UbCLVjv9a4o5",
  "key31": "4mXxgAWmgTD4djHoNK8Jq7tjzSSdBvknLEWUmT4TYFNqFdyizy4hdv1ifYYCWpzud1H2K9qE1fLVDyr2it4KFRxP",
  "key32": "TCUVSASLoTmowzB14aiJthhm9QSjNLdG2FRhrWPLRLtVAfLapsf3Kz4kXudWsQk37M81kcW3rXzugGKdUk18u1d",
  "key33": "2w2S9qo7uJxp7tx33GzLc1me2MyMJzeDyeKrSwLeNKjHAs5AMjR3iZRKCvuViiYn1detxHvpSMVgv4JUBBRvm6UE",
  "key34": "2Ch8rxFEX2qGSnX5KXJ3QCSFctcM5WJGAYvPkEyBeuZze1yNdej1ea8cx7EgFwV6uEjJ7ZVwVcG86uTKYRG16HuC",
  "key35": "5CZpXmVySfBjbR2HtY7gpYyeXnMYPNPfk2xUJmvVhmd6yc2vTjqwi9MFwP1L3johzairajG1U44B2o3UL1AFquP9",
  "key36": "2MDMBG2RsncvtayD82PfDRqvqDSQuzJBqPee5cpm9LcT7a5Pu6QjaSyByofev82bMKiiYs2j81NaqYpPJYrk4YsP",
  "key37": "4jnT6UFGuKNBiqCJHzrVdd7xo4ZgXrNhMimjoKgAUo7BQChhdNZ8NKMjqPZCdwajPS1ZU2RMPoh2JgznZsnfastF",
  "key38": "3csPWGENZzJpminxRD6X1gbirZXQVuq3xwgGXz8XBXMdDSqNCQBBPVFhZ1Ug25WGBYxSMtTGdmLTD8XAesdY6g7V",
  "key39": "4NzmRbNUJGDAvDCsRs6dkW1wMbJUKgz21K6gne9iYTWxDNEihWQAoaBX3uppuVuWPDAQHwzSvw4uaDznW2tSCjzw"
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
