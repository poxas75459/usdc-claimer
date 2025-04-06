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
    "2EWfGRUJV2V5rGmGsPkcHFz5LjrfTeKJkmiuATcMwC3UbP1JcS8mfbAzWvxD2u6NDJtuUumT5Scqf3QpLNRHAjTq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65qeaeURupzNnKN8GB3htYPELcNyeaeyMxNmCUs5iqENry5XzXF55vxmYmrZ566G3ULNZcXYYpe1tn7sH7C1TGxJ",
  "key1": "5qc9pTvSvpjFdiLiWF7ZSYp9Gj8zYrXh5XMqjQgkJu9xWsYcX24sqcHH7w6kJ7ebi5JYd6dRWYFKhZgurRmVMV4P",
  "key2": "3urA7ozD3ukaQ2MDcuKVTADinLxEtjCKneCpiRXoee2cg47MsZnfa897A4aajFQWBBybjTLrne233ueRUHaRe382",
  "key3": "3oiqUrKVWu5XT39FKaxGFzVNEGgUPaSkkmzAgegYCa7C1CEvxEYYkwypxo1azCVMYCd2NFi1xp9maFyLuK8W5RKy",
  "key4": "3awJe4sMMJSQpbZt7ZeBreCeyFtPk4GVKR8y55XUv1xZs9VUj1W82rNhAoSxjmQMVzaDw9uRFD6Prxh4hznmuLFm",
  "key5": "18BBCEKUDsKkD2GkjZRWSzutjmJ1N8YbvYwoxEhe5VZuWJk46PeJ5i64AU6xh9S73gTrYviF1ZZUep8HUNwsSJT",
  "key6": "5nsPJ64RJUJ7Q8FyHmbvdEdiF6N4br6DRkckBtNw5SiZpP1LGJ5Gi5GRSb57A5racMcyt8owi3zrLii73XwHhV8x",
  "key7": "54xFEo8FLSG9rpYHkEtHqrCz9oSfmZUQXsAxz2PaUDoXB4TiQZyUj9gW2uxvSeDCUZuSWAScJiuM13viaszy27zY",
  "key8": "4w8DnqGhACstru9fDERieGR8gQM7fnRgj7MnFkbnevvaHTsQnjwQmhhdvT8G7gJgYXoxMW9EEYQxhU26CHPzSBnF",
  "key9": "5b4a4zN761PGxnDyhDqfcE33igQGGLHnDSsdWjorn3RRoXuCez4koeR4jYdH1P1paHUDQ8auwHLkbhLgRNdimrPg",
  "key10": "xq3zLxQGFXUWHuY4jRxPNUUc3ndgL7tGWxsdpCghTibyxzRPZJfL7XaZxNUboyqDyhgYr1fNgGBTgdiqkqu9REC",
  "key11": "2tZduy2wNjb1SuNMMNejaCJRPBum9GTxkkPtJkGTSKSCZ9yxrdDnLPnrpH5VwKfNcCJ73furEQXGafh44KsVmyAg",
  "key12": "2Rbp7Z1Ugg6U8emrjFpWWkUy8qKW6Y4t35sEJ4opmHpXwpCRyiEjZ47SG1ny52WcfynAtvyf38UB293s2AYDSpvX",
  "key13": "5jb4q8QQXB8F7XheKnuQSyeksJzx71ga2axA6fbdDzrtct5u7HKGdnspZoiKDw9YAhHPwGZmxQ2Gv1uaphitEmGA",
  "key14": "4WndxSSkZg17vgh8kJss6iXQ3VFQjoM1BNjt3UN8kZUau8FbmC1LfRjjYHV4yvKScgyDSgbznEXVErvZvgbMaAc1",
  "key15": "2f7frykdDW3BoUTjd3QuHiKxjQrynQhNhpg6LijGFbRUU2nZ9K3SpzPPpxxQpScGjgeiRCRy5YEzC7tiedbqs95V",
  "key16": "8E5kQtvUTa939ETCVE2f9RFthmr6oPwqsLtdfdyPoi6tkcS2iWvZHEo1hG1HzEEaLncHvWmqtJQG5sftBn98WFi",
  "key17": "vbJ7JCJLWrQExkB3si6YFNCRjcsN74N8VsCCevKMXJfJqcC9yN5XTQW1NH75xS31NR59kx5iAVb4ZTt99PhHsHJ",
  "key18": "2q3MNLqmUECWwSzdN3PUY8e2GvPsT4RRa8xiyaENroZdg1CumCnnXpY6xeBPf5K4KLqgGribjwiw6LNnPLUZbDkw",
  "key19": "UPoAXgckR7u1FKtYQQLzWT4nuZyyzKcvB62dgFsnDUcPzTSyHxJucWtSYGLCM77kV464M8LofPN9P9VnJQ2qUtz",
  "key20": "5gddzr2TVMXD45cFBfB71TU8ZvPrbjJuM8gpfGS4u3Q8A9zJxxpcmpekE5umChV5M16R7V7f9xnFak3XhTs3JSDm",
  "key21": "YZtQ51EPcxvS2rmn7cjyjXL6evN1irkQ3q7PtnXH3GeQy1Cq6q8P5uE6JgEq1ArWdze5G4csgYHQ6o7KapSvgSQ",
  "key22": "47HDEvLZuiBV5n7pipaqcWZSbrE2qCFsetzKitfgSN63pbJDwx9NYQ6K3pULLtMN64bmrigKbMaKWQAhPKsZ5Gzd",
  "key23": "3Cwt4kcbnxRmxPM1LLMN3JekZiL6Laf1uUaz2SKftCXi5FE1aWqrsrVPXcfKpcaMdLH6QWDfnHv2t1T6feaNkVSg",
  "key24": "4vgau9bSxvHU4wE1TiY2cbeJUMC6Bp7Bah2NVoQwDkXKDx9vPzLXtTEnV1sdJZpra9r22KQBaZE6Axc2JVrhKV2S",
  "key25": "4btWWzUBcMCWyrBGC178rCY17g2Py3NMAJp77ZzBSn1YYbSy8nAFNvjTRGxVyKop9WntFt7S6bd19pugbzUwekhL",
  "key26": "2VnsnaFugg8dd9uKWR9qRimxMnwuf5VcXAKkYdqqmnXSuGwDWpSPhoPz83AhPqB4gdDnFPVCwyTFhRBWAKP9jPeT",
  "key27": "5HvDPFLFfzGhr2mQZhQahuwbkWCzZXbVfAA61Gk3wS972jn2NDcn51APezvDXqhPkDdmvrprcJfsSGGWKbWojQen",
  "key28": "3UQNxQq9paHHg3udUVyWkGNcRFkiqSzBjKVg39PbtD5bRUTPjJX6CeXcLjS7fjigLurnU2PonejyaP5qEmpnQbj",
  "key29": "2PUj2HkcMc3HqVszW9ZxDhVg5zswXiGNnLRQocYGciZRJqeuwvV9pSXEptGS5CpgPsGLgxEaKciapqMhFBwyuyKT",
  "key30": "65JhK14JfKF3gLrwNfoQCEi4suiYd37yBPeZKw7Dzsg3XTs3ksYws8Uuz7TFRi3NvYQqpAe49rzF1g4fobn8y6x3",
  "key31": "2BekEJQaUc1xABXdmHg7Mn15WmDh25KJz2to6YoBgH7N9M2aPCKN4mgAd8ov4UNmn5LLbPw61prBnfANi98NhmG2",
  "key32": "5JgWS7fZnchAVb31mPYNctXfDp25w1YyQfNkgVoF59GeFQuzH3enJzXCTThZoT4wvuQdT9oNKw4jAHYnfP9UTUfL",
  "key33": "4rLxX9fr1tfQet9DpWaRS2hCdR8FFLv5yTLkPFisUtQKtHAvbZQs3hNgmteR6YGYADxZA7tTn2Kim7rGKEKQTcFu",
  "key34": "oyyELsCRDmR1JwURaVy77sa1x5X4FYczxM8gRBJHhMBNwFeNktTNevjWUD7m83MaEkjsHQnoYGndT3ww3iHbsuo",
  "key35": "4uxWf5AH2NPkKszGePC6tZFepZaDX4EV8SmxVcZAdSPRHtXxJ3jUYfhHkHn3MaaTvj45yvAjr9HpQ3XimZcz62jF",
  "key36": "snsAFNAMw82ohwQQYsqLfrA6Z9WZMc2fafTTTC1KU8n6KpehCA6kRw3cnStyK9UAuQ7oRfDPrPNGHEKyGwVvvgZ",
  "key37": "4yERNZQKp889Ct3i2TE6vQVsTyKQBCr2Q5AbFmcdw5ZAaw1q4jmi1jkBS92v1fXgN8AAiZhJBUKCTBktWXAeXTuR",
  "key38": "4gcaAkrQDa3wCFk8iiRq4AFeVg3oXvAmH6w87qKijrfC6cH8JFLGH3dcVcyFf6dbAN1hy7G67oV8FYkWtwjEZ8Mi",
  "key39": "2mWVZsjuU6vPJPFpYm5QGSuammUVU4SMVxq9PRA5NHEFGq2svCUZgcezwtmRagojYyX59MWBCbQWRoQLVSwuXhjp",
  "key40": "4thnj4RU2STau1pqjP9bWN3SndwP6V8mSdfSN9CdnsbibDEW2BCEP4ysFSGXadXzVWZ2aod6puuP97WLkVbkK4b2",
  "key41": "23KR13qjFaYgwK6ehhtfWd4MPNmRaYdBF3c7o62F3UajdtF2TqSWDY2CRHJ9myBZ3MC9wdSK3b1uzMUSdJLniyQC",
  "key42": "3AR4GaXyYcFyn1wMToYwFE9Y9JG74y268Ch9DVqZLLX2qG6XuVd67dvfawN4NbhHHzjZ8RUEk7YRp7FbQtgMR1Zz",
  "key43": "3rL6PNckE8t91iueJxFeSSi1whmaihLaTuyjNGg1GEtxTNsWh4ro5dasDnDtb2B7RSTZJoGcKSdNc3KS5J7QkFQK",
  "key44": "4smdi4NyxWGtG6Q9pAUshswKkTc9cEeyi7hmXYVquWWUoy33JV3xmkiYm5iSbJ1pEPaZqFLAEoJwLuRoM4xhCD4v",
  "key45": "43WtJQcc2zwBnJdJT8ZQBvuWTH5u162ig3wSohyXr6tXSCBnsPSxpdxzuPc9uMsutRjMdhpykkoMcoapEmk2A6Cx",
  "key46": "4Ym2W6FPWftot4AYSKdDGX53wyBiFNk8UavDNHWXg7UkrkEo3bxxkrFVu3xXZf3Zz17cfVgQFcwVwsRvEMYt2LjZ",
  "key47": "4thbea86rVZ3gygYhPdx6sHjU7RajwPghbTv2U8e4nL7JrtSxKYUUqUJenoz7NKdPxKpchGCa1MbsPSWAdZhXUdE",
  "key48": "2f1eSdQrSh1NpvpTUPB7sjGoNNJV9ydK249MT34NZobN62cbgYGmggb4jGtkNCbUc8Jh3qPWGGekE7Lkr9VkYwFE"
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
