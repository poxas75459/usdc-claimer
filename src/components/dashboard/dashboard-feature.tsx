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
    "3GzHF73sEbU2EuH6ga8BHHnErS28HP9ku6qCepUaB4B5gh9Wz83QTAuMCbKbugSp4Z2LonjYsLcsBTacpUU1fr5x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mrmnkAmfHEWE2tFcs8cjwh9MSM3rZTdA4Y8UihrNB7jUjYpGJj7xMgAH4VLipscxwQct5m5DbUmi6qif8hZ857x",
  "key1": "4QxyfwTfRr3ms7g8vp8EE7TLSTLoHBJT9r6U7XLzhon8rUxieGhiHn4eY6gEhoLUShYdKt2WR1ookSvY5YDV1uyx",
  "key2": "27JjETF3UrnuAzjV2KeXonkSKXBYaxsjdFgiLLYBt3YdkrZNvEVg538WAieef8bBgH6j9kWU2kQuTLj9XHrN3W8k",
  "key3": "khXdwAgVSMTJaCxeRL5FHqVTJ3sDcxQHmN78hvhrjoSKRGhviSVEantkyoCz66KSfFSKz9RCJ6AV7RQTL3Hg9CE",
  "key4": "5NEuhjHhC6TGujtsvQjVKXwy2bTG5Q2REX5LUWSiv7qk3hXDpQJQkKCFbtU5jnZ41KV3zhZ7418VDwLN215jbANg",
  "key5": "4EWiWFCntWoggawHNysthkVyBrcovtic5qYbw9XqDtJmw1uh9GGeVPxzd7qXpQvbigWbTcg8AHuaEqDHKY6ik2K1",
  "key6": "4dh8akHi9G1Xejm6Ra84HHjtDeGYh96TRbepsEwoTgNzip1jkQTnieqgywQC8QjEHz9BXGVPJCw45UtdiBKHuJEs",
  "key7": "3dF4BGDRXPTh7Y5chyGYgNDpKehKVUKtNV4Fn8XLNbA821r9bR7RT3ka3brCagDWc22fWjzzYxvKCzKFG2jvfnxn",
  "key8": "5P9Pg3YWLCpiPc3dCgzqL3FQu85XkvCMV5g9pXbmRVuUZhCUkYciqGkF7hDrbWgtoXin3Tic6G3WkZbQshspAA3D",
  "key9": "x3GtomGpzYuL6bfryRs94Zr1inrM8cQez6xVNasG8vh2y5X4naUkSY3u9xTWsYPLfsWFgt1EaMk1SDEt6nAzbY8",
  "key10": "i7h6HAXsnbjT1cDsGDbk36ruDNrkDgjpVwweaykoCDw6YLVHef7a21TAHrjb2LzpGbtHdbCiTR8XwfgtjGqStW9",
  "key11": "5H5Ss1eStoTMDow9GAkA6ugUzzx229e59o8skji3t2gMRaPD1iGTpzfBgBiWC27rcvJV3sxHDroBpsYx62FmavwS",
  "key12": "34tBXQvf3BcMnRU3PhE9Sy3xbsv9dY4SVAeJY6yDqvP3YLfpk86cJvbNH7i3Em91usNv6tou9DmY9uH3A565G68",
  "key13": "5tu2eY1KcKvVfF7qLmZfGWQVZQYdbkYdsWzrZK9HEZaN9C8wJY96tzvnmcn25cRVQLZcadhaZNqhm71DjTrRUcxg",
  "key14": "DCe1ZVPjjpbDiK6vj6aj6WNZHprnj31BNPQ72TqSWWwErZhX8QLvDDK2sQGQZ6imtp8iMQk8cooh5F25PAdPJTa",
  "key15": "3wTScfRgWgRfACVAF7hr3d33KefxnfT6XCtLwC3DDQDPZWWMsAacrpq1Qb24ANmHZcR6jzzb2Yoqq2QJDQtBgeaq",
  "key16": "3o2Wto36y6iaMVZ3kkWhANYraGRod1VEWw4hS3X9k1Y2GwT33vsTpRKQT4GTXiPbVwoWwPth41b4rb6GYAX2PnM7",
  "key17": "4Hnv8ZzsfvAPipFZKygnyi2qqotLPMK4mqPmRit4MV1VVyhgybRU29sYE8oQLqjYrwtZXsHXtNZBScNe296RpH7a",
  "key18": "3V7wDVerv5F2Do5dbsSkncKqxDqXVFVeJhJP4BqmjsyqkPTsZa17K5rzD5YKuchV3XeCbMRpKMw8kcw2cqwZ48AS",
  "key19": "4yJfnNhXAwR8CKQq8oPM4yQni6uRV2hg1tvs2o41NzgcnExVCgGCCB5aP3gdy2Xcu7cuJ33TX9Y6Ctz4MiUDhMPE",
  "key20": "e8iyDQLRRiKX1hznSvPV2uu9yG8FrPkfY9W7R3AjiHMnKJQCTV6wA6imi5fG2gxkgcAsX42cVmBojEGDst3n1Kz",
  "key21": "5MyUZGoHo7fFGWhePhq45fPwU4iyGECw1qCW7Fs4oWwzoAjd3ruHAzJD5FTAmyLCTkUbbgKMvqWPPvLjZSTWowGv",
  "key22": "52YiGDS3sZ7QitMcfKJobRX9mVQrxGxFBcxqSMzHqaCiAPP6x7LcNMJQq2oVCLh9QfZo4sMJMxDhazxNy4as3yKs",
  "key23": "798J9fVg9epxNzSjpx8XPtwqSEedhN6x3g2je1xt9m4tp4GTHXFDhzp3Hnxj836qWdx2T4BMSugndWpramnky55",
  "key24": "5eNk54XMWJgt4EKowAgjWncuxSfo3Db7Mj7ZN6SLUq41Ue6BsfuqLsn4qub5AUvCJSNz15UbuZdrEBSsQFHcp63m",
  "key25": "4dqDLp2ew53De3Cuo2SvukLjrU4kUQS3QKmYPDzQDYgS3V5uQmCxziAvnn2YVYjtNAJx86tRSVorZKc466kWFSyb",
  "key26": "2QcSYvD8emtJJxhJWEi41XaG1ppkrFMPGwwV7UdZk5iLnHFWTfZpmAfR7fbfShNErroXoz3MpUUAShKDaCbftkn6",
  "key27": "4qMFgYvX1VGt7wmYhEyJH8PLQ7G1qhfqVhQhjxCLF4c3ekJj8i3K8Q5DwxB64ATi31eLbiVqr4i8zMj6sgyKbj7R",
  "key28": "32WYngCSMtG6gkuingVmbs3pcRWeW9qsdtTAxwkQU5SCJa4PfCdqZk58U6nb2oZm9nPWv3n3nhohB1c5T3dqk33e",
  "key29": "6338ubzUQoycfcuD1mMnH1W8fFetJk8h5HcJFtbEZjcNwgerhmyeysfACFNdwWN1hxqutuiZooUoGGcZgaQvPbnM",
  "key30": "48G6UpWL4qW2wNYH422EaeAwcWKQbk9hhRpCaZFCHwSFFuQgWcTgdksQjcEWCjXua9j9PXUMyZ5M1WmEqa7BN6jm",
  "key31": "6tKeaTdRqL3ZYWnJcnpSFt4czmah7TfkdFZSjDpqvQCdtQ4KzE5cvqthCMc3ELshHrrN5TPiW3H9m7KUPf9eSLd",
  "key32": "4hvFsELzcaDmB81nvtHYZp3D7VGvgKaAyCBaZZnLMhcKjE7BYW5ykxoM5GfYjaEHfMrrLUB52ZufToTdK5f1QC6K",
  "key33": "SUJasUv4amxPYfKMNysQ1z2ef7ZXZboRFPVRSN6gWF2WnB46JzGwsQakhs5aP5WmXMiDMULQmreteg2W5XopdWX",
  "key34": "5CDZeZieWRsWJPikEBi5AWJFKGNFdvuJPTTBHQBWW7LMdQt2oGUNCM95zA562FfSBGxeXoQazb7gWeuoDXwoNFDy",
  "key35": "4nivYUbWYXfS2eReRx6bFGfBtU1Aq3F6crxzyDx3YZ88cAPcot3eC1YPQXPu1EQPUhA9H3tvJx9qozcmdWKNPR77",
  "key36": "3EnZoKv3q5xcCUYfhwYcyZDaNAVRARPr5J7Qf85grLszrWDcNEfh7LrRNguzrbTXAT3Tv11GX8cQXN4kFjMrrjgu",
  "key37": "5B1fzjPHyBVvYpStuk93VtCBqUV57tJmZhHQB7tMM9tmu4CtgRX3txvQ7qyoKQU2usCuCvGzEZmfuBrvPcy3ZnAc",
  "key38": "2pWBpfk8eAB2NHfwihddn4QLC4q3teFBkMGttYfs15k7SheaQXUxNjf9nQWb3V5U2srYKcTUBp8Mm3V7yC6UGroQ",
  "key39": "48B1RvdS2Vi6dqoiVxqKigVH9aspfNtEjiKC4CnXPo5KknTw8ftXo6tDBM6td4EWShitGonnsZEeu3GecXiXkqxh",
  "key40": "2ZXMJjYERujwMZonTWS3qFsCMaDxKugu7Ly517XEcQxX79ovAwszQp7FfgRR8DqYtxkBznnKyu2qftGzFC6g9DYr",
  "key41": "3U7beWdEb5x5pYb2ENPQ9LwM1o15aX3wraMnVpCHnm5cgg4FKS8uNsy5A9spuEaRGmDg9RWD8rHd9ArV4yCQd9Lz",
  "key42": "2MEW8rPcJhfgU8WVfNXo4E92AFwU6QpkHv18StqgjRUBV6kEVXU5ArHrJv1sNHqicgFqwaF8msoVv8BGCU6prFcD",
  "key43": "53tzsH2FehDc5W72gf36axGoWMexKRDHBPrkUozCgQ7KG6aTJ6yfgcTzeoYrwE8Qu9CYf6Heb5bVwrPXb3SZQEQz",
  "key44": "woz2ARuJqojJUZERQcAmqfFpz4VivRbS5QhxaZWrEW6fT4EfDHyUMNsft2tUnHtmr6hcF3YEbE81ErkA8UtFttm",
  "key45": "DAbtTVJELSbwt9SA9jy8P3R6s9SteZUUXGn47X7a95d5jxtw6wsxVSbrWZyKXN8PZmagZ9zmpnwhhTyfJLFv6T8",
  "key46": "2RgxAxFkbdi967Z3YRsXWLAdh9F41y9Tw5QjWkMKtXwbiAaP6AuCrJPi7eTzMUCTyN3cAbLbukTYA3TRPQHDDjGD"
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
