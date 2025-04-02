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
    "3kaRsgQDTHsBmBbW8jC7yxMDnYGfN4qX9JmAh44JgL4ACbwHAbcihg57hJ9RWww25LL6rSrsbPtkartytAxUxW95"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kDdYUsKYm9fE72jS8DoabZAMwD3bZq5RypVCRS4eM9sCCxQLZxmBFZE2j71dd7M91rQ9aKbFCJKJUsSUZzJKbrj",
  "key1": "62t7dm4Hf1iF1eEHbhCkJJ1w4Awh5o4RbnVyj2HQgBccYVnyu1D9fkB7Y8ygFVM8PPSJ1JT3A2HNvVfxkB6rVaRX",
  "key2": "5qMkuCkoaXgbvaXRQjUpjd4JL1e6AYyXWbWKRPax66MhPjuxNawj6UiZ2aEyy1WvRDu662nRtMriKWze4a56mDK6",
  "key3": "2FDiLm3ZQo1LqBAPntQkKuJYef1ZVuvfVFnwV7uTZB2TFr87QVwsXqsyCNhriRetq2my6cGdtSiyKxnr5fNhovqv",
  "key4": "er8oLiH5exgxqEMDupLdXuARBSCydC9eUekvscv1ez7d2YLzPBoLDLezqAJqdEvSQ4BttPezhKmpzcdiMs2c4gj",
  "key5": "41peUWkSvNKF6VhpQ3QURNAZ3KcFVCfs6UXULUdfD6w5tcjcBBo6Td7LvqmkX7AfmFvAyKfSNybkRqndHYAiLDaB",
  "key6": "2SHto1MArNkWowJU1uV8NwRnMozXzGJ55s4fJXoJBC65WtTMkt5YLJ2Kkr3SU9HiMvGZNKZpWFEddbLvjk7j5Kgn",
  "key7": "5zi4S2EJChsaYWKzwVS8emPs3zJR6J3q4PVBhpbMxGed3JZ6EToRyecSB3HmHRx58skTtmeJD7BbNA46i7g9XXPh",
  "key8": "3VXpBD1r3hpNinzet6UvJWPTfJkUvY6RQn2p3GsoycWvZRwJPufy17EnShdUwgEa81p8wu993JmdgMrcUyEdypHN",
  "key9": "5ah7M7jrQSWKrcyvoR2g17FmFmUSKxQX7wB5HgDPSpWYjYGRuqMnYeifAPHgUxuEHMw3d7mw72m9AirAGP4LHW4n",
  "key10": "WkTvkaTxw8XWrJNSe1qXL8dD252DeSxyB8RcpTqNSQh5j3fy1EfLpR3QJt7WioJsK4huK87zU24waciy1pJJuoX",
  "key11": "4tCsR6vPd6sYptWyph7cebQRDGAsXAcKtTsTHGSKdztHAdDzQoGNw7Hx99oGNTG4ohpDF5HLKkg1EFu2swM9udLi",
  "key12": "57U6ZscVgLfvydaDoHgpJSWiv8DY74enV7SH8SVM6NRUEPiVmquH1djTQFBvuqinFP7yuUXqbMLFdWQJ1mJ4r7hb",
  "key13": "3XrcUxxwepmSBRyd6zAU6oyNZ3ztMLRUSY7Wn38jvY7qzN1A12DLaA9ssF4S27p15BiSVoMEpSqfuUejqE2mb3qe",
  "key14": "2CG9noTmatQtRtyTfz2uPq8NXML43WgZGbo2xv89szLEo5TqsbPwTryBG2ZDbNA5wQthTubqGoSoHmQuPncFeEdN",
  "key15": "3aGRQKFzMQhhE96Krv19LgxPkiU7xKU8y8uUaddJ5Rtg4H2W7YqfFVWNgtux7U8scqJQEzTePUFdfuNH67PKJRmf",
  "key16": "iih9HBcwc7EdPTk2MTFooDfk3ycRZkFmJLBT8vPu4Am4RKk4yMFjxRoMh2mE1kyfuAJoDcVY6VN4Q2mZEAwqWfv",
  "key17": "63cxBU16i4EPRHaxe36shQicysCiqT1VvQk2CsC6Evub3oN7iWNbvE2iKEbRExAE4uGAZcJYAzEWVMgKQikde3oi",
  "key18": "2jB9Pcx978qybUEM1tbbhncF7Zj47KVJi3XcmM6MwDsmw4HY6iHRzgFitg1uJH2bws2b1cqoN8fpRbdxVg5eGE69",
  "key19": "6wbHgnh9Ea8ptsarySHWi7SXWXSCRQZGtZZDjv7aM7jqhBKwuUkT115eEoyYoEueDgk45WCro3JF1doVB6CbvL1",
  "key20": "4D6mxCfJA1YbivGhsbtjNW8tQ2hnTPB1bZhoYN8nzS8DkSyjyQd3GJT8gBe8w9zLhSjvkoE4sBxSK31aKRDR6Zzf",
  "key21": "3oFcvB9qTZ3otukeLgoayPPirdLsyD5oDMCbbZk5W1oEtrCByTbuTpqy2CDnrfr3PGBhir554YCsedtLsSNCUYQw",
  "key22": "2XTnaj25zZ9DcUX8iUhdday6ov3mp9gRLP4L672wdtpFdqjY1DviMDvTvDnL44scGSfzCXtqnuWApBeqVQ94ixNd",
  "key23": "495c2ySaDrWj6CRYw7JEPhUECDumpct12eRHG6GpNiSizXQmyD2LeW63HHbUfp73PQV5SKpLKPUmGsFViDiepU9U",
  "key24": "66SMwfKHAb5DBCoUndMYBCtyH2N7bW6SGaxkWwtaCSrQCJPPGGy6zShbNLZqTSvphNSG8624aRdu5dwjwqvXfNBp",
  "key25": "4SQSAtQQ28j1A5AvmScnY1Ko2ynut5fwi5k51ZF8PMVmQeZEANaUbR5GsKKB1xiUe5sXaA3bQ4ECSm35bCf9L8go",
  "key26": "5GCj5CmAChgiv8ReX7RJhrx9qD7btdHmK2cZUebB7knSpJVQs1q7GSSd8JbHFf2sJ2EWYqPfe57BHi7K3R2D3hKK",
  "key27": "3aQUDoFav3CUEt5nEHJPuV3b1dvxYtJkcMs7yFQryek59aHYCpE6UBqZ6yZV7kaK4ogqveXukoCxTQZLQaQfJf1j",
  "key28": "4JFq5dDhjsQhP9ZBducieGWjf8Efrup8zjnnaRcBYYLxzoA7srMksMZ2jarj7jGHfJ1bu27bUYzJfvNiDH8Fm9Zo",
  "key29": "rA3GxNzqGuxx2BaxM1QRNsDT3Wy86mETtGTMy5Yp8RcMRdpv9hzyfmiDebBDittsaTp2gRrKzA8gsTxyMvgh1Ns",
  "key30": "5PEzrTioSXaB3W7fUTQJWjBHKRMJyeaMoFdckXtk2XpEfo4YmyAyXjMDT5jK3mdpxDo3ZBc3uh7dCHYDeZgMmgEW",
  "key31": "53gUZS7RKmAbYBWGA8CZdSr4R1x12iEmjRzQfjzj4RSqJfcKWbw769UhAotWLZVGHcTSx5t5tLVjcWnyy3kvNhdK",
  "key32": "3ZaRGtbzeRyJ1u7ox5dMrxKiB6BEdrFxpHFRpApf5YuFtBL6DzLEW8orXD24CyRWvABu63kx8vVCSFvg9q2EDoEJ"
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
