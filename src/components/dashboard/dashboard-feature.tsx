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
    "kZuwvqnsL1TbAFVWyipBvFq9wwkTrzk8Ex2d7pXCu4Bdi7X7EAXinRLoshZD62ryxRgboQrvE2u6TxvsfGLsVkE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ptBH5wC7Mirt63wi3iYGiLumQgzWKZsovQk1s9CXm5K2pSqw2m4TWswCu41TnfTgVUnec1ETjuA6bRyBtRutV1B",
  "key1": "54xakD6UUzsCeqLvYVa3Ksgy4y3yrvKD3X7q16SZXFKXLzVPMhKpGyrazavvbhH5WCnEHezJdUFr9vRPUqHkb5Nr",
  "key2": "4LWAZRFMWisY9DgPvMop4whKJpqGW5b3hF6oJMSLyR2K6f62FAWjEBTZvwAbtdeiEnPRPy18aYAMz4DhPrkgitPD",
  "key3": "4pUXfq7jcfRkTy6rTfqVrNpKuS5SEnvcPSsYF4NpG8xLqzNqJuc75ZSXgvXP6Ry4gkScgcpeMkeGGeVdrmJHgC75",
  "key4": "24HTJ4dtSvUgdoMiEa5LhKRcLMPykc38s3TA7NgjSXjFoPqZVCtqFvQXDAmr2mxfi5GCu4WTAm9kM1q7bsEmCV6k",
  "key5": "3VsSXtCSPGy5XputxSa3uKQUrQ46XQM1bsq5SPwB2L4eN4rNKvsH29cWd1yiJBJkPnKNwGjXoUXA2Lcm8GmA859u",
  "key6": "4kMfGfq14xxz5j7yTEUMrDPL9xSdnfqcUVQeunjEFkX4aAseJNjSACQkMdJ7hLt18ysin2AtqaGtzyNE4ixv1E35",
  "key7": "3xES2vNAYj41gUuagKiCpnhvNiJM1Q2yGpgXwh3ca3VpYxrMa1v9ynVD5RxtAUqbeo3zGW6QcnQDRnaBh6CnzpYw",
  "key8": "2dPsdidKkyAdnuHpWeAWZoscTDqd3V8RJHNprViksDHCcp6UmA6HKeGiLpnLJCGAMPcsrFVaqzfdSMLaisRKCRJm",
  "key9": "4ASowaYNTBa7wYQHyEChoY2Y3VGULLrx5U2V2sUCxvxrZLvYbcCbLJ57FbmXpCU3EVprY4q8w2Yw6X7eNk7gu4km",
  "key10": "eJ8KJuywun94wp7R29zDTeag3pZnSdASJzN334ujieVgtf1t91nqQEr8LFJcvTSLdSC9PTkaioTBMk4ox8E1LXE",
  "key11": "7N3sXeatPfFfFUGcJ7ZqiHB2BUv5xU9jmDMCGmEFizSp5XCuMhmFbhozrodSvHARHmkNT1EZ9MahSJLQ8VB8yLi",
  "key12": "3pvQgbppyjPxgUQc9sp5jfsAhgWSbGMR4dCu9NK4Bq4aFY6ePi8mALsms1xBN33n8ctQFHoTugSVzxabvDdYB2gs",
  "key13": "5Hu8i5MNW3UBPnRLq3TT2pBK7vXwABZkDSALes4KPoGnAHWW4KPB5zT297peGpT71C7pUZzbeBTPegCXsNFm3yui",
  "key14": "2uhipqLQzpRyVGaiTAA4tJdb6bHTSt2cjJAapqqe4MTy9LEhkXifgHTAjmU71KbfkDkpqpiPcU3fzheVjRuJnEHB",
  "key15": "4opunga2zxPwF9sfjEW9EfJPnGexeFSjEGWpbuSRxc3mfeYZeKPvEn56Viyh8s4TUPPWVv3EMSw47SXnaW2NBavk",
  "key16": "2KwR9fvzEeBMV3RoGaEHhKoYXyizfafwomboayc1BCC5AXPip4WXcg5UhcpjTs9zatXAwnVYDbRXeB9ar5mXjnko",
  "key17": "3JguErxGYN4HyTEVCMzzjoyXTnCChQSmruhUSmGW1wpJHoJKiZY9uEQFSSkLDUisq1V3cDTkEjRdnDEG96iSqXDL",
  "key18": "2CKDbMfCngzdYR3D4B4D7wRCeZB9qdyHbjTWSP515KjCkQL9F2SLvgtvKj7AjZKvThTfqUpCddT9yvvyu5GyLwMK",
  "key19": "5rmxr7wzUP4F6CHmhAhiz1hXd4xfkGDRU3FrgGwSsQPWWqGkTUv1Hy6py16vM7stDbEQSNjvcCjQgyWu1fAvuYuY",
  "key20": "3FfPTCBSJ32hMYrmyKmqx3Eh2YnfzC2grZrhxpZn3p5GxdjquyH9WWng8BWmNTVJ2obwnVWAGgsX1dMfskaLtu98",
  "key21": "2LeUvpE12uiYGb7esQzB2ToqJrTvxMiD18qo11EWE59sMB5uDdtjFDgJ5tFCnB8Z7j3rbDvfnuF1298TXDjs9enB",
  "key22": "2XaAErpngARnfaSp4ge7BLbzjPWhVAq4qXVKgpA6MMxE6dRMAVbAtxNpwmfhggJoqMbqxZTSXciun3sHELV6ekLM",
  "key23": "5H5xTavTeCD5FtGCFk78doQD9xR1gheK8418DGhvExmxCY3z8ZQoM65KNyv2aroLEPqrsVLXCwxRATfvPF6pqSyJ",
  "key24": "5zUo6Pw15BQRNp2stf8KcWUhKycdrdKw5ADHPBKiesYafz3VAXKhKx34wXMVgURV1VFT3iMusFaH6K3VFJBcerMr",
  "key25": "3RPJ3GwfykY2CVAzXLcDo6Mqczbos9MN29u2bBjmJeV8qPuRxGscnxknXYc9YubYBxRB79ZyWFCsu6FFNMryV1sv",
  "key26": "2JDAtzG8T24JZvyjoPCbXH5eahZGwDgz6knL9C8WBFyvK8DcHB1FuuiUf5esQwbgVDyWTj8XfCeE8PnoEzbPSkLm",
  "key27": "26pFerSNszM76ns35RVozcCeNvEhyc7Bo6HJMkjhcG5m4wjQmGQxn8Vn1VaozDYX7UNV7hXXh3nCzcWZzbPkM9LV",
  "key28": "35t9s6jFvJVHyeQgUmVrLhvaeiJiRJ4fpd3V85tschBkwKmNaFPZoJDPtp8eEG4vfbZ8LorySQ5CN3SLqGkUi9SY",
  "key29": "2G2N9s1H4hGJWJvH2gH7koJNbQkMNsXsXbtzfCRBp42gXpk7XGp8Mj3k7hW8axbitiFpWgnmPrVPUFdEj5N92sKp",
  "key30": "2JakfeMHxMUDMtBtYTZXW7MGEgEP1f4bE8YUkmXhdhetix8cm7upxwf53fZ2RvMUH2ETYyLGJfFQFcjJBuPYB7wn",
  "key31": "3seNGR8Cu2VKyPcqiQZf4ubFdnFGsevEDHnjtiYyoTH6yKzSmGGxATBkU9UawtkrQuFyHAL7X2n57MEjFTNCrbWb",
  "key32": "2wNpCr9faiiY1yMtHD2UepKKRgJZi6ugFj7w5UqfJSEXWJwYSJAwYVDBCvstNjBRSHGAeeMg4Bgev1z4DMgQh1Qe",
  "key33": "3UfW7s3v2Ec743LjcWpU8sBhoC7SN7zepT4qtiSVUPfUy7H9MKoCNsEqepWGw3fDCaBaLHtd1tusAYe2YfWf2Rv6",
  "key34": "3qHeRD5fbm1XDvXkwu7yjcNMYo34c67YzYR8k4V1s9SYie65SH49surREf7cmbdomizWxM5pZvL6A8SXhA2iGz9Z",
  "key35": "4yaQyUdLYCYrQN6QFYyFkdeTMqpDsAbr6Mr4iXqcEium3j46F1A7tShRCT3Lef1QWfXZvbz5aGjEWy7FdGLAstTt",
  "key36": "3mDfb4hjoFNZ8VZLAzeub9m9cJwEeGibQeiqBwnr4M4DPDQsj7ziWEJRAbXb4QVP2HnutyGUcRz8z9kVqDEBL7sN",
  "key37": "3njczuNxoChv59QeZFK69shHQzFiAxAkFWebgtoxDZmYvSSdCUPBLWNqgLTN6sT6PeemC88edpdt5BAcsoma8zVA",
  "key38": "3sDg1A6JzhaDGT9cGQuUWpyTRzB6AaNe2Qd2mZzdRBmkvYyZrPeGPWuvRqu4uVR5RBMa7UYP6PoFASGFvbk4VLA1",
  "key39": "63PhepCxxb952wSAjLZEg7SqFt6Cux23PetzPiFWwhFuQvjjSsH7W52sZpud2bP9QyW6dqiCSUGHN2jTmrnSHYTH",
  "key40": "2QM6x8JhBDDMk5SZAoY2hvbeShU3t4YzNoqswvN82be7JE8iTs9hAq4zog11AfS99GGMcZeNg7P6FneKgDY6YRPr",
  "key41": "di5pEoRADJP3CjnBRfK9Jv7eBhmGcxd17zaBwBqAedinaWr48EeFZ4rbd9dgiiQbihWpYsTr7yw3Z1eqr4VxQsz",
  "key42": "5MGDGeQDMmCNubmsghCy8YJQoeGdAR1RTvSpJBqbe1e93dY4PvfKxus7Bc2f2g3ms7NxJyWhnDTkSUh9hoDfQ5yd",
  "key43": "4BTMFb5EPUmpnRf2wekZ4BDaEbghtgJSiJaBWFbxXxnmj74nEvWeMp76Pmkts8u89uYdjCnVgHBwskqqvKCeC6FP",
  "key44": "4mxiHmM32Td7KZYrtudFpcSyT8FyZF6GJC9DHZxMosSZoydcK5tFibmx1vuJFimXNfkaJ8YMoYQcVpVhJSWGa8zZ",
  "key45": "3yNJyHZ98nFAkTDuQGoKG37ABseSZ41DSSz9vrsqRYebH5VUyJ4uPk5Hd655XNbgQ5uE3cD81q7TdgAznZh54YjP",
  "key46": "2JKU5jsZsGzJrGfEuEEbn5qjnJeVQ2LUtkBmfjKKT3c7Dtw5YHvENuRUGuUZotnHeJQvWK4nBY7LuS1zZyts3dkj"
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
