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
    "E4A9V5SLLGK5z4um1Gp2yudHxxzcSuBtjvXqkabjN4U4S5ktGoEspuLKh4vX8rNtQ3YTn7VFpdf4uhX31c3NiYC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MXgjq6fXNf43rM26PgGCshF2LmBWhKL5jcMnVNPYre5GB8L3FRBhsLDLZb8hAhomQihHt8bVpmJbc3hHoskkRZB",
  "key1": "4vuKbqwqcjdmoRUMCuG5vziHk7nncUTS4DycxJpCHwyDtcJ5iJi2Aiif9dYuwVLJqXdfSt8bh4kWNUiD4J1oF7rs",
  "key2": "2gGf4YfZgzjsdgD6V1hkci9isQa2FLy3eWP9HQ1CUY11y2J2baRKZYXCXpZ2Wi1kxvjDWaJv5iSc9ESZCSyeJgWn",
  "key3": "3doGZwGdJF4MRTtZkK7xBk6Du5tAy4WK3ZJKPkJ7PixbV6wigVumLSGB6AH5ErZAagEiDtAj2FfDeufgr3QyWK3M",
  "key4": "5wS4WatCwuh8Zojq6hwHfTJEALVC4FPWTX9VPUibkfc95bfKfuiPRDHzZ4xN7ZamT95MGZLMixKsQ5s3DhBjdr4N",
  "key5": "2HxVRaDkzud17eENFM6sKVYUYCMmJdVCKBT8j6AfpD3jNmMx13Xpc6rddEmpPmf9QNnL3NjPc4ikrk4zbbgk65RR",
  "key6": "5AjYm776Q2Vm7wAqbsW3QyiPamMeCo31EHCtc77LP2xRgNMX7frVi3qDuhphjK59tTqrDJ4KPyj58rYxksCTbTce",
  "key7": "5NBfgveRn8gG8PPePVLcsrTy32ZaeqWdFPUBkNtZc3vW7866dHKuww4v8dLbcjy1cEYAeqjANXL9x7kE8s6LGHg2",
  "key8": "2XZuVximQQrpXJ95PzcC9FPj2ibj1sUj96cwtDHpHmyUg6cfzqGcdu2GV6G4AAh1o1AG6MoAbS9Z5PQRqh6eN9w5",
  "key9": "2icfEFgs1B3hWj668LWs3DYJ1gZKABLmjFYMBkxi5knMMi8J6BSotabXgG6JqK2hCDpq4Nr7HtBQugpvd8sASWxg",
  "key10": "56mT6aHzi3XDFpNo7mKCztEHMqzBMqzfRwzftSedvM9aVz3PgTJZzDQ7RPPdN7QaCbCkP42AgTySGr6UDyVHg4kz",
  "key11": "5TSMfqsvXFJBzkpuHhKVzBym3htV9BSmYXLgJ9V1XigUSjBeX7zyjtiFMnDW8LViuVHZAzgTonxYX2SdAm2wmnd6",
  "key12": "4BAxvNGMGa7D74oPfUKVvbhNaXfc2DbsLwR8CocUYx8kFDineMv4dxjAAXuQZFKNCNGLRNCEsTFQsMM9ZUfpDYze",
  "key13": "4T3mjBzZZYz6dX3po3mWdu9YdN8RWN5D33MgN22pFibDn4Lyvbd5PgL4uAQAcGLi8HPkkadJCzK8i2hvDixbo3cX",
  "key14": "wVSonYUnjJXkVdDDtYH2j5Zd3jT5hYVhAZxmv6LHJKKWaDeL5Qtp3BqdeMNszVVKRCkk2rb5kQUE7Yib9p6P6N4",
  "key15": "4ubszfNcHii1BMixUJCvMfoqN7PMw4ny38XRo7vX2PgobwX6om4GgUXy1i81Zmz2meQkUJWwZWHGDmqwiEpfGn5T",
  "key16": "25YHz3UcWRqyYPdTcAhFn2te5U7jdedaeTh48FwP5JTt5SnkRuqkAYba5tDu26Ar32C1N5VsbmHAwegLMFUPe9my",
  "key17": "4cxoXBesCpy2axDkKgpcPCqUJaaajCkYJEpDMiYnPDrsduomWqcL2Mzdd8g35xrmtLnf9gCSrn1tnydaJ4M8PAht",
  "key18": "5xXNVjv2jJtEddQ2iB1duitu7mmSX1K3CZnsAd92mtoEgPaRMMEq6rmdZetSW13TNTUqXfSJXcqR1MLCj8p8wVMc",
  "key19": "M6xEutdutdCWWTdN6DYTYmAn7omn8e8rQiGUnNazvvf9mJcQN99AdjxC9aBM5CfEsQEXAQ4iyjTLr46N3DEcfYT",
  "key20": "4fyP1L5a5ME9YFMf6eNRfjLdLYyUxDdyYoxw2KktrrvG5PUYFnzrbBuPq9VWJCMaYhP3CXL1B7t52uehHkiQemBv",
  "key21": "GYZfe8Ypkr1UePEBwHMqsva3YyLu2WnTcGAksVCgthJLQz27Uio8kitFFhNgmAHi1TQtd8Ff6HTtivE1yrJeevF",
  "key22": "2way9Z38m24H9nRgxvfkGEjXG4YhMTg7mC6moqhA9EG3ntZMQWpCfWVdtAXJK35MCSmn5ja7884EygzryE72Z7hG",
  "key23": "45K9JhiUErgWNkJbXbPMdf18hTMAKmrZcL3168LcU56ehL4MuVU31MBRaHbcm2bEKhtw3VfMxPxjRZraFGQM7jEp",
  "key24": "5yevC7eS3PPqmdwLZHrdpVfLH6YysRwvCKqDmTTLEHRNobcST8ZSVvnesmJUYYTTnhgPuBVWj9B9gyc7yU9EjpSj",
  "key25": "2MdJYgRaiieEvsqJJyZKcTjZRKFLU1zohaerMkvV3QHWPDHHr2bjD56G9nx4xYKwkT1ErJ6kkFfhHLYoLBcD51jZ",
  "key26": "3eoWQsLFyh4L7cU8wdNDd3e3YiPK5UuXbCoqDQ47HvCiJdYj3j3fc7WH1BMW3qwcmjHGEqkfxyAxt6whLqWT3piY",
  "key27": "5HVHiQMe685PpoSsjwGoLdCz6V9bSakTHqdD2Rp3QGpfsrJihrgtdQwKZgJHKqtg39dhAAZMfzoi9QnaRZq2aVuv",
  "key28": "3DWiVLftwkTfVutqaXZAq3W2UkiuPbugmHHxuBWbxYuWX6AWu9ZgwYrxtzJ72Sb7LZWK2DFi4T7TEgnrAE3gM4j1",
  "key29": "4g8i52eujVS49vXD7XWvwZ9A2PsacJ2ooFg3JhgExqSXCWkGSgCTVh3C4fkqDQgDeQhPseRaQw6C3bbD2zC8Mu6M"
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
