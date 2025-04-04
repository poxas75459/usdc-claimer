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
    "zsiYSVrjFLhMVnE7W5Tfz9QgpBEhG46NwL7jjNVTCFLkVbqjd9Y4w4q68PooQoKXbvZZyMH7EojKLew6DB3cQHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PdAyTKK5KkgCK3rx7BZAWpB8BnzxfxpcnQskLWBWD5nVNqs7GpYVbdaNkVZX8nEwG8tDfETEw9p8Upi9ThZeG7g",
  "key1": "5xnB3XnAaCqsjHXXxZR7UaaNuh2xFpCf761k9yFuZyStrWSR1yWjeaXHFvNJuJoxsKR83gp8p5teiNzZGhYMLcPA",
  "key2": "2gg6S9s5aNdxaRkrBEymVgAGVWXXofZesibZ1NNM9ShYzmPRz4BF9tUNq63Yn6GvF6RqAUtHoUyzDNVmw8jQw5Nt",
  "key3": "5pkK4GFfiiuNAGh8H1vXNsqaTUd1uU8jJRPSUuKaPL3R8WA3KMwu5LKGorpTbbQ5gZUswbSAL2X8eNT3HC4VuptT",
  "key4": "3rWi3ijT7XfMqy68K6H98gAawne5pHC1yREC81hp2Z2xvG4QuuSL8FmzEauFHbgJqKbJKCnnMcqELs9e6G71KvyC",
  "key5": "4YPrtPskB5eYiMn8K7qXNWeGZyRdgKyVooC4VAmJYZiTsenKDuxUiAEenuGVAoZhwX1q9vH7iCwZ19GGEWaWR5SX",
  "key6": "N3E1gD7wGND1HGmJN63Pk2QefYFVtfuhpua6NFFSLAVcB9wyNqL9GbdvXqJtvQfEEJ96naRT6ZuKik6f892tCX5",
  "key7": "2okbBTmcsGQncZUp8fVCvbm2gkghxBHytbbwDivjJo4pMDxLugh2x7mjE6Wj4UdsLjB2VxhNS5yVw3MsVFtK74uW",
  "key8": "4sjRFbjKpvqVuWX3NyzW5C2aj1zPWDRGmHQ8qnBSnW44dC41uGQXr4W4oaNjVTFrke28rz7CUscdKLxgBa15Hh2M",
  "key9": "QSaM881xdax1MPiyN1Pd98FbiJVj6GKtuiFK1Wccai8W4wsKmXdhy1EFFjJenXN7aA7A1vkJE2JXbriouiigd7R",
  "key10": "3gCg4wQut1RZ1fyv8brMCf9wrGL6VdTQbTfsTjxVhG5XxfiukLPN3irHiyNsnRfDebXrQKhy7ZH43yEDHZvHhpN1",
  "key11": "AsNaA5CJhhaJXqyaFPN3yqJggBsLoMwz6mpveuko4AX2PL4u1ZmxQWZAA9UEjWdkhFynQWkMdtGwfpE9rijdBPe",
  "key12": "2VnbjQ1ab9eTifopeVYnQvmti3UFEDnrgZ44LdgwoyozYnng2hpwMH8NwN2KbFPYAZps18ba4hFWgCJyWPMuvi3g",
  "key13": "5HCYhvuBt72et4HZNyWNDiExau8cZPmRpZcFPQDtN62A9WxDRpbPyQugr8agsKXuanF6WeXz2wmNVDJtsdDwwRTu",
  "key14": "4NtCAe1cZ8gbFMtMJZbZebKVp43um3agbNYMHE23DFe6PsTbEaqabdbyuogKUQKSYNQTiaJZkaaGwSQYJmEvBFWT",
  "key15": "5PcuCY7cGhEnkTeUWygRizWct1vyyZa4oBpuVUea9tZR2Lb1Exqe4TB9S1otKqjtqK8or4XLNTeFnueatfHKgi6f",
  "key16": "2ZpRaUttG9bLsUb4cGWiZYTqxqThifQUtDKrANbavTq6sTYtq15kWww1u5FzQcEhiS1JZBJCU1ScchyWiKHkq4bx",
  "key17": "4gzXgiyCh5NTcsE6ST7JQhgbS5ySn5aCn8HoFzqqDgVeEghuBKDHXd7NGgg17S9cbQHUd2J87Vg1E8kNY3rb96nq",
  "key18": "2iJMUEKET7WAUrux12FAwCwAw21CKd3tyVY7yckd2RhqnbyA4yQQWwW1DyMSmPPg47UsaokqUmkHbw79JhLpoQST",
  "key19": "3g2LXc7Tdbewrc96Ks9qRve8Xm8aU1rgR9vmx8zjFCvsNAmMX9RfvyhkPYb3N1h8KGMCdBtsp4BKpMGwoWzxwXL3",
  "key20": "3gEXQhjuP6TUtLEWgEHYdxcmhnG8m1nGZJiZt1Nw8f1vKcgXuSY6ZpoXq1ukYpMoK9DLW7atRV5pBHaKhyzNysCd",
  "key21": "2sxJGkP4ri4u6tFgRbhTrrpeLeTWL7kwVDBufkyj4td9BgZbomyYN2pc2vmcMG1hJb2CnD5jgRRnRjEqoHrmve5Y",
  "key22": "288ZZgxbmFh2vQBVDVpnKmfWperPZW7ACUzcpdEgfV6k8Bh4m8AFxyDuQPGuU5YmXEHSkLavqVj7H1LJQPftS2Ss",
  "key23": "4ErzExo42w1p5TQe8DHDd39KoXyiQ4GqDQ9pZS8eW6mapr6iCCWtok8y7SUxTjzFbxh5AeKLkrJ1A5FAY5vySjww",
  "key24": "UU1GEFt5aQZac4Z2RYzPKr78taYzDVUa7aNxr5N9xLKRbSGUmTC3JKTsgoitdB6oknTkWLzFaNTjCmYTVn5q6tm",
  "key25": "3ZZJLdBzb7mU2LaffrJRsdCtRwUfx5cX6pctn1mFa3P5J1YjpGD3TdcLLe6T2cXXiZFbJh8xQWmyZi9NZiFhu97i",
  "key26": "2pwErdfX1dRqWcK1oVeWFibpdHR5p34VE4pmbezzfXvE5pHVmV3eG5yCp3YqUvZz5MTjPxVkV4C5xdZ2SjeyqtR",
  "key27": "5rM4azj11gKfNMJUjiTfZNsHgnssz5m8GSXzFb4tHud9bjmLqsmLpQ1BNjdZCmocuLvQTPKo715YwJ3a2Vp5TFuC",
  "key28": "4aFBHWEmpJe17h9SWoLphFVsUvfDXD3amMVCe4x6kfeQmFpgtj4aLeYfpdJp3cAf9nx45YjQsy8gFoYCnkSeRxXE",
  "key29": "R8ud7v3xoJvdia3VaczYiekgHjGXRvpCVFsYbVwEWfG7fRGNMGGyqEQRK21upDbEwADKen16FBjprmJ8x2k5p5F",
  "key30": "5Zzzv3yPLMtkmiZMDeWsmXrD1NG7NuFm5QqAm58fEXdaxG37fVrqURdSmkxRp4K3ikNM88ysiV3XrZMH1jtdXPGe",
  "key31": "48hwJySJT5vmdzdn8NyEfji2gAfxQtJzRrSJFLWF6fU11cvWCRUh4ru9TsjQYWGUfqDr83m68hPLw2vKWhQkcxHf",
  "key32": "3zze9wVmDSQNpnC82Hx8NWsy9gE71H58rLmidvZpKtxsEHWDUv6ExRLC54WrGRAGZtXM8XG812TDQHHx8N5f3w9F",
  "key33": "2Yscua6MSPYEQLmGzH7ppsVck9Pujm5izPz4z2XMzfYNNoU2MP3sAfdNHUUzeDHpMUhxoJHvzYifW4jMaSCWooWG",
  "key34": "5ceCD8vBWXSijHJVdaPkF85MoNrbDokaKCVwuuZ6u1A3rELBXWHM1NsgrZ71FD1ZaM4vFJcRCiMSUJpdaR2wkNJh",
  "key35": "3XEnXt48isscMMjQ4VYNJ6QF5Uxh4p8Luo3ppXSDi6wmnWfHq75H6mp5S1khEUjqHPkbuTm4XfUEiCBynpUGTiYJ",
  "key36": "2HmYHS52yB5ZRHkP4h4kawQArNYtXBVGfabuYp3uQW8jAwmscRygPUmVjWpfi3FzRUMEo6ctd54fKpANj9PYah3C",
  "key37": "37RVgUKBAjeMa3T7Thjh9ppMso6oBXMCAL4daomMWBpkgADoE7SELvLALV24bTCCX4a8yCT99x4JJhrXQtY31j6q",
  "key38": "42P6CQCB8HoSK8yYMq873iatjDDB96di57Soy12Gn4XoH6gnQabxbYJPrzftSfqQEYkLbjV7dh6fEZkgmzSHs5d7",
  "key39": "3UDJfX2nN5CS7mqRd7ehJBQe6HH1M85U6auLw5C5vz97qSroCcMLfHK8waV7FYMinddJGf4nRFLEbkfzZU1e2WDV",
  "key40": "34A6emyGjbwJL8iiCG9nkZdqFuXnvwVbdNUp1PFTzwRcHG3G8FUToMBmji3bDFtfSU7Pjb45hKW6LmdFKW7BqhsP",
  "key41": "54E3ACna2P1TmmTU3X5mLR4ST2kc4WUFdEppynayQCauYpKFzmYDNbJqaqJ3WmvYTXDuNJVsVPb5rCxuCzzhUhhZ"
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
