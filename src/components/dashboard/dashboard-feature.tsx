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
    "h6KgePJ3LDNdJaN6ir3gmZkn7y2jss7r2RMBxUxapskhwN5b3vn1YKMvjzF3Bunn1RpKW22dN1f4wvrT6v5sDj6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44AR8uJ1fGmUDnQjDEvXhvUhpZeR5tJHEkMNRF1W1ZT2SKkqBK2NQUyvvUUYreqfwz78W1mvfsHscPiy3Nx3otBg",
  "key1": "5P5eHyfmUsGsESknuDDcRTQUq9QkYqAFjK2FNWNtyuvdwjmxmKSHhjtyXfvYT6zaYbxcGsv1nMTC3ZiAGpRstUuP",
  "key2": "4wFppjhuDhKoVi8Vca378dQ3kNwaZkqL4LU7JrtnVhNzaZE2w7emQ8afJncgqf7BwyXJ5oaMFjdW4xDf1CC9XbUu",
  "key3": "LnhLSDbUD2jG9WugLAhqdSa6LQoJAFajAbhmi4LJLdrDjGj58nUsAhcuGWDyFFAR2mkx9QEXUXKYP92y2pSCPVo",
  "key4": "4ts7CXdaMgsQLZZudBmnCVxoBbVQdQFS1oEBqjm3JMhX78A4y13qPF9iRcSfqxUtXeH4PzxrnWwkWAyQkK2KNu8S",
  "key5": "559Zp4ijV48miA7drZZUygk2NxcZUKxHxcgatP76SG1FqK9ZF1s4nL5hWJQQhWhgr89B4UKPXzZDnKAdPqcWEUpM",
  "key6": "3o2U7zJX4M3aCDbEgUPAYZbycBQkjRUiX8y7dkBJ6oyA33SeHTtc4yWiMX8BbVg7bcmmHLtfsMJAUQBHyDk8vCRU",
  "key7": "5Bi3hGZqJrVFGHc8ksK2rdmjPAhrK4oY3GgRbFsyUTUtgBHqcX2onHiPDjqEfT4Vdv6Ss9h6Y8rhoDX6AEY7o4xg",
  "key8": "4bhEFgGRQdGjahnQPeqyFfYHTqjKjtMsPb7ntbiX1JRFwi5Xs6ucEnT2o9aMawTAX2ZR6HqNd4n1hKfahZQ2azxT",
  "key9": "6VSA8BMAqjH4oTyGviDpeJ4qQfmj3UtZJiRk8J7ZPMjETcEZYHndmtHCdrnrvdHjdRbNFeRGuxH1kv1an3kuD67",
  "key10": "5VdHRiBDLrF8vrCFAQLwGmUVWjqtriYCyawyqm398LFJcUVncpuBRGy8NYMWmTFCh9sW22kDW1N8RNTUFTv7XGkg",
  "key11": "JHphofTQvJicWihPFRPwpB2Yye7tmRB96ZxBDtUch5fbBViKAwEK8hEP7svfUSv4b8hzWbyUsLwVNauHNcgxzCc",
  "key12": "GisFwZD9LaWmkuZhFBP6FkSWS451Ga9sq3C7ihdsaPhwpc7mzLPw458dpbyCNc91MAmJP2RC32KubEoZzJJHno4",
  "key13": "4JtaCBYDw4xHuA5fRiBtcuzVjrYqu2XrTxpxMGU8iCuQReZFDMJajrUdJn88XSPJbuv3a969WVvSrH2EonJCvezU",
  "key14": "4sEESSDxXBV6WHUe8dNG6qq4EtcxNNiCnNaTXgHnG9rTx1Lq4xhpyaCa8wRay4yy3SALt5qGxLMdJkJVGqheK5rp",
  "key15": "2V8HndfJ2cmdgkenus3GNpCBsEWrG2wyfmZH4ER3qko8SeNHBCVZJQV9K5yrPWGWFmh9qEsd8fSsCNTUTKtcv7j",
  "key16": "39ubwbLTxLRQgHek1QRBejHqZQxmRGo8vhAsBYuj25gLrhA8GwXmBgmq34or7sw144YAWjvgZwsw3aQr9QroQVZQ",
  "key17": "4KBg1g9xaU864f3hzZB1MED8E91Q9qUEhNBiupxTZK1Kcgw3ckfpYi9ix9YPrRtUzjqScveZtpuUrnDRBbbEbsjx",
  "key18": "2FxxUsiX7YPGhs5evoxMjrUZzovnvq1rdE4FEBdFDso4XaRm3y7bRNea2KJCn2wFwTTZWSTo8tR97VZtNLn8NDQZ",
  "key19": "4GXhsFqFLtN8aNamqEDrCtgZrXPiYERW2f3ZN6LznNYumd4SMP8rCKEFFqrV96xhLm1k7r6hk5yZKRVWuojaExZn",
  "key20": "oTLc3U2euRNcQ7Vft34ZcHAYLnNT1n6Hn4AAjTYGji5NDhsHYMbdrLG4DjnSgx9eU6rYr1dCYank88zFM9wZ84X",
  "key21": "3CsbgkVMcynLckDiPYMFsGTdaSmqmodz6XJ7GH8V8UyxCjnvkqWy2KNQMXr49P2EsaweZYiQ2eyGTgqUU7ish9Bg",
  "key22": "AA6x2k95MwSXziJpDb9Sp4iZx8XjnRQ7PuvzmacEVwDZuZLAb7ayLvg4wsi53bNxNWh75iFZ13tzBzaNgotSg2r",
  "key23": "46BXe5FH2j7QCkKjQe2VM8yqgR9RuJC1Mgu6MAaLzzoMMDnZGwnGyFN3WsN3VZ7zQFTgvdeYfAi2oETKcws2Ln4c",
  "key24": "4gNCYMEKtuukCv2W9mRznkthU6H5HrLbLRmMEaj2bxVwgMKp1ZBeZ6d44zjRd8t3647J3NhHH8wuSFPXvK1AD1s",
  "key25": "5Am4YFSvdHtQnD6KVMwGd4x2owSrGkneHMzPsrdKdinFY9NNaCVNdxrSk4JyApe6tmTMCvpYpJgpxS7Z8Tyt4ssS",
  "key26": "3tDrWaKGjdEdv1rdrcAD4TGU7VZnkupJ8EmB5aFajqCZcpiBWBCW23ZsvCLdhVbLLiFSjCexBNUrkAD7quqyL7Mj",
  "key27": "25qw4cZpJFZ5wDDL6kCvmWXwmrKDxYR7Ds5m2JGRhsm3934XRDBZwXy7KCzTKhePv4r8mVThWDbbVTgcQ5AGJHTy",
  "key28": "hZF1csnSmEf8iBfThGXGGDknHYeednmQzqAAtwD9aSTxRJf6E1NnhHDjgKWXVgA5rXiLNfeo3t1XxSJKHsBnwmh",
  "key29": "5hLDtVeBS2hLXLjQrinvgzVQw4eas86JfwGUJ1ZpbJzcMyFBtH1VKo4BtvsSTgMyfzM7oXt56jrjtmqDYMZGkQFh",
  "key30": "WeXG3eLqAsuSdGHGqr7rqUjN5YkLWg6tgkaDLrCTXqzG1ivAmJfSQMdis4Le3cp9pBizcAT621HpKjwiZskEMe1",
  "key31": "3LbSk4k7NmvnLSxjPPocEkCesD4UCn8ATFKF7Df6CvuffSkDfDP6dEi5yVpUKojwdikKDaoRijPWv5gLxomzk9Z6",
  "key32": "3YCf69kqdTNnhWisr6B84CknWvCkc8weaQdQGzJDrHtZzVUqXHnnCbkC6YfnCtWibpEmN22NkuFa4zLMEEaVeYRJ",
  "key33": "4UEMYAU4g3HFJfDpSZAbg7W2vMNqn4GTciyervnC4cqLAsqR4NMNZDJhg9wA7KfX8q9hcmW5nSDQGyt2sxTHTnsY",
  "key34": "4UQrNG3xH7pwprtW9TEAsjrPYG4D7mVqPtFB398rVkwjmaULXeBtYJKM86N8zzXczJxe4sJMzbcckdizPkiRjUZy",
  "key35": "wfH69U5fi1cJJ3NZ8nJtQ8JePUTJUfwYJxzd4dbyfbMcWQSavBH9caG1BYa2bMGWu8b2M1Vd22PCMhX5KoAbf42",
  "key36": "a6Zmv9rxbvMx7i57VqH3DUMLPc9ZAvZWuM6f8rXXqE68LJSUEvhA5y7zTpkDmfgRGNEymJMk6a1bmFskaV1DTE4",
  "key37": "2q9Amx1nrBr1ZPRQxaiQcKZRX3JoNZNvvYfi9WnYtBrB5Tq9mVRKiHbZcYCYCYiWZWyeuqYsc9GtKy1SeUgTtGYg",
  "key38": "5jcJZCyRQvGepgBQciNvMc8noUTauGYpQtyuakiyf7YXnC2o4AdVRgcKNABFFeRycTAHMrV9JpDy7cb7yLMZTsDA",
  "key39": "3KEfyVmQHRCawRcHyyrE93hHp1UgvzH2NFvmZQiCApuMxS26yCd1zKJtFYjDGSZoaCFsAQjwAfkYNnfW2RbN7sE3"
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
