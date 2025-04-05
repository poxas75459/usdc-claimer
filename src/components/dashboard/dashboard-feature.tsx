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
    "gs9PwPQ9PVzufJLJmvjWhRinH2ToLmmFfDgsLV4nvuCpgWSR5iLRktmUgcYoH2gjYDJ46KQXJA5koBQz1d1QmTU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E3B6J1XwHfumnEG2qwy5nsw6phXJgabYZt43FgUUAChsWsLVEYjCZJ3aGLwW929yahtFMdcUuBqwQCQWDFqW1PA",
  "key1": "5nKKLzW15Aztv2UjMmEppBhCspnytsgdBvyGUdigkscUehJXCZAfH98dC5nvwqtLG5M62s3ri39gfVLYznCEWGUa",
  "key2": "4Mq5LJ4nkMNveFWeCVN8xQkRkUMLUrQrz9ipxynD4GnapTs5cmkUqknV78Lfedo5HWnS5413JezvuVRpVGA3aMtY",
  "key3": "4zDFhgCZznwU1W51XEuaPnotxscjQQzD8HPDKJLqf3eKg8KHkNB9gJpSPRmp4pAXy8zfjZ7YWDiWxSHSyG2MR5u5",
  "key4": "5WhWnh9cgdTHxBgmi8fFaJSPKRAzRhyE4gV3B3XWVrbJTyPzcC8D2juVejDw1k1PnvUC6pn7E8EdDNopYdxoV9fi",
  "key5": "3VbYNa2kYXnMtQp2GZPGombiv9DUj5JPAqETewegkWRjAMQyhAeLsi1rRqFZ8hKLQQ6CBPPRiUYN8CEHHd8Qb6mr",
  "key6": "PNtMu5xYDQYxJsnmmJmFisejyTfjhYoP99Kmevs9YTwfMRqzDxhBTwSZVLwPPZ6ErUW2zuxmdZtpAJrnn3wjhZb",
  "key7": "57Lz63swqpMqUJuXMt3vuzf3iRQqb8L6tSyZ7hUkJysbXczL3RBYKLdZPYswSb8BgrA9cUQFyH5ZaU1eTVe3BPE",
  "key8": "2spBHtp6SccDsbjJA4adN5BKWg6yhy5sEGcvhwPdb8GdQ9gvG7wVmL9uwN67PW39puHw1swG27Dwg2Zr1LQMkwC9",
  "key9": "5rQJNGYzxq3CgEG1i71RPy9rF6M1abxZCFFnXnTRxYFuag7VpyvvQv6K3i4kRuvkJHnySQ1XtRKuCsWZYBq8EYXt",
  "key10": "4YxTz7QWDG7FG3cDbLrAqzNE4pC1VwBbiSgkkyQ1ukARYHVXhLXgWKFcGfCqAhX4pNkwxs49QpJwABVHdCJ7dLyV",
  "key11": "hizHEb1Zm2NjGR7FsoAc9Xmk3U1C6tbAhsPwoXSzDjAr4ZRMTsydx4My4hi1XrjJNCcgeKC3HJ325NgPo7RnsvP",
  "key12": "5CcxUczbiCCs4vytrvJ346mdtUumtvUxPGjbZgSPPi1ASNkGtHyswSQjcgCp38XY6BLbJoMzrDpwH67TDMrLXhsJ",
  "key13": "4QsRJ2zkDu3UvgXTZWdDbvrppTpY1g53bLqyFoVLCvUhAauadieYnqPJgaX4w1BioHKxDrqRHeR9gSrLWCgBomCb",
  "key14": "5BjibUbXRKdafxzaiX9yASQimQUAt5y6LLRi2epS4FcvZrJd6kx3ADrSSUTw4Wx8UR7TawuQKiPYMSF3roLTDjZj",
  "key15": "5PvCRLSfA5pqXMwrUsUVe9V7uT8wGb57Sf2WBm959eZWCpWTuf7SzK1ZkGJoMiaJXQqmvqZkuDFbXRhQWvRXbD5q",
  "key16": "55KADruWbQLGfBHgVrS3vwP1DZQbtxsciuR7LYknkfojhko38ZdTjXaGKSLkiS3yQKxfvELjJFmYMBWd9Q1aip9h",
  "key17": "4s48mUB5VFaq4md8Upnyh7TW2YR2wqBVh7otprCHVpawngEDWHQd27g11AXFK82zt4CDM3yvwRsBP4Tq8xmqshuN",
  "key18": "5Sz7yAD9cArTuwEBbsbZeCcGkLV4N1rKzf4YkE4SkNKYcCfZ44iCjyGXVLcpvcxvgqq9mfeahmKJQyYsoociYVAg",
  "key19": "3swNijEwgSruuChpBTxaXZWUR3zQNtWRxpWFYBAPbe8HjcWYcfGTkrS3ojz3Yyz1RxGtp5xyHK42GM8Uust6pz9d",
  "key20": "5SLEvhwc17cJyi5xNq4UTRE3SozwHw4CWUaBK9nk1h7xFbdTySPXdPWDjw7kEtH8Mx1CzBPPQneDCQrxKFUtKNrC",
  "key21": "4UfCeXFg3DWK6P4GEBe9Gbt1EfafGEmiCmAMFLEbTRdmHqakikK3QMqs2zEyWoZnEhJ3x6pVQVVaDWK9aUZcomMA",
  "key22": "3MeWdr1qkKgawduF1n5KjcPfiwMncfpTAfbdZStAwHcKrGhqmbXiGCW5oKhJ3WEQjKAkJ1qbtBGWQXFMUYSvX9Lw",
  "key23": "3PXtJJcyBWHKSJ5GpQoHU9jf2tt12rBkt1iqUcvAJVqNVtEfNu486EBSZvMK8PXxHQJR6G53jamKpMhHN94cuMPK",
  "key24": "55fBv9FuzzcuMQ55T9f6nW5g3n15oBNnJ6CA2BC7AVb7kWi95E7sjahA2gJzNqTya4nZS4vNwrhMGMLpQ988weoc",
  "key25": "5q4C65Gpvx1DiwNZJrWNSrqjQUXppSRAVp1kHuCu1coJYVmBKK7cqP3SYqcQ7vDfaMNPMTQ7Bad9mZqt1pwVbjM9",
  "key26": "4H8q3XRXAc7DuZtT9JWT3c9VB2sa2mx9TZYnXEMov9FfCWNycoVLabdKUgpXhnUmnDruoEFmwAWULwosLs8BKagn",
  "key27": "4kkwdsXAM9bvQAPsatckTfq6q6SvrBeVtMZ1JA1GDsXfMQKNgV79YeoapfJoLEjLizGuzaDvv1dwQaeSTd3WYnSQ",
  "key28": "5VAd3UjcxqWn4fVgpYpjz58GuBb2yks4nDm4BSydDDvRTuw7Z3pkKQeH5mbseLqMV4U5G1DE7LkXELKERdrBCnMG",
  "key29": "2VBfYjQr6fr8U33VuDUmz6DtzC6JxvrtpUTxZ1fHuU2ShWKQowAaXEqKdYdwzofHSFr91suAaxAsYt3sCywv4hL1",
  "key30": "3dsYsYq32eB3Q5X7GknNbdFaQDHDRU4Fop54xgYZY3XdYtfbvsftQtYh8cojtq7VBoFTh4MGSpjzTZUKYmts63Ei",
  "key31": "BG3GCya4j2RSzuP2nesmwAqmQGtG3RfUfL465M5MGKsyEPmhEYtFJQzLqRT33nyoDv3QK4yAGm1f73JCtGWchrC",
  "key32": "u3sFWxviX8FCwSS9tApQZcwxtqA11c3TpjFaRtXUrkBhme8LHRRUmCwfrWQ1EZjoLzYSKbDQk7oqn4qwNHj9XrX",
  "key33": "5Q5tPk1HVb9AWgrmQBA8LgffCN8xYwobGGPH1QdWAxXwt2SWhWKWYQEU5acBhhBiVEyHBAH4wNNvpienRD6q8Qv8",
  "key34": "2K8CpS2DNvpyrgqp3vTzvKJSFQSvURugPCke4v83R7T82SNAP9E7W9URfQ4Y6NHAy6w3BXH4Zij7peBz7967FXFz",
  "key35": "5kWiqnZjJpn4L8UH4dpjuQGAAMkKrh3zQywesJoxYYAGoqQSoW9w5fWvPqcdNeaP1h55UnKt8YvhAYFMaaKNtjNF",
  "key36": "f69Cgd9dK1HSQRBadpJmdEhP2LUwStmC59bpRbaLHzoxravN1QTjpumvMcQUYzxGZiRK3VBthkVMxD74YLuCjcR",
  "key37": "53EViMe5qhGXmCTX5JBWrxjBpmur2Tybe9KZC55CMcQaRxo9825KUZnN1zMfvJLArpWGUAAYDxFbgDwyB3WsD4Jy",
  "key38": "zQ3iBCVjLs61ojZX7UHHUecpt1mqYsvGtN4hSJ5HhmkidRmeRCERrUGj9EfmREfZwNaEwm3XJieNt9aGQCJokSj"
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
