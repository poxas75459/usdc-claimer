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
    "2CemzGBW9PiGgYWRJvhfo2jnTbmWpuyXFXbbBKZe8DtjmPZH3K1xpuevUYrGYkqNykPje8Gtj9dSzG8mX6wLCzWq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q6pFkotr73L5J6tJSb3PCuGLck9h8vJ9edRzsEYL6aMeWm1RGyfrG15Zo6oWH1MGbYWYswV6DL5FGAidZhEcfbw",
  "key1": "2KC2yrrkDxGnwSCvcnR2nLEX1jgKUz7HypGdxjZvbh8oBws6o2rWwLR56RwyPFDvYJgbXZEUx58YYCZC9JB9h1rP",
  "key2": "dEiz4b45XWkunegdxVWUts6MHRwgvdMWYk2AHCtRJZ7g3gMwVLFPgCs6wpnkJzgJRX9j6spWw1fKt83acqTbhkC",
  "key3": "5sRRNvjSb3Z1CXCDtv2iwzw99jCCq4WBRPAUgBWg7VvwoampqXDf92yi7B9upbA4S1sKN4DVbDnv4z3LQSSNAhLX",
  "key4": "51fEjmXbbq9z8p9DHJqJQPoABhDc1SQS7u78kWtc48Rrk8PwVwQeV6x3KDoNWKKwadocv6rDdBjqzJzN1MKxRmuA",
  "key5": "47T9oTKXfJ6hBbPoLZFKiVD3Qheb8S7ziCZcHHxtVb5QinzTFSzy3cEMkbfBjqVxo9MJwd3uUEqj2J58YTDWJjET",
  "key6": "4PsWdfyF28T8aLVuqYWRX9pBWQiAWCV5mZL2ewxdd2cMBPJisQ6Vz9ysAdjbZyHAU2YV4J5mENxx6tsp3WJV3HmX",
  "key7": "5mncS1gywuXQP8k7cawTaie5oEE16ZF6wMBPWUyTzGwtpmca87ANSWkiuxNTLWjKfDddnGcTBW9hx6qT4USTaY2V",
  "key8": "2AsRcn8Xj9SaxABVyau8Ww64Qk55MetDBiQzCnBuUYhXS3NEpLkZG5QTjjZWjizWo5qU8JSFJDJ6qnzHyK3XbCRa",
  "key9": "cuh5DNqXC56pMzQhYaqng75NGYHbBzaNbbXZiyrGFq7TsMPUGXBbAp7Tqy6CD6qjm1zGJjyFcF3BkMtGDWjTuZm",
  "key10": "2nwrgbPffeAGBXy7ZbjEbUvaPQBc6yi5H4KHufvHDGXSQjtLkogx9rU5qE6GeEQFt8KELgZsGHtMQMVWmv1MAnku",
  "key11": "2fDJptFhZuHDYzvZY9WZVLwtYtrZx1LmAvw9jxwxf8G5beVPJJnt9NghG9SaEdB1B4FPx7nb4AAeMZ6KM4tKhiEH",
  "key12": "5z6HhieJvXT7s2BJ5SYerCtspYEuvhi6nba4VXEDAXBHbWvYVcCM8Ut5y3JckHzTFrhJfHcsBZBXPowbMAbUGCuZ",
  "key13": "42LN5utTadXQ9Hc68ktc9nzwEcFrE6zX9w6kXiE1Yv3k4CechBM7RKMm7phAFrTuYMzL9SAeWgptkRcDW7fQPr9S",
  "key14": "3oAbzQe1aUQfN1vpwQBU99CiHQ5h9neG3TKrF9ZN6RDD8C4G4uaoE9uKtfro6kTcpv44gEjJRSDadkQjgnRd2eNy",
  "key15": "4pwNNBNZoBtERRB9mns2P71qXd9NxYeWhoQo99N6VAKs4YV4XEcuZcVVATLbpoU93KQX4NNxgBDEJKvjhPw2nbQk",
  "key16": "5rp6oeqAUp5G2bG6Cu2WE3Z5EoNZ8dmyevwckM68QazyB7TsxBps7Md2fFCy2M8a35Bc8uWNADUg6g9ueGWPbo8s",
  "key17": "hJ2q9EMWkJhskZPt8sVAh5Kd6RJWahRtDmxYodHzZw7GFbGq7LqC7dcB7FnyZBJeTbfmwfiyWzxUwtHNjR5VeCg",
  "key18": "23REgfGyTmFGvM563aiZJJj3XmrX8a1ENb2WicPNscqZEEMCrmgCNq7aepJvvxqwLoaNN9LuMkay3uhvocAWsZp9",
  "key19": "5QiXg3Rb5dm42g1oj76CQE7obMxD4Bq34tdR9zbePwGq1RUi4M1AyuqoNViDSHcDv1BKKUk6eUpJGz24JK3QzLhR",
  "key20": "2bY8u1sDnNY4yiFYAxKDvAJKbrNwPyjNe158PPRDFuS4j8AqWxUeJqhVJgZsF4LMMSgEAQkhV57X1qnY8cU7hUkw",
  "key21": "3rVEfwh3Wf8K6JNV84AiKcuBxDMx4vxeMnzdMLMFFDuh3ydQbKHdEEr7KCNjKgXSyrVkW4RedShNbEtdJs37joEm",
  "key22": "3XndSwV7KARbj8ECeq6gbVoPuDFC9NgiqMnqs31Hnv2oWk4UjCWpD5LSNyVtpX5kUzKnNoHFENiCrD7fG4Sx5a7S",
  "key23": "ReiWbmTyaLkVoAGHLeBgF6q6p9K7Arrhm3VhDnBjES8YQ69qe3GYX9n4gjh4qYZ24BnXxcSLZVY134e9pHfX436",
  "key24": "2aDQX7PtLFSRzZoRJN6pj2HG3nr1CrZqacshevTZV1yDDCjUur34ZvLfpaV7gQqjvd29cKXgqLHRKCYe2puWi4so",
  "key25": "5jVhXTbs1NwjwHS2xrwA1TfBmQbrMdh1ieYajmeiVcoZmsYSMfwfdusqYPMe9sPuFatvKx8NSw6apRwE67VSUM52",
  "key26": "2VoLFqeo9BgBTaCWVLhHiyRjL1RgCmuYrCFFsqXSArNX9zczX9PjQ2XEhDPM6UiC86fzJ23byj9UowhhGcwGSvCM",
  "key27": "5YgnnCA1NwHGJ7RfCi8m2Xcq8f1ScEmVQLWuHDL6NfAbm2m5YYSkK96vEfgDrzkAj9uX9e3AVmQeSFAiHPZp76YK",
  "key28": "ES36a4XXjpwQRdY7ZUbuaJ88Hh2N8g6BGiuuEqxZcFJPJ7wDMoM7brYGEEwniLhiPxPE9eup7W2VN85sm93qn7o",
  "key29": "5c2drcmvsrHCwoQwa2tytp7cn5sbsngmPTtYH7HVbHQHEZgvsdjZcMx5Hym8gxVVkcHjpVtVwGNE58YtUxSjKAo",
  "key30": "2jKgAFC1zjRBUMJNsCYvDheoqmpVwURMmRC74YovRkMdg7Tzbky9GU5BeCdESLkbP428Y8bKHN1djE3dmsnsJgKT"
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
