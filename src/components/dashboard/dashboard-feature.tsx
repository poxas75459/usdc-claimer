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
    "24wUN3WFqMk6Chrqq2QQahCzyYGr7nHMThrBa6XXMRKbUEnVYdUZdDL5FA6wkoV2zSV6pAKJBZTXkEddw6Zf4yNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NUCaoLxUb5Y1Wy66xJkQzXTprSSFhWsxrBK6QPd9e8MZwnK6FfkSws7v6vxXi3FSndCxPtd1L59Yd458nDA8twJ",
  "key1": "3TXL46gx7uPBQNGDcDM9bXuQjGTprnE7LAkPBQoyg1iwJiHy7D4HN4s2mv8tMvysn2EQSp5aKufDJCVqbtpMGWSg",
  "key2": "5wuVWfNqsWdN99XX77abcJcgezqFKjAbNio6kE9YvsjnBH4bUjyabK6SDjqCvsGpUb6EKWSMojvaqZtkNp22Jecr",
  "key3": "3qBMQdsb5RKFdD9DeokqMV7ZRiX4CtwabuoVxqwG1hgxCTPswzvhT5VPU7g62LCtM2o1mjoA52CV9gCaDFh9AgDa",
  "key4": "3EtxwovyWb8YEktx2oJx3s5BS4AxdFdfZL8oh576Vn99NrMme8C4KDQHP2us5JMca7JrP6XLZKNTLQ2AuV4JPAjz",
  "key5": "5qQARxfy22FpNGVXqXvhxp2SVsosjEit5w4qdUH9gD4R9d3hJSKXmDyrvUaMsfebHBcqnpwX4uo6f5WfX2xNo4kU",
  "key6": "5jDd5mVuXMGXdXmEXrKchg49t8Bxz51iM4FUyFszpJhkfEFTioBDa5SoJFLsZvjahZrWCMR8rFvM9bd9skKxBHRa",
  "key7": "dxcmfLZfEMtB196fKViKYPHMsp7hM5ZYv2ykBTyCQ5ixvVKTncEQZR7KHNHLSGBVwPbVH8SchSqqGgwSDCmoxUa",
  "key8": "NTTJr3HBK6TS52RD223UTdShJap3LsAESwBWQGvVnv4hLiJz6R7qr9CRuvDgcqk8FFYWBo31zLdSLqciPrnVwvw",
  "key9": "2UN6P3rZtcG8BtYDa1R8V1LcjxjpSq9QQFA1bnHeg1UHQuBbHzsyrfzTgcrQMDbkrJoBuCbEK8uTbK8zLgENpbDB",
  "key10": "R72qKTAJEMYiZysfywEYhkQ4ZQqDkBeoqCUeTsanFr57cGmjdVf2Nis3pZHp9EtFKoWWced5LKcoHxQwJfLPLH7",
  "key11": "2cHR3JFhAxgwzHgDxTpajwNFZpHyoRjNj1ZLcWeLjMbGHzPGs1j79W1TiPG92F6243JHU7sh51U2Dpx6nh1reUkk",
  "key12": "5es2ixMho3znzZx1XrCY6T1PJGBmHwz7uZuy7S2mRGinPhdxFYAiJRfvFQhhhTrx2sdMm4Er8N9Ri9GuT48kheww",
  "key13": "3mr2nzwJ5MhTsfVy4fTdztAXDio4hfaGreQkxCDp8HNXcfU1TtsXpufxEayi4XYJ568frHMXHAYhmBhriarWyicK",
  "key14": "2odWoSx8wRDtwG1zDLeie1jjpDmehvjUC49K2wrop4VvMEEfFybo7HkT1EzNVKfJCDrwjvL1iCzZGZHXPnkEyC6G",
  "key15": "3hD9SUiqGhsdSePuBL13NSRdBx6BahRL5ywGa8eWjmk7YE3wyRNwYHyvUjPWJ4i1fkUdgn3kwM3NmsJuG1vtmcmP",
  "key16": "soCwRXeXscwUv8R117Y7N8X91wmdTCKo71n9iFQo8DydKPqYnff3NyrjPCfSkrEKQDjocbUqF8Mjv2TUaPHkrWi",
  "key17": "b2skkKguUWnisahv6m3pfyWHo3ZmDEy4xFJQupdr94Vmz9H7vuUep9WzaW4NXHs7pacZHLgAmo3vW76f5z2QibG",
  "key18": "354kfFbcQZcQ9EfjCfGvuDZgZDVW6vL6mCbH97S4BQtPR9r3bdGM1e5MXMzr7aX4J33WZ7zZ7WADgEufBnzAaPoG",
  "key19": "4bE28wunUHsRvYkZb5dKgSUu3aQSrzzUxb6nXT2Ag5W9kBc4YkLxrE7M4vx8sWfnh6imL46ebT5ZXeun4yPjKRPH",
  "key20": "mp7b1oV4ghA3KDnwsqafTyVHaNFTmCSEZgjdT8k8jMv8fti4qQDrgE9xaXeYA8xHDy3i7YiMKWj7Hkd7YJ3Hyh9",
  "key21": "3J3bgeXs1CsGUUDLePjfaGmPL9SP9pcpfgW1Cy5sjLZuiLwn8u2SdjDEtCvrMQ35bDUFDgKvRjY2ah6Q1pCKXnLH",
  "key22": "2keryyi14aWJAVZJ6J1wXJa8uibvMnuMAfmjqPfnj5TPaCob6cBFGpQQsxsckNLxht6szc6Db63hXfxDJDziD4BP",
  "key23": "3xphSjtUPrk57WwARfhmyKcS5MT9ktgRP5yBfWTp4jsAPCDQ26cdYirWKDMubpNuxMRbZCd3y3KLr8xzbJ7c3MvS",
  "key24": "5QWuCPhuhfCZ2oTVFFNCUXtEjP4qmXkhA9jsXh3nNz5ScmfENUENGfVFL4EUuM3KkzNLzR3vUerz9vFWTtWLpWLk",
  "key25": "5rfERsbBcaguDWnPGGKqPkaatNgCh5k54e7YLaDXonHmNSRn7A8SyasTuziS43aangsdrgbPB8KnnhiBq3hoEpqt",
  "key26": "3NkeJc86tUxkKcE6pXt3ed4NmZnbeVyTbryk7QFkCE75y2D3cuweK353Tm5ELdqj3zL2RB1vQSTmDR8pL314bFcB",
  "key27": "2CPHV7ZFLR3e1RK2NiuatLks9aVSDe3f3gnTmsgaBJAHS42ZvksfpvdztdcqxsWeH4sdngw9cjKaGdJGfx6v1Sis",
  "key28": "3vNhWPVnyvCDtcSpYhRD2NhxChduSq5w2xVvbdQibJEt41aiJWaZ6BN5kRDrFCd6KPq3YLuNU4T4C29jNJFWyiuz",
  "key29": "xTbgQKBcN98c6ZTxBNSBYtYywyeuCxMsy4JwX5kz5NKD8KYbixBnegJBL1s7SRMqBUeyEtR5YzdbjdPrnK7YkTD",
  "key30": "WYqaj9CjudkB5nitbnSb5we1kSC1m1Nss1PLJCvbYQTsSq24jCyqUMA7JYAewEkV6evRb33vibnXPGxrpYvJEbL",
  "key31": "22JuUDTzHzUHwgB98TVmJh6xqPDwTu4EGNQ9kLjMvFPYukgnHrAxhi7dfe8WPK3E87bwsb2FAdf5GxDYDnDJm84D",
  "key32": "3aWeTnL7fk7sbQECjzgfgKqCFPWTaigjWxWaXgMTQfgbYCz1jv6Vrs5EwYpqPMHU2uw7Mi72jbvmkrurMJueay3C",
  "key33": "2PT5o2hAyXJqBJndKehpDvBfouQ7if3xtn6shDADcJ8vbhYAgkt4jG64qW9Wep81mBLD2cC1yo81XipduToaHJPn",
  "key34": "5VDuxjJd3S3LRRa3QK5YZK32FNR5GX6o1tNZscUpH49kRJQi2vDMDHUxhMDLPpeuxNL11dNyUQL5zXtf5ZaTi8dc",
  "key35": "3uWAhrToRDCPNwXDdxVLqzuGzvQJ266UTeyu6DZG66jfYUPUuFgM78sthERkvmqnMyHNbQJLG85HXeRaWmA9mC1G",
  "key36": "5cPaeSiNHWEdJFr6qwquNGXFHhnQHVKtuMeqMVdtWiCfwA61LLNYYwSHJLsE5WnV1gwQrdLmd49nQSqosvWrNk7u",
  "key37": "AHdzvQoaxPx3wUEbCySXsbY2emL7RcUGaxvRc5qfHjsj7saY6zGzToRVfeFZUvPCcuvY2zBaRSmFnFJ6PY1j2q7",
  "key38": "5AVxY7uFvbp3uk1LJfYLHzeqtLocFYmt4ae6GZKbFZGmMbXZXXzQ6yriLgRg23YZz4wKsiaUFX6qnT7RCeFAz9pE",
  "key39": "2J3KNDJZuHpwsN4N4Wi1CXKhEwGsGf8iwnLsC4KGwQsqJKUZRXfNof5Qh4RA7uV1LP8CvYjHdraqPK9nmNoZqwwo",
  "key40": "5W7zb4xcRiSCaRdCcfKHngGtsFBNst3gQY7zV9BNeiLrFrdyqDynCuhKPJNsYB3M2uDoJqMYD4gyR1PKUC1XYRiZ",
  "key41": "wDKXaPYkrzFbDbA2G5yDgARLaSMfkb41osYFL1x3tmduzQWKE2mh6M2oHHJ9zMieZekroTZoRHbQCmHHRGbES8R",
  "key42": "Jjpc4UM3kgzbvTzVVC6vBGMiqZg3pgx2ZWTjKVaqoZFeHSMX6T9Fg3HFcYg63hjEDAFkhpTuuoDysFbGy3UJA6r",
  "key43": "wD6bH8Hki9pN7aDvou1pT4TKczwJn5oq9LqYXcdWWpzw6s4NJAKCfdW9zE46bnKru2FKZJJcmm2G2KWkgFi9eKy",
  "key44": "4gTxtLCTjLuctqFNbGW3i2VeCR9r1ZH3sEAcGxHStQBsLyNMGJLvtM3avHqCFwYJSbhQvvrKiBgRme8vpxjJG6y7",
  "key45": "2LN9T4TwrM77tUAJBSFKY2d4guAadF5qnchZryxzjh8KJL5XRzThzFzR6uB8xhBTN3MwHGNXcjK1eWnBrJw8wyQ",
  "key46": "4wHbatdaGJWRrmTKAYHFchSnWquMXSaWLNSQEDULx5pymEWUNnKgAsZUaSEVmUDoozwucaqTz7uzjyepecEYXsTv",
  "key47": "4zmYvFtSLXPUGZZEqyeejZgy7UunoD5JP32DTu5WHZuQch1QvQiNv2XMYiVQ9nHWQt8eKUMvuPVQm9ZYXtAsAaNW",
  "key48": "2uRkaiajBAGp5Zd4eW7wFd1pbTYABwsQrrt2vf4DAGBXvfmikqa8mrhiQTSeiFTYcfVsaDNhSQnX8uZD3vQ6imPC"
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
