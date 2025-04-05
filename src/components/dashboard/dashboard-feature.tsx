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
    "5yiGGowd5rGyqFKVe81sBiMPTBSWJARpN2oSdjRA9UbVRp3iwSRPw7ZMNAUzNsTD75PMmAetnYJuHYJS1jxLWPkk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D6q34Lp1ffsPZC8eehQHEKc1YLQvbN9fBrNiFof2tpn5bhnUgcNeLnXWQ8YwPuZNHDwoRnojH4kb4tXUVTkyWPc",
  "key1": "4Zfx76Q3UBSn6tKFCynqNQJB3YRrLuirmGtRqjvdozcca2KuFjMRRsPW6KQxmveJ5Kbug5yquWEppPkzL6F1u2Lf",
  "key2": "4ZQyS7691BSCNVv1vfVAekDJ9kpGh76BZCaNNWREiJKwHSNy673WF4aVCAXvmERQDrNqYiaF5thRRXs9Y9LKxh6e",
  "key3": "e4G8HfFZKvGbjwcRS5ALhx6ZLYBdhQtLGx7rGANFka4beKtp8KjDAXcDyaDiYHVPsYnmHi4bge8TgAR1qBKNJZL",
  "key4": "42PYBEAX1Ygw4LxxupgYgHy4xkBHVLSrBwTGoo9f9x6ws9sPJDL9TLvfBP14SKBVE45x2q8ptmxUGGLDT36zeZLs",
  "key5": "4nV7pkSiugFLD4SLvG5oV6Wxg9WBWenjk97giGN5nEMu99qb1k1wnL7hiJTXiY7s6wDcJbg82SWy3jga1xeHhND2",
  "key6": "25rS3YLnVTJEGd7VWSjNvhgC9SwD1ZTR99FJ7XBJDS3zMsToMXpCrTfURiakgK7au9DUNPozQbo7Pt81e91VV8nG",
  "key7": "eZvikzE9Dbq4KwP373eZkdmLnFLxvGUgJVD4o44V3oxTVXj1v5BLPGrVmcmihhHRXfq7YCVu3wx2LdtMyeo1pxy",
  "key8": "64zee4pdsyqEqPFERNu4NDJhgotv7Xkge9sTmnjMA1329wEohzmnjiSpgxiApKJsb5pKpYpWmhmSUhsh4X2bEUkM",
  "key9": "3RYU9oCfvUhYA5SNbrAihZvFLFCnEJFEp4HPohwQsaoJAiQZSQPYNUXTmzpVLE5ZYHfUzt8qYTN7cH9zVmKXqyon",
  "key10": "3BunniScyqCkM1uKVnL7ZnpmAM5Kx23mdr1uXPxGXhs93pXUT9ofGTUYkVAZzrBfnpyiCU3WRwvimfrC4tUuNsSd",
  "key11": "5e4gJLhwT3BDh53ksJPYnLFX4hJWz7NjGDmQyMP3gtU9qbD6QERAAAA25sVwYmbWjt7mHCCaoWn2gVKeDB2RCTu6",
  "key12": "27v1V64ut4csrEL16WZaQCfeZgg2nUdWg1aMiMQsJ6BEYnzjXbN6JXc9BLdi9VMxQAz7nGVUFoM9GMfwKbcU1VEH",
  "key13": "2i3R6oKLm8MJmQFpSsuHAcC7LN75qwXKX5Kk5H7nmnx5FwNrFqYmWU3ego1HATBreQksDwAVCwh4MQjiNMqSg2JU",
  "key14": "4dSM8dWyr8ReWBGnwKAZpnq4CUanhDwQHQqyQ2wx6dED539ScYEkgxEBcu2QJDYkzzeBXws2oDnuVfxHaNZGaKg9",
  "key15": "5w6siXXHccJCmxEqpvTLL4AJEeiAUWwFqX5EuhDR1tG9sKmB8Zd3YtDtmdUVUjYtBhBZnCN9uQSPusrDyW98EiE4",
  "key16": "G1XnwHRAyBt9wcyUiSYinbposU9bYmJb3KQDfHKnCfH19PmXoxvHC5gHH58YpEZoyrpdxU5gWd3SGiENk7WGxRS",
  "key17": "679i94xvcRE4rmSKCASf5xmjzvpk7HAvRWpx7eihdvj8zm5jQD1SXUGCG6pbyJv1faJAFvmRbC7tZS1t1yMP8rQw",
  "key18": "QS5VkMsnct4bjZMw31BGgmgLLCU22o266hK8kQZ6pWUmaHsRe6NeAPgwVUwHyCRSYtwwXY9rhUeRkhXian7wDyU",
  "key19": "5vEycQqzbWNAHqfngDNL57W9hFNborT29N6D1AgNvEhGtGJVurJDgZ9p5bTZs8T2jaTVqRSefoyb6qYyTZ1UGx7L",
  "key20": "285ZKPhcLpgWsFCnvVZzuFP4cDmkbSm5XGyLHsALEcrHvkdiYeGZipaTK2pjNNNmbDosmkFjBeAF4SP5f4ToMx7X",
  "key21": "YoQpGv5Dq4XoWN4JL5XANnb9qfXGaD92LCyn46GQH7m9AoFKbWudJYZV4EbK1XkAs92e4hw1Js5g2tHcvkh1PhZ",
  "key22": "5dSWC6VFXinxPCcAw4bfBhcazu9hk1iDH7SdxkwLjLNrjpZVRh6ttFkkq2KnhbyZbrKHvZ3qhs9QxAu7y4PjZMU9",
  "key23": "5u6YS6PkamKuryWcGyBARJvcMiTwGfhDiKNnsGJ6X4d2rsTJCv9yL5H3XTXNYqiALGK1Tong32vRqUZAViAJLvFm",
  "key24": "5wtUusmPijNwL6VpHGnPuewTGFTXaAYAfhv3XqYA6LpP6X5ubbSFa9WdM5SsWr9aVjtzaGinRjEhYBox48d4gJ1D",
  "key25": "2gV4VvgPasAscS22Pm1Hk9ui9MNh3GHFX6zX9camsqZ5Be4V4oz95GmNcwAzU7RNnHdM5PTW4HQQi31HT2Pfb5Dm",
  "key26": "4nq5WLqD1TKteyjX95hmXRGtcLLYi1WenBcdNj1enDmGjJ6nrWeMjWh28pD1Gf7kor1eXxaCBnM7TWzNwFdWLSYW",
  "key27": "3fAEnMcha4cE7SiET5ejre1tf8PPas6enofSowJ2q3YEncsyt65SHjRrAgxLYxt9TP8iLhVFzSBUJW3QX9ydMCEp",
  "key28": "5bxswsTf3w5xjoALf8jr29QXisVqHQTbhAFG3CbmDDQ3Tod7fVZdCgr1VzS1Whjjts6dWJisqWKS3kAx7jJkX9kg",
  "key29": "27ZArKAkGB6ff3y94MqX3pxB2gZgbuYY1rYJiS7NwQhW3QMxhKWKQNWfnWwDahTPQ4mzQLUaGxaShn6AjNuQNPh8",
  "key30": "qzqv6d9cFvN4HhYCPwR2PSQpjnTLCAvmzHf8nbU5eynMxG6C6HsumvEe6zozkGGqmGFiAsfyRhfYQH7UsWxxk68",
  "key31": "2yu2FWFK939bsTuhSkxuNYxPZuKAokczpY1RAAtkG5siD8xRpqPYHHYZKrHUmatRANfAT6T6NZAczNn7Ubj6WMUE"
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
