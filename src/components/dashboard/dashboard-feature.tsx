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
    "5UFqBGE4amzRdVKCtsRA7xgN6gZ5SBd5RWnCairXPmwH9nxFzPVSfufbgt6L7JYHyx3SyBbMamVqFNW4kY3u1uSU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VDPJA6CbvdMiiJ6f6CDsFB6FYzBnbGvmecsjP6wPHe3yT7WhiWQojtzjroUxopUU6gty18Am4iaP8Jdz2mXP87y",
  "key1": "5E1uAh5DgFSpCkwWbXp5qnQ4nuuvdeDCLG2wfBGhZNuLev4XmVZS79SN11pG7Pj8o8VHjjdo9XVxjQaSdMekfGyo",
  "key2": "4aXqhYdhnNYhzpsHQi5RRP4LbAXN78Nh3C8ptzX6CYQvq2gdssPnVjSiaAkVSHyf3KLog9RhkR2ceMJTcsNbi8k7",
  "key3": "9ZvD8zZRKWRWZPkqRreFr3kCX3xAwwcmiSKtqywvNHnRzUVwkGMzWjeeja7rKJp75idXX48RY4JmP5qCHdZYCRp",
  "key4": "42usPZDbL7bkaqdVKMCFJnfWFRrSxfNE8QiNMRFv8Vodhbrb3idA2zi1wNJyHZdJravaeFkmTP3UU2FwHbr1XUP2",
  "key5": "2FQpSSiMBSF7KJchdvqBE4vmqe4ZunsTAEBk6vyRB2aXG8ncoTbrZTSL26bb3VeGGhBBrbDHSX8c2Ear6Y6HKLNf",
  "key6": "mhRLPkBArGWLmJxScsNgWw1GLhPVgcb4fth5tZpLR8vwXLe4armCTFt8PKiVgqGcHdzaM5eXdS1aBsx6wRWHqK7",
  "key7": "5oKLfJwTwZacY9h8tsDMHFbrwYN7PG8D7E1M5HhdnF66wTUcEtCbdXQDvN9VE8DPhtsuqd1eg3TthNYAm5dWkFRh",
  "key8": "4Qoi9j7KpLJQGEyaSZyj4Fkj7ZZm3dE9QNMTQysaetRwnYMFVSoaXxeqEwEU2Si8HMDD2WV7vvBE7qPqL5sVhqU5",
  "key9": "3pU8e4cEtrGPU1JWoeKEBbmXHsuHkanDVA8MyWM42LqqgNZgMxBnHcj3aSNBckTo8EL5RMMcqEAqRcrz49ae2fMm",
  "key10": "ZAyz7ZU17RC9UKRVFpcfHJRhTKyQjHKVu7MrGkWnKsDkUey1pFmBK7C1V49yuagqzU6tiqUG6GKF2ZrvAMszuGH",
  "key11": "kmK96ZnvH7snPGzffSL7QXw2Ys5ew4eBjrHyk6ysyRpunhy7HQZ9UJdtNjGd7esS5o3L4WReLgKvi64JjiZsNj1",
  "key12": "41ezJdPe8FDic9TJVnQT8Ujr4y198M41BMxQ5MLZV7Zvni3chB8PVRie6bHV4wYjoXupTst7AYfCsLRcSwEFRLYU",
  "key13": "62dV5VLLp4V9gnZ2sEBzF5LfionKWNwMedWGBKA7NddP2MFvEzsmPFdFTX1dQ8jeQX85ujUp4Cr1KLpp2pa9fs4d",
  "key14": "4tQFrn8QWB5XTgUaod8bTkNFkSEU2gqgS6deZ6btLZ6iX3qaRZG22gSVxEMZqoZzwGXVPbJzDFhgXqWn1GFuEm2x",
  "key15": "5V8tVneKAVcuUwhgKsxjAtPbJ642zPfF6aPC58dBPHtF588TDgdte84RKTdEfk5ssQ5dzHdchhfnrb96H45EmL9t",
  "key16": "iqNfsMR5M1zhUyUWVuuL4y1U4tCJHoNRx1bwWWnAnMwEzQ2aSG2szBjo1Uz4QinJEKGd3Kezk9iC4kAKXazfUhs",
  "key17": "3xaGFxiQjJuLvnvqEub6ZTf2J4ZZqcLD5zQdPuumFap7nVntqLQ7RkKvDB8U8Jy7g8HZo2m134tnrSmbiNaWEcSN",
  "key18": "2AqyAGNTHEogBEimnj7v4fQtBCjG6pNuDTYqSZX4bxvbeergdJgro3LeMwVsmXQm6gchQkjMuZzhbLNDQKHdgwkd",
  "key19": "4ME6aqeNkSjATXDDuFVrWUWFagQZSWqs45n7q5L1V3KY8G44CJPhDRGJT1BYG6aACFG92pgpQycRVonbtFtwkPZA",
  "key20": "2rq63V8maikyPKjT3Q2HR7Qp7ejVzrdPt8j3R8jsm2sEerggE49FPoWo54oNenZXTuDpR4jr5NC9YjTfdFm71dhy",
  "key21": "63KWZi3BMKR8eFucCrRZ4jwoLiQB6ZXzESc8LkY4uPpUv1Sb5Jonh3sdoGyzaSjdB4DCMhKaWcAgbK6oibdtSREk",
  "key22": "5oQPdR2tpY1ZBh4BoZt8ZQXmuNDLJPUiTHppwgoBbdndBPb7esF3DqZErnuL2NsDzZdfmsGRnY9Hp4F8bkEMtqq6",
  "key23": "36Rnj3eRYPmMz49Vae6Jgi33jZ7uzhye8dvqLPYe4f5bvD7jhNfA5jV98uGLg6VtJt4q8ytpjPmjX1b3fesK6BLs",
  "key24": "4rySxnLcBp3NxbzYGyCnrSmZztvCD5KeXVZJKQjdaYVtBJn2mE2YFsdjHXZRz1gy6yTZ526WavG1nyzBXG88B78a",
  "key25": "c9UWmAD5hHgEmE7gLdHP3gCyfZyaRtJySp5Rpuh5szv63yWGngryFxGbDsrRU8kxhpY3yMbmtViKBEcUSuyz5bF",
  "key26": "2P9KruFSrG2PN6LfLsJYcPPoxiKYUxZhzMcBgPrUd8yuWbH3QRoT4LP4L3QzWMDxENrc6m8kRBPzTToV3k9qy1ba",
  "key27": "4MLsiyLBmmADT8PhBdumt3CuDyjY1nKeZ6ycUkYiGn9NWWsrkbR8e1aQid79UqDiB1DyfWVgL7HddnJc2xeFGnFx",
  "key28": "jN9eGWSP37PPoSSPqkFm8CYGZwnNSy4hdS3QTtEmWcL8krzMMF1maL9AchBacegDdgapNorfqf2C1kn6K1kzJj7",
  "key29": "cRpctRReombGcwMmBhiJTfcVrHjAAdNYKqmnQkHP2Bq7ff1XnrCGJ3uuwDL57yKaM5CSphkQ5LgZqUZaxSwFBtN",
  "key30": "4UyqsVcBbRubQgQFS8kAQJhSe6bTZ6zkwy5ryJMvWkC1hEF54jAPXgWYbdwj1RqWx3PQbLgVeR3ZmcRiRPyxm5Bs",
  "key31": "65UZJ1XJkGNzE9zEa72m6EWU1ncUqbmphaPZY9jyKo37peTnsvZEvTCu5jkSkfXR4iQyyCqDnQpBkC8Te91yTi1T",
  "key32": "5cr3HfT7E2mLCaoZg2hhEeYK4Kj6x9AbKtfWv35McGACyqMdNHbBjAqteB7DnMijnUGUTG41PVZohmUn3tZhJsB3",
  "key33": "5xKHaiJhNr3ywSZX8QMKZWfBehDimTyLx49L9TEN5idnHTvwy9RMzckEJXk3N8mBrXLRUBr5uFtmZdL2jqvfRv5z",
  "key34": "59fjFfVhEA1A7d25P26ZnN83M8jfhNyMXqvViHS5hmBHbc6oYeKQugEbfeiGt2t9HMXSXQS7kicZ7voyQsmxG47C",
  "key35": "4XwM8TU6fgG36igppcLZYqZymKGX64RMfcEE3jjHtC1ikcALnaZWpyT6CQaK4b3Qj3CzhvJ6SYNau62t7by2G43k",
  "key36": "5QgNXCVwhoNtnW21FVv1SNEBQwMPhFMkihbS3tz4k58yaXzRTwgAtNHECQEcTgvtcCa6YfBcK9DpTnfBsbLz9QfE",
  "key37": "2DnzKgFUWnL1MXBTmScgT9q1s3s5121MqDttRRsouSGx2qq92KG3G4Yv7ExZsv8KuLe9U8Kf5RcpkJ6azxr32n1J",
  "key38": "29nP4Wo8JTSwQWNYYKMN39u7GACyicTeb9qWscT7yoZi9RsZeeVai53ednK3DhciSmJ9jCJftmTaQwnWtWAeJaEv",
  "key39": "wMj3HTczjyxrhq6XJV27A5dvVzEEgqz4Q251t6eTQBsgFeWXkqRyHTsekHdt41sCySsBaFBmPbiAbBp3XPkMfJe",
  "key40": "3KqL3Z8D9D3xesQmCP1FgBmMJTbHxrFMu53NYo8RQefDF29oxcVG4diJLf3fhqMjjaoVTqVfsjk3sANifYFctpM6",
  "key41": "4ETbqNfygcPKPLNej9KURoHsEFnmwsJW8YrB4uNk6GsxH58aZm7JtwaZJVM3hU8uoj4z5kMoGVvSveAPHoCqRALn",
  "key42": "3SqgcffkmPQ3q1Tz9NC86TiLe4Fdb3UReZxA11JA9icFC7LizYfpnEBoRfXUQVwQqQpvmtR5VHD1FnwD9YPofd3",
  "key43": "2fDttJzcNXEFeRFjj3ZafDmDwmUGqyC8ixn4FJFLGvw8atWRuqVb42dAeVLs6miTj8RU5fbSxGHByX2EQu1DBy7Y",
  "key44": "3eWJuzdLMZqHGZNEUGNDTZmvhxkV8DyCPkUR4Ew6awb9Yk37cgndcuaPu6BYWNeypEK6267uYS4Cx77xGXqRnDfv",
  "key45": "5Ps1aZSXUUwTP7YukJH7MzuzEnBX6u5HW5FJAWbnem1CCzLbHM4r8EWmYQUxNNh49k95C3QmjtFvAgeWNQuSNWZi",
  "key46": "xpPW8YDauE5Qm2apd5Hjy1tDHiM9mtLcLLRFeiYAzs58DHjtr8o2juT8QFAfmAoBThkKoKmcmrinKQkFpP4uHfZ"
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
