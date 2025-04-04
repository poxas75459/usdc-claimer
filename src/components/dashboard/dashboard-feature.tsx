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
    "2dWdgwFT5kCeovk3FA1np3S1Tq9AUnkuNH9ZJYD1DUpaL8Hu8JNrHohEoreQyai9TPZzAsohDujKUy3sxG4SuH1V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VFH4mU3pfLY2BJRa8bL7aV5z3w9gwTbJMhXzAs4jWqa3KGVVNnP1C5zzzNtYE6dRYmiYbTDi9os9xAXEsnSkcEA",
  "key1": "34zq2BfJ67rxJLyNCWvEbs5TwH55QUX6ktRJuLtRCvaZoNh6xXfdwWX59Zy9tjcd1nWLhBGikTFGxvffCH3TH27U",
  "key2": "5CXf9CUVffqo5v9uM8Fpc7FFAVhK8iKAm9pRxjiSn6fU3h4EJMQ7uUok4WoPw2DgS7kLNRvCVq315mY9XS8xCSuC",
  "key3": "sH73G7YE58EB4rXoCLVVYZqJbyNuL43eBzTBbB2PgoJpn98brdtL3vjbcQRCrrguKfDSRKpwJTbeudN2NNt8NBT",
  "key4": "2rVuPHg3kPhBsK5ApaXMqT6x8t4S1YGtwTfy2azMnHfewscG12Q1UkPVgAYWqVWC24d33YTpskjkDHwyYtEY2g4Y",
  "key5": "tw9MRq8Zckh96ZzjQb1u6GKdGWWYczgozso2cJ9a4dHJEA5frG1BnQmNjhmBsz8EDxgg3hELKeJdUb1CmC39GNX",
  "key6": "tG56PpzvP8qYTkcSS2i3GcMVizGniaDCLsRZkUaZ62aZ8BxTiK2N5QzeK4brAJVJgXnpeoUCZ5xes5AMU9cZmDS",
  "key7": "2fh8FZo4CfQogwQv5urS9B6wNadhCswFWmbjAnYCbeEb7X6HqNru1FAf11jGVea4JgZ66DfPC6QTa8J4ootbrX76",
  "key8": "34dPHMTvrvJWG1V8ZFn5PaHTwGhtps58r8wXFcfaiHz66x189oXim5RsVAajxfy9Z389WZT5BBLuKK64f4voAJKH",
  "key9": "7QAtERxA2owmHG54JN9WSpVjxpBF4VB8dsGxTAGHve9ccH7Wk4CsdYvq4YNezd15z7E6gQwYaYhf6aaRx5uwXHQ",
  "key10": "2tNcoDcUY4S5wGW4Ts7L5uZ276YVJnAoFDfiQBTS8Cz6CbcG7VuViY3WEhaj9f8QGmRuJ5LMWh6Mb3nNoSzrhZBN",
  "key11": "5ktGdK45Gy5f5ERA14cyPahM1UwSLzLhCwga1vTiMqb3QDX7MBbC3EDdqhxgxYGQ7ovrYy1uy5RgWRjNURLtgUyU",
  "key12": "2FECXXSaT2L7aX94uoyFmTmkZfXspqCndJWmtvzRyvg5sWWEp8rTg9SJrPzHMEFxGiijKefBBoGzYVEr3KGffVTS",
  "key13": "4NSdBPzMTh5dpybyggmbz9LCZXNEboQ7KtV89LKszF1p1gRFLVxemY2AQTh8DksD7bKGXdepz3Fo1bAHhdsBGfvU",
  "key14": "3wHDCThu7FGxMqxDeCmP8n5ZmyaLqnhntQetMy1eXSpvDqKHBahWpKAZha1rCRvsBFByiJSQYfKEBF35vjx5kYYg",
  "key15": "5QDtbMrwVJRJYkskKCNHQMtnB9zXU2ZipadWgvx7xRB5Jxc1C9GqdgxGQEgcX1ypDKBxJK7gLY3i1JxzmGuYvVTK",
  "key16": "4PWCuByqbZeAM6fcLnsvUFkREz66PyLmJNjHKLRMqRcp3iSrxHrBZUnxxuHDxuLHjzQUgzFHoiCHsoNsmrDyNAYK",
  "key17": "2jgZoNQodKqTCuJExDvLSDzGhfgJjUrHu6VfwGrVR7G3SiYL3tVM6UYJ8nWLBDdfGW9qBKvUfhfp1czmF1dK7w3N",
  "key18": "2Fru1aayM9NgtAirtHPUKVwfdc25F1DtDuoEen63uWJPuTarauNx5F57xz35WsCdffBPdZHMdmrzGG5oL6ffmddr",
  "key19": "Bc8Q26ds8VAf6pcGpZuGSQVxXnpZqkUoUsnT9Hn85k4phsEQvSFtWvaGJMsgU3NoGE88JWjGycjMvagszvpckfZ",
  "key20": "4PQ6tiFcgqMZ5Tdiaom4AutaYK7cRd9zfxxCB7Eh6XKJP6qJSbWyXH8Wi1YdL3jz1q6q8aq8ayF5nfL83jX1a5Ch",
  "key21": "2mmQG27DkRNVbBEurP8rTijBKDrtQ9hUwBDa597m8sXWmd5agoBWdokQbU5o3CLZmR2d8jHooSNS9isCKdeKZh6n",
  "key22": "5jiie5p1SEAvjfxn195c5CftgKwvthMa61393nFrZg1Sc1xdSg4XRJm7tBS9hgy7xeZpj3ive7hXRiWafviNhA4z",
  "key23": "2yNb71rsSN52cbYTezg136foRCX9Xt53mhAaSZkfSf4THf6tujdysJdxw1DCPUMcW69gAbUaNveVsaxZ7KhXh4fp",
  "key24": "44AAXA4kFZRSiCzwyaMsCkTiKGcy7pU8XxJkUG9bD1csg7kGbuJ3WfDHj3eoVvVyVuuWwD7UyiiyPzHvhbb6X9GA",
  "key25": "5AvHornAMxJ6VRo2qZBqhuEU6JZhi4NGg9AbUj3kg5nf4CgwmDUg9Wg5Gr8PmEdhBFWh3tGtfYPHaWbQyQesij3g",
  "key26": "5xfoo5yYgpD1tNfsaZumxvbA6DCmgsEJwv52ihwgMd8evJYYUNjYN2NDAQAb8GGFxcG7J48gQXRSqhT3UJVxsAYC",
  "key27": "oXkr6QmhWgBXMMjvc3YnyEbXaxFXeEDozV59nKoUf9pxYT81yrQZH3LbyEAmHU7eBzJzEUNYmVE9gfup2BDRnDY",
  "key28": "pJN9LiDcaoWxhKZrQ8xYduLsau2A1YCF5GUaHNoBM5iPZtK3peZuH69Z4khoxxyfXhQh5Gb1XwjDqtbC8JkDjT1"
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
