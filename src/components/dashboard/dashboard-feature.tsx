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
    "4sDRcR2maj4KTs4UMtX2HSCiAxvQPvJzNVe7aDaiaqTe78i8kXfyGqQ82mz9gF9eBER1FvT6hkkHY6nXYTBC3NYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31Ho8y6naXMuS1N7a7oh7LrvzZvSCVyQg87SQsjkN68N9LcPBytnKgqkfBSvxYpkmHFH63uMZUq8f3i91ZbJnzkr",
  "key1": "63RQXPcZCNB5KTtvsAV445yMzrSytLd5WW2UUtsAasAEB6WK7e1sK23cU6suzYHc94rNG9Z7s34aHwBNTraAobQB",
  "key2": "49CvfRPgx97HhLoaQAYrJJurZ7gAYkHMMM25751UcmKim7z7VQMsxSv1zrNycnTbmj3rtVUdhUHXuNnn7YhijXqm",
  "key3": "3hKYULZPpiy1r62UMZGtZCY6N4QowwJmkeP6QVqYRJwoUesA46UqP69hskkPiH15kctwbDKbXxa7MKaUW7qZMXCN",
  "key4": "4UHbfEccdvEXSp6rd5SekAPgbwhk4KHfdkdt9KA7DZMT3yaC7tEsYGxmVLS5GFDdk5bXFsEtDaXENsPswbPh8RCQ",
  "key5": "2tPWrmPMbBmKJiLRFk2c4UZJ9vQyiRHB6LULBggJdHsWgpoo3f4qGaEDk2LuA4FoXcMpz7HhcLerBd6Kg8Fv7jtB",
  "key6": "sDVb6JJs9DJA7yAtbBrqj4SLcKfBEPK5zvzs8XDjQpZJCCH8MzMsxA5zRcnj3RdBCUwumFTZMYZrCWHbKnFuc2d",
  "key7": "4FDJbF2GbwyTWJgzKyQZLzLqCnHGuCdCBMeLLjoP9GXYZN2RgwzXJu9TAyidEE1BwaGXSSGrLhXZ12n1M4tDoGQA",
  "key8": "2bmdNskGWCJDCfU2HEfaGBT4ivTdecijLF3KysNGbivexRDGXjvP8gTDe8cEbQ6HYWrU2zKe3fmA1jutRANxQq9y",
  "key9": "HAK9GFC9rk4c7rzXSvGuQ36rA6QW3HycSwnUL8SfPYaewNNDGpUHX1eyD4sXfih3Q8yf7TR1kM9DsdYxHLvJZSu",
  "key10": "KpQkwQEJ6EBBsQnBk7q53BM27EJkPAT57S7g4CYa9mhegxwa2EP8zxR7awQfcWEoW3if91WFQyQqZ69jfC4oPxR",
  "key11": "5wZAKMkTD7YVsReD6kezDJbs5q36iHCJj6ZuT11gbmSdMJ5gesPNshJyDY7gA4vNnPb7JmNbEdWsCi6PWBt8D7yA",
  "key12": "UnvyP1QnjU447KTHQc6zQvuoVuHWe1CqvTrdc33aEuXcVA81yZzWTckwh7rFKhmSgqRo98j7Z1Sb3xFrdd9Y5u9",
  "key13": "3xsnwS5hGWB5pPRnww5hBpiWjj9vQS7BmqBWwfG6zvAEcNTWYWfKJgPVxQjbzfZaqwwqdnJ8xxjiPzdEerJhcZae",
  "key14": "5NYxxeVvXG3p35Rgf5vzqUWh2xBDmiuz9GnmDWyJEUvj9g4tnxmCKtkDt4ASYgknY6X5KPCTCLPSy41aPG9PkeDX",
  "key15": "21Hd3G1Lj2AHPZxAQg1A5ePcWcR3WfgwMg8mtnzxr4KR2toogPGDXqX51ggbmDUYU3TDDaCf2FWfeuDRsXAntRHs",
  "key16": "4wbvvfd5NjBXFtS1NctHXpKM8mx8S3ujTn6b3nF3Q7JPJn2dfjZKQNGfH5Z1wDy5oDmv6o5f4FPgHAefqYHUzmVu",
  "key17": "5jQDTFgqqE7TZGZsq3rL6rQ8NfMHbh7oLBWYTkZqKTXiLi3yiZDTgzUTtNCRsUAwNE8JwcwqukaMtJJ1KFv6Qr6u",
  "key18": "2KrmFXqspTrcD4BidUGEGaMq6hNSBvjcJns37LND6amzagmDW3mxiT83UCLkZRJ5oTJYaarfpF51oZ2y7KYmH1gd",
  "key19": "3CnDNHqdpFDsCY6SixMBpeWH6egD7NL1FyCPeoGdjUifYNsMVWom8Ht4kMCvT8pVm9TPY6DWdU4VMhbQE9aqCovG",
  "key20": "3YYFXkKEzUb3dg7VBL3Vj2gzdcSdCbYQ53TsnXz3vnp388B3TNmW4gq8GkgYBCJVXJ2wt2KiTGutLJ3xoasw2qYF",
  "key21": "3jVkVKH4un7sMTRuFsaNzpcpTPJuy1sZn2VsANhc21C6FYEe48ZTRHr2ZYUVSaSjmg2UAVgtuVf55n6RrDJ7KU9a",
  "key22": "pDcoTTWR4u7R2EGfTzuU1TnRzAqdp7aH6qMekm8yymCWy31QxjtsSwrG3M2BwSxzkbWvViPsma92KLXNGC4xMUk",
  "key23": "2f1VGCXorGMW3ZqaiA8i7U5XkXYLB34xQhmR5j8rMjUp4x51TYNERSo2w3DQcASop9XwSFrGwyPFXrWq6LAKy3Zn",
  "key24": "3Ejwx6cGoPWAfq2dHoPjYHtosh4RHa63keWnXy7Dsq2hdfZe2GwFf7tjAPo6ruSuMPJvHh2K87ozwFLHherNfHzU",
  "key25": "5FyHtPqRei7ZgyeJhYESVq7WBR9JBMjzTqMaxrmUC4S8NmMDBJ3RJNHgzbYPd1QsNP3NPtHuv7Ta43Yi6evmDybm",
  "key26": "ga5ECEaWxSwKojRX2Rq9ATufaj8vTGkbtrwRBwABAeXBVVpTAYdLN1v3zrRDVrJxDCASrVYLhxDccG7niprHbR3",
  "key27": "59gMmcWH72W51GAoZZAUcqBQrHXTy7tygB6kXvv2ruxXcRUridXMpLjQLKiAV3x8tZGCX2cLutqpJXxMKrvGMWfR",
  "key28": "3sweueizbGQMBLHxGT8wUbFWDwvbizjR9bLBf2Wrf8rQqNa6nxLiwXibPQm531dgExbWX8z13GcUMnxcu36owZr7",
  "key29": "4StXXEAae3CEdYTwpx6ajmcgwDEL5VjxAfLr1N7UjJqxsaT8UA7c17wteUv3yMnA9WnhBYU4UYqydCJvhdeuF4yF",
  "key30": "3dj7gBNPDFDne9vbhotMkYr5su7Z99vbM7remNpxESzdyotrmbkbbj7hUoUTbM2Jtn9E2DLWPWTeSGL4L4p1DvvE",
  "key31": "38LZQSbtmY1PcBS26iXeAW2Wxs9nppENds4EgNHmJS6LAbsDg4pkU7z8WQC61NW1T5DqbeJpEwumZGaQiZFtrN8u",
  "key32": "5FNNbAB88KwZxaaR2Uqav1VsMNGSc6PZWkDiDWoNPyGDub3QLBxbULKsLqVwgrUqBEDeG6CpokY6iFNqkUcuso2S",
  "key33": "5PZ49TGhtYXHwWaB2B6mCrevPr12HJZ5YB2JTsgDoCbYuKX4F3hnqMLB64cJUArGPeo1dESPK1j1e5M52t9XuTCS",
  "key34": "2oDvsGh2nG4WYvaTPRxhCj7vH6FgukPaoy2WgnfLPze82kKxeouweLAdSqHuZV7yd3crq2TLCx8KJavqqAA99665",
  "key35": "4vA2Tj3CprddQQUPatfAZ1JeaYnz99YpEmHQ2VF1gF3Pnosv7zQ61BPTk9xdTwXdesPTULY1SKTmdG1a46kmwC5L",
  "key36": "4hBA1HUKcUCS94hmkd4Azf32wX41VSqvbUYPNyD6F7b6Qbp2N2jckTsWEgCmzEBDSVjeZTt2vv9drw1Mxu1PReYc"
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
