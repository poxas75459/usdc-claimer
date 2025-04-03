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
    "3GDk5a6KfLDrGGQCoBewHrrowEZ2AQW4qM9s5Ut38JGYCykFPWTwPWCdcx8pdnLAvQZWu9RtT4U2inzmJ9QP5z1W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YyzpDr3doPMP5YR6vPp76bLxD4AZ1DSPd1aPuPd9wSty6Kz4fxenhuy5BkNZudJFhsmAQGMyk8R4L9ouJY9qi4X",
  "key1": "5iyEDJK3n1inyMTeFgTRaRyU6iKCXwQU3ipGX7uNH6qo6Zf8oRmwLHfvJdPAikmEGW99aj5dh32R53SKkj2SA2XL",
  "key2": "2ryJBFTDiDr2wJusBvTg5BKnYHJyDwk8XtGkLtBwSEexvb1qa27PkgQ5ZLjcjKaN1ts8A14CmZ8ifqm6bi3X2Gud",
  "key3": "3H4jppuyioxwhLYk6stX1ceNnfenRR2LZcRphBpiRx4PTvC43N9ZG4mx8nK3JKc8mXdcpRGkXkYastDGkyyW1en5",
  "key4": "ujaZpRKgG22iLVR6vXb4Jti1SQxLAKZxsuiJ4azHVU3Hb2THBrwgCugYvVxMXUikxkLm7p4e8boHqBpKC9ZRpYg",
  "key5": "4yeLaht6C3ozj7q1Up9bu1yvJiUgRKmHQb2jKVpYpHPhjrFafLXWfLMrpvsUprngDFfoYBu8RVZJVTCRdQQcRhXy",
  "key6": "cY95fT9teGqowCNagkaa2Fgu5QpoM8Tiyhgu4fjrKMKygGMBgLam9QU3abs58Xr22ZypdxD1MtDXMXbJPsFfDmN",
  "key7": "4MQsQMk4bGarTUwzbvRWs57soRb3LvwVfzn7rrc1isGEHGTFpnvyDDAqaZVeCrNBD6i8g4hjmTrvnSdaZsFPEHNy",
  "key8": "eSEpY7PHwtdvacZUPhdjsCAFX6SAWyUoJa1iYzABaodymPw2JurVdw7QLbcheGBnbDUdbRtP6mh9AFpM4PQ24V5",
  "key9": "3xrRjuX5HpLQBtoJWa7wFoMZJxMZdVgoq1mp5mWhPK6t4sCGFFYqqWHSxTTdFTLNZTTLeySQX8n1uEwxXsUz8q4H",
  "key10": "4NPgN2brhPrnDGHhpoMPTJ63BqALyTbh4Gv9BRsTHhZLqM11QAGdpWk7kNpV16bJduFqBUnSktLZZYJ8ePFkfXit",
  "key11": "gZkeJF1fkSuTBtq9pij4pdddJr5cXfVgpxPo3yi29br826Yx642r1UdUtp4fr7APL7BN8uikcxqRMMQgtLKudMw",
  "key12": "52dW7duK6xc9FGdi5qon717B9nYHcTc7mpahi467zx2qhk9ifDtZHLveDQNQsNzmZCEp7QFW77tzW1U93CVUAxyw",
  "key13": "4HHxwDs1eyJ5ytsWrMUfpW7n2S7e1iF8sDjJWEpRni4BRFfdTE2CXSzYovQHrMEbQtVcy9AFXv72aeP5AbG3xKb5",
  "key14": "5Z4v8ucLBWHHCjmtZMGdraTeWhL6SyBoevAgSsKVstAKQEKmEX2zNDp4EzDDoUEuw7fXWdDrLduM41Nc1AdZMzFw",
  "key15": "4toMoJLDm334xj8gEWpSze2ZUGS5Rx3WrXrqgDhNjVV7k7TM6P7jwnatobAmk2qqQQjuJ7vQgRgN5aykjH6ejPiX",
  "key16": "2no3qUqFebyA8Q1tD5mpbwWygMtV4GAz4BSDjRNpNwNha1uUkoxcjdVaESRtF8QofN9hVLtnv2sCEn6mMWSD6tYk",
  "key17": "2DHasacJqN7mGfvekBpSGTycBHA4UthPyEWUPX4neLPKqiR3RppR5ithgxp6qcjR2NmLYgkM2QYYXtiGCoGKBBQs",
  "key18": "5JvmVWLwG3vGaRQ2azBygFtscWN87P2Wb6ngtBq7MFFcuBJRjyaBVVx1vP3kDdqKBhr7FFreTKuNNZL7LDVMCATK",
  "key19": "3P7PAtm6qAQRfUDFjmnrscxrWpZr9ztwF2bQkosMxqBYctqwaT95i27XBtyGw77HDPV5wG4Cczju1MAZemn729Rp",
  "key20": "3mgkHb9WuzTzJgLmyUHqttc5zffMBCfMnP6h7oDrPugXfyATSkNQo2CAqxNrrD64ubkY1sCfMqp3KmH9RRn8jERE",
  "key21": "4ExwHHTdvgojudae5bSvs3u12FWjRPtx7WrWp7JufQwSnkzSQrsMR9HHkP48e9sMMfvQwsnrVpJw8qcRCTzNCDbA",
  "key22": "5AXeHn9Es3bDrojMQUFyQ5yeh7rZrMsr4EixBV5oDWhtuFbBbmKibewDhkxo1GYnJocmT5vvqGK4G4gPM6er6RjU",
  "key23": "5MHnSa1wS93qRqD86wmtLh5kLkQQiGy1jgYwt5yQKxAJQFsWRLB2xFn32gFY6a54EygBTCCrEnrr83XoZq3kw3gf",
  "key24": "4uWxwyK3RG2fBkWsyj8YiBZGbo1jE47CCXyhV9oBQLSaV8uV7Sw97daoGMqnyTAp6L5trGUyfVW2Mj5e8E4pLmuc",
  "key25": "axmDuwqBMb2FZfYTvV3vJFS22SrNgE5KAgKqYM8pLgRgWeNfnvTaz8isCmtzCmGAUysSHmJQAtYGqtKPziby2XB",
  "key26": "2Gq2tK1AxRFPjJqtGSjAus9P3xSNYaF4AqjkDSUH9icZ9wdr9WU2MnVsGmzPsUTo2si6fHo87eHpMtjuSmxVxRPe",
  "key27": "3MgTP6sFEK2cVqaYJv5ZHyHUJ8vu7GivsfgXRodAtUbMmuech8ghGdVmxmw4L8oM6bUyYk1qPaFv3kBt6TgUMjyq",
  "key28": "5CTtFAhrQtG6dUojJQx4xd3ZrTDswN2syn719Jn3vkVQbjZ7xG1CDQL1jfGi1dCPrFaLhSgUhxxYm15WmdM86ebT",
  "key29": "34NMHzabGP8ywLM9h51jJB3VszA2TKagMp7196B3ACwvWVL9SiW2u2VCBPSdkEXYCFhX1vXk5oEcF4sFLXytFtNk",
  "key30": "56dKAjyeXzpexSda39B3zNR3YqZ6XqDBS4hWdfGWHxabnnaTitX3GQYcqPbJrj94WGBHhY2DYReWMQdfvXsES7mL",
  "key31": "21ZPajD2Dq5cPaGSz4DedjWgEmpCBmqU2mszkFdVCaD6i1j4CeynxPjjUX9bdYpy6duDLkyBrUv8xozVSwGDbu7z",
  "key32": "3Trr56N33P96E8w5yuHsY942oEBBNx7wjPBG9o7iWmqBJZaaoL7kzL3GTw79j8zWQHLbeWWLjanJMd4hQdtwJYkw",
  "key33": "VwuR6RVFZcPaiypfiqYUA41Qo3Vxk74aTngdjZyctJnfaBAr6zZhhB7N17gSTLVrdoNJHqxEeBaDFE3suYPAWYh",
  "key34": "HXHMAB8rcirEwR4kkLcbnZPvngY9Dprx2xRahTHNtfjYywvRmTyycUWp4vkLfM2BnJsF9KSZfxHDvxVZRuEwomt",
  "key35": "3Na5xrVeFwi3e5myJceYVpxmD4G3Z8Lox7CQ6dm5Jjr9fTA6jkUw8FfLHL4e7knKBCtEhmwNGWWJRmPWuZdxSR1y",
  "key36": "2vAYFKKJuFzZUFKu1PxMC1ds9PWPStE9EF3fd8fjfzFC1DxmHFVmaidodHXui2jFjdC7gHVtHQEtAxTKT1Tt7XsM",
  "key37": "2bcEBunmAymfpbYDTcZ1SNzBDGuUzMwh8cC4eHoKycWCRPyTW1sAPhgGtJkWN2TL4m1yKLzD3qLkCoj4ezVZDmoz",
  "key38": "5tcUJ82fhXJYXGpYcr3oq31MfHCY4NgnuSCeNZcn9wU5czAdgTTyeYkKP4EiTfjYFvjmrFAx1NJ9VtCtNroYNRqd",
  "key39": "31Z1jdV8oPEcaYNxAEaBGsc4qjCFpifQSK3nWuTyuN8fterBT7CeJAVbB5gQunQFYxPvVDBxccqqWAcKHU6WifHx",
  "key40": "2kQnLvAjtw64iFGfQEwPGaKq6KU2MGAWtQtWTEVTA86vxpjJ2GVcDDn4MbMB5DoBwatvSnXZFaVUxGAizawLmaFR",
  "key41": "2yUXQkxeQWAkABZQXpiUkaS76v4qq4HroFtyT2BMX3Wc55BGcfcodiJEGR8SLFRtwbLnBDMtduB8EtANhwUf3c4W",
  "key42": "237RMAF8pzXbBxtxUYy4ayrMiu4XScqdWkUvTj2uv5DHBMhyUyV4pGYMSb3WvPJb1UEA5ZiMxrpCVoGkZHtv8KVr",
  "key43": "2WGKrmEfHYi6vQpbanXSqgh3m9Y3PtGruvyoENNCDrhiEQxSduYaGZ83FQ8o3wHiccN9gpUUwE8o837RqYSPZmJC",
  "key44": "4yFFyEePN3KrnAN2Eicj9dYKYpHJezzCHFAEpXBs13F1WjRCG9VhbCEgiCPkSQVb2uztiwV9VLkj11T1p2Uh8p7k",
  "key45": "4UWuzCDbX367PS15Uvy3aBQiN2a2k5LwW25fpZDNwWKqrYqvTyevfP18Vnsf5xbmcVeYMNDozcGxGUaQpSsgjN3s",
  "key46": "4ueQ4G4jyr1gR5TZhqYoKjGLJs9KqtQcsacTXbdb6t2etYqReYEGNkraQhLNEnyFLyexgdxDyQuJts4d39mjdh11",
  "key47": "YSx3TtBJjZd23mYH8hKYtCFsXD3v3DCSNp6RtaUe4YGKGpPt7jUEghduNHmVRYji9eamcA94h4Snek6BRtMUT23",
  "key48": "5c7CTcq1r99MJ7zt7EZ5CZbMNCm2GTMZ7ZmNN926NtnxpAUpiZxLa5sqiEqBoRVBX71iZNfGDCSwfzWZGosME645"
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
