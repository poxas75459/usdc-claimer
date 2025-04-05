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
    "4HribcQSoDhoNkpH2UTMW4LA9iuJg7Fd8Duoc7aJXCWehtiZcMfKBTGXfJYvozwyFTkxAtzECA8H8A72fqEnorps"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TGCv77e78ouUvTLyPEcQz5c3mvKgbRoMTSvZaq31gTksze9xBZcupXAB3j7hJRgAqimbnmHKsR2rWLBH1GK6NGG",
  "key1": "25T8ZVRS4TzYY7Lq882MKQjztYdnJbKHCwjXJMTEFaqoUzXnsZSmAHRDrHgNbsjg9yqH2PeUMFchWwvzmrUUdiDn",
  "key2": "4vC9KtMQVSFqVBVpxWFg65EzRnSC7jxQxNWZz4ksQPgwpGaCh9tRgbzSFKPZK7Qw448zC7Et7BNVYGkDzCcCaceK",
  "key3": "5zk6WryhH4EVAzQaL7ucaEqNEqsWS7iazqEJbb8gRjsrzvnQWTSUiWDb9PieECvujE9mVJ8sWPozF9SLk7t8CVYX",
  "key4": "2sYVHepzrNtWv5Kn61zWuBE3U3NMDECByHHCT74Mid3yxy7ARiPotp1uTGNmqL8ZVpJYHebRSAqY7BkMeiUDRJPa",
  "key5": "4KytRG6zi8HgsyNPq7ZkpnhyoDtHADsu7APM8mt6zQPpxUijQxRm8LAC7tdbHgeAX3DK9v3iaJSKVZkw1KuLQegg",
  "key6": "v5oYwkfbb97vcNSbvYuifc2RMmpyLqhzDNvGgRApUYabzEC9nbthwpqME6pN7jwBQSHZScJqxJWDGg6sg2Hx6Vo",
  "key7": "Em67ouW5ZHXfteXDkMr4n6ijj3kUpSuR1j8iakeGzKaeb7wRZUWiH9XUKeFyNMd4LFmReZWF5Mvj5f7u5eMzfiZ",
  "key8": "5JCsBERRrofvUapno8j7CKvXdPnTk2NtfoGmmgh28Vfgj6uhWT7SqnrnKL1NjxZX8fSCVvV4DJmS31MTm5i4amjV",
  "key9": "2oE2D91HDfeaKQHoQVQ1pycAXbRxuvanj63Su2V8eZGyEPDZ2jpdgoJXhkfga7L7fiUUasqNCyZCiX97qTN6uYL7",
  "key10": "2j9AHpZELLcj9UdPDmXmDAmeMm1VDDQc2WcfcRJxEWbcEXBKBxKcnwoUdqLYoYrAgXk2iKLjFFhj8ndQrcLJt2Q9",
  "key11": "aQPQUnNEcRpzJCsAt2sMbCkDa47ZbMJNCWwSihfyfoDpZ9sELyyY4sJ17oAD4vk7UN6hFE3f4rG7WpxcDqbfLjH",
  "key12": "33vCzWbkLPswzfq1eYpFpw6oZnamuVdREhv6HKrHQUQUHBW32yeKWj8MFqG221vnPAqDUUVn97uS4epK2wkg9Y5d",
  "key13": "2rzpuyV8VxFFBQ3cwVSjq2jc3rnWBcPkfeGo7G8cy6kZ1XzdzJEHJuwafacrZmWrqnjuwtiJ1cga2LvZtq73gdiv",
  "key14": "oLpNtByuU4qonm7ufPjZvJS6NzhC5ZtTxazVJZJtsr7TonXzud3C14EnoaTNtRbYekLhjCtUTTuGaqjg5Jfj5uL",
  "key15": "3LATbSb4NmviAd1CCrhuooQcLnb3gBZ8YtqhNznvvXZ6CWaA3Z3Jdrg1kJmBSkupm5zXLesHZmcTZyKq8VmY3KgT",
  "key16": "1yWKc4hua1zgfHBVNjZegFFBFwZYEJ897AoBgcnCGbtDFtbgYPDpucqvCkJW6eDJBCoZofUPt4nQPvcuAKsWaDD",
  "key17": "5z9SMQQHHbvneQUafFLXaH5czAr4N5TFc8iWQcxVwue3r6mJ3Gvq7Y1Bd8wkxym5fPGbWBos98twTur7zGGMGjsy",
  "key18": "QyznGQWYkqPjLCuZVV3jLyt6q6NF2uNFJiKUUKxmmSdcVhQ3ZKuHXcUeaCF3SYRexZ6KWs6idjVMZR2BiLxUdFu",
  "key19": "4Ntsx5GzKRTi56yuKta1NkV9Mq6YckMymRzrnKSMLteTj4fmbGQW8ymGWjBqutGbLMUd6nJM12SrZubwW6U9VzGV",
  "key20": "yzV7Nfi6jmL5744LCVTr6LbA529ye7XSRG9T22zCWjGSt8BUqe7JRHdy79dLaV9pFDRGccySoZMcfwAveRMPqzG",
  "key21": "328bxgG3Wh8cZRJpknxz114xYesshHJcLZDDkxSqHYwAQuG1RCs7gCp64SXPMdk351e463fLSPL4d3QZChHqvm1s",
  "key22": "KH4drZsRuJcyzG4TpxpMqjSn766L66BaPctPxiqXX1ars21sK3NeQQM52FFR4PHSdoaeHpugoxn4UL29JkbCLKz",
  "key23": "4LqWAfFjfzN1hw63SZtcpbSrb4zUJYZfHbHsFuN287whDNmkmWjErNec99SeNL7k4UYjeX6MJhA3ph59xTktcpUy",
  "key24": "24mfjzW3pSjjNJ8tkRjacFXFjorFnvFgTcWjsagQWpdXxa1LmhuFRRC3sYEk8u6X2xVTjoKznk2i7AHkX5Bx1Vwo",
  "key25": "GjDusK6gZFSjvxkg8ZokqvGgfGjwC8Jm3c4NH7yQYNbpqUUtnks2bhYzscNYDxKRu1oasfMp5o6qSp44LHze91t",
  "key26": "4AFLBxv3H8mkJRFpeCNDGG3hy771YaiMk5nCAeUjoHZ4J7nM3fCkPhJPj6U3ygUqtuHpvyF4mxaDfSsqHPgH5nGK",
  "key27": "2aU6ghsYNeJoseP17XM7mrrMHDuwgY8LDu8fwydZ8ATFkHLMWyWNU8Xs9cxMqq6BidLqJbmtCsGgJSC6sQM3EbxV",
  "key28": "5PqqL5zFX3XPvnn9MEXbGEDPBbjfb9bR4GKEQ1gPMfgo9MyFm4oCynyRnMcTmu1e3GJvaruybZxoHL8zuUkQTDVR",
  "key29": "3kSraFnHLmZNXZPmDfXCTLKop6g3U1QLo6yGZYmsGCeiDsT2HVpAHNcxQfMnT1GuZnvcpPBtwDz3AvcMc72Tmm4E",
  "key30": "5kE2i3rQReyT2U4C7NSdtYswj8wq8UZd8ddxuHvj1tg1zatPcTFMG9YaY6rr7rE7tdc8pGb4cL1VxF2hGbZDNK9i",
  "key31": "5QeXenqdLEc8VT9WygKVpRFPNrmuFJF33BH5oQJuexp3PkuHqabtNPYLf2DxE9EksvdE1KqaMgpS9K94L8RqRvn8",
  "key32": "624jGvYx9Feucc5t2S32FjKwtfZeE7nCVSumjRzLqQhAbswKVN8PTEox1APd6FGzYNHCZQXy9ZN7sqZT3gmRNmAZ",
  "key33": "4mAyCnGDgSUEJBp7wWmWR6KJgvDnYGCTUwMfWYpPDgZBrez9HeNjpBSa4o1H4Y4Hm9ro4tfBK5RzHFAewRypTgga",
  "key34": "3TLgbLhyFGcZjNLybEnQKEXkmaxdw4gfpRoWdfwMRsoJwC76hJQUMa1S9BUBuZHwc8qchkVMDYBm83Wakimb9eu6",
  "key35": "2m6nnP6epDQwm8kWPtntQ6dB6PXeyi4UEwukp665erinwC9dHQCieAgcvGDjrf8vyUgEdy7yNiyD9UwJKQPnJyaP",
  "key36": "5PaogB7jYPFFWv49tqEFgjnha8C8iDdmDGMi1DG7sGNfKNAo7UfdBp6y2HLV5BxC1B2yYdp8oGw89kfPatKcSite",
  "key37": "5AfAfNEH9UUMhJawTSjwCZmosHiLptgCYv1hGAaQWGnKEMFfBN41f59ackaYxzPfC5Tv8px7vadmwWAZYa96yYmx",
  "key38": "2QiZxDqx8y9rWB4EhMsk7tenNjzXaivbHtsWchvsXDxtz3YPbgK5jzpyB7K5FrmBh5ahMW1edpejDvzrVCrqzWQj",
  "key39": "pSYLNJRW9X5MrvG1d3bhAvVh3SHAmgNJetwyWKBq15indXtc5FLFP1hB3HJ5RKik9bskSdi2xfEb7yQZrxzSGFa",
  "key40": "xaEdydZMp7upM6b5BkZ7HjbjWH2c3VJo2kk8ytCGpUBdVnqzSW2WqSFcw7uyjsqwc2swwachpcXswJ3hxR5evVr",
  "key41": "5oLYrj3ebYtevJh2y3f7E9Sf7vaJ698wuj6vRWhzktbJUmzdZykKVGJfGrtgZVGVw2qfHzAWhSCd9MLuxwe2tajC",
  "key42": "5cotjjiXGYZN87ExXX3cyYjbsUrDmFrJXbjoGbXRSsJEg3VZRNBAX3NCW5jh26MpQEMAGqxeRQZz7Xae1eRKubPQ",
  "key43": "5XzdahSwV1o4Qs4ZEZidTZAEKbZQwiFM57QUonewxqojuV1yZsxPFGtoXoWHKiABZg3NziC3aL6CaaWfY4YiRhev"
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
