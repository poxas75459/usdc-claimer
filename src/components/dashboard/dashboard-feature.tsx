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
    "3JJt5X5w8aGB6zHYMZD12cQnp6Xwx7hEHbPcGcddmBTc9xe7V7oMuTShshNpfdcLk93EsJisZXDuJxz2ZkGTh7wW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j1gqtQ6qcK3U3HuuKU2CA9dQmJPY5KYF8sAGHB7P6vGsQBkKWrLaa3vzP6BxVgEZG49EtmWrEh8RnrJo72NkxoY",
  "key1": "7LNJk7QLre9isX8WBXEvDnTdNP3mryGQYnfTajRZW8XwFNrtvC1DhWSbkhpNEAWzWeopP5oNhUPBZk6bAv9jBJH",
  "key2": "zxi3ED2bccz96r4TYaEK1TfMZsseCtTofgi2FRCrU4tN5j2JuyoENNE4FHKowBvtcdEKoovNAp339uGMC58PioP",
  "key3": "32gZTCe45nAeyWCFcWxGo4t9uX5Cqn4hi6AhQv5TYNrqAJmkN9iqB5e2nKVzobY7fQih1ZATVcJWpF8gyVKCmDKj",
  "key4": "5HjHPCT7cAZy9NszP2FXNqycDuTY35Q51F5bhP5hc9iWKGnMF5Q3uEeSBPtEy2A27rByCSWgNKxTneuJEmff1RN8",
  "key5": "3Z7xuZe8P4VwNXUkjqet3gyyVHNRToudQcrskQmyhY6CJubPyZucJ9yytjaMwHbTw21AoKH6iJxTvARrb5n2xtLf",
  "key6": "4e1NESgQi2pS8eFzV3SmPbvz2oMmKqpVxXePR6A2zQLXXguoFHpCA12YBh4FYXvDG4YGPxQG4rxsqChwFeKg8qDK",
  "key7": "3CW4dGvk4pncKjxjPbw51dhV6vyhpd4XSp5xxNArkVxwj9ELCJYnzx7aG2P2M9bgSenJwhKsn5BPKBo1VBce1zzK",
  "key8": "QdzX8oeyUk3aYfFSUTZKTpFt4v7TEVviCaRYZdS3RG9uvre4paPuGmCZcTwJasfkRZJUReECEFZrdDf3XDbFyD1",
  "key9": "3xYZpny1rXBaT7qwezvX8CGqK3D6LCFhPKdgBFJBUAqSomMJK5eTTamp7q3VXEuHAouPmH3MnETSXmWq2T5JUuGh",
  "key10": "CuuHBVCKD76MoTRXVZjUyu2MxUdrvj1M57ChbTxZPwNxth5qMfdQQoiiaHR1UkdT6k1eDSHPqkPmZp6BJaK1yRJ",
  "key11": "2qCV44Vqu3CSbFfmSoaPXdupsn1vgw6yQ7wAUycYpjzttpxCM9RWwRzMZumBgrkkw88SYq7wtYsT2RQfMHudZ43E",
  "key12": "3iEHGvwz93b8WNxg8e8FW3MiUEJ7LcqeyQQRevcrdWfNKsKHusbjuzcGU7FL4SKQCtNigo7L6ibnxSHURsVW1AgK",
  "key13": "3sAZCVaB84vxQkKzf6wbAd31AQuZxFTFvsdmbDTNDMTCzoh42UmbJcnjPTAJRLbCioR3SzFb9XZWJrkrQs4ReKHq",
  "key14": "4FpjyfSboYE5pJwr5WWCAmHpuu3vNMZPmQKnnTGUVTAnw21gE8VemUTptiZRLHoXoER2ExgnnJWKyFWeLepRVaUM",
  "key15": "3Rt2M8fZ39u2YozE7yoSEgiYJrZkN4PYe6JvnJmg1BGTMPW3BEGatUDdF8WjBbnrdTXUSbXpH1cbs5UpPsGetvmW",
  "key16": "GCsmYyjgDx7DYyL4A8uRU4vpwB8xedKw7HXEfPKd6X2qcZKjCHxucrjqyu7gxJro5Jmz9rSJoTn7JWcVx2Xgq3a",
  "key17": "EqbE8v1G5AYvpWhNsYvC3Fc4KKkCcquYDeaug2V5THv9fYzH22EDSXjnYVzmeTbywW7yCD6FXCFVpWByTehijkf",
  "key18": "4wz3CZZXtG8BKzVpkt1uT6eLuTvrXoVvJoKSTofsXuXBjiU5oQ9SGpsD8hphQVktvx5XwxAvMeAdgKoKGRDjgCLe",
  "key19": "2DZk1rb2ZqSSby4pjW2Y2oE1a9W15ZL3AeRjjQzGRbQo2VJjLHDQSw7BCT582B2nAa1b4yJv4uXBmG1H1kBAtVpX",
  "key20": "43VHTShbGsLttkRX6GMFiPQz7oPH55FyEhj8bDthBCpiM9mB7gsgpHjETaPyU6n5TFuL3tnRabGz1pQo6M7aSnDX",
  "key21": "3Myka8UdbDMr7RN8nDEKgQeUZp9S9HCMyEQTAZGqJ73Yq6qJnz1BpgxXwcMWLQFGbb1xTzQzsgWa5Rmgc8ScMZ3i",
  "key22": "72PjS7nJWEeD4K3jrHcVwxsfNGR4MGHU8CTgBCY6zfSpdztYQTSCfa55LUwMdxJCeC9Cs8p3SzXXux5CNM2Bmam",
  "key23": "25swuuyVx2btgx29ZQMNz6H9mN3bupGcsPuWq3XzDyLNvaJbToH7V6F8pCnFNWH3icvAfTDc2DseAJznvyPWK4kY",
  "key24": "3MS2afamq8gnzD6vQAuqhDQozMkfNwfhR6VQhXFWbQnwE7JpiGNhtB8bKZSzyeCvviTSWPhqqrPbYBRiEjnxUZ3f",
  "key25": "HCCe6eSe5FYFMij8oCfGjmeWw1wqRZCSvbaVWQHPaKw64ukhDvmWdJMP2Zjm8zMY2Tyjch5uNhyAjpUBAtScbCy",
  "key26": "2c1nyuNgtUYYabYPgK6ESBfB2vbnvazfEwJpwiU5axvnwGFnEkJCMP8M9gq9d41eULSHxz2Bjjg6b92EB9Qpfqxv",
  "key27": "5LB8d6M8fovuqq63aMUiDVYXDpBTCSgimBhr2MtqcjmS78bu6ewMh9YTTqNaeM3EmSUZ4ySu9cr67uQCMyAAARVF",
  "key28": "4xon77KksHauSjyLsHCon4R3MT6nVwpVYWteRJsTuaGQicMgRfZ7iatzQ8GRdqpMrri5aTCaZvWB84Zb2d8WEVgT",
  "key29": "33LqHMDMgQxRSRTHYPNrB5xEXH56MjnmMexGWNKmizzFaG4jtvzNYXf8AmQt42zVzvV2iKCUeZZaaSKpxnKUTQGD",
  "key30": "5JGH7pWD7quuXorWbWaXtj9sivqpUcFDkmSUMYhELjpRKFPuq2B3qd8fbxsCKUQhQjf5DVkYNjL95QCYjRhWZRCj",
  "key31": "Sdv1ZMZZ1PRNMYunA315rMxV25VVxCqgEqhrvDEmKFXdzb4ZhTR6CqS7dtpE2bfC3V9UZMRVeUvVDhv5Emtzjm2",
  "key32": "41Nf8Ns7LrCMduefpXsJi52JLhgix2YUJF9He9y8bCb7s7TRhYmNka2ayjXEWqvmVSDHrKrngd5funvZSmhDjsgV",
  "key33": "3RWMuvqgQCmguMj1W6gwKLGg9pcpPank616cG65AsNwaLabKYRAUkCpZVmdn6RCjSV5fGSHi5kg52zeq5Wxjmrnj",
  "key34": "9zsZz6GUGjCGJCD1jFobgizXnjyp2QJx76uvvLAK7XXxZ7JfQ2qpq3eEPyEwWMohtvbHFtYL3nvEHWPLCZKK3mm",
  "key35": "23cHCpXtJndsFpxhvALdvchjkEMFgWMjScYt1ix4Ne5rJxt4EMiBMuxHS62d7esZ3Lss831us2a8otDqaBZSsfcZ",
  "key36": "4Ruc3Fk6octzABvkhFRzZ5AycJ3ej4ruGfuiQGUFpWYAMX2XBz4PnHfA8p7FPNLHtQo5U77oKXLkMyyk5fnk8u1M",
  "key37": "4mHy7EmqViHo9qNfLEvk7GYkbCQNuZ4iZvtp4mTwBfSiRL8BXR8tNPSMBpxJoPCJ2QEDetNxvsAjVgCP31Ygqkmk",
  "key38": "2JmBga1imWyzA9n5jUqFC5pVAvj1rPskBdhcUAA3nNYCNY1oPu22QPVgn3jSM9JLiKHbTjgCif4kWuPdX2fQWLM5",
  "key39": "2MoRWJWRT197eRjnJCS3xanrExh4rxYJdND7CLYqGKWrgbpSuLwQ6fvJ2d9stGSFd9z71J9hcCZQ7HcH1ozMS8De",
  "key40": "cXjuRUM1DMC45SqYQ9tgaYavwRq6ZSbNaZbxo8LopYC9jhZtKrff7VTEiWFrKcSe4VUesni3eBcYRnCRoE1d7ob",
  "key41": "3KhqcLYT7jn8ktarYsVUcyuPL3SUv4i2M9kLfrJjjRhJX2yLaQ2uwtf9f4mUS92Uw3J6r9Nj6RS3GDXAuNigrLCR",
  "key42": "Ci1yZCyZwiYLA6WQ1QmiepisyR3Ynd8e7CQ7jzVkUC3rdXRMh1LDb2bFgPk4K1a5T3mVsj6xKdYjk2xoK5Si2oC",
  "key43": "4z4rFvfXcw5wva8qt9F9PvMenRfrmNWZAXkovonw4JamwdMoqnujnvjYs4anUajx4skqat2vtn6gZsxSmFCy8mFU",
  "key44": "5VxTFnK6Cc9Z1HAKsxczVu5vGK4hrCrxwEeariHB2qULfXYHu5acejKYaxjitvHMFvzGktALzB5EG8rcHSobuodv",
  "key45": "5uiypScNfk2139DcZZVbKCo7XjTRnJnyt3fjirYHCcjzPyfrHwUPXKwGWZeitVbBxkHZJdD5mY2c6XG6yzjnfXqf",
  "key46": "3nK9nFQ4hZAyWizuZ4C6ip7vxoPhQgUiEfR5Zu72wvMSAnUTqPLohEv1uQjJzMxW2nkDDZvnX43zJZDfrvwZm2J"
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
