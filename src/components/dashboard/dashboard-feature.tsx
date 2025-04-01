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
    "3nqFzScPtL269HTyU99V68gQmYGYXA9udapNH84Mc58k3CTJ6cwJ7Pmv2MVBQyufCMRoKqv7Mw5JRuYVHaSEuWAE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46gNwPgqukT3HgXnNt4bL3kxrS5wqafWDZBvgTqcoxphYCXW85qgrwm87QiEipwkAkVgrBM8aVbSbXfBvD4MN899",
  "key1": "2pU1YN6JpDhJqhX1zqTh8Qs15LvhFaj9NBMkGcFQ7xZVo5oxbFDSZN37KCQ43j5LzuCbjxMMCNqW3qg6eGmSjjpd",
  "key2": "kRxHDCsn2vHw6Y2942RydvR6LGyBBfe8rnA3DUKT2aDwBzv5XJfcZYFQRmfyUg7cC4VGbLq4QnDdPxp3T28Mzzk",
  "key3": "4V3RVQwVTS6uheCYKW5tEUm45gbAiZ4CyabpdJcHHbHYesoUhgFxUe8MZN2tVSCAtFaVCK72SgHUSRExqb4MZyvE",
  "key4": "2AnzR3nupuRxbRZoJCTmCXV9GMrGPyRq19ytXKf8kzHZu1a8cQpJvKcHGS4sa3D8bQKrhzGqqEDfC9LqyDKJFXbK",
  "key5": "qsfx3t8WzbPsUddebbKD2BD8qkPmZk7DsAjR1qawebmWyJ5iKuGEf8vsfK4Ckckq8aYqsswLAcvR5gvqmoV3Zp4",
  "key6": "yGn2ZZDeiKL4n1gTbJhjGzLYjjX3mfohMDXg5gDLZ8heBxtfg9SB5TncMzD5mB8cKVGE8V4cyGcyLGKyEoHFbpg",
  "key7": "5FyFFVRVsbgPUR9gKbSBQG34JwQ6QuWV7bY1y4BwP1So9b47SQzkkhxQvb1TBEVxTJicSpqjdfVFb95v6YUZL2XR",
  "key8": "5pYEQdXQUB4pxwCoNm96RXHa7TPo7dkGkHtPQ4PEmfVuHPWdwooP3pTc5BRhefSCYUwTFVxG3iVVQqNV4zohTxPF",
  "key9": "2J42cTX1wMnbG4wGVpirc9PXaNRt6RgR8sfSg9usHEKAUtwDgKhJ3iCz29ZBLaSZBQJUxDXJgkxkwbfFCU3B8VP",
  "key10": "3MWJa8WfxEteT4vYfi6AAW9TqDT7JLiqzuDJ9MPU5dGirfuyuCDJ2sGmKmLyz37hbMn8uyJ6h3K7eu57BK3ccUnx",
  "key11": "3KKbgFfU3iVqSQd45UhyAWKrfN6bFb9c6fv7NC5J4iEjCttptaJgQiWakdwequUc4w7EUVJdKxyWjGfn3SR5CbSC",
  "key12": "4h25avW7ntemy516hFA5k37rVh3FJ12jKVTAp48eSNdhdiiT9Jsa6R9aBkAw3nhfzNhxhwNqSbdcju1baakZWZNN",
  "key13": "5Jr5uKFNtndLpmQXSpVM4ZHVsJ1K2D2rYGcwW9uednuf39FFMab35Wig1Y9yd2yK8hToG5NhTUFeZJxSFZ1xwNUD",
  "key14": "4aCk2r1ou4fea6C1rpn6r6ogX3C51HrwhVbgpGU8MvDbSG1ZMXAsQsvgnrMaDD3hxPEk9mJLGJPahoLSosyXUMKP",
  "key15": "2NPh6geCptgowrFs6pQHZhDqwurgrVCT875BJzgyE8rE3begT6owUdizA5XwV74EPkGPwNujdqmRcV7t4dHKzLh7",
  "key16": "4USKnpUah7YFruwGtLHWJzF5pny4nBgtvwUx9ABvXAAMTdjPBpnyp24u4SxctMtTeMScJYPQPxsJu3PwCsDnjnsA",
  "key17": "46XQ7Nz2VLewWathasdAkNDKALwtpej7RLtbkNzJu36SU7N8fh8EVkSSTEVCcrrYBCozdACnTQpkSJzi2ZTjc1CX",
  "key18": "3mKVTmpwTMeZV9z5q9kApM6g9C4AQvzF9t8C2NRR2QyxtNgUUbFLJ7BUhxrMbwovXXAVG61hydXsEt1dzA6T5t9Z",
  "key19": "3Ayrubk5ZyXyJv8SGudcMpazuPnJNwKM5NqNWuMBfMg36F4Er6iz4SSp6o334H19ybTDX2KCMUZEPHdyXrbGTJ13",
  "key20": "xCViSQyT86KcYA2Aa76M4u2stEUPq4vDLxegHe6Y1mGvYw3yk9kwJygxmfyzNnHUsMnhAM2vyEHHbDjwhUGjXQf",
  "key21": "3ZuhXaheGsxoAW4Qd2joqDVDGASn9wcVFUrUYhoM5GBYcK8mVGb1opYkb5mtsuqVLv49htbWEvke6V2PbaNxAgQj",
  "key22": "2mMNn2oXTsV4AQdpdLdsffTnoNKQxNG2Jo8QBMMKCFcgJX39rbejHWr4QDBumAk8w4FxRKxaZU3D2hyMxTUSpz6o",
  "key23": "3CF5WNF46mkUuARxh1zVfpU5utDp5nRaJuGajicLTAdhQfen9RjzAhhRNdsE6Layq7WmWeNRkb9JjL2xnVQ964qa",
  "key24": "3eQ7MTGaDWQpvweVTgMBSkjqMfsnu7EF8qjJ2guxLiLoRGjspe2ScwGMfns7wM63rhj96EfdXqfZTRQ6KnqtN5qZ",
  "key25": "4RrnXqFApU4gRdKtf8xW5Ye3KggYpBeWGedBDXU3n38qhD8CLHzcqFrDa9WpAxzdDZxDJoZJhYBfGp8GLqGt9iP3",
  "key26": "AoSbNxJG4UFzzF3rRsQwQQjh5hnLPCvVBc6jyj6DLgMPv2PDVd3ns6u5598hkqfyQikzTK5PHc93cKJSops3HkG",
  "key27": "3hy8krtKtEjEYVs7mxLVsXmW3hP5rmFRTF4t3WvCXNj4RZqwGd6mHGkcevsj39KMGDuHbF5ha28fNErmkiuoj9hG",
  "key28": "FfG6GfqU2nEHweBL4JQJrSbFf6cRdUbmBPyWjsEJnJr8VweKXwkLYmqH4huhgqQkK3fxkziNqiEsL7VU1yKgggq",
  "key29": "5vhwe5Qy3Ya6ec1p5xuXBBKggQDyJzWbXXZGHVDGcQJ9ySQdCeTfDAkgKY9cYHXhMn4goByAudY5DtswF5kQtFcn",
  "key30": "4nAoRjywBwAL3vn7tPFsheSfDpNRaXUU72FJ8ANSMLWsRJQr1iLqn6h6JKYr6YNY4pwzg6k2XNVC6WQTXBch4JtH",
  "key31": "4bUxE5sfP6XM3hZ8BbC9KvMaDBg4Q68hr9S1N5uLvqigAg6aGj868498xpuordZ7uwc2RdA5ZuqwqQmWs1VnKhJ3",
  "key32": "Bbxc6T1HWpYKNurhcMF4CTqB3bkkz5FHMGw3B3efLJa6rZ6PJRf5xjc3a9N7BXWMNYqvnyHiZtzVfYGY72Jx4Jb"
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
