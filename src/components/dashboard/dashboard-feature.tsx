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
    "mQSNYNrcpn6U9HgFpBPcpvZqdE2f3WHkSsxGT44gkrLB437ZHKkzCDmqJWAXW7sE36zrt7eHMuUuARinMLq2vzy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44CpKMgQHPsqVtoQqmdLptxxm83DVHTcYdeMHjLimXtoqmsr4p8rMFtr5gE3hx9PQHGrbsj77HjcJFuMweR8fwDh",
  "key1": "5i1pJywmKezP5PRgzypP91fU7S1uecNhzSc45rtG63ybCwreAM7tp3gdKf3XvEGkHncAXJPEnUGta6KiKVWih9aK",
  "key2": "4eAu4VSFkGk7pt9AMnTxaZHjiH6RRSM3FzrGUonRwQhMSAryyJ7qyc2QmjsrBH7r7sLAmJbt81sXAdTSZsmB9LcE",
  "key3": "3ceCk5TYAi5CbxuT9at82D9p1qMnkz1e8RkLpggzAvVTRbEZfcvpHfEkHwYRyWqgJ5TreMa3PT1vaDSzu7UDZMN6",
  "key4": "4dEUvixgggjjroPyHfGJARciTiboJc6nKcYh6nKBrUszyrvUbjaZsaVG4U2MpwpNbCkprSLokGAAeG3k5C7Gi7H1",
  "key5": "3uGdD8cmD2AEhRdZsHTLf8hCGGkgaRA7d5aH2FEVYLeoGL4rN3ti2upM959mMJ3m7SwDVkywPPC6Rnt4yFfNUHfc",
  "key6": "5f1aJvo79px44NjHXkNZigJD2Nc67DuWmigiDkzXSCTajPQB1r5k8omZjavhSN4ciFmapHRsxeFdPYXBx4hWB95h",
  "key7": "5S3SLKNffJw3YcaUa3NNKYCY9sHBZaPY8PP9G8JREVRN2RKBBkhrN8sc5Hk9djM1777Y8PwLHn8J2vXPaaS179VT",
  "key8": "597LxRgv8Lc8FfmNb3PJuaUCckXNshN9ajQYBkrxBBsV4TmQSbxnqwsFQ71vnVJn6HtKVMsy4bqgNz6oKUp4c9zx",
  "key9": "Mn1xrdfJucMtSNh8LZNJmXfFAkg5ECgJHS6FR5uyRVC8ubfQJWjyuHVGF6qWsYhnLYrPSxQUtagNZpGDzLHxVos",
  "key10": "663RjZMBX5jpKCCv7y1BLDjiAY1eh9Bonvp28cSeUqwWvHyDhNLCCrPmbMeYv7uJmABzpnM4mE6n9wXLywULFamX",
  "key11": "3ffZUTQXeDF8WdYBN46bWf9dAh8b4rWNWjLckeNz2NEKPgr8grf6NGrMgofQDtcRi6Jxs2qwmg74f5MhVsWsJFg",
  "key12": "MQ4u2xKobCDVrXTmChwXVy1wZdfjWgPnJw62WwaquE3Xfr97MxgUpQUnxKjeFqRAy8Uy9sXHktymdrSEVW3RTCG",
  "key13": "2SzVVq1u38VSsB2yAea8sFqvETwf1U4xasYjjAtn1HFfbd5uoARcaaGNfCo2wZpPpvhHNTv2SLESwT4ps7PBGMg5",
  "key14": "636JjBxiaFirKPqQyx66B4WvdL1k8RXHBLgkPoNxQm4zozm9raWiHDgvnYZsSCFR5p3PCNQHoMJTNitJrs3NoZMU",
  "key15": "xQTdGH3C8LTKjoxtbw5kgztKyAEjDA4EF99H6aJhpF23g5VSQoee3cSWbgBdfNc68CEE9QAMUgfvc1Rpo8Zpt2a",
  "key16": "2yrd4wk636nB8popnJaMfS4dyhkLa3cMZ89FKisLtc1U7bKwcL7bEpFFEzA3PmDhGyzCYSFE6EAaJFnY8H6fGJm",
  "key17": "9ZYp1yY2JaouvmKFTSkM75WZ8Y74StHHTenh4KWJVHcLQ88EsQaf5iPWsX322EagzYHYmJ935qJbZso4oBg7yZb",
  "key18": "4v6fmd9kRciUnAJ2DwLoMpScWQNJJj9rqtv3HQnGud2mi96mYuKhFpZ7MYx1W9mg4XeqLNzK5Jy4bR19x3Tryb5S",
  "key19": "7HEZ6XZxGy8trSDuqWsncndKSWduXvtjnsCSZyt5UtAZLw5w2veeHAgJdTMVZHBBmMafGhSzB6yjmU1WLjYCxyR",
  "key20": "3paoCR9A95v4XdgvhCbqAgwDLK4bMeFTqr2iJ7cs2uA8VbCNQ71oVtFcZs1mNTXxzpu3EAHoLL387HKQZMJnew6K",
  "key21": "5Y4tW1sT9uvz2AKGTcV9dGuE8vadAgr3noHuhN1gv4nvuCwnFHmdVyCAyN4BzMAuMd1HYezhjeZAtGgoKeR4yAMg",
  "key22": "4nux7NE7Dv57w6LzmmnS6Uf1Tu3YFaMB85G3TYsL8Ed6H5uAMbJHTU9TWjdF4Rkivy2sAep7s3gvXUf9GxkyVD4a",
  "key23": "5R8hAYrkEtjJQHR6j5S3s6USJ1m1XctiMX8i1JHzYyDE8NmZHJ7AVm2J2ZesGmoosP5BtfbeHXUsiqwAUJGDPqBW",
  "key24": "41ASg44tLjkWGJ4toSDxTyLTyUsC7SwS9uUAJe6oVSj9aqA7VxjRGGYyBEfT7DedVbSeu4zFLQh99jTzj848pUQR",
  "key25": "4DyZcZKuuhnhnYSJYtrtajn6FhkxvDgoCYLEKAdGkBs5qXfYiZELLxBRAnXsEq457nJXLdUa24CqV8CT4fZHqADy",
  "key26": "f9kZWWM2ozgavKNiWWszdKf94AnhBEB3vjCXDiujon5KD7fp6Qpyj3LcryvpBxuzy421juNwwxJvj9ZHTTsJAwh",
  "key27": "sFFqHxJ5ExSyEtgjEvqpJx6rXSXXkvPW4M3LWUG4qHnoQprWoGmeu8XpddsRKtDcZNqLSryKyK7yNYqXhzpHjnp",
  "key28": "2XuaJj6jN1yTVdHPNrVC1PyTGPR2TomFBRARQRY3Rni7WGXaj7i4CKqv3PwFSB3E9DhHQzgcnVjyewq3uZPcB7Rv",
  "key29": "21iEtr3Xd7cwkcrhTCG1WT1mmhvuZknuuKsKEobzS1vvnZSdGSyVc38qEm9WxPVejqQjszq1ZGTB2vTc6kNfJB7y",
  "key30": "3unhbcEH9TQaKyQ3KQ6Qt46KKVtP2bt1z9MZacFBx5qBvm6CkpMQpiocoy33SXpZ1PLWYF7Hcxe7eF4yZaVqxufJ",
  "key31": "3gEqYJm7zYvJSrmgmuNtgfAFhC6mdkYQJofi9N1oeYdAcsBrb8sTVtThAA6hN5GNPBDEDfeSNmv9E6Bg1Kt4rax",
  "key32": "61W2zUYBa4yrFLb6CbwxuS34bQ14Qw9sKnu8u9ZfaLcwQ3uRrCc3b5cnhAw6XNKHv39G14VD9VHYCtvDPqLK8p38",
  "key33": "iHMNbUzprtQiB3KvNTyuPqTejdztaPZx3FzFprzU8ULBtYJavB9BnzV3CwULMjwf68ScpDdyTXB82vrzEFHQVv8",
  "key34": "24h4PL25ZahSzrfwKt6THmagjogxAPqRAQA9i5dAootPn9o8sY2LPZqNpc13gKfh86TqN2cnGnLD2RkH88hpPFCc",
  "key35": "4JvEFG542A7oMim5sd6QYPzD4UW3SFXQMq1EcQG2jtBhGHJakoCqwpacNjwEremdgyZdfB1Ywm3Yq2HEdygKmLfh",
  "key36": "5JHFm7XDHjr67h8g6Bqud5kWSpCn1waBLH7LHXijdT6d8GPMgVgSvZBkdCsZxu3bUoqEGJj5BR6j4dmMYYyr7YVz",
  "key37": "5wgdnBXe76pAHUXRtkQYHb3NRyFGr9DFwpy6FWrzoLPwjfdkb9BmrGPnBa1Ay1Br3q6JVci8FCN3m9Jm8ogw3LKb",
  "key38": "3aTrfYe4rd8WQu2p9cj7pjBhutdGuYDvrchsNsHHN2jHk9jCdJtkgsyBqx2i79AyKJKJsaNFiwVt1vR12L9HbyTD",
  "key39": "46SjGZwuuWTspqu1ktZZe7KZdxaAdqV4dwEZA1Y2px3iKpzfX7Ew4fScwfuBUUvKqz1NA8ooyHmTUgJ7Cqfew6JA",
  "key40": "2yMZdWNz2bnHygv74Pwt5qMx5guKPcXWtCrZCKE1CnMdRirNjMrue3qQ6bW9ne23w6gj5Drhw1e6HkvARkUXpFrs",
  "key41": "5hAVF9Sbzh4R33dvonjkxzyajFgTNyyqWk1J6kvJU12n2VjJmND7QrjZNFGmoroBUHK745ZDuLroJjVk6JXh5YHP",
  "key42": "2YLTYjt1LpL9yMwaNDHvW8o94ZQB4NZSVR824U4HDcxF2qNMPe8haZy6AwPcQ4qjR8b6YQt8Ati3jNctA4Af5EC6",
  "key43": "62R2w1gvy29EHC21hqUeFANwcfx5hcDdNsWiEkFeLCyhs3fHXKxso997ZmWabVuxuiHgXkbRSkGzwR6ZgFtcbJ8H",
  "key44": "4bWdruMVFq7FFxaQCMPXgK35gkWqBPo59wkpT9HNPX4PYDwm6qyWU7LmN4CjkpceJcrdTKjRTn7mPq1WiKUoTXVZ",
  "key45": "4AVfj54JPooFXzQqLMkm1hj4W2XaXtEoiLQB5QDLzseo78DEPYPH1sGzBxVQzWPreZMgXFrhrtHuGQBhJ4156NN2",
  "key46": "aqUA4cEZwzzEhJaHXbvJ7FMsBYGTW7i5ug627YJDMgF8FC9b7sDf4recbLVjPRS4TmM4CxNEVLNCiBzLyBKZBNV",
  "key47": "2BSFhQ1En7qk9zMRauJ3Yy4s61kQonhqnefxYq95WBo1JDRWVjNPRkPM7tKWmFrNvMuZsCVk1N9KddaHGUV372U8",
  "key48": "5GhGnjRdMDYb11Vkz459VjwURBMbBZeuLqcDfffBmHifuETK2pZAvcffH6pzBLobkX4g2bkuparRkeFxXEkEx5mt"
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
