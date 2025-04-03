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
    "5YhWcPVgdQK1tDeHD8TZXbjyE4iqJzdQir9WtcvZmGFn63s6AnF8zoNqJGBhTX8YM7ppWJSCYSMub51RxcBnkQiE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wo7nZKcJXgUa1XytcjMK3uXy6vwFzMCmaSu2ExQL1SvpoaS3yTJqFGk6DQwGc2RPbX8TdHyoVfn1h29wpXDZh24",
  "key1": "5raZEaj8B5ee4egvqJGresPx6EVYQsah4QT3q7uzGrcK73EPLS7RFx1jpx2ugmMjeFNSmxXUkwaNt9nheFTVUgD8",
  "key2": "5LBBWqfhJHJQNVhPoDqK3zCSaReQKHi4UwbmbHMZdcArvs9tDiK95kafiBic9T4WzL99ATYJTdfZZPki8yB7rj82",
  "key3": "4dNjtBPv1RcdiWqjEdzL7edkpu9omXR89kpivEGjMBthB2VpSAwosreNd1N6PcfQJdUjDp8Xg27LkYdGFiaLUh9H",
  "key4": "4twAWLZZewunianfKPJ7pJUh5RA4QhBFFxq7nZJPLvKHbauRbrNdJX9QkkqNcAEV2waDfS8SN5j13HFunZcGQMvG",
  "key5": "ZQkCopkzs2ChytAQZc2fwQsJFwGFiX6L53spjYmuayZJi2L9A22Q8J85y4t7pUWReziBmofu71ZAMiVjKDWofg7",
  "key6": "3kGbQVwtGBfjjbbz2gboCWqzAKs5BJpixNJU9UUpnk4XbTymCsxJmkqmTcUVN3KmM9qNPcXUHNX66t8sYrs6rCVi",
  "key7": "5yuFSnaCZkeC3fs3vrkTRa9mQJWxExFwCJS3qVSuPQ5D7KAb9eZsUGCDeyDz8jRKMEhgUvQGttgRNcp7ZNnaSv3K",
  "key8": "43eNyFJM2woXRxLs32qjbvkkvzYuMmReQrg8ZmX9ufYsyCQc1jmFW6EVCZskMkVP4cYwkrHsaESej4DkbanqfzgX",
  "key9": "41ZJnghfSC3sZJrrmVd6cSXm4pDWVxUctQMgAfrP996ZUi67nxUQf9o7dYzts6ouiHJPvW8BnGR2Kd61WpWgEUWW",
  "key10": "a3xpcHe8MJ6mLTHvPkj4ggaweC174KtHbennhSAqoJEvfByn7ntAfwJ7yGzkzJfpZ1K6tWMnTgiAk8t6fmA85Mk",
  "key11": "39Njrs2tFQStHADe2YvA7VdQWqcAGMto9dWmosivj7cieQD3tTbzfAZHZ5o7HfePXydTL1YkeNUTV5uBWDFSimMC",
  "key12": "2f5ZCXevPWieWHErL4h2X9bmJjZC1G1NsnMH2c9mx18pKjVwrgyee3QGUuB6wuHBmqWzotLE6YUEzzLgukLxfrSh",
  "key13": "63pBtMw2rqb1yMFBDT3EG1hcv8R1K4N1iVihRtxJ8KuCHiRWNC6Fceyw6ceajFHcXu5D2WCYkF14dWSy44acnkCw",
  "key14": "4UrhmydhpFaGWa46vrUDqsPBKMjhEQMiryMyoP45fzKKmcQS7ju7MtxBnW9LZLw58Rm8u883FCR9wEbzdivk61iZ",
  "key15": "aWCNunF4cpginenrf5bjV3EzQK7hRDytNwDNAShv8duw54g1mMTRWSnaFmvMgCFJuLCZf1tZ1Yn42nzCdxEAU7j",
  "key16": "2ZAWNSjZiVnnzmThYyydF5ATbopy5JrpkwFMnFxqBG7ajDacET88w2pN5HEPL75MNrCeKPeTua5QTfUGnDUq3hQC",
  "key17": "57pHGAUK4VKbMtirJb1ETSPHiiAN6ZnhcAqtTceSPhDJJiSRzLgu3X5tKQtqqvVmETKunRfUwYjxR6caR6z4eec6",
  "key18": "26MiDsb3NotHn9ZQuQC3855bvNsGyjPDayZyqBzhZnzpPVhr6m2GyfRr92XkHs6QLS4K9b41rGjKiHmWzmVLqGGh",
  "key19": "2A7Ny67kyvjP6RXTWbX4iDzoC9BtXLBdyNFmZQpuXgHRrTDqrGoGDcbENMuVrY7xyoskKtpkg66juhVvc2TXnDv5",
  "key20": "55bEqxERTgELsKsQ1S1gGmosnr1txcRtgoHoVBFWCTaEZbczEuq3xPNNXgYeYQkr3CVGnRQT2wmVUGtAyuZMHCtJ",
  "key21": "49AQ3XJWnXSy2Umj2si1UkpBh3zBg23tn6fdgLctJt8H1vdDoBCofvb8gZ25sZe6QeTmp1T9DMc6MBsDdsZnBqSd",
  "key22": "4iMZYcFNNSWRtvcVyvGnqydLmJJxeEEFL2hM5xhhbKgztgVpeFVCJZNHHgykESNXNZK7FYpSyChNMV7tkhb891Gq",
  "key23": "HsmuhG8Yr51GVbeUVT3wFvrFno2cRrifZ9ED7VVUCU1BdXwxXrybq5zMCxnzJLJRskAj274umGBMGNc1f9CBTRU",
  "key24": "5C64PiNzF7nfiG5szaB4LpWJCeU4zKyp7hmfEvU1HcjPrRw99pwNzcwpBUrGykqsjuZ8xQCruebLRpqb1UHqCUvr",
  "key25": "45dqmgv8KS9nGHApBT97XLMEpJkU1xJGwDJcxfZCVmB8794c38MThinkoF3w6ysTq99ntP4aiLgPHM6bRNX76nTD",
  "key26": "22qJYtTsCekd2VFuYzCrgXHKHg8eFaNg4x6nZbZURcKJexHFpGYUZgNNPvt2fayNZLQKiwJvGkzYdBFGPNmuajzB",
  "key27": "2KxtN6zPJbHHsJeAhxq6uZdN5dwZYtHPdwhA2RV9iwVUHgJkd3cCwKNbGjky55NvgLooixP1XWQcDHHm1RRQ9ph3",
  "key28": "2N7M339YAjLGn3L5RpMm1Ksc74c5MKE5xsKdjR8UrBmkc1e8e5mWEusFYC48PuHv4Dhd4Ltc4vWFk8Zo4M9JRgu2",
  "key29": "L2iJBZQV8ZchMzsxQyNijHeDXkPqNdmHS7VqW6Tsgivd9eY8vu5ctCrmp1MVZyd7R1YrxAAHvDABMKbuGdUpRR1",
  "key30": "4MDX4rYdpnHADbJH2ub6WnbY1LvuhkdhpRp6nLJQYGi6kXssJF9yWx7eU7Z2WHk5BFGJcMev21T1myg8bqoEhozs",
  "key31": "264fWw3K6wDnUPYKme7e9gTf9X1AjA7tRrUMqULTLgHCMs35mA2V3tBRWBwLNfR84CVQTKz1MfidgYMTcToKfQnx",
  "key32": "4fBpUQ9iAZSgRuhJG7876bj7HXvuGqo6ZTgaXikPAwXQi9jdfvTqtzmMaVErKM1tQhiEZQFTk9RY2ihFQKnk1WPQ",
  "key33": "3psn6TnZLVkWoYk7ywSdkFNcfwZYXwXptNL3rvqwwT7L5d2abVejZAkhWQvPh4rtjcqWLrVR2FxfFgyEqdLhCaFY",
  "key34": "5Rdk8evcNUH7hbixHuwrk4oxTWNhjANs5K8v2B3MwYSqJhaXwSgJG5QPSj975eZjwWohMHd9gFanmCvy8Ay3FndZ",
  "key35": "2b6fn5he2ogsxLtZuQDTsK3kdCVs5LV9L5ciMEt4ticYnSn9p3m2u1A9dSz4VgkTxpvmusRYsZE2aMNbwWh6DHBs",
  "key36": "5bMCva3NoKUg3W88LA1EzDmYuxjb2ivUTbufRAvWtFrQitSXDWVa79p3MCD64x1ymudx2bstRM6dWcw5EkJWrBxZ"
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
