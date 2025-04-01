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
    "4fxFP3pT1Q11h4asWyMjfs9ECyBU42uuaQsYfrvWbyxgfNK1zQAgB9c7quMY68fio6UkyqUy6zTtpGzv7Qo4vJ2h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VAgyt7ZjK8DybEAQ1XN6yssYmfYMw61XWLoo1DSpWpvYHBRRGiZTcmpsfrQCWLY9Cn3saf5ZYooYTvpxckbGkit",
  "key1": "rpxSWcgtTBYkusLvkmk4mHm8nKJQXQBoweGfwE43nu6fSEkVQvi95t5WJ5RqoPCidmsmqvBtTYm6UbpfnKGoY2L",
  "key2": "34FdVt1LXJsVZqSri7azRHFfBJpRf1akpvPXyk4foy732jXpJUkgVWaokuwWzbih8jR6Qr4KcY2t7wEpbTHQnHo2",
  "key3": "FoaJW4pHr8hzBvbhMUV5n5xnPxQjS3JPrKJJncs9iYBERwswyNt9tVYdww4Doyc6azHYXNTbzp4fBcYJ52QiFXf",
  "key4": "4uDZViEThW4pG3mRo7avwSobqbk6wFkgaEYUrCGpcrdGwqUiFzRVuAXvdnWhRkydjV5CsSJtnefwvob4cZNdkVEw",
  "key5": "VwoHZnbsfwCNvQ8yTpvz9J23RM4QoGy7kZzT5APfXKXjvjjgVznYcfXSjJCgyHsW485Sd6Rxb3uUbtQtuUhgjZH",
  "key6": "5JeFmF7DKmYqLQdxy2hFGWhuvjercikgtpqGUwuV9TgHswVqgGMT9L6dUvdmStoXkgHJvWrXLUdUSqJWpisNi8T7",
  "key7": "593JQvesFFSUTQtd1gksH77gygaReR8PBpa17q9o7jmhktxHzDG57MUwLHJ16HmwpU4DFC3a74ycjhDqaj4E88m7",
  "key8": "5mDfiz6TK3qiN1P3CBXrEmuXTp2x5zHfUYbP4dXMsEvBFAX7PaUmuNkAsz99aYYeGJ7sY2yNKnxc52kE6Lzk8iW3",
  "key9": "5QSW1NNEFJVqZpFkXfUXfX4HucUoGrg76VQdMKv7supLv5Pww5nbsZtYfWoxJcQZBaAyeQ4r9iyxTuKWNFeJyo5p",
  "key10": "3VvY4sNx1UfBVprXGLfE731NEo2d9byMjirRftfA8J7ABN3HpjWbgfAUANawk9F3iA71TRbADAo7bvUbHwtFNH4k",
  "key11": "3dqupYFf4xfpsjSmZ1KphJTMc3bCYdnbNSxx3gcbTpNm87DhBynPEevi4Nhi667g3F8GMUGDyAmCLYrHPWF3ib3A",
  "key12": "54g64P9SZQjWaWzJ4LQ9ivoXHh7CeVTMUNa6m4zacjhpFj1MX92YDP4k65sKf3G265176QhxDZNB8JB9hrMwE3tj",
  "key13": "3tvMbSGCHb4TSNWwq31kZAdxsM4gKWgjR8apugpEfRCQDZuhQDPv6nUezoM3tfSoy2sBwtsNU9VLzLtm25iQAEKg",
  "key14": "e69k7Lwu9avLZKtrJAa5TEtCzxeB11YoiUxAAYzvyVVNsgk2E53sQ6wXLEqqqQNyMoSsiSK9kPYZYexQdgGbKvq",
  "key15": "3zA4KqNevmpCUkKyr698QDvENMEKt4aAcXJTFpVBJaiLF9ZeH7dNJrN73jwv42X7uBdbaqpkrktXPJFLU3YTJVUF",
  "key16": "6UwJHtCdV8Qpqxco44ELDeNNPRpeMTMgNXqjirqYUyvAoYqNfELMd2DojJkj7hNKqiysxtpXhfYF4SdZ8bbzKnw",
  "key17": "285G8BENwhqvjGrsC8jYTyNmceHyccqGV6ZRVxbZfnBHFfUrtzkGBF4xqqVuJpQLJv63iPfMwLUGQj8ZTPhcsLYe",
  "key18": "3NwB2SXJKCkdAjkSab7EGgjwHtvSHCCrmMYnZehMD5E541YQXsUkej96bESEYZPa1KqoRR2rMuyB495TzfbVYcpE",
  "key19": "2dDabwRt1UKRonNbv9TV2U5Hf5LpcNervQLVNSBrLa9rgfuqrWKqnMVFgMfJSMdF959VWidFaQZMuiGECVpNXpz5",
  "key20": "ZpJzSsskFrAmVAR5sy4mTRKjHUrnLsYZusVoPr51gWC5XEQQ5pUg8NH8VVon86XreLxgLbVNZ4nX1GsV8cAxq2w",
  "key21": "ecKkrgum7b7vJfF8MiHaLDAaAQcg5V9Ve9SC1wjoHacnwrqqPz3cwao158BJrV2kfUm43jCJNMeUPSmqzVeiScQ",
  "key22": "uUwaQdWrNtspwywXbKvEp6ftBp6qK7pXWA5cnKZ3Zqid6Ep1sYwi742pr2Bc6V926iX5vxsHkLSRDEYkg8jNVeZ",
  "key23": "58gEaB6SezQq4GEbpS1dE7StXdg7dZcUDQZSXYAvnkBi2Q1oVWxxFmLNRcwXNvBsTw93eSeFdSYYGHpWFq2aFfpn",
  "key24": "4FuGbcxDDVgx72B4jcKpT68d8974vmb6Tferm5TyNBfkUVnum5HruZDgS2SfjXERmGfjgdnmsE4DAuTj2JywhrzN"
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
