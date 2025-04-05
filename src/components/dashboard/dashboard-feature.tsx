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
    "5Xng3Ca9bHNLFKSBVKpK91XwELynnqHHMah4M9JbyDmzAEqPkKFYA9KMPXpdi1n4qo4R93rFXQZAp4UsbLU6RyD6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "667PBRpUUNWgPrxcG98RQjRmAF6nr9dyeGU4UY98977TsKWfi6uLzjB75hifD277nfWzVnKsj8JqpJrikooBqKb1",
  "key1": "3Aqk9CnmzxbREpCt2jKT5K8JBGajetyTog1btihuUa7vcG2TEDtQG85PWSRws6QbNUbfNuEDUEcctyvmpeAnYn8T",
  "key2": "4MZArMuwWWabhWyD4C8Be9yVNTb8294tpPPwuRNaeGoqLGke1mWsguMYxXWM7dppaJTTPSRUrQ3dP7tBHMsqQq9F",
  "key3": "5E7MLWAjvBTKBDN3HQ9jwhrGfsRo6gJ5n8dPNBJrh5S4rRoFA1t4x6NrZDX79pKAjQYDohLQ7kebZ4L3zLvs7cbu",
  "key4": "4rz99iRKoq8F2cGbMHMzFk6eaSsJVN5LEYqCwmh8KZHNgkZMSwgVoQmAFSM2L2GvmoqNFHkq66o8QxLVBqFTFwPY",
  "key5": "4e98zJyS8qsDkbeVn42PRf8ZdWPXfmyUc5eiQrEkrkQhNHtF3BYXjnucascL9KbEubNJECk9xx3KRw1cRHKccU3W",
  "key6": "4uAw7d7J4XhWntsjzTiUh3T4L1Fs3uVQEaAMcrmh4wV9pDgSo5amGcgAnAXEqDcvi2S3x8CQipEH7vjaxNs8Zgh6",
  "key7": "3dRTTq21a99fsAiEbqMhJQAcn8fEpGoGPgxGQ77g9evq1Waqy1qxQFpsTnAYmY3PqxjcYQsUj4DD4Mb3WvL19Jqc",
  "key8": "4RDZ1Y2oWmfGziU12aRY5aNW1ktncnreGNK2UfwRaJZHXD3H2y3MBp3YUHD8h3z69nRfonWF3RVtBBrfxD3ZJsKc",
  "key9": "CwS3Wk2VYQ1D4tQbgM9SGEFWtk5VJeym75235Swkj3SghC7RqF5Lwhtn9F5zXKQ8zDXxZcVdH8gVo9j6bPQjDGu",
  "key10": "3RqyTzTSCDczfeiAqAnRnhDRzGkMyMxJUXfdP95VbkT44cVwj33CNRuVuKrKt2uYUpxqaWf3oP4kZEKiPgXPFRoZ",
  "key11": "5Aze5F2TPeM3enV6bXjzTBM22PzpFhAk2A7MqaNuaCr9AUcFUPZY6zhjG9tgFqgrBjMJC4QGDgwJhjjnabgao4hK",
  "key12": "61EGibG1Ya2VMw4AXAT6ooCjXYr1UCnv9xEaqqvGAswwfvU4Zj2RubZNh4ETU4XD5pNnkbCnwa8MHfVWtDnvnMjp",
  "key13": "5AQup2wXnb2CV38aFc3DjNnEm9dvsydkvmC4kLEgdbb9WSHTa7HovqEdNUU785ZVTX29eGZdwKasnDgRMR5vh2oy",
  "key14": "AwNTfcFAkhdu94w6eEduih48NW15oytBUwqVjKM69W1mnCev9TMe4APLA2snMrq1RaZEGhAS7YhYzMACRuMRsB2",
  "key15": "32RYXp9Xx5kSwcamS9eK6S8C2kobnzCJL26UuSPDKNogdcnSRk8KSSCbYhmy5UvjfZmM8iY2JWmRWdT7wS1fNUtp",
  "key16": "5XEH1EmS9mujQBNoUPp2rkbzbVFZhKfiXKANWMu9cFnJ7DnvLVELbXFfQVRhRyovsddvWYuvX4329QtN4Pyw3xL4",
  "key17": "4HRjxMAeTVW9gncTXY6xJa8w1HTKSNnHinGk2iDo7kj7p2frWgdPuH9tuTVbqbvDLuJaMCdhakpD4CW3kZVsdV8q",
  "key18": "2wcokSUkxQMy458JYwZcKK5sh4FYc2GQ3ow6Ma6NrtAvSCNjxKU54hZgXHxksghqoZtw7aA9sRLRrDJmwHq1c7bZ",
  "key19": "58AkHLrigJs8itVY3ecQGUHsk7JWcAhisAHmTFzxCwjMj1QhALQCQwwbMrjZxAxcSRLLq9ChxgUURjXe2z62PKXa",
  "key20": "Y8mDqt7WRHYhhM3uz2iPPz85qmmzxAkW9aq35eLyDjvgbmaaA7G22fAhMqMHTAxdcqNUSqXQEgFPdBicjWLTSrR",
  "key21": "5iiTdiWzzBFfJpfHzkLmQxit65DiLo41VFCJ7DatLVcF2xiqTQPQE6egCTprAFUbfz9ZJqJu3GA9UuVZCG2BUX13",
  "key22": "izJPAfH95URGgCgniKoFvYNX9WyeyKWJjgfLaEvUW6tt8v7bBnkQbxjmNPgZtd9bgaotcWtZMXi5UGJ6kvbcNqE",
  "key23": "2538UwQEKavh3FyGuPMN5jaS8rXGM6uTJMo5XcsbWMgDNe45FX4VFmCzjooSoCGUyX5xU1HieDb8bTAp8W2ugwwJ",
  "key24": "5pbu2FY3S8d4pugxRcdn7ZFfPqEtqdBHqbVrRN8wnvf4pqhePoQgAVUNK5LUuCNjCXEs2gofJVS31oRbMzz5LGFy",
  "key25": "2KiXybSvmAWtGG643ZKPsdomGf15FNfTDau75Yrve5RzWUtg4fkvFXXzLuWLYKutwTEHxGagwe8955CMvJ9Ba6RG",
  "key26": "2tbPkUo9KV5o9Xa1tX86nihjeHwRkWwsBWVnWSibYBvukEFSV5HzoW9dUMqion4AA7Wz4u7jKArL92DmDAGiTpfP",
  "key27": "2t8aowJ9fXU1DZ7RzXCf4ubj4zMPHEDRWvEDJWscaqAWBSEPVutxjDVsb28LytddGU7dguhHqvvEYRxcPQv9jFTn",
  "key28": "m4JYmnLdnc2dn2Lef7kz8PTCLBLnp1WW31NaPyqNXdNHUuD9x4RnthD4yVydqEh5YAJwTvPwWtYwGMpGEGxggni",
  "key29": "2XeLnP41Mp5pj2Lmf1Z5Yfk6ZFYHAPw93g4TPpbyGyri6jBcL89Gu2fZrxTvY7FoXScSAJweX7BcGT5yHTyoz7Go",
  "key30": "39fc3CF2uRsVjSZxBu9tSX6nn5GvMZvpXAWVhhagkAe18cqsAsCcV86GoNo9KxptsWCuYVauKHYC25pxy41k8Lyf",
  "key31": "3vQJDnUkUS2wfEjyCBMQ1GTt59u84ezCEW5mVRhnqU8o7MJkoMX7EKjKqUwpnMGGNV4URBR2xZanSDt3W5GrX3j1",
  "key32": "hdGdWaa56sqpYftsLuhnjTvc6XAtexuUFqoS5rVryyScxA4NQ2BBpMaZA8TSi7by6UfMkfBHa4nYXfCj5gh8bhc",
  "key33": "32Ww8kRb2Q4nxrW5gBXbcMAoNcsjUhQY7v7vgHKT37pYeE54EZGTw8dJJ2LGGgvHWgqQmZQjgspkhKGB41SYVtqo",
  "key34": "2jnL5SfmRVtCi3JH1GZkivzsuLPRnUTqhC75V9CrrNsPSkYrqvqdBPmNX1dZebkRuvibyQNEAqjYQtRZ26Mfczv4",
  "key35": "57rvMpyLDBDvaCFUfuKPWqqjhw1tn6uKa1FhwUvYw4CEUQ2XouyvgURUgxmfdD5yeVKbJZTYTEYXLZrewVjYDBvU",
  "key36": "X4VHofQmh2TtGVL1Kc2hwiSxaf8A7oJ6YSD1NKPuYZP2Czdqc57wTX2ry7QrY3gADBqoZ3dDsj4VZRnHmDzf9AV",
  "key37": "2uuThbt4FsfkKVpLMf4yyMFgWp4UtqcYCcBezCYsX31XyWZRsg4uHX1HjQsHZhxjaQ56uqEkqZ62EYmPH4GzSPi1",
  "key38": "2g6qiq2ti4pUKBnMbmenkSxFRBn5FvupT83bWmGARGdCAxqdMB7tuVZEDv3zDrH4ntmnjqSsZpBmn9v9qE2ZRqaK",
  "key39": "4PnrT8GkDpG9MWdqdEPHTqPSnJ3BeK5n5FWqxCQS68BmcZdNVQyLBKiM4K3gfQ3ozKLJtUnYyv9wkUrZ5XSh1HxY"
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
