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
    "dFjFsie9XoJbE8rXgk8seY3gAKepAeZ3rLcwiJXT5EWbfBgiAehA4NQNWWk3QUacUTHgFPe3xvZZ3n8XH4cakMY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mfHL2sGppjjQwx7Mez1XbwjXF8dnoCM6JVowLhWbcK5JcKmnwj6U943q59snf3rwBb3EWy6PHqfVfL8pKPvJAnk",
  "key1": "ZpNVk8kUTF4AtgNTgX33ZjkRCPsgD5FbrFScBubaNBokV2fe39vjyhx7PHpJBfebin5iFaLfcC8sQ1MNbD5hx7d",
  "key2": "3koPmjEU3AswCF1jdSQSQVsCEC8XpkdkcftfNZ217hen5UtzKXjCWvbR3io5BGqcy9n1ZmL6tjfzpRqjU3qjSNVS",
  "key3": "4zVuBHQF5Y9CB9qFyjaGcrYGSFYnqb3o6VTzwyTtjEmgRSoRUwm8jAjsrN4qPzQzX2MTU15n4ujC73Do3PLySTdW",
  "key4": "3T3Z6iEBZyNB12jZyPsJhbJwBkaFYnwnSDWM8QN1SneppSpDNZ8LKwTE8y3LPS5kqe1VRmwNtiCNn7cx4vXhbbPj",
  "key5": "2zxqQ3Nj5g7WnRwZJ3FooLc6mPXsLGPdstu6aAW71T6kQ72xcMTyfYPpfWRFQsHUgqbxk8Kc8QUd9sxsmixdoRvw",
  "key6": "3WybLnMsF6J7YQajWNX5THCibpyG3hwGEdk7inDCX7EHX6NoUPWCUNrAp1XHqaLAnZ9SXVmcgJNSqeh6KHY1EzYB",
  "key7": "bTD2U9UhS1aF69rgwom4eytdSm4M7r4rEDG8weCRMnDho8peSvHfMMZKcvpr1FAK5LhG65wHDAyvVWmA2Y6sJsX",
  "key8": "49sUTRv2WEP5dDj5JYrHBHqUkgiRmsyhfhy6nWvnBurz3ZX2kg7Eo6uocaQwZQppuZgANrpF22bmYKgwS6iAaaJC",
  "key9": "3qGfrpGxZUVFBxkqmJrRa8sH4QQw3o4FrpDyxYxBZzzdrBvrhSR8sGkCRcSRFadEL5QVFy84KPfsYSFd2zSBsKNx",
  "key10": "49z7LEQtsxdpDqkwUjuTCWnC1dS9kdyNkRoiCXDUaofq9RpZRSxngh3RiGFSBBRCVhS8DzSWq4dpqibMtFoX1GFo",
  "key11": "3RxMRZb1gbvanGhqWzhJUeMCHF5xRB8tcQEd9zP83hiMEkm2K4JUqrx6DTtJGLTzaYMXnyiaA2eJsr5JUpkh8C5o",
  "key12": "We9D2eNL5oLbrGknPD5YFdAFX67DTDCwh713H6Pu9hDkAuC8Rg33nScVYwNSUGx7oMAAtzA9ikBaNHcBx1FmEjr",
  "key13": "3BJoF2BFVnkXuC7oVDyHntfUCVEvAUA55sTAJP5GimbM2yWLpr7Wp6nvcxEDioky4K6JqC8bMx7tH9vRiDqBXJKL",
  "key14": "49ghorAMwwvtYqLaLAJFKqGgM8CyDZHyt12pv1TV8xphYgr77s6dr9GSi5FrF9zFfAriXj11r4zdyB8uFFqjgH4L",
  "key15": "2TmFhHdsrEbV3LK6BNTJM5W9f1zvJcjL12sKAu5MBz4it2ppjkRjqLyCzZtnHQRsKJ5gEtDTRMiAKye7U9shULDn",
  "key16": "5ze2BrfwWdkKAkkFHrbmnyv8wcqvyY5Qo6YWL4xm3d7D2GgRrawWB5y8A5FMVP4k1XDeRp7HirWCKzcXWhyQ4wuS",
  "key17": "28p6tKmCyfwrq9R7wy1mWMkMokmic6zhCLyLjzZJU6VLSQQM87pfXQZFyWyQBCyTjzcFa7mnYQ6pUF2g7nYW8gyH",
  "key18": "3uuXyq18EWZWvcdbqXa2b7G82CphnRai9JCfo9GzuF9wjb55gX7x3kjXpKZXFFR5d7XEQp5QUAkvpdxtUaxqTNSX",
  "key19": "4CrR9LaBVwAVHhcYgP74xM9G9ry1fy8EwB9S557iE1AX1XFJNcpCmreM5YF7pip7gb7yAtrmB1LECbuwX9ohED1K",
  "key20": "BKtZbeV9kL2AnbUVe9YLW6ciskLqyPNrx5XXwAhGp5SSK4jToH2mb5u9qhZirMRU6EDmjd6a6T7ixerj6JFxjLh",
  "key21": "5kwMSSAjFT57jVAkkNGHLioHG6cmcH7qY9pcKqA8c5bwcn4CLXCH1ry7ecb4s8s6nywh49x4yRMrJUFS5w1sY6pK",
  "key22": "5JzafQes76QgAFa2gABYdv6G7paQmh2QznKLp12PBbUY4jLBDgb8VbR2YzqxoM3zGQLxGqCuGaaUNUBzpJFzkf7j",
  "key23": "3dw9KC9HqUrMKSbsBXELsQDoPzN4qDppB2gYwa1ZMxpS133q1yKLtZsieCUeG3xagYjUp9d7MV28MRPMV5nA7gtH",
  "key24": "rk16tptFWvbbyawuCcCLLV7hWzLrvWazkqumn6JUTGrj5DJfEz2rLuxsyEfsBGMuthL8xF84iujExAhd7ApidW6",
  "key25": "BoqVkPAhVqJcaH8Qso2pfvZWrKtBA1PgorJ8NRPy6X8ugeLJryHqQ4F72qi3Dvv5KNw9NyqBKfhygSyD2KSdcQX",
  "key26": "3E9rb5Cf95uF5qVzCcCopJ6gk4mXjLRLzVpuibqeaXGsye2GQQjvJ6aqygUfdjUkBRAv8BwYxbSZadeCMT3EKYYC",
  "key27": "2DVeDtxAbdAwJp4bo5zPdLcq5Trmf1tXdqRx4nuqLGkYa7T8KXSuXdJGt2V1avXfwBREePjJgb5kPxcCSKw4Mv2z",
  "key28": "34wfNFHcsKxw7iPs7heGqa5xNdXcKk6LYo9pcEnxmLby5oAFqCyAxXaz9c7vPLoeR8ebiR2JhpYSfKekB1V79cop",
  "key29": "4gttrEEMXaWy6wvFayub9pmj2rjLKeJxEQjNc27VEECrz7qWyt1dLXAXtzq2ohNgJw35d6QYKwxEu3SSsHYhAd8c",
  "key30": "3rx5bFMVKRSsSZCbUfqb2LZxvYyUZgsY7WzNxLg7J2yDQoJrjAVfTVhgH5JUZQKi684yFUmMnu7uqVMGkmKgAcZZ",
  "key31": "5DrvehxRnUk3RiwJVkyF9MBETJbgnrNhB1WHtcyxhXsp8KFeoTceooPH3mUBzXWaRL6Eq42cpJRxxjYDNCRLY4Lg",
  "key32": "fouHkhA8WqXxuwjdbcUPVYEj4TgMbCsp2zi5vfrJ4FkBnvKB9FBjhBowP3JaCp5QvVwtGE4FtwMyNmyRerTwDot",
  "key33": "5PkpCMc9tmd5WbEUr74Ap2znXPpBbrNBeDsvtpoenwaDp5u5z3DFPEVWzDauqgjyXkkLPnGFZNiyoDUhhkmVF7UD",
  "key34": "4VHHAte4BmptpNfiSzQyK6wxmWd7dhi3TSbH3Zf1ePGtCGfoh9N6LFF6xq3G3msB86ovFQ2zpiwx4sTnJUrZs65D",
  "key35": "zxkkG3RgxWuV7p9YUwSjFMdREjFf5eeVEhLyFKtqxTkPvH7xpVRPmjJf5j1Etv7weV1P73xy6cxARmffHpyvr8s",
  "key36": "4WSVUph2DMUxwQfSJStySHazxHsyxuV1yziejtnNRbJN7CneBPdQ81VU6WMgvm23AhFr665NhujctcUXoJNtDzqE",
  "key37": "5Hz2dDjkbha4U6j2RqLrUMC61B11o9Q8TvD3pSnXvjXMdVuya4kSaiG9917UijwB4j8X3uJm55WqpSC8d1AE7P3B",
  "key38": "2ebJAk4Lskm4byvwE6gpCA99qJmF93AGbdzV7dWVDUVagYoVZojnLHGvigRGPpwgt2CupgBMaD4qacLQneuPSUvt",
  "key39": "651ZrhWEYbGQAoXSmu8iyFgYnud68kZGREFQqV3mJ4qwXFyZ22qCNQhM6xBNLFZsqLFEQCHB9JzucXRJZw8LRkaX",
  "key40": "3WvkeuWm7cEamG291R7BxjAMJNi6nDnVGUxiWofCyPwDMsVWy9NbBpLeET1ZQkMNqo1nJNnXrVPshbpn6Emc2H6A",
  "key41": "2MGqmEAuhCkSWys2E6cw7dAogY68jhhN6LFwB7uAmAPhA21ATKqqTwHp4HcT9imtA1L5mWz9w8VNZE2Aab3q43sh",
  "key42": "679RX7YLqdaorhcep7Rdxiir4LGMTCHUyUMA434xNo7hZaQngniR4AUyBRkboAV4Qs56ZXJkKG4hzPk8W2eRpz1H",
  "key43": "5sRcHoWpxPK4RAeTDBdM7L7jRcaZ3WUGNag3MJ8FWp4SwCNXfjQtDrLhj21xBLdS9UiRvvrsuc61WXi7z7opNGg1"
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
