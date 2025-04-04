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
    "4FLKAaVJHTY2SVDm8iXJgFJn38mkuNK4q2Ws9tX3JSRUFjuxoBKx85tSSyyxJJ6PCgNfMqH2T68fLhEivixfTxjm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tosMHkFLLzeG1LVXkGgJeignbJ4YnsrdjEUmS4RPqL39jPz6eDLpkqmhpKydcXmwZuKqPhnwP1f4k62h7YEmk2t",
  "key1": "2j9v6MTn31HxvmsB1atwkBaFEoTYXavrFx5X3JwNuJhyDAL5WPujYgs6ugpPgFg8pxULNsBQLeh17nEh8ung4Nvg",
  "key2": "4XHgRm6HmmQ6UMMJY39o1PwXCvYbPeqQZuuDzB4qZ8kQicSKgm4EG3KXYBL8DdCiz126kkWfcXyHdnTPeNuRCAZ1",
  "key3": "5PYAuJXVxncoYeLkQpFxkbMb49Bw7wiNp2XUXFbWmkXW3ZbfLrtFVDeMiAs6s4KRf8KjVMSDtDEdyK7TUQ4zp7CR",
  "key4": "2Lih3T5esNz3zQaLxSdCoWQvSWkDGwKjVaQyso9wKJsSo4K1e1FuVtuguTD59vXiTWvbDVYC2L7uQVXc2H9565Jn",
  "key5": "63rXVQqBNukg5CyHV2TgjMp4nCMrCTz28MARdS1GSHmyvkZ6kpwJqN32UTJunFUCb35KQAdzkTL97wHQFmMhiYA3",
  "key6": "V9EeXvndCWRBVHsJPimkZCa2H92mpkNjZcLckNK7uXAcBm7TJbE65jJHKRVKH3zVUbdqEG6qHdupjNuu2YZacL5",
  "key7": "2VQMoNMNNTeUs6TZVNgBnUVaoc9F2jovbh5csCPPzzxyXjzc4nh9VQ8PbYJEMZpc1wfaGkd4yY9jsWM5DTGZDPVk",
  "key8": "R6o6ibvmwLLrkkrtPtqGZGqJnrt2WUoXRFcqqBfctZonTmyCzFhDirzy5kE1Cm2LdRgEhy6b3jXsWtQmvaFiei4",
  "key9": "57uuZ12EQ97gDq7tG8d53QNrm3uiGQmqAfojiGUM8KeG1HKE3Dqp9FpjXrtVZEL665tTTqT849tS5onpeBPzzPZu",
  "key10": "4AW6H9bA82t5SuGbQ5VXftUB2DowRb5H2MApGvRk8bH13SFGLak1eXtnu2fNaqr9uGM1Dvr6FvHxn8k6s2EMwX3Z",
  "key11": "2hMYdG77s35gAJw6bggvBQEKPKE8vJ5sqUWLToEtpknxrUHFU1NiASvEhrcGf9j7uxWV71KHQ4DYA8wA7kDCn36V",
  "key12": "4uZBjNET46TC9AmFvBeJ4ryqgnupnrP87yjVn2u6zMZrDnfhspjwFp9tBrXAQUU3CM8b9u1NvRQSuxbeWDTrmYvk",
  "key13": "sdoe6szmBfLs6ynMtdNKFBY65TZqNPXsKiuFanomF8nmCqscCyNBQkKb3ezkBA7mbwAg1zqFCZoea2HQQVHs4d1",
  "key14": "5TnBESo1TjM7op9bMpjxeuKkiAaJHAV5pa5y7naoAZWDSNABMRSv25bxd8xvMPi3c5bE5N3kwST2hQJgwsFgRoMd",
  "key15": "EBzjjvEhDzpkNMXwgvknW865UiEP5DevZmJBGWRAKvYHdtk3mZFTCrVPhUtfTUQQrQj2TwSb5va1uGHmTHkWfFd",
  "key16": "dpNnuhcG4nXdZijrCSAwpQvobTbGJjkLf44Dfkp3WnfSWvGru8cN8dXUiJWE3iRGKuKjgmekFQeubJT627rFpYd",
  "key17": "5QLZRbMW2j2828seKzwSRHuFseL7LaLztCQfLgboSnVJpd9RDAfPn3BrG3D48g4FBmw9FnXYFReL62RJ1273aGGW",
  "key18": "T5oe9XAA6mZBmQTJ7ezvYZcks2Y2KVqTnHCwDkFhkdCqRLtAddXHhdqDNMjdFULr5y5gZD7i6Qm8mbUxR2TQGTg",
  "key19": "55PnKZDvgBVb6oTNuyH9t94BToTPsY2q5fJTBkgncK3UG8h927G85MeZwkY1DYs26vtrmnTeSM2QKKLk6hEjfX5h",
  "key20": "5VqjVFAh11TxBjGnAzoxHhApE6Mq7R31HPDq4wTsaN6DBpxMDKVdkC7waYMUa63kfZboAWmSw6Ynnxdvq5jYqVsB",
  "key21": "5pUaDgwPxwFt4SJPApvWXR2QNX1Sm89kzcgLd42gVnyyY7XSGVkUDp1aunRRofR4qS73SXEwxxXKyosE4RPuQMEH",
  "key22": "28J2KJ3jzVnoeYDz31Lx6g865id5vjQmosUyTKN91c1QhXhZbxVm8Yw7uJV2xqPjiYZgr4iHtdRMHLMNzmtn3cQu",
  "key23": "5PcDJjGaBtYQn6PeE7a5hWA1UD4TZhsjL1q7rrYPrig1aJjNJQygN3nZ7sBVgNzoQ6uztrPfob5upfmWFf1hWTe1",
  "key24": "3dtuJGaMx2FYpR67M9jqVqcT6cmGmVC9KnLhce4iiXeghDgGNiYQYSgZAgtPybPHNzcDYBwQ5ZNQeza2Mbnewv6T",
  "key25": "5Ex1WzcmjyFgLRsxkJnSi98jfCeU4aP8CnHdLnEQ8c3iqGgfRuHc6fVv9TZsoox6CM6us6pcUxN99nLkR5Kppnnw",
  "key26": "5hN2d6EsedsBmThYWL2XwcNJa7uCRxxGJ9SLBJw1BHmYqfaTR5SnBy8eFXEKAoav94vWTeDwu7cFzvFF918KYUAi",
  "key27": "3XuTQ4nCDrb5rE5hUTszsrxmkcbe3r6NjELtfLVt3wC7xcKiU62yH87tYvPB6gFvJ6efvXKsN2PjABtxnWbRjsuK",
  "key28": "4vcxrtiEfsRVQfueRMY1D9NaGqzjDTHXrkKsc3ZdNcuGgwHXZm5CiXuGc1KZtBaBXof6CTKEveuFKJwHB5fjVnoK",
  "key29": "UtfMhcrx7e9k2RwPYMz9GKRJ6daeXa75PuMmR3wtZWEAfQvExooqzVMiGLE6CKPxY8Er9Ut2nbfPEyAT1XToknC",
  "key30": "4pCQfu6ongDVbujVWYUHv4a6WQjpQBqpWDHhzxibyyMrkFrWPbjr7hfCzySyUHwhidg5Tch7QqwPS5MxMVs4Fbch",
  "key31": "7dNgm3EKgD78tnonymLjhBG12gaaBnJV2v4RavJeJN1ZtuKL8H5gi5VDabpiS1VEzcVfNoGNF76xwHFjuAhDvyh",
  "key32": "8ekM9eUZzWQ8CB4eTGWDTfGdWcjf1DKH89qQHu7b6HY7cVHdyiHsnPin51YDW1seWP9BpotGsJWbFWiygEVUnA3"
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
