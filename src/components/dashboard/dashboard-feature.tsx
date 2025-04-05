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
    "7VZArcptzYj9PR66YVrDJngukMCQJ1nGfwUeRV6MSMUTZwJn93fz3ghMqC8Ty7UuxsNsefXj2KAgZErbJ2oiZjd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6L4TrFfKscnzyX1d6d6kfkoUPZKnxjkYaFYPSvNh9BANaq2NXvGw591GBP9LJtPZtoQ3LfvAS4TbWRkrvi83qva",
  "key1": "4YS1rG1gt1cBws61i8LTnF8TWW167MCSfXxgV9Eb3LRUs1B4DvtDV89nywPA82HUd5K6yWa1KtJFGaJ5Qc83C2PX",
  "key2": "3mGLje1ZAT7dzgRpmp5hjdRDdmW1V3Jt9vCNzEjEZ2yTfens35ismk4fwf83R2Q2kDGbNw5TkEby8n249dc6L7a8",
  "key3": "2nhJrUrnJp3SKd3yCsJYFT4bVXNc8iwwBAgHLi6bL3aeLSUYyFXwveT2Yn7LN4JZL2ifWh1iJ2jmpv3aJYGQVXUr",
  "key4": "2BLTz3GDfRL1tSogShvHf5Bvutnjyp7k7WN7PeYqSjZkhe1u2VDVAQfeXvD9cfafh34KehSXdp6T1f1GwaXZt72w",
  "key5": "63Z1KQ6ozxu1Ed5AV5A5ybzJHEZsqRx4pg7MKb6Vs3HzeKB9SpVrJ2B8RYCbDvAQFWX8pqy3YQkF9B7JHuTFRHQF",
  "key6": "432hYNirDftPM13QWjDJ86aohWuHxF244RsZDciayCNCGxSKtFJumyyw4gdx2tMhC366GwcqT2Siukq342MeP6x",
  "key7": "5Pf3ccih216akJQHt6wnWT3PEbVgSHUsSJwYS6S4vtY71XZWuEHaZTS29UPZAmKnvqv3FY447vw9aXGZG3k12qFt",
  "key8": "WfAN5PTcLg8ndt7aqeNnsVzM3RQaU76yNk7XMu7Zn4rRo3Bz8CMco9sDjS5HDqr48HwdLFi5VARctvSzrjTubYR",
  "key9": "3xMDgFktommu39bJRjSGoDeG7WjLMxAi18ETzEH86KSc1CGdSxLE1tuPSr52XBqEbHXJ5Pj9sSmkktPJwgrHspAk",
  "key10": "4dLYzcBeUzDrv6WDjjkcyKaGnmAzVMNBHgaBfC8yWWdAjUcoE8Ks69wLN74pt2fWBCLQmZgETNTqK4P86R3fgKiG",
  "key11": "5c2KRXwqC6xAEgnGwump2v4XYwrFrLRdTBzykCahbgGQR3vUW2D8hbTAcQBdiA7b9HHHHUXvZB3qSyRHTmsaXREk",
  "key12": "2gx97sMVqt9p26uzEGU5fXrrQiKW4j5nJABhkwTYQx2GoV1p5vGzbzcje8y7idqxmG3vd3zFJKgnfpuyEp26pZMx",
  "key13": "fRApGmwk3TZHMjB9rzrzc2phwMdcowEdU6vvc2Ppvz9LK73zp8EQ4QhE8UzPGNq4d85AuzMH8FC3a4uEC3gLVMz",
  "key14": "5JTZxv7KCQdof8Rsjp8VzpeVfHWWurY24kBmkyLpYjGEHBbSUigxzVzk96nL9YfTV526cV9vsfa1VNWqegQETfN7",
  "key15": "H6n8jxoLfEhmS5EvdqZgxzVofoRezjtYGpWk2FdwdtquV8TGmwCA8pGRE2gqNHh1vCLh3oAxui7sZFSxzU2ix4V",
  "key16": "2R7zuxSkBQhmzbYw2xyomhcRYtFQmbk9e2dpE7kaE3owHywUHGpYiJ33dj7bB9KML5h31y9EPGNV4ZnwnKyzRrqc",
  "key17": "2mrWVeFUav9aDPGzvtqokLumDt5MxvW1BFqyFF5SkJZLd8MxNtaCvdUiZDbhbMK2Cf5DyX1A8ycfF8AbKmgfcios",
  "key18": "2RcJzf8KRKN6cBbJbxZ9hVrSmnRnScaWkUweSDyzzff69seNgHkM1pHXYFGzcmiE57DEao1QMQtHLZKdLsHFbbXC",
  "key19": "NbtFrgDx6QxaM1KnjhNieZ9WxPXTEq4uE4zxJhyEytJqtx9Q3vB6xHAuxXkMTkdG8QJYeKuwv6q9QovUUtqqMVM",
  "key20": "3y8cpdiJj5cNFFpsEwvGcjJRfqRQEqba3YdWTwTop8UMkS5bYWGNpshCW677R2RNAkBqJLAhUJLmXkT6qdkR5KTr",
  "key21": "5M7EhY9hvqEDUTrMT2nnX4vAoZ3qbDVgwQsSbh8WKZErF7bR5mKDhd5N16StAKF51knXKgCPd4v7EQizcinUhV4f",
  "key22": "2wkT3NURkPi8wZrJgmeS3643Q7uytUvPZHBcxALQQgtFBcSVzFq7NX4ckMtg86hDHwBbsyoCj2SRdVugEj3BQP4",
  "key23": "4pibeg3ZRUhfU7ax1tjYk87LL4kancH45e83Wq7BMzBJ3px5xAQSCuJgDAz2jSL1cX2VWDi7Ej79cLak5TCrdEWG",
  "key24": "5pbyrRpHYLs8EkuB1CkUDW1YwpMCb8DKxHn2niVHxVm6satMM7g2g1SeeZfcxSmcECSehjwagVeBgVPENyw9uw39",
  "key25": "4CdoR2d9xSQUMs8tDuSH5BvXD4iqgTVV5RRqPs8BzTx4UUQsMVBi6sYb5h9735n5nV5hz6mpB6PAcTJqY3oRkEVB",
  "key26": "61c3cq9YRXE6vX34oK8824yyF8cZtNG5y1h1uCMSHzbzHXDnpqjxxFtj1acARiR8WCXvmRkkx18162ohypyrNfhL",
  "key27": "35Hv1jVcQk3aThwYXkEMGKrK5b4syRTLnBdb4WRTTPy6832EdKWNNTQjkZttwkqgWofT48khhjdXnh1AzS5Gm9R3",
  "key28": "saKe7TVH9JEFoSa6epSdXnXLg8hNLMuQuh4bfoB8WYCcPU45k7N4STHAU98zUpAwRATGMaTVFfgf754zdiGDm7o",
  "key29": "CESkHCKhsQCwErG2FucaYfHfF7WbwmKZLvB25nTS5DooY6PmEeToMGXAJwqfkjdpsMvcKzCQ5dPhMCoA4eZwt5X",
  "key30": "3xnqshyjYujHZD3LhPLdAvfU7tyTuGXDgvWfCGdTMyiSxscnxsH9dh1U37Yn6mQ5xQ2H7bbqxC2H7q84QY4uV75H",
  "key31": "S89C3ZpwRcLbgmzbQiovjHDeT39mSXgHndWwjnGoWrNRJFRnS11DJfuZJ46GMHy6kA5QUheay4iqmGXCBjrYqkZ",
  "key32": "W2wcf42tMbJiUy27g83kRzfkqwYyVNQeNEUiF2QDbfQQzkvD7tWptZmzzPUSPFVnrwsacZ5yQvrkpDaSaqP3W4b",
  "key33": "24whaqRmh17qiT8TAgGqTU3JU1qTN9iPsvut28aSgGoYoYimZPRBW267yDuNW2si4WQs8w7GcAZN8vSif8xA1bPn",
  "key34": "4Bn6EJo1KdZwvfD4g8WwVwv4c1GsrZtkPLH7yP6HBn8Rdu27UuvhrDiZM5Yd5F2ywHWatCudmsPr5Vtu6xV4LQH8",
  "key35": "4pJjaqk7XbeJ53AyeaZNDXZ2hHb4WPsmzvMJrcVLGVM4YBWTKwhweWsNGE6MqmvNtzL1rLiZ5D2MXzX5T8PAuF15",
  "key36": "58nK65ijGzr6p1kCmYsMit3KoD5d3jmZevpX3sq19rWKKjXQt9sMiCKMMEnmQDFzFzVKffnjsriPTXq1jZokvtco"
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
