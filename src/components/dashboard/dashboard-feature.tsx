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
    "2tUZ7V7foQwxj6cuGFGZPZ25n72EBN2xGrEfgm5RBwEbALVFcJb1kUknHJwznwgqo8A29Mar4HNYX42LHZYeAcSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M7A2LuzQXA3dYu56c4Uim4TGxftEwkjEHiJooCrVkMXFqGBRB4DANMQgK5HgFiLbkZvL2wbzgo5TX5E7DKzJ2mr",
  "key1": "4uQcR2453ZWU9FQpd4qzeLqFLNtSAMn2V9VQ7VDikq3WGx1P6MCZ5v8C27LU8TMqqinMJwwtoaz8HDzhNG43Nexm",
  "key2": "2z9sGNRJDRb5GvNkxFBF5MRtzH1hSZqw6YpmKaALv2hPkGzFC3azUjJjPc3o5DfeqWZ3NmesNcFhJLT9WqE73oHL",
  "key3": "3G8oft2mdMJpLhD3NFNcJQNL8zB3kXenXJxFFS5KfZwHxnb9RT3g6Esr62MRJJ13hTf327pByxrgsHSuT2VA2qDw",
  "key4": "3ewUrHfombFxnkWH9w41MPWYxuR1zY9xghuvt5jsqVjHnwNWPo6Y4SUE6zj11qME4sKyUs1XjmxHmN3srkWMVP52",
  "key5": "3H3QxNAQrwaQh9FbdzQDqL18GMYgiop6VV6M69UggCzdbnPCKxeUtVfbitFBd9HHizHodPcs6PmPiytHA93HsqzE",
  "key6": "5mAY9dWTUQm8MqjgLHHsj4MZ85xHYkYrNxasza9pXAX67xthBvQ2LLUso8f3fd8Jfeteve29eqNeFJieGXYXehWS",
  "key7": "2fFdh8bxCYwEy3yZ5b5bkZUzt3s4SANmMepszgyx1E2UnTZzqCPMGiJLHPeS9Zi6u85VQ6EdGSyJc93gzWukmn4a",
  "key8": "3YbUmb96zRCxkW4dn26hSrez49JQReCzd72QatdmDmNtA7aHR71Qr5niFnQABDAmWgomqSpL3KGwyTtA9zp18EGu",
  "key9": "2ym5sVcjD1w5x8FvpZoetaywGmWZ6UUaAgY8N93KcmqBTNJAYNYun9DbjyEw7znhqhwYuN56Yc75b4yfAkMRjJER",
  "key10": "48uvtpztXS8DewuibbEcW3TnDv68jqr1sMM3QPiVVCnPP1t5HM91LRhBSNRCLv2FABZn1T5zpJmY7NCEnUCJAzyU",
  "key11": "24D2gaYit59A2SGVEnGswwvHJwtqjSQTNu9cVByTTs3uyVyysmZ4KMdqCwZGiyai14qnYXKHToAJS3dsF6RFwXYY",
  "key12": "5K7ieHALnYuG9ZD22xmhFDyqwPxq5Y5BKiabJegCDwm2CUvFTV6pwQfPLirB21sqn8cwwmcJWZ8Sa6Sby22ATKZk",
  "key13": "3kygwajUF4WFQSQdpoYWdAW9Uw6rWNuCDQPbDiCK5YFGS2HVp9G2z3wiUK74eM4LUpx64citdutQQ6RfyAoVAJ1C",
  "key14": "N1gpbv6d512UgsvPXeuQujVFNyYiMtMnLEYpaE8fVtMUsWPYyGbpVGDWAjGi9oJ6hMvXvuuw368gMUHMWB7Kgoa",
  "key15": "emXViFMVMj2Q77mp5zYozfnATKtdDgBsfvLe7jm5krDAWGbrrqNzqYG6g5JwJAQUeAmr7Di6iYV3X8rwUumdUbx",
  "key16": "8zuodwjr5CL1eWwn9ypjLSs98qsEyukPBQ5LVuWSutc1SxQUgeDmsLW4Ji6Bpzs3d2Hx1ffRvpcmZZ1Ceeove5B",
  "key17": "49hEXDLgUZhaVUbpBxUNh88knV5naoEXc7KYzUvL2TRe5qo9cX9x5h17mWLnPaXyqAoLHVueCi5c8wq2TeKQCdGz",
  "key18": "5U9vUnf6yZ9rUSsZ2FdqZirX9EEmHwKMhPhguSuV9z67Qp61b1uc5bZU9trNLr5fxchEB166tV4XDrJvbGZ8ASjb",
  "key19": "3anvV3WZhquFjZ6cFv143Yrz1pBXJX7fTvGhVKpb83tWHwKA7ZtetNYuopBfCwrRKULCGo5kDq6oB1yq5bDNSdry",
  "key20": "4VXydUsemvK38j5aqry6v92eoeZU69vwst96UL33L82ZR5BKhpdvnC5mJG4CyfR4ANEb6XUB5H4SPTr9DCvKhPiW",
  "key21": "48okq3udHeU77QyqPnrcH1oDP4prFsNuzaWPsdhzmfWBDAfWd6HEBjv4pNsWc4RdhNyhh1m5E9BQwXe5qB6w7jWK",
  "key22": "4XB9AB5FLzAroC8zbWN1eR9wNq9nACYE6ThJmyg7drtYW2Da6E9tHhnU2nLaYg4D2D1ttUooHfEt8VfHbncKsoo5",
  "key23": "589ksne6jPJkZ46j1PQUVnLH8tkYVFCqPe9i5ruGAMXxq18TMRAQfJrgCbQVwz29NxnX2SzAjhTfYY3VS177wJAw",
  "key24": "5S8DWDzoTA7k37hC5LFca6cTF2572EVKD4HGPxBv22KjvuxtNxN2RV4oHf5Z88QkcnRtmwJk2dXr4ZbN7Fx9Qw9M",
  "key25": "4JzmJohj5AQdEkAy3vvV2e1rD7QewhUEHwLcshrtV3QQRoSCFFEbXzyE1vhDzCZq2GmnXiwmxidn17bPte95ZjMe",
  "key26": "3goX8d4r9xWgZjwS3CeX26D9skvDwn48Gh2FQRJSvwfLhL54VhPcFwY5V4QRbSCnFQ9skHaoxmbc51aLsgMk2uJX",
  "key27": "5rXbnpXyTUq5ZSRXbzEKMsGWEFtNLGpkMtBvENzTLMyu1hZEoAq2Vp826q4ABTfMjVwpZ7BCxfd212p9sJxGPkG9",
  "key28": "2b921WZyUp8tKzrzCMe3m8AUVipXwwaikjWXUUk8EymthEZ5QCJzoK6NekFiTEfpvZnugUogany47VtGNTurf4ES",
  "key29": "3DmBkf4WpWuFKNy7YDyEZateLHvrHKa8C5GRgc6yTAyoeVDdusUEX48XGkcZBUYRnVGWyr2rjtxw3VWxfEkn763j",
  "key30": "3qjumQd16fKUKtXmP31oSKZzaSBVTpCZq8d6YumgXrQcdEVZsvhACVCDF6AAMiRt41FohqJhFNA6ABj4xTbQFnxr",
  "key31": "3qNTAx31vKaSZdGPdULzYSXFpnK73qZTgNh5L2g3mx6VUVeMudekKN8Y7KyE5HT9b4V7rq4HPv6uwTyEsAuqFhKE",
  "key32": "1dfSn6smVuRPweV8qWcDt2eQLayUuPuj9b92DdFjcq5DtGUPif2eaiRmjLcyhij7RsSzvaQdYvM7Yab9gD73Aew",
  "key33": "2aiXJGVfWZ6BjdTy41vjCDuKm2LmGofP7uzjvfR8ymtMDD1YZTr7m6gYcraYbhBQEoevGvcZxjUUWC3WCAAg72fz",
  "key34": "5osKofBb3Dd4Q9T6mWZKwx3K5udKnvMuhAWNAMThKyt6qkLULnXv2PCv4xTsjHs3nM4wS3G977UdNr4Lh4fp3pjN",
  "key35": "3BGCRxwdFACADaotTh5BckgNNbDjdo21pnacXaVkP5beDAwA12AhWsWba7jeUSs3j8QLPmnpme3Tj57MjfoEQ6ev",
  "key36": "2R8SkJRxWaAyUoh2xW1BjP1mWKKEv5JdiX9i3xBbHE4y64eAhp73B9b9ue263uoBBKyUzrhZKR8BVGrz5oGqaF85",
  "key37": "5pSx8c9T4CVzcuPr2a7UDmP5S9UiVjHsRBjLCr4PmCejoLvSedFPaJquVHXYmQYB62WUrGC4X2UjSimYRqD9cA2V",
  "key38": "3iN4sxjayHNjhEWsySzpDzzqhbnFoBvzApjBTzjUrnzvFQhhrgrXL1RDpmHzwhjsup6B8sXNVyzwhHyUwW1D87sQ",
  "key39": "4PrDjKL2vxz3GxoS7ztB2eUbg6WeEyWTjzYAy2zdoXXKcgVouipBs7iJ1GRjey39dLxivSa42oYQTL5EZ5jL9QSB",
  "key40": "bpmmi94tSyQ6bKgqbUVRuoK1AMY7RZb3rsqqHFqArKvd4SXqHG4vAf3YjYvGTEEVVZzNoFM7He96tBmxZNjYKaV"
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
