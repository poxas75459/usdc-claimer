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
    "26LhQ1f4bzz2ZoCu8Soez3Z23HqFW5NDqDRApK2ZfZXrnXoNndnPZAjBvv5BN7jjvpCDep9nLoU4HLiV87Won2ku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M85JSNMdotbwayXrEVs1ZQKgd8yg8FbmWtBYetQYqu9cSJYJRSedk5XY5iF4BbS2AFgMyNdqYYCtfQCvRTwqh2o",
  "key1": "66iokLCKRbB5tQE6wJJgAXHwSUeevjN7L8VKh5nBq7zpbsUSapN7nsnun9JBh1xZVs39MZZoquSWDkNFSHqkJqui",
  "key2": "35LEh59NMLXJUqLnNEY8Jg7usJtwCTbrZ8DDdAD5qZgXhCspPbytCo8Rxa2YjNvQEdzg8NQucmECaJkGex3nz8t6",
  "key3": "9EMEcrQ7v1q4VDVAYoA1FqyhWjjJfR8CNcKBqzqUBYa3AVCCGraSiCrvpFnV8D7bveqgKSNtMbtJzRXPka6APDA",
  "key4": "5Khyi2bjGwkyQ8WbrdaBnuugb92Zz1z5EdgARPmWJrp5ZLbaSEoPhiY8cPBbJ9WQ3qbKAskSbA7gW2bfR5qfrcsk",
  "key5": "2WqwR5snDfKCP9oDw4C8ma72tuQS3zpfUDaYEY2TZ9mYwJuAS9UsjL95Ewaz4Dvm2edjTFMjp6bvfSxyKtHr1FVh",
  "key6": "66p36W7pUAZXxEXoENTPdQKozi2o77FrjJEn7bEh9uRZpnxgQEjX8n114YGNNoadnimF4rph8cekxDVrRU2Y3aju",
  "key7": "43j5EFZwHfr9VmbvDfLjtZWTJRwR8FELq7FnSqqPyqaovqzQ8oUpsjuARu57vuLEDGsmCmkB3iqNNF2t7acCh2Pa",
  "key8": "4XbqRP99aQpsRsBx8BtZKC4RwNshAkWkAsamkHWBczkac7Z7WiN5ZegX2YXG3vCmLHmgRC3v5JKetb2yjy46wCPV",
  "key9": "4iBJpZZYNKx1QzYJ5bz6UBqbbcQmzjAnPLfGeEr3EZVM2Agg9wjk2SgnxbfVkA5ataGFGK5Z1YwnEd4iAoD9o8p4",
  "key10": "csxQiFaMXgyBLgtZ1madRCKsGxztihmLFz6sD3ck92peaxVinEqRyzy8bMqDR1W1MMFhvUH2osyumUBCaJMxqga",
  "key11": "4yS5NhCybkJL9UvhU82VqqXfQ2U7nccbCRdeXFgYhiQRD3F77TRHjighGXJgQr9oEtudEKd1oWQhnfkL722gdqu8",
  "key12": "4RhvsJAnc5iMV6DEqdTAAfcg3pLJKBMWX3iEjqyR7rm2wAcSVTaEZpNhawCcJESNHxXBn1sV8KhSF6df9QzdTYr3",
  "key13": "4Xe67fKyGg5hK4XaeW9dy2HeESsCgEZVuFszhgHMKEcRShAJYY8FAxJjzL2CJ3MmPkDrwXChD77HbG3ef2hHYXfc",
  "key14": "2nLiyBhY8ZvzHXAtmc9KFTUb75Yg42m7x1YyTWpmWwPWg32B7ZCLp98tW7qfGxUnwTPRZ5y63XmyYxEdVeuh12Fd",
  "key15": "Jm44tLpoCS5mVEjBiB6ioHzVkevqWPTfJLz272zGruHSPeoNnF8MeEx12WQaQgwq5YhcsH76pqRY1QZK6pXETpp",
  "key16": "7qS3Dny5UsvvEKXnjh6d55qvjhLeZmXLJBVmZXXyjkGN4J797ptPAuY6bT1S38pTfY3d6Yuu5ggHzRwUs6wBWf9",
  "key17": "2MqEXJijsFHZex5jekRnFGQf721662GYhfYbKxnKvyXE2r4ejPt8c1QvToW4niqTq5dw49wwsMEMoXBStaHtn175",
  "key18": "qJVUhAC5Zy7oZdBdph4sXpXjSTk1KiznUkZPM1HZ69sPzGQ2yRswzkCFeNoJkZPJCeRSGiG9omfFdigH52SFTqR",
  "key19": "5f54cHwW3EJQSgwt2ZMBZuM2LaKohbxYWr3JvK27agj657GbfbPGmdFaAjHjwRe8xy5MHu7c94jtabrZ5q9VU1Wg",
  "key20": "5xsiGJAYYWkejTPz3ueioBuCpztfkcgYek1gY1Ch44sPR3jvXzrhz2khx9HPDVdhJQ5KZW5k2K4FDnFCKNypyrsJ",
  "key21": "5n2pCftBDJPmMfVanM9WoD3j328yJPfVV6GwDgZmeAGvg2YeWnTa6a98cbC7nZbXDLPs6P7QaxrsaHWTBLpr82mL",
  "key22": "126JywU4mfNz9QA34kEstXrzaFScTS6Fpmm3kw3FWQijNwF26yEiWtQiDG6PtahBvtygn6QcsWxxX1HyRQ4344z5",
  "key23": "56BoawdqmW86aT7axR7nm5m3MzNKjbqxuguSRmEZLZ522tctQSSzYaC6gg885FowpTeeJwSKtuFwQ9bZsjin13sD",
  "key24": "2HjH2Auzj9UQLg1eFhBndks2hLbZwDKLkTJocT5tmCJ7Njt44djkWEfNqja2EQQ1bvS2Yg2eYweCGempMwHKw7nh",
  "key25": "46n4MxZAmt3M4VqtjALykTAgt4spQoBfX8M9Bj7d27D1jyhyuMswW8HNfdd23BV6xD6QxWPvL6BRzHA4oMYrSCuP",
  "key26": "523UCBJdsuW6RigM8U1Nq9hvk8bcG6sQVViwzEtC8WK1YkvR1hj9zWTwJeToX7egH3LvaTHRt4xFGToZqRHL7mLF",
  "key27": "5TR59o424BJQJW8D8zGpZaK2zSLPCuLZwTmub2SagEWr6hLLf4bZJ1tnvBgZJhthgUHPrwR4zjL7ZcxAJtEbKje2",
  "key28": "3AvrgXnFSsThTFLpucFzLnXqQbXdN6qv6CqtLA9fwKHuk4Ro8zvc1ra4ioPL4Fryp6Nwnm7hhVxjojqYkUg9FamK",
  "key29": "31J2UoLZc4sLDZyEAjYL8cR7NLtkRSqDpKfkRSePnXAwxBbWyrBf63gjSgejL4qj6X19Sv5TJ8YF92gxt7TXVvm7",
  "key30": "5pYTwAN21J6WSsaQQaHQ5PLNUuVkdtwhYUVRZCYUKfsL9wjyhw8uPEdZyvHdjEedSk4T8vSQ9LZcHPCY6u7rQoUi",
  "key31": "4ywNie5j2PoNNiM8pmmn5TutBhkRgQTLdcSJdjkpG4dTjQsa1ZWywA7iHy77HVxpcwi2MNFhzLvJGXc8U86mk9FY",
  "key32": "ZoTDTJKvRC94Evu3pYNuwnDaD8xoDTTFFdeXSvxkPrHg6ghCZakyB4snKqod3yLHnHGuBvC61RYLtPPQfCiVY8p",
  "key33": "wQS1vFEfvS1ngWYh2UhYBomg7ngZv27kucqR3xRauUAaH6fmMDYBYsmoafd1KgHdpVPknq1HC5XPtr84WrRwf4u",
  "key34": "t7WkVbfwKvoikn2nQ9C7U4rhsQUfuhXjYzHZYJARNymXSg1qNuiea48TEYoFZdxjWp6CZVvhXXXKXFg1nAyBfXS",
  "key35": "33EUuhWm4iSngKU7BtHRKwjU1JpvFCAYsbGkJuDZjkCmM4UWJ1RQXnHvx5UBBMLcAQTwTEdi9EqGx39YAfmngm4R",
  "key36": "3tsyd3gQ3fkY85wwMvPC1gcBvEA3cFbAdgo5dkkGdxQfzD3R7YFnVnJKLVQ9NrzYFYby4ecrPweFX8DPRmgnoVwq",
  "key37": "2kw4XdKFykhpzpurHLazTD9axKoyZYxaPVieFuXB3oa37bfLbRK7mo8c4e4bvZfANksKgWBQ6hwYbpiwf86N5vnn"
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
