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
    "53g97hJaztw3kiBC16vQsYCAyWUw9rMVoCGzyoCFWzE1Af3ADkt3cYwTFkq4VghyQaKKxmzmshLB3n1FspVAXzvH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ij4Vocg6466iD576S2xHjjsxziJE5PWAq4jhYq34e41pwH8zhcUBqgqPb9rnJ9GKFVtBUtFSDHS5cDnFX1gWfhy",
  "key1": "ftbH467e31BeJbsh7rEBLgCNRGsAS2VkZ5ZtvptVdo8bZTjsReZJLA8eaNnWWu89iU68wUBusaeZyD15VZm2THp",
  "key2": "4uNHwDmrbfhD1y41HcpEYsjhEUYvYjdG5exsm5k73Csb9KH6vjVjBboZaw83DEGBduHJ9U4T9eCoJwG7KZ1BKuCG",
  "key3": "3qpjeMKfcC78a9dWJWfXze7BN25hEChq8oKCeqjpb1nQR5tN3n4Ksa9dETSQ1828hdP8i9wDihi3gxEzsMxrpL6h",
  "key4": "26WeT3w4mBCkmEqhM81jBjZNBGWQRLfEnmhDLGhAYpF3AxdHaTBLbo32CiuSSUSN69jqV4dzB3ATmq8YRMRkPEsL",
  "key5": "4peR1gXYcS1EAXtaSY3QpXgSvLK88M4MMnQGnioCWZkym39TtHRHHysKx7frubT8DhuAC9EqwZsSaRyjNTj5RrxN",
  "key6": "5jJgiYVuY8x4QAD1x2qwTRJtNyGbEyg9qn2bdTbXajcfh2GUFUrfehRFqtcmD17UqnVJ5a26rkRnqkyah5GiL7Le",
  "key7": "2c5aPRQGHXadKGbwpxjQ15VyUh2TT83neWX9VDjro5jtsssbyV3RtV7cb2yNeXFPdwGHPUPgHtR789rTpWeLHhev",
  "key8": "5kRyjNaEfoqr9MWgSJcUZyU32dQNLrgPJA6UPSE7C21YXYTQUPLXhyiouTaRpsQyEKeeKJzwyy6UaN1QDu2fhqU3",
  "key9": "2ycAwc2iotyo1cQHULMA29X8KAB1QiErYHwa9uT3toKPLUmBc5NGvjf4B53iMjPuKBDVfdpQbLawip1M9BizbDDu",
  "key10": "5kq5D76G9ggz1qd5ixZY75ZRNTx9d7mYzLgD7kjk8uZSbjcsE49pxMWDWMsS5crkjjf6MLY4RMNEba3Pee4bYQ16",
  "key11": "fAY8JS3pwmAU9sp1e2Uc8Mjp2wvR1JefPmiEcyrHMQZrwgjKjFDzhejbdbvmYjCzW5BVHAN4QYwbVZ7W3cDhg5c",
  "key12": "35aLsmPpVmL4nijiArUANPcro499YEwuVhgp87gPmGSAahGTEPyaJzanhTgjKGHu8fhCGGAduCFjqpTYqMieQdpk",
  "key13": "5Giq1enyB4SVLRHHnsMTuk37vPpiMoBJJUpBwihBfVyGwPNZCQBfKe9RnH87wg2Hy76bVy3MkKTS7e9gUR7SgLAt",
  "key14": "349MKkhknv9qzHcsSQjynPfV7F49zNow2uEesBPLgcyeJ9B6fstifKDbfrRup54sQamkPdDvDpu2sZtsv9aXExBj",
  "key15": "2dEu1VgsufnNFaZqs1FW6b4Uq2bjkc7xFRnT5GaZqHTgsvAVk4ZPRXbhEruv1XcYgLuW6fb6D2ovZ8gCYDUpEGKk",
  "key16": "4J5yn4JwvWqQGL8cjTyXZ6NydSoVKxGMx4t6pHZEroSJBYziejHPqso5cuYDhvJBo2qZ2tLyn6jgmkn3DuKA3oFf",
  "key17": "2kkWtNRCpPZ2X5kk6zn7eHZwpPujZ3YkJ7naNen3A2k5s15WTh3fVxTwVJP6CNfDERtAq11AjKyiHLroHHSgowpx",
  "key18": "56EvXSgZkZNHYTR1YzK9rgG5JMwnVXVL9d8ViK56WZFgRVyq57MnwTvA3NSXP9EwUedjaMLMM1ZFZJ9cJZKpcdbt",
  "key19": "4PiJxu5jLLM9BKKFGHXnVcZKA3xZtCxSTLm6hbjqCWbow1C3dAgSte3X14r8wYPHncDAuAJAnNyzWts8rUEJVnMo",
  "key20": "4PvoQa1QxXzy5JUkQ2SPX5Tn6m1YCsPaXx2YPRcB8LjpKWgAZ5RyTNbCXTeMswN6vD1WcihzHTXLtRTS1WgWP9wF",
  "key21": "2iLQ2WSB5Rp37pD3ZNSULLzFqZC2abE6wqXpEzSN4EGX2krL7jCYQpANUrQLvYUuYDHU7egrR3hvfjMxv68tzuaN",
  "key22": "3RAqr85UiMDSvss8c5Ao65mAdrqwZW3xMdPQJKRDZtA5nq29LNGfVjNqjDh5xvsteQxjZB85VEX2MZSuT4fUmiJp",
  "key23": "3cwKvf5Wbw6bmSf7RPstKDCgT8BjKyFBrXgZ5Z2zMgQ1UqcJeVgs7zisWyNUJCFSuX8oDAT8TKDzg5sCw4wnCJqM",
  "key24": "5svpV1Lw1YwMvGG97yHY9xyhMan52Bc8bmSjafHfEduCnyZNey7PoKfaxxXiNG1PynxG6qW2yHtBb3AZVJsfGdzg",
  "key25": "ybiQbMh1aXYYu6QsaXexyXYojdcUNt9LeyjiXXhQD7sH2hezk2nMuXTPmx8DSrPH25Sj1pJGZXJt8gehz6mGaAN",
  "key26": "4pDxvr6XKDYRShujETuc3gZczT4HryvbuU1AfnupUK6YMqxKjvM3hZzGwEvimsQzsEpJc8HBAtYzCWRX8yE7RViV",
  "key27": "3MKJkpSTWteiYkD2Y4AC8cJnga1JmcNcstWfJBx3adm3LFRCeqm6yJSqyoVSznHHfFCKsYADX1rxhsA1dSfDHTma",
  "key28": "xgk7yCaSCAYZBoxNERGYei2VUBKEoNmjYhZnFusSq5j4SizLgTawJVKMWv2HqSufDcaD6F8AeVJp6p4TWg8g5L6",
  "key29": "5jXKuDLNkochP4mvNdsG4GQse2uSbhYyHAvvEi6eNz1qJqoyruDv9RS6YfKZTDd6oKhKrksQfXcsNMMS6pHSrgjW",
  "key30": "5ChsKxYEMufTaCGj9hzdtWKfuUYzcAvwt3F15Dfk1wn8jTFhSBMvXK5yi8NsGohX6af6JxPAdkpcvoa8wmhQUaXH",
  "key31": "4CLUoSoMdfZuDW5kjLbz3btaedKY7M1fmueVENzW3PsBVHs3vTpZy9K6VTGRU9b2cf2sJ8YNBMuTim7vBbSmCR4x",
  "key32": "26QaFpujTrjhL8xMPucnoTDp7SW22s4QrM1RJxhBtVJPrfUKqrgc8wqDLTGs1L6pC9bCDYepcrzJjbQrfd5Viv6w",
  "key33": "48t6q5M9oUi9DP5f2tGGM3oLQ9JEthbxzgU9t5JeMKvT7f14YZFLCmXUviA14aZL4MZAxsYjTGVpx2Z6VzcArjRp",
  "key34": "5zXWzpQXyLuCuj2Pn5CEjt66wd3SEZeVKgMrw1LfZVVXsCnnsGH3yFm3r8soZS8JNuVxUjBVFTfWzwUu1aPRTsem",
  "key35": "3wTniBxfXmJVieeFecdNKT91WSikJojdvWj5wfMTeyB1twU3VBXU53i7EfBKAk7eq7y9n9qRfLNf4t76Bribtxuh",
  "key36": "3YqafVH7NnbxSDUkcV1YEo3kEQbmiFR19D2fstwjj57rFFH2Y1ZwWHX3uUnbDT9S9nNrZd9d1R6MacU2qqN5ZyF7",
  "key37": "5FVDq22TbvWf1kWD4x3bWEWNyQFRb4UF7DQg6Rwd9vLmKQxHRBmBXRAiGTtdx4ydKRBWbfP9i97JdSfsiEdxfsXb",
  "key38": "PmJVnyEcHJaFFZpHSyc5WkwTAcA5i383WZNJcnLhJkrK9WSg8VFji2iWL8g9kG5Fjvj66fh1TjGbJ2hEDoEbBkX"
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
