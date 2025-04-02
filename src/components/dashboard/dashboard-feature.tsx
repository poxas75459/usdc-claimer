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
    "2r2CoDQwaeHneCBCP3U7Lqhg2AWxhuQ9qoYTzTsMWv85XaNT9A6ZUsHZScjNo5hTGdJTePTBr2Mm166H1qFzUd4Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K2oMHadLX9DmCSsRaTRrvztWYSQmhnLEH5Gmdd91suA6iP2x5ZorxKVhd5oxYHKLinrKQbC1YHyQVBhbz5NQfPB",
  "key1": "2kccryQvBVb8Q3tt8R8ffMmBjLG4gbXaFWNawezLszMMQrBm1NFyEKYjAhsToBmKkKfHaJtTyKuywykZv1rge5Zo",
  "key2": "51b6WGweSaHoK5eNt4swwhy4HHahesEg7Fr1mXZHEYzATAKm6DSWa1sweATj38hnq6My75ScrimBd63RSXCe176P",
  "key3": "37pNGrydSqnuEZE65ETdqrssCr13z5fao5FGqD8YuPNxUmmuSKrSjxrxjHdf3QSuWjYQ7JybxEpJNVyea2MPTzSd",
  "key4": "5ELoL8heo1saUR14mQdTyh6e4fk7x1M45ocinXPYtA32bGPKyKpo8LXnssxhNytVBPdpuMq5DRCPerYCy8asXsbv",
  "key5": "3nwXNetwRbpCqTEgTL9o15ssATwHJpSynogJLHyijKorEjnQA36EoC1om44LnQak2PimffxnsmhfmM71UQH4T9hg",
  "key6": "5ZrZSKscW8P8WLpBRt1LfbBzjodnFzCf3ZgN3ZdRsYgY8RRvgGpGNnHvDNgHyDjcDEfgNskViZM9zpLNHhWwMj5t",
  "key7": "k9SiBPmGC3wx7ynYdCFaeRcJUXVxVDuD7y6WpVh2LggyAVXzcr6HufWwmQ51LWNJu6hd9FcZXsk7mE9qwiauCsJ",
  "key8": "2Qv4m9oRd4Yx9cV2Pq6fodHFJKzj2a2N7zTWkN87m3FWDrY5UsGmhC5q9jM5f1e7Di6DLxtUFWHziSehXe3CQRDv",
  "key9": "T5WuvKmAdzAQsFbW8TwaudwTAq4jCqgyVQtVtavEkJYPASScrGM9aMqf8UKNbiyoAidxWG64GS7KU2zBa5ixnRe",
  "key10": "64uYarwbNXJKUmDMN6XzhdsbEFqoJ4USv58s8k39KnwiBHgJWF98DbSWdWRyv8JeqbWLLeDLX8Qx4Vz18UXvABfp",
  "key11": "4dbUBQ4mw5UednnW5d3Cxyf6e8D3ypKm19sPFnPzScmuddVbSoskr3yU5ke5NomCBUf5ES2ezQV2irooMLjQcc6A",
  "key12": "MpMYCdUREh9aGa66Q6wvMA9NAfW14MkuyztL154Wo4PbbzfmMDtiH2ZFMwYcwTCv4BgAdGQqX37KfZDqX3XmPU7",
  "key13": "3x9rwTejqRG7SEQPJWUq37p9VBmbPuxaAoN41T95yYzqej3yjoQa86tZMUpYFoxzJMG8ENQcFWymu9VwEYuf9m6x",
  "key14": "42bFRAxWLDkuhUzGoepG65nW2stD61tir2Scu8uDYPEFYfGR9pr2YgJboYqEvAQJ8XGNS42BcWaTWeCjCxnyHCZZ",
  "key15": "4ctEDQghds6sKVGVTrMaFHnu7Xzbu6d3ZboAJMNcH59RYpTc5m4u7UizPyWF6Gjb16J82wuEDrCGsVjYps9Pkj3z",
  "key16": "4skQfKbwxv7frPw5wrzuVtVQ1sBAXETiubSoC5rPsEG9h3r6SttA5ij7EMq39MsYBxnWfNoXdE6pgvzrcyFKLZJz",
  "key17": "Hpta14oTtXDo4fB2USGixbuht6VuoVsD3YN5gYkcD93x7ugsDeqR9uEikYViDnaXnhyuFZfGrETz8qMexgBZfeq",
  "key18": "2iikHotP4TTEsrb8M29RMVxiJoLZNG73DAQFSFpixN5YFNJsv3GE7ebt62cvx9SAAGJPtfgqwVvEkRHa6M9ajCtz",
  "key19": "64mtQA7d1HucKxyd45UfsN2ApNuFrpGkqp1Jbe7NYSFHaE4pVrNN4G514mdNa4W43LtrRy9J98CTbvnEpwis5mMr",
  "key20": "66xVpijpU56bG3RH9kuDF4XyRMU7PyCgWxpCi3q4hVJdGB2GKQXdRxgNmMwN117HsNX2oSvraYPPQTV1tGhX5xwX",
  "key21": "jB1Z3SL2xJoevJd1Vz6ECwFj7UXigPPimrA7uh8VonDSjGxHnL6asNwF2bAFdk5bqBJoMymby2zN6iRqvfcCq1a",
  "key22": "49b5oWztLv99cYQfjLZcyiTiteUiHSjwErgiSNQ7DnkcnbCK9c4xZAZUGuMBmZhYQy7nDV2ZqpuP8QmSVqsEH9v1",
  "key23": "6AAKRQQN5f67trRiQTJAo6FQx9AAHj5XQvTT2PEiubnhpC8Dc4xcnw72pedbeUrh4MAoXNx1TxSAjb13591m4Gb",
  "key24": "4StZYPQfFqGdp21PZ9RBwycs3TQRq8utgJL8D1MXc6Gz2p5q3S5SZeN5TooUVXZYv5cCuT2knRQ3WEJZrQxc3dtE",
  "key25": "VAYjSuhATXHW6XSqPWPPmjJMMRTbZA1y3hc1XvomELAFkS4K9XeS4Uy2V4HfWfcBCP4p88Kua6eLB9G2waRu5Wm",
  "key26": "5sMcyHFTQxXM2HL8XeFpapX6Kky9cDaFb4HNDLNAcZTctnk4SUNNkTWrG2vYR2uvRa3uVT7qG67mfYy7Xz8NA6x1",
  "key27": "4CkJcWXyEcKnbJwyxGEPsf1pQRaAbW6khB7ePF7WfdZToRKzj8SKaGHDQhvnqXFuEpfZ611qNeuWN5aJwJoWQGf2",
  "key28": "4GFxpYwR3X54XB7BCUDFaxMzggYQcTXKRFp8GT1bkJmKRVRdzZQGHRKBr1Xpy5Jriu3yRCuMyyoqk7gu9vvi5PVa",
  "key29": "3NyHpExu7PJi3q8K62hhebvuepkPWSXSkWqYDQYqb5MZR5ybmD2dtPXzPcz3BWR9un5ZiegP5LrfX1Pzf7AKvBdi",
  "key30": "43H8AjaU9ABFwiq8GEGFB4GmvCmA4KVnzds7VyzV2bGtKLwcwEWdJ61ULZPCqp5wYRHroBH26GdbDkKFEYZDmVRn",
  "key31": "3Z711v7tVT83y8HJTcdGVs6azzoi4xtcw9qj5n9ScE2pMNbQsFGnru7onY1zDb6EvyhDCrF8qP6VtRWfvGRXnLjA",
  "key32": "4PQRPU65yabitT8FxNzLeHKSwgyPNPKm7WZ4uGDu75GzX2VpdPmiC9LD7WijXCP9CojEwhHo5uxbBYvP1zH2GHmJ",
  "key33": "3bPdEeMFXpyonkqdq29RvYpcCycmjHTqg8f9QoSSQ5MByVemM9VqCJV8wbL2iJmVPPTSks9CrRJKUTDgotBmgkyz",
  "key34": "kEg5W5rXvZBNAtYC6MDeTgNiLUKo37UfGW85gWEqmSJdURfxLS1n9gcJVkHeTUyCWrQ43EiRRNV9TphRtCK3SVq",
  "key35": "5NGpBfDV3p8NJ3jVzykdZDiTKLKftHFf9bBGFAHDwnYCWR8kagEJnJwUyvuQCbMdogtyT1L58JbST6HihueXjFQ5",
  "key36": "5LgUmx72XD4RFx488C58C1bYG7aCuicJG5gGgpWwGteHxxfhfmYP3UqrFafYWsEzYMAnyFsrz4FDed6NQfTuTXC5",
  "key37": "4AGnHYmoo2rbizxfphAiPv1b9upvnPn8LFfCGvn4vrigwfxsbHhiesEQp6siUeW7iVzz4GqU7A8xKXP2J4opYig7"
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
