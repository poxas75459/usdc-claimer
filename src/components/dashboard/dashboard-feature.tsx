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
    "5uapiTdH1pjXLsgXjXRmYG2Ek2iHX57KWTXB9vo1pKJRvL3PpJzMyDMZyvfbv3gBWXb9Api4v9uM3QpXDX5c1hVJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HYA7vsRdXgXhbnGX3ZJ9JDzHTKVadg6bCqqmGHnZnEcF1S9zURGNtXGgriE2Wf63ARFkKGco743njQsX3z32vhb",
  "key1": "3GjsMUnGnW6M7dKy2YTRjD3b64iBz81yTNSfh4oWb4AuxH9TD4JQGHQ7oTYrBSufU3gDtBiUAmh1RtSEqsxtRqHL",
  "key2": "5rJjLTX8YhLBbKaEZcjjwVGYut8ZvUSh2dqhj2CxKhNKBV73an7S7j3ZGdNACavU2Xm3Nz7y8PxyeCb8xETEL6iN",
  "key3": "5NiUxRw5piLCgNUyTcywHwxTfNzfReW8ZqNNwjKrEDLvF27zKh4poXDDPp4WzsQxXmiczzTus6PfcxbKFMzNUGbE",
  "key4": "1CdN5yMFMjwEB9KRELDGJNdvYhMmT1wpjv2RVtFQfk6b1HWcAaxwg4a1q8fvKYzvbuAhmQPBVk3L2cKA2Eq9HcW",
  "key5": "3wgY3Z8z8bLqWvgfeG8P7Zbm8uL32RErkUZV7DmQvpVes6xxVYfP3rg6eFieCPncnzSuysxPgS9A8FBqprxJG2oW",
  "key6": "3Xs2fw3zVGrYz8GV9eif7XekVZL2TsLY4guMvEyXoaMTKNoKaGfeT9etaCpGsCtHhtk3BzGC4Xcveg4rYdRwvvMX",
  "key7": "616PtFYt9wz1Wf2QiEVJ6V6K4NDHBFNUzsaBMuApPzF1kgw2gL5iUvJd4d7yPeGmgEZUNXx5SWtnzmV7JhbUk6ym",
  "key8": "4Kz5e64u3KNeuCzZfLLjjXLSjHDcuNg1DfGCq2smjsjJ4HHrerBDRoFNaC2DBPZwriiawnS1fTMMEZsAQ25aHP8b",
  "key9": "5LySvjk4jF2aEqCLt7TKZsLTHhiTffdSVaLCU2jGF3gYEmVHe1kc1ZznfdxkoSz5Vezk9XUsz3aD3pnqzYziexfG",
  "key10": "258H2zoVqm5nXrtQoS3AJHGNRnCohVrinF6qLq5iyWnutZNrkuEa14mu4oVqYmKeBoZmSf4VDQS5Et5UhktdrGkK",
  "key11": "7zGvrye2STqgGAsgkYSRtHR7e2fZHD6tSLucdv7BefGt7bR6sq165FoWFsjLAjhegbNejUvcryZ381KgcQ7GYVW",
  "key12": "3TzD4FBpkwRUoS1Rb5ypir2PHj1oN7BqLeA3sRhtc8uXAwnydugNM22WGJK8skwh3o5zV1g7TG69WgrUzqeVUhJN",
  "key13": "23LpoTfurBiy214jnAPFgvPmog9mPgk83Fe77UwrCCLtNqV5tG6zHoLmQiMjvwqvYsfciRNrvg4bBTC5HQf9TMkM",
  "key14": "6pPVn8sDrs4Hu96vNTSQHqNYYxXjZpmjTRzftCuu9mnzwRDtui6ct27JB6DURSg1MfSASDFS7Gk1d5MbgNZ9yRn",
  "key15": "3QN1KhcoKaGaDcMEDdjBiUgEbTckEvUimmLKsTH41mJ6PbUkMgnAByqtywqf4mdMT4F39zAtH57Xca2wuFJtnzZc",
  "key16": "5sE7rk77PZ5VVEWZwtzKzEwGU3RuWFyPgi8oSDwfP2XQABxvWxJMUZ2RXJW7T2j1oaBfSe6i2QVojqkTSLBeumTH",
  "key17": "4AuWeiqkxz84wyF8c3rBpxmPVgF2nrD46bRJ4tteFV5RNLPEh3HmGEw3eWJzrovQaRdRB2SZTLmr4yP22zd4e1UX",
  "key18": "2xRgYQ5xDMdZwgUsMSBq4iXvq2sp5Mb1hsY39oLHuJLNRvVCdDmczN8GHpfRj6ERNubSr6d2cf8Se1iwXznPh2UU",
  "key19": "5n5e6fzbRMnL7omJ5Df9pBCfvFLpaxDvdiGfCm1JHMdSbzdHsxmcNCbhoAzxvpv9ieR3wLa8MZcPcJ5j4Abv5KbQ",
  "key20": "3n1cXZ8TfJ47dPQHGoGAeVFswXdYz4RVgm92onyAjqJtVf1sP29AQhQcgjLx4zyaqdpFSGa8ZuQZzNzjyWRMPRTZ",
  "key21": "3f8Z3oYybZmAtWFGEQC6HxxWDQN8b4yFsr6qtK9gpAHW753YBpecUG3oSaBVpQgKVkzvcCpT61vYWhE5MxTht2yG",
  "key22": "3A4rr6Dgpq8rGdr26MzsXQ5FdRwijt99JkCNAiwWcX3PS1ocEqDLtTdtrWqiTAmQQmajCw6g2Zy5ZyEFZL86w7Rf",
  "key23": "5hgdQ7LeEtSMNH96m9sUJ6uZgKSwyVh3KgsrveMqfCy49wfFqUySqKUeJiVyCbEtGeaiMTdYyxsJeBFVXhCqa6fT",
  "key24": "4iZsSRcwC6EgHn5Nux4kVsohaAQdMRTbFq5b59ts5b2bnuSZehy6v3FHYM2BWPrVQEf4n2Mdmb6SoaqXi2evz8cN",
  "key25": "3hfMYXRVMkAGsU8yubHSoF4WrJRaKip5yi7SZJuWE6B7Vx4YkL6QMpv7WVxzKLJifrJpgGjd6qQs4FNbDQuxZsBd",
  "key26": "4dZA8F65c1ne2xSR5hTY4B8khVWTTSUbRMaBbyKeNHUPnrwm8cGDjWq5g7VNiBSsMmY5N91BqoqY1ayTrWrTHNG6",
  "key27": "3Zs4kmT1VZAtZZKKaFSxm38cE4aGoALqdJFLtVa8Kjur1bZbrEZ1GNFuqWZWHH4MJgpZv6fS2DCuSb89EhcAU8m",
  "key28": "VAwuCTNCc9paR4gt7d1KfLbJikCz1A35LPE9BWTzmfVREFyw4GT3i6wdLaWi1Y5ZesaZSqZRct423zN5J5ydCc3",
  "key29": "5SCcYdjVxf3cz4EdZJNHMhTgPt8Qdu9HoXc4gkurkBAKS3FTSwQFXkkx2Ab9FwLsxkfeuHij3vDAkyf1hBiC6Cvb",
  "key30": "3xU72yuc9bpQeosTDxTGdVwUMpxYvQFMxQQr3pHHJWFxShSCkPissyiEMQdheic7ZGMoYq7BxDAx2Bg4ZaQSXeJw",
  "key31": "5uTsQCYJXb6jQ4t8sauPzrJMxXYnz3HVhgYC3dk4ECHkDuW4jJ24qMPfbE3CmxhyfDWn9cUgZWXCBcqvNuA4nutK",
  "key32": "4XfwGv6wkMhXSqUfinZayJrRYL7QDRnzGQ19RFu74EJhYhw89KTsecWRTWJs4iL7fHU7TgLDy6pHtRwKiRFRXrZY",
  "key33": "23n8hE35kqsNHEX1eSN23PtkPQUvM26aN7KpS1AtgZQ5jEneytY8roGHwLGZjH2PAy1avHQGEnxdorLMBFsDqqYV",
  "key34": "26vkRCdHCTe8U46UFMiCRpAXcEDcMmCBovBjaYtNmQVpBmMian8Nmb7RZx8i5xG3G1RC7GvCCAzNuw1q81fsfZ6D",
  "key35": "1qVRhdJpGi79rnvgWCaY4GfEBdVAXFMWHASCmPfhaJ8J3yurHx2d6DeQrYMNMDJm6Y8pwnDiLdYBPS8sCZn1VKZ",
  "key36": "5Gw2GnQS9e2oe8yPM6E6rgszsjQMnFjCbQzvRzbqa67hTzQ7FqoUYbKWycWDK5xS9RaPg8Ps1k2fBf2scNvnE6ku",
  "key37": "5uBxWSScPHmavZAxvPp62C9NgQVWkjMwfJ2fwaxY3FFK1HNMkTpMcX2UHs4ygVd75MakUZDhf5HoBFvfBCH7TZF4",
  "key38": "4XcQt3N19Z3c96WguLwkJQDGyo9E5fkxGWXPzqHJ3aWjDd7gnrdXCXawtpXqBkrFGBiJXSAT5NXJsyytsCT199jE",
  "key39": "2krUi1nuspDVjxjFhP5SxeAeuRvYQ8dLBTh3CdDHh2cLBudUtzW7W5WX198kCWqu7sct9EGZTax9KYQPd8u5DFgx",
  "key40": "5hHieEvA1tForvrkH1ZQxSGyUZAAgdQA8UbSyNhQrQTgFCyEnSfGUSrDCiB2dKrSxPwitWPAyQ8mLzfbevuFrfp1",
  "key41": "3Q3jrfGV5jw27FowebKoxJbJonJhpPy8GBcdynP9AMR5ninMBNxFK9RgtSuEMEmEiANdeF5Gr9LqawwagVqkjihv"
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
