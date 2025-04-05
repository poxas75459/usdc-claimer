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
    "2CpAovwaHzQeNxgCLkXihMvRDRWSLQJ8gkJk5CzyFnnF1hCwvVbFRHhSJ5CPwjz7P251Rf2YEgwV95WUg54SpbCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rTzoshFfJLXtnJigKQtaCQPRq9Yo8ScMDGKWtpTzpesydMMZ3TjH2jeiX9UKAHFZsv37vo6c3rwznA2kNbbDDJ6",
  "key1": "4qs76erft4vMmB9Wb5UDoQsNv3xc5Xbh5jeNLsxuyqYCJyPjHHg3o7tMtXEGzUfmNjVUufsUXi4ydiUHTxSLMdCu",
  "key2": "hCt719gwnC5nM7Vq19pGrUyxYkDZi5x6TMKeVV75C9kiZHSHpLx5a3pB7Ja9jaSmKtuq1AYu6QHSYRFF15hHeSx",
  "key3": "4rit3mouBZQs5Sz361BcRX3jj6bhQ179zvxP6cbDZUyukid3Ga6maTQHWPt9VD62PMkMPtWZN16zViu94WdPCQ17",
  "key4": "4eampedrScTSpruusKhXF1dVZntoEDEPsZfQk7cTZ81V1pztny9R5SxUvRA3PCmYNazokBCB6XPPg8FdDJmgFzwK",
  "key5": "3cqyzCCVypGWXNAYtMGi5odVD8fEL6WPayUxpxWCxJ1UrVrRMkqdSxgEo5MV8B3TvQTgNt2sBJ7nFTkxsAiUZg3D",
  "key6": "5XxApx4gT9BwbQEh1qrVXr1ujH4pNkcn7feGr9SQUUgbDjkcceS7cbnb7AmTtTvqfHgn3jjdqPXQPQtDKDz5wnqX",
  "key7": "37f9sLZHm3L29JUxPyF3fS2k6SjVNNJ4T2929n7i7BEHM47ZPv2dZWrtPFA6hCyj67Rt4zQyKw8tdaS3s658hh1N",
  "key8": "WtprQTueMyUNx83Ux5VN5tSAwL938HjQp1P4LEoVtQhucagsoQhUae9Sk3XTvqkJpqufphcEewGi3QRVQBK4PLw",
  "key9": "5rzYAgu5SvTJU89ewjAfgkJbcwg9GC75PvKahbNUwWAXqaUgnJDzTtFsa53xdHjaYu2GvJoM1yXFby1YZSJtYE82",
  "key10": "4ZYLJ68kAmoXyq2GuR64MDSkobHQWxzXdjV93ZC2jknjGPwdJn6CCNmSnnoLjWe1w5taZrN86vMeAjH9ZmikSxyS",
  "key11": "2MEC8beJr1yFPqkk63cHtJWFNwN8517oW9J1N6woNgjeG3AkC1EbE3YfnUV7h9sqqkstCCYYTMrpq4oWDeb4zC1j",
  "key12": "jwB1hNpezRL2EZK4vQy3VcLTDE7aTUo4rZKy1uy85GSorDtcfabc2HMvrPahcVe8kZDJaHiJmSE2qp1nvXKfHhz",
  "key13": "tmpqN6bqk3vEfMTM7UPU7F2ZN23LvgVYSjHH8xevvo1yo1bcYexki9bykBqrWXbpVeaZ9h8GY7LvNcwCMxbHXB9",
  "key14": "2YwqmNQr6uDVAUVdgn2BzTbYkf1McnTRZSZZTMwrMwWQdi2qRiMPtKUmJffDCnZugjUh7suGDtGPYpmxCZj2gyHy",
  "key15": "5JQ6b3sEn6JS7CVEtZy2P7ri6nHQULv6YEBeYfL3cHERYrDcRtsLGfoJtnsbMgE9iF4kDTMKTZ81gLAvX9KKadih",
  "key16": "eSjjJWrArVL3BiaYz2VhrW9fSyYbxp1eYfDYFtrENPekvYdyqXUKgYEvaHrdRMwm1JixZexNFv7HS4Y4ThrBH21",
  "key17": "2C4WAKD7P8gAXBkCXexVVTLQzwk4zme412iaUoVzsLGSQiJa8AmejkoaQnEddqj7KAnXNVP1J9MSuZEA85J5DGDF",
  "key18": "Y2H8D8ML8vG2mg1UuR3thdvpCJP9uvK2e1pfJNDUxxPUfmCSrYEF6nS2zkVaNvgkFMnEuvQHGWod1APW5jZwooh",
  "key19": "66YnyDJDw2PooL8hz3gqZZDNi9U1EvKMYPerJK47uKHkv8UBRFuDt8iKS1D1JeBPrG5qB3F1WzFL5268mHtrwapi",
  "key20": "2LRccbNdP2ths4Xsfjt5QkJz6XUHhMKGmyPqGYvhG8WQJjitT9vXyXX1Cd6c5hpuisS3ZA4ssXs8uNGtRZyqfi4g",
  "key21": "3kWA4UcsQ1qMV9id8ZRz4uWazwkJ3YpnYrZvon3p7WRCycpE7uUjNPdCzneCesgyeVFgURFJ1UJhdZh3VMnxgzWe",
  "key22": "5B5DKQybEkB585aCHo54x4JY8mWAMKx9xwrzdvcRiGzXVe3FLoYQ5wXmG3JuYUurnN6cERTMSfCy9yMBYvvBfco6",
  "key23": "2iSFWeX6YePxyKT2kPywkw6HN7xHyuq4WHnuLCJ13ZVmZvTMDXGJfNPSFNWTVp6fG4YawAoJsrzyUT85E81mr8Qw",
  "key24": "4XoyXjnhT8uWUZpGyHfgQMcoTuZ16DPEf5oN9zfhADUBWRRiJF5bsMme274JmPyHDbofeqxWh7b8B1QtFCWbBeTu",
  "key25": "33SsuQdvUCYZAhRV7ayq3NBeKT7jUhJPHDSkQBS2mqpmEDrEbuWFvFwvjbDxaXXZU46RiHBM5KfhPMbJNz14sNsM",
  "key26": "GESGNvBCUkGsS4YxGfbXA2gjUaYr8zZnLSjnBKwf17GCJjhWJSVkKiBReajmhq4w8wQ2r1byxaLSU9pqN1rWkez"
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
