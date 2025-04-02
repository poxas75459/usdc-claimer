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
    "3KqVPMmoF2b8HSWy1xWwmMSPHr9BacejySJDx2zfknSgBz5JQ86mKQpXtBY45i55fnCqE93P2KxanzrcB1rf1ehi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XorfqvyrHiekKgvzWzZ9Z1NWt9boMoSvaAptTQuMrWzGJo1edHovjXTHhBJe26soKM76TJ88C8pRPKqaWc3Bvzj",
  "key1": "5pp3ep1M9hftcC4ccoGw8VyH5c29kQPjpf2VXiNo4ZRnyfuUN3xcBRxEBkGLi7XY3jDMcJmmYz6dmb68XUpEWQ2d",
  "key2": "2MkNjqKHJwXaPkUEE7A4dacsBa7dyL188MVEEhEzuCuptGuFcJ38NVt8nZvEgvxJYGUjPmvPpsJroqJMh9TUcGKh",
  "key3": "5YDeoAvRSNs2Luz4eWdLEvr8U7WzV9XueKMV4z2yiSCzZscUXdXroMkkAoatDgR3Fhkw6dCU5BALGwbqqWnEkPb2",
  "key4": "ToeA4CSWgzx8jGeWF3SCkHnFsNEMTEEWWDfogcjMaXti6hv8r4b64nLThFVCM4qZ7ZqCt17zruRRCeUfQJbBMwi",
  "key5": "34LtpjDiTUzK6prf87vVUo73bQcbFGe2uto7nuNU5cD9LEAUNN7A4WW3YxoVvL3cJA1mdmMwsCgZaVTNKL9XfG3V",
  "key6": "WC2fkyzqXidh6mGpYFq7XKeCKVV1AETyetgY3NppvteZvgmUyz8Go7JVWnCUWp8uyQ67aXVvUXgZxjC1GFNKUPh",
  "key7": "5uYCm59JehKySh7exQEewXWC6n5o5VuaBM6rsazYnF9TK7B6EZMJebfYEavGPTFurQeMLHMuRV63aCAmN8LspZjF",
  "key8": "21Jq37UKZsrngpfrmkeY6dzQ3ATTwLVfYeaaFAEdGNYus7Bf57pNkQccPtS4UgKRVdiQnhUpxEnppX7KLGpWyyLi",
  "key9": "XeTRLy5GKjz9XiwbAQRB7ezx1JPAFdr3HBRyRQfD3DcfdTpHxFvj6WzdvnSMXU4eEpVtaBHtecKbmBivZkmVR2d",
  "key10": "4GweaLSP8ezkC8smtuYq8nSSi91LeoTfUXPMXjK8Q4xvdc4sNovjLHRhodtpxctjeCUxqmBcGwGDJ5rfgYuA1syR",
  "key11": "2FvJp2kHweENymsCJvWqUnD6maPmE1zSLS6EXYXdn1SZxyNnA2pbVozy8BXYY8GAnSDiCdtKjAEDSFGXb8B2JyTf",
  "key12": "5KDrN5JuaBztMbfspj7H2Apa8upBGy1dFkJ3Ej3A5jJz3rVb61KSyF6BR1Q1w4p4gaH1bhQoEDXFuv4tEFziyJjx",
  "key13": "5G6cG1cP9hSqp9omWSeyZPaSSHHLQz8swRf2YJ3Mw75V46nVU3148uDUr9SPBqCwKR1nMXnHoemDQhVV6tTngFx8",
  "key14": "4CeXoTeht6dsXpYiU2gWGxttuKovSgy8NGwvFTVLPME3UG6hCiiTJfrHxmCStdjoM92Gt9TP17uAVQ26kAbK9wyT",
  "key15": "3utViHExUoyDJrSJSbqpQQwdbMY8mvC145y7z1bUDcHrKpiJQBXdjzZYAPqVr2aG2kFy178BURomPxPRQeshA2R6",
  "key16": "3y2HeW3VfsUX2xkC1VtYF34TzXQJrVgBG8K7y2nndWZzAMt2U7iDBVR1oPZ2FYDn4EybqzKeGXhJwoC3GLzq4yhy",
  "key17": "H1yaNJsyDwmY6FSMoyUyVA525PavTAj926pKhzWjiZDNBx1i7Jj6gFam8ioqzzzTCsdssZMwz9fCGmGBxjGVPm2",
  "key18": "3YEGKSvZf37vo6gpLX9Tba9NLAP5jwGgc3NXDpQTDiRrPSYDDhjN9axbxvKg8vzXmXcywYzm5uB57NPcE5dfsaGP",
  "key19": "2V1cCGV1cpxcRcrWVqqNM87RKAx8ueaNDoKg8YyxbDVFSkMAWrtxMREpYnJCFcBLHvEefcPx4WyYsQpNHs195A74",
  "key20": "5DctHAmeV3cuEyfLjiLHCwFGm2xsM87FmicAsycAFMNuSsh59JLA4N7UFKH63xUNKpMv7528hPMaZfEp1U5udQsB",
  "key21": "2uiCz2ahWQLPU4pLrxFAQmujNvextGV224zvsH3G3WdL9XMn5U36VPwwhQkPv57ZfhAkJN7qQJg84BuVuA29tD8Z",
  "key22": "2G5MRWSRGu1qDR1HQLjSjpMJJnUw5LnzWm7qFCT74Dcs9eMRbdEDTGp4y6rZViEbVbzNCxtQAYiyX19nX4EqHVF2",
  "key23": "55v9LQVuVzBhAr3qA9K4B27tZ34PCw7fTp3yYpAwJd2y3EVWvi2G8uJVENGZ9oU8XweofbcZ6PdGnNzwY9FBXJpc",
  "key24": "4piMA19nMggUVc2tdMJR4SRiix9iGUfCsstbxeais2vVvskr2Mo5jNqiuxEx9rtoqDV4Gw28xENSQZrqh5jT9p1t",
  "key25": "2y8nEvZXogjGBLzNiGFqHDQVC4D67y7s258LAEYTQULVn6nRWq3L5SW2WbGUvNL1hcTuYD22r3AAGtLGbuu2Tkj1",
  "key26": "4w3wGxTgFUfkrhnmsbHgeKmfR3choNHwXttgpFymumk2c4nWYwKxvAw6hCmxMeicnKtGt51FDD14hFhtY2bDumz1",
  "key27": "hUZ6QzLB6ECi6v8mvmXA6f7MZ14b3CbCJUytPqXXNd7coCY2MMZJ9eX6qWssm3aMr9qPz45RyY15bz1FexkkGGV",
  "key28": "55w4fuNDmsyxt6sAq1zJtZ9WquTugjmycvsTf9ewy7E4VNjFTUDYiy6VBeGy7Bya683uVK9SMvdwPKWTFTX395D",
  "key29": "4vGpp61ECu2fLmYQ7MDCp7ACqFRbKc6Uo9fybWAjJ65DgErXBj2Cp6M77xdoUShPi5WeDEzh1Sk4AyYbQRgbsCFq",
  "key30": "37XFR6mKszkGqYELKXWQLMbRHFcSKpFNkVf7ou7iEtKrDL9C8o3pZT6j1eKAwwyFjzFeVPXdHw6DyqKUdxoZhK1d",
  "key31": "Xoke8TktEEkNAkNoFfn4Ljub24irQs88Srg6SZgA7txo9pqcxFrDPHNNn6txYMfnzGQ9SJCseqFymAjvwDBKgjB",
  "key32": "3YoWYCmG9YniCZoVB2SWFWtAoUu47yo1E8m9mEn3QnRY2LWbSF5HRuxfZxHJVHMKqv6NTaCstLM9kFBsgC2rikYi",
  "key33": "2tiLU1P7cVCQWejpiGp2D75Kz5SWGtoB7es3FNaTkWj1x5Esps9zwEpGCkuJ59gyjwd1gJxB8c7at9SzPGvNuAQd",
  "key34": "fKBbhNG1ZMbA1i8u1nsJSZcCbYDAGecfZgfxSHYdZmJUZ1aLyHJTEX6owZpQB8de3vyaU5hR54ZrLNRse5JvJRG",
  "key35": "5RK1w4BHKak3aQypmkvg1FJ2jhTjA41rY5K3iSpfyWKimZMFhnb4woeqVovhQpHi5PPjEyNshqgKiHNQ2j2dk7vE",
  "key36": "46HaBWaMbgA3FPYh3Es8Hx3CzsWmrj97AetUNs3Wywj848WwXbgVVu8Mmaq1Hiz8uFbiweQGFkb1cCZ4AmSZHKXD",
  "key37": "5X9LLUoeFxF4i4EuHM9N3NQoTfGcftPL43UyAuxvBde5TkKAipHu2m7BjCj47MoiSkuawZKkpqN8pvkNqTW9pjVU",
  "key38": "4w7p4kTs5aeHhKofwbnSYtkojN8RYCLu3q1rJmSyX1XeJaDffCg8sjZU6sUqH7pfjFLkbETWyzNN16QGYJFDhidp",
  "key39": "5EpFPLiNE7T3q9Q83sSQkMdvsMvmckSPEhas81FeY4WGvLCy9eiu9cMCSg2XZHzGgKMqy3iKhScb4u7gZkp8ppzm",
  "key40": "2PcRCdCGDeP2akQezefSsEGHWF4JdNeqUGXZU54tAZKt5TTsv3trFvyQcinTtxLr6KVxtvmpKbxzjYMp2PRFtMJG",
  "key41": "2EVRoaZzEN3UaXjTGmutRejgJsh2pBFvQqr3qx5opMUjGHe5mHALvdKJZobgooKRY4caun2oSwcMUUPRxRgKUBWE",
  "key42": "2yDfKJYp1xJnhHJ3zzDU3p7nHUTSUQDPboD4QZ2DtDbh95oKXuo3XfjLzTZUrmTBNTuaRxArNiUSVZ45KVKbjHEE"
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
