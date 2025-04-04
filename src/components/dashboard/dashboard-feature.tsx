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
    "4TZqn4rVNxQFoVTZ11hs4dx34ewdQbNUKLcVssBdh7EnxGayqn4YAAFC4QEa1294JZDpqQaDjd8uoFH8WDqYcX5Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UEHvSS9dHeiXJpuRdyZNTSM5fmLS6ZrwbapoNLBD96gnVwZwUtFo5E5xmPerhhcsZqqgJfe9Spx6WzJd55SjMpb",
  "key1": "4LN2MgQ6CUiWnZFh57DZAzUmFjP4Hgyw89S7fEPn9AjHhCj3fXmwjLbJ5gcSqwkgJX7nwZWDgqhiYDUwdMvii8C7",
  "key2": "5eL4XjQePTNzgBRTSjvvcGnMC9od9p77ViQYmbry7BEVhqw6eZPq8ugWQYN5nP8ie1u1UnZ7TWVHG1YoRCTsSTeF",
  "key3": "66T8BW74SbQf2o8xBM34gtUHzhAy144NfNWrgYdD9D1A5UxWAazo5hTaQBxVRvuCpvCu2uYTTNXJR1P831eURujf",
  "key4": "2hfd9VTwvZ8M97ADL1aVBahPYjGwKEKHJx3UK4udN77MpCkMVL7vwYiMF2MPVBQAEEZVJYnbofLBcX71wBHGci8X",
  "key5": "3d7QRzmGwTbkzJuz1Fay6Rnr6ZNH26oAb5JBk22z2TYUcyKXSo1TEiiGDpZ779gCzatAdwoV3vVVuyhryUczGZY1",
  "key6": "5XPPnPtaf1k7KdBYVEbA8xi9eAG1SmToC5hkNAY2G6fQvsi2cTzVfDTGpUjeCdudYkThW7znAMCuSXjde7X3G8My",
  "key7": "4LtpD7ibLypv3YKVoZbhZzcu2QUAzfAdsW1whT5G4YqYcYrk8DSHEywBLCCtTko3HgcrR7Kht4oHdgNAhgwQ92Ae",
  "key8": "3zk8wn2ZRRAUU7YmR4tTLKqBBYWQ7625z5Bog2Pve98mp3HQ15Pxy2db8dCzttNnic73QNQV9ET2tBcAYoz4DCR9",
  "key9": "2RATAg577u1Us1t6PCuznjpAn1rgC1biQn2cRiVNmxCut5QedQ29yKB9EFcZe9hYmRGPm53YVKC1YmzzDbYMjpym",
  "key10": "ooYRwd3f1kaCnnTR8HoZsNW4r2AN3xqTnRuSYdpYBWyHwyymer9bSujHCCKThG51A7h6Wna9Uzy9y6XT6stUiZB",
  "key11": "5ZhjVvm7vrZUxk3gvwzrw2kUqENLhSMDSTR91U4wHgngMh6DVXxXJqXjWUBiEidY7zW3z6Eg7qvGxaiXCs4h2TMM",
  "key12": "5QVVCe8PwzoqWF6tku6itfmNN2kdyQGZnricBRfLMk1wCCnZy1WfNT2B4RdhTHxJcPVvUi3KC9eYABfEd1edkF91",
  "key13": "3Pw6LyZ5ATrKGaQQUotTqkeB4mcSJxTQjzL5Wi6HvW7ma6s4ENutJdZeuXJd8bmTimk8r1upx9VVsoxt5JKxk8bn",
  "key14": "38RVXx1b6nG41fFGhX46nJ5baa2GNWMYphnPphtYME9rrfidFpb67mUn4WLUkdAaa8gc3dCKLeeaykykLSaK4a26",
  "key15": "2DDNXEm6FLuVJkijygCWAnepTeucg3c7jyyScUM1s44nyXX4yPjS5ZsmoqWHRYJPpaBibVNwoaDXtyJJYjWqLv2V",
  "key16": "2CGdFwoZEqyTtmAriuH8hz8QwWLroFSeZrViNp4W2wxr9NHWC7q1CGfYZjo1yPYGHeFCjgCdYSYEvSDcSfm8zvQB",
  "key17": "5epEdGFhoVVGY2rY5FmLFeyu86rzDiLaMVnHsaUYav3GJJpfrpksysp2zLd8RGDzRrVcF6PY11Sg8i742iKkL7d",
  "key18": "4f4NXwSETjaoQF7u6o9UdBaN5VA3dzXfDYENxV5PGugaXdVFh4KbGUD2tSSxA7NRqvAvvx9adBxbWV31ZxEvvm76",
  "key19": "4HWdUHV8n7ozPLteBfvvTh9C3t1cE8npWXYW8ZJaa4ydA4m3rzrPMkjPC7DnM7yWYdMQRFmTvbPKAb78LXgV3KPo",
  "key20": "4ruSPQ8e3Ln44ZLPE3HAtX7KXXWuXvtrJWHYFeZ5WUcpQLUDsxH5PQw3WjZea8x1TDXmTo51W7b2RkmM2Yqd8qZW",
  "key21": "21uUcJ1g4Gr3KGiGjzEe3TTn9uMypafdqiCBR5wPmfVBuQPLaYAzBFV7vxfk596kd9teQeha76Ye1ir6XzrnTjTE",
  "key22": "4QDmp386t93pfEBMpXsEn4wVpCMjZma69otgLvZZByLQcCxCNJBGmKY2BfPqgVwvQYTSszTFxNVzquL3by48GH1A",
  "key23": "NNtcooHzU66KZjF9SghEVTWp9T3H9ZaVfvewZsVcUpmXRzMipvvPcFaUYenqE5isi7nqkCHa7PnBrkTFYU9tbzX",
  "key24": "KB6toaE3Q61hAbukbNj4F4cuEyD1kUGLmsQL6aAjAYmSpDmuRJjA7HaXhBqfyk4JLmAR4Djioi1PyCbKkocrwxu",
  "key25": "649n8rLSnMCaaE72Rak3npAyFGGgSvFjfsfyiY87o2nPjNwiPm4kkwyyZQdBiX5C3AVvciF2Ai7DukqGAEGUwp4b",
  "key26": "4tcVxiPx4etZx1N9wm937Ra7ydXVGTKwpc5cm9qhvmcKzMGkAKXR3oxy3ffoKhMKuFqSu5rK2HEXjntcR3sn4i75",
  "key27": "22T8JQiZwBSatfa2NBoRWXp1KxVQH5GzNUcoE3xsBPtCghFQ7qRkSZXet7BdnFDgNg69DYtQufYXd7N3X7mHsi4t",
  "key28": "3hEUQboa2Bmgi5bYYSFibfnD7qEgFrVDEMAMv1nb62u5kD2n41ZS7HBzoNDx7mhdNK4RxxkT1q2eSz3KDp1v4vVR",
  "key29": "4atFmnAaTpsypkhzqVcCR9NZNDrRDrhBdurKGdG4AcYD9vPNNQuBrvydjFB7f5cexY6FbA7Vnjt6Z5PnR1F7aF7K",
  "key30": "4uqZYV48Ah4ZQzcJeLBcuegFsXV3Su4B38wGkXQJYHDe564U1Bqhpy7vsP1NHRcvs5d6KHPHrDbrqSwCN5cE7gQb",
  "key31": "5jT2rwUKyaRS2ar2DEq8ms4ozHpYBnAP7gSDHETaRCQBDiGoxYCw1BBuecbFKoU4bSrBMtr9Zo2M4R8ydHuY4798"
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
