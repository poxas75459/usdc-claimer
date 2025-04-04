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
    "5vAy6rbbU6CEfZVSxMGhP4nKEujhHnxsKvCN5rZEVDr2Xushvr8tcUbNhewAjME6khfGufm797dDRJwo8MCYKukR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64HG3VFhktwdfyXam38VxCgGme6LBNjq339Rtxk1zgpLcUEX5rZGRiMTfTi5Yx7NcHqWBbXEq35DFukxYYbfJFoQ",
  "key1": "4c5tWvGEtTdNT9aGGot3q2Z5pEv2HVVfsUpsgHtS8XEgkV8hhQQTsRCKT83PC5hzFtQEL6DjfgCQFJZJpmUgqnEt",
  "key2": "59oWvyZi84nXre6EnQ76nWUevoiZdjD1KhCdggVzSZRC593sbZWm6SrsmibEMEWtznDSMRcTA7h3TkcxQ3PAixcb",
  "key3": "62zAyyY6yGwS2eLfxPjqmdr8wz7vZpambrY4dhdCmP4uMafcmo24tZpMM5SDrBPniLzDwYsVQzW9bQwWkafGRSzk",
  "key4": "3J21amQJsGi3r4P97yEq91DAKvw1sMQRDSiiMtmnsWtnuzb6CAKnuMcUGHBQg3HtkeyKKePuLBcUjCrV8BJv7n4N",
  "key5": "5MxWiqZNAvBD5eL8hvd8jBJLnfUxceWFVP7VJNMceNS5eK4Q2fUvBpJRw3J8QjvQC9tBGzdgR15aj824JvAfMGHD",
  "key6": "3jwvdeVCxnraQH4c7DCrkSwbn6PwUmy5X344WMg4NHLaQueqGovBeDxccRGb6iUoSJVYcdvLbEmzpD8C9gawYzUR",
  "key7": "2s8F55CJDtgxsJvtHWf9t7iS6E4M3vvUAgvFjZVF7Y5Q8Ggt94ASNpiu2emrJgRsXG6DpB1bnWgh57TnseHiKyv7",
  "key8": "4H89V1L8Zp4nHi724tAS6LzY7CdZMP2XSwkP8xYRDbNh11EbbQw1if3pfE55ht8UZhfGbToxvFHTLALdEuH9XBoW",
  "key9": "duhE2EV1AuWWs6vVarBECR5kGfMBei7fUfrNYcPrWynuFyMAKtjDx9H7Q3VKoAqZwpEMawAeJzfqsryfYKGqm1Y",
  "key10": "3WVzPbUrwaNqeS6j5iAoDh9biqBG54jGuppTcdi7MHqfmU7Ghh8jKb7vApFhdtT8DDSfyFqzfmFHRAhbwJZq2Y1z",
  "key11": "5SwPseqWmTqn9idSSiWs1B5bgYDmvxs6HdJaw7mJXhryV3mRXiGHG75pjBX9oGNFVEvCRutSbaYut3ZxwZyShGoT",
  "key12": "4dmnNVt37nY8HVVLPfpRN7ZaUsiRmUF2SkrWChaBn5VpVPCmBEDZ61pbvNVZmMoNneEyfLcE68nfeWXNSzh6sC9c",
  "key13": "5JbS5pkA2bA8PpZiPadjgiDzapVWnAwiPkpcQHzU5mQuaVYU4UXgSKT7TkvFhpvpJfTi2HpsZPssBXj5PHcjZpkj",
  "key14": "3c7hCDWu4H7HvoaEvML4U2RzzaHsMBXi7RaiRQfCRgw4BkJKwwM4mTuniMpgtGbDyq4ttj3FNtC95bP9Mf7a4gn1",
  "key15": "29bSL81DJJyvyzCi4zeWpFy5GN81oChR2zo4Tdmh9mbkMc6uZBn7SHUYRMjPR6QBsTZgpbyWpLTUR4YgeunWejwK",
  "key16": "mszirLtNuKq2uMAcZAGnBKvQx6wrTn3V9tHRDnjmL6BaeDjntJZ3SaqdEtBp4PkowXXjSQ3Zn6aJBCRDYeiqiRw",
  "key17": "EQFtcdntioEggGvjfZPti21nMSVqh9mheq8eJVxcbVhgDmjNEv7dFBL91j8PzXsyKba6uqFcXCUsTzzbVfFs8C3",
  "key18": "54cKkAPC31kNNnruL87dEA2fxRbLAhy2dgoGkktJDH2hJ3KEoQugcXN4SEY7k94C75WueGZUWAWWvUCo6Qnq3bY7",
  "key19": "KXcwJTvbaoothyTZit1K4UHzzzieTwJW4KNvqpGrHD7LJBYP3A991Rnnc98bJYL6ij2GMZqiBoZnFG9iUWHbEXN",
  "key20": "TYqrgrQug3vsRwvAXqXAzFZg7DZ5Zsa5DB7wk8dY2f26iSgLATBSsM65BKvEdQHS8aa1k8FAJusKKZBbEuUKB55",
  "key21": "Au1vTz6xivzNJrqSXHG95H7NqvkNJharcGxzyy2zZquL2mBdphxXuCtt9DzRMg41bm3qDgqr1UGGsicjn41W87Y",
  "key22": "5KsnSkQN9gCGstrzpNicjtkiZcgt3kbFHkANHWjnJVw8o4krpFGmiLCN6FQ2ijyEjDrUQmW9Y3BaAdgMq5GYVfbZ",
  "key23": "5aoMNQz4oofLAGFDDAtAhrUeSdPenE9dnHYJQQwBLMzb1ez8fa9J7u7zTC1HMggUTcxZQ59eN2LThdMnw9UFQLhE",
  "key24": "4LS5Wh3mSmV8AnzHXARWKdFuqi7e2A7mRZGAyzPYsCWbeWZuXtbAMhTtcWGzANqd4pJCFhCZdmhvEquMwDTKJMeG",
  "key25": "4vmQ682UgjJijmfNis2t4gZsKH19WJffBDaWHdDukb1iArTLJ9Xk73ujGk3iaL4LuPqEoAD16HfQJNzjvDqS5PW4",
  "key26": "5FczUoU8dz9K6575ZMyoDzrPje3XaGgUEyQPuwA3VXJ6gGs3QLz8bERFaKmxnY7RTb5VDFf5bq5ZVmeRcFYjb3Mf",
  "key27": "5WmFQdC9dmQNaehNSzciSPXpkuHGpqsZDkjRYimHRFEpLxgbK1tUPx1mUwnHaP3cM3cQzWCtejETEHbACqvBMbEv",
  "key28": "HSd6iUrVgQZoza5BVJDw4952JcZXG84iAiZFTyDyxqU4cbzCZeWY38cHSTKK4dVuKQ7jdGDgffpARWAt2acrtsC",
  "key29": "QFAQ19LN8T3ALyjPgxygixrUPekMN8KdMmKWvTizsNa1FET9DFde81EeduhEQ4sgyntiysQoGMBJf45DyJHDeSF",
  "key30": "5xLs8JaTD3pHbQLVjtS6bPE39mgMyHKChpEXgiGACZvnAHauWTw65JS8RPgSGEPcdrU98VhBPZfLg8AXdf7BExm4",
  "key31": "SYw8hEemawWtYbZqvPkD467PguesnEhm8fogX5qiZDimtaYLvKyZ1ja5Yb8fxTVrAb27dbAnkLCZN9kzXEnXh7n",
  "key32": "2o8bziaKyNRpxJic9jWaHzC8RuapjDo31D7vn5ZYKWNXB3T9barn3xEU9L9k21Uk4FLtbsQp3UDieduuZqaYAbnk",
  "key33": "3VQHzpWYuTWSWmPPBRJ8fXLupZr38LWMq19FMFSHztU37vaBkYvdeQgiYE1FipvtJCdCnHKzR3LUqsWh4L7vS3d",
  "key34": "4uD2RaS7t1CFjwzNyU7S3Z9E2TsfwCUrWD4bg17VSLEwDvig2djAgTZXJM8a9UQiTEZp1tCZ5HuENSfX3U8SXtGy",
  "key35": "5oU4aLxjRVuGa85XTu8Dmf6PBJX7giaC9nt9VPq56dxdYgDj1teJVS9hQzAyftkFUbiSJEcsYHrZp6sZabM2rnnZ",
  "key36": "52N8f9Y7fZTRfEqpJHMLbGbHUeUzQwoKx5Baw1HzS5upXXJ4XQ2gNvTSSJL6rpMDVEyww1nCU7LVmwPZDpfwxmHD",
  "key37": "3VJP4LCmx4pqf9vQFcD5YmZgHkGrLtmA7eGJrfeTz9zoxYuw8qZUNsP4X5kzmmYzy18xMQN5RMQpGU11yLyud7pt",
  "key38": "65suGoga4yLVXEcz6eLMYJ2h3DmhD3KWpA6Fa3jU2wKcWxEvgQUckXsjB7WNY3X9nTyXVFkbiKHQ3zEL7s1p776V",
  "key39": "4RL4obssF7rtMTxdi8DjYUiosb7iABidqCEyWNKJ6ikiLLu7BQ8eWsZpJnVdRoAsv7twaJNNSTnyfgmQathb8Wmd",
  "key40": "3hhyWNRsZLNaQsQZSMhgpB1tDRv5b298t8ZbASgfyEEUpj9BRxeCJq1dVcoJRZYHGa6MY7UJyNK26iE872StviUx",
  "key41": "3wNQJ94jYrtBh4Uy3WqPWWXKJXHcnvXzDCGzBXiNLZK3jj6vgPubBP3XPcJDHG4Upw9cGjv9QteKvginuYNxisUi",
  "key42": "4PhcP5RS5xBRM9eU7me3GnjPNcunaYhAEDzavjzUv2LJJWzPWR9RkVHHs45a1yu8fPDMLDP6DP2AhwdySEVFdZHD",
  "key43": "5UmuEeQdBofvqwSi4EVfYhhbUKiAqeHecVmCZGt13QRHNBahvAnvsmZ7SU2L4SrvwPSm7zoY5fujmF6nzozab4At",
  "key44": "56PvWkXabvB7uCFdDYMjxo5KtrfDNFhNpRQAbpiwFArdEt7QE6DG8FWWadx7CpPnbXArNSf55GHYkiC1AyTCiJgf",
  "key45": "3nCqjsMqsKjuzfvjQnYQ3zP6WwyzDa5GB6hmh6tFqq8ZREXQnFmRhPCg6kftUMccGwdP9zXVBaGmqkyPnsf6qvp7"
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
