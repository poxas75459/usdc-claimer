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
    "pFmKtw3GwEFAwQfRLB48iMiz9GKodc8F3jQf5kpQ4VsFnXBi2imzSo1mLjX8yXHhBEaiiJ3xGuRiNAXWCgLSTx1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23D1VGk3vtakoLsjdBBH6MFkygjXTXcqfgCQXotVyQkmuhm4bs4uG9Qdxeek3uVn1uCSkArkex1FT1Vxc9kJkAuH",
  "key1": "35YkzKRboyT67KfWajxvdqyWswuw2yTSjUo9QcKhbtYzdr9LE1VsdDBR4i62hrkP8MuuamA4Lg2LHDR4F6nSujqb",
  "key2": "3w9hJknKA5NpeiWyRLh1NsGE3FB675iaUDLKza4HTQsGoxnLp5QaogfaK7Ac4fhJ5mhZ8HzA5nym9HxhGsDQacFm",
  "key3": "2SnsMQW96g6vzhynSJvqWqzQfvheA7v6K9vZ4p1TfN93g4bMEGs5HgceB15L8RxgatzWNNsC8Ex8YWNUgTftRnfS",
  "key4": "2Q9tsmhxVFhyb7Co65bHhSiUPVfzgKFwkZLx3GJemX2FVNSkvEsjQkQUxJyuoctrzM5ctAB2NDkoqCcvR2apZheV",
  "key5": "2xbGnm1BqaWiCycvQHUTj86NQqNDFXrSTdT6w6AwAD4aUqQt3KHdJfXiW8FRaoBqRzbScTPnfHk5Q3RewBKfsR7x",
  "key6": "3vRhPU9XpR8nWSmmkodNWWaan9frynymZv5AAZPmhcyrpaPFTjVTWm53B4jeUFv7GgUvRu6T8XPPgVFxifHXBcXQ",
  "key7": "4WX1C7eewajJW1YpahWaJJUPF9wapCaQApXvmUzKkK6PEQj9S4qDSNnnRnVg4qtwRbp7GGA3Z58FnsCxMQemvz4X",
  "key8": "2vtM2j9WSdwriPQup31SMxqtGvjQTsy6JYeFWoSZs4kzyWwsWXuiejKaAYoHoo2s5LF5bWiomqZrQ2cBW8fR9Ges",
  "key9": "3EviHLSH6hoQghYScMg35nDnZge6dSQmFMLxKgBPn6ZY9mszdrKDuGxTnWEERKoT9JJJVyCguSXQQb6Lpnfp9jx4",
  "key10": "5ZYHcVcqx5zQT9diqJxJdVCC5kJDtXC7BxgTRokzS3j3LEmTvdS5Cmb4LUY32ALZzxtuEtn5tkEJeiLpamRuWQB",
  "key11": "37tLCQWMxkzZ7TmuxZSBVUQytbiq84XiC14q6oWC3KK23kqLmHmWfcUYmcDd3PzQfw7sixeLsCgDB7SYnTtdwftB",
  "key12": "2a5heYv9w7gKLkBuKqQPkLNBMK31vs4QoNK3YPfbhPdBpCDN84SHEaje5ct3r2wZyDH7rNdbTCjaktNihrTnsAmP",
  "key13": "5PESeSXaay59eVhfqkdxaHjBryt7VkWCHiK6o1aJ6t39W77YAxyHSUXB5gazHcf1HhFV33KqeChPDpJQve284ZWS",
  "key14": "38n8SsceU2BNLMtWngYzvvNk3CFgLjCnSobDLdju5NG9nE8zSn7oUYH2GNaSP9GZk5Ec6JyTLE8ThVALJd3TSMZz",
  "key15": "5vCu4jHXZYSVTty4oJfc1WHVKwy1xvbCxFAps2RgvcMGCsVyZgySQ5mNoZFU6AEuFFABCTy8VaNJEB29qMvCLpaT",
  "key16": "3FNmUMu2BgrXQjFfdj5yq6Ts1C2rjAAkewvgbdu2wa86dFn5R5rzUitja442hL4a5qAzoGfGD2NMuWhcAGJR1VCk",
  "key17": "3JnT6mQ1oP7Naq4NzMpshAVpniCDguAgkpUsrrCfdYLErwf17LFmPhasRtu3hvtBuB3bwLjBEScGeyfJW7yq7UpK",
  "key18": "5fmQpWkd7wHNaQ7BV55W9kygQjEBy8kLKcHyMdzHQ3M6QsqXUsmBFXh8rjxU1zmPgdztam5r3X8yJfBcxQ8CAjcG",
  "key19": "TgkZ6ZKRLDh3UAyWpd8bmSY9teUfCp2nBJfSRA6ndY8ZtNmPYx4Fju7dj9AUknpRGdosWmBjtSxhVVDBSyREN8c",
  "key20": "5jWzWjSKJpHQY8waKhvKMXPLR7dxLbi5d1uVRMJE3Qj3CuaGeQ5v2qmgU6va43h4fE4pd9DNPxrkHvYmc9y7SkSh",
  "key21": "62RctH9XW5VQrWo6C3c2UZMUEXgBaiHrMxkRBKdP196Wpo6sykwBHbgix8WnYqAkf8aQm4fw9LAkJjSL9aaNrzFq",
  "key22": "4xyHY6pt5Y3hoqEXbwU1Qtvb54DFacbpXx1HiNQftrpJETdYtdo39oXwejEn4hWv9Zxm6o1TFQ8E8LDLSHwkfHVW",
  "key23": "3bGpLW2A5SekZqeh7vqBNhEmtvsqWqK72f6aKKjixtQKnRqD2w3dHbY6zf2rMt3HvthEWNfoynL7dLg8G31aTBLb",
  "key24": "26x5ARKmHsqSobXMzyvKUbHVkjkir2ZwVfrznJKcPBET5XR5YacDJtpH6111wJdVmkDgDANrVbciHuaM9c2i7jZh",
  "key25": "4mx25ecSJubktf76N4rwWFdckboSnqDPW5B48bAv3RsV5Whe4RniktNCk9kswwo8H1eM6hhdL3nuTCV9NkQU9oam",
  "key26": "53e2MvdFZ7ZUKoZ55dUsBCDEoRqqy9Etf9dyNTNRmgmpGCUuaeMtHeqXRqMcXUaQVKWbD4Ap3HrJgreHBHrWvG9o",
  "key27": "5mmsBANWasZGwUHH5VPJmXtgiBe8t8cYWr2Jz8EhR57sPwk3h6An5c8xMFsV3UyFTSDAByvfASAAoRff4QvyADoj",
  "key28": "q6Ywyhi98jHQjhNCRNgQ9MsFZUJ2sXjnmgS4diw6PL9DZaJev18xzmLyTZAbwqQAdYF7VCoW9Lt5cGSkNAYumYs",
  "key29": "2CeHZXq6rFK4BZzYFyPaZixL9MdMTf2nZwfzujq25zgMJZpr8B9CMkmhGjHhhoZeWRzF2SiiZ6WLW3r9FvAGxYev",
  "key30": "3x3c5gR7CyQf7H4KfgD4VptPmGqDEuFvvny5NuFLHanr2iUwYbcYK5thyoC1wzfjcNBJuZ9DhHUPnfq8nsHx6x38",
  "key31": "tdPAmtFZjoH47YKRWck4zcwkiCH4an3kAeUPdyyUSrngVf7fh8A521z3cHhvFLY26HPo5VzXmgvrCBgvSATwzgu",
  "key32": "7unB1ub3vFxNybwxJi3grPBzF8d6RGsZ2Qdew7gAPeryiKb8AkcXj7WjNxtFpCwKaQHyYHzuCsSkArsFXPmH1Ks",
  "key33": "3DXJGk2YbVt4E9TRNdTkYYmGddW424iafT4LAVa9eaWcWh645tJB2q5FKLAmMYSqP4oQ91puMkh6oPwHQYZJN33e",
  "key34": "2M1uHv3XYXCFJaK76LAfL75jVTJmpkS9CjdxPwmxWbbYDCY6qjFRut6KQzU9Z9dTPhmc6FM2WLbGqWnaMkgxsv1h",
  "key35": "4Z8Fbz1FFtiumTy44DmjNxccLB2zsPtCrUSYTDBxPAjm6NG36AJbcmzz9aNfTsk6zQtpDwo1tw2fZ19bVMH426VF",
  "key36": "2D6RUBXwfncpGN4efnHRzX2CsZNiPUvWXsDUDf66QJrtkAXYrYMRPoGF51EdkRXZ5Sqkz6s5PBUguAPNX61BZroi",
  "key37": "37qUT7xpm5MYKTJ8gAs9iQYvRX9th8htGKPimvJ9BdAmttUcm3b3ftaNZAsmEEkhdMMjT7R542XiBLWiP5YjNYkn",
  "key38": "3pWmuqqkv2Sbavu5Mu4ngxNse1Xa1ag9RZTS3wKZeSMSYiugCLvZDo2DwxHzsU763Yck6cYoEkXEdVLdfsCYgEfY",
  "key39": "3hJYcdUjrS3CCQZbfvGt3hVVn7gSCoYE4ZbqzcPXuaD7ojeZshmR5DvYwA9mxXwBNkrnLVeocAaWdmMnBjhnkARJ",
  "key40": "2kFPGaRm78qswZPwUB8J8VVFj15YfdHsLCqXbWK8i41qxXLJk3G9ycCVKA9Uzk6A2RBFuqBcQAZ1YBUkf1q71wFy",
  "key41": "3hFKkHTZn7gwAhHq46diuv2GQcrUBjFm78ZqVurkicsV6JRCcFpAbccvUAQ7BnESWTDava45Q6xzk3ZUZGBchrdF",
  "key42": "3gRw51b5m4MAThGA2Z6qXomPrZVfnBqqjfapU64G5kMQFnbK4wBcE9DxtiAKVJFRzZqReuvRM7z1e7KHtiRPsJhy",
  "key43": "2c6Y8onRQJHW961KwFCNKqYmgnQy9zSCbpLMwQpsP5QmFuRZvwG2EvbvmYDFdrwswDkkCVfhhN3MWajZYJAu8FDU",
  "key44": "3YQcBygBF9SsfvtCmjxrXcjtKByz1uU9CkR698kTEER3yn4pk5w6uGgsdRMCob5kbHFuPvvKeFxNdibDceLawPzn",
  "key45": "32j5H1oSGcTDRiZns9KegDoqbXZ5BrBy3fCgA6N8GdnVCi5EXucsrVVEx2g6wTJX1bRCnYV8zUQpvifmdW6aNDHk",
  "key46": "W3xXMx1YQjrrY4KoSWNxazijD9e5SsaSZvqShus2sE5NQWToX95BBxUARFfhpqxjryV35fG1V79CFW2nWJgJPuE",
  "key47": "5dFBF7ND362zM871t7G83MPdHYSbhiu6shDY1NKf7FajZDX5mUKJVRc5x67sLKjojPejX2QPZYQeH8NCDvJbWZ63",
  "key48": "MESUfhQtrS7DAwfj6jjBdeVpk3hZ8iHtwPqgjBNBXKuxG9nkDoLdhQJ2cjKwHun8zkzWP9Cbgw7GU1FvTnwcu7F",
  "key49": "5VUZuUCp2qt3XJ5dihc3GypdHfFvimoUmtLHpXGdkzxEAZ1RogEBfkKeqAiW7bZ3GnrWJVLJYnnw7W7VhrEsCUCt"
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
