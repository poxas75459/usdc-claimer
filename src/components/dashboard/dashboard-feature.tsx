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
    "2Enr9VcPPcNZMYKGfEd9aVuNUqRTa1kwdnYS7ZioVwFeVzgySd2oLzUnqsKJsu3vh1Cc8P3cZSub6hueuE9FpvPT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KmT4rNbBsM6gDCNZ6qGfdyb2AxWLsSg2nz15Auc3VYfpn3y5g9NKyji3iYd5wP9BMQ1v14hf7SPZuWrnjWmxemo",
  "key1": "3KFK47UNaD3vmJzAscSMJZ537axpe7rYU9DSQPbLpANGAaDbRy7DQ5X1276doH9uFQFBgZaN9mZx8y5AUUYvDjMB",
  "key2": "4swxyGja3wWUFoiCrFGMQxisnGgmJ59Y8HbUbAUJbUWYn5oPbvrR9kkLGZNZbAfK5k71kSFsBaJZBCWAkVG4dtbe",
  "key3": "3rbM6a4Sh6JnKLqqYs22eLdbz8trUE8ci9q7Pxkseoynznqc4E24xvYBWKEKmDqqvdMYMHGPhDCNiXk4CdhL45ww",
  "key4": "3KSTaoEMY4LNT2vE4fLLayXdzp9fJnQWJn38jwciXuhiMPZ5kSfpcE23JF1Vzqsp4t8kkaBfvarZgnDh6FXETfN4",
  "key5": "3qHrwHPiv5uxixZGYnreLkaC2nB2fYEggmuhxVdDsMTWL3FK5ubduJc2diUXwR3GVG5T5XzTBtXoMMGSYsCom15o",
  "key6": "65wh8ZgfyFQjVLg3NtdhgwneYb2jCnzntRUv9ra1q5kKN586x1oWxFcnqnEq8ZtTjcs4bpR2vGDZHma7XEjeFE16",
  "key7": "2KHXPPujMcdiF3d4xqKbFwuSTQ3MZGMLyHzZqszAwk7ttjjeNhidf8tkJaYTEKoeVPkKGiSNCnERWDexrAHN9zAB",
  "key8": "2QPcHaH4m7nMyaJ9Nhe3fBrLtt9A11EcmP9gQadbzEyZhrZ3FfRDeaGoipJnVTHPDLWf5rAgYabKb3e9psERdQcC",
  "key9": "52Vw474GvUL7fAw8wxNz1yKGSMrPwsSV9Qq38ueNAV6iiczT3ZWYmFGNe3pD7pAo5MW2xkYHZ8DBgmbP8xcrSjcx",
  "key10": "t1sWssXeWUsaoVDUYXkEkS6mNjwWYQfnnDKwVrB4ehaVxysaVQGX1TGNTfCWnHsQkYgLRJtz2ndGeermttP3Z7L",
  "key11": "2sApDAwGxD8bzn5PB7tMy3SMscY3MYDGKhJsbJ79c5TjmHBiZ1XB8TCvXPAxM7Vtf8CqR11BTZvm8omWxdM1WtEc",
  "key12": "4Z24mod2QR3i4PZVikxuemjv2AuwqAomM8uvQ6qExbWG6ibgArVgRi48gKmrJu3vSSN1Rh4vj1Dx69dZGSoBQMqJ",
  "key13": "5MEGW9mKHiz4yJPVDFfV7NvWHxw65o2vaemUc9tRdUaNfQa2mYgLaQEKrXAewmnvMpZWQFG3udHwk34jiWaBNUKv",
  "key14": "347UijHpzq8KGHF5uTRRdoxPtyaQXVjyCNoZY2sS8D4mriCJ4Hi3jNnswkgKaXRxyC88MUT4t3W7eMkKYpiiSBMZ",
  "key15": "5Soq2FxxJPrumJbPNughnvjo3UJ2F9Wvw32qmJzLceh8T6L9x3tJ3fLC8t8udsDJRq854yzX3seXUUaQSzxV4LDQ",
  "key16": "2TgmSXHaMgbKoXLifqTRd9jkGo4chdAZLxZidZoCAo4qmWvKj3etAHzEjFcPBwFyWrBqQKYHi2rt86MEJx9fYfGD",
  "key17": "3ud75wjhyzzW97UZofw6ffmuUpLA3Ldxz4DPzaMovXawLKMctwkjbyQboLmRuDtfxSY2rqtvK2VWCv849MPuFj3",
  "key18": "3oNHCu9WwmmXxTxtKErZjuPqroVgzQfRb8JjUefMdD6LjEcRdEDKzfQT2Y1hgw6e4tCPKkpUMrVX3Wj5RmFmsN9f",
  "key19": "4shq8fc2TJvJK5SKeC7qRfbDWGXX6zESRXgWgubte6XQCprT24khneRHLWD3QRBhdCfikum1G4F7bdv11QugE9Wi",
  "key20": "mxbwmuS2Qc1WHKvkVc9eGCEEbUDrCR9rAqx7sZyyd1MmWhFkQNcNdre8ocLUZLmPyWZ9CK8J8JAZ7DouLvGA2oa",
  "key21": "4TBgFuYq3ZayDkeQ5mKSdtxkPDvNJ7WEGdF2TTJNfkyZWsQABNjqrndn5oTjxVY5JVW4qHMVM2TGcvhQnc9C234i",
  "key22": "4dwtw4jjp3SV1R4aHwe5BjzsJk7tQSbzhZxsYBay7xEVnwAw8KcNvUWApn1fPTHaiCHi96zyjtu5ivS6PRy2qUVW",
  "key23": "2fQ11v1ohbCkm4ZMD85uLD3yr5DmXbzKGYXnjwX8BKTBgyBh9z2fT8i87ChpDiQxZKQSb5eERZShMDbDsvgfk4aE",
  "key24": "5qsNmLfxyb1AT7BrVXiVkwMQx88EEr6WHD3jraVCC9LtAJT5Gkrnj4BTtnVhnJWbKKvBpQqy4FFMo38XvLmuazt1",
  "key25": "5F1ERsvHq7Yo49uRiMxtXh14PDbQhc4xm6Tkb6YfTcudGcRyfT447b7KvWDgfNf7TRBnWYjXct78MVSFKiT1r4zE",
  "key26": "5477aqD6nkX8qaEi4LuuK9ek4iPZXuuJ2kRYJybAdSNU7ViUDkvdVQQUDEz3uJED6TeRshpJ1pTgukP2ebP9m8NJ",
  "key27": "3vEAkXvq88DEr6FudmUJeMNoCZn9XThVfNmPwj5R874AjKUzfQELT6H4YhhsHBT9nkWD1VxbH9ET3vLYUA3g8EfB",
  "key28": "2ozY6L3y5BPjRraHZRFSP8386QXVMbNRETgb3mzqsHZ4aaquANnxx3814CxKLBEXBxRdjSPzKedsXPZRnCyEVtLC",
  "key29": "2pkY4M7o8SEDho7Ko81ZS9Dr2BiAMMq6hdsqMpmp2VTQF4Ky2kLussMNgN4cVEZ7rwQ2NSmwXd9S7fdiEXNL3Wdn",
  "key30": "2q1YiV21RfT35zMFfQRmJ2CwoLvhTXX6ScEquXBN2hi2Q3sdGy5DrfLcHcddxKpUXt1G72kYaEHmmWG9ZLya479c",
  "key31": "3JJn8KfuNn9eYbFUA3CqufYYPZdNiCaboyeVUmMCnwnLQgixPfdYJ7iSSioHbA75rrqf6etYF6FN9DmDJxC6Ym5D",
  "key32": "33om9GpgzwmWCoGSKCyzoP14ozagN7LPj8YEZ1rqTbfGqnA2DdbqxGeQECgaUReaJkrk7DKMtwVuKbUoDPpLWqUT"
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
