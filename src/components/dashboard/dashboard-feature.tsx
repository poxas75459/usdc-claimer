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
    "4JHsQK8oRhEPWSVxnHmpGsu3HDedfC1bYuSEXqUbz6YFptPmVCEQp9xNrsLyH3jsVGzPQxGrfwFJw6NvXhBNKTGg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "deNjVKGxTYVYvRzCthxJ9Q4gPXwCaiyfMdzGbRosAxzY7ftWAGyH9h5CCSxF3odr8QZ8mGaTqiEiH5REn6UTq51",
  "key1": "WqHuVEwhCRMtwxDmjTWW8WSBUnNcD9iHdhheer8rDxMRVkegmnDc5LFixSRP1iGeGbnYtvdNVhWywuCuS7gXuNS",
  "key2": "2VSA2srEudsY3VxwbduUqBor7pRTYYJN7a2GrLTUa5HTGTcYVAxvhv3riXvmmrnzcw7qHShJjdfvxK9Tyrxadyth",
  "key3": "2n9dWBDTfvphKea2LbKvkEAu9gq9QJ5ohVbLi9rZ8iPoKRswbT5BGRE9Pfm7M2D2EGDeMVGq9kWc5PFzBkvkXEF7",
  "key4": "vomikNzwADECj1BPqdpgBihtdbwCvEPs8m7Gz5jP1QhBPxkmst5CiMnr1kkWcrAETN9pvAai3w2QnYJUT5dBL5q",
  "key5": "xbYAY1tZRGXme5Qe1Ty4UrToySBpnng4wvmAFa39UfVjniK8nkoLNNHxFy1cMGs432bjYCQ1VaY4ZQAwedS5Du2",
  "key6": "9ydmw2VXvWbvC5hm716daBoxkkAsfHrhyHkZLRwra771CUYYMTeJzr8qeBSqbUVYXn1gCy68hguEepVbz65yFjK",
  "key7": "3idqxqgNPxAKGH7NNVeaYt6sZrUuZEzuzh5CABpZFXmcX4kdknfFQGoJ4AD1cRAomEsXEdLbng6mvf1afC3eJxx9",
  "key8": "5tsxe4fYoCHowVb7tkWMTnc9Sby1de9RhumV4CXYa8hrQnauNyCQRnTbB8gVWFqZXNe1urZPgE7AD4bzsDmfTZz7",
  "key9": "3rRYifgvcHYMD4iSqB2V7DsCgVFxJb42YniY6FCaTLwhQayPBCBsYcw3EH4Jrat3qJJrUnrwiFSNenV8N6isvGeT",
  "key10": "5tYiwJ7WDJ9imZdkUGGmTPr7bFCZrjafZvgREmD98ovrpmueDGDm2P7DCEckEFKtfNuSVP6fTXgsN8rZxqLS7BF",
  "key11": "3jU4HU5Yb6UngpTYjeEZMNQYBDk8JwKJjjMBdUYUDG8Wv6J2HyF1NQZu7jggzD7aSjfT8EAyv2CNYhP4YZumn9ps",
  "key12": "u2ZFMcqMXfBBMV8NnUYoTT9cS7ZtxH6HuG8b5R6kZkzyruK7Y2vJBXAP61978r7KJgVSCHZbnsKeZ5PFjzxZN4N",
  "key13": "2eQMKJmhqE3jFzGJfMuHAELnLLzBVtTfyMyguoxz1HHeRQudQnCi7oxxcqTMUn7ZKrtiqetQXSW1abCWoMagxwTn",
  "key14": "3g548rWotwwnV3fSeLNbfkVq8WdXk7KCxtuHrrgZcXufqvSrt2Bgyxa8WkdwUPUHErmu95szuZUddqqT8B4qPLhU",
  "key15": "2XYXdoiKXS4BWYB7VD3XMk9v5YseJ5ThMuReVcz3kjGqcRvE21TqeMnAqGoeWz5onDA4Hhx4G5gwv3D9gr3CRPh3",
  "key16": "2KH3rnuTuYsSuGVF1Mptj66MH5YS4WxDa9Et6WgTjQXtU2QdQfUCoQh9qmE7ztnsPKhLnmFPjwMfRQ5RwXTTECm",
  "key17": "4nkWgTa8tzp1pU7o1Bu28Cbx7M7x8vx2pxUrP6gHRzCaJarVdt3dSCSamWQ93dL3AwXDeyyz4wDcpJfeCYd6ckLq",
  "key18": "25fEAaroJYMe1afVyMhaJTWzmoN8GJM7dsYKB9eY1FvELFb1bxgSuxtYo6yPC5p4Xt4bAShNEJBAx6S66wWtRZio",
  "key19": "2WavQer2dTqNkyAsusBnWuXbNdwrnypV5NA5mU2uUXSaHVngLKjw3PbFnEB7YRhuHMHyhgSqTbTgY1DR8JBGj1TD",
  "key20": "4tL9jbytHCbFmifjLaxuGXkYPMQVF5Viw5cuS1LCaoccZE9MjZ5d5xJbXkcKyf4uTLPubGB4yBSapMWZT2r7Vwyu",
  "key21": "onwFuqMk4DMUKQjDPGVNcceY6pxxN8wnAYXUj1BhLkB2AVPJFXFjsgfEh8fNVMQHcNhhbAp7Q3bHdLGQpZSnDoK",
  "key22": "2qs4LK7iThY9f2oGk1hyThczZwncvHmo5zEKvmVkmHmKi6MpeX5Dpmre7inSxxe2Cjp94epDNwVaUxtU7SUkYFTf",
  "key23": "5WmpcBiS7GWKXw3oofwsGWq2zA9xBBUpCmLNUoeaNjsC6pH2F7K2yS26oEDUf1KRg2G7LpsopgRmKciKLbFAjSJm",
  "key24": "4JgLkgKo1BP7v2UybkmnsKaetJSJAgjgxEmLrX4ATji2o4iW8Gn5FNEamW5W4udfyhLFxYtqn19syRGor1xh4u3r",
  "key25": "4MUeDfX23Xxdgi92FQF7NCZ9RrguJAv87cWwQ4UHeFyGzCbFfK4gnymvsma7SGaktNs1uZuNcVxonYk4Ygw4QKjZ",
  "key26": "2xNPtniG2FpU7P48KCRuLEav7YCVy8JavSdqrm1BubCZSHTz5eCbUX77fucAjBYapQZ8xmt4GveYbe2QfvDB4L6V",
  "key27": "2ZuY3stMJcDASeYTz4bd1nF9Gw1hNipE7BcwakbFPMkSpiTXTXEJ7rZ8GDLaLg9JaTioQwYef3MtFCyAXpafj2SL",
  "key28": "3NPGoFNB1BXo6Noj9raXBBRVm4mGbr18sd8Pt2qDqJ4JxoTLeGMSBsm9Xpg5F1kY4nK4rK4pRBaBqrQyDmKsDi7E",
  "key29": "5zCAZSpyaD2pVhFYLNHoSXnM2PvFxVaBNitxbhfhdtRRH41xqrrq4tKsXYutu66qiFAmFueRjDdNVYwpJs22itXr",
  "key30": "3qc1kaT7zWfGg1UMm1DDtmURLSQvcKaK6PMSy5XkHPVZxEwFjJrhFp9Chgu7gvyPHz8foW9vwEHbahBxj6qhoMvi",
  "key31": "5SyfttX5vEDWEfTTgDjaVMxSYt65TjZ8xamcSHorQPQxzKqaBs1z9QGvnWmUJDtnyE6aKBgW2rGU2NkNHbTzz3zx",
  "key32": "sTpw47Vwf6zRbaDrWG5tGnrhZ6z97vKE4Kx5GhNw5GnLTg3VbLeDGZ3aexbtDuVFBLhwD3KcAM93E7ioAJKf6Bb",
  "key33": "3iLo1gQseJSnNfPU5bvQbKjKXp2EqD7mUwZkedZjSZDQwsxb9eBvKwC8Z99s9Axw1RJJAE3gPzXZdKDyzr1FNCkE",
  "key34": "4YHpmS5gAF2UQcf35gb3XKg8cLGPZA9pLZCH9MDNA92eT2hQhitzEqpVRRyAKp6yGquXJ9ABsQkwczebeAzStGRD",
  "key35": "XwjELKnqqzMhc4rf18pwivc45GBH3CG9ZB8A9mu9JWDPSoR1JG5S13SaFyy5FgDTdGe98pmxmzXBgzfjiq1RVKp",
  "key36": "4EGUdBn52JsKoAZ3FS3LBynoMTeXCCWS7RqZkmm2aXrHsD9yTNhEP4fgtoBUhKUwm3tguG4szwW7Yag3FXNRa1xd",
  "key37": "2mEkRQSgHpcd6AMwSa5vkuTiRWfihJQyA4vH7BBh6ULTYo8pNbiKskS4q2oXu4zTiCKj1VxGDpYmgLhmgeHhHtp6",
  "key38": "5T6crYKKSx5FS8xFAJR6vpMcjEonqkDeEV2QxkHqyo53VgDpy4wFFMjBvjb5dzrRtGEDhEGqHQviUC4GNkMwZqYn",
  "key39": "3s7kLu2PYtELJWUqwRbze7784PrM2PQrNfumk7G6seoENpNengttcnGYEDba8AMiJbm6EPoW8kZ7GwrpHaTtipQ5",
  "key40": "2RfwjHKtJYU4pozEy4gMZvgt3SvXiWKZQGx3mEG9n3VdDSfkgLVJbh5kbHXLuEZtHgA2nXMrCAS21KgsunSbgpJk",
  "key41": "yCuJoL6qPvtWK6q3ycJNHMT6vL3Z4K57YsRdh54fnb8E2hjJ8D8RyjJoAaapbp9m5gZ8MUvKoUHNqexM72i1VkZ",
  "key42": "5Sm1JSWSNqunAsCQ6AbVgH2mA4UccXQPPZ5mpq44FBAERHZFe4pYPipGfmQEwji6dtJKcb7tRehG4C3VMtvp1Xpb",
  "key43": "3mAHPVjfwk2RUY7ybCFmh1PFdCcNNTjvn779M5rP5BqUSM6YYcEEhuGq5g9swCDjkjudtUsYTGaWLhEx7maBJDoh",
  "key44": "33jx8HuSxZyv5H3qY9UX326dgJrCU61qaj6ijfEb59X6C4tBcjWpmQX8m5JPjtBk2t6kRubq5ZkFSTHw3zuN3A7g",
  "key45": "agr5VMbCzGVDSCoZTeqeLwnEtW73NPSTjVaxscMpPBotAnyU2TYdbhiF4Q7RXvkaHqchdcVQYtAjHwoJoCcEa9d",
  "key46": "5uARLAYYYH1HR1EjKUSu3yCDDYcjkUU9wLbe2Vwn6SnfpvAs6UFeJ5DnKdprD7rjbQLkEhZuKRcwy2LTKiFd83M3",
  "key47": "4vUNcoWAJPVoBSgbrXbFMTJWoPSvL1WsPBeMDFbTsp23BKoT4sjHRgJA5ZU8BX4ceszri4HQSGsiKg9Ryi7FqsW",
  "key48": "2ynHkSLmGmZqnGUohxmNdwReqfuY81xBh5fhNCchM1PzHNfSsfDxxgb2U9S8BBD5DtoPLhR1EzyewJ7AUxzbGivG",
  "key49": "5CRjiySRoBwhPUUbEbnk5ttH1wh5HevVE4NnPrKRbnCePtqtYRZAZnG5Y6FxhLyvWPZJpbJMfJgYCj2MbTQraA5k"
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
