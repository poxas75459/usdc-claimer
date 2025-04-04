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
    "2rv29ScXtE34gMsiK362j3McAT4z8FfuKTB76629mkvUMiv9nDEdL6yB77e7HpGaNgRPM5obVrAiKyvtaCao46W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GnQaxZh9JQTdh3xVxFnv79d2qmYW6FKeriT7WsE2qepxnTzXMXcwxLWmij4agNXRwWmx8Pxc4F7dLfVmMHB1pJS",
  "key1": "5PDNSkPYozZ3vgVL2hmC8LrfjKskvunzTiRkxj2ztD76hvwadLZLKL9FYaspKUYCorZmYC6nV1wRBRa6X935cKLk",
  "key2": "3TdugEziaGYEnMUPgpceoz1PvpVEytMv7btXFRdZNXDZtprUS6VqqVKKopZYs7rbDjmFfWS7MHtB8X9QbgSqNdT9",
  "key3": "5TsocbndjYYhLmndysmJx1A65BQP86HPyV3zAJkdBYdvxDp3Kp8TAY87zfib48xxM5ryxAMuEuK1G4ix27adYC8L",
  "key4": "hfSjFbdSJqMb1uE8Hr74QYDuW2i2XuZ2DmCQ49bz3MYohhgzvoiRX71MHquMN9QUKNMjF38n4cKotYKpEh1WLBt",
  "key5": "2bQJXeoMdVGeLC5tdrqjAkpMrrGX5ZMMEWmeeCTW1YeMHw2rK6ySbhueepgVQGu82LKZm8TW7wUF2DfXPun2g9qt",
  "key6": "2z3LqfXREw3andvhkUBwBvtqF2DEJV2QmrfKSSp2CAda7WdYfCTdcv1VB3S1jJxYSqas49xGaqgDQrGByN8eLvq4",
  "key7": "2qBypscUsoPpC7uHbHihorPFZXY98dY5jJ8E6GtQ5WkkuDUGGyYUwA5TRr4vwL8kCdDr73EXWXBZGYvzRJ2qLDuT",
  "key8": "2rnhETeVgbTxgNX2ifZdYxUqK19mDxSm6rubaZUsm4tBE39HD65ZAiEgHwSmof4CQ9xQbQt1F9xBANXLCWWsgm1E",
  "key9": "eWKQMXKnm1Kswyhaku5Tr7ZBKgGTRC51FPNBY91EpCQeBVgZoDSpqpDKnh8x3mDkiq3Wa5NmYWPEGjSDwkEcb9c",
  "key10": "66xLGAkvaejbYWXbYuVfF2MuFaFSQbcSbEU8vzTYQTwYkdnqV6QHKmgjJYhNERBb6dwMsMAC5kNFkdBcoHJKJxSh",
  "key11": "4TfRMghZmxGac48Bc4vLvdLDHVeQNNaSGiCPWQZZbBueAZpEo7i1sj9ShVgFdBHPccz5VLV5ryoHnvqwtD4KY6sh",
  "key12": "3vKMN3JbKG3f5rVjdXQrd61ThdXktUFHVFu1oWpFHetrpduiuVSM83bVs2GJPCWekZdgDzHoYoRfgsJ2nc9Vk1ip",
  "key13": "hTRiaQbQaVj7CC48V8NxxL2tVdbHWsBu6ay7c5L5fpgg7BjDD2WgaRijT6cKEtjWBn711oswQ55jFhsZ7feamBx",
  "key14": "hfpXyP39vxLfj5D8cnHYZpK9Ygthb7ckrxWE9iDM9wAcp1Q6LmyeU9X1i7PS52jpEomVCtrhGnNbf6FjwWEKZgt",
  "key15": "1qjqSJVzUh2ZqQxJ56kJbJFsD41hwrbNxSFMWDHRaJMnGbW3UKHDRb7Qc8mcR2cxQDiLFjiLGHbJhZtt6VNdXZ8",
  "key16": "2EzpHt8pF5ZzuhdEMtDMeA5ETHdo5g8yKqVJzphvFVtQ2NAPzKg4ZnnCfL4jUzCgZh4Ap5yMRY37F55hJcBYGBvM",
  "key17": "4n2DcU6iLR5WmAiwqN8JCCAFvwPo16aejaeVax8Rei5TCzEAiD4UB9kT8W2Rmg3mPEK3qtR9JBD9B2viXqykCkaY",
  "key18": "3AHABAH5LA2L27NGs5fFHxsGPr1zRd8D2tkUqQfPQdjgB2QSm4GfhLNCaf8SfqNuMqPKb8u4AHhs6iVteH7M18t4",
  "key19": "5KSdp3M3wCVdoPNUJpgcw9bZBp8zhBeHJz9vjP8b1N1YF6pkaCTz3QhE3p8czb8G8hGp5a49xnoPuSSF8ZeLF5Zf",
  "key20": "5YfRSDYWy45pnFngU5KmMpGmBgjgcrc7GkKDNaA11TrCszeQUGu2ddh9indAJAtpCQKZGauJpkNQjEYQPA7ufm75",
  "key21": "3Aj1nY6AZMNPj31nUFzzkoEDmF5zbiPC3WcP9Ebfd4Me5DXqfLNk3QGx3YBbJ9Hst5iQ3e7Xwmb8oR47nqnHGvig",
  "key22": "md7ifwbdKcCU1tXe7mhszieTisk1PF4utNQCM1muP7kdrQAEtY8eTNrHuYnnp7h97WN8bGerXywK93Jyb3qoN9M",
  "key23": "4Mw99KC3ZAC5Txs498DEZFD2Pgc3cazoVMpr9daXTKprJwEPzXVcs8RsCLcRsTX7xLaPiooYGhmq46M8VL2uw8TX",
  "key24": "3k3ZHyFCjtqE3VVMVTygHySK1Lr9WLMbM1i6CquK7n39VsheaUZor9EsVsWi7CmzmY7nwWn4tiPJKQBaESqjhesf",
  "key25": "2dB3eng7CGpJ9NXzHZSwj69MuCVo9n26NGedwD5B81jX1wJKB8nrpzihL4b7oFaU2nfQwcHdgbRvpY7dF2EN4F86",
  "key26": "yf3q7SmupgpRmW3qpxmkBiZYcwb3ZA1R6wg8sANfVrg2thtNv2KmqnicmUV1xx18gZ6NUswWnG8h4eqn77EBPef",
  "key27": "5TxLVbniTfU6DGNhN3v8gGQtpnvWiqEmEykau6jDZUxaPqqeBXvVqNbG2ASotvLusBqvJLykMaSWmBPP9BsX7sRm"
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
