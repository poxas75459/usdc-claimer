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
    "2ygBeQ7LvRwSZYKQP1x4MmfC8ksKbC826APwUQKUwLZW4Hd2jVuTZ6F1eLNPBtZmytweUKbdvBSkm19pJPf8sRP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SRBKQCtZdaSgQtBDQAU9vJLq7cqe1732RsfLKRDsFVjrFfcvLK1hRaytfi8ggGKDvFS5fEND87D3WFQUsEFdxdq",
  "key1": "kNv3br5pwKzKY4QE16NWQd6kShj9ddGsF9djUdmG1aMAtNnGRJBJyf9Grde8fDdxaZVZPLQpbFHRuamHnYaq2R7",
  "key2": "67Fm4CmhD6CPrjkphXTy4BBQktHuPtKTWsUHgzY9Gz969ijAYAAtyCvdhmZjdv3rdugDagtUeUySEJinjT4VcXYF",
  "key3": "49DwgkCjg45ne6pMDxP2ywXdij7LYCkhqmkycLLTQBvDdEfbcGCTsbz37yHKF2CrhoGGDtTUA9jxWAr3Dc6jeeuL",
  "key4": "3khrmwzKzbkoe7vQUWxTQo5MP8ZizefP78rfXiQUXdQuLsuhdZJG1s9aW7dJigXdKiJrPuME7X4AUASQ6n47J5NM",
  "key5": "573R7kCdZ7HmwVAde7yYQ7h6HaiPCCWRYVZYANucaYwT7hcH5hMfTFNiT8Krz3d9DQ2xxtyTFARuDZs7hKG6JNe8",
  "key6": "3ePfaQXzM3gnizd7YLWLfb2m4u6i5wAqjmdQVqZYr5JbgrP4AwvcAxnkrf5vnkLbkB8kMAARV5uMbHuUysdVR7nh",
  "key7": "4NXKA7N6hzTANSELFMvuYSVpXjDNwfXTfu7BfHmDicdS8Wqk8Kv6h25WoTugCBDFk4HduszN98KqKSZoCduSv86W",
  "key8": "2QR3mkVGaSUrhuxexLkBn77yeQfi12qC5wCFz2vW96vppUP8edjKegHERSEXHSXhpbZrtdniPDaGAMuX9RVxaYPF",
  "key9": "64JtdngcF5euFcAsp1vPbkkpgZTDkMXimdDMVH3L7V1qNd1wd51gP8fBAFB9mKopocEwxNRnFJaYe9u6T1sofsUz",
  "key10": "5qqXDDzkrTtsntvXkd1gRw4tYVaUBcKY1AzGDtpb1aiM5eqeCKeuRqNSWRsHNKYw252eQywAHdQcZ2kBmwceGNZ3",
  "key11": "4L99ZDQpU1BvdcjS3kYqMdXC83aqYxx1tVnHpKtTbBafkZ662b9HPbCMGkpECEF8yUe4Ynur1E9yvVpfa7nePR8T",
  "key12": "5NQ3DrZkimTas8bRT44exjdxgSXTCiEnVB4qQkKrsWo5NVCEFsZPYhFwYTvu5pySNX6qbXnqrJ33L2Nj1hjzsyrU",
  "key13": "3kQwiCgTxmv2Sm37TtsgHGPbYRoXWZeoc3kKmPytvzehNp54B3oBdaEKEvkT5FWUh1tZMcs4xWWrTbdWFrYxra3y",
  "key14": "3Sn7Zq5iSkYSBEBwF5Nb3QGRSZHxw5VoybqAogNuuBBaem4d1qJPRDd6i3aN7zA8ybr1L4BriDkU8drpdyrrnwvL",
  "key15": "24XM69YPiBv8o784qveX3QrMyE5Hbx9DEkDQsTrTxe61r9L9B7iQwCd9U9EbJ4sqNrVUkL8d1gWqoCmpmJB9UPiu",
  "key16": "2dmHMSx7XVsHiQfLmuYmKcuMCtYWL92dZsccGZRMxvM7JxV9iRWMBFifNAMtNhp6MGSjw5ahpWjGh8tcuze79Nxa",
  "key17": "3TBLDtY2qaHXKNCJS4dd6PhYTv31xdS1Phx3mQcYGDuHTtMWby2uAy8pvfJZAjUbwzCHnkUcNX1grqhX4fuvLBfy",
  "key18": "42zHdDX5jz8zjmMogzp9QKS3DiFF4znungAJ2KpgvKW5P9S6kfq6GEXYjUR4Eii7duTNZCWiC2FHcqg1VffF5yK3",
  "key19": "QpvddNDbo6yAJFPQq5QcnYPi4TcVfZ6x9D9i9uLhRCuG1wDpBeY4qwAZAqczyWBPkYSo5PYG1GN2x1wzP68gSVs",
  "key20": "DLV92KMpLU37hmMzPgqNhqefhFHiv5H5tfTZjWsAvpDs2cXUzjWBoXonBgRnSTTr5XuJR2Exxbsknef8uknScoG",
  "key21": "2gXYXxSM2wgcXtCqVVb7czsuQhUjh49gB47t75oFcaq9B56jAdwURaz9AeziAfMxC2QvBBMd8CZGVoPsFu43UNsQ",
  "key22": "5PF5aX8WVioynq169nRpGPfpNm4BDvX1UTAMczZR6TESg2g247bgu2A9Z9m1NFjkMVoxNwKAeroCEEttanXJsyfA",
  "key23": "5hq3FqbhL39izLL9hAfCK4sRpKhyYMiZFd1pWsvcbRPN43jVZ4TNMaRBMBX37V71AnMhBErrrQMd87ZEFAgHQ6MY",
  "key24": "2ivsZRHBJmJBw8wKU8HWG1MzCV9eFAQDfGZrug3PQEEzYU9e5D9Pzyic8EPAMvG2wfpsidXXCxpzXUJpkJ1Dvk1n",
  "key25": "LggtJKSPJV15sBQeB5xuoLJz9aBTbw5GkiYe1T1DUjXTfBEucnE9AkSFzv9RGnus3St9kA6Lev3Qkz9BqCsyhBs",
  "key26": "2kWPGK6ydS4AAa6a5ZzkMuTqh8wMGkkzkb1sFi1P9zRbmUEXNWwxL5Z8VMdfTRVJpuvYBmWuCkqUQxYwr3yRcznL",
  "key27": "5BGgPyd4hthknNBaeKDKxfdhKn1jjKn9ZpQJYSpx1cN4tSoNG8hHnGFUCY3qPHGFDzZAFnWfDBGPUiY8LWoromJD",
  "key28": "hitZArL2EF4YKKZqk95FuWTxy2LMFgGabiwKV8uWJJ1tibZwq61HaQeVHVvuQHeY8a7sSmnLJTSpGD5CkBQHjH1",
  "key29": "4pMLcyvqh8ceqXMNMXe9btK1KZW1DmBBVrGJDCtbcMLcKyjj9SMiKqwSp5eafo5o6JrE3LDfiecwKym6gwMP4x8D"
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
