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
    "3WdgzXABtE9rmuoNqfqzAfrsA4uuHRktzoDe5NFghkYJAdZzKP7zMPouBtFe71Ra21hKu8UdWedGMPVRWRFtL6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kpWeXfAJz6VCAii77xP45xdP2NZpkTWGLhufn5kPaMeup7UC4JduTDxqXUmZVUXVWzE47R11RTRT5wK5XUMoako",
  "key1": "5ku4wnvMicMAxUiKf9tqSZfMW4oXYB93r1zj1VcLd47kmKKDsqmWhE2P8psZVVoqzj81yFovBXCp7Be8WM7ZBX1u",
  "key2": "59WHHPeFhMsYWyY11YBWQPyWjFRVUVXzFnWLNdbo3wQNQoXR47ZeFjVt4knjgyUeRvAKhzTCftraqjjTE9sD2Ua2",
  "key3": "4GboaW8Qi4AorCUdkt7azKtDy3zfVYKE1faEjZKMT5nFigA1rSUkkUmyu5NGta3CiieL9uobYnq31vqdXBn9k8Be",
  "key4": "2m3iqWz9KMXsF9TvdDSSLUEpnigTSUg81UyRUmLXX7mhLnrbvapDtthyej26PwmGbyThvmAeYw3wDkTE7aUpqTNy",
  "key5": "4vjiXPzv7i4JSWkP5GwEVk66sDQ2hAVfEVfEK9pYHQp7anmNyZ4WtN1zXtUkaKFqh6fSfTkvwbEVEbnrM1mCeHfA",
  "key6": "4sqNnrEsh7y2KXJfNk5BtdCiB1qFXrCkdNEuzwKqbB4zvBvKE1LF7unp2M6jMXHTbJA1AqBzNaKtVbpAr4XjdsW2",
  "key7": "43jaWvyaz7wQEZogdQMGLvB2TUF24W6ZGSqE46JPPVVTj2fzhcXVzkY8Rxc9xbv8RQ2kHHEc4GjeCwQiUMor9vaG",
  "key8": "593z8XsbtcFESPwbdhQtDqZEHFkAmfKgN1kELH2gkwnsQue6KuUBveZmNKRVxb5wAWusWVouYDQDbjJuTovaTwY7",
  "key9": "3h1kB6iyRaupdTjsz5acccZiWFHHCEYJfB4VHw86JJf8v9n226HkjnEakSFpWRnwiJokmzxkwwNYSPcQR8PFJFf2",
  "key10": "2bVpFKHjLsjFbQsRnn6EY2tT6m3XVQmyX7qX9k8Y6hvc1DH525DPDsErXa9t4iRbiGVEzeG2emM6nsMLn4rJKPhu",
  "key11": "2QYCerbS5J1TqxoLk7MHWm4iX7g6W51Xr5Lt9Af7Pdmvjn2yifJ6ekzoMfnvJKH6oRydzKijNYWKwBBAMqWHc6Go",
  "key12": "3SNrtN8dfW44cfMrTmpYMaiHm4CRUNJWuDjjTBZyVu7AheH75dvV9AzLgzr5fY1pkQYW2YeesbBKM9BGGkc8PsZT",
  "key13": "xtTPjRMwDiBaWR4owjivE1QJvJMpASikn45U4THH8GhVV4V2arMK7CpiPAUrqyuFuKH6P9AopXLnHG2PdWpQcw2",
  "key14": "TjPkUy2sTAoFoPZezzvfyyL7w6LWp5w3n1qrvdxvHDnEgJMru36h7VyCoy3tRJVxpo3kcK8tU7y37zH7pTd95du",
  "key15": "5BDo9HYDeJPoPKFruNTMVMSQLsLFwfWB8o3LGqJN1mBj4FYhw9aUecCrK85d7MkFhHLPx3zvE8TVhxPTr1NC18eQ",
  "key16": "3JMjzQJn4VWTejQB7ExoRzH8RatLw3f89dp54N468nri7BHyHg2wGy4WdockqxnbaCx3juaTcMJ2gbhFfhQj3x74",
  "key17": "2Gi5qv7o3Pngo6BLn7CzCjvNH7t7jNS5NLznJF4dcjFL5ZZyYvuSuQ8DrGR8abAacib1WxLyFoPfZn2TP4i16JJx",
  "key18": "5hJ5MegPkrVSTriWXKDVt6FTZ3KnaFbsUdh6ChKzhWE7m9FrCabumrrBnzVz6omsy5qheysvdZVgJtqUN2EjN7LS",
  "key19": "4jD3qoufdUNogNGD2k9kgH6AoqrctPV2wghA9Qhyv6h3vh72wxvLVgf6QzxNUhQHVrzzDbn2pEfQjPdf8jbE2iXB",
  "key20": "5ME79pEeKMJhZYhrHMxxeZRRFKdFHqLXeTm9mak4cNhE56dvhLFWfJFFrqT5A9D6jg6BASk7C58fbsaoRGyTmRcm",
  "key21": "4kJpVMknS81YtyeaAB3LJK4s6ranVdRvcvXQ7H2unjLYK87huR2ydQ1kM2o52XkWiJNh2wpsj4mXQwjwKnsB2y6t",
  "key22": "fm6E5K6jMDk8YYkVpN3JVqauDWp1EY2xLbT5GqQSGyeUJMctL2QcBZME1j8k2UXJckTVMBHztVQ2WqXiYeHRHg1",
  "key23": "2ZkKDiYWgAAPoLeR2KB4U63GbCKNEXDBnGmcEysF8NgsX6ZjRPsssNX8TkaAv1f4cyFtLJ67aqgdDB8fQ9GhGYBW",
  "key24": "44bxsTfB9zVoYiCBBDekxPokzwRdFYoyBzWhyoJ5Qw6JGqoGsadFdfnaQ489cXDmKtSTyuoZNbFy299H3A8MNyJg",
  "key25": "2sQhYrG2g15FJjPsYxwKhVntYnc2ekxxrsqoGhCEQenfm4RCgR5PZBvzvLcNfZXmQ2DW3aowHKLcUXUEM8f2YZRM",
  "key26": "3t7gz6Pk5XN3zj135iofGNTZsrn1qAJP1WCCgRbFjS5mp9s2BJMX1cmCCYUYK6ygdCa6TZCGbmHdVpFc6szqNCtK",
  "key27": "vQY1QYK6tHKAEGgKeQaxxZyebNH9cViXLVDCtwUbirXCNo16sGLnFW98QkVcXtf1pQoppwoYsZQFj5q8oDNuUWh",
  "key28": "5gZqpHNfJuGpoEaVkrYj3X7qtE9v98cnCdTUfehCRrFW53bxyTMEPgdKvCh7cRBSTrsEq3xp71EcxzMoragshCoa",
  "key29": "2zqK9gHMk8Q422P8QzsrGQcN1UhbBWwmV6RcGKQHzDZZfYMYtGqWYY2CGj8Guxd71Tet9z8Am1nULeudHqLdeBU",
  "key30": "51Qxtrfyb1xmcNpuMTt9VGYYwDxe92SQg5nFChpsC2LvR72ZxDUGL7NUNcB1XEdTyY5pQPP9SEEZczEKJN8NfMnU",
  "key31": "555Qq2jPEjNXTS2akycAf6ornPRjXZquNHG19NVt85Zdnc3jFd9Any3KeZqghZAQG7skq4JdDYsMokPtk9Nc6WPr",
  "key32": "2xn2h33aWqmXomuaqQywVNgq4w1dZ8FCLhvS5xg6xkTQi4jKDmpNNWovRvorm6BQKKdfs4wjdWKbKEuNiwKp8zdt",
  "key33": "2rFPpjYunTqJ72wtKRkMTydLbhawUC1xQkne3tyZsU3F6NYUCDAuCgoqzeVUaUzHrdZJ2SRAxpdd1ekJDWDs8mex",
  "key34": "nc6DWBkbyhVhpCDSuJkCuvVfVzvjdUntkXoXVBxNHFteZ2eEKkKJmK4tQ6dCXxoMoM795PLUzfZsUeAHnCy3xxH",
  "key35": "23oSnezRvd5EPmrc1hMubtZ1ENBrJMqMFM6uR6c8eaEn8ow1uoiHrhcMUhfQGenV9Z5Rrrdg9X7nXsr1dtRq6bNq",
  "key36": "67nF6fPtPPV4ovDqX8XApwFJsG7aiM4w68Ahk5ivpP4hjcBrx8We9FC3CZRLP7FyNBXnRi1NUHQ24RDo1fgJmEX",
  "key37": "gWyr1Zz2cEjFWtDqHiLTVQkABzae4W8avWWo389eW2y1a24wNwsN6ocTxBd1oMLfo7baKTkRWCP4EdBD6Bj1GkL",
  "key38": "2weuqydoTjCemjGGjgdxDDeAyXcgMYHvQ46Mhs7owYEJbGstm93qAjiqpwX9bwWeBmWtWcqxMfJZsgUxovNpiJsh",
  "key39": "48svx3eJf1Davpz7cpcW1i9kbjJ4q1Njf6HHmgBg3S2kVZVJm7s4kKNsL6Jiwaz6n2rW6ocFX1FMEXoARg3p2Utf",
  "key40": "3gHnMrR3xpqG4YAm487sZSaQT3GcmgPzjWiZRpRbMuPdC671HwQSW9vuGFmrAdgyptBULvcv4w25LrVKZbV5S6c9",
  "key41": "3tEnn8u7n5dg3fc3gqL7n8Ptu37LefAFRUjFZzYh5m4M61p2jvdyBiptcd6NW5hRAWuso78VDa3EcMJ8aGkJ3L1U",
  "key42": "5sCwTAJkTTQfEVY3XkFbatpsLtbYPHrp7XRo6Ak1woJcG9Z6pMiDiHW26gKxWw2ieUxQhtSTBcGLkkXjLTrCPzqq",
  "key43": "5TvTJHvGQkfmt2Mo3AuHKtrMnAm3Y7y29H4nKYsWfK5bAWyEb3ijLMPjAoGx5q5bLydfNscfgfmM9qAYHqyNEPGc",
  "key44": "2Wb5Y2xECVvkN8gfGMiVEBhcGb481ZheLqcHoEfUS47MvpWghbbqQ6ZnbWu1LJuUQtxW4qxhwrVoSj8iYsJeJ3Kt",
  "key45": "4ZzNah7YkNdkgxJVCFbqJLBjzyX5uvridD641oTSnhuMddNuyXWBWzKWtuLZRc34SJgbpHTN7rV9oJZP9WTqyXrm",
  "key46": "5Go7ewpW9v34L4rUgru35xnGgupx7m1E2NAHAv4pu9fUGxzoaR3xAnyMdiULjgYwu52sAi7Be6ZFtEjTPqKHknM",
  "key47": "5b3t2j9ixTWzdjbZtw26PU1GDodUjxKrd93jEd4xrnVncWzsCrQZTxpVVzzabdUxddMuFCUJCp54cc9NM6Nm1mYu",
  "key48": "2f2ppBefBHU1dxfL7C9h69pUvHj9cVmTpjkqfoRe1m5VAHaKwjtP6rKNjJe7rCuimepE78G62HhWNXRFLWWv7RJy"
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
