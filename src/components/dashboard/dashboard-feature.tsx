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
    "5cX37Rrb83RJZo1hENirY4ZmBiqJxNvmb3GXGrAzfhJcJx99GsjAiS46TBi8jXMG115bNVFfQcRx2azbbPjT1Mfx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qbMoFSbBESdxVZtBce7PsYJUuLKLfemMfBuxyp5EvYr9cFK6ZogLXYt1ufUt41VGSrbwXuBAg2ueoTFogCH2u6c",
  "key1": "5xySuZLssCkphtAQjrxEMBsWd2ZE7RZManN4noHYCdPspVXyxnXooSozUTrN44tSZ4cWZKE8tbF4Kg1VAmx4AUVW",
  "key2": "U2XV3ABijMQ6iodWAZR1YEHGMUKES2WoygYhUhDhoeje4qzaFVk3SiWQCA2ZF4gWRN9HvuaXGTjJYPgchASzcBs",
  "key3": "2CMbPJnfutjQevGbx7qR3xLfQDqnvESbf1toMqun592Li3acjjGj3h2dA6XeSqV7NFFn3zYjVPvfauku5RK1cDS7",
  "key4": "2J5Gn7kiP6a1CfSuiFPGN6NSMcEN9dhR5FW4c1vnz5a5GkWPnyP7fdt6HzfSbCmWyXngt2qM5b5ke5nF63yu8KqL",
  "key5": "5mc4Sy8TEGHdx3trYopjxaJQB7AyRLKBagxJEoF7DJyuTaidV26axa8NdcTAaR151YksVv8LQDbae5e22WvUA2fU",
  "key6": "3cqH6zFAHx5jrZ6QTkzXEztGFr49bMpEbSP69NznmjRgZdHMvbZovv5ZbGWeFG5Ujf5Ua7NgS4MZ5UHC7iEEqQxR",
  "key7": "5HwE3DWV71YjtXSn66SxWGsCt6wHUkUnavU7QrmxoT1r99HLzHu3UsrqsjNtKY4cSQZA9givRkprJzXWuEuHqTru",
  "key8": "rm39cgU8KeBDH9LSX6N3DU34hHHMdqYLHQ8KW7ki5QLCcED3ddaBeYsvDJAcKbpW2aUoTFj2zakaSA35ih7T1a5",
  "key9": "D9d6N8C485rPUTcxvbZLofSgCR8m8RxqtNVnWTTfFRVgVoLyeYNgTNXtuUbhc1VPuF8JSkXkN92NQsFiWiRf2Jr",
  "key10": "2Jg7g1wCnWweuKrJ5vU1GUzHSEQmqVJNKpdEjtwNk9WBFJU5941sfAYupSxe8uJ5nwPeqD1TySbW2NcVnoA46pHf",
  "key11": "3k5fb98SwUPeTQUbMFW9fQiezY5NwBbafPQnNBaLeLZLctzfBWY4ohCBA8KgsWAR2zjb5MLMoqtRHkEZ6PiMpe8W",
  "key12": "23xKWgDrBoA5DjzjbmxknR6gArNZDb8YittCT2muoZCDUnNPqs3EkqMgLgn6sQQ35X6XSxEdfJPBw7FRtcHJ5Ym8",
  "key13": "4XyUyiXfRmmRUoi8u2enCX8Yoj8htjHa5JNsU4RNpxKCcLxUghD6VZvwUpHD9rJqCZjRCqWWC2oLUcEaAUfegatD",
  "key14": "4GFRRMEoNNyiJ64VBhHAXyqNhQuuPvYRAikPJA65ebj2C5pYTVmbzHTAbgXgui4rpveQUF3jhwNkJUoLYLVwqGKL",
  "key15": "3Jh45URtm3HZxRoBLcDFpCrGj4qWdAoM4VENEd1JcaJogUuM61gZdvU3CcsH7fbjZZbUjCyQ33K2xAv9EJhrzez6",
  "key16": "yDa4gGfiNvsoRuniU7tq9GqpwPaE1yECiJGWX5PpyTEKx7EcZTUJvYcU7SFisSnLyhYMzJxr8Fs2czMyqZEGT7c",
  "key17": "45FabonRceDYzPPRHaScA5B9zWWVmvUXtjhuJ1HwqT5ndC27BCTiDt1Hmk7N7QHkJPLP2DnPa7aihHWvV2SJDv9o",
  "key18": "5zYA4j4qexaVeMw8eu4EXvhkAzuJ6Xj66Grga3DLiHxwU32KjGQhKgYVHbyG3xUP6AWSdZczygMnvUK8HkwPsef5",
  "key19": "BUc4LVHQB9ZxpnABCXqStUfEhFvnLK8w8qsECcbL1p8DA8EP5LXtE9hXZz6QDWuKsSSGc8yBCYceSXabvLhiBcZ",
  "key20": "35kb3jgVSXeenHzS4PbjseA9opUZ3askFZ9QgtgJ3uAdshTobC4Em3Xy2uYCxcrZ2ZEWJvK2o2EQu1xzBPtVadQc",
  "key21": "56MKhWppNUqsDHZeN9oHQgqYHRHn2pDHX9uUMdcgB8v57KNUkxhU4j1j9N49Q8h8RjxTi6XcgXB6Y1KnbY1pH4HB",
  "key22": "rFB7shWth1cWKVZdksJfrgkqBoqJUZPiW2T4tJpENFAPVhHCBMQuDjHqbWDC1BNTzYBxtc7LzCHyBbLw9HJ4c5E",
  "key23": "4pQZNqHsCkPGybC6V2Cu2DWeZUtALUqe5hA9Vv1M1o6FQctYBe9Y6QuNSRRLiTfCmxVK9rDdfVAAP1zc666LvGoa",
  "key24": "4pXQE7swHzCPbwmRJRUZiMSFVRdSiPnVzrX83HC5Tg4TE8oeWYvZ7gpwxUsd66tiVWgQowizPK5QCEWUEzKzTnM",
  "key25": "JFr3RX83b2xu5x4ja9DuRyXGZKLTsfhBFcdAc2Ru57MtthyWonXdnHEBd6zbWKYaTvagYLiPNmK6615eq7aB5W8",
  "key26": "2W2s8GNzbgu3XbFuWzbvmpwXAggwuKG8xAxFLG6dfQv5Kby5EmREEdqoYm52xg4qUaeSiSdRrLCgnGBRS6bmvWQy",
  "key27": "6f1Vcd65LxfccEEtZZiJJoxSgub9akiX8zUbJQaeiyfcuQ3hM81uSJGsbeGm2fxfp1BT4mxZP2ipWoAgLtF9Dkr",
  "key28": "4EYwDKvHaV49AQAr5pieAYsEM7D6Z1cxTR61zE5bP5DJHu5jCjRJ6z3f3teMco1jcHrtXtf7Lw9X5cJr3cQsSAmc",
  "key29": "PbGcWXaiRMPviKJSuBRVFG3kyJbcNRukCssUMnY2vkEbxpvC8K24TzaaZ2Sj5u2WVW6oTg3JK83YnfTXQKDDH3M",
  "key30": "hDRWXBgB5xVHK7v5Dhk7mBMyHzT96KrEdZk7H7LjnrkYP1HV9NQs1b5xTzpwvjNfNbf2jMhuoNvm6Y7SLJ7Wbx9",
  "key31": "3Lbf1Ykfuk6yurxQqNyrXabGic26pYZmLuZzkURaRwyAGZvJe5TapZPpqVvr3Ym8F3KdUv3od4vrBKDKb1Gx9KEt",
  "key32": "61u3Tu5xhGP1e2SHrqguR85WTrVDBDdpCjNNWgF1fh8tt6cdBToGNWtR4zLz7FYPS7gdkk4UT4YY2B5rBw8Teivr",
  "key33": "5npUw5wbcaM3kesfe7QU5UPGTkDEWEEJzp397iTd6TxJfZrFkMk4XkVqR1FZHvYVbAHCGDf2ZNAkBv3YZ9h5pUoM",
  "key34": "5uZciCVFEosFwHCyJ2GNEK9vmDyfNPK8i3RSWUjiXtv5notd61o7mjLFmAtNRAHbMkNcKbYSQ9fSHPeh497RSMPA"
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
