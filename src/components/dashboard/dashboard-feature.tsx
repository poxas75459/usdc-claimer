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
    "3TNpetvoSZz5Y9HSRb1UrP7hruCAdWi9SGdKCQz6chnw8hqK4hTTHiGaeL4rGXSuECNP9ubkiFbBM882MUUSAJeT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r9wzztmAWDVCcSTCmbiW1fY5UgYPo8hHe7UjVx33VsiGLgdUptYwn2V89tHjESjmEq5kLLzgrc2VuAoAr6m9L5L",
  "key1": "Z4hkLXdFpf1mSRureQcgCV4M9cjkpejxWFnHZBeGCzC9R4ipr2CUQefb3ftFfwfEVixG88HoxmJxagiSg3iRG5x",
  "key2": "63TRjjZhd7nqK67M8mTtTQqYQ4dYVjanunCqMLbicy5qCFDuLvF2haiBe4jvAKfCme64gUstwDsKo1LTFHhT9NLm",
  "key3": "3Cgw5gPGPqduM8aVLdZfoYv6bTeGozpwkHmPxPTcSJrApBdxwJchPucDZhy4cowsa1ooP2apxymsM8FFsENjNut1",
  "key4": "2yDsQYWpREyHgArL2kAdSWFgYCszBJxHK8MSr5ioEbAfi6EjCwUYXbaLoxG1QJXtsckPFCc9KT3jfJQtxoj7ZLDA",
  "key5": "xYS76RNC98QyMdki9AUD3W5fGw5syPdJBorSDn5jAs21himosHx1m85ch6anNUDotsAJPqfjDkEbR6KMrEL5Ym7",
  "key6": "5tUYH8DBdrSPfxUXtumqDHo3hSZLgDtdzdeGEzqsdbfCo2TusZm77wA7ZPcaq945jkbBaPLMhYebzQ1u7Lwi13Si",
  "key7": "2oRqGxr8Xr6T7TMG8oJvku6DCmy4XQavr472HKeCd6nUVEPKN91wpkj8wWBeB4dvLcK2B7NKKSnuySkUky4uwCh9",
  "key8": "41y4Kg5zDaeJyJGR7nwGNe1hRvwvRgkEjMuPdKgEGpyz44x7ZwjDjhqWtodLeF7w6aB3desz3oW8PSUg8gNg2PUn",
  "key9": "228xsPWFeMMT3exgeg7x7NXapNcVUbNCFjBobJHPZUWBzvXg837heF6X5VXu2mmnxcuB1jLhfvuCd37bWktMGWKS",
  "key10": "Y2U1qUjbV5TAPsEwcwCcetPT9ffeCrC3siTiSchn6MXd7hZht9honQBmSH3xzbncz4gBZSDUmQtkNVzauv2Uhj1",
  "key11": "52NtAQ724ajLMQeiSfe7w6qPAbGUyoGFtbUbMHazMeFymiVp2EhVqVXuMMVFGDTK98tzBKGQVNC4hrwBBUr9ErCi",
  "key12": "2guQdDJLHt7PStinbehL9sLgi7EMXTDLDLE9epqMynNYchrZoFcP7Wp5KUn5HDMF1tZ9FunyB4GdVRm14F264SiH",
  "key13": "3N3NSpA8XdFyB6736hRxQRYRx331gUz9fMQwx2LRaAULNnm2CmngaQ1EXvJ1E1Z5HrBF7TgGK7y7hrr7uYjcGVCe",
  "key14": "4an3jEyeZQUnP9VWvzJQpq41ZJBKsz1HNi4zKHGHR7onnvdfRSGTVcN9uAmLZhNtf8vHbgGTpJXtJsZRDFY9tpbu",
  "key15": "3ThLgFg8ZLP6jDb4HCvPx7fNW486uYeJBfhw7wKHS51AdYQxcDEk7ae9WBHyBGN8e3U5QAjFKdgTApmgS1Spurce",
  "key16": "3kYWxhQGWqJ1hy648HZje2vh6oduyUcNrnekv8f7JKNcSCRFiAgAziLxLsqU59yK1WWDGHVo4PT6UqVCUmvqh2nq",
  "key17": "HjTejTBUEGKRubBUjwJ2qGgevZ5MgTw6aFnsqCzzFxaV6gAbANkTXzRtq2w6TzrQpekMEFYB97wTAxQ8efFMKzx",
  "key18": "4xt1PJtWFLoAxSrKMeaYcHeeyHwzPhjTrumKMmDfbxVhP45yuw6W9LsuooZ8cZn9ojsKvghkQAnqzAt7RR7yYm27",
  "key19": "2CVHtazZwPdPE4hspqgGGwhhB8dpBm7gut4S8qwbhfZtL4ovr8QCErNodcP4YQQSAz1j2v4TSL5cx4PGFjKddzy5",
  "key20": "4spKAHhof6LcoZ8PBmb6cnWYEw8GAzziHfrRwiDk8LNJEYM1NkZA43X72zUBbt7hS95HUU83rk7t41ZUUiofnmq",
  "key21": "3a2fq6M39C5zPhcGDaGMdq6o6sGkZJoZ46VpKZpmA4bdY1r5Y4N3x1iQ7q7oxTYuxAR6zY6YVZqxoTEXLqW2gFNF",
  "key22": "2gJ6pTaFG93EoWChCSzDFvY4Ao1c1EC6K6iBYn7XWqnsWqYiaueNv3rfkHz2on1HEvHjFUxz9GoPcsvM3Wp4eZKK",
  "key23": "5QtizDDoE9mLnDtEEZi3pu8jXZmiGduMgAx5Z26St3kJUoSNrepxRUUvYLYbtzwYaFxe3i1BjeSVQgubqLVpYD5H",
  "key24": "4appr7jqZupsxZ64aREzr8AjAp5JsuE9o6hioJHT79D621asxj9svLEHRYkdGR6h5dqZ2BR8EesPNrWBxXy8UyTu",
  "key25": "4vJeMkmbdhXN6HPxNyDvuSGd2n7wAjEQ2PrxAc9zhgmvqDVKPetaNk6P3SHFvNmszkBQHXVp4TcEvmXycDMJ4nki",
  "key26": "2UXUZE7Rcu9oXsBb6bqUWXR1q5PazuZSSHej9ZGyPfNgo3wdtrb3n5ooZYmkn4nknmV1oeD92v57kjBVKc6ozh1H",
  "key27": "5HQCyHMQVB9tdB3p7yNLdCG3ck3LE1EzC1SgTRJbXb5GBaq5TSnrmPoyXhRqjke5sV7hsUgg19tJzonxgWRSTj8B",
  "key28": "262Cfha4Te8nDnrC2vhnt9sGYA472jo1bSEWS39WTLPVpbrpsBKogdJNkvth8iJ8C5hSyo85bks4nnfYJjVsPPLr",
  "key29": "4G6qpffSZTdUK4SZfJiicBf8m4RMH8j2aPYP5dgi7Axfy7uNvFkm6VVgrWDtTcuRQEUc4ju3cauM8AeNdifQHfv8",
  "key30": "TEqpjNjindpHPv88tjTy8NoeF1AbK6c61D6S36pXuuXB3BogEdpeJV7ZvtdfZMLwcmW441dKEWodFFu72gKLgm3",
  "key31": "4H2MhZVDT4fYUR3dDQbg48ozdA6Jw1L67jfbq1w6DQWXdNtuvCdZeBjimHGYgbXMP926Nj8mS6tXaag9WNRFmV6Q",
  "key32": "35Lur4k3QATsH7rbmhE29jKrYZFr3fKWkm3cN1SDzeLWwCkv3cy37mKxns2kPS6wXcAG4ixcdQvMnW1G6aLeoeJs",
  "key33": "5H4sCviTXtTNu6o91PEBusYftJz2hxJgGsCSWzsUTtdE8LE2Doix1zgdiWd7biEy88fXe8t7GnmBcGS9MJBhQsa9",
  "key34": "5g1iRipUBNPqtA197QLbuBVTC34VhvmSE9EMqoXUSM4RYfUM145YzXxMrZdu3FU2XMFq2hMwdq9vzo5ktX3bEs5N",
  "key35": "dkCp6aAk3qLzinpbj1zajBzY6WhMv5zmQ3xrrqPYGf8FwmTycWpmn3aaSJePLavM5Apv2y1SpdmCRUPBMZCcEdJ",
  "key36": "3psdsAQDabAkpwaHRtegfmMjush3r2kJGVLZZ9WfmHTnNY81EPDCVhM4AnBqXcKr7RUUiuBhhhcCqedezqo1RQGB",
  "key37": "xBZCFy7UoLtcXuRXmpJDd52kgT7pf4nQ5oAx66WuatXTWMKnThpWjL41c2sycTBbWqfb81To8o5LXkTtWTPVsGV",
  "key38": "59c8fkzPd5exCqx2tEbBUrQSuoyzJH6H9x8E7vZQouYFBFgBAkuJfXMd3Ekr8njMZaggEjigixpBMKKwuDd7i8gp"
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
