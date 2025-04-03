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
    "3rQwVk6ZQdQorq9e3gy5KwDmTPsCQjokxKT7KX7p7c9tUVCQtDFVDGuLKP1ZsiJqaEcRY1pLtkN4TF8vbQ5vj2vU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iHZJTkhmZyAmh1xUqqL9Pf2Y5VqEJCf3p1Ez8YDAN1xCNNSD8hXEmaSFgju2VQikTQTALo5qXzvw9p45NhvEuP4",
  "key1": "5WTopsZk8wsAzDFfuXtzm3zJrpTuWt8PYPumCSTZ8a8ecYvhx7Po3hVfoVixkgh3yFpsxXuSPGnXT1tTdjJMG8K9",
  "key2": "3U2phNoX1jqAxr66iTfch1UBeTw78wDDGSrmqpgB3zFxVi4UcW1FZ3jTud3AGEnPjda5tmZhDggE5fucyAyK56bQ",
  "key3": "5N3n1KLdpLyXVi3HFiPUevNuLnrjtHF2PwC49TX4ss7gUeGXUc4DZdbAcyJbKKTFj3MgN4vLwQSdEbnhAMC2TCdQ",
  "key4": "5hbQ8YpJqCTjZri35Mt4t1DtGrsBSQL2AEFXYmFps3JP4Tuir32YBZsTAzExxRfss6sg62eWK6P2PzcLxTMF58py",
  "key5": "qGqaCXod5B5Wc3cfJpGN6vMHJUdmj1qo4SFjZq9eg82b5Cw65dRjUVn6225TPdzjLD8e2QQhF2fNMXGd4oHkxri",
  "key6": "2s7xjNDZq1HQxtnhvZzKzCu2JvWxaFWoFVv9zTbv3f6kUzQ58Mg2KMUZqTkvf2dkzh1bKrYvTMLeBnkBEXeYjhYZ",
  "key7": "2Koht4H3RZxYL1pthuzX1QTfU19wHbPdyBmDviQ6uUaduFXjb8vK7eyXQg2mU9uPy5h1rkkLWH1UajESEqNmjxqw",
  "key8": "5dDZJ3eYGWvYLLtwMUqffuZK714Bf2U7MbNcskiFFfxbBHxbVknmyQHX9wPgiDYU2UXqU5ge428NDL7D4UgeybH9",
  "key9": "4CigdAczAXwZocBuvVak4S7EJhXpsAvUvEgdign6vSrUKhqxFx7ytab3YiWbBh8r4CsognKiUhwcaTegnPiAXZd7",
  "key10": "3zav4aZJ7ufrhQbdw47WfjPTXcEcNbfryKH3MqPaVv7cTaKGeTEJjmJJ4FwLfRCBZQWjRaoEvy4Kew9guK4rLKuC",
  "key11": "5CieJu1Vuuxf2PnkRwJ3mYR9GCtMmeCcgoMXYzcofPnSbLFpXgdCP9ktGNbyQ5EwY6PE4Jj7XoptvNTQTGmKx7gG",
  "key12": "3B9xwcPujtWhQsYH9uyoNZaJohcLTfk3TyF2aE9yKjhDNFKGHfgnjWx8MwQTM81rNrjwMJ92vut29DQRQ7qzVAkN",
  "key13": "48EaTz8W2yDKPmzvzMPuvBZCueqNV1n361HSBhSt4hsiwdEws6GqGAknABvPtX5Mzr5u22Hk6FAiB1McsB8cDCte",
  "key14": "26u8epY61CYqoDWReY8KH6NivWEeCKozADVHMq2rukFpDDx4ERLWRWFADu75up9qAfuZ8z9G8Eua7v3KYZDgrrS3",
  "key15": "4ZK7YrAnGVDi3UcTnrobp4JpMzqd6AHBZvNp57Dbu4AsMaDrVjDiuUVAEq8SVtRqvWY8kqvS2VGnVbsynyvWkHjj",
  "key16": "4i6WWAkQNy8rMtoSpPJtMCxq5rdb1tGPMQteW8KhAzKr8QxkFA13zzJZ2xY7Cv86RauS5qW2fsytZWEemKa62n4Q",
  "key17": "3U2i4Y1vWwMwqjMaBqyx13Nsf1dMmmMu32TYy8yMuH21CTz2PoudyAWjVfJsFCuZkHZEK8aPvwqWAnnw7ciLyNrV",
  "key18": "4KQh6fagnbu7rENpeEUB5MLhNw8uCRk6x1gDsDnyJoBmsLT284FcNb6pDF5CccpwXQWHzgmbSui5cWH8eJc3GZGu",
  "key19": "3DkG9S77aNdSKMqiDUW8SFj4VGDmhmYm8zgVr66JA7zbrd15BBKYSB9BoZq2TmENLmDZtB9AWGYB9B7aqDxhpVBk",
  "key20": "5nwroNs6t2x2UgfirA1xu8Stie6Nqus5mEEGyKxziEjhF2UmtGZmQWTDja5MDyc4k6Wrx5cEWZPqtFhuRjQ3Bmjh",
  "key21": "9AYzfTNHGp5qLjf9p995iGY2JUnMMq65CHDFZJDG7b13SwGrD4eUtDn6yFQioY1oRGNzBM1in21xHqL3713xZfz",
  "key22": "5yJJPMz9cPcv1r2JGWc4rNd8mgkWfraGV3BCmBQaifo7gJtwy9Xb9u2yTyVjWAknUN3qWU1VT8fykUcVA1pLY2ZG",
  "key23": "2ZFz2EiY1rncVcgY5YnnQE8eReuJbD3Tgd7L3k6EiEneSXegUCStg4FBXpZD2ik4dvA7ZHGQQ5bekfJWxQWqzBBg",
  "key24": "4VCUcu8aAAyDv6Mj5b9jM21zGgmmucQ15uVJQ3Douu6Jk6YqS353HuhwtBDTZbaRTNfQ4FtuxGnbJb1fWBz7QPwc",
  "key25": "EPGagywPJYiHDEQ4Y749Gu8WBwU46njWqKnGQAknBC57hqZynDLndPTaxQi1VYsb93VQ9qd7WKJQfj4oq6gsNTn",
  "key26": "hG39xZaQ829kT3upaoFPqWaKZ7ckEx3vk9fw4BZQoLdxwx68e7ZhPSoKDFnmNTNYQDtH1mfrEpkAzq9HhZAA2m4",
  "key27": "2pP9u44hHsVg7zb9hbaubXgnUHNZziTcBa71LkRVZ7T9AEbDhG68BivYrzaKL8k8CZA5Ww1iLtDu9kka5x1Kh3S9",
  "key28": "4D7PyCeGNDEXW6vPMqGA8HEWDDQ5MmMpWspcGoPAhPPZtMkELqiRqtvj5bejVa5EVoxVo5ZsrwEqTa5JxxsVM9M6",
  "key29": "3TVKVLghdAsf1PnrP2ki2kjx4cfoqbh4yGwwTch7LvMguspjQkNR9qJahutz6Ab6o65Dk99xtvTEauLLXoAfsjXb",
  "key30": "gpKnNTa2B3h6gtkP1egfAqj5in5ippsxJW9a1NsYuLFzwept8VECVRBB9eFACuKaTZHPYJW5mCCreEZTFxV4TUN",
  "key31": "3RNxusYg8hA55RirqTNK6pVMTdsB37TDSHbTc1DJhwRAmdskTQwzkgVhiDi5rLaNNpVyg9RPK6WGMhE239eYZGSQ",
  "key32": "dScMGmkrKNfPWoexy2XhUM4czmxb6uWg4DmhE1aNM5TfeWTUR2rUc7dwj8W6Zgs34N8wQ3whz4Ebr1dRiwZ8Vw4"
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
