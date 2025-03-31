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
    "4jesKqUTonoKPrWGGM3ac3VPZU8eBMLKQbns3rkdZvXCrfhbKXVaPJhAzTmn5aEuysWiNS5BieAe1daT5x3JFT52"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r9YSyYp7ihNRwLFnjxQ4RBwYRgWcowi6JwkqWkmJZ5RsrHo6trNBEcTNt2gH7xNXbnKD99Q3gHcB39R7YrCbT3t",
  "key1": "2hKCM33ThXKDafPwAugGQxw8FMvMPkSK4rr3jX5pxQeZiUQt7PNRamQQnStb2gisKnkCJzZZpNofoGSgqd4FRzCf",
  "key2": "H2eG9NU4e5FHVdZpQ1o6a2mmn4hfBL1r9hV1AXmkv9zYBJRzpKnf4Uidsdu1SqTtvk5RFJEiLCnqjy7AwX49wmL",
  "key3": "44drReYQWV34Fk6qXYvPygsTeZpKsWTSHX32LLoywr37PBBvBsx14LgEDTuk9Ff4QgqEbFvP36fsZHR3MQf3kL3u",
  "key4": "3epkNT9Ahq5HYA378desyK7TYvxHYCYpJaj4EexoqjP7Qj3Wzkw9NdX3qtD6gE5yEotPfz9tyikRbj1pHJhprk2v",
  "key5": "xfjkVbjCckg8yHLo8P4em8oc7Bjm3oNgkBR97QDVZWrFQ1rCQysAi91Mz1Ueo2u4a2jFWCC8mwL3pgeJdr8BMd7",
  "key6": "4tyGYH3v5pgpvFu4xFZY3RwgJEBvvMKRnvGTKjJ65axHZRiXJ5S4YnZwkmZAvb34LrHSfGDK2sBXChZUHhSV1c6h",
  "key7": "PNWryoV6Q8fSJ3XE6pPEww9JtYcukSRj6YVXdSiidP3qK1StogiFXEHGMTb9eVREGds8unum4YizheyoYgdo4U9",
  "key8": "8k4FWBsbS5HP8e44auJkTcdAsvpfusc4ynVd74MtQq7TbMZtxbypkpp2V4ppAuPSEaBoZyVsNT6pH1QFaFKT86k",
  "key9": "51TuGcisfv4UT6wm3hBzxvnjHqNuj5omDTtAgMkrLNPYe4gvJBKRex43qoaEDSm5MKUBxVyCuGb3k9isMDpcqdmh",
  "key10": "5hmAimeDs5MLFAS7tiYSHynTXBJHNhtrdxjtJ1wKcaenafkUiLXEa77J8MiL6cMJfFHAb34HxdxnTX2bQytdV3bw",
  "key11": "2mcipsPST3C3rnmS3HamFV1BZhP1a3qDZHpHy3njkGzTZo4KusCBRhH4YTbCb3bpDa3zJDkXF6jnbnQkpjQeYikx",
  "key12": "5jRHfCyHKTAAf8f4znS3t4kMd8R51iPYVqscWLqjW9BGpCty3iChK1rWuzgjHt3pRj1f6vxH7DWVs7WvgQPw1umQ",
  "key13": "4mMYp8qCiTTHsfs2QF5tzky7VoTSMbpLSbHGbRRPnmX869EkgQaZp5C85KLaWaKG7DaxEsDPMADihG1ukcD9iAoR",
  "key14": "2ZwjPhvxFFui9Bz3q9YtYNxRU48aFX89qytsrGp8WPLa7F1u2oNHWtDLoHeqKQ34ayPgNUGYNZoXsJMBYrtsEDTD",
  "key15": "5puf8TqSxgVAAxL6gj1Tx6LyBzRUnhM46HkyGEq47UxSwWUC1LEMXRpk11PKE18RgFK1zdb6h6FG5sE5ugto6Pyr",
  "key16": "2HMZ1c1ggKmeSrjL2ATdvQwyLQkcbtCxM1vgcqNRmV3mJYuxVMiQ3vwg87ffoFw98r1c2Nd1Fc1b54zGzZQYSf4V",
  "key17": "4cxmbFvfxaXteZpBGGxB6akcKnd29JmqztSzY3n9VM2a7Xm2ezcTKrXEnGSX3Wor2tueecYaEnjT45B7MtS2TWVU",
  "key18": "5Sr3gVsXghvdYYuweCwe8FLpKKZfgFpnJrEUrksT1V6UHaZSRxkacjXgMB9RkH4vnDN8YB4kjKb68adjr1TUgPbD",
  "key19": "5CmpXxqJrHwahRZEKvZRuxA2g6QuGhSQ2VddGHCtTWsxNSvfk18xTUKDJsGdvqyNSk4SBorjnTmXS7y1ZTQZSyLJ",
  "key20": "UG2BvKtN6RTau1BNXyCbeJgrUqXAMhmb5fEXUdzNDFbvDJdurDJ2Ed7WwNHLRXRg5Yzdx43w37jEfDShneBuLSc",
  "key21": "5SyrqTihv3p8SPAZ9nbagQ4vvS7d693PHe2iJYVXwu61jojKJGZidCUx9ssSsE7txidHYvmCRh9KM6dd7WCjZB5m",
  "key22": "52bbUM9ygqVZEG8qKTmUjp7twogTYpHppnLGDgsGJjydmztKhSxBrSBbAYiyYSqjM7ZLpB75G3Z2CYJMzMZa4CrT",
  "key23": "6EPWpdJwp4bk3in4TsJbE7QjYzC1EetohddSXMG76n4fdbyQqEo9eMaSLr1NykXun5cwfMYqqPUMhaJLjNVTppz",
  "key24": "4rczi7g5UYRXxSaLjKaCoETHxnyFxQTHb2eiKEQXRTdeNFVZNreCLFeTpx5xSMyRsbSB4WBQEs2vM1JgWkNbXcqs",
  "key25": "46yR3PG9hM4swfz4QDYvvx86qWKHsfJccD8wfjFsN7VzpZVjRwd1x1qouG2PR6K6XNZZcnPuSV7U9LT1DuhETDwW",
  "key26": "CANoAcZ791vQqccGdX75N3ZcEbpF45fs5ZqFJ4ULBUbd9Am8qDkxauu3vGR7fNEJeZEb6fWRwp2X6v9h7esWyyC",
  "key27": "65hhJ9X4N2YczZsHEYAZjyCF5R6gVESaNyLbGCJySSMVuvqDNKvtFTnDpbBLaq9V1mv7JamZvAPkemf3qH4Ye3su",
  "key28": "ytrphcb6egtjFEsKiTgq5VgJe2K2QfVLbLSnoygP1oB7uBLyLipWPdsPEzjiqX5csHPFq6Rt7yHCmyr6at2swG4",
  "key29": "cNJNs9hq3QxVTQTnivkhLTsiTsQZYmwhJM39Gpdn6zAPTkufivs7GtLBiTWUUkKwo1WPxZueuTKDFaysBciCuC8",
  "key30": "2QSBny6UgqXw3C987EiQT16odNKy3T3inmt834mYzyni8oacWmps8afbqq3LyNLxqjDnuJkL635LxieVaM3i1qS3",
  "key31": "5nfjne82DAKBzyGGup1bWv5ftRZyfLGkmggGEa9V8sbxxSgr971ZrK2RWzstdsC4vH3Sts1PvJmCAaFZd9SxCRM9",
  "key32": "3TDCc479Tth3y7tdd8zN59zmHRw1SvJAuTSFXuYoNQSRbPNaiN8FSQv48VG44qKA7H2mbwKYzgZyj1YDAZP6rdsP",
  "key33": "4DF9HMKmCW84NpmHzv2DzyAzJKqmtZDHc8usx3vRhmNnZCGJBcBBNYMMTPwrWS4AsNvLJxa1CY572PztDwszZSV7",
  "key34": "2fS9Xt2Rnfksb9AS2pqWeF3g7vKh33f6MqbJmvMRVwpcapiBMtgs51SzwsB6Y8NbLaAg5cMF8dbpDqwZJYByAREk",
  "key35": "rG2GFTQkD5KJqYrviuTMqZNiLExLL3qrtuNc4iDtD29QWXS6HmkPyX5HuAFHEiEm9etAb26h23dJLSxuL7bvHJ9",
  "key36": "5r9QFZyc3wMcYV5zZUmZL3Lje75DM9Xx7Exc5BzQiqb5TZxqsYTg89x73c7Z5oMCTCGc5mVfhsE3oVGobEiJnUAQ",
  "key37": "4eNYzihUUvQQmye5dS6m39b5qTPAc9zxhTMJ8fjmXZuuKas9ff27QB87ePAFSivVeUNBfrcGi6LmdUPaFEUq1jMX"
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
