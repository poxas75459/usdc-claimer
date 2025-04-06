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
    "646ho734bVH3pjDyLXhAucLaAKM8Fvmh4dKcXrsRw4PYJdXUpVZYokdhonHVJSs8EVQpd2N8XkF8xodhVxvKniXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YNuvo7n9JYEb4w939tF7aq14KQ3uCCP6XgPC1AfWbSuSJUunhxqN12mJFRHqniRoowJiWjZXPGNqgCqmpKReQSk",
  "key1": "4AA7aYRgCi8xXJqmTkCBP4kShWu36NBDrmZ89LyUbotjQm85hfMhwRWhGV9ocvcE9PDGkTQXuCv7bvX9WxdvpAAL",
  "key2": "3jvJir1awdXrcJn8HGy7cZuyV6SgdeFcaWvMh7vrjRTGMCkk6e69C91oXxNbxAwRtpqJKjXFWNQ2v2piXiH9KWj",
  "key3": "4fzd6WhBFo86ZeKXRKQe2LTaQVjXHV2G56XGFv1WQdkzMSUJX6ptznXJXeNW3sHxBQGUDYmznJHFUTczDFTrfvAH",
  "key4": "2XfannwZgt5af9aDmwhWfWD8UBKvNXtR8fzyGsWVq3cVbAbT1w1x1VWAxYbTno1UaJ6eubKP15aMh4A8uRDkc6bJ",
  "key5": "2y8ex5zZYqx7wcDD2vdceDBHXY1g53xouSV6ZQ6Ywg3M3xYninhce4RSiqherUogmm1ZoQkqfW7fZFgAindGMhcs",
  "key6": "2hZGJiw7zD2pB5BRVFmZRihXmWDpScqoZvQrh56iWAKDi7araZCUZebcnNudhtkzzXkDstcRSsjZG93RAqizErbe",
  "key7": "2AXp1op8uruMKzt9cF4refG1nmNCcdrB2R4khbjF5s52p2tPs2AHMQxTKiBaVy3bQL9bHKNA8ThP8oYs6MmWYPQM",
  "key8": "3roNvcvzRSzMYSLcSQfQUgGVQhbNRzF96ANyj1T4mo4yczH4EyEdLgFNAHak5CepnaSg5r5PRC2RCQyS9M66sp1C",
  "key9": "2szQLhcJbrxFAzTYn1hLdE26mG9x2LDmoQVVPDb5dhzD5KSp73SAt7gGJUNLVhNfergR9erqScKbVZhBUehKHfuD",
  "key10": "5n2xmhruAvkQfbxUA6iVNRQg4ob6oZnMuEj85fQWWkhi5ECmhwJDWE6Z9EA6sbmkQVEn1xd1BcSLbfCFZj63Qo3c",
  "key11": "3PeMCy1TR8VkMH4ADP48B9acHrz97XRGTeggaPKyLZmrp27M4wb7iH5w7ccYe8uG4khK8e7NQi8rqZ9zS3mDHqUd",
  "key12": "5et17tx7MqBawKf6EfxRPv1CN6rh49sExWxozPqDQvvATmGuojkAWL5pJckEW9fWVfKhkwVSWi9emA4meuY7s1gD",
  "key13": "62CXSaymce6KemyY5KNLgfdwSsUhdAepthLQkto95LP7ULPNGkTDfYmR53M7oj376HSTP3hZ8kHABwjn9MFg7WBg",
  "key14": "DDEPsvpSXeyj3Pba669GdKFRDdNWGEp3Pdkm8KrxWxQL4m2JK4gMuEgDMoTMsveqXRoP8ZK3HJPztLFMKrwdWFU",
  "key15": "nxrh9wfNUv4rC8BXfuJub7V3knCZrZYLT4q2XEs2B2dmUZK3nHYss78z1vGvgHVRgbjYxFkKyzaiLNQTXmKrEgD",
  "key16": "3oVn9YDaZK8bu5M2C5irN45xyLhNwpKyq7D3J1jG5KkZSN62Q5rafnTrFhR3ECAk7QLoURs3WpeCcjUmGNVf4ReK",
  "key17": "55JrEREgeGcgg4tKQqti523Hex4XCEMSAdnWpcDqNVTTkCXE9Sx79wxqpcp291fgZhkmPyKJcm4mxUX9HSRb7JBF",
  "key18": "5aKyqaoBUuddcD3hjwtLASKsBgWJ8aP5CH7C8Vz1g39U872fpWLCBfsWhP9rBy8eD25NhKSkULaJ4SABgyjiW176",
  "key19": "QWQx15aAWg5YrqELpd7W2SqXmbFmrMAzMP9rUsgr78M1UcPw5FonNv5s1NL2vvxuNrbZd2gb1hbsA3kEWoBcAeq",
  "key20": "63B4YsXQsm6cVNhbryi4uduPgTDStrG12L5p17yCHLMxYH3Ye28R2MDG1ZAr8jsTnL2XSUXSPXb7mR4LLKcAKEc7",
  "key21": "4GURfQ1Le29CZZVpaPjEbkefxCap9zDvMk1yZBZuZfZVN7SCcTgB43QMbFapo1J5qLZfnAjjSZnfs95gd4emBzic",
  "key22": "4KiGfageJj1oPwAqGiNyt17iCJzPDSF8xc8eBjGayPNpRA3WUZypfeHiqCzZvDL9S3LbcYcBPuiF5BLXtggS2NaJ",
  "key23": "6673fR6q9gzY664ocFszJqXdWLYe3zW2uJJqiaHsSiRbLsKPVuKzJwDLsktxuAN83h8gmW8GZWXuGn3gP3DepSPx",
  "key24": "9EjTRSCNPk8hJJpzKyxXpMN1MwXF61dHJ1cV5qi5BFVSzsKBe2mukfLAJsYxDv3SXNaE3PMW8iSSK2TBcutw5cy",
  "key25": "3ckCms7ixwvo9Gx8m5hefCy5dCMY52zGj6fDgAGsLi6BsSdGShPb5U8efpTNEiRAzdM7b695H55iPdeczk6E1qrh",
  "key26": "RV48n48sxdoXM9H3V2Hy7wcbcSjzdGBwK8GJvuAd7eRA76gdiHhRCHcwMduWcgSi228igm9PvXkWYaiNh1uSPb9",
  "key27": "4f9THhYJEwTUJ2cJt2Gc2k5t51RepaZk6VzqRyRw9YG8gjZL8ipcE2Pusb2xkK6eyFR4CrkrU838DS9GdMC5ebBW",
  "key28": "ygdK4iqXwLV7pFPeCKzsB1FKoxW5b2yKvuscfnoHuN9vje28kzBy97DAJJakz5aWqxJSukmNTwKLCsWmtnHCZUk",
  "key29": "5P6KL3HnrZb2wkWUf4YjSMJRn2xqjcQYr9z53i6e5rWqPKffbnUmpxEJwW82WZRGNVwfPV9tCCNGvUVBwoUTka7A",
  "key30": "3BMqgL4KZBJYCbUQjyVoeGaoV6qM3hdv17z694f84WyYchZAuoB23g2j19ygc9EdfynL8jjs3EHYz5jyoY9h6cSD",
  "key31": "5G2jSKedAMzysYU9mZtTYVXWbydAfdMtj82PrKoKExu6jnyLBVcdPFcTwUUiuUH6GHZwxCQFtUZo3tHG3yVHZhiD",
  "key32": "2xdVcTaZb5tp5qH8Txz25oELHBMtXm1wMaCxbqjjoPFLuyPo1dAXdYg2NPu4ZpGxYq9at8mpcstTz6a1ks2mwieA",
  "key33": "5Tss9riT84WK5U1NVU4Bv2m9Vhdpqvq7nRWMR93w6j6riF6ZDeLqNHs5mZPRGmxp8uZ1JFwvhknSdZM8cHnUTn34",
  "key34": "2FgKxvioV3CDXNEWuFcp3vuiAY1dG1AQoWHsbBN1DoiAEGmf1RxaxbTjQJA6Vy9gyLrfG2YHMBgfpK1iiG4JWHWy",
  "key35": "4XNYBWfVnDrKseEC8w7Yqu8CfqhUiUEXypx3XPzB393B9cX7zkzM8k4vqByqycSCvYuCCiYzCo3iBfRrzU4Eq78z",
  "key36": "59tV76t2Kwdj7UMrEcnxwdGsScowaMLkcv4FYyVHu12aoJH3QazNwgJcx8M1Kkop2Ae2xjuo8nKY2bXDG2JutPdk",
  "key37": "4zDMEZ1L4sKUCxVhVqaXyGzBA9ZM4LarzjkYMUTLzXMvUdsiSscHcFLVQW8kLf58rGtZHN7r2rqGDpxUDcZyKbm1",
  "key38": "2Tf9v4X6q6rJVJj3UCJvtXA5dfYdFtpxLmM7uCeKeHpJq7cfwzhDpU8RRgGfZAQ2kr7AXYwqWcS8iRQKx5ZqgEya",
  "key39": "4idrwEUrf2rcPcwsiyn8MbJuPaz5GYw1y8xDxjPUDftJYb441CXzi8UaNJZu4La3WyG96eYasLQY6z3TUQ4ZPFxm",
  "key40": "3XhYhhg3m3tJrN4SiVXPEtnXCxXkRp7gqE4uHZZH9QHHBryfYQB7afQEghj1ySCsB4GjM6sksUSzVpfqD4KBDbyi",
  "key41": "quq4PqkZrMsbFfeESMwVaHGD4JchFc9bGPgUWowBUgrqEBPi8LCTewb2cGXBn45W59AxQ71BrLksUcHeEcNZS9Q",
  "key42": "jESWg3LPdBomvHjKAUscRY1MBSczB2zT9xnywacB1vCWiYueHM1yen6zi1g2tDYmB6auRRNDbkYyCqqhWMRZF62",
  "key43": "36yZNeqbhRKkXNmuH7cJqCURfMM9Gdi7v72FMK6E1gaU8pyP9sba8VoY6fCfAPwQu7kHEnTpfn5bzXuWn9Ku4aPg",
  "key44": "UMfsvotHt6B1P5rBJSb1ZF6woxnnc2Gc5SzyPym43mmr1FhCHzsNjz5HkfuiZLjdDZ88gGu5eKrWNbj9KEcoNcD",
  "key45": "5P8GFULPn9LCcLnTvpJWmR1Ly4CqrTejQ1aRuMGbKJAZtoET4xDd4Qpnk5SKJdLeAMz9xLUSh6JMS3WwTRXeSrFP",
  "key46": "L6BjQHKdMf7sRK3GNM4hjRwTtRhygDsy88E9Jydsy91jYwY6B4wNTSNnwEMgHo6EWhMdKPd7xTPDFt6ZnTBRpf6",
  "key47": "4yWgsMXQyUMigLT7VXsLtzHbU7JbQo8mUgqkGS7jjoDmubjFvAJYdBFgRCcjLPkHvNJRGDqFgtDcNeThmiemumuR",
  "key48": "45STaByso6cGXzK6eSntUycDc9W92LRvuCaqMpYUQGeN2HLUtJoxkmH5TjujPtGL4aRFmycM8H9vwqAUGUbqz5FL",
  "key49": "4m7CYRmNjkBSSJ5yzV29QbMEpWDMFTt5DCYJnXS8qZsQDESP8KaAQ8jDnykJVdyeX71hhAEX3W7VMAEgF2UqTJ7H"
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
