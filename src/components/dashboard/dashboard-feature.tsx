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
    "3qkwTVzMaaQ3NCihiUGkbqcrqthAQCggqWEkGL3fTLe43SLBJssQa6MF6GZcXuAFtgQuk5qx7nmphKr23HntUFrN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rSo2CQ8CnadBzGfHPVXuj3u5EVzrcR28JX9VPZuMWjENGYG1yQtECizs2t5HBeSccdoEPtQCSyjnEtyCaAw9DQS",
  "key1": "3che3cbJerPxz2pR8EyENDYkqEJfU7HXU6EwuGXhWb3kavCX2eFNASRzLovaSUGX3f2oYs99AV2KoBwtNroZoYUm",
  "key2": "65sXy83w87SHsHK3jzCEAZmpR1SiMwybK2s3b8Z9xxiVHHeD1mcCV2mNDh4Pn7LfyDdzAj4Ncc2yk11Sr8z9PDZn",
  "key3": "noHihPqF1Qme9nsdJDiDpUzF8Rkpk6HuEWp4uqF51xVX3JrHHLgmgAT5oa8QjoVQA6kWBc4HdV3SqBbqtj5xkqx",
  "key4": "3Qxo9d1MwFjrS1Mzu77fnPjZy2K1bUnXGawPz781DuPFGvrMfWMqYHUqwDPfdB5HNaALwxPhK4WZS1uXqxWaEkGQ",
  "key5": "4CdurxpzW2gss3mtT1eK7ThjxWvKE4sYuqnc57VdR3ssHvKKrPXeUXvJ6Bmm9ECSMDWJucdepNAJ3252oPKoqwSv",
  "key6": "9PMy3TDRbs5qcZGhKP1GCqQcJ5Qx4xuXoMsX5nWhHyxNvbryCHUso1TrmndiSDup1bqYHWPWVZwCxgzNg6YKXmA",
  "key7": "2VQKbbseKMt6y4K8Bvc6oqVqn3YnerbrUPaX8aQJZwhimNx6vyMdHr58EbtYqc9g3cS7HTo42dWCLfqkhQwQAriL",
  "key8": "25LiwpAaVbWEF9bohyzUTquvdk3vYh1buzEvHzoisYxe2PRDFVtwpJq5YQfQkbQqXdYnyCzh3BAa89TfcSeLpqJi",
  "key9": "3ZnsQe4THdhw15NvMaYXrAoDqRfSGXePMwGnXFTsziTLQWFqHziN5oiRiY7NuPf6gRvqC2bWTSdRXYzDmKTUoHAm",
  "key10": "617gLd3jcLGyCu9UYrkLuMAJo8oA9qbiU9fw7vUcVffNWAioHZ7JndxYkHookieKBtFGdxdA4daNjM8HUNiXv7wr",
  "key11": "4UXsfZFV49aULM4jQyExVSRPpkY5HfLSy4RNHgNPG19yrhE8rVeTn7qe4QHczo6rhWHbW1QDxivYqywwcszW9Q6a",
  "key12": "9tCnqjSMU7FS1K7xii5iVTR4Y4HPq7TxxLU59DXqeYvcbjqPdyAhz1xVD4jqC3o9TDa2AYG7BxezGgYSxMMbr9R",
  "key13": "3p6SB54o2VnWuXqt7rwbH6YBKt22Q2FrLBfEgnNSv8a6VEQBAgq7UebVQdH93CvciTcMvhF2hEvxQQiBiZNB7b1A",
  "key14": "KY4j3us59bVykrGiV4jPiPNLntMKPgMTW4YKbAzbbfHLH8foSVxukqd5GhpiANXW9s4EXHBe9bAh1kLHkhooTpZ",
  "key15": "25QCLGiZsxd9pVcmLc4533rS4obJvVcjPhbYALWTtbkkD2UEJJxCjZSBsJMh5mCvB9rbPaevmZf8f2MznsaArhq3",
  "key16": "3wfx32wPFeYg5dnaKutikvRGAGVG2jzQ8nedr18haveorfyH7i8jmqcq7afuY9Je9hQucGeBWwBQTwXHPVX28N6A",
  "key17": "3SbbEkfepFKSQs2mX1m8uPDsZKu9jeX7sjG2xdF6e8TNSpYHyJocLZkUB2VgqvM4g5y5PuqkHNTWuZrAa1r2P1NS",
  "key18": "3MwERHeZax9yb9PKceMyXGv43hjJugBhhuniBf6HTbLk4caoEf1jgmtmcorU7DRxBQfdNbgvYBDpYgZMR6ceR2J8",
  "key19": "3KpkPyTEXMerPbSMkuaeDV75HmdDkJeqPGAsDEMcm9Zm8jDdpJPXeFuApH3gig3GTpWDW2KLxH7EMYrN3LxjZ2QK",
  "key20": "3gtTP6NqPVi9iUVcY5p7totgub9cnvkkgMgd6xfZG1k7KTooUCrqmVpamaYJPcX2py3rqjfoaXnAzopkNCysmspf",
  "key21": "5vHduh7WA4oR4s4gqPpg8cCqu6PphmiZnKbPQsBaH9Q8V4G6AwFwYjrTa4dtSCG9bcJwECgNzFqtH22vntLMCnkt",
  "key22": "5jYHRgyBL1BBeW67QjMaJxBt5upn8guN8prEJEauaD4GYKFrVKbXibqjMnD5A51cvAmV5BZ4LFgUYNq7KXJzqPHG",
  "key23": "4Av3xBgXJNkryrqHjm2sNq9wk6PMTjPGGJMyET9Wycc2AX5NPtCtfp5ryJHa1rasLg65pzWE2a4MAamsfN8D6muM",
  "key24": "2A6hBm5CdYd7RXuyixyeijqD8fRnKSqAwaWQgTfa9dX2aU8RXsJzaWFun9idRrezVEjqJ5EM9fQeCV7cb1gZSkAV",
  "key25": "5MPX7GUzjnM1MzLnzYr5L6Keg5uA2Anwr7SHzeyZXXzVJapi2vrZDPYK4vPUeKgaKAuQezUSy6GqJxKguYFq4WHM",
  "key26": "xU9cGhMMXP2b3WzFgGxU8S4Kh3Z2X6Wo7DEwHEytmwFXBvL578H7uG7VaFQPk8gz1fgEmk6mJv6a1egMojhQ8pM",
  "key27": "2ocEBDQKCKvk714yBfjDDKThsqXDRtiQHktETTgqayagEyArpS2jR6pbNQJ8BRjSuzwom6yBexHWuw3jX7sBMBxs",
  "key28": "3Vb9bha5SEjVzsUW9ie5CHAqGVF7kSVWnUDNnmGCAuyZnjVsydVXMGoNASD6vgNYTZRQFC5Lr8o5eJkxWx8vuw78",
  "key29": "3kqBGiezYzoeJo8WXyVNquYzrG9H2UibFQwhuwk8Laz7SHgi59HWZ9xRxgxwiPCC5m96SJd5gMi2MNzXx5JzGiYX",
  "key30": "2cn5HdgzcAsD21USxGrJk84tzwSRwCtQBdDHTQajN5bL13b9YMfHrf2SBZRJg7ddGSERPZs2KketoLxazswsbsPS",
  "key31": "5kzeLvJkgyPs3GNZADcuLKXeaL1Ta7Kv4zc7Sx5PbcRzAkT2JdwdwmEx88P3V6YCt5AVsVbjg46VhHCJQWmvXGch",
  "key32": "5jCCkMSLbyTXfM9ZT4deZ7mdc9Adouvn6Z7X3bQmp8zXbPmDpSC1bjygdBLoQk8DBVtN3M8K6ZdLTxdysWPfNAP3",
  "key33": "2eXUHdQqH6w6sBGJPUFiV7r5cCdnYfG6CXxhNy1xX5mEBYFgFAeEG7QKhLx2u1Qf3feuTXbdGapwu55J6V3uyytp",
  "key34": "4uf6hVX3VZDbjHUiJ75Z8XtZRR28DGDLu9ZeoQJKX5gFmx7qRzvisHFrhQFmV4ZG5bbifHwmnU7CuWfjZsxzhQtS"
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
