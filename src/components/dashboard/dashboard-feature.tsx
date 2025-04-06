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
    "3xNV4665nSBMufqmZ7ayvvccFqtn8Jqgttvj8X29kUnmcXRH1xpQjgtsCQNxBaf1qzBRXNMg1Qo9gWVLY68U8np4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39HcgWrqQU7KNfiDbxsyUnwMRD4f7kHWBepz3dcjNpm4FNdPUtmAEaQntjgNHAx48MwSn7Fwu1SffiWyeWStNESo",
  "key1": "366E3VnmWqdtAvq6hEnua3ayu18Dqg75dJF1nPN6MHhUPqmZszpXc1XReR3wX9UQYtdBhSDC8Y2jHzmWu54hwhzQ",
  "key2": "5ENouPPCKrVZBreknXZW7Xo17xYvBuoSyuRHfaF87MqJmeFVzouEXZwHR8zKebMZRPZpxRorPeJwqadVwLwofMRR",
  "key3": "66avWZYFbaxq53A7eFiLW2CwBWrmBGxvmCtSyt1mxNgja3nFHvnMNrZRLcBPgVzfed5aC8Q7gydWjQyW6G2rCDxF",
  "key4": "EMLxE1K3tXtn7cip7B4V1fEMe7b7T49Y5GtSdvBF2giXC8uxxpZ3PbDtJkAf9wzuWF7N7KvqiNXEGBLFCYWfHu1",
  "key5": "3cTzGuNVVWrG3BqHNkk5MmQiQcexCnZXUfxdnjo6xCpnbqutqUu4uczGparcES2TzDHN4iGJ8RHYFjKcHPmH9w4a",
  "key6": "2DTevM5A4mNV3jmo48WE1n8UXgAKwLqfHefjaNYfn54p6NWsUNqUiuVKUkvfg7v7c5K3DJhrNib3rW21NohY24Xm",
  "key7": "467G8biW2VoReiD884384j1JQsZk8bX3rzWHj7j5NjcG5uAxvaJa4zbuTnuZ8dxDcQLYXQzmuKn2nWdhdMBvtDTk",
  "key8": "3sBb3ZLC4hDVSipv3q2uv4QUkdcC2WhMwDJZvrksWMghG529T6bxj9zZsKcMSjynJ1HDwumxqt2XokK3YEUhQ5Z",
  "key9": "2dJNmKtfPh2FGSp7GtAgdzD61vBFrBziZef5qfkpE6igQ95hT4PvqMPf5xbXdVx3Tae4cVZeYB1Uq5v8tBpXLFcP",
  "key10": "5Mdfr6QatEiUocw8WZqPLVH18U1xPJrfd6LKR4pvQTeCNunhEqUeBRqSNTWpthgSHedb32uvmjoXq1hXWTxpYT7K",
  "key11": "4tCwEMism6UmVQDFNrJMXFhQjUeSVA4HeWahNLzviuBxb12Y44fQ74ogFeHePyyQVu7TGDgaRZiLHmEwcH6LEcRS",
  "key12": "3drR2rDPhH1V1ahGs2jj8TLc9WM7mKTT9pb7s51hStq7ULdJXy97AdAQtH5DGD6CEaviUdrVJx7DeN9u2ACDf3EP",
  "key13": "5Q7sArBrpupA4W8KBUsquHq54Gn7xetwTnpFhXvEfx5R99b6j3TNWS5NbYKjxrhodM4rZeQAMCu6YYELrZEBUoYc",
  "key14": "5gBNed5nAjgQxhkXf4ukE42g7egZhiPfPGbC7EeZjHt4SYWtc9gdz5nsAdxN3RRy5c3QVGPaddovM7r9tzdxhUPY",
  "key15": "62HrfMemNbovmt6v6QvgpoeG9fXTgujMrY4YWUk7XYTwSkinDxyk8eSxkgXg8ZmK9aXHH3iRidJpvy9PezWAnFfN",
  "key16": "67FyxzYpHyb41vLUdSwri3GiUdLsEDZtdwbTRN5sCJfPccRGtE3LCS286H7HEcT5ssaj8WLYGAgJYjZYKutizzBB",
  "key17": "Rfg1Hv199pP5D7Hq9Gv4TdwWiXpvCtmdppCzXzMvhmd1fGFHAnLUbyUzACLwr2pZF8HVxn1emG8N1tGhWjei5Gt",
  "key18": "UefoSxuRHqpWSRehqV9RaVTL11dqj4pf3c75X1gHasZAYYzDpSrdiHN6JpD2Ka2oHz34wx58wunevbrr1XfmyDS",
  "key19": "kQsSvuSgQzGt7jD8HCZz9d32NWKgSVgaQ8ZyursKuArTJDy6VpRR1qsxcif5YXw3B4C8opcu77QYhZCX3mPAuT2",
  "key20": "26yvL1BRz4rKH9MEi2YWcDGLnUqu7aGzkrZ2snLkQVdYYH8PnuXbDioGqpMGv6saLLf1aVnH567oGigQLp8kyYve",
  "key21": "5Cz3kHxkdzBr75ndh5DLXABycLc8hy5Le2V8Pb1zR9CNSUNu4qrjV7RrWLYC3EKghVtwu1fjkgo7EjueHgFAYdhc",
  "key22": "3jxUqKjndjY8ysCKCoVaLkN8po7Uj1i3fzzbx33fqXSzwdKJucGi9XCjxGsxQHxUwfBrffc1puZsxGTnB3N24UJw",
  "key23": "3dUXV7HVe9X6esKMAwtrozp1QFAVcWht4mkUvV8bQqV2ABCboAzTQWg3SCC9RtwsFR8yhVKfguWGReRAv7GrtNbj",
  "key24": "5sLfttWi8PPfGPdy3pm3rJRUQJdpT3n5dvoXQnCzfKnKha71pqmgTN7nRD9R8CgRJsBAWhEizdPmqdqbyvJUpuUJ",
  "key25": "4uUApHDgjQd5d96nufgdcj4GwXB75qfsnzWc8t3jiBS7wgch9wFQ9WhXWBqEqGcxx7QL3H8qN8DV15CMLQQxs5dB",
  "key26": "4unwCVRo1yhoYRWkRWtfEnEE6nmYEq8dCehJAVaAsfdw5XWRSF778vPgntm6rZNP1KVkhaFv2Ttk2W9vPsPA2Qzn",
  "key27": "4GTiFQd6Vzxo1pk3hRFb9pUjqcULdw8cCLVS9TnDUQSroJyowJfRb4aHYMq7nSthoBJa1DBzgh6HoFRC8NusUeNv",
  "key28": "62rbLCLGpHDujfx5Pf4w66FUgEH3KfhzrVxUw8Dwo1Ln1MaFfagkr9VYipREkU1MEpvdDAMFtLn9WZAkXVgTRf1v",
  "key29": "NTT4hbvWd43wHAVU6PtkF9FgxjtfdnRXKkrSg8SHNSwA9BftJAGK9Vy297FzvzWqQXcaqWrPmM5Ysdzi4VeHS4N",
  "key30": "hQnoLiBvuCTHg4SzQgzQmBKQ3zzKVvpYfg3B6q8XBX8sKWFHQ4m92Xqg19Qc9K5skmCgs48WKDTi9wAiBR6wxvt",
  "key31": "4GXVd6XfRXFpZNnYQRGWgc58XnMKcor5h4AQosBikGSmgADSo2CuURiqGatdnVcKhP9f3LwZS2DAchKgRPRoM26d",
  "key32": "4ZZC79gCYSkLBEoW5yNsqY66pqagpwypEkEJgPLgXz8EodqQuu93rW1VgnyVMWagB6hVpgbxQjY2yS7mR7EZjVLy",
  "key33": "kt3cWNw4ztd1G2czRvtw7AJV7NQqBoR2pjEKK9E5BuENHMy1UR3jxGo1ZCkivZms2Ms2hWqTri1Cr7WWmcpWwgR",
  "key34": "4tMQiDgTGfPqiLuAAyQHniKj1BCXuTKGmuefqBTDn5Bn58pVUTnhz7Y6AWEySxMy9VMv1MvfstfWkWgevTK5LdM4",
  "key35": "U1xmjfZ1SxP9yGw8JwZ1hrtwY6JdLTf9msXsTb9rmARCuLawyhcsWsQ7deycb45hLh8UurTXzrMM3FPzSs4xG6t",
  "key36": "3oX9TYpAWQv3RB1DWFqWHkpERXn3pH3LP2nmKJmWfDebDb5WPtbsVCpJoqogs1Vof5irBuXZjovqcfzLDDXYsfqW",
  "key37": "2UXBa8T6gUvzR1y3JYGC9wR6S7MWftsH9DiJR8tskRrKAgTLw52Ye4e41dXS5VWVD58uorjcCnCQrahFJ488rGn8",
  "key38": "2vzPa1bLWBqJphDZmJnvRosg2WiN6rhMY18bRbAtc2YWBD8XmeTQnVq53gNXs1GBQzNRi3uYuAbDEUi7eVuWUefE",
  "key39": "Toar9C5SmtbWPDJnQ2tb9wXUwMMYnhnvhr82466AiTWpu9bggmTzkJY45YfUzhpArwQEVRn7WEGehdLFUCe7cJP",
  "key40": "3qxm92q8wKCGc2wtq7ayVMJWmA1e32DFxo7VK6TDs4Pguo58VK4bSrc6dbEZajQ38ph5NxraUdqPyWorxAZo9zKF",
  "key41": "5t5owZCYVgeeFvURfJuiYsHhtgC7C4ukzY4PiHcubB5sNfkogWX8Po9i1F5N2t5zJb8U6LMEzkvxMpAuUqijMUTY",
  "key42": "3Kc1LdVUUBR1N7jBmfWhiiMBnYxpVa19t3eeNRUMTVpnwFcUBmY9B9u4FHYtBSA688fV2raMEjnPvVwuMoGatUrS",
  "key43": "3MjGjhW9wc1epiui36bshwSwCQHtYmcBPjMQ3Vx14DEzuCAo4C5sZPGWTu5J5YiQZ4DRxEzndv6ZFajUjvKJLSQD",
  "key44": "53BaffbvhCWANHf8K7URXiTRaYvSvaAddXQYLgi7qbdWv76U2bKUwpMZuajaHskD573D2iaNPR8eyXkMVQZfFUXT",
  "key45": "4xM9xa7h78kCbPRzJxwpxy55fqyTB4138unS99DMY4PGQnyGtc1MXehNHiNxbvEcPsz4ieXAsMLknoBi85YWLrgc",
  "key46": "4d7ZX7x3CeYjY5GLkKNCYBHA674Gm3A1yPCDwNxASnfZv5goo8xggLgPsFbCqiZCgPnMXRKWtzv9hNpa4acaho8C"
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
