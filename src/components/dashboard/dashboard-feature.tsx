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
    "4iQsZ5L3GqLAWKst53yLdZjhmNqn9qsLv1gzXKvpMFzhwHSvp2GxK43zN8sSXj8LrzMrtXUk3TsHyoGQ8YvUyTnN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34TFqgxNoo7X43XUPTkjQG2Jrp3EFuVtYCfAvX7FDLwuMzTREAwimfDuTZNyCUh3QLHBzimHecjbDHJNiU1ocwtV",
  "key1": "5VkZXa7Fr5xXpjdHzwcMs4VSVYAnR9tmNvYWPwE6wxPpcjyQuJmAB9dWWXf3XVmwaG8mMAx7SN8RryzEkKVzutEM",
  "key2": "2ttU9tFjNGMRxLcqUEUfNBenKTfracHbXjvpTnSonnm7UZaSpah3iMWXmhvapAVLvzAsBZAyTE9XPh9egcNocQxA",
  "key3": "5ZTyaTjoSJM8rn6knTMhWoryr7TsbkUDD1PSXtoZKAbWC9MCSHNWCje6x1AsedJgxpF2DDRhKBYTwCcn8Ym9ucUf",
  "key4": "381VYAhq3QcKDWNUeASnw3bVnrAQ4cCkDHfc4bgvcR51ojLFj9fxLgXtG4zxo1bGYUtCsoWudnLuw9HPPGGJhwK4",
  "key5": "4CRdUqc8TJNuV7CRCh5HB3JEakszU6tSMr7KQHqn2aehHA2oNnJ21d1ZJusu9rayuuqULrgrxqmZStHfbJfQ1hrs",
  "key6": "kFYuawgRY5Megz9q6npcYTRY9HTh3sAcg6Xo8SSgD1Sm1gpNJGDmBvbjJSfWFSesU4j7r5Ua5MmbdCzfPa4MDPU",
  "key7": "5QgvrJEwry5oyZKVGUnZ7uwVmHJjNyqL5Dm4L7DCF1ZpUJg2ZLndKrFj1nFTzmRDn7HFTj7XGtmKaDVBuxmFdihG",
  "key8": "zEmvG5omFAvDUhHwZXdMAPjZrfqYEHPrSFUzByWpCUrjN91pZj7fcXjqcjXP6rXZHNrdmt3dfRKn2bEzyxZhiC6",
  "key9": "PqnN3SwzfA8XmjE53iaw52igxJ9P9PY1HrmUhcU4oPdByhdGvdergSjDRDMxtD2gd3G1CvrYyNi3E7xx5ducSQz",
  "key10": "4JYcmVwnMWCWcVcvKb8MUcWkFo8q6DBm8yM8bmvzDRVN3sMHpGn2BeE5U6xDLSdF6zBztJJY6W3cuUBq8eombvBd",
  "key11": "nvd6go2duk4zk3LEKEMHRTh2c3SKJnG5xHuECrb9UCoAjSXSrc4AqSSjGMa6MX4XPeaMgn79TeiisCqT5sWNaH3",
  "key12": "4KQYa5aSnd8vhXvhThGtstGWtp5zdDhNS5X8YjHZATurM2vET2PyRqQzCY2JFiHym4XWPuAk6H7nYMMAJypDw2Jg",
  "key13": "5nQwEdaoUhaXgEMbwhrSuqmiGJ4kbVkD9xac7bQ5zJPVQX6mTmYF29vamgv2XYKkWyHEQnapaupGcxLDBJBUpYaE",
  "key14": "5HQoiBnv4x9MkrmgL7B26VdQsjwPpZtownAjBKAdbTb2pryUavwKeVKUew9T65m4A5GsFpuda1koJbzQZESACdnV",
  "key15": "3L5DKe9yVbmHrsqvzvc8Ngtv6LMTHekK5f5gnU4Nzho9rZwcjX4xzupvkTs7CPxdA2rcPiyw9kLibipShhU3BdyS",
  "key16": "mvoRqZbQ4nvQ19qeaLdn98GkJvM3qyyJQPraFGzzb7HevS5VeTiSsqbJaf3YaKN5cwWTshutTRRNXjd1R9RETcg",
  "key17": "2YvRHsvqS1iUtApyijeeZutcmd4QCTgxyVxWUJiPFNA3FNDvWv5opXhU9tVbaWqcEsFZgdGuvBaZByoG1zh6vEjK",
  "key18": "5WgLfk3ajQkSDcngmSnfvytzs4B35WTVfUxopcTAK4mGmoi4ZP9KymfyYkAPjLs6GwPCD4gtwUrVeiuSXtP1bbpH",
  "key19": "4BTHGq3XbCLDnANzjbxrkXZBV3Yu6jf6DrMURixLxWjSJRSry8pwazj73ey4dPnBhNpxQC1eGjvq6BRv88mFoRdP",
  "key20": "44CaBYjgcS7modFq4a41PMZ44Q65QMh5U1sv449we4QkrWyfbRbXDYwsnEDuKfndtyuea1KcDPUGHrkvmTaeJyHn",
  "key21": "4Wqwai75wTshFvy9oB1dX7ovkLdBzqMSLXyLCAknExHj9yudovcwUrctFwCZqVNSZPNXwSBMsow7GFPVq5B6foDu",
  "key22": "4oR4Xhq44htaLRTJbp4XvnRZu59JHNN7thJqg2zc2rMtDXadpaD384z9bEmLbgUKWLjQ7Kmv2weD1YPapFw3mpaa",
  "key23": "3nPSUh6mAzapdGj8NUpsz9nabLdUFZFYVDQfiMu8agGXSh7wHMCQ1yo5YmyAaM2n2x7HQ9N9NgVYTGBQWaXQ3Gzj",
  "key24": "5ks6YLsUmQXuuMtm5VMhMjUWqCZG8xxN9myZsspwp7EZuhtqs9wVTYo48GKzpUz1P9khZxqwR9PD4eiiQ1yA5NN",
  "key25": "4SLbZ9EoKKzzccpQVsM6fZucHF9Vn8UfmBPbQmPCSn7gs8Myd9XNSRjL1cgMk8Sc6uNTkrpqNAGAoJGv5sw1wj24",
  "key26": "3t4hPSPUbmj3zbHENgaLWne98gSib18oE8P4Db5frnT5tNTPS79Kv875gZ3jN5ymTFFDjRnxXcrcrsx2uXqoMZbj",
  "key27": "2LQwpZyBmfWrStjhBu7erRHWrHj9Wmanh6Ahw2XrQpa9TTLA82rCUaqeJXvUzqBBKSvY4Z82XjHX7FB4QZr2UQhz",
  "key28": "2KqxMBKd2gDYfkvP5f7eiYnhS1MjhNiEtZ6rvx1kX8K5jA6117zH6SHuAiFgZrxhRo6KZ614UYrkVquypSfNseYA",
  "key29": "5wftGLtkdwuKXW1Gcf3pFgCi78ezudRPLAiPoRG3bdWwnGuL3XwFY8DVeUmMrcD5k8Nia6DdgaazZUAdf2BuJxtU",
  "key30": "neaVexVTG83Jaa33XUe6YPsC2chEXL2jj4EBQVqu8qztU37SYNMZ5swyc31RV8RbvkFAQpQ5DSF4dcjfjJs274A",
  "key31": "2dBzeKDD9TULifSuBLFd7Vf7EMXzSZ8kTuw2P3ohLN3X2JAGKXeT3QW68fJTA6UcaMCRkbNzy3U9RomShCgtwjmv",
  "key32": "3jRkM3tN8FynTmiyJfqSq9d9wBjyxTZxuYoPomN1gdMwRireHgkVU2vJpVTMJojdZsY5oWZj724MVB4VUAx2vEGt",
  "key33": "4BTNh9mrdmiZfJGqnwy3ZmNKdzLVkuQVvi3EGECMhkygwRebHS7MFPVK4VdSGuEu2s21nS8GpQ8JzWYptF7wAY9d",
  "key34": "2xM8TsHBhsm8yEWZ1xRwx5HjvLvYnPZmDuCtMwgJAVPLhZGbTQSTYtec1UoBbPwn2attZbYhHpMyB3dnoh85rJoU",
  "key35": "2cJa1HX7WbBNCFkJfVrZ6FnuaGG11hhkow6ZWpsGfbcUabAKTtgCdBG6K6BZSAvTe4qE57MpbEsdN8eB2nqZJ3cN",
  "key36": "5cqhRsCFY1nkVT4NkmsaPfjHSaAtb9nvchfPJEr66WmqBvbHWYW95ckRsojHcg74xincFgHBHBX4dG4oMbikAFe9",
  "key37": "2LXGgpdje8yDCv6kDDH3N8vGGqEg79az6LxRJHLwEou8A1xHi6Lk26HNEGyYckiSEJUyaXbeB2NARhhCex19qv2f",
  "key38": "2bGCBXuqbHFSHvdRgzi1SWyHuJcDa74raKFe4KPSDzEaf7fyBgG6kjihuCyPwHWmJU7AZuLRhDwUvNvaP2wEmNHY",
  "key39": "3KcUHwXmxsrkEzaFdyEui6ezm5jrA8bkYzRDq3iotzgb1WWJ2UgJWGFN68BS1LnvckTpLBatq9EgYRY1bUfQRH6f",
  "key40": "67U4vybSULrnU8b5GV5PQWyZqfi9it99X5Zq8BmPQqpRQeHB1jkRP8HMn4LTogubkRsSjnB6xsEu8bHhmm7f7npE",
  "key41": "5wMQBvjq9JA9pcfkv2Vo3cmykgBzNkiJUoersVwqSdbb4L1kJMLjec44GfrB6kjuLKWSeu4et8gmvoTZZ6dZ2Lz8",
  "key42": "4ktZAPsgMtP8AUYfFkvUaCCEqUiDAHu3oVN8gjZVaCTy4cC5qipUEuuq6RzUn59JnELvcePP4FymH99cMctg2PBb",
  "key43": "5o8h98GaFzx1pcZU8gs7ykBVEKusdy2jzSk8jwDEJExbPNJPoaDSUT7pTQKo2GKGwLT4Ssvpns2WxnRLEGr9wNyE",
  "key44": "2jJeeuqcRVgVaZhZiaV7u9Cp3A2bDLr7osn83X9Rg2Q2Cct6dq7MiNKodqfGriGpPS2Lm1yiux2ADfBhb7N6M2sg",
  "key45": "3bskBX3bNGNwx59gHQFs4xXeosL3GZQuJCHC6utSC74EP36Q6ZezADDvT9HE6eAmSPFNTqMYfhxNNhSzwbyXszvf",
  "key46": "3xHgBJgdi9m77TEcc8JQ1fxqLyi2ZbjGLHa12bZb9JZSDcVuqrtyjsHD27H4xKigfhJ6GHhVAeBxhb9yWFFDYhxn"
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
