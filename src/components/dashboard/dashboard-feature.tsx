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
    "4Vp8DgbusykxkSp91xZ5QhNe3P6dMDScCGB4XcSApx33ZMwjw8RqoPoVr351kYFo2D36sN8Z1or8SuioV26zTTYZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44RafzvBve1dNP7mKRgUzKUZfgHZj2gxUrp1W2pyhnN5t7rY1VA2FJGNKzGozii7PWp63E8M8eWaBVGvT7FBrTv5",
  "key1": "5sg1UgyBkK3kkgoGiXtnm9vwfa7yYQELwmGcRULcv7WPpTW174zwvyba9zLZM2TVoWRdx113vz9NQttDDyR6bruJ",
  "key2": "QZwRWF8pGU4BZ8xKPnr3SZc6W1M4wAFid6kWxbgCpDFnPZL9NEmp3wuGfQg3ot2YSRdRtNukYEs7M4mQbi6cak8",
  "key3": "2or2x3wuswAKv2SxNoeuNZ3dctBMFBhHi8r5sdjpikJdUJPyWkPtqZFnSdbHsFoqPQJz1n56SVVyZrfivFY6ojBF",
  "key4": "5EdqxQ4LDWmUMzYK6ChUPkZEjHVxxEiu4YE8v9Ji6Efcw7rzQxevmPXe5cdXHHEWRJeGphvSgqVZSaw2GCnjJahT",
  "key5": "4KWaVpCu5St6HFBR4dANxG2n1gAzyb6wMEgKy1kgnkqGsRrzc6Ltupkrx3zALaSNxfNdrRvvWm9A4Z21kpa1jc7g",
  "key6": "5o1gocEmaZuDR87UnsT22qcs4uZvrj4q2VQ2AvcP52tGAKCb3gcpPD7iiXG2eDnMBpxb8mqccUf6kSNktQH8vgRp",
  "key7": "3Ut93fUGXaznEm89i7H8h3u2qbKz5eHck5aTDZfvKPuGKVaGwDtRsuaWfFqW9skPFwq3hvYLyxQjBDKH9vdXLVD5",
  "key8": "398nLEafP6Ho9Z8BLBk6cUowXdPhCSTcm33JCxMUL5hqEyrsiX66VuXTyVVa6sRmTSo3MbqYY6EDrMwNmvS1TthL",
  "key9": "eHs8z17CHqN8j2LyT8Yd7RPGbefpPvCQS9aM21Ryss5L1MsSV9So36iZWDAaCbNwcxbKFPJkJ5AidY8sBXdMrd9",
  "key10": "2oTUFtVJUhHVrrw1u4mnehhV3kd6C5o7Tox3VBQwcguEeGYQYmn7MErGc41Up5J33XHAYNn7DAKGDe1CZwi7sCD5",
  "key11": "4uWNy6M7zE8PYQjjgC5yiCtyvAaDVKCZeSXPfXpTTsiTngf8jmwvfgCmbM5DAU9MLE8kox9NKdnEv6JasBEWjri2",
  "key12": "4F7LU98Yhy9gd8gymRvCpYcQsu3hpYKrpGchVkeC8JrymDPGuCkRuEvYHxbDSvKRz785ZpbteqYcjBDtM6gwjyBP",
  "key13": "4rUQ2BMYTHm898j4ep6WHP4xJviumsi6aJN19wczBrnspz2oqEavBtK2XwSCud8CC3e4yZWfRdQCaPHk5EajW3EL",
  "key14": "5KBMEZfA36dUwoK8wNhAVvEuLsML6QDHW1PLQuuNi1LmfD5wR4jB8YnSS16YPqJqkwZuV35Vh65VgtSkJgU6cWay",
  "key15": "HsXydgBYyVErSPVx5fQoLXCcyAgR3moUh32eW3wUs6VPXzqg6rktEsLsZNV6Z1fUHJFmFjG7oWBhU5Z5ETBsAZC",
  "key16": "mA6hWH9UDykQFPfMAYMDgcwanC17KTSykkQe2Daxd9P9dnXwvs9PLC6ZgaHZzznukERH6VNc5Fu2v96W4G92B7u",
  "key17": "3L2zADZbsQN5w3o3S74MEcDKjkB3U5REKPPBRQBHvoVfssaJmXY6qADgbLJM91117HE1dxYLzCiLKHePvkvz2bhB",
  "key18": "5zvYJeZmZZEb3HS1XYJAVqBssCzgPCFpBQisuH5KauMN9NCSb4HXk8hozrcRS4oFQNqM4kVWUJ9uuksqP9Kcda5L",
  "key19": "5yJqi5mRTVBxou5peRiqasCXAXePaw1YaUDH6oLseRR5Hg7wzsydpjhD4KxMwj49wBBdKUS3cpdbmFC4dyhTfxCb",
  "key20": "5Fy4sVMc1oSAtGKg3SeQq8caS9zNQzqZk8FeSwebxpKffL7ZHT4PnJVEPxuPpypfW3ZRg6u5LHnTqP37dRHACgFS",
  "key21": "3rFf9Mh3oivKUciaHa5dL1LhKUhM2ZWNyCr3yu46pKCPa5qBFmrtWDmf3BRUnbeDSnbjJAS81Sx7GUGui6VtPTnV",
  "key22": "BtXpJtVPjatHScrvAVnaLHrkuSzUqxAgdfyMdtR11U9HLLXrSanQUcB5cRk2jswbhoSPgYgtbkx11zSK2KecaV6",
  "key23": "35ezfvmLSPTCu2KkgN9hUaWGMJp3XH4hrh3MRr5iQL5sVxj9cApDh6wtkY7qPQvpywaz7yXTbWntRBkeaSyuN7Go",
  "key24": "3y6vye6X46ZKsax1BbN2z1AS4GKaVrYrUJ4hc2sNZaXUyaM3wEr7ButUDLaVkR228DNhDSbn1EqDAooAEJKx6qZF",
  "key25": "5qCWkpsdPCgqSvswGvWUFK3nh8iAKCTkEAgfFHS296jK4fexD6jGVJwTXUEzdzws4Y7tdFtoYi56USW74cwoVajB",
  "key26": "4ybxqhD1viZKrYNWJUrCyCXunHYac1ms34QzN5MMErRDaHhP8LR25KQNau8HdGYMxB2VH4gshLoiiWJfRwMcUKT2",
  "key27": "37fCbsXh1C4ch86Q2p8R8Hjb7bNEs1pwQtr4nYxJhxdsjptiojN1e7spBNrwyEZuPFb9tb9WudesG3Hv1vaPyLvi",
  "key28": "3Gy6quiV2tYnT5EDmp6Eejo639E6pECY9htuMs9GwLD7HD5yoR36vGrYLS4fRVpHQdV7ghALWVJa9j9AHbSK6yFH",
  "key29": "AoWm23CF5e8mrX2rRSzYAeK1cqZN4rWiqN9QZ6L1fxkje6Yrj6yRSsjGVfvgYSLzzwjKJ6uzqfh1ZtCN9ZCM7Lq",
  "key30": "uepxoVE8DUZQD7kMtxmeTxH7UKXf9uiNFvJb8pZTrziD3iZz1GA8zRFwRrm98S6C15H85y1mikyy6XXM7rpzSDh",
  "key31": "5ATtpA9k9vjgiBXztocS1o4jXi6UXueyXCqk8LiMRW6LZUmHANLAAFnjALZH4Q8RqZEi5MdX9pbE7HLSUxPujVKy",
  "key32": "3KaW59zGdGDnuyDLC5vyJmtg4f6jThimCdHsfXHaq3pNppu2VCQanGLer6toc76ZpMahdatK71HZ9CFFEzngHeba",
  "key33": "2EtyG9SyEsMrSJDB8nGPyaGsJUDz78ToCeNydQ8WznDeyeyS5hgyUFLBQfx51iauB3wogd7uaZXeh6KpXxYtQaJZ",
  "key34": "3PhkfXLaJUdaN6aXuHM6jLaQRyTvsxTVKP6JYXK6hEUmJn6Yoxm3qxghFvbwh6Y3wLhtgGRyDRTJWQKJhcY4zs4W"
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
