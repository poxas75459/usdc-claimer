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
    "5vgzAczTN89YLMbwS4kqZePmi3X6hXPAjzwhgNjvcNX6nFRTXcrFFHZbNvFji2pwmgEnP5EcpDAKhKU2HDnfNWk9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ctu6t8wczownMKZcpMQFdYnQ6TwR79RUVCKe2TbXxQvN9b9ecY3R6vv8YTZiUgsbqQsVBmgVLLNA5CcF1XJWCRR",
  "key1": "4WB8KsGYmpNMrTk9EWYWjjkXTjzgVMuDRayJdYFfUvNjpqTQ4ng9mpf9cYMBA3uY3WYuGjBXWRoK7hXrxxjvVmKH",
  "key2": "4ckCJoY6GuzvXCMtovt1SV691qq7BL1b3uvSE6ySw5FUNafckCb9Nk5JAR7x8fwtUUD8CL9NijJsWqLxQ5vYxDiH",
  "key3": "3HFUKnKxusFK4RZjWvNH5u7ZrfpMDGsn8UAquEscui5PScjhp8XbF4cXbLFJzWr85UVP2cgr5eXuUz3DEqh9nSwH",
  "key4": "4cJ5bySGUtJi2fFqHHkYV2PtxVFHdwmdfzDhDdmDnn6Yf5TP5VHGBdfj7CCR7Fi93jnkjEJPoL1xSxCQPdmss7PM",
  "key5": "Ak4cc3ri89ByAf97uq3RVLCzX5L5AVUbCpQ8LLUmnyHhPkUoTcARvSVcuKo6zpHndNeCxSu1eYn18JGLt8A7jr6",
  "key6": "XdtJ7FhosouSPqeaUgrZE2iddsbtRq8Eyieq5DXCwHMrdBCaEQVQLZbCUAm1RLZNgizfn7tbqBrpB3EU94qmtEL",
  "key7": "44jM7n5ngF4FvZeWAEQzWFBbLAj2EnPTMy22qUd5ZEtgmje3ND32PbpKSyTd66Bar8tB6D2i5RsH58KKHUJT4Ymy",
  "key8": "5by7qDWP4dteG2XFr9AxqTpeKSkJsmY8Rh5kXxDUE6BY9gE2i6twThv8pn5bm3ekiSM4CC5hCMCdCYoBFM1wEGSU",
  "key9": "3dS6LumTFh6wsub1TK7sQD56ES32G1mxvV77AjJhjZjXodWEwzPTJHcQSiuzzpxgQ7oAJcQ6t9NEVP59QwRzCm6Q",
  "key10": "4292nZk1bBYbd7Y1opABLLiWr7bbHWQTXY3WdHcN2JQhHHLjujh7YbXdnHnw843JNmHw8Bzg7aN6e7gTvfa9xVhx",
  "key11": "588T5RnAWkALcjmuAadXGNbQgrrtrTqmifv7cZLfsi2uYuCFs5icphhey6uHd1a5qyvvxQpoYg2PtQbzbxEWjbhK",
  "key12": "2r3N9L4S4kZB31X5mZz1zaZBfqBoBkJSFUexS2Zj2Jhax3nn7ejSQZY9r9cnhUzJ8ncFxpNj7nkWeVL7dSLmtDQN",
  "key13": "hU1uzxHg1jDpxv86cchgGrUuxwq9MwBuRfrsc378e62hNQBjaH8sdFYwmZD1KRKc2YNTgSW4pib4hCuJdQW12iJ",
  "key14": "5GnjowefgfqszVshdtnk1fmmVPWqfL37bEMV5n6N7ZfPxrpZGhLrH32cuNjBgAHv9LE6y9yoVKwTUcvrssND8Lqn",
  "key15": "3NBE9nNBn3qRuifcLU2SASaiTDF3ohas59Gn51HjWxLppkcBPbPjAsiWyrqCQnunZ4jLgVJDFZn9HnFMDNN1EzyC",
  "key16": "38WKBq6scSewWvpjGyBrnKsh3MQXJKnoDX9becxgb2u1baAvaZci1GcEKXBMcQ8L5UM85ognFSYF9XWRVkeNUy4T",
  "key17": "5ityAHaxFSH6kFtyM65bUHKpPXxj8HKYwEkEDiwpALntZTmxt41WW6hpfagnMzFAfwFBsZj5CgWZ9UDWkSsQccEk",
  "key18": "5teKhmB1YRJjT279ex68EWDEtH2cVsPQBNYPKdeFGzS3UxqDtRmxKd6kFiBfWmHFvnMcGqeNgasLxCEEYhqo8a5e",
  "key19": "JvL2FdAz32B6WQVirPfZRHuSgguLMcY5j7GC2CxP87pDi8WbK7mU6JgtucuMNtKQhJnLMBFUG87iWP7UdAWTZjg",
  "key20": "3ZJmdVguvpy6QhPKa7bC6JNLxTkoYfRvvMwBStx2F3mdKN27KEny96ewWyxSsaYcvkkAA5RCqapCyPJBwTGdRaWu",
  "key21": "2hnGnxYFS5non4NmNhS9YCck2YEm2FYYd6KTBXJ49Ja4F3mopP4YwrfPrtVQ7VJNvsdfrAUhPf13JPLgr2MGP8HY",
  "key22": "5LhurJMCc23u1KnDxRcbcvzUeQVJMmUYoHyYeH2o3nkBBm3XtJuXp6hSJNz4CkTKHixxYyoM2hWaZRwE459GxSKh",
  "key23": "5xTFKKtG7T1y7gLAkFRAnS6jiiBZuYtr5HhgYZQvWerkbJwBhGhCvnLLTgQkqbn7dfeHTiAV7B9mHhSzD6Yfff3j",
  "key24": "3PgBpjoDfumg9jZpjLefA7b9xgWFwxV7ep67oNWrSUkvffrb2LPqu3M4ki3MQ6pFmaNhK4q7WJtcNP17UonACneH",
  "key25": "rKmE5fBwXCiANJ4soP6YpJLyM8sMRuuupo61nCxGvcfmsGtHioSeSx5ozFXzuYqeJu3pzrxxg4Ffryr2d8gfMHv"
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
