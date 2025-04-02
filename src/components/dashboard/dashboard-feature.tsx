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
    "2LMLP3TsLymn6336bSyk4hPmG4mDQptJKZYKjuNynsqCGNLPpwGg3gUV7EBnHoqqq6EVusjcmDbRgtvtwUg7sKHn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aZApprjt1ydaAkhcQBeuUuLeuPxtUJEGD8QNqTDid7ZmrmDFXyAsASrJzPUjthYzmNZBngUzj5SxwGmQDRzsvqh",
  "key1": "3d5zUWC2ikKBEpsurft4PQDa597JpCzqvv1GsoEQ2hESkkDRwKYQSX35jysejVeXxUc7BGtA2ZLm2SL62tSGqNrp",
  "key2": "5QsMK8prMxwL77xnSVPysbmUJTQyKxGgaPZSFYpq4ADNPUido4quB8ud5kJ5r8viXBjZ5gmndH2v8GdEkGcwKm3d",
  "key3": "2eQbzXBMPmbBQtUFJ6eJcei2KWCozQuzfVoMarUkNBPCFVjE1p1JdJoNMWu1izHNAMdKMmnwyvewLvd2RWonHF2j",
  "key4": "34zhEhsSY63pNpJH5eCVEPNKhUrqVMW4iFnn4rbnpKcFKuYxZTyuxtBnvUAiymbYuqXDR2tkaenDbBXkGZ9imN4v",
  "key5": "5n9bQBM1qdJz5FkxHW35182VSsftHassJoN3TtQwZ9v4syJGsbSA92GmsjyUd5a4jvyV6oCTs5CTSwfjZpJiDzss",
  "key6": "5RrV4mbq6Czo3EXH5K7USmvH94zc9rvwKe1Qkb14Mgfvxhbo5AaW6ZWARqsoRjQZfQJrMe7h6BEMJZRrYseWJJSp",
  "key7": "5k6MXwBGSWigp7yGF4Asmcgu4X49ez2hSSM8YrLFb2UYCrfd3kYeDmi55EWYkoKBPDVTQXTNbngGHnqvqTmcCWBf",
  "key8": "368G29BSYw3sLv6vVZWXD1GVkxcVpKnVK1aWjNMAieM2is38hzbtr2dwK9pY4k49ppQoLMdYFjP4xoL71A5ymPML",
  "key9": "3RPwKbuCKyEC1rxfFvXtPeAuaFLk1HS4mDcuZqUTP6xLSuryceyVJWtsrAV7EKysmAAU9QLRKAw2xkoK2KRLcWdo",
  "key10": "xXoKqJQdtQFu9mFREqFpfAw61fBSZLqQkD95Q2frzspRuvP7j1aqbzEgtZoBbz98862ZGCP6y2PN3y5G4RtZcXE",
  "key11": "kzgk7idsnhUvTE9HREDSp1YsVyeueGCP5u6XnyVFkrnU4SyAq3f6bUAZV83tXKPMwzZ9aonZPKL6Grc1rRbSDNg",
  "key12": "2eYQDpPZzwT11ZyevRzHGHeTA9MUZNUYCEoZwABs7FA52RgrmZerSmG6apV8kBBsuKAc8Xvr6tsZpGgwomtNgQEe",
  "key13": "57LaXmbUVoai7Xt28T5HGVBEBE654LiTFFuKbSSEgSuMR6VEqoe6qy1e3qyMajgtTGuUY6S7BJ5yh5d9cs2Jpx44",
  "key14": "5wdo9Gx5wBDMkGjZzHvwRSBLCFd8HCJJSbPBdWPrgoAhNrWPyebGUfuNaq2R56iEw8aCreHQWsnCHLRV2NANumK8",
  "key15": "3nYbKidTvp9SFE4pnscaj9QGsyHE9gD8ZVttrksvSiEFWNygixd8NEtSEJCggHuJ1XtMawmqYWtyfrb6tYVrkJpN",
  "key16": "5fHGeqmsjHVwXpQxXrTRNVmL43VXKhV8EWT4KCZT9fxot39wcdf3YcZNaBPVYPD88MetuX7R9ECNbRcwtSLdmirg",
  "key17": "5XkKy48j7zRhbkHtagm3NxqutFHz8hYtBXSfyUr1UR7wAaV1fBe1jNcEmDKoB7RRUKXqhYTHJyHWh53B69AMXYA7",
  "key18": "4HD8FTZSeKXavTKMHbCDfTUYYVd4bHMSQ1CvnacJBsXmXYdNFf7xzuDKhx27NozyfaTLPCJZ3bPt7Z443N8DC83x",
  "key19": "4M66XEimRx3B2EDx3CmnmyP3rRUwsPZfits5HrTCwaJ7vdu6Hq1Uxh6Nynzm8DKZgttoPurvXCD3gtKhjepxJvcs",
  "key20": "W9vVaswZqecDLjw1p8iYs7iiaR7iRNpzpwAcasb1yiBPdVjuL5GN86hxbw7NRYReS36noN7QK85YXgJsuu38L44",
  "key21": "4ZUWadJCvUGRM382oDWrVR7Y2SkddLE43fc56Aw1xraXVtFrNUZev8WxYeS1GZnYKmMyChZuMisuWAhjD2mWfqSD",
  "key22": "3guR87mKi3kNGnoqQc9HdGfxkD75Ud7UuYk8cBU2n9Pb2oYuznJLzTjY3zeFdzXZNg5gzKm2U7rFHzDbZbABW2Te",
  "key23": "5YCkjSzCPHMTLKhVo1cBsGREWPZ3QefMiBtpwrt6mRQJottZGdGf9bfkchqE6G5Fra74i8B41TTFPopjtLcoDzeK",
  "key24": "4CnJMMm9fCruT1DuPUbvDedRiTv2g5K7syvBLiA25JBk4qeLBQsxc2imdVgyovA6Vb2GeL4CVjmW2M9Zjs2w9nf6",
  "key25": "2393VwDLBr7a6vHPzCrm2kwQ6hTCGStLhdfSZkHU1LPgxVGS1QWvsh9SbBUX4EmTUHTghCozfxEpMXBMJ4K2PnSX",
  "key26": "5LLLcbL97oxfsJoh5aJ7HSMwzG8KhWJ2zSSAwwRxg779ytTm44eAq9tqQkotRfx94VvooixWxxwf9jBZV7dG6qKg",
  "key27": "2A3noRCU4qNVzHMjEiTgQC1DHU16BfhftBiMPvhXLRqRFZERBUYUBH3MYTs2ekfRxuV76PgkcByYM7jermZWeN5u",
  "key28": "5eNkVL5558Vg9xhFPEHbo6KQGKoPenoURt59Jt5ezedbmkei4GMwmG9uuuLKHt3bCdQ236BrZdtsAa1wyG66BcnA",
  "key29": "3Pd7JJBbU4ZBgh7iJnnvYQsVhsNk7mPefTc23AEdy8M7tV7eV7BRVurCtz8mFV6w4E6jDxT76TdNrs9pruvMF3hR",
  "key30": "5iU4dJiWs3GS1RHRfgMJGMCjngXwsWYhG61grTcPdnqN4NRkro9cbBSCruTsH52kSyXt5jHQFtbPYBruy12REHcn",
  "key31": "5B9UfcJy4LohFYMAdbG3KXRHrKr7mkLsmmk735nDxoqnC4me93RTs9J7NiTSyayxwWnZ7iBrV3tV97S23QsMcVBm",
  "key32": "DKdpCv6FR5LAMA4joxVTchpjFi9jKYaQ2GBbYnBdprHTHFC3DZPkpdCdiqo9a3WwGXFg5MPw7ygKy8WCT57RLiY",
  "key33": "3n6dHkzBQnq1qctoH43DRAq6CJfcZsY2FgADHV1jdYPBFp3vtcpS6zYH3iLQQEhN3dTdV5xE9weEedVihzuY5zSp",
  "key34": "5gQpRB6uWEUnSUo2xR3WPsyK9ZgX4yCUH8LHUbvCpTaSV7mYzWUCGbErU466awG3kN6ZeiK8HMfHqhgohWNrEJNg",
  "key35": "3gtree9GpXmNszepuRjTMrkxb1Ap7RKkc6Xb1Dddf5mSENT5Mxy6HZ2AbmnpTRMQpusGpGkor38G5BuHohM3pCqh",
  "key36": "3J94THdFzpgkdzjxGCrjz8uC7iUFUXpMZEX48jCZygKwXBvPQuk8Nmvz2rKwX6TNkrw4qkExaVCNVMDwNEBf4QgT",
  "key37": "3UUUTQVDJHQdpUtgF85mQdWp6fLmMs7r2FoAWmKWGN2Lon8K2Anaycn1Xxbqnu6xS1x4dtZqcq49AQ2RHpaFmcLz",
  "key38": "1UkfQ7rJ1HH2XqCsvRWZRLE1v4BCRWXEN1Ei8dVGtnJiEbthdtEcacutNwnfpdxRjvDFmLgH8t177bcm44E999n",
  "key39": "4cnkqU8VW4txzQuZfoP3aK7XRNyo8JrvtukiQSn6A43BPGKT6NsRcNvdvZBg5EnwgbHUR32vLY4KuMtkXJE7xKMe",
  "key40": "4rQe67T2wU7KBvfacWbXTFxdHAdqCNHj8oQ5GLAcqnZn6dLYG2skwMkV4NixpEMWQQ6bgiyN1dHybo7RnM5cKNKe"
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
