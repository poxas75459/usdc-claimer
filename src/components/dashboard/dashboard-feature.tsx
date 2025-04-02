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
    "2ZFL7EJVDrK34NKH9LuYUf3Z7LrZaoRS3UVxKNqGgc7b2So8f76ux8eZY987UC3UY66CvTTufrH7ty3ENA86X31x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q59gtAKtCyzdZow9Y4JsjygwVqMmKt62uode17PvC4rKnY2GcM23igrEGj8HQKkWGijUGZBzUzmPuDkXE9oyAct",
  "key1": "415DfFx8kSGmdHZdb1ewkEKAWSUnWnWSaGmx5HMDTsWavjoMABMb82RtqFGQNNNKBAp4d4XrcApLTBNBVfvyQHZh",
  "key2": "3p9uHn9AdGQe4kBwoYnnbgcqNJgL6MLE2jF4Yb3Dvj9n6akJJe16Y56at6MzD6fXzToSzJYct38KYScF9GS1nBBs",
  "key3": "5PdBtqxZQg9dqhgc9hnpiUhZKEx5qu75qCR5dLwa5dhaEyDqRhhyzkLxwNAEdzxAWFm5dJao33Byx7ydjE69sM9j",
  "key4": "5MjkoFcwqF6puPMwMHZeQLrWrXmnFczB72DiymgDw2vmh7xSZFNuC8Z5CKvsdLeFxQmqC9VF5GCYjhnE2P18fjha",
  "key5": "Pg2recvcD4CnAi3iYaUvxsgR8QFTjoAHXKRSQ14RDKQheF34SzoJUjWV3ZLtdQ8GHZ37fvVgeTdbwgE82YMYfRE",
  "key6": "3uYj4vxMwuLv72Ef7Yxk2HbLumUZ1Km6nfNKnxUQmYUPzoJJ6qp8583Lc16BMT516nRHWhMkfPAFvn6jQB86SgYd",
  "key7": "3HT5oXCNNLsT69JfXJpBytMAADQap4QD7b2uJ8pFhFFoqiz1gWwADmTtCmTT6v3UAy5AbopcUnJAbey4WpKXVaeB",
  "key8": "3YHfQgbndgxg2jA7uiksorQpncS8YVNGisxtWYraCRVqUqKV9yD81g3LX2XmvsbvXn4r4GKdYeuRPy94bjFhAsDu",
  "key9": "2oz3gJvv6ijJWFg9k3qRV82kyz5SJ2yG119d3gubtCJ6W8sKJLx1U7N3fcgmxNt4ftaao2jashXh9fjg6YYcfJ8U",
  "key10": "4HGY8jPqnFwG6SqLuePn2EmYwfN9itwNEHxUFWwpzNMNrUmkSDmnhaG34GGwLeZ7auei5CkhsF85RP9UXth9qzZH",
  "key11": "2Yy5HaozQHpNGGbEXQjhApgwsidmae7JMVmeXmaUC1WTGb5LT7mHXZQ2rWATMd6wZQnHRcnMhxpF5Fs8njKZn45p",
  "key12": "3TMKfFepGxr6ouDgTMtU5Y59rVKTAinYL3KZFGrjWbnwN3oUHo6eEwc2zxXWV5BNxqsBX71AJa6ZU7eRbrQiQQTA",
  "key13": "2v5U9q3hMcnCEAgwDqHzgDhAD8taUXRYX6jkW7KXtPVPDQQtoEFfmn4PV5iSAgPt2VgE9HJwxJZRGuCceN1nd3jK",
  "key14": "2uBpDTvNL8KXWXDitKwAwjwbqP7ZS2Fhp1eDrmh1x7jXbzRvrYdJ38EzyrqfNPGmbLQs7FAT3XRFnpQ2deTNtiMu",
  "key15": "2QN4iFkLrK4ddxji8LKbvkWQNtbt3MJhHvbbGPbdbZRvKW1jzU8a6YvTZehTK1k7VXTejvFNUnkpu3prScHuHSYn",
  "key16": "1cLkZ4owtfvYVjLHjRzjJD7F2kkprnVPNbEPCPQGdMotySevRnjZSzRsyQq5xSiEoQ7YqHJaohh53s6e8fcTnY7",
  "key17": "33YqQbY1Gj41NNyM2Sb1f8iNMdUw4ryBenpCfamuSJY9Rci95AaiFpQEVh3AheX34ZvRbPzxL7nWZNYkzmjpiW12",
  "key18": "58JBG17uegzLHdPYJ6CjPL6w9FUVDbStybT2M4BSUqRaJLWxcRc6e6bZUrcpjYJghHNnwHfrwSFecYhfvkuY6yqm",
  "key19": "5LZFj3hGmsw3Tje3gTzFx7gNzRwgcJ9kTjjuTMb7fsYVcsdMr2PzrkDAGMoum1afkdJHCZCuARnJDZ1Ri2KkAe2e",
  "key20": "3TfhnUZDQwHytshdmZL7H4ZASpVwCTDMAGP1sjP8S8k6dh18XaK5DStzvRQkGoYS8gvdvTEwRMpQR1JnwrkkXkMg",
  "key21": "39PHyzV1piMm3wYXDrRPGCwYBoGNF6xLw45D4RfqBcdURGY4wL5mq21mg8ZBH1EAtkSchpXKCvJNvUu6x9GhRwCi",
  "key22": "4wpZiYUnv6piZ2PhrZPwPfjgh78x4br3ecm3Ei6cz4DkiaqNLUusGTcty9K9r8WULeAs58RrNhcRLq3guDND2tY2",
  "key23": "4kDzcDmYTG9sFLrNzRNkpDD8tf9LjRzdZHMNkYPhnHztez31NqLkXk4RjMpRrAWcW8GKTMKnEpwWfjMonHaYpqZT",
  "key24": "5GrS6UGbtjvDc1JzV8FeTsaoQbUdHrEcTExez48CZhdjdiFm6rd6fdAvNLnt9DNEq2TNd9NthAf8T8uWt2QtCXKy",
  "key25": "5PQGyrjfUq4oLxp8xhSnJuXiSkGdH2BABRLjnvN9FTpW41tc8pXANbCsnFernjJmTZJn48LbZAJd4WK3SYN8kuF5",
  "key26": "4tU8yFj8xGSpcHgRKvGBioTwmp2E3TjK7tQbsUeCxQPUQFo7AirJKi4cCrfTCBDSjc4U5ApB1VHdsEMc9cKwuWyi",
  "key27": "33duS2mmhmg5GmZJGEWrUs3pLtXMkwuUKmkc5ondfu62miueJfmVfJsp8yE85EcLYKEQhrURHoTBAHA1r5BDiguT",
  "key28": "KQ855QM9KHnmhn1rKYdATL6MvrNiZqPcyhwGHzb8JDus1o1zNC1q2PPb7kHf5Xg9U2KZpYZSsmSrhwReAUyLXtY",
  "key29": "G93Yve9CCDcjap2ZYbmx1Dvd7f9cCFeycdxSrG3qZu6EKsfLhfWGZLzqTz7SpUUgkydnpvnvx7XqEpcJNrN7vau",
  "key30": "5WdYjJCsBgdDDkWWCVpJfYof3CZjzvmvDML1hwHWNBDaQTvz6Z8imw7yu9FrgnDrE8YwNgoWBzb6t9MHKVpuwxs6",
  "key31": "kJqCJW71fvxXE5jQ9mpmVP5m5djGSHtjjaUtREfNQbR914saZsCGNK4otWfDQPqc7ZD2YRSLtn3kfCgacSymZG7",
  "key32": "26DwLbmSsEXjALk8hv8J4zJrPzbQJdAJWYP2D2EnALJpaaZxWhzFYcciKjYKouCt5TXtbPK1NSfEMLdMgjSs2Lmn",
  "key33": "Xc5h1V57g6B1KXk34qnktz7ytDWfCbthDxYx32DSF3a9qqxAQH1NWeKxQDhaHE7VGPN586gT7FSSmdRCxx9mVaT",
  "key34": "4rfarhYdux2a1w2f9YpoAZ8fffSTenFGhi8bNpJKpBGwdPzka7eHcjP7sS7DQymkELCFpSy5F9RWnBNvEsP8BLZd"
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
