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
    "3sc9zUncmo5pffZE7USLtWtqApjP42Mc75nByjebB8Stfb2t2b5CjrjfDbnjygwuQ36bT24EiRetoEKTaEDTvUvu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KsA9RxvaxrYT1fKoXw9eV3aGwRgmYrsc8fE9rh3EEGCJmpiNwChbeMU534pfbtoddqMmCPmAyUGMBiYaFt3ebW",
  "key1": "5qWsThGpbae6y7GD8866neVr3BzbvTXHMQMyK49XuwYcajvztzW6tfGxc7RtUvX3281N5Z1CsAeM9MBFmVrAJYz",
  "key2": "StjtBN3Pk95VH8Zw9M1BDRGGV9cZeLyUeuavXpetDihgi5cfVPXHCF3zwdm7TUwtHCBPZXoc1xz51edm9nS2EAJ",
  "key3": "53A9vihpWNTzpMcU2udziEjtHDLyxkbYicLeTf55gFFoyXvbavygm8njAEEJgVzvU8G2FSDnnjNA1GmrRoxW1TzM",
  "key4": "5iVXuvJGDQn6bTcH1KHjumSRoJ7dNU433FARYMHqx1VtCUCSQGBi3xsVTkcx1jHJdojxcU57u5D73NRrVtLYsGKb",
  "key5": "2LbKjmxWBbu9vcLuYywLHpzQwXyeH6obQXQ884BjmZk7nsyFYU4N79wZBCvW7zfaky5JhDzF4NffHX5uxNAffLnm",
  "key6": "2kScNeLCiYQd2BSfFihRx4LT43KkAFyqtfnN5w39BGukvnP4QKsQD3yq9FRu83RfroJWYfQMk9JVd3uRpgsqM1Cx",
  "key7": "2RdSwN7aezAJwKY33ddVc31AaaBdBaANZxrk8c4CZxoPrxUkMWEXD3es7creHStLF1pcHkiCjX4iwz7aFL93WBGA",
  "key8": "5vetgDVbPJ81byPDftwQyUBiN6QYULWkmiKYNP6zMkJZRtRrM9WsvQc6efWMGQ3diqdQMYcUQamGwL4Gzo3371fp",
  "key9": "5jSnW4iEGFqh7BKywuVLqWiQrn7aHbDkXFNrh8vsrfa7TrKKHnAViuZFja49prbRk8HpvasRkasuCV3f742Vzd1C",
  "key10": "4EDaoAQS52HrbjxRQ6guVh8V2q4ZmpN9h5qHjfCioM8a7GA3oQsMgHohUPa1p21B2cHQG96AvLgZV4d4UjJ1GY9o",
  "key11": "2dGPixauKXmwAZWLSdRR3g4tPmGnUyRS5GZNZgZuYewAbNudqsmijyfqnbi6dDSpbN8D6VdKBARDd9R8xe3ZRtgP",
  "key12": "3PbW4AKq2y1EqmoyETjNoyQnCd3ptLRA5ZpBTbU1fW1o83onAHhNd1pzjq5Ksq8Ne82kToot9zmuesjKJFvXjn4t",
  "key13": "64q98fj3cF45LtDTcj5eMAsgwLZMFtje52RG19pEx48iQLdMnW42GtSv5DmBrPDKnAJgn5K2szhb2nTvfgdtRdHi",
  "key14": "5N7P6Fgw2LeQ85sQyMLioBb4ZRL1gWEiqdqA8x72nMBpTTsUQWpJ74uegdZVPixRPa4QqKGTQVcr8zyNVFLVciaJ",
  "key15": "2h8CsW8H45VAqaVDDzo1yW5ReMbvT4etTbi72gnM6wkBZH6GT8uMdLyXBTVXnmK1dKbguVAfxxAdLAfYQaPKcoYt",
  "key16": "rWozLTHCEnHkimftZ54oDpqwuySQ4gbk764b182KbyAtCJfPCMXeuogRuAX39F4WPrqqoBzAVkYmSZs4AVYiJ86",
  "key17": "2ASByAVw1cyd6PEhxoiCV5rsJ26wogzakZyzQkaNtUXfHsmEc86izuXkwbzXh6xvMMznsfqRsmDvA3K4e8wnsFVw",
  "key18": "5b498brEpJ7MwYpUrYBigyqnAuMhgyHDHHK63mZ7CDw2CjUcwcSYyJPLBjDpMhuPPqnbhB3eNdLygfZBEf5vpsp5",
  "key19": "4qc9UzxntCrj8JU9tQUA6qUgfHcKMHbbBQsvQjc4C8mRcPjYjAbamG9D5q9bTKfCRWD8PxQQ7rEWVsAUMhcJjBq7",
  "key20": "2qztHHwDAdtHJnds4tNBJsmpcefKVwdR6tCp8BeGkkvEog4hw5HL7kVjDibQQ3QzYZTBaEo1ko1f6T7gephzmo4g",
  "key21": "2nCqTkR896jgR2ydiaKWa7NAWGBjuS69PHWSNDWddvPrneG8LNk38jGKkF7PbRhQhpUB81P3TovYfoiTqL1EumAG",
  "key22": "3u1265xFv7oYPweVgPJ8b8rv2gZBqVMFSemVDrsiE8yzbHPaJc4vNewqGoTrMmmUy8hWd5QZgvT5Q7vf6xvZiex9",
  "key23": "4jckxpmFAP7778cs4wKdEuwmurQBjGZDQgMk8r5pqkSjdVf4No3rc2aSo886PtCQxHmu7TxsBC6GrBzS6SAS7Zme",
  "key24": "s2TYhtqC5nGsi9Ln7ju4kuQ6bGacDPaBojZHsQxGhVwYg8J2bQ7iw8opk9wkG2rYSbYX5qBC1NaSb5P7kt34Jxx",
  "key25": "4v8dSNVF2MxRposwtYxCoYQUs4xcUSDPRP4g5VbhfMHMBG9xqjW4Q53pdzB4jjdVePj84uVEhUZouonvM7JhL86A",
  "key26": "4h7qYShDWVdU6Ty9bqUCRqVKux6hBWDe1tJh95xSEyqsduFtX47qrxCTtRXkMWsEC44CkGwLMra6XbVavAck6bub",
  "key27": "2Cn3RogAy2bUPnwZGe1ubpFu4DryRxcUspgqRz6LkmwZDLWrCVPrFLKiaMYfuyT1xCbjo8hVJ5syrjGDwtQmkbBi",
  "key28": "638smy7tne3vow2SzPv1zBaYCPbb4UZ5ijQhiGQcwCg2DrsKsyqmPvaRqJM3fvn5cjNFgVVEyPdAkjRZbdUhjX2E",
  "key29": "ZMYTqPZs5VeLYTmsYjndJj9TeY7ySZBXiCsEHx6KPMMB3sGTt8BYXEFReBt6W9xo1Cb6e6Udh5WcwdJrRkttczw",
  "key30": "g7iWSdbKtDaQ8o2Y9NMzTwpA3pXe3vGU7aVQddJQTTCGp7tTXaXXkJetBAAFKqYGd9tcWUQXR5eKCH7dvzPgDnG",
  "key31": "38y4ymSxeBBzbHtdJwdNdkbfZtj5xsjJcgSWyDB5mtRAh6MsaZRBoPFgjLn1gxsEbXJwJgyJmuS8P16h68AG2sVY",
  "key32": "4ekHx1aEa46TJGD1LSFDfHM6q11PnZcNBnJ9weSKj35qJE4fK1A6EJPBrDnVF7ePJ46jb1LmhGPzJ9zTXZZ6zcrR",
  "key33": "4NNtTuEurJEG43rAq9KJ8Wm6Ch7WhuTNY58NMEvXRgUrFw7SX9SeS63SEqUwzFNsAFti22UTU7KRzWGGZb2umoni",
  "key34": "5bo1pCjz1NxGBWRSkmY5hZuJkqcL2NDc8VtYZeC5dWGesCKdChkti9MKAVRRafkPfZKqFpU7CNwT762ku23ncXqk",
  "key35": "2GFVrUWdaAjDZ8nX8Lfc7jDhnAzS1hWfvDW7LTifNbXjZCwzXEi1J2qrQ9aRn2o6smyaUhw2dyHQZ4pRLmp3iLsJ",
  "key36": "2P9wrEi1j9WQx581c9Qg4Hrksnm431Sfvp4MbBV4wKxA7fdCjbn7qQmfZqVRZLHfAih12tfWPtYCfEuQKbNUo57s",
  "key37": "2XYs8fM91epM6yHwEuyW98XWMmuPKgXhxZkbLBS4inM81pqRtBmY4wnQv1cePq7cZZeWnJiRJHSLKH79v2x6pLGe",
  "key38": "61hsb1qSHLqp9M5uggQGF1vpjKvPV9DKPAskkkfhHcEN62Dwq1krDYDbq6tqgz2VserKA2VkKaCML4bDYyMcPhx5",
  "key39": "3uFXG3ixuDJkwpq9u9U8JFdMGYLADhkX2PqYB7s4SExWpSQpNoYDc21vkG8MVDcqyEce8F4bynALJG1LhhKsJqMD",
  "key40": "5fNg6tvtjRjNjX9EYe37qMnSyH2jrhvXZ3bQ24qJaDim7hyiC3RDHZMAWGgWtzeEGWDqz82Git58HG63p6sx3gXU",
  "key41": "5dKN4hjJqxfAxJ4By8mssxQa6Rn2Zi5JwhRWM9FkEQzkWNC3A1DgP9FSX3RCiu4kudgHWdbgRt1kENZDriRqSRew"
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
