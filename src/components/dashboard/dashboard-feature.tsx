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
    "34wfvHjHadUKKAqCroHHeaNBH4eV2k9KaXXftoX1sU4nU49KiuxWnNYmpweaJoUdqrox8mJmqB3Y6yAzo5PU8nE7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4irZGFfQKGVPZEvChnRByYpgF8WfbAY7M7ehLPWtfLv44TsgmZskKfFx5bkof4mDUhRTRQGW73RbG1hbc5Y6N1xw",
  "key1": "4vHC9ejDKiuGfRqtPoN5hNCV2e7c8evZMQQTm63YTao8vtpqGJYfmqrarsMeAvhdadUrpCPGi5KcEdoC8a48DcH5",
  "key2": "34aY6gcXaBy6426wqLuRnRgDbwJRginfFv8XU4gmRVgcbtuJZRkvrC4qRWMF5JeFiTyPP9uLUv583n6JAKZttpY",
  "key3": "2KKjg8QLxaqkeQGYn26zCSxhfYkbRfE3mKEmXHoaM4hqqSuzydQ9MtBjr9ag1BBrKemeFYFf81dVKLaTxPrpzegK",
  "key4": "2q1azh7xnNbifysMw2jdaKqeUfGKywQhUQEq1qNQxMFdrSnuVaJYwBX2VPyKW1oWjhFnKt48Z7E6KSz9fMQzoxwX",
  "key5": "3124ngDArKeuyWVSmN7h55CmDRkLZdMAJSL8LajAPLgpo5x9o3kJbyP9NpHVqLNS3AxHdHoN3KnD57RQLySe6M8r",
  "key6": "2WGnaAswLFs7Qnsk8v5qFKvuj8WqXb3j2ERpreCkNekuyaJNUndjoFYgcfH4ZGwpus5x1AF41TDdMdEeJUHTq2xV",
  "key7": "5Cq2YfyCTGv9reFuasLRGjTq4X3CvW8oR3QoZf553T65qAPNrWBdMCwfnawwW3aGppXf3p8dmRTB5DCzLNFg11hX",
  "key8": "4wNdJwirq7zvzxEA2FWpeu3isSDwdoe1VyN21QeQ2irgiRcDGzQMPdWMVkNTjL6nt7a33n9QUsmEhnJC2GbxVEBk",
  "key9": "29LUB8VCdNr65nL7tAewbyYC1gmkYRLrP1mKLUiFtckW6zW3DyCC6CFnKwcntwxJKRbRZCxbcyp26oS4bRrSbQCa",
  "key10": "3dBgQs37LZdEDK3y8Q4brycWHn8A8GvTLnW8WUNnr5nmerW5kC5JeYERFqaFUJFLmC9ZJLEUNRvnxmaSGQtvpTqe",
  "key11": "32g9wq8bSVvcA59PkwP8Y8j5BFRcTy1sZHf1UhoBwWNMs5x84boyKAjFSb9LYgDUes3FZh7yYLkcRPqxhrkBRtSt",
  "key12": "4R1gcWyZ6oXMz7L9QM8W7SJSCLq3q71WN33VTr3bAgGeb1BaxeqUSmNw16vHwi3bzHV1KQVriKTDA9SsM4hT3HiT",
  "key13": "3v3ft7SXn3UyMfKw8bn3whd357Pa73YBeJSqPCUgSvcVKr5tAmQrhktpmtW59YwJnhTXoC1t5HL897MYCXTkpJZ9",
  "key14": "2wqJGaHYpcwh2SAuCaVLzbdKxD4kFMqxq43M8XteMrkYpEzxnLznBKT9VoetnSfGEMFtshk95Ssyoz6ifh7qNswv",
  "key15": "NkpZf6XxwH6KpyL8ntQtzKjepkucDSTotRd69HFHtqT9so5znbeBSHUDM7bykHoukBzEYcoDP3DB4vmWbSwHvaY",
  "key16": "4NDtoq5h1AAQyV9Lgq1tMTnQgKx4EJyxZXazKnkBxGuk92Fy7JnTZyoxLDYYiXbLiqRNBpg6jq54pNN7WkKDdof8",
  "key17": "3CDn4J7yvnzv1xyvwL6G1mAvvkF47kCf3uXyuQufNNmtmDkmVLHApLUqDfB6x4xSctEjZqNnWi3e4bHRHZeXptFH",
  "key18": "3m4p7FS6H1ejvupFdT9p1FXX3VW2utzHQpSqnykngzrepgqzMZcnmvBa3ePhW6RmBvt4aya6cwCDjvdndRQLm6xY",
  "key19": "vS75ncgkyfcxBdtvwEnkq89VwUH8bVu5cH7U1L7KCHBABGkrAqESsZp4ZBjKgyQbAAkREJTdRYybXkxcZMrnVNi",
  "key20": "4HYqzdJQgCYc9pj2hcrRgR1DDyqmFZc7EfgXmLqYmdo4VuQp5B1B9uRLc98eJNL5NEQCitoKFiZ4vgzWHZeHnDpH",
  "key21": "5eZS6F24i6jfGqtGcNLT8qEYmg7DuyPFW6izSe5LLVegjf2bab5EeBQcstYXR6XMqXks8kAedbXVXnWdLiLiZd8W",
  "key22": "3EfnntTs5fjbsbxRyC1PVSTogvCWWBLEoCmahws5vbTVnGboLv2kSrn6gwzKxhnpjgDhPtzxdVZk4pPZ3bKcmNux",
  "key23": "MZZ5RnyKxrQ4hJjBfBrAng59j9tXB6RDvTMkh3hhzd5Yxt7YB8UZBhVvzmPG6pHe87RckUo5fZAWz5bWuVzypwZ",
  "key24": "4NcfgeMofvx5jnC2mf1ipStFWPoRET1efoLEou1tv4X5iWRryXSPELTD9kA54AnDWLSQncjDf7D1EjZkQ46Fews",
  "key25": "3FYaubbWoh7S3fwMSrbLoCPdCKySojWNVUX1pQm28hyBy2fihVGUwr5AHqecbH16qSBxDZbCRLbwsiXEbEGv7DTi",
  "key26": "4wczmrGshLTX54MeyBKhskgqBKKGCpY9nQmehMPTKczaNqMkCNhBbLnrZavKTQSe4xDsG13u9nTLCvY8MtbmKtpB",
  "key27": "MCCDU7ViskvkyW9iyF8suvLJo4wPHB1VVzneURTQchoGcDnWWhkQUgbjmuyjkJC31GVNTQGZyoF2mcdNfxTTDSR",
  "key28": "4gPydfQFxLRkXarpxSDdnLR9qUxZg5bSEAcUo5fwxrZ7L9pUmi153qb7WwQkTAg48nzMvargzXWF2G4KdxKHN1JF",
  "key29": "5uFSFRvJ3tSC6utFhV6krG2yLoVi4x4o1bBnZ1nM2nTjiCoTChgXC7QCJTzWA9L2yJ3ueADz5gGMT3DNakB4cQYT",
  "key30": "37zJjvdPYoLAv7Xqu3kF7FR9PzZEoDgFQCAPe2GYhVyYAmBVK8r1iDFRLTQAJcv3u4RyYz9Yq7DRf8Tnz614zMKR",
  "key31": "2mBpQSwBZVPpE6ET6wUJbF4JzmwSh7UZjjMmzD3XvuWRQAvxSwpmNAyMQDN4tWwjJsPVZoNPgSUTB3KGXQvVeZiW",
  "key32": "2kHFRprUdUsZNYFU2c6kphALWqxR6PztyKRdY8cAiwQqVnjivPg1vAzDiUoarkksq9g1s5w8vLQ192npZMfz7Tcm",
  "key33": "RVCUUNimwukEmfFgzY3CndUWTTGY3Cwnuv91MMKkUtZjDzCoL4FD4wXHoGhFf1yeLaMXA4oEsHHwHqXdW7di8h8",
  "key34": "2EV3QjMmJcbJWSxtMKi691b2DYr4FSDnv7PTh3yrALkM53BYRUmyUt1NJ1M9bevHaxWKHvrJzukxyN4gJ43JsKZn",
  "key35": "p7qBNd4bhCZvuzZhVdZNQroYMz7PNCpZ8xoT1Jfqyk9S8PbKDzZ7rDAWkHn2LUAd87w2iJE1SEfF2WGGqKwkoEe",
  "key36": "xBF3iK6DjpEvEUcjD6Wz6qeDmb1NHzUM4New9HEhDo6YvteqfnZmFfawDV7dqu2AWJCXY56tPEN5deKsx2Esk9L",
  "key37": "3mDZAACKB6iSghexVX3ryhoJEZFVsQqyHA8LPhEsrZbSV5C1NH971bannuPnVHkxL5MHDLydmnmVcgHj75sWGjjE"
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
