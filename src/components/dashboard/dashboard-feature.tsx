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
    "366UoWvLQwJWtHKB3A3m5qWQ7LQkMgqNu3DXwUhrmQTziEaYg8VbfhgcvHMSKWXkoGqZ1szf8YkjKQmCTRFeb4HG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61WysmwJpLFoyuADydnyjxVbjR7N5Y1s8XCyLzar6aAbX3fagtQqEj6fvRCCnXWejHWsW12MmRKs1kNKWgqN9fSA",
  "key1": "4Nb7kLDyUqupNK7H2CZ32pKYEkv5wq39nTpi6KXwoQKWZZaKW6pL3VWaAnVqeRctYMA1ZtsYK2A8AGPmdHHuUDSu",
  "key2": "3FRQ6WoT4LjciF9ZQw2dYUWA8tFyjNDVxKQmW2VD9h1wBVChL8b15NoED7fVF78VaTPtfnyrvcSdLxndxkmi4isH",
  "key3": "2fqB444yofExHqdacaXPvQEB5EJtmLm5NQqibfQYawL7NoYCD2kML9BZLtyiBtkAwyUmAd5rW2zoScyrXvWu34vd",
  "key4": "3pDGBzqww4aW3QniRq5mHWpctShe83L4sizV8yYNpKnL91SAUhHsnCSSR7L6Bs1Rpa3ypBr9qkV6tNatshu8ipgJ",
  "key5": "3VpAvEsj13pQjR5h1f7AUcr6dZ9z4xTtLgKU27cdM7yu1y4JYE34QLrNQcG7yWdTPf8YaQWpFtw3YVX1jQFN342E",
  "key6": "5z8DqaJHb8caqhQ5vo2MYu5y5JVHP1cbRzGvgD3jvdasMFV8tbqa7KxGTF15MPqMcwAD3BsgaAoboBjK67vzy58f",
  "key7": "2eMWPAWNoXxphxjCGQ4My7T33tWphWgRiYx5K3riVnqafe88n6hoa4RptN7DoNVKcgJeMJDQFdyXpLw3iYNpbyLC",
  "key8": "2aAp4VVnAHeTU54RJJdbFQjUWRqPUXDbuA6UW7QpCHdT9zwe5rcYHugxsyeGN3PjTBW3fWpXbujFjCqhisLRDUk9",
  "key9": "4wvmBXcZtrPPRwU9tyYHvGZBqNAZC3aYm6DTH9w1jP3PC9Ca2YFUU9JtCBKLVZYf2y5HH8SuD8RZtAiNEHVZbQJf",
  "key10": "ZgVn38oi3o4AbuLP3njAdyVwFNRBrQVWy1FJcQmsGXj4yPx5grZ8GDCjcQffZtbH1Fs4CrNPPHaUg4CsM6jDTop",
  "key11": "3m2Dxfes1Rsp3oY5qM71d3bTo7eU2zc5DuWk2ZF7jHfVCFkBEZa6qLunLc5BD9AdPDXup2qvbV1mDVC4HYWe7K6C",
  "key12": "5jvmUw3aYHGUKJXjHSMA6u8h5Qwo49HcYSdeNsBtRjpt9Kb1Ehk13DrhMdevorzeHJTBcY3p6WPSbXfa9bm6mE5p",
  "key13": "3AcyHyBh1USwCz5J3RdtfDdupYXoesJSEvxxiFdY4Wx98TV9V86r7VjwNhdS12XYhSYTyCRysgmptTSAxWeQ6wvF",
  "key14": "a54NVHbmQnikNUSirrrCLXPCgc3RqUC8Umu3ubsbd8UkYxx6GGf9NcDpZGwHgG1nM9zcGRPdJYovUg8hqUBiUvc",
  "key15": "MTnUL8SPzGM6zCaVudGohhmmssjD5SBbrv3stjzPWuj7ykMX84iJFTDCY5vX6j1XBHEPScFqnGmTmyAwUZjJX1d",
  "key16": "3gEFST4vN9EcRtU14KaqefZ3vyixnMMLhcXwQq4ooA9ETXEheCVD5xLqrc61zw3pavR6jPMrXAiwdyqkW9AxVTte",
  "key17": "3gK4VhtiAhTmnKV1zLy5hNgyU5rt2tM5eamSTf9woHa5pdmVWBVMSvrs2k36S34g3KKLL7Pa73ZSEszPkzde4TvZ",
  "key18": "2DauFhXh1jknnjeiaCs64cWYnQ7jdbu6ae8rZgXfHCnY77v8vCa3C1HZefSV4LA29gVgy5Lkr9RzWncSwYcLDgfN",
  "key19": "3jf2Fa49Sn8hs6ZvXw6NCrEipbmX8ek363pG5hmPfZ9TgvVBc64jAKrp3vQ6qj7wJ8CFp1ewGzMpiKp8ZuSLHjoF",
  "key20": "2NDHfsMFbbtKqHYZPZFpR9UJCUrMtdiSuH7cn6Nr9rPS591vAQ6LhmDjMwzSDYjk7ESJ1QvM7mkTKyfaB6uonxxd",
  "key21": "52j83edMWP6hL8fDjNSP7TzzvfzcZSy6tA4EWWW19sG1KZVVtjoqJ8ccjqhNHHGWnEMqTXfnDwae3SQYsCSnCsKS",
  "key22": "41NwXvBD2QiMm7pKAC5zTUzh6We3e3R6ffbXsaFX9DVpM3cFahUAp8CogdjeKBzjpVVqxyoXbDHTdLKJVFvwrqua",
  "key23": "37njRXEhPsJvYeEapesHYXobkDKpvQBz8KWnv3UKByHWAAD2uKvWJ1z28DGsPoRGhRaXiTkWa8Zjfw2sHbiZDAZ9",
  "key24": "47rQPJr8khj5UpYmCD4eCrRoiWuEaL5rBGKgTLQ417jA3pUZeBqehxxHmYQYQn5Ay9u7UxZgKuddBeqZV9aHVZoQ",
  "key25": "3HBKKw3Q4y7mohfjY1pcf1ZQRodxg3RxDa9SEEMejSCYmauBiZ36Pa5khGevvBpMRp8Um8zudq3rX5A3dMhBxx5t",
  "key26": "2Na5oR7nq9zXp2EJdvRTNKFyvczMvUxMA68MXC2NbQBwiRTsFPJwFZvtdJKgNwM86Foj4inCKhUy6JnvavPcpxgt",
  "key27": "2kn4ofFiWNjrmbGnnyu9PNUTWHVxXqYqD1d6JjfJXMbySsEnCx9ieT3QaMU1s5ETQkMszpZnuFAaGQAokXvZtXL2",
  "key28": "aAjXBfNsZEmcETySQkfFLMxk3NJFNe9ZjQnbyAx9snKnhyRo4J69ABB7MmizXvpn7htWyZuiz4RyV3zaRBFeUv2",
  "key29": "2Mhv8qYhBhP9vDZb474udrDzNoXzBGvfTvZQpnQUrXymcEBXkNfPPjKzFmLkYMZ8aDXcZAWvkzDdvBNiti6c7tdX",
  "key30": "3vuN3Kipj2xJ6Kbvc2GS2VgYj2dWiLEoECyorE9bSS8TQzwzbUn8UdybVemwLtRhY2ZHA6wLoZ5hZ8ipriMjtrDW",
  "key31": "53mn3Q7rokabKHtatUrnLPYPeRUucaLSXbo5Rt3X66ZcraT7kMfTq7FfyCFonFJ36BvB9AmBWFfQZ5DndN5ZQBYf",
  "key32": "5Rj5rg2dMc9Ky4kaSK8sAbrzPrNMdNEpQekMacxTsyC9kXD8Dr88HDqQCzYfmdK1p4Sk5Ta3zLn9oNbZxigqZVP9"
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
