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
    "4DFFRVS11ss2WXuLrKdiV5rskQK8yQDLWeXQTcJxdnSGBAe8d6GGGbrQgE3wq9JYkki6vg9Dz3wG4xknCCRZdgYE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YrK5bhPdpx4cFW3cXMgEosN47isxGRGS53apFaabkZAaUbQmr2YPUFtVQ4kpCF9VS56XW9fogn8rc1ULmxdpAZX",
  "key1": "4nxWJBh35Nd1W7MwVuH3HqBxbiMmHFJG4odxQjdncpTGKzYAoorwoQWAP8KyKPaaXqAtRZcc4yaxf2pPRLx4593Q",
  "key2": "46Lvma97WvJuVKaaiXmWaCSszPbDNjviADz6H9XtooszLtMwXzJzzhiHSPgjosGpwveviKLz2qUxuJ6UL3f66o6W",
  "key3": "5Xt2Lvqp4DKAUjYhZF9XdPJxyJmg6wBLYnUfqfMibfNpKxhFKqDEJaUnNYQo749Q4djQiKnXEB8SZb3NbqD7XnsY",
  "key4": "AVQwkDxW6gYnTrbMe1LdZePTLExmVaCRTGcDWpjJtJioBdskZRwLuks4L9gAMpZWkXu23nvf3pAF3qj65rqMJPp",
  "key5": "4waoYQnAGbfRzMN7ehephwDvmNJ4ApdCJ5TNwf55gDwz1iZ92tmxDNWz629Nwar29Yhui36YVckfhCxocWLbUAm2",
  "key6": "5Wk6XR51s2Cp8t2KWF44AoowQccs2B5yjwqVyuCzczi8Qw8byBZfnM2jDw2Cvgb1urxAazB1gqMpqt6uu9h8wRn",
  "key7": "5Du6mP7KiwmYWJW2fFZq15X61LnBit8NGNxgjngvuHcxnYrLWsEiTJGXaB9ewxrxiKsMgRexAxGTiG2Hv2LeCaCW",
  "key8": "3Ej2k1ZFezwTiZh5Ef9FeZQ1HAUHYQcTBXv66kgiir43wCe6JDARnuBxbrvw8x8g16Esbf6TUQVKzycMzeFcAh76",
  "key9": "5oBTShhEHn18UXHgcd4YG2fEjcvwWeLHXH4WRYXoDAuqJnLxqYZEAVybS1agYAEag1JoK249R5ep3A1N12BWkTS8",
  "key10": "25RyoKVTSzKvomSM9U4JdtPLs7KBeHcCXCiWZhmUmTBReAUgsoqkLVLjhAzmv6eUXRTRiFb8od3xDiJSkc4SrNFm",
  "key11": "bDKcujrMgW1f93EBcYHBru3BxiKoFW4mVa4GtxPRRN27S6PzyLXp5FQu7H8WJfeBhEu4AeVFmM8Z5NTPUCWHD8S",
  "key12": "2CUz1wBzJZNBZ5Ki15LTjJ4ShR4kXrUUmay6QzxLQnsqM1Wo1LvEQUbjmq44qJ6DhqF8u5n6hS5sA81pFgW8Woq4",
  "key13": "3e4uc4yz4ser3HdKmcXTG4pyrRcehfCmF91S6P3pbVev9Eks8TZhSSK3JV7fa4ggiEF3WbGYDBtBiowoYw3H64EQ",
  "key14": "3HdANEKj68YYBF4jvNK7cj6sfCmfFKGCDmy8QumTa1rTwHjF4kKgoQSVQpPDXq96nVRpjFegHs5aoMj6eQgk99uN",
  "key15": "5oyw6kMwp31jGNkr9uNUCuTwong4c8LVrnjD2c8ngRx3MLJcknb7e1ooX3tguSzLUTZ6FdJUHgsZ4zuMHFQFYczC",
  "key16": "4Q9oJiKUVHQC99EdJHASiRnZwtvnYvLgq3FP4NQzcvNYowttVjqxGzFmFo6wJz92KqHVf87uD3RLG194nSFwXyCc",
  "key17": "4NMs56NoZQUgisoBFeSTzH849eHeKcS3sEcoLFFPgYiYne9aTaQTqsc3Qp15qzJs9AsnRCWQmktBLmsYDLV1RLpL",
  "key18": "3SCwLLtt4tfWN1UtFE23EwKTMVU7cuu9ufsXDMMhuDkBbne1VQibQroEFzb3u6vzynzQYwHaExQ3pxR8qXtRQvcj",
  "key19": "4HtQkpmPE9c29jcu5QgXxbjbh8Eymcg9N8BWweK91j9XsNrRv8dMpCqEXV17MhjUiFgzGVUCRzNKUuAXPTccpwZY",
  "key20": "5QiExuTwrhJjfZ3e7dwuNhaZWWQeBGhb6KWZiMAMNJaigpL3FxrwY6fCJioar5MxbFXwgwPsECinuH1jHdj9Vf3g",
  "key21": "4ThPuZzJ2bVaHVEuYMBLSmcsdBP7JYajZAatmcPX9mVbVQJrGMNwADkrby8KiChQkeZZDKLkY43zLmqVEVAyBvKi",
  "key22": "44j7zYtBvWPVh5CMKAFe4eWsxnAhJQn1jKKVyx2RKf7RkAMu7xWcjoDqyMAqVkvKFAJk1dr8GgU9y7m8m3zK4HL",
  "key23": "5L6QvR3PfD5jYeWoVT2u5hLGctCjyV8wXo2LmpCMXorMnoEyrgPyATewzpheRQgncHNFaPu88G4maArFKycnUkXF",
  "key24": "9rMG9Gge7DcCCxGfbfDwuFrKKw5ZVph8MwPcjB5bjgeTpJu7RPyKmT1wkbajhmuqCg1fwaJvdJLTvtfVLNFqHGH",
  "key25": "4fqPQBZ71hTtVDouNyrLMtcznL3jzXNcxomfRidTfnP2vBBwwrbdnnaS6vm7pSnueK9MoyHVi9hP9XH9XS3cRpym",
  "key26": "32GKurmyneqsxCbLY29m3hUcmsWE9283nMEsuxNAU3eVYsAeimi9XVcmGLwyLUCjtxtnq9tG3kaD2jhXv57xY49w",
  "key27": "jghncXMLm6XYPhF16GqauBZm5AHWEBhmG9PbVJ7NLWnwFRZVtcXftN3ywhue4ryGoV6f6LrmUFQixpPAWGRy2Fr",
  "key28": "2sv6q9B8oKnmCyaum1RdQRXH9jEb1C1jdQ9W3NAZLHS5eK1cDEJ3sqa2ydb3h4L2VNwiykv2PsF35YK6KHH77u36",
  "key29": "5d2sE1zjmsRyajYboCJHqP9Y3Um7uQrsxcDiRXKfyLymXXKWWyeQVZX5HxXaX5w952tBj8e2TAFQUtg3pHmzYC2c",
  "key30": "48PAwBfgj4YPs2LWANrAdzVJfyN5vGWNWpfFhzpXKvF8dDYFGLebSwnBe3V4zanqib32UMtbCbHF7VZBGW51MpHY",
  "key31": "3QDS2PQ5C56RQAH5LKLYsczYbQAG6o5nv9B1aDymoBfuAtztvHKhK4ysfrZfjWAr6r2eJFUhQtCw1D5JYUsV75H1",
  "key32": "3WKxBdn363MqffxM4Ur6bkZChCVh2RiQTC9X4Ej5K3kMogceFUZdYev8FJrA3TpzmwJWp2JpUTWf9gdgYwQ2hhtg",
  "key33": "4CHzRzGHJsVjvV3TmgpZiKhXebG915UHrfn38Gwsqd3vPJ8UZXoj6t1gDjc2msQyxSdACJDRfPBCAp4DYevcXLBo",
  "key34": "62yJoKvsiSPFYVCr5oPXW1wxoZkh2cDQixnAkCJc2RUY4yaDAWManwb1L7dp4aKqKWyg5p9JdtkAutEKfCWHQGdK",
  "key35": "2sWh3XPVRZ3eqiwFV5fdye32p6FQrNnSZf1kvyBKhJUh4sC4PgbYkpjEwf1ymdq1dMs6Ss33mVfrtsugx9WRjdTD",
  "key36": "3Sw495PguJzS1PTpF4mpQJhNRV5uTbXCVhY64Zz3RwK4SeGE9U8TCVP7Y1aiq2AszNCWYBhqWWvmnsiM9CCDaCAd",
  "key37": "3At7uoFCjJ4qB72ThNCKgfXRpaQDDbe89MWNPtU67qMZqJSo2hSJdY8H7TbvK4ktn2Dww8dsrzyxnY29EHZs89sE",
  "key38": "5vVqmKiCQ7kTWezfvXr92xTe59qyVapwR4yMw77jcU8wNcw8NCSskzEwDBAUJLZRdpvdCB9qPFRMm1zW6bEk6PYs",
  "key39": "4m6JpnQSb7VNwJbCSURjAzo7EwnW7C2Ahzs3wjeAhZLZK9epSE5wojtA7MKoSWHtUjAL6CD8qxDvFtFJM8cBCbQs",
  "key40": "5NtxhD3U1aZ5YnrNbnRs3ZWj9iTbwaB9CTkk1Z3K3CY5JkgUy32xt9MeyiNzozpwzuyeVd2kyFh7bBSMwo8WZ6MK",
  "key41": "6HuYhDuxsxWR2TqB4uQ1khijNH2AngPimPZ2shbpusN4Wi57rPcsY36wgQBpyjMMfGM5fk6utt8Cb55TLTDncXt",
  "key42": "4XtLjbxWrqwXWz3qHzG6FqYi549fkHEsMAq1sCS844YzyvcdhLPHWxsQLzrKngUrLLPEHA8mZynwemvEXb5vdi27",
  "key43": "521FDXKKt3Vd8PYnN8EFAJWy6wbi64GDSML9Tt7p4ETUk57LZzB8ei9VLZWWKCwbvLK1weSJpuG6qDTsjroyAxcQ",
  "key44": "qBEZjYCyz2dkEKkYaDwsGKBEWBu2QLHsXwRvwx4D3wcActyUnwAH2GjhmRJzEeG7RP95fzq5EqLbgh4QygASE52"
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
