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
    "5nsanJzpedZJEUGyo7GWnZpCBvTtBDgTzSMcnWY3dArin8KWx8NirnAn2CbsmDxKuspo3KapJAeoRbpkpfSPiAAv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LtzJKaHmPrNvNbZsfKBggUvi69ecgK8dBcMRTyC5MKmyPb6iq9JbbzFeF8AGH8D8nbh89yXkyPaqc6MQ5QDzJsk",
  "key1": "4W9ZrBi216jLbNFtynS7oaydtJzkEJuaXY2ADrPcag5u4nRoqx1XAZsnJoUJHHuZY8K5JRZEm7L5dN415FunaJkd",
  "key2": "4oeMtAYdkpFSe2BED3WKKgmE3y2YBBeD7UhrGfneBJitPCrMRDe2rdbF6hnfozmPtNCpAbLmVnBPAaxbcmB8fJJN",
  "key3": "2mUYf4Kv6c8BHWXaZ6BP4r6SP4PVKcX8w8uPCQ3sfSSB2d7XosTCryGYjT64GGN6T8knQV4PWLFAcvwSbmpPxeNk",
  "key4": "5sggo6pLFaaFPjbhzk4VtjnEXNKL91qNrq9kdZnNEkaK2XoxwU1DAegwHfBzEy5NqNCq6Fm4LmybfPBFWDZ9HWtY",
  "key5": "WR1WzavJutKWQ17nZXXQET3C1iHx4DhAiJYHJBQoxZvpVs7iHVUmSnLFGQpqreGxWLfRfhAG5PaG3gqDmPxhjPT",
  "key6": "2bPUu7J1GKQkMJbaMVtq5TPPwEoRLkYc7Aj2o88KkCixoAsJn5Rj4HZhR2fzK8uC983LhksYyh7pHuKxzaYsQPwb",
  "key7": "33pBZoXkTtojK8YGD5u3n1bmGpg55YFjC58qoxC4z1csgff7Dy1cns55X7ZaAzW44jHS2Uv3xXJS81AXyAfMmzcn",
  "key8": "56upvDWTaJ2iegj8gKeXJ2dpcPLYkJJ6HYruvQxYtmaJu9NKGQVYosR6Km35ZNks1ULjTLTQfnmSDTv5piTAAP4Q",
  "key9": "3NhUCPDvDbTNPAH2bnGbmoDkCkkrHfTc2ihin88sZh9SLVMSJUcH4QmLCwzdvHmdTzqztBbkKGSy4J31rygMTiqz",
  "key10": "4pB3gvVuHXemL4B7joeetryYnyCP8NXWUSC7vzAqv1vSaXWM5qDKdxDCiMQ79merRjVTnGLu9mxqDsHzhRH84v3",
  "key11": "4e7YTcrzzKfY8mpwhPExrKRshJx8TTXTXiJVbVVt4FmwdxsCucHqGD3faihnQQc9TpDFHKcztykXSLJbBwCixoab",
  "key12": "5Q62kA1NeLdFoz7TuTA9158TN9xuXJn4DPhzMDwNiftZppBiVktL7ouBoSn53XBpz2pNzdUAdgQA1ow2Ti4SLt1u",
  "key13": "2tL9UYqgBJtoa73NxPr71yQzUCmvioG4NFzdZjpykLRhbWqQbAiZW9JM1uzoHBUxhQvUiHSCC8AL7krS6hVXyUmL",
  "key14": "5r9uQxCEQ93cFFdBt6cq8MVfp9LjhT4da4qcMAhNrL6ejCAdvU7NrtMSLtXn7Jhv52tkn1MCc6GX6BDzVSSN7paj",
  "key15": "2sJDBdJtAfqSyQri1hfc7PmukWBKAbdBbdagy69oXSVHzBjG8zu7Szkeu3TwyiDpP7jtVDCPspFJoLN49EgmbfhE",
  "key16": "qoGFvimU8fJj8nsmRmpV6FXTjM4M1vkCwjGsB9hhzReaHwxed9tBcsUC7TwasHt6PR66uGLsrVKWiCh9NAonXN7",
  "key17": "4a2QjGo1EkdM84EBKUh21G64u1jzcmmnXZU5kLaDDuDMyMDF85J9LaPnHsQYvVUNbXUncFQvp5pFdqCCFmtac4gF",
  "key18": "4SPTY3WYe7GPStP5zDZcNyDfpECUHK1RYCcmWLGDST9ottZDpLskrWSHaya2kJfRjJdFCA2hC4ymRdChMjUFU2WD",
  "key19": "5oqyafvxKhLBiorqE9DvsgrJUNUxFPKMxvQUzwZBwFn1hPXSmL1CErVaF9tm1UVYgskdtLzQRKuT9X8SfT7AStjg",
  "key20": "5ew45z3PjpTzjaq4fqYjCze9hSvKLVAXVDSKVDbGGP6yDdMxQTpKBgVZG7Er3ZDeewjwvtQCnL67Vz2VdMuJVZNW",
  "key21": "3T1s5KUis7kpoKKvHqnpp9q7SQTtdFHfywM9LPqE6ePiMJzojgiypUh6Wh1SETJtJd3CgyYyStbDqG8npKqDwnKf",
  "key22": "4R2XRftGonGRpFSzF9jRi8HvRyioDwbNDdRV38xaYtBSpthx5AJ9vDhCRAAJJRHCiEKUsXDgKmxd9JPGQ8noq8GX",
  "key23": "2ZrFmiE1UR7SpfywoRLHaVKPMoyaSazQZGfkBHcYpV8yJ6sB5BFF3DrV6T13sipYeZtkM8GaVkXzd4ia5gzZhX62",
  "key24": "4Li6pQAc8rKiJVyuT4koNBG8mLNobsE8dn8gDd2xinCwek5X72m7tU2KyfR1GEvMzpSEedLUT8tUA4YcDUPXL5jd",
  "key25": "47BXoteuHJMy9rMhAEz2Koa7Q6AVhasaKxS2JhYwE8yWjqWSi7AKBnBQcXTeQ18XmBYF7zciMSuosWeZvRgrE4JA",
  "key26": "rffMMux7kqrdynfhT9efuih1ES5yQEQzJ4AVH7FnxGhRLXNB3mvfGmn8jYvJ4WSBXEJkLx3N3q8FrxV8UDCVcvk",
  "key27": "3Ukn8yqAL5KBSx66kbEhAGqXEhtz1qnU4YQSPz5Wtsj6b5UEQXd6Ye72NNSBeMGmX7rmSEUdFkEb4F4JAm7Y2Avo",
  "key28": "2eb6i2MKNVQYP4xwHt6v1uMQF4UAkHJJJhML9SuQr3a4uzU3xT9Nv1qUdzCgQnvV4yzTADNGdbvBDerqNWf4SVUD",
  "key29": "3Vs234XKGt9KXTBN37tC9h8kAZzemoX4Gm482GUJcZF1BqzVv5o6DDeKbEv1K3XHG3NyxnEYGGKsnzf6WeaQeezH",
  "key30": "3DB7BDr61W9d5WkUk9PiYYmYxQKJae6khddDZToHS7q4X5PvVRo8T5fAjvY3jWUa1nS3avzxVHJHzyg54EWzGuZn",
  "key31": "5bj2PzuZj35JMg7cKmnNHjHgYWHyz2HmX6Wm8zXMcYxV2T44LedWqSQKHuaJ6oL8NLavumzWNoYbhGoFf7x2EpA",
  "key32": "38gnc2HhHdbb8sSnbWkjNfnG9C9kFgcZ2EE9V9KcE9z3PA8UGvSpGpKagPSQDiF94dp6PBDPKp4ZZHtAbq2oS1No",
  "key33": "uxZ9VxZCoxJ2hbZJ7ihMFoC4o2ggaEspZ2SPiFJagkbsxEHvdKuBcDdyxsjA3KVzS3PjFD3xXzvQJz8m1hfZt9y"
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
