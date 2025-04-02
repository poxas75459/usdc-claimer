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
    "2pVMEiaWAUppyCFRKUjoYf3kLaMbJ1piozozk5a1n1hdhyjpRkSB19pkQxHVL5WE8zQXYdyTttz4Cj4y2keWjSae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AE6jXaHT5TJyqXHd3gQvrHhLvW7E6V2haMvfFecxR2CS5k5fKTKL8TRPkqLYLRMRAJvZmaRurRPcCWn1h3UAcSA",
  "key1": "2DGMbvwbM4W3LngZV9MCaH9GoJh1U6d8KWeqEfQsdFQbvcK7fdizqU28phdR1hs1jU5Lud4vd113C9tzVcUx8AHA",
  "key2": "3grChB3PSY9nxyN8ch4zYLG2i5Gi5s8YCSnkJbwZnkBQgJQe1uCqeUHrbU73xyGwf7SAKnBSqFkSzvxYyv2of6AX",
  "key3": "3rkfv28yeamFxqBDXpmow6HKkPgiJ6UjWpv155Lup6anGjdVhVRAtzCCA6cBjf1GesrUHsW1MdnxCQKYmy5MCmHb",
  "key4": "5HyrsdN4Gqce6QxGLnFuPgRExU547fnWhHtUwAYjDZ4dgZGT6VEpi8JnvSZYZtpFDCTX6iQYrmeamyonJXEMr9pH",
  "key5": "3TM2URVmBpTp62ni3qbhbTKevT4ruHN1TnajhU48i7ZEqyrCqYG2pcY4xfcHjXG9rfCUpzfRTGj7MPdWHZrAEe9Q",
  "key6": "5nqqrhdw2HPnSrn4x1ywrGFxeiicBeV6Td94iivZ95dzni8AZuU2btnY5QS3w4LyUY3tq8Vwqk94gA1q5MRLLS4X",
  "key7": "5VRGgJpPp2PrkudvxNyxHG2MVeSzh2QXH5fUvC3HhDWFoYmyakn295wTTAKF93PwdsFjdfkas7ukigVUSX9SjuHk",
  "key8": "4w8pC4yCBaWwPzD8CSLvJfLbve7ZKEc5Yh9avgP4PBoMP91pRwrjQ9a4s6PvqF9FpeiNX8qBygrRzY4quLmFXLMi",
  "key9": "2cQzKEkVxVFf5zPC6bqM3t4s1cm4yL3uofxDYwAHVuiciTcZAGBhqghzGMFT7vg8je2o6jLU57taoPLaD2Q5u9mJ",
  "key10": "3aNuyF7CTyL8dQAX6y9TcxrPKaywW4p8TfSDPJ6GtuRJgPkZdvGsmeEcTJrEkZjCPxj1TDcvJNixksZFQeVqkG4N",
  "key11": "sAi8iegNmnwGUj4SpgEXXAzAgUD5Dn1Cru5mZcXB8yQXEPCvbto7wYdTJrozcxaRwDJTFP4NzufnPcTtaEx3TUC",
  "key12": "4KrNBxfpB2h71Ctj3uCfbGqabje12wYMExSiVqu15xw9q2MeNUBakLGMxhfewsNMcxGNvYtea6a5di7e1jA6Td7N",
  "key13": "4AmAtxPycypoGeQ67S7MaYM5KhtbZN3om7kVGNd862KvLXw8NAgp2aNUxrLnEtKx4TP3bRn9HteqP9dyBsEw7ZQx",
  "key14": "37WWAR8RqsLnC95ggHGvx337ivbuFqW3uDevk3yqBS46hxFbJwd7gpNRGy24CwZGJqP7LVgXwjpJLFBp4C92ZUjL",
  "key15": "3fCBWu3wAaXqBjm3JZ6jkw8ZTLqhyepbzDe3wFhgH3dJ3YX3eoQLkhrT3wUiX1sXHHsPVDgMCqSQoMKAPLxmPuYD",
  "key16": "4ZkzNLhpWNdrQKd5gz4n54qnHUxPpSLdbkCM7W6aikrfM2g2agVVz1JPfK6fFAzTqoPhRAUhGGELte7K6KRGAbrm",
  "key17": "4AbZgRAapxV8aucKEq5j9G84EGyDVQZuy2nrATsMvqu8trtNnoS7vmihGmkKqoJiztpRcBC1vnwKihmSJu42xpkd",
  "key18": "sYAbmEQuDXVz6eoFeTnjYyQNJbL4Xt2x4rxgTDSsiSshTkjNDRGBiaehExEoyKr68W2qrSH9jsTgfMM9h9fthd4",
  "key19": "5SdhhV1Vy3M3qzsztPEZoybp7KgyiSPUo2qVq1XBNhD33pdvFTAfjWEVa9xERUhm6Ed7ooV8Rouku72JhjsDyw3L",
  "key20": "3q4qoFBj1UwEzHpFNBWPC1uxthHZnTTFKWsawHhLUofeQC56DDPsGp6yn13s9J5sUKkKvXsxER1uYGNJZnGK629V",
  "key21": "4EBCaBTs9yWJbWai5pTz3SVCaEyh9Y8QoEwvDjxcUCJHaBoExADQy61vn6bbeBwqYZ8jQz3Pteo6thgabCYuqgb9",
  "key22": "4FsVk7eVBaByDXHr1zgWbB7GGxdLCUWMV7iPU7ax7B79uL7BP2fvhugT5jTm6LGsc5R5gY428uzMoTeTcV81Nz67",
  "key23": "3c2R7PbYKy3Tp8qwXbPrH1sgVyu4CQk3cnFprFFyThUcQMqhzUJcv2YMctAZwWi5ZpqY72vqfyDqtQ75kuiMYtQp",
  "key24": "NL8xCjoTsBFPcvLhwJsWjA8EAkEfbKXU9JUeZEazBAgsfTY3MioCrs6SBYpoV3y5JgY7H3QrrdEcLktiBLmt223",
  "key25": "51pEQNzKk9cW8cww8x9ZdsyRDnxPA3byBRTGxMdfDiFxqSC7JMLS4rDRhdQx2pRv4HKhRQnBaCUrXqBERAzLVVzs",
  "key26": "2PkRShPVJqEAy4LdELFDCcF4prFuVXVQLKmAVTqwHvuAoJidiojvsGiW6PNp5FMtfwZqfK439aq2tUUEUHpxSoUS",
  "key27": "2ehxChoMF427QwMNeP9tYzMsjNdNvtHkfyoYcrCskgcutkTDLMGUVKEkEQws8nRPoQ6GVLvPtuubGGJt6WUcd9US",
  "key28": "5oUC3j6jq7E5cdfza6bhg2iS3SooeX2Se2t7gVkpjMCgmDaX5KuMUHQUkvh8m98tPcWjbdSR3KKiuhxMhom5XtoT",
  "key29": "3h1adY2fXTe7T7iruGie8FyrPqTXzQtBZW1Hf2mZ7ChQKcny9ZxnpT5v1Vy4sy2nFhSGasCeTjEpbhZQAmp6sgVx",
  "key30": "2zr489pXYkkYsX387GS7qDfBSeMEchSsmCqFEbk9mtGeZy9CE7jnxASFp3vHWufyNd6cVHKrwUumqqNuHKGYygJb",
  "key31": "55cSpmhv2zzz9XxiQewpkfbxnBbFGfexuJBRRaKmMeQR3p53rdmzuMDCx6wEycMP42tKGPTas7PmA3xGVqop1ifh",
  "key32": "4FZszRV1uyU8ZJ9eZbHVoPmtF6BaQpiMrX4zRSeaZ1qXwYsXtkgZfdPSRv6eDuDdmNamYmZJfZzsDGnt5Z6SekYx",
  "key33": "4M5md7T6Vozv3VATqTzYc5dVzSVYGHmY8f15RQKBmtKuUw2f47zUYtz4D4w52sZLySVcRHaVETP17v3iZZbSjZg3",
  "key34": "7AwC4ogz7vzSvhobALeevK22TJMWtAghXYJprpUVe3Hs25Qyku1QjThbSmeqGwuApdE2qWmdUe4w6sc9ctrF36A",
  "key35": "5i7aqCDromj99TfxPzLH7r3aSzstDGgTEMtxmN2K3Dx4uWHRJWzWzKomwZf1bzfd3BKXuYHSqpo6TEEESAyJRZ9C",
  "key36": "2MXM79hZ16LSaJUhaUrhojRaWWCX12ifBfrKxJHsmX7irciR9HZz3TfmRqi3Dg3EZY2qt2dik89oB6XgGRExazr7",
  "key37": "4XTxME7BJBCkh3U7DknHLLTvWrA8LoGjA5922xtuK4gryDDMW238yN9UnLz79hCKoug8X1upaeUieMRuHGYfuPt8",
  "key38": "3rw4uzFvNcwThwctseAAQaXVzpuajmAHrf5i4wX6ox8znrbji2S1sLKGJieVYeXnishzc6FNbvwVg1gV1PwaugCn"
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
