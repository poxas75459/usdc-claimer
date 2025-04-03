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
    "3VEdwXCm2Rs7wBBPmGx88Z7ZFSZzEGCmfYVoQd63uRw5J6GJBCiaAFaW7THzGGDCxDSt1eUAtzpbF4b1ZTDRRRGq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NBAmmTmQBHc7HYU9VoFq4amZHgjQ93d9DReD5JVsG7ukQxHdBPfaysmrJ4SCsinotuBsHQjqcxompZ2mensse8L",
  "key1": "25D1TVSbJdunYpUZzpo31AuP3A8spzNbyfbHJupZatJDibaE8UHF7RzUa67yc52Z9S9viYUFPeAbrRT7wXKoqAfL",
  "key2": "5tVZ8wxk8rr1uSHcxBAz6wpsHpXhjnBmbsJKn39rE3yBna4KVfy3A9BHooaAtpZ321Z4FASgu3yqymbw4Lo9Mpiq",
  "key3": "ikCA3fj315UcLLSRZEzjZtCyN8PMD7HtzqcWA19BA6mf814mg84PAfnh3ba9F8NmztxizKRkHf6XdW3ZGUYiNA4",
  "key4": "5NUr6jmTZQTbRxrRkN6Ko1nvM8cphc6SS8xucAgKpMaoEj4KxKJbko6E2NwrQosbcA3a4gpSKMgCLtSVbBGNGKCy",
  "key5": "2L5viccKFk65H2LxSwLJdN6vPwYibQHV4TmJvESNDaUEcGh4m4rFij3xB8SpSxnc4x6Pab2E1tcueZerAFutwTmt",
  "key6": "jZGPYxosLaKobjYHrrKM3vvjYp92hEppzxuKBsVPWxSXX29UT6wxAXHfKUZtqVdb6bwcDNRArcuGUBpoXj2dD2a",
  "key7": "5v6XZF5kmguBgsawC1oWn94qf61U9bWtQW6b82EaTNZCN7GLKw4C2sMShtDXWH4Kjn1GDVDRdsNh7bFqtrNVy7VW",
  "key8": "2u7xGwWbQuYhn5y5huu7GKyjyaigfSrPRaK2mBB3uwf4PAnxZcQjFjNSgxTtix2sGpky75RdyZvV4HwFUUm2Jqpe",
  "key9": "4m59XeXP1x16BTGUAoscwUdbBdA963aUYBPMXYUJAGAY5tmfnqG6cnJcWefSkJg3nvRoJWqkNQ37rbFyCWuCgje6",
  "key10": "3JdpP6EXM2WtKF5WDuVFGx71VnppzzSCYcvQvctTwo7MD89WUpjLaJd9Pz3nw7vTpvacpJfy3tBeGWxhsCEGikLX",
  "key11": "2GLqWBNfL7UPrSxj6UCVWGAyzH3CuzppH7aATLMbyMvFWeXKSMhuvkuvrx3S2PBMpoJpzUmaS8cA4ziD44mJ9fxk",
  "key12": "62Wf3tyx6uBzTdCZQ8ZdGh84AvMyt2m6VE9cjASRDJQfX2TUvi9S27vkbD6k9zpxoEykK1PoPcKPRyiJ4jZCAXKH",
  "key13": "5nKEg1Brnom6pJfRPfiQsy32YaCGnsyz8up4mK41Ntj5SfuGdXj4DSLQ397Y1VFR7H2YeuXefZkzUdfWxr4JK3Zm",
  "key14": "4sC21xGpaUrFJWk89djukteqZ8UwpaCec66Scbyx3DiBAjKXyHFZUSywYJiyhfnAK7tZfyXj4YwM9QQRXo62hcmZ",
  "key15": "4essgVd3pyLGTUtdqihobkZeJJRDTA2hvTyLiU93nSaQqHDcKqwVKikffjuvQYzBx4KZoY3eCSiLpxcsm7YdZhsY",
  "key16": "2Budpvuzv4Jwue1pe3Ba2R1tnKDqctgidLTMF4EYswMrukJS1S5r1k65e96qbX8nk9r7fxM6YS47YXAZHQjfS1xo",
  "key17": "2EbopJVH91kofGznM2Mv5YphBSXpSgJS29cuePsyo3vqko6si3yGnDrgDhde3vnhVAozoMdz8my7mR9JZRoSgQzr",
  "key18": "ucwAFESrjgNduM1dJX6xUAAi5smL6o3sxvqvZrZZsu1d3qMjZuYqtwKmyLDcmaKo2uxzsQUuhdLot1FCYKQGvyf",
  "key19": "jr6dsL7FYZ9qT8GGmECb1U9pGY17p1EEpX2uFiWkTa5oqAVXzpJkqbYkLs4iYbAM34xrRAoKzHJqavPtDFYHeBd",
  "key20": "tL3L5NgeKEt5snn5mMK3f2SCVa3cLfwsPyDMhyJwiFmrqbkrVPJj4a5DVaML4tNQPRwGb4Et9MFa1dUdCFNsy1W",
  "key21": "3HmHwBd9zsHo4dK12ZGQ2fq8qaujJXrK17xFhnwea1c44EaQ2fmVnybYikqgkRPrFaHRV4ZAVFFHiEjnfnL3UgRY",
  "key22": "365wA5TZzJsYSKo1n3YQX7kKb2BMoBaLWXdHmtwATxfn9uYcMiKwx2Nm9u8h163L53NsUXzztnpmVgf4pmCvHLno",
  "key23": "4FiubB6zaiHWqs8z5M2H4DX2bvzCaCmktYgMgwZ4fss5qFUF8zqfsjDr4qjHQm3UEyrMLcuBeL2KYS6dMpn22Eog",
  "key24": "2hpFMPgk8Nai1Wu3qZPnPTr7bgiLE1emrqJJXkYsn4cDhn783icBYS3uftU38HqHNvm32cT1EwggBGeTaCwHSoJB",
  "key25": "2LznHfffnZ7XzAcLEKRBp2XcHJjXnPwZTR2BYmKYEqvXkAUAbXfLqLZxKENx3t44857StWeCrVSNXvHvqe4o9xnz",
  "key26": "5X2b93z1qk3th21qUjnfAP11C28oA7QnsejNRA2SyFP6GefupnodJkKzYxKT7RntpYAoPEz49VEvRrFJzWX2eaHH",
  "key27": "3mbioj72fhvFQgXMqswBivyvUHfFY2P1jqyTmAYZykh43Jq5fHoy9mMSKyEiXYRu8b1u2G7gHtD9kivrvavAAU6e",
  "key28": "4M7in9W7aTnbmNfHVUyJ6ZjMWLvgq1rPDEBk3fyfpXYMKHHMynXSbDRLozFwdQwwsiuXfg6o9dFNondpzv7h7PGL",
  "key29": "5EZro5TonKDUugZ4GWFufStTmXexLaYfv6HpeaV2km3CRJQ2kefXQiGcvWLEvfm3HAjL8X3JAdLmadFJezLUV7DW",
  "key30": "2ebpv48H5F4tGJQZVDgAS1xnGhxkE1bNRee3uTwB9BDH5fyJAzx4WoPQ8JTkrHWm99nLH3JKi9tJ9jf5QUSK13K1",
  "key31": "2E1b6Fa2GHfmb6c3Djb1xVUuWTrab7nZbSkwehzurYN7nb2vEg6u4caqiQ94xNVXCfNzAYZCiBxfHT9pdLPxB5ek",
  "key32": "3esjxpvJ9xMPozmwmQgT7dHEhqPsS4PamFj36XKwZ55Eg3g7JdrdZbZJFgsaVTTj7Tq1adKokmftrfKrgLyk4ZUc",
  "key33": "28yD4uVSZ6h5WdUPtrmdUB87iR47D85fSjBY22wxwUdh18fG2QT5fnzBxqgK6dTYJMh4Zw8Fdt1ufxdY2XWn5zAy",
  "key34": "2TenL5fzbsKcC9W7gSbLbQuGJBofRBdBHhiqospJyHCYt4wH38FqSQJifr8eYUnfHPnZuL6Rf6QvQbopcJ2C6xxw",
  "key35": "u5B6BD2K1kU3pkcscAgbkT2F9ABDWRdXVhzjXrcEreF5WiQsBdjcVUpxrvXKi37rr4etmXHfFFPcvuYJkqPy2uP",
  "key36": "B7vtvHjxVMiehFscFVd7YiWpWubCTp4qmaGC3GATRpkzMWMpkwxG7GFGHwutEJwEHQALQLkxziU6qj4midssuBR",
  "key37": "3RaVxDzuQHNxqYtsXfb2XQoqNtNSgmRLmTCwFZZ6TuwSFc1qGNYjE3Bmqv3FoeV9QHKG6v9wL28Ey1PL29Need5L",
  "key38": "5ctLtJR4ZKFbd6eFgjj7FwPitHhSMWU7AtkPLvmq7gg3kGS11gPKNa6h28jsi2v3PW4mpXh6vT7bQvMQ1YueXn9b",
  "key39": "21FUjy7HPDdSBh4kmyqoEJMuw75skwrKu16ydDMAtiF8rf8r9N2Nd9bQ7YMnzt29vsB6qYeZd9RrnsR1CJiAhCBh",
  "key40": "hBroyeh4hTBku3Eht13k3sNHVLcXEDwPUV2d79ADeP8ueMF8NmdQVz1F78FwfYEYZdZAh2xkFtFqC8vnDbKEaTb",
  "key41": "4QsN2vWuaRnLRaA68Khkp29W9wUTfDu4iSek4cYa7z2N6jnuEVUMhZJKxPbifWc6R1BWpdBjbYUn7WekpqKcqfNr",
  "key42": "42YeUzDPXwJWGrCdcJYD4VeKhXtJsX1goPdg8tTJCUth8c975rGTpvm4dEpmVj6oje13aVzc1Uhq3RxqXFoFkvbn"
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
