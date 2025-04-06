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
    "3F34zH18XUpikvBGbr1Hg8piHWHVE6AxG6dqmN99DQkEc9hPKidSNZEBNfKteYzCh5xNecAcRKtbd1iveLyWqXBA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FpHVkYiwXy8mjkwGaRudv4ibXmUFGwoRJzUTFH1mn2pY2R1eSZVb6X26RFd2Q5LB1ZqKvZHfVeTMLpPJUL9ixJV",
  "key1": "2ELJJbm7PcgUeUvUTZZuMEDwuRvZgxSyuxDtnpDR6mqr2PxLLuqiVXzUonjTewt7HWabezDc8HLFUUbiD6sS1nio",
  "key2": "5NocE1Y2qkUTPui994C5Ca4rVyDvqmqa55XcKTV5VMG6YA3dY8Zx9pKbSC856Kj5gSrj9KADCcwxjKTfaBifEms7",
  "key3": "59t3S5cCdQzyoLxmRM47jGavSUVbF4XBdu4vAa53b6v6LqSWt4Y1fL5sanxbGnG8hukFHMFm8wA8WAsXYi6sWyfM",
  "key4": "zehXYjnemngzvnR8U327MZASjUvq2XpbH85xqqHsxDzKVsasqrAafKbdotTkUaRDCJZkBdFngaywXePp1DLfSJg",
  "key5": "5n7iZsnUwLiTxsZh6w9sqs6F4hmZ1p9vs6CbMyHkP1wRBfyY2rjCQXkjPxU7Vg6m5wZ9yAi1AbWJeKyKo6EG7NuZ",
  "key6": "3RbATPwDqk4HdhDYrXfSLFDb9CxyGMQXzBc7iYdowzKVQuSgdjHYLxmehfGS4f2ki8FPRcaamAsKsfRknin7yffN",
  "key7": "4bd2iQiF7NjDmqFZAsLhFXAKcxVDe4WA9fnV5dvgWRrG6Ng7mZP2bX1gWTuD3VmhTd9W9xPgMSPZ1BDXrEQBn9WD",
  "key8": "YHFAYsAwguvkwTwUuVq8usFiP7BSNKWnrv46RgFKw3nQrYEstEEachmsgZi8vHpMDzvgsQMKSqoHH77wEDM1UWg",
  "key9": "3zVMp4gZqEbrzno5XC7twS4rhKvNK156oDgsDuwfstjJRTnWMG2j3HjcZGX2SpdyJJdCCNSXVo5TtHadPRjnUEWs",
  "key10": "3hB753Gn6ydcongJKPzKNVhUDyHJQzHqAD79tBUq7gejQ97S9wz5uyi8G2A2k7GrUsTjiQzhAHeiSP8iuDX9fa6K",
  "key11": "5YXA1MiQrYN4Mr5BWrymP1y99Hr488F7bNRosYYDYN7o3Xrw9qxryEbUZ93z5KJ3F7Ws7mmY8QUbVcqB3b5jZt5s",
  "key12": "4GDbWFDsfx8CKBgRHJHH6QaEEPJw3KGK7EVtUhu4SPw8n7PVbLGptoPWMGNdustEiEdzhj48vgK5wgCjkrnvAroo",
  "key13": "4HozJxqGuKHUYppRLtEwEd1bvY4jJh7zSpd9eSrqhp21DrUzSEKU8pYV2wP1hrh6EJ9DJJacbFtYYtk9dr4V6TgB",
  "key14": "31j2XPrbtDfGvfEmWXPFEFjUExXKroQWd1yvAeSMnUCzZjBZbFQAkBL1pPJxgSqjaAeh6MsyPT3xARH4Ch4YkSdG",
  "key15": "18XKVQLQrGbvFMLZ1UpVreUF3urfd7eDUz6esELK4339ybWmTmDpke6Exagn2X5Qo4wEXwj2vnCemLsxm629Yft",
  "key16": "uecMFhv4hahD1Tqp2BdtwjEkfHzGzkaCXTXtKNWYxJ35faCeX2NN8dWjB1FFEi5NcCdDpt1Qd97Q7Cn5JxUCFmi",
  "key17": "5LWGMkMs4tuoEyNnJuNvmLGgga3HGyG2o4wns1kYeJQSLUS68zSwkQAuHsQPRd1Uc4qBrKWYvNjJ4szVZ5DSat9V",
  "key18": "i1v6knYA5TBPcv42FZNUUJ5jmBS6MEtT8saKGWrzsZf2nWt6ZHZRvZkZUYfY1qYQmKc12bPGt5WYWzGuGsVmDnT",
  "key19": "3kTikA2WvfussXED3XatZ7TsrPU7hYMykKWXothxKUfCFeyH3Vpi7UiDN1VhA47RZNSfaHfBkmwgXipMt26hPSmq",
  "key20": "65s6TcHYy6FVHH72jpSg4R84sxZDoFDRG4SExWjCNzr9aPAvSPD52zSeMPsB96Xs9pCtAd1nxw9ejmdgSadyijm7",
  "key21": "59qUjv88hYvRLv386FupkBKQqokxErFULfm1M2xGibRfCtJo5pqr8KYb86NU51sm7JDyx5DKyzo7NJYaAL58Rovi",
  "key22": "4zha3quFEECySiyZ4Hvg4v4N2796qCgEwDCCwvC1BjQMyA34SPiymRcTF84JZTXxBYkPUqkMtNJoxWwkfAKqAR1b",
  "key23": "zaiQ9yRfVjGFzFMBEC38fKvNaSauXmnG3yjxfWcBZDXpxEm8newpsD9AVJrSxNQ3b32p7NRqHP3cmTuorQ5sqMY",
  "key24": "421zECT8zmxygskcxSr4L7RZ6kk5mZBbjAw2fSAfrUsSzAVnqtHtFNgrtXErafukx98w2UDf6m164oseRQAK5tBm",
  "key25": "BnNogkGoQPSfkj3DTWRKdBfnXVCeYWBm1k6hv49r7k5YQzYVnUv76WBN9K3Lh7wZqEHpRUSrRrwzihFLHgvWYjC",
  "key26": "5U4Sfc673pTDC2YXdKB9qijn7yXFpWMFk4eYJrRaMUQdcCfdwvCbgrRmxkYaDLkvLBT7nGLUE6kZEAUCq5r1JhA1",
  "key27": "2uBxAYLAkg5oucCfkcPzWS9fPSUa4oedfspM18rbVqJTKbiFfsJnc7jyrK2PpofYeDCyaTds9KMCXKeyakYsSh2Y",
  "key28": "3kK6si6FFnenjBiYC9znYmK7TRSHCmFPr5aG5trrSkhNhTtZqrtXHxvh78HjYUckrNbyKoKoCKbeiMAZ7dsAtG57",
  "key29": "38ubkXjbBRRNmre9hdzUcsuPTyUiTVxqfbxzsgpihxV7xi4yqV6egkq8EjXpUVF8ovB8zPi9Jx7raR8uxD6LdoJ",
  "key30": "gTGQNuD6HDqvLKK9XdgPvTsmdcA8dLtyyEYhJAVmaQyMU1FzdN1nw1vf8RvtcYmgunoyCP7MxEKxBvRR4P778df",
  "key31": "PUAd2V6Kbf24yxSwudAG5gm5Vhnbz7sZCSzHUZVJeDiK1yWFpL3DSNYhm5Nfn4Gjd1wh1PR39n83m6w6ecRnEGi",
  "key32": "4fnm1oyFZxkGAtwx6o95bJf99e9mqgr9cUVz5HYMPveyYDEJLQedz7CdqcLnxympi9G9eqPyUDqcesB7oVbF1sc7",
  "key33": "434FfrrpULxjeQo3DGnems5vSBcUSHdiLE5bEF1cfytwEE4fDPB5XbNpqyjyyYDgrjZwMzfnHxZ1jEnqk3smU7kS"
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
