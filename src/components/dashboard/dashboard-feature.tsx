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
    "5j7c8vRdky7aNgmws6xn99sC99WY3uNB2ZD8zGJjy1i69ZFAqbWLmL4go2XwnTGajLRduffvtdCvVu8DgpBoX2rA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dS5GEYDHm9em5Vu3gF3y5nBqcUjLcqhYs8CZAc3Hgch28kXCGeGyQaEmhiyzeBJ72jEJir1DKrUPkCQtcqFPSjK",
  "key1": "5DaJfVKzcbsoN4UUZNn2XDqMtyXThMsKvotzQEnq6awJKXCxLUp6Tff5shte5qT8FNH6YVG7JjVRTykxreHFs9xi",
  "key2": "4tCjknpuxDvwKU2s3EYQegqcUSkLm4G1gaYXyTbR152RoGbvUiHow8tZJp5RwkiFmHnWcWpcFYphjanNQfopPmD3",
  "key3": "2Yqrzwte1Nr93QUvnDscrfFodvQAjWzxK1EUwtXtDJKKNpPRV7hdzoJEEXeSrrrac8DTxdZkFho3fVBBBt82YZYc",
  "key4": "3nn6CLy3mEiSA58j6DfaWFWisnV5XRbYCVcLR9AEg9zMppuEUdqUip9ZWURMKJ6fSd1NXxt9rbgsBNh8Q8pqxpTE",
  "key5": "4hXhFkj3XiFbUgXAxBkNKdseLjFxMXxTQR4tkJ5cFnxnyePgKjY55GjxXVqyewKg4NwfBdvgHWg5yPbdqmGsv35",
  "key6": "5WKHSzmRWPoUVAV4D5Z1Dz88MYcmoowR6gtX2kNJY8EojebMMUgZ9k2dxR92CTD7gQS3XxycqidcdacTA5HHLFgY",
  "key7": "41bHRtEmvDNQwafBVURa9wJHY1oNvDNX3WGw3n1CGi7nqEhjsA577g9EAitiFsB9NKAjhA6C5RtjbE9hag7Uix75",
  "key8": "4zBxuU4RuTSEsrzfvsMVu87C1EM1B15QrFrpWV4awqXy2KjxNBDWVSGyWaspzesBFTsGmitdnFEz5jjkBrJtm7tA",
  "key9": "5iS34UayMMMBjcQz2P77xb46SRCF6T6WrHx7SqxGoSv1hZuZxEPvi5eMo26DWgyE28dPGcdDTF6Eajkikaew5jyn",
  "key10": "31a9cz1aNBpR6vASQ3kCLA1RcsJ2TBzRokY3JMvPLunTeEbAzp1eJGWedU3bGdE9C7FFepEQ63UfoWVMQbANTL5x",
  "key11": "BuCCsdR2mRfdNaEq2XUJ6VdVa6WBSPktMXFV3itnt37to68V7HqfTp9Euhcvn2h37tERJUtRGK7xmDgBPRBCorn",
  "key12": "4njUkwTvMERMMnHJpxWsBgYs9iH5vUCTvd9Vhbbk8ghexGC9oV2hQnQJuDnigL2yJJsA45HtGVSWGe28SjavFupr",
  "key13": "cQANHZEEXuhXqQuHRBSJkdN2cavf6XcDfW7JBuBHTaceifBR4oeVthm7rMhJUHKH4j95dyFmUQP6ZRdWpsSaDag",
  "key14": "NGbb2w24AqWPeVKbDtqvPrhfx3yy6c7WvrBbjy3im54dpS6pK8zkCVtLytwPUma5x1b9c2SEKfxhCSo1y9vrorb",
  "key15": "4dLxkejaHSHmCeMe3BCZXQMZgU7i7oQJHgGK6hNCZxNxeAY5ewYuj473nNwDFS9RpddFCNCkmdGDnb4BsiUfLayu",
  "key16": "PfwKp2nLkeVcNwygJy3CaNFSWT4my4EYnKNSYgjeNpMxRnPcPZt58g222t95QvX8Z9wSYhe8nDLdu2uDZWB2kce",
  "key17": "4EJoH67AcyCUojyPdTQHEhSakmAmbsYQBuZ64Bf6Cpmzf8vAcDmWGJJxwEmUyLo5fT9xGoFTWAkHanKw9BLPZY2m",
  "key18": "R9hxc9SZNJuq8yBxziiWhLoUNZKyGGsHHrgyLb47WXKBx3kqvstfE9v6pQRt3dazLu2BUVvFc2riGbD75GnN8LZ",
  "key19": "R1RJhjMCRLqDsewjRLNFY291jRiYWYpwU7KdYYvokKm94Fqzvwdn6bvuQRopQxt32oQ38rLHaixux2TYgFrNJi4",
  "key20": "A9hfMtbmT2W8tKN8ZmDpEwBAKiHCiXtUerPyBRHSE8Q5HvykUz4aBAXGCSTn4mgDRBy2wTgfYGnH9JpF14JoUfJ",
  "key21": "2tqPBxFGsXCuC1mKXMAJamw4XG3N999whZjDESRgGA5Ur3YA7oYKpq7zwRoK1PyMDQA4enCEMjSS4C7YCBqrAFP1",
  "key22": "3dZhcxJsxY3butv7Egkz6wd9DuWZWaiAAdruFo5D4pjM4a4gWMn2ibD96K4vCZQL9Ry8sdwGSt2eFQkzncDKzTSn",
  "key23": "EmDE8E8rm19zSxKF8B4YG3beE2hKUC5W5eEB5bbSBKGUtDwcYPSLRhYfHxy81dfou6rcxbCXqnLwGPdW79A4kRV",
  "key24": "2T7yFhxfDdtoEh5t5tK4nUC88Be8XZf8VwnixSWDFTZnLFvyGphw4ys2SD9TxVFDnggzrVLdGRjTivH3x7juSkUB",
  "key25": "2UySBVsBmRRKKwumjfNus9yHeQTzYB85hr3GRMFw4ATaJqC3YbuUxwkzHCuZpaNsbbpp3bHMDGb6jpkq5HJzofeZ",
  "key26": "2BcNiZ87yoHhrg7KKEsiWQ1vjhskVRTvZzoR47ZbcNJxb4c9Y1zwFE7QcdPWVugZTzQy7N49jaPYKH6igVjgQhH3",
  "key27": "MtWPBiiAPKXnjkd6DWdP7qRtuwmjTwmHgCJFB5QngBRqwuCcR3nkCC4o7ewGFyfNMa69PzJUzhoGtoS8PdQu24t",
  "key28": "3bdTfPCQmi1EYkHTEst3c4qBETD7Eze4JebSp3C46Lky64Rm3xujMRuTSZc9J5emnR6vPUcbicJKPs2txP122kCb",
  "key29": "24YfpHdz3pYNvZeCqP3dbMhNwhT25pN27qysimPtFyjLEyTsZGJx2fbzGVgDsJEFefKdRCczgPwCae5gQLNR716n",
  "key30": "52e9vNn4KJ749bSH8coeyC9bkx8R7PN9YsDQaEDVCUkrsnxhtyCcTHk5DBAYFNoFcnMFpETv78cbnRD6ksUbjgJk",
  "key31": "3eAJjtYAGG6QW48pApD6miXjAx7GMnGd9DJ4HfaYktcrpSJzJRXSX5ZMQt2qAeBc2iWhfuRxt2R8zcdLKczF2NS8",
  "key32": "2upwyKXGpcjymDJLvyDUmRA2met4SmYm1YxgfnoTRKiVgRNDkwCBixKjV5erTkW7q63xFLgnaYLkV5spZCKvhVCm",
  "key33": "3qg3ovUkfvGeWHRHGK5HapWz8VzN9gCgn8vxHed1PmM9ZTFqoS6cYf7RfMB2MXGQ3doHXWzZ8DL85eh5GV6j2hD9",
  "key34": "62yM3Nqtf6JhvU1cFQfcMSKWzNFEZGHgbjkA48HUxQEsMGCvgQjtJ6VhvSox5SoKcjzwtSY9ToHA4EdnxeNpwEDR"
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
