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
    "2YXgFt52N28G3SwENxrX7QwLFRg5Fn5M6VJazkziwUZArGsdSBKGGayifTSvSSJrqBdrCR5ddAcgLFNz278H36bk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2thTfs9AwRP6gcSUE3JaHnvQLFqVmvR5Vfq59Muv148hfBQHhjCnuPFhDAbfkJwtcWubY7rsZM4KnGRcytcnYAhp",
  "key1": "uJfFESo97L2mMorvuKt99Xcf8GvinG4HERRVrp2VsGHCt9VCMHQvr3bdKTMkKAmF87k6CynxcDVk6AfHTtZGjUu",
  "key2": "oMzNxvQmqAzHPR4mbwcYTmjmvVhu1ansxXTpnBoLmaSV6XtC8J9MRbT4v75dcu7qkkrfpXFXL32yd6aHWb6BzWg",
  "key3": "2uc7FQHob1kQ8xiY3wxZ6TeYJq7m5WEhgixSyPeDw7aiiivBGo5kcyMPdEGWj3SsA78jL3gkKWtcAaYvUZzUFFnD",
  "key4": "2a1kBSibg73H8bg5FH1J87SLmP3AdtoC9Gey5hTDXDJGShVe3QxAQk7gLv5vY5cSqsGUjDccwZUhihQPCji4jc9Y",
  "key5": "241w5LbtdFKQxstVYKSRs5FiWCb9UNtPQxWPXxERynTGxnqyibGmZqGwhe4nAd5EMRCFDF5fRD6CvxWDjZoKANFP",
  "key6": "2xAfDfmRR57TzGtSz8riVBGo2a3T5punCYMs65EawFe8jkPzFuUfcJ3pq2xb7pwJu45biEbsvp7MDzTcMikE4DnS",
  "key7": "21G9gr5Ust5er4aEg9zmRzCWTepBVTBLd8iTcKL3awgC1J8T5HVwvkSzBEhx4RZHni3K5G8TaWegbWHAXGAbqvQ7",
  "key8": "3Y9WExnKCzwanitDPrfLdwASiGqopCTSpURm1RpRKvVhqkZeQwBKFb6tpspm5BZ7DZRJuJcnujjySKeFwAcw6ph6",
  "key9": "3qcjfu1fPTnXixaj1Smo5kFq3raR1hXr6gjHpnEWJ2kLM4jPF4M25nm1wnzJFhGswUtXytByVYVJvBWfQXqxtgmv",
  "key10": "39xzWTAcbNkP7QzasbduB9PfFSp1As6ptXTvgmDGejijpSsMiuX52fCu7HpHBJHJyaj1jJXYUp4oWYmdxncjG7e8",
  "key11": "2cG8RZCh2XKZiQz4x2nBMuCHBmwme6a1VqTu1gyKwAgdDC8eXK5wpvxuCJ9cbDWGKF4ZxNAeJs7byH3vzvB3GrGA",
  "key12": "7sBB2YpDaash8FSRB1mX4KNkdDGgEVEpHzFfhM9vXqsGueuHgNaM1ZypVvKLuQyqSpfUcJpjaSHvJRrGcqdVzEE",
  "key13": "31NVLtHSTE3L2zYk9KZBVowoUGXB2NZAqFgEeRQjMMGzZrUReGrAEvgh2Wg7WJrZFB6YG29KJRX995PQU7pGegs3",
  "key14": "4sSyiAkS9siJh9aGs9d3hQrgMV5VMbid2rNARLHuPNyRYp3HyMTCE3wXu2wRUdsCzFvniDaNAtVzXyVfak6r1GCz",
  "key15": "2T3fiVzNwvjFVbHVRq893mcCRe9Anp92ZQh6JsVogKhPMeRi9X7F4zUy6AWhbvLhkMLw6gL2MbPQFdTV7a6fBMd9",
  "key16": "3jZ3DEJfHVz2Y9snH7xwiPhaPycT985A4aUk348Ksvs6yG9FeL39d1PphBNPdNkcbz9cUYxrL9usqkQK391p2qC4",
  "key17": "3fRSeWZdAsUBM3unasfQSbiofW26umNL6xtJZQBhRAXEpXX7T5YmnN2YK3nBLkQQh3wo2fc2Gp4gymFzeWa2ddzT",
  "key18": "gpUjyW5hRo1GhM4Vv43ggbk9UFjVRnqWUGC2XrAZBbQWXi3pA8TaJUoirvbGKA9Ndri2cXCJ4kh8f1jVGnP1YGG",
  "key19": "3YuypsdsDQ8ywY6GivxAcumLdAk3X2hZ68Fd6VjbG1aXLyLA9XiqFRTrUfbJp7eRUHRW27shxvdfzdya86oPtXpB",
  "key20": "2Hc6Rt1zucbmGS2HNkW89WJTQu7ApkSVgdkwM38xNkWXM3vNQbYBQ8syKs9J6WPvSE6td8EcuYuZQga2w6YXfYKk",
  "key21": "2i9xXyzf1uFMP1UeM1iEAznnKiDJPmtFE1y9ThJ5HKNSPb7uQJWuvypgFVPZxdpPA9Vyjh9ZH5HcDroqJ8gKgGhK",
  "key22": "4DobiaJHp7Q3Un4hfG45rzWZhM1Zu3MsdzQfdm26vc4zuamMEZVD4LaTxae4nPtimddSxanKx3Ln88rPEp7v4yeh",
  "key23": "34oSCKWadds8oxC56eC8STxortYgiwAVUpzpbDhkgTSfS54pxMCMkZoTMpyp4Bixy443oSX9cjzTuzzdD9XAeEX5",
  "key24": "5PrA3KGJdC6csx32htGsAQ68PpV9c1b8j2V5p2UW62wu78NPzgd8gzmRD2v3Js6ZZ6rzFf32XwwULn9Y6NkzKQ4Q",
  "key25": "3KUb6sY41Xx2Z9rEugCTsYNMQYebXBnxwiABXURcVPoE93w44XQ8zqvaRDJrtpewThR3GfYSE9KziHRYxbJHmQF7",
  "key26": "5xHVTMBev5xgk7ak17RF5Kt14zQYvhaMUc33zU5Ji2rPFyNT1WCv2iQsjnVfRxWznFPqJY5fGhLNoHBanFoVoMZe",
  "key27": "FhT8qLFomFAM6dXZ2ktgs6u7HbMGi4zF6N9VRU1GpXk4GNSf1mtE8FcwV5yYRrsZvfB79G362myE66sgWcQsiuT",
  "key28": "22kpbUb5X2y4pn5nyrQkWktN5UpLdEiiPNup3dKfXQs8ALK44mGNeEQVhxKDCX7PxiYuZUm61CmvBLmK2HLZXay6",
  "key29": "4by5YHyQY6r8qV5LhPi6KHGqHXt3r2PEcJXCvHpLL3b7gENWtstAjVjz7cPnWTdNqgvPuDWFJnUQD2SfJRheM7sE",
  "key30": "3KbNcHQ9zAia472GMYaWEvRFrKVVytFiC9XLgS95Eozm1vKXwQeoHZk2TLKpqDKSrvv8Fuh3X8bbmkSqonq3fpm3",
  "key31": "JyCn2E6jAMQRBhW5LZdVzGxwgzk3WK5aYySrP6y2y7yU9fXMaTT2wMV8mfpRFzXDaS1HKh1A9hX7nG5dAd5DyG8",
  "key32": "31UwkC5y7YAqjVmHVUUjaWk7kecqD58vrGBtC6Vj9G5v7gbvLkEe7U5jT5zNvWA3LajoSXxX1nhPBDBzGGP5ucrk"
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
