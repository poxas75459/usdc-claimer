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
    "2ohmD7Fzr3wyCjcNCKYLAhaVRpJoeN5MtY4aw4SztmJYviT2WY58wC2k3L9fsi5RFGFptmtcvUUdcBz8MqrKvcK4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UzAENMJw4Ebdz3L563fqD4JPL1wBbfYoo97yuj3SsDSG7GMgxMXSu4oFJucbTX22m23HKAPvL9gBXaoDA6n2pgL",
  "key1": "41r69NKJJntsmrFxXTcEe7fUMQNBQhtoqiwnUQ7ebLR66GTorGJ3uvggLQcnAWiUS5bpqaGAmTNb1LV1k42RtjLF",
  "key2": "5xKVxea9aXpWoMfttB6bis4ggWcFtsrtV9Ypti6xPgK4usnAM3NrqWZP1ayVoCv67gSbnX7KD5GMWViujJqCNTFQ",
  "key3": "2nEXuJsFW7mBsaCYcxDQyWoPcUYgny3AVA89zGE3sFRUnX8kC5oHh9HKtuWbC2gpeci6YAJceknsEe4Vk8srZqVP",
  "key4": "fkNprZEybXBEmCijfCQfEn8PVJfVJ6YmW72UmVq2fomaWSm9n9EzbhAjX5N8MuPrs91WAU8fbAqWRMW1f4X7RVW",
  "key5": "DrifsKJKCWD4HnbUdTUhyszJKbz72bLgWA61HydTRRqLw3eWRwEnSCqRjkn9PdQui9b8MMPHQDQthxA9yaqYkoq",
  "key6": "2LEpEh4uTY1Ha4UE8QRag92V7SEd5SGJgZZGsxBNXmGW9PzWzjWYNg3uAwWedMChWkxzFdMMe3qer4Tqu3m7JnVc",
  "key7": "5saon5AjQK3Y15hSgTGFvcc3wuhqirbP6cBuneQecK3Wk1NBFvuNarijwTdZgoiygtX92japJaPQEoo7hZnXxGjg",
  "key8": "5cjPK7xnDaJ3b1cKq9uApgsy3bCs6FpJWJQcUmm1AAnKpqjnL3w1nEYCT5cA4RJHKYM5cyNKBBvYJDCkik3MaF8r",
  "key9": "449WyFoLbqAHiTmJUzTceujY1TNhVzpn6K37m9AR96WfJ4oWUmzqvtBCJBNL2Ppo2fjxthq5prECxbkxauooKXyH",
  "key10": "4sPWQWKjU9VkrD7DMBnaxXJyczUidX331bVgVRt9PLA49mCtn5izQituPiDiAKwmDk1BCWdmw8TasRUyZwLsWTb9",
  "key11": "36FWoohdtf6cT5jZ6c6xGz3i2wRXWcyPCbdeitgrvqtH3JqWGVxHLBYF565sSZ7VHXU7DNvkaDVKv3HdLHaJpN9q",
  "key12": "4MZVn77WajTnuhXDPrz2A4adawyzJcHmzdptCcRABkEu8AJKaeSyfcU3kjPW2r7HoocW3XeV6p6jNeFNNossYYQy",
  "key13": "4AHfG1yqwbadah93p1Rcx2KHGko1r9z4oiXyWN3pUfPgNycAVSh3U9QuUYW1kB4vdryDvsP8WztyXYGJgmAuNJac",
  "key14": "3Jpu51Et6yVxQHJkabwfN97sC61sBNxaNPniyRTFGJAfPHsoLQPibYAgzdfyRFzQ3N75LRVh7V6LsFnmzCXcF7jq",
  "key15": "5Pp1veX1CAu1Gg3V4yCep93iKSsQVjSB4CJ5MqZP9bBGVAtJGVfc1vmRUXWFMQtpFfgUva1zTrofH9NdqcDPC91Q",
  "key16": "4vsdTy3uUYdQudFeYFxDDrfnnCamxFKi32FWCbtUEzB9ZDqRQcFr5jtc8yHmASqXBYoqmNzRBHkLxnhiBNjYywmA",
  "key17": "B5LAUJabSSVsfKqe6YACm8P5ZN9DiwRhSNDC6jobhUaAmu2qd2M4HuxzJHaL74dYpiKXChVUkra6KdQNqU1Auvo",
  "key18": "3H7PUx7QLNW2b2AegZGXCivaV9v5GfeHxzvFewG9Q3Aj6r5dSLVjZKwsGnhFGghHEH3FF6cFausMjN8pCAkYuAvP",
  "key19": "2QvS9Ni8Ak2XZtXmA7n3kWLEse1wA8NWmaHKsVawuo31r8sWTTKDpwsP3sXTnfvEo5WwnDShD4qde14cM5dPWAZD",
  "key20": "3TDSkP19SaJrHjK9McXzUbxuuPpViaayzMdCgfMAGVtR5b6VXZSgK4ijGBf26Fm49uikoGAoeysb1RvA3viLdcC7",
  "key21": "HoRBKPmbeXhJd8fajeUs2EmVMhkbm5Nhnay3Q4L5DTHX13Wwjgio9VUHNePgUNWjWAjuHJeuaRxmkP3FXpcm1cC",
  "key22": "2vqzHxesQhDPqQmGhPBY9Cx1VxKj5V6PJxWMJBjQXgvRx63d5ytDXhqUiFJi2FmXKxPWbSQX1NnNUADrQBGyccHq",
  "key23": "5HmpqTosf1HVY6C9crNdDzC48eBDvLoejuduXho6ms1GA5NKU81QTTFwpeAT8Fq97VBijy2vZDhZ7rnpnwiX2zEW",
  "key24": "2LNtg4JVH4MnTh9kwX6gxVXnwreoZbAMkj2DYuqB2rEXScGDhDToFAXA18cTBkTLHoe9S7Xu182VfWE2dvqDnz1o",
  "key25": "irrNZAEPThQa831W4rGmggvZQCehhSEotxYCfDSidyn3in8hhVJDSLvzfRf8WQF5gJ9pc86BEi5RBcbVzBzsSRW",
  "key26": "28Npk2PhsauNkR6mAsZqE6fzNHW3nF1hFgJAYxeN34t75aKaNaH4KWj7TgAnUWNcsEPHWMze3Tbqw7f5m5f1LT59",
  "key27": "2vH8NUaYgPVMdHXz8yEw9ZdhtTNra7CTjmMqgeVEeKL2rV9ZymR1juiprkso5kggnbU46BwmDtSkjNKGg7PNBTC9",
  "key28": "2qv9rfkbnmpyzZ3VroDdGntBRgVYZWK3mpc5cre3pYqrThnMKGxBjLJxC9ai9m75wWvQ4g5z25mxTrmrVLisvFTh",
  "key29": "2Jwpg3NJNY7RcWaYA4W6Fg44eYfUfvdypZmEFam2fN5oa563N97nzrsgygEvJkPCHZ1xJEXMcFqVRC4wEyiVHXvQ",
  "key30": "3CbDwDZYEMJTRzRp5HqGMy9gtCUP17KKrJUar1PLgqnRUD64Nago4F4CiLDBU72iUjXoSJB7sKarpkHKBH2vZguh",
  "key31": "Nh5iQzE8VtKCbuN5xvtB959oUMc9FE52xNt7RcPgEFT7U1oPn5n9e11DRGFCXT49emxQ31mA22c6KF579uzhbuX",
  "key32": "4TYgUyo4j7ssEZoPjTDcHVwR7XeV7jMNTARRdCCiKHcA969FmeHFRtAkCPaQVhC2YTJC8ihLFPjVjFWWznqBBnY9",
  "key33": "2Kwr8QFU7h4LPveFbeDc9jW1LEZ6WqRhqUw3ei4c9wYpzahcdkf6EPoooKtJyn3ReB2Mau3S5rwKZ1MJ1uhSwNgU"
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
