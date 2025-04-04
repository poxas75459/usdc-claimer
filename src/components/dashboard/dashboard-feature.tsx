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
    "3nyTRBm27HpBfmqXLBuwPSRsuYpXFQ5iHmyPqTKy6Bx8yxxC6G3queoSUVoRvDYS1HUHYd7UXogtNqiwwQujEi7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43AGUYoMCvVKadWFCuRbU1TVHPjcQJimPZFNDm6Jh51ULDFdBsLek4veAeA6WEooji928kYPxCn1qofeWt7KeFRw",
  "key1": "38vUbZZFN2GrM9S6AbDZHWrs8ugc78p6z6qqMrGfJjSTmuJZR5bzt75FQkM2GswZVkodhqkvXwnnh9wq13W7FBPE",
  "key2": "4qkz97ZwqRqwyN4ZGxAUPpv4uqud8auVzpPnDL5Wwmm1PZmWrFKVjmq6cvomNw3z5mjM6PFxhZsasPL9GNNMhLUn",
  "key3": "27uzxjBXZLDnFtGLWF2Nv19uwfSt52fzATTE2dQ2K8qDPyEWqTWgz32sFb5qU2XDdxY5WwMoYzFTxhvnh8sLkNmX",
  "key4": "4dPthbDQ5L3ZJLvC1zF1CxLri7i7fwFoUHx9Hhr2PvM899KwyoJqnQudppk35jhuyAmSdijU1R4mduGQBSJmrwo5",
  "key5": "5mcZZWWA1vgNbU5tRU1qDxkpZzPd6J4u9JgBDBSxi5QE9V7uEFETxi95EBVnLE3V5NxUnsFZYkgYXVtzTjWiAiqc",
  "key6": "3f5nRDyeV8LFvozAH2b2eNUGUykMNZGBgmvJ3jM4PUcLwYkHQxMfVgHMDpQ8RKkBmxErMnKw9L4P6zErhFYfycJe",
  "key7": "5sVpi93nXrLw7jqh1Y18JBhyxPfJCc9x8SC4babXf2KaaYqeEiHnrsmpGAAxLk2tmjNb9vG5xtPp5yKDXUiXpRf6",
  "key8": "eTHSpUu9BEC22NBpw8Ce4cXYTC95YpndRnQmTxEfFyiQzx8DZm4SpU94WkbwFiG72HwQ3AwzM3qKW5YeKP2Ms1p",
  "key9": "4oK5yETT9N8EMUbqRJroTdooqzBvsZUv5HegoD1yYp2L55VRau9rZ6t6BPYedzCXcBLbtgBC7TCQFfcmaCWgVwSk",
  "key10": "55eBFQsbuagHuMqHSfjXonrLBLNk661BRbqQPgRjBvUrrvEfSQXqqHikUNF2WVZYtp4trXhs9btQPGSovkConL1A",
  "key11": "LdrrvwArk7Qd9yQtsmUzWHdiWWQTaQByfgQcPyyp76ayrNvpvf99KPCctH9nLixjuFsddqEuXpqmMN2FYJkigLN",
  "key12": "65U6LwVqQPeUFUcRHE4oTyZnmjrX3Yyc1D29URSheDaXPwd7AFhmzvSVbt7K44Zr293M6pUfq8nZkyERv5FQHmYY",
  "key13": "jpkuKZTytR8o6a7XLQ3CwBogpLrWqTo971YqqG33bZarbeJ9AEKQDNzMBsFhZgJkyTEYqkw6UDALwNMgZCG3pjg",
  "key14": "ucPeM6xh3SSDmggjpt9XXxdBuQjXEjztKjKegEiSS2fJ6cYFsrr8SvNK1cBDs9BUK4gR99VKmtgQMdgrKmCm9iG",
  "key15": "LcXcdkXVG7TJWjoVQTzzVCQb18iZVMyLqvYPFsjmsjYxkDHqfSuGFH8khNRUSTiX8WpMrG7G8hXMbPzkMqRf5Vs",
  "key16": "3sJoCwByZPg4VJXvc3FPHSpBcRTmfmBT2SDmp45BdThwQJeX3LNwqc5MqpqKBpYtqp2eogW3X1EAScu16NP24dQc",
  "key17": "64kmMP9VQS7j2zJZYfC7LHdY4zBVdMdsVR7hJCNCWHyoQ49msoGM6WaRJHp8Q6iCixnjVc3kCR6cr87i1QG6VwUm",
  "key18": "3H8YGjBzev9oJ67vJWnfbBSzk4XKwYqFrC31RjGRYEJFf35RqdocUpJXgkYdPtGrHitiLeddxmV5G8Wd7jxRbdv8",
  "key19": "ZMPoCMXQYWJF789qMYivUvs8fTYD9dNfBc9hGUNy3YpsGTd5jXvKGZCk9N5jE1VwDaFPvtVZc1bFajEe1HYqfhh",
  "key20": "2KqMJAVG79bHPDmrjUvrLYXmWrQxXMYF5WpXWhm1sUBiz3RtznVU2yKiVP9TYMjRKkPfcDKW4cCcwyCyuH7Yaibu",
  "key21": "394ZzBhstSLVqKnJvicaMLTGsNGiufnDajZd9Fn6jPXv5Z2PjMeLV4EKmyRxhggJj1J7u4HVerg2WnkA468hLJED",
  "key22": "5G7PbHdRVYASzWHfAumLXaxniBkbr1zvtzqktrPPsnSp3XMVsZe9KQsEMr1epvpC13PQzd1EPdS1cJ9LbiyMpVuS",
  "key23": "3hPS7VBde9dnmRgSEpeSUnqUx3CzAc1j3bH9zXicE3oqoggxRsGzUCmPL5c98vrMNbyj4RTskYnwW4EfYFRfXwFU",
  "key24": "4ZH9QiMnZs4t3ff6zfKRD3mpApQUySMC2wkFZ7V5vmiJqwfY2ysumHb4uWhuh19pSydyNPQEBKhestm9kArKY2do",
  "key25": "UZxSqVZv1gezb42Lh7zohuEQDrDyqvJzxvyzDhS2sLvQqDz6pt9zh2GqQ8bKqUXsH6v1rDXKrm2EU2BwNbADcYL",
  "key26": "46bgsJUqtK5L8bq94qnwqXPJvVjF7rhabHUgFXtZF63wSYxMtKPfJ4dhm3wgHs35WBwjARTbABMNPoTqCnupJX34",
  "key27": "5RbGTHRuBqCPMwptHWMYZ8zYMWLwQGLRkjhWXjTx4piLUPPUsn4dPM1v82HEXPqfqABmdeyW5TnpecUbZTSTvJXr",
  "key28": "3JDriQNKPeSntV9qxRN3xXAp7HZ37Nv4bxk9oEr3G1XyEPsF39Kgw2rjRkSAHaMXpvHWYGiyPN9wg6AykiUjLSoL"
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
