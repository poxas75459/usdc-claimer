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
    "4Y55fz1rFs1MiBX3Sa8cAdh6ReZkBuZYLWaJkeiDVuSrqnWkQLs4Tq6KMzUTEmKjn8GEWQP1HjUF6GBTXd3vCxap"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NEATdZN3rww1UnMFre7ZzJ9whm1FswvW7EQZFWQz7a9Qvzy7rMQQPsBR121faUUzbAgsFSJLeAB6xygtdYMxmiP",
  "key1": "rPoGAc3aYL5HjMUsDcc6xiuvvEEd6mxmm7Q9zZHbGZMZQfChnJsnW9QXR1Nvw5M2siLQeZ2DbCki8bWqaqzt4SB",
  "key2": "3jLFCZwGZqzWmtJiHBZuWbyhy3jwcybr43VZSoVAiGzsXUBrGcwQeQoJPRNWNY35Z3NSD2Vut77ZGiAP87zraGHd",
  "key3": "2jYa9JdBqKPc7rhjWwTQpRQTzdErYvxAgJnE8smzvwMUrLpJuq4GkyBN4AUda64y5nMz1DKeQVajUPT1p21WjLRL",
  "key4": "2BzxJ7EFpPENVtUMwJasYXJx9Pr22kr6d5iThALAJiaxqaQNrKaGZU4zqXUJo9ppvntR5ViHHLXcb7pnSHY9P9V3",
  "key5": "2duNtAh5RVUiaMrq27dvWvKs2pNmYZQtt8LVHJyjdBQnJYaUdjWN4z3ZBqSgCQZhiiMfpZLutWi6aU47KmKBMqcK",
  "key6": "2KVg6oPugcM1aMvTajQeFRV55wLWqVLM9zSavoEd1MKNTi9EjuwHbpeQeSADPqMHqpZDEck5N6pNapyV26WMb7Sr",
  "key7": "36cvqDZDQPteWQaTwiPVVxsii2xCm5qjZoBwYZyYCaYCmQfvb9fyr2Zzz83JwXfAYfayzxg9QfnKjUquwGTHe93g",
  "key8": "4KsXhidGYZK2F7Jfvzs4xkTsJspe8UExDMKDPPURgexjyNs4EkofrEdAgffiPST8Js9SeaCT4pby97aVCaq7omD2",
  "key9": "5wjkCyQaXvc5zRH1Hceoc1DHYtJvPPzeoJCaSBZs73TXsEP7WcwQAydZfJcEvXMwvxxkqYzJ56VzoNtbLNMriLMM",
  "key10": "2avz4u8XKg93ZGNX6VU71HPtkSeVmZeNd9aKz7BHTxZS8wbJpmXPTg9GN8ccTqSNuHRvmyuSonYdrXG7BtR8Cx2T",
  "key11": "1ic5MRUia14RHJn8vzzMd9mVRV9JMvarTSVPVHdG7Nc1qev95VwuX5t2L7uKEwrSCCLHZKAwYQpbKJhPEAPyyJi",
  "key12": "4uNzHVNf84XpoeiJNKGUnyTYTas6kK1bv1ZAXFERFKDKCAmqdQJaCqnUCyzznKVCP65emxtaVcwon8GvXJKNRgmy",
  "key13": "2SNSdVVyfuMYLLNx5zxDEhbWi74GP3z2fNpzdq2exmrTeKSDT69dGeou8uCCtFMKjx8BarN1WdpWkVbjAm4JphuL",
  "key14": "5XtUcUapkJ6uJcv4ghFPUzftUmhCs9PjG93zNPaNfQaGNhS7w28f2xuoeq5qAKhSg7FHiQNhPo6SvrZ9EAxQzywD",
  "key15": "6fQS31hm6Ush9hihb8BRzJ2aqBRcbwdtTMeM1Vpn6QQmmeD2cVt7wbCv4vMZ8YeAvA83W43AWHx6CNqYSxWFDVZ",
  "key16": "57PWu7uej2ktqHodzWy8kgCyRjpn8a8UVRhhfFxKt7ipfpmju6UYU9XPogVexTrYVv6pdGuG6VynJCgA8Ksn6m4U",
  "key17": "o1t85nkqZb11jjZgRQW9888XrSPWxAZJEDt8UD4eLCM1x3XV3Wu6xW655BF7PhekB535p4PrQRTQAqhnuYQQrMv",
  "key18": "4kj8HoZo2oE9PWH8zeFsh6GrbZnE3R1PW4NZeVA45vrnc6gy1FrLfcj8kdLmcTgebw5RXveRPFJeiWndT8iPCnz2",
  "key19": "2LCmi9rqpZNd3W7UA8H96ht64vg4JVPU3A7uxsmP46BDbQpLKNJJXeT2rFTH1BnZ9B2yDvoKbV29ZLNmMjBN2nkV",
  "key20": "2jnDD2sThoYMTSJJF9XZ6WuR2kjJyAr1b6koyBTSJgqfRiT9aMQUQqBtE1Pyc6DaUkNaBsAy3U9Ykfgv3mihriNM",
  "key21": "mvx1XMHdNfC1KDTemkhyzpvAbu68SZW6bDkkmCqsxnD5dsCfYBRshRGTd6JHzDdtfDFqZKMJbrwZ5MFQYsReRob",
  "key22": "3zjyDFd7abfGi3FpJvDkobqHsTX32YnXybBnY5fShdHQuejHdaFiZrxZpjzvxBzZpQEUGWyms7KCFrvZYQ8psSwT",
  "key23": "288ft4bLx2JqKSdqCK91dvnTvYDVBt4q3fw8XJKFAR8CZTMgrfWrSxsGoAfeHpmPGFGPZTwbPa4z1Jn73hhDSqDY",
  "key24": "4F6YySg5sUjtwuQWKTSuN5QYf8F3PkUoFjPDpWtPsamwdyErKX5Xxp6z7ZMJkxiUHxnxaEmzQVGqDJgq55xGPbJZ",
  "key25": "63GViXLeEYEWR9NvADMfVSZdTy4xdohu4KPMRZGrma8ZpYaw5a1UjWckqpFcwRHgJ8Coa2AEvbbGH3PhSbKttKd1",
  "key26": "3DhNXZ65s9oVk9ZBgRTZ8zhwTBLaiSzPv8MPDy22PYUWqhbF8CjZS19xW4yzMLJDWsreXKfmi2WmMVamZSbwZGMu"
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
