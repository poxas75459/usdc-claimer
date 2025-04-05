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
    "33bX6nUujzPqdzPzrMhttUr3wfL6XVApturwhLJVF28sLEXWUgdqkfB6QCEfhKtpcBtT578oLgffZLVzwcnP6811"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zcC9Z1u5B7PtWz5n1MjQC3w8kgcti5GVkrKEx489CMrKWzJUPBTz5jp1uN6ibn4ZEfrDz4HfEXYPG712GobAXDk",
  "key1": "53memYz2wREFZqTjJmpX6fGUJwymSfn3ViJvYWGXdYVFRCpJaC2f943j3GvoVKyGjfagstCgYg2Du9mjZYybGGzd",
  "key2": "29DLsoNa8c5whtwrJB7MrurzSybMWT1hCUw7Dzb3sLxwwDb4mzNfeLkqadjBEKw7zKZBUWKWiFRiG8H2n65STpzo",
  "key3": "K94BpbB4ire8cBjM4sqdCYyko88dq2WEyvAiQVzYTma9iK8HFGvn2evT21WcbnNirAauuDaoAXsFeb3Jxmmhp7p",
  "key4": "aGSKwFmHLAKvTg3cmf7Didw9N5Jm1kn3x7aU98KCiiXVXraaSGWf9rTQUvfiAM887Rbovc8ykcQuAXTziVMZW7N",
  "key5": "3Hp5RnrRLaYsB243k2wgEYmaxTS6L9LZTDPo2qrhNC2ggYHwn4V257JQmWsNhPnRw72B4gu39KeCq7HoP3384nWm",
  "key6": "277fczHLoz6JSzzBXYYLAzJP1zyG8ZpaYxJU6b9oZ9mFSyAksfq4dfBCJ6P3VSa6b6iyfbikZ31CZEKF1ARV5vHb",
  "key7": "4hgAPzzHdV7PG99dydtqpqdaz3GSERr9cxPTffoTKuZ7iwBF7t7rSa3Lf8tV9zdSy5ZKk8EnzaBXQDxgMtdcBGhe",
  "key8": "3mUom6TEVjTNZekqpdDyiKzcxHs9Btwh9v5jX94L3EWsmbrr6gDrz9YiLwDcj1Lk1scsHsRjZQ5WHRrcnJbuSaQk",
  "key9": "4ovn8Cmzxk2TjUtHhvt6mmdwxi2FU6vuyNYehdXJeJn8kFLdgonCbdB32hQoxcv2fxBqX4BaCkpGLnuHNJfwJY9e",
  "key10": "Xqm9njvBfRtpNwVgoaTcd7F4QgCpLTBV9vrbYLKeXCWyuHQFTnB22RU4y51jzhsmkss1MK33Gzc7CwSMAAdS5Ga",
  "key11": "46YyxbTsQ9dwXrFGbtezxwRxQiefK9opGZD2eYWrv49KERfjgazUPktYqEy9tVUG7VdeS6ZeG6MpNMwmVGFnWmxi",
  "key12": "WUNiucpQutjde9sBqKFmeDrsQKhBDTZVD6orMhNPFmvenGaPJLoeEjFdVQgbTSNdWoK4kdRqrfH4sTwWeMXZbkr",
  "key13": "3tqnfeMRkDefxdoQz43yyMiaxigr7vr639i6bibXTBJVPWNuv4widTqUPAVLP8nRQMGhKmrM8hpjUh8pSCCRpyxm",
  "key14": "54CsjHzdYz3GR7mNBC4nQgWDM27GkLSsSghifaTGFi1XUnWLinvMxhJvpgzEVmAac8M82f7j17yXEKM813nes6C9",
  "key15": "R9ya3tfXBryxqoZ2gFaRBZswxC2FYJ2mB9RgsVVk2rHgWToZUJtJN2oFGb9PUBLNjfXcSaL1QuTPDBQ5KYX1XAu",
  "key16": "5cank5o65b7NTuGCycAR2SM6YxV49SYHpVopHq4WWMde3cf71oTr7DpJSjAtiSurxnQJNBa6wUr19YJw1LMne57f",
  "key17": "4mn3WmYwthodzMV4W8QbHqAASrERPv9huPHQBdGmd5iGhhJE6L1ouKv5pjmKBQu1acidzTweBXEAp4BpoaPkC1sv",
  "key18": "4yWU2FUbLDfFTAm1qu1Cs5FUkQAH2WcerLggzv98a8A1SKrfp8b2CVyoMYnR2J3FUFH9QNGhEyEBDWFUJ2qG21ug",
  "key19": "4ki8CnK8KpWPsgrYYbAef7LfhmLhgTduDLiEdT6svx9JA3fk8kkWhxjNi7idkG6bU6cmuFNVCnB5EgyWfHRtuY1v",
  "key20": "4um8952yvmzAvQRJ6GwobEgB7uM16TYWoYmDb5sWM5hE23AXc55Vo4m7GJcazbkekydLemkZPo7aydPY5BJSJaQ1",
  "key21": "tavcYGfL5D9sk7ys7qRPD4wW8YxdBvBF3RbP36kW4pAfrBzgYXPbbDdrfncrmpuUs5Q48Lx6iU786fhrGjgHbH7",
  "key22": "3TqrDZTqajSX9zLgoHrM72GyCj6wbdSQFfdo6EJzC8a5Ac8dxBayvheBK9gSm7dvdCRS26WgdecABwgHgurZcv9p",
  "key23": "63Tde2zinfuwE4a7L4oZJHBCkxazgiKooQ8aFpesJfZf1aAbvPJGGie9Gt2KTT8aieY3HjXKPX78fW4iekv6P1B4",
  "key24": "4dumJrJ4gL44Z2oUWHsYyagLa27SbwrHbSf5igGP4X1zLyQA7jA7K8GYVn3GqDUi3zR5PTW8bsjZ298p92mrHyiM",
  "key25": "HEd6Uq4Ebb7WESSMvVKPmabucHTg9q9L6uZuaSv8UyToqamS9yiP51FmL3r37wkwcwGFiZyciwwYsqwKiF5NhkZ",
  "key26": "5cx63fJ7qWpyC9WsES8Es8byLRL2n8Uun9QKDDix2tpgjgpahpEAyv6bLCADzr5kSDhdpuhqVqR2eGniTnyY9Czb",
  "key27": "5on6Vgz5LDKQKe1NbNHDKsWtBd9Q5infpjCe1ehNZkH9bf4baAZr4AcKAtWDmy3aEDyTGR6sbB5xjQhUvEirwMFh",
  "key28": "29aSgFzrrJsSLaXzqEgfRR9YrXCkXtSUdMpiFpjC2GaLndKrKYkbMS6UwyikWSHsBWhcXV3XuuJtJTVPBqUNUYxS",
  "key29": "nY3xGYbMrvWxwFh3ZrZTKX9XywuxmeaRYRCAvEs6tXcWPcLqQi9hyimGGuxWvKDyYubwqiLZkNM52yXfqXCNPm6",
  "key30": "2LC59gaEq7G2RtJUqA7U3uDf5w8C5nV4qs2C4gTc6ikJs4fiXaBJBBbYQog6XaKprn79kXTGAJN4f52fiAF2ZaTC",
  "key31": "5sJ3VW5zmbgTX8QmUTC3e3T7Gpp5yG5kyQAb63d3MqJqUFs6ftTxMNYotRvMWEpM59XEzB3TQBU1cMLEgVJbCyfG",
  "key32": "5KxfMh1P4uyU6QH43RucrpaKo37DJ3iqgjHAtKpUUYq9Yu9G5n28gUA5WDp5kxKwzkf5zkZPxRm1cEMCa5pcsFXf"
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
