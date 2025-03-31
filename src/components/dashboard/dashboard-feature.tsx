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
    "31AhAZ5NF6KRZgUZDo12pq6PSwSNtYWkcsPF6CKGU4NVyiBxT3Wz3836B7naQ2pBmu321UMiCdioKKwBXnxnCiio"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B1cnS2DaKob3ZPECZDFPV1x89uBat9RrEpZAzh1yiy12Lb8LNP77LKFMzF745NiMfBF1ayv4zTrPKJ1J1jgm3RS",
  "key1": "5wX35ohTRNEPre8r4b6mbfu8Cq1nQXjDEo8V2kxMCWT3GxmJErghKn9Ag1f6z3p1sziKZ2gWoAJRea9Qu3wMZqGk",
  "key2": "43Rrd6zWUua8VbwEJeUdhgyHgAkQ8H8rygftTzBYYAQxBVK4jXDS5tk5CMpNAtZWD3uRbpXF1LYLQHQMFb9mHEXm",
  "key3": "5opFYj1ixH9umxmGkPvRpob69WJrQYgKrLtbfTUNj5CYR1RFfbhFA7EfTzEHAqdkL8UNhV6QXvrAigWP4WRszK5H",
  "key4": "5THYw1dcArTWoCHfduC9tr83eeirz7YjLQN16LNZZ8RDJ9KuEfNm35sTxbpF1KQ5GcfQTSEvVdiwBTK6QL3QgaKv",
  "key5": "5AXyakedqdDXx459PkMkiehPQw7iXGRkqAhJATJCpd6WcunnvABjhmJCkfmVsNKoq8mNgBJerbKgukmsZiZiv5cu",
  "key6": "5G871VgEC34obcY3brDTvKpVsdt5bUqfL7MWyEzFjAHZEQRCn7WYzKdDznHnbZ8M6NXSYK8DkH5qmXWwSfjruYKt",
  "key7": "2V999ghxu1Bvu7SzwZi5fhgXCeU5cY58pdzYN1EqG5eVUW4evDvpL6nyP92A9xh2sb5sXgmsW1PMSRTDUrQkyhVz",
  "key8": "xWW7CLeVyA87e8cmSgBEFdo1VVeF7SF2yCxWtymDtgJSdZVkq2Prd2zwCkRFE1sYWSygGSHRUcBfnPtAJAgdLbM",
  "key9": "2QVs7175ig1GA647ALJqmZoTvVbAypUfXhQuwMZQrMLBo2PzBU9iX7HTta3UpRffbwivZf1rnd1CDStgaUc8sDNr",
  "key10": "4DeQBEjCy7BMZvSHysaskcdjkCe4Q5MvnfZsj8wbuJwswWt3L7yKaqipBNd8QMMx1CMtdL1UbHbgEfJb7tJ4jbvS",
  "key11": "3gcnNL3WRH7mhZ4HE3BAmHxboanpZqANRLXsuVFzgAr2hEgbbLxzegmHMskwhpnFpwWV41Hqp1dwpK8E45Cfoif7",
  "key12": "28tWmkvJNxtx2XygyAf3Qt76M2nPWBc6Qj9CbLmrYLpRFhCBpCNV8ny1RoPX1LsxcB6YmanMB4sWeBooFeatd4G1",
  "key13": "67nGs4FaJu7ATpiyHEk1pZeVVc6GNFqrifaPce2HPYfALnayfXMSM7N4CkbyyzdqKpYVV2zb9xWMJhVSw3AphdpS",
  "key14": "3b27Dh5RYdA7a6C4j2ZwLXjrRYFTu8dYxCUCgE7FrFpVx7w3BBEeuBNRsjTVGq1C1r3PDhfYM7SQ8R8nQC7T53Ry",
  "key15": "3rKwZRygfiJCuaRBMnnkuvhyTzviQwotFH8z4tiuqpbTgtSg5ci864Q6DptdbJuBdRWowGjz3knyqu5yyaWHQARv",
  "key16": "56TppeXySHXBCmb1yYJ9xVrdvGbGjXLPKJg25yq6G5aFKRukcgZZuyZPn6PJ5ZwWLoDJ6tN3BT78cgFQCjughp1D",
  "key17": "2171MsiaGwWyCiqbcn8wKk9na8YshPvoFo1c2TXj6VbSQ7Po2FpBPQSkc4SZiEvqANJVaohbhHsuYAv3AaSX5cYr",
  "key18": "24tiW343jSk3y4qoM7upS1BBF3papCC1JyHdhhX3amftqnwacoKFiS5QVKGwSD1NppbZRCS2fW39yy9P7dL9Vcs5",
  "key19": "ufqs279fLPz2V4mQjVwKFo93twsEb4ThvHtZvWUKaPRKszsP98UzNJm3xnMA3m5MXe91dPoHwGEkjZ9sGkoezZV",
  "key20": "4wtTNMZVBWh8VFJvMqVXTAmLLam7hMQ8BTUC9DD5A4qTghq393YgWuQvpcYyAhyKyiF6CiFGE3Wg7CWCspvrNQC3",
  "key21": "2RX423GpLcQ3im2k4YZe9Bx5AavpQSGenSLxjS2VDW355hEEj9QDUxXvXhV5pFnZnhK2aa6i5vaGGsVtgDnK75kj",
  "key22": "3TKczNaHDJ98XQnZRxby1qucXav9jy7jk6gBLyHtU6oS8YU5Xfp42smVb4yH3swrFpZkmFqMuXtzvUmmcyU28JAV",
  "key23": "RCXfFUsX6Wg3p6SfTFh7vLDe8nCDoj1FKQc5zRrPMbLtSVKBdtNECguJ3BYUcJEvcZjKDxw61Xv1RHm6SZTqYsS",
  "key24": "4fYNDYh3FepLHzVnDMuqSRxefZ3E6ffuqhvtD6zRL3FFK3q71WxkCu9xM2AyPw8xUi8HHBYdoXpFb1jbLvr3fx8L",
  "key25": "3pZXqdWcpRL4vbJtRD6KWNw6vniJBKwXUGGAwnSirfRNtv7xrsTMrAd2W9cZKmeK6a3LC7Ffm7C6MVPgsjmrzM9r",
  "key26": "36VYToY9Hoq95h86s56oLxEK3cFGWZf2XzcLwew8evbPbfVSL8dom9Khi78LNR88KjgU6tCCNLxoYNJfB79JgQp2",
  "key27": "kDtwvU8sxc4ckP3DwLCahYDjsqWUMoHvQV5ffBkEZi3RgcJbuSb2to1yWzJ6WdS4p4ydp9NSZStbP382ewgSuez",
  "key28": "5ftPqfRGWr4vyanfb9xmgSUMTtWbbx2TnWeJEFjMBCEmYZxrswjJfSMxDzdeKAsvsoexYdhe9bpHvEKjmwSjpAij",
  "key29": "4g8XMnuJiWdAhTScZvG9VvFbPMs1eSEHurxnNH7sk48kdFt2WNZ3yk3M9ZCoHrJpmkejviB1zHBNYsSnwPqVrs5F",
  "key30": "2nY2LsN8Fr1D4B8dizkKrSvpU3ngD3PAk6ZqKGogj35fYJTZ55byJpbYszHFkjwFx3jXv8WC7d4iH3Ntdu3f2wf5",
  "key31": "t2wuKoi3uNovsP8MSYLZS5XxZqeL8CLb4H2biRNVzNRSShCH2sYvK253pNQ7BAvBgDvQ7KeZYnasVqZwaTn3grr",
  "key32": "rvGR5sL8q6e5aFosnSRQfikWgn6fApSSV7PVeDQ4nFLfoqCZkdiNS5DdGZqPprQrP2NnEemMrQ7ShB59fLdSfpA",
  "key33": "fy6DwPDrUjhycoxNCbQeqwE7fUeq5m6iPcqThearH8etTn2j6fZrCfaK4aWKhrjkPRvSXu9wenzG629t1QiQ4ft",
  "key34": "3nUmmRTkL2mvQBWg4gU6ohTFdYzQ5UbnRbvWFfGv5qU5jr3yG7tqFo5aXFVTXyZWHSUXBMVQpboKyPaZsnqMheNR",
  "key35": "4MtJnpCZXdi6C1EroYzZ9xRvHJ4qJguRmD46qJS3YZ73fXijyq8AcwBcsUpZKZE1angBFHmJ7Yu5J55Xah2dKini",
  "key36": "56bqWaa9YSjm1Qf1ZZ9Jfeqs8xZtaeMuAcWwdKKmZJ5zDSuTfcqQwhoG3dL6MSFC5d6dvhyYhAFwFWpJQdXmuM9i",
  "key37": "4Sk9DxefSmPiBkHNhdCWLcQrawkY9umQrc42GEyZo3ER6GvsGEU8knP8yemX3V7KbfgRtVLmXQzCX1DNW1gTXyB5",
  "key38": "121f5emp9iA7jrnP1yTqBorq89YD3fimkGcMeeSRuP6oGKXjDNNXU4qAa1j53izcjUEcQYjFeteF6qSN2tKqYKDY"
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
