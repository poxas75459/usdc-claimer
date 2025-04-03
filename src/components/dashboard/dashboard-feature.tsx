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
    "5CpvZR89vCYg3HeYYinXg8DMQYsMU29aZyUR1cEWJUN549ccj8QrVW7Ru4xiwiC5PRBdBgVkxZ5EQi1apVRn91EQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JjHfz5qShJiJdGZvAQVR7RKse5KiuXDxum4Ay1fqFoc3fwAa7DWF2xKY9SdFr3jJB1nJVL1d9UPfzwnbtwAehvM",
  "key1": "2rBs859zo4KxY6ryyLLXqgXy6MuwecNpsr8iNPKygrxjyYJNWZ3fygWpJU5vvPExsrgM7JWdTTJwnAZJjDH5Uchb",
  "key2": "HXYh2YG8pH58qKyLATo9GhVnR2whCLaCGJDReN9sV3sRyxVe3Y34zFTGAcYLjpptopRqriF25Wrm5vEHYxLn7dg",
  "key3": "qfpSzcnWkXAjPmZ1yvvov7N1E97vMyD7yCbJaMizgcvcjSGaNxyNeaNpQujxmogY5ix2rvLzSzzSdGgtAPgWttW",
  "key4": "27fUVWMb782PG7ataDFx5pJHZgCJpcb5VP26xUxZKo8YGQ9G41pXM9RkaKoQut7U6jNwCbwBuUhJP9kcKUqNb1my",
  "key5": "53HTXXv4netrF5nGSBcwmcSvHPRzoL7fLWDfd2MZ4CrYxrMwKEAxLT2X4sxJTsa1i4W6dAs4Ny4QLBhwV3RerTNX",
  "key6": "5BShCT57U6CJDiYQk8nc169gmJkrSgfNqFC1oGZfgWTWsz8EWWeiHtisWATgufkpFpkwgTfUe9w4Wzund676E3P4",
  "key7": "3BkxajtzuCgX5QnNS4TTSKUYVPWYkPq4U3PmeQaufWA6yiEXEg7LstyizcVyKAFMSrSWiWuMHr4eouhB7HoXyuG2",
  "key8": "2xA5ha9t3eN7n51frabejtmwUqibnNtvhiawqfLiio98acStdB6GFhtCtymxr8Qt8qfmPTM953uEaPATbZ7yt79e",
  "key9": "2jdLHLoC2iBFCvH7sHa51AUZMdNQWj8XxVdPZ3dHodc51VF8D5FY2yKHGAw2fMQYDwy4pADpiMuUVQ1ZTx82w8NS",
  "key10": "2ZPKis3fR1PvWQokGFt5u49bo97SGLQnQmEdR2Wv6BHHXwG59i2m5WDTMJkLL43ByjayJM8dip5VSa4a1xG6bSki",
  "key11": "3jiT38pbFQN5e6vrNiVYt1ogqk7EXyhrKifRn7YbWQyvZma7vXpK8yh9E7C3XbuJjSCnk4XMWiQUUjvCBV6JU5vn",
  "key12": "2u2Pe4Rpn3nNsBVVnK9P9CVBLFwjgFB558wHKmAHmPtGXrZb9sgSrfjJ97LeAXDsPhwD43BsoVPxXbYjqm9KvZ7X",
  "key13": "5hs1G53ESjK9D4cMyfaXrJCggjkDzMaFSZm4HeKvHdxuorqK7inrwHWPdsWzkBwxz9QDs2usDN8HLiezrbKGchie",
  "key14": "3LnAELUNSWJ9D8FZis7kGGiqKuyBf6V4xnDhrK9Yf7Hqw44h82ZP7UUF4hk38WgDY9Vi43J9E5pBLDEFVuQK3WEh",
  "key15": "2ADf9czAqk3ZXeFvYjqt7bGAFj6VG72eQoTTP3MxmnU5Z9QwwaS45CVMEi5Dw1mnv7WzcAGVobWpG4CmoDnzcYma",
  "key16": "2vJ63YXMNE3KKAY6fcihSYccAm5SVTXDeF9ioQpDZTpWkaYjSsTap5ChkPtPCG4vmRRLr9B7FDcphmMMwwpmJ6do",
  "key17": "4GBirCFjHVhnVoBoUBjjcz9Kwpfj21fqDLBfeZZPKAYXL9LvUgQS4VnemeGjDcE2XVurHY5uKZAeAB4o9hdp8iFs",
  "key18": "211MGJX3tNaFDsqgf3Ncd7CMayaHSvxHG7hjLX779KxNVS6SRFSyaf57CCQMwXxzbvpCcb9gBmvGD9EGnxLs3yFM",
  "key19": "3qR8jKxKTCVsYbhDhJgFPRdVXG4iginfzoPMWAjvuD9Qmj9Um33HrC4x5rYo5irY7DM8dYMqwV8rBUJcUC6myhnE",
  "key20": "39SMjLu6ieUwQDQfAEPaukqWWvgm4kFssvf7DCFoMKfcWiAogy9xovZk3qgnto4ydd4a9F7SewhftowY5fGoytdz",
  "key21": "28gDAtvuECUavcdf6yQZysP8HGEgCWRuFY1cBhTq7ptpVN9MN25HAfJGo64vCfNHXqW7btp13f9HvDf6qCW6PPiH",
  "key22": "3UnQHihAZ66HSFTJqZYjGd7vYH6uPwAa16Vzu5TkASeC41YPu31zezqGL8hF2LmR8nZyDopbZsPkpsQRDmeoAp6q",
  "key23": "4Xm6TDMpP5zRTim8Fi5Pn8Td7eXuuAMaEz6d7BpKZ3uKdTaeYRReeLDba8gMUDBikSppVBohCfc8QxShEkWTGcqw",
  "key24": "3LDtdAYxSHbwBsLrELh7QKa6Cr6gqzAnDKZpPoCweberpubMRMK72e8GWkP8cjJH3Sk16qe8qyRKMb9KYVAV7Ujr",
  "key25": "57fv9LwWge31Mb6B4AfY6Fm95iAYnoF4KWNqgXvD7J9H2sReLxCHDcNyEvDGHJCbUm4CccytBoT5p49N8Geg8jrp",
  "key26": "3CeZDEm4gMxWzZTBZZYv67kmvTimWXGSuPrS7qtQgtXoB9LD9epA52ov7SFDJbsqJFMHtCfcUMUMLFet3TXJjhAu",
  "key27": "nisJERnR4RrpJ1jZHHKVffgEakVvoVhCnCxStWnihTPuf4KFjFGkg4sapgdALsJM17xvt3BkJ6XHpuA6b5BmGT4",
  "key28": "oRtm4cGrTkJtSB8oKaAEDn8n3vDQf3Wbs4QpXRiiUAGukbpFNRtpJBGKRzFTdp3hnz7iQLshTJp6G1setj5ELMt",
  "key29": "4humzwpRh2WEFMayvPvoFzbpUdQAbG41YfFeDc4ETgXCF51nqkLiuMp6Dj15LjFthXpiHUQBKVhSdTwcjcNbSxjB",
  "key30": "2evy1jXrRDqdLtCDwAE5tQVc5Frj8UM1UZmS5BDjGUnKM1zt7TXmEzG8WFXhDR9VFUQhQGLFFhuTGH1zKda5efQJ",
  "key31": "4sUdse9yb9QX4hJNAUUy5CxVrJ73Pg9FLcMwa5vpeRNw1Rt3NAxFfLuaa1mMJSGG7JSu1tqm33d9ViPX6Ua4h1z4",
  "key32": "42Ny2Dsfc39Gd5C8ZzF9FaN1iRgHKYfuYR5tYcuZqiWYdxvstkGTLsHYkwBwi5tVsctmiNfcKzBuXH4Y1eTirLEZ",
  "key33": "5MTPPYgkjDCuCvzUCFFxj5bx5UfvFBKzfENyAGWjAHoATBobgiegUTVfQxNd8eCJQ5cZmpDyBhqCndGE5d3F2MFg",
  "key34": "3qBMpGoBEG3VS4suup15qFtBN64xkfENArvzeSd3vE1gqviYVpZSEZqSuRXtSWG6Z15811SCMaqxNmfugLCus9Pe",
  "key35": "2XPCktRJbehtVkjcRXtU2u1LRJ3Ws64JsKRtQiGzbadJrqya3737c1G1MgUfG56j1WsR6gzbrnVEcMGqEUQh7MUh",
  "key36": "zps1xGf39BXLiVbZQ1vm9ednA5Sbi3ZG4cE4BMdgS2tbrJAUezcmryD4vJxGBtVQy8RaN6N4ijwwmbxbRLzdWsm",
  "key37": "oJVxJgM2R8q2rvr6xWFrGpaaPmVF3kCRrmnrTiawZUtjWHc1RXHLRLdzn2MTjP9X7g2fFvcazdXU9ho2UJWkvbr",
  "key38": "3q2fKLXDCd3D8v4kW9KSjps5TDEgw3XZLxQQzuoJujVUWUSdh9Ht6gi1HNZduasDtD4pkpWyTj4YiHfaqRsdKbQJ",
  "key39": "49kqRTvD68vMa5ve6C2AjrCHFumt2wkBg4CTphd6jgXmujGHLnPFsqYRvwLT4yuDqnhzrgatp7U1dx3xqcZq9vAo",
  "key40": "5Rd6UJdC2HUMXoxYyKbQwvC5KNi2WgbLbzSp7SDdi8sTwtgmu1N2VnhGrzJnsFUKjXQxhXBLJp5qV1b9vChDDf8R",
  "key41": "fND7USPQ6ayXx5QRc7fJt19AETbeTAcK8jz3vnT8SmBgbFV5Asi79YTUpteAEPozTDibAGsNhq64RJ7GkUSLw9D",
  "key42": "2QSGpW1N3w11Kw8ZwffXMJ14fzgosER4bjirvjf7BSBMPgF8u8uVK4fPQpAgfmupLYu4RJ1BhtVop6xidH9EVKP2",
  "key43": "31ehyhv8wkxeCCu8omwWQp2vvsTxq5QM2nXLB9WXhRkjSfRnGhyr3y6svzhA2E34Eo1SHDpcVWZGsXGNZXic7K9j"
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
