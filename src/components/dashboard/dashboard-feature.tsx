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
    "3g9WwPfsQJDxXcBc2vTfWB6sp98seVWAdfpstsJJvKSw4Li4cBhbjs4CJit5ZchgwjhTzeKtWHUUJvRK9E3Xof1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rBqTukCwz4ATQeQP5h8Uh4h7mwi2T1xcQBfeRpKmxFc1d94n1eu2zn1sbA7KGLws6zbmMsGnGFwUT34mUAWjzeS",
  "key1": "3QZELS8AtGLwyZgTWQFJuwqJf3bCkZdKp6yV5XHySYY4i5iTczELd1HbFemwxSWXaCS4jYNjVXmLfkTxx9a6FnMq",
  "key2": "5vG6ZEN35fxrmLu1TrcSCGTMzrAUrhiGPQRqkYyPXG7iE4yU2iSs9dxG55FZutNWQRUpMbLi5BcFq3pDCisQYXc7",
  "key3": "5aemJrf5CkivHcb7HiAGTMyoDWtYntbL7iCDUmWN7K1WaBUR2RMGUkcniSyfAwrcmgxkbqL3W2ZrcrYMiov9y7CD",
  "key4": "4HhsW8fXLMSKntYXqww2yXScmQFPyC3f43TkjeZTZhuSwhi22styBQwotrhxuuKcibMtxYdiLTM1FqPMkuHYkgVk",
  "key5": "4qqun9rvRjDCPuwvY9564tovYuQ7a9RFjFCjnJp75ngrho6zMPgboTr5B2SPqT69QrnfqBmovT4eEqPx4iFU9gGq",
  "key6": "4KFczkbRAaKi3gG95gmvUUT6c1Bxd67sB5DwjVkJF5ekdzdW3958kkHAHCUmbsrUujFKJ9bkNQ7QEjFtmTvWxF62",
  "key7": "3cjvbYSy8cVrwWLcSZVUfUzkBaiPUUXZ1PRHi9AR5f7jTdqvMrzxHkT6U6MqN1s8ve8fy4xJxBWeFtFiWLERnyrf",
  "key8": "247G6t8o4Dn8zUA226vVu7ikpZe839eMmEymhk4D1CykaXXMT6tkZ6wiAB7BS2SQAdVHNufwa9eqNPunuSEdhCca",
  "key9": "2LATJwFfyPVLtRz1iyB5g2pmTPDW2S5ZTDPx57RYzy6M9M6fFTsjBYGjqrS1fBYNHEybSSqUeKQH2TCME19JWhsV",
  "key10": "5fAPQ4MtZxuuEV6eAKo8viW5JNW86v5bRVeCMpNuk2xNb1fPA5w7vxFJ5yZcKiabFTweZmZC7VhAx9ubgHJT1P9z",
  "key11": "5YzY3KmtgEM7nNN43oPoDGxCNF9e3tscZjrxEUyn3XHa3Nvme1zfaXMoHZ6aB4Qmw3V5dZ1UQxBX7YoWvYk7i8S2",
  "key12": "5kfjkvWZshc5kMNxzghJK4bSA1pqxq31dtUgVzaPGNs2P7QHS7f3tEACPPtRy7Cm16bmmSDKiTBoRxpLvuTTjTCu",
  "key13": "3PWo8KTcztmBEeuhtQWqWEiDbcVAS7uifFHDqPXn3zBg7C9MKCbgFJcm1ztDYX6dQVmwgWpn6aZwA4MP12jgMnRb",
  "key14": "1UQxULLpVYhwHz3yhhKMSta8VngW7eEsCSYBz1wmHCMzyGcvguZLSTFkSPMnVnLkbjvLhTNudZYFjiocbDczCbe",
  "key15": "2eYn5p8rK2TYDeap3YgtYCQK6L7UD8BZetLnTCeakP4ygfgEyeVU7iNF2pwPbBYyK5dc9nxXgR99kKosz5ddmezY",
  "key16": "4iYsgV4LkipDSwT3nL88ccZxz8H3ztYbAcReXgXm5Nda2VHcFgmFvTcArinpLW2PDYU8KiJWyFMhqwKLMDsQQLAG",
  "key17": "5FhJDgB4YHNKXEA7RNoFj8p9Wuj8GpURuHS1K1aV2846tZoagso9LXuRrye57wTok23HFWBLefSuCFwYvzkHY5nx",
  "key18": "N4oB6mYTM9BF5rDYAbS9uUwBHf3qe8ZTeDZDSbfhCwXyE4VNNLwuVJQV47fHXCuUFVG6NbjAK4AJGChWVeg1A7p",
  "key19": "euBKxY4fo5QbV7f95FvneneSjwaX1U1PDmaXSCtT32zUdYdUd6kw2oBwy8F43Y1EP7sLYn9yFkZkuSNKQUsvZF6",
  "key20": "4cVw2Wap4gAbKxa3xHcVLAuPXXTv6o1uya9atzxDVXtQxiWKPFuDo3p34yJH6NibYQFr98ZphaRhbiGEUyRG3mqq",
  "key21": "5XwZL2XHYcCahfw9jTFPbBp2Swrtmbv27b1VKZuDhww13GHJb64zx5c9zpFGjbwh61fRAAfPn6ESE37DUYaEAjJK",
  "key22": "4QGYyKAqwjbcgRw24jsTRzaW6AFedKQmsyGZ3juC7Auwg5PmDQ7XszKGx3rf2cucV8S8vE43bKVaaRhnFBCpEU1h",
  "key23": "5whPCYhnzS5sZfVy4X6fhus9DJwjfAo4iGzRXnMH4V1NvFDmHaHdSCbCtwY8xdtRJcCH6b2MoC7JKVgNHrQGdE1b",
  "key24": "5UPDUvoPH7tZtfhZNZgph6ALpCWYiRZzAA3zGDDy4Ty9jLUtoWxzw17596fMGEdvTB6642aHLdSiJcY5pk316ALj",
  "key25": "2wgTsZ9pJUu9EBreN2R6p8FBrtSYZb4WkCr3LiAaLBaH9tgLmzTqCfCvtk1SJTDNjSQjPEjGyeqAkbgj92ADpJfF",
  "key26": "2xpNq5oc1x1mpckYTWqHaHRFDwGjS5t5BhUPYFKVhDstXJWC95mBu2TuVjwA8fLbANaRaSD5fGJ7vygcq7HtweQM",
  "key27": "4MWZfAhPJc7kjQH6SWHr9FoPZTiRGtcTtuLJyQ8kXLKTvgWS9botEmKMXmSDe8SfnisQXJDNJJFrNdoDkX74HJ2",
  "key28": "4GX3fTuxVbJ4Njvo3DtW2Lv1V9rUqoQVpgeME8L7ZecY3xvgDnSTi66JgY5kRNUMCUHxCm1w9aV91buLbPnX49YT"
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
