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
    "3z4ar5uEBN9AhU9gUtuEkD7j6shZZmPA2vssgZ41PJ3BRu3R8ndkECjge24U451XGyNB8XWEcMmvsqnot81eknjV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eUogn8AwRqfgevuHtgqbwQtiLREsTp2W1A61zzmdFo7FCAGA9afZmsdLrtapUYxZj2yMgL7icLxzAsBsBgyv9qq",
  "key1": "2ccPcvd6sP8VJigEhay3zQ2Ngn14okBAitikbYMwGE5yehRShiDuJNbHqR4AzLF8vLuYCxrCBR7mCfrLNDQpHBzv",
  "key2": "46tnXq4Xt3gTrV8pModNF3F7xAiJ5LoKMT75e5kVQSYLq4DQtWarewvfo6f7EXAxRKEfifqFCtUKQKQXsgNLYgTd",
  "key3": "NWuh7wrnZwVwYAjTwrvJop6L5vSAQmMFTejBCcKrcQoAbVzwHkeSHnLiEWr9D7ftjFWdB88Ne7F1AwMvH6ig5Em",
  "key4": "45iHJz7NcakT91RpyGK1ZJt7RBJSWWDjq4VJNZLAJFrP6fSrKXi99wpnTLUVoQreqiPJxQpJ3JzXTBoLhDbW2XLs",
  "key5": "2j7ynHRgibziMzpvZqvtJHdJCJ5Q1FAQ8sdsSP6vXi2bQ3Cwjf9XpudHGmaLrFJ6W4q5ThPN28fxdotqp82rfcf1",
  "key6": "35cWLsxnkgEz1QFwVfQ9QGVLseGRKNDFfvp8X5CYz4xdRyDLT4UTK3CxgsUNZNgB5JCZexZiQoF86xdT1uj6M7r1",
  "key7": "4Nn1xeD8fZMGfpsf3FN9kV2RLu2jFWzkdkiDzTwLXhncJwVt927ydejujW7gNdwRmpZAdJnGgNyXq58cL1MiWBA",
  "key8": "2Vj21f2cAcZfGyweDaHkk1iW259nGix9Ybc3Y9DTU98dn3XYcsVPKDRUvawjzEU4t7vKPZFz4Rth4GyyPDK9KXWL",
  "key9": "65oCsALJvCfuky74VGZnLsQMiQYgXBaohH7AZhssvJ5zSmsqbT1U2XvzeHAbqpittnvFcvKSm8FignL36ojkg28L",
  "key10": "4hWLM2jtPCsZC172aWrKwPqtmnVjcrHNfYiMs5WRsTXBNt7tHELJA65kUzfoKmMLyxWj5S2jpbpESGeKXMzobgD8",
  "key11": "2EcZMKdd2zsjy8EYNfNeVHSvHUGjH38th4F7t6EQWVtGconN1eP7ic2ULxxNehXhztMDFU7Xo3Qs6gvtRy72soCR",
  "key12": "3x3tTE23kUx8KMtpHRYtEXoJUP2iYFKiz45pnGv7bZwj8yRLJ4CsXNPbmHqDvhG6w7dvepytWFeQ99hruXTptLnm",
  "key13": "3TJwAsvNjJkYHqDW7GnMwtA5yKQmmwTc2fTtUtbPz9UR9DA9f6Wjn5s8DyaUtVZeRMNYmutss9T5f2STWxd82wzj",
  "key14": "3pkNCtKgs24rwjs731pEc5QG3C9FzePMV8WAjvYuyxqSxR7GLwUoijggGXMbLgXLXgSqrYpKsCk3gAyusAm3LB5W",
  "key15": "5WHLohGCxroUpZJrFYrpkmg9aoPBMsXiGmycbLtdXN9J17c2wHsym5qgyvd1JhWox9QDcnVGtNXcWZznqE6nw1gB",
  "key16": "tYwBehTyALEKBfTUpXtdfMY6HY8dKNx2RaPRvKGyvA6By4xfzsVWtUNwppWsGUMVSo8XQdkHk9isQVnN9ziSL7g",
  "key17": "bsrRcDkNy4LQf5EBgVXTHBPT5TSUzV8dpUvVzBLiNDrQCXjaVXeEjPzCHzE9Qc8Xb6hkMoyfQWu6zXKLJ9oW35w",
  "key18": "4RHGWeTCnGpXVPWN6k5oowqpyQEpzcbbqgPYQPgtTDcacdCDiJmYmirkR9t3jM2epvnCg4oG5gUVxL6f3vEv6qmc",
  "key19": "5Zf3EVz8YNuPEeneb2kTyAx3x9zNs31ELQ1Ux1jHuUUusEEVjpR13C9URvcPQ7A1fpLSH3ffCXrrmpRaXCdk5wXt",
  "key20": "25d47THH67ycDQLgNgmBRrsXPsihwnqEN5tNXhxVFGnRsKEp6im91HiDBQFzv9oqXP8AMVzSUR55pAJfMMCmqHer",
  "key21": "42mtdk5NU7nqmuzrUhiRCRts6smDjKY4HTYBCqTHNPRBRSLGCg4FGFhnM8eZn4AVny6LYhvz8ZXrsujUcdcH5bER",
  "key22": "46msKqNGBVTRrYwhcFtj8JxAcofRtku6XEGr4NPhg8Mmjiqw76kF7w9tHZbPMXvLGVD3Dqog7qWY1AgSxyioP6Gn",
  "key23": "4FLDR2icropY1FMPvigjrvDfqKMg2cVrsz1GRGwe6BiGdeyBJfyM9FBB2e9KkHmAghM9SfR5QsPq6BDKkazNqzuV",
  "key24": "4DT1M9ErSPzb1cmY9MQ7ZUYgw9oMp7Yc3DypUCvXDvYHUSNi5yo4KtGvLVGYTiR49u3FhVEdjG3fPXAdk22M8hFx",
  "key25": "4QhhkfpGQ98DAumKcpegPUG9zh8unHmH7YiribsbHHxKtYC7aBgcyf7BRDfAXoom2wqiyn144pbfMpnnv2XiCp3t",
  "key26": "3NFjaiFVPxhVMxvbLv4ELktEDKTsev7dw2ayPvq1i7wU9JKYhCoWsHpKWKua4FyuK3SQ8vS7QBVvwcaxu8Es3w16",
  "key27": "4xf7fTQnpwLMsHyi5j8PzMgTzgJ9i3MW6CEUcbpn3SoRnoAL1RgsDVVZryBrzdj9uXEKuKABaRm2UBxbsXA5DGbc",
  "key28": "5hycn5MAxKvF9URpLfNwdn6K59ZoBkcVjcQwHhuJwAxBwPzXgSMUrY92CS2skFaAtGycA1259xDVgvSub6gPUYLW",
  "key29": "2DYeHhd4h3qVNWDtxAh3jEtM1T7TFZM8ocCgvM3HB7GAXbw8h8HPXb3jAwP6ALujaT4VXvn71zZwp2LQvAo7NgiY",
  "key30": "41xGrojxzmZ655zXBF1dG22HB6SQz2KAnwz8AVbphNmGqNuARN8TsoVa1f5fgbXQbk1LgkVvYzHebrqcgdm1bA4r",
  "key31": "5cAVZTv6xxtFWMgPE4jpqus7AuVWTsZyxZnPYdafk6R3mdQnmKC3avVLho7UhxDSkg7EGNBh1jxPFfBDAeHm7LnV",
  "key32": "bMVfj21VMTZ2DmGqitLNs1ayoFqa1QBqxuSGbAHQv3w72N4r8LrRo9R2kxN83u5ctusjfwEPrY3MiK5ZrsUAtri",
  "key33": "3R9n1LtLDJSgA1gC1h831SwVNbEnRxi18hfDUdYCWEHwywXP4coYiC6U1kzKU4mshodxhq7QaqcdYYH59GaELPEt",
  "key34": "3NQSs4jn6HxYJ9Gx5fP9L1T5DzksRjuUfK6uFQpKKbWYimTaB3fJxkwZhxZqdwrqK9jnxdNcvVmQ2aQn12yiwM2Y",
  "key35": "3b9Uxz5uqDCsWG1AntyentSJMdMUYmJnLVHJZ9J9BoZcW1PHYmjAXAGxPGPwCHr4rxx2tPt1KYGP1pu2SAxm3Yac",
  "key36": "2Mcrt5GmbbqxEqvLr8UPYzVm3kBPnC67haouSuDuPdcRGNkDEMxEK8WFvjqs3mgaCGoqZpUjjxc6kdGZVAwwGPU4",
  "key37": "5FR6H3AU71E7NaF5NMkaMand6bHWvDnb5ZV6P8dxJQhB5dPEGpuL1yN2JZx3CnxHK3u79eASn3t3qcPACxrshfCY",
  "key38": "4QUx6D6whXmNvSVEmVUeqcCZJQNoh6okrAgA624VXWLNYZWKD1LizqVupEo4XeCAhaWT8Ukt8d87YivfGWAHvN3x",
  "key39": "5XTnNyfFhpvBQd8xEgXv1fqjsQG3cpWqj8CmZxf29aGwKHgy9uGJKjRdgZRyN3QURe1oJegn28ePvwzRRfKQPdtL",
  "key40": "A4kh73ppVWCqQpJQNeQNAvE2SJkcpX1hYzQx49wABz1XufthJ6DeFHCKxKdS4ypMcVeQ7PYiYdVF1vZJgBZY54e",
  "key41": "4txyFWa4KFLdKCTfrAHgH6wgnRu1M6G1Fxu5W7tqeid2gLmxPhB7EdBFnbgXJyMjJobQs42AizzMswmfNzs4143J",
  "key42": "615CUXdBtpFGVW6SsqzQsVX79NFNQgkPKKfAWE5gZqGvvCCDDBEfWWeNXec4dphupVi4xekyNvcQJvajhW3duTFw",
  "key43": "mNdwwsiASPXf1GGcoMv6QVCyRDRRvCtndRyoatiKow8FTW9vWnj7JX4jVn92aRhDbAXMhxE93nrJmRBG3zV8NnD",
  "key44": "rpyzbtYZYRwTHoQ17kSqmHnCB4uqXm1VBvRPeNFGmLAEkerPYtG5moRpQhpxFCZsADGStsRXLsEazGYDGozNDoR",
  "key45": "2eD3UApBdoZaLPegkQtdh1GSa8Xdiv2WshmRAErR1tpaxcWLL15waWw94rZs3wtFuKoPKp16QBss7iRw4jeWhMM9",
  "key46": "3sU5J9xdtAM6UfzSUZwgsfH9evBicmSnsmcrCHicYm47ReHfPoAVR4mmUzHKSYP6hMzBv966K2nWnZ6xuNvsc7QD",
  "key47": "5Qom6GNGGqPzw8AwG3oHnh32kiyREjvgFohWkaZq44eg673cAL5ZScv8ZfB5TV4A6MTCbJgpoJm6HaJhuGtFhJuP",
  "key48": "3ECbFN7ZRzcQpWmmQZ7GqCLxZtEh4cYfMww23QEfoeBgzQ7VcBC2SfgwT5eYoMCvxWHWzbDKoLawFfXtYnwiMXAf"
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
