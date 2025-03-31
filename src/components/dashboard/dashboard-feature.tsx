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
    "26nYjTSNfzRQ9zSfeVmsU5dmSjctiacAAKbP86qiVasCB1YCogvAit2hqE82bUszHZKg4VNxAV3VWLDU7iNYbDMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yepK4zXmFkk8SQpWQHsvxHaNStrLWxCGP7SQ7Kfd4qFECiWUdJDFCNTDa3uYxfhEGzh3xnSpHLW1M41T6NUpELK",
  "key1": "3PrZPLeK4oVZFVRVg8huzC8DK6u5HMbiZphSb8KxLS9wheyFBaxM15BWCte4e1dDitth1StM7WQjnBcuu6hn9SuJ",
  "key2": "4eX76FiEsXn91XKWxiVkQGrb1DPFsp39juiM5xxowVx7np78aVXrcxz8T6YjSuTUZ8dy8P1EYeWHtAE7KFU3k1sT",
  "key3": "5vL99XMm2jKUfkCCjka4MMtDb7XfKaxRZvaBd3bxYdLe9KLXvmiiAz4qJXKQjX1Yje8N33bv728cfid82aGdwm6E",
  "key4": "2FMJ529mNoTbWzWVjN9f9Lq6AETvcT8cCkf9e8ZDHmYRQJVTvgyeGw1p2ggaK2zCS783Rw6uihWYEkx3w8JxwyHw",
  "key5": "4wZdtXgsaJYwqZRk9NK9S1NLfh5ktyg4nWxEREg83K3TsdhjRRrHEgW5LcXLMpoYe5ZZawVqYfwtRizY2aC7Nvrt",
  "key6": "4EZf6vHN3nbKyq7gDxX7rfCx7VrUjmqYxKe68fQk7V7zeM2apHtJdDVqTMPL3b9jG7KPw53o8EWckBvkAZvudVf",
  "key7": "3R7mcyX8twZwVg832CBJeuztjdS6yz9phzcXiG7j7gcRWu7XHVDadXGsJuBnpYug7FER3gqcy7HQRMgAbHF9uiAJ",
  "key8": "4q4PjjEQsk7jTZYydXAv1BFMJum5SeBU2Lp8mG6YhMQ8DALhxZsBX92btygZWgYT2YzMfLGQoShURfPShSYU9X75",
  "key9": "29xpUXMXcuwWj4UUisVtrPC2cUGQL74EirEUj4XGzbXqtq8uAttb9KdSpPHEqWcZuBHGgJa1H7gy1AG9ChHeMrby",
  "key10": "5NZoe3Tjy51YfWvhGC6Z5bZWVzmu7cAK7J2Z4rYvaXmTrfHc2sAaqLhR5Tx95UdhmYSzt2TQpF9XtejCcRvJsbsZ",
  "key11": "4cz8Np3TK96tz18WCbxaR5cCuFmEHFE66Frq7roGHhV52sf3wgT3P8uwc5rmPy6gXXAEXVfXxfyLKoauFKpD5hw8",
  "key12": "4GbQCfFg65inQbicK8sqecPc8nxBpQE4QU9NYfzHHtBNZsjpPbxfvJR59wTJQRmgijXCFTyf7ktkjM3axjvfuN4D",
  "key13": "3W29PVhVnnoKhtr211oudMLvTi1AVCuveinZYJu3vbM3Ez2jkicRKcYi2NXEqJXBoanRUNskJJxcBf3haqdDpM5V",
  "key14": "5MJG4KPsPdW6ycGHC9jSNybBr7RLQWyTvBbhsUNEhvPuZBB25yMF89mLPtiXuCqvycuyGtSQwNCVrdipnyrnAVZ7",
  "key15": "47Mt6RckjLmN3NMRJouCu83snCs9dU9bPg99kAufrgXW2cVqQ3zvkVdN6dwygP1bUtwDxdfe4STKcS7bEEBKHb6A",
  "key16": "2VPf4zJ33tgVHrwHjPZmzNPWHSYgfieqzPZBk32Y7MGgLTzdFWWWBAH2yAysbAad9vxEwnvmYcRFMiDyjwTqkHnM",
  "key17": "R8WL3k5XPJoThqN69PKNzn8WbAqpifeoNZKXM92nfyFCUGQHAEkh9bXn5bzu4ecQPi9KnEvfG6QfrSzEfeutAin",
  "key18": "2bzUXkSyqiETDLhu4P6FrF4coPSpZHhW38K6qqXMBWejGRdiKh93NNWMDuUUU2kXruXquRi81Q35PdtKT4MYTpvL",
  "key19": "4tcXpUELGEiHe1LEojJsmLzBDbwtZrvGESY6eLM94WTLzTtTME7k5W6EQyY7ZbT5iCjUkivgmiwLsLyGTUcKaxpS",
  "key20": "39JsAcrfvQLqBWDYBYJy3KXXiCe4qDtuPV3fgCWLFhAntu9q1Ng2qihiCEvV2mtAEMHegZHPACHViSiawG6zNzx5",
  "key21": "62DNxDEgJyzpKmWYgzgzjswenMxfxvTsVNjbAJkiHanp5ToMUAfrgC9V4DHkxDAMBH1H1QLUVSJg1egVPAXRSFxS",
  "key22": "5UBrfBnAM93A1usUFZJ7osnGYjdhQu5FtVyDVhU3oXMobKTRVqZY4npGwnDH1tjCX6zXtG63RsLawvwvxp4fQ2Kf",
  "key23": "4ATycY3ycizSYAcPrGPW3CaYf6za945np5wxG3Ex655HFQjixSAC4q8taZLHi5xwcc45kCnZgBGUfwYGxbRiQMAL",
  "key24": "2x5eyjoR8K5cg46ogPDa5kGBUQ1z4xkmBiA1kq7ZTrXN1BW185QGcB1TF7J8i3jVa1nPYUu5awoy8Ly1zTAW45mB",
  "key25": "5QxinocwQybdtaoqXLzfB7MHzgVx1ZUWsMbjL2jqGYxYh1ywSzcL9TtVeH8DfN3Bo1o1yEoJMc1N9EmUfXbq7WS7",
  "key26": "45XaGA2uEfgcbsLvi9XyEb2bmTJy5Xujbpr9ZQedfdQitMatyQyLH24FHdoPbCZ7oopqrfZfw1L2eLcQYdVFcDZr",
  "key27": "2b9ojWoqWqNgJUZ1t2FJ6VT4bJ7HZx68xQgCYYbwPwWLXXZzF1d9K3uh8zFdrkNXUoG5XiC7h2VtfJvkuJAaJrJv",
  "key28": "34XBDgGKrwhFeHbmWPmwjQ3dwX3hLWXiXZsqw4k8zQf75AqfPoC3zQVx1SQWKgGbD6RREN5nowNroz4R2Maki88K",
  "key29": "21tZgQQ5RtwHmmq5euo9mkTkt8UgDjULCn13oNhvm3h1QFimXVLwa579pxkF65kT39EqtqCi1tnuhT9Avpx2dchs",
  "key30": "5jFEQAWyAtZ1fFy7UwrSDThWVZyL5ZzVPaczjEhqX1ujvkhrJ1JHqoZUAcnkwzM9cSujLovc3eieeHRLmhUYKRN4",
  "key31": "pfeY8izcAH1K19HMvDGT1gGS3ugTyPWLt7oNiLgszvN9i63WEeffaxC5Nn1WLXeKDU1QpTCkthPWKjZGw91oSkJ",
  "key32": "2ojW8uiDJLDu9Rn53VQiTMGt6H1WGSD4eMoPL14DDqEo6Xs6TtBPX5LEnpook5TPoheq1wYgK46UPcAS4KReigHT",
  "key33": "3gqo8DWkRYhNk83mSKmf9Wijzi86a6csDZbZhC9r2wcw8nQwQH1jKVJpjiVRZiqKdUn9UBjyReSBrDEG34rVdKXs",
  "key34": "2DEJU8WDekksXMMqWEH5ZQUrwdQXwADwyMdtYC77XMkuA793xbp6UhnYZrCeKrWEAHGrHSJYDexEwKtWSZfopHUG",
  "key35": "21WdWGzvrUznKgpA8sUbCnSgdQqNWEaPNqX89MEe8AffnezLA75qk1uQgGvfrVwwSzUnQcfnetbYHFyXPsxXBuAX",
  "key36": "3Uk83FeGuvgMsN6yMtrokkaNZxRzww4P2xCbA3mqXfv28eMJjHgbC4hA29CngpFtP78177ojmFXQbYqgS1sXxr4P",
  "key37": "4uvB9f6E355jwo8X3PHqxkNz34uq1WxoeFrtKD96VciEJtENVJyRMRmuAyapVGyPrd3yPjLLrmmHTgofYFZHH4B5",
  "key38": "ZFttRUSQuxyBvxHKY4D5zt1PEZLczD9cZU7DWtBqB7hWaBaZ4vyJ5BxCD1JtSqb99KzWtoH1wVuytasCC4JKeaS",
  "key39": "3gFxxoho5KaEo8sCqzEqXdSEF8yLiNeWsQL749xqRHo6ZtYbmAMUWYW9fbjaRCwG1zmEByfcGzPQ8wym5fxoKXLt",
  "key40": "5YP68sgCbDtKTW75M5K6MM4Yvarjwmd4LdWfuscfXD4QR1NQrVaQ5ouMHFPYcnW5As2VEByUCUk7HEqbwdMwuyU4",
  "key41": "2MHbEuktQ6W11XNZBtZ6B7NKLTP9kPd3WDdcjPXocf7StAaBjZ7tesNdodgFvR3sEztRWQPckt6v74KSvcbDexhC",
  "key42": "56evCBDTUVM3EpLDAyMstjhNXwCHuJqCVW1hXxm8P68MjZu4MJcVvZG8SBeB746yrKufzNuJtFpL8s6sqQa5MCUX",
  "key43": "5uo9nw2uA9TmCC8bTnArTPcurSsbQaUjMYmoKiZdbMgEq3xU33igdaAAUc9eigivhHKLneQ19QHhq5D8kjdLpNXF",
  "key44": "3zFSKBhHRYdjZ2YpPs7Agrfd6GVPdvECDNQ4naN9HKrht9rpZsNXoUEt7RXz12jXDcKKPc9FwBoX4rWkhSLQaAiT",
  "key45": "4YLgTWrLYGHHHRsSFDzwBcr1tuXg2cSeUWWBWnPTj9qTAT5JA5JnCLmCvWdYiFKKJFNU52Uck6fU5Q36ASwXKgzZ",
  "key46": "36PBuX6UraorSo3f1WngVZmvfcWpAEGuBUyCjLZTKX3KC3wGYuuM55bx83E1rhu16S5gaJX8uw7heJyk1k2FUN5g",
  "key47": "2AL7uU7F9ZxgvAkWMuME8NKGnWsdK9xsG8jWtCdU8C2iRJAfKC9T4sXUd6JpX4Sk58qKiyr4hvgwFGGBcXp6LTgQ",
  "key48": "55on9n3VJWnQzPHhknF1ZKF89ikVGgQtJESGm29QASxbt75NhWpqb4s5wggBEcfRx3Amymiu2EdwW5eSCoGUNkG3",
  "key49": "2czdiFdqn3epijTeaaWjeToCTQmePXnyE3ir871JBQshCeKkv8kZYgsE8ox1XymGc71WAqJsMQNEPk98ui3ADnbu"
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
