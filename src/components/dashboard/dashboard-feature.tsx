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
    "2snDWeP5EppVG95TAGxcVjtaiEawcVxRQxxhwAZMynK1YhsF4fz3PeZJ77NTYW5ge9Q7smKwENNZf6sE4MdEiWAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c3mAToqUYSuZo4iCgEcm3RqVD1E5UuUvfYGsbBBPMoeaihwLo8R6MAWpPSxBiZazW8gSC5QQ9jzzjK3K3QJqp7a",
  "key1": "63G9ZWkByHLKR6cGLeWmX3b79Rw181kJNEyuvg7mpXkSGSqMXmSP5QLLioZGMRQ36mGhGuYv23LwfYQ4GkTNPMT2",
  "key2": "2Gq35MMfj1aVqsL2Fww3YVZ7EszUZN5JgxZ8yn5sYW8meRsfaUNuTg4QgWRzR6NLYNwCS1MMs8gF3tNTop9sjy9Y",
  "key3": "5duvXQ4mvvXjFhoZ3uBn3bBLDm9TaJEzL38w75ePFZKRuLHtfAsa7awc6gq5UTYiTUWNc1r2m8ghu7JqicjhkPTa",
  "key4": "4T8d1cyHWQv1QwX33vpJw435zDnWpwH7oacyChL96tYCrfHGTPycCcrbPEHBhsxCQi1Lzc6g9VG5wpjkCkkiaLYR",
  "key5": "5n5FxjjycSoYtqnDfRLy4E75DDKaiKAFxQF8pRpMAiWaR2pSs7UbvoEEhVu2qNxVpgkRhsX32upaM89fByoKrXK",
  "key6": "4pwVvwcKQ9DBfNVYKpoxVyXnQeBeJihH1QEMAUmQGrSnEcGKpioRPnqGbADKnbBoozxsoKUbqfFvbsuW2EBAYx1G",
  "key7": "3Vgyuh14SwUViCZ4yF9Rcfr5teLKVPJ3n72Zq9ec2RWYTWkGkNZwNxxn9WjSqBqrNgoDMEkyoqbWRGCDffN5WV6W",
  "key8": "2YzZee9wXrvsGRJE5GQsTNB3iujXwvVL7XBzfuu4h2EM5h7sddqX1Z77gMKtbnwsti8SVPXzw31dte1nqjjp7ucQ",
  "key9": "5iqk18SuV9jC9sdHX2f1aA3s8hWB1yGyVu4L1EkfWYQZPxo63SYe7sVG9oa7ZhQyfgpRVFtxWN387iHRA64wkZvA",
  "key10": "2kCVZgNXz7yGf9pENC3t8123kaCSwfY5u5q9TUNEYSpePtKoVuEwNEP1APT4wPzofmiu3UMW7ZR2131Tpckxdic1",
  "key11": "2L2RLY5CKpmtbbLwiGSGmJoBW878CBi3YaWYMCZ9XByXd8kfYNyuhpycup452QyXfDz4bqYAX3eVxNjSG1pC3Ts7",
  "key12": "43N7VwrvbiSBc5mQqYumGmnCbvBaabGQPaR5CKWhfDG2DVgQJdLxzAXe71kXeUXVWKvasBgCYu6RfEWCXpJs1MSv",
  "key13": "51umSjEvaVGewChbvQ4UDH2cyQyUhtWU8rQb6RZhCGpsWtXnpXpgujJhstwCqsfuUgeVbnRqKNAymMRwLqzLh4k",
  "key14": "hEDzRrfPaZ5viZKBBWrf3U79ZcEnuma24YBGTwMdcmiKtBqqD2BALWh4jzH1p6jyN985iRy1DmHrdvmg6paqDu3",
  "key15": "3NghFYYBuNwspKUEkJDGbeNNa2pR26P18ietnfsCV7RWM7YKRZpiRpss1dXRZ8Aie6ZdQWPgU2isoAGFxdZK4zw",
  "key16": "z7dGgTV68qi3JHc69Dr1yNePt9aaDLu8H9BfQ8Krpy8zrzjBuEprVCMff7bT4dCKtJH5WDdt5YVSk1a7UaWZipg",
  "key17": "2pnYqxf32d87iT7oDV4VrCYsYX1JPHdMPKDiVVF1njAy8NQJqnZMiYJt8Cig4x4kqFaxs1cCCNifkJQHSCX9PG31",
  "key18": "4cN6gx6z97QgCZSzU3MKHxAqEbBgGfUZiZAW4tgPLAxRGCJKRmEustRzJfGkDcH71Wba2mA7qmFr3vBR8cR2uWK6",
  "key19": "4ucpdv5fd1wkbyiGua78aM5zyiPJ9nNVjbyEC2hyeZSEe5HDfLKULFRbpTKeWrRKYj3VSG9yjY2kXE3gj6Ssyufd",
  "key20": "2YbwJbmbnu2Nuya3Qr9A4LbBa8aZfReWfapCTs1ByWiay9H7hCwSTUzUNG8R5T9BhpawzN2scu59yZFVDvnqNw9F",
  "key21": "2nXStmxwA3HXsUD3iBr82mQyCP4Kp19SmRGrA4UJ78GumkN75PrpQzXsnJiaB1jcwwcKpyz82ojwe64kbLVr3r25",
  "key22": "4s4fLLTBa2mdcy2X6KboopSvTeT17tYJbRCHxewWvdk4cbjhSEQfiy1B8P9BnaUqw9SUoMrhJ8pSgkwZ81Xj7Fiw",
  "key23": "64ZsiPyZgKwryfLVn1DtXxz4cxL66uq6VzPSLHXx1CcpWn5HuKKkFPcHey7X2zsj8ueLx6ti6A128CsUob6JXA4R",
  "key24": "b43ZWc1XmqEvbqT6UHJDAq5YFBSN1ZX6TH3T9hQwcPDvfX2vf2DzACyy6VFEmrsasr9JTNbzQ4KzyECtkv4oqZg",
  "key25": "3jS9Qj8BnYKQzUUmeHzrs13EjDnK4S6jNWrX4H4c2kskesKWz8EvbJ8AFpDwCNZe3R3BGxJwrCADk21nFqvjaS27",
  "key26": "RJGQki2j2yKsJrQ3uAChbmJYmJJgBeHjjKinXSpC98vjFUX2EnYHYWeURM84B46kr2z2Ewo7MVAYVr3oyoRsFih",
  "key27": "AheLLhDqJMnMCzKhcT97hqyVDSTD5QjDTnJgw6SkK24XJRrP3CBTKpFFD7wRLWo9jhMWaWSpwSN2yP9LrEzhepR",
  "key28": "5hrWBeZE7VSVmNjZNgvbepQ3h1o82WS4CdNnQq22qFaecAKy7Nd3QVgvzYuVWWHuRjfSFJjcAYkXQxEEkVFBsAtz",
  "key29": "2Q9G3PrfV2H7MJg7vuGoS1ktgosm88wpbizgLkDsXdSrHyYjZRc2ULn64jbwyoCe1vedTx89yzrQg8rvWosCG7eD",
  "key30": "5AEQ1CvDLLnpTSURaHcdFqs71Mb22v3BABTSpfWTLtB9Nm1MvHhgdAJCJs6WTFDbjKtmZrUzb1MBL7c2nQM4EgEX",
  "key31": "2rUZJnrhpsGrFHdJ1XgzF3GKvgxtDFB1xHzmL2HVr2HeLGeRJNesuTSPAsriZW9Sot3rS4osc9z8zcddjADHTU21",
  "key32": "3wXVgPW55g32sdMg5BiHLs8d2N49Zaf7tuUN2RPErL8z3V6i6Wvw5aSx7z8sxiJyEK1WcwEo1EHweMPEL1PhDLLu",
  "key33": "49AuzEX7aRgHViMAYwKN2CNHKpFHNnnQ1f5YBDALg45e3R1PT8HAiyAhJGg8oLcrFCxX1wtFboQjwU4UtyPda7M7",
  "key34": "4U5WehXtY9CxZhrx3jjKgJcFeT5W6wvR84dEaydfXojxXFjQRqF6FP5TDpYccbJkLdcH1DPMHttp6ZRHGzBCcfDm",
  "key35": "3cWhNsvHzbjBVyQMEjDd9GYhe8B6NTF3s64uoLV5XN1fsE9Ym7bActmzwyC2Y9mX189YUurW9YBT8PiiMmh1rH9W",
  "key36": "4ZR9wojFifdynCvg3kmTG8TX3GKi6GM8T6t9iEya5GvvY9m2k8x8ETHcVDBqVBFkAiQQ384NWKounmb1ogAUvzP7",
  "key37": "3mSe9DZBpYjWkEuK5mvUBnztuF7h3RxTfGDdRtgMsV6915JbbjKDQSsn7bKgXvVMLuSAf4rCtBxV9m6btcb4GPCD",
  "key38": "QymL9rvUaGgVEDWYWq1pSskb989bGTVyZmLasrppoPSzLH7V5iW1fqsoC4FXfKCunp5cgPS8URNGuCHPGXthomr",
  "key39": "4iRtc7H6yFseuwB1MQzT8cMiVFC3Zq7dcLrNUTDz8gnxq2FfwtNTJRNKxmzrBN4o8X5N9uBxSaj2EjjZVzSQBUiS",
  "key40": "29W1PrdgdTRjQJGcfj1fW1qa1rdpRc82t1pqQuvxTzxMuCbqUtmfX2MHM5EJBc2jxeTJhqDMYxpnS7gpZStJv9Vh",
  "key41": "VHKjfzuWjAWeVc4Xer5M9sE3JM17HAJUC8qCbVA1qsnJc4zmvMxX55U9P85BT6WpyzzSFkCKoQVvV1phhnjLRYg",
  "key42": "3SFEmbdT2tDUuJx1DRZmPN2uH27PmV3c9AZ5RqeiePwod6DeVBd5RuKthTAJGSCw66c6E5T35UNPwV7UjCzLwNda",
  "key43": "2YZuSNsRMNzvb35qe5kE3RYGnLbezZmPs68ksmUiahkFGAhTSLFQr4L46v776J3Si9kfwndy5cMJGgswXLSzMdRi",
  "key44": "4hts2J19jmGU8HoMtYRhZ4k1JtyXax28EhwfHDFo6rhTnp6gwRXjdkdqRQxHxLU4AYdXGnWgzadDoqbvQu7pQ9NC"
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
