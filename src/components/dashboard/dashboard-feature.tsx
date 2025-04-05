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
    "TmtmT7pXBGYm6G6rzxP1BF3NS5da9VbXMTtMrpa1KWMEGpe5t2gCXhEWKq8aN4Agj53jY4oVmJzfukohk2Cg5b3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ev552kk8WSj6LpPHn2SFWGcorHkVJLbM81wZUkWvCCyzwhJ6r2Yf5hTfAgrYaEGtjD3bNp4CqrqpDWSwK8ba6S9",
  "key1": "4n4bJ7BXucsoT7By7wXhVsPAysKzZAbsS5vrzYrkQpQLwVDyJEy69nozegPVRG2fPWtn4Xohbs9d4xxy8fGWqwQL",
  "key2": "4nVufadihk93g8XSzpYFRaFgCqiwu4QvkKV4CUBjocfrq3dD6wPog8n1SmME9JWiFgUSVFsnwkpMpiML9PYhyjdZ",
  "key3": "4KGdcKDTVo3DPJxwq8tobhb3R42HodmPwxjGQT3XcdNdQrVaZ7wF3QLkLDtZVdNxZqs7PXZPEEF5dihcKqmenYPS",
  "key4": "kzQVUTgFWJqGmCxuNHNx2wWtrhS75i51xo3wg5QqC46ni1TndWb73R1hJZDkBiBtCSe5aoJZjcDozL7wX76Q6y9",
  "key5": "SER4WtW8kB1iUGjJy4FadkrEvvme3qB8L1vdghFTfi96e1YCSct9wrH6WExpgSitKuykj8pbfymFyJWoHCYBV48",
  "key6": "31G8g5YHSGacFUmLnPs6bUqFffdNXaQcEmAFLuBuVfnrs2BdBpPab6jCtBabbSPLrxcdG7YoV1wEXHufVyPJM5st",
  "key7": "2sMjEH4FZnuNfEchDrCaAbjZAtxJCpokZC6c37PD32TbZP8CkkGP5Gp6UH9zf8xgrrCJeoZjLVDXFCAwX7L2Mzuf",
  "key8": "59SbH2TkodYqyTC5K3LRfXdNSUZ3AcN58jYBgEu6aV3Ya4r2gD6H25hUxAzhWaXmMr3cRfUJuypDM5pRKKHmjNNy",
  "key9": "WSmUSXHCZYu6ajYwG8R5Wpe8bUHAazVaBXSuyF7nhDwprxqHCbURw1g3PBLPruwu2ST864UdYMFZjoYLpHGTbwb",
  "key10": "5cbsWDEXSNhvphjK5pwA8ABiBQBKJmRNyF8wf3jyg8sD3mB74TD7HKxjbPNKvZroudtehye3VLrsx1ANCRA1NiNk",
  "key11": "4tZH7vDPjZXGfYYKZjnY7WhzSvxRTq75JfNTD3x3ozW2A72SBVzLmq1ALCbbAdfuUhpSGVUySnkiT4JjKfGRCoN6",
  "key12": "nUjd8bZkcKNT7oBKsNqPByHB3DUgCJdmbi1QgXoXrJ4dw5GGtHmTV5nLN32FFhgVXELsiyyd5idDfgcR1jP5Npk",
  "key13": "43hbXi3NTGXfDBgb1dFoZyPNy7774upoTPyqhYAymJYhuSj4pVs7adnGKTuQGCydSJPJm95YQs5hLTxVu1RQdZ8h",
  "key14": "HQdQTCwgJsrkAtTA3Qkk32xKLsB1EBjMyU8efZtYG6HwNuHwkgMjBSYZF43XChPu16nFrFWPieULUx2euFfjMb1",
  "key15": "bGYfLrYAuLvPJEwioLM7u2V172t7PERsonAvB4g8UnWQuRtrPX7QTrUJgmVexnpTddVCmZPm68xGw6JhNPS4x6E",
  "key16": "5QQfNjGFLXpNDQ3Pk3YiHz44y3uWCCwTQeUg4sUHPm1s9d3K66DSagkE5WAWNHuV9oDUBUmrkjzGJM4FHKsHt8yX",
  "key17": "3WDXF2fMezbPmwdcgKzU677KRRDaP7cj8gss8heeuczoRU2QbJYcYFGfekYg5zdoVCQ4B7ZjttnTA6vKvGN1WM7n",
  "key18": "3tN5bvU7Wx2215NSaQK1Uh7DHUL3QVhNCdP2QqWnbxXwgxKtmckZBMTpEQZa5dvZ3LKWnQSdvbmjbqTzhj54pHUs",
  "key19": "5nRKVo3wbSJykHo9fWkTK8pQJbAkX89o6VbaWb66e4GUq7ipoTvkpmgQtN8VDW7GvZ3EL1kD3FdYiysCjET2JbGz",
  "key20": "5jkcsRAutkH6a6zBQ8tEzw6NDpwPZ21Vcw7Vbex2jDUukPM56MM1yw2j5zDW3Wbs2Qr1ELsLHpYwjiYjmjgyhzgn",
  "key21": "2WaVKDgLr2s7wS3ifAnUPpAwaStsiGbK1LvSAP3xRwk2qDSpLWYtZmz6Wo3LhpwNBNJUyAFj9TRYDhNvvCxE7oH6",
  "key22": "2TT7Yr8oZQPYQqjCuvZZHDgKcorSS6UAsTt4t7PxrDvgLpJzLRiC2en1MJA3fH98TXdgaBPJs3VbovPPSN7jCggK",
  "key23": "3zzbRv13JSrqcPUzRwtCbeEvJ7mPa2qMJvX3dsz2MLAs4TggQJuibPL9fh88b8ExfsyeuCMoJWkqMFdSPmt4hXB4",
  "key24": "PXkRL3LpLXofDLmKAgBn9jFTtnaH486e6aUtAvo9m8XtRNhcPjV7PXhL9teMmdPptuci5QyWK1keVur69WMDy4s",
  "key25": "3cWNENt9sNsERxTqPKA5G23f2hjhcboSoiMexnVa37AwuAS2qbE2pSjRmUNFqDCQ4DePjTibGTTUivFxrRiUWmb",
  "key26": "2xEXmFaVkiVGS5QYn6PcHNYeX4YMv6ztK8R69hAFoVuTEtN3dMgmeZp7P7Sza57CM1LzhLNpSwtqiVsDDRZvACB9",
  "key27": "3VE3qiX69VkFLbP9bL7o64RZpA3yMVDHmgWrnxgkyMEhTDeZqV6XddCbwP6f82JWofPrxW59GqPdo7aEgL34spQA",
  "key28": "4yd4GtCcozA5P63LGqQcwMiDsqVqEBU3gxAGw1NTJkns6QmYMfpVc9WvXZNPcZNi9qETrzStG21cJKuUXQiWLQiw",
  "key29": "j1gxSdUTv8QpnV3PG58vtXjzexLn24CX8HkZ6B2w3tULqKzP8n4CEiBnK5fpzwwn3KGFyHdX8kBft4WPGF4HfZS",
  "key30": "FxpU4ta9nvpBJkqpwjtqq5r4BKVQZC4K24G2XAkK19atTLnkmzfqM4b1UtMYiToNX4wuMSPVeiYvH9xCGJjSYyn",
  "key31": "3c7BdEntTApRSfdqtNb2acYxPD1pVnXQ5mMAmrwTT3Fz9Z6g3QKZf9PZiHNZj71UF3xxoRr7MfmXemXYhn6FAXin",
  "key32": "5XLNnr7aGzJWxerGLmXCQbb3FkEK8CPNGLQtDoYT9xT59pmAiFYHNs4AobTQmLhUFLDNdDf4K77o6n2FDiFD3JsQ",
  "key33": "5JydQKBRJ2disYJjQVetqiuBzRTT1HFfd2aY3brUhmfTyXC1wznGXR6QFcyX5cwDW3wmHkMTyVxJ32qdPuYUvgkq",
  "key34": "28Q8pJMUbzk36iVHTxMt7M9eTx9UvMRP8Z9TaDejmSJoVzscN4b3EjBoSuQvWxUVD1x4tFKsbAQ3EtzkwPqEBSei",
  "key35": "2iu69PZYgQMWJDL38uKHb9sBEPQ7uqJuiE9hU1tvhB2nthBvsau8g4nE5Wh4DSaZsbVtTMC2DKH4G1CNaDXa6nsV",
  "key36": "5uDWuf7GrAxPoQjQUBKd6jJg1ws5PCD5zKuDqAk6MaV3vT7SYPn4GCmFQeum3XtNRZXT1QdUFL4nhuSGgXcmgVRs",
  "key37": "6z1RyNPWFzyNwdZThP4prJqZ7hbU49RAorVq5bKCRBxkePGbf9jNBXgjjbcs6aroPh3ett5tAAxHBb42q296wMJ",
  "key38": "4QXwKT5HNuE4k6gRvQvU51niRAAYNgBWrToPXixWGtLduNSaCRg7b6Z1fG7YWasZKpy6dqBpEBaPzq4NmnR7GvJC",
  "key39": "9PRiMGP6Z53i6xymXKtkUixUQrJSo41kEw4NGBBg2qs1Smq3xS3JqpF95YvbU16bFNrYWUy1CTPeTnu2xakN2zb",
  "key40": "4CPWfXAgQAbY12346WvHzeyJFR7DGZ7JpA8y6RotwXav9rxHyiUUy8ihdGqRC3SyBbWYBJpMbyLD1dNRC8wfGGJb",
  "key41": "4tJMB3f2yBn6Vzfgx1ArL8Ns9pzNYUTakqs59uTxRYQsY5kzfJzBJ2usPr3h1qnk6JPWaHFzHTskwVmtGUvsajks",
  "key42": "5hBWyDwBCqCBqhiavTHiTWr24NwAvyqy7HRj2X4wM4YFEfeAeFeC484E948nsZ3RKrECSYpD7iZmgLgQ1sjRQnWd",
  "key43": "ceJmu6UnGH1YRpygnqoBFhMb46WD1Lp4Gs1qN2CnAS7BrCuuMNRJSMH1EPryCQi3WYAmVZXKgvR4qcTEgh7Tsfe",
  "key44": "5TrFoLJ3kdeTctwTnLDQdA9yEcPTmqDyZYcaPsudDapRZbQH6ywVgikoLWbwoKLVZrMHcfYubNpwdSUoe6ByDrph",
  "key45": "3PgpspupAhCpUiFMRBLiFkvocEBgKN8KYe3YzhkerFmFagRDB6RDVzRNCeQrbQ2snJQKhfKfWQ2E8J7gAYq5XDfV",
  "key46": "5JNLnh8uXhmxAZddAhcrHgkS1ZMARMapJjeeLiHJxRJ5hNVBzJ9aZYgY2wdUQBoZQNq7qGBBqKWAkKQFVrp4rbaz"
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
