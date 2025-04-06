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
    "3GcYXRqvd2KZRQoimZxAq1Yn5LB7aBBk3pQYGRWTKUEkMawwATjA3WeAp4RgrQrRQhtq4P6ro5sZH3AQpNTVaMRV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SHStF5oHfhbTbA8ZZuopWzma2B1Ps8QkS5iQTsUnurP4fJaxphg4oJioqqQx5V6kdyEL4rTBrDk3GevECBYXNf6",
  "key1": "3dEFiZMqtp77za3MWDcGsJQ4DYD7dnyKZa2p1BMmwHMhqnXJPTjiHWgnwmS1NdL5mtAXD1MZuFQ9VEEhm6EFetcH",
  "key2": "Y8Vhibx2Ug7jnTucgQ5NMJH1YkFTEwdHHhQ73X2ryHKpCEVLCueWLxhzqD3kwtzAPrAN7HydgNj13fHy3CQ6ARA",
  "key3": "574SG1arGikqjUrPbtDoXvKficcUeeWXFuFDBhKv6V77oeNvMZTNjj5pnuqZJoBUNmYz448d8ysYvXZYhKajMbaP",
  "key4": "3un8u5UwMHLkyYCa7xEokfHtVqRJSoLK62c7n9FRRMCWYDd4Svw1DcfqecL4VJQ3CpXAJFeRGRdygiynWZEh5ipW",
  "key5": "419tet5pvYLMCMacAdQxAHQJ7k5YMgGsBgyYFQ2tX8hGFUdo2GHuWVYooNB86EW5gY8r2SdsQjyMZCA88nbMcQcv",
  "key6": "ouBPVgyWR6xycsMCFvMqbeXo6i2WCeZA5GsTorPaaG3TaogVnT5vpEGWbFR6HtEmuMgurXhEYtxDCVW4EuN3h2M",
  "key7": "2DDEzWXC8PEorLhqJwQKpFgb1hYBq6aJyysZaxfxVq5wyJFzvxdES89tv15V869QkW7BLSHCeDKKNsWksGeL6vSj",
  "key8": "5yvZ1jziTXyEyxUfjoujL5zGrj7oWLyfGhxctWzjNZNtKzKhpNnnAMwuVTNwoc8M6Ndoms5kjnF8Kk35zJsTjJSr",
  "key9": "DXZawqVMFVL2VehiWLPRp1kef5UTc98x8jrXAAjySBYHUwRWf9jwH13RR9dD1EH8ujzRfqAauLHgEkTnQCMZE5J",
  "key10": "4GrFM3QSrDQtbuGUrBAr7H9t18qCDcWEbxTHMjPAYNZYnKfx2fwHF37N11AzMjmEvcSv3FCZRUv3qGMKxTpySN6B",
  "key11": "5sbpNCWHL1c8aHmcKEbbWDBaxZ8DbtrwrfZwd2fQGJsapCrKzHvQrHRxTgwTg77zZX6L1yunJGfhRzKkbCUyw8Np",
  "key12": "4Ztr8UYiCGHqu6oetSP2KC5zWQZAspPyfjAUBcFvZdF1rdee9R8rpFoqfRmQaNvaX6Qgv6LdmqT6ETKCzYoWKc4c",
  "key13": "pFsWSnaWGZjUxjLrB2J8V1h1fpxkc8LeDZbGidEgf8RopZPVkcweSv3n8syRhRYiUAN47RP5XagpVe5ufw9nEAJ",
  "key14": "5yMLSQKDn2K9Y7ikPaVoDKT2MkgK12SDaAhUzypM5wL6U3mrF2pqMnU3tnCS39nhz5GCB8bmAuTZB6S8AYT3bkL3",
  "key15": "JNUuZ7RqrzqfkmhCGbzJpCwuFH8296jTB7CBVuF1fx3hctUhaDsSKEYgKEWXuT8P9vg787Y1F28BPLzasrm1fD3",
  "key16": "TjXHqfezJsjMT6tDuzSHZfVXgsCGCtzqsfm7xzHLmLEiUFkMi3dnyL7fAe4jzLQXEb4PuitrdPGRbDpriTVd5uu",
  "key17": "2ChqSeuaV5eQHVUs2V2tmPUuqT9CBkX1Dc4r6v5m47nx8GfPyA9xj3WoDwfejE9z6Rd8Ht7cs3WFAi9D3pJ4sABz",
  "key18": "3jp9M216FaJfMkpfDZxmooa8xwyQdx18kpkX8W5feL2LcHC9UxnpFemkSYgivfwKLNJ5zh8sgx5bEEoxDx4TTELU",
  "key19": "3DL6nEQwgFC9VAKfctKKEhKCv882bkkNtECjjNVxMHid15m7yQiME7xFAdJMn5MujwzsNV8auNYn3ERZ2aNBSmAt",
  "key20": "4r3WjSUCqzG9LspGJ1qfNyqV3pjZH2FsCfUrFFmLu8CfHQ8X9s6ZnFBRHXHzc7znirsYEHaEP9TA2S6vY5iFPiQu",
  "key21": "p9eT26n9daw1cKex4GzKF3rnhtSS4rUDS1c5K6f2vcD4vNYuSvPpNp9tUo81XjneDoBcx8rSGD72dYS67BvZSYv",
  "key22": "2dM4PRfSnQrEqUivNj7KHovMfwMrAaeUV9HNgPSzbms6oK1jUXTosa5rJPBEgyNh25md2DcdCXKcTqeFLofEVLPs",
  "key23": "41JhsbxkwzEeRdoHQLdM4Pk3eyxgBbBSV9fGFSyghdCtges1atfooBvaEKKZFBSrrCNsDXcYC3fNe2jtb2DrfaQx",
  "key24": "H6MPKCA36GdihzsP8HAGx3Kwrh4WZxSMopqt8RAz2GqGFNV5yCUZStdhCYZ5cdV4vwqzH5t65x3zA7Ad3oJ1FzY",
  "key25": "4bE72zxM2StDYQDP7yMNCV4sME6BdUitSNtTLbcZcmYaKrL4SJjpHwL6MncNtHDnJBV5QtTBnb3vLPSuhNy51Yeb",
  "key26": "BT1X3m4aMbBiofkE8pFjfmyXEN3B28nTdMrrLxNR2D1u1N5s3LoLLBP5s4xmHHUbiFZQfitVa2CwSzcN6wyVtv4",
  "key27": "5kb5D62y2arqGzhY2GW97RdbR1PFMbUewTzQbQMZuKXSMHwSKCLBpbirw9trhkcLoazpSQ7RwV37ZNqRFzVMVA4b",
  "key28": "4qJvX3Zg532JwCUQgF1Qf66zTQjDD7HQESEnUpUaNq7Zv5izjA1moh6S4ZWQWdyfHqtLVwJXvm9yrFRVJtVzn5c8",
  "key29": "DMVzCJfJQLCLyPf8PVCvj6BBb2dN5NuGUxF95cuTsujQyxhqCUUoeswtjhfd9pi1yasqaUJWtqi86KK23heDizN"
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
