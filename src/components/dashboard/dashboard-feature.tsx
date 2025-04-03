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
    "bKNZjKvZ7Vh2CLcNjvujHo5YPHpQG6UFBhNKc5X7gtFJxXTLm1nZkzeWKBinLNaenaMGP9jRVUX19AmiKDC1QVB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C5ZF2gJZheYSBPmichNbQh5476oU29v1DDQ49TLqcLzQrPYQWexGnLppSiR7Dv8KFC7DvT9eVjHRttfvWM31mhc",
  "key1": "4g5PZFY4HRb6KtZpRLfK9u6A5YPK1oiVexv41n4XdiCEXk7Mtp6ZvmdWkBtxwkSVSeAyH82eZ5hZohqgV4jNJZFW",
  "key2": "5GCyH2Kyp6LNu9Kcu3yVZ92wJvyyuiySCTZH9BFLZGQjCXihohNYt69TdJVei4oZdk5Jyd1Nk5AQYkRaKzmS2urB",
  "key3": "2pascGJx4kG5ERjcMjhdiyctZ2KQFRFZmqP4inxrsJGRqLeMnPd7drEBesxEfCsEyVdmMMPfyByVJXVz7ES3uep3",
  "key4": "2TxBBg2wM3Q4WBKvY44U3k2gUANgGKg8tgbyKBSFcgAF2V3aMmXNmem69ihFsxTFqtERS8xLoiQJLPoEE671c8QQ",
  "key5": "3qMkBQwymKViGrvHkNpbMxPF3k2oK5TWeRJjZXcHgnH7iaWa1Yd8sX9gnKRryU31MLScjPPcr73qH4GwWCLynkvY",
  "key6": "7RiYbQ9D8cMTx5ZhpsawJXTee5ffYSzzNbuK9vG1pbVz3qcfRYXUk2FCEkFAPmQqYrXFGwRHPzskorWVQGjX69a",
  "key7": "5dFMegBcupqHBPmb7RRykdKvxE4HcZdfpeUDycijbgqtksfSvtcuGGn5iddXwwYzXnSVqSV5WU8GuYh1ZuEh6Ajj",
  "key8": "3AXGBP9qWQ95fQd7sMRhVpNov51YFeAhwLnwjFaQMoXqS9pwRoCmCmprUHxFRe9tNNBY3ZG1gXBFns5tx7X7WxKZ",
  "key9": "2zVG9bvzXQZcmki8REgKxhWtM2X7eWEbTV2k2GLAyeqEXkBXS5QAZ7juyLDNXKuE3TmxftPVeMxanuJLRqEKfZYu",
  "key10": "3NtDRwbmTVKYUadtMG8MM83xXuQz9XUgsD5AkKdKbXGvuGgKAdgFEfhL1QpP6scmoiYzBtGWLywpHPsESeduR3Ch",
  "key11": "3CSU6r3VhLRtXrEk6jsLgB8sLTFDy2V2EM3TvR9KC9vHpwWKkGzZ7sY7MwrheGznvaB1sc4eVtdgYgKKFciCY6Jv",
  "key12": "4J7akNezN5UHGpFV6MFJw1rfvEJh8M25NMzFnDc2sh7KFjqvaVyMzjvxcevQ8RUFd691SikEbSw6S7uZJjmDk6NW",
  "key13": "4n2cztnrUWc67PbTwY47THwFAioLGWeNqCnLuz7zvnEYuxb72aZmwN1ePRLXJmWzo85AE5pBxCHzaQZA29JWZH2L",
  "key14": "4fndMe2bioWw71NZueeVhwJSdffkBpbqXSxTNdvsFFRec1gUNjPUJsemhs88xeNJdMzJXtrQd9RkNK3oT74iDEFS",
  "key15": "4BKRTzDb2PL4Gh7gHj9kF3TwuVwB1Bn9GbUK87veeHxvc8BEgCZrsFojs4Rmnzfn3pVs4v6F1BbctFCjSftACrYu",
  "key16": "3PNg7A9k8BGymDe2xBtGBY2KXsqurCtoGbYEM7adij3Lrq9tH9BceCoehomqJpqPJ8gF57GQneuruMv9aV6NvdA5",
  "key17": "AgLNVtBwvSDj7jZ38nuJXfMmuYKoTo3c3XmCcVZXKdrg4RY3VWsFV4Rq4RNMVBtEaRy18ToKGoQ2fs9RTXa7Ndf",
  "key18": "2gzUTKkHRFwuoHPHvhXL7zy9DgaXiojEcr9N99PGKN5vKPq6nfceQ5pxm9teYUuPhk2HCpTthu6QEWthS1hrZAgS",
  "key19": "2dxekR39zo6GkxT5njKjzQJR2q2wqgmXnVgNFYdDGYYd5YqKQq2LncAHK5ZbCsxsAYsZZdrTheMSDtSu2yB5RYbz",
  "key20": "598Au9zDY2tC4v3wqPVKjfMaPHUpwYKzq4qLYRtQ75TVDpW6JvigapjAfWjiXM4xGgHrALbbngocs675A59ZcNFW",
  "key21": "336V7B9Yo3ZKHQNrvWgRNrJQ9YjFzAS7r65sWnK1xHtmxpr8EniTWzdcsZu9JsGfECrdQiDayd3RcTbD6BUcHNDK",
  "key22": "qTeiAocYgvNgi68FfRzJ2fgStguZg9DvLGCtz1nN7fzwheEPHwiXUmqe3NeH2C651hRJCfQjKi9v4oakpPezN84",
  "key23": "3tufTyvLWvpX5moiQbhQ5Nrxan9T6Zaf6FzYw4PJ4WGMi85tQoaGNP9EggXwTkLC8cv7xEwyhsWcxzVvZu7Twp2K",
  "key24": "xBTCyhtR1wFR1B3fprh3js3uraACW9zzi4S773m1W4HM8n1gJ7rP67frZeNQHjNA4UbzLDy5ZzJ2pUMgkZiGy6Z",
  "key25": "5A16L9WX1hpZF8yijUnNNGGk2dPRiAaHDpumk3yBwjPtq7RnPSTdNqgvB8i75Uawbw1WsiUgKWSSoJewkj89qfao",
  "key26": "3CLw9pUTgqusxQVxEtckvk1jYjdjvw771Xe4fvhpgNqmCWmhhsqd59tAEf7XbkWv4qp5w7MBgxUd7jGqsjWGce8q"
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
