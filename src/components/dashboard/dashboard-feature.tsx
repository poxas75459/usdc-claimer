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
    "3pUox4PGLGM72E4fhuPcQ9i9BxdJeFjuV5jcHwd7ojYDGjdcPnHwjPndGShn8rjo413K33fYqzju26fHumfyFwxu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BHs1DStbtCXnmD9JniusGdmjD2qRM6RbtRaS21XQKEJCGr87GX6sraF1KLV3f6QyvFGfmhU1HvS5KU7mKKQUVuD",
  "key1": "2vh1jwdDeM1jQNW6x2Xb4KLE6pGS4vVvRcFLcfQuFArnsKs8fG48bMPn6VLW6ydeRiSMuUvDiVMLLPTeSf41GhFD",
  "key2": "4hhBeuyixTA626DjqPjErGVXyUUDfmtenDJi6Frvrjo3AUKgeAQPLadbJayVRNDddkQdagE3vifAveT85JGNZXqx",
  "key3": "RwMGn1q7jmJxFDhuLSqneQMjwC3qLCw6hYxqCJ5a5GR3n9ecdToNGtLnrSGez8LTmjmy1YqDG9vZuJKBQCF2t3f",
  "key4": "2DSpsYKGYDuG5Yihj8Wf5SFvgyxK3NpGybXYY3QMe52EE83zXCQ4cRSdg5Tjf7uhRz9HSXHMeM3DsRGFXY5RcsHt",
  "key5": "7iR97LNZYKobLFqt6UZcTqtnM2PFnEdsmjoedCoKuhvs617r6j1fb7y5XRFVheK2Xky5fkjEa615oNL9gsTVfjX",
  "key6": "HFDUvqKFrbR919smhyywnovtYfj9rPA6tpBFSyn3pVJF72ZTP8BwRNdBoETuDtV2SKFYnbrGX9zm6k9mf5s2yqw",
  "key7": "5xLWLk3sYbbVTxkGEqW6rRyGGFzjJhCKJP1LBAryP4g2ct6TbACsaz5eWSrcHYNyPXz6Kor6YaBuqQ6R7J5wG6jJ",
  "key8": "2r3x6V8wuXroV75o3WgXW51vtmmNULAgUWS4jWE1TmRQgqeLq9W5m9mWS5HbFJ73Y8y3kuxVnsJKNTgXGcKZMW99",
  "key9": "3bhaK8QoxrPYbbSL8HfTF4uHtKC2c3mZmYQBdpvqFswxNVjdTNg3uBzt2Zi8EHjeRpmTBMNJUn6VL7zF2v6Mts4a",
  "key10": "4siz8bJHm47Ro8wncvPoGZoK827w8ftyPnuUNiBv1T9MZj85rU7UcuCMsjRcuekCsQ28Ut2gCLFgNi9yi5Ah5A8Q",
  "key11": "21xtvEbQWUVBo68G5yowgJppBQf9onbQ5p49pcxmDqrpMjx8p6UQDYNJXBAUyMN2t9aHxcgYudqkbfdQXEwD1iQE",
  "key12": "7hCxmweQszvAzd79cTfJLHoFp9MR7t6fuFNBkhcnyzYuUimBt9BMsJLSQeX4HGUuQcdiocVJUxTHrZQUGHoZZXq",
  "key13": "2JPaNNxiN7EEDv78oHNapdXiLbZD9wrP7GZmdF81aNCky14bc1qBiqvcwkpjJABybNH75y4ojmCDAE2RorkzGRL6",
  "key14": "4R3vBmMr5Tg7Fwb6KVvoYPCNsTBvbPG4eW86exa81fqxyGzTD9bRSEFoJC42g6tMMmS5REEBpq32ziMkkv8E63en",
  "key15": "4xfC6d66DTGntEQja9kD7Tuz7V56AyCpaUv9iPhPYZ8rri3cwVLq9FziYoPVFaQSLP1WKUirFDsE3R14NBqj4NFS",
  "key16": "5r3h8DVwK9HNQouhCFWkA3UF6DuK4xUAmSUmNfcVjeuGsv94Jo7M7WbncD9icjvKbcFXcLjbzjXWmsawWeikLvKP",
  "key17": "23dLRpvkYGauo7e43SKAVf736ZWgn5HJHH27PSrmNJjqeUQmDMJmQMsd3FqVRa1meZRDwqH1K2JU29SDFCjFrqz4",
  "key18": "4jVDjc3jABZZe5L3Wa7WE9Pwicn5hsKfrod8kMLf1K939aMDa7wCBHF9D26kuqaW15cvCxEdzTC4gabScz9yEe1N",
  "key19": "2p1UNJiSd8udtLnZjiY3kW4oduHCAc7xx9a5qEPJLy6Yf4LXVsgBeKabwmqDpxyLDhHskrvSvoQJtesxCnqUgArA",
  "key20": "56imhnacJC3WPgb8tMvizXkywHeMbPt6PL2oXu44fSWFLCQmcpYMPgL6U3Fc6rP8EsKxhLS7fKdERfxuBW6o5bQn",
  "key21": "4Mtn4GbVgHobSyajCykJxTqhB3Sps7hGTGSJppKQcP6bCCzFvqw6VhXmE3YD8d1E9SgD7kpkYvq59ULS4GPhwJy5",
  "key22": "2S2woJCT27s5zWbdWuqRhETAT8MUSsbV5ibiHPTv1rfqvKB27hWarzBsHe8C3W2HMAkshCEpkk2xjvSdudP5Gpmx",
  "key23": "v7nw1yWoFVKwiHucwiqjNnNbYftXYynqc95X6jX4YnyxwtuQE6FcYGrzHqdwUoVvw5BhSJPdF1wp6Nr9QFjtcFc",
  "key24": "5SR4BxWvtZCWDH5LJ4bHpUYNTue1PaG4PtrhqNgeKsNEhEtyrzseb1ByuMetnQiDQapLA3mM4Q2ecM2RtDWySf8X",
  "key25": "34ReBVMucw9whMTuJFEvFLuzjG4FwWFwVcHr6nckR3UxBYmWr1XYLNrEkCkv8mVjSapY2obGYcsYnTjtB9Yo7jEu",
  "key26": "3eRqrsXKdR4rFQq4ndksvfi7F9AhNzmNEEk8Vc6wYBT2axCqrPfMNBdKw9PGGombTxm14GFcEgqdd2EpLvW2FdXD",
  "key27": "2SzTwQWT1S2g7Z2FV3LzH8VYMu48VUFCVaADC1M69VbJGombGA4imv7rFiwLRVfRRbUAYZwEqV75fzBtcjz58cK3",
  "key28": "3K6DbQhLceHyJS56JWdMhqXM1drWM3h4W5ESjX93BisPi1kKjqx8xJjttTzct3dKGbvSojBKmFm7t9JYwvf33vRA",
  "key29": "3JeJPTQbduA2YmC1ukyYgh7Sk1oW6RZn1CNvGvFRG6eQ5K6rzQ4iCoRHKrE2HDJC7wqpN5NHqEQanoB8cJnFUdyJ",
  "key30": "2cgW2gAqYdmMXQvFhkfrxUWpLUPrDyiPj6poJq1G8qKknocYUmMMBWKX7htYdFHzkQ8WAXcgbEAWHVzhCwwQK8tx",
  "key31": "hYKQPnPvddy2dKa8s3X9tEm33ZFKvDapQaUTx9pqhq9TW12wHsgCE7sUcPJNjw7rfa2j82WgkkaQmAGCvMoh1nj",
  "key32": "4WkKDPqpyeni969NhBRVbUWs44SWZ41ygzK84vqUCcGYWz9Mq7VJNCgRaofQ17FfH9HKxvs2oj4Kzp8WP3cvs6Se",
  "key33": "24TbyER6KFoVSw8VMa2suUFSbHJwVtyq5J9pJ8ukvNdoDzikYh3GtVTsfvtAgCtNrhowSkmy2445jJe3TAVGRH9N",
  "key34": "3bjDf9aEsuR6dPwWRi8idSm2uvYc7cXh1vj4uWfZ1QHN86iEWpXzzAx6k79hMKTHMoaKS3TbJ3PNUmutG9aHspGQ",
  "key35": "2XQDpHMF6RBfY6RMsa3yeewMcw3TgPTJsJdJr8XLNTMTZu7dkf8oGNnUNN5mKeRbwuDUChJ9pkkdekJWTMA4wqj9",
  "key36": "2DiCyZ6up3VuxM84PT3sJeHqckabsDMhAMNzEEgUxDgEJ71mH7DyyHETwmBKSwe9rrCoHgBhzVHMspDhmx1qs3f7",
  "key37": "5yihq2CatAKa9nf2U4hwezVxxpQGPRtqFNP7dWEc28JW3oe3arhzAAe7e3JMuawanKyWyR5gtLaQoh4GAVBuZn5p",
  "key38": "25RwCNNZRTaAyma4UuojMnGVoXcUac4TFQ34PS8tKFY3DZPSbKHSWXw6tuPo2x4NZEUULLb7MQpKUxsDUgEsYsmH",
  "key39": "4nrGvX3eNRj7sbmPA4SXsDAdK98Xws5BDZxXh1Cn2j7z6THdHp7K2Knuk4V743Vz1tMFvRTHTgxcdT6o2ViPACh9",
  "key40": "2C6abgiJRJurmk43nfZ7FTeZugjY2j69F2f26pmUtKLUoXvCTPZrbbD3986SLtTVAR3LZyyWnak9WqyGvyux9Ysz",
  "key41": "fJgEpYsinsoY1V1EY2dwKAgPNQtYqXpFb6wKHfaGAQ3nghJbXFhR577dnTmpY9jZLwLHZh1jaVCEVxADPdsj8Ag"
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
