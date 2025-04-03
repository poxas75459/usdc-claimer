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
    "bG9i817a45shEmtrFTgzYnR5kNyZcxEF7AAXRj8CqcwsyxhQFzpQP6yVDQtXjmQcVkBCMK6TqG4aFmintZmsFXV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bNLxrcsAFt6XKBa4pdzr77RErqnq58FA88puUYSHy2SKNrk3cqXMduh1mjAm3AZAWr9ZYHLKao37obTfrkVLkw4",
  "key1": "2iW9HywYGBAmsw9iL3edzNTovcTFPvVsG82MobvTjABCqB3RATqmNxF87jPzqDPS2dUAvYGQJQbKqD6oiycHSY69",
  "key2": "31kU8o65FQaRvFPgPRAFTt8VZdLVuvowuQq5QJq11dzNeESyb5r7VmrK4igCDAvXH58DcUDMpzAH5ZBxMoxJuWsc",
  "key3": "3hZ3N7Z85UY9VhxxkVtumb97ffxKJzdBBaHY9hQY7xCGpSWUs2ySrEr5H4k3jAQWKRnA93B7YGAnnRjYpKYumzSS",
  "key4": "64npQyNfHUcT126crxJgjmMmxAhJZvE36XS7Uzuq1JNUuiLLosCXNZsq5aAhJJF6S473oydEXURgHPvdWv3MDBE2",
  "key5": "2xW6fodVktN9883EAcP7RHLuumCvqanjAAAJ2vGPGxjuQsk89rzBrmzfvhod6b9QPBFpJFh6TweYMTtKhjdkUbrx",
  "key6": "2BUdu58uMRdGrZJc53FdMZ4vZhckPiFC7YiKhiBjetftDyQCCuQCjfYD5zadK8234jo1pdbQjcNhU7yEfLobyNX5",
  "key7": "3Zjdrov2Et2ShawKqCna6Yys86edjkhoaminBjmWmpax4EEvLvYf35zQi2YHgdioHmhaxHPgPWvAzbFjbJcncYzi",
  "key8": "41YHnrLdRUmnsP7DqfiUBYFsWjBxHK5keLBPyjufuhqpfGNr4VmLh5Vc85Y1sAEB9EzVdaSVXJVURbZAr6LWjjjS",
  "key9": "3WGeC2ycixRuc8ApHYmD2RqWFJYVjo5Noh6GB3FNHHZTEusiiqGBRK34Q1tNn8vfYd5gSNsMfByaNgfG98oAgcd4",
  "key10": "s637CckjH8su2JfHmx1ud1Qf4V7R6h9jMHWjfUyMKEzQorsFWNs5k3KV41j3Ut2V1SCTLChFbne8UuxLvYEWsw8",
  "key11": "Bzfwgz7cg1j2J7qb1HAkHutK5gWe5JR3RBbFhdwhF6bFhYAsWM3bEAsqqFmytJX2eDAiMaRBi1xrB5cVpJ9v3wy",
  "key12": "4YPKYdVY7ypsedCmKiLAq4QgneqbPTsrjaXt47xEZJQqY3BwxHD4XkKNuQRN7BahsttkMZYBDByaGAzBtKnU31Pn",
  "key13": "5ixUVHjT2FNk79xQdWa28eBuCyCYHxC7N5SDVA6NgbfMP9Z9iVdMVaKz69enFuYZCMyLLfNxBXdRhVGPvk563hSX",
  "key14": "4y3DA9MtFt1GswdfcccSA4Ymmh9zTRLR2Ft2rKs55FgN83rMo9ErdUXu11gJhNKeeuKmFUWrK7jNyY2SnGamP9YR",
  "key15": "4iXKxNZAZ8xvH6nF3wR8bPqMZgAtK9oE8q6egYx5XM3V3jM8WSgPz6aU2UPa8uvsPKZUHotffkAXcFNSR34Lccy8",
  "key16": "4yR3c2UNE4EqFu9ApH1pQjvMZY6Hs48UQZeDFpft7xVa1GgXoDPJqhmcG7jmL7W8XS19AhyNy1bj2QWKFnHXKgDw",
  "key17": "2DhCiAuZYH6J1yLWTBwEaXTrc5soeMuxZJpBg1qnFFXMkTtFU4zy3sPKXmCyC3ynesJPACEeo2N9KhbAS3LKUgRT",
  "key18": "z8Ym8u3szKwNpEigqe1tzo6kWrcNbfpdgo3qd7Ehv2LMCZjdJvKsPxwC5fTn63wwit6nZWi3eCL8BiCsx4CNpRG",
  "key19": "FNbXZLbp97r4a5wv9WXsUFSdzZC7FdJTUALJ5Kv4Pvoepgc3AdwjNkdkD15EAGHviKGAEWeyqDcDj9rEoW1NLu6",
  "key20": "4YN1AxdnJBEyCQCvq9SiHpyunwRSpVUkBxhhZ6Qi7gkBHtgoamZ818YF2MMdqo2gKrY3PKJbigK75HE8S7Y9Z8jH",
  "key21": "2ubGQNL2Lzm5zjt3wspDED3Zu6p6Fqne91D5YFKmgEi2yRBdXeyruzenTLWXLA1Ys1ULNhTsA33s33zTS4rdvkq5",
  "key22": "2GQP3WirtVuHtKb3MwsRfC1z92oLUfHhx4eYQohogTEj41gdLo7s7YDnRnk9Sv5abcy34Wb2pUkNQA855fRdN3HU",
  "key23": "1zSbxPELaxTuKWtJDTVd4UJ8Zfxbfoq4xMNW2aN3iFysbSfHiasPcawtYHoiT77Gh8igLrAdgJMXwwK9aeemM4H",
  "key24": "3xKKQcQs7V4LwZ8uMUSDuajqrME9T6VB4BR5R4HeJgFjr7wZoeN49M76rV2kTSmUdvXekDgFRjztnc8gHr5zWz2o",
  "key25": "56UumHJcpGSpLiHs9cFniraS29oHRT8kCXMsYL3SHRF4cDyGkuwbYz4dQZbBWtGPGZSvFfBtzZPgLEQz49fNPcyj",
  "key26": "5zPha3TsEU5oTFXJdtSPUaK1dXCHNFXxNrUG9JpoptjL8YdFPqE3potomN6km2VjLiqPjb1NDms9e7VogSj2jEQ6",
  "key27": "3JPGNKVWMFt3iXDhJdQWzu8Gj6EnwiJrkiqxogiKjGhsV3af82RAXgM62MQ3rBQZmsn7HhJwt6WD5VR7nrbny5PV",
  "key28": "4vTjGuG3wCZQm5U5JGaUW1sfoPJYK9MQF7QJJULMSoGfbVMpS2NAX6qenUWUBwe5YM3iuZnzLsRLRpM6eB5NHnJp",
  "key29": "3QvZibMyVM37PvQ12xhENVAhyTAJ2nmg2oajgB68gTckgH1z2nK39X6iS6eRm1k6K1JKb4MtaYGBAVq5251gQEXa",
  "key30": "5Vxvr7xf24mdJjzmjkMn9n3o4rqnXiWd9r6xePxNgtMMvYE5x8EBCDGUc1WZBDGs2aPqFECg2pKGJzqUup7KGyMe",
  "key31": "26cG26jvnuSZSeUSLN7kF541bukWgfQqhigBs3EJp4AYubze4uZiMo5zMmHZk2VzjqqrKZ89RaCRLhsQggCadQLz",
  "key32": "DMVR4mWmvC9nFPGrWp81pQu8hShh9HYtxhrWCb6ZTpoLzx9Vy1MZVH1mYwgXHAyVwAK6iy7BBTKNxnJnyb5uAZc",
  "key33": "4HESKa5pj2iQVZKp12coaDrQrLqNNPpg5ELUUAFxub2ZbrcyuyNhSuTwyVnbCHa2vNLeRkYBN5vMSJegExEsQ5qG",
  "key34": "2LHHqo34us7bpFsLHC3CKzbYbaxJgt3LXYBS3q723ETyfTvXrYdxd8C63jzQddtwxdtvv4qnevNj3ZqzuATLu2pC",
  "key35": "5jgv4TwD8F5vBZALtXj3K5pb8W4MkJksvJBQ7hP7NK81PzECuKNtdJuKYrgC73Ft7JFEZ5XssYTLjpWwDowa9hhT",
  "key36": "9GoXXQdCpaH86y8LRpXaJrxZAmktoWzBGGASVudKWEd3RTixhQv7uXiiRNN14cj9YKdXRmZC6Lg4MHSScrAaQ7M",
  "key37": "4D6VuHMdFwnnfTF7k3oRndEsxst76CLyA6XgaGxB5Gibi4Ld4BFaPkpmi17a23e396G3EL5SaxkTqDc14uYBPHbZ",
  "key38": "43aH5feWArmW7CWK9nmxzVvhJ3nLp9kEijEzz9aJKd6E6wd8b9qfYgDp7SjzFktfj1GShWPgwh31ck9jipv6oisQ",
  "key39": "2R7LxhWsGR9M5gsC44UMvznRnFA31qF9LcaAZD8tXRZPNqMH922oDjYnJC3JJkDEm3tx6j2K78Nhpg7TQ596hoLA",
  "key40": "2t5YuaEkTcuoWEPN42cDcBJwSbBoLad4JoSe5V8mGA8RHrPTkFPmhTnQU7fn2eGy6TzbJKHEXppLsFfe8Mh2dGEj"
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
