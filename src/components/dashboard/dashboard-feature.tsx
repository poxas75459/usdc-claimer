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
    "2JvYAS5Dxz1q3KuMqUCkzHvPthTGcE3tXZ2pHBMTU8SQp4TsT6ZPvDnuBCKJfTCa6Zb6XQ88LeXdsw5jcMb8N3AY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TB21oqLXktCynfwr4AVpMXga3pXfq73A5PAPcAghFyYKeZbL9WKeDTmUtA3dP17bGygANUN7XtPvjbnVT3oDoKQ",
  "key1": "3bXcrzpo3yf3BT8GB7R7JEbYBSksSaARawLiPZoZWbgKjiFEAPpmQQCTeNtBK4bp3dKn8PuLeTpPi3rfVp28YH7L",
  "key2": "PeAdrDfq9yfzcNDLe6kKT6cnutPR3Npd1QikKUBwcSiqDqRkS8BKuFbtNRDkkPn5yJZfQe2REVZJUZJFRP5gDfu",
  "key3": "5P8eULURgeDf43rEmzryxz3pTajb9r5M3T11YG4KvfXiftgtJikSkZaMeygYbWhQedd7ouwogTA5PgXa8bnep7iH",
  "key4": "3KyAm3DesRva7sC5di7DcX3Y4un8wx6gCMa4GKcir14UjfMVYe7QCuwUQdENcWa62XQ3EXkRderhMFaBbvv1j8v7",
  "key5": "12jSutzbHHsXZCvUQXzsvLVRoaig2p4ChSG7M4rnjFSkVydSaGJGLFjsBk66vmBP4G87CaeQQSmLBgfxVNcUyew",
  "key6": "4sW15AB1vWPLnyAwX9PWKDcrnuYGpLbFtBMcrp7QfQbB4Wj48J8m9SfGXTBTnkUrcppA3SecpCcEkzQJL5Pf3J6k",
  "key7": "4RxYXwrqv8w5Pj5DEuTGhuDqVSXBtLL7zKAwyQL3iCUrQYGVj2k4qZk4Zdh5zaAzwNw5NjKNefHxZY7gxbVgD4TY",
  "key8": "oQKM1C169RppNSUYis8vSAD5iabubm6gQspNa3fT7SQp4Xe8xYuAyDos68h7B8tkSRgBPbVetJ3Ysfv3mSffD3n",
  "key9": "4vN5h4h8EjjymnzYeiDd15noLctc6SytTvaUofeSJ9sEEiSHHnEzEN8CRxBTkV5NZNs526YNRaCGhgG7JeQ1Uw1o",
  "key10": "4HkMbxJy1kSmiGmKyBnem7VYBVc14YuWokNcWAQEGaYBNFCdRm6sqfWWKiedwwhkjVuThgzk8ipJA1VmUXFdggBp",
  "key11": "5rquoNEjRBScPyzk5YhbRKaLV2qobgNawD7HVfGLv5tCtPxfzQakJCRS9khPQMGwZx2bA8Z8VTDw1y57fmK1dGxj",
  "key12": "2gx2bJwRfDbNAw9QHW6FZC3vNPWgWWqgTKPKGz9eXhCsS9QLAWjta7LvKTp79cbXjp7ZDBPx8hDCMgPvWH3VzBfZ",
  "key13": "3tEDoTrwSVknNXUMxwi6hTgoRfpVNDmTXS2Cn8xeKzY31DgyR9C2QJCgUXfuBpMoQkexVhgXkiabcvMLjpa8Cgtp",
  "key14": "5nMzLKeDodqTs3cE2gvuJbSvbiv6wqwecxXUyr1AtQipCY2Lu5djravjt3RUhUVfxhqxGgjykiXEtwixUL2t2eCR",
  "key15": "579Lg4AHtZFTanXqoK8LZPssSf6aFfw7XZygHJ4ruucP39HcwNs6AEA6YEGTEBCVA4L5WqzFrcMjNKJ8eo9ofywi",
  "key16": "61cuKZQcgkmPpdSsh5nbAR9kBwEaXCR9umTS5uA8hgg6QrjsSUGay244sLAFGFs3XKUiZLU1o7VELHSEHvMTbui3",
  "key17": "xLQWVWBYfd2x6F8u5weDkwLeB5X6CtRFbs27bst95fncEG6uMyHPeNfTneXVV7WKfbCreF2j6HDXcB1NAaNL9HK",
  "key18": "2CwxJ47gQeCyPhGEWJT1oWeJpfU5PXKv4QKNwkU16iPcVaaqPpTgPtY2ELmD2edSWk49YYynnP4894QyJ1xvxRDS",
  "key19": "4QKwSuE8J6z8RSvapn1smRYRAiQMxJwpZ35Sbyfe9qjscT9GUbVcBpPdrQwXYqyj1BVTN16gE6vPuqp9FcKg3PwW",
  "key20": "4TnrUP2pB6GZjZwdcdK9RBaiVgCPfGp3mppxKTP3gVEFWRWjoTdNYVAi88MSzShE45MMq5RyUzavidyXiU63fZWz",
  "key21": "2PEh3PWKtTQLfx745QH2YtFgMTi8ERW9fCd4RY1ogB7jvUojMZ8WqpUCj84fzk1jzpRs5dbS5kmeTZx3WBs425Uo",
  "key22": "5AfyAgvt6bqY2XptDeNwrF92fqHZ94hsFajiCMWQh98t1ute6mYW19fkmbp1Ebj7UdNBNHn5uwV4nGkRYJ8VA8dC",
  "key23": "4uBjKqDHcM3Wd1r4saLWXT7ocJNsSyW9UwUpnQA9r4zcyxAipCP4gW6kHqfD73a9KLXE6bvrLdEV18NgJDQR4wYn",
  "key24": "2Pm7xZP8VR4Ru89gkM22TCwi7p1AGqfXgFnh7fTodXcRxj3xNJdiF3PeemmreEW4RHNDZW6hFePtaeG5bziWVMYD",
  "key25": "39ox5D1JT6odJ25CDWd7AhsettWdGUfmwRRCExr1KLc53fPqt6LEf1rDRferSseqdi5cVdzbW6PsrzgNSgtTwCmH",
  "key26": "4jSR86Cg3y2CKHB3uXsGxAYcLQDpZ7FajYonbuFKuVeYgFL37X6Guvctq8UwP2mXdPDR5ttEuzqhYA6TtYAYRgTu",
  "key27": "5LFTTA6sv46WXLd35rrziFTtfzgRnxeR9YeXf8SJCjmLevynqsF3sihhXqNHTs32Lhxct64Fce1R4mPrTWWMvVu5",
  "key28": "3WkkkPv32CovBGizE3YqA8Fnd3ew2fNf1zVjMKBeXK6oF4NbduHdc4tZyvgWn5PWuEUFHC3PcqCtDBEVX8x7gA85",
  "key29": "5iBatTMTcXNiRvPyb8rf3es9QBoDtCVFRfCrodyhQ5A1qeQiUT5Y5Tr7wihi5PkpfMzYyunvGM2Qera5gWcBXn7i",
  "key30": "2g9KJ8Ag4pvqScYPHHomADA54h7ddEQHy243C2CemvtJyF6Z6ANxiAQ4iQkfykcPX66BAM5DUa22pZdMWP9y11Ln",
  "key31": "3w7UoE4MazyPMNN8A1YzJp5NKUdGvVYHr9YVo54LcvM1MGftFH6y9tUFi6ez7QJrwh1jcJRzAjiULB8QTyo9JvwA",
  "key32": "2Jdmnf8GCEyuvxWmsDYVQexQtxfsPun75YzNMft7ZnVk8Exd7ymrLri5JFc8dqH1rc2jjp3vgWpuxvWJjYwSqaWV",
  "key33": "61UxgYrVxm9UytiUPM1uWv2kaBEw7KPnGnJpCcRwHX9Xdxh5XTKEfKvLG8upQvtScoARqk5TQ4ukKUJpr8GfSzRt",
  "key34": "45S4RUUqXeRJFYicDDW4z9hMRioAukC3rU2fmSTRhpLBtxxJt6NUiTYjjPWNcQt1Ud9seye41GSLjrhSCTN9BHkf",
  "key35": "2BpRHUDvUUgA3gNaDu9fZyhbE3bRPv5Rp5MbmvaC9MZGFyNTCxu32zuCuphP5AZmnASvyn8PQLzuPwW2dMy2n7k1",
  "key36": "4XxyYx8CPxCdYxbHqAA1rYChQuLwnj8GjKj6wiTdq9wWyyGEVZwKgQ5YYKuywER4hrrUcW5nc3of7wkpQkAv9FhL",
  "key37": "5pBMShqtwmh5GdZfudDACxWR5FXi5BHpREgzjPR5uvKrZ8zLS7NdkS7612C1fbD55aLDuhjBRowpqtd2LuUQ2VET",
  "key38": "54LimMueaSdHAVWL8EDCi4UUSptpYcgDUV6mXC5GLNEBhm4NggW1fzXgEFAF3k48mMd94cEKkWZrq7NBWdtAjZVY",
  "key39": "5hCpKcMrjwqHxcAxv6kSdTkR4WyveD2pvxfjCdLz2RuykYNu9AZX7V4mzkvNnta9N4yAHgqaxpTfJAjqH52yshx1",
  "key40": "w58Pxi9EK2uF9ura7cdZKLb7Do3YWDyFGNwgieaSgxqEYSDGWinQ8YhhysNhhaF7Djx8W3KbA99cokRF4BQUriV",
  "key41": "4om8K4A1FeWmLZDW4jBioAtQzGDqhHA8Geb7WQ1ej2SBELy9BPnSYFbuZ9ZPsLivrkH2WU1GagQdeHVRPtgShcNo",
  "key42": "ehBee84pMkQ7De4xh76Tj4X1JxrPnhGaJy8ZhT5rCoUDxYb895CRheGd8PDg5UyJKr6PBFQtz9N11fwtGWXdzU2",
  "key43": "3hTVzro3K3Zsaih9XjuE4jzxwYBbQ7hnmH7jY2cXX3pf2MxNa4Ppkci5o3ud9ptioRjaVqQ2aiNJxzrnKibpN4pp",
  "key44": "5dLPCh4PMvrEtKMeLUTLCpV7rSArsMTaP1vRVUFMuF2NHjwuo55pctz9vSoyYtVXNZAt5qTUUFNFwUXEYt7esdid"
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
