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
    "3qzinFz9UMa1zyhqa2RAg1Vwxi2KaKxPz9EfuFfbM8vS5ELmrGE4Q132uNSogLmgP9hbTBqCYoQwhXV6CSqNh8Bw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NrVBTVxSqafvsvSJEWzcZXai3PsSiYRmSJKyxDEuQMGyV5zHEyNYNt6v8hd16L4zoDUbinPd58knx3pZRTAW1Xq",
  "key1": "rwGd2RQ5uLP6L52mWPASxRDRZBEhf3ouUSBjkH81d9UbCobxsRuG5wQDeePN8AhejDnVxvBv6qT6jonNhB4mJdW",
  "key2": "5bZYsNfdRj4QeEMYA4s5p8QoVzAWBVPinZn5bqgKC99Dvkk5v8U3cMSsHUZMHb8hSanFMrYi6fbxyBRe8oskozhB",
  "key3": "GMkZYVfb6PkQUQYN6oSvns59zvJxEiaT9aJfG9c9dJeqWWoa11HuEEzThzskHpW1DHWVxA9LtUkx62Txra1QXWd",
  "key4": "pQcXXwSGpHQT64Jo346j52zmeo4K93Zp4NnRJQrudemgFgaWYhLhsNpFfKsNzTAeiDk6SzW9Pp5Z61fxjbkEKkL",
  "key5": "2v9KjNRbeKjxvFNc1QhtCEdoPZ9VRmKW4V97b3PSBxbbhqbqSFU5YfnfvsqbJVbcRaHTow5bRv53eQLfa6NpDPgF",
  "key6": "5qKgqL1mFshspVPGBkY8yFW3xBLpk3QUqDoWJN1qxnEUJKupDg3oA1kH2vFYTcryiTxeEwco7gxZN1uD31sMZE1d",
  "key7": "2uKhDXr6aeFwD8DmJHJiPFqSrr4bR2QYYir1A6axp2yKMw1CHDiNedvoE3GnDQvrGPsrZzD4BfGarGNbbETSGmuE",
  "key8": "5Mimndf7iGq8bGbBraqqxfzqBu2ogwNXRjH2Qn1VRkPL1YgzEYMYyM3ZMzETnxX5V9DRb97RCezhfy826fQk41qG",
  "key9": "5CP69ejPbdjbWeWYHMcLUN7nscpSoYX37tXbTgXgBTgkDWFJcydcetjVCeV5REKWUo3vnq8RpLqZVnoBTsW9KWuP",
  "key10": "5c3wsz4cHJ1FuBiLV5KkS2xdRdk7USqFv3GCV3Bb8dXBvaZTXoXcdDQgMBXH31riuTKUFn7sqnSuZRfYhRf2VnnZ",
  "key11": "5cVKqtm9QxAB7TvDeVuDbEDabAXFGtpcJJYGKxyZ7r8jxE7n9iypJedyYj84XiviPiqcHaSDf6a3ZUYJw8PqNhyr",
  "key12": "2qQqt1UDoA3VaANabxzeAYCjzS68zrtKzJsN9gEntyNwA3jrFxgX7pU4g1LsbJKb4YcUF8dEBxEbsNq7HEfgDFoM",
  "key13": "497CkuKxbte4cx2rnZ8sWmtxetxLLNhzUcXsPzB378p4o2Kqm7jV4adTbyeXowVb9gBaAhvxFpbzKq6RRdw8gCdA",
  "key14": "2U7anhr59YpvmWfHiBcB6CNqCcSZh6MKDuc7yMQAyL1vA898QasEykj6Zhnb9QtQMHBxXRvU3G3TgVjvPiGdizFE",
  "key15": "3oB74yYE2muqiMbEtHFEJ9cGC8QxUPd9EPdYqBFZcvev3vh3QfNsGRZ2y5w7qPq3NLyqJkWD6d2m1TRdku56NocP",
  "key16": "5324hi7PgQhYNvg1PbrKc3ggtgqgDrzcrHKQaQBYBWuzaVyD3ogEDgFEk8woZ6GjCY3tm6nnBE1EJpiVKpNYHy7p",
  "key17": "muj7Sm5XeTjjhKyt2XUo2uzmYdQBZcQjSnnxvXs2tapnwgMqGxco65HTHrBsCsdo4VQQFFfXvzDcpPnh2Ropxgf",
  "key18": "5M3bVCAwVaucNzYpurpWSPxRRdKPbH9A9SiLdV1DqmHbKpDtL6vuWMz7te5wfvXzrJ3ogywejZrEei7pQZkqBsVL",
  "key19": "3DDFoAqrFPNSdKz2VqMBj69YUFd5KzvnMDrEQJGkFx4qJGKitiDgj68GkeenAXbUWpsavPQxWuePva7vfeatjA1p",
  "key20": "yB5YysXXfWjtSEwmi1hkhxrRQW44smSdP2UCVitRqpMB2VSwvKtpzitCmQXMpEAjpKpnD78qaUwMYpZP4b1Acvg",
  "key21": "8LQXHEpaxCWX6hY1MQomzJuw17W7m2M2Qx1a9Frmc3FwhBBucGWdsKMRc73xEUzEHwBiZAm87paQKiuiW2v5YKu",
  "key22": "5FfMowQaKbEg3hjsvYW8ouWCRDWbTB4MVhz52zENXarNvczs31HYH5NmTNJc49aBic6ydq8HSm5CYnZjuDzepCK1",
  "key23": "3ZKWrY8G8jomoAePFa4yCTa17ysaNYAtah8CqG5biN36nbvUdTiehxKRT8A2Sia9sJBpu9SK6i8tUyFRMqVbFaex",
  "key24": "4x3won2JMQV9XE973pxAXTebN2sYvEhLttvVvb5AfRe28C2NL5yyeRC5HeomwcsoYXoxoHUnt4hBX24H2JtRjvcG",
  "key25": "HWerDc37ryn7am9JoL11XiQXZgiMGk4aLpvi2Srg3YQY11HMcTj1dDW9KHaeK4d3JczwbSsZy8fTkCzaXA915Ct",
  "key26": "4292iR5zLiG6uxxSWgdu83vfKrHJ66ubJDKHritDzxUqH2nxSD2RGuBBHHhVbeZwVXM9dodBivgehgvwN6CXhrmN",
  "key27": "3fxoVnAHxrnWnhcrhFFSv1TnxPagghi7LkV31nXWxSMs8vEPgVqjqR9gyxSFtBwPAtriQBzxaEMPnABFHggHsqhN",
  "key28": "5bBQn1isgdHPeYJdwmP3Es5h4YezCNEAzSyzTUmEQMGuWNRkfzDnDkXkmxDHZf9jZVvTYwQAQSk9Xf115L61fR33",
  "key29": "2tdqqcbZ4RgwtaNaAfNy9nzmvjzrMw3br769shSSbWwtvFpJpkXDfj25pMc9yQnAqA3LaEc5RnD6AcCsxeewAoaX",
  "key30": "4uMJvAcQ35P1DZRnhCBXyn6maLrTpizww31coEmbAoNG9cEmHxDbnHLYka1irrB2Fs3FGUgpxPWpdKHAvzGSN2zJ",
  "key31": "6653jBRDGVcKreZBD7sf21fzAoNTDHrNxUktjYED4Gmf5yW9s9hoe2zrmaaAdwukFiBzkpqxvtGuaQgjCwRv3yub",
  "key32": "4ABdaN9vFqdqnccMxzpFB8sy3AXWHTTychx4JnLc7sZQjDBx22z6xYS6zqrfi3CymRtUabh8BLvxHudEKafsjTzV",
  "key33": "51ic7DRqyNSCtDHWpbsBWJ7mDVtVrLApw1fk7j1bSknE8iw8xW2dQz2xawmMZizn3Rf6L42tgqh8aMkUtEeHET9k",
  "key34": "3pBHj2jWD816nmWXfmQYbCcyVdLAkR2NnUamoHM9qwCk6TjpHQjUS4VErpeynzJMqwaSzBNgT29gY92K3ooLUQ1W",
  "key35": "7XSaDgsrNitLignGahpmCiddFAsWvQH6UHN2DKR5fnYrC2noyDqmhHXUJmWgK8Wtv8cgXV6opzSo3hDkaQmSZhU",
  "key36": "Fqs3K7JH2pjPUpAYBvgBm6gWw2vA8HYQaNJ91B7XnAiWyTyq8N8pR6w2yAQvt9WMGre9QaKd7Td7ByxSo3u4igc",
  "key37": "4FGzGkvkmRg3tkqZmiXSxFcY6xy9QbqLaEZyX3So7robZC9cXnjJR6eUajqVRyRZhMDzfrvaYx9D8UEz9xs9vF1j",
  "key38": "4j2ddNUbkz5k9cEUiHzFXLz5d1xShLh7bEC5een9UtBrrJQbjHbiWRq9AhgKWSNXnF9CEkVqqpWKEe1Nmy9dSiK8",
  "key39": "2wy83F484FqvMLZfq9URhoaSMyywvbxdjZwFmF5i7f1wzpZPsV2fLDmnzdzK5yjaoXnwo8e9C2dfC1yAp32JVatm"
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
