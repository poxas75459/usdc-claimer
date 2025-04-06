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
    "uJo3g645bGQEkTgXdHSfr9VwqdqFGucwgWQNQW1DxiqybLJbhULsuGNmfucdgB62ntw2cwB9C1kdNffF8skxueK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EsYQ1FKeEU1yyQpRH1foBgxfYtfjAeeCQMBYec6ZfEifaXnWtgeoezfaucam6RSy3qCFDX4Sme3gL6sKGYYGeMW",
  "key1": "3bGDC7EfK4Sab3ok7UoSZXabDb3HZaMuUA8Cf3D1kP3oT5ZdBKzysnGhWGzj4SVC6ZiihxWGRvsaARfmVTNRTg6",
  "key2": "2fbR7arPquX8nuuXTS5ov2ZoZLXnVaGZB5iw5zSKNQGpyuJLRwpc3grBBFMgV9mrRviaXWv8e5SmZ6LErDKpHaaa",
  "key3": "5c4A1YLqP3VqAkr5gsrai4dT7XjDvogWBRcxdnvNMMbSobtxG1y1NSYkLBXgXDB2CJvsFfghm9EsoGoRvme3CBCA",
  "key4": "5G2Z5mjioGFU1CcjEGv5URyofo9pRzCp4rqL2CnGqr1vhQy4u5FS8o4ySvHgUmtu2PB5rnq2QeoJGJ35JM1ciXmh",
  "key5": "T19LF8UQK2fmGXydep9M6XGcEicxqwSxDzwrhT6N1uH7WnX7R2irFQ7ovhX7349p2Wr8wPCZt5mC81VTaqCTqbe",
  "key6": "4YepMbm4zenrQyXsonNdXSvJQ4qD7CbC5mJVcmvyFAz8GyVeViHtRnXUEwo45QMjpiZNwGuHwdUZmQiaqXfBefQJ",
  "key7": "331UgG7vAuD9ZB2eHj2vJuWFxu9oX3uLmWh7daZZKijE5tMYk9PLx5aPawwjDQp3adUgXL9ZRt4yBwsByCHhyVB7",
  "key8": "Sddq8ZGP9Gw5Ft7WDhUorVHjhRLnQ2A2ncWXPLgtZqLAsDBpgE9VWTk3HG1BDbm3xk9qHFzho5n981KUV6ySH8f",
  "key9": "4kavobAB7JYoVQxDeB5acFjZuXbrCJoBaMc78jEm78mdpf2HxTiDCccsTuUK8GoW1mMm4Xhc9co5vxNRgZtiUxZS",
  "key10": "4Kt9DMAJk4avaajdfXie3RAq8vh9wry9G5zPaLFmHBWKPqnU1GPtQF2rp67nmSwohbbzJfBJ7VAzNeuY67xfpyyM",
  "key11": "4tzhUAcqAoAXczMVMUHfAbWm5SJFn426UCSk2KJdkAXJDH24RjjQPBbQvVrh1hCL9reumaZfmTHiAuFPuNxLoTHw",
  "key12": "4q2gx15g2cSwhSHhGBoq9whYdF3jhfb6EuvbCqNdbBVttAH521HPmakw6YdP1RrW3UqE5UJVHECmg6CTp89ouWYc",
  "key13": "2oCVGbiZc8FysyzRB5ZcVWBujFXBCFua73ZfWB75PuHMPtpwRFGyT6aNvXEiGuW1eKmZM19E6GS9f6N2GkssiFvK",
  "key14": "5h9yrzbq8BH9KpG2gGq3yvH8cmwXrApsHahe9QeveEtAuFmR7YM68c1gDXCt1zQzDc8xN9n8JBJwVmZVkDWKgDCK",
  "key15": "3NAPwVBKihmRLFJrCAz2FD8MrVg2mMTzxnUFAK1M8XotpYFBatsQqK7YGCcJr8Zu8knGxiNE43mQSSApsYchgDkM",
  "key16": "4Ec8k9FSPin2nouwngJNum5CyA34CkXvrNEYjfaZPnvYHGzkeJ4BnjHdGeqXjTmpZKdRuUqcgvWJC78YJwF8LcPd",
  "key17": "5L7fotMQkYLNGBkR5PhyLQTUza11N8XXBvfkAZizYCYwjcYk3brFEGATExYcPJz2ikTd8Tdw2kJa1KhHU7TjtpkM",
  "key18": "4Aw48Uz2fvAqiAZauAkQMUWvt5TxFhU3ByVET2PWmJHx7fY9jwA9gzUkqcim96iLBFMh7DqtiqvMqnD3RfaeV1aD",
  "key19": "4iWxuxozLqjL2nXhVBzYBDwB5NG63zkQqEDHTo1BwqqRZTXBZ1fs6NvhM8VZXqeuN8mozXjS7ZiW5G81s9JimkmX",
  "key20": "5mjq8v8SvzxLU4BxeDHkAfCXYfMvZ5Rjv8tgKaqRna5nyUQn88xvcVt6DfD8rNhZdNbTVwSxwt5kgZprtzUHQ3kK",
  "key21": "5JBZr4vjeULrx8v5sodz2rPGbaA8vMGd3bGjNwWGmv4Vxv6F9bzR2fb3Daqs8gaKgktRoqrtbYYAzZohohRj3QUw",
  "key22": "3wsQmfH8TtR3beCztsyBgoGXDaEULRVewo2oJjphxvyKhjwuTXcv8DY8x1GNM8aChjfhawANj1APpNRwots8xBTi",
  "key23": "4PjkbeJ6d18AKLSmWg37WsftM5HMkKhBZ7peVECSruBnK1fbUn5rHQJ7jcn7eQGL9ov33UCUf6Nnt6nxZr5YwAVQ",
  "key24": "81rE68J6TvnxwKmxwt7uMtHv6S7KXLzkwSuGPjmKdaBy7qL4oh4BtEnfNpAbjDjeyRLXPiPc5kRj6GJPuYnxw4e",
  "key25": "Wc7dv11Z9oyQtSybYsKiGdrK73yCgVz5h5VDEc44BkLEtv6RnFX14QMn9YUSMzj7999q2UFfSfSfkJDSd9UscC3",
  "key26": "3aqRuLZjqXEDoJFEEf9cxSdqbZy5SdhNizRFS1tMEjXS7ovVbMHwoqXh9cVbAPp5YjWD8ZSiLzXfZKu4STSUo2kC",
  "key27": "5P4zzu99UA5WU7M3ur6TcfEmcTx5EgzYBt9mpH9XhhaMXw7GskLJHqmJVKtkw6LxYfyhhWWtf3XtTNwYnVfeEnQh",
  "key28": "2Ce7rEdtqh1Cz88XktRPrpZrtdvwVQ3qPdJuAi4GiASsk6nE4RDR3UoLUDaRn1qNsiMdTryV9zcRBMtsqH94oqBU",
  "key29": "2ya7JuaVquEPupLvK8sozHMdNFiMPTuE9oeohPSafjPrhEXfdQrwtnW1WgdTjcD1dTEahj7tHBhxxyA9nGP1WtWq",
  "key30": "2WcBJ1XaYFtxtoUrbwsU6fyvSXifwWoSP2CdobhU9LEULjX2CEVMYGJdcVYhGSPZxzWHZPjBESp89mVt98rxp9ry",
  "key31": "3r3hakve7Cdpe82ReT9Y2Sm92Fx5k6Cf1JomSug3amqF9nDMoMGWZysjRSbE9iCfpyq5gEEjuDJ8mUmRZoXHdwgn",
  "key32": "4VFYVdhxRSKCEn1GK5M4BufT7PbShVgTjdGKxaiLCVFKjTaFWBfJ91DZoJB53XyjkKwgmEHFgzPi1UNwUsABvH5s",
  "key33": "3CW3LLUULV5CQoUr7HJNWxNCdVnFFsLKHyUfDQHQk2BvCwMTKYLoEqYupu5RTMViPejzTTEQbyxSzvyNM9TsFuE2",
  "key34": "42KqgSAgwpGN1Sz5xtsQcGwg9VzNi7m8LSuMcR4oqJWD2TaWmxD9cNaeJftz4Knoi8b6Fwnewxde2fugcm6h4MrT",
  "key35": "eAC3FG5WVj8tGZ1KVekeMkeNFCM2ANTiduw9wuKkQNQHWC4ocEVxa6x6bg9UGYdGkCFkfmHkggsw47nK3ecb4Hf",
  "key36": "4m8xdAaFxazZhFowGNnqQCjNeFZstxKHpiwa8pQjHBi5dwEmKMfP4wjNFHN93ErBdbtNM2r146QRxJeQ4aNLfYyh",
  "key37": "22yZ4LVq8C7pGdtbXgUB3SqDmYqzSH4RX1YuK9ZCXTSQXLMTJo8Gox2Euiv1isxkm9THGnrWYmQL6yeyJPsCpZ1T"
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
