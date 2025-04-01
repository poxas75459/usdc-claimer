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
    "4fKvGKPeGwAa4Bni3D4JXxrhVGSuWcxZWCuD3UjyqdXr1AYJHaK9LpXqdNtMreX5qaCmNBrF1ewAeB776ZWqLSRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nuikH6mbpXYkP3rhMYwvFYhZhspDoD5Rkc8raUokCrALCj7fuxE23oUqfeoxYPQ8QwPcGT6cENvRXbGiSTYhtMW",
  "key1": "2AsKj3VcqDJvKRiu6ikPrTcn8GwDYoCoHX5JCnWG6yyjs3tCxLJPHoXjTquMEfEH9bWk71fHcHcbvQAUVNac21GY",
  "key2": "51TUewXUhtFCnYaKsySLcC6SQ3e1VghBN9msqdB68DrxwAT8QbnN6fTFLH3viQrK1tyDko2L2Ktzg7HdPEy9qGwc",
  "key3": "3NT1gkG6ci3rasGgYGPeBBiR3UQ32sW1qjeNKCJgmrPsnEGtifJ6FoPJLkZn4JNYWygPbghH7y4uEJcENdLkFnoa",
  "key4": "3pwUKTi17ofLLkHFBG8916TwKU1B5qrn8uXRJ1sD7fed2Dh4xLAwmpKFDof48EmE5UHAMebSbZPUNwTAPqzEr4PP",
  "key5": "WSfbVxkuGYpHAeRLMaDb2eBxDpfWS7hQBCA1itFoza1SrcWhaVdGbwb3xWXUV1szp4pWxviVfbnCNsieDkzTTgV",
  "key6": "5PJERjcGetkzejFpaRsae3rajpNAbHuGcnCr1pY8Uw1cK16UBdhr7hAy7RNsuUkeFDm7EzJNdsbpztFCswgSU2x",
  "key7": "28VavafPXKyHgxs2a8a8PE4VCTPSkQnNSt2UoCDx9HcFkEPkaaq3P1ADRqExfLZ6uUeMR2SpWcv8bmBn3KKbpEjJ",
  "key8": "2tuaUBXPqiwvVBxQtxZLrgqZhwEjYdqmNdwcbX2QdZwMvPSjqc9z7QX3wabWUaoKvh7pydzYbTH8SobEeqzD1NkH",
  "key9": "3SWXYHBZW4RND7PkfmSTDH7jKiGubm9gvE8M7h4RvErUJnRP7m9LcgLaLC5NfUztxwTuVPBoiHUjvX1qtY3uChT3",
  "key10": "5xtQ67z4tuVipRC2rmtxpzZzo32U2DwnRicCKrzYPpJumbFnN3X9dTSc6A3FdSDKStMu4gY5AfW2bj4aEdCidxPe",
  "key11": "1DZMj9Gi9KjzecXCxJ1Qo8e5F22C6K2enkg4fJ5qnxoEhxRhypomPDoKEL1RwZeLRM1sTG8Uz9qYDuiMUxWBAfp",
  "key12": "4yexMp7eScRLdR42r6fxn24cq8zF1yiMUbnKYVS9tjNwyJokDoWh5W3PC689RpiG41zT2mQFWL145BLiBEs4ZYNq",
  "key13": "487vCaaEPaq9gqJ4mCK9a7VUpRX9qccQnCqcTb48EWzW55bbakqo9a6ZGEGMhpQ9TTsFYy3pR7hMnFiKLqQCm4F2",
  "key14": "ZnPMfCw8QaaTtVvQhhKJQKoVuR8tSLbtX84cMi8EMrfjN3vJasD7E5sfFkTtxBuetWv6ZUJrDgC4grAD2DU4qH5",
  "key15": "2wdw2Y2AosA2gqFeHGzC43JKHqeFdzLm5ecriug95BnyjdiDu1F2GMXsbuF6fRvdnSrcrFkR1ANhtHMiSMxsV7Kn",
  "key16": "673qHtk98Bag2suUesQVGkz8STFo2YgjrHAorz2oBRJygRD54GJUZGd1Gpk6H455AfyLRTP6PZuTJRWvafyHFZKi",
  "key17": "58VCx536rh6aZ9nWQ6MDpSRLWCcBTEoevVmygnnmosoX5RjHVEsEkXC2H6ayRMBeWYd2ty93h5VKCh4zkBJoDR28",
  "key18": "2uRmhm733GBwE4fNuafTJ1Yg9dmeV9Fk8jwwYYtLuE6MWHPhwPzLVFrwNiG2uXVs2AfXnRzwB3b9Me52bowQY3SF",
  "key19": "5ZjCmpMAdTpfJwN7MNnAWJXqo5Ud8NoE7wQyua1dETt9rUjN6QmbSrtHwrpXtBMjL93L4UiZK4RSDfxqkemYk1dk",
  "key20": "3zkrVUNQXCJzzraoj5sRLp5EpdKr9R8UC6rXtpRmZurXYRZPme8VB55AgLXKwUqZiNvSyfKLWuZoEu8z8TcxiMHE",
  "key21": "33yNxxLQMRExxktfWSZMsLLMSJ7AS1QQPgfze95tsWWUxeMEjHQNxMqvsq2BQhai9aDEqLnYTwG6JJcopV8wyoXn",
  "key22": "37eCaUoEuMFjGyaMjSNavQiyAn1sFHDPw5YUZ6BV5dzT335T4hRrNATfuz33Wmb2F1PAHzkPPqKxJj8qyhTM5yna",
  "key23": "4Zy5jKhKv6HbuRePra67T62y1DuXQTS342YNsFEhtkNSLuRdKAaJwk1ht8KEvLTeuadderfVACMPu7C1rfNuj2NU",
  "key24": "4QyLUfLrDAHc3uMEd2zRFUtsFgL2d3osauZcYLG621GDEz8ozNsxtXtd8t6ZPQwrvh94diRZYWhJiWYRW4GmNsyf",
  "key25": "5bxE9RjxDUP8qJ2RLhKLQZQtyEsx1VXr1mrcBsbqm1m2U9HVC3q9gYquF9TiNtD29WHAxZ41XQVFcd1Qyx3EfYSn",
  "key26": "33ad5ZneUnQ5yJtcpKsXzzMdfYSe5Waz7YCZGr41dKnGs8Toq2TnqANhe3CFRj8rguF9u4MNJponaYkhGLLq3hAo",
  "key27": "4751WV1BWteLdwdkvdNNcFdAjkpgaWoZNQKKMriJWmWhjWAEm2Wj6tG7Ur1nG11PRRihZTPnzAPhFQS4ALxHCPpX",
  "key28": "53QJBcxvzy5fq3865xk3U7qEjfnNfJRoBjKCjBdgMNRjrkSnZTzP9XgvXESBAVTzVbkKiuY6QUrCrXBNMoiFA3hQ",
  "key29": "AxaP7G74YPXkEcU2HHJXiHY3D8Q3qX96oiWYYoE6Kk5f6E7RaWoiUBpi7u9xC19R526RqUTFF56LnMGL8iCkJcT",
  "key30": "s4wKkj2gsbK36qrAr2hJPCpqHP4bpc5VfAfbUfRgTTS1RLvb1jwKHVWSYsNFmHiBZ34qEpwMHuBwWuDYBPxj8rp",
  "key31": "4kt46f38btMAyQZZZWJEzcusE5XjeakXuBDGeEqZgV2A16CBzve7pDoHdzvT1a2N6mvSjSc8yX4mtTJpZfMrspyJ",
  "key32": "ktj1bdEi7P8ZU812Bwkmb15R9gycxsNzRKeB8NMEFFcNFpJWfUc1ugBjRUN9TvsJ38crrCpJG9eVYcALSCPXALk",
  "key33": "4XincYhoSr6MS5EeSHinZoktqHYQMQvvgTtDAJmtY7yHFzGmAeuPQcGJphyRiw2HsDrnzNNNc7jorZ52WyPByyoS",
  "key34": "5MTWWnRyEJwbqs6rxFBfU2jJrPCHA44uykfJuQ6d56EQ1qv6swD2nrzXRcn9kKDTZsxbsYGn2zEpfUj6zky5ZDzA",
  "key35": "5is8okFZRa2BBTDB76KRma8PEdfVxuiQR7DGUp9EQmqGF9CNN951nbQzqKcYHA6M1xLqskHJPSqjRxJQmak3JPJ",
  "key36": "aAPtJ88pPN96FAWcGKqk9CckpNBoCcHueA55ggtZWGFWnhepgRYYvpfqTfMCWgZ9tFE4S7MvUgyRTgGJFHf16HL",
  "key37": "4HJkqG2PLWg4XnBPw9UYArfdUCdCzT5DnUu1e2bCwdbA82NWTEK5ChvTgSc2XsE5wgMehoF63zDgdPMCjBHVwq7K",
  "key38": "4JVr34ui1TcCz6BSHBQMahwpPziNoReiWW15sGSjEGMbkPBy1iPnvzBdphQ5966jKXtxyeV8LtNCPxaC5ZN5b5r9",
  "key39": "vd1QdVcwEKN5Eh4yFaWiergNwipnfAwwgcjp6iRj5MQgxtarccCAWCoab8C6JY6MYHkHV8DiNGYZxLBXEiZsMMs",
  "key40": "4H9dXV7tFNSSo88ayF7GWKynuyeJawq9ZkpocvrMeEaNj2iwdgUJTfymFApTi4ByiG2Z8JYrr9f8YC2KYHCUJQKv",
  "key41": "4C4yDcscRymNW6Es2W6wM4UAkUMMHBVycUZ6p5zqcW3AhdBjQ2CxLpn7dzaMbSBBWSG13CqRwvjy49hCxEbkpAUx",
  "key42": "34yoSHxEWJvXo4AMLBPXCDrda2FwCe5Mqpy572PSXW9ry5T8ZEeQBZzUEPh2ZsXPU3tZAapE6FX3AiWjyfq8QGJT",
  "key43": "2HQKp5FYb42Sbie2xXYKJHu4cqfpPUFixhKs2aUn6MufJrfVQSGrz8EcKBhYcwRrGwzJVA75ZJ2ZaLniMLm85ZnP",
  "key44": "9ncNaY3qpbEJXhg6tcvKMMdAQ9VQGLYgQdjnDWr5PS3px6Wv6vWAcYGAr1wzQ4ZxJMxz3zwYq7c7k14zzHbwfcy",
  "key45": "3z8pjqin3cKrNBWRYoLNHD3fpUxZDxb8RLNdc5oQALws3B1Gjb3iAAPBe764LqLuzRgCZ2oKRKKAbtHq78ukcH1z",
  "key46": "6152cSwKN5uSQvGUdG64VePnqDk4ToJnicZ19uPvTUsSeG9RVDDPKStZhD4zfre2CLfvXnPbW6TLSPQcnCExhdbW",
  "key47": "56zTxFSx1drcwyYStAwz4Re5YdWX7ytvVB15FcfydeLWV3yR73Lv2CzymBtCD8aKsmBTA5oRebsHzGqiVaJbZXvc",
  "key48": "3CjophZqf3u88auTWsXouBGT2woqvtqvxztqLpJzghz5NoWS69b4QimSLS4FabefQBtH4n8Mh8KtCtqEWqa4vxdM",
  "key49": "hZdjWoBWHyqN1hZgZzMUouS5mW8vZaNv6j436e9eUydPV5xUdsMXizcQo9nuhPadfVRK8FJxJD2fPHNbJyDtZYU"
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
