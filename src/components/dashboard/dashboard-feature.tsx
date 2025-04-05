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
    "3CpnzWq1zSTqgdwaZCN1G5SrizJaEmwxxZEPQQ4DR9UcPfTtrftCf1wkGPobWCTZBBaTsFSbExmNkqwiZNhZv8ci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NgskRdJmrai12CaZcaUCcwFS5o2NidNYQ7ddWogugkmPKEffKYnwXXL8VAsMTfTRC1cK21UZi7Dth8aHnBa9BWD",
  "key1": "634X74XpWrYvPoLZV9KFaBaAAE9qv14dDVP8EDsYC34erBiF1pNa8FJoLfchzNZea2W2yytPkvjsfw5XcQi3AjWN",
  "key2": "59vVLhSBKAhHH225LPZNxfJ5K6zWK5uizbSpgyawGWLedJynu88hJpuVvdv5EhGN2SoXS49XiqAAy87iyNxgHo8y",
  "key3": "4YhGSkyDAcvJNb2szyBYtDQ6DzXE8NhAYmMD5eNDeH3FSjE1cm44VAbJGLvZHcpGZkYHqH1fGvUomCmcirJHuBoh",
  "key4": "2pHDaLG4QtqCkbvquGyW3e5NFHGKgBFRfVzYJaYK4qCugJhHYik7owFaDQcrHkDXE3Su9t3xgUeF4WspeMHn5bNE",
  "key5": "3udNakA8qBDWnsVchL8JwGLxZucbHYNEPZsbS2UqGHnbiSz3a5KUA8athrWxEy15h5TF26wM9zCucCHgZQfPSHAs",
  "key6": "2F9RFGJyTA79dzHEg6BGv1vgdoina5qg1rSXfffpQq7qFmvZNBeUFMATP9Cucgm3Jav8UBSRbBYiLTsty874uDse",
  "key7": "5gWLDc6p5KdNWNC7V2cuvTAC3FFkzqGbFanZu7ByxTXv8JzvQjjz8LEcqiU66u9yqegNvHhHcZciWrp4YUrEz25E",
  "key8": "4GEdcVn4bgPkXKytab7VCohW87J2rvitYUy1Su87PuteNCKMx6mfwUagKzcBz3SN45b1XJkFDgCpoA6jsTtvSrmk",
  "key9": "4GN6RXtTRTELUhmNizoQk7tk4oTyH2LGUqhhxCET5hwMvQ34YkjsyE3FmJi7xzPD2qCHHzYaLqbb6zNmXVxPUXWb",
  "key10": "5utJtpMcRwNjuuvY8zTtrDqWCBeyVM26QKh2yyurLMBXeZT8aVNce1TGnyzcYhhnVKuWCQYTbt9oWv4EkKEdBYoE",
  "key11": "bAwLVRqEzAbvMEkGAyp5VCanNFFnaGpwf7MBbRajnUhLas816DiV4MoCv4PMLDpsUK5K4b9QDfJyrQ2NyjK6Q2t",
  "key12": "54DzAVQzgmTw6MsFfrx55bWY5TFJ7dK9fpzC8aR41zPei5fEBP2eNLnu162DWXksKFJDLxjATdRpqJTC6DtgWdL1",
  "key13": "4JKRatvcwov9iApNpfpXZYoBXEj5ZfPmczwiVTujPf5sjYymL7mUy4n4Pw2zqEgmyPwNCgUxNWa4exv9U2LqfDB3",
  "key14": "SueuUwFYL3iPKRMMQRYmRFPmeG4buDD1EgziDHohK5eqRQ94rQRP7aBPDjbDnUBVTEkF9itdYuLn9kocuu9SbzK",
  "key15": "3yMNLpCe4yxyJkMFnfANXKCUiybB8sVVJo4TCZ69B6VFR4hHcaJZEdo84KyueRFW6RPqGHonrZMh37kTQNxNbA2Z",
  "key16": "2ZoQWFdD64LN6VcJ1ChvFTYBh19yCkAQJwjD7gmyKMK22qqWzQ7HDYQagYva8wn1qVYxAmkbq4ESae3bRAh258sU",
  "key17": "4hXxpw9AXCqDpn1o5XA1AZ5wupDTZ4A9snoP6ESYWhSc1wcUEoZc5qvb1bwgmhSQK9v4UZimcxEe4rUWmjwMu5m4",
  "key18": "g9RiM8Ca4bGzhE6rsWa6Q3YgWypvoD79FhYkT81GrEgMDA3oUAMSJbncgXa6cCGtaCcqqhFifcPiscwictuc6G5",
  "key19": "3Qqn65xqVKApusYvFuWSUMnmxUzUzUstCG57FxjwY9RwRCKPMJdcH3bhDyYxPgdZ5UhSzdPbMR23Xt5vHpGYRsXp",
  "key20": "5iT249MrweDWJwfdEdkkzSNyZYdJZ4aan9XK2taGtxwzreCAHR1eweKq9okomQp3gN388ceqvBscfoP4RckrZNfh",
  "key21": "3CptZgsw19pg5PTBbjDiydEEGAYsg4TwvtCqtcFwNLSa96pRR9V5owm4qBoUFG3zAbWT1LygGs1G1KckR7TdvWbQ",
  "key22": "SePNRdESKBbw51sPkf3542QHCpYqWQYGSvRy4PuU8kKkV3LpSnVH4oNzMzGvBnRGQG6nmcFRs1ntdD3kukooVzV",
  "key23": "2ZdiEgcZk3m8t13H4xgzePMiYPqBPoaYA9QZZFheojvsJ8AiwgCv4xZbke9zdLyAjANhiPYd32N7d1kEWHXGBgiS",
  "key24": "3mdBvq1Mb5KTkEuhuCAUvqqh3CdnhXF7fgh82W9zoxiiSDZygzfAXiJLDViRutcNNEnzsUfbKmEdj7qN6t8DCzRN",
  "key25": "5hXV7y92V2FgF9nMyjn334bqKHjRHBF2YXQKwCq5wTcMkc61a4znsaocKKkeNSBAvxLsu2bsRF3NHM3gQcudUopH",
  "key26": "32ymYySJ1wEPiqL5wgRq1mwCCPK3TN6oakUHkWqyjHzNyfPnsWmtQbs5XiuKMFHE6kshn8WemoTpPq9H6eaKHM8J",
  "key27": "Kfo46erhWLydKVaua3ffEpxZs9G8Yc75wcaH7TqBV1NfDioqX4ZXVXZwtvZXq5LAEjNbFv6ugkcTRJ55JJjsh96",
  "key28": "2atFnqpUip61Y5ocUnVT3scEJu9yJky9rZ7EDZmnhYsjMnyrxASuUjsKJamYnAUwwuZdaLPiUrauPB7zRMErY6mh",
  "key29": "5uNiXsBY76LcE8P2tG5BAUxTKwU3pMcJNW5hheR4mRFvhGCByd26WM8c3zKSaaHPADLfeYJ4yyeTswwRbNy8bwLf",
  "key30": "2gxKJURxztBTYF4LxaJpRXeAbHF88MoSnn2qAcfeAyzauC1vzwhSLANNauDmZxu9fuz7TNdE6mQxy3ogteqHJvP9"
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
