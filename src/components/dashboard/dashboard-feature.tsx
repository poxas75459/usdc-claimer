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
    "3VhrNcN5xpNgN5icmwjUeWFcbmww7F4ZLcJeY6zBCdvHunXgU3TBGHtHAaxsGw4S4nsYcvSWpGAYvR7bbfLgV9b3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A8DqZS1AQ995YzRGm4TGVFxA9sbmjy9VLY72Pmq6MY5Xj9orYk6QLqkLiFaCNno2oUqsCDFoWkRgrxNcQ5foQMy",
  "key1": "4LiNUVRQVL9wM54ciaWSsA3vBs4nLRhStCjb1NtGNuLDjBsZsStDXBzBcStGXYPvBHehun2YUAAHayr4ZN8dAcqS",
  "key2": "3R5UJqB4rEHdMhVMeiSkYWJx7Tuk6iHqedzV9Yeoy5gQwqZWiMUKNFG26G1sMQAmvdhjRiyU4VZUKqeykNKWYMfb",
  "key3": "Dn4P3fPCnWRMjLi9Jk16EfZdvJDLtVxwfVMKRnM9WK9Kk26rLBtsqCD5r4iTEDGymui49ui1HuRYKMr9YoVHzYj",
  "key4": "2qj7FT41yVcAGBFLPdHhQFQBXwdgjCxDhobuQKpd5rBppLxyZJrkrT3XJfy9dZDC21xsuLFMYrnxQrmgpDS7Criq",
  "key5": "5k4nxpMVyi4CEmecivLRujibn7dvkFuycTbFfFPZXQT8hRwJBmBKAKZog4g5arWquMcZFS9HNQip1VC6GVmJdNaN",
  "key6": "5wSEcBvJYFXSr6T5j8SRh4uTzZRLzfQ1CcwyyUwpPd5CmVTZu6ixGLtDUqpEaF9EtDj2HY6Trc5Rd68FvAMUbDep",
  "key7": "QdcWpSPcUZQx6hnGpfU5pkMbUVeHBKn8YFSg54bX3ovPvdpzh3rQTjmk9HCZeuCKhNKEqGQk2hfeNQRZT7PJ82J",
  "key8": "4jVHKya9HPWUNddVxJpM8ZovTvjPHghwV4FB9rGL9JB6GfJPApCgisgqFySZDn3QC8wVMCa7e5fRJs5XHhEMhuYr",
  "key9": "3xBovUxzcAmYNMnCef1boz34RinPWPHHEW6A56ayYbNZEw4BTkxjuy6A9mzNJsSWuk4PyqBjbBqbgr222y26NpkL",
  "key10": "xLft7eJDLTqSqcHDbxBSnvDbhgtfRxvXHGv3J9QE7DMjXreXzYbnRbjTCsKxGNQKZBxHrvSASq8thGrnKpqCCp8",
  "key11": "3XmdjpPy9w6yXEK74Y6uBJx29KNozoswseuw1kvmHP91Ggh7VRu4ui7AgnsKQSCSsXqh8oftajFNQjZv2NiJE4Vs",
  "key12": "3C9SBJu7N7FnDskmYU7nuca5AhrCfNioKKVpa7fksoH2mjnqJmc1T9WYKFiF1UUHpiDPtt5J7bRwxHeymJ8WNKDS",
  "key13": "3FRaRhMqTx62TfzAvjLs5xEBRXAAWVQR4tEHuKJLquZGSckAZFZWuZqZcinMht17AJu4zZBJsgBpbBHKSkFRGXSH",
  "key14": "3BaEYC3qh1ebPZtsiaSPybdHxYXi6MvF7bMoKq4xiMJrhzQcFiEZ6e4YuqFwNYz87knfGtmkFU2TsDnVSkueFi8z",
  "key15": "4f6f1MCbuham9w4RuoTDVrnyjPEf5uya89JtQ2SnqRen2NzWX1wUk5yHzgMdpuoLZiC3Sm9a8bhSVDkJJ5ocHxUH",
  "key16": "62hYEKFY6kZDhq66NCnkpWrvh8vearaavfUvXQEPj6DC2QbzVyUiQPXxpKzhjERsTtFmVoHPCsRa3E3Z8ep4Sap1",
  "key17": "2mPcyV3T4hbHeVthku6v8Ar3qu8v1R1g7drwK9315rvHxrg5zeUEEYfJgSqo7FMsSq5p6AXUCfmpvNJxwLM5Xgnn",
  "key18": "2PE3gT6QYb4XpQCyy4WRGERMgzLqMA5ioEDTLPB13zPEgNUMppJFQ8PvFZ7s55S4ZYbPFf5Jh3EzR9xHGWNc5wLk",
  "key19": "5KxC9E6pKDMdiyURcafdTx3ZvQZxG9oKob9fhuhuq4bEYznt9kFgeuBWCoYTnTJNBWg5jNFXoRUsMobcoX8BbMd7",
  "key20": "5WSUknBeuepFV25rXWT7hPVu5YZdbaVFKnrpfSYh6ruNSeRtA4KGnq2XtMY2DM9oSYWW1i3om7p4E3ipHHwwdA7d",
  "key21": "2Yr71sJByzK1kzG3QMR9ys3y6bpbizRsmS65YPGP4PJGnqYfZohS17sWdxenUnW8VgHovbRdnXyb9W66jCMa2bG9",
  "key22": "37L2F888M4sEXAsjS8LDfo8co7S6uAtMiEfJZMf5dmxJkF8Zzc1NEm9p9u6F7XXFQ2c5PokN3Z7oCk9B6E8KpfmT",
  "key23": "bmkY2zGx7fpczNCfEoJXzGUdDSWRPunQFUzN1F7kimVijap8VEvZbKNenynG8gCYwaAWcU3hcBaGihtTVo9RW7E",
  "key24": "5iY5eiQzCac2kf1Yy7Ki5ZiUqm7FjAsPibRdyWuJk1zUe7jsbhsLWXjgwrDksnQNCYLhhkCTJaT6HbgTLHN1cQPH",
  "key25": "51tMzvqeRpejBJuX9gxjTvbFgRsYXHe5MJRL7gg65acd5e1AVvNYRWVEttqXjSTg6GuL21hXHPxnYuoC6M7u4xis",
  "key26": "2WreNCxyFSQ9kR1VURYgm7CfcQbFZVvwpLDssrGBGUcryJSaTyfb3gmzvBZU8jchre1Hy7piUVgkf4M14odqfUsD",
  "key27": "579kZwMc2AWucM7qau4zKPcVfh1LJ143fbZgdaVq5b8yFHzcvAsR9fuKoPGiXco8GF1L4gjqvmJMcftkcxL6CF2F",
  "key28": "59ubzgpE6RSFn4LiGRwu19YrUoKezZmaZxy1v5RMkbw1Y3JP9MLQmRern842T65UYfAsR2sXGACfsSNjy5vh73Lm",
  "key29": "4S1Keqbx5AXmP4pk3eJvqESM6Dje1PSsMwooGMpH3We8M4BZucrZ1HmJUFtVyy9zzPPCbs15q1W2bPkYN5KVkeoc",
  "key30": "518yRpF2iKaLDZ7TgQmiPepLPse4sCCRJpAXEgDoPZyfMuvzxM78pLqsL27v2kEWk6j6o2o8M2a9dNuH435BDTBF",
  "key31": "23psgbyQZQBkcxhhzTKbUy6r6ki3Qrj1qngrUN5YQzz1qAd1nkBkxUrhHqAcWBrwnbw87gydNrtejahpxNGvFsC7",
  "key32": "34ETLxHpmfGxGdyGsFwEtvxvM6uMtJd5RAATGsK4UrjtE6cgtE63nJKPEtxF5xikQKPZR4oTLPk5P25SS7ZVUSrc",
  "key33": "3MCMdsZQnmksc1FLrKsdtN7v9auWbbgPj3K718JQj7pgzo2vFPV7GLAuqu4rH3wy8UAKweUS7Lx1YAREYRgSULHh",
  "key34": "4GgHGAd1DC39W5TA8SyivmG4QzuFgayiN9LNf5oQDApkRDBHMMerXJMaDDF2SjmSKaeHERBwyhKxxBi7saXQrnHU",
  "key35": "5XstyccWkRZ6E8Gk7BsM7W2cxsirX5iqw2t7ZpUezx4j646YsYW3ujDntBnFL17aho4gvzygDuBWTWXUipTkYKfK",
  "key36": "46rhSmyAeomBGdZTzrTMZPxsYqJNBwNVvy8BWntiRpFgWoai6USQ6nzc3xZnCVmseMczEHCNFGCkDNq7GwbAArLt",
  "key37": "c6JbkP8PGPfLPL411veaAUg3shGH8mec3LUAnp3YQFchK98PgKi9oyfqRC51eJB6HDszQ9uWUSiYc4AzT2AfkgN",
  "key38": "4JjP8eqU9ztqqXGCE7AiVvVUbZwgHUrdLcQSELbUGzMERAqv6Wjo142Q3Mmywtxrg55mNtAAYBR4sZTPW37EqDYR",
  "key39": "53YrUwrVhj8t48uVfe4BqBcHDujCEiZJZoM4exJvPGV1wBKzsj8pn7Zi3H9ary3uMqsEN1dfseDDhE81hUdNmgvW"
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
