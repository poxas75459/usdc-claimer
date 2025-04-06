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
    "2oAe3uWZKkUzsZcg4ZA8xNkKssQHgDP8R2UKWSjWzZ7AvTB7tKdu33SGv4qfXWa9zAkPLs2L8N5LNFAJk9wjPtZm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZfnGiz42zkEJQ7z94EqsXn6jUZduaTF4wwtarQCpwyceGz2eBZ2r8ow828XBqi8Sycm4pTaghsqds4icck8eojF",
  "key1": "W2rV5343LsJWy11ZKqGZM4qqMX5onVfPYg6KxXFoDFQyF37BCVLBTZUnzyVeT2k1Kg26GRvJxwyDdYqetms3WZZ",
  "key2": "r1Zr8ri6UzJ3CzcVoPiLZaGLdYUNEiuPNUJBAUbDdWjNib1EFbAYF8Gtf1EYqqDpDm9aSonkyCsvFGfxu2VxrMv",
  "key3": "26HbzJ67AVHEh3n5a2RHnJWoiRVKAUCF35r8atJB5TvoBiDQcFAttGAQC4VcDoDHUp4SZ3Qso4FwrmHs6n6ToeHC",
  "key4": "4Gzo7t3b59d3ikSUrNSaPJVFdzbMS5Kgs6B2boks3pyQTPpTXXhr5mYFge8spBCZbhhxJHvcBV8uAJH7RnifBDPk",
  "key5": "z5sZsMuApJTgyGVDPmypM45wAtBRwnJojuXJJoWqdwXtftPoNiu71edzxzbBbV32YkqpXXszbWrpKmzx9nwqNXe",
  "key6": "2YAAGarS8PtAeHNRoxkrQP29KumtQK78drLNFqozwLpDfAz1C2Y9wtNBjP8mZX5FGoGfvdqHob4EmQCDGPXrmAPC",
  "key7": "4gYBUAi1Md39DycrgKQb9QkaM4o1YVkmZyKM4j6Hj5v6edmDMob5bsTbiWaxCvLwHNZiAh93YX554UTFijKaVhvZ",
  "key8": "3eyPbTLLv7gybGgEhTRc54bvunoSDNPkbQheEnDxW7uyKRfC4wMLhkGaPbK6V5trUfzA5ZRWhv9XKc3Sg4d7i5qm",
  "key9": "279skuPpEgJNLHG4k75V7qHvjw9aGRGSRm4y9jsYkKpCPDbjLS9H7oqxtKpxKQg824boTWwFNbYeVNHNynCjScud",
  "key10": "5nTF6S78xuih6ziS3neU4ar5z13cc1353eZViJ5xXnxNy2oboc5Gh7U2jGMqyajMk8HbQU2XUUUueL4voRHZq1fP",
  "key11": "3TKRsA6L6apJEGGVNJahhKxL8E3Ra8whTR8CNt4Cn98Go1bJVzjUvebpNPPzVwwN1ApQyo3NvbqYRTVfa4cyAD3h",
  "key12": "5T82hfkdss3QYEBMpertaHvZ2HrSMaRW4CqQT2Vreu3CpY4E26YZmitGWWHYQDsPFxF2cwXAZ8G9kVReTD94Twyt",
  "key13": "29fcxtGnbsehWYdE2qotdSBvXeMCRqzGxpCvXnMaFhWN6veY1xoPRaXuMYvzheZh4wpkyKi71jqXaD1sy9GC5W6c",
  "key14": "4mV6vzZNRh7vJnteLtDbzFa6GeP9823LgQWFsPH1zd3JEzNnH9WKsVBrTBm176eBHXLQBX39cAHYQF4UcuPAfUqg",
  "key15": "ew4pwuAFsSzaatcbupR2eSmUnk1BCimmpJcmXCiAR8EbpnHc9mutPRiKfy9EAqYh1AaMHUZ13WHyK9a2hEi14Wd",
  "key16": "3sWQrFZ7TE8FeFQnpqCAujdW7mMdpM8smXEzw1n9tTHA4sapnQ4fEa2uzrenHXtGty1sR1YiYxEfPGEdvYTJsprn",
  "key17": "5JdcvrAagj8RMoXdkZnTvyTSgmWQR4DaVD2nTa1UQoRAZeRFUW9i3tE3VNZ33pSvZ47aGLNNFEibWqzUsYXLH9bb",
  "key18": "63rtKXT8VSMpH5zA4ZaDzehnQm5HuDgfuHtY3XPptAijBsNiXVQFbCsXKeC1Den4yavyGt6LU9Sq87561UFfSJGg",
  "key19": "4MR4iN6dyzC44295BwkovpmsppnC1W2oQeSKCxvQWvLpgSEbBosNQWV7dXMbo6kyg2CbbLNQjofDC4uxeSGjSGja",
  "key20": "3cDpmmyrCHXDSMrtbRVSVwMZSaW1f7FcbDWMk3R64rPdmmMmWN7oathMMekpiHxXSccQJAvwPaujGF664Cvzhdbh",
  "key21": "RJDjxXPc8XTGCEaRZVGBKeN7HYzgJqAqWePtHCxEJX2JzkMuM9eoFNX8sK79odwivceyUWALf1VDuRnSEhKtGBG",
  "key22": "29EYUMYzk3eLa8gCuPEEJzRNkyyQeTKobCPNHERBoiu924HxWKC3JSS4TrWa3Y6X16QfU9M4rTyWPsejnwPRjyES",
  "key23": "MUNqBD7rdNobpCwVLZV9LkAThAiuAu7x2Vd28X2DxKN4xndNLshbSEwYoGXvcLan4drnRNPhtKErTQiMULB1goW",
  "key24": "pgkhg9pLpCFrYHuC4kqHgDcDeShxA4GeBYW4jaoACPuXLWd1EwmNa1WULGD1J2QjnyYmzAsePAijy3UygSAc9DD",
  "key25": "4wCJx6kfvhqosnFDCRsmheBNVRw89eZRJpy8a47JZoHta6fNhiLbpYpnFfqQ1CeJ9Vs3XNviFAupDxnCGsx2CXDZ",
  "key26": "qjyvGUBJ4Wrv1N1PuchcUCsshm7KTVc3wxKAs2zhGPWJARsCiv3BntcTMEJ4aEzWyymeeCCzzb6yTrQ8RfMGu1E",
  "key27": "5RWJXTnwrZVjBVM9Yu1hXvUUrxtLwKkLYL4W1XvDUn9zagKA9YMnxsTYxUgjpYm3Gjo4u8RbNtypPdMhT9gEVJcM",
  "key28": "STzC7JjVGKYFQkHZ2UeC2ArNPHoCPj1Wr6BE2Qcavo98sMAvafFCtWAvt7LKpivKaujZVPYizLwXdVEkYzDMePU",
  "key29": "YDeccbsdZzrSytKcmkzkcVxfqLPkQ13BkAAWvjYamKQao3EMx7D9kVZ9NjW4Cfmpiw4HWhYu49TbGQU2MxYTdx9",
  "key30": "23N15FPjqTWb2pCmftymqxji32PLgA5ZueveMmWqQYaaqbw5Zux4wARQjaDWCjEREjhu74jwedoz5erYMwL8wWAp",
  "key31": "4EnqY5iFFu22uU5LzxKN6EbAeMuKpGp2GXkV3srhUoXmnLMbSWTdYRNt3dvR3i3m8HbDpdvq4pQEtnLLrmMBMDC6",
  "key32": "wN7cjKSiWJGdThYDYsWFjMigVG2Ue8kxDq2AKTjU9LP6hSGTRV5zPcmFKnBLKkrj3VMof4rSX3BegHwqaUxNmrE",
  "key33": "5F21iV1tbyv4hq4n9wyQ7BndxrVrxU2CTnNagGy1wA5xHztfyfYRd5Aq67FfiRCuuQfBZ7SQADywdxTMsywurq6s",
  "key34": "4QHHkucJj3VKk7SYESqFQr4BknXbefyuYvZFrUmEQqVpMbJZYFtNSDtWpT1nagEsqAteqcSMhRomZQfyYyp52gs2",
  "key35": "4Z6ohnLzcqGJm93ZNCVuaZ6nW8cafsvQU1ynWE3hx1wCNGV9Eap36UARv5oLYGoRU5jRjtXe4tTtijY63VVy3ASE",
  "key36": "48J5qrBCriXXhQkNmEwUxtXN8CWEFLSdUFxtQK8DUnECQxLNtGX3N4CSxgNXEByrYJ5su74fe2BazGD2dG4tECYZ",
  "key37": "3RHAhLB4ZZ7HS1pY2m1UecAKJLU4bxb1MsHzyndtnEMVTRoRoDUJg7ASQbAtQ9Zh4PS8SJztUJwxpZpxNQViYV5q",
  "key38": "3HGC9DBAS5Wv2UbnchWh3SYtBJNZrtQ2Udqv4NcmRT4oCjWaEthgWb8UWSiSXzxDqwQh1gt3dVRKLUWAsnU1dAfh"
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
