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
    "2ijHs4Zi4iaeyVg2g8cbrMSanzzD19YUWUAW4ZycTTMDC3koJhA9VtVWXp2bN778ee9RiJrED5xHUmydyoAhePyt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wshnmAXqfG8XZ5hubofJMrXNYmUMj6wwEMgT83YDPXhqNT57mKY7nw8JL2ZD6MR9CitkBBKLdTMcS9C5JnkpH3V",
  "key1": "2u9cb9kxYyw5PK636884n2R5TuuwDtZbsEzTpzm75wLGHTV1W6vcJiZ56W6QRLJmDFPbBGw5szWjigbGENZf3q5f",
  "key2": "3LWvD6meMAb8wL5pr49Yw2RWfcQBNAS9X1kop1yoecoSusQ1HUt43DkHEjwrKJ8Pdw2ikEWz2FGVWcN5TL4i9NCT",
  "key3": "4ahp2Qa4rY9fqVrww7KAAKftFw49AhRcqEq9oDpqq5CZk7g5fouVmWt4kkbYKH3upAK2nK9bpnU4axATZ6HfKbEE",
  "key4": "62uVWRZ8MSkvyMomXCXMdRaDvEcVCEvHQFs28GjRXc3BQqhFVKrvvQbukfH4Myfa2GkXosGtE4QT5mhMdcG27jXH",
  "key5": "dd2snCPKhnwApAc9K5X3NtVhbxn2ZkR8Xqfuw4hFFS2UGXV73jtwSswenHsWLGTumkKLd89h9QCu9oKK7M7k6uo",
  "key6": "54qNfhkcu21BuSwgqFAkvXb6CimxCnuZQy7sXZ2ce7peuyWoB7T2E6dg2aTjuQPKSvYZJ71B5gXMqiPfSbobijX3",
  "key7": "4ep65XNCPPtLkBJTENgdT2P239oA9ZgutGnKaDVzUBhLijxLQx9gFa6V1jsYgHyTfJ7TayxywHkLEDDYZfPjanta",
  "key8": "4bYqsZmuGA6dd5cT6ku9Cajareh4NA756CbT8XoprAGxQaMCU3tmE1kJUjT5iws2FJEmqHGFncsUev2U3PdBq238",
  "key9": "3gzwSgYiCbub56ogjJt13h1wPCiDWibaqmL1qCsmt8rdZaFM6uYALbHhNDY9szjF9Vn4onbwuqR1Q1TtS4JyHY2N",
  "key10": "2RWJAr57STpu7gzMG1CAGe1wUZU5GwcJ4c3WGxNvJFA2nxtPvmPAJUcRhTpaH2SD3mfbKkzK1rteBs1c9FgPCMjf",
  "key11": "4ZiTNfkjQT2yEWfqAcGtdkrxnA5DRajqN96RKhxBZJzkvHy9DDr5o4s5u4MP5U9DuVU4yqghpPQxwuXgb6SXK2hD",
  "key12": "JnfYt2URX2NRU7vykgiFDYhs9c8PmqeWkvxb6JcHCmvVKyG2DNetZmJWyXXUfeNHKq8abauc2TW9TLXJcxVKrnN",
  "key13": "2Ru86QXi5dyCy4skDJ8eDH7dY5hz3darodtvggsWjPzBT8o9o2oQfCrMCx4WHcicYbkVEu91UQdorQaRee2ebbna",
  "key14": "kHqXawxWeYgmrdKfVSbXtLutk81gth6wWZuustiZZn372Fr58vYgiQArhox6Z8eBeGXyy5MkvUAUT2K7amVQeDt",
  "key15": "4VLyup8YpGNZqZuwUU7vpL4AHWve1btF1G1PmCVyKbdHnFy8B4sG8JFH1DnuiBw33uwqsaXYtJULF9kgC1o8W4xd",
  "key16": "4Cu1jmWiNhzY647efU7Xa4tYmkMM63J2tgp4wUgzm6UDHetfaXMavwfhqDVnwsfoMnfb14skNpZbZXN72bSqVdCi",
  "key17": "5WTeTKxSjZ7g5FqGCBacUJSB5xaSB274uuAijPVTAS5ZBN4aoZJrTsnWX9eBuZdzRasdP7iDLWLsYPePK8GHc8XK",
  "key18": "cT3DBaE6vMdutcbvNNgoPwy3bdzPQCY2UdJntiRG15aPGwWTfiH4YTjaqdVEpNnXCJ8cuiQ7bg8DVLVauM6SKEu",
  "key19": "2kABY1KmLWEZB3dTbmvdmfhTb7avxg6vw8kqM7frtogLf1beup8pnq2t1dFEx7K7e1YTeMYaqrPQnNTQL3GgbtS2",
  "key20": "4FXp8AfwvWhSQsMUf8b11pWzUcDrbse4ghNWc53R4JKZoqHCxu1y9rH5skT7CVnRVYey3nmKKkU2zwgtBoNTX1cY",
  "key21": "3V5ZLhisubE5i1Y3B1iePb1EzKxBEAMrCAUYVHPgxCre2orFcbMxcDJmYb448JVjqiHHZd1Pbuu12B6JTZdzH2cL",
  "key22": "4ZxpM9eM2nRwbjWVErymuvDQ5H9hnUNd5JT5r4VsiGttQ4L2nikuG7eHTF8Kgj2vKT1ttudmqsBbt5AcXJLj93Bj",
  "key23": "3sqt7Ard7cAL3v9MxswQd6XJSJ6KdE16maDRnKD1x8NCegQNSBUHebWqfm66EEiDtYAyryzDYiehLweu3tgH9p3Q",
  "key24": "41c4Zb3A7uoZrab4sCPcYmJZzin1Uc32WeR4sFEQC3dWwmsMPy1QuGoeCciNPfvXpGRWZkfr4PtKpzmVgKsaPA1K",
  "key25": "5NotYapiesKit165Tbw5gCPyAqmqQSmWxsz71Yheq4PoqidunBCoXTwWpkK9vGoAsVxZJZz3rHRmSbFLPFoqFrf8",
  "key26": "5ZfpcgangFGDf6PXjEhqAnoRuGaWD7sbM6CG96DXM5ikL99b7jUcsB6fXeyuAkpxFvcUDwqhs3hiJBRzqtUFXboC",
  "key27": "21cN4Uad5XCDMtB8XpbnMGzpkjHABaa2EjAcM4BoJX4BcBH1hC66diUFkfU7ehwr3CpJCQ3U6b7gBJaFCAXhfFuE",
  "key28": "67irQsKoQx8J3iAc8r9J3ppTvCajSicA9AvQUxHAShjKsSfhzaxTtchXqptzpgv7KNkNqX42xPJfNfmZgbSTp6q1",
  "key29": "SmnA82bjvKz9oTj4ab9u594msvmb4KdATo3yKq9WpENwYmYnq4ZZjGKjYxLrMNekwAa8oGJbgfo9T7keZXEEqWS",
  "key30": "4nDThpsLCyeFCxG4ZFnLnp5hUCmUCJQuuuAYsKykSuD2rozM6HBfXWxTRCza46bCe7sdGtXwxkhkqNc8wNcKs6NY",
  "key31": "4ZWrccfCw3tdfE14zd9kueRcN1ZLXDXBVpSJkxghvWQbkDE7DDoeVs8fc6mDkkWZxkdP6MnuVCEgXEDEy1gx3W31",
  "key32": "5N2UvVsekWpLFbmnRN4WEeeKBsa6Ca14S5C5NUJbGDFWZq98ogKS98ktcmFN2UE6AvkWJXEzL7xqo3ZLKfv7JMuK",
  "key33": "5Z7NPr2S199CCGZCfh3gtUXAEowwqCLzuh8aHm8RBd5LaeuUBc5bNtQnPHWnBGsJEoqEZduoXmNwvRxwzj6aMWky"
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
