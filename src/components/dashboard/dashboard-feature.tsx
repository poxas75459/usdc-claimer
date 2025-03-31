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
    "nT4t2wvAQep9qabr5Qn7mpJYTnqoyyCc9pLDqTtHnvVmFkGSVVsH1RXDYEVmdRSKNZ1mao8C3Qzj5gpepm2nY7y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZGWUADwXyiDrwKu2S3eis8A7xzAtEdyEJeisv8GznU8RNX7kfvrd8D7813Bw58HHxHg2tuUR1SgLgiD8Pce9zrJ",
  "key1": "5BB8hPrLHqbYztmR4ruvPYaKWTkbpcQr4HxNybnRWRCR79Cj9ykHcCGnubhVpdNLxX6eGqK35TxCah1GUYMxrDyC",
  "key2": "4fkegXsUC4RwN828Gswt6XkzjN46HKvQKtckrx5M7tgsYh31PqCYD1iZZsvhiJ9dTchJtQcyaZNCEy6FmFdFmMku",
  "key3": "2JRCRspjfn8bRN59Vyjw2JVrdqWtDfbUciR4wzxbh5qFJMhRmKA6xNQG35NNJ5Py6eh1mreCX3eFNXpk97ETMUxc",
  "key4": "4KPJRahxeLx7dAZ7JCc4qvjyrCtCiRvsmNDJ1Yzr9qgyA1t2jkj5wZEbjEFW8zmn7K3jW88p6EADhtjCdt1jRsYH",
  "key5": "47WuaQdgyiaT4Gf9NC3bGz11ayCLqcaENt2P8r2t5essefJnEBdtbNRRku5ggEm4xMYaibvvKxuSYdXDgT45zLuP",
  "key6": "5rSk5s75djwXF1EzCg5t133YJ23xWokikjEPQbNMMao7iqEbZ3rDCBz3cKAUFcuW7rzNwJUubicZktBEe3Bd8DHv",
  "key7": "3Nv48EBTKfC2bGBCnCgn5x7mfYDQCuq8xrE4aSzB6aXfRcyDGBvxufBy14i9Ub7UbAwgzTMjPbFXpSiK6bGLKap4",
  "key8": "2heLu33i6PUpYStgaWfE3x9r2u6Gtar5UQKgmtS1FAfaKvixh4E9WSus2aX6kYrU22CKNZqmfJkkEuXjpu2Uzqok",
  "key9": "23YMEBAvaMUgB1tw83qHpgovr5F8kedQMTWCJEdX9VbPHcZV2ARzCSQBBLejRDVNoF3jgepNjBwfbtZk5SW7qtKP",
  "key10": "23fGHetHZCtnyttLWFJwSgTgvVVRhU6EGec6yNqt3UWH7RYs2JPdFdSAXMhC7bbE7v8FTV5CDVAzAMQU8961yBRT",
  "key11": "55sa7DpdvVF93MatVRgczHg3zRbnc8Kk38J2Phi6r8SJWSWwxKjPHSDi8cxTMbQQsCWGbxmAyn3L6gHBRjciRspX",
  "key12": "3p6NBSCwwspzrqdxwMbFE52DhbgDZypt5JJ2o5c4v65j2HDiixnaJYQzk4UHoFStihSHNUHwijKZo8r9WgNyxBim",
  "key13": "3WJMBxey93EGL6tvgRxJ9EYzRggwE6R9tHCsbY1HdFpCBksLNYiSQXKQdcG1M38eB8Rea38V6UBDsNsXny5KRdQf",
  "key14": "2gbL3i2Yox79mjare3i2AMXffpwdNvh8aGagDY6s9V8iGcmetw9DWNzgY3Xe4GZccRdVqdVuQLHDG3PKV837RNHc",
  "key15": "5hR7onvzU7MM7TLBtU692SeWpe9nChXURNxEsHQQW87VwxdqGm4MpN9e5BBR9fTwge3EdbtWPN1MrNZJfSFo6aM9",
  "key16": "2AaKXsaWjJ9sXmpN9tKTYVPbgjoy2xbiBgQCmdvvNdhVCSmPYHjBXxD8nE9DgdEbfSKm1H3GZ7cZBp3xcTDNje3N",
  "key17": "4NTdGNbzSRQjauNxwFK6FEzTVZWzDf7GbACTmaLBP6rYXb2ocCnVzH4gL5KXmV4MfPZXKWiFFRVK5Sv5n8AR9Eaw",
  "key18": "4zYr5wtGcXxePKWQm5WJVGHzAB1aHhrJTcVboDgKJgLHAxSNrBUqVqjJ8hAqGLtxRF2YhJ6vLFDi1teXmbHq9M5X",
  "key19": "4M6HnU9WfhCKQPgUmkRn4zkwhuBfTqQ23HV5ivxFhhv8BAPFy18PsLVoyKKWeJVrT1REQcy9humsfssNfsbvH3Re",
  "key20": "Jk2mv4P3E7ojjSAZGXqc2Ns8kKvgh6GmxsLndpyrjHRkCiHBg4ywDgoQdRBBtiRQiCk6NvKvuvim6AUPh9nGwzs",
  "key21": "2tpLVjJ5XmPEYWTUHdUxxLPEYCPzebJaekfZKdj9xSV2KbFhFGNoaiECr63Wge65Cud3bSizSF67WvhSxqxzPsL7",
  "key22": "4wFiNCabAZQeS7iQRRYCwwgNsjhWp9vBt9oiMKshEufv62XauxoKNGBwvGbxfoQ1XKd2jZZPfAczDNFsSFvHT2pU",
  "key23": "4hNqT7AHkhtzePcQ37qwBqww6eo5AwKdwzQYpm6zYM5jQADzcHAQyNKv6ZcKLesDLvNZQpuJJ2kgPdYA4D72UEPY",
  "key24": "5QzKfJ5q6ACLPSESnAS3wvArTeCtoiTxFvH9zY1RqPxEZTzBsQdiVw5CKpQe1diQcitEHb3yXvtq2qfwH2NBNXnd",
  "key25": "53CS2mEGYBPT2Eiue45k8FnN3QUMRhVCNPfiiSYuxtKxt7TMsuU7awFd3JaQzbv8nbqcUvN1S6ZNLUrYNVKA1EEx",
  "key26": "62LuMS1sqFqxMh84tSWqJ3sdKBopbrWygGg6kUR9neaEsC4wVq2QMu3rpXH7wvLF4gZ6N6JJFKr2ePuGmi7pGr4T",
  "key27": "43LTr7Vb2zp7DWakmwPXv2tdqdT3idR8Be3qvYZpDJPiwyE1AYvJZW41tijyhZu8sVdwV1jYYX24m5paNdW9XiZH",
  "key28": "3NmzdcaGrpELHjcpnVPoTFoBkdDpAKnafYcjqkN77rib3Z1LxscSBytfpPFqq6J9YiCJrYmSist7nz9sVs5ZiFpq",
  "key29": "3c7ZHRkZjRg8q4aTch7Fo3d9dTZnqdn7cvpzy2GT7yNYhRw958S28BriTYx3S7UUqYWrUhr17DQPq1aD8JHUxa6d",
  "key30": "52HGoZG4oiGNVT79w7Vp4JNaTxQzwer48LuLz7aJr21BMU5Mk37xBeqUjWTT3749hq3m3YarWbDa4ymqWEJ81Nfg",
  "key31": "3eurCtjrBLBND6hkanoDdQPLbtw5wP5z38rSKPLB8Akrw88PFLJdou8SVBKPnD8omwaFB946MbeBS64EzxNxLs7p",
  "key32": "51L6tSWLpxgve4MbNKFX5UeoisbgCsbhtEV127qJ6Tgc7Yrh37W6RYqjMmQn4ffVF9W3qFPdVRQeZYqhTfnnLF8E",
  "key33": "2tikvr91JaXeEgJqbh9HSjcTsLcFgn7tn7rnEYH8gatyWTnf2jSyLXz6Sjjx5CkzNX3Mp23KikHwLffNe8rhBuaZ",
  "key34": "3xndgzWhjNvZyJ7x5t4KDGrhXAmUGPSQLSJgEb6tKkJpGovv624MDbDjXgUy9xFjjHDgsdJjLtA9KTmWHkQnwNvd",
  "key35": "5mEiiWAk4SSQQ2y3ahfVDj8fEw43hyHGEVojLTCasUHyawukD6HByCqqQxvYJJ1W7xXaQ45R9MCTnY9rFx4rKcd2",
  "key36": "39vtu7mDJn2hJZdiora98kDnsgi7uQyrBFN6QmLwJjs6HhNds8svY1pkW3dfetZrNW47LEPnu8Ub4soNtJoHPvNs",
  "key37": "3Ezox6ZmUF79QygdZ1v5B5euBAmPG4wezqt5RQT4QGsDJAKPYkbdcsS6rudyLj1YEPxXGgE9rn6qRgNj1jSZKB9Q",
  "key38": "4PXfJnM4kJXN72tzGQCs5YtaxVdQA6qaTjHSnWr84RTGqiT7EbXToAVPBe74vaXJtTuoJsYuv2BVmRPA1LarHpPE",
  "key39": "2Xonr8nFoj6wrYm4EU7iX8zfzKSB1AfXiTSgwSH44y4J5xgxb4JzpB8fXP2xAbqD5JUXp1w9pXSPWXSxRs9fJCxb",
  "key40": "ott9DTK8dDrUSW25qURWJnpTZX28tkh1ewsYZqtY9TfQT1CwhJHsNbZ7hWJnvjhhrK3hqYZ3jYuffebowmJFPJd",
  "key41": "67Smn7FgMbQWpb4XJux9SkXcgrcBHwssaRMavLj4Tyuv5cYeQxGfLJLaGn4qWFcc6FXWxDHoHu6SzCvatKFZpGqr",
  "key42": "3NUssVEGr4FukkANaDmHR2jvCgTv9cQFuTXSeVweL2xxsQDgfqirR9Hq2fGJufGvVEpygYzxgfYR1hNSgnqcg4ZP",
  "key43": "4TdNxpRYrthb73DHf7VLpiB6c1TGh3Ar4a6pGEKzNmqUxZcsAyUG8kXMtsY7DZ9j5STA1H6FhmYb2Sr9TEm53N3x",
  "key44": "4UWBN5935ERM5yZxgCassELjsFT3Csan9Svz4GTqEgPJxAWvXuqokqP663EgtcDtmMyvRd2FJUMaCXE92qeM587e",
  "key45": "25XT7Na5QN3i9dzTRw11UTZChQET2LydYvCdvXg3swiVnzHW8WC1Uc2wZ1RJhJD6Moichg8FSWufpHvCLfT29avQ",
  "key46": "aBQZqChsHRECGchtWYgLQN8ihAG8wPZ7Zwm4CkLKdZSFxShZqzFbpfaVBL2tzXbP7GsBHWi6tiCtBi7fb2PV9We",
  "key47": "4e4DCfjYWD6HQrHmdM2nAeitQxU8MLqgAJLAEtApXUaLzYrmBpyCkJPBeJ6zjJRP6gLmXi5wz3vjYLDiM2X7vWD9",
  "key48": "5L9HWtgWmYpzsansMK59jvgE5tySLSeRTe73zUYrPrJuy5gPVwzCp1EWXVVdnXo1T8x8UNoxNjzeX1fPDSnsQpNW"
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
