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
    "3avfAHHuDGmPzgdKkAwiBvnDGbcVHyWLH1Rckx8iexSAhS82EH3ETGjhqhzx2DKnsE9uisMiszRjmJQnJNbYGKrq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dPUwZyTLuQogSh3RNT3vCDcZ4Q9saixdXNkaV5Nya9s4FLirAEe4hECdLKoKYLarLoP8ksy3jYgE1oD2UmSJvDB",
  "key1": "5w5nu4zakSe8Cej3ETjujYZMpWWZtgojbr65ZWkiWV6aPjDkWsD8rjXLU1e2bvpP2BvX8HBdWL1zMxLEFxwMAqL4",
  "key2": "2noNej24yLJB3GSAyZU8HQi9jrz8jFs94tbNhRFXXrNSkLC2hPfaZEmvP8DxvGepVYk9rCScmSQpzLxhgrkQRjKW",
  "key3": "1DGt8JrunKpWF9gm4RHMh9BBxuBApVUgzH7YeYcS8mXyeaHgpAz94giYnXjGaNpDwQaQK6VKYLr3uxJUqQn5LwG",
  "key4": "27zYrspAtPjRcEHikvWVpzEj5tCXiwQxWxyJbd8vqmRE1BQhEuxby2zW7M4FaFKVCZNXZHkyBnYWTdaZHui5cHR2",
  "key5": "4RznJHGtFjZaRobPggSio4hkzY6qDyZ8kGaTgZW6K2FmrjB4oLBt3yA9frkHgMp3izhpKhGcnZfayjbqTGkF9QRu",
  "key6": "GCS3cPPz8aMeHbk2WKeTwgB46BDMEaygvLSZkJyb5myAfJodot5XQZifSCdw9KaGLooYZ47hY2iwaQcqZ1aPjXz",
  "key7": "5KY94YstbrYZsFWZ2KuD2TLuNS3rwsNfstcrEXxW3p5GGYh1bQFL5nMDwmxZREUYY2b8Qvc5g9QQ2oPQwMMofSqr",
  "key8": "4mU3oqGx4PqYKHb7BFyNPcwbE2pKzaNEFZxjAXWtmj1JeWScDpZ1bJqfjgg9EgHW87RJZhZqT7cqQ8X1L2P19TTC",
  "key9": "2S8vwt2Q2UumBDX24APC3LfRkKdwPuMqgLZCu2rqhMLbdkugN1GirV4oAGN4513DJnMoaDfQsW71QhrVymsB1huw",
  "key10": "61zEmtNR3XuMSFbUSTbcji8x5FobZAEXRUApvoSSvyLnMTBBKQAJP2mLm9PSqZMmRRw8iENLYFREjE624uF4b8Xs",
  "key11": "4MKM35cgynyj3mmoN6mttQDvnNWt8LUAsYHNi3rr7pfAemWYqhQ5wgiB23zWQChNKGT9YBCSjC2yXrAJ4enq7fDv",
  "key12": "5h4oxK2nxV1Nk4WeGnA1U5ahbT1v41iQCdCUCf3AcgXH2RiwW2iou7C6UeUd4LLsZ2pGyCwVFkJUAymKUjMiCCKU",
  "key13": "SjtZEcX9S49S77xir8J3T4bpxHvPryDP9fKj7DSfA7EgPdusXaNBsLEy2pf4WZLbvXfiH5cE6PVqUYYaxMGvMpJ",
  "key14": "5FzfVYqmyCPHteeqvUm58ABbpibQoci9XA47y8cP4CvaEfUsWg5hZnLH7uV7Bnq9jg5GREzqxYFvcxHd92oYpGXL",
  "key15": "3day2rBVN5bvmJZ5ahvSfjPhTWg9e6RQrGGoU8TdWAbKUbAwj7HyNGDSDwapSgMGNzkp6ZT8CvfA4xdG4Dxpzewc",
  "key16": "2jjgEuriqXyRxfrLR3bFbPjtGiVhLtVV61w3MhYQxKtjQuR6EyHwCc5AYyiF5mgNjWSda7zTLUBFgCA7P7Us71TZ",
  "key17": "2HycbCrotkiVnyGbaqqyQcewAfaGmSk59D5XX6QzrvvEGvpF4dyn9r515kSfFSrr2eJhYuSGS11qHdHJrhGeREpF",
  "key18": "4Uz26xccrGCLuqKCjfeiJ72AzQbssH3N2vh9UMd6hQnzwDd623iarefwRpzUB2UtGX22xD3kDHX1QUax7zJSjjRb",
  "key19": "3py2RKKyEXqvGhf8e7NwdEN9hEXub4dKGz7ndQweVELgKLEYsLxkM4U7RqKVRAuueaM1cHsCzJ4BmWnQYj8dCK1E",
  "key20": "3rgmLuXA4ozeDciWrFxu3u6nZSjDPpepAGwV6GKcNwURHJC3J9NP6yjYPcPMv2uuEWsmdFds22sLoUELrYoAw3C4",
  "key21": "4RQiHAf4VrU25N9Cc7QUNAZ7pFhanCg7mvZBcsBfEDG9R1Cw5SJopFqs8aiouh9oT1LwpvKK2NttTVTz5e5DGBxB",
  "key22": "3RE1taXsQEe68ckqJ9SRMJ6Nuz86c5Wv4DavDKmhiCqhCJqpJunA8VhsCuwD4nWhyJE89q8t2WYsyQmKpzH7RYgh",
  "key23": "2Zptm7TV2TUF2tc2hLBFY87cfH72mEu4eH5dsVHKwK1xEM58xhmdCAZJ7m4gAPKhpVcb2vdRgTFpnN8yjZvZP3WY",
  "key24": "J4mjn7YKThQ85VBf25E69Y1fNRmE4kSWQMNmYEmqNtqZ4gKQMw2ZhGu4i37qBjr5ZRcua5XFf7c2gor72Bqdaxr",
  "key25": "3wS28XZ6yGqJfUQ9YisCnYgkAhpzT2Ad4tCuAvBt7h8vZEh92rk7e74j3t2TBpaSBPuumTJcGKvzVfc6meK3g89n",
  "key26": "3F2B5gPpAfzGWWLNpcJfujh3NvoCyVN8oRpSNvfQ9Yw8uJscPg7Knnb9oFZ92qJxHXTXJ8MwccJK9S7d2f8L6D6",
  "key27": "xkjeTmx9eh5DipmLQC5jx8bV9zZoVsnPq7R1Ee5CSY4aFNVELHk9TPRFgcgRiRbEo3qew7rU94rgcwKQYdgk9KH",
  "key28": "21qyeuGYkBQXoUGSQkRhTh6ywYDLDmkFGCqEtG9nyBQPjqmS9VNBtBez7rCENSdkfy2jevhXDgj1SGTLskAeW4if",
  "key29": "5qwteoFJCdfh9RxdoHpvd1y7M7XK5KeRuwKSQzF4YzsfWgsWTxuoVoiwFEFKTB824T4mLHvV3opjrYx8TpF133BX",
  "key30": "65dTfpDkfCaLiLEgHNTww2xp8beUbssJ1giHTPZh6XGNL5nJwsYeKw9LdWENxP4vP91a1FZm2RQSyrQw9yFvV9NQ",
  "key31": "5UXN3NdfpyxsrSqpkkz67YMHkxevxntjAbHUCivxD7NaYotaK4VJr1QUFrsokijZPKZaq1iXtkvMJ6W8Cc8sb2mC",
  "key32": "2v32BbE2mdL2qQV87Nijr15M25QaGkWRuU9Em4d9FFDqi6hqez5V7wEEajazEgMrNzXrX4PQ6UKWpeFfBN9nbLYP",
  "key33": "jcYLWPM6r5WPRFMRKjwTBMr8ZRJRA2NxbdeTp4wX5qFoCHAtRJApW1XM18DZPcinAnmcEoKqqPKQEyKKWQeXEoh",
  "key34": "5oNN5Je6LTRdVRC9DoNf33b5aQdHk7tJDgKoGieEtw4Wxm4vKc3u4yg18br94oJNKkyrZiZAjEBRpGoanyR33Wvw",
  "key35": "46wVB5UDj2mjsk4ekQCosGkbbY5ZtWPT9Xq4iJD3gPrYPiLjRZvNQyBxjASK3f1dwbGhz6modZQ2jNQer8gYfTDU",
  "key36": "56wcozhFS5vKbrY43ikdqv3jD5KdjoC3ZRbwEWX81ViCd3vXih83DviiDYtoCRXiw3NUCUVbeAzkyYx1A7SB8LAP",
  "key37": "5AHoSPFNFoFbSBXysnD3UESH3SNRUF41wPsp5adeNmsyZGCbLAvgCr3xVFLohB86CZAbW5hVNgxwXzF644gptNYT",
  "key38": "37XUd53uDTuZjeCh2abdpiopUdDr6gimwLK5qUCVCJA9AXuSGVEczDJ7BQ9jedM4P5cDLdo1T8WJu7YPDcSREV6",
  "key39": "4MfUHGx1kjqQ7HgFByKBc4nFSuDjJHJiubdhK21QcQ3Tt8u3nF9pAZCcAsumYf87uKsft9WscPjFhkFhWoMaj3oH",
  "key40": "29ovjqYfGKCuZ9gq7tAFytMG7z41va5iUxE4J7C9SAvnviScaEh6e9ML7LPi9PraP3nQhFs3UPL87tKcRjp6M5yH",
  "key41": "4iYbkhn32dJDHBXf3sF4omqBkA623dp5CPbjKGjo1f6ngkoDHE3NSjY1uBUVyVnVBmXDV4JNW4T9PPDKHA9R5SJB",
  "key42": "4cNXZ55pGmJNgHoUK1oJEe23oMryz4FwgJ6MYsKBdrravmyseuZq25AheXdgYrmxvKKaeLRxVP9q38S67MexVpnC",
  "key43": "Nose1Z31GKk2trQJmNgrxhRhAcSpV2S37umfbQz7KM2FaQNiwhHVJNym5FRKiH1DysTCcTBAcXp8Aos4xmPYUhk",
  "key44": "2xhE7mMGqY2jQndVipwaCJWv9tpbtS4dYDzY2miTQ25GghB4AvKiaELnxZaJsMSXmz5NtVqQJ5w6wFbB7QC8Vu5j",
  "key45": "4Ekqmb4K1pnt2gnd9pzGwMhrZeYKezwd63yiVRHAvsxogtjyNWvFQe9pU2x1cuvvJZq4SDgwQWMv1D2MuvBAvQ3E",
  "key46": "jpvGByqitUJi3p2f6qKkGD2C2avqM5agWE2FdW4cJ6u7hEehBPaFMuD1rK5hsNADNqnbCcZ6AE9JgZJtPk9Y6yZ",
  "key47": "3ethXPJqoScsQ9iQFG9AMLx6KZjGTe5bCUYJ8PmLsps1ETEwk29WZrwS6hfcHs2YQ8b1SvAQ7isBmbJxXfd2aoaG",
  "key48": "K5nxM4mc2oRXdbmHoYUqLo8tTL1aYUe1n8vMpCVtYTT6ish47gtke7CDykp2MpoHUD3SaCzVsB8hMd3HSGeN5o8"
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
