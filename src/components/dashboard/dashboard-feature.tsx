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
    "2wdPG2S7vjwDkEEVoiyL8SN3xd4SWqTYa7vsqQe1Xd8xDGj5Y2dcgz9B37CMniu4qu6prY4iG8FKqwhWbBi1rrzj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9zoXpf2U36ow7riWKP8RFzT5Wc8fRGQBu52qc9qpsp7XcQBQvjVVyLAZZtC1uXDVg418V84ETScw1K888AqFH7X",
  "key1": "28jhN9miuRjKm1ojKtGuG3w2VsvbyqetEokDZvoSbycZnEk4pMNxMHUm8ATS6Modef8pmZUZb6qnPrA7KhYhjhrN",
  "key2": "34f3EB2AWhhyehxppmGKh9RMMZFQreXJsdxJsnrcsmxWn9gW7eScAvPfiPg9CbNpUtQZTRdCS7LQr3T6V15z8y77",
  "key3": "398sEex59Ku8J4D6eK3PiJx6LbBT9jjAGiZwaCM6QarR8ZxuvqPAWoR7h6EEZjpX9ZiLeNKiETVXa2AKnvchsLfW",
  "key4": "51UnnWG43xqRQX6hS6vZvUuewspyrNK3oErT9CfKVbWozkWJvjw66V7CkDoQYCfmL8SD2ecPMWz8Xdk9sJGjHYGx",
  "key5": "5Wmd8feB8Z1BJX2YwjVgT1bwkn26evAKSeMf8o6PWCTsq5F3VYddBBDEWV2mBeSgRhc33wWsor6E614fea8kAGC",
  "key6": "3c7xsjJb557U2Bt2eQbQfz8PYwnK5TGezbEVUzhDgpJ3wvDUm7qvZwEUTMt6rdiKq2AH2sh51ZUDnqMafyXVrgng",
  "key7": "4jdaXqgjYZziyP42RuNEeA9Q6wmQ9BQpwWtdhGgXwqSiutGf8ofNXwB2eWBNJohMGPLHDyrqVGfPbFE6E7cgPHkn",
  "key8": "5PyR7917k7LdZwJmogPSVGxVoJFRUQgVh5m1XHVhRgza9HxVLEg5CLANejGUJ5ZRPmNLRnb2pcmH9mDNQrPLLEMM",
  "key9": "5bT6cBN2JkEGmXH9rs2o3jXSLzDBfNnTUiMcKXrKxfhgQ3rxJ3P6Moxo4JeSqY8gDQNrax9qQ69sXfUMSGmL2fto",
  "key10": "5cB3SDcjjWMJahBDF28hdLGvnvDizqE89TQtLpZoDYqGWCH4hhRUkA5ixtfpwxSqTk1U8P1wEeEjVpiud8ZgAuk2",
  "key11": "B7dThMUjtNurF2PwAiLZ7sG2qQpaqoHBPHC5suX55x6yJ7zoCGUQDbeYMbTWH4tHZBKak4HZpw3PizGNWVzvZPq",
  "key12": "fLAaguB2JjH8fjJskMbvPTznPm9bGtEY7nhnbsRmcrik3ZZ9aHesexGjf6y9ffMShBFSC9Yb1ECFwNf6rBdtMsw",
  "key13": "2jfj9pWbKpjpPGhmMY72HDY4m8LyPJ3HAJ1YszYcB8ZGVya94cBBiLFmYR4autV77ywR8WiqEmLpuDuuMiDtN1ss",
  "key14": "1Dqc54JDCu6sNyb1eaQhLyh9BoPhp2AuQ1ueNXsmZWMv9snY1TqXWDMApJ7z8WyRviH2Jqymg7bcgq8jgTGbb6Y",
  "key15": "3mCCu1kcBUZuVPPBWCtafrBdLDBzNEEsGj7r8FshmL5H12Pq9MiChYKbDJYp3E3M3RRxcjh2CUQZQB3xN1e8nV3S",
  "key16": "2fDc1D6snwUokyvTFfS9STnbAsyxS6Y4TgGcrcXnZmHe88dU5hCjF9rnNPokpgXAmfSf4FrcsxM4GrLrtPbeDdxo",
  "key17": "2xjZqr1m6118ixvzjd4hrSNQMUZEazVyE8ceQrauFpaZBDQzNnT25mEzZMqCHErxh5Q6VPfXkbWMD2SjabK7RyX3",
  "key18": "fWmaPZBbMepaqV96nkpm6TUe8D9cVVexkMMUMNNq9afFFiv822dVUpwzH6Haut8dpTxYt4kZLbtF47Hxkt7NsKy",
  "key19": "3xbYCaw42gYHum6TAKDfSToZsuBVSUc2CSDy8JBKiT8rRDw2vZuCvD5MtksysToLav55LqyfJqez8CMvu1pDbLok",
  "key20": "4qBHrs1JVLqodUvwGjLGQByH2MNDw4xYycavVAYmVWSxr31DfRQXDUKgm6vVGgsPeTcUHZyPZoJn8Y9MZ55moCvD",
  "key21": "22mfuv4hMSJmcVFybNZisFj9SLbmisnxj7QrH3fakT8EqJ3L3PG8ZSgnS27zELq4h89XiJJ91toR3hjsSsPw82Kc",
  "key22": "2C58va3L2DrEUcSGQAfW86hxmJ4AY7XSVypJxNmWrsM36gBqao2FP8LWVXevmFC7vuihpg5zBYDngVAHTfFzGwxt",
  "key23": "2KXjjHyXgLS6nVrynbg2tQFvnsri4etmYHxxNVswsUE3mQeryMvBHGZqzbtnJDi6CnQzhTTPGsqRWk5ZncPvrF8h",
  "key24": "2MRj5Y5gVUmnumvR9vrfkxK1oPid4bRZAEwnFbWbrFopMT23bGNuY4UDnHb6kQzPxvFhyW6AuybEV9HvcCcPUL5S",
  "key25": "4Qhemyg8DjnVc8URKhkHhd7JoS6nxqhzaHAe69r1KQGp6NNEXBUUz5vgwS3iSwjtMdZRQPn2eVxoYtF9TSTtdEAy",
  "key26": "2ouoPa6bt74A1JwfgeqzqRRrHjphQ49Rscx3WoWYbm1ac6rjfK5jpzdf2X4p3HRtPAPcZpGRbHKabmXeSE3Bn4Yf",
  "key27": "4uRC8NqQpizJysrA9z8FvL1kchPss8WLnw2MYosw9B5qEAR5kukxza8yyEdtYbFYiJzoPGTwx63NVzXaJpSdyuLx",
  "key28": "2TRckFBxV4x71nCqK2af1u4piMZ37T7x7shXavK9UYFJpodBozGCgu3PBvQxF8jPasH7m2vco3TpdqSgBQEWUFhy",
  "key29": "e3Vq9b5urqLhJbGGrTERGBQRKPEoNDqNpPB2sm3BbdBWyvedBq6Fdn2NEBBfQ9S2sHSYQJqFV8X8ZmKMn4vWunL",
  "key30": "4BhGpY8b2ntVV2akqeCw2WrQ5DJzEdR6RhfX1RGArXnvPE73kcT4yKUVmYuP9TWDJhiGqyENL2BmbXXe8dhQhaoi",
  "key31": "Ro9RSTNu6Gs1DLEgX3hhDdf3ktC42SwaQzuJgtYKexvoGQCWTiVYt6GxkjaS3ZKXGFfDtj7eGWGygKNbEccTjzX",
  "key32": "4hf14jpUUrxxXTsfrigRbGVyAUUwh7mZyYU6DxZgCfeF3ExWw8PU2QQRLAD5D842NJgGEBCFsUGt1Y5Ku7Sqno6D",
  "key33": "5aMVLUQEFZgeZfiip9e1HQ8GVPPkEJNvJQrUbYhBZZA4cCBZLzVmTbF455KX2jrRMHZyMVo784hfHKXGUCSuDPCh",
  "key34": "4t7cYWP2v1aciakFnzo4ESkG9Tr5cmr3iMnPx2YjbseN1RZiBtCQaXy8Zc33mLSRUJ5KxowsZzsWrP4qn7A5zDog",
  "key35": "2UzAgfCX2e5649C1cZYLdqFvUGAYXKQKuo3WUSKbgU8jmkhYJm3Pe7cdn4xvzHJYBcBNpDRLBuJ5HHDB1f67arwx",
  "key36": "25y3VALkgUmBn22XhXTm62Hcu6S6GAKfYoTLXxiZ5b4SHUNqMTME3SJj7UqmvYhJt7cddDGWo18wiivwRzHfHHYY",
  "key37": "2SodC2cevrEriVMq7KRbuevaCi3Cgqi7Y5CCDSupCUjDFDRQxXjEP4otGYEEVyLCPeoSwKaCT7JeshiLj1WXusGv",
  "key38": "4Ztx1ATwTug5faXy1Xaryws56vcUrWuDsD1oQiyTpV95q9qJVnRQMnni5zthNoZxSXBaKevfDrXyjU7MDRhJVYhM",
  "key39": "5GDADQGGU9cLyQQcZK3TETuXDU4yQHgcpJP48zPsspgiqM42UJZ2UuRjxrLxnk8keVDFEY9VYywwJNDBf8pV7WWP",
  "key40": "4XspQPNC6ikFnDewqXZzXdWbhDCmcXYfyXAVxFbcXsLfd1PuQHqAc4QDKDD1vJUkJUxU1kaRop61G6WdvhZb8SGF",
  "key41": "5mcob2xGXBGCvNjyEjB6tUxvoTFh1kqdqq5cvZfThHBaJUXR55bL9wRWM6wanKQLWkNj6QTLuMeSd3nZzECYvp4w",
  "key42": "5VJQJNmXaARKLWh19xVdnFQJo3fodeYGCd3o9XRcBf8oDqaCyUGFwQ4GNnM4L7SDA4hmk6DK7zaa8SL6aJKDeuVy",
  "key43": "DjTBraNfCDNytj8YpoZubq5HvKZrEtG1Bg49g2Xo7eeWmSZPphC8a6wTirXAfuUa5vSTn2aaWqa4VMyW17EjUJ2",
  "key44": "4Tgn4Rb96Ptp9mxLKujX5qtcNHRuSqdhF8N6wbr6h5jQZfj1Pt9vggJ1aixdoBGUziVqTzSPjtDxK1FSXUgfTW9P",
  "key45": "4R3HGbwCDRGSru56pAdpgBkvHtM9xdSbEcPfp427QoHSZtxSQEDu3Ej7L64YHejP7SNqBgqBCiBfKJLWxFspXAz4"
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
