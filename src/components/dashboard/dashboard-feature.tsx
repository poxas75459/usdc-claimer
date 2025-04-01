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
    "2ZfJVbTacJorNWNknZCeR6mRxTMWaLKCuNxXT6gxjuwQrYi59J9irG5PonwmECFgdtXfMFbQ8xqUN43Qejccjaio"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v2jX3imstmWphtt4XZqqDC65BYVnKCDMQ9FR8tbL91z2cWfcPm8rgR6jCf99WVJRaQQFZvp2hfx2Xu3BVHayVYz",
  "key1": "4vHvve1XBwa3jwrr2es98Ki9yiSGdXx4WL23MkgxoppkeAF1HwSqF82gQYFZYMETFqVCeNgDJrFzqWFBmQTSQ8ia",
  "key2": "3fTEaSN2DmEEpspv7B6qrB5LacEnbn392sWQYxTBUq2JWqkUfX2fHKvn38zmV5HSTS9FC953Ys5zEVRZyHNSVL66",
  "key3": "deF5E7FMYZXzRxkPUPPRfv4jCujhbX7zBJMFYgjtMstP8VahyfDkoAYZ1KHHK6mfx4GC9GZNuhSjzyCnEmFVxjh",
  "key4": "37cydNzg82VsDBkLkyidaox6QQoVVd9GDyby3mg6LMH4QFkkPr2Fdh2PGX48Copb6mQWfEoo4uTgiiabf7AxAUuw",
  "key5": "5XBq1cKJwDSh9iw8ikSnFebjrAVstaNzjiUxC2ZRJ994gxVwwpetMwaM6gNNFMND59TvpapnQhsjc36BiZ6FH5M9",
  "key6": "2Z9M6Lc39b2sRB7ETcouLGyWi7aPvLP9ghZ3F2h6xnAzoTqUbevp8pHfB1JYvHwX8tDDBJod1bgkxXvPmvds8yzL",
  "key7": "34tYmC27vPFyghPdirKcKa8159bjJQa6kGbg6inha3ssEDkKxBChFvUC5qsYVN54r8CNsYD78zH5RciKVqDuN7Q3",
  "key8": "43ECyFkBZmAPdspP4Bms8KdEg41uMNFQB5e73R68enNdxnubMHUkjFG4mD7gUNA6TNCiaiGP7qSFuK1sEADXdx8F",
  "key9": "4F3AE3rutfg1vZd5xzq5CjvTNbUKpu76zy3vHuxXzocAZPVsvJeBbmWibndcZjRPegvX3fTkSMiPScDpZAdQKkrT",
  "key10": "5ufBnei5Y9hsvowdj6XvDTRQ68xwwDkxYZdRRpAPukZ8rBCpeRaMM43epD4UAq9NfZnqZRb2u5mZ3nuMKWw7fxH8",
  "key11": "5YDYpqZjvsAsGAMjoPhLaC9HP9HXM34cX6zr9Nwx4CufjLsfde5em1nKgvftCrWxRVZ6Qc2HSv5YetNWmF8wER4a",
  "key12": "59dPAa17x7EDwwunKrYf6SmopnP2a5hKyZZGf2ARWvSQL75jvj2kZ813qVvdLhyMBDiCdCALjzcUy58WHkoZQixJ",
  "key13": "5keeKrMLXorGEacUgb2ye8KgsJbWdwGPKNMZPdBbygGrZzma12ZEfUWSj53T6PwbeUzXUbjN6nJJmei96SAhYwqp",
  "key14": "3wfxK8rCbsyuG4tPDdhfi9Jy9LMvJ4hFNjeS9AVJowFuL7v4Ayy5suDxmq8HeSVfYiFqMzkANoM4ahUWmkAUkZC5",
  "key15": "5cjcmLBPH7Xz8QffjFFqD5KZpR4pi2cbfoWv1kupx6o5b1ru9viTSPd2jFc15H1ZBknvn8ugXxGrryWNXNgVELjW",
  "key16": "KXRJBRAy8tzSzQuuviCYQFZbaQm66yJ4kUzA7TKsbcvfKHJo9aYgwjnaTKrMv2pJyLdWH5wEpQTGs9xWheHGhdp",
  "key17": "5F9kqzksN33FbbHAJntJpoFRcKhPTTJcv9ntpboQbApT7ikejFWhGJZ7bwskBpC92yNmTJMNEWHEMys5sTQuJsZm",
  "key18": "3z8hUAWmGNrqpeBiSb2iofMQ8n2fuaGC4S7sj2WZ835Uk5eA1gMfShHdKxRoVj9NhRhbpB9eLH4khZLcCZvDdeZV",
  "key19": "3RPexFRKZhwicHKUTzEeYbk4YXX6Y9j2rtx8wJL9CHFq218QN54XJpVjSDVuFhAafrRp7wHxuJKnAQ3XtbUUyjhN",
  "key20": "cCj7iXMAm3wjik8MoCmj2987tbfhGq4kS1sWaQdXBQgSTkGKRJRCG8NRGk9ri2QcGxepYfyUWVhMKicNhf28Szt",
  "key21": "4Bpn6GaMxJb8HK34P7VJjCtyKczXGYLxCYb2vAZS8eTLwvJBG393xVL9uUCfhF3Bo7hZs7p4Sz8xni6mzbYRhX28",
  "key22": "33XcU9VQqKRR3QW2tfcrCk3rn7Mi5Upr8tAgwbygHAjQhTAQM5pCc3Q1wWVdPt8YZz5cQSqSMAijA88Hg8JwPdkH",
  "key23": "5xU8EuswkRwUzysNCBaJcDXo77vLYhE7x3xTiQGMtsvCcBBzzRRs92UnB9oWqTCfZbyrGoXpmEW5hm46vJaJGq7P",
  "key24": "3SspR7GsYbHtm23hM9xrE6mjHMTkPgpfK7N9ebhRxZ1CpdSKrPWdWcq1xMKQbLN4NM1ccGU7xN8RMsAULn8KfTEF",
  "key25": "3f287m1g5UvYRhVNnuC5dKm2SyzPb2qt9GJqy7EwN8y9Eo2edCMiDLWuSCJJYZpFz2ghYSXfUPEHEHraPWbm49J2",
  "key26": "GjXXs8FdwndDvMnpfcZyH93Scs4uFNeDe3ZKZv5dJsk3isKuGzozFFdwM6mrov6UzSzzBhsq7NmjvqVZDToZHua"
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
