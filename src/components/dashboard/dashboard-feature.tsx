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
    "4997JiuN7KBzBUuFge2Rz65ws3woQP8KZo3xVLZoi2NBGBJztpH8gJMYMKeWuhhQ7ite4ko6sJhaRuz5zWPTP4HT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3orijJKXbw8YYA7e4Xy7WCi3GVTVTiu9mfFbu56fbuntBJMnPKd33PLRiFuFvQFbtffnPjEy3nYgY6jYpiUxkFK8",
  "key1": "2NTcW6zYrDi4LMvXTUzhhQiSZXXp73PohPKCm13qqwgtGkYKKtmQyXeYfbHFUHTPHgyXeEyG6wmWGMapmZKaBfgf",
  "key2": "4cxf7aatRcGBk2vgi6m7pM2TwyLANVbTdGFsvKu87F7whzrzVrS7vrmK1wi13ioE1ZkekZTKw6HFpxwCNVM4fWot",
  "key3": "zhUNUwXFPRWr6y6pjdZ5cwkgVKkahKgypN5pJuoBT7zoCKQjnfRDjw19BHwfv31KahFL7mVf2gx7Qo6smdinzM4",
  "key4": "5MMLqhmBhJrAr1fqapuN893umtnarR4xXFc9mHtqL6Xt2zsmFHfm5RtTjyN2tUvHHyVAQcupP6KfAPZGqbz3r1tj",
  "key5": "22W5PWvncXfSGxKYiuEFLenWh285Dsbze8WPYMavmvQzVM11b97CXHk7nRrtSRJCj39v496K8kaNdyRPdKpQSRJ9",
  "key6": "23NjyhFKWN4iiffrGuW2UC6gdjDYEmV9v9PSn1KS7noxqLTTz3knefQxTgvjQ8WcwzGHiS1FdVG8AjGbJNVCHhzU",
  "key7": "9N7jnCvGh4GFAVPzvg2CDXmEnQHj5qTBHi2hNU4ejF2nvaosmUch3qaAFbm8Jp6pgAfC1yXzpk79HFR5pjWgT41",
  "key8": "3jXesjPfFoFCavxwCRL6TeknKhyChRahvYHnL6Fa5zNjF33aPVUoB7wahhKmVtkEDuGevn3SvXDtDXAR9JYB6pBA",
  "key9": "4e7TMttosM5GqxBNmcYo7BfVKx7PRGN3fQmEMK96puMsqNgGzQViZVNA4AtDZAsMzQ96k24nJhoVDYszoL6SpwfT",
  "key10": "5UiRVzzpubTejz288meVKaM8Lgv2kJYKfkQ8rAtJg1PYGuSFrALjr8HB2yXcumFH6fezgNfkvrufKovM8jandmQB",
  "key11": "5kaCVzEtFoXdYDsYqA7XEM16BhQXESNkJ5GyP9E2f1MHX19PX5BtH8gjQNxbDdMCRC6VEQAD28TF2JDKBComJ61b",
  "key12": "42xXGgGo145BnEB5DaormVfvpkv3ZDSWpER1JiTojaoNEBDTq2L1QC93zt5UpefFZkkKCz46RMXg67K6UEQYMSQR",
  "key13": "3wLhZoiG7e1VaqPZFnKorMrzYBxAZVkjHx49byYeoKXpqPMSEcr7YeaZFDtH1yE2UNEyP85dNtEawwtKgYFSoGxz",
  "key14": "4BqAK96fe1x5jEMxB2MJyryZbTEofT3rx93Th5gvbZR4kHw5AcF2LBpfmZeBxctMHtZR3Q5LV7UX5i91D31RaX3x",
  "key15": "3hauVwUt3gEnu6qTUpRogc417MyPdcq6ixE8vJ58VpqtE4gcgEvhVPmJSYYp4rDhvDE3rLQMRSJCbMQm4F3WZ7RX",
  "key16": "3dd8a1gYE8GDmpuk7c98TmLQcRhbeiUTAhNg7iEqt3TjKRGKyMXProrAL1HQZ47kYif9VgPJBbCAuPeXE8j3RLs7",
  "key17": "3Tndex8TC34UAcVDVVyYRF3p3Kndoo5cpDhecyVfQr18QRRJYvREthrjSa8KKtJ4rtbXjRgt4CZ3P1Ha46qpFcre",
  "key18": "VW2U5EqEBzGcneyV6ZUZJcjEkdELhHNFCzLM17nFgh3EVUWmLbxziPb48UTW325h6escpK5KZv6R5JuzSfU87HX",
  "key19": "5ioXfey5NmXpmhjErJbstDoFrmghEQFUHhK2oT8LicqxuGekJvJmf43LNbG9kJ8PBC1dGshsjvTuftgyUpadwDhN",
  "key20": "3j2mzUzMVDcGEuW8Pn7cLVQaqhVdVWWshkeAx7aorFZAkBvHvvDCewRCNgSyjLLvjBTsuchywAwgYDz9VUpxHGYA",
  "key21": "3tvMraaYj4ziQmoT4WvG9Gko1ZsxVJh8pTaViHLoJDcVxD79q1KkQDwdj6J1cBL1kbLZXHgWHheKbYFmC5fwTw2u",
  "key22": "444bnKD4ZfUj65wkSNvBKhYRyxHfVBJ5YYMAuxQS7jxBXNEadrsZ3HBE1jvsU4rCy2iEcaGaqgMjA5K4ZLULjFsa",
  "key23": "3usDoe6YupZ1ChJTcBBZ4xykS5jurwgqJxsaWtNpVd6K929jr1BpukvnEnitbx7FmZdG5XFk4GKaToVDUTYogWso",
  "key24": "5E4wCK8t16Cb85euYYQHznmYiLydfZHJKQyHd1UBEGag3VvuBcMkvfd1xFofJ5TN5uAGkAiLGRfQ1KzBvFrN9xeG",
  "key25": "3zrQb1o4MGDtYKXZtQ7DQEMCZpuH2nwTo3ZumRE7AHU8BGSXafTn9f6Ytyd1pih7UNE3YfY4RQEVQifsDsxMzadU",
  "key26": "4AWsLR7tuQ4jBBQH5UnuhxmD9Fpa3nY95T7BpEkNjUyxx2SAFvvxYQoE2xaoXZpxbEEj6kmnV5N4QTaT6LjsouWa",
  "key27": "5VA5X8RVz3PBGBGDFMCBBmPms5NKJ6KNupLKUm61fxJN1AqWKNRpcqiAw23kXVVGav4iJ4iN91TC5ezXxY8RfKYZ",
  "key28": "5swHfCERVBXYKsQ7ajQ8cUbGGWsgh29H3BpRfbMX9jVZgWjfz7GYs8Ee2St3uBydZkv83RspEz3mMCQHx8KRS9Lv",
  "key29": "o8nnHsVVmAZzUuFcxTFokbddr238kFiVKWC6aV9UXD6EHjd8WiKtu4PwDHizkRScRvMdTQtKQNrS7zXgnppKcAC",
  "key30": "2FoxTK9MuLg5XeLYqEXHyQnHYdKP624arBEY3HE2mNrQSFDj7AgQBbtXnkYikF47atxY9dYcgWnr1ZBhJq69NCsg",
  "key31": "58Qvi5c1MPX143PNoxFcdj9FZ62hxMEZpHxupfzPDis4jJeieAnE6RzwcqyE5krNrVTvy5wVKkvjeLenrqGzJW3p",
  "key32": "461YLYiwsbkHgpkvUvkGw16CHSw2LkGDjrX6AUEuw9A2oCCSAvjgmZuyALwnjCsV6XJHLfS1cCryg1LvZssfuk3G",
  "key33": "cJ8Z3Bto3g8KMnQZph9fq7mTYjMZp8HPWteRkES27UciwSvnsiCDS26X6AExsudnYee7jtdV9fXZsgAphF3jwxw",
  "key34": "5pJUvKeJ4ZBfq7E9Jco7iVkCjH9HVfqtcGWEAVSgMbVxu7JqW5VfnhEmX1yzMZn2dKarpzPMBSwdQNbaePx2CHc1",
  "key35": "595EBLwXYwWXLdbGxhhc8NVbZ6hbiv7QXavjsS9d84Wq4PknVfjdd5i1mjUQLxmQq5nzhZMqowfmt7fov1shERrD",
  "key36": "3nd9zeEWpAnkDdqgp2NEpZ2RwNG95nQC22H7Qy6UxYJi8nuECwqz8CVEMZS7QFycwVPGh38RZ9DTX4a9WCur2Wef",
  "key37": "5ZmznMDADt7ssNoyvrjvWTrcjH7fmB4gSr8soJy84A4CUJ2xJ5zmYFdNviBe2EqbpFMpmLCTqN6c2Xb3ybBQ9mZF",
  "key38": "2qfd3XjYZrr9jTDxsgoc7s7EvF4idTEToePQbULzRGaDtstCWewodYh5puDATGGghQwLm9AHYy7cJGqCfTc1g6Km",
  "key39": "KTnLd6ieyddbzCre8gEZdyuBUHas6WphChZ9HSkXgDHZMgmBs1gKMMkf2opLc8FqDEB2T1FTNVaGtWS9bGT4G1g"
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
