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
    "5GYJGjUvxoukwC7D8Bc5F1KxDnHdF6JUAZGQqZdqA1VYX6o7iB81997YMz3L4q5Y96P8UAy4jZpWJYRGja2bRbZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TjF1ytgcrbJHykzLx7V9KT7i3scZQgaqZxYsNnmunymsCjexumBMx3yVosJwLfuok6NeDw9BtbkNF7AYwrsX2Ax",
  "key1": "5vN4rDZEfqQ1hGt7TmvXZ7Q564nfmTpPxiTriJjSAifig8nzqoWgRVw8ZAD6MJVU4AM5Fe2Ub6CGijdQMojq24g7",
  "key2": "3SCsC9mi3z3CLi9XoCjRkGr3hkfUJeV68RSWPgUDoWSG6rfDdydfKso8FmMCARqDWEjjukEds4KNVKaeEzb7wQ1x",
  "key3": "zcGxyU35nD4qbYZAdyYzsi3N2k61QdaFTqFHGbyvigR4KnSmVxPrPMjAXBkNeEFuJooPZYb9yuuXXBzHvgu8b6M",
  "key4": "6WrQPmQppQjv2P6BtHJzJePeVUg4WEjq4Qtw42q981mWRTbH189MWPzTdjfpTAUtRWe5i1YpDoKb1DsKX22HgNg",
  "key5": "b2q5hYYkh4QKgCvHkzGN6QieUccssdLLFcosbYj6EAwY7fMXF4EM1j2U4JgjxhLDMyD5M4M2hTstSDqK4f2Y9VM",
  "key6": "3iiK7xkYSJgjoYjMfbS7rq4FFXg29fsvVpYbaC62N8Z6gQQXVktSyrR7cxcsFd62XpjFG2s9vgeZzauKkssTAnmv",
  "key7": "5216eN4yg6ZJSABsRmKgby72tTvkMCQteRyKwG2aTsSRMgshf8BzTCTJVZShGo7HctmYankW3Tfi9Ktg8ihGLNQE",
  "key8": "3JsoiZMJtWemfi28XsDj35dXHAk9uDAtoPtb6V6UJ3VKnG12PAzsh2Bgd4sew5JAAWNmwjHBdSFHmeoJkj8LQCUA",
  "key9": "4YBbayhFtRmwdmBjtnGvQjCUHu6WSXxP4s5ssRENx495uAHTPK5zQVBPWxtvtR7h67F4ADtQP33yTJGQwhnWgZot",
  "key10": "19mojmr23sMfRb29hiSP1KZ9qMbu8V6GwBAvDcJvLo3598ZK6Ga9m2ci2DrerACKDUHRQTfz6Hs94DRoE7jTs2h",
  "key11": "4cXDRaVC1y7zDj8uiq26rmJvVauoxfa3ihBp35tHsotvRPgJoaati2Emd5bbsnmhf5HoB3cb5xKeZqo1yN3SLAm3",
  "key12": "3AJJfzzsC13zQZ5UZRYteU2jBWT7SNvcempg3pqsJ2HiGdJzkBKt6i78qcniCjc92QpiKVYV3L2XEw6b1Mrj7kXW",
  "key13": "21o5awgAVLBhM97bYTQKGHaKp87PKRQTy5y8eyYsh8PU6gAzXqyBjVKFVRzAtW55s2NEPAFr7V9N5UJnyzNC8fZL",
  "key14": "3MDZtecCARWHfhPsAfmQocroHgxqnQunZYSGzaVWpNzvfYbTJYRJnQJrL3jPh6NV72PPEWw67nQe3HDksnFw9kQ5",
  "key15": "62USb5EmZtjAT9rDBULyY8zdc5XMwokFTRwXEyLKx3coQQ7JM6Tw8RQbakGnZQyUTEJgpgWC3LH4uDpRqPuHCqV2",
  "key16": "4YgrsZzFTM9u8BYseTJ7Qv37eyXR76Bjvy8YzRMAMYLykbenR9y2FEZsQnokoCNVetyPNa4dYF6YsnhqAmDZXg3T",
  "key17": "5XqpKvNyFNK6a2MYiRrCAcZurAzR5PDDtQd1ksLvcw1pDxXVEdGaoTAtwGmMDLTz81YHKbEs7G8bpQVacsyp7v4v",
  "key18": "vyNpkQwXTa97kvkQrbmGFC76SUJ676qwF5QMPjRsRLdh6iPaaBWHcxDjD7hH7cuNnUNVCAqKKVuGn8SDWZcEV6h",
  "key19": "bW2X4N7PHHWMiD3YGPrSnJsCzg37WhLmCKTUAsV31yrUg459AyYxNMvRmRUhvZSkRapG8AmBPDZXG8F8BaYeTmo",
  "key20": "5JSRbHDRxkR1yyk3jKFm7A8Sg17NMpZMwPbCFen85hfzqDayc23YG4yz3ibfsxdKPKHJZ1sJEPvKWvnMeP2QnL84",
  "key21": "4h5CDwoPLwjdeMtxZAm1AhbfzvErBqMt2WBxGjejYLRYXKsGAiX36YR8X1NTHHfFhCa2vFyx9pAoK9PKmNGjGxVs",
  "key22": "dD6adpnnascNBzaupjbA5DiSfhqScYUWntqj54pdqi79x8JXoMk6a3J6sPmh2qW9Pf5Xxj55r5LBznYoz2me7Et",
  "key23": "4pniRtbCYCLVH2z6nZYZHA4JTkmjnQvLeq6ZjzMWwWrmNLH8xjL8T4YdaG43gfC1pADnHRykdTdWZ9pmzURJ72Zb",
  "key24": "PovJC1tdCrTjaYZEJNKFer44rZzA46q8fz9S4PSxhvHHFWuUAz9WsnQjabnaW3tvdiB88p2ETrzbUH6m6gxRN5z",
  "key25": "3Va9z12fe9dq3HpT5786VU8qUVf1D4eBiQ1DCeqYCJGH9ktwTMs7ytn1yr5SZC75v1xGQRhSvNEr41YWybQ1E5PW",
  "key26": "3wqSPpF9CPMrS8pWXWbK5V6pEVHX2XaunJ6mk2SqH7UYF16Gqrj2ZeV2E4cf859GcUEgeGkbQNsC4aSexsWkp1LE",
  "key27": "2QPQSJ4rUpT26UTCx5g2fvgvCJ9Cs9bE9bGCccgnDtDWWKJwoKJrWBrZYreSZvMTf4YU74vHk4GVmkogXesytPT9"
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
