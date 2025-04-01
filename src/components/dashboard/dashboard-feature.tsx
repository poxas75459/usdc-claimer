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
    "44QyGWB2L4gzeyPsBHzL23cqX7VPEqgSkc1hy16Q6PdVtng1NPFh5kFtqWv76VrJuq9gibThA1RSGEKwq7u75bLN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jDnjMGrANL4ErMZeLdXPe8wUWMmM8pj6umwgB7o3yZHWmojHgtygzMfqLAAjx7SpWPr4F5TRbQ2Dd7N3UhMmZgi",
  "key1": "3npsY6ebBK29XX2aZnUA1uBLb8T2pTrJcccGjayDVXTGoLVNEduAXjyQEYThZYdzU8gVfVHDdeW4MzJMAaASWJV7",
  "key2": "3Jneo6mXgyqrEa4akeqMqb8ywgCB8qV8LjCQqQAYoBk5yaKjFGKZKpxccDZGkVm2aog1wBdbq1T7VJAtyHmBXtbS",
  "key3": "3zUDR6G6uNCTL7inQmUaRLhjhF87X34eom4R6LRgiwYnDQRbadG7r49puEt7Dndmfq1Bs6PAMkCXb8KhnKPrPCEm",
  "key4": "V7NhgJdf85SUSeqNNnqgNUBMApMqYpdLoWJEJ7mRt33GUTEAngbgWPrCr2hV4fyuPLkXMf2Rmg41pMCz4w8LZAD",
  "key5": "2Zu59zbk3hAWk49oaSjUQtJWmdmF2x39ZgPg36W8WKLUqU7uwS7ZTQh6qGtW138QwCVchwaGdjmJaktnR2h1a4on",
  "key6": "5cf7fPEGcMtE3jmDrrEFtjsmMEf4FgWZ5Z4R4nd7SUGS2hLJHgnoStt8JQxwzAH3BBpzxR7rEnMkuKsH5AfD69tX",
  "key7": "4WFcq8vFx3y2ZAn39YVcYd7QnJjBDDMH5gWaSsMuq1232ihCu5fQATRmAQvXuVzUpK8NAvut9A55gW9VpMe8s8uQ",
  "key8": "2MjLJrnBRoaGTZK6yGZKR618H327XPUyymWp796m7iNaAuS52bkeevGnowZPGBHV5JDagh83w4PQV2WbcMNNEBBw",
  "key9": "szuhYd8xHWeE9dNAADoJewWQabofDteR2EzgaixnL8r5bwV5d3aEK79s1h9RLD4AoUnxHVLc3YbAKQJGjzYHwdC",
  "key10": "63hpemvb7b5ThkBGNmRHPhK4cd1RL9mwppAsXqYEB7NZVSFiMjk8n3F3B2xmetu7aP6FQbCrG2v3QP9QVcG1uto6",
  "key11": "59CWSELNTV4hramS8ACnCwCdkyngMXpGtRULmVdt8SVGZZmhqbJRn1z3N6VUYRQHzzuhLCWCE4tPyn7qRMHMw26K",
  "key12": "4wmxjm8w6i1C5Nek7Tx4BiKeGzLEQJNY5f2GXm2B1qQbRVd3jxGLyd45Hn7B7fCSC3tA4ahfMqtWJVdA2dPKn5RX",
  "key13": "57msv8H6Q3Fd3QMYJwseFnj65eAUXrJJbALX6JVPrvcQyXU9mC3nWy9oes812XJ45H7HPsboBtxHMVTD7PeWnTWY",
  "key14": "3BoNsd9Gw2dr34orncidwzVYhdJrGoy7M6qPQfiXKQeyEv3bHb9PUK6dPkwbVdYCCRFszmmiRTcR3PyhptaYEU6F",
  "key15": "4SPKjSsU9cBY1hb6yDMWFnS1PFEALYUPZoZG6rcHPgE8q7m1rPcximqYffpdSHnzRvTVY8EpXUzZaRWFMNLAmuYJ",
  "key16": "4tcShaqfqKLm7zQ8fs3ocE8LeBq4MYzSKbG5BSCR53RhE8dPvCMMpnvXisY2KBYBuQ8La3oPWaQzbCtvVRDEToUF",
  "key17": "2m7Pts3uFCCXgBLw5AKGzEz2QuRiNoCEtfNFyNZMcjP1m6TFdeijMbMed2Vz2rzhWKjxduzNiAxrNynRb2GYXETd",
  "key18": "532iGiow8bPUePZSYH6bMmsuVs6vyWCcMmz5XxiaySvAzTv2R8qdFHU2jj9sGnqvp5T3vsfvi2vxgzE8RVU2uC2J",
  "key19": "2tPj7Qz35K4JM21HBKggT9ozBwD6aT3osif6jjFJ19n5z7miEC9LJ78ojaACgad83L37iB9GPq1RZYRtN9bGhkYu",
  "key20": "2i92CXbWUwvAKt5kf85DDAqMk9HS6ENVHdSAfHXXnRFk4bRhegR1Ug3ivM3kDRBFGb4PSu9dKntWwwLg57KpzRNb",
  "key21": "2QPebN2wzb8W4oRt54Hn1KAVvrfWUFK4h89xbhPchNxBkip97YuUg8GLWkF762NZSKNfYe3W1G4mmPwDN1CpEUkJ",
  "key22": "5qnE5VGG4ThSVCTSvMvaE1ihg9v853S1ZvLkqeqUheM3ZKCesQvQi71bWHFe9YMza15oCoeTAGtBH2ZikzvtpzsH",
  "key23": "2f9y6htZafqYbTtdMbGh9ehH5MdjhvGaDi1xSzPPgDx5U9SzuarHtphTX1oZMiPCwvFxZE8BBPq8viM3iuXNY4fd",
  "key24": "JHD42MYDKvcuakBru5T8EfZ2rTrh7YinjxVqCqyDsjv1x8FgK615xiQNBv1kxSkcWUeVhjLiqjMTiez1F5bQPnK",
  "key25": "4aoppP5dxWiosTR2H8Pqsz5rvSzGRwe874btAQWCRGDypeAFdXQRmmAdp9kxu6jAfLCeb5msd9ZAtLWAFE1xBxdz",
  "key26": "2AmDpcj978WxqCGcJuyqPZXfU3SeAvBwq2eD67i6vBEzEWUx6zavQsM8y749YPS3sKj8pkXLMw5Vemh1aEosVwxi",
  "key27": "Kp54cRhr8YcvbMDz27iRQ6GFhFEQQCikCkePH8eMUdCFtV7fhee1FMP6qmknANNSLV185urRz2VKqJM1eUcJqrz",
  "key28": "5NEsm4DwTUjEURycz9SoCYfxQFDy1GJmNRe4BUo7xqdFkL25RRssZh5NZHmWsBZjqQZvn1MU2VRj5HvUfh6xbQxk",
  "key29": "4MbVTKiXA249JCyXasiiPikLtHSLVSCg9LobqFmH9PAzoHFATrBjQRKPTmTgEFX8Ry9tiD7cgjtL6gWLVKqM2c5V",
  "key30": "26mTeUiXHjoGuB2VUzTSFS1cV8T8LyhNuhn2KBFZxnEMWqK197q1hVrg7MLxsidaYzFGLVLhStA5XqdJFzHR8Wfr",
  "key31": "veJQq27UG8EDdKhukzLRhuD2aCcKBzCc1WKAfLt6kvxCRxsD1z7gnb2oS5vhSd72j1WitAuueQTq9VviTdyfv2Y",
  "key32": "EziNYQpeceJZQEGpmK7HQmYGqgaSRtg5ZVFaN5xtxCtwNjBYzCQk7tQ5M4NEfSwv8cz9QFSZocNbEhAXNxRPzcs",
  "key33": "yoVRBNkVjuaBfsQhxCLM1yR9ZCJkZ83SUbBj9333RaAmCJBTpVxsg4J35G2hpxK9MtJkiJttfcA6kJwTUmhuEo7",
  "key34": "5gGzfjfJyVP7EgCBs1KhwUCKaRyt35EYJYAdpPPPq1gtopxppqQT6QbbfyyLxUNALc6PzAeB9q3tozLV7eHSzs1K",
  "key35": "2ARJv3iEAg9X2WWa2cKwFdnF2dsufrYw1vbr1K3ZvJWL5Bymj7cnQka1Q8yh93C3p8bsyBXMp9AXaBjCJG17bPLo",
  "key36": "CuSLupB8bowstDQfQJLywKrVdB4TAY6WHnuRqRWAL3T5DnxGMJv9AWHD65gHks9cFbg2ieh3h4X59zUamQQW9wP",
  "key37": "615VmhsJ8xkX1aC2DWTbRyVoh9ojwAiELmEUhTyJRJjQUwbWdEzE34SuvMQtyMKcK3medKRxJT4nGoWkTunqUbdM",
  "key38": "3yWksQjZDqLct9v7q21skcGCGJcdfn24XgKoWbukoJ9ZrRXn5GcW6B74gHv5awKNgfNbmgTy1dmuUdg4yT4z8UHV",
  "key39": "3mytMgkgjA96mgeb6dwBWSZ8Uyz2KiNswtc5VxjQChYspT8EtjKyc29H6AKiT6F7oBxwS5qkbbzL3EqmpKE1e4bi",
  "key40": "4cLdvmJ19F8AuKvgVRRwod7jv7q3TwvNuexxWwDr5tcAvZCxEFZHSB1mBSRzei3YNRVoVcN5DX3wvbFKWz486pBX",
  "key41": "UtzzWQ9GiGDrPWjwhMBiGLYa1mBLuoMoZXMKQVvVZFmPW39NRtYufnxhH6Aj31DHAi2GD2i9rQvqNgzifxosry4",
  "key42": "51W5rDRUrPYuaRGR7NmhAanR3pMBz4aNFCHa5zghokfNuJRuGfSi9aVWCAVdcZS1JggyBjvG5UFKM31qzbuT6EK3",
  "key43": "4KicTPH1Y5JUArjRzPTWezXytmsP2UscWxRLeufs5n1Pc6qPqiRh3rjGY5R6RDTGjv8311homFrZq4mtRbk5guj1",
  "key44": "3KGkCUD5aJCYfHXaknMRcyLwcETwaYkjvR2pVh39FWUGPLS6AvX8nigxVhFDQG1b9SyCrSXoRgbaL47Ghts29yqr",
  "key45": "27c7HKqjZB5ukSzWSGGYK6uJAE5TCDG8dtDJ3tUVwXPu2rDVUW4Ng8CU3iVg64SCKsQJRwAWUyS1cTQg4wYkQkbi"
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
