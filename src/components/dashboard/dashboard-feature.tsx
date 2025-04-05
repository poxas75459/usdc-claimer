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
    "4uhetoDP6okuFKnqKYjkux5sGSoQKL6GBAUnYy5dFtKZedMcoPeHseRkK7doUWG2t2YcR6xJrRoxjeEx1CmJ6R7w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DZjZHtp53GLzhqZNWHmgXYtZfd7Jbdr4VExFghTkhE9eSHZjcP4FbvnATTtRzMQFVvMLtUhrc4sTmu6LkZ86Bj1",
  "key1": "2yLeBgztqHdshA1hBeMLdFKaWomsTFXrxigfvbJMJ9ZWPBBBC6mFRnqVFcnp5uAB2qWm6c8nDWZJTf57C9G8f8ci",
  "key2": "3UDJ5rWeAZHyFutDSwknsBtxKuiQRaLWfuLQU24tygoS4ESFsr8NLp7GpNjLaBWu3zXo1KYDHoYHePMqXxcGLaAz",
  "key3": "3s6toCjS4p4GebKu9Lq3CZtefx62LgoFTkZEL9upVY729hsHphpzz42vpqdVVVMyX53EUn9zogMjXzbjdQeKvyfF",
  "key4": "5BjcQkmQ1NDhppa6C8GrvbSZtfziJskwocVjSfDNrnDvJREMX8NdQyxPhPFQGhygyf2JtogHFt6TZkGgcYnAacsi",
  "key5": "2gAHH6F8xZz7VTpyTS9G4jNXVATs5Ynmr1wrf5X7CVi1dPANSDyrYvcZtT7RNnGVufmwY6KxYZRwYjvMbywSVLmB",
  "key6": "9L9wv4FLzEqnhDfgtvnENAwe5ryVF1SHyiWLSbHEad8JEXoAniQKwmdsdTcr352giroLvFoN4tzM6heqYbFNbsd",
  "key7": "2hrirbFxFSQYQpytN6x3UTmKtQFTf7CKgBqMeet17iBjczEeMpSaey8Cq9uRYvCzzhmKjaocnDodiFS6F69HePBg",
  "key8": "5oQvCGvbmemq7q7pCYTmwJ6ZvnstVfddFwePVZFU6znjtFLTcPMmWnL5C5LF2HyL2CD4WjGgpUp5otTiGGfwoGJj",
  "key9": "oVJo1xtQRR3Mo88JhoQnJTARUW9vEZUwbeDZbxgb9mZnxVPfQZj5gW2cHHeB2bgqLGDMHeaoN45P9grKzXufs3F",
  "key10": "35mqtA9awfSdn7jcXeQuHH8WxQ6atTCB1CwipCu7PksRVwY1g8JFvxiNVQ6rHKFN4F1iQiqykK8Tox7CSRp5LVA7",
  "key11": "4iThzaVak3pUwyRRSH2E7hDrt5CmmanfsEzdxC6hNWrf5WteVLv6EzVQMLP1X2Mwg6WRLa3EwQm1cpeCy9WpmG86",
  "key12": "5ivkEVX5YfwmNvShAXNrFnLM2fuWXd7XgzVDKhNBnk8YVz42hQG3coWZXKZPhxjiQvuyRt8poTn6MLAqy6zf767n",
  "key13": "4XCjqunU3pZr5GiWtjRt1cQQdsNTNCfiZndWyDYFQzyF4whNFTMzhSGdEJBtW7dvMxdtoNg1KbwmR2L5iev5bMY",
  "key14": "osJPtyNJEpkdaTDaJYe6AqQeMXo8F2yVWfcXgco3bkfRFC5TRuq5oj9RRmWA5uMzwAG5EfX8B7oE1hbDk3r64Nn",
  "key15": "XLqbakAaVuBBFbcQwnvJHVTQbJY5usKvWjtrMKo6uv2rBUQBEY5cM3no3hj98gQUY9duqU2zGx2FKc6i8jB4cxx",
  "key16": "HfGiN46oJC7RQY83muDs2oUAco7nJteGyif869W7Vu32ohK9ExCxgWLnHUdcG7nKShFzRxiLbVcnGzBx3oLoH1Y",
  "key17": "3L8K3jgsTYUd1N9Wtfp3vAwva2Ea1WwvyyxadkKHQ4r28czhDU3Btv8M7vAnKY7DCLLpptGuWKdYpYT8D5FQhYyC",
  "key18": "2zrtktX1urv1zg4r8nvRnq1KWcAKo34wzYZ1q3Tnywaj2X6umzHeHH7LqRPmTwUjbs6zRDVvD1hmN1DdGhxQgFcV",
  "key19": "3264DTXfC4BKyjyr9jUjBUbMb61cDJk1t2S7Q6WcMpoYxsDLuoDvWaTzxSjM9tJXCXci7egnc8zuuwPd4Wo8vcp2",
  "key20": "4pXaZGcfvwyuucXMVLziojcNjynRTNvJ2FrFvaC776XqTANaomezVVRpMkpZoh8aBmX7JxSyuqbPCLD44xbnKAy9",
  "key21": "4hQXzyHTeSRpvEzYJqLu4vn7hMq4FANPP1suuUpmDDnrRQdzMWRWiBxEZNSHudfys8XTAMUndwKn3Fr9Tb5xzZFG",
  "key22": "5SoCCb7QNvnojZUhrEDLdAfi8dB4s3jtHos3gqj4vcMXnaVZ3RatV3sCBdNt1a7dt9GzytJy2Tg6UUw5yoXpASrE",
  "key23": "SdZ7R4xeSHpnw92vtJZSRTesvPgKLJF85gZBNzhAC7ksgWwPqFQrk7okPt1rGDPw6ZABDk5tAA2GV2A8yJkSiCa",
  "key24": "5vfji9iLn73RAwDXJ6YwvApPgubpFKqTrr7UUB7F7fCezaWNR9Q7AGbBqjwTwF6WnfkG3TSTtk8Ta11LNmbRsTXs",
  "key25": "5mJUq42KxeVh3cvYhZg7SBkasucVykBhKPXagdfHw69TjmB7spguGFvKfn9h9PQ1WgjtR1jASkyyTNjP2bWgxfqL",
  "key26": "42VY5tnDZov21NqMRTtAw9g1ksiJoukxNMjQZM3izX7R4v3cKrKBfurQVfU5UwT7VY4yGsBCgBgAKSamEr39K27Y",
  "key27": "owvHYtNKGeEssLM4fN6N5Kstmt8xJtS773WE4bjTNWBuVxFj9KLyEwnD4K7pbTqf8XV1GZQE6kEBNNzpaSkG5us",
  "key28": "4SF6eFDkN4nMz7aYbhAU26FrRBMbHLsG3mqSeyPwZVZy9m8vjzmjvfPBX6YJgSczj6t7CTgdYJYmZNKGg8ansi6s",
  "key29": "jSS2ZKESS9PEYTJH38Czbajo9Q9BDvi3t6dFQEQzZmTgaFvzBZTwqquYXLFVZcbQmqJxRMEzo14KBmFdK9v29rd",
  "key30": "hpoucErkxEPmRbxpDeWRRpMoq92thvbTgWawrpDCYQ4r75MvRLtad1WZHVgMsNjARPpzY5bvhESNC1ctu44RFam",
  "key31": "EALWCaovNxnYyyg2AHHvABt11HxjNE4t5DyLsdE3VgwrQDjf4a56AEKHXgxVK64RQ3ELc5uMq2Lcg9hjYVDmVhS",
  "key32": "38XPqpj5CfCZUN8aLHCxHN2KadNuRZsujBjGKfUeXBFohgNricmzMxPcHqFQQ3mQ1i8iz3RPMatRFkeo7DG8r7dj",
  "key33": "4mynik3L6VLF7u4rfu8hrMpS4uoyWzC4wjs2D7upt8LSRJGABkoZr3cxGktMKasDTw5tHAhN2erFZbtsWbwDjAeF",
  "key34": "sqzJbsGLzkGS9PtDYVLKFMBYUeiHHMGHepbGik7PRcRKnzMVy8ZrRoogPuM6mDoEumV5bchpvjbFeiTXygkxWZw",
  "key35": "2poEDBSrVVf1TLwuU4p9vmhTbKXjkUBzsQf2gDNrPRBWVHjmmV9qNUDFshJ5gdM4tw1o8Sz3AoUN8P5rX8ntif7z",
  "key36": "JieuwtUkXPQaq9hgwp7E126DzgopeLtezaH4qHtJtZhpXLGeQQDyajt7DcpbQMDvwyQAGWa97LzHRM1dbxxa9nf",
  "key37": "3MfGXFE6pXPx3QihQq6XRfan6qefpUv8D8gXRq5duoSPGxR2NyVzdnfybP7r5ke7DTgDmWPYLa2s3P7hUsvgUgW3"
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
