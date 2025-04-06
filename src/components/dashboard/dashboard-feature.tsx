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
    "22BjwsRQEQpp7qqk4bPMmUyQtEa5rT7pvi18fYdA4NwXPPEJYo8twE7BHxmK4JCcj7jjcnn3f5HKNtxXYxzV4rBS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23ooi6j4whHBXvUzYBx8USZmosbK7ByN1gUuJK3zzZ8xqAWFpxEJiX8AUTULQ4Z4Dx8zpEF4vLbGKKbU6HQfvvax",
  "key1": "3vPKpYGdSGF85V5jULzH6mJxdF986AT5eTPjSGJhH6wLuT4rcUjhBVXhfZY8BwjmDG9DV5xgRUzMDas3CvyYp4Ko",
  "key2": "Ssidn33rxS6GqWiTa4NaJ33uSH6UaXqy2rvPcwU31K6CZVdrMERKkxXd3cVuxXmiqjLdfpBzFE9r8RSNQvamwgR",
  "key3": "25G22hvdTMizdQumJEzUsezo1VxVTJKe1BTXgBw4hQjiZP5Lrb3NS5B88Q9JPTsLLoPsJb3G1hJXK2E3kcEggA4g",
  "key4": "2Jz8UCM5joWwcNtbT8m7xyAVm3EG3Vmv4QBA5D261UR76KF9Rgp9gHAXBPFsdwopievLRaNZSLR3bms2rzDKkwpd",
  "key5": "4akekzKJauyfjaZGg3NH86xZX7GycTQ5phCNWYUH24otR85tCHK9ibMhKrZqwXJMCZsKwKjz9S2wxe8sf4hrsdn7",
  "key6": "4ucZXzTV4WyzNqZCebsVvtPjsY83sUCZJX8zYrNw5X6ZApEAQaZB2Uro95Lzc1Ln1dvSGktaJ1AiJbaQ6DwU9NV4",
  "key7": "4kXWSQuZXxbZywM71Ciye3MZVNzbgRYBuC9Ujo2gadKpSF4391jnaTfjhiwiA5PhpZ79ZkJ7N2419BxqRnXiPLpB",
  "key8": "4Wkc4EsgJVyamWNobb1LG5HkHLiP1GE9QXeqRB6ARwmVkpk69eyroQi8YAtCYQmnbiEp7vf2bdPdqUkdkL4ZrFMS",
  "key9": "4ttgVGnFD3mAekFKFkE9UJyQqmABfSF3TNiKwgVaLr4fAQKRjoqeUF3C85LDF3MbqpCbibQjxpDakfFiFJdkMXdc",
  "key10": "dojFn2YkuZHjU3zLst5CLdhB38sGejm17NHQEYJf64LKRWhYbC2aiCMxJDpVqytNCJyUqfvBBj4rHPhL5u8NtrK",
  "key11": "5A7GhhxPHy28vRs8FwihZYK3YQG4WQutdiNbcfC2i4ZS5ecp5HPoS6GFQ6Zh5yC5NuTkpNQsLyMsdvs9b6w1L79n",
  "key12": "55NYzgtrJ9nhDaBPSQvhksp7bZpRaDyowf2gR2vTzdL8HRnGwayPyAATTWDqDU3KicdSQy1Sk7tPoqP1h4UQdRFC",
  "key13": "3m9zXtv52M8h4pALW3W9NsLbm4RbDhfXVVzJQYKqTGDSEqnWZDAJwab5DNqDYni7hFFMLfCcX5b4BF6x8gpHQLgY",
  "key14": "5xaAYLQvhJAqBLognyNrSbc4BSXRnvi3UTjbiQY7u1yEP9NYqhM9jovmoGWvpZFsab3dpoLNLr2deEWH6iLyyWy3",
  "key15": "639ZjWHwuY2bPp6Q3rAALJQyYsrGdyDcGpeD69neXNbefomZkWVHefvWHCPDamCCpoaCYLdEqDEgQekBskTcbmkL",
  "key16": "cb7XMjZyJKiATVqFjMpDs6UCwtbraTqbXrQvTyVGnrnm3T6nPnHdec8YX1ZYeWE97rhKfQqCFaL4dvauyW22x9C",
  "key17": "CSJgJFV4wL8y4EhZjuCzE7fKhkUe8wsSBrKZ2VWtytQyvNNPCPtanDxpVbGpzSihV4As76t8eDQrLux1J6FiHmp",
  "key18": "2xuTHwSoGS4ahvyjEvQnYM56RyjYA84JXMiVgRmtnZ7ZkSUq88pr15RtNH1C7uTbx3yMDD4HpUiAakGPtSXaPUWC",
  "key19": "5dz6XRKtsP9KESE4HkTSkC93fyKtEJbAgEyotpPzRE9n1UMTh7UTdi3Jnz19QxqzZe3NMKX2e19YAicd86uhsXMJ",
  "key20": "3AaR6roBDMcMLg7NtwYyNvyhjRChbkxnW8LqgZY8eBKdEjVDVYqSBbNN7o6pF4gXajvveGXjNFFGoh9dYkWV33p6",
  "key21": "5UjRkjJTjYdqNLgLDxFfLE7Qz4tJ8Fi6B1Rgeds8G3q6yjk5P37tytMNhJvNE6Rnhd5PbEokMiU4zLkwmxb1fsdo",
  "key22": "2yq7MVTEW3SGiApfwwse6BQqfw4bvvAyiqRrx1P2Kwrmm1GZgr2k5w9cBTE4VaE7jnW9UmycNWQgGytaje9MRJc6",
  "key23": "GYaxnGmG2eQZ3hjoKgLt5GEzdEY92SZMdCo76rgaq76KtxqxzvwFQsEzi4CdeTbFJ55W7Gv2uXdD7E78pQ5b4pq",
  "key24": "4KzsABAP5Ux5iB9DnEwju5mTPtBpSDDK4PqJu6DLSBTr2n6QuFzMkeeYCQ8Nztbjmiffgh8Adff9xa8k1rKATwM9",
  "key25": "4nn4QYyBKVyzzC2dtK6DyUojuvXDGfHRz8CD9EjyfnjYSNM4gK6WHTgpyDXbZxu4xkisXadTuznxQ6emAsQ9E4x5",
  "key26": "5w98vBHeWepPzLuLWduD9F8dx1zFB56zXvjfXdGqiDbqQVLkzRw55mMbRZTKzJhQhjs9pv9W5WJppUNGTLDdJYFy",
  "key27": "4ZPCF1ohheECE5faQrR6h6huDLMSWNwdwAP9NLYX4FLy2bEyw9XqRCwiiDyMJwXdgCf5KUFtFCt12zXTe2UWDnaL",
  "key28": "4v2sxzYWAuCfp8RN8P1xDbMADrNL37LJeUAtB1dJQTVVbHyr7KXAK8PSNizUvkciwTryV315CoK9iCtwJGZUQuK1",
  "key29": "gQ9dsAjMjZ69sWaG15W1K8k8W1AzZHW6ES11uVJiopHRtRG4ygw9dR3BY2d7upR2VEih7ghdLxkyYCkHUENFJJ2",
  "key30": "55QhG17Zp4msDuDsNTNYhA2Y6J7K1v6H9gAGrm4aoa4TFniLBFxPSSQfENi14PsH2fd62awqivHsqNjrdLrVFo47",
  "key31": "25aFNWgbE9anamixYozyReFAaCCHtL6qREJVz7bCempfpy8WRFXmrgu6PpE4fb4HauBePRZcAataupjvdsJuaRRw",
  "key32": "3qWEj1wVzp99t6Ea3LiPP6zrkxTj3gRnCmUuaAbqgunHFcQ5NRiPU3JKS5h6ZerYWBNe2o3XBTc59ega6RNKT3m2",
  "key33": "4HPh9UeD3tTviLXEK3V3hPaKGfHQMYX6KsyxibhA67uUTXA1i1zTpwH1F7Pv2jv3r9xvyfgv2XY1DAHS8QSC978R",
  "key34": "r54tg6KMNU23q6wCiWTNXwr8117GAfdV9MDP8JzhmFBxsHLFSugvQpbb4pFV7ESkC6iQ4WytEp9fqVUoXvJm5hc",
  "key35": "zSXAYxi4RtCtjsL4nKpJUERxtEnnSvEjAyZ5XnGs2MXTFQiWe1Rum4Pcq46pbkDJFKh6ELL3v3dCWhty5oej2EP",
  "key36": "28BL2s87o5DMtPuhGFsT9pJgTqPEqPVvfX99XtJwnNnrzxsF3JKRf415Cf54yAzzFyQ6JsTaMD2Pib499Cw1Vwez",
  "key37": "ZLHuCRp7qqjz4r22zj8NmF2J5Eu6Sqcfej5pjuU15JDtW3amTxPjH7tC2iyEcyUhdg6LpaFmEyJcBeFEuNShwhG",
  "key38": "3qn9MrN8135ZGoSSgWBRNHU9mwUiMETBK4H4S8xU4mae4jtVrCdDjbxUaTk5a6PFds2cfPS7m2y44fAQaHVtMzsp",
  "key39": "23BmvZM8cddSsAX22N22e5LFx8j11uJJZErinz6jtvJNpiSxTo5SYWpFw3xpc27z3sQXzVVGHTZRhRSAd622rbEF"
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
