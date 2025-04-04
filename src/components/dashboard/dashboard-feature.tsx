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
    "z9E9TihcuU7XULytyPM2XxZyUXttxT5nCUNF4syFMvm7PL3ZpLSQ5Cty6s48pfhzFvqjcmjnvSzzTFFop8vWz9T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WPc2waGuYufNBoVEEEpERuZb6yJQuoj5KoYaodyvZ5j5kLczHyWWGkuaB6maa6Zq7NSvVUtufjJMAVFWhiia4xv",
  "key1": "5VCfAQTDWQ971y3pTAsSQBtXc6aC8QjUx7VRZd82cSiXR7yjip4d6418oZYTDz22y8WFDP4BkUYevLVGypEcwYqv",
  "key2": "4qh2MQSKuDgBGZDJFe9qmmpKSXcxf6dip3pa8dEbz5Ytd5AMNBrkvp6hyGggQmXygAgiFscrdPApaQZihNHVfbx6",
  "key3": "5bTAmgpmRiY1pAR8JtqQbDUdK2r5n6eXXYJ8Xx4FTKgtVWAHQ8CsqhXsuT6fd3KcH8Q8ezesfCmnaHSqWCdXM21m",
  "key4": "vF5cqzqBDnvcvBiWrAdfZrGyWkv5bVG6zLKeNaHWxf699YUihgqDqTTxw2v28iKydaGdosNgYRZ6nSgJg4Kh9d1",
  "key5": "574XeZSJQ1jawyhjiMVp6rFmzcMWgsrcPf7aHEtEa2zMJhmSzVteAytx7wSkHRp7t5ejkgPjunK4aG1nsNoEJRgf",
  "key6": "3h8zHYexUXVyFrVEpTcKTrxhQ9Mi6xQ8orjNU23nCBtFFoLjNJGcLdEF9d5Fd9XkJoenxe1ZKWXjPZddkNfUPbPv",
  "key7": "5TesiCg4K9GuxQW5XonfP9ADyCg4ScU2aV4CRnf2MkWgZHNivGBkrxTdv1pQvSsxYmntiQ4aQzaR4wqQVRn9HvZ2",
  "key8": "5sCJtVZV1JGLS8PRHdAsikfwpmTVubkuAiYYz8gB2HRet3iike9CE1C2JrxEcFaS9NWv5mCVT6bgXnCp7F9s5nwg",
  "key9": "2DXV4JyccNVA725HP2pKUNd6qpX3qXCLkN1FyvAMJHtP1u9dNkUNvj14jZB5GAi6Hzzu3BDSDznSmJWVuSKZFfeA",
  "key10": "53YcoWmU5BR6XPbt3saADFrwffbUPGqZoxyamXUfGNw1qvC4AfUhzCL5xn5HF8p3irv7Jq5jKu7wejqETfiSLJSw",
  "key11": "6Wtazv4qtkhNFHi5f11ri7jEEdEkfRE81CyieSNueo524zYBxU5Ws7YSm7rcyL1HbHP7uuJYfcUV2peg1gEbgw4",
  "key12": "36svrfyFgaLtVtVU8nTrjxkveKdHs7MHiKuvnc86ECGbYpMd1ZhQixyyuhSniuNFwu5NBD1BknHnwLLaNbgyyKhW",
  "key13": "4KSJawrRuLFVP613NE6VUaiBjnaEfLT2DrvJNdWYQgJZgHogSCiYPt9syfnfa7imfSFdRAWurZLBPiMTdeeRx44m",
  "key14": "BnU97vaeRgpy8a8KrLzrAutRRyqriKtzGS8aGmLNUchTQnR2hQFMt6HUaWk37EsqaZaaY5n4xJDFLSfFrXPSysk",
  "key15": "3TzkDn2XbDN94NtwnDPnvxLaiYuyoYKoagZ3aScDhkaGNyWAPTrtv9Z6XpZAYMf9qj7f8sgSXZWEnePrq5EKo16z",
  "key16": "3SxwM54gLePbbC9h5pFxtdJX1dWHazw8xYYrRtt85aCmNVF7DRR897tjWCTpbuqNzXs6yc4PhRpVa8yTvpDfMpVo",
  "key17": "46VcGnHM2SdGkszq5iW1RRf9Q5dQ1zPparZ8DyXZUt5FDd9idd7MXZvQVDFBAy23Re4KSJizKoDC1t31t53xZ8GV",
  "key18": "3tskRDgwCkgLaVe6bkysEkxnrdZQSsJh44LvKjfsQX7YEFPQsCvb5HBKkbfYkgwxmLYVKXTWmZZP9iKcao1nyGdS",
  "key19": "NaxbvQHS1gPFoxHvpLXAFkVxKDUCge9DKwkrn588WDQuzUjXri9ZYpPR8q9aGvxAajgZpkLru2SqsA3Zvt9Nhpp",
  "key20": "2FpZMnSQ6PXWnLZgYgtLgYzam1HyanS9DQrZiCwdeJeTaYC733VmrZpngNt2U7GhnRyDweVHeT5SghcoUMKsVUeD",
  "key21": "3Hsc4LPzhSnAnM9Tvqd1TKbFxawZQxqUdY4mwvDefU1g5P8mx7RE7cM15JVXuk8HkHqitmA5Sdf3qtUHw7i9tsoj",
  "key22": "3yWfTRXfmT2adh23H5PGdxkruFN9x88t1LreVC2hoMQMx3WGQRKHMSiNhugQNqdv7sSgb7T7e5FSwUzJuWgwBwex",
  "key23": "3VdHRJf7LcWoRu4bbWb6S4V2uka2LoYJ6rwCzBMr69GWARs1hxutVRYeiDRWDyn2pEePXw6bw6LrzBUuW3kaGhc4",
  "key24": "TheowepeL1jgyPjUdpKcG7Wz8EMMawA98pNpoUeTsFRksE4UZoWmz8kAVAA3FaTmrBpP7aZEwL5t515X47nK1HG",
  "key25": "4SjHMzwczYfAyMk2FvgH2tGKxS9cQAAXoC3dS3RU6kg335knH1cNcoYy7yom1jfJfoAsaWJZdiLE5gcHxe4uwcX6",
  "key26": "mMhTZxissCXQ5uwSZTphgYuqjsjmmGfe3TLFD83eNxehx7kc7hg9fKNiMNTZmwKj3nNJuCu2fgcvb1t8PfaEdRG",
  "key27": "3Xz2ntJRAZhb6jmDrvq1TSHioy8nXv35fZ4ZcmtEn9TV3hpcXn8jjuDzEtPKGQgUJ46XZrWEJiUTjM1gBAtLEjVj",
  "key28": "WhjgY9kR79DMB5z3ie1FRGjy7wYtW8NFzt4LgEQHLcXSkVScNXka1MZ4YAEWGmvHM6UAqEqofC9xEvBLjta7TZs",
  "key29": "4LCUEwMQXL8ivu1bwtxu3zJV1ZWdScdpg4w15VC4WF62iVoiWRCqkP3VKy74MZbc7fTp2EZQCrsoSqo75YPaSJyh",
  "key30": "3Bx2AXj5Jw9Kvtg1XH6kNRKaLwsT7QNQZYkcVRXB7S1ZwwCw6XKcNMCjr2ZXQYb5HnVmD1dtyohnRexjbUboQxm7",
  "key31": "2AfgWVztJZmpAMrZvY6MP5GjJWy5LrJtpqYRKK1sNMjtkTSdrRYxRhdUGXQyWFACZ9qof9sf8XyTNNqjWh1gMDcB",
  "key32": "5vnntXnqKDWvtxErXLpxbVcTEFaoGNofom28fm9VmHdfgvBSn1qAyVTyDCQUfyEso65y4WAFdYR5guXXwvxwSAj2",
  "key33": "5aREXtQ7iCbhJsiNVgobiTXmsHB4aguKmWQ8Niv53e6vGkTAtPV6R3RwPEWsMVwHVjBgX567r81hqtgnMHfJzYUy",
  "key34": "5frQTMYfXpeTjcEXxjWAN9nT475mqytbGVp5LsJK4QWaM1iaXUEiDbfR4ZdEyffZzEALjFYixeKzSZVsuJ8n1Kyw",
  "key35": "3QU5hnHbykWEsDhWAiogh5G7EtaJXHW6DknkyNs9zVM312UyVntQ8JwfZWP4G39RLV83RgTbwcpiNpRpULsWhtz7",
  "key36": "woYUKb3T5wLr8a52vWrMUE8N61kQtDk89KPjntVFFNtVhqGA2feeBL1rJZYf4ZXeasP6MCHRyp5T982YdyJSxXN",
  "key37": "28Ch59bVJCE1sCPDp6ALtzYEMeUfycX6upMfXcKo3SzPvZFEaPXfCdFvPUubTFNpK9MF13tJYGYRreJYJKHCTHN5",
  "key38": "2XcUPvdDxDvPLVDBb1vdFGNkWsrgszwVsWtGvgN3mBKJadMYwAWZwJAk89bUbQq8x3DcwKd5yTPBqvuhGpCbieSu",
  "key39": "5vGNBT1t63GnCzVx6UMqJEpoJBjTDH5yPJrJeBBaSFvwWKHFWCn3PgHXQrnkuXUoassWEmMevFu7n8aAQrjnBxNy",
  "key40": "xd5gAx7aoKoVvfpP1zCAoCfCQ9rSbNeuM27Z8SSHqHQxXcN38fkczUou2g4qiQEFwY3fQFV1PK9EgALHWRHfugK",
  "key41": "3sssJk3CLnuAm3Z8SQiaNxc2q3ARLq5arZGpJWNtqGk7VBskvk1PVrETyvtrsSQ8Nbra4L2rKE1kBymf3HcJz58W",
  "key42": "572puGtgKTg9bLdY4q4ya1kUh9UnkeKfFXUgUnTat5fu82SkSz5efh7kcRVMR2sVZrDjvbpZPwb5dUF5q5ZqaxWJ",
  "key43": "4yXcv39dk3dkgTN6maKd6Ffze19C4g13hTodNDTbKanrTZtaR6DFH6FJDd8Pk9uhq8brG2uTkSyBp8Z3kL4WTMgL",
  "key44": "4FAvoLwrrTPFFf5mGaFAaDmZM6XXmdJ8AwhcvQ6JNXM3Wn49WnMwkwrXVTRphopTf82g4sFF1AvEdvY9ta6ydThm",
  "key45": "ifDtgMJuubEMkqfCnuoa6TxcFhNcdZemUvhgsRX9h3XWCrgnx9yRX8eRDtWE7joXuzsBtty8V2MTeSdL6oeAzn5",
  "key46": "4SiH39vzrRry755p3ZYJeoWqUpU3pUZt1hcNCwShx8B7WmXvzgJxMChbZer6dPLjdtux3mwwfRprmsnUHAMMkATm",
  "key47": "498sN9CATCdTSYutv7GnvtZYNXTUnH6MTeFMhFotR4Kaw7Xo19pci4myk8mSXivhpeoS57gai61pw6ThN2yieyVW",
  "key48": "bpCQDEsYtrwjQju2DBSBmZier1Uq3dW3CxGsQ3UpyvCoZemtBAqRCstvWfuw6HLhsBoFtf1cfZPmPmQVSTGMJvC"
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
