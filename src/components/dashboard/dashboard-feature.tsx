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
    "36LUJDP9FXPZmu6UkJRRHnFa1yUgxDiYruDLGtLUxZ1HPVCkEi2XKFdXKtT3jaiiXs67U11M7tH2VnAM3nNXYnuC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Apv5QjivUMugryfNvy5hAjxfhJkXSmbRUfUEaiU4bXExN3uwn4pjmueF11NiWiM9uhJbr5xF2xHE5VoiPBSceDR",
  "key1": "5bVpurUs3MggmX7oUito3VN4uAoNYXACAWrfqHt2iyrVYhiuqN9QhPaeqJbLByZE5RckfvK98e7U4EqqJneVKvaB",
  "key2": "PLtWqwJq4CzPibVtkTo8VGsdhBDd6n32v6GMMK5CBn8sy5UPWBGCseHhKh4jYc9BFRwHvcMysBokMejFWLQGWQA",
  "key3": "3TNvdNLoi3g4rVyF146W3oSVaU8Co8uoznJku2hutt1sRxWHRce8i5kgDoQ9AD5Sz6nBRbLve2LAYAfmEbU2F284",
  "key4": "4fRrqQPZjczbRsVG9xGJYhT1fxBX4DNhMcExrcf2i4FCZFZSM2HN29EVLaeWJ4B6umfYraDGTexvWTdS9sjgwE8Z",
  "key5": "3JjUPA9m2bSEJbVogoH3giaTENDCGDjGvsVwWMq5kH7A5hwP7kba7tQNE6xR9imRub7hVwSnSyXVy9ja4SD8Wn4B",
  "key6": "3A3BVEYrzHDfgpCFa1pNMkDYLA7xL5qZXo1DJRWKHUMeYE5FVzeipGR4Xc3oGKV1qoUnVWoi5DvhLbMhmyyggCEa",
  "key7": "5T4u6K6T6GyqWmY8qPxg8Rk3E5tnNHVTjQCTjbjE9wxom7eEZRVz771XxiuuVPWDuTR2Hhxg5uxkJ2gCYju3juNi",
  "key8": "Fux1TvT12w9X4dyAANzBU7Zx3nzbYZQdF9aHZFku67jWzCFSPUfsLZUyx242CynEbHMzqpgLXo3ynEDpYcWhiWb",
  "key9": "4N4S7u4eeo1FSc3cqfBRsfmBPjUsaZyJoESgdkE99k4GfrrQBw2rHDJ8jie9eyRT7DsiNKepEtm8iNSvVQE51U4",
  "key10": "3CDkFPg3UWShrmipcF4uiCjhXq9Rkur34DQbLshADS7JLrA8Km9xJU6MXxp8Vh1zAfS4prpE2CPeXt12575iiyWa",
  "key11": "3efpuaJDCjssaN8Rb137Vh9hp5iGeaVmfPcBqRmFCvZ3DN4JsX2S8v1RQGkJcjgkPnuBgBUH31HDrpyTJ6fErvqf",
  "key12": "dTtRSgyMCMHk6REb5onQPJmyiYxdG38UBXisa6pn8Y1t2Th7PSnuiYDYs1ishDE5P9tD5Y4fzubic6xiMREMsD3",
  "key13": "41if5BoynykvnnF3gLxGNi21NqnLJtGSXoHf7EPr4ybPGia3rRYZ7i6GoadR3SjK5qjTkonfH1YvMv6akw9ENYQ6",
  "key14": "7pxuUHqLwf8apLjccdNWHjQ4Cqs1rZPFQynDM6HmheAmr63zqpCNGrcdfK5QNTXKmdeXTaHV7vmUKyXGu5gdz2Q",
  "key15": "5xEADM67P5RE356Dz5ebAtZCs4sR3eZ4714SdvG7PcUVWz3t4CieLeZHkU9qTgyjEF4masxhARbT1QbWRKjvFscR",
  "key16": "63NXa3s54Th8UdyegsMX2jkFf341iYodDK5eAC8kYNXeK9C5YHcaxhWQn5DBRRPrXbM5SbVPKHw2xnXn2AMrerYA",
  "key17": "LWWdP9U3JKaejirfsJnBkCGDUjE8vh89obu8A6tucpkpfH6nVNEMXTTrjeWxHXX1whTpqU6giFiXomwdKXMBMAG",
  "key18": "4pxR5LGJc1VEudvGH4DG9nq7cMXwDyPknxmcGNxNUnNg4YBpQ46qBiYq5KPuNpX3stBNg2Gwkq99U6vYxa9H1AZZ",
  "key19": "3MBzyGMye4HgMZwJENohLqPYuJrUK3cXrzQegQaYcpVmz6WKq8DFitjKrzxGvceaKpmZepwwF3sNV5TxHJuEnFgn",
  "key20": "3qSmnRKU8DVFMmzcYuMKF1X2K54LPxH9CjT7u3hGc23XQGpp3ymN8BYyXo7w9LxgrTcBMhWS8guJherLuHwf5GBm",
  "key21": "65iVfAugrSEJeMXEwTgRMDSLgcRh4V8fRdwPNsAgX7g4BP7AygYGL4Ki6GempJQQxjKA7itJ8LdhGaJ7nMuBcAp2",
  "key22": "2k75eM8YXuYJLm535XMsdZjXJT4xAWHtAww8P2PCoXd8YTDq4rnFiyF4FcJyGAZZ8csv4qRBdoJXHP6Ma3yKZdc",
  "key23": "k7Sr4Y5Yc26SmZGGWKMGKJ5rUMLDrXsuNSJu7Je8SF5FySykHiuVDg4dQ6jRksUEbYdzwveWtFUy1aGwf6hSYAx",
  "key24": "4gX2PJjPzSxdE2GPaxmFwKtykWS2eFH3x4w9V8qoYVS5nU63eAPYwHiL57FKJRQcm2nuMB8JwRN2gPA1XnwvUVcR",
  "key25": "4AX6YEhtcG9L7c31X5qGmA18izWCFeMGkBAxTcVjTzJTNwEKTe5VUWrM5H2PtSVCPR71EPqyLM1JuDuYmMs5QGUc",
  "key26": "RCF3w94oCzYmYjw6eFgfeWestSYJSjeDpvJw7gkB5aY3k6TPcEwWqTQUub1ZbNrs5YcTw5iy1xZoa2T3C4y9XnV",
  "key27": "ZkHPXPy7MS3wbGA7D666VXPScXtZU5fDy6eVyGDJCniy1kSDeDsWGkfdg6PwpGsvZNcoZWtazRmEH6jcp3TvCBT",
  "key28": "66ET7RKn7EC2njjjmim5pyLU3d4q3qSRxcW74fTBXERyEAQrEQF3fBgpxj8u47gJYeRJTYSR5kvrQGCy7ounoYWx",
  "key29": "4YhyyHcL22KykxHf5FQWFdShsmdVKxUWxCoLYNiNwLP99hdKp2LgAYsmzyAModDZuhWkXwatD1RejYuRKYCh9L6t",
  "key30": "5xajdFotPHzvADoYnVStCEujoYyc4xxct3i2wWkxgQKGc8Ef42JT6sg4ANoSQzCPmsRzMu1yLGzTJF4WZGXwpcqh",
  "key31": "4Sriipad1xKbWk6NEL573X65J8U9XYt2rudY5sSmyWR1wh5i1wvK89Ajf1BPxhdKArD1pqKjWzhMaahfvKxaJao1",
  "key32": "2fYhYWrhQL88FRm68h8XAaQBk9LJYPbAKCC2jpgAvx6i1MSMrmBEk2PGjkeKhAgEDqxfEU64APNipBiR7XQyWEDY",
  "key33": "5yhH6wr2TVrdJzPy8V7XxY2qM79jPkX9jsYG2r8AAiXcqpjiqnErk5R9ZLLK7RuSd4CG6bPFghy4mkMBQXBJBEyB",
  "key34": "vEHrC1THHMt5LjnLiVn3fsqrYFJVB1MsXKWkk2E3jDGkaifJJQnqX7tZYPwpBoSbSpTPTNeReF6B3JniYe7qNdv",
  "key35": "5f3cpHBbW46Y6DMRWQjQJoWQEkQWWbTN8cAKTv7kXqoaaNQqV6D3KH5YzAzsN4AHqZ2rJucttxtPK7geFXLboGXy",
  "key36": "Ap1dcTWSqGzmxMcvTcx3415SDYjKzHE9euSax9chN7dSHyyZdCzxQqbNMSRRoAEMWEhWoMNc1xuGfe4kX7XRSi2"
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
