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
    "3SewQEbMuceLgh6cLBRzEghfdxwQBaed4sSY3AVnq6hTuQopidWk9kZAfArvLhekTwQ8oNgVWsrh7eMGV2zjYeo5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XXLHLfngCDxa6kugToUS5yKSjhWgeriQLnWQYkAuQp2zQ86id5zY9SfjC6q7XhkVyFVidWhui6czHyavRuEz9sD",
  "key1": "2NDPfX6fs6pnWgS1PjVj1R22UZUnYbjdPswyhSEhfvkyEFhM7ZsTZinFi8NMAiK6PLNWBc4Y7MvPMxJmTggZ9ZJC",
  "key2": "2u2uLb7rtEBrsnVT1BoSPQSxtBJNhdSUzSC8MBYbeqNBUyhprpThXeSVjtbKYLn95y6Qa6sAuPkQqNncf7fKE5sz",
  "key3": "2tVjuEHcEZQpQExteb31r85K7Qi8AZzFJ4WcKsD3fbDp5hg9V642pQ9zEQYGN7rLMBwQrgeB1HitEjYiimCb8vRE",
  "key4": "2kJZpagpLBv7TRm5JodNRtUQtweeAApYE4bChRPLyWBLPsJg1dUjV5Qc8UqCtaBCR4tXSpFB3nYeJUmaMpsxKshS",
  "key5": "64MmyXjAreUXrY5GeBgNWb7eU2Jj2K6pLE5Xq6zBQC9wwVETbPq521FBZzUxZUtBBsk3RyVfMCFVovtB3wmc65fv",
  "key6": "5EyR6zqvfmTKaUx8VAEVGwD8snSmgxymRWwuussRqTQ9veWgML5SVhptRankvAgwStD9MUWCkvsfX4vtsGLYkZ9A",
  "key7": "3wQ4sfGKo9RQdbCwi5X49sV9urK5H6CTN6CTKiWPuTwZ3uJkmZuXavyVaA9KULwoPAJAV1rTz7zHvtSdooHg56VT",
  "key8": "4D7RSVKD8dTPDUbfapyeYHr3ZzUrpjBcYxM44gNyFEABqhdyfVkbe57x1NBZWJXrLSxFYayqTmpXSA5pz5TRTLt4",
  "key9": "3FjUsdXqyaij5VL6AFvdS4ZqbRJke928VVDCaBdxABHw2nSSE2jaSChj8UKcAT6izxw9cwv7zmVNJ7REvDYSM7zF",
  "key10": "2ctDaYFVZoXiu5TPyAxxhHFFFvqH8xWAoMg4nhDomAYG2pi3kCdn5JcoLx8AuSbP5tifXc4fU6dXfcknFajFHKn8",
  "key11": "2QS8SVmwRMUo7eZtvKJ17mMmScK7ZQbc61BsgdDzJziYUUjs51Bya6S9fgLim9mv6qBmzrhePM2swQtNHBVRWrNo",
  "key12": "2hC71HXCPFg5DQH4uubHZ7EZtEYvNzffPF3HSPWpfpUGnwnnzgCSA9dCF5ZN3SZPeuCsNwCmfgVTe3Zt28ojgrwK",
  "key13": "jgTGuu4bNSKfPz4yJY86FksMgkFe3d6XvLDLwk9wtrixk5hbXqLH5idX6ZmsufEEfzTZza5r1yHDcWCBBb7VTCN",
  "key14": "4SBLCmMmCGzxHcyfUvqqNJQEQWJZEuofoc6yYWMUgFpdkk8wUKvgd8rzYg6sw3c5PyrgF84SWZYoN9yHFR6hrpeo",
  "key15": "5wFmudN9oQSGmUKa5tcU66B7azAMXKwRcNcaDWZ8FwPK78VoDY2WgjKi3tXwWueG5rurKAuGWFUWC99tXSZ3ygks",
  "key16": "2UGVcEF3vgL9ZBc86WPcq3GDhXfUABGEctbZqK6svr31AUmiV5MZsfbCWyjz83BajKdaFLAQ1Zyq4nf4mCK4vK5M",
  "key17": "GRBqeE6nKsqpN3zWq7j1aftbY2iaFMgm533RS1UCYTTmxyiZihLQsE7hnTFFnKhptjKma8UtNMyesSaMTcUozfr",
  "key18": "5frPe55ftbHmruLKKwvFuDBPknvT73jkd8tteKCDfdwKWkcRwhH7Lqf3G3sautDkiJSW9p245J2EZgNWTtF7hqt7",
  "key19": "4A86Mj6gSbDkJsC1T19fr7w3vZUhXGXBY1LhcoDTd1x4Cjhj6GyANke6L2YT6nTum8vseZwtSCojDKTwjnuqTFrm",
  "key20": "36WvXQT7vMXy6aR9wrEdripqqaTcyng4verSPT4ppmU7zh5T92G3ChH27yoLNjdvYC7AY2oqf4cyg7TsscY5m5UQ",
  "key21": "3GGp37E7pSaLB25dAkv2Ao26gaee8NEVGGRuwsybu74ov1GtaWesLn8LCcZCfMEJ3ij9CWYGDsKwsiWcy1FdUnCW",
  "key22": "64VSGsV9UUFUhAY3FBox5DoMjQ5H2d3TYTGZ461WaofGksnYCGCDixWKoyNRxQfvbhpTfWtS26pFvVC1rGjH1dB4",
  "key23": "5KFATbFasRmGg3mQbRDNFdzVLassQVSzrVEnnfNG2XpED3qxjcbJ64dZGz48jxrSMhTX65eHX7n54HrniXLmZFj",
  "key24": "2fXxUrXixvG7b7zAG2MxDT8u89RW8aGywPS1mm67egpx8WxbwfMNT8ojMbyw8YnjettQ85F4FTARbU3Bv3X6ytWE",
  "key25": "4ecf1yQafM7XhyZp8oZbNmnVAtFQS6cuBfbBr4NJ6cHNXJFPGeU5b7xFA6cndDx1nwEJoiZt7DcQwLRTiurDMVhm",
  "key26": "2u2AssGb8gsrjavmDmhHduP6pHV14bUbBQugfGnv9hHKFnQ66yjd6iv7qZ4EkPoUqm1zdoxoK75hfLVor6QRYTbk",
  "key27": "5iYB5LXJb3vprdE9DrxBcH5bYsJsxrHJS8eAsavB1G7BPgYqvbiPeqcPPFUkvbZrtu72rjx6K3NjqeLSnavsBD1v",
  "key28": "3LmrrhBpoMXKsayf6nfhWV4YhCJrtNworp1S9VLwTVWzPtzENCppEqVaWGeLDApvMGvRb5UVkzDrc1UzxFbsEGyT",
  "key29": "5c23Tmh7LFAPoNfZnpWWHR5Zn8PPQAaGgMCvb8pYexRL5B1nBpRJ9imGcWazCarPPiH7r1MDtD1ycgEeeK5vwsBw",
  "key30": "3PjanpNYiTaKGoCdviKpfj9BNeBL3YdzFZnbmirxausDVidKJV8bqcr2g5rQo4yLvYQZr3ZgY9haGAm6MQoUddEh",
  "key31": "3DBZ1kmffQzbyMSnxQC9wB97m8TJmMoZsaCnjuSG5R9EhviHVE4WKCkxqu3iFjTFWawbrY3g3jheK93Q7rAgqdwV",
  "key32": "3n7cS7MUsTb1P3ZRThScbjFspkhog3ufyDQo3RWNwqCxqe7syxakvxq92YMMPc6xXt4asnBpRZKApTJprvjcabA",
  "key33": "4K96DNyiHy1L8ANuftDXNhdMiqcSkENC6NLGRG4M4tMJzGaqreMTnpz4734ySeWpdTmeE2tk5Yn3NDQZsBSeeK3h",
  "key34": "3dsSKyU4cme5PJsWWVyLJ47g4eSPg5mfaPXq9fm3VvKPd8BFidiPd5YCQwHTCKbnk6HWrDXKrjVcnFyuGgavxjdy",
  "key35": "59mEV6YrcTU7q1FcdRzRkyFocqtpP5NwFuAfzwgawvh6uYnZzZbNDC18TjaWFiyCF94oX1exnRUo8CGwicXbo6yd",
  "key36": "5MaV8ySFsmNBun9q1G3F5wRPLziEw2bzFB1bJnapkACWmUcYbDLPoXP6xaB3YqXz12SfG34qrKSezY1BBKfewXSW",
  "key37": "4XGDYongX2KHHaChDgZptKezztVvte9zkZZfkJU4ps31XoyUCN6e3MNMWrWD1WJZPvDGRNxWcupWWbnFtoyzqVND",
  "key38": "4qgqhMTugqtWjDEvfwYwVUvYgPdo4BZuo3QDHYHo2ncU6ckPyr8ncXWbMZkgZv58K3t9CpaBihhgyXR51iawGcNE",
  "key39": "4AB3wvuHQJCckb7jkfX3dDFd2Jt7yo3whQtF42bGb93oh8HxF3DuzwEkCCSExjzJsUmku8pSVBZEoUZLKQbpD8sY",
  "key40": "4TzWzyNt6spDDcdKKUoHyK3oaFzQp7z9SsWEpFtp99ipRaADpLafqGo9ZvpQLKsTedSEJmsqXfFbttGN5Pr2Tc1W"
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
