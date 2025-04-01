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
    "D4XdkXozpjye3y9y55SaWLj9x6Kj5XvDJ2xBVLzXy9ioj5rgAaj4guojE4rfvBXQFjntMWviZr9dwfmsJ2KRATD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47uT1t3aWPhjRfrAqdCdbGf6CQmXE6B5AmMjPZHNcLYSrvmf7Nt9x47i9iC15KWmycNBR2xGf9Z1WSn41czZeaqQ",
  "key1": "25jNHeaKoKviy1kEPKFhzgXSmEduVbsUCK4iSYWTg9cy3avYH5Nr7tKgnVE4T8QwXhu62ipMT1d4NKLSh7cUjv9y",
  "key2": "Uy5c3agvhbQr8vxuJKzRhBzHRjCi5SCQnRkBtXHhmMUMdqUBxQ6aqrBUvPjf64rdhP899UuvKtnxEs6T94oYsxu",
  "key3": "5N79W1SCtYMkdhd4RAK1UdkKLCXdezJnGZHaosuJcA2DbnAtYZu8Vfqqv4hYkmdttRXQWKqKJ5Y36isky6TnZUHY",
  "key4": "26LHnookbFfYPC75FSB9oHgt5sBnfgUDfiBQcE6SFwHBPHcRqfcJa7iy4xBbg6TBE3KZjVmn6C3BQCvZ9hu4q9zv",
  "key5": "29zC8jUn6GGEYGN9Q6HDczp9bCDCPhihqLgtTr6uP2YptXz6FJzwQ2LP65HUjNwQRBfKC3vpMZ6yh4MeitqFUKU7",
  "key6": "3Ra3JTfc8Nz2cxKrumPa4RWAwJRVqfPCnieCZd2c4JyqXuW4eggyP4Q8feffjK4nfieoV6WhXjetLQSKSRpymCNi",
  "key7": "4afuJcTs5weHNYUGV7M7ysiuH91R8QWjErcPQd4RXe3krnNeegzwXcungqGiNUttzrFY4dVV42gDXzeUMSUGqtV6",
  "key8": "3RP3QEC4iSevDZA3GvQ1xDf49zxwqipj4XaDz6exL5jxWeDZMVE4YZRejxepPrCWLMTiNELCf4zFRS4Ce8AXK6ta",
  "key9": "5XGY5ot7K8U8V5Xx6TMPd9P6vpvAQ1jxyRdFEcjsDGKjmpAdNvds4KcHsyntYwXc8y6sgAev63A1oVqBFLSkjwoA",
  "key10": "4evLF2rsPo8nrfTguFyKKUzzzUzCiD4LpMYoCogHQjtxgFsymSq5V4GXBv1V2MfuiVuDWQ2wMsu6nnvwG7ijo8fa",
  "key11": "Ft5sbaSLGW5zUq96K9xNi6MnQUXzgBhrnd71EFZuBoXiS9eEUkm69xojW54LmAPWda167pZ5UXajxy3dcNcbuUg",
  "key12": "4VFNLGjrFy13FcNkamUknVwxXQvvVzZH8a9Qs13zBeA3sDrNw4dEkovr7xfKaRmshgF2kRaajkYpzZPPkBFMPmrB",
  "key13": "vvsNbgLw317HQaKgqzVfAjjNFb7iYeohfDbA8E8jxebTbejttUv1BC7USRqF8cHxM3BRDN2gUVuBGpL8Eq7F92G",
  "key14": "K8HMAyGpeNNGAwHNhi4sgYjQpEEhCjbL2uih9KvX93cYeF5t5XvfzsYRaxVMs9oSNxcRDvFXzQ6zCDArJWavRrL",
  "key15": "3TZhpK8B5hTQDgp9Y8rbAFcFZLogFYPYwb7e5KGj8qobQDJefewrvCSyc4ZiB7F1iR41YXNtqzqXGUANiZjkB1KY",
  "key16": "37dEE7dargvzKJqE8ovLXpMXTd1L25DxjnQnpf9JWkpcvBDJ9w2ErqnoETcEU2vttFA4vRDXBC8BotUE7Q8muach",
  "key17": "7qdAdzJeJf8N8j6JGGFDFckoohCT4YkL36a2nwzJyZ8Wz9DDKvpAFD5BgZEAQLpF9xnQE1wsBX8evQUURxwNyuW",
  "key18": "4n5JpuSWNPX42MCz1uzAUNsZzjxkqQwTEEDMJwGTbHfAwMnAawLDVUXobyofFLKqV3rwzL11YAiyRAD544w8m6ox",
  "key19": "4o5jquGzdYgXsFRj1dHfKixvwDg8r9yartHmuSnv2FqRzmtB8aZJmpCXG1dMZKzE41AZXrPidaAd4eMooqgyA5X7",
  "key20": "AqkvDCr5h5DWYhdKcAUonWFdF2UDYwmk5CJUbVnaXG8JGbKmZM7k7yjhAACJHdFDFxNi2rrpKC8WrZKWDBVSaDN",
  "key21": "4t4qSHP9c4h1UEdFPCw21tpZcwiaykBfV4qPJf2GDLQAutV5emBv7VdWxirMxoixv2HRx4m7KagA6bts98fJsAuD",
  "key22": "5J9oW5cQnSqxvLaYZaPwZh1ozt5Jge7Yh9f3VtgzSD1A5F2Z4jEyKBV21J2SP12WT1DnuE2eaLGMsqrAZWW5kMY1",
  "key23": "3rcB9TkG48gCNCC2NTRpKbNBHrWPBiXET5VNAUoaa68aQPd3p5SPccJmhGL9XngfQUhU1B5fsVMykbSpxwbkNhSh",
  "key24": "3z42DfGGn3xGz1NeJCXKn1dwGTZT1TgUHEDJP99H3MApPu6mWBKfEwBi1hBnDGhxFCyss3gjS1xGkNGNTut81CDV",
  "key25": "wuSRHouTJTzBLPuQyb4J1KRacmP1fAFGyg78YwZXwRjyzU2s1S7z6abYvjHteUBpEJKpQw76FpTHyyZirncvTPF",
  "key26": "2PC9vVcm6JNnf7VpkgtjmcAd4EeRaVT4yTvU4Bd4a6V53889snoFpiu7oJ1MbUznzHFtUZW76FrCR74frFnDLDDG",
  "key27": "3pzCeBc4TiR5WpPWwyg2PS5H8eWhcVThwwxRaQDdEbk652Nih9hipXPgDbomBc3BuPh5RJ1yHRq8LfX5bfvh6PBZ",
  "key28": "4j5dvPDG9T17CfVtX36G6dSG9mD4kz7NjiB39d1St355FbWAyS2WmYMp1CGg2pZRsXpvbbiZyPYwNrbGU7BiwGNa",
  "key29": "5gxJwQLKga3PFpu7c9bzYWcPoVnpNkPNV2YUBpEEr3Ph5MscAUz4oy1D6Y1tK3h9f2GcBjgZobQpYzoJmJV56RDs",
  "key30": "5B2msMb8Zb3fJ1Tz2VKpFPqwgJayeX4k8VDC1p8seT5oMroee15vR9nyN1dmTpKaLdgA5jedEpwBuPRb67ibTMPi",
  "key31": "DVdfuQwqq5R8bouhkemVUZHH1BaKrvPEJPJZo97yBNz9aUEAZacJ2J3JXWz4F2YPCrL878jeE7YhEtdcWqq2T6a",
  "key32": "2UVQxuAYhM1i5eEaWvrL8XApRQ6BZzLYM5MovbTdYnSA6efTq5DxK2hCDCLTN68HHiXTbX55yNNdkScJTBCqU3Ju",
  "key33": "2MTkjCq3jtVgPqyz6cDv9EHf8xP5RRvHgCZQiohJUJBz346UzUgt6e9ZWYJjYhBkRCLpdrzJtUEhbcvC4jogkSRq",
  "key34": "4mMFPGpbpWpiLTREoKB6AdhbCcGF8ams6FkRR9uzuoXinLH27YbnnM2PcTrDwtHSCUdFwDW75PUtJrWXZLZW87WG",
  "key35": "4TLEc5UGhh5uFhet4X3EQ6FSj7HZGg97ZUxLG13ghxkEwKjr1xba18LKN88xbEsBxT1gMni5p9jLjQMcoYfkaT6A",
  "key36": "25WmYKzkEYbpSLcpZfw2qEfuKeBL9Rx28voDnCykip4mqR6WFMao3k2MuuXbSTxEh8wWi2iVVsmAP3ycJrpXarHZ",
  "key37": "q62tZabRHY7v9wHhb2vAwEsTu8U8QSJuQvK8WheSFGhCUQWhnWgfeUv4jdtgy9kgXy8VR6oJaLMeJrJxQ4SbhcY",
  "key38": "2cebx92VRxVZ3C5zW2csMAo5nZNpQ9rPvaUZXgfr2VBDipNzqaSygKmmbghH3Hqv3pAhjXTZiVM3AKZn5GYhJZan"
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
