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
    "561CisWSc4yy8vcH6sQbA5uVrozxEvzPrsCPnXMP7hKnLBUhSsgMxbpKeqfF9vFvmAv8RVT4XZX7pCmqZciYAfJC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R2mNbiUepLzZPbZDKJsWekAxAN8GSnf8hBQYUiJEgyBRtGszjgJoADHryAEpoYNMbGCrBbWYUjDVPct8bNH1VX",
  "key1": "3wgCAs2PKQCs5yfgGpBqoHPR7RtjREu4DDPsowXNQGtgVfkMVMRFdsreF7MbuJtW3RcWbw1AipcHve88FNkRMzs1",
  "key2": "zuTEfr31cFnToGdLpVg9jWfWbEpFzxS7SbXyYW5Q8HTxwLP2nWjjk4QbSDuJwPVgynX1CTY1fVgXA49kexFaca8",
  "key3": "5dh8T32AqyHiKGdiRtLe58twkhqJdm8Mfj5eGTzrZ8xtj9VinavDhm4MkGcb27C7gk8UxaqenevzH8ToLvrBeyge",
  "key4": "5GM85Pya3TKkgJKeAQh3UrDnEUCj8nSw5k3zbF8dUhoaSrE8pLH6wi1hpVRkY4cg1qRTqno6b7x5L7jYKEpkx7iA",
  "key5": "42x5m3zNTanA1yUWzbuWe956H2y9DrqcN3RrG2ZcevZMJVwZ6obta78rnbn9WTxUHohazBBkQpkieeQYLPh8YjPe",
  "key6": "3NcmXFArNDmwK5i4hvYUNyoKX79YCRJpQwTMHqiYjK1YZa3496vepvChHqePK7vGTiYiQC4e9WHSZkKe2rW1svQE",
  "key7": "5gKSGGt1C1ViHrFg1VrHykNdr87GyoTvB4fMS6oRsqwE3PTJDVWqVFBpGHmn26TbwozGuJNJt1gCLrLEazfgdjjn",
  "key8": "35UqB54DF8N14SYb7cTteuxASApb5E91eeucB38qnmovNosecULhuQtZ8ctYDYwU22V2FXTzaeBXGriph6cDZUEx",
  "key9": "BP1Pk5esK2ZYFRHm1F9vgqmy3WeZHtQkzyrCmWnBEetHAarsZq6qWA7w5Y4NicWK6vae24vof4H1Thr74LXsdTY",
  "key10": "2XsW2NvZmWX4sbCzWRWhCSfJ59qZi1rzZwNizsxEGnvuHFwhJSx65h1RWCJHu72BwXE6Vv1GSZSRwfnUt6iy81H4",
  "key11": "2Nbmg3m4H9Pput8fbSf8PNuBRBiNf22UdZb4xb4hMhQWAgKoezF8JniiZT8kzYv91ZKGnmPuG6pLvwXRJax2zyev",
  "key12": "3S2uRutGLJUq8EV1dZgQgVm4RX6HrEFibt1pNqNWskeu3k1wrwJisyC1MyWmTAVgGwAWKjV49zds3LMz5tkbhnFr",
  "key13": "4QPtcCHN47PHLsDTNrVDqEgdivAmEoZyzwVM8j1bnQjHthuYtmj9jPX1dWjk7tD8W5ThJ24rVQ94RbwrvNPQSGb7",
  "key14": "JpoNAgEzHX7Gj2LsyGy25WsLeBU9Fvdbpm7UaykvnhgxYYYkbfHs7Eqwqbn8nFR76ysccKrT2iQYscVAcr5YmHz",
  "key15": "3iRApu2KJhQ5YYZAJ4B9iM1t7sC5EYCowCy2zcygLUzYeYBqFr7sFdpFDGf4n1zpc7isJmhCihycApta3jdvqynN",
  "key16": "f84iRC4QjdU2VDTAYyvWtoXpQrrRaZnGanvg7MYoHnNBSPmXz8aFTMAyuARbQMiZ5jHrN4CRnowNz6FK6UTT7hP",
  "key17": "4FPFBmsfLoTy96z8NZjhY1dWsnfhVAWkhj9fTM5cqmGBqm51zvQz37Ug5Pu1bfTTsVTjVmMGJvjhFKuXWtK8sBbZ",
  "key18": "2XUx6V41baC5LnixQ6mgmsnS2mLsN4z6pemnC7xs2H8uMhyRYA9yuu9XMes1n2EzSj8nBwWPcvSe6N1Sqm37MPau",
  "key19": "3qAGkZWveUVTz13besdy6iaGzJXDYGTQBSWpRthYbDXZN9aPPVNrkzEw1HhRVHRumfqTdJom5tdz1o2i66Cu9ELb",
  "key20": "2S3eWgQHGhQK9ZHWZdfQA2XJ8DM8djoh1oJWjKeLN7TuDDPDz5HDtvqUWRrGmTmrao1kEihu4EaMSN1PUN2g6fMD",
  "key21": "5Qd3B3DV2tp61qj2SqMCaZSGJjzRQpM5hMHQYLknmby4mdC5SqkJjMoXNppJUk54tpticLKZjjsXtAFSa5P2kXP9",
  "key22": "2wEXs8QSTUPgJhFdwTGZbMwT9XFZFfregXqPoFgggG7w3sYfykZbrX3dNi6AXCW7QT6e89LQaL6oFnBsuBQ7VzBG",
  "key23": "4zMw6t1NHDJgUVCRoJVjU4s33tYh6534vdpHqSMErSCq8QnuHboLbZwUERQQrTq48qEtRDYRDU2aSKyRx3sBYP7v",
  "key24": "4rmhDMeTGGgvV1PX2VME2XPi2k4NFnF2E5cxWY9Zwkb399fmZZqXPW9XQwfC4uuQVfziXwtijFXYgV4yRVv38BmE",
  "key25": "5zEV43GGQgi56niLoaxAAHxJRcjT1tmf3CoouacUzEpcXBSvKRKY8C858bcRcEyUSVCmF3jY8Gu9hGp3WT4HqZv2",
  "key26": "2jt3mEoippevQ1GLcN8FmKaeAi6JK8Nh81Hrc5ijdUNzUM3QhNGetvyG24SUaGNYtJ95Da4wcCStZAnxALK67Pjk",
  "key27": "qCp8JqZ4qW5eSGznRqHwHkED9UoTA6c61sWuKZvRHBGzWf2tddkajcqK3DapuSUweFMfNaknP2Z1ehEvYCuZhTm",
  "key28": "3RSE1iGA6kg7nQxvA8wGZztJGdqQaWsqvckVc5zGHb7QsR58hWNyivcP7TG9y8qT7uNNng5SJNhfpCPxUcJH1G3j",
  "key29": "5jBZLigjuDMZrqCSrPvE3a4kXVeSzmA6sUS6C1QJAZTsmgkoAq4F77z4MZH81NCBAXLVzWLq9btXCWgX1VTZ2inp"
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
