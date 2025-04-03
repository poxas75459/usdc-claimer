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
    "2Wh42ABrkVNZMKV9ULSrLAAVQ2aoSrKFk5GYzfEdoQ76vmqwCau1S9K8ezUQms9YJQJQ6v4cDyKsnH5qgTXg5Lqs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vX795eyDGLSfD2wihRJ3WELy4qcLRn6m29JVY6bkBYkwyeZbBskaRtEtR6cvoBQgprxLafLX7jXgDgWwtyH4McP",
  "key1": "2Fi3ywPoL5TrRo8oRzPe16uE8hpNWuR6N21MuuPYySBi2CBaLhrh6ETqKmcPsVEnFqXAXeUnuyZbkH4LfUQEr2uW",
  "key2": "2ZkFqcZm1oapFeBCdnGf5oeU4NF7Ee3UvZFw5mfNrNJyXqpgzWD4XBwdkKmFZVeCmWBdPhUiV7Ab79GDm7rQKvFH",
  "key3": "5vwFonKLy73gNwaSHDzgQCfrfp8hj1bJ7rasNaFnGBsNm5HxoNjeght1vjZDQWAEEnC9FJcVyzZZYRyakTZYKTjJ",
  "key4": "2EaFuYKR6eKjjb2rxxmh97NuSTqG5kCKMNxJFc2YGyLSGrJzWAT9Qp9cnmJjgVhQGBDx6t8cJFAfFpvyWfRWfEEJ",
  "key5": "31rs7DDtThqtWQvtP71AoDyxzdEwZ9MMuoEv3HaS1qgZkrQJUK1AyMtJvCCKwACGYf6bm4UPQjqg5zSeVmdhsu75",
  "key6": "5yMEdXPBVbaJyqju8dfPRxt6TAYg2ubhp45fdo9NVniWq9oQKLStGvKcgAuCqJZ5YV21xapTioShQ4VXbv6hXbxm",
  "key7": "3fGVWkRHWJcxZUyHG6oLx1AzhJJiZtjGcYZaPZsT5YUe6RUME5bbyuc91BGqRUoFU7mDhH8BkYJdSWsKoocYn3Sy",
  "key8": "vkVbcLJ79nZYbxDfAk4dd9o8iG9RGtre71xDcWr8hwdxyaWyXebnTB8RnkCKwuYscKtwae3zES16Yt67JH2qkAp",
  "key9": "4s1bLUUrBaMSECjqBZ9nGam8upjLFDgqEtbq2EVeTk9MeCVPcFB9DFQVuXpJk4TnxhGbKjJfKe5bpdoRurHe6Evv",
  "key10": "3sZgkTCXPsoEaHtYWpRSMx4YtSiuw9zgaoJnwffUPhKkLmeS7bCe4EFhHbDX13TkVz1jXdD3ManKihXaYK4RUAye",
  "key11": "2m87dUA8xwkP6BJkkbceKuNtyMuoqc1dA8LdRXte1fnLkFfxmM7HfAi6g8kXHE3AmMFBJjorkdr2e91HWqGFUXsr",
  "key12": "3d7DSgLvzCeLQyfd8pD97B5kHiYw9Tw5U6Wts9cwptnDnskf2aZmAMLzRqWMcDdLZk6TBw3wk7MphvNfCsVs6ncT",
  "key13": "4K1TfAvVncDy4PVgxyqo7dU7VVz5ko5r6wm7u6n7RsgBnDUakEBv2nh3w3HeGQhRvY2uWBzfeWccYwEMp4TWJSkm",
  "key14": "2PRi8512fVeB4g6uLNr7Tk3FQaj8ScLbgQrb2MaQi1mqoc8c7VCwJhgkqbTY5yGrNGoUtD9XRaNZAyA8KFAXPrs8",
  "key15": "4ws2p3Stip2KZjHBApSfH8ejRsjSg97Hizzbuk1qnNs9eh8MVLJMwKNa8EQMkjZGSkViZTzRGqnapce7YHyr9mzU",
  "key16": "3fTET5RmJRgxTxdH7BxiWtKNMNSHwDSgjNYXXD75AoCvsrxjgoudeJdjaL6Fg5QaKzUafWvYvdb1Anxgwb9vuf1V",
  "key17": "3jCFWuoRRDhYYDS7x1QztSJKX7v4jv6D4qPmxPPKH6vmeXQivfa3CwqyBRxjx7sZrP22Uw6Vwkh2bWFeQsLNJh8d",
  "key18": "41bGdXBJPZ3VXzbV5Xex2p42JwFabTpdGJq4EByzCK1heVXMKw8f97Fa8rLzS4TTBMNxCKdg2cGpjiKk7HkKgAR9",
  "key19": "5s79t5F9qGin7N54WGjD5STNdXYjVekLPkTZpBsMsidVvGXfVM66KMPj47QnuQWphszmZDTqwagbrRrTym8pkWd7",
  "key20": "2Ln6gXEQJTe8VoK8e14rmmkqzoYmYimyWdtkqnJXSMHsQfStdc8Z42cYqvHF3HN3ZzC2iZmfR5RKSoMm19mWsXWD",
  "key21": "TtD8Tgq1T5oJiGkPuLoY8Fn7cY7ABi8LpPd7VoTeUyNc5yV6bTWvPScKFrLgpxh4DGj1yxGSmYCYXp39oAqXmnn",
  "key22": "4BLebBzRouDsCFMpnFv6pjRzwyPSyps1wRTokfi3mEcJv8AzNudQmwdFXTsgYvLoQZFqraKjauEBAKWLAjcoxnsJ",
  "key23": "5iTsVcJYUWXm5JgWkFCQ5kJWytat21CZBsP8op2eokamaQetamiuGUBK3Lq3kyXM2CQLXPJ9iparngXG6aprvdKX",
  "key24": "4WMmTLRQyD1SDGyypRczTJviFUJkehZ4CNqLRwLB3Khisdye3FcWMUtNCHzn4xEg1PSphoTn33wRAttjb6kBGT6i",
  "key25": "N5J4RfeNBSPDhzVLfPu2AXiEerMXDRK77vnC6GYowVk4K3F9ShzCEzDneYZZZApx3YxaoMLho1xXjA4YFbjkCC3"
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
