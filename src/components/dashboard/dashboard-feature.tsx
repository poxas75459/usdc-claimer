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
    "5HHNpRJYfabKdyKzi61Sp567BLuxCmJnZX928shW4JtmVRhHncZnZ9PWiAzecomTFUfwqw2DzKk6yieqRb7nToNg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QZeMJHtThQvcn6j59c9o8rWT1odfbiv3mFWtf3z9DuLJToqSgNr88R331iTZam117N3JWmUu5kx37tEFQxhvEtU",
  "key1": "tRTiZdynbmcmrD5yPcUR9BqotV1C3drQM28oF3hQScFfRCVP8GgyD93fKp1NQGy3kLUtVtHjC4iLuVnEjJSAMeo",
  "key2": "31BspT4dm14K5wQmN9gaMjv1ABBigQH94fbUR96b6maHwhFthJ15zTZCg7Pmh9QeGq67pvpmx1HvsHhdk5aDydEw",
  "key3": "5SFX8G4JdG2bKz1vmgqdswpjzxKvmSFnPeRPA3ELmSGCfoJakiZjoy1d7p4FujLA2rD4Qe7FvWujghZ7rpqs1amV",
  "key4": "gaARMFgtzVfojFqSsduGWbG9q4GYeT7Ar3Qz39gk8nToPKsCmyaP7bGvAvPXcUxmMCwP6tj4Jc4ufVTgSj3gqAQ",
  "key5": "3w9EhrCb7GGSrrNRTg9TFL8BW5btnfVQkzRXVJfgqJ9H2K8Uwd1BsgfjfXUjbRL8RNV6d5s7buy7mGmx5E484qB3",
  "key6": "5VfojHyxB5mMkYnuDRMLdTYG9vNTvmjwyqbY294cWFJQ6krRGz3BpjdTBoPH8dRBnHSYWS3T16cbjb6WK4ffVG6K",
  "key7": "2t8oEYC5rhsFqZAjUZtKCUdK9yziotG1k4FxUj2udHUsUvGMCbLGsvGxHTndELjWFPbRG38jqaLXYt8VDPj6fbyL",
  "key8": "3kfFSLw3KNBqkeijWopF2K2Xnb8jvXKx4ZK9X7bd7CxucodRHwHZrzxe7Wn9A1gmgYmz6syAo7XRBPaoh7sacB7L",
  "key9": "2viYBbGe39kC8iRHsdx1ackDMPovgfYs9ghZD5Tg4cbPhPW2E3NfEYPosRp2THthxKNszxXoV9WpRJBgUo4hmkpQ",
  "key10": "3Yv7axnzK8i1p2rWBsh3ULsS2ZuAMM18C6p5r6AANQmcvNgZNVjcQ7gqcbg6756zkJQMEMsue4Pg1uPgetUccf4e",
  "key11": "2uv1jnMX9MeknmU93PRUYGZpqjHTGEAk64dQ6XqJemLeBjXVPPDnxjqMQQHn4cGhkUZyNkQTXgRtAvY7hKyFFzKh",
  "key12": "WiwLQVXcFqFBEw3k22WjBFhEweT7nLTshmXZ3Eu5eJiU3ePrbLwjuH2L1o5jsvRhXrL628YdjVvjQ2bKNPo57u4",
  "key13": "3ZVcErhxdUa8vGAPZELaBJdUySZrh2RFAh2DbjiG9xFWVKqZXbw2HBk2pYeXECgfVG3Qh51HZ3vp93Ln7has4otM",
  "key14": "4ToXiQsBRF4MhgE1jd4RabhojjjFefRPqbw4Dp51wpQJG4gBNpjtnQ6GgLVZnDnYzKmKENnwoSc6y1FdPzxGdEWo",
  "key15": "3C6ozT4LUugYaRCYctcaUnd2BFsgf1zNp8iMbs5StCP1ZTKHzrSJ4atKEcQxbis6z4GS7VyF4TL4WY4QfTp8Yh5h",
  "key16": "421xYQM6D6mMoxPeUvipgTguYrfndB8iAhGYB1wiWA9uJzaRzYNURXgCZgB5VEQxboXyqMzx4562YDBLBehreYEg",
  "key17": "4d2YFRUzmUComGK8M6oyow84U6V5XCLHzFpoLanua75vFQ6WLBU5srswFKBaFMbmkQ4PZUMPPx3YXHCYKfPEL6iQ",
  "key18": "45joUrsA7pD6DTmsH6Rsnrjfxm2cy3jdp8H3DeBih8pXfnJj8Fz3iMpPML8nThYRDksUuhTTz7Aho1b2Rx6VE9Vt",
  "key19": "5UVekMMSDtGBcNxknDk4ouvCHLDJDFq8yuQejdwcNdEFWpzsvXbAffGkMkGWwMUDyDYBwEmyXYDdNMNTLpp9UhMK",
  "key20": "4jFKxRmWpjUZkLvfc8cQJTcJk4AFtqmFFA7aDXuyJLtPHV7WtmpgmU3ieYvPGGgvXt9of6Xc5KpWCkHiNm5FVCdR",
  "key21": "59YxdZfHaGXaR23RWhWpW4GdpyJkaVidzbLoHYyhTf1ZG1FRwBTst2JELLJcbKYSb8juuHzJJj7uJBKCmewakCUa",
  "key22": "3CD45vZzEK2W2aXibDAG7gUzs1qvkaX2yUMCKLVjroWG8f86RFQtTRyj3ARjctMJfdLTEG5CJjyg6e1arep8QLKR",
  "key23": "3h1Vi3Cff9Qsottuqeh5n9pQdL3Z7DxdDkeanCnLfuHkDHihobdwC9nDxhtpYCVjtSw9Spegusuq3woi9KhiJzfF",
  "key24": "35joejVEaCimNz5S38C7V27JgYCFNXpe9L6qcYUVeeZufHrU2DVs7byyhrLZvTwBKGEbiUaHRqLqAEuUWNg6jDkM",
  "key25": "5mZGZAGDcZYEo4TH8UYKjegVTWd6UsLtfGFY5Eg1tV4GomqzuVVHgid4kNa4UDJ2fTzCjUY4siXYQwGZk4fKfYxE",
  "key26": "k5u973xSYktQ68EHJpMzLTBqykibqzZT3A2z8gdo6uQcSLbexo3MQDd5HSxhGh4d1Z739RaPqLWQh6tTwLtt6v7",
  "key27": "5qXBRNuAz221Q3c86NH86U6k794nnfcsbryRsafbMXaU4V1FR8H4vViwRiGC4pLVKT2a8vkfuG8i7PW173xJhbuL",
  "key28": "4KkX2a537is4rq9ij1heRpU54VJzZvVYqrmLLMhdbCNfy1S1dkgrm1hzbcvjMw4czG3KiXmDaSaroq7uNr1LxmVo",
  "key29": "3NJQ3twWNndRGHiCXQpuqDYXWiqnesrJADKjy54T8SKVPKiU5damVxyEjTa4MHMR5uTGwNon96cgz7sHsSVZW6dm",
  "key30": "5WbvifM77u1o98E9MQdhdhsWb5phejacJkypR5ccTvEsLHCyToQTCY98UfGts7Q2yuo1dX848cd6zK37GooCxUat",
  "key31": "3UAk6rnaxvU5d1chUam5V33LTz6KMQbRXY4CR4UKw8ZXrrsjdi62SRqSmoU17wX6H5szqzzkr9sKFxVrcitgCkpj",
  "key32": "31btPBwH91dXxBjqFQHNUy6ivULrjmc5EStksQtXjZBbDdcZbSD3D77ufKpRxSWpUfDgdnU2MVNbMfj5KWCkJGDf",
  "key33": "5xFQhCnZUvEYvuKQQ9ATGK8JyksZ1r32o8jsGYYX1KGpKc43FbmkHJ3cAgUrxg889vpvCi3r2yRKfJyGDLQJ19zh",
  "key34": "8jWYRDk4fzeYk2oKqiuCgk4rSkdMQtfeVwCDvgQXngJZUMxZv4B8MjQLNJFzC7worwbuVdiTHuneTtrghXVnsfT",
  "key35": "kRcJKjhSt5ofYboVFHz7oeu7qU6hPppVxVyPLVd2keJsTP1S7sfzc87oBBFU7cWmkN6sfY7sipQDroKNS5c3hj7",
  "key36": "5G66JQemZzLWYESvPpG2Y7NEnKkvHLmTjCbinFahp5kKn3vdU6sGFVvGq7CqDhMEizwHU7y9tR3Krr6Xmivf3T9D",
  "key37": "4TJuLLiAMWdCVFCBGJ5t6tnFxMeMJF99EC2h1onNrbug2NuRaBCBzzrgnCVBs3GD14K2STJw6RcDVK2TuzLT75Wz",
  "key38": "5T1KbyHpMJZSRGhUa7YnJMYcowT2MF5jsRNJ5SjWPFx9ew4vFwt2iQ7MSsy5dpiqbqfwJanRnFDf8NiteT54mMXC",
  "key39": "57Q7RMRT2cYcimeMnmpwbStatinGfK24RXvSwtYBBkwdBvbVfNWzD41g3dkq1m4FNCsG9b1tGrQC5M5NvmdKge3C",
  "key40": "igS6yMzoZ1cNw81kYjo6cKqQJ3nTZsAe8ua11wGDsC7EYYSMzeRSQt3XX8i7AuDjuatdongXmKwxihkXZRjxQL7",
  "key41": "3emDm2xmM9uiga6THZtDMy68cNWfvP4cdudYcvXx6YXwAHo2qmNawNBnPAYCQjrPQ6JS3s76BQGPtM967xH27puG",
  "key42": "5ux79F2vbn3xtcr2kNJcAvhrpdDNpvdujMe4nPRoxSQMCGTs6ywd2goiprfxrGRDyMf4FT4VFc7FFSmvpHMNuSBh",
  "key43": "3NtaCKJSz673ftrjthrR6nTQfpGEaS2qLVNbnarwdXNPaWPLifW3uktC6EWTsbwTHxrw9a9W7AutfRPwq2FDAvqf",
  "key44": "bSnMsStDn5gWzhZM8xmhdwHDLXVpLwt91CT92kJSCQSiabgzPtd7EitHVe7Hn9YiawEnsrUgM9PLC6ySHdBNLh2"
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
