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
    "d5DoRx7NT1efQesPPDfFqkrTUV9d2ESorZsMiTrfJbNQtZ1emnY5F1MtjGbSYpGGK5xzbLqAMsX5qah9LDKB86H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JUvN7NrziE2jTyft6g2rGsez3uwRhk7gu1WckEBdCnh6cj54RChfc7KD2kKgYB3VsUeHRfzzSqXFZFtsk7VFezu",
  "key1": "29d2EyBffr6wdSKBcYSNx2Pezy92nt15yY2xo4dj8sM3pZGRBkeSyjJb2HG3LPdnyAFfPts9fie4YyK5GysXKzvP",
  "key2": "4Hu52de3miLdzjpJeQGvKbyiCm9qgqjCcHtusabQ218fFeRx4xno5nX2ZcGmYe1XVwkdooqacGbiB8qfydpUhBd6",
  "key3": "3ffMDsHQxiTXx1drmWMC8fpZKsWryaox5DyZPVQB4BGXe5GwzizCLjmKeGtNbkDxLrKkHrLMTLJ4Jzar6Ddqoqze",
  "key4": "dGqF7vXK9JZjFeX1yUEPneZkByMj3mZ5D4QzS2Z4MUkZZhnsKSGfwKm1c1n4Ao85xCPKitjWLhjjWR5bxZTrpXQ",
  "key5": "3ubFgk75CpsrHnbmLDYXwgkHGguVRrjot2sqqm2jjDFfsfHTUjhQFTPxCJ2vKDU8FHqoW1TMWsZs4MJUp9q6Ujqf",
  "key6": "3C1H4DEL9XvmXg6qhCqPbH1FcchyNrCKwcUcD3CuThMkUWYn8jgYiJbYNNptMGqBZTrKAX7kU7RBdPvY7Yt8GhgA",
  "key7": "4UJ8BjyPx2oxm7wuXSc1yKb9fZ2fcBuoKB8nwqhnam8EJW1GmbWNHWbgXSS5WD8j8PL1YDa8hgvGB9GxDxfAwrQP",
  "key8": "2otnRoTgiFtEbeZtmp5iybFJ6uxKELzoH99RhQ7PpWUnrGfVCSje7j42uPpW5NQh1QQYwr8EVj9xaYdE2QnYxUZ5",
  "key9": "29TpoY3oC8LHvX1uV5uY1droQXDybb19NsUvN5Kih5wjxYYwxN5tRXVqqTkkjABYoUF69ukZAKwApeSY2hdJyDWV",
  "key10": "5bTVaoVuTD9zGs9oJRkM8zJYhzeJqAhgeACoZc4FTJifxbqVfwWKxsGyyycwawNKJiHjDG3a4EpLdumHEdgvVbW5",
  "key11": "45LXxsM5dyjWM1sCBaFYLSUHg4h7D5BRq7aarXs68WhNbnCKLhegEBadNBnB2HTRQn2uhC5endi8jmy2dEkGXF4n",
  "key12": "2QJKxthNRmcnpUC41YQ3gvjmLEFFYyXqZCxKp98efCR2Z8VqRaYnF43QKJaEjNBo1UBvCLv2fC7EajhPJ6XUA1za",
  "key13": "ZN1ui38BZcXVnq98wX4M1ShXQESxsPsTesPiiVntZsYHawUxn22dV7gb4xJzAWppcHuxuJuEZ5yNM19QhLXmjGk",
  "key14": "3M9gR23qieeqwHqHHHduNKYxmCzk1m1b1t5dYrHasjzLD2nsz5yaqXegNBoyMpjW5MCHxXhqaHjArWV2GK5PbomG",
  "key15": "5SM9nFDSgLemjCuWpsSDkFLqQDLYDczo74yRHjaFXPMHuaFnYBUfTXXS1WxCTS2Hzd9WSkSe2NXFVtkahUYXFdsg",
  "key16": "ep4wzqeaKCAK1PFQ9LT1j26vSBX7KCndBPrQzRZuND1Ez5CoKerGWu92d4cJSVa9KkzPNov5VF6azMoERoYGPsG",
  "key17": "63PkBUJvQTqDNzyPGVkortpe77kK9mHsJ15vfpvXTcqhmcz87iKnfn4sWN6Xu6XAufbNkkYC9m8hJsWvW3wJLtQd",
  "key18": "2mEjjzUpFEeE7T5ZfeiXW3u8BFRG8uFTM3xz67PtDGjupLhRRd95o3jy3PqsHio9nzkSoANUYwNMkyRnRKFQWTLk",
  "key19": "3qMJVFMEWxGaANzhdcpnkVd6vHkBbM23ZHCgeM4VTPBsv33jg2mmBVkxrHFw57evnzTJTdPiHt5DxB5UVbfwFT5d",
  "key20": "XSYDnx649rSBVw1NjykooqvjwFGX2bK3KZbTGwRcpMjdS75ogGRZXdim9YZN8YfkUZw6DPLWbKPJ9EEGMegps4v",
  "key21": "642sC5hRhF6Ev9R87PdiGLEH6aLhbZEZABt54yzmp6v8rqBmcGKtQaSaDKZJqs9poVFr1AFdzBq9Mkx7kxJVmZFf",
  "key22": "3FhgQwE4XkbsvUzN6J9f2dZGn1rRcwAbNi4EoGt3GbPV2JwxUXeZqXjHCVLGzYAa55U19WPLPL5B9xMZ3VjS6T5u",
  "key23": "ccW4ZJKb6RMzEjqbKhe7G6XoAy85uiC2rdyZU9Rr6mA1ncJMpwMXgWKapakbmo5npFfpF1F5rrE1egrb77qudvG",
  "key24": "2EouPipu49GkyB9mEjiA9Y3Gi6Hm92WbfRphUeDLo6EXQAyByBWGUEgeCHiPWi2pppah3Nq9VJ85N3Fh5Qp5z7rn",
  "key25": "2Y1NhaBx8dvD4GQTzpPDjXFCR8PuPprrXpcq1mYXkUmi7JSmxnmyqyR3EJ7jTx5ayV4CsGYxaydefRKaUXCmv1Wq",
  "key26": "66XafYQJBsxLRm2Z7DHrpqMKZjU7JXFJLHFhnbWY3e86VxJPr46kzXPcqmmuoU7aV9rGQY7QvpXCE4awFajRxBBj",
  "key27": "2cUL4CD4L6uYNFQ3YGtRk8DibJyFd2TanturJHCxq8iAYGmxYtJf5inZCSYTodaxNCupVYs9xiKvKiFqjqEgo8NY",
  "key28": "cp5Twu5KutsEVKRGwZwGp1BtkmaJ4kJaZs89hhZJA53KumS8PR17jh4oE25ZNnbex9cHEQwt5u2C8ZYUUg4yPsD",
  "key29": "258P1nQterWkUTWv8FU6FTNJDWae8sw9WLjEiPC8YUtfRQ1M1TjRg4hmmaKZkJby1JFBQzcrqZzw3sm3T22ZSmt9",
  "key30": "28go8kCdAu3cNZDvwXT3pXR1QMnpyTRMrUGb9pWZChytseMQPDBFjbMqtd3kLwmSLbkc4ByzcjkkKrp41U4bQhdH"
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
