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
    "5yJCpmktwU4PBrjNkwe9tbzLwqzNSF6PyChEGQnWYiYRaQyh5J82HFEcSCscfxeE1MZNKubuvdtH71HhsadT4REs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bPttkAt9rmyvtBxXbi7hPXRc78SPFLjZoJU3stm4pfUN6fzEx2613xrmRfbLF4rUWFvVBPyEMeS54nmWJxGPFkU",
  "key1": "5M1kaN4GLN7hSmNnbYcxcZrW9B9YCpiqXGTKyZw1XtHH4XMVqd3eYP2m92ZywpUKw1ygeWSWDXTacps56ZS62MFs",
  "key2": "3gLneWRTTYcshTWX1W59QkeSWn2wWGpE1yRCcG6zMdcR4p4vbaAGhz5ko3e5qicT898LYtkLwkhDmuvUFeHNFzJf",
  "key3": "ULSdWYiBfiyHwZxLnLbSYddjd1LzM8xtCiLHAd1xds4PKnYMDHtwkbx1td7zd3LNvJnJADG4bs8MfoGfJFqiFms",
  "key4": "2tbZHj6upkxyC6kkHeRv7nmYHRojZ3ww5A6yb4YJDysRhKaisDKuXCY5C6aiYUw73eZxXMjSiL1ugC5hu7eQ8EqL",
  "key5": "5DFfTwpMqLToYNNdja2pqgzoNyMQQSjXe3Kft96KNDxAQiGkAGmBaZDJq6o1pG4gnhfDN8oRUGar9cofbPWsipMP",
  "key6": "5yEm7EWF7bGfvjnvehWmEDNbD1Sj4jJyK5homktiPLyQ5RsVD7diUeD3WSMY1gHq9mJjTQ1AsWz4c9Z1FwPHaPzj",
  "key7": "2hbC1EgocWRziikUaDEcLpriHAU77vHu5diQULi4ccT8a9hnSRzqFv5rPG3UPFgGAgEcVX6o9q1U3XuMDm1N6qet",
  "key8": "zEhjJnCyCxit4GZmG3WMmrxziV4JejQs5K7F1gJ21DJmPpcYX5NnUtHuf1N1fLQq3QS2iMSwLPCCAkpbTedjt9v",
  "key9": "58G4NC38nUGdfriDzyCUQ472quk4TUEPeT7Jp17BJgbYxQiSorViuvpQh5t1sfdNwj11TsRDUVVo7qVGFyPaHJYk",
  "key10": "2E4rYwB1nMCPgbvB2Yh6irDxSndJUkKKVZVYfNNUXfnjNVmdszJXbmPzqX1T4sQKU2iJaoSG29AjK6dWyXzyyAs5",
  "key11": "DnAaT8nJntxggSHgsMwEPkffrQFENYpyTT22UY5o8TcN7prY2nNAtEwokogynNTFxr3DWvVJcS4h2FD63YyD4Ju",
  "key12": "ijQcgqWxyyJtm7QeMCMDqFU5oaZmDhd9jFw8ATbVdFaKEQYqGwUnC65DX7k362wGNYr4B9VApiV4zMGhteJ4PPj",
  "key13": "3V23gkroiDHfjVaXb6nsLkv6LS5kFYbxF1pg51WxKLmAEwvZpVTGh4TAewSK4225uvfcz49vD6ByTayoZnjfRozp",
  "key14": "3dPnf3KmkcLJE4J3SfFYyNxCCgJwngrGGWX6cK6joMst5kbzPhR6eSPYRt23REyhapivsKPzy6iSo5dxYkMykefK",
  "key15": "5Q4ETTq2iZifmw3UmdbzD65wK8c3D4VNPixNWwRTafc1ZS4Zt3KWrB5QtwhHx7P2VZydmsxjejjxhdTR7YqRG6BW",
  "key16": "2r8kfNxyD9zV5Et8vvRgtwts8aYLg1DQES2P3GhXziEmaEW669ndkJnCVFNX6Bou8bigAabVZeEoq25naspypCYF",
  "key17": "3FqTcrPAd66Bm7CemAgUqvbRCUaLxb8Fvci3Mi47oQi4TqNLaZ9hsScb9b3R9y1tkchZKU8jYfBMfn3BQJNXu4bx",
  "key18": "xsdoRYppuw8ByACU4N6Nspg7fQr52k1u3AYbqnWJt99ug6NsUpeDiiRdTD64yV49CWtKvdsSVBDUiPkE6k6MShE",
  "key19": "2rg4TnGbRM3t6o6jbXhrJKmwoSxKpqTNgJ8tY9X7cUyLyjouZQ9WJKRgu6iisZJHkWnUxUYkukajvCQSUA3YLXWV",
  "key20": "2dPvYqUQ8bhxAofJYBG1boQFKP4Mp1bvAzj69UKWLLhrnBwKdw1vJqnPtho2imGYNKmuTY9ApRWQAr7aNxvJfzZc",
  "key21": "2LMi7kVT7U36cvKXTbRPjFmQPp8bTBhwgsQER5Cb9rTTHY76cEicSM7W4xDKKsdNZpZZz5Gdwtq1DMyKvQpP8CAp",
  "key22": "2NxUba187FNWvv4VY5iE6tcKgKzY1DMe7pD5UGDUBxhm1kYyBmy5oxUb5jyhtPtUZRHfiwGRgQ1v9RH3gKuUK8BN",
  "key23": "24wD4QKEdmSeskmrXusEeU2CPr6riSYTh7BTrHR6RT9itdqVWh3V83W4D7HW4an2h347pibJBG1rKF5BcZw9o2Ma",
  "key24": "2VRFm11FtebCm6rDgfvksENb4xtzJs1ZBdrR1DmGG2YxvzF9PouE4dT81Y9cgZSqtP5ZH2cEmc7JmEtejDi5oEHM",
  "key25": "iD5fiZ1Z1gAi668qUGt31SJmv7PUEkhEBeZ7UD8sQfgdr6fFDLryfhDwoLKjKgbjPacnBifJzZzu2zQ97SrYWah",
  "key26": "2gZd9oRDdNAXTQZVXQyHmFf8JkAWXMXsUXACs9DPwZvLG95yRRQe6RU7ixcqz2w1inSfpcdY8nk7sRoJuf99HyCc",
  "key27": "3dtWGMxLMCRPhaTHS8EfKSpPZ5LzBLZzyuJThfNZBdJF29evVUHbs3ojPH1wb4fMvsn5aihWX5nW7bganQG7jL99",
  "key28": "57sDvgUTfLA6RRj1krdLJo1mc8Qj3RoNjcbQDda4rrCb8tuBtDqAM51xJM1hCTwBFHb6GCMU2HTGmDPeJsc6RC87"
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
