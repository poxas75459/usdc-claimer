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
    "5aX364CuWno9z5xkJRj7fpUrFhUskrtVFUmF2AkUUoL9UeLXA9wUWx8pyR4Sg8EDuk6TvKcjfFN6o7vGsr3ryKMC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jpwi12dLW8rR7H2d8UbpiFLiSHEoBdrjF45477Kv2D569X1xysStegN45Qa6SwQowuRjVkcDniJDQT5FpEg7DQ3",
  "key1": "3DJSoNeu3kcrsjbqFq67sZ7GzRafXg6hTF1b24MTiMRocaKh9DeqyEckhr53nh4S3zHzfP5mbeakQY3gVEA5hnLB",
  "key2": "2ppcwRyrgqrbK6d2EnQWJK1TsEmKZTtmw1fpoNMeqPirdtJD3qcWaqVhUWr4GQWwTVbKSgRfx72CMPQJiu3R9KHo",
  "key3": "3PVDccEJ57HTcvjE9sQhmvhE8XF9WtbqSm5rgKSMpqLWKQ7FfqUDHZBrVEkU1SpZPTvmbfUctBq7Jnm1RCTZHph5",
  "key4": "5wKSVaU3Duo9DyEADMKSLzmEfH98P5DUYR3sKX4SdkVSPni65n1HKSNnoZpooyrz5DJT4RUspRdkN1dTQ7UNfmC7",
  "key5": "5YqXauCkb9aYZ3iC4SV95uZi4dYbWbCUxZrZEo6dWS8p9T4f3nk7Ry25ttbosZ4Am5E6szsRzoTwDnwNkp7Ds9im",
  "key6": "5tDEK8M8CVmhhGq3nwusPGqNXwuxeUhb9bTtsC6wrbnurTdpXEeKQ2HiYsBTrkCB1qZRHeDPLBGbzUJ8AUa5y6R3",
  "key7": "oaBTuyecvSWL16kJSrdSfpoYHaz3bKDq1tjuAR54FGhY5njFAthhZsnptb6ya45TRM5FUHSJ15noMASN1rqe7KM",
  "key8": "5s1RTmJ8Ri9fRcxwyRF19XGPg6qbCFXLG1GmWAZyBjsAKgzDjP1koRkghT8HkpM7fi9nwGtJCNxbpKGYxkxmmHP2",
  "key9": "5zoeptLneC8fPPGsVXeGMV9hK3ZfzjLP9XWHkHKw3JPXN6nFHqVmct1x3rbsxpQhCb4hcGDhPkCXf5RNdxqGRMU3",
  "key10": "61JSUUsk7jz7rsTbR8x2egb5EhdWETAhJSPQQ9AUEwA6goK19mfzCP7mVABXLXcJLsPPaT311r9hWfGmKQF6f5nG",
  "key11": "3GmUGusuSwmonjTRHLusQ4SZNnuCajjSHLXsTuiv5N1YN5CF2nAkHaShWjnJmEP3QfUpkCdTyWnZCbtnSMMXx53F",
  "key12": "3yrJCHrFAgsYEQueGeVQfqRcnSAziABharw51YZnLc3UmGyr3f93h6ycrjtYcoVzWBPHYFvLR5vuycMriYxEL6Jc",
  "key13": "22xAcPvH14gwr8VC6SPBfkjo4cqMjjHnCQKGJUSfJztDK2E9hSDFtGAd8BewGTAkE5q2zTBgU3NY21Xq5KCiNMMx",
  "key14": "4fwrVFdyWsai6zS8HJoZP6Yub46LUJ9H1dLKVnkkrXsrMFFa3xGBDF9YZCXWCMBXW4DiLqsZZMtF9b4ZBeoBiSQm",
  "key15": "4H2aUhJeggLRu6fqcsuEoZQGEcufLVLwaNLbgX9mbp3gQzfYZsgwUg9tWSqRhVUFvqGsjE2FyY1uh2zK1D275voM",
  "key16": "3zSMEFAxNSo5yFYBJEALxkisnZwC8Qm19Q92o9r7RmiP6bYiP2esggxisecczEycxJkNcbSc4SSdW6GwjbV721zW",
  "key17": "Rc1wAQFBmCDhFG4TRTN6y5PPA4jg751eiCfPXyzR7QdBTcc5FKMg9hnHHvJGsk4HjgD7tZnFwPRAPexVPWsf4nk",
  "key18": "5NJqeBdJYsc33dYuFvW4qRV4WUw7ARCUZ6znpXsBxxLZafQ1AD3Bvoji1deJXUbZrZeEma7BxkXn1Spct7TJxMq4",
  "key19": "T8KhPgNqBch5JEFBWRphh2ubrQHAQPavTViWKN3yDmEc5JYSHJirKayyPfaxCFyVpEcaKZUwmc14EBY72PiSsTW",
  "key20": "5hNnV1o4q4ykna3DFVsdSKvDjathz3ZMEwUfXEUWjq9z7xotJdxJs3hZzN8eVJETHbVKZ5foscmjn34vTEF5ztaB",
  "key21": "3Uprm6tTbe5Ns43vVgDXZXHzG4uYgoEX6Hc81oot71VevkLLin6B2VpehvD1wqvxkGyHAvNwohqgYM7tiBp63PPS",
  "key22": "4jCsb8GPr7t81r8pf2NP9kFLCapkms8oBqQRNnsHHgBavP2JpVHxi9uEqmCrXU23kynxy4AbYG6AET6nUARka2S2",
  "key23": "3R3oW2azkUr55ogShs998bSugpvMdmV9LwBfbD62JR52yt1qsgh6aL8t2ZSrXyx2SAb6ZiBjp8MvzEF2CbYMKbU4",
  "key24": "WffCyLyLAkoSSw9PhaXKhEfaJ6RGESSCSf1twoxQiDWFhQziqJyyr9YcJ2NZcM3vExxCcpWDWbKSkKmncFAzFy9",
  "key25": "5kAf9W3N7n5bpcbCWQfXYEFTTRnWasJhfpoNdXxvfCPQDCnckb1gTSc59ffjPk6NdcJgV9eBgB3xYQ3hqdpDowHM",
  "key26": "ymEBmJqz42xhrCQnbFspCDJiHKXn9vGzG96hJqEXYpJ9NuLPiDr5QEAVTcW8Q8HYijvYp8Wx1Zhyc4nWM87z11K",
  "key27": "4PoCM4hBEiyUMMNcP6HSj7vM9XEg6dxRtNkQZTFRyL1TnsULEksy355Gc7EcuK8NpLqxMBXQm1gq7JB1BwtWZZ5a",
  "key28": "3QAAmcayNtrwzjVEE96RnYwLPTfqtMEqzUKon8J55bsN238QGj1tXh4BJNC3K8S2CBxfGCoSwoEjh86sHwsWDKgW",
  "key29": "5iPsBjp8wGW9nGKQEq7LShMviTSE3xy8zQrfYicrAtiR8n3EftcqaWp5b6VyGdbFAzK5LinbaEe2CH58srjfrjFa",
  "key30": "3xggKQumfvmmhSjzmuNH6p9tma52kpdnYYsBM73eSF3eouHGXMEqdrsq21fsPLns4BZPeMsPjKCWZA1SXDtBJyH2",
  "key31": "2A38jxaqgvFN7U4YwcRWv5wTAV5DniP5UPy1mjpp5fqz517HizPikTfFtSCKfmrQUZjLLHkmrx1iVHHJ9tBvonbH",
  "key32": "2gmGWHqMeGGkDZcKbTV923asz8o5tv951Qr3hdKXUrb9XkA2Y7ekAUwpy9BfMUphByVff7a5ZWCtHUqNb4ocnLhM",
  "key33": "3eEXo76sXwb7gZF3yykt2GV7oVR4nj6HDfZMAZz5ix9acZGdzucxRCVXAoKj1PPqV27bR9mBVWxg1DU1ComVde4v"
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
