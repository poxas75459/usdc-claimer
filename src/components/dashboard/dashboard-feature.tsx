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
    "3rWczt39xCELJjeVFsypPUgh5M7remG8ss7MPh9n4MM5AtsFYZjBpTRzXzNxp1eZuiNvBf5ZMdJ1FgqWLrdAxvat"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x6VHMUkvfGaxZF1LQCRad6ZUGuJQuq4CCGvDkPwN4HjJmaNmSkgZRLYouH7PrQ11kYwXAW12oTDwzRriDhigp1c",
  "key1": "52hsWgvmGvmww3zS6BLgHLzJ7usUnRi228PeVM9CFWuhnkt35kuxsWV56PH6sektPAnEseAgiuSZypFxh1H774Et",
  "key2": "2pmJJSRkd96K1yHawKMxmg8XTfLZXLQ5vQ8kSYCWMm5P6jRBuvT7WreYYLLWVjnLQvWJwdormmF7KVGfudH5UbN4",
  "key3": "511wgpa5MR5KpBXV77VrmfZ7DjTpqj7Pe37EaYTC3b86XFMtsxRDxtTCm6cGpacoNpGqPkg95nqpSRbFTC2TBczR",
  "key4": "3khvJGKp8JJK7su7SAjRTuCFFQVxmTzTkfxj8UYYvS33eFN865rdSaFLYMMBYMbQYiyf5nRrhhqUKxw32u5ffWFr",
  "key5": "5927zPh3EuK9QsAW4sYT6fqMqVCNf89dDdqfejfS1Et7zEYDZmXrbfG2u5PK5Y9WAEz63vXUX6B6yEhEk4hfSTer",
  "key6": "2znjr1eqfWY3f7JhZwVrWAF7NBuUjBPpmDVY5SJk2mwLy2J3gd4GmST6V8UCpErbhwi3d8xHyvFAbLu8j9CUiK8D",
  "key7": "HkpVdQ9W8joG5mi7QPSoexLaFzaJVdjXWwyscW1SasQUW6zJbkzjHTHnsJ5YHNQKyv8VxfXzxiuyi67v81HYMCw",
  "key8": "3XX5RGF7duKWsDJKDvWGnfCrKUM6QKv9xTZ15WDPw8ZHut7K7RVunBx2Txd72UnZJrDXZFo8bRGR1V3r6ntjgKcP",
  "key9": "3EpWrTjjJbNNr6RH9DMAQ65GUnPznq4XdVNNSg4ngbh5WaaWuJRetZwBZXHWVYG6wRmJqUGwBpSDsUY4qJtsWSMj",
  "key10": "4iuSUWnbwi6ADP5jRQYUcqBF5pSy7FVmJLSGNhPumZ6GbaDv4rXzawDCk8cynjo2LcF8PxCSEuiCRyKf5DfMAGEW",
  "key11": "Am6f1eXsqmQoNt8NzDhaFGThMyTLgnRCUoT4ncdawQfGc8H8cYMs1wdVT6nTiVJYx2YvL9C2RdPq2WAxYnJS8er",
  "key12": "2qBbWKb8mYStX8g2fKXMu3k5nFsvctj69k6ec4edJWCnXHDnug9jCtUzw6VS1waZKdSS2roKZDD3YzwBsoGkyCaB",
  "key13": "5sav5p5pHjc8UnGbRcbU6yXz3JBeo4zQ2McZYRkWcRDhV7uFN9t8dncA4MhctSUcyyn8FRTzpkczeouX8aQxHWrW",
  "key14": "4sHFbpCUnudsyWUj9rYdxswMWwUPPqxgrseMS1T3bTJJ1VAJPrEA4fyMcFtTr2n7eaY3BPsRKELMD3A89NcCi9SM",
  "key15": "5yYQW6yJHZR1jKcXgJzivVbEtSxUUsqKZ1xSAe9mn1ZSNuJedFN1tkC1Y9tjeejncf6K8yqjhZ4KVYFgHAE6ERnv",
  "key16": "5vdgBkN9xTAU1w8jy2NJCJCVg3Hz4LA7VBPUcKTxTHsEYS8zj7jPpi1khrR7XH959icqVghNXzNvzg6uSf7MqHhP",
  "key17": "3WchKRMmte1mRGuFvMWVv4oYB6XMJk9beWL8s6NPGHxsjPBkLuYo2oR4LL3zrLdF48asoxgpjVtF9cswviCnD959",
  "key18": "4YSqhLi4e8WBovaLXTM6q55iJBNHBvz4aRBp37oo164k2pyYW2rJBEnd5sJUwhDRrffjpb4di3FC2DZLrngErftz",
  "key19": "78nj9PZRJ9M55LWNuRXoe6UaQKUoSaxNqM5MZkURwi7fmv42tR7X8r9ghQE5dsUqz491Fe5NKwwnSkDeTr3ZZtw",
  "key20": "2zMti3yXAFEX6RktFGjVL8DeuKkbbaVNTFS9ttbYxv44BJDzqMDRG79uvshz5avBE9uhYS2LU7PF1rF8mA6VWC78",
  "key21": "2Q1uGZwuZYfLD9pXZNgEqCEfarvubsNoFVyFdjobX5XSr1RujoFoFpxQH5zDkkWwE26EkfjacgG7zSj1KH579hsC",
  "key22": "3B6KgTwRr49EUhXgPVhpsPJ6UsoXGaFc8sFM1iDKgGF6d6USihMe19FWUaW1Tw6i9bE4RNzoDpVUoxRh98CKZFyJ",
  "key23": "5y3T1cBv8rrVS8z4JP8Ap5gFmijxWJmq6GmmyaeQbJAvQExWThiUywttLJKxJPKa3q1K2iPZgqK3YF44gus4xg4c",
  "key24": "4y5VcohVLqiWZLxYCLHyKF5YFwFKJtdHdAwS69QNByBFazTXy1JiQ7rQ5mKYJKc9s3snGfgHeQAGJMbaZU7qK64M",
  "key25": "545hZ9xhLLfbYDwhQ3CdmmXxtTQ3mEXc36SsX65o1KVg1Adspv4unwgqbE7eTdNUnq2zqQwjG3RXhXMvoaC8MVzh",
  "key26": "23iiDi69KKmcRDUm2FuN6ZRy8G91pL3G7jc8n888S2QvbZ3Abb9YnbuFdBoRgWDjxVhttqYVTnpBbFDyXW4jwFYK",
  "key27": "5WPgxib3GHsqWJkWobZdTTzuobKBdwJfregffx2GVUGYq9awpsyanFsCRNXMmMA5DJMXd8sAUxXiswuaQoXS7Vze",
  "key28": "3N6mrQtykvofEex4kSvZnsHHUCTrigRWaK3rNhvJPsFsCZbhZRyVfvnXQwJUfrDo4GXHqKUKB8zMRvNjBiex2Zwk",
  "key29": "3kuLnS5jBoL8o8F4AHCukUQ14wvAXaxqHpuZvS8siqoahSjcD5kgbdvytosVyX8LyJ2yzdRoz9HiKN56Bf3gaaXQ",
  "key30": "5N8u89k8EPBPTQFwUfemYjWbJYWDuYeXG4GHTMV2yrWkmzo9XbBSL7pnVGhjFevmREVW5ENpPZc1P22MfwF6TGQs",
  "key31": "4X8QmB4jVzov2q3P1hezBtqAtKcsscMU3gM6Rfk6xHncM33EgHtpSUUTn6ggyFgs3LTkNhQoKBT84DG1kJ868Mct",
  "key32": "3bYbgfRkm9o436fDHbuw9w2orKe4qyLsHjBAuZz514rXKoS85FoJSMJgUtzGvJemq8f2NDuAJxfrjHA6JLquufaE",
  "key33": "xAsjGAm7FvVeeeuUsYBbgkccbuvi2wgFjLNihq3H6nS4KWgemW4p6xWSMgm1BUbQRGfd34iJimrdrdSLztdpude",
  "key34": "5SrAX4mxfxWNuQaZVNgkRMvhmEHG5ojbXuUnUcXYpJs7jhe1ob6E3PAHQsogukhonKyaA68kzh9gdHppYD1SKiCD",
  "key35": "4xwKmByWmh1u4msH2EV6QQcEuyDLc9zhqrUqDSt4C1kZFt62fskKdriHd4Yz4u87HFutnVwFUyQ9Ep9gpyuccWkg",
  "key36": "2tjtVqSzzvboeUkR9qgFN1y4vPXRZTgvZPvYcnHYma6chqLXH1pnbnx8f9HujrnnWLBNzgYDgoqNUwpyrjXqB5wr",
  "key37": "55jgFyXmgMrgfsMikZJbBQmWLdGJA98o6v9nMtSAccCDWzQZwnxsLnfhRBBeEfKEydbDzeqquZLALHM9rtdWwq7V",
  "key38": "3GbD98H5VngtM6xKs8pdJY4QCAvfpkmCbQaq11jpea2biDTN39JXX8PZQp8Jzx1KmN5dEJKTJBj3uWzUPpEaNrbP"
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
