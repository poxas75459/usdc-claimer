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
    "8WzX5ejstRBJp47X2KGmKmfdiXbWtJQW1ye18j8xmPKVVTycMg7mrSyEhK2EYe4gbWXz5HDTRK3zzoHSJfZVWiA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NKFRonfrHjxvtnxynJrNxszuDSxzukTLfRu4dmjkCEoyKTUuyDbUbxi6dxvKGwUvApA4ifRRDeQADDtfHSw9Tfd",
  "key1": "6bUL9E5eLZx5S8phzKUQ9WomZhNb84fpdr5RVFdM1mrpgUHCvStTk6oDgmt5EBZC3LwXCRorZwMcAX39AHWSthv",
  "key2": "4vFjU5q1GVcG8Ss5RxtMyjBKGJNkddBXLfjiURLZ12xj9mkgaBxtkFchM3BK5K8XE59uXdnszNbiiXj3zjvquDwF",
  "key3": "2nPLndWrMePrZKsyBoQ63CWQ7QWnYNerCzS8SnriLiKG9W73gdV9o9XcczdMtq64YvZMJ4K4M1NGmNSJNZPdBMFh",
  "key4": "5Y9kpUhBz84M2fkBvGNKf7xeBPjNFXMNt77i7F2AL7fZazsq9oeK3SVS633T3GtsncfX9gkq68fxd8RkKjE48Bgq",
  "key5": "Spr4EzdGBaxNtj5Pzhqak1jEdTFUqGCZj3wRDe8SRU2BE3npPpgqgkmUiy2EJ9L228KNfLdj7zuccZ7RXMg41bZ",
  "key6": "39xWKRiuB1e6XzDgiuNyCZohBaz47hZ6HGX3TGQyzXyLxCaBiR1b2fRc3gMZyDyKG7zeSsGeMiUmYw6roqQXu9CY",
  "key7": "4UDwYFKJDL7poECxB3111xgwoTfmnrhQdoQJ5L9nxAiwucrgAt7zccXrAgra3d1BFdU1zvNHAtEcdCEBzaXaWKEt",
  "key8": "b2pWipSgYZpXLbDbmza1k9WqUUEyNFGtivyKDgh5TrCKFr95Zcg75gGvSHA5VKsqbU6aHSvUaRH3i934gfSMAhT",
  "key9": "4oPG658K6drSsN6jk6PYccYaY9tamiFeGgBAmATdhEtGX344KehuC5A89iYL35Pyq8HxEZk2R9gjCLtn9aiwoQrv",
  "key10": "45TQHw1hYACQBxr1vSV7pxWkLehZ1M1C23SyoBPhYkz7f293Mwp25nfhV6ce6pi6svwKoLgNQ6nYyT3h8ZvxcxZK",
  "key11": "3XHGd3jg2Vq3KAVNNBbLKDnZAMGp9obFnAc6ZfcCSnhL17qxu9TLqyrshNfsdMrLNCVFGbEeQRimu36nY1v8JvQ9",
  "key12": "3c7BkfGkutbodKCDqVUXQbU7aQnj2C363cdYXpJ1a8RQkP37kMu5Q2GdGBNNFShUP3Q9neSPq7n68ajuwULFBzv8",
  "key13": "UZ3c8hv9p9p9y5JudXMxQxBYycEEPXFnz2QXMGiSmMvgiVQAa914Ty5fQ9ctBALZk7fsEKWMW4s7ZEXACdjqeHQ",
  "key14": "YNEXjwmGrBvMtz7Bu47xCbqMDH47MAU4HyUaU8ArgpMHjH9cU9cN9ymsFce4HAwvyoPTwJCxNs31YYNvNYfc7PT",
  "key15": "33qTEJjteWyxZF3XXVBMJ9E6t8SCzFkZdgW378Sa1bqajZNNo4STbnLo3o71aF7XQrbCG61etPgR4co14n4knDSu",
  "key16": "5z8z5gXjbjnpxtzcNBhKXE46Qn5JYgNcYGMHa6MSfhuSx66mdJev1g1s6d7Hf7pT8cJnCV5TgwpUp3XHCJugvmZx",
  "key17": "5g1v2hrEa8QKrUxjp8n74hvSSZufRdUjySZ2J5fjaYwhwAQ7sxBYENJ2kiip4gvgtkdrTL2ewArn8v2oyVWs6XzK",
  "key18": "SPMQtmpqJxoGDcK4SPfJEFnsHWhQpt5T3bnDaatHsKvim8qzJuxaSBS5nAyQoZcbmfKGzfM1bnHiXc1w3K6i43b",
  "key19": "3vinTEwyY4eQTj2z3cdY6XSCDTnYoTrjRH2HpQv8ZB4aWsiPfb5uFvzYPKi2txd1siDnwJBuyUf1zg1KKbu3QdPU",
  "key20": "5wpZztdujZkFfFf8epotYAvH8CFoJj8TERPmHAySZjNCcVFDjpYaZPRXiKVHgQE62C79mM341ZopcrH3jkduQVu4",
  "key21": "rBsrLeyMcoSt8peaxuDNj6usejgjbk8ftz6972manxj4sSu2vpHcJHDHtw7tw2JS2sh5VWPbXLSzDCF9fxxujbG",
  "key22": "5CVDhsyj3TyZ1iYRQ1awvXR6hv9XKcDKVCGSVCqbnESmWqsbtVa2pq9Rif14hXmUzTaqLercNG6ZkWgzCqef6BG",
  "key23": "4nAak5ddszykJya7gwhntVnaVPZBS6gXKijdeZF7u7wS9gYxxUaqJYxJZDheXLMqLoH7TeWBj5vNY64j7TX97rvK",
  "key24": "593hEj6b2ZHjpbib8Kk9jduYz3BCdJmnxLufSeL6FtmZRDXSjonmgJbGVFCV1cv4LmA3a9p6nnT4jdpq1SvxmMbD",
  "key25": "4ifZm7TQxdLc9eiDwQ8mbuhP8UhBJ8bquuohrJ2FYd8n1z9PbcLUt5oNsKfzrGPRiEnYb9c85tWvg5vTBi9oCYqM",
  "key26": "3AuNjvFft8nCjW3EkxvRUbMtCYXjDz7ZmTMNK1hEZtoHhCuMdH8MtVtLdCxSVSK7C696dxtV629PxG1nvuPRTgwg",
  "key27": "2fbFNHZcpnDpnBm7xfdwXfvpuyyTu1fxtxuQ8oQ4iJaX3paipC7TrYjKwWAXYXERMd8CLpzfa5p9bAzDYutooC3v",
  "key28": "565UCiGM5Wcoz1PsFYh1RTCQsQoN73FMKzxRi6faRcrvDJL7sxhPEKKPqmjnvfqia4BmhpH23s6vRVi1or6zmP11",
  "key29": "3xM9uLYwmwJdWTrWX2YoqQWhwBe7icvL5vDYNW3JM1n8iEcyTQooe5Pb1SnSrWm5f3TsY53eLWyceBggqmwzgc4L",
  "key30": "3RRgDwBVzNy2eB2Czv5ZEfDwudZtyodWxkRQMy1YXGMfAcJc5u7MFGmyQ2CWxfBQ48YdrK3utAXfWAuGFhwCMhq7",
  "key31": "5rZ8bMP7kurJNwsLsbVKZh4yu7Ah71aud72M7V2z9uZZh6PfvBitW9s3N4JrRLvKbyfGVapPvBwGxfnYPP14dLcq",
  "key32": "3T3MV4JL1LgvCD7rp6cNW9S9tn8uPBRiDQxmnkBxn1hWHkBuhYYAuSFEuuf5otYh945A1ahqsFgvaYKi5xTXsbSU",
  "key33": "2GAz1oykdD2DqJgFrNCcHaz22hSWSDNJrsZ2jNnjD28DBCs6DZbVLuQJ1JQDY9u7xjv5e6C5C6HuicX393k2vHDs",
  "key34": "4eFwbpz8J7apGaP8qsVroMuWj1gsLQwnwcC3WxKz34PbgDxCUFUqeiYZq1CeDUH8PaNGC71QRyySaoA9rK8yvi2s",
  "key35": "4QGMqYvea9afQDhkMag7ydEqY5f88zjMEiTgAkDA7cBAqh1FqPsQrtYY9E46Yww4QjTHGE99o5aRbBioU8rwu8gG",
  "key36": "2jqprA1r3suGwS9srSGQqdaZa1Vf7c38whNnZqVhW8sp8nuEMFoy63uEVaD8bSN3mpG1Fu1kgqterSdnK1Bu3qSp",
  "key37": "3z4YzBB5SDpZFWTgvwBzfuz1siSktF5g2Ksr7VGBk3KkHJeGDaMyKTEDvZzAsx1p8unzMycPxVXJqK8PbDDWUaSd",
  "key38": "3sCro8gQFTWLMKEyTsKHKjXCAC8HLpBvMip1kXRjrLYHGJT3iE3BxRECB6Czo6Q2cY5TWnh8Thrnh8wKYYy8G3Gc",
  "key39": "58QkzqM5nb8oGjVvqSrrzQXQyKe8fThLkxUyBu6ny39MuwXsskGNfMCkGzpQbj4fncVtgxU6cZ3zahiqTHTRsC1P",
  "key40": "3tJBT7vrTBVQp4eEu2wjG7M2SKpsq4Km5XaSahjd9YfSLzHxzwXBFxtzqNoUALX6JZHVhGQzaBYXaDcyZtS2pTBD",
  "key41": "4PSiarmE7qDkT8o4knWRzaMVP84b7xVeUnBSDy6JKoQHEqTSahHRpFP11xZfg8xAR57cDw5fyBJbUtTybiLUeiUB",
  "key42": "3k4ZnY15twSouZM1WojDJYZY3KvCBheLofTe3dAiyrVq2JD7tURnGcPKGk9LcvvJxiJa9tpsCDcjNiL5ruY5q1ZY",
  "key43": "4gxhek8jHJ9Wv9fK9rZ5ZsyCSqYdwMhWvCzsF9dJutg9BxFan7BcKNS9au1TMmezjPZCDhBqfpWdhtdjqPeKx22k",
  "key44": "5NBJJx3JbvigGiWzXGJTwz9mkUf1SpzYAWg6iUKpPYhA3kMs1B9L4NeVK6EYJ1JMqdypcwJYy18Eynx7GmHjnx7w"
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
