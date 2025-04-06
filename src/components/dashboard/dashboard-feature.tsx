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
    "zusGGPb3QLCM33SmXFBj3dgBnZtTw3FiJXEViZNLvGnuJ7ucyvLz3Hf23RMjro7rTYUCvhhMV6osCb43DN64RWZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SYfMcoycJNCvbp5vHKxQ8CDA1CTDrCqSWDgRsxe21WxAc72ckDyuftN3zBd9gPH2o6dZUbkzKX42wnWA6HYAeyd",
  "key1": "5M2SYkVpU6QRrH7UicAkF5jTVGqkr3hvAXTq21nm2oRGkvkDR7SH9PAt8mSCJeosZCBzNfCp7jZ88WkVtxJKLs13",
  "key2": "38jBCa4wrrpUUPxmEWNyKPbsGVtLHXeNEnGo31QWqJr4EhFpk4SLJkBNnDJTz7RZvvYLpBcDP4kkR4i4hvJYMp6o",
  "key3": "2QKaSdYLJsypPK7JKUFXrz78jjTABQfPqoNM8kTRDj4LXY6Rb7wGsJd6RSEUXwt6gTqrbTMyYarNo36p3zbJCu5B",
  "key4": "5FLVcgqr8mmhwHSButzitiiFpxYELGRT7zq1YP3FcvWdaTUCSQyt2Kv3BVkHS9LkjtVhrmTHeZArSxhMzeQkqmUy",
  "key5": "2sJX2WezyKv1gAj8xfZztuAPmnkpBmVA4ntR3eEXpJ4fzqUNa6mkDs7Gu6E7vg4bGZetLRRz6dvqBuKMVwYWKHr4",
  "key6": "dUwnfGE3MhsQiHTKTNTQD8g86dXtpSmkxEFVW3MZM1MTw5qTfCJyGEdBxRkNA4wkVBVFvffbDyksTLq7W3bF9SB",
  "key7": "54FBkNnczkgC1PM2cukRqYyHcKjaGTxiZcPpNPJbu2LSwveNmu9kzx68hEQxP8AbQbtP89V2LxfAwaFqMmpxWJAP",
  "key8": "4paQRNJZ1ETP89e6X9HvYeNMsq5tquZsj8iHNST887C4W6Wn9R7JahxapdDen153rdygvE5SX5iuMH6BabWBr1pd",
  "key9": "Mk6LBJkrpz52r5xRpjPWCEthghwRsa8QmQsTwWD2ziHiN4AFYfynrQWf3w1JkRT9braw1eRaiqyKzp8wmJEZubE",
  "key10": "5BVVzAbZwJoggHP2sptzDLk7rVytSbZ6o984MAo9v9teJSbfKdL5EvE7siBVQdb45aGexmxA9pbnewXbnTMmGeqj",
  "key11": "66r4Q4zkU7cgzeWcaB6gGb65o5XDzQ56f6gnTeG9vBZTsrG6xxeBkQU5gKdi2LWVQ7Z173xqc7fpGEVorjC4Hh5r",
  "key12": "2hmRtENnFRPGUBA8xJ9jK77EegBFW9rPVBWhbGjCXXE5enA1F1hXDR9vskfJ5z8M8EYK5QrKs3fjqCKbsGExi5Gp",
  "key13": "3p3htQ4heQBkDW4FAjUUSyWre2JH3ce8meo1dfs7dD8YiuTKfhAjVDjQzxzBjRbwJzurg7hHLNeD1C5oxUJPXGvS",
  "key14": "3daR21UAusR9r4dCuHJpk2BocTnHNdCyixwLaeozHN83iWZTg4TxpSqe3UdcVEimjnfDpGVFJyn3xxZxYrsgeJv8",
  "key15": "3UgwFKJoDtxgacjQ1zSm2yYUndAGHmDXJCuiJ8to2pCrMHfwMjLRnd5YcA6yNCndQuuPHphCwneAmVDvCrZFeVu1",
  "key16": "2UtkqMcACDTP1Y6MDtjEt1UFNTzrH2u64pnbduD4HwLrRLvvUr6TkS9bxekkXNVkwYQfrUa2KHedjknXZNFKi4qc",
  "key17": "4yaQwhGzavYx1pUoL3vgiVYxqm4didpG3Lye9KM7CnyXQ2rTYBNUmovhYVVkwGcCfLXHYmtMj2EvujDgKFdKVxde",
  "key18": "4zgMNutJi5qogbatBqYXE9gwayCS6hKcBrrHx77eCABBG7iTt6SUeWCgHF2axaWbgXVrzEBUkrM8ToGrt7vxvbD1",
  "key19": "CYbZjDFpryMwx18obYrRqrprBiy8wLFn6s9dg74mjWPo6TUw6F1BeaEbqK3G4gSDorRy2AWTettjbPY2zvmPuU6",
  "key20": "5Q6n36f3ZAZCCMK8U9u3tyFfXGRQLzCXHUgyENFjN2BaacavEgYjBnFNvCDgzv1opyTRgCoa6T5ngjkpFLvg9Frw",
  "key21": "1WWVpLMx6tmbE854AqY8PzY69hq4uRCXEpkM8WEsjLbbCvsLMpVe6m8YWZZB7XmfHsSEBUiuEW6UHREk4avFBdK",
  "key22": "41NNfjHqyRhkhNFjuxsUVQcgGwRFjTHu7PLbB2Hd5LPswhV9ueFoEcwm4YLQPJUHnGea2jaKMxW2G3L6hPBcBvKC",
  "key23": "3h2B65WQwgZxugvqtDBCNAHyizLtUyyvxdkeSK9NMQFKYJMdnLMiq26KVZKZfevZdGrXfWX1w39q9wiM76mpfXvs",
  "key24": "df8TjfcYfJkxkHpMAdRABJnwEf8Wt585DgNKM8AWTmoFge1PSswy7ZkZng9YcaAa1BNhq4hVdrwCfeTTM5cLcCy",
  "key25": "2sihMr3LxH1rmQazSpJZupxEpWdkt9FagQwuwgCaHZpAVGuwCtpmV4uMJAJ5yBn7bEfxJrfz4srikbHj5sucL63f",
  "key26": "5XGwgarhoRzbxNntNVLuHnAxebNy549HoW9B8FJngeZBZPKgWqXkcjo2SjGp2xkNkbsQvQFXXBLxASJuqgNzKa7a",
  "key27": "4MK9uf2yrZLgkpP4cRDgKZrVZDiVoiUPds7wfARfPuydM2gnkvEBmpNHLfBuTa3EpjyBZCpt4DV38tLSjFF8D3mv",
  "key28": "3vkZJBn4vvF3NgPQ6ryUCCkXNfqb5c4rZntLWzjYGafdUQSsBK23VqCcJs8mJunXa4FJWcPv9BRR7hxqRNSD6p7V",
  "key29": "56awD6ThzSmbYMSNJiHJGKv7DazM5BNP8SR7V2RibSfu8tpvHNAv2CJZ21ZfF4RzUYmkwXfMH7Qb8Rky6TVZdh9a",
  "key30": "4NRsjj2zDdA6J4fVy2eBsCbcKzCs3HvQ4bQS1hiZVnk5PJR57Tjq7DE6jUaX2M3SAADkuVCrdnBpDXCQPkWHLytP",
  "key31": "3YP1TnPXtD5iJEVKV92NsNDGdAjk4up9LvXw3B1UJMDvLfjypY3mGwH5RqhbcWKpuqvASZt5ixEZWyQRMKa3Q72o",
  "key32": "2MbJhEdKegW4FEowv7Fs3FZ4UDCc2YmtqjYNA5d9ZTNxaMi5bm2vrCVR9U6113JmWDx8R7SQY2PRAHvkkw8EgDpR",
  "key33": "3BeCB8S4nqa3smSvwHTbVHcRhygMnpDWTJCL4R1Urvfm4DjhQ5da1wEKsuvgqVvaHbrNHXrdMGE3s5eUiJTpxaAm",
  "key34": "2uhE81Y2x6YV5rq1QpBjwuUDYZ7J9PxptNruQC94S4KEGbACZy9pWTxjkWzoLkHXYFBV1UXMe2WsUDYr1cUYsp7g",
  "key35": "3J8mjzEE31Y7jG94dRqAYEo77M8YRS236XjJ1JRMuthdAygzYs8AxG8tCL7gVXAyCcC3WMdEkik1APrvKeKGLMyy",
  "key36": "46nom5RRwLhV7CMy4SbLB5Adinnpp66z8ag6vkQ1iDTLu3KUbeCekkxh4ACtsv1A9rm9aj5h3E7pDFGcLzof37Ex",
  "key37": "3QkQuxfQB8FLZRMT8WSdBH4456p3WQ9fQuzr2dkATz1HmVRb5vyJNdZvrpedx9rZdSyLCmcZWM7953MiTKNW2ZJo"
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
