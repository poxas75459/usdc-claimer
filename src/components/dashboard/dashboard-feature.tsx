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
    "2Dnoh3B1q6uNn2o6kMTQLQjCJq8kAS9Epq4m7JjCzW4EZKiXw5rbUsjuDxPLb8yFZ11dmpqgH7jMHrm2m7VJu8yD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NM1d6DRiuD4JThrXurnum3QavhCaDmPdUQZfvqg7oPggea6HzDfGN3RdLuKr5NdvdYWY1EVYDNRnyZTSYrQQ96w",
  "key1": "2UqvzdNM1GFNiLpgBt4LWYpB8gCt93STUjdjQvp3SWxAqfLPRkv1V3sr4xSc55reiU5dcnKEAtwYTKFKS63axMLX",
  "key2": "5TrKq8tzBk59aTnaUafLaauKjUpFvhLMZRyjJGGRPMUbKf18DcyutgM6jXSpMXWZxGaRKbPGzpjPyoY1QXSm37QG",
  "key3": "3jGTud1G71Xr54SLZopmDg9eRQehegTg3f85n9KxKuMA2NWvoPoEpq3JVojo5dkooXkgV3NTpTvmsJmNxbVsor5g",
  "key4": "Fpk9ihRx4xwhM4d4JDrjfLGr85PpdFoTeRWTquSrD35RfFvhiVVw9kuDatapCyVhMf2EK3TeyzLBA7xa8t53QM7",
  "key5": "4e7Jg6p4cLmVwuWMAfssUm3tUEmHd2PcpmXuHJqNKY2yWo3df39xWepus9jwZbDkfU75xRPdtdgPD8eBBfus8okf",
  "key6": "2xBSesG16NAQcp3t1v4ywjDth168J3P2jHZ3mLH9ff9ezPEfuibKqpXTVCqTLkaLiWzBvRQr34hVzA3FYjUfVnT3",
  "key7": "2GA1xBMSRwzgHWdkfvq1qodMY6Dg4UXvKJ7Mv7LW1NyWjNK44sSCqM6F6fQGEgeFm2c79YzpLwtsnFKVSiaJNET7",
  "key8": "MtYTVYCcYM2mbp7NrqjSHs6Vev2Gsedx9G79UoaELrX9bwSM3dwhxPD4ycytwQNwv2n6JVREGq36GjCBsbmAQci",
  "key9": "RVNRsVnUeKumDbQ6xuw9QVWv1TTosyquDCAY97uVtTUUER3tevDxgBn5BbHigRfTfVhit2CL9cw5cXzy9fukyCE",
  "key10": "5GbHzMBTNfwtpPfd173eHTB2wM8EBRYxJRTFPcdMayMz9QjvgF7VcvE1KPzecVv7Tho4uV1PEHrBynon1q26JHvE",
  "key11": "5wYnvs87mYhKZ6Lk5yFDugNDtVF59VSGnKLvCDW588M26njrio61as5cMU1jcCUvnynM1yEu8xKVqhPZYjTz6yzc",
  "key12": "5F55J96LrbAAFNrgwnnpB6NGUkbUeUq8Em7NnVK28x1UqePAZBCBzPHCz2pVyLdZoXBU4a1ZUjVGWKi6VLduggb",
  "key13": "63Zi8y2EjtJKpjoModtau6n4WsyUG3ehc7mt7uarR6ZkhCHG9RvuGfivPoLsp9fZ7vNDnSQL5nRRgx47MJJ6oar2",
  "key14": "2WVQtyupmhw8iRFp2m2Syw3AgayiyXYy9VhUXJU55cbfjKH7PxX6tUpNpEYcWN1QnTCUKZELPqkopYPaEYpjJyFD",
  "key15": "5umV7Zdo9hEu2GgtWrYPa72rjKxzMVxo1zieEALC4AH5mB581torzfzFU46NZFCv9uZnGMAwhUY7WA6FfGPccWCH",
  "key16": "DVUDv7m98A6njiB1C5FRNg7iZZF29xrpHDjjzn4ES7ewEZ8L1YN9DMWAh81DjpsMohtR4xhBgtx6ydUaN4uozUG",
  "key17": "588qUfqXbMJ8Sf1qsyNzre9mQisEnUEKY2EgQiFzRh96HGTXpi6EsA7cmvTwvaZnLKXNtpPeH7gtTUmXV4i5CEK1",
  "key18": "2u9dwAuJa9XuFKeXmn27d2XrNNhEg5uS8gatCeRR6XYPZgvvTGwz8XAmB3AX9T5tb1AJa4oHs5BAcgAjocJ4yQ2G",
  "key19": "24dTYcxpuAz7fGyhLBdQepNw7x5tMFfKZjK6vt6aWa5CwM8uhaoED5q6X2Fw4EvoQVX3mRqz83QLe8KdSZHboTsm",
  "key20": "2TK5A1btTUzAYcXtNvvtm8rVDeVqexqmhqAKhHThh9fUjTURHg7Ukn5C2sAvFVBgTvna245A1Fmn9Srvm5jjjhkx",
  "key21": "j8Tun6LeCihTobj4A2CdMCqovrxL2XUK2skRbe37W7XyECfn8NWw82fejZGp9f8mcLrrUn9SkT8RB7ZQxPMbxxq",
  "key22": "4km81eSpSRSgdyYK4UYkTPhVVXKf1WC8ojTw9EKhAR5gYFPaJf9NDx9hqPFMehfbrzV4QKJgTREYxk87pHDE8Ezm",
  "key23": "4rqg6TVjPBJyj4BPafjy55SxB6wWEurfz7zRg3g2gXZjVeYr2zakT1eF288mqCJza3VWfrkDjfM4iM5oHx1xb1SR",
  "key24": "3XFsmhmpVyFLf7bwbH41TnitENapuMZ546oRkQZ4oaVZnHajKJG43kK66TSniNwJurhaKLYk6xvESh37zaQjFTCu",
  "key25": "5xWQXi4aWvBV4uRtBhKLWr4Fk8R8c1jKG4HszRUQHnnyPwKhrPAHy36xYNU5j17qM1eZ5oNiHodmtbSWHs4dDtMn",
  "key26": "3vwoGM5SwvgA5NXNwNxGjxpKQAuwhAgyCBD6TCcgYFWcbHyouXigQzWwwaAHx9ruYep9Qbxr5GRqFRHumhTsraq8",
  "key27": "XRhmwyPcReRgrG3tvt286wv8GYFF5dKcLxdVvJcGEEGxT3xgJQgmm2PU4wKLf3XPYuEe9b3BN9H8Vd9sueqFm8L",
  "key28": "2YNW3ymKdidGrqEQUUg5dazaMvMjYomAzUPXThswEoynjN7n6KLo76DnH4WRKpUJtkMMqgdF49yw5F2tMdUEFhdg",
  "key29": "5Tju51ASsArKoWSENgJQ7iirFA3DHW6Rr8xAnpNCUjSqrVgskqrLYoVwF1gCUtruAGaSVuLzyt3XUWDc2eeUxytm",
  "key30": "3m1pE5erCstG7sryxwUh3wi6bKZjMSfWtSd4TU46GtVpWTWiCYx74uXp4dHGb3rrE2BJC46MNfWA15oUvMjVetiu",
  "key31": "3MeLGyyMHDZe5GjrJmS9eZL9iHNKeS8z8zHffJdE4wksV4uGfukbg7Q3semzW76VFcY8FWZF8verahPgPU4DqJqY",
  "key32": "4oRDT6kgDDmiBHCbp4MUheyQZrwci89PipCr8gWoTcLZvHuw3YxUZdXnj67YmQ5HbgLQUs8QH5vcAppjPsj5EvEp",
  "key33": "5kzkwYyAoB868KDpYs14hW9HPSitA2sRPZyyPfkvhHhu1eWM3mpEEvRA43esrrvvLuXgToJfjWbZpxedvXub6yL4",
  "key34": "45zD8MFnq1cPPPgFUT7hGiCnFmtC3uuhdUWefdiM2TDALL7wN5nVL1J6YNJWSZx95YHsATGm34kXNbze1qLvHRBZ",
  "key35": "4pe5oZoaMVGU1WGEFKEypREjkxeCJoQEkuvpKnvqDx3b6XgYHT75VgTLZP7adpJiNZv1MF5qsqq717VQBHMYivvb",
  "key36": "5pEFUQRjJxmTKWw5ReQ4hyJP79Q67iCMQtczZwmYPufKFcsJVeT9oiDQFciCCcEfKXfEUqpwEr2edQCuDWAYFdqq",
  "key37": "3BL8kYaRZvW4KRsFL8EfMreK8eRaKBvNdjk1kcZYVpjNXA3byCVrejRGJUHkgBk1fNfRkudNCX9JbHpXLXfp1mgU",
  "key38": "QvaPgGKuy79caSXogvrsx2iUGmNVKRjwoYZa4dUecvXk8kaMm7QssZD1SXG5Eixh9b5uoW6bqVqtoVWc4zi3914",
  "key39": "w1WbGw397SoPvaUMZeLTAtZ3VmrSRrNeJVR7ResqUtCReuMt36A9UAGDi8rm5Y26PNW9A7hw6E8srkoBjGFvToM",
  "key40": "4ukS7rLP5E5NRtVd9QwbkJfpTgPyXFRL8ooJzSs6xc8UhgSDBi9UzbHRWQ125waEUWtLJUZwCTZv1d9hp1RacvX1",
  "key41": "GBpwJd22FGSDka3qcAQE996TEYDg86vcSPmxbhxNAqGd2dHRiGSd62eyKaGA6KqctbojPzQ1Ee6aH16EaVojyfd",
  "key42": "5yjcjN4FNkSF9rJVERqm7QC8iiYcFqyX8yPc472igzdAc36nXKE8fw7VLBaAcKNqFJQ7acvjoBvfsAndW7dPg3jN",
  "key43": "MPDEBxFaSAofd8JvzWcKd7nyWRaXaa2999Wpu7QMdU8rE4anpQLW5mshspRrzzEasxbKGQdHcFTDSqzfjPNuNyM",
  "key44": "66jJwkD3BXoSoeotjHGts7TxwbgDBCffMQ4dtFQ4iFMTGjijJsnzxDCzL5PFXzmDdbE9WB5C99btzSDm224qwiT",
  "key45": "4GSsgRppAjhSpQ6Eq9nZqATocdtepAqz5Mcz9emx78StDuTjt65E4Z9KJAKpzKLJYzYo8WV4Py9HJYamznKu8zyH",
  "key46": "2hBtmjxXxtn93aCER8j1Mvkz8dbDECaoyKGfURedTVhRq3ybHU95dWGAjRCZbhqDrHHqJBzBVKREDnsa7s7qGt45"
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
