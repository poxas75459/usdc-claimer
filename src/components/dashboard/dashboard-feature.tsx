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
    "4mBuVhxukpV6mS793GTTvq75cYYrTZ1mNcULA257Jz8wGLMyJX89MQV95XayeJWUPpAc4WsGqijYtseWsg4xrvEw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Uq6wNHDiTxLie1Eo8BGihjkYgWfS2ox7cXPgcC6AY3D1YrXHijGE25r5bQMK2mfWU6ehCUpnf8yZ1e5kGdxeRim",
  "key1": "giVEw3dRgoPg2FKwBsdF7eFsztoy3BcUUqsZAhQtGZsAtguhGyqe7XGEpP37g7u456M2RaNmWEqSojH7zz19mpd",
  "key2": "57F3QxiKbkfUHjS2VmdmxD66gx16wPtjEB2De4RhnSxtf4ReuK53gxpaUEW3NG8JjTZywHGrepij2pBMFudsQSn1",
  "key3": "3XQehi8hDNC3zmesRo3ipXrL2dJUvJu1kvwpVAsaNXqcfA5u15CgfftFy44T1Fmm73k9JeD3eNzSAymH8mwfEdDN",
  "key4": "npjVFkNwxF2o3bChtQCE7vBf8Ho2YKwM3fPPb8zmjDzbWk7ydNW2QQZqi8Ye4kxKd7JZEsKFm1NNgkQ6bwABct8",
  "key5": "33otj9JnQd48Qz65JTb2UmwMBJLE2GeqiEiQFKeE48P1RAUxvj54t4ebVVmT5gU2XbQ7HH8DPJunqgtfHkCYBUkH",
  "key6": "2mkitDeh2pb4jyFkWZh6msAtXt1LzLfxS15aJwxNNPramozRxApmWZun7m9REHrDUQ9MaKhZSYhQ99ACpXivxJvE",
  "key7": "kR1bRuugKrB63wux5cvWaaRHZ5scoNd5XVGvmo2MgMosSWNffpdcqXsH8UEFeL7DkPMWWM9TTKb5UzznwcdiFJv",
  "key8": "hH6RsUkvDQG6sdj558nFKFLdjh8nK7MCWVbVr5g7fFCJbGF5SL3YxozwW1djQUzaLERdyQNCTzuUfFP9aGcaqRc",
  "key9": "4KF5NMz4cBkBZCx5Sz27UqnBt77KpYMv5UfrK6qJYKKDgf8SE6J8pwmpPPwgiCXo3xoWnScTUu2YesoZFJ6s1obk",
  "key10": "37eXRV669JCvWk91MT9PPAaLXRaKuTy6MZzhVvWLc6Z3YtiMRoa9gFfoMsh7vkHy5AssG9YA3tR3qQxH6bhVDS2C",
  "key11": "nx2iNW37iFRdNtEXMNGjrHKWmm3tMU4kfLrqBDL64H5zzYLZLKnPn1npUYY21F62qfQQ8994h7dPNDREEwQaPZr",
  "key12": "3D8VXUAkryJejErLZrBCBFiwtEw9pe8LsYTDJMxq2zgYatCTwywguPner3zzdCFno7P8DCcqEufPCmMveEbQcNJ",
  "key13": "3o8c3mGz7xE8mwyDjmJnGkeovYVLEDX7v69uamATDkMWk1MY4nRqP3qqpS1DrbrW89S6xmDhwe7yMWjjFrZDyXeJ",
  "key14": "Nkw5ZpJALGge7HLY2mZRLMGwgFCDbeZbrkqSGi6qnEeAwcRq8X52FijHzqrtPWryL8HgyF7bqMWwhYwnYK6dpZa",
  "key15": "2eShk8ajPfzwcowLeHu487UbSfeBXBaDoSK3oQqXGuGWgvtgZADXd137RC7Prd6nKcedJdjLE2pXwPnsjNHrRgSQ",
  "key16": "3xXguPiANRJNxaVPT54gcYiAB92QUiTExM1ghuwwCH9w3EPsRrMYieeMFtW7VhtRMHzpisbpwL3tiH9CHFjT27Tq",
  "key17": "5Lngz4ndux7JF4qv8vXtKpbdGGznwZtoejn72Kedzry8iPGT6uwwTxmRGqQi78X3sLVcPTVsgnejiptARXJFQ5zv",
  "key18": "4ixsM2LE5AvsSWmGPXmAp5PejN24RmrjHevzFGXbj56PNjkQNmL3LEPf9xeF6Sw6VYwg8uewieqA5EouUdg1N7Ty",
  "key19": "3o8Cfq2yS9gosGnX9hS5WeHSX2NmRQoSXu4GCfzHCevoUsqfYYxs4w3Rzr21MJ2oQdr923zYyJ7Jiq8hWsa8NndL",
  "key20": "5yC23zQiN6C4hd5BG17QF7qF8b2J7BapzWhFyGm2fPffgJmAAot95GvK5WGNPjYrRpLJX2ak7a1na2U8rsyVJa71",
  "key21": "2brfThk2C7CXvhrXeYqq6tbo7ibsiyQkKy41AKtUto416ep9QF4tVbhHU5fNYokw44KSwYi4YvxkKKsncy7QUyrF",
  "key22": "KDBW4FtuJqp4iv98drzmo1wt4Kz3sXA15Sbcv9RGym6tvy21rZRsbhhC1iq4QY4rQ4f3h3VdGCuvzCzwDUQQN76",
  "key23": "ZX61T6qHmnWPiXXTjDkcNqJb8emaeeL3Sfe2hq8g9zGFiijeR9Q285Adufbj6waMrANpeUwtiZWGuMW3mgG7J64",
  "key24": "38euQCXkkWGqDfghdvcU2MbhSwBhscXriPRLWTrkgr8vBvDxmfzvh1gwej6mj3MiPASgEku1XfeXLgL8jKeXqYNp",
  "key25": "AXpofb4eweH17SjaCdufBiucpoVnB7iR1Fdja6uHRJNcakXVcPRLwg3toTW21T9bzYUZ8GoAkKZBFvERRFrbyRT",
  "key26": "5c7yLvqMrvZHwNny7xW3B7kmdmUNMzK3Ky2EGeh4D3253c3czF5kohpeRm17RhWfppwRPLjWJzSDEwYJAvAxo6s8",
  "key27": "4NsN7c1CbwCmBH2bFm9qQA1x4FFBvMZAPQBdioRZ2szEkcJ4md6Bm4jDuk173tBB8WBm9bRikLQ7BRyFv2kViTxs",
  "key28": "4ByXqG7tdkZQCXqS7ZVGqPnWzco74CwRWSApvUAEYXqe5LdeN4PchomxDwHjf5JAAKTA3D8dmGSj3HuC3T9J4MkN",
  "key29": "3bJHBC4Y1a1ToiYWhNEvuMwcEpFFMuLCgnUUXpxpGdmxHFuQHSCVrs8PEF8xn8JxapmTACFenSH7WkDTFibPty66"
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
