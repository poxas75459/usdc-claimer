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
    "3n3tVhWMdHZCYYAhWFTjTetK2mssKHXquSkYfRwdWjRPgBGo5xZKYNCDhtdQsB2iB3XPhKY7k8VCjYeeGRb8KVYr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ccGweQgGShsYX7KVzfAyCMHvb7AZHiiyV5ZhqNHBriQhTtmQtBBvEwWrTyLEzqFR5yW8atmzg4gfVCNVDWx3KUH",
  "key1": "4oTxNANT9fQyBFTwUyMumBaxJ9KcT2QqLDVk7FieBBoCj4MEevqzuyLvSBvRCajRupwigXN18mQfXaMvQedW5ijj",
  "key2": "LFvCeYhvgrwews72pMUM1S5zi4ZPKvBZZ9RKsBhg6yMrdeeDGpKt8UmxupkxhvQoWg4LH8XGiGYnhs2azwF3WSR",
  "key3": "32g6FMuRejBA8ackvoK1oq5vTiFz6QZvKNpJVaAYWUqXgQtcgekxLe3oVo2zM9PFVzUu6eNmkxGrWAfhSFvbNk2s",
  "key4": "481jzzfYXSe5RsAVCZBH8WxL1psWDqBUPYjK3zwwAUc6igPURD6SfeCT2rRkownob8c6HDQR78kUfAdXRsKG3Vx5",
  "key5": "3CEbLKrST5vRfunKNPPdgGQMvmqWPD8HZAvXZdpD2irRcXusT1NfpyewQ3iU3GNjX91GzMkYJNzR1NK2vY4rVcA",
  "key6": "4ouTZdMfNh5arfQjfwEdo6VHHWBkrbipngtpLq8HnUoGC32jhqsK8HRQVQVZpEqjzJHxTadhm7QgmdjRyHMkHthg",
  "key7": "3tJJBjRiVE7XPHFB1oViih6SSWcrjRmEsHdWuAfBDcwrkPdq8tvwvbywsk6DsmH764APJBSXhmM6exj5Nu85ckbj",
  "key8": "XdvypixMnNSQpNjoDyz53LnimcuPYjPbEwiTTiiXsfPAx1dbyq29HCCVY4R4w1pNUCPaeW62yN18iSzjMD7N9V4",
  "key9": "5MbTgiWSmXzyGqQNKgvSEGHG9iP4mV9HLb7cCfdtZ8Wazodt4ziqiywifPBQtNxZeCF77kcmkrjAdN7qrHoQVSKu",
  "key10": "35Qhsq9FUyGhQRf23jfNwDxqERsJc978f4UUUQsty18pnjP14pAHVrksyszPH3WetnrtfxFQ8kyx9uxHjRtYJkmP",
  "key11": "7PGR6TMYb4ndqfsSXwmPpkJr56irEQcTwgyQTrWw5mMuwhTSEqCdBXa3ixHPbiXFPBK8r4stQ3ymwgqvZbu2oEt",
  "key12": "3gz4meAHsuZ1RceBjcmp4Pmg2ynzTmwEg7oZA3GimwYgNmturjHZJ9Kz1AKAQyXzFsYzQdHxTGH8v5H133ySfuHY",
  "key13": "3cuSUkYqU2LxetqUq7Sh4VVcKhBB5fjHK43Bs64CZGNJuxb8kWJHRpMdn9PyGnKbyq3K4SuEppLtWSyKPMqUTuMF",
  "key14": "HZN8fusYZyF8HyBKc7oLaHaXNPcoM9H5YPEd1wVBYS91dg79XLKRvyVaSdwWZFNHEGbWeUR45K7yN3yZfFDE3Pt",
  "key15": "4hvkyX2xXe7RGurU7KZQH24FYnL2sbS2wV1WiFMmnsr1b215Uwj1c6jPjvyEbovTFUSzZciNXCmQi145WetwXGY6",
  "key16": "46SetC98mtvBk3CcXbaMhWLCMtoB9tKiSuSb4ZvaK2JTyMqeKVXFFCvRjwk2BXDPFWQCk6oLmGgLCBPHEx3uSc9m",
  "key17": "5J15DHkq3JfVftgcTbKsZ4GJVaQDZhtnF87wkCzYLz39HEYxixkzDK7qSXccKHfPWvmRSu83o1zTuybvNoH9BK7S",
  "key18": "3qQM8cALmHtWajwypeZUX3FpVVc3QE786kLd1T8Hsivd6AfEmahkypnrooVuGzPW3jxYeZHQeF8rGzCoEeotN8E3",
  "key19": "3VtDfY3dbduagFuR24YcEV37FUYxgm6DUjFFGzretXdPepeA4GUm1RR1HRkQemQ83JhG7qKcpCtuR4MKA9U4L76a",
  "key20": "4tJH9ZpEeD1uHp5nmWYKKU2oFUv4b3nf35sNmeKPae6PHgVR64wFWWw4bGqKHjSgCo7c6r5SRPGbUY7JHjPS1Zby",
  "key21": "4qkj7MmH6nxnqDufp8y4wFs4Q4LkRz2EdpF4tM3Rky3aLo61BVUs17LbApDgb1xbvLSF4d9dQhiLtry55DftTy2h",
  "key22": "4cgajejcy3cer1rsj4Bfp7YQCnri3t3TM5Xrq88pCDQBgpwDrffnJ7teSuJhu7dd35DU6p7qUqFcSQohao9rPF57",
  "key23": "2czgNpcYZ2hpiZFXf979zhiyCxT5fH2vYqy4HxTW41bg1oA1mVsSbrZhJQTBgDUEzAWZHXcaAwJtgyvsMQJwbbSM",
  "key24": "54PBoQGch8xgDXUiRunTNAjMH5dHxNS9VTqG7dvycjafYqSW3ZQFZf2FGEZoZn8RpraM51Jghe523iDF9tdg1YGx",
  "key25": "4FHaywy421cANyBZN9jKJAWS9EAHz6ioHyhEPn7RxLsYhcm6UtbU3V4ByoLGwY1M8TeEEMsgsByfJJBqiXtGE2Tf",
  "key26": "bnvLX45DRJfJY8HbpMmfoNU3a5f4XKHhGKMkqwzam1gBMByCNMazcpgZNdGnfsb3FiWj88UTp2AYAWLtffHJEKD",
  "key27": "Yehvt45g458GVVaaTKiW6EjyFbEHQ7fNBaHfMSK3a2gVUoxAQQ4ZaFv5fHZgMShdMcg2Pquou1yPEx2SSEHv1BR",
  "key28": "zNvJM5C5TKBC5AUUnEA5mjfkfZdXz6mAz236SZY8WxUPQ45NbMgb3LSBpPRryzG51kds21F5MSD1bSs76Wo9gst",
  "key29": "2rWFnNjoRECW4nWd48PfmU31GFZ33Tjsdg8FGKrpTNYKMR4hXyXKkNjr4YogqPKeZf785V8UTAuRS8ZHhiXKj48z",
  "key30": "2s9LbocQkLkvGExUGZiRSmeqw9Neu3mjGKZvqhDvCiTegJQbsRL6g9LcjBoRBMHjFfqENFYebCXPFs1Zju5P3w8r",
  "key31": "3YBSZ2feXrVDtAJeP1SUHQxccJTYt2Gjgyo3aP695krJ6M88krF5X8msBVLmnrjQKFDJyNsDsNjJbZSRWDCKLoei",
  "key32": "HdD7bhvNJQ1o3CEBy98nHMZ9HCuX8KNVorAGuLMwCGtZhpF4jkLP3e38tJMMebVztrAqmDdMdHJF85WkxsUfDLT",
  "key33": "4aT673zxndCr3DKiht7tNmGVSjB1vrvBUmHrmpgeBmDN5ZW25xbnhqEioV6VHZF15FGyspoNu4WgWzH6i8NhkyiK",
  "key34": "3QFfEhWUHaqpSime4FdPAiUuaMjLAa3J8sBvGbi1Uc3tdQiuQpeRRkLzkUznnADVzqsMKZTfSvbKDJt7K8bQq1bo",
  "key35": "4CD2saK42PbNgmRABtfYcD1iVt13T19hvkuaN7qJhh2Zxouhiwzo9fvcSZSiU5h1p1VM1PaCNts1LnvVEW2dNna4",
  "key36": "4FrStGTHKvE4mvHZBZcSz7sht3guLPJKV5yBu4UNsT9YdzcVM3s3Tt3UuNXmgPV7EqHHPfSbca7gfwaRWDWCRHou",
  "key37": "648QpdNkRNW55dyxUTc5ryCU4LAgmFireLjVsfNqU1YpjV1MvSavHk2dkx6GDWi4cqmBYc9PrwGYnCsHGEdYSLTY",
  "key38": "2QG2i7xdqwCSdVkc32WbKmmoxsvgz9YPxQt4r8BZ4pSAtSy5465Z8GDDbQwTWJcnxRk1mZT62pysba7wjHinz24J",
  "key39": "5n43ocpANRgE2shAY2Ggv6G5N5nEM7nPzxJY3veguea9Nc81ForEZLZ8EnVat6mN6nwh2P9hQbR1kSWQq3VPUr75"
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
