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
    "4Hjpduz4pmfPy5A2fkT64H1pij6TH7jtyDKMRkY8aMkyvVmvCwYEaqAsMNzbdvVXL1dKo4SxN555WeSCSf65uYZr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KFHvec16meGcKnSiiABqVm9YAR9wt8H4YZUSdcKbGyDa9oJoK3Ymto5Rn2epLDpK7NxmHv373mtbzdeop4gmQvs",
  "key1": "g3NQHiAzjiX7rGqfamh911eq57Nuvq3Ge8TifrAqMBUk7MDeSGsq5LCYm5VbD9vZCkUNsgRNoEfNkoGAPSyPYST",
  "key2": "5TQzmpZN7a4SkZKsJhuTUCsWVxnhLH9HDSw7X82qh8BR4WxbidcDN8Pob41iGj4DtZjTRHgvbbfq6xyuMz1goKNe",
  "key3": "9vKTVR3JdpMLe6yVQwhKXhpPSnJC4mxYf2iwr9fZ1swXVUWz8mt1pZWXAghUnd4NPzv83zKBEqX4pfEgqLvUQTr",
  "key4": "3ddxYi6Bw7AiTYWLzgVqWV5YcmVoNtBTbfbuyZWyuSsMNDZgk2h7nZ8L62q4cKKZpSucrzET8FvuuGmT2rJox8C6",
  "key5": "4cGEoHDfpBmdoxrMyS4gsW8pD2iZTdTJdFRDqWHwemjLD1SKqJw1kAQEgYTFYxSznJhZR8h6vqKabGd5PzbSKn7F",
  "key6": "5kv3Z8eoY8hM2o7RZNrtkBuvQpeuCP6hEtrt8LjWFT2YcckG83ZJUimenzfXLaZ5wmQVrSizCMkReahGV5NMLw6g",
  "key7": "4BFVgVrLdW7PcxeE7i7sowBT75YCqpLPj5ikEgA15LBnVSoaSxp1qQdeh9M8UBYay8yA7chDvi36wPr2QoF2eTS7",
  "key8": "3Rt8t8dhiCFRoTrL2nL3LK3WMZ1MwT3j6bvANNbCajLNH3uo5urTdonhjSqHSejq2n2SPQmS91uCdJDCjHTxH8oB",
  "key9": "2v3vGL5crQzJykUaHxiKqneEAvTDBL5n2NLNdt8MPbQhdqAmWt8i63Ub4J4qrHdaqc7Eb7TQZuhToT6pAaEZfWNo",
  "key10": "2NuzHMgwSovb9LGvq6xCRejsstczsDd4v1Ukgd2S8fqUgCUaHb6wDRj2nsMCwARJLCRodFY3ud7ZdJ5fq3BEpB6M",
  "key11": "45mR7F8SML6x1FfWFfTBBvhbqG9DxJPY36EejiPp5tdMhkvTVdQS1jFfQYHWQm3hcwGXbGrGxG1sxEtGv8GxJzNt",
  "key12": "48cU43p7VvA5DdrXeu3fmHqsNUAnRFcukUuvq4ufBzAyVqNFmu9wwt8Ymp8aVg8ySYYkexyvTWnjpGSs7NaG3jTh",
  "key13": "UwfkjB4zoSZTroenBwSDRoEE7MKyU4BMErd18TAPXw4q8tacZVWbKqtK3Xd95FXADspEswgzTFf6JTWyaZip2fM",
  "key14": "pwLr4q672R3dzyBD9LnD6qJXDNwP9HpDES6BsyLeFbtkXrwYELxfd5WF8ZawXsjcSjofMWuqVLxYKZAP5mny3f9",
  "key15": "3Bb8xrxBxrwGWani6cbfs47eWj6qk1vEdcVhiTeqFhrNF7YhVzEH4bu7MVeT3aZreBtbyBC29HyYri6MTxbjGKc9",
  "key16": "5U1JkskcZQhQ6ADVDa7qYQhc7oAmcw9Lf8m3q1Ujd3u3MwseugMEncpUwbYWKTk79asPhU78TgUf7dBuWnQiUnUx",
  "key17": "5QQqtXJax9hjswgARkcUSiSFHyjvoAXdM7E3QvDdehkcQyRykKwLjknW2MDjbaQS4FMspKGUwudNpKVA4mYPy4Qs",
  "key18": "2Wb8ti4CHjdPSYVB6sYQTNBApg8j8Hau1ZuHDUt5VFLJbGb9eSmMBYnVkPXtgFUFZ9GeXj6XpYM3C6QXbxmqHn7P",
  "key19": "4F6eRmMh6P8SwvYPBHxPvWNwPqfDG7UPRS7BQAkzqLZsfcZVHjB6MoYJJphuHJsF7DGJ8AeQvJMgWNpuh6MsSBjm",
  "key20": "5VSMXu7PM7K4VqKz1Z4ogrBUTf8f7RRaPfUZBwxGDUFwYsjfUH2Ng5yfZaNRP5exRTW9GU98Vo6cCLRXEdoUb9uc",
  "key21": "5RU495Rk85DaVJbzLivcbHFHrk95E3EwbN9TfuksGSN9fp6QHtrp9mKjF5C52Z2cjf5ZmCwPEgme5SpWDt5SLB79",
  "key22": "5MKhAxydU1wEhDEBxv5e7NWhTaGP6ysZ1Eepp44yaR5n3yAtg5Q68JrwqFpd7ZaDBm2NxJ7w5B1THXuq9AvxLRGx",
  "key23": "5hd1SGWuXigPrgL4t6sV3RAEH6kaTVZxrjKXB5rU5fG9SENYPvrXaSqJ6jhzMTBXCFf6CoVvjwB4JybwGTLdszp2",
  "key24": "MzrsdoqkRTLsihNbKxMt4So6fDh1X7RNWZYJq4rDkks7QRqvQX2kngfM51k7hnGpGBqe2DBdDon93hHc6jxm7pf",
  "key25": "4MgTnxpKkCjYVH6ze2TeZ9bJ7raBraXKzFAATS2Ac6jRSQmDaYUpG3MDDBGpFGneTSMrxaF26aoUPKCkgd5hU28t",
  "key26": "4CQ2dcidcdKmYre2ym5JdxV4DAnUSLsYmeKrWkuBvm49HxLmc1cmvcUHSnFhqqc4zC49kQcCXv6MDnA1tmfcgD7C",
  "key27": "Cg6XhNn246uyXdQSWatyoEz67MQAQvhwpjNXZ5pkRo6Fv7Bcab4KyfYwEtyKu6q3Cf3Bw9HRCSL52C5sUsmyGjc",
  "key28": "47YGPf5ZuLHLkp53NRDEjEHk7VhignrtjYoy66M4Dhtw2FsmNXTSU2xtFyH3y4fW2wLCDug8TGYMndYgsof5w9sH",
  "key29": "4dbZJFS8DRycvzxeXwtgXm7MQEp3phjRbt2d4tbJJH2c92D9QGAqTop9U6o2ur8qR1H22yf8UaCrmdhcF8mBsE2b",
  "key30": "4GyPLgiaDAfyWGHeEhPwumhWTqEDT6CbgwtvtEF98RByXawbcbnUeXarch3mUDg4zQ5PpirQKdNShjxv9c1HYNgZ",
  "key31": "dLcXUJZva1WyXCARi6tkGVDe5NF4PhjsSn4t3zVfm5zGvnX5wnFjxxjXcxZxPbkri6xxpXt1XwDy3Y6kMxZfAos",
  "key32": "4uMNby85UmniCBCbJ5D71eCoDHBgucU1QxBespkX1WFPAAVxXwZWCSm8mVtoJcJnuj52UjBXbQM4q2UKcbVkrxJ4",
  "key33": "5uGSLjtZWg2K76w2bEL6HGGodhFjSPEjJnsngWepzhP8i7GPuABTvDMfn8sYwEcpL6CQJZ2uVJ33gfpWGV3bHHU1",
  "key34": "UbjPXv8LJuWFkkz6TJAQyngibcrSVNX6onEZoGcHqjvfPneyDTPamWAZoPeRKMNgQX7E3CqDhypkR2NSbTKPTcw",
  "key35": "4TsHpr1tgWLL4EWL6jVEPpVeDNTBLHtpR7j4rSWRFw38YYLyDCPe9BF7UCHGRZGP9WoAsPAbLytQZs4a2C5wPb8a"
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
