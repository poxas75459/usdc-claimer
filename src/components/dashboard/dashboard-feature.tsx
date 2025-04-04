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
    "B4Tn3iQdBqvSfJv75XhUp9S8rgBWJZ3Qo1HzUtaP57s4ZvDCRaArkBMXGgTB64tasUph2fzDwVrd7BWDop6aYA3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G3LANCcLtQEMNxk4VLpGT2c1Lpcpj5pXheqN7bFFaxsfnZmv6gayZVWJM4b36NUyLD7oDq6xoAHSV6zgHmvUAm1",
  "key1": "63Xff2tcoCcbjrNjBYqZWW8ToPaG5ZTiAYtMrPSCdfVCoWMbis8kJKEEmwHf8611BPHNsWaGT8ijd8pTeB37sPAJ",
  "key2": "5v3uEmv41GszbavxcpEJ9XnArFf9ny9nYxaq8Vmczvwz4QWDswLWnuZrCk6KBvYXmUrnCQ7ELTyXQra5HHjPMj7Y",
  "key3": "4DsCt9FxoxCc9vYgHjiXyozcN7hvFqpf4HhPvwv4aXd1u6aMCWepGSfZvA4VCv21bfoewvBHd5VGWnbmbimEy8fn",
  "key4": "4sm7Xr84oqRdeQsy6onLjPo84G5pvATqKtXuKQQmKTouiVJoVYrGwx5aRBK2axQNwRhPKEsr9Fe3a8exrBoWuE3Z",
  "key5": "2qVQEFsUawAhVm9Vkg1yrdtn4jrQvSDSf1RhFudigYMAe1hwHMD9PGXimPViumg8dxQJhtExcfsRioaaU4Ds6gz3",
  "key6": "4h38425wVrzUKsmrh7hfwNHvm5sbBzgfTJxuB568Lsjp2U48AXvmdxkUjUBUuVCPjGk9wP5snbzmDDJ4iUBceD2S",
  "key7": "MUkeX5kcGpdTKMrtahSfdiYmGyh1xM4zATQPTmWs8CykwAsW7a5YwKnMZM5Z5JPUiaJjR2LTFbBwjkooUDoknrH",
  "key8": "5UuM43kUNngSSmaEspbmeKfZWMG2yi38s12x2v4iNhKUXA65BxzY2C8LSjWUEXg8GgYzTCz52g4MZmnm1nZ3Wpz9",
  "key9": "M8DJRxQ2nXkKivCT6GJMFNsXudCS5SRZrPKE3iPZhCuGFBG8KmgkgFujUg7FxtgRrfJYECNhWcZUB5EU9WCP9CA",
  "key10": "62UwvrU3fesziS8GU2PwBfLgZgEPDr5TAM91n6Td6JW7bLmhH2VmfeDbE5BgR1A2zSDZMYBW9UWNaAEXD6rwRTbx",
  "key11": "2yW34145SbB9wuochmQB1HroMRAgp7tfCLSLrdSYU1DNQykZy9ii5xFmrjFY2DXceG8L3CkCsPGiNmmz8L4EETDR",
  "key12": "4M4fLWrJFBBxTUkRdZdCdMEXoDLQmFPEfn2MdtxFjRUGSqWoPmeDA7afK7XeUHqcUaM5fgxpe3BKVUSJ2zd1RMf4",
  "key13": "34e6jQz7HWWsCLtbopVzPcsa8FgUBjWXd8dG7K9JRzM7N4BqBBTaYVzEbXasDV4RpHKP97MkdQhjHLzLf4WFAbkE",
  "key14": "5WimDdKfPLZeNVdp3oJ1RGMHUH765yEEAb4mdJFb3AiXkoHhacr1jinBcKwAVfvFPicBAw8g4jzGgxtZLemmfKTM",
  "key15": "5qR4SGQGvCqEgns1wSdJXswN5XmDC8cKiLjfdGGPPGwFtL5Er5269BVM1B8KprjhYX5iMyzidnetP9zLhTRL4xp2",
  "key16": "2joGTDbrsnKRJ8VQ8oTwSLvpQ6S3r6EXQUBcfs5o3oVXnnfwNqVyJ8yKswu8vW5w3oEE7ojAw3EX82ss5YUVZTkq",
  "key17": "2yMm6oqgp4cfoYNFPdVnUNP4SJ4i5X6gEGQg1LH3yor92WuRHeNenzhbD6TLmARfwFzKx9PdDn5j3zcztEmNNb9F",
  "key18": "2FYSyyAdEpvJP1mf3mqfG4Gi5VdtH4yMkHi78STL4SbKccHd4CXQf74pRwcTHPn8pyAGPL6cwx848FbU3ZFPkXUD",
  "key19": "dAzY5L6rvFKoeWQS9AqGAiPoPmZNpB5y472DtmjdJuZptSPn8xgUCam7vXHLxLGUrLnhHFjHG5fTEyM4YeorbRi",
  "key20": "49xZC25y8PZfU1AbfWgYvMC8ekJPZWbXnCA2aCs892ea2yq2dVJfpiScKmCZGX5MLSzpULtBUcdbBph2HUAHe5qo",
  "key21": "5h6YnfYLqYFbaM6yiceYbpPcxLuQdz3SC76sf6xgsbtXggsJXhihGRLDTQ5sqm7zKvtcvPzwgcQb3FF72ga1dUfH",
  "key22": "3hohm9mdQgHBfYp28pG9vtSYQvdfkjrdT8UERvyd8xFKLJSu5ockk2LCEHEYNyd4EpgtAZ4idFFEU8CNFAjmgw5N",
  "key23": "4ep1iN9Cwr34NejYJTb9xvfiYzzTQXnAWZuVYKixbYhUpAzRH828YH9iBZNGMHBkR3Pr1tcLxy4mHPhTG1Yf765p",
  "key24": "4qNn7zghY3BvWTHQexUCiFh4fFBJDCw1sFftAa8RB9HH5PB5wve1obgSCJhE36hLdZnUMe5BczuuBRaLGCBTzrM6",
  "key25": "4EV6yefNrzjYBaeQ7HcmStB4vTSUpp6BdvKU4tqVpFsJBUXHn9CzmY42CrUfYiXcTGTXkhfUS3ePBbiqzQGJaR2m",
  "key26": "3y1hbA7y6UZjKPZTi1nPX92BcMoAhW9Ddco6XD2wyy8VY9nhFk3J13VfGfkKSEi1C6Hpw9uNVb2DC1REBxuxBuT7",
  "key27": "yBLyphYKf3CNmgk87RY1jTPbpQXBYLspbqRUr8rtmivcptpXvRDGeLYpzMd8j4UKX33d33oaJfGnw9cjnEwscQa",
  "key28": "4Fc6SYL7fg1DrjcpEJVgrwqcN5MYyVgazganTUfNTEPbJbd3JfK4bsDkLwrPTMMtfTTKTKYesDtUTEbFFFJ9L6ww",
  "key29": "3TuavQnK1LM8rnpbGxG6qy91pvALLmerJFNeBzfrrjEnZfjU7zDtzcUVLHrmefrhaBdmStrAekN9uhWri7XSG6cS",
  "key30": "SUsWxxcEZRcmQWyCcgRGJSXQyqaTGuQPMCZ1rUnj2ewomvEXj7XBeBxPdAufDzEMBy2JvodhFPJDYEbW2VYzGYH",
  "key31": "3QzRqknomcSA216b7dm7crneKhKeoyAEYo5AbawzNMDK7JADcznCohmAYPFUJKJbgwm1csVw5MWxJyshWQCiRow4",
  "key32": "21p6HWkrJZvKcvkbHctj7aESakzhTbqZ4ei8JNQQapafpWSD33Z6fur21ReQyBtUZcCiTQxWrUdh9y1oQzaVrDjU",
  "key33": "2WF9Q7BdVQg7HdCwLzVRcKRrHAjyZxZiu1uRU1UcD6tVikYdMKfzhZABR8v7DMBE8M4pd1HfQhSpWNVUnSnKHC9C",
  "key34": "65zxTub3Bufd2kpTJLTA8GcVKhXoijMh4Zpd4qZVbzybYNo7PEE8K1dHKiWTeaQzPC8HNUjnLhq5LXXurW6Qxx4g",
  "key35": "2e7sMupup8GRuh5FeFYK2uUNM85eAxMeFdeaFuYMCUoNtckcTB7yd6ck96Fq9eYFnkHjRHhvC8fzsPKtWwTXXicr",
  "key36": "2ooYpDGSn3HEmYcddnRYf7i2qeeERK8NqTAhp79syJZsCa8vQsidGNgFT3yWW95CBoNc7tfPpc6VAFnP2ds6QCCX",
  "key37": "4uM2gTqiuDwoqUoqa5P2q1vqa4dhHw8YuDsPiPm9x7JcTUuQKMFeM68qVoydYPKZ7AvBAQgmTiqo3g1zeK94aYpo",
  "key38": "43jUXY3f22ZDkfPhVudzu4xWyrF4iESZUxEv54jLEgKPemDdGsWvv8bY6xhJ6kXwoKhRayZ9NezY9DydpYzvdxJ3",
  "key39": "2AXakx4NQWcH2mRuvrBkGgiFfEouKmg4QuYboFw56vFN2ZTxRgXf2iCzGQs18cWPAV8jV9fKGNSojoJ89JUnLE3K",
  "key40": "3qaEyzrxesddwWgJDnmBTRhEB9vT3ib6qGMZXeqf8Z8j5ZQt5AqJZFruKs3G6wB37hiYEeSRLLyitvToq6KpSCce",
  "key41": "3JF8ARZv2NbzWHkufdEqRRz2TDaQyQZmzPPNW1YDGpPaHxZnxRaKucLL1zBdF8ZxGApGSuNqCegmwS1e4JU4D1dM"
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
