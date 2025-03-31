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
    "jfpDGsj9rymKhK6WKCeWfmosG99epMHWSUSGvpJXPkkPjm8fmQuokXCKZf5EpFn81rPn2r4idPG6oAmfcENE7TD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1FdaVzH4xc6HYwomKTp2cAokE1ZXzFJfQ4WnwGXLdHbz6odzYsV8a2rseYdowsHXZfrv1e1UDm7yeKLydys9PMz",
  "key1": "41e7MCisFLywL4apjtMEuun4gCG6DfndMJmSLexvejtLeww8BptLhihxAgk5mHSF9DvLRCYH4uD4cSvdE4d2zMMs",
  "key2": "2uncGZsjdFpmWcicyn9583Jy6MaQC3jy3ZFQrmQumGMWudkBRUmQ7YR9paNkjHw4CppqZwANGYN4YxQ54J3KpMkh",
  "key3": "578qcGyrkdbtsE7xdXE2anngvLGEEYk2EPZZsiAEmPvBBNXxTRybQ5fddnJ5M2hGEnkw1F6XHF37oU91vqk4nwrn",
  "key4": "YaVoazkcFkVrTf2Lzs9bs791XvrNgrYyMgmvZUsJBLfrbsv8GydBk3g1HGYdvqUkrVGBQxKQGcBcjdaJGactRKf",
  "key5": "64KpaKjpMU2gahEXyE5mksLMcUFGrh2aJnvS4DjBqL87QDoXo2s4mq7R8fqgDLM77sMrJ5HDRi1cDr7FETLGjsJd",
  "key6": "4EHMy2t7suioQSKtWYcLUXFvJfMV7LdWdAYNK1xy2tC5VfYKFscfEiKSatukkDRnZbq5ivkHwXJcP2SVCLnm9NgK",
  "key7": "5RWwP5Nm9ELCK2Nwoot6nk5oWbad58NWZA1MPfjpZ2WJZt39pZiUgoyXxowmP6dF9BcSHnGkHsH62gtVuPDUFv5f",
  "key8": "4BrftFHiwtRms3WpXnGq7yhDdd8ZzavRdXK9JpE75feE1ahSs2G6MBfWeHhMN24avoV9Wc2MWg6fTeNj4PZwD1nW",
  "key9": "4WtSDo7UxPuT9pKobGfUHxL7qNmYuMtyoBTT663Y9h9E6jqopT42FADrjmpj1pfGh6ikwsBV6y8GZzWngjybnAzK",
  "key10": "5E77xNjxTRBv7YJfuKnBmV3Hs9TG8aK6VEBmwB2WQkBUNqPAcYhuUPNYbodoEgkqyDRLxZ9xKibbyifeFh56kSAf",
  "key11": "Zk7ZNTHQi2pMCAkDo1oyzUBRUdoF8aZ5L8eqNpgppRrRNgkEE8YbLY84K2RHcWocokP1x7JaH8eeLacS349VVYd",
  "key12": "FDZoF262td8wMrSKBkbER4iYn9Kh39PX1fcq4hUge62w4fBiYwWbPuUvtHz951DphL2RJmS5iveKMLuA1snm4SA",
  "key13": "3PodqfAVvPLxc1FrxhEhBsGkakVYeUv9Wg241Yx4ZrtmuCfwBTNiwbTJr2RRM3gnVDDHkBQW9fkBjMVQbNGBW3Q5",
  "key14": "52M1L28CW6Rtm7aJyWRPYXqD3UKuo4CHGFa6Bw9EyMVDsPeUW9v6JKy33WqatNejYh2FExES8msVSevkvcnaYuVY",
  "key15": "5QW5tcRReBA9JyZXkk1RcEcGV5xpTiXCWQd8dmksXoCZ4yRburbuGnmTW9pTGMeYjcTLns6AhY4JguTce88Sb5v5",
  "key16": "3Ksf3b75p8uvF4ATrFcSUjKhUAvq2CcdSqfqvYhJR6ewrLKJbdxYyVAW5dzqtVsALiNGyecDgtyELvqk8F3tHwcN",
  "key17": "2EKLV92RVFR4KrTf741cJfCmxuSiFFfmQHtRxYuWRagFk5o53c7XSrm9dbdeDvwT79phTerCsh9NKMcMp4CiukxX",
  "key18": "54W8Z9aFtn6Z5HWRnj28LBsmpEmcvtCJ3DTRDwL9avLy5UBFn1wba8qMAPM6EusPwqsU7N3wqBWmkogrQry7DnGn",
  "key19": "4vYmaH8Es2Df9itU53rpXZVPyd5PZwoVnh9XXZ9EQ5NyvFdbBakS6aRP8msR8XiWPtH6mYTobSVwG6wcVVUAESQE",
  "key20": "DH9d34g4sp8tJWDrNVDPVHhs8zJ9EhU4h6QHQgxkraWsNXuvGjxAMdKBuFYZrNuvk2P7N9yF8Y3BY3u4pXYs6o3",
  "key21": "4VyWyRUDV77Tfw4UrpXGrj9EGMFrsiQRjJRyzUeTcDQvy5utY6mZ1GSJx1VC7MRHmZ1i444XrS9SST6b1ipBsGVh",
  "key22": "47YZER7z9ymtuurSRGPMgj4sTr6QQYcJyd6QBizBGXjEJQsPswjsZFMBUAp1pLkPWZxZH8woyY4v8BMLTd41vnqK",
  "key23": "MjpMxZEwg9GDJcyVbdq1VtytDU95KLv8e4WGtr8s6YhTYc1GrsMj6UBcv1JqYf4M7vmHZTeprjHSBaK7Mh92Hqh",
  "key24": "2qxfRBgK63kgEGJNg9DYtjEsa7SQf8LNiEECRGZy93SApHmHPRTLPKvzzWy4uY2wsZBpCascFrcHr2RhtwvD7rxL",
  "key25": "3jQG8QntNhxGp2dnzXGySR61dxgeFYXAHJtSvVXrGSvYwGhQpxsZaaXNM6u9nfYm561wFb7f9QxNTfr7RZfQ8RH1",
  "key26": "3rjqdWGJKbx3aJiXAcyPQxpbqB6LXnfkVAFTwXkpHEvcoMhT154kr1E9xaWAnt9rnnt8gs1hYDzKgJcSfsRwKD8p",
  "key27": "2FFShMg1T9UMBhQBY1ZyfmNxTWiEmc7gv2i2YZz4e29n7NJQMrQaiaYPu2AVRevfRpK49ZjK9xeKQfwi6jjtbTgt",
  "key28": "2muwPQArBX1MfJTXfX8wXdLDiJSWme65pgSYC7xYx6piyHEJVhY4G8iYo1aCGLcHoGU9hnzmx4Cstgpv9UKFtHnB",
  "key29": "5ZBwWfd1GB4ZSeEtF1Pw9exvcr8nRq98Bn75xwYxdYzcErc5ZQGExY4hhqf4t5DHiwmXYbUMyfCnvXyuZrmQfwdd",
  "key30": "3QehpujuhdnvWHkGJ9BuaPsuZ6wGRiLBk6ZnhEopfC3Qa6oRo9DscPca6WRnq27Bmoyn83jJgEzhrXXe4vFCJr9T",
  "key31": "4AZdS7nRUWr3CBCbZYYrgDVpo59MrHNsRYFg5rrtSPJC6nqA2FgL6NG2AjbaXJkv7tEViWFoXVykbvotXifsgV8M",
  "key32": "5k2mfzD9qzCmfHzZuUf19LqvWdGoJg5j1TmmKyQWqrezDzUUvoBdSadLsGZJqC6F2Y4xPbHS89nv1V5YQokb7ejk",
  "key33": "249i9XDDTAX4WDJ6FKyQMVUQyCgMSYwLQ1kVQvcSrFdwpWuesSZDtjNuTPN4rg5wCarLxC7PM9RBAjKcPgEqs6RS",
  "key34": "2q9UihhdxmDYUbSNR6Ljp7Mks5dnqHW4pnPNLNVDcCQmMRfvJXboxibcHpzdRXjVhU3iohLa5sCioJGaX6FUqP5d",
  "key35": "5hLN3Cdeh141UHGkYkLnNDjTqK56o9d15mEnspgiLozQjxXeB6p8hw22WRFg3Yipd6GxwwMxVWP82d8QV9xvsNW6",
  "key36": "4ozmiRqjL3YmHggAyh1UU49YhF9rYNeyuZ7XcL2VsjBjTtyarxXXQ5i5uUFnqd6Wbegr7M2f2XKYpGBpZS3PJ5Yh",
  "key37": "4s1q7ZPnwvTTzfKYPSfEF3XunEoFGVvRzRhsxg3N1GdFSdasvedWebhSoTxQwKjY8dQzbs5NudfJFzN7PVdevqLP",
  "key38": "5GWpHMGEPijrZY7Br4KXe8GdGneXZEU1TV6USJzLdq1MdVYCBqhoqNF8FQ9PYC3UHpG4bonGKUqut3itpNHQdBTh",
  "key39": "3Td8eN8tRqUTtjvxKyxG4XycKxrkRhM5irHqG1wEVrRBWand6fNkehf7cTrgYPrSGFjBrvo1JcpyvZergCXm8Sof"
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
