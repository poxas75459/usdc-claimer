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
    "4LfzDNP9npJrT6PWJxe4hcuFZp6RDMH7qsrGpx3dh4tqdhbh6oyqUjNmECreycvFLWEtFGeBVq75hTM4RDi4CDuV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gYEKD25t4FNd8Zp8ZgkjSMJ43Lh4fdV7dRinpD9GfLZAJSUV6BQL4rPAfSwZebth4DunSxkkpdxPb6WupUz7NP6",
  "key1": "2wjQNwXSaVhRwEZjF82ctKd8qU7dygAUEU3ZtbLjpSkTWLBb33417dZFHxRzoezfMdA5RFby6QM8JUh1NoZL5f7A",
  "key2": "2wTCpGjJNwW9rMyz46ZQDB959nSUAtgPNquvnMoQdVBoeBtkDFYsJNgNDCweSNLqWsW2AY97hNyDNNMSpAcS4B2E",
  "key3": "4v4YbKiT3ZuACJczSbU8EUrGA3izanqwxyFdD6b857PDCu9DrAjf7YHhp3MSSVaQzazrY5EYbitom8E5Vo8HPW4k",
  "key4": "5AoV4GjvK3h2R4TEjddKN8oMTryWAD99DjfraLqrkTy27HiB5ob93UQkz5bEs4nhwueMYtK5F3f1uwzuJjqgxCQ5",
  "key5": "knm4BtSkUBKzRCXssq7x4k2ojyqmxSXzXM2xGgCJ37Xq9mqij13Gb8ESvbFoMZ9JwTm1YwwDBBBczYNPQTeySUR",
  "key6": "24jEV85zR2Bw5mawsp2CycHGcw8LUqdUBEGjsBFvZg6MHmF8dPAQqwk7xBYuEBNofdf2NZYPvbVRHXqKbJsyYV86",
  "key7": "3YR3ncvdq8D43RTLQmwe4Pg3wRRTN1ACTFv86BuuUfdqSVGqSS7NK6TgXjXs3LpoJZfCbCiBpwM5RHxfs744kUEH",
  "key8": "4AbfYorauRHmUMvPEsLQQXzD6nA1CNSgRX5gHbDYSCfotQe79t97sVt7wFJegPXFgMxCt7Ha4YvMEjadeYNbtcXC",
  "key9": "47mjT3Tz1GuW3vT5gxy6b9fdWP6eB3b8PwGGFeibSY5jbMajUSaU5basCR3pS3zoQugtfQdtReDRqkZmcjucZo3W",
  "key10": "52vNXJjaKFYGYzRe2Nvwbkpwh4PFm1KgF5ASqRo1TVXh2oNh4L5rsKSmRnoKHegVEHZNjjeomr4jYUck9S8FoAUD",
  "key11": "3HzdZHjNcgnJ4sMbSeL8C5NjX9z4SMGAWrKA3xc4FZkCXRKSfwEKzABMo85woKA4LMobs3f7Me7yz9ePHPYmtFGo",
  "key12": "3GGZonWDh6uq6ABR8zBQnExeGUqajZcvJfimrAcC4deASkg76u6qjtCtDWPoFMYRow89NYv4tGDMUPoGRqPYXddz",
  "key13": "5hPbdZBjvCYh7LMZWDFHUNLJAvVRizHeK1Amh27fhi88tkU3iBDkUo1vx2wnm8nwMPE5B75RpCVBznDkBFeS6tA7",
  "key14": "2a8KjXLwBzF2j5ZVLct21o2YCXxSFQLKyH2FkimBDKZ7pXdLk7w2LFKmXNKBv7Zempw6gd9UTTPwVJvZQWgnXxQr",
  "key15": "85s1x9WJd66s31jKyoLZUMm8siWq34V28NecTKMUV1cfXFKkqDDK3uaS2htHw6T9g67W96GobDhMLXGxPtFww3j",
  "key16": "2AUwJVAZrmP9hTaULQY17zYjc7WuNiqa6zdqv8kAKXMKemejjh5Q1mBVkJEpU7JijpLZmZ2Xmswo9NxLp1gejAuX",
  "key17": "4hiQK9K6KwpQ5KCULAbJRtz7Anx9UEzpMwEa8csP3dzUB4BGd1yFHAHkc4ywmcauczawyPRrRKFThqBck7Y9p5o4",
  "key18": "Ma77rT97jFtAuKQRcyv7YPLboHJ1HY9tABAenLUWeavSm9JTBW2gLJ4iAMtzoJQPZkBLf5tJ2qbaghdMpeLz8QN",
  "key19": "4AKWvu1cAT7cBiWvvH9zZEefrj17ggRK8qCqB78SmHNVyAvfhSyQQta5sGDAqkxcy3eV4XyfhGohbm6JbtbRDBXp",
  "key20": "4WrAKpRtDRZRfuvj8tmuRTaa3ac2P4DwrBTpSPkLxwLrtBijZD5rh8uL16xunUPXDSAyzymw16UqsUonfiaxsSNB",
  "key21": "3pJWnPXUCxkqopHxLpFdMMk6235CHxBp2uWKaZxjCt3rdkKBkAc2aqUwAGw9yDs5xoiZ6NTjSXnno54vYbjgYywA",
  "key22": "2R58qwkPyYxQ4unJ79bMg7p9YZGuzLYxj4sggWaQS141Mt4EHVPxw6VfgFFM1ebP87W28Wog6PbvvJJHFPznRsaA",
  "key23": "3CBvpXayNdp359Q7VRRMci37TJn3PNBkbpyyaa8DwQ4xUFsf266G626geD9MoKuY2xdPus2ZsVV4Yrs6iLopce1",
  "key24": "3vzEoqmTVg4QP7nFcPRoWsuqSgDUW8FyWDobSUk3DNYYDBCibCqwMzpBChE4J45g6q6JgygcZLyWbQy27QPmoZwA",
  "key25": "2S6hkuVkub7mxqvgqWQoBX8mxJoYaMUrLm1aYFuqmZX6YiAWszwPqifx13KXY8iXx7y886duvu7D8dA7gSSD5vke",
  "key26": "3nzYFg6cQtZT3ggwBPkfZo6mxJfk96gP8ZCoBAQs2HPfoBAa1M6J2mShyxLZFS2hfr5tasKJYjCnQ4aUNhBngxnN",
  "key27": "2bUcsW1PLkNNwxdCayxyRsxzzM4D8YdJZHLTzXZWo8gm4fvHc9VgtwuLq46QzHtRDNV5KVBRA4MAfJnWQ4vojqvJ"
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
