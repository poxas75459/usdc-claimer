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
    "4s3WDGrzArNE8SZBampNGB61TQrq2SCZNpKAfg2XbGgQT5S8gU7gQrvzEDKJRLmsyRSyaK36r4z8HLtzSub7EY6m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21mwfT31ucvxhtSgZJ9HFVdMn5q5xumDHKg7rNh21ZGX8fUHaAeu8PChH9T5ag7SDUMUSuHxJpWhrXzTHk3dq5uv",
  "key1": "4ehE3NobdW6hrn2Za3iqvDzaW7BbEg3J6ZPPxv8oBD35BjSuDEQBKVD9d3dd21YE9Cq79K2MQcu91nvNdHzvMKez",
  "key2": "2Sh62KR1sp2rQQhEx25s9y32UyiiUhtaDq8P7J7MQ515zZPojdJWSDN4nhBYS9co3vbd6UyZmVMiSTMu9TeJ8Yd2",
  "key3": "4wgMks5ssE5Q1fRYhX1L8SYngJWmAWWRLYPXsVjstwMhtDYmsAShXA2NqSqqZN8ggTcVuwrrdAazCU22Dc6vMZ2J",
  "key4": "5aDeieyFrAZBsqnWnZTTDKP3wmGexeSzviWwV76xr9nDGTbpLAT9zZyjTwb4VzcxdyGSttqqEDsKCBV75HhUYKQX",
  "key5": "3yi8q4TP9rdt9NrsG6pwAvnHvgCpjRhW3osDn6b4JDg2jnVmtefNUSQRHJ3EUHNCfjH9yFEmyjvKYw9GGzTPx9RT",
  "key6": "4UFHvtVgZW9zXhvme1Ahsuo66iYpoZH8tuzXFMnDqbBWmoYkUXUTEoNnPocdZtj95LzWnrnw4hHegTR5MGJEDemm",
  "key7": "37WQo9Hh7ae7NmXVJ5xFbwgKyCYiji53bNgf9GeGYhUiy958NxDFQqPRhtJ1VkBhhGbd97eWbUNW5LGtCKZoZUH4",
  "key8": "4mySGHNva165j71H6dxyfREdPRFD7BUSeSqcmJaTvJfgkmj9dBnYhijkJ7d5GuiRPUksiJzKPPCEzFoCtVWo9WS2",
  "key9": "3T7xXbsFNqedqkoth8N9o71jvKybY8qhH8BitkbND3xRTnz3n4eXrArGNNGwfNUCvXwzreRkZgys5XNJdAQLyAmJ",
  "key10": "22wfhYvF9JqWbEwBQTfBJHjaVRxynNyMWkmVh6TZRqdPSDmyZDaBA8H8fv2zS51btMqAFehekMRvkz3HXBMuRpCE",
  "key11": "5HMHDnFTwe7qt4M4udFYLJThTZ8ZGn8R8SdqLje8r7umUC1LA7TMzhUarBPeNW6gTsC6sioZBmuj4eXZEDmqbipG",
  "key12": "LQ1oPzQgki4LpEKDsRhHp9ocquo3ZFiDMwuASWtvZPqeipKtRNXZfuY8DuH5nAcDNDFZu2PQbVVxqCb4debU9ii",
  "key13": "2YHzJrup6RsqsJLMNFT7H86JC6NtxmhqPJPd7m43c6xNs1K6A533aXqrAPvX6KXGYJV9eiwrke8vpSAUFA64PmKM",
  "key14": "2savXgJgc3ufpZqBdgkjGNErz1PXZvMEJKSarUpLNfj9G3FpHvip65Dhk8mChTDotBAwDzZeRztoPKmein6JXvzB",
  "key15": "5Xmhx4SSS5jkjAkq7NqRkEwRbeFNMtxkUcgnw3PUNhiSod8ppxoyK4tdH27uihz4oGVT7nTQEq3JdnvbnLt1ccis",
  "key16": "KfDpM1GeVZ8WZdWzEqDtrkZhv2i64NpQ3PsPDUVuFGQWeMSKmnRogUMvcSuuCLM5cyao3rtdSafKCvvzrW3HTnG",
  "key17": "p2myg4qKR7nbbMn1FkrjV1jWAUYNLLY9MGM6NjpydMUhPqJU4q4BuNfu2iNJADyjrz1TvCsVrqvP9X5FZ7Xg73y",
  "key18": "2hQTZGxf6bs6kZn8AWmpZjSWDfSCDCzkF5yrcriCurgYJc1hKDhxVYMQ2rhrek29wQnjyvVysFsjy7MRYThQuBni",
  "key19": "4ogcqBWrWbAPkf36SzRSPQdMW7F5xYZTsDAFkzsnwu12evC3sNq2KdEUsKRdWR1x8MhJHNkYXLk1KQSgp6EC8eXk",
  "key20": "5Xc6jFfGKKSnmUdZFz35SaxxNTHS5opYc4B8kbyvC9zS2N5HXHXWYnA2mjYiHz8TyNGHpLu1j6QFKH6ZzbKwLXce",
  "key21": "5mNHJMCVWNHA1T9ReA81wft3Q8epPNy2E8Tx49APhDXrvbpgVTpSDBMUEszRu6KktMJWtKQifztVbuj65zad2NLV",
  "key22": "4EoLNrmcUY2XisoZRTMPS8fRZwFJsFpEGvhwtSVBvWth4Z1N72Za8sCS2RcLVxhU3UXBEXsWr8W5ZyC1ukWZYja5",
  "key23": "4jFLDGuuWqkXKM9z2SFkRp8PxRyqDAuDE9cysSxubYtHxnVxMJAzy4kLD9GQ2yfEfFiU3iSu45wEL4skgNB6SFVZ",
  "key24": "mtvpFR2w84BDtM4Evgc7SGGRTae2b8AqLAfJWpQR2HEe6QyyiuQCr5bkgEuqpfcC7ZUCjcjHhx1wucttG2vnpRt",
  "key25": "5HCJTmKtBnxQLz4JusQAF2oBQXRk7YK39xR2X8X7nfD53dDhvXuHke8hGbJv4tVB7BzRqU3Uo19ibbWADFW1y49V",
  "key26": "2uWqnr9AhTA3dUkAY839wniY3BwGuWmup7E5magpJH5usTHU9DLhNFN8qUsc48vYh3jbnf9Eeo8eF5Fg2aFid86f",
  "key27": "2rsL8z3BSBVHuRFppg6qK2EK2Y7dWt7esh4TU2UT4KzxN43f6WeTFoBMkdrnMp6av7AkEPv8Ngnst6b4b9KvWTVN",
  "key28": "54SPGPZU8amKXhkAN7kbCTzu3AZ5LXSf7UWYUrPKhKgXwk8q6fNP4PxFYnVkUyAABmGP73RxHycSfjuFP3vgoibN",
  "key29": "2KBAwZytDFGudMSLCKSwUd46WbWxsdR62L7SsTJgy2nMKKU4LsNyQPgtLWRUbizVaY4ndix76HHwDF2kkhcyxzfA",
  "key30": "3y1441KJgegAa4c92bVgkvbhH6HVRYiSURFLf8HFFzizAVTdtHZh4itrrZC7rDHzEj536YpwS1Q4fqw8G75xKQj6",
  "key31": "5RW3BMUdQhywp6pWhi8tcHthM874YTbTa8GDaEKqcvBCExrknq5oFrEUHgyGZP577DWnjhCNk7J2aZmtPFVmKnMm",
  "key32": "23k41TFRGnjm8Z7KvwP9272LwfmhNfXAFzS9re7TjNsm3E29mBnj4j8L7MMTqWYEHPwiivwdih4RDMuu5X7AEnDf",
  "key33": "5VvHieSghhwvdKDMNuWi1231hwdEkBtx3GMpLgFbNpvTRqyFcrJkmdUrUuf8Wd245MMaE1hXhf44hsJdh5BCCQxw"
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
