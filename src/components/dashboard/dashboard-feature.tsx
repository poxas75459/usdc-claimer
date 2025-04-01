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
    "3HP2qmBw6KZoeZt1zrHz3RqcrKGCbyTaM1MGVjh7vt5zFivq2q7gUNoqiudu4vKLM9GU1SoQpRqob2yKzAaMnMVJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pX6Qaqk2ybcTL7VY9EbzCaYi2RPZB9PWooZVZ1CUagRqnG26RwmcfWqGmF3yVaeqKduc564tiMar2Rn5YJeMQ2n",
  "key1": "2XKDhmNiUtxx8Uw3Dozu5pyYRo9ucdwNp9wJUUfFa5VT8jdHefEG74jtnfwuvgj9MJXJdxrnJ2cRb7TjRhdPqx9T",
  "key2": "Aoa5xiTFfgy4i5tAEDZKQjRkDWmCVrdPhZAWPPbdN4VfVFBbADn6bhDwzhrbwQjhzEhfitED1bEEnaGvKLqoe3U",
  "key3": "gZWEZs4U2SrQ4NotYoqQiwTZmr2V6B9D5qmYf7VRvuM5RBQJGxRRfR3BRbPp7XKs48pPaznRPkjvJ32aR3jvd4y",
  "key4": "5rg9Vtrsrbq8aQDssTG5wxucRwQvcB5MuQ5WoBCvQa4Zuki6h3jX6vHSJGTgDjKUNMr2Yfz5UDeTMKqV13W6bHPP",
  "key5": "hWLS1jNfhq4VGTmJFwmreRcBA2biQfPoVu5NGjKsRvdJfYWe3WCC1VCNpF4wmzDY7FdnTZwLYTdqYrm28AaWhn1",
  "key6": "2Y9FR6Kr7ArWUU63afirqF9tcnUdPdRRvSxudC9hwHHFQpb9G1J337wDecmpPhkCnCbH9fNgd6o9g76sEpHkaWEv",
  "key7": "cemD71zb6BdAArZjw9wksDdTuZbHBywaVqRwDKJBAVLcCd31sK4PYVAZrqdpch2WSJsnQfAjVHe97AF1zZKEJx9",
  "key8": "5SE4hKq9Gfb4LAJMqw9VeyJksnjW5Az3utkJsMmp9RVdJfM6ouEjJk4czrC7UkEAXrU6orJoRW3hGaeikmBCgRaF",
  "key9": "2E9U75cvxvNJY1kHrM5fcTKL21i9gkEW1QdR2zdRaGhAdNAXS7nLu6cUWxdtn4h1CZHECAqWYUfyKYLJh2x5fdho",
  "key10": "5rZfjKKiGJ8N9NGNg16AV1nsa4XwvinZq6vkVtMoWZ2UZgNkAMqwrWr4jHG7Sic6TYnVc5u2KDseo2249gEifsCp",
  "key11": "2u3BV93BrWgQUePN1vnXjPrDsnieB6BLF6HDNbmmW8KpTwpMzrQukDrMz4KDRS43MMjsmzpauAW5QiRT5z6nSPhK",
  "key12": "5V7KGbHaje8H6ZcmjcUPpQ7WT69W5k3d2DstamnKpDh8Eo6kMLPLE86vpj1PSmy34WenkFWrSXAHN7RyJv5cditv",
  "key13": "3b1deKyZcZifaJYDVRYiZrcFb3rfMnntc1MttxCWegHkLgyJeNSJUQaesKegENuYwsudKHL3ZGCyuf5C6GCvGA4X",
  "key14": "MgHubSovDkiGokFgMM2USxKvX8zd25zqKmynKfw1YvfU2eoNLwbhEUDxebhYrCTjHxdGHWDY7w8b37iDdxADj1e",
  "key15": "3wrjzmtSM2RDiEQ7XE64Q8p3fm1joxMH9XmoYVTMrRVABNn8G2cf59awtaYJsVcybzF4DypvXshYKr88yyisVtBE",
  "key16": "4gg3saCX7nc5K9DCkcbBM5FDWg9WXULAzZmWjNHfuuXxYWe12idmhEs2JLRLqLjnLcAa6Arb5TVNd4sqZ4yAEv3V",
  "key17": "62EFWyCK6CRfJgL6ipGtFGZuAL8dYJybyiApxKoq6nmSvemPm79LtQncfgsBaZqwdkbqiTJrtzqoFqGmU9tvdWLz",
  "key18": "4sC8xxxKT4GQ9Q5yAkyrrmazFf6ZTykXXyaj2wdaDxncU3yANByegx59B3eC2XiMzrYhuzb31czuTjWvCZcoDBGz",
  "key19": "2fqbLQYeA5tSFPppNqcobh47cV9x2HHZkQBUy6RtVkqpu7xLMFgihmQnH2NoiWVuZJazfnk9yNTqkXK1xj3jknsZ",
  "key20": "4azmzDHwa8VA9yJwaGxttJdxoKcHjVXvRmmmYm9PbvZBSTNbcfPzp9P6pPzrLjM59DDbRM77BYVKTNYZvj2KvpFK",
  "key21": "5wpxwH97yg3Ah8ry9wANdvTMnECBuiwbbrNLPUdUkEn3dLuHyE6N2bZtfukVDm21AsLKxnfDRAiPEg2GYH23Xtv7",
  "key22": "3RaLRyNnkmMKHYvAW5gG4eb4uCzDVXxo2E7GCk7DkUAEDj5pLNHKcRVBjEQfrV4X92XjMAQMGKNwwxecbSbn5bd3",
  "key23": "3WW9mz1tkv6jLN7o8H7Gt3hCRCvR2wDZwRGP2w6e2GhyVoyWYE3gmYygrvE2hpe5YByFYfSoFzHp9KiGanQ5EK9W",
  "key24": "4CBgJJZGkKcVFFkwWMgi3WGXSsmjChSLLdQuUctz2M9YBbEJS2YNPhATMrscRDHwy5BGVBZwn9w6EopSuCn5Qje4",
  "key25": "9gGWPr9tNojkQk9KDz3b7fBJzAWj1WTbmAe3F3fpdiMdbcNakUG1JX8yQDSHFyqyULgcRvPSRoLXPvdFQM4HJjJ",
  "key26": "3ecgBsKdstRMBvtgM4aN1vPK5RsX9iZoVLGKVFYHEhRVaY426VNGSomBTiHAMwH6rzVXkdUxfvjJVugCqMLALV5M",
  "key27": "3WwGgPsK7kMqu1SvS9X8Sh4iv9nS2eX1LtxZurLJtx8U4xCiU9cLYP31RaUrf85rTWpRSFzpP4ZRfCbtoawsPmod",
  "key28": "4kJ3thAsmjSF8QJ7VLwoLyRGDaMUUUJKYUGXx6Y7iaDjuMgckxfkUK4NNefd4Yi4fRRqXXKRkKeQQCWW2E4gfGjg",
  "key29": "eZJYpxQQzgpydxwb5xCJfiag3BEWgSmZ2DtwDU6dm7u6PAMiPEsUorq5wmrvju5w5GHjZBvNsaWTCn2RRDTQdPY",
  "key30": "4TBLfh28ERtow4dtdBUA3owF9GQ5Tj5g8bgS1FYXCL7iBaHfJW87HJ7ZKG3LYY5qonS5qMc89AqhycqwjrT4Kqwg",
  "key31": "5PsAvBUm6JEfCU9A8UEgJc6bUTttrzAXZYTgByQDVeRoNNSRF2P4JeL5hS6ksrNMKRsujArTg7zabrr5gCSWVjX",
  "key32": "LpGPopG6z7kxEYvfensJGyMybWPEoQmG93TNfNtRWmet476u9GjdYraevYHAeuyD3vj9V9Kbpd1B3f89Y3rQjPE",
  "key33": "3SGRL3L9U6eTpj71ATtaP5z5dKACZ67Vyp84p4t8jnisAWdHVWxm3uRqQfX1dezWjV6CJLoR7fm53RXYXxqtt17p",
  "key34": "2w1Hbdv5SbE2758pYz57VSmnQhnsdXmqJso3rct1G9aZmpoCtX6d3JE2hz6BkBHcUYde5s1zLuJyFx1rgtLWar6u",
  "key35": "5Fk12psqGUNWjjFe8T7mooQxBdD3hqKrd49iZehANbPtUNHTe3omYGA8UJqAHkZvoTMDuthMn6iY3SZDH9eZzMvQ",
  "key36": "3yqk1i2Uze3g5xfp59qd1V9DkPLDcnavYKFHRqo9eU5mn8X5Fq6RrYTAgC13zPig2KHo8oCLpTJ2qDuEiLw3of7U"
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
