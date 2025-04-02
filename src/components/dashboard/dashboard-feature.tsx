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
    "YM2DuiA8wsm1wmLU2kZQink2psZv8XtCBUSfmMuy96YbYJTZs6ZCSEhHW6QnnE3gfw99ce9BxjwctNYJK4gMrjX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ae8VQvMpohYscj6tTwkAo4TK7iTCVdgxUemJAZrHiPzshp1UqmAwAZaRQwhkmwjdF4JkixBJtC2PYQFqMtL6SGq",
  "key1": "3JzVZZBNignmiy3FULPxykjgFGHkP9tUa3zM9SHJoJRy8aCAxtuJw11h9squFqfrxBjXiSJTq9uCF1i4c7fuRg8w",
  "key2": "STkDQgNgTSo1NUJGXdfaS1ymtDkRSXdCtYBqJcdcu4pJZ9gTnM3aj5mVc4xcHyChDeMvjcPQ833yK7RkG6MLFTE",
  "key3": "EBeXFTzyDX25VqEmCmCvcRe9YhdDJTFe6hRFCqrXuqfUpJtT3JfmpKK5cninXFDuZx5byCJK74sJC5B7YfPSSoS",
  "key4": "5xmQDU4mHK5DL7n8Ncg8rkRihu97PdNEe9gv41aEhgswG4qGv3VUhZtchtMq5tYfjWv93L1sxs3XLFHGHKLnUuFG",
  "key5": "2wHjMcATdPUpLpb615pDkbc6UUJ7YMjt1hVPSe7j88s22YTkcCSMNjTamVw83bh7oFigedJTLRtWzKJECtr3JXab",
  "key6": "Mtw2uJLA952CVet2ajJidFpKziDhFFXr72XYp7D54BL319LjGE7DJa7u4J9Wq92Zxa1SapDQVbPAtooi6PCcxgC",
  "key7": "2BPLNoaNo32tkKAnbBfG4PXakyD4YS7LkoBKxG1DavVwuaAQTQB3MpemoUURjR9wq5PrYYRSistjUn6DQgw5YauX",
  "key8": "4vkt28vr37oKxg8JDnZAUkALS179kiwLCWt2ARZ956xvZacCfU99PGgYVRnA7s3xCVEXfZJnoYa7A89i9tgCkVJu",
  "key9": "3zDBMajeZ8DxMRM8rP7fzJJ5PiNQjvrRA8KyrKUXX1sMkQFZ5h5DVJuchydHpFeGmjhkFt5iGErnZtEu88pFoG9e",
  "key10": "2DZfpePaD8B5kKKbRnZzS3x8WHjcew6C97TxZXp7bYksUwMPX1i7uwMcaZohGiY6wvpsoTKC4161VrqVRkP9Aw9N",
  "key11": "3Ka4V9uMAvs5HfFuR2fRMA63banqs7MDu5uMEnJWUJUbXPafYE3BFFMfTQaK6u7tRZW9PrYPnPhaKmHBncp7kvhU",
  "key12": "5FHnmyNqGLAJtzf535dm3UzjVAcdKwnsa5yQ3ExWcaDPELUCE8sLyptc1u1qNxVEPfX3QH2o2hrmWjVFhFC8v5xd",
  "key13": "1jBAttfzjQCUDBfwVHaXvTMwmruKMzcAwJaP1dT9WvKs8kuciTkfUzLdshnF5dUY5cNgdkAxM3JnGXz5MrAhDEU",
  "key14": "2dhddiDC4JNvEgbidqWcrvmcTjs6eurJc3juLnkGnJNEQ83Ld7ykxkZiSSqgp4hYdWKEAipHmMdtCtVCGiStP9aK",
  "key15": "kA5rJvBwX4gSp8RyDy1bqptWmmqENfHLuxk9HT4y3m9K4q7f46RRnsEg4wCR7Aorq9sLqCeuZuCmSPUnVFtP9L8",
  "key16": "4Cv4UYbHfWHAMc7JFhqDfNb1McJtX56q5mUDBUML8aDE46iU1Fh8rGmP245WHWVcpgSnCuY3ZrLPMEzLNHd2KBjL",
  "key17": "5d8JAPFMpqJG9Xhb45rw5gA7XNosvU9uztdFUGPLnhZPptsdcPqZAvg7weBKh45zzRYsXtpPaHqkvq5r77thA8Fx",
  "key18": "3VuFjZx28WPMg1JKfhSqw3kVd39N2wVUzN6eKbpsMbiufpDNWZU6Ks9qgAYrDoS3vmjc7YZssB8gH1UVtQqn6WS2",
  "key19": "4amU3bCEscypsnbvwRu5hhY6tqjDLKhMEGNyVwW5gGBUVyP2E9BDzQxqXPYiZYkBgA42zxuKXLhtpDWix8bshGqd",
  "key20": "2xfSWAGRKiPPiewhdM5eqxxxSnKTGsHqhA1p2U5qyvzxp285wZZm9raLiWb1gQ6YqDbpQwjZADsYY1UTriDDHVXY",
  "key21": "3yANJTrGHpUwzKixd8Xih9NsMdYE6gmAkyumH11tbQ3qVvnJEniioRz7US6PVsa8JeT8xH4DpzxQgLTNmXaVLBYs",
  "key22": "4z4hkdn7qGWjhPNWJMBXSmBEXMFWBX8wqUJEqVoykR61tAPE7N4bZHyJR5rkVtLeRhYQTDAo2rkpaU3KBEnvTNNR",
  "key23": "DN84irqPJ9FZvjBhn1hCekCPWn2h1gvwhi7fjtLJ6zosYFmkFzZsqpF7LK4Fdpi38U3d4naZvzrRvfg7DTaf42t",
  "key24": "5HSqHcRADFVBRPzARq6hVtUVgfKKhHRCDWAAaU37Tyza7KWL8y4n2EjEdXZ9tkqnm8n9ypUrZQ1grV4AgqYrG4yH",
  "key25": "4pcMjNGPZWneRB8rGDSKu7QnvzE41b557N1PBVSm9uT3nmN5qC1DLWxYmriparBg7A1EdGU7PdHLhTQ2pni21ijs",
  "key26": "4gJwYgRws5TPAmbFpF4uBsaFZdWJXspCTsRoJ8X3ssijWqdxH9YqFRJzG3Yax23p4DHAEnYKM4oy1EuLbvSW6QdY",
  "key27": "RfG2z2pYmKvmMtmeKLx9j13z2EhGYFiJhrheMtVeUWgEiYvmZ2zdRTRWFXoVRxFxkEnXPL3PSXjkpMFjJpqSLp7",
  "key28": "5kbN976KapU6mgsKbRy6ejDBMgiwHWAZbwkVAyvy9vuD2KcLu8Yt8MNE8QFbXCu6wbPY2VGaAudJu81M7chhphPK",
  "key29": "4Bv21metkduqQdRPj1o21BGSUVKMzmzXfe8Gk4MfG7ZZ44qP3r9c7fGrnrcUcFqRFdUEihZd1fK3tSFaikYwYAhQ",
  "key30": "4mBzxEdkGwb4Ui19GhwoYRkQ4icHHCRH6TA879m6rK7hwhwwrSzLixVnspmuNKe2vhyHCTw5fAZbK9NZVaVz2LNR",
  "key31": "3Ud1nvBq67MdpdGcqZrmSVSrMnrwtFCjLf9GQtj2wa8BbjpenfgPQo8VChtj5gHAsgekHbRGT3G5E7dyos9v28y9",
  "key32": "2rsY1NNsrGQRvmrj5M8LL9dwQjPY4V6rsnamrAx1Pv7XAFjLffwK4kYkeCLV51SQt3rRzZFMCkCtU7LLHZf32TnU",
  "key33": "yC8e98fu9Zgkz9fxyqLyUXZCADkX3C1Pu5ZS2QCSJme3UtsZVvzAco2zsucisk3VDXvhwnzPjWJt3xLdHwCXgCi",
  "key34": "22y8DEnSE7aom4LZYFZQzEw28PwSeVtyaBhxJQUXyQKJXiDPPjS2rroaYa13A5rbJHaYjtae5Cth1BiyNz9B7uYj",
  "key35": "3hDM99MEbnsrJTZEBB4JcGCk2xwg1q3xDxHr1DfQPMVRGQ8DGjHJAaF7HVNjUtsMXWVNR63owETnHxJpPKxspyvY",
  "key36": "4ofdZzZCFS5jMnMHvTaDoJoASg9YFS32pUMjD3UF3GDrHgFRUu1XmfUECauznkF3xrqeGc25Mfk8kaB9iLLKr39",
  "key37": "4k4ZVm36gPNffMFvTdmXQP2JuGGhtVTi1FLupnAWQVHcKRKaKKiXavstwhAjS6RjqKM3H4LbCjb32NMjfpyYFLMv"
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
