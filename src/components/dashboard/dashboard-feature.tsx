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
    "2mNyQBQV4H63ny6MZLdsiBw9DV1HWCjPgCScSRBXURgYS18kMuCwskBnJGmjReuKiXGC6tgzguGHXTMDbd3jijvk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qeE47PS1x1PSoik76TKRef4FjpvrtLYL3SeVoiji7R48so1F74se8HCJ6qsELiVTbmYD4hULEDznyB2K8reXLbz",
  "key1": "4c4cvEf6GZUUx8RKAnG5vq3C6S6X9MTWGRqShLMG8ufxLBjGTUgZtRxFx6AgkyZSmT5TGfKp47KNKZVwwaLKQqPK",
  "key2": "3iGHganEHjvWJFr39phaF9V9giajHCTSGtqVh5Wnxg4ZYL4AfonFnFWrDkYdtYaYgT6od5zt4B3Krw1wABfqgCRj",
  "key3": "663qj2ugX3syEjwLyABxnEDwmbBBtX2MtmCkSTrzZ4BfskcvMUi9VzkfwjJMXoLxR7J72Jizib7RE9r6wdvRXp15",
  "key4": "3JoDcgq6M9zgAS5aaghKrcCgnzUGjga18wZPM1NpyDkUaDJRfrHUG4fZFuWdNctySBZZbM3fsDAsxCR1BETQCM5B",
  "key5": "4ohfKt7SV5SKxWLZdZtT97kZGGitA6HfW2TfeXFDFiMoYZW8zuMQToSSSj3vcqbWpYxFCuJcn7L1ke2e6fLb8YRM",
  "key6": "zgu7ehmAbCGr8aVfwVPM2bfmsrskKdVKM2QeBHHzUV9YwzaiNh9N5J2U7VgjpqAAfxVHcXUMc8bnVQ2ga7YEArP",
  "key7": "3v1z32ZHuyGafxL9WXkaqTm3S5xofJapPDeb1NSMgiZRGmNEg6EZNosfonBfnzwt9vVJq5ui9zkYRsE5qs9sCwGN",
  "key8": "5kqDLbrYH9apZXLbASPwQMZTUVzW8jc6xmyukyUfkjbLWcNgxWk5gdq19FWjEjw5gezg1C1z6fSnF9KcThWsGyu7",
  "key9": "5m98MG7JQgRfm5WeDozah63rdtCX53XuSqiWAVCCGwB8gyp2hFRP6upNm8p5NkzvtrgUixQANfFSbHDGcteSt1ti",
  "key10": "5uALrkHoPX1s7EQmrYtLD15dVcu4mryqVDH3oTvdZg1Vx7T48sctH4q2o6JPvv8NqSfJShTkxgssKkVCjSr1CfYY",
  "key11": "4ibQpKgXgRup6A3FeJeM89T1L1HWhbDNnbonJ8vzvbaSqdFKijALqLWtWuvi2PUP7kbMMUUbYpXkS6wFmf6xoT67",
  "key12": "4uXUXsCNWd8rwdZSJqkybiT3MetjWvUzPsTUSdpToYM2NMwJNR5hKUYcKw7EHfZdD9cZXBPdj25CucmwfS7WRDG2",
  "key13": "4NSkit3FR6S8imHkc8r5inCjFFun2KJk8kQLvKq9XwrGdPgpDDciBnV3NcjEk8rAdVCDLEG5RoTn8VoL2NMojNUj",
  "key14": "3gwSBeYwVFjx6yhYLUt8uSJpKsWc8ZJJAi3Rw7LLoiQrUV9MGyhzBMtDGwAyVDpazoz8AVaMuJy1WEa6orLgDB7v",
  "key15": "2TsYZcSucDAfF4AiQ6sFmMc6T82snuHeH6Sr7UZLkbMHPm4Kz51aS7RHSrdWRkEf22upBETaBZG9ZAXqfZQ6xees",
  "key16": "4Mac3vxUrHSyBcWXRCn99K4yghW3QxV84mNu2Kf5WjpeiNA4w6QF5meRRGqpZR6BvskbBEFKN1kqksM25iBfnirk",
  "key17": "61xT8hEQ99vHmuXdFiCuH1EMttFwMAUFRop76533NjxtcmiQNdS43wASTvC5cqkvosCjZFcsTPDpn5zC2co7R7rL",
  "key18": "3G8ChtBR9H9iWjFjgHFFpUE9nxLwrLYxJLAPmpa5NBV7wd47UjQpcSK2eNy9kJckybefb2ufkM5zR7Ftf8egiSRj",
  "key19": "4VqDVsAMZdkXntruXFLx4gy2u4b19TxrpofMBJkKMSv5ihK76hQvstnQ7QM6LJZd9tXDunhvCEnzvfJG8fCDjXc3",
  "key20": "29Eorc4zSNv9wge4fZ5C5isgA2h5xzusQXbwadoaqSW5Qi4gFJQA6Jy1y8JrUCA4Vk38YUxNWjSg7Tg5r4rLyeZv",
  "key21": "2aT8PaUpCXQBpeDE8qwa16u7GT3CivuWTaKSnc6XeFDcXhDXCetGKJLqEn3kZnoc7TC1Qik9eXyEGBXQoPCZPwVc",
  "key22": "3EjMxotqyVMmBxxTkaZCK3GZNE3R8UB7kMGmtnS4fn9eLcgqYpUbzaczfCkMiogFzG5WVrrX5VZuWWCz6wWAwpAZ",
  "key23": "4oQYvm4fhgEMXasoEXn4Z8qLjbywrfXvXkf8d9avCQ6CAhYQFCuYqjKGL9iM38qYUxCPJBYrgfsCDb6KHMD5iJzj",
  "key24": "4rTt7nLrf7AZcH2CunEQufHwWd2UNS9ziViUBU2Ws7eFJGRm4zF2DoD85Ht2jvboTDPbUuZr8nt4QvSrXbZSmmob",
  "key25": "X8neMCEwuiKyuN11HFL3PQQKqavkw11RKeeijAvMfSihEWtZEWRBP7aufmcoZhRT81rCzRcJ2bpM64My4i3nsuR",
  "key26": "5PmCtvjHxCRA5HDgNqS79VuB2EJGwRp5EmCAbFyRjJ1Mx16vmvanpATbY1SvbHfSRXj3g9Y1b8Ami88vejbYtA7g",
  "key27": "2cdWifitnmCMn4eCCMP6ZAwm9qMk8xhKFMUhcqduZgKTBZ5oeH8ZMgCA57xCc9u2gtdYfBtbH4rfn2wofb3FCd9i",
  "key28": "2Vn3z3A8vv6JsD1va8gaSRgoEWdKLUKEfCifjNJUyePjYvGP2zuGviCDUwt3AsCYHpNfp5xNxShRsoHbdTPWhpn5",
  "key29": "3Ue5cRqc9h7EHwfrnh1pNfd1eddhkvpZTNVoCVG6iHtXsuayvuEGiPz6rYVTReQnKJw8SmqPsE1FEBTs9MPDRT3C",
  "key30": "3GZUk36q3uUbyYwQXJYcydgCBFeQ3DohrfLLY1EY9S3WsyZx1oBAbK2gEcxGSnJWR7RKfNeKRBMP9WnqcKp1ttCJ",
  "key31": "4yBGvr7w1nRVT3STBtHadHa4f3ZmLoKUyrivKJ1J1ZXrA4jvYgDv1QrTYbtZk7MkKUFgADf8ALPYXAjpZpwbsAR3",
  "key32": "2hruTSNh2aJND5vBTqikQRQbgow3qJwrjXG4EG8DhLpAtAVidbTfT67HH2pvrgQbHM5ChKf3kLWYygZ1gHJM78Rs"
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
