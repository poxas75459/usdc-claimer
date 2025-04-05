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
    "1WGALxp9XPS1qsdoBfTGB2y8ZKtHju3PGfXmfde7ZdgY8TTfNFh6mjVhDrcuwE8U3QjmAKgyZbEivcqGwUcFPHt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PghGgn4TafwBa388min18nHX8rrUyER33YV3anFXV4ANKSQffDj63q19sREqJQQxqZVpoJeUM33qrmEcUKAXL8H",
  "key1": "5NL6RfjxdcS76vnw6wnUtatH522aBJP8CwXLUb5y3p1SFTaY6hWECndDKFgrDBx3ngBu55xAh3xWFj3HrpPifGSu",
  "key2": "3XU4L1ZRXyrzHQgrd5JsX2dHD4cxoG2wJjxhK5A3VAdvu3ukWugbyiXVcpE5Q9uRp47hBTZxvBMstiU7qpY6P3z4",
  "key3": "3xpN7RykZPrPcDMAjy5TtdkdrUb7ntqQ1y7VoNZcZEw2mZmq2jkQPk2y3ykn4z4fSpDuiiH1GKcBPNRD5EGCJKab",
  "key4": "ss6hEdKCq9tW3TWQDFykomkoMQJxz4M4MTkCJ7vP4qwiPmjexGHheWVCMXpQ3V5rBd8TnSua2QRkzH8VivRnXci",
  "key5": "2Ke6wzEGpWcihKLhgEU4NLMXbn2FBeLdBiJ3MZQ1DyjN8pStsSsARJjzbgF1qw8VPJkXfYt9BB51GKvH6ZJkymcj",
  "key6": "3ozAvWfMEjgA4twackn6J3uExC4o3YzsU7EVEQuiJ3Hkab6ic4zvtrzubf949HpfRG4Jp7kniMmihVV6sHWwkF7R",
  "key7": "5LQ7csfHyqw3AfQ3eb7pHPJzB24WFWCXUqodkTeY3tFDLRh1SNLnUra21yvz9Ax3c5PDJG18kpurwWw5WunR6GfC",
  "key8": "4Dk3pjmbsMz6p7vwukzXgEUHtvdQpo2vjE3GTCPh5a5d63Pd7n19yCVsQkZcYoRL6TLp6jyhbiogEKdyyAy94uFt",
  "key9": "5teMWx3HbbbCQqVWmys9gXUUXELzUSB3LNKUFPRFzKxZCGpMwMuxEmRwYeGAyScAkYUbvYrhuC46KA7zLrDt4ghW",
  "key10": "3YVYoaai5YSma3ZVPFFnH64z3PEb7A1pjWMDndzL3UeAeRcjfTp1zQzxaaaYtH9e3tJMwBAjN6Q2AmXFA295rPyN",
  "key11": "52AqX1QCCxmbPjHVqY4mHA7Rzh1MgPLWunSzy6hhRAYxYBjdpuewvowTN9iF6obNr2bY3Mbedmm93mm4cWegHAtL",
  "key12": "5XLBzwULcZaD1YZmhJqZTt8DMkZkuLWxDw9ov1mTdGad3aQy7hDgrQ69htCxBZTqsq88BR43XjLXMvkZ5RJA7GCG",
  "key13": "46DtU7f9PK7rVTuspgUsMSAW6m4UQAiKMvswUuB4DLCmaUVxAwnYJto24zuGaEGBZnpFHS6sD8oiwmbe1EoX25VG",
  "key14": "2mUQjxKTjN4WB9cNQqRmDHvUi7VNYiw3kHzNFtyfQkBrKkV1LqNF7S6YdTedHguLLy8oLk8icCjLL53fequxNVJW",
  "key15": "3aCLm4iaaLs2DzJNrj2bd9648hH2U2afJ5mqSzXESL9n5RfCaZ64HAmvJ8qm5wuGEH13jnxbhREDKU3LRw6jNorA",
  "key16": "4CLegLrB5uJ5vrSPCsVcdgPwaHTPRMPK6fhEb7QkVvbEhzSHw99XAu29UYGVu2wNGvxkfsc3mLG55t725p3oeMdN",
  "key17": "3zyvLZ1gSKk6ku1LtebaS6ESNNEBxpzky2BVQLGQyXbCJxF8pCxhbH9BpF1ocgtNGYQTARC1WWVTFFUXKDXLZSW",
  "key18": "3v5uq5UENa3ZtvUuWzzrCe1VLzihdAzrqofraJdiQQK5TmFkgQFbdjtLGTjDrEAYGKEdNjyxXHp8dTEBTNmGJAmV",
  "key19": "4HddeMFCHaEHG5EXkVYXTD2HNxDcNikdxh4ZMPjCNtBWorK3URamCRRmztq27sST3WTxaJusyARwqBHjKbcrjALp",
  "key20": "3R1fHhrZB1hrPVJ7u3mYThUegK8md85hy1hb49RXVtBcGCYNgcPgB2xFZzSDcqAyEkHzf5rC3wgUoQsbLh4iaif1",
  "key21": "3mVNLBeM3eko33TqruDyUkvqwFEt7AKATuk3QP4uaz3ik3bm8Q6fx3grMXC8pF49Eiramifix7mYcM93RpDSi3JF",
  "key22": "2XtStVcJZ8Heqrcc7iZeu8CEXs6GjAXsVdCcppHBuC1413iCeihtDThCMJo9RHnS92Gmgrs7ndvoijZFnQU9VZV1",
  "key23": "4CZraxtaEvfuFTvy6bm4z7nh4tqcA78JowiURRJKNtnUi3UqVjVShx1EDwoxTmuZdURsa37pysjD5Y1khoZSop8D",
  "key24": "61pYSxAj8fpfceED3ypdDqrsKGudoG6fxHRos1qUazLwmJkUKFjcfudUKsmene7ssLNz6oZNWZh53aAoEumTtATW",
  "key25": "2qgEEsG9G5cTYNUp3A57DwM3ngChpkBgVJEnQmDpytmdLqTzYiMWcNbFzcWgmmrnZ1xBX3jhQvaLvY79QMT8Jppc",
  "key26": "3XUYJXAA8T1VH2GaxeW3Vbrmk4BYmpJVP3uXoNj6tLH1SozHdzZXg7LhUY3hcEpWyG8YWU7ypQo3DC2uf9AE2d7D"
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
