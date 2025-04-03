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
    "4vsWo58usKARxoAC43dofKjXwVbuWXYvMycUWumY9i3zvwjQNuVjvfUJhq5iMiEtiWSiRCVckuzFuqXWXqozT1c8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WKwEFva7dFwrXhFMKbMTibGDPBQKXLxmetHChDs2tWCm2vtk11mbDsiDj6bUQ2cdyLQjL57VEEyqy7qDr7fhKWf",
  "key1": "4d1ujLjhS5M2gij5SFL8VS28bHPLa3wkMznGsGgrxyjzcKjYUFkg5pbDec1aKwLGVSmgr4nsDHX9DpsBxYcWFMRp",
  "key2": "2XbkgHNAfZKx5V4jc3FbV7667irsMWKQhRPHJhEcNNbWGHZvjBVY1WiXjhJF97wN3kAVN4urDtSG6QrAzgVB7JJQ",
  "key3": "c1rE7ZA5wNLWuGK3yDkzGA6pB4Yw2t75SeBrGSDm2iCm1heu9Yccw4mfvkMxbSjxpRLuzTZJsh6qzGjrvtPCTzj",
  "key4": "34goycZFsFhD5TJsmJkcbZWoHabQUYhQ7N2fgpXQ7TZWdbsyVh2PMBJo6JyuEeYxW7tGANpDdQfVuVbkP2gU1B9n",
  "key5": "oPd5vtzXL4g7jcVoGK3KYSzW9YbFRqUzEcaTrf82SzDnDSupeUdTPhiXqYBubD9nVUYnHTbZHdtXWCy9RJ6J2jp",
  "key6": "3bzTrrHb6n7gkmjLwFJPECHPCmkKeUP6dLRqpZEE8SJrdTAgA4ggAwgpZjnucN8FcNpcMMij8qxutFcXhKf2C2ED",
  "key7": "4mX4EEJdHoWhRGuC7SM7M7qCrnBXABovJC3h8YFzy1ijVcTkbqjDx69tJ2BZHpuJJTbMthGCCsDKcD4qShtS7dNm",
  "key8": "4y9reJmBKVr83iUyYmoh6ajvvcEk2RvEnmiVZXGQimhTGAkoaciaMDbBrrLzhMB6KDYSifKHwNfyaLaf1EBbFpDZ",
  "key9": "2b9jdMEJeHJizgFDtVkvRVC3naSqh3YsNqGuKprMLVd4XTnxzwWmRdDyjXtqaXwUfR9LBShLMNa1WBL8B49qfb4N",
  "key10": "4W1NrTFwZhHMERNSdL2aERA55bM6bBsZgZyyh6TrZtpqLeGt3AJVHQcak87DymygLRpHxVBaRg7crYTQ9vzoy9yf",
  "key11": "5VziiwBurSq7hQvaUeGEGyserobE2sd37SdZs2wCvnkzkNRxuoCE9SQPza1fTsb2sonMwSimc4hYZraXGWNxeDHn",
  "key12": "2ngnW8dQXj1rfzZBtibT1ggMV2uDkbcFXLJPfkqPkbWima8UmCyc8XoiMD6ahfx7Dks73a3sJk18Te7ifAAG3Ng",
  "key13": "3LUxhfcUVN4GkBSugCWJs7rsKMdXvupwnBqMLSWNijdtPrDmmhhini1XU7V4wHzcDCvZrqjneLdKUM8hkvjxjmHS",
  "key14": "tf5YC3tWFpWXEjiEQkwGL1JGoKjWU4Gu3iFiKCmc5gu3r9uxz6yLtKCiy7sCbSrFPrFDugUJ4BHQzJ78HNap3fn",
  "key15": "5psToVgJoYrxjooQQK1J4oEjemZ8QT9JChNaW7XgpVrVWA4p8vYoadLV7cZXhP2JbEHGFjUYhooUfkNGuanHH8M6",
  "key16": "LXr2A28ZwLSnMwZqZWQwo2DtqZJj2TQLkz2og3avCms43ofnVjjs26xn9wzjivLypyfivPsPf4QFJ5bD3jxNiqL",
  "key17": "3LNz8dHDR4gwcLSL6eNQrtxfYLhTqPggaZxPjh7BWDSQETUc9C7gDXt9Y92NZeHkq46sVovruCyTELH16sGSR7Ex",
  "key18": "2yN3H33yb9DzcEty2xkXfZN2U73R7zRebG3MRsXksRUNcB9aSRYNQgEch3T7muZZVeLPvhBdJkstcsUx5FnZSC9T",
  "key19": "4uXWdTLivq73cQbz7W8X7xfDhGWUhPAzjsguqdej5NYFLtykL2ZcEsJ1ZAkVjNhdjEcf63LApvucYT8MjEZpr8Tw",
  "key20": "5455uhHtRHtnS9gum3rmkWwkSwBXnkRvhaUcv1wfibkyUWgU9PT4te3uyCztYKYNZAJbg62QugT5sc9DUC7ffS4g",
  "key21": "3MhZDbXMAKBBa3CKdwU4WNWhj6giDCz8L9d5z9Lex13wQvk8431GwQ5rBmt7EoEvn9bK2Wt3oF5WvSCk94KCkoXF",
  "key22": "gMss3kGeokmFqGPkbTy5YaNdpLVBtfLoHnT1ZnPQTQi5pk8LJsFZ6vRarn8PDZtnfLZDfNJ6ajttL1w8fp5a3EA",
  "key23": "3bzNrPq4G7cwx41FxRM9Ld3FKNiQiL6KLJGwAfSC7KjxWN14ZuuwwTykmpVxfeESHiAQAEArnAKwaW6q3G2PKKn2",
  "key24": "46QwdHWMgPp3UwrHNDs5NJhKMogAcshbMcZC9mnQmiyM1fgWV3hV16jdyQxps52kiPWMqNC5Rz5VEWKCt55hAL1W",
  "key25": "2hf2XSw3eowgPBHFKrQwfKXdppoYoDCVLHLrhMpKUJnQd1zYpcVpLtwxxHbeXs7sX8Tu181YDuUUAVLttgiD2ku1",
  "key26": "4apFcva4Lke5Z4m1Dz4uFYhdydBmCDJ6G7oJzEDGQ345XRKMiztsbG6VTe6h2gts1JHDxNsME3vwhYPTkh5Egyd3",
  "key27": "2X3Ld2q1ht6zjmQeZG39SNCWPPziwM7qPHf5MSVwuhu8VYkrr2wZHwp6zGWsNm9c7MS7GYp8ReRgiWduk186fwNv",
  "key28": "j8ok3LgUuBv7kXEZCYrTn31x9ipNj68mXz83XVyFzAwPxRE84jTpJP9gyVS4g3G7rUC9BMVNZP3y7pNDXLGWNdg",
  "key29": "3CsaeDZept2JNHYrc3ed7Xc45cFbLnc8jegTBZsJ4Joc8ZxN2Axr8JxNJE4Ysp7RC9iW94UtyutS2QmS3EvTQ7nQ",
  "key30": "3r9tr2m3k5ptpfs3PnY9Z4p55EwXW8TqaPmy8sC66qH13PmVCcFokwiHcjRFnwi4nS8FRuq5oCrXzvKPWzmstoy6",
  "key31": "sMHFrCq9GuBGSEm1ocns12nvY4NUWe441FnRa3fVyXy2XM4c4FLvNwrWF8hkWLV6jc2eANTzB9nXQpE5MQ1ukj4",
  "key32": "5QUPM3Bg26pjMProZrauKPUJHp5hSkrnmMCSf4aaD9DyQcTfdHj5JjjmXTkqVZSenXxHpZc7y8WNDVk4v2r4uvvo",
  "key33": "3ytrQhb84BwRhNvWodpSzH1iDVQaFoBoygenBNwP4sV4C8jQabLRqLKuJnXJdWJS9hiCnZ6pUPueAYpBbRaCsUeh",
  "key34": "5n6oRBkNWRDQ251o7jJAH4hqZ4FMpmys5rzE9E2Sv3ymZDw9qLWaYdRbfg1HjDNXYeaoCC8gDKtjCG4DpEvC4fbX",
  "key35": "ThiDbyE4DDoPvXM8p9Zo3gLwW6ujPv43RM8m21atKwpsLtVUcwz9wS8b3A3u2nWAicSfVDdgZh8LvMD2QuBkQEa",
  "key36": "3YafPnqouAqGFp1qDMhj2NP3XkMcsJgsMVWP3aPMz7e99764T55jiL97Qy3yG3k5WYnMKkfEfnWbBYDNdqfVwNMi",
  "key37": "329zgbG192mmzvkNNMzb5Gogce5qAUYp1bx9RLkvd884967zwSv4q6z5FxJwkbMamtxZecmSmm1bNHFqQbN2ZuJv",
  "key38": "4xjSU2ayDqSQAL6z89s5ap3ekYrM6Gbyuu96wtBW16kVS2sDw1JucRGCnYe9rfHirNskAH5V73mniQZhXhVa4P6A",
  "key39": "3qkEiMytU44djNL7qB9KWCS7TPDm8FPZbWGkzLNft8h13snUVw6akRWPEFEq3nGATC5eaKbzWAyrbA7rv5HyDAx",
  "key40": "3egafuhSZ7MjZ3FKMssavfFKLCa5KwDqBDmxqcGbq49g3LkXJSFQ6AwSvCNXYqKYr7HN7zBUEWLqs5PPRQunzYEJ",
  "key41": "5eCEqtrk3q37Z6zYfawDcXyQ8NH6xuPUSizDQJsgWtJA7hKfWtzGRySEkagm9eunikd4w3jmBQAhAxGwHmL1ib4Y"
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
