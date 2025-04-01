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
    "5o8dRghWNtxQggKkf2o2UVc3xLZPRAnoRk94wYBgLLAG86sxtZaQFsPFZfLd1fopzXKykgH213r3cd3JrkFz79Wa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31hPBR7AJG9HXAXT2didt5dqYZRy5XTe1otg7Meo4kFxWvmbEHhUhXnc5mtrgr8TKAhDRpTB6MaG2fSyDeLVKcY7",
  "key1": "2dshDM9phPFwUeQt3BFExtLhLjyCWNNn3Tj2AUG5jL4Kp87S5kpo3cA5uPmEAXH3tscnqrz4DyUJhKQmtpGy3184",
  "key2": "5QTtKCZmTu2kzG9ru3cqfD7QVLwg8uB8GYHaDVoCW9MabC7W3kdR7ZoccrTSW3zKrkBXi4NZsrSUuAgFN8ai4JFK",
  "key3": "3UUgrYjY5jLGN9Mow7Vb4aJb64Knn6tEva22qoHwuHCFSTWPQCPA7XLySrGu2D5sodUQ73WKGqc53ZBmh9CYiuWD",
  "key4": "3Gzxja11SZB1CACEgfjBGnzeB4kiBRhLi6L8CMeAqZD7GE53BiR9EYzR2K6oZgzMVYpsrmAmzmeN1x9gno7XjMma",
  "key5": "63kRjQPNjJtF4kShdWZ9c3tMhsxwKYGbCEXbXoDYGTojBPyCB63fr1XcefycCXqsFSMnyE3uLnW6icSc9KNUTNgc",
  "key6": "5XnXjAW6Ys8ochvwWeKrUJdDA159voKvMdoLKY9baC5qnxSnVXJKdc1B3cxKXXLY1gxArdNZd1NF7k9TKB8MXQFs",
  "key7": "5aH3dL36CLkcrmup72v9J3SVre5Vgfmzwt66Rmmr8n2MXDppe23DMt7ky5zhGe8gjgHt5MdKjEWgUMQuovTb1Xpf",
  "key8": "jjfwtvhUv4rdwCb6MMzKQjvAHPWPcxgBkJYaBKEY4ekEuktVZrqxtqnLWv3pu8LaL1JByvSqejZoXtCmjFXiKvo",
  "key9": "2pukXE51H24hjJTZkdXM33WaKkj67F4uE1aoSycZrEmeoQ8g4sSgBawnM213U9LnHNELtHcgjZx4XrV17oturqcJ",
  "key10": "2wsTDuCpPeVaxBnoEbjNEUtqs1NsY6ZXveGfJVQqdEBkdDGUUAvvYfzmjdrQx2BBfqGkWjdYu5P2K4cdg2XSheAd",
  "key11": "2vj1USv4Ugjpb2QrTNiWNKjiSJfgbgGTeVZXQ3nAD2s6hCzJ4SMseJ9nFigndg8kh2k7K6b4fTBDUet9GjA1V1oK",
  "key12": "5SefuJLhgfedQGL7S4LSDo2DAZ79NnhREsF3s7eFovRvsvkiKQQKj8p3w6MUEpWbTQAh4xiSmCXKiWyy5jHTzyZg",
  "key13": "2AYh6h3z9cH42Tn1yo5THS3RkDhYYknqM99DKhh8pzMd9ok4gMSsLKsH7m45mAi8eUd2NsFq9hkztv26mtEpVc1",
  "key14": "4vJdGGtz2sNzTc8qEvKyPS1jxWxxyZMbsAMrbVgkMvdFRspHXUX82Sbzwu1NF65o1ao7g4L36g5oeAfZUZ5ZxK36",
  "key15": "3gDUN4osmTtbU3EhWyxuVG6pKShTe6xGQaMmrb7RdJEkzupDXcJ7unQ5rU9ask8cV1H8decEmtan6EXW8QqNFC4Y",
  "key16": "5YTF7ox1e5gEJY9S5N2XF1XrNsQmNLbRUbKJGBhJ9TCKToFm9ViApQqQXr9MBtUsQUTWMxjqo3mNVYLgpLNHkSeS",
  "key17": "Fe8qqSkenpKJqUw7fTXC1WA98i748zvWNujMvGsYA6cYQx49DXqH19JkUHDRPnMUUzwg5x8VrAikrMid2WQscBY",
  "key18": "5K84DfK4z1otWojP6xFToENmA4asHFU7sWXEirq8e3r2jAMMKnX449NsX2QvcnuL6dN7ZvjZ2ZagN5135hWpw7gj",
  "key19": "3wGKPfNtLaRnJ7hDCdyvg5ZikUX5Rs1XiiTL589pYWPYPyTnjZcucAS2RVg7SSLE2pCHu3KStpV59i7qZhAfTMft",
  "key20": "5umQ7ju634MtrSzDozAWcGrXKqUZW8naqTZB7f7tpo8oMgLvWoyLt8gBBH3bPRThcWYq8sm4j5jYNDBapiCnzjaq",
  "key21": "3vu6Cvm66UriJjUYzTULat94CRQ2rML3NctGCLz19Awu6XVBSZjcVxA73BS4sinyKFYZECSW3spogtkMsXS1qCX3",
  "key22": "3vkJ67WTjrK9RFNEAZPWwx9o7ysjTEdFCZf29qPwiJSjtnsvhwTMHxsd9WsqEPSvEj3FL3sEiX2QVBuN7EATtNx8",
  "key23": "oBaPpX513Q8zivQFaYtPoN9mfN9JUtymV1rxZwYypsrFt6AFXERqMmF7XmCXWwRJt92spDyF5RK3HcSHkmwaFQ8",
  "key24": "639xtsaoF2VCGNRwY6pPzGek58BtELE52PuNb1oCFQGhrYMhNsfxGxoRPDXg53a5N4p4sV7z3Kcibyf1jJXcp9KH",
  "key25": "31o6PCUvPaBNsGo1Hmu5XjjiXVBL7mVSXc7AQcLL1oK8ZtHcndjDoyLxbNx2M86rjurCZwGok4zkfg4SqZwGxrBQ",
  "key26": "3kdvnZ5yw81YkRoYeHti6bjCn78SGYbJZUcPQfJm7NF6JCnd2gW9BSEtvmmfzXkhsxscweo913aw3DHLDbQismCQ",
  "key27": "64dyk1LW84j85ZjsFRGQYtEXrnd6oPBrmPnGpC4S8i2m1yEE6pkD6wGFqSKg2MRLiC89x79avKr34nWZS1kXY679",
  "key28": "4k53WsTNB57iKJBrYzbgBhfF3Akiyj16adJgKDHyGhMYKu3jyD7UsEVKay448opY8MnVu3WD7r1kxnuHG9oUd6BS",
  "key29": "5FPZAstJSmV3QVpoVLFJP4qW3fQ4sKrKYMNiVcrAM3cngTFDxqMuTdLjrn8CDLxKCzGjHeaZ8QcqkDVKd91gnW85",
  "key30": "4MBTMGQWdryjZpL6VReDNiTPm182vz4WV39qpp1swfpJJbiMf6s2Kntx8EppdQHxwYtZPAK34wKLFoixLB1Rhwfv",
  "key31": "4A6TCbPv76XD1oz5PoRETicFiutMBGGoUDDR8P17gMaBXdXiKdwAobZCsDWzysLKGQcmKRu8eEs9YfEndpNryZyj",
  "key32": "45xmGqX5firNqXJpHeV2ptwMcik2T9nbbX8PC7n2g99BdUcbUmkvRW7ZDnt36JsgB8nMXWaaJF9jdq43y1NXr6Co",
  "key33": "JGSwtwvr6tMprFRPtmZ62ybfQEdGeQ2fmP6MqDeiKBNRYaeDZdap2HpVmv1ajefrNmApFY1i3L4KTyLgMoSZ42K",
  "key34": "4pMXmEmNw1c3tPePnn6h4GwH3CW8uMgtAjcDAms4NgbUUeBdu4BiLehqKzAhu9weizSRUDf8LvaMa7xDPohMM24C",
  "key35": "3AaSDfdj8L6gS1ekQGgLSu1ZZzxjzE8ERUXG8Mwu4EQ7HTPY8hCjWraWnNRTr1wdsXmgrg61sqaqWpEJXPx8qB9R",
  "key36": "2xpDSEiYwS39KqL98s5XqWHnu6y875TSKBLfzKAWyjZLPP8rq8kYReFLqvYkW5s8URcsGykjrSdSUWk99KFLRYjH",
  "key37": "2HZc5nyKZhvFcrxHo3rkdEfcUZ8ZNwMhmZW2NFGF3S3oWhxt2eyqKHTEozWqADKVTzRRGj2TJ7iDND9yj9qJnZrR",
  "key38": "2AK4Zf3rVU6AqUwM8PuyyRyNBraTTG4RXWuMhmYDhAN2bXSubxDWf9pM9SUwPVhNwxzRNpvUeZigZNusYK6ADZG7",
  "key39": "2Cmvn3E4wZzsb1kyq76SJ1HVX8P56DiUchE8YRB6kNShS1DYHNCbbmTGcP44kX9nWzg6gm9YDGvzZUSkyLscW1vZ",
  "key40": "F7PC1nBKtZW6irHh6ogN9KdgiqBgBiyYGMuX1efTZjZ7WyYuUTZt8oX548Lfr43oNpvXXHu21pKAKvQjUA2RikH",
  "key41": "5b4c8Kf48pb6jZ6oafJWJPYbC6H3JcCKcjTrGMwagvhfqRCzVis9jzE1WAtuSR3U5dgRkekjBtvEM8MeK1X2feCY",
  "key42": "3wzWWHfSj4cRSnr8NqcLJgyk12dZhCJ2kzrU6wc25ptU28vd9jR764cMiuwSt1qMaEFpEkN42pgRFFwN9pSiUbeh",
  "key43": "5ZVD1GGJXfzJHBX9sRTYNJd7p3piCdXSpL56vu8FziJGE5foXAPR4gEpRvexswixPJvhx2WMHqQ8nToN4pBbPoH4"
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
