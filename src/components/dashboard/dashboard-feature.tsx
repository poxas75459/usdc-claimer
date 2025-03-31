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
    "4o5nZNqpw54XnX1QpT9Z831H2bz5JM6d4GUDzCct5gzkNdhGrKcYe8H6AdCBUFzaY1pLo7jzcunWcvP4tAVSiqux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hbiujaeByHLSaYeaktUgb3mCXncLzx9FPtUHywPRyBX3Pvcj4Ev2TpUMvdDivet4YVUYTaLbMF4GCTJc9w81VfR",
  "key1": "U8UE5bFUuYG1Dg2JRtnNp58e36HEMPZs8eZXri5LU1p24nKzyNq5zaQmNeuwWDNvDYjKeY2H6LeKUfn4njAtMYB",
  "key2": "5dJEksiuvawFeUM7jgy6UDWcSgnQGxdNW1a7iS3JRNzZxTqH1MbA5ter92mawLNuSdbdxnBFpaWwFsvL2bX1uMrL",
  "key3": "2acUZrYrKPRtTA9dW7azPGT8mfPhgvwvVj956uhy4tp9H2AmfXzT31sPK7v73fr4CgMf46DH8xvPGAZcBFsv9gnF",
  "key4": "4vG5mHyWSqmxhp8W777uQYvU1tMGYU4XErpJo9H5bF7n4Gnr1SUWqUQxJWLeTC7X64GXb2vcJibLkLy4wxhUwND1",
  "key5": "4bYgkkJ7XUcmKRWRpKpbxyaCKef2fDnuKr31ax41wcWpXAPii3kNfBcer57BAdt7JgG5DCg4z1oqYdqby58y7K9C",
  "key6": "rcLmu7ADQJ9Byb6hJVoPn4rby1iap7mk46oLTja1WBz9X4b5WEmZVYZUYERzV5JTeY72VqmGhhBV9QYGc76XCnU",
  "key7": "AMm3MDGKm1hcqf6Nof9fziGqTv8JZdQv6nBnvJ3WDKbcRsLuKYpqa2gRp44er8uEdB2Bi7aoczjVsE329j1yq3H",
  "key8": "4QAekjtieX7GmVxewJEP3aAjtxc9DhRkxqLvpt1asBAERBNVSdRVmkNBPfCJMppoae6mhHyBqRFbDY5TCss6z5oZ",
  "key9": "3aQ8xMauwNST3sXzWSu4BrzWc1L2ZYAYP4cX2bn5STnT8FXWRcC5vPStkA2yYGHeuJUqdwCFVBZAEKNDDEAhHZjZ",
  "key10": "3YniCBD6fkTgTEgNAJRZe4KQKPwSup7a4SJ8HZzP55SvWhVnS5ksN73GEf1syi5HvGYUAEynjnKDVowoXuVtJTqA",
  "key11": "34M9oNRn99Mm44vwmCCeKh5XQNbMPcU43vaXaepKesFrikEYNpVeJf8Eu77VmKGwe9nUj5kPkEzw8KTUBZsJSV9i",
  "key12": "2hrDYqCSKwrkTYTSnTWgouYpgNY3B4sXg6JDGB6PLwtkkJjzyCQbrMuidHQAwnCGPfELgpsy1EBuC527EuPpheUx",
  "key13": "GRJxK9rdPqhLZYSscmVkGpfvcUCf1NsDdsK9raEur9pFtqYp42DjnQH8hPDqHAgVTAAKRdpWW6689DSWofVGaHc",
  "key14": "7o4WB63jBSSFfy5mgpBvDeqcjPsmWG51QSVAZWMxGKRnbSR5dEuX2VVM3sRDHp2of8kyR13PQRZ7qYaiSP4Jp5Y",
  "key15": "vfsXw9ysUMKSxNEya2Q21T1VUXKhpKwUU4MABzBV4QujwZrceTsCyXcq72iUCbj7xymrWyaXrzxpF1pVuejRFFp",
  "key16": "1o7kW5ioorMjYsGP7GUytXtxPSky4x3u2RjXXUHm8ny3DKVXQSQ8LEm3SgkwvWNadmUBg5sRCUDj23sZAd8UNJg",
  "key17": "4y4q1yGCPyE1L1MAnZy7WqyahkUCxHdnwxzKPccr5JHacnt3Xygs9GFjPv2J9g7Aga7jUEK95u4riNb3hibdvuBG",
  "key18": "4jyJdaioJVdMBmszpCJLQUJ5eRA5L7par7rP5pAWCHKU2Go5H7acxLJVxoX5d3hRQ5az7PefTDrLv2Lgz3dnwo8p",
  "key19": "2C5yVnjoognaTZzgb8qTXiBEAWsaTARkmssMyjAKucp4vtnaLG25EXKAo16syZTPaNFyeVoC2tXCVHGvF3SNhmAS",
  "key20": "4E2zCVMexEigpC3uST1avwAE8fRdsptU72hUxHuVkNg2vmyj1jWSUJp5juF1xTwN9uB96X3yRgzkHxjyB2cjzezP",
  "key21": "4VxHsT9p2Lxhz2DdGGCfAtHaEBCvZQqhtHDn2ux71P5T8b9GB52LhLmbYab9eWJWVW6SSJPkTSmSU8BsAyWEXazN",
  "key22": "43frwoYDt2JdsXkqhorNcMzuwB45b9348fKVqJeJcTjjBDBSuV3K6ff9HwQVfuHymjqymY7iCwSAKXWGmUHtPsC7",
  "key23": "fZNZexmCKq3ymLiAszEUVn13K8d8uhBURCgneJawD3FTtgHErRJtWTC496BrvWMMGyuaVHpR1sRRFwnqcQx1WLL",
  "key24": "RNFiRvzDfuLqddXgocTJF4E3rStb8M382Jm2dC7FoNh31Tu1dt9fydQcQQx5zRdg3DTu6nGqbFCqdaYDqqTqU7f",
  "key25": "4PHjZLe5tiWdFM51my6A7tsZvPgGNYufmNBM5rMwjAmdKgqU6s5znwDZ5D3EkokU6VHWK2k2kDbfcSxo1wFnz6A5",
  "key26": "4gwZAksgCnHn2eTo5R6hbbhZ3uoXeBSuhUTVs8bvdKa8gV9v1rx36ZjxFhfrKgBZEuheJFe4Ssr8YskHhpDKy4o2",
  "key27": "9gRgLQg88EkLkgmE8hQtuSj2w2J2NR4LGXnSp4G4XA9cTWMsJBg8LXq7WwrW8bQH5SNkg7S9wpFUvJpgP9Abu2C",
  "key28": "o541P6ieTNjioJAdEY8LLJwSAXYNptXUXhzyHAifETxJhzzjcJ9sSHAKYRWdndAeHaXeZL5Ca2WTSdrcVsemsyX",
  "key29": "4yPot3Hh2kXvVCS15DtmonMRhtpB8ZraMPG9MLkda3t5sgMXkER66K15fhDi3Gy5PckX5SVsMzvyY7QXVNBThPyW",
  "key30": "3Xps7T4aciaobD92gT53YFh5W8urCBVEksiCm1eSVGe48L4doadNtvHrrE6AdkEGNEnKTxjq33JuaY8dZgxpcGya",
  "key31": "5BodcKVMQXWQfzqFstbBPq4dss4SujccG7uce6gWx3Xu44diNqyC2CksjAEoTVyCCkwyCZdncoc4WKDxa9oFYgYZ",
  "key32": "LPz9eRKKV4ommd5nXJvCLr57fJJMMdC6M7yFj5vi7Vi9x8SGMwojFzRUxbqbhRhoayVaajm27YVWNLPwFdri2dE",
  "key33": "3ZT5u8HHTBAXEX9ozHg2j5zwNfkXzeQPdaeG3FRtMb5JibgUj6yZaBJ8bgQo9so1LkvooV1WjBBDETrDUPGUCmdj",
  "key34": "3EM14U7LXRniQyuV6jXwFeNj1Kfv6GHgU9QAKEZGXFnyJKK4V4asZLM1oKyxeevW93fpjYaXz7gYuqvW7UgRdQ4J",
  "key35": "3d16nskicCLE1tiqoySWC2Cv29Rxr1xWSb8boNzMSskTfGUsJ9dWwaw1DuoVFxhcCyjuMJHQUHZeHrXfD8KAnwwL",
  "key36": "3mAgMWGHzQ9g4HLwmWJkgF4a2x5B84KTzL8bh5PaSt1FtL2rzUV6H1te7swbBkwPkCKSmfozSfaYV6291igcUZxj",
  "key37": "2WQnhZnAGWnE9xWAW26ZXjwFyQA54LsFrSaASRV5S1nGfQoeuxs2VKS1F6T6ZFcEwZERHvEVBP1pB9EyQfBCT2BZ",
  "key38": "2FUqH49Erem5o5s9LKkz3nnn58SKLCV5aJTjEPBZFJLWYjbC1JWjznbdJW7K6KTg7zb5qG6nBfdEavT9QUUqwKXr",
  "key39": "4g7q2bAUfa8tauEmVFz4YGBEtWfo4j7oVNwhnf14A5K8EXSTjzsuUa9mVsrFWB78hHu4C7jGyFZZ6cj4nBDtK1Bt",
  "key40": "2wdscHtey5eT4FzVxH6z3KuPLBvkc8KswbsuoaPunyQ8B7dMZ9HWAugHiwaiiuSLwJHnp5uTsjibnNncsydbDfMJ",
  "key41": "38kj7Xro3uoMrMRF6V26QLcJ4asg8Znoq8EcqEWeYPFkhnkndEV9zKZnyqxPoYshg57Dc4J5o4cxHkvwuwdsxFdn",
  "key42": "4RyggaVP5cJTp5w3CKCNi12i4gWRLtymZBDYbaFNn8fUNGRS9T4syNYo6nHMoAMKsXYFQBJMqrECjAvTyiBwyamJ"
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
