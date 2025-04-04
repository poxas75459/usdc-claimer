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
    "5uziriMJ1pEQThrsfQdAL8RP5n1EKgF4X1HyWKDr7jyKRR3u4mCmKhEZBXCepZ6mkeer8AYjvk5nGviH5BKFJkH6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TRsiS1nQ3VAMwunYDFjtaLmCCq8LoPFojWkEgFUsS6dWAkrPvYFEVHHT8wmiEuQMZVmBgutr9KrLE66LB1HMUHh",
  "key1": "4m2M6kM4Mn23GNHJTgcsCo58vpmDWLPieKLjikn3EeA5k6nrWTQags6zyS4Ykm3E2vvh4YjLtUZ6dS2GSc6i7RgG",
  "key2": "66Ac18erMtQgKgQRrvfSj8iVZcP9YyMJsF6vTfXUhvm1BAkZhby5KuaMHJnXBHrkdgkKX5KfjAwgqWu3TFZR6ABv",
  "key3": "5L5ZdXec1vyKpPkYGML25ouihetjxbZxnLmNFEQjYSUSrtJvBMxgdB8Q11UENqKEYB6j5diAXWFDCiPvVPKxmWXu",
  "key4": "3JY5hNAssQEU2s9XGLkXzHyJm5UsoLeN6cHysNKFenEVTojsmSXKn8KRoCCebBVTpr7EdwEZ2GwLi7vhqUAo3vX",
  "key5": "nVqJbyZhBMQYmN8qckWRXUeQM3jXWe7u6fVpCz1zbMxkgBr4cNMyUBSKjcT1ydhb7ML68AZmaSyenPvQWsAhJ8x",
  "key6": "2G2GmUn6rEqnQDZgyfoRu8NqSausuTAZUtCxnaDFK59YLUmBxbPuGzYJBN91tnvovN16G63a43Tx3URnPLQfKAbo",
  "key7": "4RPoHZC9QYWjS2YSSG6gxoXtTFFmadot45RdyXN8UK6UQfsvLsDwLXDuA2VmuuYoeaTRuLKvRnaK6LPJR8rVrGjR",
  "key8": "48zUogNArKDTpyF2VgfW4m6zsWc5FUrKdv2DipVSpMVrxcNWafPhVSQW6bfBdJZ1HVkjPrPDAxs3o4GZpqy1MmZ1",
  "key9": "2oVahhDbYw2FSz58FkSNsE1sH8NLQkoou7p1HQy2rwgGGddKqwt4DHzBVhwrAJaiWNhRCE59999MvGecFxP5LDmf",
  "key10": "3WZ59dqoY5rozhffgVepdgixAD1fdYMWUyaSAVgYGJtNN14Jv4FmfDYVUWwe2XZETzvRwsiMJPYzaXN6ySrUTDZL",
  "key11": "hvZzQfG3Z1YSLv9JXzDYBbeXAt6et8sxekoxvPWK72zXDDbWcjtFdvryYurnchpwiNpmg1wjKR6pmEvrBqMRVJc",
  "key12": "5DJMimaMxsLnuLJHnjqMoSVqrDeS5VQ2JQBJEhm54YFkUXsb7STn8aifS1iNKkiwfLyPtzX85cGS5nNRoFCcPtJk",
  "key13": "jpqSYCrfkF14PuaWq6En7UYtYJqbGiZHqidTGCa6sq4NVRBhThytxLXxFJmDR6tDF2ojgJJFeY28USTbr5wMuHT",
  "key14": "3nQaaujCUrPuz98VHHwYfhfz2vpKMtDk5bGqJs1d4HkCG7sKVMGnViDWdSZW9epppZrBwkMzPvbKZLrTJsqVHtc6",
  "key15": "34KpSiL68EbUR5F18sDUr47dRZFuHvV9bLXFEnjUcWjUDoqgZTa4dbRtAvAY5XNz6KeRcQ2EMDAyA2J5Wex2fJT7",
  "key16": "4VVqrsJam7i3rpiH9PtuPjXu125WYsf6Ca93PEBZTbXPUSYbFzoKdGQGFYVoTE163grqVoCseKn4puEaeWEdrx2n",
  "key17": "3ApF5Z8eKe4a6mW9P6gz31hnykkAG24q9wZZs3Q5T5pZhqgCFxmPf3dmtThLg78SMjoQyk66bMHK4gYDkHQtM7zK",
  "key18": "56VwuPhFJoYhT44btztSyMWhoEYo7KAqhP1DqMgU9GgoMEGVPcnWhTnbXz9f2DYGFJjpNbHFMNRZzj32uUpDBq2p",
  "key19": "4QdpSrkfFf5vZtJx4eJcjjCumPsN9WREYqQB4evmmXxXjEPq6en4Y5oJHtYNT5vBaeaoU1XnpBUrH1tuHEg8iTVK",
  "key20": "57AkTZjWsKuHJAo6EqX9Neg6ZLovrn8pZtDe6iQH81biNow4zsgXuhgU4NPAWXNk5GisL7E8TDywxVG7Hrp5A1N6",
  "key21": "2RH5u6sd43auSe8et6hzok9wVMEhghMWBWjwuwmv4TtqjobH1gbTQ9Ae4xE7brL7S7aUxnaxVZx4TcNoCiUxKXso",
  "key22": "4UYqbqpH2LAFAUg6gWRtYEzuKbMn3dyqfazUg93DMKZRKpx2o5oToq6HY3K2wjs4Zxm3JpMK8QH5FvCbVttZMWpS",
  "key23": "5x7JEKtKNmFRA3tRQ1j6gCd1C1yioccv38fZVM62eZCsCVifpaNiKJSbqDEs1v7yQrtbqnjwhoZsKjtJCybWJpVk",
  "key24": "5xs3nscpCfrpbtNqJCd6KgVTSupHnjPzaWLCCWdCUCoSkD8m3dWsnPPJZohqwdmZvHeiu2cRmbkmTeUvx63qhvxW",
  "key25": "26C2S9b4S6LBmx7oaoTwXVFoVFkdof6TZgRietemDshY69SV2xkkH9M1gsHGe8sokQu2b9gSF8xxfw1aYizqBPbf",
  "key26": "5XwJYXomQ4D556hsCwkS2KSkropth4NTWScBHFtGSA71i3wD7nadZzSErLmLYUxXgM8eYSUfteATfMtVHk9vVjRk",
  "key27": "5PxYrq4bS2DvDKAfkdUgLX2ZAWPDSDjscV9YSrvm7aPQ3xvP2Pu7DfZo2KKsFUxmghmk7KYtJUdbgTTVGvHfNtEp",
  "key28": "2FGKw9KFVGBcYuZzb7NBtLPbBad1cAS7h47zExn7MuaabdsdVFNqeFdaWpMGkUdvJUmeRUhfbNB3U2aQqT2BUNvn",
  "key29": "2rnCtoUKPyhckqXzE9YK1wZNbYBgn2ZLmcD7sM6fWAz7bkRACxTZ528gp2oGpGToppbteWHxRRbrFEkTPMLNFro7",
  "key30": "4f6AKTR6xHgioPre8uYfMLtu4JV82vakDh9QT651Fm9b3JmnwwPnSnqgDyFRfhjcDijp8sQBL2Px7fJH9xeUmjp9",
  "key31": "5C7b7mhMtE4gijrf9MSj9phEbQvz6ZxT3HadQerXscWHUTmf3sFmRc5EmaRjvox822gHqnWuBFf5AhGEajRPE1nA",
  "key32": "2HowmuKcTJp2m2yrRn9geKZqNE56oWrJgJ5MdhXFxGkGj6NHJu63zPG32cNZH3jSjxvYc9HZ4JwjdL8uueNxTt7b",
  "key33": "4kHxPKGUQ5oyvaAibna2DpuZUPq9yUMopYwpyXBBeQNvBCZ1CG1vhNRnRrjPRMWzvyUnfehzJMECkJ9gJzynJ334",
  "key34": "4gkbpwQ11ruVgsBm1o3gV7Lh1sN1rLCoWGfgB1c9sRTaJSnEFQ8M3FRh76938cJHD9w7YQbe2RVGPP4qN68bNP2q",
  "key35": "4YekzuskAisgWJNPRcRL6jXDbo89TkwFMHkjTGir33yFaxor469HaLBH89Uaj52amJ4ZXnNtqCZvV4ySEZdcWnRh",
  "key36": "4oGsNSuDqorxo4Hu4Dh1qbHAy2go8ErgapuJhCt8piXvc4HLJvTY4pPhrgKeDZ2eCuxJB1V8hPV6sa17x4psR2mq",
  "key37": "bPWZxDogpU52wyYVawk7sJD1gEGjWRsomC7YLieQEMg7XdDFA5xnBcPBNGw8zhprj6smPfr8h2omUbVxuZuF1ib",
  "key38": "5xK3qSDWUiKyGKRdatpGyM94ZY5g6Fe1gr8bW47NJj9rW9gQdnRq49hv5RsbDyC4TLkt1omUjSiPcL28ZDUyJ6E",
  "key39": "EK1XqyhW9h1UGaGTtC5eQAzNBRjMEY6kVdaGedhNzJsrwxuD4jKjYTZvPdfFetTv9DEhLBvUJ9yHxkeqVYcWeAZ",
  "key40": "3KbBTYgJqqg73DjHF9hFkd15tfCQvw7D92CYz93zPooPKbuqRoCr7MfirvnVJMwd1CX43n3uoyK6pEeHmMCtu5v2",
  "key41": "5FTn7cnZp8gHvUeTf8udvzSLbCcdmXf6ubxDzcZFo18yYhq2eiWmMQhG1wG36o4jVfBeB3QPkvBDzXFtNo4RBMzi",
  "key42": "4YrfegGsULEZykvEYMi8UAjqzGj6XXM5cwkcA362R1W72vMN432c52FXsWCewNXy7VVNCYSokkjpeBfbwifUufLp",
  "key43": "4U7mr1GFgKpttVruNc3iG6DtZcgb8RmRuWjRYbxffCahD2oCMm4TQyTS28VHvgL57v6sJHuRtrHitdEQ2myks2hE",
  "key44": "2WxXHCMXSrv3P6c66LjxPGeKj3T4GKoegyHBtDXBLtJ1QDzuC3ccgVPkmFBtbxkW74zVvJK6vXn1PazbpEAbeom6",
  "key45": "3beNQu9JF1nAsVGHxmBsPzCYJRHHJ7C7VZ2PeiGGSaYNG9E6P4rV6vPRWzA5KeFmthftWftvC2YDya3sJGqRyK8W",
  "key46": "2edUJ8sJ7DZzC6erm9qTecMUoJB7oN5o7QHxVtJWd8kcMiSfrxGSghqevFjcEZy2EjytWuQDZ9j8rGP7mv7Kxhah",
  "key47": "4Uh7P6qYHvy5APt3Esa2wKYorVYbLY8N8BgrWWJneh54KN9zwFbr7wuTudNfKYUjyYp4YKkn6JwFRovLR5Z5CDv4",
  "key48": "zSLhwsLzQ91JD9AdxoLER1jEGySLLxNbtxr1oURmPkVJHwQcwAWppKw4mJLunVLi4a4Lj5CZ48PgfVvws22NVQM",
  "key49": "24xfAwJPifB5ZMMaRbEiCcAMzWMhJXa9ytSyrwoQojpW28c6G9PPSQZPnR75iecUeB4EoitzXjjqfgsBzTa2J3F8"
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
