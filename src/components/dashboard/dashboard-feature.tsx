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
    "33M66XgSvRk12i598rFk6agCRzGfeU5CHu9AesKJSUzbNxtP1kiZn8U92hsK4J4dREj56f5mZGubuiVviHbtum6p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u41MjYn8twSdjAyvy2oLuMAYspDdAVxVHtghLtYrWYjTpHYiDJhCatnTDu74Eu6jnXqQ2U4zmCe3vKzLkYvNQjS",
  "key1": "2UsedwbcJzSiFW1thXGgdfCS5zsvMyPikhJfBSNbuKXhyQxYJhGtWaLxJmdvsYrL7VBiGijo7fMFv1xUxoxKVR1H",
  "key2": "5T9DDb9MQC2pFjnnA2kfph7V54LugBkucByZsHooNwdjbyUeLFR3d2vKfVfCX2a7aWWNDfXFEt5sYoidkVyGtus4",
  "key3": "3JixMVPRa1w2To5UmXPQ2NrwxghKFZoASLfjE3syJsJJRhRDkfLVogjDBBCR1UTGec1mNNdRay2GmVXfBXqojZPg",
  "key4": "4FDATenpJpeA5UqNESHpsjEzxDwym9wm69xwX7e247FqJ1ZKoG5X1LCg9f1N8VB1oFnXrC6uDPMatbCFEFvzWcwN",
  "key5": "2osdq8mLdZkT5EyAGEt6Gi6rmqggzwVCCjaRjNsgBF9PyhURjsUW7gxCLzi4fgGJZ8GA4R6Rg1ocjn5j3zcfERwC",
  "key6": "4d4acoaTrH558g2yGEYctqrjwTUn4eHEUxfXSeVn7idmniwngGCT47kc8fn7CmfRsqED1yWnvWfRnwSnu7scArLA",
  "key7": "2gdZ8CnqgNJyDLvrnnxWVjK3hbtx7RwpFXuRHvnarqQ2WwyUwGZ8fp2RSaJtiKgDmExttRT2fSzDndhAkxk5MQfV",
  "key8": "2THj5YZguCaFp5Mkf7eqq6hejMRTeQrTbgWFSNogoVRSgqBBSfxcXtF6FKmTyjn7NuZw1YTnh4swf7RVchjfdJNR",
  "key9": "3GPLJbfJ2DcFNLxwSoRPweAMb5FPKs2J7uee4HGzGPUv1YRZkZRivdoSdaDxhWnXNVQA61Vm5hW3jMruXEqLQ9tJ",
  "key10": "2fvE7QWZoEu13NFshD7wzFHGcYoxzp9xePnkHg2Cw4ELzbbdiXGTv39D2PptcjrtCDYaYgo6jk86Y4oC1ynrhcjx",
  "key11": "4EpqdSchzZgcYSor8DhrDgeNCExbCzrQYjbYggAn4EFAGruWzcoSQyzFEJ4V2BirY3hFtzSBSAvpYifsrdEutQEM",
  "key12": "71oznGnyCk8fWCEQZwcKaHtJ1D2b3T5xzG8BFKvVC74Fh9gMX2rJWDeUpzDFYHg5PmBweXZ14SeswNmbND876E8",
  "key13": "2wGweETw7ALzSiXyiLAM8sLV2Z4SjCN48o95BbqGjh1qXHwtJQg7YcED7vwuyjHB3gZxy69gHavgpHP9qwBbKseg",
  "key14": "2LMUZQ2BsvkfmuZHoTccHHxJ7sKPUTwuVardiV4RoFyW4E8QkVn56P62ddS2XfC2DWuAjoFb2EFNmXJMTPN7DyNS",
  "key15": "2BA8UkbsHY6Ld63HcjzRfVrY2SLx1JJC9eSgzYcAy1hS4Ss1SapeBCHehQ9QuqMAbqFBpBrDogyHN3U57nkP4EzR",
  "key16": "3efxG9BPkfrbcyjckksucwUuFjN7fLz3ZSgnkD58EYik7hNBKdLDvjm12rhVvwiM4nSWdXMwfmFV6kB8jTQ4p9Y4",
  "key17": "2VZoyYW4kv2ysWcDVXrxF7Ksm4ySfyTTGkhsUX1Sr3TWJXGfqKUp5HYkPA73bJTsQQrpm6UcZjZRfHcVsMvKYPBH",
  "key18": "543gCgXJ97XeGaqqjL2y2f6EEVgR3G6DTMhmUjZGU2EnyiC3tvfmrezRZ4a6oTkpVm1bRMPTQ3anRKxWNifwkWeH",
  "key19": "4QuZeJGB2ZqzKkEX7t7V8xnhEcswwTPygf3N3bKKRQoaPVxwMLBtC3txiiGcu3ty3z7d9DxUjZVPrUTT93hm4Sws",
  "key20": "1YuogBmpjVZZvRa1HZ7N5aenzW1PFqLNRaVCyzysCag7B1FwfJ1vSyV8qqqSbahTW4xNs9UUHHZgHiRfLNJboMK",
  "key21": "8BLvnqmykq8et6szmVCUf5RcyUTbFSQ8Xqz2TMzP5yYCh6ctFQsxjyiowajfrz2YKm2sZWejeG1gDo1e9DvsMkF",
  "key22": "2Tjui9Pnn3snHwu8UzumRewKWeeUhyPgVfemr8SqFSAR63qouugavnaoF2jd2vqzjKYU6WDTfDSXQf71bkRTvPmZ",
  "key23": "36ngqMKdJejEKibCbVkTDrcE3FgbHX18Ku8JJVaPQUeiKKVVcLbiJXRHQfRqWs9VQj3Rd65qtjgU1Gb9MkvPQ9w4",
  "key24": "2iopsk6nDqJpvqJjVeCbdNxgiorw5d7bRo3TPVKpiNEk9eeqJ5fLGU8VnvXTQjdd6BYjBL6b8z1zT8Xuvqs1Heqo",
  "key25": "4MRqEg5LP7CuXZd8LjvuKyP3xYfVj1kYAG8nUoUKqGvHJGy8R65x3oMQqDxB81CxZzuhJQfvAkpBNysBKDTwnx6j",
  "key26": "5K74DVVREgbgxysap9kiG37XuhQ1b84eGR94V9VGCDRXFg6h7sdzuRDG3vdyDZ4R1PZevXZMpX1obyLb6Nsn1o5E",
  "key27": "2dbM1VRo2dwjpWKQybccdUsTHmLHmMo4g4mUsN1Q8y5vVN8uzknbyDNPoJaWWoUoR9qQwhLmYmkmWkwgWwvCVv23",
  "key28": "5vHCGLyvjJHUGMnXsvJeHHrpRz5AV3S3ygv2NYPKVsocatWTBDVy4tQJ1o1DZ6LvmL3j4KMdFLrQVFZamivdKLA8",
  "key29": "5jyftZGaG6qdE7U7R9fr4sN2bNM18niX7dqHmhbo1DbzttsELau9SpjxzYKkhkVuA9tRzVLwmvbUd69RNEGuEfu4",
  "key30": "ksWbhS4B4oW46MMxj22heeTDtDt6RXD11M3zGyHxiP6NpWKh6Meb3p8EkZpE8azDywE4PgeUjUTU9MXPbaGRL6m",
  "key31": "5jibAk4D9LJW6YePLto9oxsacuTxjvAHmCw4CTZPPynFRw7EN5RTZ2C4UDZQwzb75P4ZESN4SxYiZEqCmFDVGeeZ",
  "key32": "hnBGLDw4RSQ2V89fEvGo84nAvBdDbLnkyPZdUKn2TLnVzdJvzWshrA1YVAw5d7DECidm4TmoDVnCw5hagK2dqgi",
  "key33": "2WQeFnMafBMmJ8V4hjnNLABvMkjdvBjRz6BKWhHtF3kYbug3vPCYEwmxAMmcQfeFsdsyPAJgCQCBeYT4yw5SCDB3",
  "key34": "3Y1fBC3MGZrW8HYnvpd827jfLnn5WqGRoTCG1QRXg4mMoDfpjDSq6pqe4MgtHkBgFkarK5xtqtHn1XmpFJdEyjHr",
  "key35": "3EUCx5p1WqREX29qZjqD3TZoQFHazNTKnwC8A2FPmGnBUUrNjKL4afaQfxVpt1s26E78shPQqeaQiV4QmFDjsYKg",
  "key36": "2NWFssNc3s93k1kyvmHYRAq56EDwgrUnTysAx3BJGXarTS6iVpvdRZDMV2tajBY7nhAga2D4EAWvqUUWZS7tCoah",
  "key37": "2wUmpx3fQQmiY34PcpYzW4MGizE9tgRSnQyzG1Y9fTHacxgi58fBG5XMkgFtH5wBGnoQxtymjCUtsQumz2fCmPaE",
  "key38": "boonQwXuTJ7ZWBkAfdu7EESEP1YUHkDcagBNQiMpAAcnyaXih5RBCCprWd3k5TQVpoTB4toKf7cLvZPTcnmcnAy",
  "key39": "5AgDaHvcLgNxJR3v9YbaWyzbdhsc1zv3XMHXzrg4y39VwcDqL8YfeQQkqujHDYaKpBss4uayGCwNcYeL5Er2N4w3"
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
