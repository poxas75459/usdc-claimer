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
    "5d3Qu9F6FSyqePbnBD5hYdd53HSbNU7FUazQ1oD4eYdMJUJf19efMUAzHHdB7nXoUMhhw5sSzPjiWhQTqkeZMz1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vVYfNyfPZ7WAgMxZjuqWH4LDyBQYg8NV9DSbQmQJWjo1wYqGXD9T52tXTa8L5dmucsxLJUy98x1zzUD48guSgnm",
  "key1": "4CWZ524pqHrUjWaYWgE3vSJRFziSo18NMdJteS15VyzYUhexiKe1QapB3mtK3QDVXm2Qs9G3ZcJK9tSjh3JZTXUz",
  "key2": "4R1iGARYdACKgqEHSZnqkRQGg2DG9fRsSRr5Efcy18gmmBxBpZAhn1c1ivMrvhmPy3dXhs5EAbXqQHzTdHPwy4Kr",
  "key3": "66HEV3uAeBVjdAgHutQTo3EtDVtAgpeK2CSGDwKbMfz15B1qsbaFgnYThcmT5HEh4p6Mdhv4W5pcJtN5TeibzdwG",
  "key4": "3uaPzKB2MRB71fb7qko7mNTiUAf9bbf7Js6dya3d84ig8L8WBSQLBMFnEJJADA9PBaM83tPjRt85XmZLPGfPR4p8",
  "key5": "3cRDQdaNtLHqg81rdvfpx8MRmNsLLzRRq5kxbGcvkWZk5vMckYE6pqkU5jpegwhZ9ANEjJvZ2JGcsABa4ZBoF9dw",
  "key6": "4Zj9F1kqzoZHw5dRP8A54xonPhkXporSfXZZmqsdVREBNhceCJv26zxaGi2jMrxGgfdZECbqbDfB2SKkj6LAxLbV",
  "key7": "5f6fp85nb9KXavnFViC8dxZYFYs5jJCL5UT1cEVVP9KukJ1guFbV9ost24gJKogPyv86rCejuhSr7yF7fygtm6L2",
  "key8": "2gp11jciAfEtdxeUqW7M9SZx82V92SfUHW5bLr1TjLZ4pzFow6LWdAPRA8aqSiTHRYRt6FWUc8o9EfzggBzyrUEC",
  "key9": "Lm2Z4zWgnem7Sk8zJfDdLuakAwwFYm6PETp4NgqbERbd5tTrvQLZ5MdaVdHb6jhtAxTRwume8i9dEFxQ9ttgJ5p",
  "key10": "MEYPvH1WH6DoEi2HUQywmRWBBrUL97j66eFCHrZR8DPcJoW2QCVVqWT1DdWJe1oTEzHsRkPXdKhuucNAne3wY4s",
  "key11": "u8ufT5XYjs6wdqshgUVmDY11wfXwgxY4HSMQWDmJs1GCNZgT9qFg9iD8k1kdXZck4g8Vy3SKxdPmtPzEfMfksDR",
  "key12": "57UmgXmEtBpFuTcq3vzht2PkcKYVrLtzgVwTyDB4bPwauJdUsQ3EdYfBExCHBFiQngr8bZhp6ua4uNdVk3WdH7cG",
  "key13": "LogdyNXm7FFre3Y5CryamfHS3FyAjUkrsB5PHcdSC7xjTqjwd7NXUsdK11yHsB7Vwc5sPfhKrz8x4nGmccEatNs",
  "key14": "4ZZY7mWeKECQmitR2k3dnC8CURBDL9kWLmesprq2kmHTFubH1duEEsokX7nGtQ3WgZCp2m5LaaybdhvdGJPCnpK",
  "key15": "YDJrZJ38WELdLvuiafbeUMj94dHUiZTqjEBifq1oXVLxubXngFegp6HerEpQdBPcoentZ6ECh32PpE3cFgEbrnz",
  "key16": "bdSRUhyVGt6R1Nq2KLR7SvKEeAcABs1zzQZ17GSMeQ9a5V9Dom4FKW5Sx7vDPoiLWgowJzY2zFTkfWdUWHNiujV",
  "key17": "4yK5tD5oS3mwrpGLSCS3gfhmybgbi2gxvWPxSYDGS16WRbzFK2DfareMpnv5T9HoXLnMjLExANHx6eMDss2vQ4xS",
  "key18": "3j9pR9y32fZRQkXciCjWWU8G9NPV6vg8KsPjeVKmdSjXvSRor68aiZY9Guk4jweQG9gnt9aWqVodC6vuhX2Eut7U",
  "key19": "3kkrvZXGUfQpBwaQcCRh8RzDMQkuy26FC4JPkHaeRHNAqf6SxAzA3qqDE7f4A1vUm5qMPb6GasyFzphFtKQz3wZH",
  "key20": "5jFqjpav6TygbVGNUXShbU727x66tRYnxV1GdHb9novxaW1AXchpCm64aWVs8Hhve5tf9MabwGTnyE2LR4Q82WiR",
  "key21": "aHfWJY3TAPBpGMnhYaugLnNMDiAjR57Y8uaPtZ7EL9TXaYhpNUZS7jJE9L8RbTjvv4yk6Y638caKza3qoBL7WfY",
  "key22": "4H757M3GWmFP8kdxNh9AdenhmTeb1M8oobk6vm3jFgG8j9yRyjP1VVQVGnQ4D4pALxLfXp1oRvKNN9nQRYGd7DzC",
  "key23": "R2u7cLWP9SsqcCdv4fHvPyLzWK3PgbkTvbdKavM88yn1hDHuWKtBRdwWpEZa6cgiupt5JPHPJieDCGD6NCeSrvr",
  "key24": "2AnJfBcbwKnXVUp3GnuF6PqWERn6Ux6SRo3vi67kx3G7iM7zQ86qSvqToAEC1AE81Uk6UqQWMHufBVNcBQvTdnE2",
  "key25": "3BQDpkfQ6vdvirdMnyczoX828jzuTg8YYSKc3ESa4aniea9hevJRfh6kXtgqSVPfNgUfexfRQL3pioR2Ly3UVwvt",
  "key26": "5ZtKET8nCA4MJYErrwwKyYhmiYkPKRk3veFzCCLXFYjCad2pZXGVpK8QmhNMJqwfmrxyeeYaaAZqfWWa4zkrm2Rs",
  "key27": "5KftVmLtVKpGZnsMzm6c9dA6iZwXWsL4gGnQWeBszFNcZ9SRArtv9CYGWxL42Q21hhCPZDJGALVUypUa7Bi7wVgG",
  "key28": "bFWVuZKK8DtEQ3wn497ykWFQAP9CfGPkcGvrBFvV59BzhK9PWYes1ynUK8VAbHxTxHTRPhqJhpkr9C79qazSh9Z",
  "key29": "4nwzA6BeVkVPE5S7PH87itEkW8XJc7RUmCnN1hwDBMKL3SY7UQy9sXZDHWp5XBbJ5qwXxP5czLrvkZCD8j1aMCUF",
  "key30": "5t3spJXJ8YPMYMrLUDgJRatv3GTR4a61bU9Motz5M27G7VqkgheWAU8qUR9EYyRHwVmbH3hB8LCCdNaEh6i5i2TG",
  "key31": "67NtaxC7fcaymuXenPaFTZVQMxnH5Epvyc9BX8aoyPaD7aY4nCYyRn9yLoBp7MJY9JygQpmjLsmGMFAcKCJGgtv2",
  "key32": "4SSsVeXGPsUqaNb8z3MzqVx2SCFNVRXvsEizk6cswy4CMbwxvc3jfwQ8HJgRgR4Wn5QeCm7Akvgah1C8wvkoaTf3"
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
