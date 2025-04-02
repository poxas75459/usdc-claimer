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
    "5LeZEa6BxZZqmNaXx8eRkdY867faPhEGFvDWpWQV3GNDBRPuAuh24iKKKXhpKdKct96mC45h2nHTiAovwDczufTN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5egC6edmR58BaTDwh1qhM9gPzgTn6YiFgGGA9xYYT7amnhDonDaLSW1yQuw6X6G4s3zP4HBJqBYf8oA5eyHDrQF5",
  "key1": "5tUss988npUoQtNNwdGgnNkS2Ynpm7aDip9ti5LcdgpeSaaWi66SfXrZgktzRUz3PrkRau57VtA1ay6W6cF1KtrH",
  "key2": "PUEiGuta29uEugCzH1SZuGfsPQrMXe1EKDVmGkHNXDv4ziQikpTTgDquMEH2JnRBuRJVnc3C5geTh9u2NZ5KVTY",
  "key3": "ALi9W6WchnaUdogdFcic654AmATYDUKczuGxu2CTPqjg9dqNrf2rYPiP43Qd61Zdpu9UHoWNQ95XYtr7b1tLXDj",
  "key4": "37DpUX1fEZFwuKe3DfJHbC1GRzcgmt95rd2GGAyEGmetpNDstvuypgihmiYB1BeUAHGX99B6XQs3ZWcwq4MXp7CZ",
  "key5": "4yCMhegD7y17T17w4aD5tDPZEq8EBLWj83965BrYhCwsybwHJySE3Wo3C9QHqa9iiNWwaLbgGsQAbAdv6eVxGBLV",
  "key6": "4Tp8xmXvrm5EfJHjuP1tHUoehhS6zv46jvcBjJaWQ4DKyuFs8KZwfZBU9dpJ1CfYBqjeBRwD21vZ6zB5uS9ZauZo",
  "key7": "MUfNLBEbpT9TLtiWVeTSF2xNfCMGosStuYZVEE7QrP58zLfDyyWm2bgxLn9gXqPCxPfkn9Pc5RVTjHaMxJauDdE",
  "key8": "5AT2CwG6Va9wno6dnHZAbf1MoVqZWyNhXMAA4TbrwyELoqDYNqkqqpqbYxZNE3Wh8k54wdvfJK4A68R4gQ7EMuY1",
  "key9": "59e9bKv19sRpJ3e469reBP4LuhpvrfReA7zfqMXBzWGg2k9dPuxNEGGYAkYQAJN9JJfxV6FWzE8Unh7e1an5thGY",
  "key10": "2dvH4TBE3v5mcwnNfLSyQj1WF9KMAUjYcrhRXGo8EW66XGVQRSgFvVYkrvikjWG6jbLgq4xPuzkH49uen6fzAfWF",
  "key11": "42RqWkb78wxs1gMjjoY9F965m2VQMdtrW9mDUmKwcnnRHU8cAnYe6k3pqVULAyQVVGjqpUHP9mN8CKaBUYuwyaFs",
  "key12": "59fDz698dxCM2MJTb2TjPbs454WyrjFVna7htRzBnWSJ4ENS4cjRnupAtVhn7P551YH9FCkLh1DgFtZ5mrTu2AVF",
  "key13": "3Ay4C4Q1apJFDLYbYB1cFE5Sf7TuTcRfwpNUak9u33C2pqFABF7CimXsHRi6QecNBupFn3ggC7dqQwTbgF65wXRF",
  "key14": "5nhjcw5MNMtjTmbDhvcG92KVGGTcY8u58deY5u7Wgc8nJwG8aifa89FEK5vjrNhhhR6rsUb6YmjYSPLyVH6FhkbF",
  "key15": "29V9jmUWxvYGf4C5xr95nAoqPaVct2YKfSzKhBRdh2Ryof1w2XCb93n1Bk4mTgTQhoXHNeobAxauBhe8ZyZmPVPz",
  "key16": "3w6tCfMm9YPrNiN3qEshxGudu2hNu7REDmKoYCuAZ3hGKe2P8fDRbTtu5GQxmMaJk7NWdsofhvYazFEizMWxR3ye",
  "key17": "3dMsCsLmcGawj3NTZrWZ7wBbqLyXJ7EZxTYEPvdSL7uFqmf47TwhUceJvngC9PyVbrEAcgyEDUMsu4jkpqVf9cEr",
  "key18": "3bmGGCrZHbASjCkqFG4RvPLdMEDTJDLWPehEqgGCni7gaAYtPdFVyYugtmED7xy4sv3Hf7P7PvZZhQmPao2JLEWf",
  "key19": "2Prz4HN9c5Q4YE7dX1cCrXyVqmSnyUkQUCectUD6YFPyMBiPbvJFZWVWmUb67oLXVUiTAj8gaQ77PmBzoaStVZha",
  "key20": "2HnbMA3XQbH2Wvh73nZuJUZ9dxsch5DShtH2qBNow9UGJsFDhpWHKkYsG2Y7ShuVoD2yPFJUUhdgYyWGXqsjLHtG",
  "key21": "2EcvK3HAiLWRZfjRXBXRexFocfpiqHWwXdYteePHdCH1BCsyW6VuhofXrGpkswnjJuijS9bKc837czMfG7kcqyo4",
  "key22": "2X6FMbPyNF3TMeN6VpYiPxaNza5goESy3UXnTNMtM9495PgM7ZsM64aJsAvFnHJQ5LTm3gRQ1bqKZR7r5CYwRUBF",
  "key23": "3CJRnjDnsRHWp4GEdpANYYEmbikc9hfEZTsxuTW92NSfrU4z9Nvzg27fuiY1wcszZ8PP7B3RTpP3VLnNTBkdUx2U",
  "key24": "2CyqesPZTeZaMVjLMkQFigRyqSWcEm53aphcmCzUpoMmQKC5TUW65vCjoeBxTTvJVD8MrX2BZ9zYqUwKrs9NLbPF",
  "key25": "5yJU84s8bhZgpo7ZMqVfDuM2xw6B8hUH3Q4uRKiSzTzkX5R4gjnyQaDd6knv5yhbMxZ5x8wf8fejyxjB1dGBwHYM",
  "key26": "36h95aQoNTTYHG9P9aNeQn9mDDJvkTZvUmuwXEytDtTGrhCW5F6Y6Ei7xn4V92b6S3a7vthNoNA4kP65yfWVTeuy",
  "key27": "5qvSofHpjWRastATAwxAj9PYAT9pLXbqRyZdxibcpv5JRHZKwjBQYV4KAREeJrB5YpzbHwxpXmutKydzYxWW4pHv",
  "key28": "3WvP3XnVwA7T8e96neiKiKbFrNwr7odysDsSkArBZGqoyqoHdZU3gY2DFL7fyEenVMmFcw2N4N1FrQYXD4ShXtmu",
  "key29": "2SFREcYAbXpd65dvaSwLXvYGmAW8dya9RK7UnfLsJhN3n3EX3agHzoxb55AjHAMc27vdhARjKRUbQAjvjAmAvhit",
  "key30": "3Zv3Vqcwdwhoi2QTjNA1XPRRAiBCzinThGQoEtomgu3dTj7hsVE4JhbpMV7R1mKVP1dWgJahMEDUYNbtUWHpJypV",
  "key31": "zmYTtvr9bgzdBKoxExMey72NkXfjhabhUb4CVsXbid7SP85saF4GrhYzZ4VQiebrEcXG953uAWE8QGmXHbW76gV",
  "key32": "4XpjZab2vmxkv4ew76ngPAbLrEpNexQBPJA9JeD1BeREJf3U6F9NzrDwZQCxteCbouSGHD48ZF5wWkC8jTmQxM4p",
  "key33": "5X15ZAVqtMrQse8Dor8WSCfTMeGk8tunvVHP32HvMft17PP4rJV4CgDTQ2HN8kzHpMSg6hisaogEKtaWWhfM4fSm",
  "key34": "2N73VbqMDQTr7jXmkC1tmJpaFWoWinwjWaNfa98VbkcpVhpRfLsxHnSyaWWXZ26zaR98PG3pb8j2tV6E9tSUMCu7",
  "key35": "2Yg1AgQYFA74HvW8cPoJoiwH3wHFjpsvgN9YZJr8xXSwa2vq9NassbkTZtCYBWoE52UachnAwULpPwk9Fq3B6Pok",
  "key36": "49vpW3zbufjLBjUkS69qCHi2FxwgtfLVRiYr2TQUz5He51oshDDE8RyoyRL8svSZX3NSQ7nSXch45WCQp7QpxrVk",
  "key37": "4MJ2M2NbTKg9XSByjWk9eGmTjb5yCA7ZqdMbgrbtDT1FuKHGP2MmJvYE2d1FuiejE1PAcuaJaynnr4kijvfCovNL",
  "key38": "5fzPKFU7jgkXRgqCgLidCfTQynAcZcEM93LpNKSzZBPExCgG616oXLKNvP1XquQLkicPHrne9JXjZnC3kFukvE7w",
  "key39": "63kiHCdK15D5F5iBhfzHinSJdTvnxPcq3ivE4ZBmxD1zYqdqg9RCjP5MBBWAN4DmQVta8Y93XZwpPPUkn5kGp4Q8",
  "key40": "7EvPCqFrPRfaMoRXDtFTiEceR9FVRcnkmPBAPVPuqeZUZv7TP4c1mZo1uFQZ1yuXr2BApn42mYVjzefbrmMPaVF",
  "key41": "4TiupQzqzkcehDRX3XZnu429dWv11FQrGJL8yPupw1Ju49y3Z8pX7fuRphBFwNsjsg9NiP5vmTWXCtUKfmSAuuhr",
  "key42": "2SqhRBiW4znkuWhLPLnwfri54a5FjqFWKPUgmEF6NmmXST7TAjthX2vUAtAC22LoHhUGtvc9cjYQQ8ZdgBikXP1P",
  "key43": "2tLcyhhZmSx9gQfug46uecVvF13diybDxSTcKEBjUR2iEVQuLVafpibaWxnTVgLMi4TWJiWrfybbtUAwdFeTMFnP",
  "key44": "q4M6CwM7gPaai3u24PidP1hCCZB8tymEiZG6w68y157vv7x9RVS69uqCnYHaPYAA2MkstpF9nRgNUZnnUuKiqdf",
  "key45": "5RiLuCAT6BjRtU5ppR5pL3WWdJ9V58CvcdofXeicN2WUhvxucziTWAdCfo8GcW4KqyAkbdn4nR2iwFE1JZTPpF6",
  "key46": "5WRv8UkStW9iqsnxmqMTCxv9NtYtWjzWwTXxu47NDxEbyUuebCCC8T4nbpV9QJQT3fq1XtmFzsNwVbHXG2XjnsH1",
  "key47": "3itvXeJ28W9FGbLuWnDJRdC3WEiky1YdjGFCQxx8atk6rnZDXvM5Tjxfsjg9TSLRgFWqu98BvV4oaa2Dk8fMrKJx",
  "key48": "4VmZGqR1dzZYXZAFbWzizhA9eZrXkSP1DmFpQfMLc6iUJ87ix7jCC3PkFTEkoVT5SHPSwhAoLeUHyaLyvpT5A3so",
  "key49": "5uQj3CiM6aGopDRQGGDUL6NisYK16nAi7vETkR3sGSAryVnYSHDqi2x5c4bDNgc2MsuvLvKaFE4TVQBtskqZVQxP"
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
