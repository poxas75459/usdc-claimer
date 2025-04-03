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
    "5dxBhtb5ow17bRz7Xe3vGS1tT95baEUhoPkAAPqvYXDgFqKkmpDJYCrXHeMGkVX7esPtnjgxBasXJvggGCwBP8nA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QKVqPSnwLvPVqwKawdiguXrCfmw7YMPRzw5YyNwC8GTHpy4pumWXHfs3vMT1zrUMSwiWeARfvbwErSm7a7NM1TC",
  "key1": "5hwZ3ud75xiqiwuWCeNpRi5zmPvCD6bC2cToWDRr8XBy5rC5u3duU1gZhbsLZDieKFzhH5cK6tFjEgdbGdX2XbVr",
  "key2": "A4L1Zxai3JZGoYf9KHjStoU1E57A1ZRco32F1QKkbJWHAMGFigkZiyBuoWeb2E5qX8ZrvUgaZEGT1wPWH2QiMew",
  "key3": "5Wi3vaSi1TmbHfUtwhXq8nnh6zcG7vAQLZfcvebUZ6yTQWPfBRHeo48f5EjjimuZRLKyHpTNYP73DMX11E4MgWjV",
  "key4": "MaJpptG5zMaoDEr2b2SsczWVtZcAJQ2NrdNwcxGV9v39ETP5QiTXfAvMsbmJc6ngi4hnoNRdq3EcmyC2UZTzm6i",
  "key5": "2d5sdZsUdcsrt4WZmePr18UqGKLekGYrMNiA9T7bMcG1HbxdwrwoFmJhYn8kDHxLs3yF6jTwatqv3ccwRVb7mAoS",
  "key6": "4EgGEi7x9WTSMyx2SzGMKGkP4LiHqqrJSWj4xamAJ33cjUNUFRaM3dm9ERDJras5EtkADTQj7DvkEmi4TdtbM2wy",
  "key7": "FMnE9V4mNjnX9YEr5HWih2MQTrtHzA1nDsN7aR3vP1hYWMNM4PtMALF1M4yFK9CvRe4sPt15gqDfadZLULRTaT3",
  "key8": "3NPskgwiqFumg1HookCRNFtwz4c8PfiUFYdJY7etJn7VDp4uLxJ9Bf51xjRbPyUqPCBPXFoe3qonG2odbayH85W8",
  "key9": "4gZ2eQTEChLvBL8k919Qj8wR7f6WsFRNE9fPpVcyMqMiczCnjNyEQGE8J5BxtfDq77NX8byoozfGDfDgXGnrDFsK",
  "key10": "61hVYVG7dTvHBzNmK4X9fTBvvwcC81ZLnySUmrpPBnB2dEuKThAR4LvnUphm3iQjGnUDqP8uMGeRYq6EuZJta14u",
  "key11": "Yti4UVLrpg6ZNJGP2ARfRNu2dpKB1G9UZenviqgBzY2gaT3ZNPigZdfmxiz71RkqeTh4QTH87derdX3Ygkq7Gc3",
  "key12": "3ehwnQAEXuZ8RWDFswdng4SdSdiUDxSyD14owcJosnsMyPMkT6VtJAJaEjtEJhzbBMs8XfxSq1qPYah5k8H7EyuF",
  "key13": "4BNgfaxhAsud6zdm3sFdv1htXnUMtEGSGbFtgzXmFSKjZRbmW12gPgFsRHQyVDVod9e3kDno98tripgmLBEcXrMk",
  "key14": "4PxtL7udsHAdHzycYu1qrZZXrJaGnQDTYW9ywgVswrGXZ6hQfJDVQ1D3nXLn76LUmrkNUqsH1bbNVZi2ft2dpXye",
  "key15": "hBmLvARv722P7u3Vp2iAsLvXSyqf7D67MA9TSSYMyjojNAqYDpK6zLRzwqC8fskgD6kz2ZLE9yMGT1srAn6zQqS",
  "key16": "4x9tzMoB4NZhQGLBZMiZ67Es9Lk61c7KXFt2ixTUCpANJsPC63FB2MDZgkYiypUcZ4iTFBZTXTFb5ggS7qgdxCh4",
  "key17": "2LGbfuBLZC2TjAywdXxxsiasW5NhfnCXxKvXaQUNQKWcGe8HLUGtVvB4FJeKgZ3SdRJTWe99uuJ18cP1sVoF7P1K",
  "key18": "2iFT7yVPJJe4BV7gHBfQKvnYYDRvfEvnxvwfpJTajuvbtmYiLmHXcaHUoxJ5t7tBXfLzjeh7o4MhvWHKtTcUYvWm",
  "key19": "4zAcLSpVz3QY1tdFpKyFcmeY3wPsrSNoBR5Kaunv1DTrXvc8Utn15VbKwFwrCT9K4GxFhRgDfDUyX3RngKUu6ouz",
  "key20": "2V1Qhw7bnD5rKf4x7nHnNTTRiGSbMFaGMzVYwF98UqztpAETg7cvemdocEs78hhYYf5dvZAKoe6uQDNAu1inmZA7",
  "key21": "67LCQfJ5FgTxbeR5zH7J9TjFSZEaNnsppSRXY2QbZsDxqEtw2cMFqDEc8hvM7aSdrbtiffGoQP627non4GKNezMu",
  "key22": "3JTD8BZSbzCP78fdRkXSmSAoD7tDy7zTe97SE2pxWTXMV99BWxt6zW5rW5192D4e4kUndzcP2fXc91jSEKErSZ3k",
  "key23": "3fDr5RWAMULLYVk3couuv2tmiCjpaG5Am4dHP4Lf8gzrxp5stsegMY2G5C8oJh2k6HpVVBVWHJVSHL9zXz4t79Aw",
  "key24": "54kuh97n5xC5uqm5g6UJPQfbFjY9yVmnACw3vbc4eivT4gNnyo7QibXsrZLRkpLRFkV3bNPR9sMAingC1Rck7HRZ",
  "key25": "gU38BbcpeaiXAekYYWUt4iXvwCJq4xaf6ig7V1LNSPjYHbtapWRaYtm71TzAmxVmMzr7Mquwo2dw3EtyvGboiL3",
  "key26": "4aAc9su9r9qXse4kQ2vm5c9pFqJANT1TDkr5NixjFDJucXPZvbuUYRHtuE5hcxMkaYDgAMghLDuDsLy7tsA417qF",
  "key27": "26cdc5nTaNkP7R1fGJhs9VoCDRJszDNoJYt3ibiXeWwejUKYfad9Semq2RUb9gAZUbYmEFR4f2nKgncMbZNYJAxp",
  "key28": "5SPXBHqX6J3Vc6ZPmVL9aKpVocyX9XrfYmfKcXJzQXKvTj6pmwgdU5bUXsVuTXg6cUuvnyV43iRZSzc4dmChZLU",
  "key29": "67D3r9QKi3VeiLUygPYAcJZcfyJewhiTZMizCZYwqCi9TYhHLcnb7xQyYTNo9WkFd6AHp5hBH3uEWtVHBvsg8X4t",
  "key30": "nFWmiJUk3nuTBctJDVeVQ9R9XKNeC3CRjue9sRJND2V6QnHkLPRxz2H3DMvWxRVBPD62oZwcJfFfNtVM41AgAi5",
  "key31": "p4ncLAvNghMcouybGE1Js2ELHgLzLP3AjLiJLKM4w78ZVeL2W4aH24BiXdx9Qttg7t7GXNjynbt4HrJuo6TBvRr",
  "key32": "3XQYadhn3EWRdYDAEzgkuiGjbs5XRQ1r99UaiTJX64VGyXv18yuqnXwdysmv8EhTVSj3BpigUHkeoJVYbfGAbDG9",
  "key33": "5f3UAzYUeaALG1qUgPNhDFHsBAQPWZdvM91dnKSNZhpTwfPxnX3R3gMH1eb7uzuasaev6Y9VZQ4LjjrEQ9NdVXMW",
  "key34": "L5LV5BHgYcy7vNeRzSZZdkhgBY4QWNnb7ZPHWuJPuFHd39prVGY8CenNaB9cR5GbzmQ1nKspFakrF8nR3Ayz6g6",
  "key35": "3wvMVTQQW5M93fq9mEoT6NFurihF911YkogH77949GpeDYYK3rMg25MjhaDKoxoVKh4SMHn4Z6H3tsfjk7HskrX3",
  "key36": "2DNvVTe3uGvsdckqr2w5LJdHgkom7qaCpwKpJqErM26pXVB93Hhqmbz4NfsAnPGpaxbfEqvBnVyEsde69kBneoqQ",
  "key37": "4dk2QupNsooUuTpE2LTQHWfMGUvdUeYUx3vwv62T4meXBqC5HrAfbyRwocNtjM2MzwmXKskPDWL5th8cWjRxUpPS",
  "key38": "5fbogJ4hxoBemegfB2667ZKwggmQAeMsTqP761j4hMsgsiJxViFAqB7bCsMB7YqMuSDCeQRc5qLuTQ9Hnez9SLJL",
  "key39": "2kochPbSDfsYkdXdydZGjDsLK2coadH95d32Jk4N2HvLSfHW9kBSF574HTHriWB6y1gqLG2UXJrMz2rvyXapoM8r",
  "key40": "43TUam18mrtkcDaoR8xUGtH6nNSTdHN586dsBhV1Gi2wdi97s6nNQ6vLRwJBam8mNdPzRwMvrnkPPrinUNNTFHnU",
  "key41": "2UL6k6eoHpjirjpXhoFgKDsi49KKDc69xFnPZGLuZGXft1MT3HnHAdRrGnPdqxY6hXeZjsm74dn6AwdJ2dnyhBbR",
  "key42": "3tv3ZNe25KDQ27AP4o8D9M6SNHnv7MHMDZ4bcsRSxpyV3BKrHu7FyFEUuDvSKw8c48Q1YXYJtechnqFc4xGchnjv",
  "key43": "25Rs81dKXpTTz9brxkr31i4r64zHqhiRs7RGBnAY74nNwahxENXSg9Ys6JeW6Jy3pJbjgapqq1eraYHVFQxqCFG4",
  "key44": "1xfCWe78j2Pm5piaV9bbh4tBZ2jAVJ5H1HaVkPBD4nKGVPxLzSUmBeium8qkUzgHqz1CSeerEAcyEXghF7CTrc4",
  "key45": "2nimQQxC4ZexJyZycodTqnhaaSFVdpvrZCiW8G2QCd4c2j6J9wLdYKYrZStoidtAu9TYF4zr927edXKhFo2gQ7Pp",
  "key46": "wMthnAvMXcHstXVCmPKsEcG4TJcUaaW8wz44jHpkJZ4qitrz2bpZD2cekYUKqmSJofuffV9tJu9LKDKVjWaMpn3",
  "key47": "F4brr7RPhV1S6AbUrBKbeZBxhrMWkHJ6J2zDqQvACXo89BCkftxjavErEU7RXByDTaQMF89Rt5L3MxP4o9R3XyH",
  "key48": "5PgxtTsuZRGqoVcidVmXRme31H7Jrx9MLgqwFpjiQyE1fBPx6vbpf7RKW5c5SadZM3eyXcCXD3etMBfRf5Vx7jma",
  "key49": "25dPqnGiztUZfttcnuWCdf2mrtPJL1RbMX768tvJjvPAnRPY57EduU2TozWAwpHq8bRk5KmVXAcTu4YjfmTCLjXg"
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
