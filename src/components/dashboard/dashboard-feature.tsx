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
    "2BzTLxqGndDNWrxrymMJh5o8SCk9U6ZsYAAKXTVQEsPP2VpzffvpinwHjVEWQg74bBbyQe3WaYua7UJq64bHEVT4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5poncVRjaCXGmfq8TtjmcDka5jyQnFZAMPGqMfL98diTi5nxW5UzrZsVtoE6BCGvAHR2YYGsNCFMkAuEYfesBwSn",
  "key1": "5sWwCSKtAQeqXWtgkzq2FwpDyqJKKwxGJnAaiAhGbQQKRRm1YfBChMnXEcYTF19nn5kMjEVwgG671xs6DV5dKcfG",
  "key2": "3USV42CzYzGT3485HnQkTQTYRo1etrJgeBRCewMfCFswEcTWvfAMs5JCzvd5pu8L53us7T64d31Zy1pHim7Sdh6S",
  "key3": "3i2iJZkjxdid4uU4Yeim3m9zrSmp5SoSQijW9sNCQnWDFkYsH7fdaFqeLWtqRGqLYL4tYLyWJNhBpHLWG6K9cS3M",
  "key4": "3rq1NBf2ix96sbhq5JuXtnas1wjX7KQScautR3KTGxghybYTDNo1Nxk7jruMRVRDSL3VZHW1XRNzqQUU4BuM2LMd",
  "key5": "4XPNirku8KjaN1p9uWG4mLTj9oyvAtQNZDqCo9rDdCirBnitekK9U89r7hdKCwAckhfUqsCcZoVYmuBgjUmaipEb",
  "key6": "2HfcnT4BFFsTWpkTgS2W7rBSVqsXTpitZhqHXA5QDzNk63hJRj6oT3APfYM7dKrpYMAfhWg9WLQg4ENUUKGsKpm5",
  "key7": "RPgqSKUGhH5GLj2oGueBkUPwW8aYKrpisDX958ax6MwqG5Nc16ejBPr3KfXtdpRqpzBcsyY54Af8AbwCA1wnNZB",
  "key8": "44GdiFiZS7RQjCbU7tAXuvPAZtA4NzPP2Wpoam6QWoF1HnJo6GCT3x9RnBgCGjUPmEhwGQbizoF6iEQzGUFZE1Fx",
  "key9": "5yJ5NN4pp8MnsWMAcgSMwDXLYWsaL3jcFeNYwNnPPmsbgU77ERNtoZ6BMT8vkEbnDaDaHGu57SnxVwfWzkB7BwfS",
  "key10": "5ecM36EmS8jH9gDMeZvVCxFtnmubgbiskofruFmNg6bH4Ffgiee4NoPdiEcvEiTaCSEkrGyQCNvWyNAVFiAoaibk",
  "key11": "4AsmHmgefZ88dL1XRh4zsQZSC1atnzUL9kjk4dZsqGbUtvA6pZ9GYSHaS9V58Q3UM3pTgivSbqQQhqSWYYaAUHoL",
  "key12": "44UbnrD7Rb7EbwMPV89844tM5Ztg9AjDqzK9Ws4Eu6EiS4RTAoU3ZVwcYcAioSDzQ7G1GUy28nShRmPTr1rEZbBa",
  "key13": "xRUYFkxDVsVDHYKdyaEeNX7rmaM6gTzHfosqZ9WJhsnar4CTgNwfziy8skE1nV41L1LGd9dTSPUawymGkaX533E",
  "key14": "2QvKkDYJLkVGfLvGBb3H3iaD9F2dPJ6SYKsjqsZiG2LNNpNB2kSPzFG7CUKneKBRYCETereW4f8tfbo1Gajmy5vy",
  "key15": "R24Ur8oiJBzm9y99cwAVYcVfQz6qCK199CydwxVQYK7bDbtdApEw3c68ZujBUrBwwgq9XAMN3WCBvfQsDD2nBBZ",
  "key16": "2NJmuT5edrLzTmGDvJtWttkPfZY2GZcNyrjb1yk9UchXApx7JcH5PppSGAU2nFcXBriGUiT2fW5Xg1g5efcwp6NK",
  "key17": "4G6xAYEVUfPpzhvsXyzGPaCzZN3DzU3G6ZoD62RGxvie2jkW71uCdpgZ6pkNeNVWN7dEbuxDqEDQHSdzyApFudUg",
  "key18": "4jsWWSR6EQxefd6y6U1fyZihT1Xrt8Ln3ECcXwdtznu9uw3mRbzSrZM4Xd6XsXj15FH4dT1YY8oVdyJRs89Q2c2V",
  "key19": "2aQFeN7orSquRp8oaPqd1Q9HzksX2ndLq8vAT4T81rADHrdVqU4ipU1y51omRUX1CKwfhasaK1gYGT8AVZh9fwVF",
  "key20": "Ht4kL1z4NzQTzd5CPksJRhqqfdcVBbHjZPj7HfSYesiaaY4RzA7bKN8t2vyCai8pn3RWegZRD4h4nZGpW1ZrNCA",
  "key21": "38tHoTZWDJ3zegjpka7FK1BfUxGhbvxhQeQWjMvkoiKh7E6Yrov3NLrsEzdQeoRhPGyyuDjYnL3pAp2W59JctsoD",
  "key22": "53gBu9iR5X2YTNAmyug6GsrZmRPhhbWKsukLNyLkbqad1yn2VaHtUmogCvSW3Lag72rRg7zKQj5kqaCv5uVmPcT3",
  "key23": "2njQeACo8p7anbVuPNXKuf3WzPjYQuZPj8adgtBpDvpDGUzpUWgUToL4QRLdBxGotBEbk4UnoNU1LmxCpzZ3RTh5",
  "key24": "QygXXeb9DyPQYzjccpG7Tuhb4zxZUib5bwfCUKZeDr3HnjYX5kUyAdopuZ8NFqv255eDqqBNVKqGnNdyKmbRXqK",
  "key25": "2f93hsGUn2JtE9w8fPGUTBSWL2VbVtdG8iQ9yfzSrF9Ei44gJ9cNB6WPHZnMCE33Wj8AFLAGEUsjo9kS8ndZApdt",
  "key26": "eUZaGzEjiD6pkFcMRLciSmT8NBj8aY3y3yFVhsqmUUJgyyRpqRiA4zHK3DJvReF9egoM2fuHd2UzC4ENpfpF4bg",
  "key27": "2aNeN8YUSTGo3so5VA8SMXexyisggaVjiaGmYb4mMDNZWy5gu8cvV9RTZXB4dXHie1S1MNV7A5GLhqAnEMzgAYrf",
  "key28": "3uwqRq1JTAxNevZuF9PbjckY58w4dYgvwNLrVMEpnn3iTWnXJfH1NPzyC6AumMUqa4exqXC9QNJ9PG7zyVfgqJFX",
  "key29": "2iZc2eUSK2BaL7fcNDcSdmEKgGWTTbhcECzSuK9ALKCpiJzeea8XFMbDvrQc3CPQAPManXmPV58DcCp2MtsXR6Ge",
  "key30": "vbF7vXdy9urj6VvzV7JAomgT55CdcwGSvih4zwwLJvpaCf9z5TGxjjNVjXgwy1tiTmEw6oqRQhNBUQSPwieDASq",
  "key31": "5M4RHzHHGWu2HmDwkztHnWT3dFQYKWHF9MmdiQGaVoyS9fNtQYdBFRchpU8EyX8wRBQkQYQeSFvvEZ2KVy8rrVmQ",
  "key32": "3SL6yCw5cf5RCQRByJ8z1Uez1E4CF8vwRpy77NNhRQqM9QQUYMBb6ssLPSC5FjoGBAMfgavx3HULzcHLB4hJRD7t",
  "key33": "4ahQWecq36Ve93AsLrgQJCiiEWxDNaZSKUYUHo15RcuZhLk8CzGLkuvTxH8mYjvTMAvZ1jiYcRoBKhGknG2BAzCw"
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
