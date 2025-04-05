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
    "2Jhvo69PhkrTpvbSzhqa8cVbRdWJo2vVDnwtj4TtRLyDVAiSkJUrdRZgArSZHqmESBAYfebts9TE698T2CjVDsq2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gcbB64ZbHqeKQk6hythDsAU4gKaixzExdYaVw4gSSaXb9LCyjVd9pYt5u7yAmHCJxvbquB81jNnL5ya5rNJDeAh",
  "key1": "4wKdSKu8SJAo8QdD5hNsu85S5MRgyzNxXfWr6B3MaFNa9uPKVcAqTVUT6ZtWLLx2UgNTfXp1NursZ1SqWbK94Lkk",
  "key2": "H9sBrjm5c9KJ9DSigFGFKofWVXnVvdJS2gnXpxPz2S2vMMp6BbbRB9wmYg1kGdVmyFecBdCoPezfiicxcwxByGE",
  "key3": "3BneWbLpCfHv8VyoR4kLLgS4ZmV37nmWeqcB1j7MAN4abc62XVtGLLRPH3x6h9Up2yBxgNXjqiBf6WVuZHrrLzXr",
  "key4": "56fcqnd6gKHJL5RcZJRC7UZrBG1cnsuyP8rmNT88Y9Hbt6kTr5kdvtzdSim2do4dj9pGYoTy3oYrYocHE64YfhsV",
  "key5": "4H4kis1ZXMnKQbEEzc9dCskFpW2uHacbDrngA9qSUHqcE1pcKHE5R6maU2gooqKw1YUwxyQDaDRDsUmK5qks45mp",
  "key6": "47hB7McAq33oLZ3TYFfYARvN23SgD65J7oKMqE96FyohRYjRMsVN44L1CrcnfsqB4YN3T9GoZXicZUJbodjLDhck",
  "key7": "2hAu5DKy6uDTT7FE67g8nzPgYzMnW6MwxNGrm8w9EXZYe3Ma7z3SDbR89yVNGZydC4hA4AbR4UCdjsaF9q3eV2sk",
  "key8": "4bXgZLTjteieMzAYKYZCCdpPyDcAQzZnCSbhqhVJKCbVZ63DYGgJUdWqRkaeJaWBGo75yRz4DzCLCj397Bn4AY3X",
  "key9": "2jnBMD99CvmS8758jEPegUjTTdVWm6wbtLEKBqbCLmUqbg2b9MwYpwmoV6rJWbN2Xbzkeq4TVExtRM6k7XQwFJzJ",
  "key10": "nsJ2zUXRbpBdRRWyV7MTCyhNGdoBASZncMewoGQWn71kyGDWxcSjT6EPudcc6zuGf4LZa13JYgigVx49H5fY3Je",
  "key11": "3KyqPXaeAn37TBgQR6Fjc1cmJauNqNqaJ5u1ASMLBcUrDmhPYUNcCfqvixPoGxUaUTKzDmA8xAxhEBKyKPwx8H5X",
  "key12": "4xCWNk3mRQghLGaUMsEzjjNBbN8gRu3KFdoqPURZR4aEs8q5RTwFbELdonS8ck8vNq6aZueHZwoE8cwyY1e1oFbF",
  "key13": "3t48UGJu66RuZ5mEuU3d15oiaWVjCunNUmnBN7it4ddBHCxyobm9tdqRcRqs5kMsaEz7X7RJLyN4UMWr3BNpmodP",
  "key14": "5bNHUvxBSNvu9Ck63VtTHPATJdxP6bfreCmNCr2Vup7DyiXXqTwjtnkDWBWMQeuJCeAqkdq3xRZk8y6krqVy5i3h",
  "key15": "5kokGMhUo6FBxgdzte6XqUamKcm5qV8FPnuQDDMcNG7rAnj2hEk68UuwMMApEatxBjDKwx2vgar9Uy3mhDS8QQf",
  "key16": "3pNPYtPRb6cCeTZoiEQ7eYba6HBYS8evjUst8mF2v8W9uAq4Qvg7NXKvPG6xTaoAkFgLMHi12zNAeanJgL9R8Jez",
  "key17": "4CGSGd2J3NyY5MY5Swk1vWuTrxaGMcFxmGUc3jBHDrrpdFDzKsqjrYB6akJz3Los1xS8AcyLovKSPqCrpEmLxQvL",
  "key18": "3bhq9r63tXQK2cYcaih1hjneBHZnKSNno7u9UNp1UremwyKbFh6movZNQuBejN2UpUuaLDGhZSPLAbGk1XTF3qTJ",
  "key19": "5RwaCmJ9E76zdN9m5CSGSgxaD64YCMd5WTEN69rpvNc1nBXPvHmFAiDuopGK7xCnZydCYYLqrPpyw61XXtiJqsKW",
  "key20": "4CE26vsiamNYYghryNTDP3tGTtHcDk9e1QinXSgsUgaXsfdwReeUSeXNULoNwT7QRhE4o2E2bEp31Vq7qJH7J3PN",
  "key21": "4J1qamqd6EfCSfHoA6CzJB93Duz7hjSZiWNPWTGap8gMMBU3r7vZG6hv4vPbJChiYT3ffAciTAAqGp9DzjCBCMDz",
  "key22": "3hatJfCzXfLPRXPZNyzwH3M5cA8ToBe4oaMio4MDu5aMZdkE1oB1xJYzKdENSJzpox9mk18KU1SUUBnztzchH1W1",
  "key23": "4F4rtXrDKUoNQAJTcYGLMYgDi9YDFmJSnVxEJ9tZyJGxpu3k5dHyQZhfBMY5LVi17ei6q1V37ym4tCdBs8ME8hUS",
  "key24": "2map9vTrZV5VPWQUZtYeuNRT6SENrZSZFFxcBz3tPdSSiB1hrZTQcwrfJV6zwmHRuYQgWb8dT6KnwV5QPKWaSu2G",
  "key25": "4RJXfQeSy6cKTNFsefpr8K3cPPtTNnkXax3QqZWw9qJSBVhdb4wWro8YaCmxzLtqKrM8cpNRFnzwuAW44seeqCQ2",
  "key26": "4JteHLA1h17WP3ve6zy933HUeAUdrXAoWPxCmkmfFxky69pAKVpdgycbBi3hJq6qPSFQNYnoAtPDhbo7yju6wD71",
  "key27": "5g47rLNW3eMn9M8RXXCZYZEQScpDNezGEmEUUQSH3Q2qUApUGQnCMJi64wZsBdXArCKjbtYdmsHXtFc3pWmNgDtL",
  "key28": "3C3Kx2U6v5e9FjaYyqS8kgnDZ5YTNo7cyKwVhsvbozzDupV1d3Lg7CCjScjrnEUJ5VnoyWwJU6u2Y9twarPF9vyY",
  "key29": "2Jtv3Q7Vvd5KbcZN4yQdxbja6eP55MqFRyd5BQwXNW5BTnMqBmqXU7GzAgdeeWcdBxziVKHiTqrJLmwa19Y4iave",
  "key30": "4WaFrc1sicfCFy4jzWT6xjHrz35atnFD7x7JNzWvZXZLUK2DJ11Ne3DEpnJyG9FTMZb3UvNGUnLkeWwqHcos1ENx",
  "key31": "hXJQrTXSvPfRVTYT7gjqfDNV8RKzxR1M3JQTfBzbDtvvbfDUv8C6AXxJ3tVvWDNJcte45DoToHa8AFSzaMudEgD",
  "key32": "31W4sK368bFpNBbLFkRuAXHHXxcZx3xWzaiWSYFHWNcSayNEG5yKeADvBQihDiFNTusp3BpbUBUGa9MbDsW4NiEr",
  "key33": "5HGHH9L2LYcbKSiNf9RgZ4PQ8qHu1rhaZDr4HV8ztAp4YGQ5ZdvSad7z3BzoGcKq7UbSZhWehwxi8RVr5C9ev5gS",
  "key34": "4YB4cZxz4rxrF9E4vcYjdH5jofhCL4wYLAjiBGo562wYicZCdfk9Rr1SeDdokvi4jS3oUspdwsFuVGD4JTVBYNAk",
  "key35": "51vRnuwUPnbGUYNFzCUdtGLZkfm8UqBWQMgabhhqevJE99TTYZsHa6Tp3uBFK5eoYu3iLySYAKP97FfLaXmF6i99",
  "key36": "592uMCSjbtvjXFufQmDZF9VTS83u66uSmnp5yHPNFsJA86FuigzGho3fax1WLc2QzodGjpj9mNhNuaZceUBEq9hR",
  "key37": "4rLzX5fjPwDiwZCFHrgNht7DiZedpDw1WKP4zdwQ51WePhGTfkezkQXbr9piRNLhB6PoB9ADDfgHbCExKjEzDmus",
  "key38": "263Pne69LwCnsQvPZMLXLKXs36hBDY9pKoN2kkw1QwgJbKa1U7k8LTUuLRKtKhHeSo5K3R7vDLTx8qKsMj2ioMrR",
  "key39": "4nHTs3Eh38cPLA6KcVGy4wL7CgWwaA2ATe71z3m15n18DZpRtehXG95Jz7jC4G3mHF3wasiQhs8nZce3ULjPe4vA",
  "key40": "S4Fs8bixPn9ESz2bFJtgTZ89ytHE3DvrroMAzybHDXkt8Z8e9WTjioUhZoABgLcQubE1SfQD2qeq5Up9r8S219n",
  "key41": "5udygFhJEZtYKDtDRTZrw65msrxajgzbbYjGUw9tw9mzECq72SKKmaKkVgBqix4Xps1b3LacRdgTCjcrmHTYSLYs",
  "key42": "3a25vrv3hQX6cybp8Kwy5nfCG8i2857WPGZQiDFhP9WP92WBfLdoCvGQQFjfAeKkeLB9F25GKSYe1x77SsdTqHjC",
  "key43": "3LbJBo2wsgkrmtYvAShT77EmXJbvJVf5ATy1vFrQZ5sxZ5K21Mcgf7V6skNrMiRah34KKV3kegLtSuYpZNryih3G",
  "key44": "2btF1yy4jT6SUTZKmr82NjkvgJGgdEPzzQfwUh1xpvne7Uv9z9BtEyRSepyo3ztK5pGv9miDf4xyUXmiqFw1EXx3",
  "key45": "3hT5BZx9JHCb6jrVT17JJ94wVbztXc9USmCW7rbETGpfZHU3V1kUX1uUbPhurmTnDVuHtEYApQAcTJqJgJGztiok",
  "key46": "4RSNBGmPmhDjd9UkXYUv52ETo3wUsMyoN8vhvXg4SZHFHkRJY1HWQe5GMf5BrvmTafCaukuxb1r3UdBLsmSsACjz",
  "key47": "e99rnAUDDZ1DA1smBFKzNiNMY2ghbVbvXjrUpAtTYwFijWj8TU1TbrQiUH1bBej1VDs7NTdJ7YGZzc2JgMpA94P",
  "key48": "5R2maFEHuhZPEgapE7ZuqoNUxmZjcJzV8xjmdMJZBRjywSxFpe4s4tQpaLFMrLPvvvrxkmhSQjj26SBo6iCvLVfw",
  "key49": "2iFPPZL1KYCQ9ihCixXRcW2BqYpDuNVj656K4X9npRyjaiqZw3pSP9A1HWYxKMtJwqAHgTL9BRvE2wh6zKQ5UHWA"
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
