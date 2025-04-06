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
    "3BUkzWYR5fvPh9WHdgdQA8Zah8r9wwsdfRmYqrymriGpkRSZ1LhULkdpkkQXWHGVThTLV2Mnog8jR8BKR8S9VP9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5phCXStWUPkixwpsncuyaH2uGSy4ARfgjjf3vRN4LzvL6e9YkQmfSERBtthLPzmQYXiQwpQsLoybdjGYUQzqGhZF",
  "key1": "3EtidER9scmaX2CzAN6FNdUn1NQRkRqWGKTpJCeQsGVPF9sPqJv7FD6hVeLTTQTbfbDdxuAC7BxgRTwezy4rJwot",
  "key2": "463XgtBRXfYsHnJwHQZ6ycH6VaBF8hEsHFiC6RdCn81gbW3UC5r7hUPQ8UKjY6gH6NPwnPHhVxaazqYbKFyHhBfJ",
  "key3": "AjFZfommcy3VE2NjC9qXmoNJezvjjjAGfiKq1vqkmXBccQcDsihMkCs9Aawz9ozaANvYUmQQCWeXrFomhu6pcwe",
  "key4": "2REEv5SpZ73HgnxevsP4iAdaYDktenwvztYiAsxsJZsJS5pUHLRJe2m2u1SNcdLPAND4AZXgtGMC7eBehKDRfSxA",
  "key5": "4rE7qCsYmnVmjkn6J7MgiFepFitD939G6K9ntabKaVkhHy3hpK99MhWq5eejiz1MHYAPSJUDSmRyiAQc64HyDZsX",
  "key6": "3FxdM6YQ8uaYYoG5vWAkHg4QBRVErGfMR1o4KTHqcXkivZJWPsTRYPteT8bi4oYHKc6YknFKf5YcJsZyQPaF6aUL",
  "key7": "3xLfkx589XD3aDtcyfAPET5bS5AFJ7w3wz6QR1fxFmzk1v18gYtBBxVwDTfBaTYMvVRr8n2UgZ9ExLgQ1YbqA66t",
  "key8": "4ETe8TMEQpBGZ6Ut8f2ALQnwXQbQ9LASdhaS7fj6EkFjvunVH7wQxcVXoVPAeDC6AsteBzak8qsMMb8hJQUo1i6y",
  "key9": "4nqcirVrhGvGaNWfHsKYhQRzCGHc5Qi1srHDTfBuCH7nTwV4SacDfozPvvKbCefy6Ag4xJGBfqh9Zd8hMwSTzWRn",
  "key10": "3cgZyky2ueW8bVzGT7xzjeMsvSVfiyVrjyLC3UTcXBFdeXS7MSomJL5sDNo8WJ92XP2qagenipcnfMEqfMxeq9fK",
  "key11": "5R4Uk9sxnrWZNHroTyZe2MhCXjwAqtptHXu1duLMEJqgxrWLkR4dr954eg93XcKDEupdi5k9eCRqgZuQ8fJKrvUD",
  "key12": "Ndu2iEz4GWtSw4tSxZBXdfJjjqrc32BQHL98EFgtARL6diUoNPXnebRTWtZenExhfSxt7Lhawr4Px2wsVuYXFVX",
  "key13": "2SkEBN1rsxS4sRJS9HyDby2aqM8WY9AsBzkS7a59ZoZRVTPdnzYE5zkGqSeoJTysPtyxjkSvbHkbGmg5zzgBJFv4",
  "key14": "2fijGyHzTgDBNbk2XT5TyFRB4iCaNSybYksVCrhsnfZnxZPMTNCN5ZhVbNdFuZePeEPKjPZnHtCHALMgvyJom17u",
  "key15": "4HDmUdRAQ2Zgx8TWEngewT5LYDKr4QS3webfdvNXWhXXcS9TzTEXzRcpHPkSvcv58ucKc9BroWjmZKycHoLsaX7p",
  "key16": "3Qt2k8541VeXmDgWbQ5Ci2wFYAYudAnA6SbjATSJgLhXtTZGNAyA2A8xgZVXx29oMUbn7KA2LLBdxs2sS1eNJNbg",
  "key17": "UY9JuQsJHR8ncScKW61L6FRLeihjNcFii4bNrtXxfCJEFpRu88oih2UzuD7zaki3Je3NiinyLkNCjcFFsuNiY5h",
  "key18": "5WAPLY1Yyn4ao9THebrecSufRnh2dTe9gBRrnCJdcnon4QGJotKjdiQ7pMpc3bYqUdn1MeEGbnDgep4aYLNt8WKU",
  "key19": "3x62DkUbf6da36NgEAGT5RjAacV7Ya17Vogaepck9YT6tDbxUY3rCdPoYYDmwVpcJ3rt6w1CUyxc1PxbdhduzkUE",
  "key20": "5UcBfLqx9XSvB3E2ukn2426eSt7WTeKmgvNQmfovMYu7qF1nN2K7YGiBtxeU11hvzSM8MVsErWHCgokc8zG7h8UJ",
  "key21": "qU8o2UDVbDCCRaZP7bxNia1EukTr9KiG7A5LYjivKsfPdEMdnAV6dZuc4dGBour9752nD1BDrUCoNZMH4qd8tFP",
  "key22": "57QqUfSRikFLcnWDjjCugRikSqDzL1T6e5WfkvkAKa41imXT39eZM5kaT1qRU6iFAXqR9dR4XVpKXMSqne49CprQ",
  "key23": "CqV4F9p2fBqMKup2tYPHELGmpxR6Q2QhzTDNiPTYuLR5iVAtaXMqViWb62pkVDRFNfF7dNxwBRh6Cryu9BGgbvE",
  "key24": "3JLuj9QFyE2k2trVbFAP8ChJvxMzmraNNQni3DkLAp66mobuQmLJRgnBWTcJya488EcCQK6igNySXDTtVvzQNtfh",
  "key25": "5YhpMsD2WdCRqA5xscCsEvwVpZZw9m8WRdBpmUYPHCEZX3tTYj9onarJRTk6H7DkPTEwerjTrdU7Yguz7n17T9rp",
  "key26": "29r762frGorzwKhBywsjaj21kbktU9bZeeJLJtj4t6dBKPX5G1o2suGUmajRkot15AsvQGj1vcoRV1mryYEpPDfr",
  "key27": "wqh3qbczBqmsYjzxYwK2Ux7pt47kPFUp6dTw5FdZKmHt4EVqvKtddVGRF1xPZgXhKEvpK5WWc4Euaj1xgAW6i2s",
  "key28": "2qeDyEv9HcQbNNHpEEdosKXRSQa2ZHe3DuPHSNrt9CyQtz51NZb29z7Bi35rQ4PurKsupPiViGy4mirJMdUTswKm",
  "key29": "54nXvrXX7niEEgzHNDQY6RYtufv1oB8D93HdZe6RYLVf6DA2TS5mu986GcRZLrZDDWrMhrhWmc13rVZX7pyc2SKR",
  "key30": "5o8FNDqrRqkN7UM851ib28XHf2W8gdBcSgQXkJfz3bRmkARy7VY7aGFcKrY6846sEdHyKUCwdJdjb7DjmKeBcPry",
  "key31": "5NeysC8GFf9FpKjgD7nSvv98vcSLemq642ZeMgoSTduLvyA8xQdYtW3T5ZCtyZUUktrbTTS5xwB3Ki2pxz5Fuafz",
  "key32": "N8dh1BHdYUm6NMrUrvKdFXv5fGyP7Z8p6gPoMKfuvvsUrYDbrPjyCwFrvoeYKWGuKrmMcGtj7rdv1U7xoj9ysX2",
  "key33": "4CvJV6nbAmLZHTiQ6GfRV2jQrVvV8RzZGt7Ex6zHbJ2t7Z36YKx1McaySJjUKAYV7RAmS4AARnuyn44dgasKso7v"
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
