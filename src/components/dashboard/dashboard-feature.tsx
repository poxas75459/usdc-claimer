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
    "2q7S6hTLHA93JwmhWTqQWAPEtcmqzixPkSs5ktCjXrbYQvoLE1BwptKqLdgixsqRgFJfqe5HBF6VUHnHjYicbhrA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jsVAFzLvnPKpgrPB6YyWXrqsSPNX51UGfKc9pN8UrERciN3PoCCamPg2mwfReTY6TMRzYhPbjb1zydyzg3GHBF5",
  "key1": "3zXpz7uY8JoZ9Q66uR2JyhNC61XKT3X88SKgDG92MVfZTASJA1RQqJsJqXBSR6GYd2EY3fW76kwqBf5iDYCkDaX2",
  "key2": "3E86VY6Zn7go4MWcZccJ2gsKKq6kmD1WJiw4nYb4pjwiDPoQB52j262U9YGmhBv3WwDAYtw2jaoVhaMwe1ApfYYq",
  "key3": "5b1sUQpE55MHpJ2HZTDbn36RrBosGVxu2RzAG2TseHBhsERdzvyvcyEQgrfTjRCGRZwSmiVYJSJNzZ8R2N9TfLJh",
  "key4": "5c4kDk4XroNJsfXaNXuGugLdPFoGHKkPoGye4N1JnaUEpqaqC8yUzMfcXcv548yUUmw7MvC52qPnVmWwZbYbGyAB",
  "key5": "4WBx9exZ5JnyKn8K6PNxmsBNLuuU6cLzXjqB8nywCH1bYUjG7bzScyJqnjm5NUkBs7qNzDezfPqxrVYQ6av8ex7J",
  "key6": "4pwUTCgddhmTSDJRdgaPhsxU83vgeThKJ42XymEgiBG9japFtTcK3MEnhCDUakjuuBDoXV5qBoN4v4MhutjvEGt",
  "key7": "uXqCf67oesV3tPgn6ArUZDjfrQafQj5oG2xL7UMoNBQ47PmwSWLjjRy3nQDE9h8Tx9LcipPVPFtHzXwRoHde5Vd",
  "key8": "3mLSygWFgg2kX5F3z16BErgLTHuU3TiP82NcFhzZHvDeX4y8sxL6ASRJGghV75qCGnEF7sfp2Xo9uHBS82yMKg5V",
  "key9": "3w17LdoyWe4iF6mKEvGBqGbheUFEfubkUtrLP6zC6H4eBmRQ6h5LFDN7yoh6GWYdA2M1mgEexoXtYTZNcDrPfAZL",
  "key10": "5CCePfFDTF7cwT7cPcTuxkGcdAwSrzZTgW2JMQfdh8w8CShpK2pWtxGoTGLFyTpkLXvDukLQKRVVfUV2jMALz3nY",
  "key11": "sdvaPaxb3kenDSGmZcesMGzU98pEvpLFaBuCTBxUxG2ZAjVf9vd2MyTrPt4TvixRkMLm5V8ei6nnvXEkkB1Bt6v",
  "key12": "2GRET59EgQkPL34sk3UyZEj43hTX33FKrcar3QMSGftUeJmZqTYWdogWkTUG7w891TMCp7c72fZKwbejybE2bqKw",
  "key13": "4unK2LEsZgACC9JnX7H9mgb6WRBo4xtHCN8ogJ8oEgZNKv8Fg7nrDthQtc1QqQLPxtcN3KBCw7JWBKzebBk8Ujkd",
  "key14": "6orrGDV75zYG7MJswFxP4GjCLZ585u1Rsp2cGvCZdEDHGbCh4tYmuzj6FFoXvLve6YMMcwukDTmZYJk4UeontDZ",
  "key15": "66nNuVVkGfLJmo39UiDQQ9ZyCpa9N3e29eBb5o6NL4NUnTh3KZKh83hWj47ncsP3dRKwahRnvvqA6bWizgD4U4QQ",
  "key16": "SZWMvLWFGVN9gnUy21nmNYSeNmMgsmWnxpr64P2iJRAAbr6zmpxktQgwbpC4CjT3JomknZHQEnVFp2DpJ3mrpBa",
  "key17": "58igs2noirZUjFqigNQopZKLEwY4Bcdd91uiM8bBJ34DHZ1qGhpoRFYcUiEcJVadmNHtQyvVCHgEb8WdiFbEUYmE",
  "key18": "49ecLg63cbXnWdVzoPCBGR9YrjRR2h4RtNbkk7SZMhH2gVMNjsT4kDvJDMrMpbci1C3tr6Q1dtv7RTAmDV2RZGMx",
  "key19": "d3gbR5oQrqHxPfJscUxxJkJKY8iUKF12e2Tn18cdx8bXafNk8wT2jfLTmvY4qeqUGbCzwULwFfMZ4oMuLjfcCTu",
  "key20": "KDXWTDCMkRUYFqVvkwvzGeVWiH7GLiVWxmLpkiRV8XnbL8p9SFjKGAWbbYfHdkWzhNqUdmGyzEWqSEyDoEWSf2d",
  "key21": "3aUasCUWAd381UApXSnS9VbY5uLk6AcR4rpVVKWzhvoDHAuGDXYhorFLoJzE6nZgXP2BrbfDUk5ZYiYsRa4Yhc3i",
  "key22": "54PZAnFbGmqxoSreD32HcaHFnWuuDGequY2gfQbHLdE1XmEsdD1j4iH2tfGbby3dW9vGt7FPcHb4dqbq4b7ugaby",
  "key23": "LeaTvZ3k2om5rjrZHmA7GkPcxhhwTmbcXZa8mYiZHoGMqUZGymvBwZtJTWYtytpprXMVV3mjAnB36ot6RNXKPCc",
  "key24": "2rDhyUMFFgT5L2xWu7zTvRPCqPwoVMfKTJ7pn87fNSsE8g6h9urubfRDfYpMPem7Cf6UdtyHzdBgChkbGzZt9rNo",
  "key25": "4tFD4YYSMpmDW9HtxzRXSj8C9LTJHiHCzFLwDGvA7B82f8WKxyV1UcpyrSpXUWL8f9gd5DYArPRcN3ernMQiE7NT",
  "key26": "5zxDyCS8EtT6V2gkczgZ3gPz5ky1yVCnE7fQd5CGi4xyMusCBrz89bAU4XQbPLUvj4MLkL2mhzLVkSA7YVrXfAzQ",
  "key27": "RZV9s7zgCWFp7va2Ppo3QFNHMZQc25Ca8mjqWEs9PMQHrK2UtHkBxmHpSMn1RLvmA3T92HpqQQCS8GnhaAWQsEB",
  "key28": "4XHaNAwvrvnEXkXPtQjJ7hy2cJjPZu3Po1oAVeqwLQCCCbHgQxmFoW4EeBxvu63AsMHBBXu7sEnBqPXMvddncqd7",
  "key29": "TGG1YYhwURYMPzRFKAGKNXxhxJNoJmTvmym7SeWsxwCy9McQTL5UNEvJiKXptZx27ttpJk4XqrPweJDMDrdqr9F",
  "key30": "54QM6PeBnR2VvME2AMWBWWnieuXM4n5gWGberXjnhgDsu9SD3tiXvRnZuyGqJgjRRAMS93WiW69UWj9JAUTvDbTu",
  "key31": "3W5CZ1XvXYgRrTALd2YJNTEeNzc9oeq2MexAHUWd16pqUwMFXgzFnEhf5eL2anbv1f4GCcUPk39pXCdYLngiADVk",
  "key32": "3o6bNaCGmXqKhyeX4fwgQiWCg7KgPowmHL4qe8STQw7wATHWa3wtLNCCzLLQ9YwVGXKqXgjijaUFRGaTUAfnCBB3",
  "key33": "4nNpvg8EZdMrG1DG3JvpgTdkFkV1aRhaXv98oaZEq9uQbH67VSQ8DbuEAGg1Wa3wbx1iwrvbgwG19VitmYJ3hTHM",
  "key34": "5bu7T7oyYqLtWBo2tbjZxvYF7vS3ynAVyePKHvKrpaLLMNbnJBuyN7y73p6Kv89UGWovG6EM1WDVjpVZDrfLQUhC",
  "key35": "2U55bhNaamAL23SDSLYSRw4M9rw9cL1LCjDWAVXbthdXaFM3LWZxH1oB4QJLgLc3W8LkFhWGWZZkRnzpk72hB61F",
  "key36": "2LW7fmWQ8PWyxWcW1A8rJ54RxA6x3K447aShYg1RRM5aPPHB68qBcuBD7naTWP518yU1QngrK4cQrT4SEfi6SKro"
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
