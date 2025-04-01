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
    "2e7gq15Km9wsonAmzcxvUM2tvzKreaa2jYRyUM2CJkFiPznLPnWUa8djgVpqj4yyPLMquQfMhQAwHgWS1gYSzEMw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DCfJ5a9ZrTqsWXvLnv4iHn8CQP9JpsvUJYh9ZwDgdjfwef7BchXyC1q5p6zwCiosAD1bJ3jkhiheFdBENrVcY59",
  "key1": "5tbHPZAYCjp5H8XChgMwnZfVk7APJq8yPJgChXUeWFWGk7KkrwoxdsbMDsNEXcibP4Z9kGzvmcydjxbP3esAEVUY",
  "key2": "4pWmkEtkym4SM7nhM27SdnS8DhexaxZfs3WsvAycdE7YbmGzYpbbAr3KdjsRptyYnTE7GRAWAk68MbRVt2qYKHfQ",
  "key3": "4NDNfj47PAv2XVpr4iVxpDgC5mjg9yzZTgHRS8zkaJfNYf1HyBbDCqC2dWs9SxpDZKWV9E16DWv27o8ChXTpbtZd",
  "key4": "3A29sSr5wzMzHMAkjRiTgdLfc9JpYFrxyJhB8AgZje1JLazyNd41mRHqrY6H241fhH1pXbWLMQxasoKRG3jUuz9H",
  "key5": "4MWuiTtCL6y8GkaxyU1UhUqvXiBSEPEKgNUB2BiKzg2cDrUmnUvP7TmpnKnqLFRLWrK5jpujUjr9kEXXgSNq2qyY",
  "key6": "5jcs9ZDU2Vd4hRZFYxHspAjLLvjLjv72mtuzCkh5SfhQUsBW2jPSDbkokqTqsbS3V9j74juCFMV1YHXPnvM2dRU9",
  "key7": "ccparWtH4LxvHrWeFruWug5T5ebxywPSBvJGqMTDe9nX1HzPkw1i1jKMe2CoDRY5emsftbEGGm4Meqhr9y1ui1u",
  "key8": "2sBuCiVVQaXgouodt4MK2v57NHQhGP3xT6n3vFCN9GgNJjzcCoUuoFfV1ZmeGfFuJ3HzyvqyQFALGNFzr6xvUQaf",
  "key9": "3UJRiqMWsidRWXzCDCu2cLntNxK5Q9N9nbGcDB2JmLhRK9JXLFAHUBmmySubBBhxjnYfuAHGsh8kLLcxvvfwjLny",
  "key10": "59crj4kH23WTQkDzXP1A7QjsHVQa5ssMPxpwVvaRQJSJ7p5HEKsQXBm9Ha2fpLHLDyxopUYNsr6f2MdDQir6ErZJ",
  "key11": "65XNFJYcvn8cM3daQKovWAo2G8bgU2skyKJhDL4Sxdyc7qCDuqZM7VK7j7ANTybXrangp8EUuAN1N7qxiTwwWBgz",
  "key12": "4W9f9qDGw87PN5G4tmPB2S4Jnvb2U6KvmzSayovctw4JPxEK3aKHgG9j5mowKwEHGejxwpsczQ3zp4Zv4miPtnuW",
  "key13": "5xe4J6jN371WdxsPygejMsj9QKvcSE2YovDWzvtZEL5kyPHKq7ag6oX8wXnW4Zm76oo2SQvsjysWXjby7YMRmyh3",
  "key14": "4WbRuW8m5EJghDPCxusZ3kMfwPUHWejVEUFecarST1oXRd238S87S2eeJFPQaLfaL3WMv5jE7hPAU9itbcRpvUc1",
  "key15": "3BF9rBPysABm77VccbJ8tiK8cE2h19SEm3pDuEmhdYbRBzDZEtvmnyyAhXQRK7KsoiQmpdLs1T65Rqn1QkoJeyD4",
  "key16": "dA9B958j14c8cedCUvzc3ZQkvXhZaG4qzULiAPUyrfn3GaMcqiZkHRGmqG8Kq98tBKCkA76N7YuSzSjDtBzWNWU",
  "key17": "2BaA7YTbh7D4kQ8i2wVDNhqqduDykVvki6FHXjr6u1JFvyMF9HeNT6MVUmWpXLN1rYoyxQxMntVmSUvgU7Nu3grh",
  "key18": "4PtEMwBqnmi81zKt8HXL9baF3K3nhNptUJbiwN7khw9cB7Z6neXoEyzzkSnXAWcnFjxnRY9n4R4VqbkTAu3Y27yL",
  "key19": "MXjA6KxATFJycN1WPgoGB3rVp7DZgY45uYX2eWbvNe66MqUPUR87wGXc5eUUBbmZMX3hJjXtJPpf9PSDPzNvh2h",
  "key20": "uTM8R4Ph7ySYSjKdxf8ifCad6QUHmL7N2KpSyrwLsaQ78G3bN5D1mw5wuh8F9m6Wtv6NgCkPhgPpSiyoxqcHfwF",
  "key21": "5EZGrqihhfjUkYv4wCGxhsqfyW7fdzfusMkVmu99i1im2QWDwKU1qfzEnV3fnTWvHXkkp6GucmqDU1r3oeDPj2V3",
  "key22": "5tgmvgRwALJPSsn1rDWHLyAL3iKNDU7YQXNZpxB21xbdVSjAuBkeSi3VXoquKgDeCpF51iYZBAaUwxTALffNoGXr",
  "key23": "4AwQYWzB85AhWb2fMamB3pBXodA7LKqgLMMc4Z5do28VbXgVPb9S91Memn1S31PKPa9N1S5N5sDTNdARNcKXmj57",
  "key24": "4hwzWQXCDLo61thNTRbDHoRM7hhSnMxmai46ErGoX8zWNAy3dwNhhDQ4SYDWc6tnCY6mVDYikoUMmNBsAUCCd6Yi",
  "key25": "MpwqtWa3nL3JFqnfgz7LqJLPzSJZLNtkv5fLB7TmCm4AcLu9uqELi3dAwhabZR4SiiMEVxWp3YE9y9rfznX3WjP",
  "key26": "cKHJbroeThXaCBYuZzwnPPzvdGRQTkR1SHCg3LMojDP2bAQFoi1YS1beyZNR5G8FH2HtNemUedhkqiqv9KmLPxL",
  "key27": "4HkAkAw6eGnyZVCdEnNRvAi4XNEzUBsJWT98U2upUru5fG3JLHNMm9d8BWRoMWtJVbUn1BpxwuUMDsPk2EzdGNpZ",
  "key28": "5hpPTKjLC6MUwuEJ6z5BzWQnp9kSmZRto3Av9Hzq7fs78e9m7gCy6Q8pgB9sjy5M6jnP7gERYadoxo2xhheo6deH",
  "key29": "3cwQGUwm9VwTBE9A2AoHGLRwqqM3Ehex4J4GYVnGCL9rK4tBCdsgG8EeERrGRvLTQn3nL1JmDVaRd2XLWbTdpKHL",
  "key30": "AyaFtVfh3zvDaJ2cR4iNSAdkWfthgh2TKfsjcj591WbJgFHk9tAUUzzecnjmisz765UrwnGTMxDyEyLPkJJBGNM",
  "key31": "354Hsx7XByQaEb3W6YJqwfSyK7qyVvBRpreXYvcYefPFoiWjt3K7hYramznPB3iF4uPdWVHtQEgfZ8sNrp4SvQJy",
  "key32": "36DkGK59ySBApemH2oE1JTQekoxBmhG5rdNHz8Uz8aBHFxFcW1NV2YxYwVwrYqW147QQKgyNKPJK9Y9DE2FWeCcu",
  "key33": "5CHpojF4VzU7ARdiiHLUpRWjpc2xuwBfF5SDFjQq9vF9eZv1sqVAtb2mnfj9Sub8ccZSYMMUVQcf49Lo65XfnP9Z"
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
