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
    "5H18P4peJerqUdJh7ogFCchsVaPnfBMSdwByuBCHavghP6XdEmiKKjTkRrt3ce86dQUrpJzQiqJ3nEQrKw4eEQ2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vVxMvcAgpK4vkXtSmx9e2gcK48sYHCfThQnTFtsKjw5AcQmbUhhHgyMFLmwrx7bZXtZENcjWXckGqz7tAE3ahta",
  "key1": "4B3eaSrSrNr5rtpDXGjUYn7fq2BrovWbxEWX19gU7pwV1NzJbRiVtjWVYZ9F5RSux5AJ1audNeQjDqJhQiP6gzkJ",
  "key2": "5LGg4NAAiwtEyqwEafGeAtDhdouHQCqsBvo7NjPyrgn294LwboEZc8LpWtgentQg88CiPzAwUi9AVNfryRHx3wjj",
  "key3": "6yzF6YQrn9yZtx6UG96tcHqDLf1PeQ7jPyokgyCSagzRdmfTUQuibswBZtrba5EvLQ2tPAyWAwiwfjdgK6jYbTh",
  "key4": "U4hdGZVP4UEQ71rHytHRBH8d8MGH3t1siwRNSy41kwcJgSrfthT8g6NqcWSWgWJPhhwc5Y1pSjPY5EFSedmvMDK",
  "key5": "2FNJnC3yqDe763kyvEengWicS2pHNvisowfR5mxWjYXw2UxPWTABKxuTEoHmv42TjD62wiDQB5HFRC5wCn2a75gZ",
  "key6": "5QHu1sTxqJp2ndE2SqQpdvoTbQxgtC5E7vYfZFSsYpEWCCX55jtfBxmtVbwTJmTMTXJfExgMZSwa1YXXQUEG7v6p",
  "key7": "23gMpeF1osqNRhaFk12XXpMo2fbNbvCDdNC6DXiHKdLUou7tRsDij2vv7MUxX5sKaJLNHu7PPRSF8hRvot81hWft",
  "key8": "5WtPRD1nJyr6U3EX83MxkMVKnggwWpu6ciWxRA13uHmtbm6eHrkw3tf7aEpVML8EhGug5o87oFgvQGVMCHekxCfU",
  "key9": "2LyBW1CWLn179wE8qpeFz8vmxacTyWAk9i7YUgZb5pDtPVWfDP2hWEhtLTRVfmPWyWfMLK1bYVLZqt4sdCJzVTmh",
  "key10": "4HZnS1bVhAmEkj4mrggwFdQ3qQ76ow2BdQzaJAiy1WYzcPfYBFTq2VHprPbh3wmJgtNiC6b5V1E9ZqgTmb2pHY1",
  "key11": "zGK6Ved8e8Byj1EYSXFeNQ2DxNFeRkieczrMytpg1sR8mfv1UCHD4CjFxugujkDn2puJf6r7AFbbSpw71rR1MG4",
  "key12": "2jmD6GiZbsE8b2WLa5Q1RzBj1413zjpjJDSAkSQT47dtoN9ittFTAy3TYeSbk8c3v8Bt6s6aMEreaY2ntQ2JnEGJ",
  "key13": "4QikveCcRKPqqSNUsNGqiJEyvYvsP26shz7sFYSfMqxPDSAGV5mGbbxgjJJ6TjGGxXANw5LWeyXTP5GR19Vt1eat",
  "key14": "3Gfp8GVimv5Mw4u247igRb7hsuh6o8gJw2tb7Cc43GgBSYXYmNMo922vKL7aWGDXWuT6gCHF61sAFyDxrESER3YU",
  "key15": "281aTHtVb3GprkdWgG7iNwyhCF1eWHdQFd3qfTA5iDekuBMTz26m4ALkfWk2GHeWzrL7pkXiqnSask4BmGg6Cfmk",
  "key16": "618hbxvvkqHwB1458FyJnfF2fTQmWXj72T7HRWwBZSPnMgMkUN8wqqmVeVjUw69vhv2BUAq3L6BhLBuqJAyDrpBb",
  "key17": "tUFDkSAGL4wZ3p3kAV33Qo7orzri6r1Hzc9ugbLaAyRM84ycUvoy5giGyNG46NXprfUP6fH2N1JWw59DFjkKiDS",
  "key18": "3zWW2B3AYN4uEK8FL2YoUtGwiFQzGUE4ncPy58C1RstNxaAS9qaUwnRaBYkLSCFrso5Mn7iSM5BRREazrq7xujWZ",
  "key19": "3z4AWyGvUbErEqgRev34ujaYjBRwi1HtQNhm2M7tN1bdThsXQCYW1XZTPfdHxmJkAhAzmZAVWM7rTUxziJQ1QJXv",
  "key20": "uePsM3wS4HSjVHam4FnyWRnNZiaJp2Au8rzWgAQkwmq2MfNuWRGsgDknKFBD1imUYHkk6u8hTQFn38rFPX83GdM",
  "key21": "41LkH2wcxu61ayRMN4XvxDPArsLWA5uJGLKwDZewmUAmBbA5MrU4xWGdUfnt3rb1iXt3Uk2qiws38JfffkKWKfRq",
  "key22": "53DB9F5ZyPQxuHQoLLuAkXmfoXgG1rkfPaeHDce5NrUjKK67puFGfaVMUwdw8zDzTGsWZ3zkNkzwH2DXggu5FTYx",
  "key23": "64n3ZjE3LMkhGrurAX9ZUqLKt4JBWXGjpvvAFZrEWxRpXnLdPKoVDEqnBdXzaT7JPPmFcaQh4B6vMohqNWvuNtpm",
  "key24": "EqJznuLBAAxQmCoC66PBGy5x21W2fepVFmHiNqvK1tAyXEanzrb7qfpcuzRhytMRS1fit8U1X93bJ8Dr4RvHMhF",
  "key25": "5Me5XbyasNKvyFLvstskiJ9r7iKAkoj3hgrp2iVQtuAeMmptz1Up29mwjpxkUSUoQXFpxoDAFJaRMx1LTKweWpcZ",
  "key26": "2YVEKgkvR6Q5XqbXCcd1jrAHCXSxnxxZrEMxhiST7AtD1WbXwHqfVQkQVpJgJaF38XeixNcS4eZaN6Fqq3BFk2xX",
  "key27": "252C4P8TtAjqjbVc2qNo36VDkcmWrq41a8QWH8m3rpEodcC1veV9RhengFUH6JLnmWyideHx8jVtKLDf6jfi5ema",
  "key28": "xFerYHZk5N21Lbt6FUm74sFTvAKxtJbJSaKy1dbeth2gsDSMUeG5aptQixiEWVztee4JdHtLS9PDohdbRtbBN6g",
  "key29": "5STRP1NwqXoRthy44TGCpzXA9nTzucino5tSMa2e5Sw7fCQGgDTjt3zyzDNAoD4uLFYyAkfge2T8n2cc8YBRoNJq",
  "key30": "2vNGSQi1iVpocnHBw2LMCDwmPEXz7xbDFWoJT6aqwXq3XPwGXiHfou12iH9rcBTjhZuF8aACDpPqbHC7As6jSgFx",
  "key31": "UDow85vAT4JWH7GZZDNrjfBYLuc61MhQ1Y762xFa4pM1Kqvayyx59rdFnybxqCPcUVAAW63qQeULteh51CXuyVZ",
  "key32": "5MrMfoaQ3E5MQWK4g7YVkGx58kEa8LgQqontDxFHGnaH5tCvwqHQuKVVCygtne8z6Hqv1ERwAbJ9Mb2DEe4ejccs",
  "key33": "2FgmeC3kqhna1FbKxsSJndMtz1pr4wmbjaNPwjx2obwdKre485ELf8idPm9vxzXUpsS4KcRE2yiV3MQ8xKBQeYJx",
  "key34": "5DpZvwC8UVPsYNnVV1jtcgknEs3crou1JRzWudKsa1ZGbBquFF2xZyJ8qmkA4vFimojVW7JTpaBNMSnh5b95Yffj",
  "key35": "3EnJiZLQmqE1z8baYtXHFAsfQnUQG67kNBNtZpQgCsH1zfS6Q2EcYaYvCBZ2zsHwwPZfAY9wmxivCxodzmiriw1a",
  "key36": "2uY8Ahwjxe1ggkPwM5t6oWFRacVYPDVQnNdLez3oWaBTJM27V4uSU19mC5b8Yw5TiUEhLwFv7V1SybyKV4dLaqpw",
  "key37": "56JaJ7MHaq64DoxVkqNaZ5qp9o8LjGB2aAik8QHcskrj8AjSpgcmh54hqQ18tk6bVchxhbFC1ANXpt5w5LRfuTJF",
  "key38": "2mQsKSAonmUFixNtyibPZE4CJ1mV7RPNA435225YysNwAvZfdQdxYm5aXWALdz8Crj6sihdfJUXbXxreh7L9QBUt",
  "key39": "3qngu3JUmGLnBm1Fy4TJfP8idx9Ehw4FQypiVUHYPiE48XbpZGJp1uEGFA8ZXnrQ2B2Sz8RMrFcZKVko7xDGPhZo",
  "key40": "4AwaqtpEHSYqBE4ghbzHP55MgjsJ9EbSbSGgMtK3Hqa4ZV89w2tEAjTYiCtE19eGuB2jPVuDQ8xxVLSftRxfCTpA",
  "key41": "4QfpKSFFh2uRu3z8VUqvr5jupmYNzDo1ZNoW6Kd7W6xkomULUcp6aCyeyL6qwaSpp2w7eGGzU7jPaQdkaNiv5wqU",
  "key42": "4rBaTRzTF57wLwAiCVgpVbeg8Bk6VSBH6Vdc23urampLPJiNyFqDBJXe12sKkCkZgafNuUeGjPDG4xE6LDy6ycYV",
  "key43": "2HPHHpQfVZbwyfKLgRYGmTu9YAMabmuLXmB5nrVivhQzJECdMqeYBcjyboaXmkh8DJCk1YWKeSJmAXRm5B5HiPkx",
  "key44": "3BBZpwmeU4og13FQ72ZFTXatbWavtdDwKitdVubwvhB6iMPv8RB57dTChpzPW1bgb5mBDfxJ8DTaaGF3Hic9Rhj4",
  "key45": "4BauPQW9HTTYrXKs8JgDwwG6ag4RD6nPAeoDhUUdRMm7v5nGGJjUHqE7bGVJERs1ayksfHRgQQsEDhjzUAkjGpvw"
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
