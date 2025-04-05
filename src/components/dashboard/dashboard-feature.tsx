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
    "2FEzwDLutA9UaUv7xn2Wzk2MMY3J2jZz7FfNXEJAteE2AvHQF1WXt2RuuRpjvHQSss3g4sSafNQwZ1vNLJ2timSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WWDbmfBqNKYEGFQXP68N8nKHwAnztVvX3ikoa122TupxbD1kfZAp3G27sKJHmVZN5r9CodU5GyPg5qPz4BJBS1j",
  "key1": "5cA35qTztNXZaCME7jkM4KKgCRWpfsFL3BZ3phgHuB8YN5hbQBLKTusVbSsX9HEThjtLmCzLG5Vhf6sqA1Y1WZRm",
  "key2": "4SqMV8wSFkNYkRhqG49TuARFX7PnhfkRZc3RQhxRWh46qc6zGBQhgXJfWoPTbxZanueZRQQhKvefZsorZWrejjUz",
  "key3": "4rQWs82rwGp87iW3WvwrV6dcFArhrYLooG9sarVgUSXdMe4guwBM7pQUbbLv9KJVUipqiYTAaLMf7ogjoauU3SJv",
  "key4": "3qJsXPeVNpJFXgShpSMh5LhpvXPrWMxBx8H9zvL9uD4jhywbbHB31neAU5TVyGit32b6xg1jcw4To13nYqwdsHVq",
  "key5": "5KKoiPQzmtVBsMvHkSafE8NnCu7bqCadLcunSRn7AQ7qonuBZAwUviz6widx2FpzPaqVvBbKBfLmAEL19fTrHr2Z",
  "key6": "P6L2iuBZT3wTj7xSApjL33h8Wk38P8trYtkHT2gNqWBjC5BpPC9nPeqNnyAzkfPvUJRzc2yUDqSkAqJPxaW4Ypk",
  "key7": "65tzMWG9vhyK1ba6NtE9wn4rvWSBMkXwTgMJpiqu3YwewC12jCpvQ4Pe4eNzb4RzV8v4x9b7fqBYakzUyPVe4eYq",
  "key8": "gN3Wq1rD8NNrc3CeTLuXrpJxQVGrw74QpPC13FXH4QKziM2xrKK1967pBTgrUnPXH8ePipEbNs8pCBdC1LFG36e",
  "key9": "23txJNnuBjP3pqBFV4oqMrFxhYngWQSx4WCwaxjgCYA3dyxoEvSGM21CFJTXBFxZJLPajKepVFf8gX9KwksL9REm",
  "key10": "5ssWdLYNZegBxvxeyn3GhG6S2WR6NJkQ8vwdPmE6CfPAxuQXRAwGZcsTkohVasznJCBmXGP6t6LVrGxHp4Ze3GNc",
  "key11": "5xZEhav1E8GrFn1Sxkv9fFSymgCzxFNpEy316NCbQ9A1zL8Y4fWQ7HXt5pxkvT8L25FYbTkfaKTw8oAVsePW19Wr",
  "key12": "49QXKQSwRAtCainrHS4tfYr3QTXjSQodZLEQcUG2oksUXVZtUm5J9PYzjWpysYFHYtyiS2BauPuyVaLaknfk2Rms",
  "key13": "r85vDPmJ7zdJvcJPofNzwBZXv6pPmmL29WeYZGMVqHPfsYkMF8deiEVa9q82Ea7d88jUVS9i7MQXQQFpy5jdj64",
  "key14": "3yxSJefHnWp32V48j4g6vu71ZUdVS7uxEwtHBQaJz35td5ksTn3A1RUAYmLvL9L5NvWC49KYCUoGefsEomQSsJJ7",
  "key15": "rckzx8G55bYmCGb2QaxeH7sXk43cJTU7umXtHRw6quDA9VLMeFgJDKHPpyvv8jfKq51eeHG6aspEdAevaNTcdPq",
  "key16": "5Y2CWQ7U9vuqWtBxjE4YwegnVqRHYSXspnBLYfUrCwiGCFMeVzR4Ap6sPUduyDxJSLoqWcaD9Kjmb2drpS2ht7Kv",
  "key17": "5YDkFacjCMKD8CPVZo4ytn6Ki8UvjwVo9arDasL7zBBeuAMPcY9sdVHPJFDMQ2QWkPL2HDakBLZps3F4dqzh276V",
  "key18": "3UJaeg8UEeLTD2RzvVBoCtXB8GrLJDStFJkqPLvtEB2NVf7QXyqXMMonKDJpATCN8kkFifjQNUhaw35fUjnQ9Pt4",
  "key19": "3JJcGpJa79PnxTz27bB5CYErUNAC8KLqQZtqZwr5XBHd5YqHb6jou2nM6bJn5MVe7BcpBxPcTB3qUaz8ocsy8wn8",
  "key20": "4SP3FsVFtdwP4Dnm2ZsW1Wr5Xr7vTPAhnuQt2iKqJhzVqRsPzHTYXJ6EtLXLhmXKN2qehQrQB1kjKQJKZ7pkNnC2",
  "key21": "66fr6qx7xWBPYBid9U9ihPVpKLy6MEzBFmFKtTq2ybJmcYvDJLDctAaym54j9TGDMkeosb4EsAMbPyrVMmgfom5N",
  "key22": "4vA44no3FxWWrkC2QXMjNvnx7fw7TFEGG76zob7cex28KVafpQYqXXporqr5uzErogZxYSecmT18VUr5DrYFYptw",
  "key23": "52guTiHAqEaZ7LBqPqZTUGFQ5csMMku3yQJSfJcS4msRWEngUa7xU3DiRsFm69n95kmHXsM8soVwMeAx2LhQ3Sug",
  "key24": "5uwV2gBBMVmBMQYyJJ4dArTwk3WRvKWG6uvXjPnopkABgc7STmuvThYGKUGfCjgphgtT3LRSgkzVZN3KXTD4DVYU",
  "key25": "HtAWV8u67RqorwvSMTRj4ZbL4GrEWbAMYUvRscNeFWFjDYDqeSb6p5RabPjFepEu4tQDHotV86rqARHidLxuTxt",
  "key26": "5A8TH9ARDLzxqqqVehFHMG8P5QiHCRKqFVQCJGkrz5UM2TWBrAKGnRnPesDa5NRpwDZNzhSrqUr5vFbLDbPt725s",
  "key27": "5BoozGtP2LceoSPMb7RHR9WCMSK6sumt9xfjszCykFZvuUMmgA2yxhtFnV1WeQebrueBngyDVsJoprAJ2pr7R64u",
  "key28": "XWkbBcTRCy2EXXa5x1iZ42PXMb4tUXN5wpU7GpfjTehUqDokn5LVux6E5Db9BNJMvK7aXYWMrG4jW7f2txiA8aK",
  "key29": "3sUYVCm29cjRHpxrouTRv8tK1mdRhd3UDM2tUnCxmS5kaD2GfUYuzjT4ZTY833ershaMJL1mH3zYBHr3jBgb72gD",
  "key30": "486d4PtnXsbKh3QKxGi8vxCXKim1yKMDkoyCX8S8w386mdWocdq4b2uXXWatyXyFFUHTQP1yrwTz32UJWAy5Ua4D",
  "key31": "52YrKBcNynsDbfgbCJH89LQ3VXFphvefodeDy44UD2PvFziDTvLHyRypCYYBMjzxaESo5m1cnZh8yELnt2w9zLgb",
  "key32": "3XnwpzyH6DpE68sHyJXxAwUfgcn59JE7EjrqPNsutNrSZteuZusXBN9aSjPvE2X9DhoGWbpLBibjfGAkKuwYtMoQ",
  "key33": "4acULoqcDkuBrCMdvQLvjtJY7UBvH6QGEKYd3KVZCCXMi9TkQumLRmtcmTajrUsdUram2GowjbcEYMwDSgHszDhe",
  "key34": "2PbMqgJwuyqr4ha2CFqShrXDBbQZeTzMzFL6XNkN2kKrqaMhjATs1YjPsZXTgJyKiKN1bmMKuguVQbNuU95BoQ9P",
  "key35": "2x562vcz5mNdwR42SPpdStGVyXCWqBckvZu3ajVhokfKQDADjohjmvLV8GkU27vK3WvKiKmziFZ8tkfNwz6xFfhr",
  "key36": "3jBcMuXWNomKWtGs3vXRjWku4oxXikwbw332qUZYteKZKbjdgj9pB57akd59yoZF9ZaXDj3THKMY7aueRKzFhNDD",
  "key37": "57ex3FyG3xS1xLorXdVYKreZLdwq3beQtQYkrKTJPQrX1SvDC2t4DbZ2pifLPUSv8vTTJMsiKukdVozg1oNgbGFs",
  "key38": "3tyaLM52usA8upVJDUUGivP7hoUnWAmrpiEYL2vw7zBtH8KZVazb1UaJxSgXFxETMJmhMf5pA1RcZFwssnYggF9M",
  "key39": "5HKzn3r3rv7vZBt2sFcjqikycZ5fNNmfAV24P7aKMVhhUm26t5dweVsNyBGzAd3oLScPsyTZNk5R3MfbR1QKxqj3",
  "key40": "4xWA8ucatyw5bx4h4ti1e2NABY5LA3f5UvwuDX5u4YX3TbCMvkVGjiGZNSX5BUtCD3S2E6fUs5sCZevrgDnijWbm",
  "key41": "3rmQoH5tnFJhaVEJ8VZToynYvh9jFGjcjfACwyH6FtG1MdxE1sdEcBw5GWsdEyAwFRy1kBkvr4ok2p9f1eR3x4q",
  "key42": "37ZgCgeXLPnymmptdRYiiPcDUfvZucXYRTqGWkG9NEP1f79XZngPfCuAvJEB9DMqn218ZuWeJGnfnBxqE1SAiSCs",
  "key43": "34o6VBmeTNWqE8HeSJEt9hLgDJ6uujXM4oHowrtBanqy8Y7rGHc1tj7fUeVU7DnihZ42boc6V9DKcFh43uXFpCvF",
  "key44": "3cx1uWGpmr6iEXePSnMxVbWGxmDhnBQWvecMWzZauPGXsK2Fd52CtRz8o6Pvu1bXnaW1BBk2Amg89eAhFuc8hXgj",
  "key45": "BtxibuHsWBpL7LvN73q8iLBPZyTAXBLzUpxRthpEEko46crr5Domy5yRMAJ7LnAxUSHXzejZzzdawgx1yv8g6ED",
  "key46": "3wfymP27Aqx1gwqgMHHNCvwwfTPbqMB6UQu6zThWa9DBE6mZwFAAPL5fQkzj5jcQpDraxRYJLPCKD8yGt9Fi4xJo",
  "key47": "277cCagLXzvKMVNEfnoHed5zovj4wRXCVYCzjyfvwV1sSWXUfAFsL8u3fFVMkbpkt2gFDspjPuw8Pe8dtYWMfG1V"
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
