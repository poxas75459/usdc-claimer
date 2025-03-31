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
    "5QikWKmRmyJebssCsXBpsdQYSX77WhqLG9t1hwYpWTyQWpNYN16cafJjevJj356VEDqYsQC3ybMG4LfaY3YXasPd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JKuNxjBWrBgx7dtbx7eXkgSDsPaauDQnTw91rXmm4p6ZnBUHjGC92s1Rw8r2sYB74Uj4dXtwxLsLPyTTcbU2qjm",
  "key1": "4M7oTxyfmU3ReLKjxjg8Q8QbS54z1SxYgNqaBMrtYERsrwqyu3owR7QmT6xZ2FFRSQa1uNX3HuXk6v2ii2TWFjfz",
  "key2": "4TwgdaLPPzx8HD6rr2kKxoPsF9caQcxoL6thGpVVx3zk1NQKzi7mSJ6tFy1FoieRtgJAAkyHFS3MjNj8xySX7NpU",
  "key3": "3GoUwSKLnrP1oKnWWiSRsFap47DSfkLDoecjosVnzAh3BHspkchFaxmKNZNA3m14dpx6A7Hh2DJFCc8sJrcG5s49",
  "key4": "4MjGw6gntYLMnfkRVpyYXJWNLaSicUepGMLxW5ej7gKdiTEHMXpA2UGR5382EMcwBHP1Fu7dk3ndYgg7DSqmHhit",
  "key5": "3PSxBhkRw5SufHTNUx1BU8BjzoeoVsuzghggJkJ3zf1PeqZtKrszM1bWRuF3ew5HjPHi6tDnPooAii1FHoq2T3iR",
  "key6": "37m9ho89mD89VzWJkw5BHJXwqkvxzkyTHEffhWKdfePFAJdqrjmsimHLeQhmJU4n2ZofJd2dCVpTbhsaeBuzgN22",
  "key7": "2kTot9AbN2qAJxcPgMFnpcRB76pjcP2ADNc1hg1DdWBV9pg99co9ncoYYd4HhgPvjBUJCUhG9aLqSzjPtgm6K8b5",
  "key8": "2pFYp1y1y6uGdRKsYaqEjAFditYU6U1UFZVGCsY6oLTHd2cm1RyHh4LNPyi64ajaeZQmnhSqBTdLaiMZ9JosQqCh",
  "key9": "spmC9eRtn5Rx6pPs8pAaYGY5rjtqWhD5dvfQStMaPjjzo3uo7S6GCHYB2Gc8P8ZZNbGvKsyDi8djhsFvxyLU8Yc",
  "key10": "VqyqX8E38snt4oHQLoETf5GjWz88GiS9Cn3kRuZzwPVXb9o5wFk2xPaXpc6V52qfgYiYu72oRTYtjDJCt58cRxb",
  "key11": "5yz5rq59GzHYY8KLB84EewrqPvmTbjrjy2Yo73GaLHcYYSepAj6YRa9eHkRYaN2oQvDrM2UzNwD5YXtUAH8twkeg",
  "key12": "GK9c526s74xn9bU2WqJ9eJtcg8EYowxUe81zALzvRf8UGVDULHC6wfbPuLkgSyZAqjgGzCWhuCpuPLBxUKYZLRu",
  "key13": "46zotJhMBLa5CWQt8Xg8rdKQzRr8m11BKar4iZoXhfjPhQkPTfCGCWTXhhGZCNMtRSVNVYEL5B8akKaerJpi5VTF",
  "key14": "3THyo9CNEKCmHjkmrSCxTrZRqLt7tsQpH4NxSRjddRn3gkEuVGTjautXXfF9yBuNPPBQjgrJC8KoaxYaT5f2Eotv",
  "key15": "2yyZqbt7kvNh4CmumnxqhdrbUWuRtN6FvLFyGXKN4ECWfGdtBYZXTYMnUiqFJjc8CFfuKWUoiouQvsMLG4nefjww",
  "key16": "2PnZupJKs9QLiMp4vgRn78BirGqVENMUXwaCN85LyJs8oHApWNSit9GAFM4S6f1giTyJNSG2t23oA3z7MP7b8NMR",
  "key17": "4csMTnV3rZtQ4MdE83Q1DQoVbKTeDFb3KXSLx3zDWp3y6toUBhSXVwEe4hRpXRSQLSnAJ8uk9TjWiB3qJZsDV6T2",
  "key18": "5CPdBgeoZECrZjc94kQ15y7VwcKy4za7Ctf8VcntWk5YtxAiaD4LWQ89Yf8zDX9GcwY8hAWsJSEiLa68z6N25hcc",
  "key19": "dQa3qmQozfENmcvQuPfQ25kTTeozDsvhvaZXQBM3EZrbZG8u2f71UPjzsxtPf12vSkBaVS4ayThc7qqNYJ68Rzq",
  "key20": "3JBZ15TfbpCDB4dxqLWDTYHGyah7wmp3d6UU2xoT28yX9RqUPZums1RTHxjfea2tepKMdk7WncaWxprG5zgcda8j",
  "key21": "2TDCZU4vFGsUfD6RB8MpdeQy5VVT7ZnCRnMHq9K4uiWy7Ho9QMshqSL12nEhdiJYAr1hTqvpG2NciucPGbiDoVac",
  "key22": "2ZQzz4PhzYPX41NeNLhzQa1TWBp8z16pyfxHM7v9GH2d5ffvnJEF9xd25KBzE8qgueDwR24DJH2GGsmVFBghCFMP",
  "key23": "3U6mhDkaxGRxhPBLQBqnKe7dybRRyjvD9gA6R8RhKdKRon6hnWwzBpnXMyP2gsCgby9NLqbX5Uq9CU89wF1FAv7G",
  "key24": "VyzvxfJYvFC4KB1qadQ3H6Wm7ECzDn5gyCa7ccthkgw8XkFtK2FfFYcsW629TFJK22E1wzC3vzTZ4sZZ5wXHk7m",
  "key25": "5PhskD1Jy5vsCge7EzwWUiZYRdNRMnGt32tLf8tngvwfTWfgAHyqXFTe8kUpQRKbEbh1p1XkwZphEBzEpkzyadre",
  "key26": "3VT5EDCXDkgJCwPwjkpLqchTTtg8hJucpHTSHoha9dFVbXhy9F6rXwrGabRQRKdCzXqtqZYzaV49KBfVQZMGry24",
  "key27": "Cabqs5j1PrCpSvTmp5Q1aQjn9jpwDGxqCAE8rdPtTPNt21aDUWKRTSs2Da6MK8oopowTHn392NVvjHGEvPt2RuE",
  "key28": "6kBBx9obYDCw9MUgiMQYQgzamomiZQ6xnu8k2DihztnUPoWVn4QBn87HBpuBhhPJN1hR8LcYxRzKQGQtmLePnHE",
  "key29": "3RoziLXLBkYTXTqS983GU7VTALoLBXSSggVE2CjTpekjyif5LMNjGuVk9oo1J1YT2r51FZ8eQXgcWn8zprwTMTbD",
  "key30": "27Gs1HatVq4sHbHmD9Q2XjsqeEhTV1ptRm8wJfLfpbaiPFiBEnzJbkdPEfP5noufL3CTTRxSFvTfGZMVDg8wP6ps",
  "key31": "4uYRHRHQMSKNFNY1PGWVuXxPG6GBy72XWXL8zuC6SFEQKrX5GH3TeUB46rERwi8nvckzy5o4vHZsMpBHuwAMtNz4",
  "key32": "4D2Ca3D63akPoYUVv8NgGX1GnSRuDAe5V6mXaEt6TY9soJeZ8G6MAPwRpk1BdVJkvqt7Lt6Z2VsXBPeosTzF9gYm",
  "key33": "MTzypP4MYFDjyM5hUnXr7GNRodgANnJaHt2TUBedeLb3xYeXjYX7PFfjthPeM3wkiQMzRVD2pgMjyPF2WQLEcpg",
  "key34": "3FuHMWEAVdsNXKVUucZM6ehjNxAYkNTSroTkfvux9sE3QmiyH4bG92cFVF6F3BBQPwAxFw1PN7ibxkShPBWWwjcm"
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
