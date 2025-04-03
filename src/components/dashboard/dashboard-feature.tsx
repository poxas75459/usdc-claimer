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
    "4WhSEhv1iyaBVfHCm1MDVvy84JB9qeq868wSyvETcxTB2xMPvV62yYhrDZ9mUBpaWPAq4VYwtMyK3cfnZSFxLSdN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CtAbgtWFcwWGPw6M5Xmur1ca9wrVJk4s5VbE6B3iAXYLHEkVFn2bSPoL1hfR5VuFoTKY2zDhj5Y8hssJedrRouF",
  "key1": "3hBXJFZDS1PX2jG3LfQU3LapAUkBkbezSNUiZBTVP1arjn7GwEVZNZdE2dzstX1XoFsUDZGFeQUbZyoK9e2RNHR1",
  "key2": "3kE8mRF3PjacUbG9YAG6ZuLZmAFDLvwh1kHBdXcXr57raKs2M7DTr2DyX6fLg5ZU71Fy2rATasGC2LLQe6aVC4dn",
  "key3": "5cKnYe4fEB837pP7zNg2gkRqW2DZZNQi7mkc7nWA512k4RrWjaSuwCjpYh1eRHsjq9tRmuf86u8msTM5vZNoSScq",
  "key4": "CZ2SusAuFtg3LvkBV3au7A2ku7RU3g7nniGH2BztuxMvtFQRLuw2jDouVetUMnKzh5szNj8HzjwZ7qSPYo43AUn",
  "key5": "4JeTej3FTpZXBtpYLNEMarJw8jmSzCUkinyzyr6easbJrb5KzrPSHs1t8KKLsxsNChQoGo5jyBMM7TSudreJ54V9",
  "key6": "3HT4Uqoztm9KC8iJU9X3YeBM8Do53RFKrRXnzYSebJDaQfGbWqKjxTn8DnK28J9EtJwB2Si6oqjkmaaUUijykkFS",
  "key7": "3A5CkQMHyXwzNDoyhLgxN96fJSEog5nZS3mBzRN4KY7LtJe3egMAr1eSV6D34DJycHDgsnSqfQHP9bVkj3iVTXxT",
  "key8": "4dAjyfbDGPeT5Gn3SPD9zaA9wD8cvSLp7KyzY8f1tzrE9DQQYfz1PUkK2oWHjP3AXfGy6hoaH8AYnWMEp3aF6gv9",
  "key9": "5Ekx6CwKSBBm4qcmkuo267f1r8etA61a8dTtEpnyUF4y3ZTfcDz3yJgFCQbPVNi9vyuEHyAows1yXnEaxvcs9iF5",
  "key10": "3ykQ6sg1J6gSHqQ2hwxmhm3fqaGfvP5nvpnSkPnsE9cUcpCYTTFBBj4ApTXagt1wSU9z8VKfWZp57faJsmzwn11b",
  "key11": "bFtbFbUqeEUDJTfayjLAnWLBPejdSxZfkZxphQp3VDYk7T9wSBf9UbvXprFy1jXQ1LR67dMg5HwqV3QBBgdkGs7",
  "key12": "2L1xUdnd7Y8QRmPKK2gaFm9VWZ3XKnHxJFXZVcKMMCKJhjzM93sFaGkHJqUwCQBD8cRTugf4jQqvqupiqop6accn",
  "key13": "21yNKFD32qyBaumzYfUU7uRJCusHbNiBBtEfvcBgL7KF4PYP8tw4nA6xVKFeffdSCxtrS8vbHCfAYowsWJxrVzXS",
  "key14": "2qb8YEyxfsJp2GeG6KezKGQy4T7yqRU68CjSyGqDKevL9Cm62Vey4v7Hw3hjpznwAtkMt2pKBsEqKciKgGjmQuHF",
  "key15": "54vPGzg3UvKJUuRXeRzmR967zyovyH1kWiPjwenUsz7fW1mx19Ajgk8iuAghuu8buPv4azmj5zXt5HmvjKNWrfmh",
  "key16": "2mwRuv9CMfJLW7sWJxPA86KWp6jQHmmeWeXhc5utpbyxqvT4bM1D6unZRotnSxV8gwxqs2GSMX3SLgUtGjVQRAXt",
  "key17": "o93KDhy2uZWFkQhvb6rW9TbYD4Cp7PRv8Ftx9wbzzaWgMknkimUsc29qozuGJzdJmDznRS8XwRXrs3NQxE7MpP7",
  "key18": "3nmLSmPzH3q4BTTSvP3m9LLDKSBrugHenQUPjCCdN6Evr2bvhG2SKnBSdBSEoV588WrEjqZ38QLQiFxXz6weVtff",
  "key19": "5hakJVanLLvUeW6fDkH8q6tAPTYVwdsfVzxSNUeXdzdMcM5Utth4U9d3iivy9LEkBMkoMcvZDaMpax8KdNm4U3yn",
  "key20": "3j8oqaYDkexTg5ZAhGgnGyqjpNjZAVz9X9oeZsTkgvff44mCtzTu9oZzRBFQiPQ6iWKqc3TKVidiiQNvvhNvLfMd",
  "key21": "3UYknVpCrcKCy5hEhTvko8LeMb7ft37j3MQJSu4f5PXL4WwrfzRss2aAF2UA8itPQtpkWTqpw8KzXf8SER1LBvsi",
  "key22": "3wci2KaDZs9Zv4xCBusMWvyZb3JX3Ud2XTsmiC97z4pwYdBRRbJCSWh5vh94EBvZs7z1P7wNH2qsCnCchDu7xbqD",
  "key23": "5WS2AXc7btLMhUgo3oQbSrH5QDKouVq3uQ6uif74uQwTXKKwur1yCnom8XkZc2Bfbonu6yP7ptM6mCUA1dZWJejX",
  "key24": "4wP7rxmqNuFGUowdpYrX8CPBT3oriEs3BjDYMBTYqkN6Xi2KFGpCENYfsQYL5sm55sbZEh6BaQYZdfxykj4X6hGE",
  "key25": "2gQ2f2yg21RqP6c39bBLhsARdsMXGJw2DsAxgy8vHdqVgFXsfPqSDWrv6tfgrRREQY3x9NoUHqnWYWyRmWpEXZSB",
  "key26": "FMwZdPQdLX29RaRkLPJmsFjibbtjU3GyzCEA4Taq3wdaEJJs1xBscjJjpkMNZ7v7m2gFQGnvjjXwrJLdpYPdphR",
  "key27": "5PaifP3qUM7cM2m8wG1ZGaNw8cwCYFZCjJwduhjJ5VpaNmGkZzt6XsW5aLH5KjACaVjvaj6a4NBevDhTCTBJFDmY",
  "key28": "5Uh1FVu7915JvNho4VtRWqi2WBqyNFkpF4KE9d3R9PatPHeYzGYQNohd3gLmxgfvdwKaQZ7px9qZSN66PKd9991f",
  "key29": "yjQj4L1YABkX1vhqKhhYbxXMggkJGwE7MjePYwGhtU2VVc67XY3HZn6XphsgGBFNHp4SKYkmaXhzSDdRogs2ApG"
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
