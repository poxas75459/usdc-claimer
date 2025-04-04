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
    "5aBxHrEQnZH4nVKdukq1odWJmRMbL3sRDvqH4BNkfoNErs3Ajhh4SxVd5juwVRY99qtjQ3DPJVCAWWCwm8ndFS8v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ABr9gcDtKTqNr6B8KvzTU6XBeJpwoPqxXBvuBUxYrwhEoAsEqw4vJRzAL2MMpwK1fqHktn1gEzBxHb6o7J7KrRr",
  "key1": "eAEfhYUTeVMbQkhkeJz8p2idtn8i3Q6ffddxfWCw8uMACYbGNTVGowrt1Cyq6DQkygHjkppxnxzvhvD7FsGe73f",
  "key2": "4FBTfyZ4sYbBnDQg9pCwe6EZ7xDEyZV3nC1MaQVhaYZSxec4TQw6jUZUZ7oEKVv4T3j6vZYguigJS4vZPUE4gt4L",
  "key3": "5CvHRHQBMrkc8drdcRbtnfgccdZvyBeX6ynMUWeYv4VcBpsJd5yAP2dWLp1BjiY2HwXyqSRD1HAmeidJGnD1fbF9",
  "key4": "2LL9APuR77c2QkgvDw6ihMNNUiwC5eBshXVfVhwqWsUnFESTRwKxNuL29CtrwcfG7SWWJqziBJ3FWMzkQmV7ZjcF",
  "key5": "2Sf3zb94thsjtJZvH3iwtHWKuV4nPJB7tb6gjAgdMGCejS6zmncpHp8XKg9ZB8ez75PYkGipBZxA8GpBuHUhyzfB",
  "key6": "2o32TtoaCfAhTrZQKoK3aKc27c85rvn9WeMmbT8ozWE4P3rXbVSYvM8oFcftB9mNLToz52KUrJ14H5YvvS2LMhdM",
  "key7": "q1bAPkaxuKuEpG4ybJsPW372wNhw8KAtFgXr26ryZJMhTR1M6SN785tXN9J9JAp6DBQc2eBf5pegCYespg5UM57",
  "key8": "dg9NQTKoCaZ7YgtUwERPiFdCXfcm6ApjQPuVVYAnTD99XbnfhsrkFSrTRDVk2mNk9vSDybfeN4iZRyjdhYrABnn",
  "key9": "4MzGGwnJCBvGzqtd4h228ZnADrgANQqCumqXHY7ZJJt8r8oYyRFtpDhvgSR3FvMoWR13XgAAjzmzrutsrmCMLGVq",
  "key10": "4X8y3Wr44rThgUzPGsLLCk2f1NCY3kVa3xTVMoCF8UkfYVexAxgGrjPESB8ncPPJUosdcDYQ7dnR6GK53yQJUg4f",
  "key11": "hh4TmNKQvvMDH5nb5uTpU97L6Q5F86QGBiLSiUEuL3ot5J6YJ1Fn1nf9UYEjMaK59BokxndjhQCm64AvgBo2A52",
  "key12": "1Sv7AnAkJ2PZ72D2v3vJVwBf4YTPtfeyckZUobz2KVhVuHy21SxFvbtEtd9ZMgWkx4P6psJRM2TujQLEjBJn8m8",
  "key13": "53LttWDU8hV3rf49cPJfBgZW8Qby462WjxLDmJmv3H9kNPs6RfHvh5gdipCL8TrM34kXVbh2p3VevoVuyCLTvSCA",
  "key14": "5evaxKLyXVPdt3WgcDdvmBxBz8LUZC5vhCee72CfcVFE3y14eKQqkBBXaXfkGmHeBAUdJwhazwJFuMXy5Zs4mkBQ",
  "key15": "BmyQJr2XmejoYPnkzuipBTuPHLcjX1G7sRjZWCuJKzUC9Z7j3DyV873FM26bQz9RVEt1cpwUDnSMCkH2yXPtYXu",
  "key16": "2Ju7EmN2u9fj8fekxFChxfQkQPJEHX4zWUVKW44EKhL8i2fmU3Fa7vhNVA3omDuzBZTWwnQyXCAVQHUcK4bKU3Z2",
  "key17": "5prPAYLphQGnpAir52AC1vmRD6xaKAhw7p38XQTs6Lm7Me8xvbPHeBkRAmKixpAAA99bB2mP8kxjyQB3e7kD4aMR",
  "key18": "5fLvVChbWaL2rm9QSAQ5NpTEViXMGbFwHr3UTs5Sa2r49FwSNNrhSLG7opDXD4tP3GW6bzQifikS73WzkibijdiW",
  "key19": "3y3WfzWQyokjof9gNVjp4aEohuMjejTqq3iCKoHvYBudZypAQJhqochge14RoDsVT1ub91w28aTYAbNLECrExcJK",
  "key20": "3qePsNtj124L92vtbkTAgvqqPyvBdtq7PEyomfq17eFHs4EJXXH6E5iTSPxb4vCd4AAzSnx78M5PdMSRGFhnv1KD",
  "key21": "2h9zCZXAJpasYsG4PMBKoMgkgAk8r2cxASqFQziAxcsnqeHnBhxyEQW93i5jnxYiXbHHHe3FNhtUJUbsUNsTKD2A",
  "key22": "52wCvy42Ck3qBvES5J9HrYQg1amE5PrJD4dpBcQd8EVkCKyhTzjVyhuFHU2kB1tW8Bmdr3HpXQxheYfAWNAs33Wt",
  "key23": "3sb3dYNfsRYaSf2wHZ15NTn7vpwVD5366SnnQbUm5g6iAJkgu5GviXLXE7NqWryKTShaKZ5CPs5qE1VDW5wqA69n",
  "key24": "3QNY3Kv1EDgdc3BktopypSF9p9FKQptUWiQD3YNasQvAaBG9FoFpEoBHUB2gWPr9b8zx7ffSrfBNZAUeMLCqhwUg",
  "key25": "4hyzEKBsK81BcSevh4eqJcjtgvnuaEyhyHUzr5bSohKC4qkiue4c7cbCgsHehu5yuAyRqJWEnopnsjnkVCDyHozW",
  "key26": "2hDqYrAv4fJnLcpfXTpm6nFyJAJ1iChqyvxWwyuJ9GVGcokHmLfEAHQiWrPmY54JETPhTYXKKzNpNE1MmgfwMZG9",
  "key27": "36TGriAd8zTic5MrtYoqr2xmoTdvm8JdYfHmkwoePnQwdGBE1UcLfnpobQ8mK4P9yrhEJAntogaibokcvvpR5gAj",
  "key28": "3eNX8YYt1bycCv2LQ4izEeZm9G9VUtUjPGvvXQUbgXNRZJ7hQR425BwSsQiEw4TYDyvK1HynmpjZydf546zHQDdJ",
  "key29": "2EM9At9KDcxWYj4pmCnHQVea1712xuhEHMDA82SkojijGTVFxGCbVWAB6Q8MtMYCv6F6nb6GkwUqQouj47TxfxHu",
  "key30": "JqhEQwGwfhnX8C7wSR2rNKMKZ2RcYNqHaBuBJEUex4GYMi2Ru1DmzLBctEmzxGycD835iQ5FiPYBTcCs3twik9k",
  "key31": "42542snvDAWj7QKbwX22dwpBprin7jpEzexnD6ze9xepHuCuTzRDicphNse9qNedC5mSA4MtpE4QgH17N1kSxYnL",
  "key32": "4Cjc8yx62fBaDam5U9qz6QeUwvhRdPFCYkfAP5Q2hiUKp3k7V9cKnSQEqGZtvdD5yeEPSGoPXqREHFKZGok4DWhq",
  "key33": "2jrXpbykh69kFhAxqwuryNFMc6HaM5fyYNZ4tkQtn2CD2MxhUXYpmKc2vFxZH53pp8bfH7XnHHhzp4rBmhsYwqvD"
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
