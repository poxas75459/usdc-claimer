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
    "5DE9xic7y62xQWjXLXQdFVwiALXak5NtFdfd5qkajpqehixWgUbpB51PUYVcBhbDizXV8PoUn6ssgsQjUVP1wcmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JNTMRchcCRZcxVnpPWk2MKSBKL7LZCovmmN5v2AD4cPm4ToCcsiFeUMmS2U2yCkUme9G8qW4shu8vaJr3GVMKBb",
  "key1": "mUuqBakq6Ao3cXhHiReYZZvmfy9F39xawp72cbdhnPFnJ4MadLEZ15wgV7PRFbETgrFrKf3RUwoSPBywdbN6eNm",
  "key2": "4WjNX5Z3v97iAPwfNahCTeUg4S9bdyjfNMzuLAJtEF5wVnQUasPSDF4wX2QDFUqGX4ejtfpbk4gW98D1hfbmyQjz",
  "key3": "4oisRFnmLC4iD2g7m6ygdbQ2F37qj9MiVUh12ykfKp5vudpuZQBEofiatewTS2buGa7pkbE8Lk4GJ9h8BQHGJBcP",
  "key4": "5sToVG5dG1jjPTyGZy5RomUr37T6fdjJ2krr7jDTAS7U6nMbZWZCh9GPxkYDpaBQbnjDrmHVf4jVr9fbmcxknRfa",
  "key5": "5mvHzTFvvCoQ5bZYu3hYbmn1yrr2Yb3gSDZpN4S7HXb1vppqHp28XUGDfUKnemgYdG4z5yPap8pfsTvUJBsM4d5p",
  "key6": "4uaCzhoHQ4k22r6yigSqRLX9MwJxjwEghjNq8CTyGNZdcwaDcZdsmrX3bdP6kdmdE1nXAuZFFRvVESURKVDK71g3",
  "key7": "5dMrP2vBN5ZT16CS6grTVv4ti21goPoM9Cu7ziDJyWU24qQXi7qXGvdoWBUgVTUopK6sDXFTpTaxCbrpbCxmQvMf",
  "key8": "3LK8cNkasEsXj7WDJVDCcfgHAJJGLJyXLpQCJA1CuacwV1zsETQuKAARkZpcDETGvYzYvWRXBHXLvXWLxFgfD8sj",
  "key9": "t4LQxEH9wTM5Ph9ajLoqJQeQvQV3NRjidXZWwaX9so9czNqSKUCNxMsdWNYXAfRCimXGYfNmzkHWzqwd8fmAEao",
  "key10": "3EcBCni29DdxwJGLX2xKXcYYdj2XFWNRMmpy844mcJsT8URL66YHAM6JyiJDz7hv3CJFYjX9fX9YMyNaNhQom1f4",
  "key11": "4oeYhxUZs9DAGDHbSHHZzZxMBrgasxLtVhHtZy1ckbRbDemFQmN2S9jq7PtxHUQuwq1MmSFYp2g3uRix3fvSJ9m7",
  "key12": "3Jq496YcueSFAZ14Eop5i58iStZ9os5vpLTtmg5gzeC5SQk1h8bVDNDWVT9Vs1DLuQ3RLr5LTq3wCVrzFW9MGKp2",
  "key13": "2k3CENpETwyWboRgMNBHdEGfWpztQHcjEK2nTkXdLqvcDQ5dqZVES5tKYvCZs7pSFjDyF67YzS1Eyn6gJDMSumnw",
  "key14": "4NHYrkNimFrcUWcLFwpzhpqHpEnvowf82XAfaMkqheGztpVEEzkHUjVx4gvjH3cMsAr4EFA7sKH7myBquzNhxsEp",
  "key15": "63e4hRWMqd7dZDpGshXgXNawhv5MMLvoNmWCB2ns5JRRTLnGw9uVZ1KTnJDf1NTHyVDiiCZeaqxjKx4H4fmfTHTJ",
  "key16": "WT9MBvDELzFjJ5fnhzD2FVuHSShVAiTuZ8MvEJLxvEqUNwrfQFzNvhTvBw2WaTTjz3ZfoMivJPAuTUiKSWrosA8",
  "key17": "5pUKT3tfJdXYX2E4U4d4YGMxBgeTZCymip2H1KmPxBkj1WMfWXxBTftYJSRappH4qVeGnzYoZvdrovvtRFSuPino",
  "key18": "4wmGgoSRH18zED92B2pCZRjeNtoWUuurUmh7RcyRfFecNrQLgrHqquYSvXDosqA7BxAqcowJYaAgcu3QDH56EL7L",
  "key19": "2CcJQy7mQbALC6q8cFehzFcp8MzHxfjqrLTKDV7rE8xXVfxyitLfWhJUXfWBPHuL5yXBdqMQJchKssuRbw9ZqFC8",
  "key20": "RVR8cfaNV9nD3EuoMpdpwfRiAtQZR72KGmnMqnBW6AEdJk6eqkgeDgbJpafUUf8uXmNvdfQbXFNBX7LXtw53aq7",
  "key21": "QokEhu1fqmRGeXe8DygkvCy6xtaNS5R3Meb5sxSZHUHabLSpztQW2LkYJSFg5CSaJtJWYUTFH4gLgPdv8j9ndBB",
  "key22": "45ikBp44Cvu8gZE1MhQaEGYJ14VBT2ZeNgcM94KbBX9kKeBWPooFVsQV73dXeLKehdrfvgASEoZoAFhA4m5wNaQi",
  "key23": "5iRUFotigaCkfNiBxYEzTuZnLTzMccUGfAKZh94Qyja1RAaTa3mi2ZQ33piWUkLmNUHDpvZ97stjBLt4kcXnMuMZ",
  "key24": "4nbZhA4Pm9ARFd8pRL76P5bkbJzfaBbAofmQojUPRXo3hBnLE8Pkf7BLpN69rojgMmeKGJqEZhHK9URV1xaHyMe9",
  "key25": "5Jre8b6kUcxRyViLJr5bHzro81y9UEN4yZPcEPUcUmwjcU5BazgNhcrHugxb4x5qmHqVweeDeXYpMaB7o87rhrVv",
  "key26": "3Yph7ozPw69aTRsMUoiteG7FD2uBYX3rS6nZwZQqRAYVwpkPhsqFwxdhqzrBC7XQ22RtzGyqmjAv4JzbFAXK5z7K",
  "key27": "22a5J3uiHrLSzpCxCb4H7NCtX8ejFDhLnQBNm3PRi4k5izdnKch6STN7BKVoHNAGg2dGu1ddyktv8Y7B3ZAL8Aet",
  "key28": "3ddi9o59asZkey1j2YCYWfV1Vv3G1hFgznCLRkNwNkncNo3Mm3RYDdqgqn9p6Lijf6U1JFr1QprEgurBVJFJMFPs",
  "key29": "uw1RUwZP5d4HBCmd3KctidJvRBcfBY7oimQ64pXkLDS4a4V27WpmSA9rTT4cgqZ55VkBEfKz4DYnmSvNE1TJEoT",
  "key30": "5Zphe8XEKPdRRSk1FJhiMbVdQLQjgmBkfsPd7NH5BVWxiiEogeyarsX559HyV8Bu4btG65Cy21jxSvvZZ3YgPgT9",
  "key31": "2zM1qEEJdYtrCWYhKr9JtdhrAYonQt9mPTK8QgbWbWMatt6EuFBAcoYbbBaUvPCv1DbhNDQpyQuyPxiVygXAtU2F",
  "key32": "54yNLC3RpLCPHX4wh2rjgMvn6yaryLfHdZ5V2FrHJJEygSyWwfkjxhdyyzgDYKm1GpPTEYrKZjkzVJGQVRGiXuck",
  "key33": "4jdpBJnhfZHpnjMVcBTSzaVcZftod4fYvrUBQtaWnPQoMJ1V7eYYTtam7ooT9ydxJXFdoihtCkWWQf6yD2tGmDNZ",
  "key34": "33BQNsCeNfy8HhhKT4B3yJ8Ab8m1tL4jHgxRb66EZtkMLTuFeDGJ3GTao1s2VqLK2RYXqmQVgv9F6VnSyaVTUPKd",
  "key35": "3YAKJ2QLBk4wScw1Z8NHFst4soc8RGjZ55bSCZ2ZvuXBjxYDj3qG9w433czc6XQRn4CCZT7Lg1GaLj2nWZmZGBvM",
  "key36": "4tEY3VF8Ukv6Q1mSGcPfRFwLgt4Ze68kwBvf3GmgTpP1GQexnw8hAKA71mgyH5rYBfASEVB9w4bjhuxw8BjVU13v",
  "key37": "5z2XfrYP3TVuFFJrT3f68enpS54PX7xy8RRWg8oPRhM2nWJvvhULdPBQYauJj4MTxEhLdvwpoBPGM6ERJGe1kxw4",
  "key38": "JXGg64tdj28q4msmQ8qqQVvYG7pfiJ98JsJbdFdgZTcGAACYeCtzpwZUn3J3xuHP6GjnTUuigD2dLNw8Qzs8unp",
  "key39": "4pf6VqDT7MdVtS1SjjcWNwrf8PGzyhRiSss5NupmxYLmM44cyNwzgtxrjCg2MKonYqesEU6py69EjEojSHV9E8q4",
  "key40": "5pfTuedoHE65X9J5GafJKTDv5wJE5xbYfDYQg9KbRtyRSjuF3QBk69MsC8AjhDgdCjx759fJn2mg9bXmrtyemuWB",
  "key41": "431jD1KL2Qy4dMxDBz1QSpTUnsbHLv9FcjbB2uEB3Hh7VswFmH1AiENyvWBdTrCV8N6sHp7bySfFe4nJgzKFC1N7",
  "key42": "59xKzNKmjp672NvN3o58DZBL58VPof2UDB5GVphnaNBosGDScbmQQoh6b59K3vkou8e8VYAtTAXy4wkm7K95hvMn",
  "key43": "3bPZeZ55QfytxEzrjtiZQsEr5SbZJWsQAisyJJwJEHttFRRML6Binf754GJWHFcRQfFbpXodJMxQZXVRrULnasEM",
  "key44": "2qk3eSaD4GU9v4aGqMR2hufWD71XLxxDkg4vq7kB8HbpqkcYTanTkV6WDafkKwRuf87gptM7TAchkjhcNLcTwkXH",
  "key45": "5PgvzsjRfWuHRjQyjDWvTx9ydGvtEnYJs7ZwYfYJdWTBkB2KyZ9q6HLGqGfvANd5ohwSNwp4ijAJXCg2ZdvVCzRY",
  "key46": "4dREyNcVzUCshw1mRMg3tGPgAwCHv66DKzAvgZDTqksva3KWGooMdWe71dWP1iYg4ChbmJyF7eGNBbwMbaS57Dn9",
  "key47": "62trv8NYzFZ34biQS6oL26sTE1LVkuW5THycgsk1VaoSzWux5YDXcaj2E8YApKX6KfZ7HQmQTxh1b12WCN1Ufe17",
  "key48": "gsqbnJ6d1Ukup89b3AsFXv9poepHUwJXQfMnaAqJcvJUAHwbBvC6piVDhUp9cK51YMNQEybLKUgUfSMi74kKL3E",
  "key49": "4WwQ4DYPMVGrnc5UEssG9hTYdpnhc1CtoA4zD5yaBForMfYo94ELDKHpD7mWcZMa3dHa7tY3cbE1suSgSzb6ghLw"
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
