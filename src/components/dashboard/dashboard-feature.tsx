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
    "5GuMHarTQkwYCKVfb83Hw3ZmukJAoi7snJ4fo5wFvYD77PuR6jPmWdWAVdiE4fL6LigueTBGMVJG5HccFpzL1ukK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36GQrwmdNwAZaszFciv3ktkgtYYq45HU5qZVAR8WR2VVkhyK1KVMNu4xpDNRdaTkJx8r4tT2N6YvSaTqyTMGEGZ9",
  "key1": "KtW5QzY7AyTcTti2zZ4sJMrpTMk1nSdUVjhbFY6iEjoPbbXho2gnvdp9u7HXPm3UN5QbJUpCAaCbScyd4rgQ5ZC",
  "key2": "4mnZDPQBuqqxkUghCJ13RH2HBnqp7J7K4mrDvfEsQVCNRHVZ1DtC9QxFwZWnQ3Hf8qoxQQbnZ1qY4YGYTVkh7UaS",
  "key3": "35KMX3TFwXjpPGfMagtRcpKMyFWy8ASZ4v8myudETShb3aq8U59VwmmrWEAH1UVM33f5ABQm5oi8s6YkFQ5ayrrU",
  "key4": "5ibcrY3BWrgFJJWQfN7HG84fS1LUfsU7gv4Q9wt3kvvXKMp5iiHaA9LHymPDMRKf2QioArAKyKJ8Ktdk7QwKNxbx",
  "key5": "35QMacK8Unnx5xijd3G7iVZs2cNtt7JBsYFEgG8XSA9CZZrUYuUP8vhb4ENs1A4iCpmQ2bikAXSYJBs7F5RdZzxz",
  "key6": "3WmsbUeUTyBqekwUZMxqb8PNnK9ukcVdLjxvCBzsm6nUX6mpcqK3ddMe2tbwsegtvw49bi4EH3iLH3wiPZXncj9a",
  "key7": "3tRtkns5KDoi3zBdjFJXq8hnbREPpaEx96UwXBMF4wHg6EXkMUQSXRzq23QjfPyQ38tfs1Ypg9K8mATnng83odpw",
  "key8": "59dG8u5tbkYhyfiGihjSu4ZiKsXKvaiRSW7qefwU8SAXPw8LtooMhZhQ3n18BDEvbDYMA1DLheZTG3Tds18D3m9C",
  "key9": "5dqxKn2nvkeGv8G4CqPpVSxWbxz6yHJsrqewDxheYh61aQ7Yv9wEKQKCTiAWGqpWgsqMBzncBDCXGVCvxDKEB5g3",
  "key10": "496Mi4wvL2SXQspZcfwVdQW9DSAFtX6tgwoYFog7TYA9Mrf3MXgkD3JKhjmobVXtkNH3vv99EgPvJckubJf7GtD3",
  "key11": "35zgp5HKkhE5aMayBuir1pTMLimhKeX96PDpWR8fbm4CVJnpbgpaqhZCVv7R8HjJHL8EL6HgnNEo95akmZqW3pQZ",
  "key12": "23ChtwMVP79N9DbdoZ6uRtniCsAVMxctj22danoQwRm8Mz57BNn8pMqBKacXTdwWkESam19ABGbUcqNd7VEfCyvE",
  "key13": "4Me2qn2Zsq4iYLRDndQUE4AfTRgRzrhNcMkQMwogtp3BMcnefPiCsFWLC7Y8inXWnYE5kF9cQwDYn4LNpkVVngzZ",
  "key14": "4QSqD6GCe469siYe8UugkMFXC6cxzy6M5hrmJogJHbwt6CHVupkrAQSavSDFbfRpRcJmNT66wQmKkQfHvUWUWTqB",
  "key15": "47unUxfaXkHfNAD12UejWTdA4vzzmPzLLsLscnsLN2adNQfSTjCoTxJFeNjgXbmrrupawmrcMsH6yyp15er6hrUM",
  "key16": "63P3r59WbkdgqBgiyTvdXxU3J9CvHStD4Bc11zi3daEAg25VzPX9som6buCBBRDvrAmAYrX6E3XHfmMZUBdatHNR",
  "key17": "5qDk3qYFSpjPg2iKMweuLzBszPsC9YCFUf1HAC6NVC6c6MJpKaTc9xNBaMYozgAZKGT3BMmzpDvmijssDNugYS3o",
  "key18": "5urMV3PrxhGmyJvFUc3vX7xisENpcV5BbwyocqsZWfFgoe2uX4o14HhBWoUZLhJWvTqvuuCXZ1knhiECdHePqsrb",
  "key19": "5aoA3Fsdt8GkhJBGynj3JzHX45TPGsFVpSQjnrLWMwdYDMkve9M43H6xpKL5RAzgPJfbbxASNuMu37TccPEwtGj4",
  "key20": "2f3fkZLbZqLKdkDerjimzyztc8J7YQyrUc2faqJXYiZgx33oeUQbHu86RuX3vyQmxSzxaxDpK4XWrAEDLBgadttf",
  "key21": "4EqKdf86HM3fi7SVfE2HR1TuzpSMq8i7N7Z4PmJE4j8kWKeFEAemU4nwt4YmkPFmbM7qR68cNT2FH2PgSyMHHzmX",
  "key22": "5zje8X5DSf8xCUqqWdVfAUWa4Zo6fDr3FbcGVXWPEtan6oZTdpbJMTFMF3s6kU125JaRb2wxky645NjLmmmbVhhp",
  "key23": "5fr5nGyBq6TfMQbaoLwrVf5idCDtM65n8EQhGqMeFFay5XxaqQqo1SH1orLjDjDFvse9YXrBE7dfrh582LibzWCF",
  "key24": "5ZTZMVy5LesnUFbKHNkv2Fgy8KhSDh9wu5F2Ph83x5EwMyEzj6z3aQTV3jyk7TyYK6aud7PynrK91t4pWuN9ppRx",
  "key25": "5K9uUgZn4rjxmZ4H5CBF7jFkt9bBk5uGusQgMdMgURHhZRusC8PhMUmJTfUKn8ZXjw1AJyHpaa1cqcMnjjnubmK9",
  "key26": "3FnLLzWRQaf2gbiB46psJzfimiAmhEpVzsEZnPwy5B6Jkrsqq56aWpAn7C9w8dphyxYPtEsv9eciAH5VM93PpiRt",
  "key27": "8sYzDmUWXDAk5ATaWGUxzsxFLRsJYeXtS9Lz4ohkHrBWpFV691AdAFhPge9CJHjHafcHwowovFgc8GeXdKQP5dg",
  "key28": "3st1tgrmrxQnXvhENxFqg6bdrD4pp3VgbipwKcsDKHMV9P97a7BQhnn8ZFhocXfSjDfsK1G19Pt2nFwBzbYbp152",
  "key29": "5WVPcLKXcUmeWNKVA8waVgrKdJBwVybcviw6HXWQBgF83ZdboBH29bcVn5BDvBYALdQNyZrY7Luu1DRq6iJWHB7T",
  "key30": "3BQKgZRsfitNSWGVC2SdS9LBidA5BRbPVLDbU7W4ZypEQY1nB7B5ocrNrh2pkMHrUhqmuvixzXwqz8witNPjW6uL",
  "key31": "3bZYjRwxe6u5nqZriBW5JbPgWcZCyfjC6c3HYaWSpBxkzHPpVsxjfVWDUznL118GJhN4dqdPWd4VU2UJ4iNEFykH"
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
