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
    "37BiYWVqbhNZ6BzSSapJ1yupoAFBHq8RTjwwjgwDtJJaxHDXQdGDH61YEDLEY7J39eKsoM4qK1QX98T7iBKXKxE6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DvwwryYiLSRbMNe7rGg5pYgD9Fu5M7M96v34zjwFRNFrw3mrMaqLEqSY14EChnEdrPgwWq39EnVWoDXHR3RBma6",
  "key1": "4YrX1BFFZySR1QHCskvTWfA66ZX8QigJRkCArHaE8NEQTaRbhQ7aMuBLpJUwyoDG2ZSNicaxyxKDMo9FdhoriQDh",
  "key2": "oDFamD9ogcsYmdo4fb533gVvuJ33LCrPQMZWAiHf3151GrNgbqT21M5D2HDbukQzgyA9fEQFX13momLoVfB7aom",
  "key3": "2NC4qfzXQjjbuZf1HC3WzXoyKKsegVLvdnqD58HTrpT53tJzguFJtZXUqhEDCXhPay1UizpY4N9wzkbatDf6BP3A",
  "key4": "4i7c5B3ud58YG8s2sa4N7QTAuZHVT46MxGhPRqJVcLxZ8aWRu4Jnjk2EGyhyy5YvzeFCprCH55zX2LRNBnoZBqRw",
  "key5": "2VtuVQhrMNsN1bMyW9Mnryur5DgzUmkLEwJW7KVCAv4YeeDANZ7nx6yT9biRnJ4zNMRj6Rma86gMCtiEhzKcog7J",
  "key6": "5ynrmrQ6guP7L1pFkn3fCTGV2NiRmDZCU7wMV3CtqQLZbAGHJSTjzRbmWXqbSi1wTaP1p9krtSmqDiEiS7kDGJ3o",
  "key7": "nUxLGiu1zaf5ynUxZ5oLNkZVxS5aTHcyo5jk7HEzfoMxoGyzaUCnSdaePU8EwdiVRAJa86m6zgu3kyAd9sg8659",
  "key8": "3Vkmqwr159A2DB8cHj9HZCNjanswN133zbGQMYL1X8Gx5u8HjduiKthiK2PxEgXW5Cu1V7FodH6dSyaStwb6zD42",
  "key9": "5bfskhPhrwjYNUDdTXD1LXFr19z71L4s4eZGWqnDw7rN6EXUDJnp6s4VfuPf3b7JEDvv3e5jhNbm1P2Kge4FHHS8",
  "key10": "2TKFvwwA4mUJRMXKRkzTeN7JLhMjMMDVxhHCsm9qZ2U65k4QfnzrgWdBLzrcXziMSyoQnbwpy12A4uMPPzWtQTQ2",
  "key11": "2bQeqHg2FXSG9GxtMUp1bNHtgnvj2iMvaMzdDpVgyp3mx3Lfkvn27n1svoMih1aJWhfSi4mBVBiTRCEZS1Tpy251",
  "key12": "26G5xYiKQdnV6cEPjXydcn9kDR6UnD63wi4oFmKmJvW8d6b2aryrVxQaroSGaUoUszqocD36DeBVsELcWJ3EouSs",
  "key13": "57WxDYG3xc8fyUodBDZ11t5EUT9vxi5rm9Va8zTjBnu6FkZYaaZwTWWDizunjmHiwbfDFGNqKTwqPXystruLtmi1",
  "key14": "4zKuDfqoDhnm9SjJZkCyfNTD1gWSizxCWLu38N9ahpW9MsdjGaciB8Sxqp99VYC8LAi3hf7ErRJk2R1epBWKvssL",
  "key15": "486XQSsKn9bbaJDsP3xQAbCjj4MPgysZC2x37jq2THuWUx15yZmywEYnaA8CBN218yWYoqjkwRUqUmSi5Zgxrk3K",
  "key16": "KLd3drN5ku3JTtotCHbgu2cqXpWo69CvW6ahKw8UoGNuuLDd4gpYStBobwPfxrJ5JiUJumQX6f46wfTmJy1UoYT",
  "key17": "pgtvJ4pcrztSsnkM565XYQAjez1fDKTTM7UFg5BhW7eGyEQUVQNJzkpB1eZHUkRzM8GMNdEdk2M7K5jnH75cCez",
  "key18": "4HyBzpUKiai6Kd3h6zWznEzNRYP9V4t1dwD2FLBWUTnxMq64KxMVtb4jM9ddN5jS3dv35fMHgrBfnyERVbDPUWt4",
  "key19": "23rpEwWEnJeVjMa2xFVtNYbCtynPZCmW6AdA7yUAAeANn16QYyLSZCEkwawFZ5oZu8Vhfzahvyfkisu334VUXgeT",
  "key20": "2cCGZB9A6tX7MbAVYTVW4npSy62JYvTAUyABneSPmCtU17zZYKE2gZVU4geVzF3aT9jZuByANhWztNhqVDvQZjQZ",
  "key21": "5MdRDzpWguHZrLp5Vp3q4aLLoZ9Q7ZQh7Q49JENSgXyEVAza9wGLxg4JjVSDAvd2s1qwEcC1wfzsZwzWoDGJYEG1",
  "key22": "31cpoExcuw5dCAWCEKQZjsmmw4fyvtDFGz1chumP2qtC4sTJHGPjUc8E55prQdpshVrvG8dDcQSHZ1BrUd1vTPE2",
  "key23": "4813EBYRH4WgaGTCnZYcWJRdX8kHdWMckDxKdytcbTWCQumTetDE7kGYsL3XRxKK95WxCABhEYCqEEatrF2dFYVm",
  "key24": "WDMd4vnVUo1N3uDuUAKXuXNXbUbMpTRY7ZoJjHeUxAffKxNVLj9vHAkgdDwDhUMChqNikwhinr8DpHQGUM9gpg7",
  "key25": "5CVJQUeoAQf6UHZDhcWJ3FCQgwmMMm6JpkZv9SbMT4F4ttpQ7feu3LhwNtqu76QECC2mYmUenTGbUhU93YM645MN",
  "key26": "317Kdid5X1UB9zNozueYDDGEUV14f7kJEhQMtobVY88PBRwvjp6FT9fZZ4Xq6tnSxdpTeDtWgGeJdsn6KufkuN5f",
  "key27": "2ownekwVGiWSyXpg9r6dLSAgtjRE72XNHas8arDpbQaF7KNAfradi4Q28KeyvQ3jdH6kAzsorGfZagvC5AZKaRTK",
  "key28": "3mVPZmFUN3MiBZcXhqtJjqeyRx785Exvz4VcatjqzT624pas6kW34zqd63CGAFdU7Q1saTJZsT9beHG99cN7eHVK",
  "key29": "2EyyWyDUcNZLMSw7GGsUW3zpq2v7NR8SsJu2VLUBz9H55tdq4M2JTdZkPenKFbPxvsSHX7EgUuYi7C7V7PyhaHBX",
  "key30": "9uudEe7d9CRKZbTpWhPG5725vBWaaKMf9DxrY5jxRvM2EkPtZEjkJWjVpdNKiRdkMpDNgqXgh75uyr1PVocVJAZ",
  "key31": "3LjJS7JpKwWJx8KQykxpgnHodTrgDfP8pBhXqkjxSJ4tnxYDYtA5cTyXemVox5fDU6ZJZtchXpCr4EBLartVxY8e",
  "key32": "2CS6ykXhGvCjuENEyZtEKd8TQeC6PmirvMcd6vCpgNV7tSVPu8M4YruqMVBkqcJ366vwv91XqyHWnnz76TpFo5os",
  "key33": "29egjuYbRaS8K5hGCtjtAtEr7SnE3PgFCJNWpjmKDCqDxnNBt16YoD6cH3X1QmnRzLKbU1FwdzqB7WCiUHmRn6th",
  "key34": "3Zk41Gz2uqhJNzC9p1UziQQS7jNdMJ8WhiMJZiKqr67Y1D8NpbTZ9NmJzCH1c7sBdGjM9pfh439PHXu9exCN5F7R",
  "key35": "2FGmuqh7im81fiEFMBfV3FZT3hd3cbe8pNYbRspaQdbhcmweBArKBS4Yg9GBZzNQf4esAgQUBUH4Kv28qC6zv97F",
  "key36": "4VQtAGmRPLznBG95wUXJUib6ZLTYcNCJnFoCnTBhPkmxy3DniLvTJvoTXhGVpEtnfvLfDmUfd7StYoagAjSpQeQA",
  "key37": "63n9X6pXnWYrTvoRGyErTRnGauYSC6KbDaThkFDdSKxEewwyTV3rJUaatwG52hPv1zxZ5QocHuXetctuEjvETM6g",
  "key38": "3jprJ7Z41F5kdiorYQdkSieWwXdCu22cnsGxtX8fF6QJa8LnrgX5dUWPYSehF3ZVdzmCt2Rjq5DLavQ3n3Qut73",
  "key39": "gDQW3QxT6R5DBzsZji9UFyGRHAgPRMc3xh5QNHigMBNXZhFSuK6FR2zpBsqWRuPRYkeYLbbY1KRnHjgs1UaTNbQ",
  "key40": "121mohMDAsyABpA3N3vbCNjcKkqkqZvRaEJNDhM4MDxL4rc1GbtXihoVXQDYxCLSaVQxP4f7CnZPQyezpF7wFQRK",
  "key41": "3e1reSL5FYfv2nW8aSCr833FxQnzWRyeaeYb32d4P6VaaYcUbiQZZU5YegzCqVKQPH4oZR4D4KieQrCY8AkoPafS"
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
