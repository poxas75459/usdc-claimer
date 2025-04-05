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
    "4hny197zyAVvgQfvjy2WhNyzaGoa8vC1JKr3G4sqF1dvbqDLA79k1AtyGJksXLZBUMkAUjEXrWcU6JPtCa1QXU1n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZLGqPaogHAbQVbYS39xnoEGcb14bP6FtkAMax3ZANHgVVqYcmcSPuEJYZQonogUNtVi7GLPvpwUEi3ndhNyTM5j",
  "key1": "4uyF2C5o2TNAUQ5JGmeC2418jD6ytbyQ1ADV8bsqpHuY3cRYobDKs3PARQPvWKK3s2yMfGTdrYCg1Ffpdd5nVAz",
  "key2": "foPhfdBk4ghyQFjXUrBeu3md6gQvpM5tWRV4Sr64ReYQLmXT1Qsw8Jgd8HtZd5xjFP24gaSV6RD48E3MVjGy2gX",
  "key3": "5dSvnapaJYsKwiyYMtArAedoboPyZsbmDcCRzKYqr9yDLujb2Tvt77c7by7s7ZC8M2xDEAk8TQPFrWjZpV8CeCWu",
  "key4": "2fnGg8NMN5Jre14TEGoiF45JkA4CTGonNYAmacFyjj7Jzpgn548dNfYJwY3ms6rHpnEfc1S94pF6nA71XkvvBaDV",
  "key5": "57ggKDt4CRMqm7jCgNCNKe8dq4JatLYakb9fDQJwB4XSWytiaEG9RXwwdkJnWQFkmS8HAZ5cPKpjezyy2uudV2yE",
  "key6": "2jybuVKoVfSykGqYQViGX4GQoHM9hnyVGQC6VhLrdM8qXQL7s83PXgWH2wXjEjgP4ez8KdHCJHbGViU7jRA6SphD",
  "key7": "4AREaLfehs5GfpH4eJeF9uoKt3zTSYxLUnciJQvLHU2qdFhGckLUkmEsZKBVSnYKQtd5HjAzB9R7UkLGmRFVxVvy",
  "key8": "2WRYDVxwjyacyDUVGnTm65o2nj4N6TENcK1NpmbH6fbC9RR99LNtKKpSnM7aLBe17Tmrjt8WM8qHceyC1KggjEhS",
  "key9": "36AiNkkNQ84Eubsa73xvzyn4frKhUPsrdeD8YE9XhxzunGTXb1Ko9ckH12gYTwujooPb3Xm9S4DxdxwSaMnnirF8",
  "key10": "t2rMc7haKgpjX2AWMZd6XjEUb1GgnjzgWfSvoJVUqfkGqvMi4avJbP5YYik9sEsfvvKjLJSSXj1FD4txBgbMeNk",
  "key11": "5Tvbs4p62kZ5H85vW5B3TTjYqfp8ZpyX4kaa1KLkorSWbKVFmDQ2YV6DZP3XZY2b55eGqZNHBKiCH4gjPtbBBV5P",
  "key12": "3pbAmjUEUBR1xXGi4Ws8dP9uCE3xkk5iyUKU59BgKUGcU7SvVKbidmhBPcDH8DqwegjCQ9i1QRmbHcC38LzfUcdb",
  "key13": "2fpubSDBbp1LhueffWEi87JjNqzGABob1opFrDL7jrjxgMEgahbAFfz9edKRRTtTnvNekYiACH5QjCVF1DKM9i2w",
  "key14": "3ybKc9VAzqo7dk4m8cmzgHAHayDWs4UuWMVhbcnQJraFsp2K9GnoHVEY74ncKjKbZy3hvLAMPFuxUKrCtc8zhYuu",
  "key15": "65mx3epjhhUcBoDF1KoTvpkj2VWBpij7yBgDHsNjwTykJy2X7fafdrPgZq9ZRtinUM2NqDCtq6pcAqLea2D63znt",
  "key16": "4YXkJkhRXQH4wj7MB6b1HoPAV6MHuWCL44uht18JF74BynL9D4HKkM7R775bADXuBwN2T6bPGGPDDND8pQkqM4o5",
  "key17": "2urYCpaTSuZ3Lh2t3FyKWLdXsUEXkAP9P3d1rSbCLH6Jn8GuvRSvgdMP1FefQAQFk6nYjXpfrpv7edgJgjGjKYC2",
  "key18": "2QoyipQCk1Vcff8sJsmtL8GSnfJ5G1UUnVTDo3BamjiY6ijxaKbEejdhj7Nxs5nWbnDJpCAK9Rr5Di7h1jF7QxLR",
  "key19": "4mBje7HmAoh3XzMaC8X9tBvM8iQYjuhkCVrMy8hV226uKDrxPdCUSJHHPNZNZkY5UkGGvj98agh25iX6WYb665eM",
  "key20": "rj9MnCQZKYBNuLiwjFKfrR3QVQ83ZScBEnPXwjc4ezzzXtmGmsLXpPtA7KJUro3gWDZBvCeWabgxG2h9Ud4oARq",
  "key21": "4hoAbPbbxyLu8PTKpVcU49QwwqNySUzV5xVQbXwjzA4yKcFPhErVhB8enhxQktoAPv2LhRQjHPvdEWFkdSdVJyqM",
  "key22": "41VmEisd8LNu5woXDRAeGPsB1nkSNrPixeCx8nSqtAZ6C66DLqrrYpEuZJkeHF9gdBbQBCnAwJnYou28CUvBuD3F",
  "key23": "3cqtCFZejgu55PiPra8qh9WpgBWZRhD1XQiipEoaVcvs6NJNGbb7UDFYQyYJtXn3R7e6Cb9Vome4t4WPK8QKtEwn",
  "key24": "Dmamd2eS8d5jXnLMmfjP9447GXSt7LyGaR5bmYgnkmH2ySYZMUDYegCuNBSHottB7XKC59EErH6gDjjrQSmqBPB",
  "key25": "2P1qc4Ybxmvnq2fMKZPa3qY6sRvqm8jnpAqPTLKS1uV8YtcZ8BdF4qPKebXngXxdCFNAFQweYLrywtzy976EP7CY",
  "key26": "C2VtkH8NUtD46xXFYEm1xQGAFPAcouARgFvGTz3TtgS9BHdbffhUcVMuJqU36Ww8Cucp7trrn7xs26wzek7j8Tt",
  "key27": "3RNUXE5oLvvDCdvyJ8dhtSTzYcbdsaj3GQTmzRLDUpywDPzAYg5VA5oS7pfzLreP1ej6DMKhhPdRJbhJjdUy4C3x",
  "key28": "4yqzS9dfSnRkZ9SgVQt5oWcj37PjUeUbidRJ3aGPpvknYaiJZv3tCLWr4SV4vo3dg5ArsGoWjbDXfRQAoSM1x4xj",
  "key29": "4XLCeWfUjvDMTLSz3JyCrBFRLqjPobYEyYhoFfp2dvK7d3TSWcXos9RyqnLSegFLvA5cHRwjcstzfTzwRQFhpbnD",
  "key30": "KRNkuxs9zQySzcMicHK1Hm1eGQoEh7d4pcTyoedux4bT2poLHWsCcRgMvvS1amcAqcHYR42ikRaDFV1GTnN6y1E",
  "key31": "5R7hwsSYAD6eX1PkaVVm4tGzBdMF6WWCKNFVWx18idPr4ZpRYJmcKTCup3Gd2iinGdFNMKVoFNYHbR91EbEPUjHs",
  "key32": "671rsYJBfkBDUrZpSXEwyq9ymWEL2iSKW2r8RBiGm8cW5Dzg4eo8me5Sb4gKTDPzfBe5zBUJpWxiLpgU6Z1wffbv",
  "key33": "YWgHXYCGMxFwoSEUzEH2qsf6RZUncKNj4qmDydD51vcT87WfPE5zcac1CHiRA6BnwNkVC3efDA1T9ETAPLGn7X3",
  "key34": "4epd4hANG1ndnWVrVgyPRNEDc7KoQZAC1g6VZFrfo5mUK9c2foxrkvoeigMojAqCdr4J4SRyMaQypv2rgz44W3Va",
  "key35": "3GWhZhmUUxtXq2KHALL5ueMn4BzQ67s1EVorvq758GgzxckuGkuhXifRXEhsUZ56Rjt3RniXfE3uQPLT78VBd4QZ",
  "key36": "3uJuGr4EqtkJupZo7ZRGaSE3zv4DzxoeexDKR3TREhGMi47BHdMP68tfs76e89tv42B8yNPmeDwLb65zihf8USny",
  "key37": "6wwz74fsDrmsMtP1A9ApmXrMbtoexWjMGbJiiTMwCpv71Hp82CLQPpyBtXgmpdVyzSo5aKWkiZs1jQyTGEEHfq4",
  "key38": "2De4tmJM1UkpEsKZ8BgYGX9QFGuPB67H1eu12oYRfcLvfiSLesiwc89uMzVjmZYNDuDZTtmnmEB4yh6XfUg8tH6F",
  "key39": "424wpntybPKyQgH52RxdKNaKTmFYbmDyQE6DSvCmKQb6GTkqcXu6AVVN65BFvFHPFaLGDETDrSRcbb74fsErETRY",
  "key40": "5pZP2oh2rsFDsjpiVD4a7yMQNQw3pbbpeVwBeUHzimMeq2PD8svyB2d8PcRay8JEzomXN2nkv5zSd6m5Hj9yPfYB",
  "key41": "2w8fCCcTN3o7XqeajWcPN3orPBVSKkntUfJWhsUak3ugS2tELuqTTHFkrv5VwxPz7yTnkbWysjFej3rRPzj2f4tE",
  "key42": "5StwriLFVjNuebRZUHCiS8P119JUZR2bk5gaCUJ16nqBnmaeDMtUwRL8QtXVAWPNb5Q2QFJXjxXRdSagJfMGZUqX",
  "key43": "M2JSuMA3XGacE1Sp2sW1EWWbStHAHB9EtyyR3eoLPEtrmdAVb6ct7cxPUduL2Vpi76Dq2fpaXJGWg9DpB8L9XB8",
  "key44": "tGj5LGsbS9xVm8cv1zok3qhBLgcLsqQtHsSstb6qS9GS1AK97dh1JvHNtPyBG5fWgRUKRythZ41GtC1TwAcYEo6"
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
