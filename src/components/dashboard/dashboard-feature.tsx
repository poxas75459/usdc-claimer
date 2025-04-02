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
    "31aU16ZppP6RoVqQBHL5NAPkg4ENytfZB3foSWZUK5SMYWkEiAMSydKbVn9h4RCxNseJ8eVuRFbsMZpb4P7PLrsH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39KTz1fASWA9roex31YqYLsr2aVkRrxbYCHKu1RXabf6iRNdMbgwZfohpWMa6R4a6L9RtbPyymX3QeGuNEmGtDuz",
  "key1": "n2RAi4maWnncMwzE8yfj746feRw8cfBZTGhGBDuNuBgb1qzz2PCASHicZoucGKQN6nywx9NXA5HWfbczafdmZXx",
  "key2": "3k9oBA9RafFMB4QyG411vhkFBav6k7EQK4svfYeA3uLKnBqbN8QjsfCEUbXHBLRXnxUJTH2kkFc5wPZ699E968DV",
  "key3": "2pPwSYe17RqCH9G9h3TBjGUhMb54yKW2tfMhUyoJAjZ2HH96Ty7g5s5hCRQqeY37XKpPCo86B3ZNFYr32yBuuRET",
  "key4": "3TFWKKwoeDBhPWoxH6dJU92Az4KRFK9cqZeGeS2h71XZbX4k79ipdBs7ZjLEhqunvHXoFKpJjBxbKmCTXcpvyfLw",
  "key5": "61J36pE1kGs3HtJcD9QbYAHRo6u7X5GsYBTNLZSmwoud4hqFEX184A6DmfZXdUc3aq6PwS7Qyi7JMePZGUmYoyeg",
  "key6": "58zFWMQc9YszAjzyXdGXor4vEbYqpSDGhEDHin6rpesmqzrNJjSHRqTuo9iEhbtbDgTdEfSnzbWk37qYimuyZ3yK",
  "key7": "61N7aYiSmHNGS57GRDVDVsiBMupgpKN9QWvSkqi8PHF2uiNkqChGtrHEeZuSQps6VVz6hCQm4d8xyfNBjkXTMpzt",
  "key8": "AVnrCMrpi8r48UFqAzXixC4rjPtntRe1v1dibj4LvJPLdckpns4WLFEVVpUTSweJcJ13ukjnTzowYDYEjDLoQTS",
  "key9": "N2j2XxvKijHPgyNMWkMT2qaT9VYjoQAr2ECpYJ6SZbccCBMrnVPR9dtWi91mqgX9Dfaj3FBdXgLmJYVFkXEoPE8",
  "key10": "4hschkpX12haQHYQLi3ApdAWhgaBHjpLwRgDTexW3gjrP4p2iPuHPYQd474D1ActhtgVLrsT6GJdBSdHES3MdYPr",
  "key11": "58C8Y1hsuNnicgs6oH7oZ8sWyqQ9qA2wrUYmMYTr2q6VFBvTYdNjg7zQheQHZoX7wbeFJCDc4X1foCZ55j4ffNR",
  "key12": "3AzvG37Ut8UsJtuAC6MZQNwNGgQqGxgB5hecN6HCR2VSguGnSFzAnEzU4ZwsFeJ5PQ24JJk7736G67KfPtxP5Hsv",
  "key13": "3CbJbxCYGWd3JztjKwxfALSr2as8VvmheNXKTsgcTtkKxFJe22Fh2uGzghrhNrGjUhSEo99d3cbmxMWJtbacQT8c",
  "key14": "2TCeDQnK37pnqBvCKASAkm1SW2ZgxahLhzDAXCwF3cNW1XeTMFgdn6p7b2BPQdYp75dczRSWPhUR2foFeFZ1cEDv",
  "key15": "4FongxtGRxKeLbLHiW2uKKozxC1xZMG3z5MS5tNFX8bFRYztUJRmdQpsruqQASQSZDi6c65fki8bLnV4ySrahb5m",
  "key16": "2zJBH6bRfsmdRmiqSXoudWHsPLfJqPTM9iQgT2RejVQDbXCogqdDjqDni5Qq1KTpwjNFaqRnH7ZFfkwmojR5XgjW",
  "key17": "5eTK2vNt6qHHDR4jigiLmpK9z5aaiPJZ96NC1HypYD6qL2rwJgEt3PuUQYY8FjEEyrab2cjEigj1dirusGaqEMQS",
  "key18": "5xqDzQteY5Kb3StAFCyfSffvAA7RWmSxfzrQL3dydyoFZ7jakadMREYGSVYErFVUMWeB8aPuxq63V9qo5DwL8PZt",
  "key19": "3aQAU4sDiXVVgN6eXkLKG2BvA1LyKvk4JwxNg6RsGGqV6jiLR4tww4AfjWJj5BPQKYDx3JXxZ6Ro7mzuqH1egiRm",
  "key20": "45oo9id45tywN8R26ftyZHcBYW1YUp8FZxyFBGP8usFvuPBdFfn7kPJh5xTydwZiECJj4StqQamZfHzCvpgR8Ngq",
  "key21": "33QQULwBw9ZhgLiPoRqWWahZ1N173ny4DkZf6mVS29dxa1FSHfEmNPB67Knf1gdKqLeD886pdYvPuDvXFhhRGL4M",
  "key22": "5f7wHnWrAdaqhQMXhqXZT3JFdTe2jJHCqBdGSiD41juD3w2EboacakjeeYTH5YT4dmsmr6n3KMm88XC49JwFg3oT",
  "key23": "3MygzNL4xETvywaiDB8Z5TV7w8W53F8iGBgsRcT21BoT4QsfoCn5yxSXh4kMktRDddb3YsAZ2pw2bb2ryDwP7Hyw",
  "key24": "3sY9KKzNnZQUScwH2KULHWTJfbvpJCCj8M7czXSGbe9zduHzUYSJDCBUFGmUcPFLddmwXuhNpS9UZ89c1MiHXx2o",
  "key25": "2HfZ7xnYzGmbfoxs4VSoKBVBff79PFNyVv7tXrduNTynoqqxaPLmnT6XDmaVyLBM4jLQVgQHo7Yt5wJLL8BKZWud",
  "key26": "3ifLx7Yhne6D8Cd6vWBVm9ZDA2YD8oQUV5mX5kPo2kyafJQ7wvh24asZLCP1UNjFBTeBPCDE39Ynef73UWhFxqWn",
  "key27": "4yMgu6W7JymwK7jm6StWHiyvaimsnYuuvFjaZXEPsDfitCZ8VLN1wiKpjuMpHSeXgfK6AY6f7ZU9DqfUvUCiG4qe",
  "key28": "2r7omyqKgD7xai2SjR8onE2wHTpQa95F6uSkS27bBqPBvRstmQUXiSNuhHBw9eaum1MKmLWpS9THwNe8rMJK5Bs",
  "key29": "5A29DnynXuScfRK8pKAm7RsZssntAEvWW7u6wWxhJpcAS2ikfs8wW8nn8tKEs6pbBNcR9LAvzb6wiArXq3cBfcoy",
  "key30": "3345j935BQTMM25phPxD9Bzie2hDZ2r9KeBVAJHxtVRWqEqEJ1mwJ9GhcriVrLUYKBCvDZvuok22ESC9mSESriM7",
  "key31": "3986E7uoiRDgFzg1e7fDfSvRnQ2v7Sfu6t6858zSQMsKPNG193eGJdBCCyQD2T2zdm5686bx9mZe9Mf3rk8iQzXX",
  "key32": "4f2vrR81u7ZBbD7Pwz42VNjmJz3RhFaF9eBiqR9CW5Jz31gSKWaAup4TBx55zAPw5fcNGLUkowXNMFfjBJWszke3"
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
