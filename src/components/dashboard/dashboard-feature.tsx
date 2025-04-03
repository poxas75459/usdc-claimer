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
    "2vWGasimnnSfimWTzQWKceoTYVBe3DGy1H2cnvjG6dnbf1uAwnwJbCWu6fBMTY13i61XCFiukpqkzeqhjTjStPGA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UfjtvSa49g9UdyA8FaDDSnRU3GZR918JKYcbUZwToej2FK5nBqNXYyf3hvxf73DCngQ2FG777GtaLUkUwqknV2y",
  "key1": "2B8atm121mz7NwDvkY8ZnD8acXHjiMqiC8MUZuNvUjgQ72NtYBnqG3wxu2d6gbucVDBtLXLdTwfHeRqk1Ax5t16n",
  "key2": "4SNCg72zDooBeGyGkPKhfSaLmDZ5PiRvLKc7Arcpfn58bdBK2my5iUsXJ7YpmBUQNmuArcaKTbqAERW8JqhVzBH5",
  "key3": "2rUP2unSSuuGKP4wHEQqHmarY1KhWP9Ya97S9XsWXCUN6pGrqPpnfm4ga1XNJBqiuHPJTY311Gj3NGyFoe8JE4Sa",
  "key4": "5CHjWR69nEDBGU2QyQg8S52GcjYbErdt5inFh3YemCLVdJaxrEFxQ5YxBzdBbPBNHPeGQN1zvGq1pjeQkmy8c2un",
  "key5": "2JnidozDvDv9ApwCicDym5tXPL9TFc4eie5B4Yzh7n5Hi6S2qHzgWLNrY5LqicSfptb69qsuZPpksowjZrC8LuyG",
  "key6": "3GLj2hsFFXE4Y7HtJwx35rV28VDv89tdhsNAmJZ5vdpDkWD7WuRYsYNwnXRoWUAD7RgmqDvrqH8iVRHFBRynEXVX",
  "key7": "3SPTsTPwmnBAbRwuXnZb2UkkAtTXCav7m1bhrpMeFGsATWyFzba3XoM7vNM3GukR4v6ApNbRUKn3dxn8LdmiUtVn",
  "key8": "Cna5puFmrGSTfdmqUoU3GnUB6FQ97g7KfD4GAgzxQr1Un9VZGK8fVNiLS1ZTMA3HQcZk3AwN113CULJFzyJJzfq",
  "key9": "5ojTVZN8D178tnu8Ej7Bem7HusBzdyJ1q2r6U1jPqgzF3PW3rkDsjQAE67DMGZTz3ZurR8dPhBFYFZ6Tpu42ig3P",
  "key10": "51aGWSyhQ8pCugPsjdeLqJKJPcFSZYSUwAUHky6FhTJMxs22RRjfaDVuw9JLCZzbYBwVUVzSTjhK7ok49TwvG3oT",
  "key11": "62hotJeoT2XHKT6EnbUT4HfDqQUk3CxESGq13Sarpt6EShrBETvQF9qfe2Wo7fyLuyzrhgCMVDZ1W7sGcMtoJqoF",
  "key12": "4guWGskMPrxSVBDLqUYYJgeTMeYcYwi6JCUWRRe8gxSmBoyChDMjhaLZp9nJEe3G5fDZMG4fiSD1cxvXtKETSid3",
  "key13": "4BXqEb4ZQFpjzDKXV89NynQRR6vuPzAgNgkhLFqTGsEEj8HVqBNaeaXhLhgoUTJmVNbbKtLxKXzHuHtDztTNTkz2",
  "key14": "FD6L1AQsGhfYCBPjygNvYtiiT6D4QoDSWwS3YQHH6mxzJugerN31yic279XsW91JfpTVvGU8Bqycn1FdhUHNTzQ",
  "key15": "5rLRw6BSAHfD6JPT7iyW1jMUezCXANNeiKrE53R6iFb3GGY3cJCyKvQYtn5qvr4PQU6oHvM6jttFRjywhpL6912a",
  "key16": "4jhhom95m99tCo8YVsv6vJoN4qMHbkdMB8MsXYtjngkPBNU5i14JkLeFojF3PQ1XsSf3pnaSgyLWD8hsjPYcKpym",
  "key17": "hUvr93Prwts1GB5zPBMQWYUsy8LUPypYvCAy2WtnihsMptNs2TccG1XZqJhzLEETnrFDE5yDq1SnBYokt4tqDmX",
  "key18": "3NJHgGA1tTPTCEufarXVJaJwYERsLscsPkHcjehGLykJGWmgqnuPECBrWnR2jxqnaFbpPQCq63xpdvtHPZA2vYyQ",
  "key19": "32GjmsHBRLKooAMFhxyciBtNQi45wCw2n3Vgyr1apePSBdyxRxJhvdPQGyg1Y2T3q63SWQhGwsniDGcnJWjYAqLr",
  "key20": "37i9Qqc215QGMVQWZwYE6Q1zaL6FeQXyER7cpsyQA45gy2Z7SvGuu5aLwg2pjLKWfgpEmCJ5ssAvhuXxwnM75QgN",
  "key21": "2iXyh5uWv2kx9cuczhYNYSEN55s5nXaeYZN8RzetKUJTzMCW9D5L3CGFn6ueTz8Z1D7Rw3uSpeGAw7NDgZF9jJFb",
  "key22": "35MYqCBejAxRKiZB3LhtaCBJf3QZDhPB2HU83eqv9YHrLNcikFQueJPUgTPfHdpgdpv1ccpf72B6CDUQRoaDB9Zh",
  "key23": "43QQkfSaX5ypr4Q9dypiBo3JD7FwJeE5cpxfUWaSg5hNa3TZRRiEgHtHLDuCAr4ABRshGTBLFjER6E7YFTo3Kimr",
  "key24": "5Vx4yvverCs9GnLPSZZbkJdFtyCwh2PAc6HYC8FyraQZEbCfkMrLdEcRJCrh2nT7yz2fGQiLknzFMkuzGW3pdQHq",
  "key25": "58ZZBEBi5mpmk4nqgEZvCFB7LtCxBzaqj1ZyTr67U9VWQG8YRuMezL2xn5GhQj7zauvLYtZrdwgGH6erERv2vYgw",
  "key26": "47a2uNMC6ve9dgKWaSdBFWMhbVcYVVL9DShYBY13kX7FC9FTTL8BTSwA16ZYbkWMyTk7efQT7EeqjbN2sktiJFaj",
  "key27": "4H8HdFHFcgujEHX1fR4muWGqGReqFh1S3tRUHEZQz5wCGgb9tq8SCKv9yUfcvhsJPMSXrP1PpVdLyL4JXjvYJHUx",
  "key28": "Py5SWAtSY26J2mTHoAnjupG9m9Zsxrwx6iFtgeSEwbbX4WQvMc2gT4j5t8cEDHgZSPPX67niNS8zxAwuCkgfN5U",
  "key29": "5musELAravdYfwuB6thzSmNkeC4z5EcUTpnXgRd7BSfSGmJRMGxSywpAhLabdd2Y5rgAtn77FreyVJfjqpzsqutC",
  "key30": "2Jq4rYhLRPXdhqgW7YYUYmpWYCfyiHTWB5rZhHXCFkXcDkLqPpAPLu9oc9okoXsnPzbqNDEmoDcRpnYiTsnLH3vG",
  "key31": "yLNBoWvrnpUrSpyDeuhQKVvpmdxd3z2PWi8FrCDYyCHaUaMREcSicAzHDt26GTcL78a16kcrcjjK6mtDJCzCDBF",
  "key32": "4syL6PsgcFFxtxFUrmmMGYfLC1LzBkRZ63sj2wR3xV2zBT35mNFgGgbcCTHuu2yHwMo32KpkKNQVRkiVdxhp9MG7",
  "key33": "5K3sRTHTRYZFe49USwabaZKCDDkb489ggSHRHZnGCgY6GCdnfqDcwJjwix2RQNPuZ4nXHFJKHBLB6bTvZnkRU31M",
  "key34": "26MWdyYzGSZrYMkSnbKuf2hxv4pHhDfqQvK4Uim2dpKCLd9FNenke7gcEFN4R975CcPSXGa6gTQzQxVn1CNqgSrg",
  "key35": "4oK5JVyx7wvqjeyLJFbtbEAbmt5kdLGeiaUPgpNochsMz23dGeTkUob7XvKEmAcDBkJE5Drc7oKHKeozGYSZc6mz",
  "key36": "5WNUeQQeePbrFhoPtpfCQpVdvgwezPN6k4euqDRhDdBj6fqjCgcqncg7Y4PaU5rT4E9LutJeqexx8U5fPPkwG5Jf"
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
