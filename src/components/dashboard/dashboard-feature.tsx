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
    "nQU9azstGqgWfLqL6zhUsW2yJaLfsaM3j4EfWpDER7a7UTfC2maqqU35btnLHJsLym3mC9yFLr8dXBN3PnSRjiW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29NhTxo6t4GftihmvWvjt4fApRwu8aKo5iRcr1HiFRNgn1Y7S7tc4hCkxKKVt6DM85nHrCPiNfoYLsiNSyefVDZJ",
  "key1": "5r5gkTajXcxQ78G7HcTz1pSNm2BVieBRXZdGifGuEjEFuf4hpT22YpLo3s5EcoLMRG9mUovWm7ruMFQjZYE1JYew",
  "key2": "ACboSkX1FYMZQSA9ezgMeotoZrH8XaHw8kqBnayweP6QrDyXHkGBVS5yQLMaovwA5hwLs3fB7omCZyMkxdRCfre",
  "key3": "31ViQr1wRUZUkWQMj31nNAJte98TEvnM9won6RMeGbUi2fsa6YGk2AfFyddk7unan1Sxx522FjftBPPUHQpTjm8e",
  "key4": "JitEZYTwg9exAHhZXf8PTki2YeyLUVXHQBXumSwC1Q8hGCzAzpfG3AnEKUEhoVCCFMh8QHBA8rg6JrPMiX5V5ar",
  "key5": "5RZmvBVQDSJiDdiEtVfhqHjkk9VS2YbKXjHnatfNRk6XZxcFwzzuXZydporM4CQnbYPiNM89gEMDSFPwFNx8G7JC",
  "key6": "26DzHaS8EYbp91Jz8B9svds2DbQALhoPhr9fKvLsbTkGa1u6iEAz4rjpSREg9To1vzMj5L7VM1Jg5zt6sicjqAyC",
  "key7": "2HZiZ4FHLCrTnE6ov6rqDYV8xRDo9kgbNNn5jsnfvRdV6pZnmV4P3G1fcTBJNakMftp61aGbik1SAcopReEitypC",
  "key8": "2kiYahXE5RG5cBuq41umC8vLwyUXiQMzfFoGDGoLVDxhEUVPkN7zZQa5At8wFwjFnZvCKqGi8wiGQbPz2QVS2BbK",
  "key9": "5L1WMyZ456BVdcjbkauCHgdDCM5RoYgjGgGJZ2t3FPAzDsbo4bMokmipC7pmq4KYu2RbdjPrap1mkmGrn31wF6yt",
  "key10": "k1CXvqGyQh9U8xUvuA4xM8Q32aYqENMADJBwaWUcEjc6LSYKk5c7wf5ZG9rmT4p4p5eBNnNxKELPSEUbDs4AaNc",
  "key11": "3rkbrfaLBVcv7Lng3Zeq3PQEyCMRveqxwvfMGLRCVke1VaHk2s8MwQe8jYeDgC7QwqxS2xnWbdxJbohQR8qecugQ",
  "key12": "4WY4NMgi3P6262RuGeN9aCeomzbVthwqGnsMnUGjmgTQWkepdt1JUvMdUaAcP9swPnxoZHDs3u42HwLR9TeeF37U",
  "key13": "66HJgsJSbBV15SDhdmS1zeheuAP7e8ZhkSe6ih1H5ruUGZhdX5zZHt1TfZsXbUoANsd6iz3DffPrDMvzjN38iYcm",
  "key14": "5S1z75C13Gmitcm7fFLAfCoCcxyyEHtS8WapAJsVW4CKcEmrEVEq3KW1PzcnR3isKJLRxmK4DHFoLtHUkyiRhSR2",
  "key15": "scP2nW8pWqm6K8beA4bNAr9KLxDWgHJghbUc1FqGRNKXuDvPZCckNxmr3jp3DTBetjTjWasoPdY8bQNDgVATW1F",
  "key16": "C2o7tLXrc7suAFPNPUFYFHcbhLDyQyz2WtNdrBpDfFLgbWbWYUHK9YzM1i5UBkNeFPvN8wDj7J9uwJHnxhBJy9K",
  "key17": "3zX22gB6Y8yDdMPwKCjQvnrrt5RiMomjWEPp3LFxkJnCJkrPBw2AGiGH2KeDhBJ3Enp2STYQtnmkmtko6ACxBmYC",
  "key18": "PyeLuJwGtQoduVMHXwHJ7ZzRo4hSStWAeKuoMGy2GYXv1Nvci5BgtxEtbx9EuSR5Q3onBoBjFEnQqNczgvyJhHa",
  "key19": "2w8xvqeEkbeyyHgCuPRP4dZZXAaGZbiq9cHUwhGV7TGTUUGUFEvK5Ysw8WnTxryFSrhgHPwYp1pW6CCizonqKkjV",
  "key20": "5CYaozRAk9hKnYmyZvUksWcp1bG6Fj8M7mxHYAL9m6xiNb9aeiVjPoCGhsv9PzeCws9LR3cWBDT43JEbmuVMVkka",
  "key21": "3KR54AZzwdASdAHwmSmL2sLyQTCxZfvtRbDneuwhpDMB2yGRGCTJfxCfz7sccW7PFPe2PUUxGyTXk4yxieFCS7f8",
  "key22": "5rxW2vnMXgs7hLrBoqMmBc29WZs327ox57H1BzmjqLkcQM611d8SsYNnAMdMCuUDay3Y3rJ5q5xtwMVVk5fL7k9U",
  "key23": "5it9md7Li9Hw8cb5un5khkRd9VpyWvJSJmddXTQrHGqezRhWZ7Gki6u2QSxiqFzsX4koXsncywg4a9UTfun2mzX7",
  "key24": "3Vc914VQTfCvk8NaaRjpSqqVjPAtgjJDGWiNFtEr4Vh9Rm9vbgekMT7xWWHNX92jMubUsPT9QqNXcJDGgtCUj2Dg",
  "key25": "T6E8BF2VibKVW8B9syb87rkNcugNf9k26uwP44jH8Y2CuY7DCKDf8buFYzXhrrZULS5Bpe79azZ44L9u7P7qDmQ",
  "key26": "3VtwoAMXR3e4VM42Pmez2kKgEyVbgHgd6mDkexX1kYNHW1cw6j7hdBeHTQSPm447Zjh5H8ZTUjdjQ5dHDNXwWTR8",
  "key27": "3LX5n6p761XZvUJETAYsBpKNUDLAJmFCKFzMYCzGVtdvRfAeurXuMDm94QTNhUcAhPtbutwpR4rhEaB499B8XVc1",
  "key28": "TNoTtgTufgNQBhABjAJNcJVq5Sw1664KfRAAFCaCFoyPNLEjaxAFvTKd5V44rp149PGF74R5h1Uzi8tua962ktn",
  "key29": "2icnodx18gyJZsXMKYzFHySvqsLGHn5gX4CYYMC5emcmjLnakfsswhVdJy9UYW2aGHX5HUhgUQz1GjwR9QkwawVq",
  "key30": "3hLpTroRP2VG65eH4kgAzwBtKYj8Bb1hQzRG176gU3cABZuNX4tbv9g9BM9Dsat7v85aFTWopSQAbSQxQ7m4xLPY",
  "key31": "SZAzfBDJ9LmvY9G7TJXBdNV4ixocYN7bXN8SnfbZY8Xt5y2EccSxuXkuh4uAuWb9RF6XDpwz51H6P52TqgGWvXS",
  "key32": "DE7W4PeiexZme95SfGmfb9qZYpu9JT4UKtLb76zAjT2C7aZCf4BtTWv6NqVfF5avXB7NgrXhMhF8dANtFUo12Yx",
  "key33": "4Bt8FAqD6KJE82xzQx4G281yKHKrtQZkmCRrUSg6CrEJwCwp82RR6PyqVEgmtH9RrqktmkvNqnasgsdnxZC63aBF",
  "key34": "4zNZwDkBHKM9vAtw4HaEEYjjFmc5m76iJcXYCPw6pw3y3LjpfH7NFbocSmffUygM4sueVE36pZjTKsHyiPMNyTAh",
  "key35": "3qdv1KabdoVEKqf4dqzcR5i2rYAeJVbWUYF8kqNkVe9ZzHWaizgFuo6kRy2E8LJZU2v88YVQ98HzcX1QiDWoHxks",
  "key36": "36VdE5uZ2pJZJshegF58MNL6bZ5c3Mj29AbXpeGJpVNKren5w9BMdwyXjwKSmPpsNjyrX2MArasTRBfj4gAREqTS",
  "key37": "5KZ7bPCRkpHRvaVE6mQDfi3mMSLuvzbLCifYdnWHE1d55NFht5SFM1Zz68PFxtpECNozA2NDE2kFpERG3YreNQpb",
  "key38": "Zkk7cYaXjgHKsJ7Pqca7FLE3TcGqdgd3gBSGcCG8jxNnL1ZN6R8Nzpiyk93rRx12iy9CVBdEg4drf6NYUPCodLc",
  "key39": "3H4S9GGoh5RrxnC5Ago1qQzVDUfJegpXahxs4NQ2a7tuxfvuA3FaxkVXo1ZJ6QqwXw4rcSg756NmUh8PUYEaADSn",
  "key40": "BTyV2DfJr2FPUsMizRapKq3sabfvieEcdMM8h4oLJxihzWZFokKhfYJ8CAfVtKVFAnbYzstAMLSgjDrmUxWTJyT",
  "key41": "myJYMRwMHbF3umySCSBuCJiGY535aEKvCwnm4i8ua8hBnkavzrosiGBYpDLtWwKKYyPqG3vtoKu7n9Jxe9honfj",
  "key42": "3j3BnFZaHgKK7Gtw1WZBM2BSaVRuREapi8UHdW4dzXt9yt3VebMu8oafPmgNuKk3ZcRD8dgFQjTudBYJke63q7ZF"
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
