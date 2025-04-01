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
    "3iagNLLzHSupGdptM6bBemqGNrjYXsodiYAK4machh3yq2GyPtGBtpQqPaTNrRCoJD5HBgUYBzKEwUVZENg2sxBS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ae3muFiqY8a1tEG3ZehuRNNxV3bWf1vdCAnYEBDJsA6biAajjK56qozoQq8S6UVYZ5GULkxy9un7cZ8rBKEpxcZ",
  "key1": "2vsWLgHWoX4BXYHjPEQwo2NSjg33bfpmpHeE52pxzUrYzSRqNL5MWF2zfpisiNk5K5xGigKmi3DdQ4uXdTq8XimL",
  "key2": "2RBwACSaMypY9t7RZwMpDpGtQZBu39zXVgcRNwtP9uPmVUSx7m15eZPqKk99CpRrEZjjVeu7mLKPFi9SRYMmnJHA",
  "key3": "3GTUKSViGCGsLyjFmyRWeRkt7oCTeLggnwaArUKGsDv9tJnyquaBg7Rmqn5SQ9jvk2Q7yZXMUieDDre6ZWcacm7i",
  "key4": "2f9BgP935SAy7NLBj2x12hWkwpsV3tpMQRqP87i9HrsX1EthTtK7vs3oHi5GVS6SW2AMYVriZhQFub77kxJHzyzb",
  "key5": "2XP8vquF3asckkFP1s5rx9YuYGPHkQs3RDxb2bEL1rvGDdYnsPEnkdFCxNPEJN7PGJD3Pu2r3VR3LihUMrwHjvsY",
  "key6": "5Avk4ojPpWcrKg2jq37HtKYxeCRtufr654cr7x1vCEPRaiW9zhBZWk4fQS1JAj8KC3VR4L1Mcqd5t6estjAx2das",
  "key7": "5xhF89wwgf3fd4oPkq3Cmw366reuLnmpYsrQsM3CKEJM8mMjB2Z66JjsLzktLabgZdEsup9C31emVLLG9Q1uKRA9",
  "key8": "3yBKkxvqwzVoF7eTZi6hADba8aDxNsTdV9YZ9dJjYDGQjgzH79j3C6fvZ1GtvACafTU3E2JJxXptPxWsuQEqQBhg",
  "key9": "5Bp2aPw41bpWMwLETBbf3eYYJyRRijfJJjwJJkyufu9rp1jdjU537vjYcgVm3QBo1qi5rgT1nUwRUBK6XkyjL91x",
  "key10": "4nDjb4RGFpnxmKyoLR2NEWY9uThkwjNHEfQDY9noCmD9f9fQnAd3oazBdpdHXmRdG9vKQWDYFq4q3CBVUXUfsgiQ",
  "key11": "4BPH8k1AjnxiZLiWgp9aVMLUwQeVLRkqfpZaWQsZTUzp4aSYYaAbZcYumDx33usN7V7j5o1gL47iMyLBTwhRFmja",
  "key12": "3krSQZ4azjRSDPsh2NPa8dzFBdfnEGabxe65wQUi917pyXVbttDUyMJ8ik4FrSAuLFaZjJRubV4k7VH1gZnmyLVd",
  "key13": "3MFJVvzCaYTY7LDM3pTjE15pDCepY9rd9jvwkJ65tgneN7dhbpxyAzU2Hd9zk5wy7LnMQq7eKzpaBfUKewuDMcDE",
  "key14": "4PHJSnctoD1aG4tDEs8rDptv18h9RLr7on4Ao9gnpUUPBa6x6XNWHbcGL6DVsjVkP12cJ7PtQ9Su1pYHC6jSBpZ1",
  "key15": "RYuBpzZA9XUrNGBC6P1pqgvzUCfYKgB1wrCRUCpWauM78NW4Zz67wVPX4KSDFgvzwHzKHTiaiigqLPFftgHHfSz",
  "key16": "2T46cfq24k1RMmxixyKkgHxfAu15jm8z1HRDKnBjjGPXpscj5i91jcCXz7BS8WZDjDmec3JqEJMKiy5ZBHHbUKpq",
  "key17": "4uLYaPy1V6z4nFVsVAK7Fz9m4VTMWznaSKcEbCBoTHmXAQtDSVHmkQL3iahiNhPY2N7BgLBgyUhsbY6hYa6AL1G5",
  "key18": "hVHFtfew36mW4KPLKJi53GWj5DHR4g7xB9zXwNdNzTEinGgyC2uPkxs5fAG4Zcetp1E9jVWsvkkzzamvG2bewRw",
  "key19": "2MRiauED8FQdt73DJSm49DSC3EShDMEKVFAxuAY37xPQdEA1VakUP8hUzngWDo929H4NbzA1z2mtU3b3ErVUBW2v",
  "key20": "2oMq3sbLimdoP725DLtnnruwp8SL92pYd4wpTiGsPbtFUDrp6v1U2orFbsWpuLRFimu8fWTnmeJK51LrGbfXNUgi",
  "key21": "Ca958AqP9gpqZMFVUHEF9yEoVX6DpLewqp3XtE6FjaHxwdtGP1Con79dPTYWWscU942u8r9JYKLFdaw9GwtbXNi",
  "key22": "2mZHg3haGKCkKikMeKsvYD1dawGJhKTD5Gm9S6DtJk7KzJR8m3pyxt2BHbjyP36J1EL3zZ1cPVRXMXiFLjtePjJ",
  "key23": "2F8qQNsydcxgVBeG8y1bFzif9qm9gjwFop2uyGqD9G6UGJcsKY2KR1KLXoERz1uc6xRBAWYYfFHbMTWZXGvjDBgG",
  "key24": "4XHpq4sjCSuVmQYFYEtVCdxQV4dm7GpztbvK9KV4KHowAuPfZawa218xhhm9fyNi4HC9cUCTFbJaVVr5Jqgue9UP",
  "key25": "2PJ1RbvaiAqWshirCXCbfbRnXBb5HT6jmkHBLsGW5EjbX67uqJht2akbsY3g1EcbYFvGxGKDLF3rxfk7qnCbJYnH",
  "key26": "Y22uCkTQ1jhzFp1NA7bc3NcVEuSv12qgmW8REyAfCmeLLvY85NotVXsTYdcPKNSkLQ7j37MYXny8KXJecQU2hnm",
  "key27": "3GsA8eg33T6oZ7K3KEuZsYCBfptdw3XdCcvHgx1wnoHjbVPQfuqJdj9F6LDtUVYFYhr8sVxahefqFgPSBbAiM57c",
  "key28": "3KU15y8knurkdhRSuquavxhpmEVqRZonvbYytKSsatBLXTHdPF4618bmEfT9Vs1KnJACDUFzqHKzpeqrceiwVLgB",
  "key29": "4cHnxkVGrUhfWYVzKvws83wvnFhXdKc2UZV8q1f68GNMQ9MoorzkwpGgSxNCrXRFWrq8Wn2sWujjoGgnyo3xB15X",
  "key30": "5yc8yGNfk4hCyummg9g9wA7usUEoMA6HCJLMLByBTyUEWJ2CtCoRTqJZViwC6UDQkKAjjZZbpsGL2AHSTNNSzT8J",
  "key31": "4Uwk8RutzWtBvfM6uB3Dg8TSRBRS3hKGzzMNkxwE2sv5fWCX91WW2Gmpsy9SeLQBQnz3x9CmDPeS43e9qb1PS7nW",
  "key32": "5BoPAUUoivExYKwNuyjtboxJdGZrchJ4rNRPCEBbC9FqAvQvmTmbmdvW1Eu7w2ic783nnxxrqh6TW8BmpdrManKP",
  "key33": "MBz9Yr63HMWdEp6DpfZ1Bi6JRa5nMFjS2gmZxNnnFgAq8MTAKZuDji2wXp4rHXyv5dBL1PbpNBfE4a5iaGT5K8u",
  "key34": "2aUeyBf7Xs8GdM6X7iBzTkiBXHhNcuNxok8M8RMtTxJNgQtmecih6axHXrQ1zicfAkv1GbwnTaAuNcM118F9xn48",
  "key35": "5hpqdPjjGPRCyooUwNoN2TgSSE4wweKw3BaPGz9svEykogioJmbLLV2CkjAa3rDdkcFJVFF91cDUWQ7zBrSmAZSa",
  "key36": "2rWevzi5f7HsPs9aprZJV5DUDEMDzEFZKsbSEvrFLFc19pWHe6LVdjT6N7sk682yNno4QmZyJuXvCnPqepwdbEB8",
  "key37": "26ukSZz24XHzJt3ZD2T2ZLrV2d9UgvfmrCUSoF3VakJbUpwgkSStHQEG6RjhiLwgFR9anq8XKMujfqhW48pHomSa",
  "key38": "4XdVsnWEYqauqRXBwbJYwMjduMYavSZAUfBdjPcW5eYA9YncKpTgBDjzLDzcFNBXkx3koofod5zj1QfAFAQvLCBF",
  "key39": "2RQVoAyorjP92HdYV3MY7fpj5BPS7bW3P2K7aMdUwxvMbM2ibUmK3YsFNTEDHhe9yueJm3ww9WLj6CScBMULXATj",
  "key40": "39ArbhC95piuMqTfe7pmBsUbHv8m6oP1cbQUhDpz4uXdyfNMEY9BT8zGLRY459jf2TzDRq7QmwgwKKtQnTo3hDV7",
  "key41": "63m9vFQfLZ3eFsoWXDB8zquFkgZmb8UqVUNqGFtQWruGaMA7ZR1sY8ae1hESR8k1LfXRQEQsZEAZNfVFZkqUGxRD",
  "key42": "JKoxMXXio1m6G3Dmfci3X7Cq4EsmmitKzD21cGhLY2GgsP9CG8rzB7Mfx27jENreeEWroxwEkVtXQJzfTNDYh7f",
  "key43": "2b84NMviSS2s4ZRo4ojKqzAKuTc4CNP2FU1eVjEgPAxmCALqz5ZFky1uqhQoud28xdYiXtuz6qcWS6f5z1gUkJ1X"
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
