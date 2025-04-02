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
    "4HYHndQqDhUGCpLK8uUQ4LHtMDi4nPYCvraNRXZahizqHtqvEcnYxj5etygMowgyX3ekDByZCbJa1efkw2ikup7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JDFRgVuBC7W1SCcCk6UE75JDxWNerZAwRUr2hdJnRizu44GjtuumvMXsdR8xBZYEfRXfURCeruhXVN7hoFAAuvY",
  "key1": "3zdX6jRBtAdU7vQGSY7iuPxdjSGF998VDnqwudZgNNZ2qukkwMfR1rKMSsQ2CrHyd9YiZHTmqf1dhvbWaVrwqyQf",
  "key2": "2C5m7QTGXvPMAzGqwZchfwdbTQP5dZVYQJ1qn89xvpucmBo6EvjtZ8LUAbWmk7crbuAkyU4EjnHUwtVHFL9tCr74",
  "key3": "5nH8Zs3d1oBdUM6HVjwFbQWTaD9fSzo2BHB43xZRYVRXczQNnpZyuUG6NA8tzRwxCBfm95HNwz7XFvnyfpWgJn1P",
  "key4": "4GGbZ7CWWVqRmc9zvKY35YTRyW4vbDPVvCENuSVSEtntFCMk6nzWuHApn9iB3QuGEmbYx3veEw74pVRiukYz3iKs",
  "key5": "2HTtxbr9GhDZPWsWzJbXKhZZdwbzA22fSdJgjuRbag3RPENtBtseQZPdLZScH5Z9Fih8QuuK3hFJJ6riNqrzo1WU",
  "key6": "3dgH1pMpRxWixL2HiJEmKNQT4Kipas3KzeoNftShMYkxTes6B5R5tFQXr7djnSeifQYEwYXTbn9seKrcebYNbEum",
  "key7": "m6BCYx16ub6zP8fEd4fuzXF1zSPMa2aW3qMJixhb1pHmtVWCpyQHbhedCGLDa7AymWGbUwZT4pmUf3kDQ3z4uYr",
  "key8": "4Wfp9GeG7NwGcMMZrMm8z4Ew63MDqDVg1wrgPaMsH4mtBqRFHCqShoKVNHqkEUC3QASkdVFVuYZPX4gWpq7gxunw",
  "key9": "2JithStT8Q9HVyivbZX2fAEScwf2oqkA5pWUZiSS9AQwBbEzp6GcXehzkCDKpXBGuAVttiAEkWWiD5KUBDNg9iX4",
  "key10": "4tsHzVKtNZtA4VQ3jiSCaEwLVVXLhNbEtmQ6bDVERDPcSxnBEmM8G6WP9La3d6zgxYEqPeupp8Sb1yUG4LbkzY4r",
  "key11": "2koAUpfhDdVVSB2sYrfZTsngxUPYp3S2hwnZsvx9qBoH987X6PcMsJHLLbyLFubsLbKLCLLz88cTfHr6JDpsNRUR",
  "key12": "63Ewz3ox3TqajHZtAULbRDDzzY8jHoBQVDBmgu2GMnjY9EDL5tXH5BE3HdZfC9sBzfqydKMbZxH8iJ7Tpi9khXrN",
  "key13": "452aySTExhpFo6wG4Y3zAEro93KYLJiNYjfdK8b1qrJm3Fq3xs2p9dwNru8bHvHE6zvXeG95Jtf9DTeeQ8XeDU4D",
  "key14": "2dNqsNrXUbojanXpyDnnBgdbDoUH3AaCJdtuL8N22Xutuom9tLpFbDE9WBmvoA9cg52VbkyVxYN4xHwzweDtTE4C",
  "key15": "M6gYFimKh3EQFQ4XxBJCTjTdfXSP4eoPSpLGTaWMNyD71XvnrpWUHor6aytnuEH7TbEZ32yVWczXELq2qVL2E4f",
  "key16": "5CqNtFQaxP6WLjejKY3ZS4T1gCUZzvt2W9PPdL8HEked319yAW7ZdupuKj9RtgF2ht2PtpW25TZcKL2MPL668qHy",
  "key17": "3agt1r6AyVJTrMmW9NQP75iQMn7WXb29PUw2xdADoeXbXmRe6AxkVh78Ex171rCKCqXxmJzfMPu6nVzk9UmeaRr6",
  "key18": "5MH4wZWkw4JvZxpiNwRZoESoR4Km2Xyb16hWpQhxMiG64itHvsdj3HE5TMqwLGa2oeMuVjWiQJJ3bJu1e9kVSBk7",
  "key19": "2YgJfapEvMo4KpqhLf8BSXXMs8qRBYgJWbsmuSmSfhS9zAtkWjuaWYi32S2kAzmCBPZdRe3FYovsoG5qJXZxDNkr",
  "key20": "4WAA7v79r1ohrQMtfA6z21JvSEJiYfkZvxJhgR9mztYFcFK6f9e5HqfmiejF26TbYvXxZUvpFScUC6YWgTmXjbUz",
  "key21": "twQ8aLTzKNYRKHz1vNpkixPX7WNJBDXmasygTaamDw28HW5DbEJcGhpQxd1DWx5h6z2iXGe712V4rcuRWEajssZ",
  "key22": "3WbHtyJDEHqdg2NtiTTht77UVb6D9ZVvH8JhBhmTQj4eVAtfxZ6bPWVPivkHTSHUYwLGA9y9LiMLp3pN2rwANywE",
  "key23": "2FoY3rjJdbNPDAYoMEgre2jqnkspQKch4cXGpYZK84EeLh8U3dmjBcDYRLJ47E5ySP3wXXrMcUjhvK99xgpm1Pzv",
  "key24": "5zNuEEQcBTmXPdn8PKQhHgyXTNdfaNgw6Fv6wmfhcf6yfge4uNCXq4RbandpqNScBURFqKGBqzhD43RhvHtodGNi",
  "key25": "5wDtCjHk9PcfHgEJeHzFs3mAjKbXZWYkgCsMz7azAq7LwKMp26VSYS1BMjYmX5Q2wpAfqXoATC8MEXS8aafRfgKN",
  "key26": "57TSkDg5jaVHd7z4zMdPKZomrpiYTKaCUGPdaHyxj9jXoNvvZUguxuuXG5ooPUpB6wZty5wnwZjp9zpFLg9r3Y6C",
  "key27": "4oDFSMPxdTo8acvpjgjLcoknS9NokgGSUb4Zog2rAKafYZBT74tRdRfmYkcayuW1dBjQ2ou2BzsNWxgQ2rF8s5Df",
  "key28": "353peF4mrb5EiQK7C824EgTLcn2ctkZK3mXvPBV664LAeU3Z3cNgCmzaNQBdDMzz3ctAB2tJC82fhdQT4GWSM1sV",
  "key29": "58wSonwEMBJ4SgWRJtP8QxFYybtv2c3xhcNF51EyRBqeLVXWzPmqC7kAEHL1EhVHWkMJwRUBazn8JsvqvfF5opu2",
  "key30": "e2sWVxcwJfQtHuUz5CnQdRZcpqnjqBC3cdBMNgrbR3pytwHLHc2ueLEpkapcXkanR5XkcMXoB7fRTMmbVAVVHU7"
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
