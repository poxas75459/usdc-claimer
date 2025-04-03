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
    "4G33Y1E1KjexnGPwr4w15kGSskLRPoRGPLPhLgDZfL4d7jQ982G1CYzosWTjBndJTR4cLnEzAEnLBphwgn7BB2BM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "79RqAfekqYzLzarYMKiyvakNapMHgMdsueAKCuiTTYUraYpEjpsVk4hjKzTr1ChfUqCXNLoiAytHunxSCGTMMsA",
  "key1": "3Y8zy1qHcSXHXQBsrnPfWfqNjjnhnzV5xnXdR2VzqRJHmseTDmqacEyZcWjmDWjnXdsLm9QUyrRitrvxfrDaptvs",
  "key2": "3sDkNF5TmChLdJ8vxeTNmKsCBMkMdVCnUSw1XSCnHjTn7ng8Khx78Ph65mmfztybNegxUgvfaf4v7rwTjXvUpGkt",
  "key3": "3FagBwH4cJ5Thq1XLsiijYyyN7niFeEV5hpY88ESMSwQ1an9TusKbKHNUMEzytBBd3hWTvxJZUtm4TyRLyeR1zHK",
  "key4": "5WmLuMQS9nWs6DZfnQpWCooyETaMXiLYQRf4PLyysz77GNsYpVY9ywyv2rziow3vuK48jnDjJDQCgho8jZ1tEMsN",
  "key5": "27V9xCvYz8sYdz4cujWob3sv36Nj5p2ZU4waD2QVwbRFvN9AqXqragyR2RQ8bzNKyEfz9rpN6EMH5LVteGS2HJzX",
  "key6": "4vNoaVJzNNxnsaiydaFi3Fwg9ntcuDY2KsfW2jKKzLowcRGpmpy22JLUUMDHzDfw3yoohhH74MfHaHjDvLyfrf4c",
  "key7": "2TVP6hhuMMfW9jpriCdp5p1W8oF9uvEKNqUq2nxQS8U5BBPUK5CPiihiQ2E3WTytVYwwdYCt7yMJWoNB6jehT6Gf",
  "key8": "3f1BzRQJYBSWKuvfJgcU8kekXLe3Hjvd59S3Bu3wJUY11uZoz4rfapRn7UbsgLU2LBzLAuu3UghUTuUoreYtkZSM",
  "key9": "bzR8kw4T6nHggjW5DFJRKrc84N4vaCLWkSCWn5bwXTi9eH9U5F3qLJr1TvVi6935rDeFWrC4HhXesDo9kDpDquJ",
  "key10": "2vGxbD7LVBEGPDJa6M7Fq4BctHPYZQoTMgVJjyvr6RFYDKqSm9pPQnEz4sdkWqN38bKcK7veUft16CSUtUEdJkEy",
  "key11": "2uDrWL13Dh6qSpp3LaAxzcdMFiiSNjcFDfg6Log2pok58HsfL3S37F8UKkfmJYCf6fjCfmaWM6upLuEZ7mcKrxVR",
  "key12": "4YSBPgSwfY9MxnGUhDbm67EiB4BQiVv98zLs7eGvnyxj7Sgpgq1GNYa1sCXyt5vHbtsHQxNxscFxdAwGFaYkWbrT",
  "key13": "446tFB9D7F8A4xca4Fb3RrZkjAdXRFgE1jxdFbNNV1uj3y93aMS7wY9tufsf2a66sa8ce1c3yZCPwkAvPtMmnPTo",
  "key14": "TvaNXSD3TcjpEnKbxULH2KzKNShDBFHQvdVmBmmwrJBF9JyMBDfP8FFmWSM2JFnAaaGTkbVTGRJSbbmyK9jc2xk",
  "key15": "217EKu4CvsN4cvaumMU9Xs5UJDv1zNBpJ4eACUzVTeQpPoZDWhDhmuM3L6kQJTbsecJcj5LgfJPWbpoQfQVo1V61",
  "key16": "4z9tPJP5qP45hg8EaadPXBP6hYTswoouWJARVu6pJGWZwKC84M92qTA4vDQGFBgn1mP6q28VqwV1kpxYqp2UKimu",
  "key17": "5y5QcsbvsMjhbVdwWnpmR5CYBcbvXvLgn3n5LRm4uhhLGf86SkmECekJtDA5oHU8NCW5Z9xnppG9N2fgzaLBQsnf",
  "key18": "3fsmcqjUU9iTq6JFimSdNTm9ghGMejBbNZfnTbTTvv2NY589wSvD7UpLktupLUnY7hLMm7DbQvPyGAaHohJBKhTx",
  "key19": "39vwTrkai6kqcpLvAgfqTFpQiNFjuJJdR2n4LxRyaZhjptgn5dwrghxiwNESm5xuYp1u7NqCzK4YU3DaMpbkpLRy",
  "key20": "2YM91AqKfFiKsBMuoLmUow7NrQhtqBQL7SZJPKmC72rMTJV58ENjgwJ4pNeijX3WeDisbZUc9dad8A4VSfpJeq5k",
  "key21": "FtAta6pqG3FZB9izJjA4wKHPWp7WEKYW4QS3g1EWJNHP8yCB3D8pbf5SnhWGYMA7HtpJ9vZ5tpgsRCgQTnwxtB1",
  "key22": "4hu7uPLg5CgH9nr7KvGnpb4Np9veztgsT1PCUdZv6dCBn5s6TL9gxQchmCqgQcHSmc4M5n9Rka4jyfZXAdYBWfHm",
  "key23": "Djx6qZnr8UzTryADPHbbeqzU6UzS3zFmGtX276No3Pewyux7ZYDe6cUmKGpDAr4whfZ6LhMunx4V9SMsfx1THfo",
  "key24": "Ujov7PCnruaA6iSGcp9gUxTnA9hqU1PatdNeEeRVjZgCCGxSHVb8VcT5NsEnrWmuo5U149h9524WEkcz9FEtWi1",
  "key25": "4ULfSnyyMvYbXtZPmC9MLfWBRFZyoYabtjG8NHwbW4HipgCxFB6mpsGfE1iKefoEsMdZE7PchZzM4jS28vzbaYXP",
  "key26": "3j2e81SYd6EuPTbPLcWRCXryZb7kzDetdZ5dwNzXnMxFjB2pTwRPBSsLg7EMUiAKmwUu9Pf8wCGb7Kk3iCn1cjZR",
  "key27": "rUU1BcekahN52vnAUceVqK5h4CFAAGsMHKJtUM2D8WAjohY5GyjEaF5KsGMJijf6GLiEx3NF6kmRWwH5FTfYPX3",
  "key28": "WLu3L1kmEBgSWVwdXXHM3qZDt1oTioxhm8LWqS2CM79DBaxPYEiz6uYf76YN5MnajHno6Jk7BZBzGXZUujcbCQU",
  "key29": "1aMxhq6Xv86tdDv9Dr8vnLT8EsQ38Xs4oatqGkKV9gyFi9jfei4cA6zHoxLi1JgacSMTtB21Z8iJKc4PXRPtk7z",
  "key30": "2ox8AQWPJDnmTkiXH8V8vRV7n7TsTKhP5DavES6idCx8CoeiHDdmtN4Kc9ESUGfjqeFvtSsPLkzy7N43jJ8WgVmv",
  "key31": "2wACHqcgFeWBkGzF7ZijQHLfeHuHdXqDmu8ubvTRkFPuuuDNdZcP1hi7Z6K14UHvP7QD5cgJXw3iuP1upHZBuK5J",
  "key32": "N5uvPBidnFch1YMicdxz2HUY2Zh682Sxe7e3yiSsVCTsiKMZpF5rwTgfH7J2PUQKp7m6rDeJF5yrZ3BKn164jS7",
  "key33": "4E1R8FmJx45j4iyjzcRqZPAtnP2V2eCSSp9AwTVrKFF1JSuASQx9rdoRuDzhHLQzFkGiuxURu2f5uZ4RfPmsNsrn",
  "key34": "3ywbExSEvXeV24GjkmAaXmuB1Ae84reE2LHcm9r8dkKaMceceVqaYTjBSirRUqoJQJhJFfSSFgyEFpEmufUSf1hT"
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
