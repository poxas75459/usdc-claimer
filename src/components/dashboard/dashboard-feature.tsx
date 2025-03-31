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
    "53HPhwawtDrGEi6A6mXqz4gZvSjGd2PhVa2rE8cngsputEQDLjCWDMVz169MCRAnj74TAGx9xYaAJnmaQ53nSKgT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65HhmfpxqKootj33nnZYd3ohQxhkwc6a6NevT8nxEgk4pPA5qCvtZMHSqcv2PRRuh2T2wQwqtb8dh8YdEp2J1hpT",
  "key1": "5eU6idcvUKEzUwk3wMmAPoKqfZpNBuidvUj8eFwkAitABrVthB7pZUfMiF6qVFdrzk34ya3pUV87PLyfvf9kFHrD",
  "key2": "3cWAzbBtCPs1p5VH6gHqY2YhhgKarEUzxz526CE1TyjzneaXVt1yAnwNwxpfsq6dCUYrBpgHwLPPFrsMvTbRcHvX",
  "key3": "2VGpBpbadja3kW5jP4XQazFihZue6eFmJwEVxwv83hdqLtju1Dv4rQvRMqAmXST1ihpZf1n581pqx9mhvRhzos4y",
  "key4": "4LB7wk8CuYzbikGJAhuVRZb41Z3TnVCgFHWmdMRo1iZzZjS23YC8pkvKNkcETQdA78eqwMMHCABWs6bvyCMJgS7f",
  "key5": "4xLfpC8tF5sTQdxeVAnB3kUGRYKQsUXC8ikQt3udkkVwkBj9EWPiTDnjS8EWm95pCfALXWDkV1YoyTu54DBujWwD",
  "key6": "55k6Gd9MsQPf4gMwKXvjYxfua5f81GyS1h3JVZDnpRvjG73d91HQcB4zk2VrgVzs2VPsMjAW4kzqyvnKBtbY8o51",
  "key7": "5VM3zKrmMkr4UpHQwd6QzyHAbHF1RqtkyKdwRu4kTWK4xVD1NQ1WEojH7WBhPgymnrxzjvumWbC15f4geiD8NcUD",
  "key8": "5fQ3KtxfHySe2T2UTVEY1XatVoTQBBobUDmzycXqqLo6QbvpFCQcPZTuwt13rpAZgeJo9ryBAiN5cP8mbGxHPRsK",
  "key9": "4fydiny3sMiDocAXyqihu7gaNQCjEyCyHbyixL9nny8eXfd68mF9FJbMo6DbR41thsCVQm9QskQj6f1PfacrnRa5",
  "key10": "b8bCZHY8XTsyNXzYWCtukBGjLtPFK5hSVtsr3VJTYk5UGQAvZTJTV8Tt1GjJVLje7wX4GmE6vQ9WMAiWTurYhkH",
  "key11": "3zVW5WbwyfZNUPLGENGhPQxj2C7SaZDadvphM1g9EjpG4KVERiRsYtqVQNZVAdjr9L8yLsrXC8BWXE6XWcqCYaWb",
  "key12": "3ioSSkkWw4u6orL6ent6TJR8r1qwyXUaXuBMJDnWtVjXh9iDt3ZpkdWZMZVpGTCUMt9aiiaGkQgA1C2NaT1Wpoaf",
  "key13": "5rT9AudQKj7z91qWYH561pCAdMqTCVTWFv3rgBMHYSTKa9GnNH2Gj9jnEKShgEYAtrQPNFQ4Bm1bQiamUTQUz1Q7",
  "key14": "4Hxur5or3s5smqxeDaT65gJEa2mzu2RiedyW1PsR4Wtz5agmV4qMwD2pZqEiND4G42vFWEPf9fm2RoyphSzPim1n",
  "key15": "Kd9UVRHEuJegmCNq6V2MvtUUtmyYnQ84k79bhDP5jAJtGq4JXTfWFonsYnE6c3nj3EqT4YyjJHkSX1BYPzcnDeP",
  "key16": "5HM7HV9215X9QwRmN2V7KuqhCnmgAr5jDKPrDNpc6sMaUXhpYAwmNqxavek3tEAXUp8chLC96p8DaXDNHQFGXvDk",
  "key17": "4JdS7rjBobWhtGYUxcETs9XxF1ahQK9G6ZCmD5MeKbE44s7iqgyWUbLvgnjSqt8uU7vWzJdSTi3nBGCh5pGPUb5V",
  "key18": "3V8AA4DsrjeA5bPhg3FArYgNpJ7MMjV5dxGdbPyuvvZzVUDDZGhmZmh47Vpk4TjxixqUQemxpNo2uCL6gNWfhyze",
  "key19": "4cbFhBSx1txGidRQPKTyUSGkfiFJrR1vSGw8pAaZkDSAqfHNxVbdhGEdrDYwbBm165s4T8khxsmZNLoTX68JubPd",
  "key20": "4G2sntDFW8CjQaqYSmSM4PFF78B89ChdVbYWE2ZUyoMWwUCUMmTqdVcrpzMXUBwWB6BADuDocPJ8t4gyRzjxa9uF",
  "key21": "5LvdWWqEp52QwAqNAgXakxndBw877pWChLwcAmEbFRWvoY5VDSS5k38uUiXYPHLzoq9UcT6nGwDELBZBMymyTJXn",
  "key22": "4X3FPzXxY6Vodqeo2kQWxRN7QbSVJp4WCUahXuZS4oiNPCaXVmA5rmghSEkKX94cBF3Qj7AxhgpXKnF2XWb7QMmr",
  "key23": "BMd7meiP9fHJazN8i8xq9R8pUZ8ePLdFxjABgkbua2E8pW3hypwkJvjY8QpcHq49Bt5H6cC26vqdNVpZzwjftRF",
  "key24": "3bQvJKVjPCzZzKUWuJKc54GMDfa1oZBcQcPKnPTsja3MtpJyDUSsTvSStDG44fMcFx6ryLNvDMp7AqAc9MdZUUXS",
  "key25": "3ffU8T82RQNWTeK9AaYk2itBqCb5nZ8mqwi8BGrx4sb9ha8Jur5AcD9DwVL4nGHAzU9gq6awZG4LWpxQw85zFFrv",
  "key26": "5S6CQzLUTisFwKpyRjJwVZnb4fHGfMMskH7bH5m9Vc9gTgmJtweTFz5HGpErHUdM4JdHKwrrpeXjNcSrvXk422Jj",
  "key27": "3dp92JVYCSWS5tqiVzjqSh6pV4CLiQpR99MtKbzATMmUfkFEPfciBkqneQXYaNp9hUzY4UsZXBC655pjAUYevUL3",
  "key28": "5Mwms6Ci4z8V33DPEJk6ihGULUovZY1WerAMZWJpJRjcGmKrV7FpX8AM1L5qpcCGoBufmjxLf2HJnaMnus3RhHCz",
  "key29": "QPP9GAFeQyLigrGnAzbgocFN2zScBUvZZgYcg27kxpyLYXHvMMdo19vBYdo6JWhzq72bWrhEfzfq7cy2GyRVUmJ",
  "key30": "5AUyWZghFMhL1edEdP9ocFpcDCbZERTzxaMB5Z4yTCHPdmwaPJzjwtt97K4YbBxPjFgCs4X1pcBJfLTPW3peFvkN",
  "key31": "3ooYqds2RCyUUpwQfXR4VteJcqB1CN2rQVJp6jv27a7Xq9gcG2ySxsWFftqpUbKJkmBP31oh71gA4JaGaCDUhApX"
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
