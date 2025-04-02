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
    "4cxU1GXLbhkvvaR5MZXJq9y1jRrVH7QcydgpyipHRb6iLi8mPY9k1ky6ysN5Brv9kmqsUVTejJsNfjFo7CXszk3e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ctjJk69eMft1jXHUeTVowYt2wKoqatgAtLbke37r3XNbQaeTQ12VBQE9RW2YBcFF6i8k9qH6fjceSgs6DjmzrFa",
  "key1": "3eZ4u6mrVPQRgUze2WbsSwxzfUhhyavdqf5eusazcwDiUn2LqFhCBS7LwLDV8pBwpcpJnpTCPhzW3PMRjio3t7cP",
  "key2": "3AEPyRPFV5bfEGt1QycJ7nHEZo8dSZx7BuQPjgtcMGH9WLFWMh4USztPF79gS1pw6f7DxayzsNKofU5ArExDT353",
  "key3": "2kCCnyJHnnS8ACFxN39Nqbhmorb7eFUzFEaCv4cjT7rKfMGehKJEQXKqtkkdCR8QRcC1niypQqsW8dcVRiRjBPWD",
  "key4": "2DkHrK8q2tKUqZe8F6LvMGzpANcAw9SKfLbhFxpsxX7WBbFERvwzdfP2BMfjfoAbvTMaHv8vKBfWCKqTPKCwQsYh",
  "key5": "3aesfxUgMSi4PT3TJQxSm5Bde7Dnehyuz9jDmV1PoFWS5M6au8NNWV9r1D6WFsmmi75RziHvXL1Y7RuNKj2fKQRp",
  "key6": "5jR7kJKtZ1uy1A39naCv8x19BQHMjqxjdRHsbZjL6uzP6awkka3ejxnQwE1XbjzsdeqxYe7cF3ny59BMayLoVCq4",
  "key7": "FuYyJGLJm7NiimHYub2rJiS6UCHLTuJw2nWBffn4x4qPneUx9dtM8PsRnCimRY1ns5ycV2Yo2hmYHd1wk4qq1YS",
  "key8": "3Lj2Sa6zxb7cxq3P3kfteHDZfqqeQRi9uUWMEaBpw1ai5AcLAQpyX2tRJuAyuo3zPdBghjtSEEJ3k3P4cMb4Ehqu",
  "key9": "4iEYN9cdpbdmCQvqX4zjx1fGZPx9tfkwBbvTgZRng26cJycrysritx3HNWd8GXM1T9mgrQBtSqwvhSWGfi4si4d7",
  "key10": "2hQpsW1uZ1PnyMfR6MJfHkB48GxXM94D4wEMvioFrA2C5RafZ3ptFa1b2CCAP4ZqSS79V7PxKRXG5UqSF9gZsznD",
  "key11": "4swHYnpVtmejeSFbji1z5sTdnMkMqFqDANYEibCm9uHYCrFnQjtXh9mhtgMTYVB54yuCh3BeYFuW4oUDMsk1QyqM",
  "key12": "3g4MQExg1Yrhb91aZy7ekpHKvneh8yrUZx7wULggyQFSj6xmfQDHAYviomU8ZvyyLEg4XLjR26fYzimnwQKkh1Wk",
  "key13": "5xAtzfUMN7wYU6GQud2dLk9yWuRokPAwz2ggKYpzJJpsaJqJActKVquAuGc6V5CCt4K7jX8XN4F2zDuYzeFCRXXU",
  "key14": "5FaDZnT3PGQtmkGgeQ8mdQH2GQMRsBNQVjsKntgZRriiJGzNpS7PvsympiBgvirhKtowuXRnYj3NyomGAwnLSFYK",
  "key15": "63TBBtsEQgH2ESNv9rRsvAFN9s3WxfiFCEfqLK9numPRDQhzyFuVjPKFSbSJAP8Yqf9LwkvXySDscwQQkf7ZbLkY",
  "key16": "3cNSf3eVjY9UtLa2ovAGMMR6zsCyZKSduwSbcSYSHDiTeWGUwYAq2MTkhuuQRKEbuySjGteDHYYYmnSwyWNchpXd",
  "key17": "KvHJxyhGXJLKuQZUzWHizYg34irWBmrFqzMAnm5CrbCesta4dRAH2DD43fSNohRFQqfK6r7RpCAtKavdFFAvYwb",
  "key18": "3VjTqVAfghyXPjh9tGaLzfP32WaNngY2ivo1uVMBATf5t4r5KJwPQashhYztxjg751zcNqCZbyvT8gpgEHzfWtKo",
  "key19": "prrvpM8ndeSE8VLMEJwcLFQB41kzatU2gnDf3Vv15ud7saqZitshpAfcwcFLeMF7AxP38uLmeCNhACehsoU3B5D",
  "key20": "3HeNMg6KZ49uGcZ4xGm88nj9Wpv5QM8UrxbJ613tFWFroZkbTvGKEs396oN318rMMRMe92Z22MFKHzSTunDVSoXm",
  "key21": "4RogjLb1dSgr8NnZQbUAv7K8WcLuFF2SwJACLKiGkAB41PsxyuVRUyxdpnRAbkBMCmfayma1QGfDY1ppkekkKcBF",
  "key22": "5oNaWAfxaaNdL5P5vJn418KfFhNQFxH8HsXeFUV4EFnGx6mtLfjGMtWhWu5wuv2RQqtuzwHFz8vzo6pnE25ZehSy",
  "key23": "2Hmbt8mq7A6PXkaTFuPnEXmzFg6c4KfztXaufhgALpx1FZDebc5V7qrnr4KB2yUmXbwJeh3dFibovji4qkfkyw4Y",
  "key24": "5ShGE94PhRu87Q1dXGYguAAZRZbdekrg5s62ZqxA1BGbYh17CvZhGtXGT9oWyNp2bwWSjUgt8cEBGf6oyPx2vsQs",
  "key25": "2DU3sGZNBYTGpAxmFxEPNWceqfDtb61B3PJ4k86shCRkaF6eSkAtkT1kLzuc2i5j1yunbwVgs8xUXQRafy86b8pr",
  "key26": "4uCfs91AwsRfiYx9sGQCaQ6iz51cRSGNpCV4LujNfN4gTq8M2fHdQr3nr8MmGPJdurCc9HfKrivHpu9m3cAX9VCj",
  "key27": "3drNLsRa4RTKNAmrucCApQtRNNcyAfiNtr7Q78bnNNWCviab6BcqssqjNhD6Cm23fiXiVHNHtU8sEeuC8C3D3Sd5",
  "key28": "46L3eQsui7JUrpbmKmsA3kSnFG2k9q6q1gzRyYBBT5WuBtVb8YHPzX5RkTX9jUYo2zsuGw2RQqS9hKJnPgXivg9P",
  "key29": "xXFcy59dWePV4Q3mCo6m7ZPNshVMRxH4r2Jotzugf13S7MAU6G42tXvEA9zbctaAax5zXxhgtW5cPSPxRjTSrVF",
  "key30": "5oag7tQhEyHoDKvFEY72o6gmAL3vbeE2TtCTBnhdgNzTNmTzjx8eXK2Qpcm6eXh6WhSjWTAh81jnxvwC4eetWLfE",
  "key31": "2r6iWodUuHJRCGoeySGZHxwqtiSERHGgMYStcQpPs6HpLLjMDxjDfndM4mHpqmFz4rUw94imRmNxP5TUUqtEbf6E",
  "key32": "5qpibH5f2Ln9hREr3cG739q2VwgX4HFi2K7RFQ6pW8oQ4s4148E2a5x2Akk7jaznKAFEmJ7sHjaeN74xQ7AioSHE",
  "key33": "3UJJ3vzp7LvC8wNer4sZHM8EJdifQKrmeC2Rw6QPp2gKQ8P4CyFMrSHv5AQDaJoAB7pKfb2avhhrcwXy1XRub8mM"
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
