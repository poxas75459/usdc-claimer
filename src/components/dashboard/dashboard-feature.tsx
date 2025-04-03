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
    "3D8gBHREeQACYWwZRp7sEfML1ygxcbXoo8fqVWgmw3aYGVpyLVtbheMzA4TapC6Efq88rtQ49SYLun6TZGABaLyA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8kuytJRmAtZJDDZS53HQJ5EFzUbsuP3BJVYiuX2QaWnerk8wDakER6SugejKmT3KPyc1hUSNEJ7BknDbYXefBgS",
  "key1": "3PEkhF9TqsUvWbrTCCdGDXH13iPDLcxwxQCW6r83EcXi528i68ECKiJnqWwmNm56YL5KTUu3tMj9X8ccRVaH5kA3",
  "key2": "2ev1bUNJh3jMrz1aBvK73VbTJUsuCXKiHtXdg6jN5np4rxmVsu5oiiQwBL3D77uYnwr5dhwaWLW5uf4PJ6NxCJfJ",
  "key3": "NNCkRw4NfF8MLtxPQFzG18hikND8Mb3WbT5cQNQ6SLS7rgPF7saMk2eigWaZNxw7bDK9caazsMTsBUBqusDz9sS",
  "key4": "4hAifYh7JjcnAsayB29LqZp8mXbTW6926ZNusp7cX5GZ8xdEnK3fE6FrqeNG7jgyDqzMoTt9pGC4VNp8hLWmiV5u",
  "key5": "Ct5EJ3wCf3kjrp1eVHshi87b4rS6ccHGhvYYdHooFHByM98MR1MFm3pupRWxskja6noM33ZPn4HKaUoKvxDPxug",
  "key6": "2vkhzgFpq7CkcnnUbYA586wxbXrL2bPdRdLf8kFfJiQajoGBgzErZAWGhvVVRgNZFC5gd13aUAZmWnFSCZKXJV9X",
  "key7": "2PSfF1ZH77TtHXFuu8y6S5Aewr1guZosXgCXk1SJPi9F5rTdhCZ6TQxE1HGSTQyhyqqNEsz8J1Yxeb8NaYRTUq7Q",
  "key8": "3pi7WUjKhuPyv2hJ35qSxYZKtj1GF4cEEQC1SeqMrGQZ36yqceL5NcewRaeAnBeYph2y2BwqmQzz1xgSp37ksmC4",
  "key9": "4iMUAfNq1XWnsei5pWVNsGpLdNJ5NPpQZxtcWkhrKtn8FvV78vRrZv7kUjBr2h7XKCuPJRxJwfeBQ2ANCyMeuiD1",
  "key10": "BsAn9JEtFWA65HVcXmJR3PbiLz18qr1d6K2s9PDz3kbdiztwtce1AnhkJMxy4ZxpSR1ypxU4njwMVqu2VKiiufc",
  "key11": "5d4Fm4wiMxcoS3saWc9rTEo2GeND13oijatPuCgCNXQ2VkbvSE74Tjwm2MFbJC4s4dLP64YR6RAD9Rh72TWSQHm2",
  "key12": "2hrXp9wyc6AC6eNRrUhv6TSAY6rKompzSRpRVjkna6VUi8yoeMxni99MUP2QeDT9Muyqm29GSFeN7sD4Wv9fbY55",
  "key13": "4mcigrEA7xYf1M3KTVLCLYUPW2nrdQpdaxFZ631rJAML56AUdbagidTGynopPFPhN6gYHvAQGckqa47DtngqjRfj",
  "key14": "4Nr9XVb9JLMTmCy4Bhji28jnZVwq6CEzmRjuvpe6FXGqKtPtyLdiJqFC3MseSsZkbSTub9DMfKeNpHFMHJYfPCWc",
  "key15": "3Cttp4dRwXshtrHimkQdm6D9aaY53VVEDiWqYHZhmTZgu5ZdoMrjsTKP5xPJPHVZvUQm8mY4nPWHxv8MRJ6PJiSX",
  "key16": "4toCN2DZB1JrZobdgFGhjDwbdwTZM8GuFsRhgXZ6wshSF6o95RUveUJNRGL5zG2o5beWUGs9pECqbMatWmX5zMdW",
  "key17": "29ix15fpDdd7RH8sA3n8x8th7LesnhUrkbbY9oEU6aQ5xArhzBRUQ8WcM8uR5aPrWK123u1MJHkaPw8KfEEkpDdq",
  "key18": "4qRKY17nfoCpFc3xXfHnssopwwFvCnPZvgAvy8nrUKJNzXPy1LR8bxMFzG9k7WstX6pmLcfYmwKppsqtW3VsM2ai",
  "key19": "4wyffhbLT9oBUc1GrVP8mZNkKtaJhV4PYWsdZ1YFAPYP2X1xsZov1AtfWK2wKUjCdCFm55k63XDiAqUCTso6a6T7",
  "key20": "hZrPyGKacMux7HkCkR1C7egTeqikavH4hLHXdVoNPXrTyyqVioGn5KdL5vppqS8WMgt5Rq6CRnTkEKbrDWectmL",
  "key21": "3meTHtKYXgDi3waBtrrzTeifDD7A9KgQApVYD6ycjAWsCdXmuVkDGDwa6oDS1GPmFiCf3ntb3dTjADXeAreKT6Mw",
  "key22": "3mirsTWUpn8tCNsV94izWojPTD1jzJgHWHv5h6w68rF2Pz58W4uUWubbFr8yRvKkCGBPYbGJZ9sCjoP4iKyJ8AiP",
  "key23": "5WBqxbDoXqvrky6mjPpjoh8CMoiHxQQ95JPEVdfdzg1ZcqJuntmKQshQ2rbCz7UwDw8h6UXUoXfmYkQQkgW8EkyU",
  "key24": "1zNuCG5xgnBQCk1ES3ifJ7TEbUvnrw5bEffqo5LRyJ3iE5QyLzGcYGsdvm8nzXKkkaZgeejDdL5wqvTTTNTWNAw",
  "key25": "5Fi5sLwH3DcXMBSeghEuiuHfufZCuTtchdzqQghU5LcVNSVZPuwi12hVQN31ia8Ni5JNLWADRbo6Tmr6m4L532CY",
  "key26": "QBiDhkHGnBQLyc59SS4Gk85YXWxtczGxt7oyh6L8Gg9xwDLC1KTPxrEGRKckDYyatYwMUyjkEJpXWpaQL12fMqz",
  "key27": "djsjPA4nzGbwbMYESWWXZY3QWta4kUCawgjhgTjpCvmM5nWpBKNQV59kAiFCCaXJ72452oJCxSQLu8F7GmGXtdd",
  "key28": "2Dgr78f9TuWvce5gNTTimo6nZrgtMNcU9enJLSrQBb7mazFTKwRNqTsr9QW61Q7Psj3qzcFSiCAvnhZjY86Lbg8x",
  "key29": "SsW6d4xDACzRVdR6ispRz5cV9bKk66LupKmBmuZALNZPztdTNsY8yeTnVrQX6PvRDezuHeHB4BFXwXkGi8rq3T6",
  "key30": "aNYkQcy5RdQMTMYkFSDafQPCNXrBb9KaaJ21hFTJfA46QqGgaTirjkSFbZx7i6kn2yxUXtzjtFv9SoHdqsBGL6m",
  "key31": "67Mj2gZ4Q5wtbhGDVA2gLXZ31JE6FKcwv3AZ6pMziiZVh9gJzAY7mghDVVhU8zBDcLackpTq1wnitRci7yjHhaP2",
  "key32": "3MTKZAjdFSTekmL7ky812xQbu71wdepYuWRsaUBfQ3FxtYjYgCjPph42j9ag4qmCJAZV4VnNiwzfqwhgaUUJetqu",
  "key33": "1L8Xa1oU34R11AreT3mqMWLYVRrteUR3vtGM9vqvpvoXKdG9FBGHktEYQYW2Tuv4wjzWfLrVS2Lp3dhWjhGS4po",
  "key34": "5fudktvsP7L7pSGvd9DjyXy8XTgQuKdYzf7S56oWYC3hqs3GmgTV8ZzgHY4c9hKwj8Pr7x8eNWnzikYgZuUgT836",
  "key35": "4TApsUXZFjuvPVyTZCtqoWfAkhEyrr6Cfk4SKMnZwV6mNBMBCgmUHL7mex6nVvvNQ4VTi1mN69HzerKq5sRKgtoP",
  "key36": "4fsQyWKBzCkYicQQLaWWtkszaafYpA5BzowW3wLT14F9KiMRQsxDw7nHcfkHuZqvQthw315d9Qw7xBfkWbeTqxdP",
  "key37": "8jCrbtjcho3wWpXaUYhuKjZeKjdp2eF5vcQWuJ9sQWBiehmsHFSptXDmLNd15Cdnba1veJYSbM1xrSWPxitsB91",
  "key38": "2DjUBAaWeDyFpkz1i1uZNoT4NdK9NyC95VTH8oKatkD5AESZDSEZetVEZHRiyKawVNssRbPyMnXr9mkxNFeXR7NW",
  "key39": "3EcsnVSfvEavHTLCA3s5YzK5LpTkTXQmavUZcHGg6ZykxZRshW98UNUcAPtgnHZGRqKEuMMhb2NWy7qHYzyGX3rW",
  "key40": "5gSuUbf1DbCnD6gqcpqB4zBToAhPJWqLkGKgRnAtZmmpHdFJ8XPB56k5gFCJ7JKa7mnVtMmNmh45fTAHtEoB2zim"
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
