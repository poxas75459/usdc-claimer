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
    "3E5fVFdBnPrWFYdqVEiuRs5Jd39VgFYw2rAh3A2pwUbFirmjM4hL9iwVe8xdwbCtdF3f3kkSW3GNV45UxxQjGYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5teEt17n5kFdfsL57j6CDuEkJD9RZupmzvb7qTMJMp5H6kK1L6kofjsPhDoxABBT3M6puv8mFZMc9etKL3fpdfLA",
  "key1": "4h528fQwBZT5UyMxQhiP4YpGwoxzLK5kbUjzKjraYqBM9w7DyxeSVZozYQLAgPGre1USUDQmymk1AgwZMEdU4iBA",
  "key2": "g6QmidQoF9fEXzMfDAXWf8Yc6RQsGujpcuF721aYuFcBz5q2xnCYJKHrowb6ehiw7MQJZFcGcWrS6VPZaLEoJho",
  "key3": "2LbNdMao4jBzBsx2xQdqTL54vDQpMhjGBi8iRUijh9DjPJwgJ77qW1KQForePNwLr72XDq8PoRYqTjddudXBjMPC",
  "key4": "4gBTSZ6xhtQuNVr9TPd64tkme3A752rPmJNLG9ALym3qj6xsrjQ3VhbvXAKstQfU1WJ5oeSyyrGNWZvUzHp2cTaq",
  "key5": "2qCJZ8MGHCkUDLEj9Tpmcopvebhj4gPnD1cgESX8z6mKY4Kp15MSCnormaZWdxRm1MU7QyxaQy7AyNbYDDWV9fT2",
  "key6": "4TWjqKAbiQXhPV8emh3rtHWd1TNxpx9hzgCRhHtj1n2QTbReeiqkEnyNBBEDKtVV3ucDUL2ohkx6rBhQEHNoBNYe",
  "key7": "54Xic9rFR8HmNAnitMuVYu4Fwo9UNLxxYQLV42XgatbzMxuynfUms4A7Em9CNWqiyemyNEKAr3b8jr6nhoYWaGRC",
  "key8": "5tBnD8WAqf8FPzetjNwDa2WwxiWeLuJCEUAYymy9mb5ybwQP2aS45iTji2bpvSJ7ivz8AQB26S8yuVAafVpukkoY",
  "key9": "3KeLrkmjd2XuviPTdWZGnxTxUBsGBvmn4SWrGCoHoQkdeUDd8vKtG4rvHs8MKQ5TCnnxwx6LCjrU7BNHqeRJ6Dfw",
  "key10": "D8vuuSkJwMjWjehaPCbTGyMhVu7W6bpKiwLTM9Bxfo5KSBQCDNXfVhWXge7YGE6Pg2k63RHSSKQTpLY45yFDF8z",
  "key11": "2hNrGKW3xQVgPP7LxXqYWvQf2MorkBkxZTJeEAe8zjN12r5VG51EUhypVip3rdExSeGAPqZn61YqA9unk3CebLKb",
  "key12": "5tpqu2gpBrnJJwTfFBULCUqhKcD3MSyCZyxheC5bgmBX9AafwDYzu6jRRp64vY2j3uge9DGF5Ly216rnFuZ419vW",
  "key13": "4Ej52GmYipGbahEj5ccfyaNBJGwmLs2DRaXwXywawuJozL645JsMMNs6P4jjP11mgmtcQx72MAKRtn3K2yqa7S8Q",
  "key14": "3ADMoPGoAPLAGWj93WDAuTB94osFZykw3u5JS5JcvXeFheV3cSjVJUBLJ9QYCvh45UDiqtRMknv8yqDW6SqwRrtt",
  "key15": "2KEBttn2dhbeHDaaU1vykpFJYDL38Wgzxd9uuCbdKYUZERsynJcksJH4WjZTkfnJt8cQFZsByPGyanDUwPZ513pe",
  "key16": "4fA9CFzcKZJQtKYSpZ8Yso6g6t5Q6xxD1JB1smLVZ1HLCdr4eYyNabf8HWttz65iLbbHtMxowGWuXPJ7UYdvfywB",
  "key17": "2txiYNJVXZFK6uzKdW3wefwCbBXM4S6dQCcG45HErnnpmN9KTDu5npGNeWN66F8xRftjCADb9Q2dScACo11Rr8Hb",
  "key18": "582cmKjGrgEP5CiTWqKru15bXPC7wcSqUMgXgtniB8icWdUroD5NHdcej5ASqp4fVkgh2FfmjbwZZkndoN6WFRZn",
  "key19": "3TDtZPEpqKCjDDeCah5zETANnB6Qdpa42r9iHg7JC8c1kGvvQA1QhAKBDZ8sceJ3JefQPfUC2kbDyKjZXmpJnjXu",
  "key20": "4GueNJegkoPwirNpCG3nb5HUxciiuD1GYQhQPgdNYSzL7ewxeJ8uGRPPm3uLpYtjtDPAkj5ecc7yHcxbyYYywY7w",
  "key21": "38dJ9ZqFrCc5nJkwJJHYATxRGc77vFfPFgv6UgPaVbsRcAHTV2FPdRkvmgsyYYwtPb2HZxjaxRdKL7AXyu8DBodZ",
  "key22": "4JXhwFNyE43Ptm7Zkg5Q3T4jPNLBmfVyQo7AnK2CzjNtPTH91iBVnnTiFpkiENoM58DSTmkNXGLubiozQp8SoAUn",
  "key23": "4XJFDzFvpkKrjWiDPpFsDWCciHywrszQnjhTPPe3yzTgMKmGXpbAZnpL58h9HkVncjyJXx4Ljt7f3J5phgXcQ8HE",
  "key24": "48ZuXron3sYzrjnHEZQGGcSd32GVDqyD33CMiQgwH8ZGH2TrqeU263bzAsdrna9rSxeduBRHxZmbQ8hcdFdzGQi5",
  "key25": "3xddi5Hv5zarjWvdoPshEXmM5gJBbp29VzUzU19Q4AREaBvVyuBw3hJaUN36U4DQVLpbK11evFrmfnvN7DiX3pWh",
  "key26": "3DwgbHUUdfffbzxWPCDZkR4yHPQbks6CxAWzq5HnaLPQyj8EbiZiH9WVa9saVzaw9Z1nBERsrBbPTecYJQCSV6vx",
  "key27": "2FXTjwGNZiHeGDTXysR4NntQJUL7FdWNSqTDeGo2JqmyXCHF6pgZ7LqaxUGYghZZZ2kYcNd7ERhzRQYohvgQFV9b",
  "key28": "3tXtScsJtw49LY5UpxgVJ8RUmmmPUgRWJVTXjQYyWRKj9UmHaC2u4PHxeSSZpEvJAWMByW65akssSirtNjpbeQaj",
  "key29": "3cS79h9CoVDx43iJWYfApVWbFiVw9MmAfwSu5aH6FiTXUKSD1khgjP2C18nmWDY13XkaiqbCEnyJX1Xo49461nWJ",
  "key30": "576Yp66AL3rLhuKcnRUdmvYp7whYDfhJsgbd4E16HpVZsxMx57wfmyLAwikjx6a6psKwX7c6qrVCJGBFkZzXT2oZ",
  "key31": "XccWohjjQaWj95y8eGr1a3jJaUF4yfkF1vb9WGTwuwh2PGmjovQHMwkPZjPR1kTqv5CfZoqjVn7PB1yz2BqDEik",
  "key32": "3a3gXg4LPZBx4wVgLhGVMjsZ6ZgdQQZ2nYJjkwZjADTYR9A7qPz1qV9B8xJnTsfb5NFo5x2mrJxHeBVFUkSrCkcY",
  "key33": "4F6KognLHiqrbzQ5yia4ag9CPjWYEXiKygTXuRLWpYYEMGmFLhcLQ2kEXdtiCSHtn2HXUxHf6CgfeQVYUsP418P8",
  "key34": "mRVyQ92pVgVABYQXXxzSMo81D6cUSS8uF4oMWG62sii4DVZdCKmQx5SSpXgfktcp7njCPLktxK8yGjNkZmH5Doa"
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
