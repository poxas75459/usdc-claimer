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
    "5rkMTMCpH78nNWPA3dC5vkmPEjXQRrdsZRMFVq1ScF5EsWnNnzcp9GMZoVkY4cgdNttPLsoyH84Lw7WrsRz5otDz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gR7cUszrjFLaEGZ6w8sS1cwFueC2UjhGyE6i7PV86LwVvPiEzVttHyCPBZAafkQNSqjhFViTEqMHZUyj11rp7RE",
  "key1": "2GYVkjeVdj5s3Y7SzzTUyKuMVwVbLm9ktpvrPHu564r2nMEsRPqpwfQvpez1jZHbtUYdiCsqUcLsDamcaFDRGxL5",
  "key2": "5s1Km6oMyKDJQYJofzi9dRyiAwKxuQfuvYtzRWbqsAgzVxhNfojkFtfME83uuDD3c97ybmsBQNfAJCG8YSJjPmC9",
  "key3": "5zyFQikVRhvtWQGzGqKihjvA3PoCfyZExCm31FjSooaJY5zBdcvvdQirRLw3KBpfoX7dc8QdTPz3dYPvkWgbSwRZ",
  "key4": "5vNagQXDQYfuVQnSUuyzEBi34fdNfArNkBiyqAwRAjcgnXPJz2ZHyr8187RW848qqBrsu1HFzhveF4MdAqGKn4hF",
  "key5": "gFfrZRKUcXmu8EXYhq59rEnsxM2i9VaNApfPCRjgGjLTY2qo922vPgECNpmyZ7wRsZf8vTeqCiS5CwmqVSHnTFp",
  "key6": "5ZYNhVyHEsZUigZTMbC1hNf4zEj8F62S2WccqynUNw85vL1a6diMbJood1SfkyXEMcFKVRv5o5CwhqPor2vLKHMZ",
  "key7": "4sxw9pdJzVEnAF8edYj6zZfooS2jspgeV3uyeVPS5HV9ZabW2vgvFbexH4V55aQLNFuFWFbPeZ9iUD8iz2KnNNmB",
  "key8": "5HDpJudMcDjZB9bwjs2UAuXQwEGFWwzuqru4viAUDF9CLrANBqxyt4GEhQ7p1NYDuj2MEjagYqrhB1Z1FQXH7Ma4",
  "key9": "36QNqNxMSRkhjm6vgVHUQjmnwbJ4iuNAcC9dYeEkaipHSPE4EQQD8DUAKjXCxHiAtBHr2ZtAJQoycAWEgjbWQpd1",
  "key10": "4mzdVDHw7UTkKJPCroX5Q3zEncnFHk9qdMfbn11oNUTC9ABdwjC4o398ZWoHHc5k9faoZPTkSmh4Eqr37PmpZE41",
  "key11": "4GACJj1iuh7umLFhvPbwpD5ELT74bWtfdTHbsBJZ5Rxgy9sJ1GkBN6upgoysCHVFiYCLwjHxDx4ZqGJ3CVmDCo5z",
  "key12": "2MCTuNnqLC7ZAYFWJeymt2imyZMzY1sLdmA6t2e7Bavx22d25Dys6djbth4h7GaCoYWBgxVN1gBoKWY7bJ6bcfco",
  "key13": "2JAxBAsDSUYX2gnVeayZwyHbDT49PNbyxXZEYwwqfqLbpoquRCYWZXMhEQ616D7k15NrCD53ESpRm8z6LmY67ucg",
  "key14": "2a3FSjS4zdGA37cUa7cJAgW1XtcFxUYSUAAFS6ahGJCFWUQdCgUc2MkTgNq2jgqTtYbbhGBkgVYCAFZbEBM5Sr4u",
  "key15": "5RFtR7ddNhsp7Cev3pUPDX6QDh8k1wTYy4qbPkgmnKBSekC4jCDbBz9FJDjQguf6r8ksapVUCdJdocfEPuTSYFxd",
  "key16": "2m5VibdKt8ai23WHnPc8EnkMgP3eF7z6U1BYjFd3uohoaRd4vbEGR9NapwzjyD2ye8jaC3YmZ22HW5wWpoVUNnAH",
  "key17": "KS3zzPCERmGhq3mYeyNccJKiVNFt54rdScFGSf4R4vWLbgZKR2S3GKueJjwUoUWpfbUCRqnCzoJBjHuKjS2KrHt",
  "key18": "52jWnXWGPUspbdtEa8nEJ1DGg5r1CrUuRvj5zkg3GRJM4HpLPNyNSgXoJ5R28zJ36A7uQXV4NKwTjZ6pRbB6A5oz",
  "key19": "5weSLWVPGmz3di1pmT6rCNC3ic8zQ1eDJwg7XjynS1sxsQvAsGbV3W3BgK5FxV6R4JBQx99Jxeu7xnmi52tcs9bu",
  "key20": "4YgYnoj5V2ovHZ3Hw52iLfP1DUDgZckpq3Tcx3dWSjU9KKdxBJSTq3qiMdxuJhLwiHoMxg8SbLwvT4NKtsGR9JdW",
  "key21": "1A2pFHjYp67hP1zX5Knmb3EmsXGCCspPs6HRzFvEVyx5sw2DQGR9j7SwsPHhESWpqbRJU2KAeHYQQ8vshSps9B3",
  "key22": "3rT7EcN4xyASSKbBfaLMNj2emr26LqXHvxx3PcNqkEw1mz34rQSmKVWMhEXxoto6uZg1wskvXocBQBNm6QNVKJmF",
  "key23": "672Up1KviPt3ra2m4mRpYSTVncRzYTYrFYEbzXxDSbjcb9Nrcw73dadwUKxGrFc9M1MnWMe3z6Du8B5GDo1dPW9r",
  "key24": "3y3fHnzCXgwRJTWMfuQn43qBtfH6aUd8QsL5HJKKb6hN4NRGTcDBUM4QoKpUofj9YDkSKnHNrfgV3peAm1j79qvK",
  "key25": "2niGEkKYwBtGF8MxiDRB1QowhLizKeJe3ZYvCyoGebVihntL6vjsA4PYHeJ9RWCfLnAFApcQ4Ls8B6qFeyJKc1iz",
  "key26": "2kJavXiBnxspdz58xrBej2fBgYwjPuGAWBxUTS4uUKXrBqemrSXA9iL2xWXTis3iZj2A1MPg7KeBbHAncQBoFCrz",
  "key27": "DBMc4iQRBefT3G4abqa2B3ynyzm8CGPjJrKPjdwDuHmS3mQMgJfmFUU5D5ycoQtBoJercerNNZDLpj6KaZ9QwLx"
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
