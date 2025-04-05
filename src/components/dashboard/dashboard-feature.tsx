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
    "2ad5K4ZbCpEeBA1c2V2tRZpcWQ5K6vXnULEAt2YsDKps1VQoEsF82QNmSr71CyHNQcT3fpM9DQ52RRfH8AWwCkoh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZL2jDGytQ2WrVjdMuUV4kHPavWjJjAamoghiG3vrDVEYuLztgXmddLmdU9ohgEi2sa3GUQnc6by3tA5h449Catq",
  "key1": "27ev9WWmdBPEFXmMzWmGc1M8x9imYdZxrsbFrYbZU3ZUt2S1eKXg8uQWaiPz2mpZeP3EiG32Pg3AWJiXP4QQ4pYD",
  "key2": "qpfNmYco1sFtffq1Zm754gSjXAq1L7Q6NHNzTt77vnBKjveER6oWhEP7qS1nnNHdGMfrdKGfBLUUZjtpwerxAMt",
  "key3": "5SYmQVsc74cEqxynS3M1UnAvNotcb4ZZ5dn22SRBKHenS1jLu4yrMvBKUMQHdHr9bkCgqCPcUwrGqEs9eDZm6sMg",
  "key4": "5omimtDUmjBnw4ELoBtRboM8TWDT9e6DvSE2PFBs2E48hHn3W174984agKrBdJR4U7es3oZmLznJ4Gjsw195Hpdk",
  "key5": "4K3fNW5QRUviE23TVboqD3cV4eQBrmcr2iuYkBKJwgYdRPCpVobi5zdR7zayK3yiiPWpfDjv4xNQuwFpwqp2UwcB",
  "key6": "3VWqQxzWZHBQjbXRqepMvB27XJ7redpppH7dpd63FbbLKsFGK1Stkt7QZqqPDnFBpKhL5RYvnN28SYeGKx8hhgNv",
  "key7": "KN6eHeEdXevao4MEVG4pj7ihjd3CFbVrZNbThGcZwXGxWtN6V1oQAY7fuBwW2EzhxvJUBbnhXxJSBYUgJjfQrpY",
  "key8": "3EnE4Y2TLwuCafGnWiv9X5kSynfZ1HafL75VNVxJkF19TMVExiLgKbg2rfkUtkFuq5KRqE5uDreTbf8HVubH7A3w",
  "key9": "3v9SgM7bJQEMDoG9YRTYdAXQt7PdMLh968mqMUnPQrR3UcsXLEM8jADQzrf1KyQ2PHVtoKqenZUmKJmFqa8ZXydm",
  "key10": "BXNR9Ydi57Jo4DKXkNVyUpQw92MhHi96frE1zAHHH1R31H7v6yhoLmJQyBK5Zhr3a6vz2wfm8voCP3EsXRn91rB",
  "key11": "5zXDp8HWz8h2XHK4zermSUDgLo9ELHw4HFJchrLVLftX9iGjmwF89RGdJSsh9DMMpcEtWZuDxHFS5V2FYTCN6YYF",
  "key12": "5V3BY8GiZhtT5sEBJBf5yS5HqnhqzZ7UrMe1Xm42H3uhsvKk3hoAzNvaXz4qW7HMKgUgbLtEEFMiwawaF4vkT92X",
  "key13": "5xsWHSS2a63e9Pkp4aQTdMBTya1WVJj9UfAX7ErLLg4ecCbNaG7tjF62iSLCVtCGLBCabQYXK4wfpgakKSUhGUCj",
  "key14": "Pk8XcPTqmhk1wrTnDeo2zvbr8EUnR7T1QzQBDDkTg9x5VpNcWn9qdnxCHuab4AN51RuNgG6fHUM79FXgV2BWJdw",
  "key15": "4k7b4t438oufxNyfTZsjjjDXDiGpfWjtrqp7bo9vaHgftfjxoHaPJfdguh3zCBa4mcCqawmmYhXK1SpYmNZjVX2S",
  "key16": "4pbYtkxjWFba1hxcEJw5KAdp3oR4dfFFLZRgYKjHLusK7zn3kWjfGjebCXxRsotRf5nvZ5Y7gKnZUZJcU7CR1QtM",
  "key17": "5YEhVzQRm62WFWAWN92W1ULG2Uaw6UkaYA2ZKnNdoqJ2EzrVvWUmDeHXJwwohx7LrqUN3JrxURiN6jA3EWWM4x1L",
  "key18": "27c6mTmFoxbFzbVWJHguP1PQKmSPkrdQxuZ3GLbQRX4byWVaDcjbAJQF6g4y74FGjfQk17ehmmUsrao3qo8XVfsy",
  "key19": "2iGBf7KGw2exDAzUFsoRR1WSzTUFHbp7gcA9CZffMH55uydpKPXwS2XgVpQwY4rgKytZcs47xeJxxgnytutHxMP3",
  "key20": "4YzH6NjqMjZZkBbSdFJU67srXJ9w2J8N7hKXqRS9V7CjJtiUevxEPGLqH7xtkeQrXKpy7DGmsNiwUTXa935axPp6",
  "key21": "3wMZa8qbaqJT6EKqjDsQoveEXQuzWdNRHh1v9jDtZd9Q144uJZ4hmDKdiiKpccceeAV8R2PWV71gQbMgHknecyjw",
  "key22": "SdXUdN2RsMzRb9J6zbgBw3e5JUFL1AbrqWuKcE8RndrpepqtZereSniarWTt3FtKN9Tu3FKe8mCV4XKKa3rPDiA",
  "key23": "557vTtPC3GgWvuJpaxj4n2Gxz3ekfnSVMb6Twnzw6V2rvbNgxhBD9CMybdYGiJ29FgWYCtV1Zu4kGXv5Da5pEN1i",
  "key24": "4Si4E66Y2XDdPZLyFS5DWLvcLHPDGM2tKwTmcB6vb9betV5ggWjsuZeCnsgkzMhhAvHxAQs5a2uhE2h7gM1wg38p",
  "key25": "3iZfRm85i48CVZkaKUFb7QUzfmZ6z6815sXs6UDjK8j8Nxvmcgjx8w1mzwDyhhMGJvFdNFg9oS2NKMPweBaGNTy2",
  "key26": "2F6QYgMemCezccT3ztSpbgDyoURV79TMm3oMevfE3EhnNyYABHbHCTL8Fr2iEU6z4Shz1XEjZZTrCTULzYMrNyJr",
  "key27": "2nRduZWtHbLT72v8PG8AAMoBLsrtZoFNK5i6Gp3tGvABoDM3cqnep7oHPE3XqW244sFWnK9Zf7jhRdh3gw3ZXPjo",
  "key28": "3eysF1NUwiMsa8HiEvf4pWQghUZiyNqezHWfJCgFwnpy93ZSubF3rK6yyRcQuH6PVvxXzPmWmPLkUASHzWeeuyfc",
  "key29": "2vxCwp1yCS1RAxtBEMNQpeWha27aJLej8i2NyzryUrkYY6uVydep5bKwabUREyiEFct3XKd4PPFbFsMSq2gxqokT",
  "key30": "3RpthHJBtsHGSoLBGX1YkZWbyyHbS4A1vHr49ccHVSwuPqoZNLuY8T1muAqDcjbzUCkya45Syx6AAi6U9c6DRo4e",
  "key31": "2qne7xAZxjCYss7fTHLtiHFW5yyPkpwaXwLERL9M1LYRhRKjhCwyHiw8FskEa7uJu4XwLuC44QvKLzAnyHbm56tJ",
  "key32": "5yfTohnwfvCUb6Ki3vrcfy3kREi8Niv1x23LsBsxLQXMWaPUc93EScyiUx1iDFyAGMedadQ3Gj7uxhfmEkeuNBae",
  "key33": "7Ft4F7UKF2Sr1MkgmfJK6oDg54H3CYDfRw3waXjQKN63zyUiXVLXWMbBKv1xyhC2BRCmGky1K6UJzAi8E8cseEd",
  "key34": "2dnR9nXfVs9diiQGpqCNk46pqsjttPPPWAkvF6ANwk36x1hDDdKsihK3eBFtbeQ7MLmre5U5q5B7Nu37axTqhFdb",
  "key35": "VYriAn5ES1NubjXXzqggSBRQhiooqJWQSp3sgYSDVpMeDx2ePPi97n44wE21ePRtyCLzcR5iQgPxYSJMBHivYXx",
  "key36": "3UQqLNvLiSjcxraZ1XA8X6sF8ChkGxa2tqjmJEUy5joCB1q5GvbNA7JmS4dwB3dLKXHMaLpxXy75hudc69tfpJ1o",
  "key37": "2Ftv9XZDrX8Q9uJtLSMR9Thb1rvtyMPLYGVMjoWHYoriSvokc13LhudpHH3SaZNRPbywcTjFWP17GVMcQ5XE8x7R",
  "key38": "2bEVWJZG36FCcK3N3y71pzqqdHgFJRtuAdBnq54LaXhnMgoXmAXHvju3D4zHvVMCmiu5t1syfxCx61AGvwoWF2Tj",
  "key39": "3bYzu3xfe7yPGqDKRA93yfXuv9ymWdqMFnB5kT1EZ2C6sWAGpuoPbVW9TenMF7LNTNnFPjeE5umMV2k3zcybGuJP",
  "key40": "dT2RYyoLP3ZWVt6ePoDiWwatNNvykWwPH2CtJpwNzQ5meui4F2pSoxiqturdVZV2mXZPv18YKqB8M6VhymGAq33",
  "key41": "3qmMSNny7KDx8hiywHztpATejSCB8AogJvTW3mEWR9Sc6xvxhc7RD7wHgYdQ2qvfSwn4BFa6FAHkhVHFNoXmN3AM",
  "key42": "5SbeVWEccCnsnUjd4fECmfmrN9T8ixoEisc28DYBhMzrQGfB96Ndy2GtowWRa7dNgkYZUJFc7VDLtbZ7mtTZhFz5",
  "key43": "37kfEEF6F51BeCUgtDHQksmArjfUQ4RBh5HgTvykuuWkbjNBw1VHLx2huZWzquwieDQyuVaneS43fys9iyLmvmtM",
  "key44": "ubSEoVEk2PS6mibtnSWnK5FU4xDTtwouH2TaHfbudLMXJJTZVtZjdNoHa5PoUTp4jPUcSeoRYqnom6y4uhp9aYU",
  "key45": "2H6dS6M3T6QMTrVt8fUYacmdqQFEmNXkSSyjdnT4tGXE2KRqqdBoDDfmD4PpffogrhypHoeTLSDymZ3bKkWEFT87",
  "key46": "5QeUhcsKC1UqaHE91hQfhiQ4ZVeKD1TMgaMiotXfixW6rKJeRaeiCp9TEWmWQtPVMf2Hf4n4bHaUKtikvYRMHjL4",
  "key47": "3WBGVbCjhR6HazJpYWWCqHmNocuFgN6xoXApBP4dUzxBF7EKxtJrRnCWYi9AcXPyQycHkzDXrQiv5WeKk4eHGr4q"
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
