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
    "3t1qAohuC7nTq4Q15z3f6gaUso4o7L2QydBSgdEjy3mNNv4bgrcGQKCp58xhXynPJc98tamhxCR3uy8huL8pVSkx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yqNyNumM6eTx4hJwESZkkkj9VXk9qq8Bo7ApV2JVMPu7Wiod7kbDHd1K17wgqRsyDCt6GTzXvhx4eBifVQ2EKHS",
  "key1": "5cy3TMJfnXjXtK8gc3XUczdUK9NPRWRPmtF6G1i3S39gjK4W4W8tBUMQUw8NP6o2GLnJGi5zx4oHW1mAiicC3wLn",
  "key2": "DrSuHQESkwWYsqpx95F4jcMTM4aY5cSh3AQYjn3AuDsPw3gVjSyrZrQHwS8uSgfAAznUM9MRjRtm7Uw95UDGBnj",
  "key3": "JkVDd9GtG65NrAU18qxL1vs8LKmnfv3m1dWwiEELbnXMD6Akhd1qzYAQ92fnxMr58D1X3Xv2tkKQYyxjyren3Vj",
  "key4": "4RaRxhvh5q7Xz7drzwXj9X6ebVis17jYVmgXugrH3viCeqTZ1rbu4NU9UX98LUfW7hSj3c4xJdhF7RsaK87bRC95",
  "key5": "3h4bgVWkPjYiu3YuuZ4ivEuyGukmqLaURpxGKSibvqJy15No8e87UBHTyzsJYyW2Zt8NXbn6BtL19BKLwfM1Fj8F",
  "key6": "hnDGnFXs3LzjggdQBpAk1JGrbXFoxpPUrHcgmF7mRHULAEhSsdnh2XGEMxUn8hGfnWGkvzymXCJ1cwHquJYaFeh",
  "key7": "2mxy2xNhcSVcdpkLfjMnqWwQyMRehm69BhRWWCdBGEdMun8vKxN69RjkHRydbznHh2zfkkG75kRykkgsw76AoYvW",
  "key8": "28vhA9zta4HeZccBXC21c3qVU1hiccf7E8mShWduTezmi4EzPgSzLRPL2jWMAisvDrEVWVzkkzKkcMQcCa4MqH7L",
  "key9": "5ywxiGSSHJP5aPXuDxpgLjAXbxJv3faHKtmt8bJGVEvrT51nDcyKU8Mo71mFZQ3ZAQijfZrnc33L8zMf9bRtyFxK",
  "key10": "29nj6HppyFgiRwcn6ZSyX9fsbGDs4XSGZ66rUrQRn6d5KCE5DFZj2SvkW2tGZ3dodmQVqrbPXLyy7k2KubbrRLQi",
  "key11": "3wNitce13BNCTQvgN4UrVXxVbA5mTYqshVERhWytXm2ePECYVJrV4HB2ZcJTjZLX4fbVEcf7fv9FzYegnuRtGiFS",
  "key12": "4sNc2g29YNefyY943ucNcjsvTAG1UQhPk3DW3WKy9o2B4TnojFvWDmqgYxZk71p79P6YBUFT4t5J13memSvr6Xkq",
  "key13": "2pPBrZActHd9gSs8ArgVZ7Ffdwprvi7RY5AnDds2BMz1GnPHk9zZBP2Nv2HhRssXHoqHa16XL9nQx5k3fcoEQjTW",
  "key14": "iDupBfVSBhqX5GYhQQCy5Q15L1p5XBw1WrQxUbm5mrHxLTzHduoDH6VaM8HFqpoVAZFrk3LMxZiqstRTZoorEhn",
  "key15": "4dZbcSYVXqZXEHmf5pPxDUaZMtBKGNXzvA37dVLd55k819dZCYE1rDaz9NmJ4TNaB5Ks9QaSsBpvEk4sY2hA6CUD",
  "key16": "48WtfJdSnKncafCVwkRz5HwZLZ3BVFceRimYEPQXyRLsg6HExK6fihWi5t29MEEv6UMQ2tqe13oLFQAWdGsXvrJ6",
  "key17": "FcMja1xS9gfTTrsCkxtC2vZWcXG5KomZTPNNKNm537KnEEMSofTgSWTPVugrs5UWWEJyqoDqwaerfSmDq4c5HEE",
  "key18": "34xUL3zEbDzzPYccjFLb6eCACefMFJSsDZ1qRYvTQ5oiGLvy75LY8ZiHsJhBqxbeGDDD5hDqfJH35SfitpxS9VNH",
  "key19": "63QGGoN6XkFqJfHFZkbUJNtjNEcvYf62KLaxJ3iFZHA1a5EhWY7nwcw3WdDkt32WF5pZ3KK9Z2GKrjLuWpaU3Cgs",
  "key20": "5rRbpZT66MHjuHDryrhi3PaNh65A5aRhZB6zCN1HTbHYZi7AXb4dCgQscT16MRF31K67bsik8RauLgSSJPiwLB1p",
  "key21": "4iwqgxVU2uoKjJ1Hcmw7UFd1SYXTTkvwSxfxvik992CxCMw3nQdxphrpQS3BuTAYG6VSiptjaK7QjD34cPbkXxxD",
  "key22": "21ndjiGSjM4AufHA8YsLRT3MHfeGh3MLpN3cYfqot2H41QnbHzFp4A4wfr5zN2YwfLHb92unXgkdm9aUSKyBDd8j",
  "key23": "2t1a7hmBAYGLLLzDzsbBXM4vE2XQ3nkx5cW9sAVR71RuvTbN2BttUt5TGExgzW6u5pC5s2cQPJQRwqyEydL6BJ8",
  "key24": "pGUKW84myZirTah854Y14V195irie1WNtLRnmgDswhSio1fjfb4QdjZysv198XgJzCg4VFoecQL69DfuaP3KWUp",
  "key25": "kzcMujknxCLoKLtpfrAmw3xv2PYTTTSPDTFacjdfTuHZwd8daFKi5Uw1hKfmbSpbu6qYrF9BwD3dXPYi1PGpWvy",
  "key26": "uHxoq5dbwYjY17bAqnzQWqe1HjAKix7VGKVdotC7sPjzj8iNymH2JzNUBiTBKQT7bYssjEBgTU3odsebnqqmbTU",
  "key27": "2pn5wjVbm7t8rSgEj6wGvAVDSWCd3HKkCYzYqQ2Bi9EqwLwuVgHPNt8p931zJP9mokgr2Fmbuw2qM1hY9DtL1tUd",
  "key28": "5PvHgCCWcchSFti6K6oy7jfn2DMBYwfbcbCXgpuG9VU4E4ZYNGPZ8qUhcVH9Fm7BCas7TF7cz5AARxNaMZm1kMxB",
  "key29": "4f4FAteffPS8QffZnN6HdVCBGm2bdtTEDrja9isEENWPSXsmhKnS6xYvEnbnogmgP9qcBPYkvkTKy93sypwnk7Z9",
  "key30": "3EhqjRXr1AFTs8vbxzWHaDsc5xMqCzADsgVn5G2nWFATKuDb7JCw9uo1wCVMR7XZNBb4rFMAadWFfRT1UroGhxNy",
  "key31": "4jtBxDDFQpq6XkC7ASGSrpa4g5eTQgy1DgfnshGZZPT6Fi8rwsXCGskL2gs3xeMLPwUFLj342ZQKAWdPc7uqHyEy",
  "key32": "KAAvyJ7RnsgNqSeNhokfsW6Xd3tFa7W2rgyZoewoysjtJLAdHs78bLFb41RCoaXwJUVTGhnR6Thh5xgWWQmfQtV",
  "key33": "aJFLkZyr2yJRqbVaHx2cStyYbwPDbiKKe33uvxDmofRnpqhYBv7izM9HhawR3XyN49zUwBjZohKbKmmdcHcKgAE",
  "key34": "5SqmZiSBZkXp9HQwJhvfVcaKXgqEQhkmSSKmmfRm6XfABmfGgCJVtMVyZ4XiYfndpK2ohu99KsmAGidtK2GuKrxc",
  "key35": "o7evguSt2Q9A5YFzCxWUSFt27NrdakSdHy7PusGGG4HFMWAs9UrsmTr2zZ3MUrSBeZhJAGKtZwVC78cXJt38He9",
  "key36": "4W9B5sWytH1khR7Cvr6Uo7YYgqPUu51GPwk8kvD9Xs6SgYbt9JXpFnCC7cgo6uMdNhtCe2QpbAPzdBjMJJhz5iEd"
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
