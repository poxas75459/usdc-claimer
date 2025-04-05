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
    "KSd78sxQWebwKF9y78Gzv2Q7oqm8qfe4DSorQaQFsUpiFK6EaW2Zhem5uEHZV7VvxKL1R1KwqmsCu3SU6guf1Mo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VScPibGQXgRpU7WBU664hkrs3tJ3gzsyg4NkXZhwj8RaDA6paTstfTiHcjT7BGARWxmTjnQZuWtD9Gth5kBAp4f",
  "key1": "3ff3qEdoBR4ozCocMKi21MsqVjoG8gyYbnee6YGKobfmAnrK1Tcnkcf2a4Bb5DSvj7WVjm7jJygdof6zSza571LH",
  "key2": "21EzHQZntKDfYDAKDu5RrhUNmDesqyeZhRSR3jYiodESaGxeRWBgcVm8dkkaeZeHLtcBprrnreJn8Pnd7gFXD2nH",
  "key3": "3X2jDGmLXc96kV9GStv3jgyNuNLu1mEk3RVhodryHmka4swysjyiAwnq1KR3KcX4mr1Q3GXHDuKGRYojRsvM8NF3",
  "key4": "5TEcWBpFzphQMf3VmA45ibTmvY5tqsGqxEmoZJxMNrU8CE7ZMJNyrc5SWg48eEEDMkUBdSrtDxJ4Ghi4Uc4cxa4Q",
  "key5": "2DWDUnbimPtYLbbGdfAV1H2m24fsDjT4CrANUX86jQYYUoD79SBDFhbTbajU24as2xbgpFztS5yrN2JJZKmQ8f9m",
  "key6": "6354ExMJAMkXnNNN2YWQh9DbYm5HCFKg82t62RA9haqaTCaDe5togb4Bg2b5JZptDCXn2oAk1XphbLuZpuBKEbDm",
  "key7": "BNyF5G7LXfxNTjak2KeQ9BoHKfjSnS8686L2xKLWtXgmcs3FK7Mz39wCZjqzPF6HPKKx3ERPyAZGQ1jfE8LJUsn",
  "key8": "2wK63AQ8VjsCx5fvRDCEXEorqBxqZ9dCAjGh2kkeZyQcizWLrXmA1BL8aszpj68N5K5FKUwFmSce8d8pbyhQBzsM",
  "key9": "oNXLxgfBuMit4pDxAVNjPyBZo9K2NmXuWioSu3Rts89apbbRprY1pJ25rRcHFYn543xdJf2fEM8j3iGtFPoRDBU",
  "key10": "5GsSmRcuduML6dtB4R8Y2wfqKUNq7Z7atnu6bhofvd3BraoanVjDE1HhipNFoGjP6BF3bESvxr1EaFZBc6eG8nWu",
  "key11": "ARD9MWJwRC3Ma5tUBSQatw9DoJv2ZX4G7YUmBTXeafwmZcbvS1G28mEXDLxtmeLHv84aE3ZBpZ3R7bUruZqQRFT",
  "key12": "4FabwBwm3LpUPWfqMFxAjdLTuJa1ryVtrvGtZANiX4UJJUxb95qqxCBYnMthwWGqwsYB7Gz6te8XQthJVY1Adfgz",
  "key13": "47Q6GBu3vR8sNC2XwygRM3tG3mnHxAmyteSpK9VRq6Zn65nG4vQ6Mk51a82b4LSX7aeMKiar8PxQLFBWJUYp6oop",
  "key14": "5ofPDNTV9vV2GpFwk5ooZmWAzTyQyyfSUSsFVEhKWdUipCK9rJfBwDoBiKXBEQEJbcoTfjGsFCnU3qCNDdW9SuBt",
  "key15": "3S3pUitXoiMGMG9imioNeeWzcRyqSP3QEGmyU5idWXPpVsV2Ja7XcYtnjXiShwrghQxgPg1MDZvbeXf63pS1Ssu2",
  "key16": "xYkFLJnCkF42sAjka6tEFytzXDNsZNde4CBwuXAyBYJvSgFxJLEYhdVtFRFxEMJVjdRtgxbymJCGYDHYsDYNWuw",
  "key17": "33PCksquxYrmUrMa47fxFqhqnLg1o2QaFmH5jYQivqeBSZA6U2uD6a1BMEBAhrLZGRxMR2WsggyyXTGAsH1GnLhV",
  "key18": "sJXVutMvYug7KybbLAdqbyepLgMvEMo16vVNMBGoQpGdKbKDuFGVtfc2izvXs1Nw938VrfKHyJnhMNJEWRm7GEj",
  "key19": "2MCQoT6yijb9JKo2dB79RnJyyGZYJRnEsZVHzkBQPAFpu4RcBb5QJUPHQUb6FGPTveHg8WBqKxdaPaauDbSRSBs7",
  "key20": "5haT9exAX3aB7kLWkZECUAnTqW6Vr1514erEPtjQPA48MXW5h9p33aUuBDprXBzPLvVZzyqPu53yTKhCxZgvd3tz",
  "key21": "2FjeQNpsbdLUzEuadFpN1w8MHpaJCESWHW7sMCsXF74p7FVTmdgPoa4pLBKeRUMa61Qgfp9x81VG92aGkh6bLPZv",
  "key22": "5A6BwFvjc1HS5iZ9qNV7pFLdnCjX6FXW9nNaV8tjkp46n4yF3fEzRXNbSjkrd5noHKEcm8koPXRJ9VamuqyQyH1i",
  "key23": "3SQ7WGX6C18L7GvauerkrwP1rVryqv8o9qjx19KDE3sHRPcKVQLJ4PgZYLxr2wCnFaicUykSgS8sSZDXmyGPGzAr",
  "key24": "4pwkdUh41MrJv4Xbu6ZmnDrZvffmbp28uv9raSzfSqCvrMQburrSVZKue58QzAcrpZez4Nz7mGJKRfTDYm8wmMLQ",
  "key25": "4S1WDVzwmM96BG8z4hgc5YLwwdUFBg5s6mX3ZPMJVPCzXccosLc1JsdALMg3q5nBcwdZjfEMwaZEsAy4ChRdheBC",
  "key26": "4tjRpjYpTzFfDhYQXP7BF3epDjsbmuCzrjubsfVt6CZnLDM5Y2bXZdekuDHWRqZ9fKeAcvrrDsimdFUj9pBzh9VC",
  "key27": "5NyYU2W8dARTcy9FbGxnWxQePaWPKxxF8XUNDpezJPnrSbdrErgqDUmg2FEFFx5rhFNHNgBu3rSCq26sVGNrPPGb",
  "key28": "2cC9XbKJAsMiNsu61mijcrz5Lr6jbVwiQv2Mzt8fWJ71PUzJ4iRrtwnQpcYHUdTTyHyqksRyMTM4KdaJXn4Z2YzF",
  "key29": "3MHiKyBatbmpXHiaBaqp1Kyi5RPVzXCD7vExDp1hyz5H29bauGmg4utsYvunsTXP847UhzZbdMEnMs9xR6DnwXLM",
  "key30": "2DfGVaGfPFB1LWD1ZEvTMjQ4FfFVtRG4nk7tnfXi6WdYkaGUjiyzaX7V29N3TDgLUnvwzhRccsv5WWR8RUSdQRxU",
  "key31": "4bhBv6L2wDwtrVrjY3Zzc1HHw8H8sYan88XJuLcXyVhsz7ArzND2Sj9kakgqA7HUeTDkrKy6Pkwiv1bLi2gAxqdN",
  "key32": "taFoVrZH6E6wgJhkMPPeJFsyvPVAD8v6xGG5HbiitTu2FtWGGvSRunanJzKrNvWHM9v7XeokRuGC6LeccngYcVx",
  "key33": "9T8tHPyaFPcaRERKAsCvdCzRKzHXoA2XwpYbbnhy62sxKz2YZB63eSgVkMsZ1PyiGitKCeEA1bJjm11uzpkJZz9",
  "key34": "2GdYcN55jQeWGmsWMUvce4H4iLYXU73p2iB5vNhmeK4rPUKh7XQX2nciJdFvr3qwYAkxaRJ9Jh8JFpmxzdtHBUsb",
  "key35": "4kzNkUfgke2w2y6H2xjbX5G34ixF9EtrxJzPdqw5oFbkxUSoeZ3MxWGZkpKLnX25kBWFZX3YedpdjMw4QKm4iUN6",
  "key36": "3kF8NT1A7iz8tRm7sqa33N8SkE26jm5W1MRvT5PUULFzPvw63GBKwNTkpW1khYpWu1riDyCyyi1SGu5GP4trnqPv",
  "key37": "BHznXEPZQz1b3UpCHRseWVd74V4otR8zNPzzsRdzLBCMeijQQ3AqoDdYtETcKw1eHXwxYjSjLWL1moZJdfkohbT",
  "key38": "5mQkXLv5SZnWLmF59u3x2dJBq12f4ouEysEi9VNfku8LqF6VWFr4s9qzgr8dE7N4aLXw6uFYbF5kifjssfTejN4",
  "key39": "45vSSvoFAvuPtmmuKijwg23CWWnJ72oY5WKqbPTTfBybYmzb4kTxSsWtcSVGs2PBWL3PmURiPy6SYgjxxfNp5yf9",
  "key40": "67UnDZ8f3xerHbaZSGcu1DpjxErCrfUpxFe8ykaaz79a13tsePcCFxcytT9Vpn93gQDgK7yvjcxugCfoNTE5v4yF"
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
