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
    "qHSjDT3TKcVWv7nQPQ2aQNgtQxRapdWvPGRxKWGAc8F5UUV1Npkxq9q2JksZtUZqsCLudsKyN2eViGu44vxtZS8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f4KDeq1h7rJJ4TBohr2k3F4bVJ85h2qQ7Js9VJhECrVpoPc2kfrq2RLZ5GW1dWCP6uy64g9cL1GxCVbRBUxf4rE",
  "key1": "3WsvZCYfJX7dKG2GftojccrXNk4HjKLM7Gg35KGwyn8B5UWzM1TUhRPHbNbLEiNSQ8kxmhuUwLLiVjdjuBLkCD9X",
  "key2": "45v938tXBxnZ6eYCSeHwPsxA1QeQ5mPynfiURuKT7aWxqDBnGPmXafULDnRVEj9m6vwu4G21B2nrqwWBMcFf5vqc",
  "key3": "5vP2u5rLwzuZgK1ZCNJT34nkxMVrADHdoSMuSoDN1dRdjq3bMB3btXYxVL1uJbeF5kqEEgGKLYSm4udGmRCbGpNB",
  "key4": "3MBVKfKTczdXiKZtaiAneFQuUtFnSesMCTM3AJxYyDq3K8ynrkWYGLNKU1MhZi85xJDC5StRvt4muYUwFMCESAwM",
  "key5": "2dH1tBtXHJy54vjjaB6CkuVYidA8gddMcTmfnaBi3PqexKCHxojMUJv25h8Rd4jetdZYoWegoe3dsV25Tzm8NeMj",
  "key6": "4kitUruv1C3eucVTg1MXVL5T7eHaRsUZ9gcTii2go1Qvc7cSVdMdMDhubATbiBrcmNUJXyD7L7ZDDL11Yb5b37MU",
  "key7": "4VzNKaNaaGHDJ8qhDyrWQzY42PftYDj2NFebQEfsgeGbEzQ7bJSbtNSrtPDt66TSLQwHFGvMbCFH1bAZj6YFAFs5",
  "key8": "36GMQT8cyYw88t422KyHtsHoboSaPXexQhohD8FFEcnt64oRgABxYDPMTRSd9Va7C4Ko1HVi3VgD65KEfYnKnXX4",
  "key9": "161CknWb9K19fgydkFsp3WbDpMWPF62k6yep5BEbvJCVWNwKLCFeBsoNjAk2TdXj8Zud1fS3C4cEsZvy4pu9TYR",
  "key10": "2Qjab2fxT3fsgNFBVKorT2ncsv4JUs49MPLhSd2PM9DKMfhrrcBBhfr7f4wwe8gkrpRHP7VGs7jhexWmG5jazd4R",
  "key11": "3xmXDfV5qX9DczjwxG5HhPsBogbqRdkdEaVtYwKAQAnxEKvCkoAW17Z8SqsprZhKeR3n2APFpgLLvADdRDBtU4aH",
  "key12": "9LYLo6qWnAoEqksFkwvSGAFQsJJw7ncuJ2dkcA3BrXNzBRpF8uoHiSLLcDLxNvRJFo66HKP2NpSkCWryeDZApjY",
  "key13": "2FTNbwZ7AH9KASQo71U6wMU62ttbzhLT5epG7dYahw1MXnzqvUPXK8C4ZppXZsfFg3WiawcFWGnBMMcDW6yaeVet",
  "key14": "2JJte52mtKJvxUJs6YV8WHxF6DsT6GHF7nxX9AJMUXh5cMeATgWTbWPtPqzxeiX9jsRfarRFQjRWxME1xWjDfrgW",
  "key15": "1SF7hAvrbtkxhtctfS9SZgaK4jpLsaAec3qNTTKubBVjH7apB2VMfyTddjSrQzT3ioZRFopesBGpo6fhaDgEAsE",
  "key16": "3tG9Fsw8rtweoN8ThXhSMThXkdYYwcgsJUi1rnFqjAPHqArvAi2Ryq8BeX7zGgoFsYcNw9tY9WrN7DzPjLQfC5YB",
  "key17": "481Apefea2KB18y9mhP6xbpbuDWCTYAXG9XGCkiQ8DB8SYtrBWoJwf2qzVwuArsT4F9VWv5fAQaYmS8RifL8mqCa",
  "key18": "5vwQgsvdD9UMYHJ11p1CA6N2oHKuuhrbcyw3n5vNui5gi3pVc13BSPywrdRcBBrg8GiWhZYjkgSShrkySDFCaoac",
  "key19": "3DFYkywrgT5So2m6apZqRgDxC5RgUaWfw3oFrHsyKPTHG3x3buqBbV2LW1v9JsueN7gQ3sWHv4SpMrBRybkCKiqe",
  "key20": "LQ6otyz3a1e3u6EYxM19mGjTZfEhb4fmU2auPRgFinK6xirF7pta3yrSMfi45xqHCdjWTEfW5kAtgtBBntogx7g",
  "key21": "5zj3LoV5Fze4RHkZVUfeF8wHiVaJKYvwrjm1MTm5zpuStk6CUUWadhhUKFSTadzCBd7zXqLBW2VbfSZ12YAMiZbY",
  "key22": "5cEoXTCDmjaUKu35rWgtHRVLSp1vrr4mQJdAmPgonisYbxz1zDCqWU27bW3Mh9YzToqvTGx2bPokpKy9w3evBRiK",
  "key23": "v7BPLqya6JHLSpbTjJbwJpCYAZMGwfDgD5rD3vPRqTRdA9CnYWbQGkbyAUvQt55PRJTNS6pJ7ndYAaDDmvKj58D",
  "key24": "7x3VkLDv27FoNhSqkFTNte4DGhwdcz3SVUoNDg64Q2dH5CFcCfFzTuPeM1QMgBZWCwBkQ21GcutfjouwnJfj5vk",
  "key25": "2cxxrCdGSGQFD2kzrGkDrwefM7RSobMbeBMH6KQXW2GiGRU5ra7T4LRm48GzqPvosTFwFjC8AnFC6s6icwcEThvS",
  "key26": "3fukCmHFKjDJytynLbow3nbABNuKTddXWH6pm2NbeSigLP5TkeHjAtMwBYxmMiDdMR1WUy7cimo5V5j8NkDc88ph",
  "key27": "3Qs7NBwqya9JF8FEAPLRrMA8xh1efK8yz6bEqYeiKjQrnz3wFhyucLFyWm9fMSzJDWvyWvR4xTeW6SBxLHW4WJrS",
  "key28": "4F9nimoBmU4unT58GvJtrfvivfpMsqrAK6b2bHMfnXm4fNMdGB3uJ1ZjuNs17bqpZr8kHAxvtgnQsLY2Ee68HHSq",
  "key29": "38kBEps5iYD2ectwJcv49KzUBLL8oVdtfpwKhRTmvuiw9kF8rptrBw65ERtv5oKhWPPxpZ3FxNuHm7Kix1ADjtVo",
  "key30": "2TpBx8BboCuHDjwXmPjbwJuK5c9g7qiDY6WNFCMFTFqPdSsDj7eDXQNUFLSU6xdErjjfq9GM6XpmnUCABzZfgLQV",
  "key31": "3DqVr5KazJmMHuSXKQMQvEm4VWdG69G8CuowhSit6EYhMxSrbSDnUKehBtrUuuBiWPYt5Ef9bKrrZ5eY88fKiXDi",
  "key32": "2EUFzy6AttvN8GZGcCqsMnBCeQ29NKZ59F8WhaNGgXZZ8poLBPGGFwazYPCsFRLhxHfsQR3MJdM937kJFcLFFvmk",
  "key33": "2Zt6Gz83CAi1EKADjjhcHk74j73dzt82kqJLogAz7MkQTihjzkTCfRic3dhwZD2vsT4NxazsikrSE1dj1eX4UHEQ",
  "key34": "575pnJQnr1CToxJHqRe4ZYKKS5k5AZ2Ja6uAqEg9RHfWdm7EuQiMaQThd5UVWdXQSswbGmRdvRXUvALBGH9Zb827",
  "key35": "4zeTurxcB2q5qQPUbPPUFzhgt4Xo9Qh6LpYAzEQd9rzotDPHEoAjAoiewoCFWvcUTijXxJwrn397BjhLxVf1aA8q",
  "key36": "5X1XQW4DSz66mUdzPgvzyBX5aBpcfUDdMR9v1fiYdsuR19Ba7sKfusDyeaqwB266ijAwJsmySmMbBSWxw7mFZvJq",
  "key37": "3W4RvUDo7EgP1AyczSHbcAJD4Zs9nzb6Ampk94K9eqmP1UNFAEuoMsW6Vjht6rqj3xgkqBfyKKy9u4Cb2RYFbsRH"
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
