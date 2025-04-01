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
    "2QNt8ek1J5jPbfQCTZmM1abub1jkAAxE73zuyFmXzkLdFiCB8qhTK6Ze1TeBmFGuBFtbmPVKttcJGfyeZxNa1J7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gVdc5NXggJckrz2US2PaS4XU7WyRYHsNRbLCUZS3iV25Y5TB6XoA89znukaBZmVTGuQtE2HMyJHkzaZy8jt1erD",
  "key1": "3NSeaz4XnipkHQaoQmgDzqbcp1EN5UNbR8PBkLY7CGjitieonFwW1frG3gd6nXHAqARRTxpyXcWyroskXKLeuP7K",
  "key2": "5ZrDQ39raud5r6Dww78c6TwoHhkxqmV69JDMTB2ufqHbVimDcShurSgYtBw2QdXEpCtSrfREsqnu1N6eQxy1juq2",
  "key3": "3hXUNRDZqRoYE4cMJ5nYY7NcNSiMxQFEFsVy5JZ2gpb1iiwnX9rq22pvSLwehsTdx8gcwiPRgWBFLq69LevwuXF7",
  "key4": "3hXi2s7FRiE5GW76uNqL8gGS2xBLnn8Hk9NXA3y7h7MSwkbCRt9sCnXqa5WfM65isBd14N8oGGhB1h1z9FtZHfwh",
  "key5": "2jNhsmpqXn7JesxxwnUm46UEZTrEVbaypfWGhgj1hfYvk9NSXgjNKsL5Qn9enNw7M3wZhQZKYGArEyBoLPTyez4D",
  "key6": "4PchXYeAT5qeQ9k2zz1rpsZb3ysS4XqnekUBtrmYxkHiSnDwhXxmNK6XubQuUWKRrqRY36ogqwzsVrP4EUqzmYVN",
  "key7": "5VKuStCVwwWxuJeZ4YDdcRJsrzxYU8pvHCW3VkLpKcAJD2K92tUVkovLnbKUPHdcZweUZaDzf79UABCntKjDV9Zm",
  "key8": "3NjbXpUvpQoDMrfq5SKiGHbjttENBTuYnnQ5ypZvTGCwu8sfBfwToz4dc3rMcHjuWtZ31fvuiUQ32cfUZywKWCGa",
  "key9": "5GGvkxWRJb6zeVJ6G72CjU8RSkcMr8dYRMNez2J29Q6ZLPFQ6K2tzgHd3q3gs4rkoA5g8hhh9gcoB5NNUnG24QMf",
  "key10": "4iHkVM8UwCFSGfrtF2tMuARJ8xRXsPgFv6zXiUueWPxKBttRimjQRhntXTJVyw1zTgATVA4H4kyzzbpyMLWtPAVX",
  "key11": "5CccJPzZ9KF6jL6NtgA1qn6sxXYKKm5hiLoTynT9btC1YAPaF3u2qthUPyBK2R1GC1zUMT7zvZhc938sbPGkVaR4",
  "key12": "EF3kHDvhVAwfJ2Ksj6FZvB4k72d77pA9VR7QJhKkS9mePURxSyxpnqwgWEhsSv5yGqDHn2xgoM6d9sv5yWTTWir",
  "key13": "qM6jMcw99BMmqU3DsRohGDb3m4cSiiqU2Y6k334NgRgYBawnJ3nTG52kzZDf5YGAwgkjipgwQfVr9KMJwfeeMvz",
  "key14": "4B6YHBujicnBPn2JuokHpyKu5yWnYU6u7KSvyEskiJYKCK8ft1zgTAwz23bhS274LyhSRgfzJJcjiiLXuUkiskyz",
  "key15": "5bHyQ7odfjSmJsqMEeJzv4dfKceENhsVrPj4FeVebQUHdiKu3XRAzrBn2L7cWWD67SMBdYpnUw5569cx2HfQBpAT",
  "key16": "4iXxDRofUFAWLrv7sfp2gB6WV1nhpoJn5EzPjPpZND78vpYsR556jLkfe1DSYUXNoCxMDnLm7CPQwKr2Gxeo8h4v",
  "key17": "4bbYdctr86gzXHKjbahForHEvSKTD5t5zxH4hRYrmfc26kwvnYTW5xumXgvKKqfYyVUHGMXviF8CEEx3Z311Fs8M",
  "key18": "5oL1bPoN1bmHMkiK1jxENqyXK7cfRp7Vp6RQ13K8yqMPK3TPLfzqzkjPUHoQ27Vxr4gsffPEgxoNz1mfyGYqgiYk",
  "key19": "5pjjJ7zusbpYCBogGybesxdcCDSQH2brLWjE6QoWEimrqkRFKNcGSSwnyP8jBScgkExt3cS4W49sjGLmhrka3J1P",
  "key20": "3amgTSVnWzNtitVk9Xa7Fk1LEbvDLAEGTtenV1k76Vy6XMfyZZXQRc1NRi3irKL4VjaHJcZZGGBBxosi8ewGg1HS",
  "key21": "PM5RZqUmpAiqNa3Azvg37ikF7rqPHHgd9EU3VDfYDyksRem5wbDDBSNTXidmPfiZX1VgLHmFmzTAxFSU9TDwzpk",
  "key22": "2jnmVBppktddXyNJkqT1vt4V96wsHqj1JfwUufFmQBfdjRhKrTWuEEtckMQGUBdbjoFQHmmEHABLu6KsiwXhrqrB",
  "key23": "2hQrLD6fEkyoCSMjK7T94Xm4hAsfKRU4fxAQk1HRdoXE4bjSG3SxikSxvC43eUZkvjYrQnyV5vv7Teg66i78G6Fg",
  "key24": "3a8ANdetyBicnhBFSJbQKRv3D2ecJ8dWwkpvkjWbA7puCUyxQjrtx4NdTbA6YMjKbsxpNWHA3Q4ZbrTRyFueF5d7",
  "key25": "57joRFCjixTQMEq7tPEThSAkt47owq1hfWJFsn6qDg3opSVrAMjtnit9zBKWrS3WKcQ1d3hrkMwBi8ossmp8oWkU",
  "key26": "59xPxpeZtvjzCJ1vndTxXt7H1QNDLpawjm3M1mMYhx3HUf7aW1Dt4ULdm5dJmXqrvdbtBVHctgpFpkzd9YQQhCQL",
  "key27": "48ScHhvZ9ApfxAhJgFqjV35PPvGyYwenrRnn5o7K8oxnqHuAdcqmzT8KrceT16q15w1xrYCjXGrGA12mneMBTpqL",
  "key28": "4bsVFtJ3hnui5ShvYMqyDgYVg2ATQGM7wrsCYrGDvMooUD6fR87Gy3ud6P7kUFNaGDiqMUhgNPemaS7cTpXhsS8B",
  "key29": "4HmuoZwFjpsPepibbHEeW3R9Rr3KvsMGDuUGKC25BM1yj7EWoRmNHbApFKr6EYEdfM1efTQWKJWhU6nswd2DvjaF",
  "key30": "3s38wKLvVLHCg6gXnNrhybHkA8Pa79on2N8EAGknBXeagG1MvpL3dWCe4u9bKgpeZ8QBrf436ge34CZM4oaH8hjF",
  "key31": "45Sxn6YovvA9ha41vEsrPcBbLMHkHTnQsLCt43377YJRz73bmV9ywLXSdhazomPPtEVdM4RyypeZbtKyz6xw4Fju",
  "key32": "3w7u5W17P57jt8xPDLmaQJWsaYFL15gxSPqbDpkiJG22sqgCBCTBffxtTEJKxtELsbWY4u49o8XR4S57Kf6WHTo2",
  "key33": "rum2tdcz9QLgzMznX8jwdkPYibb1qbgLFuHohTdM7m52pJjUjsc1xGSgYGLT5E2Fw1kuh1byUiwaitQua7o7w7t",
  "key34": "64VNAbqViUKzVnNgnm6XTS3iJShTnoCU8JQVAp2h3hzN9x5D8RDhmrqjKJfqtDArQg8ATkn1VanGJ6Xmk9pdXR4U",
  "key35": "RDGMqPdnRVTdfnpQ8idW2Z2c7Kkn52ab4gT4ZnknRQT7o7xqLoCdABf4XLBh3qqXAbjRqRnH1JVLapvVeexuHrp",
  "key36": "29rACdkQgSX1iDRWuMT4kXcxHgd8inH7hLC35Gi7dKcvxi3WBQ3pcMyQW3df6zuULUJ3De4bT1fDgEzjzDk8316U",
  "key37": "3kXGioYrUTjxZvRgVBjQGkzBFhfqMgfh8NHLYbuCKFixbMEp7YENt5MhrS4mcyTS2SAQPCYotBstr5KPnsg5JqUx",
  "key38": "5YA5Vpvx2X3GWjTcmD6ZkETpMwpKMX6f6HQUMxzGbm2awDz6hKLgi94vTpigUvxxEJPSbxRstfv8wSbDt9ZGdRhk",
  "key39": "2CLYY3BigRdTwsjRZ3MXYHGQ383uHMJVb8G1spWzzxiNu3VreEFALdkqEvaJg8ZrUjehNSwJyphbD1wYCfhmoV5F",
  "key40": "WydViqpeRA37fAdZgoBfoNeXDJAvMVEncxYdL2THxdfGvY5s2pqRE5dENoVNFz4mymqVUDxMNDgvGrBrzY5WPVR",
  "key41": "3aWN49dQ26rbvtPNb2LPYL84YMrzYx89wqC8Pu2WTZWVkyjYtoNX4JmjNECXEKgHz6GCVE9RKDMjLwSmqr1CPR4W",
  "key42": "4g1urRK4YbRd2EQpPt4xo5GiHMCn949rEs5j4gaSMiBEtDd7yk7s6Lov1cYvpsFMrYEpnm1243ttK9AU9JdMTekE"
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
