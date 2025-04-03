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
    "4BzvWxMwERMF33pUtLTBgUmrbant5DK5551S4dfC297PZ9TWM5dFDMdCLwVV1eDLwgHJKwahSY3eJdag5xhXEpU4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63emvCJByYrTWdU4UbdWLxunNwwNr3EwvSotyUtrSx8s9Wgz6TMtJF8q7qfMtyPbyRRNJJj1FZE16Fh1ZfdRXThp",
  "key1": "4sRByjZFinss1JyhQN8zNu1c6TNRQb2qb16PH9Fd8pbXtSTZQLgiER5fJT1TRs8pP7acuLQM45zaJEwnNHqqNSRQ",
  "key2": "2ScDgm2XrDgb3k1urh1acEQ5e1NsWwdjtnvAStdEu7uUvJre9dQBke8vfzuBxGFDrpYpzGYCpJoVy9dcKVes8YF5",
  "key3": "5Gh7zMUFFynsAH9or9fNUANy7iRG4tGFDKzsW2SHsYDEK1Ua4VEPwfQ3sop6m9ukeg3B17kjTfZQbE8gujvFn9A8",
  "key4": "zuG4k6U1E65mAX6VvCa2skrXvHy2jXepqtMwXu43bVynF27BrhxztCZdPeGyP25N1So7cXUVcjJeodgco52W8Tt",
  "key5": "wKqGicPXAUmdzYyu5hqA73xp76pB1gnp1pPs9QCCSnFWwupdQYMDfise6BEjWiQgbTpjpYaT4JUB4AfQsaina44",
  "key6": "4BaM2N1QGNmFrwcfXXRVXsT8iD7BN1yrj2fopnJMAJUZotx4NH8Zcm5qD7R88w8U2WAtiq1aq5Kwtb7MhKaThH48",
  "key7": "fCTHYTZu3e4rujpf4KmS3236wMEBs7CGHvbAkP7kBAQjGwhHR3Xut9nncGH7jyogtXgoiwHwiLaT5JoCgJxhJ4P",
  "key8": "41JnzgyBB3GJ22TkPDngcRpB7Qi6nUZjcsghzYo83uZtvjoJknpRHqyAFoqAmrNTTrTA15MeWHMMJxrGKBzT5RS9",
  "key9": "5VN1TN7KUeWLptJoAMePmgCRsE5tqtATdpJLu6yFiHjTQa3LyyKKY2cmUU4jrPssuz1nwbQuij19Bf69aCesoyH7",
  "key10": "4sw4dgDP8gBBP7fXSPo1ajsMGavDeKgs1nNYgYyELzFd9CWMwh67fcUvrRP9uVApjYVEzfvVuX6NMvv6XdWpRwF2",
  "key11": "3QmYW6v8G6y8caef2YNPRq9m6q21RMPs8ZnPXXsWbuhVNBvwQxuPUUv4FCd2AhSZmhaF7MEB3H2y82ymVX7i5e7Z",
  "key12": "4rYCBLEZswqLExEo6uLiFksUG7tcHLNmN63jVTppWbDhDcvHRbNPK8sSBk6f98xLZnKw4aZq2uwHLgPqggeFxqUA",
  "key13": "r6tqzNrTZMMXKd8WU19acXCBupziVRsrYXiyP832kM9hxqd75uTQMuUys7z6qhGwYMVSx4m5J8dZj13vVc9xVFT",
  "key14": "YyU5ne3ER4X2nFYMmLBj9byDgZeGufoiBVSEWthRUAzXCmLzTV4JieYkJsWzWLrQWWyi3FTniP3z4wjzVFhUzB1",
  "key15": "2pzvvJ9m5tkuEr9rj2Nq33F2CS8S1TQzGcTc9keQdes1p8t1stC3ySHDeWAbBPyTxEwaQUAJq1sWwLutztJ4xdMT",
  "key16": "27KVjYAbGxXodbUwqbYu7rPLToP6KSGiByjp1P8bXjaeQxw9WK3jZmHQMX9AacpH5rQ6k2WXWek2w84AfFL7k6jv",
  "key17": "51i7isdywF9CzfHY3iuiqYAauNgQEwBVhTaQZzmMnDjr9h1bZoD3BM2LeMxTmHbQJpQ7Yh7fEBLyi8tQwwvrD7NR",
  "key18": "5hC5kd4wN33tSLti98RBp2FnGQxCy1LMRr4pDBzfBCxT8KgHHUqqtK2Vr1CEizL7PGaksRCo9LxHc2puzaLMv9Ff",
  "key19": "aqamR3rD548pDKnzt1HCN3sM3NQCCzxssQ7AL3XrEd8dMxBZjiRVVbfFTvnRPVbBxBoV8w8e5r9BfwKTsmtqZqD",
  "key20": "7XSeVDVKGrMQn8qLUCeTL6A5a5Y6TcSsVFDKeHiMNLEEj5yryfSGS8ejtsyxYjkGbMxUoJfdMK1Qyjgc2Zz8cRJ",
  "key21": "4WDFyWr5LHhHn9HBLsfjLjZ4ZQpzFncwon8BwNcdnK81UZHEd8ZLV8Ds3qvFXBrAP2pgob6M8jjbZmxqZZbWBxeb",
  "key22": "2eR7wuacTvZzYKXwc8EFpyT1VUtvRiBqiPQx7htYagX2J1BrTsJhoiv75J58m1PSUHTTUKkCJ1cuN4YnzKB8L1fP",
  "key23": "5uocf9ThNuR5BRQo1xDYgNPqeGPrzi4r6pRPgczwNoDrazmwgdPR4MrRQCH9nQcK6yvxDjYWW6fBzC9qEmEgCN9G",
  "key24": "cPqWhModYsPQnxJtHEGseYubzsTRJmDZVXWRwmNzJRjyVwh8YLioMVGjErtFTShLnfMTspvmjdkhHSx2TZg2UQw",
  "key25": "4iDEM69WQCnoRersh63UKs3cE5xp7VfJawR2ZR1w6bUSAxes3rVPeXHy7zRNt9gZTPTHbAa9NBL84hgtPFfhSZe9",
  "key26": "4LbxBTcrkUiRUDCvniKVF2uNoCE1wMdZJErLCjB3D883ngogZm5aFd21yoSgm87FTqTogKD7yro4j9vEwemmpZTx",
  "key27": "2NweMiqvdqD6R6ocYmuxV6YUdodqwzMxPXPRdkUr4aDVyeZHvyRDSeQrQRqychFr3xgsTquQ9rfLt1ozfjpq7wp6",
  "key28": "4DxEXbcS4roP6zStBoCuhUSNXw5DE2FrjE9Bb4gNbNGUUEWmmZwRKr74LYkwY9hhcJ9wMx5sdfj3SwT2tmFpdtJR",
  "key29": "4ZuJTXCyP69KcSQsrdVmotjuQkMhwb72LVV8jCEerBihozHraBTRGf6V8v6XwoDFQVJEqj1nZ8NwrVkvtSRgiNp",
  "key30": "29cmDkCmRxVdniXG2avY8Ay1SCZeMTmifn8fsihqASUu16WpfXoWnBs7Kf4bFV9erufUgrN29EATxLrRiQ4Pf2ra",
  "key31": "4oyjNeUHcve1DrBuNn4F82b9opM2TDDUtCUTgKANnQuVR9HDn3Zd5G18ueBvGhiT1srnisPrve6WyUn6kye72Ju8",
  "key32": "Ka8LycPQ4pV2j2XkD4HjQzTZ7h9nPcT7vSxDTHoVHRXNPHWaDwBB4y5RMZtS8caRcECFYpYdtFSfYadgS6qCSwe",
  "key33": "GSa7VtwycavWDvMLk4MyaqKokLxfC1PiuF2TRNBWAQaYpCfw7K9H3G67b87GHy3bxPGh1n3SSsYbVF8zJGxJbLA",
  "key34": "5WMyqkGNWoWvFdXDvWCMLMgEgposKC32YRoDQuFjUcFVgrZCRtRsDS8HDCwJBnX5Bjpx8C7c57Y7B7cLwP1pZgu2",
  "key35": "4mpuy5SBa5NwrKKUEbz9Y9BSkUuyMbHf6Xeraue9BoM9gpFGkxTHwGyu779yS5mQB2UvVAPdujZ5k72UuC4U4fXx",
  "key36": "4dcrDZvk2CsUwSSM8FyBCsj7RsZnEqPCtGdfeGsmmzvW8fqPED1jwpdHFNxUsr72WWQaeAUGk7mDhEmp9FgJ6rfH",
  "key37": "5Yyncih4ihrfHZWnJd533yJHmxsr57WnK34N1cV2KM6EBS6YeRSGa1ws6mH7pQNwk7VUwnZqMS1mJnb5wMbAnF93",
  "key38": "gmaAYLukFoW3U3tS9TZBoV67evDQK4FX4qhu8Xg6f269fAzNPgWGCgFJaeuxBZw366xva4RnFZbiuL9vy1JmLTV",
  "key39": "2Y9oyrcAqgnBmZKMacCHmqkWfnxpjHn8P2oUgvTAs9U7ZJ6vkRyrJir2nY7VypTtwKXbmKLY4zX659C6J2oaieuG",
  "key40": "3PNFqFQqDeouWxFM5e7q9M1pHUNfWLMRB7ia8k9Bhnq4DQS1gcqDmrfW1qREczphSZgh2yaz4kLQip9Mp97TUiBq"
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
