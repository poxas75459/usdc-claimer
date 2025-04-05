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
    "4PJUnZzro1JXpgWuy2uccSGoJu1yyerp4NUZ6mMNSY2duR5gqTQnMfKhnpJYhwSyFYJzwEtm5YV9FpNCiNzqJb6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Np5vKqgbRe7DhErFS7Yy2X7EqycK5mcCUDv8ogU53VVsYhKRHFJ9sdefM6WUAGjAH8HRrHgNwgBJp7LcTw4b5Ac",
  "key1": "2ZUcNfnGWJu8U6BFZNoVTixSgQ45wKRgid1TaaxdUUYZYJzik9PjRouiVRWXq1KiWSQgbued7HipJg5uK9zKGLQD",
  "key2": "4bwCB26Kx7nwkcGws6xRjTNkLyarTCgGX2NkMrqwnxEbUgKhPR8ErFE8YCzrvSSJMJBE2gBM85s4ZqZFFpVcCjBt",
  "key3": "5aKsm7p5obc2Jss3VrTAacmjRMD4XUZN4Hd1pLRVThMnkHAFGTongsaS3Eo1zBkGoyeKCpgAsLLyWVpMFGxekArc",
  "key4": "2DshiV72jyvnTchNTHpVNaa7Xm7dDtNxAUrELK8zJzghHWVadfTuZ6EyJ9XMqdJtXX8PDDoh4pnC9kd4NM7AxABR",
  "key5": "5CczKg7QWBmKHHYPsLd7GjpLYSe1ZvCK1zu3bmte78tvMwaVSRhj3EGt77RN3fR5ZANLZJkVZc9NRr1YAYEPD4gb",
  "key6": "4S2XFpztYFU6azEq5GPmygHBNtsuwCFnPjmcCVFSDJXe2wEAEdDVQpNei3ciTgMkU2owSv4UEYY2FcpGkuLjqDwD",
  "key7": "damqDDBNRBiP8t6Cufo2eWNdF8EVYaqg1vhZjU2h5UHzx18myH3sx34HZR6wZWEe5VTZCDZab9MUc1fDAVgaRmK",
  "key8": "2vMSMTcv5iXmnZniRzawNoxcLDnSM5fsxLN5t8fVVQrSj74hhhDJTXu7htJe7vkAsdkAQeaYkn5SVLDynYU1vRZF",
  "key9": "5WiThoa4rkE7BEjddowk6ourVW5oTR1FD2DoZmgqQZXWvo9HcEC8MW1fcvUxD7RyaCFHfdpG64QXUZhEMHx5P4Rx",
  "key10": "2A91fXg3FdF9tJ7YpNtUBobqudGAbw5CTiBvsQEqiakZvc7LcVu1PYjHiSzgm9VRsuC6NcY3raMh1yfopp6MQHpr",
  "key11": "4XQRmCRNBtsxcax8bqFGC2USf7hEAHVYyojhWa5UTZJf5VKzMY4tpPKhZnDCxEYSsw9WAtrjS3HYgSyjmi9XU1jg",
  "key12": "63e6a3BvfT4bhmXHvmAZRZ7nJFgpSL4GkDMi91LGQL9KrxvhrsJjTZJ8HTedKhZ1SXmYtcwSyFaTCXwzie9PCUv2",
  "key13": "5rncTXJTMZMn8b8GyqgWBZkJdoRaxAK5m4SV8zBkHVfkmckeD5yUJSX9prHRGwscGC7oUjPQtqrJtciJd7UkPy7",
  "key14": "vi7uGhuXGy5xUtw1BF65r98xnkbEYGzsz993d2eV3cV5VtvLox9h2hU4TASyr1jMt6F7M23U8xzkYN3iXCvbqat",
  "key15": "u16yGuesUzNJPbNxDk7XoUdeeFFFQmroFPcbu9yYuhXLB9kgQarL1cjPtfVxmmUbzXxDQr7zuR9zkRWeydA3dhP",
  "key16": "5cHTymhPSnVAFPAJxtDz3KBTA6iv49gh7eu11oCVtoY7FSWcsdZgTCeFYXmsVbquuR4BRSAaUQNSGpQ1cGDpkcAS",
  "key17": "59M5vuTKEwhknA3c6GMcoYyxHJ8Z1zWtgwZBhxWkNc7iDFNGjoLrYhTRSZKDpiZxgZenJiyMCn8G6UsexFUtr6qp",
  "key18": "2QC7chjNDazejh5FPeqSc435NmguB8d2FEMrah3mqfSPYAqHyqvLP8udDeVkQos9VeUpK41B9Eh1nXrmWYa2Ty3M",
  "key19": "5xbmmhiUzZLLs2ksnsoyLEN7qwA3KktRrvqW1a4s2dgZDhFakFXNQWVMQXTTzspFrgWFM4Hdq1mHSR8abJ2UQNXq",
  "key20": "2u5sJ84EtPDtU3pk5W8Mk9RFkUSb3SXR8KRrWcMnDjhE7zwVQ8v99bv9Da85G9xHFBiTPoyDRZDf4eqJK2pGWsGW",
  "key21": "3ed91R8y2rzdmyhxtQVKFS4EDt4FnXbBknFJZenjQAzobdw4hJrDzxWBfjop3A9RzZvpvu2N8ZqxpqkcGCxBg5ue",
  "key22": "4GVC6j4ru9ZEPKuH8JQjjS5eH4yJHyrrmFZ5m5YXP2TEsNEMZTYi6hqx2chmMcBRBd6jpJ5ejnQ67QAnU5LvSgeD",
  "key23": "eHhKAsY7oqi3hY1xiWhgN46mCXq4zk76eo36H5hPHZ7uGmJ2SSSE5aDuov8VFcetA3ohfB78wew8iUdS5idzGvr",
  "key24": "DyEGHUCDnL7g23fbpaVeYxtvWaSQit3DrrsM8XfjKCoccZ4kYxavsc3fuvnVGinGDFfh1irzm7ZWaxBwAJoiLFu",
  "key25": "5ynQXL7UiwM97gMfCHvFYr2DxhjfuCBfupsMRTFNpTFXe6WbxgXN3bzGWJCLGdgUEoD4PVv6Ya9dX9WmjGL6u4rN",
  "key26": "2RtzVcdjBs9oGTRz6iFVqyJrGkf6piSpBf7soH12DbkFeUq67jzWmCTagpi7tZisthJ8rDkg2R9FruCUGdh6Meab",
  "key27": "4fsMM9LszSJhkPv6ybawWqUZDxVDnY2tZau1PfA6eAr87VLCpV6vwjc7ZVXSyDDD7U9tBpBZ8P9w66DLV7E1Csrr",
  "key28": "3GrU95KoY44ffS4RrTwvFsWbSHfpT5kxVN3qwmVngeAs6WKNVBd1jPvQYuz58sst5kxTig2NVyPm39BQrdxnaokY",
  "key29": "4nY4qGVFUj53B3aU62dSiX3xjxZKPddeD7to9XNq7WkKVNyfZcKs8ms7jzF5AHW8RkMh5xBNvqNtGrcxmq3iLKiU",
  "key30": "5RGyFSgLu3i92qFNRUEnRyJjxnsXYAiS4YNcyLf6d5Xy7KV5atPPdTPqB7ESawQrasy69ApNix74PVcmYhv5ynBU",
  "key31": "4Wu3uvD4fQTAyWqrGpZ4nZHxHPSGsdw2sjAC54aFgsS7JHvEF9CnZt1aHkBhLEos5PpoZ14ZxXEDdaYVYDQz1s1k",
  "key32": "64ntQCFP9aiS2fiUU6xwQCRCt3TVoZ2WfSuBkdZwqj3xq2AmJ2sUdXYzmBEG35h8sUDUPUcAdjEQhKRBwcwTgGm4",
  "key33": "4gCCJA7phCgxbzfqmbhCmgogXYZZBh546362jUKi2Wbyc5ejykR839KZ48S42cMnQmvwrk8cNn3qhQ2VqakFqcjB",
  "key34": "2NMfufF5TvsxKVCKq49bkX9r9JJ7cgLGBqB1ksZy9Ur1ZswCURCEgvhwtoQdoaqrJDVwkLwKUejeESs63Fj7JRn4",
  "key35": "4BXhkjzYf2j57MgejWqX8RufzJDQbTQ1GdyZRq1aWzwA37VccM9LyEbf9ez1yjehakgtTSpJKDJVgGWKbAKZhD4S",
  "key36": "SnRCuWpTfgziEXu2H9UfG9VvffufHbEmv6mR2YhuX8MR1ugR1cNk9kSm2PwNrnsbJW4kKCuT9gR81N4piZN6L2D",
  "key37": "5T4Q5H46jLYwBwtfbVijdwmFt4oxsxbbnP86x5Rs367TmdKGEAb6N9K6MQ1X6mejSH39YNcbvxunuB8MvXGdCW1e"
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
