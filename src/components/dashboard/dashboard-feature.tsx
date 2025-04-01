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
    "5pxQpBuFA5DJr9Nq3UrfDTudgRwYecyVZKdKVyrGhd4BQXywEJzPvVyL7CXii7uXf3n568yYN1SY3M3NdduQ9ibw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X4izGezPutBQWpnouxJpwZ5oRxyiXcWNHkLnHrZBxjrCDMpQrbdehZdmqDE5WWxrMqM5v59J5UonuzWRJrPV2qL",
  "key1": "5dddmZ8DR2C332owkKKJCAFE639ecCCHj1B9tu6sBSkyTwD2b6LtatXAb8YCZVmJoZMPZ2FcCJfA9vd7jHDKTgqL",
  "key2": "236LyBNCCqqyz3nbHLm6naGNmry9baXwXFSHZbq76sZu5nioxCXth8WscPp8YbZKN6s4uy64BhudS2sbWiHYiHwf",
  "key3": "JzG1wy3tZFu7AAK5Yjqa9QV6eHseqmVQ9maWkZqwyv5CTb7JoCrjbgCDBeuH6JhTNPngRKCZoJyf512E6Sg85ny",
  "key4": "52pTif2ttmUvXsiR1Cmej4yAUPc8rFmkDgHUr62LVnWCGqJTR2WdZ4CMmU6nntxfwV53M4nyQRNvq7pNqDLWCixQ",
  "key5": "2k2CjVbQFHsRY97AELURe5v1B7T269evZy2CqsG88CTSTKebEaKt6mFgkH7WkGcwbRUPSEJVp6G4iQidYZRd6abC",
  "key6": "2eHiKTKuRaF6ek3UgvyiWAQfHb7wsRBRyx3nECCzZhZiuvT61KzqJmK4uKwFwGDzbzgV8NZCbdRhePujsWXP3h3C",
  "key7": "3qp36pMkXn4NvyYF57aawQE6pZHsWtyzfqF5z81S3fzhp7vxeKWy8RN7HXs8YHF9FnNE9qfYRnxAgoxxtaT2guUn",
  "key8": "5YsSmK1hghomFs2UcVYnpixSr8Bu1rHUFSgM2vyxF6B1j7ECbPSvxGkS5uxG9Y1B3X87ioGVgQ2ixmixwxd7oZqa",
  "key9": "5mZwZScK3AFJZ69T2fN1xihGVJ4cbM41S3KRQX3fZAPp88BNJBzj6geVXi6GiiMZMuSu96snufFx6XDWA1oiyDsn",
  "key10": "akGpoGAj69peMFtgzhLr5E4DKfibHzwZhrdQX1qSJqgD6z3PuYaWzXPYrSEn7Q2U4u5GAw5KAeS1hmvEUWrV5X3",
  "key11": "2d5bwueUCiNkVRBk4syj2yB9Hc4Y5PMpKo7b7hfeWgcLr1DLga3DGJUXpYqXw6rzRWae4sp2vdvpR5mUQbeVZJ3w",
  "key12": "VoTMci6wKSLVR39Qik1UhswffadjZEHmJU2yB9rRp8eKyTgha47j7tzLepmEi4ZfsCufeKzetMQTQS1BnSvTt7H",
  "key13": "ksjTZzfBtUcCrAvsb7CuG33Ju27dN5apr2Tg6dp1DXR3FvpR8bt6UtFsekLrcEWGWC6cSLXNxNF5Dq6PmpnUzBP",
  "key14": "2VEd8R8pSxAT25v2czssfYB3RhcxDmGGWUJ74SHfhfexoC6Fh1gukhWFPhn4PPKYDQBaNyJvpCPqTa2sebi47jZ1",
  "key15": "5AbZ4mLjNJWAwMZV7HvHUJqb5bvRng8WDMK4KG1uhpxg5mqoZyktXWDf6t9M8zYY1skh8rqs3N3zbEaxb5bBo93i",
  "key16": "2A2T77py5sfvVwxhRELwppZR3WFH6CFeDydktcrW8wkCGs7p6UVbE28zqcjyVbKjF9gXXWJFQPGNqSPPJdmRYXq1",
  "key17": "5wpngV1G3RqWBBvRvZCZKVAg9ukWjxuXPKbAcYojNNnMwmoUgUGndkJJhM6LJw6QrdFG24yS7hDvmG4nqYEiEgMR",
  "key18": "4wS9QGzyUGgMa1NwxcTctmYidogqqs1PigxHk7uMCuVRELwXLqAfv9dcnjBucsdifuF9sonvuWVaNMeNPtZ66WFv",
  "key19": "tsvkFKJUkkgmm5AEQ7LdG3bqJc6tVHF1RTADxQmztFWfLfHyhpEn7CMp1d9ohpyZVvj9eFaMSQyQso1a8TWYZTT",
  "key20": "5TbeiML5L3V8wTXKsCFYyKBBqFrS6UA4iFG42Q3Eq3Pg1ShjgXDVcNQriKZzaWZKT5KdKzyRDirze8Ntg4tYiiHo",
  "key21": "2nomAoxt648A5QNgNDxpp2LJrTp4RyP485tCmaZDLSQGttTvzDrmxomLDHbzesUhY4SS9xPWeR18wtymuRmN2HpV",
  "key22": "65xe7ujFEFDn4HBCMWRiXGdhcjnmK44Wu6gF2fB1k5RPZh2xbcRYEgU3oC79tWBZ2MZHseYqc9RGS2QNseFqq91X",
  "key23": "3Ehyh4sUrsPjYA93rFwVJU18WwgVvciUKTihwqTo1cK2PffoSKWjB3hQeDcoqazKSJnni51mkKcwZaAUnKQqFdYV",
  "key24": "2NtWiLPjkAcJ5VAdZX1BKExhik6K8aGUf3RvXcXaTvxayuwhbebiRE4H3RWmwDRH7eNLsz3Pmq8jdbBcPiLjvHDh",
  "key25": "3q3b4YCHVC82YZmxkNsSnW8Gnt3D56nNatu3q3mKrQFokomEkuVFMYRd2LUz6FYD7n5HsXy9Yb3Zy4Ut5JLVpfYQ",
  "key26": "3ALWhj7TYAN13rKYUTqCPkqkMnraiTonRhBp2ZAEi1hz3vQshGeoj99XdwxjgPvfdBrcEGnaJWhxJLr18txqxYB7",
  "key27": "4RGZLzSEA2cg93yPGWLN9xMzhKaVca7E3efGw23jDNYh5HmammYLczaftd1qGjZy2Ef1otNex3GGovo5ukaCyXVr",
  "key28": "5fv3mHRos3ADhG1HeFtqNCzEko4g5TZ1TBgv3iyy7ruSGLprDAbDWZG5whHD5P2nwn5RynHVAvNKVPxwumaSgEKQ",
  "key29": "4xB9NfWRY8m6q6nCYBEXkXCD84iM8H1X8vWgr1W8znEMmpoCTY2LA7gGSrmpTVNfYiLMqvUBrmALyuHL1uP9y7yZ",
  "key30": "5wMFWvvkLf1SZYkQPC5MsN3etzwzkQYxCE3bFa4pTwJackeYuPosZ666uELPmviHoX6ixPTYZgxnN252RQddjYbW",
  "key31": "E8HXnEebcKvA2AcTusvkAYABaAJBwUZNKtzf1geHgSzg9Yf3W3EhpuBwDyDAYsPbJEXndd4PCSxbUW4nZq7Fmsm",
  "key32": "5yctxFtUo8KQWU4cdjujf3687Rt28eXAs4wNYMniJhaf4WYREonirMK9gDx1whFJwCTr37BzLF6Wz59Zgwt3uqJM",
  "key33": "4AdX9oCpvFM3x5avTNpapLr9wFLUzztsJDB2h9oDP9HRc9mFgAS3LVc3QRU4oLG8hAM5reqVzheBZdTgjxSyc8rc",
  "key34": "3NTAbhzcHTHn4ztMMUcRFmrHuZkDhRqhPCrJpPHGxMD86PXWCzvBGsrXJaCEePWAcD6kDrEy25fVy646tyNX3FC1",
  "key35": "1AyEeg2fiayF4gEd1fYzTZwKoQ2eBR42eF9XGUR3SpHEpPxeJ7bPdmpYzByPHvWWTCWwF3CfEqdwzw5aHtnhCHE",
  "key36": "4fm1D7vWLmNzkSTCz8RvwCmgHE6q4zFgvD7AeY3naNeAdjtxofDmx52xc2ku7QCSrumVZdvkJ5XFZvLXu6ccz5Hc",
  "key37": "tuhSm3DotV2yquwBR1v777irZKR6wFZXuSAxj4RK3VonGjRwbykKwXbM1f4qSS4uydF9nngt3jLHi3ExZUdWKve",
  "key38": "5a1wEjqogpSNYR5sAPocsmpRYtgYhRproMT2kSMCthHQNfSRtaejv3PT8AuYRYrXNeB94P3GxntHCha5eS279R4F",
  "key39": "9NCZxfbHwGxZ4sRMuZNZeS6GKEJZbWqag3c1Z3varByEUJ8fu9KyXRcQ8PYUs71i5Eb7xzW4zsAiCK1eZ5ZDc1k",
  "key40": "ra9T7RtvdA73rcWBjeqotd7uADZECJhLR8sqRqjkG99q5eSmPDXZhhjYSL63eNPPyPxCjq7wg98fkysMp8a1vUg",
  "key41": "s7hePeVnrxP7xLru4pufVSkF1MXN6GR81xuEsawqUhW3xcot5sA2H2CLn1AZZPrMkezgnFMbTCsuSKW3xU33fjn",
  "key42": "EbNgVGD236BqNaAo2uXsposFNN8CmbXPfviMcT9nGRyQLCjTr14Vs99PSxYcsPLHHgzVCnJiumUYkqahdepV9uU",
  "key43": "3Rhj2h6kgM3NYcCiobbp2yjXReCJYW81KoWYqGucWYvvNwbctxCJ2nUMfunHVTKwNpCAXY5Bzs7wbfBEJqFrtqiz",
  "key44": "VfyFRhQby99hdWYjF3UwPpCn3Eazhgtby7aYNaDQAhH1PdrshjHQw9kQhM1SmaANLULT8q8U3kxbWMQDuHXuHLm",
  "key45": "bdoTqMhBsrQrRYzo77S8SBjdZswYkWtrJjEATgPMWS2YATefg8o1GPhX7LyLaSLbTUNoYd4GzTvzMPg634Wg27V",
  "key46": "2uPiXzVuqq4W1WWGgw4uQhf2qyTsnX9XnqGuXe6fGBUgPYRTcRLVr5dSbNHhhaYyL4gyz4BVEXjb636Mc8b7L8iT"
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
