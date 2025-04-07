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
    "htKZsxcaKxaLe3ZJqdVSMSC6hdLKdnNoV3djetCJ5L2vPWR6dF7by45KkLr9jkWkF614KBGevKrCvvift3njxN2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "669mwjnxhKx7byvi5kcbjdHQCiNDEhLkrp2pnUhirLNKxiv2DpFBqL5NHsXtpWLmoqCqJceNgePxvMFkEbs83zC7",
  "key1": "3n2J1qis3nSeimMTbH9Qx5jftGFARjCeEJdpwRyCuKFyGkf2Szdv9MTuHREXawqP95YFyTbjeHbhkuZj63VtbFss",
  "key2": "3qwZXFRxD8voGfgVyT5aE5AzdzTmeao3LxrawZve5hxfZgnRaPprRcvYLqatXbvrNLPdnygf811dEDo5GfxHZBHb",
  "key3": "pyTzScJ9jJTxuUdq9FJg7LWRtWW2ZkXz3MaFvLJNKVp56NoXUJFupNAsUjJVd8WE83rUnHWBhdckeyGScLtw1Z3",
  "key4": "362AWWEz2fJKE6X1QdHmkj6dWBkpVxKfBr2kkSA3cz9XBr3QXZAnxsUJCfiYC7rzDavjbfwhJ7Go4eHCcG4t1DVD",
  "key5": "ywCiKmWQWD3DGBZdVsE3jKesNnwWXz5kjN9BGSmg9FJwUPisQ8QWgvdmjAoraLzrFxYqn3tifQY24TegWk6wQEr",
  "key6": "4CrKxhE3p8VmgWmJJRQMiwBR4QnmzaNnDXAfSuXhHvMx282riXnV8zjm8kCW1mxS8bQCL8zQn4E2Ldkyntjhr6vX",
  "key7": "63NDc4zQMi3aRZykQwNsvT8DuCjxbDahbodHUcoZuM91ZLfJDRDkbXe9gzVLbbHfoJDVnmm4WYmcau6WLxC2y17R",
  "key8": "A8vSmx5JKCKF9ETKkEx7yHN5EN55i8EZBtZYsF24WJzkwyJPQb9PYSq1zZuBcWT5iG4oWSqk7HBnnuR1C5ALjLb",
  "key9": "5ZZWns5vBoghgNoaJKZgQw8c4VYZv68nPNcBdZhVNm7UKqYwL1ebdRoYWAXyFkcgsb7u987cXU1RgAVkzTM7QLUm",
  "key10": "4bCbLgpne2x8Pudo2QQ2WX3NQktcsiUMHocU6e4tzJTVUH5ZEiExs8QDdWtfiR3hMdoKMgdir84uWyNVr6wBQMHy",
  "key11": "3KRrj5HfZdbdQcMpUw5sepscnMd82dNi99ccQXzez6aFbHJtnhNmqUCiNpfCx3jDk6iZ351jHZFVdTySwE7C7w7h",
  "key12": "UaHpP4g1tnV1B6pGocr6MCFXySfhH6Wwch6WR8XN5HAcn1kQMUEMycg5zGfKsUPusv7up47kSKv3hMrMkWnnjr3",
  "key13": "4M9JUSGSEGrEioz4GiRtJWvANChSwPM2i2YENDjo4kUcSBsLFLDzbcFrnR4UFpXpoZ2Jn23cWjm7NSTJqMEF3jvr",
  "key14": "4YtsnHDjoZVAAoN7Qq8WZXRvc4fSGy5qTzztG9PviGthhjPfdJULWR4ULmBKcAW8K5CHTAsrgYj8MrvJ6A6fG7Eb",
  "key15": "5VrBWhh3zdHUxHjBheCr75PGMbhjirSqMm1Y7j7LiR3UJczK5eBHZ9v7tcJrX94LVBgpMmAguqCzUenfQFfbXz2L",
  "key16": "67LLBfQerGuYAgQwrfUXbB7CgjbqwTJyhCYYir4i9bA6MqjS9YuQxS6bpb4421fURWez5KZHTbBrZPUjoNhWVj5N",
  "key17": "3V24V42Lc7PCpShN4PxQEUjxbAJ8QS8RSpNa8Qhj6qFcH2E8fSjQkFPQZxPbr41zUoocwzoHHtt5j8GyMDMtU7Aa",
  "key18": "dzrzhJmXaLeJvgKK6BqUQP1KkyFBGXmuMTM3DrnsZPT7JLMBXPFuAqZV5zQjoY2hhWy9URdLQewdJtCnjcKqsLo",
  "key19": "tdTo9W8LtRb97oSW7TMyC5MTZc7SDPWGQXDSwCFp7Vhazrhfi252vukQK8DUX8CJmk4mqrGH4Hwo5tvhpKSnaiQ",
  "key20": "43rKKMh59YpQioRVDHWvGynvgWc5ka8rSk24wYFbYVDeFWzjPTbP6yQmEjHJvXGXZ7aqUxQEdYoujh6aiir37nMU",
  "key21": "HMpaXJEG5R6eyqQzLpnDjPPB6PEvXqtKSqcn7ujc9H4yguPFh8UXU2EFu53ia3Yxyy1TWfpxZkxt2ZjTs4bcGAy",
  "key22": "k6JCtWhKnMtpQzdE67uenH7rbfzkUzcKrBgcGByjJvshTjN2StSn7GiYM4ZKdMTJvP1bYss42RLEoxXDKTdrGuF",
  "key23": "21i7Vxt5hGSnR87ziCSoUuE9GVopFQYqSnrhYwFBKgEdpKjJn7h8dDWj6YJyrEfncqv7gTeLybDohwvDN45xukxM",
  "key24": "4nZvwsoX1N76zyexkVioa9ZpkgWj4qZx1Z9TA9Hb991rZ6WQSz8es4S4po6QP7j6HYqFV5o6ybBv4D44jhnwR2t3",
  "key25": "R1d1FUx68jGfp61UfekzRqXu8j5U92uCsWN9hJXtfSXP66yw5mpJWPmdAhZPiP5mwcuRJi4JnwPo5LMMBVWCyDN",
  "key26": "4EGW9NgK9Qs2448EPHvc6AYi19xuRuLwePwmieEsRPCHWC3SgzVqPN5orexJ5vXj7QTYU6waMcypq3nRx7zAZUaU",
  "key27": "zLwurVYKDH5jfkEakCd7NsoHLCfRi4iUDHwMrpUFVrFuu9mnHtQuWZo8ZDx1uPjNrsHZFhEfYPnf7QNtdiUApGg",
  "key28": "33hRGDE1wxBfDtmRs85dfBsBpw2mc8kK5uJxZF2xx439xTKAHjYSUeyMkPohJQHZiZCAEDAyBS5R1zHx7Q7rxSW7",
  "key29": "AAjiGpSECQQn5SV4Hs7yvsZCJTkPmhBfRU6iFGwWoiyqiJQVjhDEsFeMhZHTo5qDsRDozbCNgsVbmR9KVrhHhdb"
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
