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
    "596hXg92K13M4DEeUhxcdtL79rkwHeFXsxPfsSJqiuyS6jQeb2SQWUgYNw9e1DEFh6ACjRK9NMYZVRr9q6TaA7ch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31YYrwPFJr5RrMSyawAWkDhsZ5Siq78fmT684xwgT6NUzZUd9jgbwTuXuaqhN1Tzy54gcmNzD48hHMqoRArN5aoM",
  "key1": "7s5QCEnAxXDFXi98dxG1YXoxUaaYQDbQG5CmY8rBKVvydnqvy9eqTLuDV1V9pXQ4wHW2msQqWJdwn8QQYkAQugk",
  "key2": "7VDAKUKyVZMgZxcG5BUpLcL33jYY4tgdSXXnqAxN34zbEE2ogXqxrUT8MzpBR4ua9y7RSeN8gPYUWXAbpo1LRTB",
  "key3": "2EGXuLQtx8gPpufwhkEshjfFjjG17UtRxMr3tSRtVUYXqSd6sxnFyQhT4hvNc6HzYqGpMGHAqyPdHDqJy8NR5sqe",
  "key4": "37wg5WqX4BDCi6xpo6647UtcpWrf8J8xXYkW31gyx7T2HWKwyatexSh26mbBMRBRKMa33eQHG9gNwJfC5aTLhzs",
  "key5": "3Y1tQB6RDQZVjK76cSYtUCzEdYpUyqCUbSzYn3WEhVn3M1YVfBVdStbMnzpjgEQgQfoqj7GCKLRBxngCCw3eheRs",
  "key6": "2KVeF9VxqMk23tUCgPMxJqfpSoRkU6hAfV9GzuiDjyT5a8edTUSDqm24W2kb3Ae6DftYP6v8HHW5ffP9Rpx8oowU",
  "key7": "emPT9fpXYrfSJDiN45wkKC5ypkgvA3yCTYLExjwEd1x2XDZGP5AQCspUsLnWp4zWtCi9GR2ZH25gqq4GXowgC2Q",
  "key8": "U673kPqCmQGBXehs8ZRAeoFXGCWDQDfxJMuBwaVqJPvGCvguJn9fPGBhysbboF79BfM62FK2SkTbkoQnFEYgeKj",
  "key9": "52xGxTaw2zjj3dF9kYbgcB1MzW4NrDYR1Y1rBSVuqSoQhDWcNTcHjJXviabSZz1A5QYdo7bEfvCnPUNvZNxzbryu",
  "key10": "2XaNeqNQnzc8CFwKEmYBLus634PyTYpcNMU66xxv3648rk6J7CavQnVJBCHufUpBtGSvBW98KLzVuyuxMbd6QjES",
  "key11": "3hPeujjXxVpYZVCwmqxPE8t63S7TDMVQEAEMe5AD3EzZ8xr9UqMh8oKUfmw7C3po85LoWV1D98k1xV6SPpMs41ii",
  "key12": "LQvkw8Vj4WFPcickRcyHoTohqvAwuznWQvfdzknPSM41BmUrN8ee9Q3cjwYf6Uv7akWKjDdDRn4pTw5mBbrcChZ",
  "key13": "52ryVeRyBu7kUHmt8ECMv8cNbjGCuwk8rgVbmLGQc6RMgQLWDozhLTAkMuQqrzNafz4wk8UoauSq96y964uCBaMG",
  "key14": "3QVvyQB9gyTD6hM7KDiy6zn9ZfZd8sFrCAATn8fkNsYY3UNFEaFumHKFQSgFa3rhc7tYyZRgNETqbEazsT28wkho",
  "key15": "2pPdbXYQYMisNeRZjLsyRtzDVSndxk4GQ4mMBrTe1eTfXvrmpJY41eM8fq3Ps4CEKJXiXXsE6pryD4YA2ASEhWVB",
  "key16": "2pDrTBMDEu7vnejx6zkLAYDqx68uRNaYZgFBVAx4Z6mhYKfKh76B1jn3LFmh7LCiJzsg67m15vpiCfh37P8414tb",
  "key17": "3qqJRtTuonSEig6r4vn9MU1gNJTpH8Rp4K9dffRFMsxamXVnAtVZvNuqVk2zKXRLUyzjrpRrKufngzztVoC4PRXw",
  "key18": "4dALSGfj5C2sFGYQXNPnNiXZHg9By4AFcm1sBVpqxPqr9rrfxQkQ4MnQaxrkq6QfZfBFmpxCTiKu38mh129Nzurw",
  "key19": "4XqqL25Yr3WKAGTbXHQK6ecU8WJ2hz6hgdvGYc5q7zbGZ28Dew6yvYkfuzNckRiLYiot3FLhEW7y8HDS6HHn3oNc",
  "key20": "2GRCT9W9fBZLxZBK3KoNmLwi66m8GZTeRUbi4Xt4spXK3uQQTsCKhkzTG2a5t3NmPe3xkJ3oL4StuYmSnLic6Nk2",
  "key21": "Tto5PpFXYaDitZF1xKcf6UQSAfu9f6qcPWP5zRjC742sTZHw7BGaZx2QmbsWWxdLUzamN2wbAXyhD5JxMLyujXc",
  "key22": "xa1zKV4EGfowapjgBf1RKvULdkyCunFsWf8a9L7NYLKMpCBTmpSoTjirXVYGSAtR6ZQ77ZiZyvCSLMdUzVyxoTr",
  "key23": "3P1h7iRr5N5jJWPedrPgySH5EYEaBQpJvHbAcv3DkYioh2QMrobZFSJvr5zHoBfx6AVuWgJBFBiqLx2VoyiB7SbV",
  "key24": "57c4wePLQnWLjZGREGQAVA7pjGwxk1GW6SCfurcfRQj8txeFFEvfg9PCinBaN56q9AgQ6QF2D9hUzFgRQhpEyL93",
  "key25": "5WJKj5QpX8aS5nTegEPQw3t3oRUrNEGR3Qq1W8xVaWMQoQQYEx25jUESx7kZ9HTot21gBzytD7h2p3bjHE5sf2rK",
  "key26": "2CmyqsdfKNPEtDCnAoQGLSk9TTGDh4EpEENvj6BZDw4bCKmFbQhrF47kJTBQmnSU4KQZD3UT7eDo2ECnpCZGFXzY",
  "key27": "4cmGgRtSTreChBXzvast3LxwqSNzFrRtZpTHbvmzeaH7kBAdjmWw6dTSYPDr9gDaotQMDrAzfBAePCUsKqNafHjY",
  "key28": "51gaEf4pnYoPMFrjne5FqXs1mRtCd7ydoRP5DtzC6dWWi69QeP7tAVLcNZ1Nr2BvAL2Jg8PyrKizHN4YZ8Uj23Rh",
  "key29": "ZUMA8EW5gU2PuZrRnbTfWcF1bzXJR8vG6ZFN6xk2zXdD5Ln2ixzebziZi42BC4dtQZgosNNLcKkAVqVZHKZXBuC",
  "key30": "3MQbRfAjbNauYcseB6yTJRdqbgdeKSA5HHzaJ9aGqjvUWgBJdhrsLUh3VMtP39KyNDiZe7xdDW5MHrkQ8RYwpztE",
  "key31": "5a8cf48Sc9hRJQYwjVBztQy7nEiFxTDLiprBEkstzEB9Cdko23V4d6cK9LHaYMGoxSWa2x8ncmnHD5Q3TEdD4oky",
  "key32": "JkozwrDuSnZ1z8xGvTwZemLCfrSKwEkLamyfPrWyvAX5729YQBJdzBTKGx5oYcRva65GxK9C22d4f7vtBSrWSLW",
  "key33": "2tomtmGc5Ew6q6RdYTsdxXTMJh4GyAttqj5H4FXt5iHwQFChZiDNWKPdbo56w1QDp8NGDzg3o2A3kuVuquxaDR7K",
  "key34": "4TZAXD77DVv3DAZPcNyFGx9NJ3que4JbDZTrvL4VPpHLB8f8fpbxPk7YEN5WbwaNWFyQZEEHf9Ug6oVCfA3K9fne",
  "key35": "2GFJJjK8MBmkoWjJxEBJHttCsMPV77KPYGMc3wJF1sgj5ZH4bCULkWGjwUZHiWtVtw9Z11HKQtp3V1Nuic322zyR",
  "key36": "3Svh7bEy2x5uEYLAm1PMdhDHqU9E6ZyHNhUZgExF5BFHu8weJag5VYgx1rnC7SoiF43ZQ8Xc8gLxL68NbLsc4wMk",
  "key37": "47FCZonof3fnuA8MMnhbLjpEg7ve1TBxYN5wa5nH8kD3LEjemYoHwPbYzfdJoC2ynj3XmS4EkxwDfYyq9WGCefy2",
  "key38": "5YojCSjzBoVC5SBsZEe6BEtwk5RnV9fDX4e6SHbxJ1Zmh8LNhXYZcqxDRSTfPeUCoHJPvbuUkDypLR3quySRuSqY",
  "key39": "2dNXyTiaRM5UZYh8fTaLMGH1vzjeMkrdWcQzDgrfYRjq7AYeBbZxsJ4HuvbgCiAetRPkUkeqjzfAVGdC4DcbfBn1",
  "key40": "4n6Dichrec5Gi9xjcahBWJ8jGM8MReqN9B2MPaR5UDgj4S8SchAvQB33XcWEiWmxha16BBAoY2wSbK6nC7tPFoZh",
  "key41": "S915uVfBSmzpfVT3mDYcotiVJavqb7BASYYv42d8Re4xEeMLzFXEXESAYWoUWHAf7FGXo6PxKQRjFp18yLV57Pj",
  "key42": "3mEfDrKTmDSdyUR2pUwGV5nHKNzy3u4vHA4E6Xptx7kaAeWKQ7m1TUCeJ3zBTgV9nrmap4K7MQ5JVR9VBddnDKsz",
  "key43": "JCc6qV6pf9Zwq6ir9Lbj8VVWPh9e7C2u63NcNBdPwwjsQeVvnDRVeRXoD35mZ1QC6Je2t3DV84c2Pb7hwNCbMML",
  "key44": "wETsQpVdxGHHwzum1kerC6uSDUk2mihbwN5kjVU47VNASEuMsNcXHdfz7mvh2aPVJtKRzhsG4zCmagLnGPND4QG",
  "key45": "2QMYrBr3iEEtGgb5XaWvi2C3VR6zAzuANAeXTSkg5sN8aDeXr3oCb4vRSTJufuoP4zWMH6c2iyoyMDZzJCVvM2aT"
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
