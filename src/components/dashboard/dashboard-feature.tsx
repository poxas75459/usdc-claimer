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
    "6458pkDzxPSu7ahZxZJiFrNKvjFDX6j4fNp8cp85SVfi5iucY8bXoqt9FKDXUngXVskuYv5F5h4xJqNLJ4kbf3DR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56YZB5vCJdFKyGwj1UrhiywCYTEnTii33KQVR96CZuDCYCPxvns3XdbEpB8bkfYiie9E9PzSMA8nV4VNmwU1aU3s",
  "key1": "fKPVznhR82najK4CTpKtsvWS5uM7SRKL1bb38k2uFcLPS8y9zKpXP24CVZGnqdtB6UxKHZ6ZHcTrgpTiYDdqQDL",
  "key2": "mStpAjfb5zBCfVwa9EpMqrxBLSCzvZwSLqWBbLcX1v4nZhdTptcjjy8TjN3c38mBKQ5NE2guinPAA6iWPsQRbSU",
  "key3": "3Mey99eRnZQRjFT2wQD31HS3zCK2uuR3URFzwzyFHGrFBbddgpksFjmNaVUQhPdd5fDo3jQUH1HCi6apMr2SpBXM",
  "key4": "4hmFyXA3E3YGc1ZBNthWFXFS6TJR6ogkuGreKQh2GdsphdDgVfdyDArT9Y1tRi9ckVVLNqpCyyfy2zqSeaYTEZc2",
  "key5": "4BBkonLeHt9tNTxgNjpCAMxQRPhJ94A6akvHyVGKoRUrhSbNDYbTJLdGJDXqUkztZemHdxKMXEcvvJasUeuEo6VW",
  "key6": "4uNWhydMhpYrNCzJYF5fp2nYce1Zk44wfMeb7gxNagKgiQroat7QhyJjfkCiDm7QfV9J5pHvMS9vM4p5pdcVyZis",
  "key7": "4H3vSzDCBDuWqVv8Fj2HgdUCz62xJm3hUAobD8mqGVRLzabe1HKZ3pqsAGmXNeW35mDTt6osVjjzT8XcJeZ3o1T7",
  "key8": "4zGwKBVTDnJyqc5tXUr2GwxUT3WHG87xS6YFvAqJSi4pdxPtKkPketScCUdKqVdhL4r2GKqaHkGQ941Xs2dFvNRt",
  "key9": "5jpZmv8frL7ZJG3zCLXwapMq2b5qVr5NjxqJJodXGdugYiT6r3mcTT4NaWnG8e1LpeRk8RNCwGtkquUKfjyCY7bq",
  "key10": "5N8kzr35kHc132rpJzKzkrfuVKUGTVpvA7bd2D7cgS2e8WxBbrvkKJx7rAaKzgKSWqAmgyvwGZRFjNEtMLbhC6em",
  "key11": "4ju5YaDur68EE6iDS8Wqe7qeRM3REv8uMwyjVG3nUSkEGfnNwseLSULv7KZY2dZgBdqgk2TgwpW5nU4VB4sRLR58",
  "key12": "2LyjoH7Y9eYznF11ADjcPce6pskRoEH4DLDxdV9k3zHMNV45GtiLSeXQEa7QNr4BhTwSbX5y386h673UHVHSLBM2",
  "key13": "3gLLnWm7jx7RgynfQNXhbfDTfjPUERefTzTeDofhKtjgkVFGAwcNn8omLUW2ahaJfoGY2e5npEqPcPa38A8UQYw4",
  "key14": "2fEAbkTaGBZm4P4dZ8UXTBUyKXncq89JYrX47oeesP1eTVGBbkxcJVNFBzvortQ83xXn7NKwkjXfvyzBzYDdnnYp",
  "key15": "36xygTZFKh33XNN6kS2MxhPbikoPic6bFiWw8LgqncKDXZSYqgvv66coJNWZomFdxbsdgi4AeDgtibNK8yh6cFop",
  "key16": "2vyeUkbNWr9cjikAsF8Yp4KyzQ98QRKTVj3G4HTp9JiH2gpENJ1vsnxgxEv2DDgD1SiJ2nuKGd79x8cyxTLHQRNv",
  "key17": "2y2NKT8PSwcAwf8HFEeTw1xZXDiB5sxcctB7qKMwHGN6QTcEF1kfydr5zG7PuNvkq8NiPLWs4BW8DUQkoLkWr2EW",
  "key18": "5Quj3dNZ7uhCZdEmKFV4FgWhhfKJNe552sdAx1nZKHfGBPjccjsPNxuxWD2YLnqzvtRrQph9pYnSgctKxKufczpC",
  "key19": "2gh9fXdoYoh6MCXDHadVS5Dc567CTCZvmK4uDLHh3tJxSXkJpdfVA9Egwh1bQUocHgmCBUaK3635isSB86hxh3jv",
  "key20": "5NZM27jLtmmaqGwqhx6bpmrrenYLBjaaaFqsndmXnk8rbKFENN7v3Ku7rhU6goGbUtzfvMmY2wYGqygDtG1iAtXZ",
  "key21": "2ic1mecjEDu6oBaexTonyrTYDWDFXRYgLb72cihiBBgjk6PuyRRAQkursfSDkwhmt7sHmjzH2brQ4VRyPmgdeMYf",
  "key22": "2tRbaXcsvxRBzciTCfwd2pfErZg1LEQc6WLaFEf9NgbaYQCc75GbwXaaGCygBaB1txsjFV7gExXSR3aFAP7qv5Ab",
  "key23": "EuFL5s9XAtVAHMofTa2RUbNPWUyhGthUh4H7WeiZ8PYZj27mGUgiFTLvFVus7LrW6ZFrt5YgWQRa7zo91NMijy6",
  "key24": "xDLWhM6Bwv8uHeiptVvs4RHTQEQJxgfwC1hd9fv9SgMFNmijh3UQSYhDkWKiAFEEpYEThUQQjDGXSQxs9AtpzeR",
  "key25": "3TfDoT627Ae9ENDPjUuFemq4VjUVERMSv6mDtXrCu4MTqBsLNTnwCQq3d7pGBNedgvuG1Wcm5pUHQVRHtUYJbrnB",
  "key26": "5ePxG2ACEBrtvrGYygNJG6h41smyvMEod8dysVh4RUB7kmn9nQKBh8iLq8K9sXNo3453Z6Vq3sSMtFnkYWiHk5s9",
  "key27": "2db1SiuDZCkMhWuQyr7pQmnH33xCobVwd7cVoXjZppn57a4xUG9XQ4TiSmyRG9utymzFb5twP4hJTQvnxFzS2U31",
  "key28": "2MNabfUf7Y6VMq6tdK8qrwJAqXDHEHszRtFbD6KW18utvMBta43gtEET9rYQpaRrfCoXsNLCCjqD4AGtKj1g47Gm",
  "key29": "5NmFADSK6icZSbm7HNjn1WN9H5NyimxKaUMStpD73YJ3U4vDhWqQQ7KJt9EavhPezTRRBQqKQs2JiW2rrTP7ZX4S",
  "key30": "ytEwrYZxnX9bakpNnqSBTprGiYHL9hr4gLEGhNT23f1VydpfW86QPsqmK2J6JDbFgc9BX2scpUXBd7TYct1PUsm",
  "key31": "57FpX3t4t8phTqqWsQkJCgx6zDR6mzs8oU2ncsG2L6g6GJjmFTeosvNXSZWGPDmY8TYpsS2VmJ7Nj1ZuMTt7XYcX",
  "key32": "3eqiHTn2Y382w1nREszB8mC37hLzRZoFeVGKD1RZBY9UTcZWid7GktNDpq4Y72CvxWTBZLc7yN5uXz2G5Muh1CPx",
  "key33": "4o5QihRdRbbSv2jYkPCHt7cmSrXp3odVRQa3ForkKqhSj5HbeZVGJgq5nva3CmnVqZDx6RovrmoyoYd5GxqCCeyc",
  "key34": "4tLzcB1xzt7c3Yb15wDrDbHVfZb3WPB7U5hYwtTTYeUhhz1RwuNKnATBto6e7XUr7AguEGsiGFKshvhCHMpisXxU",
  "key35": "4a5wuvd8yNMrioMTRMkYJhbLhcKJhrcLRkdbRfkAmifVqKrum7h7NoEe7svpDCPHdtcTprJTCren2Lb5sobeZLmM",
  "key36": "F82JcorGN9uTi41hGXxkpbBuxzw8Leqp1UykJyjBrKG5ZQFrH1uGPciYLp9iHaYHEvbwoaozrco9BZKunQfyG5f",
  "key37": "3nya99mu5qGcKoRcPyUcRExZTdF2JiXXPaFQDNqQ2UpYAbDbypcks1EsF8KjTmCqGLPnst6dKs2NcEASMsHcDduX",
  "key38": "3AwsCxfyC4A5d6XzYJumDeCJcyYud5Zeph8t7BEZiE6Qy3HxxXgBXwCmFP7CKmYm6zJt28eVu98dmYwZVBb6aFtW",
  "key39": "2VtWKHBqLR41uWzNaAYHqShqW61L32MfHuC84pu3uTi9heXbAQCsRi87XnPBvxcGWZGfPambwc9de8NtPCKKCzgw",
  "key40": "3GF2kWwnUm4qKokgtaCirTrf5v1JADBixjy38kd2aCZZbULttoEsuof1zqDPkCW8itwG5QH9y56ZCxRUUdVR9E4r"
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
