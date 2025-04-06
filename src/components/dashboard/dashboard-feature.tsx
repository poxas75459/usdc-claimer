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
    "rFipJZXRpWAUtJUGMJSBMHjS5s5HvPFfPJbNwCXiy4eWvBj74WLLGxHA3zRHehYeKmFYwyCcmrRC9nYBw8w7ZFc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6mnBqJKnjPjdT2RCZWTVJYgU4eTurhTLdT5MYrHLNNRrYb7F46GnEizZcy3ojep76XZNgDhSQdE6raNaVRjmhkP",
  "key1": "3ToRsSdVmNEAqJd5byLCrRjXqoKTs5wVvbMQV9CoDQGsGoemWmeFNUsYosdLfxDs4ENwFG6dgJKRaigzxTqKsxpR",
  "key2": "5xfw6TXBGFfVuRTmgwPK2TA2LQAJzHPvH539nqupfRY6akjpu88GasN3ezjiB1pyTnCYv8cgPfeFkUVVjDao6oDW",
  "key3": "ZDgpJYgd7MXx1bsnfKcrdTWSVmhbaaEPcMZvE5sBjDvHwfm3MXgfjNutACQkudze1TkAFLN4JGFXC7RN27nimCP",
  "key4": "34g56qXmq1VGPzr6LA9KbCisqKQmP6Gpk91wLXbWs11HJwktnsFwtyVpiVj6JZpjony2koUw2UmEsnedEndfWnC",
  "key5": "EnAaztxLd5yZ1SKaR5ReCDramJFkYTzs8QEakaiGvp2dvzt2RryF8JZaiESchfumYfsKX1zzZAf7EZbPokHuavn",
  "key6": "3SJd9Typdrjgmg61A8YGGsCZAj1LkPhyEfV3JwKEgooVvEa89DvqW3NVqpoXBVagFpkBbM3k8vGBaJmBCpKyzFcX",
  "key7": "2YardnxFjMUwXSmt5z31vR9cwUUjq6fqgMwXhpNiXj9DeBkxN6Kpn9bEDkTCKMvFoQgfjDvADYdqqnFnU82VWuqw",
  "key8": "34fTwNRfV3mMUMxvoV16KVmrQJM3FYPoXMuPZBTZz2mXrQTchVUoghLaTpU1q6gXusrLQYwDQYj2qyPnpFYYkvLf",
  "key9": "723yG7AWywYAVcSZMrad8jMV1sijKCvmxVbJe6y1t1orHunMxpj51CQTSdRQZxd6DY28fXzBg2H6VLeNeLnWawZ",
  "key10": "2uuniHdCXgNQW448ryPSfk5yE3unMPxDzoGtTqFMbhrZFAy1meLTs6Z4EwTZ1gqrciq4G66o66RkJRzEFr3Y2TRa",
  "key11": "5TB1pUMHXJSKffvhzpWUmjXJT6HpHZM67XAD39xwyjPkY2gCVuYM8rL1CvEFwkuxCAkqmYrAhY5HJG9aguVJ1j3m",
  "key12": "3w4RC2TNoGru9fPayp2MAysf8zJNMKVbWcBqxe73Mq48DAqxmEKFNT5dPwtkkcPA2fJ7BTG3TogaKr5dHfmmm5nY",
  "key13": "5E9Mjr8WBMiwmUmrEoxKW4CVHUkWu1qkdwmexXVHTPKGUqQXkY4YtjHBdraZjtSMhjbpPkRKkRy9UfonTzwYEwnY",
  "key14": "Fe3W6NTm73pL4t9Zw7zCVw3xMocCnxTJuHjQxNtD2zUCMDctabRbPftBFXLgrN15Krp4gstgi9GJibshUfzpquv",
  "key15": "5T2nvQ8UGm4b2mHTfTVMbLfapQE5MptibvSnk3gAUKq3mUS6feLsxRLjsCZ2akTjpjpFSyxviZiZWqUREZNVUj3f",
  "key16": "2wCPzFUU5JPPdk898fF85g4Zsec8L2LkZ9eG1YCTXiSnh9PZZgCmRzQBdMRMiPF8vf5NECYbG2FX1rbp4B5BJNvm",
  "key17": "5gEQVrvMFKw61NunCFLEKGqMW816qrf2jJXgG1kLWiM5KKAhgooKpnAUsjG6c923qvsSGhDoezt89uiyG5do6xP3",
  "key18": "2d4k1Y7JSUbbxypDAZVPWJf4iefRB2iNE1bpsvjvxLMfq6HhbfaCmY4r6hkBAnY9oktuxnd3DBVp1WwrPXGbnuZg",
  "key19": "SdAzdmWqHv12yK5BwUzaJo4DCukuPJomj9JD7mHjusXs5N5K6JXhA9w1sVJRu6tgdceBYFrngy7s4h1JcXJMBW9",
  "key20": "2GfQTDA9SdRNy8HPEkuJQQWKh2966jM2kGfqjhwzJdJj1cNLitT1Bk974EDPjcWm5c8rrUxgH6SWU8wtfE7FQnrg",
  "key21": "5XvCtm2XR4DJmvw8SjMkQnY9gL45o4B8XuXAA617hCFxq4nXycfSCgpgAZzZ4NEg6eTaR9GqLz1AZVEehSyDAwYQ",
  "key22": "3nLWv67pS3csmHiKQukbdCMDHRSHEN3AgqjtARfiGdRGyrK4t56aV223wnu8ryYVVgPBHSw7mp9kLoemXF68Hszt",
  "key23": "jTMxHXV75wfNrpxgCKR5Fm8zeMrewKoZFm7fQzd2Kxvx14UraZZdvWbFxeat2cFudQMhQGQ52bXKeZk86X1CxfR",
  "key24": "kn6x87NLtir7YQUEhQpGQvyq8C38fnmLi4nzXq5sFCtdiVxxw4xZJMHFd5iLzXeWFB8eLJrzJDpaYUWVrXKxQoQ",
  "key25": "4kZHBfp75fSoSZjkHRr6GVU336Jwdn55LWiPw6BmXezDcQq9CDNP3Jjjtc7AoaaW45xRvRsZDAQqbGu2rXHCPgqj",
  "key26": "LQJ8DHpzX66bAn1nxmXtPqwq5YgXXzxHFwRT5AnL8nVBhsA1WiuWL7cpFL4pZzcuNd5JX1G452iFigu8qywfH61",
  "key27": "ktQjyokAKoTQeG8tyBD61kcvoh7PGDU1Qqp5Eeab2T4aQfUkJHuNWcaJg8Uos9b4gt3pR5zVA5uV46yjCMYPCkZ",
  "key28": "5VjajvKKsUYyBCicVrmP87LDRDHXKJkGYFGiNn4btBRwZY946REgGBsf4umEaktZjLuoMnQRvppDxh6v8jHSchDR",
  "key29": "4HbWEhJb5BDKGA9ZqAjqK9AdJjWJjGw8hVVMCdRK5TP5KGyvVNCHJmkvZrENBz9HSbXKYSTHQBFqohHagNmNgjbq",
  "key30": "fRJRsDzw7Gwya3hvHiwGXjv1Ns6LHFXiR9iXhdQYwWtcncmT9RWbGt7HwHxA4vZZ3hQVyfEXUPTZvapgRchkQwg",
  "key31": "31ZiLcDfKn53GkLp93yFRYFarZsYpFYW7DD2e5xELi83a5ZDjVHtS4txB7GQnzXWWsSbidY69idaaDXFthcjwPdx",
  "key32": "5BRq6k7h3oUjvhyqYJfYDujRxvtxQDjnFxCUTejb1tHZEtT3Vw3k8STtfT6aLcDC2cVRKTmypaphwseLSTxBdA7K",
  "key33": "2R3hiM6DcKU6uXP4puVmdmss2tiGWEhhAoqyeNoGPS44McbywGSVLzaGKyK5nrAuBzSCJRP3BG2sQW99BuuCCMCh",
  "key34": "38PxJkxvH26t5FZmHmRWmRSUQhH9zDLDFucwa83HWA5z8oQWLpzyRYpYHDDuWZ5AThV8yJAQrZDDDvdWWAsDtok8",
  "key35": "4SetwMb2MceSD3vuxJo5n7JWbCVaXP21tMLd5QS95QgttaNM1YaR1BKwzxtkJVHnxZdBbBSV4n7iKCRcuGzQeF3b",
  "key36": "5SubPtkjM9aeD3PCcKqxNwTqyGHRe9YNEbn2FYeF5jehAJZ2gTC7idizXew7XBrBtcXzddEsG2Ecw4e9Dh1uKSuh",
  "key37": "4QnKNL6ndoBUC6ujWu3y6frzPG6fMXTSpQL39sqAZJCiqofprqdhF2VgNveT9khcYC8qgqdfmcFJo1ftDn8vejvV",
  "key38": "5V3nKeC82A6S15jxXVQhNsnD9B8ZamFuWRhA1Gz1n9SMXH6BLNEB7CEoqr17qypDYq9LZchkKRvtKRzdxoYXGNK3",
  "key39": "4xRqayWLcDr4z4BNWUZYTb2prXdY5a29e14rsAnGryrUS1qovZ5LrmgC2qhAu5TvMnHW4fUfGKhkUdyVVUBFJVfY",
  "key40": "3snni4J9voeee37MkySfqEnhxZ2xQSGVAtZYcMKXJSGGvSbQ5ZzyxEcHG9oPyLjNdWTJDEb2uptoQ74KzVt8SG6d",
  "key41": "5g2eHDAKwidbVATD8qqc4JnPuBoHfd1AQwY2JqUQBjMwZ163Td5EvYpApgkqL9qKiJswMjZbKKUoKL1X55Z3pj6n"
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
