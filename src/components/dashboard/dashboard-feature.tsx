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
    "4wWqJDpmWkzRpAmKDT46kavCN4D4TqbigiMyAfB3fH94uaJxJxgoUS53GmzHDz8rY8nCQxzMXhDjF2EySJGpxZcV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ld2qwUVgc2ekw9p1eQkqg1AWDjrmKuozEfkjcaqyearLnqfXvKs7k5VFGiwxXo2WbpT4Jesd8st8QxzTeY7mdo2",
  "key1": "4QrUVp7HZptfRKXdJczARKWM62eNsBVyA8QVtNpdPfaSDkyFSWDd9gSfwCbHyNdbcxL38wCB9icLLmGLT1BR9u5V",
  "key2": "21GYMuYyswsoAfX8gQPVgrty4XgQQHk68xCugYA4XnBGMyTZC8RBvZsRsyEqPoUr5zLME8vViCBxCvVcetZNfDkZ",
  "key3": "4CQWHDNHkRLmt1EM3w7NtsMbQmTup51hfvhVRcKZV611So7o3wjDWNr5i75ADLQXFvSKUJBcMSDJ8Pz5FeMKYwYU",
  "key4": "5zUtvaKQSFGZ7ruBF51FaZzZc5P7HKWAT5EerLfRepsqp7NDNUm4of5PoembpUyyTiMHHXheY6dcAZgnamhkJ4tz",
  "key5": "33RCFqvidHn9J6disMUZCXkFGXBt6DgeikqvFHcGg8wv5Dzb7Rf7WwfeEwooZbsafZTgu5mJRbi1FHdbgZDMD54d",
  "key6": "WoQUC86cP2kdZCc8f9NhurzBCRcCx5eFw4ykxqDNtfEUMmDwTAqPvQSAP6dAqSmSfCa6Xj6yHEggLCYvwNzGbLB",
  "key7": "3f567fMjAcvXDN1w1K4SW6VNTcUqoCnJ1Pofe3zFQMS8f5tPvxZoipeF6BHLZZXgtQSpaz1GrikJA8Kq4RLG5azr",
  "key8": "3nJoqaPYa3KkGYL5v8boQ3aXcfJu3suNxmLmMvUXrRzsc9HCF6hyPbh3G3Srqzm6hU2PR8C22GxdcBk6oxSfEcXe",
  "key9": "2mjdqpwi1fTGCWdjzE6gvKdiRgfqC58YXGmwaWpjsp5keWHkzvzRLAuSZ3PEjzT3cCZFMWSTsWUn4WgADcjXzf5k",
  "key10": "3wddoqP7KgmCY5m3Teo2BkAYJCFaxV6gnNBPtMrT49FtZ5pXPfh4dfYkTP1FnZHNVuv86SZrSrJTYkf5PCZRPvR5",
  "key11": "23jSepXmMKjnbLPD9ezWdCrvGJksWaab6g47S544jAVfNysBjpT63hMwq7Nyzaufuwc4FRkbCfLKmqzpeQxRA7hs",
  "key12": "3kYUimQxiSyJnj1HYike7LUtDoZx9NUQHRBGBG97L2fbH2P1iWDdSF8Je6qq6zSxaf3YM1Vy6hk3BZfSiuXocXuu",
  "key13": "3KK67siJFgG4t65whSVA9UvW49qnnSWWfs8bTYHQquxkz75oYtNzg1koQMnoPtbz7rU4XvfUH6AVzUbbuZbfJgEt",
  "key14": "5xALxNeWmRyrbbERFmZubVqq5wZZVR7Bn59QGE18AMQ5YKy9eYCoxgNLSdgkx9JfivvyXtrax1Kq2g5HvRw8dw97",
  "key15": "oHvCZrCGUgSfxkxru7gewZiBWmZisxZPv563xSpnFey4iZsnCz7c8xCL1xNv3DZgJnuc78DLpiqeZjykgDUDoXn",
  "key16": "3kLDfadQMLUhqYW7VHV267ANbeSyWdruC4jbKap4CJD92JxCVYcVF2ikGa1frK8KYdoUBz5fm7SBgH6FZ9HDz7P5",
  "key17": "PigzX3rrLYMiDdsYYejiNgv1xMvdNpimeFDYaC7Vmn9AWgMBVcMeW27SPTcL9c4xEDwR33pnxXNxzG1P8QpgYkA",
  "key18": "2rWs8B5FFiPqVYe3KuWHyh9Yi7nFGKjnTUMP4VgL2CPkBabNviLB8fQchX7y4jsH93QxGNdeN15GawPcUrRavyph",
  "key19": "46y1o99gLrk2aPPsUCEPmz7PbbyESoNc5yGUVeTQaj5g4kcqepT4JUsKi9o2fmezg8iZQ4rSHr573XSpR4JdAqGi",
  "key20": "M16X7hu3Dmd4DW8jgugmDyYEFzWVGEna2y2chZH3rUfPA2u6dZ4sEryFd58dt9qMsZTLmEunDGh7pXd4ykhbvgn",
  "key21": "88nBsnu5ZJxpGLDkQeRnrkDTjZxpHhDxUzsxJZr41VyEkgnyrGp8YDB4PFcAz4a22AWDpW2o3hdtgq47Roi5hJ6",
  "key22": "4Yvt8Mh4WgmBYwpUrRKtjxnHyc4bjJJtUNEFk58zgXrdRKZEAteECUaAmnAkZuqsvp44yzYvVezzmdaKus72aKJq",
  "key23": "s9RLEACAabQ3wuwuLFzfESy4oz3MmorshhippYqaNe4xSZy3YqdxrgPJvbSuBfPiXhj2YtuKSqvAYzD849yoFQv",
  "key24": "5sdqrbFmxDiTdf74GH3WwvbCb5csPp1maikqRA8ck9yhWtnb7wK3GbRL19mCcJ7mtVPYQH4t334sdftkfBBQVTDS",
  "key25": "rzxLLnMrh8ZZT8a5mB5CuU17jXSz5EkhjYmjnt6FXazyFX86G2nzrUaue7P54iCYJAvwBsNzD7J4oB6EH56MGqM",
  "key26": "2wRHz6F9RRF81TaES9zNFDmfMQS3RQKhhxbWPHedvpDxnU9nYkUeESWsveVh7d6EAFNf56XwiyFTKEfgAuC1xveB",
  "key27": "3yVJ5D12dogVnNmD1iNtoZrEqgTebnNxA27J94euN3P1NqxGaSBM8KSwYoZxQ1VWxBY8Xcej3es73kACNrdYYVNB",
  "key28": "4Fzi7dufpXN3pgKo5UhoZuQUGqbggwoa4Xg88p8ADsoZML9m6RUFg4GbbY345sYVxuhUhFc9iA7dBrUcefxvfWzJ",
  "key29": "3AAdUpK6SktKDRACCpQxNhtrV5osmd4Mw3bkVm1AVL3EwEMsmgGkygewF9fHac8TkrubvscuKxUSRfpAkQJ4zhvS",
  "key30": "2W3WgCTiw7ASAsu7BaYvD3pfR2qSfBDhzZ5HUvS2qLEogwQrPUQV6Z3kTkEjG2xkCxCDGoz3A5htTzcnCorjBTvo"
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
