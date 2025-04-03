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
    "bNGLDDK7B8GqJQGc8BZdp3noozdwSG2wZ442niSeHSoYRHizapsVByVKE97tYTbm1aCBe1mNivjGGKo8moyTJ7j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RzMXBntHbU72uAnqK4VfvTcqame18gRRcCtciyvYD3jraAjZL7jkJFzTokwEirnHb9PmSgnU8PQ1NdqfZTW8G3D",
  "key1": "2tkyFLQ8LHop1QbC7Eeu9VodgNPqFjbvgDKhzHVukig2Ezi49W9vdaWgyoutvSacfi4mYgAtfq83un72vqygP8xt",
  "key2": "YsyNDEB7VrjmifdzG2hFSGifZPZcGXHvSHuFQZaYEq37WXKE5uZbfvWsycuWLoK9pU1vEkHjdb1YPydrHYagGBr",
  "key3": "7YWWxvNTrWTB5rKvcHvKSzZs4UAGWNvYLy3oRhXUb8zbtDvLwesrddhK7hWwzdZyJzJe7yHqwvbXMYQk1iLaCpB",
  "key4": "4YHvXm5GD8onYTL9pXozYykQs7HLyBc4SjsCyktcUtQHrezFUisFXg4rWVEoDgre6teLxoTs4p3uZZLGSNaFqwre",
  "key5": "36C8Yudp1bJwc8oPdpPoCSxZzEMZ9gSDGEXMooV9sUKVnbdjFvvsxH8a2iNAMaVLVd7DCzM2Mhv2eGQ5L6kDiiLJ",
  "key6": "45omkv27NhEujQ7jUtGnsZ2RB8oet3ZJtdhszBDkFLumMiL7iAfwraPGkKoB2TVMSHsPEWagR7m2xx4QjtzkAYRw",
  "key7": "3i2fS47ugTZofiFcKYyaHp2TRJeGFWFUq9UcB2LnqU8NUB2R8NyWhqww2EuxDtrLtWPudRmZ4k5wnCWo9FsWjAkc",
  "key8": "b2n9EiXpi6uJSEdTVgJHK3tsWLZfgA4yq3CNNFrTKEN5pMkosw875ytrGqJRgEG476Co6XPXPkaXB9tPdLCJMS8",
  "key9": "33uFevMxnmsfLAZ7RTwmfBC52K8QAL6q3K2KnnAmbvHakycpU8RLidU9TqGYejTwZBEH82bdp41LXEUydATz4kLb",
  "key10": "2qwARkhAH4WKj7hoPrxK1UD1snFUeAkDGPXe1H3ZL8rmeGEQSGDDQcKxYDVYZ4dwPw7wJsspJPjrGbopjtSHAuvZ",
  "key11": "38hEWQUBdaRbcRuHjCsDeHKCpSwxBzLt6jUWzRHwWpqhV9wXa7xgTkQBJipSWJWxxAwW37yYhaxGubtq4yGLkyNp",
  "key12": "jyx374jwdu2KQyywGhhBYLM3rgPGn7WULhAdJbtYhbixgHDYQmd39ooXBCpxYUYCX2vhHMbtM5skSA5vkv1d8bq",
  "key13": "sSERbQM7HvBLoZAnao3bHs88vtzAXNHjSFaRp1VDXtLy9mupZ6DsUvXcLZ7mdEngoLTDK6cznuwD9JoUpMEwcRZ",
  "key14": "3V6nfp1cust4k5aw9RMiN86nWaeNhSShbQp8w4apgy6L59dH9WWz18bTjhxMDmj2qzjBFJbsQPnq35gJBN7uQtNm",
  "key15": "2VQk3HqoV14TNcXbm27jm8bhUrP6mysaCKMcoGVvRHc2HcX7DwDdGJ6EjYaNhwpLoeBRKMZ7bhonVamGLfn1o7z4",
  "key16": "3W6RdVXFegvan8XszS34jA86sEiV4gC3LypUrhZxFgx8RerAZmdCWb2DBkiY5y2JFHiSo9NSpcJm6XZtT2ms4o5W",
  "key17": "u6owrKKE1s1h4tQmeCp7kfV3xtexiizkmCuAAdFeZLnsadhuUFUY9KzcerxdjN6TJT2sPxmXx4XHiWoXZvMaTRT",
  "key18": "3Qwv3XwbqUEWWWtTkrYs6TCBAi7cYdvDWWvftdWae4Xx2D1e1dZvrKwQejo5Sn3GzD9z2pvvQQCiahxW7EcNzXVM",
  "key19": "22tcHB7ii1632GZ9cbx3MStCWpBGPLqzYsdHCeo8NXKjqiMM1m5gVmADgQfTNU76uXGssKf9kDigSqaaESkjKaDh",
  "key20": "2FSxQ2FZHuJdVEyjymiHoRU97JN2gdZ12ppmXkZA6jNR6gfnmWxzYpQP5cawPDFJ6k2QaoeNk4Ujmx3SVsPcbViY",
  "key21": "4rDM5SX8YSgXmR6d9rRxPDt1YP3tWUf4DW2ngAaWJy83oAeSnK9Fi32bkCJmTN7HgzE7PzmvGJFDVnJn5J943tKD",
  "key22": "2GgdsJURoJbHu339Rj1pUH1oEqPS2NL9RbDFCeM53G7dGm3oaEgUVj4LESZctJQrYbkL7m8kyZz6KMJxWGuciXw4",
  "key23": "5VsmuoKDNucQZ47Z1wtVvHbhnMBbfsyZFcm3fiN2ojBgMK5kSVhkJ91yJ7tijfsU1S3gosTD9tJ4oB5P3noAh43d",
  "key24": "41xUuLhkzbyktHT5aTg1mxMP3HDBndMbq3ZzJrmZ3yDjFFEAFCW8U1Bt2SMEXMf3VPJ73QZ3aVzvAyvR1mRUQ6Ms",
  "key25": "4NieLdfkDHt5kq2Fg9EVvCNSNtRNhyrVe7QM3aFqZapTPPnQNY8RRWV18TKbqhi6uCJdhGoBNHA5ftomxVaFadZ",
  "key26": "2S9BAJWWsFaM9LpaJ6tSV3FnYoh5dE3LYP9V6bPUxAkzJ8mpXCD2tPb99soMn9AMDa46sQJJqKUa5nPdJzdBpj9z",
  "key27": "p2RvGWMFwcsfAGGwCcoSQoHU4VMxzDefGMaAgnhWkArFRNomf57HHGq1uqDEKng5FDkK4ScrLYCDCKKbrGrCcMz",
  "key28": "42vMxYQtGzXfBj2ex3dti22JGUGxez4JVppYPbhfGs6kAQVEEQdXAJXWHXWG6zkTMPMyArzHeEvgHkddzhJPh8Fo",
  "key29": "2N3sMbNk2tq5r67YyqBhfCTKEiKoREkMYzA44giafcqbw7hNi2hYrMb8PVfd69H93DUU12CWdp3AA9GwbYqccDdr",
  "key30": "5CwH6cJmvfDZFFX5cXb2Z8xTy7QtfKAu6JbwUUopcHe6vuCk7HwTRD9JLQpHsWTarTw18MtvrHzY6cZmsTwWHQXC",
  "key31": "3rYWSmdejQeytew9YtS56JogebpKXKjP2Yi6mzdk2qf9XE6j46TLggujyRBSYHHUsZUduxcNNRw8VXUeumEYWmHf",
  "key32": "3UquicZMgAEnKP13wYH7irnZEqdLPkWbGqMNM3XKxWNhEh63Pnto84W2i6oMCh52iPm7TazkCUTh2NLWPvqczPMx",
  "key33": "3GPPztXTAZgCaj13qCXyHbL5QR7ej97h2GnUEkWiHKPS8AbYMbWuBERCWtx8DGieY9ZXXuJucnz2iH7GPZbSdd3",
  "key34": "42K7R84PEjYcJKo8woFwMBoMRBWY7J2Cm6Lva9qLTkdEH6Fh8DMzKjARa3X5YrMGQF6T1vgSCmD6yVycBASgRHoB",
  "key35": "5CqZt81Dch4WkGCkbDz2upgS3i9g3cLRqST1b9S8NpFPiE4hMadCx4fPo5xUYbErava1mj6mEfdPcTb3keXLpAbG",
  "key36": "3UoEd3Fq397jAzDWi3c33fhdSHjtwsr2dfAfcpo2XvbADJN26e1KRegqunzwvocWtvmobVT5FpU185JA2XC1gZ62",
  "key37": "27A7qcoTZypvrAynCrCK6xBuQKGEh5KaoEeQudBM5vWM3fxkWWpJzEYzy8vDGMDgU3YVN8sdGGPLrZQ49AHVfNyN",
  "key38": "xsg5w5M5s4ygCXVybAPHxLEuMp7eHp29ergPLu9cJKEBNYGvmwFwtg8ViGya7mBiypvFLv81asjC8oATxABUvta",
  "key39": "5yxcYXcqDgSQkBejfQXhhgETMn3mjinBymzxptrwrZwcshDWdDt4T6iSFM95ucvmHcPuuULe5TKsj2G3UJtFZUPc",
  "key40": "21CnuC5DWYqGtTJWXMFydAUNgoFvgZM8PsjfyytksARpAJTd4D5m3dUxbeccgrZiDwtdTyw9mhnyPK9pSTDhg8xr",
  "key41": "3sZYfe5TuYCnXnHb4gDkohpYfbQbzVBPrQYHwUdmDb3G79gqBtVUZzv4PeZG1LPHYiwAV1Jv7G4GDD6eL5oS3Tc1",
  "key42": "5Scca8NcFThXuVNPck5iGpUnLP1y5PcbZNLGpvcfgxbSsz4nTfbPtkMjP2uSBwYWsMo8Bog5iBh3XHLQWbp38FZK",
  "key43": "3VJVuRpqhiVkF1QzajxSX1ejUPwHeThFiMTSUhBnigYSPzTiJRYmKEQiNaUfXovPidyRxh65HLArNZkxhxx7HBK8",
  "key44": "5PLM8QbFNUCjSuMKpS6Ui6WmTxjckekYzQcjJMu7sBA8MQbYwL19JYjUmq18hXhMoTXxVFSQrzkCXXForTGJc4NQ"
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
