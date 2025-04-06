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
    "SQvQV3FLG2TRzdzccV8bwfM7AE5qCz2nfUozMrgmBBoRYsY1zMViguHYCsSoSTcXFqgXhz96YvvM1KX8XvKghCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hYLuB5seNfworcyX2gKGvZ5pFisa6XPPiZUnmE74tKc4Hsqi7K5h6dnNFYaDqi1fGu7qzmrFgPWRCnhCacnnJ4m",
  "key1": "5tWT4feS7DkFjm7CcyKsYC5pfHK9oeyjkG4N8tZx1D78kreRgaXtn4r5TZi4Shgz4JWYPMdLxnuX5kxG3ZuwKRXm",
  "key2": "3qReS2BmEcvMnGKLypgqqJU75tWfF3cHiL9tqtz7S3bGbSuNbq7yer9TsNQihshxhZxvroS1MkxGBwgTk8caF7Wk",
  "key3": "3XEE1krGbs86ZFfREbP2XSA8RZJFPYhqPHF1cDP13UUE1FmHykfApCTfEq4vrKUoD536mwxyWhS8RvsMNUkjRugY",
  "key4": "3Zjsw9zYbyPt16qUESDjRjQaTLj5u1NuqwceXn2q93FuqggWaMsxkVAM9YNxPJfqn3DB1eRp6k1u3pDgKmL5JQrS",
  "key5": "2UXzM4v9KdcQbpZDjVMq2DnvCBW34bRW6G93uzqTdRj2e3SnbRAkWrYXg3tA15Hi4KT2NvnKeh5EVFU11EbZ9fZA",
  "key6": "5ecey27mYXwK4UpwcmjMjWotn4SNkwYtpnzDjdE5Xa3B7bVmj7Bux4a6ArbrSGC8fGNwjS2NohMe989q52o52zk9",
  "key7": "57DqwEpvNihcaii6hXFp1w8QFf5ju4e4AJB2XcFS5YHNJkmt5tVYzRydcSANYrmJtrgvHSsmMmLPs4TaRjkCztDu",
  "key8": "yxdm6Y4S2H9xsWmV6v4qoQM7X7hBTQPffhXv4FAwXvuEkkm7Tf2KdiMvYRjmVqqfnkMSr3UqF6HBXViN1wEyUX7",
  "key9": "4QCAp7e1CCN1G25XWYkDBTxWSdrzmZW6LZAqVuDS3KEFebbnF6FuipTVzN5i6csUZN9rzBsZKz2Eo5q5F5TaJMyB",
  "key10": "64VptUfaB4nMGVxM77dWqrQv9Xryk8Fh6XgQAc2fZwF7dCoqondxVKBJpvg2er7fn56MZezgZ8Y3oKTNwBQLvVd",
  "key11": "5uy2L9BdU5UPGiQDEBo9WDdLbJnhDaA7HhrXTAddS7KphSAJ89uVbx9HKFYaf2bMUtm8ay7f8Z5pp6zvsdx3azfg",
  "key12": "3LMGAVhMUXykYDchRqKbcVmbXv4Xaufp71r8iAcs9TWMtyFJJRGVceZ8swhra2HHDxsoGzjKkMFpXqXDiFCHEtaE",
  "key13": "5DTZxY5LB6zroMdkbG6pvFyxFEUpC5nMNrK74qH1oNkFC3D1UmJkK49tf8pWphheD5vz3uMeL7hMsQYJNdz1Eu7i",
  "key14": "3BCjkL926yxnPiR3jhqfCWQBE8q4nj2nGnuK2V9ATGySZUembQRVd6JVHJVN3uSe2aguyEJv52F9t1AsBcfRmhdq",
  "key15": "49YLsrCXADcNmA6dVkYrLETMiWfnTUafkgSe1yTTGVpwWFxJrFVeKxxPFgS5ubRUam22U37jMhA84RDVX1E9MYB6",
  "key16": "4HY6prXy7vx9HLgbmBVhFqoC1Q2iCoVkPnYo3ovrgNd3NZG17aynx4WhQFDsNE9sE7CyuSSJT3U1MvUvYnK5J75a",
  "key17": "3RpnDkH2gtmioiQZwqptZfAiPYTXedGdvLGoSQZyu7FSwMnVjxDH19hVN1sM2oV933o1XqBHUPeBVF5CBsee4A4j",
  "key18": "5QVAGe1hgkpavRTZjUat72rM5kyvjVJrD56a7wihXZWUE2C1sd25qktYeNNa8pXAJPttQHummqMzCHBupxaHwWJm",
  "key19": "3vj6cYR8y7LmDU8WbkzFG4qzPyPkgNSCWhsMNUDHyQQZD5jarAw47hYLaPVuFRXG2dN71T9WDnuEx22C7g1hiSnw",
  "key20": "5NJaKhESS59XqFuk8hAsxHNZsexpzNwU88rTZtL5JSgDF7GUy5UJNE7tzRJD3K39wyWT7xGijvPCuRwjgWjWiWnZ",
  "key21": "2Vrr7i7Bu8f5b9bvniXbajU893YsTvFUpFJ9Z1jBke9e4orvHAyzNBFYEi21EkPeoCNgZDkTyX7ZwQbwygNZRfLd",
  "key22": "2mWNpxquqaAGE35MANkdSY1sFocgx77RrMf6kSmDqb7BaeoucFoYgMZjnUK9tV1ixYNreE3hXiwadsFqYSeBzwjq",
  "key23": "DiQPEkYWDLwMqWhTAsarfEMvV7VzUYqr3Xg4FMJhWt7ietLR8BBGgjnnVEP3kfecS3rp6aQB6XgUJeJEZeXnHR5",
  "key24": "4KDCcsuX7e8wfaRfHQWiRRTsY1PhjQJJZCnc4rkv92WH5qFrMB92ACtL7CNfCb6vNFge2NDRzme3rwqYMB5p4KkS",
  "key25": "56HniU4NMP6Y45PnNBjz5pWpXLDoQWxsmr6StQf1PewBn51RENFN7xWju8k54N4bxbuRy4vSsWUKQvy4gJf1FFA7",
  "key26": "5uyHtkqq1TDPo4AmeWZv6VWzP8m71SQpuBjNG4nbyKJvP7yVVK6k9TeWrRmUY8URvCuGiRS78ykMFhyU2kRkJSFu",
  "key27": "5ZdZEsXLPfUTP1Q1xrFPvshCX17CSafDR3cQdK6UVLMaCqEuLrov4gr96EUDMXKYQ99VPyueg9nDZg7GCMcMjrJB",
  "key28": "5L7sBEq4zAY9NQT7WwtVCnUK4Dp1VNYK1vWofLshX22PC7WQ1RFQi1Wi7gnD18PkU3fcgf29L8kA755f3qts5qNb",
  "key29": "3uakSsgNPfnBiD6tLkWs6n2jzjhjz9n1YcdXxqCT6bPmM224MVJExfPgCQKL2QQEKmHnjrS7bD8Wxy2zSuqcnpgK",
  "key30": "5MSJ7VxVqjVz9u6M21LsGYXMvjczziWHbuw5DArSiRgtf6wedVPpoa5jNHmKUhabxTYDBhr8U4zpYNpRxFP9G4pz",
  "key31": "5MVDjvKjNDkHEz7GUoZ51zM7pBMx8v2KtNDb4sTthrLnEQcMTcjhFxavsQrdPnusNc2TxWZA52KBi43LH8uE7Dyc",
  "key32": "5vb8nXhjHqGcHuiRB7QE2F95sFp9PcxSTWZALxvzinFXwC73qe5RzurVAvCmXhubV9ZjosoEjewMeWYg1g58eLb1"
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
