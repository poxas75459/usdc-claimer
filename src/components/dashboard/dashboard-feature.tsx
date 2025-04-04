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
    "3LSsSRXXLTobeaNyWvJtpFjcjXvaMpqv16wKuUV3tvaZXtxviDztUTRJwwfLCTdUqLtEUyPGEriNq2cbJoKbTuLf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37oGBjvsew9ZiCC9Cfx4ix1mmdkU5i9XtSDTFq5R4GpgMEjds4joyfK5sqd6GC9KpaEkwFMj5AwBuiebx1EsC9Gn",
  "key1": "rVx3oB5QhkhKRhiMbE2tsjr7t4rwSoLEBmC6qQXDKsyEXmHDy2xe6Eco8ZkWYZaBMoeHKVq9MzA6UuWZFzxWa39",
  "key2": "5c1UwLyEW3oXeep1FzygjBL2K5vjQA6BpFuvNq53Mi9mPcanKtBJi4kTyjcpUM3VKutcSpPtWwQGxLpBu38YMqwG",
  "key3": "62BcTbgaN5se4kihiUUko998CcQoXxpMBieyCAq92jUiydp5d57L35yr135FP13kcMPudbe7VWVjag95rrW34qP",
  "key4": "5eScACrbVR4PtgrABoaMpZKDZkR2urrHFdfUD3eS7MDZ9mAxEgQSxKMXoEXTy6sTy6z95TRvZ9bzJFK9R76uCKo4",
  "key5": "2J6o2rsLejiT3dsKsbaXTTkPYQoontWKYc6iz8ysUArp5uR5t3JqAKARnEGF78Rz5L8XH7pGEQpB476E7DA3RhaT",
  "key6": "5i79Yi68cvHUXf8vKKWvJ45qBHYfHt1FZrxx64eyyE2QHtj9vB26tY4DxZaJM7NWnee8GVbYoti9hoMHggHNEJht",
  "key7": "4VEkLwWvBhRHQzY6KrHHbpGzG6V6SUqrtPXpDv6gVBWQwye2DpbFpHGPZJUrtZoXvrRkEeV5Ar8sLAbWANuTaS49",
  "key8": "y4BUTUT5NHq2kvpJmLmfnLeue93zBt8BXAoqL7LEJKN547SJgoxqDRSr7LieC6EPESirEMcKzoj8bngXRnSHTPo",
  "key9": "4MeDVp8NmUuTd6VXN22Z8vfPQaFXHWzUYabue1UwyQoh3UpBSUjm7RHxtvudbmRxd1nyCCKZ9srRXGhHtiU2Kw8",
  "key10": "4DUv7hChZ6Ypimy1hMRmXh8HNd26n5N3W8CsrWboay6q5maf68Brgm7PSmCY7PHS3gkswKLFMPqE7qiNSpzB2PwE",
  "key11": "3sfKn56M99PjXnLx3zCZr8L66z5YsERgDwL3vNxAeRQFBjBVvZ4QZWoQ7WgrFWZRW6iyVrGzgbFoaUoPL5EtVaeM",
  "key12": "5CbFRhS9yy56k85CsbdFWh574s2SgB346PowfKqwGGB5UYzxgEnuWtSTwuTWWMS61DTGgU3tKiGax5FFAZuaUTSq",
  "key13": "2zyqLhPVYb3QAQ8JLiADK2XQdVKBvQc1i93Lg2qsXuVK9jjUVfqB3jviHswoPQ9EHPw8jvNgZ8f7WPjyD7LGciQX",
  "key14": "3c8nchMvpHp4RXESnLf1VC998y6ZExMvWspKVcaTrHiqbiF1Uvoifg6ZwfNneu71LzB1T5373RL3VDny7Hd3utZC",
  "key15": "GFD5HVjSD46y7bzzf4CR5q4fgZZh4LFRXgnvMyGfcRDSZ3eiNmwYTyzkvi2oJvwhHU2aZtmJsFHo2KFsd8oQ2kt",
  "key16": "3Mjsk8MCQ51q6UcaGfur3DJGTj5GwAkCYbUjp9XwHTvAAbeXH67ipcL8EV44hFXehJGuPmin57B2RTyYGo6ncuzj",
  "key17": "75ccjfVoTCu3NTZrftLHAzR5BQub9BGMYJzjYjPnH9ovMroVLhk6WcRQwrpyKEvngpGeAqAyWU1RKFMAepYF9Xv",
  "key18": "2hZUnu59kWTF9KXCsAHA8URtnV2ze8Gfd3tm9HwH4k7ZXReizYeuyJNpucByjDqWgnwvULjpuWWQmfTApTQqahKV",
  "key19": "4scNZChpeiyQLfEz7MAti7V6mfqZakpPnxr4HibjtZUThW2mebF1QMi8oq3GcqQwpHAg4WqUaPeCrmzc5fNoYCZY",
  "key20": "4GM2XzoV6L5vHhEwv5TfRMn95nkH8e91TEtnhm9K9xrzfEkKwJ4WibWE6ys6hjeF3GtNfbZpGxM28KZdNHrBVnJe",
  "key21": "31BrpMNzuwnHKRRMYFu7zosXQrXFC6fyqiSo4xNPzrcTjkQWsFrGU7LaLxPKihRvGxt6DiwcsZsgYwzQDg5hnjKT",
  "key22": "2RUN6SXa9SUKJB6peCMTpaLo9uYc4BVEXPuH5P4xL1E3wmmdg2LcPrRoiEJXFANq5vSDrk17KX8tG3gSkG2ZRju3",
  "key23": "4PiDbgZtJkJ4LY6gKUV35iJB748ptqt8g5qyvo6mYhUroujnvaU6CaFcNRsdke2ihiuK72B9n4zv2cnb37dnHrAu",
  "key24": "2ySc8tHjfY5vuUf7tJ8XobwrFVHbTQAP2VRQNBmro3ShAMykSny9szuGpwRWWRaaCxm8tefx1mpvXqn2Gs2G37Va",
  "key25": "sRYPaNC6burcRWZfgJPMiqjvYFPVHSb5uBS7WbwKGuh8jiASGEyeUR6dDwNNgfusEozmYzZB6ihPan42Ew3oH6f",
  "key26": "4UrV2wQxmzssCM5xpTDkwCyWf3jsw2hr234B5AFEYrECY1QX7iTtZQYcNnjq59rkPtHaVV2VGN4QtmKzGUagZBjK",
  "key27": "4JNz3Q4jTW9ucUhBTfeXjgVyLEMVgV8uDJQyZyjkHFdDiCDmuJjsmBimtHfxzffidLhjF8BSsNsynZjcbgzsSuA8",
  "key28": "41G3zt6zkFF4jfZ1SQMy3puWmEt3SvFQ7XMBqXgDcjhPrn1o5536xcGYBujyrAcmpMMUZWwHriHzGmXC3mAfLTiB",
  "key29": "3xx1ZMLLmHKLa2KHaYwGVPKmbAWXgAFhC9zvi5EfYPsJwP1uk1w2i9sLEheqKL7keZZEgGTrnxyX4UWj498TAWqY",
  "key30": "4769bRBgwDsbUw26uUnWvtoyz3HeXfxz8KKqNeJLVnk24sbTfMyaCNH13HSEwwcSQR5XhFk6yTGhfpJaRmnggohH",
  "key31": "3299mHFy7Vwm9WqtwhvhhKQ5cxrzXmXcSAa4ycDg8pfugc4mVbuByb66fPbMseQNZb8V6LqKwFaA4zMQbZwLg5y2",
  "key32": "5A632ddCAHCEeT9PL8vbSSSA4v3B94qAGhaLetnQGnoEFFYqK94MGPcGWa99jLdS1qiCV3TEj2L227JVdZtaZRnA",
  "key33": "3mYRs8Yay52jg8YE8DyEnxRKvburJdiuzu6RaVtYLhMhEmrPBcQqkfZcBCrZXs5kTnZhvGhbJgzrihYLRsHYQws4",
  "key34": "2eEKxzbndHgKbBPofNYfMcJt7cVhLCaeFsGiFpnTvMHatpSKVEtE5e9QKYmfkuBFhev4ohhePUkctHVTZGvShZFj",
  "key35": "33osRqarbFQVeove26eFB6RFZAqgE2gtWWko36cxLL5jdPt7Nnk9YidrvvmkozLW9DtdudcSg6ciDLbTAiYQVaaS",
  "key36": "gAMwmeBJtzKGztvNqyTmDLsSJDjvPrB3Fz7E877gqL1uUG52rzNHKZsrFs6aKdKnvzv4mPkG8JmQKubfDnXUetQ",
  "key37": "2v2q8ZS6AU36bSrPmb522eZmiCZCvKhAQCb6BcQXNT8qGhXHgsBuhsWT9k8ZJQ9SuWhmXs2FqxYKEKbNWjSA3PJo",
  "key38": "3H8xp9nxrTMuUT2KzsiMpGUVM88eag6aGsRzfJHL9k41ozpqpiLQRa7gMSjFrNHJrvXx32J3xuQoq16ec6KZNMH6",
  "key39": "2X7E7oSdN8BWB9fqzGsyp4B5Gy7wHEsNsoZso7W8BXSkepd1UG4guSa2ybAgbZjUxdDHxt4eUbY4RSiCziGAJwV3",
  "key40": "2vMoHupeeFqxPQCQymrF2UuvHVeYw98x7yo2o7tpLc54X3aPtd8UmNvc3rokVrQ3JJzcUnNtXUP3t8SerZ75EKQ2",
  "key41": "3ZSErHy4eVP2GPoU6vHbp8jQmPH6aUW2GuEgnkLndQURJkMMo9bbsKbLNZ2dbks2b4Fmnv8p8n3Jyg7nfKY8p3x6",
  "key42": "2vu72Y3Ej28jPSkMBMAsASJ49PmF6dN3TUJyrUYCnyD6PbJK1cHJPMiCYwWiix6wndy9JvhhxSPqebSg3u7TUbP6",
  "key43": "4S92KaNcSD96poWP4h7Kk4XKvWy34D5rnHb143XJAsnVqQEbjGDjUqqHFYCx4d463rwsTab7m7hZ1u468Wvy6j6Y",
  "key44": "3L9dTN3RNuXJNQbX2aZ7BFm35BasgacbHiAboL175nMSHY5yjera4Fmh5EXATewMDR78jzsoxb3c4JjFU68uxkPY",
  "key45": "4v5kC7MekCeQUjCMKLjj88Q1rcaCpn2ovBxTiKThk4XczeNWNQBDheKSAoyfKhpm5vGSiwbiT6ifL3fDcdB8iNY8",
  "key46": "kwyLFYZkYGKUJLaaCbmnpBQScXqvxtBWb8tzLRDc829QFMqQGHMA1MEZnMeQNgP6r3LobX3PBMHvey1DvMDhAXD",
  "key47": "3gHfjFU3wj3pB1DqEgwVe2DitsECCNhMo8dDFFK7AzsnEdgPntLSKADh5oeGFywAsXhVbbdnFVGLS7it77vvB98G",
  "key48": "3bCFVJ4LDd4zdMo36DSqqxfz3gZfxuvL7EgVpEJzjSMg7C8Tr5cLEzTvUXfAYmGaXLMxXZU8mdUnu94dRkjdBMHf"
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
