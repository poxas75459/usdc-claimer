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
    "5GcgxmJgKZHt7bs1GtjQGgnspbyPpjpDss7NZxSZsWfXSc9bgUDp54AHP4S1WJaisXcCxxU5d7MXBjSiZbS33UW8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zgysWWeEZ5c7Bm7RD1gaCudNVK8G4nFjM654yVignLmpBxC2hYf38bHMRkA9jtVEgLkXv2LaAEisaqzpWVAsUqv",
  "key1": "453iJuGVvqjMB4hRFfuTfnnDikTVCz4EPhjB3GY1nRQqcEWKTvX1mA5HFf9gJERcgv7VYS4gQmg1w3nXeczJtHYg",
  "key2": "2XKmiVYi4ci2F9LyFzYCJ9gTVbQQqjPF6twUZwg3W7SLbtXa8st4w2rNYEjr1BWu4mXuKFphSwhzZMkUMarPFPxE",
  "key3": "3N5bMBx2Gd2eDeakz5f4k8yvxd2bGKMgxEnL6YBF3vExnf32gpa23Gawfx5aTH38jUjdGLCkGtCcwuu6ZU77zzsN",
  "key4": "3eEmhzpKpEb8eaxzQXqEhWpssZymEy3XymZ7m3ZtzNL86cHscsAexpsMZVytY1abWnE7n5MJhsouQ3GXovkBXe2m",
  "key5": "5dnNdBaX9iMeCgMQz5HgDGNjW3H87rseeQ8o5SFz7XcXMfovHjL4vh3LzEEc4K8yganx7WPQa9Sktc6uf6KsTsUK",
  "key6": "fnyE3yuqaYnKt5ZUd4xCsxUrJJxAcEEf3YQuDFjGZGKGdPDyk5ptWCMhBsrbVXnuBm5RkBDiJNDzBVXzojSRUGx",
  "key7": "x96ShbuLHPQiuf2dgbN1xaEJAaJHJyWRR6B4Ye8mSFNNPhhHJTprtt2ko24C4RtetT8vHveYwJ9NtVkH4Z2G84C",
  "key8": "561A4N7UxsfoZLi4UrWzQrK1E75RX86jmNebBiE2cVeWAbXva9LJZ5hLcZN5MJQuKM5K6gth6mKFuHTt3uUZnEiQ",
  "key9": "amdYXPYVtXzAAowHXDPbBQFg74qdrzA6qimQyEVYwRHefia6bEJwUu44M5nEFwKeTmGXG2s1WDqWS38Qvxfw3MT",
  "key10": "2pGw6adeq3w9gszfdjY8guazEyLaaSqjeHCgKwcGrFCB2om1iDy2q1spG1PKyoKHrAB7QSVHQ7v5LYURkxYpUmgc",
  "key11": "4zAV2cfxxQYhp9doreSPQ6kcJrDEW66K4hjubLWhWDjZwdGMEfMvYzQPzEaZ8zJZhXcCDjkjddHuSArrJFSEMsHa",
  "key12": "vQ3HSvZ9A3RHC4K7Jb1EC448UQmTaYHXdrnvAd5gWmQVVPseswLvUw83FS8TwqwkrejayFkJWLQc4T3y5d4Dy15",
  "key13": "4x7aGwBSQDzUgiZ5cS1ySHBWZTncixHmnUdCgoPiocKYAjzLjcLmjUPcZ99Ht43KytfefMomxzirTEPFoddkDrKM",
  "key14": "5L4acgfMUJqSAmCN6xwdA4yWnmVngoLhFXSB28V4jYKEx2QG3uhxRPzhuGUzhNuiqnQHwJEgXMHdcsi3c2JiPGci",
  "key15": "5DkPt7cDksLA2TowxHQmUJ1xUC7urQEgHfV5DTPKAT1BhMP8ZRzGdQ5TgYUTXHRrzoqn227LTA64RqxGcspYs2hu",
  "key16": "3YVNAWp8KHRWgKQUqq7Uoig6EdmzbKen9MJ1nydPTRxXJa7oQoG7U8281b1mX4G6SxZXrHqtYHmVS4CWA5mUft9q",
  "key17": "qFNJYSCv1UXP5j4kmHXrY15TwSVbLgqqaGN2Z1JkdZctm5XG3x1m4NwJnvCETXMY43WCHXHN1tmaVMpW1MpYTdy",
  "key18": "5bymr596fz2pqjEqaoqDqrERzkam57AvdSQwzsFbrS4fBtRNWCYD5DFSV4KqdCyZnjjJUAZPRMiGZ5MrbcEXTSvv",
  "key19": "3YGhh3BjhHcAScX8pKt8ZxmtEVfqcFEerJgJsmjXzuaC6YihUXtW9Fobgv46ahfQ4BqjtqzVHo1Dx8T8GvuW4pRo",
  "key20": "5jiCgTdrdNRvsQjnG2WEGJ3wvMQpRQEHmZHZZRwFCF2G8eVJqk8NrAMcsESc6WoQXFh471uBwibYdZ8wbfbwZWeV",
  "key21": "3xirExxyyzWikG2avimJc152FBYaDG5ZSuyPmEjQy8JsoyRU9UUj9xW2nEsUkWd1tVtLAVUdnFLBbnxtWk3VgUx1",
  "key22": "2xRvxuFyAcZ4any9mxKA21B1qDyZVdYCTw5aqWAwdKHE6ZnCh665YcU5nuxuwEXXA6ab5szYdWwdEurpNsKT8V2p",
  "key23": "HfeDewYUmUoRwkVHg8XkAEJoNn2FBEivXN2XNAtXDYfaRp2WcZXuM65fgwnmUjRNR8Bpcoiw4KNxZFQdwkpqRif",
  "key24": "Hd4DFwabTVDLq6ZfzWmkKJevtoP5Ng95XRyrurbNBSmA18981ETp4Hd1KSDadG4Psnd87UHRgsAdafaAy1X5Sds",
  "key25": "4BiTMPQDLNVxG97q9ZEv3eZYgqiabTaMopafaZiSyg26o23udpm4xuqFYNgcptMEEjJVcQ47hqLXoL9bhGifgD6J",
  "key26": "3yzaJwtMr1KhAJoR1PiPTd1zVkRX4zzwDtemiykq334ShKoMjQCGUB5BiA3wmDi9htPMAmj1kFqjaXQo2SSrfXxC",
  "key27": "5w6m7JRZtKE64c9kypB9riSqSEq1dQFvwXHWNKech5MUePRPfkYB3y7YXzaCQnUSe2juG69LPKLh4rXwLYV9fjQF",
  "key28": "2SKHxJjMyeWdA5FS1rSFb2EppRymkYFcB3bLrYDsUSKC3ezbvzNnS6hq4wGYpNxnmnPyNZNDg7zcGA1TeamN1Vep",
  "key29": "3Nk3rSYNUmGNqmaKh48DPND4twQwc8iCZWZrxtp2hTXqWsWc6C5QoJ3utUHy75SVcdDsDfVY2z8LegEkLDVKmwNx",
  "key30": "ockTQMaSd7VJQumfSTrHxnXF1BpENJPmgup89srtF4UjnKsEVLtdGVcaKc6Kf2CqvfFD8ZiJKTZcTwTRKMq259g",
  "key31": "49Qi61pB6HyarsLwQtC5ndaKo3L5x9xfgin6fiReqyBptNNxB6mVemh1LTDCpyJEM4NLokpHuHkDv8yo4aj9R5mw",
  "key32": "1pVnmCuzPEiDsF16kU2xh3zfguTJV1tTEyKKTpnJJ5yHGJYw8ccPeg442eiW4PnFWptT5Jfpto25bp2AvPxJQnc",
  "key33": "45am9qSfis3eYebmXfQCDG9dvhcrwBtTp9Pm8fBjr2Pk79i69ZPCjoB4neoop7wkRXcbWaKR4u2KaquFUyikdTfc",
  "key34": "nqEkgc3Ak32aUnRr9VLNgd8U7hUzVMLg1cngBmdJYiXgRdCTbqSjrRoe138f32PTeinCLUiKadRCDF7CnGWLiFm",
  "key35": "3MVEHXHwnjbSGUsEzuf2frPJJWUgmThpGpscpqAg5oGMEjLK1Jb2f7UNmZnmgonfj5h6KuEw4ShWKvwQFRXgEHrS",
  "key36": "2oLq5E5kjQ927hRuyqhsdgB7bBeJoTeYDjrmzkSpL2HvfoBx79JzacsJTWDxbUyWrXokvG9MHPqPy1npm1Mfvo5j",
  "key37": "4nKbTCoGGGgUZWzDqPnRnVoJ4JqSmcS21qqpXWTsRQdxLDcp6XJam9DRL49Kr5N2NuZJgqi3N9uRou5iMRxVJr8r"
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
