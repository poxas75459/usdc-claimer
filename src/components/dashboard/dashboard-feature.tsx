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
    "5UyWmuPZCxHD4vaKSW6tD87sMwmg3NpqSEx4qEfTWTLh681GDMJspfF7QjsR8m3s3QuCbGdjYGqmY6mo789kYfM6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DcjEgss95JbVgFZXH768G4yWK54Fz62FoXZxNsL6e3jTzkm2SS6cBiHqeZsYp5BA4p1PnWZBF5aEYxDFs858rJU",
  "key1": "6TMcgzDaFp6jiMtHtGsgwnM3EDEj83PiZPbCa2JhWX8A7tPGsfYFQ89ShCHmaiV3ZhGKFf1qBwsNwXrV9jJmzbs",
  "key2": "iM7sk8dNHGkHcGH5Mx7Y4g1bGGWjHCmNctHs8FTYFKyGR7niLXYwd9vApZYAU7ucmvbX4nmFyUtEeLnSiXqLMjE",
  "key3": "WzyxPKsJ7y2dcLq9ww9B3qJS1oL4SB9biJqNBH79BobFfKrekjTdyWYKaX3q4ugeL9sUw8fc4DHvQnC67WywcjK",
  "key4": "552tLxttiNatZrA3GSkT9fiNknwtSTQpwoaWq8VroA65713H8XSFNdoiHMJ8TM4VTPfeETbLfAD2snGs4WPRfiL8",
  "key5": "587H5FRwuHzG4GfUKBmn18fSWAmp7svE1BLNdqAq4rThAB6hpEtotbVFDH8cUPQ3hsHu3fmuihjmR1W69dCLARnC",
  "key6": "46qFQYuziqV3RkccJt8cmvEjrMuBKmWmZ1RzxDpjDnHBo7pMfGc4by8s1pPXvuYkXaHpqchYTQRbTnnT4Gaop9zU",
  "key7": "3kXhd9tCTDn4SM8sRucCZtX9UMFkgTdnCQdMcNh5zaQxWmruEJow8qoHQBJncVhx8iqEZWAmkWwK9y8Cq6dtWGXY",
  "key8": "PCX6vcs7gkbpvCwx8Sfmmdpzu5dmrx2wF4rkAxHxZbrARzQNeRgkd313WrnLvG6g63mzmj4VfztWYLQuyvXjsXu",
  "key9": "5LGu3CJbBNabTarEpALXEL5gpDY1ib9zRPn6AViaZKdaQXn81eC7MpDjn2ei2xqex4VbVwKVV3eai438qUwsnJxD",
  "key10": "4Gzuj7GXcUBSJUWy6SzQP6BJheqNG6ebEcEVzLGr3VxdyKDDZVVMVU1bzrAx13BWXzm4KPFQuS8NjrsjRVt9bkER",
  "key11": "6ezYYiJzT53Bz9KviPGmFwTrQxgYwti9yfbbsDp18XpkDq7ywErLt9o5na4kX4MKq8CaQb9Meny1YJF3xA5GZug",
  "key12": "3GstYZVdg8aMriBR4dRUq7G7eTMApWec7NhwSu1UEoAU519SLrt8B6qwdkTKjXNHDmZzc9PNYezchkjKwnrDR8rQ",
  "key13": "2cLWW38iuqb4wFvBvLJR3x3duMa4t3XBmMg1LQ9a2nebSQEgtYcjuvLsq5EvbzFiWKh5fm2gjb1zbbYpeTJbQpwe",
  "key14": "nsig76kEon8fPLyifRdudPuXDWC44QvLUZfMfWjwHuKhcwEYiv7hTSYmoMsqUB7GLn1dZ6HfLRpEspfJHUXhh5T",
  "key15": "2ece1Uw3rhdoBWHP2iuyMctyo7y8Ejo2JANyjbit2FDeXS5yHwa49SHbnYkEZtF4dpuzbyvzMJdQ2t6CHUx329qk",
  "key16": "3WGPhph5rwTBGKV2Gdh6VxtedfnN4eipqmeWuwAN5ZpZjhQYGynegAPD6SNGkSeaexFsMxGgmWdCHDMQkuQVe8eB",
  "key17": "grgbMB8rtpipYN8JVCmoZCqQP81giopDub5REBWhbTAkDt4TZjCwr9jtSUXgEJLBq4aDA2oLW54fZKXJVUskR48",
  "key18": "3MUfjvZQL6o4M8t4ywwLdggkYR4gi6FvGf7W47AAyQLPjNQx1bcJZX8KFHqiZbLq1rDxWJr8XyRBmXENU3cnd1A1",
  "key19": "3DTE9wKGJ49jNoaCjdLssWrgDsD7LBYn8MgdFQsef4CEZ7rDCHcqEe4RFwKP2ggKGGeePmXspHMsrzMVnvsqGRmW",
  "key20": "2JppyRzDzMjQagiGj4minAHgmYqQyvuP5ECTY1huShaz6dn959TRTzKiufiKHukXR6dcqDFbpmyYWMJoQfEoHt2z",
  "key21": "25mfwyV3iih8qSr28Kxggyg5yPAypzhker8hHZeaXVpuAg9PZGCiTqgLuvbXpzdMGrW5CNmLdqtGHTAsewqSE8zN",
  "key22": "5PZKjCYfnKwmQDMHtBo6pRZfCaEyDKbWDVjZx7yGHTkvKbguuwps7nFCyCTGGJdssZbnSjtgmFJSbRedCzW5NgLR",
  "key23": "2wkMUGkH9LcfZDpRDCnAbCKLADHPCJzEjeJmTwoZf4RBh7geeA8AAAetHL2GebmYkEBrQnMre9cJwS1aTghGacHd",
  "key24": "5trAu2B6sn2aAB1QyXcSL1h2r1u7co1aEmfS8XHmoqrugYzSBW34TFUfe6Wq6nNzP4vDUy1xR7YzL9EqvTKh7Br2",
  "key25": "3QU46DxmaFjKPJzTu8njzAg6ZaAnZpMeMbah1BDW8DFM4xTiLNdHBcSmdLzaqoNPjrBSCF1VmnabXRB9DqsKmCH1",
  "key26": "Y4buie7xkKd9auHXbbAaF116XrkHKFnLSEJQUjFghqTNcmbrPkvpER97Km9smNMXnvbEqXnB9hQdciGioR5dtC2",
  "key27": "2KpKuuXruEzuRbo5s48rqtS5mgftFCnMfG8DMQ9QGL7egVuyyAokUYR3coKJ6H3gr91gUqJSTraX5iH9cgRdDZPa",
  "key28": "2tTQ4EQHKLE8QUp128Qa5sDkMdmu12AKumGPr8LvBLJTe2s1fona3Wtqds8GpnFLTKZSyHTqk1mQWCQSA9RUATBS",
  "key29": "3h8zc1NHaUpPTvs4UqqeGX9Gw2A6iTjRVWRYEAnxMwGniT4nanryp3UoXkXEJpHfhkgeN13ZNS4dbEdHtbj4pDG5",
  "key30": "RWMUpngx2APdHWaMpYDpXhHnGoA9cpJtFdceKRHooiNKcwGwM6Vz2mmo1HYuTHaiuASfWYY5HJm58DaTmMz5Y54",
  "key31": "dYUDsKxrN7UmENXrY37qRt3vZtFfzSUZjeKyAkmB7TykcMHuQLqGg3RN9qKHmRJ4dufXcjYX3y9SPfyLnyUpkNo",
  "key32": "5yLPf65dD7ZkE8Y46oUawZuuGVNXWApwGXLthhksZkxRg1cNz8FU6BWeysEAuZWQkeWASvyV3qVWrUn8cVbc9gGY",
  "key33": "2YH7kWJJEm5aw5r9uxdsFFMkDrw6SXPeCa892t3UQ3G7hF4ireWYjWX2rG32dE4s64PM5mf2tsGRXBWLeWKVgmsE",
  "key34": "5HtvJE7R941QQDr5kjj8PL7mhB3hD3sKnn8FZ3zSpajkzBHpLs2CZMdcP8uwp9vswWaF5BJ5iU8apqkUoNNp5gA9",
  "key35": "pMSy2JTPNSRqHGiHB1oZwZpSAJo9ybRHcMdh1yEm3GrwbErbq4oJW7mHAZi6yFnhsDfo84rhXAFEev2bLdqj4So",
  "key36": "aQTno4XbnbbLbDtgqRdJ83VWtASohUK5gr6eqSsdvGkHdhFaTuJcGuuTRsQqwVPpvQ3nqa2ZQ5sogbdZd94hdJ5",
  "key37": "4f7xn2gfTDTndiMTasqbZTcky41JFShcnVYFmB9ecparLchmPbLK1xmHMhCW9aerNk3rMHXYeKkuA3shNC9fWEJg",
  "key38": "4wxgzfDHitKiqRPC5NDNKfiSDDqo2V1ehyjJksvt8ftpqaiVKEHMtYqakQLBxGM7ixMGg6AupRkxwg4oNyWkBCyp",
  "key39": "5Ang7W7Prmhayz3RqWQfd8jLTLcGaQRfHKwrt6HhhZaoMDQAEX4NS8oqSGmbHEau9Zwu1cpBMeYp9exK3ebFVTN9",
  "key40": "5hcTQFg8FBiXNeCEMNRf7y2ko84FoAk1HiGCmLkCL5rZ7xUj1vuLwDzx9nkupmznFhsRXDooSPU1517giNpaVa2e",
  "key41": "5eLyd2cdRrmW2YPmestDk91PNt7Bq7ju2GiY3JSPDE35RMU27RSnBtDNNyznXsrw3vhB2sA3v9aocmHbjVy3JwKr",
  "key42": "bYY1VJFcD9s21qoYDnYQj19LWtff6Pcu5D1CuCWN2V6JaC1diz1kMEhhDbckRribq5HJYLx5wVaGyNJsBmkX7q6",
  "key43": "5ZFAAF3fAQpKiogwk7RDbQ19hHMpPtBPm9wtXVpqwXgqQFCu2C1c6Rs7iRNcn7Bs8wEiFJWskwKRZQ7tn21dd5vM",
  "key44": "4M2TGQoBVnAE1rXEVEuynJVzBbmCt1RwxWgduuDpXxVwFkdSE5snrTnzsRp32sGThJtHAAhyh9cxdCxw8GyNtwXg",
  "key45": "2w1Z7sroC8QB6ZvFD7ZJBPHXWWeqsKQgiEcwFyvzRqkQBBErgts4JtGcnfUAoAtHxfyMUu93pY5PLwHUhyZmvu7B",
  "key46": "3bqqakMCZJZo6K4CeKZbYkWfYz4NXtcdNC36WCC2iNZ7ShWx8KuorrsWhpZu5ywK5KXRUZY6YEUhLZ7AM5Zk6tv2",
  "key47": "9rHwiaxayYXWo82h6dLd4bq16bFXySFTLT4FLQFkon6VG2gcnEREukMGXne2ZbyXgweeohtXbevowVRfDL7TfAW",
  "key48": "4qm6QgM8awWFvuVCsH9Xcu6gD7A5SuZFBMA1XuRMspjYhSD6WP37Xzs3FUBXLcMALqZX4N7A5zRS7vd2WuJdYPR4",
  "key49": "3zDbSNL5zymTfoZH5WZEeCxzY5iB9kHjYv1pbnzCDgr9ZVQ98nW8oezDMfJK8sE6RNq7U8PJTqQkUKTmLRyi6w6V"
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
