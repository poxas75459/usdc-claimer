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
    "54wkbUWAtaMd2Tvtc2QE1EQKKNPqRzDPwVYbfo4C3VYtqZGBhNVkFTfN9dBXUPz5oGdEPaB4mAU5tkKBG5YVewUU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34bVsKqYrE1tJ97adEhBoMReAsFvv1CMViE6MSW32RUQgb1tGYdiHU5wXHJLXwHbnqttRBtqRmKRAJCGxdYN9YR",
  "key1": "2nLyfFDpyJARqbCDMxLW9a5kM9VC1kS3APHMyoEcz6aFMUCqaMkPGd6WGkU91MAvz5K6mFUoY5ziwJGHcp4vZ7xC",
  "key2": "4kbcqLywPK7M9nT9yDnNvnhGZiKCKBZpQvyS3m8NwQwVyvtLArmyFxVYj2SXicXea5Zg5WV2mv4oVzWFMkPBAJND",
  "key3": "56Z4LwdLSfdBDjrJF39GF8fHeqvXZ562rbYUUzMnuHHPNWNSLPZJ1obL9MMF8Ap8EHMUgbb4TUomWgN5Vu6KWABv",
  "key4": "4hxJ6did6ZktVQPUPYdT42NRxzxzqUhNP7fZMRdtd431Aqjjz1gyqhZUuVeYYC8mH66xRQ3FKC36H7oyCu9Ufe1T",
  "key5": "3CEVAxme6nPofrNnGzBNJFCE4UQUb4xmYdKWNtj4dLUfwDWfBvWQuQp67UqemzcbwZ1GGuMQWroGQ7myYPfNUF59",
  "key6": "5MCgu4CPeg5MtK9SScWEJJrmEdrnxGXGs76Ykj3opDDECmqy33pofWp8Go6ZRD8kz8CLpPRHZG2J6oXZRVs5ZGrq",
  "key7": "54hMzV9SZALdCrnHBbAUCMsSrq4EMdxfVsaYg2TzVHTSWoVezSjcNHhUrfY4FKm2suSvTVCsMZYfv9FmYuMuBdni",
  "key8": "4NEaFFFXo2rjBZ4ecSGej2rDBGkb7A3uhgoocpcVjhqej7YJH9JxYyczp5JYSMEJbVA4Aaai8GgSNagiWPAADF4Y",
  "key9": "3c77hyrTroBsuA3rPVt4ZkeRZhbHEQfdcghnbRHGNbDuwkbk99deMvZ4J3TpVbjGMUnja6tWWNUdEnweKFKDbaZe",
  "key10": "4UaEEgY62mSFP7NVDei8egKXwunqo5q2QZD4N4ioYiThotMMbxgsk1XNFt2HngnvVNJPmpReUTmCVJVtjxftquBn",
  "key11": "3o7u8whAFdBncM7efJiu1PRQ5wHg1Y7rV2XkLtYqUsetujZ9EAYTqaeFMr62Qj2cZkkD4KhChghdFLNqvL4qgLM7",
  "key12": "3zCAYZsttsEhiHAXtASWitC55otsRRff4BMYyHEvswMnhWYPNC41W8UQexyt1HHggohR71uTMLfU315ncRD979n3",
  "key13": "jTcvW4mioF6RvegzZD7GqsSun21WyDESTMA9EVLLV5bemmPq1CGB64u1rURa3H8yKMAqzXUKkg1C9vJYuBDBt15",
  "key14": "3oHaaLGFErZQx2eMmpgKdLHXohxfVwowpNpSxXogzQRfq8NRxePJaZaSSqJp7gc77wadvNr8VVKPiJrV8n5W2U6u",
  "key15": "4JFhhqCB7VuLsJ7yP3gzCVuTxh89bgtWQSRayC3bfBPNYMNa8165CikumnSh57K5fnYgoUrks624Vmmt5yRS3fVR",
  "key16": "4qmYqzQPkEJBGdfg95KwaUwgqsfGX9qB6P5mC4gcRgafWkFm92mS6DGczJGQDkP7Kng44znLoEA6eNxPcVbx8R7i",
  "key17": "yf2y7rhwuvNR4FoVqgWQ1ov51z86xhdbBX6EphwfTZnQcqDABMkDGi55yyysjreQduo6XpDFqGSHKPjz5Tyr2tR",
  "key18": "RDQoKYqMWQ8tZk8dD36wE5eUKnZoJRJo4X8zPNSoh1kX4H4HidLEYABe5JKuay3Cvohyb2mRRQBSCdadoQrtmVB",
  "key19": "hRQCA2t6isjFnpdbJFBFXeYhAdqcgv3dCMMTHg72uMzFALdkJFZBv5fdQ8dZjDx7nr17SNypQv8NrEumK6D7zSy",
  "key20": "zE5UKMs8wG9DDboWD5CNM7365gPHuy2kbSadoZsudzWZuD4nEZyPeX34mLj1hVnwFyZusiyFr1FKDDZjgZn1hb4",
  "key21": "4WBTBZ8EVAvxPj4ENMTr5g4EPwhtpDH73GNLAnBn6Ncm3V65xhGFBdmyPteSmU3QEpCV24qxqiQ7u6NWCjzLLSn2",
  "key22": "4exPFpfkd1Ed4q6v77VvMu4AqYfLRjWuRZqWhHuCAbzp1KgSPCrpYEDmYR466Wn62rephpcnHATK5TqyreVXHZce",
  "key23": "2YXPyzJXj8C3Xkam1ZWbVzXDJitWDdBaek7LvSRciA9PYyqsEJkCW8fg1wLqi7ZvjY369cACkwNDjgoCfSgzLtew",
  "key24": "4AQrqeLGScP5QAGhEghtdvxk6qcgoS5wik8VSTjub346DrAPKKSWKaquhSc7WMQ82JNwBYR5agvWK63gcfqDZ88Y",
  "key25": "2aAYS8ojBoP2euQsT2YPhTehpBzv1Zo7M4nZogVemY5KAu8CDVE7MrdvvDSRCTfTcyvTPfVCvdVHwTTRBwjKsiSR",
  "key26": "3Z1ww9Vw4jgPdPEcJiVBLv5JtoN38rhwE7QXHMERTw3Xf4bRJVoJXZs9HZiaw4oNEuKf6tE4Qs4Jni3Qm58ofQYx",
  "key27": "3RPSPJiSTjHoBqoEjNFz5pYvmvLMhy9C2WarWYA2DPNpmUythVjphKyZ3s8V2VG8TrAWHPCKSy8s8tUAaQhmaHrh",
  "key28": "2nBCRaEumPKc7GeoMdRxsfJ26W2XSwA8CCYXjnNwiMnRdWjGrS2etKDtEbHvNGT2s12q1qqVWaawT5YLYiTyo4Mx",
  "key29": "4yPo4bEYPr1uJkaFVV7Y4UT2fc65rLFtgJrxwHL1rbS12XFo3vUqQqqSCNccZ2eteBxLDHg2PeTQfz99Wwa9HFgR",
  "key30": "4S59P5GcqD88pD2WZK86S9QRMFacCqYKxJspc41KchQxVyjrwZbHrsZssv4xnZHpx9HzkVpFH5JrKZgbRRJE9qV7",
  "key31": "2W9QdRv9ocwAZwxzkttbq2PkvhXsmoo9EpUvCoLqNtXZ1QKgddL4Ay5uziAtbXMcCrUDLHvujQzaAfDcUWVTTkw4",
  "key32": "4TXUR3oLhwjWV4DfJzhtVK8bfHD4BT94exoy1SrR8EmmsxgLLmWNF6rrMsmrbynuhnBkvezuZxDbedq4TLNwvgQn",
  "key33": "4meWcghVQxQkCMDR6CwJNic958nTK2f5pdbnQ8HNvPKJkCuyriVxqmSQNc91tfkTSVNXnidYFVdbKTrsKosfiKYE",
  "key34": "uAQzdR4NVCKmqwbVmWAWEvNinrYto36d1sgajzjnmf2Qxe7q8iponFnu6NKw7jMHdS4vL4FnQGJWVdcPrfQG3Db",
  "key35": "26HJdDDNu18GAu9zorRk5JoD7ocQ4CuuLVZWBjkwUCPuLSuMuBnqoniSzyJwSYuSMckwpPrYSGtxSnkTnVjoXFTk",
  "key36": "2fpsionAAAM6fxvgbmjhKiyBuLPBhJtXZMxThXkTcDfEf5pGYLmzewwRWxMJsSc2kiG8w2f9USaheVmK6ZCWufPQ",
  "key37": "2RQBC1bid1B9tZdjUgkKuXzQNsoYD9hx8FQedoaprLvNdVEFZwPRVVFqM4GYMDgBpKbvKPad7sZp2Zxxy6HpcqsP",
  "key38": "2KZhXU4pmcNZ4pprxP3B8ECuZebT9TtZQ39vuBoyxH7BHS53tAKxQWiYv5uCY9DQxnEmnaCNf6RV3v3b2VBaYbCc",
  "key39": "2oXBL7vrA68UKKAMuikWA5zjVHpejUxxeV8Jh7TMuWhbJFU8ifN549EqiT63QQCN1kWX7AMWWQH7nCf55i1kRA87",
  "key40": "VWPQaTnZEvh6A9HBA2BF6oDbvxQcxWJYjLJpcJ9t1Zacr3qpN7ZvHkiGdvASTc736xHqv5sxxCuwELrBH9q8K2x",
  "key41": "4AdpMuyD6RxXfJiaPHeWAPuXNNwSyQHrkUnAo3ewW5D1cfD3PnAzm3Pyu7Y5rU44FXXuByvUpkYe2ExMoiWc9Uc3",
  "key42": "5ZZu4ayMuuEsrynaMRx6JNfa9wjxSyN2f89ExLfq8dfEZ3RamwgxfABo33b8kJSG4rGB7BRCBEDdLaWdeYUAUk9t"
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
