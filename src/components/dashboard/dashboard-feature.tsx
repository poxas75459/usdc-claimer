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
    "4ankkBtMaXAo3SmPzqWc5ZtTjcD2sDQks9m54GomgCCNazo6H6mybJXQGcghFK2WTLsPgEm9stb4No86BLyJJ849"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yr493Xv3i7u5YSygg1HDhwntbKqRL7tR9YUR73HuGq8igQwpiZR2EVd6bVWQ7JSio71G1afMq6g9DFQ3QTqX98E",
  "key1": "MXAS7hRrA9cuUJ7YhneEGbXrA6rn2A73ELGgiupG4kucsEUNYQSS3pnfvmEkCVDXLhW3KhxW4T4DUzYmKoJwNg2",
  "key2": "4vNRPds5bYAPC7ytmF9y41eDqpsULY98QBwK2PdWYgFF2EDjs4Lg1mgiSK5hY1TcmjHiytGWxgBiXk7PqmCHWy1U",
  "key3": "KDtyeC1Y6FAGthfhC3wm2wmuvafRFhcKGBu515xS83U1pj7BqrpsgxpR1Ni275QhYgZUg5knr4ujcmD29QV2A8e",
  "key4": "4QEM7MwMgagWJtTLJbxcPbQvPPwCexPvoXMWMwbjugfZmkQTjSD69kK1Yg8M4g1mfv6dR4iCL3Q1mK6UJCHNBTgv",
  "key5": "4RrEetyS6kFoWDRwi2KiGWZEY6DCBADCgNKzvrrjMjanxykstWkc6Y3SbAtpNJg1sGEAV51jvwMePfErWiWgsaDh",
  "key6": "3h2zG2JBPQfMEBm5WA4Jx5LKq7VNDgQr6nXhniLxq6PjXnZ9QknTi3iS4kSDwcPCU6kfzXACC66fWA3NA98ChAaK",
  "key7": "38KzFa7DSucUpNQysfKdZiyUKcMG2qPppnKffrhtsQqwXy9cCwW6s3QjuqgrvU6t89dyJXQXTngTs5rvKpgjccoy",
  "key8": "3QX36apuRZqGXgfsAZSUDxjfGq9g8szDUuZbvE3jYSMGh8tgXdJ179yi1Jzg4oArhB5AqcL7VFMPGQ66ihWM4zYK",
  "key9": "3gsXrFLoRQGgKNu3T7pEPj7gRSiqqsvKzg5njfnw87EraT8wvZg4VdcwMdS6k9yrT9z4uMyAyYjqc8b2rjpqG8cy",
  "key10": "2LrLKVvRNvHQgaQcmDjcniJDFkyRgvba9E2kHTHo7dmEYX7aCyeh47BFU6Rhy5a2xWDADKAkeUFqRvXAmkndSFej",
  "key11": "5QW43g6rjiBVXHDxh6QhfahaJqKSRGFGRsmr5nU6TbEHShtmvSvtZNgLXmYz3JBCeKEcjSMRxzRk5g4gZ7RWVfrV",
  "key12": "22YRMGyJBZuN6jxTBmSLsgrjo8PKGxUKi7Miquu7aLuyj76cdDQVrDjptpFWF4pjs3hnKKekKetc1qYLeaMDfrh8",
  "key13": "jQJzKAjkDgKA2QFbeW2EnCPu95UEUMEjLKtox7tZArdphEf9PCVdBXssGCR1zHT45fCbk48uhyeAAJCcWC9FEGJ",
  "key14": "4uyjkgmhJJE76HQDoMrkqwguqLFqcYxAZrzj42ZraoDMAiC2WFCR6kxzEH8hLTYrXhvhZM43oZGSFbYUQaYscsgk",
  "key15": "4mbxPqX56JbNaapZxb6CeLbhhWCi1k9JzSomUhpKfuGPzmebibe4fupU4MCafKYGy8G42ki1Cb2pBGhAQiyCamDD",
  "key16": "3FYHsqp52tsgMiCiEfLJkC1uiGdavvJT7S4Y1CTVGQjL274QLTQcfMPvk4H5gTbu9MPG7Q3suKfyj4eifjFuGjxR",
  "key17": "2HTBNpbxEftnuZt6ZXoD2wx2XvFUsKnjiHBYBWwtWhgH7LhUz83h3Sa1wmwtDnM4iLbVPmNoJhLJrgBHAzJj1KN6",
  "key18": "2PEDYh4h2a1srHuvf8R3gwVsN1Yr7kZ3YJJovJxN3rjPqgAwbiXPJrs33HU64coji4aomTJdrzUD9k2aSrAbPpwR",
  "key19": "3pKVWWEBu94oZxYPQ3u5JqGhJvCNvrGrSM2yrB8o8dsHi18ghTHbkzBeu1YVCAxNeak3n8ykwRFhqAaiawFze4v5",
  "key20": "3wGS5zGvg8vp6Jk1htNkcKKGndnBVsUmnK4vuEfjX2vwCHfH7BRPyop8xWrgMUKsxAjrg8VPxszfAi3ZsLsXGYZr",
  "key21": "234goMmRBY4rDgfxAXLci3pfWy6kFVy1h1U7WzoEcHbZxyhvebbrSf2D3Uea3YxU2eL9fZajFTMrQToGQ22rBJAy",
  "key22": "oUvvzcAod8v6DzvpfhDbCffz663UxJ9wg5WPidXug77C9dVZSPRhpDWr51RGKB98bMmKZDeDLGyWXFmaGh1snGE",
  "key23": "ejRX3V5JwwsWLqjZ6vdL96UMiFVUacA1DrtmFiaKfrccPh6HnfAeq7YvTsNaefsovM6VmrMQJJ91YixLbKnfzBH",
  "key24": "3xiZLhTgjA9QvZzthhv8VAYPYxW8RHvfWdDSms1SmesN3HyNzDpYVKJeEZksauJUmzrMLMiraGcuc8CuH64KVvYk",
  "key25": "5S1QggG61Bko3hj7nneYfMjwgk2HDXTN3DRGeDXrEuYN6eLzyYMDDH9535k9mGhBPEeg92MJzNmsFndbbR6b2rdF",
  "key26": "vwQWFxaZf1s2GCFmvRvmwMvMR7AbLYcdc3A9qGczn6zS1rGCECZvwr7tbXiJid47Lf7WWRanQCQKpkUTzHKa4bK",
  "key27": "3o3QRXmGFxz1mqAi5J9VH6g35QSEhYBgbAfSXxbCCfTiGkkH5JgUkp3gHZfBgiSKZZBbbW2bvKjqbaAAyxbfnm14",
  "key28": "26UwhmaEnMWwnA2Jksd2YmBRaySejM5j7J7SCWDJsenFaX1tbZJgfi74YrWgbevyYmLjb95GWysvf6X9Z3UZKQJM",
  "key29": "48ASYMxCMFMzKv5xUVQaVew4MzrCzNBgCxRLwDco54VuiYSCHVLGEn4rNPYQ9BCKqhx8MWHfWRyZLn3bW8BTq8n2",
  "key30": "5sfZd9LnotwF6eXxvkMpAiDZxXjnL4z7QVBYpv1EfsHGkK8zY8dkWbgafLgG21h6UzXU3KVzysd983JiWQcCTyea",
  "key31": "3yVnLPiy1fxmsELANjz9JRZbfTHFBRVYeJmmUcTZb2kBvMbVAcxmJbdVaeveDUFwdXnVKbyADdfLftnmPMUkZJtS",
  "key32": "2fo34v7NTW5ajCSrEnqmqELLLaPQRbsMSB19TqRNWs7WJRK5ZzGHS4SfyW66HfJYs5Tb3LcetfRJED8n9Jk9sQTw"
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
