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
    "4qivdENeJvGMZAAo8xaAoUy6SA4Xxddhxa7iNJo5QvPLtnQomausieCdFo9ajUhQSUmAwogPMnAGuYLRvgjvQrfq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UiKkpA2w5BX4txAW9HBNU93DsZMMqURAS6SM2tVDnX8UanQBef5ivBooXpSuVwahVLM83MR9ad3i5MkTcNnDMsb",
  "key1": "VsQ8jXk6TFjfUeyW3oUYYxVADQfgdcx6tbxsrebxdRLMsovNwsX8Frr7rUAGz8Qf3cBBWptb26oZcrWYqSQa597",
  "key2": "35G1vKU58z9xsbCoLw9jYiCU3jVFofvLBrvrPbrGTm3DhPUEWG4rkna27sVgWRB7HTHJD9GbSaVvas7XztAbQDU3",
  "key3": "5NK992bHU3G7oZvLpiNEzacJE2f3Qfncmt4FYfw2G55hyhczurcX7jJMULAHyS2GBXDfZEhqegY4MaNyByKfEyLC",
  "key4": "2zQWAbsqUAxhdSUGMmNFdATe4pNK8rso16XnLtgxnanPMKPPVWeJmk48mZjAAssYngFLjAHvUgd2oYfXvDaTCkvw",
  "key5": "3Dv3zSsQpHxisQYv6Jvq4ryGayc28Rm7Ff5KiLzi8ujeaj2hPUXVCka2z3fJw1c58951hBzUzCUktNiZBj4b5Xf8",
  "key6": "3KrZFsMN4Ww4rbwq9PnDzu1hpMCey1SXQitupkcm4VTUJSX9bfctHCERHq8LydrpxN1c143a6ggJL1HbYLKcMPyb",
  "key7": "4grLhewEL3qEDGvvaqYjvBZNWyxZhtmZPAXVC8CtEqmfy2UkC6UcWY6ebuwhiEcgUh1aXswsBtyd1M8DpfjFAYYC",
  "key8": "shGk2WZHzhfRYrNCXnmpF4kSFapmDH6vwmcJvEhmWKxFeGqv55HMv2uApQEA6rDfLqv25JMaqMwEQyrMtAfcpJr",
  "key9": "2vCwdZRXuzsr3fwGtYfTTL3v9Sa51UPkCXQFV1cxpKL5kNwE9HBwwrFV6qYw7dVu4RWY3B7pUhAVNorQ7LmWKUkG",
  "key10": "67CimsXeRonnvFbU2L1XrxeMQFw3b6mzrLjdNhikRovawdMwgAe6M5EddAZ35KyPDdPz58qLXDmJpXcEgtfpNQRM",
  "key11": "dCtv1b19oQ3NvKPqAFGXo1AjiZXeV6JGDHdZDBvj8iMsEiwqzyjXwC5ygi3bGSsrmAryxPYHt4hzDu1jKjCSoqh",
  "key12": "55yk9Ahv6mbkck8RBekSHqiaJZWCTTTw4yVDjAQfScSPBZU26xDLZ5TCxktkZcizk7u5F2xf8fXS1wRraKdWB2sD",
  "key13": "53SoDmMUeFfSYRUwsx9KWBkXnHCwiKFmKuhRjA4EHUGWXNEyGTGJJcWuepNG49pwETJzR4FTxVH9U4nudKiHyz9v",
  "key14": "Msf5pXdWb67wUQzTdJEkzKfXAwnXGPMMhyNqhrMxVWgz2rHkgCoD1aU7W1xyAPXNF7c9C6y8pVMQm8jSLZXHTpQ",
  "key15": "5fzkh6BDDJ43MZvawnPywUGwoe62zSTsu1FGoYYu6b6s3c5y4dzGYdJVZrVgtzBNNzK8LrdZwwcDacgnTvLNbiE7",
  "key16": "5NaSaTRjPxGMyRaBR7xGy4WVJmc2f9KRpGFynje24kkUYMGFhXQt9LC5ZccgCp9gcwz6gfexZDeJTeqxQwAxRJ2o",
  "key17": "ZVkYUpySra36v32EqWJQFk3uMw31wMEoUgBCJLEaoSJqoV3LyYHB42tETV7pXsXHxzpzjAQDQvw1oyNkLGGXD5Q",
  "key18": "34NPnFKSoRoEzWAGnB4ZW6knvbcJYUyLuMafAXxp5foRWXJw4in6AXPvhMUjcoAVSHeoWCThpyPTouXD7wTUVTjX",
  "key19": "2fV4SEDVaSiZZqbyGLhQY2kPVJenU4VD8G6aXLeDy9LfNiZZdonPiJmFxo1Xxx9c6YpsqijJ3vjDhYjUbszaiSr",
  "key20": "3hpAtZ6apLL22ebAGwwbVk4oD9b6qsMcDnRWuAo7igTLsBaYt8h3oX9kp3c5wkaQeYsvJHjU5vYHjWHDUqLGRkhz",
  "key21": "3V5ciCCmZVdXgqjh3K8NchWv3mVQSqYzjLHhvhdEBLAP77ua4xhRfoV35gWj1DrjPwr6R8aMcVqZ7yhLsfSSSSR9",
  "key22": "5Cqe7sqUi8ZkeYuqP2HiUUsyRJBUpUjjgrtcfrdDyfoVZD31fAt2pdef3t2NyD7eHxaFnZjUPoPmow2nYizAy9Dh",
  "key23": "22sqVPzLpoyWSba9mqnTL7R1Q9vzVMVK2goPzsNFtLHQk3fLZeu96S8X9FCyubR3F57ce4k2QyLXdDB6PJZDfmuH",
  "key24": "iTiFnCVTT6wjnz9zBUk5m6N6xuJBRxqzMCqWLkPr3ZxUuFgijqnzFssyw4EKv5KhHLBn9bH1U4cRvfvboEGVUKh",
  "key25": "25Re9meWKf7ZaDb3Bj3B1mr48V1ecgqHsZgyP2aWEEtvD6VseUDoQtG9xXe3jkUespoSPGsgh5pQMVwgcnhDNJJf",
  "key26": "EdkQ3YyLvVxnLnropKRnHo2QHRMY6Gr9pRvrmiTCh4pVbJQLtRfVzf6GJwtHCQbZSpPViKkEaNcFqYdkuoqeFmx",
  "key27": "NNvRSWk4M9anBotdnkJ3LAQEszpotrTAJ3KcW8jLPkmgpQp8o8R7FnNjoK6v35RBZgLo2y9TpnUrjnwtP3anCMm",
  "key28": "2exdqLqy7J6cnfzzcxH3nw416NSYUVF9HnRq29gSTbppXZ41ZvJDZWcY7TShg15qZczJsBdRybehV83F6jcyLhXc",
  "key29": "5UbfNH2HYtfTsdFD3ShfDHt2D5dazTc3bGaDdQvbyyewpDsPRtXoHCqUFzaqP4y4eiAmiuZ43wdSS5kuvNshdPjJ",
  "key30": "5Qe72UwDHXvG55rwBVPW5WX5cwU3W3AXgrsYaPw5uCpJC4w6rtopC9rrWvLcUbF56kc2BAAnkL5RAvxBvUMHZYCk",
  "key31": "4Cnq7Lnq8zhP66iJ2opDYydDQXMieyfLin8c13HfKyJXsLghkwbo1tu7EnPWWhyN3o2aNJv8JrSgdpvMsZWR8B66",
  "key32": "42d2gU3wvzEjBwQQdfVFsUHs8gWtAxE11eZ7ygLgULaC6BmUPAXpDGstGzptDn9SZTdmnJpMAXM2LuV7UBYV379q",
  "key33": "5KWsaBQsW1VzyzT82NtYjszu6daEYu6pkL5tSDtiMFCF6Th9LCocieMZhBr3zoN8mwps6uUgno7VxenPc6j7baLs",
  "key34": "5C9DUHhKG3xdYAX86JCLaC3LVWv2DNkCNYN2MuVCcphgXWjVqyyh5kEy3WYYMNSLsWW8Vsq8fMufFTf2nca4FZJ3",
  "key35": "5eKnqBx7FRwxMG5t2vmohBJhX7D7mnXd6KBe9qgbCkqj6k2RTWx3LLJDB8Z93uw5bTv1k6z7tZEMxufX9SW96goc",
  "key36": "4H9bJQEGseQUac3xPUaaHJda9pJUudNdjTCWDWaWFb4oXZh7nL7Uav5F9DzEiD19XNgGPwQioNQSjjPE8b2z2hb9",
  "key37": "2JdRaVx9EFp6E3X7JpmMFB4rJjaTNo9Q9gz2fXqpZEqsLbEf3gZ6HXKsYBL3Xp8ipLVVKXiUrDdM8VKbPcjqHbPB",
  "key38": "2MpHoVdsFjPdLMt5rnQ2eNL7RbVuEB9CMtwhswkBmyRj6XP83Xrc5XaCTDJu9YhVdui2UyFWHxJ6nRyfydzQECE8",
  "key39": "3QeJw9iTAHz3p3QQGQY5mortSdNChChvpmQh5CynWhRTcqc8sv7zWPbLHe1CJaRRXsd2uMEvDD9evpFwbpm8TwPr",
  "key40": "4LpZ1arHEsLm5wEfs1rCteoHzWYDdGporkTtoPw2oFqMFPFXyNMfU3VaK2xVCsdCDAdUSiCgB58Yva9djgbmuuwY",
  "key41": "3CeXEKTyQbkDjK854ZF4Y5RAsk1wk3CK2E45mo91q6MABHJSCHZhQDaCjN6SRTyeD8kUxgtFnT7M6jv4uvU3QWLg",
  "key42": "4DfAE5yNMkHJd7uP2ojCNxiZJChrzDpcmKuVoWwNVLjqm653FgUtEGkknLMf8ckb7mSnoAJPNiZknv5uN7xjJS7z"
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
