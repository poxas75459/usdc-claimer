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
    "5BVJe3fApxd7EnZ2NFRgfKqEGt6zJ2Z4Rvargb1b51RyiM5uoxM5MgVsMNBWSz5PWamigg5Kt975tHCoKXbmV1eF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZQCfvrr2DKrp6VABctsFz1XmfLDqUyBoreoETTha8DHYpMHeKRCrPDFcpJHk6M1gVRUoz4dCcjSUwftdgUaX5F8",
  "key1": "5BGiitc9KGEEUfc3iKy58SKaxiRzPMzHhCgxTZjry7eB4MM7eAGB76v6ephPZLBzQnp8y1aTE85z32XR9L5rNFGM",
  "key2": "2eqMfZggvWjrrYuELtPRqvPrBR6r778jADdYPwBoJC7yW1E3X6EBzVF8EAAdNkh1FHTstaeuPMEnz1dSuDVYFnQD",
  "key3": "5sPLwoYjEBctBaHmKgmJUK5ks8gB3EQb9dz445g4TcNYkcywsgyu3pg8KZXeiQX3yh4iKDGA7gD4yiTh4wT77de1",
  "key4": "5STGwDzoxBDsjQhACJd19hBVWTcF58am44HqzrYVzLsnn3ufMbiQoGLpp9M9tY6zQMsK6g5Nmdzzs8hgjNCm5xLG",
  "key5": "2rjpt6cjiLDRG38oajKGU1BPKGvRSBbedwGDd7XoNbYKfUULokEJHcP5pzSNjFBNfuA9XHWsuCzZ6the4rNrPwjF",
  "key6": "3j3p42w5y2kMidJVa2wevhRKxmTKDZh29SmX7XT2duL4t8CZN2yV1f49xN53ya6cDkEYyTv7V6KwfqcW6P3EWeJv",
  "key7": "33gADnqUU92b9dcrq9NUFZHsx8rPLcsdeLqARHN2qYGgWV76yKzTxyH2XXQmLhLK4qBea1iAKppQdeHJejGqNCTS",
  "key8": "5XaSe77QSTDiehd7zb1jBghzmH9J69JbZ8v3Vqvhv2E31kdiE6A5wTicyKKYSdi3CjromHDB5VNvGJjhHGynfJWb",
  "key9": "4ooKqj4n1TSibyNu7gXG9LXfvJeuK8n91aBDA6npuDJNfQEKYWkEEkmEBbQxRCBRnzhPVWdMHkQjS2Zm2n1yhCkg",
  "key10": "4nH4xvPDZYumFmbJXnxW9GkkDq6786pJWrg6GYufghpkyGHbGzvpu5JqmgVYWfXJ1JenkoiCqR2CjXv6YodWMJc6",
  "key11": "2yEqzmMN6mXBPGhyUDiCDJfGWnVHCEiQXGd4aLkuHiR3Lod28v9Lpwh3sG8ckx1LfXchNC94JXiPbg4gvkL5LKtE",
  "key12": "3PCHhekVQayZfFCz3i588sSYKbikeTmRfihWaSuq3SAiAbNm7aWhhAh6PaGRraq49LW7nwT8d8YTpY1udgKFwSvS",
  "key13": "3MXmTdw4WGaX4uMZVsAd3uWubaeUntrEdhg2abnz9nb1eMySmGWJyZhNw1tkGafeKXtTGAH9zXwcwhkQ3EMcsa3r",
  "key14": "3Cj5xK5fJE98jvyqER5iCfY6MP6bGGqShtGwcNFdvSjrSxUECG4bxVmuEDHeV9BCFw5DVaxwwSTHX7pa6XYUbmk8",
  "key15": "28zNgXL1PjzTXEP94QGRB8ogvjqvE298i7DNqBRC5rfe8VUABS5jtsx4tuVENkQepFWHuqrNUmVqe5MHkavvMzAG",
  "key16": "3BwkUeEFV8pmieDSjMS8kwf2ukQMJ5zn8qTUKLdprS8vRVugH8QGbg1G86xqFC8cwDx8zpGSnnT2Wp3UEcLXESrc",
  "key17": "5oJmdWAm5B7F2nvsQ3nm4hP8bBzP4fLphj3UVbTAqfnsr9unFPych7suYRB5NzT4KNFF2yAL1S6y3DPJy9UFRkp3",
  "key18": "4gWJ161UyGEq4XPy2EDU1M2PACd532Jw4qTjrQxq2Js7bMjjXanqT1fAeZMmf5KPNCQn12vWmM6DjNm7hmJRmT8N",
  "key19": "moPRBRRiqZ8AcBxuWmfLRAgnwzn1PP23p1XP3YPkYzKv8aCgDcjqq3X1tfVUeAYqdH5csUe7yHTmgwTS2yddECo",
  "key20": "21CrnfHbTxTskLhfFRyRGptcsNp9TPjXJcpD9Usk8qJQZkZqCV9VTWYkwYSmTNkEm5yn7FArhqs3UwwNFyz2WjkX",
  "key21": "3ccV3NeDJSAi8ajNNxg9zqovXdyMhaVofnmRPX3ZjCnXXRkSMRmAuEwWWX1QVm3GQtPpgQX1NpGKKFW1N1U3Jtu3",
  "key22": "2KJzc43A7c4LY2Yvp1pozCBJWw4pqKxgGnx6xrafSwfConZUZ1JVzPvW9yLqeL8gHkXb75Sz1Fqt6BiDnSteJovU",
  "key23": "5CegDMyRqnH6fMDF2Mq6z1EaJsZ5CVk9bpX16oxmQ777vEj6A3BrjinhT5ADmexo1jNcakRJBqktkmmKhL1Zr326",
  "key24": "4An4YCDFzdot54e7PQZAr8Mq519eatKoa67n3XvCE1G9mBrsKixNaPgdpFEvdZAY82vjx5ynede7JbKTd6mCfKXD",
  "key25": "3RpCToLGrBb6xGSsw7xjmp8DPuTNxfxgxQ3y4FQtnpZmtm77Zkd2KGwFBh1iUUSn6mHLwpEeWpErjnF5nBoG1T4r",
  "key26": "2dgQzQ49a4His731BPWGjM5kgvQu4M8odMbd9TXm9E1fjZWcuN69qJKD3q9cgLzgjE2RjN2HuMwAWyv6KEWnFk2D",
  "key27": "3AvJaqXYK5jZayoTNX8PxuTfmaisD8jTnf3UcR6EBB4wv8K6cmAXpp1vtDyTBnpXV1KSUtEjqzmNxZrKwYUZ7WUe",
  "key28": "xtNGjrPNAuWqnbALmiE65Cg92Z6GpLXvvEdC7v4GtWJgDGyNcUn7eYmiotznWYC7bpDEJMN1SRVwweioDCY4CLU"
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
