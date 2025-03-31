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
    "PWDeXtfVkkyHT7Fo9ScxtB8zHunUv3jG5XkoTghW6L2XGrDDBrx55d9eW6pcooARzT8yg9Xg7F4GfwM7u6wtykp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r6mXVkpTzJdEu3CE5eysg8EDbgWunw43hiic49RFNs2fgWi2PQTQRNT4CSG7Do8EV3hcG2WWaC49xDjTEsyGrek",
  "key1": "BQcoNp3T1pRDkVwKBfHBkgbdxrJmhsmhj3aDsrpgaHGTvTzrVhiUXbHzqDgWH7Dp61cUgqpDWPrjVNhX8LVjdST",
  "key2": "u4Lu1KfX4bWDXAasUonf6J2PnnGnd4ttVCsBHGW5zhprsjHfcZE1Ruuhuy6qDvi2tdxLZyXJe3gFhUKnc9cCUuG",
  "key3": "2ceTUwSNoU4EEmj7zXY5D1jyMQrDFhNQLLDRy9nfmyzzfmjmJ57JH9Xgn3fFWZvy26tbt1nkPyfD9BZYBRRA8q4F",
  "key4": "5uPoxm6WFNcodnhsDbw49VFcpUkQep7fd4SVkrV2bGPkzaQ74jUqMaktapXydsPMEdR9fgLM9KDa2UJ9hxgvyQi3",
  "key5": "5BJiB1EByb8A4zKjRTVDjAxqYQVEXiCkz95NdQhnUmSmnweqteHjwbcdhzPFH3DHTtBggGXqZhYsWMSmcpDMviEv",
  "key6": "2DjCGSEQNuS39WQ3Z5N9LJNWDbX1CPjujLFwjqBnfzEacwQKZ1of5c1cqxgid9xousuJwyZRbSWhAt7vjPpoaCt8",
  "key7": "2gQYDoZ1sNoW9hsawJbsKVp72d1TXV6LujXV9CAVBAbGTom79ztUL2xCG1gdyvc4iovjpfo3ETSVVB7cDcerPVXe",
  "key8": "33B6c9RMrqF3YDdkZtbsNyNuNJahd4CZXgAQBod6J6G6DMwWbcbipKvekb7nmo735zRNuFxXcxMtbsXhEUxAXZam",
  "key9": "4E3Z82ah9i61Pe2tsCLmh9oZ1Xn2prFmCFUSPy9h8nWCMP8jGP1eUunt4FTw5kg1ASeS2CxvDNiGuUVpHdpDJes3",
  "key10": "kScSMJg1KyxCJH6pYwLRQom1YWzcos9fWicZQoV8Fq7VxnzHzezg3oBmeJdK8SzFvHmLEoxCMcHXqcV4FCFQe7e",
  "key11": "3cGdYL5Hrdqf7iLNUq9RrGxpaSbmjTUiFZvTCTGMMZtWaKMpFD1wqGfemQfeFwQn1yu4p49DsgD91yeMVGiGAdYu",
  "key12": "2NtJauvdEJ7T2NLYriq2Vjth2gbpcZMy49jAWXRJpx8fep21dc5CN2c3weefA3wyWxbjCY8ubsrVn7BwBTqVvNhr",
  "key13": "3buGAQpb5eGAtgVQQC4b3TUwPP7XAdv6vRFJ3Kgb5afn6LA85iBXuCdWtiaG9iGoQ68peVL4sf8GqD37LnHFAj2H",
  "key14": "4MqynbbQvzC1PPNcXjrzmrv6szKXzHDeNKaSYyDVRVsYMPPg2Wjy5hZB5CVPyuYTcfvU8L7WkWeWnekmg8q7oUE9",
  "key15": "5gRKK5oE4T1FQAYswmJ8b9F3C46DAu2t54qdzXriTqrr6ixK3HNhqi625gLRwbRSosPWRwu7xA9iUFGQbxMHkLcm",
  "key16": "5VJ1E4SABaQUD89dALPJXeFP8t43sH3V4eTHVjTCiFgcvqmFf4SpsnL3LVxRKVCQzTZ9RVHAFKCeAyFqcjXsCpqE",
  "key17": "5ExRywiwZAdZnRqw7MAHMerHtEdkJxsdooaw6RiQW6WgU7YFQsPXps5cPL2QKNxLDVsuwRCt4xRVS95nDnSSf78m",
  "key18": "4vYEv37nSnVCwsJEpQZzM7SgTsftUbVhpebg4Bo8RuGxQRsCJWxZaF27tuxs1HZBpnaNS2McgZbRauz7iLbcvJqu",
  "key19": "MoDeJhomhBhfhjiZS8LDhpDwvRU7CiBFup9MDH1sxZsKqXwRsfPeWtDEwunXZxAWsmeh6xkWfAEKEsLwuQkhvkf",
  "key20": "5YPLaivv9Dvrc9KCnKeJL5VTZNRoTd5QYKA6Ex6TkLJhGvT1ervrJvD54y8a3Wfos4RRt2ZRz8feF2WoGyj3jpDj",
  "key21": "42rhJP6G3E9E2bL5nJKzB1a2yvqvSdUhTHFecS2yZLi8TVKp1NCayK5mx3bvGwHUx4sQEsoF7eFs5NT6CwsrF58v",
  "key22": "5mhxo2yjDyhxoaSRraZyTSc59Ui6B9AtpaQW1EJgRtP68ZTZpgvRQbhGKX71Atd7F5ZmWKuuvqPo94qQ8vrHPqGu",
  "key23": "SxmMtw3WmpHBUjFcTk92jGM4ZW9y8mgbL1gQJF3w2ezPJv4ZLz6fzSMr8ihremduK3pcmjuNGN7DsL7ip4kUgko",
  "key24": "2gNRveBfoGYP46pppDdDaEMmPtQjzxW8E8L4tGLzcyWWktMnWsMq5ycFMfYLv3QbRKVqcH4gJptTtgWcnX3mgQbS",
  "key25": "5Dn3PcnR1n5UoXAwX2hai8FRDTiCaZLzRvoRDb7K3GYLYqCPrKcFcunNNQwsVWgFVuXoGKpycJx3hbVis7UPQHxs",
  "key26": "bJxkWkMkQeBknkNf7QyHdsydZ5yViAcuURYVpRzvsZkHAkfZkCzVDnAFV1Kz7Ri69iKvG4AV1hrmfrGMYBt9R5H",
  "key27": "2T1jNd4X6kBM8RYPJHcjyUPrSK9xuFFinNjG3wStyoJFdQ1UxZa5UY5wk2p6efGrwGT66iB7jnFWeSwUnadgEVLx",
  "key28": "3eWLu4nqYcm9DSNQhEh7SZ6ebeuVodf99PcNNDeQFibFokSFqyG5dCvXdYNGq1WdrXNxauv2ohZPo4xMGbwiAMAw",
  "key29": "YDe3JaFnKtmiHhHmw4jesp89KweNz6QdVtjveN7Ke8yFmG7cbzPWK7LtL7g7LQfarT3qGzyEaKAYB6Wbam7UbXZ",
  "key30": "3fwvokMZZJLZ91vwMcZr39VUG6rLMxh1871TZoJejeWHTW6qKTRNr3V6e1bLHG5PgPQ5zH9ho9vEDobPXoYgKQRT",
  "key31": "PAVMn6AKBgeh8z99HsYUJZkEZo5cBN8X4U4uyWQ5LDnHozxCgjcwRgi4Tbxz624gLYhCZPmujsqCafkSCyGYZXx",
  "key32": "24fkvLhErKnP7ZD5TYwPMXZnGNZmxzP9TKVfDpwYS4hQ93cmGbh7pJj7PnNHo343cLLCFAHEgjRdp8LYs3te3d98",
  "key33": "2Pt49rwR2pcA6i7ZSrxrfhqjJMq2YnvELHMGHXLAX4MndtY4uWYr1QNRfFjvMnv8sr3ez92f3KVx8QPXA35TfGV7",
  "key34": "2ngrXW26u8eg4qFzGXHUoMUFW5BEMUoFeZ657MuvFvdsjzoXBgiSDjb7Tcv5CrPYCxarvaPryHY6aYD7g75Xvt7j",
  "key35": "Liweigtoxgwifgy1TTQpbVPZMr4quUJznuvWzh7CJCnZSQbmaTRbq3D5PQdqKsCpzCTtRLAzMDqwUzHtnSTP7mB",
  "key36": "PoUcWprQ1KX1pjAGw1WSw5w8983c2inJ7i2ryBtujwwuNwoGJaC5SDD8ehZEkJCx8c5FySgJGWgrkxTtWXt7Us8",
  "key37": "4tRoduWL5TB7LiVgoyz71D4iEf1sSnttd52PCrdpMixPNW5P7XNtT8X3Nv68JvKiyvbmgZGP5YV3tjb2faeRtSGh"
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
