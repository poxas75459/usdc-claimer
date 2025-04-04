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
    "4TMCCt6KeSvzq3eHpTkfQEQRovHXD9UJjwEwW9AH5K1ZTaHWQzK5eZ6eTqzmzogqqCzu4DKkzMJXjxdt2LaJ4jHH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yvp5w4BUcnEyZ7oWB7V51PJeeqp9Tu9Gswg8couNJgV36Y9L2bcELxSnTCYiqoaNnFiarsrE5iMJV6o3N1g4E34",
  "key1": "2e9C5E44EpyDCRKzKsWkjtW83v2zQBDdYbQP2ASxLS94gru5GNNXFxig7b8KnpRJbjmpYjyHW78JGWbnazT1dqxt",
  "key2": "5NjRhfQGN2UUBCBgYq7RMsvp6K1QDGZqeP65sDaQ3PD3AXW6PKk8SbSP2HTnxyFYwNcrWPznnuehDA1m6KhpDdHh",
  "key3": "5UabC83VAtiybWArhYSmY6a1TBe9FBr9fc9DbneXeFenF7Xky6u6NAuaRxZFhvCRyUcVdnQpJjsSJbZCJo4fQ9wJ",
  "key4": "2bHZwKz8j9NPGpJKHmfwATGeTHF3mnDeqdkzfTmTEA5rPC8U5h6GeJm2iPJwLy3aXzGCfTcmga5GZKRWk3anpLWw",
  "key5": "387sEPG6nHyW2jXtrhmjd9YwjoR9mjjmssK1NcH2ordD7ZYRLn91uMwBtQjKimcQ8LKftULCEZSTeRJWVuKqz2DT",
  "key6": "3rbGJfoAXq7C2ahHBjAQHbhWYENVJz1NrtSk3irybjkbWhZQCDgJPtas7bo6xu2B4pMzyCuwhmgFcxPztdySkHdU",
  "key7": "czRjCcHwb5zS759EMt8nkgV82dhyS6aPGwsfgJxvzJYMuf2rmjvWJry4oZ1ZiVjQH7YCbnDhCpgV9GxD6uqcTUR",
  "key8": "4n3K4qAR7UTtYRj9eJnQvDMKswfzxFwRtmmohSg9PqS9xqcc18tgHGMxfbSsFtwaoVEoL3MGsubkwovFH76XDuqx",
  "key9": "4QcCNFsQzcvbqf7iGdcP4ZPE1u1MozKwkD53nGwKZzbqRcHLnTSqHakCo4M3Z7azzqVcxZJy3xXZuPw6asBWGqmb",
  "key10": "54qvshrkNGL4WvS44P72EfunrPyNKL2mN1h1Jxo9ofmRstNHf9xLM4CeCPndLbfoxGranaovUcoypmNihi4xYT1r",
  "key11": "41i9EUstvSWHnuRwPcdpNgjHDdSoXQV1RbLciga56JvdLPEWHyHDchApVosmBUm2Hy6XDVjZutRXMLiNqRH8PUue",
  "key12": "25DQm1ci1ashHnGugnnNfsVnMj5mvfDRiUdRo2UpeGunWbB9AjFCGkcqdbXaotsLJAhLnTmQs5Ci1Mwqju5bFawZ",
  "key13": "4UXE6fH6PmkFNWqTmBghvsriwSkY12hyg4pzf8vFRwFxg9entCci3M1BsehPArKwP5Ka11cBuvL7oxtwYwpM7vKr",
  "key14": "53GpdcKT4syWs2X3MDtGCy3huBeAHuHtbPHKHJD5MbySvQAXHiUzdcpJeWKpAmWJMPgxE8HAM4BrV4Pzm4LUCcVt",
  "key15": "zPwUbRPq6X5krs7YtcYysFFiRUzRhYCvQsfbVGP1Pe5e7niSRSiTjV4RXEcjGD1k5UJb4VoXQWPWrdPfrKDUj1y",
  "key16": "3TZQvB6HMomZooZrvEHqJ5BmjKH1NsPtK4mTVJp6fEknb7h9KAd66Bj9b85X2m8c8dQxdWpK4rEZxYRHL3EfTy8J",
  "key17": "vUcz92euHibGCYkAA7A4Mx4z6iLLaF7sKiSbqw2GZDw6iM84nT759dSUok8CYxWsgUwZiQ5gTnyNY4ZzDXF6Jma",
  "key18": "2RnvEjL8vGojpcsKZBgfB59R1MsibFEA6L6XXjwcnFGPdwGmsHmNs5oTEzeG9NKfYVdzytwkAc3ojS1Ej9di5VEk",
  "key19": "4bqj3Cc7FNJK6mv2sa4daS6Ji55wkh3dHy32LQM2DUtJVzZfUvZCkE6ZSxdeKRm941FdjWTCJLvYUsWw8pjL97hu",
  "key20": "L8zpBG4NC1majVWCs5gEHyyWMHV7pjvpjbM4c1tBVx7tXbaFACczQ43Buo17K3CmwTjrH2rpd8bPFuZf98wePmD",
  "key21": "5UceRkBDWZGKSdAwpQPJGmsDfWkM2w9R85XRaRQtnViErR2qWt3b2sgP1utKmPueo8AoT9XZzaQsqDKXDwiHkRWo",
  "key22": "DATeztUs5BUjqQaDB3J5ZgYeHuv5gwx5r34hQfjZuZAuXZ9CzxuRbBi2AnaR2KvdRubhy4ZzcSTuuoGh8XGc5ZL",
  "key23": "5GzzUrP4quFecjAMpMpF2iB61z9xuHYMe7cJUfnpSx8ZHeC3DXGv3RV3pZ6c3dkgv3cpGC5CEEFzd82Aft66AxEz",
  "key24": "FQqxCohejdT589v3WTwDPqPo5gU4a3av3As23ggFdit9uBKrBXQfrSJSveNTcPBipGdDSJ6ZWXvoBccPmyeqZiu",
  "key25": "2N9kvATbWaGjynsnC3WZEzusyh5iSnzrHLhVWetZAnyuuwcFZdaY7nf67ZKysrB31JwvW1nn7A6G8cgUGx2w4aVG",
  "key26": "rysSKKfoanNxik3iWmMpG8QZ2erkq4UTBz1ra1Q6mBEfdcBJnarkDUYPf1dCCjrEyEjRR4wcypWgYou762vRSp2",
  "key27": "3zbWD7Arp1iGshUA5S8BXTVP2huxzPWXd6vcMvsD81atG3TtP3JGt45dPtzkVWrb9fnN3U8ch2ciaVP1z1gQTgdS",
  "key28": "2u7PyCMyp5GXBKXRGf6ubbKUmavjAhx3UdcrUovknQpS5WCq7f3qV27Skznq94NpPuFfndqTe6pGSKvnn1J3CRN9",
  "key29": "47jpR5bNw9dSPRwLZLQtd34AyFSV752Z5eBW8dmcmBXdixPz6EBPNXuMEhrmSe4sGbEgSo5jtKAWQQjT3JxXq8pD",
  "key30": "ogAU1PYWGrzrAXAXJkpjsE5HXgY3xxjKMtc9Nt3VphwVoirrt2n1RHFJ7k3KEANKtE4sMAVyKHBk6FjhCX5cK7g",
  "key31": "WrFhzvZao4jXbzw55rVMTYZK5Mj9bYJrQJZcvJhpDRHAJi4R7o6QVk6pGMZtyqC96SpoA3a4jc7kXU1jG3esW2E",
  "key32": "62asfMFzHQ2no2PRtesQ7azkGzwL6sLJNffH2DfLSzgVv9ffsnt2fkrKAXW9ttwGKr62BPesRYVcNwDXbT59amDn",
  "key33": "5CfeqycmuvbcxeCnuACRyu7Da67oN7cwqLdsGioVfm2c39A46e1eJ7UE5Qxi2nbiuqg1UhBCsi1CtWY2y3a5oS1G",
  "key34": "y7QhNvkxPgGaqx4xEPyjWUdnWs2K3dL1Gwuy1vEBuFJUtqnvy7C26DpJXaz4oSan1E3PAtgsnDMJTLtkzky5Bpe",
  "key35": "4WRGrfsRwarnbCYCRs1N25WQbkQojHM53wAgzBC247Rnwku9eMfZfKzBeUZyYcuYT59RCc8ogrTtuEjmbAYqRKgf",
  "key36": "3K6EEsiLjfSN2uWo5WZZ4sTfTReBGRsnRtuLMfCibitVQPSCGZpWY1XbLGDfxPwxc6ynujMxPJUQeFj1Yk7EiMij",
  "key37": "4y3dgAYKbcmd8UEqg5wCh51phtL7wS4CVDNCmWym62UPbmCtkVGawMgNzTf3u6JXKpb8HqXYpQtrHLdA4hwRMXmg",
  "key38": "5prafJQQcuW2UP9fSpMymqKAViwNE7PQCMazj4v4C1NLnT1AYnFtfiATqofXVwuN4mv2frkpL3xHckG98EwsHTTb"
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
