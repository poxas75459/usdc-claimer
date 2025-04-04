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
    "2LVNDdLGpvHs5LegpZ6ioq3q2x5JciJ2pycCGHk2NXsFM9tkR2uLyXim9nh8Wj9q5NwcFZkyjE5EwfdktwzKtEJg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NqnPR3L2MdJ58JpxLDyg2d2c3uU5U3sSTkAKuMmPEHYNBjSodUDNyensD4D9A34QVAsyqVCavBREmwtn8FgyEjd",
  "key1": "3BWugZLxpjfui5SYYttxUZ9KuqfY6zQaTbQJdUwZHWvJHyaWHRsdzws6KEtMEwExM8y38DvpQDeryCGLQ7w9pzQ1",
  "key2": "2qoN2zpeCFwFHcLUu8JmRbQ4s6JJhskoH4bVSATDcM6mUdd6tTL6gsmg6bJdTYWzSBqWpjKdSDQr4oQhyFzWCHoh",
  "key3": "3guCHyxVFHvmof6onBC86ADHxoJFQD7aJoLC7xNNbjeBdK25zZitAuWG7KspjyPEzGfk2z3XK1wHzB3GFCYiFwCa",
  "key4": "38gnJEj65xtwAxx9M4bcvb6sWLZGxVEB1cZy1ynLuZmJEE79VNxBH576bcuAKqh14qfqocGwUA6bTaorKbEH87F3",
  "key5": "gU1PnRXPaqMMeBXF6rYJ3vGbtm3Z39CbFoKg8P95Q6jUQrG5veNEnWzHCrCfZ1UChxQBFCvrVjs9DoHYs12ckyX",
  "key6": "2oX8H4JauozpFmZ7YfBN6SSctPyLthBCfdu3GY7PVBzWzUYNYENcmr3dE7i5fMU3D5nMc3bDpNsicrrZqwdrXtkL",
  "key7": "3VSQsmHaqsJ32qmDzqe926s8YA9Phgh2agdKxdgNmkTMNAgRHPYJWqZUwwxEnGDjJe8dED3CG5k54uC1G3xZX7JN",
  "key8": "5hfw89LBQwkgAwZkMEc5aGzJQn8DRvHHv2Ue3g7U9tyWRLkN6vntZ719Jo1MTWEzAQvFL7x9v4e76G9bm8Mp5wZb",
  "key9": "2kuShbvu7hAZbSWA2BPosgkfVJuy8h82t1K8YQQh4WKm446vcpmieDYpG1JZ3h9Am3Un8wdGHx7Mt1zwWzkGTkwD",
  "key10": "5koshNRd6SFt9UU2oAGgGWDR9mRWtFj2tqrrKjUGn9XXbmWrKbFwSGdFMpW8PHyJiMaTyKi55VAZB39WR38As6DW",
  "key11": "3wzg6tSQzK7UZfkDtx3u1AH6JRq4RQ2VyPw6jwDwq4odLd9hpujVNUVxzC53wWKTpFhkTwznW4xaZHhsJXyysG69",
  "key12": "5unJihfXCgxUH8UJyuVEcxSP9kxWniqGp8hVQLbNjvzZjKVFcZW4LebeuPxvE6YxsgWZvmcGPStb7DsiUvkizHfB",
  "key13": "5sZSniY7Cqc2UKnrbMjBwWkvLi7hMRFsERko72ffELF2hcpqqpJvozYfwM5NtZgctk8o1BrwxAmAQZXoroJ7BECj",
  "key14": "2K9uyGCv2AASEP9uCFtP2ZFUCxnnoHJ4qj6TufUZkbBNkjPyFwPQZRbn7MaKXk5ZReqBLRmiaJ3doFducv9GpiPb",
  "key15": "4EogjehXGXrDq7MGwByWbtpiZHZCKahwoSqv6gJrW1EhcGCptpiiEUzte8CB151DNTDyKg8um8RFiL83hLaejoyW",
  "key16": "37xhvfrdhVu2oYrqQJCqQGaGqV44M51b3w2amFHifDiQzvFr7D5NX6rAkioYmLLQEFEfEtrf4vHCMs2X2ZBtEx11",
  "key17": "DtftQGS9ZqpToANfTaamGC1azgpV6XSdKnreRH2VNvyFovj4vA2ft4yrbH82F8cW93vYBSDrty7bb4irQK78ykQ",
  "key18": "w2fdQGTeVSf4h6zQnivWiRnLGKQPpJ1aDr16rKMsfZRntxxhEyxhBVoudvE3GwFQvXc9TkaAyeduVPPGrowT53m",
  "key19": "3nvpZbUWmip6n944D1UYddiDzKVkUp52p2UdXfqKf9nTtG5CQUibW6iBgtqvN9h7wq48WTHMiW9xw2WAV1zvgrZW",
  "key20": "3C8Lppp5raNBGhaSXDsbhzEEJyUuTtCNYHs5QDbduVzqrMEGx78znF6BmGZxkWuTPSiwsZM5FfrLj49mGHdaakeu",
  "key21": "2aenhFdD8tzsV1EdTAcfBJVdhSMMKv3UdjnwmZTzZGWJho5yvrVmvRjUFxFMcTMr7MvFoy2r5f9zmiYhCgxZNaRG",
  "key22": "2w7v1ob8pNqMdQiSdwijY9QYJpjTv9HLAjsayhYubdNgwCpoRzcPBrsrL8r1vkBVor6bqE4ks8WvoeeP27G2saiJ",
  "key23": "5FobFVXUhC6C78B9jZBByJouE5dof5eVTiDaDY8748tc9AFFnKSJBXr7ygFyco9yNLuLYKg4XfndicnFkaH3pDnb",
  "key24": "737ZeEe1phBwcYRZYa6QaBtPZ7aZTW9YbTvyiLNnFib4chExGkAKc8QfSH5UAfCmhVzqz4GbqcGiZGMtozrQb1k",
  "key25": "foGMAtyowfwKKTcmLoLjG4LZ7cYU2ZXLxbjF1pSgjWGsmLGWWaZnyRJcopwHSkhdRWZ7wYoYpZ6fNc6d1neAvJo"
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
