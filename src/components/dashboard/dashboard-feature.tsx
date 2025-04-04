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
    "31Chg76itWFGZTu8yZhVP8SABw7iUSk6UcHVgt24Spwqh4bLHBtTxxhHtWG7Y7xjpqnfmrUc1SjxTrnyVAJ2xahF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oMmyqJ5fQdYH5JQdBWxWQF8fQ3YKzQECX8wj1XUi5hEagiVCPSxj2GHfj2xdpgrL3DEabYcsEmd94f1iZWGE8CA",
  "key1": "4vUeLvfh2YhtQd93PC6As3XHM3bTQW6gTSEDWkTYs1c2fsfv6nS39gDuFTUPkQYFKgxNYDt4kyB7UZhAxvs2Mwen",
  "key2": "NMfai6XMJEFk1AwDgVAc4WnKn1D9srYhjs3fYV1QDdTyEwE7K9CvaNiri7VYoe7sUSPBvj9WLDcj7E7RJk9WwyW",
  "key3": "5kZMJRuYT7gfne3evjSPtFb5MonusnAwcheMvbFp3D3PZcupovU9Kg5UsDxZ6hnhYuou4mYaxy4A8T6oJxSXc4VV",
  "key4": "3f42qzbX5HUPaiXGi4fS3HhBcUEvayw8ArdFRf69xk3d3D6Z2yq554EEhsDaoZnQUgj4cHwFK2szb9FU4Mb5eTkj",
  "key5": "5s42as6Q3zVP8G89riiBFid7xUiawtyfPhQGYCEkpEkEvXrZiZZ3TohpBvv1niU1i7GeX8AGTtnHTFPcDMXv9dZm",
  "key6": "4VXJwvkMvnaoyE3xZ5U29TuNDXvvJtMFbo25AFdy936sk9JDeafT4eY6Hv7yhdtJB25zEfrAkUwsYvQpYJ886S6S",
  "key7": "WWDqvta9BwR994GdDHb71kmyTViT6NY7jsgA76bXK5YEQ9GN6puUiL3mysT53mievUV9ge2rPP6yJfKSJrVEoM9",
  "key8": "3rL9q96AS5D9NPQ5HNBQhFz56FuxkVm8A82CDpnHDwpGFmWHTLxgdCxi3xyf5MyFEMWMic3HMLSswuLXuvE4wXnr",
  "key9": "4an7UNnArhqcqCWFEjUah8rc4jM2ycikUnHrRXEUj6QXkHZPk42ew2NwWLft3yT5c1wLxHKENf44ANw9M7sfZWsE",
  "key10": "2CCLPz34Lgvm8zimTf9bgsT4ULvVdjubcApqn4FABYWu6FG95XukATXaraNLXtGfzscnNjWAd3aJQn7MyUy5RiqM",
  "key11": "3UEQbsCCpNC2fk8oWxUjBkASYHrjC9XEnFX9ZoGk3LWRFdB3masxN2LNNtNaUxUoFHDba3Ta46rxp9vZKRH8aXAz",
  "key12": "4ycAug4wVRQPmzwhUYTP8ujvh6zsXMZwcFu9cBcBCviRdvvpkEomQvQVUUR6fujD695DAJ7xppMRWiAzfPzbkm5f",
  "key13": "5VLZTrwB98JB5yKZBaqYsC3PndxL6XnY3NnSo2YMMocP9YtzcdeYK8ESaREnyAtBQF9ftDrHhHaoeo8cXW3xHqEe",
  "key14": "5VfvLxZXxbHdmqPZxgBXBo1BhMArkPAeaqoqfbyBjMuu8hz6RmTwwzMGGuLSgWTYeHCZAVy5YwXe5LseoF7maqq5",
  "key15": "2FFWzZYwYYXrDGLnsBgQVaV5QLBj29uKxqGSvgXmHaR4AEeZQtm3dHo7LnTsyFpoqvsF73vx3LACU9BPYDJez114",
  "key16": "5TG24pqBhFiJPS4VB2dqBXLnnnGnod6z2L6avH6okLrJ8M8zzXhkAaGPexLzRpZCcaQvUN65Wk2XYCuVmSEypSCL",
  "key17": "3VkvhxLjd8JaZWMu7xzqNq2YwjU2PvnMjA56WF6sQdvpFru5BE6npQpPAuohxPo9aRW36EqxbovbwESw1cGA7wuP",
  "key18": "2yFiPEwuL2dhETsTm5uyhkEdkAed6KLByV9qTjHBVpSayhJ9CDjw1RbRNCQmqe9iVYNTWLyXLW8XD3oNzUmHVyAp",
  "key19": "3iddimzieEdDA1GEDTbNhDJnDYcxrtnmVeFR4UvkKNfjPvqCWRF42KC8fvnVzxZQdoXWv375fHSRHGCp1j3z5mfB",
  "key20": "26aemB1xvgE22vTb364Ht93Eoo6g2inkFufRdzmeFVpay96erfZV9AWwGSF7i2Z4e9TWaunGyZrrgq2FE7dY3TTJ",
  "key21": "2gBjQfWQwdVbbePQxxJuKyE9dueSgGjXtHRsKnXJFHJRNeECk8DQSBRzgZ8LEpWow8V4Qnuk4JVQ5koYHWCiZnnK",
  "key22": "g1orFFwyjSrYeVUtqUZ4sjZACYGLh7nMrGTu9J6u2qkokCSEVTM5zXNEtaBKyQANvU9dsokhqLm9ftRTpPLxiHr",
  "key23": "2UgVKkqvAfct4LHgZt2GbVJKNJgbpwKZs8ebmD9R6UkzDNsXMdbCFELdg7BmSKttswwjwQSHcNbLh1zSSVZb9Kgt",
  "key24": "5aoFuXa9U6to3kYEE9ZztSnjf2QViFdHvSF7zx86RPEUuJc2TuCyBaZjAXZeNXKjsnwk7GZfgnBs6gTQbe6RMiRq",
  "key25": "2bHxtSjeNn9EfLeaKyhvYw3CgZUw2tEkw29FbNkJwavCHX5WdGX2p4y9qWyUyyifKUveSUqhV9EzpPiYLUuRgUiv",
  "key26": "3yPpbXFYZiLCXZQXTQzRK3upyxLGihLnfyT1DaSyLfanBNyhyGs8Ec3WymSD7iKJfpXAL3UgWSS9RZQCWtzqAvrp",
  "key27": "4cZQ3tBYqpNBdZ8QoVL9FLzjSTV8TNG9tDbbQGoAKMiscYGk4jQg4zN4oVafxV3i2G1Zj5gKxkawiSApzEn7W7hP",
  "key28": "A2JvZGZtLp8NuxSQvQKwA5rZ5M4kJwJQy2KJFSXhRET8eWGhCT91tnvyggQFrRFqYeDmabtjMpVbMjoeaf759my",
  "key29": "4vW2iFPLR28Qx5MCwb9qF1HWdkXMYJgQLN8ArXV24UnmpnniSdn4g57prMy6ZFZBFtxMPEpTE9v7ewxAFWnnhYrV",
  "key30": "31yTtKvBCMjGAqb1My5Yt4CEyQCsqHPnrFSa5MXpb38mPHJ8Ms6KuUwPCpEf96YcZ9sGU6TduX93U2B8kSGrduK8",
  "key31": "5rRZT5cikrbkRX2GaxiLySaGN2rFbC3KkpjU2HeGz9VcjWJmc91CYBfqXuhFt3V9reJKzueAY4qDFjbCJEhh6SZE",
  "key32": "qsxnrwZxVLkv8u593BePwPPuX5VC3C2SZVBK9SiQawmGboDRpx8YZX8sTfzQFFXv2hrLzhiMoWq1R8zmf8kc2X2",
  "key33": "2E4oz3gtYSsMxpaxS8zNdmt7hotTD21zcHvzUHCaTQUSTbfxRgHFEcyez5xTDShvSamxGMjdsUdFogQwQrnYCMa9",
  "key34": "dehZkn2Gfs3oVe81tBMJWFFGcXJr17ap8MjLR4enqvnEtbE2Jk7rKgkvGRNAgZtqtkBRiPTJLou17mAM5S2zrvJ",
  "key35": "3eVpCD2SFzNvUxLTD95SS15vnPr9eWUd8GorCaU6jhR2VmCE2upaGBpfzNYnjmFD9eq11GSEgevMcNyZQDYrr4nW",
  "key36": "2Q7TumyKA2R2WiERt6RQ5rmBTUxhD24aoFWZVXQ7NeeEFejSZsdwj3WyRpH8YdQNGt5qdZFopUQbo9JRGvKh711c",
  "key37": "3kWWQBLFgHRcqTnTZJJXcqL2DBJdGLoyMfwYKM85bc6eqo5djcKX9w6Zyy2uwuz1QLiLiuWbEKsKnF5UJ6Ynbej",
  "key38": "64zxt59VKxPBffQ67y1DWFiSa5JWm5oqdHTCmSY22z5qiZmkEMMfQB6kynyQmnCb7JVY7yY4xPtk5bkWF1XdFwra",
  "key39": "63Zw1yyzypMd7HbaW7ztuoc7xYWg6eDjWy4Hs7DuEWPhwfrdtigjPRSq61dcMpjtbjkhvWVxJ6vpABwREFBBiQ7p",
  "key40": "QyFKadPPT2Pge2G5CQPsEZpkRSi8EDb1xKbF3STnRpJAa78AbyV1v8Bp3sEUyYKw3TwoqLCLarfKXJ9Pmfqq5KJ",
  "key41": "CkqkjkDxphhdYhrPgHfUm5AEy2kar9c2ChuTc4gP3pFiTR6JXtEGUr6GHqyVrbpcig7bM4vFff3VGkwngVus6gW"
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
