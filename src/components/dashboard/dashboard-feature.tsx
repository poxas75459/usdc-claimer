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
    "3quttaEwSUfHMxosLJweGuZjiDHS3F9cQN9DqaKaSRhg38e9Pmh5cyYzH6fQNSyt4DvZF7pmkViCvn1Vxt7fp4jx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KLeQZ2T48qTrc4DR6ZESKtGDsqKVaiKYg35F1D4YYHXF7qJRQ7d5bQiELQH2HAeZ2pUDyh9NF2RFEXUHykeRGfZ",
  "key1": "4Fi6Lg6vxb12Ke1oqyWMpMHDP7ihJhi8nhEhy21SJARwzTTYymoacQfQXqJWuuAgY7Cq6ZPvFAVk6K9M7N6nveRq",
  "key2": "GKusY75eAavf1NLrL9CqHhc3mXZsDeWLDoa826X8V7RGX6ix5S4w7uwZiBCLxtz5Mk15cN1DmdetpMXQRdCx5yK",
  "key3": "2sMwEbe6EoKeauvNi8JY7eXokXmiYKms9u5PJu1U8HzehKoMrhcJhX7dFieV1CtE9xQMZzUqQPqcEXnVfW6W87cw",
  "key4": "3AufpLcowBa2mREuEATniaCh4n6ddKpe8GjWWL1g8RTSJc56NPc3awVf3DAGMcKJYxLK1D1gQPZy4k6LTYyQbCLA",
  "key5": "BXsxcohPccYKYQWqR8YmYi1AAJwqP21j6HrCQm9tHWpqbsyPDZhJXDojp8G7bWSbfqGeGpXjunDMrbw7ptyw9Rt",
  "key6": "ehKpnwMUNT2d8qVgb8fWDnZUTsz5yJ5aDp96V1MrDw7KM4m3vaqyDMCxkYEyCWXtBSmpTYAFwuuug8YVZ6caC7E",
  "key7": "2GfvArbKyq2x8SJAgVpcPCjhJjTNaWCMUdnL4BihRGY1obofy3JrNnq2DV3ayWwFDK7DgTPC6wcn1RkDSbX9caXJ",
  "key8": "3vqRrwxZkxNM6ooDq9uHw5mW3CPgedza5vqcGrq5PW4JvWj6UuDveiKZeYe9rv595FKLDLsp8PaPMcELBEctkD3X",
  "key9": "3N8HNrPvxbLpPYLnM6GZWsMGY149JsNcYWQ4SaEBkHjJ25ToRpHEssywYqrx2irWuHmfwC8sbiv11KZhamzeiaPg",
  "key10": "4BKc6tmjft5PWgwQs7Yv1Rg5krUaPj5bywTgaXevh2sW342omcLTnsiBiMUEJCfGPe1FxPKuWPE4bGx6zrf6G5di",
  "key11": "2iFLCFqingYAWKU3UwZfPjfW65CHsR1o2ztsxNYE2wJ8LUb3g6eEsFGN4zMtRqJ8hzkeDMiavUK1wT4mjgeRPbhz",
  "key12": "4PWvYrwghR1YmQLF1iGuEVdipxeLzBeW6HvudsL3TKRzi3mjMY1sxzBpUdYFACaGoskZpZn6pjmxZgUcAVkcCyj5",
  "key13": "2iRes2CRSD7VMv7iedCrpjoLUH8hw64FChyEUBquh5nt1FqsUMauzdVjMfnnrfELLX7BGD3t1qNf5KvfKPQqwm8b",
  "key14": "5LjXsBGoAEJdh7S1vZKkWsHCJz8aA5fnWrbwBj8ouDVwahmSzeVmz8SDaP8xFYsgetTzstPnrHVjWsuqVyuU5GGP",
  "key15": "2N7WpRfQDQbYhy6WQ718YXWqj8C8tV387dWa2s1syRAL948xzZe33jLZ76BSoawh1WwkwPs6KeQsL1YSkQ2vkiv9",
  "key16": "pQpPPd7fwGtY5ekbNcMyWMAw3EYPAiL4tsHfZJnywWrt1CknyBgZArof8nfJoGqm1YTixurgNqqkCpaoVr45btc",
  "key17": "2ZTsSXcHkMt28LKJ3SQeEVw8zhoPbxf2QGqMuBJhoDmHx4N5ob2aMXkr5y9ELc3Qf3eCUUahb3ohLhB3yyh22FA1",
  "key18": "2gUNA5sZZcsWxD3ALwU6cM3WFdYY84k9k8dw73qL9Y1urLSTuqwhmpbmb7qaUMsnkxJF43WqsszXGUWSU7hizgHE",
  "key19": "5UHDeor2tJ9FhWdcmkbQGnuNPZ921bwxAmztFb7AVhZoQaFzgVF73mpFLBKQMWfQ8HnxVSKuRWRhzYqDf87t4FTE",
  "key20": "9TN6pzycm3va9QdwPk3GESy6JjcUiAp3s6uyEUjpswtpHLqwYxnacS37NdbsqkX5YD9KK4v7VvPApESngNaYUNF",
  "key21": "5VFsPLt9dhoMkVnhJtgnWPZg86LVgvxHKNWypAi6FcUMJwWUSDWoU9aqcaWW513SwBFV6vqMBTjEbgL1GJVCYjUZ",
  "key22": "4DgZaNryVQCfNu9cNxKgqaPufbRG99twMzJGvUyMqwDHpBKA8HRK6kEagP2HY3vTssBkvbuuyEn7SWt7m9jkob8z",
  "key23": "5Xt92GyDrXzLE5XnHcys2VK9P1373NzKLtzNuH18UAefztCWpgM2DN8eGyYaDAvHo2XLwR92KZCqTJzuJni9jMVX",
  "key24": "io1VEGPgt71NWVKTj8jSgTbCkEunfqdXSgfKYGH7Hj9ZiK6xvZLH6ZpHzp4aXfNtAaAwYGvNpECq796sX7Emfqi",
  "key25": "65nKYSsogdWAcspH7cyZHuYUYLLx7gHGWMeoui5oFJE1io37R96sgSoo8h2Q2UxviCiAryw5PNvZkot9uVSC7Yxh",
  "key26": "5nFi33R76LPnnKCqpmpKCJNsEG64R8t2NrFZCTy1VN2CH4qW9XxqvrCbXwr1vt4bMp2obkhJWfc5u8ZZiPHmj27R",
  "key27": "3XTVxD5zQYHg638Pe3FjK9hyBhqgAHKhV3dHKpNxYWEWYwQTXJD26Gh6t2xMXdTtRwTMqMZdKdww1ViH5CGfBy2i",
  "key28": "5SCRPFtEYdNMJ9PDqC45kpwUJ36WMKCKMjW92Vf5kaPpyjenRGABiUvaNJnM5HRy27cLzFZe3x5FG8KHhfXuXFuM",
  "key29": "3e3uMck8J2gjKLeznEXbEVjsvwPjSyGRezZ7AtsvTwj1FsD74yXH1ks4D4U6V4EJPegcTtky42iQSQzKj5WwCGT7"
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
