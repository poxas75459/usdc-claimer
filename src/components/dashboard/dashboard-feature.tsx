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
    "4eUVhjoHY765L5h7vqdWJT9pYkmMHpmXyZhAehC3eMaMbG3fCjmToctTd8N8emHrTnt3XEBaWUF5g3HyUap39QRy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NqfFERYniUbwFUkDbvvoeLfwMeCT5BkpPGCzqEXNsBUXDtiR3N52PgHCNws5TjnjAVCLNWNtVmWVHtoWkUTst1k",
  "key1": "3hhgJQkaYSPcjnbMdy8qdX3usstKdGyt8kA2AbUShMhBzCF8q3r1EUKs7nreKRMRQg4HpkibQqvccJQJZAsJ12ZP",
  "key2": "K5Z4ME2cXBECTidLdU4SgYXYYxKqafiTmJo8sLAGFHQurMBjY9DUBPRf6Ctf3hREDK99T7QhB2qUhZ8Yiqre9u8",
  "key3": "4ZhDPs9DkxBcm8cH7SrpGgPihyfEDYbdAd4tmAroNuuSSpZvRZ3C65AMSQmB6gckpw1cb7yrwoXgSuFCkhgikHGL",
  "key4": "2GbTkuNo9Eds3vtdRcHgirYHZq3sVbfgnLf2kU5CJDzdvew6EfdDeF5ATf8nzHHyvLJXk4B1VmetGLtiveMAAQZw",
  "key5": "534QumPv5r1s12YuvnxNYtQypUJ26VnmGka1GAe3TEKC69ABTWFd1AsRysAL2yhHf1FRpcQMReMx4NK8BUvPX5Um",
  "key6": "25dpLHEh5LYvNwxTd7rrqECgzMbvYZvWzSt32CzJtUyotNoGaDneZYvHKee5AbMHJR2muPw4ZbtQV26EhLcgS1Jm",
  "key7": "5AyhGzxkPiDsA5kDfQJCxS5be2xWD1DZKXqFgy9wgXPPh34WL5Fk413PkF87qHimHsCXg5cxkmS7WtQAp9dupsS3",
  "key8": "6n4NSgZT573MJmyKeoHYgZmjiLYRFtpKHQuhZYToZg7wSr2zvBjxrAshFWQan8YNk9AYAdb8PQCCMXUJ25Mq25y",
  "key9": "4ZCgfgSPHVG1sb8AinSiAGbMLK1rbkWZE29QRYmfXS3J2wH88L2xNPpJ68CPGHHpnNyXKSt5gvqxQpX2WhZYPZhj",
  "key10": "62rRGxHkipfadaCQwDP73W6m9WTu6u6yUUiVDB7ofkAJK8JvP8irZEz1rnLL3E6rPweReu96ziiJFaAnKxKouvzZ",
  "key11": "33wpjPnJSsDsZrnV5qbfEYEPHphXpN8PhYLGST194FttzeoeghiwisepWKQ6atJUp8c7iVnUYNgmKL6WzWpvCQVG",
  "key12": "4G8tU44HvgrPntYdGxSGjoamQEfYLQRJtdQbY9qVyZe6kkP1DjbnietVvcaKSJKD8CzXpbixegWoZqNd1g2rNCcb",
  "key13": "3RypPaiKNo3Ern6w5PSF9CWrwLb5JtjWSCThGYqkhU1i783qAgbG78A212gvtRqmKC5QHW5aktDH6mH4k9q5htb4",
  "key14": "5xfc36SfPbgfg3m8rAnsZ29MxucFa6G3D2j9Yo2hnvkPt25vWQ6upoUTmqH5XEyACJS64m3Ye7tzDYZNZFHmDsfG",
  "key15": "35XTCc9eUseJMVQRwJWCmVVUVPTaGrtw92ds9HnQnTEQjsgKHefaPZtiMuuqeXsXebFNcVDsN4ECCvQ2qwkVKjam",
  "key16": "aoFV4cn5TmAYsbC63wcnLauGjpYdHSWCArP6xFLHfBgff22b7rtD1QockDb6ULVpc4uvGV2ZkHYzvjc9dekNS8E",
  "key17": "sgzbaxJZuU9S44LqHNbjEC2P3BU1qozHNBCpqcycebUSAkdHCg8ddCDzT7FgmFAbsLpi6FKhJ15V8RhbZJfxUUU",
  "key18": "5CUMLhPW5Fu9C7ELjMvRX4AQm5bVVa8JGsQL6L9ScyrUGvzz3DihJtj1jVfJHhpwfWTmwnq9p4KDGTFfyokXB2QZ",
  "key19": "5GL5fqMtUhBaaty9gtVBMvavLKVEw4mx2rr7LG3HrTcf7fHUZsk7wY6nvPwvztgDqVyYBzyR9q88GWsi1H6XjpJh",
  "key20": "phbgVyERs8fiFnfbtoQrqUUr1L4hEtrkadhnmJfCE2FZTnSEna9QxxvvWATjY4b5WP8kvB5ZpjmgZDpa3cQ3jZj",
  "key21": "46B66mWcP26wSMJkFQEtyzYBCuYBL6RoiucNxamV5yD42MLfDceNKcTynsjMPN8QS1VmFih5YugHqwQMEF4PtLFu",
  "key22": "5WDQscuAgZfJDkSrp2x9QufrosskZ5DqVfS3srtygH7VCkhiu4UX6wAryvpkLZfSVCrCbEQwShN85qQfaGRqwmxv",
  "key23": "NTetrqqSAy8nMCF5AxVcEjx6GRzVy9EKWpGu5MkJXonJ1Tf1CqBGPsGab98mGHohF3dLF92F58rqLdMt4QmmwvF",
  "key24": "4iA1i2KH3ci1evAK5ed3YmkXZiW4nD27UZogouL33FkDnhrKYCts3RBvTVpDHKMwvtgJLkj5MpX7rcsbMd7XFdt3",
  "key25": "31ArTJEQPid2dJRC8GnaZjJscCNeMw8d62wRdK8VNq7Vyz7sKqHEcrdNZEEL4gjnSsDW6w7AAHuhNsHv2H2NUeSD",
  "key26": "5F71ERTAvWFPw9M3CweNVC25GgUPmNXsFZNAhAwmPJGs7AsLN2wwmV9vJMVwXkDdNAvpTjcuyjYCeZQ7K38k2zJV",
  "key27": "4JsUKWL3QKDgvKiZGuC5qYtUGyEUr4jXnv2JXXgvFbtMGrJgSZ8e3LqmdbZJPimmqBu5TenRiPmf17ww7LLHtekg",
  "key28": "jozoZETYWfJwNF9EjCLzw77kBhWsa3tzsfZfn5qPt1LdfPMT4hWqrh29pRWmcVFZseGYdEz7oJqikfDNm5NUd8S",
  "key29": "4esHmthBCNGLfnQrfe3yqPHKhLitkxbsiAz7xm2sB1LdYtXQGyXnW8jQjV2xX1Vuvg2YVRGpwjUZNDDosjryGYvP",
  "key30": "44fq6y8sUcWkquwLr2tkNfGYqDg577kf7HsTUFxoVTPAK8V2EC8opDw6xD5q25Ys8tD4xu8gvqx47rCyqR1TRbmZ",
  "key31": "2ecQvj7awamhN4JBwUdELxmB3DHYAr71iK1evibgLjBGc1Su14SRsihXph2HGrjPN1165411niAYwTKGaW6MYTEt",
  "key32": "KEdSLCdmE2BBYLQXeJeAyggTisE7QUd7GYmUybhSUdSddinbMKpg7cNJfhDMu4QwhTs7nymy2ynkq3U4Y6HCiQH",
  "key33": "3gBL93ZBTUcrXvARYPeV3ByJBL1zofqpzYtLXkbbxiXrqi9LMA4zVGgEEzCDyLJ4L4y64eb7Gv5M28bshemFZyvJ",
  "key34": "2ytEWgbQGGjcKAEdwgHXKA4NQU8UKtawU85TosqxPRDfXczGy7HkAQ4o23ZifMEW4vb4JfspYQYfq1jcLV3gBLww",
  "key35": "vMZnhhLwupwUXaKZXgbe6URd7KzsEdnnDUeaxuXc5jDUxmRKEs4mZALLR28huK9AhXhmUV9wAzZ7qBBXwUjRpb1",
  "key36": "2T1ywZeXwuPforQ3xBAFxJ92CpjJh84o6qacsxRTSjfEBtBsH5eyvp7MxxUdMqSaA5zMjPiLEZrqhY5QRBNXs4yS"
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
