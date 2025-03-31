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
    "4JKdL1C5TnP9rfXsCbDVYoLjWrUfHMmGgVvTysGKr8yZGKag8s1LztYvqimr6aEZjDQC6fBYnpyNkbRHRTaWvEZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UKr7X9eqGxkqy2jbnQoZEi7EgGCo4qH8wptwqzkb4yBXUPZLAZkM77qNQR3aYZN5CuUGZ7GNTBevYW9wvqCLsDM",
  "key1": "4Vbeq1TXSmkQzEkiRqd9KW6DzTyeia6Ath4wfvVz2yfiaVX8x52Fi4JnKw16qCj6sP55sSYG9VQFBripGT36jT5a",
  "key2": "2JEkR1CJFMhZiQXQmiGgTuXin6zkwD3mryHRKWvRQejQQgo5Tqjf4eAqAErNX22hdHdMusYD9ycc1gbG27a9hCNo",
  "key3": "5Wyu5oFxRWL1WBSy5AgUHu467Vhqa3Wbj6JxCig5Ku2i3Kc6zjJkFMDhDaq33vcGpTiHHGmVJp6L6L1L6513Qg8K",
  "key4": "5ykHVuZfLqadBEiJ2ydCij4SPbeon8orYHBEcRm5fn8spaQfiVz6W3TtN3Vv3Pzmo4f8saUxvErp35LWGRani9Mk",
  "key5": "5rjUHCYyzkSwCRCcqMMxZPD36z8ou17z61iM4S6zKPFE8JboB1MMvdE2HeDTKo1Y8hPHN7E6t1maBThCCQzi5e4x",
  "key6": "4KB2L5AAyqYhFSM4Hzz5UjNhKF2rf9pYaekGBv3oVPbaqGpQzASm7D4vh217A67ASDmvLjvQbz3chXJ4xUz9f3yu",
  "key7": "HK76MyvBd6SecrjjanGyhFdrrDcX5Y1yGhTTAGUvSBvxv7G4KmMqfeTUNJR12pqRwqaxedLnNKzsTBkrVRrtGDL",
  "key8": "3oLB7kLGim8LnsB2SuBFcUGqfajRNsJ6YpUKfhZQYpXH75keqbqCfFt4ZRpdMZ93rzwhUP2MDbXxo1LvjMZNXKD1",
  "key9": "3xop2GkxAxteyCjBUAkL7pxabZpWjfs5rnGCubEhpcFMzbFsy6sX7ZdiNQ7Cix9PE12sYgQHBS2KpsggJtbC3cqc",
  "key10": "2woaNAePWmutEmeXymmYpu1qxvjvKQyyc35sgAdb6WZFhDYsBUCh4Y4idrPtoRiLLXMvFxgzQFgCKDGmmZVvKbYa",
  "key11": "5gc95D97B4VJdXiHJMWsgvaB5z483uWSsxGzHzFvMELsZABypNffd8TgbrxnBd718LipYQgA2yWT4wjj1M1jzQer",
  "key12": "4LQdgnfAHi64ssFHwGnNwFRNvRwDG5ejEL3MyN11bRKCvi3NkkkNGyE7nvpjk4DSGtyvmwDsRbpKQutCLJGZ4hSz",
  "key13": "3JZ2YRq16Tn1ZKP8LxUGRtnooqHWocm23AHCzQUGVaMtT4TVAv2pnFu5Kzg9KPVrcNhGneoYTDzByQ7TYrGyLoUz",
  "key14": "3jvbG7tg5uHuKg6C4YD8MF3XouAzcgxGJtncY2XiZN89WB4fMMP4CMeJZJhuEV8E4R1nvu7pNhBGovqNVQqc1pMi",
  "key15": "3YmTQoQc57AFAPLD3QBoScqK1vhYHnuE1ZcuGEvah3ZLg31sfToRo8eqDYVY4bZfULL4aUmJoV4czWmqhfwnvDAh",
  "key16": "L1gbyPSuwGCr7YZN7pCzskKySVam74SLZ8n83xJurJr8PykcT8atdbdUyNSZAVF8nJzZdb8EQiTr7XQxpndjWMo",
  "key17": "4GowL9VfpjiaPq4HpmuGWZjCKTz19oKzW4Uyd9bQd4rcDrdrVpotvBn1riFrbwZsgx3pq3uPJUGZnFjjyVcZi7T8",
  "key18": "2y6FDhWYyWv5mUT59eeQX7qELchAJnkEgDmNtsFXPPGoy65eWPNDc7GSHswEfPu1pkAteUZWVKkvEHr5yZ4aDA59",
  "key19": "2fFf9oTZ2BCALH1rHJg99BHQbrQZzN7nqambHk95hp4GcjnF4ACtUN5pDsPvYGuatpc7gsT5Z6rd2iL4m2bbx22S",
  "key20": "5Y1sSceJ3Trc3yG5jWqDfrz5zKkanjMmtTKfgf2tdsVop7jnZ9XDJwemHA9Y54oSv2aPhypqXA4EipaYBCdQhbG9",
  "key21": "4SrE7jsdeCyCt5aFBwP89yoaR5PennA7SFPjQ6aGraYXwKTkW9oH5P7BWUudcnfkxThAR12LHRqxL8LE27BA7bjE",
  "key22": "3ryVdgAd2vz8fX7tPV3nF2iQkLUqy8V5wY2Upu3YeuK3AUmPTqtank3V5W9xLwQaqahXYoDsmew1itqBa85y2Uxa",
  "key23": "4RJegc9nFgSWs6hAj5SGUJzmjZJ4KYN7W6gC4bKo2ERt4vL6t44tMBBaV4sbaouvtrvGFApCEFs2JtyWj6TNvFWs",
  "key24": "2612JonvYRLcaEmKnh7jHubtQo19CqAL4XVrzZHN1tPdybhYCG6B2SKJHy3dQuueEVveaFZptySU9nvYoPSp5nxF",
  "key25": "3wB8qKykKd9bJX2AS1xGsNRZj5A95bJCZGuppWBgtxAikMhWiMECgzyCrxidbg6MrFULrWPr7MN2opbwuPuZmtxu",
  "key26": "5eZds9fPeMWheLPaqA2LSUWbjYC6PZnjifkh1DQz4JXSLQF4Ub9FQkRdV8mNkqcEGj6AacvB8mJ17gZoZD5iWMk5",
  "key27": "41cTmuTA4f4juF2QhVFkmcJ3XgD8JCUKPoy6yWnvvuv66AtFVc5FMc7e3TKU6PsCnDd68jjtpqZHaVJoEcBNzKJt",
  "key28": "4GASvHXHfZCTwaquYb9GHupcjjKYusEUPbg3x982BWndu3crFsZV3yUayFd3FkFPj8sapJEag9DRvebUUAYaEpEj",
  "key29": "4NCRrxa1uCij5LFeLLbRLzP2N7tyKbwb4Q1vvqpRcgfWALwtYW551cnHZmeEEenxKFFt37Tm2pdyLM4GgSFTVgG8",
  "key30": "2E8dbjHWCbSG6EKnqtPxd3Ft4g8gGCmpD4Q8SyeWRnbskf3Apu2GWyVUA51yJxAZWjZUHpfEtTwA7sENiMuWZKzr",
  "key31": "3WWkkw5LyFPtQbRR7spFDXxzD4kZZu3M6a3bVCet5nJnqcTEjTWUu21qYzpUzj2dHaViJK7BqyKRwcAzcAXctnYg",
  "key32": "5oQ76ajbB88Fz3pW1WFJoFti4Q23QuscZz2WwAZ3Ro1C2RHkoGeDbTHxbDHAEhHthUr1t8BifviBEPLbL7B8P5s9",
  "key33": "4xHemBcHDNZe9cLpeKQHEakuHup37o9NRhJQxmDSpW9H6qwutPfQ1amYfJ2iVFAi1cq2baDfWHCmVimqrCY3X8kx",
  "key34": "4QSL44KFqzVC7byq6yxTcwcxXn2GAwgsrbSkHdmxoRVepmnqyBGTfPFtwuPMjiFsaULXrRkKmhQV6R2yJypq3uby",
  "key35": "AfPpe5ECmaWgW7rASXf9TAnB3Lavdy4t9Hy5XkrB4YVEVprHiSmLHU5XYWp1S5fEpyDZd69qNHKRKqSQ8kRwrFA",
  "key36": "46iTLzK5QHz2tqAdqGrH9DYejhbYEcK6Te9EBDJJhKgP9yTu4QQ5N11zMosqDsVud8nriofhcbu3xZGBNXF8tUX1",
  "key37": "YK1ziYYTJQiay2sFjoNXA24Vnyd1MSdMm24KgXs948iuCtLL5ruzFLZxKSXUXGCW7hzdu3Kk2Aj4huPxZWvzAHK",
  "key38": "UmvZH476MiFvVqrXi2J3D5uFVVBzdQaoVwEgLwjhwsa5dFzR5ULQkNKqjpJE3LU5AsduiveHMFsRCUtZvQPuGwR",
  "key39": "3DRLQtRANQL6sPFPCPg35MBQVRkvBSzxjwM6Gg7Ex8us7c5N8RJ4AAQMw4TgQZKqSg5A5qpVBimkX3jtxaSqdCmV",
  "key40": "4Kbv8FjtSXzUjH9M3XCddJXTK8buXXyJzRLXmePVHaUAGqaPCaBZ9NGQ889kL3VsVJAHL2AasKpSLY8fFJWGEqyZ",
  "key41": "2Bi2Hy1Tx5ezno4Cat1bmiXyKFD95HvGRd8KCgGhskJgHYEFvzadWHFH4L4cQcp8moe1Sh5XnYL1QpvNMq7SUoTR",
  "key42": "2xBqwTaZv2S8S6Vrd5x3WstuQVTcsoet8BCaNzLw4wqahFu5PASx6939TTevLtv2E7fywLbPsoPEnAnaNWXoMGht",
  "key43": "3FBiLuCaAa7cVUspZSMUwAc3FEx2EfcnzwtH9e5AHS1p4PkuTxEEHCDfPRa9DLQ4ZJ3UAfLqzS1Hy9GBC1ffb3QS"
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
