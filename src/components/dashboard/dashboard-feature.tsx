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
    "5FkVfyDzuPrkAwwvTqP3xn7Q5JJwBs6w6w9uF7qJq3WzHZR1BVEBMzMb9cTv7hx4rWEA6pdj8XBCtUX1HDR6rExY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h5iK4TDG2ux5d1Ak2oCjzkhaHYXPH3ubqBarLwAZWfQf32XNyJ4eqRtu1MjQRxAQonnqRy4hpHzd9JY4RXWVryi",
  "key1": "3wM93QHzwsDWsTWm63bgmZiTF2KiQJnw3Hzs5GhGmop6VrN8m88vnRA9BkLqdNeCv9FhvqwVqhBWtU9cLHPhyfra",
  "key2": "GcvbyQQb3xPACMpXhxdTi9p6pFR1yan8SHUdBWQNGvFowM4BGc7oPRFyv1bFXxF5smkWwP5pqe9J4X6R1Z1Cgby",
  "key3": "qjSCdSS7osoEdkhiuRQ3wZfTuzGJoY4XprPN6duewGv7x78WRUcAbsnMgr23exgAbJ4HmfaCs3g7oLNNPy23V16",
  "key4": "4867bzab4TMeeKKriDbBmUAPqRsgShYvWCCSGYdpEdeNuiTaEJyucuEHWaoBqKGXDwoVwWxAVhesoWyNT1UedaHU",
  "key5": "5dYewqNSAq3nWkUFKR6HFAwkjyyg1X7ogXJ64nb5hmTm5NaH7vcaS5XkPZVCYDgfxjdLGQh3YPghr328hVhMtiRN",
  "key6": "3xJc1sGBjZaCu4yYcFU3R5h2GZh3ysCrf7ZCSK2Gi4aXEAMjsApGngR2bPAjbPyXHezXZPXztVjXzE4BN8gUmSUS",
  "key7": "5NzKY6C4L9GNVRwbTeBjDKKDKh6HsvsqRoEU6W4FKGUTuGHccZJQstVNFVGhseCFzNW7cJA7mB5TvqLhEcjqbE5K",
  "key8": "2VjPA8HyykLz9sBeZMFU39NaPFZT7uRJocyfrj8Qq1KoW3JVuB7EsQKmrLGKYEpiWf5tyqCsjKDr1ZEFVMpg9Gbn",
  "key9": "5iHWwVkhDRU2avr1xLNtyfTWAr4zqVXhXddHJFrgnGkaW5QUpn677YCJQPeAD9XkuZdK5uuAC5L3FyoSGtZf67oq",
  "key10": "JYEr8U85ViFH2PcBmRUHF1qQ4e2jwhZkaj9ZGrfz7RYnrofvWEbawC5CYcsQPBCHzZjnYTY2i1A4kU5BqUQiYbF",
  "key11": "3wAA318uMvrn7ehTnEuAbgTDZE1VGbLkcx9TiLqksSvX5ztMnFx9W5ABxQzW3JnB639osC7JsUCMT4wyAwU43bHN",
  "key12": "wYVMTKWrFPPVhpdRsxPjLs9HqkmhXoRz8gsyUhit731v7mUrPAnLmT1bYX3LRMLnoaEQpCpcWVxGQThY9mTjxVy",
  "key13": "3rxs4s2iouhtfXbTqiQEdy6TUAPWqb3VkWGhRgVe77WjgtqyRDsn2HpbFxPYihiNsqSZfayTy6fZeTYRjG8nwwUS",
  "key14": "5sJRqKx7i5kSLWFVaHah3QqujT5zDwwe6DiV4LsbjCwhNZmYairGQCmrcBJ3YQkMW5QwpZW28d6ynspdKR2SQJHx",
  "key15": "Su7QcpbzGfgyWu5mJXK1UJEKYF6jAksJqngqnCvK4TXutzK7MhdVp1aXaQahFETD5xbHW7RdM5dAnSAEprgbvB2",
  "key16": "VxGX8A1cQY6gX31quN1oRBX26poU9Lg6FrD9eut1XYnxZUsaHPaC4d5YuPY5CpHmoKyS89ZTciwt7HYHJJa4BZ2",
  "key17": "5HGrM68tUYUhc72UHNSjcD6axZzMy7rLPJScWs8AjhUmQ2VUvdzmaz38kNx2k4ETPT8X5aZy6x3CPpNjxrqpPV11",
  "key18": "iz9vTgkgVLQK4DpnmmPJANjbRp9qYdjxMcEK8Uj5myTUzsRz8gkv552F6VLif9mTRjUgCeoriMhtDrsdeyj14Zd",
  "key19": "QWQFtX7P8faBvhD37Xc4xhEVsHYYqfLo5TQfWnHUC1PrCAUXjbEfUbTjerL74LoLYrdbr15rrq7LzMGh2biBkdw",
  "key20": "4jUwkbsdTEirHmBMQefmkvpLM3a3xWW9xhLkbXsHZumpCWPWDYm2YfK6fhJaSb91QeeH2RJoZrFj3FxmaCjfzdUJ",
  "key21": "3hDYk9HJNoGe5Aa9vZrqP53f7BTVp7ZQeXgKw5Ty381RtEVbxAAPBmJcqYnBF1dEBkGyw1DjzxxeB9voV53qQMy2",
  "key22": "5n2JfEub4fyfy6WKmZ248JTeE7sPJC11AJR3HFEG6d36y5E7qxWEM4vticbyyqJYtCQGbW4tc9c8X5cUW4fUskxP",
  "key23": "2cUvZE3Rzq51xBUjro9bFW9DXCKLU6zDGkjqXHZcXKBn5TEBbafYsuNb8Ld9fSmDHRZfAHXAteEHGWxzyTp8sazL",
  "key24": "CV3JDercucrQiucyjY9HnNADcTAmJKBp8GCie2tDEAZFnuyQkRWLoAv91P6djgjQVi6hkNQqod9MDDvPmQec3pL",
  "key25": "4fmS1HYet5aNbTYVxVaD6USAU16216mqAsFu1PMCEfrZtUbRgkVtqK8LnY7rVLQoUtcGCbhsEyBBznGypjfyQXR7",
  "key26": "23GSeZxR1Xqtkx9VLheHBGdTfgqyeCd6mmgVxVJkN4dDkZpdCJRaZFgSsqF9DkYe4Ld4d8Vbu8vMdwmFBgeqoy4e",
  "key27": "5K8t99hzZqNH73MaimzoubRTHtrqkPCWufdAxq9pyndqHcLHgX2RBzuxxou1XyXvyzLyfQcLuUzSpJ8ehRJnRfoH",
  "key28": "61YJeVyx2ahtPCBrvPzBrSoFVmvdErmZj3kcUzWGBw7d52BtTBsrZR5wjp59gyUVMp1nbFwEHEUAhTQ6brDLLx9g"
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
