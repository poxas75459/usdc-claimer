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
    "3WH94U8LZBmREh1o9WPKj51Jbc1TEYan8dNjhKWkdgLwuHP4PTW1p351hbd17aEEaQLkXX4T1zsg69DWBpwEFQyY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QE25LocxseoRMTgUD6HP3TykYsxKXjqLQgENcSJi6MBKHGatkdTk1w2e4XC83hwSQcNXzSj3V4c2CJX7VoLVKTU",
  "key1": "2bBBE7itUGd4oB7K5Yta6GoWinbnfHMz2jNjxRMpSa14tQiRA8szya2JYaYnWoQ3odj7Bbhmu6QpJUCPqfnr1Bzm",
  "key2": "28wA26Me3H46r6XxEsu4yhYSYw1dByz74kC6FVKACoNRaipg4qCLwGa8VKLSd1whNMyWDVJUSLjCtp4n4p6Z2nTw",
  "key3": "2B7KCR1pVZqoRvrni8bNX6kMTdM4MqhHezEdV5wp7BMx1eZFsQk6sEyFvksUwuhmtkfyMgrPHpV7kcywEdkwpzh8",
  "key4": "368YnzapVvZx7MpYn3twjRGMeQFHogc6MfZmH3xZvm4Hot1irC68seUV6S2n98wqZcNRc1PokT4S3xRSDopVC6UK",
  "key5": "3UNYf42gi6Eh2BCornevmqRU25dEzaLJiQVmEsJbzbV9TRfSDzXcBPweevW6FgpP7tvWZz5LsGNRkBfuHGHnE9JB",
  "key6": "5bLGfkpDpuCDVb2peN1SwcsWihSrXNxkbpAK4CpAeG7U9gHukBYHata8c6Gm9CJkjYtfyDgUkQe63qcHwyDwjs8k",
  "key7": "5hW8e3B54YWSE12JR7u4ETTX4KRQh94Pkde2Jo7v4iPGLXpCNBstgZyFBRkL3VWquiaqKnHxMBQV1kivpva2GkTo",
  "key8": "3AdyKHjG81K13ADuB9WSvCAPBhyKihFDMfnSvCp7NddDBZE6Tq5uCwztasucDgyLy5yRmwZgtoKfR9YR9KAvKV2V",
  "key9": "4g4nXoUP4Xfv93f2Vbkc3ATV91gbfw4qAD7zjKLcAtvwzAeP7NRv9rB3uA9Npoy3ug35nhuAr9uFUCZfxPR2bkWS",
  "key10": "62ZShAwU2AiDH616J39jowNnaWRKmNMFdotr6JYJvHjJ1TfBQ5bj3gLXFgLDXp5QCzPwppdkWJhy5F6rT2r2n5Wj",
  "key11": "5qtdYezi5AjDLBjEwPvDZNUqeswF7wn3N8spBWAqqnxNDLt3SH5GxAhnDm1fC5VEmHd5iwhEaKY5YMsaHvCpLb5r",
  "key12": "fBg7KcV52J6X5SrJSshNzFLTddmXxSTkKUzc5WkYoRuipEWARZm3frVHHN3Dq7K8piaUq94cdZcZM5xwQELEKqE",
  "key13": "3BJF5fQUDipsvP1pKUEB3aCw1avNL78ZXbjxU7RpBExWp6HQK8kwEYW12tQE9G6YfD1Nz6kcinxtFJopuzur3c2C",
  "key14": "wCRTwiztYXsVqjWFeW9RqT3YMmDXr9pe2YeCtsRVt3DG822dYE17s9MAuKYMyBCtLJRZZR3FJkGffZLWk89TdEy",
  "key15": "3ut8ymLH3fwS3AqmBmaMdvcaA9bX4PvWrkbobQfbVysVwGUqtidk6UoHfjQJrvjGFHoLhNnvmwyNtUNgnzrA7hkp",
  "key16": "2ey6ZqNZ8MpeRebi7JvZbAFWeuPoy9EFBeNYEBQ4eiKKQKeVQxBAe7dWXq1kSwvhcyjruMtev6pXD696RUUAnmaK",
  "key17": "4ms8UzpdHUsbar2wKiDf2xVJqtKgZAB5nx8VH6Fbrg8ra5xpAEaWn1BaK3B8mfyeMkaj5EfKHQcrDpr7duNvAgn3",
  "key18": "5q1Cf7HUnsPo4iGVtxM38hdBy7BfBgtMMsPsVEuVfmSvHi1EtRuCzcWjubLG6BknB94Ezv88yPPUQeVZdbP37j2D",
  "key19": "3Nh6DsnPhHKA3jmythf5P9s4hzebrv3cWkRgCKjqsPDzjq3SskpEecbvbtCqbtGDvkX1a9t1LqfjdZPan1hgK9tL",
  "key20": "wwx4KdEwHJ1vq3rxwDqXgyctd1B5BBDRU6D7HgopSENeZNNfMUsivZZF7n57cuhwcLnZuFNsEYhzPRRGWYRg4fP",
  "key21": "5WYjqtsXSW48hH5qp9HFZCPQEN23tznAJSfxyansSyxczxyj14AThaZXwGpvtBwhcgZYdisYj6Sr2tdKgbzFXRuq",
  "key22": "367EDYTNGbfsuJYxwK6kEhmkjYMYesU3uoDPzS5TxRbftG6QRq9P81BTK8r9WwLUmEcTLc1A1iHHAryeh8mbXdCa",
  "key23": "T9HymgBcLtKi4ytfgerpxeKaRYpKUmoJzbzKiUS4McQqytY2eGeuUSz5CLFt7jigbt4xU4UfqYa7mCvwwQE86Cg",
  "key24": "2xkxsE2HdP28Nbcs6GNCGLh6ZYQ13bco1qkA1JCyPpU4n4R1QmaZv1PYttwvwMwGpXqfTMyXSHYgFd3vSgJCzQVQ",
  "key25": "qVVTf7cCN2bHPWCUTWWgqTgbRzQuVLcX96iQdvhdz9UPCPuD7knj4b1YAwBQ6g5jJefzncb1Q9Ay8ka2fMG1bEo",
  "key26": "5PuyjTqgNpjns2nE5Qasg7H34FtMbtnytgRwz4FW3PZ5p4xnS1aCudhDFkaqMeMaFd6WzepRxZmQYND3TZ41HqiM",
  "key27": "3s9WSPqRY7PQyPpjeCMQpu8uPM38wsKWHDRBKTtGSP2UUcCgxeizBt3YyhcJgo2G9nvS4tcuC3am1DsgzREL4rd4",
  "key28": "5U4ctfHuakmVFELnyt3Jxzz4txzZKC8WmMHPPvqxEaR19gLKrSDg9qmpdvRmrDMm2JYjkdvABKuqvWstshNuDgoT",
  "key29": "44orekSRSzGFTwzBQzYv7B5tVJMo23HAWygy4MkeQETxYxo9V1tHCkm4cZ9qWgtChCNVeA7ze1CveM4quHXZjB6f",
  "key30": "4TgkXEf3CVr1t5gkRLKQVyd9qJUH3dudqa9TpgNWoQiFmuGVt4yJSR6Bh3gcF9WM3W7qvpREtCWNrRcTQtVdaMMC",
  "key31": "LnLy5UBRPiooRyY7w32BqZNXLAde9XjEGbU1xTp4B6qCnLqMB49Qj6dzbcW56XUMFywKpi8TMfhZ98j7pHVbnDz",
  "key32": "2enmqHvafqysuWbDo2uBkryZLqeJ9dwT78nK93quLBf85eZ6J5ygViFp7Md7T6C6pccz6xjmgByoikWMr6zvV7vA",
  "key33": "58d6rpyY6WxEdBcSwyoyTdaM5DK867K4eAKhePUM7yetVF3h8j3RsRcKygx3QNAzzPemZJ754N4AGbiH4P6Vd5ww",
  "key34": "2bPNyS133uKWtfwmc4XXkA97DYN5Yxf5fUW65mUKS4DKRNPiJK59vj19Nc6yNpwqmRfpyheVJRkHs1vH1uydUsmi",
  "key35": "2YXvF2q7WuY8uiczuJpwtCoF7swAbS7CJnhzz73xXMrUeyTLCTr2zdv3ZeTcYcANskxaiNfVL1iiZcm2vJSh7EGs",
  "key36": "5WAfaJV4rf4YUWuXEuBsr2pLqn9cGhRJry7zbKPpThLZa7iEjjkQTpwdBBufsfP3fbieUhGQ7g2YpzCwbapRm2CE",
  "key37": "3PAsTKB4kRnEfBM5zBG7Y8ZKiZQseGfY23mZvSccR3yLnA1vkmAPTY6jcdT59HoHqqAKrh1hEdewDWxBo1vpZ2hm",
  "key38": "4HBRvsT2MpaEhkcW467CwbsT8Xk1if9rLf4MWJhST7it8T3hSq19pBj1XhYnebs4RhG5U2ksijV7gwswcp7dt2kQ",
  "key39": "2psYsvbpSMyzaNbmrvU9yDHuzay5kSGQ7hbHJCPwqR2qPw82eXxSVBBTHzHsUWPdnwCQHcaRcQDZFJdc9hb43D4b",
  "key40": "3B9wZZNWrm6xyxbeeiGL8FLxDJUgaiLD3iQhkuQ2shYxgamHBXTm45A9TmrU2yAuiQVWgHrqxiFVRQT8KFu5k1cw",
  "key41": "2awCnDLuce6tSJeLd9BFiJo53qvGkupuvfsaGmQWLq2BNV1gLTRgv2B6FsLSXsEedm7kHjbYsZktfyEA46yrU4Bu"
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
