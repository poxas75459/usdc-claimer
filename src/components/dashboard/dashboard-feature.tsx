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
    "65ArtVnwdMhFrAqEJZv3SLKpmHJzNcj8kSpzK9UmqyhJ8SkC7bvozX36Lp5FNoTpKg5P51miBBeVHurAvBmAgVBs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o5Togp9TTcbKLVY9ihuPoeKKk3JPsRZbSDSuK7EePUN6w6URkmRqtEGLfC3MNh2Q8kev5fnhCEDeTpfrSFJzfTw",
  "key1": "4xLCJPkPkhQh3g2AsKBYNBKaAVTsYikPNKAKwLiqzDwArTg2vt6jqXHyVBVRtoHt4ToCNGMoCsZnYkJYGRF6V6q5",
  "key2": "ZorH9baVzE6E3jRdbQEbAVaXWznE8Q1ma4dSok36ziaSMzVBNq6y9Mi1hgrCFgPBqq6nHXwuycr8EgvMSBwDRrb",
  "key3": "3DSu7WY7aYu3tNXZSzeV7o7yECV1J43w3DtXahG46xkHJK4cjpdn2MjJqov3UvmA77ttMeQsyHt5qqQ2Ku1mEv4L",
  "key4": "493XNFSosrN4bvC6mPYnJT7vLkrVBNy5ZnqsakWjn1kxkCvuk5knfBWYZahyphmYSxb4c92Vu2X4WQ1h9Psow9oU",
  "key5": "G9LeCW7B2hDT8MT1BbjC8XbgYnmYjxtphQ3yDovfwGBm4MQNrz2DFaU9FJtQV6DpPaswSw584UXxGUPNkoQHp24",
  "key6": "2fnytmJ1X4vuPxJSdTLCMkuX6etmGkkfVsqFmu7af8iypF8X8mAoc5T73oRt9Bx66YrxdCt8rjpUSt6XAnBFmKub",
  "key7": "5BFMDufGappn5FGGx3YCTBwiim4wkx9y1uXZixUEGrhytnGiWtuUxhje4jubRFd28FiHx8ASjPdhpTDwbLisxShN",
  "key8": "5EAmrr8H3PQcU1yMzsHm1aqCavpm2afuC2BMAU5aZgLhQKZudRD4EmfZVZMQnpdaB5cRD2q9QbGkkac2XaYxBBRn",
  "key9": "LfgbghKhkfxeh1vzP6AAgy2uTsNZ4b5QSkDfKYdr1iFJ4gHBryzgXN8yRHycfEKgZtgsHPCviXdrbi7w4pEGayW",
  "key10": "2ZVmmsZXjNvsnupXTqSCbDd6uTnepJ88NZAmGnKaLyPzbQPY3iobU2aA7RLWYdPu6Y1MKLYYm6EnzyrckC7trfHu",
  "key11": "ZtpPamFBfZdGomtZamHiLFL8WuvJ8ZTHVVED4jaLqrxfSyo8ztT943d7GSG48wKsvQqqZeLfhTXeDy5A6HspkWc",
  "key12": "zVfhn13QFj9mmFUrDJpLD4bu8P2XnQQRmJ3c6nVSzh4J7qmBezQWm5LgF4EST9okyuZpRfP4UNSZ8UQMhHBycJB",
  "key13": "2rbEpAu3qeiaKrrH4R4kTHryJtPti3SpJM6ykvykg6kv7MxcwiPgLEtgY7b8rfoxnkFaqEFrFuPU9ham9irQ61SE",
  "key14": "b8fF54vaCoLm4CGs3avzQ5P4gmcTzTPKdn7ASapa6HdivtRe1R43KzDyLKYr7xoQrtnShb4G7cUz7CkQ8fdVCrg",
  "key15": "52y9yqCFEzGk5qCPFpirjhHN5exsHTwW3SjRiGGF738PMHBQ141sHtftf4znHL44YBtStR5LeihoRsyCDtZK8Ec1",
  "key16": "5Ahf1cQVgyDhf553AWK3kmfcDHTpueKVe21rV7FDW2CCey5dqz7ckhBcxdCeKLqkdzZK8GKtRQBodo2ADpJuRQVN",
  "key17": "4gJ39FQx5TGGcBENsYEd17rmitNmXqwcU3q2t4SuMMG6KGs8CbQRa6t2t7RPCc88W8iArQnHLJx294pw7zrDqQ9r",
  "key18": "4govuLApC6Z7g8mGq8oADLrdi5UbzXL8pEx8a8gEMSy4WCyySX2pXf4xoN56w7hTgC3Miji4kEPwtqGswN4Lpyk",
  "key19": "3qFoKFMsATiEA2MqC35mGXHHMLanVGZNuxCoJGXE1iMuUAhreyDY6D5iDywhu6y3artfwiAvD4GfiBhb2FPf28vg",
  "key20": "66WRxtCqxqZSu8iRorypcNSmp4GG9nVCgNTfGNqMBxGFp5G9sSuXCtS59B8kgkLdXVpB2sFiowdVLUUGi8oWuJmh",
  "key21": "j3ZVv5eQp7YVrbAja6qX3wvHyihTbzXV7PdAnZCYckopBb7JAMoyJnmw4QgxhYHQXBZFg3bLP2AwqiC3LhRA4vy",
  "key22": "NmdSTbEgPZg3AG76q2xD8GfRgnHAjkWfKMZGMgK5GiLEVgB1F1fddJnvRGmbZ86iSfNPswPpxzee7Fm9iQjBp9Y",
  "key23": "3daYTJvFCh2EkALY4n4XvpfwzHM4WS1d5oud2YTeUMYF5gaFaMqj4dhDDYQseWtBqE5TNBQu8LbowxrMkefds1bK",
  "key24": "2BGAMD1Sj5Z98CcUJLFV5Cm3AGHVdYenjBHmpW7fbo1CinebGKDVqTb6tNb4cWq6XksdQFxLNvCWhdQ8qNofzRSJ",
  "key25": "nNrFHQdFXqj9pQ1vupZkmmuh9XTNhTSDxji7gARk883ky7bTRLmgREYKapibYw9CCYy9kQNRFGRxkRGyJHmDb9J",
  "key26": "34jzABgUwFwH37qM2HCMzAqsmecY6zjsTVeQjW1DFR6VwNrXc6ige5mF9Rtajh1JM2xSDx9TSeoHrdkHk73JBCBh",
  "key27": "55v4grYoEYx2cgYbgMEx2aQLyHydFdgCs5ae2nxBHG456NHkvAe5nMLZYHErCNSpdwMMDxCiEXnFURAMeZE92E6T",
  "key28": "4RoNeSFSjMKQcZx55WG1qin2XKn5acngNdpmd1QtnavNWgNGVdDxFypK3L9f2yfdFwskeB2L38cabjVscG7yusbY",
  "key29": "g29FJo76qKvmFLxEqYo1zbRjdisgckASvWdvBTJjQAuvExHq3o2Mh6ZPJ8FVK1F3QYpT5Ac22UM468wRpYiu227",
  "key30": "3M7h76YJRCu7p3QLK9MmQzNbH5QQ5CbDvK3GWH6TT7XKAX8FumHhHvcuWLYXfLdfXYjx2BgzNCWo955QVmvwABr5",
  "key31": "2onPnU22yymv2ynrcHzVagSbpeL3Qx3d4VCGw95Lw4umHvGqFPV2BeF9ohi22tn3hFLgbnRVNXdEuktpLc9uX5bS",
  "key32": "3LCUCBfzG9CEhrWJpaJ8kquen79tbbnt8XXQpo5Q1mmkm48fzdgqJ8dJSqTZudLDkAEZvEMEefbkbyv1MbiRV1XY",
  "key33": "3fQEYVawnQdrWXmpBi8ACDtj1qnTJskU4Wq1rfLYrsDuM5tdTthSK6R7t3YE622c8vhjDQgbbhyA94scuSvRwKzj",
  "key34": "4gN8mmN7BCakccvYr3HyFoSzzDVxSBvTGJagnNvQBxZQw3ub13eaNEQeGWNz9TkX4nn3YVAiP1M1v4WDPwWngSjr",
  "key35": "5DaC9hQmzNJXUt1M9PBfPgtYJ3tnsawqGfdG6VNAmAf4GmnUvtzWVxsCnaQY9qGCKGQ84zzPcHcE8RnUW3NRn7Ke",
  "key36": "26aCjmsSsNTuh9FDb3Lrj1zt2LrXHnRs4HND1TWq1zUNGrdNtzP6Ltj821Vaut3ABjhrzXKANZj9vknGMRqEsV3h",
  "key37": "2wxFZHN6ZykYHsm4RPmrHJuAmvoH49xeDQBSVZDDX5ftLWrSAedzEYuwuepUjYFtJNSRa6ro1HN9wZQTpbHhSk3w",
  "key38": "2ZCzEWGWYx7G9RgTyHW4LwFQivnmAw4motmpCkgSTo7yfSDhcw9JQMzfzp7QzGvcjNGpqT6kpwbJYDuckgNcDbb8"
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
