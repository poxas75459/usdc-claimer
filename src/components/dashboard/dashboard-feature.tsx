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
    "5me64MnqDqLjrTWNVTKyqAb3tMJWgjs2em1jzWkdPGJ8aV1x6e4RDw71tKhEcirwaxxcvvFftrJCa1EvfnPJgr9P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RRYV6suvmENVViPQMsKCNWrUUQeNuSUhHPjAoKSXJxFGncuk1Yehk4qftdwRz4PvNUmCmM6vnBCacJTp59LhkLr",
  "key1": "3fUNzMoidBn1pb3LecvByCEQRFK43gWyBCZpbseqBNY1j8BDm27D5ST5X79CrR4JDgyY1J4s2R718U7vugFaLnZH",
  "key2": "4kHFzrtg6tDvT4NHeWHATbT61tnT5HZaJ9g3yRVTSgAFQPd7NezkgGxc4gVakUbc1jXi7S7VqSTZHHdg3Hyfh2MK",
  "key3": "4u6pBpnduFyq7L67cPggnN4rium4F3PFGope9zygT3upiErX1wNpdxBvsSujmwmGSwXv2e3dyhTwTRmWeVQv3UXf",
  "key4": "5UotL2dM41qWDscC7hJCyVfxUPdhF6jwfGrWdqk9Tb9xCguMVLHLEa5FBDtywXnYNNfTq2EXEUE2xYdtDGybY9vd",
  "key5": "2bXqBe8v7sHoqLjJyzfQk51xauNpmeT9gBNCHTxRBzhYky91eedjeuL7K1e7PWZCz58tbUZ1iWCAQoyn27Vd1aJH",
  "key6": "5DsvjGCPuCA2o5CXshRu3gwJDEEsa3khxhLVSjDFUYBUrruVU8JoYB6spfNvCqQJB3ALrT8RNQzLYSTh8EC6efJo",
  "key7": "qoYsquHZGg1TxHBKmRehW7LqPGD4ULWkq9AdBRcqkrSbghxCLuzX6cZTHiwL7ohrM5B83MumwYCDYkS3wWUdL4y",
  "key8": "4KtuqWazqsEvrdbLqGJEkUyzJSCwrV3WvfoXqyEcrKnuZ8q1WQ99jD9pVSxEizL5omVxy4D4ZQokimW1jhgnKWN2",
  "key9": "4sk1HqfM26Buiyp5L212ZRgRVk3PwcXkm8MxiVyzNUVNisgyhidpJLS5q5X56CyNikg24CpJ7o2kWD3V6V2MfeZZ",
  "key10": "3pt9D5cpEFXg6pmY33ARKGZ5qsL1v6LESRc2xiXqq6sSGQNDTZYeYE42h7C1BA4BukXrikPUFioubM74a8Mtaua7",
  "key11": "2d5y1oDEawdSzSp5rnsjsaRa1vcj2GmPWYREzR2TMDivcEZKao3QD8rxvQhwdE7hnbFQtuvDy5RA4h3qm8qyTtKP",
  "key12": "5NvJi8ezqcY9U8LCiPpJTophkWFEyEyEeJCWwzd43KWWUEoPPHA5u5B5ryJpbqXXPJg233qG3R7vZYsdv1tkdzrg",
  "key13": "4Phg7W7vCfdSrTFasAdvj8SVjXvA8r8FJTtEhJsogU8b78wEbpYDoi3ajLu9HNFFNKvtiKLokAq2nJ8WejU7GKC",
  "key14": "5vpvPiML2NbK8x5CSi9QgcLT3GpKzquEZyBDrXxdpuNXg1LwMEWPuT5CfN2rm1seooWkSbD4KuzBQpBYzUo3EChT",
  "key15": "q2VhjCK6KbTj6usieDAyQ1UfKwsNhRcMktU2Fs29p1u28zicP3GCGQ5243RZMRbzpkmLLmfHr8BC3nHGmtN7eTT",
  "key16": "2pekzPuaV2j1c3L3Qjwmv2PZJ9mGB33WhcPLVb7NVMBcRqxifZR1yGMXqfTkU67sE39xzNiPq6734pyKVT9enM5p",
  "key17": "4zXaDDpkXkPpKsooGZ214whx6FfFcxevQW43ATLRMsGZqRK6k4J1EVrduXVqFd9GxewiTsQMFcQqXBcB68RMrtwZ",
  "key18": "36dGMxqpEf88RMw2eYcorQqeAAGMMyyf5Xo38Hvbjvt7oq9ZFjXC7PKzYDU4qyncsbYbQusWRk8dN866cLBgNHbd",
  "key19": "34gHqm72aG2nFFzQdbAGPq55g9E8booksXcSVyFZ9myTYxmXtMYng39A9kkvcRj4iMZ7X9JYAdHaTCZpGWWLMVfS",
  "key20": "5xpA2VN6H2mfNEbQoWNkE29u7x3ztFJ5bSZs6aPwqNHMJdh8Wqe1mj5Tf7BV6uJdbBjY8Le9wuReJRPgndYAoT7K",
  "key21": "57QNtcv9EKwwiJEw6mGnNxNYWUuwGKT2Dae5CNypk3EFkhtTmZ3fPwMxCV4GHY6hzjByPbxpekoXS4753oF8HoYj",
  "key22": "PUrUrJa9rHEPG6FU1LmhrBf7dVCXnPxoSfKRo5tJEZiwPbyozyNRbEgo8fE6QRSVCSHgEts8rNSVJ8p2rbiPUwX",
  "key23": "3G5ZrdjjRGn35nRmG53WDQRnz1wdQjCda2Vj7gNmGHSLNABkvbcYMMYLUw4w5oYUnPoqQq6Gpm1NvPbeEKQBET6n",
  "key24": "2VutM1CfzrA5GKKy89RYmz1k6wkSjaF78wMQnYoknXnPNUyXPdckGudnZBD3P63fCoacfS2w8G3whBZJu1xBgV9M",
  "key25": "2n7sq5ABB9KYtQkSHZ5zaRjwxo2LLv9Fi8SLfXgfhjJzu915VDoXpcwDVaSHS8ksd5XinuXh5mZfuyFNXqiEXypt",
  "key26": "32GkebTsku4SRNK2hxQafQqB1QjRgEMoQ7hngqCuNEvyTXr8mUEVsM5L7ZgDLkqAUtvTKzz5Nnq2qBqxH4AQURHu",
  "key27": "5bCkRzrjaj7DMn9kQpDMJXFXnr4wJecnuma2CWEGf8Tz9dDs6tzVyMPDBvmse9LQrzQFdhZn6WKsobAbtmheXwzp",
  "key28": "LkpKNpR7Ysw1HBMRYJVucunGRGd7Xsnr5si2ZZuVF6bgwRZZJS2KxhiwVn8s2S5wund7iJukv5xiDGLvUKF4Ep7",
  "key29": "2LTrGbPNJUwkQCgmydCMTKbrsYEiqNPt8fPVzmTgrw5Qmrv14NHHqVV6UaLJEcGEJQywdTYx1T2tW4CHmMzdipnz",
  "key30": "31fQUVeYPERWK71BDoFQrriQKW3wC5uPuKbzQVtuyNfBu3nJsRENr42mwSZpNXC7fB7EbikHXztjcWcbQjGoYdEs",
  "key31": "4m7v6TVML7YB8jvSBTihUo3HT35TxqC8TPUQzJEr9dnHPBjn81QCvnxNjtgRAKLNkGwL4L9y7v3Ezrb6xC1LnPGw",
  "key32": "59DdSBv2wJkL1dWasxK2vXQhfm8HrpcnikVCGiXWu5qRAEv2kHTWgXK2eTiSKs11KRziigJsFDTnLTTQXfmwmV8V",
  "key33": "4zJ3B2Cc5HbbWCYnm6L964uWZNRSBaVMnMGcogPqBroQ2gZyXBf6ka9q55gZnU2FbJUNiqoSzpxWA4CNYRtjVztt",
  "key34": "5Xi8bhC7pNUiPRkfE2ZkwajwGEvCn2ttQSgHyaTzKxjaCg32jyr8a3GNTWyLkeF82oCzvumDY4UccqjJ9LQfth5e",
  "key35": "tJkX9RGiYgeEkWuLQ5kz6Ce2Hp2RGxYdT6KXzkmXA5KXXAQPz2TwqAK6tEdo7CAuA7TFzvkEWmJpKoxYDsLse8D",
  "key36": "3ECvYksaHSjkjvpuRMdsZBauXRaz6BxsY88mXm8N6kn4zGs13uHi8b622EoiDNpCxeTn4RzSnKEN3wddRSSQFGv7",
  "key37": "48f3taQvTFjKVjvCceLQ9efnmJ3Dmt5Vqddn1dTdN9wQhCkTqDAeC8ropFdGXp1asrHTn1SVC79FPAtXin1obMdd",
  "key38": "4fTiR4Sp46mQT2xEJHz1Zs6VCPXYooufuC4cpm9eJcDZtfoZg3SASSwZfqEnnaMHzfj7qwbrDA4Sj2Hnx4YcErd9",
  "key39": "2hKWtcKoFiQkDYe7tLULBTaFjc6XuG3UECMQ54n4xWoXiep29cGpWQRc33gcSzd2HsrSQ17ZvpXW7vtBReMF7fGi",
  "key40": "5nVqBQfRsJSVFHym7ajf4YLpCKCLiEKyazThPFUiXjr3KeGYaCAJJAYk6Bi9FaBcfSnq5gHf6za2Z9pqsCo3ifc3",
  "key41": "3rP3Se9QzhPHt3Jfj6F8kcyqkTXEuLXrnFHvAr2TAActHZHEwJdAc7DA891TfSJwoM8pfK7yT7GnuLcnZqGULUXz",
  "key42": "3jVGhdRyCZnwygZCVQxMKzdcRSAmvxxdv8QWUHi1jECdzQ8iuNMyNU4fmbjGLX1JR8yzRn8DMRuHWDDY4oaQabec",
  "key43": "3gFxSevV4NuJBBHmWi76Q1hCLyX1MRhi6BZV4wPJKWuPnWT88CV4c8MmawArhCp6oHP4rFjD4JhE3tAkFpJSPXiU",
  "key44": "Je71qMo7Zg6ys3cMta2ovfHuouUaemrpoUCHzZ4NsrBgUywDFcWH2m4AHtVmoYHL1CfKk66oGrL8p6qEnmBqQPf",
  "key45": "2VDnYVRwsW76FvFe656S6RZG59aAXqTW7Z9FE1UikhFzv2ZMG2EjNQb7GzRqfbeCUoyLJrJxPiEGf1QiTXZQu5bs"
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
