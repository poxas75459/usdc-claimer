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
    "e2RmMvKfcWCkpGfcoxpnPRJy5fZqXY1dRP7aNVHVsgreSKRFR8jwJ4kQGKH8bfx1WSHvTfZ2nSnU8WnrxytPBcj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jnydxiyv7ku5jzFiNvqBGgqB8q44vrgZ2ZENin2Qkz55x2JXq9r6TspxDjQdaf7k1yXA6Tv35chcUhtmx3vgxKh",
  "key1": "5EWUxjKrGY5QEHyVFxmgeRJHF8fEDFB8raEjdd1Vay4hzdcwPnUKwp8WGvTJpqN4WNjViMsVDMzujGHTztCg4AfP",
  "key2": "2SUe5Tvc4NSvWKRZKpwscH4K9G1fUUDbfgrp9ycYzcgxjAqmZQGWZ1VWMfk1xVXxBMnhzjisKofDxs6TvQcYTn3N",
  "key3": "4CXHhSQjesZrfHpSQdu9hMyEMRFrRLC9Ahqz41s4jabJ655GXMdLwVdAnuTZokLXektQwfEAnPF94oPrEVEvDFpf",
  "key4": "iymXSkTQ5ugJevUepbbMbe9PEyDYzo7poqpds7utYsyN7Chp49Mjv1A67KCSoXAALfWf7p56M3eBNmWuWY2SyCN",
  "key5": "3tqodEeLnYHUUfZsvsZAgTvX2Dw6fXrKaQqdEWa9Ldi1H6w5uCirByCHZm2pGwLoskaunwnXkT5yhm7o4uUNwpL5",
  "key6": "36LmDqt2Lb4PZv2T615hNpuJ72YTGcJNQTcs4xVc5uJvVJpL1Zko8E8zmC6ZiyUAdTqwLYiBGiJmXt9SJ4jAYSr9",
  "key7": "66bSn1HymktNa1p5Ybg9HfBpKUr8J6N5ysin3h8QXnk9SsoQL6eA5ms7khHRyrTuTjYcZMJ1vmSas8Vvoc2EvTw4",
  "key8": "2VR1a2Qvups2jEqWHFxc4cjHrc99gnSFFzQGo5MHDtdiZTQLb7z5SSdPrULpBgpFDjAnxtxQxnWgAofEo7Xk27vg",
  "key9": "5caKWsGZmnNPGC8F4dRthUeJcQ4gJt4cyxe9CBrhyuNiiXN8H7Y91j8XG79L5BF3LbX6vZQiM46SXWjKUpAC4ti6",
  "key10": "3377LmhFj2bQiCLCBdu42HMHi6DuBdgozJ14emZK6eugEVW2iv2ESmxbgx2akCyGJ57zvD1XZKvPUJoVREgstPhq",
  "key11": "2reJnrAHoPJ28Go1eM9BNT2xqg488Q4antULL53QhQYJmtE4ymLXB2X8jBa9FtVycheRnnd8F4UQE2NC7asaUBKj",
  "key12": "3YewrFcJzPM83c7N45Qj7atzh6sDERv43b7Vtgpg7WxoczKwYH9bEVML3cJ5bmzNue9GtR2nMp4QeDc5d7GkXrW5",
  "key13": "untwweEma8A4yHp5DhU1Wp4VpLduuw9ovjLZ2aKtt9cG4BJthkC3VZJPDLYV7iHc2n1jmu339uhzJ4tGjK7LzMA",
  "key14": "5Kcy1hKMXGbC2P7q2Cz71JUgK9p5PWYkxHGUvVjj2fzNCAxoZn41yW5JEjK58oht3goygihjE5KKbd5uN4vw7ZCe",
  "key15": "2euxfMXMVEHayQksfeV25HS4PM12q3yuFvzxf9dsP6Mi21AouJhLzVWJzH1qVQ9omS82wbMqXaP9jqD1CxCxjJGz",
  "key16": "2WZWHv8vsCE5AesJaMKFJA4GsfCRWrUwcDUwoJf1L9xmGxt4muwP6wsEor6DPEXf8NqXNnsHtg9CN3oEN2s7o1Ar",
  "key17": "qEps3QRxGjrgxQvzaFvAS8SYrxt5JmNqTr5uVHipNoYci2GqLxiMaiDcECFnKcJubjEGCrGf1dqvuYNCLiicBcc",
  "key18": "5kYvXSHfkE4nbreqWngdrKrc3tYMqsUPQqnNL3c3qtwR7Hn7DpPhCdpfejeP5vjF4mvpXEp7dHS8bRamcDonxtC5",
  "key19": "2dSvCc3KXcCey4h3eMSAR9PNGFBknZb4DoyWYD8RVfzf342q4J3CSGp768CvCZ7GALGgrTvCqWQLyu7vVevGseK3",
  "key20": "5XRBUhpi7AMfgHmqHuUTSo6fWgTzS6KB6Rv6iFVwH42oZwTrQQR93hunAaZpY8FnS7fssZyYf4aT4sgK6xLgJtEC",
  "key21": "5Fgyh4ZiTt9H5GRu42y3h7RgfUwTmjM5fNTDoZbNH2Qk2EqJ7HhCJzjH89DnfdFrRAYfLCLe3K3cwKo4kjYhF5g7",
  "key22": "4kmtQripgbpmfUn8thmzFQqqkqtpP7tPE2o1TrLipXUAg35F7eCPKGduwt23jKGW6St5zmf4G3GrKKXFuAvXqdaq",
  "key23": "24xjYGqgNfvqLzP4AzsFtD8Wf155KYbMWS1vt3DXcBtkM6J3JQ9gieK3WeirL3F6ugWydyCuKLZCpCKrmBVgEwLq",
  "key24": "3SHwxNkS578RtqUBDdBsofQy3gnYy8nWvQm7SEffJUwHhZiFacUU7Ze4p4CTx5SGUmmbgnvmYnHwary6b9j14cTe",
  "key25": "4k3MHnn91NwxxCN4cuAmCgruLdXSe3wqvnYbpQxV5jPfNU3aAxyWbk4EGGF45z6ta6d7Ne5QX9ecMPMxLX125T6m",
  "key26": "4WWGqawrhMg9MPjgyWAdYqc4C4G7TBnesFeMmdFvwbXFK82KfKtT2Zm48SZNyLvYvRe86Q7wp4gdFxTJxKQGpc6K",
  "key27": "4Vc896rmtChi32iqwEG5izh6J2KTXVucBbCNnZ8ptqUeAxfRkYpuebtiCM6GJFXvvTs7EP2S73seJtZwXUk8xMDS",
  "key28": "2uVWRmLXBbQbD5L3VAabBJDYCeMiWNs314MG9dKgRHYHLX4ZJvuZi8UeQUMLPTwTPyjTTFX2eU1E7Dx9Pa3s6hRc",
  "key29": "4wSbc2ykzDu5Ug9URJaTUd87DoAyGUDBCtqRvFFCCh8DsQFiGjnFsrVuE29b8gMWUpYuvDkNGQQ3HhiiMiYLgTta",
  "key30": "3sAhx8XRvyb1Xy22HkKXwsidyhqDanbFzyaW1JCAtWiuVxNpKLsdvEDeubYb4WTQCBy9dMG8gjbPy7YZjRAvACLC",
  "key31": "2WpnHnqLWST7XKYBo9Qd33sqSngCTce74VWKhraHh2jcjXs32Z5AobEqYQUMqqyGCpFUrAtPZjuP67UzJwXUDjg4"
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
