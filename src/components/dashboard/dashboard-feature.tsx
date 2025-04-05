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
    "2b5DzxTV5QUtqsHrVQbKsG2PJYRdF1GFsBGnVi6MR62HHppBYTM2KvUbNJwvAVGhVEy69WgGy6pWdND8pnXXairT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oygWZyaZvU7bkF2LyprZGGAocioTFHrw6AYVVEmRVLmPuJDiQ6YcFoK5LamkBca2KMCGyjpW9nNKu7iYd3qXKT1",
  "key1": "44gdVpraHg757S1aYVvTCHASkfEyxJVbW9JZ9NgEpZN64zVF6wkigR5CeLdM49GvyS3nfiiWmbx2L6pAdjF97xGZ",
  "key2": "5tuQVqiMXiNczKmG5cDeQM5eSreM2UGxN5HHh2auWbqSyDnR8wHPa6fe7KNSic3st9ozDJowrAJBtq2YjA18zZkX",
  "key3": "4awTQGrdNQB6Q6Upvg2bVwaeZmYinmW5DBKnK3kHrHES9ZDPRJvHsig6DHDKGUkZDB49BevMmPe9hjR24S2yJfsx",
  "key4": "3hZA7L3RXqaEDPkzwWXfC51rmHSZdjGBQYnk82CKKmyJWJU1UAxBam5ZzAHpfQU3wfRsRDUZg8wzwWQb4xCDRB3N",
  "key5": "93PC64XLhjUsXUn5Fbgt88hNMHSaVHj7dwgJCaxf9eQTmN5xsCYvLMYMjYx5mzA7FgHgN47hJ3p9BEPk9JyM2Zp",
  "key6": "8xtX9BjnvcVhKLCQrdQQRCds1G1Cf2w2RTcA54DYrGboQDEgvpYpfwQodhp8JnMcbi32842uA6mukJM7Hs33ABF",
  "key7": "3cuq3sKLpsWjF95VhYmvH5atGQsvG3iGijPiieounNZwcpDJfHzLsmJqSYmxBR9Yb1W97DAg6DDyPVHvVbcg2fzV",
  "key8": "2UfwAkBFcN4ZnyP6xZhWwv4PC2nHCGHJJLhPByCiiGfXkHusUDpG4UJq7SJUws35VesMEumiGYE3kC8Wx5vfr9rZ",
  "key9": "3dthfpVMvdiCmcoi7cZLWTwRbFA2QN5VBvpsLijki2QKmLQNJXNepgHWoyVorRupdNyrbMXnmF8X3L8b31wemcJn",
  "key10": "BzmvdZaw2rwmCdkZzPsGmKdGCy2zvj9XVwvddXAb9DXoaisciQRePGan9aSTfHAQZX8uZmuHSFqYpJMsRmqwxR5",
  "key11": "4f5WtKCNmps5wpTHAWEGjCBFv9ybCk7PUfpMRXk2dGDR3V7fkzWyi9G3LKGFtMLzt5t1FXUTpNsHRKZcjRfRhHuP",
  "key12": "5FC3Lwgv8gihzbTzkAp5faN5B3LmXhprxDQzutGdK5q2g8oz9f9rBtqhdFuLSAsakDC3D4e1FtTECLLbKGVRqzK6",
  "key13": "2A1DiLwZvcJPuKRHAnF9jX2f3ZESqGZvR9ym3iTLkQ2dxYtVS9RrKUS9ZWTKVxBZdm22DXSV2jKSxUKVA9dcG9BM",
  "key14": "7yjPrhEUdCspL3KCLSX3UC8WeJCtLcGDJEkhDJhULdvRwn7tnq8xZbzZriNiXVcu1RM3QyjR7FQRJA9ro2BiXLr",
  "key15": "2eynRjNtjowdbbBy1z9uY3REJ6gpUJkZfBzhMDJtSSCabZdCMBBZ2D7xFsMUAJuGDVEbtamQCRjcDEopgWertNTb",
  "key16": "22MLRTKyaybhACiRbJf9d3Yktxi6fsATKJZgYGGXHyozY4z647h1YgnpTRFCCRKa6iuYBu58CZWts5Loh42sXzJV",
  "key17": "4eMRNYJDKKsABzdz3m3eDa9KrxXf8hGFLYV3HAe8y2E4nah9e5A7BMAnZ1TASPhy6FpKPZDtncRD9MyLtnmtL1dZ",
  "key18": "4KWzQvJKm4QNA3qYEKp1Xs1qfYhN1BiutBuYtDZazjgG6NB1ujJHqdSkafWgDXHfz9ZpTrKvYUXE4tWnAAnXHvd1",
  "key19": "4cvCKRVvtHLXSJSEui3iLPab52sahM5CMjF1taDsvLHVpcvS2j8bTR8kLkfkePf9ECw4Bs5nkpmypnfFAAvYFeM3",
  "key20": "5AuttiLkHeSkmJ5x9Po9gFUrtr1tDWUWbKFwphRGkfmk7vH4fcGdti75mm9VmXsRKaD5KyJAnUHb3SaaiTNYydMR",
  "key21": "64BRddL99Q5k4LtsJKNFgp5ee72tJa5fXYZHjd8MwbNQt3QqMdViMMfZeRfZcodWxUjUPsrgkzjRPq266CQkBqdy",
  "key22": "5dAGjMwozH3bL4S7UHUJ7Yd7Nyh9sL1Q2fNeHod4yMYQcrNi1kMMgP3w3NQrPQAArdpB2vfkXxmLgWtnM5Nq7Njm",
  "key23": "5wtkNUqiHfbZqstZqCcZLppeXqYY3THBPb4nggWHQrYJ1cJzt1MTTJ9bPFgzKm83mdcezHzcwUNJ9a6tMzvgToUZ",
  "key24": "3ab2qA5MMELCjkbYsdZ9sos5M3Bqet64rPW3cQGG8m5PyWFxgjmzjmhGC8zcjEGmwMxTgEqfKE3jrAeuxGMTF9iF",
  "key25": "3RNM4iaTYhKL2ShSJGWdq3q1E767oWWTQD86dyxiSofsoHcPZeaouGmsoGWR1qSyB5GquKGyZFYueFs8HU2bm5gW",
  "key26": "4eMSt8AGZ8e3qrdVyXaPqEshZV18xVzRvNcSEKgDVFW4D1W2hohr9VRQBGbkMUYbLYwxaEskyKNX5CP9qEk9mbQV",
  "key27": "41NfmEoHytvW5zrLKt3snstQ5AosS8w49bjtgL4MpFzrRU9jUWAxK5DweBz34EYefQ1qPdGz1sseVbUHk43ufqah",
  "key28": "62QzvuS5nvPWMEMS7yGdqA5TbNBAqhwSDdRorTogQ7nopc3cf3FJbDAdibjukzrSd82PPDe5Ww3ZMfgsEGUvWNgx",
  "key29": "49ruNJojYaN6ZWAZ42v5Cf8xvB1P2UybQgRH3GYRixvh5m1bLQ9hKLeops4qLpQ7SDwtJraCNf1Ai7ro3UAaZ6Zb",
  "key30": "4vQx4EB2B3FhhxoaGXDLQ7xS9MgLfcXxSMo575g1pXGm82kfiKh4k8ETV7wMwfWzzGiRG47afB1mNso5DjgPx2k2",
  "key31": "61ZMFzecaigdw2C2T3H7cXHVhYeck954B1YeYp98B1WoBcvVGPnVLz76qpnqLZuc6CVoBZsTRav6gQ2QoEtx3VST",
  "key32": "4oaxXFmfkvqZSAmS6GuQWcJgh8bhGUtppjSfGeKVjjMRYw67ySHxUvi4ZqcHvkaMRUDyrp4rRz5H8yr6sQdVBC41",
  "key33": "5gWgXrNYcob3VS5YTs9RxqNxKjhLJakb13haXREesz9DmstMh8pDBFf1dcPFmCsE3d4U4aYp7fwAXn8kXB7a8rXb",
  "key34": "5Tkhbh4Gxexbe3TQTa5nud6qXxvmqUXkay1vBvtq1Uj2wRJxaQQsrv4QHP5XG2Q1gnnCNDHWnHa8vxad4nRs7qp3",
  "key35": "3RBZauejH7rJzM1qfcRatxGHfXPY6uRegeEH3eCDGXWd1y8Jgfcpuf2NkbjPnUGPqq4iert74w9AnVQCPEF1kSfN",
  "key36": "Q2yBDhPfYEzJnHuSsH1BemP542bHDtaFE5bcBgpFQadQjMEk1htBZq3JW1Qq6hDC7AUL1V85mDe8YmDjerassN5",
  "key37": "2UFGQYYJgNQThSY9GeMmUxsUc54S2NCmveWboYrUATEmgDWd8UbavkkLM6jzNGxxxcqDYUUFCDF2fbdvpFJNgAvC",
  "key38": "3sh63ZgGoaRkreBab78CBMsiKpHNFRA6cgUX7uC3cHwsEHiGL67yBqgb9uEWrQvrGh9XHFLcsXZsF3NK18DJNVBw",
  "key39": "2EZZHNVqQ4pwnfFkxkFADdk5EtAuAn2qqkqPyERT5f9EbaL5P44LFwYr2jWEdvdsuKPEGptGjPEspu5B82u7ocky",
  "key40": "3MymJ89a6hL7oFoPgHx2jicasHxJUEWHD5eMu958b1asua7HmNQRnerEvgmzwFAzdNYftZoSpQX428v6Vwtqe86m",
  "key41": "4WGMoYezVUDvpLXBRtE3o5KqtS79H9DCNPj6ztVXDRLdSwnsvNLBwxMuGECXkJLcemTSd2AZvA9RdWGYim5tgmNF",
  "key42": "2WUQ4EB9cwdW3C5hfLf2fkW8xBThfNJfMHarCJQ42t71XmzYS7Vco2kX3X85ktHSfpB72Fbvz8RLVeD7fvyobNbh",
  "key43": "2TVpjPvfUAmNbG9uRyY7tvmZdamAdarsarTA5JehMY84rRVREyuFR3TKYrfCF93329uGhLCa6icUnV8eMwzm8fL3"
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
