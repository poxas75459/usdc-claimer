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
    "5GDfsWkjDb1bDH5xaKpxE8bc7b4htrgznEa6x6DdEM9XeqpzvZJYRcbSyAFYRyjPXS3EQfGiua6Npns1cSbk5tmj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hCPqhGJvptSWvhd9mhQ85326XStsMtyPUQUbyzbjttPUnML8vQNdydgAZ4GvqXLUAfVU5TZBdRUis5j8maRaKHp",
  "key1": "4QZKer8HkwtTypefWaRtjbv1TnZdWBWC7GPmB112PrvbvQApABYFJ6yqtTYUrEX4UWWK8pMViHtsH3YPoTBVcMgt",
  "key2": "2UZKSUMzmBae5ae6KTMwvJUkpJagBzUguKCLUqctSZg6EcaorYt2JnezUa7s5HeY3HriyH4rtvZFmnAHmBfbsYzE",
  "key3": "4qmb6CQNrj2xEnyWx1QeCh8GKswYHw6tmX5m6eLxPJaAw1tRa1WqentJCKqxurDMo21tPSAyFYoqoqoSzPLjZ7hj",
  "key4": "63rSrhAPoiRh9SMFUVHTAzbSqnD7ajo8VExbGekKfxFvFyNdrGym3rz5H3V164cTywQi44vGyjt3EaoocpzDvBtL",
  "key5": "2WZJ4XPb4DxaxQ258TfdyBbCyAf9rhP7NLd6qZU9mAKdFTtxbg3TiwPZLmNsa2CppVdK2VYJaSr6PxAEjgx7jVcf",
  "key6": "iu4r5yS8v1PWJK7LffxcJU94hf8ZQvD5xwFg9t3tb1CmWtYzcs8Xkft9SvaiN84p4E7u8ENfvXMAqD1aCg6i4iV",
  "key7": "r2YLBCdJguEKrp4ZtyWnSvyVECiDoyhYAtPGqmnXjJyEdsmiHLwfZ8STwEgSjMBNNDE8kHitYAZccQMeW2EBwqv",
  "key8": "MUt18M9nHknsgJv8XJSTQQPgMEvLrVo3C6AT6TM6tZQERtJL4V61xSaJyTZNkdp5f5cCZA6ZfD1KAJpCuYMLFmv",
  "key9": "VdZTwQVm8cXvgnszDHq2DdG3aPGAHdoufBHnufhQqbMZsH3PEfbyYpYPdzgtChqY2pKr2YviKCfdyStEjJ5rhci",
  "key10": "2GJBX9NKGtvAhKyzmfaJhFo6jUL8M2vrBEHtvJfdwEGuhQKfi4sUTkCerFPt8gtBPcDLaYe1iRUYjBxeYUC4A4Cn",
  "key11": "24U1Mn96tv7QAoRWZEtwqVmM2voRnQBim7Zu2MWBtHNT61XHS42sAQhNBKBZHrUDJMKPeb8hP6gFsg4dQDB95VHZ",
  "key12": "25G9pwHqu4wSEJka5tieKuNVySesdRcpe5WEiHPiRWbTqZdVmTxccrKmKXUqjnqaUW9oKhGFQd2QmTaRpZSCUqtw",
  "key13": "3VzEGpQy8zGoKzsBC81qo27X3DKPm3Ufr1wzwJ6DzkNfXRq5HjwppXHAzszpe3wEPhyJxZitVbip8PePNMxfCKAR",
  "key14": "3SwjTxoDKNwjzWqmzMAVbubNXJozMQzzMcLJTKyZzvbYiexUMjfym3LtH7MSjaLGiXQ9hZxA82z4odCWr1CxYdnr",
  "key15": "3G9fPHY43AuyGGDdNnDq8aPh9D2UH4NHarM8Tax8XHK1KoZgst4vXUSwWHKU7b3URL99b2xmEF31ura2bCmN8p8F",
  "key16": "2G6C9cUgj7jFPSVa4Eejahu2JZssN3wWRCgKzxsaDePiLsSfGdCS6pkZdmEXr1vgg3UAyCJSvQ3SKyGXH9gr3rYy",
  "key17": "4feeUwAJu2FBhY6SL9MPsmXAhKVW2jgYuQdyJVWVhYLHR9QVip8znyJGWpSuUh1dYTvD4QoR74T6An3DwgyQ9QVj",
  "key18": "2PzhJFKNrdSgbrkVsBwe4qws45xMRAtkExuatxXyNWPaeM41YHfi2tJ9BGxLSXWDsETN9Pg876Au6anzqVFyxAH5",
  "key19": "32vhG91J2sLoR9f4KWJyQYWSqP7VZhxpxWUZAQ5UB3KXadP59GL6R5hAszDE8aG7B4jbxivTsuWibV8FB1e1Y7Qs",
  "key20": "pWHT2WMmh4vrTZWgZmfbHkKofxYUVti7VVoFUhQ8b8ykbGyt9BkxfXVpTgL72A7Pf6ZqmVDkkZU6WN2YMNSXJ7n",
  "key21": "5XKSTDo9iiPbsHpLGA71pec7LAft5vMbFA1hRJkwKo4eq5b5xnyKBzgKCefJc3Q7K3YAecFTMptQ1GdZTU1MA3RR",
  "key22": "2CoCRqqyzEp1PipB72vgXc5JSrw6C1ZthzPBC3orqeNgkBaUxuWaWp7Mb8rH8oQNeZhByJ1DQHDj5kuVPzFbUpZd",
  "key23": "2pr2ephiUVHu5ekqnSz6XNRZuD2Z3mUiaAc8RueA8sAVrfuPHq4hLBkVPFNhZBrVDmiR9qQprRMvWqdd3QaW53yP",
  "key24": "3Kefnrw5LXBzqeT2h1rE5cvqKs8z1fSFvnyy1uQ7rjwvSRQkb6zHvAmwcD289wGDkJV87C2WPY1gky3hi1zC63ob",
  "key25": "3mGRP5zHVyaZNuBDGLG4nbkDeCuvJ9VAVUEu2SQPivu6pdduaWGvjgdV6jC2hLjGJHMk9wRBd71U9inQx3KTefaG",
  "key26": "VJToevk6CLwscTQsawgMKyGj7pD7MXLWyuTaLUHesxqqKCHNotwY1g2mkUNERCTvYjN1LC9UHMC6NzuEicTb4Hz",
  "key27": "3bVFwZA4At7rHUkdhUsdGKwEnZjQDazHkgMERQSrWE4jbxgmQTgNdwLeBJDrqYij1wJdh4SyHwSK2Kjjwrw6CaBP",
  "key28": "2PRCX6KCWax3ZzWLLypTyzmH4PPMsW6aFRzpMTeyATdm5rpe8oAmwi97uE4D2o7tgx8ThwV2AzfXjaJXbY1D4ePS",
  "key29": "3wsB9wfjJ5ne8bvRQnU2wqAJpksWuo7wAFKZH82nxmGd27YZJhRTiiGiPEXn3oxs2mNA6UHMJ42LJkLVeRTzHyW7",
  "key30": "2Pbw56utPc8NmvSy8Rapjz7miWwUcA92ymyTPrpjXrhrNJK9AJKV7wT4BxpzNj2qoSozSYe8ZC3vhenXcvVUGyJ6"
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
