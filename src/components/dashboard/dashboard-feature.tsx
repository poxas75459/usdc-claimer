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
    "WbrWyKWjbKfifaYpVwU1BxR6Y9CemqjGr6ZMd4UYD37arwaBzn49R78nyYinKiEVFm1d8KnQWLR57butRGFBroA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LNi1pR4Bpy7u2PGBEGmRBqm47xszbcxSsdy9yXaXL3XAt7xjfSEtbvCJD4XV2R2B5sEP7VMgtH6SqQT9PNs3dGw",
  "key1": "2neigShDiURnAkUiK67jdQzYYMfEm8MfKB4276ngf2ahSVHeKFPCo3d3yUzVFMYHkNAFzQndW54b8joXKkJCKPA8",
  "key2": "5aGuCfrU56FbSWStSGTb1eo7HVRUnypMoUjjduouuXPUSfGYcgS3WFPkDQzH13yiZQFQSjohuNrSw7VqBz9ZW4Et",
  "key3": "ARq7hCjm4Z5uVvtk5KMLk62TzfBVrDAfzfVVfhFP764pNJVe3BBRvrBtXD51CoYGfZn9cmWmDoR7Z2WVVoxrtTT",
  "key4": "3oz4CotyENUW3DB7oA929VX8bFuL9nPJVCRco1nSzH88RH2LqzuVyXbgYyXheAWgyzY7ZfdBKg2LyEC2B9wAWmEy",
  "key5": "36eSUDHHANyEbn8tAFftpB6L51xKXiy8buxQRSLbnCMyL3V5omPWeHhH34ppv5XYNscgEwAYZY685ZoLBsWJaUyY",
  "key6": "3uoUZLr9zimy2rCkGzjHwzh97vBtQEhuKPWymYXg1DsCHSUHbekTE4ff76iAhZAK7bp5RCo1d45iV8vHX1qb2smY",
  "key7": "4X69bmuEryXjMecMyC7JCdRzWs2GHs7DefT6dK2mAD2iH4eqNXENwLsPibn3WoDcXvGqDpyeApxPSQZSyr1rVVZB",
  "key8": "64vdvhJfeTpAQzrFH6Tc4u9yoLnppLWHreaNNNyJdeDCQTKedEQ5XkrPLAYptqQAH99VT5YNQDz8j1pxmqj8UbcF",
  "key9": "41KdkwN83pHHn8WRTT5xHt8ygKHdVy1Y6MrfHpgMnq2XjCMVe8DxoBw8bwEDprJSx7r2GwbfNWSUkU3Qk7R74uRy",
  "key10": "66hH4UtWSZafedwAQMjHkqgBYas8CgiPAJ3ZrLs6qQ66NzqJnTT74DK2sqyeUatqXS7aSF2qM2cMdfKg5yJ31sjr",
  "key11": "57gMaETdVXXCChzBTKrpjXFyvb1aVknu6fkicicpcJduVFF4jhwSJjL8k6gAhFZWc3sDQtydYtctLZPP9Hsus5Mp",
  "key12": "QCjjm6rvE8By9pZqWDbZiDWBEDEYXisHsJE67p2x9ycZ4Rd52b8JcMg7tiAK1TmKmtgAem74h26WqWMQwsRjG55",
  "key13": "TRWfesB7mYTjjB82rj8M9ar8SqrPS4RXDTnvSLjqMXJg37vc9G9qMsYd35H8rYUvx5ejTUYijNFuRsdF2M3dzn6",
  "key14": "24LYn8A26QW6Nm7hMj74pNU2apsGcBtPi9SNB7SNUP5NwxytSRq37y7JFPjKzGeK3uFzpYaLdBLswarvXWiFKWtX",
  "key15": "5zwLepbuLRoop5FV57kCDFkG5KKtgvX2STD23sW95F3xYv61Ktf1P7khBKS4RhAvUNxYjM45dWmNKy1Dj5v4dM4E",
  "key16": "5WZu7DLQvDtkFGy3dqc7Jsr2zkubJK9vsJ3fUvMQ91rWhVNgX1uodetQwPH6TBt48aZFv3tD8o1p1endLyeVV8Fe",
  "key17": "67abNxZUnRfdZrYTWKDvfhu2DmTchqXkJXdwW8rzP9JN5Hb8LCwnpctHcFomsWQj3FJ6rQ4joyFhpEuPWbzhts2D",
  "key18": "61f96mNQDJ2A2QU4Cx325WrwimwxUgFBckatDTSVU1tNRxowQ4eTr2qdLqFkpFqcLENdnRV9pcreCBdKu4PjBxqQ",
  "key19": "2NaFfRDrK7UABFiwBWWaDZWyaXZrrYs6nJqu4ivunu4Dbn5nnMvkC8kqkQJia6aKGgKkUxWNko3GKcquzqgJMoj8",
  "key20": "3Y5MeK9KXyqCVRwmkJ7gDN1WdxtQxKFrQTXhkhzjQrKVcH8NTAbqWXsB5ZZ2uydhtV9nkFTj3wztXcAZoeQBDk9n",
  "key21": "Qii85z6g8DaXevUGEKJpNPq53RFg7Sj76iSSLKT6PVTQRD1tLhAExzvNb5258WR9qTZUV1mW6NVuQpR8iZ5cc5R",
  "key22": "44KcRsMWYUj7zXhtA6beuMSYGZYPXw633EG6L2heiSxe6VAHrQkE2MzV3LuepW3DDbAnNSHZ8KehzHU62BBz89G",
  "key23": "3DdGg2uLhmjyufFvS9KhsTgAov53BsnVmJka3GwBBGMQKS4fMYhKpzDcoy7EaH37uLe8c1ZH25wU9hxDskLJKuFW",
  "key24": "2ZcucTzQJr4aaq3AArEbXwo5a2CuLgbT7LWqudaBh9ohHmqTYiZTuRV9jWdYbRWtKKRxUxUMyWuc4Dk6vFX79RTA",
  "key25": "2ahdM8NAGo8YBL8vuYoJH9KZpuiqdDpf4gKKikSgSYeypPMspG6qDCJ5TX1Njt11NuDWakudyn2H39QbYZU14xLc",
  "key26": "5jnfrMLAuCY86fCXexEfQeRctv7d9UfxCXyupMw211B1aydcv17jGdcmufdpbMnwyZ7JWSKK22LFBbfMfMJbB13o",
  "key27": "5gnSbLFNMnvWwyAgHshAdKY8LCUtsRK8D68sQeMFbd9BTTn3EcqREeBGW9gyHTi4AeE7rK2ntBZ9iLMiaq8sf5w2",
  "key28": "2vafKy994aa1AQ1PWJYMM8hL8DKba6WNqHbrVNDSbvH1EFm6YQBGb1gLevczVmz4TAhFS45EJjU8XnKVZLooDvoq",
  "key29": "2wMMHeTfKTfi19a36Poeq8u7BmPHxHqxPixuZ591XY9T3F54TacVkX4uWqcSHx1WExEUrj2WRPFnFfj74rJBwwQD",
  "key30": "5Tb2m94wETBns4KUUi9ifyw5vu2GcWU6ikURoTpQpYG3bCyKStrjeRwvU7naDHVn3TDWRjVK2Q9eQZoRoURqTE8j"
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
