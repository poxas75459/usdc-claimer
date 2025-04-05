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
    "2qVdsfSfBLZFzMqRNBZ9gYndARi2Kg2FF1edrREput5XBTmBMjUkDU9oW4SXF5aF7b6QzPdpbqPVHQCK1szFqRmF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4djKhLctYi2v7vYVNU9xLB4AxNwuniS6gTrxi5ZUEXGpkrBvD8Hy1EM3zzghKJksJw9FGLxw1qH6yL2Z4Hk2a2gu",
  "key1": "gHggaJDdWsQHYtPoDya8DgP5dCYNPdkRandabZyk421Psv97TfEVJxLkVyKWMVzHxjwuqCCeS9HWzvPcv8mk2tB",
  "key2": "3qqsDD3MCuPt9ANTr3EJKkETDzwKxhN53dx7ieEeabPjG3JfPGhUoXXtQ2S9iRUuXZmFo6E8r9u1T9T5fQ2PkHuu",
  "key3": "3Rqso5Xv4gH2jtzeD2jxeRbduPbuqr64otxYgkVSQJgzN6YLh34pYU53ZcT7reApTw7hFdVMDXgF1gaiYG3JTJuJ",
  "key4": "3VdLWVBW5MWYFk8EbpX3tinPog1PzGrzfcyJFvWrPkpdYNDnfaeXJifoLhvxv9p6gDJcrpnwi154CKT2ushK8e9B",
  "key5": "5GP2PE96djXVfvUSjN4oRxN3MkZFuekDvzHPDupwKt2FSh2i9Bvt4jzH8bJtSD8uxrcuFQv4PD8pS8rVbq53HVwh",
  "key6": "5qKEs4NnhLvWDbkeCNg6rsdafkRbxVd5ub9C98wugrHPUB39QHuucBF6nc7S8FwkDUCg8yjV4gAJiWnzvoWPcjxN",
  "key7": "5TH8YyQVyhEeriZJkKLuzep5Cn3bB6U4w5wQaeiPZDNMo3FwVLichsXrBKKdPtJzcpLX9gK93VkgXsxyBPpTnVg8",
  "key8": "3CyLD1kB7YMhRZa6ane1PJhqx4qvHPFExbPP72v8a2knBAYZLHZtgn25oR7nDWKUEBQ3mynnSrdVxMRHzi7DudDj",
  "key9": "sKFPjezEdsPeuAC64DPyGCvEZACDaGmLHwMJ2FvRfw8qWDT5uLug1aeh7JwRCGpb19dE6DUebmbMe5vQQXCCtFN",
  "key10": "acxoe13ntPbzgoJHRiU6kmLEGYLn3AMLpayrtkrFcopBUyN9uWb9hU7bv8TaYPZEiZ8poyJeiPNfms4aCnsS14i",
  "key11": "3Y1YY2cCaEuKHChzSjX3H4GmRKbFdmn9m7YZwaf7Bh5DPtbu3nvCUgCo2mJApKYypxhrQbg5dqbxKjycbX8g3PYx",
  "key12": "JQiz5xG1MRQhuZ6LTfm2v5evutop3p86D8UefDQ3tNvoLQVBvK15HN9iWdL4YdtNDYBwoHXrPB6dkCJvzqEzwQA",
  "key13": "WabC3ZWtWUPzhpgVUkqf6SSLyV3Q74zad1y3uEJndJDKywMn1ALNPe6EDHYTosQNgxqdSebHj6o7C2RNAMpJRDv",
  "key14": "66FcWtooFuLqCvcLCZfr96tWo3oKjN47qipaWmGqrQspQoh84ysC916CvxGgiYr2fEcCbgQyucnhCj5T6vpdCW4N",
  "key15": "2VdqyKo3rcetbW8ZzUF6HKEsQiM5NkUdMWRGjw7GfFnYA4iwqxByyHkhRqv2K2aoceM2ekMSFSYeeTaWVeaFUJ4S",
  "key16": "JqEa3XbWXbwLdMQcaLSMn9CmqDRZ9JuAfbYHpmTPEAvhhx3bc5qrsRos7F2HbRp6NXD32N7nj7QwaqyAMRabg7V",
  "key17": "5RT9fXdxHgD1PRMWjdyDvq73R5BXY1njJtqc4nGFPZVuKV2SaUYMxqdXUprXeC2sm6GS346C8tdxFw1RCqB1LLVj",
  "key18": "5qptjcqFbrypmzHK1xNDP7TcvnhZEJ68AvjHgN4pmbeZ5v9vzbgrFUTRZfPErHxKX9xpJwUB81mivn1NQV22hYEt",
  "key19": "2HxWkwhkN9krhwdHk9ucjxuHR5gHPZ5y9qiJARxVUHQ119GVjLbrNtpBd2kwaHLGkZjV9SsjWv9NamTwpp3sjicL",
  "key20": "59LB8zJqnuGMgP1KpaBof3XWsWWQrY1oiCR5TDLxsTUwJiQtVm7jHQwXTp9Xu6szThpg6LvGo5k8UXXHACgvkwCq",
  "key21": "4GJE3pu9Fu18r1nTsKNoiy3VzcpuLQDWmyVLtKAgK99GuEXaR5PKdkYRLxsq7rLuio3GjWKtQg6HHi1yB8ZuoQyu",
  "key22": "4rftJPwkdtzTrqLZCqfs4d7g7sSkrQr2HJ5jT6DaC5Wmx77TshVnoz5nc4Twbi9dzYZuRTH2sCBMCXDJjWoAh32L",
  "key23": "3zadWJJREb61PBo3gcgXSfKZU9CLKgJ8gHEYUeB3oTPnpZqVxe9WFBn1DLtWVyDacJtXQfEZsZ4Wqe4R3Abt6eT4",
  "key24": "2NL22WqxVJjWFEnBrcGAhgmvWf8iTn524Kat8SSZczXapYD2ebRrTmHunCVtVmT683xAK5ha2V9euDpjtbHdHXTb",
  "key25": "VCt7JVhGNh1zs3PRYj3E4VwV5kyr32ou8QK4qo8iUeYbKFqEMgkzSvgNHa9ktdzdkLC5mE3C3toKWGBBNe5ygLC",
  "key26": "5c9FjUgy5bVVJHHN7gzviYw3WmgVxaih1mZ4C1qUcBzE2of1qZntacQmkZ6f6HBMi2Ys6gnWgZSLyxYjAHBdCTYT",
  "key27": "2eUZBZbo8m9jLWsc2nRQ63K15QsARKyMs6aXmKFUjvzmYF498Wh2RDj9yqrbkv7Q2ocvvcqkPjQYufHg1Aq5zRBg",
  "key28": "3e9MyV7syU71PbawH9MpbN8aXSQGPPSmwmS3kDrYYsmKARhEGWfBGUqEiwtdZwdPtDMSuLaFFDmVyX5qV7wvMkEU",
  "key29": "3fC3CVmj6B9DUCmefcn3y4QqpKm9KdSLesKmQM72a7EKKBfg7qiWLvCswafLGCKRFj33y654t4TSDfSQiVGW7jnd",
  "key30": "5CQgZw3EGjtyqcsH5qPS5qNZt29NmvK1X6t7QoqPUzPPioJduQdDjMFgx5c9zU187PMuHNT81tL35bo5bxHHsDiv",
  "key31": "4dhpYNN9fUPmrPo1Jq4R3TQwPPWvprXHPsHxmWbAg2UVPJqbbBXL6VJNc8vFQQzzCGFh1DWe4jDYXsXCyEfLYtsj",
  "key32": "3BiPUzikW2CTP4tsYHcp1jJm36BjQ7u1ssLqW8NAxEird5ULR829dSgwc5ju7ypRzRQcK3xUFF7BMUgtta4ViyxF",
  "key33": "5PCmZj4TX6GbFozubdMcpEdFKURYpaH8iif31T8MZkVbdkVL8hdnym3Jpef4W6totGaztBW5FXgVetutWFBshJFr",
  "key34": "2xgspzo1NM7sDhhS8SUwWe4MajN3Fss6i6n37U5uXNrSJXZeF7AhSpWshBV8X1fjk9rN6TvQDzna3HFTqBW1SLU6",
  "key35": "3DsuDEViLaguMrFjyVVEeFcLJRspTb66ac4HQc5BzWHf485F9P6vDYzNydmt7MaYPyPKpCwvYertN5KkiPqq4oeX",
  "key36": "wh2pxAhCzoyAb9EMwLbxaS5Fdv5dMy2xuh5VoengppRy9SdBmoEGzUE9ViUHAfLSzHs3FeCeD12fN3JZ2VyHdac",
  "key37": "2evQV9jKq3JdgMwTt1RMyKNEgfjfek2zDjLjjTAtfgri29vv9Cjvr8hdApudPs9HdP3wsmGA3kGEpJpunn49tB7p",
  "key38": "2ocw5sMNm1TLjHozkzjv5oyDjSiWgrYgDcYkaGGy8UnKm74yqXxHbUbvzqmqhgSo2x5j8aWZMKmQ1N71b2ppq2hC",
  "key39": "39jqL57LLdwZQRBdW9Y9cXF4zsnv6ZyHWmehJT8MDtvpSi6V8ZmvgKCnmh7eGH3o4ykn4zZKH4ua8ZpcUHZ7r6g8",
  "key40": "2J3qffWuzF6mZTuFrxMdYKBzTqT1QUHpismPo7m3zv7F4oGAfy2uGtk88sxC2h5Ar2v6EAddqUj2Vt3nj8fnYn2W"
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
