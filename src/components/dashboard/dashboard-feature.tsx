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
    "5NBj17o1kaYAzXPGpYPTJutfPfdJjRVCajFNRmjkMh2sH572jsTtVw8CpMtqFg6Dn3W2cgmnUdb6M78qbnxiV9hk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bdUmY1RsSGhPXQC2o7w1HAAjeJGdyCtNR2CjSAW7R1pHZdUyLVCYvMikXmaj7Jkk6fFYozEMManSZteAHZx1b7Q",
  "key1": "53iivtH2381HZytho7SBhE2vfV7intxYiLxnjrjES7GhzjbhyLhAjBN1nw8d3MMFHxZNsfxTezc92NpLJRLBJqDU",
  "key2": "62GinZPDt7XSbQC7K27L9e536TBjYh2t6AjzqFEBWtNrLiFPr6NFwUWRmmEr9PxR5CT5CAXyC5BwbnPGn2mcVPpv",
  "key3": "5meaYeWiEXsXTnVQ8sbiUV8cCYharSQGiRZNpTMjKHhyCBya77xzCMvnYwJNVrcueLSsqvu577fsmFpNCtS6ogSj",
  "key4": "5SynDTVhgHEhUoH4ovEkKbcScRhcPjWUXowu3e1K8mtzq5vweGCiPkhifAGjpY71LJKvFJ5dZaXKQt8NfZ4eRm9G",
  "key5": "U7qAN19VHhSaAfycmWP8d14nLfivSmxABzp8ypJpN2XcFiNRHFF1qJ6M7N67mZvAchHJBsHEtkDrAH33EPo1vJv",
  "key6": "ZmKoaCSJqqZE4NXbGYNU7Bw1kBeSEa1j9Z9VdNnehyTp5qkDpo1xcNRS28dfMuM8MBKNKKxzzGkhxSjzejsm1md",
  "key7": "3zRaFNaMvZZ74CrzxBN7ibYSjYtv5BRE2tiTXED2joffEnKBmgYEmBs9waFCztjceJi1w9tcEinp4EpVcicTqe7Z",
  "key8": "T4ZmGczvpyyd21oHPhoDUjtPHb9Gp938NBxeL9FYdoBaUCDnK1PHWDkgko3YtucM6142GWySUVWWkjPJQ7LkYzM",
  "key9": "3aTub7pkamZ1nyth5xWcwnro9oDCL2JLdrfzA2Rz1stoveypfUia8E6h4sz3AsnpEbKMEw8yPZY3xQhDmB68DaBU",
  "key10": "4HwaiBx53LoiJ1SWCNeNpXX4BkcFJjXyeejTn1UserMCpvBoJ9bc3dZAFrU4cj7eeXnzeFnREQ1Eq9zzd1wMcfzk",
  "key11": "5WR9LaGExQ9mH5CyYobj2kMdAEFC4KSzGCSsSUsLh2uyAqxcP761dLLZFmWV85R4a33r4ES5wCRJDzZCayudVUCD",
  "key12": "o5aiFvuZUWwjSLHKwSNWchh15bnHZ8iW4Ny9KaYKKL2L5dCDZMgCUXhZ8LVTnCEvs6LoqKnAumwzp5nqbXZgPex",
  "key13": "4dRKbBoaXdZSxzUxt9VNc6j9qF3nJ2UwqX1VXki6mYknWfe1qKhu72amoWvbaLBWMGWYBcNe11ZnSSB2avT2yt2i",
  "key14": "B2Bf5npEx3ZvrPqXwBuJ8UWxH9bL24vbGJJtt5THZgAxUkJFYrnxu6545V1CpQMW7moFHKSNFkjzgfZ6QCtyk1K",
  "key15": "5BmAZ2rotUzEnZnbdHD6oSCAVPT9Eo6TxubvH5b1cMAT4Q1MpLL3GMyeRYZV9CQhYfgi6JMsJcvw6V94VCWTy8ap",
  "key16": "4Y7anSjNrGPP89d1gYBqxecxaQqmw6d12GksktJTsXTLLG2QSwUoD2j7UJM2gqjL5zGHRF1MFb1K7kgPYNPeEiue",
  "key17": "2mK4YxYATuythfCPDJ6GULvgrph2mRUxbp2k8cYZ1vDXAM4dLPSe9fiw7G4yfQPVnvkDyTbF66M8QU6oQbpUxWB5",
  "key18": "5c1LdgnL43tV9bNydeHc24GWoyY19V1tQiV9SxKBWQGrTKZmSLzvWEygt8j6ymTfibLvBZBjTzVXfHyLqnBK3mCb",
  "key19": "55TAhqPhBPuK1dHSHAhie2ytdZxF8jGdyXwkHJ5oDJpRAWzbXubd2SZRKSVceWhMSp8nyuW8EEgWwLKpPEwzVvnD",
  "key20": "2ujTLCmM6PL1BLMMh59eE9NZeSVhTpX4QtFo9Hx2dbDMn7zRf5Su1Tv63QuarTFvhHPYKGruU7T4FQgzBA2QjUSF",
  "key21": "URuSdkkTDsjmWfEHQxWz3qQ9xp94Z4NCiRhvxP1otmyk2BthzZJoFU3ERAEzK4kh3qX44874jVjxYaHUzbvCwdW",
  "key22": "2qcepZBBYujghHkX4rC71UoUgCGCY1AqPJiR47JEFe6bQcxzK2tTRLUHdqwGpbsBdo7ETWp6JgMH6VhufAUB3bYc",
  "key23": "57mxdM2cPTCNXMQqgWD5XJaHVw6LjF87uRmpLMQj6DP6imtPCmwAKGFD7cPUWr4CxGe3jeyp2KXLimsWRMdeUdnY",
  "key24": "5UvdTTsLCrbN48KvBq6AuG7GdfthWSPvQAgit76dviTTaBdwAYrCYmNojz1tezYJ2KCKFD69mwkCFvHRVsYzE16z",
  "key25": "56QaJ3pbAxHdmDKgdPDpxVTpRE2MBA2SF3C7uyVrzzGCgosjzsVEjtme8yp4p8QUEi7TEmq1V28hgggDMmMDCdHq",
  "key26": "5wYfcdKUrcNG4ULuvsFW4MvtKhaxTz6xrxYAjX5mcx5oJCZd2iSQDJyWZ5tvV9p2XjEYZAaQhN7P7G9NqBFwGEgV",
  "key27": "38h5YpCc8sga868Umq84PrDVAJZ1oRPzR5LyzPiFqsPfTD9kZTjANAjKG1V4vDrwAMWP9iH8BG89JhBNwM7b4MQB",
  "key28": "4gkK9YnErzYVgksjoXjASDR3t2FFLsVNJ2mtpobMPBY37wEUfeXHzf8Txo1acKNJ9QrEUoXb7dhNxR7G9h5WKNm3",
  "key29": "MhhkPJkbC6PqKns9dCFR9D9Jq7ujcodTtE5CrHsBXSAsKCBpTeuKXF34ZxjJS95274fPjjJh4puqvSeMNvsxVUE",
  "key30": "5GdY17WNjihPm3M8YTUTN8nztymGxNTnXNSLWNCw9gxA2FbqPRXkpujg7HiqGBnN5MkeBqWnHoaRUR2DYLXNKdtY",
  "key31": "3TYSEeYysksDEabYUNTyNm7GKoaen4PiRYtXjUMREyEzg9gUfuQw7kiqW2kKRUiRvXYwfM21qHfkKPJNwHzsY8rt",
  "key32": "4fGDeQVZGUMP6BZeB73x1hKsfAUgwfsmDEUfB7vKNCMQZ1W2gmix9Zjxah44huucyzYBJQHZw94zCXdnBcrNc7qH",
  "key33": "5Y5XJAUygxsWq7irwgxshKrG3UpkXYEQPtYtu47NTbrzmSnoJdiHrUbLTth9BkjY8CndNQrUgGSAsRgj4cZwnMHo",
  "key34": "Em61bEDW5SzkS4ogDCPX13QtPf9x6G4hAJxAdRitr5r52mjZ12ytpc7jKoeqYNyttMxZQDfqeM6XemUT9f1xsvj",
  "key35": "31BoFRNJYx17yjd8geZ12bvnPDFnzekyRkWfwjyriJxgGtech533PEki22jh8ZUcTDF85TE2WS3BKny1XghENZmC",
  "key36": "3JKxRpGPhJXc6Na76TASJD5FCkFnb1CSWAhbM6iqfTVzg1kEzeToaQVDLHPBEqCegDWKR13nxXhQXXmVm4tDnJDt",
  "key37": "31Cx9nHRnMhUdFb9Yy9io8oGAG1xpYCsm74XgDWXFjuZ3CY1rb9fL4RiadCyHZoUiE2XaKbKPLSBBFngEYBiMCjE",
  "key38": "5bE3gQkFxqzrEkqdF4k6vKLUPgoH37YGC9PuJNxmanMfdkg9hvSsLuvqH8JZJB2aMorESJqD71JqMBqALedKiMDi",
  "key39": "2YCn53hapyjSGjkb4Vd4PZ7ohAQoDKuRjuDKcZDmadcZuFfp3krrtW8GfxenZtSBRcUCpTXztgz2vNXmh6vHTsh1",
  "key40": "3y4fqWdkcNz9cR8xca4FEqbUYoMovT8nRMSE7giiYdwunE9yaP8DECv77BDyNCSoHFU2g5V92ZWFy9XCZjQDCB1m",
  "key41": "HD7fXToJ34qCdsZyS7vfjrwLT6Z9BZ27i9L7FSXfLekua1QoHVrGiDZCZnjvYLogwrj5PoXEeJwzy5ADWAJStht",
  "key42": "3VVGxPyuucagR6JKGM79mxBBUvDA4qFMFikx6FE7zKmcRQzkZD1Q8uq12GeH6APskijLqkW9MhUaEsgcLpHCsxBi",
  "key43": "mm674dXnnA1r4dnBt2XwcTC1g8zEHmfVbfiPj3VmqyMkGDrJQ4rkvtt1TLX3ZEXPS7WVT1okMET1kcjmxWDWPAn",
  "key44": "5ioRDK7bQ3fFrHcMCgEjXw1r5pTYGw7qPo2SrThnWUhYzXLTZ5bJw6rQmCdx5hmy48wzxxnmpAJZWMT5RzvhBgYd"
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
