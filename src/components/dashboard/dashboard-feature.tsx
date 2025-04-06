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
    "5JkyuyyjvKiZJzPjxFt3ym4v1eSgjjf2tWJmrYfH6xK56JsStPjVnBnZCAupoDiNT19ydWqfRLC4qsuU52kcPiHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VcRkaL764ug4XV2ZKRD3HJu3ybTKP6tHdSnmCGPvpcxrf5tjbf8ue2wvwDav8K8JxBn7rm2Krks8N45VanuNPFe",
  "key1": "44pKm5ZLczExt5AAtsUHvYFf9DLWSLEJfW7jQxeGVr5RghPERkWgDYJD24aeZZQwJRuqrxpd2A3E4AA4XF8UQUdr",
  "key2": "2txb6wmDcupvStBZrudt4pVZd5EFMx4sagThdSshxxfTki57Jq8prRJ4q28ZReTKNvxcgv3DbhJNB1TDNTe3tM9B",
  "key3": "2q7eUG9YTFFU5ZD1TAWbLtDBqZwNGUVxAYZCB9LKDkusSaeg8H9b521Vu8toMjot5xGAJNs83E8bJVdi7PThMrvp",
  "key4": "4daK7GroJPeQgMuiK8GWyttoV3RaD4W463s3QtAoRw4WjVB5c81ovsU6aoCdpNtps8oa7EVRG7rFQDoPajZbtdcs",
  "key5": "51HFsQhAatemZ57Zp5qJ58pfv7CHw43TLCJfFjEHNSqdVV7AQG5ZTLQjwK9CC87LAT552wtmDLogcCbmsK6wCPYL",
  "key6": "d3vNse2hYSNeakAPGe9m5mgqs4XsHLtCdoq9GF5UafQz4sj884aRTER8ZesCasqRwrube3Z3mFehzrWkfXCCjN5",
  "key7": "44UgDVdzWX5F72EZ9VwNDbVNAcHUunjr7eow6sEBgJVnEPYGJgDdoUHMy6Fx5Xu1viDnFNoBmcBD23vzUSLtB5fR",
  "key8": "59VXsaAie76UwFpPsrLpm96UjEpnKUuESYSMDcdXnUUz5JDGBcc9nKbyXi3EghMz3yZCRwwZHqRSnPB6rQGSGQZj",
  "key9": "5ytXbVfP8rZ57NvTYJeV9CWTAY7SasJoWmMBrAm8RMfThp9EuPwSEFbvG1QwF1b2dDBm8P8kVM2P3wuMQzbwdW3v",
  "key10": "4qnJWBA4XA2WW67g8ZkSrJ7B7hM3fUC7KcoeDAJCR5GfcNbTxpRk2xHkP6tZhtzmvZeH6cqFBDHTqPjGWFzGfQzj",
  "key11": "hUKMTRMUgdqJXU7Fun4Wvv5nmkuVmoXb8uQiMcuSC4StykR4dqpVnHB839S3EonchVTHH8x5afVTtf1AA1gi1Rf",
  "key12": "2C8VY5LBaHaSsM1DobcCuQff44dtdFXQ5LLAu4m88MQrk2T6FdwxC3h9mzwDrRCdf9vqtYvNi1gMC38y6S1eUAbX",
  "key13": "4ekpuQrhLRsJn4BZRHgx1tsw63VMV8FCAgehGXmV5Afpf6jdHD6mbPJvaaqF966TWeJPi1bXg43PRscc63pSWkfv",
  "key14": "59xqmMeD7i71bDYbewmWTpvp5Z3HeF4wt2gvu6TSRXt4G3a9wLBfgpYCNJjzm5norom7s38SLdYoqyurUbfrvtR6",
  "key15": "CZpiV8tibn1h8yNdDEhKaba3dqUEEn38seBTRAEMJWTB7KGDRphxqp3sbgpY7aEKhzrFKUFTEF3y3QsVDitSz7x",
  "key16": "4kM2WsHFDpVPcRc8S7aatDbD6ccnnLdrjqDMogDHtz2gJ2ab4CNEdM6WY9yPrY6bKVrtz2pA5MWH6xBztcx3ACfv",
  "key17": "4snKKfhrAWPSCBzzNQsdBErzVoWPLPgDDav3poVr5gQJRPeagVL6E4h2QJWFQ4Gc5BmHqry1DgoM3VZuo2g7BA8d",
  "key18": "3VDc5r8EEkRjDvyQ4UiiVNSYFz6oZVWPDv5WvJBkd3s2bTiWJXXAPeoiD9gu4mPLhj9ZSBaZrHLjKhHck7c4k26C",
  "key19": "Gw51mp2crbg1HLsxD5CjU38yMSdwbcLjvoNf6rQPdTreBtR37dqgYfYoDmzFAMPx7Yn2MvVL25TmMZMawFWHTXo",
  "key20": "2jcs8Eo1k1HxjFk4WfR3kWTPRT1qUpBjAqeHxfdHTBeqTzZaeFz1NkCgDpQsBxqqdudThCJ1oUyYFv6mgcBmC5Ao",
  "key21": "39WkJ6jXsPqpiS5b9mcFYLbvqgDX39F8UF5oXSM9dfM5DNNmXwpBMwHoySqSwfr2s1tCPds4NsFxL3cQxsdV61Jk",
  "key22": "5MyS16pTeLkm7uix3r2noBaYLufTi7ENWehE1KegUKWf9nma2msszCXVJuYbk7xC4VZLy8rkR7d1aGKxyHpqEtny",
  "key23": "5j6HSvDN9W6iL9Ev6bFgLFyUGbjQHRsjYjJALL4PDG7jKgujufmw52xtXrXzopN1s5Ak3y42tcCXvGUzxHsEV87i",
  "key24": "48uxNvcEYDg38wbH8dHqmjMqVdZuFTSbUzZJmc7Qz7GnPbzWQCuuvGXc7m6hUK3aK4jAs1BHKJ16yFzvgWV7XBjr",
  "key25": "5Jc8Wa8VaQZc6W5Yv6GkYvkJNFiYPxUQVnVZY2jEeTyyocPDRVrD1PfkfEXZTdwxCyRrvvuXffXnjGopPg4UV7tu",
  "key26": "KD3LUeducieL3x9LN3HMGHbd5bPLhdGoE3RPjDJnAzbNZKAAqwFvo8U2KYzeyN1bJxR4Cgv7cxRqDd6UHDZE7ZL",
  "key27": "3GLyR9Xi29LvSHuD9rND1M9W6QETGqi8gHeuLMdff4nciRYbLAkVdHTsMV68vGN9s8Xd928bw5H9denGoCWdH8nA",
  "key28": "UF2JSjE3AkYT6HcuAdjw569uc9AkvZwskoX8qjRXnzeXWL9MwYZTv6U8bksVWrPsJXSVKg2Ns1wbQXYtMAuuLPZ",
  "key29": "4zu4LCQXmtfkb4b4zEnhJT9Ytds6Sbgv2brwEwfqWn6EP8Me62HEh8bg4tV5bf49xgdFNyAAnGJ7i4STWfTk4dHJ",
  "key30": "3r6bGhDDwU3Y4ChpEPHRYBhDyMqeWh1PJHRePTEzPDDBqPGq6t1QLrZttk9mbk4EPzGcox8jngxZZxkw8v91b461",
  "key31": "34VKq3obzMZ5PFnZqfn3aft9FJeVT4QSDnDwE7HBdJJEeKR9JQ6UHcJ46aHMRZvhKuTLMo7prn8G9BtM45itQGNh",
  "key32": "3XEDvFc47Uu2PdxZux4mmjAL6dEswZxMukRWtxJQeUV5U2JeaLtDYEu9uva7ChNXGXm5hd6Fmf9JncLwShrbcts",
  "key33": "59tdNES6577QRBhX3aXMwUE7ZHkGWE66A5ftmxADfhYhYAiFgWJXAwSy7wHeNMDaTXWr4ZWXAuPYXgsCyBKT4fku",
  "key34": "PwMGGQHnxVcCJzKfgdXs8de4byhV8i6QG3sL18wwKK91VsS1nSXKY9hrJKjtSt944QGfEacQMXRgqVgb1sxVWMG",
  "key35": "4qyxkFvKfdApmaJCJB7J4RWTHNjZbQUUZm1WugtpS9zRouWnPpL5XLXmo71fgy9PxUgiDYqx1qvjfGqw5QpFh4qx"
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
