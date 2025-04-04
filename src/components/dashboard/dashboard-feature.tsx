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
    "67n7nT3D1icmghcE2LEm5DwNFaGpkBqaTxWNvyUC7FhPtC87Y9KF1TLyWqjcSoatYUYcutdy67hwbpWuMiceDmPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59obZExTGuXjiJWKr8K7TZShLddnVVZH3cHPqK82KgAWbrpaQAVnEfK2epxr1VkTrweZyjDwEfcPDGSrBmpDExJM",
  "key1": "2iM38tiAMEXShMvNmCwNn5WitS4XXXFUnqSoaZLijpxzMhrRJkKSEzudMZzNhhjjkJq7wJhwf7yzZ32ZiktYZ88a",
  "key2": "3mAo77wJyGwdS1QLPgWD9ErmcMfPfYCeKL6D4z2SNA9asz2DwSG9rZrF4DB1VS7DRfzBKzKM6gvyJniKexmu6eaJ",
  "key3": "wmSkM7fgAA2KmKaMgHR6pqjYKXbrvNgz9cJp6MH8ZBHhPdpAjEFVJ6bXaSCwB4D8bHNoxzgLetE6M1g4Rxa93sd",
  "key4": "2SdrY2RLzRi9KSCsFjHnvWh9mUyiTa4Vopq2rs5T17hsKTccLLwShBqDwoepoe3zxtUyfvYssMgdYEK58DiMKg4x",
  "key5": "3GucUy9Rbi4nRgmrAVMaxBrDzwLn9VqzKQS6rMc9sTr9P7sLSUQxRKU396BNXZRL51e5LHaPk8oeyUYuimKVozKL",
  "key6": "2RXYQMMxJUJGFHAdeLNrbYfc2eaxsYniH86Ea6BCiaHBz8gRWaoR8WJuYDTTLx92tbyXyQjiMDJf1U3RWbBgVfH2",
  "key7": "4WNQmUJc3tua589zampBJuY3WyKvSQi4H9RR9ky7kvbsDA74DbFGWxFebd6j5rgGPh84P2Hhv5VdzdXRMgij38UM",
  "key8": "3vak16UMFUkGiebsZfcLAGHborX4a69SKXY9C2qyMviwDQi1tBovZYsZbm3wASizxo8gej17xXc4RDt2YsL39j7Q",
  "key9": "5qCssLVz7WAPT4Hgxi6912xJDFG8LuHGVWgWPwy2bo8uGa3GfJkdT4qoKiyjQEfdCX2SEpkzLx4SQpHY1CaDNd9j",
  "key10": "3YrnSYCmLMhKm4N4y4vWxkjxcPvYJ9bk4sATyKaZH5fnyLgF8jkcckFVb9797sLn9XBRzRS1mWLDxjfDzNyi6RWN",
  "key11": "GaFzfDHz5HKUizfedh1AvrAjegAMXmAqV6oUdmw9f5YZiyRQj68PusZqQrN7PWeJwFAzd4Nw9CXbUWD6Q1a4VuF",
  "key12": "3zsSJiJxzEnZbXyEY9QjQ9XFQjt1BaFh9WJecLBLVzzEnmwHLpqxoW7W7ykxiCHKbDkcp7uHYTDqYJwA5o6LL6Uy",
  "key13": "4u9k7pKSxYnvYnjKMvDsUVJBBK9ZnrvVNUBVscxUjpTAhi9pCU5XB4jAHQg7KDaxb5hHKixVK11mbFCB7NmzNFvv",
  "key14": "ewz1JTKe8eeB6fN2KXLjBHEKjozSEr6ePYQhhNAyfD1SjfNuMBZWfZKjN7Sf4bTopDhMYssN17wgsjxX5vRDUsa",
  "key15": "27bovbE1VKRf1G3oRHZJYUveXqDZEyeog9ew4w7xRRDZ3cVeMo9yqoZUisS3eriBgA8pHNQvDi6fdanWc8JHbR9M",
  "key16": "22Wiox5Uafmw7mkQtFe5aoH1MzLwsse1tHNNhcwv6sCfrD1Vb3ZiMqJvF8zF6kjNvqRP7tEJQJwyAiaSyof7dvtm",
  "key17": "4iBnhShL2E3oLywGrjKDQUE9vAqr5XCTuXZpMVWyEELJ38s3d21TuSGYEiqkNbKmhGkmMWZCVkhJGBsWmDBQ53wF",
  "key18": "rkN397KPGHfBvEd5w3VB9ebXnM4Pm28gX1secLYuCGMLC2o6gcJckoashXgemQkZ2GXYpcojqhgiBpoEyRqHvXT",
  "key19": "3N9pzeQpXxciD8FvtNri8csS6B7KiEVb2gEFrzhH32PacANxMEXPvSZBDU8fGiZrWJm8aFCUrgm9SvFxT9qBe6ck",
  "key20": "4oAEwbAXkeeWRqvXE3xpwe4MmjLYwtvWAmnURSRnBNxMBUSdSLABT4qv9nKp4mQBJcULcowuEF8Xfhd6wehY3GaR",
  "key21": "5V1DGGoN63fSn2JjDH6MvSz5X8ZG155ammWApuFgZQCJ4TzftctrE8VL7jHsamDPdBGpobzn7MjwphJeg86AvGHw",
  "key22": "gZoyQBjhryb5EA8do7TceoAPzWzYx8EMmDGdH5gNL8CJkpCGD1DqaQ3cbjmPcsnQnKLho6Zn8ZcQvey8rw7WnKu",
  "key23": "cMD5dtwNwQLCari1VAKhqUQEUpcYLAYK1pK93HKaVZqeNEPY367QhtRKDcteDYQUnT9rZMy46vPBUMDecUq2baJ",
  "key24": "3GF3nNtDPvMskBCB6jGCBq9JfnRci8mZk9fpX7YrU1mo7QnspUryttYREXHbVeacwrFro47oBjy9G1VVZ9nUMaLL",
  "key25": "21BPBsZXhNQ81XjwB7qaeWqg4ESgverj7cwHmMcv5SjhhA2zNBHX11RYeNCzrLNBYbA5uLe3gDd5hrpQ4CHzsWq1",
  "key26": "4AuVpWLxRLv4jsoQ29v7Lqe1SyQC71m79NNpLsceDHNPJAUQQVVibvGwSoVxSXREwDTHnbXMHf9ggW9YEFp5Hqsu",
  "key27": "4WqKcaPhaoFNKP8yMhrmcBRygNcCcrUbMJjB1vvrXSsfHbDXqwD7QKZP1mEQmHAGLSufpPA7xJE6UwciR1aJm6Cj",
  "key28": "2NCyhLf7MdXsBENa6eU166bys8MNNpkiYUuqrmtWXuzhjXgWc2nVQMjQzotrsbjcx1K97toy6TSoKLtxPFri84op",
  "key29": "4mSqzSWRLpyG4Um4qifftevwhH4FWruatcwcg6mo14sk23AtndtoLLuzuKSesSpzLp2s96Kto4Rp9PfSaHhUkeCm",
  "key30": "7oLAAK6uphoMsH8qEundUHETjziWwDn9XsgJSdkKgMCeGm1a3X9qdhGzLy3nDSXK2cTePskduxL8pGMD9JV1cqV",
  "key31": "4NKVN5JCYzpPTtpQD4wnRoU9nD68TWHuUPm1pnpULWEKkEd59RkbL75MPtcpSf9yVSPaoR7yzkJ9MaSLhABUjr58",
  "key32": "57RruTQ5nXYWDbf5Vi9LiRk6JtBnPpdu6WnEqtWnipqqZewQdXE7FwC6chhF4HZXqz96QdoF3YpcS1UtTf1Ki12h",
  "key33": "2kfs4wZ6UGQJkWNXwEhkYeF489cNgRLJH8R8ganogmpw1f55z8pwBtuTDzNNaGPdTprULmRxyxsdfvoujrW785Jo",
  "key34": "8JMUUmwAFGdBqyh4QWQmtZYhvUgbLgxfU1whZHkYushZFsMmc8VKUngxDJr9dBQnvXvnvu7hvPCARPmFkeoZcnk",
  "key35": "2P1VV7tVA9LFUT4SG1knncvECJ1sMNZF8UMyQVwZnjGk5rW2jwGfnmcZj7bywrJQxuQSupMFFAbrqqcpZkZzTnzW",
  "key36": "5ogVjwP9LrYQkwQKJm2Gp4Wis7YhZ3r3SB8fXSgNz7jBWoXkSkWf1TWXsVtswgJ2JkvCqBX2y7KTaJhB8zQvZBy4",
  "key37": "62gPCAMB22LERGesquNJXYoY3q75GZydZzdg2tQeyR1KnNkogrcj2r8QV2gWJEtfrE8XSL2T7pASiFcTK55KP6Qr",
  "key38": "QLGhe2mHk5fE1nVNHcj4n6JZj1SQfxTrbCGqTAaTkPsHuz9aYUCZWVvHGCLdZSKYfELXoSt4majSebnci52BDpE"
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
