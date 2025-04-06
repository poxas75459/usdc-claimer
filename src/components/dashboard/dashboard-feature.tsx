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
    "62W6SrN5zKT5hezvQitJWuc3apw7cMWvLT82LnAzgWGPPucMvWRusKPfCpSvVXxmApswcNLocYxEENP2m71kr5KC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MbK26ENaijSFyKwartvwrWT5v2oLf61i2VsLCCDdxNEYC8LSnDLz2nLvG4awXPJAjx9YBga2hHRuPTMjkGFGJyP",
  "key1": "5GiAiY7gDCkbSae5Y8wiZgA6TXRRkcqxVDaz3Eao7htXN8caobhe3vwkXwFkPsCGyodi7NR8VGSgPkwtckxGKNDx",
  "key2": "5WTqBng9oDbNCBQLiNzcuHsrpNeENZ2aTjWwpkHAh9UesYhwjuHZQzEJAdyzt7WsSfHHzxJXrGagSmjgocLxvpHC",
  "key3": "5gb4Cux9Mpb18ctrsNRiFb4RV5AqfndqpxKsL76ETMKgsW2FURwGPHDALH4K3kJYPQ8AwwCmNVwFWaABsLMRCdQF",
  "key4": "5KSHALg9QBuuYZ812yNw4RASSy3V4pBPcqZBfieFpsRdnoJxhts3iWxnKJprDFznCnLxgTtZ8mMe6okxL1pmvn1Y",
  "key5": "5A25EbfVfK4xyywpwXTdbzzB9TxP6JVmNuqMeF7c417aRtHD3cWPCkNW4SDftr2xnkqzKZPHhJvLX3Bm66EQ16Bv",
  "key6": "5THDDzLStKjRVkWbmz7vm3hupJwiVrUxbTwiAh26tYraA83Pc9kLQuZ5R4qLLxUXtscuM3kwYbBR8WjxvYfMsWz",
  "key7": "FP65YEd8XWF97Z7Uz1GyJrgn35rmZHtm9z95WdmkoMq6Ufd7qhc6RU5D3Birug4BRs3PiBpu4WDz4QseFSM6CuS",
  "key8": "2yWg8Ewvobv3ZfgrjfZneSq3mpnMho3iE4jauwogu49Qc13Fq5LS5AWhtD4peLm4WiwKuhUCyBdWXxfWcQartB7C",
  "key9": "2VTn7vRmBeZ1uVzajEyuhU2ZMagYn1BQ8V5BnD9vW4W2dEMKyWeLCnwXCMB4eHWRRkNt3ZQsH1uJvtELEDoQdStw",
  "key10": "3kTy7PrgRVyWrkNja9HXZjvkGvHQAZpdzq6WKyBqPstnyLp12Fm8BUE8878wRor7JKtBaN2bE3YBhBK1nmavyEY8",
  "key11": "4ciXdqxzTrdeo9w18BWghoCr4eejZ3oxDUnw3KDkfrh5U8wxdnHhy1x4GDVKFDQ9t2vTTGmyfqQ5dTzpe84APhVi",
  "key12": "3yjfTdZqqt1aoqEE5bt9RaMSRZ5FYtDWWWhuDwvFQzJVv8h41eiyLAAViNidL4TzMLctLqHcVj6sKujmRyygRABY",
  "key13": "3r6CV6vFQ5xGZnsBqPHoWAJd8JvLrCmZmLtbfXqJQ1SDhCdiiYd2ia217Rs4goCKbLRsWRV8bFDqfFKFFzQviTbN",
  "key14": "orJc1KZEDeXatEJmhRKppgrZnyKBwd4XTkrLxD1zgFnhing4LKGEqbyX9YM8uqihXcjcRmsZLeckwRRSWnEN1qS",
  "key15": "2nSLr4FfqGv8zvnY54R52vx5WHCxuwsKWwMGxoPfqkxZBCnEtrdQWLK3qsEjck7djZJjsvpVcYNHihWWFUCuno5s",
  "key16": "4WcoZ9gkG849e6KqtoNXKmxp5BmUnUg4AfaEV9i8GX32LTUdwMbhgiJEWJBwLwKEM2WcCrNnTfvEkCGsCWJGJApZ",
  "key17": "Ep6S66zBj8ZuWVq8GjAFn24VWfRUWqreG94bvVU8xUWiyCpJqXar8aZz9Fv2CjHKcuVuVsETKQ7xMJYZ89fkwsc",
  "key18": "3zuf8KQN82k175WFFZkNoHorNFE1SJVvPrTZaECLMX3CybxcvVsW5WbTWLonvQgaxCQfE1uucLiZqpuwdPuqzJJ3",
  "key19": "4GHdsNBS4SAYaANqkmKnWK8vaXnF7avVv1TXkhFCHZG6jR1EB65Yh3PfZEhXgT9TorHG5mM6u9yDxB4yXvhtb3r1",
  "key20": "3L2hWRA76odKyXN1wzsHHByQLJ7zBqquYb43jBDXsaBRFy7JsbLVhUPJ1V1xCTUAQGeHSREBdWr3q6fybanuEtD3",
  "key21": "2obk74HuBDTnGqtpWg8TkvtAYW1R8GzRWvMKyWERdegt3TkVVi2qdEFaE6nDqqKVCp1kitPvx1zgeoMbHfgStFUY",
  "key22": "3BJfCtg6MFfEmgV14U7jTw98c7GNQmg4q6hj1EC7uDHGGwNEijKxxDdHobuZn15WdQC5KksEfyDLnBLyFwUPxfxg",
  "key23": "3ccCH4CGQRUxwqR4ZG3izuoVagWRc44FeMX3YUUuZY3noJKU15QU2EwDixfTj3u7dbG1W2SxbmXaafN2pQps97wR",
  "key24": "2Dv5T2brfNKtu3buhTE6qrrmSRK7oermsjETMJG5ga2NLiTTFvzg3kfXRVK1PnALDcE8z3H9NaAHtBDuops1TFSG",
  "key25": "VuBQME9hNrfDoRfnYtdgYeFvWbLv5TMu4MdRLuF3hWuG9k9ZppNnY7k1MQFJzXnkxdPbfaN1t6DFN8DTZwaPwUq",
  "key26": "3AQRaPNAMn2HkXH6ay8i7TT7fLzmQiABt7oAYpM7TB7FPZq1XTfcoNaWmhpeXVJUipQ4a121ctuD3TDmZhXtcuNw",
  "key27": "3R7gjoR7BguuqskVa4x5RGtxYpGk6FgwPp1n5ZrTwH3JY5eAuRFJWQiYhs6HJamav55D2ZCEL5znQ5wN5VeS41Cy",
  "key28": "49JMVyvVzZMFFts8vvQd8svBtARnf3ia2rVQJfgBSxEXAag8KGALXhe1npsgN2A1gd9au3yuhh4KgJme2W794sEV",
  "key29": "4hEvXZ84PChZE2NXPgbZ8D1JYTtqzerqCN6dvizeKJQmC6nRMQUQSur7xXDDHr6tUczq7SCAn9MLdAVGykw8CDMs",
  "key30": "3a1VfahZ17DeBkMqE9Jj4NR9x5Mza41Djm27Q3S7pNyhztkpXcAiHGKZpf8jFU8AcSEgr4Q2c9Zec75ynsku6v48",
  "key31": "4qstFyYUHMNSseYsJzYWYfLa1rWPXtwgo8Qw62saPrvXQ93fo9MrH4skL649W7b9VxtmQ5GLvqvJ6RTChGcN3Mph",
  "key32": "3EonKjb4qqfkd6nUYEhBaVEVMsRwNeVdvxLtxNYfP7bZ6B74cfUP23fVWmsGx2t7vXix6SKyfNEDmajRjwyrHDoB",
  "key33": "m3m8hoKVSN9DK6ZQoLzYWkh3NqPdQnY6gatSKdSwiMtyapqrcMkMnqArxo2z9CMqZR7Mi9J2v1wMjm2Nok7wAV1",
  "key34": "5EYoWp7SemJCNbDqWCqLuXdsNvWDJW9BbUQ8N9tDfReU7tibd3aYKwZ1TSYKfMgASvz9Suwzz3cyKQYDNnEzRAjh",
  "key35": "4hhkDReVhXusv61a6bCw8Jfn997T1io3LmeYmJyzCjL6VsmfFP8c2boPUAaUNFUvyC8DB5MtNE8Ni5rNc5t9S2jh",
  "key36": "3yntaSMBS1QyC6vcqQTRMPCRPB7K7uDW6zUQwTTVKpugKQnDR9fPm13zX1HYEUqhUYkwF5PTc9qGqnrw6Zc3jgqc",
  "key37": "5ETxvBQ1ugFzN5kW7E1ehNM1KG1PqaUFPsLZQdRKr7vHHQYRkQv42FKuuNH1kBrFcSVVj6Uf1EKDuJQN7TpaczWd"
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
