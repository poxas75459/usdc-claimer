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
    "fdSgG3mNS3mvovLHsJqavfsoEnTRCu3HSfhp8Ao54yyrgFSEbyaee8oJr8cLovoggdDnud2qgwLWM8krrL4aX3a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xvg4uuYffD6rQPVpoyrejjRkpQdNFTAWVs8iN1RteQBUFvJjqM8GrhHji9s5UvQNtpDUPJ4cqnUqpALUx1d2bFn",
  "key1": "4eXRVnftqRaygfVGtuMjAwkx23sP3SmQLL7JJRUaqpNJbrsGfdqfNTCvsZ23LebLduPbtvvwyWECzS3rfAR9Tr5Q",
  "key2": "dNYN3cdiFcnDfNdzp7oS7rRNp1vvq5yLceKYp9k9QYDxx9ZbLc9xUtFNfMAfjWdv2h7K9oTAdkhxWgFoZS5booB",
  "key3": "4oDPdyRWtFDWp5jJCDKjxbzZB4cVbjPCE8NBR9YT7s6MQHuTumUardRqfXrVrLF2PNmJL1h9T9DorTxMKnszHKj8",
  "key4": "47DnGUmhsTrro2Sn36x9KB28qaorQGNMgBC6be45BQH77RcY9FB3wjVHGi7WdQRPZ8rPAo8ysooN5SW2WXYGwnrz",
  "key5": "5aYRGqEF8LYk7gLJjMhbiR7SEfdwHeUVevYJTtiqUrpgCXRQiJ5M2FDWAqdTBN6Ro8bK6S2S6b6FXwXWijpiLtfY",
  "key6": "48yLziR7gPRWw1BzmKWkAgtXgX5bkmZ4yHMFHhYVmNBwdDc31sJjgtA7R6Lzb93rV4dXtmUq2JWrqEqcWDsfsZSP",
  "key7": "4vzwVMUwHTrYcJrctNzsMrJQKJgYKkQJ5Q9LWUXbefQKiCjfi4LALYg13uwm3zuoTCi4HdHjatqNjNc8wToU8dHY",
  "key8": "63n8cjPTXpxSXGyZpTtpzBAX5cJnHdnfeE9VVs9cNSxjnhsDuX3tkRAbPqGgJgKmw22PCMiEhrNax8G5dBptkWCG",
  "key9": "33Utx4ze4eB6cgQSD3WffZYJvPm8UzRYCaZCe5tRqftLBcWQszizHaYpsXm3WXnKAsDpZ6YPvmD1TQUViU3gqPjJ",
  "key10": "62CfsHMJ1a5t2H4KDdnxwnraC1cTzHjmG9m4T3TqLRqj5Y3XHGtWMaK7CCECGvvPQ9DrUfTAA2kRpQXR8PzJkwnC",
  "key11": "3xD6tjNyQnzhREoCQxor6uaJVEDJy7JyGU5WNTqFU8rQPB9doWsfDtEvyTHZCEhpW8ViDF6hDS4FaJahhSGUMKFX",
  "key12": "4vuwDkimX63PeHLntRYvQhxrpWLfJCJpLFH4YAot2FiCDc8oLnRwgRFMPiJHosM9QkpeNiL6v8RjuRM8F284uUGq",
  "key13": "3TELqp8RQT5NLBLPXFMmEfurf5vDeqiV4GATTVWqg7pEC7dgRBG5dXJLuyeudLmfTLdvhRcD8VmbuA53aXJTP61Q",
  "key14": "2tTzpVRpwJJ2kpp9NwxDoEj3fQJ916GejvR2ma1GPyXuBkUSqapY5sFEy5a5Pvmyk7sDkpXKNTZocLwEiJ2zi8xA",
  "key15": "2Jk3Mq8pJNHEtU8USaLJL6vjY1RycJcHJLkquAwMtdejZvzFjd8v4RsF1iCoBe2k4bbvMNea7vitu3cGxtdLSbGJ",
  "key16": "GgFaeh2YLdMbz4an8aLv2oJHMvhQALhZNtgzwfGMN7EtLNXGVumPCf27tHBuuDE5rCAoYaeX12xRq2R5nYjGDqi",
  "key17": "4UJK4a8AsuLXUv9DV8rmLtSjXSsDhqWWcSSRNACZ24TfezLSpgVSZ4hmMCtRFkVm3b6rsySTLchUkSFUJgp27eCb",
  "key18": "3Wcgs1Uz4xE9DWqFDs7Ef9Lj3NQPuGofDTt7iZGPXmsnKgFG3CNVHtngSJ2v4rGJqEzJuQDMguVJC7ZkXKTzZAh3",
  "key19": "3qokdTkXKRvDiankv6z7pPPD8JQrALoDFTsWxPBFX7vaVmoAyTYRycyfXS86Bs61mTgyEEnvgZ3vvyE3sGWbXrr7",
  "key20": "4RbDKazppGoKLdZiDqfZEMh9UxEck6ug4u1FZYmbW2RJJPHETHMnMTj7eKvXV6FzmBs7Wt4Z6ujV3z2WrKZi9xyJ",
  "key21": "3916B6kiD5iYenG5LcdVG7zfF9ebxX3ipsP2yRYYYRjRtzEHaaAqnvWkc8Wzx51JDgPHMkeAWCB8V1kL4rz3ZtfG",
  "key22": "3WCBMnz7Zng345pjiUH9J2vCZHhXyQqC4UdVfkY34m1eLXW3qzm6dZ3swMykpeHNy4NcyjMFFJtH6BYsrhVsECsQ",
  "key23": "65PEt1zWgPr2gNt7cr4k1zmhT1UuAkEaLQSA9R5mveBp9mFSkWMtx4yCKtkrKqWp9et36A9NzKYM6b9a1mLrj7in",
  "key24": "5fdSC7okhVGVgt6etoUftgfBKgAAi99be3Hidkk7vhsHHQ9xj1VdkATyUkbCsSVeZ2wsRg7hJh9UaSmwRJsphaJf",
  "key25": "3czZ2cUyuNcs5iriUe8nPsaiJk6LhiJvne2r9TsyRWn7dN1mwQUQMhTUi2qXZf6NehJDcJugqgt1vU9HrU5Luax7",
  "key26": "2xaRg5qGaNQnBzqLYxmnwav7szFDjahxpMTJjJ9nu16dya72txYkeZAjnSP4xKzyidGyYyGUwmrWnFzkJCuqCjg4",
  "key27": "4o2QEQu3jLDyfMdFR5SD9yUcwKNcWsrWb87hABV1ttTcZonTC1HktUY6na1M16rYNfp5gb4bELD5cDNGq4JVjc8a",
  "key28": "5dKFwMNHjUfkXTVCmtyk7cd55BB48ojzCHHVySHYcCiQijFjzYsqUB1A3xFDagRhpSZZjrStNiU7YJHbQJrhN6ra",
  "key29": "36KnHmA19tswYBx7V9u4cCpbACCh9YCdLhWoB5dpCqfRdM6ekKwoEiwaQeKnhdxd9MvxFnR9QEXhocP8LzzfF9nY",
  "key30": "4R9E5v4XYgqStpJQcyKu8WsWJ3UeShg9aDiQHnKHsLDfxoD7MgpnHBbFAk74zhwGbKZoZ1CLqhYMV9vx3D2R2BzW",
  "key31": "5ymAsMWDtRREiYsQgSuzV7aKCZW651FkWnhbhM5Wjq3tjiainQp5iWPX97B7k49maQ59GfxojKisfLHYxwaKKQvq",
  "key32": "63jxc26QnL7pSokpY28xEYTdGHD9YDdZWQbBvrWY9e6GWLs3g25KZv3Hg9DggbafGFYZvTvo3wvha1HHVkyYWFWt",
  "key33": "kGbm8YKqWdccnwWpJgB99LLYm1zWn2B4N2NRW3xwyKxApW55PqP6e6u2t2rS1ieyoK8XvZajJisKPnVfjGQdb6H",
  "key34": "3Q41q9hDopMKWBARyqaZrK1rknkwt3T2EYHCNSaVwdB3TzNUd4LnqW7rRufn4EjBRBad7e2w7jCzi5Lcq9yZNoYq",
  "key35": "GFD48TYRgDDLvwfgisyfmqjtgZWawQZYRq7PvMPa7zbWTPer9wvWbh82hwQQxhutmoB2YoFqMcdUe1B2wHXmLuL",
  "key36": "m7r7c5cDKU4fZoVJeF4ou59T6ejM3SVpzV5UrSh7Neach7r3MNfGUGvapBbr5nWbD9UXZ9QpBxDErBsYc7p3FtL"
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
