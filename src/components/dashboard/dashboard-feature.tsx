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
    "3SKxdVf4cCazZGBrDbQ3vXb2ZDrsYo2DSX4GcoN8TUH1MdYiGzs4GPQ3nEDyiXBvXm3Q4bdrVnLkcKrEZw4faZvw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GLJmuD2bLJ6T4RLuYYYJvHmU2ZFjCWUZrSzD63qiDBQFyFKraMZDA6yM2jMLrVFay2V65Qrd2YoNfJsaKtRpNpz",
  "key1": "4PU29yF2DWduLjBuXMWSZApR9RksqmTdkt7xU4ybQDSTZc6d3iz8ZD4vSjN8HairbJBgJLgAYiWx48FfqBHxp3GB",
  "key2": "4DPdgcYeMdcDAD6LdSrkbrYV3wF1qLZtzPyjyhbwyR3EnibTpxDddLvckA62djFRoR6vhCRLm5prkxmG1tP3tq1q",
  "key3": "PBh9XVBj8hrTpAjvtjUZoEtGgr5Y49W2nHbRHuc1hmzTEy5cP1xv5CXhNGoXdfKY4EZJM1pX7W2iRACRADuWMHW",
  "key4": "2PEoPLKC7dQFW7GMDv7Qgk5DyrGqZY7JJABdstvc3cavzZPQe7oAaWJdJu2uBXUoBfkiWPmevsccvqK3PAtQZtEo",
  "key5": "5odbkWmTejd5j1xJ7f3R2VQzU7hMCRYtqxJvMjGc27rEGVZ39z2Z1txn1VVesGKHP2727w6seR5rPeXR1kNqdC5V",
  "key6": "2WLcWVBqMcaE8jr6GS8urssYcCgbxZVSwwA53CcHCPpXvMJngqipYP8xdMrq596rC7qPeK9kfy9JDjnXreef3Ueb",
  "key7": "5iM1FuPQin7eNw9AaeKgDJe9YWYc5RdLMJ8oEX5dCJrR6k8i52EnvJLx51irmXrRwWpeAsQAF5gP21ZCNjgrQHFS",
  "key8": "5fHMtu3Ub92zU8449DQquRrz6ak9DEVhiTbRR5bVrsdbvWumqyfLUv74Ld1owbSnuBQUjFaE4RyWrrXXWauL11Dv",
  "key9": "kCtAghnUsuQZ2iLEQm52zA5dLLgyTtu56wEivDzMeSBBypCLEeHoaW4cvgyypG4qW4K9WtQ3o1W9VeaTcUETp6a",
  "key10": "5KooWAV4CdnHrpf6UFRFGDHnY69mAR8VfpFCUZCYa2Hfuusu3jnhaMQesBD2sDZvQDUjeJBbHesur2x6uvjmDL4z",
  "key11": "46JLt1KxZCHD54ZaM36woXYV4aNZXkGtJuFKc7fiSbA3GmJ2nZwj9CR4157TXC3Vye1rsV527kKg2S6dbCTBzMJS",
  "key12": "5nLAkmhdvN1QUby2aPyj7xF8esonhaqekV9TjgSuYd8tKLb8yPBHzgtuXtq1uwMEFjKXfBqg5nVjZMwe6df1PBTj",
  "key13": "2ikNTYqVHjEQA7k7aq1n3zWzct9ZwgxuvzT1D2dc24PrhZkxpiPy5NL9BEdHWmEre2b99LDATi2pjBAMtY6AiRj1",
  "key14": "5FvVGfn2G8w3N89x8Y4zStF4PREKrrVinf2PJ9SPXk4r4eBMs8devBr7zcWBqeQmu7F6D7M7ke6q8ytTiVKHFDui",
  "key15": "5aYd2UGve4SVHwgEudtLxMm4mG29Mjpe9wC2n73X7hnEaRrvSGKxesov49nR3FTbZ9mQVFUGLz6By7Vo6pdVrKmF",
  "key16": "2XGZug2S23JArimd3a5ATmXJcdTXRX3o2PimgFieMWgH4fMErKiox4quQ9rARVhMgfzTtnTvgWd4dFoXTMNrYmNL",
  "key17": "EmsgeiuWxQ7wdewBneS8MiRQzj25BAuGXn9CQq1D9Yr9bBEjVJnFtSw529VPXfKbqXGXiuyzQCn8UfD8bnr62ez",
  "key18": "5pahyvkqiU5UrnxXG4H1a1KeEJkr2JrEJVnUBbdDQ6G7qsrHksSKqp7QCpArK54h7RwL2UCytmwFcJfNrsWgwogr",
  "key19": "hK1yJTxPYayR9Z4GMSYqUME8WHHAGfyR6Ypraw98VqkTBe6mbbYhMAf8AjnaQkRgtG91uYrsToLsppJFumTc9BH",
  "key20": "3VRf5mu4h53YFResUvWUE6NKDWoA6mCFvQMNQWn8g8S5T3jMcgmSzwdQwCB92VcaNJ9NFHQgeTt7VbqX5qhL9NGB",
  "key21": "4hG2bY1Q2umn6U5tZy5xoj2jVSZ4ZfSCBEWGheTFqRUtpmFYwrRgeY9YUJLEY35ZEqhtBUEnsLBuPob3pGA2FmCD",
  "key22": "eTyU6Tidn1NKZeeWwZENHfJuLVShvB1jBDSpyHqpL16fsB9HRzjBwrbtEDjUCMeydCvmWGELdWDSMLwTwc7o9W3",
  "key23": "3qfFroqWRzRzp2KJVS2dDfekaHJMnMzkU2w5xVqHhnsxYwoWHw7MDaFZdZeY44xTk1QDynZW9kmAQce75H7drk8X",
  "key24": "4Az3GhUakFZw1zQXZdPH67Cu4SeFPT9Hc1KCtUzz2TiWGT4FxMB5UwsnKH2c116S5wYEYSBSDWZbRsi3z9ATAvWZ",
  "key25": "4yTvnSoxT738V3uNXbiQUUB7Em8XsUPBGjZn1Wr4UGXq3ZtRiZT1SUWYNZRjGMBYPZvybibNNheiGFMn2q7SVknP",
  "key26": "ksJVGzJfvrc3SG3MKM9Uxvq6hUJovs5inkehrcVQPimfDzijXp348gpWP2Tn4aQERLFmHVobCBuF8du4r9mgzCd",
  "key27": "PS8zYbphBnpuJfzEzbzC5nc8N6bhRJQTQtQswD2mTseo5pExr3eVrYFuzYSibZunQP7ofwVMmq8He51XnV6r8u7",
  "key28": "3ddUwSWaV2c2UrypqyJT5SLTbKmjqUP41p2Lc5KbzpfzVA6WRUEnF1mN4bQjy4wqq4Gok4ttCqq5kWtfvELkHr9X",
  "key29": "64iS5AUK4RQCRAVCuK9hwirPn3AP4WkTZgHmrj4qhoUrVKdkBtmKj7879g6KtLVFuWJPsb2aKJdqTSams2dSS2Es",
  "key30": "ukVq5whNmu31A8HGrXJdEcvD7QVPSYVq6TrEBoM4Cni3RbkoCCaRTH1anRaHmPgtJf5UkimH5Pa2BCumyrk2ibK",
  "key31": "ZVhZCgCyfDCvTQ1jC8SMmLTerq21TijN3vKT2fXgahXreiBR9P31FRDKGtsGXMwaQx7AizLTNZKxrpuKrzKxEF8",
  "key32": "3iAXW3FUc2pLfMNHGC3UU7vJE5J9s2ypQcV4zqep42fCY4V1SuR6RN26DU7EYDUjN9pnL6ZJhxX9X52ZFfQVKtod",
  "key33": "pb6iGYbd5iqUydAXjakKn1TFDooGpExUVZ4H6UqNk1r8KLwrq5TGNcxTsE3pNbx6UV11ttuN7uXPpxfwzR462bk",
  "key34": "B4TofCgHv2jCKQHzc6eNA64TX9VrU1ErtZ5ekTzLQKuPyiHpbmTrjZdjQNdDpDdEJNMcHJyaW4zQhYixdyNUn8y",
  "key35": "2a7ZsxpQ1tpjkc58PjnguECo1yLF33a6m9qQ6Y59RjNKGYBXU5YaPHUYWsdpTeUXSamHQ3HegiU3igv7fouaANve",
  "key36": "5aHa9N3mkbwotr85JUsDGSfAcEoL9yHSkaW5daS6ZCAHPzgoEDskRdk2fMxqaGKVTC7c6aauxxGVD6EqwdCMwcaB",
  "key37": "4kf5iRUghVv99S2QLdqQWANuygibPvu9BgGGUarf2Mc3uGSd3XxGFQGG1qcssn6c8CNqKCPYmYHqhU3Ew8QQtSuB",
  "key38": "4qjMoj1ymtU17paZid4EjT7yXaspfHGVT1jBZNFoZg6Fbd8KNM577DiM28bF8ir6ziqVmqFsc57kJWBJcAkEtzvL",
  "key39": "2ZDsagzw5AGGYeBcBCLB9a6YjYEmJwvReBTDBbRr4nVnht553P7HA9f8yKwtds3uGvs1xR8Ubz58smKqswzHxQYR",
  "key40": "5cD1eJzhKa59fg12PHohw2ESN1DYG2A7FZKuwZJLzBeN5cpe6cQ6DZmcTRQCPgnhEJKJuHa6AU7f59UJzXZ31ZbW",
  "key41": "2An25R1U35R2Pc8hybHUsuL2e6muaEEPGttyRBsXENyRknWCPhP9FiALq1LPNi87jLhmZUMHMxifPrff5FFScZcj",
  "key42": "3nR2JVBT7zBzpLynmszrXqLCvWakFpPZ8YRdhsYf1w2bKBzqd8sJjEwCeyNoR1WSLw4UdscxJTpHYWRJd27s7Aiq",
  "key43": "3KccnPrKx3L415rodyGq4zT9drMbPU5YjbTCn16N4xgzH6iXzbKyhPYc1ctXZ9jRMEzqq9gKp4aqVNwn54uq7mAg",
  "key44": "42JYcF4VWhWjWijHuXYaM1SXsmhYsEAtks8LFdU5ys6HzDNddSJGAH3naF2wzCE41wo7bHNTNS3WX8aN7qfW4juR",
  "key45": "4tNH9amAKtV7Uw71rbsA2PmVyc7WjQnQn912S7hETpgSKn17Ua1w7JQyY3rviZi5DutAevhAjxjNbH4ymem9J3rh"
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
