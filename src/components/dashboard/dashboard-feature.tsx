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
    "2YJTgHFKPvoEh8qK8piUkptPhR53qGDFHdCxNQUdDMuRR5vA9oekLeraamxxZz1pKJ5HPkTKttyuZ79kdubLsnR3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6567khtXy5LtofTFCFbe2EwkTQTtxsEkBQ7r9Qp8YRJrDTcV35V6vuyAJUrMpk7Y2M9pAsKLcUNabSMBwtDjKRRc",
  "key1": "5mrFXnEUYFGkbEpubKFuV27QC4pocjSRRbtfo7kE5CU66sxc8VrWiN2ZkzeTWcXqEb9NzZRdzuq3rb2ZUnEymeWZ",
  "key2": "ye6BdWmfj41xRPcb1vaa7Rh3vZkvepqQRtRfmxZi4MH8VjWsxEdfFjku3XtNdqQH5egwXucewuXZSMnQUqxgArR",
  "key3": "5eHdwU6CCtsguLau38swUTMvvnQyMnB6b3FgLUT53A294wa36JPG8rNGMTyrEkJ6GQWNfytmUWSbp88oTiqh2KNu",
  "key4": "2JcBP3fm3umA61xVNSbTmMdC2q2LzRytZWGVzpRP3adD87VyrrQ43rtLXWU9McdHTUKn5mkdC3G4pFoFwSfRzSEJ",
  "key5": "3iqdM6M4t5zaei6TvTDMCwD3V1bEZnmcPb9Lq3jh4MMUazzoeYeEA9pvzBZCE66bDv7jSSf1PUemjQ9TP41ZTp1b",
  "key6": "4jD6a5578t2dhuaKdpuvEHTD9JtxwuimNH1ezyudTReF3rmeSDbFSFHzGyGJHKnoGV5crE6var7rpGMYj2b2CPQ5",
  "key7": "27mEq4MmCvzyuGzgZLMdiLfTZendqzGpkiqY7SpVnnDpbiiMcyHPSZvrDzNVwUeju7FHoDXHiCgxM77FGfutMJQh",
  "key8": "oeU2kAde3AnbFWfMd6kDfFAmLEkNx9LBpxiUuyutLuTgSQKqbVnRw5gcvu7rp7yWrqH3fFHwJgNFnomTZj1oxww",
  "key9": "49QGpgUm3xMauJm4XVGVMAGMKvbG29JLhttxQN7VumjZkLwfRiceE2eSDuTzDGponkVKFYKtgm1fe3J3ci2jfBs8",
  "key10": "4WTvPCCmHwQenZA3hJGCcWroyMwvAAoa5ATX8Zske3ArWLxAYK9niF9eAW33pXZZ6B7EsD8FYNtfbgUW12uwToLT",
  "key11": "3uHmduoQsSsWAETGt9Kb7UsbByNN8syencAA5TJNvHMcm4kWRbQvrwb1kzRhHR1eVDjT8Y7QSKcG4KALX1P9sN7X",
  "key12": "vBWGHyseGFQXc6mrwL4CwkyJAM6SVnQYGnz2VXkTRnqFsDP5ay2wK1y8B8dbswzW6fjCkHNyrmZ8F1P483hxnyt",
  "key13": "5avZN92PU5vmrdHyNTuXdMUTSYub8x2cfQunYVjFTLiJ7cLZeUAzZpvrmkiEDBR4w8WhqNA7SxoXe6Rh5SJz8d4N",
  "key14": "UR1bFdZDBMoKeQhhnKNfmuKU9M8YhTSgVs26GbwMs4VKi2ssquyuihtd51aHtWmZmnLgk9T1yyhThgSjzbJJ6AM",
  "key15": "5H6fBurwBMQnuWVeCAj5qiYamEXiYU4DE34aaGM9uEHxi3hLk81FCr1VyL5UttR9LncjH33V1aRXmeaqnZotxHRo",
  "key16": "26gab88PYZa566nmZQRRqSNHGfwMN8w34xB29ahM4FApVZxifWRYdP4RDzutn1Y5i6gTSoJr9kxTsfEV9R5YTM9y",
  "key17": "2AMSsv91D5Ged3MjbJXzkqUaSVnYFoZtpYhRbhXQtGKWd6eP16FqykvkwGrNmSbXRtaG9mnXX9FTNbEwKbY3sLzz",
  "key18": "2CJN6xk1RDzgEsuhEpTMEy1yqVBrvMP5AYUCDjT9VcrWAYrdgiXeR8kqGwzd8k5VXJuRXTChN151iRZxvXCP5fdM",
  "key19": "3QTHwfpPFRzXFGFbmwCLS8MAhqYdpkQN8qhbAoF6fk9wgSXG6pK996hjCrQNZqZctpKpxvBkVZR43H7okFdZoFa5",
  "key20": "5T7oJ3GLT7SWeaHghFoTdiyNpPbZieDH1N7uP7mRLqLKyq9ewe5dRHxnvkSWYqaywhM5FMRK41XG8cQZE7epLSFF",
  "key21": "5MrPPrvgnA9snahrkazyoWNTc3UfExNeqakkfZPzcULUVFfujpPkxQhsGzrhjPxgpdtj825GWn2hV19QYKzmKva7",
  "key22": "3YdYdxnpo5nDZpTN61Ca8fRQspfbSUBTy6JVdz16JdA3orBss9qKxvTjWh9RoHTdgbpJeiAi3YiLFv8SAoXjjyF1",
  "key23": "3fuWvRwThstr5YLXBP8s1yqrjyxiaHfjuGuN88czcxBYjFqAS2QdGV2qnoaLNBSXd18RMPqAi8TK7pe2RVzDVcng",
  "key24": "35eQp7tuSdHUgZAWgxk3ay48gwDg6KqAPYVTuZgHnidA3PuwaL64Us4Cw6f356Zt9gfiRorAaRdhDG5J974fZxw5",
  "key25": "4pskZziCWvNqyBa8YiZZ2zCPfDy9RWbuAquhdtMYRVZAASqv7Q8Xhmqfs7Ye8cEjKP9ydzbicbiiCwMPHcW3cPQ4",
  "key26": "2nr4bRsYAj1SuzHYF3WNvxnB37caYQXi2YRbwx8f2WL7M6Jgd5yjdCBqosXBWs7fAZ5W3YNgaskey3ETxBaFg21F",
  "key27": "3nnp4vZ2EeYU2xHx9FHBrD3CzhdmmGcFtUZNDpSu8cQJEh4NAgJZmw3P8PW4mVPphUiocEgHV9NQ7yThHReZpQj8",
  "key28": "34hSh5Xvgiatfn9bsawC4FSzHcvd6oyWXcwD99qS78WsyTrEtR7NkHcKQHPSf2GnpgtLKzvXGdRsfqcGVcjGNYs1",
  "key29": "4UwR11mZqeb7qKTB4NCsok2e3oFg3L2mKuEbKxjNDXCEBfQryNCSzDsGMFKrbrT6McYvmLgpoxY8HL3cdhbdjk5K",
  "key30": "4TH4k8cCLqkrk9m5f1QAGXWAgC4sTmbeaNfoPnmSg8jGPQTbQpxFHkAFY7kSwKMRorgNRK3AAodCzyS5wEK4fua8",
  "key31": "3M8Fu3yE1BHqAyzvmjV2sLcL3XVoN5vyx7ncF2aEEAQhdaVKM1PzkmG1HkYsEw9dwCp91MxgPsdYTccUme4oXaxn"
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
