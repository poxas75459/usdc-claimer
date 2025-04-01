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
    "Y7d48sGzvTomVngT49MsY38nTPqKFyhX3iodNNWtn2V2zvsq7uC4f5k8YLaW3SspJgAEcVEPSUBVRnJ2s5uG3JX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p8mXfKdK8LQuS5Q7W3GJMwGyNBFa6CMoHmg8oArzeWx58Thzd6ZCfsKhSqnbydXuhaCDUW3h2ks1Lx8Gc67NuX6",
  "key1": "5u58B8qmwJeQW66s8b2zV1pVgswE6Q2KBreAGSqWvXSNZP4kaaPBg5qcFmvWRZTHwL8npudkFBEgebGjBZ8xYhUa",
  "key2": "2Bui7xy9w46CR3QXAYkzdy4WuqcLvSJcdjpqi8eFKfkvWvcFmTtNangRG5XrM4XAUKB7ktWEb8LJ1WkATH9iskrw",
  "key3": "5n1vDrYehqqbJFyrrEqL3yELiRQDnZ1AqoYUXBUGPbumQ5X8nErKP9QRSt7gMdhGDGNpYpFXydoUn3XBuont2njE",
  "key4": "2Hb4bzhGJ1kkQVX6e4NLRbKP7rzE7TQZusb7iEB7ddFSBAAoKKAEPf8tNKhsHjiPF94JuTDY8DPavYuukgndazto",
  "key5": "ikRs6WY5aiBRf1uzZFq9dQrLicqvHLSbFEdjVHRUxhXQoeqnmWpRtSpezzywZ9oarcd4QNcmyoyfS1SwCFvbe1H",
  "key6": "41Pq3Mz6YoW8HXoaZcs6JnHxGg618Bq8K369GLd7S337fxnsPNhroaZkZFkAWqN24wdurfTpuEToWUFpZu4TSWf3",
  "key7": "43cUCTfniAYiCU9FXwBdUjyq1X6ceBQPUxspJJpPeBC6RezGPyi9sWvi4kur6A8oMicCcoWSzLws3c8RY8LbdFv9",
  "key8": "LQU7pWvLmuzmGZmDPVkSaCduxEcgFuThUwZk6nW7mHVvTNGZfz95gTLY751L2kV9msPShWrhWee5XtBZ6s8TDpT",
  "key9": "5YCDANQYa3mgkzdZ9qNSA4ndMP77UhnrNPoeMUMLdnhhSxE2kd4m5cv9cqFVEPZm1xyBfPVZ2xXsdbQaeXdgqZAt",
  "key10": "2DMeVmVDum8rqMjwHD4sNqADaRbTFudX55cJVi13dhKgGYwhLUotWbdUimhva4QUrsGuHBjuCsRdK8x5ToQr8cQJ",
  "key11": "3sHPHEGvVPPvWCvdqaKV2C6umDQFGFZ7Xf5uqSTccvSywCC2p5a3pe7ZUimmLGJq2QkKXPrP7AQxSEhcTa72EXvW",
  "key12": "4B2N4zZhcF53CMe1v4LRBp5Zm8HW9ZHNLBBPdouszJrVNZMkg73NjCJrJDPW8svvQoqmVDDQZn3XejJj2P1v1Gze",
  "key13": "2emwtow3hDbWwgzssoRXaNcep6w1zykiG2mF48m2ycB1bh7mpJfXKhomW7YSZ21971q46Sud4iNj4N3jk4wVkLFK",
  "key14": "2HBmV7bxVKsi9d5aHUKtkDrPofiMVSZyJqoKFn9RA6hUym4725F5LW8PpXkVrJ6ge3cd1JdoiTLYbbx1vhwfnQNV",
  "key15": "5nNZtE3B462EpymgqGC47xLVxe5xZpkjecKiZWuNfLv3crMDd7Gj3hSmHKqRPwcvHrjPCQ2YDVfUTmH51ws9dAdP",
  "key16": "2XA5DV9Nsm3NKiQoFVipgKMvXmi5RVxVW79fwjtC64vtK38kr7TXMhThJ6ohxXks6grCgucknF2yj18kW8MK9LCF",
  "key17": "2DqHXnD7B1T4nk8bW7mBTmr9NHQwaFipah8YEf82zY7DsmkFk9ESpksZorSpDhj4SiucUAu7dF2sbuQhL9gE81HK",
  "key18": "5kQegVNpG31Dzidg2A5bHHvUTCaFdWa17mpJaGFBuwWSqGA4V41xh6mpgPRfAm1Bf26BoVS2ovst4RUHrwXqREd1",
  "key19": "2ZZzGzmrjNH3km6nxtansaVofkzESbE1yBSJKiFQupqd2ZiW8WQE9Vweu1tyidgz9kuUqDQ22xuvcjTHeUvXt3uh",
  "key20": "2M1TpbKvdJ1VtYQry1VohR9Cc4Kvr5fEfnEcZJSodbSKPd8gXAr8jXoeidM3K6Xh2o5BtWyJoCfTJgis2RMHJ85o",
  "key21": "2W2iC8G9skFzJCTkb7rwiCSQzeCWuxgFoHmYp79frRSjadQFdLdYPQZ5uT1ohVPHgCvniDq3U9EK8brkX6bWnHY3",
  "key22": "4kvtLF5ckxWY61qCu4JKsWQXfeVGecb69bHYLTwvVrbGHczs7EnSrx4rkR7DEoJ8eqgbTLf37vTTALcLviFZ8rX",
  "key23": "52tvSUDz8cDrd4itsvHi4j81vowypa1RJQ323ep4cEHvSaZR2pPAZZ8dZ9p1h7fzoyKFqkyLPim1CP2eYi4K6LH9",
  "key24": "dxoBkjW8niafLaVNm3bdQQrKnQiCtySNa2jRgjixMDs8ivTDRFxW4jtpphJjrJ7DuWSNmqrbAeTfryyvYck5DZr",
  "key25": "4mg71fMnmFc1nQ3iZZ4ixJ8iKx29QMVZ5sdnXgFGdwckjkVCyXnWj3ZCTnWcG45KZypjk2u9QthHuofWkBKeRBdw",
  "key26": "HXrCq5cBPN79DDgi2TqNsxFWeUuGfQcemd3Fgr89bhUBdX4Hq8GWUgeqTwcG8o2WLnofPzNBfJ2G8gsrbn5mzge",
  "key27": "5hB4ZA4YaKGjutWUopzjs6c1DSMqnSFQKK1tYve5cg4vK7dNwt8hzP9PH2oJnYj4aNU7CpAeZGozjFWNDaMAmWXh",
  "key28": "4FHBf75R6FDnLiatCzQH4chBYHLZ2YM6aVMYQ71is3nnvLkypGwHzqFBtwH9irZvbBSQD5c1SSdyQfhBxZoHzQdr",
  "key29": "vzKGeZrqyYjPGttj2PpVS66MXGkvuLCdSpxAacQztcEUsMHLuMMXPBaHiLrFmrosSWQdKkuh4Cbqtf3e74i5b8R",
  "key30": "2jtmaZiqNJtqe3tQoqqb2Sist1UPSYTWT4s32hf9LUQzx3Lec9NZP7cQH13L9BAswrP9HMcBbjmWKrPAknSarhss",
  "key31": "4uE8wUZx1oEuiGWzA9c1qFpo52N96uXLCkQ8BHSs5SBpZTzZZAkHuFJjLAa4CMGHQwy4VHDW24kGVWcnZnoTkNLK",
  "key32": "26TVXVGQcqAHYT4QtoV4Pv6WDqwv7TCcguqHL5ryku87gLbmnaGY4ptwA9AaTX1vBkzFXDaWmAsZ1d3MkWFGCWvL",
  "key33": "54pCWu26xjimaMKK37UH5xZn2pcyUiQH7FqVp7Sqcs6zcJZLFrPyrVeZbsohDnpiDb2zKnkHNvMUeBN4k1RwipdZ",
  "key34": "4jciGwdrJ1HgmN9mTeHXeDT4HKaXBoyxiLnX4XnzeuARTfgdbw4PeaT1C3mRUefbbQM1f6pJCNdEAtWfkpUhPbrd",
  "key35": "heKZyctd9HvThq9eqjaZd5LvXXopBPQnALaE7Z8NcA4ZhJ2y5nZCdrmocvq7sDAKPHx3Vd3Me1heiLtjb5nY136",
  "key36": "5265En9LixigUTe3XrkCfRkTbjwxd93Ah2SYbHtBzvtg4hK2f8SiThumSZXt2qYDz9j6ZC6ztPfigy4jbLB6Cn6a",
  "key37": "3RtVYRwFxMg8DhYM6NQamhpStk7L2TToCxGoyKsufRHaaxA1nSDTtom2LWMA88w7x8SCK7aACkwEBrY1nEJhwz54",
  "key38": "27fKFBwBpYnbPVZUx6ngF8nBcsQiee5KgFcUXdpEoktmh6V1aEywwsZ3U7Wn22vZf3H5VgwbdbSrjUQS9T8z5EDr",
  "key39": "2UKsoSrWjcbMu2aJpzMnJHqR3nhpxUwPt5d47DcY7WwgcVn25vHUM1BY6P4Q1f6dtutbdsTpwxvHxJmwHBF5JudA",
  "key40": "Kt3W8NajCoktobbwx54raUEBKZyb3MxvozoWTP2zVxtjy1i8ofWfQG1skosQT97kdtsP1QN5aUrFYsdyxZ32t68"
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
