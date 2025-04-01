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
    "3nPS23vvkmtAEqZpA4Ks42RibEcrSh7AjRD2qDKdLGyj1F91BSchwyoxPtXUd8DE6JR7TWsUCuFB9j9Vhp41wre3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xdGPDprKLjjD7KRGpPYKMb1NZf1ErNHxpnvhDEpRhN6AVTkp4gfdWuEbou1EF3TAQCsHXsYGTPSLKQJhDCoWeDX",
  "key1": "xjtbknTz1dXLhBMawgTnZ5wgGTn3gxyraqFmUJqaSkNcYFQTFDGVXBkGbr61taUskwnVSG76h613keaotodxyif",
  "key2": "589fEjrmYcNFBLBBx7fm9NifREJTMmKu78eXJshQB9e3RuUvUvyAs4id4ucTsHAiDh9DG3N82i3qSxgXsNSZh9KD",
  "key3": "2ZV8n5WGn94XvJQy5pYWVBZgkj5p6R8X9SxdhL6hHyEJLZk3fT8cbhwndfmnrXAvhrLGzpYW4Lfy3k6LsyTwjAXn",
  "key4": "2waU5QqucofB38Na68Wsdkz46rLW1nvxiwtRo4Vta82xAPgcqWtefu77yDtw5LZSRe2ARvuHjuZdWqudUWhT7pdf",
  "key5": "3qU2ZEHMPu1LYXyJAB4zseb4A8q5DVYscDj41UParTSSRs8FoVds121okJKWRbh8vSQrvNmEhCHzVAVPaEFwZNoM",
  "key6": "39YbsY4ZASaL3shbABUQd65LtRGdEz3Tzd5BrLpBydKogyZKorHWZHCGxZ87zVSCnVjjsfkTQd5tu1Pj2pTCBrrz",
  "key7": "3SCtsrkXqYa1udUiyjMkQWtvtrK8yqe3kRGikXYE6pyK6JzbSvKM74mGZUnooPe2TUAoy1EHz2DfGykiFxxviufR",
  "key8": "4sgQvm9mCUBJdU7d7N3uTa6MkSwfqxLVqa3ksX4xUNBDpYxdfMP7NLAVthWpWggZ2fQU2LWdKRvQ2BaCqY2vxRGq",
  "key9": "3pxw69Nwf7ugdBqopbuBKsxQ6MFJKghDPeF3Ca2zrXUBhHbQoTrs8rTueT3z8q1d4drtkjJ9pW2BpjVUwXg8ZTHW",
  "key10": "4A2XKQ2aF5iFaKFUcCAqAM8giY32VN1kUR7GapqtfxdtRyqzjWuH5zTwJ4dMh8FS6CpPXSpcqbC6TuKo85HDsF1W",
  "key11": "3NC3m9Z9xc2PGVQdiHRDq4YNyVVE9Bk5jVdNUNWmyTFdq6ZsBJEqzX6RvsXc3LAQx1XNYeG6rPFdHfn5wmnmrU57",
  "key12": "2S2CjQy1sFHDqnc8Lip32Pq8yiAgkGnFa2Eb2Hb4hdaKSdgwmuLfJBgvFVZsiZ2bMYyg5s6AUKNEXe82iwzxhK4w",
  "key13": "3YSJUSHwsQLrmuhrLdbURS47mjitqCLYaRfecvDbCkfZud6gPkt4yynvpMEomHLgYXjm1vw9avboxPAJYXKH71AF",
  "key14": "UWCUQuTv9BMhgsnFKVj2my5LsqpJQmU2pB5dFEdvKK7SVoFnmdLuaXdRpcamnH6VwZc8RqTkBTWx7LAeddECshM",
  "key15": "4rXHnC3i4M6JRLUaqEW6knyZmnEXTaWneHUkiMZM23NboiXqLqyHPhGU5qG6PcqciKvNYy8G67oszNDXysSQyqo2",
  "key16": "gqC1MzC8vWaskHcdWCdzhNC5HKdQkaJLvADpwzjAWkE5FPyAVyx8XZjjygBpvvtHW3TaDL4y14NfssVzANe6o5n",
  "key17": "jACUkGGYQmRBuygjXcdA4FxiAPKf9aw8vFAhbDETLdetwUz8U1DQ5CwabLkDRzZJ3qh6xevn4w1g1GL4TQkTWSn",
  "key18": "Z7DWn1sp8rrGKzR6nGS8sfHejfSoBBV7PxQFHJ7vwqiiQwmG55DVMQoTJKwms4MvYiGEnDW4LwVrCAAN5TJr1Ny",
  "key19": "rFYybncdSUjK66HNR9awBMCkMUMB6TJyXLSV3cFnZVRHMm6uWSL6W9FUDtinzXwYrTMLMsdyjMAPhbuX8L5UR5P",
  "key20": "5WBKgqqjz6XYbopAZwLEoGzyLmxZM6qjTnoETXoRhKT4rVEiE3TkPxBXGQQzvRrvbsXmKXETq5wD8iGtRXVBiXP4",
  "key21": "5aGNPxGLkLYLKZXAtsxcqtJf9bkK5yU1ST4g5kS9nv2rmVtrQ3NsAyHZ88JrpwB2Cx3wL2LsD51XwBw52cWk8QT6",
  "key22": "RBB5XryqKBTZjsYwWdPLZFNEvqQ1enGo9aLhcAnx1XZgsFe6DJDfojkjmYTuYQMpNXUYopDzsgfq96JQgCjvAgu",
  "key23": "3M8nev5wWfJbsscUGysu3PmNpnQSgWTKtWKfLe3SNYtkxUPHddTGn9X9NisztLDAcngLr25x1tA3Pw4UoyrqBxxa",
  "key24": "5QmxMr856ND4dpVxUPt5TMk6uf1QKhxJDBdDdtDMNU6NMRMf1Gres3pJAoBg7vcU8YtAQFgnSXb9Js7AoAqtsF3Y",
  "key25": "3RSg6qw4PPqLLnu5tL4Kvx5LKGPsMWD5AoCu1ArLTLR88Fb3jbSAvTFKpPhirm8f6RVpfCwYiNe6U1oYeHJGnAkz",
  "key26": "44UcbBVD5E9gBRDGDdVbkaPWDBjeba7oZFsmBweQPDA7eWZsziDJHQUvZsvZBfXrcKadpmSqVEcDjWSPryTsZdjk",
  "key27": "36DmwBddDWypHMcSMNYEQ6fzTe6eftBDvhYUoaK3orBoNrg5dWAeQ3SdVAXD2F1Pz78uVVmtXRtzd1wgKebtDScV",
  "key28": "HV76dc7sWFYWmNwHGji3JuqSdMoCn6NVs6Dvyhun5yXEtW4SzGk369RrBjRDnRcq8Q5aQHX9xGMhMZJppHpXGbD",
  "key29": "57vNQN8GxgK6t4VSUPTezjuqsAf7Y5aZv25yrPsjQMMtnQ9GevyEdU2VzHnGNG9syFvLNSaYxpekACT8UAZJq5TS",
  "key30": "4nrgoDT7cZdUeBvf5xZ7qSHYpX6VAao5VAC7g1fwf6moEtHDDvMWgTtkN3V55U99ncMiqDwHjiqjZZ3AzAWXuqCS",
  "key31": "39438Cuqyoa3NUyswmiUNkjg5o5VxbU86uZwGFqTSSFsvrxhxuXouBw4Ty7LK9Zz36QvS6uGVbtt7q3DLBJ8MYxH",
  "key32": "2Y1sEXTqN4Pzd5nywVJocUhdQeAUUxtARtb5kzQzMmooRBdndtJYjg7Ltmuo1wGjR46tD6TMPnCDk5kdo7au6ZVX",
  "key33": "4yH3HagR1YHhmHtfXCxrpXbVvza7fpGavourS6SGaxcQwAQo4HqjBYYePnQSdduzKNK5QVQovZUYkJvWb8hNvmdh",
  "key34": "2eLy88xJ4k6azZYyzLX3KUxVAS2k1LgBsZxbfRJwNTbHh6CLao42YNG5b8uDLWSnNMEcVPL7eU63ACbHToCkWfUp",
  "key35": "3oii8zJfqvP2xeVGSkVZG4Jw8Dd69nm6NEUGCucMsBMVJ2Wwsc5mPqgMkU9dosLq2cywcBfiUwrFthpCkPrQaNNv"
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
