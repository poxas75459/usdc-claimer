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
    "rUVv6xsmcYo1NnZtUUv2A2m5gY5fzhxuRiBqZ2Smv7iHxVxagHtrF1T4jZAnb7cmU19LQjhxmfz2dCJSbK3xciy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CjeEEwHvV8kHyfWjbxnBSLNMT5arRbp7bWJaL3m5CegSZ4bvR6eEPAaDkhBw1rLzxZm2meR5K5WQyXJZU1H9HD4",
  "key1": "482JMxAZiBnL9pFn4k96dNbykT9YHfx9Mw5yNUsHk7vJLwgMFjpXaBt9fRG3tUJkhp71F5rifjFDME2njCJFQCt8",
  "key2": "48MhF56oVWcc5aVySMuYAyYd9MJZ9JppANgorvrD6ombHAtsp2hRADbK8ZWoWKmNxWhirNYrc6GpdcpLshQTRBdQ",
  "key3": "3V24aRPWqVBwcjaHjXh85xzJyL2C2qtXT6xAbNaSz33wHNpgsDofBu8hJDjwWmUt3VF4sHDJ6zLCeDUHhtcT3EzE",
  "key4": "2bQwyCDqwjRq4riapELRnSmaarGYVr1dtLsiY648g9wZ6kLg6fR62xGzc1ajmwp71WSYee2FCeugECWo5r2Ku3Xc",
  "key5": "3L62rwiVUY4RzQJi1wEXbQePq9v2qBhUbdoekP5gDyKdcdY6qxWbeL5iRBLfFpE45PsojhuYPXdDjvuAbzSVX3q2",
  "key6": "5b27vwUiq4G2vYMGKii5hufXSkqBbjVFeQRfY6Dknibycgeb4k1Cv4f7Xi5PxuaYobtbViBD53qRZCYVeBAYommW",
  "key7": "3GsJ97K7XgxfVb4WCRMcFiLxJxT9ZRkLwrx83eZX5Pe3GNtcTTVmo2A2BiE8cyWRyZmnz6FiSp8QLR8rMq8pS13Q",
  "key8": "26eMf2q1iDzz2ncHhT4DwzuLNmALdS8qk8v43px3FVk99LogtyA7GWPrK7XnSHqJshF4xrDxyU5czDz1YVEbiZGQ",
  "key9": "4EwtBR9eKTyZz1dKVyxBaFhg6JCxkzcfgjsUmBdb6wsf7EUmLjMrsseMXC14XxWLE63dcwVtr6MeNQqeWoVUq3Da",
  "key10": "nmA5BPqHcX1RoXoYrDUAkkpaF4VEZNHH91NnHBr682HQFpF2Y2vwc6dBd8UY72FD9BBprb3TJb1tL731NZsPF3s",
  "key11": "5MA9SHPudH6C1Fa3H2N6z3hUqk6jEExCbDox7XbgRWMASnerESMxwZjU5b8S3tZgWw3Dfd3VTQTrRbrwsd6CWtd9",
  "key12": "3aiHQTYEp2eTr5GEKHrkQXaoS1LQLs26XWn3Fug6Pq8sRUBbQhestXb2p34cWpY5Ur4d1hi19Bt5caHdnKnprU1H",
  "key13": "27RDL53KUKmVEZT9PmBAqi92ZQ7KqaSKJk33LDoWcF9dGfaBW6i3iDMg24ociigYJh5UfMZ7D3QqQYKJsJFadzW6",
  "key14": "SS1sWMpJhV5wZs1RExnduoFCFU94UZUoMuERFcCRwrfPXLTJ2wTUZTbF96qSyQGuQbT1NyXARyD6iLUGc4WYQLt",
  "key15": "52yMXT3aYNZnAasL5hHXDxzfXFRqhKeoc7HN5QBgX2dMn1ExXZGayus6ykcMdRbvDw7KBAq2HjG4ZvyrFqG3dssr",
  "key16": "5CgR9wUCigS6F91cmYtPCL9y1cUtEx7b3NxcbPuvmnEMLSgcufoaABpjGQWSAtRsP8DJLTaCtNiHjo9xybSGeD4c",
  "key17": "D5xPwA2hCM8aThvm3Cfwm27xm3pb1R9j96X1Wo9SAXNCPq9qoRVpuiAUvDJYhgnRYVsCmN11dNhNFfHBbabhUoG",
  "key18": "465gW5ZPZUSrZHDXcZ1yeHg2AAovKEb7gxNbJuRY4pvChK5KfDDi8c8hsj41JzSus741EdnHQeR1qWPmwstMMP62",
  "key19": "3DmSdsE9XfMzW2T7d8tsd4E3VZu1RhxShFMTYU4PVH7qzJVB7V2RprNzcXKagqHHDjSdfF4TKGa6v8iEUaJxigEx",
  "key20": "3akEtji1VsuWnSfprcbt6Xu9PsmppgeSuE4YRaWz9PFzXsFyYGbdEWDL2bTRwjw9eJSNZMKcKmqatJjCsFuBYaZo",
  "key21": "5v9rLBAkLirp9CYZPXaQqnDwVz4sx8rJNBQGqavEjay4MVMb4QBgw1bPHHTKNQekichP1CU8trZehXtnWF9C8U8S",
  "key22": "2zapYPMwXUezzpbha7n54DCUFAiQqHN3KmE8m3KxKWWhS51onhaTStBR1vmWfK18tQR2yjDmHcf3NmUnqkuXRLju",
  "key23": "3r8EVsS7CtDsb2DS41LyyvFxnWfFQgFYwXCeMUp1m3BpnssDwX7yidns9TJcJVF6j7Azayadwqk3GztPcXF5ZpYF",
  "key24": "2yixCHZ6TbkYySJysdCfVCj9CXvk6vqc8mjGtFkvNVm4BcDGNxna2ENfvGjh4S5ozkWBGdwJ7BgMARVu4f6a2ye9",
  "key25": "4UhB2sqGvHQnaKQ3eTyqiwZ8eNNVM9HCXcU3WBUZCHxTS13tH9FFqhuzdF7WD6xdQVR3fhAW162nNEaDzPtT3U5K",
  "key26": "52YxF8imQ5hxPeB5RPTEMUDjNwKY21K6aoPq1gaUJ4qxfHGWpmdrkpW5QjD4zJoDWBeEST9hxZE39H5F1C9rwdP5",
  "key27": "56U93WAue4W8xZ7rregrzZUshnwe8vvDmuv8HvvTTBQyyJGqm7YzzVRCBoB15BRabynpgdSGTg6ZhuwTEaDdtT8D",
  "key28": "4xRxo3U5AkJBZHQbUXRY1StfkbMxj5D1aAdq29uD7ANZmFR3VB4V16mAHwckq75LU9LPS24GLSbwiTityhnP5geL",
  "key29": "2THxVKwCxHxj6otSqhzci9KHXBb1xxSYMHrpYUGEKLnQiDMSR8chTc8yCsoYyQbjq1tyGk4frn6svoMk41MJu6gg",
  "key30": "3gX6VwxeZZM8qnjvGTuSWYFFLU2fRfzL8qhnWkH6Mmwjjf2G2LFoB3xVvkYbo6uHU6FpdGUD2xmMwHEVYHy61Jna",
  "key31": "5Vi8aRG3uJymywwg6XCcK3L79BB6uFykCFGw9dEPhyqpXc61c3o1CfiVedvpfynTfMyAtD5jbetaQWCELRL6S9cy",
  "key32": "nkBqk3xU53Ggmeat33YoJhirtdjckz5378MQeKX7nVgVJ3apeA8PBRVJZJFGsDgEmiJPnZ6nkq7NVggiPAcEF6d",
  "key33": "49nMFq7d1Cs5m9qDKUjiPBU7B4fptpNbhdpqLyBsBgRASndh6vLQGVZq88Zu5jg51qHMYbGimqgeeFwwgKNoL6pP",
  "key34": "4JVX8T3vZSYuuSLGKTmginM4JhgV5FhNE9JRJ6wSL17dJzR23s3P3opVokpfomcmeuq1BxntQgLmrXJSn5huuVnb",
  "key35": "5qd7z7mJrpFbpPSyZ99fqDDcUKvKeo7EwDBYcjwotEQFiU7Jsr7yP4pLf2fhnVYBeHHUbwf6xeRNEfd4p5PKpyeo",
  "key36": "4LhEV9X6e8YmUVkB393LyTNmRPpZsV23x9933Ug95XCDaVFhDSJpLBQqw58dYnZg9Z53bmFKjCRLQjxv7gknK6bZ",
  "key37": "4p8xcVHAzLC4P2gqW4ejTjt3HFJoPr4jP8mt5xnjMdWnkExwhb8vYUNZz8vpg3upUte1vDoQFo47Cs4n8u4QivnU",
  "key38": "3B1mpzqnpyFfP9B6KuBbR15g7ZtiRHaoDFhouHH6kPzEg6c3WRi71Mw7TiLJGNxVatAdpSK3p3hNyn6oyujc4sDE"
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
