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
    "3BRSSwwoz7cdiHf3K6qBVMqXk6siy29U3GNv9G2LaJiR5sbktxc9FrtnKciGfnw6vbQNxdYVntDBnYq2UPBMe4P2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gZhcDx5qvy386qwSQMuNQkF5qSf1v6MfFtD4kGg4bw3e9ZiENVsV1qQL99JS7eb3GYgz11ZDCJBt7oyvMM6xmNR",
  "key1": "v9eX7afwZgArDLCV3CTNjmCNRcx2nHLwp34w5aT1M4MWB8pryyRqrnKc1yxDHsF8mEfQm2VwxSa6yp9nJGLbkW7",
  "key2": "pfukhMuJ6uVUGprCkRahZbHQKTtaSW5X3NKedkDnXxZVnp7gzkgMTeG6L5JdhXmsbxzeFjaWWzUdea9vMH34Wkx",
  "key3": "2y55ZXxpMqFtRtKSxQrJHzuyuTWa7VHHKCYm7H7mukgTayViFziL8pyY1NR6yVWvaY5K77vUKrrQC2VuWvXSCXR8",
  "key4": "5cKHu5iJ8GkpJkY7hbRDaHGCXBRYASs7EAmDvq32JRUzHmcTGANTJqQj2qbGUPsp1M1EkwTb8QpspCZbtVgTSqSS",
  "key5": "2wbAo37UKSv949GfcGNWH73dcpyeUoM1djLxWMk36ov4BccKfhhadpoQNRz1ENsF1LzFwwuM2ZGgrcgxb1RFeA4C",
  "key6": "2skmLFHHduUN3JqeQT8M4hwn3VBFFrojNXrbw82QuUL4GiE8xr9aif5eEhK5pJYa87DXvfbLnW4MUwLC6gesDbDN",
  "key7": "28TDxnAJ1driu3xPKJS1jShXKGWeTsTuQaMgDkBHXp4ps1JR4La67JSP3vRCdtJWWEp2KvqkcKQmnmaXCN663ms4",
  "key8": "2s9gDb1NejUGNkWUNkUFUW8Mi2ZUPCd3WjASXFAzm9xu7dmTAHn3dYPuVtTpm2Dn2cDPHgHjNGp6gzD8BYMwzrV6",
  "key9": "zD3KAM1Q5STe84T9sKUErrcghdxBkzXZ6Y8TCZBbXjN5u3fHrWgpswMEUTizaaZ2CpS1GUd4GbHK6TVwYo15UNb",
  "key10": "3dk4hdvcaE9z3p1tHb5PfxiGyRPpbMvMMntstaysY3v6xXc3YYdWW4sMWY68sjgR7JT8gvErBMiKCfdsPZDthBqu",
  "key11": "4QEuH2nM21xoEjvVTdfvNGAbsixEpQmGQ6z6MrZB4qbSQhwsYsTKacDApNkZB8QypUVNrXMwQbJ1kVffM5FtVWPc",
  "key12": "5d5Rmvn5JUYgBhV9JirND2qrpySeNreAEzKLGSfNfoYjLjZmd3k2vQcxaVTN63sm8gvgjhKfNGp67UFLPMtr5Tap",
  "key13": "5TMzFkG4tjho2uwyBKJMN5sx6VYvusywTmRibXzWP9y8BQ4b9zAeEAfeKa1keXzWXvjFMgAzYrxfXQVUWoTExLTQ",
  "key14": "FmcSA8MfHsWcbsBeXtb8xGE2p8f4U2ij2KQpRCwMPfcxCwMdz72EuZ7LFjAhXJHBeaqjPxfSDN1NDzneDtb1UVf",
  "key15": "3LKXoggNU4gdKhB6X3Dn6wpkBBx5wDinqrY3SXdd3HRb23SG1UZkL35qTW2EhJqVAZh158nMaBs6C5znn5RGJbh2",
  "key16": "2mqpenoL7cLBsousdddB7o7qPCWVjcbEWqMTHQFegjCNiumKKXa8we5XbyyLgnrWvPmuTNA3yRGBDdgzrau47eEE",
  "key17": "5NKcMrYnqwcRxo8V64Tevrk8ZuNjEt7JVJEewRcDrXJerA145xfUv3ifS55DTDiYWVNhSDZkXXQfPd6LsTJkgdyh",
  "key18": "2f1p7hqnoJQvhuesVetNXRe5yGsDMFE9FZrnandLeaobTMYvVPvx1qpAC64AuKBFawiD19xznLwTjn5qWipdGgkK",
  "key19": "2r49jyMcRX27AeSdMXuTE6wE6NjVk4ve4DvoAggdTc8vmuLuT7G4EE1hHcABoGGo5YvpuCF78oMhtY1caNRP2MFj",
  "key20": "gyc9VaYZBpnFxEdMWdhddmjMvBYgRbStzBYvdohfqUH4aEXT7aLPYDvuG65d9GW83UH2iSvT3TZ4FAi6vkv4pp6",
  "key21": "5zk6HTSTDbuqMYeJxpiEWMKRYWSR2eCay7pDP8K2Vwg9Eu3eUqMPHmsY3dNggee4qSsrAs4JjifwfnvWnV9qJW7z",
  "key22": "4VtUwpuWtzc9iEraTmLgqRhfMMaZZvHnJjXkf9zMzWauXX1VJ9pWAT4x4d2wWQQNNYLZqSxpXLSmXKnYxQrHu9y1",
  "key23": "3fby9oDi4JAu1CxjcWK5JaASb1fJAuachyspMJS9GL2NE5b5bzbosHWkzxZFMinTE2fUiFBKUcXzXetgpeGjFDMm",
  "key24": "66F9aiMXErvEXZs48WU1UNymHuyYdzRadrsZTF7496UV3ygcscv4zhUT7GPkyMb85SxbfvQk7KpWxnxvffUJjU5f",
  "key25": "3YRjs7JFNMyJvEgw87ajng5xNayHgsp5CsouC6Q8CN8S9nSfs6QkAfbWBAXmKHoVpsCnYJGkqq8xDSYJyfqY4Zdu",
  "key26": "4n96jGuSTRn2MFNVXPgfact4MYg5AfQhcfvgGe5kxVEnzQbznRTL5ChLbgALT2fZW1wq1DhMv9cJjQUMBUySQ9T3",
  "key27": "5agjyJmasSKcSwub2Wq6VdxRbPi36bUr6v8pavByZQZRoFKw2UgSG9Ws4JgwkEyLsg364WRwfrjMu8c3yhPMSZun",
  "key28": "3Vb8vBsxxJjhSJWogA9s54ZXRZiLVSbKmRhDhHZqTqnS4VZfDnbcp2sWGzb4wsB3usgu2XSw2nkr7WupLGiBa1Vx",
  "key29": "37Ks7HqeohEWbR1yR4NtK51gcnLmNtPcZtskS3jFuAGiG9G9zc8sLWt85Uq6VkBhBYPrp9f3xPW4BzGWjZmTnBjL",
  "key30": "5PXgZKki7ZwmxdigKkEpkZcLHcETw1Mvve6cLKKfcSdZzKskQMvsceBmdzcR4ror4hDrmpRWuTcGdRRhwkfAUnJH",
  "key31": "46xAX8G9eWEJUNUtNkXJafUKMwD2qvZrGc8eweQncq9KUpXVSd2fkq5V8sU9KkaZRTqyt12f9FHcWRBZNqZY1ECN",
  "key32": "5E9UNT2Jm1pdv7NPxynSMqyGAX2j7KiNSLDo7eWqBkQRCTyJYEfoTQrMZpL1g36vuYDSKpisXXMtwRXauEM1uVSX",
  "key33": "5E46hAwuhRdNJwQzQ7KrH2mQFjAQucFA1XemdU6rvvN5UjM2c36mkZszja3FF8SaMviF1RN1ogdqGZuV3CgTdAKe",
  "key34": "57T7PYU6etKHPCTC1CwehGLLtvjNvprz7SLtdFCnFxqwvnv5uhinjDxMa6hVBR8Jq4ZJv2kvEWYHLaMzffnk3jVB",
  "key35": "3PwLmPxHPG9NxAjGEDHTTB2BnGccxkNfTCCcyetVtUswLjpDpqojSSLwHi9xofGD1gu7dBcXEq32bX8GtHGZmmQz",
  "key36": "361xc6pfg35yrLhJbm9rKwQAcV4ziMMgLszeb2LQMtTdvEHyfKSPemc6hsSpacH9d4AZspv99toWMPWPDAJqqqVN",
  "key37": "3FQaw4pdZv7P4d2PM4DXExuJLDy8RG8Cohr23pC9cFwZdShTqUYo46XX4uTAzrZamJahH9B3iD73c7SinNaCMcJB",
  "key38": "22B9yPj77bTmBSDRkrdaGaMv54wCCCU5MAVg9edm9BAugumUJf4HaubCeGHDyUS8gs5UU7L7uQoN5ZEmYjXMaKXL",
  "key39": "3f2uSnGgYXZKnbP9L4Ssm3WLCC7TRdahypid3fU1wYGDeqj1Eef8UDUsxfHRj6SFSDy2dYnHC41we42SNBpfC8Jv",
  "key40": "57rafASFTnuwFZTzRp1m8jsSzWdvj6yYZqpAmBJ6o39utXqKxSRraJvwREkiGq6ZErT1j1EBkMkLrTozGXzwUb52",
  "key41": "33n7bJ4gi4yduDv7ELKpd2PVKRNA7ZZs22aCcsQx9hxDaSXbW5UJJP1TgLuwDQ1evwMvBAU167wQQe4X4VGHxq7u",
  "key42": "41ANomtTZrZiVA1BpQBrKEP6chsLbBTC6zUCgn4zKAiJ82eQamg8vwVeEMGoKpEYCDgHTvUj7BkwDovSPMVhK72o",
  "key43": "4dXCuM97BtFsqLMomwG5puwR23Yz2C1GC1q9NqHaYZSyaiJCwDfBr7VNYciGAmkYNzgZaApeMbQcvBUj3jtFLYf9",
  "key44": "2DHKnk2ZS3PJhj8XgYrJGJx4qoQyffjVG61hY9L8U9T41MHbYdpba2Cz6LzNZu2tyVQtXvSbcgWpHNhRY4q7i2JC",
  "key45": "2ufRhD6G39WcyndjwWNv43gAmvFYYqoJQvYY8AZCUMSu3ioC5V6MUBMhwd1rTHWhzeheHS2fYtWmdqsqUQRHX2EW",
  "key46": "3JS82LU3ocdGpzQbpSqcR571PjJ8bxABDqiHPRzv8UErwvXDvjxJVzXsgCFnVypBYhYzAFbhZhp1ewfnCnN5jTzL",
  "key47": "5CR3ZGzxNp3DPpXriPNXNc28dHoURyV4rUCpWG3VhjeeyWmM4RDcNb6Lmn7jQG8KcqTPU43i1ZHgdsubFgzufoXi"
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
