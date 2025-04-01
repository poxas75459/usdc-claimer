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
    "5E39L2fJeDhKMTusW6CV896A75F3D2v9BkMccK6JjfHeSgsnqZtpWyUiaUFnhsMZD7oBMBZax5sQxgfrHM6AGfHB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5imSmFSgxPqLrMEyUNtvo1UbUV5CwaSN3FarHQxH3j1pHuhMHVLiqsGYSVEGa2zh8Qhh8kv48zsKq2xp7ZUq1VF3",
  "key1": "irgVS5mvhcKCG4BkkJUKaNSS4j2TcEQ5VJinS8HSzCPtmb1wChMswGARRvVwWAV8eFLXVfSkxsRyEGtNCWpzgJF",
  "key2": "4FeuLSEXVci8Lbdm8VdSyLcxQ4AJHCD1NXLUkSTbJ6XqorACeKPhe6AvZL7T4A3d4F7pXojzwD9LtFoPpYvyUaDn",
  "key3": "gNPdajNaMVeJGNLCasLkJ52ZKL5KW6oy76wosqEayHuQPi6ww89SW9Kd3hmkvGv6RzTyWRt68u4NjRKZdetzYVz",
  "key4": "3XLoRMDX2Btm9MsB8345qoqGmVyfTnU1oCH53vHj6AWNPME2LFEx8c58qxDfTtWnvDRQdgqLYCrPxq27uMqKYmxT",
  "key5": "31ZHY3PpzeQz21uyDMz1MUNk7EAZF7bgzpqTvT8juuorGrLHgKsyT5pjr7asnNmTimziwETD3jcuGtBQoFsd2v8e",
  "key6": "5TxdizantvZu61tJaoJhBRyDENEmUN8kUg2xD93fUhFUAtmBNvJ4RsSCwmzP4w8fPbZ6xCUd7P2XGgjq92sAR272",
  "key7": "25UaivBvpD2F2JoeqxZr8ekm5U6wJf9q6XbuEdcaMUxBnfcajH8kZWmftGs7WEkm1jgrdvghHXo3u7jWkFYJQZEP",
  "key8": "DCRBAiYSV75MuP9J4PKxbq1x3BZjRdHjkX8v4qQGB8nyERVRLcYVXibPrrwY7rwqyT4mdqKiomyQSbWwNV11UpM",
  "key9": "2ZiLV1m3ZGGF4mJqwghx2TpKrUEYnHP4X6hrPmEFP7rh6J8CcALmahcwCbnSXCk5qJr4PKozmRTcW349tL6fFz4j",
  "key10": "339RjsmMXgs5jHgQSC3uhD5CU4k9KPeFpf8pjmYJSbTrCHkgczAixaMPeAQkxARvM9yAk8CWsjn3ysTKD7Wrfmbi",
  "key11": "63GEEZMNkCiCy4opCwA8VUbFZ8hvKQq6moo2jMyfc9PWbYYKZu6vm4iiFct6TQZaFSHENjAQQcQUu9SmUTXPRy1W",
  "key12": "4BtpWRJt1L6DpJ1G8oW4ab8b8eSe2y57pSxayrFNszWPbfYnFC6kNzZFc3wjAhmNuAtQy76tTF5fxrmrTcfBzsYD",
  "key13": "6DrfZ2EVLpKjharwXtqvMhPUQoHgCDzS4jLVf8VYiRKZVLw6P7r6SLxHNnc5Sj44UF7A6G338B7VhTERwicgexX",
  "key14": "2c8tYZmykbNQ45TAJWTYzYdwS3fEJzbcm1mq1f3RizEV9ayULrKh5sHHJY2TudyZrbdhrwS6k3nWy4wXHfWgYt3u",
  "key15": "2NA5CVas7mFfSTpeqGJJLMcyZipkW2iWtLZBZHLYx5kKjVjEA3yb8GNKS1b1Xx1XAEw4nELpE1p5uLCLcSRv3d39",
  "key16": "3kpvYS2RT2PHLFvdd5ex1xzuU3KMaQLVDX7eAF2mwPJDmpyrNBuXNxjnHQZi4vnmsAnA9KGeqEd7q2dWARwmsT5V",
  "key17": "AJyEwN1UVzk7h1kfUjE8yC8qV6MMqDVcFtfNKrGb8rzxzAPMeLeTwEYK8qjS2K23FbhmcAjssbRn8cHhbyKmqaG",
  "key18": "2gWKmFEaDUTdb9HkLz1HmJW8q1EYcNcUkn1u7RXPusuZMBBXgUokp9yPrnNANdoNaEyqdQRALFzZJPrxdpmLsYTi",
  "key19": "2VduBpcJsfRByeDpeaTpFYRY2AWKPcc5U9psPFEGF3U1YnCoK4a6brKyXnofAy2PS1Udcs8vPjQ4U7KLkTaL1oCV",
  "key20": "3pw5wsYZpyhXKkM9gzVpR8YXDWKpDTuqRwyKkHVYyrrFjTTkagLrGscPcYhyVyBRv9cqxcSHBqvtycKX2wH3PZ8i",
  "key21": "5AsYgmnd5V9atkd1BcgsXsRJhkm379gqAorMTuBSruUZjgcMBY6dDJCY7J2DL145fA21EQTopiYxfcyibiXKhMAB",
  "key22": "2LqKXZ4d2wfd41kNzFBsBwHQHFdmzRN5UXHTYg9y3vG667xWnUHiQwM5DhUGDbJ243BBfofVwkSNHrG2owowbQhe",
  "key23": "4fMK7VUfjqMLbGkGjgBo6h3avAzFd55Wh2Ab212LssgvCaLgpRPdJ6Y1eFWGS96Vujwmz7M93VyCQEfYwRoTrMzP",
  "key24": "42UBxbjU69rFqBAibmZ9bwcR2c49QK69iDYKaNrUFjL7uNai2pWtVmroAGrSyrgnmzPXv4XemWEDTRAiTs9TbCED",
  "key25": "4Q5ZQ47Y5bvpdDxx16Q4bhXXLeR4LrrQiLdzxv5gMaFsaKQ5MwjhZGyjTBatDeBkuQp5HSA5KhvJSEpTvCtbD9Ph",
  "key26": "65fRoJERtFPx4ijwFwGJGdASpr5DzyFgPSdxBqmmcZSwQ1E7SugcGH4yr7Hi74fSddS27YEqr7J2bMxB9pTMgP6i",
  "key27": "26yAEVRKdXiQpqiewFamJteqz4hcFLkXi2TugaJcKbfF6wLhgSF6zX2QSXdUUDUNWi5fSdq5Swp6pyf3R5PATfs5",
  "key28": "QcRqGbz63ZfBA4tJMRdJ4yeshmrrtZhMDLFNHLwy3emMmwrNBYZZAGuhNUrJskDiqk3PDaR5tQRHqiViNtLEZ2m",
  "key29": "4Jpo8w9as8rQfgAHPRLpgP1frSSYkUDRUgSHAhs7jLayoM2TKgc36uadtLQj1UCTAWiC3Q4E1RGjNuQtQvPrjsUz",
  "key30": "66vnULGFc3y3hyXFPvTkK9YvmK2N1uYUEJEMhCm2Mf7ZxfCHdHw3kmciW1VeDGgofzUfTiiuknzCRpqYhH8XXbx",
  "key31": "5zAf6FD95cwtC78RKzpLfyHx7CLtMN9iqNsY697Y3He2h1kyh9QujQdFbYiYTpLtcSyPtJKoYfMQmFukUVbxqrNR",
  "key32": "3SVVbkZF1gKy21TRNbjkLrLg4vV31djiJbbkuWipz2oyPpsvzHzkD5pVNVHKhhMVhEEYbQmRWzXZFe5hYR1bSMQP",
  "key33": "NrLLjVgAm6xz2SNsxv1q6WJhGPSgNC7pmDJuhTU62dAVfsQbYU3BB5gThDHe6Rpd1UEcn6JPJfZbgX5vmm9Ntbf",
  "key34": "3eeyRJP43be6RYMUAU8MSn3cgb8iKCPupG44UKF6p8ysC4s8rzMQYfWrdTidnrp7k5fsts6MfCQH7pqNiqKVC3Ew",
  "key35": "5qtbtcigYDXNSFsi2nMem7eJmugbxMZG4bZw2LBJTof6s1kDSMjEwBTZYiEvVVpa3tiNnZyJ4dgF5wC5nHEMW78v",
  "key36": "QH2rZTaE511DxRvhoisP6CQTBKsPddiSPiqQssxZPrgMt8kirMeEJJxYLv7aYpcdGphkcXKgxzuD8tymtmZHnL8",
  "key37": "2d4mpthiQG2rSeLQLoR3zkTpN7D6UZoWTfYWJcp42Q5jXK3voLgivgSe5oH19AjZDN3NEgmGyftB16HRcuX85Qc3",
  "key38": "iu8c16rZFCSLBw47oSG4GeAr7bB6ZA1NqxPt5fJqTzXvfE4MKsBgnVKfvwZuWYpGtSJ6dEydRAfsVFLbRsW7ugm"
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
