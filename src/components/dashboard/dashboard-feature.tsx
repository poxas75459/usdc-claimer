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
    "2ZaoP1gUBEvnPP52H93CnuWZYQcRmtVWtF2kZSd6ZLAhwdW2nyhGkAvrahPXDe1YiqEpunQuMbc7r4seddywPRJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53CGGAUtutqmHn46o33R6gWrPeWFQR4ypTd45wdeomoCot2YxJUQCDtxjVw5q8z8oDQgHi7vY1r23xUjFNc5rXwR",
  "key1": "YZBxPmjvcujsFeQkebfQekaFhPRE2FoB7EQcufKSadwM1GmfHXftNrtxsi57MoEP5C88nVEQGD8TV4X7KjCjG4q",
  "key2": "3zF7MqPEWu1Y32iX45w4uERyATLw33KvEcCF8CVAYcBojT26nK2ijvQwLzP7UVwLLnZV42qkF8Db29GeWriWWrWU",
  "key3": "poL1FfLE7hBZLH6t49bjQaxT6eCWg7Pvo2G5uWsd1ycBp8ybaFaPJu5CnXByA2k1xCQTpC9KwxpZVxpVGiY5Ljs",
  "key4": "2dsXzd7K6sCiLBcKeusXvXHkVxewEF8RJvC51TKYX9A12iaPnXrRZay67r3MZbURULoXQH7pgBtAMqXHEbje2tKJ",
  "key5": "31sdJyiskrd8xD3qBU9QnpxiSKo6etXgGu9j2BF1LhV8bnijyFAarJwT9Eom1T8LLBFidZPQhANzA8u13Etn498R",
  "key6": "4Q8QaRsWckUqZwDJv6iSjJSTN58LWP6Cq1x8zvPnw4eiyLbU7FcwRxC8yhPGSH4j68vzRuZWEmGSB2QMDLJDLaWj",
  "key7": "4yo4GRaSkRXBcDCh3xaYG39FuhRm3G7tnh3PUhJ6DtsYKtjwaxbSAjNWAbqiTygaVgGiSGK2F8GpbTEhXE7MKTuS",
  "key8": "5pciY92tzbkdqPLCXbNVPvhvF4NzF4mbrhFBSNyRMpV7GtLqo1yijGrYBEUhHkbzuW5RPCquzPiesYicRxhWdRje",
  "key9": "pFwZfqmUgmgkSbSuspHU5cjhnoCKkmwnX1f8wedTpaLSckYD88K1CKGvyVC2d8ncDV5EnN3B28iZyx4LdSk3CZs",
  "key10": "HZBGAPFtuEKgeV9khdvBkU3omqQaMrTN4QQud5jva9kr6Kbv3hnBoioTtpxWpaMNm4y1X1cRZ7jaoqn8qTWMR9U",
  "key11": "2F2wjc9Hta1TxR8WLh9dsqbtb5s1HCYwu6VqmqesomCiS2LmL55AE8KBXBzFL1BpCApbnPeXtmsCFPiyYzdxh8sp",
  "key12": "4cG6YcGyU46XAYjsowYznE4QWTWWkJ2Ns7rCLmWgz4HxRr1cKCteyvzwQ1xKAj2kxePrNYAHuHvVoWwqsqLpvmrn",
  "key13": "2LHuGskrhej6YTJv8mBqSUNKaPQdAsB1AL1aoA1ACgnsjJkjig3W3BQgpNDLZPNBpiU5K2B5yXzb4eT9B6ybQZAy",
  "key14": "2R3MoMsNJ4wV4341CuuxCvF4mVUX16KtmQ4aYjv8qpBhb16Y8tdjLfaSHBxWbdCuEefMbYGGA62cT853iU3bcVGJ",
  "key15": "27GkyzTbsjwAya6BppndnBdDwZw6ZyKdLSJs1MmVxXL3TkAdkAebCPho5Hrz2RcyGyvvpjyxhzaFM4LgU9X25tir",
  "key16": "5XGVUG6pVmv2S94qgk7ECqaHWVBFxbToa8A9ymXkQbJEimyQLCuTyiVkVgfmuGSEY6RpZgW2a6eeg3v6ZF2dMMeE",
  "key17": "3A3zsSLzPR2RPjkb9C1ViQPjzn7KsRJJMnPFuyy4Kv87QmSHd5LFU1mNr5srGdBiaJfpAdPpLYHvrpfrrLPUsfFA",
  "key18": "4WnKYTu8xkwMHdoERbEokmYsY2raY68Z9Eb2MhyjT854E3rZ8b4P3dk2STaJvNPvzMHcCZc4YESgeNk88HV22DNo",
  "key19": "5876NEWap86y933X6sWcfCDWhUzEMC9Znej9dnybfLuWc7NqBuRw8Gd1hF9rL9tsno5CQ7UTTYkjxVhcTpWyi6pt",
  "key20": "3neK65hiEhGJQ6KCjfzQGPZ2fUpt8KJ2CdHHw5YUDVKyG3TDx3VhKss5PGLDTmSpDTkF15poTDPHdYrE9nkqZcvD",
  "key21": "2WXsyGxSTGiEGGSEyorDgARQukeRC1wZMHkSmTUXaKyfxBaN5N6aGA7xAKfT6dRQQVyjpDVY24Hy5e9B5xHoqihk",
  "key22": "4s6UcLaAVhY44u3DhzYonnoLqxEwFSiwNPxRbhvQv783crFK7U16hTADMeKyGYi28Q5EiYnkRmERZVtj46wphBck",
  "key23": "nAsvmA8scQjBDnGReUJxHrPpm8FBAhorjny4ksUoTfozkDTsJAG4ZAALcVwZziaxo5cF3xT8gjnKK2yWiQ3wMyq",
  "key24": "3K5hbUA9vdyqaCR2r1GakN4Y8hWtdqnjkCggR81R72tdFtrQv3nBdVz7LGKG7TCdBCVFcsnbDmKRX366jpST8MKA",
  "key25": "5wL7VbC3PWe4eH2FE3qSTNmaSiSWrdrUH9RLc2jzR4qi6syQQsLBmBxSR3mC2fFqkoHKN6WSwUEMkCaJbL4jNdN",
  "key26": "3MvRTBTLYnCzNc33yDmDMsaBjDZqRwBDHWn8mvttDAarcd7Js8rb33pZWeKdVeTFH9BhfhLV21hARxS6iAWU4xuG",
  "key27": "QCcw729DwwTDeKjTeeqf1tU99CpmBqvZYuzgRE9Hbfnz1GqDDuHjatt2xFVDmZTSmiVaCR49ywG6gCp7UzXcmd5",
  "key28": "Pkb9bgeK64JKD37UXdXDoV5vNULARNnLWdL19DKS9AiCNcakHzrEZ9gr5apcxPnkwp4D7qZbsch6GSnhNvp211V",
  "key29": "497UPje1c5eXXSSXxe7nXyNqHCXmXaDdsrWsCwMuzkpgytiv9tj5CL5yZr8Xfvuf6Y8cXATUFxTSxQfupQESjwi4",
  "key30": "7N2GQGheURD9oLCbvSWqSTxtxevfw9vepnHMK99rgdsuiFkWV93TCx74A95CJW1PM6KbRQt6r8ukL8VwbXDao7c",
  "key31": "44EBuFZs6zHLrS8mbeiUTKf3PcxYAiSevd4udPvz4JtVCLxH9gxwkcjVuULsGjnNyumC1mvDidQLd1MbrA5HDhZY",
  "key32": "3iKaDz5jmEdVe6JEmWA6SM5HMywZAaMQ8ANj7gCjksrMUfhU7FzeexCDh8aTsCpAYPEbDhBfWGqmSGasMd2KT1KR",
  "key33": "4hdACRHVeVVzYbKrDQh4A7qE5pPx25Tr47YcbmsueLM1chgUnmT34xXwvUQNbNtBqP3p6cYtnhvEceoYsNiqy7UD",
  "key34": "32kyPiiuSPbe3yPc7ha5NwcrDv9JgsKeQJbjLc4BaPmFfYQWXV9DcFxDfpjmj2drQBGQsPwbarpAfurfSSKAVXt4",
  "key35": "xdxbt4sTi9rMemqT6qvDVNULAYkGMFqBTAmEWhNFAuAT2tZrT1q9rqsMM1b8BHAQRSc7MtjtzCB8EJ5UUTdJQA7",
  "key36": "5rDMj5QiM1n7giGwphGPU4NCvTH9QFhVTVX4eHspsV8pRRJ629tdkLRpnbuxLczaKTwxjozB59jApmP5VGQANomN"
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
