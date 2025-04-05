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
    "5GWVcN7Y1tP3qBWPA9mrwdHXSpr3Ukp2HDg9rH1C1jCNUr2G85su1aJJzPxLXwVR74YfYjZsyNBdoKeUpfJyJLeX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xFn6PMF4sDMP4gsQxZ7tvRygqs3ejBqMxfDmWE9LM8ZjCasLbsjNAPPsgYCsi1AqEet3fx55rPXxBUQUpTFSn5R",
  "key1": "sCrVRbhUtZk9J9U8LGBj6nwavT2Gego11DKAzxQ6B2xQjuAy83FUsuebYPNRbNNsey3721AEB5DbDM8tHZsxGEd",
  "key2": "3kDq58iGqTC4ELPLZnmVj1y7Km336fPZRms6ZA1QAqc9N4T728gyM3navtL4uXFgmcNGcvSZHPwZdfKW7M73R1TS",
  "key3": "4sbmrVfYTwt3DYdZCxEzdmpvZFLWAwPPLNaWt6Cuy5w7aU9zDrA1UNgXv96VrhZKMP9TQggjB6fPWiC23eJQ5sWv",
  "key4": "parVEt2fHJTebEWz7GZY7nBF6BdXw6stBSHb4LWvTcv9Qkitv1qR8c57LrMRRRyzbkqAfMtcPbxBWnMSfFrBo4B",
  "key5": "5C3AxjDx17A3LavhYjGGW4ML35DdoQYPaG9Vaxm8BUcRj4UwbKDYrQJkbgkjcNkiW4zJkG8vJDvkKCk2DfWdQJJY",
  "key6": "5B9Cs7xRezNPvzhMqG5xTR9nBxwYhpUY6QVCirVGzcu8wH7nWG5jCX3sSvyFKs8m9AUL4X3wDUTHJWG6WHFCEKr2",
  "key7": "t2gxKV6vAEjD4pWAyQk7DoFCUHDC52zy4e89yPzuX5cTvMhbXLMFoiuAENa8fF24a6tAPnrQPUZQ1NL9qPLJhGJ",
  "key8": "382RRzmGgGize5PSaiFFWEFGTiBDjxqzxiBhSBctSmzD9kzQNj9zPodDkBbUQrAsPUD5eFh7pbuKQoXWD3ChNzKa",
  "key9": "3TzBN9v8DQ6Duidi8xt4o5dhxN2AL9khnvRdRSU8GUbJiAvMBZMyymstgdyRbR7h18aS57LGz3PVT2Ywb1FkpLch",
  "key10": "125V4Acjtn5j3WyB5XgALYNjM97ng3DqPocUrvGz8CmLYh4ZbGBbqRSrs76moVB9uGPUdNTQ4KH33vh7kdDVKABU",
  "key11": "2DKFWsMpPXs6NiHE8mPgUqx1jgvRKbphPe1qWov12cNpRFpH3Uk62NAFbsxLfuid9UDvkwv4omBjikc3qKQjjkrB",
  "key12": "3M8U3qRszH6Va4HJRqJhtYyPBJe4suZHoc8e3ev1XoESULLhqyoaoeFCqBxWNZjMfnngkooG8m67JEmqCPVg6tNu",
  "key13": "4RGr2okTZWq4u5bozK9mfiTNSSxgQhhunTenW9aDM9qvDLnH1s7X2tdxDeHE1i85YbQpv82hNTNDEPft2pGSxmvD",
  "key14": "3gUesbCz83nJTWqd5DEv5C6gb41Dnz6bT7apu2kwhUtzHTsDbhFZVbayfXXzmDZqVQYAg2hd3CQEtxJryBVjqrrm",
  "key15": "cobzcacuVuoSiJ9E1NqNNbC3dEwprN3wgpLACKz5H8iayXXvb8zwqxuvbk6TB2pVoHssam2GPWNQFt9Aef7WmZZ",
  "key16": "nhgnZrAL9mNM86kLZkP78V4D8HAZixBWjFkZoKUED2xjd1ZshvF8kehoBN29XzELc2ZhPdFQwDmhwwAd1Qe7oh1",
  "key17": "33oY5tt53i77cXyEaz3LF75S5YS5UPeXGFAKqw6eDBCFmLF5rYY8F5BiKmgbh45ZEqKAKAcA2X7j8FEGeSjVTZzD",
  "key18": "24YSwCSactJqVVjVNvh5aiKH1EMriDh1wLcsqDbgrRG78dSiFLxdAYEb1StuJH6kUtxRaQptP88Qra4VqhhpZrTR",
  "key19": "3VijgPWFNXAJC3t1D1cRC55R1imfv2w6k8mEbNuaW6w3fycaKtEFuxGqo75Swr4uRbSmyDt7tyBquHsmpesBtP8d",
  "key20": "5vYRWkracxwt3DsozssKURwypR8wajDLPtY9gPzLqzHbpE5iYwTLXTVUNzt12KdtthCjSvoLPFGoT76NAhDCDXuh",
  "key21": "jtaR55RCTuwJTEZkQFsZQE6chZa8Z5LQP227Yv8VJQuhaPRCwWmNmCshu9nE5qxUaX7FNSFEx2WibxyBLFMHbiK",
  "key22": "eCxhY8vstAX7QzFzYWTjLreatTM4TKnW9tWQ19o3LbtDzYspYdtcjqsZMDSKZT4jci2tjYw1qBEdGXemEni3gw4",
  "key23": "3tRn3fypSWg7AHi2JpayX4m61eWKQJVqjBpotF2fkyy8MHMvpdaHA7a9EZH2zhyYgUFpDPg5wpFw2XsQSgcyXgrp",
  "key24": "4y9RYEHDoCBn4RLpQhfT9mnrkkpdkMeZQxkCfNh9vxVdgdHRzahrsjKWrn9f8QL1YkLwXEDF9CJtmfhR3S3Xknpz",
  "key25": "4F7BfjXLBAsBjQth6xR4JsieSvuZgWmGKW5DgvDiDaW9nhZ4P2GD6UCcqZh8Mmd1PNkkudE6m3vUErgPtoReJ5cv",
  "key26": "2AdBhDoMLpAQwRHizvHLoYE2hM2oVeZ9ZgAT4NwZTF7NQQpgQNAoha6g69VBK4M8QzKm64VoLwHScW8JC9pkRXy6",
  "key27": "66xendjKArzHuyJXzXuYQTq2qua2zQk6z43EBGJCy7Eo5zSsZWp7DYhbdZCf19AAAqxKmDc8cePGBRuA7knHBXjh",
  "key28": "3uCJpLwxrvNDkavvBEUB34dqEXKZ7n74FTBEdQgcdVAGCgPGqXBhErsP2gR6y1USqv1CKtJEaimKd5u71Mpfx4CS",
  "key29": "z92cAxyBY2gwc1oZVL9CePdRwuouZw2wtE9QhCa2krgYeTju6Ry6ve3pR39GkEjiLoFXxw7KWZqNsiUqQg6RCyb",
  "key30": "2Qgx2iWAbBvE4nhJhwTRZMtAdAht6aSNdhUSAywpGPwGEJKHQodzRbHMVNqGP6LkDtuDktNoDBrAgKZ91MqJbRDF",
  "key31": "LGBf32WeNzyAFjrjuyyQ7rm4WkA5qadCGJSEnmJ2sy7vd5cKwbSLBWT9Pg6wPzySmL4KsCiggEgoFv9bjpC85zC",
  "key32": "zpKkrXqwQ3dsLqyoTfkRkkcMqTwmg2mDGaHNCrwmba2tar6pT67d2RxVfFhBwBZLAXjW5HHHAgGkWwqC7Zx5Kkd",
  "key33": "22McBNy1WsxXsgJSYaDVBFN2wRofvuPHc6pULNLxQbAjKXvuNR7EUqCD3Q3443g89BCFJqZNc5uxe7SmBkWm9uuG",
  "key34": "25xkkmpAxmWJ8P4CbafVUnv3iyWygcH6krs3GGER31kCzG38xUqd5dFPEqBj4taxSCP18GbKjvGnaHnxzSWoSRFb"
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
