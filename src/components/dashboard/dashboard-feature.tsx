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
    "2WuM5DDJcsjs4vq3rnPS36Ej7gHAospkhsGT4xAfVXvGeA2qsvWXiexCmNB4Jjs3iR94M7HCui6dSC3bCsYwbWT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rDtJ4YKCpMfQPmR8K51YRJKe8mAtoczhjWDucerBhbZkBAYWhv7TE81uvobteJ7Y6dyhqNQd24vByyU7AgpvDBH",
  "key1": "5MqScmJbAD7a6UUSS4pF1EZk7RCo5z4UMQUQ2TXoSK1JumDnAZepZo7G6MLVpE3GfybXhdkicvfRomrqsT1CieXA",
  "key2": "518JPJJ75mqp31n49Tvy84ts8kgx9YnxV3ZMhVsAP4tjAMsL1xwy5FWCHtGDRbDiVUXccn6g62yrBhUq2XPfXqM7",
  "key3": "4R5Hm2bYMv9NNS7GsoYsJyPqTkxxKFuPbSTNsQLJ2v3BrdFxPepcLJQofMA65wA8m8TEgd2tkkGmHUGDEHpXRzfK",
  "key4": "265EZH2V117Rm9ZhcQiHRZiuxT1s2JmjYoQjbPeejmWuna5i7feB1tv17v41foNHmUVjf5GgmiscrWySpzsPruB9",
  "key5": "td4YXsnRXByQRnYhvdSDEUtrBjF2ZUbUjFRV36dYbZ9aKpkRhgme3RNfvAmUEbAXF8JG7rTur8ZiU7f36vRDMRB",
  "key6": "2RAqAkEbzLUU7aT11RBAYUXTY5ncLkATEk3GG9q7BWcG7QFSbneoizR3nLDy8JERCWUhE89UgxQVsgwUiqedKrWN",
  "key7": "5412TcJr8VU3ojqaMTp8jx7LgADNkK5Uk2QxVbwvFEopPsQFFmcZTRJpH82SHiFZCcaZYVHXL3b3Djv28wxFoZvR",
  "key8": "4BdEBZ2ixtJLMncYXGMewtEpH7V6mFvrmk5dCfPygh7AW3DyHRzrRSMkgkHUUuYnSyu1U6wtf9dMzveaRYQubTAz",
  "key9": "43S2J1EEXFnD48LxPmQ317nto3M6Y3QQjL9ymM3qwM8ZtDEMkx1bPa1PtJ2qG8LkqR6jstqmY3ens4P3gYVuwdN7",
  "key10": "4njq2ZjDonNFk6k62SnP5s5ZDSH5eC1dZcj7QM6EZQvKRDyfYbqDqXqB1Jo9hiZ8yhNUZErChcMLV5NonTB2dWtp",
  "key11": "31fRk61zBqCgUyV44vmyjFZRHuH49ThxPN7U64wxfxCcMYjdTvwPKtsdc912HYjeym3nXH9MFU69wdRdp7QzYfmK",
  "key12": "52ngKcoTYP8boSgZgPjJ9XE4X8qfXRcSuH8BJwvFXRJEUiZ2kYdDgUehkBpwcBPR8qkuU6FFpMgtJiE4HfAz8nDN",
  "key13": "dew2vvzzjp6AaXu3fXe7uc4t8gq5Zfntno8j9esUK7nxerEJYfPBcUFVMiQCwPDRokaxjFNdWxfY6AqJj9NfF86",
  "key14": "2oq2jimg4tCwwtNj6sPCyPqk8PpVZmJqWVQqy6d7jniCtqpzm6RzextdsPZjvDeyxoHbd471DYEowyob98vQ2zUs",
  "key15": "3KPnWssCAjHUkD5m8vsVdUo1na5gEY8gWYt962sLFMLqvFb6iFa9vJig98GuTX84ZXPFRZ9WkA6tASSGLejRqjiV",
  "key16": "2Tb7ojoqoSjXmg4WHdF3cDF212H94VEoBpaMoFfzGUjknqhgV3r6YK2UwurXeTjkjMe9oGbURgjiVuk2EoEXk7sL",
  "key17": "3BCwQTrrC2mGQ1aG81NFqd64KCv5yfZMewhBngze4BAs2mRret7BXdwTfHGxJD8jjo8ybUj3s96e19QsGMZXwodx",
  "key18": "H1wiQFvm1V8eRfuGPBfiDtRmjsGb1Zu6CN792vC2tK6L6CN5T8UiNNCDQRRNFzdG5uiyg72X2bCAu2759F7bqYJ",
  "key19": "4yqFHvNFoqeqmeRnmVeLYP7gtfQe4H16bVK5B8DCvkqD5TBwkdwVxGfTmEfdCHYpoacQh9xgSggfjzNhrX6xeqBL",
  "key20": "4p2HyFf53q1KKd3mJQ97MCqjnaudQPGje2BTu6XVTog7AQjmvc6theQjA6JELzx7j3UsmSrXfyPFSMU1wQMFhACw",
  "key21": "2qb9hRoWSwRN63wm4PP7aGmY2E8Ltwut76Pv4tjSjHJaoZLHsBVD1YuewCfDQiaGtrAhi5SBMnhJmVPLEXX8kyv6",
  "key22": "31Qqukv6MzXnyayQt8dQbq4NwhB9eV5owcgAwoiSDFAgzqM5AbFHxV6uDe78XxgxYkjShaNRNPdCuwqddwdo9fxh",
  "key23": "3ZXAyQKG5koejtPyPcXBR35huKqjtHKvCwSpZ73Faswp9p5nikBdRNfPG6VtjRLXiXrgpBXStKynwyq5XJEERq8R",
  "key24": "2KXoeonqcLd6eggRhxQXX5ejMxVsk6ix84DtcvZLZB7irPTKdP7H7f3sBGzbVNMFfnRJyrbsGGm7YJtuuYyB1bet",
  "key25": "2MU3JGLQRhvBt1ZgaRRaMy1bk9dyKiup4z1rQSSczniE9uUMfXRCyPw5RpQWw6YJnn8Q8S4YehUfmcCVRc64y4PK",
  "key26": "FqcCmB9qzsfpyW3hKT99QC1rk3gNRiKmp8e7dKbQBsUegx4vZXfarcX45BQv3Fr8GhoE8Fw4h2c3xFpeTKXnU8q",
  "key27": "3ycyP2xPeQB1yrPEPVSMW6zEyNFicfW59pXrm1pTMhE41Uyf3xgJ7AAnUXgGN13dFNL1qmRRXtGWrvXS1YTS22CR",
  "key28": "65eWrMidifnn289nbnRbDpEwoAvRW3EuPEJ4AZuLbg8ySAynFskYEN6wys8AfKNxfQCNAfXmkkEkBj6Mf6QFJHCD",
  "key29": "3N4zrdAMkrdiFn3BBqxU1FpE9oxcBhpKxSYDAr3d7Zke37eJrjyBYnCjbvYYC6hizW4F4884Y2t5tjqYcVmYJmwf",
  "key30": "4Gad84MRmKJk2QJLHxngUcLYq7UxM61f5D2f5HuZNFKRNp8987jN14fTr9cyn8kTNGg2yPoCX6PP6spA1N7Nx4yc",
  "key31": "3AFJwzjgmbmB9WAhVq3fV6xQTNrGrswDyE1685FDj3eHzsR1Jzt7cadE249vyK1pLKQzQK1eDDyEtNAZNTZZnPoN",
  "key32": "2e21R7gRcKvSpQt52Grj1H2vDKyR93uL2LtVHVwqcv8mkgLLkLWLRvMqVe3yA6tv9qNDVqH5tobUUa3JzS9Lsrvv",
  "key33": "61ae4itBDhRgfFk65i5W9adpLPPRXA2fBxhhSsTkgXU7B6Q5eLmizQMdYAnhT2Xo3qJKK197jLLP3evJK8Cuui7o",
  "key34": "YdPbtUaUzWWa6Zf3dLWVqx7S8TVFTbkV4aCnuKCrwNXGxLN6XiQfBoaXNZ25aSCaiPiB2KjfeWmbT3zBw4TqUHz",
  "key35": "3zvUTtSbsZZbLwNwMWb5tDQDRGafWVwydCk7StpY7Aon8dBrx6TfaoPM42yrwhKj51bCmYRaryHNhHi3DvswzH5j",
  "key36": "8yzuq4h6QiDwhzh8si5Wh3dMEXUeqenBtfKtg5HqV4tgGE64pZBnLEBEHdVcAWPsMPeBrVUNPsLEprJdcePZMhz",
  "key37": "4Xe5Qa8ZRWmyotAoq9zBWA6idDzzHzhnBdY8oYHX5st67pKq3ZyBVtugS1mvEgHfFWEVTBkVFrtS4fNtk7Anenns",
  "key38": "5jftAkGduN5YPwtKcbw86iQnxzPKBntPUP1xoARmR1T4QMVvaTXs7mDf3C2k3y3awEsMTshtNVrTKdRu5bari5im",
  "key39": "mzDiSB1pw22fcA9onBK1xiAc34hbQmPdELubhf427NqMD4TKv9HoSxztvABZg47fWoHGbWdtDdDyPYSUsRfv3LR",
  "key40": "62DU5eYUQ1UDBfjWpGprLG5Y4xZaxq8wWPJokvWrZV3GcPpbjJWSWfPA6uMAtAwoD1S2A1s7vagyvYZmxhGEYBHC",
  "key41": "5PXxgaeDKULAZXuRmPdFdCB1dbpmz42hY2F87WBrRTPk9xfXWazdGfa5KEA6b1iF8s6HkM2W7x1x2dfga3TC62SC",
  "key42": "2cvS6GeHrD1dipEw8QMsyEWYKsnjCHwBZTwD8Ds8VAfiuTtGYiWw5gDrn2vFrkUQbiP48TohCBBzXk2DBFv7RR5d"
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
