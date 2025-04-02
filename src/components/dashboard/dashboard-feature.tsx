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
    "4ajk2iXwsUHBJVS1T5onuoukWMgKxsaSvKQDJP8WBnfMFexwHdbgF7QjzEXHVxmFrP2egZ3RRkNLRsJ5uNyMFYNg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hGuUgYGCgd9o9WyMVgrbw1PX2NADhYfJ5YeUkCYTThdcCVAyYxSacDZ2uVE35L1p182wWfUgB7uighDf352UUry",
  "key1": "cs9msGeVimmpXj9oBPSqvf7EeJ1pPHL6aTCqNHqNEHpLbWj3knr5C2camd6pJeHB1wXp5ZWx8nw2MF3PomPhSuq",
  "key2": "63JKhFj556ssWMqRdXHtYAdsYEnLZJdMqAwUqSHKHMUmLvKR4UN5sGz8qcGgPuCYuzJXd1epbBcFXGfsh6jzx1ax",
  "key3": "2KMyMZVWhLxxCxqMMZctwfhybgDUgGdBWgkNZD1k8GvT8LXSusmUE5ERfzd33snhgMFxkjs2hR8QWToZSFeBPxNN",
  "key4": "5at34GGCn9bAg67TBvgh82ThH1brwks8JfPSyfkhpMry84MhZovQZdU44xjUSi5f7Cg5otLak49Pkh4jAgNq7pij",
  "key5": "2d2RDHiAU7FigABMLkek3HWuiscWZcqkmRCdUTigB3v2asPAQwbPXiZijGH3yPSsqJo9UMvZeT6bk78UfYD5FmY3",
  "key6": "71wWazg4ikib8iRiD4wsX5isivD1ykDcCx4nhba81MHNJeHbbQqb8E2SBZNzTfp3ce6ZK8cnJHEK9GHPUkHRbSU",
  "key7": "2XXuUMvfdafjdP9quSDZRwSFQtMpfcoeMKPvH52MhfceFfgy8oY6949Zw7PoYHVjj8jn1fJWQempJpxuASh3aSkv",
  "key8": "2HywfVarHkERjJJ7XmnSngdouW4XAU2kvTuhXUvyfqZVmj73249UoU9MZXXxZ56FyPV399YhWJTmefCNmGqfzDFt",
  "key9": "3woYiggXwK9BR2ztSLe8rUpnp12eex1F6VCDQYYakQjJrsgajcaGXXrNrGqiUMmdU6domKvUWnRfKmMZJsLbpXFo",
  "key10": "5BtWSDatf1QSkW3thgBQ46XvXJ9Hs4dLdeGxKtPm92tYnE6oJ2AE8zhen5kCJJL788igcBoFw48cSCp1frRt8PXm",
  "key11": "3oUpLyV2fgciUhGMEAXXxDQvNHVnZPRPWuu4NGSxfkcDbVfNHpUYjG7DwppDsyUvyXjSMY5u8comfUnbGRxsQymg",
  "key12": "8nf548PdnnyZpUVD8bzA5WP6jwNnsjBfdEngKd9463VMyLwPsaHczrL3r8zEBq6JSUNWdhp3LA9ZABCjwE5u1nW",
  "key13": "3FJ7eMsbcWJsSL5FCbi4qJFVN7evmxB1AzUvjnExBx4W2VMJAyA2QG8njsFARoCnFp118yLyv1TFcDxKTar7oxxZ",
  "key14": "5h6SCAYLyJZLiLghRbrvNX8bvfEsrhDVywFZSNH5ryPohcn35DXCG2ipovzDd599GPyXzmpSJcj9YTkSMcUTNm1v",
  "key15": "5V1doPd3bCdnuUuzCvL4Q4sGQxUwtD6RuTcJ111H8v9GZyxymFw2jvL4ohELBrSS6aQkVFNKLWVWtfrdVoG4W5qN",
  "key16": "5urDuUuzu667NNqMViXyGk2JZGiaQGHG1amiUKfYExdj6XLV7nss9RWadPgaEj4nbUwb1RwgvDcgBRNyTrPC4W7q",
  "key17": "iPLPFPTPZxaTTMtsp9XGJqvDEx7qrMjJajCyQVVsSScaHrinHQ1XTH1FaANJRd2YJtCX2fZetKsq9pAbdMEi71Q",
  "key18": "yp8FUmzCzKVQriS68odPjoj8WGtJfaJbZCRURngYDHQhKwjHwkam6b2BZKq9FQsVR8f6VV7NCTTkboVi8WsbuVu",
  "key19": "iDMKFUtz5tpH4VGked9uVTfZyL18xEc26P2JwyZ9an8146c8wetyE2ZkSdvaZmFJQZR3A4LEkzT9ZMcfRyB88KX",
  "key20": "q99RivUsbo9Tq3Jw3CaaHfagMMqv45sudur9JFfw1p2cfsrYNkR4D4bNG2Gx1H8GhURSZBwnAHpCV73t6a9ieBq",
  "key21": "2nbiLp1DfBuUcpFe4gk6Q7wXM9FT2k7k2m6eMUFEi8vjnFtTMVdtefRcr2Nkzc9bwFLa7AnWcuozcURvw4jTu7s1",
  "key22": "4Gkx2LcrmtE1CUZciQFXvqRp8Cdcpsn68hPRNnMet4URgk2ifLAFEUC6vdSExKKeThGKW5atppM8viLrB2G77ihy",
  "key23": "5A5xWEuEuQiQdqLEYPcuqHB3JmvaXZd6LftVgaqweRF1Ag8qmyknL353Xv3mwiezE4r9rRXR8UUNX7QhAwWc3aot",
  "key24": "2m4bCPcnVEZZQqweW1aZLGCbN7y4fMVdWnyei9C76VjX6n1bm65QqMwtKFHdPu6syPg1gVYr9TemvUydC96inPGZ",
  "key25": "3NGYMmfh8wTeYBQa3JzSi8fyD7Anu7PQCdXyeAP5Vk1dvmtSJho6XDv3DLKBLVE79uak5WhB2wkn7tiQn7K4sC7H",
  "key26": "iPDYdJmw5HodftwMsCxkLVGakL4MWXoPqq4T8DCCxW8GgVrTDNv5P7Eu4ZJYjapZBU7UurnftKcrj4FZyj2oHWM",
  "key27": "3KEJ2fyHTHCr5Mk5ZK3hRxsThSdKuXqUVGKKaPmsdBMndNyL1EoYFJoxmiGUpXxm8CNm9WBMCm2MW94jSTzXy8F8",
  "key28": "4svDxem6n8rvVdC7arLujknWK8wZ3y3xxA1B1if2tjSUo1LVfrWJWp4o8Jvwq4Deiz9WPayCmUdPyBGGP8W5dfwY",
  "key29": "4aExfMd39fpxuqdiMwUbR2Za7Yzta5pWc2m7Sk7Kc5Bo3kpfBzkaGnknbAWGpdLMD9hAfKdSaf6f2bGPgyTWNRud",
  "key30": "32niDUNbp5pcuVSDA43JtJG15d3s6ypdAWs2swUAMsACeSowBfNjgXy78BiunFi56utGvZLeZ3bJ7HMPR1bLsEhQ",
  "key31": "3z9X6APJghVyUSfthb1J11hCi14bNzepZUGSgYJfBNo6GycnP4RfdEGuxHdzhGK89uyVHQ7n4JDtfHu1cDa6aPrW",
  "key32": "3Z9HG4829QbvAFBmCvpLqPNmyQ1mh7HMhGUWo1vWDgZ7tw9ARjJ1kT4psn3QVzh9QaZC6sGx5zC5V8V6QqD5VF1J",
  "key33": "61g4FSTagSE5cm3tNSYSjfW2xhkbp9NuvvGsM77Dnyp2ZZSw4hRzwC31QkADP2Qg6CHRrpo4pamqLsdZuq956r6p",
  "key34": "4EZX7oLMc54y1ZtHGExFLd2C2sniD1pVrux5Lg773bQVVpgi4W43CmqyLBWrexKtykNrCMxoSaHfxTJShZAcG4pA",
  "key35": "2fHWvAv2FsBRsN9XTQPZUAes3P8yHqd3HRfbAmNZz494RTpuA3VYBbgxEqoohdRzmova9AzJamabaoRC7VzwKZyF",
  "key36": "29TMr73ZQ3FAbHuRCvfT9CfNbhonJ5SktdgHcipUMkBsG5CWRSPw6GYm5rMLSMRe3RwpKGzQpt8ENquSXnjYxamb",
  "key37": "5fp1mgd65mZAFNpPeepxBgGQKNXvocs6Vm9g1gEs93iebK679zjWFzyK4KcpaZEmjU3C6vWnZEX5HKwZ17jNMx7Q",
  "key38": "47TFiFrn4Ved5DTsfh8TSiM9JszMnLULBgHqbWpdr1VgympQoMkb8dtCoS7KuS5v4WLcpg21fLaJxoPRUQhzVq1K",
  "key39": "3txxs6ju4nLjGovvkofSi5VzrU6zTD3XDgciVuo2k5hNprm7ae9sRNmkBsXK6JpkXACybAU6S4USZUK77QHpcd95",
  "key40": "5pnGP3w5bkQffkaZs2Z5Knehh5TYyZjvHycbv2v5BPWhUt9UgXZHxkUznSufLpPeQsTw4CNVrYW1w9Wz3K8E1xN6",
  "key41": "5Qm6hftujp6ZLW68kJs3q4XWrRSdT8qT6MjMtJX9sVqE7TtNBkR95qKFfHqBQsJjqNeFHHEGXquhjPqJ7X32QnPq",
  "key42": "2uUbGfxhWmvVjYcT7GqDxk55o5VpFbtcSooP41Qg6xRf48Re3fgAcreZTWf7XWmw6UdkE8WG7qsfgbkqjaa9Fydc",
  "key43": "4p8H9CvvHDoSmce7fXLAFZoeMh8ZTYjh7FJDyF3PGVuiku6ALUt9NePa7SJ9Jy5NuA6vJES2AVkm7xwDxnn6FbKL",
  "key44": "bzJ6jUMCyYWn8qTbkuxYYEgZPeg6cuA5VdRZPHSKc8KUVRJskeAvYFvDHwKR8VuBQfoLu4TP8Xb7VB9mVNPfCR2",
  "key45": "4FJ548oiFsSVVuQ9uBZE5fJFcu3yoSSQfmALFhthqbTx89XXaMtcTk1Z53BaiS6YPeg6j6G9qhBvEo5cXg2aG8ip",
  "key46": "2118A8XfnxWkktHEJ1QoDs9G3vQzvEEs5hJhYC18qaRXbHhCTjov4bWZvf5xdw8ZSzuMWxk6sqY5UsmFUNndyHa2"
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
