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
    "NjMqz36kbpamEQ8TDzYtnJ45LcfkQKXPVSdEsXimKv14Gduuin71qNiHH3KGfhwKK78qbDbN3d8uLFNczd2fW6f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5srh7v2yqoaVFz3MDViGYmB6f3bity5XvTvfPZY6C48tqrg9WruViTTSy7NYqbQ3h1ZPa5csvpoa4WtJpwqexcSz",
  "key1": "2dNyt74JjBhoDUYpPL9kkzPSQ7doVfoK9TSQwRN9WiXDLRKjm4Ansv4KYHj9cQqgQRo6miYEDmVCSBc4e3G7pF4F",
  "key2": "4UEQ4NZWdqJJsVt8N3whkzxVZUWC5oVFfTtRHV5x17Kso1QFjZXzYVYW5VrP2XEtJyfCn6j4WkJT5uYi7ew8GWEp",
  "key3": "3JMKHFdJSV6KsMimCa2sMvngcPSEqz1dP22W9cupxT9n2yyMB2CKrHsysF1mMMQxF4xoXVenkR9f2AT8S6Miz5ja",
  "key4": "5YmwyqMGmEg4YoBTVCA9noTnQiMuMRdKQ9XzWSFzxaT7vryBtTW884QwU6w9hhdNkn88cnTyzZKMqqvGVnqu5AhJ",
  "key5": "31ZuPJP4WE8XDQpusY6knG2F9mSWr2MqB54eoEsjr1vvh5sBtRPZTNjhTwZdvxycw1q2hBYnX7zzVYtiKBSzaMqn",
  "key6": "58QuRDixeihgBCNZUxd2eyiqKxHVAmeZM4KzzBHQk4R9siGr5riK1JYQiEGRWZs9FsC841a9JJtFAug2Sedsk8s6",
  "key7": "2i4BrSBrPRsHSeoSrf9GCx2ZhTceufKd2zwjwAK34YMzuEQPTJ8QFa3DbQ6F3xBDsysWdDx93xTMnombYrgoS32a",
  "key8": "28t4ZYfhXx5p3FvQ5URWGUca9Y73dAWgYH3VpTecpius1TS2XnjrJsF2LPDjAYsCoxZwYYTte9TZ2bWYjywtDc38",
  "key9": "HDJMXymhcCgMKgnJ1AHgFzPidhxgCz4zgSMtShD2QxUcsZthJA617ZyR4JqB16aay5BUgKrYJVzHokFkmgHoka4",
  "key10": "58vfLXCyWGT53DeyxEc4fJuT5KbWXuHuH5EkRUSucW3BMU8sYzeRvEykTSzT4pZBsJAP3Dq1gQPCxFwsr3mTizgr",
  "key11": "2CnaaF1zjWDS43CiHQ9W3Tr9AWHURnqMTDMbLxoUZD9tpaM2KgUpAU6y8FgZdMA6esBg9HNiw5td4fo9Y4mAm7Yg",
  "key12": "5WLbyhNjrfqJxKsWgjyMRDYYL5WUKAi3CGkvJDGa2gcr5T8QNMhvNCiBURkQcsDatR7nN2eV4EZCCQ8ZNjCosKzK",
  "key13": "3ZtZMNJT4oqRnWg63Xqq1bQcHKJSS74RkZ8ReT9duXKqkPwZmSdz5NjdmHVvKTfvqEomkkE273Qi7Wx5c3ui1Nui",
  "key14": "Lr4jut8AJMA5GNeagQhuLfwtYFc96ngvTECwLHS9aWDpMWarFUvBHT1uxVT17pNyS624Ten6MvRnVX9nBGZkhs9",
  "key15": "2kQUWyunA2UpyKpmPrmXaPHG3A9t1WPWHpUFX4ZRcQjTTSFdVz5Ae6wJKhvUjXE5zywiR3ZtwhakoKWJ36YVcdZw",
  "key16": "2mvzp3VcL8Kn9VcdajYKpV5dLQZP9GX12stVCB5kan9hErHZFsRpcz2MoS7SYL62nWu8a1ti7hEAnGxqqmn8BhZ2",
  "key17": "3LFPn92Js12e9XFqpepsyRT1hWhtvedmqozJ6JLfL8zmES1EmsXdmWCtJeJB74gskdmdi8QEb31bNGTdMg98fs1f",
  "key18": "3NP92UP27jP8Ydb3GWCg68iJmHWV3oT1rm4RYPKjtGsaFFJUe1bEQ77H7QUA274HaXSgVZw561264u9iejdMDQDz",
  "key19": "49CoUA91mBkrMNXasdzncFBXMhfRNVovETtGvaAuPEHtUmxWAyEpbFdvvrRoVM4tDiHep3vDuwUVS7kj54bwVFrB",
  "key20": "37Rt9Tt2HMQ52nNxKvFtJtwgAbwncwn1Dm61eiFTxrYxQnqguAA8zrr5j8M1dc7iU3iZv4gjt9hvEhhWxbPxEsnu",
  "key21": "29V8zFbwVFmuYyFYhQ1fwwNw7JnfvqFh11Vo5nJatx5ELRo81rSXWgbULRcJV7FN7BtVbw7i9w2kjiZFWmgzz5Tp",
  "key22": "34ojUBU8dyVbbTPMtA9RivDp51LZ4NpnrgFsTmKZEbXAnkLoQV5WhFSjz8tgMo5ARPYBcTkbaokSmrtZ8vmyQivL",
  "key23": "3wi3Lm9Yg4dPDAZmbKZBNGb5tmPChjvp6maGT4eMAD5svCCfSnAH4tb4p59imddywDgK2Zv6tZJhdJ9AaQzm3cmy",
  "key24": "4CQ8hwjHDXUrU4r23QYGaRDucitzrWXwP7w4FZCu64Kg5SzeKN7RH2xki34x34WJbJRaUmibaavwKM8respfWcHU",
  "key25": "2y5equcBUgTFL8srx9Sd6ZFJLnqKDyQjey9RDdtw4BjJhZ8cNso4iWYMUPz1UXjLnH35pvmmZpMVTwrS2M9pM4WZ",
  "key26": "5XeUAvRMihCCT6Zg3Quf9tmkQCfVPJrV8EoxyR5FJTYuUmCRnHi6CaMwburLjSd6Ev2AReDcj7gWjaCKXhz3ZN9P",
  "key27": "4GKsDLLdSYeT7HohhDSoZwVpp6VPRK2TkemL5EmenP4BEo9EcMAtrnUvCy8fy7C7fyv4AEsu7JFVtEHwzNCF6gzp"
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
