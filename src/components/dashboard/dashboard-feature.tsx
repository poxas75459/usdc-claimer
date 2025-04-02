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
    "5DYayF5uzuWFo7GpdATbMg1A7YSa4Zhj5DfPW2Zo7imRXLHnwiicWYGjzTjCe8KfPgnUypiSq84cKax64eSCZSW4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DWnpDaQFKz8NCq3sXZkmUXaz6nysXhy2rkp32H2c3JXYXMcRxKNWGf1YfVbhVBsRqKtSMKZteT37s9Lb7YhJBbm",
  "key1": "VMgkTTfHXeEhfv1RdGUggTzRMmDCeUUvN4cpRLNayJQjNhveikm9yi3dTWb3AsUv7nKSLGoYpoYxvcn1Hcbq1Uv",
  "key2": "5FT5GS2ULnayVKFnuLxCpSgixyBuK41q118S65zrdcvAiUodpmsrrFUJwnb2Fxck365SLjztWHSUcceb49VdGGpT",
  "key3": "2ENXBbtzGUsWUSKva1W4Ux5EM8GKDo3QCvVhZ83YGz7HVXQsRWyH9QiqMREgAPbB626yPcDQaRLDvfS9DLdhsyKc",
  "key4": "2E2pMGLHFCAeF8THy89g3jN4VjtwdUEJ2UQVXC7gNpFcGEzxoX33iMg7nTPDkJh3hEZBoY3HKSFGqG5qG7LQQtV2",
  "key5": "28NJQXmfLrrfD87X1q9VuxKhHEx8S88kwhPq8L8w93dvRzDTccKZnY4wzUW41spZstvqyEXRp9ZutqSjYKtfiov9",
  "key6": "xjfGFpwVmeAkDDSEJc4GUxPf34ydH2cjZiaDVpEsRPgJBBgFu3vTqJ9cCqachmhU2trCWhVHgNKpVJdposQBDJC",
  "key7": "2pQGY1HNwoQKxXvTF6oXMhLw3tU7S3KnoSzAiRpmY9Z55EDTMmFzTBNSnsBMrqFzeZYqUr3ztAfiBc1bpRWTzLiL",
  "key8": "2hNgQgrpoAhHJk23ssLWye6BmH3dKTPJ88uDJermhdzKNs3gPL5ooxc6FPucXPXirirhDzJ1NaZT1RNWrHKgFqYk",
  "key9": "hY7XE4RTuj1BqzXysQ6m3c733ruhCmSKEtxqe8gxQctSnue5tgmpj35mMq7cjtsfZd1RZXUEFbSojWs8vFsbQm6",
  "key10": "5Dt2fzadhLae2Fx1usnXEXbPxbwp1DQEGt5uTEhYTP7fZacdbSmked2zhLFvRNVd3UqsQP6hFtiDdm5xhu6ZkcMD",
  "key11": "5StDDB2aDgVuoq5W1kf3n9x23u9Rfwvgmqdeswc8Dufu6WQhhCDqP1LDEUCbYm2oYSwWrKv1diQ3PpwBvd3J28A6",
  "key12": "37gjeUWPhaX5QJmJFvu1CGyAWLCiise4zgETxqTkDYrbTtaJFZnrhQpBjCMMtwJtmBF2FmjhX1XdZEeHPMTGTTdR",
  "key13": "4CqNj7WrpGhkArZGdSjPUAWVVT5GgRb4hYM8mMEPxcwHYc35x6LvNy4ShJoEaG5C4wwKUuRrgkABCg1Td2FxzF8T",
  "key14": "5L5s455YFjE676rpmAGajGRySmhFCGKHfZybKbZkCNB8aBrj4SodxzyN1gSc7MbYjbSa2h16WWRbGifzi6G6UXJi",
  "key15": "2dMiuqEZp7bAWNadzf2rqdjc2Dqg6fci6ZFqVDrptmtiBmrw426cDmjboEDCAZA3C52g6gddEY5XanJxpfAnjztW",
  "key16": "3qZJtBR8KZ6y8Py4cumiajQ2kA4GhrhZDTSbP2ErTDDQPa6nGUTriym5vKXrxzjW3Z6tkTdJyUd8zNBsFEHo8CrY",
  "key17": "4prHoZBsPFe9BM1q9LR3jrReR2g64TFtyVKnhHbpEiadHyxG5crAsMD4USLZWVYcsFFz9P11gMqap3s3to5V1WQp",
  "key18": "V1wNGuwjtesRyvppQg5bxs7zajYh6jH95CUjVoCwyMmhdu2o56Up41RrmnCouHpobwrFQHyxA17QdmAEeSemsiD",
  "key19": "5pSv8xFeth9Qjnyt3cbTbzWpNLqs44tL5HebjbSdT94xr2cskpe7bkL3WdYe48N5oe7sPo4WreB9iAQfp3DiUhfz",
  "key20": "2twk2CeNuEDxngzzbBXEhRcw2iAFfJXs7otAkuAngzU846E7cZLry8VsFG1D4g4iT1hm1UTWbYTjk1RmfV2S2z5s",
  "key21": "3h8NYdirYgcvyextqJLKCwPymJ6y2hdeqDjgNXvfYuQwZuucKZKnbBEE9pvmebkkD2fc2sS2H8udTCMzP24CSssQ",
  "key22": "3AzJuCkRmC6Y5BNjwNThhFFXQuL5ZgoYJz2ngbzfgCuwzCkaWLLu7a33MSSXKA5AKHh4HyrEKysA7xAyy6VsBAwW",
  "key23": "4vURKMP9NJWzoDh6WXdqTJKJtURpwsutZHkm3Vmc6eYzD4eSwZqv4mNupUiQk6ng6DEdGaLbYzA7mJ2U3Fksf3AG",
  "key24": "3qiwXZMaMA5CRQEbV7A7xbxXSbeVYnW6TPPfevkWiJ9CqnZ2e9ABdyVXXnGVxmf76SSKQeY66fGgKrDoDRShPgHR",
  "key25": "2Xot4nZmb9jN8c1onS6EGNd3T9r4NaiHMQytE7GMQygibL6i1VF9v7ta1eyLvoivuAvzspcYeH4ZJwdzmPjRUk3f",
  "key26": "2Q91faG7TcuMa3cawNzJqTyMA47k1o4w1ddYKtJeqG3GhdWVyC8Hju8WuaTvFPUAeVTWQRY79XjeeWrV2yybKDs2",
  "key27": "4s8ji3Qk48hbPRrUas59Mpje98BHFHavJagePTFEGozDuhwQJMd1qMoMD4VMtDANf7Ao8Vho8apa6pMGbcukT6Ff",
  "key28": "4WW796pBqVEMdjGuDUfatMBL3S8rkDVq343xrNRocY3tDoP2avXymbFnfudwi9ZMmNtunsKCtagpTqMKhdC2uvUj",
  "key29": "2VgYb5gLeGhd9bXjo2WJn3mugY6gHEM677NHvLLxGjsdr1Q5b6yXcn5uvot8ywpuhmm8Z2FHGnh9LvFpzAsprk3U",
  "key30": "5v5SzpAPuqyiW27561R7TjJSB5btFes6SJCf5pVGnqCyCojhVwRZwguKJCxzejwKXiV58RZSoY79gxqKwtK3GgSi",
  "key31": "RusDQSXRad64JLZQ4ivq6ggdsADSnc6Kwe4PKbeFdhjKVux8WMjG1idZVDAwdnyqyw8YW7nxsVuyHDbyms4u2Q2",
  "key32": "2dweYaYV6J9RumzMoiY2dPVmp9cDisQt5zSkco9sZ2zoGur7qbH6n6HiRBHMxmMXHFyWFbbgg63GNjiBwNpek3JZ",
  "key33": "3jjs1Yo3cjEUxPPiTJiisCKxFj41UYbhb9Qi8PKWZHDM2LXn52zhpzQVfBaMRZEYxuDAh6k4kwQ4JyS9VTY4Prfx",
  "key34": "2zg1XszJXjX1eP3jEWxYeNwcFvJ5ZNQPNFb3TcWiLPa28TfS5AqWPFWsST8VMEzfAKCP6gBjx5MiY7M4DUg6J2tq",
  "key35": "3kmtaimoiT6QLMi9g97wF562gudrGUBajnvbVTFvRpX2sUZcYYyeuzzi3NAecdACS7XuMwUGbrStP7BBr8swG4B7",
  "key36": "4rnXsQonMSQdhqHGyTkQGm3pTxJUFGkfsmH8Sbb9wxAf682tKWVvqhKMmqv3qD2b8GxZ3PGRvfy1NL1iHnLgpF4P",
  "key37": "kWvjegkjSr12tcwkQvwLcDk7YNK8tTtsBHHDQD86uWZUkjZSJTvtghMyaJtgPrkS9yNFDGCW4QSV5qiH9qXFyWP",
  "key38": "a6zBsJHyZuLPZ3fSXxPDpGNxQHGsNDiLjGyqrVxACGdGz4iw5D4USLCdvpv43s95kBzEqACJQZDJWaj1KPzwNpc",
  "key39": "qGTmNmVbVKrxMkbsWfiV12cqiVKWAjvK5euHVFYi5aADf9Q6qfdkx19ULJRtyuzgo5ChkCR7suQKupkkJVrm6uw",
  "key40": "3Zggk8kyNm4Qsa7jx7w2irhAHkm7nAKC49faXuCcLxecwBEeQXevioFe2F4ifC3LLeviZdicvHexpQXXmphmaok4",
  "key41": "2TZC1naXxWShtytNCqpnjxDSXXe3qpBzNKnEBn3VLciBfNgAyHz1PBUmZijc9aiFf4buJLtRuB6Ej91ZuaMyABYg",
  "key42": "62jtiEsK3YvM1oz2K6iHJ5HdDYNR3hRr1MneGTtNoYzWomQyZFS9f39shsaf3poDBYGvuWc2ZawUhpk2X7xn6d94",
  "key43": "3KvVNDQfLXoXpPDmLvVZhSfAYumMKk8t3TmMupZmCR6W1gYhUZJjcRntdj26e8trjeRxAXzhw2XPmjzw1dohrKsF",
  "key44": "5N4bwoYvF8Sypb2FjSj2kEt9wnYD2Zk33hNBQmJCzoCPYwXvQTdQ2awC5nfwpPVGxKLfeycyoeAzZ4E9GYpLWc9L",
  "key45": "3RhmXgXxA6m86xWm3tNv5rxmKiXTcu4xiC44t7gTy8avmH2G6aUmG1uyf2FUNqj5mfdCk93rWwAUfDfZoi4Pxvob",
  "key46": "2Dcacvdm2LNTpgDZxFPEaPwt2SkipgZipJ2oWqMNggFMkPYhmMgYdJJxpeWS4TSMX6WzaMiTVa1WuGj1J6Z1EC1p",
  "key47": "4eNeuR84BroCkaiuGQBoLPbEs45RkeGcf199qFEzzAYhBEhwgXENzgMDdPsVcg1qYuNnEmnuVVY9w6MbskVDi5WJ",
  "key48": "311bjiuP33B38C23RBQzjDF6xYtUKyfzrPxuGTcP7ScvwJpEKHswkRDqqVLsqpZEZxadCNG87mVdDsrGPxQTHaAT",
  "key49": "37xrvUdxdaxHP5nFp1VAtbND2eMTCJ8yUxUwgHWn6tHrWGQaqnvuRjgjbkdt6zYK4chGgEDQooXyd9HHN7VxJHrk"
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
