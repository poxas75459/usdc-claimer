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
    "qkE6Mwy1UyARGwBnVj7aitmssteFHi2wW67jUdAgtPYUHHLcQHCH64oVWUGzp2WjVjzWYXRqek5TPdQzYMkF3UK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jZ7uWTdAP5dELPb4xcWwvJqM3fiBnEPPEh6YvoN5NekYErZvkqumzmwicmivB8xe2QyynjWuyDgQ4uH1V2dHtEC",
  "key1": "2MxzbtvMMi9VPs5i2ve7dLyUAgij2ZruZrSJucUtrcqUYnMucKKUryPbv5c8qQ2GSa3zZ6kgyf2NimZDMB2bJc97",
  "key2": "4Meb55NvyGmfYMNKJ4Fiza6GefUTfUzW6VwRwJCriDf9VNmcuYkcCbnymZuK9TszFoifMPSV29pmn8nkiy3771Zb",
  "key3": "aHk2DdCzZxVKaEkwnEzhU11cDf8oNishfWR9pUU39MebR9UauwYW3dFaaYKEytWkypvrZJKn2pQ5U4V3nSmmcHT",
  "key4": "3DXnpZmnYDYW4ZVZ9ZDyw8hWytpjBVjGUV2pgQTde5ux5RncU5cm57WETwhn2HSaVXKf2AE5wLCNC8cRoCgoqXVN",
  "key5": "4784of1LYSMcYtn9HqaNptX4gU5MyXFEsJRofRx7Supor5xHsEgpJDNPrj95kghBfA8uZYFJySJQeqDYxwchSMph",
  "key6": "4oAa51SUkmmZUQThbgRmHTxEmajwFUP6YXygNUQB21mPwcYMrW8S63DVqVFyvkvMP8gZQcvk1x93u6oL8FYWiiun",
  "key7": "374RwqoWEbBYvv3J8ynZjEGVsrwuvEu1D6GJhjriLHZ4wP3SSHFrq78LBDNtUfYWdLWan5qy6kQmS24uWmTxAv4x",
  "key8": "3xSdnQWjCWhLx4qNToXNqR8MQjfCtz6esKMnVJ5hTBah9M7zjj4DotUsCp1WYQfxfBmavnpH2JWZS1kTykiBEWfa",
  "key9": "5WD448MafELQaP6vX686M8qgXqby6AWbE2VJfzw37L2ZMb7Hk1g4QSYTHCSgx6fu1Th1Y7rhSAEhnjyJNt8AuGnS",
  "key10": "43dsLY8zbmCeSoCttVgSNZGJjjAKEm5CMNQTANoi8B7UrV69XFtzYwm6aVBE3kDy4XXQyVofSpmUThCipCd3RdHY",
  "key11": "5o1cu1wEk6a9UjB1x5Fqjw6Da1r3b8ED6TjYkgdyDgctmPLfEaBNMMLoqTs4oqcQKkLBNnv3eCWoBCYxqfsz5t7Z",
  "key12": "BvfqZgidvbMtWyDywF99kYJQe5d6pKmL31CNAXp8t1dMGHe27UxdSxggdYJWuazYHm5zwxQ1JGsqqdpgXJCHWBX",
  "key13": "4veo1FaVSTZqYJSxuN4wmNcwdJ9z2UCqFwxdWtUGBKmFF4azQR8RjLNbuuQ5yQ5WYYbHnEW1keebPmUYAnwtPS6G",
  "key14": "WfVpoXcG95Uko75k2FyYEtvuh7Crq45Jo8xypBGkqKRP2esESrrdwWWqjtYQ4SQneLVigvVPQ7eW6MNYMgZarSD",
  "key15": "2YSHFNtgeDe2PJcGpoYx7qUUkKWxZsw17wqNbgFBuqh98zDjhkpkiD6D7ATKSXKF4Xj6jxBES44xhovVo34gZRoT",
  "key16": "2qMtg8vQL7oaUy3gN5KX7iaz16NiZi5U5e6kXQPC2MH1DFG1EP3EtNmS9j2kvWe24He6TaVP2YNt3kekECrr59vR",
  "key17": "4XKZgPBUBfufFmjGsVYZ1jsfbN2WrufLayb27ipius9e8qMrH8wHXaR5JMSw27h8rXhdjecESpcH1UQjzVA6tUaC",
  "key18": "4P1z6985ACNwhQRrGpfyz3wUyhHC6wQbyQkXPXN67YFHvS4w1mm9Rcx1FtsrsmQY3vHqJTDrPbKowGNoHsXm28TB",
  "key19": "3S2x3SzCBmRpnKurVR8JJG6wkzufXeRRSSd5Ym2GrB8U9UPe313jEwXV6Y3vdatqF47h8rh9iTGXR54UTBMam2Fh",
  "key20": "5zFkk6zjCVxKQLXTfGNuSvG3ZbhacayogX4tdPKVpYUp4ydQMhCiTkRphwPkwrDbzHf4oj7Wz4jf74fR36A88dcG",
  "key21": "61bbtk3taLaRevJoGo9HVmTS6TsipV8Z25YBECK55WhMs2uj9V5thyqx7B2VUxi2x1s1jCMnwBBRxpj8kByPxtPh",
  "key22": "2cWeyn1jUkaDPV6ev4VsKEHTDsTvy4Fgyx51D45heaGfosqvj98Re27HEiprgTyNSDiZmd5tZ7BTPsneqgzEBtDc",
  "key23": "3QPsG8iGp2utLwEGYgSPE9ZhmRCMQAMkXm6NbBDh77qoAocV5Juik5vwebRzqsZdmCoaXyCfs23gwcz3XyFBd4yr",
  "key24": "4cgvLWEZaphZSJrzFUL7BzaT9GtbSmqBRRbNLM3AyksGkc6jMrPHZdDbzmt2J3isLHiGGXwZMxa5VKpdZ3yX1cBW",
  "key25": "2LQ7Ba2DRQ55v355nNjqpNN4v7wJ9kKDtsmV5DuGhbuy7P6EyqzazNG2NxosdzsfLXvTKqPDdpeJNNYzG3H4LkiA",
  "key26": "4piY96QNPnfFZNu6268uauRYbS8cFSdhq68zdS3Hn16GoAZxCeKEedJq2xW3v3yETqQan9fTJT4YX4q8MDxqbB7F",
  "key27": "4BczVCKC6EWXH5QYP9ZoR1e8Pzd8i1nkvqHGdNzJS5huGkiNFRfUcWqGAvqTqqcU36t8Lw9poAHxMuaR7tFJDZT1",
  "key28": "4pS3b6Ge61c8gZXcsF1X78DyAL4q43C16EBdy6sNjhzZPXtVtZi8HLLNkSJMq3Wt1n49CG2BZCzRxTB3nNTsgZik",
  "key29": "4DNhe2sww3q2AVQ42v476yczyLxMPt2cMwdedFb9dQs41JndwVJnWnPWtnr4BGU4JuQJXYnet7yoXrd1mkEz7HSM",
  "key30": "MBPueC2aq3AgyDwbd7BpdTSwVMDCbJUozt35KGdepwRFmJwda9Ht8QbYFaEGDYxPQsmVZMgvb1eqJaHeLWQXAjD",
  "key31": "Qotson65qQNbvBNfMM5K8JM5m5CHPfHDPcD68Rw8nFfLq37qScZHSinAhpo34uC4NCaWiTTRKnJBLBVDmv3daxU",
  "key32": "4qa7VXsD77PqtXnqGoNufHv4iY2h6TkXAcns4GXh66GUMbX56Pxhv54DPMD7NTcB4BaBJtGcSUi5aHwLp9bAvc3W",
  "key33": "52jdpf3kNVGvwWZP2yDivkxdJXqpUCrPqURDtPSBCS7ooDXxRjZvdh2PjmXofkaEoootHN1pMczQDr8bsbVNgq4v",
  "key34": "342TzG9m2DxtLL3cXZaeK2WJ29SoQ7GkXigr7KSWNgRMm75vJHFWLa2vYTky9yZzmR2zNj1CbSnPMy13WMN6WNKb",
  "key35": "3hhpPJEXkJ35eBAFPPJxJXyt1SdGbNeKJ2tCbBLeXKYraVt5XaDg79CuNDEGQNxYqXye7GPrczkgHm1qzjWvkG1h",
  "key36": "5fkhDvYAagz16ruWHE5ZNBxbfdFkhwqytVrYDxeoWHBoYNcbMAAUN4ePYT3xke6fJbAxjNLfxvCqaL4CXhGT36pX",
  "key37": "2UZ4jBvnAD9xr11LzQhTg9K8hrDmqLrhosKA7mFDyr6RDyXZ4JYCcNw1SQc1gwacdk1h3ZZjzLxN2zQnNtcUZjfa",
  "key38": "JnWS3nPKUHyWnP27PzP1deoQbGBwhcuJZikfu4Qrc7QpoLD5oqrLNPtJ1fyjRtQGXZVpCNMSsLwztSQm8ChCfLH",
  "key39": "5rjjgYa5XrKv9tv7iwPNQkpXFCHsuWkycKs9thkt5efexEFLJmbRhwfZo5YEzD5up8RyYnY1L8zJvQ6vQuYKzKKs",
  "key40": "2cmTQS2oNJHvWQsRUS2MzsmKjacQqyWwsGnH8ggYB5ZM8Zvuta89FRgA6WdzQwdJXFVPin7CeA551ais4UpDxa9u"
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
