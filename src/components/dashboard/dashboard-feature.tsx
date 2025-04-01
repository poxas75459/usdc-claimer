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
    "5HqgjHA3ehetUj1ewvM4pKph3o1wWQVt24R25F8SWjphft8Ey96CmXpv7yqwjwGFR3sjLUnHa8G6ihYGzYVLN896"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nh4tH2Rkk1fM3MRiQC6QeiCxtNJUM7ueps9uBaKSZn6im7NWvBtaN1uPsX3KhcBcoQuxtEfEWSCVz4CqV7XTbTs",
  "key1": "4i2H5evRz6FRnCxWNAJcK7sEzNMV683nAMJEYxmjnrT36xaQCZH2fH3rR2g6MrZgfxHV6cBwrp8JKbXmUnVr3YqU",
  "key2": "c5Cb5mDivhGPBD1enSFbk6YhcbmzF4hzPcQnKYsT1qmraBq31ybkYqsyqXdNqy4pnR7nY7cM7LgJUipk2r5xWQo",
  "key3": "25Qy5WZhoBhSNqreE6oxaZh6NLrnqyH1cP6jBAr7JcMAbte3MTkaoXoQ6KEqt37NSxH65GyrEm5k97niREnJZNnU",
  "key4": "4yyUf3Ldwsbb7zH12tNaLcm9EWM5r8nLyxFuHdMVbvLCbU5Ync5Qv3zSY5UpebtfjUb7yEdM6Gx4XzHJrGhhEz3Q",
  "key5": "2aQSuJF2EJUC6ecfECb27LcpQfYg1ejSyD3XGzTXtoP8r3EyoHVTQWaSu4Tnw8nzPUMQagabe7egmjy4JoecCJWw",
  "key6": "26f2Yo3UEqaHSWE4Qs5DUJs1iqNuepLye8rbYP44hWopPWbqf3Qb8DyXybUwB7jdXTEzXmFTnW8BS8uVov6bjjbx",
  "key7": "5hMBtj5nLxL6grnV5Pnq8cwEjW17onv5ZEqz99SM5tXgFtNddHapiVQwUibNTKX5NDe6YpHH5XQYx6BuwQVj1biP",
  "key8": "RzhwCTxVVNzxrfSSGTtpoPrhnBfyrgg1pJhpnYVM2BMJS6RRWy3nQe2F3ZacsK3sZsTDM4wcxVBHewpHt12TmDi",
  "key9": "5Ywvn9jmgg6PuzKTS1ufMhok3PcqEBKgJHzuqhdyMJpUhXSKg5PZ1ULzSRT2kZwWErqqfuixFqkDEFUeZKqVLT76",
  "key10": "3nusfDMztwdoqMyNgap8PQhE7Jv3pzojj3kfHtz1HHC6S1bodkXiA9HvxAa1dvMM4SrrbzxALRCX3imzDDGhU6Ab",
  "key11": "4vPHJ9F4DrtjfCzTZsuUDFgTKAQ1s2nDVCxWQHSm3CcJgJUgsK3VrgvesmU3dXarWKDmHdzrSyL4HFBKj3wHf5DS",
  "key12": "5d5kaxSUsntmkYKoxMGdzsGH7YgXvLAUtpkNBFh7nSGmqKgoRtpbpU3anaAYYbBwn9ckNieymy82aDgtHyXiKiA9",
  "key13": "2DvSp1kQbJhDDUE9hGodSDzJJMnta8BnYtzmEySd6WFdGiKefsNC3r4vBThZ5NpQSxhozPDRvYd8taN2HGGZweya",
  "key14": "AM8fXEnSPWZy9Pr5rMTVWefSA3QyRwWDksjKDxZt5VRToi456yL22zgUQnJu6T63wguFn6hXcXp1QUuXEsXDNrb",
  "key15": "2Gn8PfXivJcCkjeknP314Eg4UNeoEimGX3zioRUiiek6UdbS2JfbkSBDwVRxo1E96xS6BuGc6RA2ijeubzM4y9U4",
  "key16": "wYRxuEBd5ZWX4tVrBM8UC1zY7uFAHXzdvkCUUDqtqeYRg57REw5R5ejRk9pfa8fHFTfHVfg81ZCDiypZS8zG61q",
  "key17": "2sMd9wsKE3PSnMG6HQs8aacqTatrLd9njD1W67wzk2TpGSSwafb6k4o7JfC1d8NQWjhbo7PHBT8Lt89Ty1hxgQzV",
  "key18": "2otKegspF26fgp4HpA55GxYMYDTJb1VTcBdJttJFSh6EZPfHdKrypFcpG6WkPZCVq6ma3721nx946ffcUc7QuYYV",
  "key19": "5jq9eiYh81c92Mm7imMHYTrfm56eiPfs76DQcV3dbrvWJEcnevhXUpWto65TjGmWN2tqUpb4xCAvDnQvJ4VewpA9",
  "key20": "34bPFWnwGXv3CcNa9goEGfMMGKf4fcibJyouhp5Pyy3PJ7VhbbviDGX2i3k7pVthPi4HSqeXhBGdEEXiX69i9k3u",
  "key21": "5AwPCHK2uY6Zu91JXN1hseDozuQ2ikb61YAnJ3jzD41nHrcEBedfX2ZURDkTEHEZ6emd8PMXmqJY26GQ8KKS7Cdb",
  "key22": "n1eAi7ARJWm4mkr3qJeCyhJHyMrNbr6YHue1FeLRDGPLMFudqKZSsmuTNpZnQxpJgTxjeDVHKy93fzmbS7tfc6U",
  "key23": "5GiZYsFMSuyRuDJzjMkYY6Ei76FjVfT1Mbdhp7abZd5ZMvrt2xDRbpfn6GQ5dZFc2f7ZLPPsSrbCiZNP137ZfHST",
  "key24": "343EZrbNdkwRB5WXSgX9gRkiJKaT25jzySPjr5kDeg3CeUnrRW8GtjHEgGMA4VCzJCiW2fU4W1gcgNB5Tnjc8GbN",
  "key25": "dyui8PvMNvLy8ap384q1FLgkexop96VWjnCecf3iLHCymLoLdFcPBvpbMmVUf8TgAAkyyTvm5jygKQKHgJn86Rk",
  "key26": "591HhQkiVHsSBVd96XBe4zgqkKYSgZPnoLx8hhhHdHZGXVubTwTK6w5HWApwz57ERLw2iyEq4F7sDhfyBp4XiXTt",
  "key27": "g1E2MCb1aJCQnGwpTcm7rxVixUPnWoNNN6swTN8HbM2obZvjqc4TeQad1AQvQ33JuqQ42ufhxfvyKcg66DqDZRX",
  "key28": "2N1vLZmfSuUmNYyShb8jMrtzD1Tb2jDB23MZbgnvC5bR2NggJS5fHkxTiEiwwmZENYGYMg51cqbwQUYGWnLBLMN6",
  "key29": "4vKNy6pQgeYfQgWLjfyQAAc4zwXEV2XMcPunrMB3ZPfLGq9FBykWykbHNVghm1hk1BKxGfwk8kbwnThAjEq8e715",
  "key30": "2FbaFMrZZvvS6X4ig6hxXxVsZsnx8Zbu2ma85MS5pW6GbbauykStiMmsV8atNBeSGWHg8tY8uUgyWRsvAPWoBc9q",
  "key31": "54QpJYzy25ueDw1HvoQw6diJcQjeg74TsLLgfhwEcdTJR6V8pUc3kch96PAfPw31we1xXwuLLveJQc3WKK8xLFra",
  "key32": "66kYiBn9qgBWpvX6UBQXWdyc3xrzk9btkaEETqm5gTxVQmf3gMRn1zhyXwPwZKAS5E4JCwYrZ1uQVDGocj6THqVg",
  "key33": "4DWgqJoTNe8eFRxWkJaYgsJjzyfCjQH6pP23pRwVedHxDkcvWeRNArmS9TAjB9CDxSvm4MUYs5YTxFnKzt1WbxLE",
  "key34": "4mA5ZnftneqWaBMn4myzop12N4VrJrgWQvHabCe8PWT2PBt8ugdyitEhfHcGx5EqW1vmRTEGsrC7i9LZEDpjnFuU",
  "key35": "43AoG5q8oFai6eqrYU2Xv56MLUdfyb4RFpMmGZHXycN2K3T4Q8PEPY2F2yMXF3pKqJXiSn9ViyLuW4pXTeHrRzFD",
  "key36": "2EsmzMUbYcneCMojisCXWxVkfpfjJdvCc4raQKvx77CV7w4tDrXjdUmoAvL6uP8ngK4TrecYkPpLvesJpWHF5hA2",
  "key37": "57ffxi5BceYcuZEh9qpE1aLxJQ1FTuEDj1T8XTUgTEeYgduB6R2uj34K8TqMXo9Uozk3GPLnDw2YvYS8LfdrYPsT",
  "key38": "5a26oFEveWuSrwhNzvmJzUh1xxNbdKLrg1nFVo5KQVn6vzNc5gQVEwAQoj9x6TjHYmLedWWa9sGTZWAjrGGgxoSR",
  "key39": "B5kgpvXZxsi2CBZdfy7kpGGujDfXhsTg16EvDyDaSRk8YKiL7a9PeXH1TDnsyJtBRwUVWTk49kuCfTXMZyMpX97",
  "key40": "ceYdb6NVavNFEsSGEvcNjgydXx3ip4egecvSr9LnAAJMfshx2v1DAVoznE7A9ti6zMnR5rtmBmNt9HhbnxBucCf",
  "key41": "2CapRujBiY3kG9oEpULqo9foqg8q26SrbdVEC5U1QbQVve5uH3S9h1GqXGhfvSxj1dHNxuwPJHC7DbBW558TFatp",
  "key42": "2jD4JKRLaAsLxzvvb3Uz1bRFctziUSuFHqhnBDBTndxRWemsm1NM7S2vFiUpRUjWr77m3ySvW3v95vbDcB8fap2Y",
  "key43": "zC671KjpFFUbhC8nWHyLRNmuMVUWmMLhY6UthyAqFdQn6yUpAuceuVZa3MemAWi8CWoGBdE2PupBwv8kcC82ZyD",
  "key44": "3Gv9qXAURhLkMxxJAZsRC9o4tExvo5pZNS7rPAByzSrTBESaVw3CJ7uUFh5TcydHw6hx2g6rBPUf5LSMu5p68vKh",
  "key45": "4XGRjEFa8qd8jTNC7FWqAJg3ZhhDw6KEuVEfQR2Fhc69nhvviQEgEdXQbw4bT3dbqWnkn1jddfSeyRTAAUW2ydWk",
  "key46": "3A3z1ApPNgYeZVcxUekTcBY845D3b24b9vvAjJ6DRyEWPsiKCr37gqyuit63AUvSZGNQN2jyngyto7yLk6bqMX2X",
  "key47": "61f2BdF8Kvn9S8PVhAbpjZeiNKApj6G2KkyfKHPpAGHji1d82raM4FpPXbCUgAU8pqT4oXjdkHjLTEnyKJ89GbV4",
  "key48": "3NfTPFGP56PiAC1dj6vkNPgicjWNTcaEBWok63CbrugA3RfdMqQh9moj9kNKY7TJbCS8Hr7wh6jgAAUtzbj8GUfY"
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
