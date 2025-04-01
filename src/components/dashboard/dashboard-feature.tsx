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
    "3zFVdMvotHvkatfvSqDo1XhU7815Qc5c6dK6t5RosNNCR77J2KHoX4Ee8z3j4oEjiaeJeYFSt776kBLRaH8UPT1B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48dyKNRvmKqeSXGw6qb2eieWRtGyycFsN33f2ByMP7JxiiTVanq2HRXDhhhZdfNoaPxR8ACPbePA4sV6zNPiaMes",
  "key1": "4anrJ2bK5Nx5o1GEfqsYw8QoWzhdj2LmZKgvb3X5DZz4yytn6CN4XiDhZj5CHpjun37JNYsDPnLF6a2jLkSC7SUj",
  "key2": "2DHHk5yn8isT2kbZfouwX3CQXGr5NSGGeKA27atqz9ohMD1BAbpw3FxndKq49ar3qhRLFe8Mygh8Jab95BYeuzPV",
  "key3": "2cSCzLErY7AJ7ehEtRtDKTde7uaPX2R7YkaH8poA9ecb6HwtS6Pehk6vBsJsQZTv8q3okFs9ipqQp5fLd3RRkWTm",
  "key4": "3uHJ1AGSmpmfZxieHSBNykHkKdxCkdQ9JX53p1m9A32N9NDeDXCbXNZdHQ3UyzX7RcrkSFtBfak4NZeRg7adrrfP",
  "key5": "31hFN8Wdw7PTjNWVTbPwfjJNgjALgC9MM2nQjqBEeUg1j9bHC2L5eQaD89wmXP742hGKtBwgFQtmPNwQ6i31yyye",
  "key6": "3xK7ZxBBXDZr4Gfa83pk37iuBAM5mDwBRGYKnMqvMdmXt127ywRrWx23HxzTb7pZscbH8vunhdjKYTJLR4ttrVEF",
  "key7": "5HB1ZitR3cA3uhHsCpjqwyAZR11xoQAbj1P8XKZThwiTFecSBq9syEcH7Bo1GdAPNox7CFoHxBWYcZbyEc1Ei6V1",
  "key8": "3ABqGu95qJYE8bwepdyLtBohkK19i2fQmK82Gjfkxf5ycJF3WvaB8ET582HsQCoSBPADYBxV4NwULfwCj6V8LzkP",
  "key9": "35YWreBKzfZ6aNNU26rLZiT4imSF9auPRGriMr6uBfSvwkaXKaZU9HrUqScCfMcBagQPtKGoSEHauBK6z2Eosqbr",
  "key10": "2LmgUpyMR9YYVTR69fkcFfbfMUac5MDAzWardPPuXzJ2HVt3ujt6x3z65jRudLKR5pPDXHVEAWDovgukzV9gAjrn",
  "key11": "2dMosazeoaz6unBXkYQwL41MTpYkxav9BpC5rzA8x7F7pgUEpoBkYeffnPEodBk7d7wmhjzZj3UNRxTPxPTzPY99",
  "key12": "5JvhurpdfWYfr2Fo9hLNgoWkHPKRByJ5S2Y6hyRysVZNn2QVrSs2qUByC1kHzyuYEXH7YGidYQ8QM2HQBbahs5pX",
  "key13": "nyUc2SfVY29rxdSimoryrUSGrmqQP7EbEYDkYTtxoBaDkzoNF6rXiwhwBfVLSMr28MQy86nux1Z2evA9AkKx6hk",
  "key14": "4hi24tWhmDp1dCRztMjmoZUYZvWre699rZdvRr9tcnrKtTQbFAcrrtbNj3W7HHRpU2dtcueV5BKTPjPGZGqS3noB",
  "key15": "4xG3Q5cJC3AssW7w3XqCV7hkdnbjHHVwgCfpgMnz4PGGjpQxUq5nVMfNLqfCBLp433BkPxfyZpnLcXJ1FzA3sGLE",
  "key16": "3xtZC1QqLaJuMqMugtsVmE5kjjfsyEaBNLecU3e8wkNxi4iEiSes9VR56cTDTaLqBLBSwb4w8TvSMncX4VfULmTq",
  "key17": "4cgVCNvhGHwBNPSrq1DHJEJjR7h2pRxHpRT39vgQ2eSsdy7Lfe2ESAw8s5oy7T99bKwE6xrbjWJCFhNXJj9VpDsV",
  "key18": "41toH7ai41vufWXPdBLPM3qvqaYwYN3GkWkTeMdPQjbxcp7Lwisdm7ouC16eWvKkyxJsMqXACrgZWFWXxaqUximH",
  "key19": "QgaELVEoF8MQfKff4ybFH7nHuPspqAKVDQJTWndwPFRbtQChcqFNMd66BFN5roiuSTvnyMVPm9LhXSei4CZcCuA",
  "key20": "3zLDNWpAbNPuvfuxmCejQuMhw44QCNvrnqBHZrJxMkmuNMej9HzGCvnHYztWC4Pqf6iFpV2bHmCYZRZuRpX8ohno",
  "key21": "gGoBqxpJuaGzT6CNgXAndRts6uYbtmLqwCQz8ucRSMc7xXXdinhCRcN62chfK3VKyMnC4ZEPQjVxe4s5z5XCArX",
  "key22": "v2QWDqwKVM121o1JpvEwJ3Po24gDq2ygfq6KyA4aRKfTQkveZywh8a2jUC7pscNJ36eW5E2hhqn1xGffZeFxfWf",
  "key23": "49WC1higD1rwVLLnFamq9X7YLuQevd9zPMRQRP5xNQVpKqgWPfibs2TGwhJ5xGFdhR5gtzPkT3QjYrrVPE44aM3d",
  "key24": "4nGbA4ZGnohhEtHj1dkcU6QEj99UB7GBPEFtejezFK2RHSHEd151NRS8D6GktVP3gt74ZqyGWgmJ8rA2d7fWFnxU",
  "key25": "3NG6WNTchg9ynoHMU3XVARmDnTnKDQDtP1WoXFzEEMY2JaMxDyaf6Sit2cou4J6AHZAhLghdFqw7NVKfhoEUDPMu",
  "key26": "LPJZgLBSvi1hefr4PGCtG7GB4SnpbT6fz1kk2oF9WXwb2PXyGhivv2uqvFaJGMgXbGTzUHa6wVAwKTTyrgor1iy",
  "key27": "4WJfU4jrAAr2ck6Zc3jHXYM3UNMMsb3Dh9zSkmBUVrMT1dNpiCeQ9qGv8NorLuVhJjvBKfb1vmHZAXKZ4okMQaqZ",
  "key28": "5x4dDyV1m3y8x753YQiFhyw7Q65n3e7VpS6heh1g1tGHcycvKYuNGVa9iXwHt1DUQbxo3NfK1kaVpk52TjRJyYKF",
  "key29": "3XsdbVAeUtedHbkfM1HwCn52QA2yWFQJY6uE76uz9VPnc3CrjKfyCnmjnYRwcFpGPU2N5xSvkFYRQytC3rXPMBiU",
  "key30": "3cZKBaDepcKRckH2BDShqQuVoeA6c8assziNMHLgYLYSQi1XyfNZX7NkJgTaJRfV7cp1FxvoUw2VJbkuJwqVvVLb",
  "key31": "2m9UCuAK8rqMJtY1ZVaZGiZos9ZRjaYkDPAdpBPm8YdXPWcVLFYKimSr6fdmxaaBQYSdFuPsZDwQYJuuBjrQBGPe",
  "key32": "3ZewgwoWFi9eDhFTDyYcrdZ3JLtGzAPeYYyJeHCKLaTURCQMLsT3q5FtHqbswZPs42ogQjEmCE6eXVm84kknqSjA",
  "key33": "feGmod4gf8ajBGaFMboTXtFxLAjpqNT9mfAp2puhufReAP2hmsDA1JwxH4PXB1YJH7hb9ujiQPUqPbvP45ZjVbJ",
  "key34": "2RJpKrrQto9Jcpio1jiQyUy2bjXij8SVuE1pNVXCgB3Jy1oBVkoTLo1kvftAkjYDfJfqnZ3ysgk4kfC2TDxz6GkM",
  "key35": "45oDur5fU3SMRLRxuqED4ZGvUZbCzGurYeSzxtmMzSEAYmpogRF8JnifMhL9Qn7QyAg3oAUjExq4MznfkH4XDrtV",
  "key36": "3MEr5JnfFts2p9kpY8JSVNXPr4g8xjFc4bNmorPeD2pukiLWsk64TSGR2RGHxBpZgATY1XoAgU7uEAVpyeJ8d3c5",
  "key37": "4W57QCzjyoHdWZ8seJHena64HK5htRA9j7icxZZouv5VkiMQJo1TD5Fb2khFybEZqhLdRGwdN9LueUdRxKXnR3RN",
  "key38": "2GCcf7X9V25CtBEpgbWkFg1xAnXtXgd8bjCdVGarTpAmM9TroJaRRPbDJvFUAQErRqzjT9y7YhiaJPf8juzGzAhf",
  "key39": "3tFGEsNrz2i3BDqRrAu3yrLt9eKHCgME2YUQLDA43cneCL59nk8rzCdyKeNRuPEw6ASHxfEukBShvh61h5gvvmpZ",
  "key40": "5bypPjpzEgJAE1VeaSPJ5Kh5KuVCKnDZoRTs4FZyVs8A59WMm5g1gNaehPw7ntG5iynKTuezEiWKYVYWMKsetTto",
  "key41": "2F3i5vJ4UCHxXjpbDqFGcrwBHtc6jNX2dwpqFCkDQZFTaMRUgCc2KBGv1ez9j1E3FAdjknDwqJfqwWi6CaigUtgQ",
  "key42": "5jy2Q2U3UwDuKn3sN6Gaf1nCH6EGyKbSdCQzEpiqVizhdPYMzPEu648irz9WrHRksCzZrdVXrYHWdkz2z2n7MLh2",
  "key43": "4EvaAXCFSJaBLcDM2KLeRbj2YJV7jeewQmzNK5XVonTtqUwQY8tXB4199XbWYHonDMLV71NExmHzKg5oMudR599Y",
  "key44": "5ELksT2bRUwq2nqLB8XRjFuWJqjDXcNcm1pEJtbXpuqwfVshMetCfB6iMVhmmf85pEenx4CBPJp4qUYThkNLR8Ni",
  "key45": "4pSmTzz3bJi2E2eRspTcv5qnVefVFhY6xcYtF1RpLupWTqb44jFd7GDk4YkDyojzS7hJHKdqe8y6gN4GgbiW5qfc",
  "key46": "5Gq7sCTzUw4pNM87VZu78faQmK6AQdpXiKpfaARFJuMaNCwhGG7KS6MzaETnU1VGC4ErLZqo8qDxvHVVMyTk37oV",
  "key47": "3vMSHQByvzYTsQ1QR3yh4MPJi8rnHyXqPtfFqQub825vBKstCEcxdjT8WHvsJuSMEJjNquEBZUoKcMDecfnmDyNu",
  "key48": "iZt1Yr3tsfiJzDWNN4YMXnMkRM2du5Sdo6fphapEMuTKPcMr7eEFnMccv6JryBQvgkiEKvWY82tkw4hXy4i4jBg"
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
