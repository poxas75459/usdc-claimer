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
    "3UzHrQL2bSAMWezZ96hQbkMG6E8aBPFarRkhP41AvSKjpMJY7urpRe83cAV4n7ytCwDCWoDqoCpYXdVvZqqu54xX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WVMi59RrFX7ewimpMcXGfERHgNEMFgriWJJn88XkDKybu8brNJ5pjjhfRqAkcB4Z6Vxd4QJAddvgaVtaP3f3bt",
  "key1": "43f7fLesz1iYKdtZpgipdZLXUxF2c56q7yrTzTt3qu7FtweqU8XjkBhGnKYodkpwvVPf6bGDWp8BvdJEzLGUSwYH",
  "key2": "5WMXFqvyC897ghyjJg88PnvE5bjnEULqQpHz43KDTisXeA3D1whLL714KjV3SJLAo8gnQT3NpYCknN1FrUUPoHE1",
  "key3": "633Yp7UFi1oP9FADSPrSiPaQbwuzNPrsJuQB6urBW7kb2M5mEwNXxqwrsDi4KYioJ4pDz46YMcFB9nS1rfLBif4b",
  "key4": "3yDTnm6NkaT3hjmZkYMtaUG841Le3EBjqUvLXxUcvtwzv4jxzHGLWeipCbnyiXLBqAL5uw26v1U7ejzAyovQUFAH",
  "key5": "57L9aCLvq7ftupderkJEh4JAEtZfBDhKUxS1deDZRz4JR7gdxo3gQhTJDAgNCgvwbEjS3HR3uRBNTrLyV9GW61pj",
  "key6": "5aB7ZHKf6iVuvZDT91Ed5PSR9QHvTrXfYwfWk8hysc33W5yj9C1kS97WCPpvTp595ft1Z5aeHjT3FoJyGPBmTbhk",
  "key7": "4BdzLWuAG91NnrqzRyScME8RvAQo8QcXpxkkn8yiZXepaUAi5RWhGz3boKMt7MKT7oU7upaUr7tc1MZr7f9yuJVC",
  "key8": "UhmqucN3amnrQ4ViZ1PrsKSwLF1PKYXM98srXkhfsr6DgpBAE91oDqTwFM3sv4WLi1LrsQzegEYaKmC2TCg6guW",
  "key9": "27DXhcNCkV1g7yafSVKvbcwsF9GBEW7TKzn26cUfshdHGmtuntVgcjeKmBAg9fD5kyoCsi7ZtWZmRMgjLRiCJnWq",
  "key10": "3MagsgdWHn4bP4ewffQM4pYQt4bV76Gqi7BNgAw3peAjGhRzwGUM42gPy63wCBxgT6J9AcfiF2N7iou9asEq5KPN",
  "key11": "5acgfDPEuBKshn9XQSXBx9zfiRjp7TPKJvd4LGksZ7WAvLgwmpbnFcVe4tS5H2g8qsN3AkTmo8q1WPyyb8S9QgQ6",
  "key12": "5ZVNHAYzAPn3FLxteaqQG9Q7WqL7CqWVCF5gywcRASc7AmeLkVLmhyCQkuRuCHexRrYMgqqCnTB9JUmoEVF9gN86",
  "key13": "5K5sWYuQherHnNziWMAdzSpfQ5QiKs77vCytN9TEbyuzY4DWaxzWdLryfG38Ekk5dg8xnSi9FCyaKQed2d79fK6S",
  "key14": "XwwpAEGgpNewh8AUoWFFhgUy8NqFxTwMTpM3AUgQUMQUWVvQRrXmNFWevWu1txSZFNNDCHtTuyfDzhV5WCk1HFE",
  "key15": "YbTS215if8xkA2z6K8AiGxQ9BujgByyCEgicK4vcdmKvYxsz6WVA99ARPEriFSXGef73ms4U4vbeyENGtVHBpMs",
  "key16": "5jGmwvbLGRXgmTDvWc3FZE7QLQ9km7c51UhkUyPpEAQgSXGYCMAtPwJ9XQUmC6vMngwGbCm8oM1G8vyo3wVYyZf7",
  "key17": "2YaPMttTW3Hwd43AkheRaS5gxdadq3ACyrGR3YpbKoqXzQ84meoztFyAmHL5ZYt6Ni951e1mQNArLWKj4YBMJvCy",
  "key18": "5pVEy3vepgp28j1LbgFFrzRPCQ6aAaZAacReyCrMoxLXjXX5C9bsJAjSzdYQai7kkFh4mBEpypDt2S6n9uCc4RMt",
  "key19": "3MkGJa5y2oTv8ycowDWZtwUmZ7YY7FX9NhAwtiarQzbukV2HdHPyLNCVhLpcqEnSerLQ3vH1TxhUX3NYD4RMNwAX",
  "key20": "3Sqovz6xuEN6fSTibUoCc61j4hyDVWhsGfB17UmZDbBu5QZ7hhYZan5Wtfz5uhXiMWcmNtkyor21s5XtaXDtJhP5",
  "key21": "WPwwudyXcbMzDPXLX2Y7ciAkbXscAJPYeqyUdQPwqb8NfkBHzmF6Gz6dvekCEwCEKh31KxiZdbDm4S98k8GZeyi",
  "key22": "g6igFmXey3dSoyT9NGQtyT3M3eMbKPQwMB73BeCTiXpV3kfSiQew4vZfWLjeGMgy6CAiixY7cny42Sp8vF9rsFZ",
  "key23": "2jnbEAcLBxUJRZk1ZT9X9BsPyfErjYFZ56ik9JChBQsUuSXBjhJCryWkwqJQbdNCjR7hFaDN5Pz4Q4Ybhz9Zfe4",
  "key24": "61QLjo33j45pGUDvSKoiCf7Ac94tHgg9SWaJFZtGFgmqhnLGzRQQsPfRUGk1dQXBhafyqyqpGahBhQkwpnWSHxZP",
  "key25": "22CuhPFCbYcAa7GCjcYGntNCjk7fRpGWsW4d3nLuRUsYDoAFdzRUkGGdevacGZDjWhFPJ8AEMQNP9J6xwGaNqMkD",
  "key26": "5UY897KW2zvZHk1tvS7yNFBUNSjAHRJ1BM5dTuMwM7cNyVRei9DxnNT9TTgieD9d8RTzszn8xXZBYybwScYNrWeT",
  "key27": "4KGL9bZCLQY62JXzsAcGsXH1q2P7kUuuHedL4DDUN9mvqCGpSdyuHx5yvKe9pUhvepFa4AmQQT5xWQwk68Bm9KaJ",
  "key28": "McPCGMWFgJ8Tet8MVQBGjSffHY5VHbpH5drGyLJxXgnSpeiWZdbv4Kz92ZvkZDwHsEs5RJ25D3TNZymU5isDnB2",
  "key29": "2zuUseb5KEfxxi6fNeadodX6jnbu9BTNo7C89KeziqBUrrdLcRCYj6NotA3PxRLcxYutebFL2iM6CWNqwTF9NvV4",
  "key30": "4D1q9Q9D4ZhTkgyYeJTh83FfYWYV2MhcXQKGjJjGCkBcdqDFYtomWrTnSSy58Z43Nt8EGZ3pYUSpfoeTnBSZVUpo",
  "key31": "NZDNZNzzzbqesBTN9Gs2gSZK4RHicyxFPL3Wk5JAGDiXbwJn26YzLiTyagaUTHq5o9eBf9wewd7U3UbRPhpXuwT",
  "key32": "3ePLUMQ2AbRLgNdTKr5MszwW3jAxJa9DSaPJCu8LEUaboyqNyzvrR3Zh92pYYEKFCh4RJXYaW1hMYfeCyYz6UkiP",
  "key33": "4KwzpaDnwBQ62cbjHwWKk3GbonK7n8L8MF9niVQq4f2MWgknazmmqVA3K9w5U2ngoysxKBvTj8TBD4JnnHLZR1im"
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
