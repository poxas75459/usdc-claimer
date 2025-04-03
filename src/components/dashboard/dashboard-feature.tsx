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
    "2NgwU7Snp7VPttxUMHMqkTc8oNnnXkQdz9xi6CfTgcCRMp7dWKp5oAJhFr4hPuMMVqJVjhRVawcGGkyRYJHycSW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kLRmiAxYhxSg5hHdXLfPswVWCxFj3xYma57sisuAmbzgAeAHVq7wx5ALqcQNfmDk6oZeXuLtJpWbCS7WWYpBA18",
  "key1": "37tcSpqUjW3LW3mCnX2ErHU7awzp6eoSe6QknUjxSnfyKpBucdLo31EjpL91wqrgLrRvMWQPhHVxRuzQG2rLBTNe",
  "key2": "3EDRWuHpHNjLDRWxpaPyM6CJSYDRRsWg5PvjaN3dgW2arvyCreuRUEi9XJYyLbXhr2Ray35UuU8e6iawd4uJWiE",
  "key3": "519SGcEBdrj1Y2amo6MjEwFD46h6h8ytcxSFmg6Tkq6CgCkyxg2EjvMMhV7eUGvaxjZBTbgvV2UMN3aZr1CKfiWC",
  "key4": "4y6q7KxZwWFbVs6eNtxBBuiq87dHdPSa6mK46Jbko9dCayKaojgbKzDvTia5JintqJUJkHPMfLz4df8NQcayCxu",
  "key5": "3xVacmC6qZB78Znv9KTwhdVvjdXPoLwE26Ncs4PJxv1ZRfTUW2464w59i97YARKjsGtEPxxLEnJaTMPCqq5BQBWb",
  "key6": "5KcHiScLvisKkdiRcWy1BkgbGJnWkNnuLLBjGzpWEkv7NpQkisrsCkF366hjxKHw1uRoA7TG5PhcSrWUyg3vsPBu",
  "key7": "4MAs66dvyLomNCFY3XG7ikLvTLEKdcL8mAh8aL9Ui7UXxPLD53Vja6TFMDVPV2hmn179Zmg2hymVmT6gpvh1tChk",
  "key8": "3DMrSuCjgahQAZyuNJF7YTrmzb5VE6UjFiWwgsRa96r3BYT5k59Jzr3RrKxBB2wjxNyEGsd3NTUSuMpHrqCG3BQx",
  "key9": "3Dxqfazwbd5Kv6zEDDG2uFVTgGuXUxTCPMT3UMXsaEJiD6diBQ496qhwhMxTGfM3MxwMpEpyc5dxfCSYaQa2zYrf",
  "key10": "28BqY9Fb1DrivKaJmrgjVhsqVWJh1umnxpik14i2YE2yhfyUYopvyV3DQoyyHJC2XPzj27gn4HY7GpGKqLnz3Hwm",
  "key11": "5EywRjV5qnUykAgPx2NianTDuNoXQFzsVdxSUqoTJFjMtzXH6QXL8vRmCoNS3w1eELTm2s5JwAeUADAwCs9xYqFH",
  "key12": "5PVVxaFR6GqKwevCm6kSzkW2HSB1sRnHjcvK4BvHYLbq84vCt7yCmNKw9ipdhNoTr3EjnFNFWcbN5HnpG4CX56aW",
  "key13": "5tucFq6asFEy9qVLS3fwXA94NMVC88GRBidYdDrH1kgpkgL6ssV1GMDxwSXHe7nuKL5m2tZw5HQXLzYjpVmFriYV",
  "key14": "26PTon7BXWL98XaLcLHwGMuzmb9La5rLNUK9hmHZpnJ9whHwL84LTF45RHEd9HBorhorXRpvGtYV8UDHK6zBSDYm",
  "key15": "22esGPLnXFZcaT3gVyeDmWhJzs5QdUXRqVCUJbw34wZuPu2LndSSyMvidwPK5cXEi2MUny4A7VY2b9imZGyVuXTw",
  "key16": "63MSorbbwD3pyoHBkFdVUut73UFczJUPmWjRbtSRdK6HQ3eG6C21SvyapsK1Ye3Dz5u7yqNMCjTQCrNXbziKs7pD",
  "key17": "2Uhthkzc49Q7foxEo4ALgSgBxzr95pU1sZHi1ZxwPrWhyMUgtQSkWfFgQu9BZurGE2z8pypR4wNjdpztMoYYA3uc",
  "key18": "4CiGb3a8CxttwLnMQPXy7gnarvK1V8mSYRo4XAnLuMnY4qA8vJ2uubBxDSyD7MJ2x1qgG3uv4ZiKVQ1oSX9pCB9k",
  "key19": "2o7HY6xm7TYDXJjvRy4nPUQgar9H9uvzBYW3cBc4nfhJwJQPFQSCUv1HUqQgEcic7uryHusyUdsSWPWMYgc8uRMA",
  "key20": "3zQSvs2bQqtZ6y4tNkAVrtPCHafixqHZtLXtYRRZwMmq2vrTcyFHxYys2Fx3K5H7ZaSiouQUigSt7Vp1Snnj1YYZ",
  "key21": "536mPjhnBm87HKZa3RXPaLC13eDk5EpL2P2Vt89DgQJDac3R69k1pGbanu785uyiXqWqXMWCebC8vZ1MtzQMzmpS",
  "key22": "dXvdosQK8s1DJsj7tWUiUwsKLnhykhK8iiQd8AjWGBv6atTDtR13Rmzmpj9T3fgG3ktrZ5Cm9fT71YRC2uG1LRV",
  "key23": "4H2XdX7ayzVUL5wdH9P3SWZy4s8B9Vhpk6ywBuFsPxocnZ6x5apCoKDs4Y5oJj4xLiEzViEvokhmZtfVE9CShPop",
  "key24": "4k4UMx8WwyLwq44SxU3Puk8mtbveEg3qtgr1HYMWBw8VqpiERr3g4ShX3h2gpPcumVnuFS3C8m9RvHjLMKsV3Rz1",
  "key25": "LuBaNezSjzrZsB7273ykbhmNmX5m589LfeoT2k5iawPSjsHKVZhhyjNWdGe4TzXwUhCXn4dgqQphE245S5cbY9S",
  "key26": "62NMERWLCLyTGMoPLnFAUkHHPoZG891xokEUuABnrzfwr8oMwQcGGyaiT2BkNu2BrRedwsYvtjH1MzZTKTVMdw4i",
  "key27": "21pP9Gj41JikrmSSVGMvTA5jU6E2ZdDk4FSGgY5spc3Qp2QF2VLqvmUxPpzU9C5XF1EDD43q6hP6vuCadUuvGM2r",
  "key28": "5zHrW23bX1Gbr9pa7dKiaBMMZEC1XipzghbMvhEY1pWuR1C4t2ZaLL6vBM43rxksub5JEuuAqaj3zWRpy1UDXY8Q",
  "key29": "311anXmzXH5Nnciy71At5ySWds8QoSNkgMP6dnPTBtfN7Tos6aBkM2RCnizfAY4zNZHcUdg3QBB75M4coF2PZfMU",
  "key30": "3W3Ts6dcFktoKnHEnaE8RTnQVNF6bkrqMU2DnqydMUfBB3bLqk3nopAwsSbyHUGouYCREFcQWAiFZ6XtRaZ1K8u8",
  "key31": "3r72Rpc7fGEapgJEDd4GNzoB3oBySUY2tshuCU9gugcESi2wJ2Qd4gykzRm2JWapSfsv8ZHtjfuHxoRcKPdGU4tP",
  "key32": "4V4dvxEDaxymjSsgreA8RLyPTN1HQNA8PQ7q7moFh5nCkciARTbgHGJVPiuqUiZ4f2NY84Mkob7QjQhesZGXcFYP",
  "key33": "CPSPbPxn5pxaBqMGVp8rNKx6HVfHir45QayruV8ZieJ8bavg2mDFo9hhgSJ5dbso1LeycVkqms9JTDD4G6nLYhd",
  "key34": "5FzZ8dmoYRochSaneFVfEMtgQ6n5LonaeJT912DMKtNv9zNST9RJnLPnsmPQ4XshuPV1QTDYi48z3rmRYRAWBgDu",
  "key35": "4VEXHkVUyntQ55Mc8HFF7zybzxeiAA1Ykvw8uyFdJ6kMdHtUSKBJYzCBQ1kNKvJpsPfn3QoNVEfyDvhZdgkJZHb3",
  "key36": "29aay1Mnsyf8HyFns4ZRwaasVSoi1P9PxVT9u1CXU9Ma3xfYvoamgZjgPZSQsSHtTobYrANBEbgQzgRVQtU5RFFi",
  "key37": "Eh9zj1NvqE2Up7HZRS4HbjAdH39qJfHeXXy9eJQxchtPgW7Kpzy27E5jqUw8vrorEy4mc3KC7jmQaN75epRChMK"
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
