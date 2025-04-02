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
    "5XSodgQMrhMcWPZ8sVWJ6k6hZBwB2wGtrsndp4iqfPC9eHB87XzVNM9orSQuCBDLeHG6iF8McnsJFw1rUioD8AX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5176RBBRtSTbhGtSks283Cvh5PrQZzSi8JfhCf3zbaS32s8ZfdwEQJQbYsrHg1dNphTJMZJw5EkJp5f2kucNa5Yn",
  "key1": "7x4PshzQousxJUTc6fUbiRcaB9HFP2PQFg6RPDqBBSJpY4iW4CN1GUwcK6piZsiicFpB5Libp2BuoCnfH3X7xRG",
  "key2": "3WyMZVNw6XRyxbGi2WyejGEnNeE5Ayp9K9Sb2M1q26wKb2xpnBfr5JJvDjwv9GptFpQAPcEhnWHpFUZvqXcCEipz",
  "key3": "5z5vJhpc33qZc2wG4CwZgMdnFoiMfo2ZwAZD1d4QnuEzcReC5VHySG2iSJQdJvoAYDuKxLbs8QRzj85gsdMtthrF",
  "key4": "465McoRDuDXqDCbtzwXZjGDu8SDrvfUBZXJ9FvDWaThiQBKkCh2pMoGEt9icHGjED2ZP2WqGmAYe1SQvQ4mTss1Q",
  "key5": "5TZ5p7X2bK8xv33yNsSBSvGhmbPM4dzisuYxt7x4DLQBbPmq17b5pShTQvVsKKaKfgNSR1jxX7fo1rcpyGRdDFuQ",
  "key6": "VbG1SeJXoX4hGS4uQxqGmDr4HEWvpQx2d4XWdPZ93ZLo2dgTu1EvYCGiZU5QZdKNAwGZzv18P4p3c9NydjkroVq",
  "key7": "3ho45MrHuBixkEPcEUJPL4uhcPxxHVMReoLbumhibamu9acbreCHQSr2R2TCZYeHKsP82EyxDm5tWGVPvnyX9GkH",
  "key8": "26PHShnsA3vqvGGsgJQ854RRE6vTfneeYu4Sp4uMdLviG5B5VG69kcYW9ugm3MECfr7adRy4hRVot3bz4oADT5aS",
  "key9": "3GBrQL1ckjzoGZuezzP28xvDvUjJiTqCkR4ty6zGPrdA8RUfFsebfv3iUox6q7Md7QHisAUonKWwR6Jc68uC4FwK",
  "key10": "3UwrVeKvLbr5PDQ2PZMzLV3vdxKLShdZzS3HB3jacsE76wop5SSRYLiB45nG33byPx4FStsj5wdreic7X8PUUcdf",
  "key11": "3cAu7vFVK93aHsxm6ZsteDMhgYmFNYWRHqK13NMC4ooNZqbe7N1tyTfUBmmZsYGS2THoDKG8VJZMEyBETfcEQs4K",
  "key12": "4qgrFo23kULicHMYPLPtj93nJQ4XvsQjxfkCmmTNdgC4qMTZu1wTGGfnSQT2rtnPZ3DDdVRvFf1jsxJ4XN7PqPhy",
  "key13": "P76JAzbp6RepRbBwH1bpFqEw2yGYUL414S4jH7ojx5omGVBtkBRJbGxKvUnQWyiZuCd3fSkQRTpeFFbQotQVFLw",
  "key14": "5R996wrYf3moPCgp6ZMpgSKtCFhfJKGtFVe2ieACM4dDrhvNT9TBGFVEYw9eKANMeBk6cZVnubMaZ6BUZ9WWWYc8",
  "key15": "L8SGzK75r1hrZ5i6vfYsAxMPo1XbNRVjYT2fuv4jCnPsrTvEUYiNTUps9Bd9n7uEYvvBJxnMC32hhUhS43yS1YG",
  "key16": "3HVGGdsHABiCstcm9J6ChdYsWFDurhV4Q6pRULnzNjvp41ZxHtXo789QeUfgUtxc79xH5exF9KHrB6V1z437yhUN",
  "key17": "5au4bPCtMs4BN2YYpidoDkx7GEaL6e8m5gHcM2Xof4fiC1MY3Z8E9r2tD76fEJ4g74PM2DtT6ic2az67r2y8LGPf",
  "key18": "3wdFDYXdrLrE2BijCyYzBG54vyAEYrRqBdxQK1V1eWGLr4UckxZ4TM6V25sfJc7KTrg6X4RTq3hoRmG2yJaPeZa",
  "key19": "3chon1uou6EnagmsP7PTmYcsa2TCf83u28t5oEeibjyqS6UzXK4DfuPD7TEMo3AwE5ovoWBjuq1MqCjToEnzvPjx",
  "key20": "JTJASvgksoRpQ8WXqeMyd9MZHxnkbqApPLjjCqRu6VPX4TJ1eJAPG9mBkAh86cyQZDL7Yx4q4BKMiEvfKPcz5Ng",
  "key21": "5StGZpr6vL3fjr9AZfvMkuLeVXmvnhP4ZrAdiTvEZ8Q6ZQAqe84ZA7szA5aLqJxFScFraZN7qNo1aGbbuSCrYpn7",
  "key22": "3zHvznRNTWon3iiUHzvUFCVA9fpHH6r8MBMNasbufkdibJ7HQ2hYZSB5s7LNCGW6NQCN8hKGan2Qpnk5wEPtHx5D",
  "key23": "5nUHtRixjWme1PyUhYiqP9BiSgJMVWZjMXV1zKbywNUgpG6HsN99gGhakzAt7r381FdZYen1jyR4PEfyVSFza5VX",
  "key24": "3uPra3BjXYYr27L75sGNstmfXGJZhs4EpbCfrhgT2ieHt4pFtD2Z7CofoC4huqqHqb8xUcGZ83NTqyNq4VeZ8e5G",
  "key25": "4vyVavFB9j9Adxv8Zx2ZMofBCMN9gPh8mPNJRycvSmUuJf2kVXEDyoroYA8LVAEQa2cGrjyZc9kg6d3o2L4do6fF",
  "key26": "2SpQ4PkGo5VXcoVg1FCGWurPHx6z8i8EDWCjLY6x7VraTX7UqD7t5teesZ66jX853Mr3byMYQXp1AeUKmBgnCvD5",
  "key27": "6T5xRauPKKcYEsKQDiV5wN9LiZ7ifKNyaEBo8VrT1WYFHsj5hTP3NVdosbXYuCK6QeDNoL9JvamGi68EqiaahtD",
  "key28": "4mcPPu3GpFLiUY17iKy37JTWujxTzuYSuPpPjEGYZ6Cz8qrKTeurpYG9mH9E9vUM8Pqk5o7y9FdzAmUP34JHZ9FJ",
  "key29": "4CKNKT56L5mUZNye5uoWAL2TpnJEsfXZoxkLgvQUPc7S24USvsuTJeUWSXbMZSageLpShJZBLCYwJNDtoREyb4rH",
  "key30": "32uqgpMhnDy7buhLyXnSacyJSw9md2dhYfzfyNqxCSoJtPSVioKE82EhyuUFxzsHQbeyp95Musdng9DRpGGv6XeH",
  "key31": "JfK4ubpotfCeiS819TSXyNEHrGu2zyEJZGyMrsisdqzzZR8oBcZ5ZXoMesTujTK4c78sXtpLaBcWfhoBW3sHUSJ",
  "key32": "4LkdWCvEQ4ScsTndK4FMEp7ZcLZL5wbFP43v29yUYhwRaELVJcWPV8EJh5u2b5DtgHq4GjgNdnt3MUCw4BtankAL",
  "key33": "642TzqnqHDi87fUeVjm1byP26VdyJmi4uGQap5v5ECbjXqK2yXfEAxC22eahQLGkbxsmEuKsdcZAvaYpErAwNvDU",
  "key34": "ygsiUjBwyQLTMxbMfmZjZULxTPU2ZnVcw4JjjtsWz2X14JBkUwW91M953ekgMD877daHKyBNux4uCJyU4SJnHFw"
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
