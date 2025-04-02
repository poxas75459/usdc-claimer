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
    "47SmLeo6XrzH5L2F1oHqRFZCxY8ozWfSxrUGX1R1Q1mouJQHpQW8WdkDTQfP3Pwpbb8ciW9Y3wGRYAA7uHcVdJDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ffCpxqiGnx3fPYjGYuXY4nban9iHyWZ6rqvJ6DG6ML7XqdZUd5H4ypSj8sNZVTRxW7W1YuL3oqriKRXvVy5qAJD",
  "key1": "3FnpXZYx1PqWtbWHXMzuW43J7biBom57x6S481bog1XkUa14S7JHQEEJnkwpB4PH2juZRDVKRD1MPRs6AksMp3mX",
  "key2": "4f8NYQyUseLJqZbrJmvAWco6mcd5mkvxNnudNXLxeGAz5MsPBpShpapBWxphtQXqtjPCLXsTp8TfHBLiZMDe1KZq",
  "key3": "2UFTy8tJUas956fh1S2N4Tq8kpqn5Z9unWzRaK9cZbdJZamdT4yQjqSNSmZo5ZmSMQwimG8iBPdUfY8q9A3XoEe1",
  "key4": "3wq2Lzp9gAeradGcaEuqNK3SGeeaZA1WrFWCFQ9Jx58hn7cL3KXz1WEquv8eoHBysAd8nqpCkQ5nbvGyAz66GzzA",
  "key5": "4QYev26co1t24MhHhXqxhTFifuEjVDbtj3N7BdZbuHvLCK12c4TLxjZkRbGNV3zJaDiMLnPZMKi8rpPSLBKgspVR",
  "key6": "4i7cJnDCZHeax24cm9dWfJMCSZN66QDxhDAX7X3U61Qk5cUERp7T9zpFYk5KsrdJcWHTVg4MQtSdUDSn8uidqmxd",
  "key7": "guQnzRreTuUT7XbM9EKz1AMZmp2uZHh494HFS694gq1pTQNN1nBmvEWHCWj99CW4L1NMECwP5gFGY4AqPyXRmwW",
  "key8": "4nMumfzDeoThmhnPJHJ1UqdxkfXshnQyn6ygLjs8s5b97qkQMPZ2MYkYTwT9d8H7kWUnYzHX9VmE31Zna1hF5LBU",
  "key9": "4xBn2FLCRMRikqpUbFCrBXZiRrnVBgUfjaGw6vMvqZWdPuZNQwUeZB8qU6CQwaqDoXSzdGjxtEhZnqGb3pun3jsu",
  "key10": "43gih9YntGqKe7Y8ztgc7ParzfK74i3rg9nwQ8VbY9QqoKz4zXLy3kQ27tUgj3SA7uLxm9TxSs1eosQBjWeqqt2Q",
  "key11": "36KTAHN3frtFz18MqXPvdNw535SF6SvcH51LudgsEN1Djuc4j5K7sfi2gymjbzLPxTRhf6RaPoFWmbwNbQ4azQtU",
  "key12": "5DQT8E4WMf7qimsAHbKjuLUbiBd5ok1dBkw7kCQFXKk2scTJVMNFBt6yNkY7sD6pMggHbcoAJxgatGWT69rjijmv",
  "key13": "3pJjqYAfhv4CAUMjj3wguHUtr1AY7TfWHXiENsGuFM4cxx38ke1U5At5nBA63mbKpVpgAsyX8btaPpnVsX9ZzM4v",
  "key14": "4kBWkVbEJbFEienwWxQn1uN2kYrymWLtSMGQrrtQMpm2CvR1wPDNM6hDRsqpMM4qeH2tTGQNiMqQKc5hy7PnWjrV",
  "key15": "3TXsqkYeUYU6FnjXtF91WjyNkbwFmeRRCZy898Fa7EgBLBBranZe4s7cFeTDoK1fzjwfMmcvmg9cLrTduakczgCC",
  "key16": "3SQ7B6s3y5VbqEEtiSew9AJ6jdVSf9siFLnMDsg4Ak6xSNHeZuG1e96Q2WwJM8N2YE3qcBK19yEpzCXBnGuk5yRK",
  "key17": "RLyp9ed5nM9VSGhNpT3YayGkrtss4tX7Vcyt8jRKGguutPF8YbhZF527j2mVGALgYLZFnjrhztFwEULWpYoePY3",
  "key18": "93wYGkDpNKwuzrwith2DfMPyXRGYXj47KkGEgAy4QcsaSGikNSm1ES6diTFQt6LM8D3Niie8NqVo9PPxhWjqcp3",
  "key19": "2GqdMuy18z4NF841xMZvKkBeELVZ3nNiibepsyemJWbSAiB48FEc1pffcbRgxt8J8hbE1Rp9iEHBUc5sBQkgbx4U",
  "key20": "3yGZjo7tMXioeaUsi9ocoX37RUtj2QTHEShYjiCxbXSPsCxHXFqtzB4oLMk8siFhmeLRVjBKd1dZ5oy22dbt9acq",
  "key21": "ueJ44y2ALDEHMi8MWRxraDFXN2EsBprEzwwjRHEbSUp6z1vnohV8Qj9tpVEx1WT4FGduFaQmXQCiwGVwRRx5eLB",
  "key22": "5pgGJXjhFPA3HLSYw7PURC5deNgVDpv6kw1ZbP4eg1yEHXuj5NhAQ4f8A9CKnsLM819vcN6q2PLbpxiXEq5pd6jH",
  "key23": "5YQQq5wmysqPMcvLttGuwFoa669Si6RWzSoWQT6qPPzQQpHoWhbrMBxx5QXEbymfJWAag4ShZErGXwDf2ffuXQxo",
  "key24": "4UGXXUwMLfptsuuGZBQCdCNsoopxveWmsKXvyBJQRusG61uUjmZRHtyk5K5dnsELHirp7q9imGaQFd8cVApYPZhU",
  "key25": "2XXoW4156PVdQaNoGzxTYiqw5UeFxrNhGf5B3z2xZq4ross8mhCmZUURuBKy5efesADtFJhvCP4d1siezfsdTqea",
  "key26": "23T11RSsAS43YpuujhKaWMTFZGPuCvykbMC5mJkVzgQeL4yefMZRFYpxSWenHHQM7jQKvJPtLZLiDrxB11tBhCbL",
  "key27": "o7W1rsMuwnoaDhDEFKPKC94UgpD2VSEbCbSsqW3eFiczrTXRS4wUDnpHSzS7Zke3ukS9G8vxhfJ6jXQhxwab9zr",
  "key28": "2Zzx1pkCbNhaN4dpvK2VdEYjyLLxiJp4kDvk9KULDX726fjKeRkruhQt8qoceEA3FaJRLWs7V2sgQvJ4T9iZLH8G"
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
