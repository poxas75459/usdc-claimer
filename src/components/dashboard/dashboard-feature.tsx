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
    "5ccNJmckrenhe8Z2HARTdEwtuARHL7h1mkWVcYLf6TAWruSTttB78TE2twuDkqZgHA5Wyne5hpVzi71ncBFAkCcD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5835dgSnBmspxaDd7qgGUHmRxotzeufRi8xtA8oAwR2kYKWKhyu1fq5xTcJ8Nv2rCdjd9BEs2nG3MFXYxH8aKNKi",
  "key1": "3QS3X55UPN8C9Fp3Vr6jhogSKYDMrRHyMRNvkkjcra466SdCQMySYr6ddoTX8BLm64naYCS2vEyrPqH1BZH1tEBF",
  "key2": "55VeXxPpcgg7bYR9NxySWEDUruSzp6VEWVswZ4DSeVMyfiNHtXcn6qn7n9vTJpHFiR4zj97BTyhGu5YPUnxecR8X",
  "key3": "2r3nqYA55jufP4U2uismAhfLgqkFUAxwcHhZbmXr4xMjQSNQ1rSBfr4n8wJVhNKnbzunUrYfvngAKYigaZH39jJB",
  "key4": "2mT58s6NqeyBxRmUBqM81uLVsyQqDAGFomQ3bMSsij4jR9TA7oS9BTM87RKc5BAe3kvfVWzdkqB4y22DVxXFMKMH",
  "key5": "5FPdmTBTJZjUSqzL7zyRRJrhtdsqmEs3DiAv95Bt5HebMQ6fhieLMnnvKNUhYYuts2CoY1bsoDbWsDdWhcW6CwZJ",
  "key6": "2vh689cgVJ5LLTuK4cxnHjAoyAbF3yXJsFrq4kfEtwVrdYFgSA5t7jbv5imAJjgQTYreKD7mSmNDb99Pv3KhGm97",
  "key7": "nMdNyVW6qYRTtgTPPCDM41GC8NHmEUKmLpgFCYqUK1m9yL4zU5MxAeAx7uzJ11QVMXtiEAwNyMigqgE1pNhaNFZ",
  "key8": "3ZEiYhsPvQaLYjyevTNc1Ha7u4t2JCuKEN93bsa2XmKP9DFpNwXwaHPTzmDMzgU9Dc8yZco99F1CNuYBpqkVL67G",
  "key9": "4BYHNifat2HzUKdLa7ufvf9dN9gSjwzK8XU75E3SwdsqrkuzQVyEDETs77nNaKTg7hMs5UFw5coPFn41oJcLmr1s",
  "key10": "4cKwv2GMJr6g6eeRwjAuL1c8y5NFb9TNhcto8UGrYQ37XEgXeCKsCW2voWJL1jWGz88G53AhiCrJdQahGRap44mf",
  "key11": "3AnzFTfZwkaZzjUBfe33UGVAFtVbhwhT53FQfcb7Yqf7nMavh7qx5GQXi8FxCKNqZVsK685u4hXcUNebaQZmG3MG",
  "key12": "2yzPBjqygZRzZjPJckCP6jkLBNmPEhRiG6LeJ2rxoAHHBxBSrBCarmUpodybBoG8XBhrcK5nSXjSFMfKsADXaHF7",
  "key13": "SqQiEuSnSCayU9pmh4crXdpUgpRd5Y8vZW3J9SGuCkdjkNeUWr9A5V2cGtjwRMQhVCnEWH9JJsAd9b8RcVxC8aP",
  "key14": "w3kRcywLgkzNofJqfZvGVevgFCdec9G7jrgkTFtNm2uE5xhqyjvLmcqnsrsBDjNwDquJBEKiH4wTfE6RoHCVRp1",
  "key15": "NRM5wkScM32pgaH51UgLE85Z7zowHXCEYfRmTrJYwchdgcfA47iWqevNZ6wo94KFLcQTJda7AQK7v8uCbPgTTsX",
  "key16": "34qgD5SiPm5q3QnpwMczZ4RW9xgAw9ZR2EHkzww2BHhZZjDKNNPbCKpmzSd2GDVcBuBsWBtVf7QzNHHS69XrmCKR",
  "key17": "H2WY9mUn31MYJ27tWaFcFRFx1L8wfc1hbAqCcT2Fg3bfXDuhPASeNF3mksygGFydLsMUANuEVR1gD3SQCsjnQhm",
  "key18": "3R1WUTwBTbSb5BLHQTLmgqSSfoVbgkRwozUiXnB223nk3wNQpBCQfT3n6vwABfdRmQCG6EDvUb6DhHurKkeSQrx7",
  "key19": "mPTKMzpmF5AwdhZuXo2dWxtCgCB8Ghx2aksVbayHu4tm3N3cpD2EVa4fx3YfHaGW5iiKcYBTU9bwYV3uRbLE6AA",
  "key20": "3pHenS119obPqHdb8BWsknCDgGYg1AAYTa45jaer4D5df4eVtCrdXQ8yCWkXZXSH3HUD5eh1GwiHV5nZFA8tTWUV",
  "key21": "wLVvMFG2ZFSHF5u7Ahrr97GFWB95TLqhQTCH2rqqbLVRx3tamN6BKJXxunmQHnRPMJVdqgoJWNpHzHk6pvK89iE",
  "key22": "aCdCsWM2guQLjNEKoX8QcMpCuKLuP9Ex4mspFPywuXpZ6M6rwiDjSgunqgCPbGJqqk1UKUncRS1vzkiCtwQVgmK",
  "key23": "3iw2Y62wgm5ZB7EmU4Brsq8xHavvQXnuqq12o3jza4GsYrEoTjvmj7LAuyWrXmoVEEaKhMUK6ZuPQydGVAC3cPzB",
  "key24": "ZQhwhpgnS6nz3anDAaERDmiGFgh4vNR3rn3wxbi5sgvyTDMtPR29oER3icjsZX8Vf5KSktECQNnBYvTgnfbfcbG",
  "key25": "5PNxqUKtdaUZfLgapSTaQuvQ6sxuoJDzzXv9JeSpDoLvNnhMe9vfAyzvuEYm16SP98rE3KBD5VvPp3HusxwZfTKZ",
  "key26": "eZJDR2zoE9SoATE4TW82eHabFNwZEWFQJT29KrzJ5QZ8ExWPtUG4B27MBDMynac58yKC3cJm6VKP8Pp8jZQTftm",
  "key27": "4LNh55WpJHnBNhCs6unnyPKRUYvmeUh3FBAHF1n7keVa63GzjCYe14JsCpN2L45k4NGTQauMbV1eKvFcwtrwqvZh",
  "key28": "33TRh6ySQP2HiLzLGHuYmPKZJ971oxoFfRYsNVJicdYNQHM5tiQ5gawVUQBnZ4iiknTwo5KZpgTU7ByAsNUFsvzr",
  "key29": "4pG6ph37ZeHtjkHxmGCzHPFazAhkYz9GoKzjFfkoKv5KbtHpHFuwNgoFFKNE3TCwuvCSWzhN7XNhhMhkb16i3y9R",
  "key30": "nqEsWuJhBDcrvvH9DiWSSDFrz4FTWk1BtgvDnWeqjiVdk4fvk5P1hQDtn1Kprpb9ht6YFyMDXcfnmeG6ibvWYhw",
  "key31": "3DhcumgBrYu2ZHGVWm1VC9kgLUMj2ARjWsXBS5jwppVdNM17Htx2JaWFCNTVbSpfiA759sx773oGgj7FD1gPyN63",
  "key32": "3Cz96s1tacBhMxZSrWz2unc4TUyKZnfKXjcavdZuv9Db1ezSwEzsFP48bm1Hd3wnxoW7mSKDULgM6d1cgqAVNoFq",
  "key33": "5yUerxripj8id1NkAdvKYDRxKzk3nkhhZs9zAWRe6ZnZ6K7v9UApfwcKF7bkqr3Y2NKqk8inRUA88eJ8vbRyyrWG",
  "key34": "SfLJ7NA8TRfH8CprVtj9xtw3fWhsu6Fem5QFuPGY56qgJVVHjHKL1f9W72uUaD94AfEXWJLm93NwDkyanLUotJj",
  "key35": "3uh7MVocezmt4LBqiNQUSuuijN3PVH2N4FX5g2eW7ikPV2H2KjrHeL9cvKacm2CB14ZEw9G9wTNjfxfjYASrdejS",
  "key36": "4D52DXsfapekGdLt4NaYMGnqaaPdizqwgoLpVnvAHWmAvFtHcUX7Ew5jGHfLcksqgJZ5CUutXsnancqTgtKxDQ4r",
  "key37": "5tE8pzkyB39yHKGA9b3yyf3y9BnNm9mPy6hc7bwYGJvNznnZ1MuMgVTVQXmbvdVKK9F1enVnKZP176VZcPuTEuUy",
  "key38": "3K9pmW9U82xkqG3KwWqxf9QAhekJuQ4Z3sypN8bzNNVG9igbKrWqcuD62FefBeNbJV9cDqLsjb7STTTALqy34FPN",
  "key39": "4juVPkkteFJoTdbQU5o7TJmkyNkMSWsopt4Y3k3UJG39k8uktUMYvefoUctYxeaZoanFpiYrhzdVoiaPsLQcs8rn",
  "key40": "27HukfjKYpKyKWRjK1RZDnrGGkPd3U76FuRbUjVnxiNrNAfJuMBCdUyMrK5jdWMFykUWQ1Gdu7E9EPt3hzjdaqTv",
  "key41": "5ZZV5XqWCLb5ihkEfaRcNY3m58XcdrEQvDvRGWSiUze8uTkSwxnPruirSJd7KBg3ooZBPaauygBnT2EDn8UZE8XV",
  "key42": "5swhAW74zqsR9mKmdZ7U9JjEDFsbCeAjhLygWJ6Q1LGsSqWdnHDSVBiNKkoq3piiVyFnCzSWeJS7rkbcbzkyoLoi",
  "key43": "5CCHoVCXAcihieFuGDjHdYrWVn1EaNmMxcRX2SMXoA9zP7Mgh3W8qGepfBcC3Jb33zBpWydxRGK8G83syXq8TmbN",
  "key44": "ukLfjXAJeJBuK6x7rwoHdQ58Anq8VWDwxRyMt3GfoQhi6wnCwFEzFKdpqmoi47MTPJpVvsSz5F5e6H1m4LhfPCL"
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
