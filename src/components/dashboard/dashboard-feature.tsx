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
    "55sSaXdRTA4dys6imL6YFhbdJJwsvmV7qDXrBqrpkEZEjtmDHSnGo1MFHBoH4cfEkBWLTa7wqTvo7oppNnt76gsX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29iXzaE7xgABBx8XfZ5S2QmudtSDZSdfgWEf2Zp6vKjvsNkEgytrCFBBwfnYPDowuM4EJprJCeDHuYnv2D71XRWn",
  "key1": "2Lt7dpFQrA6TPZFSkn7Zz1cktqBKAsbCo1Hv25bMsKH9etMBXvpsjdUnkh6h3vpLZHDb9KZe3weCLbTrY754rvCC",
  "key2": "5uZtronBuBaCNHpRESXMMVz3DsFYT6CSW5FFmbLUjMf7621g9x9Sv3kYuea1M51KnnsEVnT4XHy5khvxGgoQvdc7",
  "key3": "58dcHFxVZDfAiS1kN4qtfHHU7oXTe8DC6Z3MWCBRikhHTu1bXVkNmJg2wiYPRDCw38ARAcBBZJMLL36CLYcThZN2",
  "key4": "5fNRy8VrXstMGZUs2Lz5Jdb1KfJnJ46eJkTTQ5212EUjyEzVVq3VFZmDLJLeqXUCQ5Ht5m3ZnSRsa5BKhVi3u6o4",
  "key5": "31oF1eBXiwZrGav5z9woPZLrAcA5oPPg2ztQoj6KP2N7jCvFNiHF5DtCodTTSEA8TfQoKRrDWqiGMq87zLYPDKAo",
  "key6": "481b5nSz5YCsAYAvehRMF2WgXZVysLDgf58q136uHt4WUgHEGLVHfaaWFBttzyhxL8tqWLzLsySXaHqzFrwecf1x",
  "key7": "3BzEdBH5zCEWgn1F3vrD7biztxLUzxNqDPifpiKceciZUmruhVHhwk83XGbKU3k9M5Rq9xKXh7gRcDD7jARSfY2c",
  "key8": "2LyBZygX7HzcxGvdjHNoT5mMipt56FFXciZygSDjHMgykg2jNEYr6AdyTbNM5sWY2BgHkGVwHfZm6Za4MEs2xKZx",
  "key9": "4M8k1xEQcEGoQMwSSxfHxmPBgLFhe4GMQDvAcm7BwxS8HMJpJnHzzQ1FVNFkh5jD9QBpuUDdUSB18ha89gvvnePr",
  "key10": "ZguQa1CuvHepLyzbap33mRBQbNSYFGC8hA5r67YzhsAxYoVVenjq3MjLj3nHHqG6E4ndifiuA9QkHfbAqRNfDbT",
  "key11": "3KtZZyEafkXKbtq33mXkTVouAtUygc4dfHpVbHCLGPUt1j5P5PXneqQ5V1qkbAopwgaVLiGkpbND27ZSmzQRnt5q",
  "key12": "3WzjZm4xKtW2rjQTiXdB25frCFcUSiYiJTrta3mEbbtgN6PpCafCtS8wdi8SeXCk9DV8dFQLn4odYtE4GE3RdNX8",
  "key13": "4kRJGiD7LvMtjmZAhAH9JPr2mqt8TfxSDJS3291azNyXtABswpZ1bQJT3KscxhZkSFtRCm3dTEfb9GkPthVPq26D",
  "key14": "5GTfvu4Bov92uu32X5CbwjCQXRtjWvAyrWvFAsEeWrt8poXdA5ArcmvumgDhsDmF8QtBAL1Ace6D6GrC33j1RRcy",
  "key15": "3RpqkWTUHDYL9VMBGeNii52ZAo6RRHRmzMeSrTQ6WMpU8t4TjxCnzui4P5vef62Rd5LZmXpaymaDDLSYE8kSjX54",
  "key16": "27RKC1uVyi2MhFUtwrvbP3FDypb3rAiDxWh6c5sUoLEL91SxfdUgEFdE4SsgpD5xBE6fN1xS3PjjqgsVxCE3YVq6",
  "key17": "5TC8g4DvffTUjnBpn3FgGLALZsb5Dq2p7VBBzfVMaTbzvdFSN1vpBTE5oAwyvR8B7v3SrQUrhajJex33pvKQUNsM",
  "key18": "4uirBeRLEBDaDECaHFHMdaWrUUn19EAr9FSLY31npoyH1z9McMUBDVJsSpEwDUvJBWS84WFVzBZnYodFz4XiNrYV",
  "key19": "38eMBDnaPVvUaycN65zVWukvZkNaz5bpT49YR9v5KASJZ5hBuZFbXUn9LHU4YTAqNM1Bma8f1pCiefbLjaYEgnYR",
  "key20": "KMfUe6Ri3ZCLHRAgCtDgN5WFZ1JHSGZfey5rTaaYL3u1vxJ8pYnCYFa9dpcS4Tpo3JdxeTbBmUVLavfwRPSxK2D",
  "key21": "TrfB1Q9oEWhwK7qabktTRo8u39MmFZPFnj42tqTLFia193ay6R165vNfaE2hcmwRGSXDG2kgPzikmaLFUg5jih9",
  "key22": "3STubz8uKAWXgD3WFQqY4HshfdzJuZqz65cjHg6dFM3GfStunkwiMXEyzWdQJHBSnKNGSJ48ioNTQs74fR9Nk7mb",
  "key23": "2gq4PaaHUuBPy4sCKtjBzMpu4mtthjoY2C3uRXrRd6Rv9MEdnRHSxdxT3BAo2Ps7fTUuTyqz514TKXzDdyHb8ruW",
  "key24": "4j5cKcLKr8m2Dsvqe2jpT39G2dbkhcFa1ukx5m8kTbQ2q5fVZcRLimRBofKkhbHwqGw59oav2NLns6ikXgfSiueS",
  "key25": "5bdktVnNFCve4Bf5TLMwTRYRRMKnW9yU7Pzjkb5vccHkzLf7DuHtH1aB2wNqyv4rXLHgRdEV6trZYEYNByE3HMTn",
  "key26": "XnfHAbVP6L8cZGXGZCbKPcNCVTuiv1iN6T6EvCmm2YihbZGdUcNjUVXfn1TFsoniBJNfUeKa5bmm8BHHt5WMaNf",
  "key27": "4Qqkq8Yk6JYAjUJHemYCZmHpsuG14scg2yr5TmqhbmLgfu3P22y99zTdMSpXCuYehpor7E79c3Qy1bvxanYpuDbu",
  "key28": "4ANPwub3ZawMAqGQ9tFu1hjamYCtRVRi3rvzTtqRfenaGW5vNqi5qhQhw7CAdG5GfFxwBbMQfC4n92JTdouo3eHc",
  "key29": "3wbBmuuBqwZy2ZFFyxGvf6EzP7nZyQMxboEiPdr4fzz6AAeeM3MKAFdaU6rVi468bbSF4imBgYPGESKSNT7b5tBW",
  "key30": "EEEEbFTS7PJP34JrUwvkcU1JPpNeHsA1Z3TW58aVYmEP2RQs3wW6ayie34Rbuf6LpVuTFPy9TvBNbTcQaZdgn9S",
  "key31": "2XAW6t9RqHyFab1bYdy3KRrY6uMvupg1Cy3UAmLCFaSncKtVDyK1avHPDQK63h5JuNBhPGrpqaSL2FbrFjfYm97M",
  "key32": "3PsrBrx4xGqnaa8sN5fbg9aV1c4j9YfsmZD2qLGpxuCgfvc4ZWPz6GwVMokFCk4MxVWQyAVxMxVs8QTZjp85qjFu",
  "key33": "612wAEoEdZHTtGymh9HVj1NgoAYnv4QhPcVmrzdNNDDZ3brdt16QBMYsoZdfrt5LSwVV14Wafp3Bd4kXYN8Dh6pf",
  "key34": "eA6oz4FXy69wU2iFHBCiypXg5VqV866RNpNw2W7YJ9fPFktm4upWcKRqrgRBHdK4B2hUdz8CY1SxJxn567A82KF",
  "key35": "2hZqLCrcAHCTXNLuSgAwCGNhVatjMfNRLJdisSdtyFRi6cxie2NT9BPqtrWqnHe7h6CjEDCteFQhcHaDnwisD6t4",
  "key36": "5UmAe15K3qQLJUqJ1WwZZr279KKgpvNcBR2XEaB6nSqZishTwYapSWeh8xzLA4rGCv4EkchvM8GfQ3CTZDCbTPWk",
  "key37": "3mq2kGvtzUVQKj6crcqpqu6DwVn37H6p2xs42TNEBR4oRJ4CxXwDzNjxwz1fGqR1G37vhcSXvrbroo3e2bot4Qc8",
  "key38": "3i3LDYCVwdjQPngWHkogN99odDGBM8AZw1b1qnWejXuj3sMCUZqeZ8JSqyC2zjpgjdgNFPM6bStWbURanCwR5fyz",
  "key39": "4cK4HJggmfCPoKfqon77GX9XbyymvrwrWzt7jtACCcr4YBuCd4mgkCxG8asS73HEB5BRiqFnjMtLLFKJXirMG7ww",
  "key40": "qf5yMMiwKvyjk5cKoG5WHkTyWPrJSwpA5Eom7cAXqyKipec8u66bYrF65MmTimt8eRK9Wfk8CaCkFzZQBnVQPNS",
  "key41": "4LCAn5UXKyKz9bv3LwKkpZHMoQ8Kj3q2KtuFPboAZUaFRMcRtJf9txnZKHWoXMMxcDjopjQSzprqDTfK4xQYMGWe",
  "key42": "4QcPAfPcV8q5mSPxKy2QyZHesnpbAyCiwFcJo8mnsVxjPkNz8HbTcRTLmRHRpaV9YigKvTPBTepqNZ7YvRVGxYWg",
  "key43": "5jCi1Ghb7k91YtKpKtJ6xU9pEXMYvTGTBcpdyVYmKuAxKq4NQLnfwpKznD5cFsnvPRS6T64Pi5gEoStwnFVPCG18"
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
