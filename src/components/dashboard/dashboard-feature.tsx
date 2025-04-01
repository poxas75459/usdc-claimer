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
    "UWSkM5JShbXwmB2YaKmFoVBTHSsnA6HZcJwPiqJvprRWa6GCoJpTKFQY7GCuKdYe49SbEbmFwgcMAGiALNGv6ZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j8eSJyCVciZ5xQM9Z1WbMN9JctLFAxUoAZdjdJEFbMzedydc7bqyAcKAuW4fSYJBq1M7F77qUuPsw4GEGXBfyXs",
  "key1": "4DyaDtNhzzB9TLMmcz2DB5URATTiUkhYGrn5q9upsPbFaMNoHGSHHSK9b4JxKXqGjoFFz2Db16Mc8PgP9VUjSiQ7",
  "key2": "z9GrzpYsGVQQVLcQgrxey3FFnbi9z8t9WTV1jHd9vqAQAfeNHw28x7UBn7CKaY4Tub7kNdeNZJzPdh9nYivkA6X",
  "key3": "2vVuJMz94DRy1BQ78iu8jxTj33MMgNKnzjSFTKS926EFckyJE1Q5B7hNPFrUD5X9pC19yWtQMZC9HVrMugjMiNpp",
  "key4": "4PaqRgBbutroNDm7ZpX3ANkYLNWFPE3JjWhpeVbzu1VhrKMU7647R1bJgjDcuv3LNAdmhhRVfg6Vc9TGjMuruXBU",
  "key5": "3BtBnPxo4teN1gjenEjTJZsiLiiabiyTBZVmXjne6QV6jXvYWV8UdLYugpWCZPDGBBcRdrUXAMHeAMr4eXe3qV61",
  "key6": "28N97SmABhD8zb2xCRcJsmgVQg6BMH6vf7MjrBTDftQiQBSWLC6zxpbe43RUZZASxGayxPCsrZcu96narGRTN2m7",
  "key7": "53uJa38f8VVvqwHBS7rxGisCc3DXnuw7ut4jjVCHyMw4pWjJvUCE5NmDofd3LpEYQVZRaGmJKPqcUchwFj6cUykC",
  "key8": "5SWB7vzkdV5eaZfetxtD6s7E7Ft7ESx7uePuDj5gSjqyvqya4kYYTAdxaXfiPrUqV8UW7ePaoPVqubUFBjWcmYDL",
  "key9": "2c62GV9iYrS7xA6RxWSgCKcwfwz6xAbWEZXGPHjpTMZci7aSY1pWkfV5V8vkKEYXaNDjvmCiyiuH4BVYbgeZU19T",
  "key10": "3GRmKyS61mafuHngCjMBQSMDSH7KkdFveV9WuA4GdSUMK2DXB3dm8aJnY5vMhTwX1yFNXpEcRxUEJDDjLG6nbs38",
  "key11": "2uw87Re21znWkLPTYTAwFE1nF29S9XhoJAB8Q3DY9aUkSnpo74wPfRuAtxphMQ3jqNq9kEjbTqvbcnvfhFVdL1jj",
  "key12": "3gBiBMTRDNYGSddxKwcHMrHNKtXcwx3CD3oe2pPzLma1N16oxE2EXqg3AQJnZKCCoQyp726Tv44ZpKfPGYfnPoPt",
  "key13": "5cXGpdKARusP9TCb5a2CpA3fSMVugXdWb2ubckLHkRtvFFrw83NhvTvn1DqBWpfS9aFcfYw7cEHcUgAjvCJsQjK2",
  "key14": "sMs9UzU1qKcAYU8i6SN8M2gW6rYpGwk8RGd8Q7Ubb9HvQ9GEkVDA5YfPAqKaB9ZFxTSozy5oSkwdSYp3ZZFGoWA",
  "key15": "3qvPEqbowkYhLoAeYiUpXXNmKkR71ikS9ajspu5Lv2Ep83dXeWSRQ7sPKpRN6nzHV5QpDkCruH3vSFCFBAJ5CRfK",
  "key16": "2q2mjsES9vGtnCCyd7JmUXnFF2WmoRzvjjvWHTfw2iS7XkSRUfCPmtZH2tNzxfS1gFCa8TZk2VWCAPj5Ek2vWLth",
  "key17": "2rMYn53AywYshpsxYYp5Nxyo2qrYsy4WtKfeGSmsFoPQsBH6agZo2iGxCgAj5ttnYUwnDeLGSJNe1WTWiENcndbQ",
  "key18": "3H4N6QEMzb9S3CdXK95a5JH94cGjbkcLX88NkM1Sh8J6C4Br3TanwYWLoAYKYgTZ1y1Vg9grvFsnCcP19ery653c",
  "key19": "4bXtDSiFAcscTXdY6cSHERRy5yvohqVDQKH2jjhk8YfqssJUDsYRQzj98zRLS6hbw8SWZqJ737AeZVvsDT6M8JCS",
  "key20": "2P3rPWNAQHR6GhJKSobewkNjLDTgyVtC3tFpW6fkS8mjyGrH7iFLTVCcZNgUcpCMXq3FMuqrsCHFz9JdQchg6Bsy",
  "key21": "3aPraj4BWh9tphq9FSu58iucruSSbFbxQ6wQc43oJ98JYEYbnTxWL8TUXSU4PSVRNBU5iWYHUpveea2TUZJ88PEg",
  "key22": "2PPXisCHo9coU4tYJc5XrYPJRjoXWKA4amFUsvpmdhJzhmm5wXRob8TArFGx9iuMBweZtpnLP4iR5pqxgP5G7ves",
  "key23": "xzQ1KHpC3G1QBPCxuVUUnSQ8DcxRBXEUJ6BvGtv4otpVKQ69qpsctXAhYeGAYhmYYhyapALRpRPz65KhXmDe6Ff",
  "key24": "ZsTH31oPwxBt4gJ8Annmf8oXrCfzTF7VpqerhfLu5XuzLJcRMER67CZHtdbRVbYqJyQpB9c29hHFxD76fKBk71y",
  "key25": "2u6sFZcvj79oGK7cMefAMhZXBsPiBPRnXWP6xWqprjxv6BYM4udRUdWg8g2VLtgTJVsw1LcGrqSCHmxHFKMuxW4s",
  "key26": "633H4nTEy5JBYFkHTaa46rYUogKyoqShCqHSGT1X1mGykLsncvZcpAZbadChczgvMyhALTSG3RjxCqzhe8GtTKGy",
  "key27": "3qAhHN7cd6aRLhhEExWVnGweVrGy9Uxe3hnNr8ooBiL1GhCxSf1kspHyAQs2hLVMZasz2BferoYAyJUorjUTJ7mS",
  "key28": "R8CeSx1hVHWQ7PTiSbVTDvJa39YRJiyiEnCbtfDVptLAFTTEVKQw5XQeAsxbUfzgxZadGvHi6aNhfDbDL6ZXf7r",
  "key29": "QUWH5QMjQFi3mVGgXMWmQUjWU454r7bLWYs4na1Hb1YtcSYhFyT5uVfLZ83CuUG5qmdpC5LS7JUrfj1GXpoc2tV",
  "key30": "vQErnp7noyFuGRjmFz9j373f8SXJY269rL4Qv4xo2cwCUJqDPkEjkVS1Qamhs61tWefTH6edhP4zFBfUBPU7V6U",
  "key31": "4JvXsU2t47fD7hEUUvRg7qGRZi9BegbpkEHEcy6PmsnMJNvTyG2qxoaK7pHk7PTToqx4pttPKcU38AWb9zsjpycH",
  "key32": "4vRji1HPKYoGXbGt4JrAEuaHEr4pFty99wxqXmT1iVN5pKZVvL2V4xUH7CVaWPqXvz2pmJ19ncQBGR1zjejMwJMD",
  "key33": "bzYa1BKCr2xZif4L2BpDdrRUo5f7zKQs4jPevEXFUXiAWD4S6p3vyXREdHeakYgXvdKFigAcU4L3LxWKcwocb52",
  "key34": "5dWUUbm1DYCpHpG2pgKkthUk2NZw547yLogi2yJTEmg79Ri3h1fCQuA4Dw5JVAu8APJQw2XPNQtSPMfjC94oPnNF",
  "key35": "4LwL2tzQGVkxFsqL4MpUQAcRaBBPyPd3n4EV1AmqTqYzm8W1k2t84Tner6DCcPDY1Qd8UyhYvwNZUUUqATVQrw3B",
  "key36": "55FDAc1XuajKuTu6weSWtDmWuoNZebWKfbZaq9xBvMwHSE2jvpNZw89X95gTCCBDgMiw1B4QqGJi7P4k41D6A9Kj",
  "key37": "4pxLzC9CZjRFWQzDujbSbjJxFYTLYKVBWvrynsEY7wrnzUCA24z3yZNqb9xb6jgGHXTWM3r3xYh6p2wUXxAdychc",
  "key38": "h2B8feqYp3gHzF9Bkzypqi95QQVdUc8QG4BvtLMF3Ab5SiABqQvJii87YtEZ2koSmM3rnEjhBntozwGEk6kL2jh",
  "key39": "2RjVj8wzdUAto2wpFeVzVGiYhSqnBKzUFs4TEEt7zhJqcrjmSBkrrHAUzJ9CQ285EyYaR1bGrj96wooNxs1U2p4z",
  "key40": "3j8KFui6yCrDiiNXtKNxuZtZs9r5hKYHAM2RpAsAaCt6vHPrdnj6rRnpenFcQdiinz3fSCy4D8vUzY1Fbdhh3LaH"
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
