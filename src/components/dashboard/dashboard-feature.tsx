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
    "46AS9vhC4S5RgzdHNhUvPUpNvRrPrc7Ne1sCuoNGGp4KTSt6pVL6gNxcowdKL5Nnh1i1M6u7if2EPpj5TAzjDZD4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SA3qZxRajsu25CdJhamv7jq4NRG6cerax8xRXMAoeyVFHPjgqz4BLJMEiw2xXaog8KXSk4h7wbeJ2TBVBiM3RVA",
  "key1": "P7hbyacGPHmzwQPUANa4H1VjrQ2iXCcWmzvviCnZk4MYu9w5q35nDdUq6raawtWGKYDUPN6T8nqozj694tcmX1J",
  "key2": "2JskmFPgPZ8aG2mpojLNPG9FLButUybNestyXUPGkNxFFQkSoD25x7wmU3evDX7JvfkFTk3r9KhBFTPuFnAUjokV",
  "key3": "2DhGpaGWvB7pkUvan9KNo6UiefoaMga7BSQhkYWHRPUAsjHyyjwyvsR3onn8ZhhLhHZNCsEhmuS72M1PBjms89Gn",
  "key4": "425JBpPPZgAN89Gsz73de2pXiqsYpWntLJkZFsnp5nU6gZexUk6mRnK77yK7fvJdMbiBbQythHhnjvj5Ct4nsjdG",
  "key5": "DLrDqp6W87sEhQQoqvCWxjzF12c61bELwLjxWUZDBGyUzZLF2cLPiMayTpXsxo8kf348m5pBuQq1vVC9W19zgXQ",
  "key6": "JdD7VptdGLfWyBvHANQFEbsy1Z1MDTFi3ncfscSmQXhi7WuUynWpyNqfXrDPkxhrBu7BHBoJMUiMjuHk9EKepVn",
  "key7": "xy8WcsEwc9GBN8DYsEK81RoeKxa9Wkc58Bs6CwsrnodNtqHjVnhJpqHE9YFwG9NoQt1jN7UcDk17o34JKdTXXx7",
  "key8": "37Gc7rmqsKWkPHtsN3hbzCtPe411WG1NQDxWdmPciD7HBM1h8YnaGyWffrfZut6GQTuDZ6p1tdxLjco2hqviL9kR",
  "key9": "5KRgJfF51agLBeRXLQpXXinEse2itkbC11fJx2qvQRGHJcf1Cnoa9LL5XM9GCgegZzaZULqH5dc9dUsqMyWnQJbF",
  "key10": "4oBDNPms3EBATGk5zCftz6qrmy5JgpG14y6umErKoWvhYyqf15jNGXkK1RDWgqGsKHvCt4xdqWSEHfEDscytaDiW",
  "key11": "eJ9MbGVk7fFi7uUqLxRk5se16Qd85LuZ6XuquCiactCubTxhUGuh7qdnVJZKuTT4ubKcN3mVCU1hRjHp6tVT7Zo",
  "key12": "q7vPtFRvpRrVYnFVKwtMjLehepqbMYATt2YfS45jAHhC62TF69hf1myt7ppSujUFRaDn62nDqsbordqPaFi8mZi",
  "key13": "guBEBLHKWJBDsFk78TsrwKuupjT4x8QWMouPuyd1PzXMbCfwz1VNPhRRXzCFthUqpFHMAinDJNEXJ8DUht43ZSB",
  "key14": "yJyEbdS3mrziY7o6jU3uwNL9XobkDrZiW3gCQ3tHX4EKHyxj8YxtzjVFrGH5EG27dDeLBVxrudvKEnwpBNBdV2w",
  "key15": "56xQgo9tZBCNLRTSwLThvmNtZ1yYLq72qmQADMbcrLgCREHxXop6yW9X4xgS6XgeSrTMHKd8BXpUyjzuk7upQEku",
  "key16": "4nMmRgcqsf3Xe4FoccAXBqEqw3R6Ka5Araod32DqF6nD5sz4JQRnSRhCNQD6syNZ1CwsKVemTWFz2uMZFqUT5QtL",
  "key17": "32eJZzvxbxYkoLu3nbBbgnrA1XTQwDEQf1QAd7MdcHiEu3uwS2Zp6YnTNdZXYJCG8wcV8y4FSiueXL66ZGux8pHG",
  "key18": "2jpQbB4BctARtUwGdgCb15s4dxXG2P1vsFR76FvSwKYwuC1L9myxoAmDi7wxoA34dMDPh5iXjd2xsXqGwCF1oKnb",
  "key19": "4m6DbLTFH9jJxKKhkUTfwkqJhQXj6Krxt1NU6ahUDSuwb82xJsaedDVfDFqEV6fnrtT2iZmtVCcTwmhLDHXJuwVz",
  "key20": "BJpXkBSk8WWDjyLiyGE41cBTkbb2CKsQfYq1yyDNQsjiM6JjHcexonjy3wJbir575iDVTqhA6eMuXqhQ7JhRbsG",
  "key21": "4CHMuhYhCRigd2HPBSvfcy9A5q3njtgFX98S8MYrsCmJ38ucUfFuxm6f8RcsS7Bk19eyojFtMWqMmSpkSrk1YKkA",
  "key22": "x5pMEKCfQLG2XFFHonNcY9o1dGuX5TznhXnnHTRtryac7y5zsZkZXvetXiW8Fp15U8CqSAjEnQx1iTYSKa2SHKn",
  "key23": "354PLfhbuesfQa3S4qBXp1fvHmYe7DSsxUm46ncTwFwTYyejBYJA1rECFfAR4D1SuqXEbAWiAETuoFCeYvagEYtd",
  "key24": "65Sxmy7soTMcFNCVsDJzVHJdhziEuMRWeNXnB7nU4nX5Gj665c3YNSTqNWt25M4C2UzywLv8PidEWC7WQSHqdKEg",
  "key25": "5zWWyyPesj2h3bE5LZdSFqi23f1yLTvaT7JkdbZWjt4akAQYpRUVN8xmZAxGn5i8h97wGPMsdyLdX69YGem6Nx5e",
  "key26": "gLCV8JRvBSvLktXh4CS1ZS4AiW8HJ22DWGtFMkWVnC3ie6CYPjnKfpp3wgTWfekYWLcHTHSs4UEupbovbijwWKG",
  "key27": "4fR2Z6U5Lrhu3RMneT2PnKeHZceDMqZn9a26Wis1TGEQ92VfUJ2jp27b8xfS1v5WuJKNvVzhBdvDtMzJ51LgrZwx",
  "key28": "4LFEw7aw7vVAPpPMgCvE3kHCbSyXbz3GtTb9tXFM5QfVuyitNuQyV9kxWxEzAebRpFCsmc1mbqzaAb7z2Tts3MiJ",
  "key29": "23sfCgkG3TxnYVSWCiVDMpiuJsChRqnQ3XyNwSh1Lb5HuXj6SmMwoEqznrNaQMXwoNfLfJzL6tkWdfhgyiTrXh5m",
  "key30": "26KsTrQBMcaFgRV3tEYcgfU44hD8vPyiQJyuJb7UUEm3ugmYpda7pTyZcgv2rXLYD2wgjnSYycSQUcuebqQQeFwm",
  "key31": "59re46JD1Eeu5TSurbZvLb8Gpm3WE3jCiCsJ4XXJF4efU6yLsDpLsfEeBEvpVxbrB8MmpHcWjDQKjNwyowVKLT5S",
  "key32": "2A6EXrWPGSk8vn5PQ9bcMZX3tGRfbYmDK4ifHMRJkwBwd7xzGXQjrmgiBDPpGn9VRVHosTab9spYAozjNvPENavj",
  "key33": "4asTKn17gVESgDoiMmfAPYgenTJhG4JMtcyYYgw4pdecz6AhzKwus2aLhAy1EHzFPpw9nQWZYQBpemDhRpHdBUoo",
  "key34": "dDMFBARhJeCfWaD3asHpVtqmkE9sGYZycNU87zFf8indZxL1UePwMpgqdUiEAbKp8w5QeZ4gPzhwrxQ695dGtmJ",
  "key35": "4oHn3gQA9T8vjCSB97m6rEoxZ7xYcsyn5EqZSNfzDyqrz9GzpFj9Ki9ezUirCJPfqPNV2PsYyU5j7S8sbQGsLbdu",
  "key36": "2un3AjEQ171N7RpaXTyT2m3LWbPWbXC7jLzNzgKE6arkDkMx3T3LbCvGghjx7UsPVhjTtdQpxcarekVcVesa1s8D",
  "key37": "5b2XfjEvNU6xghM2jRkQWmBbzvnoH58QGVrySMcxHhK7E5yJMdX5N4LwVUuStrC7UrcK9Wp17rtLreayLR9yCZXu",
  "key38": "UKxk5SXt6gPnwbNxNCYVVa2A1UQb1ChL9nVN922JetX36WSDnmxnqZ8gRVba2xX6Pfkg37Q6WCcyFMKBTXAXrbV",
  "key39": "5ctbYbAafZwFzVxr6UoDRxGEWJFumHwiMPh2oqi6asbSAuRDJNWo7uVM8hkKhBTnCiUQwkk3sUP9jWJ1aVkQGEqR",
  "key40": "3jZnfVN3tXoQW8puUUN8GK955WRm4YrHJtuabfDfuJGmPG2vhhrUEWZu1hPZEH2jxV1YfEK284XBzddB98MTs6cP",
  "key41": "2mbzx9A9hvhBC49PWS9MPcHhzSXUoVS3aWTfosigLXmeG24tpBK44h2VWrBxV41mdGVi2xd26251Hy5WBw2nT6H1",
  "key42": "qHKWFTCg5NqmFvkfJX4gBMGuXazEnbJR4tUVcF1FjxN2bVLnpP92QYRGspa7EYrzUYRyPLDRCwzo3xBcaeEknXv",
  "key43": "2oBycWQztGc1irkWnKyqPMmzDGPjRp1tAPXi515ZA1UnFbej67RxZVkfgT5jswpaMVMCySeouWSrRFMWL3deyL7D",
  "key44": "2nPuNfiKSa1BMKbRHWfw16gBnQkvo2MJiwjeCXwzC2kGjHZ4svVucLwSMQTmZsC5RVF8Gdqt5CnpuRqQ79SmEDYK",
  "key45": "55hyhX5f6nFxiEfkFS4dMziskRLU6fB1DmvCrS7t47EXBShVTsPyZVstLUkFpUg2mDpUKgk7naHQkYUyZ5HFVXb1",
  "key46": "31hEeYy1sqXDNaaLttydYbNAb3AGwh7zgd88cQ4QELZFQ3vr9J5nPQKLmqZdcspghA5cMj76mRcyMEp9REKNQuwn",
  "key47": "4yq8WARzem2Tq38fb2QNcDEL1NsJLHH7ymiXHoXzxZWwvBMfyNrhFVRa5J5Vz9zNG4cBLX47LaTDDoqjV8HXfaEU",
  "key48": "rxvf51EiTKxjzCUg7G12z3X91beKJysdwzv26pMVzJR6UhxuEXyN9y8rGV1HuYTeVp6BtxpEaC8ivcYRJQfWqac",
  "key49": "2nhbexLoCsavNcfRepQaJbH1U4Y4QwQrYJRDXCX7K1tBmUusEoWmAphxonQoH3EU9hsS9ySFfVxiNDVRGRux8Xo8"
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
