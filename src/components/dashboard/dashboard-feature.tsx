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
    "3LC3d4Ac3CLKyE54UuCUEGS3Q8upvvwirwdx5RLm697kEjgFYeF5HUnf7MSzTsnsApiz1q6PXboit62DiZtEDdBF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N6kotGkyz1F22PHggNKgMUPfHVpkbed1841t44SN4v1Ag3GvGgAh2gbcdJsYaXR58hWWBkZt8Y3kXu6JjdXsBdX",
  "key1": "YJbTxoWGFV8uvkKKMDUqrr1iPLxsauvzJz9SPbowER6g3Qa1k45RkpBdipTP1zrygGYVQwfyp8DmUKr4A3tavUW",
  "key2": "24LKt3u33wbDzzvNrFjCj8v9ZX2rar9xkxm3sEFNrXA8Laa494oADAPQamfuMXGPeJxevBLcVyAKWWsnj2PFo3o6",
  "key3": "9ZCXfJnDSZP7XwbNgAdJjgpAaxuYA3fboQksipMG7MmraPd9V3WS17tNpSu8NYY66wkbe25Vvv6Q8qJreR2jHtP",
  "key4": "5Sspmo3XXk1344x3ZseKCvitDXnP2Hi5o9mpxRa5hqhAeRqv62dsGwtecpt6kBHt3qHSF6if5d2bXfHC8PmTkFSt",
  "key5": "3py6rcwXx4YwTQZvfF4dJTnbYnWS7tBLH36JNXqByUCJbz62Wf8WNqPzsD7BJ9K2i85JFRdiTQC5aq9jXw8eh7WH",
  "key6": "3hECckNQZyxYBQG6vXUPrEsYmGNDCZ6BxLdFeKxrHCC4Ff4mY4vu7AZfmzCcyuwFPjhv5wEHnzRDdGg8bwkZVyBJ",
  "key7": "repGDgwJdPdKL2BMtsypv9jGrgoumMCLziGA9Tuzwvse1AQbo5zTFtStvKrxrU6LzgZs15BS36uTnqHTGELJF3H",
  "key8": "5N6K6pGxg83b4xncHPKsSD9mh4QyuhdpQ1g9GuLJF9nniBLQLLdpypp3hKswS6Xpz8yrnZtBctGaHneia5Pia1pq",
  "key9": "5KLwUHjKuR47cFidpydyNBXwK1pZmByNTcP9PocaCoYtVo3PNW6cByNX2KPgQNGBL1Hnigm86c6QbLAmuAiC2nDA",
  "key10": "EjDMMFW2kUBCfCA5DtRYGRTTRvbbHsE5MHeQQpjgBVzP4MMmaGcQsRK5cWuebHxnuU5Zd7jRKdoHDjiUewmCthG",
  "key11": "zhLmtYzLvqK4BxfqWiWbvNjdqUSSM5pEfedUEKeA7gvQzoP1qdpCHEbQzPJeLEEnyBwP9gCHvXj6VkB5xwymDvK",
  "key12": "3aPeoyoXGGu7CB1DGH8HDP3onFrn8wxMhWA8phwAdcs8yfxPbiHGznpd1iMGHwT1KN9EjyaX1JaXUzhbDA4h1bA9",
  "key13": "3k8DHhtK6PygS46RkpGL4MUYBeT5tgshBuBhcfDBK3rpgFjbqYSa8218vzyzwtPtFzKuuepdDE4b93AkmFdb8F9P",
  "key14": "5EZDuJ2A1YSH1fcPTAeUvqmeFvMjz9bPBvwfAQ1zDpTxrCyi6VWzWGdZyuWNVX3TQZrMuudsNLUqrpsFDeMMq6A2",
  "key15": "4ytS7okZQ7KKLcNzPvZ3qpoVr8L4MPWFEkXvBc6taZMtvZ6bZd9KaV9Krr3L3DyVcQK8eAaPGaMp8bbWBHsAQnym",
  "key16": "2mMaZ1NkuXvmUwD3zKsdsFD8zf5SFD3reuNjeveBktwKKWhWVasGM85SP1gY5qWudsntmG92nRomQfCfefWWaHCM",
  "key17": "3jDTicDy61hkBNUkobWm8ZVWYzALnXVL9daFZTLFL9pnduprbpcHWK5wZhBXBei8bH1f2KePFaGdGFuXrb82zGni",
  "key18": "4U9WFGT7Ey1hoU9neVQaBnbUFsF6LJJKACDNH77FAv1F8qT6mcATR7MXL1zjNECDuHFq68LWnE41uDq2Lg2SCMtG",
  "key19": "2hJQuPb1zr71jEDrhJk8oRVKHj6mqN8WvLYUShrpprrZGw2PjcX4vfrye5CN9QGf2Xd794eUuo3abg76iRUaaUwn",
  "key20": "3FtFW757oM94Kf8J71YCciARdTXzhmJkUYbnxwx3WVegjxhEaUdT8NPuerboNbRSCN4enkNoCRLLS5udEywjyKqb",
  "key21": "5iS3GQricMXkvmsFerBvFkcKdjEX2hCoweesaRhgc5VvgkeNeJjGDMDQK9mYML1DEYGqJ9Cudi3p7iqj1PDmu8oo",
  "key22": "2PGvr2Toup1QYr79esZ7PiiXyAri7ojdUVbvBQYZ6WL3vQAU39AxT4FJi52YNYaMGKsrpBi6dwfuFdaPUqqnHCTN",
  "key23": "57qtUyMajCXC8PGb92fDczGTKQ4WAKcZwWFjKdWrNmTZ74ZXva7vRavu7wwvCR1Ph1WpRe99pSjimdbeyJNfHhbb",
  "key24": "2KDnyE3Uzdt5nZHhPN1gbR7tV6876GAseNiarNHrU14wmF4ciPqHH9pPkVLG3dJWU2q7dhob2BjXaN3DFNnSVYVh",
  "key25": "2r2c12RjH9zYViqprzcEpVJjkHTQxhRiAFYVc9h4fEZmXB45fZsZZZd2uvTBwgW6ionMF8VJ4TDQm9FQDTkGSzD1",
  "key26": "3bpxLpVASpeBGcvFAjjLnKiVwypw2kTNzFpRoBMVRFg8dNUD6YfazZbTVJ6CBHiQeHMBJ4cJqd2eAHmZZwxQ4HUY",
  "key27": "2ZDmtWCrk8vHHPQ3UNdt7vPRWG7gV96CWQtdA2YbjMLz9Jtn3b92BsuoUE6ZS1yRJPRnkyMx7K8AEn3bESbdKjco",
  "key28": "5XUB25qckQiEP5FJuJGtpJjKMLkpBWVpH66zijhVSYPNVDgvyHUdRDXPtpBzw4vuWPu3qzDwGR2LvBNs8DBZ27vs"
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
