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
    "qSYhNbJU89wp3GdUV6tsWjSbZ5vXf3PkgnmELzhu5umom964bNhHz4e96sefP1zBKJyKFcsEfJfagQM115uLJM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zNBqfMe7thoyvtxXrkXrJzhMYYfHRMdfVPNLE94atD7s4LRFzcgqcmdGoDTJbr1UBSTtQv5R955r4UEDzStPtRH",
  "key1": "24prxA9DbqLDCN1xX42BBBhJhEvrDeMBKchcVmw7Q18gRJU16CEwKSYcgdj93ztxBKYABaNEc2xRvsnvwG6TaBSp",
  "key2": "4wiY7yjZkTQQx9vBcMEX4uTEUqDhkyMoofJnTgj2HqMngC2NkYHDosVWBLo1kBrXo69ueUMSTHXbwNPPfnxz2cqN",
  "key3": "3RgVWPfmvbA4hWgG1ZnFp2xfg7dci3WcqcjyzEtfykdZhL1eTi2FLtFY8aNCb2rwjpGNb9b43AHopJNMVy5SdjWc",
  "key4": "yDyJRd5a6xTMzgmAnQs8AKeXvBfTTZX9LKkaj8Te8tiYPcwY7odLDEqtmPexzkVgUqZuRKBVVRac89359tst5kz",
  "key5": "2pGapCEm6fBKh3Zz1VMXU2qq4P4iGWMajr3zLjFBjRrQBydCTAS2jxng6KMKXqeE3QrJYLNnEJhqnpNJmLTF5yip",
  "key6": "3bdh7ch7p9GjenAXnxJnpBZdaK25W99D6SJJkaGVvAtWGRTCxcwhDtrCiWiYCW9tzatSiYpgsjMF5nSRMznDUFDF",
  "key7": "3DKY3omzYXUv3Q52jM3n9LG6JkZCxxVLgUDy1HpVygQ27krZZA6eB3SK2Ag19JsuasiJWKNFSdS2NsQTmxsZFspT",
  "key8": "oForQcSZ5Wbnuo3dXuzPBLWPfQKB9jaLBVr1JL5ZGzdJE14irqnpUmFeQSVBtv9k4bXnGzy92eQpNz7Sf1TWJmB",
  "key9": "56V8JRTmQn7FkCw26ikkajGrqE9iofyB1fhykenCVVqdzbzR2Dw5A1km5a25YaVMX1c8thMU9Rpc8iucydqaDEpQ",
  "key10": "3mwqNbqgPzBpnfNY95stqfm92isJeSgh9Stx63NMPYPUTXhaSRvR1EEqCs1wLXdLJiZgfDjX6YQtgA2fuZrWGtae",
  "key11": "2RY7Wiptssu8xWohLoVR6Exy9n4MZjFjGSF7wkMMJwyksiXmvsU5MGRhgYSdfkqJdGPKTfvukD1Nwkc81Yn9Gfhb",
  "key12": "2PM4V3pwDHSrRbunZb4BcPoMNF4qUVvo56RnQrLpMgNakKSwJBVRj29RKa7xEeoTFretm5CspSuTSQZG7d9wbm6U",
  "key13": "67YviJBWXh3qPz7qpUcNEGQic8dpEpnagiYQ7Ff1R6TDxHCo5wxqqNEohRwSLC38qzA5R2on2hfXgdsGG56BAFzN",
  "key14": "Gf5oN8veTatkKNNJBfuqEnue5Y7ovFrUB9mswSuU27kYRniYcjmWAK7Jy3qSGQdji4Uv3k21kfjbyYnEingirse",
  "key15": "v9gEqRQVjfaNA5rNqFXgKD9iFMfy49Uapi1mpFcbkLQnHCfKv6kEtaX4rLzZ821hEeDesRqHFPdWLMWXasW9oPF",
  "key16": "4nMgNCRj27B2JxoyckFCUTkUSES2uGu1ogxoecKEMVj8Zes5U3AyAgfU5NgStsSjPHtmArSCW6GGysHpKQBJWe9e",
  "key17": "35c2LBbNYR8VXUMkugMbMmhA7UPLEZPMsivnfSUDCWQHwpxzoEyCg3N6io54gtMRznhDYgLPM2TaF3xUEsZpJUjw",
  "key18": "5iJYyRngv4hj1UV5drPKdqJqZPLHNW9bzMbGRJN5JBYQnavESB4eEaNJGcQqWjAMAi5Gmm6aRoYjRtrgJ7hCv3Xq",
  "key19": "2hwrfARqtRbxJVPmcfNmD2ohzdd3eiooFpSiRS9TPKd2bFL2HjrJUCQBSLB6r8Po24Zgf5goGCUysoQ4JGsX1rRP",
  "key20": "5wtyZ4MQSmVUtrMNQaB1h1A13Yqqvqk7ry1WKJhJp8jypCkxLaKedFpnSunJozLJUNgMn5SLADrctE95Xe7DC96X",
  "key21": "2AvWbgnkzmC7byypsCVUrwNB3csVBkainMzG1D1xJSRuRyFQSCX1c3ZCTvApDAbiaPYLafPnEYaMiFLVuKZ1F6Q6",
  "key22": "3d3FAw2cziZxt1jTYFZZ6Sh7jzUFJCES85vrYoTMQ8Cijy1QymHyZkexra6Mf573uStoZ731XSt8iAxuQpbT5Q9Q",
  "key23": "3WRbs9QeLMDvJXoz5xbZW62fDT3dEKGz9jVdFeVczVHSUXcrGwdnDa9jw3YoGqx8dDRX671AzxMZwEdzscc6YrKW",
  "key24": "3kTZQG16Tvds6chv7Mc5CdsnRgpdWHK41PeKLZoetqttL6hUmRGF5dbLA6T29N22dgvVVtjF3usdnFn29Lxwjan1",
  "key25": "4z8BKLA7jHbRaGU9ZLNMupCpRns5c7nchBfcfGfBy5fS1sK6UtHZywxH5nHrDX6NDipHcnfYY1wbfHnJA2w2vFPR",
  "key26": "XQRMg7VXeHictcEte3XMKmUPkwu2v6gX5sczZyXdRts7jTQnotrGwyPWCdPuKhfxHbHFgkSp5YXUb6wzP8VcbT3",
  "key27": "qGvCvRAf3WuqkBZjaDiuwGx5DQQK1hMQEBiWh66BAyjFCL164FaHRLPjWbpoqk7pY46eFh5gqtNA9C5Qn3Y6rZe",
  "key28": "2smKcRYSgAdzmmeL5Tj9WP2G6tBZibj7Unowgbfs8uiwXH6fJvjohpASw7SCdM3WzZwQ12d2rKRRhfG69owV31JV",
  "key29": "5oJUhoWpaerjFszdxYFT3ksVF5yTV569RheNHTu5mAsjriZ4zjNm366FtuVkdeYrqEFtBbojJbzebuYF7P2GRdD6",
  "key30": "2uahv7AuzJQNZaYnRVFY3azxHqEJA2geWj9wwHB94NApfmvinrVYa8Gxq5wBCPLjFCXVaPhhxoSvCWzyiaSN7MB9",
  "key31": "JsTpVRwbjNRq6jYFFZGLeKuqjkQKBgU4SssvsXcHViBMi56Bt337T7Aip9KRzT9MjKRDAYqg4gVq9swYuEBUNjm",
  "key32": "3KkEq8JjeviS3uJ4Ss8He3EvsWJExw9M1KR3dpEz8tDQGNMHGDE6pZZVE88rXrvdEZZfDFGPWYNYAzSsFYhuXUvH",
  "key33": "3myo9nBiH6LeJTVtgxiyyfzDsgNUSnwPYyGJbtGBNwFnJNy7g6CBGtfnVsNogZrgQPy7NCvbfN8Dw2cjAaYznbCt",
  "key34": "4Xiqm2aSdp6GM3FPMP1K6DCdxnQMTgiFE5YV5wuavbrELxBrsz4ufZbZR3gFBudt29y69CtnPDAaGSpiYr1XJauE",
  "key35": "2BAtC2PMvevi7TdD5cTJUBsYirfvfD6KmRi5UgwgZ9iFHNKD9i42NxU8B368QYt2addnQ1e2BxLUuiJTNmxKPypS",
  "key36": "dRqK5U8rhJb9wXy7moZu1cikMJuQNwVXzf4nFbNU5GSQE2To29ZP9FfiG11gWAwxyW5dgfdeXjD73W787HbyuUT",
  "key37": "5eGpjA7kz8QTZFSRNxKbWgCBAW7ndrVi7NEsbS7944sw4esPvr1ZBmnDgWNCVV4yiJqPDJT3LEEeBZ9KaYy6ucSC"
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
