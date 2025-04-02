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
    "4xhBM6PmjnTJkFr42kJ16JWQVeYaDoDbXFPuD2MzWWsFFAiQXgJjNJwNWBeSwX39YdKjKBieeyAsGyFFttk6eii6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TQDJgdZmvWsRZYsB19yrjV7ZoDFdrwgembbLjfgZ65d4ZRcMYLUmgdLJmBRgWktsszc9Q6wPBoXEaTe1m77afZS",
  "key1": "5gy9QZM5pGMKeYa1JeH5GvsbQuLNF7r3wSaDRRvwQMfY2agXvH4QzeWWaR1ZUmuo12g8kfr6iQpnAiL3wrUPNqj4",
  "key2": "4zn8n6AewznBmX7bQ5jiaucNJAD1rPvSy8VNHgAA3D9eNW41KF7oJ1FmP8PuyzM4YAYj6UNjouS5s568n8aQcga3",
  "key3": "5gcwuRkauFXJX3SZRTfyV82DUcjRzAAyy38wwz2VgbkYqava7eY62tGZPrPRUpL5XPa8rJtrRmgc6QH4PoUoo26s",
  "key4": "jEVzthuhc5J9DAmQYSUnMVYyvwMMmbGHdJGtGkUZYjufNwhGX3f5EdUoorgrmFeXVVw7gvLW5a9aKRZKo2gDRgZ",
  "key5": "3uCNnfbgpMkNQvR2QyUYdo9paNPKMJ6YH2sMBpsScFtCnXotncDQFtMeQBwhqeahK3iFYjdJ65jonRJPPMToyzcd",
  "key6": "5e2cFg491tNrami1gy7HopCRCLo8HnnDupmwwEC2UU7icFY27scx9SEHabSGp2kE8i64xzWTRF2Xgc5kPCJM5Piq",
  "key7": "573P56SMEaspVLhnhmYxL3PKTZorECvCW5kWYJyybpAZEJ5fJ679cKmj18hM1GYxjqNBmwsZYKYtijHdsyRgAWuT",
  "key8": "41Rd2kXL3EWeeaW8oLxPottn8KUz7jjZHa5F6SGc2qDYiyquoQvcMp4th5vtkBZrexRUB3PX5vQYJyNwUDgJFtgY",
  "key9": "368rY8foFayaUqxaMcGAsTDopKa5uM4EHHdBKTCejEaL3nAxPewtYBCcEBAtDeDX7GBeyXTAgPLYVgMxwLLTxYxg",
  "key10": "cJV3rjnjkG6JQfAedybEqTpqURNJQK34fHEcpAdqUapSenXeZPkXQK3iMpTdsan996NQhBoGuk7TyTu3zzanTTc",
  "key11": "3kByMoqDAiy6HNtHsYepdBVwinXLKnLtsT2sxmJTRfwQNfCThjLZXAwVWDPXqL641vjha2SmaCg35gs4CyAR8Z21",
  "key12": "2vMaK3t7ijho7pFzRHiyB59ZcMCENE5a1187frYAgTvmdsUnwaiWLq2LyBF86SWfnXcbKYRpXadqBFK9unznnU8R",
  "key13": "23j5c2MHkV1mg2juxMX6sMYxaiuMPexDcNUJMNkxqxhsu8KRGoasTeJcNW334Ed3voRvFT1h8VVjgDupi5gVNi4D",
  "key14": "4UeUcdiEKL9kwoUvxtsUnVoStvg4qsWSA3Uk1pZ7kvHRMaDxoPoVbd8b6VWP7Jjd1Kn9AywmMw15CBQWgay8H9AL",
  "key15": "h95yAxEcHfaxAzSQJArNqzTa7bt2SG7x1Z5AQAwP6aEUdiDVr4iNd3Dmj1xNdocUEdkwt82UaeVh4W9oL96rjFu",
  "key16": "4JKuf6q2ZoG8BHSR5onfbuP8XKxjFhSVJW9aF3PzwQ2s7Aj5NXXXtfguEGugHKVnL6NGGuKzD6zaKg6g3KS9b8RL",
  "key17": "3qxKa1VPzxGMQ9b9foQvsZz77a3guXmaMTXKgBHaj4HXBhV63kyKjpyCvG6KBpn3ya1NTyP1Yiet8CHzZjtWHbTE",
  "key18": "4uGXMBFj9gtRVZ78gXA9qwkZ8s1LqVUNGU4ZpNB1JU5Mv4aRXo1augogaTWNqF9s5yfQH5GXJf98Dkd2pANVLzWo",
  "key19": "2czYdXE4jgW8iFCa5g8NnzUVwrszUHBLgTMgP7HAvhK268nFMt3c8v47eLix25Q8NzGTAAwhQMMLj29Jvab8iirX",
  "key20": "5fE2tc7z7rtYqzV8wKaEKi7zFFAZ9TpF3UJaqbd8N5LLvqjQN44XWQFJ3CgLBw764LXH2yMzb5Qsx2ar76ChxMpM",
  "key21": "2ngxJNe6sAvycKjwaEkcUi5byDqN3Mz9FkMLBSRJJ1MfV6HgdJrKheTfhZT4dsA38hwtKMJQ2QYSJk3hvuiR4L1q",
  "key22": "JXMHZ7U1qzpGVn2TPNM5s6Dt5yHPbyk2BkM8Aa5peKuNxsevKnHvVLJUTbALAZqHtq7Mai2VwyBb593RwpZQtbp",
  "key23": "3kHJQMyqzz2w8eoX1s2hb5ddFhVftkbPR2zYVSkiXztqd2dsG9SN9XSQ5yMV2KY8sBWUsEVuBqGzSKCSYfqo3JRs",
  "key24": "tCNsUNjnzYUDAduZ7GnkEkNjfumGgG5w6i2KpmkU2MurkfgUPYNmPWx61L14UZMvbXDnSrSqpCTStkSKP5edHAb",
  "key25": "ZRuZvo9jhQ5gHYRADs4upHezN8TUfm52XPReqkJZg7XFJ3NTKzNbG7F8QBhRG7zVDEQjMZcLK12XYP2oAk3GYFP",
  "key26": "3tLPA6dJyMv52WoL6FJFeDMkYTMbu53yfiHht2FNVGvH2mjwqCed6NbdhK2qn1d6mvhiqvEi8vosoWyLQGn83SDL",
  "key27": "4mdxM8Rq1cnqoyMSC58E5dyDfzwrwrZnGQTRXgUpoMoj6aEHjHweqSrXN63bDJYm1Yzh9FsudJwwyntfb2mQSneJ",
  "key28": "3nnWX4wKRHkM3xLZ94N5RJsPS99Va4GesXyFKdYhCZ3kksLLvLcQg2f26GykfHeS2o4BqKkmKWMgUjHviVyaMWiE",
  "key29": "62jPY4WNUfdxCPEFF72JQv8UrdF8gX9BHCN4LyDjw1uFXHFGmX2ey75Yu4KvcE2AoYiBvVfPrVSS2q9WFh5crUps",
  "key30": "3k5oNNHn9Z3RAD2s9dsc3dgaNCzGL5tVNA3FpPNXBqQzX1pnP4pobyeFjw94DeDCKJF2dVJfDYq4wtDXXLiHWKZ9",
  "key31": "uQeM6oXPXoPNX3E8nA2PbnZeaA9KwRPhYXoaV56nsurx1hYvCsnjobgYqF3VbjFJbvDn3YYSDhkFsNVzKuuAg8G",
  "key32": "45zco8bEGWxzKNk4zgJGiuYo4URGfnSy3ZEEVgmG5DgeSmnpvZ4WD1qoy7w5JUQAGgiNZfSGCNHpqc5aPAy7DbAd",
  "key33": "2ABtMgoRLefD5pWjC8UX7w1UxoVPAne1NNHT9M4dcq882XucKdvRH4pH6GKQWcRgf7KqRLfRd4gVZ1tSjTT9WGvT",
  "key34": "2drXjqLiinr4iGAztBCSyECmPYB5mmSx9yFNwKGRzEAAXiCALWud1CBKrFqFv2rP7TkGWGhFGyKVdqGhiJxwF9Ra",
  "key35": "2SWs785F112uCpW6aJMGN1LFn4b1jypBxZVBotazGUhVP6gHSnGC8v267KiSyXDb15g97GK19QQneT98uv39aAiE"
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
