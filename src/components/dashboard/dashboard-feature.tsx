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
    "3JDQ7MnEvqcJeDZLQ4o1LyUxLpXaEvKVREg4hDQHFEzjjoaQgbyBjBUwJ8wvY7S6QnffwNXkXPn51qNqCDmHLm2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58G5rKccuLyuL2FfzEhQUbbBaSZw2LdF5SgoUyArYpnNEgwKUTwoCa8dYQWxcsDqkA7c2BZgLWHMFkqu7uzR2wu3",
  "key1": "3mKAdFnfWH4DgECB3KAmvH54bbNRiekHtHZYQ8NWMG4em3YBFkpteViYwfe4SbveHpwXchSD3MMBJnQz2a4tqKoy",
  "key2": "i41K7s5QtWTjJ2J9uPreoN4DedUcCyy57qKX45otXmmJzzNvf6SgcKNPoYhYNprhpmYzwL8tbSkDBrWwakNkRAP",
  "key3": "4xi1rHgv4ATp1hQR5GhVuu7yLQNpn9jcW65GLkod4NpF98bZUYzMAowGYEwhZt1W9FDUzpGoL15bzuhW8U8BGMvW",
  "key4": "7Dxv9ufzUj2yoBoc54ZZLBSnxBvR6JAq2GzSAnKPo4y8u9yadBx5KSMBnv65ZythszqXdQAzVL4RzbFpjZ3HrUW",
  "key5": "pmL1TZudSn3hfL6zj8Boh1vxrgm6cMk8dD4XQPYfLBUxFBFSFKMSFxusivAbsb9Ss7NDat2QsBX1KWTezB7SuDx",
  "key6": "64fsUquYGft63zdMh2Ngz9NqqK9M2dR4mYkEmBeCNdySPK5RduDP7ChTPcGuJfzZDiR9WBP41Fu5e5v7ZjbF4zeL",
  "key7": "2sdqXhRcyjyanLiPYhSFVGQnt8gY13Bqv6rUevjkVdcvJZaLu49vMUwTdMtDvZUJRGum1t1tKsU4wzFXQXNpiCdw",
  "key8": "4Qsn88HFytbZ3cx718LdwinC177AN4yMchpzH87NVC1qZuANGb8W9yGPXDH4fojZSywUKV7gqHie79e2XnD5tpW",
  "key9": "3hxZWjTFAZF9u171BHL91MBJpWdBYxXeKUVA1JtjB9219ZuBojo8E9t9ufP23i2wAw4hdto7sN1rvyURVCFRxdR2",
  "key10": "3jpCZh8pM3oA1nZynVvvJRUxvhBeQ3vQXYjCJndXWA3cQJFCrFtN2EBRCXo35CdaPrFrFNd1xQATcgVfsZjAm4Yc",
  "key11": "2whnUpwgSrveRHQHFbEfFCELB2ZEcsLBvo3Tu12tppphjK1fcQCYQqQQBFnxhSNrbLxopPrn2tkRipA3RAGpTp9q",
  "key12": "2MrJun4aAuiQf4fQfJYjxdfNxcCMGdGV9cygJjqN4eyKQX24egg1LCrKBZHbSDMP4FNUt4yb2o5Cmyc2HGnmZQhh",
  "key13": "38AuT6Q1Bj6XPRkZy3t5NmmeTXPQC4VQmj4jmiJ2NpHB3FXiZddJSKKjMVoPi8Cg15RSfgRq5mxqgxRupHhT9CE",
  "key14": "58bSQaU1qYNQnQt9VS699EMtYyqJoVMgcZkABcVNfms9pSHgNFS68uH7Ms61qPPycG5VKSWeegmpahahEBXkcmiT",
  "key15": "45c3Qkfnmkj8kUis8S6GoX6vHoufWvYZ6gJCZFqWA2ZEohqMtfJ8cyrynjyL8Xj4Axw2KmvHTN5sHzWr1BtDX88U",
  "key16": "5RnwTjKe5uAGYwBsNAFeaKtDUpfV1V81pUfvGq2LkcU7Mf5kCwJqf8YE7tcDJzjezeov6CWQjcocbtQE63uQzyAS",
  "key17": "62i1HP7x7semLkKF84LhrzGjwGs9W8eJDCZxoCySGikZqghw1T5DStSBWD3umBS1k6tKbfn5ajrRuGp33eWPuHq4",
  "key18": "5zr75S4rpMLUmUvMub5wA8n1hqLq1Bo1LR5WLMJBxWPXnbaamEkRb1botzCYouFDA6B2tYhFJsJApTthNpovavwf",
  "key19": "1j2BDC7jkE8EV3MaWgqYSdyw719UghLfwZhe6NzUoQqqcEY6GhmW2xedovjweSrp8iCiLNxRUvKW4tusBSsffaJ",
  "key20": "3TnUDXdKwB3MyLmbmmvNt3KSpDcvWxv57p7mMw8HJEp9oXbNo7jK9oa8LVnw4K2dCLZ1FeTEnzmArkyPfAUnLwYT",
  "key21": "5ix6fA6ssvyPJCY4c7C3tuV6DoQamBERYPPZCcJJR62MHRPrDatkU5hgkukbPivGZx81XY8KkWsageVMhnxX18yT",
  "key22": "3eV4TUjws4AtjihKjg1u5y8mcY8rrDTDnePXQZ9gYKQVTRHUBeu8jK37TeiEiHh926xhgZvWw38qw65oLM1htJUc",
  "key23": "2MvmsFxwhzn1tZ5okrmgPTE7GQrdwaTNt4pn3SBFZxsiZxj71y57y1qj3NXm88uugtzxMAPMT3a1P1QQWedC4obv",
  "key24": "3mL5PXppsUsVbK4fgXPqBrZyPTdVCfGwg9wu4VHPhFP7Z95sp1a6mmbesJnUrexePwrq5VYGQxDDZFPMfKMds4yA",
  "key25": "4ug49MfzvreyeovVpLf8Fs7VSns4HgBe4uBFMFSMjrdwJ3y3ST3GnR8UvEt313XZbZmwNYPHag1UHbqZpi52wJ2s",
  "key26": "2Wu2veaHp6MkMU2hpxgMbyc24YvUxPXyAwgpK78Q2KSJU7QrvSQ2qQuaZMPbmCFEnNGw8CsZEp9Q2EP2kDmSXLiK",
  "key27": "4tudhpbJ9xhjX6bQJ7EpDEYBSVKQMwJZ2EKzZvVUJub7ERj1pwfyYiCfCaQ8c59EYT8H8MACid2ter7fzvtg2Faa",
  "key28": "DbNU93fAakGFRgF1kz66RLxNXaBqhDvJM7xyqyj1dShA7h9RhCVQMdWYSjxfuohirvopcACiHG2ynukG5sXaHYV",
  "key29": "2bGddHczk2ecqz4mxvpsB7HbKoDdR9wjBsBhimYbbGmZngdDraNpHG7sCKPCLNnTcEiiQNbWuTSAnFJcgMWW4DkZ",
  "key30": "744NAcFxUawKX3Guk7AHcVPDVtTgMT1xHkdnRuDWzAbasASCuW2MDCszxNKGdUm7ibeQ5Uas6uL9PbKvEVi9n9G",
  "key31": "x1nkFyK3BK8NPM42vZPtHyNJK427YBNyzUwCSBc3v6qE1FEtc9qyR5DssfSVBzYxjYgTQ6e2zgzdrG2wdpHeFVU",
  "key32": "3xYJDH9AhYY3vSAGRZyZ1Bs6YhrGoVwkfu8jpvB6rGLfYiPpzB4nAQf1Hjsm829GzaauBMjv93mnbFqDz1W5QW5c",
  "key33": "2tsq3wguiBadqdfkmziFxzYCQisqq484Qpi6mJffYLpMfbCGNMZiDiUiGXUJpV68GhAcXpdWxRgcTo9D7p7YfeSw",
  "key34": "2rh4W2yUbW5LmPMVeZ7k1TxWmNFen4STrvDM5pXH2o4HNArvpwwSByJg7wuYkZQ62FjiM8Fj5Uc6fM3nBRytUvzm",
  "key35": "4Gk81QVrGcJZ6vqwUKM8i1PTuULs5KXdi53BoX3pPqE3sK4ru6iWcaMQxVdehSAMtZTwcR9P3Ay27DyeQkbqCgdH",
  "key36": "BbuRH5JHna59dDbTWjQ3WawANxPQgd3vyBPChN4o2Kgc9VdJ61JSPtqyFL4S79fm1ngKXWRyDSpjmVEsr4rGaUP",
  "key37": "3McSrbTLU9nLAhRf3my1Yxt1rUX3ewq4EQV14LhQMjaRncPJKMVQ5UApWYhkkHu3GjxBJws8cpvJ5RkdTj7GRrLw",
  "key38": "FuEbFC6Nku8Rh6PbngJDAsDzXvwrCmucny1iACoU9SyoN8sxACr9t1JChjfsPFkTzuxz81dFeRG3MeUvzwKmn4L",
  "key39": "5oV9Se9f7jzxGpkZB7CsWFTYrwt2zatNQb9akBo1JqY4rETdEqEsFSoqLKLiHKKchVV9z8cxDgpRmTVFFhkYvqCE",
  "key40": "5cyS3zcXapuMKAYmWZxWHwNsiyQwXwqXj2kJWm8UAfoMnJMf4fo4imbw4HLNWZjavdxtShpZja1LqbTov2rFpXyQ",
  "key41": "ay9wcbyxXjVF9uVqPcxxN3EYw8okwMchzCCvkksGWQaRVXb1jSpS89P2NNQMzCsvYWwxPnhBgAj9YENfnxHSNYn",
  "key42": "4KR2rYsXdtZciBFu2V5AaPmBahYJytJGsad2FrekasE7iiUxyyEjXqBRiCrYRsrGKRG72UdaqKFbAcpM7BVdjcLU"
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
