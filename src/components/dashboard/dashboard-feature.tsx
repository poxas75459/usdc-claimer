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
    "4kkvz58XNsDdk2w2NggCWdtf2sEcZpXUmtsTsK8SkzCLpQfrKReUrtoGribxbPiBPvmF4fSvBZNDPoTUVSsdhyjh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46DdnoRxot3JJCvSo4GyrnZxP8qRWVZrHWQShBSgbqFKMBkZnYNp6UFPxZjHnSqRUmaRDka9ktn2gmsd75TWSGBT",
  "key1": "3m5uLYvoaYsf9y5LowVhVmQx75bfJXDuA5e5f7fGtyKPQNgpGTfsgRnkWcnszttwLPArYvLoC3L8K5tLqMYkJSYF",
  "key2": "4nL9eaV8GN3g7GhwKmriPP6banCHzENRC1jwJvrydwY6zG4PXG933fd2yUbvXjpGqfXNL7VCAhXTBhWZSQUCg7VR",
  "key3": "3CZ6iu4Nm5hrPQ9XpbE63wqz3EgV41RthyBGMhJ4KVYmzuTKCf2jnqgtfihzDrPBsEtLVDeVfNpzyGfj9CBsoxjS",
  "key4": "4yS5iC7KNSvGvXmb76oK4DL7V6WRC9T2no8mvdaHvRYDiy59ma2FUGwUNqv8PdYPBadenpAyihNN6QXJZHmgzAsU",
  "key5": "Dz3Hug14fgYus1PKK7JutVH2sE5mbxAv8jBgafXnk3XbCUFjFgr2ketNVTAjp6xa4VQRBGZZmnFCY6LDMJa4gtw",
  "key6": "5Ha4e1S2SFtqUPKkk7RGBtJQYUkbNt8N6xfFMSy92gWYYJDpoUkQGtb1baS84MVZawsj2cLs5F5riFE8UksgaqcL",
  "key7": "1X1hgu1PJ2vqWPGUVgPhXzoMsddV8mTCDkGHnmuVFjMsAGSZVfBMdbhVmtkz7TR9jHtRtoYoodi3rNJCdycpBvk",
  "key8": "4YuNfRdokN3qWDEiDJzH3JAwxc2cV6G4NQCzxraCxm3xcCpLZ9Po7s6zaXHE7L9opQVNgDotPUxniYiCfctFfueF",
  "key9": "2RN9gVrDDwU89skEWJsSe5jWKFxZcUr4RXWfVmr1VtSJgVuba53EikJDB9x4684kcdHzTM8C7iQDtYewbnytPXsb",
  "key10": "gMkDaDcSy6eSqkJxZryzfkBQVQGbgiPx56TDAVcyJ6xHx9m1vX2wN6d3piD2vTn2U3EwB5AeUsE7uB72A2qHAEa",
  "key11": "5ytZ8pHZc3yT6iCGq1BgfW2vknW5Y3Sjo8TVren3XbqQawBZtP4JejFowac2EDnnGFn2MtFC7R5Fg1cWg4XGAWhF",
  "key12": "219yvizEUDNRZXjxRc2UeoASCnHjpSySmzbt4si5Mq3o98t2nACUfMfbtfBxHKAhm3VqqzBJ3VYsTVpMS6feW7aV",
  "key13": "3UmnjrKgrpmfyYMjAKnYfteXjQCvGPdsmuVuujSws3UXoKX9UutpKq6E3VYvw69hPTiuKM7AAG6YexTF1qz1kSGu",
  "key14": "3zpW5hMgVWBjLaQKvGGnvKksEbqqCDmXs66GCcRppPnVT1NkVG9RYoDaQMrb4Y58gR1XYzGu3ggwwqg8MJG2B6nb",
  "key15": "2vqpfsts1u22dZRmCdUd3Jw5tboF7WHoCm7eZUkXczpFLTU3pt8jnvpN259EkFGRCvV854sWXiAztp5fRXNwn67H",
  "key16": "4CvjvomyNtC1rERbMghT24p3EDbrhMe7EERQmRbbdBbM1QkerqEx1Y6i3dJ8JmhSS5BNK6nAAKJ26Py7J9eM2CAd",
  "key17": "2xfkuDiYx3GMFGY8QD8NvLNjVA1LmRrj6uUgYVDL9DmfdRENxHo5mdosDuz4JoXhy3zzK2EEsr4R7GjhcfPAdrVM",
  "key18": "4ypktLR37QQDPxjDUU2sUxq55vhT3wE8gt9PHPcBfpdUfp4JMHhheBfF3LevHhfT3GUg6NJFLDrCx9Q3kYh8upPn",
  "key19": "2WCuQmCN3sw2pvXZ5uQfFT4TnoJDQCtWPTuSgmKe1buGuvgud5ARoHaN2XGCYNRUKdCn1KadgrBcFjVPspJgKZ6n",
  "key20": "4LffgnMQQ6ysp2arNwxWjUZUu2qQsnG9P1TsZdCwJrfWTif8WKZDqUAqgRwkeh2coNNURCZhaLf451NyHXsgimp8",
  "key21": "21qbRqHZjvPM3d7Uk159vqL3AoqEcxvNGyqSwhNdG5rvvDJxDaNJV5s9EKuRgE5nHarS52C7XZHvXrEab3LDEH3c",
  "key22": "4LSo2A9GgY4eCfT97i4PXbDpvNzXGpLvKKHjQ5BR1ojR31atuiWgQu9pe3BB3ZPjwVQGWaGNZey9AbaqEvH61Tpy",
  "key23": "2Z7A3hF5gh7nAMv784bzx3zDrbxfqMTvGjtFN5PVJ3kXYqi5mQvasVWiffLppWPX1La3URNf5CBGF32N2MTQEUaT",
  "key24": "37Zn7uw5T93bXWtRopqTEGpyVkVgTV3e6idmCzP2GkBHHoP88iYqH37mU1cAVnQQfGX1UeCzvSib31HXzQ9ir6Ub",
  "key25": "XvVCo4eScRXR3PJdG9LpzP3zPyvSUUyCAzxgmdBdihjuPJVD5vaTQiYjtFqaBzGGfoabWVearGt2GVYxioKSoAn",
  "key26": "4Rb3GcZDw5QfMvcfkycw6gNPCNxy71zVoHFF7DYuRoB9LJhc9gqSHAbysTh7ubCQYtDcmsqK7zGWf7ypX5pKx5rb",
  "key27": "3AeAUzU8t4FHLsjFJGpxRBbkKQBG27XBh9XBFUT6AJ1aMsw6WFyzAo6cwnLKb2SvtyCvWy8ga7TjbBHW23kpFEFi",
  "key28": "6fDkMGNxcCysob4HHAKfAPMHLxgggU92HCpbt23YKbBmtTnRGtZ7innQHJ9y42RtJEecFxPjSousMokyyvuAqzc",
  "key29": "Bd2ZRWZSD6XTw12Ao4DdXPCtQwNCsYZZbAP2TxEq4CqCJhR5h2PXb4TXWGXcUbPjHGrrVE7kRcAEeVmv514AdTi",
  "key30": "5Luq1eAdSAxr9df9HUNyrrhu44fi2qKRTPwT6FhRUctYrmXhMZkyqJG4L6CjM8cq9WwAJx9FczgF752nTGfLYKQy",
  "key31": "5z6bn8iVpvu7UAQVUPaeXDtvcuc7aCerLSUJcC6AyCADedZxQjLubiRpi4GcTBREyVToXRiGzpEfYGxZz9ZEAkUg",
  "key32": "5na9rMYVfLCF5dcWH1r1ogVdue8eooPK8CURg7M78YeK77SzMYfLKq7aEfVtidSNuPxN1Z2bAiX5kJZ21mBZqyZC",
  "key33": "67S8h9vtcc2qHNRyALeTgUP4mTZN4vCkw4hf3NVyj4ppcvrub1wqX6pm5vfYfNe1VF3EcZSZ9ypYWaP5VRufHMWf",
  "key34": "473rWYPWsJjFW6LSQnZja5kK2fkgUNmkQLWHKL15fSWfsvQdxwLXsN3EYQZEgwozsS6W6YdkVsfVDLKQuVt6aTS3",
  "key35": "66StdkKi6M4aTWG836R8PuFqFthxik5Tc8oKyNsp2HGUYLqKfNeirzVRmt3ZTDUnwwe5VU4qYLgPvmB3CWb2Wsxt",
  "key36": "3QPj9C3cfBur3YXqzbP7FXxQCWheVBJSVdAWBdDnwFbadLecBDx6F6ZGM5uJMT9PtSsGDfz2GFEt6Lqj64ifGAUc",
  "key37": "4uhCJyaiL3yeBXXtZtMccXjfyN9ZRJfW6nqDbi7EpunCXonDBBtyAd1Nyh7QMDd9j14NXnseTWiN4hdANrEb514B",
  "key38": "aU8prSsRs9C2Ae15SmTTJGAEF49LG1VzCJMs7YpsqUpR7vjZeNwHnRygvXuo5HVZCyhbihqAnAJRA2gN5xsRiX4",
  "key39": "2uZfwNUN1ypZXAySUpPPjsWXkVR5ZD2ZKMRbZ9w6eJvSVn3TYGfh5pZmicg27bok3fpwZ2cxMsnQCm6iQE1tJk82"
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
