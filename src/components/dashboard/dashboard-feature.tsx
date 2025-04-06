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
    "WMY8VmMepKNAZddYNhep6iYHpCZaQQ2xsFUT3252HfrwLt6e4Nr79Xz5NXmQkQum43MQbm9igy3DdLTwZFGhAJq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xjsiTnALpk7c49Rg3R1V6ksszDfQCU8ri2ZMm6g49hwb2gchDz8hmGiGwQvmmAAkwBEbKizFq5gcQP6Hf2iqp3y",
  "key1": "2ipEwoS37m7wfY91W4Nw741wdUPmf7nm1Xxr2ZTim9hEbvG9hQUGL2DsqArXLQEwhoHVpoFaEHGjmCR1HwQty6Li",
  "key2": "4aZDcQjmKEa8n799QM8c7zGHr2vJuxfHznhVFEmvzALxZ8QPDcVajNUr7vbYyES2vftCdW1DFZLmBsa2mqq1Nn4P",
  "key3": "E3EoXgdTmBFzEjudNReQwbJCjQNkvvdKW3BbjfrdyYm9hyNVL9w4GivTNmiUYh9FsLySxgn9WD8VyFtEiivfut8",
  "key4": "65yEXzCPxp5xAcutYeys3XHMyrADq9698h4DcCw7nHAF1Y94jNTmJZpoFcxuffaP6y1NhG6eLSbEyxMw2hdcSkuc",
  "key5": "47iD7xYkTAE3M5mzrYZNoBoQMx7BEXs5nriKvaE7oBGHpdk9dkJckSEDV456qPWmfYKVKyXHGUuNSTpSAbqr36eY",
  "key6": "5TRpdJmCcC7Lg4FVLcyJQxw415FpiKgZi4t6QBDsmEeHYHpT5igeCM1ZCGo5fmp1jWeBt2hY2k4c8mCmzeAALNjA",
  "key7": "5G7rn2wKs7dFVS586Bdxsj5MFKpzn2Rd3FoniyTzLqf7qVjhED56Dddr4xZo9RwnHvKBxiDnkLE2ry8bujeWoDsr",
  "key8": "3a2od5rFZz4hX42cmuAojyjuTTYkPRUiG6m9BJL9gNZ6GMTpuBgxjYdG1XP7MGz4dEGCv45bfsXvg1Y6WmmozUfM",
  "key9": "3MfkreFHFCsPU2E8S95H6rD1ceEzbAQ9UtQa3GKn1cYgdRnLxG3bX3gRkoJBTPBZZibfYnFQc2dtYeJu5j5K7y9j",
  "key10": "yC7k6wck9FwV4w1gceiBa3fPPDQufg5h9r62G4aB3zyr6kiCo7YX7URYqR1gWMEnCXD8LtoZWCvZ9QegaaBTzEc",
  "key11": "2utMW62hvqQNRgq2qpKKzGd5Y8ceykMmqFcfFtCCDeb2WwQMCVwqTvH7Vr38ZW9ob5zPSjEzUqZZ6fNVz6kfTrzD",
  "key12": "3itno25S1fd14zjcd7WBbevbA2QVZ5sZwi1tUxYBkBkzbPm125iy3LJn8t4Dy4jYcgBPd9QoCaW5GAwUVgLQxAon",
  "key13": "2jNFa36qeEmJeXU1BRbQqrKmT9sUbG85EpSGaYpGj61mrQfVimfF8AXU6AT6UEQZctAeHWMdHXUksCc7gT6a7mT",
  "key14": "5dkLnfaN9CfcF3xXQCkknR1ywY6m7vqx4mEYgnffyub7tNUSTN8R2nugbabngzZ3gt7L6nsgTWMnhUsW87tromtu",
  "key15": "4gryTzoexig6VTwZ33FgLssfz4TRhjveZcikQTonAMWQs2gfkvNXMaLruAaV8J2YF7hZJPWyHfMDcmsmf35EfVdX",
  "key16": "5cDfqEBUa462tG9upRNQJxmY26wFVHEEAzDpyzGT3kQVzznuGnKSndtbu4suonFmoPsjZauXdTUqSYyaP1meohxj",
  "key17": "5SCDHB7YtBkv4pFhh1QboEUpUP7MBR1puYHvUNk4SK5JbFhFbgS4G28D9XgSeWfhHsRusQwaF7aB27EkPpeta2wM",
  "key18": "CsGGYsN6eFtPABGZSLWYsceDB4THWEKgSwN12TggzR8UEJsTYFyLuQ6fdurhehsZ3J6L41BQNXPZbSH6SjtKZzk",
  "key19": "5Jpm9rPXFhyCLhCLT6aWjvbcnabyXzjtNssvNSNgJ5VnacdBRNMSBabMmh8BE8CGTzbZ8UMtV14QKzveNyf7rFNC",
  "key20": "4VMLrKwKmEQP2xzKWcMJjtVHReqogJsPHqd4JyVKJcreGRG7wEVyxhnMEMzacf1rybUD7vkNoqXiiZspxADyt53q",
  "key21": "5wNFW56J4uiyXJPhxiTV5bLnSKrn7zN6ZLfQxxWXW9trxz5Y1rBH98p6LEJumFy3GAgmtse84JDvXGYv82BaDHLN",
  "key22": "2iQKAR4gsJLUG8RxK7jF5MSgTbbRC135MJoiW6y6xDDA86iP2vGCK5hXu6pr4gavmayn6c8gWtMKKfct7SQo5BPE",
  "key23": "5gZohyFcW3dcaMJCA7ukzLojT76ySc8ByFZfpBd8535wuzTHr5izaokbEcNFG4xD9vbspMfA75gmpnF8PDuCsemi",
  "key24": "3dcdRmwjp6JSKQq1Z1ntp5eQrPi5xTmD7vWmJ74hgDH7xWYb5v2SyMzNYcn3QnmxFsxFvPnxf3Fg8zXRMZurKiyt",
  "key25": "54C1Q38Ksnc3eopNEVTXaUaXnHcL9CnfRzaQhvJS36BjwAq5FhjASDsK1ouNgEoTSPvM1zQgozDE89cHLTUKUTHU",
  "key26": "5n1QQgTdzuKywszwV92DbEiDPqzKQme3dHLQfJ2fyWPY333AjSpWs2q76jV35H2j3JWcWFdricbifeFLEaJiA6aa",
  "key27": "6rdfQvEXdhur3wgFCFXCMqz7JVgnikaMU15pco9gHYed2GVNagf3s8yAAGKBHeEYCFb6ozH4eyXCY5UGFpQwF8A",
  "key28": "47PJyLAzFAXS1xJmp49Uwcf3b8ms9mkGEf5dQaV9rdv5yyr8ErQkPu1386iAfZtKgKjd4kAzn5fGUMKC4zKgC1Ab",
  "key29": "46pcP9VRiPgeQwHoR7Y6bvhYv4TapveoadQbAv3tmdzNfNKXUcrUoopE1WbvzQiejsqR8tMPtCoB7e9aoUznTjqx",
  "key30": "3GdhGEmDdGq2N51wcS9ZeaRiUF8WeFTaQZUVRhsXRWCLHF1Pyxa4S8BBPCYgbnJ72cXkeMvBnhrsKFibhx25FXUD",
  "key31": "4TaWmzCyUAY6F5nQBEFUQZ6HcchvXpRXTThaK1h1AkNgp9W9dyyUy8QKT33dHLPtj1M7vMyMcmRJzvUWSrNEK24N",
  "key32": "4j3BHXZdhBEEvjRRFQF28Z3SnfLoF6FkPhgve5mxDGnaBXJkEj5yoPRsydbX5A5Skv6XJUnZm5dkUMZP1ETEvNHV",
  "key33": "2msfYJxz5R7A2S8F7J9W3GK16VbTk4XHUPCU1AWSfJXJHx7WjgAobm2Vj1xCYJchAQFwh4TA5M4YGihowP1h9X6N",
  "key34": "3a6UNLNUjBS5fvqeA5DKZZrfxcV19pewnyE1V6Ka5nF99e13XuLyUWCrnytkGLUc6ErbX6uxy6PQGu3Bzm8iN69S",
  "key35": "4NaWZ42ji1edG5PacSBoRmLyr9ZAbJwsbYLCNFwsXHAfg7YVyuuVnKRnxspNuU5E1i1y49bKEXxbynAmzXrHgQMN",
  "key36": "4n8g94PEY87opvxKsQGpUD3cHmNzHo99YvAeMVgaGWHbh1af44KzBNKjHxws5wwiBzGvV8kG4hEvxmZoy1PJVMaw",
  "key37": "27exPDkx543agVZm8KxWn3aUoqNhm8GbfC834hxr4QECoAeM4TPsrtmFEtTxfgxcyrZiSUB6cevisYXFfuCXqxZX",
  "key38": "5uLGhcZfjL4g7u2v8GgCqr3BTTjFPLqjD52va21Z2jm55uSX8hhgEwGR99nz7QjvfpVEu1WJ7MbtBkGiMPgRousp",
  "key39": "43vyeLD4mLATJVF1Houw16JrvHoznivxfVChn4LTVBxFtazcpKcTQhHUbGGMxPjPZcK9c65TaLFcTQdHzx1i59uV",
  "key40": "2jQidSj2EFjeKDm9V79StzM3vR4n2X8VUTH5qeLKo6EDDD9b3R38tLEzKCvZ6STAJv8CCbe6y63NQaP2kzqjDsu4",
  "key41": "3NJLk6wiQ5KrwaJHFp4T6nNTnZkminoSkYikeun8oeSp4LmjMLTFyK2TEqF86gBHyjTJujQVK2QNbuYr1WWnXged",
  "key42": "4jHRLHTfv8wGkPAUgJFNAJguWkCTQP15dFQ1SWqwhR6JSeszkNBQYqdf5gMyi8gQHggixBLphJYfpJ9sqZHmydKH"
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
