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
    "4Ax4XTGEj59FJZJcwT7q16B6QpvZbcvjrZSKBbxWuafbPfu3DLoPFCJSC6utgSYCFwHFf5XUwCopEGCJWDr4676F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WvVfLMvActHCQR4fYiJ6e3Zf9Zj2Tb3Mn88i3ZZ72oP8DB1qBbqTBopbzvyvnPv59FLUihE3CLJPnJdBsKueKZU",
  "key1": "3rUVTUWQGTrHiZqRYfjr1tjPgHpX7cmmex9k1XYyjeRyn1E2pgfVjJ15ZDbisHAw2TGC6fzq6ZZ3uFebxKjueEXQ",
  "key2": "yt4Pcc9M15PdRct5Ptsf6ASYGY11CLFjbdfkxm7Wn9nggUJDLHF7cBoo5vaKJEgm1acfUaPGjfhWkYFHhpo4FMr",
  "key3": "2XSxLdP1JErygiA1XfGRBySK9DDui3tHsGTQxVK3Gg51MDXnaJs32fYNbGyWrneTzFndYL2ecB5BsfvRQEgbaAVU",
  "key4": "3NHYLLpHWa6K9L7qurdFVYwuzRgLphaGyMZEjFDcgrFQ136Z44FWWHGYNmtXiturrcVEECui5d4EJ6eNznkubBFd",
  "key5": "5bggSucXaka1CWfDgT97arT73D1dhjRctJf4A6t9raSerrWefs96d7u35qGXzfTLDPonmuh5jejS6efDnAXAEbdi",
  "key6": "3F5zjNpcUnqLjcxukzWv5B3cWiiGvF5rXfT5Kgq47gxsNxQmGTbnUqW6zgJsNtDS7iJwAPu49rDcXAgsgUpEzUbJ",
  "key7": "3c8GKLfAjSKeKzyWm2BwcaCgNxUDVLg4kaB9Y6B7F6KC8BPJArQmr3i8pZaHqeKZEyeUymRM6wPoDLWucFpqAAkF",
  "key8": "3bTuUM8dH4yfK6xmLbYTZYZuUGSgzCo5Le11wGv93PoJUMryxvYS6B8XW2TUXqBC1Tmv9nVm6KZF8JLpqKcw2ZAX",
  "key9": "6xvVg9qCGEyf9z7XfccGb3KViJw9RVmrrHSG1aUTiXYPn5frnYiKUPpP4VbSnNkJN5DvVRmSgQdWRByvmMdbxa7",
  "key10": "5G31twY6yLQP5LMyA4auuY29S7ZcoTsM7A5L4G5chDDe8jgAVeCmq2VbySTgqmdfQdy1e4mvJWbSmxjigp1pkR5Z",
  "key11": "5A51HmKfGsNC311R2AsYmwAfgab1hAqXD64Ht6J97RhuXCtZcK358Ymc7Tn3oREw92kg2776gpZQZH3QmC5FFNNt",
  "key12": "4jk5WYAyUNAX2YGCdYkKbZiyGYN6NgNSFyu1VzDEgimEYRRKZApsMXsK2bmLakNL18xBY9LFHpRfTEz3jFVXCmBo",
  "key13": "5cjZ3UAog4o1PLJeo3CkTarWA3wZv5ZTs9rxWttjFTUc7eeTeBY5dWNA2DEULuYAomnPvFZVLG4TzuqpVHwS4sCf",
  "key14": "E3dCegQdNVsoa6Mq1QkETmfnqbKmeRX26xDmhTv3bkC2NZejPQXokoxLCUKjnd9rac9JnQbqNsRUMFmGSh8rSi3",
  "key15": "4mXWVSzJdvbVSxzRUpwL6j7TvJAs5S7VivmVajCTedsSo8tjkudX7G62P4SG1Azqcz8AGCnsiyL6bibTzd8nuB9U",
  "key16": "59h8NSPmk1vi6KxQLFr95vdmGWTPq624y1azH7rW1pJGFKuu2eF1FXwFdLADLDnesqyfkjusQrD3jPRZVQadxQUk",
  "key17": "3Q2Wh1GKLintT8he3GkEkziaWNJ1NAmwDdVFvkje57vhgeoGyPt9iJaww2h2P4jLTgfqxRqifYQcN5dtkGXjm8nE",
  "key18": "2WqKpeXB8P5MVudiKTSAVGFn9iokFMv6GzxFitS34Rtzt9JjepEb4mgFjQfZ1CtNRufzkGphJXuaUFpFK54ikBSz",
  "key19": "3BToe4C5r4dfEBgDJ9X2pXCe5S3VhreRHxYtQQVm7DTy1C4onj39i3fDuWJHH3sP3DjHvBHYtYVmEHvMSzGm8P77",
  "key20": "3euRnc42Uh3uQTScmscFAyrbobMM2drDHrZ6CGPxrwLKhns7ZRZYxAEEoahhRNngRYE7zU67HxrQHRkYETjmbbTB",
  "key21": "5NGVipZTNqHtChH9N2FcJHRMztTFnT6XXzJKkRsHGc4Emr9t2tfPYHJNd1CJc7notXjcBUCt2TNbffobp8eBVDYY",
  "key22": "2SRh4Z3PZKkj5RYi9fP79NEZNwtugXNs1LuKDZqTKXM2wKZhcnPsXahh8kBNixs5ghSMSPVYq2kyvzpC1CwA9sFv",
  "key23": "5YZiUMLcMUs2NHp1d5dZsf1uRbUQAmbguh38E6psMrpAsCUNUw5er88nupUy55omRuDkk7KjDodZHBBx3EWA8zv2",
  "key24": "5wxTz3CWm1x49Ua4R8mWspe6druqTaPHhyNU5hqs5E2wqMQSMFCmCpwy4kKhr2kFh7opDmq52UDcCW5Rg31TUTr2",
  "key25": "3Agm5CQ46hixqCbRK5mX1qCJhfnPn1THKh8dkYYQY8WnmejsDKozbbqgKJAPnfhJxSSWRVdWMPhFEGxVXxRLpRwi",
  "key26": "3XNKsDSLSdvVMknC2km1f9V4e8XvWQDuBaF6QE8oTWj8DsvQaRn6J3KtpUxSV2oy252ZzvUithZxD6EcgDWW9mZE",
  "key27": "AWvbbMyAvq4hi8f1fWkAPKTRspNRgkVFpA8FGhWdt8ZAq2Sm7TsC8rWShJXfLwRDPWvC8iBDxi44yyypkyhfheH",
  "key28": "4EFctqwWFj823UT5wZK7fR3DVLFM7z4XUou6KgFVZUyUg8yNbusLxBxqLdUmjsyMnbN2RjjqcEqPNxYcKcaUyDHW",
  "key29": "Pk1yyW59vLMB6HPfyimH8seWzzzEykBwEibvLYyJSL8u2UwqyjLYxByHZqeYK3YMe2FUYJA1qn4sGXwPwdeBRcG",
  "key30": "3QJv9H8P8KWWFPqyPJAzGVc9SBpgEgVH8PphT3Ftc5baeZyr8aGt6xFCr96R5VqKJda4LAkp2NriD8os8gSwPZLC",
  "key31": "4vGq41nPFitA1Ksy29VeAjNGwZgR53XReAXZW1r4eq5ipYi9t6W7uGwbphnv6QEm4qCjeFzFZ2Zw35rVzqN1HPaV",
  "key32": "3Qecgi5Rvi47SorXYdDHrSMc9BfkULfVLKvcYRWYHpWXrFarkcHZ7njqeZWZYDk8T5Un8vEBNeF6N3VqU4PgvXki",
  "key33": "5PQ9gKoe6otHM3oFywcFzjioxwKF2v2m7vLsji9qNifcFNnJUdWjv7WERzYuK5knUcG72BJiRVnn61uBWYA8epkn",
  "key34": "2YNEqCR7L7oGQ2x37vhnKU4f6L1X9M4FKEZxbXw3XvQfFvVbtEdM6inegp8GAmfi6yYvo5DHL2MUAxBRjtcxkv1e"
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
