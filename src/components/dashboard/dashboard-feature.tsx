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
    "3bq65LYMbaEgeQ4XCsRpxrF6HijYb8vJY42KRW7fcujuiFFP5pbDG22HBZVTna3Z2G2iNjQbpJ9FU4gtSt64sVXJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s8Xh1SyKBE7Y5Ef7xe4jDUVMxuCY1YgbqkyoKDCs4fe64BLGxoteALrLnnaqK4LLJo2tFkcqf4GGKk3UC7ftwG5",
  "key1": "5fBi6dJ4VSAN8yjzhz2ZiXKwFHEWGpoYWzSRYWiNV6AYYjFkgA3rptt6YaiQZU91LTcf5vVRTYfX6TrZUFHexg1q",
  "key2": "52MLmpzWeeiiz2HqQDqriCw5fakQZFNwsdbShgU3U3sjnJfcWGhgRyzy9uaywtiBPws7jvpNSe8NQCxEUxsp1hfw",
  "key3": "2JxgG92rQHMJwFPsxcU6Q8XQE9ApxWhPZayWCooKoHsQX1KHbc8HgzMBJvaYN1i5pX411VFeGpLLcegTM5yJZvfx",
  "key4": "2uAVMKp9FM4sghBp8wWXVGayHt2gdETQ7SG1F6To6d4UTF5wALWJvL29vyAqUm6Aj9gYVwn64dXaoJjPLVDRL3HS",
  "key5": "ti4hhtn2piyRovzNaxh3iJqg6wtLSSQHStsyAdRxkDSR3ngoj3pepwyw73jHCxUUPfYZDNTzRisU4xMfV3jWPVS",
  "key6": "VCdPE4BV7VUAwt571RLdiVwmmKikwfZ1uXX1RswUkWng2yC1akvf7RNsJ6VvsoJhDw8dWuVaJGYPM2puS6rVmQx",
  "key7": "z1ffUgk2jVWfqXvbdwBVdWR3r784QP1ch47ffiNnQ2JBz7GYheqoG8CVgD4CuUrxJCYWxxeNPzQrySN3aWd47Gh",
  "key8": "2tpi2UHiufbs4Zyqr9KEADnBu75mPtdT8bZ8ZQADjyVHsrZ4PsnSdne8F7sJD8t9sGz3onSM29CyfRviR69iw5gx",
  "key9": "4eKJqtRjuQwCGNDNWvf64SAAA8TsAwBVyhtZZwHL4k5TpF1RGfQ1iemKwBpiVHmXTvbNQuLqCD1th8ohGntyogc4",
  "key10": "5hr9SUhPvUDMe1vYVp5wShH3Xb44ANkcSBj2dSr36gCFoLRzTc8PQEKQmqZV9Cgkri5SKAscNrVVU3XoUFECPomS",
  "key11": "5USbyo4i9Z5uSidUsLonU2tVmgv7zKXGsbP8xr3k68WgRwr4Zn1aSUiJ8tCY1HEFB3nzzhv9nwofxVpps7aRHP3M",
  "key12": "2uytrwaaCD8ubcBUGxDkQb3kKKFsgj627q2EKrZmw3onrjbohTVypuG9kB9Ge1UsBdXdQHhedQEHvFEkdCd7Lqbs",
  "key13": "4XXbc9Wwbwp1KQXV4PxFcEs4x5Jmt3H25v8yAbN5m7bZwsn4eAuSdp4tWYJM95KRMxVhYGd2WuC881XK7oAuVNAn",
  "key14": "65hAa6nXqGcGu1EUViX5GYgXSwft6fCoekWAtW78boPzy4532zK7bKZ1r3ooA4auCgCTuCm824kQ1vZosxFQiHXi",
  "key15": "41UZ1oQQEGH8RHHWHNX5Ad6KbZJgoSDeyfyuMxHyAN8UirbHVq1VdRf9PoD8tqisFxGUpN3yukpW8b4WmqrsNz8p",
  "key16": "1HGa7JQzWwPS7DDSVWnHkLCtg1xdEt4vAP92qzZzUf93E6j3tfyCJGGhccNv3baFNdRLbWTLjXygFZK2xGDPdSY",
  "key17": "mS6TFXntog7wYc3VMvCcyJWNCRojZXhwTjXR2DcFAqSJUY8d7YeuWtDq7XqSQKLurCcNtGYuExjCDLGJyjXM4Wx",
  "key18": "5EASc3trqJN1yg7skJgEEnBzNq2Pj4mtHJskgKjhkj9cAbyTgAwNwoABqNnRhBMs2ka2Dzm5mtzVHST9Q7QvJKFZ",
  "key19": "3ZiSyFnWmFf1UjNjnQFjh9ogHrEgvbmnn4oXjZ2Dmbo3gwH2GfYQWvdwcpyqUiEYiUKd8BrY6gMmrYuJdRM16VaV",
  "key20": "BH3G71JfNyjzEwfcpW3voWkn8RJzn4rLYxuF3kLxmKsK2QNV4fQ9h9nRuV2ZXxLHrBm9ohuzjA3SVtdF5WCx6UW",
  "key21": "4MHbQTjzgxVPZKpk6zxQAYzZH3xH3izmnUqsuHqDbJsAR1y7o91fmEU8m5hDFqkz6HVTe6tDXVTsnUbYhhxdcg1r",
  "key22": "3CkP54Q9X4ff3XpuVSpAEu6DkV6mr4gjmVRecNUwQE98j5pGd3KJRXDK2eyzkRAKsVZBPbkAKifhrrb7S171P6wq",
  "key23": "en7xULiS4wBxC3wGd6HfKmHCDQ2eovGf3jiYuzkgKVAfKXxJrZ2NHBZK7AMPNXjdteULj9JwbLDAya64itcQ88B",
  "key24": "5n2xvkJtMWisRpUvCYdoEJzd4hQk5oaYZY9AGtpWGnfLtZx9dPbtbkvk15DyrmM7RYJm2kE3CWhjLAmm9Jp9VbZ1",
  "key25": "3hQVoHELQkkF8EhBzkUz2SfN6vapCd2mHaAkpvvF4fC7jJWVY3e6DijWYMSyaVuQjdybhGVcgTqf2JvDempdv7HY",
  "key26": "5DQpm9Vbf7jBQnEfhJu5ry3XRqsFBmL1uFfd7WYb56AzckyiTHsKACBc44kRuUxcUEa3hDegVQpaHDSZtFJoMTWz",
  "key27": "64gdzNiDTs5KHMHdiuNahGgH5MCqPU3sgbjH1TDFna8h5j3aRCR7m9FNEtj4GWb7may4FaukJcnWX6YfnTczZNwE",
  "key28": "3KLfctC6owuCFkJKDRcBpJ2kCeBwDfBkXqEVAVX83cUgEq7UAo7cDf813PjXML6vbJCvXRwhxqQNMyVGCCUQDA2U",
  "key29": "biAJwupSyovbQahGpwSTFV7zZ5ETkQ5kuVHZUfmfL7Nohmq2gzpdXBDxTLhqdqLoEE3ZfZ4zGNxdiPez6MvFQzm",
  "key30": "ERPovgHQAY4tLGXL4GWyuskta8MYYgVxTLBgN1KbQyqbZxuQvdfA7atf35QMfWdRkev9FkMqs5YDQeHkq2FGsP8",
  "key31": "GhLtJkWWWmrA2tYbNhJMo8JLVqrLs16YUVzGNNa926BUV8gHDSpxcb9o8tgwsMVBeFnZAJjdYc6ok6DA2cuR3fE",
  "key32": "3hejhMCkEeATcerfzP6t1ndNwdwhiD6Av3U1jv1uJYqQY9hXYyVWrwSnJejfFRpcf8p57PdSJX8X9MPJjvF1ket",
  "key33": "2sQt1p2Fae4pRoSdLuKorUPFs6S6WKuSijGqPGQaayzKXdktpkkrnCr77C3NxHsTfxmSeysNkJJrJPFMhjjTcyNX",
  "key34": "4s6QSWrQdhhj4oBgPzpavVTzzLceskX6xiaj4jjQLJfXU8p7LKBvqigH8oLJh3cpemu9efSfBPRi2Bq5foWdcGRc",
  "key35": "4ZkT6hE4EJCgQfz1GjTNRUF315nmAnrVtRAxv6dtHWr93DkPw5BfT4vCksQcS7H9V8mFRHAWsSjWUQNdf7igwPvD",
  "key36": "4k8dnJoyZPN5HVcLbkmtsbj2o4UnC65nc8t1jvrXndeTcEz6rfFps2LVh4nX4EhqJhNibWzRttU1iAUGJqgixazc",
  "key37": "2oLiVhSUQjAJTJzHMaeJfy1bwZN4FG6KrPN6uvkPVDt2wgnw3V6H3PNVJuX6hv95Zopo7ZnW5yw1ZbAN9E7NJ2ym",
  "key38": "36FQLhQ3s2wGCm2QZtvq453e9RaNFQjUZXs3WwNiBNt8HKZVDLMUKe7Frsb36acbPpGrxa632NQJRY6EywbDvPqS",
  "key39": "5npqkUvLTbRqqapWpGFyus4LBMXJeMkVw18qvzFH5PHHaQABeSCQ1D7nnkLGZtL9f791acCYNDrATiagNbBLbirU"
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
