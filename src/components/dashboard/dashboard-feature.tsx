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
    "3zcaAmDRx794LN9EtihSN6K7Erh3mbDTXD4um48AznJKwf6y4jfV9dDz1RpDwiG8eZU6bso4cSnWVp3pK2bd9tfi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WZLtmr3XnMVmD5niA2gN4ZPG67xMEtFwCf3JfhPRfTczfNosw3GLT34ELXH1Br8HALKWPzGX14SPqsM6z9YuvH7",
  "key1": "2sYGriAyK2hBiihMGcMudnhe5c3uj4iUmfhwMrXec6DrDmK97gZ4xnM99yZFZLDRXRA735GjSzpAeMYpZsmgSSx1",
  "key2": "4CLoMwquTtazutCWZ1mtNWZT8CpDC2eEUGqzxHHSc9Wd1iQLb2XrEPQqT4MTx6D9Q2mNbTVSDaqiQEjuHBeaJxko",
  "key3": "GTzqFKLUNjymt1WHhd6Dxw6Co5DsM5uYssachkuNVaptC9GLk3yHdvKGwEdv8KXbgtgj8EpTFrycsrL9ZuWRQ68",
  "key4": "2mP4un6wSrjm5BNcXvcq4YzbCEKU3SXmTQxFekFGysZjo4w1UGFaWi87FHEmdvCZQX3oem5kBahFDjgdEKdAnnDW",
  "key5": "5ytVViyemVBA4sRGhU2iSdeUJAmrS6xLQrhZpbPeLaWPLToUSZfr9JpAnmFxziXdvikA16LLN8sZ82WSFGnQ44U5",
  "key6": "wVyzHGxENcq8Bd5FXYvjAzBUndJRUot7LL5ELi6TbKLyf3yhH2Snoq2obr8WFKJtTDUPZPXcVCnA76ybTwXbYHC",
  "key7": "56psKurmJVp36rCSWD5Jhumi429pCkzbtnSvBgjNKqHocEkyeL2VfUdTcAGv7zaa8xw8e3R2qtFA8eSpoypZABXd",
  "key8": "4utzdthrt5EqjmWZJqTpy1LkT35TYXsz6qUx7mFqKJqTEpkBR5UNQTjqtQRDZV3ikxP26xfe6bwv8q1BzYFaezuT",
  "key9": "31a8MaXsYrF4DJbezqFMPjvxoXauQgBaXHZUdtumQC2KaXb74mFBpLdFUFMEmob4TGeiCqCweZdnedoDapMwpAZP",
  "key10": "5b3F5Wbt4fdgzxk2XWLmGaqNceZ1K8q8c1EWr35MqhUZPmZwMrF3L4RKksaoYDwtx24ZHMhER2Uvi5AsywgqpigJ",
  "key11": "2ouzT4HJUj45FinkqtddCwgJJLbtR1ima6wmz8hv5GDS4kUcnZciU81dxNqQt9Hwy59gzRu7r2R4xeRT87P6MpRE",
  "key12": "3rRdmpNXHKqrt2hHa5BrxzdGkRw5MeCSmJffD7Mn1Vv8qZGYicSP1vuY6h6Sz6jaAamP48iirsat2h37kzWr6o3t",
  "key13": "38EAfUw5HNHi52mvxWqurLemZ5BYG4bzc5LDbyZfmyqy8ksS3CJtXa2se6Ltt7FyBrJhfMExRedj3to8p9wmmFCC",
  "key14": "66N4G7dD5DupupeY8MufQysVy2WwLWKUKqqfisKj9JTXqn3Wi2f1qj523xWiU6oZTrcFUc17s3hTaen6mPtLZhdi",
  "key15": "29BcV5SuHxEXVU6DRWady2DPGXBRBR9Tk5R3J1L45JKD5ct3TMqyUYdEUN2kS3GG1HGJqPPyjVY43cFavDhQJisE",
  "key16": "5eRBMZXoFpXPZe2yn41qhnoEFAnnE8pYQX2Pr2qpqnmZ7yMABtvhFZjxAxnJqo32Spu7cNVkwJXQkzFu6d9hZ4sA",
  "key17": "2ZqjFRhUoDkVb4J1kdtzrB4JAV8jALEhJia4fWKmYT8XsePtpiubg9AJCfKQPy6T2qVqGLoRnJoCSFRrCS2XvRfB",
  "key18": "rakECWZxH9pRWKWLtdmHmMV3QNXsYxW8vwD6haQuTQd4yHStfHfmGmhNR4nDeKv2VKFVickXQVTokbPHcktomoh",
  "key19": "HicQQSZbd6gduCPrMZ42HEdaJwHEV2eHHy2FZpnoZ5Zv2qk9zfeQdYGY6ziKd4mdw968yoFyFup1N1Pagn3Dbzr",
  "key20": "2cfrJ4MCxmo5G6PwT5jyDgSAbjPTBbpAz1jJjjYMUdaTXGiBWasNmnMB85DHnd21WXhVNHwAAsomAmm3E5VSPyJv",
  "key21": "r1RmUMyAdKnDtpSJ67B9w1BjE2Lcxmj8EwYWAJXsNVDRMcKnM61s3HmfKCu72wzdbki4MT75fKyfvwD7es3gdHv",
  "key22": "2MEseFC1ddt7f2Ch6fkqCn462ZWx8diTDndnmzCdeBubi6D5GNUixJe9Z7cEg9bW7xgYWJT8Jyeebo4372MrVrdE",
  "key23": "4BWeN386T9oMMNMSYFguaeReh9jojJiXb8LutFQmUHSi6TTJkwEQjnkDhFkhKk89HpcpbGf7L629ddj1XEFjWAy2",
  "key24": "5RWFWcZXL6kBqfTvAxJfAXLkpuP1FwE4xXP8pvvE6KQJ6U86vBFgnyywCAY9TisuhEAXqKH2kCoFQbnNm62PmApi",
  "key25": "Gnk5QzzBMrNQVrSiMFAgBqZXa75SaL2sA3UD6JRE8WSFwaLjuGmAVxq5rz81ufUdWpXQxGjQQJtL1j7ddRr1Ga5",
  "key26": "27QvgYv8cmP4vmXHdpGMJEf8jX9SD77uhxBUgS4DkM99GknGS7tC4P5yQEjrzS9X8CcxuoNmFTdjvC78PJ9dL3TH",
  "key27": "3nNKHrdwqSNShHNmEt7tZUbgQWCA85TqBrk7Lw5hQS8xFMk4w8Av3NV2Q8cTYCT9LDnvi8iZKYTVL1NGfi1S3kkK",
  "key28": "47v5ZAxS8Zmay485QdQfoBUcoJf51yvPYEGijiC5GsdkmGYsS9tQKoABJvwzYCEMzoBQALXHobS5eQuc5EHbmnev",
  "key29": "yAG2RBVq6A6PEJbLHHo2B3R57vA1JAPwZYZ9oWeWqoZfR9tdhscB5mNNY4sBX5PREJNk2fBQTz5zGDhL2vtfBZq",
  "key30": "bf29ZBNpUoicWcsxdMAj1J9NXJRSXs9AGAwRU1GZcXAwmW6poFDeJD8WdmAd8owGcheV5MrQ1WEJhGMgRd2wftp",
  "key31": "3epgsPGrS5NxHgMEdZHBRSGNsMzvLTgM6GWPbref29w9UUdeRQnbDLgyND9SgCNi3Ep2Fy5nF8tb1RKF6mGEwB7r",
  "key32": "4TwEpPAm1o61Ws7Uqg2doGixmkuKHVkCGbWDxEZZgSPJDxhkgig4eBBHShN9fPe45azem2fmJ2GMQL8nXVuxcoHw",
  "key33": "3kqiw5SqDbbDiAUB8WQWx3DGmPVwKkKUx7C52WS98wjxJY91U24hidjJNbpRjxj33nLeY6aC3YFsoi5jo3p5LWcx",
  "key34": "2nRJo9BgK4zbYr3dtbbpv9fK8mEbqfCyxpegVnRytdh2yM6sZqagndqkkkLo46Fbe2vCuaPFd1GrhUira7j9v8go",
  "key35": "2idq9Aew5TihhdZJkBcqy8xKJaiqG7bhVA7WJBmzfmrbM5oj43JnKE1BVsnMvmwsqP5Q1Wyv79DQEcb7eTjP2ga4",
  "key36": "2dC79kMUvoWisHA8qztdZHyonHnZidEq74s7tKEhrT2wggGBymLfMrooqFiuQXD88ujUHv5o9QBUfdq7c9X1i8iB"
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
