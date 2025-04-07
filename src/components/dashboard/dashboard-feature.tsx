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
    "3775Zh6cLKLJpo3iU3S2T6E57RUocQS6sDCNYhEPUT1dVGHycCC9kAcdV6kh75Vxn54xKqpoDimNzBkBhoAQCHu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EqoTyPpMU1PaKdZESd5g9c8uxgqXErzW6EF6HUUn44Y45PTmepizNB7ogamxuVW2EdBeuUZ1T6XC3MsqzTHZLr9",
  "key1": "3Dre3vz7jZ6PKqSoT4EZ9T3vPZGD2pBjACojfQUiFeemA734mZWxZJARNkTjKgoPURngrjws67HQ3h1hBUQ58XDd",
  "key2": "VNrvwohgdVyW9dHHd2t1bLHSKmmAYA3cWzCNC74nM27pDiYZ4BR8B25QAVuw4AfuY86czUgkur3tiZpyM9Jqi2r",
  "key3": "45PcNKTLgUmHZ4MnrMZivjvhXz4c8vop2WRWRzQGQXGP6nxooer3aeX5vV5qKXwSmp96Uq1hHjid4b4u31am8axw",
  "key4": "2Amdic3FHS84GXWvcgxnhAsRzXtozosWPoD9bfk6aZeDbUVbTpmQbJDQHarVfP64kpuGrPhAsBYnX1m8tskDzZWc",
  "key5": "JMLrddKdz22VXb9vvDcq7AK3e78Q4nKYkriz46auQ33ACa8A7YT7dF9YFeAL4WRvuRXRsEDF35JyiXSnR4EP3Cx",
  "key6": "24PKi2mALdC9CmVtJCQkhUyUZTCuTVMt24P3BDfCHcG6SdvvPTB1Zwo8ys5JhwRDgXcrWmX4Yhb8GSqY5K2dE8dP",
  "key7": "5uHUE7UmtPiDH8d2a4YAVGutjDNaYVBMEoEVmKaq7W5oaUA5N6KN7XVtZgu9m1M7v7AKYM7J3n7zgA55o5CydYwE",
  "key8": "5GFnCxnapHkiQZy4djKE877UuhDoGEVJbHC3oBjbusPTjDf3uaW5W1CZJZ4fDguzF1yN1Sci2PzGmwJke47z34aw",
  "key9": "mwkJfQuzttA22bwcKZBJJzyk8Tv3VU1vrHxXYvF2Y1w1Gir74UzqzuyXGXRjRme6zfnFhmUvEs6db9pqezoC8Y8",
  "key10": "2ehakQ638ZDxTdZXfWu8WfFyueVEqBaPDYdeFtEiGGWbzRXgZdbfY7kFDvWVqeXFedcf7bZ4D3Vk2VeTZXd7jBm4",
  "key11": "5hwqdyjVpgTz6nFX69yLVr8NLmVYY5s6DquT4J94NsweAmxe1gCZrrJVE7mqwng5GyS5hJTBRcrGpftos44nFeA5",
  "key12": "3hD5thZiMqHpXGPHLrufBo7TJvEf8RG59HmNbNuijDxUaomYp2gnUDS7boKbfTQFqAH4HxXh2k9LV2AJ5zV9rD4p",
  "key13": "4UxSAjrQJo8gvHHxaFih6R9PyxZywgx2ezn9nj6aWgzDjwbEsACyYWNhSkmdtEbLvnDEVV4nrv41bUDHGagxqWdk",
  "key14": "5RR17U1GLawkJmwhMtFznawcAnyWn79TTuqC5efYhgocMTFr1m6T9jQ3rvo2Wr2LqwiToJgGZsYVC6sND6nWEB7p",
  "key15": "5vB7QxgWpHRhtqUgjCGCM1yNhGHiZqoCfcEBAcaTXPLJvRiD7fAs9CXt4sfYG5tngoiMgoVFBUVK5eXhuj5kCuXk",
  "key16": "4akxkZDjsVcK5kAxhwEHH3aMgdHhYFDXJe7aKXu6e65PK5s9By84aiVfgzYR33JSHm16qgFud81BYDWrYR1hesvh",
  "key17": "5RJnMw7JN3kHmGzXLwPpaJULunpuT9LfuEVdNLfkYX8zTLhrPF8fojNRjoiM4neNUAKacNhx9hrFJSpPAqVcMx1B",
  "key18": "21ZgHvf43KaXtUBsSvEjvtub59wfu5TKfSeFD2MXKFUJN5gJyAWE5D7BCBoySP962nknKipqRcevnJzxtB1QLs4a",
  "key19": "5BFtqC1smMrfGgaD2GEoNoGGs5LNoAd59tkGWzvjP1tkDgsRnWcuvgYmqgv68cqGeFehJtVEtBsjiVaS1J7QdhbJ",
  "key20": "SV13mjYKCZq9boK8Qq555wEohaQtSuwUpZJqTwNwfuojxfUHcaRPo4XnMKmy5N8eqLrz7i6PHDXUeMoE9ug4mfA",
  "key21": "52upaNwqnceKfBXpSb8mvYneHPwZLDyEwQmftvz67GWuHmvsHMtw8GV2J2fvfndj4wxNEKPFy6i96V6rubBuGRtY",
  "key22": "2pgTssjc1z4caiqtqxmJm1iVqcGCAyEYdPfGxzmeW77G3x6EosgTZFzzbyJmUyHEGs1rbZyVjMbDQ2RnV5HNkpPi",
  "key23": "36tcpCEjRyaVLKURXj1M4t8kmF8k9K9tKfz5rHr9bHK28Kvt5vc3UZ79fXWEg6N3otzxGRMJiLSDNJU4G6aYAEJa",
  "key24": "2kkNGyFSdCpAJyLfAY9UEuqh7gZQzVpN3sRuujzKwmrSbKd7qMfpWcvqea9SrezHVmdF4TUQMSLMeAUYQgBxS5Lp",
  "key25": "43Uohxz929QdonvzbbyNFaFtAhVKzzVAxdLon8zxS92r2YoV3CyQ5SwgWxDTdo2v6ogJ5NDMM4mhkcgixRfPW48T",
  "key26": "5R17xcppN1TpdUNyxqM64dViT7VPwWWGDbiZg2JkjwfWcFTc3C26rdhsQHUzvmP7VHqXjx4ootrEjJcXmiDxoY3q",
  "key27": "im1WT3W76ioAuPGBo9CMzmjR64rtMTySPEFWnq2UNhpPJVunqbAup1k9NDdjgx6x16CXpeD271fxbkuYjW1CvdV",
  "key28": "uSksN3gtVA9QoJM36eeUk1wDpK35ZqjYWRXWqiBWZvsArPP9QqbF9yZonPYDWVEAEQMsTp7PyWfL2qwxg4KDeTg",
  "key29": "3BXeR5NZ2hmyw4qq93en1mhzD2AFHdyKWEBkzA944XHYXUHD32eRXURY63jr3QqtL6Nab825RiepoSJjmAzUECDV",
  "key30": "4QwUQj5tSgCzY5xXSoqqpm4WMi2thdwEZJWuxyyq1auiC4Z2Hjp6vdWuYfsSongAiAc8RynSfbF4h4ERbZvYdJsm",
  "key31": "2T3daPGmMATWQ1Y2yK3yBHBVgRTfG7B8DP6dQqP8GyyW6hcRVponmCDsxWBmzfpR5DuWQYqPTasuiLs2ZTqb85xf",
  "key32": "5fq4TtBbKvRNXjzpKjUZx9ACyYbGsdV7ec5cs8rmDkWFt2hkrL77b4xb3PdzD1Eejjn6F3YBz4fnvksfAGfaWEHf",
  "key33": "4xQZyc54mmdM5sQxvhSju8FA73StgcM2w5jNEqBvRaeuUyB5i7zFgFNnrhf8eazb3aUeTLgt2tFnYZmrhyhv9D29",
  "key34": "2HDq61jS1YHgdbYDSST3CdRgaGqwUhvvZcqm5wJb5H1tBEyjfucHLNvUqjxoK8vwTXq7B5WJ1SoJVfUVH2h1MrRf",
  "key35": "jYzR83R1K4ApDkdu1g9kvRsZUShUJLv4yczJ93jjRhAFQ5z3GidRMcqPWD4jEwc5RF5JVcdRPYhbFnUnew7D2g1",
  "key36": "3xLgaUUkvdqB4ACtj3JLfk4gd2SJvFnFrXD2NLusyQbmwoP6NiaiBDGkWW8WPUAwN7igpoyXAYJft22JYJr2ToHc",
  "key37": "AAnKh11ougiUjf7K7icyAtLTPyaWEu97kLNQUJ3cA7aTTd3ati37R5TwT77zi2xJBT1rriWx4tdwNfaAQK9RGbJ",
  "key38": "37C5HX3yNoMZehn4NFBd8qFv8QCkR2wCZxp9HrU6RX8ZHrwnJCYhApwxmVFSzchVH1zNYyi1NSq9j96ervoWiGKH",
  "key39": "68R1aDk3eYsZvM3RTbLSYJiLHmhGEhroQk8tx1D2iz2hEE44nDtaA2egaQufSXFZBvXJobbyfiZH8Sdje2oxUo6",
  "key40": "5CMxBnHSRDaBZVovAKMLHyU6zsgbZwBdi3ULVWnAoHDDWuKtZ35y4ppp8w1QKKevfEgp5kqiBXRowvqWVGcBAo5r",
  "key41": "3qfXdbFDWpF85jGpBvK3gnWYTnaCp4iW6NuX9ZBHsr8MHuznCNdXp2ZyY2jFz581tpzwHXaPnzaMLmKF3fbCQ9nB",
  "key42": "4RZWhXc716ywkhwRup6SHKM5jpjnDMHHc5dNQkjQtnLSZyo4fEEAdWWyo6ZmX8Tz9g2uWjt1wK8rM3JPG9Y2y85e",
  "key43": "LLt2LmvFR8vaXBPu2fHrvSAPBPWZk4U2rtNwrsxX29nM7trvJxPdspKoZhztWntDCBHkmJpPQZrrPCeQyAd3Ezw",
  "key44": "BtLwM84T9HeoqdVdfhjrNFyjjXnFdRXHz7L9HfoLRg93NiacAT9qK4PhXd9F7gh3SxceMTLT98mNYUgeigxjpRm",
  "key45": "2hQeQdTjL98WyAt3ViZpkCHTzWu6NC41AL81hY4EnYuup2efHyjkWJ1oYRWakCPXNhP9jcfUSVS3gWXwaDNpM1iU"
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
