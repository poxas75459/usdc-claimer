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
    "3tgqBYHLJGeSrZVk9mnDbn8gTqjEC6FCZk1j6UJ5XdKeRGpbBVjrj4ZxPYmpJr5dk2mQZuMbwLRpr7k8SSjwEfqq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zuSeb7AKCiVWxG2GMrLAgdQVzPnK1oX88cqPNo5pwr9Xg8YTidsp4u7EttasQJsptiYnhE4o9rEXWjRshsAz3Ya",
  "key1": "J3ixhebArWB2Au95QbjzHc7wanaDTXHFDyWoUF9bkowZWEubESCrK9BhwYqjr3RW7ZywmQREahEJMARPVjvrGio",
  "key2": "2hcHttKXSiTevki4BnsKtLZoAbmSwfobpQrR4hHEHhMggQbkjDE6y2rU1GPfYuEddwTD6qvAmpBMAr71drLYNXUT",
  "key3": "2bn7bLy3XsSwaQntzbiUNTNf6uJXPYZMgFcB23PoyqN3ySjfmBezwmP1kWLYpHtPqAbf4c6mkGyuQxHbpGXradnr",
  "key4": "1RxbANjbkzt9XBskc3uaSBxCLXDbjEzg7TLV7wgr1y1TPs44dMEyPU2g1wjzBqLCzkhj24Vm85ZkLNra6ZuujKY",
  "key5": "59cpUiQaQ4PHYM5PxaGb46vXEQTHHBN7XQDVRG9mtdPunP8ZRNsyeWTjMQ6FWstsAAi52SP8bSGYWha72aiP7HPK",
  "key6": "4DwjKWC53jTi7Ap6v9EVsvy9gF4KpMK2eVMuLgk6iPyrEhQbYEmeCCZmsb6zx1WUkquHkh3D3YWLaEjcf358r6T6",
  "key7": "5SPY7epxGRtBMueE3MpguhtwykjcCQ36mzDAFCxPGahh5Ax1YsNAcZ7rayZMq64HVybX65b7bpuGvSuiMeAw8WWu",
  "key8": "3RT3Jrg4sv1fa2vtjgYT1QXMnpN8x2zVU69uypd6EpVQxm8vyB4NhgXjttQhrbKcBwufHMZgvGTLQRhQijRfFFJk",
  "key9": "2njWHVoE5mLNNy43Y1Jyi1cxrr7NNqQnfDuT8jQ8LWzF7rrBMzjVSYuvY9RthkEXHGwnk7SPkhDgtbhv5B8mX5Xq",
  "key10": "2BFYnGr13SpY2jbxrTEzSP7UGgxEb5cjuLPN2fckaWAJjzkwHH3eEStHMsMvkML7V2VTVx2Qsr87M6DoLPKYHkpm",
  "key11": "45pz4QJpnW45MwtdkxM4NBFuwd8tLCSaHmFZxvC1nFgpXCNeHZGg5KBPhksU6VU4mMibNdh4U5Q8kBobzp6Wym53",
  "key12": "3oUQbYQ7d82crErMJ3fBCNNcR85ZfibJ5SVpTEmb9uBig9JibZxhf7yGFQNtRRwuVbwbAu73pDYPiYxJ4C9rbfW8",
  "key13": "aFFaBa99PmzJYCukUieQ4WPM8K3HoM3vYesSDaxcpUexMHiJMJ8pszZnJc7ZkCnygcjgtnE6KjDUuBrNStmQZro",
  "key14": "4AptxG6YRo2vjdkW64DRh3LQYJTvbvhMagDtZKMB1mbRxRfPAoxjdPxDG58um1TGFD3E5dunYqZCfAig9GnhVMJE",
  "key15": "5TdtRcVsQ2UNo69APij2BvFPpwzhXJuVv3oFWHi7meh6W6rjxxeXnXNto1N5CiHj4JZAuMXtBNfoscoL2z2AvdTm",
  "key16": "5Sm2jyXmfHtQyNVsNzSigNh8nZP3NMzB3MYjarMKxYbRZkNaCv6WpsKh26rPSx7GQvssbMmSSG9gBJMJAwvpqs1d",
  "key17": "3pRmo8bMiS2yoD4KNqkrGY5LD5HV7DwiKjqeRCa3hjGJALGNByDucydmyswwfBcyjzCTKJbpKjSKy1TiWdftE8M4",
  "key18": "53BhVxBymqLhwbHKsC97RSW4Z2Lx7YJacLHjC3LLCb9vL3m4Z4ex76h5vembHLaEmiFpzaWNWoCxHGuigo32x5fA",
  "key19": "C9SBbydaRHHfEeTPTRvNi4qkQkGrNQtVxTM7rTaKL9qqgMq6KxSMkmRnrzykAhNNRWrQxMkVKnncUgGpUgU7Nwa",
  "key20": "4HeWGDjZDnSZbn3irUcnKc1op87MxSvkRMz1Q4ccMwxFp6SvewfvaNSLT7D6AoVZUvgqD59ZujVWmcfSYF2XFm6o",
  "key21": "B9KkJYqaF1gjkaFNC5Cj5BVtVR8RSohnTJNoi3ErhvNV9r6gFqxZfq7hTsims84jizhu1qzDWXYCWqs7ALVy9PA",
  "key22": "4R96iLoYJmub9nxKxSKXQF6iNGs7Z4hqK3uVHe79CoGi9J7DKkSQrtW8hWFEyEkUAN68kh3yn7YG5rLy3EfVkuw6",
  "key23": "3bUS4xVroS2Y89TqtD4NYbnmHQEKikzYSfxdFAte7PpNcWeYpNWLQQq2J9ddtvhuthFMSx7LWXWek5xAnvCRBhc2",
  "key24": "3qC68vekUAobtnMQyUeKzH66xJz7StZx6TjhjdJfHjDZ8GzCr6rqCc95nSm3UmE17hezQwigMuXS82bnSDsthf9S",
  "key25": "2FDHDMWZK2g31fguBdcYWUywM1a3V5kVm1PQrjdj6R9cXJsMnfncpY8UPGABGmWvGLbxXmt3wYcQNNSWa9sThr5V",
  "key26": "32ar5iV7o9oPd9k6YQcpnr2exGJpHWeui7Y2N6kq41MBTi5rDSWuWt7c6VgK3m4wDw5SKUoXKWQX38fjoxW28dSq",
  "key27": "2tL8aKhFSjDjXJWAZc3a41iBTPB98u93As7qphfwobUp8Ms9XMT4ompL9YAM6qCBbdD3JYXHHVSMpyn7NZggMZ4p",
  "key28": "35H3HrS2yHW5CuVCufCTvbyewgn7tNLQufk7BoogwqjGY3psz5XswkHE8sg8VEJe7j4jhh5Z8ADZytTBj93NFrHi",
  "key29": "3Z2eM4ZidyDcSWcncq9MzdoTVnph9wnNdMRypB2tW8BDxoPzoFNM3jVWAAA3mZqxCpWTiuMNq7KogNxvdT2kEzSF",
  "key30": "5RrfWotD2qTH8KHBSKSaxgfz4HbiTm1CeTJnHRgimjgYTqUgdSgw5aVo2gWwf6mTQQ23n2ypXZviQ6cPFHuUJ4HG",
  "key31": "4wCBijYrwaHm9mHawMfkJjNav7uB4cXGKY6kKgFqji3qRoBTtgCRafWDHUH4nM73Zzv7vdxdgLDzgbGzUdQYm6G8",
  "key32": "3BGk6Tvax7iqCfjE7PE3ZvNLtWsGw3mRxtSgTTFYHZqmMpopAoNHv3FNiRgbXi1LyLbKWGLpCFVnTpNmiDTcCPcw",
  "key33": "Hj1ZkMuoJ4gu2SJ61qjHGddbMKYtnZjtwa5LLhC4hS7k5scpKHGGUT6Dpiu5Z6jgMPurqwzuYku724ve4QRMJDm",
  "key34": "NfwpsXxEHyJWwST3VaPjbp6mqBpPbJ6zbkRzGnbaXBqRJa2aYZMdbidzFLiPWriTMdgSGNyFEfbU4JN9W7TEqxs",
  "key35": "4mBfMDXYidMt5LDg8fiiEV5S8aQ2XrVfNJVpBaZ3z61rjShsFjmZsiKtNEzCaEXiuLrRFLypkCrQ4xwfbbhouQzR",
  "key36": "4ZQ1ETndYnWqcZG4ZGYC99hbxgUqEU6kvrX1A9wcEDrWh3coQirn6TxaEg8DCFcgdHNiftDcbQa61TzJnXjbEqF4",
  "key37": "36P89KFUGhHUqWWgiBLKrnndD4tA8WPG2gsvMeUJXenUWTZiE2iiYnCFfh2L5KLytabnTaybEiB6rFFinGwsfH3t",
  "key38": "55EQGnd29EqEyivqLxUtdxQmXBFNaVyaWNyqVF9VAtjeXpoP7aJUaacVF2bZa5RRaGYpZ6C2XDxWQbj5gtiyViMc",
  "key39": "52nPjesDVeVzFfimGn2X7KZHWCitiih16MYJGNfavvdkRKbBEeept3JAxZpLRFea6W9ikjYbDk1GpL1uNBbFmrb5",
  "key40": "2JUEwpkPPrXY4xat9q59XYwWaE2mdYqSY5UDFuAqHjWSjMjvVWezbV9vN3AxxDXX9CgkJeMK8wtdfHjWAryZnaDU",
  "key41": "N8Bmmj7gkNW1aD5Xgstq5aTTMv9wAYQqx1hqBXadCnSsAvMYcy9avjM7oggt3a1zqBH2BNUYCHo8zJP2TQ42Pm4",
  "key42": "239GYcLWNxSLj9pHfvER5AQfCRhRN4iBtpactiJUswsaM2b8cbctPaMABSZbWoPoBK2JPPWq7dhZCK8X44QcxnDg",
  "key43": "3LWC8zgRJEWAgJc4YS7fhhFchs6RNWuyxxYg5m3vRwnGx9egCaTfYSP2XkgvoJEHKNso1jj9hkofd4U7Uysd7VWv"
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
