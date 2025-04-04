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
    "3ZmpHJpAouSQ3yKN6y6yTq5k6U71HDosA52DKThHjVaVdS3yjpDkaScJQTpGAeEPtFw6ksCA2hBSNr2XZdKJWj6s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nTmCkBek1uRYcpd57oWtgYhwNqiGMevCFCWnMeQ8f3o5jCmTUZLVexMuCExLJyRBJQdZdxtmmqTtW73uVBLBfw7",
  "key1": "4GhgRy6RWHCH9WAQqGFB72foYP8pF5aPJfqpRbfZ7L6WV1cSbRsc6vXxEWAgDpY9Bvw8Y6nCaSuZHy61DBaUh6Bn",
  "key2": "2n9V1QyuyQZ5DVEZSvfuS1wvGh8LkZtMxNgk3Wj9hSwjbjJpaHQpgyHq8ubfgvfHqWhRTxhvSW5RzRQFugcY71y3",
  "key3": "3e4vCbYV7a3BSD3BU3kKbDhucWqmsS1549zy7rieBPSmhAsKxftbkcGYMLNKn67gc3expTPLyaM4iAHzFo1Lxnp",
  "key4": "3B6SQnnbXH1Xp7xaFnoJqYnGCEyRwmbS7JzierTRfiRuST2t5LvfjBmNtiRTfyFWV1KGhgN1MpwdYFhH79HmmExT",
  "key5": "4jPVbWsvXdzG5rMUxE57ybSsXSjPnMzqK7ajkjghfku7ZjqHSTomKdZLZu5MXQwr7KKUUb9zFefMi9DQwiVJC26j",
  "key6": "4vtCgJmgSahrzBC4NpZLhnzNrsK4SbQvPNTqaBwkVh15voDaNNPQuzF9yzi8KJsVq5JjMMA5uLLhAdyvWj37syhr",
  "key7": "3RdGeS5gjAB4dXsX2Li7EUHb76nvTBcp7oS3ct7tD2gNaiutECxuR9AUpn7pe398E5g3Wz8KSpfy9GEYzH1cy7Jp",
  "key8": "5SELS6ztWgKmTSKbafyMUDxQwfVnkN5KkDzJJHBXGYthFGeQjS2uQFMjLai8XUzE85Z94ko6Nsr41xKjae8aMDKF",
  "key9": "39JiZkm2D3h4JxZB9Jh7gE5cpoZXYg23151RTQHkqUPdUYJ7VH3nYSUEMWgj7LxgNWgayDqSxAuk2qxMPw7vmDcz",
  "key10": "FUaKvjRg6ZAP9THXFKLDPGsSGtnP4oXFoZBYbYEvFWi8vDgrebUcY5ohB9w5ymX4uNVYRtVXFeAyCVGBb4msuvd",
  "key11": "4ozUR48rF1YDsddR6gEzdRB5uxeNPqcHCyQa41vUMGrizcqj7mKERq16teA7i2gmtcuaEqFbsQjsvXJU1uut1FpX",
  "key12": "5WZJiE7TtPfvNo2NNKmD8qD7mNwFMG8XoYxoBcV2DQ9X5V9rB5YbNojY7Go5GUuJZykCQu6CLmAKh7YDEUBeEL2L",
  "key13": "5686tk7Gnw7mTft91kACtjpzLj3Ny2dGutDERGmYH5yKzUYuErQcq2zZW2TMgb3wAGq5vzdXrwvjmAoQ5Pw9Sbgp",
  "key14": "3NUSqksBcM4hgGJRtEewX17yfR2cHKUTY562ojeJhpX5Mp1afp38a1DVtNHSP5JBcBQN9xSqW38L94xnBAMtWxwP",
  "key15": "3M6CHRX9TCZhvHnzWT5QZx8Uo9uUxWEX5ehvSFMZqJvEvUKKR7MULDrCRKfpEwXs1Vwn8oMXBXLmvp89yurw3GHh",
  "key16": "62ZSGNooiAQKBUq1mnPueVVV5QYUQBZyK4X3SUsRTWKb5mikbnRBHF67FSitbawPTYFd9boAfCfpea6eNHxFrqjy",
  "key17": "41ubceND6jYRFc72sbWG7CqEmFL5fBEAHjHu2eVLjXKNFvrtMTLW1Jq4bdVs79SV3vKXmgWBYmx8xfM2JqWrAcdR",
  "key18": "2XatHrFPLMeBKcS7XkzSgRTcDTnedNpyvomHA3d8ZgtZ4psUYzQ9uJV8FJ2JR8z3PrN5JQm3tf5DfKUompj5v6Yq",
  "key19": "2WxLn2GLD5hiuXy8Y488177sYDeZ4p4RjYhLckni2i5KZCCht4XkqmeRJgx9rUcYfkA2Jz2ELN5ptC5XQyr8HiFR",
  "key20": "5NnBMxPA96Rx1YE3rSUKftpoyRADyMTNyFVSovxhKbUsJLADc5HXLHz8YRVUwe7qq3s7GnmQVTMDfi9Wn1DS1hJt",
  "key21": "joTRQ1JrPMwQW9N444xgHeDwgNQFr58mAkeKKngXPXZnouMW8VxDAQBhyfw8V29grTeJ2rhLoQNHbQhM37iHX3Q",
  "key22": "4CKC3vKgmnuNd6kJWm3Xy6wkDpY5wsrXCQcQkmZr6q73dYGfE1gXrccPCJb6UrPc4J5eXM6S9CEKJztyhLAWmDkk",
  "key23": "656vGVSpAno2goeb7xJtbusaYy47HEPiLqsdQpRNT52p6tjLWE4YKyXphzafTcHGhdZw8SzkJCaFr6GYcFqMXtKH",
  "key24": "5PMN4CNPMDvknVudoHe84TtARPagHKoiPfRWYsjjpq17dBSC8txCDKx3q2Q4sKmHMbm7hnrNCgPusmwh9oAhnvFd",
  "key25": "41a1rCjgMn2GWCUQFmdHPoQFzoXVQyyX4Jkv4vCyjg6isVtJqNC3q35xBa9VjVRh3tU78G8GbbVDajCUndtJAGdo",
  "key26": "3UhbX1BZfpMEtfxBoNJ33R1bwS9MyWvbU8uL8ikFjAAmNAnGzzSHY8MpCGR8Rzrcfd5uCWqZvY9gbXNRTaMVVqAR",
  "key27": "2uwMaMfagzAtF3m1EZC1ec1iGiwfQkkD86fXpVYHCeMED8xYTKtyN88ncURfo7g9RTcwYqB9pGsohr6sHUJGFmLH",
  "key28": "4dm8rgfdW7CYhSkWKWWuqkgcNYfbp8hSdndmAD9TSsUiANCrYJBqnT7q1fGgAzf3vgWNrTVibpDBt9CNxknG9zST",
  "key29": "5TizjMjqoxacZfEiTNbPNSj39XNgeS8gZ7pVT3s43gVX3PQHjesdmgNn6FtmvGgvFesm3ytv5StimLfsiDpGD6hx",
  "key30": "4mqZxNebtFUZ2VkbErMyMQtwn7t6DzfPd3jq3Wh9G4dJp8mLE8zuS2hpSvDtBKrgtBiUNCop4A59k3QL8Mw2AMb7"
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
