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
    "2dLwrfSAXFg319HZSJfrzw41FonY79MFyJ599TrVB7htxKW87GWetQPW3942bJpzPfUFqTR8tp5L1H1SHvbPEBEM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oYWvjrPxHviwWHZa1w7d1QkVySGi281sXm28rTXX7zWKn8QzVVHugvBjWQoHWrVJnKUJAqocQowZcHp7VGZf8wK",
  "key1": "3QoEhUytHuYNCksu41w9WWeTJobod13gWjH5DAJQmb4YTPafeUJebY1f9FCU3U2t6j1n5hTGDS9GqNduxaXGtUwL",
  "key2": "3WGMwWXh4qyUpG8RZimfxNLSGvHBowwjfxbh7juAHjEVBbcrxXpb4uxMYhj7yjhYJrUB9EwaawJ2eTYdPzDhz3zd",
  "key3": "2xEHEchEEG2ZhFE3PomU8NC2orM6bQXar7itsSDzgW9eUWxDJo5rxL14ay3kBB37Mhqi4LGxMu8sHKkggpfuTHdv",
  "key4": "2HKaPCDCPU4ohu22A17sVqWypA3Wt2xR8f6GgoSFVYZ6dh4o8zX52HxDVLQLqdvwNJQXfjmVkHZctLtgbDj9bufX",
  "key5": "4GJYRPQJQxQCpuCjrRnwHXa8KteMqdqEkkbu5ChDHGzJTWhQXu3xRdC4BLe1Q8BifGkmhxyf3ucWtVhgAWocnCw6",
  "key6": "244fdFfdVoCHnyd8ZQmn7NtnHqVf7dd87AWbpWWK2rtRN2W26USPAfYSxHkg5Np3cF37Mipkqp9XTTkaDFYgvWbB",
  "key7": "2C3zsXJmKPtgUzvZXzzLtzNpwq5b9DzJvJ9CGvcUJjcfMXfo8W1SKyBSS9WzBiFSJEGXVZxeynAhDK69UdsojRui",
  "key8": "3ckCotQBeFdQD6fG5hxPvi8ifKCkYx8Wk4vr2JySRg5qt8YJcTAQQL8ixTUXQjr8r39tmZLQnomt7XwNFuj2XWPg",
  "key9": "5V4nXoBb5FQospMA2SRRTFDc8uiaQ5LQYCkqf95GZR1JGLT7nSVw66DbWgCK2NrJ2GGWFUaJ6b5GYFDE1a5U3Pri",
  "key10": "27MqBPw3JEt8LN1GsvAezL5bURi2Lk8eQm7UWWa4DjxQtXeb2TKyjyo62cfcmPDHJqcshRjPARyBeDDHgQgbqPPq",
  "key11": "yjfPnipdVZpzuyJ4bmV2cuDdGwH9aE2jzaRqnE9ouf35GuWLoRPFgKsjbFW6suhwEZ3p5Qeat3WDo4dm6no7xuF",
  "key12": "AsZbBNK6wMDWvpBcPQGrcS7hEkvNPRJdYuu89H2dCgArbYJLb6YYjXzakESxaJkrmCnkSujVAwFiHsNqu51XC2r",
  "key13": "4cder7nzLmbZkoRTqbvRa7nafr4QE6RFYV76b1KXSTBJKG8xFrrminmSkXEzcBpZxF9AqcJUSZDocDFtanWZAHKC",
  "key14": "YPco3D7RSA9DWdoEQ1kWGzWdoHdKmeDMeyDyycaiJNDCKQQNyDzx3SYeyAim4pQND3Wx9modibQp3FZeKy51m96",
  "key15": "2KbkGm9ZV6aUdbEiedCZVFVytEqkKN86TixWBJYvLpjWrLZsMYy3nS8jWQ9WZRez22wz8XvEHMsntR3hkwNVgFHf",
  "key16": "4P8YpAJvwg3qJaNfBSHpYtzMu6wcjJUFqg8k2FHUBWMYkXv2zLyh3uStAKNx9dyMXAN6HAD1a4gNowzq9AVe5pko",
  "key17": "2W6SjQytwW6WnPKHx59gyy9t7YFK2uoN6gwaTqYrw9jGTLLs1c9yCzC8L7aSCmF9eAUhvzopwUCBSYdBTc56xhVT",
  "key18": "2f34nrgih53qFVcmoJQujTCKNwt63HbF32qDMEfZd53ciozzNuMCXykeDkUf4EFuebnXZ7tHRNTDY67HxpFPQVcL",
  "key19": "4f6iP8a1QMvs5BDyeoD4MA2sDAAzy9HSjygCHbArJpEEVvrWGyS7WFryYYhhvcfdFeuDkaCWtyrBBKGY4z2mq4x9",
  "key20": "5HZytrNhAvEikC5fxhPAoBomZEpHFqN3AwomgvSeif5jGrTskVY4YDka7itwGzRGW3CDGQmtUGyAru3S12XP5pjq",
  "key21": "2yVAdnAeJji67ohqffpRXaLzyCXRBxLyq7RTZxcg7vcY8xBRPVkZTL7bj2buKgZ8JxqFsE27wPQA9dxdoorcDYEQ",
  "key22": "3UiF2w3aPQn3gvDq2rwetmCRC8CaE76ZSLxrnBeKpu9JZvCmXapWFnhWJEiu3X7RLZA3eyFJ2GJLeaZfT2jEpsCh",
  "key23": "2SiifSSrqpT4FTsE6WmsuV8ajV2A3rNDN3i2vJKgMK7uoqtzAMF1uabsCEedrVQ6g41TWZi9jp1nXgSHs6ezRzVE",
  "key24": "5J7wJX5Hd2qYmcte2oXm3BGYxXtXcaQmowe2sfje1uqSJX7ekVy7aqwLXS7T2KVoq4N4SZ8EqtrasBDaWUbZejNZ",
  "key25": "gMXTa2KoacyUrTgpMmmFDvpQLDZ1MrDDoyNoCs3FiKJtueNHrjdp5NLgemfX4kQtPQYzZJDmus7WmExkYqRfXtw",
  "key26": "4hzgN9D7EoMu9FC6uLHYdLWasqfzjiSwAtZye5UTa5RHU9LBCkPM7x8JMmxwENdRsupPxQq9uuBcuzfbUAtMxNhZ",
  "key27": "5fA36ZP5jfHFF9P4Hv1irGpcoPhHWtSejzgotfpirFmuwHjXsbxm5azGYRaoYYxNX4FgyL6nmJKzZfVGmsTRZvvS",
  "key28": "WsrLFvYUb7Db7GZPi4Qc8hLyth25fvG2A313hfdcQBFqwbTLSCcQW48K8r2oyQQQ8ep46enX9VvGxzE5M3tBR3G",
  "key29": "zcziQRAwmWTQRvWUku3DTAiFR2pjVQFHgnZnh96nYR7V1KqyMnNnMRHis59suNMqXtdzRKdZZhPGN6MspVAzz8d",
  "key30": "tWsx4u8Hj6zrJyg4tz9dJntjXajADqNpoMMtChRdue1ZxqZzV6U9rkqeT13MPVEeHehByysuyStcikm8ArrtHq8",
  "key31": "2ySJfUh6j8eHoVP9EKPFFe39VJtUQtWNsq3NXmb3E2ZEF7HvEpjhkCWW4ZiBxrwRJiKf4p9nwUPpgb4L1DakEKhg",
  "key32": "3qDgwF4jkxe1bNkWcaCfydkcxPnnM7GSfYBTtekzarSqmKKSGpYQgxQXMaCyRmoEYZJy3AWeTe9fpNrwVPidSBap",
  "key33": "56gHj9q7FHs7o8Vsa1nCG1DQmZiW9RX7i9iSPChMyJR3ZksBjjPhW5jQgTkUtLSJeZ3YzdoTirekG5gJA61nmPLs",
  "key34": "2oUC7i6Zq67ZkXDDkmgjQ4J7t8pwxWpoYhVpF8yZ5bvfTVVcJRQyxi7ruV7RQsGZsCgzdXNwktLXCHCu3wuYe36u",
  "key35": "2fqKP1yxLL1UVgTvftumVbcyTzsapqReDY7Ba4mrcr3VYEso5tivk7hiWNa6UXzgc156xAypria8JfW9S5tzLGgu",
  "key36": "2VhsKPR5Y2gyKJfwb3NmHFmGcYLEcYJmpg8RnYkcxut2VizxTykSYU5eGbtoNeTks1jVLcE7T6eKdtL7vqTc4cum",
  "key37": "389Y8DdEz8mzk9WFqJd2ik9mnQsJSWgJa8a7326bcjVnkTFZghEwXXtPGZwaKwsTnk8i7gHB9aTqJjAH1WoLnPUp",
  "key38": "3WRFipt19cXVSKcP6y77XvcRkVzUkvxJ9wCxyY4NxuLxVb94cQJgmqjh8JuTkzJDshroKUJj76aiUQZSStqeVyHG",
  "key39": "3q2DhHrQiucQFVc9LxAbkqZXd23pxUNaC2TmB17HFZWTbnD1JBteKEPKn8dsKUAHMDSWCN2BeC91MDZshMHGPfco",
  "key40": "3RC7KsMn6d7uERzGqwNen6YddtxNMN5AJS8ArGgRKCWu5vmFe4TuVAc7LuMj9xUTfxvi9gWhsZGq89Jw69C1W1Yw",
  "key41": "4fg8j1mSBLg8ES36VnaG8Hg7FWe47dUxq3WYyUkRES5NZtv9WcgnfpUjtwcSYMiFHAKXXRwrM8iUCsRQ7saTMLPL",
  "key42": "3voYZCDDKviZ3LwpwE9ntM6zgQpF9oNgyAsFX1M1KDEGoK4kRhZLHLpwsgfrBxmVeEakCw84jcrSxJg9yTdAWLYk",
  "key43": "62WVpP6yAuZhwmvyBnb6uWQdpkeioANyaNu4iNggAk4SQXFM2nZZswUEE37h7TjCgyRwtBuBkxddVrebo9SaPxRy",
  "key44": "2bnX9VhE2bWdVfAVtgda6vRoeTkNtdqYbqBH8JRDxMUi5VgfRNKwSf8vB3wpSUtFP7n3xWomdSNnZcw1CQytib6S",
  "key45": "TgK81pjs8mW2nZipkx7i6xmK2EAeX4o77gDSTEEeFxsU3z7oeKW86M2B61idWBX8GTh1UqyGrUCBTVV934gyjmx",
  "key46": "54wi7qMisx9Se8bTovXAtkLuWXjUPbhpd7eg9iY31xVdrkdozv4aCDeGnCCDSJbgDWpJg7HQRMzVdkRWzV8Wvjvt"
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
