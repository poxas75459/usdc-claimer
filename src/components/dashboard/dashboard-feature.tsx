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
    "2n7VsA4Zc3odbXEZeu8poQvJgNbWPftcUcUCsXEJ3TToA52zEce6eFoh2jCDEuscuwL8JyRfznQoQA23thkdmqDh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TV1uhJU61n9SEmfWegQ7aviVWtoPWAyoQbhij9V2wasGYuz667qcvPg1NiCTBxpnGzGyCQmc4HAKJYhfCiithdi",
  "key1": "4dPQsfgvz5XeKTMj19CgVvkmRm6aphBXCSvNcdqn9n75S7Sb5VK8hwcrFjmzUM3TW8exoTM2ejYX3g1hyuKsacZX",
  "key2": "4aB9mb2kr6AA5h99W8a19wwrhrmAcgZp3i5pca1bCGA2CQbRXFkPtYQFpCPRCdbVSCpjB1721gQffgujtj1C2LkW",
  "key3": "33Zsci2T3NsDQEi2roWKmEQoy1purQjRKZLv8exngKxtn49YPFNjzmheaxim5mSdyAvHHFDYj1ezA83GwmeXkhiG",
  "key4": "5j3yGXomgqJL47t3nRjLpVpUHpXNpAqDVUggGZT52s5tfHW2JU27Y6waJwpEzqjCfCMhLHn6dZu9uB1LWgbGox8U",
  "key5": "2bpQeTskJVsBDpPvkCXDLDhNxWAmJi8rRTCrwUrje21Jok92kjmaPVe7MvMyfwc5q5aMMU6kZDyhq2GxuXfRQH7",
  "key6": "37o3LszzuDmirCx4rhp98aGeJraNic1YnA2JaimzgxtLLGMkLizGaGKPsw4LRiW8xo6gRgXAms4fCHDUrydAz6ay",
  "key7": "3qv3Ms4DNBLegEzNrfXYW6oGLyfaVTyTBMJdQBvJRzAXRgYwD83HJcyTWrQnSS5iSxooHCY7sntKmkBR6NNP7ZhT",
  "key8": "AedeeVDW9Bpy76Yyqezh4fg7phZcYkqC575rQu2ZCTidD9KHuHr6dwcZjXW9kiZSTfHfu8wnzDye7DZg3JAw11Q",
  "key9": "QZTxpoyYEe5bTUhkmrx5LRixETN9AroqmEdRcSYCVEC4qW356mo4waJ6UyHZkzh7WCpaeeoA2hp7gicGV6Mx1HK",
  "key10": "5MyXWBD1ADmieUFtXoFmSsYZE3Xrwadq1aJWAxNYHGe4W8kbGt1EbJDbqcdrpoNsep7gGTqoErQWTQXt9xS3AfJc",
  "key11": "5qjPCZb6Hg6dGUkHbV7fs11zgw2didPMfVT2DfqPnS4QmoLudfrGcbS7DjWpa1DnhncMXX7TkbhsgB3jwncQVmxG",
  "key12": "38e3NckTmbFb588jxbhaJ5G9v5FjZbTYyEfqgCs6khnr4K388phJXMrAYiFFptgcZcvwYrKawnH9ApyWnH6hidqR",
  "key13": "2j6XWUnLsjSfL1eUTW7kAPwvvCfgdPmvdsTBjs3Gs7WzNJUCyLFXaubwme7he1Lsaoxd7gRNX4ZZa8z3nP6dWnYV",
  "key14": "4MBpWrBHbDrRVyNpLRRUGcKdgmFs1xTV43ZQyU5wQD3m7Qq6JY4ig5xu9nQvx3QxZinSAWDNG8fWfWmRJfK86a5A",
  "key15": "3115M63f867ocEWsYKNYysmdkqXYj9tGwbTkp8UCJ3QyTatLJo5WQcukhVkyrgZfd2tgvCXaS9JpNjMcxxust7T",
  "key16": "2P7x2nrBxYsgwGyRnWM8qkxnyZ88HeeVgSfoNqz4gqkeaqNFRFEMBcBnrngzc7BqC9hq9r7eSLWaAUxPspFspNuv",
  "key17": "54enPbH5DAXfLyVDuwDxoo8rpo5SRGQbanprPcXFQ4u23t9TuV4yAMkhJt6WKBx71FWtdG5dT3XZ32to4ne8xVJW",
  "key18": "4DjT9pJ3Li6jaMRXQawZ9ymYt3sL8YaC4CPkKAJkR3jbqhNVW22j4sjAT3jZHJPmGgfL8J75Xvmy893t3fFxsVoq",
  "key19": "4EVW1VhkuTDHoh8rGGnU1epSSwHfKcAB5xDpocLiAcaxiP9zFvkB7PC54WU3p3pb5o74rqbbtJaZbyfjhvXJ6ZPp",
  "key20": "5sS7wwH7ScThBfvC6Nkurm9KLM6Ur5bycBRPpovTrf5TXZtmq4crgHeTTkDff2PjeWmY4aPiTx6vV2optnG24Mng",
  "key21": "3mqQSQrpA4rA37cXbpq89iUoG5sEBAkGQGHSm4qVoGpQbWVkrJgW7NiBoqhiyz3RKn5TZe5DYoEezLPQuJbZhR2Y",
  "key22": "44RP1NybGTubwCL152LRP8KBywdr3dKiJi2WmJWoGn4E8pBdc8KvRUxahbGuvaX65DK1whFSrjFK2XbXWVKZbcor",
  "key23": "FFgAZDDmwUMbr5EJtcyGMkzjFCpd8YdAAyVR2DBwuqwrDcJF9VBmBrJGfCCPa49L6wAwh8LYLvmPMNyi44RJ3Fm",
  "key24": "612cjVUcuqtL6jrxqP1bgS8xKLcdfHpEwShZGt8WFmb1jUwqVe8LzLzswzyxeVg5wH8BNkYLikQSpkmfZYygZg2q",
  "key25": "3Wh4cxSxGVWN55zqfNtHHuWrhkr14YR2ciscA26oAU2tL6WcqxUfckvaNVqVgVzTchEqfsRtboybut6D1xBdBH2N",
  "key26": "V16m9iQKsYuHVawqLFvv4Z6Vyor8bLA2b4S5WiBkZrWK1Px8ZHS1GFALpXXHaaWeowLb9Dji5NRgEmqmALPKRdQ",
  "key27": "3AHbdS4cKmA2jVMdmikojTpQd6LNkpvEcPAropZgNNfxD6pkuetfjh2d2KrCL3ChLT2bNjq9uwzxZU7RqezV6udZ",
  "key28": "3wpJDtQwQbDDCJvnG83MK2jKZdCVZaureSGGTqzMN2X3MCHoXbU3NGt8bbireyyMwByKSEir85Sn6dJBszqHNVuU",
  "key29": "4owVDaSeMnCuqFa9a8xf27yD5sn5BKkPMAaFMcrgRCX9u9tdngMSYmoHZo7y7DrqK4WxixzdXTmNV6XiRsK2xeUA",
  "key30": "5W3WGvNJAPTmivJJ81mEFJ8aenjn8upaCZZTiaTthaJEfREKqmbb9gkxQKv2vWCK8zeYJ9q4YHuDTJUiowhWPvxi",
  "key31": "2txHeH9oJo2euuR9bgVos8ofujH87JsxFXvdpHeW7XtETBNYimzcL34Tetr6eAGNia9mcKRxm3P8h1Rvi7qQ2etE"
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
