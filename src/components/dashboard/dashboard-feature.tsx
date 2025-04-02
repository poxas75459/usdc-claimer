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
    "ww8zRDkgRnSfG7X2cMfj1QEp32pFkdrzagR3XaGCJX7cRBEFCY2Q38Fwcc3kwDD4sQnJarhNZ4zf9qon8g59TE5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SRdPe4i1f7t9DAAhurRvVc61gi3H7eL6LPrRGfhFWDMTZVfBxSb9SkJHEM8VKg9KcbkxUxpMJ5948Sc3hC9oTPE",
  "key1": "5tiHSJGsiGsR3AEbqp8ZeDpQsHUNJbLTcw2r3WjxjFN1ZWwsxtPwi5bCjgQxnmThxfu6D5ZzfDEZw6MiGNwKDFKX",
  "key2": "4KKajJ7sj1MYW2a3cMtks9Dq7Ae8aPPXAZQcn4ewJLwSQ9wRgeqq1ZFsYo5Yr4aBdhmvyinYmQB8hubGirkfxe5u",
  "key3": "3tc6hzCe13GqoNbAQoRgALu3kM1o9bv59kcEQHZ9xhtcqtupEdzqZSvJsooa7wM6PxnRrKRfRRXN8HWBCXdtBGks",
  "key4": "5bPERa6ZRpGVVwUkZPQVwz5nHE8UBDa95HTyM2nzKQPa3NsmJ4NrPVXD7vdo2TG99wd3Q2KZch7rK1fWisNQ5dB2",
  "key5": "4LffKSNykqZL2UBFmohYHmfTzUHhSS5MBzSXmdx7CZgAx9GmHeE4F7tPV6Ere58CnQkHSfAqwBKuKfBpEBf2cFGC",
  "key6": "5GNNydyWmhSppSgKv7UiiZuBFgpqr7pEQVFkLCZrEWYmtuyMfZnEpabJN4w2D9cQd8ivBmMG78sY51weqn42q1o3",
  "key7": "2EhTXei3yqxspP8HNXhm6sQA7XqGZ8EDRZaZ5zNAWej3R73HgrKCtUU4Uc5qJwsBNaMmEpUahXwm6QE2Ep8aavkn",
  "key8": "d1wddAykijP5mkJQqz31WwHoh3gaZ6x2s6KzuEAqyvBFyynN8S41tyDQhgbMgH8oUfrSUCrgiMspmuDxhhWLLEb",
  "key9": "55EdwZBUVAXE99e1PE4vrP4PvZDYp87eiN8KpMxLkDiDS5arwdT6nsnFUwLyrWDQranzA6QBpNFWvkBcbLHAwKsS",
  "key10": "2nrQtNFUXspGZMW71mXhW2jk6yzUjfL5irk6AYMAHR32pndnLFxjRBWhfXgo4peacdWWVez7MVKZ7H6Ysg2dpQST",
  "key11": "5HaVNCtx76mBp8vxnz1hkkHsGsfziFo3JZKutuVXC6JXBWwz9YUR4ZmBQUpMLsNLYpp631qtTLTV8b6pWTTLUa2y",
  "key12": "ndWBpqpXUq6oC5XubCYAXBS96SF9uqXu9sYgU6KgMBXygzxu9peDauZtt5BQwjwMgmUwUfging46n8ssfEXFBc5",
  "key13": "3qFwaaG6aftRpmBy3h8xafTpLEf3zUJFeb8FD9kth3raXBixMnc77XbTPe78MXsycvsV36atKGUX8q2Regk5wTWz",
  "key14": "5o4Vq2smHu8noivrYyFRqdH9F35iHwsFVRQVyUYNTrQ7ua21yoDezhNJ6iGLjmp4DsHX6tCqDwVujM53g2VidCgN",
  "key15": "388v1hRpJqgkP89A8sZVHYyyD2PyB8gGCYnTWQfzPnfVH7c1j5JDKZjG5MXsnEUNWY7syJASbGuNxsFRwCRMLRiV",
  "key16": "3Bmj1kqkmroWT7cugugEDNX7a9pqnaQuQR9SPtC4ENCjgy1amamu7Yy3TovBcJybowZwyVuMBqMn98wFhCNd6PvF",
  "key17": "3JLwasUCdrwnfdcy6eyTFZkTVZXwUV8CJ7GduNXb3wjpENXQqJsMbQC7RMiYdvr84DJkNSrWXjMGvXcndWh7Ebb4",
  "key18": "adVbu97Z9Kb57iRPKx5MDAr99j31ZDpZr8176bTscaYaxE1KdxymdTik4Dk4MQBj3HR534NZjzueunHUgKUaD8j",
  "key19": "w71mFmAdJupZYW3yWVqTSy2s3dy6vXxBvXvpU4JtvLDv21L55RW9CfuygaT6ampZPXdZkpJstxTn8j5JMu4LJzH",
  "key20": "3L3snmhj5J7WMv1WYEcc7PJGoN3TJQ2Vbh9auwrZJAZRhXsubpvYDP6y7gAakx4QLCjess5aG88Q7gSWaKCfV3Jw",
  "key21": "25zeC17RA8i4EedcZEj4RJhAZpSqZqd6SRKU7HmcN6XdtJEvHtJSa2RpBUtgdcqMiANHmR3zGonQn2uS4y7hVyNZ",
  "key22": "5HK6MUGzgYXqEBskg9wSvEQQvfEG6YZHgG8K1xpXV3uAms3YLKCP7Ft9TTkjwnPFeaGcuxewxPp5b5dC4SXcFDb1",
  "key23": "4XE9RDcWrA98gFjnvGka7FpZbtwsdZTWjVeS57STbUCWshy9K6HXSixiqCGgVjjccLsnyPogyPcaaJSuKxoKAmg2",
  "key24": "3E6eqb1pNjaoUPSetpsH7MxdkmU4N52gAV6J4RNkbLhY8bbFpaFPdpLJVuKP8b1vZS9YffGsfuLx7tsWqvxVmf6T",
  "key25": "2j2noWLXKFHRn7JE9K48hCbPijZBGzomWtmEAbFuh18mGYRux28r2efhSKnS9TTq7C3ewRAWNPgsNjd1Mrtd4fSQ",
  "key26": "3DXngNAvZY35RePEzfh39dZMmSCSKBe7cYWUsLc4G4nj2HtrruAkdPbysfYmQ71bfibuLuiPZwZMJrS5gfH3p6jH",
  "key27": "5a4r7hNBFfzSmmc5Qwm9B3sCfYBaDW1ikZqMUjLT2Y1EKbhunMYiq3B7AbQZ9Kve3yUNMgGSggkdTusnt1P9Wo4i",
  "key28": "4YGGYt8WAYEwBxiepHZMFLgd2UgKu8fjgDFbJEUZJDAPtjuxwA3VPLCoNqLh9hjPWohhVcGhiXWHBBExHnwwEJms",
  "key29": "344zmnBAE9zgSZe2sy3HBm5UY613TPLBDuvtfcXanwbkF4SMg2ES73m3dTC1zEWWDfX7YmaeigeAVLDGxngpgjiW",
  "key30": "z585ToZMBu7AE51idYHp6rnhYKfYn9Vu5y6ZW2PDx118e4LYDYeuMZmBXj1a8F8R1iP56pfvjiBFMP8eRA6Soqd",
  "key31": "35xvqwFSsTKFKstSy6GTYhAxeixUV9Biuansm6TX7HcLCRvAxZXCb8YEd8tp85ZfDa8rKsnjnCfNVpVLesNRh8K9",
  "key32": "4ytoUStuWLF54fmMge9ULmxf1tuYp4ab6JrtsM2mqqSnVP7iwSXZMVDhsm9o4i91khZzjmHUcZuibnMGai4eQBVH",
  "key33": "3SJfrx3ESSGxRD93kxgDvMczLxMSfTfyyfSoMXXqkuDPLkpyqEijbroZ3Ygg5R2zPZ9fqaqfu7gDAYSokjLFzNHw",
  "key34": "3Fqr4ZL6PuxpR7wLLz66eCzkgqmA2ruc9Z5dz2hCbA7kDa2KQoNSv9gzrqEJK9dENe9ah22GrkjmkHRTyVwk6N7V",
  "key35": "3AxrNjS5SUaTdb2VyrXPaCW9akVqt2SsCrJoWHLx5Yrx4VCAzxey7WAdCddtyT3XpBcsHi84rzq4hVvV2mhtKCGc",
  "key36": "2TDPFMzLcvssqdg76QTkCN9Q5yT572NKkEFmUxUibuz7w7xNWrxEsrGYLfNkrM8fkmu1haA9soq4pyNp4ZJKm9Se",
  "key37": "2jpc4Wj1JbkG1KqZ2cMmQCT7XoNHDDt6qjzo953yqkVgQe8gE4j6d66zTxWFNsufTEVx7wYoKRtWcLSUimfTjnZE",
  "key38": "4eT2TWJXRsEiyXjKhWTVDq6tNdpqy4W7L8vEXTUxPYku16T9ahXRA7FFoqPYFhGUfUNQkDi3ezrGDgo3jsygv5Xw",
  "key39": "t3ZZQFENy3twkRCR9fLt1UBXNw2pH5Jc42gYH8SWLSpY3T9YSNzJDbaiApBNzS7e1QWNDqEBLGMAuEDJUtEbaU9",
  "key40": "29vbqJGbeqV5381gYiKSqHgidshVmKii4XbkUiaVPgLzqR68X9QYgB1TFF8orQXwrjJdGDYuM4Tx7b6t52CnJJhJ",
  "key41": "2CwJ8Tnd3v3vY3enGaVwbzHMidtJ2UKN5tsziGw6ar1eL4PnciLJKArxDT3SxhcaeTAR8MDgTanwsH9tx8F3muNd",
  "key42": "3Q8zg2L2mGW5dLZQwzUMHPM5xiEJ5r1TNKqZTcxeUvomF3BUmiNbw5z83DPmbBMYubCVkJ5mTpqfQC88ZgFU8ET4",
  "key43": "2SdXCVyekZKMzpun5tPffQBQzUXyf82AYS6A6AZ6csZ1ZjEYc9SgyXA28yFZ9YnvgQEMWpyWHWfTtfn9y3hRrze7",
  "key44": "4XkwZcd2CTSrFQVYHgazsFtTqLqALju8cMs3cemRvAdDwYUDowM8hRPxdBazA2fz7cvjSgPWoU5eZreDoRDUxgpS",
  "key45": "3kMyR55DXVqkYF7eErb7ZaXg61x23YPgi4HoGFiLWsNW9icgv9ZuncePfUXCNY1RKjknHQQ7kgrFPuqkR8ccGAvL",
  "key46": "2Uy36FETBaPEE818ks8936mqSQiwM5HdKo9Xka8zBZqxMF9XGJLEFdAU6x1Jetdcer66a84TpRoQ62WtuGbu7CMy",
  "key47": "4ea2uUDNmvy2FC2LP5F6e7FQ5ab8HWaDvip43QnBGb3JXCovD6JXn1NjqFDBf9BjAnm8R788ovTjTPpucpU8Dct4",
  "key48": "2ga5StCjSFGFqA9iehXzjbF5PLrWdqxFNkfQ1JQwDop8uTVKrNNY7M6ewA8iA8Y19K6NditBZzgc1mAq4DSmeeJd"
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
