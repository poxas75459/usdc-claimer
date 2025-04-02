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
    "3snkgpnExQ1wAVVbWAoXJXfQzV2jaFmgj7EQ8t7KxeFdFEs5jAErB9FqV1ebQTqEpwyotoQLcKJ71pfoiUdHMY1s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uSLZtDabyrxNvB8WVbzAQH8HvJQ54K5L7NPseKoRKW7eZqZsxtkrXrSdxR8CG5bgMZyzAbEjYmnaaa2QKKmkZ5R",
  "key1": "5jUDHiDiuVR54XVVCvm8R3eosgKWVJUmGibb1LVDFPWv3p5tjPiVoSTNmZNhMg1oxQ5dGRawtfzWHrkp1rAwQwHZ",
  "key2": "fPm5enf1aw7ww5F5dV6aoai1keLY34beYF9SqDRyY5uQ3D9Jac3cWTpBUn1F5ZbLtJdG8oXJzctAoBqNNAme7ZD",
  "key3": "uubbWF1X9sWwJwWSbtaBzPpXfTv62L87yGfo7KG9XrYfgU5vLu5c82ZDUBwjNqCvr9k9S7mWY4JGrXG97REEudJ",
  "key4": "4QbfrePFEKmjyUfjRjpPU5h5b7pyXdKJaD5kEP4mM4uSEGNCsDN1EWzjoRbHo614bqPG43VkiuN5YT45YbMnPFAz",
  "key5": "GhAKYe33UDFyj2rwsVGJXsV8tmZtMebCpc31DvdvrVtCPAjQeR9Yp7kQvpM2uHUxGzJzBnZsKwtPwaQApSecKJ3",
  "key6": "4KL73t9FafTEGfrY7UizWNz62zWpUugr2FE92ZG7ZXABTwNcwcv6hDAYQFifUQMeVu18XSSB3r22TLu2VQmCRc6K",
  "key7": "u9FHhSQ2iKZ5A1iv8jWtspmZKFqR5MXoXPQSV5Duxg9oanhsKioW7E24nknpgmFUTAzjf6kj7zrDpa3jj2T2GNa",
  "key8": "pz8k2z7wR5VENgUVPRARoD2igAouwTgkcg39FzTnkXDGsLDnVWub9WZy2hFZnqUu3s9ct9rKBSzJb3Jh6rattmZ",
  "key9": "54ocAZ44qVQ3jou25Shg2DxnEUTtxxnRDPtdGUqFNfACWcEL4Wsd2WgtK5c683f2UBk5FGD5sgdwofuoQyLVCjYe",
  "key10": "55HkSDskUJ9WdiKPKSGgh9orDkt8ew3NGbtz7o2ivuzDxNhfNV4fuhyQ5b4Kz2saRPxJgcdC3yTVEpUhhNSZ2eX5",
  "key11": "4d8SYzortfi5ui1qWbpYXajqYrFAxX8Qphr18YAuz2aBsK1sbrYR3UgccZAvN3oPz8D7RKCstENrjpUVcFpWbNku",
  "key12": "2zHVxy5cpLHc7uswR3j28xjwnqiJ4y9bgU4VRpG7kfHCrvND2MKkySq4sw9N4cUudUU5u7HeqAEz97BAh5V8yQAx",
  "key13": "Fb5ndsu6cbeVrp8zcsggsCYfFACaTbWAbRD5tLAWMN87PxL6jP4frGLXtx6ppLV8cE8GCHQXHLoyUhXYhBEnFcQ",
  "key14": "4bjbHva1YEQ4mpimYmwgcrVpvobnay3X8bTxszBATRP9N9hCzeMoA2BXgPqxqo7trxkWwbAVMwFKpmsPbMKqpXb3",
  "key15": "4iqtNLG2kShVXdcNmA43YNp8HYU2Cr7AkEymsYZNvP2rpxZDH2Yjg5ZLiQRjTZHDi2R1YTAdnTjcR8uef2EJVUzX",
  "key16": "2goooNoJGsgK5NrigQ2iMLiF9VTtX2byMEnfZ2Z2WXHFXRqf46chbjwwDhPWUAN55mCYBow3Kx8x17pSywsnqFwh",
  "key17": "SaFF24JwVhesyxrF3kBqzxBSLXUP56C8sNZAGon16nUxveg17tacA12swQavYyy1EPCogAjgmeX9Ls2d621RTUW",
  "key18": "1biqmvCf7oazcNieyAtkj65eSN7579NRBTNWkKLiWEeiFFBCGFZ4UchVus8FqMYJVPMhskeYJ5Vibn8p3g8MpDp",
  "key19": "3Buzj25bNTCGqG1PvSHn8qFC16Z11FDy2D8r8LGwG4NyBWZ7ewYdc8q2kXnw2dhs83iZvTMUDPWpCxafaavwWrUS",
  "key20": "4oVAA3zTZzfYdMaDkdSaoB3xYQsBzwtCY3Gn6C3RF7m5dc1H3rmyYtP9Vc4dAxc9FY8kNvVKsmCmuBCNCa6KVWDQ",
  "key21": "459XNTL7pWhwvf1pP9zwyutankmBZLjaYGkzmNUgYELmSPJUwpqjfRXKzLfrSW3DBuQeSudG2MZLCk33z5KRJeCB",
  "key22": "58KcXBxyWreXap5Gp6S7L8MHm8gpyYgdop6yuUzHx7f8TQq4oHSExjqSNnGVtDbtf9eMCiV6nNuijXcg6zRBJV4y",
  "key23": "393ccM6KPiixaDKsczoJVd3PvkLEqL9cRPP9yCam9kW3FmPvDPkNsmEuYxvF5nShxEr9jyZLdojyrZfPBxGZfCBV",
  "key24": "5jt5dFCoX3hP1X4eX4CYqg57DetJdG8QbEfgAbA9dwWhi7MXP5mSW4uukZJDFfWH5YCSBoZRMZPsYWQAVpAwbMjc",
  "key25": "5TguNH8zobjAkofv8AQqC1uZ8QJjqypgFuTGYE859kS812FPi84JyNgDpXuH7dkokWb6HobGkZJRb46vRJpRsNoV",
  "key26": "NiPvxUvx7bsihbeMvJN4PnsJVXrvbbuFSpGwQSjS61tufu1YkAXcCLERMVSUbPBk6zcQcuXrPJsgv9JH4khSWQr",
  "key27": "4sRKHS3oNhjkiPaXMtMAzD1ijhqqEvSZ9TPSSFFziFcreVsyaj9EQEUKUygsr2bgcasTuENLezxL63AU8c6w5Qmp",
  "key28": "4m8imvXRm22wC9EkAssFHXQV4H3wfx97sVmrd7xKnrUQbmcMsb5eEp5PZszdihWApjd9ZFeqoKZqCX8PELqzsXw6",
  "key29": "4RELfJg12NKNktrfbNMTtP2FWAM8LFKMxkJyYTUUnJRZzUgXGB6PP7t9LQBEobLe5hq2QjS4JXZnrKn4YQB1zyww",
  "key30": "4LhGZTY2WYUDUdCoNaefEvwteDHuNqj8TwrFRfLzQkRczrZKDTLbAVT1hNbyemcMrc9ouTcbKXrzwcuhpLG5avLg",
  "key31": "4naZ8P13EVoS8MjK7vJghMxVJ5XQGpfShnVCowJACvugtEzUiBs3auQWi1jQqEyBJg6Z9W6QaVv2M1wr8qQgDF5Z",
  "key32": "2xLSTioXv6ihK1woYAnXCcGv9dNj9in5dZtLe2xS9G45FnAET3V81GcbhamNPjUs45TvfMR14g7i9LizufPjT9YM",
  "key33": "i1Y36mh2U7LDFZh3HvpsYVj4MKpMDjykKXLjLVZBq5tYDFqA1uALdNzrcBqU9SrjbAzSFuWqDcc8fadcnJnVe5F"
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
