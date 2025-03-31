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
    "46RRHnsZecaSMKtsZuwQooX4qqUkLtE2Ta9kuGs1998XEfepmWgy23yRrYdnex2jniEeJBn3YEJAMjFBf7ndiH6J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7GLxQtNrNfZbSpZaAmoqpSWyvQb1FJ9waoZ75uLzGti5kwFzeff7YSwrULnwq7dttMvwJGbuzteoZ8T6zT2e2jF",
  "key1": "4yJCviozyzJUFj7vo7NUSjeDDFTZBZMtLMA6UNKRP4xeDsTrrSCNwKWGTskwAxPd3GUcvasEqhMCJynsA6UJYeov",
  "key2": "36dHsFhoeqeMDPxNMKAXCzmAHfiQ9oTKdQzfb8M2ugYWskdUvJyFjd6YW5nWmYm54VPtxiu4sVB3vB2jTxjkHLkN",
  "key3": "HN46BiphCiN91SJKKgQLo2mk5cEqKCc9frN2iA2WNBH9ZHZbsUCEsMkA731V1C13ThrhdqrnNK44GPzKc589ncb",
  "key4": "oNqbJrTzCe7Cb32XJero9LicAi6eqvUHqcd99eteSpcmVdq1Fskk2hmyFjrEeNsmUtNB9fEityGQJvnfcd3V5C1",
  "key5": "2wihXkjPpnzbhhuEKUH5f3rzrZWnWChDs9GqwshX225S6GwUKGmKZEb58juEFvEtqofkUHjA48SyPzjfSwHB3GU",
  "key6": "5bxjxTQGbHxYhns9UQPbTckwUXN5n18CbPDTsKg5tkdmD4mfSLTBptMjceRzgbcjW7oNURBwkaFD4wxaMt9QBTSd",
  "key7": "5jVBfYJ6UDUQAnBCEhpbMHMEDvcsQYMZ1tQZwQG3FhZXkR1cpzjdMszuKACiA2JnSAF3XNx3u4uFJG5YfhGuoS92",
  "key8": "3t7ixSsrsq9Fyy4wKdm26abd4eEoybR8fi6d4tMVYZ6QXZsXyJ4rzZ5VEnGn7tP82NS7TqYBmBqEmrbT5aekZADB",
  "key9": "2Zd9v9msfq4WirWheLyikPuq29qyw1C1qnddoSTDfCti4hf9aGKiRGsLkKNorx5BbJP861yYPWZGTGYqKyWnpCaJ",
  "key10": "4XduqDXpfaJh9sfx7nZLCUsewsh9XBUuhtAbBUAmZQSdSKfPGWMiM2xipxeUdJrpJTnc8aezLPhphLBjhSLpSV59",
  "key11": "m9eeYAaMGckEeDFqeuqj8qnvGyKybx5hj5NL7mJfgrEjtKSoVynEcmASBWhH94Vj4eaJ2myvqAwUDXfoTWZxFbe",
  "key12": "3RPZWeohe3fgRAzLEypRy45Ge4mArXWXWwB83kT1mhEp3sku8V3mRC7qAuD4ebDSpVTx4pfYCcF8AfqHudbUXw77",
  "key13": "51LHZs3x4W2CByBgCuezBptCFLBfnUkVktQxQFbGsZ8DnuRRqGRRdaZTLabdMr9AyMhPbuYPz72HPmWuf8jxemEJ",
  "key14": "3ZPLWXUSFgvEWCmGNJweyi9UV33tiUptaVRX9L99PNHw94pMeXCkgKivXEJxeUmqVVjx4pKWEmVVch6WSD2VoeSt",
  "key15": "UHy2RFZWV3WYRZYUVzihK65Nd62RmySBHMAExj4xKfcmuybd6z7LX9e32YD99Pe12pU41LAiwRFk3B2NbMeknfr",
  "key16": "cGmFFP6KC1fXdPjhRGxyLenEpM9dovEK6nPKSCz2YUpwWMWH5FbzfctDjjn1DwGrCAGvcu2D1c8U9K8n4CiZi35",
  "key17": "mbYuP8SEnSxKvpVap5PZTzoA41knduDeu1EFnyxRwPKvaTrbvas4QdN1MfEq7BWjY8eZVs1D1pNEtCFE3VaXxc6",
  "key18": "NFKpGw7CzeMiJgxJJsvN4gUeFsMPpYhrKbADnqvhuFoi6xzU9LnjXPH7NWDmhWJsRUY2afLHgMAsezgspmjWBuH",
  "key19": "2bMsoN8Z1YiHaR6etvxt5XuvDqoSnpRrEfVorfispZtp3tv7gQW77ByrybrCMLYPUWS1YKK9haeVJhSiP4HSQyAe",
  "key20": "5axwZ9G9cbzAzRT1WRkpd7pgg9o4xFXzJ32o5GibYwhd8Z9zp2DyHYUeEiwR4mJrUWFu8dTuPEyFtm8idWG47a8j",
  "key21": "5o42VHH8gh28ytqPWm1Gmrpq78MvsC782as8BBLkkj7e4H74hD5k9CdYrPvAKnUD6iP4zvB7igJtQX2wLnbdj9CW",
  "key22": "5YkmDchhoDEim518UkjPeAJ8hou3jgWAEb62eWQwEvDZGs1i6DAsTHfr7zVcBiVNBHAuwqfmSMKHvbtLTT68XXbY",
  "key23": "3fDSK8tHWj4L7MqnTJ98Sh2pbf3eLo8W6r3oBQPUBmK29Wzx555LFvqiVRWhvKJqrkw6pxF1sFohDGkMJfKZLWhh",
  "key24": "49si2mW3QwiC5Abk8ZwzZuAPboGxYEvyDJoBH5MCsAYWPJH2ymbh3RKwxAxg6dnpudT3GbKVkRyyT6YRseh89V28",
  "key25": "2qsq7oxfwYMSzsVvkgBxpLQZzVZ2fvmpYirW5eJVqu8K8duseWct9xrynbs4wJVsvhn8zAdtL1QBsDSW5ndyCeQ5",
  "key26": "3Rbz37G88KHYjHefXV2XdLWd1GGQ5WjN5LgWPFrFQvMgtEVnzrgWzBWK42FkNegE7yWSZy2SaW3YkEbbNmBzZgtW",
  "key27": "8e7JQSbQS4o25NycWn9g5wx23b5vEYCNSKxp5BCfmPioNijM1ube9duJLKowjLtYkA5XsAU4TK8gVcfmG6N3rXj",
  "key28": "4QLbFqCdTrnthXJLcJAoidyY67fejV9J7m3STK1jBz6HhrZd9z6TrdFCrNwunvyGS2zmjZPMQYWFsKF39z28uUKo",
  "key29": "657X6ERKZVY5Uj8xciMpBHqAymQPFs7ZBF7RAR9apnmwJYzQzNRfkyTrZqKk3sHDCiKq9sXWHXr8LZuac1sGLD16",
  "key30": "647fQbZ22ntk32RKEeMD5zxGWGoeARvRnYTHv477a5X6ryFPFN23U86JTbcp6ddbt9aUoLh4B5FKaar3d61VJ88t",
  "key31": "3p3CqqfzRN2kF7omcogX9U7LBeefhijvFdUoGdnsxJXr9vU7SpJYdhsSvuVhVsU6TQWfT7J8yoaCRPmysTa1daFc",
  "key32": "4kgfDTZYm5qyAr6EuLnxoKBsiNX3DFWvLMavGQGzSyWFexn1oconp3TKGV9qBFmRH2PVpMAamhWyRuK7fB53Lg5",
  "key33": "35jCYyahcK9hbbMEZBp575QzK9ssxH6cewbV9xBu79WhNZa9DDHFrkeKWdJ8dRaKREAkkaTDXRpurrv2ZNrYRQh8",
  "key34": "4FhKS2sLbNtzQ2QYMyLE7J3h8SCm1hPAaS2gJk4tkkJxyAVF5sPkCnr1qXu3fZ58z4FNvQ6SQi9d8xe5QqJ1Y7KL",
  "key35": "7gB2RceYqMaeTZKNVfNRFKCcCHWKrUsUgUKGSvTr8GS5CtoyYE9iXpQzbxcCeiuCg5oz3ZXZnjHUEQMfEwSYZyX",
  "key36": "nAxR4WnCiK6RrbjxbGginvgzuYjTHXpJPQtLyv4qLcTm2CBGQhJx3AnyhfL8sLGAJKupnHhHQnHiXNcCMWtk2ts",
  "key37": "Uxk82dAhJMoXC3gX7hEzRvKFXHDfqDRaJ33DKoHCRB4DUjTaZph7ZojzKKa8NukR4KuCX3udrE6wvCgXKv1k6bq",
  "key38": "3PH11SgQ3NGQMfUXjnEaxrBhJWyi1QFKDsbjp1EagSGuDQcjtNZ1iNYJKy7yi6RyenRv69Pic9D4vJTJX1QpQDD7",
  "key39": "2Bd2HvYFwgLBX2Qn7uB2Z5aXtuBeD7kpRaetD7NNGA9XddPwpnwtWXWm6cuXrDPoMmtNW5SmZsGzoEmm5TNptF6B"
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
