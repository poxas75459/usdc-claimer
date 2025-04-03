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
    "3ekzFx8fcxRvtJuyZuQpwub21nKkkxmfJu5dtiwyQmjBoNu8j52d1MrgvNLkiWxKhNG1TTzC949ppn9HY3xJj8dC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "451jF6CZjFpDaXpq527cnX4zZARMrSRsJpLSZFMKTaU1huXe91FH16mnoSgVrAdNhdeeAtfgmTY7a2bQvybmMKrk",
  "key1": "5Qz4LqQbc7YQnFKSFAGRP73PN5enRB36fSRw5wBxfkYQpCUoEaQqbefrsAVK1h6BVvDhk6dzJB6ThcAWgoLQe3eU",
  "key2": "2KkPvt43efmRg1mgorj2yiapiPFaLh3x4Ae4UB1XjuJVBBMQDLyTDfHs9XftQC4VgMRghFAmmbeNZr4M8sMoGdEK",
  "key3": "4ANt7EQyTJv5QkJjghmmwnDddaYDH6MmHQe63p84jBpeEDE1LjQksyf5Wu2z3EwuRbNtVHXN9F5Y937rxxSbPStA",
  "key4": "5h77CeTUzsxBETpKpA5Ev1rwLBthtwDxWh61KrvFdd7oRGRVkikEja31bQBHranVBx5Mgr63YB5hrNJyhra1uk6b",
  "key5": "2kiQtTP5XrKtWYKBpeYw2eGZMHeN1ozpYTAFiVfBGyVbvvfVgqGtwjDVYVbMfX4ZCgNqGNLvk4wdVRvHqkfhBWYY",
  "key6": "9xdr5j4xgc2Y6i434hFvKQU7u4eZnJsqueJYHt3NBtosJAxtit9byCBWbLQqPLVZiXXCZb83vDHQVuz9j1AkY7t",
  "key7": "5w4Ha3fjDPZQHKjvHf3eTo4yzsmdkrTDwFjJ7ANk5xCj8yDe1a5xmimQdWHxXuDqsLh3EW9HY8vhUJog4L6zmT24",
  "key8": "2r32ccRSuGRjML6HhVDb6xKrrNyR2KcFBr5xHdfrj21yn3RtkVBLTtPH52yqj1w9vGKwfQzJ5mWfA2ZqPm8gjKn1",
  "key9": "4PhsrUxtz1EDqXaaaLH9dH5x8M3GPqMyWHZzm7A4TxzmCEgMiNeXZ9UcDveurLrRFpXtkqhmy357TQ8wd9oWvaVt",
  "key10": "3hEjyuMHTTMMQcwPryro3a3oXkckSG5wZvLoGMEWZVEuk1112meEfa4HVtp784h5XbbyWWAEcXiXNPmK9kkvwG73",
  "key11": "4373xcR6mwmnvGFDJy2bTfNxhjoK12oVPypxtYZQs9KmvYSZ5sSoZLnFMosxsTPK1WufFWZiuG7R4Uokfs3y6C2z",
  "key12": "4iFUpeHnaT1XfoszxNLP9we3xtgeKbHw6jYVPGv29DykJEHvNVWzc42mUCt49RSZhejuDwTJzC7jh1YbAFJ7hdE4",
  "key13": "398vuSNFZAZ5Ueq5weZ9p9DEZFGsfa2bTvZwPpmiUeoykjFibLLG5uGD3cgkXP1cRUEHh6gvr2DRH6pEfvgoxFhc",
  "key14": "4Rq7ivL6ALSs6LrwwezRYDvif4y6ptbW9mAbyhp6QFjWDV7koX8ozs3QyqeJHy2McPbsGnkKDcwuSEZhAZ9MEuwx",
  "key15": "28gMWdMhqmHMk8Z5AkWWR7WKKtSv8rbEaBsbrCwWmKG4GX8dar8BdwQwSnKJSTns7Wz2J3TnozyDXE9TkX45MQPs",
  "key16": "54m1yWwS3ALUwHhMgdwYkRDT6j4uQBRwgw6Pne2YKvsRNCF68WK4iMkvVMXZzkiF8Zb8jgk8ppDqRWMvtxEmbLS5",
  "key17": "32YYEFQeEYHSxw6pWcTDsanCUXnpRVsiN8ndqKDmF1buSc33cPm7UYvDBCsZa7NcY2zVyrpNgY8Mmxwe4LeASqmg",
  "key18": "5AhibuXVPXdRXtCMDnfxJk9wqfec6cRaDrP5nhW7ZPqsxXGZTkhg1MtpQ6nSckqZUveF28eqSuZDktLYNVtRVhJ8",
  "key19": "37VPrJM1kDYFz9saFgqwVthS8HbmfFhokQvxS8hFFZorJRqQf2gt1QENCmtSZL5E2cTgjaUp1fwkGB5e5TU1yZhj",
  "key20": "667EReU65nC9WcQCZh6ETNz5L2nfu9Nbx4ek7SyJvEhWWDq5PwxSyssixEYruLbc5ep97ukHfQXSG7fkp6j3HWAG",
  "key21": "2xBZrV8WAVxWBQKYj5kF5MEx6Y1TZwhe5Fe3vDV93MEaLTwabuhUTHLHSLmYPXkgiHHFuoUJWmKUaySndvNpzwmh",
  "key22": "4f3mTDtz3C2GQqBNkQQiw9AjYeFtXZ9GqCWUEM4cRuxWDAiZEPpPTNdWJTqEUFp9pjLUJTtnzd34uu38wtgnmuWF",
  "key23": "4m6dtdUtHkaQbtcRVbnFgmFzC8TGpqU84JvwvY3aThNhi3gLk84NHqsjLr7b9SVtx9WX1YnDqmgmYkHUQqMv2iZw",
  "key24": "4dS1GtmJ5yiYYcoa8jwZ5z13WwDqC9PuFfgBtJHncxNS25VjpcvB1MxE1UqU3dNvxbLoKaRHfn76fCktciDLyirk",
  "key25": "4oTVH2p3jn5UVs3Gzu9GqiEjXxVQxwfUzBxjmMHes1Zu9TVknC2WaMrtr6TA96c5nraFLKmzJY81dTc5ht1PvKNW",
  "key26": "4mqCDsN1M8cKbSrzaE766NdQdpLjTqGoRCpTfCRZbnp9JuUGb5wqzzPFMQ2pBs2S75NGPstnkV47xXpd8fF8KWKw",
  "key27": "5TpdPGpFi5m83RwRuXKs1GKeBMv63iht3dqPDti5UwYeDghDXQgTvvXZuqr8KsnEsdtN3joA45sDSUdd2wGpEVds",
  "key28": "fZwrhrirfWzWHaDt6R4x53WeD7eZ6LjWKtL9ip79FFgizzFP6msNN7He1HMjSthdvXb21aeQxJo1h8y1US2HQ9V",
  "key29": "SE2moH49XUUPAu1fT4v6M8A6bVrtu7o3bmRVCjnyt7KsXXL38s1Q2xqnw1HmXga8HPwA5qXsGjkLPAPk9iYK4bL",
  "key30": "4e7ReXM5GkSLBZuxdnhbiZvN6mD5PRptgT8oHJ4jQVVX5LWQZUpNXRzMEAqPt8m1rJ48Z8tMwSi86BCydnFrs5Cj",
  "key31": "48troqX1mLoKeu1hphV8BinnWN7KzCSr3H5vKCutjvauDk2VbCEep23BgZzNLLMKUXHxSouSJminkT4o2Rq7bhQZ",
  "key32": "8mJNW9GK6ba3UkRsfwZrTJbLfNuTfuvrHEq5acmEhaectRGBFCvpyHYCmTnu7nVASPiVncsRbAe5LoGy2QnsWyE",
  "key33": "2FZbcombFtgdF5SsJ5fndWT6zxxs5xBeRQBQpAiFXYkgfMm7WYJxu5J3NWeaEZsz3MorrTGGg5Kaw48hp375kE6q",
  "key34": "3q9WdHuffQd5BBXDZeiYyKYcAQphTiV62kpetZAxzGZJnzr3ksXLVXG4fGrxZ3nYAY8eUHSrXfNaEJvk2fc7i3KW",
  "key35": "3EZft7Q1ZGfYpHZNP1UNPPj41zmSMD4cAURNKPj2YQ9NjYY6uJPXNKKGDkNNbsaZY6G6RwPSN15HUEjNwn6nGFm5",
  "key36": "4gJ4gyALdpDeWymsNy1UuG64hymbcVK4bJLFao8vRQxnJAG81SLRikveuGAfUNVRxaWtJVHmzGBa8qDtnXXvuihb",
  "key37": "5NCWZma3DsqnJsRigDvs3QDEWnXkFBJpMFSjWs6Hvwh8fxHu2BpFx69zZAeGugFAZhW52Z92McQZwz4HiqMzx85r",
  "key38": "2ehw2wevWe5KfnPuHMfZJmB31F81m5AznMKULAqHaPt4TJ7CMK8A4H1U1qG5Eq5ANguh6gGUdzSxM9wJCersbFw3",
  "key39": "5r5TMm7oiuqfGRabUKN7vJKyafwJbx4SXW5T9ugXQtkpHAUmUFYXWkmAYAdnvVmRDf86Gho1NPA25EYpCkyagxs6",
  "key40": "2HN9BnmddmQ99YSn5Q1CHYZyXNDPu74hC6ff4fL99zcxY5n7xPtKaQqddj6Qr5hVF9UoCZ5rKyPiFd1obrxKKhVq",
  "key41": "2ZYspjXwaUxTcpWaNFNyD5rtPjt2b1nDFMmAWi2AHTgQdBbiHEFm87dMHZHw6gQwKsG3ZUNkrnNjcCNmCka4VBwN",
  "key42": "upXwko87mcE8Js1gqSftRngt3hFvsQnhiDHxz88JVhMDhX4cbUCv75ajtyhQunbjNq9zcgZ9BhUKtYjTzJyyoh3",
  "key43": "5MJa3ULukUgkQc2UHCx5sgwvAdSkSohhzCJ2dW8djRWxRwRAUbyhtiWZWH459JcN4UVgCnG8pFbvDCimRB1fqNGU",
  "key44": "277DrqUBnLm5YRfaaS3MCgQgJNG7d7jtLcLCLaKFAnmHNd1BQD3n6XvJKDVyoEfwn64qNtWqhpCxC9Hm7mWSjX6m"
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
