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
    "3xBENt8fa7ZiQSJXXBSJAufhBCg2qXeaoSy3RcDjZyZFh2grnGeLyUrXd5rv1DDPMK9FafRJvBYeDw1T57DZKKCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H1TksS5AvNFF2Fp9bhsWY7ALbB6t5rHMeZzUozRSRKXX7e2UGjkxQgL3hZmgdTZR3Vq4UmdUSSkNZ2wV9HbbouR",
  "key1": "5XThzzV8nWJuH9udaWnWYhTTScVjQvZMmjw8kj3NU8BZyw22uEsuN9UmEns9SywiTuvvoosdXCiHDQiSqCQ979gD",
  "key2": "4AC6fBpFBnZFm2esE8n7nM3WbhxJEdW3U14pid4FsSaXUtGMm9NmRaVUogvufdhMoYAucsq7krefPXquaiQCtN7t",
  "key3": "449CvRuhuRdFo7hKHr6igCL6hcXoEon4DNvAZGRZtxnMKm4f3KmCWR68mMmDC4xsMUEZZYywgcW4KxjuoNxAtDbM",
  "key4": "x9f7BF6sgDqJ95aNSkVVGuEbDW7LrLHNijYaCPz25rgDU9MmsezTY3SyQ5zjuu5oSie6rtmShir3dgtvrZYteev",
  "key5": "2uCKNsysGes5qDH1UBBuum7esg2fmSSSjcghk9YYsWiyr79ztc4d5pYau76ABrbZUQqUsTVypLbaMTsUVGnPkrqF",
  "key6": "3N9QsC8DpcU8HbBbDF9wRVpe9qer4jZk56tUMJcNrEnLTBSs6RSquzbF6rE1brZQUy5xXH2jz28ZqsBgmYiHmnqc",
  "key7": "56Az7PmWxjwpwQjd6uoJ4t96hbPbwP7oCi6aW4ZgzpLmYwC3ik29np4nrUjyXEiVnpqn5qLaKnwKHvkkfFV8rGDP",
  "key8": "2X6ndZhc8MBgad7TGTrj5xqsvbWJCAwUHUjjKzhKknajSviPNCpmukz68pAVo9cvS3fNJCE93ppiuTujRv7xrZik",
  "key9": "vLmbb2GwE6J9a9RUzjnx1b8zJ9Hqj5nseUtNpjZGzcuS7BXSapSpEUUs3PXh53eCdh74cqy9hVAtwkKD9girYCc",
  "key10": "23Dz5YTXRpHEmnTBHNHUzC5KdV2UvnzWbDsATegdQx2VtUm8DX8DgacKB1sJ5FpXpp6s8rPcZLSFhjFVxNsJEfU6",
  "key11": "5cMV32iM7ySMo29Da8CKgx6mnarJSMtEEhfACuzsdQwUgtd5Z7Tx1mfp5jwP9rt1LtCVwgEYSLHd888vbq2oZUKY",
  "key12": "2jpB6RoumAbPyAcrApdFcEENX9CggKXkaERoemnUs9D86ZQYq6AvaKe7nrSEqA5RZzNwTCtyxsJFVcYyPMMbZfcA",
  "key13": "5qmRDMgzH2fUrUtgBqNyk1t4q4r7AuhDS91k7xZaPNz7uMLEQcRtK22DHtWNweyVxnnbuhc8XdC6eWrB7n2G42p5",
  "key14": "5zueEyr5CzdbTQcCDLNbtoo9kN6n6MEZH7aq5xs8SxWyuFH9gMnB53bsgQwsgxA7X9J9pjBhUNqhx37i7D1HrR2m",
  "key15": "CEsYfpmRyotU3VtMBCpVkmpSTARGdA2bt9JtDnCieWwnMGL82p772LLTry3kYdyKnmoephxzX9dGDKdiZQuzmmd",
  "key16": "2wjwgunNzSEnd7DphnxKUurQ7SEnAq6q52j91qs2VFLdm3QLyoGJ8o2UMRsTuZkNEYVYY8ie4Z2L5mrbeqSKNa9J",
  "key17": "nQ7nu9XNxH851wLDbeoPxo7aJKFe9NxpZHZYPumVz9Efps875fZ4nUvYMRUoUXUhF6xbpqeJJRewHgL2LENtrP6",
  "key18": "3sPGRUJXybYvunQ99WS3h6X4kKXxqe52CWVJdNPpwzrkcRkxguPLk7rnZs75WdAgveugLsB5j9WaMar7qHojRawZ",
  "key19": "4wZHv3uxd5A9qoKtBZPy8trwXrJR2SR8GYZ5TtSRdQ4NtSfbQwhpmEy7PQVeo8bmk1y6DZEn1KjzkREEPW4Ci2V",
  "key20": "2mThujuiipuiX3Qm1tHPRpGXkfoLHbbur1hCdxSbYCnq9T5ckK6AZmRBiQurv6TeKDLZ7nKWvfUDQrTNkHAydDDz",
  "key21": "aPNbpQDo4woj4gtqLZ4k5m4K818kj3MQzgKyPha3pyVUHztVdC8m9Jtv5hw1EXVJriv9UVJdDt2ifL6kqcHJULg",
  "key22": "2c5TtQQLEDscGwQ2gss5iVg9HYfZeCKKpYmfifatwJDLQYnD3z3jYfk7PSngRZUjFLHz6JG9J3S1QnrazsnveTiG",
  "key23": "4GBLJKjoKTKZjbcYSDn5WsCRWcZDxhGkC6cch6eY783UKpXWoxXrTHGTt6KHjMz1e8xktGcMjFF7m9M5mA4VodqE",
  "key24": "659pRg5xANiJugqrCEJTvxTyw5oPByBdyCDsUUhm2eXU6qANX3voW7TNmY7nmDsJ9CGwBuvQWaK2KhDbDQwfigHD",
  "key25": "5KQkNKFQZwVzG6tYRNYX5ENfTG2TVtVWM1kh6PWdh9Gur6PQ7muW2ow1twReJ2oBa9k58qnFmqSA1PSm13q1nKL9",
  "key26": "2RwjNTfv8us7oNm5DbmVYRcYU4eq2akbWE5YHwikhAhsteQLhCM6eAKccePUjFbNuCPmCy4mGq3NFJUu4rAqUx6f",
  "key27": "2Dt5qBEcyREcm3LkD1sGA74eMuepnkTVVPEkKhPK5wTAyF9n79ix96bc4F6m8KSPxbbsLE4rb1CNC8vVTTcDinPU",
  "key28": "4bh3Fu5WZDRHZXyXqRpZm2Wyj1JevRYfdc3auhbz4WV5QExJyEo22B48K5b9sjqsM8c6cQPMcXFY1GjQyvWJp6SB",
  "key29": "3wsXYhe8YmZnw3xni4cJAEpkMqkzEb58NcCkBTvUnSD6jJdHHAkw3puyJsWPwgzUKR5KjvKTiUwc1fojqdZWimP",
  "key30": "XDqtbBqYEiMWMmmaqYJRJr45xwCntHtVtx934FBe2u3Wh9MYcEMTSup546Whezams1BFYkE3ERYKYZonPqYR6U5",
  "key31": "UTewcQmQ2TzuSqBzsQxRVth21WNPTjrexsgzPw5JWqh5ZdC1nMYvrGzjaYUnAvNpmbsntxUnhWjh1kq2dnWF6kD",
  "key32": "V3C6ZHG76hDLksJ1TMzfbDcPkUvLhQfGQeDRizhhbfyiyng6b3SF3KHXMSQF9hgnC3Ag5scvqmeSJJ8QHwzmaBK",
  "key33": "5PP4oX5BrrXBuQ9uK9zMC2aSBsMY15oQFCuLaFbMvNd6a4wbwTBsLZkpwEuRG8wFAAQ8zBCtd3ne8Lwrz63DgBSX",
  "key34": "3v1gBK1Uwe23PXVfpWiAZCXsmzFC1nLpMBrP3TFc83g5eWCQ6hpTp4qicjzprxrQbBP4BK1RcPkVDZf5tZSmZ4Xg",
  "key35": "4GiC4JAvsb8t3YNAVUcqeWacAXHhG3LtoqzXanfPMew5BQcEUUb88qF26VZe2MB6qSs48BpcfagVxgYhrU31c9CP"
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
