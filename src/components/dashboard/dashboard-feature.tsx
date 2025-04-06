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
    "33a5QwmQnHDqhB42xmkmLqt1mL9vmcaWQwX3xCBeozcSAS2Wudfq8TMu4bCwNS1nn2JCUoYAeNrNw2K8EbW4EzsW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34pe7m3wp28KFixjXqKEXboeBtJoCFWDnsRKV38zx1Q1953pbDpsp9x8sJobBT3crRmUM1gEEbCkGvoTX8J8mHR1",
  "key1": "5coszZdwqvZnwsSu9BLn9fsQadAbfbpdwQhBQA5XYtCPpzRUfidgVMv1aiwNnfwFPTEG2pYHrz2rAQR2es3Zmjc5",
  "key2": "57rDxiGN3jdPzTa5Upc7HgMXcGEtpFRKgsvNjnUMGUQjr1jf3PQQo8Ag919VNEpd98et9WTSZtrp1DbyzwAepVs8",
  "key3": "5hN5PHzLJR8pq4YC4c92u86h5yStAf6kznUHdT7sY1DsVHeKqrg9eNiX8Wg7mRM5W5YTJUYknCt4MAZ6VCxWTwvB",
  "key4": "5AjTW2mynBUFSd2RdtGx71frNEfkThPYaxYBGQrFNUfVmKiKrEsDYw4NindrWEm1ZPnCkHNFaccA6PS521GZrTU6",
  "key5": "2jg1QsyGu4wScvynNKZViwz1T4dCqViHZQbc2831WEd16fbhrhP3BqNuKEyMGeZcxqjf4nC1afjj8vvMc7z1mUJd",
  "key6": "66yp2QTA4Z3KPSYY7d7bKxsRUn8WgMcKT9DTKQ184euTMh9rYSXUzFc5GkWnA2sinxpFXiQuxYVEhMhbaphBea7k",
  "key7": "yV6dXVZhCfFKShejSj6t8JTLtF8Zyu1WTGiKUiFd2p2AvYTD5rzBwpHsC8iyjd9MP8yWX9C1sYYcWn9dKUNF6Kb",
  "key8": "2ab5qeL6KmfUSYuWeSjwLewmTHRZxLSVcMXZzGe4tQdg8pHrkiMzLAPkwDmAwafog5yTvdcD7jHe1hcwEQXEYou6",
  "key9": "25jxfwwq7hYT9oNipTewi45zqUvP1HZa3oG8bYgAacmtzHXbbMNeuTG3vG8BrrboLLQctZtYW48cVMgvjVcE652Q",
  "key10": "3EqYCzUQaEAwx45oUY6DHTv7imGFx4CTmNj9ECKq78pJdiz7ptVgYJXnd9LKawgvBGdPXBRse6NQZNi6DBwBeXvd",
  "key11": "gcTtBtgnCfpnx1cBXBdFoCzka5pDLevhxU8ZHok6tidAF48VRoKPPu2mBqA9jaLfCkV6TAZzpH8QaU65TMR4W4F",
  "key12": "37CtmjAzQJymYk5Xu4HXLRYEQ7GqzKHYS4ZfMxtpMw21VKRsRBLJ3LMMUfyiMTEbtKyCzRqntzNpnxTUvBH11hFz",
  "key13": "611nPz2myMubVTrQmC9wwE3pi2edNDUEuGtmfALjCv4yaW78NEywqNytFd2ogBiCy5DzKg6Esd2EcvGZEjhL5AFd",
  "key14": "2L1SZcb6HYkbYZJnur6i8F6rppziExNEsgMzcfLnhkET9TuHZyZFNLG1uhDQbkiEBM5rbynbgKxtEHcn9cgHn2P1",
  "key15": "3KGkZKUqTEJfTyKNSuQ9vxBxdXJdHQkeVLZRcdNTVWGkdUqWwGSn6a11aL5ixc1EwEPQNN3uHesGuuXf5cmTFizT",
  "key16": "4X5pYd2GCcUwTXBfMwsbtZFCL4QnAj5WmsPbiA2MoUHreDo8Gjh23NmhzgpY7W8N9ME2DJi5BUj2A4Ce94x4swp3",
  "key17": "2xKLj2ZQ4ZFENhtyJd3PSYUZmmXWVqXZRZvXXMPeDTDfRcXhKFNiEMUwHBZk1ukSRM4nRQTR3CoDNXF1o4b7JcgK",
  "key18": "4jiHhpr6Phzkrbq6pFF1LyzR3p4uvfRVNxFhGyQvErJgqiUvNDuugUAbnpWdpDfcBXn9UVoScdnY1XozbwLZbQUL",
  "key19": "4qpLQ2VouBRXeNRa3DiD9r5jZDpRjuXF1Pignvm4bBBGM9DfonNvh9B2pX27Bxxank28qSLn6Y3KKfX5r117dUAJ",
  "key20": "2KQBni9Uy2mZ42RQczhGwaDbMaq9C6s4kvbNWxCUELbALQaGUr85F2g8DdhbKE99WrcAEo9NVG7PMzdMPRt4Muor",
  "key21": "65ACM4mmmYwiyQqL8PtSrFYTfGtRpjtygpWonhgSW3TcaTd2nwqRGMPZJh1T3ZZ3hhKc38ienS4ndc2QTVJNiRYU",
  "key22": "4ztbL7ePWF3f3AMya4SMAobshFrDJ8tRhJ3ac4Pnm3XES6StBSn5mbbuRLfGRfuJBHAjScLobgrEhsqsSdBQtXJt",
  "key23": "rQuT7NF1E2AXY6M4qE8VQ4VZyMfRBbgpejiWcXmeiy61gEv4VxDMyVP3VLYMb3FdgVm3TtnfeLQgKjUdBY2dcQ7",
  "key24": "cmseL8mUBizUpjhHtLoUh2hAtkkZWJVhBxFFagdGE6m4DY5m5KRK4q2KGYcPsJPxmqsKK3UBeznad5XncaWSevT",
  "key25": "2YboApRp4FxAA8Kum6AkpvGDhYCUaiQ3gEbKtLRwTfYKNBd4bv2xdieLB3o5Gmkqq4EAiWBC9jJgT8L2FBssEVJu",
  "key26": "tPUbjcaxDQ5TCW6u3wgKHnuxTkP2KZrWRNBUHyi7YmQBUAfZZu9aGCw4xrtbUYCoG3mP3BGjUjCUBTcr3DjyvFi",
  "key27": "3nzbUgTPJqXmecTH4HbqKm5C4uSdBFYTxDC73eFQjuxSzt4B99ByahFASYpKn3GrsuHFxDpRbPmvnMUNEYaA9teP",
  "key28": "2WWayrscfriQSkswy9bKY8D6La4agv8t53XuoyfvncQF2gRBE93V2c73tiudRt3evph9pZKfaC38aumm6UgcVkDq",
  "key29": "56Kudcm8jNFK1TwtDxqbFCK4mRmqeakyV9gdP1BTCT1Pd7MEX8e2juSQaxVBwkpwDw7i4LVcNMDgR83CreQKPeXv",
  "key30": "2ZqCQFjS7NHtNAZbr5agP2jSYYCKWHqatQGKfGARFM1V7zwgY1pgicAcvi8DPZQsTGC5AWa6aE8LbvhDXt7bFPxB",
  "key31": "uHn2P2cFdbxEYteaxo3JfvrtXfMCnardhmFWthTQfponuodqJoAF3GPnHEpkoUKVusG8193dMT1jjkSqfnNj7nz",
  "key32": "5ncTqWJkLTF5czzA8kYXErrZtPt5WxUx3RXokuhQk9DUSXPEnMBAv4fzGQ5UWf5DjWae2RqorMaHkVYA1zyxFjxJ",
  "key33": "5zUZsPuLcDFxsLTvC8RR9ZAWKbgcnLmmRUvWyY1wBbmkFSoVR3GL4q4U9B4htEqqMe2C9Jnk1PV1Sp7bqWAQ9oEo",
  "key34": "5G6Xrjum84NP87LHGCbBE7zuu1ttfa2EWiz47P9E5d3186KQjt54SZtkVqpgqbJPQpZyajyUuUqpcFAbTTRNCugf",
  "key35": "3YjR8NiQZXDdtC5qUsDa6dbttkxvppKp94pXnie8x8b71xyAy9dJzVxuS3K7iadoH6N2DLLsiLkT3Y91k1ZmDASD",
  "key36": "5D1iTmfFEXHTXiJ8ZMsGHVCYLVz9DPM2nxWdozGihGzCnQQnm8VcaxNdJ5XSkDgjnYYob1BkjHJTvXgMFebfTWy4",
  "key37": "4G5GKMHrXhqLWHenrkrKF4Ay5RdZqFoYd3ux6n9SF7KCd41C349dgdDgHMWD8vvyi42dynFmuKGQijPjX4MaskUS",
  "key38": "2J9R5dWgQaobMagF63wGbhELAHnTahg1DYURHZRK1uBQeFEQ97uQh9Up9suLx2gnN3EgPBgkmhvGatn4nyVHHAZi",
  "key39": "5HhAuKtroGBqSCchtADdpS2CU8h76FJCtrcXkhQKZ5Uy12zHWkkUG3S6ApNuTgiTDW2MW5kDoSGXEURBt7t43J4n",
  "key40": "2iiPYg5EPzCAfiGwM7FqDwjKmG5vPi1c95UYVQu7YFi99kB1iAwRsQFjPm8oDj7Ta9Y59DuGnaLHRdm2e8fKhJd3",
  "key41": "foamEnhMTCVyMrizupBUDFLu94hv8qo5HzxSxkTk7GhLm7c4vjUoJBPdK91Kc575A93EjJqYA2Fivputv175Hhb",
  "key42": "67a2WbjqsPhmCYAwBZGBZsApod6uyHgfVctVLXrEiEihXAcQLMoxnHKd95piCVJ1uZWrAHZ9A5wM2VDaznFhthrz",
  "key43": "36SjzjtpVbo9Fa1XkwjFS2yg6kVCA5zB7Nj1HPfz34puSJcgTe2kUiGqyvhDJVMjid4PCZHGgqcYwWkU4fU6q3d2",
  "key44": "FEJ5BTuAwo4UJd6CCSCjaeRASrmnUQcEjdYkCA6KM5peNZUcpWTU9KaDYbdxMSr9Gnqmqex4nUmg5TmJF6VBqtm"
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
