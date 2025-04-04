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
    "36fWFUqskfFi7JscFateAdHYv6Z4YjzK68hRDCuvcWgRDmSpU3J2Cct4KW5kDCCvVnbPd5Lwj7ujRdQEmAJPk1oM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LCLKLoSr75gRCecWppia6uzruiK2gAyQSJvYnQDSowwFcTBH77YnNLYho4NtUpfFZeZx9iethqLoFpEZmK4Uper",
  "key1": "uuextchmUkpFFfZQVxFuFBfBQBh8T31K14zxYm7c7t7gn2mT9rCVvA432s2JGSGGzHKaYRhr7W2nRqmi4jxHbMM",
  "key2": "3m3XYjVsPmHB73nvVz5HTAR5gEY4GSF7eBXBtDfkAh45bz4x1dXcSsWtfmmRmfreQwwLyxKAgkcVyMj69ec6BJVj",
  "key3": "3uRNnQtpvkEpFMa9KqGXvhAbiQ4RrRvUQLYbPM7Tyk8efJKtUwgDP5QyB95yZ7jzh7aLWko1EySZdh8QELAUoZWJ",
  "key4": "4bMH21Er51M1nZkEk8DrNua7XAfoPy3bWP592vmaCtDYiR1fJhrgGWywYCWSbYEjxnU5CeqnESjT4dWEdZbLSvBH",
  "key5": "rg7FjY28ov6ced2pf1BfUb7H6jc1MA41bEC4H8fA8mNPYvaBtzfeAZAwasUe8Q5ZGYWzRpRvcJQpbM7hKw8w9VE",
  "key6": "3jgeDjzH9H2RPPMWK4txaSqtpJVPfENLnTH8MNhfCzokqAr5UH8jUBN7uNQ5KRLkNpUA1tpUMF6S6SuRQ1LpzmW5",
  "key7": "5hoh8CnBidhAGccvprbhYqukExrQaVjULzKcPRywetbxKV91c1ydXD7nKEJY8sYNaY8hDz6YuYdpRrzMrYgMxuq",
  "key8": "5vpPLVqRQunSBDSyrAKmxLxHQzzEAP7SH3zHCGtYwj3gBkviCVDBSacB5DgucDjVsK6r6S6cMHPSASXSskyHKWcv",
  "key9": "4oUY5Hua6macbBXs39V7E3vQogoQfkuRh9nm7DhgYnqL4dE2ygZCYAJpDVeE1QCMSAhqzDik3XRnNm5UqgwCqb8j",
  "key10": "36Y3saz2wNgHq99ZYk56VQuCodjCztnFbg8Vo8gjUXBPdvdHY2b3GRjecj1uRuyRtx41H93U6XYd1uMKVXY7gAhc",
  "key11": "5spsoSMqZ2sZsxksQFpoernFMfnsiLg4gzvGqWdiacdULuve5Zx6RRjCSaocELF8Qx3QJPXz4NS4EuaCywefcGQZ",
  "key12": "4Mhy96vFwPKMibpscGZJzY12CaWbWMNQszBunqvFSCe97Rc1qvaxc98AgPBZgYWXui4E4xUVM3Sz2MGarCCBv8PT",
  "key13": "4FELW93H8UgKKKHRdrvcT7LcDKfcs2MXN8JZhikipYWhJ9piCTTYsu8PKdaF9xyVPtchs5Q6vs8KM1HpT4AnqL91",
  "key14": "3LZT2NV2oRfgHkQRV6qxnjXGWdBLbeTDMuXKQbimwoxUx5jvTZxrEyYUB8XZZsoVQmSotbYHGQKnJyoz4E3Pe3Zh",
  "key15": "2gxtcPUUirjhxaennF3mPi9uxP4Wd9W2xkpsshATmG1LcwQBHGgoa85n3qJY7ApAe4Pv1jCFjvrtjRs1TcHuNFgm",
  "key16": "SVk7sNr2C9bTMfxE7eqadCZAEbWFtnyVbXX1L6S3wdqRFi9kVBc8vpmviA97in2kuaZ2aJ82T9ocveCDJXRo5Tj",
  "key17": "43aTWk1neMw2YEdUy9aiixvjsHaUbtBLYMzVcyoZRYHgh52cvzk2Fs3WrRvDTH2r1NSdzoCKqR3jTNDYzN32njtm",
  "key18": "4Bm5mur92hLoSuBr9ciKhvfjLxaz7KdQdGQQChN6sDDATaBSBkpZddho1iQj5yyN6wjc9cTL2JrYPpuZb33mCDoD",
  "key19": "5jsJfUjYb2uav8FSrNbNBNmGx4g6SFBRA51F4MDTXEGH1UGCcu9bVcja1PcZnvgVBcS8qmeUMHYDkp6B81qtWLkK",
  "key20": "271887bqLeyZ8rv8La9LFKaJzQo9GD6aVNgD7fWugHPNsHRVMrpKuatNTpZFxLdsFA5kuNP52m776ThwGtTfDFi7",
  "key21": "5UGFmYMoYxmkHa9fbqEqnENq8d2v1Uz4yCcygSTT6MpBLtWUGRdfsRUkbCGN1N848zEFNgvnjfss657mMKb2P6Fj",
  "key22": "5VHFsyJHTMz9yGJ7qvQTfsPLxXFw84VvmZayiVnraBVcrbjDszgjAH5QL2PZesDNSiiKuPNZynKCDYB3iADrgUif",
  "key23": "5jbzVV1bzevsLNgf8YGoopTNBfgCfZY6v1kHA1z9yKVaK8Rvfq8L8MDmifsHGE53DpsJBX8Fb7Bdmxn4FfoX45qT",
  "key24": "4zyHTkrjTqv1snfTftN9qNkit6ofoWDYhkUvu1BufuHGvxRiziLeNYE7E3bPQyN8ogQfHC3eGXXXQxpczSJrYqEu",
  "key25": "4jVZRzThWN11vWWyYY5mUQjneMcaVPLYYVKygCrLtBR6mMLXNbypJnJmZcaJH9cE6eRMKqNnEryHxFPFWJMYHdLF",
  "key26": "QDj9mNtknwrkY83UZKKrWBPys7oHYTxgDfwGiYcmy1smWRiHALnLk4EfHeGdSWQzHAaYMCnbSZzGzWeTf7m91u5",
  "key27": "4cLVqbiihS3jCWxho7uxftrGyTGYo5bjVd4UKNaq46WnU6Q6AQWXLLHJaQhgvRhgta7NxzLJXboTbzb3X9uaikHv",
  "key28": "5b1fjhb1ASUxCDbubd1WzrJjSdGUKe6DKDU5CQykeC3o2dq2zxEPtV6XmrwiYnPV3wo7zvijx5q8hoHCGjTytLqJ",
  "key29": "5iMLR4LA4VvyCfUpur87foNKMGm6cFzWxQ78rVmByxncNZGX87nnK8zxyZCdUGNvZBaQPPrqvcS9dgFyFHmV3ktt"
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
