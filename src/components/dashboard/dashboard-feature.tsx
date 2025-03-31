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
    "4y5wg3R1iqE9PRSkEy7iCZTNquVKaTJ7HhU1XJ93HKoF9pNjJq7CCgvG42zYmrGJAoD6fVpdZd8xsPAPz3XM3Sp3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YQseaY68x3bq2qCe2tXorwdYSF4YeWmr3pH9V4TmNEZboxNp3MD917g72kveSCqGBsZA9r1ghhm5P5cpSucAeib",
  "key1": "2uXDZzxLAReF17ej29t75HriLGyjSvX51YsJVnoRdm937Zg93vcXvMr4B97NuGfrVf7uQZz93KvjREpF4h6FatrN",
  "key2": "3q3Tpu1NH21mvCeKmLLV8frRZU6KMSw1YgtK99JRy9xdWMXCchm2U27GyPSYb1a224qxucyxuMCxUGCiyWf3XfT8",
  "key3": "3nBhrf6FogJQKPW3q5bk47iCLAbhGR3Ywc2XWtg5Ksek4zds8SHi5y9frvYYpu9S6dGTUVYJGUq6S6CcyZCKo53s",
  "key4": "iWVvXEtRyJmBC63AyeFjZVxvJNe9C44yF3pmKiGDc1vGgJfRBBs8gmDHimDi3vX3h4vfRK5aTqDMQohtasWLBeg",
  "key5": "2nP7KQB5XnUFLhVChYHx22jsp5HG3kgy6fqB5xFGqY6s6KGA5aD2oGEeG7wVpuQZcqnWG8gpdiTWVN46bmGQtWGW",
  "key6": "4Cs4NhyuGMQ45ThTquhoAKZbyxvsB4krDA13Zbb6vuPSDsePbGVySg1LeQV8J7y8UaKB3LHSiXMtrvSiuaMYawx5",
  "key7": "4nNN8PgFKydtEWgArW7BvZeF91aAHoNKQXZDhTEe6vfML48ywRJiXRgkpwPi2d5jfNC6v5BEetT5Dg2tCErMmNZ4",
  "key8": "3VoFQxTE8wFdiwbbB7LhkqTy4WTZGaZy47WcFb6P9d8Fe91ZJE4JxP1DV7oa8fbc8PYKrR3Ce47AwqhEZVzfWpNN",
  "key9": "3HsqmYUpdyXAqvzUTrxhBk3XqNG3oSTZLPiyfW5PXKXSHEavGhNvZRoCQP2zTniGaF7c6J4HH9B9bbq9UZz1zEWQ",
  "key10": "yV2zrVVyVvkdEj61ahcikSdMLCyy2tQiWh9WRY9LB9i6tc8nXaqXHtnQPESWKJfVpDxsP5k5ASomtBV5MsMoYky",
  "key11": "9P61xbw9wG6KgaH5RMTbUWTsW4K56Txd91P12eAk4fZNTRzgHLhZGTELNKPG5qjy1SH5tQAnHVoinsRxx18bWqR",
  "key12": "3YYduBp1NQpaJd8fs88EN9wCBGSDapAE5A88UocDsS9eT33De6kvSxBDB1qNg51My1pfvkkCPyucwuXzDYe8KdGx",
  "key13": "25drXiY9DpgZApRJadmseSKRR8gP6AgRqnMoJ9yxRxEicVSL5YsnSD9AtgHDeb9A4WiV7PNpyjRL2zN6x6QGy3rw",
  "key14": "271wQ8WnWWuNDEkSxebGEqsGHodFNo4U9opYhJi7TxFK4Ga7XVnqWUCB8xb9vBGWd7SJh4N7BH4bBc9bxxK9ZFHv",
  "key15": "GEufr7kqYwRmwPsniJjVmEPX7vSRe6hTdMZQ3LcWPqmpbKJ5rtyb9htcG9H51XVNPMLZXE2XH3jg3BMti6q9UUe",
  "key16": "4R5kiHaQd5yP1VfGurwJgawfQoyjfh1yAJ1qYJYyFAuE7TDoQacvuj1NTJy3BWj7vxcn9vvvCewzQujvQuNStfBt",
  "key17": "4TuGZ2cyoJ17ozovP6nDEKHSxJngntcQopPBTirDnhyMvTnyKNu1f8N9Bh7qVXHfGKR6xBtb2zjJSUdWb7LwHMSm",
  "key18": "33RKf3nFoXYKJ9MVV5asTkoar1ctCWodGDgEoth2GJ8MGZieoXNhdfbYHJ2bx495Xcni57JXQNXPyAgnHUrKgn6A",
  "key19": "2r5J1MHKXuB4K5RQqd1ywJAR1BzZaYDfv3yZpubPCZYTownvKQYUyCNh8HiCjCZWjk2Ueu5RMVP4a7ExJPptzF9d",
  "key20": "4b5RMEGwdeMBzjsZ2u17KwCJapf4ezW4WRskfDJEyKxCdsCYHZEzzV7DToHBcFD59Pj1211XUEDcuf6xpo9gbz1a",
  "key21": "4pZRgqjzi4FX31rVyphWPEdBkPHPYBpNojoQrjYzMxTbuPXtShfq9nVTzgJS5j1sMFpuwnoUsf43jEidGtvTJd4i",
  "key22": "2yWsf9hXBKnTY7zamHeH8zqB5xBegyhmeTRDH1ETFrHodWtRCtrSfGVikizgF2JkvH5vMXHDJDuwGNgfhgqozCnK",
  "key23": "2UqUvpKWfhBP4PT5UZpEyYNcFfpGLaaCsRqkJvohkHjwJifFYZPh3qVFBNbfTheY2nnPGiiBdYyNn3aXaNJzD9Ej",
  "key24": "5NwjdZd7DtT8xjtXWDWT9QeLXqtdS6ayv4EcTCqFBYcXJ7gXAwJ8uoWyiBmoptsKZfvHddgAUnZzuTZr6e83uDzX",
  "key25": "5aaNEe4FsYa5BYeCZz7ZehV5C2X7T3bimk31kAgecoUj3PsTgFafnvg36xVXSx9CjKeFk2TdnE4Ca1k36QRggU8m",
  "key26": "TBKHr5NfszWPzKYRWJAhLZNCiHfQVLjV7mvSUdoGCGnkSvXysAG65GfgtxBTSXQNLDUq2Mtk9jKVFC5C6ajhDxG",
  "key27": "2E5GQz9s92bU7aBb2XCfaWh7ewxo6fh3hxrZMYcjdpQ5ajCP8HYC4NCBMNGYnMjCZfN5z38FMvNPmwXgDMFmSGzu",
  "key28": "qJug7gWmoeE23Gw9Q54aXrBg8m9CdVPB6ix5dV1gDmmut6gMEZB9NUgu3QuYQbnjmrJZLGmReT3mSxFBYus3Mja",
  "key29": "3b2Dee7fM8SaDpBY2ZJACYh4rAYAwKdmwebqjRtT9nCiEv6EtXCULf8cNwxUdRx3whUF7HaexbDdsLR7Hc1vx6Nw",
  "key30": "3UipWbr1EgnmMFQTaQ72JHfhWkY5yZ4BjBywF8J8rg8qrYv5oz9uX7X4g8vNnBUUJ2JuzPG6auFaDRFNo7AhccWG",
  "key31": "4daHXFEQ6opVFfjHaBUKCGD6hd5HkDoSpHRJAhzqmemjrQAKP24w4TgmVNxGnsEiBL1HJigivD2GiW8wFoEzqnvh",
  "key32": "3WEwyZ8bGBqrQeQWKBxcR5ZbyfAVi12EAhaaV1Bp4ToWMC2yCmmkK8VuVMoJzAxRMQM8mJrbfat4x1c28Mq6hvRY",
  "key33": "52XYAT3t4FXeMG6B82WthSZ8TggJTuXoPoyXaSLJDpTLNJNhZepAemr5G6WaRtFekJByyxKHsAiVcgCSAP5PzbSb",
  "key34": "59m3esttH1oL5jwYguk7DyroAKuECVspQf239xF4wYoA6iHcsKpdFJQFiCsJMKZBnPgAXWMc4kDXirhGeMYpxbf6",
  "key35": "2Y93eKd1Djv4qC2xWJU6jbjm7GTcUTZFsBcobCjXXHf3QhZ3VeU8uzS73AoVGRZugfBrRGz3tHLjJViJgyQPV14t",
  "key36": "3D9ZavHjpPGtTR2xTpNyhJ69oZxBs9bR2mYXA42MNMHNkfFG4hijLtUagri2RfB5fG6VqSBLkQ1KcrecQgYU4sgw",
  "key37": "4DGaMYRj6LPuDqvCF2FWsmaq6RrxHAJjydB4nZAKftR4VJABfkN9vhyNS5CbgRm41dMAeh3aCq32xb9FKS7swZY1",
  "key38": "2gtjawh6jo1MRCziX6Eb3DKpK72Q4KMVhfwiDoeJUxg2XvEy9mNVBcDNctq7CRN2zUWtPQWiAKsFj8rcAqf6mxT",
  "key39": "2ZQvAX4NqekbYrv4S6uC8S3xV2r1bzFZFuLrmZmEK644ddpSPedwrEQww1jrUweKqWCNp4WW626BWV3yeHkWe9kk",
  "key40": "4XskQC6Thhd1wAtWfmq7eLD9gCJ27hvKpnWQAYs6Ftnx64CdzAPdiUPEhnCSzW1w69qVbh5Pjn9qaBjXgbZ3AU8M",
  "key41": "3FhvbAWsL1catbBnGjifAW7FtWXTirzFqANFmQRi7xnicWeXJZBHgh7fbrdYwjbf9SZk7GwcMzfUtuZQLtc4uqLg"
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
