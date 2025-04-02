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
    "3bBGwUZVZE4vtrcCSDPbo2BP2iixwSma6LsAokB4KMDE2xAqPe2aM9BmNMtDovDJVwT65FJGjG2tP6BUN7sk1tsz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rEiHgEdEdRgMKqCY4n6oAubvuUEifuiEQ47KzGbZQNMrCXwnZ4yTamjupFp9sQansA6tYYNSUbzeC8Qupp72P6V",
  "key1": "2jtLETgUewqNXCLqdAvsaDSU1XtedanJQJfcvcptvFa6sQwd2BDuqFbcu4dhoNHrMpz98AhhmjWcuW1dPg9Q3is9",
  "key2": "5Xb8qnxjPExQW6hxxwwBj16WHxqWPfzDVmZ4j737kTCeKVX5nJkvrckVsnevMCy5qy35cBLkWGqBcKrGWvmwQZKT",
  "key3": "KPLuSvBtRVe9NPaSggHbN8Ge9wuVkgo3CbesaxnUcnSc52G7fEr2UCwLu5e9ZgbrWWxjoCWBuR7sYm1tXA5VhBq",
  "key4": "4Wyr5i6z4ezFn15uUKCLkyzCkKJqaqXced5HnGcVw2BVxNjvMG9vXPkiTMFr1cebwe7JxCQk1ZfDXbr1xpeQYLKD",
  "key5": "2rHJRVNQRPrWSJwLayadow7aMF2YVfwAgDYtkjyZz4ggKhTbS3PCiVV8uN4o7EE5NMhSQ3Dfed3xLJuVYSxeXXBT",
  "key6": "3osa1S9wiwZgCNecAwhFqS2mPNV4Y6Kxw1dTMKxt2qtQH5g3qu8KQ9fBMjZLqZfy84u8xZyAjfMNKsSBBH87aD5L",
  "key7": "4Y8EF6djz7HaugmdxwVG1AxnDJutxzTjf7PcFYEkcTQJzgaxMQnRR3yPQFaWcVtgsdztqMyhP3HMLzfucoxhoXBT",
  "key8": "35dNgz4UnBZoMLmZY7bbbkFifGyErby7dB8guxyrFRJ7z4s7utq3gFfv5F5TcNpGWBVZgjTJHs3pZtCreToXK1nL",
  "key9": "5WvpUxAiLqd8FcNysxoDESp7tPi9uLishy6ctA6oMbAovxxr3T7y4Tfne47L4zEGqswNtGmq14o3ghTXnAjJ8vqM",
  "key10": "4jrWsqi1HAqGvHZnXB5Ap6B9cKW1cTuTWK2MQ6vyxAkXoaoRcNzFmHEJTymPNChPdwa6oDYajXZTdStitpCKpKZE",
  "key11": "5NuYutCKbfZ7Cjz6YShB4krCGdgBbBbrqD61zqtn9f3Wdmf1k4zMTC82nFKTiTUvYuwoCVVKCT12Py1ru4zR7k5R",
  "key12": "tCmVnJX297cAVoW1FyxpX5vyPZQyQiFP8Y44eKw4GCZWyKFGw6su4qHYEsmvVFPPY97Q7F1YCKy4HaBZVK2e1ws",
  "key13": "TRPvsbXjvkWTrPWMju3VhYDyP1hJJeUSF2jLy2R9JHm9ue69e4mtESni9aEqXCjFjc1Uxa1QuVm17KKDuKNYfFw",
  "key14": "i5UqTZvQviJ4DTvMA66KV8hPLHAFkCEqTf1VZxtMFvn3yMtgedZssoLprs5Wr2oXaN6cW8hyZJqH6i6RLcTKYnt",
  "key15": "3A5UxeQTxtLPb4txo8LzoAoaHjnj3PEmhTZgpFYPnNz1KkjUd8mCS7Vjzga2A2oYMzsPg2eb1iKH4P8esd2z76pu",
  "key16": "5pBqFoaPRjxLcQQbpAakuZEgAqGhVWhQzScguyqAiLxFbT6aCQxAzq4nAyf4QtKdu6N31D58vrHvDcHSjvSxzbZ8",
  "key17": "4tYngGfczoPuyTVwHNPsEWQGMiUMZYZp7xe34e9Y7bio5Rwvwu63kCD4AnkH1TRTEXygpSLanaQafKgznMM6Vwie",
  "key18": "5GU2MgnTWzxNZ4mPyLewWVMzEpziHJ33McX5qo854pmWN18jA1CK4WL7PewRPWDaaMmJrmdcEq6d9BWbypFBi4G8",
  "key19": "5D5EzzMgebcPVpMV7BAS6gVeibZxHhugpqxHhmmiUvf3pztt1zrEqPUoZ5FQyNqEPDiLPaAkgg14EFWZ1FvoHUcW",
  "key20": "3FV3dd2EpHT4Zm75UL1kzMDyFkpqXavQvxo5FHWn3zLNxjgUqZz5Eq9kogVuFS3PyBQMvoqaWeA7mvH3ccK4nfQX",
  "key21": "JXHb61ZDxs7DTvaC768KWbgX4GmhVYygrBv9pj6YLZyLjVzuuc5bETH5Ka27Zekrtjtb4rHi7sbNXuNNQJdf4R6",
  "key22": "3dNj6LRubU63w8dEN9qrJzAgMZMKkiRjqT4eWa2PMCWiu7utfWVVSBd1TYueFzAyLjtCHSkKP43B6KaHZv7gZHMc",
  "key23": "25iZyeY7YRFQKSETmWCs7TDY7sdUaPd9uAiusYyhX7nWb1McvANok8TtqAEGWJXr4uXboTD5h2o49gaa4n53tHPb",
  "key24": "2H3nywaLCLhsHgijFtrMcgGZQSPYYNdtf8Lv8japfHFtpd6TLH66qysN7yWYKeTSGiDnSCBcPJwMGKneEehMsZWD",
  "key25": "4KnFfiZYWM9wEsXufUgYkwdaJYmuAGXgCDD8kvMf4L14bGxDsmtSwaELgZTkN5dYXE47HDt2KHa5yUP9E5sUD8No",
  "key26": "3mQmYUxg3WkEAX8PrCnijMNZj3fLccd61WnBCNZUqMTcZdJUCWi6VRD9subZ6Sni3g1CNLbNWvvtmupDejftd5xF",
  "key27": "22e9bpMwztsnKYobSbjwt9mAbqyw8NYQoqnuzj9bHjjxxNkFKbKKgLtMu3UCSAK2f87JtoyX1hQcpVoKgp84Ez4S",
  "key28": "3wBFQEp2FHNx2Ewp3tosGKVcMFCUkwZmupjVfsstPvacbqmiFWK5Y1QiwoCRscN3xT8hLhgD8Y2zz7vbhyJjFGmn",
  "key29": "2nc4Dx5KNMmLjC5TABzZA5Xfh1Z9KDexqwtxs6TNsRwuzHqaRy3s7QehQYGxGiPqazKhvhZvU6QG2UftpntA7wLU",
  "key30": "3inYFo5B6p5XK3Fr6ByE6ET9ZwFXMCeDBUDzRijh7ZUev6VKhV16zZCP3upzjrhok5FXrVUy9fW5Ah92NssDZEyg",
  "key31": "465Lg8ezo83MaBqScYkCEhWNz2w1yGSKpiBQK8GoXKRAgwwve7MTaeTxTeqYqhZzACMYDyNDHnKNpeeCdNszzx4C",
  "key32": "4bsBJAW9DFuz33eRVvPhsKVg3DDnkpQWJXRtdbCrkzfqSJQ2UzNREeGJNeyZ9Xv7Lsw3TVupVLG9URLMREeJHK8G",
  "key33": "4gZmdCNCDyQsWqN9yvpmMxactpJ9C7jBUxXhRdQfYwvSRWHa5rRERtABPn4FvPXX1spSs8z6jQucAx4pzPcxdi1d",
  "key34": "3RQxybcCQ7Sv94GeCw9ZFjDGztA6ejXqy9pL4y1rdcwmi6LHi1ZM7TDjCMJydiMWMxSZXNSZZ23K5W62XqoQEdrt",
  "key35": "4d2HBkrQc2eVtBoxxDaqs8hLUXje9Mv3JcFF81XvoDpHzq9cCwfPAahvtmSLqdqDVSxfGL1NoLvDDSCAUt9Z5gxj",
  "key36": "2yxg2ZVpMBBB9zbXTVxkafY4yPEeNfZ4uYQwYGfzzp7weYoEJAnEriGiQ4EVHTNmjHv6RxrnNH7R6o3YwBNXzwka",
  "key37": "vTG9LNoFVHKcQCGo3Dzh9TEnqdB9Moj1tjBT7ppBr1Urwtj4pkmKUBLA4m5fn4L6jyinUKntj68mGtF6ZYY9XQt",
  "key38": "pEM81x52AtL1e4mBKMaANVckWkLkMQDcMSQhtp3gCNsnHRr4menV39w5JfiRXXzeV5t7B7Yaw7VenaqwijmB6jp",
  "key39": "67T3RBseYzFBX12r7JEPMCrjDLYFkgnwwng3nHMJxu8v7MSNjXjy4NukbeWHxw7BuR9pw3svFFQbckHj8gtbShm8",
  "key40": "2tDyKFVfws6dNFLffzDxvtGcWEncBmmoEkqUDweEs7w4x5aBzhDCjSc1q844PDmxWWm6Wx67ti6ExqFmCmqaH7TY",
  "key41": "3W29ZtUV6A9QEfvnC4Tggm9CaRXvPi94HZVjjVddBq1SrQWG8CbCL25y8kARYJRpLdRNhXHzACCrSz1s9yNTr6wS",
  "key42": "3USNLd616MrFejyEYbmjQ6CchpDMjBGeRqvjSFEE5mAE4jxwgG9Fsq8VWaKguftm8uDNz3APxVamHseHB8tq9aWj",
  "key43": "2L6vq22Wj7mUAvkjeRc3q4zjxLSxzPnRxe8dKg1UHHvoV67yCQqvw5tiK1wDjUrbbprJVEFSJ3fowcmdcozbgTsQ",
  "key44": "5rBSNck4bGEt1oShDiDRAxjsZrtVEUpYBgFdQiCBvSS2Rxp7U6aEVFMaeCPqWHxxsH8V5dU7iFeWmtpFWYb8VZtJ",
  "key45": "5pLq59rz5brYwk59t7njDAmY2o9jKnp1Qhus57LscsCHDRkLHN4eBd6kfWZoUNDQQTFpBERsBn1otXC8RJ5b7ybT",
  "key46": "M5peiQeBjKMxVCeP3YfSMs4Md3fdL2bRSZ63XiGByC1eWgJfHhUpWbeMjDnqoMeSq2qqGUouJBFkAModHKYK9cS",
  "key47": "5bfNydyzhjsh69fja5AmGAcbjcnUwe42nNnqsaiu9ALKjTh7dPaKtn1pS4HjcsVEM9q2Yn6tG2jZua5QEEkYEGBt",
  "key48": "5q2E1Cii9DZntfAsniAJfmARHeiLb2iMwSztLZfzfRsxMoJYZDS8mUxxud6fqBHPnHA3fh7d2dajyPdg5AiA6ecZ",
  "key49": "3XJPB53uX4RfLdeWJ1HjST8PJTxXSu2pYLjg8YAB3PpdJq7eNM9stDc8TUBKX5LHegcfpdVYqjtKVYa4PdfzPKv8"
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
