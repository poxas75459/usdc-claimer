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
    "4b6bCTRaUYHvbEpadoUNZfKU8Tc4uhuEMRxWh4s4zA9X8kXbHDwae8JEdKjBxTgochBY8CAEjfAADynBMoqC2zMD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45Z5ZVM7xaS89J75yJhxfFEsfSmMxv2jMAdaToGytJvo4karRdjnR9QGv8eWYK1kob2QHkeMftv5vPAqek5CvmCq",
  "key1": "4Fm8XRNAjvX5PRpLYutzTaa4G6jA9qtLjrBUYHvwfuT1MX6BQ9UxHDcDB14vGPuj3vPW1UFAyjgLb5Y6GT4cyh1w",
  "key2": "4LQgejwuyXTShq5Xc51E9H2oPGdrQzJ25FnXtbRZtDpb4XsdU1fD8wf5UJvYvHdGZ2JE96NZzAhdLf8G7npdQpwX",
  "key3": "4fKxQY5KrQjrhdpXvnyAVKNLtC39XkSjBM7wnURGZJAWvUkx2rF945TZLYYzYUJPxZa9JTHrsDaawthPV9JiTav1",
  "key4": "3LTpph6MEuHCZf41Bwk1FZ6KChrSkNicTsaUpNm315PxrHsYiu5jnc4P8StN3q18go29PeYfyM7mEAvYf1e3yAkh",
  "key5": "5WNi5Liu8sfYA94s98LF9mewsAKSo5ypMN89gzsyAvCkVgJQwEy4dfocwPmHcqULVWht6eum2ekK4RQCopZSCJJm",
  "key6": "2KkzU8QzUZ8LZw7kVknqsxFYgAKPDuzWoMiFBv33gKvFRY1mm2jeo4oS6Ptv6dH7HvUo7YoXzBFT2zhzkXXEcELk",
  "key7": "668mFx25FqYwUSaJ6jAW9G41u4DQixuB8NFHpjk7RtUCc7forFs51UAvWREo7j7vQjHyD9xCYL3yiVjcdDq5xSWm",
  "key8": "57gpUGfGhcYww7mgpicg4W3GU1TDuJmTCsHzEUqHSmHqMKbKKqNeLS8fDZhKmpxDmSgAmiaxYyu9PJKdv1C6DSXb",
  "key9": "2cixk5wNmL1LTwWi1aGpRfQJpgSC7j2ZC8psUsaV7Q5PBnLvHhwF6VyPoLW3GEehx7cwgd5D4noWFSvkyR4Lywqj",
  "key10": "2cWvPSs4kpbT9AkchdRCKwffWFM1UE8gY5gtGV9hen6hxsyEDFkAgoh7S4EV9VCZ6kfuGMFBnyxJAqYhvUfQLSJ",
  "key11": "4D32y5CEYTYuns99f6YaPeM43JxBSsHD7RrnoYyiYUebvYaMPUxqwCQZZAptsciYFRBGdVCJku96iTAbsV9i1sDr",
  "key12": "3qUHDMi7zMZmcA7QAe9NXqBPMHQGdnXfL5KeqWWEdBPj3Yk73uH2VhbDZvsQkTaQ62QWNtmksotgrRpMbR5BcZC3",
  "key13": "8J5oQBCvcaX9sXhWkvdPWUuWsknKVngieitnGpUtue2kQdipKGDDWS7ghUr5jPEs1UkMjRFHJF1TLy931EZU5gA",
  "key14": "2T2KYfom2j5RzTnCJi3aaAWqCoFSYN7C1j7gbW57ZWkBD6mkNvQWFcNQZD5tyDPu9eFKQtzEvq4WaswytwusHgpi",
  "key15": "63ysRYiQ1UPCpWt7H92sfHa64dmQtXo9wDyrw859QqaqygyP7rEwXY2bcjS8B4DcWLoNGEmmbniNzvibYyrQ7HYf",
  "key16": "3HFX2w21jUdgwiNZKtmZU92sBuBDi2D1zrZAYcrtRKtMJebzaaxcX41F63J96pFqjfSRSwivAsZFAFfveK1yerpm",
  "key17": "34LM1yQfXt5owFCjiMidcXT32U4JapS3HCAth9sjPNJ8QE4Xum7jPoHrH1RX9J3Ehu8dGTiS3WY9tVSWrEUoruEV",
  "key18": "476LkeoqUy5WV8fAJChAkdnmQ62mtqQMKiGsuHh1WNd8q1siexgusUhSSHxQMcZ5L2n7dUWjbdGhmMW5rbSVqZtB",
  "key19": "4MbocC6pwucWk3rhUxSMHVTrBhGY8ACMdw3VJXg1ra2kbHSbeb5Da3vrkK68sV8ggtuQJvqBNghsDD646E5i8tAj",
  "key20": "5NTseYyQRNvHmFpK8AYwx7dvvX4mFKUyzzKARMMPVEZnBf7DnvY96PCYiXaqL4Q44TAcjB24bWNgLPUKzqbNcgiP",
  "key21": "5e5F99dHpvU3cGAaXY6p3wy3nFQvFdd3WYuFaUPnLVjMgBkCqXhz4ZaTMJc9mPDvvCgWLBeKxh9gM1HzwMEdyGGp",
  "key22": "4c9QsDWhHYdrdCjan1kQo4Dp49MMTEjAmMiKNbcorFMeEjUf9TqLxYCnXKPsod3XYHeFg2rxp2qr4PTn6T6qkVKf",
  "key23": "2dqFRHVVZxLpjt5hauxvnd6jxQ9VCv1B35ceEZG82rSLafM1v9yBLb9VJMLzvbSdaKUzyc8DFfg36cXamwV23EJ4",
  "key24": "RRG6gTggQfYQDBg3cTKD79ijuKWVQXu6ZepwzthKzTfAX8CHd8LPtWYQgqysYvYzD8YJwd3BB9YpoJZ36ftfLvy",
  "key25": "3bTmEwNXKWH64dA3o2Kg7KxNrBmqYbKa2R41cSLb9KpAEwFvnqXiyRnfGFEo39xBKGvReCsYoCJUYVkJGwkNnDQm",
  "key26": "2JSDtaN3qG3YmctxUvh6mtGRsS1nYcMgTUuhd3iLydqepBKwZUidc6BzgXkn7beMz4HSBBoGh9afkHbNSaJbhfEC",
  "key27": "3gsUJNXeNbFoc5GNDDdj1NFEUjMWMC4R6qqioUPBVcz3GAYwSZGnNpxa3X2NrLQnuGMundep78xDyTdn4kZutBQK",
  "key28": "5nuogW7d1tuMbRnDH88FS8KV9nA6VMfu4wQSxxyZa7uj8xU3zQAz2QMNTvX3tMnrApeNrdeiojfYLCmazdnBfJrp",
  "key29": "42exhHjQNiCHAsqkzQ6VX3Pb2FAU7rYSs1YwfdsDxMSZbBv3b5kxxbvLjrdnoKfa36RPqXZYmz6fd9BCNysDhEuc",
  "key30": "Qfo2Wq8fWgLxN51gGfuxhA36RnwKFf57HU4Moyr6eb125VPzj2SmHnnU5EyEBFKbYvLkxPPvAwt4hMGkkE9TJ14",
  "key31": "4Qso3HcYSCxdpPd5YQAB2jH2D169Ebsj91qkZVAL2fY8HJLQKAMjvwPNrQmdmwV4vVKJNZbgTRn12Zr1LiyFSYF2",
  "key32": "vbLypQGY8ZaBgo8NnfgrgWdN3ASrF6FPjQ9a8df8AKjE8hLtngY6NGKqiRTYNTgwgBB7LY7sZt2ZLCXfnQaJm5n",
  "key33": "4mGJFGwn83ecpZuhWuBm72gXi67sFnD8H85NosmzypqGnM1hGS6WB1KFfAfv4NZMZkfeH2bktWbA9F8mYC5oHpWA",
  "key34": "5vGyYF1prp6bPGPTVmg6MXrJVQ9gYTm4UzdvTYwTqfvvko1byNja5xwkH9pEpwFdL17qHxh1Rjj79xbHvCV1dAve",
  "key35": "2HrBzWD5GyTitPboemzLTH35VpwCpgmh3hfsAuf8LP33QcdAnRjz6X3ss2xvVMDJN2Vc8NXJj4maJP5qBDQ7ppq2",
  "key36": "nKnyrAYhXbAC6v6EnDW8sSXcmHkPFSNntATP25neRb6x2rHnCVdXZVg6egcVZUcboaL7wgxMgacM16hrEBvfqyy",
  "key37": "AU5GGo8dNkPW4TshV4cRJTiVB6S7WCAWdzhkTRxa7ap8PYGgRJy4FgXqErwT9otoawSNRb9AeHDciU8WMKGYxqL",
  "key38": "5YYvqf52eEaei31CUi8xDe8LWy3PfjcHwjngTL3ArvRE195bo5sqfoCfwAzib4RepDDVQ7kCQtfcES7MLoJW7arC",
  "key39": "57ApcXC3ML3j6DfusrKHZnhwK3pC4f1wRjPfcZ7cibGTrLnFQdaGTs7FjqwdYC3AFokj9QRnxaafknvCHtQyuLxc",
  "key40": "2KBcxJDRYkdbv12Lq43jzt4z9dBzzFV4GgsC8ji7TRgKX7b3or8YaoykDjRWm29hG4APgDxkMnVsg2tLo6Gzy5R2",
  "key41": "3xEnuih2gkj84EhZVHV5qJo7R1PhU5EmzUu16GV2KdrTT8H6qZe9f4MkroESxpeinuMwzDuw4ikEt6jNGS4cVy3Q"
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
