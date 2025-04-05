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
    "2dBQH37ghPxpFHVpZrB6wAUH8yxc52XiYPUtEcVQ8z8c6gRF7nHf9UDsFKqBXbvUtdEiYU3PbwVxVEK5r7qGiHqs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KkXSZgrYNQmb2qpmuJRkwuNjt8N7L9xeYiRMyCdnYy7CsZJxpwVFTdwoekEPSiBRHUagK5Y2XarTjUYL5QcgFtN",
  "key1": "3oPUsM8sTfmAz5EpPLqt7qUggXZikTVFnvVTSz4B1aovqHUjQP9F9efcaAu17QiLQ6kZ8sgPS8NRtbGy97NUJPrn",
  "key2": "3w4W1bjzEhzAsGUjiESa3ztrWuGWvWvP6ViPdZ1NntrZgo9unnLhF2qpWh55VwR24huh7wLQ1kJTwz4yXCZv9325",
  "key3": "5mb1TuyLa3xU52W58XVCmvSsRkr7ZLUnEGk9etJKXPxDMozoghhc4ZfJgyRwe4aHQTXcUvGv45NRLzFQqsttuB9w",
  "key4": "2fdqQLMhTdpkXKTc336AZ3kGHr5GYpKax6MLDK9yhEHv6itqYZqxHXZY9VQjPdAMRUdvptshYJj3SCANarc69DZP",
  "key5": "5BHq3F4Zd3rR3Q43NSMpz3UMYKmJ79aCFub8jSuVkg3Q8tr8dyQp1EPJcrPJCmcTEo9zRLnDvtpbxZS55hk8VuxL",
  "key6": "52Cf6hwi1m9E1K5zpbsi2CieCdyqKnLWtJF4BUDEz4AVtn4ooTSGgiC6DgN1amqw9tK2zr8NdprwejiVfhvN26v1",
  "key7": "ReiRVcfYK7S5Ur1Tq73GW7fYV2aUkA4QbEKddqixvGfQuJmdfTsxRDC4kqv2RsJi6dpu5PjyeVkwrZcBZ5ebUNK",
  "key8": "258D5Cc2uDphdwVDujVaJJZvaVn5QjjyBUkrL2eeADiCAqiq2WshZeBqpytCAx6AcB8bb9ZtahEEeMLt8iuDcbpk",
  "key9": "4ksu4sZfMbSxFLssbWszZDNaz4M4YCMnbqJbaRhGidT5BVPeTuvGSx9Mc4jJcC5wEztXqDBCTSkJ2rKdQ5rK3CUH",
  "key10": "4Ru9gapC9kUaiHgbKbDYWwX4VyDegK9TsmZ7pVmvZhv87ouo7eURzFEW8NrLLMKvMKvNzixXH2D3Sqs2SXxRrhRx",
  "key11": "eRoq6TbGqQ61RHgZaq76me1Lq7AUVPMFDjWPpd7zHGao6KJu435BRGubkE7CAoLoLnxZHJHzM2H4jaq5Dqupxog",
  "key12": "3MvcV9Ryn53KFC5E2oPnsozS2Tdwx1pfYr3HshTuNjN1uFf6NLaLoE6euMg7TGXBQVMA9doJWRKHDNCUfUsBS37Z",
  "key13": "rhntASz2aDJMWP37UdoxKcrRBFYDkFMhfsGKsXN41bN9wDK7MiwEa5nEpAaEbpY16oVUmEPCXaiz1p97bJdHSz4",
  "key14": "127b5YbEkq6Ua7ZCnwnuchiWaWbpCGBoNvUZVocqQeNdbPHrVAMRSdr9d8kE26hUcp8eXkWE88uuf2xECNZdcAKu",
  "key15": "3TysM8oRVMWXzCN91DiKnNKWEXM9j5UxRAmDrVZ26Ywywb2vCXKPPAvanTJiMjBZhXSzZTAx2FPAZMTs1dz1jgnu",
  "key16": "5CVwd44uZaa5Fk4H7i7n5SN8hBnPhPw3Yhf79LtpiUQP4jPS47bhMDTdMC8MJ7TTwHBqsTSDVgHFT7KggzcXHexN",
  "key17": "3wmtH9fWCbMcyDFXjBrmbDv6rtPLYWVzzDkpvv7AHJuXG4oRyNk1mwsgqwY9aRQSGTfKiSTQDZLdyNSZpbLqBrL",
  "key18": "5rXUgKeWj4K4LMdFV8wcJaRSkacCA8vMFrA32BWKJVSX3v4ATKLQwEiZ7sHFmRqh8D8kh6ezo5m1BjTW8uRfF7Ym",
  "key19": "3v25fpPWpsjLLxpQcTiJtgxLHsbXx1VUczWaP1ADMEjEnVtR7PZwxjrbaPEMMtWAGoyHYyLNDovKFijwdNDcABoJ",
  "key20": "4jGtCGJcwQC9CYQApGwoCmb4nkpWZy29ZRWqYCHj4YXZwkVGoZGW4hUnpFrJ4KLBWQyZAKGERDUxDo6SwoRkWXRS",
  "key21": "4KpV687JCvVN22CzZTBbv2E6B6hrhptKCbfkKt5jgE7d4NsMhjpAuV51b5aLNyd9AvJEmVfbEBoZML3cwgdAo8VG",
  "key22": "3HAZfD4zgz8NqTD5KWPG1E77Zs6ZW5A6ZXo9oPCa2pbK2h12vHkiNNEg9Gkq6KUMRkQu12Jd3Y1ppwAQTBVLdeZG",
  "key23": "2C2F2aYCM5mccoiFYN8DzRKJGsZ4y4gvECfEc4qMtmXtnnmDTQvRnyMi4yqpfrDBegRmRNUwSkK4yaSPDs3m1TEg",
  "key24": "28TahbHmKjZ9xC2BB8pqEtUssjQsD8GkBUMe3KTwDVmM2NLBwLxKQTCgT5KGA35bJqYEavjo4iWQ7pwawgbcTy9N",
  "key25": "zj6Rieb6aeFF8z7iQ5MrNi6HqFte8z6D2XoeXTaPiPkWZjd4p7DCf2ceisALRbfhTrHvoL3ptxiL5dn1qFVL6GZ",
  "key26": "2tbzdsYm4LDeDNpA3AdrhogJcDMZBCkFnQ4jeYpsYkd3UbWNae2ao9tiU9vFmsPqYLFUUiM35v13hvrHDY4T1EaP",
  "key27": "2Yxk9ndcjnLJP2ScuBZLzBT15apqzS8tuRdZLk5ELKuecyghzSZTMcn2Drqoy3ztsd5yGSWRMEALCmVxqq9DTNwz",
  "key28": "3wVyQvzvz2zfaLT1piafGwTuR8Qa7jAE8BB3DoKcW913sWL4HGYK2eXgXkL9JYkygaYYzKFwMqZUDvgkMna7r2hS",
  "key29": "4v3QYxXDhYweviDieWn6MUDMJVo6cgJuyd7U9uBNTzzcy8Uh21TjxmbfT1zorzG55qXjuywdPMwoRrntZexa3aR",
  "key30": "5fWTxxrMMjk7aQRKEAefoRecZBSx1oVMGhGAnbs6To8pfyuid4MdpMqr5s95jJ5aDyC7ygAG8NQL6wTSKxVvXJPW",
  "key31": "3xjCAifcSgUGwm3tVjmN9WLGpt9oYdSydnxqbVvNZBPq3YmranDf9YMc39Cgm7KhSJ6taLmrEyKJvqbhZw1A1Xd6",
  "key32": "51PJyTJCwqeBPPF9f1Z8qT9e4gRgbHJo6F9pWhmfWpGneUrZD99QccXEPSYEf6EhqLmeZuUvFCnsgPb2eJ8Kb55m",
  "key33": "4LKs8wtMj3VgnnNbkjVGtVQxsRh6t7Lif7ZrH4NWenhdwCd7TZcdn8YZcwANSsxHs3rwoerZpZTY3yLdmhiEFfsR",
  "key34": "ySk9XAb5mZwkKThfjZFfWQr1gzqtXfLYK5pqxEQeaHqt8kLYKrAR8wvfZTyc1ZnXpH6qf8VTTsWs3konftLHitj",
  "key35": "3wj7aKhPjkDLYvgs2PcSGDdNy51TnxJq29c3c6gKCE4o319HPkcF9uvzwL6jkF6Wk3RmqTKNtDhV3gBbb7s6iC7D",
  "key36": "4m2PWbR9NcMu5FWx2WpSr3W4DVZrdQ6YbtfgpGgktjBjh4nqNpvE1sS88ktALLapFRZjBJGQnEMk5qqcWyLT4HKn",
  "key37": "4NE3kbb5miytWBGfPyzAasQ8AYj17SAig38uLfmH4NpGueq7qh9pVb5Locm9sibhDaJyRnkc9Jr5NdvdKksbbCU",
  "key38": "2f3pjtDfMP9z9bJ4FHYuZcHokLUzLuRJGgybdHdN5xihwvcfkA4QZbnfs2Kh8boB5BybVFi9FGMzyoaEV2SiZ8GT",
  "key39": "5L4Zaig4Ep5aBZWmMvDEBgQsCnhyFA3R1ab4px3yJytovEuuvR8ugPeowmH9yTjxZj9MVRWpJdnkDQmR1efrQawJ",
  "key40": "3SNdTATzZeUbUb2E4n2NaccxjUewUBXoRE5ZHKD3PGuzHYAFm23H9F2djLwQjL7hi9EnQ5rbLNNm4FZtXzMWQaSX",
  "key41": "4Sz3aUhF6F9hVu44QQhXqDgfuWE4JijxMnCzXWJHmQGY5CiCQqpuX1wSCWnBxcSPbjdkypRxnrPSZDLpvMnkKGB4",
  "key42": "3Fbuxg4vWYKSJhyMjLg9HzBxKU1z2DyS91poUtSZotPHVEEsmoN6sEw4FdL6Dy62uDBskXAJzL2scojJiA19AkC1",
  "key43": "5UmS6SGmegbHHLx6ManMiA9CHge7xdkQAfmZS9etrmwzYyWqAsGeZ3LmXEXN3Mnjs5ZJycPvUjsTpTXsX7gp5viv"
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
