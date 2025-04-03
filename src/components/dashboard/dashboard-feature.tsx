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
    "5ssRc1fvHzaRcnoanPLfyevGeRV86ZSQ7qvxWsNcRz81iuUKZx5f5n2ok1Y728iX4BJV6JzruTYTni5gqL2Uir5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eZUrts6Tru59YaZQLpoz44bi4LPYnHL3Ac2cQQKAsR357mDE22VQWMJ6Y6ueBkhKeeBLQs8bd6uokgmP5LWmCm4",
  "key1": "4wRpJ27eHEEB8mnPFc1mBZ35LzC1G85AsJZUpDCUWpbdYvygJjQt5NQC5ujcvkvHXxri1JrbqNijn2RY5aktw6Xu",
  "key2": "5g29JfkuscEiUa3KVv4KiJbPhdmuRKe7Tzz8AqvztTaGLLoSs4QbFwpZ38RxukVV1wz3W9sDP7Dvi5jjsps1AgoB",
  "key3": "3w4285c4tx9y9xTSeVDxxVYNuje5o8u8ygJS3BwR3tVRbRpax8MAcZPAThyWh4gihCq3y2zsHmzVun4Sm2jbczcm",
  "key4": "dm36oJ2N2XhVZfH3Avfu6gnPxJNs8cQ9UNZXvsBG9cVzvCmkHyp8DzmFeY9HQcTNkFryTDKG3ofMrxHGARb5ojy",
  "key5": "4imZvNkRKX33rfpUJRH9gY7sGQE3gerwqkvn89dWmc7MibjHEJxxyQLTQz4qAGVFRs8rrExXP6oZEUkWHmik8P4d",
  "key6": "4tz6MhyiA1RaPAHvnTkmS3Yjh4XFYC4epviMoJcs92uMZf6erwYJhtjT4veeu1ZiaVHbJLQ4vzKnH6ef1NV1Bnxd",
  "key7": "HyErZ8AgJQX5nTnAMbpq3P9tfsqocCbQQxFJ7sGGm9PM2W1T45LoUu3GYswAuZX7BgjniLo8PqitqcwtrWMGvKJ",
  "key8": "5eKFxXyRYivQFWWr3oxDpzdejTXZvihYNPiaFzPzQFngYqKu1g5StMFQkSMbhGxg6nHwkVwKGVF1RUsLTvEjGKKD",
  "key9": "3Yi8cAdf5fpFW8KBCC4GpU9JBGmuPiV7KGs16KcoBcRPeGpPG4Brwq8zPBr1tFprKra4pXYCp3fARGFGZDJrfLje",
  "key10": "2zZZfGhHJ6YygjtwBx3w3pRkdBsstHL4WJnCrXhpYSZi3SBoFW8Gi1NqYiExE5cBWAEWevm2Juyqg2kR3UGheJ7v",
  "key11": "49qfZwoQ1S6byMhJErhystGGiq6pe3YZt9EZyJFVDkqff478fr8GCgw8KZrtZm9NuYUvqpcB3YsigHbYuTTnWN3s",
  "key12": "4ddVjWAXxTWhtrxXEdQimmYgBCpZR6vNEWYCAPDsS5Cg7BovZGjwcsqNgFMBQgL9DaNyC6VkhkDsHtJQPLhB6CFK",
  "key13": "58EhPk1c2bHS5A2X7J13mSbd5nfdcsz2Bwjdrjintbwvbs9k7kWgr6VpwZmtbBqyzm3R4LaUhAwajcuEQFBXrcZp",
  "key14": "61yK4f9JfaJj3wsL8744gV2BGw1WDtD8beF4SgJg1MqGR4BYTNsPQwAKkvuHovXHYbVPHxaqd5gpbVAYoNS2xRDf",
  "key15": "WsNdZc1uTm4fy4C4YuLPhXNoV2tbqpRKSKfvGcm9CtJ62sDnQXdx11BqxiD98RNpCnYf8MF2tB5mRmtcLjvkCXr",
  "key16": "sYBkymRWF8Moq7jsjj1mdkpE6XMqUmk4JG9jBN2rG7zjHggJkTA7dvPqufBfMs7eXjTqDWzk9XDQMi1yfzDzQqY",
  "key17": "3uvD6z6AjiXx4r7P2DYN8vF1mi5Pb6vd3dsVQ1EmPgpMsWRkuFdsuKYq6iimRt2K5c2SkafgmR6Kq3fvvx38zbHx",
  "key18": "4X935uu5Ubv66m9Wqa9tsr2uwBbD86aLDUuhnLUuccV8ddCxcgV3yTYnboivKVu393WeMKnHCHdwincQFAf1KDPZ",
  "key19": "Ym4hMbKMYHHSqPvaqPMxH41RPFb77eVdQjiCM3znbUHhRGGgucGshs9njBSVnhV7xjEzVvqbo2vzWaco5ge1M9X",
  "key20": "2hkvoS7ApdKoK4riDjbFaHdzMAdZvXhvtneUnt2fJzfdqnqEGvAyht9CtYAzrsNPFQwKsozQ1M9hVKMSn69AihQ5",
  "key21": "2SiWiWu5Nezn5Md6wqdBP22en3BNmyv3TanZ5KHQT8xsWr557K1sbgTA4gFG1tDDCoHsrMFZuQERLJLWT1fag6rv",
  "key22": "3nfVa9nFviHpaCZTw4fBEEZV1kCoyjNjQPr7vjGkHzx5K2GQFppAoismc4df8MxCKqaptHs71JWo8fWKCnvaPswu",
  "key23": "274WvNskMxm3CnpqSsqfKjZ5zYrdCnSMWvTyt6XaCA2HryGUwy7mBBq2ZgvUmZJxib7D1cR6heCo3En4mfzhABMp",
  "key24": "4kzhidu2KnjnLpfbcksc2b27WCP1oM4Ln7YuDZR16kPm9yYiSkkfE2xgzZoMRHR7XfHuGNfq5HyjrLYNoLHZ4VqE",
  "key25": "5fkp2nWtXndF9dPhCVxYqQm7PC3tMv1HLbJXV8jQjVRTU4RPeQkdL1nLK3X6zMTqehdKvUJ7DMcsWtdVL9fRFFNg",
  "key26": "42PeDCHs9nhNYsYvCYxnHv95Nps1KVnK8LbZ98cop9Lz19N23F81fP96xqhdCxsVHDJKbYyw4PTCvLmu5pVT24Bq",
  "key27": "AmBxMrBFhSquGnhbbH1frE5B6aDc46szjr5YRm5rUpAaNMh5t4Uqumx1qFRiTgWhxDnBEvJZUjgKvNvMv7KCUoR",
  "key28": "5WiGhiXikrkM6kSP6LohEEZWz5EMeJ1SwwKjW75S1jEnCc7Knk3HVQfiEsgWZ7K52nMxXH6zR2PLNruRPoAKHacx",
  "key29": "5zHUyZCdwzZoAr4rYejY4NB94dzu9veykCiVcqFWabKu55DUdz7yeHXB2Zm1iNtjcMmBRbjhfe8aQQMKo3ESjZtF",
  "key30": "2cEH3itVg2ACrdPDFY9XrW7kZWXfFyDTcjXf6BZ4fMwqU9fsEqHBcvF5NG3UHuzxbLC6ksLGyAz2XodLNu6BMrVd",
  "key31": "3CovpxD91aEpHZUELZ6whgYMtL2aUkZU9xFfKspgSrXXu47L3syrCd9t2yHproVqAmya2DBUjK1p6ezjiUXXADHp",
  "key32": "3ASSUtUC3UAkXSNYya5E1nycfc2gnbrpsBc729un8drEjjs5m8NVTGQvic6cq8oi1XtQeXBQYBL2urZ1fDCEtxmE",
  "key33": "3iLybeKA9uiigFG42gPvA5jWjJc3axPBjYupPH5ubo2xeELrGHTncJiFK1zzFnh2NXA3qZpQannvWnR7dSAkuzP1",
  "key34": "2jn1mENmiCoEYqj7GYspoofjzKgtkdht4r1fyEmVZfV7fiWixjm2EMLRedoWEgC28HCpaBmQ12fHEH9mdgw8r9v5",
  "key35": "4tqeFLXzkSF4M3VJw7ZnUmHv9JeF1EUNeoqkk2brYpxh9vFhBJ32WHMab9LDZ7ftB5HXLqXfMvXhLx9T1r4yCYCV"
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
