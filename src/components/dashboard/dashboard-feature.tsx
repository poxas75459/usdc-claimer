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
    "3M1m7H3wTZNf5ACoVLJS9ixfNVoRhrEzd2dUpExWaZGSroHCEeVgk3H6N2SezhLaq7bW9A7xUL5oWady24uqJrbd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3he5REY8BJ5TZ3cfQdYo5mppHRbSxgwb5QFuUNozJmkzFmPhsaMvMthu6Y8NftuvMFCRKANkJoXPxAtxcQCbGUgq",
  "key1": "2Udi9MUgBcXEdpjY8DqP9AHBnhvCD56HSsNGYGExrgsQX5Tpv1cQ6aoLByYs8P1zMbAXcnAtSwiBkcvKkyHiMA5X",
  "key2": "iZPpmHmyYQKo6ufPXQ1JJfqJigGGvcz3SdLw9hAtdRR2U8VbfPdSHv1K6rYarhiZj4nVEA4y9abAMNUaJYB15rf",
  "key3": "2suYDN3R6fBZxNV8ZGBZb2XjvwjKiyP1cZycKXYzVd83HSh3xevy3n15v8j3UA38fzvbuGEoS3cR2Jptt8PFCmrz",
  "key4": "5xPK2dCGfnsGmE4kqoR1W8SM2Cj52PY3E4TxKKXHnpQYVra2zMNk83kj2GN71etNDKX9c21ptxmVcDuC7nN7GkYi",
  "key5": "2p18uUfQb9CX2GNgSG4RCVr6789TNMcXSkKQx6qvoqRqhEsZ4hEDDJPJKZ5ykSBiELVLdHPjrAPvM8qvxXvMHAJy",
  "key6": "hipM5Ff5G26nMvaGU5F1w6Xm3xTbi8fyJ55xyYc75Fxceq5LU8EjZJmCDYbrmbmYHTAiXFxtQoEsGVtX3MXDpLJ",
  "key7": "42vLZKQcnMt6PWZ5YBEUJ5vDdq6AuFGYBSa56bk4gVGYhnkytDEp6qcZjY69ABRVkcwDSL8GyuRWCa8WMq6oiTSa",
  "key8": "5cwPDi66qp7kwR8dJcNweVNHpgW22kZWK3cjyjvRzDmmbPYp3BoojXeZFYtXb34j5ziy5gLWwT4WKW79UYeAXFSf",
  "key9": "2URRrHVbbd7z439RWa8Qa8MWkKtqZZ2xFU1mT9us47qk4MB2hmePYhDMdXuEfLjvBzBs141LpUjDqT3RxNiP8G9Y",
  "key10": "5kF3QRxQFfATnhzeD2pPWHxrZqvE9Z82ScmEiecpEGVkpFDx1t6M6EesxESbTvGy7A2CwdxcN1qgZDtCkyyJPC5K",
  "key11": "4CwcnHvkcUsjghe6zvUxeEbYKxTEbZh19cmeUJGN5uDWkQ6YuZVDp1GsAfzfqefHStHiiNKT12KyNLgKnFPzutsq",
  "key12": "JEDzweE6oH8zmdHMNW5yAXJpWWShF1Ap5yTTg9cD6YwuU45aQFAUGMvgMFTb75qN3XjpH9dNDQtd92Dv21QDBp4",
  "key13": "WNwdqfQSS2tFu4gz6ex9eLsEoCLbN5AezBFj2MHjBuyH9DekuL5NMmGn3F1agdvepP2RsNLunBpgRP1JyNdpTGg",
  "key14": "3QaYuTkxmtMborcQVYqjrbt6ZTFtkCedo7633esogn46irbACZGt94ue5Krv4kUF8cfKnsecvkvnUooky7QHwe9d",
  "key15": "3XZG78PUeJrqj3teF5DGPMbjpySWPGxSH65u9YnJ6Dm2LFTu3K3GENxiV5TztuNTGLBGaq5MJm1FZVAtuywMGJQv",
  "key16": "3T6aqRz9zdY4BTvRaAppGmqZDMXAmL8ZAfutbgsre29zyHYP9dKZL3d5ULBukARCAtedM7X8fzbj86afshWwkN8i",
  "key17": "d6owL2WxrmQ8XKVuTebBoar6fyKw1S2fiq1tvkV7LitzZAR42ci9HxVKnTNkRpBGmMSZQS97QHMiw9Vm84tSc9f",
  "key18": "447GXhdEJPBquCQvccu5VkjLzxDWKaiuYW9X8ypti8WepYdF2UmpC3JdCEbvdjAisWTtsgo2F2QFXxaxjwWpwGPX",
  "key19": "eqBWUSm3nsNijiqkWtcQRk1Fu3rwwjXWgEVKCWTRA9zizLpAM2ccP3RwhrujLmfhCcfHNbj7bpeatNxTaLMEdwP",
  "key20": "3wKTNZUhXvETM8kc5qf4pJpwn3xvzGKibCV56dC54HTZzngw5QNyiYMbCJSdjid7gJRnNVjT5ZqJvvWeVW2Ndprq",
  "key21": "3cKmW2uuFMhC7xhc3ifSn7srCKt3WRj7UQPYrtoZP1PrbCWhsxN3RQ6YEP2orgMYAuTB7o28TeXCQ5zeSQFxpNXX",
  "key22": "2jbYMFYFQMTyDizprHw8yAV2adUo9qbArS5NuTc9gogk4GiJH8ZoQFsZp9gkhFNPXRQiXDa6v4hX5bFqi6rWWdkN",
  "key23": "3d29ymafvpoL5Cz24xzCUCFUnoQgRog9ARWrvvLMFds5bbEMcqkjR4fGmX1yK6Khw7XjHLcsQrKxWv6a1FwWe2p3",
  "key24": "2ioXAWUBdiHgcjrM2Wee8Qq1TyvwjqV1hsgPGS1cVZbWbNwU9VeAsHHDH1BGgeFu6oeAAdUD5X2fWC1k3QqEkYAw",
  "key25": "4Pu5LsjfRSoL2nnWHk5dKK1EU2ueAbp5SRXkAzYdkWBbeaHBUM5wWSMVbkPbr32S6SFRdAqP9Y4FgcfRE1jYQbiR",
  "key26": "nrfAqfiFieGeybhAfojjAXqKkDAkeRfLiWQPApWNQoaUiKmiGgroH3kZGSYDPRz1jCtXb1mf7MLANcr9RzB7iDy",
  "key27": "52hqmwWsVuK4KnXMB5CjpxNDqsMA7k5QnJNrYoNSTn97Yq7MdAKjMAp673tVZwmgLzVEpzok5sfDbwTRqvtnR1ZU",
  "key28": "63V5ernEweRj6rygjNB1HVi6s4mtjKxaK3pgNQdHgMw2sBsHVDHH3tWta2exLEmhv1Kcp1kaFweGpAvfgi79Z4J8",
  "key29": "5XP9ajv4CDPPSNrmaiYmMtynksmQ7dRjS1YSiARWBkT5cSPPDQuo9WygwqDArbgnSkjNY6AAjrgAR5VWnYNbd8Mk",
  "key30": "5RiQNDh4NaBaYbWoD46cXR5pgARGD36Nne8o4u5Lr6Zs1E1PaBK1g8Aw3E6BW1iZGa1QT5p7cdtsAJH89MaP7tLb",
  "key31": "jhaUrY4ZG3h8DZPAHKYGZbnvkMXU6Npywvi9dtNBJk1KxhYYjm2m7bx1QqUXYpXXCUN9xk5fMhmq3Ys1UHhDuwW"
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
