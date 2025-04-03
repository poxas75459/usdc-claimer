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
    "5ucTAyHx5iWSYLitxTyhpHg5jwDdhwmwUCp9bwE7SkUp9x4eZLk3rCqyUAbadaHxsN7XBjBjqHpSgAwvf3pu1ZRQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JczHA3tfRF9wJypPQ3k4BQsfKa8hcvNQ7Pb35bF9j47YU5zpQHsXkhFQsMnNAp1eywG929kjbKNRSuw8a7d2y7C",
  "key1": "2fcDtyXxhdXGh7exzm4nvm9VRPyRaULwt3Fe3AEHWxNJ89JRHDgvxgrSWviYSQ2ftBDbH7fgeKNaN5t6V5vn13qB",
  "key2": "54wi4d6aPXzhc6vUGZ1wjF4AWi58CBdTgHeNF7yVWwg6qHWeG5aNKmiSoQRS1aMQk5q5QpW8vEzEVWkgi83jmrAs",
  "key3": "JfhZGgUWNRwKzHEWkwQC7SX5dS5ZKHGm3ud1omCLHASa7fESSaZDBtUqiptgNXKFDQ5SZWEJESpiXFb35Wx43U3",
  "key4": "4sNDsVrCMenFyzRin5uYwHeTjm8A65HQxaS2dSsa7z1Z1pAutpnY8e8pQNzC3mFc3N481kMySFyr9XgijXN2riN5",
  "key5": "5Y9ATBSemTiTZ5vNJBVHs3MGT2scPkKZsN75BpMQv84Daq6ZCgw5Gj2DYfEq435su1RcbvzDPtYqSW9nNL2TqPwt",
  "key6": "4mdfTW75qkPyXL9mPiFECZb393LsBTZLwAMSMXm9FsHvZm3BsgZimn4cxHZW9YoK62CXMKiRG5sLCDhFbsvoQf3m",
  "key7": "5wyRd5R3YrEkfqYGohrU6w7Qh5SwBp9mjis9msnp95MbTiT5uMBCQuxYKic9Yk22vJ7vfWwnJSxwF499U1TdvERK",
  "key8": "h1ktn2AjiC1tJYtcUm3LbrQmxCXW6jgNXdNDkWXu7PhRNsR8baoSyjPGeHrjKBUwvcgHLSPNRsKH1JYtknvWb7o",
  "key9": "4DrcuPqN6LYAPmT6DmEzqHZEo9wYmHkz39GXatNjWonko5e8YnBRwx7Wh1pP9911hGki786Fbrk8hgcjgZNZUQ3j",
  "key10": "4eAFUESebAGnJCpVEtpCAPkRJTVudHSPehNfP29rc2DVMscpzE9Xes1t3vBqsqJpqUAgjVBGpiUNz5WoYceHEmJP",
  "key11": "KUj4PtHZ4hB88osiQ7LJ8LAd2HRrbruS2Rt1DDdu1YkexTVijjiaG5ZtMsj814qBKRUPuZPUchVLuGswiDdz1pA",
  "key12": "cfQ4VCW5kFFvq7UowJ2iuxc3aUZoeC7SHtvKg5XqVqpe8g5N2rWaQWX5sRyC8pMFJJ1qNJtfuw9nJMzd9BXnhFM",
  "key13": "5Lqjp8j4BS5CBVTzgXA4KBEp3CS1g3Qd2tQwrHsCv4woRhUb5C4vtoRjcb9vFXCrd4eCXBwAsbFsZSKCfUhS4SKj",
  "key14": "459tounLLCcr83CB3YCWgasd1JE5JaxrqYp2yfR5HX71WjAGZGbeFdBJ8QZYYN1WVhzAMcwUPT9CrHY5oipSe1tk",
  "key15": "U8A3zFqfHQZVC4KXUWkmvjK2zM5RueKmd1w7GnecD2urc3fcwWDc3fLG4Cid8etkKPEp21e7aQuGQX9WjiZypQe",
  "key16": "65iSoiX2yjxPXe8W9j5dD6Y793XCXF6JhUhr5WJkoed6P92on6h4b7htF61JHVPJNQ58aw7u3MDFXnjLtMG6dMMt",
  "key17": "4Cn9xPsCUe64Tfi2czmhwMX4jmpYgtL5ZUWH9BVLAEGojn4NAJAnZ6Kazoi84CCjJrzWKmyA4AhVbjhULsmdJ4gW",
  "key18": "2CHfxAxZPGTDMrZyhPfhjpN3XgfrzxjANgp1PwdQhjJMkLbPDY48HBiVkX2oS6BLUBZF4pzZVJ2idtzjC8VJE3Qy",
  "key19": "4DcGfftWKxMj5uESuV3mjhPx7znACFiR3mC3BGDXYaYFoj2rfVaXRiG1Q6e3Gh7qTLqGJ2nsDQsJJ51PCg4A53Z5",
  "key20": "5LkmxuhBGdjkeVYHf2dkB9c85nnPj57NMfRQ9h3SSSKccdcXCPJfFwz4SND5rUKnxWuveJ9G7me7ByeSpLcnrk97",
  "key21": "hY4c4Zr9uqAWWjbQeMHFZPsWkKwvXqvXLhtVqXxuzYRtzpG4gEgvk3XsZBfvDGgXdAkyq3MSUKJA5Rf1H7SPeyK",
  "key22": "2rESgGbbEKL2qNqACMXGSpZVcY2a9cZNPAQ48zuTBFTHa5wJ7xf5cEJawEePPXKkc4BaVsHk3H4sYSn9qQRM1S5k",
  "key23": "5N6bDMS2PZwCxxVK6H4iAUqXP4vPUg8tJZQEe66YbBh58DR9RqNkLqTevx6hyGDGkT7sCULuqon5vavfgJ2fhfah",
  "key24": "2jKncYyezRRQYpvXB8K7FFQx4kKfQoEqpsTcEZxBYQyjtSffmrQCqZnBaFVDrJQHvYwzGXWVZeuG5x4ybJ1sY2Ha",
  "key25": "39g6YZJsjuBZ8mm8GcA2NSDDEdiR1XCgsnMJmB6ErnpEbZ5cvRTzHHgn25PCFGSo83vHtFiaEejxN35ycFkg96bz",
  "key26": "4PCv8sejjVXBZaKKwQvZMeUzsKrmL7nnxXwL9sHqYswZjh12tsha9VyDU7N91VMb5hmEa9BKnEWBZpmiQEGi68AP",
  "key27": "MboW8d5xHh4M7azeKKZSXUFL97PZ9EKSd9DRv8Acqj2tPhFV567T8HNQSZr7b37gFbH6tbjVvVpaYeFuCFv9Thb",
  "key28": "3bWop7qwavHLZaoEKQ4UgDGgGgCzDTwe5YMujUchaxAKFcV6jhJbRFwStkAsRciPm41xo4gmpcwWTQ9qvLbQNeKu",
  "key29": "4TCdqzNe4ZeRvZxaty5W2rKQVHQfgWFxLXD8B4rhTFmpqhNtPeYfW8i1Dz2XCnSw2WgwRhfnkNMT2vLPtSjm4F8k",
  "key30": "3XYC6CovU6Jq9UuBtrPAHiyeTdbmoKCsuTzsWomJK8sR4gZrmY7j5xixcsKkufAkCf74vx1gG6ftHDzenhoiVABM",
  "key31": "61TRuWVbnxHQRAsE2aN2JUNCxc93oBRkfwiRoK3EZefm4YZqWwcE4yczUyLnS8CKehPF9ogqQC3zTwfwZwfrmQt9",
  "key32": "2bJrqbNDSdqYXQZJ6farU3hewG1YpHt1atd5pyUmL1nZJbX182PR5HyFj1FxSLpfaEiCfeqmn48wiHmkNkRaRyKw",
  "key33": "26hVCcMCGoHtana9sFuVRbKi2Qz7mj2eUDxCeao2Lis6YXNdWLKFoHbu9b9eoBa8jfqg5SGZJtq1inwBaQLv16aC",
  "key34": "47zqMy1oDhzeuxCLvn74aHqFcQo79denedDmpfBYz73HtjZTHcVxYi4USwicB8tEWpAUemTefkbzjnsafqEwUs1Z",
  "key35": "3gNvxmxGqA2hMykHRDKHo3iPEgSmgqkAoVHP3ZjqQwo1sC3AztgHoeJWfwJ7jY8AY9cDK2atLWvaUuGGnacxQP8H",
  "key36": "5PbEAug7EzwJui9pyYdFy8E1xGbVCq2wFvfsfUtakS8mFKTkkLJjzHuWpY4CcBieqcWF1Y2wKxEqCdNjBJfY6hNn",
  "key37": "3M9VSUnLTAY8LM7UAxzvzA9gvd38khsJiHhaeq6fsiMHkcdTEGMo3nK3ZM7bH2TNG4PmWPbnUAhtdvt6faCFCdiT",
  "key38": "5CVUTaJaymy8fsgLkqBAUVVcxNu6aHv6Qv1kcvXxNubt5cBpjF8zrGB7LfZoLm9WzTqLto2ZuUMpWxSWqgAnzYaa",
  "key39": "fdRMuHHR3wdLWXb3Gbp4V73vLxC8gzkTdNiNjdCSKMFkHFqHZZGkSCDmSNsovkhXsMg3TbmdjnQY56DxoBH29rF",
  "key40": "4jT3DVBnVymwtja95Vhcdu2fvgdC4yZARYf8nYH83NusEG42y8mRjS6gLPN5TjNfnbrKrwE6GMAKV5hGPsVc1Yek",
  "key41": "42FdNo3KwZkTAgZqEFtTz4qnTidP9Ty613vmuKjvBXRat3KFWr24FxS4Nf13xiKF1AzZvrikFARqxToGLqUXez1y",
  "key42": "22ftpcckUZhDzDs9pR4e7goJRUPbZVWPSY9H2EWfKRXpsmhKfvVkReDdvRpVPAAAgvqnydYrYGEjbSYDuCW2N6aR",
  "key43": "3E2YzqBWUjMmLPnBuVN9nsVXWV36EdtGii882xs5drNmcq8ZwnuBD7RTRhzKbAnvUF3pJxxnunevNijqnBEBSA5Z",
  "key44": "5Gx5KTTSPeVK8cdC1v8GRyHTtv7npmiKoJ5aFCN9FQTZZfEjewiCY6h5wroEfeFk7YFbBgxXrbpiWqip9gXDN6xB"
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
