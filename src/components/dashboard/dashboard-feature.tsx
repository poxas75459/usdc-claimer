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
    "2FBSRUA1HqFg8xy4Mj2zZYTwXHZiK1EEUJd1KiaDSmFRFSQL9V7zNw6hMzvQ3rvCuKgKbZoXUCGURCmEBbfFGdbd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gkNSrkQgta8LWYNPScFReKQJMhzFh8vkdh7ygy4eigXF99pUwoU8pBMz4uDV2FSoX2bDy9o4pZDaSJxHVAKFJFs",
  "key1": "4EeGPFRkRUtKfRU8zzYnBy84m8VHEJWvtuva8t2rpe6AJwFzkxibdWgSVFTAfs7Fer1bcdBVmGbd4Cq656S6HmDE",
  "key2": "21XWAiHw4ke9Z1mNFJFgn2zdt4mU56yh3Sq7ZR8ocxnYHpVVqMWF9agYodSm3fSLt6cschJpQFLjm317EYp1ZSkx",
  "key3": "uprbKRPiTgTGRDWoZumDCh7ynxp2YzMmLnq3it4kaPnv42auPnckNpgiAHAbtDpnoYf5ABkUSeWeKJgaJKfnP4a",
  "key4": "5f5qYtcosJF6Qf7QXK9xptCAGHfK8EgQ1DGTPy38Rv9qhuANz3JZdcMxGNt4SxirApnbZbp8Y2QxNgzUwKtoe5LX",
  "key5": "46ewakMCeDRV4QKave5bAKKM4zuLZ2H1u7h4zMjVzoFeV7HUtPjW2QQkWVWX4sqFnZBMkqvYUkfsF5DibbRrE9V1",
  "key6": "2ka4Prh9Pj443oDmPeSQ1wnDZuRZ3PRQFH7bc89eJQH2DXVCjv2XEbvQFgKdUk6aoWbbz6dpoCzLx7g9H4BfP1yf",
  "key7": "3XYqW2DeoxYFesrktuHTvM4DN3umbyFXnxh1Hprdvsk6iUotxwG4RDjUPp9kExnn97nh9SuMJ866Rj4ecFfgqVCe",
  "key8": "3ghQ9ZwkEUpgn5Xv2PMWMCybiRaCZ8DxGyqUc5J5cchRGJpnou6PknNmGwBQ7bWcta8s2ZfWYf7eNuUAsa29Yej7",
  "key9": "3ymCn9a8R8zyhj6hiH6hy1nDKVvzerap5Jwcbu3R8ik5JxBt77Cp9GZy78q2ks1oqnuMMrrJTgJJJegomwUNbN6Y",
  "key10": "53gPNJNR2ja3SYn9D81fKWAfnApXVpGETdFuCkVgxY9jbVAj4MfhwH7DyraQksTzaL39bhBrmkodoLLnMchke9nL",
  "key11": "4XajgbchBnuqGvF3tQJ5Kdra7YobMziyNo3GCpB8QpM7NqWNV3gbFojdWeAPBsxHFK8n9k45Wg9exHpbczyMdemi",
  "key12": "3rjVnxsfbux2fZ2zDu8DGZuETRpp1QwfN4fGU2bKFGWb2jQNimhwqUfHcuaEfmiNP2z7CQxqRsfYwiYzD3djbDFL",
  "key13": "2deqQiGg58nRUYMc9LQjjSW4YrZ5sNqzMYxFY2hBwMoGxuVLia84ZSqZiYouonynscUMuwMT6BnZSvSMdwLj5kNb",
  "key14": "35N58rG2XBSC7Q8ukVmzfGgqccrUcWRz455Rc6UUeTEV9hSfUeBxc187RL7f9S1VLDPyzZdKVTzHZYBqx634pHKP",
  "key15": "3yBp7gp9V4HrbtqfEqGcA6WL37CYpJBvzBpyNGSL3h1KGa22YEQPU47xyJNEDma8vwVhzai9rT71EVvpY49t2bwV",
  "key16": "5CYtXMRUHEZHNxcYHqUjnwPmoMgBH9PQcRy7ZiFegWTKu3uRo4UxR7F6Vqfp1ES9kGK2L2Y6YVY7C2rwzf99ijZQ",
  "key17": "2R5wisvios1C7KA34VDy8HXoEvTMv5syHeHAhaftVMmBbMSgkaFr4wRZT9Z4FWUrTQfHM8rPWptC6gshV6mVob3h",
  "key18": "4GRUTLKBQbwa2dMzsQdZQUTtPS6EKhC2rmPsSXqjHaCPPfmVXKdJrzmy5sEzJj9mmPuTWAyFiuLyf95NjgxgRB8M",
  "key19": "2W332niJgYmFBZbQkbnVLranoUK86scBPTgco1Wn1eoqJJYQ9yG466piGg9EG4RH9u8UZaWkjexGiYmxaRwDDNXe",
  "key20": "1E2Fez5GG2wLcVr9k3JZx5VAYsg53rW2aMzfNm2pJxJkFoCdff4jBTLa1mon1d11rZZRphSqi3CYZ1BvHqRz4S7",
  "key21": "42vUcZvhWanrePFTwu9BfTuQHVaQfZdw5mQaLdB6nHDRfiokczz7sDcZK73Yo2rzNQNFUobJSbppJE4Yxw6GhhbA",
  "key22": "3GxH1mER2pHwzkUDnhxv2BoNgLAyyYwP8vK75W5FtwRojkSbvhNiQUzdEtozvQeRs15uMQcBD9qU89XuXQ4GhM5g",
  "key23": "5fxmis6fT9bciHn1AoZ4LKSSxaqQjbfr7pJ4dWGXjRFCBerhmT5NUc9h7NdR9gWqEV8nXvWc93SMTfQRHWGp3Trw",
  "key24": "QeEKhf2oZDjic6DMovFphjwiFPp5FMjTfTDvNM1m6jTKeF3C8fWBqkzeD5p1W5dE16TRuaTULjQpc5ct1g2DRCc",
  "key25": "3HGMZi2giRP7dgwJRMhX6kPTWAUeZsLZWWkjyjNPLrkL8rEswUYvw9eFeVq3eyV3HRwwJqYpgb7z1b7qYRQzCioR",
  "key26": "FtGzLHaC6YpdohR6epcC547jz1A49ZrfGWP7SuGV3fQTZ62mJ54vS9mW28rEG9ngRtM82S78ygiUcnXKgpUMtB9",
  "key27": "5uS4Q7pDhVsLiErs3BWN6RzZ51eA8ajeSrznq1EpwF919fbLpYFVpr4GXJbvyhLy9pN9HghpeTKhvEuzS1JHQ3y7",
  "key28": "5eVgEH4DTUVDGzUYcmihgGivjzy2XnUFTB3d3sjYqaHmoJTuktnC7E81AQxQEt1RU5RMwQVJ8uUi9mP88bs8tqiq",
  "key29": "35z3KPeqpogiLJhS3JgxNgTxRLcgcTnkuDY2RL7DpNT4qnrpo1dHhJeeUCs1dDKBvuGtoUaRr3LqcDmX9dNHZdkk",
  "key30": "2rNwekAAmfDcEfrg4aXNNrV8a8TxVhg5rdew6BmbJMcmaPBvs8CEAccn8yBjdRZF1YWhApqhciw9XbUzsTSaEiss",
  "key31": "2Esre7gSeynj1b1hFrym47W4KQUuY8Gc8ekLZY5TTdk3HCkxRB3PjsrHPfjiW5jr6yKpfjUcq8z6nRSZKTCrJKr2",
  "key32": "51bUypsEXkjS67ha8By2QX6XVQid78trwqDFGXDkL3YcKbTdSiB2JW9tm2NaPFomA69EGMrtRWrYgmyn2QjwXvfT",
  "key33": "3v9YRehfQNkyK4GVvbe4By5PiBDP8wKXWDYofpEWwQQsSnfyi4mmz6fR1rNUaEYqFKkfubSCdEFLxEUhgmMXvdDf",
  "key34": "2NAmGnCtcvUNxpBTDtyt9UC23x6NtJc2TgtsvT7ViiS3zkhNZc5mwEYxLGWqxebWEyD1eLh2mRv2MtcQvRrBNXVw"
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
