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
    "3ea5864CHztvRZZ6pWQqjPAq5wnGJgTYfnPzt1Ki9GApPLnQtDxu6QxbrzaMtMWyjhguMVHxLvKEcojmktSJ1FCq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35KUrJkZv4PoWuQ4E7CGvsXhuQfKFtEMwgXvdG7QcnVLGAyPq1TjbTwyn9tekEGG9vK3VwT7TqqPvBJ1m6qR5J6C",
  "key1": "3KsS8ddzAgh9pZqugfmqBxVcbEy8YzANQXcA753FdNXv27iYFyut4aJy6TPw2ZTYjdDrxWLNVqHts3gR1A5muCpd",
  "key2": "5KxrUUhF1bLXYGK9RiYeFEsrsxqt8zqdoXis5bZJ8LDKqojq38p5VLgy8jEfjp7nHXq5KUrFKgRhj4cZBnzNW23u",
  "key3": "gxh6PwpVjJWGFt9ZWFkYM8dzxDArLCxn7GBjkd2krdku1dGoJA1tkSQw3v3GoRVynPkDTSSewpopkqMDZfGgG7b",
  "key4": "4qrbgsaykCSTwWCG3mH2tX3vjnnpupM5EJFf7iJSSBRG9f3Xy3gY8YnCTph2Ma1oSDXQJtJdZJmYaqSn4jsdntjL",
  "key5": "WzXPK84rMfxgMmy5e4PZxRfx6hTrKsWVanWGuUZ7yKfPdpAvUy6WkwzNnep5Cid1gmbCNcL7XagvxDBwDTij8oH",
  "key6": "5bSrmPHrHQTpwB7FyGA3aUbyaEgLLtoAnmoURS1sr3gi6n4XBvRZzcdFkWQbZ4yX8briSYm19kKbmff7ioD6j8Xe",
  "key7": "KEEZYJAvpRz846ozowj8QrKwnGZATsvygSrku1kSCuw5TW3vZfvL4fBi5QDQbe5dmUKHpU9G4JW4HaY7mQ7yuP3",
  "key8": "5vo1CTDnzAs9gs4eMkmgtaTvNxA2SyQTpRXPtMLttDMtquCA5Bn21rhwrDEjZrX8c8dgpaXz1wmoENEzxf7q9p7U",
  "key9": "5Uw6ceME2sq7W7PzhpCzZG7PLnQdhEVHoCKQ428eG4RScMRLDyk73KNp8Mt5f8x1E1VTw6LBH2TMRMAvmUpL6ajX",
  "key10": "33dHwmeBjL93d6kNCGymNiSdVVvuLdiugdUUVVfyFMdUxdU1y4AbnGwUCk1q2NP2yujEPtkevqbCe4edQRub2pWK",
  "key11": "3tXXfmYtCxkgsEc158aC7uPnuPvuBCgrt3oaprMhHS9RGXf6WZNQQUVcLtq8CaHPiCtP7zq6XE97QpWpfXqMhVGi",
  "key12": "sMYGCdLRtYgCqHZ6Y5uAJDfD6yWUqhzkWG9AA5ATE4b3myWb9cSLGkz1TcsFQqmzXc8RELwfhJG755pVxSj6qJF",
  "key13": "3dRvbmWLj8HwJXCmF5JcxbPch2q1Sc9xnUm78w7L4SSCDnG9WbuhriHzkx5fHD1xNX2CdCZtPWxVLa3jnAucoMY2",
  "key14": "pS8TAvgJaDwJd9MQY5ypDA3qanWd628TPvV5tZnkJi2da7d4akGqdhZHzbPjvzpkYLFNM8vEXUUdHjzTAUJShUX",
  "key15": "24hFcDPSLybexiKvZ3v6D37inapPo4SUbzzXTP484o81zVh33Gs2CnHv8MyF3XzQKmtXijkCwwW6YYDRGyZupTj8",
  "key16": "2iTKTCRD5mzet42Cnv4BECwoT6b9eK9QeVawWfZjpBo5dTzTfejaa9Tnr5VTMs69PaSuGct8t7AcspRkdhES6Jsp",
  "key17": "5q5DoBKUwXm5ijsAubWEZ9FMGwhqF48yeSbTQ3ZdXvNZZ94atpVe22mEeKFHeHXVectDkRddZtob2cKGMkvy7ZmL",
  "key18": "RWrYbQP1KLLT4RBADi5myfzXZXU1RuYLoW5SQxyvP1sxuHNNaiaCpGJ4EMyf8bMCa5RPB4pFte9ZmwPREWmGyMV",
  "key19": "a7f1A4KAbVM7JLcCMtbv6g5gD4HwFj8F1adgE6QMp18vE6KVoWGpnh4ic136x4J7DJw6B9K3uh3uS2aMkmDxTEf",
  "key20": "4wdm9nErQMP4KHz5FGZ3M9MLMHX2azitpwkM7u3pGyNGymC961Rs9zYBcrPnShutErAv83Q59BaTEUViubkhLUfM",
  "key21": "5mUKEZerXz31MbUt27uSW4f5bCeagr3eD5GMBoPsB1uLKPbGAgWiU3rfEWGoNFbgMkTza9utZPDHW8j8SUbRCujJ",
  "key22": "5WJ9AK3b4FMK2MuKmLSkQG6KJX5MHNpFuA9SqMfs4QFS2ZBXXNp6JEbmxcti35RJpBUmDcc5wbE7jqgnnuYTCnvh",
  "key23": "AFMMqXmfuNZ1jZfb8mCAc4pZFnMGimosRgziukKpuJdAk9ytiqZvKiNv3AfEeXe4ATXtagReg7z8rQB38MLYrkK",
  "key24": "3suo3qbk5qJSMvCxxcfhQ4W9e56GJjLAUTnJbHEcCStyCx3BJ8Zbqn6DDmznGtCcDAQh8Cr2KeNRyrcetR9w7MvE",
  "key25": "27UYR5Y9yhPPSScNptLRdY4cxA7sCPS5ufhgvwjfAPx2difbjwHjWJdJ4EYrLBdyDkyY6naqbm89PaBP1CksjSAU",
  "key26": "3twhb8T6SVBAawe6qmwsv7wrrk46ZR7iV71P5yPkBbUJcCkWktJku1dWJT52Lnd4XXZpKFChiwsKAZ4CBCb1TUXU",
  "key27": "3vSp9ZgCCimVvDwR9BixubUFXF9vsnR8nf986q4pP1hQ56aqdQVyyo6j4Q9n5kmCSzCHwnKt7J2fr8aEHz8Gc94u",
  "key28": "Z7ybn4GcyMGKdyAkZcrjP5jSQbDJysk24msJs5mBoQc3eGP8FEbaX1G4xi3qcmkzNHrqw5zdb1A7LEpQ7x3V8ua",
  "key29": "2o4nJnuGcvxz7tsA3TwKcHNajkmqTDGifHo96cVC2XhY5vekkGnQm91QyH6JJwaqPDLZo1jpXZkAibxFc57RmxVz",
  "key30": "1WWrDorK1dqGqW2AjXQFtUFyq9n17LgL2GjLgjtoEfoE4CJdtKqGaLEP6BeoyNStHdubvFjBJJPZf12XeL8P6cY",
  "key31": "29r4y8ruWmnD7uNjrzBwCrbva1b98YVm1RdGVbVVh7RLwudTm2FTx22ab8B2XeP711UJhyrJaig59keFkNgvjvns",
  "key32": "M2ECrL6Nv2DkYAAu5vRgLZzkA2xRhLwNMbMu5ZmfyPXB3yTbj7sEim3kbwAMw3j1CgjCkisCCoePwPUicbeeGzA",
  "key33": "46j4Uq9h6dd6uokdHgUnBLcK7akChHNauYyUY5sDh49UjsAmjuh7owiVNvBMRca11AmA9ZhinYXRqzPsjqSL4BuA",
  "key34": "2icJXZAhDS161uy7r1dCZ1T5Efsov89XxSVqbyVEKeaWjbFjdvLeyeopf4JFvNGpTq7V8rj6xF8UdkENuDSsmSqZ",
  "key35": "3y9GSXjRPkTCf68W7c5rcHnJeYuirzeNy8v6Jw4YB1ji1vP1p5161jvcp59D8xBkucRfmpTdyj6AyuWUNvJ1avSH",
  "key36": "3UpW3AUGfoGf4cbEPQu2anYXH5S8jGH6znvdeCCXmvCiVNFw2VmUrp1oeuZDEco5a3tkfPwWyQDhxJ6RyPdyDW9o",
  "key37": "2Up7jXTUSH6pLt62Afa4AsEvxJafm9BbQsRXxSrytXyfDwrKaBad86cQo4Zzi7zErssGztMJLRNMuc8MU6ZhDxoP",
  "key38": "3FjYqunmfV7jqLsXWESvamWfMtyYvZeJuLKXvXCggRcoww8inpbcbiH2D8Ldj57K1tULfy9DjpZfgTrWnYgovcc8",
  "key39": "4ecYBpXvyH1XRfPu5ogwPrMZ5L13JwZwP8jTeBYpTHQNHam8WWM2VtjmzuVnrzAwAFJBusXKqrcuBo8ujqeqXWy6",
  "key40": "55Vss5HcfStErEYbHWp1fn2xxticV4D55r5rcw3qzgYVDcBNJ82VgdMvtiwBnGTCnsmYUhfWAtU8JD232N1JfWgy"
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
