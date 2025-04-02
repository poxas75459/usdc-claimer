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
    "3QveCg2jZy3WRpeFKZRmbaeWPZS5jvfknc6DA5W7o1VqaaGj4S34hiSNiENBy77RewsGwsTc7VNF9HdoAUd4t4bX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SS7PXgWN54BUVc9rkSBdEmmnPa89pqHF8R9Szkwz8mtADAhBFgFZ4LZu3G6R96AKC1LcBo3Ecv5na72L61NkC2J",
  "key1": "4Zc2DakdBjnpeKsMAuQw3wTaZsmf2iATZH6SnRQKaBZxriTUcNxbk1tnfjkfe8EUnjPiAjnxTm7VgGSPf2f7Jp5f",
  "key2": "1udoVnXpsu35VVX7KjEb2aXKXTrYJzYGRacbWkUMZRKj3CHpZ6xEB4xiDg9tJ29tGgogs8DNN4px2Pm1SUpNYKp",
  "key3": "3P9RHggfBeZTiTRZUFRBHMxX2zcdXVh892QAjheawG5fY5c268RSCeLj1S9BLNtTa2VG63CyNR1U7J41xcGxhTcT",
  "key4": "3gkLBvKaegcK9XXe1euMx7ZEz7ejjxM9RVbzdZqAmUgnP9DzomMG5PsstDqCsdQHFMtky9TBULuEQepjQKctj8D1",
  "key5": "3yVrA3XaLwz5UXEBUAvfCPRFb6ahKveMiQj9WQQspzaqrbKiZhaXDGbZXibj9mVcjgS2JQHdkeTWbG9j838MQBFq",
  "key6": "5Muz9uGbE1YbCnyD8ndVFeUXdutASDSTMMg7q7X3YcJHUe3bdXG67EarZNrHKRGNwV8dfCHeBYKJj3XBeDAftB4v",
  "key7": "bjyhbELTH3on5Kc57pEoRekHHV2sj33bzR2uTEt33RY4mjqBBpwxSgvTiBK819vrfp8KaGQN52Gsn773NoxCHiq",
  "key8": "3aVzuaoGgArZzFzEYvNgjwYfhFwkPRR8RF6hSj9jUHCBK6teWd6E2gHjtRTbCudQe1xyZffxhHBo7CJp7xiUSuQN",
  "key9": "2iWxeTGiKyaa9kJi1qk3T6RFWK5n5j3xbvHhbeodVMsM1zXi1Zpu68TNeZQCYAtEakbdjzxo4oSE2MmKUarA2WgH",
  "key10": "67Wpz4vo18R3iJNcA6MLuQ1EB3SYWGfiKMymbMHFKeZv4zufq5Vo6nJSeKKvjysNayuZd4puSjSwjy9b1QgJswTn",
  "key11": "BaEGh2NDeaSGghJHbwBYWxtuxdMcCjQnUVUBNBsb1Etuw2ZEjxHftfFneJ5C5LEcrPGRce9JX8P939p4gFGKzDD",
  "key12": "VWnHDD6qhKWc6pRGrSWZA8AoZpm1cqevyS9hwnmaJx1MWSnoDiruEnHu2gNTTHLiRWquVrfij9zUJvNDAYu4zqR",
  "key13": "sM19NSTuawhC62TD1gfoRRsq2tADyBHAiRTK5xktb3ci3dLfLzCc74Ak4ANQ5CeaQERjZMxQKomNWqRmCkk4bS6",
  "key14": "3E4Z5m63dJmNzsBfLBkLRCvTXB4irNzjFk56XTvEvLf1DVY8vB3z45QfzUYnhYNTNVsPQF2Es8xR7qoV6p8J2air",
  "key15": "3vjJbLpmVN6FiKdGHXeJRjmH3xwydfq3qQbCxEsTbaDuHbp3u6V37gt8GAaGnjF2L2rvASRWovpt6AnAy8cypLZz",
  "key16": "4EowLEV5ey4eoxWBPkNTy7NBGnEXKVEvprmEb6ZD55N5MJGGk2XLjrMCRNHHXH1Hm9wR4K5HW6UerueqEWW2yQAq",
  "key17": "2ZCdBzUkuvrkmdYwaraGj71p8hZuUdgi2LnYWeVDrxA3GH1phqa6mcKd56ZbfANDSpEcq9MYpL1nvycTrgHhdgjm",
  "key18": "3DPy6kWUFuENJnt5d1wbiWKWRJirZSgQ3hn9NLK1GEM3HAt5dBd1fyP7PQuadmw4uH2FSuprJKSMjKEKmtsaPx3H",
  "key19": "3svZhZKHxcQUhAq7eHFF62jb1cBxJapdkancL77by3cyAEjAMYwveUGZ7o29Yr7w9aqA25VMfLCkcuFvsQbQa4ko",
  "key20": "5Rzkb2e7PAVjSqArXjaUhjfmA4tUivf1W5FB6nehu4nXGTM4p1UgAqemcKeaZDoSrWPzQaywu7hYVHjUDnjF7soZ",
  "key21": "31QdyF4H7cwvZMmkfJhG5a1sh1ZTk5j1Hc9QoENC1mLeKFqcgFQsJn1RKGXU9gTgVZvYtmXgu56pZNrNajXcf1nX",
  "key22": "4Ybsju5HZsamyKY8s75cNDqFSbd1AbP2coF5dUvmGV8Mk6gZtNBhQH88xepDWjx9DwuWaBC4ghawSkvg1HYGEvUJ",
  "key23": "5pgYM2aaYEdvifFgTCyt1XYAFj3sbc7RBDXATHSfN7auMxuemyRTJ6jdoQZ9m7PiExWSQ7AyFcG6bQx6mBBxkSdC",
  "key24": "LcxzHZLRiZKLZzVvMsbDr8R6C3Zq8FcTzM1iucFAw29CxYhNNUQho7RGw8o8nkfgjL3xooFsvuiaCBp75t51JHF",
  "key25": "2mWmTWenhYryAstKo8NJKKGGyM3DcBimBZUWMF46X8fQtQkdfbdSmxGhGAtDCWMFPL8FjMDUK1ukciNa6pFbH56J",
  "key26": "ZTRpS1A7ppNaoAgWQ3egA78LUAJYYCEr8iFJgpNQZzVthB34pcRQ8sPti6gviT2wxwFqoiEb6HmnQpR2Hv8igf8",
  "key27": "23fMQn69sRbrE3fV1La1enYuxNTQGciW3U7WaYCQ41coG8P86CeTvPuhGPVUiC5wbyZYLpJ5FMTY2FEPWi1J32AQ",
  "key28": "At2wX151sRxCZCqAhLmbP6zdDrPuxf5j2jFQFaq4pMb8pMBuF6RKotmMVRJcuUF9dUtSfSMQtQgJKheH5R3gyxL",
  "key29": "KGXL85AouRtBVJvFwJ3LL3g3nM1ZqMoHwGA6qzJS5vCKoJpqExMFWhzLhViwBvBYicCF8uiCEyWx57enTpvuXKr",
  "key30": "4m8cEZXXbmdrjQgZipBjSZy7vTqseRWZF2YVVCrP17pD8yZegSLyKosYQo2JFBBdCjbtEisKsKgwv4fZ4zGa6QPi",
  "key31": "2h9DT8mPD82421VYH26t7qPq5nFh2W6mLSduFQayMdsSGsnSKGSEDjzyBJcvVBkVb81aBsFCY1WwDLHivEYVnvEL",
  "key32": "DtwHsVS2wWaxNyZGgjNCexZrBYcrFg6SB8BAhVRnWSWYLpneGoNfdV1XKBHTBFwJByL7puEyKT89Tmrtk6gJAxK",
  "key33": "4K3tii7rUypwDCRSqLfjRNNp9Hbsaujsq15EyS5V2qLxrbFLjLMcXkiRjpvZS8PPJfJuznwD1Yz6uBxd4XGD4JZj",
  "key34": "Z3JsC2vuu5vuMABMaXUDfF1QgEB2amrTZqYAHwxHuoNVtDCpmBTufxL59CfQVLTaXMWVfvu6zZES55eqfuFtinw",
  "key35": "3Rx8ZUbuDJT9NoGZySqvTiPLuaCwYVBJra5jUwMT53dBq7iqs3iGqXxZv5pbohfAqbK2xvs2psoPD423WLtF3nXd",
  "key36": "jT73CKtJdR8jLroBZojYHFuEEHErPMA6FdHcgScBpUu1UcnX6PEf2F3G7qsZYHYBzXDpBFFibogGiRbQUc3cPHf",
  "key37": "5xB7cGptyQLBue7tkkwHFD8Zc9RbYprqZhj4tcksej876y3BpfeBbqSjtLxR51EoCMvv6LEhKQsDoi768uAKWjDP",
  "key38": "3pWgWJYPhjoT4ReJcZPXtPvpLT3FoxJWLDiFmUd3SEHNiQ93BK3jbWzGaF5BWgu8mZo41ovBdeLMKWy9HLLRSsr3"
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
