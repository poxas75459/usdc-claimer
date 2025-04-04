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
    "562jfGC5JT99bp8UDxxEdYyNH7dM5sgUVJQ6PqbpvHmev5svTpWBZvtfe6GXc6Tdh2nbAXEkfa4bAsw4uzYsqoAC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wDYasZfFvTVqrEVio7cNGZuJSzQBufLrvqSNMQNB4FE4chycREvB9Za6uctfCoxcrCphnRmJQz65NPTfhQRv1uv",
  "key1": "3yFwmuviwBiqog97prYD5z8g7M1qrTzRSTk4cdpBrk5YYgQHym3LG2rVjxzbd87pyALi4nHoXTCNLQTS6wNpJqcp",
  "key2": "27pQdKTruYDbkyL9JMAyp8tBXFZctyNob38PoppWQBhabpx8zZ992xZXwg3PvK2VWAFcFKUQLnGPcMuEC5JortNP",
  "key3": "2YpoKgU8DxYMGJbwtvVDr2NesnFodbWtcqEWPsWS2g3ugzTFb9wWGTF9nG6RqWi8zAyBCQUapijzpgpMSw9oYQXH",
  "key4": "23nZCgagRevZ5YpRhBYDa5JUhNJQfUcSSsVYnVeMnB3uXnc5EeFR8oXjGNx5hZ6Rsv3wa5ookDzuw8qZ4WMNcEPW",
  "key5": "2VmeKrzTLX7KW57YPFDjCJTEmeofnE29AgXjtRcw2XaMzGXEsiXfmfCFaSyd9i2S18Fn1NxmmfcjkRD9etHgNE3a",
  "key6": "5vPx6qqwtzTZMxg6HLYpXrjDpYGsVKeZAXJyybrS1zojNYwLXwHqesDQpETKSjVDyHsBJLsyxijpdbSYMBHgqQJE",
  "key7": "5KdsKdtceyBUhaEJww2NBpnKhSujSx2y4VE1Q1ZQSJRhpvLctophCwbt3sc2SozRpF2fdxG2W8PcMrUtyiTK1ew7",
  "key8": "3zEpjcch97qzVVSY2AwLqFTiQ8n6xcioFdrYkTUwzVq8dUxku8PoNkZgFjMRrYcVhZiDQTWzifLHG5E5XSLsT8qw",
  "key9": "5HTkFd7WdEyiZXhpBHbgVFjZLNXNMCbQkUsLF9q4wwjjzPkxmSLtAvzmGWRh2SLro9WhthKXJ1nMGFZMjjvoFvbw",
  "key10": "ihJc1eADSAqBKKQs3LZtueYRMEMHaBRVpkSdjZkGGGnyWxoCLegmrN5HZeoxQERXw4tUvsyu59LXVDsKac43Wd4",
  "key11": "E2ZeB86ZuCZX3SonHR6xk6E1XSgGW9pDDR8yBoSBDSrEwUnE3RytMKri5Q6CTJKrNXRSdcFN32f1f2tQ7FgPwsm",
  "key12": "CYNzVLXhbUZtS4rpcRHFhS3ZzVmoqUXWPie5TYdUYLzcCYpTN4sWXayyLsTnMFvGYJwP6aHNEpPrzH1pSi3qqXa",
  "key13": "23EFqjsqt91aZ7TKPC6U1qLW2EMj13y2nBx6BKxNsUeB2Vrfd1npC28rNjhQMdk76CkV2EfHV76iBhrPZuyHCdMH",
  "key14": "33smAk66kwigathZSts9sJC4MJPG7Z445FiwQAz5v6manSxCcdoLQUJGYL1nV7zcYwS8GCsMRbkRFs7cvjnai9Bu",
  "key15": "4QVBbv9LYy8MipDmF6x86fswvPKrjQPVH7WqRsogJqzfJPtPMw2YWh3ExusQF6LqA2Jw9bgpmgJDf6ihZzokVoJP",
  "key16": "46jtKGjNvYr3yLZTnv4TC6ZDMPVXbeECcwGG8aCDQGSjFHRcqbRwR2Xq4GjbQhc8hgHoeEwxW9kqA3qvpHgU136s",
  "key17": "2Pngzv74gVQKJFndG7UMfXHojxf5gZiFYGCeePcBejmf7oNhmgiiUqa2seMhuzuBy1xLJmrPo5XbBwqsNzH8SBMJ",
  "key18": "3MHQvy5vr8t8YDLLFpkAo6rJZeQvd1x3vaxrcU9oYRhVqcaCBi22Eb9YvpfkfYpmSFqaHWKf2djm33F4gVe5aaNB",
  "key19": "4DgS8f9Dq83Q4boW5UYV9vX6BDGrpJdZnbsJGQU3Ce8pNPaqJrcg6QsHuXKCZMY1VWZwTzG6ceXXvsvrf9jPLerZ",
  "key20": "58B6dJR1LzcxoUiMjKmJzYpNhwzQjMBKzYx8TyCRYhiHNRRVGRuVnU1eMN4XAYNGzfj2SmDwwUwt4zg7utQ6MvtY",
  "key21": "3YYCVL4S7g5yPziuXP8nQRwe6mUqS851ArNn8eQM4xFxXQjvN7GuffywZXiZeAtEaLrjsxWwy6i69gaN6ztAGFSg",
  "key22": "4rLWLS8F4ziJzCRspbf1pCMDeGmh4a5XN4rDRdvgqgTYsg9zLZcnrKRAc9Z8KSF3KmBH2ceyuBZqLs7y9X4eaqYa",
  "key23": "5Ed2AohBuLV8uT5ZPnvNpM2WM55LHvpiofsXLYnMQWWgK9gtd5xJL3xepnvPtGdj1rFdNe6tLdW8Zrefxp2DJJ6a",
  "key24": "3ibdkL3mbf7udpV4fQiKpCht8ZkFRz4Toveym1CJGnGrtPV8W1mupi3kLS5bQBU3q9R1WakxNdU5Bavtuo6Qs9bG",
  "key25": "5FPyU9xZmhLzsWw6bzkcZJqXo6KzFki6bSVaFJtQ1qb1Pu227NF1ddiNgApWKzUGDWoykkpSeDuxJnshCa7jJcQY",
  "key26": "56vwRCS2wYgBHKvgPzCrMgYz8RQ4XNVLt6ppREZfe5WNsZBxa8NzeCSBXDucDSkcejwVvfe95YZAiBZAZvkoD1p6",
  "key27": "4mxHVRwb9BTBfpseHJJxphcDqkwjLborr2zAG76ZvsXRBSb7Bn4uhPhPiSUJ4PuY9zoZFyZMLCyDYfbR2UzBhPzb"
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
