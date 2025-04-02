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
    "3ndFwy6rLqCHQLuF6gnRESrJ3FEUG5oHZuYKJfbZ2DZewGSNjdcQXGLjHkpAUzRXMtVLyBMhQSgi7PgFxJZRHajT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43u3DhMtiZYN1G2USHuTXuQ3AEunLYYnmhDJrYxhKhZW7GjbJiAGtrtHnRyLnYqD1ejS6syDMqDKfcYFtS8aXeVw",
  "key1": "KFiNtThh4FJ4Hu3w7PHxamVQu8CkFbHanCtcxhtqbdGXpeF6QyLbR3yNkZw6UUiiqXtyezjY6JFnSLJ2Z3Lgydr",
  "key2": "4JoPcGMP8YwYacWDM7kdZtzYTWU5gg57z227jMzxeABG4wYxYkTD75W4nxDY4e18sKK97HCc8yFA46Azoe1MDtKD",
  "key3": "2XFLijXrmcHi9KZfdf6kU7F3P9UDSzJS8FiyCh5XEV1yG6p9zE7DJXzVh7HL7YpvkidmnMKcCn5Vw9Veoc6cRgiD",
  "key4": "5HBzqmNB8xuaxAptWsg9YE4JU4hRnUwpHtUHF3tQ8kPF916mrW3i22YFiENNmYkYn3qwJtbFEvSv2JQtErAKKa2Y",
  "key5": "3QzU5FkU6vH8VxLDKWsQ66pPov5Ap4rLDSjS4Zx3tBnzbRR85jobEv3oEL1vB4PJYCSP3nNaUu4CSjqam1vMnj6c",
  "key6": "38zfwM2yreMpzEkMkpfraQodMuo47fTdNt2naPN6ZpPsQckwgaqf9QGKd8BqqX67PC4MPGKh4Lmxp3NxBgvpT5Hk",
  "key7": "2mR1u12CZtAYSpEuRy4FHdjwhT6XYcP9P23H3WPbua34QrYBoaowp21BNACcUjPWX89VwiEdhJ47h6tamSsqZm4L",
  "key8": "2EJfUPJwGRxnnSne2NA7usmAx5x3tekcExEgoQP3RXJ4tnCncWjbuAgAKmqTe5eULCyjUJfb9tAucBKMzjuiujBA",
  "key9": "2d2Q4PGG86n3yWzJKvK7kBSkBusMBff7KKZpFsKZaLzBngXtoUT32WxRia2hSQ9nVdviH3Uc2EiHMbaRXN1rYDSv",
  "key10": "wQkxX6kVgkS8TiENTbHUtzrpS2i5e1LazP9v1XWRpjtFjFNuA2jtwHoSZEVPdC5zofVJTGMKjPq63vyHdkBC5YG",
  "key11": "58UdBv99oeo28nz8Efgo5Ki1f24rptiLTYBX7cBYkRMsRXcoYA9iAPMeX9CXsd2pEZtKBxykqY2ZBgmnB6vywKRP",
  "key12": "5LFncAc3VQEDYvoH8L47D85vgbEyWSg4ZcNdb6RVxFFzNvYt3AiG9gdpabrfmztaqFE5zU7tUyZjraNrufhpVwfA",
  "key13": "2r5fcVJohFpR6vPMC6mL9F6FTMER3T8q3Zg1eDWfMAACMhgG6q8tpZ9x6J1DQHqGbJVwkthBDecKZYLHDGKU3x9B",
  "key14": "3CjA1KCtZcprRXTrfTkNCVTkUriLHb4HutvV2HowF7w575xSKVZHsr8LM7Ssd26PuENTeq1fSaT4otW5sSmsyBRd",
  "key15": "67LXNmHS5fsqoueNBKd4SWFTUJQxLtWMfFQAt8z7X7Z9dQhLyZh5rqsGfXdeRC4wvt5zmkwaeHCu1hXBuqHmCzeB",
  "key16": "3Ja7m818J54xveLXKU33e6QWidCPkA4WbdTbV168R6udbtWaTkgVgsn8AN5tfcoHpMXydxpyx7zqnN53SAmeK4E6",
  "key17": "5zMhUyYQYjLUTxYysdnza5zARXPaQGAfVHo7rzaaX3utYRbNz3LF9EedmHFsypQsWeoMxQ2vXkare7Udkusyk3jj",
  "key18": "3Le4FJouMWs4rFmDk213YwP5fxHTGeYp8an1ES2BFitJsn9Xoet1MqQKaBe7tB1ShHeB74Cp9H79Gj44n3TdAN13",
  "key19": "3MXFvr1nLcTk3MeKKJFweREFEqauFYsznRFhCV2AsTJCX18Q3pdRkSWSMyQBRk9xvJTjeVJcyCkzWWpDUTueRA57",
  "key20": "4HZrJNmRY8QGp7yCPBmfpQHGBdWNtdsnGdBPsRjhFyEYZfPeKWZaBTtr11nBXSY33qDJ8gHk5L1ahvZu5A4tkFoz",
  "key21": "5CrWrDjZno2QGPLNr5XPobjzx43jGzy4R9EcaXpV7W5tVKGBp8RmjEvgNmSznuHbK4hnbrex7cGgihQEPuDcenhz",
  "key22": "469P6yAy8fZfyNGkts2wT7dmb6dpSG8rBTDj4CqjNvq1fm6FZTSUYXdypeb2MCQgBtzhfK4ufU95U3VPKXWmXXK2",
  "key23": "3JoaENCRAW4G3RP4SxQ4CR8wEfQirfgzbbUHnEwDmhq8ktFGpzVaoYzmVYPaC3P3mEDqnmWu44VyHHeFr4KVuyYs",
  "key24": "2gKPEG7q5ba3NysT72sZgrQCUoCPsJqkM3FtW17tzZKq3uayUgSK3VVaLSLBvhezmRxzCf5a9inYFW7afUbEHBNW",
  "key25": "49iSZvbQtDbDoZxBW9sN2UgMoEnaruXgmR9RoWqTTDVQexRxfVvSrzU3wiLwLfqFbpYkTme4bebBuday2GXtRYkR",
  "key26": "4N9oLrxX8AdD6cHGVGUyJTqucyMNn1j6auNLh6QSez31bfjvMzFYq4PSaJUGZHAHPjqBBrqTKb9Chy8MBiYwdiq6",
  "key27": "RBf22j7obN5Eh1MVJ7ZysYoSqhQBnvT5NkWHK1FfVBTmkQjtMvZRLN6crqC7dWBoM69mZDaWcXw4aJLpkJcnEbe",
  "key28": "5Mb2njKQyGjWj4vrQt4qrcocdNrbFy63bpXK1V3HpALct1Z3Hu54VYyxJnnhQ8iJAP3iRdbEQm7wM2wUZV3XM27x",
  "key29": "2s5wxyTqXKAEeaHqtUnuVMcSvyzU1dujkTDtCtyyAmcJuYRY1LZPTA46dJFdp4KsJwW8y3XnvwZFoKANX1H1dWeR",
  "key30": "4T3pHGFmuXsTXyWkVDpjLgU7VyQPy4CzCqJvyeMCFf9GpHsnXkJw5dDqbj12azYvGEYqeB1MMvdGfv7ioumx5RNB",
  "key31": "3jKKKaEqjYcJFMKU4Sg4Yj5aqBJmo9rbh1pj5if41iDNsGLnBQ1GHKmE9G5epFAnLRRiGLxoEueUScpdXguhfbcj",
  "key32": "5CtNiJJQ6Jw2PTEYecFKK3QWm2mKy24XxV7cpxLWnWz6o3hf8KjqPoiu3AHTD4XpNfiGSKGZYAHbKWwPA4kUAgBH",
  "key33": "4mnm7pp1Hs2A4o5KtGZyJn1ENMPF3DQ74uyZCzXMMJ5aEe4HqBsLzoGUp2yzbccrh1giCeJiziMwFopCELeYSSDD"
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
