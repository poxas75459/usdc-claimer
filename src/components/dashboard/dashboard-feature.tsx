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
    "52zG2QLQJSDf1kuUJamBp14z8Q5ZqoDbE3xye1mnmtwrbS8F9vHXDTB6E1KSGxpaiAyutHtgNpAt5w3eu17epDVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L7jUhW4HfVKsEBE16G25QweT3kjiuyUvRMPFNE71TabgM1Qer8BNGqzzSZXSgYMAveQnbbAEMy8NxXFTuqxr1RY",
  "key1": "CZEpxbynNN5enfbjMVgREsKRViHpGBU4ZiH4C9uWNgJBXw9YPDwDi5RFegFsSCpKjU51LFcWUFnURrXWicjkfYC",
  "key2": "2q7P8rqCSoU5PxZUo6m1uhVR5ddQRS4QMnJ63sXjMKjUWwXTah7VJSZArEqA2Wnts1CDcGFRPSskdy4MUxk11Q1A",
  "key3": "3RDNmtS5t182MjoesBKJy2FBBs1DQhfUJruFkwWkEynR66Jv91qNuz1MKCVSZJokAyYYoHNJrhVyTiYUfQ376r6z",
  "key4": "38ujGDdu1rEgWQNyweYqaV7hwzn53Uo111rZ2jxctia8HG1F272gcnXKHzmkhRH3pzAN5aewnb5C8nrQx5r55rLA",
  "key5": "55SGcdLTxhv47FF4HhCzP47oeE4xYEdi9Q4ff1h4MeDwScUJ8Q7U9h91sm2f2q8CeMNA45wRXqZUgjuTE8sx7FMk",
  "key6": "5ecqgdQq3okVnHei8aDTRzAcRXUa8vdzpkUqmA3MWv7jmdXuxHbiNtDtHk9Q4E2SCa9cKXmcEdbYyT52PJJTBzgf",
  "key7": "5bZFsrA5Ukn5xjSTaY8XjgkMukS6BrMMbyWpniw3QctphNwmGk7wSrLokM3JKkSda8KH1tGtd51TN8wR3mkRpzh4",
  "key8": "Z2TDabwZTZy5SbDRwMwGX7ue9e8KffhqbCuTroZKEd2T3FXr3oxgtQB4c52CD3akUH6U3Uu7jFnhLERRSSZFXAx",
  "key9": "4M5P8Ddur9aCzGHUTwGdivYBnnffKiTKaeAZoxVFyAM4bW1NmQMiDeLfE77MrVD4UYqPtBHPRbZVnZDHfBu2nEPd",
  "key10": "5AEMBmre9HPzQ1G5z4DCs7YMWdgu3wGb7tJ4feLTfFussnN9jqPdnMeRDBn5dcBLYYKQJ6MYEzaaJLQemBMor2PU",
  "key11": "3o8abgywY86gt21Bour3HHqWQSvMTj8EAjSsyNKZUY2jLRK42sbL9P4i7aH9cGRmgHwMyPY9EzjWBuSn9upguLfN",
  "key12": "PvcUC79aaKdyDsmKgTqR9GnBzM6JoDte5xo6jbfjAwfBbTX6i4QftwyHng6nozNzaNyfJfNZqcBMvsBFC65JT13",
  "key13": "2RtkC7teE7zq2Hi1xuXk3Vdwy78tmbKGCfaZMvu521mDQLUR4DRi2ixyfNC2kBvCRDqe5Y2gceKMaWVG7mk5cMw1",
  "key14": "KwqfbNPw6WrnRbwaBScztwuvR4QgdJ3DXTBxJKk868CSkrrYaAJtWZAyd1enqmrYttXFXnXGnjKAyLVQhh7vEix",
  "key15": "428Ukpgsh3DVrWwcZNxiFztkkFPKCxHZEeAuoDySrvGV9hvGqnYotXGoBwcH9WnstzJ4psSczZ5WzcFTSNajoAbZ",
  "key16": "3errKzpdPUuZArst4HRKXdZRUK18JVjmvkXrVxF8PRrVDCFL4p1STMEcrp7LLXasvTLRhzgLb25yZ1Qka1dx9rxm",
  "key17": "4mViniB38kpJhdYdctx8kKMMNkuYerQZJfgpKAwqsC1KRxp9stLooB6Um8dLdKteAx1hnL5kjqf7PAVxoHmxsD3q",
  "key18": "5kpk5LJLNUxEJSUM9EzPQbB52v4UHBnBMBcddosJVMc4RDN7RPRQRs3WyTvVcYbfRe4k3KHv5v2aVPF5ZqC9g5Bj",
  "key19": "ePqgcLAj7mefLuwm1WthajCBNZBRTw9U3YxNjPiT2vGAXgEGB8KdSAMZBAecctUAu5n4cA4xHKUebn18bJ3dVgp",
  "key20": "tpWCTxxYiU5GF8KWMaveqzhRqsxaMVCeqJ2yYG8KGMf2ntncWu75ySnwRMagg4CgRNLpaWqJ2Wy2ZkxX2zGdYaS",
  "key21": "44pKbbt1oPd58ahjjLF189nMTojPkHdR4hAztH5etuZz4jrd9HShgfcRnvBbkEGDNZruvd3BBfUyzEftXx9VYppX",
  "key22": "2X671Ts226VyTZE34BZNKDhN5fMBimDk6RrbdELSMsdxDprzXLQGPkcvr6hwKTw7FCB5DjdB7tjmhF1cN65eo6Pa",
  "key23": "3SSrdXF4SU7Pn5UFk5EbbQFDh3wKzwmLQTieZJWUG3pq9cQe1A8Tj1GSX43skYzKJLF2BDKPE6tYQnHNFmPym8Ec",
  "key24": "3b6fMCiC2t85TvYg3rmijh8No1XpypxZzZqj5JMZH5JjL8AKCetQthpMY9RHY9uaxQyXrwFXY7gaXjyyu3zF89gZ",
  "key25": "9UTn2VfE1PamSE2zhTaVSeyAtkXe2RgNcBRJhVEuWYCUtwNaRS4ZmS2cQn7ES4mDoYcWSBKxAC89xVxxxp8BHqY",
  "key26": "3XXymC5nGtmfS6ibed5F9H4QMTcG58sJFj224i8UJY7iiPZVVaYmZTP7bi5yVVQETu9izzaQtM2VoKzMxbzHF7K5",
  "key27": "2APxTHoZEFAFHUDDYY3zPkjzkE5gqeoszFRjxj9PfTtqWQ6sjRDDQis5r94kTqN9tefpzcyAoYbjZmQoheYY3otN",
  "key28": "2J1uNrQawTgJtDRtYf8JCqcVFGx4g9HugopyaruGHTWeEPjMJuKbscoKg7xrY9ivSFMob9nVv2iZ92BaZF8QGXvK",
  "key29": "3tfEr9afGAoj32Yx5N4tpxEJQnZk3hALqtuyiQY55XqedLpwUSNtMJ83x4A7DvbyF2hGeF2HFSE6GLwCSHcdB21n",
  "key30": "y7msBDRex8e4zpXb8LhBRQgiBkZ9pEUkEEmmXGFpAsxL6Q2FRMG1Z8uJUhNaRr9AX3MDjCe1Nnmytxwi8bqkyRo",
  "key31": "7MrK1Mi5rtrDo9bjGFnCMC8BbwnUvykG5gEuESrRrxrW3mH4an6d3qRPNGFHFj8JsEoKvLjfVvPDTkf8XfEYWcV",
  "key32": "MG4NKHh4zWFadkCUGmud72zi5Aistqxwi8x4g7DitSqzUWx6oyPBij49TzTQH2pFfXNHjJyevSEyBEocQpMxrG4",
  "key33": "htqrcrBtffQbwmoDpMfALFqvjm3v965iBvoU7LTmxa9FrWyPDy5NHipm5z5NDdoqk65p2bTnb2LtSFQ5TMabx52",
  "key34": "3GdW421VjNhDe3rvs32PQG1rVS1qNWvVmkTz1FNg9R7DSN4eu83ohwq7WQy7Fcyjf5cqabN8gKHa4vNw1mUaYBru"
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
