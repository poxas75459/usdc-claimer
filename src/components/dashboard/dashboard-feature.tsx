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
    "53b2dNgobZMhRfiWN8Xec95sB8xXFgezXFriNheuBW8DB6orixuTB747kwrFLcY4nLQnENQGc1Qn7GkVyT2b6pyw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j5r4ApGDYGSKacJmnUMrLcLM6tpjfbeSN6VyQothj9dNc8Hmmoktgs656RNhueKNsEsXGQkB3mSfhUggeCnAf5z",
  "key1": "J8NJwP3CHryv8cQYA1qzjVyJMG6x8CtvdoEhKAs92XzhTKQEu4BokrVbZvxXPVjfLMXKKxLZw83BHCthWm18iRi",
  "key2": "4V4uvbtBFdTUpjafFvn5WuqDmMfZR1AkWUAt3VkXzXQn44i2QDSrqA3FxNfBa2uhDwgMYBW5pba53zruppfQXRHe",
  "key3": "5mxUSMExDc1WFUwejY1bfXdwDQPs64mpvS89GHSjBKRKkEfPa2vgRoudFtnBAYKZgwHQQBKnS5hUvoNFBGpkLwjn",
  "key4": "2HJTiGwqqNkCzsEdVcfmxssFp5oJn98zbNBPnED8hA1T2M4UQGruozZdP55i3HEqT95KispbSq9VG65jjbh6G3KJ",
  "key5": "5m3AtVd5sbbzh2Z7zpNxJhGALzqZkrqeVLtDWBv8qbSRCUKm4CWHR9fLvsdm3pp4XggAx3JJ3moRqXsykjfJDy5d",
  "key6": "2Ve33YKRAvrcSF4kn3btNbCL8VcNUWdwa9MEDkqRhUQeAgUpqhgdNSkcBcvRgcKqQe2km7yffE6hj6oUFbP99VBF",
  "key7": "5Me2ABgRhKvy7csm2YQBarvcu9UiecLZJKairqXvQHvGKwL5Y7EUsxJxGi8wDNsN8Ux9ptRnQ7nNw7n2DPzoB4tU",
  "key8": "5W39vL3sV8nPP3ybMZv2R9XSdAzV94e9LxewN9JNv8DfhqG1t8jvFLccGNqRxGdKa89vdkjCcFqADwWt4jfu4QuF",
  "key9": "2P83UMTEieRoZ1nQcDtLVtB6JwMWYNGBUiswBTaKDDQnXB8aL3u1ukPBcZiVzuPtWkS3fPMSQoFDxf6GrPUEQwV9",
  "key10": "4NG2EDV3rPTVvTCmttRNZEzyU4v1iTebHhZL2uo2T2qv4C9Scj36aLH2QWUWibeMvLMNncXC9eWtZcozgX6YbZjj",
  "key11": "4jfapYpE2PR7Rd7dScLUhURmY2UKF4bkmWCffmigvdFbt7XP5HrwFPvXyCBviSNudphdMEREWAtFHwuPK3KTXQ2H",
  "key12": "3eicZGkP4TWZWkc5cKRvZoyvGHpzpzvYJFYyyR63WmiJTHobT4AXFoqiFsY33He6RaoqmqriVLKPEX2wEVYp6ro1",
  "key13": "YNsixhv7rdz3oYsK5a2naKHzryAX7hxYqZysRhjSRRTFMYX7ZU5NcwcKFbBMdqvtwD4MSr39ZqE9Waow4L6c1wW",
  "key14": "5L5LX2QHpRymzv8dyGcvCzGAonqmAsQJgzMiPZra9NZDWmMYFixW14V9kVeAeeut2eEyTGnqxdsBWE6wFGauYJia",
  "key15": "NaopwD43c99NXtEyEPZrfrWiNNqSe85xyt4bWJ5Wz75rXN3YxnaQ1A9XcEFJS7T2o1zVbLKzDEvtQ6bCxUjTDU5",
  "key16": "48cTVrY6ryDPv4rdaUwetWFS4YD2zTZ3XYGPjkuDHsrL2Mi5ZZjKshV9PesakasuTYE3HmwLhFXyE38rGBcwVgAY",
  "key17": "4f3sohTiVv5TCpDtH4mzJAA1ANYX6rVxDoSnSYN5upMMiTvqW6VdasznhdtGf3u4rV84VYxUPv7gURzuuxs7cFKj",
  "key18": "2wbkfLwA5P6FqF1FXk3Xx5eiUVXPMNTo8J9ACkNNof3kMndq1qhxpyuvWSTJ9HHVqk8X5oUMCELKbFD8NaiLEFzR",
  "key19": "2Nfumnq85pkfWtoDwZBk3saZjCEDAxRQ13FRJcCPNYkUq3PdoMQesai67hJsQAT5t3uzjB8Wg5nNBczhssiQhFAw",
  "key20": "shGR2cZNHn4hn8tVjt4PjmZTU7TSEYsPaNhwWD9DojBNgnC3cCqUSCg9ZrcuUYeDgUDyopCFWtuALr39JuDJpZc",
  "key21": "2fKPxx19FsBqe7ekhTi1f6Nueqc2bGKcG21UwFTnEufWEQuxMLLtyLDVKHdQmcGJgxfYDd2VYT1Dw2bVGC8gvLin",
  "key22": "2E38wQxFuEwypV1yJ7XP6j6XNJSzMjsZZdQAx6Q2CeEUc9Q4jfU13yn9b2KX32MLPymcmxGuR7ZGvckhrzmEXKDd",
  "key23": "39Wb3keVJobingosciSFw7dzTBVmPRZW1YAmLGzd7oQtkBqSk3yTWxSs8eBJnswRPE6KVCxfTUvifbvmrEb2UwR5",
  "key24": "4FrHeNEJPcWpzLSCkJzY9CZZx6Wp16st2mLsvm22LvbW97GWQdJg49FbuKbdPDEouJyZsw1ZDpYTQVuDf8bUHd76",
  "key25": "2GggmTxbN8HjMVRxh2y2tnQZQzP9477SKbMm3r1FAgHbh9nNF3DZs3itT5edWpbNCFBQJKuKmFJSmm8FMPeT7LRM",
  "key26": "2yyJckX7i7KL1dSW4D4VzjtZVAbAt6WBK2MuCPKHYSeRkT7qasYRzjSPfv3ffjgNHDfHmvYuaNUcV4v5nSXtBCi3",
  "key27": "369sysrS5E9rSrTsYkKse5axYD5R3gtY76EC7Lw2AHHJAVoxbJ9in2cVTnxFikqi4btLiHVZkQjyHY7KNDAxR3LV",
  "key28": "5k1vic4NcRdc2AMcpQS7WKtRCVDbSVMaM2iuwbdPfUvsPcP4HwbQMenq5LqgiSUTAmqubBKQEzDG9jRvxGonYvrC",
  "key29": "FkZ2WmPoGLeN6a5zXrvMra4bzvi6HtyjoG6rkxp5uZs4oKAF1DHv8Pe4bVCWnrczzmKQNTb6TBbo1x4Hj32c1mW",
  "key30": "21YXA4pFXpYM6KwBVadcrAgYbiwRKqDNqLL7GYwtSPTUZS5XZi1osMz2znSdLqyJkHmr3H97aSp5z3SbXaxpCY3C",
  "key31": "5sckCdUVGwVn3847fYkNj4i29upnosxVHxfrtdkGhcvwdMkqp82z7GU4o6udpEB4t5WGy6HP3ypQRR8qYqkwKQHZ",
  "key32": "4cJMNkvZrG2hcrYbB4FTxHvupyuiUExJMg6hbqT5Tc8FCeejXBZ7kscTTcMuhn563Sj7VVsRPhdWtgHAk9gotNGD",
  "key33": "54RNbRPHUvwBt45vcgcjbY9KbdNf996sNDoxKurGceays9QyCvdaSrAumQGXmsFwaG8ngLyK48sxutxyCLbtWuA3",
  "key34": "4WqW2muptPAUePNVfwj7bVTvPQzSoZxHfEee6jFurUT3xo1z1fDnj64p8BkpzJTeQjAgeob7oXU9fcZnbLD4m76e",
  "key35": "3KBKZ4LNf4f1MgDpMeSQKoxfrUUGTJEcHfJ7UkQSaGg2z32fK4Cb9rraKSA8YHm1DAeMWoi9M1S5YK2XKnebFpU2",
  "key36": "2nQhfbRvAYYDbURGFvRMY171EHY9MSjQWBLV4Vz2FA8eZ65hafXgFbJGss44Hmnb7auY7tXn1zBMjNVThtVw3sFA",
  "key37": "3kr4fY5Zfmhiq7gzeuHDGZmt3NpANgEFHsNvoGR3x367EToRrJyc2zzLLj1fVBHEWXih5QuBPL7JiMakKrcQsLW"
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
