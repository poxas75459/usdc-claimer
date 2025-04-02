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
    "5cPNf5dU1W6F6nsEWhUKBwZsqZtYvLX11h1RZyk9ZNhfFcxWTbfbYuswJwSi6PrCcwvpeRAbhftECVEqH43rfRSQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z4pzBNo9VcpVfJamfnJuPWjNkHqavkGuabw8xg82Ta8AaFubXZAdT7L8CP6z8vKsLsjU633uTzzTt1N8UeiQgAA",
  "key1": "ucoqXNcmjw1QqmJ1isw7J9Zwt4hAvtbjjx3bPTgM3TTRKDA2JRJEVNM42X1ZYRtqq8qawJcqWvqFQH7cDwWBYL6",
  "key2": "3XwvT1aGD895PtQC4ExR9fQ5o5T2oCg1Z1TXXzcR5BKtu3Q1ZA9B7WcPxfRD8j65vAeXs8TBNdU6SApm6VQUYTAc",
  "key3": "366LnaGA7qX1wXEfRfPGnXwK2nGhxkycTptPPkPB49bCt2XebdmNcWXvDHsZh65hiKDvBe8kwVpj5cEHMYq7Njtg",
  "key4": "66zZ68sZMsnCqi75wM4YAgnNzqMvek8FphAzx9DP31yf5dZDpWP9vG3FmFeSaqUAPJAUbWVFe35bkFKhgZsi6R4t",
  "key5": "5KguRaPxfC4BNkrwf2M5n3mvNAcmzZFyGECpP61SCqKFo1hXieY5DmHfZAh2xDB9eyc4afSbWHhWMEM9n9nNUzcy",
  "key6": "4GvKWsqiCMBACKs446fDVmUHmoSPrNcAkAfn3ZoLy2cXLThztGvLcgsdZbiRwAZShkiF45BgYCHZ5FDYWAeq7b1s",
  "key7": "2xu3ybBNtvTnSf1rLnRR8fJxU1FqAFykQzEcbUgscVgGekQBRCghyGghk1HP4QT5ezyS346w9ijJvR6xVACaoGEi",
  "key8": "7EYU9Xrg5oYH1gEh86i9gPMqpxXQFUJCkVGfh5rjD2Eo7MetUrUdEC6tTFLeYCDZgMcqzuKoBTyYcY7NRrhjQ2F",
  "key9": "2rTMkKjBw96A6EaZroZ3J28sv6Ley1yLuZq3JbjRzUNKJeM85HaDuLMSHrujmTTWK3LPDqQiYaC7WD6G2tmX3YTW",
  "key10": "CcyHGMfWM8wuMmpcRYVcSUJAXPqC9ARJUfRj8J7RX9kRHxbTw42sHDrezo4qvGfuVSvcPYXMSyfwHUKyzhrcV8d",
  "key11": "aqsnCjrDtJg5jc5bMgFY2W2q4dwthxos5mHPaCAogNdUEjf4gK76heRNiCguqWZJgFmFAyk8iMWj17z7ckusW3p",
  "key12": "5YCJU3yAhjNB85ZNKjWrp8mws1ofYUrKbBJE5G1rc7UQcN8zGC2mvhCac83Rnc4Sw1hM2TsDwADjrdFpZyxcWRWi",
  "key13": "4nHSG3pzzSqC2X8HYtsi472d4V5m6t9UkirmwvQQiKkFuN1mFxwaEWoYyhj6Q1etFX6Z7TjYmS6vvUs84Q8MYfXZ",
  "key14": "9CyaFwrSuq3BDfhvzyUAf2tQjQXNPdLj291JWn2Td2sD2Xqo5SV2v4pGeL1jnZgbMyUwtgiyXcEvbUdPetWsjV4",
  "key15": "3NmTuM2mNizV7LeHf5rWo2UwMoy6zrEKdcicsffJPD3X3SQhhGLoZnrkQovZzo3haHD5qGCyPMbJixCCAzq39LnY",
  "key16": "3vUFma47LM7JwA8WGecApBwknW7dVe8Zcrgha7w4GtKyTJdyYP3K6TK5oLD3AW4fT4BvRFTdGMzXbb4WLymhYjVf",
  "key17": "5ySy4c9qgLV1wriNDTuU6nRcGh6CwNmAcUDjTxpQn93ok7TaBmnXA2GQAqncFTj7BHyPxcC9fh1rDeobZfZMq7iu",
  "key18": "61xVZoeBh8rupYKjvM1HHqHBmgbVq1eXpMD1xR8NMNXYEw5fvwzR6jj6Qb8ndaYXvxc8LP7ofrqjQg6P6Hqnj1i7",
  "key19": "5LukoMBxQGyuiFQw728Et1M9KNCpiFFRCmzijktLF13XQdLhFChM7wdLq6fF7DH4tDs1DFBJB84iHaUJWKtExbTz",
  "key20": "5vnRk3wtwydP4HYFd7qPfFDDqpDzCgFgLMettwqpvSHuJs6L6PYXerXGMFX5MsY2WvTqWiFhJvsnyakN67nhvxwr",
  "key21": "oe8DEvzo3F9FX9Sus9CJCQ8daVmSfzk2gYAmU8sRSx3o5b8J92ZoRn54rXWWNKamGCZmJrfBc4sgosPFH2jxu97",
  "key22": "6xrcRMurqhLqEmxvDaRALKj84nYXJEbUwA7UPS4GRzbpoph8Bax65oiMXM8M5haCQFR6a587yGHUvXeLQUGVWj7",
  "key23": "5QXvs4Zs8V13Kx3mUVH1oDQgLugkzvV37k3Jsf7sWdJCaDhHXpmkmfmc58aAtAfbrW2N5C4XeMaBCpZyoXLeFBRn",
  "key24": "42jwF9dL7dsfNfbFX2si4cD13YiJEj6Gc9fj13whfbzeEPqRsWaszDPSJeQBUTF3HCBVm2XieGd5KfcgPMg8XQfn",
  "key25": "458T6CF9RjaAH7PNZK4xpwoECwMLBrgTUeg47xNuxm7UyoDrMjcsdTzNeJyB6is9Zr5qGyVvwpfNZG9umbLdjhuz",
  "key26": "4yhXbeFx2EdfF4qJwAuGktGgWGdvmyk47Vb33Zenuzihy3xJ2s9cyKngYDN7K9CfMd4zkA5hk6HRTYienRb7mCv8",
  "key27": "Uc3mvv3gTgj7XzXcmvtcxZytE72AxBDKmDos27hTizJ7XWuAWvQ2h4LFRhoH1E8yNkwRE3C5KZMwchoZZaCqpjd",
  "key28": "5dDm5SRKceUyQb9TADjqCVgzJXembWomf9rRoy6o9yk9XTJu2TMb2knJaCsmgELJV59TU6mfp6CNdrz5rCYtcBkA",
  "key29": "YZjmdVtvZ4fKzWVQUsGgCS2iZ3TZGp72b6uxqiLwzvf2oL7ckykeaXC19wE5BPfwChyUAoKUDrBPCy1ZSvWj8g2",
  "key30": "479vFi2tCDe2YSrCTCRn8kHJfdMGdzgjWd8wYPCFiBE23T3KurYatxi2iqmJMn1S6cj6GdfjtZuejvVBn7JuPdro",
  "key31": "5jyeB6WH2r5UwzbYFKbxVE73oShkKkM5Jy4wWsF5vyyEoUKNBiNDDXHv1kaV3UT7t7aaRqruimsor5QYSMGC1QJ1",
  "key32": "3D4EV7ZDQwUmj2Neaz9RVoKUTh4N4b8NdCs9gEXL9ui5sFJb6KcXQ5y4fUJrkjtHypoAPKZ6GCn3WnbbrR2UcdZ4",
  "key33": "2cHwNhD7AFCYKwXZDQztFqoz1L2eKfUDkUxvz9Ay8KpYhmJLvBTeLYqPo5zsbuRCZgfwgRS4QGBxGbqe54Wq8cU8",
  "key34": "3DdrVjux72mcWPaGDL7R32N6oPb2yt65885mDDbFk8AzDPL6jDGGgrCPDJM8G7gzDZSwBguMtMV7Z2YtCmcNNMey",
  "key35": "39BDHSj7KiQfqb4bd1xeofeNCu4FxyiP1EocXG2yXADKD6xghujDKfgNF6RLY6wJf9HLQXy8gKDGRSEYFRyBVyXW",
  "key36": "mVyxrttvRe5mUuaSMfBXLpVDF1hRkbBwvqm1ckm9Xy5c3DtLnmhqWmvQxACTcBfGTM8bgHMYDhG9cBBdvQF8gu5",
  "key37": "5NYNUsGH6H6nDcq1ALGnmuvRYST5CYs5XVV8pvkj2cpeVbybPGCbGqXU6CEPWJCXAYnnmeWWJ6aVgu3nzoFdemoJ",
  "key38": "5mxMedoCfnPhgbxm3Z5WtAamNkDkGxsiBmmTuCmdbXLsKpvRgAKHdocE3ajCkk7q6fpayNXfrisidpw8EdX7DLAM",
  "key39": "5MUNPaaz5J2MMiTYeYMD3gh2MqX5uQKBgUniTJfdBawE4EqFVE66g4iEf2ucB3UALw2p9n8EKTvGTfULrdF8fx3j",
  "key40": "mJjTJaZ2tYuBGkQQxQdP6mjUp7ef8iJydcSnkNiGqUipccgSnqknJT6EcErZJLTngWMkrzj9BcDNohfWNdQLwBG",
  "key41": "5bmXTXVV4sU3w8AVRyDVja8JP2cqkgBCG3NRx68CkFCvJUmt3fLX63LsCgWroeLujtEhTMCzKW4TUBGW4xqM2TRi"
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
