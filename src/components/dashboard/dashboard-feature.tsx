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
    "5ojGVSkCiQ5P4e4ZtDDQGsZjjsLeub7hhswZZc4xPyuSuRLAbwjDk7QywWANoRZydpqovmK9ryTUogNVnrBhcVFW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SQ4hyTsAjUq7cGM1Tx45tj7dy1HCsqsLCHNqQrXCdEhR5hWqFZGKS2EYxE2NhiYAvoTYTsR43i2aVxqp6sgLagL",
  "key1": "2gvcNvTg7TpWqSy17jXexvDQt1RSkVWsBNkEJ3ncpbU94Ky2aoDNawnVXvAQ4QkJVuQ8epzdiBMy2AqtWuJ7qixk",
  "key2": "5KbXsPzVPodtR7NvGvaGPfgJzUPYvcDVBgHM3FF2GvDpSYtjafQW6UkdQPry5foYjutcJDDEzHgp6qssExE4rFL",
  "key3": "3saVz3otvxtcL8VNT34mm2uAx5EpUetr18uYYYTu3Grry1Tu2WwqMjzCjtdXJ44yBkjTUmFptTp65oQkmzpX5fGZ",
  "key4": "3Jny58jLiwtRKW8E4a1dwhxBRqqEfpC1CZT52sVtyyHSpLSsc6daUbHFBp3gHMyBD53bPi8ZLc7LJpuHkethw4mb",
  "key5": "5qpnAABTaQdvaKRHmbyEod8Di1L4fmTA8FRrvzNFGZfbR77xguyEQyiM9ZrnMdiF5V9Wk57C4ossWAfdryr6eafp",
  "key6": "z4fR2CfSQ6baRHrhEAvBWfnzVC1fqaTZxJcGFwjow9MCTF5EEGKogpuraGcrg5qgnqwyGwTZ9FWPADeVmiGVukN",
  "key7": "2CwBMA62SkqHrSD46svSuDAn6jms9iin6MFZBnzUJfw2VNmJYw18BfPGk6qEGS7XALM8hWxLXoMUDhhEaPz9pxFQ",
  "key8": "5fPNFrfStkeeRAJJeiXUnjxcExeDVm99Q7WnWcwVtUEsxeGwygq9pNJB2jB8D4KS5igm7exKb3Hy86ghEScJoXXF",
  "key9": "5iDdKBhBNctUazkjNWxpTWsLuwNivhcLBvAZvRJueh6CuYVUSWS1oAQKxUWY332YK1caGUhwyQm8EUKzJ3tz4yZT",
  "key10": "5sELeMvm6Umcwh2eWVJjmDtcU7rMZ4PK3aRpoobhVo9vEzskZvwsRNWQEd2NkvYwZ61vkanzUvD2U1ns46RingKo",
  "key11": "iYgvMWaVbFNWSWm6HEeJ4TmFemhLVrgQ7v1nghYuAW3XqA3WdtQdvLPs3GnG4qXm2JXgaa8cG2Rqnbf1cDB64bM",
  "key12": "2NPgnC4msDU9sFgaENhWnemPBQFwnmtesfhZLJnKN8YQgDNVy3rUFoZL3eDdV3Hn1zpmLnJmEWY6CLvcgsU16RgC",
  "key13": "5VirB44Md3f98TD9BjFrUoQdjdR9zXFeBKSXjnGbsquGHVq2ioNSAxsuVqYXHaVPzUAXRJYX92PRk3QsTKYNr5ct",
  "key14": "444t8UyDev9hr48aSND4yM5KkpCX2Ni3AkxbGYyxVwiTo2hWRtf4tQvTCMwee5YrbWjH7SMpfo2TUixcPuZJcaiv",
  "key15": "2DquxhiYvAhek1zJXnqZ6SJR5DXZAfGiT4TU9nsxSNM5WUHcJW6zgCKwEYQPr7saxVF4hjSYrLyjZFeEKXSWnTMt",
  "key16": "HrMcGXZRsC1YJ2gwE3Hxrg5g6AswfhNbXs8PwzT7nWRVMhSvpeCvTFowR8C4srwNLYJRLHzgkqad8bN5CKSVPrv",
  "key17": "5YnAv3L8YdZVQvmcKPVp6n24QcLXNBRRejqVytk8CCGnwa34pthP6nF83ErSrVUVTtRuRBCUcr5ERsN1eUsgrbNm",
  "key18": "2G1FCeyUFmkhNg3YPE6dTC9PmbNyWFWzkc5K3oWF27C6gyaRKmRnCAtUGPAaa9y9KxXJfgXAmWb6BwYxepbxXpNe",
  "key19": "2MH28SUAKjjCYqVrRxjcattPccoi8wsJUanS1rGp1RpBixFUQxP8iRdVXtfRH26uXhU1DyVWQLPshpfBZwM1LJb5",
  "key20": "2TTsiB7AtvojQSHWDxWmJrYu6ZY2FhaQhxe4riz4NSLQhGfA5pEaLgs9sq6af2zV5mR7fzhJPBK3xNuKquFVA7ye",
  "key21": "3zxkRZtdDSkCPf55XxoncQZZEJXFJBRiC3uT3RoY8MTS1yxaT89G6uK8edwWJr9N1EvaRD7X7Ei65DriR9J4nGsU",
  "key22": "5bzkZxobYtxEGgJx1bx3GyiYuGMX92XuQwqaqJkcLNgELpqc2TqhRHgLoCG1DSCXnqSWvA8TMwZWaQWTJ2DV3WPB",
  "key23": "3U8FEmQB5o1MkHW9XccGrCxHL7UAYWocnrENnx3rkdNHWfvSk4bziH4cuvNQCKuUsT12AGu9ESN3vQCWRUPYk4PV",
  "key24": "FVroBsvq6Se82tM7ygZ9w16bnU1nooiiQ12fUJw48LQuhWVgtSBqVKdsUS18nNEqJACYvvHMAeewPg6ukj9otQ9",
  "key25": "4RPTNBq3zweCL2QU9oA9FX8Qse28zBAGAErwvZK472mbfe9uyUn2Tp9FHSLC2zzj4z1YZigbEBcehpkXD7GsqMuq",
  "key26": "tePytKLQQXFSgm5vwDe26R6d1uV9uXG9rWCrxY3frPf1ypxsQ64iwnKsmqQTAHx4zoFwAqrUn1AV58gm9tb6tk3",
  "key27": "wFQArpHkndVWJHKMTzvJupxcD7Yr82RqKht571C4S5rRMiL3YmCyyMEffoZa1XGXe4iWN9fGaZ7cdps8acoBdZj",
  "key28": "QZx4SoxhTWYkGFHEXZaBKYgMKNoDEEvzc3Rut6NEYNBaT7bdF2uoTU8LitkRa9Vg2g6HzZFwsXjbt4hH64DgPyi",
  "key29": "3motQLNo8cmK7RRtT76ba1EyCXABs359359kCZojZm44XvC19TJT5vnRjZ5Wy8fGt5XifsQ2bKjeRshdhVrDiH4s",
  "key30": "5h9GzV48JJcj6zk5WD4Bm3aR6CqDV2VRbiTNhMMMSKCi4qMfqH4CCkDKHHiqeoCmBa1Znepy9uGds4DdQhYCaW5k",
  "key31": "5XCLb2DVsQqb6jQ4WQU3QLkRS3TKUVYHiajLLctdQXhLz37SavtS1ThPLmyB2uDfDyVNMkFY4naNVBBQFSLsbRkj",
  "key32": "4UoFjBnXsH3w1U6FTJK99MLePUxbHyYpHsg1Bz9mZLLQP1MtegqyPvkyVU8mg6t7fHD6HdY9tLKNfzpzNKqG7Ldd",
  "key33": "jA3hMEw7KuEuk7jJ5oUzJXX2tVtTTMKHdDnC1sLT6Vh9FQUejnbHGDTKSFr1zxGBaozrxz9Qzz2EniFsCS9jpWV",
  "key34": "24dXGVaWVZ9BawBrSuvpHqRE6wtMS4wSyaetD4qP1SSmFVaXVseGTwArDRkKckHRSFqsgVRgqKj9FnMW9kZ8ruPR"
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
