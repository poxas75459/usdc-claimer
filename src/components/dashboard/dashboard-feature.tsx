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
    "3dKecpKUSkc3u7rtqg3Bj2AiB6qnAaTd3VgeHRK9wfFoJubxhbiM53woNcyVLX193aGctmE3pwkMgttrJdJHWRzA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fdgcv7s27KbPkjDEJ53niYwDrVXKNuATqQx1BRAj2KmXnhpbPCbAmMEk6kAJAvwL9BkEpd3xDsCu4wC8jaxcka1",
  "key1": "44u54krHSLfAcDZHqkPhuppRdM9uKd4zsGr8Ec65jv5J34zWHfo3adcSS952cJRMYBc7gQusajG1FEBEs3vrXxKg",
  "key2": "5deTfiuDmb57FK9ZYroZWBZGaPMesM2Eq4VM8Lx6PaZpz5TCQvCJX5Ud89SXQdmRrJcxTiUxsJykyA9tAGq1CwzN",
  "key3": "oF1Y1vjZmjJU5EhYVAHDPPpXmVYUtEEGVyij9LYKReowYmqovzuGo3VXdSTQptmFNFMJpHjM2NhEc8BuqW3udoG",
  "key4": "3KcXJRUmZVg367Ebq3k8kc5SJfE2Cb14QRdVzRP9Qh5RVHcr5FTF57D5HzArS7MCRbfhsYh1rJh2923JnyBzHb84",
  "key5": "4iUJ2DWJZvDuh5kqWEUtxuEv3oJam5i5gFKeGkwZWpoYTPEUBCqyfVcN5AWDggWu3aHk5A3C4m1kjACCPFWSAhQ",
  "key6": "3YcHEgmhUq21qPikQHhBiwJMnqSYSvG1344mRyq1GpG24BoehWGZN9HwPwN3SFrxmzY9iEsPxcGQfm6gQybo9yQc",
  "key7": "3v9T7KUZPa3vx7KX7kdMJh3KiG8w79PU3Egf8SCrG4PToyiZo2KXEJ3RpsHqaDt6aPQ66uVL4xwYLDnaNEsQcZRM",
  "key8": "2QhpX4bDJii8vDMnayCGptp1CN744DF8D8fieyDXSkGMJvkmfCG5tjt56oZS941hB7AtT99MzBcee1WpYKc6o5S",
  "key9": "4vuQn4k7DBc2hDTarkb6z5j8KdYFPywniwiGYzJURooJEjtJGqbPZEwGmU3yfsJtYXsj2pwo5hFraZoDoLqQKDcr",
  "key10": "5qjY36VKz7QxtYyMADTgLGwK5y4PVpvTv9gHSK5564h9eUu4hnzGfUE3Q4AiFGtMzVMwg29Y1ZmTf2BvuycNB2Wd",
  "key11": "52uwcU9N5cD2spHha97F4AzkgEM7J3nmfHCdspnWFCTkLdbAJDJVWSdK4j8qYJALy1vDGfU5iGuJXVCQCZvW8yBZ",
  "key12": "G4qRWTEBW9t1mmTnttCiRTaWenc41bY7JFhCzZNscTjQt4v8dLqUkf1rinJtcC5XDNoeCJaqwFybFRNN56qGTnt",
  "key13": "pSg7qkZB9Tg1diq6kwtGxdKHKuzC5n59T2XCU3zowSDGojeJUxRhT6HkaEdrfcTEjpYieiFRFom6cVMnPz8pBwM",
  "key14": "sWXFiFpvs8cBqKFsDBwZ1tafRPvn9oAWmnLkg9VsvJWYeMMKi6RoyBemSkRZNwtWQziYmqYFYuXr6E2HPdDdWYj",
  "key15": "4JwSUHx7rj4Z6rznobLHM21P7qUpebvDkXs1iuTEcVDe9kEnxGx6ZJWD8ajeNcLDW9H6hB15vMrHj5s8mbEc9v2J",
  "key16": "2cUAgxXgmmp8WZkWBapzEuABoq7ApfShhFZcwxGf2T87nEonT2nRqs1gWvfXQ6U9kJxyTe7tqPBXTQVkF7m82HCT",
  "key17": "ru6np1Twt3ocrjHfKoR6Es9JURvabeFbaNzFQQN5yYguofz1vpp3QNcNTogEpwux5CGXXKd4pwKrTvch67zJTSV",
  "key18": "2t1VHBjMjAvPsys2sWqsEcNHWWLQo8oQEQd53K45RD4cuTxaCLatyC9uXnh4iaVqU3Gf8QNmvw6xvw1ivi7HZKiM",
  "key19": "qyDspS9cCA7YfoJEHzF7qTiYgZUrvQCSy6egYNEMquhp5DzXhTzTEqGxAEJMVYFSgnEqNvDXhMkREh3JdJzgvaE",
  "key20": "5ufmj6UQdRiBVQLvvcLzLCWBtghkaYUKwTKii1Nmj4DYXydDMLiiTvmePT6nbQhsfRXfd96wRh4Kk1gpzzCtzWjf",
  "key21": "2uKq4os2fznkxnUCKUCErtj4R5cK2iKRm9gPb6Bux8QnqbohugNAihcBApYygzNrM95nCFfcFwb9tUybmANnP7MG",
  "key22": "3kWdC24T9WR56UagCtTAaaTVszWFoAHjuWfTRu1XSp2fDRwvendi1qZRVqkMa2XviPDFVLBLuu8ukHDkuqsXDaKL",
  "key23": "5mkZs3mA6Y8Pdv6Fwyhi56dZcx9mYMWjz37e9H5FrDytJNG2TtGYv8zmuTq9neaYU4KkF7Bs76Fz6SEwLpJNtLUj",
  "key24": "5YpBTGPmQFSEHSzDduhQRWb2rk7rathC9MNM7WWn4GvrQaC2gFDXhGkNuPzuJ3hGNjFPeJE3VXeLpKhoEaCmueGF",
  "key25": "4MM5ojeHSkJ5VUHn8mUfWgUtNd3VSvLqbLap84aaNtuWMLx376CRZJtrC6MVCPhV5XxWtL2tqnXpNRFPWFGFqDdY",
  "key26": "4R6jfQn1zD6okkwAxjfEaJ7ncv2opX34LiNigicT85hNkWZsM58QHeu4hjnk2HYKdzjsy2cHzxn1oFQ3DsXcAVDA",
  "key27": "21oz3zVhZKWQXZVqmY1ryRSw2Cjv4TKoFbXQjhoirn5ZM8yQmE6FTkReQf7uZXGqRsbC6XRCcFdcapZj1e5n1u8t",
  "key28": "3c5SJRsQf2GmwEfqcaif7pRnJe3abdyHSy6Bb2zLuA5tg5TpsCQNcfR6n4djWUmzFNx7E8hfKrYiU7BusbeC59fs",
  "key29": "2dq5CAFVhQ3pyHSsBpf8VShKNBV4gcG4LUuxm2UTFvjJPAHTx2fwJwbLtxnsJYmT4xSVHZFdBMY2ZbtC6mkTq9TL",
  "key30": "mBkwXdiqb3vnXDmoJUm9R2dtKWqVxwpjvYJbYXngfjutjgQ4Dta61tkvK2V22AKkCvkNjyGUpctJjbZfzC65jju",
  "key31": "5Y6Y2i8VCBDBa6CSJuVkrfrTByG6vGoCSzv52ECyAaokJhCfYaEidsmg1HVZ7y3NpYnPzoWzq15Cm4Wv5grRKyfu"
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
