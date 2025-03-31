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
    "HfvrUCMafqghgbszY45D7YMEKkEAcpbjacXM9efiyMSz3Zc3y8LffxCwRL4wvr5JdEPb7ALVGuXTRmqpAoP21uF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RW9seuEx6rATyU6gKeUhuUa1Y2ZC1kkom3x33WYPbvEUbrxtaduBFhNykkA4Z9zXn1N69aaLP2BtYMuGrusygAe",
  "key1": "2CK5GB8A42poXCgr4uwTnkZvkDffJEnzat4bttxjbyNLNDh9Ewrqom5P8YnLv7c7eUYPVTFqNN3owUg4LLXJVVDU",
  "key2": "5aRj1LXPmmRarUQNdQjMKy7vULqxsvqtWB92nnFoHN2yVeJJW6FhGSL11W87SyBr8TSWy2ykdxGfi4UeQAZeVDWZ",
  "key3": "5QRE7DNuV9dHP1DBbfwYf9E7z8XVHAzvRjLd1Ztj4MNdBhrydWLrf3eUtTVTCg8kigDogDuqckQtDx3vMNe9iVNM",
  "key4": "cbWG5wFwocnBftewW9dbLsKDqjYBHNHYGmx7KqnwyAh8PJdx5Z6YojksD2XWjaziV4Qothhea8BJBJKrMVt534o",
  "key5": "2fQDD9PHGW4oEQastyEtJgQ8mJvxk9nqZAmzSBt7AtzaPgeAofPRZ4tHQNWmqJV8mmWdsjWr3zfd5xbXM9BbcHfa",
  "key6": "5Jhz9DH3mFSdEGu4wXPREEQ7A67L3KSzLWaw3HgMC9z5ePM9JDitBFdFSf7UK4v1uHzhEyrfWV88k8Tgr75FUJTZ",
  "key7": "3xm4HbefiVVuSmJfZJruqzbCTnGYzdxVwXHEAWGgg9aPvPeVqCevbkSrSZVPTaSRhhavgMqESXJ6x6CKkV2Vpd8R",
  "key8": "4qEdsc2apGeoHNBkBLzvioWFkkrpujAD8qYWczWnc9XK4h925T5tzGmh1uNzbziMSvA5P2Gxozn64c1rZdehLoKy",
  "key9": "3DAUHG3iAv4RsfuoYrZZkfWr6FGrVi6cMLb43G3vQjzUNBLwDVQwzBWVR86xUxansCeCYwoYMnmmurcozaCHbuY4",
  "key10": "59efdRE2pPqhXRdBP6ULoC6PrNUvvU6uqRfYdSNKLiUpXdmG2dtCWEDvhcYogwfWFA5WYKBcEizY6wuqpJt9CVd6",
  "key11": "3c7t7vWoydXJ6o5eEGfTpR5d3QLQ1tiTHNva3j3fSuBwj7RnZD1ykCxC74nVWNGM8LdU2dpYxXoLojqmXdnPLuJC",
  "key12": "631dASeEDaETPRw8qF82MRLzDpiEBsfUiYKn1vVB3nnhy4NzTtKaa3rNR9WpkyrwBDmrFqqoWysNozfcmgWpySGZ",
  "key13": "5hXbuFnzJjP5PaHRVgYTaZGjikXrhyAmrkoBie6wfj6PpTcQxUKvAdAUgcXoaausqBNBjs9dSFrqgpW7SYkVBGWg",
  "key14": "39NuTaYhkNjRVGVraUQFzEbzfjdvhnVwJXk27HnEvNP3CGN7adeLUPLEV35oVBz6Xqa9ZdTRdbjEydesig3q8eA4",
  "key15": "siaa27HCeqbVCDBzLqXEeHPctAwUv9eL1SvTtGpYbQGhuXDwbdun8M9wpok9dP6mV1vNCoydGa4GRuNco6ffT7t",
  "key16": "48K41kKrFbdHujt3EUvyewP5R41L7n2TDhC3xshPijECdDbGRbZHQNNhtQSKgPL4SDaDAhdGmUENkVqX1JXpnHv6",
  "key17": "5dQW2wrYT98JoGPVsA5QDSMDTRiVrbXRW6phXwnK1anvBNXNd8wNcdibfRgzRZvGqjbTzTr9gKk8NwXWPEQ799Gg",
  "key18": "3fMBG3CZwtSczyhGot3qBCQUBtk2hrT4ZwqmmwdYrjiswNYCeE9yPn4wCmbpg4afFhh68XZXWdpf9w2Vy63W51ot",
  "key19": "3bm6RSehGwrVrrqyzqo9iKcZvoWpZjftdZVEMrKUVJu5kD6gPkWbrwRnqtnq98ekFbi4fDBorRuJMyx2n5PKPYge",
  "key20": "4VuA8QuFVzFoGnFpJLmBVPP7o5zPyqEFompGnDBjnXBYAynhUS9wZHL9KPkFLhwM85aJAGHy2AG7oagY9hwEyUsh",
  "key21": "5Ei9i11VGZBam93BJyxJL4pm9RMVTzGCx3qaCJPH8nJZc7qnkrkHEC4saKcHDEdCKdYjYVdsBi7VE5CvgwkTQWyQ",
  "key22": "3oJ1BXdf2NdjqWagAB1EnmcV5T3FwCrnYx3qLVL63TZjQKUA2VQRVjjR6D4wCfRupBT1opEXJ52aGM8UsJagrtni",
  "key23": "2h8tzy9poxnuYNRPhbTrgS5jLiajCbPuv8s8osiXvtStX1ce59YukmdZhrg5X6XpvfXsKBDKHQzG6Y6JKSv8LeFE",
  "key24": "4XQT7FtmQ59DxTV13GyVSHaYAn8nJkYoTH6ieAVWVnX8H7cTdTJKbMi7we7YeGuP3ZYv4he7e8TmMSwnboKgNAyL",
  "key25": "633AxXndQCxLdfDvkXJGipzDMwhxNT83q4RLj356B7eksjS4iTYs1kJBXRas5yzthbMh1D2au6qZgF8jVrL2DR7N",
  "key26": "5Sse7grFqy272bf2RUWAEogkHaAhTqwEmye1sQ2cDV5A1XpeMzwgugYojEDqT473GQJKEF4ST4zcRRzdbgVyGW3j",
  "key27": "4tRiFfUHWAJx7PjQjQVB49XTS4nXAm4xTxJrMAZbVmQCSJzjYQdf2UQdoNT7Cd4hDnLKs2tWDJuvvnXRo6T3jizx",
  "key28": "35SWXNrXaKVtzrYnSRLRHJ5BoNXwXm6QKh26q6EzTAhhe8xXZZ9P5EU87YMSGCyPSP7b9Qdm8NA1ufbaugWTFJez",
  "key29": "2QG8UmwZ1jQBzUUHmPXQWmwjRThdYuvfwRny9HbfHpLGR3BJQ36zUf9p6DhLkhivza44Ui2RnNE9fHh9SofCFd7f",
  "key30": "26dNDUdQReiDe2RijfDpKNM3oVBDjwCeLBevyUo7xURJJFcsEz3xi3pqwiJqc9bVukimb1SYdKM4v1gYMdAf7tRy",
  "key31": "JVKprvZCyhBfkQqhJV1HzUqwkde9R5ct2BRwYSY5pv28cTthRnna6Aic82ooX7K5QkswGcD5bq4MVufq81EHuuU",
  "key32": "5Stu7mgds6aVSi1ipyzUi5RnrnWNscjUnMqnE4Y6g1vNzoVoz8AuRvJTa2jDandnDTGKR8bFEPrLRmpTvGZ1GXS6",
  "key33": "243zTjtTGFs36tRj63eC2LKNgop7j4Z5f8ZipbDdNKk8oAYqEFgh18dJzF9SHqhNacfwnJFrRoh1AoF6B4gkmiij",
  "key34": "53NRkSzaH8hM186F9dSjz1AWrmztSHFMB6sXRaKXT1MzU4W9KxRC3ywBAGazErqR9ZJceHwLfwaq9T16JHBCm2Sk",
  "key35": "4UcEV2ZmWu84vMMZSuAWU4nLTeYncB1yddev2AssAwuBa89nk2EyPDKmPx6y5ENnEzQWsQdo3pzBffh9HpNPfQsP",
  "key36": "29dJF9qvbDyYBmYoGXxuuubtGJqoudtVDcbBnUvtmZRDSA6B2M7p5uF3XSwqATRGhmJsCjBgyvsHhuCmDL1EewQR",
  "key37": "5ot2M3Akw7Zaj9yUvrjr48JVbawH6VwUhHtfLavMsxG98BM8MyPakeviCy2JHjTa5zPyNdUotcFdiDG3j9JrBTCM",
  "key38": "KLTpgDfVAt59oqzT7K9jevLnvwYvKSMjsqHWXBYebYTvWB7GcFxDRb2jr4A7VxtzmmCrv4SQm4ESSKX1huRukED",
  "key39": "cjnkDvA5wiCGKuputxn3yFvztrWkYtK55oSf2nNLXooNkU5LdQ4VW3ks93Zf2N7njs8uKsKM4M6Nq6BxjF3AuNW"
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
