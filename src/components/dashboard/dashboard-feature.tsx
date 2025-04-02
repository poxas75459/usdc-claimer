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
    "25pNrujXb4ddpuPeqCiaJmsiEMYBKLX5hh5EB2wGpWKa2PVWpHKfkDrRUfA2QWKxSoAjnpEzm2X2T5n19gZqHWfU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nSYJ6t4GmGBoe3e9dRWhMuaqTL1pGJ5TjYXuGw6thXVqwYQtEKjM5yeRYjgPXLhn4FXDrGTYmyzSneWcPnhFGQ5",
  "key1": "2SQYiTHUS24pGkVxPviHXFDKDsgVaAVUgKxymxDrfBP3NexadjYGaSTRyDS6PLAUbnUQnLyScVTJLeeb8JDE7T9V",
  "key2": "yzwMHHyW943mT8swus3DRfTrMFdtPsQ5dJp6Sf2DLaymsSRPK9qp1zRLjrTvUccyy4ZefQXY2ha2Xm7CxukELtv",
  "key3": "4k9Pr9trzvDhh9u43CJp1MPfUsWCNQN18z45ikMaS4xD61ARTrxb22nwNTjs3X9NnZwsgb2YntSdqsYmzTJGNMTj",
  "key4": "26BKeHBYrP7KRq8G6fQmwu4zyCRNn7k8hhPgRfe93Q6okLFqQ9PLttVjDMBBrjCMZWhY1TxAewfctP9G9ZKqVoCw",
  "key5": "2BG2KauffGJnCaFJ4QjN4RF1FiqVidqdRVAJhVmbciUDsMpiRTg5MDtcjphTVGAzQfasSmkHhXUE89XENiceTbNd",
  "key6": "5wus7ziWfcU47jRR3rSTbSE2t9roR3TZEothtJfrAFD2P7wRBHHvPguD5gf6unaGVEmHHNH7XDjWTHV7o1tA1ZVP",
  "key7": "5MZfEvgnaD7BUU64vztXriQvpKFVtnqwPETyT2rhootmrEfHNDCv2RjPrwMPtxFV2kURS953m5NSrL2GQuc3ntzH",
  "key8": "2dCd6ASwaLYhp8BUejpbLA9nFLddZ6wLtUD3dQgYvyHLA69ZxVGS1nDpftZG9tyWRhZq2zu37QPSgTp3tPxHWscy",
  "key9": "zsFxZgx76v2wmWTgTtB9jJeRUdKqe8HQ1obBeeGCYt4YQqvhKjcoCgSxToftYBw8ZJTQqit8rGgvxGZpri94NU1",
  "key10": "4HASRcTimFEB9ah3XMoY1WgcAycb8ngZAbnCmWgAsV7d1afmCEZQXaPuvfwCgrT9resZ4ZdTgW9cMfgDQCAJwqCt",
  "key11": "V65cr6REgtMob8PS29nvLcyuzQhYf7caF6aLL5aUekHChvSbeKZKxutQRNVHpSHQxkSEpC8xFoxNRiPtjnKLVGR",
  "key12": "4r1ncZbditzm8zHoQfMaLsbWnByz6rpXmyY8NeeiLjjnCydE3rM7V8vZTBAmAth2DPFd1x1C22yPLk8VpQQ7cyUg",
  "key13": "57MYGYLeafrfhxwAAvV92qUym7aXzZTdZ6Hmtt3oKBLQTiZi1tBLyraP5ducizMrjXCXqQHBsJEJWWTGBuzXUnqj",
  "key14": "Nj7baxcKHHfGJiAfmhYFYsKuwBLhjNLFoi4jWovdV2ewaJs7iuZefo8ZZaMSHSQucEJvkHMwgmDzF9KF1BMB7ME",
  "key15": "4kkSRbxoQe1KTYYt6m4YpzLJqzECqiJTsrF3VcxjiuhnhNggQJio9BcFAiCGxaZRVVnEcfeXxrUhbV5NFtH5URHz",
  "key16": "4oxKq2it7ujK9eaDijKjPK7QFBgLTimtN9RUspwYdDrZBoafuV7P5fEmgTNeCoQAHtXyD8Ki6bknDveKe2sRscxQ",
  "key17": "3aTVM2n5VoNF8GkMyUyy6jFsCkt4dzGfkcYVTnA1GgQUWqiz9PQx7pa2zeKqJqUqqCiTSw2bahYHHByBsQb22wpn",
  "key18": "2VLYT59Ai54LccKsqdd7HszK3H2jrgFjJbcsgzXYFrGQsCCoCJtUZX5LwzcKVq2JUpV2ZMxwSjY7qrsgNoXp1rqD",
  "key19": "4RN3TqiyAkwxoycW8iqKaCFWpvRzKW7TQ4ZyGU5itTqVUtCy7qtzUBe9F6Bs46VqnqbcLpx2WYvxrTVmGKSW9sf2",
  "key20": "2FMNgD8RdS73aiVnXxT41xUZCMN3vi4iqKTv4gcW7fZsdmkFueGXzuqnsvbbd5rZ84bdzxAxeU5YZqAm7KLCar1k",
  "key21": "4Dz5vtmuitopqymzY2Fp67NQi5anMPQVgTnFm59XGcdMJP1m4LZg8sJdgd7GEtwaH9nRGqKZiU79vJMvMLu7Dbqg",
  "key22": "vJYdcg1QS6nEhoeQdYXVtT1JXWHjgK91Yjo7xqbBwFkiZpb9Rc4ZBLRn5PYCcZEXq61JEbkLWCUCGXn1TRRuKCp",
  "key23": "65AQ4csVkUrDkWZmuLRjS5Kzoq3B23TZmboPvwwFkr9hvBnxP2jKF674HNj2GjMwjAquminCngLnoZuAdPQ3G83Y",
  "key24": "4ZcN57oNYSBsF3iEpv5E5X6ygGJhdKoAD64xJNs9TGE1HKpeSgr2qdMxvMv7vxuoJs8AazBVNcJdY9S9AS4BHKnC",
  "key25": "3aJ2SCZJaAAUpFKrRHS3VZvRDKgJB4hV3bkYPcrSiCDUgMRA5zS2AAtUFQQCBtiPin552tHuijaR16d1hvznkTmx",
  "key26": "YaFxW2wKnLL7KmtorFhKC73HGauvUYdgmw9EJhH5RBKyXQkYC1L66C6H2YhLpsEGRWVjVjWydiNwxcNnko2KUNb",
  "key27": "2PSdtgBt5ozxGJPDDTQQWbiurdtjShc8Q4afRFBVEjvzUaL35qnV329Jvn9MCmGikdnUDvcm8hPdSFH1HNeFBHhh",
  "key28": "4ED6pGFvi6j26TucXPZDwDVa9amUY1a5SMRNd4u6vQX79C8CRv7wuSpqngYduNfKMd23h5zAtGUgVpwSKb5xqqoT",
  "key29": "5ty8wFaynbiAFaVnwQ6FeQ8aayLbffdMrDQVAKaSoCrhCW6GcSKFoSe9FML4e79QhMiVc8f4aqBbWqXLQmFDBExn",
  "key30": "3i8cUgRG1gFixo4KgfaesVHKfawcBJNFfmkfyMzwghMxCxbkvu5BdoRCzrdGbvfU8WvXiZ75fFHHTN89o1tdw9HT",
  "key31": "CCALkWd6Xmm1ZyLuaAgTGWw1A5T6rUQCZjuPcZsHBARhK26FywUdhxxxxQ1phtiRre96ijCtPWw2LZKtdKcVcRv",
  "key32": "59kijZenPkshohkaP2JPJkYRYeF85SZoos1ABotQKtg5ZD3rjv589wmst2QqRwGmMvNUAMh29DFbRtCkZmiAw9Eo",
  "key33": "3uYJ6Dm39AFNZzKXpBGNQ5mm7xknRy6mvzVfmQttMaiv6nAbSCQ88yPj2F2AwG5juwSLPRHMVEcfqRDmB8zNr4b3",
  "key34": "nVbhRE21QVzxrMXbVMRFaWmTQWXMnsikybDC6PtZcTNHcEue1uJCBXT9j9gaHSg6Me73mDHTuu6YGGEkaqGTwUC",
  "key35": "3v56CQrgtEQppYBrRUWKka5w4KH84hmM8pwwttEQGBk5A9gGQRKvwMwSX1BT7V9FMyDYDUXjgVLo5YKEcPMwPuaY",
  "key36": "49WfA2eSywGGBtHVYP7JWdA6wqNxEDZaBUEr1Ry1ecVSQ4meWT5UQFkUnMctBEHxWUbP3RqBvqZUSUxEYRVkZees",
  "key37": "5pNbatFied1V84YvXaVwtRmMMMaoefMqGUS2WNMCgbzLMb4ZASb6xS5LP2FRXGn8cmHxTjoFLwvsoBKkk2EB4Mam",
  "key38": "52ZsuA4SSajiy6tHnebRg4ontZm4pFodft7fVJGMz5YeeeeawSR8qw3pb6k4cxqTFYK5SDHWUYXweWfp774ff4BM",
  "key39": "uz31bDvzHA1trrwHDrwAMWis5rFkQ9Mk3fz8CyFqqwGcoLtLLsLMxFvfHd6nAu6XYe4ieJS4Npr7oECpGjCYVyB",
  "key40": "5xD18cLmz1WRM4KBtmuyopmp8L8DgeZy8kXtKYVzWtsVuHJBtHtp5oCe8AY3DzJ4o3yi5fK3GmpdhdUB9wJFjDoq"
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
