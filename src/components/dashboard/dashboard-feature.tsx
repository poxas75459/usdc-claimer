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
    "3ZgXUyARZW26pm3Ncs4MbNfPQjjuULJwo3aMrQjFVGpvWBuE9pj43RE4C4mGGEXcXkCQeD1kE26qN7jH9wFcRiy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "at25MCBhw9EfGDqW9HE6YzSTrDPkpmqxYMjPy9jRDFYFF3EZvDUCJfSNYo9EJ3qeMScGLrCGTTxgs2QECSE7czE",
  "key1": "4ZXH2cJedZXzqkvt8e3tpk5aCZeufHY2mq9EgEAGDnXALmBtbpsddrDexZxH1uUUvsPb3ThYRsoR3uNxWeJ4FS3g",
  "key2": "CJ2Sh48rr5L5GUXEiymp3xkdwxXDXAw334FG2Mx83ZVnZLgkGBn8X29HS2DdgeDKbSZ5pfbNA3psd93yuXZPHjH",
  "key3": "3feqjAV7CbBEdAWpX5459LYXb9bDJ6in7CPswJHvDVMZQMk9gV1GNHoZoyEhjcjCC7WUSWDtCda6J56uNMzeG7hz",
  "key4": "36x5jKuV986gRKHx4HrdmeAReebqd65HuxWBYVoFZCj6ZRmezYRDxPuYwKCybNeNM6qxE14jzVAFoiZD4UcjYxLf",
  "key5": "5Rjy1tAPLuPEHEYHofpvrb68am65fVRkRytnyctcZS1C6gjkrLPuGAR3JhbuDJyRj25jQ2WCojMriKjDq3kr6z57",
  "key6": "cR8SyUARkBZ9szkVATbGbAopG5BCy4ZPodth1rXU7xT9HWKvjfgeJNyswVWVYzLfB6LafN7cVJpGZcgtsPFV5eL",
  "key7": "36MyFYLVGLTDNtx1DDS387Uw3ApvjSqrr93BZQzB6V6F1uS58WU25mmaEpCs5UFn9CexPn4aF6LN9FSgbyxc6Cf2",
  "key8": "3hjmTNVv27rGi3M4kF1SSNLfzxeDKEHsCMBkTDFNhYLDUQwTSvq2vuZpHsfsP8KaKMT4ex9wz6dWjU8bZWSoqoCH",
  "key9": "248duWBsojMAXVVq19DUKnwqF4veAMTxoj69XJ5bqNZzrtzSEnSVx332FAJUuX2EXucNrvRDHXZMLt6xSmxHvNaB",
  "key10": "5yQcuqvuPvEh4m31pbdED5yMnWvmtQrNyEyLPAG765D4ZHWZjZVSw1rT2qbjN4PgpMzFsZ2fyeumy4CDEe3e24pz",
  "key11": "2fWVSjKpL76vnNpzkhT3t4ZSDkYHCUgzmjkivRejgemyDDGHnRtekbi523WzeaibiZDER7uRWrR7eRZG2sbujLpv",
  "key12": "5LHPATKUSTp2Wnau4UGJY8porbAmF5F4AxnvfPBYNf42cRW12sJua3KdbELtrWFSmJDDdyLTWTGnwK2mBbc32Aw9",
  "key13": "46A5nFEXY1tnBrwtaoF5q25B8yFh4Lu8oLFzSaFozg4RAwPh7eBSxmV4rhNmxN5Fe28HoYzuDQYwQjJm8EDHwbvZ",
  "key14": "5mU4nA8gKzvDR227N7XBnMGd37n3Ud5HJ2K1oHymTyigGy9v3bKanQoScnsAqGcPuEYpNwkFv8WRZstwi5Fgz3T7",
  "key15": "4pyUsmX38KEVeYQm2wdWNSwaMd2hdrnnwBL2KUAV8N3G5V9sUNYFky7VEuHSJujUQJy535xMGtcRKrPA3jEYcNwk",
  "key16": "RvdrqcgxUs39MEE9EZJcgXQxyCsAb8gSq92WyA7XjnUDo1P6n4rb2uzrHZ1D9NgYwrcq5snAzCD3dStGCukgHbF",
  "key17": "wbHc4sfFVK36wHha6mQEyANF362Jx7Z4LXqitD8Tc8tZUizkGQgNbKQu8nD6WuKEagaKQbGRUeJiv6UvGQz9sxi",
  "key18": "2vKoHbSaE8Cjz53ZYJL3U3mDaVa6oi5jMrF65BPiqDxkzM3VpGpVYFyaKPxk4BT9YxQ2RMy1V8Vg1aZpsVPaFpFb",
  "key19": "4mpxAzJWq2t9P9dsSmrefTiH1dqFErRieoUq162fh1uqSfCMa9AzbUWHTKHvRHyWvn1xxW6tRKqLganUzdQuivJ",
  "key20": "4zvLgQwf28CAH5Pt9bx6V1Pmxosc2DQk315egGKW7VeqoW4c1XDmbqmveBqJVuzBWpchxBFb9Jv61YkyYNt3Rxc2",
  "key21": "5ATE1cDm5o7rjFMUSdM8HwUzhfNC5kTesFXcCgE6VejyZsMThbdda6fj3GQUDEZYCCLjdmYz9XxbEB5igvvAaRbM",
  "key22": "2D9wUX6jXzLSTFhgSv8D6T8U6eQfbBK1mptbihVUfHJPXAFvJFp4CxJwAzx8qujjD6B5Vz22WHG1wRVFxq2oZVcY",
  "key23": "3SyngrfFkQ1Wf3p5PPr5B7URauoGrES4eVFz34mZ81KMB2ZcwhnKKC1bTYLVWy72XVYZ5mtiajdoHyYGB72NFLLt",
  "key24": "4TEEcXDFnBDbHujsko4QEvgPjjnuevmxXTwaSyXfME8HFaVV3utuYg4Y4qbXVf6QGjkAcsN9YX5crudWfEcoHpAh",
  "key25": "2Um7eF8CnyQDnScRhx7nACP1vNGXaLBt8YWqn1mheRYSB7Qxb6WT5eoxMBBntJqVSJbXSrnXTjS4mtjShBYnuLy8",
  "key26": "4xgXP3PvHjeEktdfUy8xC6ZGjiBrL5ydHan7ELdht3xF1nDz6XMdvK5bEGwhi8mDcQGqmhzRN2Jfxqo3tde85ea6",
  "key27": "4KeFnouk5Ak5XQXjiSjLsHavtAZiqcyPUNivFMwHZdB4KBjYL2fyqTdZrtApqaqQZEzq2Q5nnapvYxJ6xzqevvp2",
  "key28": "2Vi57hZehvCpJuMcjFPLW4aWY8ebVfe5aQWtSP32821Fy4RT2h9hNYarbax8PowfHGEnUP4TBT3AyvJ2NfyeRfmy",
  "key29": "5Vr5jUZ5dUr4x3gFqXPKt7Xk6nR7ozVB46HF4L8uHN7Z612uKJwwVR3rqsdzCMsGMcdky2TjQtepRH519Y9NpC65"
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
