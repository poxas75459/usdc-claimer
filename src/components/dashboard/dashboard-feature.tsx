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
    "yWqZPqYhpbFkmYJt2jXRkvVZoEDQzJ8eQLUpxvxQFPXWCxHUkd1MhVfHArm6YN93swuKr9gbSnNKaaAdv9pt2hf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mvso4qJcytQR5ocTVAN6hzKKExZ3Cye1wYkouRJT3AHbyyReX47XCiAvXSkH97hoyWpmGtLbtx7nddw62bFAWZC",
  "key1": "5QBreTWNRjj6qjCZfMEHaVrdq3Gt7VZaa5buq8fvuA8qG3JZkDdKUf7mmLH2R6Qh6KKJEh9ShA5mCJ8PC8FYLpKY",
  "key2": "5a3Ynwfit8QLe1DgY2WiALg16xSxoeTWQyrPXvTsABPkvGQABL5NkdHQnPHMHLwZBAhumhtwJ8gYwpK6A6vDgJqP",
  "key3": "3J14jvmdJANHzJPgeSx2hQ7TkcAEa4EjsVC4Q1c9UJtT8KwMeEfRmkiKBfrNWJzTtLe7wekzDccEGXDBPTPH9nEf",
  "key4": "4Qv6vQWEXGoc42UUcCNp46HEd6F8AA4sGaCMHvw95YzrFydBYqPwpSz1H9t6vqyHrFeVMn5Tdy8EKnN2XGiS2NZS",
  "key5": "4oLXxNAyUGcqxWg9CbhFYcYyGj1VFrDsEUUosKiqJDEwqG4hCYgCxVSA7VoABvjnt3eGSyGmsgLXdWnDC7sehAvM",
  "key6": "4itNyNhFkUMSqfoc6D4BbhpKwQYVR2jRWyZDBgTZY2HC4447vDcYFZpT1GWB2zBCnfPsw3QcAeuWtZcbsZfh73yL",
  "key7": "5XugKFZsjAVCnor6cuRYKgV2Uyyv1NSMoc9imjjffnbH1SEjoeo6yJvLJUvUJbABKtUiyh5YAMM2AFgV1deH3euc",
  "key8": "PnA1yF8bn9Ru4pZfbqFyw53iUowYFbKPUUJpAXk4n8AWi1c1QTUNqJkUzhiojbhjDFA8JQuYEvgQXPemuw3ejgN",
  "key9": "4nNoY3wqbL3StGXDCR2AZcqykHr6guBs9THRyDMdGyAyTv1g5Y8KDkBFoHXyfiw8vQ6rXEKySJ8Xct7EdDSYZwtA",
  "key10": "hjPVDCwK3DQbnAN3GkSCmb785DiHRHtWNnLFQonKuD7AuRU81RHooo6Y26rNGs3gmUcFdy6fizuTCEbRExT8yQa",
  "key11": "5bFL5PicND7u9fXAt7JP7rLXHe2u6HeA2k1Lz5fWoXzjXpFdSziHMKBSGxXzykLgrDhivMt7vxu48b5Mu2sW6aZ2",
  "key12": "4D1hzgJGGtg32CB9fe3ywoZUoExQBuyWjajmkZ5My9GDt9HdEs2KEc7nHPCAdwyyU7mHV7ABpdmiuEhhzAv17rfv",
  "key13": "3aP2meVP7essQVyTkroSupasZjDGWof1RcpiBRYQMyqxx4bG6x32EpgKC81zMiJuE39SGK6iCSZNCVU1dWaCYgsZ",
  "key14": "LwFgPT8yNjvAKBhxNTfgAAhZF2uM7ad1fqDtiGKneR4eL7csRn13r3xDHFZFdhbLP8SvxbhXfaYZpfULJTaXunA",
  "key15": "4VVcBEyzMtvLQUyL5wvEtsXqrTiq9ohw5MEFGi6WKA4H9PhnzzpBEwNJxfScUyRPYW9sp8rY6Y5eqrx8ztvkxJ1w",
  "key16": "4JNggD1U3QzZHE6PPzGyXUkTozKRQ8kCk8AgyQ5KVRUNRnpaM8Y8exJ249mvZzpU5wKgaXMfKoTajRegNDGp7Cwp",
  "key17": "5yR1UoY5nSXYs7bso6dsJE1ma6he2qTnPnJHEs5KcKb7mpxHT4Li4nisi4yH2bVuoSXRqAS1UTEHiEe4nkzf5tL9",
  "key18": "2wMCKFixYpHDdddD8emyUcJsXJLRXJdFZGJcb246q6yyGyEMEU2zbB9PrAYHTMA7yHaGEg8RhW2qyniUE8tYgmzH",
  "key19": "464vz8r9BifAGU22Rr1eatit95qK6Rai4P6XY5X7vNFVwtRvfsYkhVzpoUwCB5aHHDmQMLWoFJKTGUhwDg1eJT9",
  "key20": "2bipRYhikMUVEhjdLxRWw9LuAS4rSmqr2ZFCzGHqUi7AVwf44dVgaD797V6LcedQjgNUN71qYWXBgTYB245NJbNX",
  "key21": "Mab6kuEwWaBsyVFFMBn5wgsSJqoaqtfu2GuytgfwQXsVCtzsQAiuCpdx3gvTKNHoKVS6KFjEjGWrU2QGKarGxAG",
  "key22": "3kz2VRVm97v4dZnRNDwLFqfhEaDTUEAuDmRPHE2AzSngepfBTkAvD32zmMgF1gNEAh3mb6mJ7J2VPsuy5ZHhfZGg",
  "key23": "fab8tZY9j2RwWxV3MohGK4zrr8dn5Gm7qcG4kQU1qQNViKsJXJiDjaPnNgccr9G6zA4PqLfpDzLiCDKUgAd8kMu",
  "key24": "5b8JqsaE8yfEyAmYrgpmqX64bhMLXVJ1uGJub9Vtps7ThE9qjHa9z3eEf8hMqMwS2LyFyPvRqPhcKv6B71zMU9e5",
  "key25": "2Ksm2JWgCKagkMq7YTVEXAS1yAxkJb84gXvYXD4yqhj66NSMLaKbm4ZMBmhwMJDa9grNMdqU9T2QHK67FVQVBrXo",
  "key26": "63KM84Xq632AzAiXRSLACrGSAPMBsX2sjU4gJUdvqPmdq5hHJ5yQPMm4nYDNkG4keqBCpdAd5AvwsbxmWjkWZCT1",
  "key27": "3TiED7LxRn8ZYzK61oWqE3ZLW65dwVYzFWi9y9ckqivMry7iB7Zpdgyp3NnjR1EfM1HcUVuMJDkFPCnGGgrzt2jf",
  "key28": "3ZK5RU6Mo8tDufLpE14S7bq3QiFBG6evJDD2vaUHytsvMissrSJsYAzKeYVgM18WeQbNpiFvJ5CdfdTPzjoaiKK",
  "key29": "5NskHdvZnR5jz4kYt1XC9eL6RKpGAp9DR9D23RAZifX52gbjUdaENEgcSKVVedsLtkiTym8HYiJ3oKpTkUR8ARKn",
  "key30": "33PF8qrnMkNLp1z4AQXMxcQF9C4XXJqTEmD6bfw1PTBK39mxK8o1ReWvWaqaU7iQFraYhVWwUU5iqcKYdGdR865T",
  "key31": "5eVvvWViZ8UXcHLtyPLnQJT4tMbQSuNU37uEMhXvaxp7KmVoKFMvMJjc9z9Gd3fnn8JXkGNt4aiNKesNKNEdAjEx",
  "key32": "4xyZGrJBMgT7S3CKC7t5DbE8FVc3A6oSq62GCGe49pDabQhNg22ax2oYf5UdTdHfdKySn6pv1AGf5jHH4G7gmW7k",
  "key33": "2xWRUGik2GhFj6DNUBcTedapkrudbsYxFy5PzWqpJrzvesPLacPfNXGPiiXyRsSqfeUkogFZB3eH1Nucuzwr9g5T",
  "key34": "5YJHAo8ZP9rURf5mpiCqAKBJKkrWkvLGiFB9LrxYxdhxykm9A82e1mjC5Y8yUL7ypDJMuo6zpfUEBNTMvnLEkAqF",
  "key35": "5a59x4XGLnk4SLChnC6t7CcLujAS6T6QZSC3HFNLQZ5QnyJPLMdw9dB4VnE2DUjWeKVam96sf1uWxjCaBgWr6ZUQ",
  "key36": "rkWH9iRX78jTHKMDLaySVdq4UzTBep84ogzygUHLMzaJHkpVchmJj2f6RZCv9ssgygVRVCPqZDVqdHVYuAMJ2xp",
  "key37": "3XLsYmBBf5ppKkQNCAu4puYjkVZSMhQZzTYfFNP6fx5CRrLU4S72BdR6L2M64xuBWKUsgaEC3Yn8FWNxsr2YZJ9R",
  "key38": "m6vaBRfGwSDV1VEiBxFRWMyFuWg3R4NUxrsyppPAapABsFsYriNXyoC3jSrs8iH3aJAPKpCcPYnTJbe1UaYfj8x",
  "key39": "3aJzbg1JrbZWS82NLtejWMqrd6Lyx1hTdAKUSfvUDFxm3HZsPEpDpKgM8QgM4imY1XyQEATT4XAjYsytwgZrhvCQ",
  "key40": "2odLRjL7nuHGNZ2RyZSj7dG9Ldz81Sup1ebg33GG8GejoesFk1K7axkMfihQaTugjG3J9Eayc8NGBvDfSL3Lb3G6",
  "key41": "3kHKWuNL4TLqbj2VdvAGgvsWSt6qQbk1CkpNAahehJk76V1SKKLkgG14eMtjULY8SHNXnyq2ri3aHwTLqE6NVSFD",
  "key42": "vRnUNRzFhV2Myj8eg5nX2tYbjVS7EonKNXrink5PmZvq2J7GNk3bky6ve9migVHDtsHkLqZ2Uo5zqTNM8Gv3omR",
  "key43": "5H2HKH15Yb4wjVFvFyfMtXj3SjxmVmDYR32BN8x9anD2hVuxiCQxeAVpufxKXgcMTB7P75TjG9u2By845XvQqC9S",
  "key44": "2Zr8DqKTQbTfWNMeKNFFgj2M1AdCFX3qMWiUBUshPhfrHGkKW15tTHPRuDvVMSi9V55rvgDbQ3aa9zbzTbk4j4Bw",
  "key45": "5u8iBSWY52tJ2DJ6kdtbsJFYqfQ27sZUX8cdPh8AaTg2fcxYKB69Yx5QwodsYtd17JRNCj9HGAWrEDFKE3FZWFE4",
  "key46": "hVSJeGu4fyK4YJfix3uoY8vefjEC91L4av1qSw5jkntXw8GnLLDMjLUunsGmt7RMV74diMLpygQeHPZ2vSNKpys",
  "key47": "xmE1T8QJvrkZ9Jy7LfLFF9AJXrefyDT9YaUE4wdVDFUdMgU2fDJRo1XiF5PotiJWUjWeqt9yMfnebTCkPgR7kcN",
  "key48": "2QQrZbNFCzL2tNoQytZhcyJ56925CQzormpo8JA4toxf3Vs8UebizmrK31hLVQd4kexS6MSxLcQk2yS3CKDgkSDn",
  "key49": "22k7SsZdbyUTLkSb7gFWR3UCHep7uek39V8XLJHzj8rXDKLRmm94Gx5fbCbSSX6NdtJpixCsFm4PzdT12pnptUTA"
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
