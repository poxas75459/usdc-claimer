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
    "3rqUvDqJaVBQtUmiGcY85CzWAV78FKShGT15Nn8zW69q4TUrvZZEsup7eMp8SdFBEh198x9nbiqHjKzDAHRZM3vN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31ZkmP1CWg7fMHKUmc7L6kbRwqY28SWAiNYbPjLgC1mRprUpCehp8ELRq2CAWk4MutVgbXfzkwFFa2edTaNgbDLy",
  "key1": "5Ko3d7vWwXSBh68xJ9ga3jBPwSk5cJVn4KeLGCq16X58bDxPnKxf9RRQPjMFz6NVgC99huXrryFShsCMVorHEBVv",
  "key2": "izoKRfxLcdmpZGJs6DbroyeeyHZMwj4j2BMgV3sNAmRykGXtqP3pvwx2wqDn8FSNkCabSFVU7fRe2mMGzcrqtB6",
  "key3": "5zrwVguNFprH5vDP4nvR5kn4oWY5hWXGbjmANtrvjidmVE1EaUGgYm2xCnWvzY9YqCJmi7HUZvPC6Zc9g48J14Di",
  "key4": "2FXSbbSKpBxBpC6qxzVxfGenJr8SxeKWNaK2NR3RJRqTUEyfALRiCoaCMbyAMzBjkW41Zc6WhHam2TynCfp8wkCb",
  "key5": "33UkYDTXoTN3MwfRStknMp5L3Ccvx772Pp5F1wqJAAXJdTotJ5TS6KuXNEuXo1PzkGuMpZwBkxsygNBvBaG4eHqh",
  "key6": "34oM5SVrfWFz8YAXsyYfQn3zcWrM3zdEhaAZzMXKYy3MgXKaJtDGJfDFWgJsxHGYEfwtEBmi4zxufwA6xAKfGZNJ",
  "key7": "4dGAXEJPvpKe7DA1ZNgWqaVSYzo8XJn8A8QaMcwyCCgaoocUCxhSDe9LnBxXsEJ3TfrpJThHWeRtDr3N7RBozYQ8",
  "key8": "3PEt1ksD8d4yAXJ1Z3fBwdQYCYPKKtBCH9LF53reotXGKT8HCZaz9iMTasJEaqX5bPa6X3Ppn1oSGfKLHUXqbmgb",
  "key9": "3YF9U77t6V2Gh8SKJNAsJotECFF8xqG2VucPVvAghdVRJjcyr6NUMZ12xUz827tUER9H9t7LpZdZHFdcveDEFAmF",
  "key10": "ZZpN5eZXsVKXgSTaETYw2X7pThvYMFUTTzZD2tGpo9odheVgVS8S3xV1gxT4m1dwxrSitmeU4rym4UzNtAzVSuM",
  "key11": "hLPnXxHN2XQ9Vhe8AUG1uogpP3AkGhucVCfMX28kit5UNmFRejreSELoqDxxHdW4ZNuakdGpPEKYNzDu6AieRwW",
  "key12": "36AScPNiKuhXyS16byd4W9beRFRKio6vwAKbvTv56BXx2AYMPwvTyibMJ9d26MaJfYiL8swNi7GPX5RWmpbj4vR9",
  "key13": "2jSvqaUBYvVjQsVJWLMgjBGYHPSZiRGZ4SVLNmTvd9X3T9iFK3cnLAdXPcguY2ELe1dehTSymt5fEH8rhyQe5XG3",
  "key14": "383BsJ73F7BcukMuUZCnR2oStSHPs3CF9eEeWEVLo5TyRjMGhsmxpeCMmJZh4ySP5z6xb2DDQNzPEJvHdzkracYU",
  "key15": "5ix7caYHUtSop9rjHNsUfsWmnrtwYw6xAmh6d6HrStMgmQRptweKNaaS4CnDydD3gTeAikGZSp533w7zEnVKyxvH",
  "key16": "61UxaqSeZVHZpompmoZLe1qdzorNdmmAQ9AXBnGPpvjkbgHifdHQ7efzaS4eBkZFRcFKtuQvWPgRhSzfVnqSmwxX",
  "key17": "2TAym7fXoeTLHKzUcEv9Qd6vP8t4LSHQ3dJPTxD32PmqWCUHBHxWv4pZGURGDEz8yw4b45NySXYuE2JHHTy82Tjc",
  "key18": "3qc4C4VKghpp9QuS36GgzsvuGNATigtPdMBUZSKyaLBkxHZsT5XFasSCPcDTsqbMSj8QAvKgTYksjmHXSX89h8Fd",
  "key19": "3TPeQCvpSWD4US57aiej7po1ei82fg4UuBj3DSeoRjVWHXTmnQ7fSizjvhWtFyatNELfpMo4S9Zv4CDyHMQbiQSE",
  "key20": "3tazW9bwoA2BZPQk46g65ovdvzE5SAwjE5jURVZneHGmisoTGUYKedxjsEXeYBwUHfbsnopZwRpwTEP3Sb4xmF6K",
  "key21": "3YjtTAJ9R5ogbCzjaQw7mc7SZYAWbMLAi6c2xCTF3Kzv6HFXgj59YBxJWfrMc1p2ka9mDsqZK6KtHinErdSSqcis",
  "key22": "2dkaFST7K3supbnEgyyd73FKPhmZAjMnHrD4oL5xwXBp3WCEmYg6fBUuJV7cNMVmAgYpWNdrxqkuxsBgeTA48HLT",
  "key23": "4wuNJunf44Q87Mb79a6jYkHJmbBTLEHD3irC4eYLAZ1JTDmZgTWA6vt4cNkUAXrYxkXVpEF35EfU5mxoC3LvXQvy",
  "key24": "29ZndMQrcJXpAtdXGNau8nKfMwvSGJ3FUsTrntGLYs7nxwWxUFKGcsKv73qUQRD9QtUuhB3M5rULNH7c1c9RNVG1",
  "key25": "3En4SdHJUPBuaDCVEYAH5Zp5N36LT6ZkVxPkrSNN6s2LU6c5axemAiVAHpPnauPRidERLiTrRHZWFaVAKVaJdUeM",
  "key26": "4HYa9HXEkTT31EdByuUFmmWGWH9LvFNJqWgnz1ka4YB65bTTYe3JMoSJYgGnuQTWFNuNzVhrEyDiVYrVtQiFCVW5",
  "key27": "5sKgu1FzbRejDvNHEANUso8T4Z1DrT22XDv33fDTQ4fp5Sjk5xM3S5jL3EoivbL7PjhEHKoBjHfxpu37sEinjew1",
  "key28": "4sBFquTXudzMAemTwRPQ8yKC9jbgPCpeJGWzJTYcooQqFzCrBMKj9oHw4sGXwL2XbBwq3AXaeUWPzHUrtFA7aJJz",
  "key29": "3QgDRc8q7NLXW6KS16HVMiLZLD9FU1Myiji9LmHmN2PgzrpiSVW6NFrSfyPFavecSmcYAPpsk4pQaMGn8rHyTiJT",
  "key30": "487au9qGns3ZYCrh4fLc9ux1qRYiRrJrHfb3drYggvaCyx1urxHrFWwSAPgDgGQHu16QENS5ovgHaELKytHKtqVc",
  "key31": "568dZTLU6kh3arBCtXskLYKCwMZRMR7jtXJBaXDr4BbzMJQixJ8GDdp8qPhkk1Sh4Q3AoEcBB58tuusSbaodRphy"
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
