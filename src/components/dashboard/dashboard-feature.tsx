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
    "5XX96TSXPkZ7xwi4AKzboQ9vhoLP5MURNVvMovLoP4KNhgweq7Bo8PhfmH69A6zGk1Zgr1GRddMcjHQoE1zy7HWR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VhVjJvSPzC6JCq6KruhwNmQAAn9owBdY2DZjqoxHKTmqU9fYP7Ud4Hg7yBBnjzcz1n6ehg8SNdptgNTYhq3BVX1",
  "key1": "5vFgsMJg4zgKJpDbjpTH8fxYxsaagP8KDXvfgMaFwumtvWwxbTTFCebYEnAvUrN2DdLwz1gFihBeSWrqYHGxAVuS",
  "key2": "3UFwusRMBVo3LaedYZYPvScucRTYCU11uQVVL66WyQcMBJp7y4TSBxP2S1bvA8qj786e9MJ1RdzXD9qoCqq3rxF6",
  "key3": "3uRxXkJJfc2uy332EZceZ3Z6vUB1cXCqAyMwmymrTc8mc17eXSuMFVmZs9MmrA7ZnCbPBx58DLL3Ekmnn5Y3r8yg",
  "key4": "MJzAQWDDekDd1zwhjVZHZaYXbrG66yLgqJY3GaWjMSuXw6axU9a8QkZxgReWMWB3xnbHq73uwqbSTvUt8tXgvGr",
  "key5": "4134kpBTeSGhw9sbgi6E72omhziUH1d1Td2V4pvr5M7XVw5DwWB6WHJzYQ811jjDQvfKDjYnCMPZKaYnwZYpo6wr",
  "key6": "5YVmGZUiWgSsGufGsbtd2JYVkHYsFD2VTKJ7PVmPUgqQGNR55Yt1YaAYNMnecGNYw3xPijUkziXzuY3k7aHPx5tF",
  "key7": "TCuxgahBnqwTweqTVfRTQ3UbBA645LzH4bESRPwyyywwmsFoYtmvsiUykbb4HMU5pxA2HypP1r2NNLCLYkx824w",
  "key8": "2xzm8fmkcWvMjkF23XrCwRcK8Kb4CiyGmqzsQqwprBhBSrcX9C1PUExPxGiBNCPb7Az46PRXEcJKJKx1UnHVPFRY",
  "key9": "66d5CHm4ZxMkEpL8mhyVB6oi9uvgYbgBtPLLRJi2CXwBsU9R2fLfzJxw9pRFNWv91r6Nqe2P4LL6nXi9oAA2rMtg",
  "key10": "4jUNb9p7C9bAYXp942qWZTYcMqVw5X55nvnBRzAxYA49cmScbZjphG9PAyuSUAPdkfbZHzHqYufYuvjBnXsMWmJJ",
  "key11": "438gsqqKZk8QEV2jB65yArQjp3assqngcA4t28mcfZhwTVJ46BSRAgXBAymJrdWoSQW3tZLMi6XJAkdtJApQHANw",
  "key12": "5Bm7fkhbsFBNAsUeATMiaUnSqXQNxYWFvtvhZYRdvzCBZqwirm7d4RaDdz8PNoBfuxjxzN8B1XhNbxHZYriTv3vq",
  "key13": "2JzuaEnY62XQj2dteop6V6jZGY3YVTebtympeYizYU57qZLtWzEWaqhqRaFed7Zsvh74ccQkMDBTXH9uY7U6oPm2",
  "key14": "38rjypHfQtcUqW734poiE1fznMHZSRKCy7PwbJEQQV9RdWWurEhBJ9W69R5PJqTeNY8QKnfx6Sd3TBXRaY6EPFSi",
  "key15": "3MAkXSkGcEfJV5ywaj1eqWvWYXgQmnBTn3EynBiqtoDvhWVp5GM1zZZRJzneXHMrhps1EAFXLFaxbyh6qNkvWq5y",
  "key16": "5Sr2dSxUzrVToP1j16zZyGu8N6jbcZYJMy4r8pDzUy4qRec2jvnpadQn6twidySNX1U9qtAJvFspzuS98xQr4qn",
  "key17": "UwsMim41RiyKWM7CQX8QYJAA34CmDUUfTTmgkKKfF2pRbgQqd6YcWLKQ46Qy1qtm9ryxst7v7M5C4YGesZi6EcR",
  "key18": "4vDjuMeCYBZ5myhLtdhM4YAXp6ErbENBQ9b2wQDhpD28AANik9vWwMDZ81xp3VcNtHTPT92ARds1wdB2uruR6UGJ",
  "key19": "4qURvon8H2u2VgCgNPtDyPLNtShzYMMKMed3ZeuM9DdNoLiRgWj8duHGyXSwtQrihpKNXfeG1CXZiP84TdRriFPF",
  "key20": "4vVdhTJ9quyzps8Hi6APYFRCG5zaNUnNobPLazkyYULnUry8eZRRHDMDq7tszehNMvdiQG6h2yE1miqWX4qA7TDV",
  "key21": "2kYbxejCHbJhif2hMFNGDSKPCeP4ewvsexP86FHZ1XsxSvRP2KzPhS2Jk498mQ4eTVsRTuAQb8DFRVbw828XvaeJ",
  "key22": "5rWbN2AZqBhAuuECCqLnHCd2Ndmif3C5Jfr16nAkYK9zHyWaATMvHUnvWN8JBZXRmD5okHUucreNHvStnshGAUF6",
  "key23": "5G2LvZF7yLxjvbeuvWNPy2ZnnbtFWK7wBMi2FzSQG8HWvJNbc83RLrE6Fj4xAipY24cRahqbQBrP4GxC6VmmWCx",
  "key24": "3NJzvgqWvvNiov2kDk854jFN8QA8y4h5Wbdx7HHZwEaDiznLCSDMe3Dt5NfRbS1DbNcAqVzNBq94cqyRj2uy959y",
  "key25": "gBVtBkGmWFoXSudCQFJEzDMupKEMptiL6Fx23Mg8ASVEZr9ZecrHgp1QrovSQvrwnUJW3FriTM3RvQwotTyM7yA",
  "key26": "4mXHMWEqNEgv5gRJb94qmS4S6o15EQ5ZbrkiwddCCJojs8wjE4riHejoqAWgCNa8oFQ59tdHbWLKD7w6AYES1MiA",
  "key27": "3eUa28iz7VS3q6QGKLPnEeHkjeBpnjzXkJfwfq7QJ7qp28UB6iMoVABrzy3C2MCyaQsBZZnpojMgmshHLUx17LAe",
  "key28": "4mAcBAaXYDhvKVZwGMSX7Lk3LENM8WL4WTUccs5dhWEiuscUiXWLwxpjUqRzbGSNu2zArpeoZ7Xj3LGeKNJxYBaA",
  "key29": "41rEkU8jkANMYjt3XxwzUA3NwmWo6fxhCmMpxC9GXtkzLHLhSFGmU4MdT7RVkLiPbAZRN9cfLthPnysVDgJy7End",
  "key30": "31RTg7TKsv7BJhDsAWRACXpBDpY529PU2CVn2utFm3G3XdLTsFgv2ZVtAKw5B9y6LxQc98nZzJnfoXtPSqBXXNaX",
  "key31": "5oMeerXSFqbXLzFPsWapnRaey6Vd523sz4ntEQFJnaeKKS6BWNXJQt7agmqHVkFoJPaHENa3BnVeWCSTG5c6h3Qv",
  "key32": "4Wq14dXWqikTP1VN9yeV1M3PWxeFcvbQa7EK9ps2mUDzfz2nHfPdBB2HXJ8M9EWv6Mdzz7nL9tFb1dfZ1Vpi9WDV",
  "key33": "3n8UNwPciY1oH5Sg5iQxM5MhPUEbdcXApoCaQTtbfhXFrnnvRzcqJ2qbVb6x2ikRYRNLQFZ7BtzVfZAsFEktMs9a",
  "key34": "4fz5AwTV3nYdscB6RMUZM11a1QjEmRxeUPcAkfgofdjjT66agMSfY4RUbjH5fHg8Vw2sxA8M8xqm1DskcYK5Deyp",
  "key35": "5LUiUZQuWrphmTxdLjTtqsic1BofKsfmioRVopReZFagJEn1Zk9QqKC8NW29iHupZ1Cok5s4Jvcrv69J3TpouJfi",
  "key36": "TWRzMzbVFuqUnT8GA7k6LPXQWpXZ349icKajEfzLn4hr88xwmk7v42LWQBu4UfoosqpfKwwyAwZebtZpC83cXS9",
  "key37": "9EJwesNxYLfeHqE83vXnjKxrnNFjAC3secakfZuPjJy2uUNnWoaAkKwpXaNWTt9s9fEQkEy8WcuqxCPWkQWfzQV",
  "key38": "31QtMDkDjCELrEHk9PgfuZhZNjsVp8QwiAHzeLKSz5V9yHTVaBGE3LhSY8LRki2rVi91jg8iL8mbxJQhwTLh7c1X",
  "key39": "62nzLwj2wjFEKbqXgYBev2cGxrs4CpvBWuNmZUA36pBjWcJxAqPCSDN6BVJb8gVxZ4ZhJ1XaZigoc1L8EVJWQ1Qn",
  "key40": "27GtL6HsHwyyt2gm6kMES5pi5uiBKcLS41HU9mtAtnEoqAbtBfqBoaZzpsjZgY8ru7QG7fdAoo2VeKU2BiVwW3QV",
  "key41": "2cAQikXJydgwSwR7L2xopefbbwN3ZYvDcUqdBUwSFy3rr7Uq7wPsLnyB7KYU498bSEMMbBGtCREwFfn2Dyk77KSd",
  "key42": "3nuYNN7PRdB33QHRhmxfKUDuEZz59pUgDjcicS8gewHB8P21KDwgEgPQYiSQXz58HFAbx9m1bLxRYDMuCe6Ut7Af",
  "key43": "3CbykQ8dVbTd9o4XojsrFC1cXiM7wD828vBaSaNEUThuoRjdDSkjokcRwjPHsJaFfoRYYzUNt8DLYLbyK44ThEpY",
  "key44": "2wzg6r6YrSGZAXxToZCCmxeEMvCsmMCHiiyQXx6W4YRjZKEhiXvTRnSEZjPRSKnHSrNKrnCQX72FikzeJoXeaE6H",
  "key45": "2tpxpDnPRoyYGkb3nhXAsUf7cy9KjN2kQwjGZM9yzhyt2j5FoLVDzvyFU3RFhQDKqQt8jkfzegcty3gXkeFxvxSf",
  "key46": "4b1gskZQdo5s6vz3WEff3LzHKonw8rPPHUZYsM8rheUg4czm3GKKEW6YbicQmAmqVtZyCn443FXzCxeCSvdMfm9D"
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
