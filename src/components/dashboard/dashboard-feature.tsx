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
    "2yN9LYEAm7vTU2E7shxCobiaieowBvwEVKY9rTA7BPi8PYcyxg138cS3YTrvXxPwG6z2VE4mk5gp3r813zQsTBsR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bctpmnDTJGqKqQfTmRTmGUJKdgTm7TZxaML4qqBwcMG4Z8j6siofS7x3AvDWfWyEjqDWQysABow6UR2xZmfM4Bn",
  "key1": "4Lx6mUwtumHAQggZUkgyFpVsoR5knBK21fqJZ7gWKt4298sQZbCSQDLSd5NPGMwbkahsXG1fCkwoWvbxn2ApKdX6",
  "key2": "5wQkJq3gxcARSKAgiQ9MLNX5nu6H34nS2q4a69qYFQFjqRakALu7iK73adPtdJhx2MWHkboV25WmQt7SMZVed7Eu",
  "key3": "5Tt5gAnPf8DNycdyMnsC1Bnc7z2uvTMpcJQpSSULBFeyLuRF8dCjBdJXF4yf5uLCLHey6nQN3755D84ErxBbXbz7",
  "key4": "4TtrZru7Mmio9kYAYU5QXv3SKoPeGdBzrFVrZjEjtK5n2bwHd5p5JCMQiQqzuKbS82Fw14gfLTtJ5Su4BqeghYSC",
  "key5": "2P7HrTvj6vq3vTo6SyTYa5XAj9SVb3pjymaX1PuSRRFQwkVFEXFFSAqHC1Sqj9i2uc9dSrLvf8vehiAUMb879LWd",
  "key6": "3Xjom8shuEdHSZeXe5bkRKfCc7AQ1vD9EoRZRoMtoxb5CyQf6y7QmcnXf7fVsxNXywYPyQLgN4B3XZiQv456ofdo",
  "key7": "2au3NYUGHHaX8FA4em4ka21xeGis4rWAAw4ui4LMQv95D5hV7o3RMBouTZhLxZwqs3N7JvmzRLQnfHFabMDCsYuB",
  "key8": "3MS9rK2fqHseFqCf1xW5vwWpDFfhLfAnBeP9QodCzkSjhPLMfiaGcEy8rtt4c65jHqFra1Fo76pjcTog8dAu7uqg",
  "key9": "5ahGWNHAfxRXaq7sbVmsRyuCRsRkbvqJ5dHoBxZcnXcVvrX2gRBoDjefsBUgeyPxBCSG2TFWrFbFiPQtZrNtWoM3",
  "key10": "4H5YjvYxXYozYmdXA7uuzvhsWS6bvTES1zGpNbpFUAD8ixWt5UNgarE4dTJaAWhkx6QkNAzfq2ddoifMuH9jmZeq",
  "key11": "4x5Qwot9PG8c2KfnRmW8BretF5NuLQTdwxrKqTF4heAeKMKVuU8pEaAhgYz7987bU8do6yEHiMcMKnqfvHRrbU1n",
  "key12": "3T6EgACGLH273TJUZkFhoaVZdU8wpeK7ySpMGHToSLowBg1KsGFoWgeSei9VYcNqz9XaGHnxkfbH8rYV1BrCDQba",
  "key13": "XwFQSyV7uKLaD4yKVf4DmMUKJEbwwxR461VUA5aEKDF2imXJuiq4PcupUTeKNpx1wi9kLyUiBUR9JmpMcMpHd8e",
  "key14": "35LZuALPKDZU8nfswb6Tau1RKbSP3cYiCqJj2TUu7wJ6PhmfEyAiV2mG5o47r1GNjVatnnSLWqd6sJFvymobxbLc",
  "key15": "5Wi67PJScUf6cpfbpNAnAyUPcvQJRwMv2ZdG38ugKcUsT2MMJzj6CMcLD1ANvYht6VRDKpnqYC7YWVXcSUw5kUoZ",
  "key16": "5wEv8QKZekJwoVLiZziBzmdWUPnchy4p9aFtBHPAi7KZUJ6ohZ3bA9cwKSMyC3uJNFZa1gXkKKmwjYZ49HYccah8",
  "key17": "cWzQV1b1Nkcb8A1DqsQwyigfQAXC3K8aFAte93AjMp2b5XN7iVcLsvkSZLsxD7uDmXqyMhsM2eGWLp661eBxo7a",
  "key18": "47J7Yi71jkGZZ6NFYauQZZ7LGuZps9aNVoGMkCdEeAgCGtmgLfbJohA7n3d2BcFpPD91aAfeDQ8zb7me1Q63avsZ",
  "key19": "2QD66p5bhebBFEEuDqKzfnL6KC2NvUMA8VEoMjkmhgSyNDtjjD1Rfvffgsr4Wag5PZ9rjeJy1SnntZuCJ54vadaz",
  "key20": "XxkLZGhvJFfPgdENi6xZzquYUfLS6EhMp4gmreub84B4XkvaUMenfm7Uk8YGosQbc4dniK9dSbkoz9hwzBngKPE",
  "key21": "2ebccGkU1nBfcDp32bZditCe1qZQDQsgiBUpXXDV9zUEV8vWMDqA9a4gmGNkvxELHhATGLjKm5G1YrZQ1UdoZyK7",
  "key22": "5ip6JsRiQKZxewb7aELVjmWYyTMXwpSQNuhdNtAzaV668UTGUHjNqUbwjcsKB5hku3FbrKzm1txnM3QT3QLcxhoK",
  "key23": "3e6hDxYqi9Zq78LpQja8Z22qigpnDG8bh4M6EWkEyqTpjYckZBv3xT49K6n4eK1aveXKfZX6G3UXn3du3nbzEFGo",
  "key24": "2hw1qTS813znqEo5SDwHzF9tDDYCZf9UeZV6JhSwzsoGqDn78vxndrDR2Ffd3Lf5MMusCmYRpq2bqACEp14q8a7h",
  "key25": "4pDJ8iGDQzGhC4insuR77ybCBG6wsKDtcrsJavsBXHeDc41XKf4J5E7NxzipcVBjxdepQwnuETdsXTBGKFkaAiPX",
  "key26": "4dq1CAWfjQNPTd37qgYm372tDFvMkFhiPxEuWXZyXnRchUbf3XwATDv3ogKpYeVkAHTxK6kvix1VscrUsXP1bMie",
  "key27": "4ZyqTxZWB7c5xKTc882MHtimwzDRb3Lh1wg6MnjZ5RoQsneDt6iiZ5eY1szhkQfcgrL2iKLP6RFPtsbvemuzqtLN",
  "key28": "2nsioKkemqQy4Rv8bGsVLTfC7srhiKs1ypaFUpWSZtAF1ggaXrksuZY8vMqnvWCZytcbsuUJK9C97xwm7TkZN4Ea",
  "key29": "3erWerWHwJVSfU8ykXdBasui5jDojqEDCUTupBTkgDiMMBZfqJszmxTRidnRmhc8e5vcL2Mi9CTDmqkS2Js7udDY",
  "key30": "4vZYRSEmMq3mfW83hKqcJJhqtpLroVr39aRgWVwaWYj7vfFpamRbB1dYzzGxdQB1FQPaP4LkFmcQPW7QeNMjanmN",
  "key31": "3VCSCg8G3EZBYXckc1wocLRLrvTVfMDvHePJPrETS6aWomNxMg2E3LEiuSYx22pX4QugjUEmB8ix3gt8pK2NCyhL",
  "key32": "5eyx8NoVFb6zXNkkszGGZeLFfBrFjb6ADtcoDx2sbnfvUzSsJb4ux7ZCeAenxCU8dZqyxS9sUFPWqrAdfT1P6G9C",
  "key33": "55MAWJE5eT72D4vgtFXUxkqCnSZe93UBP7v7AYS2RX354sMhbWu5Rk9kAvb3WAdexnZ9EDyKk71C3M8KwxUe12Mm",
  "key34": "2gakytVxb7GknzA9UMCPsuMEVwPuoW1wwVkHanYDbkgXoS65YFwUcTR894xtJyEn5aEwSj8RnsSbE8WL81YZzBg7",
  "key35": "2XtvD5GGFL3jVabCsN8EeQpKqwW2GhyLWFQoH2iDNpBrNZHV5LmF39WDbCmvn5XuYeBBwyaNUovu61pba6Shc1CU",
  "key36": "2RztbXRLXCet31gxK4XqpZVUXJ58jbcivs8gKtnW1cFLbYMm6aX5cnn8ppvaScENMzRmP6xaaTTPhqmd6eEaMrm2",
  "key37": "rCpHPhNk6mNEESNW1T9YRBdQ8PBJxwTsryo5it7NezAK77B3jjmy1NctjtHc1VPokEEFERL2eA5L6kDWo3q39UQ",
  "key38": "4atnRUTHnQAikXqhjfs8cS88LCWs59D9NPgr5PK8mBUYFSx4X4niF55xzDQeULceqKjsC95HHa9XS18b3ouB5j7z",
  "key39": "32gbWc9hY76qkk9KLyreqrBNSvt2jNnpX3kMnTyrnz44Md6ybfkZsmvuvbybqix99453WDHghHzyf54hSeSt8kPR",
  "key40": "3XcSiSYFMQ1NVLYxvMELgUtHLne6d2RSzx14cMyVBdFR1QLuiAZpDtoPZeBiqcZnfcTr9JVc9g9BShsFSJeUw3wV",
  "key41": "3G4wNpwVonp6szYdv62WWuidDRqVC7LtQ1YXieSQsAxYsgi2waKgkots8eX3YmvWrdcqPTrFUh4yYGpm9rW8TTrx",
  "key42": "4De7ahqBcUr3imaD95yLg3Tw56d3W9wSB8UiYCxAevZDnWYz3Ni441cJh69bBaaymscdPg2emTG5T4jwHszFktk2",
  "key43": "34k3ozES5mrfzk6SLUkh4DCMmRGfW2ohb9gRwvtwUZ3qaLFot6eeHmxMYPTgi8hpjRcLyEzYdrkUYiVak38Zbrbx",
  "key44": "39dGfg4Q4ZD6hsnGSgXtQi49bjbF9SC7SyyGiJqjH4o1bTE9U9pRTupXhABPbnvLUG79GXEGcXvUbq4THSqu3SoK",
  "key45": "2MnEWvPfg9oQVgE8Aocm8bsrsysF3zBHhSWuemj8E4qiPtwkWKHg5TVRozZj9iBMDAEummS1SZ1dqs4kyRrpYhBa",
  "key46": "4RQmCTPwfbgtALMf5T5rJVbqYPCkkncXdHXXur52EV5kaKRMa3tDYea2mxAfuXH5GzrBbTYNZtHWMbA9k8Sv9bm7",
  "key47": "2cp7bkc2N5xJAusWwr9AqVZF6vKcyd21vj686wFcVhkYdkRdbFw8xSSQm4UpBkik1dcDaiDhvFhykMHzp4jrb3qd",
  "key48": "5WWijkUeM8nWHvbHfE2SitwX272mkKMYQUtsLoypKoAZa8gp4aoi2NmQm8AGf64HMkbLcc2CVqHySPFHkPNeKMpk",
  "key49": "5VJUhQh2BRofcXgX6DuNw3Yqa8KoYuqXkmy39uLVCJ9fVK6bEyJQVXsCMq3akskCDXHMpv3ZB2X2jHJ2g6qg24he"
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
