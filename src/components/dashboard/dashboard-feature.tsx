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
    "dYz7N9WGJfrJysyxMdx2GB9d6NaNay9ByMJLjqLYhbcZnb98GchNZwFZYbKNXR8iAp9zgebSFXiaXHa3WvyFP9V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vx1wwvoMV79oJ1kDmftx1H147i6fXQTcX87xkgYNavjyPUrjwJVxvK7KTiXb74ryrhg6Rqxpq29LSh9r2W3NttL",
  "key1": "4DReWezJYnz3Y59d42VrPF3oWTVNZqcUvQjfHmPGtz2BvFa9bfBe3WGpaFDzDLCN28oVFAWxLcXFbZWTK82xcBbn",
  "key2": "4NPDZg1YS7FnUZzHY9uptXDfxoW9SdUZn7hc11v5azMeRaJGJqyzDKGmu4eXb2HeJ4Lu6zedTiDo2rPY1zCsnn9T",
  "key3": "4xctzM58Dmp1LEZ5x9b8B4oHk8ek9yBR4SvW2FK16z9HePe4Mi13DM2uN7JCtWhJuyF8qgoyghtCcN1Hxhec737W",
  "key4": "2SAFNoW2A5T2QKjTEf98NH1tq8sKT5JkJJf8L8n8sHaoMJkjGVqWZcLMepEjSvB6hhfcSv1tcqkz5QbZGYFdv5zW",
  "key5": "2Td1QZCNUiS7HZNq8VkqVTEcAUxPjqgVo8pgnMjZXGYF9H4D6ceexEQ24WMx9RpZJPMj94xhVr2B8WKqrRhWVeCK",
  "key6": "5xEoaqfHtvFGZ9NzUdpJ3N7w96mMkzPrNb4FHcbfXc5DwUPTBqqbLr4MSe5mrjDsGWbHxn7m5LJfqpk5xuNASQvt",
  "key7": "3iibX3eZ3qDNc9iMPpNd5MAkfRc4xgTLzU9drq7riMAyx4DkuBv5z7UyxiurePQuAe4eZAyQd2Yb6by7PVj3Arvt",
  "key8": "4P2FhiPqzSMNffwUW434GW9hwJVLjYepSG5eGnGUTWTyrvD98m5PW2LQcUWLMBTkd9qGh2CND6aVgdEn5xGD3aex",
  "key9": "36peg3HTGzhiLhdFTTBWpNjrYLMs8U94NnP5WmR2idepM6y8mWSLWAYF9vvzw3WE4wvpHWZafg48JUkuHzzWQS8m",
  "key10": "3gyMwc7aJuRH3MB8G9rXZKxGyCbrLSbrcFAVBVnAijVFenSm2szNXJykDQ8Gk5nCdgGN2BG8kKFsjrgZnwK8EmjQ",
  "key11": "3xnCYxvE5TErdsNtH9bgomZfXQYjRRdm2EwkTLq3ebTXY2mGYfsVtA1NqSAeN2G6ewjdS9CwdeiZvW29ZiSpBr5W",
  "key12": "4kM2TmKncABxkKQ81C7fTNKN8NcHGBufNK2CuayUG9BSSfoQpMWrGzeP2FFc1jp2Qm6MHuwoFNnkaUQhh4HcEqHT",
  "key13": "2AwreQM3vEdEC3cb9LmopPFTrbs2eRWpw8jPV7iTVVke6RDSMMALG8xUi16FsHsh94c36yrGzVWoCbKT6HqV4jeU",
  "key14": "62zT8cJsBW7kJu96i1eWY6pEDEuuyogFTSxWxpMXf1pA9V2iUKpFcF3xffq35rN7QfZ5mCCoXkmxJ77KWLu1jr5R",
  "key15": "4g5RfKqH9GT8qFJuyLVDxZZUGjeMSrJGBK9surqPPZsMRVoP3bmoR7BWPZESvQQmC6ASEYxuZHgedWkao4tjbEym",
  "key16": "42jzQXkHWBc68EwoZgkeaGtyyQiNrxxXm3NJ9NviKgEs5eTGnWUsL6ARfoqU2hkZRHZMagRZCpEDCpPFEeKxu9td",
  "key17": "5UT6KzD8aYBREbZgMdhp1GLWx1FxPSr6DzrBvPfbMfVr71x5oYUfFzsdLHQ3dtpShscke8zMZQaksRou4kNCvP48",
  "key18": "PvznJ4VVXqpYcfF6uf9edhtVHe64w4hQUJZGKCxkMT4GYpGoMAPgZ7G8LRdxyF6svrfw6qZt44M1yfZXRTTVQk9",
  "key19": "4rgZyvRM8gNKLeieBHq39XWhKFaeG6cBivu9U6784RR1LrWWhZkndEzaSUhDrhEiPWVvHHrM9VKz4WKjji8crFxr",
  "key20": "3oxVDsWwJmwV439nGiZRiqFtQGKQgHE42RGumurobZHzj2m9nn63gkp7HrPTB2dKYVYBkQQ9DWmaFogwU4gbLiuQ",
  "key21": "2xV5FUrJyLx1bvqNCLhAUBhcCZTMm46BgXhJXuE41mnDuvyRGVQLQALBh62Yv5wpzmgWiEsYvXnYjdzdgBN11WsX",
  "key22": "5EekqgRL7GpUUSnSacyByuJhpgm8Ei6dQ8g8sH2Lqu8sfyxsPSF1HmUxtiwD1RmB1b8CmryBE8sTukxew6Adzii3",
  "key23": "61iaXxqLMwiCXyEhCe34zzMLhsgurycfvVg16GCKztGFtYw7dUbY8rwTaC2KsAPNRm7YnNzfBXhEkX7jBTSquUse",
  "key24": "4LoQtu9RygX9myh1PeJBuCe9M4Bxe5yPtyvgjwUmAxsfn5o2JWJwTiLPJiz7RsUnVpjFnN9nWS4hv487iBMHc4ai",
  "key25": "2xEP57MxvAvgyx9teetundvNwsSkVv5WSCTXnAUiFDU6KHmckqTqMUfvvvYhK1m9XnZsbpD1dmvMU9tiDb6AStMn",
  "key26": "2ySDyhc6yG4ERswG4SQ7idVBUo9KmnNurp7Nb3JaCDSfXZYSYPfvj3s2LzUW4KbFxdtDYhwFuyHyfNG7Rb4Fqqbi",
  "key27": "5bjg2yrYvfzkdC6xYYoK4e2BAkAspnhh45uytcH7eN6UqnyEcy82S5qCkncq5gVY25vsrwcRH1dvycHwG2z6tgqG",
  "key28": "ymQa9C91kbFqthyspd1WKNinH8Q7aKxGZpsw5uSD1KAmJH1CQHZPbK8QJtEovXDMWDUY2mfXJSXjrWwaMN6w9ny",
  "key29": "4AnDH4hW2DkV3KjFQEhQMs1UGu9McAJncEJDBYPQPjTDq2ZmodNSnNzHKp31Y5NcPFCf4xgkVwZKoL3rEujQvMoT",
  "key30": "yjRhDF1U7fhWMJ9H9BQauyAfv9y1YYn6v77KbLqCfosH9243ocD5KkZPm9CP7z14QVywNQHLUpXvf1H2oWaQES6",
  "key31": "qoUeorkiCk6fYcWFNeJiRviwF4KCtoYahJnNRaDtGiiKZSGo8UZmDaq5LWJT2FW6RQ6Q3XzrMkPyKhwHdPoh6sd",
  "key32": "tJhBWxGbA3hgoG5ctjxTmb2MXKFLT8qAsVjYiDmSYqbaQPZFxrbT9p36FPnazmwSvbgQaDcgxuzjk3AkCiacoBB",
  "key33": "4V9CmhAVbfwCebU6xobgXNYDLx4f4Y8w1gDW9f5fjxPZSn4kRftKk1RbN1qLhTb2wxYBxXs6vDBbYFVJUtYDHgya",
  "key34": "3RjCcs3N4etC4gRXBpDd3KdbQj6un73kCXWmRdGTfrAqyQKxD6neACHpaGyEqBufPRUiETcaTtnUivSNkVxC12DK",
  "key35": "fa4iy7AtXNVXwWbJB4ETeM9ysTFi2xZzQ4mWfUfpU1SwEiBHMs2aKzXN3pCTr5h1wZYb7s8q41RECdJMdndcjNv"
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
