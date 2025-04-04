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
    "24YW6muXX5KUJJ4sjYGvEcZGwWd5FjhkCxVv1oViMiH9A9cYenjUBKehcWURAVZfEPuPHg5WgMihuQYR2RYdLqWR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z35cKmCKXDuVkRotkJJySd8LBJ91eCPLLbVP8ZzsaJYjeskQwDxaK11a2rua5vyg4opC7RaVbBudJNeTnARdNs1",
  "key1": "2ApzDT4fAiimB7SWf6Uw3b6EiyFPWo2T7uLBSKeod6T5CHWixNgv5CTTDPDRmQuhpdfzGY6Una64twoMEd2LSL4b",
  "key2": "4zQQi2scM73Z8SPpCXaW8gfivQhXSphBwdrfS7QyYT4UAxguw9hjVF4zHAHrMvrdUHsCsyyy6Yd2p7gVQ54Pst7g",
  "key3": "4SCjoUHU1mwKeeDTphkZQ9QA23UYg5GepW8Jv39bNcN517KihtVPEn5389B2QSSsE2rA7V4mJrtjYxHRWhStcbcW",
  "key4": "4DTCq3y9mHzASvFYXdEjbfhZUnXk71964pjMYsvPfwKVzPkJww6vt1YPRbs5nidVRknWDajcmvwFhBSgi7BetPMk",
  "key5": "fcKg6vPH9GjJHw3yHzKQTUkBg91diDWo1oEV8BAqNSN1JnzDTGYfszuAAJvdDDR8Fqe5GLEmjBAENbNdJ6FNWYL",
  "key6": "5uFwPwEMDwpKZ9CLuJk7Qju4bBm5fL2c42sv9iUqDX1sKucaYwoxqyPNuuBrXm4kq6m6cdo8bjNDTThVRRSKNoXo",
  "key7": "2uNpp9gRyeKWn1EcH7CQUH2DRLBfV9erXgUdz4XEknH8CLTNHyPkpQsKGAtzNokZRSEop1kUCSntN53UDod55sbH",
  "key8": "2U4RCyzBynpAEm429TxfmjPmQBL723s81WozWoumUvu2q24uAXgPumh4ZkPR8Fwrr15EeryHUQcyznCtZYeeQsp4",
  "key9": "GzDiq4cKDGGo3VnSXw8GQ44h47KM9PRpsF1CNw8u6mG9cRBppLUd2fhtCbUqAzAtZGFhytcSqAhkiDbPTzx6UCb",
  "key10": "2B7Weaqq78Y4i1RgUMxATZ4gKmNg7Yutc7ygLyRgWVtqHWHDFVqsznBYaJpAppzgVV2V23R52Dq59gjmzAqvGJq2",
  "key11": "9GArDqfDyMQMXPhw5H2rem5qB85tTcmJu7MmaKnA2JTjtXcRRrdJ5cWdpE9JFezLQtzHMeUNTzKB7AYUokiKGwS",
  "key12": "4Pf5k1WxjsQy4CU5wsicd4oZHnR6Q7gJHcCUfGdSR4ibt4M5Z5WhejRCzviGQrW3zSXQTJfbGNHH6GbJtMQh8LeL",
  "key13": "37vwRtUTLg5RjQkMtQw4gksDTWNBLz3dG61fvpZUCWXu2y37JaBQeULafDWd79bM6fMpRQSrEZqqDYfTopYZA6ws",
  "key14": "5TF1KYKzvG1x4DdaeTKHa9DCxGMKy9KWUaRpPGoPCMaieXBgPeZeAAf4xAv12vn2dg78usbsjfWrz4XUGJ3B6vbF",
  "key15": "yC6qULs5QyhzEyKAyvthY37tj8WpE2XcJKbC1P1jdduZzE8eVjqyJ2NaFrgMW66oBh5xiFsJvsryUADpc7rxtq4",
  "key16": "1LBhiUyKmye4hwPwE5qgUdVbMarpwqDNsxNPyTX5x2K2A3TWd4eosJPrRZc72xxRqgeFVSTUUcmcuTZSwzFX9fo",
  "key17": "4jb97YBd3fTjW7rfGU3bABDirK3rn18fSAxwEUqdnG5ZHLNeSYkv1ZFc4MQ8cQHWfVvHCLdqWZcUxk8gznh37zMe",
  "key18": "264iXEDK8qPkbjxVQYEMGrwikVqBEoFq9qECLosBCyMbFaxFKEqjeKMtVjQ163E9NTndxBkAJeoh6Ymt6jJBdWzq",
  "key19": "dQAKeeGweDPcotK1RuSVxSwi8VbA1E1hZShieBweBdYg17AcXE7DHhBLTibDC4vhz6AfhyrrkUbL8WE6UrjsWtk",
  "key20": "3SbMDMNemBQpACmmKauTustkTtftDAhhcHx1rNmPMooAuTkLuv6cF3njL6sCbe3VD1eSfQdNoyRNXTWWAkWCnuiz",
  "key21": "41tC2tXT8q7MCy3dtVLCxRvQrVCTU2EFJyzXZNiaoH29G1n8i6RGLa2GuKd3aPYkoZ5oyrKZ3gUxgh1EuXB1d6m5",
  "key22": "ADyKYGFppPGaDcGYGcD2VjLQ1m7hCQupYjNrTa6By7TDwo2F4iUQrpChUXNFpjtXhCZADPBvW4hhoWnHquDx5Y6",
  "key23": "C3SDdiVsu1ZjzCD6hhv7cHhyofumPqUjEKqV5DEL6q7xZEwd2rURCggvSowx3kthmazrKw7NtD2qgoZNt7DTfJM",
  "key24": "5Gb9LFLvR5zD1T1abkxXeFg7WHMe9P6QeVwLjLA4w5iX519kkmPgUmDs3sf6fBwUCrRP8r71TTGQ4TSzrr2ydocL",
  "key25": "4Dg5ZERo1TUyuTKyHmPy93BntSnQbgf5gyBWxSMJcFg8W1Dt59xAg5sjxWETpmXvMTCjh4PAG92V7U2ongbtDi4q",
  "key26": "2dxdtHHBLb2yxbBPFhbPdzbGUskQdV8Ki5hbP4yexjThNvKwCkaeHTrf3ts7vFBsd2sc4MwGxmweqepktBw5FiH2",
  "key27": "5LHU8bkxebWsibezUvwoAAYm53NkmY9tuDWHxjmD97rAc3kdkpRnfzoNh9cEEFH82Y2CrZRNAGQvEQoczrki9oM4",
  "key28": "2TEpaMDk6yMD1o8uLdPJY8H4tnXoukjesswsoeGJBjaoD7gX1DjWT1cEEyuAT8zdzk4AnvS2JKZGSHgFv9MNJFrs"
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
