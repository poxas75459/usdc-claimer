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
    "65ShDdMSC4TpDkFXChjYhTUQDKjRjze9XPctjGzwvyt42XrCVSy4NcHKHwcksZGSuhQNKgNWUAzmntSuvSeMdRV9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q39NqmMDtc8kgVA8EzQr4x2qQ1y1yRuRcP2mXUmbwLdMXztrpdLXe6hdVXAw9B1ZF4yNk8khDEsGio5u3j2yJeK",
  "key1": "5gWWXXRo8Wgb2ecXNTxXEZ9AhcQCuhT7Ya3nD7npoYX3oWG1faxL3itHW7BsTznvHXbkUr9NfA3Q5BAyGxUqf32s",
  "key2": "51avQkZzQLU494eFWzKUZxpyDGqdZtqjRTnjsBbkiJ4Xup2ojN8PqynHaiHx2jooL45MpqE2J9rfzLZaEZcCw93L",
  "key3": "NMpZMME15KobZPhKytzKZco1YwLw5QugBw3UXCgptSKzjpDDcvQ1VLADRYxasR5tfMN3rHeEZPLkybdpwv6jr9G",
  "key4": "4RDJJYw4WU8p5aGXGHphZaq2QCn61bZESc6a3UPL9S7P57Z792cgJzUTQ251E5acuiDz3VhpXn3yrmT6CbjoyNLD",
  "key5": "5MD133ssVMf3Z4S3Uus9ZLh21etiNxAD59nzCE2UHxtQgyvXGSEtdCjJvWWy83yNar8NQTT843bKPxXcTWv2CEsR",
  "key6": "2btHQ3Qibu9UrkMxTxLbNtwcv7AG87hNmqRFcr6HLEe4UHu74d74k3ADYNDpxq2cQ6cWAgpcac3gaKJyK4SBW6v",
  "key7": "NA7DRMWRgTWWCQyyECnY4XdmEaoFdknzWn9vpizAysaGKi4zaS9sr1a4xqzAWY4CJbKV4UoqJ75HYvMfXZudDJy",
  "key8": "3R53d2LVxc1p9EKXB24Xnj4Y3e9bB7Rmtmx4tr2zPCRTgEFwNAtKQpvMQpyH1zjMGy7X9GykGAr3mRxjco2MdwFM",
  "key9": "3wwxzDuvYxNA6rE9ZwkBdm28hzNMfdNXsMw117DzHrH2n7sBds9H2CSHPHRcj7qPVbxQQ1JkxfoKx6iqnMPGFLTQ",
  "key10": "cZKC3unVkHjFXTsk1VTaSZ7qC1dHTGXfXkw3HgJ9pgTJLZubqaKcPqoFkFHEfhkTbQUj9iPrp8HUSBVixaXXYd3",
  "key11": "5hGmcWdCcs2Gq1XD4y7sW56uy9yQvYaVcvTgE5dWJDgeThycKSoVadZkWL7pfQ8f8XpPrtGafEmDvd5dKxFWPwXP",
  "key12": "5gBtG6UwyeGg9i7oKVNsiSDhM1YgakJgiP92or3AhMS56FBGAR9PoNnonm8X1aeQLF9S8VNefCRitnDWQQdkhBwa",
  "key13": "315yuwFN79v6bJSG7d1QxJ5BgmRTcErTGyEUXt4LHcVg71tDrKUQs4WAY9EU1VXrTWHVQ1zyUYjkS4r6Vhs2gxsh",
  "key14": "3RhUYiQXDHqmoeNCJZYwG1UoDPDREatrFxL4tJsFFhTBJKX3uV24A7kBmATrXSw4KpuVr7u7D6QxMMZq7mok8HMn",
  "key15": "5ZGEVtApt9k3QUhAoRbeFhts8ca5oGhhobSKz6bpLZHviFp9jxtLzygyoKsGukAPe4uuBB3VXeKieeTXrQGE2vVc",
  "key16": "4kudZAHn1B4XXwPXYAsZPuZni3KPP6i6N28zovH6MogaGjj4vy9EyJLWsvkuVCnXJqSsk7Px25z4bj1ckJkkkD47",
  "key17": "5aN2Y5Er63NFCtvifaTrQyXTBXDTUML5nS3uLhtSBb6eMMBeuV2bTHVu2HKFJ4ChR1JRWgbEzonBf7Ad7cnZWe1a",
  "key18": "5HrV5BVJDLKtTtbto8Xo456ktVCtdwdD5omN4fNJiMPz8NpLLP9uPicUK7Fi2ftx9BAx639kZ11FKEfEvGfKPU45",
  "key19": "2Mf7pAQ1YskVWAew5BZio4hYT3fGUENJ3upMAWw5NsGptCBu6eas2jTKPgSZm3oU5nCqMrFaxbUefm6z5zaccHUP",
  "key20": "2GSLY7XAjRjFHntGhDQJKNFKHB3t6ezwHz3vYWbBXVEEVkewHjEWvhqTzi8FMQJfVReXMFhLWQVjV5XPn8vhUM6W",
  "key21": "3NpHMsbwSeHXDBffkfbdXZFPYLHksJBU6XQGW6APP3Kxhoyb7u4PGjnKfeHwTi2iBbAKP83YKnBqN3kHaU2iR3WN",
  "key22": "4E6eMGajCxfvEVnso8FNDfXEnE2dvvhS6Hi1La5GtMZnri7YHX2kK1DsGGZU3m1GsmDmdndyBs5hykVVz341wcBv",
  "key23": "62XdWuWpUF1eBKvAFKtc5dKVfWkpot4Fg4xgnLq8sjus1A4963rJ2Xtdmy2Zwu8TrYAthGZQjpWeDsgW2hZXNmsb",
  "key24": "3JYK6uwhM3zWodBUGbwscREhN73X77pfQQZ8obGkcEFZCKJwEqkWWTho2YrPU2b8nuuia3zs6u5XEW1pM7SyYYQb",
  "key25": "1j7BakaagGZ9cdJ2rpZgLbvVKit5mogtbU9TuBVuiUtFbSCejFtjMWrX1rwdmY2fcRCgHCbxeHbSdGpPVs1QkP1",
  "key26": "4RASJjmSmDtH2TM3ZcmjAi1MKLT3UeQovMH1bGoL8tBHtkWhovQWMKNzQtWabeuLLonqqVYKs8QZu2p5j6Rde73v",
  "key27": "2wvkuBKGBhKMgPsJph4NpDmHdqs4HV4Cy5RYi9q3A813C4mnDwdDhkxCQ8rAKhMEBoC62sbKTi2Bo3YK3cQEGDvk",
  "key28": "3FgxPDRn3GE2YN5ncWgCMStRWYC6FdCfqp6ywtzbsJYDmToBFppVECEM8qKodFLxrWgiH8CyBm2XavmcT7pMXfKW",
  "key29": "5tGSeWJTtfMrEdSLsGJU3UyG7LcUhfgVcEER5F9oCqhGQ2kogmnfCj1yzEWKsdJMwvKuYafetP7aTbAosXF1WGnu",
  "key30": "5pmbV6kTBHAJVbxJVzSR5CUdvhpbYq7D87Rs7FWdPhQ9Lh1oL1v7wjRLK83nmNAS7coJoPxhJoPsY5v91eFS9kHc",
  "key31": "4yHsAKgumGLMt34KvBzd8dQRy9HzkyuDBYHksZrtghn6R2wM4MdoBEAv9U2AyWvLhhArZHKKbUH9JSgzGn5ojReb",
  "key32": "2FG1nDnYwvELmatTdU3jXxzckgyP1Brva9QsanjJf2reTqedZFoYXcrajkX6rUFGWwWa9WqNhunBJZXg1NRwLCbH",
  "key33": "3jTfpbS6P86VbhpFzXnpWFsCEzzS5SLGxfeNfFduFXK1GGJqiQDM4HdyEhoTLyoeHTTz78zbb5N26YUDE91viEh7",
  "key34": "5Qm1rinAAHMZWakdXdTQFi3PxCbrhDhk1PbewM4y1x79MAgHkTMLhLQGem7gG3nDY2RvKrRHV77H1xZcxQp73EJL",
  "key35": "2r8HUh5Xhgp3MEAix1eCkEvsKkoEE4fiq415MrTtVzXt9USq9U5AcYBDj7zPiTDeg24UvChhESJyroGkQH5xaYgi",
  "key36": "4ydVXfEQHtJtZ2N1rKjQ7xJShZphGiB1gE8UCScdkHTUmvKUc5mg4tLxs3u8keb271CNvctJKzfrQUYzHQoKKWyZ",
  "key37": "2f8NYhRugEEGguHqZfVxB6XaobCmvoDrGaWv79Qqe8L9Wy77Dkxkqj5BNN3QpTDF5GdQyHKWiUgSfCPaVAdMNTrR",
  "key38": "4UX7YvtfSc7wXGbku3XkpKupQ8yLfXq188rxQQR8sMRzbPDjWRuWyM9yPbp4rTBuDM38ZeCmeGjAkJesm92kQxa3",
  "key39": "Geg3xSqT7RJu9zCFsgFCgriiWUWpANS7Hdwgd8zZH5JSHHdQGfGBMfM7WcgKpj8kvnEgJnBNpzStR65Mef9yFjs",
  "key40": "8EZQKWjZS2rzSZTXFyQBYcvSJN8aawJedG93YxhKbCBCB6x8zDw5fZRUkhriXmaRsFhobHJNxYaaZV2MeTCcfDH",
  "key41": "56bMwhCFhXLhA9o6rNpgoZrxSgsrvfmyrBE9scZhdt4SZ9DD163VSnp8H1CzEJ2BLon9JLgbsUEwVtGd4iyp6hWH",
  "key42": "2XbdNy9ygtwxEEyFf1UaRQpRaNigBuvRQUsfASESekXVknpQsik2rzWu5ZFUVe2P1E7QQmJKRyCPRDwHraqX2s5H"
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
