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
    "1QukpxcJHkzyrkRzVmwZSqZjUBv4iLUfrzU1TkRw2ZZxdjRuexcX7kqsSafJoNzUKzb4Hx7PTRwWrrPXNoz4qMF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rKx4C6qnq4wVpgLP16Se9cJMoms6cGQ8mDSmRmNjwvJCV8AkJjHDgcvL5tpd539LCBiVo2dSz7C9T1stxPbcNjw",
  "key1": "qWS3X2rrxTu4cxtrmV8UzrBjwRQByYeeKcSCrtM9oTe5ucTVs1pm156q71H5kAziKvr9vPQeSE9TPjxgMquhfh3",
  "key2": "4ZRWNJdu8ygLcuax4irZc792dPXKhKJ3d5tkWCXbDSTAnN6sDDkZRgtMh5uV3Z8VK5Z3eBtVyhxTAiKgMHdJVc7J",
  "key3": "2nMhSHecjDEzaXBjUY8P5BeF8AQpkaRQT7HZJZhiRoq6TLRxrnjZwMAqPcGxUBMH9yLkLzNK34RZA9CdZKMBHGic",
  "key4": "3kUs8mjrZ1wc5doa3FXw4Mgc5UcrHa1HE1xBS7tN5hqXGgYmLQSuLQrqswby97yn4KSxaC5kG5iHQX5CcWAFMncs",
  "key5": "zErMoodyNWgtiWt7sTo1gE37qsL7B4t1dHSk5yoXBWWJFx6YjqbMTxSdWTAYv9P6QN26LJXeQ5vp2Ka4hXGbG54",
  "key6": "2XL1zL3UUMvJN8GPVKg9BivpfAiFCPzkxwZRhF64AR6jFHRJb43KFWnKKFufZiWNopz7HWr9vhZALYywV2WssGoS",
  "key7": "2RTP3PdP6Pc3ZCAs3jyqGpEMdQMXrCkGVA1H3X5RJapDHvQAHKzXtXDSb6FkFVEUNExkZGHmZhujUsQUm4NpHT94",
  "key8": "18vPBYnr9fU8rTkW2TPXH35X7yLNGtrii8eGHpHUAjQ8LgimMpBboTx7RjzSWjVfYPTfzdcL15zs7vV9EJovVc7",
  "key9": "5Tw13DDhM5sjWC3y38kUUiJkNweKfAYGYt3V67E3yWshaePrQzxThLjCfPLzokjEgW48sW5bzwXp2ejMtsm2gfta",
  "key10": "56D68HCTGhhYWPSYSx9R5cXnmYFfbnrfJ99mh7TwaGqnY28rhLSTMYK9emr538pRRo6kU7wpxCc3ezEmgPdH9Aay",
  "key11": "5CComarDKhkbTZFGoeBAk8uCUg3F76toP1jcSbwCGHbdBE5BtjcamUWcebc6vibxhhYDoLkx8xqPJVBPeWyRXcg3",
  "key12": "3kQ2rJv3Lhr6sxjwkwCmSuaFkDu2dayZYeA9HfPnpq2x1uQncijBktQSaQuWTUUR6ZpusR4C19on8YB4w1XeJBRM",
  "key13": "5VSC7kTiiwpX2F25Rze526pPCXy4HCJTcbCg5RYnBvWBsuQzS6FcdNktyNKvGuqawJDG6kViZvJfpJUWuVd8pBEs",
  "key14": "9kEJcSYokFvs47DSKUn58SCvzuV9Xn8TikjQLqYhQe2zD7bFZRiqJBVKf7obBAWrJYhNWpE3wMqBFBfcDiZtk4C",
  "key15": "5t1uHLbdPjGQMgaT6guvPNmjhExoKMTNhaDQ9XaFbewsLS73iRXUuWeWhBa6YqQkxHWaEgn6LRfLPeHLih3g6ckp",
  "key16": "4friwnyMizZyKM3Q2uR6M5GrNqacTtvo7tmN5JnW6wxYdowaNuH2qSw17QCVNiEaAYXEZYCkf32sXa5AVnFPLMVo",
  "key17": "CPr8JmKzqLvdCeZLmZ8x3sWaezx9b224wUWT8xgKFcu7mVvMCqKzBh2LusLVU6GMw74wriJdp8UkZCx2e5tK9Nb",
  "key18": "66CTmmrdce3jDgQHh7CxDCFQW5ky95qXe3N9nBhxKndsZD8GQZG3CXxTawzSWduA9JcScHDbGkRNBnrULxaivx9T",
  "key19": "25YPGaSFKhsZY2epoK6rWDUo5vZLvEnoXqXQ1za5z6WWg8ezUCkCANujrfTPiw8zmgZPSB7o2BJscYziEP5yVBa8",
  "key20": "2DRHtmfbML7Trp1w9mdhEcTihBji3rVfW3qtV5UjEVrFfjfC4quxZAWizyqtUQFfwcEZq5NtH4GncXsnGquk7kR9",
  "key21": "3VnYX6C5aBdPFiq6nKa8qSxyHPgH9cZFadMvb4J47UNYGm5zDtJFAaMCNDbUHuta7NxZaCKGWRVcDjihQN6SJtZv",
  "key22": "5PMpWw3at4uKY7KVtFDC74kFhAELVRfQc8oxe327KPksDsZwQ431Xd2MpMJdBnKDWH4eztD2A7B6fMChGY3NG77A",
  "key23": "51bVKzXtKPfT6S8Vt6UhbD2iicr4kfJJSRekgBWgsmjoxNKjjCjT9Xwz6tHfcV1Kx2rAYa7KvtqE57ArgkhBhjkX",
  "key24": "yxRt9hcmu9aWjS6HVEND511eV4vHzwjHG9eprUZEoRHWCKrBDherNVcbejsYkNijTgz6n7aJdWP1oAk3AbBURsf",
  "key25": "4vEHzWvzUqQWgFMCVn7bYsCBTFZeyWBoMHwg4yyEiQ2U95yG8s8uFJvG7HLzQkS3o5Mm6NqDLzrnb2xAP5bX61RS",
  "key26": "5FBRVjoRdTbeuVau2JAUNbdvxymgvE4V77KHASs8AKckkF94emKYxqjnibrtxrejuaJovuPytrdcxs5SxSQEWqgG",
  "key27": "4xw96gE7R4yQYMZQEGHcAxJyueGzDy8o4z4vmqYJHpt9jyTRw2nJ1Df7tsJiQar51HK9mGPoAvsneDWYNFfzcpB2",
  "key28": "5SzpNsaZKHwxwTKZPy2D98GneFYJUrDpLDZieVT8qZHWF8BSQhn3tab33k7biUTjy1yfwG776B3osWf3yUcq7wVt",
  "key29": "4aZMJP3FW9EZiGpj9QRg2nduu2Zw5w2NU5SqDjSxTrWaJEYo9zHcNVYh57EkXYMdURoapn2gcsHeAL5VVpigPNXG",
  "key30": "4JBiTFr4RS9hymPxyVFNCGFeezt93XtyaKWeMeXcciGBq9vzWABdUAvj37Q6TWNwyHupzW6RCfWkHhjB9KgGcjLy",
  "key31": "3v12dHi3yXbgNVQwx8BUuamnTjkKbUbhnKVpLsSBHB9z8RphV4S5YtG5mwKyJPyYpk2v28XdsokaL47GDGQijiTb",
  "key32": "5zsJsKC68QUbpJnVDBdfFEqqyiiQsQ8vtFKbPxAnvxgvFRww8PdyEo9oV4z6QfQJpkxii9Zqi3XqELqowa5TeUM",
  "key33": "2g95SxShHjUnnCceFKjV6PqTFGhBYktdydPVqxeJxp7Q92EpCU4Vj7G8V6XQNL5iYv2ZoZZRHoszr16GPqiCg1rv",
  "key34": "4nsYwu5LnR4J3PtFvkWtaBBMrzNTzxqd6q9LXVS2E3goyKhESZZcssatLXEyTLRD8roukcR3SYqyDJrbyKY8K8Ya",
  "key35": "4kg1SfUa9fTsd6Gn6x3RDdKNH29cbt3w4tTHnuXLvvMqWKTLxMkJkVpTu8JX1yhK9uGTSZHep35Dpmwt8k7yNK2j",
  "key36": "3WykK1oMU9hKfByKiZnh2UNDfLQW3PxS6ot1AuUnFYNQmKJdtzQDns78s9u6xdhFXDG8FKFDsy43j5iCk53kKbEF",
  "key37": "3fhSVQP7cHNcPAjPTDKCVprQSJRuJuwfujPbTQFfg8ktQRqZBWLZXto2MCKqs2dNGxZq77zAjps5xvUe4aTgLQEz",
  "key38": "5b3p7irKEUKyNrZ5GCCEMXw5HGZCMLVHbv5jHn68JjucnQA4buEy9b32taqdRHvaZG7Yygwdkb7VD78cvtnrBa2L",
  "key39": "26P9r6hTLnrP3pTNGnMpvYWunF3XTUYFxeHPCbZQyen9JTC8HVz2SfaDj3uxha82WhMXvbvjE2HE1ViL4TGZFdRF"
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
