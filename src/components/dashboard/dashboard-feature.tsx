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
    "3assE2guoKyeaqub9XXVhT8Lu8eiaQedDanU7Zx7tBHJ9dJXDLHy5NNXVhkHESJHETGrpu28XWoXNr6AFDC7bMbS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KtGYSxakcHN9WeDu1HTNr4cuFp5P2bkBUAZRp4FC3zEHAU9UVFeJytKtQCphbRRB4JrK8nqTpRWyUKD3qc6JFak",
  "key1": "2MCBNjFkQrUJmSoUy6epkx1FqVDjMyAfBq2s576S7gWZcDhYuVNY3gEZj877cW9tqkJefHPKjsx7aYQJSyX8q1fQ",
  "key2": "5pZXLQDE4y54cjxp1moK38m5pZ5k5pmyhK9i3wGPKnb95zqJiBrwwxyEmVQqAUijgZkpX4gkK8R2auyxkfoRmE7E",
  "key3": "41Ds9zpzVjSei1ycEt7s4fpyVzAvVTWXJNt2qKtW4HqcqR7NvQKHJpsMducEXgrLd58ws118H7QBe4Dhcw4mb6Eg",
  "key4": "3KZW7USsAgK7YzoLDMsfpeMnJ6quynWtxC1eHqgaNKDPFWj7EqXqi1tQJ7YNEr62dJ34pzz683o5XW2mLU8SkC7z",
  "key5": "4CSmFwTjyJW2GEeMuSkR3Tus4QuFuvp5bEsrjshC6m2xLn2uUJxjoV4txfXkpaDcS8xt4rXV7MwohEiZhzB2c2jU",
  "key6": "3RaktgkAPJ3dHHecV2oJkZcwTnzpqGTMrEAJouAhw2Nn8E94wdWdKz5w8gnCoKqiRR5Qrrsn1U2KGZfZnqrM97WL",
  "key7": "3ir7XMxPoSdPPj1XSN33xNBKhuqBGApXuwbq61rNuMr11fnxiBq7SKTeZ4ZWsF1QyBjJ1koQPL2tCHLDoF7sWJFS",
  "key8": "4fQVivrSopYXHCB9fUBRwNCTU3dzate7Am6KWoKkrsY74xJSsKMWNNYk4u5PsdqZS7gaMc66shDHo4GePETfKFad",
  "key9": "3ZqsCCB5P5VaHY4NK1fjNptTGncqSUxYHS7dTLB7BrvXSZxdoJ7qnHZTSzcWuNrJAdvC4SsQZQbrm5Sd6BgCwegh",
  "key10": "2R69gpsKe9G77t6hNY6mkaH5ZhXHtZXma63ASQnYxK1fCE8EAWiEXiN3wF15Zo11BW58EZkJtXgRWaXoVvzGWe1C",
  "key11": "2wMEKebsDMizdhHrZF3rG5hfzATNCZNnqh7ynV37eXv99hUWvQyq6EvHW46wLA6Y1Kv6mCF9z9vQq5iHst2w9iWL",
  "key12": "4UQRuDcs8f78Gt4469j88d8PLx16DFtJHi2hXzQDr96udA9vWqS9T886h7MawXd4GsWAwgFpuQxDQTQtfL4AwyoB",
  "key13": "5o5CoEK11sFFoD5d5fJALcE2qn7mMi7HrXndeWCKeT4q5b9ZUA5XceVNsP1BN1QwS3hFSoLZbkoAqKDG2cTr57nZ",
  "key14": "2yQabt2Lqd2b4ZZH5WcArktRMmxLWH871akcYngRFwvo7z8KLtaRNzT99DdMMdTcSQAKRPCtmCfCwo1gQ2Q62XG8",
  "key15": "4o1rmrFLzSoV7NLUv1XAM9P19rL9cDrZBKkrhwU7ixZGHFYeCyV5b2GDQ6ydq1hMFJNH1QPqzcTLyqtQy6PbYWq9",
  "key16": "25ohqYSJkkTFyVJTeUuTY3oW2FYSvjc6b5JB5R9q9j7RV2Uims9mjANQ46nnTEdUQugUUpuhMXrBFYfjKFYCwLAV",
  "key17": "32EoaSzvG9VLzitHxzzBYDRjMGoRGNFAojKfJZti9ZPQWbryzqgeBsJ2jNMBEVE8xbMNFDv5zd61ViUvE2EfJ2UH",
  "key18": "5g76cnAAUJtJrxpxKJ6xpRhuP9GyZCvyT3t7xoyDHRmgNqNN8SGrZfc7rYHhTw7qhp9YMZYtsN3SMtiat13AqKW3",
  "key19": "3nsZuo5yV24ZqvNJ2MS2f3DWPArQbSuoLmvh8VakPuqe9ZwPdWhcUdz9ZTJXk6kCxotmJW41FvEMyJ7xU6zHDtoF",
  "key20": "21adj2ntnE4e2RCr53VuWJBzfSeQ5o2ta8YDsabbqdVAAskqpqagfEbcNFhvbQoR1RVWXZnJ9E9Exw92WRngbHhf",
  "key21": "5fbQKDUxhUKT8PYg7TtAUWHJfRDk3s9nEJLmczb9F7rtXzv7GZUzBr6q8ZGRMwqZRkituotjxYPGBvqGtZqetSuF",
  "key22": "45ZMr3Y7773SqPctdgCAs7piEXeTGeuw4Hbw3xnJtoaXhtvK9Sye79S9orZT3iKf44AXJzxwVsdX8X6M1jrtDwUP",
  "key23": "5TyftCMTepBQ6WKkcQaPNEQmpbbziT18u6AM9xHiYDYmVDHigayFR4WzkPtRbyoS3fvQDz3bAjtsykjqiZvag1Ux",
  "key24": "5HNSKQzZ9NKMGwprs4WNAmxBXJLkTn9mNHuXuqDJY5idmVxwa1ba11tkV3b8hLUfYn9Bgy2uh7ZNhF5YZNWwn2ia",
  "key25": "4wpZKBoHtB6vyz71bZCZPVo6P2Co9noKkk13sDuQdsXjCAmiSxozo8fmXzBiTEQ26KaBCNEQsK1DB25zbDt3CTtv",
  "key26": "2xRPWX8LqjhAT6dLmJUMvYaLzZCW4awNK8u1WHEVxuWQfKjZSKPo8fxZFBdLmeF17uyydiQrjZjFE27scSKKU66v",
  "key27": "3YcJKvJT2mRueTaqfvifM3mGHapYN3wiqFXBoGJyF3a5sv8Ey22wB8dDqNXRqezgwgt5vDyd8PJBYfZYdzLePC9Q",
  "key28": "FUxRMyJ5H5xvJyY8iMMhY6EZkdfo7yMUUtXy5yeYJxtEVpwByxUAzwYnCtJWmi9dBJa8WKv8zLDXjwoBoGSQDEk",
  "key29": "56uD1ZUY2YqAxmHRy282hu1QJHPE5NsqHam31QWwig6PS4j9zmWeF1NYnr9W1dTwgkmzGsfSuS1gXweXmqeVqZPT",
  "key30": "2u9i57n42TieH1j4nSZecrUxmJ9ib6vpKjcun1VqTuu7rssQ8A2Ua7uMQmsyc2HUoE2WT6oaG7TQs2ZDpGvuBmKL",
  "key31": "4f9WVR4hi9aeeAj3Ew5WM7oQZXF6qxCL9PKVHqPPY67XdoWqYdP6LHWzDdfqD123n99pT5ZbMgdZfhX8mCNA5mVL",
  "key32": "pt1kfHNBbWMKV3rMBbfwCXf5N3UuZmMC6vjdrtsied1m13T86hb8ukoixaTZ3FKZECQSBYBpR6ppkQckmgoEbe4",
  "key33": "tHb7gvqV4zDzazJxLL8eHt5uRkoy5inkwu2mhMGVq9JBLyTqbUtzZ4x7itpgh8ycp7UhFwVZSLfPG4FpYMn4rJa",
  "key34": "PeBcmE8anm8uHCHWnwRzWXq5G2dBoA93QSuWTWAAVTJ6Dc8bG6QGtZmVH4hH2oFzWwkFvQKbtogBKFhGxmyYsGf",
  "key35": "2w7c8mddPNHBCrq3jB7A4Dv6Z3ydNn33FFgBEiLJnfbRsAQvSYNRkxfGFopjeSAr44TvhHqwpcjbE2z7dLsBiwLk",
  "key36": "5VGGSHeACZJWRoW2XzqpvZK4XEeyr8NUmM9GBuHoBtsebPp9snFwYxStBKPEENpBnUGuThwvfSAnS1B83FaRu2h8",
  "key37": "3Aa4t911phTWjEc4wkqkmbPjr84DdDrmJuULaTT1GQ6YzuEWmSXNhMFoRGwoXDoyrdnQFt98zBximuHCr6gzKX1P",
  "key38": "51VmG6arUQC9Ji6PMX1zBydjf1AHxcTVam5D8X6n2e7waAsL1W52gT1UuSPaVMZT9ipE5UdTzU1rgksxiwt8w8Rg",
  "key39": "VNy58naRseWPJbShMvUR2mvZVoMTGPReQXujxoN1ULbpbcQ6wYCMZ6aDoKbUh2qFSHsMmcgKmACemAd4dirvM5m",
  "key40": "4BVcgpyB9HPRN1coFJ2vhnd56QQ3SfDMy7gw3iK6Pgs4QgUEXQPBGEYVFtc82eP4EmnxSyV5NRpungtNRZ9YcHDr",
  "key41": "h81vyYxUnTuNRkLpT6xWEZUiAXPdvZwjkEM51UHPvshuVDrh3dweMHbdP3EsVWJ47VVp15zupXCXZGksGsomo9M",
  "key42": "4MNLQst6euS6X3Fge3KhqmWLMe2z5D11yQUsQpR8JjspcaV5nGpBQbVHcThbEWB7kSA668cGVKhZxYq8h2mTFVdq",
  "key43": "48hwgqyBdxoExYsdvRkKxzEi7GHJhp8SzDEVjKjaD3Lp7akic85KzYqhNZj3QxX8ec3eZcGojMeWviZLw8yH6u26",
  "key44": "29PKzgv3cog1t4zezrnAouQScJeCK3vvAPPSvwRWej8ynWR1JgzNC3hX72Vz4iqQBHo8UexXbKVchr1Bi1NTRvNx",
  "key45": "4Dyd7pmETN6DPKZGethUJsadck38z3YmGD3Z2red5fZbZJKqym7xVpvWNBoWR9jHJAnBrjrGsqCGxWbjEtFbL1xJ",
  "key46": "gZqRNw2NL3KA4vbv9CBk2bxGnoeKBdmaRq2Z9rnRXewYk6XWtZNAy1iFYqFPxHorMbk3M1x4ySasMh6m45ycodN",
  "key47": "5Hk3xSny4RWY1ygKxJqvDSBWXhNRyGjsKhpzie85hiHD2eb3gpeqkU5aZDBie3MFrAGXF3VAbWoWBdT7HS5zBcJE",
  "key48": "4h1DL4kqaJAr95beVjvCmFcFfi3szcyzVfVgyszo3EwwhFivrn9em1gJpzkFr9D1kqnujuSdaeXZnAdfCwzmorDb",
  "key49": "38bKvPyJnVgVTgJBTLHip275iTNkauMgmgiRWrhVSF3ExU6TjZHGRwww5vzL7MkM9KgGQJ9BJAuqgFtuz4E8pboY"
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
