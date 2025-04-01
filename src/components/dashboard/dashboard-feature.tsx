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
    "eBGnhfr4DoD8th7uRw3m6z8B8CDctRCHfCB3X9d7m8X9gmcb5FXoQKoWbhD9hb1CMwjRDPNskGoTw2U2pMKpGV5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FUmj8HnNVRCykVMtEsJ3iZpCw21WvKCMrBJqk7FVgXB1jLGgMebg3bZreArFnN7mpf8wbGsPudRjeCsX77msPxs",
  "key1": "5NWV1Gvfd5biNDNkVKN6ehYisKjA4SWaRrCqDhso2xeBSZu7qkJyNrqJemo4ZeyPiFXgs2W5qT3BTahBhSsUbhqf",
  "key2": "2JaN2YvBn548LHF7kacaE7pv2uRjXwzsUiEdn8VbV1QkCzMuEsNhqog8yFU6Nyz99JPbsEtR7cZ8LpHE2Pq4FnvS",
  "key3": "5V8DXHssvNjSt79MFNRJtk7LtJfEZEuhWfeaT7Ccpu68CW9wZUbckj24Q8FRVRUkdg9ELhJpi7RNfqWhLPm4ZjRi",
  "key4": "2RNpjnDbpWEHFJho1tYMyxksu4oLup6kAsSZ8v5oKwbuS3vZUP8QsrQBkjRM9twe2WDzGUS7y2kRv3J3Te157Rnh",
  "key5": "245aQrtbWFL9z3xsB7FbQHev4KZh3fbQWgcJCV2WZZof33VzkZ6uhxWwfVNK7QNmRjsmSWd4ccNdkeNJrrbC1i5s",
  "key6": "4FEj6f2DuYKpuWbkYxoP2dDahWdnU2ByD99MXcaS2dY1mr2V3wNScoPqUn94UHnmFoHdLwfEG6QXCipF7UPh7ZSh",
  "key7": "5ZSemyNndgNT2fTE3XZ7bH6JaA8ncGTkg7wxuAGVqAHoWMVjQLNSjmU4tKMaucPGQfnYaSM6FXQYTAbx7Ua8HiDd",
  "key8": "29GEA8nwB3fA4qAWUF91xp1NSSnE9FCXp3pBRfohYQXvP2XZbTtoPqvEZH92D2BCt3S3HS2ZrsPzMqJsF79iXwVq",
  "key9": "quDGX6ZuSdhRRzqiwtjKaZ9UqzEYqZ1YxsNmkqeM6peD6LHahmzvUieH6FAqhCgvLsGCFNLmyNdUM6cuuRTDaRf",
  "key10": "3kRJ6Y2pRHNtqhMJWH8DzSJgkukPt68C9USBgWNHxiDvHfM5x3w47uvMQw9LiVVP28wQ8USuuz4WsChgvv7GKvVQ",
  "key11": "4xhQvUjNdH2kjD2Ep1mWAjaCXNPCPbD163tdbKgsE2B6BLwDCM1QBUbLA5wTNYUTSSegiHBLzAjt3QC6c5CMES9L",
  "key12": "VS1zjkAuEkC4UTaxsWSffSSnhzgJacaAavLy58LmHYmk8QAqJScmopgtxJ9WXw5ZjYUs1rQBScPTHziR8EA2q47",
  "key13": "2hT9Rsbh1jsWp1sVUWyPZwNk2ChyfSBU7XpoxhpKE7GNhU9nnbnMHFi9xEZ64QG1v9SDaZAQFZpZmjphWJW1xMWX",
  "key14": "3EK8DYEnhh5omzc6tqTFyuBHbP3fPtPXprkrRvNC6Dp84ZRxAjSnSR8xedyo7VoEvJNXNwBkwdiQPWYtRTEWevrw",
  "key15": "2HYg2NNDgWt1Qe7eNZ3B9fwHCvzEMQVLuKFj3hiReH1GHDqf1syGRZzhg8VGEoTMbXJT14DbfVWX1awqPC7o16tK",
  "key16": "3GypSe4t6mj4BQpNmzXUCUppTnWzocHfFBYK7aQ6Lg6r8hhaWJfrUPpyVwkkyCgBcxuZW4HiPbEtHqJZ7hPY7ayN",
  "key17": "2z2ueGt3XLnjy1UPs3nE2w7eSWbmLzQ9BBiGa42jRSisBgSpuQQgUR6q1VekEwrn43smhyVAS6ncpc2piFnjP92k",
  "key18": "5a8SbGe8h3gX6ghct3B2MZdxUV3yMtpSCaAQcb22ihTfuqttcQ243BuUSR72FKkYLZB72Hpo4VoML9QvaqX9pmAC",
  "key19": "4KRBDr3cXB2cUJwxaoLCHFiaWGyg1a6GeLb923TdAkCEEAKCn1g3kJk4vJuGfVvRp342r8yRxQ9qKbip6iYR4cgZ",
  "key20": "2a1icx5kUbbH5eoLKVMkPeHznNWoRkesXkaherWCBJDLPDAqHQkKJwaiy38uYLQBjc2GtxKhdG7Rbq7LNv8Pc48B",
  "key21": "2DPbtbArXmYpLW33R5ERJYrc5t8p4mUqMfG89ZrstAq9tVnepuKpDsVDDnVYE9WiaQQzpZKsZPufnWsV6TH9eKyd",
  "key22": "2wPFGuVbCq8SQAwT7p4hhEDG5AppmCZugpjzBpgDVZ1shXMskZBUnsutApbo18dtt1wFnumDTQxmNsRcScX5w77K",
  "key23": "2vDKQh3L2Nut5R46Qkk76CjRmXa6yducFLWr3hDeT3qVZRzYXTAbmB2N1ecsmupPjECBRhbnEzdmdUPy2rpsjdn2",
  "key24": "4azQQkiFHnnhL8ceG2kHBtMscKdq3eXbLK4Rx51T3bjdEyAaRf7fDy6bJ8uHN5sMywTTbD7GABVNQZnre7UGaa3V",
  "key25": "4ELTzTUP3nAj21V7MXUPMnGJczy58dU6UpgFawZcMkQnbf1n993sum8P6fmB23J6MAZgcF3kVMXYybFWho4pW2Ud",
  "key26": "2XDVH6LG4jBXGajjtx7UhTREzyuEm4UV8waAqVrgT3xJduqb4M1zthxtpeGFEo9SGGvuqPkVbkRj77S3D3Pni8kT",
  "key27": "5voXBK1VoNreLsbKEanE2NSaj5TvhjNuVYWBWCA7sofo5fmibVa5iLjYSkQLkownd6pQo1yGVd1qHzrrXBC3byRA",
  "key28": "5np2YeQvbU2rNNE4J3CjKvEDPLKKb87ENNkDRNnFn15naJmuCmehhN81GDZf6YJUAvVMAnn9WdcJn8aLXPqTv5gU",
  "key29": "4CU2UiSmGVdRtAFnBqc3FGy1yHCoq7b4WoKtvqG2qcnst7S8kNqu6WHKhvvTusqUUSFUeJjTMKmBHQAX12ksLMw8",
  "key30": "5GpkWX7S9un2fENAAhMfoxa33oTSNRc2UZJzkiGY8fuRBoAFQ5MS2F7jYTscwrnn8LymHDwdxBs8oJfBe6J6sAFk",
  "key31": "5QxHxkAeEZ1H28U3cmqckoKqjog5coLBGQYvzoFJhVjuDZb49kdRxJNkMpwC9DQmdmUaLrdD7Q7AWjaccCyvVvvh",
  "key32": "Ar62HVSskXmugxq92QPFJH4poa699pT5x2trvbhDV7iWZF8uYnLL1CJGt9sHmdx5ynetwcWRgHiZmHeZWfsJwbU",
  "key33": "2PVodj43ebHiSkop7bpu6nFspKNPx1ypKJqBED7AUBSiT71cR27ePJzHJEQiXWy1xBnhqyp3b3bgdgD74PUxwTFC",
  "key34": "GukDYRRxmjRmca71VgMqqC5STJFEbTDRoH1udGaRLTuzopUdj8ooQeSY9yVorLkCS1KqcV5zNK79QRTxi2qn1ro",
  "key35": "D7pgDMaZ1XQT7AyjBvggVy9TRAWt7qSXCwqiFV2d3sfnCTehJCjD9Zpx5fqH8bYfygK8ErUvZ5ihhw9GQXLExBg",
  "key36": "5XnaimJaXUA5c49NFqHiGNuPiXz7nit2WNwatc6Zx4txjzCJHaf8xseTLHdsJnXHx2YnxrG3sJibCenta4h1oGBD",
  "key37": "42d1DKc7sy7byz7PgjYP1carNQEYghm1Em6cH5ar2gppY4VHtwqNzMbL9b6H6LaGaxmgnQLqPZd84GFPLqxhXZE2",
  "key38": "2ccUFYYeNX3wNQUArDgpJr8ybee4mKu7v6SWR21vNjg11pZEhYc59aPrj9MKTaVmFxGfydGDzY7v9u4B9XWPWRz",
  "key39": "5YU29yKJrsy8h3VW6wFhkJXfNpjUpcQR37wc61FFph8HpsLEm11vGeDVosgZ3bW82tYqB21WuWdyBsnQoPDmN79i",
  "key40": "Ba8JMraGcvNcioMQbwVGMq5Pz44iqcsmCJzUnbA17d6kdfU9TfBjgyT37yTwzCXnHt7w1bUfMnm1xMH2QkYga9K",
  "key41": "5VUuHNi2t5tNsQbnLq9BgKvFJ3fsumaYtggv62hDwYzZ5rvTN2gt2rXJTjv8W9LJNryV52ej2ZKhSEb1f5HERNM8"
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
