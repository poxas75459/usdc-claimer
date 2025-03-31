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
    "2LtxFsEZMDmDov1crnATkiQcydgXvfFmgcxvnGqkEnUK6K1VNkP9MT61wQka3CgKeytfC4ynDYKDGtmKnthTB3G1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e5CiruWMnAgFBQn6ywJvkWDJgHMAC76NHKyDLV3ac1A61bWrUCw9WiFaphvNYP4kekkiQUeLnX3wbppRhCPfeKA",
  "key1": "2HwTQQunT9geJFtdBt5sdd31FQuBZKYUWCfGexTyUygQyD6B5ZTsDjZzEG8GpsSjM94MkG6WhzouKbWHagbjMNYg",
  "key2": "3jb3XRA3XKAous9mH4VB9yxZEsocM8mDDT5znsRXRnXTHz3kF7dMfaZw66MxLgwwziAPzMoCdWkXi9gEZ7BDR7TF",
  "key3": "4YWM2XzTTfRDdapWQTL5sXSSi91QviGe8eYzYUAhoAppHBpjndtaurNkXCvmpi5jh4yooXuQPdDCoC2zjqYDq9zX",
  "key4": "4RVpV6v72Yw1XTMGAWLbNiaWiGPi2hASfgNdPAztAahdFfcj15XwLYnVkCjNSGKryzfr3vGriF5X7dC8cyR423PY",
  "key5": "GoprWHLHqMkzpVgmLUZdv7kWGqAeazPqb7PhHdz2pBXpJk3eEj7ppjEXCM2UyTXreHNz4HbxoN9aYicx5jxdxeA",
  "key6": "2bMeQsMEhyX6gCGajQ5SkU4By8fPvbx9RGbJjwkPNEXcf8vTXMrnkrNH1fbtzVXyQtTAw9BwHUmssQPB7iv9EdHL",
  "key7": "4cREEa3Jx5NcPrCRibMERH1XgJV8U3MQ9duGgWAAoY5eAJNkwCdWYoXtyWzEqNu5d35R3N3VuRDYpBbNchoeE2iM",
  "key8": "3c51stDMc55NFvo3RpysdoDRHiQ84sDAcRbjAAq7CDZCX5uG4w9QJFioPE5hi5SdD2o82WmRC4td2aATFUKrtP5Y",
  "key9": "3khwN5G4usosDjfmCKSXbu5kfWkH5hbQY5YYrxkMRhrbNTGxq22L4o1gU6dak84uPFiAoMqeAzwG2DvmmXnLJdiQ",
  "key10": "4VJWsYAYh1cXUSd3C6aXsSKKXNKzkqcyzwoJs9e6F1aUvNn3DFiJygXTP9RBAmH8XAQ4tCBHepucFpYzSTcruNJc",
  "key11": "2e77X5b7hz8mAn3YB8Ww41RS3UU9jz6vKGtXkcfgCwmy8hiCpe9girMLSfeuMhXpWdxDPDE1ehV2dTpY5kY7TAa1",
  "key12": "stfdbtp7CBwz7cZM3ApcErHk6BwHdh4PBWQcRhbwNY5iNwj7J3kH2oaGQwAGt7V8LyNdqrdXo9hDG1S8t5ZV3HP",
  "key13": "3U7ZeLgQgiVchwYDz4BMaJNTMz1At9dyrKZHYzYkgiGBhmG4qZtZc5XFvjLa6td3DeRFo3jdsanuLdEbnhJrcwnY",
  "key14": "4urmDJYaxDUzRC7zvpPQEtreWufYmW5ZtoZXDxvhXSv3Q23doDeYieR8HAaGAtbCa1rKYbzcuxkjJqJNrfyMXBaw",
  "key15": "yZFM32dLV5zzWPv4T5A17gmUhcSoac9SdpjDNM3sPiuhqshC8VfXVpYQFxg95knYsA8sDrMgFiyUrC7FGgDHH2f",
  "key16": "3XKisFHtWFBMCbDjevg3WthPCJzW5R5GFKdGThBgHYdQmo6Dcb9xPAK6LQWZguAvCtFovKaRC2KeHaR1akbvEskY",
  "key17": "2hfmjsjh4woGF7TKh7NE48XMnMtuo2YE2cSbe2xicHavuLh9RsrP1fAZMP2CDnxwbJYs1XEb8tLF5GmjwqLE7cRX",
  "key18": "s2ymrC2prLEUYmKdo8ycBoZUoM5TJzRK3ftGoA2AtN3Mn1QLUYEoGUSucs2zfpoCqZZkG6MKrQTKVMjtHSGmoAS",
  "key19": "2hLmKe8dw5y9prjFHZUTjrFA69oV62XCjfUXWS2cHwDbZRybxwUKAXwa1Nfc3TeWipCcQbQbnpNKQYXVFTTohKNp",
  "key20": "fFccwbsbzQLXdhcdH1VxWeC91Fs1oaaTDD35qjt5Ee46KcLS4DKepdKDkfi1NeMgHW6XQnbbyBaMCMovzyo1aBV",
  "key21": "2yiZkBWHHyzHXj5Qv576nmZyavc5qmphG6Z9mzFyUztaFsxLRRc6PCJZNjJMfjxmVXGUkEJjJ6Hu6ne1HUv5V4Wt",
  "key22": "2iovRuKLovqgjRb2wFU8ZMqFf3NBSHRAQDKF4hF1LuqG9tDGaSUoMnMCEygG6mxUPHUT7cngJnRLZYbJcn47kX8G",
  "key23": "5HFdBKBC2FNE6KpiTs2h1ZJzBotDk8JzHjkKGB4jwSFqeeaWPZhZRcySSHPj8PAL3yKkAqdFVJ8KkDSd5JGSwE7Q",
  "key24": "Ue2VbErA2KCdRyFrdmBk2Qm6RtzvZWc9P26Cq2qSp8kyass4wan6EeHprnbNhKETBrVVtHRakxH4LFRNdkwzRFi",
  "key25": "34M7jBEhEiwgNzLYLq4ZqfjNYCd2qhVvCw3Uaf3fSGbQRrTznDgkxFobE4JTt1Zy4KzHd5P7Ms9k8k7pvCgZMenf",
  "key26": "5shjeT6T1fsBLhjv5yy4rT9tHUKySYZTRUsnsbiu78nru1YQQtnmsTm8AyhKfEzHL1aUxw1KikbKbTpCpmh3kzoz",
  "key27": "3kFwQikRp6sSPeehttoU2DgEVUHWUK1pSmRTWZ62ZiFSvhwNRD7wFteYSMerMPdWs5fWhJAZZJm2CxorVgKRDZwZ",
  "key28": "4gpp2yEZ372AHfBnK6sXCkpUzu5p7KbZcgTbbedmQyb7wXjJQzAGdDoWuiDrsTZ7fibZ4WZzMnccidp9YsHFGomW",
  "key29": "4rXaCAFJ3NjYxkBmh6RR7ef2csz7nVFztorMxYL4a8g8AjEwaoPRydXUU8a5GbJhtAbCfL3JiRGK7hY32gDyuDnQ",
  "key30": "5tqsW53VoWMUh4nwAkKJdFwxCd611FeDQkZaEkvrN9u2qqdyUaQpcUzY3TDUvv66jvVygM7F7X51jR5MKCHA2fF8",
  "key31": "41Xk3Qdt1uaa1KPC1NRrCz1wGLrhvore45hjJbTUgn3YhCGDtzUnWinzVhA8wKpRz4m7Bq8YasmjDsvgjqGdWx35"
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
