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
    "3hGa7yn98Jf23kwCtpB5bywNLoRCcRPYYb91UAzwuu9rmWVH5Lg4MKPvuisB6u9XS2ybiDAxBXXHRffqCTuBMQSL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aQAvwNDyr99doDUtzUD8c8ZDCxzuXnF5n9fuc2YXN36quemmotPwmoicbQoNTVpxeK18tUj7YJ3gAADm6gEqscJ",
  "key1": "3Aagm71717XUQBRJ51fkPqQmSp7PE5LXcwCZYr71LPFcuL1xQ11PU1HcvuSWVeciyLX1aMrcnKjxTWeLDc3xaVyo",
  "key2": "2i66u5nLy7W6T3oCCQqYpYCKaDYpVnVUuSbxRgSRdf5xyzoWaSNAg8MgLTv6oiLC8mVZ1uuxw1tj518RUimE6D31",
  "key3": "2QFeU9UU5A4chk13FNTYjRHv9jBazApc46CC9BuZCN5cJmAm8nUmpdEh9kgM9b46ene7QimD13RsFbMgWiNkGLvh",
  "key4": "31QfnQhD3inoiNu3kRgKYnR2p9tQ6R4RVPzGLaFbtYhGqjvnSihNkn9eA6n7cY3XDCD2xGQ9hVB4UZ8ucGyLfkuU",
  "key5": "5KxbX1JZuB4VBHYYnvs57DTZuytvbrHZPNfjLqTrk8X7RbgwQ7Pv8Fx2Q7Wv6e6J1XXiMnnMY2bqWg2pm3MFrQ3C",
  "key6": "Z7sHUdzQPor73H51bgi5XYeAmne1oyS4WouC868CLaNNAefLxBGPT5AKYfx3jZrhrdnnNnAYsknDJAg7cpdAXx8",
  "key7": "2K7N81HJbfZzaFT58oAcagzFu6hFu3LhszMRnUx3Z4m9wQsjrCWPPJfwyczFawE1UPRgBdx3xxVUPM3VoVAztujc",
  "key8": "52WgpJpfjgzQbSd4mcWYjN4HJ4fHeo1tG2AaFuiJVu3GkHhhCybYgy5hHic62dgLe3jXkKCw1ydCGMbhxP56ejph",
  "key9": "52qnkZ6T9LKmkoFCHir48vQoCfka7rqApC8hfQzK3rTmb8MLL2dnkfytQem4uWFF3MmY1eh7u3DVcm6k68ocCgNa",
  "key10": "31YfGyZnLa5aBjMynEQqZH8Tqw1rEntfaSXrVrDGqrPTUPY6NrpzzvwUZCYNVEAPYr6jvD99SPf9er6ezVACCCTH",
  "key11": "3WKSY4tEA8vQA24vuxvzdJU4XshdzSsmHyZWureZUaTjPNKcMPGuSkZEG4T3VKB2D7YTyqvjtGVo1gTUkXCGFRYN",
  "key12": "4fMDqgNQAa27orP2pR4ixooVrtmKME2qBZn1NT33v9ENtnC8JYNx7NJTmYiW33YAgeFY9JM8YtYpoz8gzS5t1ZTN",
  "key13": "44TKvT7jENvQSp5g5WCNqFWLf1aQL7XyYuMrndExHp66SjbLwvAtoxLmbfyTSiPsGrQdLrCcR412SpVJfmgvttB7",
  "key14": "51bbRL95LgdMgPWUYzK6mhJP3PNJxXZXvWYRNuHnLmWBT8MhiaYCwxZJtXAw3F3PeiiB2v4tazwURMV5cJc2UkCx",
  "key15": "58Nah9oxAVbcyHSPZG4KPRWXQsJhBnrNjeDQHqNjQWZu5ZuVhmZY7uMWzTXwY2ezpbtVMUD8Xo1UmPShdmXQ6FiM",
  "key16": "2FCi3haPHD8WRYihmBzbmFt5MfLfFrDX3rGvCTeFXuWJsPp22WkG8RWCdMdKtXdc9wgsM6WKTqKzRVVeJTvdfDXD",
  "key17": "45U6GSUG2e9Ej7HMaeHFG96wZm34KCDRQ2Ug9MJE7iqjxawrGYk7DZZua3eHwo1NnXSyzDVL83cEtGFLA3FP1Vbe",
  "key18": "4c8hzXv5QW4xmbW1wSRmvHxRNexH4wMSViUw1UdXySarpuvgM88uwCkQbN45Vn8UF7HBLAfvyooRWEqaE45PsiFU",
  "key19": "2WKCwjuh5RDvbAnDFnrsyFYFjeaLyQ2NfkvXWcrb83j42yiF3V2p1Byk4mEqJqpWC84r7HuY5ZN52GJxoannVN2C",
  "key20": "4CPuoLB8B1E2UUi7RXRwNgR6whL68Lad577Y2xkCJprHDowKi63BkXPo9UZ8vH8PTRbptMfM5xk1bYcHJm4VoZWy",
  "key21": "4DjUGar6LXP4tPRKkZd8bHp6QfmGNrQKxC1MwKHsb3SUC9xjSwcng8SSWaxQwHBC7hab3JCXZqGDK78rkRoW6wx4",
  "key22": "4oahQNxwad5SUQLsTvmYLZr2c1DtgdkB1ZU6Dti637VCCdWcXUx3LrY5Zmsow6yMPxwh31ALKn2V7ky7T5DSPwmW",
  "key23": "2muSg2ubuCDyRqnXSYYqwBctugftZm8vK5RZ9Ao4Qgwk1Qey38T9LptX8mH7MS6xzTTZC4ijMikFi7UYt4YPWnJs",
  "key24": "2orpFfPMh4yQrety8L7F2zv5xxPfqPeKj7ZPArqRgs7MJRNfungo5NxWEpCKD3cJ1UiohJMjsjX8kc1zbRFHnvzm",
  "key25": "5VaLnhanBszKHS8YvP6os2HE3WDZebHWoYZyBFhUTPdgAKPT2mLeNxCrZUKdqKqEF2amCR3knGQBg5YqWAn7stco",
  "key26": "3fpv5W6YJqUxV8qzMPE7DgHrsTk1oNh41rjJw8iDP5tsS3iU5dZvFuvKjYWNVwXSQqGsJVbAmUsFkZrP4CKkZNij"
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
