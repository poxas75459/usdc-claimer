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
    "5qjRW2LKWdD9GnsvEgrP9jFRPWkPwLQDHR82TX5c56oT63ykH6PQBVg7HdivF34iTaS5VKzux5LQYuARn9FgRw6D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HSYAQ8hmkPPbtbRLhairHY1pAobk1s8fX8Xr1WynBG1PLQLA3pwdRfhmXsNucLzLueajDXNAmXB5BimDo3KCyqZ",
  "key1": "Mwq1qysaLggNnZQLpj7jwX2VLHLLJxSGgFjvSRyYjba2QEqJkPGmkudW4ec5KBqkZSBgMhsjVgn9hkgbRNeU9kn",
  "key2": "HayVwFjMtu18eEsZMpV233HPzPi2ju4qGJpZAjjPStEoNVts4kXweQBLPdLC7SjnTF5eF6doFzm2mpZ64aivL1M",
  "key3": "4rMYvReneBFrh34X1YRRzktHcod4rjR3Afvra3ddtGD1KXKvpH8EXgjLowA65JpahUSoZSqxnEhnE4XiEZSWm5R8",
  "key4": "5uCi2mdr9EaUvXg31H7n3Fgv6sxu3Ur3yA5uNA4DbvsqXLFv78mYBC8XBRMe2MtMvCA7URdbZ2bdqqWLgqNjbKid",
  "key5": "5Y9ookyFvs3WSqrYtHBqm4g24XEizxzKbbdxqq6htQy6SuXB6FwGqLTm479T4MSJGhzog8a67K9bncYEgd6HwwB5",
  "key6": "4eXFqtsMsk22VpTr686HzxizLaoEZL4zAhwddHUze5ZHSFacw8hTvnmyZSQUyU2oTGmMKgjsKH3aiaAYb3woDTMn",
  "key7": "4UGxUKpPTetqiSJc8GvUSWzXgfx7NMiym35VX3GskRbVC4Dp3W2PmGTxYSzK4D6LFGoGUTqZFPszvu9MT54gkAjs",
  "key8": "51x16oThsihDCYYVy12kZUDVPsMTudGisBfpThhu8tEc3oMFv32wcZSTg3MUwbAii3UFTsa9icenQ6Ehc3iv1kuA",
  "key9": "5M8dxFDGPx8U7Z9tNwzJXqgqkvrCtmKgRcbRksFCZRP7U5ACuB4sTPm78xo3RFRB8iovjdHDRFKtjmutR6u4c5jy",
  "key10": "2KHYfAWVv1WQjLDvnEZ7NYg3rj3mLe1DwzW8mTMnrVJvpoDTaYryf6ua19GvYvynBzwYnzMt5ZvUFZNeR8aoeLMP",
  "key11": "5FpmDtCyrW8v3rv2PegzQG9TJ6q3vdvFSeYJpPR5Hvb6VdqWwcVRQcBw6EqT37eatd6HNin8qtKtHhgiFEFzMG52",
  "key12": "62PXi946MLARdA9fozrvPoMkwDdtRhrWvEzTtZXb67qdRroDCxZLKhSCU6BnPFozbjaVKQuvFbzJcXVpn1tckUkK",
  "key13": "4Fvt8fncLF6VkE1pbirwA7bkzN9tFJkaDrL7gsKrar6muDuCfJQdfNkPktz5Dyywos4sMvTnARZV9c2rjv5441fR",
  "key14": "3jETVeFJbueHj3LRzKqjqEj9PDDExV4wQFxxtAxGz3mhsbrfqWMmpM5F67oNLt2jNxM4wamCi2ccRDaDzXhGGx5y",
  "key15": "QQ6K8F247s2dmqsRrmhtyLyw8cKQ8RGg8kr9rQtskHMrDZi328k8mGyET42EqNecxgLR8UaPkE4aVb2YHHRcqw3",
  "key16": "66b4GCVMHHNfr6gX3fQzuxeGoeznV2WeCs18WFJ3PbRX2DnzpbeNa9GJjZd1QFVT1cGoDecYTr4Rto1Nzy8sTFSL",
  "key17": "4Xcu9BH9HkcrSD6rkJVL4axMEqg2T2gpN5r2BGvm8hXcq8ypd7XpLoUbErdEoM5VMJxUgpoZZ26BvyJYmrQeakWc",
  "key18": "2AZpN4pudtGNUGsS1ctngg2Cn68XbZ9AcAtV6hHuARb5cP6AYBX8CV63UxiTNuAUjRmpL8Eg1GShv9yoVQsyojXp",
  "key19": "2yVqsGyYyL6vESwpDqf9h31X4Xb8GAYgdH5x1EhrM9baenFVJbhk6eZqPiftfiizpFK1hLAYchyi1zCSriudCU5h",
  "key20": "5vSYY6qaXANU9L9WZN9vDv1YE5wg2y6mhoo7QvNZQ8b2GytGeZiNtUuk9AMRAEFVNjY7obb3tk3ThxZNQMvTw5r2",
  "key21": "5xVdZK7asqpZB2JQ5tB828ShPWh9fPDDG69ktmubMHcxL5TkzexUKPUbyqxHpDXgCFYLVjbFanqbaf9mJU4azv7Q",
  "key22": "63eyApThrmFbyx1K9tyQsZuSzY7URTEp3FpJLA8dh3pxKsZmt2s25WUHR5pg2CEeKX7ccpZhaGatDNpoxPbAcjVi",
  "key23": "4BWMMRp1maX9eQyU6K9TfE6HWKq8sjq9DxMgptLaYxTkDDMmMJZiwTRxeFdh1t9DeK5oMpnbWwz8RJyy6nzzGjaV",
  "key24": "3z4dMXyKqCz9gmaFvQZJGWt5LpvBDkrdhnXPFufE6oGNuQhmPgg7tRianFm5C2zRMjTvEJAr5yNGQj4MVdJ9LL1H",
  "key25": "5RY3D6Zy3xvVpkTCDyctUEs1DB1CN4vzon77FfJ61qVh82kYVX3SMiwmhNn8CeorzJcXLhAk3jnW49dWxjWCZKnU",
  "key26": "5riU3ryG9ZNQxoqtrsCM8FvEmp64PdeQ24KVuR5YQZsD7FGDL3PXAhSsLH19rxL87rHtNZerNjzTXZJvf3PAck3w",
  "key27": "3geDwTDYD6XEehyFWGJAYiX1q6KRd9tFwLTUJhCF7yYzqJPYqcwkfmSSwJMgAenTLoxagQM3RK13jG2FVUYhbXsH",
  "key28": "4ooPECxRkfhtn44PPRfTm87uw2ZB4UQgV2QKUhgkWoQ1egid6KZNffJt2QQjD7fSYwsFa4HavaMya6QEsfezmBt5",
  "key29": "3jyzPejbSfHVJoWW8EgQx6ReHHUZrZAx9VmLF3EjiHLMGTRn52hxK5QV77i1g8aD4GFDSW9SFC3QFiSaUqApQuwn",
  "key30": "pZv8FeEzDHUcLZGKk5RYQ75KLHSNAAteFfQrnDurwQTAZEQ7ivVNmMWdLY6AXt4RUae6GPCJid4E3MijW2SG7HK",
  "key31": "bQrDmcjkbvZ9B2z8sQKzeMMKhfDucLjbqvC4fN2FizsNmDoTKeLuX7K35Vi7bLjdmpvYhXoWn9CCTh33H9LSK6B",
  "key32": "YSHLp2FZKdaxhwbZGfanMaotYSpGLGH2iQBCMQLJpaFBicbBYTyb42P3iXL62ebcoY3Y4aRW2Aic3bjE2ixuuKE"
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
