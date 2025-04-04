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
    "33PALqV6Mt8o344745Ntjy6dbdbAZezKweJfMDoDDMEwLTseBKa1v5sWnFoV1KTgAVgGVkji8ZFwxAuahdcb1KMh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u258RWDdJxxTw9g7SoupfDc5z3roxuKqpmdJvVxMH7yT6wHqejVW4LCbgeerwwoeiGrj3eEjkLUJsmHz9q7JHvo",
  "key1": "KAQmLaBSAH6NB79XRMGH2CPRzyMjkV4nMorqNtPbTTcDN1qhvLnEHSRq7wMnQyrzWjokFTt2jL6e8ZmzZ2ioYrF",
  "key2": "45b6KjBbQipo8FGc6pBe4sy91qaQf11PQqjhraD2AY6p2NqByMp6eiVxur4BdvX6DBzbbGoriNoEbAmyXBcXAnCc",
  "key3": "r5aoAaKfDqXfppG4bySs2qCuKrhMgdL6htLtaishtkhswev2ydcGBTgby3BKE88tGJfVDa5hiZdn6cUs4WpgmBv",
  "key4": "2VhmAw68z3gP5VhxKBjiGxwHzDD5Xta8Au4XkjagANNe5o2jXHb4WPgmCRAxuFr46Q5iH8soem2UnWpSZ3vj8KWi",
  "key5": "tLSXYpL5mW9NWfdiEMxrXD8ySwAoSvR7mUPE81LgvmUjdrTuzRK1xCJMMhjrj6vvi2GWGGUEiaj2iKjn8YwFrfx",
  "key6": "nL3wG4cRKg1ZYwEVaWEUXybB3iHKSjkrRZNdFgZHHgbWCYns8q2Fvoz9GAiWxtJtTRrW1HDS4d4yhD2Pie7B6wL",
  "key7": "D4Qoj1KoM8cQ4yqL6htd8SAdrXMSE1HjSicUV8FXNFA6FNvR1Grhr2YPyJHrz17qrqZaBC2fQtafDWYrzkLotVC",
  "key8": "3AFAu7TMUsuD5UhksGsKv7P9ir7zrrPXNEYMgZxdADb7RHHbxnivWES7kVc15BMpfzqeQuuhvXqqBEeuzx71NbuR",
  "key9": "3GhEnK7xXrHGzTeWMSrvGWbBBna5yRnJ9YnrsC6DyuvCtGsAcgpPafSXrynyXbzzEKT7HdrKRxHSkV3WwNKgv7uo",
  "key10": "51aJ6sea5ZbtsDue2s2X4fXDztP6dqcfHU645UJaqotZnXghi1jFKvZv5hVBHJFG39nqd2ZfRe4PbJYXtxgvFP2f",
  "key11": "MWFaibwoBHdVomfM7srhCHPHYEHaU4MytUMznWPKGttYZnZ1ayd9X55XYzJ7PTW4F851MQ4vakHRWxyHNAEJXBh",
  "key12": "4n1S8FSCm49qvA5zrkCa64oQLheRTAybDSvmjEjnuNQttdKuGEyeHhRhkyRXLEUPn49Czk15Hfhw2M1wnDbjQbCh",
  "key13": "2v1jsD8MrmNnf7BcTowznCVEkML3WCaFpsDbp9VYmqKVsZnDaBWJeFHB9iL4NW1aonisZmvvbkNaysSqPaEoCMzS",
  "key14": "5hoikFbXtNKcQaRYZMRvFySYE2tw7A6E2bRnyBdwVqSkXrsccwcvdyBTriuXAfqgZXeHpgeBCrty7SqowUCDijxD",
  "key15": "dzir5cND3d69nwjp1m6vFerycyCKaLs2HrwTJ9ygn9hS7aXmooriv6kq4QNv7TYos7LuWJDbzpTE1Bfm7VzUfbn",
  "key16": "2huBWG3xetkPsknHr1q3xYJBaMLNopooFgrbudQANwYySgXEdiWEzefMUmsRGmsKKscTWF8r6UeYuCmHfR1FHUE3",
  "key17": "45thyZndxMwVatMwnmAUuqvYLJEVnKiz2QH86ZPsmD4fkHcXtyHJtq62Xw9MwKeJz3xARsi6pRfykHKYQLqDtGXX",
  "key18": "5BTF4bYUQdKqR6c8icvsfri6e4obCLHJzEy2ipXuTr4HmVEFgyoBL7Y3iE6TKvBe4oJsbaP8igTod6otaUKn4TKs",
  "key19": "vBFTuY3xNMVnxR8kEmFc4HHwEyrtJx277ukRiJ67peayr4j8H2wucxAB1zRvUhZY74iJ8ji6u7rsZ7QKuf9uWb4",
  "key20": "3ja8ySLFrHQYkB7vgPToRCGe69NWmdKm5pqQ5zZPDqSZvPrNU7eYhm4dgFKFJcfSZ53QZczC6NvkYCV1AXbkkphh",
  "key21": "64C4ZHebR8abzRhQsPpPGcTA5MBMmHZSR8fEdHfqzx8ru9Poc61EH5kMsJGmEevdpQASdFH88tLyooM82jxyuCwu",
  "key22": "MU2CesARRL7NcojDZHsosdgcs8NAn1v6dV9rRW8upS3SyihtUkaJPkcMB3qbUsDjZjnhzGQQCw9gkQy4V5RWGLc",
  "key23": "3TT2ejUaNaY9yRAnQCAxP6mauBvxLbs3YFWNprhf5452SQxkMy2nbEiXDLPcbFgLc3KQRRV57RPiQrFas5E7NtJd",
  "key24": "2fGX71SgNZgz2u1V3oAyL2VDR3Nvn5R64MdrQsjF7VKPR36QGy2F6rd5q3TD2Tp23Y4vEW7gTTLmtpzMacoAomdK",
  "key25": "11E7q1rA82xpwPSoNVqoXQKg8CMUxvARMPeQF8GiG6XzVqGumnUSfYxz7dmSm9gjC1v4yEs4d9BcVRCsE4T1KQc",
  "key26": "3ZWKSzwMjpe8NByDWFGNBBVCRJggjyRznfge47Lv6wWZA7NSostzpc8QaqJz3WA7eK7wy1Gshu21Co5hcWZVNoZV",
  "key27": "3MoehYi6UdzYpcBD6kaBEsLEgPntyG5v6pNexPCwEM51Ju1VvyHtnMAhYpqekuHeeBFEnvRRktD6SUdNSPLxUmTE",
  "key28": "65uHKoKyxaAC5ms2q9fx5ax4zi6yZMiEvfFjjoWCU3wtbyVbtE8B5w7SZNcVhz9DwaDjMevSRy3qGF5h6t51htzM",
  "key29": "58AhFt1G2UeZYrm75GBRhTKowE7PyEgevxPXa6wqb3qDqwAFkf7eEQRb3Nf2Y3xvqXQDDJXD8kp3YWFoeixZfpZM",
  "key30": "FY5dV1epwsV5hrR5MftCL7frKcCbkzJq47GZaFqzJB8f1abiyr5sh1iWEEKroVGJHs1kuAHjR674nAKhxk9vwgM",
  "key31": "5DYtZuCq8MgJW3jE9cueLTMYNrR7RRCP5Wynv3Fzu6akX22QWdcyadEeme5cPnaJukWDZ796GTVdg3XYbaeqHJTd",
  "key32": "5wKHX24CvuzNJuRu74mQXXwuGMqEWR9oWaM8q9j3orb7gikaZsaCaavXRgrf2GBFeb4rLfjGb1yDgar2XCmpGDV8",
  "key33": "z89kCdzwWMHD1ES3t1mJvZprFxqKA15ECf5LW9bMcy5jRNhXDUzQ6nfcwbyF6ibDFD2XZHsn7WBuLTgZDx4GbrB",
  "key34": "3fgwwJKt97bJTpbckv4e1tsSYQVR926k37pedQMJN3j5gBPwcTXossMxw24fCWVEFAuYS75JfPPuSuuWyo9QjQw",
  "key35": "4PvfkXPZxF9tq3EpZ8tFiJZmvmepkmN5KaadgBbrcNntzoqB4Fr1B1vzvpXV8pXZiJ98fHApJj1uT7Q3QrZFJtiv",
  "key36": "7XYb2ZXk4ceYPFVosNF7yYWAytRPG2srdVaoVeCU9CPHdEwYG14Nert4SEJSafBnCbRx8cbEuinh4j2DafiXVED",
  "key37": "3swrjnLAGw3nYMLP83tufggomWMYaT5MSuuAMqzAMYFSRC5PM39uZu5AMnL5y8uiKJbKTjJisVhg5ytqY4h47A6J",
  "key38": "4QP8oC6hcitVaLEgxUfzajw5CGDwZdiFXfRWy3DUfg72HKdh9iKrijMPxB5mABd2X4m4Jd8Usni8evBi6sfb7mR2",
  "key39": "3sF6s6TMeMUAq3Q57WT5izZAHhfmpLBQgVCpKhZcFNTG87roGV1MAXJTJ4saBwoHgnSn4Rs7XGEfBuubRa5178Ef",
  "key40": "5y4eZoKf3vgTHX3YrkmAgarr1PK8ftYFkAUfEGNYdsHtxjHSYBoSERAVqy7bxUvCTyozRbUc6Q4muHaYM7Y8CSCG",
  "key41": "3oRFqq143DF77JsVx7m27KA6uqTsDq4x23zYW2EFmTEZUrqvXT2jynjfN4azhoXputdoyDDP2tC6MBSEViNACRP",
  "key42": "61w51TNY2xGux4pHNJWBNW2PAnpUVf1G5EmuqZHkNJCRVLpcmnpgJoM3h47cBow11HpsYcLQqp6shtnRNQBCUwa3"
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
