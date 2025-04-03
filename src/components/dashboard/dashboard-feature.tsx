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
    "4xNT7HAVpFgAvQY5Lmd5FYsj4QfX4ChFWcHd6UwTYGYBo7foU1YWEJuh89GvJjSy9Ta7Mr1GbpP3C6ppbQwcDf1c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26TUJ7NV7MC4r3HoHeTt7T4CZtrzPurnK6rK5MHAKn9nS3qxqXj25SMkdaCRfMfQjUairozjBqEyRaNkXu7mNiEM",
  "key1": "2khuvA1q1AezRvRDacFrhZpfJKjwbeiTQvcxcDu21tFM7163QKfMQL6K6B7jTXwSyWmCFEiurHuJT8LQn3ZXSsxG",
  "key2": "pXc5U8QpCkctGarDaWixiHSwWygDH1AeH2fKP9BchHMCuHEE9Abtm5j3w1cDbbdjLsBne1gYdGU71LswZxDMSrU",
  "key3": "25JrFVhJPAav75T32qmAiKLvvCT83wBvwMt5s64enx8zVfHN7sYc5Ym7Wc7GKvmWosaizGxjG3DVQiemr1cAwzsF",
  "key4": "XE8EzGA8GTxcXNizVjoPdzYztcfASnBJohB5ot5gKnxomKJDWHJwiXEvGhjnUZKzjQUpDBLyhFo91qhvZrhv3DM",
  "key5": "52JWPN8nuNtTSYXptodXGgjizE43sXei3PfGGMM9i5a7zMyFQ8h3gVjujz7sb3Vmqb5Zeo7NDdExe4GpnUyRZjfy",
  "key6": "1SJ1TUq5VtRzXf7A39u6P24XipqK8YxgZYr3XeJL5WTU8VzAomeuyENjQnpATAj3UG2s64saEvpBA1E5D5xpGU3",
  "key7": "3FF6JL3osc3P6diP8ycN5Sh3yzThKzQQJCSMi3tvNnMCfdwPDNFPRxKrJ6T3GbEBPaj2fKfebs5kg3u5DS7ZmVoo",
  "key8": "5Q9icNb1es4Don3CdbGnhBBiuaNcMA3CJN9H4CGwrEvZNTy6PfdDhZv88DRjFEwc4f1b27ygRFPFgwp9rfeuppVs",
  "key9": "46HH6npBZgrpGv57HLD1HfanKhu6rtwxoF5d2CXu8RGdsPhgBvP916mucHeZFrzmEomkSwjUbmg4CVnPUwGptoTC",
  "key10": "2wu3XV9g1WvSSTCJxwCxCvkX7gQcnZsdPznbEzgkZv4f5UimVKBWAjErmwGiRQoQTkXSaJarYpRBdT9hxMG6TCHi",
  "key11": "3SKrLEoGKuVHPCoKp7WMYDZG4xKGZp7u9LaqnK6DfXRgdfMeBPJgg2puTekULwFGYGSEvgpb3qGs3jBhFCY8QqXk",
  "key12": "39bVoTwFSmRHob1YHHxedGJ5z3EcyrNzegqPP2L5f328BJ1bLcCvDRCTCAk6obbM1zWsnb8QDzBqFnUSYKLrHcGa",
  "key13": "2aDUbCa3ULHAGoVuAAzAwb21r7yvb8TzT4oh4HnnhcCkdzqaPXUAtJrt3Apo7AT3GosruYK5axjT7uUew3apMeK1",
  "key14": "sn383CrG31LpwwZRQ8qEkmKxbAQ91ohRwqQvTa8eEw6pjdsXRKbNmpfo5PjiLmGz7EvzLkef1pzkE7JWqqwvw4b",
  "key15": "2fHnoYydLcFpRwhFiRgZLkXxjHrZnVucpVf4HaLkrLf8jLhUfvkNGtbQbg7jbarmU86berAYPH8xyigYg5guEUGz",
  "key16": "4PMzfUpbgEsMPsz7n7W4PMh4983VmhSeimnijLQpBunEq9TxQAiTDcvqxdDqwHqcqaj7tGRjgC37hBAJrYLs2D5E",
  "key17": "2MfVfow7SoqvXrPtA31sYg5WSQvjYoMGeJ817sdgkYLrkHoLBqbFBe1TWUCA1DjrY8ykuSs7GmBNoseA4i612dtd",
  "key18": "4tzjJzMF8fqrD2cjArkyJCCs4djCR6a7BPiGELarDjcLrro5ggbiorVoPoikzwnM8AMFFf1acd9WkbXkdN3mvxZN",
  "key19": "4yNouC8Sypb5dJhKZRnB7deNqzmnMDEdYuVzZ2Nobs5DQCNM9SrabCEKfnKyN66P9oyUxh8DC612JdujBm84TZWS",
  "key20": "4LWesHbW8bocsvYoj8ikQHkhqPC9FSaKjY4pTGk1RpqoaVXgPQUdfFshEBFqMFDWMzF37tie3dTjb2oYTYShZDzg",
  "key21": "3ETVn9cxUaVUba31yaR1DPaLXz5TzCcBj5QnZht42vkvjX71fNC4usJYo1QDngPGidmT8L5Zt8qafGEH39jeYAcM",
  "key22": "5eLQMygSAnCe5Dhsog5cmen2zU3Fkfqd1RPXcmsvaADq1KPxCras6VwktFk7z4Gk822jAt5GGstQJ2GvyVe95PkL",
  "key23": "5KqRKigu5FpjGxUtVs8RtGTFLNkcSW75JZfQMcd8CfHCuo4rL6dgj3d59ard3tKJQp89UGVQe2EQuU1NzS4Rq5YB",
  "key24": "2FV7VG6EGTN7NWUTHNkFhuqAxiKGp5zoUwJ5H1A73J1UfABJXJ4vYi4pVtr8V9UG7EBfaydBPnUbHRKmpZKtkSD5",
  "key25": "38RHVFEYQJnrNRf5CvTrDMakDKJuq2BMEgyUJbM45CCgz3jQa5sQ3UJ8stYUKZSgCBoX6WjdtyWZBZ5ZDAeaz3JH",
  "key26": "2HAnNaRXJ2cDbN5W3ztfhAYYwRmbKYeFz1gvj1d3GPx1fx8GC1gPygKy7TiGop2CbXaEjYZSQw9GNx7K2dv5cmku",
  "key27": "ZFAWNBT44YEZbDXnZtB5YsyDd4Ta7dpeyStp1eyoZ1Vwb8zMKY4nDa2kX9vBDEqUxbXttRXsP5NuQscGt5s6omX",
  "key28": "5Fr6Jnau5V1BWZMWM7yizP9cM2VPKEVpXMJfxGovzM4nAsfG359NUBq93RMt79sRxAkhMogEQQiSeJ7aeMUEoMCK",
  "key29": "owMC4fXCTeRmwoyrQiiEmVEXUNV9axFy6c9VURpmvtv6ayC1EUb983PcVhnbTqAqxVhh5uU1sYs9oFN5cR23rqB",
  "key30": "47vNt1yVxkSD1cRAraFVsjspKoQPpjo4y8PgNkHy3X1Zp1HHUuPwocZ9zryxoxkgkdy7tWCfS4UWVdxMzQNMpcpK",
  "key31": "5sYYPy8kyTyYckmJ1U9hk8MS5BA1a9zX3PKJw1SJhfbACtiSBjViUchzE1H943rfQFjAZ7nVPJtA3MDhb5CopvLf",
  "key32": "4xVDdKSjkSJWGEbYVCb2DHbNNMA5oBoNKtczCGdbA7pUYvSjKBMkVzx5ngzK7tjEe5bhhqSUNSyBqeQhxqoXHqWw",
  "key33": "2ADbs7eHnNboe5Wn6Pyfiv4BKn7145XK9iv4J6q4HL4vLzXdP9RfqcEYUKhZZFShY1YFnq4d5hQS6mgnWxGWtHwv",
  "key34": "VPLqi32yEE19gouztojL6VaTAiSnsvZBCFjeZmjszdm13LSP72sTwLiH4YzFeF3CqcphJnf3NWLY9u2EkSuGUzE",
  "key35": "39bJEvQxdDV71kaMR5pETJseQoFV7pgQP25Rz4PmBuA2hTRCnc1qYYUmZJeiMuVj13E9eXVpjTLPapar3Uc27p7z",
  "key36": "xB7eYCsa1aKcFTLDh4ytwjw9vSzrEdMzuffGAdNHbygxMqT3iPHa7HbdnRkLwyhsEPnBcD3t5Bwc467HayRmi2m",
  "key37": "3RKPuqWdgisjcuQp398oiSEPASNozBYVJcDuXWFTv1QYRHy9PsdQHgztWJ6W3ErsZDZdoP8fehWjcQvHQPXdHAc6",
  "key38": "5sbCkxkdQT3YErzvVabiiXmWZEHGdsKH9FTuHzMKMYXxikr4UbvWSBXfYmUVjffHJkr5925bHsKAicTyK5a5pso5"
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
