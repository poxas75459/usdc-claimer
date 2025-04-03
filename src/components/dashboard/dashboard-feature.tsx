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
    "4VpbpqUVGr2mRvinfWLiDbaa5L4N7dDJvG1rSdZCFsjiEooSF52sbQagcy3pAvW4XuwDdL9CmXnhvUduHvM52cpw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wusC4HCeZW6RRrUSthaLqD99KiTyr1jQfXEjpTumwyb6mf1tAtSwPoG3FWhSmjrnuJ8kQRwUKfqmCUJvMyqdfEg",
  "key1": "2cBuA9NX2HD2qStjCU98jt3BtQeHWjnP562cDDah8gA7Mua7cq8Gnh4BwLh9ep5umMVUYh8pwR8toHo7CmtW2Fnz",
  "key2": "2TgaAEp8Tcxy6gq7HovYHW6J44HmFoVvFXhbFnxYEQwvdcjr5dEhV5msqu8A4r6T9Znurq7t5ohTt6P5ksjG7pC6",
  "key3": "pNUk4dtE4ULWx6uNAJ3MTc2dhooEHgy6JBv8JXaAKmA1GHKMEejaLx3QFYvhVvkZCCnD7beLSFLG4MXR982D9mu",
  "key4": "21KFDLKjfRTqtar1WqaBFdAcxbejDo5D9kXs38jMnxavZaXha4fyVBy3zeMqLbQJAciLkREu3aTmqa98M4kmPsrh",
  "key5": "uAteAzsWpGYuYNwgGoaiiZEMEitPcDvWsNWhySY5ELXW1M9FMDeGinVozMAZFFra3eVdn7ufy4pQT1szmNSgHiG",
  "key6": "2QuEJHsZ7gcSQX46cEUQw2SmCH8nHzB5C9ZVvKifJUNRfUd6h5iN8VzeVK9SnGCU6V5eGcQrEaDnxX853TJAw9rD",
  "key7": "2PRrvSEdmoNpejDzQKZS1XdCVHXkYGxpiDYMdYbwy4PdNECLUmwLtBfqX6ckLbrWDDcEktU6fVCXvtYuzNTgSh2F",
  "key8": "4so4ebw8Ry1fNSx3mBEyi9rdq9EJwV5tKvyRPTShFAR7YYu2aftzpVDKSpkxkkUgWrjGjYUyUEBjCVDN4cKT9pcp",
  "key9": "Fzm6YBukdhoRSvtTm3Es2jqMAvAWBZeQB5p1HecCw98gr5m7hPARbaA9jq8f1Yxw7zvWeAJhEaLhiFVe1rBawjq",
  "key10": "5cCgv9T82xsAQNtiriqueHu9m8focZDbcLeqChsUArEBtWuMjKch1wyTmX5feXxXyXQitRDpNS8CyjUq51hZfmBR",
  "key11": "2dfYjXSYrigV1P3NyYaGLs8qp5pkJBVXVWt9HzSjAnQUPHgpgkeztT1KXJhwgCnFnxWY1T13Y2kemcXkJ3AaWVP1",
  "key12": "3AeLzrg3jqmz9i3vY4K7d4Lc4FAUzJskWmMeRgjEQHASf8cBzLd3SAicqApX7wSsqgE8PzRvvo2DuBXjsSP991nS",
  "key13": "42yWdwmR3uijQu1TgbtFSESg4Qwbakic8inyoiMKMK8nww6HKJGgBz3xp8PWH5TXFvE8ttjN8DfyZJckh2uErofQ",
  "key14": "2D7KJNJ6YVw5zUHj9J8djVzUWG6H3epU5sGvDo1yoHkLxZihvtGsEnZdJT5CrSXKNq5vML4LTnEAKUtpry26yyJt",
  "key15": "X7L7cdBDZC1xdaVsV5ZwwgvNB3tt2YbQvHtqAgsErt3hmxHxAkqiGhocozXq5b3V1LyscLayShMzEqQ4iBDtwNZ",
  "key16": "3ZpGLgAE485rDWEP4eGMLjPWcdQQ3eXzQ1L7uVErpq3zbx64vzC2HBXyvnBzvvBU5UvWiiFfi4EY3me8w6MKZkc5",
  "key17": "46uyYiR4jJ2w58k3RYCGcCM3iyVCUzAoXPhKH4ctmUE5romQUY94Tq337RfSWaxidbxft9ATEqUFN4UqbWhEX3r7",
  "key18": "2w34YzoYC9sSYUCGi4JjDuJ1ccuvEnamxPX4nWYz9fAJoWTUAMH7nCVw4nCQZUe6v6frjsmy7SACvTLURpn8Bues",
  "key19": "2VBQ62aaP3Spx3AEWxE4b3AM3uFDbiyEMUdSathmLHenHxbKLv3nUwC9GzHjGqCmojuiqSeyUHJ2XCRLCeU7Ffjv",
  "key20": "LJKQ7W96vCiF1BhyvHmUzbgdJPi4EeQVmtNJbNP6f3SYbhU76ED7aM58FkH2bGRVxBcpSGy8VfdgLDMRZJiGXEF",
  "key21": "2TD742c8rZHx1czm7H5XWsk9FpFwqMZoAdD6yfuR47Wp3wW58fYWQNBCMsXDxbV8T8rxm2q3NrHMz485qzjqBpb7",
  "key22": "2oJaZbNzVvaRQXCAxz3UFV4bHt7gxgV7ZGrZ7M8Zzgm5E7Jn7Vt6ZobYKKy5i7J1NbsiVi6j5N124mHVabvRGwyx",
  "key23": "QHAzquWMDtYvwX3BimVWu9xBb3tdmPBNumRha19zGr6s7JgAnu6FwR5eMGeidyef16xmenBT16dXCtHBFQcsWhA",
  "key24": "5pRD99pTnbGa1PkrKKb1pAJJ8MJxZtxjkLeCsvnhYYRZ8whNHmF3PHL8f7PFC9Uz79TTzDKEqEKyMZxyax1KQ8fM",
  "key25": "f99J5kDuhYbmeRcGPdC5qbyfGCvdthMURrvHPcegxkhR9ancGpiNcPetE5vNE2Ew16PkzpQaUBoFZ5APDWz5Ggt",
  "key26": "64wjKRyw9teK48Tk2AandqTPvZPXLt2TaHNi9BPfKyXStEcCsQdRTpCVjqk6mbqpUoXJLW2hZNWthSvNhUJbvrYB",
  "key27": "9XjmVJ95s7AxWwJXHBYPtBnm7NtRAjmNwYtnAgq1HTzA1QrXmgSZGv4GUwCFZxqwtNvGxVfGVwMza6L7AFkAbm9",
  "key28": "48Qn5jANdqBEUZC7uBUDCAxrL2kfHdsGwVxGxJB2LH6p2Mico3KZGdNy8T95qV6MdTx889he3RSCR5RPMHNxnVcS",
  "key29": "4x7DmSLoHTtCpdoMKqqTKNe3NLrqQofabMx8NVhfgwXr8QkAnwccZyNpHdxEBb4u7E1UR79DxepwYhGnKuHs1WmU",
  "key30": "5u868DkUcHfuJSL3TtSeSJrUYDam9nhorVuLdYhcisc6ejF4kstnbpKbBvDW2PkenD6rvSMaPBkyHqxDmjMT9ZdJ",
  "key31": "5gKLro7mrdvRxyZwaDEL81hgbNuxXidv5ZyLuCYBfSA566t8TKzkG4rq1nukEciFWZzGmy1w4s8GMVSB8kTZRExX",
  "key32": "5JLWCJapUSzySBjvaSXKmzp5UdG8bAN2rzRWN7vcUPjy8PhVorxtLXLz1YWR8Gc9Nr9SRbzd9ymt8sCkRsFzihdc",
  "key33": "2BVU54rfjYnF8kR4t59DTYq5GQobiPy9rHmBicedFiqmUxgKiZVJEKZ2wgWjtqXdzrawfnm15ZefdpsKPpDEd19n",
  "key34": "6DTx8LJdDmmMaDxoyZoN1dLTJjHCYWFxJDDYBVmFKoqgAvBkUhyVX8wembvrVhEj93ETEgcdCafchnrtUydsAsn",
  "key35": "2VF37bTWc5Dr8nMcU77TtjYnxPD2H3NxBJukBsqFpn171Afa3zVyB9zsWHp5dcvM5zzhstu4snmAnCJ2ugf6p47D",
  "key36": "5sK6hzcYPrtGcB3ps77xKyzPqCviGSMsyHE8pBWgeSL3gaF7EfrXi5YubxCLHtiEvq52eE9NkjCsmPN6nkNPWSTx",
  "key37": "5RB4AneHRLvREUqYXbw8Prj8XgZBTXJVXPU465jVs16JnEPwACN4CaNm7Dh9wjW92MGg3tqSTWSfvPeTSo8yi7hq",
  "key38": "QbFz5BxA8d3oyNP7RGo4c6fqkw9HvNRhshfRj872mPrjhaGG8Jor12ZcD89iayVsDdsCyCnRcoThj6xCRrQ7Fxh",
  "key39": "4TzeDTAr1noDJp4znU8sQ5hEBWVX7TmQ59k59K4ySNyqDawHR2cJLvENGjFUb5iYC9tSCFFTE27eGzmVp23PwMXW",
  "key40": "reLQXBDEv3PLdZDF2VezPHWZW6W67VXafg8EEGZc2cVnPxN1GnvUgciH8oyda1fz6RJCy5xqpB1CP1z3XCYSLs2",
  "key41": "5jtJgd7ifzKHRgQM94TzhuqBetQRUaZmEX7p5PZ968fyNhSfhhVSsJP6JW86nDWrtBn3D5FY3oLbkKEmGcUAYCt"
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
