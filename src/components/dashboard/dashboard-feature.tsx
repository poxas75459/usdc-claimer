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
    "3HyUwHmj5HCNsUQwGZi1HhxTsAaw9WZNSX9FPYpcCbyM3RB35r25PSEPrHD3htLu5egejX4Vhs3oDvXbMYkw8eNG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u4Ys2xUeM1qcJxai4mEE5QyFvRtP3b36RhZKPtSR1Hvzp5vS9xBzRJGEuBHx1NNNgpxjzxpDwNY38JbkpXo4Ny1",
  "key1": "2qSV2A9YHMNpt4ZgB8BruCwgqGpUDYWyc78x4Y3BocGLYEYutT6hoqs6FB7wxoJFQYyPqrZTVJrXwkteToibRaHZ",
  "key2": "2N4VXLNS8yRm5jECLsDnKkTDgyPuvoNaQFrQJw9w5KSXDJPe7z7Jozkp6W6aDv4LZuWtM89JnMdYXXdrF7YvHPwK",
  "key3": "2JEeWSksmiNSuTP9fZ8SYiR2uv4RxvK9Q2dbXV7ohMUiNjVenChGVvWTUby4VZ4oyCX7m3RXVzzKMZUowV1A3KKX",
  "key4": "p2Jnf3m2hxLi3DN9ScZSeCgNesHrUxZkLqDegZTdWRfzsAGnorhBKuQwpo3b9GYqDrTXYxbSBSo3GSZ1LoSJLqk",
  "key5": "2mMLySV43NXKrBwzhVxntpDovgQB9J7ancB7qG2tkADmuirdvhpLAZ6YrMTh1SwwP44ZWN3MQVyPDzv3eWjXujh5",
  "key6": "5fAo6w3STH3Wgt1BUkv6xJfcwvzNNVpwR78HjGq9D3YjifWiucfcVzBknjFKe3Wa4pxnb2iGdJADTyMkAB3mf7XG",
  "key7": "4zQ8k21gWLcQgh3cFah8cYbraubzDfze4DyHbjthSs4eq6cRGt9MGDXH5Qd7ekXpfkPnRrTySXjE1FxaQnoYndn2",
  "key8": "5wvx5rCmMqPYiHRtdaKEgMseVmQFvdUJm5mqHYqmAc6zcijLJWo712ZikCSMaQcZngAXMos8HG35fuyQCagc6VHu",
  "key9": "28gUM4hCQ25VLRTW2bAYtxYDPc8ANYVFnoq8tAL7QXVGiJU6ygq86hCUd9SqMK95hs6cYPaMeAi1npE94eXbhAX7",
  "key10": "2Kw8mo4kcSBaJhg6PUT4RoFXvtFEtkprNRJMikzjej2jkJy1Sn9ro4PPupKhxoud5j22UGv2ecg8ezfiySDfbyLN",
  "key11": "22ZtRmcMU1XhgRY1XPXPgMmaUrvBYLDPAtF7edHcsoUdV9dVC6bmSXvZCi5u7mHBNBYSCpS1VA5jozwWbPZ7WSV4",
  "key12": "5jbbNzb7a3n4VVDLkH4SYMkJKUfDp2QnW9gdcr7xE5N1hsBHp4PvcrK2bgg6XRK9WeaPdqF1JmRNqCeebmdfJpVR",
  "key13": "5hTRb2n9kLP3v9AnRf7vE1JZLURZ8kFf13AqfiZMuLATZSxR8xrAPPPuhmexbA1tax4v5KqQwqt8CVhQRQfbgGkh",
  "key14": "5hyJ22u66A1BqvMyQBREW8wkws8gWEdyaMLLmoTdT3AiYnQAVVr2MuXTMfYS2tqHXvvXSQ189anTdQrVFCBYZyML",
  "key15": "3uMapW2FViWoHW9xXmrKSr4YAiPQR2dPSUDGJRFFzsNn7JLKEayWwLB8xLTQrajRELCFFRFBrqFrEQHmubTQCrhE",
  "key16": "2Ez6z3i14H1bPZ4HYv7X24PB7zhhh793Pd5SjgALu7Rg4TkCq8apJAYQ8Y8rGSBkgCBJjJxE7rhEEd7597LZUGti",
  "key17": "3HrWj6m89USTwSo3gZSj4QpBanKYaEwKuh82PdeoBvzNzqHDANsW3WjuQqXJvgrUbiJr7xKfTmkTmwHW8DBEtTNp",
  "key18": "zcnP3SyvkrF3GC1bSQtbFDTgdYhRABU3DHbuySJJBKKZ4gDsdKRrYGei8oFZx6adLcvEFqzUXwbMphnmjX3Qfou",
  "key19": "GZKCPs5tej5U49satosAbZQJgmfpgEGvAgNFrGQXeZce3DPTqcKh82qrSi8kTp9MwgpovtYyuWNXHZ3SqBe59Nd",
  "key20": "4ypF9Xeihr3z6GqJFZx76r1Gz4R3t7HdxLmz531rhg4aC7o4axUuG6Wew96sy74q6UvUEwhNMRyczSjwowsRHhrE",
  "key21": "4q6Ut2zYWqi42LUxv95mMbboKSkntWDjoZ6sCDmFin4uSjievS3YbQVevsdW9QcSw7gQMA785MNVorxTeTgAVeN7",
  "key22": "4J5wsybcjT5PnaZhcehYx7tv92YAAp8sGx1v64RULTAJ4saMtNXKaH4UdRaxTEGPgXfYr7PmyXyuiy8oJu4E9QXV",
  "key23": "4wDQ9GaHesPiwccHJDXrD9gkudRhZysx8zPS6nqX15SksoXdqpwBv4PGdaR1BmVmUDXgRoctkWm1L7nHaxhcAc17",
  "key24": "42tTePVQDZ6QoZf11gTonDju3oGfMQNknx2ouPFjdxUML7EHsyAa97Uj21y3V8Ua6RnGNwnVpb6wiip1urwNQFNk"
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
