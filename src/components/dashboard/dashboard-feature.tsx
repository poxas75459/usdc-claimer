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
    "3guwzepNuwPJJxZx3uom4HaFZbaTJa57Wmz7jeK8A6cgBns8sMAiRe13Rwp4PkfgBdLivkmjp3f9twhnaEZZNwnp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YpvKNjrmqpqjCSDRjqLe8VvovowhFcGhyykpT9CbhbBLFSQ5yTJcBviLTzsXRvZktu5SWiSynC269GMBEe4PhcG",
  "key1": "5QGHtinK3aTonCW1wkgnvQd2V1gNJRZruwEzrHbr4CacY5rMeuvHXPTeWPPt9G7cXmsPNmtskBD2mC98LkK5cQx6",
  "key2": "2WsdHWJ8NtBBEa5YyWfwJe7cM4zW71vuwVSY4RaVo58SPPcmgrKq9wMeKNc2u2Eer3y6rPrjcQ4CMwiSTSSgAcEv",
  "key3": "3QaErDUNs3issbP2iZGVUX7WSvqKXQnhqJxKg4N8wfMUhT2xn3cW9JmBENBemnp4vYJQ7vHae1risqu7Bp4TMkfX",
  "key4": "Ynbh4eaxoyivVazxzP4u5tfmrcDMKuibLAs3jzpxJUvccsLuiTZvsvNCQVHndfGjhwQV7uo1hHw7uwZvQbZQxU8",
  "key5": "tFQgA9t6j8GHiFnDDjHXuvm6vMUtw5ihkRET41Q4uNMciZZHcgERWiWpifmPWNKgKKjJJaGoSNcWddeSMiuuNAH",
  "key6": "4MBurHAWmK89FzFVp8WZvv7qM11angY6fuvmPGD5smfKY2CvnMQtKnVA27p6uYjoENEk7ggsCmoHTogs4Q1zXoUk",
  "key7": "4mdBPx8Cj99UKwvMxGBosGHkg1vsXNV8Fk1HFkLGgqvn2N7mtbpESAqqWB77nBmjyG8x14Sja7mH339UALicBjKN",
  "key8": "4UZZR1VaoEkdzhj6arQX8BwjCXKuc6Z8dCWHKQD3a4y1qqry3uQZmUkPqPPks7nhogoYkiL6mi7gthicHRs5Vbo2",
  "key9": "26gmubKQQrTQZgyBYQcv4yUJ2uJX2kRJ8ee1FXuxo3tMHQRBDD5U4MRRmqWjPHSEUJqg1FDdnkZsHkVAx6kzoz5q",
  "key10": "4DuiBe2JaF7aBw1SHF8berjNu9ySGMyyHfRLb5KxbsUGU3gEVdZ2Z7MMjPYPc9U49tMPFxaCCyi2ktpnkosM5s1z",
  "key11": "3JEksZMzdQcMKA6o1ewFNiGz6rTvuJqQGm1RQpErfrTEj2o2VqLt5fbD9JrsKA14SYukUMErcKYER3Dt9N5kX6qA",
  "key12": "yijPVR6ajXDzHJgJijYGQf3ELEj2426CvFhjMpazjGFAzmvesvwXugRsMmcM7MZsr4urHjHvRm7FFjVgrQTmDAj",
  "key13": "3eWDn926MM7BR2yV2LmKRVe8sGivUNoJe4kLJ6V5mHnjFuoS6N4Q76a8JBUBYcHQc4zYpijHsv83R9E9eWLKhzGx",
  "key14": "61tUcjLZRUTU493MtDArAEgjWPNF8hcjQStr7nrgfMTQWHVGq7mhcRCHFmC5eUbxyd3rXu6xQ9tHsxPZ7WTtvJ6V",
  "key15": "3Z6rFrQeEEu5iQvK1E5V9bEAZqn4jMA5WCu7eRYybBT8d973ef5aC8DcjTDBioQwGo9TddNNuPs1dib8arD44whs",
  "key16": "RPXrRd2MR5RYRLyKjWj8bwn7J8vyaBvXCbhhiHxkiS5dL8nVmWgMriqqGASC9hDmjDN5a9UBFXogQwNHxTgFEPs",
  "key17": "5iXF98pCzhj2yzGpJ2a4tRCfRXdywBDyxce5UJNseBpyVSEDWA9bB11iWwzYZSfzMhfhKjxXAYedipMju6prhgjT",
  "key18": "4S16hYhrBcgDJLEZFP7uX4ztuZm1hLfu4VAg7wKJuRS7qVjf8bYBWp1nqYDRvbDPyApHUzCs7h4zsn7E36yBPbF5",
  "key19": "WaAwdXBc4yLrqEGFFKW1ARHuAVGEjn5iiS1wDrRdFmhaga9Qp4cPxjhK2eashBUAyBrxWuR4ERBiopxN3Zfrsxw",
  "key20": "523Q2gSSA4FA89LQ32szab1ha75QspEowGyxFpRVhbV1U6dxQH6xhFKCtueXPAaqieTr8DuVvrqgAt8kewgffTL8",
  "key21": "2C7Zusm2Hs4pJT7UsNqpmv4DHq9bVAjbWufBSnptjLeFSzJ6iXKAgX7LeGZrSXrAbjccK9qPqRmAVFJaN38R1ox9",
  "key22": "poSFG49mLfzNCahYybwXzokrwe8w22pggLdDJfx4Qua7Yq2UewVRyMG4FasrfFuStiSPDhg4yptN7f6GarZQrHK",
  "key23": "65nw5hNDmDERQgNY7mEyd3KK6MfMPnyuQVjjnA9fQqaauzdoXxeFjUeTJbJdmTpoDeQrLsjrhc9v67wwVt5xvUvf",
  "key24": "3Pkha9LZUhVqoVxhhMHLgFz1nwFnWefvyDw1bi4n4QmbFQdSWbAUkb2RjsMuZCqdHuMXH3TNXBn3LipDDtdS4u3V",
  "key25": "39y6PVhAPFQwXBvFVYgvuGqjz6vztSeSDSr5pUjb4F27m1mGj2ix3sLs376DQzvjXhtjYm8e5K58hBeSSJg7JcdA",
  "key26": "4DDVEUVUohG8f5XcLvJ5qqBscvu4KikfnVFLcctnt8SkogDTk6ECqHBSpBXEDS28maP3hy18Tp9qxe9LYdhBqWtk",
  "key27": "2MEYetYZQpVKXc2RFdfwsKx6MsvqXyPXFZBXkpmfqCsrbJxUbKZEnuTquyCKEFmtN2rK5VNnWy9g3TddxeJNWoBG",
  "key28": "GizWWxkLHGgMRHPeHh8SeiRwxAvn8UZc3h4JEf9MK7nM5uAgufasvVWBaNcUwE3GedYmksVTmAar6BY38VpkYh8",
  "key29": "5UajpeM27Bys6RLTxSbG3hZpp7ujzjLMAroYaJAmPK9otoZJsLMSQxyyJnYorUE7amnbr697tPkV1VeAKqGZ7stn",
  "key30": "BYuDbe6Sw7JuDJSxJwTiY41i2fmcXEFt7zSZFDAWb5j6cxpEwkStoYbiKVCumbGAPFyKwPxFRJXDdJoQYNK1zQD",
  "key31": "2F2LtQSp7hbP2m9d19o6Q2hNooZhQLj4X5YisjzQ8rVQxP3RX5DerMncBmwtkWYdvpzhnxUcvr1cdWTL7puDgM5n",
  "key32": "5F6uXgvo11nskCnk3eXbzUmYp9U2NTVQwX5xM5WfiPu3UfYXRCVNGNTT91gdSkWhmgdc26cssH9wJQhnFbV84pMB"
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
