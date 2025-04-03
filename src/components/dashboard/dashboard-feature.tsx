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
    "e2wHnnnT1CcsH1yr458Q2VJVazsmTy1oanWZFTaJbe2GjSyBjfChtY68E89p5bJBXUpBsQaHHKv9FRzJWtRQ7Q7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gPbGbSVPrd4VFuCWnPtebnyPBBcKCuWQ5Lh1TNfYeyu6xcVS5VF59TUKCg4rCWq877oW1rudZ3WwxXR71znJMn3",
  "key1": "4LWGZA3Jf3sEMKBC5S4rrL6KVj2E4iLHkkNtK4yEEtUwDJbJdMf611vYESDK5Pb1SFJGRZWQ8QeoVFFKLywz9twW",
  "key2": "4w7kmEBoCU3kxSJpbHPDVwggFA2mKEHFoZcWxeS4dQJ6hLjqZfoeKUWwcBEWEUSdWTwR2n9dv76p6Qpzt6anEkns",
  "key3": "2XqxTpwo1qdSbP2Hzb8FtLhS7L3KBfHvvcCEXzZrTez3J2ct8Aps9HZE1XxWEi8apQ7R48bBFYcknvswdY4PKG7s",
  "key4": "5q53XzWzXCSZmYnowZm8HmSTWjvEHUdPf5QM4amWRirAJBTcf6jutJzkdf7KeW9gqKZdRgiyEJdd6zepr2yeHwVA",
  "key5": "3s9hyso3nJePenbHCow7mvn4vzgDMTNQt6gxFZM8S5AHi6WiDLT4nY8QNZs3D5iLn3AiVPYEN2xy2w21TyGPHeTV",
  "key6": "4DUF5MsQfNrJEy6KzmzymfGM9cs1dVDkq7ubbmXhyXWEvBRqorj66U6fKu2ykGx3i7ahLLozU5FZgnadQaWqcTWG",
  "key7": "5ANXCCRQivj5svz4aBddhnh3tWXLpM3DtxBi8rnfzwujnEM53iTxeNKX8xCgeMYQTcnTNLmxYUXEd18zWi7bkPJk",
  "key8": "42Fed6NJ9jG6ddMfMyWXjUwLz8BdicJqC1cmW8zwztedQo1ujkHwV9sFaZnE2aWWTF1ELaxHebCh3gRDTt8juFkJ",
  "key9": "4f8GMUVMbaVRf3Jx5cqxibui6jqhCTW9N3DDeg7wU1aKtWcEXuzuufwYwU8ZUB6xNK9aednXduVQxeb6fVJqqSHC",
  "key10": "4CD5op9bvxf5bKZfM3Hw9kYmKNp6bFShHqc9n373CtcWNVtgkhvdyvHwJYCMQNxA1L1EHJsU65Fa4eYs7LuXb97s",
  "key11": "3MBmstY9cXBxcL7Nk4iKfSqZXvPUwCbUmTm6T2fGEWtXc9K42pLqAgvpnFUVHEomxwRiYDp4LCeTnSPZpLPZp6Nf",
  "key12": "5edMZvYKh7VzhMqsPdvQhma7bqDUCDeX6FC9itM8PAwgdHLa5YjEgAsGAMisYKBwFAzf3jGj4GFYvc9dV5XBFVRS",
  "key13": "3VGEQUWpQ2T8MFr4NWG5jhmjb4mcK8mwUrfZDziCiKT3cr8sNncePu1WoCwbaRg4Yhy4FrHhs8JXK8EKeiiKbvYQ",
  "key14": "2b6M6iHEaKuimPHwK3RoQTjV1mqBsPYCASn5gksZTMjfYRPxNp3bFMbZ4o2VWzQBSBLxqfXAt5Dg8myNfD38fffo",
  "key15": "49A7Rsj1RJPAXoBHVtcVr19SUnj8xWw1ar2C2EpRd2RxCA4Qs4mTK51DEfkAwrRHEEZ4goh3pxU5zSTk3kFyCMtz",
  "key16": "4JQgTcQR514vGrWHChg6zwWkrv6PVsnnaG59BpThNjhNqYe5eooVMotSsrkUP2Q3XKdEmCPDTFN9auMZxGzp5Xkb",
  "key17": "5rtUqgcCz92ZKSjvZGTeHYC3531qzcWiM1QV9yjsF2ChZb378HoniP2USGbgdQUMNJADSJruaqf89A21rbpFDy9i",
  "key18": "3B33axaxTeGosU3JeLcEogzjk8Fv1dAr77781joWNY7Qzg58uTYzxzxhK1MiymhxJnE2Bub5ajydvnvm5p9oLVVU",
  "key19": "26GyiWQG25YtgrD4RK9ja4eKcD33UeUS6ZF6zXLtnE64ZhrccCmGrPZreenQpErHZC58ph8vmn3r891pLyfcK9yc",
  "key20": "4Gafx4MLeWMyGnFGi6YwMtuyZUGse4sqW1R75qKTWhGTGxmQtQvr4BRsTop3jsdcUKqxQeyfsBccXGEZbDWnQPD5",
  "key21": "4D2VQHvsG8wkonH67kwGd57R9xZjrR367vi2vEtx3c3gyBUP1HWpyZQQAwdKkYsbsJ2rqWDkAkeVph1GyFcfm7og",
  "key22": "2ntRuzTGJ69U9NwpwHe3W899SQCLvgUECEyBxdTAPyo1gtCEyeSb6iumjn4HY36enzWvk1ZVDg4kUkVCmC3RNePu",
  "key23": "3f7WZmB5UeoZVPB9M23yhJfhQwWkPB6XTZGHVBUVBKvHj36Nx7kP66XBAmqf8wqx9i15LNDY5MxfPok69hLKrsuC",
  "key24": "4qum77nPUGrhvKjSvhe5TFSCZBhbXkqduikvLpRgt6sq33rAHGntsKyXKDLKpPuCqjybuXZGTGJKT7314qt4kQLN",
  "key25": "4ZNfPuJhGyraoToVnYpBu2gDWPibf3FnSWw7uSHsf1gEf646kF9bHFYM2Z7k52Uz92GVn8qi395Sb8yFbcq4gxWe",
  "key26": "2rBeo5krtPo1VGMpA62WfkXc7GBjH3ZiXCZbHfYktPVvyLdD3YYcwYysM11rumsSoCDJqCvNBdcjFDo2HFXaHiU7",
  "key27": "35SGGz2ep5rSyAZaxHa8ruqzG3MiiJSdcPsUkVNvgCJCyvU9bJPuVHCpX6Lc88Ewsb62kJfgdgvanFi7jZHdrW2F",
  "key28": "H7sXRSEgLMfxgHqg5rRGZ9Jjn6sSkbokZtEFk42bMEySvFm7MXgJMjBkLt2ph389ShiKrwuzpAA8USaNRoEeu88",
  "key29": "VY9c9Z7XFcoUCaUHnzYRoEHWTdvZCct5bmXKEecV9XoJA5zSMEW2Z7h2AfsknQtm1RJQ53S34bEFNvYf2kYNsap",
  "key30": "3hvfL7CVJbuonErkgzuCm7ChSVKF2nzhmKGiBvt7X3Z21RJLAfYYbHNi5RY94UcEv8YDJSHNQuSqHi5aK9yU8ZF3",
  "key31": "22BCqpgu99gmaSDdvFQpdXFCu4nzyEs3Rd3GKUACnehSsxYkqi14y7GiRLbZyfwhv8J6EiydvtJMHfK6My4mWghy",
  "key32": "JJ2fYsStUBq62LkyzrR5dbRG8GtR2rHLWDE1isfod5z5etDW7XDk3Ujk5j68UxKJeVmRKCfaUE4HCvJg2eezmvj",
  "key33": "2wMQ1oQinVXjigakS9V93cCGmoUWcZFyQNcGaubNa7fjtphQgXPJ9bidrRouCfr9gFRpbsSQUUCvKbca4KaQUExZ",
  "key34": "4mzjsRbkgDZrsBVwtHvp7vFAWJJEzR5bSNRkAQZm2QxjjKeaeTY2n2yVuPNibcv5BHQM8UHM4oKm93TJshZzWDch",
  "key35": "2K6SV5VuyskNrhnLF3q7BYTGLBvzeB5h7UW8TB1zJh7ASFXBWp6mD5dpCHZfCYp561FdRiEXwS2mz78wzAiMjAaj",
  "key36": "2M6tZmZSm4WCJX3MNxRitjJ6U3UrcivQXBCRGuUi5Z9VZVMnRabrdx78e4v6jTHEwzruLXdFKuw7146WFtR7qFre",
  "key37": "2MVAM6L2jikFESooBCPXYX7wf8FoCQdyz4NmUfaaPJMHhLqTbakFnVrwrK1SpA9wek2wwHZRqkia7m5DmHSad9Y2",
  "key38": "28FCeRXSyzUfM9gaKtDaSijT4T82HSTW6E1vrRHw3x1QGbt9ARzyCuKGBtQGmPRX6fZLyLmWXMkB5rBhSQVAdryZ",
  "key39": "9ACH1jmpTbbXdNBCFNmJqkptNsXfD5dhF4XD3DXj4QhUwoLMQsqJGfgtW7DbAnsgMEKJFnp1SxDk2CsRUFBGUqK"
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
