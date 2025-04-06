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
    "DYkGZccoYj3SHZptcjKB6bXiqkMAgCubiwTPs3yQ8HH6BBqCUi9HgUi1dk8G66kKy8cm7HMwKvowS4XJtMnLmF5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Td2rF18nKEUjX1rt9k3eJhY3cVBQVroVBqMP8evYVg5WpiNu5jwZb7MKQ3qGd1qWJ4R1vEcGJCYaSAHNGfjCr8M",
  "key1": "4Yn8jBKrbcAtoTGXxNtjeATpheuabJA93Db96FCAxd7TZ2cJJguFdUPUowULBWBkG8NAHWB6MQMMxnJctbM8RWCq",
  "key2": "48gSQBrzd8NCrEiHvJPE9yf4uQQThbHNkERPRcG54F9RfFwqgJPY3Y71idgaS2appg5DYQmZMmMEW9LMfrp9DSP4",
  "key3": "394RVhHT8P8KaHSx3qLtwSAhrxJmtiZ5q3ing361x5bBkS4ZXiHHcpR2VGRSg6YR1YYDH8ernhduq3fLQd95odDC",
  "key4": "GMgwQkmDpbtSdQNgtkQNWxdxqGW8aQaaVEN3R6xXCp72uqQ7QstzHidsncFbAPqotxs7j5kuw6nS5DFwfkZ9Gue",
  "key5": "3PdXKNcdtz5ituzx1sPicXWfHon5frJg2G9gw6ysx1QitWgz8FBcqq65nKceCCaE6tEG17gePVRvw3dUdvGPTbLm",
  "key6": "2XkWv13dHJJjRYD8kxh1oBuHpVfQ6YVYjXNLwZjm8F2Rqh7xBNtEMs1zjBZZwz6wqD15vrrpkN5PgmjfoRHo5WRx",
  "key7": "37DFZ3baCmCcpMdk1Bs5MEjimUnQ3YedWArnunvni1iJL4x11HkCzbFmqYQbs2St4MyzyjC8ZiciiqzGRcD74v2r",
  "key8": "5em4FhTZLdNqWGSnJPgx2TgnfFMmdAnwWxqLNE2ouNKmokyugwGrDNRwBQ9efJva72cCVTLbvDapMPYus5ffppCm",
  "key9": "R1yNHf4FoYorYg8LvcBWXb4LDyPg3HEXYcYDoNH5kYmfzwfMZ6Vt2o9vyBQGQxu1Wk9WtTxNzwHuR5fRAE8VZy2",
  "key10": "4otyYAxvrqJExffRBJHf5M4eFKFKxoPLtveumLkEDacHaZSVnbLUNYCLz3kpUQHydLgAL3W2PsbV1rW1Uxc1agDb",
  "key11": "Zh1HXPWrkCrQkVfQYxjn3tTG4uqHZ87sJdRdJD7SJpdGojdP9PgGfPoH5H9pha91gTJu6zi9iPmBHvd2BhhmkU5",
  "key12": "63jQNvz3SWkaLJdSiFhy3w83j4rMqZEMjXNHncRXKYk5hnf9EqEJgHukWS4btZyTpHb2NCngYMShmgC9t7iZ4zeN",
  "key13": "4WL6qAo95PKQVoeovWJz4CGtph5FcUfFMkZtBV6LHe2r11cK8v7xc1R9UvKV5S1erUNtjqQdzWzxTAL3LcowVNkp",
  "key14": "3njbWvZTc1sjmxkb6MLXXXkD5SjxjxTyGWhoZuXy9P588QgcerdFG2rtMbYGVcE7PHLiPPcJciEKxU2ymas7coFF",
  "key15": "K3DNzwcdKRdGGWMqDez95R7wDbJb7rhLaixz6vEgGez2VpRvxGCsbXAzSUZoCZMmcr4uBFWTWA3HzNAarAtaKqu",
  "key16": "46mpM22mMXkYao433qqaPa3fH7YU3DZ1msH5bu5X8LpNoHuWYzSFaBDHRFZJ4BomHx4G2EQ85aRupE6ZPZyn8S1K",
  "key17": "22SFhT6EE8Ywmrn8fDTMtDc9G5bqbj1uK27Qagax7JmNyaJrLK7hEsahUYwUYwh9H89h1q6YkqfQrbyM5SAJPd7A",
  "key18": "4qKQSj1WGWAkjhyK4P7xmg38R1EM2zhBvAN1c1i69FHbNE2CUepdwQuLo5VQTeZM5acj1PDpQ2gbsw8JxKduWecY",
  "key19": "3Zm5RxpHjfx3kHg8BdbPJiqdzSRwMkWX1m9L9zZcyvmBTKQ4oNH3b7uLMn6TaqYfn3zSPA7C9FTwK7bEz7qABE4h",
  "key20": "3hRQ2SWHMJdfU2eYzexTvYWotkDNfkcwcCt3hoFbnAaCESQ3yzYGDAzghajjWk3zXZAx9YeyVi8wL8gYQ3kSVB9k",
  "key21": "4hGjHLVCmcvhqnooXUCECEyydz6WwYGPHaLWt4PbTb6J9Kanx3G8doLHL2mQyqS7Y87vbFbNtX9wE7hg2FnuwYF",
  "key22": "51khXhy7LkS5bx6kvrLqCUkU5rSMYivBa4MsbnCiNHrPBfAzRRew8Y2fMa9Rum1zCADaU7rw2X4kJFWnxVvXBKNe",
  "key23": "29iGLB3YZ3mqNqfQxtqksg4hnSuaPpCoFf7Yacx3Vob2PmAZ42rTd2TPPd9k2F51ZwLvf3ogSfjc85ARxn2ydLWX",
  "key24": "659HEq1fCXDFeF6ZfjUq1fpQLZwQiz7YdMmsuoYXEWFUQcnBLiKzVRh5TPWbJjDDXkt3kUHPnNTfgyXJydEbFou5",
  "key25": "3BESEX2q9kcyHbzLXQv1DVW2xEZqoQRMZidwota2UkWPiyuGEsZS9htmT5yCPFDxzu9CrEQXqcNZj48p5HuDjrdM",
  "key26": "4Q3hrDhhCQEF6Wh1k397GwBn2VCManLs47uEtSfKZzKjnfGYb4d9F3Qe9s1VYVHJautijncnRCTFLqakh8muuBW8",
  "key27": "559XgY6wqLNmuCBcBVc3xrqCsZNaXZg3SzxDbHjX5LDu5QkvH2nngN4qKeecDhBdtMQ4i2hTnRhrN47CJR7ExvVa",
  "key28": "5VfEHadxXkMYcUgEdKv6dj5GkNhHcCdToREuwZaQGkTCnBFHr5qMSM1erDKxh9GmpLuNY4hBJXK9kTtGjwLpphVs",
  "key29": "4gzt1tdUBfwTSuLa7T93RtdzHV7PQ5zV4rQGpx9tMSCQtksKYKUQQj8psDcJyuivh3x2s9MiRiYfKjgDHz9V1g4u",
  "key30": "2PHnynHmMHUWANH4eJD2ZJ2uvJ9AXHJyyHJTJBNs2VrRjy2mWu9351WTaaEykxvNNrdjU9wAbu8oR8a3vAWNSNqq",
  "key31": "2PFA5B3t8SxdLaXxmEPRwh1fq7iRD4UDsxgsVL1VSfPdPDabUjkPUXET8ZW4Tu9moVCCDKxRnAP4kL2ckAFJhMW5",
  "key32": "4WZ8f4oZKvcB9wSvKBPZUG2zDrFh1jBs9Dhra46e8B1mpqAxZfPCQ71QeaLSvyKjnsfe3JZf7ZBPFGaRmjEaFEJp",
  "key33": "4MniND6A3kG1iwey5oB3dpeh4MC2K1uTawRScWQwi1gpACGCWPDGmDS9xnLxdTmvvkxuDaQrYoUtoS3S2ntgBPT7",
  "key34": "2XQwjpqVtSqR2TFsiWLQmQ5rcQB9puV5wd3LauUbUsMcwXbrYWQv1urhWsutjb698jkEAKQXbDhYvwQdvTyA62Mw",
  "key35": "2BRMrWTUpKahnkHjLwj1Bx3817SS2ybkSggMmUepSkigXdGMPKnCXoZQeEfJey1WvEo9xVyoFLgY3q52xEfHsyt1"
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
