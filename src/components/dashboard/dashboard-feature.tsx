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
    "4z3C2KgXbzozGu3EYjoZrsDbWJkQNakm4PGkoG5iaZKQ9vXMqMc1jhFed25EySYVTzJFaMzXWq6ghnPMXiBqJTmx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3is4iBRNmEgV2LgYGGYv3TeBhj3uBB1HgUXstm2N3Y33qWkiDCoNoopqq4cjRXCg3oxZQcum8SUzxjKwHJyjUA9z",
  "key1": "5jP8vx4YUGdkSvP3xxFmx5rnr2cpxtiiU6KHM6hWvGxE5t1kToyoyeq7k1bmMhHj6fxPpCBJXDmR8wYzAwPv6z2",
  "key2": "5jWbK4kkRrrNahJpyyoJpSGRiYvawitZkXcYXvDNtwniTAVEuN5ZRNoakTYVaeHzGMzKXEXs4T37DjxBvgjkpWoA",
  "key3": "znsC6fn6PchVRHyzxD5pq9PHYswiZRT6JEGDRv2Yf6cxkRhyzHUu8k6acLNQdeeisbv3eL7GtYm8pxMkg2ntsJq",
  "key4": "4P1pN2SEDzXVnmg9CDZKt5dY8DqPUKc9ZCp4Lk6yv1eZxN1x68BPsyCbWnEDY7UchNiWTRvZs7hwBH9LrdDUvdfQ",
  "key5": "3V8n2TTzdPNcepfRtjqGAEHmAUYrsT95p8wcqJiHakvQKQdHihgrhYfVz251sWWXbPogB5Gpdfx9chFBNyBhaxkX",
  "key6": "2qddpSc4iTct1f2s1f46s7pb3Q8XpXeqL1VmtPYZNtTF8rYbKX5ebRm9vYhJnp8Tv1NktkdDKz8RvM5R9REAPxRM",
  "key7": "2zXXH4Jg87SrXbTJtm1GjXEdMbF5mYCBkQ1zHZuKnFaN3MDBAgAiECKLdQ6Q3EoKDg78kLP5cioe6jGxn6V4jA6e",
  "key8": "5hRh45ZAGqEmT4PYsCGhiwpUB3Pau7irVzxZ47s3yAuBZgUnWRVd1H4wXjxV9DcVd5n47DmYDBoXt699sVXdtVtE",
  "key9": "2fHCKDFruoBbDYfLrnzvw6RPiR7Enhj51cjPfYEuWZdQ2mzFdyFYJMTqaC9jxwyzXdPfsuYLT3K2YS1XU66juZYy",
  "key10": "2mgDDchkZy6HUAtqftiY7iX7xq56ojAhDCydtuvZGxyxabFmdNgG7ZvMxwfZemkWSCnsimiHtigZ1kpCpAfSVYwT",
  "key11": "5rRvv4B7DJtHQAt7f2mXwgqgM16z1ubpRapbYSKSAyrJGPaR6KDbd9Gv72EWLEG2gbg83kiVpupcqDCi8Wc1p2dn",
  "key12": "3iGgoTirtb9RPNYrLNszkkk6KMaX8zV7kGiVt3eYJm9w1PW9t2UKn4sHtqBRFcCBBKh47JyDeitweyJ6upk55L3F",
  "key13": "5V6w82agRL1Sap4nV4pfrj3tSaF3J37iUoKU9igsE3NLARt4kmbJD2FveX8tfqNKDCpp7EjJ447qM3KBncmbaui1",
  "key14": "2p3vVVkH51Xo7XkZenvqFCtxkfiMcm5LL4LKN7ivQmbQwtrqdRzkC8MPC7VtsqwPMLAKeeCQ2HGDxQTWU3u2qoBc",
  "key15": "rrVGmWbLhhrpeCXjiD7843iHJkfKcPvSSfc9zFYYeddgtdWKKSWUmQWepXD2ugbQ2K8YbpPUBdciwsQJNA8qn1P",
  "key16": "4QqnCYvoUFaA2CveDbXugZiJRQKc8o5n3Csnn3i3jzVKREmpdSfjfvtZeC45cBrZCkxniD3yyor3UPDy8y3de3FD",
  "key17": "qWZANJrZNjugBAjEbN8o71jjv9abeM5j5FHKQhgUewtKHTq3wdpBpgaEjRWFD8fnV54s7PTDAhjAM9k8uBNyzkz",
  "key18": "4VDV1vnhSNAsSnVCdC6VGeQNtHGzM5sp6GGAUqWPUzyUwsVkF7jehiP2nq5mTExDBLPAr1aUKh79dAiBx1X6zcBR",
  "key19": "4y72hrUDPhAvUUG4C23wr3W7katPvrHrypjAZ91jFeRH2QMLKSjHxfvwT4H5JsmgTMCfudxwUWCukekgL9mnWm11",
  "key20": "5NaqQHD35bVjWAdY4n2hDgzG7a2qnNB79Ua1Pp1AWC5oY8mAhxmXDsdrEnakQM57UR7xHH7xQUszupcKdY1gcVyd",
  "key21": "3SGhpoX8QNskymsZPKJn4vC6j8yt5BGZRjqjCjjo7XwvS42YXdgYFnaxNsQ5m7gfWrfYtNy6ACyVK1y1D2x6xkk5",
  "key22": "5o9c75Zjg4Q66cjJvXxGRuw3fkyGgPjGLuimp38M4o5mQYZwP4vN5yhgVWD4xVKTEtriXfoU3x5xG3uuBMaHuJ8m",
  "key23": "5MwFZ5FzL9dsYG1tic1cViJgVjVaqGHm2EgRDBuQdyjy2ionXyso9HKBTS5Qt8bWRrUP5Wni9AtFpNTy2H5bi77g",
  "key24": "3M1XC49EAWcBDGK92HWyAjv9MFNGhTKYe2UjAJNpvQv5RQGfyHiybfporzTKAA8vuX9XXkV8Yr9poUg3uj6v6xt",
  "key25": "2wThPSTrk58jnB3iAp1HUXZeHdcVvC7uoVuEKWY3pyA6apR7YURdQWBNQmnA5EEPwJur34SqUY5JzQ3RoofaiPZD",
  "key26": "42jBcwqpPrxoMh4KtD9t8eeXyZpY8mcHkjK5tgoY6WHim3tfWGAkgALpq4v1LdLYUfiR3egoLHJNDUMjMdM1Li2o",
  "key27": "4nj7fdQbiRATVHHHRkhnxFXDjSKHq27tVi8i8kBuhohEaj8Kb8tEYhzymzvh5C3tyviYBqWigatm14EnBine7Q7z",
  "key28": "5F565XxuQgUzghex8qLx9wHkYgcwjuKXKBUmhBeaA4BTSejAU8sZKMHdkaBRHPFmEZB8mrFrFSgSvuBuY6Wuu2PG",
  "key29": "5ycENntPy1PGg8pEnv3HDMwCmDwgPZJVcgjJgxXhBxpJEoWeyetWuG2k32EyF1oUaBy9EEucHhWqiRXoh84cLsWC"
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
