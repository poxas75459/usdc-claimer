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
    "3hBcpzcVxg9gPo51ujDm1pecBPtYyAdaPt6JwfE86AmjsjjBEzL46dYjYHXoiPfpKUe8G5ViSWA5pjop5N4FkzyM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AhESrcjUTHDQYTa88nhoZgCAMsELBWVSFP6HaQTVFm2i435SZPQKzWPZ9aVPGagWRj2sj88s97fNd2N4E5tpbAu",
  "key1": "3rdGHK5nrHwutSFfxQMNPZREJ5npC9BUnM555VARLRxFyiYj86CTGf7qa2VvH3DhSGVb3Sux3KwQ26ZvoGoz58mA",
  "key2": "5i4ZPZxvuNwQtcHLQ99za5xB6f6JEih1ESyVymWDPnktUyXBam8Ko2hg4Bre4BjqsvK3cBNwT11sQa48FWVwEVw5",
  "key3": "4WVR9YRowxZjFV8BdeTCTbvNt3ZL6HKNQZtsdamFuS73H19DV26MYtwnp5z431X2KmGRiwTNQGpzUoGkGiPbCdXr",
  "key4": "4gubSqn1QZiBsvWHr8jNWCB3qjV2NuAgaQ7fMkVbk6WpBZpfDqxeLKrjnFdUpq4kzDiJhwthUs5FQUt1fpWatbpg",
  "key5": "443uPs3Xwy6YMnBf1kVn15hb81WD1igUY1Ani4n27s6QhtVZd7YGfrUbcx8uiLantU1v5uaLpvMMKbMz3xZQ5N6D",
  "key6": "3Qo4Uyf9yYYs9BnmKrVcLus7KQGBEm1abHdtMkxKVB6Wrgd3hzGHrQh8bp9wRAWkDRNvPfScE34T9LC11nwxVBKK",
  "key7": "64egmnYnLCcfEpRQzCR24d4cx3KzstU3qSgR75xv7D2cyKvWQvGcifdKQTQfEpnFkJrG6dfbybDoEM5MY6KUGHP3",
  "key8": "3t3YFjPwf4vAu89s14hHaYQhudtf39ZXvdwG1ibAs5tUjrSAYoibSLZHW8EJdQ3x968cFZ1Y1dEdHKJktDCW4ynP",
  "key9": "5s4tJcLdDKqzA4rD5bYCgseubvt2XgBs4SJcAQAnwDmGdv4SrMBCmJRknn8qGFURWkUmrP8HWnj4kwyrqAVTADf3",
  "key10": "38mXXeY5UqjvMe8iAbBVk7tD126YfbofD29B8VqLzDN1hfTstV4nnYBfwkoJudSjSaFs7x3dt848NVhZZcydPLY3",
  "key11": "4HNq3mX5hAvdS1FEKW2SK4jSVJjS6KhCv3jHXwDu5r8SEAcwxzpEdYNB72HVFSsi8HGEGjXjmfkAZWZg1be1rYqy",
  "key12": "5vcZ3kgA7EMtW2LNMcBamVuAkuT5fvZt83B5EPGKCd22uk9Zwjh8z2raYqn8w5MfmyL9y2SMhgpcdZGQYCcUDya",
  "key13": "5eDvyop24RH1SHWna7pNMcKZTGgq2EoMJ7Y7aN1oUjLw42V3fZ8cc9bMQiDsp6Ny7A2bVigaHedkiApKw4etGab7",
  "key14": "5sVu2427yyFyQs6hNF6eiZNpJ5PhL5h7ucjdcGcymWdUZ9rTHHodtSyLzCYY9DqwV4v4XAZy8cXywZ95zuP729ks",
  "key15": "46j5WiFf6avHwpUiWN7n96MRiXaVRktWEAhg4rEnz2k5633PRM8ng7u4w7mXrUMdYx5cx71zL7uZ4zRXcZw6ihdV",
  "key16": "3bqgBk7tXX7kHA5ePVFFf8nFndFx1BTYV4QHf56gTYioHcxX9f1Bn68BZxJFdX17C86gxQQd4xv9pazpaGFQSnCy",
  "key17": "2yrQdrhYXH83N83qneNpNCD5m7T4wLMBN6GMK3hAk7KHBEfchMcojZSrHvsmwN5gsKup7mLHwoiRsQQJ4qv2gsE3",
  "key18": "3UwJLgjEsnGhgPN5DDaHfmDiM1aPdQJ2Dw2TxKSM8bHue5PFuJrx2Ud9Vk1ZY2uoxrUBSB9EU3iJAefdXgXRZxSQ",
  "key19": "2RPGZJEhGUQyT5qa4NVNNinMt9xnm2cAnTjYyhN3xPJiYeSPcSiFmCTffSYQfFpFFtJ2bK5RzmhF1uJd5bzCTvXU",
  "key20": "2EvtQoCLiPreHZHHtHVEPq9DGd9J9d4qFwtk2EcU1nYWqQU1QbKey9BpcyKFSf4mNBruWQtqgKFC4qpfQ1dpvBv5",
  "key21": "2Bvxrx6zZQt3kvxyHsnqR19FJ9tGspNLDL5hc7VBcXUVczxpwYzpuDqMf4bBYYBAQCPtJVw97k4mpQca4DNrMViZ",
  "key22": "5GmLUuASP1uX9WuFutywGNDdfHPBHmi5AFtq6d8KgkHxSEvNPsEHu583dbrsgGXSYWvjq9mgdaBMFDaPrZCz7jHE",
  "key23": "3sJs8hJJAnzrytEsVmiWBBmu681h3nRRAHvexExsQcwJoae6y6gvgq66wYtfjmWzJ2fCWRNiryL43hJQY6giu6Ej",
  "key24": "3YWPtxChSq8LD1txoCvYS2gtAxDfHPNZmHczEzXbUBviXGy3dzG9C3ggAtp2oMtkeGBYfbgT9E3xCHjZVGM2xbD8",
  "key25": "5t715VYYejXRG61ksguPZBZfhru6j3a8DL45wFG57yWMvmmfzgE9ZiVnVb2tuC5Ew5JpkxGBrZfyfyr4Dukr8yJr",
  "key26": "ecAhGa83xAd3CjgcudoMzqfmxzQh8ugnphWF5crCx1btn9yxbA4mFLcZcdjKpR21mwbmgDcuPTLWERmEwHPzhkS",
  "key27": "4CFvY74c8szfZLubcCk3SUWgEFraqsAeKcfuhLrZvpQGPK3qEN2UdLrvFA2BFStT8THUkaW7XLSKhNtCJwBUhgdQ",
  "key28": "2eXgJvrnFWcoWeUZai9zVjuDyrww5qMoB5XEtjJL4YhHEQSYQPdPKwe8AENiJVF1VrpT7KxNzrggUDhKbz1HU3qw",
  "key29": "TbFL3ATxFFbgp17T4763pctSj2wkp1d9hqW6zicJbrurAV82ymHGYx9w55Eudxy1pbDq1RTdHysTVV9jq3R26P3",
  "key30": "GpAVL3mqagWPLzQ9kweVcatgnpMNs8ZdByCjywDuJb5ij5XQhJo3uTR8UNraqKYLUnXggofoqqDpRkLH8PykHpa",
  "key31": "3CxNDKj3vSSJRJBoM22rLw4oqbcgUmuUtsbRURnPWq5TfR6DjeYcJFqMsBDrck4PMCSMzHpGMJnDfbxVSVcoHmRp",
  "key32": "QQcQNk6jbfAsmnGTf8pmvChcstDJir9aKSxsMBbLYCk3HaRRcyYDoQcJQCKcaUoZQYfMTNKmxEM3xWwDu4EoMrt",
  "key33": "3vADEBGTUDGtjRF76BHhxeziBfb53RV1nehvvvbz3rV9vS1ydwHFcoL6JYzPwTM7J5hoPdmjvGtY95cF8sH8t7E",
  "key34": "3tQsHSLQZTFCJ2Vq7GhMd39jAeYhZBrJw2PpGeAkXonyCHC92nUM4rZBPM8TcposERo8yAhtLwbjdJXKrozztwVa"
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
