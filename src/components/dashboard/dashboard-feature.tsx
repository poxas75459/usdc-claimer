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
    "SyctP4vwKkvT8PGLvR5SFixhJx6JrM6oXBD3yRdQeWyrwSQ6fCPVJhBxapzY8cB6wruUWwcJByuuc6kiJEMMHHG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ryEtJqHRKKJ3inpc1TjbNMxKFA5kjC7rCYr6k9n4YEGszcsuiZdMm1r74caZeRbsxwGNRnJ6ySdCcEgFPHGxUcp",
  "key1": "4KF5c33vEXGscDrUoof8kSaSynUuZSWz8z7WEuivvb8wi4Q4nwCM535bYkSKFLLELXwjSkudWe3LHmyz5cfCAs7F",
  "key2": "KxdjzEKWnxDmPUFw1PZt2ro1qEyBo4H9vaoKA7kbg8ib2m5munM6Eyhww14axybcYZCTgXqviaTbv1dQ57t1EK7",
  "key3": "5BQPkWjG5pE7z9dkgkAoAso99Ht6oyyEYazRaqA2DRTzn6ytx5jUdNoRpWyD4xd9jdLCPZthqhxUVhtidf93uJ6k",
  "key4": "5MV5mktEFPAdgGf3dd9pZAScLcG9ZwDYkGHYMQ6ybQAKU2ok8Dj7sXnubP73NfhZAepoT27Dj8PhxGMDt7NLQYTE",
  "key5": "5jQ9P1iAy5z2oLxumieeXmb1XWN5HhM4NYrAN7MbMbNidvvfEDM5D2Vie2kWYtiUqgGnJj8TNHT54MZfeHCMwo5V",
  "key6": "5Qv1DVyZizffy9sAnF2xY5zUEtytxpquUMu84c96yVCkxeQYYBJ81ALjEqzVWq9MDRdTefbufHTSKLKTQoVKAz6m",
  "key7": "4G5PKD7G96zCmaVezyZwmkU3nPJaz9778QuM6JAJshMY8vSQwQpR4U8FRWjf72zr6E7ZqRbXJpj3LsNnpXtw6qPG",
  "key8": "5KtrEJ2qfo4tcr63Xa1rJowVxQ8sFqyRcxsJVEN1SvrU7V6z2cxqdUySSX3VxGzxoXKT3JdsCZ5A5ZCEq6KFAxUH",
  "key9": "2TZayogXuzBPkD47LD2NDHDuCNPRpWLrM2LKzuVfeY2iDhFw1uJMP7jXMAAJ5DcT2RwVCh7VqTRVrwj1tt8n54qj",
  "key10": "5jURW9abKYmxh8b4Pqxm8pQAoRkaqvFi18ibsj27bHeQ8CKFLY6VhKRHs19vHERTESxABAv3qRE8xqsibVi5Eupj",
  "key11": "5ami2PMo9GXrj3Cn3NZj1bqTZVECbix3oPsnQg8m5MAedNf815g6gLYjiVP5TPW4JoTMJyZGPXPvABv2KNedUvyU",
  "key12": "4ua9qUWhAeY9u87B4LF3W1KirCDVZsFCu68tCMyALrVAEUXkBAMT6YA55v8DYBcGpViV45KTzBDXNFm59ddVT995",
  "key13": "V8U24a5cUy9PbMY1iWHpTBxFZoNvbEHEPAv59daednqf1VQ1Bt1ukXmEtzzXyB4tNmGzNi446JFhyvhBKJhDQSv",
  "key14": "3FKZ5nUcuMDT9BuSiEXt1NoNs1fMAD2Gi8tLiMhnGSnpZgA6nqWaBDQRPDgVhkzmY1QF39o13n4sePxzYjPRNFGU",
  "key15": "3kZiLsYaSVeuAXzPGmrtxJnyxsvwNvPiNmM8sUkr3FaWQQVzCVFZJzwhopJkrc42ZvxxkPXiXRU6NUPXb9uCGhRe",
  "key16": "47QcDhwN59u1X8iWytWo4NifS5dLudwmkD6pNpzjHtHaHtMnuuuxGjWwdJQUUVY9XcHSeHL2pvwkpCWZc9xKbSBr",
  "key17": "45UswcUNNAUKGCWHn5D8mqKVTB46CLJmG7H8xdtoiYzeTsJMGhyehwP9sxMzCGvcZPVx7jEKPWgkJj2gCrM7FBX5",
  "key18": "VXf6egvTscuC9PuFBM9ptiYwucYSiLgDrV1WjV2yXfs4bbwHRcQjSH1qgz4oA6kGSALBsbhgyJM2ybVkGfKNg44",
  "key19": "2isto3d26AeFz5xtpi7tUwmDUmty6qpwGSuDPfG273mhu84Mrr3UjQQ1ZdW2v93dbFPaxefG8pJmoGMtuSqRkpEy",
  "key20": "mEHxtEzhm8ff89Q1iH53ccn7eX9egPQpFeSvyQXoUhqv1sLG513JoM1HasLXBLTJoz342zwccbca5B3bcXzP65a",
  "key21": "3dtFWhKjWTBM1pz84nsFjr9hT39UwfBwRTpxQvZyevqQ6jUMqb8zVacEpdyRKmmFQAjTcgS6SBo8UzJZ5sC4HNkw",
  "key22": "2DJ2bnLxCi4pAf6Uu1nK9HvcGDKYRhwGpACs1tzW6SznxjsUwNJUYLLVV3cTN9NGa62FzU9JK251hkS4seqRtmK2",
  "key23": "vT4RHmCsZGjbvzwS5irxkkgxBvjQT6aWy4z4uvSRsSKK4weMhrSAvphV3egYzj3XzEAm18pTN4bqhQdAJYN4CpF",
  "key24": "JLFW84bQgKuWmKX5rMJaHvUfRSsGEvzTWvqZXhm5m5wGko9VdDkCEuwtcpVdRPdCp1iVWshTmVyBnRpR9dKdGpS",
  "key25": "23ar9UFMEp35ZLviKqzGbonesjGyPUTPe6Xon9jkMNMpmwfuRCwqR8mcWZacyE7T2sw3WjRFfYgz3FDLSnEx1sbe",
  "key26": "2dUCisRocBKyP75c4ehji4JhfW8Qwt6DyMvTe9T27fk78pUW1N2wQcGL7iLQeaURJhtuPt8w2eRZobGZoXyWDntg",
  "key27": "4MsPkck3pLAYmnGPcXUtZLPnYkZD959jG6KgMQUGVMvZWtpiZzGtWztHMQ3dcu3e8DQvxsLYvCzKQgLYgY6eEAqa",
  "key28": "54vdxEnq6ziV78J3vEvfgRyBwarPAgfvwVSERP9z49xDmT1FsnbUkREQ3tkTjGL6dRZ929VsN3gNYLLT9j1iJVeA",
  "key29": "5QTCyKUk8WmjFVLGTSNoaentAX5gQtQSfJCCdTMXyrb2ocLpozLk65oC47udYZh1SPcCfUqpf2TKVxG5UZWSzFMY",
  "key30": "4a7hhkt5mANmAMfBdWKajaaJhLneqpi9BoNDBV9vsUfs3RhqtFWbQEm8z5JXAd6A9rBYZ9kLfTG9MGdvaZCociiL",
  "key31": "5SD1A2pce7oNAJeXqvsx5hGy5Yg5BufcSLcS38tzDdTpqJTDjBnxNd4TXYFHufsPyjcpW7YzHjhdoDSbKQgURLEE",
  "key32": "YC3NVYc28pbj7z71H65RyfWgtk9E6gQ3tNqBHbJxYBJ3uGymemoaeqs5nix46PXFVSbDNxnUEML5THs4s78QXbA",
  "key33": "3fnXPY3JBaVFfopg81q8DYgqnsxfxF5WVDUsSD8M1QfMf1xaBzd4cmQ6XMAHwnEnbDcgeCXSdvUmtpcdsVXDbjjc",
  "key34": "2yLCVNfB8UFvpZHV2VGUuZft3yu1U4e7qnHf4jL6BkhKsEcbXuC6jaJgsbi4DjgmkECMuqGsai9VigK24quFjef6",
  "key35": "58zoCuNYpLN2PVicVD5nKMyo7QTKUfLfQoKT8ZjaFox6cq2ugqqMj7BCBv9mt9AKWj7DMwinZhfEhEq97nyvbXgA",
  "key36": "5MXejJ5HJ2Nr8QUpYxNfAKVzT1T8m4sxm7XEjgCgYaL3Qv1ZLK5NbDp9A2au8FqGyYwxRCsD94Y3EfNS4gp6F5nj",
  "key37": "2NcpSSJCaDKSEihp26Fzo9QFTSEEmoWo4w9giVVcdL83aFWba6cP6pYnLeTc6BVG1ZsittxTmwGCD1idY5bzuzPf",
  "key38": "54KF4wsfedmeCErS3RUYfjKEKVZxYh9PA6SLzgRHmJnfniYP1NGLdqYPxPnXt9DnDFjApBk2WWTi6yFVmZgkWvY7",
  "key39": "4rdFR5kX6We82KDm5sACNyHiVvgqf7CLWaTbSwGYWfMdFRmLPJ4HpNeLqzB9WLutMDf7cfPChnuWgWLEFuPNsjtk",
  "key40": "42B7BVMaP5tzSsfxEQMwSbBSQccgc7vjdyCwRtwsbthR6SJPrf9YR9FUD9PqHojBwGTdqbvtdKN32x5B9nLHKxvR",
  "key41": "48WpPFgXMwMN6zk1SpVvDbFAbuvfKMs5t3sri7NLomagBYKRdeSoU8MYzX44QdWgVMAojnuTiQDk74xxP7kF5Zwx",
  "key42": "KmcEAYdYX4hExbp92gwB8ECa3eXM5cEAoBgQNqk4oXC9TXE7tEz9k3XwNj9nnRZnwssNC3wP5ytkAVYgngzrViP",
  "key43": "62KaqxbHADudRXz6vqTu4cJkFWkv1nFxK1eL6BcC5KmpJ33zkWWUVo3iCZAXBAH89EGLDPpPMW7mMNabAgoFgnH"
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
