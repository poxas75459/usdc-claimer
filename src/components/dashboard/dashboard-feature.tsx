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
    "2Ug6xbDGiyDySeo9PuwW5WFzSgPGUMLnTXUFMtBEnMB7wSgfcs94LtLMTR9JhH7SLsWQJtegRAKwrAZ5yyaVr7oW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mMZuTpKLJKCMQ26XVCEKzHnbBQvE6HKwbmL7bG8F3R8tpfRr8oLAXa6hT1kwefpVCNmNjRjZfhW5tbyij8FfGFa",
  "key1": "42a9ZoAfnN9fdq6NmDPkhzTh17tG6rxmAszYbnWjHDYeo49cWXC9PG1mTgUeTFktTFaADrwwbzMwcpdg9zn6C2VL",
  "key2": "4NWoPYW3PYJY28m9rBt3QkNeMVesUCooHsWTnV9PJddatsAnjntykGHXg593ht4cH4jbJCwNPWZfvoL9U7hJD8ZY",
  "key3": "2w6jEReornJbEHKeYiwz6FbyXztKwToiQvncKhvrw8iTFhZUUWQ2UdqZN6ptwZ3L3NCsmKH6T7winj5UsmqWnJ8Z",
  "key4": "qAedM4hSecceQ71rYYVEmdooMwjdrEY4nziH63QdEZp42zYgqmCdDcPsAg1SyxYbvrUFPpXFbdRB4irKniTQhgd",
  "key5": "4sxhn6iVAaqGaEBxF9Fv9GWtXifanKBqYE6KN15XdgXe8FeVaFbJ3dZNgUx3VUNjn9tG6JV7F7g8XywNgC4Xma6P",
  "key6": "2tLeCjkDihD3QhKDPdexYzoLtdvQaFQmUihJvvWtqAjwmoqm842karwXnY2fwB6S7Ukv27soSxiUM1LsR3zJGeAP",
  "key7": "4K18iyCAMVwTuGFkEqStW1NKKgRaWrZMpm8i2iZucg7e3k8hsJnah2i1kM9duXT3hmN1JDdDp4gDroLHMqzGhc7",
  "key8": "2JPQ1wtBzxiKYQhppMZrKEUNoNrXYS72crMCKB2vVrTcowTEFYpA3ATniJATaybu7Teyq8ydX96qdTiMLHXiFGHd",
  "key9": "5VtnjofoyPEkZch63C6XrkEhrgg8yAYTjyZvWQVYhAuHxLfwGsaazm8aTDMKzgCrxpGV49zmMb7x8ZSX7xPQ6Zmh",
  "key10": "2zzrc1H9qxQbxT7ZNPQcwbWvPcuHsHos9fzDdMsnLM3SFXMasLAreMFvPrHRy4TVaQgMFaPnrJYv4mghmXC98WYs",
  "key11": "59mCnUfHS9soofCGwRtNvZpfNdC9xEdqjHBdr6J1kSLGunjqbcZGDCYUjjX2F3Dq4vc1TRZMJNZzWLtjNnakiDZ1",
  "key12": "dy2SVxh1fBKaJktiw67xBStkLMWerAvRaWiPHTc5BZHLCK5m9JobwvmwWNDtyTmC5zHYJG9XhdTt9baW1WCES6L",
  "key13": "2jJJ9xVs73B5xtt38rxGb2vTNhdduLgdtijWQdgpqQLjkgALHvEf77LrKVEtuvCMVwYio3dcvqKdoxaZvgikAL8",
  "key14": "4xojiBo54sSBPW3eAT4c1DE6B6AYqfr4NDTUnoAZgiGefSrBKYH6ciwC6UhumLNa1NStA6G9MGAAEfBomzi7Do8M",
  "key15": "ALPdjP8fz2CHtyJRfJEZXE7t9hcFb4Dhdfs3ykQ9rEoWZeCB3Kp1aU1jSyf6pcPUBbJMJZhbSPUkQTuwouZeAjS",
  "key16": "5NuCYsMBCUPfnsfA3xe1MtwsxGy1UxP6EB4gZ6yCG5jeevWmsnjNaitLPxG8sZUm8qnSWoaMmq1Z1ZnvcJwUvBGj",
  "key17": "5WfFuihEnYQHrAveD8gri9hPyyodUWLAof9AZguQH5NeTGvnZcRfBw83AWEBorrqinYb3xj51nVMirf8DLWSUDrc",
  "key18": "5ChzoQXP5rQwubybFSVFLA5ULSZV2Y2XPUz9RfyQrQiwqcS7363mVU7vNrP49oiRMGpqEm5fHdXvYGKocZSozZZg",
  "key19": "GYNv4EECuMH1AwZTLuFwJWAMkChCapBZnD3HjwsNXS2izbTzpmX9EJDG6k8LUpDPgpkqhNgWwL4ko3RBbr7sELo",
  "key20": "UCKNy1fSdRFBNBvhpgMLS99KMX8CZj7xSoRYhFCJLYedcBMdvbSrSsGjA2FqjAHf9di11r1bx1ZyhBkX2ZsSoPT",
  "key21": "3YgiXkhoTi93sQ5Qcng49PA4yLGhDj1bwnvZXpocp5kvPqxgBaBnZu7EE4Z5HWqjg6DkscjuPhjUGUXM7pdhipU5",
  "key22": "36Wneh24pYZQjtMQ2ycjXu9pYWDVz8qyBh4ku4LtRAvDn7HvgdqcxfcfCgDUF2Cj45TgyviZCCab3ML861wdXPfS",
  "key23": "58pnk8TZdPT3A6sfieAs9LnPiVpzjXkgnTdFFdQ5GgWRBFHWq4HPP8ATQwi3YWPs29NwHMBMkvsPwEX43jXbpASQ",
  "key24": "4fjNBtogPSnb2HmXjJA8ESDFohZaPP8bScdsTuuh8SrJcMjGGVA34HYXXPGMDAgLLFhu9sVqfHgNoAjmhW1XHq7Z",
  "key25": "4y4gjvHpWkAryaZ8GavAeWRW98CneDxBfC59319ykr8wfBixoZSREVEySzZ1PWTPuMrteqwYD8VqA3NLFoCctD3u",
  "key26": "3q6nySyTuDjoY5PfMjMcoSVz8qrFcZSn7k1V9ZhfNkfhD8cLaxhRXQucAinv2NFnL8ZdPQ5f4HiWu43Zy9HazjcY",
  "key27": "4aAMqGzR1egUQFzuziLe5wcjwNtW4F5Hk7L5Xxf8Kv9pXLXhX953mBSQgPksVBJCfmHZazAy38j3VjeFhc7kknVE",
  "key28": "4NNizKaMb5fHyoiXK4uomRXANWhgCD6YgQKWHC25mYRMdLB4qsH3Qrn3bTbC6M2Ta2pQsas69anzQjwHjehu6suS",
  "key29": "3zSwr1zBeVxvAPdyvRzTes2RCSLE1yQFvmccEUuA7YfDWrmuMLVEXtvKwMdY3MqrbuaG3HSPEVgmGCJK74mjn2gD",
  "key30": "52vDASNcpikxfU6yEQjexvnbUTHnzMtLsV9iYY6zdTu1PKMURTaYEjSFHcM59dvGqx17aXHmoahtgGeJG78hBAgK",
  "key31": "4arHFpePWWz6PRaDqatMYapLvv3JVdZ2See4vAr8fYxKNvt7ASvgefUSFss5fsbg72Ar9rvxjatvnsaFmG5uHGfT",
  "key32": "ir2XpWGP11MHPZy82qevkF12C7ZEiAouyZVDroc2LT757YYmq2JqQErZs7RVWrSMWvb7YETiXBoyzRMmyc6xstg",
  "key33": "5VP51s3ySthD9Aa4HWMVKxwKHW2MogWt1tVPLPiJqRj3mudsEMY5xaKB3z6BuVy9GUot23h3TtSPtShNU84WJRFA",
  "key34": "2o4YmawqDGo5zD5ySgFzzA5Xab4xXdbFKuVeFnYBjvbV1zUQNSV1KfqURwEknfX3dNMtB6qyacEtuy5zyCqsuE2Z",
  "key35": "YNiP45Cs1mBNnwTc9nrs3YY1NH9twA9mUN6nVakZ8oj6wjrHoeVPKhu8FJ6PQGU7ckhCpTBPQMBdx3SE5DwnBvo",
  "key36": "31GhirkPn7y1nLaxETydx8oAdPLL14zEmofqmi3846PQUkLSGDFCqYX6FxdZhZzScZDvWj8n8sVeMXezeb5huWA",
  "key37": "2WSBkL1d8RSqFMpXX3CEox2xD2rJ8dBBUWrvepBGaPFdYn6XZnSqu9KHca8XFbup1LKrVqN86jYAVa7R7CtDaPNZ",
  "key38": "5MHrEEKnj3WsQX6h9K5bLdhbtKqSh3odMsQXbx4kYZbA9RXDZv597ZFgT9YfxCjTVsZAvandMy9KFKy8Rx8aAjTC"
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
