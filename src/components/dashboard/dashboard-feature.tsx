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
    "2A1WGE7fBrQ1h1nTyqQWdExpW9YcaQDJjcsDLJpjzdyriHKkWkBK8EPaGBjGwURXVgS8aLnieos7qJeA2DX8vf52"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vnmGh6JrJZsxcN2vzAcFAf3yDibdahGGanoDu4oN5mhYppgwUWfLKV6JuiTVpLkC2CAaUxuFymJVycZT8GzzmRy",
  "key1": "sPA6U46wrDmiHzXU8aKLGkJLJJCTmWBUwXs2v5VauPLDgzLhmWG2NWYXogGh2RQHenPW18sKt6UXwASp68U2TyX",
  "key2": "23zXNHS3BfSzCaxJgdA5nXohSJSdbuiR7WNzfeu9g2F7B8g4M2R6pYsJo3rA9c5YWAvd2t1X6C3tnAD1MRHs7JHH",
  "key3": "5KzcBfAjuJ6gYvpmWaDVfLzFbiUP8khiQbVjjUDAKwvurqrZ5kZihuX4iRkcxMeQfHkUKLpvdSLcSUZNwfLS9gRn",
  "key4": "WfotaRkazGxK67bDj3CMbtJFgPvAHdMW8pc48GhpehgbWp5ZE7h9WqdaGeX67HgsgYEHSH5yhdSMsbqB4NGgZdc",
  "key5": "idXZP2VxDPXM3nrd3YGz9ZshYViDQtr641XQLFcsrBPHAFszq6DPgG9Lb57Yd17r8cHiadsMM7RrVhMQcLcW4ki",
  "key6": "5ABuzEAkoWbiZmgxch7AE9Bi8M5y95dSp5XujUqYccATEVZXvWVvRT8JgpjCQskMbpQrSfqkuCuPLSpMTyfyuDNU",
  "key7": "59yMMEeU5bzEBDbPjro5N1zUaNx8XJitPYNd9Up7m1pPH3cimqc2z51FahJoTf3kuHu1R7EGJwWy9u9BdMFQoHfR",
  "key8": "3oj6wrwZQvNiwNS5uWN82RRL68RsR1evA3cuoG8z9HjsnDP67vhy2svQnGhVrLCfdTbEQSotnrBLQaGcY1Cgu5Ej",
  "key9": "62x6CEPUaYC9PcK2QK8R1rvU3MuH1aEZZPH5ZXHKNgXF38FmWu9tewt3BKX5iAWLYzM6G1qAbct4xjm5DFvJbL44",
  "key10": "4RWPKsghZQ9Sv5cqUU353YCYX7RLNsPVhrZUoMju1yUghBv9MugbNzewVEK8o62MQxB1dDCBkS1RaygbYiPyKmEt",
  "key11": "1AMrdKN8M5fhjdNjCwGX5tFo5p8Ru6CV57L4Le8bo1DF6yTExsNqfgwLZEX8TzWLGsYrDTyrSe4Ux6cc5H4uP78",
  "key12": "5ezmBDoMPm2qk5rhW3gzWbkQarCCMjWMjYS1PNoWwYqAVKwkA28w7YZi9t9HcqWrW9ewu5jW21p1gdhKh46fTMWS",
  "key13": "2MZCW9mrAHXT21A5BQ923bcUiX5pRNx2rDynQRgoFg9STtTxAoxNYp82EBo4KYRz9cNGtvexkash4FSxFS8rwWDM",
  "key14": "2Uw9pC4Q6PXRHgohg2MCBHF243ViPsQNVhpv3CBYX9VwYR5AznVuZ5tg6abg7RR9rXPZgcL4rKXqqRYZNMBW3FG7",
  "key15": "3L7qyeso2QctvYjepcSEXaShxpkz9UN8BoEj4vzLs3uh8BuLBrM9uDiwJvzxcsUUv5TPxfx6F3HpNHW8rmvvG4yk",
  "key16": "4vGKKg9XUQxao6rKi5oRe33ta58eAtTcsMFRbGLd58ZfZeJmu1m1KuC6UKfhHjdHBw3KcHbPzjzAjzZPCsmVC5VF",
  "key17": "4jENm79qpyVD1LTzYsfmTps5JRaLYKh6bkLUr77drh5G7c3CT1jpVs4Pbfd7U2w53smpRgY89RDK62bmLQ2yM2zk",
  "key18": "5XBNBiJk8mPtsDa3vZrRL4HzCVUXnCRPBqAwBXSth1XZCqWGGBHLuA8KBT1PSFqHun4FHJyHb7sNubVFX7mUeJAG",
  "key19": "3zGPHzntoGsZxsPAteuiaj1L7ywNdMStThcNT4M41ppzQYeacMNSk4nEzkeesKGTwQvrx38CkUUp6UvWyNEio1ho",
  "key20": "Ru3Fk6rWnp65w79yYnBgRC9gqWh7JeYhQ4i9qX1GtQMVrpwFxYmMnnMoPxzSH98eBUQJLQ2B1bTLMbNZc6Xpusg",
  "key21": "2H7gEfrcLKYebvqEBct7TBqrCrmvkzHtpQLNzwbBBcZeCkiYgZHVUTwjAQ4uRxQaiiRQ9iV7XRBgRGxaUHmB92sW",
  "key22": "2BdSKea7VkNtQ6tys3MtWSkVYhxeA4WvEUYywJ48cpoffdWUNu9abqAqd4P5B9gcvHoRiRkWi6jAt7wbDFShzGW3",
  "key23": "2Ho5amqKXGrWB75EdKXWi3TssMWABHoHpPYLKyseRd1bPWxhmmrGq6wX3vf4dJFDKBdaBRFhYBPkgrgaoGQvoMu7",
  "key24": "5D7LY7x3obMv2vT9KGRtU3uAhNBPvFbdFHYopi5MjAQuHVgAiuLw57N9JddGByL59VpqrNNR9eAWuqmCUxGwUVkx",
  "key25": "AquLyhk6Qm7micF8dm7c7JwAnf2s926Hj7oWsHVpDSnRvTepm8ebmGaWzmjbvW8UVhJdR1MGeHLtqiafojjjzT2",
  "key26": "49hhke391Qb2FrDKMMvpnWevJfjvMArEryT2GEnyJGMdMokqDe5vgPXVT8Yfbz6x1w8oehZp8gVEzW4FxfC8Xynz",
  "key27": "2GM7HuVKv1cNpiaVtNroYQRYbQRppLqBvv7dewxKzrSAjiHob16Hu9ejUntNVnpAHiG6MoPcyZFXkAGFLddDecMR",
  "key28": "5Wf8WJrjQYUJDsFFNFeSR73KNEBorRVBFVWHoQov1BhkSW142ox1PWqpdd1UaEUWCRfbmLvhrdLargHQeV7vvK4p",
  "key29": "5FfhxVUAGbJbiCWCEBaWw56mZAC3WJMBHvkVy4oevDbzgqhs1EPSKUQexoXYVVMctioYLvvG8qMteXJWmdkaNGZf",
  "key30": "5uwj6MqxcsnU1ckT7YbhUr6oXHNeGqdb2hWcZJH1sDuzMFK7DfRCaJvqioqxidwUi43eEQ4XLzHvNDPz4hpjMFS3",
  "key31": "5XbV7Sow3r7BwDcHz9kvbZ7i3Qqa4Ldfky8ihDHTw1rG9JBBCPkAvhbA7vSewLHyBY4Txh6vZqa6kdGbq6J5jbWU",
  "key32": "kkerA6bWzAqpTPvfNuDRWD73d4Kvin1AvqYTfS8r8U8Hpgd2KgWCV9dQVkQzDStznomedXn7LcoqgZZwQSEY99Q"
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
