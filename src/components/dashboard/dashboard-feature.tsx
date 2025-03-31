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
    "5e1heDEr9B39QYfTCLxyeXH4dfo7uvxf33guimpdGdLY5q7Uq222ZApT56Gpe5YHdnzZgb84b5uAKzYAYy5sKm33"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45zojrNtozpQn6nWrH7GCkA3yYHEboE7MDWuSGctNyeCMFN9VsQQ7taUyVM1ohW7qkAwT3BzhK8N1mCrCgTCmnwF",
  "key1": "5VUuP5ycspFUWGCxjLHWfBs7HZoXwxWu4YsJpg4Rz6RmgSJTSUwLN1S9wBgVEjAteRBUb6nD9hBUPaz5QXqeTmdv",
  "key2": "pJPnixQQnyKznJFfe4TEEbp7ykHt89a1er3vit9uz4vKd83ai91pAqgoGhz13Rsawb4b7fWBkCkLHmpBjxLDjov",
  "key3": "3xhs9N6grGtzbMsdjw5vvheQsZZEyRJoCaYgmQKLRK75tb5aWbuuaqvi7i54YULQQ19saDCUKUb7Xkvq4tvF7cf9",
  "key4": "3nQ9FaQx7DoNRMSFn65vApv318o8YzXfJSvPjkwxxPtVGBfuGnyAD8rSZeTctZ6caMMmVXNNMYBcy3Pxqg3oLfZf",
  "key5": "4Kyich4KuLGKpy6r238PhWZXviVujuFocMXKYRFyTeXj4NjZHeqo63a7DEvAGnjvMQYf1e2DGRevzE9cVAmhF8DZ",
  "key6": "7iyPn5ZNzSwYnH5MKKgtKw3ouK4iu8TT6CAf5ECoriTT8CaoMkdJUhcykFWhVp6cLpZ5i4Avx8frq2vzmCfzmw4",
  "key7": "4QrrcaYgmgpwfyz8KxSFgkNQuQ4ezCxpuC1FXUrvhXY12nCYHBxAzMZxZJ84AF7mwkGF6zJ6yfMMEq6kPNd1H1Bd",
  "key8": "5YnsLopJGhdJfqbt9o4h6EddJY6RXDLUfZbvfJSbW7Gv7uQ4X7JYxiKjsLKfifznAfK8mQA49x4hjxm5jAZ9mFww",
  "key9": "2E6RhaURR63rwb4JNFmXSjH5iGfdU7zXp4HWN5ypG17oNfSiZUZTWxCbGnCTP6a5djqZdozwVNmGCfKjPbTV8HKS",
  "key10": "4JQ9JckL8qurVsyK347qV3ijaSeuLBBUC9JWzKxUxxcUyokoEyAQZoUuKLhSyZnnvf8zaNXCEogS4vds3R85CLBy",
  "key11": "4xDPNSoLQtFKhu7vnrMCmtPay1mknY9rbZbvgMbMEWJrKuQo3yM2CCvBHm5BVT1AoP7JafymDN4NWEaNFVpT5wbd",
  "key12": "rcX3wEH6Hm5Fkuu5kjerVVPNFZddF5v1PsKDc7pk7CGUzEAEnuB7hwCdbD4KwsabM5xvuyakjLhCrGAgNJVvMB9",
  "key13": "F3rKP8hpxCoGTE3faDCcr9J7exz8dWRAHfUkwoiXEdHEcvgpZoiPyaQABkvjrWfo2ep3rdxmDkpazyk41kKbVJi",
  "key14": "3E9w8VFMCzBofZpLJkom9smmGtftsG22QQi8nzqkQyPHqozMHxEe91YGc98ZVdJiuTRtpjTnqgq6m7yeD5iMWct4",
  "key15": "5PkQVYF1cJj8BQNvxGBYa1bqxRH6W1DUtwKP4XugRyiA7w6N3m6PQND87duD2TkUQPXjwuHmsRsoj8SKCgivb84H",
  "key16": "56zFr63r7LSoNaosS4zSKqgFPXTanrGWDQRENFwMCYVG5dnbPX9vTVG7okUqDKjQ6KyNpU6TUvXGqhbU8dx9ysFo",
  "key17": "jj79RxCrh2hccuVjtRijyBU2fs3gdgoyDGmNpU7sLUGFJXyFn9NvXsaKwn6K5MN7XyEmxvipuU1TEEUy3wCi26J",
  "key18": "5KVGfRsP5QSmmBWbQatHWa3RNGT3nrkh64hJaYfWJpt9AgJ4XnpbMmDLH5hy2GXoSokLPp2CukDQbBKcAP8BXEny",
  "key19": "4WpKpQPS3n5ufD1h6BFzLx6doQVySUHyx6B69UeqqGausHqK7q34Yv8xZM75xc9rpqqneDfv9PXmfVbT4X99KHqE",
  "key20": "ypTsg8pYZMnWZg5cMkNiPDkpQ1zd8JgA4dwcLZegNJXGpPTrXLxMSesFRw9G6jwDkVkvLWAGpSkFSmDc27SSXnT",
  "key21": "7EK7Ph6X9GKitcSigBqYTts2tJVp2rvpZvSwMpETV8cnCCCJ91Y7BHFodQtMTpfX9xXcuNVP4NJvSRiurgrKW2J",
  "key22": "5oXe8xttjZdZsfdTQeRYUwwPBJKA2G218x1y74STwPtT6726LXGZaFBQbLwgPWhNp1R9m4gLuUTuvmwJ7uoCQRZk",
  "key23": "p7j74yQGpbZwRgcC4EiE31m26kyksGosYzRuBrVdGzexTQcguj1FxHmY4B7vRVdjdhfRd5GS6KN7iWNMEjGJDJ6",
  "key24": "21rtnuqWajgTTXMJ5GV4Vin3tBS2x1aw5FkubVkrzU1wjXhzLPCVec2JwGz7p3BTfWAdqjRUkyVU6cWvoyatJP2u",
  "key25": "5q6danyy1zqVF4g4cK9HyKyGjczdiLoGKhtP7k9DCDzshwRMhZhaqsFVM2wYzFmNMKXzZv1mTwzfqe9epXCpS2P",
  "key26": "2xEvUzkFPoLUs3HHVh7XmFpz4SzxY6m3PvY5cgVBo2krfTkH386vDgNuuwBYvc8NyekcjUrP5EuAkQRcZFYjnxeA",
  "key27": "2mkaTgX72G6WKwxjPPe6Sqd3tyxhCro4PgkXo6sDBPNz8aXA55376ZJBZFUXWUzykcDMvkfhPovi8HAsaPRowhUc",
  "key28": "y9H8vGSiDrQtbcLd9mmjQtvphi2iEqRxTrfUmuZn4BVyPVWqvGomHqzf694h3dhnZiBe7MNQ7tx5FkQ7qEoBxdc",
  "key29": "5g7UaRYSnDCmGGdixDrtU1UdH2grphjLsK6fVKKtVsdbn1DHuSJtBRGh7WS4kEGyRj2miE9E1wQzQLjty3NUtE5k",
  "key30": "9mH6g7PvdZ5kD3vw8csKSD99JvhHAwKRhqn9JSX4ge3ffLjr7dtaT1NLRM2AKZCSSp3zmmczTbUD2cbjtH1uZss",
  "key31": "2Q7pHDGfj6gqVRyaSGveQrjP58wsFHyDVEHTv6vmaeZZyLgTBh7TMKKXyPvT2ubrijPx2GZpb2FvydUoMVD3o7kG",
  "key32": "3E1LNnZWfXycT3EQMUYTSFLuTLixkRn6jjoQbYQVFxX6GyMk7PtKzBaQNJxfJeJiJR2VyXG5bpbxDHjdg27cyD8g",
  "key33": "2gsAK3KJx3h9WtEd7TeRDdiFNUXKnkP9DsFuvvH6EPpHDarUNwCZHqmJEE5QBnsAeGAB4DjVZsQots7kBb6ETyMo",
  "key34": "RkKGCKRVRLSjVTChba7roTuULsf9kQkiKL2mhXVdgPgo973P6AxeCSq6LwyKA57BdjcsBQh2d1NaXSJtKboesMY",
  "key35": "2Qkg5fRrGZwEgGUZFZhcCQKcLwc1PAvaCpXpN821B1oiPcY48kCQp4LcUEwFcJdCeG332NQ1HUXrRVgVnL6GAoCV",
  "key36": "VEqT7FGqAEnuL6X2xwVCXTWWCgVBHkE2d3SjrGuq2YxB869JMgeAiWs683jeeQhwPCbfE2zU85VYSHhwNafLJjv"
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
