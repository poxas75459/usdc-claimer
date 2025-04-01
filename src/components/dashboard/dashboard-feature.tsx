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
    "Zbg67bJHrA82ngDAQCRUNq1V1uro1aQpE2ft6B61nMAcaBqj6bEEypJzXKjBeBB9JGj53WN8xyyPcoLxQYvNuza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WRPsijbeQWTMEMMLNKZNbjBTWh4doZsqMpXPdNck1vLgBB7TexrJaWzKmZ4HPAj47XoCVWnSXG4meNiGYT2k8Xt",
  "key1": "2WKR4vGsiBx7DYkYL9DMKXvch3XT17YmL4oPngMNutprpEhZqVp85ana5fTjUjHDjAAcaFvThqd4wMSQwVso3x5e",
  "key2": "RzxPAGtJMVvgzypi588JptkdexaeZ3Ybvv3Z2qBcvr5SRD9ajHsFfxRTEuxj8nSWf8uPp4Wg3b9JTLEESBx1C9a",
  "key3": "5qVxWscc2qHVzxCpXfbeQYfwqJUM4sq7wKJsnm2zLPUTQCY6AGBPDmMZqQfHazVrUToprct13qc1Pzs7VjoKs1K8",
  "key4": "5C6Mn4DUkGGdwkRw9oBPUVUmukzYVG4jpB7CpBn3wv6pZCQwBXEtQfdfC6GnkTwUDufspUCG6cBHmhig4VaqMTvo",
  "key5": "U7jKB9dmrV9LY9aagJe5HXoMhwgcAkJhExZbUb8FPLmh5wFKPSNuUVuZ2HHNry4HdRTM6ghmSGfb9VW7torqjcN",
  "key6": "2eZZuiTEEPRLP91AdR31yjc4skkzPkhvgaFxzVjhGMLBAfjTNXiCKPMicuCko4AeSRgdC1r1nwu8XHgPSxnvMjDu",
  "key7": "45edhNiSSrgQeuo9eCDpJQxAd7TDaAYAU4Nm11UgsFk5jnCZxfHYaP24tmSw6wXv5JiocSKESyMs1WUaJzmtaPsY",
  "key8": "4k343foV3u47XvK3sKC2h4QoQziUZ1LuhjxKE5ono5aKWrqiD2deE7rjS9Jv3QZGdtkBfNvUobpa2vVJvAXf6CM9",
  "key9": "5yUzd5jiG2PRjHtU4xn5FqvfuNvBzKyZXN9i3e672yNV6J2HsRAVSw2VYhWVGRvDUTt258ALgRJdgEfNGuQjQknk",
  "key10": "VaqSsgGTPd1qvQzob31cLpEMhfdpAQpss7t36C9ec5tiChmE4DRq7iKBKiWqP5th8xPgCQBLDykpYxSyhxkczyj",
  "key11": "3rFbyvny2zQWvf9uHvi7rnAzYzZaysohnxTfedRy4G5S9VKUbP4c3PDanmi5cmgQAdu2zBw2XR8hfHqDkUASZpfQ",
  "key12": "3VDn3GgiRq9uJppEdciAGu1RDouP1aWR67YTwac7sq7uu4S9brRhPiitCdQCfPzRZPkEvDHnutkGEaErGk181jrW",
  "key13": "543CpcWrpiJynegfJN9kaFm5NLUNNZsGt4KLx7iFYnaoknoXYEbu66GxbAYTm61WMtt1YQUhCvk7U5UvKaL4qGwC",
  "key14": "5CBNqKw4v1zV1ww9G4r1LchpraFiBGVyvgnQjKYzSqGSkEjR3yMqtgCmjz7mpNjnAHuxN7kbaigihieCW2pFfMcC",
  "key15": "3SK1fK94usX4wuetrC2bJDtusytgu4JFdaZCWFMknUGUJBxUQbYTMMNmppFKoxXnTd61199U6WLLe3Tdk3LhVKSP",
  "key16": "SFZZm55RgdhF3hZ1H11auNPNv71vGTXD3A3w8a31RAouU7HYHcSegTUSicSdnGXSrqVgs5JfeJ9AJWERxHvUPSf",
  "key17": "2RN9UzQvMYETdXAwEGz5WpXw6ioLFj5yi6DVM13iK4pZk6bLpwjJoucbvkzYvYaQPnJ3ioRqC5jmriNqFTrimzii",
  "key18": "3xQbNZGGaYCXArYvL6wbKmmeKwNe49yQzxj15LQytdsfJPzABqhSiPcjr3enJyrjSD4EWWdjVKxwrpixtqiwySCn",
  "key19": "3fFrT5zZhs3WXDDc7FLvmZu1Xm7UwQDqzrQTQJsnstwSSn894DHLimdLntWujmSqqWQsJULAkceBbhjJNyCT5vTb",
  "key20": "4XnfRjYWPFhixAhrBmWM1TfuZh4r46enGTqcACvBm6wSUuqbEe6jtJnr2iUgc1txoKsJxccPhqbHrrqp3ipwd8WP",
  "key21": "4UU6rAdhP2a8pnDANxR9ZxhrW6ucw6vEywZyfDkz7q8Sfqd2Ctikpu8jaUnYNY5jXP3NdgFFRkedDVYP8rSBC7Wf",
  "key22": "2cCw2WN3Up41v4mVMgGbJyDMJFZGrFNJ8fsHNExvo9QhPTWjYrJGaEZ94ByWQM1egySHqWusXZyLNghZvkP9Zd6w",
  "key23": "2qQW8YV4cyibpdAVqRPSF9qZztEqXohsBqwJYXCQfbgFwjh5m5Tpo7AQGcJroJ7qsCPzSaHPGsVHNrNrT3r5txJa",
  "key24": "37Xw4rsE89LAjPqLEaADeSxEBPW1WEuEJFdjJyZLYc6iBo3ks6eist36VdvzjV2By5rf9bEgzyy4mv1azGovvaL4",
  "key25": "4eB4YTnKFVFnsb6fTVupCbFr6iZVpfz9L9dfs5KSGhNsztmcCHfATYkSLEZ4tX3NbQBmztF8HfESD5cFJgrB6xvA",
  "key26": "2QPTDZUVAdJ7eWx7VUEsUqF7gfAc92PD1FznANsJk3rxAuHY8cNrNX6bGU1nnAGU491JtN67DwdKbh7MPzxzKdFf",
  "key27": "3MxSvnmJuLub6BUZGGj9ntRpfpvDYNFeQvPRhRPmiNzpJjBqo9m4SNRd7yqQvvNDfVgERDsL4Zd3Z3RNZoc1kczu",
  "key28": "66F1qXRbHYv2vVJ23GHcMKi22mxRysPrUFPK6GTHA4Yy8uSCJpRyVcK7fz6S8QTaJ4iakwF5qrjeN6D3bDHCVwXq",
  "key29": "1UGJZxd9ntjkTZSsPmpCNzLdFewkv7g8DRaDUxF6NL6bojimVqfKhEeUZrDcyPgvPkeTDdvAQokKEkk4diCAjDV",
  "key30": "5pKaSJtHdgL29cmRaTmKGBdQLU9EWRMoUJadHRJH1Uq9jL9dPZd7R5pffdaqU6Y5ALyUj4MfeGKn7EfvRu3uUhmW",
  "key31": "5Bwjaa4Qkugbi7SCxTsEnjpzv7J1SsSXYrkfE1SiTiqKWoQuVpHGzFjqT2TPHmDmSUw2DAMRZMSLedjoDxdn6Hmm",
  "key32": "5Qzde3MrSRLA6nop9ybsYer4L45chvaGvn7rneCZF3jQH6ozQUhXiKTzRoJNS2qfDRaeBiHG6PkTm5p3ycico8DT",
  "key33": "3DrFM93puT7Mk8T4a3PFrEzgF3Qdjn6LXhTniscAF2u53RX4YptJ9KDAE6MEh43cG6jQYVjz8r3tmpuxHTg3HGzm",
  "key34": "5t8Xkg7rMQ4Upi63QF3YiktPMXi78U8qRrsZn5c99V6BnmUS6oKbbjdv5NGYi16G7JNU4YGskNfZrhr7vHGSpXm4",
  "key35": "WS3tgKfFgnuVWqH3dtipe75DNfFKwQ1zY7yHkrDfaQ7p4hZ2Eek4TJ9EWj6tkPPnfS3nBCQDrPFuwcGxqoRYYvj",
  "key36": "5w8dzfYu7Lej5vXoy6QkxPS31nm8Yn8PpWDsMVaemfzdshBdKKUSTK6hEf7GEaGjx6zGHEeneqNvHdwtJLPaFVgb",
  "key37": "39AidW5w2xo1zG8LrdXVYjxqfs1PXzbfqckjR1q1bDJMTPnfkaNQTGH29hKnX98oopgTJ4zrfYLu6J3aJVbFoTMx",
  "key38": "AJxvDssLQTGEi5Z7Uk5823DJ9Amd3eCSyyjrMZyyvmDEEkYTyzV87NTfPX5t4z8DUeSDWokGfzeRtEZcKjoZb7r",
  "key39": "eTBa9EvtG8sn7VMwv4fUJ1sJ6TgnshwRjT7oJQw9SkQZGMuGWc6UKGS3WFid8VyGUkxjqybNoDieXj9oj2roZmG",
  "key40": "Unr6yEe2pLb74CqwKWfj623mjjdNHpGdiAdFccmc5KJ8VXrraDGRufrXCrPXZ82BQfASt5cacod3ULLeWEcMSNH",
  "key41": "3BViJz58L8q8tZy4XykMo2dQfVdbT5cK74ykc8UpVWMutMdavusaAvACruvRR7Z3kTWg4J1s5LxvVzZYGVddbaee"
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
