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
    "4qUP2QGr7VRW17WsiMidsWZTEaiWRipVgECDAuqTioT4VQYwgyGZL9EiapgvTBZz9Gbv8oNEpVrDTP4LnjyyLceA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rzygjxeU8B65T6mJ1SVBFbKKUSEPcKNdBijt4tS1uidz8pbCzXw6PLPwSS9saN6WWH5LywazuBhFSMPfvpLGeB6",
  "key1": "3rud3bvwZ7b7eK6ai2r2unVTLB9Co6d8uN7dGSfxwiTSY7D2MdwBAgoWcdfU9R8Zv5cuDvibA3Z2Ff72WiSmtrrz",
  "key2": "4nqpCzRvfLrYHgNjouE6WBnfUJkUeEJYYrpoxjkxow7g3E1Z6QMhPaEwWMq8zaUce5n3PapnAuEpqVHCLAscDeCm",
  "key3": "3qSqb47ntKsZ1aE92cP9mniLGFJYMvrrQanVTkNp9QF4ogTKV6q69Kyikf9bLDJGATF5NWH1WHxqygebRCAqRiXP",
  "key4": "3CKMwEvtJQ2vygnrnszpu32K3kLrXaNnX7EjncdUCoF74PcoftC4Yvp42bgnTxmYQejMb1a1CHMUB78nsjpuMZ8P",
  "key5": "cQKoPXupxwUbSPZ813Gi2FARmAswdp56Ssk1pT7bJ6yPmFukL6FQULn7uTyqWMywBcYpj27iXGkzmYh84iyhk7T",
  "key6": "2XBKc4NM2nnFLnn1Q9gXvzKBZS1sYLnEB17NQxBnvoyoVAAHf3FN6FjkFczjgJXeYpTDGaHjN83vp6UFvCbSHYWr",
  "key7": "4Ya4yUa7a1W4B1coirqBCJPmuGJdCmsYaHtrRUdyXaNYDiDg2JgC8nyx8JM66uLJ2cCvutjxvqqQ1PYVgJKRK1xr",
  "key8": "3iwwRGBbbXybp3MxGjDZCfhSkHtfysR1hQ8a4k3jJ6MZ8Tp8YbqASLuuZTmsSeD2xanAfvVkJaXdCEGPYZYskA4q",
  "key9": "4jt8QonjdTQSeei9kmujG4myRaMDBJJ1Mdz9s3yRgtSFH81oFsxfqyDhVDWsbxt1unZcMpUxRXssZbCUNWYrrg7H",
  "key10": "4cbZpJpCYSdRYY7EsoyrUYoZH2UWw2dqguWaWhsjnm6EmJmeyUuhKzLZEGLnZkoFKyKBdVKati8jLxuMnnXdXP6M",
  "key11": "5Yz9Ztv4kZRCu9LGd5Wa8mF9sRbKUw9xaBmmvFC3yrYQr8c1AoWGJsie8Zv5ZTMHRobbqXCqw25YUzKP94TL8VhY",
  "key12": "3ecDhGmmhBz8aFVHFFqhgtXQvkhXvGJsaCctf38YVwys2aAqKGUUn8GJe9QTmkUKeJka1ypkeVMb1Mw5TgGvrJLB",
  "key13": "3VkKKHQ8HzAZJ3drY2yhMeoM8L7M3FvRUWv8ioYy8Yywxrx7WUrNgXcNriPyk1fSuv36VqqAy2rxpsxRs32Pw3oB",
  "key14": "2zYv1hFoRsuVQbDRWN2WCukb3JUh51EQqNXS4n3LizZNM4pe4qkZEkdcGow7NBkHDf7kMqARpLJvLb4QU3prDrmQ",
  "key15": "3ABwZMZ22rmDhkX946uQePyf58m1MGjamsbT9cVfyf5TZCXcRdsYbDTcAwMafn7FScUKDK54Hx9inDbiVzJwA4mw",
  "key16": "5k9QoDL8CwBaBepJtjJJteV4wRk8z7rmY3xRtMd76GTXXDkvhUWr9A2vpx8JtgNqUbGnzX94zvvK29shusDx282M",
  "key17": "31WtsrViuifB7EQVGyZyc1mwn8iv6w8rjugYKmDDeaNJNW3nevwYbwoqFi5VLcZYVztBgR9S3rYadY4ta1cHxQ2s",
  "key18": "5SeQjnXm6QBVazbMudhrHH9CZDJGqyUvsbUaQUiPomo58aJ1c8UfBqVgiw2cpM3LcgGF3DpEyZ2katamLQxEFwpG",
  "key19": "BzbApJdzJN4T6zuwAxEKkkZ1dxsxA3Dcqai2hbdd3S6ZqqnRj7zWUgKLpNBZj7GkSRygW7gov5zu9DWUNF51i82",
  "key20": "2M1ps22fZtoGtoxPPkkGqCnCBZKCg4PXxRPcQvmtthCbAQUskUaoRyg9yBGwCBYQCPExDZHDQKRUGGCDeRuQa1dQ",
  "key21": "4E2d189zR2G5dDhai3vK6giJPKhG4Wg3UAZr2zAgb9JYXvZuk4RrHo9pn6BEiKkvyTffHssdXij8hfMzyh6cgECm",
  "key22": "2jZD5WU3jagn8WoCAmWbu3se1mTzngHxdwCMQieWWsH87Dgj9hXv6YbAbqmhRL5Y3PJW8Be7A4Xy4bsPuLUZqzoP",
  "key23": "21eeSRyfNbHDJCbYHLzkUbQ7mTC1Gb4s38HX3ZgDZF4wzpntbgZ2HrqtFYWervn7mZnFocSHoG1wDePvWGSZnvYG",
  "key24": "Mqightz4y93FrgMmpeoFJGgGW9hJXEeUgCn43FMmaz1sT8RpSNdHgXpTwL4irXGYdVkPScDeWPWDYmMptx3Sjat",
  "key25": "4rxbJkSCnv8K2fnRdd8uGMtWsCXW4RjcdAK1FaHsqEXBDY8q9Tv3pAnyAWYU3UBWHGpcrLr17Sh4QjsfmfwxVCSX",
  "key26": "5Ciy5ktUAZN9oLcgeZd8RWHGdD4cpcZXPGZAkv9J2RxSaG4Rv7osPJT7KDs55jo7D5fthUAJugVC9M2fJkQAEB5n",
  "key27": "3viQHBibUakoEGi6CVnccwAPYsEu1FrGw7YBVXb5zKgWmpGT8xJnmpiDEkpWKmapa8DvMwUzCEqQwAz8XgGb8jzL",
  "key28": "4VNpG7DfCoHVw8AhuiXJYBUsvB8DZZZfx2VjA9hHf5DULVZXVzq9Kq3MvEFoCEYYHaFaXurhECvj2kwc54p3E1BD",
  "key29": "5NFi4zpSRJZvzZbeJdgj6CYJEHm8HjnpSSYi2h1DxCo6SYuh8DuFHdivEHZPuHR1hkx87MawX7p1qfk2ySbGvxNp",
  "key30": "4Um9uaAPDTcAKAvJ91FCLJ2FBz1yVUKbCPGYhYfDXcHSDDGpDJvBe5NchAHEDTWQ95d9HPrBywuFs5CU5cAEPu6c",
  "key31": "5qN9gBx6qqUfj3NRBQvFMmRYtYiZeVonmS8g7PDvprrENWL18MCkk53z9Y349QJm9h57Ln41U4BYPLkAxnPzKp6p",
  "key32": "4onbc2SQqzVEKpnYYf4KPpnDKHhMTkFLm6acCemuRPD5wWPL2qvXaNBEzedSFmRnAGc7rvPgyXmLxvULuVUYqyu2",
  "key33": "2RTdWA1BQcenNhCLoNKDtEt8MogrRhHk9wgGd7CAi55jmoBpQ4t2ov1EFBU1tUVCR8Fm86t2d58xKvj4wGtBvWi6",
  "key34": "2xxdYmoYdPRzzxuezUs34tQXYKWBYBHDp1YFSpEAvhVdHRPDY7dFKcS39zeSjPhSf5wX61ShkrGtD7d5FdBUdiCn",
  "key35": "2yuyziR2qBcce5kzWCbe8Kz35GJzhvnWEHR6wjWkDmTBAcRds66mRkJDvJP5XtWkrxKKVQe15FYSUcxrZYnoTYv3",
  "key36": "3H2pG7fMycDN9zSN1kvVp8VYRmqDiy8P7Q2pQC429UnSiyFSMitwVkYu8UGtKM1c62DDemLsVLfuoDjpSA3UMpuG",
  "key37": "3kb2D59SKjkdSQX38Wsscqd6hzErSAactNNZtUZHH7ezhUQ72tSea6ygaZFpGW7fzaVKpNX1kuJseAt9axM1nUta",
  "key38": "2baQ1XDK9McfDNF2DMPZBv7dDKt8om4fYY6Bvi5n4CgUrabnQKrKru2ijCYUrqMe4V88Lx8f6pnZXBPciWum3Fsj",
  "key39": "2EUwLMAzCZbmPx3SQyLse9Rn4TSExBcH3UowF87fs4n4spGBxaDMJv6vmYTEXVzL6QWP7ETLQQ8baGwUu2Ps285U",
  "key40": "ir6ebu1SbuPsKY7GEZnkJTY5WfZmPAcKcrjgLFEPStxUMFeEVFppo4gqTPjXSEMuoMfcB2y1kMbjSFGLc5dcybR",
  "key41": "2svYkK2fZJa8bL3vFD4yKw2x7dwLf1wLoMSaWoSgTGDaC4AHAudkEaiqXnXK2G8nUVzaqXLPXGvRV7JhbLd9F5Fk",
  "key42": "4GF9e1dS2PnbLKQriBYR5UQGbFCw713qvJjbkJq6Y4JjrVSsQ8kMi7BysxZaiX34Szh6HrgumFAQyFRSksiDaFAd",
  "key43": "362BjjUVycLiTzWKPFuTaR2vmRXjaxyyurmmDSPGaPcoE5zrhH2wmLeFa1Fmmo7j1pVEnDgRobE6KxRqxVCpbqmP",
  "key44": "5RthQx57doThh3Cywu61JfqVQaBzZuwfwiVH6n7NYownxCxPQkv5d3ugs1Lmhsq5sgDHBbyoQnAgpyGEGEfRrNrk",
  "key45": "5BQqDYN3BfMnSDpUc69XcRPPdTmdQEVjTLTbKWBGCzTiQdPJTH43iNH6hPsoWNKPj1upX73tHRDUYZcDZ8vE5mix",
  "key46": "5TDnW9PPZPWS5EqDqyyTcC66Aud36jRm8aKBx4ckhRRA1rkw38y8EAvbS8fbQaPrAyDGpjAiYrpxFh5vGFuGwT4o",
  "key47": "33y6n6oQbH4uuoC4cjZrap8BxXauh43ghKNvAtmBVtp1RHNBUzgwCA7tp2jep1SfnoSLtiKK8whQB8VU9RUfKHk4"
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
