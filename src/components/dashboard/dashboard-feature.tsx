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
    "2cn8YbveiAPwwcp3URELssVPYgxTFpkdxpGp49YJgrQ1j6oyKc7fcaDzkA26EmqYum3dKbvQ6ZWaB4AKupxUk9bs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mMCH5HZztPurXtNFCp379wfgd7u1YeYXz3TMH2EvPwbSUjtSurc2uyXgThpd2F3snkVZ5X1xvU7UzT8S6enHiT2",
  "key1": "3rkRxVVaPS2XW1ibMZoKuJKqLDdMnrr3wMSCKVqp1HHQHDgpQfkpJ4qk7K2UNNXqmABMoqtzn387ptm7nMLa9zeg",
  "key2": "hd6YZE4AWLCjMPuQbESmPt6pDt4ZwX2HxjAr8RNP4MikB3fCY1Hje4VehxUW6YYYCpErkjbBQjY586zUaLtxwL6",
  "key3": "3h5L5CCdFZSUvn2dRcZzWrb3hEFMogAAq4nHrn7WWCx9UncHmzxvbtNzJHj83fiqqJrjmLUGu8YTxkzWLTRV79JY",
  "key4": "X72Mm4pyhu55o1DrBZ2V3e1SCA6GbPDHrJJEXoVVy1HquoQaPemcW5TGR5jDvr8pArZkgDZA2R7RPKCDERkuR37",
  "key5": "3xm6AQH9jpVYwQXjehQJUyzUmZaQ2oxqJeoqDN9a1R6txTZDjtsPaL2MZgcRAvhGKjeWggLkA7xogVrrNdzKnnvT",
  "key6": "3eFK2ZQSnptH8LJYeAAsW44G7h73J2mLZPxmAg33WrPpto9cqdKKoCEZ9SeWMUW7Cbvxg89w736tKSzhDDbKbFHP",
  "key7": "4B8RV2BkvWdVULGtxmZg9qckAYZ4vBFDS5S6kGjuhch5tvFr8D6tFpHpBhoVQ9wcwhFAfJsrFvZFbQ4zonWLvVbQ",
  "key8": "2Sv6Z2mVkYp1KaJzNnUHwBJA51ZrFmXkNfCi3S4mUhXr62VUo9HDKXwQUVaTZyMGWf6LQJhpfsGhSqtD6XRkMX8W",
  "key9": "5C3QLW24H6LtgoQthuBC5E2KNk7ADTy3ww8pS5yPYPG8JLN7FKxEx46wwyEPFzF5zq1NKAgt8DQ2v5eo56MTF9XX",
  "key10": "4UsubsFtPbjgef3FU5VPQwxsuvKC8LDP8gxBBxRW7MQoTPL3hPVF61V7Lm8TKjriLNCgCZiLrjTPEVsqp3N43HUe",
  "key11": "5oETpCn1ZWaoihrintEzmzzXjGtZtfXoD79CCcJTUTMUSRP9WVXGSViqJSET7fwhvehJmmm2iArhSzums8ucbsUB",
  "key12": "2E7QzWLeaTw7KTEQwqua44EeR3e8TXu6gi11VVcHQdfttsnrsm3MCtNbpUoChFZKAthhgoQWkBu9p96MSYAP3ybF",
  "key13": "3h8HfiM63vguappUSx1n9fWZ7dgFftt6aKLpmKBihJHJr46tXQxyMZ3s4RyGpvcMhSNnckBbEGEXSiyP54hG1E5z",
  "key14": "3iXzmpENCFBK9eK54Coykn6n5U1kJu8ADBh9jfmEvAo3qypLqrYyfnMtDzFUigjW5ho3rT126cVK86o5f9wLGh79",
  "key15": "5jgXQuGB5YSJwohaLFhBzt8cJotkygYjiBMjrDrSBENdu8Pm9KdhTvHxiZnEkfgekucudesEdhRx2ntaeM8k2S92",
  "key16": "2bxswLquSqftxUivYqzziTZAXCVtpQu9YdZhwc8hMF7iWCzg8fZ3DPfZz5TKiTNTh3Awh9kwjpsVbNHUqW4ip7Xb",
  "key17": "2KvX7NkaKP1dACagnfVRUAwgmLbGtLuQFXu9JKevWziusu6RabGGjDPmFBeXgJz5A2pNue5zMqLjDbR6mqRbpwW2",
  "key18": "3JBmdr5bn49jQW2LghsVSeCUbfC3169gu9p8UZ9HYAdoV3sLNbtmPc3cubn3tQiDcFeDwDosvViT3pM6ZiE5Urkn",
  "key19": "43h1sZovKZik6yMsA3AnfrRKHDQpkgcMp7JYshbBaGhAGqiM6goT7wrZdeoKYqmYJBKgHsEmM5qWGGTvosLNfKY3",
  "key20": "4C9cAvJgoN9hghJ9j8QdFBggbz45QNFSuV6ZywPxj1pob7FrBBXKmSbRYWsf3sYzoGWGoA3VgNDS6QdbqvicheLT",
  "key21": "39X3mnQXVbMQ7KxPuUZDYuKR4cQKf3beAsLu9MSmuc5xPanQuonrLSqXyc64wqqH58TbpEzgCiWHaCb6sdSj7iUW",
  "key22": "3fEHnR3P2q1VQZn8WfsmrqR6FgS1ztfeiv8YnW81NEtfnZpy2LtWn7YYmj3Q1G563fizUHJvBDFRMVbTPXcvZx9M",
  "key23": "3y5hCgDdeXRm6qmwEMvwYMGg5AURxhvRFuXaaJfKFikESF1vFpHRZoq1WMoVCwtdufvDi5uARccXuPd86eZ7UWFA",
  "key24": "5xBj5WFobHaut2vaANe5cZ7tee8UNmvMidxBWZz5fgygMJZXrkRuzkQCfA9SGTEpYikrVJx8ncNz7bMgsm1o9tfs",
  "key25": "4rUDPR8LXC4kecsjZ59NzX9maYxFTVvZymAzhYrfzi33qVNqkPA1a6e3pV274R4rT4Rc9yw1Chqzk7pdKzP9Cfrr",
  "key26": "5sZouGhXjqiM22ZFmRJvgJfHod9wZC5HVs1M3qktw5acHdV5k9AvevMGH88z2etH7SLG4w3srQxEK8LC5a3dC8Ca",
  "key27": "33nuFhQL4bsXHDjA4bkdFbFdtTYJRUnUQt5tLLACN1PdKGvu5rAjfKekfQtBtEk26GVGEXJMQRU9sz2QXsstRqdf",
  "key28": "mYnFPwuZr6RZgMBYB8KRLfp4EPmCXLBZpJRKNrLsqTGdNke5TFkJc2YpGEAYRgqeks86koZ6wBN4TgYEAW4g7k7",
  "key29": "xGSVpMr9P2PE6gsVrvn17U2SkArZEJKboyiHnAaz2tE3irKQU8ttuVL8fUYKcthFKH3UbA132Dhq9MUufh19HE5",
  "key30": "2rhwnraiM3mFTNNCJepSsiWimL8EH2SfKjxht43UJ665GxLPp8ajWHxZiv23uJYbr29AnL93q7sNPgpezRq7mdKf",
  "key31": "4B5poyWc7nBSJuHKWUncopcYUWuTZ58woQsKxP7wD79GWdT348TsHJBJNXnoD79cMwbi5XmLb57X7w93z8Gs738s",
  "key32": "cnJSYkto2aQbvLHCK16QvuKd9TiQzDHhGGtN83Km3idpn2BjmjCQxid6birvqzwFez5CNUMjTJfFjbMHEkfmdHB",
  "key33": "4ihSJ7woy8n8wL7p9xvSrhpMNwGYUMdCSqyth5cPYJx15h7txJU1oHpo7ZBEqNPcSutQWB7RomFsemsM4C4d7gV6",
  "key34": "JQbzhu6QgugNwAgJu3LZcBg9HHR5zEDK4zjAbNvzffx56nZouWiYVKXpmQ1Zagc7ohhPK34cpLfGgpFJpgntpK1",
  "key35": "3tPsuC4TjSBCRNnU3Tcyy1cdew4YZNQhUSEuShEpafn9kPyKF2264N9yKWrgppkJuQFfoFnoM3m4Y6ab48pXyHxh",
  "key36": "51DejX1v4yQSdHKV4sBwcArH8Linjy2aHSimarFCshD9FukZZ875CLs3vE9sYXqbac4HXNKBmwHEYddWmw7ZEELG",
  "key37": "2XDTMQdDYzVbkNVz9ZDvda3z43bZydVQiRZ9f3xtZ9GG2Vs9DFB9Gr3hHKAwRD2cy9Hba5zpQuEzq2t7W9h4Rvar",
  "key38": "2dNEj78Q1wGB5RvD9MagJdQ7U4pftnksdsjdx5JgXDPuKdyzhQy4C4rM4wRD7dL1GRxGWUemh87RKrCwyNW8cP3A",
  "key39": "3MBsQZJrsVvEFBbvUPaVEkG33mVqWadfzKdQqemnSWcMK1qnWdQtsMF6LTK6iUAFV8Y2whyTfis1TkbEs4aGKmMH",
  "key40": "2sMQiJ99TnLEbwDEp1yH5dcig3eZBAK5QkPFkD4wcrixNM1r9yKQCSsioSuV6wNm8V2JH8zggQbxFGKt5kjDffgB",
  "key41": "aEy6VGLrxtPztuGDWm2VaJTKRGR1P3gkgeXcgXfsV1Cz7Lf5H4sp3B8ua5RK8mGWBaqrznA3b57ZVeTCPt1rR5q",
  "key42": "tfxubVqp66v87Pi81R4svFE98rQmqFQac6DxVCwxiKKw2Mo1hmeEHrnJQqxz7TSNw1a3YMTyNJ8vrUkXYiPMha9",
  "key43": "5kc8DaUTfLv3mQsZzRagCjwJJpQHyXgGBonykAdnHP5dvrD8whkE3cMvfQFfgsG4bVnC8YfpAuGM7yJ5XQ3FzKvt",
  "key44": "38PCrJTey8DLEXVHjdhw9pwmjrZCP7mtP8Rff5gPsLm3veZhUXNyb5xXRraXya68hqPiedXLooMG2K6eRozNRxuG"
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
