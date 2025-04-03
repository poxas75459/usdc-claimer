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
    "5LzktP8xxSSaQJjmD44dgLLUZzXfiNHmvDHb3v6GibAERwbiy87Fgq7WQ2x6mTQUEUYttiR8zi7AnnoD7rxsdMsk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q7gbzkVxJPXMxfQcwVqqpyxKMgnR22uUqCiM5sJ7F4wBA9qsyG4ABGQS631UipmvZijS9iUjDnvKWusJ65zB2zK",
  "key1": "3DP2ivL4hwWCgBdxjaSQG8Mq56wDJ8qXYEANKfaVJM5vFWwZ1mWZJBQXEx4tW4Ek5x3NgjW6z32EZuo2AcPCrbGV",
  "key2": "3sV6AdLjvpbEMZHELAhKiWEbkCqKtERpsSnhLFjF5fELVKLU7MuWRoDkSw23ZsYdG9FokZ6FDVR4gs7vioSYNNtw",
  "key3": "616uMYsVUrAYL8WHPgLwJae1Q2fp555Yih48Q7M9pJGEWEJHb3Qgtd21PXQL2Ptj23ubLBRBL2Aifzrb5nYTrERo",
  "key4": "b4gGpMPEV33DqQ4erFctyBXX9ChKPQRE6owMSNpfD38Pxni4LgzQ3ehSQwh1YB4LKBod97E8YzJA9MqmfxSpkFN",
  "key5": "3Rt8NpUE4RrZMkftdFeamvyy4jeHrFdzFMpPd6C6Ziyw66itQUAqw6YtifNfwr2SbVrbXe51ks351ZuiqyHdXFsV",
  "key6": "byjgQywmVFh5xyGg2nBRP8sBt7wRH3uNsicDfUKJAieGs3GSzgVGEe65Sp9MjLwU9be7cHtTTfHrpEqVuuFdHuN",
  "key7": "48dkAb3FPQfDULXPdM5iPjp3hQYU3FdBbboCCgEeQgGoKGPargnZBGGo55jwVdqBXKWMEz2Cc8ErSxYRh9NWnRem",
  "key8": "4NXDJFmHs9EXD8FHCUKyq35MD6jp8HgpM98C11PPo6A6PBgrGJpKeLu7BphrdB5bGcAfJ2WxvzZqUkSNEih7y4qA",
  "key9": "4hyyYqhUXTDUBZjR1r5YWpGmt2m6yzwH49FDQ8A4UPGSMEgmKzF1LVhTxmJhJtByWU95vXXxfuPHhpFaqv9AJ89q",
  "key10": "3aUEAemEMBHzbwV7FcRLfdCdscFUcwgrtpPyTbm5aCt5GPH7VPocraprv3BFTiPNppSLHQXncmxD5CpKfj2F2yA4",
  "key11": "5pcLrDiRN7a9BU48mppmM8jTBVTfvVwa6UKk6tB5cBh83QF9MjKoc3PEMPesvmJYTQtVCTvyemMticPwdjbny8BV",
  "key12": "xXNnoQZiKZT2me5j9Tx8YGLMFVZgUABaASoesWNQgim9egQE6R98W9kcv3jqa3xgMdypV4t7iYtdmF8T4eBfv7m",
  "key13": "3wheqxyPX3UUwi9rE5GwusiHuaHyiVsnipjF1Bwi5cRCZwZ5rkq4edFasqDxJNVv9qMvUxLMapbSirXqhnfyZUC",
  "key14": "2P5QFJJXrwjzHgnLjkyTrGKB7praFkFLszKA3a1pvPHexVHZzVs2UADwufedStPZfVf5xqAedfQykAwjxRbxa1M9",
  "key15": "4TTAGfudUcRra4REfcANM4G5ghthKkDGPntpFEnGyfsEXAXDvtzE3UjoiSp5ygHXmd6y2zmXhFpZ824cvuQZw9G2",
  "key16": "xTLzNQ8HD4dBiTWuQrRnWWEhydxpPsXNmAGsq5kpgJ28tZAm4XubHLTHXtPdpx8FsqmxPKbJ5D54ircgY9shF5c",
  "key17": "3jgR8JkoZwvtDQmxVNGp8j5TfWD5yC2vkr1DpC73XbTPfVqguoCd4zQfDMWYp6RSobNAUzT1CUbckFiFGa5u4Ux1",
  "key18": "55i1mBXdbHr5qUokmTbp4P9RwiuxvQmhzz253XZBmRavTMcJgrZYXqgnwKViXtqkieiRwU3vQWhxhx8xHbhwL2hW",
  "key19": "2hBAH8DicQhqimf4XpFvQQMqki6grVopjipG7SntmJBu7mnLkfEtjmt2quSA1U1xHeB67y838esKycPaFhbXAgAL",
  "key20": "3bVWHi49kjV5kg9SBiZ7RbAsVMXbh8kPkM8D6EGZWsGESKb4H3a4u9yrFT2VWeRutseUBVWCTmMD54iVtWpZGkNx",
  "key21": "3VtiG4oXhXzGqi3s8r4xp6gECXDCLoGwLjPQpEnChCdiYstQ3E5PQpgBigtxb6MBWXiK23bQXNCCWYV4aTHHLyPN",
  "key22": "2GFfpzw7Nh46JbRNL3hRbwemvCfwV2axfT4Z3ERxLMR88V1PfF1TYRRmSuNSXRsuDi67hNimFFgm8rWqpfvqmgAJ",
  "key23": "33ww2ggmC5i4STQyA8efBjrBo5Q8Ls2CaR8fbqZSuWJPpETmBAbwZXbuCTFqsHcFUSBLqwNeSgZbehdSu2S7y1ji",
  "key24": "5QVJUf6UiBo8YTL5xnFavFq6VvUiudAHe4eF4iNghK2QXLqzW5NLuXTTccxFHXisBFufMtMw19CpRes36xXcWKTW",
  "key25": "2N9aJBzyVarPpYesw5aZF5WPkZLriQrEhE5Dj1aWUVwrfcDHPQ6xJtLAFYMLoBHx6K9zWYaMXVKJzuHURVjZZjFX",
  "key26": "2Lm3wVEgmrfsPtJ7DmqHiKkdvg6ekyRzkeMepDQJfssFBojDVTpTiA6KhSgSe6zp8cR1G2Nffibbchyb4q4o3yAZ",
  "key27": "3UVEEv1kFcaPqtexwQ4LWLKy8D2amC9NmQSpuqtmUZhxsUCprLZe2z38u73MUgZ1nvupSbLhM71NFFgs7rU3ZowG",
  "key28": "3GYFZtf9JS9fPfR2d2K3uNigtxWwXx3MCVqqWgafmwdSHmGsLcEUKkjDwDt5RAUvW8PGbR8i7gP8avK4WwXcVuE7",
  "key29": "42D4mVM6xAug5pg4YqkyF9xt78N9EmYyPMwtQY8Yi4FHK41URE55Q8qFexM8EqWiA3HcCuRcSchirPhRDTJCAW22",
  "key30": "3b3hcCpmguFJ64FMn4Y59H1akSETFmCMbWmy1XotqHrxDecd65QGMEYtkcuHe4ZQeggmzXgkXbrMgRgm2rMj4pGg",
  "key31": "2QAqsLWAEhJ23Pu9D3FoZ1SzSD2iqAU1Dwzj6YcbE4tL7V69xYcx8rGhoUA8X2Vw1cTXxmUk3gA7Sq2FmzbvhAJ",
  "key32": "4GYhQNs1EKxfZH463Gf9kjoeBEDxzfGMGZz6QaCskTruqV4iqrQiYMhPxdranZbPeoEP27ihFizaHpaeJtBkMRL4"
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
