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
    "3sKvUmpuQmgNcXirvR11AyQ3qX5e3jEAt5oSaZnkyZyoJEkgbFCKxTnuZnhuYbBo1i7VhoM6cANEAsUqjraGx8tR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tCFYZMHPWc9vgTa3vr3qottvYLTWkHbWCty7D43whBmXxCXf6yKBugqRvwrufYmHUuSLb8FzvpNnverwfZBV6fs",
  "key1": "3ipMtDTSpekBRYFg4ZCHbkctjBuquoG5TT27pRC9Q6WuvVubhHSiykuqL9TgM5ycSis4cZfSqPhQHjW8wsfKPmdr",
  "key2": "4G6QTrcLL6yc7vSsg23isgQzd7QydDatvALGHsxa4wp3J22bpiUV1rt8kbUtP13HVfhJT8cN5S6GGiARnoXCFj5s",
  "key3": "27XYiKsAW9dwJHnkPk8A6pAkyMFH4RKumKV8egyXxzUfAW9F1sCQ1erRa644rz7bz1JgK4rgpWyF9JYjfycDRsSM",
  "key4": "4TxC3pQMC3iRSbRTLFc5Us2er93uX77AWeZNCQmXxn3AW7BFeYNDjUgoKxUrE8nKNnxXLEJMdt3kiA8ktdHCzGmr",
  "key5": "cyQQPkdame4BibtMAA1TkhCQCuwVnrXgBiQD1CRaySnvyZ1mB6fMzPw5BRsXXPbJM44a28CLomGFzJPGKD8SfzT",
  "key6": "2RnuC3HXjGhboHtdVUN6zA6tdCkeP5R3nf2Gjvrfx5gS1nDtBMp5PrZAJpp4RsJdLU4HQFd4JJJ3G5e3vESeF5Ga",
  "key7": "5yUxZge7Vkf1j49N38GfeJPj4XzytbjcStnczKeuvAiDcu2aUmH3XPJzYwdN229hQnzs16zkhTo86meac8B8nVZG",
  "key8": "4t3R6hZceZBLHddKXj8gpKikb7K5xAovzVb6D1c2AtUuAbsR1qLvGNMNwh9mru16mcn29PC9JeHVmv8vZBknMwLe",
  "key9": "63XTKvX3cZnbDq4DBmpAy2etGVQnkCynfkwV4jv22SB5kJ4K2oUckuycu8SJmbu6qoHMwYYG7uVTW8XLVgZcVtZq",
  "key10": "Cxf38cWRpQLmyyhM74JyyA8Afs4kq8v8HC6UgHzJdH1qacuaJsy1XWaEaoPsFVGLsdVXuWcLS4gSbQ9jiUkmKvA",
  "key11": "5AfF6oTFMr8Qe4cj3btWwH5zwKkobFRdteoeTj79AggcTBe1YjAKsQN98XVGQX28ipwYK6Xx2RLKZM11tqoBgvq4",
  "key12": "3R7Ty7EZfLcxgyzWi4UXDZngfrfttpwbEtdvdxJcpo5TnAEiUAoWstfEYj9C4hXSyR2qgvqZMnBmRP7YN7ss89LD",
  "key13": "ZYdDf58JJ74sULLQLScghJd4QCzZLX2Z36Ux8q7bs3Ei5wb82Nk2ocneLEUu9bgrbvEbiZZFRpR7cTAryRJMkgb",
  "key14": "4qmCThnRwnAEVfi1eYA5i3FeeGkpU1QtwPeQHJGVCb19J5D7uUZNsWzKs956CLmuc9PsNhTZeEcw7PCkDi557eQK",
  "key15": "oF2yhcomigHx6uUrkqYZ83sBW5xK4eUZycEG27SkbT1xZUwBtTmQCc1ijWNh6P6FZZYeQqzw8zWorYLSiCZ5JKJ",
  "key16": "2NL1zkQmbeYoNf3TMxzUyysxtA2WMrvRoJcR7gDLwbEtvRqUqWn9Atuuv3RqYudZAia2fQTT8fdoaabuVsJqPfF4",
  "key17": "5jqEcmC4oP4F77DJoawR15fi5TwWq3gfxkeVABqwfPT7415y7hAiJR9tS3mTtuRm7DjBMBgqJX4uKCNVJ7mnK4Wh",
  "key18": "uRGZAFVgehPvMdenPUfw12G1mSg7hAgWu673qRhng8buVRok13tykQgBtCrj72LJKcK8GsQZiNFSWi87yxbnPAB",
  "key19": "4G3jMUp4ArwUQu8JRHX5Prn64Tus1e2xwm5RwXt6wR8NUGuegYgREu36TzQpPRDpJBTQjJRoX2jrp9ysJdoZdVqi",
  "key20": "4NvFar3dLMhS2nZRBzbbnJhEE2FyawdvYD6EvGiofzdNrfBP16MaaLGduLvj67UY67Zwrqu1mrqjjtDaHr9BCGK5",
  "key21": "24RPCbfaCnezZ1PZg2t1iZe3pAhAGHwxxjcuXNSKQQmkrztZ43X5VbT8ziMUiLtdnVeehRwKrb8TfMyUbNFxvEQP",
  "key22": "sabakVERv3op7WTHZc8U9uoBKFkCAWCEZpPa8bSfDhR9Q1ehY4oGinvcBJ1nvXW2UBb6pqToyUSRrmVfDY7kB7F",
  "key23": "2ZyLS4jgCuK33Daew3nGHMhbKphUYQWjVEj4Rx9KrrfWmmjpa9AUFXfLwoTRoAUFMtwLxy49s4HChrFFa9NcdHjq",
  "key24": "25KHLhCPrUWnmrRGaHkKiqHtA7QswAGYxBZdFskm2SmuLdMw1upb6gtrNZTJzQL4xbzZ2vMvNsoXsm7Xy7zGdLDR",
  "key25": "4CkX2zUegixiQsdYmYYauhDLKsyqHjpXohbuuq4qH5iny9yk45bi1Dmd1deKdHjAaNvvz4uWgqCmraX6Zpw66Yjt",
  "key26": "3VVG5BgoWPeFaEjTkk1GcNeohxZKZv8pMRVGPZsWKaavV9GXpYU1CKf7xwnyB3yqVHEx3SxvgZF68heUg9ndLtin",
  "key27": "mdF2GDDuJXLdXak8YQsUBQigX3ZKPLzRCj7Ezjxp9xo1itXpQnEq7zH5D1Cg8zyvCBtYjF34jWYrizzshAVSQZu",
  "key28": "5U1MtuigfCjppjhJfzZowAQfrw7DBUNKCNQJMZJR4CmLH2jvGe6G7w4Mq26Y1TsWhBKmiVN2FxxdH3JCxDHamKX2",
  "key29": "25xoW7NQLVGzVyuuYMwT1tk2quiotQWTRvMrXpet6YmgDzubRZ3ab1zZ4tcaj2hRdDLKz2fLwHNRLoe5ETAtbZ6R",
  "key30": "2PMfsZUKctYZL4wkzNpti6NGN2tibpxmzE7JMytq8EQ8aa5TkgHRHymtPSmviKkaaozahZ3RqgxnXo5tLipLvvXw"
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
