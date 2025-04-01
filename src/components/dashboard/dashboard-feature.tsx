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
    "4SXCuj2J7N9MUCZbH8Ab3ceFHEWq4PFPxkZRY8ztmkQAdqYsV2cTosjRMMR6Fx7vCmxoRjdvWB5SBvPwtZqzUqKf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VegNHSsD8iFiCQi43Ak16TzQjyYqkAdjfkms5BvsVmju85osPpcoQR2bLsQbU6xBdR8Jnj4aQTVNJh1QN3s8txa",
  "key1": "34iRFCnKvQAWRiugba6mFZLBd9HWU4TLbMsiAA5svX3YNTRVzuUAhxsrLt4TRNMY4ZboAfGqYzkxgTc9oi1bcvmx",
  "key2": "5NEgGfujWEKZyjXHqM7JGU6jWNFCyFXB3qTDAp9opws6Z7ME5aCQ2N7MfsaEXgT6yySwkRGGRv6qGnrpU6LuyznQ",
  "key3": "4hAvXMq2g1qotrshCXmr8XttyJe4nadvQpZ8mvJkYEdDce8Pxs5Sq2kk8k5v6VYAwJdJ7WRgHqCrQzg2rLbrcGCM",
  "key4": "EMbemLbN6b5hpqHk128EgZ5HyCMpW8jW4jtf7PbZcvEAGQM1ocXTemiZYvtnHWiURNFXERGAAWHtJVbEg61hsum",
  "key5": "276mG5jmUUkxdy4nEGqmTuA5u7nwY3Tb1A2X2tKW8WodeENaFWwvH8GVAgPMvykpQnNHFCGfsfqUuUPZbAPedEkF",
  "key6": "3W9EV7EFuMHVpHv8MP4jSLcN1jVDMLmbbUJg6gHvdN55Xwr3Hd5YJb8dJN7QsFogv3VBrw55cxVcJYuNC2xgr1Tg",
  "key7": "4Qtn5KiGwz2jHbDXYrmbHW1CyL8wD3EatMtSPBjwQnbsWmG7e7umtufjoqHAP6FJf5GAvcnFE9uirETiboQ3f38J",
  "key8": "JjTbMiBEVL7SmyYCKPoTday15Kvnx3bKdKmwVCwUVcg3BgsgHURbMtQrWwNqepUYSsSZYK9JgUSxPeGtUAqANGL",
  "key9": "5auvoya1DpqPpNBAe7ny48hjnQbA97QoH1fE6nVLvva9orrdK88ENJuMUpHZTFYUbNq7xUUnYa6HLHTAtUzaUSCu",
  "key10": "59bPEsFkXxjTjKsWo2PnnHQXggtwFwhdyNETwEoqcZaQPwk6onBMfZDHAUc1GqpvM9MjZATyYUEVvepop3zSQNoV",
  "key11": "3P13mi4bzJyjakrqUwce5cgEMBvTNPZt8YoM38togtRm8kk7x1gwfXKN8GsiCdwDq1b5XMK5JkHvPsddLo81z9Lj",
  "key12": "4A5JeWapE9JiV3DhZq34DnoJqNzumhLopf6RuJ4cEixG2ZPDWCKXfh56KZMogmRiaJnvnRhnH5YoKayfsziu72ZB",
  "key13": "4Djq1vhU5i3y69DtCFZ2MzMyD5eZEesr72sH5Dkckdqt8VcNKCLgn9hUrZCzCapQE8b75pbJkKQTNkUtz4ubJBci",
  "key14": "br95iDHXgUYx99s5P8USZ4vnJivQyrZsJ4x4Ju5VkviXpM2cwayoApNPWgMZ6DWVEraQDK83wYZo8f55vzg9Qvn",
  "key15": "2aLXQBSCcLFw1RCwJyRT65sVoJpkVm2KNBig8zsyWKwVQLRKPGx3N1fqcdZtMpBhSbqDB56Yf7LrbNQdewuo8sdu",
  "key16": "3LdaazYExYQ1V2h1YqpVoo8LHUf8VtCXTCdBCMy9LtRDUf9vppGWpn4totSQCeDVYcSf82UxszYemfmQYfvLY2z9",
  "key17": "3zUmrGKN2SNCaG11ATz6fBkz1ZSfZZAHJ1jkLPdMwZYJCDWjpe4cho27g8GinURqugrjLdqjcRg5nKt1T2tdvSzH",
  "key18": "5Mgat67BqWfXXZcxQ3gKj7pLJCXiN9e3eB1M8wgMcMUzmsQEfbniM9xWs3j3SiKjdpoNggJgsU4PCaQsuaZAZ88m",
  "key19": "2Jr4hrmGhsiYM8mfw52z4BQd3RAcS3zUmvWxRGzPDAj9SacB8y7egagNDTTgK9PDZYZVpoEYks2Wmovv1ybLzfLy",
  "key20": "M5YPQg5prVSej8t99jgMRR4Uf6HRMiUEz4cAyTtj4eZGNyRE77oR8YE2sk1FBYJA2Q87uRXSYQFvEnExoyL7FhX",
  "key21": "4xDGwimxz6KGv8DXBvxt6cN38Cn1YaqQpXEEUUaimBFNecCU2Q4jaQbZrTDXg7bpBH6JRLCHhKMbLENRBL9P3h6e",
  "key22": "4fuHMAk5wz3aVwReUo7dEYUFuYEtgdKZ3VhSMhzrqqb1fh2wnyP1JKPGtJFNMkbiwtiPbuc8E7SQQXu5C5iKxUKJ",
  "key23": "ww4YMej24meRb8JHGoxytZkjdC26pjjPjGCFJJFEe6px5UEn4sPYoQt7tKMjQtwTjbzJdWTZs7dJ8aKLcKprSor",
  "key24": "bK8X8AXiQG8RvQ8b7Rd42F64xu1jksELmVPEe5fZsewAMTevYmeDhe95BxADUaFMEuwx9buZi97HeBfEyfZQz9R",
  "key25": "DCE7KXzjExoQGB57Q9X7BFunLavwqauTZJ84dpuvJ7Lm1HG3yYqfdfGJF1bpu7MAMjxe8VzjpYgh8w8N2UJYT9g",
  "key26": "3Ym4UhLHUorwjhGtAGsWhxuZigbLUkXi2mkqufEEmpwCmkiFgSHc9wsDDFqs1RUS7WNntWy7tkjgfSBmDq4xJYVJ",
  "key27": "3Y2giqraYofmEn85gMJSq57JRZx19WPLMtgHwF4dqfDXMAYwX2MqUprvwmtyLYAh3MW4RYR72RvU83ZJfEFnHodC",
  "key28": "468FDaA6RBaqUR9yRDnr1QuKxqkpnwKK9jrn2CtgpTvcbRq6kVa9dGm69T5vBj1qaWHPWXSvMnNcWhxuFS2bnk1K",
  "key29": "2Yaz4uKux6e7HNLi8h9yxMVHtz23G1zwMKx5gPdvDqcTVSud7S34undoV8ebMxo5zrmMYBRTqVjZXMz1UwiunywM",
  "key30": "23TrkVJvuFpVDdcJpna91Ppn5PMvcLs1HYRH5K1dmzJeSrGNgzy4diFT8pyXFu3syzYjiqh6KwJYYL6U8MhVLVHV",
  "key31": "4S2WV2MJyKGhDzmUyzCknaH5qC4GPgkyNz5LuCXzKWEELpVcYbRexv7xSUDuvpiqZVEZ8KzHbRPNwTsmHWH5bNJA",
  "key32": "66YW9RTKMY7Y8DsC5zfkTx2bt8BAbt8BeFoSujKQKjkZsTCMs2cZjxgf4VzvajuvA45cpVggw7eriramcGSLNeaV",
  "key33": "ne3vdg2fF8GfoGgQxscusevizEY4g72mrH3ff8PhPYb1LETT2h8B88bcn2Lfw9R6cBsQXWuW9HN8g3paS7S57SP",
  "key34": "46ZvrMaGRwc9pcUUZKK5XYbEuMQVDqGPkZLj8zP2JP1AwYkBw2Ptz1fM4YGr4D6hLmXexRJTQ3BQAVJ46RHZrZwJ",
  "key35": "54U8TX18J8CaSJyS6qiW1PVNbDHXKLpGDv5MdryRpsaCRotdzezpCsGTDrdeSvDWvRoTgk592DsPQ5aHpqvoLayo",
  "key36": "2XBLzi7r3HL2iNoenStpq9q2mQNF9HxiD51v5EktDx2oVzxzcegf39dwRChhnih34Ju5skbmkw8Qw55tspWAKLXL",
  "key37": "4wfFyzpVDmNp7RrNZqHebucNQYJhsjg6Y3rcYoAPb4hRvTUhdQoTnbRcsmRG624DrXWhgVSS3HzukqGsxb2LebTS",
  "key38": "29JB4gkD2gKgrRCnrhJTeWaFeHi2ZUJUBRTXXhs3EEMnGvRrxe5b4MtgyNbmhp4rAGhyMG7QXJHwyGg4iJ1iGen3",
  "key39": "3FLDyDYXNBcAQDdd6SdC1EJHAtGj8gNR125dHdSjqnCPSi32XieQBGYjGTRTswMpF9x6iQ8tRXmxnnU8kJMEGbPF",
  "key40": "2o236QHt9Ei95oobmEfyuK2KKFodxLS5QDCN5b43p6MUJGVRcsETETSM9u6bPwqYW11bmpJUqc7uqJRbJ9DNXY69",
  "key41": "23CvLKrtWdKN1xhSEWfF8nVhgbBqjuEmo8nLqs3HMhMUz7sj1LwDND5wL8Lgrve317vYUDhbwEmNGio4J7NYn4US",
  "key42": "4PcyMD2vYsiPirVKBpqydNzHT5zuvB4QVF7hGGht11Yo9hUjknMPFniU3494BKhrKGLGrN6gJzWnwbEqPcNkr1gc",
  "key43": "4m37r7V21sVXNk1Z4vYFwLrSU3ZZyHXjWKA3UxKMGKCrKeK6TcyE5b7ugtY6DJhhaSMMaTDvfn7DozTFRpow9mTV",
  "key44": "3zNMTwuGE4vJhZGSepHBkkELmhRBKcKxd7USvyDooCctZTQyink5n6gmSEn8araym9bSnMGbLy2QuC3cNiKcxXw5",
  "key45": "4R4rursPrhVduoL9c2D35rTqhWe7YFuGtTJSMf1VQYsonB4qA3k11MimxXR1NgcxA92rcmPjXnHtkLw6BXFbjwpF",
  "key46": "4EBNzrJ1J75QNwSj7iWrBLd4RrKKCpuzjNejx2y4ppadFRnAbu4Hq7Q84aRiy6pjg6o7i1ni744isLeetMgos738"
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
