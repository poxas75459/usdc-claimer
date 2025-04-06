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
    "5u3Cg2eMNrmf9j1f51JZdC3aytitAv7tgPjcZ8SexQKApXi1X5pCWHiB51nb6md4JCupjKur9hWJfhF6z8Wt9gk5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vwF5ttjoyzL2F93euRmhBjNSzGY2iao1gCrH9AVRDHfMGLKqZtYoSpFvZ5BYqYr3RwQjc1xZ42JpGzpiJRQcisF",
  "key1": "3CC2D2C93fwqNaUKJ9YwxezWGxaKHKo9ruFv9bDrwKvGxAE9yoJd4mbjqaCrTJHbmGuCMJHRBW4Gz1871CZs7GW9",
  "key2": "5QXA1LfEBqPFomL9a2r7CfLhDxaNqJqNtk7tPiY5TQ3kUWHkwfEuEQzriWnfj5dqTFxXQhe3KL62ZpLpBZ8osXX",
  "key3": "5mY2qi9LDhXeYrDKNDb5vXHQp8ui7UgQgQPw3BMH7b9sVF3RDeFN38M8YRJHBamwBvMDECWtwMUKyPnCuEZpVpem",
  "key4": "tM4gFsjYZx7fFy8rfNcGd6V3PeXA7Yik4shXa5nfkeqP71ZsFbsCVj4Rbvk3zS1jzy8EnJRBkmS2G8kuGLyCw3W",
  "key5": "gfK8MXUg68XSbeGYf1tZtwN2RkgL6mMKqtsqoPW4iTNTY5mFa96t6Ltao47vLZnGkZxXLPBb8ETE2x9KLCYCEwd",
  "key6": "62mVZfWikVnJgMFFxp9X2gLYWiXFnLdyDgN2H1J7rqVpuSqvaHiuu9qJdzsUg876ZKAsy9K33vwDe36oQk2SVWKR",
  "key7": "NXU6sDutABkzGxxuGYQmDuJeXZsRaTLqLoYWXg3baH9qa3GGFgYzZ4TrvXQtbpTuBgjuyphEYpt48AnDRWic2yL",
  "key8": "4jnSzbKEFMSytTZH6rb5bQgrLcSpf5n8MZyBaARLxivWVLvQbALCF6pfUh2VPHdbH6tufr6nMAEYtNaD5E3bgj5x",
  "key9": "3GzfJtGEntEfrvoU4DiKhKNAe1q3ECso5faZCaxuKdxeKsJtMk8LMR6P8hHfK4StTaSmbz6mpKiCQT1PJW1r8ez9",
  "key10": "2vMniowRp5JTCe4TtWua72aL4cXHR42VoTGTP5r5AMqivPUCbCfXT7K76JGTNeED5n5gwNLB99ruzt6SbmUjrkCh",
  "key11": "3tFNhHw8LsrCNW2xL9rEfxXZ6hawqsdjrsbRgByaPcPgdHKqtEUi6cb6mWkWgiovNY3VZnW5wRvXCLHhzT6khZY7",
  "key12": "44PVgLyXX6cHwDPyNpmRDZzFUWguvjjmJicNzdqJvPYMVYPz4L7TNPkRZ9w15Z6H9nDixeGvAqrz7UTZ14ZweBrk",
  "key13": "HMD4gGBPcpVwYfQJQWfeoqYYG6s8UqQtf67ecw6afRMbD9J3GYvgPhzmGGR7mxTW4xDsbwsiB2jzjc81bWpkFn9",
  "key14": "5cfKyjGjcFomddXpAzaAx7xqMeHx8mEhyZkWZtiFJX1qBF8vNB9Q2oTC7FGD19sqZwPyLrTSpNEjrBJ8GzGDva8G",
  "key15": "vwMq7H8KBCx4kVBkp5E9m4vPQy51RvotK7UCm5AFmdpLtFkC8wEGGdCN7poLJRHw4T5BUu2v9GafqBiLzMcanCx",
  "key16": "51Unq64zdTK8sFKGe7L3ETMq7VU5PTLdYQq5rHgeNGt5R1APA3A2WyXRudojoFW9zrqNCanDew7ELBcW2cN7fz2k",
  "key17": "vyUbseiCuEGdqrGGSkpQKh9jTGUQMypoC1SFPhqyrBcc6qQXKetovrARD1677wDrNd6qySqwM9SKpHFnqkj4Qkn",
  "key18": "5Db1pcFSm7YgPjtLhED9h21Z9NUfgapS7wgSQAGwfi57pWLWvGrXtbgcirB9azi7yXawdLuh6BoZJcpGo2oHZ4t2",
  "key19": "3zVT8et1z41D2DqKZ7CZfJ8DTdLwMNNyCAbu4NdCnAxWYyYfuMc327L5wXExix28gkV5PqNn31HGkVuu47RZzHAc",
  "key20": "2tEWDt2Tpiy516VuzkjjnoUfz62FLFnWuTmCqb834z94dgmSbz3pCwxgN67JrkSAsNUSAbCwLTsRyYY2GFWGsfDf",
  "key21": "5stAmtfivN6qT37oxwCtRTEXWNxDm7QQFHSgNMneRZZkdPLd7RZ1N5KUGJFEpUUP4AwKveS3oF1JBqJAacuihpVF",
  "key22": "4VQHRoeyLWBXJN6bGYsYo4JfPMNQSaECaZbznhhR8GFQbkzfvZrRN2HjZoYHHFksjbcABYUVppszn4zJ8KKovFNj",
  "key23": "kdP8jnbTZmiHKCb1T5sikBZwDo2PkfShmYJev5hG3gzK9tRtXVPvyeBoT5pjMqRe2rU51v3jc7kLwY81a65narL",
  "key24": "5FX1a6xkbFcGDuQYTwFo4epAiQHuDvAfqLxsmXpd6QnPmeD2Q5AKfvUqZdBrtXRVAb25Et84qSNnHJSkoEqVD5KJ",
  "key25": "2gwuwa8vJm9X9k9skJTesi2Su3SLM4RA4wuKAS11TUkTCdFWrNM8QRi8wVDFFv9xHq5meY9339c48dMZXGfzPsvZ",
  "key26": "5sw3zbVqzyB7P5RCKcrbfEyvYLJG6C8PTD5m7bWS2ookE2uQHngnworXKUdxwPemg1zWf8xB7ZrbtswWvvQ9GjdF",
  "key27": "2KH5nuVUQtDvQJzuR1rfjpKWLjoWmUaRqwb3q7654NskYZaJ4SDnJsjzazV93qoX6qZcdHJifpHG1oNzvWJR2JgN",
  "key28": "4w9HQduz35r1H1D66v9YcSNwxZkNFEDtRQSb9HrR9yqHKobj5X73eCR2fzzQheoJewyM3cGwKinbfm1q66HbhyJw",
  "key29": "2So8W1zTYAWqkkNd5kwoC1ULTfxd2o5TauV4NZdPFR8koCrth33pCAf4zUZfsr658kALzqn8WsimsLjXHdhuTKoh",
  "key30": "2w8mn67p58V1ch1SFiZvvvhQKyvAfT1RKs2cWiijgy1uSmej1Rm7X1oJxcMZ2VdbPkCfbZ9b1QVHW2Ba246ATpNP",
  "key31": "2qPrDHoDsGq8yXcoQfurtDpoE4aBzUdnCiH2UVdJH3reL265z4qhZksi8EDj7wN9comYhg5nTJJvCKFYsxbTyKoo",
  "key32": "2sKFpMSvvA4CKn2PciUYnAYozHQMJFoarxPxTUcEvFcfZpcrnNAU6jXdPtoWvJ7kPq9C4iRGcxGPQ8D83kFeAZXe",
  "key33": "frN69S9NnbuBJMQXMkmwbqw7J6yVSm3dKwbm7KZ4QezUoSYqaQohUG8wY7RMyt1s5gebtuxcw8DjqB7w3dWmvwY",
  "key34": "57A7GBXU9XgnE5ZZGiyRNGNoYtjDcZ1bZ1YQzc98yjk5pZUYgFjELvnM3Z8mV429d64VHHg2bR6KtJmT66bgGXP9",
  "key35": "4MaSwumnjM4rCGFBYy9zE5t6mbNVLSpEKRrYsUXK8NTeG2AFfnz1sfW7wBuA5EdFEZpLgdHEJdc2hCL8PaK8kqLd",
  "key36": "3radAQtBrALchZUGWMu88MYQ56KWPt4fNYQCyW4iixJbY9aUbS53MMaivcVyn8T2FSWp59hPJ9kGgNuA4YAVCP8K",
  "key37": "4nHCenNw6pQKqzPz7wnvnCBPfjPGNt1UuyqNbnuZVbfCyvPVRTeN98tfxMWHAEb4qEboAcSsE9jD8gZ3L6zFNiA",
  "key38": "4YPA5d92XoCWkhe7R4BPimkqCHet6VJ28ESAZPLURvEYUB1cu6xcqkT1TiHdNhLE8JU199og72bnvSjhoBuBmxxK",
  "key39": "5LmpWBgQSxswAS1hFdQ6Z5Yc7GSdfaTah49Xib86PryHqdAaoV9SUKChHo1y2He7DgmnF5fyCWfmdSSRLjsHGMbH",
  "key40": "42UDbkLA2N2zLHmPQoxEJmi9oDprrNKbqMRwRcnvkoFfHZhJv7P6sq3x4xYxQikZSYLdhD3BotoiVPCBFtkQVTwV",
  "key41": "3VHJHsSFrtFuqhqPMvzx7QtHiwCQJ4SZrowWNWECPRPNFraNQA4TkQf9kMVY5QQLED6pKPc27ioC7iJuSVB39GME",
  "key42": "489sqXToSquo7MuVUTqmAmD92wGTSZea7qEcYxwR5uspu2Dw4FUnDwwCrhgLJvXQGFHGjuQ7yBprWBMbjUa44P2A",
  "key43": "fNmVtQVfLoGcMHSxQGtAUkFGf3rs4kw5yhsNDc2BTrSHW9bSP7jxvK9mzSmsnV4GZJAaCWGTnM4kGcT3sdn7srt"
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
