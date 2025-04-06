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
    "4A943GCxVn3pn9e79TQdEMCqBVYzyXfLjDN8eSk58cFTbkzot8HeQQHAELogPbQd4ATdNKQTmmuhfAHA6Rcsun37"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UdFEfDureZ1U2TJuG5uE1jwzCCHWJcVf6tYjhEThyGXRxWoptGsrvRccQgpUtdWN4ASCdLgWQ6FBqPEKDkgpkuu",
  "key1": "5dbvB8EFtxi73yBHx3STEycvSDhHECkLYpPpdF72kMdNo7F6mZKjMEgp8u2aEpzhxqDPdyiRFbMmUs5SSVsy7hnV",
  "key2": "4Lphy5i9YNAwYui1jLdX7nqC9ba2UUxUARsXKxxDqriaohcwNZY118h9wrPRXqrYDAqztrpSbZxkGHBteMu5bh3H",
  "key3": "4qVpXU1zL23469o8y6zHfbj21iAhP4MN8dbGReVaZV6UapxtG7t4QvgFecc9pzRjRA5hNjtFvQAZFiQXh7jyxVdo",
  "key4": "2fBM7dRfRvZ9PMCSuSBMWXNouAijfSSKyYKrXHBELLtwXMko9KDGRFqz7MpFZiHYx71jTfQYP96A8B3aFQZ6BZW1",
  "key5": "2DeNQs622xoyYjKZkbPPXsahhAVMD9LSvQMHdAqsrP6LJKAfKwNHHa3NpFcb5WEKvij3RpWvoTeWteD4dvc8w99m",
  "key6": "5rgaGA9qPgokJncEn3qvNbq84vyQgdURRtocJm8JLigxtCCHUp1YX9T3dHeXQ6Ni8MyZdRxiWjbSomdC95tX29dw",
  "key7": "22B7CMv3eptbKo5cg9gkmzBb6C7R8DbKB5ScvrNLjb7uXd3gjZDsBrZjFq4grgUnrRpeBhHEape45Ho3TxwfxkPw",
  "key8": "4btTyuuQ1nvgmfDApDnEdpf7pguDJjyM82N6vFCoswgXffww2fdfKisTAe7tsNrt717LA2rFx84LpKpFkF9bUJQk",
  "key9": "2Q1TGX5xQX5y3rEhYCgc5TdwM3Hk3sdagA1j8ByxtBRWXyBChsYADGn99yGZkgZRKPHYBUddubd6FRzcXrmj4LHS",
  "key10": "2GwBbPiJPnVoPzXv5BnqjYFNrirCVongkBFwtjPGsLeqSLk9vP9WYqkUttVyqG3jagcvNaFvGbwEQVbq2KdwBCU8",
  "key11": "5Sw2qRNCVUxLJJqtT2cbeE1nHaBk8ChSg7SFy47qBsGt5VnBnc6qwYpnznJ9uagdkrYKQW42uJ8hy3tTG5ZyE7zQ",
  "key12": "ZysXFUpz8hkX1uWtrJWfiJGcxbEDp8a3yNGpmu7jThns5ucotCSHetycbUGFRD9KN3dykWitLE4kZmYEDf3gmMc",
  "key13": "65fRoERDaRkerSMhEh752PccV8YZYMw1cmLgvBZur1EcifBhrMAxZdNVUCHYMd1HCkFxcmQzBkmmBLC2HtaLkF2c",
  "key14": "cuoqgMzq5P2UwLzJJ6fqySwWZkLwzXeYa6WkED1TZfEo1iADDKiWAUf6hKj1jf5n2oZi4VVwG9izGQHzCxidYNX",
  "key15": "5WhqRr65hh2FD3Pk6kVtmvEwLTkVBFYUhdYBd1uEPUWopsw93wX8Upx8q9p1VYmMSbVhMVgediH96V3u7hAVsi1K",
  "key16": "4ZwWdpj1e6ZBpPocd3qVKHK1PYNouU2pxMKphkxzsQcRftLQkDsj52dvsRQxqUtWjvtZABoXFiKMrPLCdv3PPU99",
  "key17": "KwZKpNmYiSJaksPN9unnJvpdQKN5QGpdFnZnsTWYA7vNsDtBYNTzmoVuhyYZNVCzW6iAgBUuVxjxzy7XmTQXLhL",
  "key18": "5NnWBeNbP2SwcZD5ZRV22W8jexBD267mHTZXaiyioNoTwiFxijQJC4Bi9Xhpo6qiU94ew3yde1nWYXoCvU9r1kkb",
  "key19": "2LFyZvSmrWZrDuNKU6QrWRa7ZE8ypAEcJ9wjwqkgfrg4chRKd8EuzV2LyfbUih7JnG4UDjszceaVQdZ8ZsSawinx",
  "key20": "5vX8ewUi5P77WVeBBHCxgE8Rzr8SUTk64RLrQVayZohWr3GDWFLwh6FeLj4ikYhpt9vU6wapAVwRLUWhdGGethax",
  "key21": "2KeaPJRfLViayTgedSz1QM1kbvbyw581bTmKcMHh8Uun1YcwAeJDMq6gHqFHXqpzBkQAgkdKaZL7K6zsT6gaZ5w1",
  "key22": "tmaxx15DXK7YStdB8HjdDvotgbXPRWKu2AM658W6z62jRqB5A3mboa2awuHUNvSzxARzU1gcivVAPWCAhHxXYun",
  "key23": "674aUCRcF4Arem8sEt4aJz6nEyMQkbpDyr1SF62TawSuaTNnTngypFdfTfXxzBYd8Zdt4coFChvcdqPWgzsdyTTv",
  "key24": "5p3tryN8xABzi4b37dbpTvCzvzSsL9qyWtAJU84eJZoMQEkdeVaue5z4Ezk4pBXzs63pgdqYgVw2eY21hTQjoP6H",
  "key25": "5QfrDCVk76oVAWrynyXAf3nRJ1j7Mg86wdtZ5R7iUEGMEq8MWyb4pZSj516euuqdzqa8EmJpZhCFcETasN1D9YCm",
  "key26": "pbdLn2rCaRC3aR7Tekmgj2dTzhFWELvJTZ4rnATtWD6pUwsAzY3Ee3bW66113HaaV8ULRs9viUtecNCyAdqx7hM",
  "key27": "v8snXALfJW6pDfcNveG9fkL8oBBXzBdFCsouoKsidLuXCKMpFsfkaDa2Xizq3gkRt3urWoAxMwaxHWmJ7xSKnK9",
  "key28": "4v6cYVfX4S1UDv8rsR1D9ezKbLj6Qbk1tLa5HghBUVmWuZmkHMe1DThTbJANfXRXNBEDRUhvBKJYFBAedBhvXcrS",
  "key29": "5vpg91jMrTAw8VTuwJtyKMYqS3nhdzKn8qc76FShwSR6RZLQwoiSB2CSRg1DronnPwEMzAyeaZADjvPtdg9VcTLh",
  "key30": "2yRDS89xic349ujcVAMgLKYp1PqAQJhc9Z9T2ZMdsWMQcDtmXJw6UCWH1tDhTYPsjwjV7aKHSAsenVzAA73wbUZW",
  "key31": "zPRzRXhnQwmADYKCSKRJWALg7Cb6AAM2MaHQPDNMTufSk18VKkrz2FHaPfpKyij1VsNTmVtnTjA4rmtAeS7eC9q",
  "key32": "2sWSMVJQoqL81KQt8LK5qxFdvAHEdXPEGYGoEyRnPC1UBDxZX8N2QdTsaBkNe4vQYd6mwc2yhLsBMnrj4XXRwV3q",
  "key33": "5rdDYQ72vTA1K81tLb5UXDdqxquHnnAG64WpDi8xm92EsJmh9X8aiNQtfNwGCcHDGFYPPMv2PJhELiQW8U8jRGra",
  "key34": "yRvYWyfrhEP7ibcMD49LhkGHNq6VebDatiUwxrUNa4ZeZZrZsbNSjL9yFTXDVTW7Au9rUbrw8FZh445BuDp8crs",
  "key35": "CpM3ZCE9kEwZrcYdLtUQk58jvpRE9DN6bJzn6odNdnCQg4P7CfGp59jXJu8QnppJ8BiGjfK4EYmMkeFuCR3Yqv6",
  "key36": "2SUnvYTbuNuwyVmVAtfGVbWwaRuHc81PtCgUt333Sy4QrfhLccdRcHZhcKgunojqBDSAGK7G9vGJ2GBHh9wvVTtm",
  "key37": "2VdErjoK6TSBH1bujhGj7Jr6NhCcDJsqeRjiopWC4dHkLBGqUPkE5bo86aeFRiBtTUWNkNwKbpuHBuR3FrxuKmQi",
  "key38": "38pSmiTteUXghiohCpY4WLvpCJQKoiacreCEaqTtp3RvH5Bz5MZfVfBL64jjsaQjeLTsfq3TXMSgPXhsggLJUU4y",
  "key39": "4CJoEUqR3Co31AmAsj6rNcihfiDhuEZnKuVcgNRsmyUp7RXBui1jh4gzJvn3YRQAhiGirZGA5WFn5taQRvGHHGcS"
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
