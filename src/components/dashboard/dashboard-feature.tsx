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
    "4GpEBd6Z9dcSabcnPb9haJYThv5MrWM9W3fz2idC7RRU8i4YRqwEDJM1UaoXmmc5mvmeCxdXL56q2HKXCMAGTZ7d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SXW3x2U7ekZeCagncZCZ9CgbYx9TYRHPzR4M4LipgTnmdZvfhZuctkpHcNQa4CoHtYBv7sVf4CLZm8tvTuLuaCp",
  "key1": "3spyMfmjWA14Sqb7EBPwvvxnX42zMT4oCKeJ7unPwrwrga4C9q8oBBaM1EwtWz6HJjdH3wmofNrPZ4CY38Hh4pKa",
  "key2": "3rhGMnQhMn9zxoyZ3JFJer5qATr4ZVN7WgASiDTS4taSffxcgbdrSBbCdrpAC2g3spKtu2aBctdZRsZgZ272ttip",
  "key3": "3CcgjGKbRD85PveGkFaweNMXx2zPCvD69CRGWooEG25UqLGMJYXvsY4hZ23uXj1o9sNfg2Gd8gb9PEH57EgGfSZC",
  "key4": "38NQweWmoy42RR6moA6HNhoVQYegFKSFpvAVda8hmTWLXx3Z8w54NR7nbsez3EdGsYBgZZwFwJAJ9YzJRDpNqwjz",
  "key5": "drQhq6uo78c8q3HuYR7yaTv11jCEauiHd57jjPhmmxFuAoPDagK7uqX1PneXsKHdDhBHYSZCJwevFbGp2JrpuL6",
  "key6": "3sxG5dsoBHKqPLU5TcdjEU6rvjtZZt1HiSyx4UqDykwQ5pbtUs2k5t6cNK7dRqm25sD3Sam5xnYJTFtyNtbi3nez",
  "key7": "5dYjN1ppEqog2S3NGExEaQBLHBW26qnYDRWjhz3bmQy8KYcxBFunTiWeAAdtkpDPAqRFrENH3Sg7NFpTAYC4u8uz",
  "key8": "2q8TMBBQnkCSUXfNKgcHAnKE13oMQDCTc8dY8wmu3k8VD2XtHpPuVdAyfNqEgWr39moy7MH2RHUC56zwPpvKaxRo",
  "key9": "2U2BmhuzSC6WXRcgtKP4FQ6DDntfnwkWUxUu9ZsAzsMbHKpxzsxnUVMK7z8xJUXytVjhWCzbwb8Rs83pBDdcEmGB",
  "key10": "tsTsYihvuqdExz7p5tWkZ17W9EUpdf2rVSv7Q7MnsZ4u57nuHwemm9jCac7fgQbhdDXKbNxcAoB9FeNDtMjw6h3",
  "key11": "2xDVSGh3XpkszUPeFiVwcijLGhfJTDBftk2ihdiMGSWRwXXUSY1bmYVdmNzMon9E13QGmW7ZKMn8nSLGBF4BNHyZ",
  "key12": "5dYWNEWhca755mzJQBy5KBhbExNXjMicE3UHM7ZPak3d8xQz82eyZmPJVmo9MM6ELhb1qY4ViYAfzhnVpeuZxKfo",
  "key13": "57r5BCjmsivaBgRiqpoqX1nyXQ71SKazimFdM6E7uSXPcsKYNWaLCcDx6zrwQ97j8nAX2XuMCPn6qaMDEJUXRsYU",
  "key14": "3bKZBaNCBomgALcBgp2p9jZooxEQyfVzcipUK4htVY6w8cTbUpu4amVz7M1SyCjF5WYUjCmnGSpGR6z6y2vsddgG",
  "key15": "5njarrG2Sp18MFzpAHWB3tE9AW78f1ExYasaNj3Yb3V8FnvMWC3bbMUSg6wxnKfUfW2uViT6qXjexsV7wQ9Fc8pg",
  "key16": "5ZfQo22oapw7iYhEc2FPy7XBa3EqHHeswpt6AjLrXgoLHw88cnEUTfJzBYF6snCk3Vv1K2aFeeSJmrmsEKsdYtyK",
  "key17": "fagVbt1YAvSUkNHfPhBoJoGn62MvPJ4b974jmPWU8cvoobUsz1q2FcBg2YD3AmooMkByisJnSjsGLc7cnqm6o3s",
  "key18": "47yecPKKkniMCcyM9wkgnAPYiFmeGXLgGWsjJim9NYiZM1MCfkAMnU8gcyfkbvkqZ7DK7Zfp8D5XzAJCsXzBVvhD",
  "key19": "5AyeeyD8jwcR9X8NUung8npJqGuUSXoTEyPfSoEWxswjWLdU1eybDDR3KvyQqU6PxQK7FWJ95e3UJ1b7zLhbG6K2",
  "key20": "43Wb7UDGH5VACE634uPMrhbUW7dyxcQX7dFS5zPjJodN7NnEDzx1Z3PFiZpy3z2nwnbJjQ4txGBVY4mTbPi8qVN9",
  "key21": "2QYgDaHgp8U9nYGFuvHHM7Pdwc4nHybQL9VF1tsx4RuGqQHrSAzSvEoh5AbJXZmk4bKeYC1d4TZUSip11hcAhqGb",
  "key22": "2gxe3sQEEjPUpcAgVcTg6H63JqBh787rRR4QRgTgcKJNWrgEGXaE7uoZAu2QzUTumTAjxTsV2CFF3spA6DePj5EQ",
  "key23": "XwxpLGfeEv1WGA1mZRejm2Vt98QqarbEYJ4fh9PTtxuWeD7y9V7gdbyMQ4PLGXHy4DV99gb3wxGwW1zTQrCL5g4",
  "key24": "5q1xKbs9cCzhPdSdbTuFzeFfidkir9yVTHcPeMzHktchuWoDvLwaRjinFyh5vADGNmodpXzyMwtDUmrTXYSrLVrW"
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
