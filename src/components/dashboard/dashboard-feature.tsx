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
    "2GeMJrcjhAYBm1TriZqGwyBVstw18rWUYWYQXsC5CGw1aoBH8vqJmMKud8oHG8iop34kJToBjaJHGWRY12a2v7jB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uY9iDoyy74iiKzAkm1kdeK58ycydpX7m5LieuBwgxU5kFP2v5HapZyoR63PkJJxwD2GA2xbfCzFYapabFmExevn",
  "key1": "3yGiRwdLrrxADU4W5etwJY97rjnCwkWQYxrtRmkfruYwXm5rCr6J5eDJ6PJfFmwbc1r4WdzgPw1wk3cyuFU4aJ46",
  "key2": "22dZRPUrcnp5vQeNkq1BdpPTF8JBSyZNkoSwQrAJ1hNE7dEHBGEE52pLMqfG1cePSauKJCcCUpGtYHwG2T7KtuVs",
  "key3": "ZrKVcKdUcWQ2ZGMPMobG7k8g6roiYmmuXGeCnFxaTbtXdFENMk3SbtTiEGL71gwib76JwR2XVnxdTPr7A2YE2Ci",
  "key4": "5szLu4EB9KQ2zAFKb4qriQo4BYy6v3p72q5Nyr54kTcJKZS6HBfG7sTd7JNPVHFXbq5ViVRHo6AQVj9kD9k7Q4F",
  "key5": "3EwLXppifuosTYUjoBdjDM8yKGofZQJz1fc7cwkwL1uB14e7MxpZySULGJ3A2zuQSfGoq5wf4nsGbhmnrxUkpe6z",
  "key6": "HdxEnN7W1F8idgRi9ojKFNzN716r5BZLTVkEZzNdYCLxW5QrzQHEopsGRMdxi1E4zySQhvMGfLspwVCPH8QsFxN",
  "key7": "DYJEeVmfKCugJ5PRrJLXgRKtb8ZAZTJSQgGUjhczMymSMFz5jvthJWMRoWY26pYJmCvcFPhMfhzRryPXVQWzpEM",
  "key8": "2yQVR3sVWDBKL9SAGcB2Zzw5r6aQgoxquxHQ5hJnbS4xHZ9JrekAzxtY9zenTm4LVEPcA6HSQ5a2YnfuNvkMJ7ji",
  "key9": "5PYd6ehWnfmkPof5TRTZV9LKPjuNmhqX7THMvsvFaByusxyvbzk2RQaUWY95owLynKDJWBGsGzWLQC85Sz3p49V1",
  "key10": "29hXvU5cfcC8ruycPXxAvEpFUdZQAmpgneAeFDjPoZcx52CuAH9KumquFoHe5KbycWWkzwG4cbxgHstyrffkQesM",
  "key11": "2D8drzSBssYPvc3829HuHTd5iKXQaASoSE6oWmAiD8Xrc9ZkXa15YPeAAXS8Z9w84cCAgNrJwBw8rGurN86FuwNa",
  "key12": "2MTjzUPy264evCJf2NZTxb1aVGYTxNRsxkH9vCKQtQfxuArrEkWdAMcMtxnvMNPK74Y17g1ernSEakxkEeED4tzD",
  "key13": "2ydiJhWfeXfHywbJ63sMbGACu8yPzCaDHdfaV8E2dRMCkdR1WQXCDfU7fqBGvXLBVGpfE3ELGK3uvP9Wo2YPMPbo",
  "key14": "3GXq7dkstXcxEMJZ5fWp9j2SXgF2nksmvCFoZkAzP1VYJeTT9i53GnMJMbHWpDRTBKtZxZjMw538rt1XxQy1hyab",
  "key15": "2tVNVEBecXj6TcAnBvrdMMJBwAtUnSakLALT9Ye4UsgbW5765yTwNwBJvFKMjdHvumQeoATR98r7eNvMxej7NFHb",
  "key16": "QDtjjTbasxpsqaZQAuDFL7CoiY5TirsmbiTHjchD7scBBYB7XoYpP2dZkYdPu256u7Wv8rwLEC9CNBuyyzvMhyH",
  "key17": "2LC6jKS7Z38ya9EvDLqAHsYrHvZoqDUjnRs6iUCT4EhmBk3Cm5r9xfhcsbsNfTCZTJR7LqpoyM5Rre7zuj9FP4nc",
  "key18": "3yerhixRgmmtmnXEd45mpN1BGaH375Zz9rtZde8U4JcxaeQZQLVtV1hw7KJciK1hWWJ75M9qcu1NMYrE8LeVitDi",
  "key19": "2XyNqk53QGe6w1fAuL8tjL3uJpGULvM3kLf1aA5eHv89TAwuPbXQ4KkrMzuMPuUx1L6EFG9KGxJE5ij2CJo58vwo",
  "key20": "4JMEBt7hQ3tovFSrg8h5W5hDPSkHvwq911As9kGRK3FSey6aieP2J1DAc8Chk8qJ4G2Qmc3288BpUeCn9VcBQBKi",
  "key21": "3AzEeHUJpr6M9cVAV1trovA1268kN1ABZoJnZgzN13mcdzmcS7dG8sh1Dfa3ksFpaU3gAp6LKsoqCLGEKpVzFLfA",
  "key22": "4S3DcsBPvBc2g5n4MNSJJm6SCLogsD3LJLnUYaXcRJC1f7yahbHazrQxHEMaz3mVESmFRJ6wjbp8CnqDhxJza2kK",
  "key23": "5cgwziBQ1HJvz9nRtVmLqBpzaxurfayTgeSGAy4QtMkxC2uXoEzxt4zgWPm4BeZ2CpiFrbFac6pP7w8T4SA8Ax1b",
  "key24": "2dcVsLnSxuRANjcr3G17FChmvXZn5UV4mUwYNyyQ2GjJsJzDykZGoV6CSj8Wdq3DGqSBiQYxVQjFNxbyxSTGyhdh",
  "key25": "2iepoVSvbzm5pcN3Ssx3FeKMCFqRzpro1DmekeukWLxHdMW9tVyreDjssfp8buHae5VX9dXYbXTLouv2TZ3MVY5o",
  "key26": "5BNjeW7Mnx62GHY3W6knVsBcgMCMZZ1xsftpUKDgUjpyWESM7Ks6FgLuZAoomVnCrw1ox3daZ59L61gF3e7r7YDP",
  "key27": "5Um2mGWirrCJPC3MDsNfoc7dLxDxpgayC4JQWZjqfABTqys6TdjqijHzNcT5PcuM2CUv9J4fvYnR3qqgAXZUTNyS",
  "key28": "4HXHe9amuqYrSZAA3Fn9JMw55t5LxwUZpPKpTTS7rgFyXUKQZzyFMbbEQV8oBdEd82dfmQBSwB7Ky11z1r52UMHK",
  "key29": "35ehNquWzzr91AZQQ7Q7VT4PQmT8RTJaTxr7fnLLoYXXyuyKccxsExw1zJTow91q33hfsgnYGY7cXm1rhXQDYmCY",
  "key30": "2QY5C8zcnQQbp9pLpEPQvNMeMKQKo4HNica47xneux6DDPqtnG1qHTyPKNWsXU3n7vRthDFuHeEyj5EVeDeAZcuC",
  "key31": "2cKCxjZs1W4aKhfdV4sddUnAkMVW9GBxgUnHUkvqTZRFyMxNGsp8FWMHXEudTYKKuq8qCtGoniRTjDtsoyrbEEQ8",
  "key32": "58cveWCUjVuVhtwVYwbn12NosYZz8NqYg6RLC2FE1ebwnjq1wUTRE2BuBqDbohsNeBbuQtRXmLQKrq31N6dY7PSj",
  "key33": "3weQv3cafXmPigkYbqd6qHb9uWaKELjKtA1PhTYVhvuDiceooTSzFB16nafREpDy7g5Uce1T5B4EZfiaVW6X2jQj",
  "key34": "2jBFe8pgDEMGW6obpBstMBJwPY1chukDmsa1Umm8b6Gu96tybDtE5kNN7Ht5DEeBg4aBsNrUgRPhV7DrTku7LmVD",
  "key35": "32wGGg37f9WbwtBixFpxYncMpNUZpUigCLqFi6Rft81NjnQr3fChvgMa3TnjvfBXvWmkQbizC2jSFeY3rdsmMSVT",
  "key36": "427YPXgaR28VfPFe4jmY2f4svDcdpCWHEnFV7JFmFxTUuz4qEQzMnmVuf9YyrPSPEv9SDxSiNuXi9dMAD9eck6zn",
  "key37": "ea5zCCLnuqjzk9yZbZNvjKBrU2kWPgaBwKrvB6DzuyH9Er6EZUtj1QaPabVxtUMomvg29oy1Rrw6SYMEMMjCDhV",
  "key38": "47ZRZuW5YpHNzTZfpGeTHpKf1aRiC5grVzc4CuPjAX1oa5uV3NQfvbXu2zfu8333rVQE768XVAyZnZ6CXMawnFMK",
  "key39": "RHUPnDPEqef4PomyxWwgBHb2aTaEzdCr9ysUdyCbXyiMrR8KsEjrNQjCy5aC2HVvt9F3ifRQ1sdh8sWdTaGZptE",
  "key40": "3qR7BcMstqqNun2HAh3Xjzzx2kK2PJFkxU6GN8QehV1CKMpZ67YEKtwKxpepwMsJaHnysibqXQFmuFP1tZe5rcgR",
  "key41": "oo3pZAAoAUR3MHYnWmSH6du3RHTuenv1hC6b2gEXeZSvZdCQmFukQkHeGunMise9DzxtanZnvFaw4mpzXvkG6HW",
  "key42": "5D5xTLmxDbvWG7MAkFLSFhWVm6nGCaWjwX1vMc1wSr7oq8wMe8HZQtQgNVKieKVr2y9nC6cQLUKrd8VdraaA1Ggp",
  "key43": "45R42v8kTFZicdCddDH9Gis5sXMvqUExzzXnZQPZwSKv3ZAayMTjfX3QQ6dgBZwWCAuyPEfX4kBSJsxJx12DPLBq"
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
