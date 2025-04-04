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
    "4L7egebVfgFQtLLZQ1R3jkn9sD29E7gzY7WVkxxyKP8Mskxt1TrwnugBkvt5tHEBVwc9Xt3PJqiX94vS3KZ7JPa1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3te9VPs5PdUkVysyFubdMugwm63WDfaTi69WFz4pzs8E3h5rrJB1tC1r5TGcYe9ifHqVjzLKHnFYSCCFCMHZohQM",
  "key1": "45TKWAv4uq96P5iQVkBNNhgT1aYsdmzRYFxW1ghGT77bVPqzcM49hfaPWNiW8EGa4fXb6B4eHVKTEBF6meKPh6Bu",
  "key2": "2Hoq1gveyKbwBViPHg4Rw3ZqdzPPLuC1UscvLdgyURGVbS5xGweqyZv7LsuwCxZ8b75FTj9ouhyPYwvwoakPh8qa",
  "key3": "5xFN4pkHdFuD6UEWuWVGtGSx311Zs1oKvdMtefQbjA1dFFNdaGHGSz6h8cGXx1XsByYzfwVaN6ZmmjQ9ShXM8pHh",
  "key4": "5ip86cXcVDP7GT4eJZNBr4peRkBWYQHa8xs9BwtUAAsWvy4QVTi5YSznakUgDie1UiiGHKjDuxgpLeuS3F3Jjp6q",
  "key5": "c1rsJ87aVgmgRqKTcz1eJt8zL637svCrSqxgDqb324wgdQutN6KkKB31TV9W1wmKbcSMYkjkdqXsZ3ynp8UYL4x",
  "key6": "4M9dqjNtCDUvgvKwcc478qoZq7MwwFpv9S4cFvVsEJmACvVQD5xvGGT2HGd3SzoaHQQQ2HN7K95zdzR4Hxm5YWSC",
  "key7": "5BeFydhhQUaMsEFyG7H4ppTner7YSBdZpWdyXZRZoKKBYbCfBNPRHeRbd7WVHWEGhKHPVSJpthTvsmmPMLaehScv",
  "key8": "tJYEBdud2TqWzSzbbgQMSsDPVrHZMcqaS18yE3tQEYJmjFbnoFGdJimcnhMpCsxrrd36jnwqZnyWqpfSEKoXS6E",
  "key9": "5Yy1vqxdPq6gZv684GbMYnsVr6Y14zeSHvY2oCS93SekCvS3SZEbmjxw1FJoM1THZqHbm4xp9ayySXznjoBFzgND",
  "key10": "57wAi8PmyhmUt2TdjdrgCugw5vJjSc4yFtax6Up9jqRHWNt5ZS9vpwsyt7iksrUDgcvBe1xc5RPU35Ceemdu4EFN",
  "key11": "3o5bN11rsYpyfT8XcBqqjCB9YEn7n8BTA15NKLize3PSTvPn8FuvK26h5ApkE1Jo6rFGxK28AsQRpKLex6VK8q63",
  "key12": "3UL5YaaMkXbtBW3osCQ17CEaSXpVbuitxFhXWFgWspkMoi6Y5pzbr7GvZmdpdfjBRxrZaZk9EY1QPmaX9WAmKzjc",
  "key13": "2HSo95Hk443wpwAvfqFrf3BKRYRt62Cj5UNijWNRRGvudpiEtUsZRokL3a89YYYtj2vgjY469oJtG5mMu4AkkspQ",
  "key14": "53RSkkGTo3kCU3Pz7Ff3Fcm6Mepyy9WsqCAcb8bdijzyvSGa2Hg8Nuv2WB59Ai4mbdXQE9XFXjvPDiAJNNSA6vej",
  "key15": "2vvF6U6Kr3WYScch5Si5B3jv18BE97NfeQcBdzS1zjWnnoYg4a9gxHN7X8mV6LUds7QjYwXr3JfQKuehkXCUKV3J",
  "key16": "jLzDvrtZGg2ZRA54zimjugUSF8assKnPLmdMesdFsVBxcUeJe7Exz6kXDEbJ8y9hymbfT466x7vMdX2NUptGAeb",
  "key17": "3N9ETnRUTKsCwVgZR7mrPVuaPLkW5uHrZL8P4tjsCSKMig9h9b8S6LGSiit44sQ27k6sxrYEdZvE5u6k8FwysbMD",
  "key18": "3mCmy1HVvpGytxrPZk5sPge8JWuEXB3vEYRyEgRUT6nKnfLBBK8hooawisq1i1wuQVrwhSWJfvhbBwm5haspPMVn",
  "key19": "2UPFEKgxLTP9nQ6Yi13jjc9s9HFfHR29AZZYkLGYXkxjNhkAb8RkuWcewBNm3ri5Qda9xYT54HfPsje1pTdae9dj",
  "key20": "4jRjqjVBv15eXrDGN1MCqrrP4fPdNe6objoZLLNfJTR4iGLquQ5Zok7ERzNYFN6xcZBr2UFdBxB3VY6fgSuTirTm",
  "key21": "42jMMCtbt8hxLJFzyoqjHYHe4HSwC55CpxuCG56GuQ688Lyhy1CeYhHPsvjfbSKhmnSr1QbmzNFogdn7NARoPFtW",
  "key22": "3Sn36gqDsLvGgUGc79Qcgv28j6VRifBH5HsLQpxWn9hw2S6eMmdF99mJMKmm1WScCim5xcMi5PTKArPrrq1rmYs3",
  "key23": "BQJVK7LkhK75qsfxkc5RadSDk8FAZqop2cWRthfqbDUNib6QkYUXQieBUmiQHnD1bXi6isNPbLKGef9MZuY3nQS",
  "key24": "65o6M12MYQieevhNpCRRAxd7K4EhYVkUKrm91MGWJ4QLp9axuWr7dsAVx7rTkKWeZ9umjZ6qxQpAFJGxTtov55Ex",
  "key25": "hfAGMTXh1H3GTpZFxD1rGmHWTSc2FPAaYBmp3PtgQBzUDZuLXNfhYNDPatgfJnW1FHjrPS6gpj25kYnEFq1Cho4",
  "key26": "wwqFjRxGTQsU7zLSW5fkaXWYQhDrb8nefMNuZedPWMhgGXdf8u1WQAJy5gb3h1HpFSajkCqkbBQuLBB28aMwBQC",
  "key27": "VNW37dtYqwR4mJZNAyg2aD6dPi7b9tFAnpZjTZWkjAtrWmTDRZUWADAaASENWfF7DodRftzyXkXYtZYqLvF8mG5",
  "key28": "4UTBJdBUvzMaY2qrFyekyKB8LAT7t97XRYodmvWz6TgZXqH75fo8gmtzGK344p4mNifKs27W2ijcZ4dV8qNupdcN",
  "key29": "48tkMGvsixauufoMLfLUJb41EJuhAYAgXWT5gfW9nrx4GcVT6gdyLA4D4Ko5ES6dTeRn86PiQY68GG9yzdPs9CUP",
  "key30": "3x4SS7924gYeyf7sc254T8U7aaDRf68o2izLuHEvGmAwUQD4fztv4uDjcUwYQanuguQzHg6GbLPPXhUeBE1UCkX9",
  "key31": "2WyomNHYzAdM2fLQEF12r4Nrx7NSKuGx18QLGB2jJ6HpFvx4p6obqKGhiXmeiqPs3RpuB8f43G4Ho1Z1aYfFo5X8",
  "key32": "31NmgMTUGMKG53NfDx21QsXMmF4vNciwXCNbZM4nujr4bebMF6yJ2fS3Yba4tHgRjCEnZbRYS2WRkgm68WffS65e",
  "key33": "63LoZuu6pYCMSkLXsr1AvwNLqjdNz6MNqHrarMJ31shD2bgTSH4UkiMXxWMVvQxwJmhwZ6mPyzR52D9r2xPHK5SV"
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
