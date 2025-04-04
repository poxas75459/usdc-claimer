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
    "5TjDqYusBJJen9vWaSwXiUSuG5gsfJXXv1um1k4AP5AoX18wxEER9d5BbFmZzTLSM8MuwVFDQRCAYePfcCXnSAHx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gBUty9TMNG83Agza4Gm3WdH5bVKtpZh3gNhKPghpYr7kXwz762sn825AP9LCq19HbtZ2P6gJSqL63tX3mEzjuFA",
  "key1": "3sho8ZGBo6C4cy5pT4GqUC4RSTccpo1RrVRLi4X6LXZnzi2A2fiZcnro17CUZcT83nWDjxtg11nX3u2WojYDwHXE",
  "key2": "2dwCA4dfmeSk8XrPNmyQjWfMRG6UvUPcP74fLpSUJK9nwGkNqCakNfo3kKRSLJhFQXmSEV2CypmKwseacZWDDBgg",
  "key3": "5WcGEmzwfVGHQEfRyUuvFfkjSBrYtw6Dp46DE6Yjdc9EjeAs54SG7zquWaJPMPosDZVKWXNqcQW8jJrfZayQMEcc",
  "key4": "5NFWpzXcF8ceMRUZbWyqQ89yDH6JwUFtjY72GSNJrD7aCgkdTuiatwE2WmHHTAJhVvJ6kkGTH87peK4J1S8i2vsc",
  "key5": "6uQWj8L6kP9CQ2yMMCJHXtuUMD1utKP9nUMUdBo67ARiv1KQr2TFsjk3o7XMzvRx8hWk7YkQneLoAKtabcmxCWH",
  "key6": "598VLNHw1jtGvTWafsqo71NDiHGxrdP5JEEWvsnzfrgKVRyEwUkcjQdtsnJSgCVZ8bg4L6bUgD13NG7CtdEwZzya",
  "key7": "3RepLUxAgEoMxE38VogoPD8XQu5mEFPYwZjRTiq7mi2NMiAJQa2A455yVxdTxX8YbpGVvRQ6n1QbuecGKmG9EAp7",
  "key8": "2rNydoGKpfB1BDHqHeowKgpHHnKP9ZJhkdtsNwH23BcvQxsfroJzbUbrgAoTotvCyzXT4iKQz3LLGuEHLgkRrat4",
  "key9": "3ke1UH428Qnet1MxTSna4945zv1J2tmKVEeV9Uq6aVVD5aQNqKZqX2GdAqp5aPjuPVku4f8TW8ghynt9XK4KQuBR",
  "key10": "3AisHgQxZCQKSHeFCMtpFp4k176LGmfD57UNc9hW2q6GrHWm4Rbw1cFT9eJMgvbL41kPaa6EkEs1rrMgKt4KwGSt",
  "key11": "BUbCvEmJruDYjJcoa2mgFUp9EHz97zM8kfvHPfoUWVduzkbj8u6mymrE3mCUYts2oW4dCJJuvs3QWqCe2e3NEdM",
  "key12": "55by7qFcDbNJrqeSwedaQbarqjhNgRAaZLXeF56j5PifQDyXM5ovHr6D44sBMY5xpuzkKyHAnD2Fp86gHa2p55Aq",
  "key13": "4cgXHoWLqvXH9eAQkXkppfNQ85ctbHPLkFbU4JzTA6x27kyHGQndTYUq6V4SvUAt2JrhoCUS5pA27A1UDLhu4HXF",
  "key14": "3sHrEp1XmJQDsGmztTCzLF6UpA5gRxS3KK9XxtZV1QRAtMKE3UYAxsXboSs5nnNw86AXrqNsu72hMDuZx99aVR6d",
  "key15": "2YydvgHQxhgakUzNJ1fWBU9quBQhVpwVwpPAskpeLq8ktzZ1WuHvBaUenngxHcQ1BWRRxkfuKy8TcS7k3ctTWcyf",
  "key16": "3zYjsGYpDZXBWsWCkY1fXeh4kAW1771Cyxx3GXBmge4cDSdn8PPXBa5L4QLcdLn9qaCJf8ZzQ76RznrToZrmfG3b",
  "key17": "3FyXtnLpN7F5auYWCru2Yo4xsXgRbib155LmzZdn4hCmzrpRA9kiVK5JFe25ZxCUYoL3cQdruowpx6P6AuGdJTf1",
  "key18": "5eKccpwTQnZQbQJbjaUHyGnbVcNMbFeq37EEgsz2XhVStic4DmKmRgj1XjbfFDHH3K1V46JXj4C8pTnUXyv9C3Lr",
  "key19": "JnH4v6NqGnwFtemubyT1cCmYBCJurz3tFbjrdx794kuHSvzYJZ2yvstQWCDpPJMoFq7ZasSEMFz617oECYJjThq",
  "key20": "ZsdAHo6V3EJSoCdK7YxbU22x5RPdDWAjTmyV7vLh362uQuKtWtMHvWXhT8qKrfj6pjvHtT6AEfhQNxynsNxN1Pm",
  "key21": "4QsMFvvFUy6DJK7RFRn94hknjzyyoxa2htVHDHNN2uw7UPB5cFJwkbKoXdR8t2xqL7uPsGXMcoLyg6G6afnipZ2p",
  "key22": "CBwjZxKwBa99jvRN4qbtEHDdn8qRG4XCjFbo4NbPvFDVrten2vwiDj78aqqhsu1ZAsgGjJp6iBpXwL47b72wDsg",
  "key23": "5s2Azfg5SdJMs3i1Za236uxHVhEbKfgAcABRCiWZerYbLRzoWysgChqWB8T9r3m8XrvqTX68ztsBwabkc7zt6EhX",
  "key24": "2zxi9mYusuf1ceBTG5tLaYaeXFkwhvmM8nogPwndRjKbKCLNT1PgdwXVg37sukacV2WTJoD3wUq1eHhhj3EAJ5AX",
  "key25": "5i3pv3RRwYkaGVFjJ2gko6mFhxEgnZDiwxHEnEmwK5dCmFTtoa9TJDxBDA8PaWzj21pfCsNsUA5n6rC4mD8H3THP",
  "key26": "42qkB8KQ9pxJbZRdVku52s5G8G1BJ1q6FGCCrUkgbHjGce5DrwTzAFyLEpekb4MrqimkvKDDRyCnioyP7Hc35W9w",
  "key27": "2hios7zy8yX6uHEzkgJhNtizYhNDXbaZNvhxt8zHDehpWwv23ifbD88tQPHufuCBoVig4StVXGumLqJyQgAVDByA",
  "key28": "53KZtHAvVT3WJ7CMpjiPWeRZ7pBEzybYQwog9twfq9JKTdBWpNKeKjasWsBrfxt321rrrwJ4F1d8mhX8J7XJ1Fr3",
  "key29": "26PfD3etNayCfe4zX8Mf7nfv2Zcc72TkxHC5vdqqSpKj5wqkqGwvKBn3k5wSoSX3kZrPHNvwCuzAPsPkmD5Qgid3",
  "key30": "39Ti7NQCv3DTv7GcWcTDD1G5wZmnEuvqG4Brnk8Zo7CWYQJYsubMpPLf3PWytYfCvv8VEWerkfC2Ez7a45kt5Kgu",
  "key31": "48LSdxe3W77zhM6x29Csf9hbm2hZf7RvqVskgrizt3XLV7d916LbyogYVw2DGJiLQQMBmTESkJV2VjkQxzKtLf4Q",
  "key32": "3NDW4Z1HrLwmytzNYkfD3Ub4NxL3xNKaDvvFoVUvasmjPQqVAQBTpqRMvokGD7UcAexxQpqmX1smZpTKsoxUnGVG"
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
