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
    "p4kNw67LWQMVnwGfWpPMyx6W7Rw8AcfC58tJ4KTBCLYpDtkr7nthkx1HExQo1C66v8q38UZ7k8qSjwfKBevikZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MnwAMNoFXPGdqKtHvZm7aroHUQgXBRxoyjhN3gzTkbHNj7kUCwDVaiH6PuEPf5crGCu4zG5UPXqYZVVJJTR4nqt",
  "key1": "2dG8FoUVSu9mu271Ur1MSSdxYwYXYM1R9EfMXLxE1Sutm98emFxH4DR2bij4kF6iWqpBxdJzYdQ579uKKKtS8LG4",
  "key2": "2Ko1PsPfCaENe9qX4DHRf5TrJ2vsahRsaPsUWJ2sjdaiZuofVWTfN21zcrAhT4jyRV8eeJ8QSQyBryPtktD2q8q2",
  "key3": "5TJk1AwVdf1RRGvV6BCfE41vY495fPTt5ixQtZXVbpdeBknKApUQwPQSfJecRJRZxRzmq4u7aCSTiCCi5gdwPg6K",
  "key4": "5ZoKhQUsjsEVBPY6zx5UDt4qgTau12ukwgT4oaGWZL5t2KCbZUUkQ4Bfd9v2Z1HsXymJyVxWyMxHDBWZfpJA3QJz",
  "key5": "sQAQtowbGD99uTeLKfYdpe9er3ZGXLLvaUDfumadpVpF1oW5RHGTSNMoDXyPLyWwKXYp6d5mDXwC9hPWAJ2DvrJ",
  "key6": "2zCuD5svHasAo7eUu4wVmgzX3RQwVaioecfFhyY9W7JUgPyhCmyrxe7Djs9PCMjyBzU3cnEBEUU4QGGgk6ywT3pY",
  "key7": "QtF17Qc9xeMCmxwNpweM6USJ4EfZshJeNgeMnfztZan2HmwFeDMP24TpR6uf7GGe4vbvzoSt3Uet57fJPygnpZi",
  "key8": "5X9RBYKqpvHEGnjmM9iFJqrK551CfZc5jBp2XoPSb8PkhJGxeN6AE1m4u1f3NXXNrvjs1m8URVC9uYsWgpSWBmWR",
  "key9": "4yWQ2XxAJAGeEqewfKFh3vyGyj3ScqeJqXDoAdjvcgvDxWj7K4DYumc2rgt1uApNnZCFCwoEvcGDk64BzjNKZehU",
  "key10": "38rxbwmWmAQnGLuN25uZpsgzrX86ewx9hpgtFh4gaA4u1kVfmF33f2VAJXwUBjKFAgaksoHThGwbmM9QPKoNQpub",
  "key11": "5pzRf7UML7AanJK55CpHYx1qRXrEfis8ZN4DuHFochnbDFMFusQcHTn3Wias2k4ZbPuuBU7bxwBYZbXYkZKXEWSg",
  "key12": "nsu65eskybGe39jEaUT8AQHKJo9dz4hPshGBXDmceB3vfVibSBNQiqwdXmdLuK43X26jAfsugtXPjyseP2eftXt",
  "key13": "2tnXusr2rM2rX2qKvMA4Gvh669574FoKian3zzyTotYjDXxY1mm8vRrqVhcYmYVcZvfS5fCm1FqxsEqMDhuopD7s",
  "key14": "3GegqH2dUJ4SgHndTAsahoxwq1uAcn8QWjMkUv5q1JRb5wV8VMGLvdMwtswGbHC92CGpyZDSbxqedimfPRsN3F4o",
  "key15": "5Pr2PTYuzWiA9X5mtfJ5zjafmTvDZNKEaiyTPvfHdxL7ntCmjyxWaFujJwvNECyYUiKBoT2LVKSM7zbimL2RZ7bP",
  "key16": "3KWZAoajd3Fos7RjybxmpBi8VKvE1k7Ntt3vLYJfqR94TfyQMiZ1LiEMd54PJMwFvhgaTjeZewCVyvwf7EJYktbE",
  "key17": "5YpRE7h3LfSLNYW53zKMWKoASJwdtMht3xJx1bE9VoAU3Twh8Jiq8fXFakVJmisznMt3JnF4K5nw9Rtqu8gjRHmN",
  "key18": "61Xo4HM89oikz6nmhqjyqquugJxhWU97cn3rfxFH6wQ6xVbTftvf64iEwPmEY49yRE2Gy97RhxX3MwFDJKiuDmYn",
  "key19": "NFx9fmifSzj1Ld6NeyybQunU4nfirnqj4mPzQM1nbjTduKXSAm7ZBJ5UXF9EhLzEiMY7M2tbZn1wQFxbjdVRz8u",
  "key20": "3QQKibzi17wJ8JxkkpM3fr516KgrZuzV2tch8sy7bk2oKtAfeptNGEYtd4pT8bJomEy16UV3xnAZ6ag2bCQoZ5bE",
  "key21": "e7CawDDE6N8TtXNzZRxBBSmo54YusLcSxcSj9WJxMN3JierP4DqUsLqCohiFXDfY7kTX8sxs9DZGPURkFHJgq8c",
  "key22": "VVXeYLBzKDvBFz7NrFtcQKwqy2DiQzf16JQ73xGrcmBoxpkT9gKdToEhpvYBZ2dPbg8zT75HtNoHMmESoQBMqb7",
  "key23": "3BF45DJPUuZstYDgfCzhjmB2UgjysRiPq3T95N8usPB1WpNVLADPzU76APBLMwg27w1tSw5qhLPJKnt5DJ3xGuV7",
  "key24": "wVopj5zDtcWGi3Hww8DLYJm5cUhRiiGGFEA6HTQsHZWVCx8h9PLd2S9gAeBggwpHW8G4VhDE2VTU9ZRbiSW854M",
  "key25": "C7AgZowdqf3vdVkGqSDqQxwGD8CjGNRQiq2UegCoNABvkfcBjVrwmmscxsvnhjyJ6GiuuLfD1vYdghtvtgeLLEc",
  "key26": "ED6qriJcYDbEzyUPXKnD8JryfvonNGzFR4uYh44xeCuPXcDf1mZwqH15rvVvoweHUvA5VD3MzdCXGWCqQLJEMB6",
  "key27": "6xnkD6GKth56QsSXL8HSaTHxrppVSvGtjF31ouqAKcnVdg7cDq8odiPMqi5McfLJjnAW2omQAq3TTa67RMmtNvn",
  "key28": "ZAUXeHJAccxvjHp21vULsXE9iNDHLaYN6rKiRDm4xM6dz7HZigFUpNHetPbjuW34e5LjqCXqe8hixmgxC1jqphC",
  "key29": "W1THTb8V6k4wbVNG6Cca8xQ2vmNKZ8xZZeMWSQK63jCMdAK7XV9s58mXcRRGPCoDYrniizzB8zDW2CWTS3BzoAG",
  "key30": "4psoqzkUKRVDU792prn2U9LFPwjr2e6uknWgpysdRrxsdgaeHF7tS4rJWEbsKxVWnJ5JmtABrVQ2UUUkENqvQRdK",
  "key31": "5MtEAUuUu96vM7n4GXVbkDDWYqhdyoud1nK4ML7FCUN8i42SUB8WNZqUHj1VHmSXBhtfafYuteY5o6iLddmKZYR1",
  "key32": "CMNbtL6tzcdeJN5KeN5e9y3NrM1NBdMPXYPBkibjiG3ftzwr9urCYeyD2EqTjcEEREZdLif9N7CWuVA4ikyrT6s",
  "key33": "5rqrhRagd2i4uC6cLRML6QNFWrPayYrapwUQJbiSXhszVTsGxWLBH33bDzCxDhg5vcw57Sz78bkVXTNhA89o2D4P"
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
