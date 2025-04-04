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
    "ocgf5b6PAAnDZEiP7mDEJ3nAFzGW12VZJFDdfD65nhhkjATcErSDZPkCFn22cY1EM5gBGK46mCHhG76sAZCWvMY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35qc8YLcn1fvt6KAv4T5zcUwKYCgfefkSSVnhLCB3HKCFmk7JTjPXjJcQP1dmDaRNKx7PdP9SGZrm5gm8Ag3GXB3",
  "key1": "5pMjvWFuy5mAVcZtp2zRHo1FbrsrzsU4g4psUBPx4rGDhFMbKemFPLuSvCbcrJoo9Xu7DgJoE4aYLjSNNKFnmH2X",
  "key2": "4LLuWSBRmnD7r2pKvZnHQzm4LJL5CE9G4QPjXBcrfPALyq1dWCFsovXq9BGe53Vqajr6fB78LpGddYtP7D8Z1xYq",
  "key3": "SJg3RkUZPrkP6mEPkYGHCtqJvNRVHDg6WZ5UGNfiA23CgwBYL9SuiPczTcCVRXLsAYQajvAASfYP5nYKJbv36jG",
  "key4": "2wcYZdqUD6BHtfiihWhHEpD5VUBjDYeeD2z8FScCUdYi1m8as5qCnkLeMgw3HMuUcEt4h4HpP9bb5jWQhDa3wgt9",
  "key5": "67MpEpYh9YqaCWuha4Ecmg76atcYqn2h3S3Wy4Ano16yhdXbZoAQVGZMBT8FuxGDuXb8VRfVyNST4s699WZLYQHV",
  "key6": "3w4VsTtbivYXr9KmciuzrBeBYzAGGLApQXT5KVGvCfEqKCPaeFLUaUyAx81oPkCrCnQkVm9sSHUSNvwrF6XmHwGL",
  "key7": "4YnF9MQtXeDvUahfwK7bN6Qnj2sg3sRwmB9BWmyeMySRpEKLXPoHKJks3sL9kqfB9rAxVEohD7c4orqAg8oUhb3c",
  "key8": "4nnkSvy5kVPGsCEyiY3ocYEBrEDJgTKgtzwcLg9hsKeW7Dtnx5n81P2X2sMPkAomjAN6TJzctxjqjAjeNAWXrhgY",
  "key9": "4Ce5yG3qpwTNwsoUPccFRc3VryGpwaLfZNGwAwXijn7RhboddBHqVEgbuk4Ui9xfoU7M1puFkDwJ2WTdBhDKneWD",
  "key10": "66h5eES7X8yE1GnDBYxWYzYLDeW9avW2LW48GopkWoPtmu5m4X99SdjRY8uPuNkguJ6mftwxEnUtQ1PAywgTSbQQ",
  "key11": "4yuXyYaqCYdXmmAYMm9ZwmdM8sKyWb1n3f1uqHDGTPrERSW3ypQgEGr6BDBooizXjk4Wi27W9atE71dtaxDBpiWA",
  "key12": "5b3NFQz3ozHfqx9YrEFBu6gpzWCcofVtPN5dRN9F77uGXuUX4Fu4wf8iUorrJNYmhUmCyyhoE7SNYDNuvwpaaRNU",
  "key13": "52pfUB1ywY23iQf98CXJHgJowudz2KxGdaxJryggZgv9KxmJeesXygApXBcn43DWsYvTAjCsZJmAGRzBsz5XKpay",
  "key14": "5JaizjwvQPd8rLy2tsrjfBd8HozeDifeK3Qv4pgRxL5odNyR9bmxoieDPWBkVFGThvnC2C21LhqV53tVzgfv9V9v",
  "key15": "4MXVaqNTvLu6JUqGNoqjuBQzf4wDT2zKzHgBc3Rxi5YckkVWojrNX6Dv5U6pek45RPSRswaDHDTow7dP66Wy64G3",
  "key16": "2pHPUskUEyCmxPNUGJ8WhmxYohGr8SHDPt6hHJHdPGhRupjxnrNDm4DqFzsrUS2QJyt2tJbiRFkdKh7MviGzVxji",
  "key17": "4Geu5d7xmxf8Cuor1aK4xPKGeQukCpJtH3xxWE6ruDbQ2HoWDYECKKKgbtbZz4gRApRUZbwKbbJz9puy1i7P9oin",
  "key18": "2ggr2rCMrXtq2TaBgYwVF5xWbqr1MGBH54VgH3E8T14BxCunBvjUNjatHf5baQK3n1wEPGaCkWQLLqxc66SwsAyq",
  "key19": "4coNtoP9vGKWLSGQa3t2Tr4frRuUggcyCWkJRdtvc5dNTmmRFZ5XvW6PXioFJ8rfXiEFwWN7WLHiCvsgsgtyt2Rp",
  "key20": "4Chq7PGUSwuSvak73A7NgR6NwXZyQ1aSArZDmiRKQZELgnjKcTAh3awox3CY7fuRxKA6LGq5MApnKkXGozKDFmDM",
  "key21": "5HkM3GDeHa9jCuX8TmtAKioeaRJ36cjmqva5S1aLqUnU4Jooo4Qeh1uKXUFX31Wffra3CXUjMdtXUyQRJV33paYx",
  "key22": "24VoGKUQpyRbp7Drq2oBa33iMYcZLuWE3qy7S5at5pbayAFMZoKT7gRWRPbAVpPb3ZtMJByGXWQnZjYCQY1YErHq",
  "key23": "2hheWk1Czfk6sUp6hiCnaBCapGbBMKqgXmDFdvycKsUgnbq7f3jqhd5CZSsjjQNxakw6SMUha9sraoU5cyBuLHhi",
  "key24": "KvAwEcJmqutosBC8S7rqmbxxj5bmKNRyBdBHrMmeork1MJ6AQpoRuA5FWMg9eTx7G75poTMmuZgdCcyxjAdqUnc",
  "key25": "3Wt38n3Fk3jjbYMrkqhbHTPBReHLk1JNs4dha5UenzrM6nzeMqoTgy8xEDBnwE5SYakigJ2AM1RJ8EfcdKKcvqbQ",
  "key26": "MTU4V4vd1Cz5RvJRAAD4qTcHD86qkM3r5raH3SVowZPxKTkABf7VchNiZQtx6hA66dcosvGFS8PDgYRSGK88Anj",
  "key27": "57jin2Kz8ggcR5f85h9nb3Uhh1SRD4ZK6LNeaadKzDbbgivu175x8nnVMjyd8qWtMFV1tdhgah1pV5MBT5UFtXzi",
  "key28": "5FvhKLBjFiGYdVxc1QcM2ouPZ7qwjN1v4SQv918S48Y7L9hFkt7PQzCZ1couvHFEL6pvMY9h3a3Ki33KaHb8sq5P",
  "key29": "3Qhoe4hX2r7tUeWFTzXgbv6esQVtyu3gQCPhcqqaETbodDBxHPiP7FhSpkptK8JAKnt6BCMWULXJ5pZMN6roZm9y"
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
