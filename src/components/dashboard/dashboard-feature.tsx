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
    "354oJPU1Cm1bzULY7RBr259mgsNyrCT38vTTLV9AxqHXFVJRnUEDXaWQs6RkD8oy943y7SiJbqbVEqBAmNKTdjp1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N996fFSNrudAGtS4MFqob8an91EjH9HGeSKLfydPWKC3Vvyzj7VumrwdsWWjtsL2kdb1BUMighzrPhyk4uo7yGA",
  "key1": "42J5DqrvzZFZ5h6ByHXGbSpkHzpjnuoSqMEPrMbUw6y8oGwAKiJxkQSQRedWPpmsnUx8x7kcjab2ErQECrKEE4oG",
  "key2": "4LD3hooeQkRowoP59CQQa56jCGurjrkmCuz29Y6BtaBUke5ePGvkPxBAPdC8bHuf5mYjMt1rVgYEyeTmk2efYbp4",
  "key3": "5WcFVg1wZ2vw6ndeq419k6RbnJqiUEKPXzhW3gVix4uKvB3J2XSTxe4WVQh6YgQMffMcYDY6YmrNgnna9tT41CiT",
  "key4": "2umbesfznppEXPMb4yxPV4M1Bmn6igE8QZePBosKNmkgtyefEWMJPCQvY7D92eCRZU2yHVBS8EHwNZCBkp9jvPzP",
  "key5": "5FKpFco6TQxAeh4FJ9LkhBPSk94TfGwM1diWP5XYBMsKefS8A3QkZ1GjUw7FDfxxRj64Fsq4NQZf7cDozZYPKQ1m",
  "key6": "epBwFFDWU6JZEavAWm2oYgoVfhudgQC5f4Qm7Uopm8sTC7qJb87obeCRgHznxyTGwP27xoKNpjyAkFcqx6Gc3C9",
  "key7": "BrpjHosVLXCp5T3WdsCDEwoRVgKht9kNVjLcZhd6Z6h5QQpseUkHGdC9ow2QreuwNLfCymuUKXhRVgsPmYe5xYe",
  "key8": "5GjgQyqTTdV6tdG1sBZt4bPUUgYVjKwz8KXGzu7xikV1ph8QX5diRYdnHukgoqgKPwcDnkEpQpW5Xe15AsKXGPbd",
  "key9": "3HXMHEeCHvYGh5NVEHvosyypV7D6m1xKUxwtW6X5WvddfLZrBBApQ2Q7GJB2RNriwxtoJX1td6vbpdEK6QwPPFt3",
  "key10": "3PfKDUYWWpwPp9fS3MqGFift37chb5pw2dZ73b6VT5fVjSiejzqkuEHXbmkkbd8M1HFyZL4HBXyjv7ipQY8uyMhF",
  "key11": "36dWZk34NiKgEVhGSTH23J7HuoXM9YE5XHzy9gcdSaDnkcTPHLHBGwm1ynxCx9EP4ASXYP1HssEYVUyEiMXo6skc",
  "key12": "2PW4oLfJBwnYEFjgsR9QShrSnZsKmv8aKVyCLoPmtgm1jojKAdivLnazUV2rdXRNtd7t2GW6GLsVDWGcfPA2dLad",
  "key13": "4gmKbDP4byvBoxQbbBUsjqcZNfkmf5Y3x3g1EHqjvQxdWBQQ5drkpXeaANLUHXFZ5nXHzHFqTQFKybF8cTYo8FDZ",
  "key14": "w5emW4okGnw5hyyhGSw21oAcf12AQ9qZYras4kkQKYrHwaSB7NZAFMRGGRXmNroPUCEni7wmXQi2ttP6ZYmm4gM",
  "key15": "N5ZHDMiyMZPtNbMTHgg7Dr9ZhQLJJhEV6iBTrM4ZH5pcMBF9NJU4BsmQkPz4rxCHuAaV4fS8jkbZKJMmhEgQQpC",
  "key16": "HS4rdtco1Ym757wTsynLL5vnJqV38dNa8W9HveBEywXNtnirzC9ExcuQiaDvebgwbkrLpfHiFbjYb2tcz3BBnip",
  "key17": "4ufbKoDvV8z6ugpRwfLZvvNxGtaxmvvXy9wWhKYGRw864PmaeYMcb9YHENmzKeebA4DR89Fu44yeyeiSNqGp1qm6",
  "key18": "54KgJDk3EQV2zULtPPqkMg7skqnb6zySa8FvP57DBaMWL2wi5cfzULp3gaL3L3A2UVKqFxt8sfCfw1QXWkSom2nw",
  "key19": "4Gtn2FEjtafksywCtiahbgVxV5pX2HJR9EqzjpNr4BUN69HgGJKaX1eE8wPFLGdaKg4zzzHjWgyQ6Z3zu7j5tdDn",
  "key20": "41Kf8XfEDgmiNNztuRboHCBgD46m6BiyZSyGjmoUkQWnkTqzbbBvLzmd93Ucq9xB17qtnxBGvJepDu9kMDSPBHda",
  "key21": "3HdjqZhNzaaxDcnYXy1cTeDRpn7x5A8BZWAWF4sKnrdXBhYTd9sG8mDoZvNmqZkdHsKcittQRwWeqNF5Rg2nJiq1",
  "key22": "3vhbKs4qm8bVYV98Xy2kaabucCAdPf2bXnc6J3jZWVAbW43JVguii6jiHZYLiys8KueKSNtkLHKLa39u1Co14yXC",
  "key23": "kDFmK2E4SjCmSkoc4GgyA6t9qkwdCyiY7A9pXtvwcrKLvmYFRCT8khXYQAPfzjFzbyvUyqF2whfSGkpuUDw3iiM",
  "key24": "2copqKrGVSM7S5R6oz8eN41WwzdeBtJUtxgmxJRRdWPvkTLW3Z6nFtxnS7A2at6o2tM2WyMwzE2gPj71UyhxHRdW",
  "key25": "3EsVSsweezCYwQn5W3zNqAL6p9JcVyHQwxW76pqGMQjByWwLJTdy42ViiRmstYVG7dimXft222wswGBWYM8AopK8",
  "key26": "2AneDwYM7xf5ijCvu86464rscNvAoxw5jFfpvLZ41tghoUDMmfXvw76f6CTntEiNyUsR3d9RYp9TLVCDkmweRGZY",
  "key27": "2teHkrZveyrcmtFaZe1rDtvdt8BqC9rbbLbdT5V8Chm39vGaf4AWSx9MAbWWBME8ADnDfCKTKgDZYYecGzytG7Xf",
  "key28": "XwstbbjAJm2UiUKvmetiG5gvgWsS9JhYSL46MxQ7qc8KrcAhv988Kk8yDpZkP14YQQaU39ohrCyTo2QgonsC5qk",
  "key29": "3TXs5kBw3WenLXDLpFXGQXakM7fkEdimBKVpAEMHKb3GwfQoz7WzJaDfZjPzUGQQNpYHaEzP9sLPnrWehgkYWN94",
  "key30": "3xB3V9KNxGpsoZcWmWKXg1NMBZbBehWTUdUBjPRujYpsJwk4E9sW3x6nWgGc5AJT5NMwehfyiF3GvQGqVjmTqfPy",
  "key31": "3CTNeRZyKXpJKNzEg9pkMFee8cLt9fPamV3hzLkjtGRbGmwdABkWRqroDACBHh71KinCtSD83uiFB5ZX99RsosUa",
  "key32": "DivuKgqwbySuWvbMg7mYNWkP1ccqMdJn5VaVegzXGtzHn3a3wRsDot6PqHErKvaYVDjAunZXoSGQUteX5dNrfcX",
  "key33": "5WKCWRvX19tmH68wfNAc6jbNMBs5q8BoNYbg4v4xJKq7h2r99frcmWRFDiTn3jFaog17tGF3EtthBBvjKQbmc7qR",
  "key34": "5Hb4tf3if7LnUzENAEfeN5qmih4nS67WAMHLQCWFQRjjmXXBeBfxezEMysQK822TBccUGyaWA8WWDFyhMspsFkRB",
  "key35": "3fMz8EWhpqdjUKAD22tBiybD8b7M44RjxhKFMUykKDb9kK9qFovJkQbqofPxLZjGsJD2ZVBeAJZ822tyvmewvpmD",
  "key36": "3f7tt8Z8aSfkRk8neAevyiJSgE1oDb2udNMpmYKRoHwy4LLX6fhjruwyLA57Xqd8jn7prow51Hx7x4M4YMnpPfqj",
  "key37": "4vZChjZ3LBSadz22TwhtgHWbgcDnFk5FCT9b3Rj67ZWhUb9Z9HoexK8km4dQqx5P5mrMvA4BvnorUvoUF3YwjPgf"
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
