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
    "5fNrMav4t8mTQuJeoqeCiuLaCgcq1bXyXgu6kLGcfHwo4Yt5aRZsVDAYKvVrDDtVzVhZUEB5kD8HCJa9Yp8WNdgV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zSaPkUVrVFfcrptdoXRUhT71KavSpjFjsBfnRmJfCtv95cMin7uxK3QqVKdGNsTAKZ8vk3CuhH9mBKJ6hm9uTo",
  "key1": "rqSS3aXpnYo5GQgxbYry5ndRKH7KreN4Awsh8JpeBezucnV2PhHExHXC5QrfThfULYXMyrLY6sp6QU55hw8WGik",
  "key2": "54u27wSGk7gmiaDL8VaLxR45E9MGV7NSNvQqtScf2apmkpuSpCA23EiMbLFnV5Mx1x5oi7DL7HchbhFrB2LZo9fM",
  "key3": "655C9PV5AKcSCp7Suv3B6MxTsFLxVqVGqSzqCPVM2SY9t8k82Gg9m3D4vTDLD4tCCb5fo47AGWomrZYten3zAGeM",
  "key4": "5HDzVWL1zZ171juqqmGioe71wAAbuiSrwEBDZFwrpa7p9FXyPs3xycqVYRAVZa1KPtvvJvbZVPnaFLjYHc2Vci7t",
  "key5": "4rnRB6azVUfbkhQmgZzHezBBQGsB8TBZC14ErdyKFDF4wu7bAq1BU4MLuof9ZcZHTDU2eeqtRPmK3U4NA8HCMYH5",
  "key6": "5W9Fyyn2k5jdJnQ8viBb5HYcqMjbr89de9R8KyDkmKj5RZHca8mvPEAKcQeNGg3LGkFLH7e3mdsnC9dQGWxFa93x",
  "key7": "32jWnu9H3YGyFWZNyvt84BKFAkfAasSBEaX5jCuA6kVCSR95vDrAz8fG2aRydko5Fnn7nJfXwwYr29YEjH6k9bAu",
  "key8": "4aVosfNsPQ1B1k1gwVvQLd2Woptt4uFHDLBDa1hXhRJGW2XJT2rRCKtjgitRPU8QBzhCuuYnBqYo8u9k2zpthPyi",
  "key9": "qgTpXgViq2qH2mtLvQrreVcHTRbZ5UXsXqw9CGCfvYJB87t7UwVA5pMH8exCAf1k2ASi9LzsGH4wTS3RRv1n6ia",
  "key10": "2vB9jxNwyfRhLrGTF1reidM8dFN2GPVzvZgH3QhETfes3LFsLE3RSdX7N3iNejxHJ8iKsgXz9yESbWSUJmEbgMgj",
  "key11": "5vN7h4TS113Tyj5JLi4Lxwo54NWTFjzWJhD8U72eeUD7F3Y6M4MuGTRPP4A69bvoGtrqbw6EkwHpmXUNsP7yZwZK",
  "key12": "8k47wtDqMGN2FUz6Vo8dR7dhypHjBc6k5HbjecWru2ZMEro7BoGyKqXZo8FxSpYhKWeCVLcGZY26jU7Sr7WzV3i",
  "key13": "3aLcMFawyyZdhATaeG4iio4M6dA3HxPL8hvkLRaMnBZVwCTtELFSKW1dB68Jg2P7Jij1XHLbgCgXJzimx8tzG6VM",
  "key14": "612WHdiFxNFXtL3T28EVoTTxzuPqvRHfoEw7Te7YeCZvecSHSsoeEixTcVvFbMdVjkNAvDuwcZTFAunma7JnR94u",
  "key15": "3jGVoEb8adToAGyYsCupoiZCMP2EqakM2ofq2CJkxUoNiu9bJepZDbaa2t9o9zYHVZTSG2MwvpnzqV4FmLtHzDaY",
  "key16": "2hfpB35iDP2CVKKrb87KmvLxZHyEreqJTHoHJKFyqHLx3fBKtUjJp8oqggjWUiJcJMQUqddGwL6WgLUfaGmRKi7R",
  "key17": "HXomLmPJUtHPaWnoxG4buLDKYweCjEjYufoHQzgg8s87JAAo4bbqh7z59sUQr5Dx5Pw62nx5wxw4RWbMwzMKiK3",
  "key18": "4zM3zgvnvyeRq9Aizqpvy8pQbNc5KjqLDGnWxWnqNTvAqKLqg6dZLFcPZ7np5E2e3xdofWH4kaP19gfZFA4ZTU6i",
  "key19": "4PdXFygtKAZWCmZoMGSyu8DwbRZ3ZjSW3vbixB7he5cRW86vnUizYMmJAWRkuWgeu379AsSUYGCFaZ2vaiXRMYEj",
  "key20": "3pS3H2D7tLTzqBZUPcBHq2YbrNW4qQSGKRA986i47Cvc4cLE8VJGmfFKjuRVF8kAxPAdrWyHeKxUqFHzhQFMURof",
  "key21": "3FvYacAZb2ZGydhnt5uFYMZ6mkGrYiuBepz5SGXvXe4DPzhrtqHmmso4rpU8o3cwoQLru8AygxPpFHKMmpjrUg7W",
  "key22": "3bQzkSV2AG2wuJtt6i7suTfiKc4ECM58yfcHPm4DkHRsR8WGAZ2raWJMjfwZQWYMZSruaUPQwrbeTYWobMCvZJqA",
  "key23": "3JZAyjczmgDumJodeog3oXWnL8jVs3wUvwQtbVc5FWAAhNkc3htqvbvWkoENbNReGmQkNZWwwBGmTgbTZiVsUyZy",
  "key24": "5heJFzzddGFjzL9DLEGJWEvD4iYcC8kLr8vkANeUog3zEQezg6z4nzz1o9fNeGiVWhjPwbus8KfdsFqJhSPBdaqx",
  "key25": "2XhRsT4vPRimKhf7GLCf7bp8XQ1vsV9TSdsHsuqU87VyGb5CTRX4CQ5uuMCGrVtCz1WqshcjZQSsYrqTWuBsEodZ",
  "key26": "4YxJgNsGP23ybReCe2dwn3uoNz14iXeRn3aWwFob551YyDBzupBX6Fc3GG7FRcaP33yTcSL7mpZLG6iKE5sCNVqa",
  "key27": "3J5wq8gijwhiriqirF8WKrgoG4tU2e8aNjE1CCYskpZY3GRVBAhZcZoZgiViHHZrM5BbHQkhqfpNe9gosK8tYqsf",
  "key28": "21w7bCCr3zT33etTdhyvhDRPoYvmHpfbY75NMotnDN5Lj7ar6tsrfmQjabj1WiafN5RKM8YPyzMVuKKhQrP7BR5X",
  "key29": "BuLB5toDZtKibCSbDpKHqGYNARE49tqwPzer97V6cZTpxjFHaRbycoviDuZPL2GdVwcWsawLkzWQWX3xY8XT4Jd",
  "key30": "3BPiTToHXwdFpryzJ5oyffp9GM2w72UH7PMRCTSiUPh64ybUsWNWi2yRHpB4cZK1uBw5bPCBwShbArLkeN9xNs4r",
  "key31": "2yXQ46iy2jHEUBixEFVUYEAoaN7sKFLonBfcPaKHWooCRJjw9mUSW7kPxTjKbRMRGLbiQPkskfwEoopTA2HXmnVm",
  "key32": "2bHwcxNdcXYJv8wZ9X1ya6AHaUc6LojKA5B1Zce5GNZXma61TGAXFtqV6FBrRrGFmFXvTDGqeZwx6ETLUFGz2FPD"
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
