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
    "3B5JSpMarCmKYtjcLtN1uKrYN1TSGjQvZstbXD9PewvBiiuTEo2NzzfARqWkKG6iJbJEeABXSVtaozpiX65qKw7D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vK4qRWknipkzyN3f2KABYKZu7wUgjpfsZ3LVkNuha76tdjwxhLpSfVpDebcB99izW8WaEHtMDE8L4NDhhsxwGYa",
  "key1": "4cKa656nPqAdu8rYHf6faY9yXx9ocLUaFykAYfob9yMDa4X7m3NqN2LhNxia2GhhByDWRacsfXVj4DMUvS3iDAY7",
  "key2": "3iiAutrvMcLLfbRiRCBSXvJSF4shLMV97uGD379x563tN1NnuGEiqfCPpmiSQbyndjNeckPzUohn6TPi32tWBtjj",
  "key3": "2p7gwXEz3W7WJ1NJXznyM4TfsUNWsny4hS4amT2y19g8PnfLAeh4p5m7qxUH1rvzy2yfA5M66yVYYiYHFwNRWFT4",
  "key4": "2egrv78AGjM4RJUHBiYjUzLCL6FoBnQ1fEvsGjQCLotZxqBfRh77YjSFAcSjkjGDK6jbA1gqYGKsPrDRAf55m4T3",
  "key5": "4DKecph3Jr86Xq6JpQmSNtZvCks9QzVC9awmsdzph2JpY3Cv2G4z97SbJg8ttsd2JSyYZaz2zDcXX45Je6VXrPY2",
  "key6": "676jQZY4jDLyjCUudnTPrgpBwTSnEPZo7PQD5eCEd2X2h7rwRjZsd91Aw3BtFyEKHo9nbaM88KhNwU5mvBoW67xZ",
  "key7": "2RaHqURxdx7dzmoRA4ucML2bcJ3VhHHFbT8vX1Y7KisQKMcoNuSzTD4rtsSjJnC7rbMRJDz2kXKYmUZ6ig13Kgh4",
  "key8": "56Xk2spCqtV9SakuHjogedmverSTvEYaZsn8TTZ6o8eGucy1NTJBLzejvi7q5gbjpJWFT4tuaSMfrH1DRgiugBy6",
  "key9": "X49RrcMPQEjc2org5CbL2u92TAYf8CeFmbXcYUb4iG8HW4WVpxqJRPcoGCoju5VkoS8Xj1yeFyXL8BRFtUQAgKc",
  "key10": "3JH96LrQAz4mo9FjKpM6pvmo4ykJzdSwrrHZ21ssCb4fZ5ByGu1xx1vghmwPn7AtyPJ7PK33iAS23MhSwvYeoEqn",
  "key11": "2iQ6xWcj826x3hKAZ3sxNdfyL3cou9nc21rpeUiC3k7F4MoafL4oJnvjb4YodtBR2g1boAidsqnAbgyi5BWphY7U",
  "key12": "54LFi4JqrrdrYGwgD6BEnKB3eeTz7xana1BfXtdSQQSEYtyfX2M56wfPypKGDTE7wcchhfe1HnyLkDsDBVX8cSmN",
  "key13": "T1zG3vwqLpJe4CCBA55jg1wF39Qj8SMiR2Q8wB496cZfSANoRyn2mp6JpXZqxtnD4fsXfYXMei25LTz9ASL9PLF",
  "key14": "4HKRxip3Rt14NnwpvvUrNKohkSK989BdyES72ameXPfZcykdMNfpcaH2CUUJWhu8e4eeM1wcidbvLD3UXzQwJ9Dp",
  "key15": "2jGfB4aeKhNx1jGGKDTgqCHcVHTiXT84zA8KvuGuhrP5jtWs7fSwiiLHixNYmTGahU2Mx1pVKJqY9uJJ4qZrwtp5",
  "key16": "21x6qSKcG3UcmXP4zbAGto41oB6rM3cnupV73zWazRKJvgxgJV1D9qhDGX4pEL6uZAsE7h7q1HShHmRwwi6GZKzZ",
  "key17": "3hVQEhjMgWhB1A9yhjK7NecabE58AYvFjqpq68g5SGEfz9EVuKufht5njqrUzjcBiqXmsPw7zHD9qDLzUumAeHYk",
  "key18": "4ZkwN9SGnseYTNkQVqwNAnhYaHqxSViHxJZLifpRenoeyzAJS1cYCUgecLa52TGV5d8Pbo8ycjZuhrbH2Tu4mVQn",
  "key19": "3kENNCdBXhjLTyZPLZpQDmRNUE4wpZJkDbXdgkbc6AGeuMg69pnmuZXodtZprQ2kJ2YRZUbcPH2DJd5Phh42jUiw",
  "key20": "2pJimnWpvgch9Gs1nv9dUMerzjdQcrjdQkgXS9a8eftLvW8pLGXYFbrSziEcE4FRvuU4WzXLH32CBMYKwb8YyKcN",
  "key21": "ubXaYrrgdyvngtRTRRnhhS2wiLNpmT6QNLJK6qmEPBjCJxkzWxjwhs3iqANQ4WZLCGBQuKhsToF2kDrChd31mni",
  "key22": "5qRyeuPSwSfsYoyva6dcPiDLaUokh75SsyCBFcTwvzfjMd5vfW8XeD2zwdRUKPNWMfHtahKsjoLXGsVWN1un37fx",
  "key23": "35yfdCJnViRffkgK5t428F2WDu9EHQnGphYpon1fCETZkyg8ecJBA9HfYvbqBwbNF92G7mYW2th8W9CovTMpRZAJ",
  "key24": "2ysoEik2Nrr3az2aihPu7WDvD6VNNU7ZXgkPhLYkexgAzNXSuvThaXG2bPq632mJdyneqJu6dqH4ip6Ty67UxrEN",
  "key25": "5QQG5FQY7ogq7Nj72hP35UGCcTjRjamCY3YCTuKDPuRXUBjmdSFBWMuvrWnni29dy4AGWBQnZasLBsVtkg8L6smR",
  "key26": "2kTL8pbUWEZEmxsetDVCwgCvwi8RrHWUE7gG5f292aHkY8ifRMuSz2n5HzXmmeNFZ3pQUyn5nMVodNYianzLuUTy",
  "key27": "5JakpDE5dQLvnXmHgvr1jbS1JdHed5PYmFhzacoqTK3jb3Kgo1DpfYfjdnVKFuzreFwLLMR7o9iDTTL3dmVUGqQm",
  "key28": "4hNNd1LDWGuJs9dqfBthYEv6kk4C3SreVVWhARqYwWLdzcZSACz1NQruzVvvy6njmKfTqnhN6GryF7pp6DzAa2r2",
  "key29": "4fcqwyL6efVV7CGC2DWcjM46sUGjqFVJPqFh6SqQKJgqP9QLHw7VR4qUmCr5VxUNcprfgFCXor3pJVTqi1KiurF5",
  "key30": "3iGucyGPD9vGDAXPQRn8Pt75USEZtbwptJYnhtHrmBEEhYgecWqF8HJmxCwKMVoXXKcyizHbc21JePq8Uugcp5HM",
  "key31": "34uGU9ckgzuN7Cf6qcKYYhV1dvgkooKwt8yio45X2cjKHwN5Jipq4sQyfJQhMgrpSEMgXn7XEbQpxVmJ2s7Kd3jk",
  "key32": "5gD7GRVPzXgEHTwueaTkAUVz1GtfCHzbA9QVJaLtU3ZqLn26hdiMch1WtQCBpn5MBtst1pu5oUjGdePoc3Y19oxd",
  "key33": "wmkim2a3eogaSJNYXZ3TXKD3ZXrvqgJyvqSQxzYNrkWkxdzAgUAJMZbp1V5j9mVyftPEVc5NLDjdnfCBamrbxgf",
  "key34": "56AWmADAvnwcQyYdz9xmML6f4DEYQsDfMBCTufMvZDqhzjJDo3nUbd1GaaJ9wqgUdFD94E4b9TijQtqAR8oCYp9M",
  "key35": "5nggnNGVCgqQEWAwK4w1zWfuKoVwwbLqh9v7FUr6g1oLt1o1SKxBBEQDZDorbGaJPNBca7yk5Jy2JcTec5UZhMqb",
  "key36": "37RbKoFsrpDQUtoJ5yjBz2UpAbJVpBni2iiAdWBmpBxH6jy9cBEqTpVTtqfMgiBVt2YiVLxJS5CxiiVAS91UcaRP",
  "key37": "5hH9ykfrJqLy5t7y5kEQasZosk682d1RPwdMSLMHsXGiXzHgoQ2wT6L73DiqVMrhPfHsT5QysD6NdEceqTyC8dJN",
  "key38": "mJfYrJTvHgJyLZdJ7WPu8ziQZCyCJW7nNabRGoGaMeChezBMxhgAjzhSo76nQGTXCq9vJxn9QQfnzFju9zcUkED"
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
