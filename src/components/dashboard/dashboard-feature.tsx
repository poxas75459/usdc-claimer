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
    "4J3bBC1AMCWCJ6xL5YbBGgSQXV1bQZFm6m9dBirDwcAnV3eQbg3e2VUCNdBPdQA7LcXhX7Y6MQ48XD6mEXmwpUT3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X6ZCr4mnRkAKPMyEkNaNWAa6oufAWV7m6URDG6q9i3KaCTNV3zQpUvsudLNFaQuG9gVQ9qEF31HMSLwTRKMmn2N",
  "key1": "5JM17cKHmKZMpKmq1ogoRH5Aw9ttQGK5rj3ypvP8M53RuQ62XBDbfptoRnSkhPs1ZyqFXFEDHvPQFLfWgj6zpyGg",
  "key2": "2kAW2boBiBbNiWQfqFnvH9c5CcFi4BQMkKqMj9CJks2DbBX5SdV2GxtGzUNNYy8xL3XmDPC3tbCzpBijG5arjvXq",
  "key3": "5Z27xRCDTxwNL2e45YR27J8FgswDGPTUi6K1SmCFwRQgvumM5KmFrsTqZqq9M2q9SDGDJswf9LbCRrTR8J8RQHLm",
  "key4": "326EhsaAiHKApVcYFA4twruXfjEX9CNpoQ2yanK3wZ1bgziua31GFN2WGUTwcm45e3EoZmcuqk3A2PCwbXnRkiAu",
  "key5": "489As1nTysBUz3Va3yqrQYP4HTW9vZniQpX8beorNHfbZM348JoxkaJaMbYtvtnYRfxaLiaSKm8bU6U3H6AK1uJ8",
  "key6": "427n8jZnZwwX8UPnUfJt7c2J1fjHAHipUQydY8tFGMRnLwSaP4yuA5DS46JWEmRWjbgSEe4RwMdJ2hSuEfT1LD4A",
  "key7": "3cq2XmnXoZHTErDgNjgRT33FDysWupkW6qmRuCmBTwciNrzmR1ELMez9NBmH3Uf3M5ZMaCn3yjJ4FMfaENWVnQ8j",
  "key8": "59m3FNrE6vjLFGZUyH2FN8ER7J1ipwrCKNxrCGYMqQRTABS5b2YaBSsj8JP1XaYddn93Nv15g8YSBYgJEHREajbr",
  "key9": "4RpJ6Bqe2MjPzuqreWZDgzRYaoGPYMhM1mmxnniDHZJnZ4w92weg6Y8YxfZKNDUr2rXAzq9kgQ18LC4GqD9tKjpo",
  "key10": "4e47tchANGNcfyBSXwZcsMkAwodQRfYDZUw2XmejeWodHh9AWdigQj1SWGGNuH8F9R9u6qg3d7m4AybrXECfHPFc",
  "key11": "5178tNyYa9PY2MWMBUUGWt8YWa2GKg2kaGrUAb24F4y848ud64exxseHv4CSzT7rFx2Tn37ucjxiMK9PRbtErdvX",
  "key12": "289vuQRcQZES2jhfqKyniydzswuvzeWcvUy6gPakBNizSHx5BKCMmEuYDAvyJQbwN2xntNQmDMRjV8zB4xvkYWak",
  "key13": "VRAgznmdpQ5Fz2MHD6zLZjRYe58ELzyNPgc3BTiGBRx92uYXVYog883vJKbsTznWBZcGGMi2VS5kgvFqWKFCJhP",
  "key14": "29yqq5tHaE9LTtsB6zMpfMmutGt833JPu1cXiFGbZ4wAjZbuTWSaptZguizuvDLKFUqHzStrsbcTcSzEqF6TEAwJ",
  "key15": "4EvRb2Xv4LAizYQw3htf9PUqA2Xh2CdCiEk5uKXTVv38VjXxwZ5oB1SPcGRRtRFiMEDNDF7UfQMpRXCpQRf8dLaE",
  "key16": "4rJdsEThoe9g2kSgfpP9SCW2ddDQg9prhNxi5rHAq1oVNwKSrLWvjTtHNCn1ZRbM7K65TtG7HAvYvBTgydbXajQ5",
  "key17": "4Fj1ADeYML4T6NjVQDVLFH3k2ZSFRetkmo1816jsJHmD7qYshKvj1Gsz8jcfjecrpgZZy51XnSL6sipjDZFjruB9",
  "key18": "5BEAiMnyTvyEW5yWtdoMMTygQRfbmH2tB1cdTBgevHsaiM1yWdc94vvb82emELnF6PaxuxyupyN6u71hq2hfCWSX",
  "key19": "H7E9jLWjoVCRMWJbeW2wyxQVvJYh2ChJNQ5HCHPJCFXJD4xV2kzcdbAkbxxaLZ3Ns9HDMNsirVPJdrusLFechEx",
  "key20": "2ogSPJfnAS6dMy3a2QNA3gp34krRk2dNjqAnC7r4WetzfyXcJQNKKypZweJdtTQ9tQhjKPmFjsouDgtAbZTDuG9q",
  "key21": "ixZW1EXJqNbeGdarKXZJqfHFiJ8428WavNd1BcDRDQi4dWz1xnLwnXCbSExrEkTHDsZfoh1PJTT7gLHf9AAWzWF",
  "key22": "5gHJkzpWhCige1GnPXFNR91jvueeTpJ2LdE69Vo2tCWvyV5APHoM4QaVApKpkbDz5juRZx1GhVGRroNzHR21gExG",
  "key23": "pniAiojgVRx8eADcEbTq5Q7EREw4t89qtMAw7816e4fKGFXLEgv3vshsF5ohxk8mc71h5j3YpQAapgVdqxmYFrc",
  "key24": "3Rpe4GFAwZ7XoxeeXWVcjNc4GoHQjMd33yLpUPtaHnUFxqomBk9iCWQYzQqfuHafyJfUoqzgmgnvydNnfoR1jc5b",
  "key25": "33rxcuSTYeyWWeF8UaqA9p9KbN24E9mGnEdy2Lh4EtK7apvpNNzveBC8LaqAwndu1th6pJnJKSxBjnqBVmyt5BYA",
  "key26": "jxhsyBk6X9pnZYuTAgkN4jaT81uczs38uUsWsdnkTXGLcuKDN6nxWkfSETY6WEYmtVW9rYAwkFcVtLhmAvnHLF8",
  "key27": "2i7fFV4vQVXxVA4n8PAWQBEVUXKNF4NSfgYr4bZgBdqCfGZUfzLrjvAMrC5KmNX2awnTGt6t1h6Np2tZA5KCNq7y",
  "key28": "igMS7y74VeYxAYCFBp3XUnZAr4F4SQAfgVtQ59VPkUqWLpt2iiwHN2W1W1MJQHgbWguNcyjT5jPkqq9DxRp5E7q",
  "key29": "4A16v7ucSoxcSejkuDa4sZGSDCaf75MKJ1QxH6rqbRSUygnaFSXXXo8SwGqnozksJBaMggeTi3NVTVLvqgz6aSKq",
  "key30": "4cK5bAxh5rMtrhFaSmLxvNJnTEJoWByQpYmUoBfHZfZKXeXPJU2otnS8bN6LfaBGmDoTs1jRjSnitkL5Y1B936Ur",
  "key31": "2gFBcRkfyfHGnss145dh4ZWSJbgR5smFtPM5MVM2NYP19oe7VQzZUkHeePS7aigrwMs2xL6Nc89ar8ouLFsRWCpb",
  "key32": "2GWy2mFohVHoQEZ9E546pDzFo8daEyscCfFkqkJAys1vJT75VSMwDPTkzCSUGck9SwVScd35ruDzXt12bCdGqKHi",
  "key33": "5TpUYq6md7jTU6VDu31SyRVV47kZ2rQurhvgLY9NddU7w3s7TeeVZy9uVGLz12TDNXAkJZ7BJRKbMnwecEGXTqQd",
  "key34": "2WSaDSkAPPjiGSuyecRuuJpD9fwK9o5qtLiCfdDh9TrVieM47a6Ky35Asc4cmBq6qXC77GhKpZYrmairgJVeUxUk",
  "key35": "49HUQ9hzxyCfSuAF4HLcHVf8kXeFwHK6gERWjHdJPpvpWrVpXScdfgoJjqC7LNKdikkaYktD9Ya2KPJy7tPDoXmj"
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
