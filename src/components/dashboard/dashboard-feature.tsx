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
    "4upkn9NzkKRrw52655MdhQ8rMM417v93VEdKpCAYfR3hN4B1nvYnXnCcVvPUtV9x8kqsqG8YXkCk1kZq2QKwZmcV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J5DJDLNMc4vN52cu1VsYWSpQYjPJRFw5nhHVdJCFBSm6vjtbshzkW7ynx18db9rZeCJ2uwNPGavdyePxFMZHpvB",
  "key1": "65nCSygiMyDRsPGfbM7bpJL6owzXyDVBcxziFWif43FjP6T4bJbWKeBNqJSpefJgS1DjbVY2ohzL9mye5QqYhWTS",
  "key2": "43rDeMvLvieH35TAxa4QX6udsFN99mDK7NVkS3M5mbSqGDoAdVcAg3bRNtmajmGoJojPWLGHVcHsnesD2mC3Jtgz",
  "key3": "2NEJFdWN9GExtafA6whyzsRWvQUaKcHkQEfUmQKGJovBDsw1Lp1ne8uGry3KNJubiw2vUGPmAYG1sXM3xVZHkg7k",
  "key4": "4KywrR528NcvYcCTMoTmD7JYXkhFFqY3ESwpsyQWQxQmrDxS5285hdWeFHUMk8XqehYQgeL3SXfwGbctZMbyvnmw",
  "key5": "48CQfcVTdTjoWEUn2tvz1eVZ1kZMfMoUJ2Kb95rmq6xdNiHyT6iyJ5RPqTwnJofkefMbApQEBoGwCk444jUm4DR5",
  "key6": "2Vtr4UUQZKNSGFwgPVdzhFjZmQh4mnMVKynuSbrL2CgBtd7dChAR1KD7hniUSiacWCzS3Q1zZv6zXgGXsNyNBG8C",
  "key7": "2HL3yAsFeUBt7oKL3VT52dDq2tJWaAfkDs9zMiiysoW3ZHdeZkMWJATJ22XvVB95qripXhqcGuyuc3vXsKVnGryf",
  "key8": "5XWCmn7QADaPY3GUte1VADsK9LQPsTtncvYNp4vYNCs4F2ft7wMbBxHQFS6HhnUyAbH2T8X6bZ7tv5LxGp5MSgST",
  "key9": "2VWFJEaoFhc9DHk3UJYGfR8uVhc1bWuukMtSdkL47eMcZUFDg88RT247vBVztb2Vc7zwzK2CJTwMDCwic9tBQX2A",
  "key10": "5VMQq72L7HUG7BsZM4AdaiaYGmtoMtVtKGCwRbrDoLT3WDCQtHjZKDfdBu76roraKLeFgErKwQhJ28P7E3fU6GAo",
  "key11": "2AgSoZKTA938Pssrt2HBKkxs3jRhZb4VR1UJDvfX2VEgqGRSHC9Jq3dE1EP8S1979HzSTxymSf746gPkjV1jhopP",
  "key12": "5reUN1Qwp6JUxKhvV2137F8xMyvCFT1DSopMawooaMEdLskJ2E2GyU17xQ9k4XqABHQjQ6Bqk1ucP9JFbM7WhmUp",
  "key13": "YS6zfMcmr819FRaz8Gj8kYnscBaDEeSoMekV9Rq6tR9XFRGdRAHfH5tge7zNJaMV5WNwfZHGaYKtdPgWdPhNZBQ",
  "key14": "2W1dDUbdH58v9eChp7rHyaT7T9RpF8wtEZqK3FZTwVRz52q7CKamc1TPhrhpGXwa6E7gdN7rtDsrVVM7DunnV6Zo",
  "key15": "5MTV6GgsgBEko9LRmY7QVKJsVRkBCBhPbt3etBS1Lnr3CVsKZ8YqVJMwFfEATBctNSbfMW88QZVLnipERktfjMZ4",
  "key16": "Qsd4Eh17xih9Pd8eggREEDuEzNENWg2MAAviT15U8s6H1ijdJLb5CszWUH9BvtngVnJ8SE5wW5szgYahS8YhBKR",
  "key17": "4db9BEmsHzEsUVTy7AyrqhHvngHfn5upxuE6e2s27S7FW1Nju2m13DrncXvnsd9K9nuD7x46R6zR54bTdYkqmvSD",
  "key18": "42bS7M3Rd6JkLM8uGM9jJGVmG57Apc21GysrJeLkEtsjrRbPU6BqVZ5vW1fQHDwQhiphzjXqMzXyBFWMUxFnBnKL",
  "key19": "2x1qTXpF5bHAHrtgPnkxhZYXGtRu3Gw1kVMe3uRjWvedh1JZ5L1poMCjAgHhjzbNLHJWdwwJ3tKFrZMwJaWPpKBf",
  "key20": "3aQ2guu59Qbwu4UN1cbma6CxDeg7RFpMrxcKmWdN7Z7kgk2fm5nS23647CGLygNJj8ZancktWvNXA5ARbVULcooE",
  "key21": "5BATK5dwdSmtJBWXiBTaAfE3hZacbJiuaDmVeZ7ffYdbowisxbPUAk8owAL5H3BSQh33JL9kdsv3tacCXF4FzWzM",
  "key22": "pDZpCv7tB2gW6xw5uzwqguGeX784GMX2CqMDnvJcT685tMbk9Bx6oYQXPq3bBr1kwc38zy5DFPyEcZm9Kq3aQ6w",
  "key23": "4zAph4K3r7UYPyoTg3APVfSsr8jR7BHdSxGJW7uXk2oLgphuDMCfaGaniggJUPKJdwWhaiKTKPRW4s4dTTq8yCpU",
  "key24": "iio4Gds6iWrWDqr4CuZh8xc7NXRVwJSa7Zcfui6cZDraqXAjMJVSjK3VFKvLHGhgzZqbC7eZiYT7MkYARUR39ac",
  "key25": "2JPaYeZf8G18JE5p3PHxUbdf7bsjbEUBhkHYfgB5XcK8wkkn9wf7Zcb3BW4piSfECu7E2voZ9trHJ28auvxRNvcL",
  "key26": "5dTqy4ivoxzGho3sn8SmBPihN8evLAB5ajzBntJ5FS9DG3m35CdJZrAjXopK58j8BQB5YvicVZhViRdt1ntwDhT4",
  "key27": "52WJUEDMu2qJ74VEeyV94WQ6E8tQYoUhR5qWwG5gbGci7kXJjZNLUujbm1ehMFg3drMJiGSaTJnuyKqtVPrYW1Tm",
  "key28": "65LFR6bddtWVmgyGCcAEsjfdXpyhfzcmpW8HU9kyuNiFnkFQz421fHLqu65M5vjoU8RL3CEShVsmYz61KizTHMZX",
  "key29": "4BMZw3JebU9ryL3MHjKRZcfUNBaeJ9BawTwA22ciHwDcPv48awFCCiznCLzcfh54oLCs6ak5hewfMka7byaGFCQ7",
  "key30": "SXCda97rfsc7xPNQ7f3HzMHduC4Pw4dH5AAYbbaZqis4kJyZ1HFiMsbDxNNQLprDho3fpkneYwbyJVsoabLjLjM",
  "key31": "5xEAFsmTTA5SxL2A2n9rD2mMES1se86ZLTTKnFxEtA8BP58SsbomY7AJLcNgnSqvD6odB3WfXq2CZUF7Q8UuryQH",
  "key32": "4KKMa8RVV9VMac4X5TB2Xpb7gt62jKb9hRorpABScYQbNVHwvayiQ42eDcckqwq9dSHeuuP8rRFhWXFqXHiUJERT",
  "key33": "4QAwUQM2BhnmjSzqhkRryw4AmMgpbEXguWrpE1qZesEDQTfUMk3VgYLmjwJTriyeoWMqQ4bbnm7JRwwLvok3cyTn",
  "key34": "5kJPmRVBF7P8qnBB8ncvodbCcEf1Xs5wc5Cdfrm9fucZjxXLiGetac47GYNV4XiCUkb3TnMsQe3ezb9BfAcmdJuf",
  "key35": "5Dq6DeKEq5Y8CWM5XUsHNZpPyzb4LZY6NMjgtSc1Q7vjuFYW36ZaxvTjuioGtH3MY6eQuNDG4RW7wnCa1nQynPKd",
  "key36": "4DLNH3BZT8BqrmgDkXUePVefFQcxNi3P1QAsrWSSvFHWGknsHFu3a4ujUounVACb4qVaEfZKArXKxNGGRWnkAysa",
  "key37": "26P9bUU1GH8mnkuDj48rkz6t8Q2z6A5wQZJDZLEu66jcyAGSaW17JJQJdTjk7hAB9FMWdcAdGcPTM7saTksLqowQ",
  "key38": "29j2ChjYJpzbwxRFg4gLgRDdwp5KfqoKzSM2LYBVMhg4x4Mfnz21PPoDmQGehqZu7fTGBK5WWvxnU7BJzz6iJdmB",
  "key39": "Jxjom3JTx5CoXzkp7cxnaJd3qziA6p6TEcNtUDTh9sLk9sQv8x95X3yjMtQTJNrWrAYuJx3GjpnsF4qfY5g8MMP",
  "key40": "5xSqtom9PSogTJTC5xq1DaSWQ97EKDWqobahzdMPgpyQ7mEVNe5yNG5KEG3u9JnuCdkeyDdQtN7pd1f3wrqw47eP",
  "key41": "dzJKpEvGib3G1b5hgDb5943UHR9Tw9EPv8F9AEeEmYtGAaeM7truR4BeQdzNcSXhvj8iJ6vRVFBJzG35XA5GNTW"
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
