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
    "5VXyTavJTeNB3unKbtmyqgrvqmNdpV9234u6EHhiAnXi14XbKLRnPiJYaZNCMHAaEm2Ly5RmQRPyu5UdT2ERAEh6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qvs7aX8hDi9Jf38BD19iPAaaNeFiGfcMB44kvViuoX5Y2UxcTsc7AbCHzzntY3xwqDCdDZggghhjmrr5Tkswedu",
  "key1": "4CkkFaqL89UizAvG5ZJVF4eSzmdKQVPRp2MUAKmfDPWzLnCCw7Ws7Vj47rMvnwhiA9c3AddGzDucoXNWW94wJ5Le",
  "key2": "2dL5d4HpPWcX2MDQq6bgCxvZykvWFmUqoNqE9kmhfvWPdfJTQupYz7uH4RJTus5WA2UcYPP3apuYX1N3V4LNpQuz",
  "key3": "55JRyXU8vhEYchJX5t43YVTRnwoYpxg8HSjWC8kAhwkZytNFtQFSyqnZgaoC6bcJGj1VHEeX9Lowki7Q4GBSCoq1",
  "key4": "23MQNpbjeiUfq5P39DYrC5P9PRfVkN41tZiH31FeYHoMwYdtbfFRLmMcCnMek2ZZpaPp5zGtKyPfE71Md9v1V5cg",
  "key5": "38rhWMfnVjKvZw93Xy6fqFXNJi7pMYy5pcScLq7NAtmhVrRRypfNLDmoNJA7nVGr9abmr7AQNNdJy6sr3Yqn2r1L",
  "key6": "26WrFKS8v9oggiXeWf1Ly1Wgqw6NZbBVPX8uiKnuet1HWHNhQDsudnuXUsMYzxtpxju1Lv1WNaNFVVzCZ28GPEUc",
  "key7": "3tU9MbAFTQSVGk6AR2jpcB2zdZyztNp1qnHC53C3bSde5kNFuqUuyrTVx55amtkoiupvCKTVCbzjpdnfshv1Qnhw",
  "key8": "5wnvnwfwc14SwNWv64yr9o9it1kqp1ncZyykadfcrzPe9froWECCvoDdikz58vHcDRBXjziq7tdbZ3UFq1Vauzor",
  "key9": "2RS4iPMnARUScHCunN2MaVgq3wpCuTD1cPFqSeS2utqSrkAiShUMcVvW8wLhzpGNWodWktwnQKmVbeJMjyMp2rSD",
  "key10": "4Fst8cHvhGKRSqxk85Y3utNGijko8SNWCvMPAjK3XS7NPK3V8r5jnxbVUUKt5vcDiBy5xjRL9539hRraD7XRiQma",
  "key11": "2SLe7acUd5cBFVFpLKz3DnSr8g7TJyBpchpuBhR3p6TyPimWdiXBnaH8KwLPeTVy4ot8SXog3ymQeuVYYiCtqDF2",
  "key12": "39Qq7ZDuPxon7thanLQdVUhtLcfCFjFXAfmBpGmxe6dzwHnxsuroU5UJVjvjYQyhZuE6jYMHXbt4qMLoinpu5BAj",
  "key13": "LHQSN81w9LwmCQJMuS6t2p4ZxXuUchd28fHif3ZkgBZpRqBxL2vN26wcTCbBi8HaEXhh4cr7N7bkUXsNBKmYXjT",
  "key14": "51xNoGFH5Ho5RxtHRpxfuttJvuxCExM97Eu5ds6oMHywjQ5Hya61QVFfDgrndhKKMEL2YossPnz5qkmXuBmbmh1z",
  "key15": "5GNtV5tLFBarwDQGLXXJUHW8LDsvkkXatawmDpwqVaGaH6GGXPyHb5HXAkFX3ym2xj2jxq35pbzxCNHfu8Ppd6XS",
  "key16": "2QeSgaVHrVxQnYsrcsUU2jLhaheMBNuSKD1vQPs9BCorrrBbXCVrvrYewRMNVQXBYTetSvRzt78FwzeXb2atf3JA",
  "key17": "5xywgHNfaEBwFB4B71GGejSr25NWKcVjQjon5hCv54DGsQUN1cKT6BYGqkromaAxtbbHjq7wAM5NcqTviPA1ZVfa",
  "key18": "2mX7ZC6PRC1h8EJserAY2CTw4PqwsfK8hygJW3MyedvefCz2h6CXKo8HxSUzQpUpAL9nYwpzj2TP7zaVtXs8kHcj",
  "key19": "2QCbuBH2PMSjNh27VjAkkALMuucnk24Js4PYe3NdhhfDbQrDqkBtnENx67BxfLHAejo5s5h3xpqLbSvBzdsnkb7J",
  "key20": "3Tp9cGpoqRWJmeqiNvSGuRWNqtJJ4PSnNu5ahiVDJXQit1VrhUyX6jNZwZ9Gdf4BtAyd4Do57jMY4TGu2J4bq1oc",
  "key21": "98DDaHfywZCcsyTDE8xcbaE5zPfEBxFYP3mx8wzsmodBccWTrFRu4rwUB2o3E8hzefxDSuiWbFuHjpa7q9KGU2y",
  "key22": "4AYPuKH3UpaLAGpUHedEU7Mxwi3kiHURJSqnBA4qP4QgMPbhRWwvCKGJV43EJNEsaCq3U5mFuAu2aK9PXtTiiMU8",
  "key23": "4rKVBPkAtr8dpRNqitLht7rcuZki6qZPh5aUpM6ULStWzD8zysy8f3dnDjCcQq3v923LzUYPLCqZHPyDNbwhpsf6",
  "key24": "E6HkwKkcyNVVN75S2CFT2jDUCGAepfMVJQ6TUccnapYEaaDjuSCaEUfgRtGjRVMcTMj2HZL18GTe8pRhKe9Av3c",
  "key25": "4JbxJ8H531hAPd1m7ZCMcypy2R6cgH6Lw47UTAGPWmKzyHY2scmLQDRxtRgKsPR3Fg6tq7rgZq2GYDVmqu9gkSRK",
  "key26": "3NTvyL1QCEg5fQgFik4BCG8nPfTgpJEg9EHMZgfxWakoyLiMncq5feNoBaxMpBdNNPaoQyctAVmtWDkAjAZz7qan",
  "key27": "5Z7FwFaH1pTiLBLQLGtXKFwL1EEvpAJgKMepPJ3tGoMqyZHcaX6F9cbDmMay4GCvBmW5FgH5j2bSu1aSvFLTGKx7",
  "key28": "4LZLo4wy5n34tgbvBsB9ECPYWhxFUFEAL9ccRUYTgMkJLziHfjUbtu1YknxeisSF7BoHGW2FwSsiWNZdMET9EMht",
  "key29": "4T8A17nJZcjgNZaJud8UxBVyELWUr6cPJyN74DkHWMCFqPQvDSq7CwrRf2zxGLVRduxBWMr5np9VEFNY4vGmfU7a",
  "key30": "3cCYn3cRb296FnqmGJsWzMCLGx1FoaG1eHKcc9tAQSqcDkJ8B3xByr2THSWg6ommK5WoBa9Sk5EqwYamursVgNkQ",
  "key31": "5idAf7aCAxH8AKtgM7K1amAKv7YbitNMCCTVdhp3SZ1zjdFEft9B8tYBrL6m83mgwMxRnqoGNZ2preMPzP12e7Va",
  "key32": "3j1ASCNdhdiTUrhMeWCethhsBaqWE7foM9dw4pf7SAjqneQ5kLR789oPrmDid5nXJjxn4nP4ShTCrPauSGcHKU1b",
  "key33": "4zjYNp7A8ChrGrzsoozCy2LcFwP8Go37ZPD9khBqCpoMQL5B7hzL8UnqauKHmEdExDo6PT5Yb8GU8VuUzPpBoF55",
  "key34": "3AMta2LDBhr6kmDxCFdskTwJA2jgbTZaNDfBqiQtHTyLKje9kuGtrNaTVVsAAMG93YowLW5msov9C6KAmStATioE",
  "key35": "4vqbCQMvgkZgEasm1e4W785mFsWtmDwKzqAw7kNHJn9MQWHTArn3zgx4gkddimH7ANocoUghiGMP3hfscyUJUb8X",
  "key36": "2bg6zdcWNqiRxoc3KFRWKamhYCnTsy6EQkJQGrcQZZogWRY3zPDX5AP39Aeba9XHnwiE8N6D38BUvVxb4XCvSteS",
  "key37": "2QJSBbjMShd9HDzBjfkk7uaQVzxNVD5TSBYcLjJRkZA7Yt7cpDRPSDAHj4mpt8xP3dW9TaN3wyAqF3NRDCaFpZMZ",
  "key38": "2RVmWzKzk6oxnghTxBEnVzLZuS1aLJcxkFozeJEfDt7zFWFSFhf9tqVB7PFf8JU7huF6u24uCX6mDm5pgaPReTBR",
  "key39": "3ggdnUs95tP7kjutc9AG9DhgVxtgXGSKKJ5z25fZEGdfvPdMifo7DyL9cZtXYZTtYWfetzhbaBPLpKg8XZJXUdbq",
  "key40": "4hTVwywrRhHR8tW6JvtAP6QCpv9VsFj8DkhPtHyK94W537XFAXLZnf25ZU9mXVnkthVdfTEUsmughKwX69DfVfEy",
  "key41": "wtDitmEAMFTMrZXceDoHXRhXk3ioJJVDE7dk4JG89Rh1dUqB2aDVnj8ok8H3xuJMtLMUqMjspiCD63FWw5VSEc4",
  "key42": "WzpVUhQmG8yG2eeXWtqAFNJev5UQo9Ke2gSPHdBi6ksAN7N2EwJydAvwnCuEFbccSDJneLg9wmKjWZJPo4QbSZX",
  "key43": "wKkoQ37tnzdJzXvXnEr2Xmy9ZHGm3yvqkGhBw3xdKS5DeMpoW1nTm23em9GqbBrrjx28tHgbwmajHzDzGiosXJr"
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
