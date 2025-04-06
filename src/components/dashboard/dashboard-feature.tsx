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
    "4DK11gakfxXEwu37EHxtwrLEJ8ZeLHxj3uFj15eueJFtafN7sXsDRm8PU77f61t6vr49b4ZNpchwCeQsYvdob6Po"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LrvnZ2DoVnapgvUzF6NbruFasyx3R9e1kFPL7LAU5J1iYBq86tmzZWYz6u6pUtP6i5ampvex686SdnekA5EtYaY",
  "key1": "Azy9wgejTCxkEi4ELPgXuPuni4WfgZEDa8EcCgJJ7bdVS71qj5KzauyUPNtNFKM39WQXURD6J5yFaQeGKXWwkPZ",
  "key2": "pJRzqm6buGQj2faYCZ1EXPCeect9FcTJgRLhj7WPbkNa4gcreXK9mYxb3HzNnjk9P6xvAghLNcHbm1p3VQrXpqs",
  "key3": "4HtKEhfTFmXaMPP38w7kjHUph6UdMocftmaYqoETsRkzvDBVtp98V5993Z8hQeVTPfSdQq1ngE7MjHCvPMrmCoyJ",
  "key4": "5vHVGLsVn2d91XEYjxMBLHYuN9ceqSXYdMowwgYEzC2e8FTAFNsWfnoP2y17mPa1pSJHemqWNsEmjunPr1cauTzQ",
  "key5": "4kGyxKiotxd5TdBsKTxK4rEsktUBZ229EAu2kAvXfgBZ46yiiieBDcyJMSZGrcRVq1V7BfBnCwrjsVAN1JFC5gzN",
  "key6": "3Y5GffhDJBVtNJawhA4btfQjavy4C7dvDcg2DUqen1oFG2Sx4CQCqwtwt57PvGobDrNZ7bBEq7iZywM3WdGxjsrG",
  "key7": "2KU7yxQh3tAjCt38tprkiK7mHei14naQ5hBXWmHTkdmzt3hTnZvzo4WRZDw2AGpV7ZXe5gWeY86MBvVt8nzvLHnQ",
  "key8": "29KWshq1rATECZoTSKaAKAnuWaQcHwyZp31Ny6bzQgFmetLLE5RhxSaMkvPs44jT8U3kwbBfdHdDL2bnzV3nEqM6",
  "key9": "kovbYDm8mWaSHYikCZxzFWseaWMXk9M5AaptyUX1Ft3SA1w1eUMPvgw4xmFj9m1ptiJFQDYK1D4SiYpyvzMZUVD",
  "key10": "5XJz6WQTaDTj6zoivEh5BQYe9Bd9Jra8Gg2RUxHwGuhmjdUSBxLj5LHWskeMEuf8anbpyTATeXsQLCr5HmLQ8P2Q",
  "key11": "3dK7L1qKDTWo2eDPMiyRYVqeJDRp5jN5rDC8kJUE7mVYtesuwqhtyJRbqSAvJoKF4QMKU67BKL6TsRY8x99fnRfx",
  "key12": "61wcwKRE2ejGVadMfqq4G3uDeW8zU4om18cqPepaFkEDtxhvkNiweDJtGAbbKUwGTdG9RmkW2x52vVqAgDZ6Jxjg",
  "key13": "dYbDni3y4BwShtrA4ukqrkJa3qpR1X1VvaiUA8xSEzMZ9njwJbhTkGqiezFdY5nFY7X7aESp3bLhtYGxnm8BkAW",
  "key14": "fWdRzYHvacBkvyT6sFMWn2B6Dss2yc44xZ7gozMfR7zu75oaPmcF75BpRgA5eJFi2gtxrY1ckVYB22yXZZfTXwg",
  "key15": "4NbB3usa4qJea3eEuSbjwavuov8RpscEaRDUfJZMxaae8fbQXpdwbmWUswmsVGMJodZ2qLQJHTLCYUQYi7WqQAaU",
  "key16": "25y62TjSCXhHePbqrwMRzTPLf31VgvPEoPTEwWNrmST8KWaBS8m68fVACawQcSBzFHVmsHRcTSPBvUmmYEmk9AJo",
  "key17": "22ddWqN5Kz9UpfRS6iS5AfY3nNEezMyESK1yyM2wRMsHEJMPjfQsqakqHj4o6VpouwSZtBJnRTQB2BKVCrkoZqsv",
  "key18": "2TBJmL3gUmvfnmzWYQbQci2SvEsotFVNJRYUfMn5RqEmM49uxe7RHPnhVKpdgDaZ8Tnf1QYtZX6Nd4Gqgmghd4ZJ",
  "key19": "3azNpbjDavXUx5hhz2f1Efj6WMYxKRp2wWnXn5KyS3tBZdhgh3xG3scGaH5TSkxSdwAfpCMzQg2WK2tocTUAwEtu",
  "key20": "WbtMqBRXNDmae9YU4oeHLuPHPHsRNFcE7UBPH9qcZkDAFzZq1RqHqZUqiLUGLGBnZv2CPVVkXy4usQxW6ESAsDJ",
  "key21": "4MARkSiNXYkMvZTRSiHkYttxkD6HxvZHhV7R1ofxQtJobWkv9r94AvE9fxXqq7HBMKRvv3AfkRnbk4z4rdJzJ6tK",
  "key22": "4f6nYxhWPW9m2eBZh2ifzaMWC9278eGsX2S9c5xV1YQEoupPMsfVBcLmJhAj2ECBU7vkHR7gCvYfLEj6QEBJKPZf",
  "key23": "4xJj6DedRVWwnL15VN8WjcuRXtBTvx1LRhbpej9Z9V3TAVnZFGjynMad9wFnXmke75z2ugVELDDL4VYHWHYCuar7",
  "key24": "2crj25i67npJkd6WGkesjuspZrm2ag7CW6k7n8LJauHhNZ4ktSNWDH9LvpyvNtMrpSAPJELyQi9kULcrfm1Z4szi",
  "key25": "GhB8QroazytQ9tuwq6CB4im5mspLQ98dEEF9kRxmju5cVo1dAcwGuufjmENrxoRsuLNR3xHckCwBTkLTCaDpsb4",
  "key26": "4pQCQ76PAmBvH6b2gBo3pGLi4p33LeVwHCkEhkprqbmAN1t8GMhpT7euK5ge7MaTAd2YtybsG6FanUTAzvi68pBK",
  "key27": "NG9J67DXippQHAfLa6hVqE6VNpokMfXUBgjvhq9pxevPieqgQGCgiGXn26Pxi2vCh3uzXXLUhBLHckRKWvGihk1",
  "key28": "5ukb6hd4a692shTHPRFWRS6R1nP74k4gVFSarPdLFY3Y91SSzgpGpBDsthxb7QgG1n7MfcqxSFMkoQ83hfEaUQnD",
  "key29": "5XFc6VcBefwtxCUuBHddF1taK9AS9xNh98f6xCAag8HpTBeo67oZ5saGDksDU3MquEaTp2hQpPYRX3JWUo6S7kFL",
  "key30": "3y6ZBPQpk3BiCn9U373asG4QyhLxHx4dmSbEHV1aNF8VtAD9v1ShcpYgs3C7gQKY7Uv8QxXCFJwyGx5oKhsrMGMg"
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
