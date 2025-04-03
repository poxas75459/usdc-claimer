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
    "5DdRu6THETGcNhEyfMokNZdrSYy91L3UHtcPdnXL8F2VNyyMMfcTqgSYAW9AGPKR7qQksEq94Jqn7mtRcm1wcyCf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aydQXMrRsTymXky5NASYgU424GgYugxKYm31EVGp2dzmJx4j6HTiY6YkfBHyMTZd9jiv7LSHWEhimtbwwyY2UfT",
  "key1": "3ofQb13ARNbLbpHnwWEZovcV9afQuCeR8q7wNPAq54Cc92cYrSZcgnnWtKbb6cJrpNu4CMBuMVPUkmG5UaUducjj",
  "key2": "qYS1APNYbApF4eKT5E8er5yfX7D6QBZWGN5kEoC7VCiBbPv5dNvtHTkJTPtYfiXtq7QVk6vuNXE82GfNHtZhyzJ",
  "key3": "2mV69CbXt542AMgAf8TEgGS4auDkwUiUb6JkdLJ8iyrC9vFLovBur2LcLgKNT2n7J1oWpJ6aKHZYxuPmKP8ZQkLa",
  "key4": "5M5DepwGr6Z8QK1LTJpEBbaRTetA3chjFVpBoFtUF1sJUrqyGK7iPUwY6GA6mSQnoLzTbeq736pdJeP7kZ1eMRm9",
  "key5": "3rzCHYZVBwSwZyx2JLSjKcCxNZKvR35tLNBtCgKonbN8vtReVzbkfcHfNrhvxsTqAeKk9LyNXzbcwm7gCrEY3ofc",
  "key6": "2QzrdNCf25vZjXHCeahNxMQGVFsnPdNxEfmwAGB2Qfoy2FNKUHLfPgnoEoakkbV56r5h9FQNwAr8Ko3irK7GHWtt",
  "key7": "2mNTbRdg3YeR5kGBCUiUiWdypfKyJcJiRWgYFLaH3ffzXU5nyUUPekrjT2ELhpTtZezwrrCMKEKDCkrsszWkH2EX",
  "key8": "3nCV6Ct615MFeZnTvx99vBnqcaLQZsWuguQqQesVWbr63UqBb7QJb1KGc2wqvRxJyCrgxkTZxAymiMusbdK9VMre",
  "key9": "5Bozb6X3zvQaY6CQ3UjEtHuzo5hT5uyAd8YfpGckt6gtZkrPBgCEVmRJ1SVawvmmnAS1MBLasbLv6Ru5w12vANQ8",
  "key10": "nuwpdCyBCQ2QvWBuDmJFNeX1N2Vp8uc6nieD6CpmtWaa4H4z5qmTUAT6hXpDTWMzWXYnnWp99p1s86WD1DNFAPm",
  "key11": "3uKMhUWgM2j3yoMquH6ADJF3M86oMTAmA9YTnz3M26zCBfgS49PBZZpWHY6THHzzpCCvWXs3LTnrUtgVwTjKPoHS",
  "key12": "473JDbgUYsMV8MqufX11uM1PbruvoQ7Y8NDED6BNzDHWz35EwXgCqfz3hBCEPYcJogYoAgXDUe1BW47zGyLPDmwf",
  "key13": "8JSbrhwvvbZ9cY5ADnX5eu5etRLd9HQSZYPUHeWHLxWbi8KLnXGDy53PK2QJ35Tf8buTroL3SLhxURsXurEZ4Ec",
  "key14": "3TzwMwExYS5FnWdahHqPxAKJ3ENE9oG3pNqvg4nk15xrQBEafuYeJs7BwK1SFrUPMgKdG6XtZsJUUJHxaBexiNtv",
  "key15": "vtKLPUwdcKBWDdo3dTMdeurMgC239aAPaspS4TL3PE73gxMcgMvJo976tRi8DdC2Uio8A1pJwCcyqJ5afMyyAwz",
  "key16": "2jPGo3jZmKRbRGUgqzKbaiZPueNDcQDSHXnJEACQegYjfvxkEhgsZDN4MAEyvxrq2nXHBgvG9m9S8n6t86rMSYiJ",
  "key17": "5CzqCXgEEAMycxJw5f3B4diBP4iYuqzPSqNbeD5bVhsi9j4wmNDoCSEUseV1haxwbt5peMfh3oomnUFJB5YhG828",
  "key18": "3crXEiARj5TpX5BWkRhPmNXSfwpzcQG7tkyDSKfrBRQojWLdu8vojun51HEpkpQi5oS6MEXvKkSjcMV6NV9Uf9oM",
  "key19": "BYfRVwHY9r42kRbqf1XF8c2wDxNcjAiNLyrYzM4sida9Aa9djdPzCHLNDUo8c5XSSBNd3g7w3bn8ow5RweSM1Dp",
  "key20": "48o9V7UQByw1oVU1cbzZmRjdGcJ8vJGVP8SivWsGXNhwwKvSRBCnq85DqQo4y5Pb6Ehk4vVbCsLVXKTKgTox3qEq",
  "key21": "5BZ45sPN6ush2NpDi877V18ybw2aLTAu5rFzCHkjFrcnc978Wfm8LfaF3E4LpQn7ciUXWg3zvRFPG5FwZ67dWSuP",
  "key22": "63rK9Zrj2iTskS8riu6eAxwyMniipZTBcqbWHD5R2AzMMAjUW1c4W6enge6nNn2sjGLLVnAFS9JCAaf3EVJkJ5ne",
  "key23": "3LdXRGG7iJyUbGm4wGbbRnwSdqDnPgs8xacvPnh2a5vgoYDfqFemZA1KEf37PxVEZFMz1nnrpvj6P9Hnq7DVGntD",
  "key24": "49fxiyRzMUKFT9vxBb8uDEKJF6D2Bo5j9k1ER5Hm9EUCewGDUtTWyz4zCHy8HksyJr6fYHB4GebJpvvtn57qdbPy",
  "key25": "4qVhQVwRPNSUZoubuiaX2DyNWkcB2zGM5XfjMF4grhbQmRpyZ2M2hsvAAMWLTZrLwCiHNne3qzjDn7Ae8QWJqNqL",
  "key26": "2yDPc9d3dEEMkrFZLtVvzsMGCrWbNAQ3L9pKJQxaKBHj13zaawzdKbkwheh6RyEGKsdSoNgMVYaJbB8BWTULE1JJ",
  "key27": "zLmbr8Uk81kNGR9qYX7sTrT8aanNy5RTXUtp7miLYNk8Lw8eich6kTFyd1bDzqFBiaEap2BhzqCGCBdnotc5oED",
  "key28": "4yk7UkjvhKXvBfKGvGDmRo4XTj9TJyJq7WPvgTmC85YU3n1Y64Q3V8nsEvygtyfcqULLKQgtQVNpu5hVaEutKQM1",
  "key29": "2gSW3uUqBo5ebnW263D78c6meNfnaeFTWuWwxymQJstyYJjMaUey6CPXDEfBfGECkB4hpJKNXusLnqqtLp6YmPy",
  "key30": "59v4LtMNUuZan2q1zaKRh59GRVxFZ2XvQhb3bawQJKQi4EdNBvrid9MpWkBgWL2kNyF2ssVojFTsFwAHbHGPx6m5",
  "key31": "2KmDMfr136wKD8Bhz1F9D3ZrA1wYAG8z7QAzyAKap67R6GdkEbTrcpTWWGSmECLC9PgHDb1dycAhzyHidoGFUuF6",
  "key32": "4hAHboSmokBn2DvrUM2t2efxA5G2W7mpxaFB7jgNAcVv6uTGXamRh8eUKvko9dPbP4gghtM8xU9gfgDPEAACvF4N",
  "key33": "29Ypi9z3xuJgFDm9jG26Z6kKrEds5RxuvPuANanTMyxRWiBfdFKLJ7ji9QrkAXQnMMHF3ho5BsbzjSaMc2PaXjQX",
  "key34": "3URk9Xo1YjRtuHoYvSQ9bwQSgDF6mZoe9zTURao1ZEN8ALBw3CCsg49RiXxkAkQ4KSQYeJWjXGWSvDZiXxjRRHFj",
  "key35": "2tWyzLAk3NwnyZ5VKbZFwtgMjqXQXsXpS93aHMzGK9phVCjKyoK4si7KQsT9T7X2EZmyRZWmVhPE3gVpVRByiLFy",
  "key36": "3YU5kd1GNjiheC4re7u94VfUXAHdAhfTy8m6qzCwRFmi6aKVWX5uAUnAnm4ytBVuw1cUz82uprbHcVkS7SB9vMY",
  "key37": "36eVLuMHgvAP2kQeSpRLpAA6GwodEGc7bZs64JXNoDjo7afk8gj9XwRusRpKg7iewFzJDHcNHHaou7cLEffbAPDH",
  "key38": "2pwDtrFnfJTRS8NQ9gsREGxejsk63x6VJ71nELDjG9Squ7Qqf9dTeyabeCqHpvBrbCLRR8vkV2G2XnXZzL6zKofL",
  "key39": "5LRhksGvfJhWL4ZgGRiKJUDMazphun4nXzssN3nvFnrHQ891qpArt1Ew26h1imUtFKbB3vJxLfTCUCotrVPpwfnX"
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
