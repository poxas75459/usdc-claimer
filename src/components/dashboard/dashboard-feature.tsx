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
    "5zwYz8nHkCJW6ry53BaYuH1g334CBt6dzy6ci98RzrcTWHorNDHDX3HfbYaZdb3zw9CjB8LvcFNWzD48PkG6Ux3k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bSPhsjTq5XgzJaD5weT1wpboQBc7mBW316trM8gJrS2yKpHkUwrDYQ1VQ1cQJcdXL3VPWAn3XDbER1zxyYeL6X9",
  "key1": "QmKQWNsRDoJ7jie65DXdUynrYq5TaPWjM3yNaGtqtjPkETNUSdcSzX75sCS3yJJ558vsh38SJ4JJu3jwGZrN1mG",
  "key2": "4Wneq3YCBXLa5rxbLWjDrPrB3ijvTAUwFAPs6wWXXtGedJtaUrdijrz1S4a2DRtTxxkAkLin8Qbvn1USdML2k2dc",
  "key3": "4rRvy5fFVEMWivcJZmLGb1tcZXhWqTwVsJsXWpti8Es224gxr8A3eQhx8M3meBRvNZY3HUhdwp9ykiLgv2cw683V",
  "key4": "3FaRrYfZsvXpYJqrtww8fQ6q9inMr3tXG29HXFdBtppFJpzrG2vdfYB2v8S73oHtHQsaGrqWiwF6gG9ZvsgzRTV",
  "key5": "22hjQaQUmE4AEUycaLHogJpgModKD16tDUyHxkPLyRXLEN5Yzfc2yo4TE8T8oD4Db3Cz4gUkdg5n1sdoMfRpes5X",
  "key6": "ZtAJ4tMuqhFMffaVhaRjRvj6vnPmH6t4gxCPh2kcVRDe9Y4TjadqSdkc3pCzWv96u79oAGKxTEanur16LK8jXst",
  "key7": "WV6Pykrx6UbMmgV23rVah6EJUCk51JoTH3pt7yFxaVvBTfpLXdk6xsqg7MccXkiqYa44jHnrkCTV3XfgbSnVogy",
  "key8": "53sBsKta9Sr5XEPHzemPsfjJnt3S2As33ndZD7npjNCYqyvxTKKABb6d7TehGmG9PHJmHZn5CAoAXG7cVj8Rfwhb",
  "key9": "4R97ozXAk4k8D4bGXWk7zhmRUUKdWmGMMw3BR41DBi5imDJoUXbgKTfSxTTzBeQdtXaawbwdMRRiVaWTNs9JCwxA",
  "key10": "3VyekahyYiQbwA48RjDAd1Dk3n5c7dgyufDVnseNGfFBqHuNht8Gu8baCkXmWSc6MNABjWaM84FJvZkefSU28x5j",
  "key11": "5hmeabn1V1DkxUJEKZXDA8Fbw6smo1Hf9LNVkZVjssrXYVxwERw6Ecwr4QwdXPbCRZhv2gcjDmr5YnHDwo9VFck7",
  "key12": "3rzUvEvWxEfC4UcnLk6GH5U6Va4gFNbPweBvbuSfNfjeeHQHBHm44ZBN1kmu25PUPM9C766vahXMr68YLHBu9zm8",
  "key13": "4iycY1bBw1c66dkDtQ8kB61CUtsdxAWTjPAdyudXJja6Xn1SKyXk6TkhPKQEsjmgV9ccHbGVUvJst7H5a41P9wip",
  "key14": "Sjaq5v8RWw62Cxn4hS8nGock5kdwoXuBAJCn8bspqSD9Bq57kEyURmCALHd4aN8sEHbupNRnankAtHaKPRQ9HpF",
  "key15": "2nLEcTr1FtTvkVpT97bveGBfCRE4A71jjxWJqSbuEoJmW6o1rGk3Ho2EZQBjsNgEQsyrEVYcaGi1DcGbUmFDSEY4",
  "key16": "3ngR56kLqEsZJx1SCtF1GrXsvCxYdAqvXFf5oWKeZrYF2i8XABs1toCEbJd98KGGyogHbWbWFiYFFiP2ZhDhwbri",
  "key17": "4DeU1X9Y88eK4s3edKY6LbrmSCFgs9BtA9xy6KY5cQYTt3VJW2hJaQLhGppgNxVzdg1tn5bzAk2o9dwt7sUwAumc",
  "key18": "5f56yHKJBvCJwahoagyqvpov3SAWyHJjZNhwk1yHwFTpZprGCwcGFx71EPjFkRw1z9VWqWoQ4cp3oGxwWCjB8Wmn",
  "key19": "nfXBTLpwtzFKV9SzkhQtGpMQpLUooddHasYGzfHcgjAixSojcTuB6psnV66jw27MTdpHws8a8dFTF9XYHKF2369",
  "key20": "4TvM2q43etB59bT4mMh3w9z96BUNPqrQ8z77P6rGAdxr33nU7USG7wSvSQw1fHebbCy2p2trSeDcxDRGtehjiRWS",
  "key21": "eXRinXW2ZCfwAYP3sJ8xd261uaqCPwCMZY44aPkCAoidtKcSsrkgAebWTiT5jsrFEhtozF5b2VudS1dUdMuN7ym",
  "key22": "4jHqihvZhEi8hDrNUeDrd72W8pATfFYRnnZeCs3HHUXXoYbKM9AjfouFkfjfkzrwhuQSaGoB67xvXr6G2PjEYqQg",
  "key23": "3ztLLFCQWsLJeLu8c7aqtkMwqjwFEtFcwuGkGYhH4TetcXJ4crqysjwYh7aiGfwFN8NQiC7LS7jaZCZoGrJW3M1G",
  "key24": "mJVbuMAxJkTF9iQope1uHBKmD6Mm5wpXfqhK6jPrvSNxsaXYC1QTpJ89e3ycHPaQ8h94LkQE1HRTmWMGddzrqQe",
  "key25": "4pjPpzkQjJMkivVvqxLErgTzBAdZRWzUyc6L8DrtABssK9tMg4pi4DKL4ZwaMfhDavEd8foVCC2Ue4ep2g6Q8ru5",
  "key26": "ZXj8uGK33osrdbNLaRRUTkmfmA3SqofksDuABx6XB39i32k4sfVBo5hw1axJrWiTZWyt8sGnf6hr1s8kgTbAwks",
  "key27": "18WHnrRtHkfpLfTxUuWRSJZ3y5Cp3eTi9qGgDUf9zj62iduzmJWvrE6Ptt7EgPnqXkU1NSRAaStNkp5TT5p4HSR",
  "key28": "66Wsjo9u6SANmjF4jzRen5YUftRgWkDrgJfh4RFTj52fgQJ47ga78dZnskB3TcCP97MbWcMHNrqGEZi3pdEGVQMg",
  "key29": "4agwZCSaU2R1MCpfp12rHQ5grk156CUEbcgGSQrmmK6pNP9Mp8pgcY4pKVd9YRTVmc2VJdDUexFsjBPZHZk3HcBo",
  "key30": "5hkcsagVyBxjNwgfYJanVCL72ueFhQFCbCG75Rc627F8FM8PHZeQHW3xMAwPtLzfCHxSMfUmPDA8XGAqbydnVj2W",
  "key31": "4YGncraJntCWcKiQb2h5jR85wNQVGBV5my2m5jdqkiwWCFQdjWJn7AzUFrqttQB8q8kxVf6f6X9i95TQqoFSCqcg",
  "key32": "4oKzngqSUuFQ7r6h4iyJ4c2vxQmQG17FZ9MEdiiumHYqg48FpS1MT8nFT5qyQEftjZZyGsj37Pri5XLcntjcr8RQ",
  "key33": "49CPsK4XbThUUzrwZSnxTHkpmmqThcKR4grb4LxRVyGtt185U8EqB35iaXgMPVr6ZUphnXkFqakudCFFiJ84skFx",
  "key34": "3rDG4GQWTFuDVm4Lo3zud9W8vbqK5hV5LcBxsuoTpiZUU3iwveDhATsLxH8x7dy6A6ZVUZ45jTkMGENAFpgvCtYw",
  "key35": "foG61FmDPzsFcARdtqUZ46dmuoUtjobxBLFihYinUm6chDrPyD9j2XSKC6ZLEyJacHt3NJkEHpSYtn4dojHZCk2",
  "key36": "5ULZFq3tKDXJKLmv2LZTwtXXLZ5HBp8QarccSV21Pn3Y1Xef4FV4ZTA3LvK6Wd5hhfFFXLiCL8FjRdonGnQ8k4Am",
  "key37": "Cs6rxCWMmNs8Em6AgkMQweMe25Gfgn7jLbfevQZT6ouh2tyP93tYHMKcMRUuzE9gDFFmiQfTpg7umShEJT5St8j",
  "key38": "2UxFVtCFcJRvSbnjW6vscqsc8JH7drpW2rnqt6pzpmv5biv9czPAr5BYXan4YEMwekKTPMbjFpWP7167J8f3fjrN",
  "key39": "yqhdSNCLc1LFwFjgnNqUcRC8WPnvRKe1rmyr8Hunz6MQXa6X3xq7rKo4bzxKeo8Hfozc8xwGAiSURSnM7G4NFCs",
  "key40": "5wDMT1f5bLDWK2umLs9F5uetvDXotzCR63Gjk1LoFjJ54XgcYzh381iD7cxrGuZZ27Gs3ptgcJTAbkidbqViUgqF"
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
