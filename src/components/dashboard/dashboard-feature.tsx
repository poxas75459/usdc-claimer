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
    "4vV5EZsLMhic6uS5Qc4faHvNWQXWEUh4aJNrkVGd47UBTkCsgdjrr4QRG6jYV895CYS1N1jbXj9vYeKQJki9XdcJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "268SJ9RN9nNuTSHWg3XHJbTzCvg343VtoGk7BCLKPPbqPe9ac93UFVStgq1bW8BtcuwV2NiE1SoeETZEtPWqdZXF",
  "key1": "3a4vLQTE4kRzmE5U3Ut5ETer6zkxzbEgbLySpRn1pxdaybDmncwVdb6QcYGzFh2y8n7GeVk6R5yV84kqsg4z69Ae",
  "key2": "2LtFcqktwca6629nS3msRz3iQg33bHkMywC7ynKTaHGhx2wjg6Fp2iqwZz6V2NhKLyM6rWVYGNqfuWSDnobNqFwd",
  "key3": "D2BjNfQ4T9Wms7WoQcrB3XKAQRkmV9dXEcWxb629REbmFUi9HjXbajENuH1dtUBAcapon3Q9BiwvcbPRHoG1Nts",
  "key4": "4Vvbz3shwjwV9UMYCwntnCfvSRZQbLLPcejZACoUVK4W1dy15ByUJCd6o8DUyPGg4cyMC7tFpeM1WAVnjKTUSgDU",
  "key5": "3HpMd2NV6oMGoUpGV9uJJkuyT58V9m4roczrnSvgg2evQabYfcBye8C3rKVXMtsn6TDwhmXNibTEP6do3zXGH5BE",
  "key6": "3xHsehkoyngMWM9kweDZQ9hLKRtDpk9CVPQ9Pz2hLfXhdgn9vo7MUT9utqxpRAZWztYB7oDN4TSRBxr1JjZ4XeH7",
  "key7": "c8q4yTXMw6zWCjXp48znM2XBLVXpRbQ2sXC29vb2uvjVAA6JWq5fxF6w74XsWRRadDLURBdNBm29LjmfHc6mZdy",
  "key8": "3DM7LK3SQx9FGS9T1kYCYRpKexw7qWGHW2MTzFUQREad4APbTVDTxAwtXKJwQ9PSFibERT2sQjksUWKwks5bJNDK",
  "key9": "3QTNaNDp3yAVw4CEm2GF1Z6XNWaEcCvAirWdxeBbAHdLdeMSYQpUj2iY2VRLLA6tmfqjei1o2AD7YR5MvHBRYZJD",
  "key10": "wTvVeR3xtpEnnPYVWfnreCCze2dCKd2uhxR4TGMaYKGzmbp3YqsykUFGBVPWDjVkeeWxqymchcngGqeUfn6wpSw",
  "key11": "64uDcygn8cX4aYgbReSKVA1nC41eB5p9eSZvjxqNNMqLzTLf4LM6nbNMFRQdxYqGJPsQSRomTTw7CobWHCefqL6Y",
  "key12": "UCUkVQG6TWvoZFpPikSDdYXSUddewiJ8CgF3KXm8EyBCFD9Zxp3SRixpPdK8kQUUD1Q8zeHXsPdQSFufHJhXEGb",
  "key13": "3af3vBLiJwR4HYRgijE16Xciqwrbcs5gREigXjRZgTudbT1C5gYESgiWwrU5rYJvg6NVYXNTR9gY91NuGBBVwGAA",
  "key14": "QXiPSGB7buG5nZU9QitCKYgUw8XyyvFndQpdCYuN6G8kjk3Bay3x9mFRS8Y13qCj2KmAX5dyxJjHrbViQbdy8XH",
  "key15": "4eAuHAp43zjTQY6wAPrkZmNU5p5pR4csUBanPhovzu6FGHxHquoVRkgxFMpiaK6iUJnMsVT6YEGBqASMgD6NgqTq",
  "key16": "3DbxdYQU2K1MzRTk8FLRe6ho1oks2hCnvKzVWvaUcwvr3fSa4vq2hxhsdzuH4f9GiR6mwhiTe2vBPAMHZVeFnfbw",
  "key17": "2qoc4DP2D3cvJX8W8C6KhLAwgqAYqoi3c3DtHk5jP8SxahSU6QozWaCoDk9kYGowDaeSiEecVWxKvg6j5fkhkpaz",
  "key18": "2k2szCFA2yUghHUWR6Gp2m6CkWdaxNWSgX765m2rx3HVChEYbL7siV5JMpfBymnBagyKhr1Q8XUeLtwZHu1nAeZX",
  "key19": "cYxCKFATpr17gcaN21nitTmKfvdvPXLMzbEpS7KbY4RKz8rePvg9ddVEYJCCLAebhfj7pRBt6YibUhe4qrWhkBp",
  "key20": "mvXxuKr43FkW9jvPZ5eCXFb2RFpBvvpcyTQ42BJV2K5j7u1t6ADqLGAseP8XJrhA13HnaHwe5Memn5WqhgFMnaF",
  "key21": "36orYEBbJ6y6V7qMWrWCpRApa9vjzhjhz9jwPYwNVdsHDdFHkpEvnzLrWY2c9RXLdbzWCJuZ1Q1JpKsH7ABKX1iP",
  "key22": "3QyQyG6Xt5asCGBJQkTF6wJd24so1vmCPp4NKv541ShSF98GdBwDtqXdTeZ8YyiUJ3Nmkp3N1pd6M5KZ8BaRkyvS",
  "key23": "2yMEncAjTNA9GLdW7GZkYxALQ9XuBxDqFAPZ6qy24KVKacGpK4LuvFDUiDm8Ncpur4DfqwtEsQpWBNyWsJWq6z8G",
  "key24": "4Q8wBL4ZE82yYm6c2UtDrgVHAq5pvJrawNZCaDSHgK7JE18oyrLUHgh8BoknxvPduBqBFQZgw4J6JgXpE5ui4tNQ",
  "key25": "4htTdnEp9zAvRpTMJPbp2ansXfTTWNzFSwqTbsRhmyTJM9WSEfFHgpy3ZFWFofUNKYdGwsZ2X8R9rLJVcTABVrTw",
  "key26": "itFJNsVBq2UXdRi2CczLYUxRWVXTrmE3JUXe4hn5tu6Z7uGuv5S61rD8CPWuqkzvFQRpb3YARur2P63inf9xdnp",
  "key27": "3yGcyiiLK1Xa8uLCDNQkJrYUktsVmdxgt6oDdujxdm9bAtujy8Zw7sE8rJmmJm5MKRs5MxLN4e7bkYmDpk61r4sx",
  "key28": "5GKzbqj92xEaeW2hbWpaofNtWzqyF2zJiMoAKnPLXu68VnwiDi9XpKuDp8ej9pJzbxd1S5ynfaNNQKKHSGFTQqU7",
  "key29": "4YWgSYjMvhcwFFJdDQ5u28tNiHyvVujYuhBEeRKBp6j3LgSG71MvPE5mLBz5PE2nN1dbsH23N2oA6tZCPPJCEwTr",
  "key30": "2arpZ1ppEQGU7k4exNQ4sSiWFytS4vABLMYsYmm8KkwWJf5zUL4PJDm6h5xBzAFyxnkWYufLi52TmeQXeXyN2s5Y",
  "key31": "2EXT3678PfBGEZmgkyyiXZdrYifzEXAtLZCjF9rY1mgaGk6ocazQgFS79JYfnv8QBZfma1HJL6E2vrssJjx1Lyye",
  "key32": "4gzgNLymAtbRX8hJVdZDSt6A6eoPneHZGijLQRMcrjGQAgnpFDLVRgL1sS1a8opbN9TfxQUqR3o6HFcUZVD6yjdz",
  "key33": "52ahncAhJZqM4jbw7kt7jnC4FbtvseYBb5uWTKxgiacktNGowotJYkTa6hExG4uMNr3cXu12h4ZGW1o3nY1RMEHM",
  "key34": "2UR3QWyFWWXgedP8MuSWEH9f3pzbHfRVqGur2ggwjpwfef6NkHTeqgxB87aAebSRfdUpYvq5h24Rmo429FQsuLLN",
  "key35": "2ySrgDM3e5C2LsynnVD5Vgnz12KcnBopZhrkYArqvpxgUGY4Ax9QFUr96W3EAGWXsx9aZGLUj4NAgwnSk8AURmdr"
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
