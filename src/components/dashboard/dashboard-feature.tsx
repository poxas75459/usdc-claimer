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
    "4ovHpUW9uJ6jT3a7Jc3juukBFASv4Deb1HXBMSGYDkbfpe8Ezqv7gfkXrk3NkCAjdU16ELT9aBp9EgQV3ifH2y99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5REmwqmnmfBFZi2ndH1knGgUVtxr2dzw1maZm8g2UnN1mdFSCdVycxdR2pJfR7bVvTHgJhqzVvVMW3LXD5fPtyC8",
  "key1": "3HnBqkkNnJMRZ6EvhNc8nD2t8ZZ1QmfmCUSxgJ8Upj7bbP6j7PGQJEaeEUxgx77YZPLpnnBNsjHPH4vZECziorEh",
  "key2": "4RYUaMYN6XvMvo1PjbkeyuaY68PwgUymsUuBXZNCqVFfvE6jUkbLWPXkwEaJSDPreeap4Frgi3QN1i8uMoWugYqw",
  "key3": "4FymPEfC4933osFT369WVVDQzf8DD8EDADiC1Z7ANoR2r7vHdHgcaHXrF3dor19Hbab6zXSpzcnpC8EAwL6Hxyb5",
  "key4": "3Y2bFmo23Ut4FhGj5Kw7PVGDJYVm6y73V1WPAaxqqHBz3YcJZhhceiyzVYZmBHrJXAze7NbbkLoTaz62wDvEBKsH",
  "key5": "42ZNhgGg4KGUMKunkoafyBrFamcVFx4rvD4nS8oWFRuizaLyJ2cHicc9AgPQyj3grhfrmSLKk2aBuNqZJoqQ65xQ",
  "key6": "xFiF9jU161urmM1G64C54Q8cGPhjp1CjRzQKRLuJkFKpE4uqPg292C38ad8hYkkgdoZxGzt73nBsWh291w4ACiW",
  "key7": "64qW59DigYQutHe8osZGum8SFkmFowUQ46CGiTJ1WLhu5k2gpp28KHyYK37pbY6BZC5MyRVyhJpzR1EFPm8B6jrn",
  "key8": "2FXSFp39YAurTdqq5GLvrG2qcdsT8fwVEJWw9WoxpRZzpP6CxGYAXmUCMCp5ZvZU2hVu5f5NCREnv49opoxrQqxV",
  "key9": "RHGtb59pdWqdXf6n6hemWfxHdgTXcSEEbs62va6y91VqhpThnUcweX2RcDipQ114f6VACnbzeRjEu8r3bd795bf",
  "key10": "2EPZStwFyPGBPb3XVsc3JkR62KJzQwrNVrh767mJW4RHWKvG7ECrYaMeThVBCpJjrGoXgywEiJidrNDSUsDP8uGq",
  "key11": "2upYKtcZJrJN2iVUFnNY5ruPjjGp2A8tTk7VNaMRdubGptRLCLhE7EkDzrshrFwgyybgjxZLvXVLLixesw2P71XC",
  "key12": "2EuihkyeFvckMcWG5Kna5RSGBzrtyJQ6R3kwe9JcHX1vEzZMXGwE7axBXR2G977KfGGgdphazftSbMARqRjqpWUK",
  "key13": "jMvRdg7MyNiJCaC82ftx64dkoKwdETnKnD4MfMEhRJ78FULdwXvJ4uj69Yx8zq6QJf8fMWt3BB8pgJeCBzkVQ2V",
  "key14": "73wsaQXzMMmhuJT2RHdEZJNjh6w72wmu8bvf2GSrBpDy24gyUQeQDYdsb4Yq5yhTPB8TSr92Bpf6qZaxGSySco3",
  "key15": "4G5TvE3YoAaZXZodRE8LEEynptJtibWqA6SF6qb54eTCFBpUpdCVsJq47GbzLtavVK1Gfr85VCR6haeQ5nmFvREn",
  "key16": "2cep9FfXWwJH5cn6PXv6xhQNH2taXy4hGHxz3hDKnf8jrKM43jZu1o6bPjzhc214XVXwTPUqPNRnHvz3sfm9ZtZd",
  "key17": "4TFudQ7owNaGbmUaAwwN868hMwafgiX98nBwtApBzFye4stWcEdRDy9RXqAyF3k6csyRRSomYPnTB4o6M6jfVAET",
  "key18": "NiZJD2bwyARohoaEPmv1fkQnieH8iR6bmj6MS2K3kejQvaUmv5FzfAkPVDRF2NzHoB7FvV7vZ1vZPc7TRCtQo8E",
  "key19": "57Y8rN9X37sdLR9pBeCQ9KgooyLP7d1RB7d7rjHAhdpPLjb3B22QhSdJuVbdvmNyZEbNVysgVFCTQYxviPYsaEZz",
  "key20": "4DsSBj9ebzfNafz19qVHprtXRwmnauKECSiAuRqYitucEQV2E17Wp3X2KHarLbH6DyDrNrkQ2cX7vv6GJ2Af56su",
  "key21": "5NydmDkRd6ZtARbWuUaSWHkuQQKvTQTnFH4RLBNBpwrHXThQbL8kbsWtHC66do8efmczbxYk6H3VbUWmXFnuzy1Z",
  "key22": "f6pnLdfjkztPMRKMvF6mDfQrU9d4bb9C1JfZ7Ep3eRQU38dziRMk8AnKXYjsAB9N9rmoU64ehZuR8zM2fWfp7vA",
  "key23": "2e2fCLA7FsAbgaHGL7U92SbMNCvjUz5euXTaq8rAgLyrpVW5vAqGQPSJbFq3x2QHpkPNUVhyYGL3KLtnJUYFHrBU",
  "key24": "5xCBhb7KtiQPWaSXSUUKcYWehxALzhVqwDpSoesMW8zUjTijDuUHCBVQayRNr3T44evc4gQch4LCgPJdDc1dMBW2",
  "key25": "58QWoZCE5yk1YSjT8kEBzPNQKDuHLz5zSJ1v2eEc4XwZApFFzMo7syQudnXQfiBeR9MQDy68Zv6ruV8tjLb6iRUs",
  "key26": "5itQebWezkXBV8VQKfxWDLTRZQ8J6Hn9UZ1nTn4yHgDGbBxoWvb5VrXVGmAk88eLR3tNGwckoHftmMgjnj9tD1zF",
  "key27": "3i3Zu1XFLopfkEe8ZLxC39wjYCoLqEBy1pHYaMC1c3gwrhmtvBeochtLNdcCKQ3GtpTi5eyBL8v5VTYn7ivw8dh1",
  "key28": "5Dm8eDM7isbC2G7e7SXh9EkdDGPDfuWixB8p6vwMKd3tVj96M1Myiqsoe6NNDTMHAiHnNuSsnaKyhc6Q13shX9i2",
  "key29": "2NLpQgWatc7sGkazuNQBZMpwtG6A3sCafa8wUvGHk4FuRtmLftNKgYCCBYjvMKNcCYTNZbfKHmRb7c4wvnRPdk4h",
  "key30": "2hyEUd2eZUoTH5QKoBkgQEm6RzUUCRaheFVhVU4wXjwPkxxBBBxDcbbTS42F8X6yWFhow9YnkoRvnsnuHgVNk82i",
  "key31": "5h9hVxn6z22J5iVbepnxiUBQNT8ArTYCdivbbStFAfSxckucWWnyeT8HyBrXrU2iJJT2JgrARPatoXWJQNcLNS9",
  "key32": "3iWE9e5Apk49UxEkAgFhK7iuRdMjzLiFnkd4ZMi6DhdBqN5dyaarJ4NP6kUrMc8rnAb7TiXf4RGcVKWxPCRkz2qS",
  "key33": "5nw1XhUtwNJzA1QrDxRPfHuo3yVSgwXsC4T1sAKkmCA4rc7NG5XZfg9PJtnvSvwaw86fHBNjWqEkxgiJDBLxBCuQ",
  "key34": "ybeomhCRXquacoamViHEKCPBWixUgchBp8v1gP6PS7RLH3b5YudcxKHiEGpSPYfBb6fxQdtMhGR2o9fN8U6Tvcv",
  "key35": "YEmUKv1wDtTV9fXXq189jYy9gcTfPtNdSvshzV7wxrBaMEZZ74eFDH52Mzsj21Hn3B4Uaac59JAoXxxhYDr1AHm",
  "key36": "5tBemcLJ8qYT4uwiQLwu5pAfJcY26CMEJ8UeU9sAcWURQocpB1SuS95QvMJtnvbeDxZWfC7CeQ1wyHpG51omRXrx",
  "key37": "5uS6N5J9476rWroNHA9K5ieqbZoADgY8yr9sQk4Q6Y7gCaVwDzEwJgTKWndYuqbJ8x5iP8hgFM9wQRdgaTmV27Tb",
  "key38": "P27MDaV2xD6gAVrvzyScRQvEtWVQeY5mwUiYk3RgNZZdwD9rZhN98s495g2TgWLQ5p6wwtwDKdds7f6Nf541rRH",
  "key39": "37uTAjuSJgLUARMDBTh617MtGbgqYJy1w9EctCKPsUdSKYet54SAadrUGqB79mq7UE845KxPPPNFTHhh1H9xeq2i",
  "key40": "3v8SNrrmmg6yJkte72ud4f6uJ1qLoB9UmtA4CsRkcQXYoUeEXvFuDP3RLjtZkXS5zY7uqQegVMphr49GEQTq7oeS",
  "key41": "5iHLUq6LZ8TQ85bRKFY5WJc7aK8eXgiS5vHD2mechhejmex9wKvstbRZfeeBghwZwJcTw1ddbLyyW75y3ZK8kQF1"
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
