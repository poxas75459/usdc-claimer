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
    "5bwHf51vqEKGYk6osUb5ZcNgeHLXm9YDEZUyyN4X7ccFVfdzuyjy2MKLAaE26gJjia7sZ5MDjxVEHyk1QJyNEQ5t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yRPcHiNwmcYVGWBq8Ttjv8y8stPhmxSVpRDzMz2ZuD4EtFXoGzNswwRwGoYPTg6KRXHHYCXJ8k6F1w4D2zUifBH",
  "key1": "2z88XXsXdHa8GHam6cjPNWBQBs3Tbwrxp3BR1GVYGT7U3s6fHqEy2mQezHpxKyDQeoXtu2g4eHAtDbGfeBvgCkAV",
  "key2": "2rBSbaCR4bzucXLg16zdfQRMHnBKV3y5jLBFhMK7nYDGQCXN7HDwKXok6eyEQE2nUybNmQWgWhbj7HB6UqKPZc3j",
  "key3": "5kEveUGDsumoPFusnLnqk3eUmT6hknUcLzkXq9Vk4tKbetM4UwBpFGrTHsi5kmtvo11kMMiTy358XR5WUGPY6UN9",
  "key4": "5cae48tgxf2kzE7cruDMow7or915VbcVgY4XD9YhNH9rSFcBmfCyz6dyHFxmxyyvPyNvZAwi5u8xHZRXqcYwfUo7",
  "key5": "5UEotgdEXnzRjuqcXxFtn7EpFB9qs7ca9RDBFmjRGqgiZk9KKvwN5Fd8rewRVTHB3Q9ozFLkVJJmd9JTVzMfdyWr",
  "key6": "4NTmynRZ1KjubruyhR8XM5NZCGF43Lpx6fneXGR9veDqekQDJWV1ebDogHrRZUhZSdSmYbD7pguWa1FXi1tbrkoK",
  "key7": "2g5npHDHW7biv8zEmTDyt4eKbXBkutG9vaxK4dAsuDf9ppLCjLGTKMbT6WyTNBZAzKEPBJ5WtisVRqsWW2nyPt57",
  "key8": "5X8TTyv55yQAh9R4BPSVcVB971mqXeS1e7g6KMb44wF53dj4wRfihM5qSAbNyhdX1AiDiBBe1B3QiPFHCfTi6oQa",
  "key9": "3fx8FJUfFfHmYnepEXJzS1x2iUABuSi5qbXfaPQ1ZJZYuovxkuDbDAEyj3uLrJaGmsZ9K8wXM7M6Y3VkrQbFUdzC",
  "key10": "zWqf3ANdftaLzBtf4BA24LjXu52fW8tyri7xbpmu8FUT8RUmPs2YSdDtiuwwSWPPJveMxRFffn7WCb6Mu1GNVTh",
  "key11": "2AFDzYfARfADHCsoPAk9jruaVYMAT5ihPHpyKJAyKHQdt7LDrJQe5QDPvR6HR3ZHZPJCsgRTt9dvSVTKHdSD7Vpk",
  "key12": "655oaceK8D6k5vLPWMfNSyR3CFDt9K126uG1jZh3ZpMn4kvFcd9qpLDnfk17pR5nJRS2tqP3cKkGzZtCjgYujxML",
  "key13": "5E6aRgxz8cfEEuxT2f46DyLrU5mSwyFoMbwbnbkbcA2whdTA4QNwjRdi4HGNVbRj61Dc6nwPHSnRxEweanFxj1bD",
  "key14": "DAfonoLZKpj7APUL5jpq1HLWECJPrUkTVQUkajGMYiGJB7Srt5y45Mzo3T12TbxnrenAEef5ZiGR31FpykmDT8c",
  "key15": "4CY5LowgrxcemqFfffowZTmyKBnTR2mGdqqHoPxMaRZ4cMyadNTYu8QBe6qCn18ufKKHxsZnJq251APFSCZdbmfq",
  "key16": "5ztrTa2Ee9GaZQ6s6UFiuvsv9z2FoXqE1U9V1nCXjLL7J1NSCxY7bRi3ZLNY4oMdsddBppAi6F7veFsFSndAPgRC",
  "key17": "2gVbciVj3RzPFCiFcmvfEGXnLWD4xDnprf9Cp6YXVnuqtnNY54sgW936NAfnLnusYvVXbE2Jjcg2VE9LKn9Gn3in",
  "key18": "4AVH24vNWj5jxZTnmc1HyiusTBboDrjDLsP4PMxdtrVeid6v4TsXyp9vmGpZhVW7wjRHFsacTK4XCbE45XiRSz5N",
  "key19": "2navoH73Syq8ctGgiea6kmwZE2bucWyMsSvH5M8U9do88EVPNFHhJeozuqdX8GM9ri2LmDK3SEnJtc2brvysXpxA",
  "key20": "3o8yt1VW3BHFVTvYiAiixidB9VxXgXJ9bEugjmVJ4w9xAuWyhVaikP3mCt9wDDiZbCaxy8eJr26iHkJby31vnKmF",
  "key21": "2hi84L5FW6hpaUU4CEq13qxxs7hiznDm8VnV2VcsY42xip3zucisZykfj1G4YDPJwzvNVnmKSHRj6irCGC6HYmSM",
  "key22": "5DCzqx69px3M4FNJEGB2r7gfro63TAQjxpo8fCQW8fsSoUmmLBLrZKU5NLFGewDhVCTkCQuiqmX9nWwS93PYwYAR",
  "key23": "4MMe8Uezw7w72CZjwVcvEf1VKiT1iaZ4BWDDyVHQ4LgJSYu6Hp85ZpqBfx2qyec8BTpvVio42M98ZQ7AqBJFBoQ6",
  "key24": "vaycDMusB1fCf3ZfcSD98MCyDsqco1aj4M4WHyrycbmak7SfvHSW5VuS68jzeekvSH7nZuW3kjHpUfdAYSMEg5F",
  "key25": "ACM2GARgaVnuxVsAGpAPE8ecKhF32h8YRP24R4WbUb8qQ54WvBHspodWYDS3M69FWiycJNXRpPgGAQbpiE1eJSe",
  "key26": "3Pbtwug6bjp8ScLxGuYxkHYjCTR3Nsb6X6MyNR8EkzVzoTbaH3o5NUtUJ3Z4h3cRNTqavgKwyAvyXkXojREtNEQv",
  "key27": "3XVDEsKJdayhE1M1JWs916Popgam68MRHhu7ZBuHoLbkTo1BxPqyzYVmjiHYVPN9U22M4NLud4rPrDNJrHdgkT74",
  "key28": "2kwoBVz9H3EHc7BQhLKfouUYUh4FTtQotvcbQBpFYkZBf6Kfo7LegQ5BiA8raEbGzTZoHPUeomtH5JfvQ9FUzjeH",
  "key29": "4UqxHHcxf9ucfBryU7U9sK1g9DY76akQQ4MZJU4CvCLsdQobwY4LtL1A9TYaWk5datBAXmiTUngBsBWuRw1mFxH9",
  "key30": "2NneTsra12TgRRtF4E5kbq9sFAPWDAm8gru1FagUuzNTNzrK6tNoCxGFxLv1pd5aFebjX4eNqrA4mfLVmgb9JGsc",
  "key31": "4ZRcGPfjEgp2iq1LWgTHANb3VzXpkUQPDjn1arD7G87JGKdg5Tgq3zuZPxwd4PJwZygTKMqv4bBMqhBWZ3CqLfbk",
  "key32": "2eqgQTnjYzUTcsEAGCSnPhwJVV6CkWdyR8TihdFYi8kSU3tc1CGBndPNEAeLPwXR7xqKvq3CSuRYoQ6hp5qXqpAi",
  "key33": "5ge7VfeJrGjeQCGJaDfwNZ3vHM5Ksbeh4Dn3bmmpLi4DprzLr1Giycna3Fs4DWuyuMzYHWttgqsZxRc4YXs1RiGx",
  "key34": "4Ce3zgStffzS4fEvxhPH4Wwp76UxJvgCktpJvBzvZmtddB4WtAVDXHGqnrd3Rj9TNcaGBXNkPAL4X4XQidyUYQ67",
  "key35": "473JEDR95ojzDR3CDi7TC8FAELVksE4qdvXpu73sEBoYXy6eoEC5QfrCrAfKnUsV8nsQDx7DhSKQnNNWQcwu7ow6",
  "key36": "5esyTi1b9VmyVtJYtY5aq2hkYpkNqzkN1kkZ1NdKroKARfZTVhRwkRmAQhrkVymd4JqPy2KmwPeNNm9o86otURRE",
  "key37": "5scFUHkQkTPQH3uXoPiVmsS5aetQvXhGK2GgThPT3BuBbXtpTx4CAEsBwTURDrDnLahfzVZbqGwwVEAdMZVfFf8r",
  "key38": "4mRUW5LzJ9TfB1x3J6o6r5FhHEKzDhZPvMrx4CpWr4r6vsTyEbEVk5a2KoRVC5DnSL8E7hwwgKsZsaRaPQLkJtRF",
  "key39": "2t1ypsvgGC4idzJwkwF9H49QaLRVVgF1xazUmVmFEQjNkp2WsyGXvvfJ3Ff3sZMFcMrmBCtmam8L3m4iTEazmYWp",
  "key40": "4XzpXh7JCQsq8eX9TVJ36S5G2oVtSuZBp9d5NCwbHmNBCRZKU1UXrB4hEnD72zSXGiSXqo6rpbFkPdbxtUe3cru2",
  "key41": "5wh6UZ9e5eQ8sxYusfUViYdZYx3nqma1o7zQn3z8RmgoHP9en19ra5ALqFgut5a9gX5mgTYUmqzKrSDyxgugNePY",
  "key42": "4HqwpNCZNHjvAkARwpeeyVFyHJQ49Q8riciHt8JHxDAEDLRpTYhTZEZo9sCL11vXPUKVBM33GG9XynE2E9nhEZ7V",
  "key43": "5Z66ZMamPkBV51YGkRtDXdhuPcT1fXf7PHbKt9hpjaFiAtyQqGxtv6eoXLTnLhxTvaUPYUCoVJD1hbDFvJe7rmFB",
  "key44": "3khS6vG21m7tM4eabbRxS9tEGAbDAYDMnCTjouoV5tRyXo2xftSLipxrZK5mugbRDvuqXEQRAzMxj49weUjw827p",
  "key45": "37f3T8nva8ti8XxDAjACgnoGH2HAR8xjUwFwHeiQ7wiXo7vy86VwA4eiV1pikwvbRLpoFLqf1mypCs4eehYyywzY",
  "key46": "3JvmT9BrxXg8efah2s9VWpCNuhVkXA6Cu5QxmW2Efy6L8WNUDZVmvemaU847cNbRFtSFTB65QMLkbsrQKy5EZUAY",
  "key47": "5uMuEMxhWzSyrb1vcWtnTmT1h8nmmCFuPUMpFErApg2msYE4QqpuBP7YVZHt93KVYat2UbdtqrysP3WTXaQLAsyz"
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
