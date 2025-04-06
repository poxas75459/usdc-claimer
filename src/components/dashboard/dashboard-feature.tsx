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
    "4y7kZG54g3qWdJFEZAQ199DD2bjyaGcYp52uJ5ydjWHoaqGPVUgAQ9AiutST7Mn7vaYE9B7SerNTPo6Nm2efrw35"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56YVRaUiezodNerMT3PpgRsWmL8mMpekz3zjiUMye6cD4sKo3UnARd67Bir9hQeKPzRZXoV8ZewA5Q7YPa2pqvVF",
  "key1": "8iwuCYK3dux3p6kFqrenct216FsosagkbL2vy998pQA4DUE5x7eTvS38ErF3Q1JHZr69YqxDfuhzXMNezcoi9V1",
  "key2": "21G2jdU2etiNiBodXfBHP32sg8HzhrnJ86DyDzdTEdEGdAsd5g1v2NAgQ2XG2ssuVzTgqpXPaZsu7ybBCCCC8LTu",
  "key3": "sZrVeBchNpSzhpRYvJSHpwMvDmsAvzUzwYeoax5XUjCCLrh1B9M4HyfvNiyayEU23KgK8jetGHXENj99D9SGS5h",
  "key4": "2omhXpD2ZnphZD4ZQqmEWX4siKoMZkCzSJLfbJriVKJ6GrkDSQ6J5xufvFhSw8h8UjTQo2JSqaFGshtmJK6i9THV",
  "key5": "2QS87hw1bZW1qYrtaJyo55yQo8e76cCkQ7TCqxWTHdMgncaNUzxYMhf9M9mM8WU1otPfMWfw23EMpMjQQruiyEGR",
  "key6": "5tsovUVhNKKsBCUE3LH6cyy52PRm1GdDESQXstamKeyz8uBAHkSBAL5okyBXtyWh58ipzwAYvTZuQJhToAhrqGHw",
  "key7": "3Rb1jjeRNhUwBXysAt6HZEgvedQWhzpgD5JeHfekzv4DQxL854ncqRrHMJZLj3U96j96y5eFH9AoNG1Wf8Mp78uJ",
  "key8": "2SXBPhDrwVAYgbSX9F4htRwDyGmxvqNRC8FJcG7RJiMavt5yF4i7zfBzxRiwFpnCWqZCmEkbGL6u4SwQjC8jdd9j",
  "key9": "5ynYXXHCLzF5RiRrb9FYoDu9Cz7P6W8z15pq4eUmi9Kq9ykzq4QBhDQkeY5oN222JCeVMnaWr4ptrucP5m95uowA",
  "key10": "4bvpYnR3DN4DjTnVToAgcRHWUL91EphPMDEe8JKwk1WBt9XxfSjeHFL9iHaYdkotRGnHkmmjG9BiVzYiSjs3fLZi",
  "key11": "2KUfVEBctFAw6MWQD9HFMdTDW6gRmPUR94U5ut79LcyTcwKV3BfD8AfqQ38s4ybvGgX8eg2dem89FhPkyNSdsWFa",
  "key12": "448Kj5LBKNiQhk4NNf2hDjsyxDqQ5UGyEQEgezhrgUZFVi9XgP6WtffijrNYak5tWZxHHMVRu6C6h5mFrqYR9mDe",
  "key13": "5fWrA8ba8HXzFDa1Kjb5btSy44NCe1fNfepP5CgGFrobU3ckweBBUYf4aF5uNfEpKuoEwnfwhep6zqCT1GCktDVD",
  "key14": "5FiovwhpcWaDJfLBJC3kEjCENx7NBMwpaSxRKxSBiU2YEwxzVnSMzKGTSLRZNH5NVPijPoYCGzdpiYfZzAfpxJRH",
  "key15": "2gD1aWDpSdqo1KG7ykSww4Fw7FmnNXJxKXY9EnpFG9dJEzSwbhkwBqPJeV5Y7btZhApDG6nGNg7dYMdzkzN5PtsV",
  "key16": "4hfo7cc2kNG2Q1UAZBM66Qp3mSDwZgZcbdEBDF5a2mt2JZqERbBMb4APsQmo9W4aAs5UKEahvxb7VZTzfAx7Pwu7",
  "key17": "2d4E5oZhJAzsooonwcNBuSKtuUvzFVEuTkNutVjtG9DS9MwPMKbrZmKk36qvKYxLB4zpbnV9GkKm8Keu7bp3qPCR",
  "key18": "2pGzERdKZcWeQYNxdHwcCaoSmH14YKpnuChSwzA4jNhHTeFXmrLiGFTpX1LfeifUNcHL94JX9g8m8qTY5MoauKBu",
  "key19": "8uWx1vNoho3HWsYdnu4FnAnvXGGD2N7sr8rZyURFNK2GoPSVGnReqwPyStiPLXx7xrT1jstPxK19fEkXFktpFFb",
  "key20": "2tnWsiLpQGeKF3RoUk8pqaJPvUFKXWmmUAGUMQ21aiAdCcym65inQbyMRJ31TxPxmdKdKjka7owFxR23xnyLUoSz",
  "key21": "5uBoLB2ah9a39nxwhMJpf5xnABy6GLJBgb7oCUZxF4y8RugBqjPwT34ShSiBVhwttWtWXSjhHPYMAvAA9U9HtG8Q",
  "key22": "28ssbud8ahWr39BZZZAbjAepGAN6sU1b2S2YK8f2KNksDnDeTaD8rHaXbi42p18bT1NqLhg9GBzRvzXaHtqTThxk",
  "key23": "2Ecp4mP9bCgkE9RvaGjporN2TDuTGw6yQbPQcmvKrL5b3JdrJq29JPoimLw75wEtb54M4pht5rqGg2ub8cVsoYcC",
  "key24": "4skkM15r6TR5eYrWDbYsx4fpZkha5PUrBhg6VByP7jgtQX972YRY8rSXSMDoyqikUGXakwpQAsMTRCaKoxhmxERt",
  "key25": "SQeRtE5gVh2g711XDPz1fp8UayXL9mraFdNKo7hmHHcM3qej4AyRZnQkpxsrU5pAtxG1nHdCfDNaqELutJHnBAT",
  "key26": "4ZJBmwUCSdvcHwXneNEwPkEMFSdsuQUqG1gpooMWyXyKeUSftLKyqkGewEx2cG5vynHXwENCi8je1vdED89NpjXM",
  "key27": "3DHKZTq1AYYBSKq45eNG1Ak299feBHsSmcRM1BocMc1BwCacyWRdvmx5i7jC4Rpx3KRYt6Lpw5aVaTajDGeqjGZL",
  "key28": "npWdXBosnHcQBBf64gUACr6sRUsT8T2FtUKNSpPW6FG4bvKnJUTzp3CYzQVsDVuU5B2KJRBfps3FaWMo1StmBNW",
  "key29": "3PJHsLMP29zZEKiivdxZi1VQ5SU1i5pb65yy8oqYrvR1QYTYXRtuvLqWWieawR1qCs97WcovwdAvn95dFVGtMxLY",
  "key30": "2LuRFL2jDWrr1gKDnwcSansDxQHHY2E9qvpxd4qqpBAAdv7NoqvehZCHBgLgDr1jeGFwvVehfHp5xCzE8x1L7tma",
  "key31": "5pyvpRBKMxnhE5ThKwE7SaZBmCJ1zQdNPoTZnA8QDB9sah97b2V9X1NUwTcKvghTdUNDYYTcZimmLJBo79FrZFm7",
  "key32": "4YgBDyiL3x1VbTQXq6FAHpEsxXcVamHN35uYMiz5zPWxa8npBCoF8u8oEpdLiQiY9mam9asCV4bG5wCYrNU51921",
  "key33": "2WxqpiZVxR2YixxctooM8xGPZZU4RJmLRTaaQ4U4SbnJuVwsoAztdQtmkbimETDkT4Y74NFUFGJoDMBuwLxSDjhs",
  "key34": "2EWbYEooJ66nFAw9eHexAuqtLEhMxySyfErcEQKPy2AjkRJPR9Nw8YrUY9t3z5JYPBJkddQwMABm2BkKDBEAdsHq",
  "key35": "2zxnEdukUXhFkQ1A8LcfxLejweZ23M631rKdxdYrnH11JtsZExrz1CfcAmZHXi8yKevh6wPxc1AKoXjfgXwuFsY5",
  "key36": "kga2yuEoXxufUHqM1T43S1mQx7EwCvPwm3kghu6ypdYM5ZuiWkcE6uhovDrxncjwTrr6wujPL976gsd3VCkwG1Q",
  "key37": "XuoBxZdSAHRXhRN8z6uXLHRFtMoKnRUdbeCyjfjf5qJpoZYuxAZs485LUqxjMyM3vtTBcG9abmtpZGdJc2nBzKi",
  "key38": "5LbJAYXb5NTk1GC1u6hwkVMno2uTivDJ6eZQwWBv4uqyKMa9KSg6J74AWRFP8fwkHX3oTB9HAu6bQkUcjW3fXKEA",
  "key39": "5Nx2yseDwaP4MNiyE3fQ1CFxn6E6JfynWtkBTHKgNvRdijkobtCoBtsF5oGukUFVxBn7xotZ16xScHtZYL4kgihn",
  "key40": "3XDo7V6zuwVB3M34Sh996N4AhGjv5dvqyQuKjpej4Ua5KLsJvpM978B3w19vCtD2hTuS7GFe6P7g13ksDWCxA5id",
  "key41": "K84jgvHWAsUeCYNd5ujhvZhmqczjExZ8nytX8s5xqQfe77LXjJGABKPYqKMRZrr7n2Ck1VBN2GKSHBfShtccCtv",
  "key42": "kHZXp3fTJjymkXRZyTjmUUj82s7bc6jCX21UBbnGtNr3LkHwnreWHgk36HFfnL28ZaJCAPQuHekj1AWgF2eosXq",
  "key43": "3dznzphpBXTd5DmNM4XPzNuVp6Ns6YRfzcJ1spy55NzhRH7nkL9HtWiTFaKRWzMDd7HAhfZsznu8RduK2Lc8BQju",
  "key44": "Q9KNW34bD3ysDk8TWgFcs99Cgu4paAnaLcVnDmeLVENYQWVpPESJUXrvnpkYegBdjFRzfqz48vXD8MVhci4CHp3",
  "key45": "rUY47LrrgwaHMqH5SwCvSW6GwU5sSjG9MTbobxdKwnXQcBu4XsDiVQikrc6RtvoVWWAQ9THkciJBNe4nUDWgSod",
  "key46": "349sbv9PzDJPj5mWHAMAUn1yvUcznhyd3zqekuct994qSP1peycsev6w3qH71gfPS9N19yiEv4AS1xF2uxXKGkec"
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
