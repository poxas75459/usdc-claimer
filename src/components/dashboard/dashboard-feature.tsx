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
    "4ayRq6XeU2YdfuczkfeQeb8qR3SodsTZAHRRap9yiVSCEdfxCxmk9UkM5V2hDPauq9aA8M8ZK1E2ns3W6ooCwhqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HAp9ntyDDLEnL5zkfPqt4ghbUgDMi8Zx7YHDPwpUYP2znTu3NZexB8dfn9BnD17YpHpk1YFWKp9FZGQgL4SeLDS",
  "key1": "3eJz5KwEAb9V4egxrspSwD5mMDCgVhFdvBvP8fp4rJBu5cUYs3gk23VYPUPv5iY5oV8NTpwpwdjUB8TH7zHPZVTx",
  "key2": "4mMBTsrZeqe2256J6tY22QuE1rbHgsQVqZtua9oD4SfxBfVcjcTpBBmrSBsgGojZHMjVohpqD9mVHcxFoRgwAybs",
  "key3": "kVkRNSG8EB36J5QdmgequowUXdQMVQzNdJzGwNma9N3wgMAfMg2eD63YZvi3ehwqpc5wUDRQRZjEVYVacqdmFnx",
  "key4": "UZL6e8ZtJSoiidYrWKkW2CyVhMNNT4wJoiAsENKoEb2T2fPsv8ZP8uJ3soJH3z3LLfuJ2xPp2tnKNHTEDdaEQfF",
  "key5": "r9uNGbrbUj6NWZTFxjUEefiPPq8swhUNQWWTQ8TvrB3mbpHufwDNvRrQtAcFuVbrDNibuZtySeEKJhAKNMtgDcr",
  "key6": "2DdTXBekdc5duNuUDFtJpdtBpfXxSej242wJ2MF3WDV3BrwfhAe37MZRS2RxDCGARhw1pecBPGmfba3yDXHQc2Q7",
  "key7": "5eA66S9yVpdaLHPji7mmpWS3cACy9DaisgrGSje21BSKfVoVQY8t2nAxsDktupdM6tfj8k7szBE2gVcBBnjezHL2",
  "key8": "3AaU7KkFQfFWZ2gKQ7WfLBcz3CJGvqQaRoACpdcp5fcrYbmH8mcVThAWukjoKvTUKaiUx4wpK9oWTDSmuWhatzLb",
  "key9": "4GBuij7MGSmEtbjcG2iSxcLKcND34t8rdButccro9ZBJc2yhahUnw64ya9FQiYDanyyEbeRtFsyshZxpPVFUsC2m",
  "key10": "3VYvspZy5EmmKH5exRobzGx8LJbAsmZV84FiohwP2JeAr2tTKMLU2QCTYk5PkZz5AciiiZxfe9cSTbdFtvVKnaBW",
  "key11": "XBs4PCjr6r6qZ2epc4cZXvPc22SixoJixSoFCCs95qrgUXPjWLft5EC8khUCuiQVrbwARxAj2bAe9ZmWZzSdVuC",
  "key12": "RcM9wwhGfD2ZLGTL6LLcneKBq6KWKKY1U8Sdxecvqgz6Tz2iyuh9RyqShcyxxu3LujAEzThdc9VfRQHtAoDso6M",
  "key13": "29mL7qt8ixF244W618rStdJNRLAsFCK4duSn61Dvk3yxzeqvm73dvk1hjh3dr9Emx8PUfqV277Cep6kSR9Dgqz4E",
  "key14": "57o9Ktt8BXggBiChuS1X9J5Zy78gtsmrdJzfNsYihEoXe3Tir7qA5Q3kL6RSZYdGtZQkhvJ9M4Kqnq2JMpoTmiLc",
  "key15": "5v3n98Q5B27dAyg4pPfMu132ZamPsJQWdvdXwTLb2xciA2Ke4VK4duSZh1ujHDs2GaP732PqPDNUisQ4sRriZX5F",
  "key16": "2AGdHkBu6uWQMMzgsdhJoeF4xuMSFf72dEmR4VFZecRbFqz5GVwF534omm3i4Z946r7on5QYcEMLgKSqTqHmGEw5",
  "key17": "4SYaZxynCQGXRhEZkkmGwvXTLd9V461CGoWorHPXDvjH4kiRXxxTKSTT9rTosoMcD74CgZNfnixAvTw2qotqHrF1",
  "key18": "2678WHouXrK28NvF2CWSRCkHMZiDaYVaoRbZundmrBdTBfEKhWCzPaT9eSwVxTnmvP178mYHy1qX5cgYJ1EVQB5H",
  "key19": "5RDQ2UStz3G33AbhjFYwzaakYwJ9TD8GnrXonz9DFaavxWWFBaEDQ39gbPHnisM4jUeq1GLzfihpw2hm9Efbov6U",
  "key20": "5cXM3WkrxZ9UxG94KX2AYc8ERGo4eDSYoqeCJtppmdh4Dvp3vWHd9jk6SaHstDLmVTf4VQ7xRLkrDyhxoci1eWSe",
  "key21": "3Y6AnnC31uzCtWTwymLs6x2e4c8KPEonkAJbZhd4Ji4jZ2SsNoTr2jC9fTdCRsEyQMQUWJd8Fv6VTWuJpBJvZVP5",
  "key22": "4sYqBt6Wqs36FvUgfYyX1gexwZ1KgQZ6wFAuMAa9usGtq7GpxbmHkZfVJW1Qx75kRaw9omhd7HJijPXistXDXYTV",
  "key23": "5AX4XgVbFgGz33iAYkfXj7FhEAXt2pdM8GFGDHWX5UYCWmuX55HZiP8dfYgtZ3eZPXG43UiphntpEshSPGqBG1Nd",
  "key24": "3FsUDdbdBGDdv7h6iYdBhhjiL4411umVKHntxwM5SmWfGfVCrPV1ztWSJ3rGENRpjxszwtfCgYUJjn2AVmpSSupi",
  "key25": "sNPTawarYH6Wpo6ysWawxLvqDHETEyZi7rrVDtXNTr5w3FMnNYCSTb1qqfs6bVr4hAELF9pBP5seF9mU4CBbJxC",
  "key26": "2UJMf5M68MptxizcVcedNuP5yamQgBtuyhbPdvqiDVzKTJB12UfVynZR2K9psBz8qNothDDDo7vY6tU2UJ7hDocu",
  "key27": "hiN1CUHsiJA2WiqL5ehjhHb2MSsXU5SSZDNcG5DVTt4qSAHz8yxC1oLWkqfxmekzBSub2LWSnDJ8u1FqLP1akqD",
  "key28": "2Q3ZHuKD64XXjusoMmeSdDkSpipFRsnekwKM7yGKBNstzNVLb8h5yS8Prbs77v1aZrF8AfFF68osdfyUS1v9Ynbz",
  "key29": "2pcJFWaPHT9DHT8nZYjkvagEdcAHg7vuYB1ZEBpMGSnBhZ1tEHztZxQGqSRoExV5UHaseM7eKm4qAjS8p7njU1RG",
  "key30": "3Zq1VVmsNWkn1yhHf24YTV5CSSruLdULEeWYSQffknXFs72nBy4uKbr1SYSwLYwsRzEgtEfHmwZHZGWPdBAK5Vn1",
  "key31": "9Kqw8F6LbE7EHZvMY8wqmh2RJUvsodMeJwnUo2dkrVyqykR8ipyE7SCiNc94LWumfDBBp9C7jYhKkT9LFoG7c14",
  "key32": "5edFHdv9KqjFYUbhCxNFjxWapPW5aAgFkHQ3tnwgtvHYYw8b8zL7g7KCueQ7cgD249NL62bEgbdrRV11CyLknr6a",
  "key33": "598sLADiy2wTULRyGbW6XpByxkDX7diZPQjFksXpiwxibzgVnt7Vyebq9Dj3dcDHdEdA6ca1YiKMvX123iz3HpGe",
  "key34": "5sQtiRj1jG6PKo4UjuURipMxhPxwMkK39QejuCd5zPgxNdbeQqrTHELBaFNW5AFRt6ps7f4SueUgWkggeiwY35nj",
  "key35": "39w1X9EaFCSR3bQCxH2JkJwub3HDZiMD2vHrAChxSd91z1CyRagCvGumVT8Hmqj46fBNdBDvP8Mr2mioSFWpaoC5",
  "key36": "3eGjQvoB5u7Bjh1Zg4cqFy6Aa1nHAbCHDmLqjDad5V36Rk8CKArAS7fa4H5U8NLxdyphmUreBnRQSGrNAoxfb1F2",
  "key37": "cSYk3gHycXUQaJ2cM7WrqKoQwjA8xLAdYpGgtDGRoWLw1xjbJKSdxawoYPcQChukWbbTchB7hGSFvEahmYfRj53",
  "key38": "3aC9TuxMJPxvN2ZYNBodL99Czy4qXjjQtXHDfpvmpgGooMM6cY7VDkruE91L4cyBBBoikkRV71efXD6nAi4vBNH2",
  "key39": "43vD6yPeVGYTZaqq77zFKMHFMSuPfh7hAQTGaL9EQW69deX4pnpZ4EWikMsnTSFz5PMmwcNzJ8fUwwNawGdZ3Tbf",
  "key40": "5SuprT4sdhPcYtrtNDkyzSMx1wRSW2q6xBmBxRnSBnv6G535jNGjiRcTYyrLjjYJujTFs3wbQvonSFwSX83Rq8yZ",
  "key41": "69mAfoLLByyMTGHg8MQ7H3Ze5om2Sqswq8WXKn9PMbtXgDBM7ucHsaxFMrpQyzvY85yLU3VBqHLzNV1X7idnJnD",
  "key42": "rT2AQz7hkxQUoiBWoGZzKdbkhxMjS3s1c9DoL4CFvuFbcM4wD4ehxAjnaPLx7Hsxm1AuDQYyT5qMG2mY5hqDjqW"
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
