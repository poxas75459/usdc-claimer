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
    "5ZypfQEqF5uQT1jZfXjXJrhEjoASCzXG1YWCrpHzkKNexS8CAaS2KctYPG3TPxn38cQETkGJk1wJhRYXAejBX6EF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ePcrKKaCMjnWYj8YhTrAtsXfC1wonT4CQb4ijk6LRgUKANyHoaXyD2V2CjJVd9sNv5bS7khXeX8yH1pNsPopdPC",
  "key1": "2N2LYbFZrYNA5iMArrgkWmoh4oQxJFQEYSifVGCugctsLsXPwyQZhH9UijX6rZz31nxxgDxivQdKFxomULGXrPhm",
  "key2": "5YB3bdSRQX9yXvCtr1i46Mmnr3rVYNwgQuxaeTqa3yfiBrvaMUkRAhG2Je5p8zqapd8GeP5RS6FQMKGS9m7xei2m",
  "key3": "5grBXVVUSd8RMPg1ms7EspjtntAczekzUwk3LYcGohQ2faosdtV4jV86xFT4oCDtQ9NmXuACFhNNuZmxmHa35xf5",
  "key4": "64Lem7kkgua93sXnTsn9Lg8yeeoPiN5h2gA1LTektSKf34nGfLNja43o2KHi4M47NTCfKiQ2k5XJyfZMEBAxxT5n",
  "key5": "sxR3KohRrt2KPY17oeZcJm3cgmtMkvHUvKdF6fHKugmQc1MubhAvn9YGmMMT7cmf7QMbSQn7KkGi877xMPw5pMZ",
  "key6": "XBmFCUvZTQtXd7iHrfxzA24WWTtJBr6dudUcd2mRuHXochB9Hffpa7BmJDY7AoFoYTCDVL31rgzkY58xzek8S64",
  "key7": "3ktPj6VVSbdxkpuAV3mVEiYWgpuySZ2K77EZYpq3hKYSif9oBZqy8MhRqcFpMqwejxMFEXBdHUk85CzDbbQuGHH2",
  "key8": "3AZWYp77CkQvUS3bzsec1yGeZ7zgK4wzxX879YzxNRfGyTLU1KqgRpkLtzi5fxDqNzfKbtoXYPu7b9wCo56DvXyu",
  "key9": "2kAKRHPyQb612uMzUx4xy13VMTnM55F7zAvo9VjQdSb9KbJr5RqMNHgrGasjYrc9qyvv1AuuXcjokEjYYhQ267GB",
  "key10": "4aju7UnvHzoYV8TfGihLXDygDWU7XxpGYJzdQVDGkzjcn7mijvYXEi19dFo5KZsaD1n4uKJqjmtsFemCZfRZ8UQ",
  "key11": "2H8B6NUWKiRH1g5if4VpoezxA44xfTbtbZkED2ecjPyYBoprwLC3EE5eDPUyrnhNizQThjJy3aoQFCB6GQs1SUPR",
  "key12": "tARXiGpDvLY3iEkBn7NzN92ofosh8ghx83YUh4wAQ9QXpU2iBWKm7TVfPoNp6eL176rMX9VkZEaejBUkvJDj3jT",
  "key13": "4uB7afa9MUw5JqonBoaoacxYrkzy5DfiZn5QfrmvDSpyMtZFymAMmnfZ24wgyVWH8mtVZstHVZHVJqhVJiUYm9rE",
  "key14": "5PEAjzWpJ9ewNxQX2XDBYeSZuQnGdhQJECP7RxsmXeBourbxAcEiFU2zNbfCWboo4svcfHdoJYaoEShGFkJsK4CP",
  "key15": "5ndnoAV7jCNZRjspue9toe8Ea8P6FHQc1pEMvXGyimCM8wt46Bnf4Di6m7x5YacDgboTwDw97RM66W45KC1YAUnX",
  "key16": "34RK4XPz8ZcDryMpSBL2SRQ1hYyMqyxJyGmEaZM56mPy2Eef5f2PBDhQC9VmdVQUbLam8Tiyow3NTyrvMZosYgom",
  "key17": "5pNW3CBa3p3adqvw9PqMzYK5ZQ9BxEuemWc3bC3sfzteiYSWMkjWtZ6rsHye1U65KcjpJctPKjtYX9VMHvvzW2X",
  "key18": "5ZiKHmmLZFSbXzAmZmYT1HMyK4mhZv5Uq5PpTP8rnbZRV1zBHMRUjs5kRswWeYVLzXrcVW4uA3vpNbcqjPQcLcLR",
  "key19": "yPVPJHLq8ycteh4QspbBrcckjVM3stPzdDv1F5u76utfmX2Vwh7bKuDKLceCsSf8k8NQoubrHBeWgkh5ZRqvzwP",
  "key20": "5AQkRruYoX3bHMevyYRyE1Lcd5F4cwhTWtSNau1HVPqgUFny84AiZXbQ5ewPNsJex7QoHm3D1TXmfNYu8yvVN7zJ",
  "key21": "3tw2rvnb6mQU4puP2CQhtA86vZLip5vV1J6wrbhCEJ4RKWSaQTNdGgZyrB6WDvRU3nTx5w6crG8tax5kWjBm5Ygy",
  "key22": "sKLsXL337urNivM51Wc5s7PXfy9ug3abmoFid2urKpB3acwjVehaRq6AsZodimpfssoPqxnriRZGix6VgnGwuxM",
  "key23": "3G31pYRYqvnktJBJdZdpLHawfYiXjXLyEdigaGNLp3CN2US8tv3mS4UqHfW1s6fWBp6gue8Za6qhFVuqxFuEgWJb",
  "key24": "odbqVREmbajGqkxLgEzcCLHjVDmFfhoaaRR8dqh2bCbCLh8v91AUkmSAhgqPeA1pEDWEGF23Xif1iNdUsp8chjd",
  "key25": "42eY45af7zKELQDq86g93tLWK48vbrASjcoJD6HRzxFVNDUqupbPEAvjy27HBRoGKfMgH7pyt62c5W33svEbiNKj",
  "key26": "ZEFTzD7ak1Pb7T2iaCm2k4d3tz12ApLxVjMNmpfPapBg172r6WfbJz4YhPgBbtDgYGYZJCQZpU1hHoSFq6vhFCG",
  "key27": "2WVUCNat7NskrCNtpT5PsyAdPQzLwgZgk4GdeDkshCrevQo6NUid94kJu2QXzER7jbS6tTTpKTXA7TPvhSLy87k5",
  "key28": "3J9yHcbkU7FZaT2ghoQFdB2mz9QanwdqET6D8k16yougjBJGHzX1X6UwYTUWavUbgj4LqsQSdub1PhPECqNR4fPe",
  "key29": "3v4cUuJKFwAeKAzKgAS73ZHbnnbM7mfvME5kUDZ8zNsfMC9dTWm9YfzeJ2nxM5njDtsKXa6CNoJ3tyJVkSyhW8cf",
  "key30": "kjFNA5ff9si4wvgxVwoJxsL3UTCbjvMheRDD3WRXTnYhiqbRu7DwAaiQ289dRJCo4TP9GTqoRst8hLRJspJqHJA",
  "key31": "2Pm4fi3rVVu514HAqEVo7ENTDBJ3cJyJRCdVHPK8WcdCiRYkiPckVdfgLe4pfjx4Av9iW5JyLhe3SBdadUCSy6Bn",
  "key32": "5uc4iW5Lc9HgBmM8Kq9DvdoASQbmiYSWsihjCetUgM9NWGNhiYp6PxvWARHihwh6uUvqKMMzTFBwa1RRBtEYvaPY",
  "key33": "4AJUXwcJUo6D1axPRf18A8UVk3dN7cSHuu6jTcZ7TwpHxLPwYFiHqRGMMhuZzhdvbjQdy2N9hFcCEbfERGMh6316",
  "key34": "5Tu6RuN3YiAZU4RqHKaRjquL29NqHsbaofQNo72hmnKnLGHouCVqAN75FJgc1jAxah2YrApkYcT47cNx3Yq99EDL",
  "key35": "3y4AkwMLHzpWcDfcBdKsaqydRTtksGxhxNqVPcCK6pga9YkG49a9QVi6DGdQU9rfeZREwHdAzVfS1SBVr2hYavps",
  "key36": "5nmfWv1uXbsSGWzBy7Dtir16h7ajdFH4KxUvt3n7QNeEqizysQxvaJcjp4tJhv4tXgGKDGnNRxK6Fa3gvzZqL2tU",
  "key37": "2fkrqPwMkFHnbaBsrre17Cmc5b1hfCQUXbKBbw8khvyM7LGQX4pXi5kbP9r9MioG6XmTsWomTckhCFibWBj8AuGa"
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
