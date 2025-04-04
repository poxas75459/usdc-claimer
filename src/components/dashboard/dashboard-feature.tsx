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
    "5Pm3n4tEWX7JTKMLL2GFCsBEfwfVVJcGPLu11Ju7pgoyhsfMqrztki2agrwwazuMVpY88Nr6HMgaLxp2au4HvS9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JTW3zjQtQodW23hk1wz1zuwAWNmSrryYGTRXw85j8pWyFVion5KhJu6kf5xFReR1adwJWAES8rQZCUqz1hiKfbf",
  "key1": "jNhw7vsizuQucKqgEJTw6GiE3M3Y6Ynvsk1Jm7qRRRGZLan8iktai1KxjYz98qiVckhW3ouqsZ3YyEKQueYg3d8",
  "key2": "ZuKCscQRqgor4cN1eDRc3SRrXHLeYnoDSwJ7fUAWN2tCp9QN41bopUhHmZaxvHxnnzRnPcrmU5bvrNbGnQxPHni",
  "key3": "5XocQYDKnaFAHKwXeBPqhBBYLykk4E5BWwQ3XG54pXV3gY8Lcdi7MX5DAu2GnWrG3bmRtT6SN2RfXDMMjf2CX9wb",
  "key4": "3jQ1cC9ZdKzMdB2xXhacRZKcszTExUF7vnWDpoKn9eFNLK3dwaVs9m9DVjzc3aHyk8NxAXGumBv6Dd7ZH8Gh5ChD",
  "key5": "4Znh1mrSZm5quz4bgGdsJZVgeVEfuqj6JsPu5pWGnpFqoXbvCmsk63sMTWVqa73i6UndjkzcX5vWWcbjarozqNdq",
  "key6": "4E1hRMGs9BhqHZCs9qNgMuZ69EYDEctbp24hpnsMiKdgbSgMB7fmn1un3RVSzLpttTzRMu2kadihLzZuz5NDcG98",
  "key7": "8Jz896EBjd8ZJYK56nATBEXB2RMQbC5t7QgzUyxsibRQPtssd2jyS8wuvSu1CtSedgUSdoBZ7jgQRVpzwxrTtd4",
  "key8": "2m4HgjvHxdZ9mBQ31SXEyGAGvo6NCJYJ9SDhzVUrfgFTAmFoZ6xnJGD3aEYWpp7Mca6a8zSkaStnCGAPZELzbjEX",
  "key9": "671qR4YY5UmVTutBnCa4XEfPDa3VPnrv3ebD3rhrG4SSfHH8mJevQDfxysh1NTnAL1swU4AfBykW97JE4z8Kmr6L",
  "key10": "kPQX4vnjFm4g8hqT2T4RaD3DKB8wJYLsfHifXgepifUd78xzZeHQy7zT5fdvtqQn6zigMfvoDdHHTg9WFoSUrLc",
  "key11": "4yP9caKcva189BMK2EBhXhNhcgk1jTji1HHjgqkP2FVJ69rMut9fc9cUu3WdRL9f5FrUgNGJKekrZQZSHf5ycRWW",
  "key12": "5WuTFXQhjbGw7af7P9LL2CLa3yERGfrsvB9FhBhRKM6xCRzgCEtr3ZyUe757cKJ9g4Mrt4KM6rM3ynD3UpPnGFvQ",
  "key13": "TrqCVUbZH21e4ZoyPUCgAE77rnY3swydsMUSy8oLUXgCK6RGta3A3ZNuVgZQxNUDqWvbcuyzsNP3qawBrkBML5g",
  "key14": "92Zw6f3aAGUaCmasQb1t4mrkRQAgaGuJmxozNjM9mZevnJ6egPjkueBbEKvP54YtMzrtMtTN8LxUjULUxzghfM7",
  "key15": "uMu3aM9wjtJirZTqHUQMWZ92HErkKxRhjMhh7dXXhW4PC2ADAXxrtrGfNeyZpLy6VdJb6Yfwuewt921RyVKFs2b",
  "key16": "5tL1KMpRqumzPfVyPznJAA4PHYGmwxQ73hGs87WfWYvHzXrGJBvpQiq9uR4NfGVLd7Yg2EBWP4uRkkxuMvaRq4rd",
  "key17": "55i5aBXre6Dgp5q4Lz9FDvQXuyfLLSNMAPZjn1pw5GGXFspJFAmQYpTvvjzdyHeaveWiQD7sjHLK2NdiC3hb4g4w",
  "key18": "59DxEQ6hJsJxWN9q5Ut2jGwcgcjBRGkJ9jQYPo8LFrdxfXYkjDTaC8Kjh1ujUxc8zFA71HcVN5ZCNYxU18ZSoVYi",
  "key19": "kwu1942E3nVuX9gTwtvSFPQLqqnfjMKU2VGgx3QcogSJpwnDZHbeUp92KFieXT6hLYcZUu2PFFU54WsX876MXYq",
  "key20": "sw7nGosxF4UyG47sJn7FJPtvaxCNz4dhGxEZrG3vS7Cv7yobHwX6vPcvSRxvHm7k4JbWxKupRtS2xSbjopzoaC1",
  "key21": "4PUuB3FHfaPvvSbWWVYgRGadgWe2Q1qmfnsmSgJ4B7vpn97fxDxCWbhdz1VZp3MFD9MQsDGcVTyktCZ1gB9QH4AF",
  "key22": "5Xr4BpCWrQN3KffQyhFvbpJQjh6oAxLQN1veQcPwtvbeX9HMrR2Kzw55caKVAfSm5JoC8N69Ei6DYtqGua1WsJ7c",
  "key23": "5wXKvHWndf628pPszEwYVURxpm5RGzQ5q2KS1SzyGkHjDqEqqwL97HqEUxXvW37b5M6Vt6fuMG4JMCz1xRxasu33",
  "key24": "663SqeKwEAVtkSmUwu29doUY4QjpzVT7u9N56GhcRSzizxruoqJA7hwn3dUhtFDPk76CeoeLvDECTgWSJV22xnfR",
  "key25": "2KiL2izL5KP9wy2RM2DBAocTVtKzocLwAZZdu2oL3GBj6R9QifkQ3ygzWzQcaaqZMW6D2dWQkYPVQz6ckwSiEtnX",
  "key26": "fCrNNSgjfnYvcG4igKvtC21avXx87axudXfJ5UcCEUtJ42ZqCHuaUBjoAf2mdfqEiAXokKDN3NQwZgbTFqvtyaD",
  "key27": "3s7yWTbpueHMrj4ZushjvSzKegRhnHmfp7vMeWyL8pe3KdLsxnHFf8i3WYnxrPpsBFu9GF6FBSrPjFTdQ7FihocA",
  "key28": "5hVpNoZ2Nj3duKeWTxxECniHTNDuXawpqNVqnfysyFwrDofFm5vVxzhfPspXypGJcFwy2YtCt4GeoSieb81bMQ8B",
  "key29": "3VsG22NpWUbtqoFRcZPNft1qEoZy1X8UYSsfHdAEzPVPXx2v3G1XNLzVZ3f7u4Da9HLretLTespFUPH6hQNje3kQ",
  "key30": "3XuT6FHqjHPnCC8hAcJ2KcJ8XF9nJSmV1XczmsprhwdYRkj9cgb1gCYEkS4WuGuQcLkuK66zQe1dSwZiMRhXe2ar",
  "key31": "5kWCcKmfKJ9CMas7uGE4nbv9F6aREPpdzgKPWcH9CPr1veJ4YkbWJXN4xeGnfqJaAzMUCBSPWLmbZxowekBmHgWM",
  "key32": "51XvyE9h9UpsQC6cFXEo255DQdqVSKrzx9WeYJ6vPWPNwZv5cMtH5Rz5yG5aCevRe4G8enwgngY8fnZJ3Cv3pXFp",
  "key33": "jmvEpiVLZEGLQHuvwMXi3sx2R4taXTa6MgyafXgPPYXeabMS4897bzLrYnKrxqzFFYPUFPwmXDtLBnGTMNZAVKx",
  "key34": "pB56bG2La9XTTUhf4dvg31yxTyKV5xMgQBVR3dMtVMm4TmZRs5jJYMJig8QcHV7HR68CPGcNyeUSxuJgfmyr7uT",
  "key35": "3mdUJFetpCuwddJNWYPAzBYi8XpdDv3iKqKALmq8Zh2b24FCFaS92fvRzbcYHb6RSc2Y9JCtbnJWNezN27dj8jdq",
  "key36": "LuU3D4waJ4F63SFWpUQsXdKMTj9qyVuHsCvu58FQr1TFgrJue7yUh4bDzkw3PYYEgqCmmhQm4sMFQ718H4K5C7L",
  "key37": "3hETnDFqSZcK5zLeRV5TQEDPp8g6ix7nVem4asExYLDPBWGi38zzwCAzgLkNYauAw4QHgzwtzPhu3575M7qGudok",
  "key38": "3F3EAFU6WAqLuREmxJvfb8WnA8GMczPk2SfkNXWHC7n4H36Q3Pm87yvxYbDVrh77fdSVqfnQ7nZUZiciFAKiJAXt",
  "key39": "CgenW9bVKh3hEVSkFNDEF7DYZGdADQNeU3da3AAdmnuo9BV8cvjCGDgEmYZnWPkwdmZnUD1xZBcejJv1b34rUET",
  "key40": "M8vQcq5JUT8wgBBQL6rNq2MCYsgAaJgu9Lu2UJs4W6Np5nSnQjeFR2sygByc1yCzCh32n2YPZFXNeYF6RRe9kvX",
  "key41": "n5nvAnB1icU4CSk61xGZd4tWWFTfQFM8mTuMta9bjtnx2oQ6gsSFHuFcy4ha1Bv1C2Fn3u4h1vjaMuynC8c93Uz",
  "key42": "4Uch6U5TnijpsoXiuVGfA6MGRC8fYyd149YuZxrBXBnxUB7bZswjbDRrXYriRzQKBjamiwW1dAndzTXeDqjY5MG8",
  "key43": "35bekwGVcy32F3dy8HV3CwhRz56XjN9JE4kFr4daaFBpVFVRjd2X3jTbik5dbyWSbJW72hsNKbXXPU5cMmfHN9QE",
  "key44": "62PxTnG2gXMDdyjCnNNAGJ5wgmEyFBxPMSBSMb3LuECy79hXjaUhrTG1ajRD7igT2FFFX7SH74wQHV1u6kRcZx3z",
  "key45": "4qfwFEyEBwtR6wkQoGjxVrPz67HYJFQ2DqM42UHWsWjUHvAHtgw71fwULo2cGZDWHkCXKeUkWWo1f3SGjW1MSteZ",
  "key46": "623GrcC5Ee94S3TCp2NDS6VSCNDLqZS3XT4tm5uLu68tNjtcKeAVdh3vvWMPvb2AAgsbyaEe8oA7PJRirvuotJsB",
  "key47": "5sPZU6pUUqhZ1MB6ac9PHvMMTpdQPLufFQzWAdAr8NSfLLqMJxLymZaJaRtx7aXKusuDuM8974Qf1Drj84E9zZoB",
  "key48": "3j3Ad9EbjZNMuATPoGNpkNUnKfRX6ZroVWLNfuBzyR1mzHfEKDhnNcAVMxeeDgXKWkaEVxAgsrgmgA6724unqjKV",
  "key49": "5hh18Mqdb8chwBF8XrToBisCqHkUnAccMjed1EwaXZpEWtpfi6gadRHSW54zBFZ5cHKTNgvWrJA6eSdjuHagkacS"
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
