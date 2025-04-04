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
    "2DPLa5esNQm74Lcj95WzGbAXNnGg3weFdfHFSfUdeW8wXpTUAWGLnPtrb1ajiXo1o68pb757o4pyeLmu9xh4LcQW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JYXziiJQBZpi9jgm5g9wXY17rDLXK1AL4gdjXBPyB4F3PbnC4Lh8T3kERTMR9vbdFtczb5b6g8hsGWzuP9JczAJ",
  "key1": "3KV5HmcM4czcUCaQPDtJoQfAbgf1WeMzVYRAKsb6EBLLms2aFaUpJWaAT3tnCa7FTmScKvU8yaPQDkLzNDmbB64f",
  "key2": "3G7KuULy8KmZedhCSiZuEgr9wAHiZq867gpCmS8PwaSVqxnduts6rKYaSpyyoXSDnWxnEHmfvhATGRrr5iYgKL6G",
  "key3": "m8tkZuqRDdGc1T9cbZ89eQhpuQtMg4sFGp2Y5hvhnmhJLWcFYfVPNTCR7ZMMEAxZJrXNBCe8FFdvrEuPEd56BfC",
  "key4": "3ESGerMxEU7nXHgPnn4WApfWjt3qbGTJcXPYvFkyFcCT6fsXjPeMRkZbdcF14jvKrBUNUudLtaK9JNz5Uu7NrooR",
  "key5": "KXmWasSPCuS9DdGQyVswYPfE5ad4uUuqeq1S2hknPRAiNzw8BsjQ5kaqGgW2QqbgMgkkTVhgnMsMUS9Jk9oRuf5",
  "key6": "4h51cJfKBUKcHoZ2rQZLnD5wtQguAYcoPbkFVwfJmj9nSwFQT5RQvp6LrMRcfKHw7TkddboLSgPtMH6Gbr1YWd54",
  "key7": "45skuF6sqKGgqbc8xP8f5q8Wpuv9Z3EzD9o3giBxWZ8HGD1JwGqGCvmc2Qy7JCT8EDUXphmrccs5vGohdq7gUHLD",
  "key8": "SJeYm5c6kqF2XhDkazffDcyaWrDvGNRMU2pY5FWSLLKv4MiqLC791Y84c62iBWvV3cRYZUV3tH1f4eCNZG5Ac4i",
  "key9": "4M818eEhxYAg1KZUJuH5cXpAhC2SmM9SCeKuHZNGEmSsC1JNHGoGJE4eWpLgpCK63xu4EjLBwo9aiQMAw2mZKhUj",
  "key10": "3XX2Zj8yEZ9d1hbzz1avexoSaY5ugyAA7zDK5UDUvddRER2bxemTEoD4yPP3Ebw4VvoQkjn6m2Usa4QBK3t9jAdy",
  "key11": "4TtK6zu1opkr1i2UF47PALVCfHFz99ZHtm6onvpziXsGpQMyDD4KDPykR983f1st1XDSCbRZH151F1L1mVT7Loro",
  "key12": "3teCUXYqZyMrssCz647Gwd73QYhLKos54e7M6qh1abAETBKTe6UqE5aJweciV4DgiZ5sonV1pBVixfAmaxk77N5Y",
  "key13": "4MKHF1RKowyJpNwrivyYFqVgtw9uHFiusD1pJhiLpirzNAzC7oZr55g8QtyUeTP363G6jSFy8RveYs7hUJkhouRh",
  "key14": "4ibwgFZJKfictWytsGy7RPaytrDAA1zQ78B89sbp8pEcriR8L7whrGceP4jMWnt1v3FBdQRCm5dunHEke8DKY7JJ",
  "key15": "3bLkbVKEMLam12ANsGsEhZxwGq5UVm1dWSgsgrvAtHe4SuWH8RRixvZnVVYxDAi3WWtEAAFih5CG8Q9Qu1rk2s8t",
  "key16": "2RskDqXS8Y56mwkwViBYsXi5BeoeXgfX4cdoPwfJuMX1xnXvt3cAdSwRVdipuiUoX2giuUKHJBoqn7D8EoXtMj1M",
  "key17": "2UgAAAS4vF8igwTVtWzs6LDdXjgwoxMLTdYGJPK7bfNjSzoq7Q1cJdGfWDsLtPihiQGkWQYjGAg57sk5VpwMPgm9",
  "key18": "5UwbBL9NfJ9huTt6jCEi1sa5xAt2bfnEkr8eFNG6AmAyV3jkPEHruMpXUFLWgs3FoKJvQdrNv27YkbVoj7QWhYwJ",
  "key19": "5nBGcgooFjXD9QW4Rx2kW7WsfPU3i4R93aGSX6vkpcZjrhKvHt7aiqUkjnAuXAHz698i9wNH1CKmAJtZy2qGq1Vj",
  "key20": "5d2e5XRmUmvgnzrmvsp5ZA3xcYfFccDHfVGGvTGT32xRg1KhZrKCBSMAikVtX3yY7cYwBCigSxuzTLnH4QRFWAaS",
  "key21": "4roKiGT4EN5WgRiQmsaKmd58KjzeeipdtNUVt2zSpSuUhwpVBTQfwpdiTjrcfCVN9eR9CtR1x61xa76cMqdexKX7",
  "key22": "2kgkHP2fSmA1pV4FYbPfqMj9yMf7fEwUxUkpqHiYJYhGPmbt2Nye7ttye3rMkJS6qNPNrqtDiyW9qagdF3N2ruj9",
  "key23": "5EFw21Ju9XGFRb784MhrDHp3GBnFsmheX8RJ2MzMPZ8FB7kFNssQTbqzKFkgBdRD52YC92mV3n77DTmhfyCmpNUp",
  "key24": "5sdBGBADAHh4N5koULCHH7h5uGa99yGCrjWLSFHzBpoWCaxwYmaHLznSjxbtmQooMKB9DKD2mSbR5ZJtGhM7e96Z",
  "key25": "2qU4M8toCpTNaNQG4Lb4b921yXdLuvCjXXfRiv289xpBQMmQizqawpgzjxY6TKQhnWJvrk5sp9g4cMheqwfokr7g",
  "key26": "35LFccY51Z1BQbZnY8brXstej7wamoE1vtbLTjFLubJPcGwLrWogUcHrg8MUVM7b3py7UdGWjdZkPJJ153yZxTmb",
  "key27": "66VuRPY2oVaxehJJdy9TKBkM4Z8cAYeDXcg8Qhi8wqLhyxERkKFE4SbEYvQT7XAWo3Pf7KH16U72J3zd2id8rtAq",
  "key28": "3zdc8s88aWyptMYo9N66cDT98EJMJ3HjUjmK5hxxJobGuYkpcBj5C5kDRrYk7pTCjoyvyxcmefjwcvX2NKdrEBxp",
  "key29": "31QFiJKmkyFVm2tPxT942VgQ2xG8fEfE1wEtAh6jGQXQgutezjEnqTopSCC9G7YqMdgxG7HDobPzmidJexFz4QJL",
  "key30": "29vDgvo7cDdpDUfonS2Bdnjpdne67UJs1q4HGhZFGUb49UQvXCAQZWpoCMdHzaG8gNGqmuoUmGW5NHVxgNVBnV9u",
  "key31": "56tWiWmuzjMw7S2s8mPysLRvxk4QpPhybJMBQfqVMdqiESAqYwqGff5j1N2YKRJ6KpYiZHfDzr8bMbEbr2UJPgjn",
  "key32": "3qGTWZxoUx6ci5FHHCReCf9s7XqwTzn2SxYS1U7WqnwQKBAgXcG8STpkHxQwefonDjwix4MbiKW2tHsqvWhR4ndQ",
  "key33": "3ZzP2Dj7iaTQ6ZSPF7mi427iKVqW8UYTwwwsh4bcRbkAfuCruFyRSzH6ZzEd4bXbP223Vyoiixkds9PUGAnbswAB",
  "key34": "od5C2FBEjjnFaRRnNjqX4S4Au7LsJQ5zCVAipJHzDvYJrbcmbX32oYr98RFSmQxJgpJk7YDrVCFv2nJWekFnadS",
  "key35": "2VYJ9t6FdL8Sthj4TGVxT4jLNMGx8kdiFv9daKzM7t4TZArK15RDYmyPw1YLYQShr4CydxfujMzqdMjBFVFoZmA3",
  "key36": "2RjTPLNMYCvXLsbFGdAsSXrZDGTrfenHcWrju7RFnKuYrgenDvKj87CntL6j3GUk4qN85MFoz4UZtMPb6usCKA3T",
  "key37": "5Ex8nwsXyiuW2aVPp8XYVUGMkjmiihiMeBihYkMYnmFQfU6rENrVFpZzFddQaJVuWBVvwiMrcuMHJ67sfWMJm4r7",
  "key38": "LvqNft5xBMR6m93hiyrYr5BWVCVZSpGvRdiHywDk6tJfyUFGy9f4Em8ZWgXowMhbywJA5AwUHbqiKuXt6UAWTyL",
  "key39": "3kaiFutWfyuYN6k1AeSZnKfxqu9hzDMCK2HZ459b1qyqHDvQrHjoafS15UAT4YUZDi2zV93wzW2FXk2jgJNTvW7K",
  "key40": "4jVRsGv1DRRxizceR7V4cKLwUutHJ8nsc1AF8UkQPQvU3qEzcK4ZJwox92WmmAQ3bnVFC9BWx5qcJj1qoYgTC9by",
  "key41": "3RdHoCxgprB9VJcohvHz5XEAPPe2NDv9qzdiW2DTE3sFuRwGQXGeaPB4Ne7VcSgqN9yxSkXpbv6xUBCXSGqEm1hU",
  "key42": "55Z7UK9SYgQQKNa5Q2EdY9kBMTzUVYmngjDYBnu5mhhccAg8t1MYfkL5nj7LKo5uDBKu9gJuFmeVcoZbdW2MRv8J",
  "key43": "P2rXnyJY7x9RbX3rFv9hfE5EFEJpkZJ8Y2xY6D14UERXGvnSyxk7Dg2vSEfRYsLReqW3eSUac52wH8v9JVMBvtD",
  "key44": "2XfV7B1VE5TjsGfhm6ugJCUnSMLuX87J5AUhGAn9aycvD57n1jXWSD9U4zyWHsWcoa4sYVKEMrs74x5SqGqhGq8F",
  "key45": "25GNry55BcuVkiK1UZPVenNH8GCVHZmTVPNqaTNkPztS7ektrBzdZqrqkDWGdKrAgKucsmvSKAfBapgW2nTzcu26",
  "key46": "5KN8HLdHrtF62pdEfFzVoSXYPqyxwYjbwcFxNmwDYJy93UJ2Dap1eEVWox3Lz3Y2jcD7funZRtA1feAAdvVQvxc5",
  "key47": "23XJj8iaAiPSN9VfzzoMvYujxEA7m9Z77aBNifdcMYQ6r2jkquqs66PLcxbiEsFKRWGgCAdSMoyY3EKN9DfVHzKg"
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
