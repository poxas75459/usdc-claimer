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
    "2NMERRp2jbS9NsmA1ugvbrT8WMXqqvM8wZaYzGgGxwXuj4itzmkZRgR9LAfatTQfCFFyqu5nRbALXQBrFoBEWDYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3piKYw38zrQhmQPBMZMvnw4ThqGrW9mf1rhfyqgV42yEmfNV1DndproxgdGtHtstvxoectUybh5caZT5eP7bVbVd",
  "key1": "2T5GihtDEBTR4qBKaLkC5KmV9ADxyEBk6QL4WXZ6dgVrS4Ee4nVRVVnNFLJNFrzurkyXx1BzUghREutBkbRnpsjY",
  "key2": "4oceZMTs21FGcik6rJ1oT9ZFndB98YkUM1XADXUg2wsfgLvVGhsVDqFiwXGqs9gzXFx2op1HJGmZs9n17P8jouQh",
  "key3": "29CPY2jJ5FubhDFnZUqKDiWhqJ9Xf2FoqDdeAG2Xsg1XJy4Zw9wRMpzUGxcs8sZRzF8ExiJheJsGBkGBjPpbRHz3",
  "key4": "38euvtCYnZhwfcm6apwsRsd51sp3AZymv2keTeiPXPApPkxrpuwZhAQD5CZFj5mz766kx553TJvJgY3QWGMcrn2J",
  "key5": "3yJG35QtGkQEuf3ax2BYAhL26rsEbpVKo7Rx9DByRYewMufgnzq7VpGq7dyo65hZJzieYz5jS2oqRecY4zMCZngc",
  "key6": "3SKSj43zrg3Y4eESakreQ9jPS1QK4uVsMTtMYgbWw6MhRWfsPBKfrcr4fVdsy74VpWfREfhiZWEcXTBbNhKuPH8f",
  "key7": "5JB3ec9JoWNUyW3JJJQM1ZqSvkMSNv5BYsFbZ8PVfcZGj1fdQhcnr3LegzW4mxzYirpHWw2Lwfj3tBJDcYvhoQLR",
  "key8": "4ukDnhmEzKwFpieNZrNzxSWt3wJntfvsngfomjzoFB4LZStpJeS72F8hWzQFmqKGSfFjARQhtWE3n7JzRGCJiHxu",
  "key9": "G4uDJixHcwSMxzprsSAZXqXGNChTR7meoy3Lb6Dve5W7tA8U3nxteA1Po5NNXpF4xFyTxEC7Txy7KDvssyDCcsC",
  "key10": "9g3914NwTvSuuKB2VZxeWTp7LtD6unNtxM4zwczpN9fg52uGSNKJk6DEPEVwCCgBwzxftFfYWq8CYFBzzTQ3zCZ",
  "key11": "3Mkb44zarfoPJwdnmrHWQiYKYcrCdhLDeYf2xug2JPr1SGP7BrEMji2wpnv5hAu4xfuC9Jgx3fGsEk16oXkcwQML",
  "key12": "josUUfGxzjq5aWdfcQui7oFFVJaSJo213hVZLziACcoqiW9UbWiV1CQaQdndRsC69isF4niMvJiJfW2XNPUB477",
  "key13": "3J5qLfkDmS5jYCyFQNJmzfWzWAdnj19Prf1ewysGebS1aLexF7CppXgFrcamJ651vezYBtXnh8SkoRfBRDV2KBTE",
  "key14": "3AoTzFz6RnidiHtd6ok97gnqdj3oJ3s24irqhVYJfuo2ujMASX2CrE4WJg3TC1fPqzNBfwbQLM7ptjSGh1ERV4Dq",
  "key15": "heDDojG35NscVtcLMWHLimx8LJ31vQHTZxcGG5sb6GAxTg1z93XoZJ4VFf8y2CP7pdChkj8ShFfc6g8Cri7A2SJ",
  "key16": "3L5fiwYhEaMJW5fmP68HdfbikD1P9vWexZiLEqkh4dxHacjvhkH38MCrpn9742gkeRxpmFkQE4hb2sonCsWpxePu",
  "key17": "2AKmctaygngEMX78iqq6WVq1E3prsEFZ2YYtTQzQR7dmWyniCkv8eXCzWsjbtD5tN7nvFtDhSr5mGEp1syNTAYug",
  "key18": "2MQBPF5abG81BwmVbhxLCAc7k7nD2tTFahxJ4bWKvQtZfPpYHTxPsDaJnqHphw94yNRuBy4jyXVkqSPTSCCNuSDR",
  "key19": "2MnxyyaJ9k9cLCAGqLgDPnH28ubt6VfzTPEvj96couDNc6Ymp4KtStZ8TNJinGPU7ecm24GWYQ5EKEwW1opFovx6",
  "key20": "C8U5N3kCBgC1zQeT4XwacM5mTDhAnXSoK5C4BLFhsvLrjczvB1eu5aPEiKGyt1QEiQiriRX8yZo6pYAhsvrSWaY",
  "key21": "28jVSi2PPLcRFAAm1o74F4WCSNLU1WhjaPmxhkrudHduQyMDHJvE7jRU8tMQRffJYLngZRDoCKyeU3iq7Z7ZyGEa",
  "key22": "2Dqw2KWGmPU3PZuwPqV1eCJ4cByXBVicSqDteWUEbaURbZ8Fn3HTrsA9g27SF9FAVDGCUAkf19EqKzsnCvsPRE1E",
  "key23": "38Ava4syLaVgW4hbHh9stZJqFfySQmfKgtVZCgtFA5TcUtW47LjLiH5dcmxcMfbFhCiC5L5YZ8r6zY8knnprfsB1",
  "key24": "4fDEqmaHQCtzimyU3jJpxGmvMTPnTCyLQRTE586B1RyoUGD4weMTjhb9hEnbB9dNhvLfSfRZidkPpkmBEMJEWKJ8",
  "key25": "3483Grq1cGah7BNTWYDT4wYrYhZrQwCtBSWqw7znhQzw4TPfbJYgLLrJ8VWtgN2zK47mVW65YvoN321efvSoipxU",
  "key26": "xaWiS3KEzKMScvBYqfQPcA18ruhdi1HTfCKTkkV8msywqmStgJxMrwmB81Gqyca5DpQjCwH6WeFe9PwzSJjLmDu",
  "key27": "rvivQXicnovhnxTQX14dxRymA8tWG3zJt6j5vdkSXRh65CYk4CMCpxx8oFSXbREhTpAtNAKbdQgd7NFmQaPRtQB",
  "key28": "38pENzGsu661HXUjftFfMf6eXm4HMozW2aqzCPWXZPG6QB1Gdzs67pZK8uVRT4RBqzwDA29kyVZkN3oEMg3w8phh",
  "key29": "8E7AaZ1eFVXVQELcqP4PUXjHXbVvFckQm5NZ9hgDXK1u5teqy9kLXGPHyUxxfsNTskYFr5pGkNpqcZktDctUUMQ",
  "key30": "35kBkkrSbsnxQhxW57a3gksPoCUk47zeuPZjdDjYA253qVqiqyWAE7fckNv25HF8FrLAmY87kCVZqriqjnvRu142",
  "key31": "2GqmbU6pHUkxEeNDqr3V7DsSkDADvMsdTBgMHuJPciiU9WVHPvpmgoA6rWwr444JzofXjmEwtY3u2JVA8oJjX4vQ",
  "key32": "2kNxTEgkEDtzGzTpdjSrVt2j952q6PFjSkh5PaPKpn79dF3iBb9uLJCFYMSSyak3v8eLMS6EgtRVXxAaDP6mmB39",
  "key33": "7HSMLM8b3uT9Y2uF3cwyKBGaRBiSHcP5W9XmGkDj67DcmAFNX1xXtZ2nnqFszUnKYZDVfYyB79M5Nr3vxcqWxUc",
  "key34": "3x3sDi8FLWv2qnCsqvo2Z3RgFKpAgCB3oQjrusmaL4Y766hZe4hiWAD24sX6BmDCdy9mi8VNRQtPmWNn5pebNSDC",
  "key35": "2PzFpkWRpTt128hXV9DeYT3PUJL7Hd9FHgePGJaLWdkiWEz2zuxxxJXzE6ZoKJankwtprk6rr7pkq6Pnwtv2epPT",
  "key36": "4rm86s8t5xmTtuhvkM8oYXtqJgyXqMRrynvn4aE6CsXuKD8GpYtASdHYP3GzURzrieh3nYRpehVHfV5YY9WgNSSU",
  "key37": "5nshdfov3Pm7ivsz112utA5NVarFfR1zfq3JNpU49hoe7DQ8gxe7Uz4MN3KYSv6kaTUyUd6WXUGb59TwjhFcjyo5",
  "key38": "52sf2BebwgULBcJ9nmNc1qR4zij3F9MhRQxT5L5qwMW6rwdC1PNMrqv25uKUXU2y1hFpNpWv1P7rUt8ZZJyigFgj",
  "key39": "5zdWqywjYbQAHCnfqwTkzcR8EGGpD3zHZE4kSGdF5Uu6ThGJnvjFBjJbjwDDbmKRn2R8bT22gbP7zWuPRzvFeopy",
  "key40": "67QAvYV3682g7mHY6JRpGPVnFhZds2rng2WD3TorWqZufjMj3hDu1duWdn6BT6EfXNZXcEbpiQrmrt8g3Vg6xsEq",
  "key41": "5mTUyG8ZGrdjyF9kY6jXB6FNV7bLtp4f3HN1WHXeFosZ62B6ZjvMZ2jHTBuT5g7AVgqbDW34ziYUyAH9NexzYGnz",
  "key42": "2kt3ZVMGNcE6ZBucBjYc8Et2zxiY2Xfd1rW5JTc5RVtTCiG4zeL4GpjDtUqn11PauxuXfqhFyT4impPq2LDBW6iz",
  "key43": "46feZ1iKcJ3LwcjWiiFVb4BB5kbEhHdfEJDAQdc2Dw5tLvS6A33wr1yWVMH8R5ZMrhuNLGLG4sG8dqFEoV6AepQz",
  "key44": "3zFV2kJzP7wmdNRdeNCSLX9rB1cUx8NQuDM91uxwhvT8A7Jhb3xoDpR57R8qtAnBoiKcDqnxxFk5qRbvhXr2f8eL",
  "key45": "2bv2XBR62rvQDbAEeAb99etYtEQguzzWwtcksYhVDkvNATw6serQZZmMMfKVCE5417X2BxXbmHRj78YocJc8QhGY",
  "key46": "5nuNsZCEBQdgfsDo69DxXJfvup5pt11RypF6EJnMMdgZsNQ5k4F1uDTDw5d3U52aUMmTSrueKx8mzSYo4hixfnFU",
  "key47": "3d3XYLQKC2JSpY2XTaHt9dqhCtFisRN4RdA4aKHwiEmCgAPn6X5sSUVMUJizzpAP5gXZGgEY7pXiPDdNsCTzEwTP",
  "key48": "3Qq1uojD1ew1VwBfrcqSbNjtbg9frwhXQERhgypYXXej9iRkVfcaZWtS7pmsShrZSXTQ4wx41PA8WkWnMGATWoXy"
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
