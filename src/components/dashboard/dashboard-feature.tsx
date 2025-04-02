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
    "LZJU7dTFwVHJreBP6VYZhGSdp9qJyxrtkpFsV4FTcXmp9ihzG7kg7hJfauN8e21jkM8cA3HiWB3DnCvvrV4GnSH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v7J9kcaYGpPT8YEsnN3sWxmjAFMgMRSggw37yRnPsATVXrhZmQWAAuf4BLb4cjhscGD5v1pTuBucsrGRB3MYeHq",
  "key1": "4RqC6wu7gfmxGG4usKZzWz5JiZGzHUoQmTQNEbeV2zdbh1h3oRbVUzzfLUuEE9YFnY3oycmjqkfWQ1chU3EWV1qo",
  "key2": "2ttPfrtMXytuBabDs1iJELkoa7mJF1cyyiUu6d5wXr4er7WFru91P2DMoukB8D5Q9Lye7hZc6gzV4SSExC3myEpT",
  "key3": "2mNTd9TW84sQ5zuDfsuWxqtWowj9UVjhQgHCfGaLQb2CdC92owwDD5UWnDu24vsNjiomBeaiWwG9U61LEt8bzu8K",
  "key4": "5FekKMtisXDq44kKW9Zxp8McqU3VRwoGkkEy8yW17Faxad6t53znumzPrRSnherz1A44rNpX7ZGvZ69mcd1yFpDs",
  "key5": "jhDLhhNgWvLsnDHrq7bjbXwE57hqpEj3KXoR7pCUuf848TQeqhy2VhQFxzfUPmfj5ATri8ATWh66n4a62KudnTX",
  "key6": "4wbaCedNuQEbfDaCPX5AMyg2omh5azp8qYJ9Ecu2hXzz4ufuRShqWpQLaNJNcYA66c2kqwWZDZ2XqLYq1armcx4J",
  "key7": "2tT1eoCoREEf9qpz7Gy6tDEqQt9jRR8b2YVhhTq3xaZa35tfSKa9t3Nku1eNDsLJMp4BodMVkGFs16SUUvW6kjsR",
  "key8": "2Ero8iybtsQ4VzwTVB4rTA3QBNsknvh1AWsLh3j1BMZVKpdxvm9eCraLzPETxFXQ3qxGd2yiszQ3Lg33VrLYdYGz",
  "key9": "3qsKf1Xg97TWiNbYoWxtfiAu78Vc8yXEvPDxWrjoofnmXmiW5xY8taNtcnVXYJJr37JGuLnXLfZyzR6SrnTKUwDJ",
  "key10": "4FBzS7hX7C4aKnFWTT1Rp9TYJruHRXXsRMjv1uoQoCeR3k8vUHzRwKty8v3Jboyw5Jw1Tt8pGjmm1tkF1bxjmrhW",
  "key11": "3s1NUU9sPqqeMRU3vf8dxWMBDt2MgHM9g6ZNGGWbtpYwkBGzRa7A5PRK861KUDcXim64YN3J2rQMdy7TxshSNuex",
  "key12": "5YGsArRJdRdNYN4oBcPgPdiDkhVxxLudMMC1o3CWJeuj7gydCXtMuyyEUk5eLddKu8GEoMuTeSGJqxP3mq7Kuc3r",
  "key13": "2iki8MQdBYEeM8n9H78qR2wnSxhd1RAnsbQRVcYribAXv1pSgtkeNezFpJU7Ff2S75atshKvZeTAUwmpatmc6aZf",
  "key14": "4DdpWNFLK8ytnAD27fQKXgSMSfEkCrViDQ6t1j85xTWVDyx3qxiqDtdr8mTenjJFQkGAYKbCxz5EatPfKs7ffzuf",
  "key15": "4DruVMcAJtvkJwzgpNTDFgpw4PT1RHnSVD314f9m7N5ktqHpznDTUtXu9cBKo2ZhF26jhDBMPqoEh1jjcMg8DoEE",
  "key16": "3PHEXJWEdyVhKtBfkJWxGdD2UfgbNrjtsi3Hf13qoE1xt5qv5TGneJJaTGuSbbsRTf5UoqKM8MscC1L8HLvU5cBU",
  "key17": "5fMRVcXARhWsBP9QquEppoepEuVST4otXiTyL9LKGZFUjTQT6ivbRphXb5oZrn2DwspRyhq7QX9wjUXwsWrnPdRb",
  "key18": "3kDc5jt9vkT4gEU4vDkYH2SNDgMHbG1yRdBRAgDgiDmh9vRmux1Nc6rc6TRxjArtv4jQNR8ZFYz76VDpVbMk2Qrp",
  "key19": "wfo4aYTHFyBFaTDRTu4AAvCizm8ZAZ8Uky7DHDXtzWWjRgm97y5jXCmBHfQroDbu3e6jKo9toLPEWouLUHjNccn",
  "key20": "4XuujYEsBEvSFHQ2GLyT7FXzReZTRqLijXyLUoWrAjj5LdPpPub8Hq8od33oXv2CNDF51gr5u9oBkD6aNtV7Tiko",
  "key21": "fTcAHyrWgo5pVUN21cENU9PrEGdwsj7Ugr6RxVXtqNveXqmZ7zuCt8B9S9rQuitR2xwVy5YeUMFiuYSxdBGm29p",
  "key22": "4Sru3hCirmAaFFCUUGC6a4FMRoBX2xBaHLxDoDtRHgw5v5MYseaAbUSUfHGbGotNoN6KwVoMPMGgu6hyMvsbKz43",
  "key23": "4wXkDX3hEU8dJpfuKKHVVXPGbuBnWz359229kG5qUZCzPNVHVSUrHmEFmM54oxkZFQveDb2XbKLTHoDN2fmNBwQC",
  "key24": "596LMLN5MGMLVbrfpMJ1fNguL62a3yPTfBw8M6pYqshzUKQw8nn3KcDmXEVLUcTLxrrGbJFiyc6vgh1X3utFddMn",
  "key25": "zmVqXe86E24C8G693ooKBGaJtQtxH2FN7s98nygWPcE8ZJktoozdqmwrHbcCW6Ro1R7z9g7FRDeVrJAXiGXMAgH",
  "key26": "2Gos7eixNikCXaULTRtT8b4CxXQoSVBFkqKxmV7HsoJngKPnRfHmYHf19cgvRxsquofRfJkiMfx6y9oXmc6j1yTG",
  "key27": "231eorH16Pk7pXdP9nmDt8oYNCJ5G4RhKQkYp2o93gzMZdohvQj9gJpePqcUWEXHU246gJ583NTUfziVEpWEznav",
  "key28": "65RfiNa3td3zC51uBUFsYUH9FzJKicPFdqWCAcSCjKY1FzpJowJ5c6tyfmEa7cvqRu7dKbwwH7wNcvtcKeD384YD",
  "key29": "3FmZJb62Ks42hbzHCbHSB41pvSXUnsDS9EMRDvj52Eewz4KJF5LCi1MwC5wUwRNU24BZw1KvBwjVBsAaScsnYKdZ",
  "key30": "4zqzgFXVYwgLQW8HnproZ1urKdbFZiQyS9oGmsFT7UYmXN7sAsmrexd5a5wn5nC6sFByQaKs6TmfdUeLgWQnPzAY",
  "key31": "5zJyZYH3wUMef7WAxRB4bNQUULurkou6tiHXdvuRRhHUPfL1s1Zwkhokj4Rv89Rifk1UcxFJis3r37xhTiJuzcMX",
  "key32": "QjLRXxg8wJggCFffb6iFQsSDPtSKZeXAvDRUYtySiKV81m75ix7hVA3z5kZiVcjTbCef59FVGLi7cQwmAGzQgpW",
  "key33": "5D39LWujh1AUeUbLgdCRTYY6QupETGwCowKuZpSHNmLn5pMtPYChAs9hRxgJffCLCoVJh1mxda1n8nwwR5255W5a",
  "key34": "3YUvH2L6XzHS2kjWpZYRQyvj38m6qee9ENg7K6U5LdE83ushCV49gMq7oSba94zyeF7VJ4dUG6iUTV8JuxCxsJ7F",
  "key35": "4HtSWpKtqmkeTWmnc89Cd9UNE4NUCks8e1iNQ524SkfLKxJqdV8V9wPSGABWHepsCHzW4ijUayTshTPDBss5xQvq"
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
