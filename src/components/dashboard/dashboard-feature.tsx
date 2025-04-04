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
    "3dkqJKkrhx6Fr5gJ5VfDW4qdE8uUgEhYB9V4zzg4NqEj7MT2U7XpcrnYpFofTrve1VSamJidGL36ArH7yrQ1earF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YowcvroqhA8tjwAdY5FrnzsjnemjxUCxCCybDjJ4e85nNPUrCkobpTn6T1P4yAZ8Y8EtzDuZneTuKxtSYbqp6VT",
  "key1": "4oUZx4K9931pVyvuEhoFt4j797iHxtMyuxcYHLHPr6p9UUykvAmvR1yReGciqVk1tk2UU1Qfu2upZwCudzzVRkYw",
  "key2": "3QNPxxfC31MAGU8XzsSxtY7FdXVQGPmbRVJAodC6HajtcNBPL97asfhWK3zfYMJ7psrm7Pm5LeCwE3BQuFk4PY7i",
  "key3": "5NfZz81zYfp9S9PTdSTMfACqcXWnspfV2mZEX3TpoNkrpf5tND7KobRESMXcDTFoGMp2wPKfYdyNz6wkHY6ekT6p",
  "key4": "e5T1PsGhnkomXkUMkKh1F23kL6LtrUkbRqEEFGJWfFSUtz7drjdUxWELFPbqKZLRtvNdJLzMFp28R23PBzAaaTS",
  "key5": "2J4q8pGEnpAyzA99xppCPtt8MqeZWHkTvoQcCsBVdZa58CJAHf6NfivNG8DhHho3nkVVGpRfnSQ5KdzXRhGvQvid",
  "key6": "2mYLYLSGrX3XV2fjMJ3RcPNxosoGGC7AV86NXDKuE1Fh2trg7xAYGzvVxEfENUkndWvYQE6ZFF3AkjaVqWgBn4qU",
  "key7": "2HCbXo8MeeCkW2mHyYC5ssQqxr4RCa7ZERYkGmxvtBNZ58DLkSDvzoD879dya8wPLLwfRBBnR2Tugg8jHAs2wksg",
  "key8": "VC9WqrkcX8GDDMb2D7KFUiyBHNxDcNzzgPFnpQWSTKv8hfEdsdTV8bs75z31oecaB9AKjvy9e5SYBRVxqeBNwVZ",
  "key9": "5avkBafu9RpszefBtwKj6tZwadpXE3Mv5ZS75p9pRebGTfXqGgapB1iWt1UCP4ZF1QRUh1F6KkEwMeGdQ8UK5mV6",
  "key10": "t4QEV43dBVkz55CTTS7bPjZdDDVqd9EDCLQB4fiCS7PkdkE6hW6oFDWYk5juZc24MLERHYo3su8m9eLCTK125vN",
  "key11": "411rSLdBeGELN8qRHnxR1m8h1ee9FjvDTZhfM5kbPagWpRX3k443H218mwiRv5WWPJ7RH4NemEyzbbJNzVs6XJp2",
  "key12": "6pnkPPJmpsGud36NSH9shkJ4s4AMybJMNXF8b5MQJh4YKt9mDR1PboNnD6Up1miykAt7RjC7kCkAWGRD493pprX",
  "key13": "5XbK1ZjR6cZaJ97XmPZ8UjRNseQ4ecT5YSUsH7cTwYML9o5XfKyYLUYi8AUdhTkQEr1acTdKbUQhZy6JZAg9PGgd",
  "key14": "2kb5idDRdgxjtF748u2QkTmxc3vXA2YNLHNjTvHegm37BMhfbFuZwgi3tS7reWm7WGBe6eUEKQE3JBRR4iHau8Ev",
  "key15": "43epGjdBdk4zpxB1p3FpHnPWUp4d1b7LDBR3kvU8QQCXovjohr5BjwphG4t1RMooTYQ6c1R5cyWKkgYwiPy4Ni2G",
  "key16": "5W4synmVwtUFyMnL6mSK7mEQZpG6AwroELeoDYbPKhdkkxZPoHBeYfUikzxHMa7Nmq9temQRqnZKkuSLt2o7m7Jr",
  "key17": "2Kk9H6vnQjVP61bi9t4LGgBUtNLWAoD89PbN17nr5RY71ayt9fPz42y6rFTopRapfcNmejv7REmSJyAWVECUV7Kj",
  "key18": "48fp1qrKbL9tzdMVKCCfdwGypnavQ8jgwtcz8AyJUFwyevi9TuWzUBWkRXR3o9oK2eSBS9XqY9CMLWv6mvMFVQTH",
  "key19": "4EHBzV3ru7dDscLV28PaQVkZTgqDPkRnY9WFftds1GmGYsFzab3NraqTmWn6dAmu7K1jsTthqRe4LLgEdxMXuUAp",
  "key20": "46ajggR1xWD1FSDhsT8Yd8gnwnVEpB1ZqfYEBvm1DQSRSBKzZVaUxoxpntbRJn4N6A8QyyiX131ZFapueVTFE3X3",
  "key21": "3pZV71FNq5xKHNUjruiXQE8EfKiMyczMWDmJydG42HpToJXiJt14hn3F6DmyHZ9L4EshgSN5XGe1xUQbgXtjDasC",
  "key22": "4j15znn12uE2RbnL5ERDhQF1jTauK6UggR8SUtDhUk6aR8uAnYsfygFJZoTRUr7RJeK7FmRWWnMuAzBqejVBCtxt",
  "key23": "2vy8dW9nn6CaDf54eHkVMjDYNfSqXFP5w4z3xyGLXF8FMjKkhJsGVUv2ZdWHci9zK8cs7adXsdKpSEm2LJWUVrwn",
  "key24": "2jmEuJEpwrcUVEhyyKozriiFCDGUTqnoSQFSyN3ijTxYXXkiouUR7a2VXwNfHnq3pMWwBD3zCVsdpGNkn1VDBqtG",
  "key25": "4LmW3Pg37wiAfMifCkCU9qupfPXcrPWccMm9RDm98tVMb6aYgNgwSz1VBP6VXpu6rovwixRDxXLrx4Dx64prMQhn",
  "key26": "4q8Xff5qsNhsYns53KoS8b7uohp6ashLNHDzDkFETehMFi1t3bhNEiiXU3wJZWsMEHBCYmoUdmXqth2SMDCdLAJz",
  "key27": "E1SCvWaRxBfo6YaxfS2smx7SqAB3xe6shiqZzUbpvuMHrjpH3L1fxsJGcEsqgTyujdXB1oKpLVCFGxAwh6RPMdG",
  "key28": "5Uof6GZ1uuhQYDZjrrZ6tWQuczu5Pp6HNX2vAoPqLaRQsEB4uH9EsK5VEzHeuKoyLudNwtRB7BiXYcRaLnVgYXz3",
  "key29": "re1rKTLB3KK4qJ7LRjVsF6HL42KokeYQwEDgHZDZQRw8cnp5X5S1UCicVTL2RV6xtQmARJvuTFnydawhcfqnixN",
  "key30": "2aaeaG7B8icBSeAX3bT8xkbaWjNeY9i3Ej1kcxkeG9iCpEoszpwyLnHbLpFT4qB2BQVvviKh76Gx35Te51JQvgbv",
  "key31": "27Rzd3ffdXxKvXkzU4xEf9MMPAveY8ESadqnAxT2ke91HbXG9tx1guTcHg8gvy93ibikE9AtUEXPuKMJqKEC4sxr",
  "key32": "2apLVjnDXsUwYSeoiwuTqK3udRSALyYdchkkXqa2V9FHe294aBvSmxyp8j3pEX1osd9oztFSaTc4b9ouZNJwo3Ym",
  "key33": "4fgAaiC5mSL8wCeGYrL5YgZ4L6fYAR7UM9o5bmjietYEarP6iQZsyGsnUZQUwveZeBLo734D8xV9bt1G3yji9vCf",
  "key34": "5F1EnTyRe8htBZ8mn1qLiENbEET29Yo18FvddpSGshfcKhatuT4kb7FH5iabbjaxRo4haFP8ZPZ4k4oxQt9XmWpY",
  "key35": "4REJ9JVMcaR7H32JsZ5PC8XFNDoEaSUZwKJo6jWkRje9PLxdxMivMvYFkjPrHAFyUe3RUNEzizrcAKZCiGhUiWME"
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
