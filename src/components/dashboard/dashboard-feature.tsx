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
    "2H4mN4aaMTzdq7mriTcNTKumfXHJ87ZMSR3jYq9VhS9jpintZmBPSzEuUVfVEyAaPD8AF8yvrMjzaBQHG3TSZgkq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23hFh7BGBKFqeEHtbydoVDP9N7mja1mdz2NKSEQ9Sja3ZeYPA3j5bK9bkgCBrNks8tjh322GTvjephixSL4y833f",
  "key1": "4Nmt7xdnFmYvNpEmZUZpA8pSNnxhX6dPfey9owg88QCLunMTfLc5PQdvcEur7ZqnNZwUvAQyaiyZhAe3Prp8GnuR",
  "key2": "5eciC735e9RDpHK2sX5T2N6QgySrs2CW23sPPm4aAYxEW3AvYqKTusesT86shnH59fxGaPS394PD48KRDVk6MPmW",
  "key3": "5mt2nQXtG9YW31UNTZdiuEFJuaoicqXfZKBRv2TLqzqHdRLauZVbRs765ZJJrqSR6b6JZtbpKoBrU1YuwA9nvtbY",
  "key4": "437upinsPJTNfryUZtnX5nqFP296WtHNVy7bPetVfzkJ2REHALvBXP44vSDKiW9xJNsMpcULnnKkiiEkyfBjPiZD",
  "key5": "5dDYjLe4iPApS5tXaDpVax1dfgMUmYPpgBZvjrkqUZm5PgUtVfAKsiJxecHMemVGbytE31sbtWekDAAJsqYWjKXN",
  "key6": "JYvPsaABLozv7ySPkBpD88Sx6wGHMyntzyQ2pxjmfQBAkNoHFPL6gdaFFPUkcEpdfuozDTQtGSHg5kNeYxYzcFY",
  "key7": "457ysuhY8cofqgXRyeGt9YF3bTEFWFZpq5yWUwbXSxdpdxeAQLj7juam6cDyWZq5iqmFqCp9fh4qXunNgAdLUvNj",
  "key8": "4JyeXnRYW93Vrp93pyjySC1gRFudBND3bdDCsrMiCqZsdiRWa38dU3mFh7iKWESyiS2StUfntMkRzq2vPza7d48n",
  "key9": "1ayYLdKzs5JsbeUYGb1zPWFwaYpsZ4dWEGNAD5LELYuPXfJzcVG8AzmwiGpokoht3d3wo2EXNVhQAfSrsPE4FER",
  "key10": "4s36iMBmowM5CkGwa5DJTvAeYKecXLyT5y5jo8jZbT6Hxns61G3RMQ2WMsGfSmRwwcAb6zzWBXLan1TM3fTHkHmU",
  "key11": "5vd1XstuH8a5CFXAjGBkjV6APULWPq8pb8q1dfnKiwnVW82Zjx19M3xetZfChcQm98ff9PkdBveSM5Kg9ML1wvCX",
  "key12": "59xD3MRsAzBSQ9YytBZQeEaqgJyisNpCx5GF8MqaPtBUehCQVDmzfEK3xLkhBLbVJKZjosum9wXcxfLbnCwQJeTT",
  "key13": "228TdNE1CLLtmA58dceZ1tbJNaCSYkbLwE79gPWQ7rwqsxJJAEC3n4VNQA93ono5BgYVnizPdTopfPaK7RQSHaJH",
  "key14": "2aSNyyRmDVb3Luc72k2JGiw5UWNfkwvJMqLW8sFay5rdoYgCPfuEgvYzcd7NBZYySngg9YfmUuYHgKfWapeSfaXj",
  "key15": "2sF9grjBJV3NhjRhDiGeWMJSRcfNGLg7XCVkdv7ok4n4YMfz9Ffy38UBP3nvBJ51kJyi5uCoDh28aqkZoCJoaZF",
  "key16": "5RV7BJfddvoPuXZ9XgWjsy9UCvUCmQbKppTXbEL2PJCMJtN892yF3T4o2BuQA52Jwhia3tAr5uUBYKWkVDsws5u",
  "key17": "5tdaXjxa5T69AuQk4UG6kgiUSWitYXFs4uSyVikQr5vws5csTe6PGy2sHg6JcSc3uz1LVou2f7wD7YSgwrY7XDiX",
  "key18": "3byYWZbjTkxBaw1RuX8A2C98wSiohsEnV56Di3AHDQL9d8suyCaHhvGsQLoiCPSQ7oDi7z6iF8KJzvKjsbtu2q78",
  "key19": "3aow1LECazxL7XrsFPFiwmAqSVdhKms6F8k7HDxempt5PDwD5p5TC1BdzRVbDiQkN2Q9NLfmMvbDTx1tupY2GR3A",
  "key20": "48s9PfVatrxBj2LBXc9v7rHmgCipiSsain8zracTdebUn2GPgJWV6NyTquoeUPTZthmL6pBDKh5wgPx4ntiRwCmq",
  "key21": "4vZ6zbMjwAoCSEknse9c6hbYwhUhxjz1TyFhk9MFXsbPkdwfDeqmoWmS6mstak4Y3UkpSyLDqVWR4YGpjEAtAA3Z",
  "key22": "4ipqhZBbbVDDWUWyzoSZMjUFgmVkvL7MnfKrDJPNmEUPm8qAKf1zaTPrbPZRXs1tzwPyqsMQQkWf8ZXcAF943o2",
  "key23": "5NuYxxgHjeWGA9pQhskMrrkE9HjvJsezSFyHGE7w6tDeLTBYc2wZ4mnLHcwya7BnACuWGdYSLqzAj36nHcmGykJb",
  "key24": "5zu6pcxz5w9opbS5h6XZcG1Lk5z5Ue4n9cRANuYY1Mk5F4UZhVAWCQPGYMuZQTgEwLCrSmjan1QzPkoMjgJwL4Yk",
  "key25": "5kLTZH4sf8dNYhPtvkQJimG8r4UbWDX6rMvTrpRao6GQD1XG3J32De7n3TUHtzrxha2ukuDr72Sp9c1psraTk1hm",
  "key26": "4rYEC86rTqLxaxSTzXEwRYAiMif77XdMkm3A7CHghoNtibkoXeyDK2YzWZAmSwqvUcCQAC5uUnbKojBQy2rAiMkr",
  "key27": "3ZY8iuoBxzi61qPwnqppHAN7oGTfLNurywLrzCGGoEoTHSv1BKVodzRESDiyc3drsHRz3tNVaAcj6FmaaQc5puGE",
  "key28": "jZovrQkBBeiGKaSan4QAkFqcn7YJwm44dQYEV4Khu86bsr8DJ6rWivebFVSFNm8NahygBmTzEnJ7XVjotMjj2HC",
  "key29": "22sjM8qBVMmjs46WshKv5ZkwYw5gcF8Qm9k1L7ZsAiXUXbzpoV6LGL5Q2PGaDCqNJT2PqCHZ2jiEhiYKe3K5h2xG",
  "key30": "4RKPGZD1hBdAwpzJioiMLaa3zcQboyTp6TPC8dygfTXeaNmwtg33LnpGQh5VFBpGL8URaN9UibixEjQ4Nu9nXySA",
  "key31": "hYTCQG1tf8zYfMYvELgk4Pibf2qzqidF8D2EAjuTNfpoFBN5mwbP8eEwvQfMsKKFhifC1rmNnsLrAgmKjKgyEzq",
  "key32": "akdWtHRbBRcFaH8opxpNjooJjxcDudDgXBEssf2z5MZXfhZvNhwHKAxqpDTud7thfJh1cT1p6Z8UY9RSS32DyPM",
  "key33": "3E6Zuo7yZHrYsWMtRHPWHFcfzEhjnGVVHBtnpqyPKf2Gc7DM9yZWek49HZc29Wt7KDcznnSM4LhUa2HeZApgqXuJ",
  "key34": "5tWivQjf1eZ9Wufp56nTEWS5hGho6ZHN6gY6mWv3TC9AzMnB3XHzxVk59KnAs6RYBHSBresCAVaRPjiUwSnsw2HA",
  "key35": "5wgs1RcC1UBMSS2tTNL8LUm17DyQDfDJJ2ewG6fa4B9YaDy8rrqCkP7HUrXNLD2wXXFxnjmEsN1W9C3JQZ35Dak9",
  "key36": "2fg4rTwNruWr6qH9e2stfbXCMBG7H4YZpPFiDwXYfoWH6xrPiDxfkuoKKsR69oHySXvxsmvkWcVf8fFBCfSYn2JC",
  "key37": "3EoxNh9iQK2sZqDVzAngeSmJPAn95whRMGtykPFEUDYU1zbgDrQVmGtLt5hQog9ux6znYS3wQrXshydLjXYC6rDo",
  "key38": "3ydCPtH3fZgbt5XL2yXfSndvLhxDpYaCDp4K4SpkHbeJZhCUXyhe4UPfqHxzyXT1p2JAjCKgsf9TSVhmoT3kdgAC",
  "key39": "5Yf5ubfZYG4YFeeLP81acPbXuA29LjjaNVaEWUq6TjsVU2xHNdsQPbhWWm7krztoZYkX9eBQeWM8hUNDLAbddQAo",
  "key40": "2ieT5itFaGWyu7tA6qx5yWdr45pfwESc2rvLm8PxW1pFwNFQHj53KDyq6ofC9CeF3MKw4jWAkrg1Z4SBngkF33Vx",
  "key41": "5uvLdkyVgcWoHxTE6QVnkyneVbKdZ5tjsGJAtWAdqTTkxsmCNbrKZfcCq896VqK8aPjnFb8yJ6H49o3tMwkQ1Tno",
  "key42": "59rPxyURMF6R3QdLXNVJde4KqcQrwu3mk69TWL17r1JAHLaB5qPLL3pbaWnZ1ApUYeWAfuMjbhFrqGkYP2Bo8mLo",
  "key43": "37Qcd3zpZHpNiEzDaE22nSJusXSagDUeVBrQJUTYB6iyXXqQpmzBD3NjrwConKo8LQ9nKCahPz3vrtwoMBzdNAw3",
  "key44": "3zvA3v5jG19y7NASLroe71dBcy7NqpwQnAyPvwvGixwZszb1bp7gSqu2Dm2fxvcUTPMpDTA7DBh8wPJPHYuoLjK3"
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
