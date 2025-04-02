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
    "44WmCsWkQ6sgzg3Ve7NFvvT9EaHeMY3xiuJk2RQEPWhhcBHZSw8exyUDB2GuuD476G7tdiZVCYZFYJTUGtv8CuQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6Xpnsfzb1oRU7DCgyemqHMbQAi9k452pxnAjBfDuHbJ3oRR1YdjTKiCgCskeCnZ9Sp1WGsDMai12Sfu33rVxvAK",
  "key1": "4RTWDkdkvMD2nCazoJ1XqRmXw7gPJTf4SvPmy1PCyYfMjaiEFHXKkHhYZgf3LJCX337Vyvj8GmPasBXyc7tAhnQX",
  "key2": "1RNNE2k9U45Kgw8gcwP95xZA1AMiNbXyu1i4a8z38mW45wfJVHvAcPvBwBCcccK498K2WSn7k1dxkZeu4xXuARq",
  "key3": "WLizgfbgmSB8k3LJeB3d9cFd2YaNL388WLpP3QVEADn4ccUnh1Qy7VPfRs2K2R9aT5xsy9cFLFawoLZzwrmxQWo",
  "key4": "2HLpmuLNYTPeLN5Ce4wfLsocEGFxmGYP5Nt6HzVYpzD9Fv2Wa1YYggu3UWRu54qkEHVr5mNRwxCHVg6vCAGNLxpb",
  "key5": "224w7zLnWKGNdusTp4xRcuLHXoKAjL2s4Ke4qx9gpt29hQQtFsjN23F6YA3FxVTZeXh3KWDfzQ7QZHDbqA1omCDA",
  "key6": "2LQuuV8rpLKFGYnrpjyKv7RWaBSugiLadBow6gZjosGEWfEbmcg5UjXkzRzCLgU8dSppah6F2YPpRbLFg7ZMnrn1",
  "key7": "3jBsPaHMGhRVbtsyAh4z2yJtxxKZnkh84QT47GvbaGVLijriyftQQ4akZ3CR94KTjZFjhM6L8YumYtcUCbxPnUM2",
  "key8": "47kuQbeUCu5jRHbHZrZKuDVEuFegnxxLXnfFmUaRk9BxscRhpNbkeNK7NXbfr4nTYt9jGS9KQA3QiAijq4wSXeAZ",
  "key9": "2dALHk1NH4fwJeARxGC59YRYz737pLCPrpDTWPFJbPgtu8LEcFNJekrFezetw2yiQEZMGz6qEuNSMoYFB5b2ozq3",
  "key10": "4fQbhWX2VpwncvZ1ADfUM4kCbuMyEhoznYmsvoUsp8eMbkAnJZTpiiFcg7UvKG54cbEeV3c3q8Dio1nRkvNhJTr9",
  "key11": "3oBwxuQt2de9t4Zq81dR4YEuZLqREaKv6mm8wnbtouV9bW7LF3sq1AJeVwMm81LsCYxGCTkBxN5wixSBrDy8BGZE",
  "key12": "61qpXi5t2prfL8wJU4eTxCmT2pxzMjVuynkfrEyr4GxQbqKmFJddUe8TfuYtngpRmK2HeDM8ozPghKb9Ykj25vnV",
  "key13": "dCPc4FQw3p8fmppznTe8Lp9EX24UzKsovA7TAztdoExrbnxU7BwspnAAZzS9V4YgTkS1C2SRzCBCRbLs6QvKJG4",
  "key14": "4c1AsXwuVsKzXASksDzGh3bPJvMBcHNQpXQ6EMR9jrCHrx5tcwZ8d7FkyRFVas9Pu43FE3FGqnNyNorFNpYvR2jn",
  "key15": "Dz1KQkYEa9WSHFpxzp91k5PiMbz1PEeQs6kr2iEgTwarusdLeiu1LjTXqYmLhefVYsYjr5nNag83xv8jSQSqodj",
  "key16": "228e7C6gdUV9aRbjaaesw6QAVHbvUq3E5HqoFV3V7EZQK4BKLWerYcHo5vArKYVJZzZuAJDmTvswfVRNKnJ4MhQU",
  "key17": "3HbFBS9JQwhT7PPq5ihGxZsWHQbBAqdpEQEb8vbew7JZzKawf2tNJH3RYozpT924zvLam5XHoArk26j98xc7Xc9C",
  "key18": "5NVteTTnQSoEVwXc8armn6WSxejyV6K7AxqKF8sLapu9de7dGRKG849ujBnRQzEqCW1coMw4N4GewKaMrbwFJKpx",
  "key19": "5kLddQVj8vurLSvyPnKKc2LKcbp8dTtano6uaBRdRmkp74voJT7K47uchgDbc3epgcFYdPsfLQrTdthQJjD523X8",
  "key20": "4TmNfU3e4v9m3URHwDxn81FbTb7uciLJBHCsAfRYCNCPePfa3bnZepbYcpLQb1swa56UtJVcxrgBo1WAbrEnJ8dk",
  "key21": "3KEFhbQzVFFPXo7yqU7q7bJPSoy2DaLuVkJg3mKrcePsNZiuiuWPKu8Mo87ffNLNLBxqAphuu8AeKECAN726jPh1",
  "key22": "5LcEFQcPs32xTt5BSD8ko721VArtiPv31Y1gRHxvcnQhE2NB7Ee4Tmr4wUFDUD3yvvLgYW5jZr6h8tbj2iSc4VSX",
  "key23": "4wNr8VxSyugsMFvUTYh4ZMM5HdFXc44VQe4UJB5pgVHvgPG7rbn1zWz2KDhDLBNYz4tufGaqrjA1TdQJxQoQpBr3",
  "key24": "5N8CBJ185ANGmfxvnveTcYSdSJLF34Lk14StmqrNfzGiPC9Npfnqe8VBUDG8Fct3otznrPYS3CUZNsPjzaqNZVDr",
  "key25": "2YNToiiBBmCV8CLF6FEzi72PqasAFejjDafh4cEEXhXp1H9vNZ2kCCpDNdARpfdrzJuAQX6Q2jR7PNs7y8yXTPha",
  "key26": "2mLhLV73hsWNph3tQt2rg5PEDkGm1icGAtETMvHLmAKqpmjoguQcqojTbWyvSouS8wD7pWT225H4tfp6R5iBeeDQ",
  "key27": "3WWCWcCKt2t4YYqSxHxdqEdvYrTvyc6Mg8YdZHvaSN6TPt7An67VeQMzdeVsfaQ2mRDZWzLB2wkJmF8GYSkSdTxZ"
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
