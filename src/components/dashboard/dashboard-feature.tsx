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
    "455htxe13DdvCK6eb7tvhc41os2A6tontWpGKRaJ8Atzx1tE8rSdHifUYpogMytzgmEYMjwuJ2ER5fe7GK6C5oxp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wp3cME74Re42JaNfg2Et5ZyAi7hYg2LrXGYwTh3sEaQ6UzEfpJEcBiQiJ4YvV2ze39qbRGCSqJNsfEKrsYYT9R1",
  "key1": "46z8qrnBmUa7ujta19bdjJS9nykVuUfZdbSvzupbowcUkQLp5b6i5trMfr3gpDoBTEmSxTQSE8SJ4wrDtSUaJw9f",
  "key2": "4AsLKgL7u3sTKM69MhBcXmWipxhCFWmaRJy9KrT1AEPCx62A1mY76WRUzWDq2C5KJpjiSWA3G5Ed2JN4roTfdLMy",
  "key3": "2Dkutv8GkoJQFGdQN5jPMqoGCWzdU1EPGpBN5NUM8z67WowmHrxkMvqQecdyk4RufBdfhNfSeVr9bhQDgcu9aep9",
  "key4": "4qfgQXnrQepwRwQAiv2LAUF1LCrAuAv7CndBy4ScsezhxrizbA6vuUyEeUsJJrxH6Pw8ayzg1SJ3nRrDHiUZteLn",
  "key5": "5b8iZZ96p59GWRDDQUJSGy6kuyqa2Uk2QhS83mU5rkW2KeWKahTbrofQouF56DbyEEJwXwCeYVr5NcA6Uu36ZVFu",
  "key6": "3U2Gvo8wkt93PKBHwcNyTi74oSgsqmq51WrJcUH3i5xEenciVBGXuKjDvCx3kTX7L1MjV5xM7kZAmscTSkk9fGsv",
  "key7": "4TFEHo5ELw71H9GzSyczDfcKQMEvWrSE3gBJeYigdy9RGe7Ge3SZcLRBCMAmpADHuyRn6JWQfq4QJFhqzDcrHBUR",
  "key8": "631aeZDYKpLzhqp5w92MMJ4N1RKnZQc5cPxM4HUT51yT3NKoWhgdy1h84tevfCFrLduM8gnSPuRbsAQvVNipFip7",
  "key9": "4QfT7FdoFTFtLSi1Pgh6YbAunVeWzhcK6GByTMb3QUtiohkA8hyB53EFzdHN5q46VhPZMEUKUz1XGkHwFTGF86PV",
  "key10": "5zVivVKA6aCBdg9cuQPnu2iC4kEB6jkANXm5DRCffV8VTBJ6dg4GtRTpzZd1SHoPu9wWfDmZpxhmqLGir9FmVHpn",
  "key11": "3YXA367rFCNwhmDvF2pdrwRWBatqPXdA8tAGxgdTewNYevousBcm2krmXGhP4U3aUqksZ2iEfSfx5xKXDpZaJRUq",
  "key12": "4NyYVzjGPTTvRdM39yTn17XNiaM55J3uBS5eBUVrtbGoyXo8nNxZf2Nmie3ZmUXzwR3bDHBHrfdHzJTD4jZqCPQb",
  "key13": "398YztXLwNnK9JdBz9LRc78bChLkpr7MSnXLUYkQMwcuK3vqPFaJb9zyN4qrF3gPjP95eja8qW2XUVwu6Tr9PTz8",
  "key14": "3XQuCQHGsaycuxQsaCSchy9BfmAQZQffHHLqRoyGoPx6Y3hJZRNyi1r8KUjyX1vaE2WD6ek6Ew7PK9KcnUTJLd6F",
  "key15": "2ZYdepnMhVQrMs2TEMKC45vxxeb8iSAiuqJ9YFGro4ghjuPnpzYZbNoNzSpBKtF23dXdYC4LK4yKjWYS2R8uHtFe",
  "key16": "29WF2AxAugg8oc3ixafJAyNeFymGC8ofHvGDVLDy3qkFCM9ca4YazpSpRjGUvPfbXt28BXhPZrPDWZVyxwoBwPFr",
  "key17": "38RLoG4mxUAdd5Nyr9xzz47uEyJK4qoHtFV2hENPwLcL1e8jfWBxCvt6ebuQKA6wBBSmvSbx6Q6wzetACHknDzQ8",
  "key18": "5vGUUFiaCEyN1M36WkRP7MyATWEqcPovT6R9Lb4g3ZvjiJQ2Jy5rPTnpdAC4nRQ1WoPsL9M7MezbZ9uA2VGTXoAZ",
  "key19": "3QdFjzrbSubSZGfn6FZATkcYSBMkoLnWXhCPiTqWGYTsfpJTU5mScjjLkY8tH4Rg4XXtJEE9PCNokuoHgJY8S4G7",
  "key20": "58fTN4sqbcTcXaBpUUZSfd98ZT2giYtZSahb69QX3DUUdnmDUwRbFQm7dXHFA4jGcnKh2VZeagkktnFtVU7wr8mj",
  "key21": "2wo86yonN98quPJzCNJzVrbXzy4U3fugEWFkAn38Sysx1LgxTcEdugSdEdgqiqQPixVZXdNsie5WoXvpMJynT3oC",
  "key22": "2JqJNEMwupE6eFfCaSzyQu3MzMC8VwB7GN3RQiAQJvdimDdk36aBGgBW7Zwge5i3vMBBHCjK7RcUVSSsYGfoWJ67",
  "key23": "2ENrhiZkzNHbwxgL8MAnQTZmsjQteTbKDc5djLavC6zXDG5TpPLEC2xtRc1NyEzmdFPjSTjvk2UKSXDaUYpyhyTo",
  "key24": "rx5GjvrUzF7FyVnz9foWKdSgcUEsWRe8kc7tjeoD6yEK4UAzdJSsdb9qWwzoim4bVPeZMvjo4SEAXh6vcPhgegr",
  "key25": "RemvbB8DGbtZFNvPoHzmCcoougG14JCawdT5Vo13WiCKf9nLmnFAafs867vaj5jarFu3uFD4ZAw54hBCrgugjQX",
  "key26": "3JaMUrUtSNUGhoZrBCMfxR5oTJT3gp5g6kCmbUnZ9jtScyapHMf7G9c3NJKnnv4TsGAey3XtuMDacDN7wtvK6Fs1",
  "key27": "QPA2kT1cAVietJjY5q5DE9e11eVbPYcL4f6qshmQ895KKtsb8Piw5n2P9eshCyPNtSPtmFm9Fu4rbzYkM7XuFfg",
  "key28": "2tHZjWxVEEQ7AAZ4rueG7PNKq8yhYWPgqt9EbicgrfH61C4u75LUWvYn3cANZM4g6vsyx8iFXmD4qoJs7rwNAvcd",
  "key29": "2M4EyrHdKGxmX3tuc9hyK5wVyq3kP1U5dPu2128UWuShgEvMEAVjAgqHwUBLkocCEMasfVfUyCcxUo56CAjnq3cE",
  "key30": "4aTvG8ANFsQwc7JMxSRZbfs3SVaKLTq94vz4veimiZffCpYX8kZCoJBRpUBP1JJZojYjmHyTLyRaXSGjUmSqpjbM",
  "key31": "3gc8GtripaqBX9vLqvwwis5byPZTsvxzit9VBtw2e13GjmPrvghyDc1h5sFCzg2s67xPqJZEcsCxafENjsaeDdwr",
  "key32": "2Xhjbs4YV7GGAFTUrx9jGuUraVsK1nPRKV4AKN17WD6fPArXFhhwQaGxVFuRRt1zxtCab4skANiRzQmfAzwKqM64",
  "key33": "USTS3JkUDwwHj9TaCYkfk9pPTKZXaibP5pKKtbQwqggKDB6XdC1pAsWmFyZNnqkJ7aBVYCJDi3hZLrHFRZ6yLJr",
  "key34": "41KkT43YWcVLVBcrEJ3FKJNVXck2oG5m2QF9bnwitQHX76vbsgNmAHXGNW69brodmkEf8FQaLerHWhPTDZfToKm1",
  "key35": "YWuXx1jGQbbUCwmpPTTmswAS7eTDVKViztb9zxEoAHVDhnKEoa9FEdctKdXz4cuPm9p4T9NkWyJodfEQ6Esg6Cw"
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
