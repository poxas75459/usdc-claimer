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
    "66WdBdSk1znMi9yqVbkPDVnF4Yt13gKsQYiNrzXCzYDY5M3s6Eg3KtmZ648RtymUcD1EYUN3VC95j6n65DMGxyfu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E4A537ETREJu3ydSHFyeiW125pJ9k6ZcTTkkdJ3x5uYyD3DWDwHwcvPCz6RvG1HE2MRvtKcgz86hSmAwLuXbn2n",
  "key1": "3NA1qkMmnMHSY21Dpjgi4Q61ybr2XgiPDcyRDrwRxd5QKL8SfT9CrjU7s3jmJtaYWMMm7y8FvYYk8U5Qii7MU2ft",
  "key2": "dDUs1hhS9TCrsCd5MH7tCK2tw6sMuKDBhMTQuJCUfXQTMWYzX32xiZd9ygGnZH9nQeV2CJhE3Xb82MdrvfrjspD",
  "key3": "4HawfG4mRZtCUKoBshUHPcrXm2yycEGuyhRwtBVBxVDiP9fqTg4sP1HeRfvKBjLYNrCKMo6zTUWoZvWi1emTqfsP",
  "key4": "3LFdJfsB7KuHF7fPWRZgq95kDhAhjLcD92YnDEUAL3VgQZvby181wtRZ85voXvbKEP2baqmUsSixk7haqPd7TrFs",
  "key5": "4kgn1JjcyW8DZQXyMNwL2BQ84kkMgwiSFRgwmv2M1Fx4e5C6sdjVxB1VB4NZx3ktda8tyuv7TMBzBc5xz3yXfYdu",
  "key6": "Z3AizKo4iw2n6UWSTqKD7fb2w4DaCnRBFECEBbW5PuUjx6Z7gMaGsVn1CS7m2kTsmxCiWXemoCA7njMhpVcueJL",
  "key7": "r3GhTFas8LdZ4xGcTawuL2PCo8Z4uZ4qerrNPfWWFQpjzWWGqnVy6aYHMVagEBXcN9W138RbjJs1ffWYjHt9ubW",
  "key8": "3JRx3L3tQrQpP894daJ45Y8NNS6uyntiTMVcZ6Skb88DK5taamEwJT2KfaF3vietvqxGG3tcrQipYPdZRxFKeZoq",
  "key9": "2AD8W2wni7w9E2V88U5TQzuGHrKnppmFPJQbamewsch3HXggHCtXnKo9z61fjcJhaC663Rqdkq3TXpEocEC5th9g",
  "key10": "4LWYDniRGntm9WsHESFFqSw8KK2y3bRi8mKLxC5rBYaJ9Aa7weX8Jbcksq5cXFbrcuzm6GGHdgMdni8h2tqg2ytN",
  "key11": "4TRycWUgGD9KL333fY9dJeu5VSYJVgGJfrj81M5AXGNV1pWPvgZHFvBhacjqofte5JBDmqtH6x4prr5XNqZqfNz",
  "key12": "pHNkE7CANy3P7nopFEb8dcDFQneD7rciRXBQkw5YWN3fVTjEQzD4DLSaadfnboN9vRgmtQHim6Eit8QnEhVFMHK",
  "key13": "3NGtQf9ie4ujhg6C2rRrFmjnj1BuYVrbMitasnAZMR9mzoitiHtVagMEhjQx8EVa3NotoFCF6LfwEuexSyqpCSLB",
  "key14": "3k61tEhGTqH13zay9uyPMceLLr3Bvvg15tie8sURVHCCuH8p92UJfwAFm5ETYC9HRYrdSq9Fjz3DQrME1SV7biVu",
  "key15": "4FEqxTLPRAp9sjFP5qkdYpJ7NY3dYzT7QwdQ8R5FbMyPpJqsYouL5rHAWvo4z5MrZXgSxL65tKh96LLVCvicwnYY",
  "key16": "2YAYM4JoVZsCAQkrXGErS1zD2cejf1T19haTE8sKwcDvWJorYjhLoXnGxwLuoh4T9t5wu71jZrLyJeKEnGMwxoio",
  "key17": "3NVM1D3GyXXQnTMx22n49FM4CjBWJbGptXQynRLDpDuTtP8d2QMU7Lk9iB98FkNFzJ6xdg7m9mShcmq9HaVBXAnW",
  "key18": "3gfzQPDMnrhsaaFCuiQ4zZut7XbQwgF1Uv41R6QkhcxEhonfQPbqW7dJcYQFAkkRvBsYUdQxVtERZBAF5yzSDFRD",
  "key19": "318qWB1huV5Qq9qfU6qUiViyRE4zcM7nZRSeGuHX4kFoiMNYwTp2ToYFYB8Q8hSKahn9PFcKmTP2CqLit1GMGTgt",
  "key20": "4Ka6wBW1Qr1GqpDn2Qq3o4VbG88dhetd8RmB7WJ1JEGnL5cK2APPo1BJzs8NnK8EZvBf296so1E1kSNJkxeYGZLN",
  "key21": "3tWY5hSxRRx3XrvUYPMa2mTa9piiCgFFQUiU5a4FSb1NQ5WaXEuuwiqghbfa9E83UPST4HUpaShKDh5aAxXAXh8v",
  "key22": "4qZq7ckJgbkwMnQveYK9fn2cw7EgbMGUU4YgRixeVgvuDa2cS4YMMZWYCV1Pwxnqwqqsnw1Aj5RDc5bDmmH7ZX6Z",
  "key23": "2PFuJV1YnZnnspnq9vFL1futzGDTzMzATovZTvycYEYm9cc6DXJJb3fjR8WnbbZPnmBEiMqpj43BtCXvPJETS7BT",
  "key24": "5Rz44Hw8g7xq82nuv9zjeALBUfjDNhhriAJDJcK1BqiucJn84VAXwMwjdRf85HEA5JLrjnhzRxhG3TVMgMa61EJQ",
  "key25": "2Haz6Ayo4vrWaeYnQ5nS2KF8pAgDNa6G8SahDBzpLtbUfzDJKTRxCym7AtB5Uidn5uStKQX1mZZHLM3ci5e5udq9",
  "key26": "4NQYKtzhJvhxH4RYZWzG8fpb2o8AcWdphwkUQbp5zW7kxLGy7mSZryv2dGQRSyWD2EjCSucL8i1yWUUDk3LYnFLf",
  "key27": "2ndXgJ9ieMMcguNTuksycsJy8rFrDB6UUf6qE4abDCBUZ6vqgtW5QvfdvwQpxhs4tAwFHT7cFaN5gtysqYKMpoiR",
  "key28": "2a7zMaiL1ciEgbHbS1WJWgxs4dZ8FS1bYcm6ZKoHZWsyqGV1svGWsxxy8Y2mjcQLzD7Mw2xj8z9Y1FxkfFpr19uH",
  "key29": "2LaNddpXdTS5dtWGXkCZ3rEZCkUgSqySsLuCndUK1q6aEKUA1kMEJtXnqtLzXC826zM5N6LeyeG3HH8pQHQ3XpcP",
  "key30": "54PnvmqZx8UQBUTYm51z7BdFjT2hTEAXCRN4gADUopgi1RG6UFVnLcXBjHg7js3nz4cizt6ehJBmeGUGRdKPvZYZ",
  "key31": "4FL8r8Q3VDzTQ3ByUt8yJy8ZXvU3h5n4Vxz4Egi7ESRaev7cSRbmmNQdLnnfYkrk716f64ToEn8w4LFRiJt8Kzdu",
  "key32": "3ynKspyNNZg3NXGv3uPqfnHviHJJAoaDqBGFuQiJzzdRWcFbzHobApd3B93T1veX9xcLx9tahvu3gxTpprQmBhCc",
  "key33": "5vZJSE3mA2Qagi6jeJJcisV91cS4AVh2wVhKkXGwxmGBLGLMTCma7efeYrdBxmVYodbZoTn4rKkaBQ82drDGCqq7",
  "key34": "4kasX8DEZ8y35BcySBJGgqMLauQF9PsS1SGjEg1UFrMTiUjtKny97Yj9moUJvdHhX12s2qE6JiQdqmctmagZ778J"
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
