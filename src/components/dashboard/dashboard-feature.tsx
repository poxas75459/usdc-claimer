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
    "2pgXmr7sikLxiC8ZfZ2wxxNewFi74V42f2nEmfCBrQR4iqzjGq1YAG4zHTzFQCPrrSYuSzcXgXjX6iFfdfXMXsFG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33c1gStVuctAWeGZ3DNa4xwmDR2Yx6ntUSWhitBGZanaHnqCeeEcRkSK3fPuy8HN7HwgVhLfaruamY96duN4BVsE",
  "key1": "3ULkzFQimt3c6fxZMg98PaB9UTtRAKkNCGTgHnkU4AhssBNAxPy4X64wDVfrdnSBa3uezmFZmj41NKvSR4uq4KZe",
  "key2": "2PkySWACX4qRwN5cEg2sJjsKbzq4refiUkTfhDxh4eqFaxZLu2rEYWBJyPNduBcahbeh8VHxYNftFHWYjdgUqX7X",
  "key3": "41hspPbktPRRjG3toeTuyiGxSRQWkt9vsxaeAZPuX6k3mwdaPhfiQXB5MCYJrJdLL8BZ4fYwTkmb3YJvzw4pKN1o",
  "key4": "xsgfjf1xMsWmxC15fKvQyD3czJgoKmK6FGgv7L7Mb5Q1pd2b52kb4hxcd12HWksJgZiEbq75gXUJhUyHgic2oEQ",
  "key5": "2B2RoYTfNyx1sRJvzptvwwSHnPxXFkNYzThQg3kKyvruLNaamjULbdu76jm1S8y8C3FbaCeZYteyW6oKzM5ekKMY",
  "key6": "58QGkN3LQE87Wje7pL1n6cLVDLb9EMgR5BEhM78xhnCUJpPs96cMLRCd556rTJsBwU3Z5PNej5NcxKjdePDuSZ8v",
  "key7": "2QXxWxmyDZjDwWfemwZH6ZuzyWcbL4Gq3DsfFBPLcpLgRoBPzdNUWoXRtJvJaBCjtMBxAZWT1jXAqLVsvMPb8yRL",
  "key8": "2ATKEjzSESRJYQK3Fue8NnJYo2zT4gfxJ1CifauhPVFi6iA3NmpY3qq9xrMTK22skoRNzHe3wxhdHFCLsYsGPGyD",
  "key9": "5LEdMFavXq5aV6dEBpVUQ28jxDSexRkHhSBMiSnPFLoHizcP9eQvqhymF6KArYEfPC4LtYbHpkyUXR8mUJzQ6LU6",
  "key10": "rfWkSaTUCsLiAKUvNQwN8wW9BKq3XfwzrjQn9GXrNHCNjNaZRYkeHFczc95GgHGw16wfHz5CM5BHrejucKszTsu",
  "key11": "notcbGyJC7DZhHnYVKdB1iojByJurUYShL53W9zC13VTgbfJ8Y7bqZeSFNJV4XV5eWtN68JxaDTf4QWdaGmjLy5",
  "key12": "378cdF4guxftS4qq6Qr9wHcAMbYS37oR8J8PzbZCJqGuPifMUgxXKWMFJc6XbSs588HHNLdwr65pPoSXYyhXTAma",
  "key13": "3WC6K2xQp9u63FQLN2sP6mr6sH9jU5Sgz3rVveqawpdLzWTrbi89yro72cCzXH3fpkMwZwWpr6eD6kxSF37LkHZd",
  "key14": "4KAM4knGgeyf9maDAq61gVU93y9rNWHPVk1FyZdCxACehsqt7Fk64CKLV9nPpavUaMM4JA6kWip3vNfYdDTE5hrs",
  "key15": "sGwqFXZoQFs51SkSJRhfgwrF79skn8KDMKBJCX64PbVnrueFKaLWfski45cbAWr2Zu55ri3Tigf1YX9h4gmHdkV",
  "key16": "HJocJKpMHbWcCpJQDDZG2c92NfP1q771RnzSvAB73UQRguSBR2zohLh8D7hx7ZwiLsAWobmY9agLSo5biUEKHrT",
  "key17": "3yVqHXox2MwKrXwDcAhKnV8kjdMmYrpbC8JLcHxH7TSBBVmCkXumfmgnmfx8qQnVATr85puj37ALKjzvmUmq5orb",
  "key18": "ubLdxaVFce37EupHmRvTYPXMgqFzuxMUFvNaKAQxRa562V5dLbfjpsD3fa7J8eKGH2srtq7cfqKxreZEBLU1uBa",
  "key19": "5kPyVyJHgenSEP71Ld8t6rWWX1AWjm9FMAKvovGQRK2shgwaZvWM4jrYjNnWqPi9PU8CsMXex9hNVk9YdCgCXXym",
  "key20": "41rkontXd842gytiHisnEXu3Mezd4YvgYmgyFGQQSk6RnrPL7GR3GWU43RdT27Co9NhTiAYA1EZ7YivZMwdKQ6xq",
  "key21": "2gUmTYxS6oQuds6GK9VbaF4YzNJsMeejuCqdDjHSyS9Hd4WvVfhzzBc512rAE6udbcdpnoZJmTawiC45NF4EXV93",
  "key22": "2Q2yaQuut8KH92oDYp5ShZfYx97UNBmuG2x1dZgVTgfQ5L1KSZEV64PVJ5C4QUqo5rqELH1uGjhR1WS4BjYPynAZ",
  "key23": "4i5Bq9mWeYFreeXbfMbgKcnPMPJ3P1Gr2N4tafGWoHM6nThsudhULqiWskKPuFxrHPqgp7Lxs8XLkegParPcQ52c",
  "key24": "Mf9dZiLH9bsWyfBT7K8CZWiTZNnfTDDnpuGaa74MCY41ZvUxVuctx8VHpwUJ2PYX94ppPGrejE5phQdVcTyhuqu",
  "key25": "3fHcFJEWiknesy1vcz4xb3DWHkUf4c1sJufuD4Hev31JmNvgUUZVcfuLxU2tsQYrJYW35RrUYWVGMhZ8NHjotrKN",
  "key26": "1HSsrfqaBK3HWxjJ8pGNUFVGrNooTsnwXE47i2oCDRZKts5FBTbXYVKkdwteFSqWhAxLxVoWb1h8HYzNbr1hZZq",
  "key27": "5ArkK8QpD6X1e3oNnjQMgpkPy7rmu4hmbhSe8Zdf1Wyk7unpsuepZS88Cz2vJsMRcGQjgDBD4w6vjMSXHwVMbMRp",
  "key28": "3RMceatbL6p3bvcYZwt4JZVXboCCXUXxgB7nX1dyW2HusxqTMj8TkmYQ62fDh5RMd8wf29LVopwNrLMkeFhnCYAb",
  "key29": "5Byrn4ps1rpZK9SYzG8agW4dm79MBhJVpYvE8NeCt1rjDjEXnKWoqFSbPgZivi9yPZVVdL5kx7H8tAvCdQDE6mGT",
  "key30": "3Po69uRymzfzbAs569cCJAAhQVc37ZsYQPrwkxMDQZwxxworTRTa7fHbWksZ8kG1odjAe5vAz4VrwmoFyKkfuwwU",
  "key31": "Dt1WeFCLgyTYd52YnubktDxSXcNAfdykCMnTrmu4Tozy8zeioUjcxuynCNFw4Zk3pQR1rECkspP6SY5VHpbmqRN",
  "key32": "64bmsfL35y8C2DHB3RSST5XJoqgf8sfFAdDN3UwRmMjUGsu4vuTPQUo3e3mzQqASG5qrpSJVZpj8x1xJ8Ut296xP",
  "key33": "YA2HgEW4tcvUDy1HAQquprjAErqNG4Q35X5D35EsLQavQVMfZbuwEzDpeFUzhcJ92xA1roRgTdfj33J9w2qPW7P",
  "key34": "SWzNyAZjNeNqT4QHuEfRmAQb79EWZc5Bzpa7DZDqQAyvQR6yVMe3i1vhyRRsHs3yW133bQjacUZaCVyt1kEC5QM",
  "key35": "gfdToL1uFrjanC83J5kmfe6nozzg8SxJQUcpBX4g81L7dCajT1GU5fH4GpYUw8c5UE57NGgiAQ3berArSJEZsGk",
  "key36": "rbahjtRvEMzYthG49VsQFW9SL9qppgY8qQovDY33YFofDUtvjxNfTSvyGkHy8BdzUMC9fxd3C245Ev41cM5RtHr",
  "key37": "3P91Z2bCygihHkXnqdB7bCxAj6chNz3WvBTrnLhsNpazUKEoA5XJ4KquFRBtdMQ7xAuEHibyC9WAKk4bfzLDmtbD",
  "key38": "2DqcBa2W7CW1s36NRcchA2VPvoShvue7c1apCQ3yQUd3An1Ya8vBnCPkAL2fpZSjdDxFhyKtBKGtgDGgx5fY5jKS",
  "key39": "1KvPiL7obo6ynQu5N864jRJn5cBw4FyQayFgsV4DjY9E1Vkhv83hdTF8mMFw4aZgcuCasft4wxfqRv6BpJmzgPr"
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
