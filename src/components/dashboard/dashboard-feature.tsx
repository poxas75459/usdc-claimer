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
    "4r7Gf2nuEmYPFk2WYLwKKoRKLMUEN8EkD5iZ1VmiFLyo1BuYn3UmC3CdR3BMxPH2rceuQmVQfnAwYPu67dL2x3LD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QyF5pESk2Qm9qh4tp2v8VacThLUzDYohBeaafzwxCg1x3ntMfKPDHxz899DgPChJ5UMrWMpVjFJEMzPEayVeDX7",
  "key1": "4Mn5mPSViqKrfNbUw8cF1YLaFWxm1TGzKrxV1QcT3AjxyKf2mV8PemT7BX4Q3WCMT27SrCqrvBvw9nySfxGGtfQG",
  "key2": "xiNdcmZEtbRXGR9R18HY9tLvQxirgUQxVnbSLJQHjzupeRJSmBZfmt1ZhE9mVgBz3RJFY3iyHzGxKef226dFzCY",
  "key3": "5UkHXqfx5jASoqa3qrx9ff8MUnMZerf6Rzo3oiN4rDBBarZQ39Pwk2PySDKamTmxhW4pJqomqsKxvE4W9AmRCdDv",
  "key4": "4dis15twc3VNcPduqqj2tw7b8MHyMtAZ5p2SBPZFtqtUk9C5aXuZiRguqunAQneiawCJnEHLJ2mX8yFrTPSgzF1S",
  "key5": "A3VLbaYLV9WaD3z4LRnAPZJmvcCkyj3c9xpiq7J1nSuY5qLjbkh1QHaYsyFefmk7rmWc7Dpp8vnDg1LNt1sUbZZ",
  "key6": "3JFpiyb9kkgP5pzpkyXMyX7shdxrZTx581QHxQAKsWCZ66KkWonsJY1otqrQEQyMM4BH357ZfTTR6qjc7Kgf2mDK",
  "key7": "pcxfN73anYnBXsdcWkwTuZTVM17wmH169zG9eMUsCV54SqGzc6q3Wq13VKgzZr78vVKfkZsUTPXncQ2ykMtgc66",
  "key8": "4RRLdPRv8JiPyhVvdf74rxRj5qmY3DJNWBndjC7VZBJ6xUBiveRJWu5GhnLH39JeWi7utm6RyavZdbkYVrjQcgXd",
  "key9": "5qYa6pCDBmc44r7EWktdXk74g7FgeyaF3CAANsGe1eb1hvJaYRb6HyHViTHxXYBM9y3KNP7eR3p3Wk1zobfCFaGM",
  "key10": "2Vj5WbtDB2LRC8Jk17skkUqFtfWsnUnWfV6TBPt7ek3BCuKsQTkpqG8Q3hLFKZXyjuJ7M653E4jjfqzr9YH268Fm",
  "key11": "5bCE1gXnQoHd1EjCACtYUjZa8idXDktyofHvqREd15KMf1wxDb8z7XyoVioGRD3XcvZ2iAKu8G8MT8hUcEhsuRwX",
  "key12": "4ohXbQYU9JnCLmHJduDcw46nw4eRvCRcxqJ3LEbpxtpASL8UKiGL8BANrQZJHu8YpNJ4GjNuuBvkzRWYLEkB7p9n",
  "key13": "55qGMa6iBksL2awtcHJ37HKHjeqCWHau4BYzrBSnYtZiGMsCJ7h5LpmBtYek27ece62kXo7585mvkNdXMfWnyLjq",
  "key14": "4hUR8tVddvwdv1a5ehpL6yCmD76xkcFqqqzJhjwR9BzVdHhpZeyvTDYhzzWTsmefvgvKPcagsLwVkAHSynXnLx7L",
  "key15": "5wek7mHrX827xnAaR522kLchXK4cCGDc6f8TYuStQEHRZMMHuc2g12ZvWof1gKy2jEmr7WVhPF3qa5ZKBv8iVRdn",
  "key16": "4gdgP6oncgiCFiyo9eQ7GNfhimtHXYU2kDzwMWmxAKLrVLDqNBR1QFokRkuN83xftU79E2491JSEbA7mVXY1MBdi",
  "key17": "2BXP4rWqE7CZyYPXEQADEYG9LJ8bB2RbXVAPATQBg27ADoZ7EYFNB5VwvYwpygYpKQhWsSAGMiga6jgSRuxMLt8S",
  "key18": "5UbSxnRNQavuvBc2A6Wjk5frJVWxEY3ffrLhKNEcYqvZgRqr2tQfqnQkvNahXxSL6dG5LSc3gjEM79yM8vSzUPsp",
  "key19": "5kNvHYBEFDCwpZKvZAMhXmo3VnzqEBVJaEL7e2e6LMBtr3E4ZRECvnBuZLKohqcpzii7UitRqHULTHRXQ1Nj6GkU",
  "key20": "65vVRtASmULPLBgrEMi2DN7En5cS4zDYH97nMiPGDBj3xnQBhEG2AdsQjU7bfv36yj3bJifDcAUV1EDfGLFQ8p4K",
  "key21": "2EZ659jXk3cjcRPjssMxdfskrYhrYsE9CZqrQQWGMzB6bSzuk5mZst66BMvCKzFSJmxh8gUMpxTEgVPgmh43VsCb",
  "key22": "3uomyaeTs8tHc1TsiU4g3X6yLaxJkghtBhF7it5ejxKVcLvPni9YhiSzen1kACtFBjxqKHdeFcTo9uKvK1b9R8Sw",
  "key23": "SzZ9jtcuoEr98vQ9Zi4aedvBUgtiBDPPvyBfwNWB85CgD9PVYg1fQr1vk41BvZJkDw6DV5Ppo2yhLV4Ay1z2UYE",
  "key24": "2UYHqFJ24qRstroLdjL6qeCnz5uwZQAxcAtyQe7wt7tuPhywdtmuehobHWT3TLxdNjGag3EJ5s6VuT26MLQdxtMC",
  "key25": "Ve97WsUKAt79hsJCrwErG8vb5RF42keYC1ocw2KLg7HCSm2QgAFcVccdDYem5moqQdSz1eNzE5xDn5SCda8o411",
  "key26": "8AHYh3u5JqzBw5fVrZQyqSEm9a4HMVzX8RWMQgT99GoH4nUJp1avHvD8yvEM76tRwvWaVgM4DM8UxNHnfcaZ2oP",
  "key27": "4chaGGjW9iKmKBiUnjw6vPmFUoNDKtyiRTnYRXaLgGKZ71mo35FXCLkawJB1gt5gkRcAvfHn4Umzh5zD2h4umgAj",
  "key28": "wVneqieco6vpit71GjTuwBRXutzFk964cox9mWSyMEjerSJWDM9MwUHtMJiXR5wfwQ8wtPmpNAew8cWtK3QzS4E",
  "key29": "4dqNStwmTE7K5KXxVzWfRB4LBAVGkLSFQ4yg2yaobcgCjRmvkE8vA7Nrz3K4TZHJBGehptFcGpDvPkk64juyQF8Q",
  "key30": "4Y3pWAU1Ke1LSRmJnaQbrkSb3j37RrmHkawCRvkMchFiyCGzn8Ukjhum8zqDHhujFEn5LcfMzDGD41Wz8MEoCFvq",
  "key31": "x2HAjhqdtKC7efrpPTfXoACGDfp9wdddQwAWsNoabbDkHm5WWEwtGZgxbxaD1uepJxKWoH4zFEZyV78sLC3cdwb",
  "key32": "5SczqdZn5t4tsyYnKpSA9FrnLwXMcM27y5U1iaSqWrmKZgmjzkCPhjLgG2xk9WxB1dEBktdFeyCkDGC9EyYgTevC",
  "key33": "2PUVJLVvbQrRoixKom1zzjfwa1TR4x9D4sKwWoN5UszEM98eQkmqK4ziqnymN7jWpF1t5D72i6AyCYnR8wJv5MvR",
  "key34": "2hiwEF3oXwDruALzyE6hLFpexnAtcHCJwsbLorK45tbCJAkjfmAMwcrEM9ibJnuMNnCNMbajrS3HcJoxHCe34wLf",
  "key35": "4cDu2Z7Tf9sq41TiPsobfhgWb2b8n371kgqnXRPaBrfdvYE8zbsoLLwuWNAUSDEAE9SE2GQ9goxW7xxcs79n7HKX",
  "key36": "3XKGHkqZGUM1yn4E878kLpxosJ8KQLxvfDsMDcEKTKjqg7SeKGs57t4r5DR47UFrBBentTY4A6rj8hMm7Hdmr2At",
  "key37": "4QS4kwDfq1BRdCMMd3XDs6x3NZ4T3FEQ6otA7waxo1UtnGCWdgW9oL7LsRkGCQVwiXT99zhEJe9EiUXjzuPa9KGH",
  "key38": "2qTvxMfPfPqAt4sj9YJF1FfYHJL1ijts1cXR9FhQ9dHKG7FR4xFTAEiufTLYyEZSnWE1NW8AZrLrsryvxSVhzrZu",
  "key39": "628YDiD1BbMLL4o7Mdpj5gNcpSKX5XdetiNKWVmyviwHNfLm5nouAQq3Zeib51Nd1LyqN4JHQAYt9bGSjm7wog3",
  "key40": "Mt2UmK7A1bPK4FN7aa1pB4xrC4ZAb3BPv8CzaQSZuaNU7pj25RerABqBknDAGyHJ5s8Vov4UgyVZgCrrPY4fmYY",
  "key41": "5d5aMWfco5rqY6VSwiWcQyF564nGhCAYyXEErRtw7z5MY5DtjSq7RWbRS2FQYBCaVN5QxTpJfzkscoDJVq92tUo3",
  "key42": "2fG5ETwLwErEdCvVX5rmZztrbGpKLA44py6U4PtpTjLZhAivGh3axpQdngx543dJUShCeam4EYtPAYrQE7zkQ8EL",
  "key43": "4g9T6JfL3oak3nxSL64TGNKUVj7YeQgnhShL1yQdiBUrcprrysJbrNeD6RZF4NMZiagGqzsbvH5nGzwCDUYMs1Em",
  "key44": "2GXY55TpR1SufutXLTVgYKr25D6MShzb8caBCHJAaPrxArpx6L23iS8XvG8LFG6RyoC9cxHFB8hp1uvrK3nUDjtZ",
  "key45": "2GLCVWS1HBmpYAT8V3eoHgLTDejCg9fJa9B5ckBrogtUjiHVbyoU9zCDdbkeqHi2XiQd9eS1QZjJ9jSeuJgtJFdT",
  "key46": "31JQ36ocYQLTzM1QiKsPdKVJgMxVsGjBXBLQS4ud8vTq64YfhEqdZJ8GEr5HU2iWAsqZ5zGdft8bCrBpp8Lq39t5"
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
