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
    "2jLbnCHgjAsMR2hLSrMzUd6C5u2N5iqSVmWFBCbfNF2ag5DmMKwwfeHUANwCiWAeA7s6wVotAeKXsNG3PQWnYfsk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d3UezEXz7E4xckxhgqrycfwBq712iBgWaUqBH5aYwz3Lh935zXAN6YrHJoyHfjmWVaCpzKso1RNCCN9HBVKscMd",
  "key1": "3Z5H9pmcMR2jWg8RVz6duLvLxF5EZ6tQegCMKAJ22aswKhHzKdY8gdHswMrKfjjwsnjwRJdEe46MbMaFZp8xCHjH",
  "key2": "2wbF43zvhbNivMzW5JZcFATAU9QG4svYJ7TBiSn8rYDqxAW4nZKJiuyxwDb8bKWUd4uaXEiKe3MZHYsYKDPydu4G",
  "key3": "3zN7WzbLxD7R4kRZqL5i37RktZuQ4xb6SjoJbo4kZbvPTtXxsMish8zT94os7CHYoAKNGPMK3pgJZ61rcQXuLwmU",
  "key4": "NkKFCiBdfzwnX4sKZr9Tsq3SoJuyk1HNq9HYJft3ySwGbRQf5iX9HuqsYk2bCvJYDcrDWFCQv2NoDadM8bwPPr9",
  "key5": "RJCPCXb6yZFHTGJzinKkERRG97Bh4yxaekjxErn6G4PzWnSZRafm4SussQUHuP3AEBkPWnLThCRuXtZLdzrsZYf",
  "key6": "4XPJS9uitcBvzc1H7KjL6vxt1RPWjDRWYtWWXcS7L2LhYynNEYzLFsDN7CCYwDJxhadn9tQufpsZvHhdtgppicbu",
  "key7": "2o9Tc99QWekptyvb6rG3bbbJcKD8JumyVHKhtXBKuqmRKKg2tUvWKDy4ChCHma3beQz67aPfk4dCA161Der8WGyU",
  "key8": "beV6GgxnwNC19MAhKnwhP6F7vEcUMbJU4r5p7PrAiZJ1VQVTkF4DhKvRdqJ5G25RxinzSFg94w4JSepFXSgs9FJ",
  "key9": "5QkALyRRxP3dDicuHQGg8zKshcrxnb2Tyrf9hiUvwKhzR1aciA3hxx5mkUpWbJutdEprBukG3Uv88CbzppRhfVud",
  "key10": "ACqs1PcbRdG6wwZ8RWvt1V8G2ug72MUzEpaGPV364jBhyWi86yQbz86TceYHQ6FadRxynyHLDvsreYW4aGNT2Zx",
  "key11": "5H8Y4jDKaXifiJUUaTCUsy58v51AdZxoK5Uodb77VEoJP2aiWp2JMsnKQ6Dc7qHKGMn3H1JZxxVZpqGXfiUSoequ",
  "key12": "64zRpuJYtFaHVGNRB336SSywU681ofbuLS3EQGAgbf7fWofF6GrgUsKVr1Qkfwrr2aQGxZHHDtX8Eypo5nDgnt6M",
  "key13": "5LsorkZQkawHJUEVtUyEf2CnnKpLEr3s3iSCRrhAZ6RkZm2spuaQcCRF8AprvAK9Aa4wYcuVPyGsAyX9fS26dAFR",
  "key14": "4wVVbUrdxrCkMrpEM9uTsMyGHceee5hRw7wof5Xt7cDK4EdR3MWDrqG1geQsyu9AmevLHbCWKrQcFD6uhv39wCCz",
  "key15": "44hSvVqb9NAcGkZa2sbQ2BzpYvMF9CCt6mDU2cTG6P9YajQ1YHRtpxNCFjrtxGjZ4ZedKKawFCE8LhzNmX1mD9DU",
  "key16": "dgARgWVQC2vZWgbhg8NzPEVGh1cL3FQu8utjprZj4nMVoTX9Zads3YqDgdf4LkNLMwsDBnRxeR1A2d8ciivgg3y",
  "key17": "2SpUn5BzM6zjoNVB8mHEardwYhDbHEqpBMitVDyeM8GfVDk5Cv6fgRgLdjsZ1Z15xBn3nHREJSHN4e5eSoeuLd4b",
  "key18": "3GsKCsmMeNKA5VpAoZonGdDRqaYvNVTvutNqeUGGerKkDVaicbkYqQGkQmvhMRkKyPbMhPpEPFQkcmxXpZW5zHzT",
  "key19": "oBybHwbC36kf7sMtkE6XFCjRyw1xDkDyyNs39QtjLjSqDRyquYwPA6P1jXsrXxUZC54NTn154qygxrFfCTyMvbk",
  "key20": "5N7XXyvxr3h2pHw7juhUiihVSidFRY36yphTVnZBetYK35f86xd7Kn7aJsNvA7KZxM6ptcHTR7MtX4gbb7s9qD5v",
  "key21": "5vUuBgv4pMhDqALVznNGWYK7kd3BBXAuKb5xESiqdj2ZYu4eoHR6Nn2ksjTcaKkXLcTaeRd4EqVFcX2m68Mt8ZP4",
  "key22": "2t2C5qdn97jBMtrN1fgQEWNodEksLyCq1hiUCmv8pzWZynvBXQDCcSriRunA7KkrBa335nhufaZRtx7hTRfQ3JeU",
  "key23": "3nazi3gWSE4NyU9991uvsmvk1SVXaGemrf7LZ54RxgaLCzU9tBgFiRMhpxuRTpTyZ6v8JLZR6uEmgu1DHJzhvkxc",
  "key24": "5FKadRGdwkcvMb6zxEzLLwaNd7naPs8MMHBhzvtsLN7fzpTrMkfRZtKEbwAoAGN1ZKgpQ64DZLKAnpT9Py3m12HZ",
  "key25": "4PRa9uwkYf4GwWZ8XpactaiU1jMBZgXA2f1hJPVjj1hGgab3j9Csu6548V9VnHZPoXCm5wFzzPw2GXdPX73GB1vA",
  "key26": "k9QKZSz9NtQgd7NNXMq77pNTRzgTCnByUJRLcRej6K5BnvGnrjEznpoYrqhUyccWyEwEmTonTEJ1NN13pQTi33u",
  "key27": "2z2raPt4vGSSMd39Kq4s8LJN7dKSAf3e7WpCTNBdoF1mCfYzfUxqSBNVUipW1dKujbBqKW9b77JbNkrccPAwNv4o",
  "key28": "33wqwBzesqXUWxPJzD7vEaDNW9JVvyPNUHEEEcdEBW4Xzx1UDLtkGjDVniHN7TbfMpJ4YmfhZgg2C7ibN2z5jHcr",
  "key29": "54BEyvGBiTxohE2AdBvJsMHGUNgcVnSbMk1H6RYHJjenf6dUYiAhRhLyV79f8KNBb37WvoQihcxvmfG2TYUj6qXP",
  "key30": "2QmzbqBDUne9dnRLT2aBHWgKZg2Ti5a2pRV4mCsby219nex77A8RQF5iyumiVs6C6P4iU5bmiHxJtgVu9Rp66b5",
  "key31": "3aTFK125G1EvRxnDkWxvL8oZTSWacaTLt5bigemzSAjAUiRZkfFodGHnRbNiPfZYp2JP4xzR4EeqZMZbvSQvor6b",
  "key32": "eRmPnJsAq8Qh9ATChJi7cCUZ2ckqEWfibcuR1i86ghVVtX3kGcuaKZprLVNiszA2WJJAjUSQ1H3q6ZGhyAgUWi8",
  "key33": "2nEApq4Kb9gtCh4LdUtDBeEpjvaUp1K9FzL42pTmWfNMu1LApas8EwUTUNeXB1i15qLy7Mho8VKHw3eBDMMRSMxp",
  "key34": "3sehEV2xDRcFsQCjVsJoedFmxWVtWyeY2sBvsLUNrWfeqGeiGHk6atPC5VR9HKN1EMtmB28qsx5wdtGgQPw2Ltyg",
  "key35": "4PbZM2gdzNg737sfVjAQiWMWNcatGFHhdi5aaLQhFH8vpdLDTN8tYozLKCLALhMLR1pJbEcuSiBSz8d1G36Xq5b4",
  "key36": "5Y4icVg3FyAX3ct9UCneHJM1rbgGDit6Q5g8AJcoKNvmd2cEUsQsPn279ok2SHfrZNjc8yUSZ81hWX2UGM8WbaR"
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
