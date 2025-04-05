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
    "2E1J7krM7bSZycegejujnfWeB7o4AHo5MPA7QkkDwz68dJUDP5DaGjMiW3BTFXdtA7kFmWPuTdKNp4Tz3dF6ERow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39KRMsGavEzfk4EZdb5SNUR6Ghgdc8GkQJrk4fGtE2JGWGk58mZkMHWbN7m6i8H9gz8zMba1szXBcivX8ywsiKGp",
  "key1": "4tEJAZdPYwtuXsjjApBv1DkyqT3dzit9QyNw5EKzVnJLvge4MkmbWwSPB5WMkx7ANMLp462f8tTC4cUuqjvHy6Lm",
  "key2": "5PWcK1opWN2Bw3xYhjvxGNjxk42DEjnL5kmxE34DwxHiCHRWnFCdpG1mZRGiFkAs2ge4cmNB9Av86F2fCHrAUCPP",
  "key3": "4t4kuoYBvQm8AUMKMK9xUucAhrLBSu2GUBZQSebQ7ZepqL5NDy5GpveEz7vd9MAqd8PQ1zDmCNDmHZVS171TfXKK",
  "key4": "43EGwHP6dWyQseuPKusMdBnCjZtsqy5yrVeeFUFvHrFentWvx3MJTBAhPwr6AuYfXTnaFT3tXycg1JMv3Lw6vxn6",
  "key5": "T89VR9XnAgPuhNyEDWR2h4YYbPT7oJRN1xazTg4vHoBGxsd7D8JPFCrjMezkEh93SqAyTrKXhuf3MXxoK9Gr5ob",
  "key6": "4WGuwVhjWf16BKprDaUcQfkpwBWgTQNUkpgsvxzkA1kcmKed9P5MzLLxtX7HdaAdxXw4197mdzgQrrRc17oP18UJ",
  "key7": "5SsAcvvEsmH3fMdytf7nVGLR5soUNWAH1ps76WX4WQMjmenXkt2z3Hm9NJrYP1VJQ5pjjnYsPKVABjknAmwHQFVd",
  "key8": "4Asnp97Uz4AdwT9wbBwsiU2A1jtSo2C3nf49qMXgrZDKkoPaH95Yo9qevht3Ds8DbCXH7B7tc77nSqQu4kaSe4bm",
  "key9": "wbZk8dSXmXJAiqGV3hFpvvLSv7o9vjXRG7AaQ6uLptVXvf7NzNUvq4ueXM1ufctj5e5cW4iogH85zADP7pSoamk",
  "key10": "HGcGWQKGiu48RHNWsFAgzyEnUtBELM9eqo4wsa1zKR5wd6R3kdKgkAkPqoq1WZb9TTDcmRM6rTjYxTf9QMof5mQ",
  "key11": "5kkZf7rL6jE2QBW5gHuWjPjkbkMsHB2W66VkqB387G7vJ8uPwWM9VB9cmuUa2Qsu3NdmscZcZzWJWh3ynmhP5y5U",
  "key12": "fw2DU6KhGByFD2hi7kPC7qSYkkftMgGNsKhZ45MfQQkHZ5Bi8SjX25LGFXEtVxUtwDCZaqC2pWKjAKpvgVb77rk",
  "key13": "3VLTVDBNTD824QncqPXhJbjfES4e2QkdU9q1mDPYKQMRHqNzw8amwWBbNq1BpAprHQtxPgSD5isRLqo7VXvvc22a",
  "key14": "2H2CCJkpMqGofWGbYodegokfem2VSNpN5XgAPmDsSB8q5LtWHpAD3za4Q7NEfsEJnL12KYgJgzKLM4VH34SAoXcP",
  "key15": "3vENk2iUkhVb35kYRNVcnxcC6a1kJfsscBpxR56HA49s8LTgPFkk8M5ke7GrnDHWxbY4HJjcVGuVsJ5NZwywbG9Y",
  "key16": "2MWs8Ex1uFPZ4QYKBEXBGnG8t7o2XcKJWqijskdyT3gSzjAjLg7LdeJXdZnDdR24kyt5KtXpuguCWYtYk1r971Ay",
  "key17": "uFt8bdynGZMN6KKL86oAzjFxtfo5zny4jA3ZvAh3NCNELgBPpwe5HNjVA2LKZpV3Ss8qfT3p39X93i8uRDyZ594",
  "key18": "2XTcpJAzKfLcEwRZ6hDJrTKJkxYS9nBgTzbdEpyzemJogugSVXDiqJCgUc1P2uXR996r2d7946vTFuYUz3FzL8sj",
  "key19": "26F6AJd5W7yq68tGJwmW3HdX8iPAVYN9Bzsr4tbGQMmYh9d6KX6wkXVzB2mTi6XFEh3eJzRN68A19fyUwnYoxzBs",
  "key20": "49uoS4JUiixavfPBs1rmTYPsLp9NtdEgBAgSX284oqXLJ8D5pvQXr53LouBJFLP28w67jgPpLMAdnfepuTsomGzG",
  "key21": "eZtTXubNZqbLLf1UnJYNR6Dk5aEZUnXXqRo3w22BAd64wyZQAFDeCmSM55cq2jyDeheKNydKLZjRTrR4kvcZGan",
  "key22": "2XGTWWyu56coCdUi8nCwxQoY1y4ipT5NJp46wi1vVsqXHTCssBbPCuy5LLFaAk2oPDM4jMabwZcMVwwgDqVL9nkX",
  "key23": "3mBruhCZwLXvgttU1wdhLxUNx8xTNaecbsYZNkn2VMw2bNCtqUjswoXRXF3pXpZFUQVeZd2TUQPro8DcYJNBvK3c",
  "key24": "4d4LdyAznZVjh5ru1FQrgTiPsLAisDRViE2vEijd4r7Ysqdds7t7LWTPBusRM6DLQJ27SZyvjGdLvM3po313poVT",
  "key25": "9w7c7ELCy1tvYci4Zn6Ts5FQ6S2pLWYWADBWr4JdbJLp6BAAz8gPN5gRE2GXZxJkngFoW8pnPd5hjRnB2zG8e2e",
  "key26": "4X7aW9FLj6TqWXaziEWRNftMpayxL63TsvYYagCdGkvgrLQC1HdfgwEruiawUjFYgWuUVYirKpdMbDQJHMBWbNoQ",
  "key27": "5KsJDzK3wQNb3GWGV5yPvZG69bGSj9XdqHCCDVcrbKhGhqYrtk2Fv9KbhkNWVURL9St5b3EJywHrerVs7tCLb1Dt",
  "key28": "3j1w2UGWxQux6nsUhw3NNFPaeNqLwFKfnikcx5YJ4UCAe9ETwZVovGTVGewUEwiom7pJkcmEwA6iVbb8ZjgQqH66",
  "key29": "2C12BQbprjymyLghY51wGQkXio7pZpEJLoWYzVzQd7pnSzErL3AGoaLnhwXnrGn4oTQohG51DgADTTL8Zx8AtPSy",
  "key30": "7xGixKYWVDUiBeKkRJxqUQJXr57pb8EZjhdek9NgJW4fdMV9FcPicFPfNZWeGKfjApJrqD3WTKKTNoR9PCqJqLg",
  "key31": "2G4J5tsB7PJfrXnTvF1FRFwm7req75zyqCa3UCFmadNRv7WPTMPjDGNMBsRyAPJut9NK4erdvrvd41zeFm5kH7Lc",
  "key32": "2DQpuQYcNPuvptBED2AHxJTo7KoAN8qMYG8Xc7enJEfphfzZK7bCRba5TjP3fTy877hbmMB3fxmZgQMZAhcyxQ7u",
  "key33": "4hYuk528gGUkoCqzizngrhWAV8YdhrcC2N8tMT7YAmNJbG6aJbZMjRBLWDa4Wu3etUGQtPtaXMZEtPfmTHipFT64",
  "key34": "5QrjuhR2122hvwDqyV4bsKf4o97NA5TD7XT5NJFykSsgVgzUuuR1HuTrdy9DXgqAWDwCFjPYGdNfQCwCMwXTGPRh",
  "key35": "656MoTBzHxtyA4hCWFVjxNQsKTHrE9AQQAutfve5aKVYmntcWC8KiXugyyLsRbG2jMBuQMsc5nHVd5Kbt4KUTN7g",
  "key36": "4EeDxXWrfEfB5LaE4zFnbqCsW2JJhegXi8UEboGWQvQdyJF4przcnVUxtpHqCVMuizuzUCrNy7xsrEt5q3DY54qW",
  "key37": "R7hV9Ec2tiwH3f9cm7WCZmk6My1R8oKwarx4VPdAkBWz6t65enJ1JYTXfhrGKZEmuq2nrqrQGS7p2Lx9BUJfafg"
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
