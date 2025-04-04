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
    "5fNS8sCR8M56xv1cVZTntwKCCDRAYfQZC9YCeu498mkfVukWKHZVGedhHJ2jaqm7HtMzgkGjH971oTNXCKTKCjD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z1hSAzkQH28WrQWCKcaZHPZfycZHdT1Ld9bThhbUQQMTw2UoGNKUTLUN9boEVPhcf6s7FebRLYSyGs3hnDrmmbW",
  "key1": "AJd9CHB7YHo4UBcjoKARtqwteuFvQ6dggZ3zz5zYvE8tJxpXnGDDToa1o8ojm2j6BHzDXE2YPsDrB58vzfvdy3e",
  "key2": "2ShUGk9TGzJZXbbWwz73o9eEFU8ALc7UvCGtSx22mGTnGzmBuhVd9xw7PNGpmw3QDxU4BMe1e34CWNGr17cfrH3g",
  "key3": "28wn7eYNMzUSbhrkHQbPFpJTPoG4XQT1HqjrhKR8ax9F21XiEN1ewVdobQnfJy2CkSru9C1Ait629N1gEkYUsr3v",
  "key4": "3G9toxAL1MowaEC4dqQGYKrnz88nkgnnWfAktc9B5RNeqD5EjhMAdhc4dgk3hNBBRxtvG3gDjLtbfqZtW5vHVzRD",
  "key5": "4aC6zr8DakURL2ULgBkeojc4DAips6n9r3pegKe7wLqxJV1F3KmYieJf1ZvFxk7QsoLLcXqLncxYTS33JZHLmx1V",
  "key6": "4rFQ3nTe3q6ZVKELVwQ7MVbb5hsRqk28NhAbp7XDiVwjGv7JpcJPEAJ4c4W6LUTwTggchgYJQHBMqRwnpYnLb7Aw",
  "key7": "5euvHkhG7xqhCVYEX4REe6xoocxWiKquWUWuRhEvsDugQyrBvEom57HAFPzQGPN5gKbwdoZ2DTNLNrAzjFmHZFZW",
  "key8": "5qooNxAZ8cX9q3yAVvbyzEE1gbUpNJepcG9zW6sqvSEzwNpaenWKSNuPGyDZuNc4hXUrx6xZLtbCo9NAN2qesjt4",
  "key9": "tj9ySocx3Kj7JDH7QctmVdz4Lp2wUA3yRwUTK6pkWqHViwopGaFN6sKkLGVM6yZ8vCgae6yppcwtMmkz9XLduRw",
  "key10": "ATXfVbRgZU18kuCSm9Js5pBfGKLa6WCbezaRVf3sXgxWpnfdCvMzo51EV8JQXB4SbDGAWh2pJ33xbGw3EbuPztP",
  "key11": "3tDR5Z44tL8BYnG9qeWET1KEvHHf4tieuD4596nAs8Q2MRL5KN46JzaBvZmg9Z92moYHe5NhjVBMwkCu5Tkv5i4Q",
  "key12": "5BEYZu9BRqRbd5TLayVBeYP62onx4qHiAn1otb4tTZrnCGSKKE3Ub6GC6DEZPLtEsmebwC5gX8BqRCczy3kUpRtW",
  "key13": "4k5PR4oBNvJESJARi4xfnT9ZJYkVZSckdLiwGxDu44xYqnbGq5jBbguk3hRiny6X1thPq9Ed4VWRox22yx99bUqD",
  "key14": "5Rn5U4bdRLpt9P7frDSbHZfEb4Sm3FTNJZc8SR8qa2hABoP9qzaRxBGoTh3oo1XDZedwbd1GcBoG73DjXTs4qpN3",
  "key15": "22KkH758tb9ZSby8DmDiKJjDPUAhiNoXoFcVAskHW2MU9MRwKzwarTm2wcFPPxzHhVuGARgk2xRgFZyK9SWCA9Fj",
  "key16": "4gsfy3LmLtRZxVu1ZoF8L1FAc5fNe78tUj6MTbgSka9TzfNfkC4ykYB9vb1wWwBBWtWsmrpEJE2Nb3vgbcTQcmm",
  "key17": "3BpcieH8oTVFGyaX8Yi2wjjZi9CM9sRmHQSda49a2QAvcEACKcozAAantwP9PWU1Tpa7NzdbuREj2dEK9fsmBw5E",
  "key18": "2jCQiExAnxmYk5NsHeTW4bCG4ijfzrZkrSh87RRY5gewicarMdaVqYGVPoPvJabscBUMBV9HDv276xCNouP6SKf8",
  "key19": "4Gh2wtdZKqs29iVypc8cEefegQVMq3wkXeFq9a7546ECMH8aPe9ctRvrKGemsmuaNikBSiBAdEG5T7VhKuJJLgie",
  "key20": "vcYFZskVbLgAYBWyzf4B81XvUg8k65hiMiu9GVohT5RxqwcPG9SiPDqqz8xvucLxP2fs6PD6FKFWXuip3eS4BqG",
  "key21": "4oWddQfcdgTmHWUsLADvMyyYxemAVc7XDaN5gk9eomQ7UaFeH8RFHEtjFrBoFqEhSzXjGt77XBQLuJuCY4XHzhUK",
  "key22": "4jzd5eFVwX1GzPRgys2SGxaouGZgBC8GHCZXpzHnoQWyFjoA8VxwB2Qj7XdoqX9NroFsXu1DRCnepS95edKcT3Cp",
  "key23": "fnk172nWC3rsCsgqmg8BUmzJbDJLCUUyKjsGN1W7K65rFPaWvBFG1kBYTJSGb28LvDqBmJfvpD7PtNqmVxd8BU4",
  "key24": "2uALhtXKxBfMboZ5weXAZjUTyUuuJTFGazu8Gm1TEtUdP5DdiGS4CmJyvP5ge3mKAyMLCNDZEwV6kosTXFcENGLn",
  "key25": "52wJieGE7yGBLihFimSjZ5Vw2Gw2LMRtGf5ipkXQoFj44u2gkH5jKUoes2H6YQoaMFDuuNhm33XR7K9TDKpoiZJq",
  "key26": "5heRt44Fo5nnLMyjDvXi28ZdBQxVLZ5sfYtFeZmaf9GGCuVTPgKEqJrfg3Q9gBw8oCnuNK4t8ZE2YSU3E8dnXgJk",
  "key27": "4xUfZmJzB8QK6zsjYt5W8NAErYtPku469So6Cdc8fku7srMDJTzS7uoaMQs8scQ9dinN9n7qcZHRzdaPDaxrdnis",
  "key28": "4YAseBkSieEn8uE4fZohcRYWA5d1mqc6CKVYsj2dGVh1Uj494cnHuu5ysBZjqnSSosSEsd2wnzJzPf84qW66ucjo",
  "key29": "3gRmboJmP8DLTbPofiJHsFfBGNBg5wJ2wTtUEApsWawP8LLQajJMYm5fNUNEHPezRkQnf7288G6JtNCe9G3JRpAC",
  "key30": "4LwWJcCjtaCcwxk4TkQWa9Ra5vRaNY3SnnfLbtSSUbQRiwF6MQjpSjEwB6A8BarvQ4e9273zBTZx1NZMmK6BdTRd",
  "key31": "5d2FytRQ1DKnXSYTCBhPtciRCD6hCYJyutE79BZpb1NnLy3AwpkUHaKRV12AD4uW3BGx4rRMdCeWwagVCB5m5fRU",
  "key32": "3bsGLP2hUkgxihDDi9sZSPqv3UccWykQKJQMFdiokom3BR7xRRVMJYhXvXBMAZDeKLzXEqwxakPtP2Y6SJQm4LZT",
  "key33": "5XUjVUTePafoKSqqpTkjPpQzBNQW6YxJYyr9F6UeTM4RtRi6bTkVV92tBsQUgrawMrnxvboxziBdyWdUHeHbz2WG",
  "key34": "2iMeyCswcqUeHuCkj4eyaACVrGx2zrLzCbgxPck8yGLVTiy7ZEkG92cnR4Vbt2zq4njbeefhVL6WY2SKBp3iabu9",
  "key35": "5yWrWSJab8shZAWKQMoQTEPp2LHDjuSyxQZgx4zj3ha5BSKEfqmacyfuQGnrj9NrTzU627tD4APYkRwpge67pA9A",
  "key36": "vRJtvyL2CQCNkf2SjXe9wZBg9PeuXzBsfHzfgYC95hheMUAck5gsAbExkTtLuoP9sd8byxEkKbaqF4fzoSCUYiA",
  "key37": "DqJcSw1BkowYu3fcygSU2rq2aCayChqQAM28kYNfxeSp2pGgCjhNnFSnDJ9nzSYGrCCcXHi1ZrdGbTiuFKX8xPq",
  "key38": "r1QVTzwzgm8gFUohAQJ9mbm4wDe1RZCvMPygXBk7J71mhedJ3itSNPMzzzBwMye7Wp9edWZ33C7S7TWF521YUPU"
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
