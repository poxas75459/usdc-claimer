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
    "3D5yCJmZDpt8CHHH18WVK8kYrFTi8JKFqJ69GuRPkZKvLN6oiG9GcdXq3eVaCKJdQn3myAr9VpSoV3jppiGv1XGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hcnDeYbQB82cQmaYnPAJXKcC26VpRJHY3ecAbdC9hzUEiYXV2dp6DQxFMARUa2ys43hmqrczPeN5i3byfzinY8S",
  "key1": "4dQfoPaWHHmJGhJR54Sp4SzTWoENoByDYMzEfHYjqC8CJjFLDf38TGQ95SsTrkCz7jJ9BGnFFMAsfetKCBRzGxmj",
  "key2": "5DeBGXpRsKZRZKayE3jsG5Redusyrvsf3kghEUh8QJYMs8Sqbytrekx3P2Nx4HZemMr7Ub5Q4U7pXszwuQScEaMY",
  "key3": "2XcgAFKwRt2v3gjg2zDfn6FRysSr4yRTQ6f6AxhMzdPpZtsqMFNCwrYxkgjA7BBjFRiEqgcBUBo8mWMStMCgquuF",
  "key4": "5ooak4XrCTv1WYaEor2o9oiUJLodXqbfL4tJhYmgfRQhkEwCTo9fMk26e6QKbduAcEApM8wK1nMK8u6zn4UiJ9cy",
  "key5": "3dKA6hgvuQ8qshuYz7L5PMrTVjVgzbu5nVyQMgzMHrJxN6GYJBXhkYMbifFxvMuYHzEWXEkgZF93xUCyXrd1PUJb",
  "key6": "21keYVtp9k5iEfitVaWh9BjZ2hKRxW7HmKreNfPA7pqpTPM4SPitKa9Cb8h4eRVZbpJTGMH76yAKwMTbaVGM89cY",
  "key7": "qQEoHycPSG3vvgwhdmNzHzYkGjEb2ayugHsx5jMBqsC6FVRgLAmzXnEzzVhbAQWLgcJd8YPDXKRAemu9sxUjrHw",
  "key8": "5mKbuHZcze3ARcygzm98WXeqhb2juxwhBpbWfptQAdPGR6E4XSgnppiHyACZzz5kzhDKUezTmFE23PvMhGVdJHjX",
  "key9": "2sgXAbkvN8dM4nfJbAzvcaFgsPXzkc6cxNd4LkNRbB3Ydu6YzQp3mm3RR2tJgZk2TTq7v8U5LTJsKGE2oFGVAyKq",
  "key10": "3w8ERgQF33F8y4Z2KHxTwoMSP5uxncbCb9mRANjUxvubcYKFsztD5bZGZRgJDX9kFR3VjCEqz6avVEyJhtjZHW2X",
  "key11": "2mJzRVf5qhaeMnbCbGnQcQfV5uJMpErcnugWgX72CBUXSgHsafTtuiPx1xA5xiZzDS2jj8mnLqy2mPfJq5gHp5SL",
  "key12": "5Gz7JriwTgJsYbdm2v8q2Bt5RAwXvQEPMQAScB3CUSB46Un8zEjfyvnaMbwz1aZBVyiDm33KxWUZHdphHBsFdFZy",
  "key13": "2heviSg65PDXnev7fMZXsXtimZdzkxabA7aZ47J5aUNm43JKznUv6pGrsEb39V44fB99xDSoxUPsRt1irSWHAHX1",
  "key14": "3vFsuSqg1WzENdPP5h5X1n1u1cxi4JYNcYdRrp1HQxdz4AFwQGxP4T59wELwrzuoG95eGS8nbMN7J5ymp5eA4kgJ",
  "key15": "Lous52Wz6JftjvycFabigtS86ccSrfrzaVJT8v3UH4BxaFeAso3V5AHK4dqFfE8UhWC8YekABonBr89P5rHH2Bj",
  "key16": "HqztTTs9CtD9WaiK9Xa7R6YC9rZKAD2ReoJjyYoPA5YTqv2V7r6hgEkwrRWqFqTM3HGcDe9o5wSgQYuNsSwLZQR",
  "key17": "2Zgepe1T6xsT5bJvVdoGgdxuC6y72xkhyEWm3atbuPek9FwScKZV5kbH7D6BWdmiVmf8jGEeoHzYkEnj94V8QWgo",
  "key18": "4oBh1if75ba8J4VtSitoU4zX2rd1DXAqpfpmqX52BRE9C4thrAAt9Zovtquo4zzipwtBCV5bMWX7ohyNk66SugQZ",
  "key19": "5A6cWyXigMP4CmJAzXqRb3TDRifER4uMatndMgAmNUgj9Avgaa9WHpRavkikowe9ENvj5Sc5PyEdhs6NJK22hPR",
  "key20": "39xrAsZfU8CvQF7R4f4faMTgqbXz925XL9wr4GoL1fjjcxMbwN2AZ5T3Eza4NVhExz6AEPFG8sZBkaQXgy4jZY1F",
  "key21": "2CyDzKxC1ELzFPaQYb2ssiJ17UtVhXkMqAAbB8PJVDkDThCQ1LVxn9xgTET58cPLktjW5W96ZgN8Lf29penjkqeT",
  "key22": "5N3b3N5GaXXKEDeTA5beMUL5r9jwTemFPsQ8EggCaagfeGBJrfHqnu7wnqDLjhs7oA7kqJY1DiBPT2wh14LpjWhj",
  "key23": "2RcH25ZAaasAo7ZFFq57jpW5KcjVk9KQ3QCBRJCg2LSXTdpT7CLVEiSgKVV5aVu1PbCexyccP4WkiqgvbdmijHuC",
  "key24": "5qHecUrthneHCmKw8ShUYC239Uph1nR6P3EfMCnamvXRPxZ8Tv2YVBNrx7it3wvvgr74DWBrqzVvryeopY1mx8nD",
  "key25": "N3WFXbzigxpK6iqepLzmtNTbDBUJWneNcMz35YrMPFWn6wTW6sjhUk3iw3GB6Wurjd7xmy5aXfBuN1pgGe2uRqc",
  "key26": "5FV8EwWNSw8qXZyUdn9Pp5JE3B9pJ97Z5GcGhx4RuXT3e5tHSuLJDEf3rwnWUmYvnp8XhvXVYDLoi2CgH17DZP89",
  "key27": "5iwH9HVp4nhed5DdZtPKx3pw93K9L4HMhQF4xsPY4peq8TWgsaxagUiCEAC2hW7MG9z4SwBeUAaqwWCwS5J2R8sC",
  "key28": "3EmzkV7qF5h8t8xJRAzmaBNt3gKUnbBDWcUANAgDVFinsmLchChdQJXoBwaxqSMrSzfhLR37QSMFr84WuMqeQJYc",
  "key29": "5Tcc69S5MhyRMiCHioGjdLxcZtSiewmhao8uvnUPYT9H7gGg8kmke55y5A5XGHY13hko6wKerma3fCCg6MQoJfgE",
  "key30": "4SmBZAkRHAwaSFSaR3bSq7GSz8Tvrydk6g1aHCTVi3UaU4FzNvPHbU5iP5MXMUkuKEGkQd6Yy2dVXaW9XBjSVUz4",
  "key31": "6i78CMso3hzidTkHWMSFzZ9agbuKZZ1Wbyoyyj1y9BTjek4vfnhZ16sPrgf9QogPxKL93hkMmy7b1gyi7LqthFS",
  "key32": "2zywvkA66XWwKKUmFgQy39Pa1AedDBuRASFoKPb5XVwo8S22XQFAyN1btpmZPH2e2BheBYVTrJD3nE7d2ZWgHuGv",
  "key33": "QMdjWGZ1yBHdzSZJgYz7NtwbVXj1SQgSJtAaBwxUeKLsTiMZ45xtPr8ShbYt3kyc7B5yejaA8DDrteSkysy2M3j",
  "key34": "2K1ARLpLqBnJ8Wrvy3fxATbLecCgmKTTHb9Pa8u7c4G6u8qMfDqcxt4dHtGBSG6muRAvTjYULGibTWWKRhkte5hM",
  "key35": "3StKWAPbhfxoDXq91T3vo5ymDbwm1URnED4B8kpQnCrKHKQKPgHQ7DQciJhEfcJXQdfxtWm96sU7FyEwryWJApq8",
  "key36": "5Dt5mVHUjFzEbNYLo2k2vwRdnZJHd81cSVQyrznELW3TjGVt3J2ynC1Vae7fbEdirBY6Gd9MiBP6VX41rfP25sfV",
  "key37": "5BHChRx6Udwwi4d8BgKAcmxnh3JhYu388ez3GBjKmAYPK2VxFmcSxGmvBPssi2Sn8o5EYdfbaxC8yNi33C3isf6C",
  "key38": "5Js4p5QxtE9msywfJ5L344BML62Yz8aHfVomK2xV2XgtwLspKeQF4Ms8HrxiutJdDQTLQrKV15QeNena8BYgJ4dH",
  "key39": "64KYg5KupMEC7KqHFM7K2iNNYtCLfXb7R9E8aaCoWFMy8qz8orGQ3Q71KnrXDHnCF7npoyeUrntcSnHRPnyT1ArC",
  "key40": "n2rP2dASWKMiZJNw7zpy8RwL8drsjdY1hiYndk9g7h2DNMBZju8anF4zi8gJCRYupijzqHVPjrsCMBMzqberGyQ",
  "key41": "2Se9bs8CnBnwGybA8TavqU3zJwoG5WfgqvYiJ1gTH5hZwEiyJ63ZxFG6ZQkjZefQQF8XBnWhx566ZsmKhVsck2y1",
  "key42": "64JNbSeCgr5xd29Dm4pKY6BN5gbhijvW82FHDqrkRH72YExUnq3DLNh9BR2dBuuETLaNanJVeZ877ngyHu3QWjFj",
  "key43": "dSjzQz2myDEXTyJBhaowzFHSdoib7HEqGLkxqMtrMJo9YBnhTSz6haPwSAxXwpoEHh7HoRGsw25HXEmFMUARRE3",
  "key44": "4kJxHQteY3jHyrwiFPBw4wAfsLdGbZVGALbWTLMt9bpWsdGNNPErVk6T3XXAaUfrahK5ZcLRvMALWrXBq3WstXAs",
  "key45": "cMgfYDMYnmcJ1e2gTYWNTBGWWgTQnocPeF1JPdfzjyNpjVK2GkZzV8noiqLVAVEMtUFsZvZS2QWAxb3p2bHFJdH",
  "key46": "2esZ4spGS5SSvXpHfkfa5yLsShwgM5nkLvFXfLYSwFu38bZSYYeU9N2id27VvyG8C5TEz5NuLeqkW9Afy7vGUYJe",
  "key47": "5yuoGxZ82wN4gi9T25dg5E8mV9bEveaYEQP8kB5TLanP6ACCqjQtmhwsrYLsEaojrR7fYJ4z3Y5fp1NPYJC23rfG",
  "key48": "2NAAGweAn9GFeedaVLCzNnh45DGKuEhWr76psmKtioPW9pgA3CGG12a9wy7swTqETn2hvAfcx7rH5YY3JfJ6B97W"
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
