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
    "4GB9XAggtFyKGkp7Ka6pBE4pw9HZmUoQAcF92s1TZizr1E8cRM4FkjRZBQu4EYPCwMhVSpGdUJ45HxL7cJ1NcrAf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k9KcjjZVBf8XdCgrL1RpAB7UY65b3bQL9sPN2DDZmdoLcux6p2orUH5hVg4awWN4nsWMra7t16vDqChQpKeyyVm",
  "key1": "RtM4LXp5LKV7jufHcqXwYRo8FVBDSynaVHNe4NuFF5f6v8obUsMrZsjE1aQsAkVfVrZebDZMq7TgsLAVSiQKnk8",
  "key2": "2nTpkkRuse58KWYRFtLSVaN2MdSGuriDeCsR5QaS9XqYbGYV4hdDjz4iQqkNJL9WedtBi9AiawoYJbyxcrQw4kAT",
  "key3": "54MFPf5pWd3iCiR3uw7r8ywwzAzxLFjHYrsdFQpULBv7zESZYQEbm4422ao5knHMrLDX5zmj6MjcvMCPqYh5gTNq",
  "key4": "4PnvWFTSWcFSxL78dEwWXSC5HdDqL8b9eD7wQqdEzxeeme8B6gB8ZrqHvsRFYtHLHxDMGANQgEydqi1vVBjF26pd",
  "key5": "3wLPen8WJdD4C88Hr1NUCM7aqUwpaCjkcVaXpRsV1t9CTWETFhfevihivR1xfadutcKvaPCgXzH3BgNDcww8gNwg",
  "key6": "515Jb8jn8Qd2B272uFCXgtFMA6fuyUswRVGgXU2gmxrivSZEZGezYwGG1LCokjaBQ6S22vJ7yoZmZDXqeyuSrnE5",
  "key7": "46cuM9wE9NWTEwEvbca7rYRVzD6mnxD3XkV7aNBatPjXqv7Dg16hskDqkpcXaxhC8n4xhAprRmzk6S3z5ZyJn9EL",
  "key8": "vQadi9mCiCHkpWZ4rC1EDLwzvSGVtdZknREumLByJYW3c6JjkwNmjPazoNgxCmjYMbnzv8QsMC1dHL9jers3LpP",
  "key9": "pf7qFHJvWxaJxJQY84cHgUPqcdnyxX1t2SudNrYc4yjaGGi4fnxJ8mXkbMKdq9cYNhnSFCUk2aGv2bGJ6ZH3t8T",
  "key10": "gD58uw7eCs6CZd5BPbHMWFsTFhifo1EzzPznUuX6Quod9NunvSZCRk8R8k3HTb7km6LZscyTqEbDPqENxjycj3j",
  "key11": "2fgc4PYE9aj8Yk4mfnXaRQ7jjFJhW5EeiADLsqvLoQPF2SGejYE8k5WxwzDF9HsFTDzrSfyPGojTvQNrEjKh61CV",
  "key12": "5frheJ2SXjbqVQHs9ekAEyDtVYmNCKvkhNdsjJcmWup952t1ewCFu7LMGJtmnNSdNnAybocbNztZnUiK9TbXqpFY",
  "key13": "4snhuXDjUmfPUrvDWbRYdDvEawvvyQr7YJf8CBjqfv4baQ1Rh5wRncDeyzZfKeWpLVLpyGr2jwwt3DAf5QpUBgDB",
  "key14": "UoRgBGT2Xk4SaWQpospMcUPWy1yD1MZMUoX4oAdK7U1B1PVxycU2sdrSbdRfWzXNNMFse3nqiht6zHxbPKgivFd",
  "key15": "62ADHr2RxvGFHKuBxH8v9PA8fuGwFzMZFgoqbUmcPkdUrQigArY7K8PZLhLubXeg2rB2ytfvuPSKvW1wtRNeptLt",
  "key16": "3Q6BmP5gR16Ke5fRUyMHnBKYQX1d8A7eK6swHCgPUNYfPntKSHWkhQfeyKYqYmWMJKsTfNUdbmRdcQSFmqHexYCu",
  "key17": "5ssq8o1RvPXiixH46icktg1oicW7Fg26A4KNeXhTckfiEMcYp9brXMc9QSd4J81gB4gwVygoRP3vorgRf2JUzFJ9",
  "key18": "4VfmTeDXVKWEcFr1ZLehzXBEeT4tUA9A437nE176StJpa72q2vnEsHwbexyKPEP7EVHHk1B4HWouM4aQr1KJav8d",
  "key19": "ofs7NzPWDx12VRdNR1qQWv9igptKpk7PS444ZN8SgGNfjEKRqavJo38HxPsh5Wb2nNn4cKKpFnbVHVNx5qbKSug",
  "key20": "4BKyRC3hY8DfHxkjUWSEBw7N5RRp7WVzNuBLxCcHRu4vQN5nrLLrXaWzHzns87WD2bkjvrCpedeRAvieDdcKBNiK",
  "key21": "3WENKLHxNP2AUkonZ3chV2PWGnhhxqjFzttH8bjSevSa1Ks8oPwzHE5e8vzVLTMcrSQED7P17hxQscYHcPYhcmtw",
  "key22": "VQycc7BWXQsUX4JxER9GSwixoT8Wyu4KgL3qaawKo6vCmCM4Q6rv5oZFqRnipPimHExZqGfmy61NLTittR4cEMr",
  "key23": "5v5RPQCG1akMgWXzRGHzEnUqWSWdKZTbJMJUuQ9QKcqgiFfgoccHHob2dHtwvF31xND8wR8v1NynWjLu1KeKNKrn",
  "key24": "3F7PCpn4XLu5LtJew1npnwBJCvrUcPP8dhW3RJPcMXPBGPAoxizZE1zWm5mtP6TA3XvitwafUdCRxr2JJTN44uQk",
  "key25": "4QTYzFVBMK6imVGhqJFTC9LogLp7GkGTCQ3mez7jbvxw8SEoXA6HU2dgSsuXjzd3GvFwjfedwbBaqWmTUZcT9Q3j",
  "key26": "1iYwGTV8aiUUby8KoSE2tUQjfhyxDtjwfrjYVHg9H8KWbvGafbxxC9iX6WBgr8ycMF9QNcShEC6XqrchPwhySwR",
  "key27": "5s964fbGptobsYWneKsjpxzG97x5nP6WzobHJjBvuTT1j9rLMUT6YbiXDp3xonKcKpjqrh4g1BYv7WhZXS84SBBP",
  "key28": "3rhxiCn87J93HPMHjmb2CZdddJdNKG29BY9YrB7TRhqsfS61BXwRu3sH8JijMhwWye88mruiA6L72gLKZniNo98w",
  "key29": "5R5RF5mQMJV52nPzmFqNWMHY4mtjaM3k4KN5XfNLh4ZUgLFSV79Bi8F5QA1rrW5HSi6shSbVyyah723hoyteQi87"
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
