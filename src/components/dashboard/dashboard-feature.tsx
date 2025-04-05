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
    "Hvq9R1fys2x7npqFhBmbrMTss5V499o5HRhMpFZHdT9gFWRQPW9A1wiviofot9QLKHaxag3q6rrrVjWFDRhi3fR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lo16jQAkPDF1P8V62NyLxrKokuwUBZ75WgaRcSdN837AGGjSC9LZgFVQ4pHZhSwJ6X3K7sPqXSALDBx9ZJYnKbo",
  "key1": "bHYWKKMc9VGefCY7JGSz1SetBL1t2yuhhBjvPvMBv4rp7nVdDoCcAeeVQBsQXT9f2AJiiE8U8MpmwUvUeUjdQDZ",
  "key2": "3RvncEi3rkAJdGovuhRJRN1BL74UbyvTCEjiRgBw6SAgC3GdbQUKvhxgmhukZpkTtP6JnXSpFuQrsvLs5V5qjoiZ",
  "key3": "5ryXUhsLDhHfyGyJA1rsWJrSTPG4MQdcvSmNfKvShd57EPU7ZPxMwEwrUevm4gGr6P5mYHKgxEWXjntE4Hx7mrr",
  "key4": "2WP3aNTnPqRCK1yJhWpLGdLg5sVyWKtd77n9ZB3UZKdWcfpZzkFZCoCS2i6WLpxeFQisy2XByunUUHaaiaP8ceqp",
  "key5": "3rpMwkXDKE3eeGpNkZY611RAv9EL9pCQ11h99qwY3YJx7MqTpNA5MyaCyzVGfVz3Wk1YamWWjrLXmTfhjcuuVoen",
  "key6": "3T7m7FqMZZ9APkZiMhAJenaRS7bkZ9eZArCgTQqZqEqMuYTSrn3x9PWyVmJKcnQfboCW3deFLrzYXwtxcfF9yK9E",
  "key7": "53RER37hzp8vWWXgzAEyHEdC5wGUYxe9fhUDMhuB5vLLEXVhNRqmRwD38sxgqTcb2mDJzLn46BySvMZfrQNUMufy",
  "key8": "3Lcq9cA6266G7TvM5r7q8D5c7tAPWt3u8nRcJveh9uM8G3DX29X3Xy6KGc3Zuxde3BCNnSCjaJ7MEvjWp3BkzcLz",
  "key9": "2WFPoqJvHgK3zMW7uMm2BAPt2JicX6JKBwU4zP193t4j5yHBykz2kJzSimFjyzDMkqVeY5U3s1nnA9U49A2WkV5W",
  "key10": "2vKw9KFcaYpUFqtvTJx22KDqhrtNYVTXhJf21AvqJiKP43LhCTSm2QXQccvbw6Xqgrj7LqJN9arpVjchrdACHjWp",
  "key11": "2zB7mBqpHuDFKhZr2vUBQ2ei7UqAPnewkMSoaDv4NurTi1ttRTfb4Bh3r9MHWywMNNWsDPQNchqzrfwCT3HePRom",
  "key12": "38L5apr6GphsRB2Akk1rydfQsuocLnktADAcVq2rFWspMYeCXLzfyBhKgKAbtcLskiAHaAJbXJED3NVZSY1PQjYh",
  "key13": "4JYiU4YgtPuFemo8LXqJg75J3kjmkQTUdu9hB7XjCGr7ip8mJ1DPBSLyAnp3fLwubyDCzLpNzRChjEvP5rLWKaea",
  "key14": "3qwZ1w6S4xPxQaRpMpSDMNSibar8wVXyVPtUeDXChT2GbAnG7sWwrU1iTrsqQiMQAPP1YtRLX6sEE2P9MvWwZGm1",
  "key15": "3vVMzuLsAr2cLzX3diaUhUxvq4CGt7NDkENzPSwrT2DDMg4g6fNJ63Lsko5o1f9Je4mFpBM7stGAHWM6G2Wjf592",
  "key16": "4kwnkc7G1TQoiUFersMjjSW9BtmeX49xa8yZS3Dg22ZXW6ceuPE47u5bncyD6MWwNikS4QxWMpyb2Cp7sYeYR7Fs",
  "key17": "2grLCR6SowfURiVy3NsMYbGQEe5rJsFtDkMw3VzdJkkeu23LzW77WAvFBxzGnPz1XBSVbE862tg4dqz2HuniHjch",
  "key18": "5Mh5hy2qWLpYL3PnHnRrG5bCY1RpKDyDQYmbbCaE5k1aoSLRreEa9nbdDjLT6iWYzL54pMESueSjALZNy4U7wDHe",
  "key19": "iGQccR6YLjCqxGZYSGnJqGPMu1h5pVxQRh4fGgVPdF5NJzW89cm5R37q8Z1hAY1aqY35cqDjZx3HW277txbsq7k",
  "key20": "22rVCYvuQBaL4ciMhGwPkVrkMm635rV9Xr3qywcM4Fi7Zs6vsjssZ5JYN4gYPnHGsqkGGSCNXdorRyPDk4s9gwhu",
  "key21": "rnM4nAmom1yZsrYim9LpnJbBNQCCy7oZiizC1RSBg2L6j6Ukf5uv5TDR4uMhg7upSRZZgbpqzeTGoJXDhuDgPD8",
  "key22": "JbXHCVqQtfi8fXigCn27yikSQWmm3b3TVUVKJQeBwmJUi55wj3fu6J8ttKyzq7xXrr47qv4WsQcx4cZeC6ossF1",
  "key23": "5uCiLquiPBrxi6NqS2nWciLNHBwuScMQJ6yMPt2Z2xB5j2cEEUKXavnauGvpgU7FfAS4JnehdRSZfFTk3cgq5frg",
  "key24": "3q57dsXZB6Lvqz8VAQUmaU4EncXkYRkHTKDTNatHFLkXVmqYsxc2JtzqaXnH8a1fU9gMQxaUbENHEXzD9RcUfmCE",
  "key25": "5LTZ5yHqx6giYZj5qBftRUiCEy3ZjtUAPHtQ26k5H9gYVQ2i7kuDTB1VCLzVwDMuzhZihMN5y97vpqBVsbv1px77",
  "key26": "4KguLfuGAD131145jZhp1oim6xmZEX7AWm8nf3nokz4soWhb9yvYcpHzpUm9TN1pz42jR9bLAvGqQARGjTQQigaP",
  "key27": "Z7EitYV3XhKiwYeJL2FKp1R2DXeC29DoB7zjW8xWpRgyo9ntPExZrt8qQzzWi1bQXqREhBp2dZNzEZEqZbhtBtp",
  "key28": "2zNNvSEqAAvEWkGw36Se8dsaZEJ3R597tEVNLCQYrCtbvd9kpc4hHeQwCi2AuJHXpjnt9iZaCAmbJrLNe2iqvJMu",
  "key29": "5V6CZfLKXqmKHb2qJXRxTEpbB9WriZV8vmb5k5GUPoZtUzwmuLg8NUjjdDKJPxqtHvurb8RxnkEVvr9pVqNevzCv",
  "key30": "VSZi3fwtYA3nrRHFTAHE4h98pbdBRABuD27mN4upRvTuEJBbnGHrgoYBztqtq9GruDLGeggVSxpyTYZnTrCtgtF",
  "key31": "4eYbZ8Tvd1LnXCcKzXLbyVe7anW7cNExsnNNApL9XisZMdQNuA78ACvmam9KfSdcetk6oAUdsyiWrfHxb5p5Zd1p",
  "key32": "3kLQfQKA562vzoiyRJhhrnqWDPscSgcfqTUgDow8HwZfB3ziL9vtbXR7RfCmiATr7uRT26SLbVXvA1vzHEzcuNLs",
  "key33": "57oqXZSdHh7LnQLbxYZnmGsqoFa4Ku729snsEn6cPa4wT4kXE26etg19Tu4uxLJpyMrn3exu7b2qQXaCt7A5W6aC",
  "key34": "4ic9NuwikpPixUMbB5bbHX697BSji1b2ZkW3HCLZYb5u6QSXSoARrJh4FdvK9tee3CwG96yLiGp2R4VM8MEGzdch",
  "key35": "26CFngCgtLVujePHrKxqc4U7CZ9XPHgd7PKRwXXu9ooChfVN11rbmJGN8wC8qfkTXoEEjP3q1YGN7nkLQpRA7APF",
  "key36": "Q6PHvrvVxzAV6E7bVEFCeo5KYSjRUQUm6vDgfFdLKiq1M17LXxBrQSNK96TxSyBFzTkdtjdwphbtfeP2ovxH83P",
  "key37": "3wizjAm1dSZHidjPxwhRfdGHqXeps8FkfwZzEB11fRxYKWwAP6XD9gn3ZtTLmekJfc4NfWjs3coyQYk8kiqCz2wy",
  "key38": "4Mq11GPHTyp2Py39E2JqUysU8ekfswRYwzAcuiN83Et2h6bEEEMiaS1iJ95NaBGgZNZipLHrtKFpbCvqdpp6LJTt",
  "key39": "53Y4JXAEU7g4KXVzndDMVghS8bPq7PQkgLDnFVfArTqW6Uq45bA7uEPRX3dgkphLpSvrbvyAshRcnrewaymhKDqh",
  "key40": "4zUosmKwbK9MQaw9owUWsCSS2LbMM48JVS1GpCZ14aKvENiFXVCypziSsyYDe7H44M7YYBqxq5b1Ntvus35puzAD"
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
