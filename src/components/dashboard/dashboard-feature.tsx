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
    "27sVwzUJN3etEUbvjUvJ5TA2GddyyGcN1mZ9uRse8UQXwP9ckXvqUMoc1aHFQ2J2EvGeyXZ174bKPwXjEwuMFHeV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29gFQgQJNPg6GTRQe7kBGyU5wcgfaYdhZhstW718bePUM87EFiABEqUE5NRDJWzGNgLo1LDjrkszhVDTjkSucTuA",
  "key1": "SXgvo9Lfxp3GZeifvBZGrwpURVDkL8DXGKY8vKvfS2SyFpeekbczynnHKEmXwJiM7hcT5YCGbzCZqtKW1nrMM7u",
  "key2": "3DXxNFGp7z75dzyhFe6DVGzmtLj8QPdacYkJBPwn3b6w75VFHrJQjBdR328wFqVX3iA3ssTAa1215XHHADx7X24S",
  "key3": "SgM2MuiADyMKjeLFRxm9aW7FZU7aCmndf4mtEnNh99i7qh7HvKpMnSGCZ51ZMGzQJC7oRZxvEUwm5gLtPiZdsxx",
  "key4": "4FjjwcRfdrbLnvj8u45GCP7VKoNAeEDY2bYZHUg1dnps4jPrTkTu3DHhb4zyCeG25hAZMUGV1sAtABG25Cvgen7M",
  "key5": "39H5Kyckkd2oBbi6nEBgMbYfXrynj2Kj6fLYhMGVNYu6n663nR11da1wLKESj6SXucEhGJnMs4DibpyP51Swv6gR",
  "key6": "24nzWN5QoMDe39xJhkGNEFBVLin7eyU5begrznsPWii6W7Y5jHFMrM2oYBPvzcAL8Jj8JaZHXsoJi1P9k8YC5fDK",
  "key7": "43Jejg3tQKDVJcWzb5VMN1QbNgSVPQp7wCeTHDic4KknzEuvMUhsDD9ofGJaVFAbFwCtKfSP4U2z7mBgRgG33Dg8",
  "key8": "pNkPt9vihZMzxRjo7yYRSEjc6WUXcjF2aoZPTFgEwkca63uAaizYEfuBDXmtcwQVnDfuHeM8oEAVvu9bLFF6gnz",
  "key9": "3LenHjZLozfJGhSeMQpVoL9uE38FagmUbHmaVveu1N9kUmyRUxY9AX2ZeuBDwYzxNxto2crxuwNAi2mFvCvCyLLV",
  "key10": "6mAs58gKRHEqfU825VRYFHTHigM4nCqHqZzRBEU93TmPDGR52KN9rj84C5WAHDJJauJrtvxqZE5uVRRR31R9WzE",
  "key11": "4X8xzXEjqJqcvtmU7oWHRWqnmPQECouihHQZSHvzGTCE6oJHAFLnQNGonadzFHEV5HZVBwfYoN6YyHgVpBGJbfeA",
  "key12": "5Tw26jbRzYv47fepcQ4K3RLmF7RTLCgK9gMUmJXQrrndMwfEX3vZgcDGzE11Vs3x34hX7YSRsqpLkAbaQbqS4o5E",
  "key13": "5WA18cGB2RM3DvjA9UgrmXNJW7FHDvFcrKFV3R4pLyPicrBoxyGyyU38P9BaXRLejXyD1C4YojZMSMLcyq2ZCSv6",
  "key14": "5kJkJsQBgUPvpGX2bSRbNoDzy2Q2MYLAfXf5EoNtaiwPyRqH3rtZP2thfqZZs3urr9ZhHZCBkvqycL8AoqYSUNbT",
  "key15": "2Gh42kRHbKgzn7EnbmuPcocxnZZQhji3mwhtRE5pwtGxWHLPM1vxTX6vSpsh2xX8gxE4y5B2Jy36ayE7zTYEHKNv",
  "key16": "5sLYQnVkfKAYgkmhpdQ99zqBff3dmXH3CenhfVEdF2KBZvErWVPrruUwnaftf5Q66Tozn9Pg4EM4EMKxoZ2KwJ52",
  "key17": "3CXgrJ7JJsCKjorqiQ47WD6b1ZTGSNJXQ3vrWHjouiuHxYwdNiPmMw9QpuukjQFXL49csNcPXgD8CM9ENCJDgGUA",
  "key18": "5x1M63hYSg4yJfmKehHBHi5wkAejLAC3kp9AJ32KXVK2eU51ucph7HNbYt7Asb2Ch3bEqDhThotjNEuuxLLhLv3a",
  "key19": "tz2ZdFZJLbJ11mVz4fP1S4reNrSMfCBVsymy65JZJr23MuXmgu3oqFDCJ3PXgfG5q2jK5y5L87qVuJz69U37Dxx",
  "key20": "3gnTAjT1K47uzMgqvLND4QFqYUwPnZbMzjagvcuZ9rGLPVB6xvZFuemvwppgssqC47PyQEZ7ivrafsgWdZeHXznY",
  "key21": "3ALCnzQCCvZp1pJewkHjZUazrfnk7tnGNw2CrE7S7xMa449GwKShicNhHgCMTjH9iS6f194qZUUp1AMAEpFLBRzb",
  "key22": "4bBGd12bJrbGez27zrghSGgj9fUbk58H4gY1sqYN3PAs3Z2Q8RyVngjn4hFN3Mhoth1pxmcRF6d66BE5gHQ9pdhV",
  "key23": "2Qiz3f8kfiJ4pSdkvCJaWfs1gLWmNVoqR3CJbf5XtY3PGxj8wJC7mqD7Rz9gciefsDA4gQYyEYaZDHJyLFwUMtLj",
  "key24": "YBKV2srNPcZinJZj5wuyUPaePs6fh5DCyzCSRVnSLnk8vqYBEED2Swj8qiBWeY9qFaRqX6NdT6AQeacJPDfr1tV",
  "key25": "5wrx4EKrBAecUrz2T7p9RY1e6R4t7aNAHDBj9CnYMBa2uUSnJ3LjdKs3ptg8HYR9bUAvyLxX62RMTLFYMWY6SQtP",
  "key26": "5pzZYswNyxUHuksLK8mGUYjv6b27gqXdxWoB9baEoBr7MJVBimq9SsDt9jwxvEdKMTorL6M3EkS6ULdKKt6Rar43",
  "key27": "2FC46p2ZmmCo1aLHmq8bSgDsF6waFCjqfqZZ28ZTCmPHRVXy8pxCKgWwq6sfg3bKYAkqY943ACUTQxz4WDkcShBK",
  "key28": "jQHf9WSSrpjKpYJZtweQjA93sLYfi4LAuFaxF3f7T7xL8e8AdWZdL5iCMEaDFMZdyqcxjy6W3YCxos52EbzrRd6",
  "key29": "5vwUSRoeY8vYeJbiuEkZ7DSAJQA9hoKmthfHmw82HXufUnJUzLJeEfUateBFnnCsr2S5tWbrQ3tU1qGF49is1Bv9",
  "key30": "52iAKAcZDgMHsLiwZtP4zQTXQ28ZKqDMY3GeKm1ga6MGRfaM6j9AFF7TbVt3cpxBB5fvxFMUX1X3v8N7X1T5BWM5",
  "key31": "5eqNBbawDeDDX82gXBSA8AewSVi6eSNBqbwgkRBuxvWDNuucXgHGxpJvspT6FVgxqMtcndLVxrVJPe4bN9S4wAXK",
  "key32": "Uk3uFytoyTQSUwRCibuJyeN3ErxxVrqzpVCzcWs1KmdMfjV5Z8ZwFxRiJxg8KCMdYaph69FnwXBoeDeBUNKut9v",
  "key33": "4YSq9HPcm5GmKLq1qZphEj6Ct22G9XS9Rk38VSMJJXoJpy7nfacrm76Lstjno7fJ9RZzusk8H4hpPz4rzaruHmLs",
  "key34": "3gTyuW664aQWfsdmhbdpLyzcUjgKrhvrD4vB2w6BpPohvSdAzpUSXeE4wBPKsNRvBpcTDk7VMXmYsR7g7qhKF8Ym",
  "key35": "3BdrDDDAJoX59dmH6cR5X7Eyd7ajnuWvSgz5amY75bsTMfWtuV5n5x66XhP8BFJBvBN9MQ9m5XdGW3sdHLzXDh8F",
  "key36": "5vtSXcJv1rqBy2viyQeXYfB49L4tueZpNbyL4E7J4zmJytpMg9wsSjjXfdRp8kwoAFbame4gXv8SqAMRyVdD6i5x",
  "key37": "3aoKPjmRgkySwA8Tnfh5pzYd5NeVBoC39qqQoDhXKdoF6aLGDRWzDoW1kk4X5KJLiFP4JYSJH6S8nZUsKKb4957h",
  "key38": "4PsXkSv5h3xGXyedr1u24d5ptt4fAFPXeAxRDWB5fE1Kp6PXbB7v3WViePi2YY2MRCs11ZMcUEveFPVimR2KXeVf",
  "key39": "3QP8J6W9hxj6oTLJp9S28HoWZEWibrsE4hsEkBurspq5DxWscktzft56YZ6oCfGTLNgjEXYmCdVhPxKgkPjHqnt9",
  "key40": "3T8nfMdZPibP9XB9sLHsAzEJyYTpxtsQPsiPZvphWEWB1NBcmQWRk7erA1rzF6pgvhobjvHsv9X9azfwizS6qyCm",
  "key41": "5bU73vcR11TxDcMSYYWWUoxH5faaVH2XwzmSLaRACQmbKoVYPSvfF2ZWCipJ99hEH3qzGUGncb6gcuXariJdh3ms",
  "key42": "4e314YXSNZn5y2VymXHRGFrYyeW2CkGL2f73xNf5ECudPh332ZgHqQy1qgVVgAMCvLPpEGWoK7w57smy4LMaqFNR"
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
