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
    "54H6B8iBNkVUuhN6VcrH8Zp98Ejgjij5KEAQjuXUEi6yEoBQSykhZQXT6JieueGonnPh57P2yh3kzvaKL3gmrWBG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2skJgnCtaveoAGQh3RC6gDhTsp3rZmBbFf7r2Q27RkdsZAH4KA9KauTAXpso55EDesZ5ar3yxp49Ct6GE3GctBm4",
  "key1": "2j8cyoF93Cc1okXZSfv49i7rsavGfx3NtJqMssXMzvLHYyDVVcSbEhoRaf4ryMcH5pemQMs19cggkyQKvXHeFauS",
  "key2": "64uJR2eSEgA2s1A6GaBjZd2Qk8XQvrsJ8L9HXD1NyG8KWtrYWPQroZQ26yfS6pYTVGDiXgz91mKMfyUKZ9rLnwj1",
  "key3": "8Nxv7vfssjk6TZTS1SUM7AJcjQKnfJjcJ1sLDocZ4C6h6bwzCb5HMBZPcd3UWfJ41J5KiuhnPMSRhtafxYsYyWn",
  "key4": "2LyvvdahdQ8zvi8NUKgvBCicQVJkjZb1eXi4gRZ2kuQ9oYEbgj7Dog1ZjMXQs3yCJUgTNHrEtLy5C8DGwmPbvPpz",
  "key5": "2RAG7sc8aXyPVoYZgWJEY4pxsdweStMmVQ2NiVRvYwTbThLnGA4gsbGvUfz6RfXdFaQ54D6f3mXe2mnMQdrxy3M4",
  "key6": "4GjnxcHLR9XAFa4GLU49z9kFAoCJEoBticdEDJnf5jGx9FtcpYXaRRskdiSCoBKwsthTzUUrG4r49VTUaDsSWFhM",
  "key7": "5Kgf3WLovjvAB632zKCjvrFmMk9SC9wvDQbU5h8YkRuTzyKzd516AWCSdQTTcQhS66i33SeZcNDgdgEW8cK2p41H",
  "key8": "5xTeFC2KMCwLmBu93EnnAWupkANyesEXmgSy3GzzFYUUjwty49wAXYveb7w8EfLVzEmWwmkypRaaXVe9B5u8ntMa",
  "key9": "4VFGEQGRgozQv6DbehNyWwukLJEFFFbZdCnpvXjgEYfjgNGhKmqHCDHFUUu2vGvS8c4yknhiSPMhtGhNi9X2yLCT",
  "key10": "2qtjXFHzVCBnFkdDRK77bnV1goJxRSvQqciM6TUtZMURc6h9AxDBBvh398k1t3VfdELYwh3KAfbivYXPZs3BZRnL",
  "key11": "3NaxYa5iEihB9bpghWsrmePRi2cDsRwk7yMWohYAKAm3VhiBiJCMMzisGt1dHfbS92dW8Nenaki3poGkRVHfxP6r",
  "key12": "3JsCcAzyXsiwr49zbCqub8guMUEZwGyQndAa6yXAPgP8mwkZGGEKeQCjQUvkLYwmo6yxviaLAYZ4s1GVkSx8ZaKL",
  "key13": "2MVL4umZCagsgLCNz7vTG1ndFu9Sp4VqPAnPfeQZuMtThNE7JbC9DMxFeiWmdg9ztWLfHmMwuiY1vU1uZBzaid8M",
  "key14": "4sGSvQLygWSMUxao8hhnBSvMmbVzQN5M4Gai82ZZJeff6K8iw8w1yPUUdQw2ux3JqXe8HptdpY7B6KcNdYnsva7d",
  "key15": "5XC6oBRYp7AC3D4pZtL8ZXnBrSDgPhyyWrusYRVWox2QdHuywxaGNvMh79p5bkijCcaetEogv59miPmsvAY9i5KF",
  "key16": "4hD7Fk6Tggrzqh8hD3sad3XJ3kXAp8GV4hdrizKaFLDvLCVA4UJ87DsQzgk2ukUMFbEn221hdLTsaFfk1dMUNga2",
  "key17": "4ttSPhsqn53ZiQWxQ3BsQPhU9girAVmUbDGFd1Z8RXRYQCc9t4j6kVc8GXZUU4jZnB3TGZih51HeraQwx7KSVVPd",
  "key18": "51n2HjzoVjmHCWbcUZPGNK7USNpKDDyUoANVdGWcPYVfsyiSuEgzFcmWtFyko13Z5SY3n6m3pu9DmoubXiYXNX1W",
  "key19": "V3PgRT3iComCRtjE8Q8Q9dox1d2YkSAjTUmg4JEBqJCvqapdGd9UqtWv25FzwHLbZaofUx5RqvZYmcEoJvpRJcm",
  "key20": "4RjHuZPEd9ucpFePZzgxfXBLbAoyC14888M9Hx7mWyWw1tBjPcQN6H9CEdgyT41UFaZkEFL4GEs14w5aKj8d55E5",
  "key21": "3qJprmtiEspLQ9L4fRqe4LTezQwAUNzefqpgUcohs2KqQ1CTZmoqaf8KxFYypcAaCYmLQUnyKcAK8XWRwpcfzYkK",
  "key22": "3c8WYkWATgryFKGHRHwUK523ar25xybJGCWTL7aVXKWPfadvzzafXwMLwfGq55KRFUMU92YfiRzt7gCQ3t9iMARf",
  "key23": "4giE4xHWgdg1aLp2sZmDc6P1reY2LfXaSM2Ta4CRWJXmyiH8gLHjb3RLVcKGBeFmnSewhdLBzHxR4xkxwm1TpT2Q",
  "key24": "2Az7XZKHauo41hY7qgneVjfLvVGm5BZLgCbnbSmZ2bz6E4yvVPFLV5FNVbRbu3y361VeYKMhpm9XGRR4XtYjz3ta",
  "key25": "iF3KLNJGCD9F7iMRT5uBgpBAUgg4tLUDGbQd2rM1kRvTk118A8NKqe6D5Ctynq2awk7BcucCbENvcKFUbgvqE5Y",
  "key26": "3uJui2r6Y3L1gjGyyeH4J9zRXnk4HDccsAC8jF2kWGusVbSx8Jvp2rsvekMRArtozzesrHocyF6Dcg2YSHzTQw4k",
  "key27": "5XsyAvH8UTGu8ZxDqVamRmtAN7cuGjSWYcEeQ5SkynX2EtUpi8GvaVFAUWcqMrbUrHLPDJub7CDFkYDxSkoPkfu7",
  "key28": "EvLFDhH44hKUCRMB3vszGU8WPBkuAVmJKX6VLfxNaFMxxCZEqXQ3BPUUyynAXZjQWA8VmzWzVUE6Xuaqht3YeZY",
  "key29": "aQ92eZLM6PSZv2iMHCUvzHVEgUn2DAzzEhdBdD8vq5tZ88B7fWeAXoqNcntMZ4LSf2BYJUqd79rGNxRdruxXi7T",
  "key30": "VtS8hhHkPjdTpxEu7iBXZDvRA6L7q5ybRExsrrC3KWKDrDKUpJpbjrM9BFSFr1fzbzEYA1DeEa1y1snam7i48xR",
  "key31": "4D86N5uJ9ab84FaaifoLe5AXbgJCygpuY34i5Lhmq9MXqJx1FSq1euaM8CawF4kJ361nSxMqhHgWN2YEiTRoatPB",
  "key32": "9yAjBFPUqdq5DSBP4HPi4ASQv9MJfZh5zRRZWxXSL8P8EtnGZ2r7abyHoxT2zJwwVRzPLQrUzwvVJfmZ1f9yHSp",
  "key33": "3osLCLAXRdBQ8Z9Yw4PRNPQ8G3f4g5jLPpDgXXVgEcvbtPJGhjnYLwCZTuNg1ZQWNtKA6Z9SutkAgVJUDE5BYfjT",
  "key34": "2LsBGMhNnno1VzHhZgvFyb5N6orWSeCLVFJBFmvKqBVx4Q7VVYug5FYKt1YyUhhumFAPmzyTPesCMgxBWk1jv8GG",
  "key35": "4VZ6oJ5TAwJSwvT5iFtt7yAJib6nHmUZoFxrKvX5TiEWeRcyDxkU8NqRvxRrWxsrfqDwBwmd615gp7U3pb4966U8",
  "key36": "7cmaDkRr8qm3SMsx4YNTpQRp4DGdWG8LgAw6Uc1km2yrhQsZwq4LY9uhrPii62ZYK8YkkFLtosYxvpWKzGMQkm5",
  "key37": "UKKPm6W6JRf8GsdGtD3bxu5qxfHKjDWCPA9XgmxwCKt72cgLW23fM5ZcfDB5Sz5CWkVWddCz9vwBcYpMEdxpxKG",
  "key38": "37sgXjEix3HkrUwvxTjV33RmLntJYthxtSckMz4Zz7YMoPVXMJrtgzDE69LyizaxQ5CicR6xQ5Gp3YRiMqdg6f72",
  "key39": "645u4FEHYjyfxXd9AqabE3NwTs14LbcW1tSXusPeSJVG5nF6QVTBr8v2WNTFr8QHAXWnxeYAi9dVkBEzLZ26YkHP",
  "key40": "2kcGPboV3LUgigdPdWRFjv5ZGJMPDBfBHUC2XAwtgPksRqrPvY2dS4ipP8vd7zZqXNvwC9wHaM5KCNdNgn7B5nde",
  "key41": "479cAivUZLywG5GZHfvqdcgfpPVLD2woCiCHdqikbT6PMq59zVvTbUQCPWkFWNrFXwDTkYofhPVm5GQRSy9Ymujg",
  "key42": "54Pis72EJUqRDcg537YDiyor1Uh5qKhW5BWXEwPd6mSWSm3Jxs1a8wZSArbw4wNeMMrCQQy1BNHubqwBWsFJcZt4"
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
