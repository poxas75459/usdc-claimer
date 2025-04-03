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
    "w3Ee5r7k8eBmpiz1r8p8BnsuVyUh3Cp9W3GTJcVvURLuxHGFCwhipEsmE2xtrJyNuXPwNcXzGN89SZHRhxXFCQJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uEbyf3KtVARV6tuAbR8kt8UzbXL8JTeCgqr5dJmCrtpD4GKwLKRS5foLYeJxjMYmV8DYP8jcc6AqvoBEktjrY9Z",
  "key1": "4eMe3cZSpZd3HR7Wer6kVgFQrfUoCQgnEAuyYFaKMaReMec7FiTkQz5UTWoGQpXFAxXpbKLXebMjgDodpKQQGDTD",
  "key2": "4YgH2fpJQFmWs2LWdccq7ee4zZB8pFRR2bj8B5tjyqKbExMJ7dNWaWhVkaS3r9Y3mnTkbAcX8VSJAPk6XWMGx3Ue",
  "key3": "3YYFNKxpWHZXeKe3k2Jj5EYqQcFaNEHdaobzMXvvNretURf6M3EVbfBP6KdStUZMDGvHBw2cb2r8SC3nMpjt3hGC",
  "key4": "5jSQHedy8TZCSxTpqLsnWTpgTpMrGTyDYJdZ3DXWZtcNRz3HZNyYShsWtxofWJXD5wo82Pis4bq5WEMtbVxNGLhe",
  "key5": "EKZRJbxJ7feysbCsRcPZV4yeJmLasLdWzs8vQp1Kq4EWsS9yuCC3o32ZBk2CaZufer8J1rSCCZnPP4KcHm45NbB",
  "key6": "shKf5dbMF6Erv4KeBNvVBqER6idyQMscB78vojzruTqmYRzhkRZPc18YsaKfwUb3n3Xocdsqw68uKzig3seojPZ",
  "key7": "5Q6X7XwrLf9D38HkPat1o2LngVwDKuhZJ27AZEFzPv2oz2MvAs4xd6GGe3nL2dqHoxkKjkpiyVyYp8T8N555fh3E",
  "key8": "Wwmp51sLVukte3VW3aSMnGVdQVBScsTY4VrSAygqGcrWk2G5N1Y67wVziKCRvrfAGLmfSGXvgByV3jX1ScBGsQ3",
  "key9": "4jynGVJdLvBh8FoeLquDiWXSS9PxsHMz4coZv4v64rWVn2AeV3khm77dZKCFCejhvYvPCiJunupcpoAdW6c7ShfF",
  "key10": "2Nt2uSRvNnosksYZWM1xAMzxigJu4uKLL1tpAuLVdciin8QCJFw58C4YDzHysGNVTZcHv8vhznjaGzM11sXqBmc2",
  "key11": "3HschM31RkVnjMvfchsTCrM5j5prHKKJM7mWvCMAeJp3tLMtTNPthKhvB6gs9HnKpk8z22EinHqpkJi8P4zKwhXJ",
  "key12": "2evZwAVXUzWLzSXwTJ8oaBGrcJoZURKMj211Fp3xcSW83RwepHofb6WCVMFC8Gt43bZRpxnhoH4Y6SPCwiV8SUUX",
  "key13": "4yrdvdfUeCAHuFgKfDjnArN1QRTATTTGQ97H2WLVRb59GcfwsqS7ZfMwNfmNykp2brsufn6arhuouasNT4b77p4T",
  "key14": "51SDY22mmKw7GMm53BK1nRaeAUufUZmfVdgEaKNh1gpcRJmUMim9sYmVrt8r7raCqRDAEf89Rq5Q3wQ8H5UuWJ7m",
  "key15": "4pvwK2SGeXTCweGb8q5H2zcmuhi2oES94oCBNqiXg7K12Hamp4UywGnppxesEpaGh97NdZPRTUajC5UEVLqgPWt5",
  "key16": "36ajUutfzMd7rjtDrGPNB8akb8Tz65VfWACbp3PszvaNUEvViVM7PtYSkaeELBDWKxNETfxerWmt7g6T6Dj6GXkR",
  "key17": "377Un4ebPeouctVQD2U73aTx8h3jeSaBq8Ys3wFfFdzeZ1bKz9VYfTNPuPSfgZS8F4ehXrSG52u5aLSEmw6oGkbW",
  "key18": "Wf9vSjjmP2YzjTiuT4Rn5kSC4RU7nKxLE1X4GZS6NpuUiATa7EjChVv8EzxSXecsEYyb3fvgES96WgdGiWEpCcg",
  "key19": "5M21xG5puEmE5VoZLwMgLiVLkto94yNWYk56741dRKbiUEm5XrJLgbif2KxGwhXJdK6FLBiurQh92vbSMobKMStn",
  "key20": "5JXLHj22wSp1JdYUEKfuvZ5ZeHKSFbhoJ1um3AhikFnxLeFGoyReGZinU8y5j1DCRih3gU7siUAnJf4zUzd1a8TM",
  "key21": "4FerMRDwb8QsKFh15eGHPdRyiptwhuddDNao4JQjZLZcBx8DLbUQxV4MFz7nZHKEc8e5Exi2rjVZDUfuMmyYm91p",
  "key22": "4WCL3rVAVQJeKSQKEn9R4U1Xq2GQq8yLxWo4kYCfjTLxoSpxcvri3zByo6anQuTNLi5A5xaYACkpPZwFwkdXsfcH",
  "key23": "3UFXqmbQ8tzDihLcmjebCKcw4fEZHotZmGXU7CMvNC4LnAY1BP1t8fCwhqzcgecF3sYJGSAiFte9tJUaP5JKjhJJ",
  "key24": "4ULeY1pSJ9pkv18T9roM3PfHYQgkaWuHSSzyKRQtpyHbqWLHzXuwiQTHYL34CChWFATt33rwdmG9HfNJj4fM1Gxc",
  "key25": "5s8GkubjqEN8KBkPWQ9PQkmguMRFfkkyTnx4fMNoHY4qx6B3AyexaV2nWHsTYKLDar3CdispGFFoCB3Q1kgev3Ki",
  "key26": "4En3bUS6ftsf8B1vspepbxa6sybdRTKuCmMp5EvQNU6Q6Wv9S22jpDwmnajdK52p9kfxYeYWUCNGnnY1gzSVRq55",
  "key27": "ryxte7qBwuXpTyXxRvodMgAom3ioD35eXVXrtwRmw3PYtxFZUXxhsjNoGvb9B1U81mdoWzzTfwNWXN5z4NDHjLu",
  "key28": "5BWqW5RBrn8Cf8DHxZsmX2yThSWYstDsnCjsVEAC522atd9fjGJyVwNUBzLZegAaUswKGetnC9UVkSSgeijjxCqy",
  "key29": "43bwCtrv1Jj3VQw4zUqd3JLb2Q3FosUwx7fRTBkZATYt8x55vuAcsx92f6rcmzEFRFqgg6jKPr2dF86deTU9ZQsN",
  "key30": "5DYZnthzCtJc7WCogwUKSioJ9mpp45FKj9mRhdbWM3D8VQfWU3xwymQGkp6zmr7bc5UTUnRe7LhLWjSEiGhHvxUW",
  "key31": "3PVFwmH7QeapmmnZLHPsHKchgQ3Vz4B1bAtbLCcDsJu7btA2WUNZXk8vyb4JK79FEzdkQYfvpL45gjrg45gPQhyi",
  "key32": "1BDu7MV2cT7HU8mpvaBDfShFNSUAMZz8QGCrpWdtuYFpVnsvqVwBmbuiLQChgUrKT8Quqj8kFapg9YUDq2mBsHH",
  "key33": "3ekFf2FMn1joMX7AEK1DvNDvdKgbMYVYiTEpQb3ZNtrZaQmDBUGRqmG6SQQi7sSb4aj9mqFL1www8vbxheaMMaJs",
  "key34": "4nHe7AZgY3ggnZGpnCV9ohvSsvM4FVHrK3kibesU2yXS9QeEsZ2GZiDAcwAAYcRnC97caLf3J4jfiMdjtWQtcEZk",
  "key35": "2cfwxdcoinLM1ttDcjCChpG2naoAPeDqiBVmnAPf8aTZFau2CtEWRwh27X8Ht4idUKYVfkRyS5PgqQNLmfJXDaH6",
  "key36": "5vGbBtTcrFybsQeuxMuTrQXkPBP93PJ3h7wokSoCoBjkF7J3MiBp4s98Z6qqc8worMKCDXnUx5kemiQ1SLyxA1PC"
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
