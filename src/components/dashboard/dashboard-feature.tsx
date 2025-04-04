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
    "55FEDQE8wsVHASZzm7HqxBRT5Ujhpitth1QGXyH3ZAsNTdG9xakzNtoGaKqP21bdKJWcM2kTCPgR45K96ouwLV23"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NyWgak5FEMFCh1AMTE1EsbMHmG7Ur2nJLCLhfjcvX5UNhR7q7hKzvYze7Lf1XUFye3A5uGAjU1xHhPq8Ym9SKy2",
  "key1": "EG85M6WwiLFAhe6BHykcXoAALbazXE9sZqwhMNB96spXqrdwojomEn2oLrm1KVbFbwGkQTx3uhKgFFUsfPWBPtJ",
  "key2": "57JpiHjug5ZQGei6SwVAd5nfUffD4NVeNDoHtGh6cCp1MV5gCgtXc9ks8uMamU1ES7FvxDkFdq7fT4dtvse7UjqE",
  "key3": "2hpLKbbighPhfJ76jqgG4unanYxz521oudvTxsUtShLjZzfMznvDZiY6D9V9hPfRevf3EYdDkXMCgN5LiAnuVGue",
  "key4": "3V2oJvtLNUuHAWRdeTX6tSLEx6GitGGuXyakzAVVVReShTkQnoDwmnZvmajCqAHPdMh2txuQUbKjhPtvmxGZTvof",
  "key5": "4rXeh4NFb6CR7Q9ay1S3B8Fj6LMTywtMpnFRDS1koXZDsUKtuPVBJTebjDwPdEYt5DrNoAzkfuwxzCy1vgeyVo6X",
  "key6": "qPsLVsTPCohgq1scsdG5kJhferHFRqivpPaKUnyH8DTryw6ErJwghEUYXHYMWEE5PaXwWr4xYJSBjVbAXojJmyH",
  "key7": "24ktXjxpvSEYbzYea6drneSFJVEjzGLdzbMAxkyNDZz1Ssm4QCtVtu4PdnzoBKTgQG722YUyC1QLiuqosBWf7L3M",
  "key8": "Z2a5LEL5w8Viyyeag3UYhRsmV2eBThrQ3LKSVMo4FDnnT1ZsdmXZ8MRxS85B1RN9vR7xcxZCsAac6oeEBQhwqK2",
  "key9": "T91V8ngThLMDKGJk2mmQfb2jeGpbBB7FPppBtYcEARR3MjWLjctemPVMjhcZm3AYhYpo6UuozNakEZurkW2DkPR",
  "key10": "65zNobs4xFawrHSpKQSbnFhuJZotFuAGn8qLiowxVbwAk1qgiGd9auZ9uK6DHQHgPTQTbLLpvyGuos4HXUTgQrvk",
  "key11": "5ej5qmtLp5C3xoj7GcqwZDWre46sWWFUt86oMdgrns1t3ztTpYgBiq9ue1WxXsQdbfGBZvSGWqrK2fF4qEKvjij8",
  "key12": "2w55NySG8jRq18544rCaZYBNAQABwYKxmELYGDf2nqMR7TukmSHPkp3mtreiywN68jYaiW9taSwovqptK9F47bG1",
  "key13": "21jiEXfSHT9Worb2FN9d7uZnVk1VAwtmHrYNz1ZRYaQkdVKkzrtqcRXu68AWEpibtTY5K7CizX7aQ1CF3e8JUzYg",
  "key14": "45G35EfDpcyrdwmgo75XPaEzYN2rmDYnqZn4cgSo6tW7JYUjw1bbBEqNBjomobuLGJcztuMZUePnNZrMrZTP92v1",
  "key15": "ASeCbmhTJRPDt5EEC6AohBFuUJ7TZ2Y4kQJToQTqsxVkw7h249rcDkTDqnBofF4JSGrWE2NK9f3zPo6CjPhM8yK",
  "key16": "4co38L7NR1D4rxmny2JvZYnhQeLVfYN9JY4hTsS4H1dRT4CyVE5xikQRnSNXqoXXyMvtpZk6zv28nwkALWSEb5Jo",
  "key17": "4bRCCdh9cLmDPqvGX212RfmaSLy2ZYPiNwhRziPLJ7reNrs2CTZeqECu2ZCST7VRbmdxnRjY33CBpfY2XdwXhJhq",
  "key18": "2dG6w9xsTr59tDN6QVxPhzGumSUyU3c6tzQ2i4KoqD4q6KrNLjkN4iLjTv1oxAfShT9KnsCk8Wza74rktk2sUC7w",
  "key19": "4X129iDuruViXYkD73M7tg3hm3vwpfEhFbpUYW4pxXX1qr2nmaPXBmiLDDuqZoda8f5f1yNPz3CWAcUwuUzRMrf9",
  "key20": "3FDjRvpUmDXbY66WQnCmft1P8ysyfeDR6nKdvfgpsjpgBKoh2rW4vzHx26xFFbPzEZsrdxAy1wMZXXcHfWZJrUTW",
  "key21": "2nqiGScSnd1Ryq2x6QHrqpx5ENELcKGeiHQTznQrTgqQYTsmi6YZqZcuWMSSXfKW32usRTYMJvFPrcx6kZvrUNkf",
  "key22": "5o9q73bvuY4RG5kUdU453yZDE9vBrFEWJjmK32yMgEWmR5bb21SxZqG3CVDJ2dicBFqG1AvrWJ8jY3FTBHgZN86D",
  "key23": "2o7xZssTdZBdJGhG2kzRNmg8sCiTxgkBV4uoLg1GdAVPKRQHcFupqsyeVTkDU8dw186E6xK9Dm1PUW8wqVjLJRsP",
  "key24": "4QKjZcBeRGiEHHtNSsjyvmUFQBbQdZ8G4eZdctr6BZEYYAbrkXNCNHEjRQ4DL1UrZ8LsfBjhbmR9wvkUsW57hVcM",
  "key25": "4EbbYanjYgWGpybwr5nPBiAUV6pCE5RvHEiJTfckhPhrLkjKfqoTjaVHyV4E6pFpbbgv93uTAtzx5PBzyTVj5dke",
  "key26": "5fbhRGAFJ1kZ2qcuJgEba9GmGkLz8R8YmwgaZr9daK4CA1NvJp83RGRUKFAsRrAYeRwVKWHiuLSVDF8dVVeQrjt7",
  "key27": "5PRyVt8fnEqAF7BW7hHwMsh5Jr71odE6oQunFXqajuCfVyM8qaguNWBybURJpxbDbrDffKdB4t1aoQg9KRmSDe9j",
  "key28": "JL3ZpCCAPk33DmrR8gkpLyKUr8yQuxdQJ1G8cTPKGmfbfuc7XE7WDxmyWuo95FwRon3dZfEfxUAxoxy6xb2haeL",
  "key29": "5jYHj3etpnCN6vTonv4Quxi4gKSXhPRMXAw7zcLA1qFkKiwJWYr9SitPMPhJE4xYydiDEGFBgs3eRbeJCCsDW9Bz",
  "key30": "5WsqaMXYvTR8Koav52HfiFJ1fb9PHJA3rsQcY8gCngAVb96ohbN1GJTBct2bGWEsu9n2XLdkSqd1gaqqZaGwAGyQ",
  "key31": "56R9noyvKTa1NH89Zs2opDw23XfoudzjUqwu5FfnJfiujwD7hKNGjBTbuVByJNpKydjzBnJk9bkCsNyt6WdRkcZX",
  "key32": "2cNqBvdBGJr3uWwmwtTvu7xL2X1xEtAzyz9F2SoevcvGHKNxS6XX83ktSbdBkeyexiqLWPgCSu9LwwsQFWVSMjBP",
  "key33": "26EeQw1vTvRyY3sjUtBSwcXkoR5WjgJnSp2frJM6DHejEEkTxqa6MLQh5q4aetBzPu3af4gnK8pYwqtvSZrHS6NQ",
  "key34": "3drr3vdGaQMbnaXDXvqWsDcgzSR6q15Tk1Ged3XvYjtzMGGN2pr8cwPrigGJzYXiX4Fg7hxWyVRFEaqo4yxLmsY2",
  "key35": "4JRPUcqddNGH9EsuA4zjRwBHwjbyqwx3vzM2otEk7NvWuuRqoQGtLzqNcTySsRjHjUtrXfpAjMradvbonjrF8hj8"
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
