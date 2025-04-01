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
    "3FQXzci8Udgz74frVETy5kTAkNMFGsVx11YxARPLG53urmngjBN3tcjRMBcGQKz1X2g2zFHgsGTP6oKze4CrKCsN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GWsAYxM6rXv7vSV4yFYjP7mZMDPVWoyjevaBhShr2NEoywxd9AoYxbyY1uAeKCjvvGCTZxUM6MpfT6gdKUbuaH7",
  "key1": "3Pvv8ayFJn3PgwnYzLsLrXKkZ2dD1pHbNLSuu8rQ5SCGjqWBjJioyU1RCVWDrELZnKrvgaxxvJhd6VoUW64XYCDL",
  "key2": "3i3Csu2rh612DPJkEUtSzamYNNpiFN91Z9mY34hmfLskgPprDXRiAT17AxTpsXSC1YeG1kiRjoA92x5AuJnySsVJ",
  "key3": "5uJoRuzw1EETcDncYg5PSRbyZi3tTiRivaXonFUiicDaWUZMx1pMytaSMF4DXGN5JpoWNy32FP3jiay1SbiS28C2",
  "key4": "5hS6pnYSy3m4DNkEa1zNpBWp9M9ZKmrbbcQh4eUvPTysVLyC6uzcfbjqeCGxC5G48YZnhinTULEPHzMAmSiBMoDP",
  "key5": "AV6DJWhymhfen7p29KkWnb2dw8zo5sFv5shWxj4gFFa65hUPrsTtbsuabDmXTALYtZavCfL9KGPf5cFtpudRLJ4",
  "key6": "57UYgABuuZEwsU6sp5BrV8iAmytC4xS7D3YXHh3DJuohYEjfVBon6cXVtnGt2JAjEJhjbi4KLQVRQw9n8mkaSxL3",
  "key7": "Bpc7r74RLw1LSNFLe4RQfbS3ebnEQDv6nwaXzSPm38LGNekF1zHxGU2UGP3J4CergeLZg4NodkwXN24WQRgzYQo",
  "key8": "3cD884KmTMbZrb2JnEiTmF8FrATwt2TAZBEFN2bdcDeNVkagRAN9k8QrGRYNHbQEhxwWXZBu8nnajZTnQCzRQzt",
  "key9": "EySVsZcunuk4UUbhdcMeJn2VY5t7sps2qN3N98t4AAx2PYLqDkwdfEYrSkNMxb1fyXCSkM5gvtDx5YrzkCUULG7",
  "key10": "4tkz4jWWTL517d2NEUFfz1vLSpa6SWfXgb1M2qVRL87ff9nL7sXk5YxQrqMzueWC9LrPsszocbR4wHjcFAb6Eas4",
  "key11": "3iFhbTjK1xvqMHrGrCeVRXuNGtD4RWokqfWDCmvz5tWG9Tz4qqzoBmFedfq51nk2Yu1WihgMRjvMF8diifYnRPDN",
  "key12": "3EkV1nvPFuTofoAaPBi7yqBXn43nhKZQoCeh53ePDqkvWtGzzedsBe3KP8DHZ63ZwjMZUq4tnHewJct8S98VEoLq",
  "key13": "grorKtJ6Qqv4hw5n4QsXpTAjhGpfyUfn72JitCYoihUvS56voLGaJgkCYQzxbeLbaMn3fgRMv6ZTZBMJXmQmCaq",
  "key14": "2fR5mwr4x73dd2aGjzc9RtZyGtbWmLb1T6pU1kYSvgNWRLkKjVFW2LtkyCKmG821NWBMMWdqV88tdUZtybDcNnnP",
  "key15": "LLK7wHi94b8BxEHpJFyio4kiaeg9YqgeJbZcmrqT3YXu1uLG6gku8w9RpkweYE7jvzWoYRbRB3aXHgWjGo5UZL3",
  "key16": "5wAfrAtoegnSEbtFtCYS49oH8TVwR2P6QLdnMGXrgECedVY5aqcXZTnZZbYEEYNvXyKrwTWNE4FDHyn7tstdMoCN",
  "key17": "3AtwnzPMm6yP9kaQrYmw3cPbhoQb9E9Ath5VD2vBiSpW3ri4HqX3m8PcLVbBQtrpNmCM7f1m1BnTp49EHpS65JwX",
  "key18": "3S1a9azXRaSj8cncs8ZPwhkvW3JrdtMxuagmMYRfThUuLfcEogo6sfTtqR2dscCP98apY7JyLV8wuUtXVYDKVKsK",
  "key19": "3EhgLQtFrshv786JTE4geekX29khTBdsHdGw7TCj8YuR3ZXxGtKtvF99cbfFy4q7cu2hhiNcybRvNSLppJNk3SUU",
  "key20": "23VEUU59ZbvgKEvtNqtTp3LQ13iBFzVk7S3gS94ysETw6Mo7vtskK8TJTHuBVvW3AfKjEyv8dZhAjWBbgc6ex3AC",
  "key21": "3sP51woh8LeCnz6afndfxnCqo5BHE75iqNKRz6QtizQ8c5MY9bfEnr9c3s9Kwtu5ceMV83iAyQNCBKYRCQvWcmDR",
  "key22": "5JkCzeLJzWyD2MuCLw5Nkykut2WPRqGr8q7EgxBJQDgitowDK7K7o4hdJh2m4hqce8dHpT2i6xUXGZ4VcsZwuyA",
  "key23": "2nxbWfDD4xG8DAQVetVt72T7oEMSD2vZ2QKdn4y5W2gV3xhUyHtL3BLpNLa2QFp8XDCecqxHC9WMpHJP1M7Ym3nq",
  "key24": "3KmqbTNBZxnqUWSMCDtwaZ8i5segYCM98nAjB4dAqRPtaTEst6ocickcMzc5bupHQXPVdV8qbY35cWWkPGcZXe7S",
  "key25": "4QZpf3j25QcbDdBANA4ss2CQsA1umYxG5d3Wh6t6ysAzKEJA6gciZUcNkXmWRPz13PKxXhX1GrxSv3gAxmfXW7EP",
  "key26": "5baMrrwgiUqaNxHcuiqHc5XN4neoyQmFp5RNqxDQZYqasqtuEKp1KEKz35Lnp6zssiusALTAYqmTNSHfA8RNq6PH",
  "key27": "4aTmkSDwnrKHcNsi7T786azbMJ98duzjGdk3qWxvBhKSCmSSR9Qwgk1j3gfB54tt4BdLwFtu8QE8Fq3hqaLES5aP",
  "key28": "44AidiB2ak1zrfZ2oxANTtTiebKouYH7xnPejoAAXvwb8qE2b3iuX36AzYbukx6iqrj9Z8sFtyghhEuHog1AtRp7",
  "key29": "5FwJqPTeiFSA1kaFzuQPNPkbixTVUXHJW5kWUgiFU2FYDVoZtga9Xr4sLfCPYLMfKvoQMo5gUQKopbR3aQmgZXQg",
  "key30": "4rnNASD2Th4CDcvvUV2R6a328tWQjM6odbVZw2CJ8SJVqgZZj89hBX52CGpvQiVvKH1fmdFhx4pukhhM54Zb4ppf",
  "key31": "5v3hZNVk1zPSFkQAbzwboLJRvuzbat44HzsDtUxKZmfR3s6oh2V5msa4Xwt4Ytw8ECTNWJst4M8asdmw6Hks9y2k",
  "key32": "2B6jdUxKeWUoj3tjuHZREsxvinLHVdjDcqYifyhEsNzeQzurU15fqEdrsBFues2p25TffwiLaqig8gyiqDumVyPF",
  "key33": "27AS5qEYf9f3hDDHVEVwUhvtoVnNvMHMs8YLQzkHLhduBsLXYUL7hN2ipvJ99YTPerWGxYRPFY9fR2JGN8P1VvrJ",
  "key34": "3MMHsdP1YQCFxjSC6ABwfkqLQ5Lw8gmh1wZgY3suyr4GzyRRnKb3sxH9REMKhKV7ksJmX89Ch41STinPBSoyo4Lk",
  "key35": "2CQw5XdaXEYVf6usveyAHfr4CRQ1yDLsgCsNnLZwsGEs8s69N2yfNvYbpPAUgYqtUM9gocmeZutA7zXryr3fh4nz",
  "key36": "3A4GBdwccQYSTb3Yq49RTDqZ81uJZyf1mXjX4n8tYciaRuUr6WXofWmgTPPPH6QTwecU3RLx8Fo6yBnbadbgM3M1",
  "key37": "5eEoPcYkjTfT4Y1nWfYLDoSLXqwqDyUXLvzDpVoJh3titW35SPLTqFYDwnZh5wY16WsK41RVw8EEJBNEDBtSgf8J",
  "key38": "3s5v26Y1isLBbDdRvzpRLjsPwJZmM5fhxbSnQ46if5f8MZHo1E8HLyBqWEECqoHzHFaTVb6XqNP8sDuNxndFYXfu",
  "key39": "45V8C4psZo19TNNsU3p2Pvi9AifKnRUHCqoXA2Lo2Ax4GKeDS1NF84cKwHupAwSjZnZk4xBMKUonoLAhPQXJgf9e",
  "key40": "4KPncwbXb6jZJUTEZihigWE16HYUzMFTSaXvrjv1pNvKPqqmgB6ZdKfRFz7yDKeZYuYuhXHDyqxgsLodjd9cM5yN",
  "key41": "5n3dHAWVU1apxocjVsXRXGDtPz4sjK58R6ik9pkKP2QU1QDx28eU9UR4K1vHtvunG5grMPg1K4gkTuvQ126Wyaf3",
  "key42": "4fwnZ5Yu1tTE4GTNZTRtQJ6vCs4dB4T4kfpMf9CsRwGQBEKbMWD7YAJuHCN93t3XyussMB5xKTkMntk9TuD9VHZ3",
  "key43": "5jkpjacKw2f4ZyUFBFrSxFPaCpxHK5hKM3jFQqr5x7Q3Dpf4FSaFsAS1qEQswb7FdBCnBCDAKKExrmao8jMsBTw5",
  "key44": "5HMMXTF5PUpUpTG3Fb83vGRgRVNFimznB1R4m7gWAsRtGcx7JZdS7t39WiJNxaQozLWTQz6d2PhTVmjrdMbSvtaF",
  "key45": "2XQJZV1bkT8xjuJTFPMLcciJw9fu5G4DX8Q6M97pgHhYsd7YDsuz4gGwS5ryxdfb2oUacPBfqKw811YdCGDLNT9X",
  "key46": "4TCPAvmLd4dfmhCXPsNsGDdSSe8hjpsD537bQ9TKjm4SN2CzDenRwKRTTHTJCYuJDzxh6vm77XbAeTRFxtTmJPWt",
  "key47": "3edXVg1ch7dzJgQsejEcCma7m5tazLNBBcypAntHQnfE9aiengmCHXVxu27GqpqXsucb6j5KotfbNLDNALxYy77p"
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
