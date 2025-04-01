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
    "36Z7JxkGAuG55MGpzMHHRTdKAAoAnnJkQNhM2ztq7GHkHFbR3Z3ZrsUvDo3pZorxRxvuDcM5SzT8rjBMyZ7uzscb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LYfRm1wTrY1WUGduLWuvDX6FWDuMPyWr4oY9RPCvVBR2ozLQa7yHQuTymiNvb2sjQ938iMNRmRkuQs7uF5BmY5J",
  "key1": "Etwtgdxch48CZgHABW8DgA8FnfUPVu4H6Qxcotr1xteqzbzden6Lw9no72NUs9UustZ4NfmVMPYmbKUH5pRhz6e",
  "key2": "v714pHfUAvD7Rsu6YwgMiozGpfNcvULENFRtSKbqZ7NyuWC1Mpnmhk8z4ALNSMLj8z5jWGsVmKCru8tQXtJssVi",
  "key3": "3xLhHQrx77FZPmVdb898dKyAcB15Uvzzg5NXwW2znCog7xFpTCNozw7WARnMYwSjfCjifQYcDjrhgdKkBDkiUsLD",
  "key4": "3zxou2dDErBjq7bqU35n7zsxcV2wTutefQKAapH97Sy9dLAv6EXBSt2ERquZpgscpmqQBGW5CaUaoYvnKK4iS8gn",
  "key5": "2udzGBanvYWA6qgmdaY8mmoNuuCdu1K4TWtkAU3dRAwWjZfMEwGoUB1CpETmqSBLMkGhByodp6FstcR7fbUQxC1r",
  "key6": "JbKsN55Wbgi17rBFvobbjchPF5Hk83LCLbVJa8PpoCxebfLritUCchgAmKUcuAzYMF2EpiLYRWs8qdxic8XS94b",
  "key7": "42NwWFyRMn6YQsapw3Xj24VhfCL9cTvuuqCzxgbkK5ar6KP5KvEcsgyXo97yZMsBFSvToRWaNSRWBtskT97uNgzk",
  "key8": "8sREZBUFAZtgeYj8PUebTytEgm7puXrvuFzJfa8KSnb1bS43jvrYhs5UvgjXv3UfTyx5brLDbwaLkro8CyjoCna",
  "key9": "5GW1gG784zmU8SGa451HDxkTCZU9U5abKENeBgLqdm3NwrxstMJEF3t8m2LuppZuSRFFHudvbSPPCuG1vJnQr61E",
  "key10": "48CbgngtHzGDT9d7eFtcSD6LebZKQP1qY6kxKVEpZN8on6xQAY2Vk1syQgzWFpC41tz1aNhLG42tw9B8F9NUMwMX",
  "key11": "5jstqVKsPEcB9nsm6DYvELEywjchJwTtbuupXzN1qc3xAHZpYnHQcQyzYWGjy2uugZgg6my2mSZFMo5BTz7pHN3w",
  "key12": "5FZ7UfnV718gDfjNssMyZPWMoH35D2mK2UPQPgPQPeGqqiACmYRxnPk4XFRHBg5bruKfYUQz64P5bbxqESeRs2X9",
  "key13": "3euUGfr4t3gDUMC8krzW5dsDV8cCLcMB2wee8wb4wRfHtqPchSX6oKM1uXs14umN37AyXUGioTYj9woTqt8AmeBC",
  "key14": "Jf6FTUaKsKgtor7crFPnAxpLKRPsrKQ7VuQGmBeuRLvdA3HoJWSWTxg6d9q1zd6TaUk98UsdBc92BKitHCMRAx7",
  "key15": "9nwivpYN5iL6t4XdCtoyHnXo736eHBYPoscWnj68M4FFrNMVdnfpfqpGk4ndrXneJCDFwws3zkkuKuXSr2FDrfv",
  "key16": "3KkQonepxXKFdNhrWYh8TE8JmszPkSFrQMRAj6YgGmFeMDioM1DyK5NxuJJb4ycQnt1s4fWwMvnwDibVQude6eKq",
  "key17": "39DuFPXfPRLhAHbL8nArD287JXUYHWtN4oJxuiPskTWB7oHjkkxPJfEFFvrUeixEGEMK51xqVkssZwiCxAcYuLve",
  "key18": "3ChXVYa1LRW3oSXmojQ1jr6QrcXXty2nny1LLShLHb1kpXNQLTgKM9aeG7LKdKFmAfBuUjwRVTjUXERjCuyAdr19",
  "key19": "3AftVrPiYbv9fHC7ZAfX8gaMYtGCh83Z6qqXCuyNkzCEQDnxXTzmWEWKVzJbnxB9DC8nZcjQx4W4EiLb7B39WnEn",
  "key20": "2VJK5qwUStjCmQoHF1kr7R6pvAPFCWrxu5txh9a5Cd1KQneSMtK9ibuywt4w82vL5mBHg1mME8dJC7zcT3p4t4ek",
  "key21": "3ey4Bd4oX88Jby33ifwgs2NZeRVv1vD7RYU7m9NdFs5RMQy3DqwQADjM8ZoBcwmwZEtjzcbzJWAYiHFKh3rXwRzn",
  "key22": "5f87jmLwrcngmLEkhV7WkkCUeLocipu1qZvtL7QyL4fTNW4YgaNjhCcexMaSLmZeugikW3vVAViqAgURRsyHfehJ",
  "key23": "5e5uM25jSGRJ1Q9u9V34NobYdQATGNdmHW5c8TWztyRTjqjdSFftrSAcdLbo98GG4ZunJYSJpZXA1mdkDWsDPWAQ",
  "key24": "29Dvqwz4k3ejCpK2pu6iBnjXE7AKwhpsVK8n6AgHdsziBNkCBX91cPidLsFqorrS2dxpBkPuVxwy3pX63GpHwJ3h",
  "key25": "4TLR2e82XVyCMX785a8gzD9fBNxuoXA7wkx41fzf8dx2Lqqk9ot3TXcpwBKuLYmNrMvox1Kiktwm4z7zQrwasNpx",
  "key26": "3BQjqZzVwJgjHmAjiD5FNc9YfmGbVmarZqB79jwNDDhuDGqTR9tgeCLHk8qkNKctsUdb7427oBDYNKqp9XZMY6nb",
  "key27": "3hN2wVEEG8DfYoL53AUTfP3hJ5BZYGGm6V5ithEDVSeyjxUG6B6Bg6M1Gr3EMta83qQ6eF2zjxZRwwTb4Fr93VMo",
  "key28": "4SRDGUtZoQsq8shnb8SUQhwU38wwjSfiWSh6erhydgtNHvyeyxAxarMAacgs3cLJz8JmzANGgPzRSLhgbgsb7NeY",
  "key29": "3B5crDd8U5UxxkJgzcFRwFEDHiMuy1C2JmzSZi3N9UuhNvnxGp39JoJySCg9nZMg6R9ULtKRFm8V85y5Q95i8TZa",
  "key30": "5fqF3rgqQfKY5m4uUJWAiECKz9GjYJJBJism3auPT33cmAr3GUdtHgYvDmJYkiFdzmDAwBFmQAv3EESyjX4MhSCA",
  "key31": "65owwD57yrDHYhuB2TViQhHCQdEXLMgDSMfQh9uZC6vkw5sNT5NEtB2LmN8rLLBz34wnZJWnmxbp4R9ypP4oUqR4",
  "key32": "2nkkpgT5FM9zPwS8v1zpdZQmhbwoNetWJnGPT1T53xhm9Mekm2w6VWBAiN9bWvURZ7cmdjbEfBiBASbJ7ZWa5yV6",
  "key33": "3ejfVr2YGUqRopdPEhv1ciCwpvJ5VhgjnPv9hmGxPFqnTNFhQKr488wvfk1aGapQmA7vdLZhtu5eSDqXtxNa9e6N",
  "key34": "4n7BXx9wnChCAZTiwG4XLxFFJTC8ohyxFAifAwQNKVdvTVUjmzgaFLpMJSJb4qMeagzd8PAnStLu34VGj5jXTUmD",
  "key35": "4vQnF3uEdw6KWZ6tThAUKhcMd7V8QQCznJ75RU5xKkxQ9KGZ5FLtsgk25KQyotcL8s82WoT6P9fVoxXgoZw26ok4",
  "key36": "2VmunniBLvYSyKffSq2w4jpFXDtdjXBYrwPVCc8MytRHd6eDw4XXtcmTwYens9Xvtxw1Pn1iWfRxpo6QQnHtHKdP"
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
