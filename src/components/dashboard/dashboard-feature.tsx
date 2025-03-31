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
    "gpdy5Hrp9yYoEEREAGAzcGbMkRAKdPNiHUPkxAcoTs9StyKPMibvTazMAHtj1qpD1oYSuprJUrcHoXCf7Zm66Rf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6yncAXNih5tGbeCtadkCKh9PjzbHr8bcmjmZuu9fYtpXAEvKdCmi14ZmEBjtCBdPPUVFXysyxKDnY6MRsVKPx8j",
  "key1": "5m6SztRjEW2SrEuBp6p4rHnfaNLmFX7ZeYnvFj7WEWXrfkH3yMhzZPtRBKNyoeHdBQ1wMdf2pixnagKZHDN3G5t3",
  "key2": "3BHFFFDNUHaJoJcK9mmo1BGpnB9S9mbzfAWUkJYvbSYnZYF8SdKkWmoDPRyVT2RxYiuMYPum8jhYywHM5iHzkPEB",
  "key3": "4DLfHBcu2AHaM3iwootaB3b5e5xLQxcJb13npaUVi3Qdc2V8XuN6vjJptRbds5SY1Cw2DUiUJN8mDmw7KhFxfuZo",
  "key4": "3oqTEUQM38FVhoTtepm4KgjHB9P7qcjX5TwnQE2a42h7t5ZVWpcWxFxHMoLMkDMYNE6HL6gFNdRxEYj9sYZfKNMf",
  "key5": "2ZTYfhgPTVfzb8mUToSPmWCMFoiCX2nbAmyeU7CHrcdpmmjNszpUGJEyVmZKRUagoQ5gzA7xhDkrvq1exHMAEtck",
  "key6": "vxUx4pn49JX9CEigejaeRnjfNtB6A6RR64BLb1FjjKHLju8KKJwCHZLcSTFM57xQCJwquokWxhUtFggeMnJ6Vra",
  "key7": "61F7jYwUFheAFy4xAUZyhtwf27kNzPKkAPYnRnTfZ9fyWB4gE8LvibZcbFqWmRrXZHYsgtZCYZcehSLLCdR2fG4k",
  "key8": "6pjRih78zGYYVao9PTPLztoiLLf6SPx1hUFcDvLjqmngHhGUQwse5VRuZgQ12DYRdtiaReThRDHRKc5jPadzw1A",
  "key9": "3wEFxS8PRyd8mUYqhV9f5SP3YeKziTCioptF5YMW4VYwairU8BkAS8LDfM1MMpM6fEfFR7s3atLyxHCZFTcD9a8S",
  "key10": "3J7srASHDT8eveMLmpxBcbiDiKGv869D9BZDsHoftygWh7755te25VmiDXxJDbQp22ZypWbrFpMLCgJqRbr6Lf5g",
  "key11": "bDcH9j6tLHnv3dngJTkjtou5n5FvXddbXTNKxLPj5CHoxuwQxt9qRskW75qWUxkt4DGc1QDmy5cs9yTozbg7rdJ",
  "key12": "2LnQFbUus85k1NUGYtH9FHRNoqGgcaU4zAcZKFStZ34GGqybQrVvyT85trEie6Lhm4HepXq1Hdsps9pW4v196xQu",
  "key13": "4ixFr4aTG8hCHmrbPwXg4DFsyxHCZmsmqvjwxZ2mPxJMB789WtgtWdZwAqs7za21PLX2MLGNYyoDx7UUm45QCGax",
  "key14": "5W8BwyPcHqMjPKTiYRg7bJL1RM4McCKRWQAmWUEJA898tC3BqrpQXhuNLJSnQjHteexg2YnAQiSGGsVmSdq5ScSB",
  "key15": "2KSEBW962g2Tzi8g7mxArjwbgtCWT1veSwLhEaJnacGUZM2LnRosYY4vFaLq8zaAtVasCppjR6bfWjp3FEwJn78B",
  "key16": "2f86QN942RrDzzAn2sVhvtt92ZdGByti1vL2snra1Wo6kFVdsnvk55jfLJ6fb8JLVW1mF4w16gf1r4NXXFpwGVPS",
  "key17": "4XqjQm7qUYtYHmYQKjGgn4afNGpnHyhhHbuepGTbUbkc5knWCbt5sv5xZMZGnyJt9wYGduMWaqYmP9uUDRQvvGx1",
  "key18": "3zgG1agJgoK87AxM8babez8uvaphvYWKQXnwm8wrTtME4are7bh7aWuDmRCR7vFK5PYucwKEXQ6vQQKAXiZ9VRZw",
  "key19": "5cUcdpXQL3HK6AVW6nM13JHJihLh322jChsSXENM4TqHkdTnmbvqmjkbMFr8uEsm4P8DV1ZoLfBSLKhTdDWBWrkA",
  "key20": "4CfPAjwZ4doHuUrXGiAgrqmiUc5LpViWkvytHArkZKm963TkGhRecdprNYdj86Btw6Zkhqgf8q1nH6Frvu6x8bHY",
  "key21": "4DejAAVWqSXhD7KG6Y9dNhx3po3QciUcUJdvwDetuYLPuSeTnWaWey2sgWFhN5fXXhvW6ntCKEDsZP1k3v5rJRo7",
  "key22": "3XC2YWXcCzaPJvPzJivFpCmJSCPEHubRyCRcdoh2fezE9RrPXwhWTAw2HnR8kWLt52Wr66Way7FiRYFiRyA4YCiK",
  "key23": "4CM9GB3xXFUa21J9gtrj7x8oLKxuPjNyrTdUB1pd2tZachwMqrMcScosSPSTXrJ2avCALStsC9rJWrD9xFXNZQi3",
  "key24": "5Z1YmWcK4zR39fySdSGpyTfQzzzEYsQRAwzdWKZUmQ4tTTxYwB23cok2CnFWuDsoHaGbgNcnzgnXSKKAunjiq4VB",
  "key25": "oSK1CxXFSn1qjrkFS6yY5pAbc1jvzMoe3ZY9eoDSnjpTxAek5WyjeqqLRPuhKTeMhxEvLBRCYVx7sQZTzvETExF",
  "key26": "5iAhQ4q3QVcEAAzZ2kHRp63dDrov3dgYFsCwKRYfWp92wTJASGwsaeAtQ98PNoYdbsjhE2cVoKBnez6knaaKK2Hq",
  "key27": "37mL96f7Bx3oyTAy5iW1vupbGTsnPukuStJsBTzGKgA5tDrKPKscwDCLFtyHXA1SKFVgqgPmdbeXDHnYpNChBH3F",
  "key28": "62Esjm27NseciF7UBSRes53uySri8PqsqPjoK6EYMBsFPjpozMLcoMDapUuPAmHkuc7yjvijLvdzJ7KXBDSZ28oF",
  "key29": "43jF6f6kbd95XmMAFmnRBNszerXr1cx9G8AQjT4kqgwZXY1x8BMWXgzLM89z2xpj2hoUrChMnL5BpXTBxAyo3rzC",
  "key30": "2e7DeGvZoLF7LMttqFvw9vt5jerf4Y52koCkiVaN87WxBmRzuvXGtmMwx8iFmAFHE5EXaXnYvcRSiot6ysdMYxuE",
  "key31": "bryYDgXsnnkXa7jrX6TkjdvPXtMXNj3rjBUzbRVeECcgxUasb6YSPmoWR8WFrSDfgtMBEuHymUTq5NzwMEVYs9w",
  "key32": "LH21cYjkRTyNHYyK8pUwqRWAN11tHygMFuDssAopBZwPbMwDWRzjG1HzxudUkWmmorGxGgtRQv8JTccZTC4fuMb",
  "key33": "47wowmxcaq84sUs8WFDyQv9L8kAfvagvtgtbqVCpNLXqcXn8m9q8xpT5iSSfBvz22VdmSJnx59JvgiGCUVyvxkrE",
  "key34": "4jynF7zGug7Pi8LhErLDc3iBQ9UcmR8YmvSRYJabEhmihPYy9YYUeYirnyhfeMqLjCWpqEg4JQNv9nE79X2MLjdA",
  "key35": "4yMcgCPvaNvH4FDFQ44Pu5Y3gd247gqwNGHHCUbxHUK6QiCZ83YEvmYiRnZLxbGz2TbEyvJKLxifN9rF4SgwxD4m",
  "key36": "2A1F3hD5SfS1KdeHYuTiqCsfNbX3MVLLJiC1sKUEhLKzBjatZQpVR3iT7LXMD8zhXMMf6ZPGo7kockhBLot2BVUV",
  "key37": "gtVnUFWEquUEQfn2dwfPh5JWHJbftmPz7ZWput7t5XvR1fqbg76gwuQTuv9f6mPTBbwHJV8mhxx2tCFdGBQvQPB",
  "key38": "5CMjkqv3HJzzPrRFykfvnfNcrGpgDhXMkR3yrcupbW1DkQTL4SedhL7rkQKHYXWV5TECYtvhAd6jByipKUxtuBYX",
  "key39": "5sYGuVci1oemH52kJ4Qai9m3bjtSqVL1P9u5cy6pXR2rdwBY7csQdiDuViWabfqBTiHooyMYEq26FBjHXRp3uYJG",
  "key40": "4fZQvTYoBwxYfte8Knz3nrG9iqzc1nEjZSABJBchhhMHvkneNvKR44GT4wyMirNJatBgzFopsR4tMZg2RYzrXDYV",
  "key41": "2k4gNXqdkLtsvUMH3wBwfJaN3hxbtqd3wycJkFkWcE96gMGZJLbKnAPpgyfjG33UUoSGBa3xp9wdymnXdgjKxiBQ",
  "key42": "7fGJP5FWsoChU5taJ2zr2SkU3zyq94Cv2gPRtBQo1gfRV4doSN91VSUWdEi2aspmqhKxS3LBzPNUgq5VJSgf8zz",
  "key43": "41n6pTRZUzmS5yW8cA8AL12R4qgF1PPSh2Ve3BUz5xr2Znri39p3hUuyPgQHyapATjWvfRmCkLU6mcBfrB6Wnae6",
  "key44": "36FoNQzVzGiHMPfkbt9AauteK6RAqR9p95LGx4Qa1LDyxWdRgcrzen5tKPxwR5fmkSrhYq8XsyZNHxz7bmXFNMMP",
  "key45": "5rH7GnEVC3p7anUFh7XN2L4wYet7f4xsiH9wttgu18gfFbnVbV2Kwa3Ke1Sf3viH1vLq6sbqbudfhdAJQK7jH4nW",
  "key46": "2JXnkZ4AxgDdKQMLX5BaFJLdhR6XH5wjJSBsshrCfrEWHzrSVG1vwtrTa9nJjGWHzgHuFGG1S5ZVsjvKFxPu2c9y",
  "key47": "3HVNfH3NZuTkkk8zmFyTt63gizdwVhsXaZvZXMNMHvLFikRzU7TJxE7pLw9SGhEjFxTAsDKN8Hym88wdDkuP9Ete"
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
