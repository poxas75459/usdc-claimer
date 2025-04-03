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
    "2FppKW3rpf6zVbEEomw9WA7sYrXxZBKHULP5V8zeS75w7Ge4CQnknsnybCGJ9GEn7vKSR8khgPwnT1irozTReXxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oH3cpeRPN2Up6UpkJF6bFEZVzEfbZkS8eVeJqPPwki39uvScuL4i5DuLFu9kcqMnPLzNbi5ABcuPBwJrLEh4qpd",
  "key1": "37Y6vHdjcUinQWfuuYPGoAsv26DkhbqeD1QwNxtDAnmzdRh4kZqm2PzTVFXps2RAp1wVnrQPsnvdnrFm3dDgpC4N",
  "key2": "2c39bCxSvo5RRVYWBNRmLQRhsddwcYASLT2DmN7MNxQb2KViQN3zD3qsh9xExLkwph2D3yScZ1t2PMNMRxtCdbJ6",
  "key3": "2RYNyDTjFsxQLFs1DDM2aNWua9gEuAnH5rjgfDhG8PJKSK6YKkSak5EaG1GTs9PhCVMfLkvCpGZftmC3KUhrKQxk",
  "key4": "61WuTv3VRjXTwwoHHAyvhWPCth5WCwtoUgfh6UH6ES2BqBk9BQLwjTXafqrtNyRTf1oeGU3NTevToBgq45wiGZXq",
  "key5": "5uhutzx3zgS6xXcmJN16v1akY5LvbtPMHJeRVfpfx1w6f7nr844D833MNcUkoYLUm4YqLHFXkZBo7oLLnDCoQBBe",
  "key6": "2NwNSg1UuELmBUtHU6ADemGqtQFfGMwKycfDmFeCFmqhD1FN2JF76exZHmTLXBPd9htwB51CeZhRRFGJuQtayc96",
  "key7": "4XFZQMsKs6RKu3i1iuy3ZbycoM9BeXUAJ6YkHLzL551qZShdVBoc1NfzF4janL1VrQGyQhvEhSMRuKmbmbWxmZvq",
  "key8": "2LtCNgGQidtoynmNnzzSabtjxcb7oE7yjSxJFgN1MWVDTt1S1ejue7AKjxyT7zF3TxVexrpT2VedjAxCXUhhk2r9",
  "key9": "4qKkvUkkiDJ4hWPYpmpSFfBoaqf3vWvAs9NW2EZfXMHzCsdvj6SCyLzwFGQSJhRk4saxfBvWQ5LVZZgNQH4orVG",
  "key10": "5pbMpPAA8esR3QJPx4iyjvRhfvTFxgHE3XYnr8AYPfxcCDAVbrknDsyXjK5TqbqHdQBRB9edCKQAwbwwFr8iBgWK",
  "key11": "2g52xXN9DYSjsGmtVtAo7HpYCAmciW7G65j4urZSBwxmPEBNqe6TnusLLUvBZcWyN8kYMDoBGxTQLLEapD8YLb9b",
  "key12": "3t467TcX2d9cjvLKFjE49XNaLwtkBoQ73LRvj6H7ABSsHvsXPW9UFFtefUv76aKRecKGWv7zxAQjNZfL5gkjAxZC",
  "key13": "4eqDnaAJ8wedrzJcqXpEYwd914wvGDSuaVaEe1qBngcxAybriJQHcKWfEbnfJjVRudkUj7SAiSqvP9R18bPQ8yTk",
  "key14": "2A3mrRNyJe8Xb8wkigZaGBE9S6XhxALcdzEA27YRwRHTVvVJFcZhTZF2MWf9MUeJfowhh9hLFX7GKgSDFCMYHGWp",
  "key15": "4PXpxgirybhVoBrcbgxjPCt1UN6hv2pu6E6gKTNoMn371YmLKMSq1vT33GiHJXu2hK6uQZx242QHsEUp4uwwtcDA",
  "key16": "5b976RoRGuH7xTmfeqpcMME3JcAm2jGp7HiHnCSDDgwjqrL2DwGzXq6fMaHbJGsNQncyGAAWhKq4cjsrUx564pgw",
  "key17": "5FdK8xyA35PUVJuByXb7JM1QCUDCKTpfVjJ2s3fRQ8THvK77oEWqcAq3eiwPgvbKLi2dPTwdnd4r1M4WtN6S6S7S",
  "key18": "4mN9cJRy7cw7iHfgYX93VddDo4VdDBfXgDxLty275LjFMSYbhzRxQPQky3mcuUvpHzgp1aWPTp7uycht2MR8nNeZ",
  "key19": "5R1qhdXq1iSqF7WR2Gc2BXs44Xt1saZTEyS6dtpRFPM85kTa2jnwokLeRPR1stLAqNhVbWdvE5cfWCGZgsMGawDy",
  "key20": "2iH8Kwtq3gurBVvWQuui5CRmjWDz3qYZfs4GfxfadXbs2eCJQksEcRtC3EMjZgEyPdZM2WPsNCXdEepWMUzGfwL9",
  "key21": "64VW9vC6uaw1oFpn8M4aGZCc7kdovFxtdxmd1iXB1zinuyytR4c4WSwM6GYofgjjUAtXns5XMuKfb67inSP5URUd",
  "key22": "4wCs7ukPjLhtfvACWtyv6cAxgqzaRuFnYRuY2sfcupXmp4TurTWzQDwjLr8xp7TTUVFZDJebHnk8EdTKkTWV2QBx",
  "key23": "3B6Hc2FWaRrDC9u57QzBLTGudwu98Mu4bE7ttBHFfpyDVosEbDyB9ouzKVQxPiLSizghNp4nx4iBR73jHTXD27J",
  "key24": "2CQtZ5dPNHegj9qfPEfws5e4dC4kBtMgzp3rHQWLxoUntGNFsqdAHu4o6SfZrqJpwbSgqGUgMCbT9jzpkdQm8Y4r",
  "key25": "5vBVMYkQh5qXqDFNxw1McSujaURKqXVDJtMaXXMCrJmuFAQszbdhLwRu6AurFJhpoPVULK21nLDBNbSPqDoq1ndr",
  "key26": "2j7ChstyQUpkr1af3KXb4mJ2RdwRPoFHMU9h5xMPzALxs1x3aPRxkMXZjgEXQnYK8RNGJ1Qet5UXFuMhLm5mRyS4",
  "key27": "4GCfjb3FM6rmyNFBodjDt4tLGzepy82jRJKLNqb7ov2xiGbm45hWTNoqMc2RUteBRAKVPav6YutKsXbHfJRtYDHF",
  "key28": "4bJMof3e3SjVLU4qptmk2feWwfgERtoEY6LLobbN3GT8xYh7JVdTLm9TbJ12w4kzHNLEosEzQXKbM5P7JHbW54Fz",
  "key29": "44AXPCN3podbKdoaJuifTxuwCALttvKqbgHWgXd9Bwo1V4nAftKt8AfDzNP6ksMJLJmXHfP8JGdnD3iKU36DcERA",
  "key30": "5P9UreWkFjmMB3WWnh9KKAGBxfuUi3C8iF9hMGF5CdPvXDWGLuPZ7ZWQnWG7eQGG6VSCqznEkK6JSYCE14SNKMAn",
  "key31": "3XdPnK589W8ocmBCvr7RrVkxNLyXLUbvk8MRYdvnBAmky3LSVEiT41Zd26HqTGTArM55Z1LkELfwRXKeR9cgASVA",
  "key32": "55mE3MVH43Cep96t7AmGZDkg9thHTqG7zJBHU18fA1tufCt4Na2yfuArzQKRwZetwBAmWiY1uzHxCFmpvmQHYFEk",
  "key33": "3XjVn43bozbBvvHLFNtK9WmjFVnzUgXWH7yLzWZ1EPG3XTHwz973RkELUE14npuPjwr8Fd1X3rSzYpTRETXX6teM",
  "key34": "2h3NWvhPmF2iuNncw4xvA7h3rAec5Sot2dzBofhAXAh3ANFHR8L6JtetpZWSES5D3fcUj9Uxeib4iHQLrCTrg5Jg",
  "key35": "5TU3dvidXE8GHaPvFVnNtWv5qaD3fehuRFLaCKNtnmFRNq6TYSLbhLecv18wXi2sYbrLRb7wyN8oaFar4ca755z9",
  "key36": "3ADJavwKyTR2UzA1SCu6YXMkTaJUXHTUQqFTtizAGPUyip2iNVggDkq7YzfHFhb1KX1vQ1zrdSDBGbLVxedG2k6S",
  "key37": "3smtTNd3wDBKxYyKwu2Q7FNgCCYjJjNHYyP2BPuyPfSsUP45EzndgheVZGgCBNfC7wssBPd81r6mjCgEwtfirgLM",
  "key38": "3UzEuvL2Ty7JAFgUgepd5hTSpuEZqVoU3s33r2Y9hFmLZU29N88mZybr4FymqeqUdwJJ4zXjX5hLawNhhaJwQLna",
  "key39": "3kyQTYhybaPStQLMGLqYucVJ1h8yZk61sExEvpT8Cj7mnQzGMe5UCvUoRsQdeNuHYUgPBhBHm7ujN7Ya4PYaHigP",
  "key40": "3txaP7tywaQ7VwsHVioNu3n5mvvCngRauWEDxXrv22eBv4qgxzACnBGQEK5MAZjAZP69XzWPpbvFWSNuUEi8JD1q",
  "key41": "4ppgB8bn26AwMYkRYgNN7g5tad8Jz6DHDBy157AMQX2tAADQBqj6qSymCSeo6hCqzQeBFyDAaG3X61qZQwDTxww6",
  "key42": "2KipdKm9MJ1ckKND3A8E6YUcnBbwWskaBGqEYUQq2CQR9y31Qq8s62oZTE9Luq4AYPxEFNfURfEEEJ5121TFjVWp",
  "key43": "5iaiUVPWPYtiBXNCAK8GxNMs83GKH337Q1wSdxrCUsz7x2w6kULuikHdWnrFsgPy89biZZscizTPVTSNdtzameZ7"
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
