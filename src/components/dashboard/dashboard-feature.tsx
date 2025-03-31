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
    "4Z9cebdievExLiviE9D5eAu1VvCHST49Bw9fbdGYG2GJnCQnn6RAZobQiUFa1mFqwoybC9Lst81wKbeBzfFsXvBy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xV9YqF8kEtsL2rngt693xgZYBpM3dNis8yA4ow1DJ7cVSKDbbRiybgN9HDU6qSpUW7MqyjHBumLV8bXhpjhtTB9",
  "key1": "2MGBw3uTz96peRAfgXH5Hn3GjPEw4oSmUyWusjbEHzPEzrm2jgMfBzLK6sBLScnzHMXJ2orwttMvZ9hQsosqg25w",
  "key2": "3Jz86WHNUa8owej8DcHr2pPQiLDwP9QmJLTnCS51puXBjjRS9tmWSBtDYxUxdCoL4V4yFC53JZVvaWNR9yTfdZuJ",
  "key3": "2pRkVb2eKzUbyed78ESxa8XzuG21XPzz2gysD4QHu1xpqP7LmEq1asgQGkTMwSctM3XuNDtq5SuJLhpbreNQ7r4Q",
  "key4": "4PwJ63cE6FzKpuzAYtitJMFZAsQ8MRtxhCBLGvLNnHDqhY9Sin6QKQiqiCVeYueHmKY2wxJCPrAxuHruU4eYfQPj",
  "key5": "2HexR6hvpdpYWkBfSDjx7pTAyturJMLV4Z91LDCR8dnnH6Av9Bb1vCYpwj5oLySaWWYnLZA7Wsc3cw724vL8xZQq",
  "key6": "2qa6pYE3SegQzuaZqarCQczr9MEHS1KJC45C2iZnUzM28v2o1VGVJbMwiP13JgF4A1Z1VVR4YnSrp5jccgpgGFkB",
  "key7": "2jibKD4uH7yobxZxDLNpX66ELBRSvtYJ5TRaBgjPVUpCv7dEE7kVSPthzRhyMET52En23tU7WKyBpmJJAf8SQYEk",
  "key8": "3bcyXucoPZ7A17TNj6MvUz8rvyHjtb4K9KvLdbpzKHJUZwDULB4tpwJGrH9i1sLixZFfjcpCvCHV715Khh1aAKX3",
  "key9": "5G3tDjXNbnVJVyX4pcrPWpGvKaHAF8A8A2YnaWeHs1q5mmDXLQQUd3DdcaAju7asFJ9AsqtWW16b3DBw5MzdfEyt",
  "key10": "3PbgvBkwG1ZnsLdK6kXVatanXVZeQUYkRZ5kauqeZs6dtsUSvxGRndkMadqn2pvUBwsLN6gm3TKUB4u2vYKuJqdc",
  "key11": "CobMf81v1waSjGu6zonkiK7sMRMuzY6joL4PjPNmyVmdDANrKKJvZMY9VvfVp2yrAfMd3xfUDrxhLndWzAVRxvN",
  "key12": "3kbPrdBio5cVQ9nGq8owTQGWUdiuShgguCyUrhriyswNbHKFZiYV6uWQM4hXHG5u9ZpZjcu38ptcgZ8FbueXAi8P",
  "key13": "4vK5VuFTdEiVaXY7tc6PfUH4igfM2MrzEyNHerz1rEJBHkcaxR69RtHqmUXHKsYr9SrvaF34FB2oWNUKcTR8aWvo",
  "key14": "v9CTYFBXsdaaSKpjrwmvN2nho9Grqjc9ZG7QrY7RAgysBBqmPUH9cGfVtLeUUQ9Z8ji5DTpJekbz4wEb8D7Z2NF",
  "key15": "4ELtno16gA3KiVB3AwzrrVNxLjhw7qunX6EZvwgBcoaRANiw74Csw5ag4oXSfF23tKFYMvxe1TiPNZ4gSFdcXH9b",
  "key16": "3kZDEiDZyQjZczDPHAM1vNL2RFjgVku48hAMxWQD7NjGZBFtod62QdqpDYRj9HmouRLeSYFvK8KLaWU3U5U7V6ZN",
  "key17": "4qVWEcRcmt4xnF9csXpMm6sdDAd8vnjwhy2rvsWEZqZuYMuNRoGVSG4ipeXWPaw9f9hkwc3afzY67vv5LDkBio9o",
  "key18": "43t3NMY6QDT8QiqGaRbsBeLgcFDrjJPWYAsSP8sLRjuyYRr3NurGxRtXPHNfUnwEuWGXCEhi5uGZVSVdfKnD45Jb",
  "key19": "B2M2rai4xgHzr1LntoSaMrdsKt47irRQSAerHnXLQr4jQTzkc4Wr2KTki7YX4dkdVwafvY3a6UpfjRjUi234VDQ",
  "key20": "5BnMzLA7s8KB7TMxtFTvteN1AUim5kjXWwbEyBEm7oesMRaSaHLHfDCng6R9A5WxTnht9UG1ssgp7trNs6d8nZ2f",
  "key21": "3LZbof5uR4FkQTbKgPQ6YW27XxS7kws3pQNzpnLx1t959SjcEE8AWcWfqw7YiFhQDy2ZK28asWj2qdKW7jp5H4FS",
  "key22": "2EzKLrc7qTWs3HWT6YsWhnwzL2oxXccPk2E89i5CCKn3ChSjDofUHEYw9h5LLbsNcMUMpJhjbPh3WsiMBhUg7uuQ",
  "key23": "2Qp2gRxkcxvVJG35eC77miQ5zJe4Df5Y22QkJ7kWdjESSJ7DJFgF5HVSrXohbhRuPgLkrGyWgnbJxFG4uvkDwRMF",
  "key24": "4MxJFe4W2hqhkvf8SHEnZA911CMzSVxHG3KgCWwygUudkajoJwbz28PrDke7eCKt2mQH8PvCzT3KaqHnk5DW2euY",
  "key25": "mZvxbS6egD5LPZdhcex5G848WagABrfJn2d4rVBsygwMr7ktt7XeVkx2GJiDFe69E2CEwReREj7j8ShGrinmN4K",
  "key26": "35AcED5WAjfEAkKTvbD3aZcHshDoyhzcx6guYDLFtLRdziTBqw4AFUJydyNqdCKctYYbuSHou63MwzR49z2rZLVy",
  "key27": "2zmgBdJkw3EqRW2gRqsM4Hh6X9kwWcQY8ZVJtAU9qjE76adU75FDzQ48tiVDRobcxV5kKC5xR7D4G8qgFDRz3YNx",
  "key28": "oMUNYxsu6XLEURBuwdi4TiyfkkmswLBpMaaitzrmpPtzaWntdcwatByb7jTget3xpx9Z3CrqDnR3TXEoic5MEMV",
  "key29": "5EgnzmvjDq1LY53hgfmzitcZsH6Z5pwmgq2GS18eWPCpfWPHfrRfQSGKf14x841Y4LVa8nwY8cDBren8oAyNsznr",
  "key30": "5pEjvCnod1oDoA33nCeG2m68gAjugSPfRBn8ASo7YnHhsqvekQ5o3ZtW7Xb6YELvhfoBpvNMwrEyuQ1cww69MX5E",
  "key31": "2yUBrvATardUpw2fBdyqZxSguxNEgVYF8GWZc8FW6j2MdxzyYvkPfzKXgKvMeq9AF88frTkFsP9bjAYAytHGUfFL",
  "key32": "2LU9T4bLBuJLU5hk3sN6J953Chrf1GgcAiYT5EX2aivBefkpxnvjLH3C3Pe6DfCch2VeYerynWScweZV7DmTLQ86",
  "key33": "4n3x75ErR5fSi8gXvLkBhjT1C83kZxVvRxQFQLKZv1TSabA1NkkSWH7mgzPXXbknqyHMwS15LDR6ikguHJxT4hzC",
  "key34": "3hDb6VazReTJPCqYGkvJhphYvPkqDR8n6kmYVhZvLxLHE6CgaJrVRUb8jC6mWWrKwNXfzA68x6rwAEJYbiQiFS3p",
  "key35": "3mTVgEG4zJCGMe8moMNhHMNX85iDjVEw7Xzi8nQ1oTMkGUuBvFSBuqEPSXm72whAuiaJpnMTTzLsQSKFYVb2sbEn",
  "key36": "4cRmE27so7vv4pJh9MeyrdYuCYtW1k1imiBPRT967zvTVmG284yPVGq9hzxbAVxsCtZupaCD6jZWAsBP3XWpi9t",
  "key37": "Jis3KtiP3K7sMkCkVGWGZUbNYoFy28AjnDANBhYGPBR9R7GzqGs4vSYuhmj6jKPSNRLwMz3YfZPNBfFoUPfBatK",
  "key38": "2kzA4Q4UJyr5wbZUiaV7cJF6X1X5fVLDE2jFUm4bZGaKc2t5FitzeaToTjnqg6J3tCmLAux1u9jcWC32x397wah3",
  "key39": "8EDbvPw3Gx9rrhhvArHfziFuq1QpSDYubLwN3RvMQB8Y6cMCgro7vRAk78hxTS6RWqdiUAdNzU1zdanm32rCaW4",
  "key40": "e6SwzBqjsYSBNmkD9M98sbQGAWev7JLTJtfoEj4e783L1cEn97F1DtkKo7GFZhWFcQeAHv67tWWHxr9gyhrTpnB",
  "key41": "5BRVciJLeBiAC3ouNSXmSjYKznqi7vydSSqEUQZrHTZ91d41LqBoMtQuz5yfG8B9sZJpQeYz1CWa1o9dsoysicC1",
  "key42": "54GWdBidrkkFfEF9kNa6oKHemJPBLveXJjvDXvr25nfP4ZvgVWn4BpbEy8KgPrHqjVVmekM3Y2vjgtHHr8YnWUq2",
  "key43": "4TCmWngTgiV84vZWvyJvdfWkwUKuLCx7ujnEvzX77tEPhPKDm9BLYyRvNR1e1k6sXzLqaaMLqSs2FAnL2HzchBL"
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
