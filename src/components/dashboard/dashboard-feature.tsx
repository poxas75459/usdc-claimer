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
    "3aN8QFgfSJQbNJokmJqRJtpNmmTwwA8TRk3dmbLVNS3NjfWpJVD8Q6vwn5npqiuhLAUeJJE77mxYQRAdK9fW2z3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bmYxft9Nbt7P2wge3jcwyiigiJ6hCGnaZLcT3Mwcpd2y6rJucLDmx9pXBVmEyEzyotqveWaSqQgTkeXGZuQfrZ5",
  "key1": "C15FEWEqKKTRyrpwTZUWUTmdMFsPB6JVxzmoj2NH3WScfHRddJpF2TvZFqWoQt6qRXo5R7VYAw2ZXaAgWKMCR9S",
  "key2": "54S2d2RbM6186LHy8KKSYTmTupDwrTd79HsBqkb6tmjXxVQQGVAM25iiPTxCm6McVZZDfKc8JKVVNEwJui6sqmox",
  "key3": "3iZgXMy4HM96ouoMmW2BfRx9QRvARnHUh9JcwDnG7iy2LEMuv1uoFoaK6sHjrZRxCxmgxwqSngikLSUoSF3KKtRP",
  "key4": "5ASTbHmxrLgNAXwNsN9DsemHYLeCMMZ3fQ5r8LoPaPtJbjaTaGG3MmGe17ode9oiRChF6BJnH6pGawU2L4qn1yf8",
  "key5": "33Q74Nj5mcveax5zGW5MzmEHZxS5No52Yu5qUfKLEejvBQ3AQi3bE9AgHPR3yZjMniW8ZM5U584GwWftMEX9veYK",
  "key6": "NzcFXTV5pZapnEssjZ5LHqAfbVnYCgtR7yA7v9w8tRRM31ZRjP4MjM8pbVdriAKAj2UQ47aMZ1KRXeqZQM8HhzC",
  "key7": "89UXpaxLzZMpvK4N2FMwEiXj82vYKJYe19otzg6TdtGn6Xjiztbf5sjybTEJBV1Jkm5y43zwk9X8ZFce7rQfKtQ",
  "key8": "56tEod5eNtqfCV1ZNJfFt3eYNGAx3LRPtdYQYeMjoQC4CL14F2ooXTp49wtxRA5ujP9umaGFXtLNtEHXVBycDkGY",
  "key9": "5SXRL5NRFkxzbUUDWP74ebQ2CCQvRskAbV5p1yPssZ7mBpqDPUkn4ZWUPAMzcCcH6dB9vcp6Rw2XLVLiEk3zQ8RX",
  "key10": "3kyDQVKnMyY2Jqr3GdwLEdd8f4eS9uFAauXAxUMVqUTbaHrZzzjJgkCHrja7wRodeXi7wuYnyL8idrFBaQYcz93h",
  "key11": "9jax7VDFjvSSBdutrHxrf8UKrxeWeAXabpZ1jgfuHwYqtFupXW2sm11YQMECALpeLZdyuu8drZPjNcURwT3hLCd",
  "key12": "2dyExn4rPQFdLaCjNZ9CAK4hcEQzH8iZHdc6oUSZifbX2Um4UgUqYTJmj7mrK4YBfNgxrS9aPnKo7JCjWAkEZQFi",
  "key13": "4cSMQWtCvGeUQipm2a38kHoLDxUPDNHrN2kW5e3LvURLdqC84T4r4hpNUUMieGb2rM1edwYog5GmecjDfBAHbbXz",
  "key14": "5x8mwuMGX4wTKjNiHcNNiCt2eQQBd7d7C46dUUAUpWuzjPT8U8i8DGKMeTrSVdVMakL2TtrjFswDUUpXG1rZuQKe",
  "key15": "3SEGtZq282C88jxAh57b5ZGNSXPj7uX3dWcdsbSQSSFq24vaLx7ZPMYqYKnaCvMnkxHL1Ad5ny5AC2s6DspyxXbH",
  "key16": "3M7GeMZk2Q93BQ6ydkxtz6fqFGccmk5zceayuN3PbDuiRFb1CBPjzrswP8Xp6Gp8PZSSRWNLwangRQMexu1tcMFq",
  "key17": "5Mcx4pJfQ4nTEgiqpkj8jx54g5YrKTFEGY1PdRPveGYxPg5SkEcPiuozCxusx4kMgdE42BaVhoyfuwZ6Bq3tG5TM",
  "key18": "3WLAf8eBDJbNditHVtKHkpZdkSq8DGhFNyuJmRHpBJZpDZByuQbQmKykRNeyGv8sgRtd2zCnh2tZTFMy9Qh5R66U",
  "key19": "3hktD2n6SeKkqfTKyb3Fmw7KPnUqqoBF54j7ktFov2tMtdiP3uci9ZphFr62VRtHiUcJyXxeAMAkbStHK5crpQv6",
  "key20": "zKFgyDkHy4gJLrzEAZy55DsyqsifiUnBaxnEPYrPvbvXj12wguSP9tD8iemi8XHL6Uxkn1jyCjMfuDvR2VVvfcA",
  "key21": "2cz4zny76rAxLbZ92ruFDVLiziD2r6xnXY9n6uBZLppvZbUPUUFqBkTY5SPY4oojxnxpix5saoz1tpQayQMoSk3p",
  "key22": "21qxiQjLEhUWMfruiPu1UkyBKHyNPKHZkNhCqWXo956dTGWB9yxfsFNBEWdAzSwxF8SJJiMhCw4wq6zpGfxbCjmb",
  "key23": "AXpJQTcbF6XcCxnp5i74TBAFDTENSo75KQWk7rksgWcvmfqN4pcgHnuGUzzmofTzSauX1qsXQ8xq6ZWEJ1kaW63",
  "key24": "2rbMzDWf7PHzhsAFX1TfEvTWLijRqT6qS7K8ddg8cd5xUfGepZZM68frWtjNX3ZFk3bFBYkgb5EbrRZPmq9qrWJ9",
  "key25": "2dMJ9uCtYPZweKHbhmYktxq5mKesaATVPoEVMYQdYxEDxmR4g6LeeETyPUKh5iL8pKf7QnEFJRTseNz4MGfoiV8H",
  "key26": "47bzTToYgmFosXhTAqQjuWiNFbAigzdTTCN37afzbCNz6L2kwwXdCs2MJrQVJXNxQtXUWS3NHsvk2xeyeeVy21Xk",
  "key27": "aw33shEjKLJbvEKVb7kEitgK7kXAhQ7C8NhgWPfVqAGb59bPtwndskwrYv4nVB68P2GmCaa7JCyhLR1MqjsdVBy",
  "key28": "2ow5PTBxZQGFfTFAbhbj33Wdr3mv2Fq2wsCTYGaSucfB4LRueNfY262PGzKYPRU9o6eQWEYVSxJsMeVAM181LVru",
  "key29": "5pLNz1DzB4qipqZ37PzAm2vmDkcvBwgnrt3ahpi9T9iPgpgLnFFKpuqcBVYe9vp6CpD3tQjKM1tZ17Gc3UdVWC7N",
  "key30": "2M3wYPRB61YkVshjGKrbXg8gC4x56gTrJHZtinfE6u4G6N1WjkS9DbH1CrGxFHZ2mk3U8jPGeSx9H8GduFuD5my2",
  "key31": "ZcKu2aSd3twiSwxu7aNEWkgMtji7KBmqV81nj2rVee9psHs5bAYxWrAeGuWMMrNva9rZiEGYkNyBGjR6UXNk2aJ",
  "key32": "ELxDLv452qFVPqbJWnjXQwRpbBygtpf7xqAZCcyfjEWY1zACP75JTUPK3SoJ8H45uDYZgoFCSNGT7enUgLJ8dDE",
  "key33": "3DfT3tRXu5nfWYvCBpPVJh92cmM2PVG2fLLnzpq4nxPfL9f2JhyMF9bs8WmXxEnCAy89vUEdRaJc5iFC87RYUUKa",
  "key34": "tsYBtgLT5QEpEQJifmVNzumgdnrWFdDgUSQ9N1kizYinn74EhQP3CC4CQA9Hbp28hshBTdNxP8z7g1MhsPhJGQi",
  "key35": "wq8TNL74Y3eak4if2DDCiywEQ5nyJcKhxAqNBEsQkCRYdKL9UDoUZ3H1htqHKoJxJYxs7XMrCo2UGxu3ZyUupSx",
  "key36": "4VtmgXPJSXCWggwSBe27qN2utMGAkW4DJWLM1Ud7JLtH9c8uMU3hufcbHVUgcYGN6HzRX7RXv3REcFmgCikGbtY9",
  "key37": "pc919Q8ZBS5kVnhBWpFdpbtNiC3zGkouEtioD2Zdq2kngvFny82aqqDxnWcxgatRokesnTQ7obtraeGGtaxD5UQ",
  "key38": "5ctLMMLRdvMXmNcZ6GDJBQMecizZ1Db3hPCbSrUEYtUJpwfT38eosymATHZQzRoP5MW33FFAtN5j29PDrmB9ogHV"
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
