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
    "5wk7XLaLQqqiNmN2SymC2YtLX3jTaugagunZsDJKELMukH4K8HXQvsVTWnWzBdsQchPHerpTV5URFHf3v4tqrPZo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TnrwF2r3pZwfSacQ7CZRA8d9YBm73dnVRfy2TigFGyVF9TpQDsybDwhZvCXhfc9K6VKLXwa1936sGWvsMKStgTF",
  "key1": "2tChEzA1r9KeaF5mHdwwvYa85e2PyzFyQJH7TVEyLf3DajtB9oG495XwhJSyM5NMpYHEtHx64yC8ELUdASWF7SJD",
  "key2": "666VrnpzXob4iU5xnFArXVbCuLTZWpxuoF7pknWHZ2a1Aes8hmcTkuYwVV9xhKgBamCB9Vjgix6xhp2SEEHCAqyR",
  "key3": "ZDNrTJ98P28GfnW57qzymCBk7EApUV8BJvZpV3amqihGUg9Hp3NeKCXTus6r1bZ3YZJT6CQXvNVxJYpBYDYMbRt",
  "key4": "26KdcQnaYjbGh28SnkgbHVuzB5mfPKfTcom6ieL3Pt99c1ypxjRdzjxUYoDNEKxj6Ax7M1oaMCYmmuE4RhL4dWj1",
  "key5": "4fXKh2faY3kepjY5kkQvKuCGMZccLwRiiKcXccDpmgKLbkE2huWU1XYnQQJiaaeL45mvMUvfbb3dp2EzskzuWvyF",
  "key6": "2L4FfMWxRzsNTSZEbXaB8to2g1Ch4cru5U1ewHwicXLGfp9reuq28kRtdVvpruv5uB7SytS9aiB4oFkiaaid8B6H",
  "key7": "3MaJ4rQpBtjVE8Mtxf83ihyApveGXCywH1KZT8x5NRv8gj1zDcEREX723gNH2TksGWthsQ3pgPRHruUppRnH5Kyp",
  "key8": "mJRCxSzH1314Y7uC7EHn4rY87TTVUEBKgs9mvamwYCUZZfRAG61YhRSBraM3GK1o1FwtB6WMzXzuDjYYwgCrV3f",
  "key9": "3dqkUSR7pe5FXroZZaaqvnwM3NpwRSH8n2VR3FR8zziK7L6Pqvo1hWvVVdDJCvQM1AZU7R5QwoRcvLhgdiKEobXp",
  "key10": "4kJwEekuytVXidtVdYtVQeGVbaK18MurUXb5hH9tK4WtRrrG2fP9ubooLEByBMLkSVqr5PTecH2ADga21Kf7qX2w",
  "key11": "2t2MdwRVA4QSFvFTNsStg1ngfDkm5wXgxwpeJTaYmiLCpRf7HFEKEqz6Wau8azwqdtFRkGAKpWaTbZnkRCt4Xyxd",
  "key12": "U8E6soxFPdme5nTLTxFav3ziSDwFwA1PfxUzt9D21toTzSFd6FyrvNV4CoEkpuViFwyvG5Z4QfpvUkLxKGPh4Gt",
  "key13": "617SaYsnPqNKH117BszdRA9j91TT19UKMSzoSJFWAnDroMWWMYof9yFdLp5w5Vnaj7zBH2xGDhxnsbPNq5ujgcTk",
  "key14": "zhDxR4i3qXQAoSAdP185EDbBWpAz1hfspyoEDje8uMELGqiGqhHMcJ4Z9nK6RiCWLFiWGAhGsEbkSkGUMuhM7me",
  "key15": "SbwUexEAHqicHWysnZaGakC8M4DbADaHRojLv8JvRMGhWTfDTBhh3KUa6L2sFGuWBHeqpM34LRrCumJwf5ZLHKD",
  "key16": "3t78yweUw8rDSVo73aU6rywvmC5m8B3VeBtwLa63AQABnzfe372y5UQdnfDToPoww1eDR8QChuWQewtfcK2HJVcj",
  "key17": "4XfaNTvaR4DBwwJK6mZg6s4XY58fLvBHgk5uYf4xGiTGe8HDau6z4tYuR4XBfdNyX88ccrrFudQBsq5mMMbGNNxs",
  "key18": "PM2uMFoVyJ1p9a2RWo1JQjQSVwVNBetJSgvFuTXdQDRfmUXuzMMLDALmWsd5BrZ1hpcdfJXxbUPw9q4h55vmEDF",
  "key19": "4vVv2o89cewaL5C2uRrcXX9uTQcb1oQQqhwC2WASuLDynBDK6HCpcRhKx2HyoHbSXJt536kdc8Yxku8gCAabNfq4",
  "key20": "3osPSh5ro4Ch8fikEqQHkvzz9uXzveoRXTM9xBiz29jm6jYecNkVZSiJCdfJTfp2aUgcr1mxAP1rTvvv19cb9tA3",
  "key21": "5Uv2cHrANm8UWjRC9yY8AExHiDNE4fhuBxaTMeyNx38cPb5FRBNYNSQWYy9VFC2T79CLH1pJo1hrfpf1eVHpEwmy",
  "key22": "4BNY8P7y1SLmsSppF5SKvkha2JgDYHb4goKU2rpozHP7dAXhMTFj63eUp54Cx12615L9bzR6tGrQqtSrGsmbh8uS",
  "key23": "3o6DDcyHpKpaGr6VQrKYpK6tKqEj1pwKmZxrM5TAdsiy4rSwojJFuizocNrymms2Vri3u3caxKphBHEmSUD2eQx7",
  "key24": "Ua9ua9aTwhY4aeMSUhymMr95nswneFKCAXwZxYWFzZozo4nAJKgrZZ9hZ1Dt6wNM3o4GZbSQXq5ZsffihzP4LW4",
  "key25": "5Lg3u6oa91PcRopx3kdyN5WL2AVJVGMyoneDjK5ySC2CGPQrqAVMXHQwxxBTRpXaWa35Rm65kb1VYWd6zdBAYqx4",
  "key26": "FjJC1ji4pBa6R3AYnmikDwBZeBHiPwEAy98SKg7AUPjyfQjYNYVz4haVphYUPecdNSm7Em9Z15VCCqjd2s6AJ9Q",
  "key27": "3mqLAs72fyR5hQKaKtpt7vbL2kKa5hT69yssfPjMxgFjZJpfRu3X3UVvpXmjptYXcAzv1Yr1dwk3WMwNVBHGstzZ",
  "key28": "5f26C2iwx3fpZZh4NsSu5v4grKY1nhHUhhjxCkUGnL775iYG5PPzeaVCLV5U2cjCachdFRhtYU3BMEL7R7G6S45X",
  "key29": "4QyEMKCmfdj1M84awkqDBJfxmJmVh8uvEJcSbgkinmXcDtjdM7pcLa5aio4DwEAQFjospR6s2WoWgKBuDeZq9LiS",
  "key30": "58uPK228Tn225uJGUwBrn7vwwYAkDJNx2ETVGFgNBXvhm1XAaZCXzDfz63m2qV1hHHxrLQtSMcS6NaK1qf69xVSA",
  "key31": "4DZCT8TMoANNdLvbizbu9aDfgyXaCh7jQKUAxZMXt1bzfnnAuAnaXuHQcKqFx4UAgco9f6iooi5yqK931bK3gt5K",
  "key32": "3BUaHCwEbVLWZNPWd8zDy3KMwmdm7nvv7AnZXiSntjhZxC6YJ3jhMV7Df1Hk3dkf6nYmD7Sq5UEwh2tvBaDeVeXA",
  "key33": "4SHzESDax8eCFJnvtEBF9KzprwR7BooCqa8dzx4hkpYMPkouGQKeU3HxR82KjH3bBovnmodmWEgfjBemodAyvuPp",
  "key34": "jhU9CZu6Uzu4f7J7MCm4h8MFEcGw9W5UoQTrg3MzHfD1Etp45XeWCTK8wVPwiD3uoc6dyLi82on5BhESRu538Jb",
  "key35": "5GWQaH7e3nZxvJQ19BMqEVeWkHM5GvdW33m51yRAF9yqs3DJYHt3o7Vysg9aiT69KRKCpLroM2jqx3o9b8kiuk4y",
  "key36": "p9FVaxCumVRAKsyCwHBGQxd2ogkTRTCLo4sxNHuPfzR1BVU7udaogdvYvtFssX4kr6uyMkruPSi5aQNyzGh5op2",
  "key37": "5DhuN2wAfxUtba9pM1pR3tenintFSUXmZ1w9FAbBzeUQBYRVZYiPzVh9LvhWqPfJd7fTEhZYNyRhyRug2TdhpC43",
  "key38": "2tGaAV9YswMeJreuJuoXDyFeMm4yKQYyeMe8DtfUtUjvrP24uwt8aD3o7Yt5fng9fjH7iscPDsT54r4J8HwcnY6a",
  "key39": "5hLCY25rUyBJMpqSPj97QWC7PtCtnTtMtUTa8sSGZQ9uT16eTWhWwE6g8CuGSTD18AaFV7jV2RJfV5whG8dB6ba",
  "key40": "2S84Hqc3ioRQ7ZNuWNatTst4KN2hTXqt3cQkqqgDSjrhk3gquMohnrA49nLACMaCKTXW9yRUWrfonHhtgwsQeGBk",
  "key41": "5KGDVrnQFMAY9KAbf4scuRaFcY1nWyDETFLAiLf5RHCWrXSSePE5wNLS8t15NZACZpb81Ly8KgjFhLVJPqwx1A1U",
  "key42": "3VCFvxYmGtgXJAmHQz2ENkpDAQGPrBzYyoncKHywFSK2dGJ3KxioTrWpWZspUtpDSAVuksud1XpUeKSvuVeUVh4s",
  "key43": "4EHfJbsS9jg9vVyTdsNdVfrWhRoZASq1hWTQJQZpukzQbUwDt7MwuGVy8a93kYmKYWqBzGhacVLx1EKDnz4zU43S",
  "key44": "4a6jGxQXWQMtcaSZMDjePnhoky2f5NQCzyUwxNVCw8ywVb6zvVf2TujZmXvqZtNqeSRgrPZrzgE1p1vUDHimrJvK",
  "key45": "5zvHtGYmT3jxWDNisPe2D7v9f38fc2YzGR6TzCFgFikEwiEZQ1BcEBEyDmvEicMNBfANc1xUehGJfCDZV3Tu3W3S",
  "key46": "2ceGMZgmbszaaiUoENY1hQeAfU1k1bXW5gXUWVaNDU6NQoKKhHCKRkNwKk1zDYvy6PMfMZALAWZaseu6Ub8YBFyB",
  "key47": "5npGGfXe2NcCFizP6QigZwzqpMZyHkH2xkSsbP8V36H6uzU5MBd5ydgmyezag8dfPjC1hsFxRXRoeUqvPtdqvYnV",
  "key48": "uAAeBwmxCBhEU9EjUnUu7gUWkZ2XpXgGk97EgHWZ1bQXQQJi6dM2qNk8szabjUYCLWcEEjkerFhKJanrX1C1iWQ"
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
