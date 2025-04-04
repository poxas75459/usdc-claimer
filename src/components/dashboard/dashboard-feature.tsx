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
    "5B8tbZ6mueMDFrGTt3quhNUzszKMzXiViNUyiQaB5pBfg7cUKwxuvarZSZs285rXA2b23KuSdXFjnbZSUPbMBCAf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WWyaMizpQ3JYjMts9qnB7f5NuP3e5khsFEmdpFRFNyGBe1QDYp6VaAtmLQtx8Bg2zZwSFEjj1bbRJ9SvPrTMK8D",
  "key1": "5n99MXRYySVnQvrspH6aEpzdymbTQV1eTPFLfaUThCNwBR26YysgkiCYuGsbqc8MJFFTznoviCUujaH4iXa6hwz3",
  "key2": "4ZXgH6atJavfvDwJioYMQX8arJaxHkegM1s8LySh7FF2hhMqc2gXgtgwRv8uitTm7BDgiCwkACsHuBHotuQAjHDf",
  "key3": "3PT343E1fYG8fmkD5DGnps9bqffCLUyHhYgJhffyM5MP4EYuQLYJ8TeZ2umbU5qa138XCZLsaEdHBLQAKDNxYsr2",
  "key4": "4aqWpawswxsyp3YATQThmwDpqc6mkM2QzJYNiucnp49HvTRG7sEaZZ875G2ok4qCtrErNMir6EV9e6gGCGXKmt8y",
  "key5": "3nsoSh8u6gfWTLbER9XpsFmhb5oFxKCZ3ivT3zFcdg2QKRXtx6CsnjGYYE8b9yeTTD22C8WQKUjBJTBsg34u6Uhh",
  "key6": "4cuVJqyNy4YrVfLNzrKjzPwF6QdxMxDyaCev2SEYmhtCPRj3ncuugutSBSoPsNT4pr53rUSG98DDrz9bjK88uQgF",
  "key7": "3TAMXWTREFyGXX1oMQWUyLF8P5ftttQ8qDLTeZbb4LbwTCkMhYNMToE4kGn33tNc4KEFXVEP7JAbf2rifXmWPSfV",
  "key8": "2Hsmmu2GHfPiNFY7SooofK4Kx9TDdLj2zFWKLWpN4NbAhs6BeVhog56JcmNskBkAFirks1VDAJQSNnAHkFisiuci",
  "key9": "2Y3B2GoHiHXMD1JGxe58LA4ohZuWZxiUNDbMH7bjbmDkGncaQrNpJJpJhA2vXhLzSqCacKEr9qVKsKUpLFnswyNZ",
  "key10": "5LcDW9m3q6TzUMm4vWDhckapCvhWqQvKuvFGiw2DMS4od3g1RJ38YrTsD1F5xUS585BPnTsj4157iPyUYV4cu5c6",
  "key11": "5Ev2Q879eVvhrfS5D1NyYZUNDEFAU8Nn8czxX6idzedRvK3QtzD7vmPGu2MBwnrsgkueuXCnR1tfk7piQwhKP7ZE",
  "key12": "jJARcb1JmMvpRpRtmn3DLnnht74biZqagXrSJU1mXkcxaoLnvD4o8Ece8HCUcqS7poSHtEypWwtGf3WmKFDaUBs",
  "key13": "3JzJNgp7FQYn3Bnj39SfCB6ARHqtSdnE8UggE5LDHnKKKd3ASg7DVMZh38PdVnFXewzf8hfKJG43vZavTwsvnVTr",
  "key14": "2a3AKqN4uT6NpoPXsUVLyo3J3sKrYqQxmLti9C9EPg8J5KQusFb2PJsyWdRRERCxMQN7DjLcr2udQJ2HhRao1Ds7",
  "key15": "5oDKfuzn792x9ja9T4Uq1G3oNsC33M17Vy3N448D4JX4GaXnSg8oHE3GiNTi9VJ7P1NdzNgr6qZPsfb1Xt7Q3hXS",
  "key16": "2bU3u99rDrxqhKqW7co9xpS9PjraMYR8FrQYNcttcWbXZhVJX2grRBpXDKcogVkm9xSK2agJpmMcAHF8K5L29CE6",
  "key17": "56BMQk91YcJvDJyuELka9v9ZQN2vPUnajYc2PBfsh4abjmZ8Yzduq3PHf2sHTQjgqhMcWvrUK5zLEuDkjKz5QJGz",
  "key18": "5rLkKaNXDJNB1CndaWq6959yYnfBGYWFyBza5r63BzwwB31SnjntKekRgsPunrwKG8dVx9MC8F1zq58tVjcf531K",
  "key19": "bxbzPiSNUG7Hrb2GnoVUES75ciSQqykLFLtvKr2JYVtvs2vwkm57PcoFri9oEZEpByoDJxaKTEdebT92uJKafkg",
  "key20": "37vTeD9huCiP9PVzzkrSEHigJq2rPCkJCQj9FaiQ7BmVMfi6etN5Zdby67XwF4D5UddDewTqcxR6hUedoerWV3DJ",
  "key21": "4J7cBNiaWqch7m4tYzMCpsLPDUJRbH8ZDeNK2bB91tEj6gPnAeq952BpPKb2skVNx84QYDP8bkfbRdirf8YszEXq",
  "key22": "eQ1KqZ2vd1XUoNcQKpAtmPt82jn33J9Y58DVygL16MGt3JSBEVNiJA81SyKSMwT7rsCv3Lb326e7N4bTUyMu8Xm",
  "key23": "3PeRcGYnLaxRQTcbFqmiPdQEsnS95cHqWJKCUUC7SNhNxN8i7ZzzGNYL7F42ZHfFaRzLX85vqDfb52eQckF9kiR8",
  "key24": "3g5BoyqJqw6ezU46Qz7exdsvSfkfaG5XBn9SsdrNT84TJnwDV7Ms1jd7bEniHyhq6A2JxDv83GDTmjuDUFii6xCV",
  "key25": "488KDxVeiRMXvuXo8wMC3XRhBTELXCdLTDhLZhuSTePaXbYk6FbjJeyc19wzoSMTiSf6B1kYpXfan5kHZUPUY9Vd",
  "key26": "2taScQ3YbiKtzMGTNz3t4GUUTDDV3n8skvfisfVpeCAcCKXjcc3t2Amvqw9jwx7k35Xikz4yo3ECix9jDEXKUaqY",
  "key27": "5dtP3Mz4Y9XTHdM9UmRNXywWJ5ZMourPXjee19Pb6xA4kGDLfeohnMYisiXV6r81kHUA8hKEMeJR1byrFFFDXjyw",
  "key28": "4mkuqRgH5brQCMz96cWckepNggnwye2jE9NU2RgeAmSvinxYuu3YB6Kmt7PLptmKRy5mycVjX1xshLPNAQaypZj4",
  "key29": "3YyckpoFj8pJSSah3BSJG7x6avGqbSjbAeTGJSQkYzL2twRcqFpHVazZXxmUZcquoESwrPCj7cQzfggNYgHWyrAZ",
  "key30": "2wfUxk9fDRGwnm6m6rvcCoCCDQtAtoM5JRCSqegequv12meZhQZJnqahPdJkKBLRyumaS6NbTaF68SKtLQn4HXra",
  "key31": "3DxWcWJbaypAfWKYtrTmMcJ6QmzPfn4NegTbGhehyNQ1TXxot42aTZk3rJ4MPj1cw5GamChdg66eiAKoDhdfzasy",
  "key32": "4Ci2yepvr6eSjM5ZL6rrvcxCrUe5LhnXdwuAkXkg87Sb1JnXjTpDRzPWWDV1sQwR7iJ9PEcjQ8LwgG45VsRXfVER",
  "key33": "5vF2F7AKJpGTspZA93tBEknwgtnhpbFap7A6qDg5csSMLgRFE9nJNQ67hg6DQARgk2aBZ9MaEbbT8zk3bqUGZRfJ",
  "key34": "2AUXiQqhNTiNLdH6SwqZXT6LgBTaEygE6M3LwY1EPA6jXjVsxWugtZYXWdfdE2cUhosyZg9GVv4uGkeSs9zrkXFQ",
  "key35": "44grMTdyRkHcCyKKhF9HspMfGtU3VbedgVvHvdJHiz6UUJ76WyFXoDvnxn7FVFsaH1xyKi89tpAdKArrpUQ3VQ9p",
  "key36": "5gB1TCQpoXtkcnEddACs9ohvfvg76cd3oJ6KP1qcDMY5CWD7Eg6sDdba5XWouzNwWisQ3Eei5vfr14QuCxUE6FxJ",
  "key37": "4XDdPB7BzFCUE7oqmX4hpm1qwC1wafp37Yj2TZYY9BNnFNQQXxMLqfRdahgVeKEhU4GYFnZHKLYoLpuPpPevmsdd",
  "key38": "uEnNYNWDSN72MctK4cX2KfGujBgWD6SMM1gBnK8nLJVQQNBWzb4qVdednWWeaAa4oQMN9mPS4FatU7zyfSndxpb",
  "key39": "5QvPqVmEbvtB9BcCeGx8qcsywMddHV72ynrCPq1BWRp6eQebcgxfLRcqf1E1t82FvJqyV34Fyk81YVRmVfNm9Qde",
  "key40": "3atRxMZMiZGKNWrc8DWboEhuAAYaXywLCXgkbDCdDbBWMxJHon4bkNcU9JLRtFEWEZruLUMhDhy6d6FjRwrSyd5u",
  "key41": "eqYLeDHtLpaHuPy4ZE3iZSYM8UcdSiPS1figizytnKNkBtmNm7zBVKYU3Rf7AJXBU8dc2mF86gKwzvX5rnKAytq",
  "key42": "5d69JuFoLSLHMba6sT86X9EQMFLSFaekwgJ8rXUSNoAM3WzWYZXexTnPVJqBR8ibMHsvSeJbtiMjLdNLM3Lo8XkQ",
  "key43": "64nALWESKvKjwb3zbVZ3ekzSNsfwmtn7jbyVhcCogNS5kyMnTbY6p3KzZRZnrYbAvc89bL6uwgMBimumXch7hX9V",
  "key44": "31sRpgAcoHHZhikXvEs5wpYbK4tFNt6mcXiBDVwV4GtSvxkesCbmAagavxovJ5jMJCByxhS4MwBMeh2vCkU8DnZR",
  "key45": "3eNWuccqzmQcfPRwdj3trnAQVGNmxceJPYfRKKnGeZ6Lrn1ktxVvz9qTrTkrdjfBA9GAV8ojDpn4gtgXjHsz4Rne",
  "key46": "5cyUkBv7hb4dCUCHp8hLzWZ5M6NG2uhnZdNf5KnmPdAzEDNFk52fianGszwiL7K8ysFg7zVpXUs4b91np62VyHhG",
  "key47": "3Kk5epoi27xnPc9FPrtH6EHsphEsuySYZKsTaYStZpxPCGiVUQZnWuRVaY7eyyBjzUZNL2556Lh76qwLpUqMYNcp",
  "key48": "2umnDq66tRmYLN31okDJQ25zPwbnnD8FQWoYV25cu9wNoqSdYpSwKFbtuAwGJiL3MHQ3xZmUhVaaZcH8ANWxj77f",
  "key49": "2cqBseVAryWnr2akxgTTzQVKGhYKMKjnHaTFxwUNfCyhTJkFNLTEQdYqXJfpoEKcxAQJXuZk4EMKxbRaMDEdvsiw"
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
