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
    "5LAbkZ7nZ6MGZ3UkH6XnnoUdpXvzkQSvTZb1BeqfuGoZgtUnoRPVFuH5D4hCypJ3brYBdKrbGXq38KQkYFQ9Hvc8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yff248UDiUrzamGqGQRPE2BMaaACqpenLi9a7m7CYpWg6S2rf6HUHSL4A1LVJBEwnzaob4zsAZGb5FRfJ3stMME",
  "key1": "3iEvt9XqXqpA22YKcmzyXJqtFpxwTJHsgNCrGmccyv6VLZMHwJ1aDM5SokCw1uWXKS17YRYX9rk8V92ucuZuBSsB",
  "key2": "5RgmGTKePAnuKw3tEP6cLu63KsAz2kDs1vWTsmcZr9B47gJN46kZ8338aMavU6ynchFbsSKu4ZLNuEdwEzyUbDiS",
  "key3": "2oM5xRjBr4rQD3disGmTRasb9TwD9NEi6fnUfqYzjFpWBQCpEft7mRVEJhCj44f7qD4KUSA8VtFK463zmaTFMymf",
  "key4": "4WX9gTyC1GdUZzoHAyoCP5wwhejdY5fCwLVh5EtGGjh81CcEqJPcp5NawaxVdjd7rCxuWHL3Ccro4k6i2GkBJCtm",
  "key5": "2xKBAf8hpcJXMtmzhoTzPUHpMqNWnW66SxqXBj8kEVqZn73XE4nhvkeTWkjrpSt3KHtmayt13kBbsXHrSUZLR3nU",
  "key6": "2bVrDs7rQCCZ65Qi915KjibGaRqSfVjLwwkHFNusta2uazfoknkh7RjWBJBvRpu5CAYuc18Am8yC3qi9vBJaP5Xo",
  "key7": "44AxTg7MBrzNwfTTaN8MKFiMXg1bh7G8mcRa4pTDAg78o9WxigCLHpkQcNJxYw4Hcg73itw2NK78wQJ6R49gPyHr",
  "key8": "BnbztvEBbXkgxpW9FAw6wQ1kXwe6YPD7PVXZrCP3pijySAmzejUFvKuQHVEyNHs1aTkzLptgNVuAQDRvmitUDuj",
  "key9": "2EHuhqLXmjGb8WUKppLxXRQMh1jDGkb5ezExf77MvMh2mXHD7ER4Es6gomEvVHQPLC4PCpMUP8KN2apo2anZLFey",
  "key10": "4GHfT7vGfSrDsgn8eHmEcPByijiVVUhiTpiw22YRV7UbHcjX1EJQdvGJje9vHdV4urZqGTxU4mhzcyhppapk7YQc",
  "key11": "2Y9K1KAV8KipCPLzLhx3g5db43cDY1R49mJMyxrDcwnDeSUtumFZc5eZEgiuCT85zJis1paypccoRzsAUcP1nUJB",
  "key12": "4VSXYQrXREX8LAuyp3PdW6EaryoeZjFC269Uc4nNJmj9zSFXcbXpRhGstPszCiBeN65edMb2VmoFvagN7r11AkQj",
  "key13": "38FzqBp6fbSPp6S3vbzX2T3UxkZbSDYqGYuJum7iac5rm5jfTudhVKm8BN2JZsDKN92wxL3qUtSR1sUaGyR98NsP",
  "key14": "9qoCBnY6SKTYEcRQZvHBVHTRaCLaPiZTvzkVP3aYzbjFjJ62YQ6oBYx9YQbBifhWuzSAbGThWqHfoRNy6jV34cu",
  "key15": "hXWbbccEqAfKVBdGnkACTRb444toUZMa69V3dRmYTSdvyMcJf7KQN8sHVYxK8a478AXZ1uSEncaGBChQbm3Aw9u",
  "key16": "4aWZMfqTk5gXvBXpcgudmEU8abubSYQTNiQRTE1XTJmkoXGCpmW8wrMtKzP9an8WPmzEVfaqBeyLmxXKcLTbQYCa",
  "key17": "sjuYmTAZB2RpMtdW19VY6s8By9bFCGNL5ykaWYsHmdwHaoLH6hRQWgEgjBUmC3qu6o7cuNPjVuhAALUvmDiD6b2",
  "key18": "23How9b63otVMZ4xoKzuNJGqxHA97xAyQAy4jirV9R17YmXP2jswQJKdN5Le4yWb19qfeyaRt7LqeJzSDVfHVQUp",
  "key19": "2czewgDrdprQccCABPo7B4uzP2TvSoEz6oVGmJPc5WtTenMVyajA3QU1e5P6nwT7MaSbFy9dRcgro4sbHZPZnVCa",
  "key20": "4YjrK59CHCNQmCbQycrwNQ5B5jh9YrKo2tfCWss8WXxt1VtR6JjhRv9jsmGXx2fQ98LuwcBTWzGLjnxQ8gEaaN9n",
  "key21": "3w8QK82cb7sLUjS8C3Bd3Wskcf7EvEyja7Nd3B56q5UfifCMzEnqakpYwbpGFgWohEhe7h9bHvfixN3bXx9BaWjA",
  "key22": "5VJFeZpPfF6FgqsZAFdNPQQFcCxZigqK5N6Yk8DPHKvGexgG8AWKQjpQKriQebiq4aqmvooxKd8RFBdJ2BBWnS9K",
  "key23": "4s285VLh4uuGW9NApo1Ym3yfr2ywDV8LR5CjA1jxqjFhvwHVZDXAVyUVRtWE2ywdTFAQPNMKwoCdvrstihi3Xdxw",
  "key24": "5aSVNMWngdFcMX8YeDAxCm7uDNyCgaKt3FRG1sTiQrmRgcwj1SDGF9svtJDh5PNcCkmTmycAKzvQTibzwRAmwdnu",
  "key25": "hFhNyKdmgpqCespzgtga3teh5QMDcbaqH3gZrLBYhTtLVp3NGPut59FnBmwf37z8D8AQ3MFaJYS2mAt16ybHmHf",
  "key26": "2FcoioHp1QGmgwqXV8hVEtNngDnzrNkWdZC5y6oS11wAtwfLNUkqHEsRKmyf41eUxaSnKX14P2cZr7B6WBtkWibm",
  "key27": "4j35ewzfxBnnFQKWyFSNFh8ceywRYJycBt2XgKNi2e7yQzUEnBWsQuPnquG1uKWMbZmByNVctGd2n4FG7XyLSvQH",
  "key28": "24PcwYxLU9w7S4yPMwkxrj8rXXwVdx72qRw1DKJ8968CL1kKMao2KLuNFcYofyHxbPsLCX89nSSxy5HVvq9x1bz9",
  "key29": "3zeginuyWyghkhXEC6pgZd5hBEVDrpANgHhHxuwgDJpryh3WP6fmaC8D8WtftQcWeHjQMMKy6deSeedJQdRqjgax",
  "key30": "2mhSnicpi1CYdraMHPUN8bKKmxAojn8CFivLAovU4tG1J58cb3ddDVeoajjBW3qM84iJngTn4GAYZAhgaGSKCDqW",
  "key31": "LVBqgy5sorWHDm2kGN7qWw4JUnsiHVC89neE3BbBHQXPHQsxNd5K7Uj8oeXLLbKjgr9CmFLFuFGzG8VQu7VtN89",
  "key32": "55Bum8oc3qadqCnYFEjRfosuWen2R9DgLHnDGhEC3LAH1DWzcfY3vovp6WQuQuonJGBTZrDqcNHQeMrKXkXFB1Tj",
  "key33": "5GYf1Vvbwr8uf3yrma9RJogJHe5fkxkvKfyNMZ4TkG7mFMgfWi8mpXTqQw2pthbomGVHj68EsnFnhLgtUsp35QNe",
  "key34": "46QWsnmwKCwio7tCB32xwFP9xKnE6rc7Hm5juGuBJD9BhfRgRDMdiPJuk96Pzt8NadrmBgCZARpUK2qcfhKytpCs",
  "key35": "3kctbYfT3vgQponxnC8k5mrkBbVbmVjci4Jwna1hyFtxe85LmR285bJAVSyJamwYRBZNopH9zJuq5B54b8747hz5",
  "key36": "2jVo6gxeNR7X77kj7X5m7VrYHkq6tmPSGmsG14ZCQD2NGqyPshznBYeKavsFkCWmRsPrbLqMLjhL71zroUrRAKeW",
  "key37": "3iuytkn6yPFt4hxiX7hWV7VG3oq9fqspqXDjSZCrvax5W32qnGJ9HRXq7UeRrmQbj78FT2tgMvd5NXep7r3YzBxM",
  "key38": "5QrLinK2oXZTayXNFbp5jbp9mpU2CdAVrECkq1TRCSXYYpoDJrQCLV5U1UEQFmk6BzzCAJ4qgckTV6hkfGwMvKaT",
  "key39": "1by6HWg92JPo3E2tPjKuC9ziaPe2gFqcfyCG9ZmiP3JtiXtt1DvscfhgZHQ29G8eTR57rc5GF5AbqhyczFYQtWr",
  "key40": "2Nqh4xbwHtXVJoUrGjUoMDtWNnYp3FdXgJJEfdjeLxEftn3vWCcoDaFQZuZLoxX2ytPZpFnpJhCqrkXq2SPzKBxW",
  "key41": "xP716dQRuTHd7TUntrYejHH1HTu9VzvgwXeWbT6BCUbfJ7Ep4uhYwsaHSQ2TwXmc5sFD3bjsnf2q1ZeW3GyPtRe",
  "key42": "2uFAtesgnmiKv6nZPpAz2qkUtyLBijtfzUo4wNHhNvE5dLi34gY9Eq9rdVr9srcu7NPMwUfurdahREgQswVnAN27",
  "key43": "VetE7CcxbHLE4SzQZwawdDqr37tC2M5mWpHgheb4QuejJNFGdSPykUjEQr1xpVxeCukhvqPEMVVWfzjYymkTKDN"
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
