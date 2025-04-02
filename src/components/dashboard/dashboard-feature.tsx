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
    "2bmWksDeqMgoxsbe77XkxyxVF1LeZYvHasBvocTCi4RxThfLC5f37aLKNR6ws8HHBWttem6QatnBUXs9Siq5TJF6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jmwn1pXetxetwUjTjWPtxHveCDEQS53UHMzpmzpWsHx9DWUPy41B3hTGQNSyWhzoyxWR3KvEMjz2FkJ7bH2TbmC",
  "key1": "43HBuwHMEo4dS7XjgB4ndWsGNbxzpWWuZExxfffLJ7S1dznDzgndKQWj6EirnYoqCgsZpNvkz5T4gmAxB4B4BnDh",
  "key2": "4Mgu1zxXY6k4PzTVnXtcRWNYRDUrmg3qtTCad3a89TiM955bvNH4MdZCv4aamtERiDon1DP799A7aai5mciaEBD2",
  "key3": "2SeXAw1GeEYmLEX6htDBpSBAwza7diSHikJKivwLcg5XUzcZ2GBPx7y3Ja62s6VAcVaqoEsXeBuDgGav8JuFN4mh",
  "key4": "UderQbuyGSvNnvZp12HzHgagHJhwc2MyHazzm7goiDTQK8TcY8s6doKAc9uM94bHQJLkrXAiFDgQwJmecuZxNCt",
  "key5": "23qocvEUKY5ea9T3LkXtKeivwjWUGfRRqR1oZiDPDcehwUdyzmDuAbjCmpoWgMoUUaoCzUePom7kvaSPLmTQ67hm",
  "key6": "5PhyV8cYmPkb1txDUuoogGEK8JBb8zYQufCMYJ4gsTW1eoMHBfDzCpA3osYjTKRTzQ5LJMxcNGAPbczURXa4pyig",
  "key7": "Uxu3juYCHy7gaf5Fk3V9Cy6EzaMJcXQWp9Kz4czthiAz4iqFkMfedvYzCcUL7tF2rVKkhwR4U47EDjr63pAZWNS",
  "key8": "6HTPo5yZ8TuFX9BD5FgdcMJSMzGJw4QoMzhAo6P7boqNeJaU3ftT1kLj4MRfRTtJ95sxLqceGSbtJbn8eneTbkZ",
  "key9": "2kvFPqRAxuqkuFsJQ8CXDC5NFaz21tgE6S3DNQ1t7yhZ8vq1JBSrF87MYJD1RE7tnpApMfzsA2budUPBx8otoBia",
  "key10": "4Gye6PpM3J9XEwhBSwo3WxmJaerb1NJo1K9tRkFNoCDc4GEpW2xYTRhhBEvkk7L9pB3PWm5oBPkjZe83bRenw5jj",
  "key11": "VzJ9TTui9WEieQZdPWGWmk6GM2B2hmEakN8DBUx4XSi6poKbK5WXvMPxVS5GnQJ9ngctnXyh5MdYoDFYPVdgoWy",
  "key12": "2EmY795CdDtrXmYJFTH8Lu4Rpw9jcgnVw6uvf7h5JM2ZHYEYkk3MJUgFSZPESg1wrX7LC596QKhfsZ73GY195YBu",
  "key13": "3XjKVR4boo3F8i3moUrvaUssScJZvQ9x97W8raV7qxMo1phN8pPwnd2sis74LejK4BZ1dVJKHch7jep7r6LQtxLW",
  "key14": "4iEpar5Nky5yxj7USvstbFJoNj36vnPAW3s45ZHvpenDeSPD7ZzN4yn3kRV9vgEapN32D3Xp3PPaUYruaP5TW1jF",
  "key15": "4gm8tae1oXMnsUQCQD3XJammrpHYX9mCrsE2GCpCXvVzpMRAMVTMJj5FZbRxPaR7iX4UTpxmeAHDXhYZYnAUJEvg",
  "key16": "jCA9Ygbr7kNCDybzXswMFpTyRhHmjYFK2nCaMZkeGyVsduVEcjnj17U3mUSD8HismVqpFse7KwRnAr7kjo4i6CX",
  "key17": "4pR9WAZ2bsmU81WzczpcmV13EyHAG4psoNbEbpLarxF2x81VaC9whamHzKnv7QrKHE1uU2CbQ7Wt8qh53goaPFpD",
  "key18": "4NHjt7sDdQyDiveHMCmYJMfjrGENxHDZfLtoLgCVjK1wCD6Qp66JG1rvpcMX1evg3NzTZABbktv2mUzDqiX2DqXC",
  "key19": "2xQtt2xvwtxNwUAaH1VNtCq7hd4w8e4YadtVWsvkLXQx7uKcxkbEmdJMme3mRXvSWkw6bFvr3GSj6H67H3d6epCy",
  "key20": "UaYUyPvv1YXguFFgiyHP7b6CHoQtDizUVyMea191FLTmFhTsKRPGP4kEFBgTagNhN45AfSxNX5guV73ygwu7Sre",
  "key21": "nbLucUdXT4sMEZvhEtdkEBcZLsQ9qByE9me524UFGNW1igKqX8covDkhWo3pKXLKLuJHmaDFHs4g7SxajRdo4ci",
  "key22": "4gB3EzbNs6qGZXyNjAYcbt4UhYCFoJpKCq8FsApm3adRy5XAzGuZ4agYYSm9k8LfRFdPc8AQUrYibLEcqYfwcFay",
  "key23": "3Fq6jrgMbAkbRmjSFTH4rZ9j1cHBGsbbAM98xZJegzK1Jy5YvfdSMxNDzXGZR8MBEz1aX3LZ9mLsUczD9mWtvPiF",
  "key24": "5Ked57FrFfckFRdnXSHfq8gdp1jadD2LpGnyh5XiLoZZvTCR6XANGpcBZWKBNLQGpef7EMmMHSHPFJQeuL8uBKEw",
  "key25": "2J9wwTWCQJ9Drk3AFyJkoyu6gWRG7SXyP1dFAa1SXPMk3QWs9WnuE7SaNdSRPGpc5sWDSXdz19aT4Cj4dHmUM16b",
  "key26": "4NaHkdmmhUj3kudJRjw97GKpFw92yip9aNLq8Xv78WSsBZ56wqxFNJBEDCDcqo9CPDWwKHzqW5m3p7BVCqodn8Ny",
  "key27": "5Exp8TcgXd9CchLbKcL38n5HgXCnzmMJQ84THLmtL63JoQ5jz3oKku9TbPhmM1TyZe2fZTmiKBQ7E23pC7NBZLVK",
  "key28": "3KPNq2WtRV7N37EZSHxkuo1FYRU2mQiHfSat5d19VZMkssznUYtEKmkXP2NemQciMFoqnP7jM7z4erTytgf8yrYJ",
  "key29": "2mBZEy7px6HQkXjfdhL1UQYTa9Tr64p4LkiQsqSE7pbsM8RtxucPEwe6d2C8dALsRh1bJFVc7FMrgfKUzqLTqBah",
  "key30": "srvcZuVH1vHECD7QVf9hapx3F6FrH66xPea3E8VLTbBg1mHLyMLyrrZyRTnxwp4AedT8CXD4G1udT3tmdvrfqJS",
  "key31": "4R5jNiPSbxHZoWT2dbHoJWBWC55XdncULwxUWQoMTfHLzZ3tFZQtGUy7iKuZm2WfCj7YiN7YJ6UUF7rRrQymXphJ",
  "key32": "4t4iD68XmKt6rBkDJ5EEtioXCPksrhM2EMnnnRjwN1st2rfGK9bgoErYQDqLBtxwmbPqJLi6Nhubzey7xTvMu3KB",
  "key33": "57KSEAuanvh665ww7CMkyrokFJyKh3jMmT9nhcjweeNh79JTrUJmwAikjjdhx5nAoiYtkW5nBKE95rzakeHCaJnK",
  "key34": "3HERUpJggDxmJzvKoGdpdT4w9tPDb1UUnRqR3aukqu6PHvhDZ7g2nBvmsNgEX2AzCezeEFNdJk4v7czvMbwXTu6T",
  "key35": "4kgiih88jTo2GV2Vq2qWuu25qMwkKPVxea7i6JaT4Qj2ZHeBR5Ptpjdm5fcWion7oQB99fxAW9VuXBpUKukfg3Tm",
  "key36": "3VX7Y4QwCfqkZtitDe1ag3gih8fTg2CPHBZAvLhPmYHzUy8UkVnmViUvzJNcmnmcYCyM9EWfRtPXz23u3PJvDrTj",
  "key37": "eifZvxGWNLEmXtF599dxau2PFYqJAwv8pmoDEWaqMmBBJoZ3746hNLJWoqnuRhB4FrJgJEYm4C9ALuo35puEoWK",
  "key38": "2YJRkUBgW3BQy74EkHpri7A2qaZJdWWXjvnVrwD1NE5BsFPixX2muAYmyARoD3fPiTNfKs8LETZQqGe1vzJ7Wq9A",
  "key39": "4fAVEPYikYJVzkHpSZz324qMosYA6GxeLgZFmHr9HTEWD9kCCtXqXbYeLjcwhN5DVFX5Axpystw8Ehi1834ahCag"
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
