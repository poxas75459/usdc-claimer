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
    "3CvUoUXRo9LX6k1ykTDWjwMn9suts1njmgGC6Cwf1YKhZPgAknStGmhmCNspV1bEVMfmSrk9FCmHQCCZF3ojTzWe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56xtTgZc7tCzLJ8PY1qin798xMZJjj3YFKKh1hiBqM7op9uE4LMGHQen9ysgAvexsfj88zzeAFn4FgVQGfGr9cxH",
  "key1": "2trkn2raNMko1JSsh6zwbaztJo39qtn2ubb4mzPMge622pgSnfNBuLCbJ9UePUtHFH6hGgiCTDDQaCVMWoM9rhU2",
  "key2": "5vkio8KKf6jociZSon8itG5t1RNyoXERZEyTyutxdrcpkwrYt9igoRZQodQMY6ozoVJLYoNDk7ecsAowLEWB4gfb",
  "key3": "3wSFsZdbEDNtSF9sU2SsEu14gcQ16ejBQ5ATqRY1iPGsT9YYbw9f6ytfmdHkiTJt12mhjzKbvVr9nwatkRwRFed3",
  "key4": "3WGCwRQJneHRKBuAcScsypxiaBcAVj7EvnRS31nXPdNNbMHQX5uWTKRCrYVxF5Gt9dvG7yB6mcbnxDYY6RzKiGFX",
  "key5": "27zX1YdWukvXgmGgY4uoiFokD6hKW6nAho6Lrc2hyeeF1e63GqgxNeC7QZakn8asSA77vmggtJUn84DdghquQ7id",
  "key6": "hdWZrAo6iUEixqYCcFyb1qfYzqLQQgeenJqPnGMb1WcpT4vpdapzt2W9QWLMBsXeYfEdZLp1NZQWEKjqnEuvF1G",
  "key7": "5QJAx7iXFaUSothLuZLzWcgPEAbU2WSG7cwxCRxAHWFP37TxRZniUD3hg9zJXhsRkxRPff9n1qnKcWeB8LVQLN2Y",
  "key8": "2vFjs8JBieJbsEWC8pLkvMnKPzmz3Ddgx5PU8RXThCERWvUiUJMPgXiGnAvG1R7jjAP6YCn1NwkNnydFucz5QL23",
  "key9": "4YG9Py8bmfwyajbehKoLhTGmfb58o91SQ7UM15TdX7a3CDMj3MFP4BdSrVheLpcFSGVt1VMzWAwnNev8TaLZR2VR",
  "key10": "5DfnEmTYHujcnocHBVr5oJGozRQF5aNXLHnkw7dg1UXhW4iRmHJLKn2QTNbUUtsFdEZJF14a1YQb4PzAGVGMqoEB",
  "key11": "PJmqvn2YtxtvCLNsRnLHqWnnYeyuUvEYfW6e8P4g6M1xG4Y4TEoQnRpfm6cSkP12nuiBgGM9ontCymnVgBRn5fF",
  "key12": "2ykqL8xc2UzDcmwMmoLjCwwgkE7td1s1U1y6Jk45NG46rou13qsDbGjxMENJiTmKBfnKVLCwW9sdy2cxtVfdJ6Na",
  "key13": "5wh8hyEjUmqDZE33iMZGLoxPZ94ts1L7K3VjC91bcCTcPZF6gqYbYE32d1omFFxgrgGQ2k98ijrRsf88DZzbhZrb",
  "key14": "3A7A7T6w4pyAE3zAAW4rVfzhRRzQA4MS1uku3WeK8DjiwNTJXGjRbZNVBXit79bXDPrSQnP8qebPmp5oFM6v81LH",
  "key15": "2GurDGBN5wRYNNUMM7XK4GTnhJ8mULubYW8VSmRCugYuLDuLD6kAmaMJjazFjzadmXS3Qwk4eELkxbfd1jqPpKCP",
  "key16": "4isAaYPmuqXdMAKHYaR1vjTncbrfxPgPchUFmi76hWQTB4yo2pwsqzVpNT93uPZBQ8vyxwnuYLKmqpDu5mZbMHya",
  "key17": "3fDVhBPWrRmCXFiGAk6P234psBpqxpdJm6Uck9E6ZaTTMYMJUs5jucWSstS75eVVtJkkferMdrmFEDQvubjKBZst",
  "key18": "XLGM8Se1fLo9L25TSQ7rAqFPGEWFH2HD7PvhtM74qwTU5KDzVS63S8UsF2kj8WrrxX71TKueib9RjxYAZniVWXa",
  "key19": "4ka5Wjs6MWr2ti9N5KP9CdnNSut9C2UhkuFvDNGqUGxm79iY77Ap6UFMpVVZCCMkmgRWtff7HJYuNbYEw3hRZfce",
  "key20": "NzenhDfGAwQviEZJ1H2vt9pGQeXJ7FbNjcLnMpSqn83gFfe7kbKJB3CPJ5Qx7zGmnLHTG1J99TiKg95A4rYEz62",
  "key21": "4jwb2613Wi1jJgFsR1cjaFj8ya6kTNhJjp42RH2FM1RTk7oWorYfwCDspqYdWH72GSLWneBaxtNsShAZWyXZaoa8",
  "key22": "4WUqUVdSBcqyG2ER2GCE8dZeaAZxrjksCMdjGmoY6wf8PbptaResRMHd9iaCXpxMufqcF19dTU615vEgjuKARvc1",
  "key23": "43CkSDSqjBB5yTBk2J2JUuXkUifSNQm79Sn1SV765XCkDCThRfHJZk8D1VGGiVfJQwEyeyvLBiiSu5j8EG2kDHkR",
  "key24": "Dziqw1tWBjcsJ5KSNmN2pqpEGwmH1aYSECNbzLYPGoVgLUh688YPhQdQ7rbo4EJYZAHcvzs4M2HvcnUzjWtDUtm",
  "key25": "4H3zuRaxThTGp7qRTem7txdFvZDxkxe6rrJu9Nj9wSJwmhzkggiC5ZiWeJHxAmkoqt9jTedCDjucbBPMnhzhBo9w",
  "key26": "3Lb8oUmENq7uGytUcoGKrSdnkHqsjHq1rwrRvbJix5Lq4UcXVPcH8z78yacikvVQsSXtbP3ZxRqKo7A8a4fXqBb7",
  "key27": "4vwnBzWYQBBKMWMo1Sk1dYzdtuJFxS8KpnNrT2EW3ns8bjSFd2bqXxFwnjyMc2pZRSVLS6uam4nFx1DFPGBiXthN",
  "key28": "cYDsxnyCqV6sabfe8eqNU9BQjy77ccuqemXvv9J3MyqJWvJxHoygueWpn4ksLkYncbHDX4bXRKAbPxsLc3kFMPQ",
  "key29": "WESNw5mYJ8r71yGasbJAvkZsxefJQFM4xoW21cXNGbNjgrLmVofcx6VqoH6rgKeo1dDngvS79cjxbvUYPJeFm8i",
  "key30": "yVM4HcSUAjVvEvKhCyedCS9DjuFKg1e8gVknKACJXB5ab4A1pmxhdrUVy1MGLPwwLrXSJTj9aeeznQL6wnpmfSj",
  "key31": "4KhvypY3gUMSt1DLwCWFwLD8sLNGZUQq8XGDeoHQYssi2mVFthUhzdvPNHPPjxpZQDzzgbLvxEvgjZA522u21n9d"
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
