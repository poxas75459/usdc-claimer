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
    "BzmrhxSkH68ZuLsNzsbTJGcEFVfNNmthvmFu98uEGpHGmEz31kgoXSQUJ9Kg8nXV8LKDcfams3gjW4Qqu5ATcRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m3K5k7tJcXu84fbfgVo6jqPAhj3SxJCTYmRF7L4YNaQneuGfN6KzNfKZXHMEZJ9wLpvLuiukhNHh352y7WpWwtP",
  "key1": "wYWdoZbhMSsrfhNJLK9FLns8sKMMfdeGhHAE4NYjT7owM3kFQtn2pzoi3inPYckR2KD3iwuh43taVxSkhE9BbnE",
  "key2": "3cE2YeLkauKNPKowwWANewbSNeezJkpZgRT2Krpy94QVGrCWNDs5NA7dipJhfp3Twh9hbh6yUSHr6m5tJB7zNbWd",
  "key3": "3DFFZUHhqQ7auN4ounupockg4Q4KD93wkmFD1LNNvwZp7uS9tDfN5apGHsymnuzizLqaaHfoBx4MvjAE8zNx5GNV",
  "key4": "C526XfJACXqroK87DEQmqqCeBzwFAfygj3Ks6z9ghMYxDouE12HJPqmAYN7FNp8UwxDmUxGEKHvryPTimvzRMfR",
  "key5": "2DpbBdeW6mx7eFe3A8fFG7on8w5HcZNXxDS8EDTXtG2rx9VmJEt7uYjRFyB3s893JZ2P1jeNsUWz4WDm1JLvfkej",
  "key6": "nmFiSZWbyp2hnUUodXgdvp5BufNGMFX4TpTzbxyXrXW7VcWSXwBHw15iA3t1Sjt7F9QyRtsuoty42msmBTD47Wj",
  "key7": "4Je13ERyFgpDqkywKHKrH66dRpXvNgh1VJtCtJ7RarmcC12s1QUUAJCH4j9DwmgVTiHEDqfxLJF291XuYWeGYFYJ",
  "key8": "2V9fXwKUKQRb3FdyoizmcHNiBKNkz6wufpubkx4X4gWh9gE77LcT7eE75KS4hbKk46gAP177NLczFhU2NjfmGG4W",
  "key9": "2sVv2AfgzZbjXdw534iYXPL2ZoCCsJfzRTT6isxXTyz5UgWfzCoKL47yroX3AaE3j5Y53fHdjPA1LZdE4Zfkxik3",
  "key10": "m9JVqQQe47sHn7jvAEj9kCEdmhtNuNs1RwLpvcXYQQgUTNReuBfKxmhypbTbc6RQJKmuY2BBjNh5ECATppUzmK1",
  "key11": "58YuDNF2ZeCAhSV5ZkwiiPBJsq5EnmU3NGjRZRjywBgEtHbsHiLuEjHMhTyU6hbv6n1W82QcppYTZpW4DHyzhVxc",
  "key12": "5cC8DgZVK3bHUzrb3RNGKAieuuEeGQ5AEJtaQ8JGSztMaHvknUfFbypW4FiJvcDpYwQ7evWQY65oCL9zFpuTAb3o",
  "key13": "4p1G1bkSfRaEKsg17b5hQQr3BmmBibD1vzaseSN5tzF7YSq5hSFmJqa59jvgvyh6LETpJ6gBwn3QdMz28zFnmaxU",
  "key14": "52YVUet5KompAULYUWhwg71SdZGLZWjv4tu7VdEHzdhGzyeaRxLjqEbpXFMv8t9tK1CGUcYdMHsRXLjGhR3x44pj",
  "key15": "XPpAjkHenjtjvPsPL712PZnYtvXeWeqCDHMy6nsvdZTRP71mTDyYn9wrZ6e2bfe5jvf3yniHoKmTF2HRRkEENeb",
  "key16": "3dpXmvYbevnDNmWTu817HRZdhJgaUpqBUu2Eu8D9heDBzejGjsTixUmUU4WMZpq6RtfBCL4cYU2R9bbUX9Qk3m9W",
  "key17": "5b5deGAbK1rJViRBWxrPyJbWpdarL7HTSewMno8yVfWtGyLVtrARiWn2snuRPv75MZeLcSbBF3Fx2bZ27vma6MQK",
  "key18": "5xWWzg3BwQYePCVKDpDKrnD2Y31Gnqt4bNo2mSUFUp5DhCqUaoWe7L8Ph1yZNbbGw4bcP7RoL1nU9HTWdiAAdRbX",
  "key19": "876V1u2PQZRdkKZwRSvus6Y5euYnLRtmBdkcQi5uBJ4Cmhmv4tiecZttnwy9pLiGpaa2iehLrTwe4apdqnSnudX",
  "key20": "4v6GKq2gmXqSmweHAiC6QESrXrmL8CZcm3u4d18RXKUD7ppS21NL68PUKiRPrgKopHi3UxQfzKhQa492TH8C6kCB",
  "key21": "5vXb2y64w7ENyTgm5rK1RRcW3QTJH3zhdCZtgZXndeBuCJVahiPp6L2aFqUZt9rG4rwKbZFpGsR2NZPWkmMsPyhw",
  "key22": "2VBmFMM7JT4YE9mXwtcTMyHYznoq6NtyormhDmrhi7gVpvxmQZAzowjacwXJRcSkAEnDN87eATVTZ8hfD3Zz9mru",
  "key23": "5ZPtXPBUfqvg6zwT5TPquEpHCYJ6iGZrxLX7ZhU7yYbZZkaYdjiua8Fx8em499fAF6iS1ymUZ3iYQg7vq5q4unxa",
  "key24": "3t3KxC2kGS4R3Ffj4iHcZGYA6RMw65EXFHy9nWBfKFT76hz8cF1NK26DLjZv9z7ABbDYB41TUHumupZTWM7AJhfD",
  "key25": "4SUnVtUes7Zsedfx8EUzuTtgSGCodi5XwG48WkfJSkWFS54zkdSXyQxUz8AGyDkC1PmvrqJCwUeKvWUy6njuS9jn",
  "key26": "3BRKZ3L7SrFcKoomyx9DTPYWTtkbTFXxKq9j6KfDCMHcozwD9fiVPo5uhE8hTKkLbUYcM48EAWWektSgAnNncypn",
  "key27": "4CgvLgyAtbhSz97bpQzBUjcX9auWUjUEnZoiq79XgScLQFshWnHAcbiwSzzKAsxSNnJBeHxcnoubzQb6mFBQmHMb",
  "key28": "62hTSHokPqGC9rkVY2kFjXbBF2itJ9tpVwLDFUhGT4Q2sxBW8z4tRN7BvZngWV2oUAA1KW88PwXFQ3exUtVPCkfJ",
  "key29": "27MzyWGvFFtR6bCQJdUVUTeZiH8uyr7zFhRKoMuQ4bCDWWL5Y8fDtRmNVNw6VNu2bfz61K7XjJujEBxeRuwoCkgG",
  "key30": "2J74vj3TayqCPMTFUfhgS7SuQgoitwzF1xkNMuuyxvRjLPwk1QXPeQPh5ZSoGMrYySpdF2i4W6SQZeBvFegUNC4s",
  "key31": "eQg6WVv97fJskvEPrkZpCbzPwk71vqqNNVq4EczDiYHzifF14EuCStpWDNdic7u6ApNfDFAumXrjDgioEGG8JJz",
  "key32": "2qya7tmGxDhrevYmMuJRn5hLH4WXUikMy11CFXBoBP9KCA89zntNaDGS5jBN3A8uhFMHBT9RPm7b5vmXHgrrs3ib",
  "key33": "ASpFKhgsFK7SAruDWweGAZZtZ227UKpZksK3Pq1fSC4pthoUFbL4hPfjN8rux2C5ZPe5eBT3oXAGdQWURuhgJpp",
  "key34": "5xZ6qTgckaVwBpp4cqN1LMSamJsHR1Tm6cZQH3HTnNswJUZEeBRmEm7opjAyGatweiMcH7xQ8Y7odxRY6LLobJTK",
  "key35": "4m8jAF6RADjSN2L7TdLUTzg6yKuXMQ6EV81nbwdKPnFmGaQpEQcp1zTnuT3VJvRJCMAU6hPZ8VcwhLStXvzwG4bg",
  "key36": "3EhCWv3uEp5L3CYNoAuXPTVCTMRgscj7VHWkU3zzaMmeXTverhfeGXUKAp3yuZF7XHuh8aySTpywLSamTW9K32PL",
  "key37": "8GSaN4Sk9h79qUUWQ3o6U6z94VYhWPtiSEUdk1EgcLStgU1jCJcwGCWxfGyMN2t1t5BPW1wgNPWa4uVEvVY8Cw3",
  "key38": "4Dp9dWcWKgxExL5DFbA65KwwoNh8nxcDgm6PRpG1SQEy3HUSemiQmxiPyJfRboDaTWkvob7hDBZALdjBsiqsxoSB",
  "key39": "4cQ91Z3U4yfMqJTYuPdn5jh5yvFRefVD5B1q4KdPyuXMmdDLrMhHH2neKA8SrUgUzCE1cb19U6UYH7fsb7JBFs8i",
  "key40": "586CKQuyok28x5gJsnSGJ31idTqRJ8wEp6Zsi2E3DkVSfmoGGz3qAmbznp7LQvnwMyHUry219BrDrazAXyAbmvWk",
  "key41": "XRA56tSeeWYUriQ2ebCxrHPSs1MnGAfXNjrzxatsopuW7t4MKtQKZ5Nf5AbFtSf9x5jytwhngCVNg1bps1RHuLi",
  "key42": "4NWiQoStKgNDNNoDddhJ5yoLEBST3j4QTCUCg5M7613n5EgEAu4VCSrBnqv3ZfHUc26GDdTQ1xa6Y9Ernf4owist",
  "key43": "4wndEeAhkTZB8DsNAsrZzaXY4E8WqsGDoC2FMYMgGWXtLDS4X2R3ExyVF1AkG8Nq8MzNmSeFkxJ6RRXFMepLZRgt"
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
