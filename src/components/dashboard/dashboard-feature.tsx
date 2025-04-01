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
    "29nxc9kjLQyB6TerqGTvKuLiL1oRrZF55cYYQqohS8ENn6BwTBr6GMjADdgGRRCjCL9PwgcSMV2QinViJNK6nLFP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "np3zYDKjHcJXefhHBmecp5Pdd52EJqSB8JJz9FhioBg1ybgGJZaLBBWY66B2paiVx2bB5iNFESsvvhaoigKrzkB",
  "key1": "57HnqvNd16LJLa676beqMsUCnVd1u5T4TvL6v7wUUSZkCErLBXRFjNZXkGZDFL27Dy39Dgj6poyPFs94iw3rteyw",
  "key2": "b45mHYVaNs2Z3WumSPNBvC6d8FcbBMRhMBBmKerscGaTRo8WtmWfpxECM8fokpQj4jAZddyELNdfGWRrZM5TJW4",
  "key3": "3Z9brRYzckyPaTuCAffNeYqb8Etvs46pj5ojFo9Kk2be3tQz2yiZfmGPv5c5T7zf9cffvbJWYJKgHXkDodidcPKW",
  "key4": "2qLsnnav53veCbWhqJvQiFe6YXGXA8EKJWjEVQq2BdQC9b1DLYUX2sEXBQHJ2S4ikecVVuToQ1V7FUiD7KspRCGA",
  "key5": "2ZEKuQxXBZHnjrXitWqgXNrXgzDXvTPxaq92VYD5g4K5QoioZTtTn5BzmFh56S73ntLrWRnQ4iE8kHeK2Rve9NSd",
  "key6": "63hc2myDwCYtwjXU2R5ik8az7xrX8ARi6W6zPv4tkZd5tpwPjYa5oqTvPCV5wJENEip21SvM6SrRdfDH9vmFkBCN",
  "key7": "3b5CATXYvof1TkTY2rtTEH6434MRNRhAjGu7xmdqr19BekCh2WhGrvNZPimy4S9kSQBswKNR1oSDP9tWUHZVD3Qh",
  "key8": "2r1XktETuYf8paTNxhqmoHTCBZ4fnHPSnTCEpLs9UMv3wqLoFAoLYFhQJXzmhC7pLtRtp36vyJpv7mZW4pxeX3n7",
  "key9": "FUxeEHt7PUCKEdcbtsE65rprWNBeoq5ueXSjJHfrTXPrPPsy2efqTJ2JQYRSESGKQXMBopgbCtHyzRax7E5X98W",
  "key10": "5Lsvn44nrMCs9yLbLFMr38LFPQ7qD6V368DUkqeitWM2aEyNLrwGi1KVcYMXPTzTufkpoR6WLwbgmWde1bUVgSFW",
  "key11": "VAdRL2ZKAiQjhbv59t6aNcZJKRua318QWN7esdwGCrHxqXa4nZjkWaBah1P25QaAaD1vgCq1mvcWcjmiWnaruRW",
  "key12": "5VDvdX9vsEtpWHWZMktspHR8AYXb1zbdKWntYkJWJBfSN12g17pPc3irbrctbr28L2rFuuXumnJrfTkgEVSFvCmV",
  "key13": "2pMq7KBMiJn7U92BkSnWf99mu2PdmR6rfLHSLwSesvjBrWCcpMBJPJmBwodZUWAZcPW2YWHWC4B7vEGauRWdx2KS",
  "key14": "3tVnbYkQsM4vQoVQDSStRQsjfM8o4LokvxDQXcwHe6nm6tWNwQc9i1KKHJ7nqXzMUvG9r2MzjSkQdfTQW3afzGFJ",
  "key15": "22U1YbfhBHPozDq9eboqMAvJA4kJ2uz5sC6ThQ78pMEt8vbsi4Xgr3m5LQedSMehEUsEmVwbRF4tbsKxYNypH5Vz",
  "key16": "4harbB4yZtpbB72ABwJvLMVaWZ6maf2THT7JcfkZN7iAYX3iMssctRZPN4bmFHxRcVtju2jytVUpH2qvqNBrUkR7",
  "key17": "5AJmY4zawUwD61gydnvMLAdznGTSU6Cyemvgu6nq9bZ8wasabP5TL55S8QUsZBRTcPUknArK7LoT1F1rVJN1Y7mU",
  "key18": "XcC7FonkMeJ6bTjCBrJd1TECdJxa44AdvaMrX4kG2qhckvMitfBneuLj5tUfk9WVURR2pUaP8BoFjqnSzehbXiU",
  "key19": "2W4JMwvZGT9chTPehtT4dfhKxyHMj4fZbmXidKWkuYs44jVvSk7KXievQE7TB172Pycps3kJbCbg6N49quNveGui",
  "key20": "52wyKdt3iUz5S7pv49i9EMDHTdZk2KeWFrbLGM3FM4iFAvteVSV4X717WVsEKQTxkZqVQbpaLAx7AECUtm1U3Fpg",
  "key21": "5QBEWFZpf7Ajr2fj44K7t1LNfT5rg21SQz58mmjhbPn5aRQXXPuD91oNqLTkZph7iJXp9Pz4Ske7sNDwNrcNu1PJ",
  "key22": "4U7BYxeUAsiqvwSZtHHHkuWfFQqRTxRcDSzXDTWvxyBy2L8yFjSa1vux82wEzJAnk2HrdRM5pdFEhNjMWC4kkmFr",
  "key23": "MpKJ58LXJLTgrc4ifn4SA9kjxGcAqEQ7Mfo8U2JimwdYQJ9pDsQV2ouwtX6QJ6Ri9Z3eh5n1iisL2KBZZENtuXV",
  "key24": "3oTe5YJhA6d6CU4p8UMntCSbyADhS6PDKDauRv7ha4v7rtdvb12aVJeiTUS22xscmTc2JgMigECKf8V5rUnv6KdJ",
  "key25": "3ANeUoUTsdUiXE7YTJo8irn8wY8byPUno7XfEE2eBVoYAXeQHugD4VqDTKKkXFJwSPWdwsprPVMVmTjD7bSqzV4u",
  "key26": "2WroavDh2Qw6KFnTf8efza6ymB4GmyoCRqRB5XV111CHFojEP4MmEJtHN1NGbWnRF1r7wj1A5zEA6xKrogpQG9cC",
  "key27": "5wgxFS2zgZi4TPQYsd66wc2Ku1L6SPyFwoJ3GqNJnKt4bQUpEsjMUN8YPaJAYy4MLgFSwsTEjf9zvdyBDaasdC9n",
  "key28": "2xC96WJznfPVJsbz6papHkXcTY3NE3WbaAjvCtxGentDe89gZgaY3cFPhBW174VUeQwrxEzM2S8iH79vK1cHUnr4",
  "key29": "4QTTcpucsdf9Rv1eJK3ToopAGuZ1roT8gGdaZ2oWHAXQJYQSRA9TYpUhcWsr2TTuL1ME8urMVZ3sJSgmneDhQTKK",
  "key30": "38LbF39EG28hVkKdofMXCckpsMhCvQYYejgaXD6WbGbKW6VrepVbLXUKZ4DEH7VQFgN4SGMb3pRv5BX1SN7sQ42E",
  "key31": "3oBh4MvyD8zv6wLh8KRvjdJY9viQSqGkmwb5tuUHENjmd4R2e4yYktHc2Ausf6JKWiUCh5AaWJCKiTGxMK18idkH",
  "key32": "2tj4QRasiGZaPZG7qPSdQHn6usYW44AqWJvtBA8JqQjtR8a39QTrSukW1nEN59nuDbLSbTyNPdAmWGt3YczwccPF",
  "key33": "4kZM1MStAmfraerUvbuH3hvDpoR73AZgV5paonHVN6LpzNxbXVDDk3JTbbYkSQov9uGkVejJ89MJNXGDX959QdK",
  "key34": "568vCoSwLDdy6Q537x68rNJs1zrh62jtaQzBfWkhgfBrgBHS8FaBRZXUC19Rq6rhwE1ivMMfPucn2J9uFpFruCR6",
  "key35": "2mmfW3GWS9hqfPNoFEsHj99e53BpFgP6o2svJJ9Vj3KnWAyZtpWbMVQEBVSZNUFTR14WzgTEQEgPU99yB5JJ9S6t",
  "key36": "5hEsKnvimJKPh6YbmjrnNHQs8rZeaztUui2zAfzQQS1vq1no74JA2sMGK37Vfe91REAQHEzQQ7xidPVfqXDhwXS7",
  "key37": "535Xr7FSbmEL4L572VttnBs8KhiBynD8GroQuv1eCgawz2DQvLtcMBg7nJwxuWKT6GGfZfZaTqsJW2VcSQY6ZDkr",
  "key38": "2bAAEFkibk1vZ3aaih64bcaDsMcng9xU8ugKKq1hV8FFYbKNtSEMzanwSQQGaugbzEF5ZNeMJXQD7ZaZS7BXpPdi",
  "key39": "2wmxvKWKMCkt5xR2brDJKJCbvEzRDLQk7hscZhJY8m72NzNSmz3ykHWjMBHKQDkstq5qvywvVN4Rjm2GmYXxszdi",
  "key40": "2pWwsbC9SwPjrjFxrGH9MsS2bBQFzZH53EaoAXtPNvMJq1Jtg9EdUUmmf2xSqGaRYxgY1YCgjLgPr7FKNRW2VdHE",
  "key41": "4dP31zYkMae6uHPLGNCR7qkEeAyWy8vUcwRUWq11hgh2NXHcresvjfFbkCrf8ZFX3dZCyNdtiEwN2xuFfkY76mGU",
  "key42": "2M1HtAE1dJV6oERZJVoMkWVmmj5irmPHxhmXsKzbKLV9XKMzWUc4buDGgm66GZtS5YjNp4yZbZXdx1tdccTNm1ML",
  "key43": "tmtC9iMiS8kb6DUe8KX1QaTZdVYUuJYJr7peCxouZ5YpTm5AM7ZQMFrZirPEAi6q384LsbvmoMgtLrWWXpNcdqU",
  "key44": "2yyN9JdFHkyDfjprp4nHp77DozcPecEJymb1Cqe398gzAcnwTRuEvRrJZfN3hsQP1ZW5uMETnWbQD8w39JuBqLUo",
  "key45": "4YPh7qu7PP1k6ihAvrjXD8kSVPJsWxik25GYsUt4fcLcCgeogajBUdyaVb61j57GhrTbH1vzvpJunjUcJx6gHwHz",
  "key46": "4NrxtXsk6KcXuU7wAaLvTEKK6MjhTu8N1dEwCMDJmyFBYgWFhkqSQaCQ6Murf1hHAWgCcjV9fqzDh2dZsmSTzZvw",
  "key47": "5rzo9WSypYqgUTemWrhFDme2cHkhmcFyRoVvDNMttX3JowqQSVk41GGpp8vGDt3rCuSfJaj9oz1Z6SBACCfKYAP7",
  "key48": "2mEv8RZfFZ7e4yvfMuA8Yg75dWzeFMmDp399tgRGxZVriAweqjga7mkZQW7jcjqNN2Gu8yVVTtAGXxLiBpjrHYJU",
  "key49": "3rubn1GrojoLfJPvNcjEr3eNnAw7RddbQPHmMr2jmDwEGfwDQN2NYxtMt9PCTSpez2NEXBVBbmrgzp8qM59Btxn2"
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
