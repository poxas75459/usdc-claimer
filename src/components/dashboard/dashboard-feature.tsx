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
    "5tRTDBXxiQ42wDzuvJCGUyQZSxehoKwP41ZFPkiwiDGc7MHQfmRqMgMQ3jX9MuBChmqQyej7sY1Vyw9PPz6sM714"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GFep3VAWwwzaGtcGFQFsGFyRPVozZzjE71Fp8dYcgD8o6VNAfAwfk7keCJ1Mc1qELZUg7VcVXiM7tVYiwKSQkGX",
  "key1": "2yrj4WYf7Yw1f2u4M1x3rf3dL5YW7ruMHzok9jWj4GJv2Pr64XcrMXs24jyJQB8DeJyAdr3N3iftoGVH5tGhWqQ4",
  "key2": "2cityrXpnMQjbKoqyobWHzCDmKoaYSEeG6vuesM4KkpqkKU4QqwtjnP8ByCn596SJ2tjSh2upmvj6FmT3Bm34WKB",
  "key3": "2gMJqc4CHgbkAsXaZBm2kk6hv2qdvS1FHq4BPPUDSyPEKPaHduxXG48hEWmaZ86r3ov9KjgqWGC2HJd8s5wQE9t4",
  "key4": "2vkhh8CKQsL6dNu3e3jRnyDUUkQcB6tGjy82HuauU7gge7CX9Uhkr91rt7N41iors6djmHa1aNvi8WwUk3xcDj8z",
  "key5": "3wNUphocKXhpBjpckdmawHTwv3oPqZJvgWkm7aPEvpCWrfNo7JL3VaYK2banMUzfv6yN1aRjLj3xEpDLRwSHiyC5",
  "key6": "31aYPyFGtD2khRdsCrZBbtT82aCoKEjDkGKpoXrk9oe1RUVKqqakfqLUuGfkbV4CiMiM7baUJbjWnB4AYnE8mCrK",
  "key7": "5TNN3QQA94nfuHZhBQaWZRcn6DaJsQLQYT1usEUD1LcWSfxGTnSg857PRNxAJXmcchFoQsz5jZkqX2HnUvmWUB96",
  "key8": "5WQYDtGfYAXsAxMSqPbyfWAnxcRcVWCn5XmxGM9F1MGhSLGhEjUZ6hDEUnMXNnmWNbjZKxP24fjGTdiwgvPjXNyU",
  "key9": "2M43pfNEFGRCSbMcVzZpoDq1HjCGCHX2cRhonFANwais4MQw7RosXPHXqZKHhLJtexGJ5ivmH6gnuiJeRBw48Pi9",
  "key10": "4bbRNNNzbQG4WMLXRNn7kGJ8NBiQKq2krsSGSfpTbUNoF2dgcb1LH3wx8raUkvT7aex1Bhoo5AcUhe3KRsjxr3h6",
  "key11": "YgtbzGM1dHssJRvpxMUFEmhsmRgMmVu5514FM1SWyoTLUePF6KE1wmpYTEARUcSxs1TjfUzTDafzYhHq1fQYMnk",
  "key12": "EKjH81CgTJy6g6DX9c3mN9P97ebTb3ac9U5rffqgvuqZ9Xm1dhFmj9xqJ1v8UpeTtKGYkyaHSH6dpS3p27TKpbN",
  "key13": "3EvW8G5Nr9GrC4L5urmPQusnXKg8Yh4FsyH6YGBtV1TfAoSNxnKBxVk6PcQHZmPokWUxBwhEu2iXYpWp51TG8HwT",
  "key14": "4B7swt3ACXFDFnjNd4zrJiW8pSzXb43XaQoNP4SB7e74cU6XZwj3prDPPAQiirTef8jJR65Dz65Yin5kRCeXtVca",
  "key15": "3wVcKUpFWFyUmGJqfkB1duS9TZAEe5UUzBAvbGY1zYeKcviaMP6ePttjGBHNTTSi6mT4ft3ANwahrza8LE4oYP9J",
  "key16": "57M1nGeEtSEPMabEqtff1bdXax1VaMFNcop5nBstNbtU6BWQoJdDN5qtWVuXBt2ERRW2dBsEsaCkrMYWzb5H4d5t",
  "key17": "2mPWLH2E6fAWPnfEJUcGju7qv8RyRhfPMDcAtgPU19f76yRU8E8xaCWsngbKqrUxYWB6erxpYmQuGEZ31o2ai7eV",
  "key18": "5RN4FPhSNu9gnJihvJYE7UHSjWhpsJxd2abTK6vexbzf9Kyzq2ePzFfyGbMM4F48hhWdpgDLar2qnxDWmBTVdLJV",
  "key19": "4nxvnvYUPxjk2PxAYCmHPXhW7B9xcW3ARAgqAPYwD58eWCsNa25pCc8Pza5tS8F1AS8ApHTqGZaKdXau99i1o1SX",
  "key20": "2z6kjgNvHdCKQKLq5SycHHe5TzKp8Pvy2davzYj3nq1LhEU8wdEZhGTNBPEAAAAAK577YxADidcQhCAv6NBRrdpJ",
  "key21": "4m1RNz4vjPNZxSUz7h4MYDWPTKA7TccLsmaceDEphsVsD8MtYxSd2wQ6C9xFaHE7NURVqy1LMR8i9sWVM6y9jABu",
  "key22": "2bU4rvxQAChi7FyAzcFbguq3A7zj2zKEA5UhvamtdUW1GSpZiHegtMnVwALm5bFAi7bxW4TeetiuBmpwxTpVTsCS",
  "key23": "2jToSYLhCAhpUTjfn4qNDofx3DhSiiKaGJsL7p2v6ueHFdFZ3kpkupXxCkzy27kATNS8JTo3frx9Spk8iFoMDyjt",
  "key24": "dWRgKtWLdtbWUnbQw4YVJVxmMQsBB9e1yZtGGScGBJGqzC2dE2djSZFK4dDNM4DCNFfuBwtWcGtmmx5XPWWUpcg",
  "key25": "4XYQBcamr1NYMN2kaDnutzdkTPYJy466H8QBn5VHfq9oTe8Y8FpvH3j1BDTWfE1ReVovZ6DXubhbk9SaSbte96J6",
  "key26": "4xeC9vvNRCdxSVSwCPz6Nd45NfAWUb5tC89a6vu8zMzKsrztNzAKFmB7FvKbHhMQyeWaP8oabjEevKA5JoeZKtoc",
  "key27": "3mGe9pR6v9S7veZM4EZ7Y9R76P518ogoqKW7RWQj2CTTSzGtd952iX4wSGnYWU3byqsWPA1CyMk911o2TcdEQtxV",
  "key28": "4XznYyNmVWSgcazWDwKaNocvzMz7CqixKgoLVjkfLPVccq9A9f4ioVjPbRS52CiPdqALtR4LKLEcxNxhaiBc5MQK",
  "key29": "3NWshdqHQspjdopsCJZoZbKepXwcCvsuMTaKHW5a3B78n2E14c14m1wRM2D3WjAS5J4fFJx4mQsNrQWhNnUxbEmt",
  "key30": "5yzjdZqts79MLbSaTBcGbRN2YQGZctHp2rAMF6aSDjhGgsFrYW1cNSGfSSxzvPhwUycDsRzzwFqpbrkvHWdLvjSm",
  "key31": "2yQJzZQe9DNjgAqFjYn489FiTLMH27oK8uFVBoW1EwCq9c9NCcnrQX6XNr9PXsg5mmSRaucCfPc9SBxe8EKRsQsT",
  "key32": "2ASy2LuDDbfkS6jYRMzBQqj6G19EGeDUKvg7rnL74yVjxfkc6cYCCUY7157t5vHTP79FGE26EqpHk4QYFytKRzeU",
  "key33": "43B2zPzdSLz3LvKfx3oEkixmDUnqW22YBuYDTjep5G4XnPDf4GvfiESsZ1b6B4JC7LTF9FhNNFgDt8YSVMFjDNUM",
  "key34": "2kLPcfXKJyuqPWh1v93N24XqKiGzkmhkDFQf6tXwsQzwxy571WxpfThB4166eRZ21Pkzoh1NqauhLrtA79r6up7W",
  "key35": "4uHHixAjj7tkahjUad9RdQF8xYwhZAim8k4XucFLTwLjAWytUtwNYBwnCGvPYVbhCGE1ngCQyv5u9jFMDP6kD38",
  "key36": "3oN8xYCQvfJyJ86LPkCRCvXxo4tpSd8sgEsd9GYCPUUh7xQEZdgaJGjsRWy1bnkLoFoSEde92Ld1N2jgoZbHHSiZ",
  "key37": "Xa9dtYSyEbajV62iXP7imjuJ2JVNJk1A8hwYZ7wLUEeeJqS9LbDADGNCjajphVGDhnYkePn6Y4X3nQyWF4BbRHh",
  "key38": "2WJ4oUUYMkLm1UZoidN71q7eaZBK63zuS3Yoskr5vKiYujrQuFPNsqmCGyAakfG7akmDMBuZPw7cfqNC72nS4nWu",
  "key39": "5fjJNzdPyrSMyghM1twR6f9AgHEyBc4vVe86vpJQaeyTEVB1ezQzziLSPL8DWcfb6MhLheztX9W3bfxa8N7mppjq",
  "key40": "3gB69EZ44NoNttqxDWY3gmPfZjwhV3Gx6dH2gz97vDGYGspf8cdrXX1v5tjMxYfRWccbfAXCJb883YfLZuMaR8GZ",
  "key41": "3hxsd2dsDwcPkVNfTaRPMUsJ4d88ebLwZfkqCtVAdQrFcJrTEQHi7ZpmvxxHezDvS5cUGsPAb29j6sQcSz3td4aq",
  "key42": "3hWcS4F2cS39y6Nx3X9sWC1LEYxVNG7ZqCs4pFgkqTi3t4BVPjRLhD6CfKs6a4SsbWBJ5GQW9rwPNAhCaoEXVdb",
  "key43": "E24d2URAbde7goRi4nyDLzNfpTuzBdmbDwgWQtj8xbxMf3d572srQ4o59gWdtbQ6N4VYbxhMqBh2dGifMCj1YtG",
  "key44": "UyoM2NH7NVz5u86jHYw7GSPu1ce9zJpjc9hCwF5X6Vx9XV1YYU6b28upD17C2oeobFYrxBrMaW7QcB44DpqVKzs"
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
