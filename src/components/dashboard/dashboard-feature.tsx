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
    "5Yjoybz95xAN4KkAqLGE82kS2KNjMtWj1FK7CBZeSsmyZ9V84qpSZycjoQXp8cmipf9u1rqARvEYHkx3ZY6x6PCF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RNpQZsRUxDBmoqVe1jK8yUfgV6ASVHhaEaCe1ptwDwxxFDxf2LYyQYWni9mjTjtxLsZCMywKCAT3TDt6J8emK4a",
  "key1": "5t19aFnnNj74QR6E9NW5e3uu7yQZCdeRHpoxGFwnsMkXQmZ75LnmRwiyRMupwLLPc2iqggW8Y5Kb2QWSUuoxRz8M",
  "key2": "4FDJSiVgjU6NQFk8pK6mwhXbhopM11D4isSQu3JkaTYYimP5Kagby4BdQBdkxgetogbTUFTMsxhJY6R28hdVdccr",
  "key3": "VA3CYPgUJmyL8Tb4C4X2EjJsk6A3UXzCYdFtb7RMKFFugfi7eXkyFLg4Xdo5rVFTadz9mQBaRC3jZLBQYkjdHMK",
  "key4": "YdcULpu3J1shLRv9J3QfbpvqzCsm73hbwCQ41JVh3H4GBJbNyCUybRBZhC64y6q3xpemDveospDXCm9BiWoeYUK",
  "key5": "4pfPNgwUaGAQFDHnwUrTAMKhoQLwPn6VD71JwY7dceG3Y5kDa7vB6UR21edqcWPdmcBPqHFqLzuneMynF1kaMCvs",
  "key6": "2rMncfWyX9wFpagJ5jZg9THa3QpfrStE9xUyRWBG5Bs7E9SP2AL6FUMEMwhEugEBpnjNhnnFdQfFQWLtyJA98KzU",
  "key7": "3pbq5qsKmP1RGwGZ8Z95JNqiQzFxkUgtcZH1vetvqvfvbf9bxCUUFbCHcyBJyJfv4EymLyVfHC6T4vDjARCzYexA",
  "key8": "2jLiekoq9DJyVxvgV9xfkSPi2QwDBDG4nnjWCFDTTbdeEna5bsK5M3yd8e7XtBP1JxWSR8Qp8h7Zmk1sGnVSNa66",
  "key9": "5vLuxNLkwngw3Z2sxUe3WxktffDMNoo8P5GLMTcp9yzM5L8WoAkijM5kuHhKV4eunDf5xSaKJy48aNJ7ZGNussGX",
  "key10": "4wGXnYvvX8T2SjMsJQ16hQ8cuRbTRk2hoHGL8kXLfm8PnLVznmiogbg9L8MjyaBEvk7ADLjAuKRsLksSc4HFRfL7",
  "key11": "61PzUGuoZXhcoszuHpFGYrtBMSeN8hjYxA3vhQdG398Nop6i1vetkAnAoCn9gz4xGEeGCofaoLXQWPQtbtD1msf2",
  "key12": "2Ux6v7TJ99LgMCGjb6E3A6NhNApQ8S4Nu3AqKrmSNqSHEy6uporDHZjbj8esS963S4ZEy5do92GMFJzCDbAWzYpK",
  "key13": "3i89hVtZwKMNhgyLXYSpKe5au8VYW4sMSAK6YsbczmtZiVWg89GPV2XKHqRNCqfKjko5eJuEKKRzaFMfYcZXE2Nv",
  "key14": "47iUaZKx6xavp5SJuZNFB3HAMg34euTJqNbZisohs39nU4Xyf1Ad6HyJf6nrQq4EGv397zTLJA4NopSR7iLF1zWZ",
  "key15": "57yfkarfPh8WVrD1HUJFBz1SH1c6J5dcQB5xzt6J7jwPjdHpPbfEGdzfc7dqSgWN8yZVXWUXawrjcP125fpJm48t",
  "key16": "2APrQv1Yz9rLb3cDwDvGzWPn6uanRRESPDYKm1Kpwx47VoiFW9X7JQyMzTZnMpCfHj9ZCtvJhfc5vttQxRqztAqi",
  "key17": "2Lzuh1C2M5XTBqrWHDoTUjUv6kk4PDWwKPctNdrxkekcdr2C2W4tn81Dit2eSX8N7vVttfdG3Kwct3F1mWvZ6MjX",
  "key18": "5xMmeFV9QLR7h2DRoQymQUeZKC7JrYaZ5CkfW9ykHjY3RxreQyoCfARiLbsCvjKfdpu3t2Wx6Jjd2kGavVmmeCr",
  "key19": "5S7xjq4EU2bs7JCXr17UYYVy36f3aVSysg9V1yWhMThgSsDL4VkrnAfTePRWXis1bXakUQ4t9F8MAYo251U1zPvT",
  "key20": "A1wyESBRDr1ALuremkMZT8jjXvieZdpwgrgm7FudNeVC7ZbgzxbccHaWyoE9wweK7qsD8L6jWAXNQz71GiVNVtA",
  "key21": "4JidHhMMwqrDuuY6ZM1LWvuGkY8oWG4R64vvBnTPxXXTSm6AcC8q6pRca4exBXGPvx7q4tVcPx1gDMPevEBBkdiE",
  "key22": "3puM2Zo9eHNe18Gf93DQEQA3yiPu7zKZuGymKLBRhW3t3yHYAh8vuJ9mG4Fff2KaRV4KNWvdcpVNWTBqPziDxiDU",
  "key23": "3FJ6RJw4C5qpPikqUegqH5MjYGJWNwmjgVFPM2ZpGJQGw7TcgS391p9avFu9B2enF2Zd6x7vjyWwmS47C35HausL",
  "key24": "3EqmcCdTEu6NUu3SbiZFWCEXv1dDRgh1gZkjaJbi7cQjgAZsoB1kz8HjuoPP9d9jHer6rDqbuZZe54zqS9kxzxSo",
  "key25": "5uxgNuXiQtE1CDDPKfN2s1B6Pv5gZgu3q6NXcFXkjwv3FUQGZR8to1i55582E7QPYP8MuQSDNRnnetATYNbwFVGk",
  "key26": "5s1WCe2NKJex8x83a6WLGT8NnJxcirqfLnJAuVsQFTqQnyzqrPGD4i8xTADp3wU6oTFKJdgcDntYFAyT4vfdssH",
  "key27": "3uxoWNSdjFYZofbX3oAYb9n9SipkQNzAqgYULgCYJmTzXcdxdqpUSuFQEX693Lv7M8cM8wzBu5qhorhyFHKR7f3E"
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
