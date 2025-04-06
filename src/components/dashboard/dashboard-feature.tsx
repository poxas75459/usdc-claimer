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
    "2YP1shxR9LYShd8928daNqpBpPxPFg4GN6H29woZLveqLfsKqFY9x8ZajxfzTxM6up9U8k8c4HwFmmDZTSmCuj9Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yTfej9wdRLkGqHjgEQv69UfWoAn3n4q3BC4vPwsyEU7uoLBxSeRfZTDmUkqKpzDuhZmYJtSUJrbBd4fRLsx8vCh",
  "key1": "3WxhLRywdvcJE1yPd8Gt5jLw6FXVKhZRP6NTBXA56dd3GRPXpd44rQLwtcjePRQpMxsR53RtBrfVJ55NLkSKBHZM",
  "key2": "4Bvc2hSnMmBaVA2uLBEkZih9y4wYDJyA1Htiruz3MQ4tuR537QNXWUpoXZpdQnmDYP23CP9CYyyeEwjs3uAW3XAZ",
  "key3": "24QM3sR4TXypCZE7XozeQ7ZdMQy1uAva9m5zkJTvAFnNkoiUYigVnapMdgJSYV5v9Jf3UC1FXhSDAjw8LWjTPmsQ",
  "key4": "4eMaoZUS5xNLJijZ3KVDqWCKXmTwDoyYm4o4pFY7QgVtSZrzrJF2L2Z47F67CzDLHHJ9baY1zBLbcpwJz9jsph9a",
  "key5": "2iH4Um64zizDbgHBjz5AkgcyWLrew9nmTrar5GAeyEMbvtgh13UvhGTuYuWJ7rmcNj3KJPjXbBZXQyFUHdz2Svdn",
  "key6": "3rDk4pWqFA1UHQTqQscQTWAj2sFCGc3NAeqthTFRYWjBXgBFJu63GQMRLY2TbgLCUZzUbdSAtEj8o7GeSVjJJozE",
  "key7": "38JRZCycBSM4ocXh2vSVzJtMTFEpvABpMWjLtE4nDyZXpER46ZbTbM2Vy5GbzjcsMrtKVnXxqdvWjEqEtg1NzofG",
  "key8": "62ENHQZY4q3NpjX4m8sUSBxX83N7N1ccSbhHwmmqPWgyvK6xQ8QcBrmGTafFYfrdWjtMyFGeCfqg8xJj8SLKygLa",
  "key9": "2KPeFkYs18ZDpT2AHjF9Ey29BwVzp8C8FXaKscUTRdToGnhygH7LRjAZXYSQzViRDK1ssf5a73AiEECVi397jSRT",
  "key10": "31Lr5ndnYNU76R87ogKuGnWbpyh45jkhyJzrEs2xMnMRmMnhYvfvUkXNS8toxXPDynKYTtzH5WzvYZe1kNs5tXp9",
  "key11": "3LUuZKMpa4F1JLp31YYaSicgufA9B2T7A2qMmAx9Tv24HoYmEpFME3bmyUssomHfwj6NquA2wobSNAKGzaJE1tWc",
  "key12": "5nSdK4ze18UMjZi2N9rSehy9o74sdYpT4BwjuZETeboRxRxd63iouY1h5ztHbBT5m3UVsKcL3GnxDXkqb2YPqEK7",
  "key13": "4yWc2NQVqvGvaCefazD4TpmRTwAiAnN17sTVSjKTvRBJQU35LtYhu1PZx8tywrnu3gFwSNu4XRFXXDHf2hUcpxwD",
  "key14": "2hPNinV5EBS2FS4nZxdiMrHr9emL1oHaM7j2duGQppnLFQUPmWCbGH8uUP66b8TJ9YnNRD8eFi1gGqrMZxPJSa58",
  "key15": "4VpmZxa6CJ3M1DFbnHzdMgrkQyF1qSYnUUiCLJmDcsSpXqCwP3F9tmNhdHbHuuUhxvXJHLU1jYz44dkWhaFSeqdp",
  "key16": "2p5FDvqfBq4KEyhKEaQMMKAwA52rQsoQYdzBDRJVfXAckJ1zcG4NgD4DGrba9LoddkUkb1EDrvipp7rsZkAjmvA2",
  "key17": "3XrtRsmQkeX7t5wQefDfALggFE27BF6SUWEy8FFLdequszhcVvGMpeDB9FbXQG5LfH2ciojqHbgjRPSHD4JMfjXa",
  "key18": "4Ld5cEHaiJoy6o8aRyA8VqKdhP5oPs6pXptBTdyZiD4zCBGAXVEVrGfstGWuVLkvNXRcikfQCvKRrdfsjAruYEuA",
  "key19": "4fgQX1fHt3Ry1JR1Zg6n9sQk7uMJZULJqFahST53bQZ3y7zvDWvCkccSsPXobzdo3ptTtZKZB4gapSXGaa6uuD8C",
  "key20": "3tFDH3MJdPc54bvU3rhyHVUQtsqRQb1ux6AtGhwYbW3nsbiYcMzoPyLEz3Ukpc3xB5nd5udquRkSfaD1XBYGvcYy",
  "key21": "398nYBp2P7XFtc9oiYz8C4vaSQ2PS33BSxSL6wMkAarvuXaRJ5EqsjVGJFpcxYznqWNSvmnmmZPgpJsLLNLZhwdX",
  "key22": "5cXp8dJEMjaVeD9qQhZtgcyxMCWVY1oZ5tnCwfjhhykxifKRwxqiX9D2nboTm7GVSNaZsGT7KAx6SWRSJKZwQ1gC",
  "key23": "2o4WYVxK66Zf3KUuPJ8u4zqnHhbjNhEGn1ftAYsaFnCjbQiCzYd78Bjy7XtyUryPdDYcVKXsGs1Gruec6fMZSFnn",
  "key24": "3XrqJ5QoYLk3K1kfdNgd6yip8oTQ2xDx4EBXfQjo4TqbLHSKXiC9mLTRoFm8uMmeEQgdBVxKiXmHYcbhm34MxpVj",
  "key25": "46aQWKmmXMy9FhkakKFgZz774TVDkzMmD1hLqX9ogJWCxzgEcToKxZavmfNvxqrXoNwcGBs75zUwdniLomVLSqS9",
  "key26": "63fUR47B776eaGHJZq7Ksn7oB6srobVe67vJioHXfejXa4YwScSGYQtwFf6uAE3GcY1U8WGsLrvZNAZEoS9cmWCm",
  "key27": "5qxwWwNBuottSXgnhPcinjXuDXza9Y2Z6MQR8HSMc96jMJQxUnrAUMpsGy7hjMSvdDJfs8mUGmiVuHphmuaQQppS",
  "key28": "5DAc5o6cG8CzQ9yogP3QB4PX3pqjXPZp2yGgtMd8xGqexzD7LCPzDKacQXvHpc8fu5ZGY9c8mXuvhTjy9CaS1YA4",
  "key29": "3v7YqJtXXm7RNDePvJbz8PQ7dhFeoQH2HWLSkoEExRwa1rbQKsircN3Hi4fRaENyJhrJghCo4ChgWwWGEYe5mX8S",
  "key30": "3d5YqhY27vZXHu4DkVdCFvzyHdHV8zi5Tw5sWdvB95uQJuhXyFeZ2WvwpnFYJgzvmJeB18oTNamJFZFzH3bJVZJS",
  "key31": "KkZ9KugvhfrFxihoVebM2Zm1pMF1uPbRKStXi5ho9YoVvGFiknVZrJox6uyKgh5QLVCzF2Qx5T5Wiaz3v61KCxN",
  "key32": "4EHqfTxEJNszzjSfRSu5QmYtGZ7Y3pfhYogEdre3SSTnNDaTuKfRez2X1unF7Jf4HGvYuEk361hcu4xNzs4pyfS4",
  "key33": "4pCUwcKTsXP1ioZHGAwTJb9JSrkfvybtkKxtvmHrpVGwGokYourHwGMfiiuxUAtovTQuz5UQXntWc4cRsiwAcTua",
  "key34": "26RYLxETHCnXGHRFLYSaDWSs9j7jAfWyEgDBC4PXoNC2x1xoKz2W83pb1C8rbXtgtgEr6gRyYDRpATQ8PhKjL2o5",
  "key35": "2nN3jM8ozRWVehQosA9bbwt8jG8S1ai7V3fEb9Trfj98nsZnx5ngYKrNPRrLkdpLpxH44nT2uqWNWtDuB6gHMd8Q"
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
