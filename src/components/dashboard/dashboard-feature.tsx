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
    "4BsJMzzFSUJUFwH9kPrnSxKR5y8HvxnbHFSRVv8ZEMxSYpcmtnG3YmhaFK6i8m253AyQsou3vTCPFxeP1mKkKGT4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "125UNMpfQ28dwgmHBv3dAseSbxSgfD4w9H9zREKAc7PP2iETiaFvnGXdwwY1ocGsLLu5vv7ChFd687USj5MTpMq8",
  "key1": "X2JNM1Fyp3tgkvLsHBNhMqT7MQTZidyqqRbppdJ2TzeNzC4QN6JzzHwLthE5yGMPj3oURH9jMd937biuKvYrNpW",
  "key2": "3HfU2atPNVHXwagZ85yRZe2yurgcmNbsecVSD4UqAwMX9nhx3MUNQukT5J2meumSgvyuE2zSePYnYKEwLb88AmVq",
  "key3": "5pKCK65PjoY7GpuMNkytT2toABGKSLxTPbyZJtTfz8a3nwZuCouMkzabszdpX4S5XD8GBQMqMKdzeb3iLcu8F2Sv",
  "key4": "2KNqsXgVzSpL8usQ9rTbdNq4dt5YGYqjdGhhXBY6rDdxPmF96uyxi1PBHJ971s3gpy5pbajdB1jBPwpFquKp4pcv",
  "key5": "3xUmXEPg4bYiooTnR7anywshNMWdUsFM4gwVMpoccLnzBDCY9pEHEJLMoj3LaAmsbjB73ErZmLaPhv1gFPwUFFdE",
  "key6": "25kqzSLteCigKB5eaa9yvHDBzniiVtFrx4cse8tBjWfqBB5dCkUo2ZvcopQh7zhSu3gdQP6uwgspxnY6bQLykdf9",
  "key7": "4eN8CHQZtx1XWfaJMPKg4bAWkm4Y1NoctyeMUEGikUNNS2ZWxZPZkpqRTave5wTcfmxiZTwq85xFRKsp6E9WFE5q",
  "key8": "3UjyP6zGt1eih854f6WAPcXhXbZqLCyWwgsSDUmCMAmwJPSSFiLMt6YCkGCAsipDiWNaYdifgbyV5xounQvzzMa7",
  "key9": "2im6TbfJQDh7mAHambADtg373WbQsHw4Rw959pXo1h6SakKhSgGmaNQ84Cbej4WjAyu7q19jtyS8xtbXKDBJsZRm",
  "key10": "4pFqvJmv4byhdLsHa7dirxHxeDza3tpGwa2vRrFyLnXa2UKixg9av6239HKg6EMrxwdTg9wEYCTKGZKtL6gM35TX",
  "key11": "47g6SHwcDWRdbBQUrBjMqCvYtmNwoYVnvpa9bGaivU5Yf4pyqfcxhjd7D5W9KcqHjaK3fUftudBqJURtzWqBAMTY",
  "key12": "PcFG2Ay7s7sFo1ktroX9afMzWEagCsJKrR6BnKyAXBJg8kU22aEqWJfiyswWv7Ztj8uxbwsmmoRrzVi5sPntQVz",
  "key13": "3FA33WDrBCHhX2vVKHQCXvh4q8AbSz9CHvn8s9ebhRm8sgSzhoukvdDSUC4L5Zg6mN32wY21zh48i6HEMrZyM3mb",
  "key14": "3Gas4aH9ruPcXbsuH7chDxn5nuNtPbuqLvnTtvY2j3aUebKBLcPUyCdNbimDzC1SMU2dftuuLACmFRSqCk5p75Hd",
  "key15": "2gfkyP2irLNPZMqURLBjuzvyJkvB8ncSJZsozBgibdUW9UnzeAQrCqnG2VjkMHUhs7uPV5diFRbM1HxRrMbkh4qY",
  "key16": "3h5CQDotPviFscXfFf8PDBjn7wZ2hLomY836jr56t68iw1yWcXut9yK1SCPeAx4QgGwEE35bGTM6D6Eh2g7auUaH",
  "key17": "5ajr4CxjSfetK6ufFGKVA13abycNqESfZ7P9c1HmMKChDtTJWfmZzgjYVbURrjf93TVdX4gsinWfM5BGH962YpdN",
  "key18": "5vLKJd4zbmnvmECUX7hHjSMuzVefyYediwxiP7YZSYsi7a4WGPoWduKk7KxrE9uabB316wrijhMuFYNnzR2zhxsA",
  "key19": "37fHxHE4FZvG4ab4HnXcNhjhHDPrVQHzFMvArbnMapTaEH7d26xD1oxxZiNx37bm1TEi9JD1Uzpj3PZGqfSNZc9t",
  "key20": "59dSQhpKxeRpdAYj3qbu9StFkS2oNXzHE3tx1NqBar7UKqPWPwUwGNET8zBb794e4FHtW6VxX87mQvk6Qvah2aq8",
  "key21": "ZNkSMp7R7Nq3NQXChqHq3Lds8eUpR9zf9rHbVss75bo8azmpH6xKyKnQdGb42YWmLYnUjWhY4d174fGzGh6STi8",
  "key22": "3v5Kp89gq4UmDJcnbY8B9DQey2ryNLnwaAQy8ey447e5eFiJGMKw67F937swUMHUjUCAyQohM2DiTNBKEyyK1z4U",
  "key23": "jKpWi9NPtis57ggQH8soU93DrVYJbUSnAgqooEaQCZxUQbuVFWnwsfHS8oVuxreUZzkUX8aj5TtMXsEsovTJwuo",
  "key24": "38zLoiU1mg8WktM8MmgVpkPS35T5v9UMvp3TAg5vAgtxKsR4N49ZtBL7c9H7n8TgLFH8YNLoMsEmgXVxZY4rQgUe",
  "key25": "2q2FJXnRPNSN6ptJ1t9EAMAgJEkryEpSPRZsRJjBDKXffuzpkmQmGSs5qFWaUjXE1ABKSjebPsutbP8aV9YDzGsB",
  "key26": "RLXDRzrzYwpJfTarB6MXXjgbZiCBEeS7z3qGYsHyvfGAgbfo19PJm4SD8AVPnzFZPHmHpAovS16vqQsqN3W7FTm",
  "key27": "23L7sc4jT9se1J4MaNwsbTprigCUR4HLMaE8siJSjAHowLXDFomr8sRTdkGKQ5DMe6rzVi8WhrqpdMMBwtdeUKwR",
  "key28": "3UnyWCaiWAfFC3TWt1NF8xExoTCTXie6VAUvQZLaC6TWuh1eLfku9qawNVpRc6zENssY3EhPEPPVznJEiv4f3rpF",
  "key29": "dJ8g8NGUK2nTRZMr2Y3pXZDPhpzUgi3uFqpypqisKha2xz95UE3wqGbYHmp1u99AYE7jtYCnrXFuDPz4bY3jMF9",
  "key30": "5K89nF32AZo7x1ekiXPJic8a3mxM1hsr1WNHwC8b6SSMbNPtKZsRkn9zCeVoan2zL4uSQXSLYA3vKBfH3nxSYtbh",
  "key31": "38V3rNRxkw8bsVP7TDVXbM1orXWVoQF4TvokPXWrgBHmFxT9D9vbW1zRfXcrC4oATMtpdFtvd5ZHwp6wXjJBPik4",
  "key32": "zwkXnpxs9xTWSzE74T97Wpo23BHf5Xm8YRUQUkdPfDWuT6my2g24D86jFWwuxReuTXn5eaB6VybLRsvnVhRGtzE",
  "key33": "itNRcy61B4mqzuSSCTNMatvkgP3iZ7bNVCNdf5Kpoefuq5zMZdsfcTBD73UwZycCwZqqJCDnTvzjWPfmji54VN8",
  "key34": "3g1TU11NYtdzJTDBvexE5S4U9Z76K7xtMtmrHZifPSKefKfT8cLrMAVnMgXpNiXzn12SywrFEBmGG7xKK7VkBs26",
  "key35": "cCqWHdtF1xJ4FxaStQX14KMAW7oybGgGdcCruZxT44pzASnntfzDjV9cSeG9ZunFU36euuMREr4VzvH3EiVLxfd",
  "key36": "2EEyfWsogr871tntuhLLdA6iXjHEDNzy8hzrYvgZpVLvqeg8gNrvvGNr42NNWqdGNaJPwtkVeSSpyd4T7ozH3kC5",
  "key37": "4dfTLiwAcUeJMwQL74VGpDbHhwjHQR6uR11TuF4BwdKmAMvU8A3CFF8ncSuN4GAZV6Z1Vysf5qbBzJFZYuR39GDj",
  "key38": "4yzocMUhrHvkNuyz6nNYgkbsMMAaUoWeT2bcqMYzr2iGj54jwq6cURucx85SeGPeTH9Zbpcz9DaVjFtdm8nWEA2S",
  "key39": "311GgiaGMyJkUb4PXhGaGNCS3VMow1n3qUZhT1MKPEEMwsRBUY2Z4NS1SFdjdQMTLKhv5UQxd1wEMvxWrUE9Jqfu"
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
