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
    "3c7EQRHmLozTFqP7zfiC6PsDv7vwPfBCoA69xecknXubVsWCDdpXR4CC7MCocdwMcJ49TENCSZSpoyZeVfxE7Edh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NtxyVcRLRkE95hoFkLjrTqBtSLtP6uh3nTZFzTnXWixKf9HVH7rVVyqt2ZQoMpiBfFnvSoZHZvJZ3T68VcMFxUU",
  "key1": "5oHMDBk8EWBUmnixgTFBqGpMxNqzEChxyYvfgS1Jtk5vWvhhYLNgC9YDvAZGX4vHfti5LVRcYgY8aF5eQFnyqj8j",
  "key2": "3BDin48HLDNjda65wRbuZAKtW7MHhJhrwuT7QAFTszzTTV3Cti6W73NYQ35DQYSwL9rCa9ERexCe1GENUudeFvWk",
  "key3": "3mPEfqZYQSBUAxnJN8CZwKJfDNDKczC2CuX8Sj39cV5WUMCzEpg458GcS92VWP51VcXREWwgn1WrUYzkosyPtFBZ",
  "key4": "oUTJ6caLnkQmRcmtdto2FQKaPKEAJMHU257kkmA64vrErk4HPuCpTzciwF7FfTYN4FBGkUA6Qrb2ms7YhQChJVL",
  "key5": "2Gkt7jCoFMk12ifDefqDaNHXtku2LarNKNNn716qUUXrhUyjo2SRF2SF5Str3i6XCPjydEefG1e8vvYET2LEC3P8",
  "key6": "56jncgzvhv5RKotNoi5RzowoDKpnxMAP7Fc9TfRJGzQRVqcbFYLmgSaf8p2fvVUCLH1VnqEcBtGdqNgxu7W2F5DN",
  "key7": "2s9TNFYyrFdg4icuurvwh29wtQkfGKSNVGN5HeDKoQPBW9hWPv2f2UoXaxKkv65bAo2eWh5kMkprv2d3RJwKzZc3",
  "key8": "59kJaJMmwRv4k8AnjqSjSYLxpk5jJUQ3DxKtzhrhHkLrdXff5drexvzHtVDzVjPgpkELtShNemVEUczdma3xcGae",
  "key9": "5brySzy17vFbLgnrMkuDTNyA43mAob35jVrgc6Zf1NfMhbjoe26L9LJyVcksphzk1NENnnyjHNbyCJh6TU4UBMVZ",
  "key10": "2jTvJx7PAEqDdTPW45tW8n9KhoP2FTC62BFenYEUEPiRsNxaUwMgwadDLm5m8Db3Er25mUYcZ6dSFDUPuycYWDxh",
  "key11": "4D6xrCQCjbbj3A8V9TPdbGTSLoQur1pKUA9iL3d56y2hp4YAdnR1cTQX2qtvYKToXF3snKGYqUrjHiPHtBZ5FsXc",
  "key12": "62Zp6RBgAH8V2mZVUN8MucWGM3JRDVmS2dpQ978MMVVggu6vizZRjWxyfz5PbEJ74z3KNque9mfNgz1TLAaU3Lfy",
  "key13": "NF2oZXTi7QidpVf1U8vkPUfcz3MeEvQTTG1cRCxtcbG9LEYRq8yudmZj9CHCB9h5R5GyEUQrL7GCHF5wHN1SUUj",
  "key14": "VqwS2ZNMBUz9Rng9v3Xi96ZaK3u4NpT6vJBHSaWaV1DXTWckWsXfKCij7CvonAYj5Zwz6iqrPPJtC1TQE6uKQUW",
  "key15": "4xHffWSM2AbahHeMKhmUtaj6JcZWcFWALdxB3ZzwauWGtU5ce2Tm3ncio5xDDQJ79khfw4BmMxanyq4bE4xH1WC7",
  "key16": "4A2zeXFW6yPo7hxCHdn6iFb7LSjwbdrEggawTuR49qW4HKqjy9BSAmeCkz8Yy4b3nbYWTvZTVJU1DDN6L4BpXZTk",
  "key17": "3dYkYj5vW7yumEkjZXFaN3EDxqxMaNYbUb5fbXfFYMUqtEJgCEcmSXKbDsPfpFMAgY5xcF2YoEBL3EJtzVCmxK5F",
  "key18": "3XHpWrdX9bHSmB7jmkTVVTWVVQBnRwiXzNLk9izWMcG7frmsg77pWJaj1GJ8UyMGiMPd84bN6Fnz2mkLqL4wWSey",
  "key19": "7QJpQgmwE6BKN3dtrBQrYYXwUmG8P189nvN1iHqBBEGuQPLwL8TNc2ZzunA9E1it9ZmL4tQx3PTSw8iVDtbQGrc",
  "key20": "SBH93zagMkiZ3JtdT7czTEXRMK731fL1ep7jGhL1zHUfnM7TZFVerpoUrtVmSyCTAyVzrffSRLefmaFVzpxHgUj",
  "key21": "dKjSYVijba19hePpzX9UH6KZvzq5bX3vqjjxXnW1wCw5narzPkjkbj6aC1P892GMSEtZZtdWM9VksVCBJYWEdEc",
  "key22": "4fxsxD99JESC8b6d5fKvcduo8qM3gRW46KTdYAzF9ytr2Z4Gb96Cmvui6xGfMmoS6GFn1iv5eKcATYhDYJan432d",
  "key23": "2phvzmfKPr44Q2UdaE68xAg6frfY9jY6Kwq6zTYjTrRBWct1npTptMQ6jRtyCwM8Ku9H9YbU58Z1yYv2yPN652SP",
  "key24": "5qpQyfVUeK6KdPhNzmT2jaTMsHMybUqJAdj9Sfb4fge7vs2j3pWRoHo8ye2wQ4QXVCRBz1DrFe5QnLK1sRs3fP62",
  "key25": "4dNSjiZEXwTR8xmDcjdY5xpRe7rEoP1CeVLaEqN5QqRbGN8XmNBtZcukCWXqGizD4M1EmVZg4XEvWaKnEfiBKDGz",
  "key26": "iKBK5GdutXxwCYnNhX8QWuQ4r3CFbCeoCR2F9ft43AeWwTTgAXwheFiLo1rBTaU9vsudbSV8AzN6ibLDX9y8WzN",
  "key27": "5ntz1RP3Uv32TBUpLFWzFxXvxyAeGi1PPX34s6MbKTfGV4LcpCbuygTtfue9KHnX8CQNv5dUKyjiCzYdFnwkHHqj",
  "key28": "2SfKTa79NdE7hZBFQynzAaqzx6BLAi5Q3FFzGALVA8NtKsLRRXTZEgFCNBaZ1j4s5VT8F6e7HXM4T7iJKdKj1emx",
  "key29": "3VBDyDPGasbKFfWCG1k1NzavxhqiK1UPXivYz97KYjq3Pt4M8wAspyG5dhedjRahi6vTcK21GeiVREqCQa9EPuFk",
  "key30": "5AJqiRiwhz4Q9FxdnEYoZMyJADsfaQxz96uYKwzCpUdVfizAmp1TMXcoa1wroq2J8mwtS8MiwDkmVn9XMoyYAwzq",
  "key31": "23LBx7ZxwvPKknaKD5asXTUUgjTptHxrsF15j36hMCPnAFu6oUBFAK2HZKmpa7e6J5TBMDDz6xgHoBqyqRmDNqvF",
  "key32": "5U2vogb2yqLw7Ryevmpx1YGpfyJRKh7d6iAaA9NXd6wdXWe5cQ73Apdi2aWB41Vmi5p9fzQNZg4rwFdMBFZnDps1",
  "key33": "2135Kb7JTzg9XsDuk7QCG4tZVJWcyWiBJcBEy1e8qomUK9FEvqXBqUNBr2PPi47WogbSHib91DcH2avpoyzavveH",
  "key34": "2otBfm3arAABD6rXXrZvJ3QLbJ77f7Ehf6eC2A4G88ZBGLnTCH4yjLF7rzDjyTFhANC2sgRGxazNQHKTZamdZ3Ey",
  "key35": "35tPoYNc8NFMcEC1CC8NqLVdcEQKbyQja7vE4NaazwRqBkZ6kXifXmFerWhUXjqsn5N3NXBsNUFTbWKvKAX44xEx",
  "key36": "iAmX7DKHM4KZqpCMXRkFbpfJUNKCGZSnnjSKyHodxAeiQ1tKDCYa1cTaGnPoL27naH9VhSjo7pDG4pkKeHdhvLh",
  "key37": "GVxmzBSdEK1yyUapZmqC974Ub6EP8wNRb1NTbJEqd4Gv2szsPW7TyTVTU4bYQ3YzEuqd9W4vMd43SavgJsfZSDx",
  "key38": "2UaR8j17JWn2zxpuicXadEj95gXdaSiKKQFiJ3TUodShVeTwJrEsay21gWycgNPeC2itwsjwNTbv1CfKV4qjVSMH"
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
