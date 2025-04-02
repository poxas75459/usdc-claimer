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
    "4KhQGccKHmMKrvWcTcw8THVhyxfveU8FJJvDE6ztxV7gsnJ3hR79pZeqFAG49F4ZkxvQsdPLbNbefjZwJobpLhpK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rguw7i68p9MMusxL9zJV2CP4rAsg3kfAG2Fb9bjVttA2owDZr7fsMNTk6sG2Ed4rhBVWez9N1fjoKovgnZoooq4",
  "key1": "2QQb79au8jKumfwmtuMsnUZSxQSpHwDyFfWpb6WTDfgXrWUSGb18EZdnKWRCEiRW3KCuDUis1nVrV95SsbrxRDbt",
  "key2": "67emqAuJJ5qZmWxnEPjVTDgEu2ZFJs7NM3igJYkCpMEkYprXiWe26zDN6fUKfumCSaDJiUfxkgnBcdEuKHE1Kfmo",
  "key3": "2cFGhtfJrxskZ5jUTiRFZGjBXbCXoAsF85GDx2T5xo3D1RjgARqqdTjdra7tK3kChFQxDJQhvXx9SdueAKvATB6f",
  "key4": "5Tkc7i1Bk8epqqjXt8YfqMSSpy7AnEw3oMkdEaV9XnDN9AwQPSkM3iADoYQVi7Aw1prsTxbU5Zxnxj5FX9YgmsyG",
  "key5": "5MLYJhkefewRb3QALRCJ4vNoGXHGQ6NJvnC6hB6XaZDiWx2LyEGMP4RfVzLuh3QqXFzNraFJNCJyzP4Dez9Rtb9",
  "key6": "2fPbTgHMYsqcvR7iY7Rnzrcuioh2f1uHr2RmVvq2Z3csGc9i3yMokC27yWgBmShebESdAmjewEN6ZAM9zrZferia",
  "key7": "3orsRRgpEAUNeRgVR8HUgY4QsTSkA49odBNgPqopp7CCbashMvMzTNXQ4yw4hPv2YkKnS43RfejwThUZPaYhRrxQ",
  "key8": "XdQr279CbkQ4KA5pQqZYpzyYyFTHYVdkrXwACLZ9YfBX1CgTodWL5SLQvLZcrTgCQzrwC6XYhmgoW5fakgEWNje",
  "key9": "5u6n6eYwK5XUiFtRq7bUaoD3aN7wFRLML7PDq76PuhQeU7GQBVqKoAbAoophjX47HNcMJWhc6TotZ9XfEbMbwm6w",
  "key10": "ADen5jfwhN1yeFYNYkE2qQWPqtLA3ToceDEqMF1QhaPGGt4t9DF7uDXiDhYVfTAJyi7DBkM7iyX7JeMiY5uZwxC",
  "key11": "4HJt3WcFgE7kSqzpNCSgVEi1prQSwNwjpfvmvtVWYGiLtPjMj6is7yLxiYPnH8qsvqgLyQAdEaUsCeG3RTq7wcnx",
  "key12": "5Akw5PhGJpU2dy1PnZRTbjNokB5tHEjpSxvpVbuG73cgd5Avf5vpw4SoC8gk2TqM4bSwBzRvPwgxSheRWP5aH9oo",
  "key13": "2RTms8WH336HUev3kRNrrMdqSDuMv8GtPN5ZS7vG79o4qPjBk51fK7W8JfjPhrYJtDiz9KFpcRMuLF1ntV2X3L8X",
  "key14": "2V7JHwSQkU1idaGRjk8uknSegecakfocbs8ARwxZkXbEL8MoBHq7YxnWX6KWa5bndP7CqENcxLeYJMP3CL9tQ3TL",
  "key15": "3KNHTqR3hhDpXyaDmdzXUR8f5LRoBM5Ga16DzrtjZ8TtBkPRvBvbhAnZrTz4AQV87VSyAkCKEwPgT5WTVUDVU4V2",
  "key16": "5aVLJBvbw22FsZQNULQBY4QUyVKfQ4Ct5VFzWjPFDmUXnHehwkJi5pPw83fXUhFvc5LvdBTiaevwPPGGDtyKsXQw",
  "key17": "b48xkPpBW755nkJG27ygW39UfrJoxjvXnvkfog54pBvvk5cPvSvFiyfHcyVMXAsZUDVB9SgMgmzv3rxhB4bPoUU",
  "key18": "25dXVjhQGGJF4CNauUtn1LHk1PLw596648S8im67bH8irgMxj4mDGpgbVNC2HLwDG8GLT5fpYREgayq77WDoRuh7",
  "key19": "VZbyiZG7x8bAM9ej1bTnxjZZcbCZbK4NYePqebSb4r6xyeDqYHXpMYBJ3Y1AFKMvrmmQKgGx3Z7FTpBTDZ9uBcs",
  "key20": "1ue5FUS8djVtXXdzcniN8i1WMRwCfh2wSWxXf5A6VqYTAsA5CoSQK9ZtTZJgGK9K1iYqLamN4AvuCGPbv2w3Ftv",
  "key21": "2vFy5NWuK85RCmjcYsXZtaVm6yUmciXpM3F6NLL6hp8sm1WCtQuRF8DYddxNYqFbb9Th95Ek9dEYZQ4zTZKdeZF6",
  "key22": "3j5SiVrnzL5Zr5eK8ybbbb34dtrjv23MRYaLL6joQEuiEUAT24Pyge652dhTf5U1gmss7JdH2PmEujoR5wEMZbRY",
  "key23": "ZwvVwyqtqATcSkik2YMbAp8DGGw17XAZqgWpDHdm9qv6SbdAqfXEDWcLQZ1Y7Tpqp5B9vTcB4vdDn9iMCJY1G1K",
  "key24": "5pXvt3pUJznkChaSJREGgA5CuEpgkngvVqrUA1WnBJ4PSdGdhXUiiLBaZ6dHENGwWK6P89sTZdhcGmptku2AZ8DW",
  "key25": "JEXWWHEDZ2d9ii8t4r2fLTXXJ1maunvPc7Cyesuk6WtwAYfMs6swHBLgs9Cm8UtJYM7UrAihRMK7fxioFjLn6wz",
  "key26": "aYVtr5KXHaX6MuZEbKdwQM8jr3XnPpw2WUznaJF1pYEungfiu7nbJbrJTWmn8d22bSUD9HYdn7JQcdXrEQXq1iX",
  "key27": "4JMkynEMjWzP8ih3gabbWfWJ9U5nr4ZiQ2kPNDAkka4Xtne34EPGAgeV6dJwGjQvDWcfzzCMDXTjat4zMhwSooBo",
  "key28": "2uG938Jaq6sfy6FzLs1tN4GKzSh6nF2S37dfGNcEJqpo1S7AoQ8V1tUMQzqZF52NokZhGgwEYpouDuTuhPHNqKz7",
  "key29": "44zeoYfYCsyPPwbNnYSKLfpTZKZ6Zf9nak7ymcM5hYU4LR3xPHGMjHinz6CpxqjxM4k2aqX2zmHdkcPG2zidP1Q5",
  "key30": "5djqfLNvxYFR1a44Ezt56Es8TfjZquej957qJwofy54iJ6cHJXhDjy2qoEj5nkA8nmQbkVtNZx71Be1eTKWT78x"
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
