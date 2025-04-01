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
    "2oQH6poxkT7jYbwLDT4VNnaQUrL8Fgaf8QU1tKYkWhbh1VkyDiK98TrhU9Moxm1ADf3egpP3N9hp8d8JRLKUgohB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3citKHbcwjrb7TGqMz8sVnGnNxXjB3oRu3yfXX6xKQs6WApy16VgF8riPeCm44iQkuQEMpQpe9rpwkKY39ApsbdD",
  "key1": "64g22R6FYY1bWZj7ZPzFDLhQUujCLVKZJMrM6g66v692bugKsXa6MC2TwjTV1i4upB23Fogq8q2QfEJzuDpJLDfB",
  "key2": "2hBo1uBi8szVDiUMCqosV2hF4G1Bb4fnDZpJKCYKS1CRp9tcqHLGVhHD7q5CQgpESntJkw6BTkW2QjwE3N6JMBcQ",
  "key3": "a17K2wpwvRP55KijCqHxiAyNtxB488jT53BwrcqbWVpJa735vEnH4mSjwbg6Tx1Sz8V2D5GXcWqGBvTfCxGELLE",
  "key4": "H1YVQWkfB5LX3aECzM92mUjDdY1vhVrENhiyixiB4aioLBRnJHVR5ExNoq7KmH6LTMAfLzaZ3N94UqDjQe7i9gu",
  "key5": "NUB8yh8eSVVa6NNJp4qwh9zb6rXuCcNQp8SYLwKBXaxLVKRFXgiGR3DcFH5CQ8uNpCEXvbbmRsLjeK13rbDwN7J",
  "key6": "27DuM2os3PTHnGu3ZgMSSiL38qL8XFuP3BXqSKVvEGC7Wk4SstVZL4eAVrDxdQgpxJrbyJ1D8kkcJ2c93TxNsSAL",
  "key7": "4XBfBvYKQUwkVKQZGyT3LZF16aYWEkefLEwi6ejgnf8m1RqX4TjShAeJm7vUBhuFwAwhwTz7tJZ5R98d3f4ogm9A",
  "key8": "5CmTRQRMTRYcWThiWwQYz7MBY8YmDWaS5bk1h3Xo5VRTMPnkeE8hG7Mnghsc1nZMJtxLvzib7SRuvs5fChsXrxb5",
  "key9": "5XKfzopEbCX2Xcgn6onWcd1qZgtNA2wMW2Y5oUrEfxxsh94oL1eJHdVaYSoSWSRtGVZ5hpgUFNUP47crKFKbF7Av",
  "key10": "563UFCjqbq58zr4Ketxgg6U17KDCdYCHhKgTUDdkETpPSHYYTgnMStRkiYgeWFuMhnnvyxLGQ5SGAjVnHoVTyW6Y",
  "key11": "2hV3YdLdJaanvJC62T7tp9sidEaXHa3MaXqP6cguqy39p5gYL5hCCmQpRhT8FGsxUq7tHPgasN2SWg1FCrBL1U7K",
  "key12": "NWrRNgyaGF8mvcbXGF97vRT3pzZXd7tBbhpT7GtqniRoXQFnwwSThJh6L33qEnJ8NcJf4ues3Z9rVtrHHYUxPAb",
  "key13": "3i3xaHHTRwyg5ZcKdQzfVpVCaQYENdRu4S3LpZmvqFZ7iuLxUam9eCSQRkxQEVpBNta9TzsRH68f5PWXhJ8PYqM8",
  "key14": "2oLQ2wKUR4tzrmFgVx9ki8HXLvH9D8j3NYMqS5CGpXwT64dQnq57xfJxyVaBuWVELXKamtDE5ZQrbvgq2m2X3Rak",
  "key15": "2rX1XxzjpUCZiK1qL2ktmXzr5hwoTvzuwuKGmLFiFi211Josb9AUFnP9oD7G8jY9B5326vgwQEZ7AJP6m4AghAM5",
  "key16": "xbZ32umhqx7SFeC7xebGN2osrJ794faNzbtnX5fTDfKM7ByDx5Db8HCxqYoJEe2rFAvv2saYwf9rNHfib8sVNNe",
  "key17": "2CkFAzFhkiLat6CBubSmovGXrzp1qaKs3o1XvoyGMkfCsdgtHv7QzqvrPWSX44Ex2jKzZ6z9s3j9MBDcthkNGC5N",
  "key18": "86o8NUfh2ERJ2zNtMBfhUfSioLBfjoqRdBSdJufRqqD9VZfwXVTRB8QPUv2gwXqJZRrNwEZZqJkgnP6GVVJJEc1",
  "key19": "4E9xsmj5rdiE49ZFYgC7hEoZUFX8TsR2ZLydL96iKG812Yf4PcHQFn53uSZJS4ycbtKVic8LdKhjvMZwATESTeMZ",
  "key20": "5hj7RqXyFhHhpQ9wheeD6F29z4zN8U8n3z2uf6F943sMerz98wpiNpCqsXsRfYKPZpnUT5WxaZWZZXNR2sc93SW4",
  "key21": "3UnWcoSbWTVFXL4KyY7YqEwedgeZ5NZqotJ9WU1vDSdyuFTsDsuEUSczxV7hJ8VC7K6aYusSF4YmbA5nKMGRWern",
  "key22": "3rsyrVxczntEbLLABLTXWz4JxG3pr86JNEjoFcd2jJn4HobBU2Q51Z7s32KDxo54qbeGq8QVGLFjvFuz1WPkyfrM",
  "key23": "3jzjoNy7iFLSnn8J4D8uYZUA131J3b4RsS5BKR3ZfTZHuvHzx81viE1m6keJFmcMFBnHGEyX7Y7b8QyfnvsDcsL4",
  "key24": "Mh24mRLaazCS9Ho4GvcUky9qmDkeQYP3jWuqCZaBGhmNVrseGNiMuwYpADtx1k7GkKwX1bd2Wn4VLmAQcihD278",
  "key25": "5QXs6FzkXEuydSyuZBcZYTf2HdnKiSzyDtoVsE1pG4216ViGrg5BTzp457ycBwi8c9SpFMfZyhVZjai9GV3bMRmV",
  "key26": "2AB7BmJGtr5uNjTZj48G4pL5p3ZtRUFkHKCvTmKcTRk88ogRRNg9UM4Bmmhxpi57s43pogVbgbZSSUa48c8mMt41",
  "key27": "3dwvEgt1Luqq6T3Pg8SB2PEmCPb5uBi7HV59TnYPBW98aZVdNTYvoxHJWjHsAXnKnhptWnUXPaZzPDmsXb5Fi6pQ",
  "key28": "67ZnB7h8AESkmxbVksHmESHotsmiNvtgcErM6DfCLYJca14rYfZecRUD5ErmBX12rhXK8fzupzvsD7P1MAHzYCR4",
  "key29": "5q3MCVFtVgJUXKittnbXfAkrecth8wsJahUUpBKCN3eaJrZwBm78wjfuYHfNNnUERSg76VhPf8epxYSSeARThRcS",
  "key30": "5LhY6mk15HxFBEKkSkHyBC61oqBjdd2iutko9YzNHZ43uA41m3ZxiPiwnk6TLhzEvKCRmGWP4eKu1B1qUygG6wpd",
  "key31": "4ruaNrZwXYBLLpDYcxmGdLunUuriwkpTXpxLmPAPF67C87dgefXTmkmVHwUsjZprqzaQrAHHrwB2xUhA5QARQ3mh",
  "key32": "3s9LX8NDn5mQFaJLLJcD1Y6w4TMRYwbKg3DLYj6k9cyNvFs38nvtuvBpEPKqYAMPwgkQZKVxowyHVyGTjJGP1XYp",
  "key33": "MFzuc7txQq9PfrRFJGtfABe45qZaxxUarWUAgyqkFq27dTmWkuMRFb88urjo6YYjJE1hitt64uifxNxTthEjrCU",
  "key34": "441zCug98uxYS1yWFNqxMuaf8fRpWpeK2hpqj9m6kUFKQjUwcLtFiEzoAeEpDdvcvz2VxasWE8FMEcV1M1QfsB7i",
  "key35": "kdAQa9NMRF3sVQ3dLSkwJoGyKCUPPMk6zH4YrT6pqG2vDEdX2odwW6fRXzNDfTRLgA6MHg9DcmUvmDnaVFws76c"
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
