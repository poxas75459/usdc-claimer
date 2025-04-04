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
    "5TsuKGGAJwpzsXxrtGQSA76RPsNCYxHa7thA9PsYLd2R9JrD22xK8nnnDfWXqywVKTQMwNbUuDJdZTxyPkhq23DZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UiaMvyuE2wshAhBFwDxCME5STXrfzDndWLxEWF6rtPba1Vp2wSHapViJA7HuRgsNCJBBaydBhmMCti8txq4cGuz",
  "key1": "2RiN5rjqP2dXPPoFMDySpMRWoJSCtPVyz33C3BPbmh7BULhmMFEZSiMK1UQoa398dbBv2WTtkW1JgQsDAp6JTiUX",
  "key2": "2vB5eaESCE8cSwMBgJyY9CAEz7WzPjmxSb6x2eq2BgNnyqXi1zk4xH7Fm75A4b862WHWFHHpBvh2kBydy8s1uS7",
  "key3": "3jJr16KNQcmnKY3K81KNEuHTiNucb1dmMvGqgMAXVTJEF2mtPQV6UiKoy6rxBjpKz9aghMenqZYzWZ8gyw3MAbX2",
  "key4": "2bRWCFrKFq38xGwbnbS5bzJe2ns8QyBfSmyyMpXn9Yp8F5qNdfBjKQa516843ZANWqXMknTza2Tr1eSZXxsHT1VC",
  "key5": "2m5nLruQVastexvuLhY4SCKW699S9my8jkG83GBBCo7jfCN43LB3R2HDzJjE6ny4ZptSBgfMcuU2VuYw7eAeKaj4",
  "key6": "3PAhfzzCaRqQDbUADdJ7TQnVjSNdzTx2jmVrM9aSVvNiaqKPVkSQDXgnTBEYNNTxL9KhYoUNEUxDT53hUmjSqAWP",
  "key7": "4GktwC8JacX8Nn23Y7793auhojxNVZXa22EYN6fg3WGjj2jdbvw26DqfYrZHCPmjxwUHLivgnPznnqixKvkimwbF",
  "key8": "4qSeybLhA2CE4WdNfmgFKuKoXB4u7fvhEg76jLzHdJRcvsNi3Re3yoNy3R9uuEpPUYLrBCaydc5rM7EPX3sNg7Xv",
  "key9": "pArkWmcx9E4AagQh6gWZjvFLWvhjN66kf6L6aDFQVF3Bue1exW47SpJwmVr2NpRLmxjy3Gd4CfWbC72fkjTZFQf",
  "key10": "2b6kxCHn5pWVssbSEmkjd91JtaFSrzWW38J9hfnqV3Nqs8Bj58mFXLXTD92nzUkzKqktTzBGTZpEV1Ls73ydDTtz",
  "key11": "4mh8XU7QsmKDiBWjfxuBz7HzF4sbfNGho4kXMuP1Aj7mDghtTxZjohcfFCU6cQ4cZth8UmfEuHmhjYpFLKCbX5pg",
  "key12": "3FYfzdzyJV7eAnL4beXFcaKk4XpUbRqzshLMmRLnFMGNf6wBvQG1wnpd1Sb8cj8B3rLWFM6aphUKgqeDwTpJrStW",
  "key13": "5zSGmKxAvYu1FYv1r4b8iY8wB6TkPH4Yw2oaGgzwrMMaFeMLbcktiFuc6y93cWoudHtYfm1ik4S3q26Ju3npGtWS",
  "key14": "5tjaRZjr8C4sQgLALfTuzzkupJ4FZWy1QLkMcufXp6JmbXbJGrcNwPDFVcydwP2SoFuaaF2FWDxGe93o7ea6PAx8",
  "key15": "2Gd8qY7C5M4it7g9cDZVYSdntzQ75hW9gBNKYHYiKRo6Z7i99dheBCGbFckir6RXu12CZ7wtwRRkppWSreGrNpLA",
  "key16": "3U2gziHSUqQuEVLBGKD2uj7CxpLdTY9brRW7AhiuA1vrYYXmtkZGEUqaVudsgNjzeTDUdEkXCFRrMELAsjYFedjn",
  "key17": "2vek8VDgcREYTFj6kq1oajj3NhZsKVFbHhyahB4SF7Rgm5LRMrtYPMNgaZE4ydNDvz4dZDbQcPPUSheB7R7BoroG",
  "key18": "zvoN2a94Xa1pKEGWj19Mkba3uzAeRFXXqTfnniz8FCq3a5bE6S7jx5dU3wk9AeCaaoxjFfPod6C4e6C8KbbTp7Y",
  "key19": "5icTJWqpWNiEnwrXZ5pmSfXXsvcm26SiwK3bHpcRnt19eAwYf2m849sZexZyWgtD8JHsbGibqS59RUXpqa7ymEo3",
  "key20": "2eZHDPks3cyTs9ZeNcYiaxbTQJ87usabdymQnF2DXmw4sEedxFBaHx81zeYxEVxXm4hginrbk31Ew3XKS6EQSyJm",
  "key21": "BSXwbAvrp1practLkmn88j4kVNppGhVPWBYetJUcFC4sB3e7BFBG4kFUubAYSsKcT2tLBxqEchUy1QpyXzH6iLu",
  "key22": "4sPt2Z4nT8TEbECHsefrNfKrrEuJ31iSsfYNgkcNqCTG3RcFTXU861sCppWYx3w55odcdhwEMZB7oVKyBzqdPMb",
  "key23": "xrdP5xQnyDypjVVDmChV2diGcrQT3mXfwSZqBxwGYAKrtaHWWNmoif1r8Lr4JgRbcJTddNnVYvCX3v7NaMt6BDw",
  "key24": "2FEyLtPVk7ZY7dv4gzuWyNonViGDjewXfQ3M8C74JsyPVV1Mw1kRFMJ6hXAo2UKeCFUDCpSepzGrrV8nSiLrtQbF",
  "key25": "2x661kf5o5atKogec6TGAcXtfqZR86k7JCGSn12T33Zom79U9oAjPVemJsT4SNoHixDMCWXLDkbWvtP3isUQaeus",
  "key26": "5vf9DxNCnTka56yktxUmgqnJVzVTBD5X9cr6davQvTkCniFoWoJj5LivDeYcweVyNHo3LMfqAkYCercvV9eKVNNX",
  "key27": "2wgTErT6wT7PkEu8Bxy1CW6aby74xSDKgPeMnmAYL4PmnmnBHyLbe7nWNvZUuGwxHtuuqRWKaNKCJiRyc6dueBGZ",
  "key28": "5Ay9wEu1j7tidYnLqPVsv1YwXR3AFCAqvixrwzeSzDGE9dMTwZam9iKs5RNHHoC8w75uwWJ8odkK77S6cXZ6SLJ",
  "key29": "55soaQUnnnT7AFJNCsfeKwsiot7tVABNa1e6h9iP8zRoa35YmUE4FUEfUz6sF3AtgcKjS9GeQZ9jPDKs2mq2PHTW",
  "key30": "4N9HnrCEhg1SeDKfEp5GtMPHFLAeGCGdDnyeLJ23Un9Sui9McdyakPwxrRQc78T6pW8yXNpizithDumevAnssNew",
  "key31": "4aYFHGNGaGQFWfRMRc9PPFwgtLh6NAFUjMB9qZCDUbdATqYtNRe9SV5Ydsk7LzaM4ZGpo5MEhFjAW6sgNnDbxzUG",
  "key32": "YfDJSCX962cWavCums4E3gFjDAssfVxJsUb95uwc84v7WnRDp2XKXPpR3enF9GX58R53k311t8qt7dm1kx3bspt",
  "key33": "3NfkjCBMXLmRwLG1XuemWwczZb7N4Tc2ci5R69LoxaoepBUXfoFg8gzFvRTrznHF1mbs1L5gPmEUTSuLSstpBTUp",
  "key34": "3t2eLRjsVt3E7fvRJUP5Z9bopD4ozXQMsCDPy7STcQdY28GKQYm3ynz4jydSFhFaJMz571mTW3GK1d4eQTAqDxty",
  "key35": "XzNiTNHb7z8YdprzzNHLZrRQQb1TJcTQNrSrxgBqj9qeFjr3Gu4jX71ECBvwFmh4p7mcoP7hjwy3CevQss1wtvF",
  "key36": "KTwGpU7gfVKqR8m6TrhsEUJ3wQ8urDGA5Kr3os9J8XFFNDKaJCz9hbqYiGWPDmomcttW3GMAdyoUfd1LZQmZeH9",
  "key37": "eafhw5YpEn1UsqBjCYZo7iwBXMKAtY3CKDKGQx78pjSG8ztZZVuBY6iTndDSpKdJWr4zLZxEAADS213w3FNZxeu"
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
