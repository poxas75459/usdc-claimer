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
    "5hyimq3esx1FLEiwDQ674EupfMaRnQ2ZjkmVigqqRUniNzssKHp8RvnyX19gdNiF6pk6QpL5akH62QuFmNfyVzFo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rqoi5wHoCMFFpGvQcrwJFVhCpQxNP8zPRMugTyw7edYBUjNyVwY8uRoEmEpwguAjYP7MS7tzJGLbHAwXQ8p4YWR",
  "key1": "4xgSjhTv62W1S6f3VKVKQbzJPpXVU5puGAain4b5wicsxGS95bb3Gn53K3szjE9WpAYNQcJKKgguEVhQxQ3TKLNu",
  "key2": "5EWHjPV2eJ4Li1LZxFUYd3VzAeWjZR9g56h4JsH9oLESb6YwLfaVDJputzHeR6HDoqVbSSAVcjH17XNcXBXVD4a8",
  "key3": "i3gPkkiExHw2hRFeh5B7ycE1QZfcp7VQaWp8CHEDUzAMwNtvshsGGFqiNPk7WAHahp5A1ghXq6GYLurRMqddL6X",
  "key4": "2hbd8FFXhXF6sC77HU4F8i2GhiLppjx3G97diD8p668L2iWFxiJnNir6YdYxRm7BMGWUA2H35ijRb8qvDBPpiYj9",
  "key5": "4zvNNfWsYXXaZq6nNRJHt27VCsYXeXdVH9eRJYrR2NgXjiigNbp394BvB6K9sAd8V1GzVYjjGKqmMvSwvwhsrFMn",
  "key6": "5JsqYkZxrnTynuX3X4vtunMHvkEfSxVHD5BsTAy9vpExxSXKBGu1p8tyFAj6vGdu42PzvktYT9TAi2T3V74EWiNy",
  "key7": "3mCULv35Du5MSDdfeLKQZw5wTofJuRdGYp8Rd9SfB7cy88PYvhNrRtkGaGJ4Dx3mXxWeeW8CAYaMUeqts6A7qnRa",
  "key8": "4ornuyCRrQ5VQ2AwoTs33NZF5ePB1TwiYA49aR6prxMZ5tgnfmFLEapYEWYakrssJJM5EqBi3BhNhDB9YPQYNNGh",
  "key9": "5mD7W5Voaf8riqGSqqy5Us219DyhduzhEkcdzn2gVb9TXDGB3Gfu3JQaiFJSC31bsfUdBZkFA9K9uB7BgXE1juaU",
  "key10": "2Vm6QTYHhVVQEf7bYxWyPXHXuThZQaog7WnJMLdE6reZ8xVMbsZV8MReLAvx8tRjrMc1hnHa1ieM6ek9HGpSRbZe",
  "key11": "5eFpFMhRkd78KWFkMqjE2Ny9ndRpZcRUNVCAX8rHDQ4qVXGvjxgvkSuoBjtmdNNdogeXfvAFBih7juC9qreGJNtD",
  "key12": "4eVxPqee4Xh87BE3QYmjgywMBoMu29GyK4wUxubnem8jZf2QEP4Jz265dKzimsT4oC9i6kM8FZJ2YEoy3kVydyAL",
  "key13": "41gYdqidya3Jc9qdFrM8z1A3XqFnL4tZWzNzq6FDW4a14cQxQZMrbQovefpBDFGm7Fgdy9zcLLgtaLGgNk5FuncV",
  "key14": "ChZLcCLMSbBxfbzgST7bnuZpnTn2ht1JDVhXdg2mQwJfNbXPPZCFTmD7pYfMEAeDLcLZvFZKfXjkfddkmftGRkR",
  "key15": "sYoCeZdMphgnvUNRUfBKDSvjjocdwW5rayeeSbX8fXds9sBKP76bGW4emjx2PeV4ab6G9RkskegYqVHkgsRY3JB",
  "key16": "4bNChpW6H1AuauUYcc7aKEzgLZiQ3m3teh6P436ahSaGsNUauP8T2LZu3bqB3BRNh4RuPrVkPj4yCXjBPeg6WaGr",
  "key17": "5XctFkayvp99cBLTGHUDUDMrgZ7GuSVM6eFwEDTEveYt2nSXpgaZK95Y9zR158X54YPq2m5n86bFyRxNfdnvNLvL",
  "key18": "5s5gqW9Zj1vHvMMVFMxs3M6vSF7SUs8sTDgpo8mQVZoCxepjQGKECYkvw7wMgM8k9mAXENUDNq3BTgVQLrf2A7Lg",
  "key19": "5wvotHLnPMaLqhDzJGkDBrSRZb9qzEo2AmBNR1vBfa1SpwoMTiHt6e2gFBgozWrBno2E2WmfTiwbm7bRDMThP1TY",
  "key20": "5N1R1r8VTvFJQFbSX1vWfsUTPsyzzrSMjATctoHeVG8Uhhr9SMNkGjaB77sdDP2QZYCaQxytibkqWyStSRY7UBgN",
  "key21": "629s85z9y4gfhFvvencqTef1RYU1dtCPg6MGdJPCV3ep35GHumAkAi1bCRPbCs1mWZKKF2FHBqEmsQ3XPAchu73x",
  "key22": "21NQSJ9GPSdMXfqGJtvKRuVEg7L6ZUCzp43B9yoFCm2DzzuQJenuMtZfQnNJwnU6qKoyfPpc1jP1pZHjbsrxtmmt",
  "key23": "3jxBp9KQqk4zeryabtpkBJr11SQZC11ZC6jcMnW7jFpv7EvM76thHpBGQnUUBtNhqsBusys94178FjZo4zpt4GQ1",
  "key24": "7qFY59KZ31fYfspMV7CNNhMBGWUgAa6NqYeq8kemB8LuBwZoxy4hiyE8EsEpSPtnPhx9zwuJ8bRjdT6ebn7Ww6R",
  "key25": "4hoF2fk93mxu4NdGwCAtwyMwiU9UE8Yxg616fvXmCwZU2jNzCXLZgmbUw3jbPq4Y9Wbjt5MBBT16N5sG1goXvTe8",
  "key26": "5ebDiiWdu4x7iptuLKeJmnPLUYpzutnnGUPR8ZS83dMztnbY9BRarXXz17FX37LuyUwwdagvT4eM2NmX8KFfBxGu",
  "key27": "36z5HnwVEcfq1tADSxnk6WSmh3s4cjBdSEKXBnZfnSqzVo1oscvVhDdXnnmNjbHVfL6kQ5NUM2gFDtSfGHRyju7o",
  "key28": "5cBRCs84DT3drzie2SwiXRjjsLEHsxFcQcHd3bBSnpJ9vXkcxHtLe2p8FZtC5KVzBq3QQTrmy5n94sbsJoVxYzhU",
  "key29": "3pLsgtnp8zWF8zktnNy2ixkVR4HmXvhJ9Qg1n8hfDQ2FTfdruqPqbW6im4yHiRKyV81w1PUseV9jKwF3N5mCiDa2",
  "key30": "2xtw9PRZLg161yYpTvN6zhCFhBYrpYtA3RygoDZVvbzTxqcDBWhiEXQnW4bfaXNzMWdDZXJC7WNaA2jDwz12wdgV",
  "key31": "55YH85z6KqzwL9wm6v9EUJGyQ65Ly4pjq4M74YrPDgcMARBHCpKfFf7R8zP4CHkmSoZhBe7awN1f4K7jQAkTyrmo",
  "key32": "56ZkR3zRmSQUEYKj4JeMv3U13XCyv5VDhEEZ2B6V1N2mvheVKP9GpjS4AEhBEbhYhRhxc54zq7fA1yg4KArvCYBa",
  "key33": "2ehfQB7oJ2vE61xXZ7woKZnbbT6c8SEeGkudaFj2EfAEUxT9BVacBKx64x5QJP3Sb1UshR6bCXCTyephjHcvaLTJ",
  "key34": "UoDj59dyw8ppsVdekMkMv7bJAy6udvcCD7ke2bTNPtPcSKDSctMzLJ6M9531zg83JMMeXFVJ3YtVHC5QfJCSdYo",
  "key35": "28wQqTNLPUXB5pWY7ptf5sCmr2kuqQeRWAyRsPkWBLqLdLgmpypWgjyG7AAFurUdr3aEtdwUzRmKQPhBhvciBev5",
  "key36": "5gnceLBMjSTSqk83Jmy3sTffxYPomW9JfrKDQoGrhZ5eBkyvwp4n4i2cSosbxWTq8Y3Nuvirt82fM4gZqNuVGGwy",
  "key37": "7JW4oMb1jvGbB3v8kZ8FNiFpYDGpuCWpsRnDF6HEh2d62QU4A4i3K2JpoU6sfhXK3Zr7m1CKH3fUVWmp7krMhwV",
  "key38": "45VTLLfNrwAN13C2w2T6FE2XZKqertYkjqEs8okNEDH3Z2bNRAnpR3y6fHUvV9GUVongXvadKr7vneioH4FiY4YG",
  "key39": "4GKGLPp8pzFujAUuu15WHvjz9585sd9rndKybuKGtRKBjYogttDBuHbBx5Sq2UrydzbgZWGLHio8CRc9i6qts62j",
  "key40": "4FvJ3JAZNzBXqZyn9iP59SSy3biDqrMDJWHxMPfd3daUktggqHj8JnU1rZrR2Jx7ZXxQGRGxocxg7JZx2tUJJvHp",
  "key41": "LRk4oUv4jAR7kzEyXxYU1CmswkbFAYo4uUUg3Tk6xZCMuqHQTpK5ovZtF4AmHTS4JPGFGDVrdAGXunC8TNhpYtA",
  "key42": "3DwFTPwFzwgZJEtuRgxG81rtEUGB2kmFPr59BQ2CRR8FdSmuoUJiesmUy7iRbwGPYk6ecL9MVt9QsyxavpPHoTY6",
  "key43": "24voi7w6DdNTsHRhJ9p4a2Wjziv7iWPYaFxC6SrvqeVfezjdyxVKAk82Mc4z24MAacN7cGH5kJnDbtMetDWR4Qu9"
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
