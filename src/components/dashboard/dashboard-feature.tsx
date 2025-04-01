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
    "qQWyKiYCGKgQdSBMuAtXtQ4pCzAAnNLSR93b6PmRSHZ8PEJ8qpUtaLnshDfSoHpMs5Vv3TpQ9VWgJnmUpBFBQ1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f9oeWUp7i7EvttWpSEM3bnz79xQPajtHUscnLX5cSTkxJB6QkRqTsHxfEMdhFcBMWeEs767x5FymPAW2aqqZqrJ",
  "key1": "2Er4wvcwD4pQwnqtBYfHnSskuFCMQy6EgGNmWFuLXZStCNRbvGY9wWH8AaLxpwogpuzGTMqFtWMBxwBopxTdNLSc",
  "key2": "679GxrXwRZnZEcGFgfjjMqU6VC6AEdDCAJe1MmvGWyB9t3HT5dpmtG81BmDTXS23Jvp3cxsmbCRQjKJPYb2cLYXR",
  "key3": "2rLMTP7zA53HdCyjdDLx3RUs93JifA2i4GS78Jniy4PaXkUzVigcRBPPvvuD3Gnc6TL9HcneB7uqMKPe6XUxFjgG",
  "key4": "56iMMCRzGY7VABM6xN9LBPBtcV2q9MJmCKA4MneHikJscmntkF9mhqKvLAtDoG5EaxFFriH9iidwYAHgCNjANBHk",
  "key5": "5u2z6ckUUBacBqmRuaeGLfDqctvaTeiSqM6mLnV2RYcgZpaqqdVvYDPGRM4ok8XvsVL2F9McSDfugmycky5UonbN",
  "key6": "2n3w8KdQdygcHV3rvqjND9pYB4fVvLYVvh7K3jQztsyqsQacskmELH5xFTpxjbB1RLezrx53qU9ZZM25rZcWYAuN",
  "key7": "3Ycb62UtNoTtZ22BgBKAgKh8vDoGhfmMZNrL47HM492oAcmaUcLd3kvLuXPDeqzAsLKc8gQNDYL5NaEQeL9Xkiw8",
  "key8": "2jqShzFUWhfshrfuddH4wFvUmdeKDsxbR7G7am6UULdwXiErNYZYKtxWJVV9X2iJZoY6v7krkKeqFzYv2u2cLe67",
  "key9": "3j9qkFUhWgTXqmiv3BZy9YL1wcTVDTZabChqAFXJFsQyRijycijRMcmp7X37UBQfxmxoYCRa65Lm54MRKouf2mtB",
  "key10": "63GhwY3oprZQNDREy26VqcC2GLU9gj13TkXjD8MQwMNZfQoaNGqR5nDkNM7sjYu6EubKM3FC83MS8dz6vx4sirq1",
  "key11": "EbJDcZBvWNgWbUYLz558hSTCHcRyJ49PzzbPExiGSUDV6qNLYAqH7s7r6GzaZEm5i8zXBdVtz9X3ekFjvh6P6BC",
  "key12": "3uXQZWHTLDEQdA4fbSM2MunpAwbVYZXeLTKujRtuYkbkAv2DtGZgiNdRrrAf62dDD6JcgzYdBBWLmGaHGXWAefoQ",
  "key13": "4REBAk7ezAdwp9yVALnjATzZGP6emFTHaFRw3UXpyrTdbxpcuN8y7PeAYQUzpYNH8UYwmVc4Exc7AExdE5LyZKGe",
  "key14": "5XEutHSM3YE6i399mvXNFwkbgaB66aawCLwqAH3FwhGKidrumz48Fw33M3cWvmw1k3k7AAWySUnsfsd1p5vJSo3E",
  "key15": "5aKDd5vpb54oxvJZosn7CbVER5LcnPXBq8ba2RgGvq9cfYXj7BP4PNJVd1UB6EXuPTfupieNZhJnfzE2GdjXQzYJ",
  "key16": "4Ut1yLcv2qztvTJaFE8tdm2k31SihrANdbZkJGaEgmgd3UDDmE9uSrnvBHMbQox7pCWWEfCHm48kLD61Q1VdvLD8",
  "key17": "5GUvLq6JW3Fk9o9T8xfHwBKa2zycKhn4tEUrb2wXXySnPqayyYgStcKERomfPCqXcFc2V6nFUDiBWrn56vThuCfH",
  "key18": "5jJsy23gJAjujtv5vugQmWrTxZGpDrtJ3rqwA2mvX4vJH5vHLWZsWDK494RJbdqSsKXGUctoM9TR9f7DxH5F68Ws",
  "key19": "2NVzqEJ5dkjceby9KuyumZ3ZvnJc7fJvBNFMBN5ZXjcJsMbGcVa4axZe8NGH7UAr37h79e7TEAYsQ2mCeg2gehHF",
  "key20": "3DSgmr9yXghjkwfo8ULtrG9terH65vXqNCAS72GjXLPC7EJovEqqPGYKLnCzUMhqv99ubAvjo6yBYw91AQsUboZ7",
  "key21": "65nuQGvXLMkHTP7m5tPwsLYU4FTCBFtsA7QvsrTmbKJuS3JuMEaXEwr2xt9n78gZFzNA9GbQsHhAqkCDDozyKFWS",
  "key22": "3cBUsxNT5m8LEWSySQPVLZo7HQw86VnfuxDn42cCrFv4VhXTwujQG7Dti57gjpUqAMuyVoGKbW268Jr1n3kGdmNE",
  "key23": "49B8j5g5XPn3MQhLBfaxvWiQQtBVQ4yLE6riuiv76RnsGqABBs4292U6NdXY9qNzawyYreKihFrxzBNf7YKNKqaT",
  "key24": "22di3YtNupwXNrzWphfsf3TSgSzgaCRHiqzLVaQq1DcDW8fYWaGeUQgLQqQTtUSQto5haXoPq1aL2mqHaQe4r2Fm",
  "key25": "3htpTJNqHfBT3XPJAJhi34Y8E5Gg7NktaDWDdANQL1j1mzVrJVyXBtYvuJzWwTuk5pjuzzjsDWKSgqmhDdEnJQZx",
  "key26": "3nArf9CmpAe5ezmPNSnfMEAbpXPnQTErintZAL87h41dW93wVMWuYUYm35mpdKDAevePvKFR93NdCrBGR8CsxSFc",
  "key27": "4BLEegL7tNNkQkdr1sZJmVzag2kRKwNex94TAXR4NWc6XuUDGzEAdgVzSfsr3WSEH62pHdb4JhuwGSUwajK4NRNb",
  "key28": "5Ud9a2sWybxk4aEkpVnUKDGpkzXM7sLDELrxV2zZYrHXHa8zB4mkEseJSTdqjmeE8Z7WzdqsRM9Qst6kSKsfywTA",
  "key29": "SHMPE2YSyU2H7CU3Du8AzdrkpZkD4XKb1QUi2kFcz27Tjb7zoxaRXrQW9VnWZ5vqDTVEh5sXC3phWhYo74dduuq",
  "key30": "4E1biX3cV1pUPVrK7f7YRyapELUvdLFGYpwRkUERaA9Ki24yZs7PrXS9vDdCnif2ksQECqzWNzJZeZxkYq6emjLZ",
  "key31": "2Z6aLcxN8d1EoHuvkCqywFeASmGiiJ8Bx6MRUkfwNTxDoseSTCuCW7QsUAMeV6M79BE7f6e4qjcEdeAX2wxD5MaG",
  "key32": "5zyc2Q2ioQcGUUF9YTMEYP3PNapTCRrQn5ME4Kh5nuz1Ud1Wsf792Lk5ggkkk7iLxFyXgEu5Hwq5GXfZERvDTNx3",
  "key33": "2m5Pv9ApHqmiNoN9hDn2oGXn9eRPdqPx4G1c5mbTEXnz3JN3eKkfumTLa7kSac73AWEM4wpsKfesZDJFgV4UAEDF",
  "key34": "31FQPr4Q9Yvui9pE94zAUjxggVyPN2WTGMSqM7R77MbsQXkrftaUSVzdTAWvSZZRpDq1ZfKLCXHHUkXYksNhGGfb",
  "key35": "3brwqusXzWmQpCswPsHuSRAW9numi1BDdepjWY6qk7YhWt9b8aTAinjANRmLV4WitR3S7WbmpVjyPGL1KNfNcSsY",
  "key36": "4gQav48aeXwt6riZ2MiA9howgmpfsyktSkzxqwRfGrfnZEKuzj7xbumduURsSqiK3FasyVNpeU9okwTCBosLfQVC",
  "key37": "48es4Ntk1vLNHE19SN4VNSm8HUVY89FjoPxnPKiooG9WxsWKNdQgBARAbiEzucbYXBVGYS81rGMB5LtwEjnHs8QA",
  "key38": "KVcpbcwdMKqwBdN3ENvgXRVzQw48SKgpUQxzi4J4uBs2aPbe7CixPbBN3EZVxp6X4QbB2c3MyJT7Mb6C8vZo5dk",
  "key39": "2Tk4ZHmNFspM3QKWTVSA5m6rjvAb5oc5uf7Hqo5mhGEUUivUk57SuT32DpRp6WX9qjEQ8X1U4CHmy6CYBPmCuASC",
  "key40": "3M7YoNKMVxuPwLM8FfXFAq3txMJduWTeM8xM3USBVw1YT2SbnKXnmDoNtEABvSCEuBSZLKZwEzbhRAV7WPMC7Yhc",
  "key41": "VjnnVGs4vUi33XThztHWqcNse5ttBnM6sJtjTyFW6WAn4ZqJJAiiFDQDPE9FismQUVWkCUaR5o7fDCo6dpKgpK8",
  "key42": "29KExeJ8Xi598ynYaKJYq7ghGZJcoPt85R7ELi2M3AynWPU648nzqeAbM6pZzQ8PiVDw2U6KqhJXjJ7wt9Bd5oKt",
  "key43": "3qyfkzRojbQnYJECCJC8iujZss3ZqxFMdAJZv4cDk63VSqegHT6SQpbFbqyZ6mkw14f9gYKq7niF5m8RtAGJ4KJ5",
  "key44": "otqNzmz4GGgxCKC5u6MGwVX3Qhz4X5xuoTkpL5XEBjfm2PUeKgU67gJCLrtpJ9LxiPYBqP3zZwAJSH4wWmmgMk3",
  "key45": "64xfaApBKp6sqFrvs9AdVqeiPFNAV6SrUwgtkgaWp6Sh8cR2QJuZNWg4gRS4nxj9JMmMq3G87kyXSCFogtmnZ62W"
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
