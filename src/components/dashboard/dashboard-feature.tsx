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
    "2v5B8ULPjnkscqtTWk5kz9djPDZB6eDWTp9nrpLNUX27fwPALSgMvCWUG82bVguisMsGkSpwJTRk2hvHwWkqjVwU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MMayt44Bp92Ht3SAcrwQbgYxU9ziyyuPpmHN6kNNE1aJsqgJPzyqDuBRu6WJmugnLutti93yrTwnWzMX9zSYbyv",
  "key1": "ssQjuGxxBxQG7gLhmfSvZYSPeWCi2uRwbFPChbQuiKCJQJ58gpRA23VA8H3LB7tJwn5hnJRc6ZaLW98TfcvTQP3",
  "key2": "eDg6D6fcbKyWSZNdNw2eu5v1jrQatuCXBkHvJ8rRiPYeBrvQDLubVhdB9oUbtMrfSLeqVsPdAnvGork2iVpgDKZ",
  "key3": "4mBCqJgCDnbBHFidzZt2boDYzdjRixEJcsNXjjNftexmXijmQAXG4HymYgJ64rJ6YVuKDq1AKG99hGMZJmadfBbQ",
  "key4": "9RFkyYaeyeP68oeEVdZbPowgoZjQ5HWhCUaYBDqFqUVR1FY8NDzBmV5hohLCgKL8UYMD5SQXSsn9qngA7njwVgN",
  "key5": "5a3Fj6N888KoRXdn2Z4p1E4AZGf8NVAC9yF9rMPDYTbW89CDQn7A4fP3DQdVW2XV1Gn1YvaftEQ1VLtKBsTsYV3z",
  "key6": "4gL3jz1hgNkL9rHp6ZpXAdbe9w477TpVSPoQZ5yPjyorvEyfD7LZFhHRJRVvhxtNZwUeNpvq88tddvCnB1Hwf5kv",
  "key7": "R9XnsdtPTmKnsJeRw5wcz4iQyhDpivd2pCsNHqurk5S6p8u9WLZak6Eb92EZEQL4BhVQBjzDj3FgXtdHEm7UqtL",
  "key8": "4zkrRXuXzW9xZXnzu37eyo3y3Tcr1AB6tCEBJq1CZt2TQM44SG6bJVi2BvruT1N42ujVCN3SZpswSZNh4CTvRU73",
  "key9": "4bHq9q8CwKTLriLrsyZF3zeCb3Pzeep8gEJwxBFQFeis4ziptBbiVob8qJtZzoJG2na8k7f7xM7b7bgf9VyPABBb",
  "key10": "5ExCRrmehx43SyWcQEoKjS1DTWuk1F7EsW13DC1ZACGdCMLnWq2faTE6Us2GugHix4XnWj1pY8duWtwrgjD2fFUm",
  "key11": "3asoNPmreq25ndcAxMZ4dK6mpQntDqogaoS5EniPVzVoD8FAw2qbg8syeYkjmfWnXUkQTrPRzrbgivqUhqDy7y1y",
  "key12": "PG8WnhMvV4FYsUaZJmT2VcnSU6G625ugNrGXuPoHfpciNwmej42o4jLshD46yz89vztsJ2EKttsQ25eJDetryGZ",
  "key13": "3eQHznTc51rr4YXXKAWcpnyJTXbTgE2yWyXz7yuodBNYwqDyhV8icFYiFivn6Bni6vjdFLdbkPwaUXbHDsHWZg9F",
  "key14": "3LpHPfeERdn4Ag8CirSQUhxK2oAVD9tybCjYXygf5jbddzH239JjH2MoBJXjRWfz9vCQePshi57ita3VVLyvvFd9",
  "key15": "4s9tAHYMptSVTyMx7PeN1NRQUtzSTkDGUm3mD9Ke7pziT1sJ7LNpGGBoiHYfrApQU7SwWYjPHNWufPMJEV45SWpa",
  "key16": "GBoR83jBfReKERHjpjvVYJ1NyKA6c29sMAJnQeDYD66MTWdkyBecVmKZyMLYNa1cSrZUqRiD4Q7TVAauMTZk41z",
  "key17": "4bBYGU8Uko9tEpw1mb8bCRr3b1TAxAHh4CAxGDwYS9mXgbwcG5jEPW8ux9G1BEhc5HB9pn27NwwPJK6R5ipgPdQo",
  "key18": "37zfdfDQHUEyvCb64AgGsHNKspNX7CtqmFtr5JQdFMJ6yi2Bt8zH4gr9NPFJX498WYEhzKhBSqrPdFRrSgR6Jfbf",
  "key19": "5ykpioJM5E1no9SC4B7bjdH71ehNaLFEtzRkQ1MevpyeRoQajwQWZLY8qZCCFU2cRXos6FJ4ojefFk27a78bQnXK",
  "key20": "3qf5vpkAJjvJ5bteB9WsGcYbdeHB3vuyxARwPLtkF7TUdHAciHoHfvbCdzjjjNcJs1H6jmUsawKmdDnZfEvxC6RS",
  "key21": "2dH9Vc5U5jEqQcRuhnNn9eCW4pZBjJkLigSydG6fWSEghoLnh28ckokNYNJUHGU3ed6gno32AjXR6y2S4iTnbcqW",
  "key22": "5dw15XVauSMM2pY4Qy2cg6wx1nFzx5yxtjiHcU9y7ytmLHBZZCofGGSks2R7PyrBGC59U8qpqhNd77kV2EYiZRu7",
  "key23": "2ugAnu2VQuRmCKw6Vus84obsuu6ZUQQh3fbbQTMVYGHfVHChq2LXTKcCvDSeidsqtpiobaEZbYXpNDqsnXkCUPkv",
  "key24": "36r37omTrH3qAbmmDTg4rzXqxE2SRFAFVp4smihD6T3aBi1Ee8hYNXXNpV3S2Av3LicWbG3SA1fLmwx4TFZ14ihe",
  "key25": "67BDS6zsouQRgrtLcXMKBuGtt2JFwz9cbqKhWhZJ5NdAbuXZ41Ta6iB9cDLUAgTQCLm9iq542D5ozzhqJnFjbW7j",
  "key26": "2R9uWTSu9ADEWYncXqbSMa3PmSxzq239eNMboKzHmLPM3Shh5NqyEn92ENHLNL7Ry31UZzXAwoYieKB5ADQgrdaJ",
  "key27": "5RQkZvHN8AQa2XJHzskaSjkiQv7XczmrKUq17hQzca3qtZjzXvb9SgrwDNxb78f1FZgDby4E3duZejB3hNHvCib5",
  "key28": "3hUoHBptak7PWvcYqnw2VBnCXFCDXEzxe7RMeEZGnYkbTozkzeS8WUjovFnwAFwv4W2xFfThGATscXs4j6SyvR58",
  "key29": "2wo7xaYbqmJCjR5GaSVPhhqNtzEVT4JJipHPdLLDtnjc9zckNcqNvveM9waXkmwmX5maQJeGnmpkKCWBJhq4JHZo"
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
