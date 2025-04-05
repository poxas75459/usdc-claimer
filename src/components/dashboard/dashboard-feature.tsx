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
    "hcxTk6qunrWwprGNetmsHpuEFJmTVHXUE9e99BSxekPJfp3Vo8StHFqaxTKTna3NzzHeV7vZqv1tHpMuBwUCMg8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xBcJoj82YEME6xuA3AV9mkuVzgAeJ5t4ojxeRw1WDVB6XdaUVLZVecYx3j8qHiEmvhojmBBqJqgGNLN2t3o4UNb",
  "key1": "41cVcjgHrih9LornJF7FpTX5ptsgZvZoFd5UpjVgU4FhzKMZSt2JeJpr6JF8d53Y6NtXQDjT7tLU9Xq5qx5zC2JE",
  "key2": "3LNbGK1HhmPKjmgupQK6dN3MBKyJerydXwL1mw72AmdZwNqwcKLkrMQXVhUU4YAkyPdvvBKfVW8j7BomQjfUPryz",
  "key3": "41Q4cABDKZNG2Q2pb8PxPUVgLURQSB8SbfDuB8uVBdg3Y92rggNfnhmmHfxLtkpdwK9uTsLvQu8ScLDGvweBWqVw",
  "key4": "554mMK8DPHSQf486Jq1m1yCjWdBCxsqMfKbv7YVPWBSJYPT1zDmVs8rSDXcHssVph3xyvM4Da2hHTYWD1y16Qvkr",
  "key5": "4ZEVJc1iayVnSr4761Us172AxDPRtKQrTcue46nbiBb1CtBWX4GQy7ZdMPEUBu75BrxNL9a8a3uFTHPsCWUXZU2q",
  "key6": "2BVhN9x1dY142bm9g2f2kkq4kdzMNX3bTmRLcjHrRC9fQhwiUNhaBStBWzg7iDEzk1Acz69Skh5TeoJ9zWpZRR2p",
  "key7": "jKC51PZXaEhgrE7z6RuUW7yinRGF5nCefWfjGLNbf6Y56hZqusXrb9joEwijpcbiA7uL38warTboK1YLC3Md2hU",
  "key8": "a4WyeQkL3GdF1QzMcg2xgp7iMDPforaV7W5bJjoe6ChwepMcZ6fKuRfLA4mKGoRx8Aff3Z4vBuMwRtGLxdjWwzu",
  "key9": "5SWzwHeVVXUG6zN5DZPQGtoXr1DP8jTi7xP9fg4vNxjwKJj6snvQPr1pU8A8tio3f3LqDFMgg2qZkyFgK79Hn8L7",
  "key10": "NM8Wxww9PC7kH3jEUj4TLfvWaeHWavTL1EPvEbhWSZiRDRmCepJMDbJcaAjmu7ipJb9pcz8iZXAwnHYGXqU3CZN",
  "key11": "4KkQ51ooiKf4qT2B8pHUqX7U5CFLf1icJdFe3aqBSyBt4P1X3rdBioBv6NdtYkfyqeT1C5osuiZsJGnWxYDqnvwz",
  "key12": "AE1NfRfxAZm8w36D1RonmNcSimk9VrVD26gV6LewJb3j9XTxJ34h1NajYPHZSaaKxboYGahnE4HtYnkpQ9zdzGN",
  "key13": "2mr1hGYTxSPwt3fpDSbX4SUZ5tm6NRsyZ1crp2vv8ZwGWxGPigr3keEtsHBAjy3F4bf3zypUqRn7sa9T8zR3NLjg",
  "key14": "5VescoCEQw2Rmbsbd5bRwWpRnmtJ4WQqKhV1jNxGPfpbRZgksFEzTVxUVqGimBhpDTP7uU2rqfWgQivqzmjuyWNy",
  "key15": "4oos6QBKbz5cb73dwFGkEZzwgSVwxtSXTEJZ5WZy2SLVQUVpTFWKPZ5DnhmtdyKqp2GsUtdTaCNrX8TGXBpoD6M7",
  "key16": "5pBW1Dpfn1gubpLiR5nLsKi571JBiJDgtz1USNjpyubS3QQJ5jmMBQA9GQv34MgjSswmCNvsHGkuGEwHtn79RatP",
  "key17": "3ZUGh1mbHWp833tufDAR3smnZEubH8e5nVT2b5sgsCf9CxYcjULRmENjHrroyepFXsodyFDqh3PiEdpNZWJmBtwq",
  "key18": "2qmQa6zL5z2hjxbFSCPwyBZybsz7ywqNeXyJmqP6dGWLKYzKwH1J5trgPRrpLapLjjKTtawBhWbevT86N9tcZEdY",
  "key19": "Au2ZCTDerXWJzjWjvGXTpitcQ6VhzjMMDciFHNu7AKiCsSZPJV9vu18Mim2VHp2nKBXCt1DCXNFFpet9e1BuEqu",
  "key20": "4tfwJquNA42JZ3rdWFuKMiAmZKfpckjsGWAYgPWN7tbBh88S83m7TUF569Aws2rqhphwBGTsuVxmFoNhLsCWASPM",
  "key21": "2vdmz8Xbd2rt9ubgvBdfJ4gYSWkULHQ8HBFYKRadgMfq9cm3tD5c9CYZCFrzabLNc6kQxrB6da2DGJbLMTXXiDVK",
  "key22": "ZUNjQsDra4cw3wHAtx4mAnGaN8aN9qGg65BjcpvKpXbS4w6evPqrgR4jkYYCLWBP4qx2ZhLjrth2Bc3VDrqqKWC",
  "key23": "5q3CJRwYp7gFqr3AJHrihh3s8Yhb1efvDSeYJctJ14ekKFmSZgwu5rPuozcxRJ5QVQ65xMwpRhHrwrGaAE7hKG9x",
  "key24": "4vC8ZJ9edwXTxWZiPPantWpN9gwwyaGXn2VKHUGtbxbqd867H7guP56PSqNQGGRtzUKTQfdTR8eJEaU9UaWmn8h2",
  "key25": "eXBrJNCT2cZ5jjrJZBXQXm72Hq53L1588hVzSx59YB6VWcX1BYPt47i58rdQYLUHB3H13tVEYnWyDXZptqAFov3",
  "key26": "5u8jnxnzuSC8KqaYp2dS8aFN1daUBCFaKJZsZnMFRpzfsfKc1LNctNeAGDbvvnWeGDFbra9RHBRfYPEsKWeg3qVn",
  "key27": "CqctxygsTSwxEf4NyHy6cYrp8FzT5pWCcTU7xTkD99ce2NbYR39HWZjGVHn2ytkttwCvdbZrAF9pNeEGnxozfkG",
  "key28": "wHTWSxfazHMXNsAL1jiwVHFxVL8tR4BqKi6Wtmkh4eeAJMx7pAgtRRNEg9mf4uiFTfLW1PJvBRaQnpLPHtnsbCs",
  "key29": "5JjJh7hjCsW4LjPHyy4Q4NF7PSuv6kFSydpHNX4cpX76S2EECZLBmsKk21kiBaxBn1EzfaCYQb1GB3mY68DE4vZj",
  "key30": "2ADHB6hYuASnU7FGQAXujcUYsgeRAaXt6iHcYXHFjLwby2nLKNG1F89HtXTDizCDyh9qNHMrcrww9d2q3uoxBeXZ",
  "key31": "3VwJPyDHfzU35yzqmjp9jMJc6GKTFDjC3398AP1yCHzxFdm1i2VN9aj46cQvmgQv2ey3PQBs81VWsEYoBPSztFca",
  "key32": "FMfkZrtQ7vmwfyXhBajx5arqeNaNVeg2yzD48jamMn6zQPCkBg3qwQAjfZi8FHZ3ist9z6HEAwqEzUg16cwDMbY",
  "key33": "4Gm16d8V1PhLnsoJqZqFc1cFzWsz1AoF95n8J2Xy1ZfFBydAD1vSW6fjaAcnEjiQzKDGeTF7UYp5tbG4m2QyX22v",
  "key34": "4vdNrnrRsnnNxn5fZ4LJR7YzU2TRg3YZ1vrDQx8CCTJFoyQ1brweYWXwQtU23jRZrYhxXPHnCZucaGbiWEbF2Da1"
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
