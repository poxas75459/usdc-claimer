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
    "4JbhLqPY2UueT5BwM2wLmeYwJiHssNkqJLCSembMmgHrzZ7ZHES9LYexqCFppsviUAnj9E96mgEbSWpFPTiE8uvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mxjvkugujRP5R8YuEACZHDEq4vbFjcMMbRaVycvdqTKxaRj1FQ9wKb3GgwWCiLBrBmN6qjAcHMGUEL44wP6ExoT",
  "key1": "3ENNPvyay5bcPZXwyTSgaWQBVTR6kPBkZB2aSaWRCsh3hNqrq2UGW6W9a63jno7QnhqEAcBgcy3nF5dEVhNCKDGn",
  "key2": "5oqQT4pF3PyCjvNA7nbChkJBFBohmnNq3Um38dyTSYELMDRPpQXhQ9m6iWiJXiQgYsw2R8VBd3ECqbnHuL1JAFdg",
  "key3": "2eJBx1QFoKuooc2se5dnygjamuAY6mqp2xd2spnt8ALMu9DnBcvv736jEq6PSCtapzC9yRFMWCcqDj6XYAwo2zgR",
  "key4": "5RqV66Wry6FeawBz4s8Ymf1afV3iLDPXic39QjJx6G5r8izjn9ecfcGnFrCwYSwzYyg9hFh4pMPpKbTEKD9mAYLh",
  "key5": "51PfupBrBqu5XwGxkdT1r6w3orwYcChionPrYTPnJMMoHA1YfnVJFPgR6NUBmG3vSgBiKz9UX48yZgXrZhvC8oqu",
  "key6": "3zt7CenDsuXtcDvC9dMS14hkVTRhiatKHNSa7tz5JuiU26vw195N3sfkX8Pr2fPaZadZ1NHrjnDtTr7FWiaAarbT",
  "key7": "4mKBhmYFFrstpYK7AkiRYYbUpXxmpkoVBPYHTB9s6SJtwzfPExyb6jVocECStUJ7jf2psiBs7DsS2j7NfsdHgNcn",
  "key8": "49JUuSYywTyvJxot63CRJFpcqgYVgXU6q8YmoMivfVq7NyHVzTPifoeR7nYMMQBtrkqywCBgujs7qDS9MVv6R8FQ",
  "key9": "sWVsAWf8TcNfY5gZpjSUnW4zs469U2j9DXfaJr1seuVeCQzUFKx69fXmCq15mnkyWTBnLXWyg3rff8rKTPunaPh",
  "key10": "dQTLecWMxTW1UkdmaEoGnYpwKdifciu8d6Pfna2hh41ZFEHH3SsBi3bdemtrtzAsyZeqNM7gcuPWk3t5AfLBDbp",
  "key11": "dZ5yvDGG9AmaJYwFJpZrCfDvh296rea3fXxQ4B1Nrx8rp3iMn6axuHwwEDpwBBFev9edUc8uiAYp6DQ9d4i8MhR",
  "key12": "2r2gcaF1pHLBymVXnGcwDf3cAardqe2Tp3Cmam16W6r1Hz64rkZrwX4DSJiwH2iLAukXheruzXJp1ipyzHaPjgsH",
  "key13": "bxKgbHzcuxXtrmKuMepkatU2reNk4mvGcS7edYEkDULBgoURPKRAAXSCEYvXWenuFV3ys6vug9Z8mBqVxnorkm8",
  "key14": "5s2mDW4L8ENVTYagpnMFtWNxE5GAjWYWU4ZuyqgW3yVU7ePBQjdgReGFvFK39T9KJsYyMAYK4GH17azLzndKmSmb",
  "key15": "2uDGyFtg8CV8Nop3nbsTHSySLtBTjEjdKhMeotWKJR2v79LrABcLEzK4uVkXAQK1wj34bh3EoB5FBRzzFAJNdMeF",
  "key16": "2AwpKaxKD2Fz9Jzas3VRCazYAkZqjrA4UYxe2w31hbd2TqjfDiHnxVHNh4xPJze83hPnQgxh5xy4LiHHRZwFNZwp",
  "key17": "4VUKFHHZ8A63tTkayjVbwUb771zFhCtb9hQLTgwgTc4QZEqcLWLoRftxmiskDMyYv2oD5bbfuDF3YqQhJzQMBuMa",
  "key18": "194KhktSpLsLP9RuQysEpY56JUkBnBj3i6VS5drppD9nHzVv6yaMkxdtvLhyCJVGk1Uc22mLxZuR6R3ro9q37xd",
  "key19": "5tZK4apUP4vHJqAyAzaNfhgMua9QjAH1bhxcgkSQiucv21hJxuGYQtJ5gZbGxdq6tcHrptpJEQ6rwZ5hhvhwYnSu",
  "key20": "2dQxZ3pP7PMc5CdntKNrpmudsdhweyYJzrWXL71cq3Nana6ZBACaUxFTeQ18BrggNoFJNV3YjBfQbeH4DDumB3jj",
  "key21": "K6iDDTigSjgTXYd1redUyMPshEZt1gWt9uEEMdvuZvSKMrZdw21r33fmvBm7rQbjkTwxwsSSLQZZ1TqFNPegjiV",
  "key22": "i4MKHM8YRjnXFFBm8QSyRSvgvFn6QnTT9iBhRhz7BG461P38f31LHSGK4xs44ZESpBxMhsLAgT1mZ6AHXyvsDRr",
  "key23": "kPmx9U4nXpre1irHXSyXRNFjTECVgjnSSmF1U8SbwJ2ZL7Qmb3mT26rr2iMzGcGGbVNz9NxeBDV62bfnEdeN4oh",
  "key24": "3PGujixy4FAT6Ujid8MjEuveqGNCp4diFz8EwZeUQkiwV5xigxEkFewpwsqwSjfLVG4yAn7RNBxmXwAfsSxbANKs",
  "key25": "4ZavKTiPYJ5BKc1MFMvGokyu7NYdvKAL9ZFVp5MDdTE9or6SutMZ2irpordVJ1HhRPb2GYJmxzaZby3s9TZ8VRXR",
  "key26": "4vzzFNZzhddQBMUPfyX9NBKZAcMjTpytxssALHKnGdZt5UhvMiJ65zBWqNKz81JccfxxNiaxvU8zuBskfH1LjKNR",
  "key27": "3PLnjY5xSwtsyZbK8U6Ajw9ghpdoxiWjBnm2RLbB6D9GGTvjRBd4iStsgjkuaiSj9usozgjZDJQaz1zzSBj3mZQK",
  "key28": "5ipfAdhbWW2rAsyzRjF1CcHyEScUqBoxFsDeVoMohux72cZzSd4P4bq2x5XoCSEK51PPRddsJDoFhx3RsBXcWzB4",
  "key29": "3qBuERYHmvAWpi94mr2PZFD14HBRxPz9viqiHM9UvziC4U6XyHTHUyknxPh8sikwAjuGv5inacequKWRE4iqRvKf",
  "key30": "et2vYcErpYKYjWoKFCGmzqs6HdK1N8i59xqZQjwDyu3d2Q6i6RXgFxjA4UF896F2fpzd95stTtpg8nQ8qy8xa3e",
  "key31": "BG7j96aHXTJ8n3pGGsRG2a8q4e9j5JBQY7WHUQ1hPGV9VQNE5dEY6P3SgMMKJ3p6S6Fwu9YgGL2gjT5DHnM1CAr",
  "key32": "5g4FSHj9iBbD75BQuNmyt7U3Gt479hwG56PK7iMETmHKFxa89w17urnCFQVDRRAmJrNvZQc7vE1puMf7TSZwF6eh",
  "key33": "47LVWjUh3sgrbtx6GmHoHq2AsM6ocmjXwi9aQvxerNTJUQLNXWX5A9dPsThdUBYy5VQa7GiiJpVErhDYmcu1TSDg",
  "key34": "4Y7P5vB9mur3TT7rJoxsT7jeRhYiY1zhCfR75hmThJ4svztKFrDSuVZjyAUNvm3ZQctHfBALJ4ToneDcf2vUNznq",
  "key35": "2DLE73ptrhgcMkPVSmXJtRmY9nqaNZtiraenS4revWuzqdKgDeKbMscUBUQXxjqTn2GBJjZUPGVZuhohdeTqH2QW",
  "key36": "44Gojy3TUN5A7zp1ByMkTbNDLv2PUqTnDEkY1TxgcYmCmG41ybkUG6JWGL41PfWx3GdrYJauLVCQxjEGe6ZMP3gA",
  "key37": "4GFYPxWM8jZMHZJgErz8PWjrGQVh5VJYMsU3akwFNBySTHibSqvquR6d1VKF7yxjijZaMmZx85KF4VcnPG9Ww4cU",
  "key38": "3Yf1Rxd9YhsGsXZo4V3c3tJ4xQZPN5JeA33vKF4La9DhXb2Kup3K17ejVYFSBU3V3mnwnZ1gJiWijJ6SmkPjTD7g",
  "key39": "4Sj3SXMxzb4VeJjdhp8saCfkR1rHCPU7csA5ifkZE9q3YASs5fRbm8qNMDfJG3GRW36BaR1QTfBd6wBNTYWn7p5t",
  "key40": "2DkfcwqLb6A8zu47MFR1STNBQyHsYLqMBWfxj42LztWLjHfBY3C5pYcm7Bq6bVMVYdiSB7c68Ao5hQ6a6uUUTMv4",
  "key41": "3TmpSaqqXf5gV1w73HXJa6Nm4j4bTNo4yXfrJ629Lmx1QGUoGmzWVgZbmvN8iL8ubAQveceULtLCf4c1vkuWu5Vu",
  "key42": "3uEnU2H9EiMVa8CvV4UnWxwS9C3wuTRNCUWgizTFqRoGDB34rk1DKCzxpHojUU4saU2DS2LnGWskK5pSQ8eRUnTz",
  "key43": "47PeM6XzGyiUNt4w5LXMTsYyWC3MUCsvBudLo5UoS9aPogmwDyCY5bk6gPBaVjqMMzno2kDPb6nbPYDJV5J3QEGY",
  "key44": "57omszaAzt65rpAstucFuaz7K9aPA6UmVXBCWpHDYTEZfaTEv3jJ8mdm5Z5aada2hBaeVuDsgQNBitfJi2EZXTGj",
  "key45": "2EbEgs8KmtbdeJDCuAxgmYPqHym5yjvaST6j1o7rUznaJiH9zWGUsgEKubxAsQhdzDFsMVoUoygWYiduaaTicvdT",
  "key46": "2XU6bTpZQG6tfHvQkTGpGJ5jxXZeC1GfUHo4xmS3yMmnUPJdsWCzMEnQbCZaMKDYhiJuKidNrawyb37j2MnNjQZQ"
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
