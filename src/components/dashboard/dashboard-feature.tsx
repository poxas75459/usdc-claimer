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
    "pdSraH1cJKiprbNxGhb6Xy3VzWZcSM2dhQR2VrGZ2PZDi2cvV9g75hLRAMFbtDLLasKiju3jMa4QkZG43MEnVYd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fG9zuCfw3DEyTEphHjCoVYYTTZTfpcMkqDFWj8baYMMv1ruz36iL2VudTZAbc8PMNv8jUGFbsS8cPVFwvw4zLbd",
  "key1": "MeDKhUiatWHWaGa7K1R7aazTbnpiwKktKqzn3YMHiYW4WvpFEuhRX1s271ByUR9gxAuukm3Nk1aoS5EfgZv3vj7",
  "key2": "3JXJQ3dBUPiXXJvunAga9mu7U9bWhKh7RVmwCWqcM6KuH9mauxtyz9P6EYRzFLujiotkBGKEJ4ZE8EW957STQ6xt",
  "key3": "2FXLsQjVKx27b6hVnWiSn7n1MueiMPoXAFee2xWPodXMyrQ86GyDzB5N37nBSxkt2pADzoGyMvWNbv8hjWRYernA",
  "key4": "5krkLQrmv5zPKvph2ecwcDmQYr2s1VDUKRWNtthy3fdpbMLA3xJyBzekvYqcqRqFwAJxnDqpxpWscHaZYE6ia79z",
  "key5": "58wPp5wtF52aDv9X1bLfXMKJfhP14sjZhpqje7tuC8QJ4hBG6Td6tKuyEhfJ1BQjhbfCRCSh9QqCavMWX3men18e",
  "key6": "5jM1oRD8f2inEbcCjw89RL119NgNoFh69ErR6DthVUutB4zuHbyF1vJCaaEJmJkhrbxtor26CMiXEjMYQrmAQnbj",
  "key7": "2ykQoGo3kyZEYFeenpG52mGTbnmHy2SK7p6StFWfiiwVFwuytsAUNzc8eX5vdd3cPJfKhJ2rKRqYo5XZjXJWvziG",
  "key8": "47ZVQSWcQsqfwAa5Zeo9YmceBCKMULphe4PcpbaGNnbXSwvF6v27Lo1nMvgo7q7TWFt5asKk8CE6UimKxznRjWQS",
  "key9": "4pfULWvMpjBLNH7xb4c73b62is2xBsUsJbyjMbXXFPwAqXMbz1rdTuqjQWrkML6GFFqp5BjMu6kZJ34tfhwy5hgz",
  "key10": "5oihPhVP8stET6b6TXJgJeS2PKrA2k5oYTU19j46Uu7bW1osFysmwLVPeLK6q7L77qjqxFAmQcoDdxQf5rnarWqZ",
  "key11": "KJCJpgyh7yese1n5Hzy2ccWs2VQr6YbF2mFTywcPf9RqWSDHr9BE43Zitmt5Au384Lwh6UsRzA2jZ4oBtu9DSTP",
  "key12": "mNF14xwAzMcvsRzHcZVxfJS6a6z6zW6NEFtBdJjGsxG7Zdt1qNKhgXLysv9CzR6y5DhK87SfaJFboBaCFDaNimT",
  "key13": "2P6haVcPknQW3XTKaUmPG1xUTm3ivCCn7P7KGXKqjmmuSJG3kX3UjjwTjn9zdPRqfY97GazrPCGhHe9XFpRCqRwy",
  "key14": "4EFgcx9PJKhsAcP812JfeymUbavN7zMzEZWBeyDh9CZAeGwHGi3mzGYpRHD2Q1JAPHftVi12iMUeeNE8LC1FtdjU",
  "key15": "4dM5MsgM9HXu99rqG3UvCWM32ea5ZfUraACPe3pSBeDE6scup6Nyra5xQXVDh8VZkEGKDZHsnJByec4DNPFm99i6",
  "key16": "5C4RKRApZ8SAE7g4DaeXAhLksmBW2nj3HFBa11AEWKTzr8CXBXiLHz9QwFFKwd8U7J2TShb6UCPCHJTYAnCWLvXt",
  "key17": "4BAsV6wkUoGrnVUwmwQhHG19x5wh33QVgez5fFc2cziU8axB9MfCDDQJr5Wt4DKuDfS34jsF8tECMvA1DYHKzRV1",
  "key18": "61Gr8EEi5mSSaMNUexGhYUKdFi2R1cxdFrECQ9WJjv55L1Uiq3jCQtnF38Jrzi81o9rkMpS7x6ibQLqAxpXZCz9y",
  "key19": "3DrzviZjC2aEdW7DWhwE1ZZM6842MGq5cpJE3oUFJQ2MaNFBz4jbRrt8LpXehhqWhDmt7B4cGWU6QZKzmC4aGeoq",
  "key20": "5HDMjszuQ1XKXi7wgmENEPovUcfEARJswm8geN6oKcNCfHZrJEzEma87niZeB1ky2Krqj31vj1tGkUdxXGN59qb5",
  "key21": "QvnjcMMabQbSBgrTi2z4DwfWh8U17MeRdfy3sinmAaLpLnTqwTbsZpQeUh1hjxah1VqdNf6AV1dJDSwHt6DRDe5",
  "key22": "2dVKtNVgNByeFReJNsJeRwuEPaicLvVvRsEef2oGXJ1Mom1XrGEEZkiNyNVGoqEoRhjfJUyvCcTAVaqMNFVPssTa",
  "key23": "N9y7oSHjAzEsvuQw3n5MXRXexx5xwk11Cu665n73WtNQKdLujp71RddeJMjAZ4iPjZGxE3EyKvRJj9A6n4H3MAg",
  "key24": "4B59za3VZghkZCWavLeGbFvfTAtBtX1rtKsnfGhbhJReEfrAe63YsECawBU6A9PG1tjkPDRZcej45yHuXs21kk8c",
  "key25": "5qDft51Gnx9QHWL3QcxuJDTpt5oRTHJBFCjkW3wDUXpd1Cckf6bj8i735p4DogmHstiHVwxhaAp23YyZkexVhzWA",
  "key26": "2cNWcZv9b8gp2Vdek5GcMgMwxkFFj9amqtFSeFu8K25SPds2KnYKvKaCK8uvKBby9AftERivdXuRz3PyGc8GTxkg",
  "key27": "3QfqZj9oYxyrKxgAdCsRzc5Hi777CyA2AZCS4jMAFgYpaLH5LuLioWuzC7FsBgvBpurh1pKLGBMRkZ5UrjwH6mpr",
  "key28": "59do2Y7LPU25bzSvmWpQLTyQcQkyeuVeaNDwqvDJfs4YRzLDcgZWUs4RdM7WrQTrjYA3uPWgCwi9EAmGKEyTAm4E",
  "key29": "3WdEehY2fpDDSBSEhvoof5tSuk9DAsDPykoeZmcqzNFz35ajPhFQbDbsTWztxH4p8tQf8URY9huxvko65s2MKtA4",
  "key30": "242RfAgDQKvKKJG8xCkqBxAgqd73iXNZDtmokmbKy3t34LzqbBkX1ASp6VGFvjhdaqedpgw99KhymheEMNa4NsLT",
  "key31": "5AmwNBy8H1addph6ME172adyaWeBALJfujsGaeiqfXaARi1ZDd7D98oGxGZvURrWcKQdXfpBws5vcrApkvzvTr7Y",
  "key32": "63unJFCx7FxHBUxSeAMocSyyk91emV8UDfxq4icN589HYGw3uc5CtAqVHWj5iatJuq9ty8vykLQvY1GybLA94mue",
  "key33": "5UL4YLMe7hdxdSWAMemDv5TdtYRKBkBLMFXi1zgyUHaKbfjowaAo26cXZqvv5eBrttnyN9WAgHWQU5Ezt7jz3eip",
  "key34": "5ATsmKfSUAaG7uCc3MBtTptjMjNCnrRDxQY93YPrycuSKFPd8z31voNMRKaPrgenVQfhVCBKfXF4mqgV51EqUnLi",
  "key35": "44r6vVxpvGAjafJ9i96QsTH3kqBEWRrJoAycyQTaH3q8wFs6WVUjv3p8LLHZgmgNrERHcDr4jc5R8DvpdVF9wpG6",
  "key36": "dTbE1M34dc9aSroAuVXfcDpB64YLkrvzCXH9zHiBmBYsCQqpdjcEjjjMoCmEVSBcbffhmFSQMM2p7smeneT2Cqb",
  "key37": "48Diuo456HbKxGWNDTSmH96SnKHYjdJ91tfjxtw4rWcJnVGqv7UXrHpcaHQttmFXAo2QTk7zUrhH27GTgEuv3K7T",
  "key38": "4ynZKk7gucDCNHXmiof4HZhuMR7rLH1ATY1HppvXyUyMQPc8RX4NggmksNAdQhzaktMk6hT221dr21dbM9Rw7Wpz",
  "key39": "buPGsWkwR3xGz7bDdH7dTWqyUKDp8CcDZWxMZc7YJLtKVRSc19EbYC5Ct3vcDu2NeA1e6sBE4jkNdJD1kLFUPMH",
  "key40": "2DyvxRyttLXFbgHUCULRgWhc9muvnD5HHLeE1ACxbyLfzcGGXZDiPpRzDGMKPhQ8SoWqv4Mr6ew8p8x6eT5zDSLv",
  "key41": "2uXf6QjQKXLLNVuWbKL83Msjsmu39VNMWejGNd6ifzQNqwyMcY8rK3f9eRTobMEZbUwMKT7xJFbcKqCXwAxcPsXJ",
  "key42": "4t4Fs1DhhEVGtBqafPWHVbY7oMtGiVvc3qA6C1TFz4sAKjVC35mSqUwCgHGTC4NrUChihAxfouLWAix2f2trMFVY",
  "key43": "2SEMgTBkdR8aMtPbN8cVVyUmXSrWCzf9YeY4YfsiFbVWLMUn3UG2ETQCuMYnRwz4S3gso2FCa9C7o7Y9pWYsAqaE",
  "key44": "5yTFjpfXkfF25TYLNvqb2ynEnr91NJPVUhM64VXyzXXuf5aCaeQHWZziTLYz5au5vLhjjibGYiyLfGpjsaHHRakD",
  "key45": "5FhGttiwYPvQ6W3fKmJbSqT2Nf6eB5HNaUDcPcoBG52rNPidXeC9x9UQNhnFvxPCwUte8sYzBweEaF861N48nJEQ",
  "key46": "2bLpXbvpoqV2QqAeCHWKMrMpva9pAQq5V4vNBmMtitSUHTSdnBCsRWkDvV4WyEtdkjDmisVBQSk5GKMyuwRpQiiB",
  "key47": "3BPSHEDE9koStFzRFgxUHX3ixJBT6rogUCm15a6Lr6N98T4JPaHUGoJZHE2uitSgauRxFKTeetVfR8H8CStfxj29",
  "key48": "2sVQzuZkSUzRK7VkCE1v5NkUQAiknwhVQFb1mXv3vAA3CNjzuXwg7cR97UsAdkdMz3Z9cz5FSGmoLXzdUD2dYwG7"
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
