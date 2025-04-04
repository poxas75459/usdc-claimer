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
    "4phLH4PZvRqtmfxdt5gAZSWxGSwT5ffK5iWjyB9x1VpioyPV4ZMYSVfuFDN6GdyHpdoLcsWEbjmWmqVACpRwbqwV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tQUtb9aUYXo9WT9xtgZrAHxPsZGK7okhmyZ9jqEoZwCwSAYKi2ixRzMyueZmc2HgCmgDUjs9xNXK33tMnrD3w7D",
  "key1": "5KJXueEe2W35vHGLDSBoe3qj9rHvXqT1WAYeVHiXff1eBjrs5x7ep2WVGVFii67UEUvxqMK5P3H5tfSDLFsaoy5W",
  "key2": "4tHCmqTNBGzEMUaiTwvoRYAcPCfPu6V3Rt6HjpX411bqALrc4CS1qp11GhiVHBtoHB3qVdwUC5hj3esWUbkoZook",
  "key3": "5QJYbo1FmLs27Emu3WmSo3t988DZoDktmv27YvWTH1u7oo1EX5Ku7uq9FnZ5iWw82AvDsfCugKiaWfJmwJK9Lsh4",
  "key4": "3KuVa1ejj6u3fiC4sabTdcRVf1bMG7hjMGrSGzd12tpL9x2JapUj173ybLYhW8jpwJBbjHndeoRr15wpbe4twP6R",
  "key5": "3wY9pZuLAALzK6xgwNiPfiaNn3DSHJTqgtKauAjY7RxxjGZBapYpq3ZpEtcEoRT9AmZBvTCEstXKZjxNipJZCWqe",
  "key6": "5aNddqdFkvNaVfiTij7jKnCa2YZe1RfDf581xjgxGgwEbdyKGgFDpC68s47xxRvX4jmHMc2QHT7gm5xpFmdi91rg",
  "key7": "35opU91WMcdqViiqZ1fnAfHSAwSAEpGgHcJfshbR8go14h4MnwBKgsziB87xHCHUdhcZ6rT5MJNdLzNGbKdwsrVD",
  "key8": "5pAx4zpggyzYDMdXsmgUbVvWBVEdjNN5ag6oMr1SBiwNn1ZJSgRSEyfUkBbj7otE18FKye2Sja5fDc32S5qFD7G9",
  "key9": "SVQagMGQ9z6gJfkf3VGNAhhoedHcGHG3i4Pa2zo9iDfUUoLPQEgQdnm17iNPeLeKWEG6dEpqh9vRKMj76SjW7Lw",
  "key10": "4JA89rQSKBY8pWLxDimz7ge28TagygzzMfqeD9oGz35k7Z29cZMSzGNQW8w1Yns11Cz4kuSTSw81Vkyh9o7ugste",
  "key11": "2NStMByTJMXxMiSSqzaXrgT94BensjhsxMWL5kap83NLhsuCnxiKgagqp5N5gzzqWxEdzUn7D1eh4Dsy2Fz2VM74",
  "key12": "2xMgRY8a83VuYQZtV5wVSLMdBdm4SPSzD4ErVH44L9R5NcHTrpuH5xxF6CKjGjFrMwEFJDmVEVRk1dai65q2FxTs",
  "key13": "25hUsbPGuZgEyv9zHfPq9YauUqaL5MERbaRoWKquCP9vUGEhdcymx7Cwidw9enF8vdYZb53qAQD1vsXGYjNcbuyU",
  "key14": "YKRd1mbmpsfWsX7VZ2QSBPjDojxqDtg7nhdKG7ahYUyYF48RJTjkydgdJcvxBkE8PJi2GD1dRH27c3cUWGZVodq",
  "key15": "54nc3BESrKkLJtZEg9yHzbMQtMd2ksUJWvAbfVukQbPpxiP7f6v8Rg7Ebpyg2sdoLuUzsxLZuoTTwxpXZLoq4JCU",
  "key16": "5XxfoyFwLoWJXyUN4z4tMuEFwHhZvW8mtzJyy7igXuXtPpZPAALtAmae6FecZJ6VK4s4zstrih9qxzyoKwZ8sDmz",
  "key17": "4tibzjx158x4dUCGpkQScWVUgsyc2kk1HUJ4L2uMPMNVaezq8UrJ23AAX9bo19SSsUyzgd8gByg4iSix6JP8Cf4L",
  "key18": "5ufSbb7Rx7MNTQunSaWV7g3v7fT6SsN38u8JxC4A6UvkkRebUVWrQG5R91Ty7dtnbeM2qERcVEhWn2Kjw8A4NQTV",
  "key19": "3kPS1t45w6Dhn97KaAGqB391BmuLjxHX7SLegexRCMJMj9bUdB43LYHw7DUjj7xjTUUZTKk8mGnJ4bPRUcpVMcT",
  "key20": "2a2Zf1hVf7ex3MMEziyjvvNB5myR8qdb9GEGFDKDzvZM6yCaR4tQPbUq5UaHpx65eGwDLCTWfQGuaK2XDNhpX5xX",
  "key21": "4GChn7WbeMnopgy8RVDbNM6fj7wTh2MQVEpdr1HU1CXuoipborwUG197VS2QG3WQ2kpyhfXWjmzRBoiGQeTRVwX5",
  "key22": "5eMpwfHz9pM64R5dRhBounFgzJZ4z4pgMcjVsffmVUu15vGCjRjSYRhn6S7T6Wpbvg56o6BtYi6ZdCYiGmLHYVtt",
  "key23": "U9NRuqc53nkfFxVdR8SPfRo6J8HvqLD4vKxoics3NqyJhLsqhfoSRFmLwQxhWJXJoJkWDHNmvza2VZJYJc8cuiz",
  "key24": "nSLBqFgBzuems22hgKC8tw3AurQN5ghr5aokhWbFACko6VeH88PqYe6LnzFAokEiGVJhzFBS6uWsViQVkFKpvmB",
  "key25": "3TvqpxMq1Wpder6z5LFdkWdnL7nG9u7HH8QxyUfa5gTjDjnvd9QzmTEY9M9fdXfiks8wJRhQWQdohevQA7E77cMc",
  "key26": "4Lpwq3shvcu31vPhpUUg396nL4KQ8LNvhm5DvESUrN2iagcUZ5QCWnaWNwWNySHRp7NX855b7Haq2QENUJf3BnjQ",
  "key27": "3RXKTjcbQUH5gQsebWT6fHC58XvaSWqrXFJqk5QzWjUEkb32XbKeBX4aGRTuuXfCFsWMQGrRpKDL3fy15voqnfeR",
  "key28": "J9u5xSxym812zndsQAPp347mLifjJd6NLwxRbk26Aje7L2KV4qGfmBNsmTe8UH962wKgDSMqCMunyXQBmEJUWY3",
  "key29": "5ynPdprx9oKkSvSeGbid2sE9VH83CJEwaWg4rbAZPagEjLB1jpf7GH5yvnkTbsUBh37NxhsdPGkRryTZAy6jh74D",
  "key30": "vfBcqpsvA94Gk3AMywA8uu2s7Sn7HMNEuLBPky4S7nscDNmCXH8GD7pT38uVCfqjBvnGoxfkEnAv9UspohwdxZr",
  "key31": "DmeUK2nHsvrq2qixsAQoMJsCTeSeUEcqT7sUjzQbBoPCoMWfoUnzStyd5raRCqX3UitobgXbM2qC9GnoVFXHo9z",
  "key32": "3WPQYLKuZLeUsuJCfY5TWmJgSxisGK9xKDhRfp1JFdNkGDLtQU3Kk5aQsJBSFg2EeCwyrpWnYMZDgAAmp19h4YU6",
  "key33": "Lvg5nY2J7JdzHCLuaef9h35USQZGev4q6r96p3B1TBHA6UTjovh2JXCoX1gBrywkdhAxMdsUySNbSRMr6yjVU17",
  "key34": "3US7PPgnyWDZWWc7NiKCeshces2qBQedAoTTPbqgXNxFCKUBbpARjHAF9gbDphRtsWEVRzooRqBAQX57PoMW8JQ7",
  "key35": "39TB2dt31hVS52AZ2DfX42GGFaPqZ3TvtWtYu79wi9m1osei8w6uNBxrTebfYPmTjyj4f9t9sngBkXbh79hZQksg",
  "key36": "44ULcNgutMr9dnwBuXA2Nmoch7otDiW6uZJr5sdq3fZ4xzTQqzUo6oGA8FgdeBrfHUNS2CEFpNVBfZLdWMv8CC8y",
  "key37": "EbWxmQSAhQwirtbEYhPADvnUY3hVscVdKczQK3VSEm7EX6Ehwip3q3v3HESCSRhM3LCEQF8h1XpbQ2nHGBaFCxG",
  "key38": "3D551S1xvbi6bJ8z3icTiYv2KjopiyWKBvmenNiBNnQuFHartC7icmf6Na4cSHFcos9YKQ2w462mcv69xcbBg8PE",
  "key39": "3PboQFeNoWUxpy6skQDvLyQUtvWSnZ3SgYWc3bCKoKFFwjqMXmjLLifw5pfc8PpdwkDkH9gnXcbUS6nnAhm9uQMv",
  "key40": "5Ah1sBGGNpZde5UMajcWqaDXJMpkTc5rJmynAf8zY4pAtdg43u41vKbhakyWpTBi215nudTXBj23keBY71PNMy9a",
  "key41": "3YT3NwmncVsvnyP6KuTkNvABrAsab8KAoMyxnRvfucnjK3RGFWJef5GVwAji6acKDkKf7g4x7cuysmyhqDVtfHF1",
  "key42": "5QTYQPTJoTxLdiWQmgGzwCYtQnnpqKi5sgAd9yfofxeuePMQ6CLFM7PRk8GMfJ2P6E2F2KCcwD8vbWL6yK5a4rrU",
  "key43": "5pv8b35eMDdcJKqgeZjB2GH7Y1ZLsELTjRPJFwjWx6sZJfvimnz7ApFZLjYeF7P2SkPWiZ1DD1HUkupKwDLSWLN7",
  "key44": "3ULf66RzXbmchpsc4MuxbyEFZpWRSRNwjzPE5MNLCfuKM9eYSUuYJbapiXZWgMNpWzv4i4QrNTdoW2Cikt4Yzhuq",
  "key45": "3MJQt27xy3jQ1aD6Lvkqw5eVTD12jNhsEsU12oUoMHGWEqTXK8BL3bsuqufsoGXPadxbX9GnXG4g1kafVkNawwjk",
  "key46": "5mr2sMKtk8jrUChLcBhYXB349dABnPQNj3YXcLvGUYjXRAHGds57QB9fWBQK8tXceQTLUzFun3Ak1wJNAgKbDsn4",
  "key47": "2LuNwvTkRT8kCtFSAqpuZqVU9iaKVEcuV41MxsYZ6huZre4HbqvfscrAkrJzkGovUpMiBfw5nqv4YWj4bysHaCAP",
  "key48": "QHPT1JC4QTNoownXxFsDNYz7htK3KzdrgwiJHv2N6eoS7Mrg8UV2r2bat8wKdmyhbSonsYQhRH3Kn6YehbrX93F",
  "key49": "446gX93NNaVCLSJJstUwQ6CCiUz5kFV9f7ZhFVsyn2fk2AAdWArYCUaLFHKkLsnxDKSLqrGKvocWyVVQCxUNkU5v"
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
