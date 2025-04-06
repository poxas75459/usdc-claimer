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
    "2d343HfTv15JxWhTxELYmMYZcyon24x8jruf8JfyFzjGqURwBbdewWUDSxbggS6Ys6H68YXYvs2CycfXEfZgJzKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dwFbtaNttvPDqdvEQZnp78WVcbH8uWk4kLUyreXaFFf1DALcaZxrzXgLecVsMJLd55h1nsbgjmNwbBBPJNTnsbX",
  "key1": "NPRf7FsTryfjKAzbTTW5ustPhdx96tg24MzsQZshnUKDfrS7zyLBFxnr4JBMQdU5cbHwHYvLCuJEHdcWrp4ykzr",
  "key2": "5UP779wGK9hnjTYy7Aogm8oL4nwsyVbyCf1A1HbcEAtmswq7bTWjgooMsRmNwabw8QiidMir39PVCxp6ELRzaauq",
  "key3": "3mmu5kSU9GPxbHnwtTBT2STH849U8jLnCU9Tpx99V2CbpKjY42CDdVhaZ4nisP6HpbdHbiYpvqKrfvyiW48xWtcP",
  "key4": "4b8eFsSE8V4aM9uD35BNzNRQav3KfDiJJxYRcRyfgKJq3oGdavaVV8M44VUarqH1ykfe7wuS7XS9qV9kghNUnq38",
  "key5": "SEgn5DmkYwEEWAp6p9CCtRTkgry597wQGHWSZKP5GKU2UY7bNpWgh9nagwKLzroJb29tzsDqwQFavp61sjW9Zof",
  "key6": "3xLDkJv6jiyhACpSgvp7DWncA67Fitr2TedpMER6F9By26exZWugpFqN3nCGn4ME44gDjynCt3zaQFpXbpTjsHmo",
  "key7": "3jbuLabUmPtzVHphmwpdoyj51H2gfmxYBNNdcVBkT9iTSDLyBt4MusR1bDNGNiNEC6MtA45bnAHU7uf7inu9Ns82",
  "key8": "5s67QybpBK3VpYaCWPftJEvZ5o6VhLQUe5fan8uSJVbZw4HCZbdVxF3Ky5EWunoXHMZ5A1S5tHgvqvMGHqCcMqQk",
  "key9": "5xkE49xwpoqT7JjAghBaFcV6wEf38FT9NXKtVB5YsNMaQsF6K9ZE8wiU9pjturKA2371Kw73iu8n2gUrAiPTEPL5",
  "key10": "48JdkpWckpf6BgYdHpEQRM7GN2rKmgMVB5Zb5TpzUDnNuck7xrUYgwcRGcC1St8ZJSCrFnNc6TEKx2j49DG1SniH",
  "key11": "5SQqkjGZGAiyJQykAPnEMJgAN5BC4t8ZgGjHSqvZzvQeFBaF96xCez8jnoNsofSTRTAN9MQoWNzee5VB7qvZdQkj",
  "key12": "4hS8WjWbjHNykMFLoRF6KggbmYRH483rEs3UHj2z5vvjMUryEx4nP7Mh4hoFoLXcDXU96u3utvDeAFofdWVYYxBf",
  "key13": "6EcCMNj922uFGhhGsiTcrPVhokeRJaRZPuHZEnMr18jFS5aAiD1LBNeBFX2P3iQZfhUhFqsocec5q9anwckDzTr",
  "key14": "2UczVfwHBnAYnvncKEpsSsDx1Pn3EWjS9gW1RW8D2VpDaw1GTpsnW78gQGgxMfyBHgxQo1E4yCBaqak4r6mKkbvz",
  "key15": "5EDgv2TGsVjc2uvQm7mnQ7p1HFhejMkMeCd2vYPwtBwzBwxyRDBZWFjg53VwqtLFYd1z9aveTzkuSNFTk27G5JMM",
  "key16": "2rUXSJYWhtHjA8XmPca9EmJc8d48irMki2weU239tNd97EKZhtYvt1HSTeiyjXhWtQ2oTUTgNm5Y6Qmidy4buXkW",
  "key17": "2AHyuTZbioxPqWhipW6Xs3JoAiPDBH51vVXFW5jrKfMY4vvWxcebXZ3h7utHAP59KqxpnX77GFSzr99cf855QNvy",
  "key18": "4dhcAGDERqbyea2xoqfdGpihWByRKf41QdHX6eVwMpuKMF9GHF48CJQMqYw2wTeH81SLAAnqZoPXtnbaztDrDMyg",
  "key19": "48WRpY3eHEQdkeSKQAttVGeZmcQGDuVrmfngehEPqV8EVzSVBzpYxo65oMtr82vpp1bsYxfC2zi6SAPbvotqgDBz",
  "key20": "LSTKvsKSYdBXi1nSPWvjgWeK7SgbmwbdmnXETRUv2uS31bdaUeUpAceguVj2MkRSThH5J8vZtJPeDN4FJXi7RHR",
  "key21": "41eDSuf2ixyV4MxoiH7cMXc4Fb7DKKL3YPLF6FMY3bBPzzcdB3UrUmCyiaWGhhWNw5PKPmUBSJFMVooF76YKwaGc",
  "key22": "1rTU8EgGgw5MHHvVifyX19PVg2wkfQCLbxxp49d8S125SmzvEW1uAdKFmFCXhVbbi3VfjVHfb6DMt6NXQd1NL1S",
  "key23": "4SpHmvPiViXUd6DGyyZ1ZChHyCeVL9ufXhFZht7WmtRvzrwreNb9ujqX87Qr7gGkudDze8Cz9F83r2YC65GJW1ez",
  "key24": "26EGcLguYExmoWF2KUHcGswYH3KwjQiJjjrgkwezd6BTjfuhWWXB4nbDi7sdX6AhcQfrXhJRDkCW8dZf78EEQKZi",
  "key25": "4oUq78sHwbeLLAqT1WfmFXhnafp71YaB2S7xVcVtmypW3mNfRDACgZpU8MN7SiU2TiaK6b5fuuLJWAACqXuWZRLP",
  "key26": "p5zFVjhFxWbbaGYXEnpj2nBJUTvhDBNEbNAFwMvCw1hBMMGPWnBmb9reBzW4SAJVJ9nn2x8BzFuNM8hRuZKxapM",
  "key27": "5yADTC4re6t8e4ZYLMQbXyYesCsX6HWMTvsuzDfTb83NosF4REViQeYy7LUyHwBQTZioJSX6K3UHgbr96Ntdztdi",
  "key28": "35wue2vMuiv3pA1gXts98eB8mtQJS3ZQS3Kfp3o33JDk349SCCf8EAFrefBhmLbfBjMjLJdLZ5AN1uPvEbNUce5B",
  "key29": "3vcpV14YHbTnAi28JKgRsQrfBNM3jRPBB78qcRqoyjER1sVU6wAMsLw25mgB4duL5qNB3pBFgrcprHYu99M2puPG",
  "key30": "3VDFp4Kn6v73BJhpArBGiREGsNi6tHxZSnCUE5dfkJB25Pft67yrmv9UKXGXM4MiUaGojegXY8Wp6u2Qe2znVLqB",
  "key31": "4YKghWDh1Unvapc72fdfyQjnPfxHH46GcyGv6LwmoEh5npnA9uLJG8wyS2dfFb6mNsiEj3ggtUjAdiv9XDPpuvCt",
  "key32": "67Ynvdd76b1nicxqmmamcwDDEKUqHRVYuEsqypgvEy3E75Uvcmq2J2PEB4td2EC4bvwqBqXu6nMA3wpTQdMTCqAJ",
  "key33": "3YSHTgJ7Q5H6U5LXkHFNafgtr2xzA8YTBPZQiYFuq4PuDm7foh5XX3A3tvtr6gfA6LRA7B9pPGjHhbZ3f9bUfTH9",
  "key34": "4s3P958HLNKswHswPCPqdCstMq78YKQqSVKSmnu9YtQig9Hqyy346ZCzUyNXvW35Dgy7sae56H4rixtbUMoMXPyY",
  "key35": "58zGsfuHGqTWJkntbdaSZQVcsQz4H39JpD8NwmSt9WcQdkvCWEgmaUi8oaAkBgA78SnaXzHNP2Pv7zZh8j8biZeZ",
  "key36": "4oeykQgvmeqCTUbQFZsPRiuVWrfvtBoSDFrMffsXGUDnpRmquXdEPUYxKcgarsJcLBtnH2BLdBJVjnwqsTeQ4LCc",
  "key37": "49bYVdwtCTzTbVVWZ4FVyYbQx3Tg7k6p2BUE1DNthGYnamGi9tf6D91BDKTBT9mUi9uiVGoQfSSAdHp2sC2ZFQzq",
  "key38": "39gy3vZTqYHXhkhvJ5qYMNzuV7skxKe1QhoLetJyn6xYKtmrjvQTBh2HmrXPBD5m7QGt3B1ZACxVh1fnHmWTWUPb",
  "key39": "4vR9T7qv9W3TLAJqfdAotGrDxpe1xjFYGDwXXPDQM9KqnfV5ZVKeHJ223RoP5FAPMQZnFLiGh9qHpJ2C5KPkkabh",
  "key40": "riRBUci3dFtV2GgcE8zPfmVSs9iERXeyYgcukTv5JXbszZ57R2cTt39QNWTKRAcoqZRh5TU4H1ek1pMrreBbtG2",
  "key41": "4w5Ewn1Zx5dduuiPTQMkmNR5mT5yN9xxawZt8qgXg9QdFPCLzGDWJEfWsC4jWRcUFCDANXKku7qaZuUwdC3MWSQW",
  "key42": "2E5esCzNwZ9YoYDJwrNk2aBmdw7TJBdCyJA6iXWKiqDC7ud9GHXJzNwSduM9X9YrrDCgArqH1FZEQoGtSr7vXpRy",
  "key43": "2URWyjsQwnS6eitEnGBHAQaH8c16zPvBo69TsQp86Sp6U4FCV97Fdagut93dTqvLoHCTRrSKefD7xd7ACzmQBPms",
  "key44": "3WDvKHkqjBTatcugKyJYAVz7SPTUoRAfcWLm37EBcg72PdCZqaP5kBuVX587xZDkouyr9oQjLEwPZre5wU7Vjy5s",
  "key45": "5pTkkhKYQ2vTs37zxDCcqCwFiU4Z1F65YCyLWHpi1m1Rhpy8x5mBTrHekQHjj8uNvZVspjtLnrKLo1RifbxkJfEd",
  "key46": "4vVxR3TUohXV8zkdXXvLQo5YUt4uaX9iuDSpwJnnDhuHXsYuQqzckxdWEVnPJJEwKwYb64GSotACFt4pJrsc5wPx",
  "key47": "4Mw4BiBP6LbEmUFMZ6Uhn7XEqe1feSYgoPxTstLx5CSDc48wfDjm8duA4ptHWmvE13sjmPAi8qyhr7DLW64d4jLJ"
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
