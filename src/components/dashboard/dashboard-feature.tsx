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
    "3e4VcxpYqNBZACWVgo48n6RT4BzK2RxDCLJDCJGjmVk7rqxhKNVKtQ2Gx9g9S4a5yh5mb6R5sE4APt8Xu2n5Vd1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gj4UQWBeWsRh5XFnxAJQENNZ5yWSRko4ikXL2q8RKWyMZfvQG6SuYJN6RF8e9ToFPygKLDNePMEEAhBxBtX7juL",
  "key1": "4n4v5tLkcbjK7DARcAnfL7dZaR7QV16dr75xczZR1touubYvGEZKmYg2Y2mcVF6jgYWiVMspkggRe5hxVmtq9pDR",
  "key2": "rGV2db8UJTYPBpVYvzEvenhcorks7Md9thPLc6sbRnNByFJ7V1qesccdSg3Bm9bKjxZZHsZydFUrRUw6WLotMzW",
  "key3": "3eWDmoCST88cDGLjLAytyxz6yFXYfjrYGcRGzz4JkA1DNVQCoQMSgiHefsnvUb1d1ZQbhyknYSL2v7voURqVTebe",
  "key4": "5VbhYtNC8r7sRZ5hcWKsXTwSkkYp3fxF6AGSHwzucqksEq4BfSyJfoB3vKkHX5f1U6V49KEpdeFNaoXUReMX3GBG",
  "key5": "3ZKamULA2iNL9PpNmuEQ2nzafUPavNUzMXFz4bM6vNDVB6zfXosY1j86TSooZEmEJefjhVx8w68rPoMPfFKRVDR7",
  "key6": "3pAnwkajr5AWvP9C8qu8MyisL6b6Xpd9txE1bQ4hAsoQT4rmWAgUVqAcFLSm9QT8nEKjCagFHNq3B1cagNtzdgvo",
  "key7": "44T6JMF6eUmGyxKYVp6sVbdRcTLGwF6ZJHTH3LNW5D6zmUqZjNXi3M6pUTpo2eEj52TXCNK5B5ESvcjJdYigxpUw",
  "key8": "3LAzZbfUxVWJ2o5pZceXCQHoHsQ776StdMqP3Vqiwt3D2QHQr68GTmhm4VQKhhYGLRacBXv7owWCJoFume58qkCf",
  "key9": "2ghdeVc6nEq71WVxkWJc2qiVwhxM13cuAsgnzPmjZg4r84hEKhbCPJSEfZDmmjjs7DAdVtYUjRwcTHxgzK5rM2q9",
  "key10": "3SWLrYNsz3C2BQ1bf77UXqRa4PA4rB2zQxtjYoF2Zj2HNQiLuiovnhvNFFT4VEu3AdFaUu2gAUqMYSxHfzXMfGAD",
  "key11": "4ejcGWJ9NS6RAWjJj27Bv7oTLe2Pb6fbxnwWaMG6NzhT9mv5NfF7XpRFzHHw1A3RFFcqgXUYmatLedGSPxtuvHTe",
  "key12": "4Tog5hCCdq29iK3ch7zwiYwnLCdCYKMo5dVejbQYdwhjAkJ77rQ2W5Ex7CGhvxwNUvyuS299NJjSasqRJxWYtKMX",
  "key13": "2xSSCQkbxmqJRkHLmxNp1MxfKxj1tXQm4DfnfQ1SePsoThomNZwiEuxPWpUBAdBLFLZHeA9R3MvA3anJ41Fvf9d1",
  "key14": "64ZxvjiLaCR79WhGjcHcBiMV5q29ZmJ9HNG37AUBfkSkN5E19HJib69Rf9kLQsvRX6TgQhGZuX4rZdKmBNM7F25T",
  "key15": "2NsYmgqUoYaRL1y36yEj6cCo8CPxUQLQAmmTmDnjDwNecBpfqHJR8Agp5nHdTyGQY98NoDTU6XgGed3rctBQ4v5R",
  "key16": "4NKFZu1Ug1gZmWLozHX5D1bns7WeThDysVpixMJBiGjE63BHqxDcNsW5NVftS8ceXsgpJcQVyN62UgWNeuN4LgEy",
  "key17": "2nZFCRXuZZyiDwoYZz7xxHE9kDNgmJjpjvmpHLed9HtB5vVvMP1kYtMZA32AteL4PrQREDK4NJjbapienz5ez5xz",
  "key18": "31eXB5ECaJ4LE3fFx4XeqiRdiDKWkwk9kpFD34NFxEbzucdyFkTALvVpuKEpH74d359e5UkHpYheRQqvvA4Yi9Gx",
  "key19": "4Q3w4RnVr7aZgTfXTS2DUKie8cqg7iJZdFpbAApDzrSywFdM5qAPhgNx5eLK1anT6jvchUzXEfef9rymybSi4rdv",
  "key20": "4TQFomggrZMicLYJ2scccvD3F94hYEcRbXxnW13nRUqgLe8UTektCEPn36okN4Tezj257zM9wkW9iofr9xX7MdPE",
  "key21": "2AHrSE1nacbpMfqE51bmdJS89srwV1h2Yv97B9a4DGWozESyAgQXHo6gbUPRJ5jiPgaRMV55v93TZupmffRyCzfH",
  "key22": "n6HggNrymfbWw1kaE8okjofqqDu7qx2xG3k5gvz3iv91NH6dzAa7LirRctMByPmGtarDnNuGrMP3893KS6JR2mA",
  "key23": "4cNFvc85bU9GZcqUd48rX9trvLsnM3ZhaUh9htAeSE6EGkwDJqqLpPBr9TKkGMymAm1CrvTjy49XxMjw1ydRgDQ1",
  "key24": "2zU1wb3gdMxSEJEbWCUenT1X1pZmnKZtkZTSBptDb8wwJxumHfnUcBXyFBaX6XRwTbh54XuhNt4B1W9BLR8jCLmJ",
  "key25": "psJn432uFXxz1eGg5mzUxgAxMs2zqSvKBvkRfo7ftveaBScJXoFqBGr35kB5EEKacedq3oJDUSzEg9xqz6KXAht",
  "key26": "YSnXv2czaYxUz81CvasyhtySmdxtHntL1gkXhpUBZdND9m7EKK2VA7BM8qQgtdekxyest2atAsVX8epdmoA7jnL",
  "key27": "438CXJBsZVLMPExDq5uDBVeSgzC7v6PfHSpXtT7wF5QBjCU5733FfKNHyJw4rJqSNvXV8YRD2ZKd8PvXW5bMKYXG",
  "key28": "5C8HWW9Jm4vvwGJNZ9NFoqiGCaJnogtyLacVYrU7bC1iLF7B1Zg6nNGZ4Fymp9pxMVsEexeZi45F623vwMzSZ1bA",
  "key29": "4heZ4mextWQaPteAkCakXGbGjDrihGaJwMXLQGcMsbEV7caAxSmKNJuiAj5cWDEfrxLgNPmUYuQvH4U5C7ZeVVGw",
  "key30": "4cfhMdbdDJMRuyevwM5R73FftD9uDiXcZG9e3cvrkL2ZiMMRz2ryktGBgDCWpBhMtqtgXTuCCxSRa3t2wJwYfrfN",
  "key31": "4GXs7AcUPuNoSaptCjPujq4Bb7KApRCbuBMMhixdUsbrrz3KJJC7eWzmtmu1MnHQU78jBBxSjVpA2DZLpYrr5wXY"
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
