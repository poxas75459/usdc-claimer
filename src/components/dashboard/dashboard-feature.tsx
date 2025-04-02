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
    "vzZ4GU3KYdhjs8MPneABPFayN4z9JYcpAaveFkr4Q6VuinH7heEUBVC3U284LbNC2gW5YSmZfEH5rx3wTVZkMt8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RFrsYd564wT523do9syK49xZJFoSutZC1aDxmb4EEcJeu6KLURxxLpUbH1uB88iJrgvGjv5nA82HTr1JZCgqzqq",
  "key1": "PJxe5PDwDSdzGtC7CWc4kJUaSDD9tS7VfygzPVNW5i1iLvbCQHoNtCXjScaKYBwRBN61Pejhb2DuQETA3oeYxMw",
  "key2": "4K4zwokqHqZ9sjeyVihxhAVgeGdnWeFrZpJjQHvZ1jKXjS1MzrVUmZTywu6jdrJXhpCiQHHXR4zCmZDgk7gTU1Rw",
  "key3": "MLVWidQ1oxz2xtjPgSUjhaLhLDf4PC7zqrg77Hp6haBBr4bjMvSQzp1EgWiypUFgMVxZs922Fk4rSq29biVciqq",
  "key4": "2nnMioCHPzEoDepFQ8zEHGyRLiZ5pCXpmRAXFuiMqNzksf2MAKKJQci9TjZsjh3Ha331fopyhQ5CU4mnoFw8t4VT",
  "key5": "35bxkpMFjcHvTSXxHj1wBAm9utGzHPx4VNPiG2peNRpkCf5NKJdEQVeCkUBSdPsyMsLuPoyJwwHYLPDtHuECSzfK",
  "key6": "5VF5Nmja31rwsS9jc1Jz1yUivbAeHbvByjkVab7GxK7sny9rMngXECsay1LWSX3iDBwpy1eKBPN4iy1N3HThMKJr",
  "key7": "5qSpERzehvbHrPhVogRFtuvoWkPvnBnTPtowZCYHJDmPNY62jx7CL8FU2ExiPpTdmeQtZHDePtoC7tcr6LsYm3fy",
  "key8": "4Za5skLvPJJH2TdXj7eeDG6QWMypnM4rnPD1aHb5A37rcDeon6G2uiVUyGn3jMeXUtzW8DeZyiZuj7BhnPfjxC4M",
  "key9": "6HUX2bf9Kt7Jv1TJwtfx9oLnABiRDG4bdgeDoKYafCHy5aBP8M3oaqjJsHeLzLbH3U9VqJszNo3pQVxNJ6Kxhgj",
  "key10": "2Zfr4E5QXG7pc16Rqx5n9FtdsZ19tPgTyAbH6L2Da9uuEtQHUjXZG5U87EiYHUKyiozjEhetBQV23jyMwhcvJEcX",
  "key11": "2T8B9hrmgxVcFhWjzz2xmDLdRvXDiiQHPoe9DgTQ3pLnycD5FXvLoeT7PGWxAg9NuNEMTXSXufZsR8ggVCXmtUta",
  "key12": "skW3fPp1uzZ17Kepu2dmz2apTmU9CHyFueBBfGamyYdsAXW2xtuRpzLRLinpnheZjLAarPt6YnuFprNuMJ6Fqve",
  "key13": "5wWtqvA2VvrCdx9YQ1NZ8ZNEJZ6pt8ixiYn8nmvok2VcqzGjUnm1c6daS2dgMBKumpYdMQZtFQs1DbfGvbnzDsyi",
  "key14": "2cuDpDUh3UdVoqjTFpVoer3SthwZGc3uqV9cGsM3TKsKeoHSeB8NANg2pnaxA4HzBZfN6fmQRERkL9T67kmbZS5o",
  "key15": "3hBP99dWySn577JynF5pdeD793WBgcebnv1iXk73x3dHiymEDSmh6cAit4P61B5SPHfcyYd5LmKRFE16hVUzBcxs",
  "key16": "3fkTwTqZ18XrTg1VR44rq8oaZ987j2EXF3qLiQtXnGmjjSNvUiDAwGNkLEXn3jFkMQcpkrcFPJ2btUJKBX84WCmL",
  "key17": "3Jq9jhExYAw3bv3bgYijXRq9r7s6F81Fa33u7rbGHAzmX4vVinFahQ9AoJT2CTNXY22Q3tTUVsk845RcbRhKGV31",
  "key18": "TGva8H1F5q7PExK8aJdEFUpH5VWNkCdzexAnB9UdPCfHS2RCbkeo2z5pkQuK1hSM3RkDPanLHLbbHkKtH4BokRG",
  "key19": "2paWk4szCKUruMnyhCYuoHMxE9C8epvKoYowhFZqHGb5yE7MEWpBViBBVR2nRPSgu9egjGEoHtbaJ8tK8eBWBMyK",
  "key20": "S8SPnWjtPpj8KaYjv6xo4vr9a5j5W9tsTfAYtq2GYHhrwyKpHZeFfEmLXWNTi1L8y9DN9fqky3FVw5Gyj4hU5yV",
  "key21": "2vw3wZDF4qcSwbFfGp4NdtVmXN3w6NpPm8azRn5FoqNk4hpKXoGe2UTwMSDAZY52csYs6misRFY3XYJGuaoBousi",
  "key22": "2g9BFWpzzkkKhShv4SQjcNM4PuDPU9xpVLyR82PwtD1Zn67Ai4LLuANp4bPd56tuKkiK64uA5J5ERQaDF1pyL7aQ",
  "key23": "3cHnG8UUGgREhQGyLBysaLMxPx4gzG5F7TP5sZFPyN1n2UGu43AxsE9mX14r6QPVq5BzqyuBW1sc7GXamJDPV4GV",
  "key24": "5fpvwsLd1yDSdL7YsGTKHGaXu85nbkPwttB7rjaotaKiN2fJZBnXzqyeCo2Cw3Sj2fAGdYC7yQAPrwUacrcAzV6b",
  "key25": "2hVxvBcuZ5LNenDQtxkpL1nXM8tuSu666JbUfLZYwD9tVc8VT1vi6dbxBHmcDpF4PtydYhts5soJRNrRBhBnD2hQ",
  "key26": "636Zbty1tm9VNyijHr8vjHbfHX6S3Gh5EEm2k5GatiEx3yrVMkMmTVCQZ7MZp9fWT9BxN6uzcSLyxNhVaea7qiJd",
  "key27": "2LhfUmy6QYbgb8Nce3Ye4gfDFqjWMVM7efRhoPERCmyfGrpXNqQFqS6aoVD5eCS6RQiaiLfyw4dK1PU6BTa3GLtZ",
  "key28": "2k1eAp3rBwnbB1ktVwHrQxLMxQjjAvTbPr9NcKandpvi2Wnbg1vaxL5XYsuvtYNzZpetWVgJj9AXpYs1UFSRXCwr",
  "key29": "5MQ5gtqEdiUJhrE6SCNptadhDogfq3qztMWvMXkDhGtn2UEFvgsLTNdPyJkP9qYdnBkYtdzxoc1XNvf7g5NMggrH",
  "key30": "465XHMLjNDuUpWYSBTmt3w6Hj83TAdd3vXXHtJ34z7u86b6sZ6rqeKGJiJNSwQroSk7sPHLWp9mXLuQccNEveFnE",
  "key31": "386vwX3rfzFYM8KCcMX1XLN9MFyw87rNS4SGF5H9sDj2sa2Fzadd8R5xYVXY8SF6itNH9VgUuyD3zVM4XySiUHb5",
  "key32": "2hsPb1QwFXj2a381qacARrtBZe9Kj7vEYvEPoFn1fdy98UTV7Qu9q2j5bdFUn1d1YZyGVB2xeXRdygqsZKbe2rVH",
  "key33": "4LdoyoEhCNXGtzi5kJ67kxWBiU8QU41BxYui4qvQWw3ZPrDvautPtXsH7bWFMJXbLEADRp432qu1hKkz6wiXLHde",
  "key34": "7stEyckKLzZGj8B8AnDWZiYJQaoiJknNwnMzYwWVU8PtcaQUEArC7cL5GvgsdTGXKT1kagTp8XqyEoxAx8HwxQK",
  "key35": "46Jcx4kPL46T1tc4yGrXSNkLySeUgmB71yrC2xpfAHTEQfp4i4cWpxWKhs54j3gLDDx7CKrCtvudRjZKY2ySYSLp",
  "key36": "34DfZHx58ZYiPJcQ23YLS9KgGCfyKMFXRqxWXDxSk5CmBBLiXPRHKbJ8gq2zy8WEYz56rgNFUd3oJpL5b2Qcoh5o",
  "key37": "3tdGjmZgm5M8npmdReUFxA29wbrVRPwpYKnuTkWSuHd7g9aZT5HWW3kPH48JJZKVuNLdXMFp2JwW7AGA5RJMHxmf",
  "key38": "c4sCao7hh2Y3QVMv54D14zq59xk27CGY8C78oyGnuFtXk3LA6iyHAVdNUT58B9kdUy8Zv1JDv4cYdL4CizBrXe6",
  "key39": "4ZH8p8EyUuJLfYMRuHdkErZWo5iWspSS57K9ENTFJfFdEdEaPfthgYTWJ26TNMcpEfbbb2VFYxWGoHb21N8q4UfN",
  "key40": "684GvsLPnETn2sKvLuhjjCgwcvA9wtDU5mLXBXShXjo1h5MSkQDJetowodcFnvBnVpgz1n25oFBuq3ggz1UiP8S",
  "key41": "36bQUqnqTZHaYy7qG2aQLkGsxApnkkLbgXrJxqJo5hEZnauUavyPjQyXh7bQzh2ASSRMDgYsaPDcp2LZdfT9SstG",
  "key42": "6PpVPksN5irLxrZnF69auYFfy9PxrrqZ2kJNBxcPCFZ9sBXiQLnbRZb6a5paxWJLZJnsshd2a4sxPqcv8yxmEe6",
  "key43": "2R5yQ8Kgec6ApZRygKAtbRDx8wCQJYjpxBMRXT2Q3Zngnm8qQoHDCm7DY3QXwU8xgFuExRTW5V7WV4B7VJaYgmWT",
  "key44": "3yiAKtALjnkUaNe7BQU7k2LUFbYgtnwE1tz2LmcWWwrs4Ne32EKhh5SBdvNFLwf8HdJX6eeiQFw1hTrKB83DydWv"
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
