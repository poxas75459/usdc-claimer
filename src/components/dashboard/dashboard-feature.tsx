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
    "395iuJDA3etPf3Q8NzhXmx9D89KVKvFhvzVcp42WCvGY6MWccd9zH1cwxpyRsaLQ4wEUWxGo43TLbr9ETEPX2LZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58yL1qdzdMiC8JfMQ8rGqoGKYDd6VgPPJtjXFMQwkeQuucvSCN12satnCDastWfQMxCzFJ99mgeJujsa29cU4aMQ",
  "key1": "4ZGmbuPo38eoLR71XyxYrUud6zHLnqhKxH5MUXyiQEZUH1jjNBmbqhseYtvGmp67Hn4C1FcKF4BTEV8RrhAtVjd6",
  "key2": "4ckuigzDsPACKCBi5vjdWyVeJoU82Bq8RyYMtiHNFevfyfvfrjeF189bXkwh96RUFs37ka7RqpMbwkX92aD8i3u4",
  "key3": "RmwEoj8S2cUdsgi8Q3jwXAsRo7SWvLPgnuFutLAbvmeB25sYnFoyp8snehBtJQwA1fw2LAiWssnMXpDbBA1PWy4",
  "key4": "2b9egwrMTxms39Mj6vPiauRBpjVRMQZY6VXpmVH5y5myzi5GvucTG2NcpMTB8eHR1QqHiXowXf458enNxWTQSABM",
  "key5": "4uKLo9udFmTs4PByMisakH1nGtPebECNYbMD8yUpphMVYGfpjqxWmKVqm37abfu5bT4B1bVP8fwanoGDovRMdXxr",
  "key6": "2a29xi1yeYoqN9dhCJwWBDYMVRv78VRXFuDq2JpsHGr7Nf5X97DmdQLfGv9KjwrCjFE2HKhcE8gpXHS89iybyVRa",
  "key7": "59Mpu8paF8Lkhb9DoAqeNhCTRwKCuZYc44TNXSwZeoPL1bFkyt537QU5SFarh9DCywmiMiDqy6FrTmWCwv928HcL",
  "key8": "56aDmF3sPwh9EyyGpy4wYK6tcc16J5QWxGroisBMKTipWSX5AaJ2m8ejFXwjyZPChhkGf8VTSqw716D5qPuf5JGz",
  "key9": "2nCwoyceRVahpCSt2s8rTM1vnShSWunFL1ECSSGgCyS8y87GWfaKpFvcYgEjcpeyUctdkS1XJNPHSVkhPq4EiRhb",
  "key10": "42TpDSsii9jDW8owwyzb7BEBegkRSDYaXBfWv3xMCdUsNLVtw2NAkEhduPSWNWZShEiwAVH7cjm1vYyLuwQXKkzS",
  "key11": "35hWkaKNhiqo8Ycu7ZurcnqXF5pgRzCfvC8aLdvRdat1XPoZTH1K5WUSaP4PbXs2FdWerM6M9YbrCmdn5maxBwYA",
  "key12": "5XrJ72tFuenW8c4kHrVggdmc5mQXmstmiPUjBbPZcM6kdNnMjpcHm7H2QCqiDdMtDomVR48bMYSUujyHNkc1oXVD",
  "key13": "2rFZWuVrfFZWseywbrgJvvdCA1CiE18AN5Vz2yWqKz4Rvwc45qhnrjHbqRbJqarrqfRGCTk1uFzhDUuaW9qob7fS",
  "key14": "5sWC8nneEWmBpWiP94nNDdi5cHvk1oJRvaGAz4VaCz95pCVTNEtbJX8jvQxPbTKYGTLkjnoxdabBQB9vLvepofAF",
  "key15": "5xAapsrjH82R4GSc7NWh8o2tkexCry6mKwjvStX1zGJkzGGuvguw6ZLyJegFsJ7uZBFyFFazrpUKJDD8jk2HpUtD",
  "key16": "tUKj4Cyc8DeBw6N1edVz1M76v3H3M6R6pP7QL5Ce9q7cmHZWVf11kx5Fg3CRKiNGTvZ9cN2piSEKSbeaZNV1eFk",
  "key17": "2s4uuk5RTVphSHUTUdA4qxEmiYiycx2A52a4ByQqRoY3AynSoHoX92YCZGNf7xc76NmAxGX63YiqC82xwj6MxEuD",
  "key18": "3bPRNmc23DMLWhzJQGk91Ns8Mi5MTXP5DTquYMxFEAmTLt45QFY57GT4rqqWQnR83QwT5ftc5GQSM4evjv6BWeUu",
  "key19": "5HBM8kF1sZwD8R3wpotPHFsChH9zAq6XzbbNCrNEQ49wWLieo4BWCuedTNvzYXHDHi9vuAYetNSttGafiMZNEMs4",
  "key20": "3nqagfrWJaDkbAaGyHP84v2kLSmpHWmw3Bevfv3JcwjYsHXYTgiZHNRWMMVtxd8itxKC77rAP9ddATnSJmGaRG72",
  "key21": "3bKhF4hJ8bg8ZJBD5HvMR9zoUCqo1iCYNg5xZ5XTWAWwx5tCxG86GiiCCNmUXaaQ2RNwEEJVEVXVeYZvJyLuXXvE",
  "key22": "3B6xHJkYNew3Sihwif1wzQTVq5R1NqmxujHC9Xw2zWmpuqySiXM4gKah5sBtwQ9G2ZBYYyDdxD65WjudNdP3hy9J",
  "key23": "5E4XzM2r2jvfgaU4Uv9eXnHWXzKKbLsNapPBVJ7GoT3UQKZc9TiCKQB6vQF71EmW2zqinvjDLceJDi5Jty4qYfN3",
  "key24": "RLg7qcQhHMLGmVYLwvuGT3ZbB3A9aHUJvHP27CuM6Fjx7r2CeUz1iqrqZWUL8bm8aFruqsZiWZGw2PPDBFApgeP",
  "key25": "fJ3gtwAX3BLdmeF5owbKX8QaaqQDSNmvAHvYfGRuve5uTFvv9fACzj6SE2eWT64y5upJsD2xZk6NGrS9pZyZML8",
  "key26": "3cReh1vrXV9YPMYunfU9F7Lhzv6ogRPAC9VkAdGMDK3V46yaqt4585uyVVjuF5VJw8C418861du3qXH6cuvEs2xP",
  "key27": "3KEZNXhQyZf4tekNGy9fLkEEVGR8cN6DyAKCEWrrtGnEc9bFc1Sw7Q99cyqenfiFiy3iSi1MWqVaYavvGpGce8Av",
  "key28": "5bs6mMybtvCTAtNwAdkbAmVqQvwxyJsvMjeMLS4xc81JrBQXbtHzNdDWwWLwNYq9roLuJLTAgi3qs6wyumjEybX6",
  "key29": "2UqwpQF8SdxXE3qtxTaomWAaK3wSLcChooE5bM7NygJKkNZ8JKJh1fS6QVmTRiU1aaan5kFFndRfbosVieVc1KMm",
  "key30": "4uTy6HsZopnPWobxponRmpjZBvPMiFdo88sXPmunJ2tBAD6zJKcXzdp5BQv5ijcgquLFyD4ffRZj9J8bgbMoyHqB",
  "key31": "2qLpTcF75e8ND3Fh3npcGuxEHhU13oRpmHJYMfXZbbz6JWgm3FR3Pq96Jf33qbzvJB1R38W3KqhGtRaZniuqjiJP",
  "key32": "4nYYQVCehf5AA756rCcN2xd3WPh24gGD4RCdkfs9Wz9CmQqkpXgdtL6uXJAFaww8vpaystVfqcYHFXYgBiLj55PW",
  "key33": "4yYZyvP9x5Whx8jsmBoikvv1RysvrMnN8qq4QRUbbSqfY6DA3JcaN6qBQ6MMWDQuhACq6gNc6zQrpSh3BrxwLB5A",
  "key34": "5kEeAwBsmwe3cqgYxLoJoeXwgJdwzb8SbzCwarsNh9mKpDN2MQ1ifmMkHJzZi5SJi8SBFfNLCm1GDS9qmv4LR32F",
  "key35": "4YErrPtDtPNScEzFMh6uq9A3kSW9Py1zjnk31VjYrX8ACN1QjkbDmBkPaWrpXEQaAMR4tk1mUuUnE47Hn7PkLaXj",
  "key36": "WvLTq2ysVnzB1QcBjMP9wuniEK9RaYCKdNScdKWhFWS5P1oMhFch1cJrEDkfcxUASz2yxyptUTbt72cLCLaCvjy",
  "key37": "5twM1bwC8TLxWm9bqybuCCDH98fe1L9YhXAM4VkHGTMNdbq6YKPYE43EBgJUfXRH3F35Mf6n5DaDdJgYomKRPNt2",
  "key38": "5siVt522qAxc8kfZrqT1GiKntVkxnMDZBJ2SstVKHFBi6dQj4SRXbQLEJ2u2ftePzx7B4cWbg9VzseVKSQwyGtgX"
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
