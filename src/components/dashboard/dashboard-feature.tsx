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
    "3M5wKF3xaqnzjWEbFR2FchzHTHjdbequqW5db6584hYjVvAJRThXhqnTts9FZaZpHQaHNbkYKdC6oeFpD49tQ5C9"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "eprUakyhewygVU9V7rE2Vox6TgujjtGG3367gAL9nYfCWRzAxeWZGsV45ofdkrMigsbWMudsrprqTFbc8QfE5Cg",
  "decoyKey1": "5hcMa3JRqP3VP1xPAsQFXwN9TXKgV4keAdyYqX4fATZXDdFw5KHxBxaXrt6ymwpKcqYXUBDBX5kRYRJrBCVRqjzo",
  "decoyKey2": "22RGqKXpd7T5NSAkdJaqvyGCR82RrSBwMpQL2GCh7iFSjHk5kRDStpEL8v71U61ksiP4n9CcdZ5eEke6KvEefivN",
  "decoyKey3": "5jk6VqTQ65XjxKrk2fMR9UbPUFRBfZzgbR47FEd73xARCkLTHoquNwoZYfHdjqdjyAdcQbMV1KPqJ66UNxmRkiiA",
  "decoyKey4": "3wHNAX4RUS1KeUL8e9NnyY4t2yQYGZV25JiCNRCukpkxZ4Yi2J97e29CtCfZAusNpz5gWpAEvbjs1X8huFNEcUYJ",
  "decoyKey5": "5qfpap6Sp8qnsuf481E9GDbrNFMe7wtZA6hmLfbg5NqaywNJ6PNkW5SZWvmpQstsWruy3BasDpn7HUoxwXuU7fiU",
  "decoyKey6": "4mzAeZ5vo25uuzebTQdb5A4EWAtz2SWM3MsSCMwPgrurvHhBbdfzWLMFSKdEHadeWSH56D4iimXTUPvqXLVzWjD9",
  "decoyKey7": "2uRbM2VPeixrmJjQRLPycKKi8WomvSRt6RQJAL22QsNX6GcXkC4i5c1ddE6dmpU3rWCvqrPYzCUaHNVJWLDKPD8x",
  "decoyKey8": "wF7vQXWQHV9wZx3BQBzQLUR9DC38ejMZDPrK3MpfjD6ricrc8dfgmcQiR9pJgeUkZbp1QQiSBUgnJo2u33XtJEA",
  "decoyKey9": "3MKuaKwmNNpXFsf7cSFTuUQktHoRwZA8CaoPaRaQNLSA82yN45HJaj1XSEBDCos9ZRjSj4wNK7RcdzNcBTQuaLtw",
  "decoyKey10": "5DaGzbGH8cJvaXa5WjNwLPsShV283CquWiqCDRc79DMzA32dZbMnbqMvtxuQ1THgoAk9D5GJNuvMFJ4Sq9vjFRW5",
  "decoyKey11": "3bJbwMKuohdHtRS49BKrcazJcJ82t6EpqPXGwh7Y8F8bFzBhY3Pst2C5b1Tkbb4gLnjV9ByHowyyHxgbpQZSnqjw",
  "decoyKey12": "4D9rjyKfW75SAFN8XtNYwJ7k38Ya1pkz3yHhpopu7ithxZ4mrZ9DakLFhekbF6VzFdSWUcvwF5u69kaWjtYgLpZY",
  "decoyKey13": "3o5xaqjU8u3UWr42thYctNAxRJ6iCiuiYWMHAsFLqYzeqM7taAYw2EoisbqpMYaCov2cBhhA4cfFGoD8Dz3p5Ums",
  "decoyKey14": "45qs3ka5VjAKW8j8UShUaPqn2bAD6wCugvzfkd3FGX4vYsPmHSDKe3B2r9qVFWtGibBDqgTuTWRoHYe8d2SLR9RQ",
  "decoyKey15": "3qu41SstEq72TPR1kTD4awBmUphp4FG7Xf9E4Z8jZ8y91L6Tjoom86EEPrhqzhejenKN8WsMuRm8pHEySt7k7Cbg",
  "decoyKey16": "VbKmD1SxfW8UmbyPectVTCwvjhXzL3v5JkKUmSKa4pf7Fa1C7mLD3ErVVBsAbijJ2bfHcE1wXv9dBauhuLH8xe6",
  "decoyKey17": "3LttX2z7gfAEFf8ATxxYFuZBaaQN4NGfjLuU7wYM2aP1QePHN3iqyw2ca6ttDRu44KdkF3sbKuJ971dKBnzaX4xd",
  "decoyKey18": "pL3MpE77mZpJsYR9xdfSQ55mBznArMhGCh9F2rCN2WBqzu3Z1kFeFcfxRvVPxmum5hD2Wuas3249QHwDMf7sTgD",
  "decoyKey19": "27uiXeg4FowD2FpSujL9tyXpytaS1BZrhy82gfbYtToXcsjgBBTns25BG78mPvmpedYKV7fN9zBFLZAkiyBX3mru",
  "decoyKey20": "54oPxqG3hPRYa2PTY1YngRKCGx3xZvLgDEFNXDztMTBLqVmCHhtpkwgP48tNrR7nRsiSg7wJX7q11k4RPcgufDAM",
  "decoyKey21": "2srdcVidQNzUpahMSNGv33pAFUzxde9Ctuv4niS6uzuVbP2J3iTL2by7ziisYU8wo7hvFPswLc5guktsdR7XQa87",
  "decoyKey22": "4zW1e1vyN2USZXL2HEBoz7RzvBfnVyDEHmscodbwRTjFZ8dfuiesrpvR8UndjsD6LVVaME3Lku41bTo3wg3aANcF",
  "decoyKey23": "3WnTG9uMcvnQpvCjqjTK4G1zN2iv5Q75MnpZYhXhUyZ5oe8ZQwASoWmabQBmy4YzSwQMSygXNGkseYJr8q7AVsVh",
  "decoyKey24": "3KUDPt1RdhBu4HF4n2kML5NsNPicSDWtaxGym1vCij3E2RBrtiuToCkDGhQjr5wCCGrjEu9Ep8wy2UWJGMep4nR9"
};
// DECOY_KEYS_END
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