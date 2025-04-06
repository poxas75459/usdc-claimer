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
    "ALTKhyYpy7dBxcfsF3hrKkxRiDgPG8EVGhivevhu5Tpu2HdvYf8XXM3grtEbeK6RTHQKkDipbVZEUBwPDDUvFnv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uYaHDXsPKyToKscx2DyCjS43TwLzEX2989TXyhUj1zxSDHd3J5n7rcHZ3yCdqBMRNcicHW1ZQWvCUD2JgJPku8y",
  "key1": "2Z2ZKg4qMY96KzsXRZ2AWYUBpn7HVpmLhjrj8Z6QbBNPrh8bZq7vtboZQfEd1TRc9943NwmJ8TcpvaUAD7idrYRY",
  "key2": "dzupTsmqHTy5Qv4Dp8tCXqzdkkLiEnPfpm69ezqnMZDFPKVBJUHJ4WpMJ3kEz6bXYMbzhn8GtYhxpkUzXJD2Vme",
  "key3": "43Vuye9Gc8qyV2BkAZtwf3JhMsGTxxemXNEeU2rvJetcwLxYbiLNWtH5axoxbVTZDmMme5ynkm2jr2ipTrG4dEy3",
  "key4": "5eg64jbK9TmMMUyoyzaC8QDv1duWBpu57AQfG8jaTuCb3TP1eNoAUtuxtVcvdysibpje1jR5D5MVgrkUeDdyb5r2",
  "key5": "4WJ92yJKMPFGe1K79PL6qLchrpwaLUWLcGv52zCotVNwvfDG6kyupEgVLttAcr3dhxX7vCWXf4eRUzfXkdjnHhde",
  "key6": "5czs1VQ3qRFbkEkStLH8DdEdoeqyuiCj9gwWa44SoA4BjCdYtEFPj4r2W9WrRGNxcYuPJfeVo5ttMY2mmQytdUAa",
  "key7": "3SVP6gZHVVX69NkKMZeWe3roPqQ9ZfZpbL1cAgeJ1Vr7gkjp5ryXyUfK9CoNW3Vn1YzJ2whgSndZPTR2UYMu3uXy",
  "key8": "4pHkTniqoFHc1ojTgdsqCqrCaKGi82G7EigiWeXoiueFzCyH7EDmPjkFzJ3uv8rANAYXLedtnKQugVzFu6njRP7f",
  "key9": "4oSmW4SDm1mm9E47GXTKzrsuRZqvuZ89pUGs6DxD3Y96mXsACMLejbjs4QTjBdNxzKuE2odRKQUussSHqAe2Umob",
  "key10": "3ePJ3x2PfXURqcBNqHnZmT9FhbZgAKMRoV1dGd1QGQBSe1aAPzABem64askCPQV9QBR2vGJXHhTYRFQSbZ7kHy43",
  "key11": "541tyWbErAyXC5RAKoLRXQxjei3tATfvTm8U2cxu9JhbJf9gFUXdi5kPbiSZnoBHt9J1P9iX7rxVXds5oFp8VUDw",
  "key12": "oT7VnTRKMfDxnaARfUnnMJQPuG8xM959FngWZ24D82FCTp4bFa1Nkp1PwY5PBNRMwyXCpjtXxMTTDWzL7xx4BUj",
  "key13": "AF1sZ8NmRYTQ7bgw5XaRhdtjcJBZXcZym3a5ZoMWFD7SgqdDQYHYGHCcWLCcYPy89dwBKhm36FoRwrW2QoVhDkw",
  "key14": "5wNsiP8UCbbmh23aQuVShR3oFgLSvPzYBnyjkcSbT7uMNqxSz1msLeZdfiYYZUZd6DGGKaMA8Lrw6bva8QsxULB6",
  "key15": "5BRnTLXV52fEsNYegaYUPUzBiSZzs5bpRD8sMqtvvtHwLRpQH6sAxErXD3HgXjjggCActX5p4nzGa7aQ4iAvKwVN",
  "key16": "2T18wkGaM7XFBhkdX52H8KH1KuVL7T38FPM3rpVL9ieEuxGSLQC8GngkkUDNEcsQpcKaAKcpYnkCgm6YPBfxyJDC",
  "key17": "39ienfXPD9BfJiysuXG7LzqkEzciXWkmiaM9wgivn2JAxE6Zz81YVi8rvBkHEzA4Enofijc23MCbktAstn1u7SAk",
  "key18": "Gowghmdy5BchVTuxudmNJcQWi6SKQXFmHtwo31okj6kGQPKSGeYQseRLFoT4x6VE2U85AUY6JTFRpmzkkdBSukK",
  "key19": "3fgQxJyy4qcH83wuKE9FAHRdZCjKGjNp35RRqyKe14WZonjrxQTh28HZq1Hw7PxhPmx9KoBdYEAqrBa3GYMJkbiU",
  "key20": "4v3wDC4NkpCHXQiLCzYWq2YAneixH1VUXhrQjCAbV8d1p88GHeRnhpheH2gSQPThdy9xBz6DPV7BGNcdoFSaZf4m",
  "key21": "2SnJZhfJdkAFsoiqefSvoMLsR95UtGqKMAVM87ZGSwn1E8jwxsWK9WCWHdK3msr6y5NujwPa8kuKrpGk5maYGAPF",
  "key22": "5dCUFtHBKpNKf6sTLKSzbCXHGvCSH8EYJSDacqP5B59p1oCHUeieuh8AQNeXUaKcHJGj6mbTY6MzVg95MNg1rcEV",
  "key23": "63cwtECSS88iaQiLPe8NDXPFANzHq5UKkaoRemxU6hD7XYVGLNE7jPobGELm2iNuGMtmcnGKCKHmChsCZBGTi8Rg",
  "key24": "5HSQkQUBJdJkSCLzYUDat4PE5nBLmugMHbkoqxA8gKLezSBHWdvMBTsHXNa62YE6AA7pu9PZNsKBKvjYpXbPxA9b",
  "key25": "PVo5BbBBbGFPJoqCcVSJAvDVRLkYXJVHCFpWuqFoaA8vDRtUwheQYzx9f5SnkMBFdGEu6wgjzg9Da8h2zqr96PR",
  "key26": "2CxygGWWbYHH3MrUBL7tahEQigCPvLzX9CCwcompuX2Zn8QFFvZ6p1YgAuitLRseg9SQNa5rWrh8n2MuGkVymATP",
  "key27": "iCugcexioeWWoGEXkgM7QuFmKjt4EHmFqvNRCgS1Hq6k2d6GmJMiM9hYxxQ7swo5YKxZC8GFxUWWrMDJBYnSJJk",
  "key28": "4qyJDLTSQHyaMXWSf1kNtwxNGJ1yX79rTSpXCBG35mak2Zpe26oZirwr5YchfW7m9RfYVK6iWnJX41bCZC8SSNEC",
  "key29": "Qa2NSLKyQKdBcJUMPDjEa236TTxvSp1sVh1jZwsD7GPmQxXLzc3MicB3XSVjapmJGvXPBKCehTzULDuew6pSDzs",
  "key30": "4cwgUbGkk8kkyG6Kn4Cc8VycTrTijyQDhkAGRxo3WtFjKskEN9gp7FFQ2wm8VZhxXu5rWrJxc7Q4E5bLS9poM5k7",
  "key31": "2V9RrPpesrMXVJU7acUfKmpTuS4RvZezdPpbRrGLFr4HJ68TF93et8st5ZLBNYmw1E49t4Mf8i2RdoPeYwg5FRwt",
  "key32": "4CXzDFpXUhgXNznbCZVZkdcfnYGTWmGUxeUbEBVZLHafkq2KrytyGtxqx1NSv3wpHMq6a7y4oqE262KgA43kbaP5",
  "key33": "4RUZoD3zTCCHQ9QaS4E9msaMgk59MBKESdGq8HRbeR1TBJqZ7CPRgmonc81AHKTz4tGQPa5zpWSPZS5VSBTTvk5i",
  "key34": "5pdxA5QJ1RdrALvf6yGsputzFYVCFNZwpWnXH5wkXGC1tmNJ1ZRXTpKwyNorqiEZ1CqXRFGoXUm1GWXxcNaGRxRm",
  "key35": "ms7CaQgHW9QRn9eiGZYB7r8jx127ZSnTMxDLsj5WbSXxTrDbi9m8GqEpvM1Ed6Xwk3SMtMpHnWzww5UhsQsZJch",
  "key36": "2Ep3uTRjApP8YMFqFU3Yhzw4RoJsgj9q1eLu9AqcdzDmwG3KcBzK2jvJGg52e4mFxNVSh5Hr2uPXaaGM1QMsbi1Y",
  "key37": "3BRy4sEDP7GLmQ6EBeNxE1tfkLFWYNZenAyEeRKrJpkb8p6MLYb6sj5EQd5AQH3LRWGsaVGsUww44dW9HL362BoG",
  "key38": "4DdyMn2nstPiGbG9m3mwQMTMjRsNSLmtxVJyRAq9SNGMZe2aWohT56ozUDQrRwFZNBVAuYAbbpXgoZ2SK21RMeEr",
  "key39": "4oHN4aFxQjs4XqbvSzRjam8ME7eU34VnAkJsrWGaCWXZZPf7bdcUBKXBoHuioW5ZyRd1QkdxZ4AY2E2t76wcnxyn",
  "key40": "1wSgXP1dCrXhV73E7LzfEsSntfsHvhywmgUaL2ygkmBHngK3HiAbURYMP9rLXPiKrMqNysBTMK1PXS1oUh1zfWY",
  "key41": "4fXWzU3z1y6cxykoDVSVw7ruJq1jNwoe4bdBYCRb1dw76a5rmbLEoK2pcBMjUdxHPxxjnxvVHqMGNAKzJQnje5qa",
  "key42": "33y5emMkCZmW5E8MVMGuakqUSJdsVmP8rMQvUCWKh5LNuiesX5APMsBYS5dLdHSb6KAXuBjGHJahysXBjjbRAhUG",
  "key43": "42pNPeZ3RVVKSj2rFQA51EZ6JGUR6aKt2JjpqismCEwNVgQWKJg5JEqWgUL5fTZJzJBUUjGCshcYDx3PZNYkNaa8",
  "key44": "2DWkrCsFFqpz61CcJHSqU2tHXLJhn18NwcRERxdZXpua5ecdkXzPNstXBH7q14aW24NmCYanc5LTGxAGKMf1KTs5",
  "key45": "5iZy4QizPotndEsQXpnumbpysiwUr4TPs7Nym7d36MxG121UjmEUGHkjLZUPamBMobkFcZpKiTnrv54xTHUpSWzn",
  "key46": "3WdZGap4JfKz3vHmPWmHdnfPwmoBpWEiMYYST5mvY184y7v4HMvhWJ661dGMjQYpk1MX7XasdG4aK4Ehq68zEVRi",
  "key47": "227bfm2s8QbukFhy8cTX9mTVjRowqrCoBZBcSU7eedwTdzcn9EDyQAAebFdYFGcA8xE7kD56GZ2iwfcrgJ8m4JU6",
  "key48": "2yXvzYmBjkN7CrQKEDW6VbdxVNzwpSMVB8EjRLDBEprZQpworNmBiJhVTE82tu1GKFNbJWuZQApy3mBk16WE1Rio",
  "key49": "45H8awcNC3cUvHr1ctiPh5KdmYxaThBb5T6RFMJWM4eGybLMt6hFEg4Z2BdWtpzGrGYGFYYxeSFnRPizcJC3h12p"
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
