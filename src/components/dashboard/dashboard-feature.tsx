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
    "3xdN3rWyzXbkwQMeF2zRuDcPSUBbJLtMGU5ULW1uQgiparaLkFBrxNn2iCNHQwcgMhqesyrfyGwFB5ncFmj5bKT1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oGFfx6DCgG2mfgFt5JB6fgghv3UQF3SG8PdpNjY6ZCFXYc3n5u5iwComWMddNHS2zv9rLu2JjsjF51Uroy8ak67",
  "key1": "5LaEiq6PBxW5XUTP7gc5sh74kYPAYvxEX4ecj28dCZYuLaJbPbDzRfAHmpVZRV1G4sWBYwJcLH8tk73LnaCPhcaQ",
  "key2": "5jvZYSze5gVriu9r1h9hrFpsnMidLHfvWXJJHADjkH936UzSasBP3gsSCuxryjbU1o5MyhbtrjHQoi9konFf9bXG",
  "key3": "5vkyTTdnUP2B26jvo4DFEXwF4trkTZtFa8PXb5996fvXtjuKNtHw1NjRAzfjTi5D7SA4tzktx2gGmR8xxLP3GzdM",
  "key4": "5Tfqk3tVNuqZox3Db9XcfUoD8C5YMj13JCNYef7bGRYiwg94HUAJ6P3mB66kYVFJrzt2YW56snZeFAS8EDvGeg6c",
  "key5": "4HTNzGboAsUAEyZaQ3nhAjZDfdYnvoyZqtgk9uC8aWKq1M7xaikP9Qy6tbjoMbJF2RpyNpCwiZqiKewTQ8sSXuAZ",
  "key6": "bde396C5jnekrKqAYCTHLuQy16VTzBCsSJvUFur77Z2jXw4UcKzCDRSh62GyhvBKnsPLMS8wjEzr9EP1wSkQG9N",
  "key7": "2uX34cKQ9kirR1Vgrca7Z7GaDvemQU6aG1ASiFr5yKvYuoi6h2RWz6V9QpuXuDJGVjCghDVwjCDSeRLJY1C2Pr2c",
  "key8": "4gNt3QYMDgA2MCvM55wqBrxu5DCCts4v8vS2WkCcv5XmJ5nTTQP5Jb7qTQkXhTMdWJYY7RSgxjAFUoJZoQFmewLm",
  "key9": "3HzRhzJajUG7gfLeHcHa693VrLceHNQJNBcyMkVShHXaMfRQf9At5TDBYuHp4UPtiQ4u4mQ3d1192wpvBLaF6cLo",
  "key10": "5wJwNcABaY2WwJhKRjNVYno5zXGEKkd34pV6yQxDpVsKpaQcKwUkbtcFCncvCQGP8TNtq3DP7RvZmxktDGKtnyiK",
  "key11": "54B9UxRk6Mt2Tqo7cxwgdq2LmWmHHQ23Yvzjpc7bYDymEWj1U8pr3rMYyZPonqrHAimeQY6Upzcr9tHKKysACUHf",
  "key12": "xGM9HtePJDwaUt3vJrU7To9kNzTWPsDKRf1pcoSuByUEsm97iQ2SK6HDPYnwmTMjozvPLKhK3gcGknm6rrgK4aC",
  "key13": "4AxQbYtBcLoAx24u2Lq73zZkJHu52NYz5JDybghkZkSgBf6BLNnWXaDxRap8PWjb8kWmHUSNwYkTRECsfYB2FtjU",
  "key14": "25nwn3thDY8tCo4oXzrytW4teP8zLWKnL3cmFY4X4G3yJn5cZZmtSretGUJtnBnATNhhG64gPZAP6FKuZwzWzDH5",
  "key15": "2mPbi2R6u1i2x4ygkL1wQBq4ar4ffJy9AQprb2T39iKR7r78gGGCs8N7AGs5boNi9wi4uxAM7mFPe1WCDBJqNjbE",
  "key16": "auSwzQwBXyFtLuCw88WvCwxNqyQfmqkbGytZ3umA6C519RqFfuJpZ6L3uBwjfduqNKuJHfSWkXZRgRDXXWtR5FL",
  "key17": "5UH13471cVVcFRABr6vRyhRgZ8khk38K5aA7pQRSrE25gVetBUz7vdbfExzr87DqDWBdbki8vVYATG3uLmvYdXkW",
  "key18": "2DHv5GLJ9hPreGJwcHsfqqtgs7a8vEeDSFwneP8xPEpA6dZfm9SvnTZiyWeZP9X9vhD1azsEB7iao4obdu8pgcLZ",
  "key19": "2bvd3zrwfVCgR5Ko9WNjUg1Zz6PsviuVZ3wQQv6aWwSCLBMqnUzW7mN56AgrpQPWzXo7XuJd1wGTYvxYPbuxSLic",
  "key20": "5pwCmv2Eci65QfmrHJ1J38RLJMnxbG8VYXcS7ZF5smNEecNz3CgKSQUFqp8nwLfzraPq7cosVwdXVMfnJiQ3bKTs",
  "key21": "5ndqxBunj6atXNXZiDW82yioSBZNSK96QYSsRi46BxEEyX6EENdihJ2ChmuBtxP1T1x24o71dSY9N46tkvB9nwEc",
  "key22": "oRA5t11BijnVszGKws1BTv5wpyyNhNoTUDiEBp2EZEzJ1TF6XFpYBAHHuMSDPrwVHpkPKS9GDW48euwsZmZHzax",
  "key23": "2HDWoDTPUN5WZ5gdXj9kciSTBGD2gHPpFM5eobYAxBcvZHVLYi98YFHYib3W5i5JFsvSgYLPNbML8T4TeQz6eDZ7",
  "key24": "29yuhjfSbfZFFJUb7nGa2p77d3Zo8pXq1r83MQphTgPoJyG2SdCReCaNtBWLkxLkrqf4HamFfq8b5VkTPjt3VngT",
  "key25": "2mhujR21AErZ9sqQPNZcSAP5NLD4m4QRmtqQN2ryih1Tzr9KtQsxye1Fwfz7picgFN3co9P3eFS5mj93rfYi2d9R",
  "key26": "2LJ29w4dSTnDs8okX78gNpVnRQVmGgrPZBZs4MukSLkEpxaPwEEcZ41hyqR5vvvhycfe8To7dDivdQ7rXSzmPYfN",
  "key27": "5SiN2yizHfzU4DFB8RuDmYGtC7w73mDpArAmY1qsst8S5ujLV5KHQNxNs9EvxJrwMYZPeBycuwiYNoCShRV6JQPb",
  "key28": "2ZCeiLwBXC27x41kFh2W4xeyZ5vnbTCZx2xZVprTP2P6camiaAistCdV68nX2GjzLZLwfLdR8QgZRXaQNJ8VG7Qo",
  "key29": "42FH7FeWbtj3zWU7P4eQEoWhBmgFna2bwb3fY5WyNDHHSDXLYdyZxj1xaQq47AnnVcEqGvrjVmggpZGnVVDBT4zx",
  "key30": "4b2by1CwwHp1fMpNnJX4kRw2zuiqcFcd8XMQXsSzFib5FPHJKEzKdpx2dRQSgjB9gBwdsaA4ePLmqaS6kopdfich",
  "key31": "5QFDR6XxMRmpREWiNeJ2UnaB7qbopQsbHzd9AJ6qhGamFzFkfKQesmxM1mobtFw9KFwahPk7Nny8knW1WB1ws64s",
  "key32": "A4jkEtCmvYLSpNPtgsPjb5456Qd29Tn8SPFMJDwdCsjAxVeoDaoZ8aZYv8z8fwxrBhPMYWir5nqTkiieUdKqRjs",
  "key33": "51rgB2akoxfNzgt69soUohcms7hCeavbqMoz2m5H93A9Gdie3ZMiEL9DSf1vTbvMWMwAUqqtLPspmmJunog5ka9r",
  "key34": "4QnuX5jeFxxhtXaitLNxDdstocr1x6DHX5KsBAbuG8EkQQhLh8PfZoaHUTe9dDLLFXMZAqG1aXsTuR2YvsBXHuyn",
  "key35": "4jJZLnu2C9TihBXFt2bMyWERJYZ9JGGzSt98WkGr51EgJrmrsUUJaoEd3zgDkeTywUwbxhJubUXyDD4AiUFpGfwu",
  "key36": "64BAptVqPHBQ3au1vM6cQj3Wi3WBTydYqfjcS1TSWnC62pP5tzVq8VgUo8W8XZg2SYwktTCCSNznGXRUYd2vNP1R",
  "key37": "66Ze4CJoB6wAZh7VCbjaniaKZksacvEzALs6mV2mwUz293WcydMfeodrJGQvuvtn1c2VZQf8f4AVmPYP73YSJoBt",
  "key38": "3fwWxZ7fcUjzSZuxk7tU34ycX4c8uNpT17aaMZZ3w624tgbyfFFrAyuoYhi5gsbZZp93nJrDFwXNcJpjHZZ81NC1"
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
