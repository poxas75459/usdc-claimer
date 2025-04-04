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
    "5nSu5WDP2T1P1DuWVL2He8j6gQMX4ETwHJgRHgWKKVqh7YeLrsAu3G8y1W5orzp84ej1jC96hM4okhVwsaEiWPUh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oNdvnL85reXKydTE8zZuXWevcTobfGENuGVdetyWhkdXLvpT4xPaBP4LPxf6w3qVuvjfpCcvJZMQSqnpTn2N1ZU",
  "key1": "4UsY6Hni2BFe1LnSyW6oe4CurBx7iXvYc4C2iETWMWsPCnuUf3vaoYutwenYp5QoWtoSdZoGn3FzSgenqfYFLQWm",
  "key2": "4y3P5MKzaR1YHf3uEJgx27xCwnE8esjeMt6y9TLfvNJ7qopwwa22bev4JGPgC97DRyhEvQ2GLoVNy41SCtnZ8B8M",
  "key3": "3dgVggsDACh5DWfmfZqsEB8ykzLZhcCbiMLni8SznDVynuMNWk7vQuCEq8bq5xeBqJNGVYJ778yT6bhgNThErn6y",
  "key4": "5uV3Xz8AVEBvyXEtkXbZqmsGBYpQYrGaSAdhGihWwfTt48nnzfFdqkxNzgcJbLzrxdrfgHvxHPefK9JcHwXrHmCP",
  "key5": "3bFB2mjvujUibzu3HvhmrwQG6RkZNF87nXsHWxZE16o6FBzX338P5o6H8GMnRUv28LBkB46wyGRhmzwwg6YN3XkD",
  "key6": "2x6rueZeN2GmK4gUBpJz25pkf2xMFkAU6yYqyRoSo6G6R7WB8ZY3T8vC8s6iYZS1ozXpQgB99QY26gBcfxZs5CST",
  "key7": "eRzJjxXhuoQ3RoBvjk59F8dx7JNXL85Nx6bbtx6KePLA9nn5HTEQT653znwMistXwgeUXgebZGVWf53kNwn5UWo",
  "key8": "PXHaV9mpbQpwGfuQMq39W7PFeHezX77Ji5Zydk5rdABn6AbtV98dYjgqpbs7jJDfiV4HCpwCXYB8gpA1KLpWm9o",
  "key9": "2Fq6UpjdtYAEatLf6LyhZVnExUJSA2QoXofDsHiCTmJDuKUCbmHhaiTPuyekYm3BtubjeEUuEodvCSj9JesJaPvG",
  "key10": "4YxYDnky1jFBr8xw3TCwDguc6fK1VLZeFHhvTPHmaDHBn8ADfscQZmBwSEdyKSYA9jwmtjzTJvT3Z64LAFakq7ov",
  "key11": "79uRZ5xDczF6mViCVfcRJBeKmn2ekkuLJcWEbpaQMFf57qRssmUKk3n31AbSERCLbnvxSidkaHoBDLDaarXEKyS",
  "key12": "5BXLcM2WrvJ2mc4zJgK8iSWKHLTYx3DKDwBCQGMxuLE2X8wMutpEHR83wirHzztQY5N3g1BhD44abe4c4bLJpAdF",
  "key13": "39EoSwQVEh2wUuxSjmvewbGjWypsaLmDCJm6eWS9eXtgZT8Ca8QGMhbwjw6wvHft4RLY8AN5hchoAQcJSySzckwq",
  "key14": "213qQ5MDKpSNBzoaWErs4FCXXvFzmDX4TNC1h2S3sG4S26yGKFEwnDwQoD4oXhyBGBXctiLxpwHZCJRday7U53My",
  "key15": "b17WMpaModbaKLJAsQVoLhGAhDsGBBRujFNg3o4JzpwudyUUyhBGcgzCqBZCCfH9W9ZHD3qjyN8etH7kokTLEq6",
  "key16": "5RK3aeSME9ArRFJUn9Xh64BH3rZdvRAUbsJbHn2opVDGjQWFTT9tVW8GuZffuWNwTBaBijXW69z15uAE1nXEBCUj",
  "key17": "4PPFQmxJPwe1npkeMTjDUbGawjwYGiRzXNjikiLx1QdgP1PLVmTbk1QhDb2TRETs4RTZPQR28XgsKe9qNgvHXH9N",
  "key18": "4d4kcR74yxejqXVEX7hNHTpRVb7X6gC3Ew69y2LturcoEqqV3zNDSqv3XL7cKd1MPV25xtZbFXRdNQS2pG4yrg1k",
  "key19": "63bHdyCuY37nSej8iGuowjqQTgYttwZAuRGHUSrf4qBdWq6WxbG64mSyNVKmP2jrgWo5K2oyjwDzrx8qJbeRZYUN",
  "key20": "5zunxmPfGzjvjVtQ32MZecn7ihP6tjt5aiFD4StnEDzvofKie2apXh7oviiN1kM5ykCSfrz9SgMCZGj9G1ELQoQ7",
  "key21": "3mUrve1yQqxo3QEnumBQPk78o6ZGYjgEk31JGtcFHp2pJUGGSrdqcYi46GxVaYhpEZWyWhcqXwcg1cKCcZ7n6mxR",
  "key22": "2nxw8Duh6dTL3dXXnzrQYqbge9MQg5gn8zqwv1mDkfPeKHDoUo4dNJhJHrrMrh6CNyapX1Xz38Qxu2ojTE4iEKVF",
  "key23": "3L8c1WQJpobNCaY8Ssv1i5A9fJwnhH9LgvqTEco4YaKDWpb7FAC8xQMPnmjX95iNMg2WXzCemcxdY8eJGN3KFKXA",
  "key24": "3WdC3EZ3vBrspmM3muQqErX21tnk4HbVDbcZ7Ls5MN79hMAa8HGKBrN4BVTTmkzNdgBMeHTCCSkFJf4PQDPbTKBo",
  "key25": "5ro6g6ofnN3mrQo8VYcspbNritEWawDKSrW3hrVkqfgdtwpzNaZJ7fWbqQFVc3LEJN39qEVcLqnRiub67sPkBp17",
  "key26": "4jaB6u2nwumds6JtbRJdTE4mJWeQUQtX2G6NTUAyfwe4hFhbGmHfNvxRFi6vdXJFnXf6pXHoqnwJgbUqrDdhfCTf",
  "key27": "YMYArbQKgnrvD9JcEQmCQ7o3XH9Ta61BU3zB54iAZ8MGRVHVC4itw2ykcNh7b2XQwkZaSBRXXBc7X7gj1Z8EwY2",
  "key28": "2Yc5F6CFrcTaGz3YzGwQr3juYcgZAtnnTag8dRxpHT396BtMHdY82qYEd2fPeJjAMBzrutkS7s6mBiSAnB7vZNEa",
  "key29": "2XF8ZhbkNiyTbuwNvQKULy7p8aGYvHeG5mdowKB9tfJBWJVkifCXof15zEd9iCgst19eq9MfWogwPhvnHZ78abjz",
  "key30": "65361zhSpJp9iZSu3iaycW24BYWqc9DpwExxgLyE8GdvamK4eYFM9qmPG7UXe8x82HRc7jz2vXnHzpBd67rDGXKC",
  "key31": "2samuT12Z5H5x4ViWpcqiWwrFu9ZyZkm79Pu3qdsRaDZJZKQsyYvDERXHEwKapQStV6ZvTiLsKb8vJioUk93sQQk",
  "key32": "2nYKopPeobn1iLogDQvYcMXVSMznEKWeVeRSQ695Zmm94ipdqAJJWJ2teaqQFJsT4jME83gtvYTUCFLHKSxiysTM",
  "key33": "4PcepHkrYwkZMJRT5Xs1rSZhEdvCFQhtsS2Yz2DqnjsjZMUjGLP51UjPGyDr7vanRK4VAi5MFzvTEPUb121nXULw",
  "key34": "4dtQom1MQ1G8BWNfy9eVmNXZFZNmft7YYLSVx8BaZZ1r4y19GsXybWg4D4bivW7ECS3CSnh9ETwGv7rSdFztws5J",
  "key35": "3JRUepsQeVkA9yayh37y3Zdbw5p6SA697bghLDs6MXP9Q17AydfMuXfHXMvpKg2BRZgc1j8o5XN6ycrb9F49TpRQ",
  "key36": "5FcGESGcEF4SpBT8cpd9zdwpbdZmUuHoSu8MbjeQAb4KgZPeKNWZvem8L6E1rg2TEUH2CqmQ3oQ74ee1jaBfusYR",
  "key37": "644gk5RJrC1EJeXM1UjQQbPSxvWjgPWQBJHdakLZn3Lh9V814k8mJV9hMEZBKfxW3kLwdvkrHWG4QAuqwswr4CZx",
  "key38": "44WvpHatApFDPupGkjqM1G4HKZXZbM6FxHbsCDZ7RRZMComgJGNYvnx3o8dUVa6pH8fLNRkU5oRvgBtYN2sF2Uqe",
  "key39": "5siHvenn67eJmx7HtokJ6Uj6va9RbJeaawT3Azps98ig4PmWVkMRzHvNaV7LC5XjUG8pB7yKuG4k1eFN7wsmgFu5"
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
