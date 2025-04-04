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
    "25fVMij5NZQQfHSRBRiNqoQW1SeaWJT5Ac17KdBDqCtZWN2RDuaA3gjuX2Tg2dxJBnF2bXBoy8Fc7Z1gVVHb12KV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xkTsjNcJGoco5EvE44U95EZagDXzfEVLmMtnAyEVJycsXJqnpUz6a786wfsp5erqMwufLCKXXem8PbRghcY9vnS",
  "key1": "xf5CQAo2X13GL1m1PiT48j9guKDcW4YAeanruJeJPrKQiP8RNAUS67WbW6WDGSYQGzunuZXrK34EEHEV9dFhczn",
  "key2": "3nA7b6aazZ89UBuoXUQRJPAwLC9wbug5dLAJpJMVmfS6pHCS54FzG6eoVL8pY1FtPBuUr1zr1evxA2UusTzMG2jS",
  "key3": "5tjQNbLFQb5GQJAa8FTRXDvpVds5cj44YwH6Y3tDJu8ELAXNvfpTKukxuVagAia7oyxwu81WKtgYhAGsqCKmGZK6",
  "key4": "58Qnumz1cm1Z5YD9e6V2at3d6KauumP7oWYbtRiwnDhN2E9n8f2yeCNR4rmkrCpnNdB5JrfyWcCgKnVW9P1bbJcE",
  "key5": "2m1EAR2SCdFei6JLjMTr4Uqj5Q8Yiz8dNHZDvLKJVgv5PNbRRmN3wS8PRQTN8WdxkJkeZpC3KN94zkgStMfrAWqp",
  "key6": "4hxhzoHgXumziPsKr47bzHx8AiHaQmQ2qLB5SdjkbVXiUtGvczU5UXaFXTWoi7QTGyrGm3QkY9RFWTFXPJtY9Bxx",
  "key7": "4bjiFFYtW14pDQf2VapCmMHkXgqauwD3W9qvoRdJjVzUJoZuztqYifNo9iNozGQdyP374icdYXFoybdHHzC1x7ZF",
  "key8": "5jFwtCfdURiFexsH3H9jJJB1TiDgJxfVBtxM2BSDS7XQdENAfnoa4333L3jyVaV6mtskxGZCG5QtREpdi44AnFv6",
  "key9": "gUQucyeL2Jo56WhMg9nVUou1bSX8d4qMRBsFm7Zdrdy9W2gH8AJQx255MqEwzePFr1tLBzhDt4ocJppxWpK9729",
  "key10": "2g1F1C6TB6AEnojfHMUN7qsU3etf5FGxZYq4v4X9F5gkTXnSDM3rkeVxpTbQdEbEgybpXLws159bDYPkgUxPQy3w",
  "key11": "2TrCHyN8Rmg2gYuhPvm6wvmq3HtaDHsDHxXnQiNp7k2kSNLLfJvwK5gW4tduao63zBigUK59vNpC2wzzaUdB6rqh",
  "key12": "FUfTgn2ejXFge5q458jiXA5Gj9z71HLds9Z51SbwLBJXAbijHJdo55Ee1be7Gf254F4uk8pQLYCU4pCZBrYcoGX",
  "key13": "31qzytBh5PUVA9koAgT8iTSCcoxaUuA16qTKj66U7uFxDUN9Mw2isrNtiBZ25D926gps3S8cUb1ysQze6T9327AB",
  "key14": "TtFH7hzoMiDvKvjEggvAr9LE81KT7ty72xCHo2pF8FJxS4pyskkQDbni1XexDkwQ81m5FwquEjURK5giyNRnqvK",
  "key15": "5pBCUDPJLATukh9JXkkUkVzFhwt8N5Bbu7ci3ofkYTMhyPWfq2QUGTVfDT4YsUR8ZReWQA9eX2Xdz7ANbgQnTN1L",
  "key16": "5M7PcqVF8jHihgc8fCV5gXYAwDKYu9MpytUY2z3yBe8vfjAtSwAG92UpGJSQcnwbr4bDpE8xUX2G25ByyhsM3zBd",
  "key17": "3f3KgH6SbH5LmzpHfq8zmsFmPrUymQdbG5zaQYtcxhrurLqukK8Sguvn35Ajgkkpqz1ufQ8nMC8T842tkvPN3Pu3",
  "key18": "G4SjqfdNeJQoDrz9ioV1kAQmsgC97xvb9jYRiN52SDYouYYQaSEA3mJERNG6FXeigYanrQTQjEW9279YXSC3Bte",
  "key19": "3GjTYiUNyntD5A2RaU7FxkbURtmF1GZtWD1aW1PQQF4Zh42zpdYmGmXbV9qFRzoXubruGSzDVnhSx3jBLEXdY6fX",
  "key20": "4VHXSmL8zwurvLx5Q1WtE38cDbxm2bNZTjwwt4zax2pgqPuHmWk2XtnhAZvQF2zvNVBC9eCZW7ZvW3pTShR2RsZK",
  "key21": "fv9pK44J846nn1po8ECas6rpZtZBNZ6k2ko7Nyqk4LhNnFXtBHzPjaeCR1cFfyBGv168YzSQuGoHQ1FpDnur43m",
  "key22": "2PSqnqQth1FuRuabbwcvSm9R97y8S5YypWbTMX59iXitgdfyXhYT9Qt5iifiMBMt2jStbrvMaZEETkDzsXx6N9XU",
  "key23": "3uscCAhnGxVWNDSAQKh5rm1SVQzRbXVeYCQVt6pUwHJssM77gHiDCVEVSZLSdVv8hW5L8m3zVCF8TUjjQesz6Pbf",
  "key24": "57Aj7Bb9BGBg74FZjiwmHZhHDeESqxrWScGnvihJy6VowBWSZZpSSgucYerHBKQtRKpCa8eoVBqvNCQuMt5LJECp",
  "key25": "Lb1ao2QdEP3CXFzJBXySK1eL313tEqVc7MpebcBWoeC4R5RFwCg92MFRQk7G8TxtLAHXuH5AG4uFQwNqE2r2aRi",
  "key26": "4aYMAVEcFmoYFizYHEzJSgFUTQN8nQwumBvTk4CQtBHnRqDmuur55VN31zpfgqCN2ZMzdUwY8Fc63dQKt62QL6Mw",
  "key27": "53r2uNpj1Atqv5jeyUooi5nooiD5dDLfq3i9TNmi9nVGmvoV7ZyaWUpvJ5YREpsozab8yPtBivTcX8x5CVKQQDTg",
  "key28": "4JRnhBBtiQFPJyVAwmd2zWicea9S2orSgzigqjNjdreqSzu28NWBCshchNhvNxJZuGNCY8qN1HRcmiHactbs866t",
  "key29": "3FvBFfiXXcyiAFaA6yF1SHTk9vks1gCx3ydKr8H9QACji9gnchALyZj3PbYRGfXhrgK8ADBfzxaTGyknss7ziaSd",
  "key30": "3Ndo5xgg6jRyMu9iVadjoS2t1NAsK3aP2B5U1ZFM8eqesqzLy2WEbmTaHeuyg2GNNyNjSaBH6uhGwY1bF5UqDJ9c",
  "key31": "bXHYLRPNt9qnZ5akW7PoMrSDTbhvzsQwz5osByQKBxuJCzL11tKEjgbmExQf3eAipNmpxSmvnWNGJesvxJFpaBS",
  "key32": "5A4KP8gM9Yc1PKBErxNM7jFJ6RFuG14dXJEvq1pSebP5UzgirnDKajf9uNZTr8cz83CugARKPzFgfHmDP8WgBi6z",
  "key33": "62A9KpxP9bVL9gwY7rhrazauwU69NT5DQV57MYMr8qZrtQMhrdUC5w2prs84aPGj9UAvLitfEYLcay7HGsYmpS7a",
  "key34": "4GCorQbH1kMTLbQm6tSy75MUKXW5Ct7abyka3K6ehwgphLxbeXP8Jm2biN5msYjouPHVehuRMZhEH4rki2g6a88X",
  "key35": "57D1qSswv1m9fNKgW2ZAwuFZqr4anJ34rNwmn2vWyz83pd4QHbtwDpVnrVphwzNodZJmDvJLcdqGbsiyXvnKSJAL",
  "key36": "CYn8A52QgbmuESFXo6gTkAx88RoLx4afJgwRaCDAw6vwe6tTrMY4E1EQbc7L4AZFqAVGbUhA7P3MqzBB3aA636Q",
  "key37": "DcYjpEQvg95TDohvxtBj7Cr8FgAhs1DNJADrEgoB8qJfrqwsaabbwdYAxMH4ShdhvRCoLH3EqKnWMzfnFPx1553",
  "key38": "4ZxNj6dE3vsuur5H9xhJo1Fo9KHRDPD1z55FoVqQy9GG3SfQos2kZC1J1YVGAgcDY7oA8ivWti5uwCvZoqqUatpV",
  "key39": "J7kC3qquD31B4xcxoKcSzRrzNjb9FYCT8f4fjyMtnBYNkCFYWSsUZSvcosiQZmd1retdHc6NqdJmaPdAAoNknxx",
  "key40": "5FTsKuCe2SY26NKWwJVHX1spM4HmCYDizWaEEsHYm8yYkTMjhLm488MegVH8beAbJTRcWFbHUb2vFah9aoRmY9Hi",
  "key41": "wdSTD6EUsFAdA8incCs6bP9GqqkewphKSEkVeYGMuiSjwFPH1nSUjg3cqKYCuewjqacfzG3MRUKome5e6LYXLeo"
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
