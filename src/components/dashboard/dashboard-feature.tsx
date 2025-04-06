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
    "4mvyJvZVn15eXi2b2DKHSkcsLUJeZfeLzMUiRo7qQi6zLujW2dKaPZkg1odsRXoePgEM6EGB2Mv4yxNqZ7CUcnBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JmtxtLMQS7EiQU6tWaU59MBwBBvYXo2ooMHDAi6GwmURaQ4L6vqtHtVJBMBHufMdLFhGeHvyWPZ9AWSsXN8irCr",
  "key1": "2b5yr1pAs1He6NQwabpZSUBhmdRZ2ArJPvXyVab5D9bpYRUw9hmythGpKHpDtJynP4eEWZBdoiriZyVYDy7mKyTA",
  "key2": "4THEJDM4YrhiPn4woEu99hVYtF6bA4xUc7DGhzQz1roHwWkdQQ1zAHGQqz2yF5qUnxk1GUSK8mjGRuSgtioAHVrC",
  "key3": "5yLSdFoTWy3zNYg26qBYh9uvh2q7eTvSuWtHpQBq5n1PQheRo985VcNpYZQPuGZxbSqhvknAKM6V22SsgDAMNck4",
  "key4": "A7DYQsyibFmpus9XSGdHvcBo6UzN8fqLZRzbm6owPUKM67bcy7ezkYtXZMnf3yPC9PMEt51TDhMY2xWvek8jVrC",
  "key5": "3zc9bYj9KRAenn41ab1fZVZhgH3wCf9787fs9gGSeXPLsarbYj6Ng6ca862bZoFUSJRMDUddi2MFbTsYd52YLAQL",
  "key6": "4dAV4PcbgHb6Gi194SFVJv7y1toF6w6mLYPprsuuekFn7fKc29L6uZPGpUwDLLogG95JuCK3xSWnov6qz1FVthLy",
  "key7": "2dzvWw9p8gyazzaKBuND8Qbgyn4HrrbF2VyKxCYa2trt99Yxh6uEPrabZZCdud8uUNYHqrXeMP3Z4jSeW1JUDba8",
  "key8": "2BVszXdUrvPEZKo7xdvssVPZ9WnBxs3TFZsu6QSCpu9unEbRe48G9Z54zonyosULAL3Huz3GRxCYscFvvWTKiXXk",
  "key9": "5s9uHQURkCyS4VLhvTnAGAqTEaXbe52ZWcKxV1vodZCUrkWZzffDCpUdPkHLWWemY9pCjswctKQ9XVADkYfgMHRx",
  "key10": "3bVucCpuNwYs5nefdVkR2rVd6E4WX2VMRyBC11p3Z9YSjDnFF1EZYwMNX42gkjg42jrbG9Kf9snZwzK3JkX4drGx",
  "key11": "28ZC7tfePvwMdKNBvSaqj6PgpqF6gm1KvdqU4iypkhBHMUoZB6oQrvggzty41ny2uCBmfoHT3ypactJixaG7EWJV",
  "key12": "SJ8opeeVPxs5vWS2NdAdQoqbf6QZkein2eiKTECqAxPWB1gqVmjeB4AaAhwekGEQ8bdbq8WLFvMkVXHHPVaWdgm",
  "key13": "4Rcb99gaGWcucw6TVdJh9Ma6C6pxi9h92aLuGUW9iJAmcQYGZnxvcGhoKckDq9NoMgLqqmcc5rU7vRGGbSz8Azrf",
  "key14": "tDWSJiGrK1dAapjUFV9ZqtgQxKh9AUnktqwmbUJkLrMhEGdr7CJYh3jqa54mBv67yuo4e6iKwzQWMMzWxyJd4dC",
  "key15": "U7iM4s8bFBYXrnGY11b3RKRJFhETK5uphvUHH95BJuiQcjHWt6PMdFDminr6ejfJag2HGvmkpKmWZLPmp64pjHe",
  "key16": "3GCcx8dnZi15ACPGyUu4pKCZMHuUwuwnHFjkHX21gqsz1tsvN6vy77JpceeEcPJCziFCQcqfSn2WyymMj3rorjoh",
  "key17": "42scQXVbmGbLv4ZJEZTbBqbRigKXr8fMHAGZ4tz6pK6HiwZN1yG2HRaM6yq5rRqndjW7SMdpmtsDwpjvm1CV17ui",
  "key18": "26Asod5RCzB9mr7Yka5CSQ2LGJE1sEbPEQLQavwkhVcFZcAPjKMHcksLr855psb8hCvPsde9aXxCJM9XxXGt2eQm",
  "key19": "5mzCfRGVGKZ56uyTr1GzqCYeVG2U8QQ6Wa44APgfr6uCC5YbSXPg1p9q4PvcXcDFeTrAKANHsR51XTCWx4crK9xQ",
  "key20": "4GqJXDjWggZCE1cmFNciyxCWS1WpRDb151M2i1ctdWwtdjGcXM1WNy8QghDipYG1JaYtRwbMxvsJ4uez8XremkPJ",
  "key21": "5jwJTaN5h66UBTfFarzZPXKwciPM3Akig8SyXtYvvcBDRUFP1EDUJXrHYvsmu8m6oJ7Wu8utecXA5Xp1ch7FR9jA",
  "key22": "4KHbt2FPDfBZtnVprp7oE1LBRJHGVm54XkW1RH6bCp1cCCUepsMynVKYmmhxSDTtQs6FyixYjzNzRn5RkQtYiXHP",
  "key23": "5ndxwNqtnJkVTXmDRaHYx5C5FphzXvqu76yrSwyRuiE61zTW3Zo1orJr56tyoScWta7xhEfHt8EGto9aMgyJe6JY",
  "key24": "4wKuXirqmt3ecRgHc733Et4RVt3d6TGZzeN3CJq3U8gY69DAXhFv9KpLp2SGbY598Ed3bkMdz1NxjJyoNx43ywHH",
  "key25": "58su5b9m2gHmrz8NgfWhYqvFSiRyJfX4NGa1v8kDP3wKNnV9vtMbjT7kkbSmY8WmnVLpMx4qmtfeaXMSjV7kqdzD",
  "key26": "3NHqft96GgaSMSeAkbMS31XhQD4srM7qSCg7dcqRpY3w3MthexYt7kFzWwnxVgxwt4cqKRVAFdwmJ6ELHTqhuFUm",
  "key27": "35BWAdReYnTd3Ewhg6f62woAvDMa8nSNUdoWVSiTcBkiZeLRsuJwhVNyHqzJFxAeuDj4AishQiP2GDktqkqeaycB",
  "key28": "4xqDnaZ4gkjQ9nVsbVjAgfmSrKxdWjBJbs3SUMwYhNgKPzLqhxKV7mzdih4H1fdKHZQZaXwrp6sSrxvV998xkNcm",
  "key29": "2KL9TnF8iVx8ZkVewSJ4BjpvSVZ8gA4pnF6CvdrB8ZoyHwGhXnMoPFku7HiQEVnbtJFY5VUHZKr3MVjQVkwtotLg",
  "key30": "5MYv661tCtK8VDdN4CGZjvHmpxnATkvKR62zhfbAfdFxmEjAufJgdWQgQMs2eKbSEdqePZymuqCF8fjCEExBA5dg",
  "key31": "4xPNpgCHGB297UQPsymJ5KnkYSL5LG6Sv3EfxFpbi7tmSJ8yCzopK44ZBh1iyECwuHP6rg5UWxk2YrRpNLPbyvu5",
  "key32": "216w9wQGaHxxsRzPxJs18zx6LH7F7utZGdukz773yukkDC3vsB2j8wFT1ZZFPcodU4rvCSD8Q5BCfnDLxmZyQ6XY",
  "key33": "24He1LYMTczSBHr6vD8MZsgUELVcpcDfGSfXM5fdsRqyg56GQettj5jGtRL95sk6oq31e39fj29nLWumzSEcBqfF",
  "key34": "56MvB8XNeXbHVos81tAMkJsS4CiiSvHjM8QuN9Jx1ueBqTsVSJhFGNdiPv3rCc8tuizQ9eaj14ecvg7KRpnPavXY",
  "key35": "3VCQrVGdX4DqzsaDeG4b6gAVKdT7ASzA17BQCuaT2iNn8WUQN2wfDkvixijbHgjaKsMjtr8TTuvWQsfCNDTJfMzY",
  "key36": "3KHk7Nq42DpQXs9K4GGFhhWx8cC1ukgPKL1bo3jN68hHgEGB4DVy8MKuF8sXCxjoePiYzUQ2LsYWmYR4eire1EAV",
  "key37": "3PgLXvJ7uBQL6uhC9sQxQYJFpLYEVEMntKPEGswCNy1kqXcyJ8PFJp2Cuk57SDKXzC7DKLXZPq1WsDVcY3PNLEgS",
  "key38": "5yTwi1Hm8MZg66WY7A85SwuiECrFPRJ8mroprwcPV6pk2nvvZB3JzRw97MhQrorM6CRtHLJxkBCQUCbG3JdZnJMx",
  "key39": "3jbmrBXwVhDSW2EUinLMFhnWDmH5PGHGRX92AZLMnJ8XS7azJz2tgcCYQDkrRiP2JiG8HZAn6FFKngAqL6HBNGrL",
  "key40": "4zJUHazrEh6xtq66Ypdx2aQQBSVrhhaZmCMPP766tCST6GGp9FgUNS5waX5MFmCZYGBPKHniMuHzaEXKxSfugmqA",
  "key41": "37vEAZP78dnaHw5jeEDh3drxPgGmyT4yrPDzubnAQMDBq4yxNiEsk9gxo4xVnvGYAonsScW6nhg61J61MWNA9DWG",
  "key42": "56dKFnXb7JyrSYkHS1KYMe4EbEZW7Wajg7wjm8Wp1JrP6s1DzT418KfNJn4yuVs3CNtAQqDu3NVZGCK29rNEtxHh"
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
