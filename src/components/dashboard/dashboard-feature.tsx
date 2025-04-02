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
    "4W5azcfurTFomzQZp4tGmoK7Z3hyZAL8JvHsba4afzo2nYJDTZcW3Pbjtfix7pkNmj9ysvGiBPuYmdivkG9Yy94w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HBhj3NN838Wv7YASCiAcpfaiMawTgKu6icb4uNwMEop3bz6LxjQ2MxWziErGxtzhW7HEfJh2cybXq2E95H6Nmaq",
  "key1": "3xbFtNnCFpf85kA7ry32CDYVQRGeB4RLQagmF7vrMtJ67yXEmYZm9GQmYkCo1gALSLenPNu7oDUHArFM77JV1LrF",
  "key2": "21M5LF6mcKq26C4mzxTvAmQVVR8xpZGJpAGnmrrz29KQnxE8Ucw1cGUvZHyiHQAgSu6L5dhyWH4VcqyFQM6xC7Gc",
  "key3": "3UjaiiQwYSm75z2TwonLqgo2e6Kc3VUAnLffhrgWfvdYHzXeeFf58g7jRcx7EAwH4Kva1YSdttftrQrXjRMU4TKf",
  "key4": "4UgbvpbdFYv5GFyJDwrM2zzQnH7bvABWLXBcFReDYQbBu4qrkw6SYXZXNPoL9pZdM8jsqqLtzSVzrHzx8eCn1vVb",
  "key5": "327hbdHm26mEcypnjoZjF3R6PqrYQ7uyCFEUdRRfr2zKsYfecthnSFWz7WRshxt6dp2fMdBDYGNTCE9KqskyovCh",
  "key6": "3kTPSM1NGiG4kLuHmbpwPvtk8LwivurRJWtRJ9tFYFFaGFGnmoB3g7fyPzjyKUJUQ8keLxppBR6L7QbQzBuGytg8",
  "key7": "sApuP9mEZhnRt8XQAiY5UXtwkwaNBGpJfKACbGtyH8PSuyxepDUDRzo3jAjJiTC3Hg3ebVMtpmHMoXjW7KFXgLQ",
  "key8": "5wiZn83wuW1hy6qCzhvwzrfxKnmHT6RRXue4K2SViRvTX9qzqkpBFS3kRsuQzzgu3mHCNxXhb8wuwvEBXGoF2u9w",
  "key9": "3kwujoGMnFiQ7cJHfvfveX6MsGi8A1wMq46bHVWncZbwAoV56Q9MRqPBH7UUwa8oojbBMU9P6Fo39UKM3PVVQCwq",
  "key10": "4mCBXptP6sjDhXyUF8YB5ztDk2QtekcFVvLhckyqdfHZebzouvecwX1gHAgw3Dq1T16uZJ5mERsYf6zq6D6KPcea",
  "key11": "MPUm2GFqFEK1CqLrVQYQ8JogADdRdeGXZCZUXVEYn3yDLC1tXFpHgBDG2HVTbjBwnfezUwpt8i57EPYamdCayTb",
  "key12": "5FYtwFMNiikWsYSgPf4AYVDuuXsX2Gphja6zy5NYcW7CDbfaWrV9YaV7y3A6bQEJzU5dLMXpPxWVv1kAuiC4nhKU",
  "key13": "3FBhHGMy98FWSR96VMhsEeRQcDpSdnHB5YZ4NxzmjjXG2wT6FHJQ4t6pMRmiDSa4otu4YFFyZiUHUwB45d889mQw",
  "key14": "4HqDQoxB15bniV19djyQnFavYJf4tzGvBt8PqXtGcPhB8aBmbQ9EGYoMyiJTSK7vSV4yFyFuCiw5QBSftAUUJsHb",
  "key15": "4vN3c2UkN99wmcxkpkf16qcrCpzaZrGaAVwVFhpqvCa6eS1MhMxtYyFLaQQyKuNPLFsTxMeKi5WWu6EgF66W84vF",
  "key16": "2diHLiyde4yzKpwRDfie3gnYu6jjFZXUPSxLaTUbBShR7Yizm2HTMewb33hPjGpn4y3FD4gVwQX738qUYnrWcSsj",
  "key17": "59HRt7XxJXKs3asSDwQERhdRuV6Yq1ndVVax4KWKqgyP7hPs2VgfiSEM1bTB2uxwmwKkRtvRqbAsW8t9H2snHj6T",
  "key18": "6EANqo9f9kXxrtchE18GkWWYQMJyMHE7GK9PfofRDEyote9TwMhrU4zYr8UbH3AAVofcfUB9XF7vH2qj1QZhuyo",
  "key19": "4fjHZLtjz3u9ZFdCbQGYAfyq8hWZ3LCfWgN48GHGsQRyXpx5tr7zAgfUbLRFmhmKjKEE2rFEqCKFBZzmU3aQLiWa",
  "key20": "5Bu7trCuxedSzmiL7LZyjgE2UfksC3YPUgQTD6QHzVUrDYohiExiNGp5fD6M3z9whrBgM7PviMabW8F9FsCjxT8Q",
  "key21": "5ALerGXJHnLkCXEE5r1yjMePCprLuT3Srvjpb7JiWHaWrxsoJrimTwC1cgiotpXefMswLKVUKbGLZEBZ4Q8G7ZGM",
  "key22": "4h9wggCJDGNZn4dX7ypxBW3iRNY1a5htPXHQqu185kCi3FEh6x7RGQKG16UezfAVcZc8RbDZ3GBeLVTi2JJXRwqw",
  "key23": "kgTwWTWHfarUdUbkqQAn929Jey4tL71TwmKUBZHrsSeo2hS9uoQbmwTebsRvHWcMjQYLvp1zadVobXHr2ui2ZLS",
  "key24": "26ZrKnDAbgBRBKoKbDv64FCFTXXrwxhZTrBjXEdsuSDwWH6o3D8BFNW15HNYMHVMVdgUoyzVpz6j85fmR5mDj7Ct",
  "key25": "349Fw6iGfc2Zjej4MsfvvCuPA71EGEbqSvLtMfeqLzkLXx8E4WPEoVsuepLqQdZ4kUoBoj3cZ3zah6zzWoAX1RMJ",
  "key26": "d7sSbfpMUgu6WSEJwqFQSnggHrcYdueDFfSLimh9Gxa9jbLxn7XEVUojbmUStAW4X7AkmL99XCmT3yULG1Wzojg",
  "key27": "2Kdhx8QRPj25DoqxyodUSxeEimJ4Df1Gb1SbYMMTEPNAYnxLnhsU2iLUfD7qXxCt5e6NS4XmZWnt3rpfWP5sUJ9m",
  "key28": "4Y9Ye4nC7W9rYGkFjzQVygSKAXHrJzJrPQDHX3BHA9PsZVrZDNEh6BEhT3kjthYuG4ebv3FrnNERyjcLMV7jDyub",
  "key29": "3ahFhz8i32CXf9dsRLoFr9rZzH2jjzbXynQvAW6xZ9c228LUBuWqSo4oH7f5RgDSXSjxRrWNqagXsM6Ki9wG6DkT",
  "key30": "4RG32yADBRnshgKQVAs3RPzuURfc33bbnHhjmWvrHEn8DFQgUvZzKiBidX1miB7zPkw1y6aSyC2JXLPyQ3hh3WNL",
  "key31": "4aHmh7hqduKkkfQzoodKjBLZ9vUKvtMsJzKRf4kEGaBtNYmZotjDgBV4MNC9A7St1wiB4n9g74pvkeUJtL7oFyGr",
  "key32": "pogduTMoPigKbt6j9EgghGcsGW6EC14MKzfCh8tNckyqQHpQv1gEuXvXAxgB1us6FisHPmQjV3Z2goQszNBsCkR",
  "key33": "28Hkh2YDnfgTWTAeBNNyztkGSUvponcEDHvfiqfRXyF16gdVB7ohrTqwgPoTcKSk11aAzyrqQ36HDf9Q6tSgY8kZ",
  "key34": "ekbpGu1sQyp7mASPeK2EKkLssTAwQ1nZkqqhnRxekBFCuZLhQvLw8BmDhqEeJSdNpE3ywiRQT8fVbvqJ6yrkZdz",
  "key35": "MaBw6uWoDxb4JMooVFDXKctEEymL8kjTjqFvsfcBhvTzqUrApB5gFbUC7bdqJPyENGsoyY7Bqa4QvvRppg38pW4",
  "key36": "4aL3T4he4TwyrVT5CxK1zuWiyFBZkkUT6uj281kjZDoijFbQeTsULcn5CEiLRbEojfauDCviqiZc64FSrnXcF6Em",
  "key37": "5r2tgBPNHonx61Zfh74kWMDeiqaPiK8BUygEocUKwFevTu2S2Hc5kFbHNvhXVtZW4qGBMXCaj4c6EDu9rALQoeF9",
  "key38": "2DCy6Ame6xnWtYXmZJQ3YgEtEaxP5wLpiyBQ5qGrqP1VHVgjr6zfGBGm5Eq5zsQzbBh5vAActzmxpxRqpHePaniY",
  "key39": "2EeZUK8fwuESkF9Qt6iiC934dLHhQ1g96CXrRJLJYiKXv7ReGoWun2dTLeD9Ej6CpneMAceVjy5DKuT4s4iuo9qC",
  "key40": "pr3pf8cuTnE8UMk7DUUF5zyPRvoXTwtsEsW3L467tVeX5wrsy5jW8phr9FJZdRJrEP3iVEH5zfbUQquEYa7nuLh",
  "key41": "4w7h6TV7NkVt7at1bMfNg42iJmM81YpZQxVdroZFhpCVfkixbSqZywSmXU8WimjGzqx8FaBjg96WjeUXhtmV1iux",
  "key42": "fon6m3rkTkQnX79YZ2vqG6ZFT6wcsRWFi7M4UAUbqRZs6y18rAuEBQJpvs3vzkFcymEECR2iqTFMAKWyV68iLJ5",
  "key43": "4RhJPiXEVCYdz2aN1w6AKMaFEMBYTJCUVWMU8h3Xro8WKwE5PtHErqQXEk7yP9GfncXYTaJfcgNm9FYoWCKZcGge",
  "key44": "37pNRo5yWdDDLbeYq9r67f9tezY2zskTJAXzagWmhrRRLM2WhNKi2osnePRapkpb3E7vpdXSotGKLc7Gf2ZFhnA"
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
