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
    "jnTDaGoVsizF9rC63aJM2BdJ5HCkJiTcJ414Jd22vJTUYASyQ1nwpNzrqgHBaH4HpEq2mvSy3Lnrud4U9bKrZT9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bHVJ9g9yvx2mArubxERmeJJi6Wdvb5y1xy56f2roiT5NApf9u13yhzCAv6Cc5UGXSK3nW32QS4m4HPeHYoEYS3B",
  "key1": "25kLoaE4Tfx6j9R5JqosCnA1WZJ34QnrgMXoQS3AQbvtQYBdMV3C2y1c8CSJHKUaFTPJ2zjLpaSiFszWN9fQju97",
  "key2": "4LngwvesoRWsE3eHvvemGhQiTLhqgn5AP2QFWqqQwVFc3Y8ZdAtmjUGGVQQ9LqrFDMRdMQKQcP2ovDnHEwTh8HrS",
  "key3": "3NaBUX76ib2M1ZG9N8L86cdfD1pcyP66MnfSc4BYoNEVcjSVqCRwGhDa1un3v4YUkrT1SzDfg4frGHDtU1tsoErZ",
  "key4": "3zgxx8otiJ92SYkPBke3F9pNscUw6SZjEGZEqNyUgq6ZL2VWNEhKiXtKDttVr3uA1S2dnvS4MsCP9gwy1EbrG341",
  "key5": "5MfYvB14dBQNn8mcNCeCHJ5wWDmfMvy31rLeQ9vbYmd9SWTLYvd44YJKp36V9kPyn4VELdXkjdBJ6bqgWwcLeZSH",
  "key6": "25hoWrb5N7AiF87xfjy2nCqjPu9mwv9SJXpT59KztmVYmP1Kf9AGr1dpXibjXmy4CbCafthDSHz5eghTT6Qraekb",
  "key7": "fJ6yVZjpGeypq2BwPbTPbVJG2EHJ8F3nLMKQinjEjLDeQyww6fbbpTzUz9nBbpsS9Phxuk6fNwx2WJ63XYFW3BY",
  "key8": "5yqz7iVSFDUZEcZM2gMebhpBuSeo3tYncqZb6YqtoUr5B4u7hEWxWMG2krirKucDBCmGHjHWWFZriXuFs9aL2LfD",
  "key9": "5R9NSz2yp3cdSaSQrZae6c5Yn8PU8Qgws34mLyZkkTTqrQXdNTtyVRdxJykyx5zHNvLTD277KP9fYZqQUcaVjSzz",
  "key10": "62nRyxfYwgcK7yPAydjp8Utt9yXHuQ8YpRMh3EDFjjQ8wRsTXacQoBaysHQz2xbejY2LUoUfn6D13kwjZddNCkGU",
  "key11": "2emMXxq962CDp5URwpdRvuqX5PKsPJTKRojYhbPG2SRic7YxEsgLm7K5oncp3bySnaBoxhJsRCxFAit9DmzBbALj",
  "key12": "PFbXAuDm6ByU16VC7efXTEXP9eqooMe86RbzDEUrAc69qx7fsdwPutHiFZwicU5g2T9KAV5HdirYswjcT1uJowx",
  "key13": "5A1Jc475YjbJ7xUEZnZtTEY3JJdWf7b1tULo1SiE8QedY5fsCs3ebqrEQ9yvgYDmRVMAFLVmLSDmdqaTzcUybtH7",
  "key14": "fprXabgLE3vJPuMLhUSyqvtZoW8r3vWDoGfGHhH1z8GquvG4M6LE8cMxJG5A3F8P6ZGzahNz5h6VtKNaNRXD3vn",
  "key15": "32X8vZcDtp3P8heo4D9WfetFnroVoGkDeFF4h8sBVgfNLrp5AeSggwa7dR253BjbdCkJfmhebuDWp3oGiRvjaCDB",
  "key16": "2wXuJyiY2or2KFj7uHGQT7Fqgwr5RDoNb2tZsvzye5txLwMqYycCP3Ve1S1nAP8TaZYe81gC5AjKGnN8jmHoYkjG",
  "key17": "svuEVFgUU9GvrScCiJm8CHbFaW8B2NMqCMTCu85wGrrejCL2DJCqkJDk2qNj4PzUhySew5BTouSodHXragJmYfY",
  "key18": "mcqe3t8Y8UGLhoqiknvDWzquveucFk2GBHFAKgxtKLFfBYp56Ea8UgtByRF9FWc4Ywz5TvFCWV8eA2GjwNCAQmm",
  "key19": "4zicEU7kkKF3L23jsTVfosm9QXzgfwJoVTSJjiWx1Q7uY9AQoJaNhXe7EhJDo5eeDdH5vYsCzidWRMFHBeowG8aE",
  "key20": "61Yf1H4PEe8zsBr1BBkJ5ZBcBUiuZ5zBqvjGz6LaduVWrSUMtYQofB6fnSoEzMWxWJcE7pRpa1kFbKW51qeMLHd1",
  "key21": "3TFTCpQVseuKDMeDbUjZw1Z9JkhdEfKk7XsLxTGywwPgznLq8QSGYFb2hwYsm12Y4UDaNvDYHBU7yFW4m1835dUS",
  "key22": "2c18xQdgkb9QY7EWjWRdovChhZ7d3PjVGFrCuJFqTLYp42dWym4Wfj7ME5PemxLjiYW9sBddBVxYyygf84b9yt6K",
  "key23": "33WfeHwxJRrtjReVnLRuzH5kDRTs2Ys2WmBE68T539KMMmhYkF3XiNGt7GrMDdwAW1ABzYBowEbWn2fKEPXBkJwm",
  "key24": "66AonfEwjW38ZyWdwK6M6nzp1cB8RCAvvCzdXTmaPgDgsohX7URDuLLpCw8LXvNtmewftQAiXndvHV3LmC9UgMke",
  "key25": "56TVefGAPEJBnVxkaDimP48pc3cvjXdeV33pZgAi6ZgnBLyF3zGJbTpSKVnMSVxnyHfQYBCu11K5owFGwxB23Zp3",
  "key26": "3Tiq9Jj1mVNyMMoKLBmQhM25DgBvqoLpKxk8h1zysHepsWXqQiUQcKPUHnhCuvkPSzPaLmJYvaxtV2KHNjdxdasu",
  "key27": "bNAKyhbDsQNuStABMaSoDXBs1wNN1QpUzpVtQUPfyYbZ3KaMqGoEUqk85iHpNcnUZTSYdeRZoCKruWjbYd9U3HY",
  "key28": "25jVPVyCjXN3hdwYLZDyStxeMLqrrVZ9tsaaMhNjNec3Xy6B1Yj5veAoQtwXYdA7shNPuiErnHUmASWuafKcq89k",
  "key29": "jsfMTJTErhvyfw2fVmPVc5fgQQsnVnd7EN22qY6mtnse5rhSvW4CUtRG3uqfhsd5xFfzPc5eTJu51pqDYMWVH7V",
  "key30": "vrD1CDVTi7sGtxpbz6UaRcHDEsoxm8QZpQyMyq5h8LrgJ6tkEYSYfWSdGiRD3S85H3237MJgjt9Pr7mHQ6PzHGq",
  "key31": "27qkttjVNvzCHpYb4JXRqSUXML9o1C5nknEmgx9dL7y54tvGGRWW7BCvNBSoxwr7YNKhaQhUYwg7HTqHbWZDdh2n",
  "key32": "3qTujC2VWE68u5EsYwXVNoh6i2Tptq8asmNS3L9brWfZ9bZDjndcZfLYyiSrapZJYMrGm3ouZ8rGsJ1xSujy1VJP",
  "key33": "2P6TfzQWqCWPRAQrpj1BY3GmTNNwE8tP19V2r4GuFfLKrfAPwffvvqikrcFYSSJZJzRfXQfh6jKMNqrUsEnKvuQ3",
  "key34": "2mV3yjzPvV7vUjcFWwCAcyqfL57HTfEp78JJkHryXgaLFUzzSacN5FP88zpJifjUGyCj2gLtytKBEvf2F5BLqFE4",
  "key35": "37fh498FDiwQNfDeTLGzpbKUwk7S5qf6oATzn5nDr2vZ7hPpLozVahzQWDfrnuFydQ1btdiukyLo6Jvsat99KKaE",
  "key36": "3xi2PTrpEx7NJKG6SKGGxop7aHmkERxrkoczuCRGswYSW2b3boNgT2x8RWt9mmhABaNg4oatxy22BW8KoZkvdZM4",
  "key37": "4UyAu86PPPzVNjXdDx7eMQndS1LrZw9Ex4t47LjMHCabTGzEZeRH91DHj31GKWi4sdEEVJarJbA5LawpD7Lvdy39",
  "key38": "tevEhuaKoeATdC2qejMCPuBg1NttvrwhLw6vHD1bTyevDQSkogRY2CcuJUbkSZ8bV9DaALxbK9sJtamwdMt8eoS",
  "key39": "5WN8Ps2Gb6RgCk7WvYdcJvqTVkxihnWUgP5wjv7rvYw1omD8KosonomVQakJkvkGSgekMFDs2F327XKDiN5SUPTG",
  "key40": "4SyhmZHWme4KpFwZFkwkd4joxjpTiJ5S6WqfPoZUy3LJwbt1KudeKzHcToPspYV917iiyAo1pUEiJ5Q8Qymq3BjR",
  "key41": "67nrQ6kd2eaPpvHm8vm3bJ1x15FWqmDdEmdvUCneckK5buD99wy5wmFFK37etc8Q4YQN4uTgiDoPRAk29QCK4sTq",
  "key42": "28kM4n7nTzDhJMmiibjB2ojoZ2tHSLFt5zcTKMndkutH1D23iMuyzuFuYah1dk9BzSb72dLwMvN2Qj9XVJ9ixicv",
  "key43": "2MpjxRYUrzdJ2wiJSBzTxKQftWAmKL76pnjxo7BVQHfHoCqnDpcqbPMhJDjKCqSNfZqfhrjNzKZRbRcCpkRMP2Ay",
  "key44": "5QeUVEMdY8oBdcDxbq5mwhtEjCTjZWr6i6VbbGWSE4pr4p7BHJeJnkNnkD7KbJBG9NGHi6FoykSn9Fj5sRmexEyK",
  "key45": "5difcHUZhamQuiwdxtMc62JF74VsQhJCF7EeFetYKFvLsruC5dBZFTcdMRHdVngt3LqSAZNUTgNL9uX3aPWBNcAN",
  "key46": "2MoFTeR15iDqvtob3tEPsKrPw7eHJhqH525AS87vgLyDBfU371zdDdyGzvwCcpymHECmqVQju2yMRM3jMWs7Gy2i"
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
