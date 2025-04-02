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
    "4vfGhdcT3cAnCASwDZW2gmvQqNth8iq2shxFbFJEyiPLJksaHTzHjFVHZk15UQzV45FDYawZ6j6kuxFLQSC9fQ1t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sVYu3drWsn6VP2PJcJ5XgKooiDtn5nrcBeuSKUJjEgm24idkW9dFTFov2p2LcPk9rau9oWvPPL5EPaFdwrXTnwq",
  "key1": "3WEbZAtqwzSkeSE52F895zSAtgHjqaLW9y5JAYfFi4ZCPv7wGzDbZW34pohdaESVDLZi3GVcVJJ6B8Bb6oCBdUfP",
  "key2": "8q3eudswaxi9Z3zGGx6EYk8PtPNLVTpuDskLibWRiS6kkCujNeMa3R1ZvomwzBArKrREx9JQbiLyu54JN5vn9eF",
  "key3": "3GG3mP5YHW1U86v1QLo1SgQ5sYDrKhdwokXfVd6NaBXMcqRzXcyPAE62qGtaiWtMAtf8MWd2M1iM6judqgpdBRso",
  "key4": "5qSwx6UrtPDrpC81P7uVkn8ueT2hNu6ixurxHjTNqsEkp8uqkRbAAPCY5dqprw5mV1TMcVkqCjZJqR8j8SYPBQd5",
  "key5": "LGPMM5GddzCxXmL6CNrEeXAjwibgDra4GSsDugFEt64DUZH36BHp1X4vYyrjDpPLWpvXyZ3kKyg7F9dD1wKGruB",
  "key6": "9VmVU6Cc9wsJkJTH1k2KwGic27wPNF6jGj9LsK7J7JWHtMWVDcAU6xrr9QBD2xFDeQy3BExUNf6iWf8vXmQbgNK",
  "key7": "CQFXkr71wV4DCmA53ro9aHBmTMxu8rnKqazUXuQaxto265JrheKapyrpaWhsFZohyCkbVfKYVAZdX7owujr2LA2",
  "key8": "2mzzKHevoqGdgQjWsRbWQDkQsXSunVs41RRcFVJ6FRt32eWzpfhBhQqnEdPRmEpzxgSDJn3HdiXVwnRW6EGLk2WR",
  "key9": "jpucsrvxgTQHh2LpesYFc3ot9gvoAajtfiHbHst1DdBJTR3iMoHJtjKpKdHusEhns1B8xWXJdBwJqVpq3RKCMfw",
  "key10": "2mfVq5KsYgHERrRxoBMtGtsYrjRvKZLSQkQEHzaLmCzbqaEPxSZjx8QmLbpAU99juCExtM92L8v4BjdMdKbDNFqG",
  "key11": "2R3xhEXiLMWo2yXc4dhg8AFUyfNhvyb1DdSjsXrmh3czN8MdGdW4WXA9cpE3xyRWgMVk9YgLiqrwa3EiCvPN6kbP",
  "key12": "3LgdCXXjsRKt6jeTG8bbsDp7Z61zS5YFJY38cAn24gV6vXqcBbmPNUsw345Kk6pQkSibyF1RRnhmEn7nNxsZ7dGU",
  "key13": "3bBoRtBvFivCVPcdDVmpMnjAKfFKtM4qgfvT2WChihCSVjU7fkD8aCjKoCbw81cUSQpiYQGtB9gXsc1PAHHpaJhr",
  "key14": "2jmHRHSx3YLhryWt45jF1Y2K8qYTXQA37gtRJmhuHzzwP1kPSVo9mWjaC98kYvPRsnWwiUuUqWDy5dhyYGGHwd2U",
  "key15": "3hsC7D9BXXCbUWvS47AMjXTihp71TSsy3HswdUmX6vTYrHs9n14JqNxTmwdgFzHqiEivYVgXnvs8mXgNiGvQ7MhD",
  "key16": "3BBAxZRwBCyGG44Qyt1ThF5b5Fwbb4kY6boefwVNC74ppS5b2FQwGsHyz1gVNZf8p68aK53pYqgVTM2Hoouzyuok",
  "key17": "5jmHBDNP2YPb49KnHxXpiBkJE8QFW9JzPy4risAEKi4RPYttjVj2Jd9JtesxKxJM871gmbcoD4rMmjxUZBDyN8yC",
  "key18": "48hGMXhxZ1iThvhkT2RZqF6QXhKaGPync6QzbRYQDsbP1dHaHM7ZVJq8YzeTP3Zo95Epq5LH8dY4gE74EoX5eiFL",
  "key19": "2sBUa6r5zonztg7sA5aMNn1nYWp2LNyQxELpV4fnrNeqDY8TeEmLrzJgXUWaAzehGtGV1b5fUPRhXhvujJC1Av4B",
  "key20": "4UGoYRC9c2HhLTQ7cxzt6xdNjB4jhcrFA9e7C1vnYzP7Fnu4TetCzwVEoFKDamSqzKr9zsaqBhzQwzb3yuEqv5PR",
  "key21": "3ZGBCkSU5AwxobvFA8dq9WpFsfcvsp6oGTnSW6PvsX8vsQhtpsdokXhYejvBw25ojnsyVyeh5upCG4zAGPrLG4js",
  "key22": "3BiYd5HDW5CuxVjCB2uqE8ycdeUXiyZVseVZL81cFuq95d9bHEBT7PQeeySCvHzJddbsxSSYxfJZ43s5nnWrqHJu",
  "key23": "347McJM9iG9yiQF6cWVyCQHn6fzsPW3V7XbcwxpxZ4DYbbcP5BhfzNWJMTmMuUC7Xh6BsTy4Vz4GruSAeg9usfUr",
  "key24": "34UwXbggJxwyuAeAPmxRKL1592isTC2SvoNnpjfA966J9TnCuCDdRJvEmfy5EpmnZ8dZULuMT4sUyjZLvZy3UxmP",
  "key25": "4Pk2Yc7XRgFE2MfEmbvC1oRtyiZpkoV1ukW4VoYdGgabcYsRzawKhzS55ynBL1RcnKmpTUFLUKkD8DasfjPWD5t1",
  "key26": "qs8srJs6jhdJeexpp8MMPNbMA19pcqtmhWZYwGL9NFNAZEpwF2Zxw23mr1vkk7DS3YKNnbgqCwhJX8SCrDrx1Nk",
  "key27": "368v81TPyZedx8aFfGfdiRdi44RpCxdwmKAQsWGqHTW13pNrjzKxUa1xcmaAmYFm2tBCqfESG38tzf4WE8ohPsH9",
  "key28": "38CukszE8NY3vhPsZGGh7TBQLtas5H5ak5dKNc1pj29aqV4fksAQvEr6rifb8Zz897BmxwZjwK1q2MyDMCvVrGao",
  "key29": "5kTUbcHYVAoknoK5pyrBk8njcnXjuXXurKECQEUuWiaMFFbmdxppgEp39r8KbBSdn3xNjavhFmtV2W1Zg93iyjLu",
  "key30": "eEa1cwny1gxxiri1xhBCEGXdxZH5Rr8yTQz1MXrixeTgGJN9abSDVUJLtEZMwhKPYAccpqx9toaRfa9TTmfp4CC",
  "key31": "2HLJXz5dTgNszVKds5jAShsLS1YWSPk2HZxVvkZgbmqujXfucx3yETrSa9UGxjHyWLotRQ87qv55qe2Zejw5uVJN",
  "key32": "2b2SsGxByWKMoS7WFv26pgcwsChAviQH2kJTPRogLsLtPSns6qHTXw6pepS5bA32tf7msy2rjwwqdHTDScwphBEX",
  "key33": "4JPjh1KPE2SwixpDo9W77P1KFbQqbk8nHocFL7X9isY6KyAQz5SLerjFmMCYx5eFnnKACsNLRGTF2U3sZrURxR3Q",
  "key34": "2t2zFieyQ342EY3Mzg2xujtwfshCehNNZig5CnPmNMaketT5BSb5Vhc2fiZpBWC7f7Af1KoDnBxNaXxSriKX3TNF",
  "key35": "296WLFdn7Gh8b6ajDXttTLVkRoJmhP8wDB9jbJiEcXZd3Uu3LiUdzbJMtZSvYJdZEq6ZJAjWnLqRT9cFccc3EXrB",
  "key36": "5hw6w8Cqt8Dg4cLX9A88U2faCvA428gu2sJ6JpiAHtRsG59jSxhGrRk9C6PCNsusfukCwXUtY5ek6zC1FVvmy75",
  "key37": "3UdpaRzR5SMi5kuNsYBxt7eJxEepSXxzs9xTRJDrPCrH8gqbcJuM4HS8sGDjGLVdUVx5vZUeEtjku9sinKQs9Zns",
  "key38": "F1vSX72JZwR16xYWKJCeUdVjQdjLs4ELmZdoJExyvp34DTJd6N2N8YaszSi2iKKk91NTF1GMamoH7S1mfr325RR",
  "key39": "3fNd3VBB2QTsPXQEquVFZrs87uw9Hht5Q3hD1hH37EMPP4yueD4Yi56gG9yq2NxyBCTVYUKxdEfyKwL2GwgGQyXm",
  "key40": "4Ubr5hM9YcxyvjuzQvyh5QqdvTwqH9JZpG6Xw8EWSoxRxKw4YU54W348kfNBGjokDuBE1Je4No4nxfRPRkYiKLEP",
  "key41": "vCEpkW3RnZ6iw3f85uUUirKmGXkSY9CBaxW26if2xjzsb2WowCNNppjTj6mhyAVie5VJRtCPYWeGkSaPGw5Uk5K",
  "key42": "4otrZ72ZQyGvRAYGKyGSNDizkRmm11iaXvGfPfpprsZQLYW5VhkiFnNEgXtDbNYe9S8NHUVhwd7BS3pCBcZNKwqR",
  "key43": "CLQmxHP6GxqBVxeeSJwMr9KDykxaciHT6v4UAkyWU3repMcypGt5Cnicf7gxttJN9V25p3QubPHHSnQixgLgPJu"
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
