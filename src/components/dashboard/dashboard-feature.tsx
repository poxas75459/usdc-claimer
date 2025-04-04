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
    "4MwTufFXUGvfB9RPn5fapLyDegR9riQYQeMjRWZkrrP9RTWcGMrCyX9SiRBKJ4Zx3idHAPZQQi9UYtPejGih8512"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mDTPtpFaQmaBNe4MAxauQL12zhh4VB5TXozi1s1reCQj8RxcNdJAVbsLY53W4ZoKbUMxERj4cw51MKeQJs9oUUA",
  "key1": "3WGF8NC5sQfajqADkktk1PhVe88NJBckYa1AMWNQfm1ZiNx1f221iRpGv28crDsAPBUWR4eCbWvVKPGrXjpYw5Y5",
  "key2": "XCy8VLi3NDvmNDqaAnD6Fjj6EiYn84x3rZXXN1ESrAFUaLLiwHkC98oJ1WTcmCHBSdJVCkGnucciZRAAND9Pkid",
  "key3": "3zCQBbD1DPcStGCLRocZcW8DxVQHzDAqW1vqjFXfbbbxXiFBbxyYXFeqKNRb7JzZpfQNbw2kyz9rRvQveLPCoo8n",
  "key4": "XPxVC9r2Wt8qQAKsUbFornfnDAS8fiYS8iD6an9AuQ1zz4sgviACqcZrMmQdaYgfM4mZF6abi7vLFDEKzKKTyxT",
  "key5": "2BeQu8AibVtiQSvFNs8wXHziDTgaEjQFKnS5dH4bvF88UBWfw3BdYcWGFTadpmFgoYEF8Qr4KYGekKa1QSxfRXaL",
  "key6": "2XK2hzSNTDgQgs3g9xgQ1sLP1aTDDc8X2CaJrrkSMoC7Hf7vKsmWUZ6Y47kN1eAGEj4xebtYxbtiaswuSuGe2jFt",
  "key7": "524KhVJFwCyGiSxxrSXCq8hajG6PmQgLY79bjfvTFjxJySj7stdmSWJn9pvsTdFbAhkdULGiKkXb4ox4Lkb3sQaR",
  "key8": "491Vu948xXfaRpfFUbEFwqe326887yB4G4rkrPZKML9vfjYpa5pcCkE9sBvzXWRHftW9Lx8mmUTfUbbJaTv6rduM",
  "key9": "4m8VefLUzosWtiLm7zdB3hYCNsUjNFZM1GnRAiiLzg8fCam6iNTJECqC8VtKomvNtqxnuPHj85wiwANjhviR8PE8",
  "key10": "4kg5aGGbDYtCjLDJAR842hSqCgn1s8L3rTHFT7tqPnGU7hHRybr6tDTdKb7LAtsvP9f6pRp6wyvtNwi48c9oyk6c",
  "key11": "BbZkkD8q9XPNXYC9YuphfYgjzUnPyohWMz48xvxSdbYgvWnJSzoVzMNDNo8yy4oCYJctbpo6N8LzNWv92gdBGrB",
  "key12": "3PN2dUn2TxS7M9RtGhUuT2G3bK51zAZeB5qNuLZ3oKxSwzE4F9jtcYx4tBihA7FKosfFCX1oA8HQqqBmLRJDGuiY",
  "key13": "54KYDsspj2s9WsusPgq3HQwW3bwGrGkszbwZmSrEN4c2haWmDjeSbNXu85CJSH6PBTP29kzgpBULAwNFfQK5jLFd",
  "key14": "5DuWCi9kBn4KCedhZfj3HsRiXCaVURZ2x4vdYCipPDT5tag3zE8bnNh73PFWnrQUkntUWcDnvcJk2Hb6UDsfA4nB",
  "key15": "2YrPjkHvLdx6MUXpRST9FTTu4KPPzwwe8fU6KJRm2af2zZ3BFyC4VMgVDAwJ5QLYjcnGohWxpumbxzCxKzYWETot",
  "key16": "5bH4DbDeTvRcfqsPQ1Xo1p7JywSsWFTQPzo73Kp9oCCfroZjCAvDMrd4G6sk5dBGKtTMgGpLojucStQgqEPeYq5o",
  "key17": "SPHduJCoNkpc2TDteK7CX4cYvMbQmuPTHwfdHLSNEX5Ma2YJ5BHCMPkPVVNgZvTUieS1eHvoa5TgwNWj2nCbenT",
  "key18": "5NQkji3wU9hvv5p8vy9qcvWtixy7zErSjGiUKnatArU86c92ijDyzJAn9xMZYD4Ztscwz8KqURdrKjTfXtCFrNi1",
  "key19": "3UySSxRvwJxVXTVdG9eh7hobUygTN9R5EgewhMXLhmxUhVtwjAURTH2JB3WzAFjxdUcprvBxbwnMsTSJVQat2MVt",
  "key20": "124fJjghk4rn1XbAVjwxhPj2YB69UQ7XAXAQWgnQ6nyNuCuXR2LbeMc3xbYgxR9d4QtNXnWEhs5TL6qh4SJMN4Yi",
  "key21": "YvG8GHETZqieXoYuv1A2YeRtwpjLe2DpjVLA4iFMNZbxWPNNh36MZbcRtLY592pEQjJB5PdX8aEG7LnrnTB85uQ",
  "key22": "2oLYxznpng4VKUB869jXtMzunUQxMTVFFB2EvbLeQzE3bpRaQ5ASfJCF3VgptqDWbbw3TTKKAB2jRCXDqBUZcQjX",
  "key23": "2aJqnLMHdKY8PXkaC3for5u436sp4NLroF7iyrAMpyqAy1WhtHJGtDzHXzRNga7cLM69FxQdipf7meX5CMCVStHV",
  "key24": "32YXBZgmr7EsG4p4KX78pfxKgJMA4pJg4UbqkrqkLK6T9PdHFottvDLkY6hGaJwkQ26mTGUbq5iy6cM1s7bY4fFb",
  "key25": "5VTCB1w6MMNT4W81LoL3uwUXP7kkFj9KUdV4wJG3hxwAey85MCuZ9FJmRkrhy8PjyXN2ndW4qgcLA7zvaUgvxKJd",
  "key26": "3zKuXHBYtbzzs1QHUEmeovtYEaAmc4N5VLXogmv7vEM65r863xew1eATgHS65vbpv9Y6GR97shJfACHunr9WW1eN",
  "key27": "4U3tY85wYxWFF8JFnMLdtw1Uv9Gp2TgiLdArf3hmxiYoMKsEUQcHYGtspL3fEybg9oqbHz3yPzbPzvTTvnKJC88g",
  "key28": "3o77STKXgRfeQcu9KcUCc1QZLfwBpSZhQytLcXrCGwKhv5CBKiNnBxvw1ZRq7X9PvpiccqENToyLh1iNDS9ENLdV",
  "key29": "5eDj49TKnbdyxu28mcfhsEU9WHHZwJkPSCppNuTHr2434vpXmdNkh5e8NZEKWHLCosq4jt9qDJvuLcL8hLmCr1cU"
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
