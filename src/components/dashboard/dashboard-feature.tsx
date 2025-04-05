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
    "cL4dp9HL3YBT6DPtzVJSFsrs4VYhrxN1KyruPfDCxpZfXbuLF2y9TKtjSTLR9Shg2ieAxn4jUX2RqcFaQUFjQSv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xBK5NqjVdXMH8WPznF2K12FgANrNpTvhq8mCsLJapurj3wYsStPVZyAGcq1DuGbpnUkHibp6g1dyYW1XmyUFBAv",
  "key1": "5KxGLauAzRTmxquCtmUqoqC4jQGriWaSgxk7ntuA9Bvi6aJBVqtBTTmqAK9wKCyAyZyBTCcBXHy9kPfs1FpSskxr",
  "key2": "4i9MvMZ1AgRTiKEA8LqpZrN5t385Ho3PpkiSuGoA3t2Q9uvKDRVNtZfP3e27XHtaid2b16GGTvk6cpNGRjXUm7pF",
  "key3": "31xmx9u6J2UNxPFrzhogKNuLqT94nFjjAuvjoxatRSP2WEWERN93mrBNWqv1q3sGqMLx8ojgYnBoacgs813ZL72D",
  "key4": "5ZuqNn9aaEbpm2wp98uyf1NRKfL1sYrq72oJ2gmTZRh2B2V1UmcHmDDGKwSvgEmR8j1vpe92iAruvvuY54ZR3AKK",
  "key5": "4cqM7NcmtFwuntPdgnHhc1czDEzmrYTKcSma5LFos6pdSTzgbD1yqXPnfZJYyyy2gQgDk3y3vr623F4XoWaRieLo",
  "key6": "56BcXuB76shuQyXkNHuF8xkcwArtG7rZ1U4C16rRVHyc3gh7yxdF8dSogNax8N2a1jozxFQk7NFtDTYayJy5LtUo",
  "key7": "2uGk7bYz6XtTxE2mfeHkDZDNGkw9nz2EyJVSJ2cbykhtWkUwpchWHyDqK6e3JEDyFeHuAaxDRZWgUXs6rxCKwh6t",
  "key8": "5HiuzAPygwWp6TGWau2Czwh2U7iwE353vjQt6qny67VisTdTWpBWvRbB8Ai1W99ALHDfhYacxseSepXFeANCMWnW",
  "key9": "4vzuUaRswbzLA3nbnduiPKBTwCVExxVYLiyxPqgNu3wQ3Eth3zkEgX5Z1QzxExprJACkkXwjTDWx5Jg8GxA6anoG",
  "key10": "66mpxxdjYBMPGumoUaLqxXkqiFnude8cNeqWtWpvqXf8F1KUWko3Hin3wRbqKy3bkvMYs5X6zDPssPBEBhpmoveR",
  "key11": "4YtLbbB7b3cJ97kqsJ28sfVxR5UkhDuYdivPww5teCJAfRmavLQ7EPUwwzjySPHBVxjukttnTUy8V1w16qnymGTG",
  "key12": "3ZG4F5ZjmUk5iAPvxj5UJsjTkhQ8ieDEadotp2sc3WGTAR1s667zfgXW4yzPTbMymKd9DjaUA2czNNA31z26ZMA8",
  "key13": "8krrbe6epQwNBinTNzA2UmweoW3e5Qi8ZW4CxxywFNTzKShioESjwnihB84RN1fp2QkbHDzEf21RcXXTabcsPQH",
  "key14": "51oT34aht3RWAHqqUyrpG7CwBC1852PfHD24wNQyheZpygs8Ra4QwcKrcyT8q925LZTYrHYBhgGKCnJK3BKowEeT",
  "key15": "5nHkSUbW97ovxHSgUtUDjGZomqyuiVfVnkfn5aJ6wPB4EJxvRrx1Spq6f1ocayufLcbNqCDM2BPjeEb6FiEoCn6r",
  "key16": "47x8fUGCWLUsSt9wz9t86q53SVmbXLcNd16ArixPEBCHqQUe756NV43aVqc8QNbrW9dK6NUwqDxTJuYHneMHuhPu",
  "key17": "2x6w7iUPR2ioDbwmEjPWFvATPfberukb5Z3u7ZgJrXbTCabKfGburLZcuj6hnsFs2zEhesmFpm4AvzZ23pjDiPMh",
  "key18": "5jjPFjKJm3ZW1Df9ygFoLQcksUkLPzhkhBpqMpbLT7vFMCSWkBc3n3BXueypEWj7o64L7wi2fA8bBDGn25Bf1Dzy",
  "key19": "4McS54UF2fq6jnsQoJiNSf4AhmXPazqRr7CNLPk9GY2RLUbeFPHjwXpmLQT5N4iz472KgGogAiKvRqGxEdcT7fQQ",
  "key20": "QvfEnVt6QZEg31gcX42euzmhuWZDfeh2616Q99JKfJbFHjCFFJ88njzhhdo1dt8EeF7yohXm7W1yg5SLJnMtn6Y",
  "key21": "4nAxkf7Z4EZLupWMGopda73YASJsWicfa5NeL4ztJD1g4fdf5UgbPrUDVnAJNAyiL4omz2Vmb4fbebxu869Wjrck",
  "key22": "5Z7xnBLjFwL3Pdz44z97LBQfckNwfS8MdpUd8j9PUGpgmKyPjQF7EaWdULY89uZ1Uh52o7iRWJE3fhjJ7sfzeaP9",
  "key23": "34ihZHqT6B4pLEmbC4ViPLU4mLDanJ3mubDnFmGJ9h519Jw95PGke5aK9Pf3dRBMmNrhiqqHZHVQ7ZsqPUJZRMWo",
  "key24": "YVWYEzGj6EpYcushd2CLZHCV88V3YD8PDWNQqxucYMN2h6d8vrsmvGekUPbXngPVh9YCDD6ERQT1scDwQhDWKbd",
  "key25": "3KYmjgYeyPn7oMgf35gbqte3sYCSxS3fMcYHyXJC8AfucBpMKR5Eok5W9bbZ7Z5tMF4kHDsKdhzdDfDNYhcVkEeU",
  "key26": "2PyfYWcKTxGJrEUsQzyW5WbH2TpNwC8twm7VQE4vZZRJYhr152ta3ck7X1atDq6xPLuRouV2GqEFkqjr198KkBhN",
  "key27": "hMidhVVcAVeQazN4h7yfLwgcVu5favYitYtogeUNJSqwnPbv2PB4VfoGvciyweS6ZNSGkCY3t4t8i6qY8Go5eHH",
  "key28": "23xoar1ZF8J7c2WMsm92m8WvKjja3PjodLz9PoHdTsCNcPkTmEcvA8E9GFoYG4JiuDYikhwMcfwvKKngVaZwG389",
  "key29": "5E151JY5aDNrdTf1beiNfyuqsTy8uTi9GuF8oLEKzq5odeufYe2fW2S7jwfZf9g7WgapUVDiWcXugAbGeLpWrDZK",
  "key30": "3bN9XJBo7nYdqJNSUuyb3ELTRBovPAFpZP1ftCh9UFVDq1bUB6jV5ahEKBWP2J1EaaxDuUg8Er5GnzfUF9xYVJFJ",
  "key31": "71UtoTbJPAYuKQNb42ZhwD7RUvX6u443YUhC7PDQn1CnZboL1HEtQEwp8nNhVUGTkiKmg8UyzNnFAFFCVuBkVdj",
  "key32": "4ezqmbQAGtLAiqvxF14ekvPSwDGizXLiEqV9x1knUQGk8zN7YDy7P2x4m1z2DeEZBBbHmpSUrAKy79JPiGehmRnm",
  "key33": "GFfBGdN5YpV2qAzQepJVYDY11TKrzxrqZ25L22zCgpvt17D1e4qX3nFcrgqyU4DrTqjfE2m4nTqAKPJSVswehme",
  "key34": "4on4Eq4Z78nscZjLinG2Ez2RtRaXDh8xuBpw3FAVgKmTh7wdinuB4y3gge2ZfMsKAxeziP12pQRaiLMTmnEtRcoW",
  "key35": "54hXJ5HZxW8Kxo5hHSP9SmgWGGKxMf8bE3bW6A8khrmGWUXuK67jc7cR6xrPQh2zXY8u7tWjPon6PiDeg75MdFGQ",
  "key36": "9iyDsxxjJ5uL7KcakgkghhXJpcCfK2BXTVjJWWCLD4qdU6WnCHC4rc2Brnn4NWhGtRys75v1MfPAJd7TqX7JW1J",
  "key37": "63A8hjojuRnWS9SQ8V8SbqB1sPm17h3aSiEGrXibYmcbRNrEKy9pC9Vh6ZZmRfrgdpAc9PVEGWWkXZpz6DgeiGzK",
  "key38": "5k5kG54wR2aFAi2EUA35DMJaUXZUs9GQWaWgUoiMkc8VVjKgtmWzyRiJHNhHEsGZBNS5Vp5ySj666Mc7hqX5NxQ2"
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
