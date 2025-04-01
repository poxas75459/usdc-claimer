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
    "4o2eJcNqedHhyttmAttpS3m3yqYCuACiy1Vcr2KpUPxquoQES1N6JArzsAVuC9fcspYAqgpnyWg4BwgHT9cGB2qi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WFK3LtP3KRDJ2MFUmB2t2rTEto1LsQBKpK1fQDkaV95TmD5EaQDFA3xgLAcNN6EXPccUtAYj9bCmdN6dYjc1EDL",
  "key1": "5Kd8CyD7UG3sVXUDCyHtG3rRoahgQUf7tL2N5sMJiY4QbanoQvFiuEAajWBHEjSqk5FBuFmXrqxg6pb2Nu1XTTuF",
  "key2": "46zuYRdeAN7yrLQCpvQXCzPcfLxVmedDzntg8CAdg3MJxMEwPkyeVeWoWcyUoN5DLyGK78Puc4otRV5SyGZH2y89",
  "key3": "4PaPHmTBnojqy4794R74ziPoBvjHi9e4ZVJp8xUZ6H99Gn2GthEB5khVYJwWZi2DuYnSpW1eeaFaxdZcXFobiDuC",
  "key4": "2PhN7JaoqanDCdmMrnhPAXjL9uAR55qqqER7tygXRYmESeb4nP9CNHcbCuegneXFSDYbuW6LKiMccd2nEPozW2Ku",
  "key5": "4XqVxkaQFhHV7rrNvPQgwXg1G11e8UTgXidVRShNH99vWx5RFVRhs81AwzwT7EoEwphrooycAVAN6HT4F2hC2hw2",
  "key6": "2j8bvc1WagjaeS2oEktp8MWTdwHCNTxcAqoX4edsxrzYkHm6AbKSf628J6cN49YGrZ6cDpmQywAHoEK4sEbv5NLF",
  "key7": "4eE3rSD1U5ykpuEgWms7uCxvZjBFygqwWHhAULzqb5kC72QmMwLGqd6NTk2gTMS8zbdQ6NMDqsZgFFqw4F4RC84r",
  "key8": "2A4cnHyrwxMm985A6MAs59MCvpqyygiZ1z5dNAHNjZayGifZjwvx3bfzsxbfWpBQ81yoq7mGDakdCfsV4fFUCepH",
  "key9": "22UvVSR8ZDtr5ztkCu5oBtgwG4XnD39cv3WAZunxRpwC3jfJncxWbVt76Eo6NYDwJeP4pF8PKAqwNoPrEyeDN5bu",
  "key10": "23DT4Cy3Kmr3GpCr2eUePvLfNfMajCjnEkykQevzJ1TNqU7RkM8H1CDTw3tbBFBnch4w587qARrcjFNJLbC9Qdga",
  "key11": "3BcLkGAv8GPX4P3NjpRJwqQ43nHGMhToEXTWwjvpEeQw3geEBZhA2X6wKifd1PKh2Wg6nUGXyCH6YXFnaVzjk8sx",
  "key12": "f3YuVkw4AiZgCJt6TLx4erA5EsyZoguf9FV5zvqcM7DmZCwx4GPNungb63Mxz7AmrFYzMq6mLfp6aNGMnJLjKGP",
  "key13": "3yz9gbuztx4yYFeHS1SAiabNeCVkecV9i4vRNWSXH2ygQWdusw63wz9vNdVhduJmqn9uoHcPD6DXRe8x7352XG4m",
  "key14": "27bczqFX2fdNuWs5MvnJ9CKBcgRW2Kt5CNoS7izKAWECe4soMws363MWxKCUM9r8xoiJaSaKdMzsacvzVjH8J22e",
  "key15": "5W6XfCBfJ1HRpdLsQCZrXzy9RqZZZSoQ13FhYD5NsXin77a9Ck9A91bmU6rGEprwvUo17UQaHTdjsuGYrV8ax452",
  "key16": "3LBX54Vt9dGaimGRAn1o7B6jhSEKrkdPHwLw6sRkcJqYWV4UN21sVKELaY5nNxqGUXsb4aBYG1YQDzA1Kp8Jidjs",
  "key17": "4mZDi2NtGGbyruW7yKAdxS4cDJpzwdVJHR4cnCCvJFRUXaGrNwRLXAeR93bxy2MJpGCZVQExCCGda5NUsJDcjaC7",
  "key18": "2aaWkXnqev1KYhvhiEdMCUyybJNU6VPsLrHA1DyuFWDUKdzAHoCzTdaxthvoySftrXBGxJjv3GuFYuzKSzZNa2JK",
  "key19": "5ydqBnUvXwHas6KKTQJeXoZwQ72SKVa5ucCfjRUAZhqhExJCgjB45ruXEAedyznQgv1Cbch8U2EYHiGugsGhf6Jn",
  "key20": "4nn8YpP6u7fh2vtHsGW5gums5fCc1Yp5D7KzJBp5Hp8dtbkgHBfMgaE72d4t4VDPJhz3n4bHVaMqcYBZr1kvaSkk",
  "key21": "3as33pgVSBtEsGTKff28f4np3UFiTTCBrhtRf6cqBrLVCkQSyYMgQcUz1T4PY3dYf3VUnrsqVJdu3pLVSAd9tKCm",
  "key22": "BEcXuiebkrjasPqjVDzBoU8P5Sc11YWXDVGkVQX3DTTK5ALuTausCFJkmkw9KkkKYhrRa3eKZFpwoBs4A4nJ3nr",
  "key23": "2T1dvnpdv9x5n3W9xisFRx7mSMnnSBKDDzmgxZwZP9jZjmSQFuVeZNrfAwg8wiZjSq9U6HXTEmJ7dbzQmPWsirHz",
  "key24": "1psiRdiduNfvy6xud23b8ASH1k7VLZeiGAUDxf98FEW1wCUDh3S9qaW9RuWFUnc8enCntPUgpoWPE3JzpR3RJzX",
  "key25": "3xL3WH7mv1QZVwjN4crpN9FoCcLAGwTHSW5qwyvCiihdUMpXuvsvkzwRkCZJTLfh78HMZEXqc3Wcq3z4YbwrcWG7",
  "key26": "cfWgWMP82x3YoeCL9pvqidNtHKP5rAX92bo1tfjfbpJ6YvwRGy5UG5hVrRwpRcXB5Zdw2pZXCg4oHSMGiH94m6r",
  "key27": "2Eg26819pYjBtwTttuAQA8CxpxhFL8Q6TsRqupYT7eUZbUJzNXuKMyyZHkPBWTYpFCFVZAGYwhMqkZRVE6vBwi9E",
  "key28": "5jU2hP7j1aD2ZPB4cWJM6uu4TQQUJvMaHtKPzLiqfAsVk6ZRVbRGDDFyzQVmGEwbwVVNdeYyRgLVkZx51iV8pU2w",
  "key29": "hKRyntttvtyPWqSTosy9yYtmRCRdEug7QtrkeJknkfvAB3NUZm5PJjAeyjURV8bShiE66VHtduaDfQxvQ1Fhy8W",
  "key30": "4DkRsLAGijFzDbURLdchBfUdo8gWPYToFY6yuAMM8aTn9HQwiw52TZ3zfeoNxbdKEJTGo7gQvWw8qYMqjit2FDXm",
  "key31": "5MdtcqcLpzq3Htto97eSwisHTVkdbbHoW5dvWmF8BSnE7Py2VJ5fFLrpp5Wtrk6TeXyWEy49TH9fCbzZM8xzzfcE",
  "key32": "5PSGW71qtfVjF4BGnbdiw2BqkJEJCHgADGA8nKucRaA3j18NmhqPJRYQmWLzqqPUWKcKm2diJrM4JEKXXwXXNujL",
  "key33": "4Gmd31RAKRuiuoRAwWJmAGV1ymBcXhFbDLAgeWsFLFJ9URTZufgh8HvtQH5Efg57MzhAq1b44icwiPfgoEJAA1mo",
  "key34": "3xaYkdxsgdXWGAuno2Ajb5F7dqzY5Pc5UknXQrjautt3y8NNs7sVSdJxc1xqrdNYUn3p7DJnthTh9nZW1da6ukRo",
  "key35": "4d3uVKBGDBFr6RNAJMv7VWXVgkG8LKGuYtq4pkq5JWV2MQRac1XBX75Zgqzoe5WNEgKB7UDbUVaMUz4WtUeJn9hC",
  "key36": "4ZSHiU2pZEn9YP1TSj4ACXn18ThXbRnAoF1NggNmCvgiStMMNCgmaaFFVkfFDHvFtFP2uAJYtaC3uHJ1eKiLaorP",
  "key37": "5yfU2C4V64u6ozsrv5Yeh7Gbpo8TXYFKMY1rDz5ZpZ7AkewP4rgtcBKo6f8mTfxG9JDgkpU7zooyruYZcLA9EAxE",
  "key38": "4dVirFf3YHYzt31MVCk1ut7UwYRBSbGPWpcNsYBtaoPrkGKemrWhDXkt2UY46DX93DKbf7KuE7rw9j5VRek8Egjz",
  "key39": "4nGjWpp2tsrzPUZGERfnVSXmSDRsYweSWwn7q6CPuUXkp2AfYxxhKZTQjyqKh3RBiQefdG299bDbo7BLqspjGhjX",
  "key40": "4YfE88HYrVzLmKrq9AUCcBAEvgtUQ5bAaN9EoLYJ3MP7oGKEoAFvVrpZc4UunrEBzUWsU8a3vEAgsvCut4ekpbon",
  "key41": "4F9dbCU47ji2m6Bi2ePUSqNghfNHLiUqQbTLbxLqPJVVATmmjcss1VSXfkNhUwA6zwd9p4sxvzicLCLNkuK5YK3u",
  "key42": "3bb4YNq2Zuhv79NnEg1DVHBeCtRLJr5z2botjEC8KT8gJmGot7rsw2hzyEgPgZpFZkrNQfpwggVCcy2Z9VcfSCVZ"
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
