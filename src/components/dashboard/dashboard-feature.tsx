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
    "2rWiP6QWgZ71t35mvfNG6uexmAnfX1WJAXj8vQM6kXwLt12NLZ22mpxutPFEg73BAJUFJtzN1zBUEd2SbTPTkoZ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rh23Jq6JeWtV4q4WhdtRT6fLdgjkgqcx8YCAUdup4b1o1ZwPczeGBt1NFgG16vYt19HthCkhZEyTGL8UwSdyzoJ",
  "key1": "5PhEQiEnphYHGwVxCArhZA2isSTGV9DgYcPXPuHGibHRpsRy7JrRqWDB2V5aZaPn95qx51qaDMTkicgMcpYLCdRi",
  "key2": "3RcDfViKDNf6ahofe16WXjVuQBCbrZXEFZ8ApYunuYbUkN89yyTARr19yp5LbcoYJJBe8sSpc9MhJfyNMRCsRjik",
  "key3": "5dV3bVqYJFNPXogUWFhANjsvZuD5KBLa7obQnkRvo1q2AKrwDm7J3NHChXT9vEGaE3TcaDbLzAXaa6TM9HsL1gNG",
  "key4": "4QP7qtEK3mkb81L8Cr3tvZdXRDqzyf6HjVUtmNYZc8zAzgQWJtUZY5kmquXBY5D7qiiSEdFBkudVsxfY5dk47EGZ",
  "key5": "4o8WMUJqB7NQceE5xdT4vX6eEnBi7pfmrYofErDsY4zdem2DyoE5s3sE3qG3E693erS17xGDqU4f7X5J6i67Czk7",
  "key6": "3V4MhxcKAMRuavaLGHJZDp7EoNGmWYgvrfsXgr6ZGrhyx3T57A2CPAWZ2cXsFAe1uVTa5J1yaj2EWT86M5BXu4WZ",
  "key7": "2JnwagfupWADMEBQkLkNsShnrG3qDEMUCW6w1cEaqQT8xqNuFnQL6ykFPrvwooeXqd7tKWGGhi7Ri3ZpiBSMTc1W",
  "key8": "5fB4K7ax9xb4uNWNVLebcyApqmrRB1fM2igbBBh8FmqFEQTRCz8Vw7dN2Ld9XsFXh8wVt39sDfTPrixPZPJk2D7y",
  "key9": "3ebjcSwA7GSQp4zEi4EiM83E96No8WcZ9G3Mjzb4CEthGjXPwDLnt2AfvRLgEKdWA49awW7q9jv9AN3FW29GsYau",
  "key10": "38iE1riBvUvzhYVS83hGZYLenkS4Fo82Vf1NZo43zg1nbFzx1bwYysKSJB2E2MGX5XVMw4N6eZ8V7vbh5ppXrPRs",
  "key11": "3XX96gnWap1hT13aAmDD41f4j27HjKjihpmorLTsQJPoo4u3gPGbXcq2psLGzhXtKu1QjP3jERYHfSFBCT4ruYAT",
  "key12": "3VYdVJvp1tw6EgwFTAYoj5X1bmcdRFXUnAAjkjxqimxs4ZjvccnfEFDPbRNEEBwAx6A8BPTUYPfBYXZaY1AeHx59",
  "key13": "56Yx4JdRdzeTG3hX7y9ctpER6FGaWbpoFnrGAm43PRxCer1ijoCvsRKj4n3SHdh8sHUqmyM6rV77hGLyNCj7QDds",
  "key14": "3vWMJ1c7iL8Vac7iUiYK7PgebKfdSHxK8sxr64pDH8bMGFYM4N4h7Gtp9QVyaf7TbJ99KP2mqzF7iQGuhhipy8Sb",
  "key15": "4Hgr7Jm4pBh5sJbDeknRkNGB2HxuBF1kKo5rRMuMYyFNtZ9NktmgQ7zh91DfDEtQ8ynVNfgTCcVKQu3P8RD2Hbp1",
  "key16": "56VtQXXkQ6XFb8Lx6guGpRZmwFMZHsRYVHRegbE95rCTrVWChFJfG25dYfzp6Jbw6P1kAqkQaZNEwQfuJoguor7T",
  "key17": "bsCSfV28uCEbFZDwgqDzBtVqps5C8gpSTDxrdwfXpNYR8mmpmRJdRMnCPso3jSFtWbUb1raLKG4qYTBmbFUAz2t",
  "key18": "4Rf1MuHwnXQWL1DXbGzymLmB7kQ8RJkp22bqLPruTTanaeHgBWb7TGiB4NNGPGVbx8ziDYR7PESFMhWHj8r95nrz",
  "key19": "5WHCRaFjKQKj7N9PZmZzBsbo4ozLaTfZBWfTaJLPeZJaDyMmmFTn2J4rchzsAwczGVfVyVRJUk9rv4AXgNWdiicu",
  "key20": "VDMzPd4cevWuPKvgoXJ3hbwWsRnrMxM1ZfLe6SNFiRf7TBYyt1VXBsiQD7wtoEoXeKx4B6gGxXbf2RDggETsTQj",
  "key21": "24duXPmygynFh8nNrFUxnKgFY9Ri7ZV8jfR8stSqgMkg9uXD5XA4Wy95Yf5HWAj5MXjisftV6k8QpLSGgLRNv889",
  "key22": "4F2ekhCoU5kkcUHsDkh9rf6RfYK8ut4HyEQiDvPABoCUHUWS3gR1B5vKueLB2umKPmv44EGzyWRxinCQ4ZABRo5A",
  "key23": "4TGLEJpQ1b5m8MHoM35iukfuPqdYGTEBFm3PfutDBRZqH39N2V1V2PhaAD4hEspwdRoBsNj76bWNTfEe2YBKQous",
  "key24": "329Hmp68d5e3B33hyLMeP3R7JwP1i7gyBKCHsND7qiavzYQ6dXwTwRiQSZ77oaZaJj4tBrRwnCrkkSjLyJtnrtt9",
  "key25": "27iQGsNGtFNdyNcGDAoT253BSvSbXN7KazjQjFAQxHh6o3GzPtQ13nxPnj7FVqWQfRcSKQWw221hQmGxzsVnmcW2",
  "key26": "3R8wnwRoEoy6J5DL8bpSgDjU1cYyuUNrNeGey1H1kzXmFg6Asep36Cy9vmDnnVQee5J1mAmGxiCzPRHDiozoF6QQ",
  "key27": "mJC3PxngVyAJ4YxKKtoct7YnDdZN7tu9ndU6sy55uag1DzuW1m4Cx5MawwJmc1TKGFv37am7NRnrv8WXCgueDUa",
  "key28": "28hNx2oGbaPAX8kEdzNvqWgmQESAcaV4TkBjkhnkGFkf88mpcrRjNVDZqWtzBppwnEF17hZwqrvfAW5awQcU47FL",
  "key29": "3b1KP2DMNAng9tSjDD7FLLW8rZuNPnXAG4tc3AKtyQFtNMV2WWeXCWP6jWAAf7VBywjkcGNTbLrBKe7xC1NTUUbr",
  "key30": "32m3kbZAAGgP5k7a4m276xGT1eV3AhHYDkVyxtxMNqwDhE3Kj19DnqEhordFE3ZqJqJsDwfAgJEcbojfKvuXYCoL",
  "key31": "3PPWhJ9CcReJemrjddCdD2FqVmjGvkLDRYQEg6aYm1pouqphCtRGNJGDEgDY5C594kzxN3Uh71hyGv4MaZmiYV3B",
  "key32": "kMWAMgZqkj2a25yToWXdKrfPFx3Etqv84GcGbvcjuxL6UT13yHhUMhnCMxqV6PhfhWEm3E7XVvxi3XTqmK4dBLE",
  "key33": "4RyZgcjuT8qKFDjqYaiUESzHmyA7RxBVzwFqmvybsPz7fQNL7FVeRZTCJxuiHSZeVkUCVY1oRLUSpdTqknrui7wr",
  "key34": "37gHHuGtncEUTs4ZKZdaM5khw4g5xgWi5mvAhGaYWcCpwS8tBfkLewXnnbJzNfRBzbM9x5aoJTmmL5hBVJTW8CdY",
  "key35": "cuLjHDzixp7y4nDDhVKPTjkirfzydSjgJZR8cyGw8nuMxJ72QywHFW2nYadSX7oS8QLb8GMTNtAaWghTnPGxEjP",
  "key36": "WqkGMSxc71rrRMtCsMCW8gg7PxWQW85wf4zf6FAXE9wJCet7NaRpPmoa6nfSRL9F1frK7AVwgeDvt2P4133NHJT",
  "key37": "2aL3gUr5dsntZMgCAVJ6929Jeg88vR8vbE6ZEQ66ZoMTpqSbUpvtiz8aKMHS3Pu3TDkZi5UsCHKfvzfGa9k5Cz3K",
  "key38": "8EWCyz8quy5VnKVHPuYbHvTwhvGDXHmoKVKXXoUKViW7rCLf1e98BVcLt1MXmLV5qur3bjcJQPfFoLbvqLpoNwX",
  "key39": "2FGKDkpyq2noL3vBNb1xnVeWnsDjQQTzQMSqYYY8zzyLcAFnMjR46HTnqpMUPaMDEJoezqcq3o8hirW8DfjdUYSo",
  "key40": "2e7XRs9oBkS2kSscuvyQwYxcUvY3DwnPV9uN3PoDF6HEuSnHnM9N64wBEPRLpjNrRGCrcya3tVahv9rfXWrJzQs4",
  "key41": "4WJxQmthTepDBjvjF89KUk5GJr91J5s4HByyv5JDsoPQP4wEpWdEpF2bkgSzysnPhBqtJDbqB3VGgviak4kmdq51",
  "key42": "5TQFbF1KQVZzRZAZtXtgyGhPXQ1Jddtoo7oFL178yKCAyH2tp25dFFviU3tqgzeJjwzgK6tJafxHPwXKBDmLgF3J",
  "key43": "63VYRqrFoXeJ4YUfU6T3cEdrbcDfoTEurwfUBypwwLfABByhh75xaVsgJteSTJrbzqos4z1k135ufu4J9qqZGesA",
  "key44": "4E6Se3x12APDagxT17sa94hosT4EZq3ZCbaqMmXWkdgoxXBuYD9FEnQfHRL4BBng7FvVfbMAkcLaEL49Hk5upjzF",
  "key45": "2icsecNCYphEbRA6E4DuzQTMejsyVVSNaGWqiZHfY78Q85kjZCrwVeLfQn67VY6XbHBhXnBmKfGBUGi4f3SHrshQ"
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
