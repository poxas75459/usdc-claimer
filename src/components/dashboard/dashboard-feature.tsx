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
    "2iUkXpfwpfYqCvsmDtccXh7Q7LL4kVswNmoctoHuvD2VuvMKZvXwRTQHiUPAzgmq3dwCsrXXenvxf2oWargnYDGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CnQsiDd8tz9XrrC7Wy9wBbJhLua2Tsdw4xJaHTYYvExqX9bJtGrV5CR4yvD17Wm3i5dMD1BqJ6Kmcv8fXu2Vhv6",
  "key1": "4u3ae83RiXnxpxtK45Q4UnWaxoB7eiM1jA2MqSHb9otywiwoeMMcF3QnJHhUFimLjQvRWSj15hsF8dNhFQJoG6jf",
  "key2": "3X9xwDj8cF6qPhzAy5JMEzBBaK5i46hCKDapVVZ6rUu8j9ivSQPDhn7c8574dgSmWTB3CxrHX6P67tZisk4sBeJc",
  "key3": "26x6c2xVcS9bfjnx6DGqToRm7TiVdB9d9Ndm2D9XGcPmeTW57B7U3xiNuuqybkFk9xLe9zvun6tvsTiaXUnPkzQe",
  "key4": "2ft5Fd3Fi6iM1roBZwPZGQNdpPwkDyn9R7WRaLmA2vJik1qmVuZmKPyC8cSTeHeiVT5CV5GEYc3kR9s3QAwrfo63",
  "key5": "3eeAAbTtfom5CcJj8mzrJazBTDHq4xmVrDeyK8Lq2ZayMKRYuV79kMZaThMTjb6WKCGrpvSiFZJaKwSneN3BdyMM",
  "key6": "5THi1ete8oQxuBdZfL66KGVNMKzdixvpMykba3yhp5n4VKRcYQbRJt6qBRnkr8tcEV8qrEp58NwobHi6FALw6Y5j",
  "key7": "oKHzAnd8DE4n2XvVEPQFzWiikQESkKCNskJZWHZfv8G73e4QAY2qjaZpeA2YQ6AkuxiFFqJLxs9wb1BdU5u7HSd",
  "key8": "3GXMA4LmTmnaUe2fGZQpGCpkX8WiRYDDE33tG1F1dNygi3bG3Fe9wq5AagMJgv3izyeFgS6PJ5xa9XXMzAi6RFFz",
  "key9": "3Mx2iuP14hKJkbj3fNAtvEPsUQBt5znPxtfGYcn22y124oy3PVVrgJoM1qoqpsYCWugHccEDcFhfvqo8mCrKwRWb",
  "key10": "9upgmJZow65776K85qKqtdk9RgTf6kPCtFYF8gtCtoPo66oxyw7WbjiXwXqPDJnQfU7C3AeU2zHZ3E54bc3DqXZ",
  "key11": "4Tfv2FCqBbAeiRb9RFqEtn4PuwT7MPuVnVa5sa2fntrrcddqcFqE7y4os2QSFXcsVho7N1EJELeznfaDsr4AqG3H",
  "key12": "3Z9CD72MWXewqdkCyCVuuWRrQ7WE9Ukk4b4zi2xukpyKDJPj6RpLXrDxG2NyG7ocRks83u1gfWNtw5acwm6VTwS4",
  "key13": "DhwZwf2nMefLYbJvEsMK3LvY1MTa7cFXyTjKd498mRq3v4xSgXDSKA4xPxLRV1LRQjNPDpJF6upfPjLQBm2mHcU",
  "key14": "3CJebpC5z8yP8MPXVJjiaiQpcNDzks9rAvWdssoSGCH6WNnAwEdFMjaWFMPXsakZUxYkUy9UHXvAKs4dvDWQwcn3",
  "key15": "5fWc9QspQGtiENeZ4fuqnNnvymGH3i2UoDN1M6EK6pQPng12wp3Uom7VqA9iPjzhRcEY9CJzMEuynytESUfte1KC",
  "key16": "AHfBHzsXN5s3sR6bjPgVE4uteLAuaewrCZ2FKYs2NobdeaUtfZ6vyyzR12dUdTXcbEXk2n8qhb9XGQRbGJeVjyW",
  "key17": "5YcjnhsrKP9QTtEtAmWEqrt1JjvP4wC7vxeENxwcCgTK7hE66NidCcm3isrf3FG9Xz48pyf2r9RBTyDzqYH9JugX",
  "key18": "3ZQLkDgeRjtt8i9UeCFTQqav7NsrLz4qt7zLEoVqMAU9pRiQhQ48QKRiKKn7jFyjiRDe4L15nrheMK2U8s8scm6C",
  "key19": "3cQwgkY1opAqatifooZZr4SNvzKCnSZSFAuy5i5WqCBUCTpBekWASs1YbXBkELqDkHhgJ3oGjd1qVbvBjW2Sra6Y",
  "key20": "5uAffG7VcNnHsW4uHMAzcdS3bX5Vr1EvnszZy3x2btZexXrB5m86AYV9zaoNcANca645KtHBfncY4bcf36FBuFUU",
  "key21": "5g9ebAveSfZZF2JUD1fdNdsdZYP1DvFMBbumF8gjhzQcqtEMY2U9KX2N12ugk3iapaHgH1hnMx6M1NGfK1avpPtw",
  "key22": "44VyyX917z9jyqg3EoD7GHNpNTHAoYn8cpofMidfQmkWdmU3iMCzn2vCLrHV9ZfKyhWV9fy1Z7J7uFZ5HtwANq4m",
  "key23": "4PzAdGX44X2qebQqPJ7pkjgfGmUWV71AyV2gGwB5tzA7MqFp3odaJgp7sucv21rG2zSC4fe2u5pNhX7dDN7WcU2z",
  "key24": "3sj8FoEewHuRRyTw7epxMev4BzzUDJfUp3Dcny6TJbVwpuFDXkzWkCVF5ofrTLKNF6Gdn4GX4DLgSihaRaDGBZqm",
  "key25": "WCrrGLJBxXkghKrxNp7F8XhqJGGYdweBwSubf6BTfDw4c6C634v9G6WyjTdMxoux5HuvxGpb4Bbz8Z9rYAnH3bZ",
  "key26": "4rqaYEpkgQdAhxnFGqxFkHrPs5Pwyqkom8fu8jfwGy8jqaAywr8nGpDBYLmQszrvRxr5waLJHHCDFR3SmUnwBhfL",
  "key27": "5iPLHtELWUxjJCPeB2Mcz7WwvqtuJf99E8PoEub79Wug4wkqwTixRrLu4ibtvKkN7JVM63AeJgo7PitdKdojLdD5",
  "key28": "4u59gYG4ZNPPGtLXYbCgVpXukGaYHonNrGWJS2j419LApG4XguYJScGGeeP5hCEeGWfEHq7sUE3oB3C1CXZW3qH2",
  "key29": "43jpdCUbr4jhBtU7iJ85wQC1grjbNxqrVwNQBd8NACMGaX3RgcWm8khdWmCtp4THKdjxCP2UxqofB5AidUCXexCy",
  "key30": "5JrKFyMEkqFwketXdjvV9E4zqSpkM4yTBtoxNHyqcjjtzPRxDWjVWQECcwq795HCPvbQTLzJNVSdFjA8BMJD453A",
  "key31": "59G1w8sRKtykmRaGEqdzamz2dU5nsmdJkTnayRQZFCaNrNVhsEWQ4wv3acxfixjWgFMRnnxJ1Nhn8QxWnD5sffXt",
  "key32": "25o977DR6vBBSHnrzrAwgDNPk8XgRqVs6JaomVcwg1aaiRk61qbERWUtEqeSd2L16wh8FK41gjZmiw4UqU5BQgW5",
  "key33": "59RD2cCVXkfu1jZvmzasLrhPKpVYgiSHYJEsAYSFb4BQBnew8GGpJ6vpRmUw87sGrhKja4i2pSFRuQVu3oAirTUg",
  "key34": "3VAvjQRsGM6Kq6sbtkZsqgWWXquKY1pmi6EqFePbm6emTFJZBRgyeSXj3AiuikYDRxkb2DUm6iZEJbrD5aqwoFss"
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
