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
    "2JnGNodRZdai68tWFppsVCzqMytBQqCJsF89iohqWUUxWRmfa4DeTRtWx16GuXnkxMLxpDLYzR5J7EWYM38X6vJS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wJ2arKt6TGd87BtCbSaMZKZVbdQt4wrDR8zWbtgWxYCuZYna18uPuc9yCnSww5qqqbNp4HZUXsWifSJjt8DMASR",
  "key1": "3X39SU3QBbPLquKNgp2jCjsWBNueweu8jnhE22B3nfrHVcWQZwToccmz9hPVpdnL76vii7EGmig5CwvmdXrApwhd",
  "key2": "UAQLfBD2MPwM2hXLz2bbs6YnbenrvWcBdVninnfcCKmjPuzJhqrVMn6hw46NBDajrpDrPTtSXcnDVGobDi4LbhW",
  "key3": "52UrDCWgHB1DXZtVvhFxSbByWEhY3RWkgAQK7HAURxSEMQzXFpdRw4XXy4ZNTp7bHpY3gT7DFG7zbieQC7br2kCy",
  "key4": "3ErozyaDUq3mbf31NYDwftQDGYRYejsvkaoYZWoxLxgnWxumha1FMsJ9j7SgQtDd2D59SFkqs3ZgVGz1KtdbnrcF",
  "key5": "4ZhQ7HFrD1NrURuMRU7rmwZbLBVQ2Bw6WgwD3PEft4FriYndWzVqBheMRE36E6AWWDpqgpRaaFkTwos2XDeRnK8R",
  "key6": "2qWEfjDQbuVVCut4tPa8YZJnqkJZRctnNT5UthJArpzHr24Rfs4y291q8QfLJXm7B2WJWZh1EBYgb3eKJGmFcQWE",
  "key7": "4DM76UcHeAhffM4Z89pomSVuTf2TNQBoBiocAzZNtHNRT7RVVcRNQvKNKba776pZ3FNgmDB6kNfXr7Rh9BzUrDND",
  "key8": "4mTbuUxpP6x4mJXYubteSXn9R2P95KZwu6zdwPev32uinatAWVxUJWhcW71oU8vgufGSE6sgUN8asBPW3qKfvVam",
  "key9": "2XMAcnJmaYrFLpjACsj1MNuEpU1xU4fNoG6E6kUbBUQ2pVktLkjJbgrWDFFiTHdVzx7f5GaBGUixcAEKzzNuec9z",
  "key10": "65h27RV8SrkGhshDYXd5NX53PtcKnSUuZoqLY1aHYQf17GNSf4beCxrLuV29Sgu9ATt2yNLEmgqgrgYSm6KkdQju",
  "key11": "5LEtQbSJg3cnPXAogwChDc26gfVXWM8JiE4ijhvHmNRSjL6qio36duGTsUtnmtNseTUyGsiaMJdV6vpmgy9TVn14",
  "key12": "675izAkPJ8s9BiYqf8R2X12ELk6DsoGSaWz4UTAssFGjcB3VR7kGoz5NMos6msqAKfUMC78XUTCCZfph7YMYhie7",
  "key13": "mEPX4ifpsMjHZYS9z3M9DoH6LrHJ3EnRHhC7yf1G2Z6cPgPttGGvHdMeujAL31wbN3ob9cV9dp8uZWiJkJAXnw5",
  "key14": "3Xfn4ZTFDzps6EhizQttDFBzXaVrQ31bme5cDXh6NZ4X2rgTxs43a6EpCH8H8aMbviwJR7DP5C3nGY8r9aBokP98",
  "key15": "5kU8zBnjMZsSTzE41xCe4Jp9tTaNhvhURa4cN3gBdmfjTbkVbxD2yNU1bHhjwgMVQ2H9zKjgN5AVBhrB2f3RKyaQ",
  "key16": "2KXj6gP2UMw1uwmZ4peKh7LRutg3HJx3xVZiZuHbV5Zdx2ZmPUeDFu2f5bgpVnAUvsjz8HXiPqaMd1vXryd3UkYe",
  "key17": "5tp7ntujYLsdUeEQ39ByXJzdzNrqv5iYrGuUUM11yiiWFXSrT7yFTdjGQxc7eFjRQTY6vuKsYNosxeqZcwS3w3av",
  "key18": "BvNjmZ94TUG6wkbvX1bZdmSRdcxCSQCwYSTuPWDvJuBJhpinByGaeXNvtApDuVvWf3DKUp75G6EUgQgPdvFL9Cm",
  "key19": "5fKhU1JftuQDegtjKYn37Tu56rvt5vFSaw33DRnW9aHGGJWRgyS1XQrdZ1Hf2T9c1LmXeumkWBt9ZbJMPSfY517S",
  "key20": "2njh6irgV6oJcDVWzG2qDdn4yrFTNH9TPTk8vTnnv4xgGaheBcufmu91ZgJuxgPRJ9SadAUS6srDjwj4UB7iwrzb",
  "key21": "56Zk7um65W44WRebstqTVztYTeitQLkfaV9G6HULF4HUzr6oWRVRTw8PtCNhoyobkMsMcQt3RVbjBSwgngTbpshX",
  "key22": "CpBA39wrTZeRac9m7Zijb3Ye66HfP99XVbM121YaPjeVPEhiYf7eWTTGps4NxWEhwgLWzvVMLpdrTi9D6vtjmfs",
  "key23": "3suihjKGp7x7qXub48uuUKJFxBJjCfWPn2bb4AxYS3vPM6eGhZhbWx3nhSMTeckgMgUPwLiGBZ9z2rtHtt6uq3TB",
  "key24": "ZUhAVphVrrJ4EKoktGgF2Qnv6qTYFRtq9sTJPvvjgzLUMha2KeaVFHfMfQk5EMcK5wHW2ExwGY3kedbM7BKMUiB",
  "key25": "2Gwhgbabezv32H4shrQYhC6y1m5pgCNoJ7vjaoHcbrimyMXkjhkV2JJNAWiXwSUodueZ6Hjb4DPvReTovZrAiZrp",
  "key26": "241PxiA2KsLCqYjEtDCNMBsABJUQjq9ooQu4hkhiv3XXo9tXXFuGuQt8iETzWGmsygK2tcvFpLLwsc9tpd842zmU",
  "key27": "21e7rzf4oX6JdMZzKYPD4xKFvyjKf8y8xvXRRDpYcaKeb5ZRdtpdcKyWibhhB4MKE8YETsgfwnSWeKUhctdmpMU5",
  "key28": "3MqGubY1ufznnKXWKRF4gQXugSpctxLJAMXuSrEjynzciFnoYyURiQuGb6fNgwV2wUsa6LPykiMgGQLqfWWNoD3i",
  "key29": "3wvi7f4SNHgqtABwQ7SpYXisKp9ep8K65S7MvTqNS48S67wH9KuMoxdSKkTzR576voojMLhCdQQYnsdz5cAsZi68",
  "key30": "49edwgTS9rUiZW5D71FYezrYY96cYqwffWgpFpCNhVL3SutwhQwLySMgpMEprfmZVYJbEtZEFr9DK2YGGcxGuVxk",
  "key31": "3ovdkWJNSbnyjfPDWm9VR6FsSB78cMsQVt6Du5YUQKVBj48tbMxyJsgLiuZvsL9vTRHcMuFgsHLQx7fia269Yif5",
  "key32": "3aQ8FgyRQ5fdXzA3GpFQ2hE3YCvbXBwM7z7uzpBcULUATz11hN4iShi1ndejNm6Lm994uDnbGXepydvu639bBS1r",
  "key33": "5nYUbJuAxxkvNd54Ds9fD6qiDrJfrd36YcJ1XbRndWbFkfYmyMXGthgdxPU6QMENSDQxEtEMkyH4sziBRfK3XAF3",
  "key34": "4vZ2ijH6zhEyfiLW6ya5CFvF9rWot5LBYe3AW3VFNRVxbD3KYxETGzDLrMJW9qqwmjAggoCZqhnEyouLkCcQcHpA",
  "key35": "5UTFWBJPtvuwgJe5WfmScTpATnDXXuCt1ywxJcGhmxBfX58eERfRY4mJJjb37pECFd6aMcgyBaisPTSHkrcjobqS",
  "key36": "2ZjQWUV1GyAxnWX82izxtDyoFqCJMxc6M7vLSH6s2L6HwheajYqkDeEtEg39EvnCL99NJiXNzyHq1dHKK1rKwHW3",
  "key37": "4PjcJmzz6pF6ES3kcPM8TvNHLWtEQJyheMeE5E2q2fTAGDfBm5b1VzD1T47NmPGWjChyvqrdkRTqkuckGR85LtS",
  "key38": "BHgaJnT9LPuhM5UvRyyR5QHFgq8igPDFSzE8hvTmX3D4v236byEw3igNCKnJFBJcQH2AW6qkYKoYBnLtw68oEBW",
  "key39": "5iUySs1VyF1ne53dGxMwXs9m2BozYW8hFEvEGmqtKtRGwdgogZWFqjaNpPEpUKJJ19qEjncRzmcrAEA228mRm1e1"
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
