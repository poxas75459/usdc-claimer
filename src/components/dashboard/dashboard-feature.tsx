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
    "2brwnxMdXkYdmzA47MNP6GYnQKMxuyeh7rT4tZ1vzzuTSft9cHjpycZ4GUAu7CpYpyYEwDU4trRu9RLBQE6y8PL8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PazJCG6SZzBszidTn1TtbZMrTUhEypR2nMk1GqHCoTFbbxxfB5TRTXP6e78aRqttLacXwsbZitrnPsMXYeS4hVs",
  "key1": "5xQ33dxY4Q3GA32e2xQWrBVMrPderLR5c4xCoWLfb5xTGEN9dQgaARagbXNNUSaHwbJdESRkrAy3MZ1BF1FwTheC",
  "key2": "2NuQ5iJ5LrWKsNWWfKSzG2GNDDJo7wsR63EC26T9swW17Zi7AdqUJFjm8UiTMJ2UkAzw4x5xyo4f51PaDreFhryp",
  "key3": "4ne6faf99nwXMy7p4N2i9JBZhhSjKJ2KUsgYWQawwksrWF79cwzc6czwbbTXv8HaEzkzaB2p24tSRCMf8t4v9xF3",
  "key4": "3qcALUYXFUTdnU9xgKu5ygCH97AkZjmpKaKqiv98B3wYKSrr4q32VpuPCtqWEjUxNjfTD1seQGAbAcaMMixWToYN",
  "key5": "4YcPkrtcRSCvN8xzx6LqbJWvLRSc86ac6dGVF6nyZCme5FUXSyQurZqvdYqbhtFi2Wh4pPgRNeN2i1cGWGovMWmW",
  "key6": "3zaCkTiYH3qabSTTZd24VLdTFyYb5Mu2sT8royYyJ4EoZTsDCNzxVHLVohPmrWyv7wWxqYawiJrDbGoMrJCRxfQ9",
  "key7": "4iraodM5kHPsq8hXCVaa9LVKPLFhTwwW7nCmvYDkgrraZPEuKdD6AmEgX2sSLybR6JCC7ZmCiuDLr2ogDTcs32pp",
  "key8": "d8G8wsheZ1F1FywLiu95cMJFmKB7kRcyo5UA3XAzAmmbP7wGvgrmHUHezUQKeKDgyzSwT9dnjHXm4wbcJ16UQcH",
  "key9": "455yt5PoC9DKDr8EN1t1hwuQvwxZh8pkDgcvhdGatTWTD98ZBfuwx6aBRYdcTwQXnvBj8DhdMnJXW9gpjfzvKtSF",
  "key10": "3drBXsaXkc7T7io8BwBgVCytDxbTtJaeUjKiA2xZPgpYbwLo9r7DmeBDXc62SYwY3pfx6ZDja64RdyTusibrX1EE",
  "key11": "4DhogJrGFsEPHmjQsBPBxD3u7m3CNunGieyFVPUp7XBoFSX8A2H32wCyr12FHRchodhCJURSkLgEmtr7QBNGjrPU",
  "key12": "n1wxjWypvbPMMBnVxhhg3Uh6vHMaK4QcRqcwSHGjKDaxAiDmjFQ1QEEr7gFG8zeY3vxZmvxFNAGsxqABXrwBCps",
  "key13": "635Lz6B3snGthPiLjypBy16gBEjKePc5GSsaedu1h83ANbZ8xSwXvqcpXGRT9XxxnrqabnbAsa3bXydSW52pL4LZ",
  "key14": "3TauX2Gjb3vPGAvDygLEMCfAn9aP6QVDakyneyy3JccoDHoKov6cdsXNCLbXJW3RN8ShbXGEqi7znPJHsJSaQ7MX",
  "key15": "25DfnuQw7eswRRYKbrUefJBcJfu6CZe9nFBmReB1EV1sYDxEN12LF3rSwEmf1gYSTNYi7cGbHCrk4mACgXuzbkQp",
  "key16": "pZ9TaX6cqKuHuEKLVTnLMjbtmMEUd5nirHQpWD8d86tBtWtPtMvJFxVeXn5nqGNPzMzVtenZ5MgD6bTDdfPocyo",
  "key17": "37dTLmK8t4YpBYPtzuETwKpaMiRaCwk1hpocLBVmACJdLPEHmZjAoYdaBagGvai4u4vYhQWqMniHwrAg1w5ABdP1",
  "key18": "55nrGQZboYmavNoYAvHXMPe3iJk8yiofYgKZSoPQqc7eocqiP7MZ9paxHcY7KFZHQza5YqBJpiADnqQ6g4eUzcCr",
  "key19": "3ThZAfTxspQ5pvJ5xbSqWskVg4vFP25nmDy588BZgJsTAH3hzX3M5Em6mm8fK3xFLyjEk47S8rspHPQhgamKaY1Z",
  "key20": "7fcfYAGsWH6aDdShpWFH59nZmBbT7aH6qAQciGt1sFt9m689HYV6ZVCTEcdzkYpT73vXp3sPuqBMfg7sfaj9zQM",
  "key21": "2wFxUTYdZPs8Azuk1HvEMHmcKecyktHAwr3bf7UbdjCVN8hxKhFB5Ur4hULKY9K7i2uKSre24NQeBXb5guWEBeyP",
  "key22": "5SAwrFmy5opjMBqqFpB1UfgnjGBQRTgjvx1J13UpawyrqFASGJuhbRQaNqctwJqE76eXq2ytSGvV7eRkgXBy9SSw",
  "key23": "4ED4pqp3aPe2dKYsgj5FoDx6hGpQvHzPicbEav56tWfKP9GDUpmVdEAcHRM5KorSDTXkhniZrLtoV5gfQQ6dgqqv",
  "key24": "5x1ZCJ3EVqFRdcxUgwbHGb1Hsi2ERfzyGwnXGy8kH33Cm6UExr6bxhUdSk2Hu3CLSsUzLaBe3uwkvhDVZxqNT8mR",
  "key25": "5MJbD1DMz2KbNBsn8nbSaVaKNvNr4K3dKFtjgDy86rQ14sMuqhtLdVpnaRRHSBCrNYmqhR4CWJZLRDu4NdApnAro",
  "key26": "LCx5WEwvDABh8wewHSyrrWP8s6PoCdbaLqAWPotPPQfdAY1q6GPVsAfP7pzp3aYsP5zfiupVcaMUrRuqYhk9CgW",
  "key27": "53AQYw7jJZZDbHRzKj3zocYUD3Yos95PKwpGToCZkakxjMF7bB6wiUAV7EwkgeVEQFrWT9FzK7FP5N2avcSxMG5f",
  "key28": "242CBF5NWtkieCR5maAWL2AhgpKR3tXcDf7LYaB671uYhdAMBRLVawkHzoUVqqHnuoyGNj3dxUc4grbfBdAK2WiG",
  "key29": "mckMi31YA5LqgYDMcB6Zq1PJ7yXct2iZ8TGt8crMrGccpuhUb2rZGAgGSaX4aCK6n3JoFTkXZYa3aK2CKod9ffX",
  "key30": "2hgfbMrnXSBuGmpYCnhocJHkXmhvd8JCBPemXx36QPYEEuad8ueYaP6JgwC7FVL4YFxA2MFPfSMDYaPjJP7T76B2",
  "key31": "56VuviBKEvizT3GaW7EUKZMvooukLSxtdgcrfARgqQrPct32RqHBGaBqX3GnpWhVvfYaKPZwEF6LbPftu5q78gjk",
  "key32": "5zeKPAt1pMUQoJd23ShtWyc94E9bY9ruFnSWHhijk8dW7VmtGPyvTk3ZbtR26Xd6NHn4ra62PHKGN2SwhoS8jygY",
  "key33": "p6QQCoS9wQrfxw4aSDGSESMwvkWPHWc5dLJmcL7nkCsNbwXYNfdxbuW6pcsvEGGh87t3tC2WTUjFyfiHdCeFZw6",
  "key34": "5nmkRWFTM2rjuEHm6M8gUif7FMcb867CaUSvpsYi1jrsFzjhPgyKy9ehYDzJPovWzoKoxZb2G6jjoypH6oaQPN76",
  "key35": "2Fa8vWqJtWsFh9rLb2RP8fuBbFeGfeHp2fFVY2B6wdvw6FDYyjpTncRLVJnrFmfM6hPbpjXotS2chEghsTVrNwt3",
  "key36": "3uFkSDQbPUHxPZ8kTXqnePZxmmKZNmSRid2tc1LD8mTiKG1jqo6XgZWSkpYCErEf6sbPdf1L3jUdwC4qV7z5Usqt",
  "key37": "3Ee7u1LDTGSjJnvbLpJzveQutXWca3rKhiT34qUC7KokBj6DkSCY89icXz3L5kvi5J114qoB8SbEF4Z9cCYn8o1R",
  "key38": "22dcm7N9djxSC7vcq5cUS6nzX9qmhv3oeHEPJbfNk7D37sRZwHoCv9Ltwp3mvsG7r8J48E3JrZktGFnwsDBfJf7A",
  "key39": "TK1Niw4okNkRJfgCYa66xMBDLWxaxzVmyHiKpz7hLG2tzJ1fFNmtjE8Q1dWJASt87CWRbNsAPbygKrVwWPaKJej",
  "key40": "2MqCN6WjXQPb3Qyb9rbA3V8rq82ba6tKbvpwvgmuxTrryddNuLJ379ygHC9X7hAsLcVC3z29qSvPvV7XUvTZ9DDR",
  "key41": "24S5HC4jZqEu7udAhzkz6XNBmRZATCxZctN8v31eX9r4UkVmixZKvkYvhnQwUUhoPvboXX4Wqesvev7yFNMug6jU",
  "key42": "5EGZwaGRsu8M5kLqSHjNP3oT7gsPFhqSqD4mbomjoXr1iP1Cgdq4LheuWanYAL8YyiLawhRGQf8qtMRAuFs5owb3",
  "key43": "2ySHUnFDkburaprNvDnezcvAhNSd18jtH3DABLVFNcTjz2r5Nss91DwUdz7aUH2Dy8WXjxTTh7HaNyYeXr8Y4yPs",
  "key44": "5cmcn8p9JEASSLM7YkgX1Spdgsp5nqnZv14TBW7BrXvD5kiFA66TvX9iEWDcT3z8p7FWUVwvdZwH7XrwnxtVjU71",
  "key45": "qWSH3q3wJwgSFjoUgKmWwXwcY6nHGGkjSNZzWiYAho31oRZJLWawzcd4HaGCVUAyCRZJcXvLJvda7dNbZodAmfh",
  "key46": "MtdCgcRsDwyrP1LRusKkoZbzJSMpau9PzzCJxWsxPQrQqoRqagr8VhweW1oS51jqUTG68qAnfveSqdEdUQZAA3P",
  "key47": "UWffEhS1WtuyUkoFG92wuBCLD3aXPqeLzw5SwypsrzgQeDnB85ptTRznGHbcx4wQo4JyGRiYvZgdF2X6AAjrdtM"
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
