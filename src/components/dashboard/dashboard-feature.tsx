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
    "2N5c9zAx6cNk2EWDEsUugWJBG8yq2xobJR8HVuofLGbX69TF3rsWYBj4MmWyYk8vuJWn2jb8zcifY9NWc9p9wyMw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WTHJxwkv6sXEijVVqCTeucR3mtgBFpu2ZKsnWJYyuackDJhYuEsPwvTKa2wQmWwJhmYrFzV18ZWFXn6jxo5RJBh",
  "key1": "5tRSchfpYKYkxB6jbJLhZk56gFa7iyYjoSyj4SvGEFiv1HRtgD9cQNHL7Lh9MiWh1jei1d2bkZgrvdgu5YniK8q2",
  "key2": "3Uwar6mNHHALY2VatwhRqRQtxzUhKDiPECtR5sZD5HjEGL5njfFF3tzqAuUrFSuNsXmoyViSbexAba8QH1UskEXJ",
  "key3": "TxnFTfbDHuthVsbb6TMV9GwszC293uh7eXULjwdCWeRZreN1zGicFyozJG5Q2rRwzwcVvZkWnk6A3iQKEMYez67",
  "key4": "4eNFnTzkPYamGyRb5wS5kCtmHm855A9EHUCVBRE3Te5PsktaEpdAnriG6hCXsArBw53H1hRHx6Uan9xJH2E9xbi9",
  "key5": "2K6xXEmiH39iA8V6mEtr7EiP4ggKKHG18yYxtwP2fHDjNLLoN3XUmCSkyvYimRgFE5wX48kF82NMSfGbwCNBzRYu",
  "key6": "63uM2xhYKcoyNhruTnAx7JbGtcmhBrignjxmD9JkGF7M4y5DpTFFT71wtR3m4HXNq94BqWsyFBFa3EaEPGVmM5PJ",
  "key7": "32hjigzNXdM5jCThz6C5tu3Z6fH9FDXoPdpzpKHseMP8qr4GtmjqZYuVuPV1oucwqUgd3Nt1bMMQJ2eu1vw1tR4A",
  "key8": "55gYcwSE8UUfu61fCQeM4VFVXUxgEgiSk3gAPdjMv6VXoGw45LV1L8hmZmftsnn29FfyWknscQbssnyZ2vrgq6Km",
  "key9": "4axFo12hYtNrJdTssPB7GzNUyhdqhEKy9XyHrC9VZtzP29jG42njZzuF5XHZCwLSnwiCBkyX3hViY9iJmcifZuy",
  "key10": "yFw2GpwcyHWpJCsDKf7x8NgJs2uQjVhcZyPofWjfueHpDtJkJbLoBw4RMXtifoe3krn5HrNVgiD1YNA1jV9Ahum",
  "key11": "C13cFj3xwgqm71aWUYmDzNw8maFCQak7xjkNXwjtmQcEytR4T4HXR6Ym1LM21iXhuveCZfKSqJiy64BFgS3uGcY",
  "key12": "wq9KQ7U34pE2bKZGzVERq4Va4U97ioSCtkjBR4XbiXN7XwV3mGMngA5FmG2jza8T2qMdu61cHoFC2d1ufmrBdeN",
  "key13": "38MFnaapjZPmX59DKDFrtgytydmAKnYbukxBvSbDaKVZSn2Mvp8fdKg3o2MquPKe65mj7YPhfhcDhJotXGyUR2fp",
  "key14": "4XL4G8DEjCBEpo5sordXe6UEv4xXqjXek4YJ5MumDAN8ib2kwa5v3Ru5R9JncZw6Ke6XWm5CmkHXsueSa87RNkB5",
  "key15": "RUuzejT6jbuvDvfnE2CS7J7zvmAHivtQJSDYu835Crfjs8TEaCbBmCWVgNTbS6ysEdH944atHuagbtreCJcyeDg",
  "key16": "4pLuBfw3BRkyNK7QpvS9EJP5MQ44R746L1qd9Vzurk1QdJreTjXrrdrh61gaMmG8e9bKxDFNWczLZFqVd6gZ2cfE",
  "key17": "3xSGnfckcvoqGxc39Xg8pqsjrgi5dpN8P842Z53AKVXfvvGHtv9ihYJPsD2DKKBUTsJjCAC4v9G9LksKbYnsMwqL",
  "key18": "5g63bn34LZr1HBirYUhGcaVsJJaWHQ2TK1NKLZYiPNYUNALi9NR7VRYz9C9K7HsrQSHxJYnBsw5tqvWne6RL2Lyp",
  "key19": "HioYhjRg2snkxJjVbfEpVXrvPEPg27x2p2FiBoWeauKxFjExzFL2ZurB9fGWkwZyygHPj1pcStyrh8WXnMKjc9s",
  "key20": "5Zq44WBQJVJnrbsCjbix8sVSkqytJNGqxhzoBrikPChGY2acLL3FsBpaNSjpPypcLZNt3KxgxjT3j3Ki1v3d9cj9",
  "key21": "HSrZf8zm62xb4cnYm8JtgPBNJfGsiDQrk9k8Bj9W2Uma9HTmrs9s7iaxZdqp2qjxHZZpFCWAdueE2CHoxVZqfGn",
  "key22": "3Pi4XH1hEv14F4nKXEKsCXMuinrvxLZxNJrxj5P52TGcfeSZZKtQt5ATFwhq35BKo7ySDW7KPPxP7kR8ikXLmi1P",
  "key23": "QMNUa5ugdgoFjJxx9nqeQMMrwQLNgY2RcJKr9w2ACdzrrVnDC7zKe5kC9JMBgU3cxstHVYE16m7MN5MENAg3Etg",
  "key24": "5QCGjtrBt3jfDShSJXP64dKsLha6KHSc6eVVLiCmLKEnrvVPa7Hz3HZDMxcxhA8qMPsJoh7ZDDzHKhk72aLWGUFs",
  "key25": "2Qoru63ZeTnpyoRNAbpai9UKvP7mgXZGAjfs5en1EGzMsEZgddeVf9hqDJdzH3JpRs7jDbhgZh6BxA75ogYynfjS",
  "key26": "4jcE9WK7Ss8tfAJGVih4Qi15roNRoj6qxzGEoJYyjWtpE6KFmHoZz3cfc1dsQhtNAMjq1aSQtYAHU89FQ7XJVprH",
  "key27": "3QQhSCtEotZvvy564zpx1MHoU329b4qNnrnEw8cyM7DnHKu49YH1uJ58miDr8cDy1fYBLX3Tcp7CNSN7jGLjfRk6",
  "key28": "2Vg9rhG9aHMMY1hs8pt891zd3fjT8so93eh25ysBShp9raqH9s5F53bTLkCvVxXBiVisRy7wNxNPqgvEw9LNjB1S",
  "key29": "31uQ9mEFWtfVCZYJgUdA4FCrN8fT7KwQ9VtyhfvqBW5ShwtQbJiAcoh2QTrjakS266xVRtSKi6q8SZDvLL9ihq5X",
  "key30": "4qYaEWVERY6nbja2cKwcumrfcaacnCRveDhbRMfat1Jw83VRgmiVNpB4wCAiuA3JB4yP4r1VdHuty9ycCRrSJHhn",
  "key31": "5ySH99UNTDm1yAVGZeaM8Q8Kg1uP3e51i1GEiLM6iQm4FbXx7EfsBudxgUA7XvqS2Z3hMUVQgPdTebT36XNu9WAJ",
  "key32": "4u2P4y5yMX88uPAix3tMYtXLmEquvkGTUmBDbX19vP9kTa1A5cvVSe3XSaHTDs4isxx6K2XBRP8cKfVXT481HWUq",
  "key33": "bFtRXKVQrPjgngDaE1uTXD2hzfetzPYEzNHi2H85PLDUF7zKzouTfPU4YsbMiXH51tY45e5JNMTrRsWr7U3NXTS",
  "key34": "51S595Ayei81QvSRUdonYbxZ6rXfre32pNLZsRLWNh37LpPQxeD32XoZL5FgF8zVAxXjsaVMzheemnVd6rwyWQ7Y"
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
