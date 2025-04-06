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
    "49g8aBf67818BhKxYgnrpsvgA5YUP5z23vHLv9boUk8ZhZ78w5hRajVYVL8RKPo5u5mrXveuYCnQ5QJX7XopigDL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q4xtvGt3dMQuZwLmH2wbjDgwuixADtUxQA7hkv6ihWsigVPwEQBRQ3e6LtJ8bZVaVdVdbXnqfE3YySbta6SHanb",
  "key1": "4uPqc1qB2KvPFWQDb9yNsxEw7KTRtDPJMtf9hmCE8VmGExhWPmS6VUGXRrHFwQfFT6t2qKkP7Bt88CMfsvumRDXm",
  "key2": "4ytERzKHGuQDfgXTk95ixGYhHGCEkZ5fisL4XS7z288yb8X8sftFgejk4Xh5X6fSiJWqk4hiokWQEk8t9GNnMHtv",
  "key3": "4BXTizRaJ7UXoFuAVS2gnPLtxer8uougGhSbmJXjRW2ciZXsnfYRn6Z4YmV14FrcF77pVTMkRjLo97bo5qkJovDP",
  "key4": "KQrBamMBM4zQFNzDwwHLW9QWDryktULHKr6T5wWeQcSQBeH9zF7NChVyN4c1EWE4siYCvcCGouyTZgGRTEAXUaV",
  "key5": "5q53zTaXcRVdK74SUTiCKsoD14wV1qvC1NQjdKFY9ZcgQmcFyHYRaEyPubondabwJRReXzoeriZ8bdJ7h13xm8iC",
  "key6": "22fM488o6i3LpfWMvcA7Cu5ES6MuvTR67BfauUAK4cVAcQDQxN45dcTarum4cenHL46RGPMEBTBNoThJpk8DqhK9",
  "key7": "2UUJbkrZfRZYUSKpC8TNwmaHGDr8a4EPVK6X6mXG6XdjqCEJzJcqsyDqLHScFLcRdqFdR3ciRGz8DQG6y9Ye9VWr",
  "key8": "xHAHTi3MrFZdCaxLyb6dwrrMdeQ7cvgrvfyuzxJyM6kQKhJ4Uh6gCqL489QWWprdLfMLn2LnXDQoUByhcEfJWH6",
  "key9": "V7nAYVYkhaYA1UQjY1TLnSDbByddjKbJcrXUv1LhN3S7j4WyoZMLXjRjQTrLFHPmXgVW4QKh4WwxCUjhUgTmoTh",
  "key10": "4qdotiwfiXn7hDm2i6BvPVGCaRqBAMbP93pc7GpVm4MqNGoAg8UmhcCpRbue7FP9yrsHhmz4Vn4CQ7ewdK9yenUS",
  "key11": "55kuyrY3EJHU7APK7VaQPsgKCpQaFhmrJ6Gmp8qPiTJGykZJkKvCoj5bHJNuR3AsERuoJ8UWvNp4FCvfoqDu3fVB",
  "key12": "MTyFx2SV4qVCex6uXJU9QmTyynfh2eRGfVGnYiVNW36Sz1Kqc9hs4ATNXttNecYzLDubpu4aQtZrkARQnuRhCco",
  "key13": "3CS8iP423xb6XBfwPNBMfdiUe1mXtnf574EnBYvs1PxeiFJAsd2qpbjR92WBFj6aG9dxPFzR9gS4ikBwPxhcUoQU",
  "key14": "3ViAFW7ovBrpXk2M5bkwkqhXtvHTAMT7jU3TRPWz4Xo6K5bwn8ozpKdbvsDQfWPe6YE1Q2M1xvCgqiJKvordHaWp",
  "key15": "5zNLHqYRnseWRDhQRg9Sw9fpnM3fAC3NA2uUvZZeBcBUA6CqnSCtxPvGa5tEECre5QvpbG7kb5XwbyXd1dKhPCfk",
  "key16": "3B4YDLdwx2dYQDExVF7GVxrqRPM14t1p6g1kjEMoTwLmr7ddzCy5nE4wYyT13bUXKhhQfiPs8n8iLxT9jWpLVKJu",
  "key17": "4m9gDM6ikSUbgViZ5hFhKcGEFDMnqrQbwTXVLVuXhk6X7HhcQMDgCYHq1emNvDRXWqfWkttNDprGN6NE6cRF82Tx",
  "key18": "3bTQXo9k2Ph6Dj4fF333ZErbR6sEZMMFep9EzKCHrbQ3hbpnj96VGsNvPfZH3aWEYqC243Yc3rbhx3n2Kt9WsVFw",
  "key19": "51yCg2e28N9562H5fbcohfomW6sJ465Tbss2a4UESmDuqVosvQ3osn1zecfNVq9kG49pQKb2C4q7FVGmutQ4hjFf",
  "key20": "P6qVeNAfTT6BcohVb4wHLQTevXzXSYYY3KKRLUNepsDVj8pMahWxuP5byu1JsL1zeVjqkHNoGSuLdU19grZobo7",
  "key21": "2JZFFw8qFoEQDxQFX4fyHNBn6nmUb3cpdq2pYso4DGqiTkXNqTRhToTH13atu6CReySkCwK4bqhXYeB1QPM34bpa",
  "key22": "4FWBE1WSmMoLa6Ap21wTwbThTWYqKedSb2bqNu6nHPAHap6kkr1miQV9UEf9Y1HF2P3pnL2c89nUGfLo5zVEdx5N",
  "key23": "3XzDC5HTuRck54UvCd93Y1eCRqVxZk3DBtFnZzubct3zAvfbsZ6TJek8ajsYHWt4t4d7pDx4LE5EcA2DAQzAHKwC",
  "key24": "3HQN6vakpBMfBoChA8TMdzHPzBrDEZ7tYfWdJR9DEWZfBjAqiBEG1Mdq6t6d5QZXNsV2dh6JYAVX6u6qq1J6n5vX",
  "key25": "J1fKynoCM5p56sRruQuJnp7DDgYJ3Ey5EF3RiWhNEanoUpfFYk68fjpWzTSmzbcAtDVrmcr9kv27eeAf5ffkGYr",
  "key26": "5zvDpsvFRHGJitFUfocyTgRWDczVs5icZUjECnn8gAtyNA7zPjJHLRNxpUfr1wbwyZ2UEKjVBjMFNGWVVFZYJymu",
  "key27": "3J7DewL2YfxBySR2Lz4jqnpmUD5bizU4DRhSn2WJLj3DoFGB9KuQ5xTWbakxdEbWH6TU7hdsD5aDfSsmbnz8gTMq",
  "key28": "2oWW45T6mBFe1FpNUJ82K5WkF2aXuvXwRkSAtkhMm38k5x8qKgE5vEjxRjB85PRJyUA44rmfsawNDXaiuWBRKUgn"
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
