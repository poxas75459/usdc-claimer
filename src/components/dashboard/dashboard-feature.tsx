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
    "2yQseTS5xtA5oZuhx7bPtU9vC6HXWY1sc1fVBfTnc9ZvZjUnUHBCwa2mpgTAZqnJ4xqKkGjnDiRSyjhmMSNPJ9Rr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c6toFbVsNVB195EXSSxRq4pGnLvYso5UJHgCb7JaURzNLBPefTdqM1weneqydaMsc97uL1KUJcLFDgXwqnGxjjs",
  "key1": "3kbg4RFsqhun3hL99PTws3jnTMWLp9GmU9xSvgz6yAKP3MfoFssCBJz5QjTzxpFMeiGYTPhykcEPQcCDLa62Gt5V",
  "key2": "2HCPkAQet3S7bm7Qmuetf6qHVxzDMgjLzCQCcAQZExNZ3RSpFZ52Fwyd25nNV1xphSNVMhRHLRuWxAxJ1bKkvaGz",
  "key3": "4DDD7YUmGhSgFHEfymqRgnuxpTYYuLB8QJWyNe75wgEN43hXseAmCuCvfYWJdBZehr3L5gT2x76mx2sLzhSMrFKZ",
  "key4": "64derzaQpVHYY761fYq9dqxsDfdrzPQCU7NJ8QVUoxw4hLZqtXWWdQ8UCLshS5n19fJCGArzovDEbgM42fcWrRzu",
  "key5": "4hFvoG1f56hudhbtfh54ok7mTQHojK9wc2M1PDCDWC2JRArXVtWsBCRERhUcMXnaJvo7cRH77rKpna2dK1uHpKwv",
  "key6": "4ejoei1gV3PXUF4h1UJyjiQbXNvbMFphBaD22pHSj26qDZxwxTqVZuMRdPFPSkES7g4iYndRPyB9bG4NS6vGmet3",
  "key7": "4kBP9g6AGUN7CkKU7JB1cdXYnoyYpcPXAX2GYBvxLky8eWuyPF9r7ZtGPQeCM4jKSqjYY8jEuvEwfTGJwSQYsXdq",
  "key8": "24XNEDx8qM1eHKzio3YzHA1DrJX3GnGQHYdQfETfG3kvJ2zmPyNKdEWC6DsRSHmoitKNZncyapPR1bQAXjFemBeD",
  "key9": "2pZ5VAzcF1p1KbKK7qA7gNXoAzApNeE7prgRzvuuFxiopF8n8CAidvhX8aK4vyR1VuE9TDDfnE1boDJhekGP76BW",
  "key10": "4hZYT96EFJWHW5iJYCdztEcPkvfaSGeXJG9U17NgMorojrQbQefC2qt9HisCt2TA3CoJ2mwfMhC1kUhkP6Z77mDD",
  "key11": "3gGnARnxSCMrBpZWXWrQYzqWDRwmYpx1jBP3f2rr7eMmidmwYzG3xoUTSwDZqt4Quoppr6u8zcBJjrYXtTT17eCf",
  "key12": "2sDgYKVASb2peAHu73jua68jYZM8GnBoe9pkKY2cD4vkmnCLRmsXVS1rowaCNWvuUrL2wZUWnr7i9moVDUhSnbHV",
  "key13": "38UicRYVr25sMR2aCqmgkWFLfx1Mm6h27D1kFWGoULT56cAXAa7N9BSiygSNgyvejPi4wNYFieep1TzXUMkgUABf",
  "key14": "5gmXv65zaSrTVtEtQFbKKCjaUr8mc9ktzGVAHTkK4e8Dnzqp1x4n7FZKc7p7uvWvZ3vUQuch66s6c8oMPbN6jPnb",
  "key15": "2P3z5ibLexXFrhYLsGu6zggX3ZzneAy6gvCERAzHidaQqRbwbMX6sxf2vx2S4G2cZgNBAHXKgJquoSXecpmbtPS5",
  "key16": "227aqD9rBNhzLpfcbFmdy93poFXyR4kW1QFezQmQUSkwvJfMs16LaPyjzdBsYckKXmjwnh6KeEi7Zq8oeVpKt7he",
  "key17": "5ANPnXeV11oNyxLsj7YYUoB9oC6P7uSZhf26YzwcTNDaAiELBFrvgCVPi2RgwzrtVgiaqpQNK7mm4Tf7gCURNKYd",
  "key18": "4QmjQzADaTiqs8rnYdsnLzC1p5iMeYhH6XeNRvzmKtwGugXMtB8fiRBed27a8cMaZdjfBVtrkYA1Q5TLf2ts8dRY",
  "key19": "3qndfk4KrTseq89iWNPw3hX874V8Fkp7U3GSWmETt2fW1x8xzve7zthahX22Ycwxar7DsEvTFcjASTiBiXMFLQ7w",
  "key20": "58rqHqiqtrqCnXwKkDL1zktcRV6SebF95SzvytDYHir6PMKZYL4H2mxPae2LwDpQpab5ht9uwonZomg2tAEhTqYm",
  "key21": "5VWJ3Z2YQyLZWQaLdDPs5wveCL5vdwzXEjKNKnM6nq24Yi4rQcUmrPz59GZngyCo4zDQu2xVFzcYP9z1weqs5tpu",
  "key22": "CUJoZJ3GTg1YKoCXQbKoivAEtUhcLqkcJYpGdq1qfc3uCLxxcF7GSraFs5oW2hch1vq2BwpKBqb1nsnb6ugts7t",
  "key23": "5hJ2hzwjqEMzQUBTX4ZV39Gj5dTjLABC874X3GRMUxMxsEzKYsC5cp6Cb2qpwswq8FyzSxJo6Ro6jFAVY3wDz2AL",
  "key24": "LxEL8WFzxfLgTL3KPYDbU7xEnsERoarduSgpZ9JTKry9nbj2AvHh6442nAsA4W1PvzjA8fGmWzDy6uB7Tmejfha",
  "key25": "5fHgS9NpQrPajp45m6MDpWQEnNvr2s2NG4DRHPqBxcDxhJQjNbL5RhXDxTBdzYZoQbaroXkM8iKDHTDe59sggLFd",
  "key26": "5v8kjj4Nwt2irdxLm8fxBxPEFXfgo1ayaFgLYTvP95yrfE5LEF9GfuuQLvNtbEKR3QVu8FvbrM4bjJX9iz44AYxh",
  "key27": "hydeyndLQvtLEUXa492nvsnAyyaJLAjS8Z2qX5zDaMnm8XN3X7DhkQvdyDK3y6CE2iatqMYuiXgyerJgFmB9hMN",
  "key28": "BPAKaAHrmfAqpvjvETSM7aHRHVZ4SMxGv9pMkq9FWk9qhPygkQqP6HXNWySJH5Nag9eCPQZWoQa9aZc1NCNtFdq",
  "key29": "4Yzcsr64M1o8cWJ9ghxWFNvokw5L3hk9kNAHNkPi2n7TFxqgWxgoAcmeYYPQEoaG3xjVgQ8yY2MMfVQSeXzeY5Un"
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
