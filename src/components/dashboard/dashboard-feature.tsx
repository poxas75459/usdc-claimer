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
    "4csShpzwHR2ubWYPG2Z5uamDhWm4pUq8djB5vWyhPfzmz4ijYkbikEULt86Pa6um4uMvVNaFWinD2m94tiPeP2Fa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gNgxdB972vwMbCcEVwEZqrguf7rfSjzR7c4LDHhFP6JohcaGSx5DM5vKMxK2pj599rF5YmZA1MysTsiUXZMHFmQ",
  "key1": "61agnuA1gFJHF8ubAMcfnXGsa4UBeogQaX8eop86PoPqDzfExUdSVTZnvsmKJ3TDbyigR3LzhUDndQNEfb1o8UsM",
  "key2": "Nn2ZJBPt4tXUcfphztg8FoYQfh3ZuCv32TRKqpy75jx9wTKKRo2zhnFEvskZ7wZeRKub2N782H7c8YTMRzWzAb2",
  "key3": "53npKq9ujCYPLP2XW5HCBCq136eGxudujtP4oDYDtcY6QB9LfhkBgZZ6UE4UWVHhuTHVXZPiEoutb31HwXzA9NgP",
  "key4": "3YbU1dDkQQySdXNTY1KrA6piXZ496GRNSXQsKcrXdeWwmCvuVz8qeWaHiENMRBeKMwrJs775W7FC7MTFKo8WUFNu",
  "key5": "2uoVod35gKv7bG3NwhEaYtWC8NovVRVBnwF3xAxrwf7zy6PXC9EwZaYQwEnjQuoD7z4yhb8Q3gEV2ybSz3t6eEjt",
  "key6": "2VKqW95QvfGdfijjaYqx7a5ZyJYCJU3qbFrPv54zps7Wqp99rCv5CPugDeNfVuDXSnYf8dsnttkeeNiEvf1XogBA",
  "key7": "5AaiYhey96PTsf7ipdvC5hejSRrYKGmEFa8MAeJGbs85BF4QrpuLx8b2wS62QfopAGnmkE8NqPB7e3zGZUikviMx",
  "key8": "3byC6jQScJpPstfHeioiZJRhk9ErPUkyVAucvQEm1obMwz78aftkALNQRgRTa83acAao7EZk7WjH49tC5fVXXYMk",
  "key9": "9mkWXbapRgwnrdXbJZiUKBJyYZB48fj8bKnSxjnuAXaJLAYorEbaktSDbzE5wX8ZpRdGJ971k99DBAXaBaWxtBR",
  "key10": "2KTa5C6WwguPCA894XELGP6TshcK7vyp1cMLXhxa2b2WeNJ2iMAdK8AYdq3e7NB1f2jkftkFExdzKDsXP4Pgico1",
  "key11": "2yvhC8P3KrVEFvTfEAHzW5pGhzGGuzWPbgkJZKbjsPmkMuxLuzWYL18RJtsiJD4bH21UPVuvTCNkvcFBo9c5Mtuz",
  "key12": "4tR2DSK3qEJQNrUAN1AMd3FFMkdoU1rJKiK1yPedwNGLQkihNSSTokV9NpQKQ2xw6Po23dW9kHEPcANYGgBwmomw",
  "key13": "5XXSxWQr9htk46G5niyqHfUroGe2KHXpDU8fT3N7rgjKpZnJNxaLTNKtfxN444iJL9WpL3KQJCSKiRGMuhT25YWw",
  "key14": "tup8dkKMrh3SK4YYtdFQWg6rvVsrFFHguqYmiuR5hhH9veBoQstjutJaL5u1m6Rx4Hz5VAhLjL9Y7S6nYU78jvZ",
  "key15": "5W3ASP5YGLmPkqsPbkgvzj2WixnuqjFAUMZt6om8cAeQcchX7cECmzfbLXui19ewEnY7MtKQaGsveYBQMF1QA4t4",
  "key16": "4bAH6MNa26Ya6wr3HoejLdxUfZ5SucwmoscCkkYYwTzafb8Bc2DwThFP851wptWNuBuaZ6LYB1ACKy8NtQe8qgaT",
  "key17": "vFWtRfVdYy5iLy2p3QXHTvXuA298PgG62CEbCF2WDLpnpA3X6GEKo1nPoJnFFVVh8JGJgTRpHgzDCoWMwmA4Z2h",
  "key18": "2Dowt5goRnd3yzT7BySGGB6pjTP7mb2EsHfYAykT7Yr4nPKwzdfDkJ1BqjaeW9uMYwgYLr5nMb8Xy8bcBG6KWFGG",
  "key19": "648RekgUr83ed1pTbt2xEt13dRUohwRWK9rzkaKYuMd434nrDV9rLKpoMat8b4okckxo1BnY4HTKy3NnGNPV2UYy",
  "key20": "qz1mU4NQNjiqY9ra42PkamA5xxnyTnrM86njSt6pvJYjgeinMEShx623nipM4C8THgvMNe8PmvY1akfW7Fg6DLQ",
  "key21": "42tmj4kRPr1uorviyFjiXitp913kf8FjyFoJMDEebyWkmyp7PHF5mmV1h89mY7Yg4xk1ZuBadPTXav9KG2hNYzU",
  "key22": "or5L7z7YbsKPVPEyVbeM8oAA8CZSrvDLqjW5EWiZEuD2TSQKCr47YgSuojD3XjGMfKbH2SY4hPSa3p1ToCftxoq",
  "key23": "5Kyxo5VVHPpcXLRavdMsqutnNVTzT4LnVzRgesHLch1vbzRW7tfJ1Aqh5AsbfMGFnnYDsy3yNLLeZoMa8LWiZjNc",
  "key24": "MR3aHEHpkP4hfBN8G8q3AqreAo3qrznrscZ7Wb1bCeX2K3rWR65XWrjgi48r2TEMK6dwXdhzUz8aLRQwNaTFj1S",
  "key25": "nHWZdyZ4FX4UA35oQU2M1PtH6N41paixoVeoAgr9yE5oUb9yuULkjLY4PDiYoeD7JEyHjEpcH83QDH539XTUgyh",
  "key26": "2mirGBLxd3k573tPQvyAgcH91KMaAjc5okbjJ8bPWeYyTEAem7hZMutZYoiYZgSBcrfF33rSwr4okAND2qHMYJEM",
  "key27": "cXTCPr3SckYZUxqNfHhSvx2swsREjMD9v8jMd6hjEk33LrWBnsEHnSBxK8JxVoyiBpFRn7q7zMe9gTu67V8PNk7",
  "key28": "2F41H3ZqRt9R9zzfU8hTo3nJsypSipoAWWwBhMnQXVrjF1QcafjCbCm3C78yHBufkjGQoJCNHfscknAeUkzXbhzH",
  "key29": "LNTXd3jFtG2qdFnKZQqDo4YtHacPMsz4UJqeu36nsmRjWH8Li7sa18q2xxLEQnaDyB1qBUuPn1yRee97MYvENNc",
  "key30": "4EBuSsg2D6zPxa6M6b2M43Pf2bqsmmNzNcevRtFxkbDuCCBEZUWZrJAvVyQhvKPRrJBoBnd9omvgov6T3oHSWXTY",
  "key31": "d8QiPmtRGCEpGNaodvqWcMgTUgYwZvjs8Uz6Eyk27QLZw3pWg6cc9H6KvCsfVRqjfAxTv77QKRrysx22u8UHDYJ",
  "key32": "2F9MNB4qbLMLaAgmdAPK97znWysc4tZGfDvgSW66AqPDRtZhYGvoSpmHxc8uDd51QzWTdMGXeqYpqgq8dL7zVXzA",
  "key33": "4ttyvFJD1AKYpjp3z5Fi7YGhK3Ecm1HZevc2sGZQLai12c5ygxLzdtPZsuqKq7XYMK6Zo1WGNzrcr486gNkvAqre",
  "key34": "54Tv3bgDC3QbegAJvGdLHtdfBRwjGDFtMcqubPFApvyyPANsNhuqDfYThruEJxc2H3m3ZqLdiMyapaLfzvZTYiuL",
  "key35": "vSWP3T4fxwNFrk4Q89b3xWq7QjkwVJXjsUqA6NoWDhHhE5Wg1ZooSggKhLYdyPxniFP6gmT5bRZv6GdmE6RChzS",
  "key36": "3CZpDXx5M63n5NjtWnD9K3rANUKwCtZHuwyKetVs7FUz3YsfrRpxRhU1ZmrbA9pPNvsY3eAJtMLACkLsRjamsg6D",
  "key37": "5WpkLtCeSqpqm4Z7gg3qWeLdk3wZMLdJjw6GzGLiW71XogUDfqQNNqB3cg9884pUb98qB6BkMQnFETqr7i1svw6z",
  "key38": "2TZeDcwc5NAgugGX9AvUD75dW76GjVoSs4jpY1yjyvEwtsW9QV5MFkH67xmGBdGY8dfVFZ8SNwA9iABkVE2kpWjf",
  "key39": "4k5L4XYUXsgT11ScgEuDWfo21APW9cB8U53FLBcnEY2wtiHxSbdB8yvrbvxpgee2Ac98Yp9bLP6UpWGgZLeEXReP",
  "key40": "4ehdRJbkAnSwHLuwuM3iedojT5RKdWcgmTzjgyT1d4TMGeoq6naGmxij9ZsKBhnvbLyzV4jpnLFPqM8nuGgvLBPD",
  "key41": "JYV3vW3ENXaG1RcdBnMfYCLfYWoGCjwj7QxtGvhguDRLK3dCgojTdAxgWT9PbHGUWQ9Xgj5zKLFVFKeBJVzkRjj"
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
