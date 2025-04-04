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
    "4eqe4EvoUNKp6J5yHNQQX6avPqpP4M6HdfztyMbwYVJ7TzjKe1Y4wSU3PytzpkRGFBdWw3qVUMqaXW2jhzN7UWzX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ecQxQu1TmR3JyLQnFsxy1fenp7xCLPPekE8xjQm2uzHQwgnZ14cJjJoCzLkk2n6pXkksKF6ohwBhh8NwrLP1Lmr",
  "key1": "58KTd7X9U5S5pvDkkgH2QnBzjfHK5gkLrztcAPRRdV44SUBqMCCBnE2zLcYcyr1iSCekjEcegtPoQoaPPu5HGzDo",
  "key2": "Yb1v5PDfVkmExxKbw3GL2jvpHAsrZbKx3Bj3fzDYx8EN8GStEGYABgnFbDZ4rgaL7VeLKDeyxLyjdynx3odk75G",
  "key3": "64nrAWd8Gb2AKxTjvccdmmdzLPhkp6sS585REkVqXfBMb5hHtM8Q5CaH6pomArgmGstY6KKkntVQ4v4Pm78b99vH",
  "key4": "5Faac6AXGpE5fwujpti5tLge5JXr1WMLPZFaW9LV5AUvLQtYWsFf3YqYMCjKL4ReH6g856niBbWuPRybfYBfJNCd",
  "key5": "1fQZjUzmeezEVvAqF9G2oSHjyTvuU1fuAEM84HqrTqGmN8kQmPQMNRLcAGGE4Kjsw36EHMyHK6LymvJ4Hvwr4oZ",
  "key6": "KQUuuoWfVdH5MxnH4TEDSxTdPGkchSckB3KdxWwQFHg3HKULwW8opMVdbMQrARBoaNuypWfSnZE4SX8DhK3x2tJ",
  "key7": "2QXYXBtd2qVQgJahkq2BJLBByTvWvaYgMA7r7Ta6L7EgFthR9w3V537Qkwdps9ee96Dqq16SMRs8LSgEi3YMYdq8",
  "key8": "4BKwv4spAJBLoRgU9sXGim3PQRC4GQ9Ww8CuReq3KRqNUo5sEmWYJpTYm4ooyvp6fzA41bjE9ySs2Z6uiEay5qpe",
  "key9": "4m4xLV3haWxbhhFpoNXwFie92qE3KWW6uK9LvuDCztrLyWkd2ExTCYhREMPu7yjwTu1dL6zcX6aZUi6MtA8MzeR1",
  "key10": "2a6caeTDiaN4A3eckLxwquDCh54A5ENkfnT8xRv1DKRPqGHQk1onhH1yXDtHN5xG6NAVhdGAK1xVHWL91SRRcLfT",
  "key11": "4FtfRzKCEVn3NMHuBCMS62M1po2UMXaRBVwJfQY3XhRGcqXAeo3327G95Gmv773MNT6A8YTiLSpi14wSRz42b8fm",
  "key12": "3gSySJ9LBwYN1eXP8Q6HEN3JCJxSzdvGs8Not6Uv1viL9hWGcLwu2Es25jpCNWgxyiFRLsPkEWMGLfQLcKLZF9Mk",
  "key13": "4w7k8Ptj7gV43i2fTFqWaLs76E3hDrdFtRi7hoXPMZrpb6ucudwS1xjkQxWnGFjKLEg2NcftipdHjMzyGTB5SF7A",
  "key14": "4ndWQZDVyK3VU3DbSwegBK64rj9YMoB7vDhSVoRdhhCAbhk59zaQYUnCpsBMH9EkoRbuzfevUJ56DpdKNyFQXSpA",
  "key15": "4yRX6pJzUx95Z37yMso6LGnoEEBfHXnKJkYH1pUsyJ6rpbKCj4UhPziUaB5E6Eg73U1L6qHnNbHLMsFGvMDzjfNa",
  "key16": "4xXEJiHTdXMumrggWEhKKUM9h4MWLSpUGrhrX8qnpwSnS8QZYxpGfN2sX3sHp6YsoHQg9W2BTiJPcfuR3a4NEare",
  "key17": "2p5Z9g4Dx39FBSJDTEGhy2C3at7iiajgLnmcU1fNy7UyWEyupkAAUXgkbTXkhDmfoapTWzdqZQ7H6qMEjYUwUXbR",
  "key18": "55JA4CKhHPjijETZMJw8qHCeddVnW8i6qw3wMCyLZwj69kTftpdukeEVrKv1jAcC3sUR84FZ1iWzGhAm5fADMbUo",
  "key19": "FTWFY99EHAxrDD678brG4kBCwpwrzvs9AuSsxKr4pF4tPtiofwo8Bsrfb2oV9Yzp4jXaFcWLgKSLQyDqNtGpBUQ",
  "key20": "5ue8RBdRXaSs1vUENnvURSFpy5YvR91Du3SssjMgNWDayBFW8PXW5Rh2EvTh46JXsjGmxLspkFjogEoSSx1N2nTA",
  "key21": "2q4T3H9SKdiNjjCgTtTJmmDAXfcErFdu1JLjQ5EkzEUJvLdamEALy4boCHSjLiQXiFmDHNiytBp1oFDhQhCDuZah",
  "key22": "3XCQL8gUN4SJB6rkHKG6VzFE9B3SjTL8RsEf6Y95wLphfpa81G33fktkeHg9FMzRM5XL1GFQyiYpmC6HLe5FQNpW",
  "key23": "451bLjUxPMkDHKsg8scnZUNK4pVGVoKsBaMHRA871YDQDtgrphPoSA7KENLgH29s7Ab8mwsNtMe4H6FbZDbEici5",
  "key24": "36zFfz7Zqhfyxz7eP2skEdzooknfsX3aM2JmGnXNF1rx4zeDtebUL8tL5Zcja9UT1eVHpRj4BAYHEzu9UpaMEr3j",
  "key25": "rrYeoDT7MGUPyQWVoe6thm2vd2yFuCKeQZQcFJEQ2vahjvch6YcugVb25aeepebbMoicyZHbgBEwNx9Qm6a795d",
  "key26": "3Pfe41gbjfapYT7mgU95EeUQu6FLf7kxBzBoL7BogAJjHKziN3LwFiJf5PC9nWkirw57R4KEE2oKrvJi4gFRnH3T",
  "key27": "3zSRhCswKYaKWZqPtSR3i258PJZek4KMEbfZBWgMduD3LWrv9Njdpt2fXaVe7T1N7juh77co1vZCdHqmZLTb4QkN",
  "key28": "4X6odcvfSu7mZpKgvG6nnzcoA2uqWjP1aHijokPKpZQcEB9tkvATbu4NTE7tHVaSoRA3zVkTTPRtkiEfaLE9hPv4",
  "key29": "2XNA47vcXYU6cyKoRViFhdVQgduC5yHK8LjrvkGmqQjyCahAjKCJEPf3jwAryxB4fup7S7U14Te8tWdqfLTokh21",
  "key30": "NkagjxAkm9j2JkSPjE3D9uhaqMNqdUdqUJeUCLDsyBtajXUmuoRxLGjgiAQADziMfBkSPRsX1TtxDRLbAqmrzsz",
  "key31": "3XTD5KzcM6BLBVMnE6jbhJNWExJC5jtxz3HNYFhfNdxtf8x2UP6ciAfrjM537fvwjZGq1GVsHxU5upLRRAHHaNAJ",
  "key32": "1CYnRc5d3J4RPpfbsiWR9yfjpPP5sJYoGZ8yHYLFLGZTtcnnJH9R3g76KVx7G1er92UMkn5BK9UbZC5pXDthaww",
  "key33": "3xmetBe5tzWi6qMwrdJJ7w6zBVts84wBqBZ8LxsAB1dpotBM7WmBLr17yZLAdxaoebDgapgAhdG6oD8n7XZj37t5",
  "key34": "4iifQaiFDu7QfAsFHy866M8gMaxGJhDc46VBqgGyrUg7afjs777o5j4V3XCWFrLapfvutUrGnuqibifjJJqFSpP3",
  "key35": "3gLpWXqph6LiEoCLhxnKdzjAeBLbiKVaz35suhsrwnwppcx7kaJmo43FgwfnAZbSSGg5wAAtSoZhTfWf8a7vQGrD",
  "key36": "64Tk3nfFBoz2KcdYKWCjvcaWXmJEK8DP6VJ1twpgYgx8LkxekTE2MSyNtX1xNBsuDyzBxfsh5DD3LQ4QhtvN6xuN",
  "key37": "4EZATWsV6fjZD6p9bveTgMeFYuajUTNekY4YE1kB8TTJVASpB3VofQMXn5zaN2GiCsvNebYU4zAuCJ6jf51o7N5B",
  "key38": "4WaNpFnyCLci1NMn2dwQkkvmZNNWr6B3KyCG9uqB8ujqoZRTUXqvE5ZPVQs33aAq9xgCtNcZNwU1nH8HNgKeru3S",
  "key39": "37wFLHmBCS6tqRbt1mjPdTuqBJZe3hpXVo1StFQLCtyVfmeWKMsUq9d8Q9oUWnn2EiVPJ2GUm5cZCdEE7krvDARu"
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
