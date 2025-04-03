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
    "4Gh7D9d3rM9RZSP98fAM1ft2p37g9DAk4QWbddZHWUnT9yWVtv7kQsK5UzQGyAgrsRvn5f7DkjjGJoDK4Ek64JsP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vDJAcjtTC7wiJY4nSmVdNpUTmBjnAeYf73WwTDDY8MaQeSWhSGNEfEHBHir3sVMdDN1sVy8p6GHPPSxmevSzcmh",
  "key1": "2p6jsiN1PLsWNtSajVmfVHgMcmbRavuac5JqA8BbafV8uBHDTS8Mrkppu5VuPT1qXS16BkFneSZqztVJUBTYPFjV",
  "key2": "3qErqiuFXQKEtnVybEJw1eQeUdFpTxWBzUqA7DfY1kZTzK5TQgBtfYD7u41XgphS9XXWBYwA9grPAS9if3s2ztcR",
  "key3": "5eREgQwnwUsBebTjPa9rJ9zanvk3MLQybdTwEEK9qSSYLwWMr9WKNKZAUMnR7Pg24L2kQT3LDBYBxAvUAgggeWJT",
  "key4": "4ML5v3jDz6BNA94zLDhh4bjkSRm8STpnWrDSxWT6AvXhhKZfdTRn25advhLAzLEhWdaun2SfATLepk9LpBHu1zTq",
  "key5": "2mdpnotWZWuemESbvUMqfgWpKZFBJVy3fszYW75FK18EwfM5G6nxtGh6oLpMfWhBzTNac7F5Y3fkMzRnx8XnTpyy",
  "key6": "5wj6KLKU9bKcTbsim6jF1SLKhKK4yASa18mzhoJb7bR2sqDYbYqGr2GAvbBhrP28fuzCL8f82xPp9oh2dxYpijMs",
  "key7": "4BFckCJMnAoQG4m5SfBQn65dZCSRdQNpEaSJE5QXCkhWiBvtsVwfBBYwWqttF8iAaWhEvSzZEVcWgGPAh4PrwJT4",
  "key8": "5w3ibf4TUtt6mSrkdmqHQ791jTpe8BxtJofnyT8SsywPBFTgMKDasCtN5GEmXXaWGYMi8GsEjFx6jusRukKnjw4X",
  "key9": "3Rdk8ts84ukvv8Y9axF889jPVqtMuYMRLYaHPjNu8ChFMFmVkTu12PLTykTXjv59sZUGM3sKUh5v73k3i9MbkWbH",
  "key10": "58GHwdbav5oVu1HXqeQk4AasEX1SeHy9w3JwCc2zajSxyPU2HwP4nVbZo6Bb22MfiQz4vb6BcvTHdYyrtQDt3MbC",
  "key11": "5W54TkzNrC2SnVjDYborPu4bze381wE4cPk4QuZLkPMSJabhiuXAuvmpSnJZN8Da1oPe3auUS5bohk4LNEWVmURd",
  "key12": "3ryQwfgx9woyizULPLrtfG3oQ4wfwDuLYwhFH5K68F9SqeeZ27QYjGNsf4DwGPr83pR9e9Zk3PBwNrg4ya46bkqu",
  "key13": "5oyeeasy2y41bUAwir8Q5PcrFqKdWSFgPgJd5sS5v7Tz1DBMmdwaXUeZBQtYCkK1NKDvRTPH8pjsUzJbBqiNZcxb",
  "key14": "59nG33SVv6QudMhayAc66kde8Sg9maagn8Cgm2EhoP67co63sv4SvTBBXyTT6X4meVCcHPgXHvvjhGjNBpaT57Vu",
  "key15": "3eBm7x819DnHzZAcfJDLNHiMLLgyD94Gm5MofvSNoXEniCL3PGsrFX1Gbt1xKwzwFG8se1QSdWAjasbZnC83ydyr",
  "key16": "3NUUp8GWQhdEw1sbedA4CZCwgyEjE7gL5iZgthhAhz88aPqYTWKqEKdaRK3dnHEmhFuFc9Yd7sfcMJ7pD2KVND8Z",
  "key17": "22kz7Yqg1VqjPgjfiTqRCsHsG6pUZzRwNwucbtHq9ghhsW849FP185ggRtRbsXWEvgkNKrxREqFDEB4LGaBxyxWq",
  "key18": "49PduEtXVfFM7Yk6acJbtD1u8oDLXC7p3D7iQY9XDanB8t8DBQej3Fcbzp7MbEfgDiFh27TfG7mNicp2jqVHSyVJ",
  "key19": "3L8jzNKvagAa7tc7Ncq8foxVYWzHSFnHWt4FPeEEjFQYLw56SXbBXrEfkeVrecu9jD8YH6piSCCdWejhs2jAtzHz",
  "key20": "5h8pQjQpmveBrRNKQJ3r12jAFDjQGSeUiRAdVkYqfXzPrRuSUiECyyymGTBFYxPJZdoYjxb29RU4DFTAKaDMecrd",
  "key21": "2ySLiAk4JwzqaS7UvoaEEXM3Wyx6C5CbyC2bM8MYZJQjDCDYgRA5K7pNraSGqUu5bHvQJeUe2oaLgLQYKn4Us1yp",
  "key22": "61AjWRTrXC8TKLKGxFazJ29pTYECDazNxZWHR61LQggD4fZZkb9khLX1qJatXtzJ84wEVwVT1F8qhrS5otKmia7M",
  "key23": "55vWMkfX17Nv44czUxKr1DW1qKfvr6LkQjzoHsw2jiJixevtmmrAmQswwnT8HScHJfumiGrSka4RJcstQrmyWCZA",
  "key24": "Gh3p5dB4bmU7DPFaUJWh9ryX8HcDgMuaD1yXkNnbisyWpuHzYRNj2JToWq5byqe9mKb1opikSFXJszcfCSfDiDC",
  "key25": "22CqCKkHFmTU8Ey3NLSXTv3gp6X5oMuGEsWaaXz4VMxoni4SMUxepayZZYuL4B1H5NfsrSUyD4fjiNiUcQ3z3fRU",
  "key26": "43eisDQfeF6ad6FV8PLRi5bZXLjs5hE6yK8Z5QeUAyLqmdHNvzpLvCq78KzHmAEUY7AZCXesPXs9XzjH4SugiRMy",
  "key27": "3ywcaNBz8g3bYzT7B9q3pJFCAoQVjqwHxE7u7uaiCYPwwquAdWU7XhdHPSyCfeEAuRdNzK8HYFWuZ6T1gRxjLtfK",
  "key28": "2rW3hXbK66SiCB1GqF975DT7j4MyP6eVMuZHeTLgBEnQp35zj1ZRW4wWSFTQff1FGdQbjC7muZQmLT5oUtbgJUWq"
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
