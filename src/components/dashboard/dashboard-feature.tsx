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
    "5nyHnzsSRFqYmuovU8ffaF1AhkXxxyvFW1PeCWENjMg787fpBt7hhjNd9KnEPUELY2CaWB91U6WwGzS3YM2okLsM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oS2ZELP3TrGYmi5ozQixjnCMBKPm7ncuxzjP46G4Z8YMBGcL7YfCfrJDv2K97qfgD4MxtmX8m9McWdrFfuSHCzf",
  "key1": "5LnYFeA51L71HonbyHC1VtUfyQjjWXvbP8MejT6fLovCQiWqtuGewar7SGHV9oNJgFfSxTsx7uPvSnAmWBrVUnRi",
  "key2": "35KL2oKACpXsRZub5pSGZzJsDes4eT9HQkBccJQUySCs5hzKScW1ugeiYNNkZFzW8j81UzrJJUtZjGVaBjZETimt",
  "key3": "4Qa6S13NRkHQAgUR1JhEt7wPcDqSktChjUMivZGXrh9twVtmR3waxLFs75UHmXyaSaNnaKM4XDKcerdL2ASL9p4N",
  "key4": "5AKDeXaf9mbWuNXtKJqrYfxmv6VA9i6KyxKyT2Xh44bHb5EUDswN8oQbqZfq9BNMHs3aReARnrNiZJkSN7zLJHkt",
  "key5": "2NwLgaWwaVRgArNBrLNN9PQ9qmGN3RDKZSNNWJJoVMS66FwgNhb2dMBAm5nUXAoHkvUh6tf3igN63fh8MjTnwxbd",
  "key6": "9Y9joNuzvipyPp436jZSVtdyf2cfEiaFpVKfKKp7gg52JLATERqqPDtWSECzfV613hHsrr4STnBHdmfYr7K873Q",
  "key7": "5qau5CVPiGLxJ3q5JDfpENUW24a8bqcJdQ1kQZpCNhz1TCVSm7jq9RhxRV8gjjZZBipAKYiombyEaP32BpjvPc1e",
  "key8": "2hYtxMqStGD3jKaU6SYfpc1tec6qMPcXjiV35qvpYF4r35aLEQUMgijT8wCyaxDX7bEH8Ltx8iqtwKc4aEUwPSuT",
  "key9": "2HyiuJ6EgGRUaP6J9sheN8Nyvu3czyKt2tvZeRP3uXmkAhsfxyQCmSVNwsG3QCeKwn2xRrxiprafxq4Bv1iRXMor",
  "key10": "2kRV4ACvrRC7tnapZx2DLTguNVbKDLx6CBZpHgyerbc7Az7rKYFSR4BG2iu6gdksB5kCzSq4dDXHuj2fgxYt7esy",
  "key11": "TUYiCBew9eQ6cC9nGNXDqxsYa6f3Wb8w5Sb8zyVLcHHXYtr2Vq3ipK41YkY9shwwdWUF6u4VXNpCZJY53FjK7dA",
  "key12": "45vMEu9Wapyey7y6tRBf19eUrxyHSrxFt9zEceK9f6E2h36fuWvSXpqLHNxUeWUcZm8ZaGXQPKzvucPcxJ4V1p8x",
  "key13": "4biN34W5jBypEZqNoUMsNUZYgndBM315QnuPgw3Hq6W7xm4WJCffWWzXXzpBaMEyMDj5UMUCfacRvuw8RfFbZWb3",
  "key14": "2SyddwafJka2CZz9Gp5XDGFNcDHvQn9L3cy6MthVQSnVuRnrMSe8ea9FGC6jXNay8ktTZaN5mtfq7gPVjVZr5xw7",
  "key15": "5P94kaNPqyoVrGTRAktQ9xkCqZMy2QtWGYs8yDtpUN4u99peeqgVnE1ZRXVdtuNHUVHud7yz3ufJkviNz5aeTEwV",
  "key16": "2RWqwnReBNXSGNtVpvwusyKeSJFgR2bCbxMGaRBkeEFkP5LKLP34r58nrc4K5USjmsaWjKMJDdLCw6JuZRZUMJ6y",
  "key17": "24YiCuyig5FjqCB9JpWorpRhEppyTduwmqRrA1wgHq4LXtNn57kEQenkcbZieqRgTDyUp85sast6Pg6PiXHtNqKD",
  "key18": "3vpHRhxiHX28LBPHUfuLhKqRs1fBeeWThtF8RPypxzbNvMLWYTVLvmaXgG5dxZuFFHnTWztwiTp2yUZQPwg6V39t",
  "key19": "5bnF9FXLHBLohE3sFs885mDc4dVnYDhhfmcqg3se5nFASScGn5EU1grfUke2P46beMNqmPxrLUzMZKBEeTLD1REr",
  "key20": "63qGkf2UnPDcXfhhWWjZjfdnF6BL3JPTv3uP6mB9mx65Yj3ZeLhsee9xdeFMkCawMAbhQFQrccXgFgxjYqUogLf8",
  "key21": "5iw9NXzJXYUbTy7dTBAbQ1GuXzZ8nighAvZeuqesHa3gWpgaLu1F2aFpfz5kMDq2xu8ETruKLfBmmiXCs3SM24BS",
  "key22": "4kn7BNxFKrQ97YaPvb1suGq1nzJv5wCdKwcKLYBecYXwL5B3inhPE1CMtd8SDM8evkRQVh38boRtP7Lx2a6XT1cE",
  "key23": "5VqoQJGdpYmKzRozqFkEuHnZcjnY8Dp6974q5rSuXW2JnWcUBWAY4z5rTrv5n1eZU7nsR8dKLKgazFWNFhF3K2gv",
  "key24": "2Tx84bP9rSJPAtyDHHPKUaNT7hKMpNk5TExvWEPW64K4HAroqgzkQcYwKq2h3Y8djPinFbD2UCrZvQ627uyyFZab",
  "key25": "4TCfrADt2JB9oRYYDmRSFjCfN81KVRM628U541AKfioee9ZV72xNJYfdAPYcpWvRezKrGoSKEbfY7QbGtSuKUbsD",
  "key26": "2fwbFyfcULF7hG76AT6DQaWAJ1DdLtZu7TkbNwRfsHEbndCaHZwiatmMtVn8LPqMMFVnztmKqVLtvtnWShETKwap",
  "key27": "TVDmeG9gaWUKUP75VZ3Mb6VSPABm1pUbUxCcxPkUqGcfUUtksiJZiUBTXHd8X6gpsRkvgjGgQ9irJ6z8PuVGiaJ",
  "key28": "2J3bEyvw2rxXcabLwgsjMLxFAEc89neL7YYmFhjXAmDsiRvwdDzL5M1cSuSbjVAVHwBjaDV9ZAgrN7LivZ5Vtw42",
  "key29": "sETWjrBu59MdHHNZ5Gd2pjTkUhR9bMgc8dVxDYjyTu6ngAKKmrsx8ntU42jVWStmcwR6qhgtU6atzeAjzocVv65",
  "key30": "iXzgYLroa91Fo2yzANRLQ8bYZp1ErTzRBCFrjLW73cqCJ6PrpFSZWzJTTAYxr6tRR9FYDoevkef2NKWDdB9eoBL"
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
