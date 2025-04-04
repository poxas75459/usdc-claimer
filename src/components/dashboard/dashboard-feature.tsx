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
    "GYhdgFQZ5Ep1N8ntv3wUBGDYP68YwRwL7bkeQcVq6pwZPDcxeK8AQ9xzcKQyr3rZJkFZyxihu6vAyvHHKNneNL2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3znFRUcmmDqoLxGkiWqePFEEWddVPbh1J2fD2uazHr3Kfo5btuhCmu9BumAUaEdC4VT61c3JUP7chinDW8ooeCvE",
  "key1": "2WLXnssXp9XSNUEbbYDcn8tKkCFoEKpo1Qt3WttFSgCw7PhZsvZuXR3mM3J7QUNz4NtAzWy38yUjCjhSTTtsrJV4",
  "key2": "4QzcXZhgGoPMNNPJazTTuFoaqzAQvnUJ2mHtsqJuuAccaqSfBk4wKMunssnRGKX2mNQMruZh2gjFCbfmfYjH36dp",
  "key3": "43agJrGsGCKJY9pVR1rSW4UYSSGCJsrqk2omG4TL7UfZ2qkVjx6mkacguqDJPcac5jioqfTVewx5gGPza32gHsj1",
  "key4": "zMq8eQhWfiYDLLqiR5YMh4foMJZuUATm9aKQ55jEJ6Ze1ZkWEUNasrTpm3WEjKakjffPoK9JcPcbE962wRYjS6c",
  "key5": "2pyrFMoWmqiFpBCJjzZ2ZgmHHQNr3zhFJmh36QecoGGxQ4qGxRpKVcf6ymGGtiH82zwxjfywiMmGAtBHgQcQMQHm",
  "key6": "5wNN3pvJPBvV43PoKyK1ND4xn27snJtMUaVeTXUEFmV1SYzZekwggpUXZRKEA3c66oaKXVeSdSr8a3YXc8vpwLHP",
  "key7": "63NZ4AqpqVwoAfTcUUzbRUqspeRxHousPznDThmVTQQUvFSuU1hgsj9eVaAx8J6MQiydD5vMeCxb8pbyBXRXmTPG",
  "key8": "mTLi5pXgcuZW3TFbQhy15B92bpqKJH95sRSHXx7kLfJmaLRqpRjyi5jDa6QcBpogJQC9wZHim4rqjY12eBjH1NQ",
  "key9": "2pCHW1AKTRn7xFj5RfuiGSQCqyS7DKRGZhaLVPNwYeeD3UXw2UfC1rfXwLHn4kAgDN6iVsykntMbvG8KBF9HMsG9",
  "key10": "4LE3haRgY8RaMemFKYby4nZMDjrybJaukQLkH8B9VU7Vpmf8MTa91vjm4EYWL3kxQgdPQD5RD8FFBJyXmnFTy3uC",
  "key11": "5BKw4imWSbB2kTQVN6xSFNCMb6pEKWrDirPnHQhDUYDHv9KuYjq1kR4vP1HeQZbB81vDJTaUGYuHxrzypGKwVeWS",
  "key12": "24pjDaF3kQqQiC8mow71a6VsXJX2TfufmFX966TXZAkwvx5LXrHQ8xfZqfyrcjySGi2U9q7kVzkJ5nXw1MX3M2ea",
  "key13": "4jv8gKRAYYuzC7MnWc7Wt5eL1JUF2RpPfHVVaE9tiHKuxHN7AkT7ddM2AuyCdLmXTREen7UQ6BYbMBRq9Lw7W8iU",
  "key14": "4PCLCybAPUFUcWFb6RtsyrrptrjVMms66BnU9KrMQ2HcTM4PB5PonP9YvBxPrEjimGJxU6cDoXBfFuowXzaVZX4L",
  "key15": "ekDqMvJvV3nXknqNg55pG1NaV3Hg4bkxznKxhzU2CcUWtjSXfbqrPiMYLA1VFysbfxehYJH23Q84NkkZbpMnbCk",
  "key16": "43xiLZHTzJvCfZcsxAs36NJaT7LH8ZSUJUyLkgLU3BgsbkRFhW1UqVe8vHBxZfDfZNbkF9sa9YReZUb8MN99kgQx",
  "key17": "3UQcWx4xj7GedBxziCxDtVDhSV54fv7E9T9cztQqXMovLzgnAx19H6M8rQnvFWiPQy3Aa5uRZBod8tRUr8T3e136",
  "key18": "6157Fq8WBoecpWehiuS7F2vneZbCjS4L5XigtAqbieQ5MZaGnJamNSyjD5SuwY4jJF37azRFPLXBCpeuGR7zRsxR",
  "key19": "4NbZQF4zDgUwPuXbwTJc4wRB3JMLKqZxoYHTi74G1797dUNq6Rp123hn2rin5KVwNpjhUAWEKJScXpAQrT6XwKdC",
  "key20": "42DuNnv5o5iy1LSAyc4osLGG41EwTHz8tRU6XdLHwpL466B6JYbs2Rk7t4PmmC2fJ3P7ayaY2SUn7U5nFsu79Tqf",
  "key21": "3PkNNjUvv3HcwRgQV5MSKrHjdDb2kyxAm8F5cmuqi4sC9PQ1MGeM8LyWy4tKtgcHFpFi1jHBW47dYwZytbddLbp4",
  "key22": "4MHHGcB2hqCKuWPth5t54UfG9cnFn6SiLTGbizgSuAaawmUbKC3zSoot5igGazuwmz6C5aH3vwk42ooZyxbmTYWe",
  "key23": "3GEMZmphb7u12SsEXFGBWEHBgUdJibFENVoKsWmQxfnm17onPBRwh95ndmC6y1tYRxQk6hszHzaoMhrK7HHPKEz",
  "key24": "34gmHz9E9ptdKb1BhXYAiHfBJzoBYqS1kmYKFiZJCPjrywRYZkQgG7iE4rNqSs7FWGSV6NZ8H5QmtmisXfUZd5hJ",
  "key25": "KWBYsSZkxZVdms3QrPDe6ktrhS3JQ2hzFwD3hdwLLQiJDGAgW7tamxDWVWEr9ssbk31JMA3T9dsKdkbBY8g8BSi",
  "key26": "2RDhyJYBVtukuo5QeCMu2THyUfeWcThJEGM2VsgioF5rFfHxmKLnsNCQxbHhpTyJkXtScFH7gDNagZsyYCowMPnP",
  "key27": "4mKkujNMdurg9aYXrMNWbyUFRZda9qW81mJVUpn7gF7V7XNS8gASN5HrwMewNCn3cdbp3gntwMUifxDxWbcjzrdx",
  "key28": "4Pi1Yq1W1fZb15ia6WKodv5Vka6Ni6TVBCFV9HnKkeFMawkjDbhTiKVawdQhLpPtSH9bmmLi2WbDkFh47xf4teSF",
  "key29": "5jaVxviyd3mr1btjmzpfm5BDf8UqdmEJTLPZVJCvQ9gFHAzHHcz2tg8ZEKtwkXkQMVt7wdD5TiCRH8yaT7ptWbex",
  "key30": "5MPHaur2ZJiknPfbqWjHL7HUNFa8BhtJcNsSNuzP7SRMRFVcpULo3PZtK2C5EGMhKJFyzmmLnbqaERYu5G1DVXwz",
  "key31": "ouHdZrutUYTfEVMWgMwYBFLaSNUtbvo1kdfD3bFohcY7djvNe3YuWRJwrHcZ33Mg5KQM4DpCNgbQh91qE3Uua3s",
  "key32": "46UYBP9V2U8zoz62XYHs8CEbpnuGvgnd3ZBmq4u3W3h9WzvfFFCm6Fs6dhHMvGCsehxheqBs5pefCUoV1qHpcEyJ",
  "key33": "2snvnqiGeAwza78UrXYvnyDdSR14wEd4cjZaZMvcKveNyLJDrytfW2fPsui6xTtTSGUf5BWG7E7JEui3V7cLwGxc",
  "key34": "2JVmSxZ2pf3J7UWyPXPPeg9ckTkbGq4E868yFFdg1KrVUf4WP6qkzdgMYDjEFqhaVUvaRwcQAw1PPCBBWF33nNU4",
  "key35": "5MCS4HahYFMXRnk5f748YDgHpvF3CzexijzwcHiBwdQkaVFiasvWPfHA4HLHDTFubyqzvv4SNDXtcho4r98XQtXN",
  "key36": "2HxPW6DW4JJaZh9XUdy5Z5LHit3Edmo9qjzbLR5cHsAo4q8UHzNVEMBkauqCMssphdpH9nSKhLrRky1yJRLDyZTd",
  "key37": "4bY3SsXt9fAsFiCx5DHZve8g5uYTPDoAkTQ7JmpVoSCif2QLXF97QqRuvQpFc8Vdvsov5PTMXuHGC3LCDdDAJcGh",
  "key38": "2c8F2v87fEFzEhjEjPaz1U9SrUQm7ZKbSbCsET7kAoqUECoL1X6PEnojWM7xQSj35WMoaABHiM3GmRpBNjurXkyq",
  "key39": "5gYXyhRgzk65jJGzZNjohmxfMYAX8PDPXBtCAb7V1vpgAQBC1cPeLXh8tiKUh2zH9yAHCEUTH4F6dDTm8jBWmGiK"
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
