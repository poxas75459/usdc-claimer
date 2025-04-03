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
    "4YPquZiUdGn2XKstwz7n1x4LgqKGBLFN9GWJGbDccKvubpUGW53t5zfSCE63mXuEGE5idpdAQiboMATEwViNHfs9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5245fCn6Z9PWAkYPgG1ShRmonim3aRgJK78LrEozqxYQgMVSWdaShK6DjwnoEX5jCSUWzDq1rjuMZZ2DthanAZV9",
  "key1": "274DosNHcpcYf3gSY6aYL91KuMcegkaR5NB83VnFqVHstuady9BttMSSVsgZ7Atfbt97FhoqKBkEU7eCUhgA1GXj",
  "key2": "4XfcMcmrRMfXAJNXmqTkWVot4PDuFTdXTEVR9nf8j6ZBvtSphYC7bdzBKovgJY15n4wirNPchiDcqBux4yRGPfbu",
  "key3": "51qUbTERaHK7H3ejKvYaTtdLZL4BBrypHxN1kyakvxPLzJJjKodHW9yHW6dt7CK5wzuidRhKJSHbFLpjA7KR88G2",
  "key4": "5RF9AXDk37pV2F66AqFosKFXNSZYynnZusXsFNmAMHYfCg56D73Z5FoM1Bc1p3J8Qy24p6qW38ezy5aTw791MRAy",
  "key5": "2RS1UPCbRGy3VUTWW8TaH9v1ZvE1MW4yv9hK2i2KRrgthEsxwyDDhx1xytjp5GM4pgg82ABEyCitsNdbzQfMj2BY",
  "key6": "gu4g7kvSpvDXys5DUbt9exUgpK8Pe56vzn2TUEfSwFyLviDYN2eB2iNQV2P2dwEYk2fYx15owd6ztBZFvXThX8z",
  "key7": "4y2cvbDygymsy6nSRJGKrL4ACQ6DxQdjuTjCEh3wX21Ra8wUtqoSQT4KP1LvHwwwH86YpXFNGYdhMd5JA5XEpyYN",
  "key8": "xGgWom99SbweacSEneDYz7a4V8ef65yxr8M5Au8U2KjRyEeATeY3u6tPmYEWPRmNVGoK9ntFoFzdLtYbiWW48kg",
  "key9": "4KdF3uNuvoUeNsmUu2xwh61KtEhyiZLeXtNMGfkWXZYGUiojR4qSDgkerDfnqzFFYXEe1SeaAsEDZkYSEyU6Z5V",
  "key10": "3zTMC8J29RaowNo3kV35T4pHsrYoT3QcFYAYEUHq9oqcY1j97uSjCvehUymxLFbfU8D8anCQZEuB3srdZPbZS4f9",
  "key11": "4TW1LWqTKwLXhFvhPgJoYeXbv4ZWevfepciqVggEaRa7fFoFYFGWKSL1V12UHFt5BfipZ91p4Syw1k1ufooWJhDj",
  "key12": "35jXiMuQfiQGM1qrj1E98oBcyRupV8nu4iCUbU8141FVWNm1qHrAya3x7EwiQaaPtQkRiR4wovKJbHDy31M8fwqm",
  "key13": "4fJkwj1enYxuXcraU3PywZ5vVSH1sFY8ScxdkRpqHwZe4q1Y19UiUzbXfivq1nQScjREVEG6v1z3D6XwFukh3cjs",
  "key14": "4gpiid1DE4prFuaoGL6B9wisvbi6oqvUUF41oq7tAFQJemZEtsp7h3UFPMvaEnoDCVN2ijqhepyTR6f7vhgBUtj1",
  "key15": "GTCewunmjPnTDoi5bGT6v41pF94YYBYqJXYVati9aZAtY2wRXtikYBdBPiRG1WSrpZ5Mi73HuPVoVf9zjzWvDgu",
  "key16": "5hTonmgCGgTQSEsYFyznHAGWgcj5u1cFiyMB1d9NhYkSBEQi3w3Sd6bxiRS62S5k8DYqmzxLfZ3GheydDRvDDgbK",
  "key17": "nkJcZNhNi96rb8EiKZHsSJhmYTKUYJLSTw48npeQvVte6QdGUv93T74T46UsNR8mVQDmYf4cETzuijy7avu6crL",
  "key18": "31GNyPWnVZoJCEQt7ckTPkTJaBmiMGtZXvyFf9NAQvnAGqDPrESaWGhDiwqAueGXoxP6uMx98qvSd1XENMg7Hc7h",
  "key19": "PS9HbXe6RuhyHqgcb8XLnov5U1rf5ihTTQwt7kBxBG9p3i4o87nm2ybH1FV6uteNTGTGn1EqfkK4bMpNh3GKuwR",
  "key20": "2vvfiwBRoufU3KNRHCZwaj7zG71sEreqbpniaNeaP4utMVJrgpjmd8Gxxz1zk9xq8PaLyZgkb7GjZ1yjwfcK1wpi",
  "key21": "2kgXk2ekrShhdoJtwYzciLqtMhpVKkqcBDAXS3RtittyrTRfhq5Z1ARpbGt8ScQDzB26WXtnqjKNQPePVyx6uy2R",
  "key22": "g8EBgkn2gwJ6sJ9n7XWgFfAmyQNwLGN6CgUJ5vsmpqeFtEpvmC1LDnBPKJ5soeLR4i8Vr3voGs5LpwxJ8R12Mqd",
  "key23": "5rY7tJhgqgc9gdSWTsG4LZdik7qS3gSFLz1WYH3sBPBx2b3bHM2UBT79pEG3c8T5MixHTofMgrmAqfZWmoPERYyJ",
  "key24": "5q7wBvrDXXbencwuaZqGWdNLihtd9His6z1pUBRpstGHJJtkAT3BFXWBZAhsb8VwKM2MW9JSmxAeba1iGp1KwyTe",
  "key25": "3tTW5J6y5nMu8qg7zwB1cig2yS128g4kAcM8ZdTjji7QwPmXcKQ7r7yq5k8NoaUBqw5AA2rqC34gSKHCn2HJcPHQ",
  "key26": "5zWk5x5LeZuQgDoHA1GDaSFLGzLqaBauFrxsVn4DHJ9DjvCJw2sJtA5vuALzHqBpP1g5zH9X1UhbWZeeysytijS7",
  "key27": "ZrAb1AG1QccZTsfRtJ6ZiS9QnH1b8moWx4bfQGUFPc5LoZQMDhQpwEFympn1iSUKravA3dZcNU9Heq4y3423fzs",
  "key28": "2Wd2yLDfS3QG3MQmBdUsEczyRAL99cYSJhRpj2mZhi2FDTkT8kAQmk8XAxXcKMVc4RpbCKMyt9iSPKWv3VQiuxNP",
  "key29": "5Q4MzRzco5vRPbDfQ3kTsfmHKF629gFreh1MJGsinAu9Q8kiMN8p5Cn4broE8MqbKQCUwXqzEFoLSifxo5kKVaPY",
  "key30": "tSXydARBPHLqG8DcLDxPEPByeEZhmKVB9hGUAMWUvSZ1GN34N9tAExEDWGyx8kaMuhAxtrsBSQiubPktVsurBZe",
  "key31": "5qbGevridVQNJWBBLT9dtU3xNV9QKfE7MC3S2P9nHyXpabzuPnaPNKsHCT5RgtuKpLsZVfVVDbjNxUsaKcuLdqGS",
  "key32": "gaJdXnqSasp29WJhDZXWbZCmgm1j7F4CbZXZXFNqp5fYej5eu8a3L9Ue36UnPLQRU4tPCWcHxf79wejVLBAfx9y",
  "key33": "46baTHBduDj4KJykYomHNGuL3JZ2g7hUA4Lo6ESc7NkKtXaxv7WnLg8dRv5rXTta3CVBfJ42VaCNx3KajF2dT3rk",
  "key34": "2xpNAYxm4JvApcBFwLix53aReZRRkNLWYeaJUFZGrF8kCtEGQ4zxRKSYsSRW1aQPUTK4rojTpwJEPXmEk9h4CxrQ"
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
