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
    "XSaixpebB493ee49uSF2VaAmiqiSHAzwZNJqn1vcCxBSNy5F9VSUbMYftQKEoSLiYa9pj5sJuk1ZTwTCNK8tEVW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bmg1dHF8TTKNtwmgB1hLGQM1Np2nsFrMzkuUqhK66CHSZ1NQBZRB7PjP1P9JZMA17PkcDbuG57LbnpTihceDwn4",
  "key1": "66s3zqDfNbV95gAVaGCpEGpU5oESwmXZmqFBX2Yar4o4prgCSDHsL5Z93NRqK5HAqw8m5Q3rJCVPz43bLynrGwb7",
  "key2": "hbZUknfeXUdVJnPJc4TYSd7hcyz22GdDshfineKzuVJk4eRFNez2SFxfqBnYXACpE5jvBUo4vMjYc4UAxfKodDp",
  "key3": "59nZQTNDqyfPVpc3rra5XseQ41eqLzwWeFQZJSYyssb7jiJdd4i92PTcdB1pgyBhLkL1eLwUQx8HWgvYDJtzB3Vj",
  "key4": "58NeR5LWBQi2Ch1YrZ4HrEtmFow57WNfCeoU9daUpcjkXS9SaG3Fu5ydEdX92UtAoCQrnbcapqnZuRNrtkhttVZ5",
  "key5": "4HMgnQV8W43MKqUfr8BDfrSnFofFG4aQDjs6BnZAPFZCZ8utEUz3gwHqExq5JFp8XnXu9ELss83CQURLBkwGjopS",
  "key6": "4qQZp1bx32fgkePdBYW2gneTuLn3pwygnnArusCrzDL1Qss6jk14iBSuMYux1vHwpMMTCNpJZJoVfmXMHMbCgNEq",
  "key7": "2FdFVFpZFK6pz22be7Kg2sNgW9XgyUpYEbPgtGdGMYqUa8dth2nj3tznAnUYH7JGpCVRM7XXgxr44x9jYJypGQ5L",
  "key8": "X9nMH2skaYrzvmMWWDdCnWqzfLQXhrrAKYFsdWjDRiXfqxRTaiiAyhw6fWj9w9CGJgcGfdUTc2G4iN9jSN8jhbr",
  "key9": "3Fn1CcpDrm4v5y6S1rQzrBUEmsPsr34ApcgEWhf1xQqGfw7GaxmcCiwTjcGi78EgWjTQwnyGA4yFyUpin33RmD2s",
  "key10": "4W7hSCCS1VdTzouaEb8ip83pjwTDYUsi4ZAa5mLJ8WvDS58FSnaSRyQPLHDawxBbKR9GsgHWf1hnrE9CDXHHNRrD",
  "key11": "5Kb9tqddn3pnaXtX5YEn53fzmsgsSoGPxzKKXiTmjt1gJ9cCrNLgku3CteDcFrWMmUkfRuxx1aG1YfFAFpxKyyr4",
  "key12": "3DNKctAaTTuikAhnDYv6WWf5yDWFFyBxWXmjF1mbXoNQ4g2cSDA5DvZSRHzKWxjB9uxdhFn5ZDBbkq4PMnr9DL7J",
  "key13": "PCAjKJF5KdAMASRbegLznBZAteFye6gZKHtKo8g1wwRMQhhFCVJxrApwkwm72tF1LfvnZk38bfnV2H1jUx7rusP",
  "key14": "45mfWfd79umXMcvWK8sHr15hbq3HMKfeD7PKGgJeD36gnDsAgpu3Gv3EzvNVypuCYfZyXZgVMz5kbn3ZHqAc6W7U",
  "key15": "3bJPAKtmWcBsKXKVMjyLrwErTj8mR9FYdQb6obBt8iy3GzfjT3ZAvQMFytzJXtEHA9ZUkDAbrz5cdgbQ1PhuhAP1",
  "key16": "4xkrncrb1t7MfiZFmhf93LNfeLJGGxTXD1qU9nCimHofbj3hJMiPPAqyFDuZ8YvyyZeUV8uyDZmrtd5v7zE6aHsp",
  "key17": "3usE6U255s4c4CNND44ES4By3tUuiBrK8PVsQU24GrfEgEH7mAjs2MycWyUy4FYZwewyMs7efT5wQqRFFJj8zq6n",
  "key18": "2jmp5afbRNftRwCUJUcVy31h9vwhjvmhP8zE5XviYYymyR1C2Z9cszuYMo2RoGMPcPEj3j2M5BonKFMdMbkSzoxi",
  "key19": "4Y4JLYYdgubCVcSr5WZGzgPABfK4TYsv7ysWALbLASCQkEr53dXqYptzqidsUtot3BoK62KcLgwpopHmvfMjERtS",
  "key20": "4YXE3wz4TSr45huy1t6Ste6QxjXib1h1CUMtUoWKhveBpYUeDQ8j6UaWRsfFudpcqA874jf74GZiS99zcVaQ8RhW",
  "key21": "4zCoPcNT9pri7da1FkE7LzCVTT6LZPVteTxZSsigQ7RTimc8Y7K5xj6xgqManL3AMSY1uksMpQz1BbnFvQGGS2hx",
  "key22": "4LwGcv5c9WruCJJdVfx6WM52hszWT7uFL2TRcSM2FU8b96Yix5G8wWNUSQBadjXnBLd78M2GfGcEoHMDNdyH1HUS",
  "key23": "2XTPsBXqQhNzytc2PwfAvDEs4nmUngQnoQ4oNGanaBgX8FTyV5vwppjWJGoVgHfSWhPhBsvqgeh5pgtt7BbLFn3q",
  "key24": "5rqxKGyBK8C2sHi1pBeQ6zfMkfeztaSuawHwgkC8yNqVMqusMRRAbAnCPcU3DgfmYMPwitoi8BKvnwHHzsThJh8f",
  "key25": "56wdgYxSi315mrkcKdLVuqbqBmmKsASs7xgQzjZ4Qoj46KnUwLjf5UjBCVB6K5r6G69HJBKuhPVcTawZXtA9tX3x",
  "key26": "5gnq5FRpa9HwdFqNWbBHj9Z1MCW8XDz3HMd8QTtGLCg2MAGqsKgw1hgEo5Euyppoc1swuvYbENQTQ9e33MZQxz7Z",
  "key27": "PYVHRKNWToBRuanE6Q8eHiE13ir9MQuXwG6JuUoou6YE9nUFLT3K5gQYS9KGsaC1g4rX5XPXJZGQXvu5q65YTfu",
  "key28": "5ZEBdUuhyxhLtUujvqHXHbAz2cU3Wzyovqi41gPXkaEeupYbuVp15QVZnv75wYsrWikmLZRcxNbyju6RSdSAGBx2",
  "key29": "2wyZTPqsRtaoFdb3appNepeQLbeL3g5HDEWkuCe9ooTnuHkXAMTpFkUW2UGw4iCaemwzzFxKyLugnU4wQgDbHGmC",
  "key30": "3a95WyVNPWMc8S4DeV8gQCiKPdUQRB3mRkdYNT52KYM6FLTo1u3oMQ5rnSq9WvRxF3bMzjhvVH2ga7riTNrMYk35",
  "key31": "3ymDQunHLZ5Y8J2eshnAbfpKaUyGeHmwD7KDJCbxbkaTnv12RMPHHYdgPBjxnzCPYBCmi4ft6UPbvfRMvd5wo1rd",
  "key32": "5KHEPFy4nhmb9azcgHUNoEwwTGxYpGmhsYDu97E2Xs4obtEZB62KxHeh9wNmX6hzW9tmrAmF8fDMcZtDz7SfDgS2",
  "key33": "2M8pJK8dV3T6wHkbDUpaWHB9W2Sw8FdvuvDzHzm8SKvLZR7vmNzqeyzweTaUDwNXPLz75kaf7HVxN8ipQtA2wNnv",
  "key34": "2Zn6KL3U41vsfcunLPGYMMhkjDyFnKaobyCsiA93diugFHyj7G9UsVtg4xHfF2tPrkQ8PzUjdFL6YbNWuEZvw63d",
  "key35": "5iRb9WXPk9fVsprq85gzsDRidWbxmTomgV6YWhEwRY7q7Ms4JwZRL5dCDGE96PbBNbvNbTVispYXPH3BGgvWUeTo",
  "key36": "oiR9EWXiBhrQFgiVkmPMaFf2mdm1mahrByjmZ1dGZjWuMCDxbAdtpp5JkCw67zc7aFDr2v3DXG3nzBmREhb3sQS",
  "key37": "3ev1oLuZD8AXCTPBsSJ4KZPKJiTzTcfJwTVrv9xgvZC72nr8Wf7KY5xEaVJFbwbdwjPqfkh5YJ4ordcxH2WUTZoE",
  "key38": "4AZkrx9bLE4NtiaR8hetMTtVZbFG4K8rs5Jr7m9t51gcuJA6mXdEPQp7BFqRfh2GFyc4ZuQi69xfW4GAeptb5faU",
  "key39": "kdPsDRaeUtCZ9AsYsR57FRiPrEPHYENkEXPneYhPDYzJTg7WghufRQpbKCkFtk1EJqbKJRGKbbDJgzcpA1GJwMh",
  "key40": "57GgTf2WL73GUbANeCJnjEjF7PAkyw8R3UAUjmycW6CManWHhnqD5ftFAHhKqzVJ5CvUUageLN7TSNMmRaoNF9Do",
  "key41": "3f5rz1TFzLD2tMdwEo2goY9QaeDvX1LhkxwJ9kvyUjoAdDeoxJopqPCumWp3JZeyyChaVMBgTPNNV5YrRc1wMxiR",
  "key42": "24hyNVvuhLQ6HQx3Fp81z1ruTuSq2rUtusNMtE4fGetUMyGFXDAEAWdkxJUf3GbuC5qzHJF4hjnWZq8cjUpWgZF4",
  "key43": "tCgn8RE6GpAsLSN2S2pYdPQsWdR1L3NPMQz5SsLgRZLZuymCBu7SH1Yigv6cKadSwqaohrvwnXZSDHzX3qzaMT3",
  "key44": "Yugqi2ywa4iRqCXMjAR1jV989ryuhXMY5Hphsjtxg8a6XrMVJhxeXAPaXEhY8ebGmEuMbyKJEb96BjsA7LCvzGu",
  "key45": "58N6qg6KkGhYcd6vN9L1TyopTh4DEyF8dz12tnkDVtBWmC3ueWDZjURynxKtAo9kvZg9PbQBLW5miEUdD9Nm9hDA",
  "key46": "4tvMuXregXgC57iLRHAMjZCdmXE5CVqHPANVLni4vm3WKtYZGqHG477B5rkuF5w5wUVtgjtSGRkaSwSD27GUe2vs",
  "key47": "3yrMysHff49NWxnZNmMUspUJvm2rMYNpY4nTKmGuHS3GNdf64Ps29oRV3Dpo5bWnhM1kSHBBC23cHv45wsLehiJa",
  "key48": "YASMJjxKycbwTpYVzf2wWo2dq79yjeLRJof8UsVcc8THFibDdSaqMbrA4TasYXcBgubRpzJTGQCxowr1orftNR3",
  "key49": "5r33Tkq8fb6ywxtMiy8SazXTC8dm72mR17hr8CmqaJdvNx4EcVSSvWTFjVNammNtCweNTr4cdtTxky3Ks8Mepmap"
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
