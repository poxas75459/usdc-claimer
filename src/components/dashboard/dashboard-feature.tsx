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
    "2McfhHrpre9cdKemXr3JLwUpw89TdDdUUSD7KMV6dKAR9nX7gUyYf4FumsAzcomc8XEnRoT4h8R3acXhrdmwZVMs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pDB6RUdutoJ81zHB6BvaQNfQ2ApsnkdqhFpYj5rdsFmpAKjPNw5QhW23UypAggSeTUb9Eu7F23RQY24XozYa56F",
  "key1": "5znxsDMBfTJrh6dFqXRb8orAXBiWTMiwqYKTW7QJDngxwpc2LxSdJ7EYJZnzy7KLwFjegB9W5iN8Drb3kLt3apnB",
  "key2": "3sNpW7ss24TD6Si4baLbkQ96ajG9MpHE3GCYjv4cxBnHCW7PgxE5E6r7ifqUP3VheuWiLiy4TXiTJCcupDfhrSv",
  "key3": "V8i5U2k9VXAM1v9rXDUjerjqVUguKjoqeXWr2LsiNgRAfWe9v3gKa7uqo3TQXPHuKExxGTUZETr27n2qxKNSFfq",
  "key4": "5WkyY3RX7ZAkzWDdUGdnT76fZTSbUnssJtmno2JYkrXmNfYp2o2n4QUbY83zSu9NYEw1766AGtJvPq8NY9WsE6Vf",
  "key5": "inS2U7WFdK69pkNznM7siJbSGiuqktWpQY7wVkvATkoErDL8jZgzJWx8NjqrnfWy4shZn7uMXZeuMNjWei67t5d",
  "key6": "4qYVF6x3geHqtG3zwePoB1n9e5XU1CsRyCpvwxR1eFwTtufZHH7aPkpoyhBU3hDdz2wAutVdauvt36zFBnayyDn6",
  "key7": "4bU4C5cHYDLpp1xBZLsKLkPPuuhxEKyBKc2KY18hwA8ucQFtFzm7nR4Jn21xDv5ZC144J41HeMmUbyu5QH7zDxou",
  "key8": "3dgAYFwT2WqvVxeh7usGZXddGpjv4eAh5QWxeX5da1Urv1kUCFWry7pedyxLQrLx113VyKu3WWM5QU4Axp7cbXdX",
  "key9": "3aGYvkCRQ27vNz57PwvUEhkdkHigEdvvHc1PJxvXTsXnJrggm6ZVBFWCsVkCz6VaSAn1hbMWw2vqb2pGT2gTLbKD",
  "key10": "2BseWZjZzcHXpGjCk7s1kBNEqg9bHcZCXZYrZbeyTyPA3mmw9n8aioFTvg94tFqrRRoQ6QzkoGVoxos7KNQaZmEi",
  "key11": "ADuvYRSQ4u7DL35EwZmpLBNL8uhhrbBFrhZqyioAsQEsHKnhD9f4nVkgVF9eCAKAK3LCD9HomUshnKxk3j1BKkX",
  "key12": "61sCZ9ybqtU34ufntxsEYDZ61zYvns8eQfvg8hepuDqxnb6a43KHZUJwFGo15bHTRPfEBgnhTZtiPKdk9FrUVPQu",
  "key13": "43JLwbZLULwA9ZG2HMxeDmQ5DVtwM9QhpxD9YgREs1JLpPsKuFB8EqU53NBRBKcXFcdgzbB7iV5eZrmhy8HUJJoW",
  "key14": "4qfCQn4mic2XSGiBcfKHTfDcDt1Y1mbJBxZxzn8JWwKCWuGFvWZTS3aVLzYEjxmaUj2JAAcrcPiwXnnNDorZKhqd",
  "key15": "3nfhcFwU6WLvjUiFoUxVTD6ojA8eHBmXgAKJf2J1NRHByYtgHxgoNrQ9uTu6CDeqSKui36VgLHjtEERmN3tEUGXk",
  "key16": "6c8inDubTsCf7sy6GeX6UBZEeQbgL9noFwHFq9JmyYxkg6ViQqdoANw4W5nV5EmeGPU3JsVGMctAFQA7E4mho9c",
  "key17": "2nTB8NvmdyjGDwkGV2xkgb7Su9wU1okvqDka5ho8KYamymXNdvCZ6daX6pA65K5Eagh13VYMb5W23mtsvu9KKtVn",
  "key18": "41xFx7Se3YAZgjLJRfEGMT2vojbNTeciBzN1wdMSsvqDE2KGZ998sGT16QYpAGikEzpq3c5poYFiDwzXuL92vwxh",
  "key19": "7zuW59gNMdgEEpVd1V7yaReg39q7xFPXEMBP97fJRzETEhWBnahgRfEfNMYGMt8khu5fRL5CcHYwyFzG4hnDt3t",
  "key20": "3k5oirUATU7eGcsVrzcTwF7GMRGAaEnrLZ3zi4z8R6bkRvFHwAPp84ZaUBrduX1Js4YKegf7bZkNmU2cRvXxRyQA",
  "key21": "2NTYqGiBMCjQ51PYDB7qwo434J75saFZXgCQVNXSsuVU9ed2ej2dLc3epBudvjfoLGfGdEshyZThTmstV14UcfGE",
  "key22": "5wKtfX9p63GmBT4kPtoK7x7izCh9A4DHYkTC4Rueanp5D8pyRp3ym87KBBhKRhStN7R5Qe5sgKYpnqkQ2T9n7ec1",
  "key23": "3utfrz9Rgwe2f3EaGAynjKn2CegvFiWwneTZR1S8pavvLvmuFMe1DyPRYAuxdbpyRJbgdjFZwyJYPfED3HLMZWgk",
  "key24": "5GpukDDGXoBHUwzDrxp824ZJGyQkC8iqFHoyd42WivdApvZswunFYHoyQ9K4DSbZvtSrBE6H45YEvVPbwPtxrvRB",
  "key25": "4mWUcvpXatgDCjfzhkh1R75HtwECQ3JUwmYwD5kwsVG6qMcPofZCETvy9cbrKJc32nSZUroFj7F8gCvfoWR8AHaV",
  "key26": "2Tvp7cDJ7AxLTgykh5jaWo47xhEU1ExBFCzVu2RraqArSp9W1WUfuyKaz7uAb4UP8bDWbMAWLpT6fCw4KihogfCi",
  "key27": "jZjZQG68kJrYSEupRSfyw36bCBEDx2doFZkb4Txt9LzWMQPyURxhwEb4YG5ocUihDhdGFeDg67N5Ag2QpBGUz9r",
  "key28": "5A7v781GmiPYbFoSESfdqrf2XhhQ2QxFnjanDsiHgk4xK7M2sEtbS2iT3fRmeiEJ19R8PDJAAFTWDyMCueM7FSvc",
  "key29": "5KemTxx7T15TqVfx3UaxurbARWD9Nsb1JiFSaxKTqAUwZWbUeGk4XvemwVKMXmk5Yq9ejBtVQ2KMH3qvz8t33S65",
  "key30": "2a8QeSKhtG5UENwLBBuiRB4uBmZUuLzQQzJj6L2JtuigpMeA45EAjfSYCehib2fHSDpCkk8G4XSzo8dPXNEWS4iv",
  "key31": "Gir9qkurmfSyTAVkX6sGn3Ehk31UpRPuV5oUVfRtx9ZTNrcxmkhDB8UKSSmcn5XrD2fSfij1gnufrmm62axweFQ",
  "key32": "5exTxgmGZCJa1BRmXy6Hr8ycP3pcg41FK3RQh2YBSmaSHuvzPYZV9ZQfducnyxAopDQKjYfue7dBMrLznktzCFDa",
  "key33": "NaTasXNxFN6TRntdoT7nLWwqNVsEXLGg2YUWzGcxDFS6orLT8Y9VcETct1wGn634tAhXLhEoCmPqVcBLuv5uMJF",
  "key34": "3QnqoGyM29BgJi3UbyNgo1zKadXD7SqvvGE4dNQRpcoU8bQw6WCccKfprQMwHCc5zCKdW1epmsvbEbf8Q7Z1zcFk"
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
