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
    "2mP8z2qSokFACCqjVjsdtm6Qv15bXDDnCxneYL66kd7bBfeVBpQjkKV6KD4a9MDN1vXoJkqAEP9SvwGYDPV3m738"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "omkr3eAFygy4ii7AJ7euuSpQ7qmgaskKwVRwZzUgDhdz6Lszg95fipB66gP5Tte119DKq8FLxSKv9d7gcJcwpiw",
  "key1": "4uf3VZV4Kq4N7jcTzJq6H4RNjqie1wt4ay56LRs9umeuiVyyacwg7ahDyLYPRaV4PXtyCRFyhNe6e6MoEAjsctWK",
  "key2": "3L8v6z4mTQZbGicJtxYErZb3QSf33v77B4syHerprWqa1bhdBfLxxFvnwXbwx1XpaeuGBmYkToHUHzPL3D1jaAUg",
  "key3": "2xTmoV2NmNytQkjE5FTVDj1acsmJqUrdX1yWHRSfU1KgnijW8M6rHSYJTGUCiEguuiz3aSFjEt21KEnZpGVZXMvk",
  "key4": "3TRATU7z4aRiqfyHzMX7r9dUghqWwvxc2NwdeCkmUdH9Va5u5uKXoahtYmtMZXQQtqA25mmjSrmeLBPfhcPYotkB",
  "key5": "43sbjS23ncdvMTFx6DfmcxtaayMVaMk2UEZHcXzveu5w27UYeCsB1pZVd9NTXY9VsbwD4Zs53p35RSCPvJeiD81v",
  "key6": "5AFVVhmmTfgGwavZfoXLXJ47jiAntK4CPNBUsGzK6ryTw78MK8QCnG3ovxkBDJmF3tgZumCmkuvx6sFD5d5yV1rf",
  "key7": "3vPfm165SFzSVaoAqLjryvcDHjjWHK4868RJFL9LA4v4aYuAeEWANyghTp84jiVH1eM8RZ3YyTEeP64PYyzRm6KA",
  "key8": "28qT9sk4fdRyExoRWGoCo6cdLi2Rssdh8tu9WGHMeRi6oxS5VUeaGh7qp3HxAXtSTJPZ9iNBU7mMZPJXKFMhpgy5",
  "key9": "23XeDUGsyN5K3YfFDuZNLercu5S2GtYo8U2gHGTyioLtjjLoyiitDNsicjbCiLE5gMyRMj6PtHLWKMyhDBpZ2voT",
  "key10": "28sKrKRvri9aL3SqPZ7yJDWTH6YtRWJ6eFHE84C6QTMbTwdNUBMkJvEeLzjcSv4RoYPcXY5uLXeppWogswjxMQAs",
  "key11": "4mekS8f2FD6pXqs8ocjwSoe1845QoztiYHuEWCP5fDxPQAD7gVB5XH1TjMd6FrHCk5i5Lz47uAt89SkMNh3WBwfN",
  "key12": "2VrPapzGxHo56ukBzw8dgevLEB4wEtYHS6VQxwShRzqugiVD4WPXHekGy5fkVnYjN8xsxcY5TqwwLaEqg2kLMuan",
  "key13": "2vkmkEdvHd7r4NLaLD7kxqG8sWmBnAfgKczxoH4Vv2UVSgT2gJMe1emxhyHstzb7S4pvfoDNV5QmTXYHzhV9fQrd",
  "key14": "CUPmV1YevCYutuBGgMYrw7RJnYJmRJL6H6WVex8BhUwbB35Kd8S4e4ei87UsQs2d4RPtP1ZSx9fU7ayXvaTu6u3",
  "key15": "4Xzr3wQo6zD2Gkcctir7UMbMWE3wA3Ena2wTtXyN2F5Up8wPMy4tP5wQL1iAyQsNc6oTGJKdny1oNiymoBkTnmRN",
  "key16": "2TtWqeaJUuggoCvbPhJvVatDJnSSYb8Js2cKmx3V5PSeJkV8E2WiLN77RdkktR6nyYSJHgLd2hUp9HKPAnvXnzKc",
  "key17": "2negRyrC6doBZa43hupzGkdsov2SCxbxiN2fiN7Jpbz2FfeNmQvjH8NRPxtZnGGAvCFrX8Z8j4gcUrsxYBY2GKTR",
  "key18": "3NnxkJq25L99CSiUkjAzAf1NxdcimSe7Ev2rTzw8CwqMFdyNgJG3dHz5ohnN3jxK21PoaE2uu2VmvgrPu1n6KKWa",
  "key19": "3s6B5neN3veCfAxpSXj1K4qG2quuu1kTVsX4RyMDZhGQ8ovhpQHE7tomBCVogTXntKhCM1x3GNVJxL74EXngn2Wb",
  "key20": "4wM2pgN6XaHg7Cm4mdZD5vd3hfo3dz4xrFbzX5c4Rs683iHDuZ644ELAa6MTUuMjHNEhpA4NDhyJcg3zAKDM4JVN",
  "key21": "3WBY86kTAdPvo84vatgYH4evn5R2ydG2YeGCgQcEoqeSUi4m54mpfubrTU8GRnmxuW7kygBmMZc9MmwsYFwWjEKC",
  "key22": "4fmUXTxwCLoE5pCo36GFA2E5UiNQoc1by4nCJF22tyuK4pZqgLjoFceeR2obVRL46uuk9YiuNWdvcCcuwt7vHLMn",
  "key23": "2Lrm3SZ5wgd95CmPu8d3GgV8qAWJ4wV9Sk2rS67TUFe36seWA8H7cv4TjiUiJpgkWzUK8JbCDZe8L1chBg7KEzu8",
  "key24": "4pGfiFo3zSr9aJmFqKjxw16iPdDWWDJMX7sNPrHsyTUCTyNZKq63BfxqBmCmeydKBrwnmMSxtUEe4R29SmecstHs",
  "key25": "5ATEFB8kgy4M1HuskRbtj5NLniHaRNwr7wAUifnLdLX9Ww5BozegPM3qZt6tuEox4HkQagj33mySinj6amQSyZYU",
  "key26": "4wvN89aLYNYfZjUeh6UTyLEKYdGhS8sxvaSzDkRn455KAya2EfvoX9spepDW9pptu3mYe1b18TM5aTjNBZU2AFAy",
  "key27": "3JVGRLgaqBNU8i41C4HpabLFeCaNWPRgcLkokKAHNVLiikgkCQtSw5VPkVejABa7QEMvqhC1TtSEaNaJoCJNsJdi",
  "key28": "2LejftwXT6KoYv5dh1x4ErB4EkHsTURNeqCjCc1Ffa1ZF6aYZoDoNqRJyWTtjmZCgb9CpatwBQpHHR5p2wihKEuy",
  "key29": "4QAZzbvEF9Vc8Jwx6iVKSHwu51atF8CNBNzqmtZ5a6q9hrww4FCLog3E2nrQSssGPpcS9jByPTmNeJx3zu7LDZG9"
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
