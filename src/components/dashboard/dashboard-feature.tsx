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
    "5pXPumNaDbvSKoyB9XFqTLd2euFXPcrCH4pvcszpZMmUByKpJGhB6gsgprfXDFqNffqiwn419xazzChKWqfg2u4h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ydGSSfzVEtyXnt6HFYVXnUh8HU2BuQJ8yXcGVMMSQDvSMTmk9Y3JDMhN8Cg9Jew9iHJLE3cSry21iTEoHuzYrQq",
  "key1": "4f9eDqGdt2kC9Ru3fLwuK2TRXgNotKWL237j9snvYaDVXMML25MPVMP4UJByTa9uUtUKhgtCYEnXUhA8nLS6EucH",
  "key2": "3s9CJsGKygKCHgPeG52nyTRi8uDkTRoUJPGPKby21cZuMXphjcAmTTxHJLAnz1ejqwC1nkNGPAcP52K8DCXyWDQk",
  "key3": "2ouvZZuRmVZFq332ioAZXG1U4gpvsDcuUu3BABs22DxRDHxEN4RvxcgopR8K8a5zq25pD3ko1vorJCRmAejJAB29",
  "key4": "5rHPDLB59dt3XjLfDt7yPAgWVufGhavc1Tffa7hrG9H7BgDo2uwzpwwwRHFCaxmakBmX8cdrhgXcP469j4ES9ZFW",
  "key5": "2HZaB79gmVaoea9xM8Rj8nkCzHptbxFsChA6vAYuYUbNZ6kjt3ygDxhsJLvY4B9TEdEfsGtzoT9Yjg7sFqwBX13Z",
  "key6": "2HuFKdu5qzijwwfu1NdWST96xguuvaMDrRPZKsMJFD6BZbSYPKjoRfnLVKowfZDi5JHbNzAbcUsDoo25fWwXSLYn",
  "key7": "5u3fhVBQsX3L1BMGX5yZi4m18ZHmTpGgSgeR5SHchRmy6Ug7pKqq5jQ5yBpRPNcYp97yJpwdSaWA8YBzsScbfFfh",
  "key8": "5vesqMjR7VRmuerTbyqWgyx11QpmXoHRVvU1btvkxpxkHi9jBPVoy21pf4ivu55142dNivuw1eWUstRDaqNpcDaL",
  "key9": "5JhQjddu4BdP7jqAoCRLZntL6sGJEHMy8z6xG1xMYw3crFsCiTiTRnG7or7MzUvLAgiTaRw77QCBukNW19ppBQFc",
  "key10": "35UqMhnfZ4k1YU8sPuu1ZWJ7aYEBJG68Cd5vwVQ5pykFXtAku4BY13VryVi6JfioWb6mfmM3Ys5WXsWDa5omYTv2",
  "key11": "v3TGXaRnN6Y2D2jy6tEt9U35GwY53qkuLj8qLzdaZwgriq2ChzLJwgs7yap493h7WjH4YiXfYzbaWNYNNGRnkbX",
  "key12": "yyWqufBX5x23TRokiQJsUtyUNN1VruCTbtKhiC6RcsrFVRM9dpw1vtUoziPjJdz9zic45A9YxAAq21KZA9yKdWF",
  "key13": "sP3P4oJ93Bu3ubZwZgvD5ydkzf2vspds3ePDSCe8vsHRy1jmUwLFqTokvFtWC1Ucxzcnr9ymsWNhBLfnB8ruCCr",
  "key14": "3jFyc4yYAUdYXgLKKxxMXnLLDyK2cWPJZJU6tQbvm5o43Dj6Szqwjh5QD6NyAmS84pGK7R45aXqERWRGNY3mbJQr",
  "key15": "du5AQ7Q6o9YTkcaG8cn3yALTt8jKGRsVQ2g1ZRty3yy3H83e5HPtL4vjWhXeiLYDq52sf6BWa963eJD9RYHmeCy",
  "key16": "4Pr7NM6CpZqXk96gZ4rX9RQfx2Cw6dQa9KfYdXHm6SB1siYTQz5HHFY4ik7eRHqGhtN87c923n6y7c37Ssxurk6P",
  "key17": "2oFrdpnbaL1ftis1CVNgavRb1LwF7JMvrcNFyzbszmnCwjAzHVGhqeUjwQdgX9FMuMvaitA97su7FAuXWavGvrNU",
  "key18": "535zpvJPsgs65ogCEgzzcfQCEGmgvLTb6RaVduwcr1URGQgtiPmthz41CDdCBdQQm8kk4AaqnL6Wef1SW3bm6Wmn",
  "key19": "62NQd62Am5C5kKGDxNmvySpK1cgYBf8p1davunFqUNv3mq3rPkho2TNEE2mA9gEGhBrHnUH3VAbpEh2xcTYYZaod",
  "key20": "3w58tCVV2Dw25kAkoED54aEDKtx6bsmuZrgbJjjJ7oJFxR1h1yUwYXvvtZsj94nQ9Z8syw4UsYwQH4puYXQqM5qT",
  "key21": "jq7SnaiyE2Z7gPqFL28PooBeTqLeknmiftSnBu61Rxw7K65e3iBhzF9pB3vSdioDdvjx8dvYJMGTWjeyMcAC3um",
  "key22": "3jm7CQRB4Sb4vk5CuzXwYqcgWWZrGkVSHzU1xtJp5YhGnQYRjh5t1pDH35tg5nFUpsfTDKjaoKZhLzZZgsjws3Pe",
  "key23": "3TzCbEpb8tMkGx6sF7Djac9ffJ2bbGYqd6iL8eQC7qNqwaRdvAxcNe1omW7xzmtentuUjZLCV9LV7ggkG1dgpKr1",
  "key24": "5ha3M6FUrw5BLtmkhXLFPZmVLKCCYBicdudrjZMFAfjSGAAhWQ1bkmmgjbwd89t8HotKwDXtqCnG58Bvj7rvidfF",
  "key25": "3ZRUEbZSvKMkocRvwTGPg7NwyNx39Fc86fZKerVSQkwFXCTMTWEk9Ex59w1AmWjAkwjrbBromBE7qBstq6Zjizys",
  "key26": "3kVX5cpXxyeDMz9HfRwBcEfQTT7WuJk5VsKTbCArpue6yjakeBH9p8FhG2KDgv8CEwW2hbePNsUr7FiZeHSdcGfT",
  "key27": "3eSd6RBQmRYxtRSy4gePnqPkbEL1CBH3PGra4tEJChyh6L8ziGKD6LFEKg56SsTVfddsmqT5Uwj5woYbHAoQHRKm",
  "key28": "5wkewcuKGcVq8T8JHsiBbJXMQBBwVzkxZAAiyxYJmFzJRXRWZP2xZE8vv6R72xy7faM2RBRHWPGLBHAYWHWiPaMo",
  "key29": "5bas6bfbMmvVQBpxEpAQVjGMq4RFToZtxUsaiow2pKfELDpg1qDY1HtuvKABNkb1yCpQCRrAET6mqkrDQrqP3it6",
  "key30": "3A7Gb9AmLYUmEvt2jinnkk2WucKBRZbWYPJtn1wSZprxAorGht3rAoSjutHk1rZHGAJGxhVvujTX54dLqSpBbKxF",
  "key31": "4SaxUjY1PJ9akXub5BGnhvkMmeXdhUgcFbxJQCHbGmS9vfGMvWqeEcJaxEuTZ6BVCdL6YTw6NHi2y37Aqi9nQ3t3",
  "key32": "2Awaff7xtL18JYEM1rW7JJnRRWUTWbEG7E1FurLLQszPguwehvXoh4Z5d2J1V7QHsMtQGzv3jiMpkepxMJB7pmNB",
  "key33": "2W1CTotpYUktjG3MC494T5bM4WqsRXoy7ur8WkeSa7fDKyAVw1jZtefaarbk47XD3RbJz7HWX1w9L6wdcA3pvDVi",
  "key34": "SZGKqmT4DGaAvwL6X7KdtYiiDJW6dbsmbM6F5mCbynj5aUUBvh4yxfe2gR5fG4xbobKp684eeahmpaEDDMaqsBB",
  "key35": "31uZCe59Kn6pzdQCNSt8KeXjgd7UeprUCCjS4twj3SNHQVGYuzez1orBTEj8ju95UifCJBxUSUpapVpEfNeJLtcm",
  "key36": "3iy5Ew4YhWoveL9FiwdnQSeZHU5RGrWLVWhpRoQgux9RKmeY6ReaewCamZvCM6CwzGZjTepTSmW1ytkucR9kmvWn",
  "key37": "2FzFkrgmBEPWFZr3uMVnXVRxsxEMvZ6qFpEAszqWWKqxRJQYaqQFcQ5g2KmkavvCjmjKbUMCgSyGaiJWS398HtrP",
  "key38": "5ze3ZSd84nvHA91gzwMnHWTvWPxwvYf8MptBkfJq52rB5DTDecdGtfHufGK7no2LUSmynhH7W8iHF37hrXmymAwm"
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
