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
    "4df2cafAe8Pbcn2NoWL7XG7PCZu9sHwqnchozCY8hp3b4qXdKQMYGXdcixRCR1E9isTti9xbRsxYpSXKbG24no2N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hQoNt8by6ZDEzT9PEmojENiLsqn2Zet241onA7ikkmAoC2sMLp8QUuMYkvhyqUWnV7DVL8ZZFwX5yPASqMTpj5q",
  "key1": "4TVJgXRrgQX6Z2RdY81w8q2y2DUkCCa8nuwrBtkbHWPVxCd7MDwVWRDJcBNwUFpXBNcQCpmfaR8DZNr71mVihvZE",
  "key2": "67MVrejv3CuVD7wd9Tb6rUYVAgiqqzHjjnNoeCE3KbSb1YL8SAst8pbFBzanVZs1LUjPbUkHHJoq9dUQz9Tebero",
  "key3": "v2SjX5Dqf2jKCnH77RecHFP5wGd1s1dki6NdpS7gQdvAvn771BbJAPCayFagw8mEeYy352hog9dACWKTenY6P1b",
  "key4": "NpZ2gan7gySMfhTyV4BbccAkMzxu9UJopYhLbgxVxbGnA6c8kt4xhwgt8XLFPGBBUJNwmYFckpteiFNokdcbmYv",
  "key5": "3pRG4TXFD4p5HPn1EYLqdai26mP1UAGK8T6VSuQCiPpSVx76AkBqBNijVtQCv64NWf6PWonjqYwkbhGYYA1ZQo3u",
  "key6": "n4d32skpwo9RG8NeZ4UjfN1dXBPTbXVJQjUhEFNakCbxexW4JTb28ZezGKgunyPqYkjPBQFN9Qi5qQ7npAfrwEt",
  "key7": "5WcTsykoJ2b6cCX5r1HtbvRWCXiE8WCyJ4vycmCHTz23EdNZxhC9bSUNW3p2vZ9LFqXMRHr5sCwc9BAq49KmWZtm",
  "key8": "2vaEoGQiVWbCrycY9mBK1UNPrmPVsugDXqYdwky53KqqQYbhC5LUKL4DqmPRNNQv26GJwL4yHYe6QzYAcjpZyMca",
  "key9": "4iXqRw7g78NTa5pnfrxjt6ZJJfcoNyQHiPyGdHiRKPF416TJg9N8UK3RH9FAK5CQkWRLuoQizNrB2xAgSzDBi5yE",
  "key10": "5qeV8X6W2wtwevxmSDLBffHMS7gyVXTc2zu42p56NFMcKvNg4t41QE7vHxCpJPcWCuP79q1gTHmoqPjumgJn4ofS",
  "key11": "3X3F8qwzx48Pkm8U3C1GnkZzPXFGLKZVHfp9wSoCNb99f3479szporYu2LsTw8N6GPMatxGJRu23Nx2SpdKPhogY",
  "key12": "2LTFy2mWTzccXrFBwySm9unUGLoct8GWaKPi7SNokRMnyTSaQTieok2AHLbSR1UmsjSQLs5joJrRXKKuCLKrDXbA",
  "key13": "UyLXkpUjob7ddDZHUg2i3JvdcqiDg9hJx4kmCGyCY7URra2AXUebtMxeJc3zUsmysAi1f4nHVpSzzNcezdvNCYD",
  "key14": "qWuBYStEnZyV9wdpGEjAracmVzXdqWkFDAyFTxovP52ff6xZwUiViGAvuQfLzpbYmJmytB3ghWPztqKMiwmUpog",
  "key15": "612yaKxKS5HpRHNFxn9BLf4vRwDj4PBysie758i1LkuFRdzvLonfxK8rvVrhmtnEQtxXni11GEmLiLtD4b7gs441",
  "key16": "3tRKbRHDmPetqpRsREPXFwLGEugQEY3XjjtHCdJS276bcuuq5bL7ipSqbWKkzW4xAvJKVRqVXuNyAqVFfaUGf21p",
  "key17": "M2ZLUn9itKDs44qXPZmmbfswqTtBn9MW7EPvkNFp5LZufwfDTwbTWQi6VTEF4KfxaWFgjgnJ7eo7gEuj5dFUa1N",
  "key18": "5wwi38DEwRq2gNdgeT4JmEk56bcLMNbUPo71tLGbBD1wDaE5KBt5kXuKe9XuYvkkHXCg1k9JCMDBtvYELgoTrGPk",
  "key19": "22dr7mqFJcE9EhSxC68X6aWR515sSdGHhR63wsXGWqWgyL8nmJ321THpsLzkdtdSemXoQEprum2eHHZ9SqH2JrFV",
  "key20": "48f7DxwwDqZNXGzp3hB7d3bfSdym6exAFBNhoU7BUnC2RtUCPZUFLWPSmBngcfvuPasLJ4d2TfE9C6Yx9j9gwEao",
  "key21": "5kCVvpuzdNdqCDii53sAUWHZUSwUE57MN4KnXGzSgVhsmAzGCrf58haGUUCjHysSnohnYiJEoUoasJoF8ut4kH49",
  "key22": "YkuaCTXJFXWVSmoKCkgVGEVtABuS8nRh9qeFYKG5LBpeFTMyTyndYETvaWpwFx45h5jMUmMdwvYtkxE64Ysgy8p",
  "key23": "UFCefvQwGvE67uw34gNSdwKGqXHLT4C4cfunrybeSYhHwPBBNTmM2BCPaiyFZCM6w6qUDoRhGo1w8muvX2x1Lz9",
  "key24": "oAp4Jw8B6occ4uLNMSN259UB1i8pcLg1Hedymxa1ck3oQi4fyXyvHz7UXZ6nEMaTCLtPbziPAyAdG9AoF5ddyMy",
  "key25": "8NgrWwLUaESTqyt6ZcsvzbKWrtA7E2ZpVjoEDvGnJQa9xbsX2UygjKd7gSdfxgspyHaJ5Pd936XRcMgM6dAhnnn",
  "key26": "2y3gf6MsdUqQYZsPNpLg6eC9RBUnrjah5chSAhmJrHEc9xqi6T7Ccxryz6npM61MVYGQ4He4BvRv74fAX7scnAjM",
  "key27": "4CsLsepmSbcSFwNCQcYGm5TpQXujYX4YRAcqWaQgB2ZguPgeRa5gdmrYV2LtkB7D6p88XWo2VY26pPkg41UqjTxS",
  "key28": "3D2hsacJ1jX2eEpHyodHh1H7g1BujTWUXaxgt2Dxxr1Vr7kagWarfmxydLcrLkdVvgv2H6YiVXVLMtn9KEBHUPqs",
  "key29": "2LSgsC8Lw9ZrjnoQZerwYcbKHLPU9eBAvSA8gXb3AZSwyNcSBYGmqwanq4auseFw2MHarzENTcYDQLEjyjvG69uA",
  "key30": "4N3NvrGbbdUNryBqWTo7abowUq8m1qvcQ5HJAgCTVjiM1WTzJ5j48BbccFdYMwRJDR67mZQXx6mLAXkgqs1ih99d",
  "key31": "3rEmfFqkZY9BpKnbAPizXFEFR4u5aCAgH4e7Tn8fyqZp2EGW48HatxADXH5wEu762eG7rfQjuPk4Z5WWaifGSV9z",
  "key32": "3R8TaxgLtMV6PfTku3BetLrcXBi8STMk3918jdNCxghG6StApq184UjgdN3zcAuu25kR4w2kJyYSassyhCTxAct9",
  "key33": "223B1oZxo6pHhRJ8pUGSDuzwVi7HXp2H7zJSbP4xZreNhCNumPyC5QGKdKR2bHu8TRUvnTtLxNQUxE8Gt5QWWp1H",
  "key34": "62cWQfXdkieqT7sq394cJiAUBs9Bv5CH9WsPfJVGGdCLFvtaiSsKC6NYCVG7eFUJsV3T9Cjk1Eu3xZa6UPyWCkH",
  "key35": "4EKG4b4xSTXUv7EihEhsUo2tUhoHBNUxwVoZGUm5iNfN4vJb5mhFh84ZdCEi6XtH7KSoD956Dwp32u8ePpsMmgiA",
  "key36": "UaqSiYyxiCBmegzzYFUYvkFC2HgTS7qujr8Bg3NVbqrMSXx3bxhxaK8nFpoT3PRExZA9JtmF7EV53Mf3ogc6zxB",
  "key37": "3r4hFH755agjqmnV2UZjFF5wEhzMELvSNMnVUNzJd8FL7Gh9PdqbiMr89nrAMTRysEtw6w8EdpwwhjF1rSkVRC8F",
  "key38": "544YXH9Vdjdan71s2x2rtgR6hJ9Bt46W3McrNrNxU5Ws8tZ8LHGAH1WmiMWgms4vgSEutdDkWX6t6XxsHNRgy4bE",
  "key39": "4D8JFUMAGVqB14C27vEfbFphEcBXY56Ez6PXGzJRPZpemut5UpkrAzTPEwyqSMs2McRCTp3HCocJKiPPbfRj2J7B",
  "key40": "45vqMdp4TRhGJyPVaun9vYafVfN5HpQDymLdxM5CGWrGiBJuzoWZsLQPin74G9iqu2qXwGmjYPHVTUTHTnuyeo3Y",
  "key41": "4hq4MAornyRJ2UqTmED3in8h24RYzY8jkbSEZ8PjrXfmrfW96bqCQCmeppgPGdjeqrPFw6LgkaFSySWyNJdeT5BE",
  "key42": "mPy7CkJEAMhb3suhExtjaKCNcWct4WN2QP1J6DhCwZqPJGSdNo8RMGupZnX9fpD9zEDjNKMJZfFhEoadfBjvYAb",
  "key43": "5FVndt4VW7zfPXGVCXZxKEPJL1ZicG6gCPT1SQUCggjyNKSpvJUnFCCb8kH4gqMmj9t6NNiRLmL92Ug545JHWvbS",
  "key44": "2utdvqSgMyUYAZaMv8XiuvGWAXbAWNv8MZdw8NzuHFrJuD3fjmTZqWUU2FzLtnx37k6rLwGqyEGEuzkBjNwUyEm9",
  "key45": "uGupUZJGUndiViZwJqxdLzpx17YGnjmmjZCpy2YQb6tThHYixRBAbmrKfEmmhukrUECiN6vRSzJUkn1xMgjniEq",
  "key46": "4Jnun9ji1eQPDpPZFXFHqzK6Vx5kbHKoqf7Tc5LjiRkycbpZwz59A6VvSwWN1HXmGjw9etLLd4kvUts5UFio1mAH",
  "key47": "QMByrgTF2uNymjixYcE9Qk82ezS9CpSbALLq61SVCrdb5EY61ebYPPt5e2Yzrfc6ZGaMjVqY8Thtv9eV7dr9fFM",
  "key48": "334da5R8ELYJbagUfxZrqSNuMyvGgjaEfaeto6ExbxchEq1M3Lt4tALenb1boDBn6YrWXbPPUBBpYz2RUdG6hsFn"
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
