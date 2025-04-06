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
    "4kChsctHFNArNKMMUn8jsDYdN23jR8RX2vNvQnuNvEieyAEpT8GVg8wiMLTLw3n48QivegYQQURhT5T6JSAi9ZFK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6GvjvA1NJAXFKcosa3cvHVrufuiTMjzNKyU8Eq9M4WCwP7cvfnpo2sa13pCQidB1HKzqHHWh97jsFqw8UQMfwiU",
  "key1": "41exMAQzUGY3DUFrV34FJzof8SzMN6kJwb8DYKzpaDwz1MMeage66gKxF3rAomxQfk6BSQrPHvbiQyvga5i8mEgZ",
  "key2": "XpJ9E1oHcojmvcQS9UC5tLChy5SaXrT73c4vEprWBLoi3Wa1qEoTzUdJzVkJarqcqehW6aCKKkEZTNf6TintmPi",
  "key3": "61X32CKKgnanpjugwCpkb4v4ixEuZMNgoPS8R16e3GaWnsCvXhk6ib9PgWKvLQbAHCHHqBrpbcHTwjE1jGo5eFrW",
  "key4": "5zQRzFRFax7tzHEfrxvWRDRo3MC4yZwfDUC6uL87ck1sHVh2s33rhif5tJ3kynt6NtbmthnoCoQqLQfuuLCc3mQj",
  "key5": "4Tf5ZaKVB4UfdyGrhH8zkgDhgsdENgzCwirhHgxPotmr6GR6AXcreoW19zGTATiuWHdEjGy9v77UF7Xtc3GFX1GH",
  "key6": "2Rq8NUDoizZ7hURrJAALKEENNkLgkijuuM6SYSnM4ohqFSPHtVEryKzA579SGyC9ZYGc8ya1bHW7xxcJnRW5DTuX",
  "key7": "2kbfpBa46GYCGzDT3qWavyW97pApsuTL2s82qvVH9F3RjXtrB5vqbDSKgKcA3tTvTrdK5aeZamHXR7izbheXF73C",
  "key8": "45NUaXaBnMaGhepLZmqqsJQdNMHcrgEkMMqMoCeMLznZChPrMmhdRnFZdar2jmwHyB7PqNMZz8MKVMpe1apmUg5z",
  "key9": "5jYZzimEXQweURP7Na3wkSFP6JqxWjwrCHYitV1z5RL9Q3YjC4KttMXFBqoaSuGZweNJDrViBqY1ysavjk968qBw",
  "key10": "5G1RTBgw9PcLBMbCpdkYWCBBYSi4Sx6cT1SiagAC6jE7kM5qLAjVcqN7mrTLMuzNjA6LXzuxw31DxrsR28nxZ6wL",
  "key11": "5aT4FJ58FkCf7idDonQiwJHExKFgsX1kKXsnBzkUjfxuCvwX52kFYEQ7XoLfeXzzBqqZDotGqC8f3zAot39aW5Jp",
  "key12": "gSTQLv3dRojE8QP2sZS17tD2q61eZV1k33UxgtfdNkwAZd6e54UAo1eaqMd4jFfmXfamnNGhcJ3q1EdNAv6rfrx",
  "key13": "CmvxgjDn9FytepNhA18QJsEsvHbhhjqJpQzpeJHCGp1SVYVBe3KYjX517TT2QgUN42SCQfzSexwutGWGrDanY5a",
  "key14": "37YiWcMvEyV7YbevYak4UawEnT9JhBBZEj42VFjcb2DRoXjWcQMFMFFWn2HLuPy3KiMcjBr9AuRiRYvDTAdAGoyN",
  "key15": "2Y1fW8TRwnnJF8LohKME9aqgi8Y4QddbYcf1JDNJgF94J5kUKX4ZU8GvDhSfoLC1NqrUMuhETZsBi67ZYLdCWSZi",
  "key16": "5UT78QDG7amWbuU4djnUe2SC2xnkRxqjAx2mkndcXHjbdbTvCVhpMeSTibjaSNKfx3L132NCtST6Xzh9brMXY7nn",
  "key17": "3VQQCo9g8UgnCpKYEezfu8Q4CqBr4FPiP7j2tgLRPEGJmzj9GTPMnV4qgLDMVeDg3gMtoGQMHb63YwqcyyNUph7M",
  "key18": "4Z2Z7ZDMuTF65w9CDRvVqf1XwcAi9zwbN7jraGNu4KoLVxZP6no779zmgdWPHPfBdiNqd6NirScPQbFeb2YA4b51",
  "key19": "3LQceB28Py8de9R8q9cCvm25ugj5eXvNBWK16vyL9WHJkWh8UYDujzG5EpetpQZej1VkToeVoM9SzzyH12hTbC3m",
  "key20": "N1TCmbXcEuaccZzqMtPFdDf59xPiXHtkGqbnWJmtDbRuZLkDunpVoTcJk7USBHL7KJDDgTQ7HqpejP51odReqfG",
  "key21": "62FrAvTpRH9SHLeKTkTraYsTRqmR7ZJtMszEY5fLHAVS6YvXT1jukZA2RoNYHGNxWqfnjovixeeMbZ9oLYRGKctM",
  "key22": "2byKcA1TjFwuWBGXNj8otgPWvBbf2gubBzPe7CTg8dNv1ZVgPgvFVxGswzdRxU8doTZ1jsRjBRbYgdvCuA4EGznh",
  "key23": "52mq6u2rqgpfQUTnBqRFWRBC7cnF6pWf1vuxru7g9PGyxFR6EwBEmjpgocokhVa7W23rzALBosPt9FNWcesJRfWy",
  "key24": "3FRcQmExrXL9zbbRyerwvmkcnuhAn8nKyVZCBdzZdv6iidtgZqqahae2sr3xMsxH5zLNJkQFc1r58noGMw2GH15d",
  "key25": "5sKBt1TX5Vt9hs38q1iJ3EhQHH9GFTi6bKKPxahLvRwjX63LidyxykR4VQBgwTwSDdoyLPBFpTu6c2U7yD4vpGW5",
  "key26": "5kqBq6fSpJjwiNMhwrDVFzTG2kYpdS9nA1KzCgVtzWEiXoPcwmNC2m3ezKo1AP4jCSpUs1t3Trqb9R9Fvb1nSLFs",
  "key27": "4CNzowfi8xcprQK9TnAFZdeVNSZAkLBq4RMLtxqJR7MbxLZ9GNTb5hwEh4V8WDhfkGxw3Qz6meDhs5E3rEbpe8sT",
  "key28": "tVxs5BVfrd8BdJVnnYYrPs7Ph8aVb7GAxLV5cboydxMMekkqjBvo1ttPvcQaLku7U2B792mfUxXRdxNsDvnyDU6",
  "key29": "3VGoL4XWCobEvf5JZgzQiutRoqFJFHbaNdAqyMVLkMANDkyqyNYZ1qggfGGNC61MHv9QBw9LMjmgdNRqEuWsPWwt",
  "key30": "5rdPeRuxQCQjTnqGXhrDupSx6hf7fbbzZhuoFTAS7iu4mBNDdMYVgMTuXrBTJLuFoKd8bc1h2DjMHJBxBzMudVnc",
  "key31": "2jT2q3UznkBMGh3c3Yi4pSnJe8tf2mUJLCGhKJVbfjtbd4vRvywZRz11fpeKk8qx3RXmPDwEJFDDE6NQ8HeiWXc1",
  "key32": "4pF6aFTczdE7PrDhybTW4PQdsfttXuBM5oiuY2C2BUWQo89RYXjg8S75SBPhF5VJ59voSfWonUT8BLqT5DWADxe7",
  "key33": "2mF6R7v72Mgmpam5uJVGLV86D8WTSXbUKtTc6xtayHX6kBTBPpQbC2rCYCyNzHY6kVxjQ6NXAd36mBnS5gCVx6UU",
  "key34": "4wRnE5XFrvpHscHvr4rmZXP5y2jaPYfRF3sNqCH4ftp1uR1pvjvNo96xFDjDZMm6RgRnYR3i4FLVZFtWSwgNACcp",
  "key35": "4rPBttyDRkLtLdS5nExoK25FNaqDiv4kkwA92Ud6p2W726EDDW3rSdAYmQXUYkB6XQFSXxBz43gSP6xHwUeie9kj",
  "key36": "5rqUmSkBgQxaygZzNxBK51LC68h1yuW2FuBiKvxkkHnY4pUQcgYGkSxnRnq7Ui5sXh9Q3WQRqCFaVfm33prQ5T1q",
  "key37": "4EVstpAc8gGqjVd5vJKVwqtj18h5DN1NDJcJ3xSn4aazddQYxTAvDedY15sZ6b8haCvDvZLFvvUvB9RsZsyTCsM6",
  "key38": "48HAcoNm1MVjdya9tFsgQGcvRx3KsVsRsS4E8brpFETj93fTN83PxeMMDUTASSqquNNckWfyy9ixiYyJsmU1bbDi"
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
