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
    "2zgv7G1FcsuJr2XkHh81puckh1i43crtqKMCtH7c4WAfRWbooktVFT1e3qDDqiyQWuQpW19jDGzL3FfiEu3J6AhL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o2tmeZk29YLg4dMY6nthkgZkDosdjToMXpjVFdaCC4bHE3U7qaD6FLRSRo4xUJboVGz4PDMDeMBgd78PpTNAKxh",
  "key1": "2hUn28HztQMe5R6Cn2Zfdz8BrHZVuqU8k2NrL9m3uYaaoUZhsVGT63TzFkKkJBdoSeQxfCmwXiFGenJ7PSRSkpoQ",
  "key2": "24ZsFBXyPP2s14M5sCDoHAyZYBL1g93ibn7KDN8Niv21ji5zHbbxCbsQRKv3K4RzPEM3nG5vxBCS2m2ntw3ZZ8TF",
  "key3": "2jTchV3MmbCG3dHALW2BQ3mq1WUo1kE5y447eZrK7uXcafUfdrKmkMgT19f27ZisSAKjzU1wqmyzgMZHQAojxVAi",
  "key4": "5A8aGGGFDVNexZDzZd7YWVcRy7kLfmQdpFQoydXS6i3bNqHB3EFw7tSKZYkJJaKua7GigJJdzgGbgz6Z9dTjumFK",
  "key5": "2YDE8wvBUstqqiSAuvTbxUwfLkBzq3hBSi1pf7jCvRpKAfivDnrd9oP9mt3YRwDg7EYQUEDAQneYvSW6NinbMoT8",
  "key6": "4uwqEU9DErbvwt7Sr24VXrEN3avfJTq4LhzxgKbpMdK9WDvvfE1v9XJzsHC3AUBtUTEHtcrt84qmAs2t45pyG2gK",
  "key7": "3CunLLZMtkBCrU2kTkPMhVFUkWjr42Dves95todC8mWvyARzeYmPmB4apQBLeBFY571dBVkhvY5xkgwWKzjVZvzk",
  "key8": "3777UAmgC4WD64zdNSaiay1KqsAztu8bRtHDRhz85g2VgMGJGB6dWskL6oAG8ric9TdZfzZqXGyHr2CLaz2KR4AM",
  "key9": "5p4M6KFBsSmiJFbYaoncTcEc77jEXk6yutjhXx5cD3GGtDg1aXg6MzhZBa25JDnsomT9pineL6x1E7FGv7HdQqbM",
  "key10": "2iGaNNd4TRUFkWYDaVmxVN6GDE4MnrKEmt7wR3xH4EaajrQ5N9f9qE22eHeQqMUDySbL5CP7xa9PCdDokPhqfbjK",
  "key11": "5dkmLp99aY5pbbDH98urJNs3R34UPM76NW2KaYo13rFM5Fw5wuznihuTXRtHgCebbLJLMxGmoJRfaUf3P9AxaA8N",
  "key12": "FALfyugJ8d8Mt1DSfWAfpvYxcZPiAe2MnDU15LdLdVqHQZdMhj2sDEV3umwjad3GWM9Sqbw6dqjfza5A31B1bpV",
  "key13": "657c22Af8cEm1k7iowqm42um6KdbUkFCChaJa6pjsCWfw2KpzGKdVXHvNXXTH4xAFRKAYhdnGYLNRDQe8CRbNZF1",
  "key14": "Qq2AzUc9uZKDai3ibyuwosnaeRjHzKSgWphh5LGARsepEMUNxspj4Cue1gcfLZahk2SceAKsuedVUH7CmJyRxEu",
  "key15": "5MvXnMKv4BFvd25GEHN2ycuk2CcyurwuQh2yZGWZFubre4YdLMYKkVLEPXCxvwHaw1EhvJ4ajBvPtTgaaKZ2qH8Q",
  "key16": "3kWRBwRd1iNce2NyiZ21L828AhM8nSpfUXhJZ48Ex9fLmVgCg1XLaLLa5ouGSgT9rxZEAxMEtmGiM6d5ZSxTKTc2",
  "key17": "22fvs7aoj1ehT64gVfEmb7rvdzv7VenRL3Y2TF9qwG3bThSV7ZgCHf2LdsNwm6Nr5WuF52dbnHZM5ymKEJhWTDxk",
  "key18": "z6SJYMMfny27u6XqnSBBNJsAVK2the4LBVMtnAk85Dckz2DpbNmJWYnBi6cQpxBV6d3JEynAxntE39Ph8zWbodA",
  "key19": "42sZmKoAsYwukb4dEgY2io7EEGnLa5r1XRBNp3rpW167kZNeir2hjkKCWRGwq6HP76fLBT3VVyeVhnzbKrcTyeY5",
  "key20": "wHYAUKYxUqaLCd7ghmVzwb1HYyKgyVzpvchzPjvQWu4sBwvpTANAUtauP6PB41zFKubQ8XLdnzKevX1eWKVKm4H",
  "key21": "3m5kyGxyhfY4tT8VMMudkiQcjKdysjqQpq7hjMHmoooxrsGa16JPAMhtXnkwuti3cmefGtceQYW4SpQYY4bkrhKk",
  "key22": "3pWUo5TXhWyiJqDrJJZ4DVWdrC6ZSk7jmjnxyFfmqvj6BwZXyHMTS32zWhzAra6aqDyhvjGRHwA1khMy5R8Y7Y57",
  "key23": "61X1WsgSyD7VbKD8GSCfqbi488p9oLvimQAemRfDYGQFoYWDYmzr4z4eN834gzWiQpnnpu75Yes7PsPUfRFDWhUm",
  "key24": "43oZV5kdFxQefEuT4V4SfPW9GJ8mGiAUzrkjMjH32Eb7h4MmjWSxLFme3k9DvAP5k54tR113dyFqsTdYZmFZgg8y",
  "key25": "5mX1sHLmC3b9wPNWGSMwGZ6rihMYGhCoaZ3rUTAsMQjif5w2hLaDJLieQa2xmoRMyaSYFaDRfK1EmrRFxgHyVosz",
  "key26": "5faNb5eC9oiY4xPnEgvjEGuMhc3Doa4FAm57Bhy7MJd54XPv5K6svvLNwHB9fEonGYhm3fKd7NHqTxDhbTT6sPnd",
  "key27": "3dVHuSy7QbZTcoupZK6zpmH8QsdYGRwTf2KNJnPzA1DTHAocdxkpiNptfpPWuBzqBEGRBgnh5vHLE1vnkMb5gwwQ",
  "key28": "4JNGPU5eVBGCr8Pb9tjA8nuqY3pAfgUARfkJAWpwRNKqM5vhRkruaxYyEktGihyJSqzkoniYw2yaM7sdkJsaNqVk",
  "key29": "phNGg6biYmbqE85M4VmeucjexvBw3Nuubuj2NkV94tnHUW6sXHjLcDPEskS2cUo7P63Mi1oyEUX5JguWEv1SyUv",
  "key30": "uVUgaK6PM1yGRXZTEoMrKJtTqekPqhivxhXA57gSXAfTXXxnK4jXkh7YHJu6xtivSpSX6SHFcgidrEzgTNV8e6E",
  "key31": "2isSuKVD91pU9UZT9gdEVZuxBeXXDdFXPWokEjT7omRkfVtnqH7itGvgMTA1zhKRA5bmCo5yMj8WL3X8YktZYXyd",
  "key32": "ceW94PSUmUb17ohs6AiChDnpysKQNj7wWMxGu9xxCsLX5htr36mZzw4mGUZNWjV6hnqZZaqBRqvJirkitFWSpVS",
  "key33": "5oLV4yBZbPjQSid4j3t3b9vdCJJuDVJqkzKTbNA58rEwLAkNt69otkwkCge3hpbavfRU9UwpimMR9R9WB7TEiHFe",
  "key34": "3sk9rqjJFy1xF6bk8KGiajMx6aCGyGirjp6hcukVQupoXVdyQiXosURChRGZkRXLpCnPBepqU3jFRa9xFaPje7uH",
  "key35": "5PbWYThRRctBAJfgsLx83SqaqV3aFPYiuACCZNuVpVRTwP3N3dC32jvffQZyVYWcZNpmsBaetvFUmBsA7EwV6ERT",
  "key36": "5wPB474HKeG6SLUxatZXDECtmsoaC1XDKH3P15sH9ScMrjhAuZFtWC3negwESchvkUnazrcfs3SQCMEb91kDkuCT",
  "key37": "5Q8581Qoyfvu7Pa61bjYmDuEqvQF6tVCbhtR6Er4ukp3vPoSKHSA69SVn9RAxqjQkKZ8eHEgfGD3A7wLgNa9jVHm",
  "key38": "5ToscidE2sYJZKfX5jptAvBrV4spFTM1WaWRF1LZv2Les2sZfLHoMnMtjiFmVqiN55H3frL2UjH5x4cf2VKpX8Sr",
  "key39": "3EoQ47eTmZzpUbfhd6Ee7TepnvQCxnUUd2oZWfoDRgypUnJfDSuW6shRXgcwwvhUAGoH5WZnhEysfJS3EN6ACyUe",
  "key40": "4tGawmAb8CR8Hd4LUwWBYJroabmWVktSPKgy2yGLCF35jAN81ZEFm2GofeMAMFUzEebL3h3QF8Ybus1rjMQnmB7Q",
  "key41": "58YZES9jSsBPeefZjBUv3Z7GWFLqwGsw2JMDNdhKvPQ29JmBTMVYzxConChYwF8EJpM3SApS8fQSdmGbRWbD8uPY",
  "key42": "4t3tDkv9hQhhmcM3BDaGFxG2WtGTaZ8JVeyArZrN8xTQsWjTiSawYaNpMwVp1LDx7hWcccxHBFugfC6u8235CbAw",
  "key43": "3Lw7Bd4PnksFwJKv4ScHFcfQjKYYrB8NrjnszkmRciyoQ9uYqC7QHu9EeprPuV3nMkfDiP7SL5norzTUgtg8SB2N",
  "key44": "2ohTd9DqWfc4TSooCURcqgWrjq4yQaZwEiP3VAqfxtSJ8LzS4LumKJroRir6Eh67iZKzvf4e5575bXimYh23ibi3"
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
