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
    "34aFHhoFFh7NNevguLB5YVoSF3Jf7YAg8AUn2vf6evP1mfMFauNqrPpQrMRMnVRiuFxQLxu7YpMZkncr1DwyZLKD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qytB7ACy6knwZ69E9TX4y24HfNceTrjKcseHHKsUFTZhHDfRpQYqFBZt2rCCzrv9gNgrrovETNVYqGqSStG6Gsd",
  "key1": "4dHaMDw39Q7XTC4dDYAbog8u7r8EXyVy5JV5iQsJ4ynAq2xG1xcAwymPAQxnRfuqzBcR8vcFMSfvGhpXX1wRmrQG",
  "key2": "61NnDwwEpP5dH9vHwCXV7BVjd9BjApAm6255zHQPgduxcp5VqsYnBozPbFuMSFk7s8mJgovHgDDxnWWvSJdpST21",
  "key3": "3ACXGsKQnyMnV7WumtjNEhUUPULax8kBZoaXHWUxon4sH7dTL1vn7DgPRgYVUDcPuT6BCUa6wPi3fGrC6J3MyHVW",
  "key4": "4v952Hr3HEYmBffctzRzHJ1eeWfLejXkUNRGbeb1XqhLXTYeNAePmY73yDpnodEB7iL3z4VDb7Umw21MGcDoGLY9",
  "key5": "x2rxAiis4pPAWes3ZcTxhoBHqwgr77jehv2Da7Q9cUKeATVYz3fAqz2Whx38ReBfSFGeLz5nKwGBWTmyvMFQm9r",
  "key6": "5JMCt9NivBnt5hBDUoyRwfPU8NDsWHaQXHCDW134oQ1DsDyjc7wwbLB9daXrq2BNKysdYkE12ajtYu7uXyv1GYWW",
  "key7": "63bcHJXuSq7ufmMEgQx78XEEL4iT2fRsXCucscGKWg3P7o964oHcx2T915v91Hfz44wfFCmiNobwA9cYZu2V3JY2",
  "key8": "2i7WVpqFXcSdiQj15A7YsaQGBeYnYSkf6csHSfqii6oP8a77Ny8LAuthdr6EoDmZEGJeuydpGEcDrQ47RHBByCjB",
  "key9": "5rV4YNYnE7hNLoD31rwPHVNZkAbxAT6rYasRgzhdJ7TGHvyMg98PupUZJiDpWU53bxuth8SwN6PacVvEfsgPec64",
  "key10": "wdEvJQvFwWzK7VZHZmz8bEUfDEDg8CqaL5g6RXnn5356eMuxguxq2eYsn1pzHmMADP2LyQvqEGGDzTFdrGhboxa",
  "key11": "61eAqDiBqKRN2fUFv5a5ZFTFarBaxd5q13MrZTkusdwUW34KTwY7CRSyY5bYde9gH2Lmn8dt6qHKDRcj9k27vC8a",
  "key12": "47R4PoLqsQQ8b4DTmxgSo9qKjjwJbaxFGg3hwQ5vfAziycdQoR8JFNGaa5x9PD191zqBSVBj6co2trFPpDbpogzn",
  "key13": "4w5LwCVEqPchQZY71bZbJ9fTm3LMh6GkfJ16ZCyCthxbqJvkzirw8HU9QA4oz4KZGGc3XSuBMQKaJHPLkecH7etM",
  "key14": "4gezGrwVBpdfKN7gJPrtAWVuRUjy1dCExVaLSgHxDbQX6BHZmkpTPPvcTYpYoMptDbsTRFhwUbH2HWfzckh8ZFyt",
  "key15": "NDGGp1P1NnoZNiLUGJJ7MHt8g4mWd2WxZAy4yZ42BrFpjMs5EAnZaJb9wyJ4uPn89bBDowKJbMnHfaz7SyKKd4q",
  "key16": "5QW9Tz69jqZ7P84UzQAAx7EhZqqX6py4zYv4Rp3nWpCrL4ZeCNADi1ZYLGvtJQEnW7Lo98LXAeD5BGcpHk7dSLuW",
  "key17": "21Lmpq51F7gySPvYZPSdnrGtia46yp5rxMFtNN7eq7x77xxmautj4XNFQXQo7r7aeWNSvLZj8S79stUdSFSXBADL",
  "key18": "4agvAXgdu5tjMrJ9361xLqJijd22Vt4dth7fkZyCxvEPYbrHjaZYVBvLcDvbMFc4zG7TvhwFg9jGKPHenxTzjaFM",
  "key19": "3V5VmbznqPWR6eVYUE7hAnY2WmtWCqurDCYgMUPr85sCJLARmNVKPVJVUBsg554q9ogyTaVfBNfXDKxeqWxgqeXW",
  "key20": "TRjnPJZnExF9sJJqQhFyx9h9sBLWi49GLEQbAE8LsZjErNciQcyksr5qr7mJJrrZiNTam2jpfvpSeahrhCi627T",
  "key21": "5KDuAw1c6qQPkpCH6RkeHUsp9BjikNeykE899GxnhqpmsKjt72PQ95VZhY94YNtNVC8eKE2bVEYKz8JCiFXUMDLC",
  "key22": "32vhxvzqbprrEMz6ELuXDG2PJ9uaxZwoxxFNgLYkAeeEze5EubXm9miTcPkYi3U6k4zGLHGyWUo9QLcb6bDK1mP3",
  "key23": "65pqpkHEGqm1uDsXY1fNWL4d9Kjtv11gD8rt4UbxcUfG2LecXK5Y7GhK1NiAparbWYcVEyTPp4MTrzs4vV1m9G9p",
  "key24": "56FJAUkrfF6TFYLwH726nCPHTMukTAQjPMvqugxRWn65mzkDjmzg1Xud125fN97QQAdBVwX5wA8zGmUPioazzjLx",
  "key25": "26oEVETKin7eWQAgjuzgP2UQwoVWLMBQsXFudPHFYKHLNFLb4LE1hjYcFNk745AFQ4gHEkZmDz6PL9RccuY7m31k",
  "key26": "2CTjSV3megVWTq7CoDSeRbwqYmfP3XuBy2c322aYNDEMvR48U7VsQzDdn6RE3eCbV7PskH89ZymC7qaUkmK3NyyC",
  "key27": "qH2ErixeoAtFnZBzSnm6JkaJtsxPMcDSdxPfn2sxUsYEFgdoUaboaiYEWEFXBkMRo5stb4z3QD9P2Hor6nytRjt",
  "key28": "3ygYkTgK9suAEtE9ra5xf95M4v6Yz9NvC4dZPG6wJrxaj9zhdq7PNYasYmBuXAv7kW7qWHRhsT88qgir9zNP2vru",
  "key29": "2gqBjqhPNvLoPu45KZFkcFdeCyJpqyQRMgenj9rTubs5ywgincboJ88fnAzk1CZeHu27rKFz5PgDaTfsv7unks1F",
  "key30": "6Uoe2bQAjMFsTmXJu1LQtTv2CeT49VqpZhSkRVcYURA5MdnfiEopizF9J3C2qBxR8nHfAFfiejqk5VLNTVL6TCw",
  "key31": "3aibEZszDxA95yeYTEkGE3Qsad2vFLFW7E51MvRiNkw3CebtcECtzL7QW3pAq26RHtwSRqHie6DtDe55vBPrGWsh"
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
