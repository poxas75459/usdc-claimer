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
    "2KyzD3f4vQMEK6kXGe6DD1pM2d3c6kJ2EwH5uaE6J2h4ppmwMUT4KbBTmqLXNZJuFqWmejPWeLR4BkJNVrKhTyv2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VS1cwD3BMZ6At37rnbraFxJkCTSM6YLSEwkB3zPngXfxPi9XfBLQJKrmxKpSozzMgiDefTM1CFXwWESxr9y6Hvr",
  "key1": "5WhPsABoy8sSWmoTNxNDcGphdP2uvUc5iGdPwfaXqe9BpxZ78ZizPhAJ3RE4mKkEpNwUuASrDoX28U2HyDKKoiSs",
  "key2": "5Mpo2LGNgkhvbhZi4yT1b935n8SXcBhc8gUDHzbpr5vz7ASausrhxkcCPd7DEk9nmTw9XNjTYSSdGZsCD37jjXuy",
  "key3": "L1ubAVu8CSSc6CuxDYDfq9k5R4GW1vxNjgDiBGsLfxiWsc4idr73oLa84F71VmLZxdBd2QPHvZLTLcDdpE776F5",
  "key4": "2wCFxjfDBFRir3RQ5rpMJAYiWUgvxmmEQs1P941hLt9HkR73yNUrYbSKdNZTfoUbvbTyA6YyDt5Fqe6N1ihBBPxx",
  "key5": "MEqThUKSezc5RxRiUtknf3QPN6HkCFDjkbH9NnQTrrj3adSgHAcW3yztKnNiQXSAous2oVf68QmqjUonStnEv9c",
  "key6": "4xJa6jMyaSP1UyrvYxayHdnqRA7LFyHQiQU4c3oMy7M8FZaHhCnnm6VNEimTpmRCELgfsNRDi4GwbaXm2uUoXyYi",
  "key7": "28MaxHFAWkVHpEGjWfayzWx4efRozUegefpK9Hv4Pr7wGVULv38SWmtVnZaAKWyvmG8QvfrKjitY33kL9rNGBxLu",
  "key8": "5MH4TUWuBvK6ACb4Fi2qCeRc2u4gd4xUTS3BW4fnUQtqXQemp8EcXFm4v8bbQADBGd9Y2RyjmKDAjY3rYrU3WgSi",
  "key9": "2xqG2AcoSxhCDA5FVruxQQzQxPPn987rvSk1ZnCPgRKnHHkb49RZYMVzBLrDu6XUr9XLi1QgkTNfWHT1x2hPu5m3",
  "key10": "2HzwKcfjvQgjzwbeYaW7iq916kA6koNgSMV6dgxpcbHtkYuzXksn8RUfM9M5RRLbSEdUDK9fiWenXhhfUL1TcX7q",
  "key11": "VJFwp26kFJwo76C4ofXUUDAgiucWsQYitXfEZxUB7GbHVW3X5MXD9h4DrkM2yPCKQbRcSZbq9okVW6jY8Q6vq8t",
  "key12": "2993ZSu2F2y2sewJWHkWjZZyxkodeMnjrnZf5AEgRYfZDz75mnqB24wyvYFRbHzL6xs8Q2PtbRcTXUQRW938NBw3",
  "key13": "2gcpFKDjV7nrb7gSPPhHJk9jm53N6xQZYV7ZZqE28SJZ5KmzR3BM7VptMCzjjsJnFufLU7wYCXBLYeceaf9dyjJR",
  "key14": "4jP4Qm5xMYL9Z1nNaPro3foJDp47SuppxuG6ucU59X1sznR7828G3eoxmb9EPe4dDKhYfXoustaHQgNYRZa52Vj3",
  "key15": "23gJL9byB5RL89pBRiudGgZwHvfkby48kUjXguNfMtEz6muVa1iU1mgjn3DJVcMyb1t8c8ekbAyxwUJaCye9b71W",
  "key16": "2ChHiRe5wTBkEvTcMeDMVnghc7uLQ9531q8rXoVRSPpwL88xqyqsy6NuNVcABUX88BeoE1Df8v8D1yqYgKMQVwmC",
  "key17": "3CQV8VvTQiATNXebT8TFrVpuEFAdBhXYpERyuRkNWfuQEqU3DrFk9gvcgyY3ZD4mF3R6UDz69FvJFESTjXveWAC9",
  "key18": "Yv8VAuETdtBC6ZNehFePtRSgCwGEMmdRNvEP7XVARQvb6q7bQxCfy1u7ZpaEy4LR6o6yKdFq21U62G7sZy8fYzp",
  "key19": "ScrA5eWPaW3C2fy93RRoaWQCi5UEAur24rs4V47E1V1JEhypfkr6gPepeE3T2ttUmqRuAMDN5L2HDUEQX7XUsnV",
  "key20": "21srYfzHbR2ozFj6D6znYihQ5LtCGQtdsr9CWud3DmvpErMBvYBAQmUv8aiWHSjxLBnE3gjxyZP9nY9tUGKi5LnP",
  "key21": "3s4DEV1CXwNx3Vx3V3ajX8KqMAXpbQoDxhBUN8Bi5nHZ7YzYpebik9viEuCNR6m76tzCRD4Guuhcf3eJ3TNtLS2d",
  "key22": "5Z9FdmL4zENu8uVFvrh2zEGJK5FDcZX1v5cKMi2PQkkAX4p3gJVy4qXMx5c7e9wDC8vzTGrJPE3VZjLM119qXZsM",
  "key23": "4shWs4NKNEMe8Dac16NGGC6BvvBpVrGzB8SneNFR5RJhgeANdP8FYTEEUyFad9c3XJBUgB5zUT5EYUivnp7XCRky",
  "key24": "5oYufo6JVexB6d3MrkmnC4yDxf67Dbwyk1yvsq8rFNjMBGnqxMLXJ14DusVtZopTgtjTbjJCagd55MijcP6wd9nE",
  "key25": "3WoYQxHi9F1MD2tAbBiPumKbrigitSC35SfEnCTxMQAKxdCAMRttUzeCqFMwoMo6LTB89J7EnPr68BzzUtSStjfm",
  "key26": "5xNBgLAgAthK9s6YB7QAg7sPvASocHYAS8axsvPuE6BPGxfn6ZrZCYuef7RPtBUry3TTE5qNGqKz6zshy8hQ9Wfa",
  "key27": "3GES45qae1PdbPXkma6QdhxCGptcg3AQtuYh6ZMFFUMYewdqm3JdPrq4TyrLpPqhR3H4y9nsRpduLbni25tLCwps",
  "key28": "5TtCaNCNppC6UhhdN2wpoyDQmXzwowdES95D5UWHva5776DHs9nLTeSenoQ27doU5L2QE1LZ1Q1mAUnvAysJ8mfy",
  "key29": "2yMLNtkCH9hsexq4HQNenrJnQqZTgDCEVQXuYWDddXRiqBY7zRgPhTmfHfE9j9c6NSMZmCg4p47s5km5pvei5TVA",
  "key30": "5hYHK43Awa9A5iPM81ghhFyApZNLGpAMvARpqtnvqAmUBgm13EYrLHXWWG7hV81RueK9wXd4BJqBVVVz8DNWFoY4",
  "key31": "3xhD5HMogJ8cgW297HKnz9YvxNMMx6doAZJSwCs2d2fn1qFjySvS23CXUkwRCYtjgpEDeXYrS5NTxwDT8xDj9pVX",
  "key32": "3xQohCHSTs13CZZ1MQ36rDUx2ckpqayXLUtnMiVjZFyTNxcGyYKfPS5qscp7gcrcREucss9VsNLcqdGnmHw7GCDh",
  "key33": "4F7XVobWPJw3foMy9PFSDmtydKwzoBEqN3njJbyQap17Wg3QKCRXhxfdXRTtqS1xYD1K4u9zo1kdhWAK539HDoEy",
  "key34": "62ZwKp4HGgw4dJ2J3evtTWwtf42izq3YxnAUJSrSNmvx4JjhxVHe5gME9zXnFp2pqV2xtadRHGHHuM8mGunTnKs8",
  "key35": "5NGvKHVniddKe1VtSBuxyxZLtRr7d8NV5C1qt2Zgn25fuRVFH2e9misXE1iRqu3hVK9ckCx3MCXMcR3heufa9fvu"
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
