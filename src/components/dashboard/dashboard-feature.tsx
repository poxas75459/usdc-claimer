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
    "2NNHiNPYXuR3nHgywC4cbaDaGAVH48HRo2aKvjNAXUZJufvyH4z7KoYvvsM3nUEo3rNxAKUkyNg2WrN8DNGjSuDp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MuSrDWxgv3qhvsASJENz52jNY4xWHyaTk8EG9dsXa61vVfwR8U55wVbZymG3PzQmF2YqprPKgTpEt3aDNH4LkAZ",
  "key1": "4j71Rg2ZLZq3egWTDzjiQFF7f9KRNH9GpC6mu2xuKm6dUmnYn9CNtWKps12QVMdwYyPqikoE5pXSpR1VjUfRv5bz",
  "key2": "4MYuxgkqSqQubpDFJEEVgx3ARqd9a9JPoEDZAPd1JwfxG1ck1ugEUhhRTvd1Y4mmrSuGYvto2thKp5ZJDxMUTbcn",
  "key3": "3w75GWg9w14hF2VL2JvYZkAis7NbnUGFrTWaPNnsb6Cb1gYrgp15ixp2qvHBWVN1kFWME4MYa7GiyBWmHvMc1PX",
  "key4": "5MWxU54QBv2tw25cBrvvKN72kWrNJCo6MabbMY6cQ6W9NCb9aWckAtBZVr4qEbVUFNqqgekY19mrQARXM83QHYYc",
  "key5": "4Tv2VkxifiGmFuQPsyAHq6qyu76KjhPsbvvmmwWvXzjrG7SMUvF3TokZX4j5TBZ7csqU7uZrE9vugPBFdgLd9J4r",
  "key6": "4rueGFHj3DS7vavZLssLvkvH7q8fzWxkNsr8oehP5qoTw3cibuSFrzpimn7FXP2SNLzDhgDDoRj6fasDDnJSFvLh",
  "key7": "4yoHXizvFtQjsnHsQhsWqfwVQkJD5sr5HQdn4kXd5vLdYfYF2BjGeDJzeS1eNnLUyMrt7EdfrmQQyQ5owF2GryGy",
  "key8": "4ewSQf89YiZkSUVNZR8aeyb9DeDBHbwKQRKpoQDL4cF7ze7LhbnFYHUBNMKjNsUV1JCtaX9rshFk1GMjFPF16tyg",
  "key9": "4tR7ctpJQUM87GJqAZEBwXezW1ytamcYUKZXj3KBzwP6dBgSLew21yAWPDfx8H1YoFoJTpbkqfoMuQMbcn6dbM29",
  "key10": "3JtQ77UVmm6kQ3hAVwyVB8bcc1QPeRoNQBzFqVzRCcp6AwtbTEh2V9P39RJ8om8UCtn3TmJZRdNtUze5x5GogB2S",
  "key11": "2bFSbAYTJvFDUjrLVDgvBcnoWvysEvXhdEhahHKXnBwWpY3NecVuppySwP3LcC2b84WTpNTw6K39oxvPaiuBNmbh",
  "key12": "58Ef2TiXmLHLT5p9W3XG6moA7urFZp4NmqCwm22hZAg3wdZxey6cCoecDcj8E1daSor6jrsJgiDhhqpGzFXpLzti",
  "key13": "kvegQXo2mCiT5MgP3eovQzgcvLEyi1JwUPEw25VBEbpmTxHHMhh2o9JkxF8vrhT6sE28Na5YWMUKT4VeCkDCcVw",
  "key14": "28ETLPyzYwnyNEbUeyx1wQtKbmwJZhqwsxKER8S67xycxqUAnz1KbiKKu8541YAqH1MBoba4KvqLWpLnc89CnqnU",
  "key15": "5oLXXm7hYFeLweW7CVrRw394ZY5T8DrnWBcSq2AJ2hW5qFN4R9akJxXGa3zKKstUi4h9XVPUrm3xcQbHmNT2Ruqq",
  "key16": "xzX9wDJ7gErcxU7EPqUiD1tQSa9UJnxBuyu1FGXTHUqYo5GhyAGNA4X4frk3DzmqNry31vZG3whM7UHMuZJ5wWn",
  "key17": "4vyiFTHGL523vVJmg8bXBcVUWQbQqvR1doDqmiqzjaz1qHK65PyAkKt7q5iticprvq8GpbQvn4oNknpDZxjK3qeP",
  "key18": "sn1LXuoQfMjZ8kvCS5HKeHtdLLgieU3YgfHdfayU6yKw5aEjP86fqqAAYmQYey7xXeqgTBX8Nc8UKWM3nR6yDu4",
  "key19": "5kJUYsUn4JgzkXwpi9ddJkrTQ4RLRRgVgD77xC79QWqxJxZqjE6SrumxH9iSd84KDWHWsaeowhfSNu5UUbSLxjdf",
  "key20": "2t1nequRMVSFFd8BwKYakN2G6nt2KyBVh5sDjAPFntRrAJAspEW5j6nXiwvPF7bHFPnHKDXHDe36GL6oBGgqcwm3",
  "key21": "5skKcMtc9ynrsvy58cQh5EGvvxLmvwaUWNCNg2UsjF8ndCJ8JgKc2QjYerayMnjExZWqpMpZzJf6eAnmLpQ22TNN",
  "key22": "1ASCeQSV5UCu5hpZGzZmofmVzpCw5Q2ZcpqtsFgNJvhZGpXmsrAxfyF9hsYmnwP9nc4F93y3Pb7AEXmfuy1THAQ",
  "key23": "4U9PngFNiY1SQiVQNnogCFzQsLrZ8hZ5LqgftpeYfJwBtDye7StHb6MSHJ3hUVpXkt8id9TQffgHjnyzq6DaMsUk",
  "key24": "9FgXzpRbwE5D3ENhDmAL2Mke5tVUh8ThJ5hnMqLDp58N3oLZtDpedDgLNgvp6Sj2RcafJzmjM2yaW9fJEaaDCyr",
  "key25": "3iYHsWfEG4vwhBqJi6RqyyH7epcT5weUPoNgswX87Q1rGLfQVnyS5wW41ZUNMq1Us6rsX35SBriib4T5zPHP1HY2",
  "key26": "ZNBUpSwDckQqirahWZ8MKP6LpvA9omskHeMsdFFFAoU13Lt3zEwQ1twswDrABybdM8ZQXKrFmQKv8A3xXsSDxu8",
  "key27": "3A6GaAKPMHXE1gbgDqVJbDTG1RWhfhL69aMSW8bvdN7xAKqXftJVjiFmjcK5wNYd6TaVrS5JC5E1wT9KTHmectyC",
  "key28": "5LfS5kfvej15pYpnVDtUq4Ee9RVgYD7pEfLYiwoUdti1jy5j3xHWRXFTPFuwaiXbNmUVMVAhwmyRbak5GNqBeCZB",
  "key29": "mvdqarUnP7AbKh6P3iHHD9PG8cs1fSGrfLEsuMDepEu1HtzpYntkxeY7vkH7ytpVe3m78ZHRRS4c4KEqUFrqeP4",
  "key30": "2dNskbHx5oQrPFwGcHDa59sw6dJd95oJePbEqqHLuKpkA3eboD3qJXws1h16A6UbpcNzyZUZNbV1ce3A8SHRurAe",
  "key31": "24EHKkGSjYt3cdrUgHUpTWSLBCH2ivyJMwRSnRu9d9Cs1gpZE8yXRYSMUaWAo4JaK1PrH1nAfxgogb8oYzuikpUy"
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
