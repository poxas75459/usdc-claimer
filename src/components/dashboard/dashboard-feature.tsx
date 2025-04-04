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
    "4iHzhhM6rYwDa3i6dA6oRYsZsWM91Xret2EZsdLX2Ns6KRWAtRfNT8PZXgj4wHgHSQxQkzvaFEA1ruNb1kcyDpMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zrN5TeRPv6d5gNEXY5CUAk7V8p425QBdB6EeYa2fsdvvJYyugSecF8cWWDHUW8UMkuuoPqeWHDGGgHwvgEccAvZ",
  "key1": "JdeEawF1HapH6mfznak7Nfq4KptWHc9Q3keTkXmnD3GHRe47rTYqp3of36Zp9JxfjG52renqwSReNYeCVCs9anr",
  "key2": "u79gm4cWBdUCibKbbLQibrPZJWwoVCfkhCYZa8mMy7CRxT5iypCRnnsvndJKkr2fZZYuQ1ipifbJTLHz8VArb4Y",
  "key3": "4HiWQKoTfhATGvwQytQtZJYyApuJCLdy2rDJHmCDqXo5YpGJsCsq3DXEjE4hVPvnEudD5hvuptwEH969mC67ruXk",
  "key4": "5noZY5f5kg92CSiBsNt4cBTCCTtAbJVDJvDApL4xstuL3c5h9EmHNayGuV4zptZECmZxFXnpk4eXBPEhacU3wS8M",
  "key5": "2ZrUFbD6QYAGuGRdMG3ePk55Ez3v7UXYtTwJosH4xHxtXnhixxrGASH3par62Ts9BunTgC7zTDgjZmfzhYKwUdy2",
  "key6": "27ZeLZQHvLFeFwVKocbdVf19E9gynZLZZPAnmDLRFaPA3GoQpW67BQ2VbTZtazGsToCcAwBhMw1XwxUA1Q88mksA",
  "key7": "4J4ow48ET4EtsmKLAUvmwswYPMA9rhVQYhACnjSMzm34W5J8mUc8LxfhTrx2UJoUBSnkMHrc4ruw9JQBsnRBdpj6",
  "key8": "8ENFPbKRvnMLaRDpNvWqrFzEYXYvc8dLka2sU8JQ2qVaf4km2xyA1nFouuJjinHWPG1JqSdYnHyy4feG7yPQvLE",
  "key9": "4vpQWATCtKo2hfFkV1SKQzTzQeDWSsFY6R3VBHhr5kzNyWZMyLvTE9npYZgeoibAA9nvtepPRcN1bBQS7KYz6cxe",
  "key10": "28CSLbFzCYrMpN6j8Gh74WVGsHEewwXJoarX7vV1JPyJG7P8zyiqZLv9uxyRknFX2p9FayDZWTy3mp6RrdeTz9NG",
  "key11": "4JYZPRvYwcprqJUR3RdAJbDGtV3fN7q79RzELYZohWjXcK1Ri6oN1zoJ7ZzSfVX683KxAMSo8zY6Qrd8L51u6H9e",
  "key12": "2edXGB6bADXKJzHubYXuct3ztQehzcPiNuvaEZGVRvACEhaarJReJCt7iCyUB7xt65ih8x9Qny67hHpkkj7t5LH7",
  "key13": "2HAybAuikndhPB51CcGG1Tkk5nVqeTaoPGfwRqCqzdsPcUew9DiuWsBHfWHWdhDJaZLx3R6cB1Lx1g1qKfQ5dse",
  "key14": "2MHmQMTNCTmsFz3nZtSTcWtiQGRQGzMX2DEtJTE4ET2L5cjoRCTGtXcCahjGLxTV31aHFQnPAYy8z17htjTDRf31",
  "key15": "4gMsKHNnyEBtBRwvdqWjZYF71Yso9Un1HrCdPrtettLAerA7mkK3nKrkBYUt7XiKefijGkca9jLSzentdEVbvKE8",
  "key16": "Ngy21JpeNuiSbtz7JrJp5zwKJqAkEz9UqrSzn8Ko4TPgJfe6d2ZuW5nfv7EsnsSzgatqQQGbaTqJrnEPXV8Hdvz",
  "key17": "2CT4gtGJBWbKscb75sq74T6uKhoUecnxkZ6baBXCRpXehdbLN4XGA4NgHse2heVYb6zGCFbZTruWQDCx8QPXhm9p",
  "key18": "3gY86Z5E6cLVmwCJmCDchRkAtSpzg3zNsbd1MM86oYnsAbdeytCttAvYhQNbVAgxkWsY6JmS3Pav99PKqVgNUPsd",
  "key19": "4e5GeiVjtnK2Hm6Xq9Kpjh3TkXuLworEs2c7S2M2yEDE3NbgJku9BfnPAKiXuVv9MLPvyXQuUvRrZVz8EpMLnSch",
  "key20": "5AzYhmnoHWGBnw2Zf11mLJkkgZHXEdM2hzBi2brUSqh79cGkbQESZ4dGayCVusauYxA43T9tud1LrP1ACRHBwGty",
  "key21": "GWh2u7rz1RVZzExavRcAYoi6yczMDgiquAdkvTsDF4EJgMBxmdyrZ73JTBvw92ExF7VuX6Vz5u1aZqwkQyDaHTR",
  "key22": "2Pd4eVTqiknbyvShQMduAZduE3LQayn6vkc9Eoq2RKt9yzGMPnsTh44QxRdUSS8oTU3VDK7iN1f8AT6PUnanHPL5",
  "key23": "3LTqaZ6pttHbC2KVDAtwfUFSdzPWr4YAayjwrUcvmaDdxrhXin2VvazXhMEfTW5CK6b5K8vFwv1KLH2BiiL3Pdc5",
  "key24": "3MKZd9W42MRwY7DKoWdXjMMbZqhMS88nfYkWy14Tp6wsbaQoLWya1VNSdzLC37rcAKR1bQ7VbdaUddvAwNKbkt2",
  "key25": "5YVGLNZke9VFZvj2nQfSjB9PFPdfQh4rKHH1wF1VtpmC3vEXYdRX6QyVkhXrvh7Tj7H9BffVgspGDJJbL6sd5x8n",
  "key26": "5pHkfGoUbz4dK2zUrTXmbMt5B7xWTWb9vxgz2qQcQyaFHvQgw5jkyUnSMwGuxm4gPZZdUcFrXA96PQE3qsnKk7zu",
  "key27": "4GyEbtYyoxJwspo6BhaVffMKQ8f6vc83cvM7i2tMSANmrW6fsZmpRCjuVyZtHixojiCbBvMTGTaDi38ukFP79dwg",
  "key28": "yMFkCSopPh32opeYHaQdk6dAVwFywmqW9T2WRC2FkYZqNUqqPXd2Zg87wTctLw3Hz1EJrrp32AdwDV7TvzSCnnV",
  "key29": "3vFnpk9McdmaFUaZxfuzKjGyFz2u1Puk9inN4SDeTrevLmMtpJ6tLLMScfjVXWEjFiiXt3PBga2U27haNP9FEU7N",
  "key30": "5AV5xM2TW89q4LQqJoAuHVhFUfUKz8zKhwhkPitqjVk2nrk8V2RefQ7oJFibUNqpZga6NCx6iSTdTkEo83rWcory",
  "key31": "5kZdtPHE6k248xoZ9djR9pSAvCpW2NixYSh45FVPzm2e7cvey7ne84jHTeMNU1WyEJDxiFE3EmrJkVGmEkZ3ZVWc",
  "key32": "4hDNj6BhKR4U3kcbH3Sp4Vvj9pFnZwCaxj5ve6Ehw9x7rPtGexA9HQmgoj7wYkMDZhPGcYaU5NFzmAWnxqUW8t2c",
  "key33": "DLs2aSwXRyMGmRRodkhgk7s8fK4yGNphG48BK7bX38YTVq3NpWr1UuvRYt7irjMuxLm3SBJJA3nt8vdYuE4DYRH",
  "key34": "2ivi5ZFKJaYMCoRDJJWLknXri3hC4bT6R48Fw8aq2i7DV3XcMRBbiaDzyWxZmqwdK5WiAaagwAvtuW9uMohGaxJY",
  "key35": "XVr9Ai5ytXWAwDX5FNFPWV4oGZbJqsMWQcRABrLEYS3P9myoJMZeBMB7TKGzxbEs9LaZra73qmSVqcPde1QWMYd",
  "key36": "KRJmjs1oLLRyE86EKZcy8C3FPPRCh58rKdfPTUgkqS7KFJ7uMp7MdexQZKhEoPt9sqpffxDfgmxvUpRRmKziizB",
  "key37": "nCLac6k5366sodJiBb9rqM7obQYfozysTUDDXH24KCPWZ3odwwQro4MMiiQVivWZUwCw2TcXvauELMQw4AXZYqT",
  "key38": "5ZjzDSGUCgFjrqh8JN7T4vDYUu9zVcH8SeDPkatD5Ly7HFWfr9U8weprBzQNRwAVCBmpttKmshphcBKvnQchHCc2",
  "key39": "XvLdXYLPCBgosz9ux2W5FyfBBUj56Fc1Pfx1SZe6CkEixukxN5715a3L45zudD5gi48vR23vkeQwQ7B7qXVrt9U",
  "key40": "4X7WWnuJfYKETM4vNtBBy2BuBTD3ei9Eqh5cWU1S2jmg7Yfr9TVunB67nWsu3ke122BsD3LH4Qr4cGF29CLhwUFC",
  "key41": "3HYZw4RDQSUqBKo46bMcKuSET9ExLJc4SuVQ21iYmSciTmYJywhszu2MpAtkC2s7aJpUqSk9XS9xqPvshCiK1fdf",
  "key42": "2QURdhQzvzU9HHLnhHBv37oFetVH2hoB1ps9LUAuM2uvc2bbAVJPmEXisDkwcS9Bd5cuZRHyfUCQpsxFUCASEzGt",
  "key43": "2PNvELWtXviQZV4eqy56m9uAFgyhBQDGuZeTejv918Dy8xiTcDJyRGKybbt2ouNj7hz4bekXmyPcLqZ4oFBMWfdj",
  "key44": "3kXAtYh4W9ctsyQRkq9mmUTjGGVArhc2pjMMoeRKjZVLgVMtsgoh13ZepgzXypQhUgJxBa5DrWFpdKUJGNP1Ygna",
  "key45": "4ThhFK5qYnmaFN4zALeWqvVUeaWVn5GMVAASLz9yxSAibShbkqS8LnRx72hpxsweDUZ2qCV7g7p7UzF3PWbqwiK8",
  "key46": "2CNNkigawxJUUK6eHFjq6ZeNPzUZcdmgY8FBKyEd88u8eMawCUsSjywKkgSaWLxnW6yNboPs4qDZ7z69oKjt94pa",
  "key47": "3zigmzg6UuCrEnv1cAMTxpgRivz3SBuApywjLS4C8YCLbsVBuHJE3FsANiEAHu7CcUQa9xxpGF65yfWohEEPYhzz"
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
