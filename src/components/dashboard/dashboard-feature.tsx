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
    "4At1Wn5h2JNSPt6Y3GdXpTX7hnvE4GFqMy28AohaX71PmkmJCx4YWKAoUCvi4pJb5bJWEryAppBsNBS8SRDFaXsA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28WGYwSsw5CJjTqFK6jsBaDEVpKCUwpEEJWFaJUESFbxfoC4fyno2z5L2cSjVikXLwTofLeTBzMbwukKxPvf9CG1",
  "key1": "3pzGSpxvdLyduXWGTcuTtWSoQGvuA4w2j5bWP2daDpzaWfQ3k8YSz5QMv7rtXwwdtRF44ezyyteeANcJ2f3cch6c",
  "key2": "4MCwgJ4LGQn9yGZLwfHLSJGThunqwzpqkmrsRhL8Sv18Zfb1nQ762WURW4GzXaai9u1wMwEC2iXLrJYogsdqTfc5",
  "key3": "2qHZard5wjppirpjTG3nGTxQ9kdNyyXprNSZ9LoZBmxrgdfFrxJ9WKMHbEPp1VZeautLFZsqWKiBumstXmX9CLK",
  "key4": "3Nodk2yVKLmSvz5QugiFR9XUNCWwQ7Px599DXnnDNqAyTR8CDwBxdZsoShAumAxBtjQupnkyQGLUwpbMdP2Cjm8y",
  "key5": "2nx2rwRrfdpPipC6txxgbjKb7KyKH91VbWSDbG6fWr9iGiSrhvGJkKS6S8YwXr9mPQTfg4YK7kxwgdZfGydvb4Vc",
  "key6": "5bwXD7NRWPSwZ1tHLATFJpUJDQEGvErJdXaTvT9SK7NmNUzNqskE5wguJL1efkprj4Tp2hAh6J9iX2TcX64FReqJ",
  "key7": "5XkdkkLjbzikuEbjZrGxSWj8frT2U5wbThYQgEBh1KjnRMdQU5kB1Nst4KQ8cJF9KpeEQtshpR3QDjfVx5RhvC25",
  "key8": "c4vrNtZqV3hkz26yUZ2MhLyt6K1aaMcL6xcUTF4EUP6x2fEBwiLQwk5Wt8YFK5XQicum8NJM2ggcWKKjcJC1QgN",
  "key9": "3iVdL5K8hEWBHmrmd7rBy2PYmAcspUz3BkdnbAmG9tyxzJd1ePKzS6vtuVZe1Lfjrk6t4zHthqVYcpfavRsmriSW",
  "key10": "5y3wE2UW8GhZ2xZDTtKvsNSSyHEzvsbXmf6XTrDXZktg4r6UMCZEGo6v2m44KLk9cYMrvM8RDNa69iYgCejwzNQJ",
  "key11": "2aEsm1BqT52SnspyqV9ZPdHC4SFRqHWXPY2FdV2352YrZsNa7N5JKuhw4CEh8J19VjKpJrLtnnAj4SSFEz59WxWK",
  "key12": "3kXG6PtCoDSSwsJapzJMiKK1xfgpysaMF5RDsq6VzuKgK5nTAEaaokFEe3GFSbctti34PezSLcZHiizHrdcGt4gv",
  "key13": "2b8Q7xhaRecauJJn6PxpUJVSnG6L3Xouo47v61M6qyaMgMapW1obSfsioaxJ5ypy4pxkTuHeJ1rAXyq4sv7Kecgo",
  "key14": "5Z2men6wf7o6puG5aAL56DCB8Vfp5wqnXB8LPrhCSPrjTdVJ2MN7j6jxJ87C5rJC1c4dEuUtHZ9Ear4hbPFE3DtK",
  "key15": "42Pq8WRm2159gyuY9rNqhP4LHsAh6Zgu9KhyebJuS9SPWUhiwqp97KKNcNT1dqAxR6Rq6zUmPtf9wSVALS1E1T7r",
  "key16": "vziXemzrm2wD7Z33iajAYbriaPDhgUSUjX9SWmL2EdZxy4r2dpvb2qTiEubGyYcxDbWvDw5eAR2TUR5TXVRn2sD",
  "key17": "3aDQCZaL6VXbRs6hDoNxgAT8N1wpuMEgrPUabgxmmjkc8kXbuEjTJnPNQoogoKXWTRvTMHtJYXJeuqYccaqFLSTo",
  "key18": "ipRzCQojyMSDcT6bDMsiMy4kp7s3mwjBtMCYTq2EiS3Lq2VPGtWYXxohESh3sATP5i85Bdrhq1uf5BoAkzZx5bi",
  "key19": "4xc8vR3vbi51PBPtdEkLjTuqYGg42FdcasLSVjy8i4T4YkW6o3FiGeWeb1ZMwUB5KKzuvCd43sjYWPsEdVuL5mHk",
  "key20": "5apTWhwUzqhZHod7GxxdgSUZhuY7LfuLcx3p7Bj2t3Ds9KBgnmdSRmQ7ddGnkDS1F4PJfVpKkdXEdvB81UneLu4N",
  "key21": "2cDNLh3qyWhsT93XwVygwhfU8Lj99YQVXbhspiVkBcTtZ8bxoWEsPavZQw3r9J9GBdiaEUvjXg4WaQtPchyT6iwn",
  "key22": "2iLprzws7Ff3otmNqWGm5zyVteFkae1bcPJswvEukUGHjekdbm6QX1FZXtyK3xPTjNpBxZDD6TR6XJPXTqeAYmDx",
  "key23": "3NJykkXSxpuCPJSwfAT1TFFfXQnhqHjsPoJpAjPrxuKgw8q622X4ibMSj39veWUR6BnuksvQtxWbPpRJADtKdDMt",
  "key24": "5n4vpBNRazrMkQmjMrx7SUsTKCXVbq2gcwEvN7xkjMqe8c7LiG7vmbeopUkXa6M47jHHPFC2dG8qVmACvo5CNnh",
  "key25": "5Ar1TXXLDVsJrLRAkd9Uc8rppaW4SWA4dRTaMDoZEjEHVexGbV75esxCzfJJLEhz3Q27V577PUWFLY2WxCTvDcEr",
  "key26": "3M9YbJ5Pw2uX6i2n1vLQe3zkcnTYvQ9yBaSCewx4xQyjMojoZ8pkBzJLBg81VF7PSeMAL5V9ZTsTfwut3BSJy5Tk",
  "key27": "2NF4goEiENar89UmepVWcyVQuAUo8tmbTaoPxyVm2VrTHRtdPxH6wFcY5tJpKFvbvbSvpG8vzmR24MRLZ8AwHK5c",
  "key28": "125rC3QkGQ5ZCGRKQKzma1FsXr8942PyPQi6haTjyTUc5KCCUeVDyQgNXuZvaUSs1MJ3jaKaHCqVyA1EDMAeoXzk",
  "key29": "5RfyGNXT62UV1jPg7iKCFzWkxLsd5dzbw1HmXwpW8EGC3hTJ2zJaeQW9kpjter3FkVj4dwtRZeSVyikEyqp5Vh1z",
  "key30": "3GbsDh1TfumaeJ6cfA2HvfGC6MyR29YR6ecJtsQx9JtmzWphW7dz79JHFpsjcVNa81DNqsXgua1bfuXkGbsJJiKP",
  "key31": "2uGFEoUaBLGrbo16XZEpgn3iBY8djuTkNGN8bEY47NUaZf4NwDMd4Jp6mNVqJ2AqbJcq2Ps96nKD7VwvrcVf4TEX",
  "key32": "4QXmrWF74RrXWkxoQruUwrXr2VuCvLcuhD84fe8QG9hdPG4xP1rLKfiYMDrqMqsKnAAgCkUYEEqR1h5tEhe3pD6U",
  "key33": "yMoteUjVjqgr6GZJEExwmPH6a5gsiihwcLfGz3peG5RWJHUZZzvcpQ8nPqLpDcaip2CGkyRZ18YqDR3ASKzRGUU",
  "key34": "3GpVMXoijh7srqaq8Nos6ZbfDxraNLxcyJ8bqekPm2xy5vQG5y9jCtDtSRGMAZd9XxSucXX91aTn5KXy1hG3hNQL",
  "key35": "42bXAjCMhESuCx9VLv1b4f6pzywJToPwGMdti77mL4A25zNaxhoxuZfwn8WAX6NuvBczBb2kdnSJgyEjdjpnyMXa",
  "key36": "2Fhq98y9HwQRMLwS7ae4GJvw2zpoFXz4s5WiCuQ6eybVn1wNwHrm6wqiCoj48tQW19pHTRGxHqF1bpFuRooKandK"
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
