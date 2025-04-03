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
    "4cPtXTHWudXW7rddzBUzAeiCbUrsVW84XPWhPhA3FftFRjEV2AJQTiFCaDfwCSFSEPk8M9U7dnsmq7HJD495yiD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XArVT9C2yEtaeMsw3VhVeWHjxgufti4kDJf3nb79zf2FZMhk5cBCWKYvYKW42VGyQPav8oL979denwHpciDYdLE",
  "key1": "KgSPoPkTuCPprErHaXtM88YnddpRAyqqqKjYWqEZHRqz6ZK3gf8sHPGxaYKAerPXuVcE725wU6MQHQb3DY5rBj9",
  "key2": "4TZGJB7g3vRdUEZ7AqRNmWBFx8TnST23SvqCq4F8gd3CS71Tyz9EoAkCPKYuZNM7HVF3Pzwd5vB5D9nBscuwNTvT",
  "key3": "3FLeezMCJo7mgwqgZEvgMDG3CMaBaBxCKtC3QGJrUhBxdK1cV4cjkxiJnaxaFxggMhGt2LVSwgna8BizGq8PfZQ5",
  "key4": "5GK5UnnUUTGdxRTbCNMaMF4vUcBcBfxZ1xSo6qK1ZmhAN29stkWEYDopKVWdkRj56dbfwi2JxCBzSADbYpPFdzHh",
  "key5": "3qFGBZFirVDhHG28AEqdv9iepnPgLdHQC96JPuQTdom9uLJqY7vBkp44qJRBYshCixo3Px9Ec1u3d4rnnnRHY1ss",
  "key6": "3DaaFhxuLP6yKvBDoa4iKHXuZPcddxHRRbjBxFB4gDBDo1gMyLHFBXxNS5T61QpaxxTfFCCHd9DqYsMy3BvavMgX",
  "key7": "3rkmYbPoMX6MhqYE8oPfvurN29YQv9wdx4Pfi6y8ECEboy84sMekwFuffNkWUjfbbGnzmqycbiDtoJGouTh57FuA",
  "key8": "4S1fQmPfw9C6WcaTrxprBpJ2ymDWqPbZZwmwGEo2BBbzT6RWpw62SQrEwaG1U2WbFdgfQRahk34uBeUHGfghxc4p",
  "key9": "48hsSa7Xd1NVpdgnnQFtcBkegQoUozhJNeD6VCq16muTuZuornSBLmSZ7CPBLu99mACFrDVonvRJ343Dty5z6j5u",
  "key10": "5TsszG5a4UoFMm7169CJpLyUjLxnMW5majyLzTxCXo8TiswSLsrfU9szJdPaugjGK22o88tQYSmXazmn7hwKD2gV",
  "key11": "5HiBK2ovrnReTAMDcNx6cvJeHnzzMWMr1dACNxSf88zzTBsF3DLoVWdSctD1XG9s8pw7iEMwf5H1A67hV1zMAF6E",
  "key12": "3tkdc4EXBzpnhb88N3zayu27JyxvMN8KCy25oEd1C5H88LkEWSokbaavkPKwLDfHAXhExq2nBVgNe1Ede9fbqkuS",
  "key13": "9yqzdiF9pKyfnyxV3re9XXHMiGMwj94pwgdxkzw4f2jZy7jUZKfyp9wxyZdb5uEnEn617UiSYoBfdaU3g9mrQhq",
  "key14": "4FWETyxkcH4YmSyfHQT1qJ5SQD66tuiEsbEtgg8ScnCeKPCyYMWEVfEbSS4bWzbjHjBQypPTQdWnTvDdQdTJ6dfG",
  "key15": "3AUoQp8d8tNdxy1WMnd6i33Ctraydnp3BeXevpYjSUfHdF3RnuXr4qoJ3aoLoU9WhhQAa9tAqF3NMbheUXiFmKDJ",
  "key16": "4shG5QBNUuBfXTtbVv2f4j8d4uEiW1c2T3ksV8eWYErnLtvQ1g41TNcqxiR1TDgkEBaK7nQBQTzDaVg2tGXMz8iD",
  "key17": "4G62Hik1WMgemm5qFNdKzFyDtCQKbjPqb8WeSmxc62N9zcKf62XoKdAChPjASxNuMT9gLWwEn5b3kM74X6JVXB3H",
  "key18": "2pYi7vZhVFYMbKZgCu68R7iejCXiytfmWpBeAqr5GtKJ6UtBsdJFc592pUiAEJfjcUuafn57g5XoNZXkfHSAPwSZ",
  "key19": "75ihwgP9YUmRgRsUQzwEEFE6rmp2Ur1ujTV197xcJq7nhmNh4jxak2ozqLdFwRaDHyW3RpxFCZ8ggDMUeosf5UP",
  "key20": "vzuTBiZkzttoNfVDh5kLgPM3FHuQKEbqCFKg82KD8AjW6WvD4QsrVr7vBQMwQGUMtD1WQ5qSXXE3qmxCUD7iu3Q",
  "key21": "4QbxjxbYgvZbrMjyFZZLyFKzMv6ncvsoU7UCdRMuqiUXTX3jcmQM3eXHbiWk1wqfehUCbh4h2YgUm9f6FkZBV2xh",
  "key22": "Bmo8yfovutyjXH3spk4kcDEwth73iQVAJVeyvJc5xucjaBgVrdcrS15w7S2Q2x1tdRbQ4owYQveYHyUQaJHCdjM",
  "key23": "JtACiEzxLZ5UBD7ehxiRMqdXD3f8koK7ErLyzoTrCprDfY4DEdV9TcChDqTa8H6Z8TqTdWf7LsGk6ZTj7Eatqwo",
  "key24": "5c6oZq5GwnVS79ncQsr6BjHWHButA8oH3s6qu1r51SYvB52JqpE9gNLeUaQ3PnVEdZkt7bk2eb3DqVSrKX8b84u",
  "key25": "3auHA7hWYBCKmPTjVRvcjN3J5sU16iv7dgubxKJZFoLhan8Kos7N8YwwsPqdPa5wMPoXNk1XsRqydcZ6uD6N13oV",
  "key26": "rJd5t7XxXrT8z8xnLqb8iVHzUABbkBUfsBj8kSFK46TdQgvS5sjLECw3TRQ2JBgsX5CMRpZ352pUxkwvXoVgAD2",
  "key27": "NjJC2x3Xm2MrkKJcosFLS7N3VTxF589f9szhxKFAj5oHoN8AqQyAcX3144FuyGkPzxcZfycxHvrZ1YbHf4v8cWp",
  "key28": "2RmQDsPN1jmHz6uUuyapb3HqMyiGaegkTqjjMSXrZjvLNpFTKVWNWGQq3Y2jr5EsZigPmG3k2BdysiHx6VrZDd6q",
  "key29": "58huLM5mUe7TGE7aiR23wyriMBk86UDeRixStQCjpwkqHquMMNotsPr8wAmBGCF62XhzR7V9XwwUwyCm8BfSDwL2",
  "key30": "e4RmQQtDdjnmu98bvXB6ZphpN8QR7EXLDLgPjAVGR1ao87RNXavo8fxLGKKfap6PukpAPY6RCo8Fk5C5N8HNEvE",
  "key31": "m7718GCM3rG5zPyAZFBL32qhETVRS6c9FTpqJqZxxjYxfJXEHzvii7HZSA21Ay1wiBPDAWnrN6rm2kk4cDGjDF4"
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
