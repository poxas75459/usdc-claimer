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
    "2UkP7XWjS9EzzNv9GxJeN221bkWCvhrLQS91wecdXfYKC6LphSrJiEn3NgVWRAAqXLaHEE86q6QkvYKEhKmxfSh2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XX3JAiH8ahafKN1nwiScHjKhYNa3AfY4ERmr3B9qE41cMHPnB2qCAeqxbCN2NLmbfayK9KfTKrWsboGB3h24HSM",
  "key1": "2SrnaJAFGk3xdb57fPzYSdzvu2i2KeioS995g4TKQP53G9y17krf42dxY8ppd6YZrAC6CqQXfaprr6Ud2svv6PPe",
  "key2": "2vLMdnrU2fb3Kdc5fxCYNauXj7fyXRMYnxiEs2HGBhbjM2bxjaWoi68VDFMYxxfffcQwbj9Rh371bfw3S8t3trun",
  "key3": "34m5mmexX7e96vpsuo3DW3urP8wrTkfiz4gukGgn3mQQKUsUyDxa1zCirwSP6AedKLwqvzqpV7rPhfEEQQYskbc5",
  "key4": "38rHgVpg4y36Udqvec9EiGBMCY5nwmg6oc5AyQt4GpWv41n2AkBTDMFY87FqCZky1LZQpRmvrjkRxmM7cZR3ef8v",
  "key5": "2vRakP5jbKuCHG4VYNRpKJ8fMLp7CEQ4TucVAsBEjJUdaFxk71ZaZjYQ6AWoefKZkW3ZXcgvtohysHee4Y3SY1Zx",
  "key6": "3mh2Ffcyyhq3FJtAp2UPYCxDTKZJZx7hFTHaSJhp4hytFo5FRhuhj8TbyDaYPWXsYPhmt71maXtnMp66exNmheaf",
  "key7": "5roUH8G8BfQGyrYrbVquti5j3tXyYknokbgA75kAFQcLZf4A9EMtE6t7xDLao4ArqDGTT7qQiuvkkoCJh2UwRbv7",
  "key8": "5REPENWcMC6bLfrHe6Lxsage1FUSsxAW5qHr1ieudQJJdQDXTCjSwjSdKRTXEgiC8yoto1eCcTkvFYTbd3W6VdaE",
  "key9": "gjUpXkBmP2qsPLaZT59ywZj6zmUgE3j3fpqN93EwowyLWQoF5VzpDbj59MwTVx9iPZQqQgbTqyhHSxKSyHgAneJ",
  "key10": "2pSpNbSakPM8636yqMoiZLeKpeNHEWJGMPKn7HaTVbdWFdYHsdT7JpbD9V4oygxbQ34rcxBAp1CFAX7qQ8W8LEFH",
  "key11": "3tu1e5y4pd32s9BuqZKc6LTxM9qv9UGZJxeqigWdtAauyD4juQraXMMuiNbJ2SpjbHfhMNhFx2S9jmSEPqCFcwgp",
  "key12": "4d9TJVph32UVCoMekTb28mXjPKgLy5GNTHUFLcpQaBLw3Dq1UT6ideAXBi2NexbrjjGtE8rx8YdhbHDYeQfaBARv",
  "key13": "23ZFJiXRUJVhXsLkwL5Z6hhKWnrPkheZYZqKcD6tieKysJAUTCBvDY7ikHcDEmiWu32WPJmC8WiYbv1mX14kMT6i",
  "key14": "2vsDRBFyudbnXvgEgeYmW6jpbaXmxh6CU2A1VkKsQ261mngwDDBqutiiTYPx5XTrT2y41CHCZegtwEaQz3qP6g4Z",
  "key15": "2ZZNbeQd2dcJf9av6hD3NuX2nag6xBrB3gSqiREYXkoKPVSyns97paLZJD6t5i2SVPGCMCYHDQp4ZGa8VMkpvQPd",
  "key16": "ZD54H3hVkCgh2JKhKs9Z87xKaiPkKfDrfG2JaqrYRX7pxYLkr5tyMy2fABCPvY4yo5LxiH9XqqNmGEhNDb2ajq7",
  "key17": "5ptKoEEHwbVNJqH6RyTn3NM5LHii6eVqKjU28DLBABScaws5ks7gHwHLyN7MAnbuFAGtsy2rPH4YhWX1rJ9VMuFr",
  "key18": "24LMKibWZaY6gsn1tjvdKkNGMDK9U1dPU8hVSn6mCSBCxPxTdsiHW4fXcCuVQPD6KJSPbbwSAZdzuMn7c34VRB6i",
  "key19": "5h6PtNtGMa3fSm11edYFkhKixSdXvxjM3ZVuwF3wURA6cWjJzEadukM4ntE7GMe4hUoWLkXhKbNb3NPdXXxvTeQK",
  "key20": "5k3a5P1eYNYuDjp4pknaEY1w8gEri8nbR3fqbkkTKA8JkfR3RLK1u6UBZWWMsztLGPYPM7HmvuQyhVSksHmxamwE",
  "key21": "4SRuMpd9ehJvxKXnFvmhJCpgRjbaPH7a6Urjv9h236pUZst3Cx4E2uHn5T1nVRdjBmTZTi6RVLoYBLN2cmKS5WAw",
  "key22": "5shNpDAwfz8CpELze27Gb1uX36NheJGZHaYrnkB1kS2q9Zwvnnnn9hHm2MckpddGgQQzh59SkNgXPuoQtzcJbfw7",
  "key23": "fLx6XwbW8q3CU4oHfZ7TKpe7abEQHCtekduAYMumxdFsSgM9hsCG2yNf1DQPvdEvyx7An8DddTJittB4zLH5Qye",
  "key24": "4TvZ1ewyf5FgjdL8LDeD5kiA5mmBcgSgTApGzcf8FQFG2gkfHxCqq2YXApXBQgsH9nmfKGRfQ454VG17qoCCNX5S",
  "key25": "2r17hhjAs1rxzZxsJqLqwkuuBsY9i47NNhL3X8PE8sLWcDPa8pQAkaPHXx9iuo7f9JASoS7ZGFo23ShBzoKw4aYQ",
  "key26": "3Azwe5p3jCu2EuxC3Z2udtXQvWLKBTG2grPTeDdR3rumQattsVZKVgbUbjbr9is2c2QGZZZyBUkGCYXRnQvQcPhp",
  "key27": "2NqrN4MYMVeyF1UQK256fVASWMDxnGLB6LkHACfBPhVog4aHB9EZHiKpxfLR66Gp5J11xEeKfBjiy18PXoE11i9i",
  "key28": "4FmhRGUEt68Av1CXCDtTnnj8gVHTwtsM6VbvcT6XcBmMxFyBpdwcym1thFT9wkKv4CFWA6afkEzrcuqmk4DgV9HJ",
  "key29": "2NHiMcDK72du8k8BvJrLwaUc5AA2YPZdJBVr6aFeL4U1v9uyRAQRL4rnCHmX9Zb3PUAWSJ3w2ZoteF9S3Q81nULL",
  "key30": "oBBqVUTWk7nTkx1DPxNevJA2k5mTyhJxccUMQJ4gc1MhHWnjGHiGcuKt99ZmtPzbiQtnEoDghRywRtmft38v2sB",
  "key31": "3AGAuARQBxesPoj2fZ6vmqUGHH8vJL7wUHu4TYoK9yNsLrH32K9xtYVvXPrjXuXjVfT2CnrJPgQDa16afz445nRU",
  "key32": "3nFi7mYsRQv1MnVGDxw5Ug4yUa5XrVgJQnwp9Pyq1k2b7iZdRCtKFod6YxN9s9SnJ4475JDKXqGgDX6SnmDuavGe",
  "key33": "3YEhNtSBrBHCTRoxWp4LvL7RfRP65p4CxYFyKizgqcURx7UzJ4vuSc9kFMhs6P2dfx1ynRZuprDKhxt8c6mBA5j1",
  "key34": "5iXSCkX3uxjpYyy4WpY4g3znsbHt7bpcPrHzBcvxygRcXcPbxC7ej69F2ggL7KQZ9SqQvnfoxRwBe8QbKY9hyv57",
  "key35": "4WAiLmjSnD94RGUQ8xPypyzihbDw88mPQLxBjCGCzWJ1q8QUMv1EdFvvsCQ3gtL1TBkyNHgndw8YHuUY9pD7gA18",
  "key36": "4nR7No9CRMVohuRP7HwigPkHBB49a26yCPEHXcUr4NSuXn6siEamQsNSwSFySxeMmpCnU825pXDpj1EZcFij2Rdp",
  "key37": "4qEFP8nJVhhPjUEvmM84r4xQHec2GYjDsjT7mnkWNuLzEY9ihfV8tvBCii1mTYUmt1nwgTJ68ok19Xz3kFcMcmen",
  "key38": "4ywoiAMRunURF7upqwxFdxwZQnevVEmRMKQKJ5f8uaJsgFJbnNaMJ3Wjz1CyeRiqZYXUkpFjyiei3Fmu6tT8ra9w",
  "key39": "5GeGPx6275N7X21PSUaHDPakPHnKKPHvYoz21VFNjbfLkxC8Y4g4ThsrJbuCuetM7MzHPpRJ5AgZFXhkjV2o9o3F",
  "key40": "32xbmFe2Jpz7Afh2m1MRmcsXYZAhpxsJ6y95wf1bmDVfGPj5Rei246fsEngxUErs1hFguAJGjto3H4zkrSdC4ZqV",
  "key41": "3XA3EnuoVKbqBUXMoJYYUzAkWLM7q7ZD58VkhYfbYru2HdbUDWgUWju6MDifxxZuxWyAoEc6Huxu2w5K4LtNZvXi"
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
