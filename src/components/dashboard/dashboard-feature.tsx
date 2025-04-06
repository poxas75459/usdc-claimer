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
    "2JSxJN2e4wvkbmMYczGtWySSSqYSj1aMVgcaYzfFVCP8c6ccmyj3fzuNEzPFrk6ZHbEn1ygbqkAwoKBt9jMan7cg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zYSGxHYdMThPQsgAcxVCuijipa5yp82ymBCVMcFPhbRThBHJnsp2zYDqSZe8WSdga1362dJjUhxXvm6LgyBEyi5",
  "key1": "2ZQpFg1c5sfNCnBCZvYmD451jbBkmtDN71BQ7piTLKWV4P2Js2XpZZihUXzrtrhcaiHj9rjknqfyHCjCa7cDPPjn",
  "key2": "2VrxqrKLHFZkCCUVWgD1iqXXVfCCwGFf734iGQ1USHSwHrwGtdjtuBejjyF3gb1oTXeEHguoXYKctDg6HAgW1voU",
  "key3": "4gzVUEeb2Tcj4UXEsR1XESAZYHJpTVSBLCRafKGysBgwnk3oDfR4eozmFymSLtdo8wkEDK9YzRrJZW5hw5Mtj41D",
  "key4": "3rMMhigczZQ8anR9wxZ3GjMBxXquFPxVF2jHaiE3KHWEATdVAK1MMvKA47YHJU5DP9dNFawx1JuavDbD6Nd7NJFh",
  "key5": "5W9JtcsMQUbHV1m3XqqDhGywk5W6WfRggXNFZgRMnpqmhKSx7UNdjR3hpxToXss4pEgNGADmXj9GYKkdt3hETBgs",
  "key6": "LAqwDDJvDM5RCPbUhC38a1aWBXfqaezEKdRuJ9Q2gZMm3sPX9ENQZrNxhcE7susgyYGB9SAr2qpTD4hyHDj4FkE",
  "key7": "4B9kYsmwyCoQpwWWcj8SkCtrVYRFSgdByEpRvr4a8VLuV4f6MmC2yVse5HhHoPAhzgDGnnCDq5FBmChYYKMZNoXb",
  "key8": "63Q445woEGB64W5KxbDFvCZvqdaJcdnFwuLC75Cgv73mbZ96QU8BHbCGobhQcVz9zxKQYgXMBUq6fQHy2kzVXJo7",
  "key9": "4mhxiftLwMmFdQVJTRZK2b5nAZvGVtuYovxDhJDhtXGbv4gRp1gTyCiSuDDRKjpoK46upoPLcGdoRJmWToLkCLaJ",
  "key10": "2ApNVZFV5FVznFj9yxNq4kFURPUQRZVtr7wVWrTmBWVJNFKvYn63Xs7ELBrR6Qng3uLFYWMHtEWepFUNpwpZsUET",
  "key11": "EV4YPUBDJMMSmavgAoP9AfEDFofANjowZdhKEJhvWdav1RFs7PfVtnfS63t3VP69jF96d6UB4Xrxavkuhna3uMF",
  "key12": "3WjQUbwcjT2icGpotT2MADT6eKnR6qpUhvYz4KxCTQbRc1bme8igdUkf8YharAPw5qyFZUVjTvTKkdm2th95eC6M",
  "key13": "2G81F4bYDyhrCUheHqF8Eg4DKAqKshfwAFPP9comNWgTBKYifnB2MYjVtQdbXYZzMy4DKUKgGyAAXSWC22jB8PZc",
  "key14": "sio7x5dVv7YaPL9h9BECJRiZb9qDUZsqRFziciSaA6j4SPvHYJ1PxMSdx5DmLBTyW6i5nx22gTAiFcTYrD8sb3Y",
  "key15": "pgbRLxCiB4pDbocuWRfgDkH6VvcmmUwv8ntMGkWX7ixbhzuk1hZA2C2FzMp3aA6QDyxCkDfRhsMXt8FXM3qpJyZ",
  "key16": "26iqfQ9hfsqitTQL7s5Vd64qNMjWP1ahM3zjRJwfHi9QbtNAfEKCpTddzRCQvrBE8U5TnuSj5Q5beWa2YYv6v6gh",
  "key17": "3p2rYrGqJdn5DWPYw8zgJjazCfkrWBZPJpLaJAYEa9NEwh5HzFtFavuhrDBBNQ5RwDYK9bmAoizsdiSNwEvkxtKU",
  "key18": "EfBJRemzvbJ3Gx997AtXv6uK5sukEQyQBChTnqNgyEct7WCG6yKqeNpDPAdmkwYNxdnzYhhwDrF6RQcJBzqUFZm",
  "key19": "2smyTXEks8oyNzJToRSZJHqEviLEnfXA3g9NQPRPqGPAGjNRcUSr3n4gpriQsY3gCYujoXytapGJ1cLC7BEeQQrP",
  "key20": "3t22iGUtVSWUootb1qFa3yzJ934iUYGvgUBbXzQ9uAU72ae33yL1c4uNfhyv4LZgXL65LCzhE2kuMNuq6DxgErVP",
  "key21": "5sSaMGMH3UyHzBecqeYGsnDC6XnSa2uemWcsGNPgzvs5VgzQca7g4Gm8EMYD7eu2PxTZhARo1FpEiN7Ytu5ajroS",
  "key22": "4Epf92yHFvATEbJGsNfsrD8Zyv1mh753kKtfKAGCqbGASXtq5CkU2sedBww9g2cLiEauzKrYaxZDX3HLW7Rs1RUC",
  "key23": "5Sa81BDwsbG4SjwXrnAGy7rEuo2ZTQ6Pp2nR1pWnKzzBTE42TkNzvyPxDimhgC6Zhf8u6mZMoL6rMVLJDhGBGHrc",
  "key24": "4r3V9BeABbnJsCU9SR5MuNwmBdHKjh6wsXLuX61rZo7YrGrvbzUjb6Zoa3ACV9u9V6A1Yn7H7rq8YEiWMhX6PUDy",
  "key25": "5VNsn8DvXn7RoyNuyyzhSYZA68RSto4zaBQqcF2qdSH6mEVTR2xdcVRnvqUGdPb4Fa46NvyznEQKXNX64ergAkNM",
  "key26": "cPBW7zCht8ZEg8BdfwaMewFVw1QJc8XEpiDaFSvJqTnneWKoTEDpNH8s7iAbTVPmVrJ66vVmQi3eBBUyMG8WfXn",
  "key27": "44jy5wTtEzQtHxgvgy8eJzZ68mmhw6uQhZxDGofjY89hvk6i8PDgbCMDZTMx54T3LWK3FZ4PE3fGN5fbAYT3vr4B",
  "key28": "3fW4wDG1SekKAi3sQKZ61B1fftG3kHnS8DzARbbYfH7MW6JsWWfsQ3Hki68dtCLiDu5dh3g96CG8bX8H6FnzhSCi",
  "key29": "41XrG2zi7fJ3cngc8bkMUtj89MJMAaWTKWa5Jqb9ho9ZWMvgSzCZswr2QEd6Kwuco76jeB6WjLebcmnBSdh7UdWP",
  "key30": "ikSHDQst1STkEcaRoS7xUdy9gF4CW3d4QncKTAMZUDPKzwofe2nZ7uKaJguLwVJKuKkCh6BinddAgCGvUDGBqWL",
  "key31": "4DkkzRTqaDaAXBuhth7VNBbMxdpdZuxLb9xWqPtdSn3FeBjrv6r4rKw4XRf7Qa2VTfeGcvb9H4Bo2Aqmynz2VG7",
  "key32": "5u7vF6guLGWEujUQcYzwvtW1pDGfiUKmjxhby5T49rhdWDRahPD7PJWuGanCq88XFKz7nhCizPuGUkzAd6APiYSt",
  "key33": "3o9zzLLBb85z3VSAdKzLYPHLt8478wUukEPa5tqaA3HUHGT7nZaQUS4Lsi67t2MwMMEJxUgaF2FRYMAJ5gDoFjbw",
  "key34": "461UWQkhVorzP9rqVpbqLfqkY5g4oXM79D7fiQTGAMRE45QCvD47v5xatNJGtwfcF3kpEnHQ2MAeJMYMDsErHHTe",
  "key35": "2WVVXvd2bcG6LxTS1CSgcVEH2RFyQXeWKmqSEBMppexs9Sh8eW2oP7pxBMUnGJsmw3Xm1eaEkSUrfmbNAuHcrh62",
  "key36": "4AaDq1W6dTy9jTDvHf5hwPivxfiJ1C4QMSDWTHcBYxV27YRWZuhH8psg1F6RwKye57EvkHHSaoyEKd7bGyxrG8mg",
  "key37": "5F5rp2q48qkW8rxqR9LcFv9zduFAGoDdneiBiswxhbq7FJz4cikrUFXTeAEGEJHEbY7KCkS1bn4LG7RfvUWR1KXe"
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
