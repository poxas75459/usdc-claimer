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
    "3e2qA2k7KKF9ihT3uCAdeEh5Uvx4zTWDhWYezMK5dPibHKYAYzAQLcQXiuJGoKkL1bDx75ydmZEzjzp29S8ABZdN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wfj8NLC5j1keNXHrKABh9ZFBnQ1NaeUpQwRwmyok8Zv3VMv7vqNedYw5bjJYGbkZYL58mMQN9TcNyDKyvkJF35w",
  "key1": "5EbuFqDxakg8xoGdT6KZGUEiebz9eEbrSrNgHcv6d9r5U3HqAYp9nLBncD8QxZwyTmCc5Jv95ZLxuJ6WqEm2hfgk",
  "key2": "4pPXNrmBBWLCjYNGqEEAm3TnkEysfqoQF9a7PNmFhsQ9Vgnsa3Q8BSUwkBx1zWwkxg8Z39Ki5hzwVFKJhtGTrVKg",
  "key3": "1arhhJTTd8UkxD8YePwQEKSLUNPwXpPsxuvDYB2pAQFYFpVAfLcB5BBvXLgLkEyhCEZMGGU98nPztB3Tc4xfBUV",
  "key4": "3XPu3CqtkGY7T7CAg5BfhmTrdjWtTwoSw9ZgM21RkoGknve26eDZ94vqBvjzsHLwD2fNkzH2sjZFPsJGG9hJUbsE",
  "key5": "5nt2McVABBSrnJuCAKhT3aTNBjHDbYRrGTuiucxUU4vN5fYDfibELgAYoLwdm3snggtQGyssHzQSKgpq8LKiX3p3",
  "key6": "4WhQgsHmZZxxwX5BDhyKUiQwVveVo5MKk9qQqRrBq17GPs4JueGMY7WPFcGt1ywacMRgG5jfabbKHN2wv3C6y9Nv",
  "key7": "439FQfVu4v1Tyuaq6kP7VR1Wr2FT8QaqykhoyCnjYeK7DLknYZuMNondKj99RbXjmzJp1PzUaPLACVXiFdQhZe6M",
  "key8": "5wPkBmxevmrxvJV7M5FPeUqSicUUwCqpSqaMNazqwunawgAr22jwhCLkT9KvDTYMmMNDRRmjnF9G773BmR4KXJHH",
  "key9": "5jPbANcdCD1RbxxLxx5GK43A1MahPE2Grdf3FFKeFoEAgCGfzX4UB54XnasyJf7h36g4xn2B2Xn5GxVezsXZYjGq",
  "key10": "5nwiNZChPVx3MqQzcHt4dg4ZqzyJdGjGqYCg9jfgAFGSbCFLjbuiXeicdTLgoZUuQ4CfuWmvd5ittZ1cxzGXJmSX",
  "key11": "2c5oUtphbWhiXFS2ycBpfh1uYh7uDi1BWhmZC9VmZCcLazS8gineo1ECNkZ6nhbnsFoVBWmjxzTEdoFWbYRRFxRf",
  "key12": "5SZvnzgTQ6qmB2NupwpMEbngVEWtgs4EA3CHp5GoZJzZrEvgZozdPwVTu51vjwFXhGzFvQyz2YYWwhSRTbYaD2Sf",
  "key13": "2MtP8MrQ5bMBw11cHvSWrmXeESpRfbdS9aEAg4dC9td5yp3kE1uek6BsyoYFqrd8gjTQEeW4bgk6Ez1zRfE9QWe6",
  "key14": "626ohGUd5afFpq6gJou9QyehUMeKiFZSn7sSf6vbyJLAY11SDfhRpguRwrkaR591jB8imqpZjiaNd4n4rfPcgUqA",
  "key15": "4Ha4BmvjvvH1thhmHUpBnVTovkAqbUA2G7vdrrPrzN41BAP7Va7kMR4vdh2oL5VmL6gS8WcsbhbttqWKG3HcMnZJ",
  "key16": "3KjprHQHtxRzj2x6yMtHZ5e9vtQir7D8szictMh1vBMWVE9cYQjipLLU4ZMN9X3BmdX1DoEw2CD8mcTTrDZcN4Pq",
  "key17": "5wYJYbLfNrFeY7vcQG6snBb5KgXZB1ew8WtA2h9TGSPP9n7pXpcJiztVCBfgTrZSSZ4G2ubSn9UrwMRYnf6M1URk",
  "key18": "E8Nzw6CDQL21MXxYLXAdn3MdA7M5Y7CoXncKmdFAHzW6KUJZxdY3cwhi2iJjEiMdvtEPTjdmLnGchcWXwTJmW9n",
  "key19": "5nVj1XACbMTZ8asUdBRv3aHv4PDiEKJwxC6SmDickR9QDZF3nmbgiW8nt2ge6wAZv4E8MS9F5KZdW8kHbKP9Tdgi",
  "key20": "5oW4VGoyFr4cYgAXrz7rct9gNR4cUZV7ChkBNVZoAMbQqQuESkHG4nFtXny9Ujrof5eXWTcgJaCfo4BowFoUYL8B",
  "key21": "2zbtb9CZJUCUhFZWRR8AXi4CJS5UovRiPRVsjxZitYR3keumby8tBqCFNibfUak5mPMzLyEKWRyeuk61g8Ad82Np",
  "key22": "4DxHVkGSDEtRFHJSWxgKiWRhUtTPLpnD2Mt3uNLDDYJSShvQfvZM5ppPpxcD2pPSztR2uZmoypMQq71f5hx152dS",
  "key23": "nJUJzaczbeukQL6gtPAmA8gVGY8DtPTPGscxFHEHNG99jfjLMDrYbKaRi12kM75fLmwcAaqgNEuKR4sxJ7RSXvs",
  "key24": "C5ZyfSYbuCxgxRCzwwyGfAswrV5YnxNBMke3z7MRTuKHRWuYKx7f8qycucC6UaTaWQZHiPJ6vdVA4Bi1cBgGwq9",
  "key25": "2VDRtzEQ3bdGCzuaTWTg1eBryL1Tx8Mju8G1YgD4KRwxJrcpRq34XvCb8p2fDf9Sn549KgbnysXsY58VynmaYwFW",
  "key26": "2uuMNwJHZDSoa9b1yxhH8PoDZB9ZcEv779RXfUEBXk382CnQrrzFfeAx3uYkvFPsasAbW2nYTQ21EpMfWceehSup"
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
