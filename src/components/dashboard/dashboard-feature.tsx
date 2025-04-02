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
    "4JRczUAc2inhSDGx3AEjxCT5GTLbcuKkTX4JXAECAfHGXaMJkcqFkGizZNHqmFvUzBgKXLSTkWit8EgQLej1YWEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PoJGecTb2o9thS3LkWTDyRg3SW9uxRxR6C19VqvRxGU3mHAvSkuZjhyhMvaEs8hkM1R3BNu9pEUcNMbbP1ZJWiS",
  "key1": "4pryzS9bXjDmKwPpkkdZnaHXSUJJdZ8cHWGpuXEsdkvdE1GcC3SL5GZq5YhkdgueoXr7VZne7cyS1G2yz6HkGrZe",
  "key2": "4zrj3YfNKAoTWrHLrDyG4SUYhRD7qMiGdcBcnN3wvXhr6Ahh289z2BseRdecDhMbrVftCeeH1vXKrXfwhYZMzNeb",
  "key3": "2HbLZNoD578u7KbF9odiSJ23PjE3RPNRWPqzxqwT1bM8itFpMxWumVVwht35xFTcz1Ng73Z5xqq3gXnqHbEAZqmf",
  "key4": "3PQcN7zkgshjziJPFbivQnTeKnU3v6unacTjnwCNd5oSMGXwiqj6KNrHWuYvEyhUivJYphd1PRzWBpB2o2AJVMev",
  "key5": "HXGW2Y2Zw2JMrYgCCmXn2GKpzkrkYFd2uFe6NHwFMML8ZgXTwXdC4Mw8wvYjPGq23mqYHSgaZ752WbxDCzrE8xf",
  "key6": "5SRkbL7sM1taTpFdbkrNMSh3VM7z2xDmoXCKbxyd93dNRwF5k2ZFRUL6iPJPkFFaNGbKNsbAevDqw8wyADJmioDq",
  "key7": "29pLh3adT28GP7NDwfCy3MKsJYavFE6G2A2ug3c5fnmhmY4KgY2eBUuAjHuA8a2RHjM3vhMoApRoJANTNQEX5Ziv",
  "key8": "5VXzuTZwycv4mNCcyfFo718DGo99fKJqJDto6czrEH1ZtaMnwL7Xi66EVHyrizB87Na16d4eGnXxBeNTuLirT5Fz",
  "key9": "8ghQn3QvipkpBMV5UtKzCk9B1XmRPo7wLBp8ssXNhRVyQMcEPnrmzNdCifCBfG5keRjZFhvSPJ6xgwYiQbA49gK",
  "key10": "5bdzPKGmfs8xc2xEqK288bWJxvTx5nJng7pbxPLAUgRBCug2cxtLCFcRS5JRreDBMxXCv5YrxRKeKr26QfWDgRGC",
  "key11": "3RXnkoadpYYe4rcKLKkLnsMujKgs2m39CKMzpd4euF5iZFkSXGheJj769CS6Z8MQzy5csa5ELiknTKm3MJ55fKGH",
  "key12": "3dTUsyiZxXFPAWFpYCgV1hjkPgpdFvLjHBkDi75ha4Kxm4kk9Dyy8V3pycyYQ9NVPxtcgkjLk5V7n7vsUa1Xmj7x",
  "key13": "5KjpuY63at2j5dJMjuXFpBVHoiSt4fTFyQGGfinw6UxQWURVEGmSjHu6bzPcTaD8ea3L1VNvvNEmUNFTEYVw5QT5",
  "key14": "5QLjyHuhBVQbnHAeE3ida2VP58h9nJcy1tenadnF2r7iZRoN6sBmY4TUcPgt2erNheFvpBacxCPiTJg3izVZHDNj",
  "key15": "EwLySZiD3uznXMec6GKgmFbU2yHsHAhv7TXw48En5Counev49Tjbjs1jASr5h8aUjnphJ4ggbnptBejnMxSE7nm",
  "key16": "B9n9mZSTV5a5mBy7u3gnERAJ755kaaziRMX9h9Gm7WpuKSgM2JKFadWGXNx8AHfhucLVQ7bXYHvTEC5ULLwMzz3",
  "key17": "4sRqnbUS1h92zJwkerauWJWDPPcKsCGt5tPf63xciSHP4PPSS2yTCpUfu6RVDoCVp8Pphyx9ZzQfiZf3uHHbR4WB",
  "key18": "2HZ6Y8BQkQEP6kiPrBixhudwoEkBjGZ4d3SPCjkhWc95iSb5urqJCPWhCVxmv5LgsemXZvLQVJppuLmv3xbn5xaS",
  "key19": "iCMVsYxmggCZcRgY1PquWEZSfAagrYjVP9as38NqJNdwiJnY1Yh9KbghegSrn9c1n9ZvsX8fUuDSrrZxL5dh6gd",
  "key20": "4USiHmoZsWanXkwmRa8uvLsoYZfNroYKypXRKUu5KCjPwsZCUuqW32ZqdBHcxLXjxwquV9rkRmbdHfbpUEG8f8Tz",
  "key21": "4Qdy29YY6obeLaPivHY3yon8ratXS2UK7Nt6pumS1CE4rGdkPR2p5EPWC5QA1i5axvyJa7PUe1L9UKDhZgBWkvr3",
  "key22": "21GDA98TPVHhsVTj5CocjorcrBfMobmFE2wT7SudiMgyFAwPGV25mBzAAjdyNu6gDveVjcrQJj6jN5va644mKctt",
  "key23": "5mqJuiVcN5QrdE2DpJFCmuGNTStN6HAfq9hwkKS4i61oBkb83J3AA74DgQBw8qq1GvpNFwjRxdiv7F6K9vKdVMTR",
  "key24": "3scrzQCEAiSk1myfCo2Cg5NaWy8M1XTzt51t4TQoer2K4FAnj8A35XL5dDd1QwoUn2cEyQzS215DVxi5x8JQWW4J",
  "key25": "4haH6waL2Dzy5P5kL5AXL4AUw6gncEw2815uft1HF5NLEeSAKHGyYWJ5V57jPEWY8kSYUiauf6ikwTRAbka3ihzS",
  "key26": "2ytR4fEWyGvj7XxP1uFPPLwaD4kAGxxATeiXE2gKLF6ANMSFnHHYp73hMthMsnBnTFdTo4ep6xribDQaiX1spVdG",
  "key27": "3yKjn3z6K4auZNVjVHeAHeGZT9ctSR9B9bQzqrLMW26XySVn8hDWyqpAh8RoXQVkNgLxfjon9jssyxEY6x95zG1W",
  "key28": "3yCfPFUYGb5f9jtEAGkcZ1tvWv91D17CN6Y3SjsN3YBA9c8C9xigdXVunDf7T8nRYRmLjjZHqC3JuxZtCpPzvfs",
  "key29": "5idej6CsmC4fKQPCjBAtn4aib3VYRHGvyHCRZC2SbrA5ixrWUH9GqvC3y7uBy45s3z26UptuC2AK22JUDQrMGUGV",
  "key30": "48CSi7rR36QD5TN7c3RkRwKY4cAFfLoeZWNfpad3zGSg2XFTA971QDPBhKMpziky66aZXSYPxpJLUgr1sJvLjd7",
  "key31": "4rEfGs19yd5GxawjxTotFJXctwR2UWWVaX1ifHS4hgJCQi6SYY1xyvBySuqNouPVrGQ3cns3UTB3DuYCSHcGNzH",
  "key32": "2VZhGEJGR7LEuKxRUVszAG1v1UMKz8CdUuHKhLCwcVjF5hCCyydxmwiLgXRkX8ZVUwC3DjfGrGNW4chdEGzuuAVw",
  "key33": "zgLinWFXqysc3GoSH82dSxKtRMczGehdQrYYZzmxNSeRTafR5GidhbQvZM2U2CffQLS6i3MriYKbfFKPrqbYbAU",
  "key34": "3EK6iBwbDq74VgXEf9SZHFeRj47zCCjhkMAMRFX4iFwjozaTwHbPPfaQp2gTvU6aGLSjHazYdR9ooxVqWErLSBYk",
  "key35": "4D3uCLqUrsR4MofxJdtECKPd4SZqW4smJhKu6ex9xZAcnARMi1ecy5aY5gKz1tAJbT6Q7Fj7yEBJuy5Ltfe5c6qq",
  "key36": "46PwqKEKNMCRFBN9DyK33MBrSS5iCy6x41fUfSJ8hBTxVQMgk34oYP5N7xdPb9eZd3AoWKtiWov2rTYuCUzkSxUp",
  "key37": "3tXmVawCWaMGHxHHFoxbrMeEdrQNuyn4XPy4hdF94DQiod35Q74tZ8vBtPniMzZuCbUBWUKDworgbBcYepKg29SN",
  "key38": "4eDGYNm1e6yo1gK9GhXpsrgvWEJ987medp4o55R8f7vw3Ssevf6sB9YoY9U1EQQmdFjfNZivx745TQA4mVeUUtVZ",
  "key39": "48aVZByrXgPLzUd5fLYqChddc2riPsANEn1D5uAKSkYnxpjBsF5nZq7ezVaTYm6q9ykXqr4ix2MP7n5Q4bbgpRxH"
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
