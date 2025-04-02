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
    "2nA8ZsvNsrQNQEqgs6VHjJBTWE9Uh6pLyPShcczCzDR3RtccGtobcd9F3kWoLjH2UWUCER2YnkT6ckhfXY6MmpxC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51froy8zB2CLti6LqWKBHjretncFree1aUu1ydV1QKcKhmaa3HLtbkF2MxogjVnKpKhMVTWnVL7VfiZagRGQPyzr",
  "key1": "5YUCm3y3C4k75eE9ckCLyJssfF3cad741QtF3a7utueZt8orAqpdbYotmP4fDRqDoJ3sW9rmZU52TU5Whox4CXvc",
  "key2": "256eB3gSR3L8pKizR8boJufsj7S8D8VGM62CzV8Tn9L4uhb1XnqKpyrtNVkq6PTiro7PFnK3GTME4vnrdaTwUZLY",
  "key3": "61V8LCGzkxmessTKNtNdQtup1k3mxRx6fyQWkRj1jdPueVtgmQAg2t7iPxM7hqu7hA8R13c9TyxZE2wphLJ1bWXR",
  "key4": "2hykT6EovZuuRa387dLHdNJgPdaa3BVvFg1o55gGe6Ln3SyBF1xUNU2deyNJjWEP4MhQ7VUSdyopKxbQgKxV5tQY",
  "key5": "v6A5xy6USeJK8qnk4GR9sf4LGg11PUS9DExfZsvpjfXL8LVxmp4GXC3uCgK6R3zGvYeaLmsMuavMFy5bqsLtxMe",
  "key6": "3Kgyvvt8hSk1kkxejjPRWWGsyUTG3Fsh7pTWAgamKNu2ZYsK4E47X1LmJGuKtaWnJDzBi5ZB8dq4jbPhRCWyegW2",
  "key7": "5oPh3umrjE9Lk4nxQZLcNSUQm9U4JtqyNWfQGD59vLujKUQ8VkJSxWrpT7NdGAHrhp26mht987zJpLPuVkNJCZmW",
  "key8": "3jRW2wbVqMt8ztQptZuAivNQ49pm9bsLZj4T7ViXP5y15cKLKVzJafaiYoQxF35R5825SDDjGUxKjXySvfMzmVzi",
  "key9": "27KDZb7FrLQgBgnYQTioHhoqJmpd1FYGe3SAaTcV16VBNPM5mxjvNYWCBEnYiLY1477WpYTJQGM3KdzqFq5LQS7d",
  "key10": "25Hp7NtHukLrbLUqnNSDJc2PEySoJvinTtooAKmm6emb2gBeKDwiRs1j6P9hSyLcqUv2tccNbkaJmKZNf5UPaEDF",
  "key11": "5uJ3iYnWgihuJDRGivqtbf8m38DvbkXLE4cJU1npPtBjiAQat1J6VxMpWsU36nnWi11bJiPFzAfWug2GiE9wJYee",
  "key12": "3XYGv21WAEW8KmXUc6YiEE4J2ioRHTpRZhhnUahGBwshhUDUYiLpsFmky8mZ3HxnvDc8gLxfgSrwGiJAjAr3mSct",
  "key13": "4xj1wBzG7yBLmEXuuKd7CYYt8Pj2QiKhYduLCb9Vi2SPc7E2KDXqUq9WSaSrcbdKiVPfLDKQQV6DEV1rmWMSgobt",
  "key14": "37htbzo8uMNoxj9fqVEhqjVbiwBKkTdnAnN4nVW2E6RoybumcAJED4aHErjMin3JvpnBZAFv56m55VavPsGm2Pwf",
  "key15": "5VSbbsrm4n24ZW5T8RmAQgHtMPFtvGKywbiJ7XB2tqZBbzih6bcFSSPk5bb3481RntkeMqNg3PkPv6RuXdFvQqzi",
  "key16": "5UjsXzW4CTMTXWL5L9B2g1dN7YCc7bdmcnoydnLpcroLkFRurXg3g7pB9NYR11FYPVgK77TCUGv1cUXuvBmmTZ6W",
  "key17": "67GCVb6fBcRmaFv8CDxdL5taoLP5qbzHJhzppexYRxQXPg6XxuNw7gLr7wp2sPck2aJ1CULgxEj1atBfWiuZ24si",
  "key18": "63uEGXnNLvHNg7zbYbaqHHu2smMpCe4nWLkiRwMfdXbn8VyrWekCjf8n1BczoEyb82NZXzL68kw7QQCdWAxuCydE",
  "key19": "uxAtWR5go6DGyRbgCXyaz78NxEb6PQoCrsNsX1oz7uxDRNuG4p5MCLRYURyMb6bbRc6mVv1KzKZEWPsnRZyznQp",
  "key20": "3Xbs2caQnZKLYXnGHRUz8BC9AqHq6kPWwGWtcqupWtAroEuqvQoqpxkCNSc1GSFdcWmdzvZJDED9bb5v8c6SyDEU",
  "key21": "2Fzijjomx8XEu1ziQEpTm87t3ufqpGiZJaHPNvkhSZx9aXUAKNUeCGiw4NBdUxBpNrzRkcQTUUeKTedijumigioJ",
  "key22": "2pJYPNZJ3wkCCD1UdJf5CFKXnXj52wNu6jfDifMHQYJmKRyJf96KMDv5RAzTaH4cmZqbfyH4N2DgsWeBEitK9Wy2",
  "key23": "ZQsVwjqPKie17fjXSWxpgdRQpoHSS92mNjCXf9XzK8ZPRmNKt4CPJCAPjacJfUUSZuvtPT4yzSgQfvXUy352SKK",
  "key24": "2BCEFNNZyZ6pG5DKGfudFXCYsPbfeHS1aAhWgN4QdqFanqYeFcgziAHjjYe19R1kjHkoFDiA1GBQ37RAwTroWv2Z",
  "key25": "44KiVSZa2jLa6fDk3bU8Vbt7D63rFBY9ThXETtFWjy9Vf3wtV8aEH7ZCmzVLYsvBNmMzt8NXxMt8kMj9auVHaC8z",
  "key26": "5LypbmkW8k79wCKFqVmS9TPzu93YhdUU6tqucFVdgqHrEhxXKtoq3NWKCtBWpjD9e76WTHdN8j9GPkQKUJmghSXq",
  "key27": "22Vd1B8N5gmN94YZRquNqUNH7UyrNdLfYJbY9aEGRen1Khcy8F3fPqeMSBEpo856z3VWdpmwL8AV2Rs9fnm87Nef",
  "key28": "4tRPPyQsUNZrQKnmjkkp7V7Mv4TZubQm6GCgy7cvxLUzrTPLGozLx7mUugthQ7VzvVo8WTbyukuDF1iWtjoPqVsb",
  "key29": "VcCjJWFWY97hLzHSN1Wad1VkDKPxVRJDcbj1Yw6iWuju8gipqw7ntGHxkv2TkSqAdS2RufuvmSBdM2UxwgvVbzn",
  "key30": "3c7cNhsK3YL57Q4TgPsntUdXodRS79rbRaR3xRgkDk43HHQ7Hwm9Qhygw6HQaCcCpSPNB3YWQ6Wpr6FG7E7s1C7N",
  "key31": "5F5MXKTXsx4o5A2GbTTa8FeUfXJNrpoZDtJrRPKeGw1eoGfvMRjsz221XAC9GtujFFszmd4oFPoKD1EJWKW5rJTE",
  "key32": "5CUmiVate9Bnq2nsigxGCUenWpJ7iGbfHwADRSgrHeZyvv1HmXS73JbEtXSThzU4PT1BTuj2WQKrLS2VQoVYi6WU",
  "key33": "2W51Huw8dCrWmEuScCYZvNnjP3W7MEQwGLcX4ezcx2udJQrUkLhJfY7x4h1gBTsM5YgPaP9LtFKVGyJED78Bth5C",
  "key34": "3Edms54WD3K8haHx9w6n7uNFyfL5Uto3TaHQBbA4LwWa55Jjs5cpQXFWf7NW5cM7HYD8cr5HFZCWUqXzaogUsEtK"
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
