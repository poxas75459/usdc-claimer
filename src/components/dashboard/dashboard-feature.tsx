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
    "3nrSJ8VBdYYSHw3dTJSmMZQqLkmuo2RBkdwFbgovHoFNdh26GvDPnzC2m862mBkZ4qMfgDhwinhy5L7upXJ7vPTb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "588eY8kGYPirK874XtaxGaXD2BUiqZeL6PvzAodZrHCMxZxnh34EnrVM8374Th9GSdhQyrg9G3v4KbGtresJZ48R",
  "key1": "3SGH9i9AhtHG9Tbzn4AZHhhZVEzMBT7B7KTZwRGXkCJC4D1irUJUM5N2zECzXdQU9B2Hq6kwVJ9zrN5Gfhx96VT5",
  "key2": "4Asknygsg5dJu9uy8BcBtyhsHhHGEbizrzNXyP1cxipgkeBC9e9HkETFRDpbWuDft13qrQj5MdNdtqu85PNim52v",
  "key3": "29kA6Y5EeTCY4vVq5UEBTAUyvXVb731YwsphKJvPbnAwkdBnuqerQRAaAJ63sC7Xya87bsxmi3eoXmzPhWmERwEM",
  "key4": "5ZQUjBWmu8PawJuoQ1pzh9Dy3JrRYAimpDQ7wprzRXwxuahDuG7dBkkahYYT7PgWywjoAMgcBbcNNX98qUci4mTT",
  "key5": "5hvuKmvsk4ghJzDfn67SC53G576GGaF26sjodKCAy2cCy2ncig9oKjV15D4vRQzBtNkpwC2oq4ciJy9WquvT5hy2",
  "key6": "47B56LrTE4ivZUSphvH8bcWV8pyHghAPdAHQ5nygwhQ7WcJBEM5ALb5NHGU4ELaY9YJjqhakz4iSXjz4EJwDcVSY",
  "key7": "2X9NpxWq5AGME6KK6VZvxtJfa58j8CvVmTaJdFzr5pczjiv7yMuq37uyLKepYZku4oMYvd551P5JVnfMzvvwTidb",
  "key8": "5gWt1eGiSP4wwdNDq1vSroCg5HeQC47sUbxhEUdMfuhnsPYx3k6PknT9PwtMxJCqUoBuy9Fwwy3vAih6mbRu2XEp",
  "key9": "4qunUMHeFnXW85iwTDwsRGwKUsLQ11kGviuRcznKbJrAqf61Fvhz8J8Gat1BXSyhvjvqVVR3T9NPNjctQM1Bdqip",
  "key10": "21SmrhCEq7Ddro4A7qEGZD2oiStwyt15V1jqtJePkJKkpsxKRc6ZBmarS4t7ehzecHNHDcdLTyrqJqnTu1JiRvrf",
  "key11": "CFx66qEsWv52dUdrmiSt2pVnbkY5TKqbgT33AsdQA9bUjFvdLEC3sZghGnPi5dvCPpZiSfvHzZh7CLTRAGDX5cE",
  "key12": "39orYYHwN8dsJRYouZTvQjrS7Dv7qtck9XpEZXGygiZGMAYFmbaGceCWtq5cprVvXwRx6Y3bp9XKEHRavEHhNskQ",
  "key13": "45qDyQ7wT2s5jfGM9pqVPz3uzVToFKADW6SAtt4bwWoFbn6k6jYXy75h96smFoAThiUP8jH2EepV6g1nqCuhjjuZ",
  "key14": "2mNweLV67FtQZf5AujMoazhDbXPJ7piu71FhTvU32SBRXfXGwgesHsj7YUcyCDvmyJds48tmwLHU6ZLDhUViJzML",
  "key15": "5PFg2zXez5SZbXcnfc9LBaFcR41BZUfpD88VTBEm4Mfmd7Q4d1cKhihb8ycBNj6xkXtYUyM85gK23QY3gSYmJ3TN",
  "key16": "3oWs5VJX4gRjvmmS3Gr9nGUyzBoepzyv8yGvA7FDPzjKjEFEcB2Cic9bk1hK2RDpwdruF6G1ZwD6fqoXVpKuHmBW",
  "key17": "tFgDJWUeBbUZd8cujUQa1CJDPGtWEzVEM8iuHHTRmXZPqoHRu9mxomKDmvKEbCRqHqMYDdS2rZdzcPiQHhyHui1",
  "key18": "4xiVsTG3ZdRntxzvg6EQPkJUMQkS9mNzaWRmF2gojHuLgHnhWcT74kMM17eWp5ZLgHVu1su481c7Jv8CqKPbhFtD",
  "key19": "dgDEQzxVJGE36rvrQBQ9n7MiYGjhEosKeg4CdnFBQv4bZnhhwj9gXbGx49TpsWwmCT2SMX9uY1sA6x3hg294Kw1",
  "key20": "3eX2zDYTgtxRamQJmYv5XUCphnuSgA5W8CFmSq4k7hB5YKkMxoYd43R3cyKZYYAhbdNgiXYBCXvWEgWsead26Ds9",
  "key21": "28tcmTqkR8uXnQ5zuUTy6KpjWc6hdyTgibCZQJCDUY3EYR4tA7mme5sMs2nLr5F7vChh5DFJ41KD1hnp2Z7ebZLV",
  "key22": "3sXSosoQQjJuLyiHjmiaEFgLuCMq3vNUveSGbturPqcjSrpaLiruiNt6ssXsm3NY93iBZm7CiFG7kAA8w1GpQjgu",
  "key23": "4NqZqP7ac8FgXzqpeYM8ubSoy4nSAWPqHzLqmTQZWaYuyeyrfdBjWH3rLNpNzbeQdt49wJ6FiPvDvF8p2ejeCLat",
  "key24": "3Bn4MeJhqj6sw9JoL7N61C2euveyuFAv558kKYUe6tGsyhgQz2bgTV9NB6tCmArAJSnH5akDQCQ5nRCw7yG4BQcH",
  "key25": "36CxZBUPhf43uAni56WCaw6Refd3884khUiH4fKxgnRyQyfx1YRVNsz28EuHDihGTw7wVJ6renVAaaRpqbf76xjV",
  "key26": "2jE9ajY7dpyDkCzePxuJ5LKGv5RiefThbYwzBLFSBVT3d8wwr1rTssaGnYjXJfoVvy7XXXvfFdhFpz3CD1AcmUx",
  "key27": "2tHBnite8A6H2jhoXZiURbGiGyqw8gHF7iqff2Ci6yHft5gyZX6p2GshESDbLwkUxntRNW4XL4qTGgQo46c2uW8B",
  "key28": "5rjgRiUotEUCfNHHbL9uJxyFAEoRp9BXLS7VnTRbwtwpaUVXanNvcG86KUudJcxhRq81fY2vipQxZLwmyqoJQzK",
  "key29": "Rfd1Q8PswbHR3pi9uo71cDsoxrpTF25PSwGq4bHTZdVsEXdU3dXo5C4N8Tk6U1HA37zH77i3UKCduNLXQE81NVK",
  "key30": "u1HCxc6C2RVseJxmEgKLjAXjVHQp6e1UHUCVrUhdumpkJf8eSASnB8bL8t4CBjCN7X7T9rncsKRUmMsfpUSc6Jj",
  "key31": "3cqcdhSVSHtQkADq5wcfT6jKBmvEiDp4QU6HxQ6WR1KytMZv1maFRFuWhQtXFxjUzkqP9BFpExConXUeZx6WZAxf",
  "key32": "4fsUV92SheFRvMxM8zT58e896v8XWjJi72h1XeRaQdSve9zuNVZVVQRcM8SWV2oiz5Ej7Xb3ysVbJKDhC3HKPhcZ",
  "key33": "5YZYs5wP7PfPeSd3jmom7uvwP75dxCGXdqkAzfRVwWKJ6rfnTE1qUC1euZWH4Djbyi8QSmnve9w7wZLZt47TCSE6",
  "key34": "3BbUm5kfhg2emWxu6vcCpKwDoAqDfbbkd4usbJ95aX9nrqDDDsmpJ5qrHeYh1EZL2EacjG8osFUA5jrriTBj23j5",
  "key35": "4rdeYSDM8fzB16jBzuynkotDpY1ysEpoohg7vuSn2q4aRTMKkYv58Kav8dNmeqdFccpSdvnwjLoUmEE9t6gYxMnS",
  "key36": "2uu4CbCyqsvVPGyTqrWnvQPgYTwVyKZFQ5qgzgTZjrdouF4Jh81mSYXNvVghUbuFVdMzLyBuybN8GdMdpiYtiavf",
  "key37": "4stBh7YKo229TCkjh8NFqiPaNJydepLe9HHNLi3f7oJMkNSfFBW11Epj1ptyPTv9g1Hqp4M78rkExM4ST781mbeg",
  "key38": "44ciLZzNBaPnh9xZDBqu8EnDXgxYkfdR4DasJ1Zhrtpw15m8bWSzjGnrdqBwqC6fZfMZEE8rRcqu78Dj6ZeZ7dfh",
  "key39": "5BLpdfLo5CSdvc9gQSD9JcweMdeUkXioERkRBQ6vxat6CS6e24PZ6m2U6F3s3jcKuYSXYoqjQGr8NM2pnB6udXMb",
  "key40": "tRJjAqBVf9kXEmpSgQ4BRgN4jrBU624AUsWycvdfdmduuRaPfYeAN3LcfUEdYeDABmSSnFtuv42ivJaCF1FRxMs",
  "key41": "26QAiGhQj5Qsson6Nd4VeuNwoTopqN48ENAMY94duaXeG1nETarh3diFqpHjyBUJrK9cpdziip2VQnYuTUN8TsZc",
  "key42": "3zVhPYJmeUmcdXRoi8PV6HjornAmF7T7JjU34KaKt6XLNYCG16odTmRijkrpQAXrMsDTx8MtFiXohT6yQod9NZbs",
  "key43": "572oed41GbNjeYqCwHVZu9NtBMs8WopKVMpLvpdFxyxqsydVRC5aogWEvNQfpAc5R8ybydWhsTM7WnWL6FfUto4w",
  "key44": "5R4GYMxjkGK7xo9zncrxjMgYz6Hksx5nisYtp6X8DqYAHdkNFLKpLN3JeyFYVzErA5dCPuZJvPvRUdULTdYM6Fgc"
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
