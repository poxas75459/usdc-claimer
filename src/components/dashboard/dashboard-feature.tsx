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
    "3DDK6tH7QSEaZ8ESrs4t2zrXJo2Rnar6hq4AGFVSrSpyb21WBqgf7FfE2h9H8PnELbbYKaQoPi23dNKXvyyqR3C3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RPRqvBmfuLkxTVzBGFLRii2TXJ8bvUpErKsaqTjmJsqWM59nDkmFop5uUvtHCZK8nxFiYSr2CEYiRmJfrHyt7AV",
  "key1": "3oYdbnwoscVcLAcjkGt8fnBLsxEhBxqCnwP5KkseUzUVhayCxXAnqYoRXJ5P34guomXCsnYmPYa7VQXf3rbJNbSZ",
  "key2": "g5nxnDEViinFcsDVE3DtcwUYvism5aZLri7P5RkUVP8a8AhaGbpFSChZovKwFcTA7yeqsTMUQhukx8gYMjTuwAr",
  "key3": "5Bb52YrQgLGpposcAKKzgreJeq7UhrB9JVDFPnyNq3b9iHoRVGd1h7CrRV31uiCsSXHQeNJKYnXTS2skFRnq2WbN",
  "key4": "23c9LyyaDXYwb6SCTuPDCmpooNjV6JSw2ZA81wRtvHVaRBBH2GdMhZo5cQAQXV8LQySbntb3GR2p9miaKkUuneWV",
  "key5": "5bYBv4R5N9LT5H97LpRsPRWGVqvirUiw3rWkGfEFHsHj1gq41LsU6Gu2ejo2Zumd3tinK56t2okjpJPWa9AmnYWt",
  "key6": "2LsYkGjYxERtxxoPj28YfGyamKUoQCfgP8ehVbjdAUpugMpmYrwL53Kw1K3yNjx2LQAzGrkYWYvqkWvC8AHK1nd9",
  "key7": "27guqcGcc3MpofiFJ3coSPsXFsqAiHHpQWX8dQ2iYncCQhHcb41PyV4KTshU8ZeS4hykSbiqSRbvgvttUdDiFsiM",
  "key8": "4eDsPnRBkPkXswv8vXgrZk2ja8ypnhzzWYBDPZSh4pnmbvgQAKZUyRxhyF8MRatb3ALiiQMW1Zk1e2PxvLbMDNGY",
  "key9": "2MAiiy58G8jSXnEVsBuRW9xo4tPFiALgCBhCDa9gHutdP12tAFRF2D4kpHPrdXiqJH5xvmzuP7TPiStp4rLfW1Pw",
  "key10": "3nMzN3tksXxEYfg22yGeFbnjh2fdp5nj6z9c1X6orXhQxyC9pD5j9SSH5aNWnXdgkQV6SRFQDB4SpybcT1HGixti",
  "key11": "2bzsQWs5SQEqSzG3W4DRtR7N8tP3QdQRSyAgiteMqAYX96grG1LNuEbd2PmUfsb25vytjJiRxs7aUKYeM9xB64xg",
  "key12": "4MAdEuoRXcES8QRL4v2jpXuCq8F6BawbNuf9zo84RbXom6JT7YeqSdSrpvaYKU7p1FEizVH7qYces1MHhxdn2SMQ",
  "key13": "4UhxW3yDU5HscwCiZpRAXgSNRWh2R4PqKmZNVw7jKpopivX63Mo3CVxFkV3UV26QSQiRvJWA8F8oKU6Y435hFbAg",
  "key14": "o6ZY5eVtykipxiVvzBkgKrMeTvLW7dUM9yiNkRYMptJbaMWs8LLtR2tjvAxTo3PKnxygmXjVe1jL3PsKcv3mvvZ",
  "key15": "5v7kwY6cTkGC65wVaRiWkPY76irFH5XXJA9wkHFqCyVVm8qmkHYYcX6kSA5QhK9qazjdKpXyAcXfGHAeYW1R6T6K",
  "key16": "CVD6LM5M4KHezsymG2mBsbzENfyP8fnWqwqTsZvBC2NXwLvkzCqj48Us34cDK5mLh1An1V7Ey6PepCxeWX7euCL",
  "key17": "vH54nEjKsiNikcNDC9ijezfwFnrfu6WaZLryGa4S4HtwJYZHXceKyXbNAKXPgsUVmwVnMogAfT2BRFHuW7XYDjp",
  "key18": "5qg14kAsDrCgkTidpeC6NyiR6yhFm6rYmd1qFyfC4t1mRzVDH9ejue75CHdzUjrJ14xjtd3VkgUKMAvL2hmAtaEw",
  "key19": "45qdVzVGG2cRDkZpbgqKSHZY88qsYcUQ1wXsmuCWAJGgxuKaYWVCh7nQQpxYhwrC9FfeHKQHgUSwT7yaeQeTVrtW",
  "key20": "2wqHJE93qngYr5M4EtGRP2LKRGum7S2TzE5Aaux3cwsHZEq2rPYYAWnToJxiZgBgXNcnvfXJt38BhuozXxc6jokz",
  "key21": "4M38HAxhDdYGfKm5fMKfAkE3fcfrAGeikU35N77EYxJMm5QFgoDsevCNy8QY8NbJY3svQFZUrg9EzsCgf5Ug4rgz",
  "key22": "ko4jnKVWENrzsWU8SrvUWFn3eoPvqEThJDmqDSDtDgRHfchiojaihbmzMxrv7Mvpo1kVS1wEeRpQ9FogYLUXMTy",
  "key23": "4muEG7v6xR722n9jTpWANFeEQXHPqfnE6gCMXYK1uYJs2wgBkXn6Rm37KXBX26tqTRa6iYspEUWtDsxiqfh8wG2Y",
  "key24": "4Z8xxQ5eM8bMPNiB5LwXiN2AVtL7ct6256HXRR32UUaK4T2SdYKkzJWYWArenFULhAqfqMHpjANdFYDYg2fNRoPJ",
  "key25": "3Z3N3ZFVkEXnseCM6ApbF7Fmp3cfvqPB6EQQaM8TLPxMKmpFo46MCM2NBJq9MFv6RS2syQyeBhA44SZd3zTzcBiA",
  "key26": "3PwrTbDfSHE4rz2GFacoeFtgsHGJ5jnqtBJbifgSDzj7wFLge4dSqyJ1idXucXcTwBC3o9NZfPewWuELVEN6Kc1M",
  "key27": "34DqAPEHFme6haBA9UuxuEetX1ZJoWyXAmDRD31tDuZNo8KhsawaDX43nytAj7CeLg2zb734aPCTzKqCYX87Waet",
  "key28": "43hfUk5UyHLVgYXAEEktXR8aaqzUiu1qdYAAnWK1EeSyU3a7aD2gFBLpUvWCNW9agBqbBpzG1CFjE6wKVxE7Xe7n",
  "key29": "4zmEaxyWtJ8KW7Bp41EUNmYWxi7CP9cJ81SaTAkYCNePAZe53nLumTzvY84T3Jipk8AE634eZD9kBnovnPFFhbD2",
  "key30": "2jrZnWZE2FBAFg1j1bAY9KqXDbYFpUd9XF2DUmC6B5B272NW4Z2YoKvuCUrdCJeWG3673LivCosmeWcEhP5x1srr",
  "key31": "3UysWVbn4tdANJzFEpAiaRfPgSpWLF17guuQAu8AQXpgbsMcYRcUyAY67pBdf845TF5XnpQ1yfBghWGzzSMRzenk",
  "key32": "355QJDZW4DBDtWdEDndSMtBUU6ikM2RrYcjFRAH66hQhSYNY4jcAYLxzanvBrFfc6MENYp56aRLp8rb8XnKqmCtQ",
  "key33": "JGG322riKcijmp2HCTAXyGNML5UgXhip2Npj6ayHiQRotVL5NNghfzfQXKESe5EfvjBAK9D2DSJmQ3WSSSWRL1N",
  "key34": "5H69UCfaoHL8WTLHj3oWb9QpfSJr7VWGkXVW5nZ2Ru3jtD1dHQnWGkJKgVUCNtCHhBVY5st1GSTAhqFrknaVb5M1"
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
