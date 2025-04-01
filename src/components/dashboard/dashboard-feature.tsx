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
    "2miVAYXfzBtk4NjTF517XboboW75b3sgcNyA9Hzy4yE5SUAfuiABWMK336huXsrac7aXrCJXNHMxDQXV5cbQRdjB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dMRf5pToo5cX3YgeCJxWHzWfoczW75bq2fiNmU3FcQsNpxs9fSCsV891q1fAivoE8aqun6wphoiLxxVSy37fin5",
  "key1": "2yEpYgtdE9ymqgu8GpfW1wH11v7vU9ANjfttBcRVrtAHVPndUAd9aw3rsLwgDaJDBDvFq4sFJbqRZwefTNawgdRq",
  "key2": "XQYGun8WBQZcWhsWGRWkqqGsTdTNaZr6wZvVrZCiJkPmr78C1oD4gdtSGWggb6md8qodK5RyQ1QQsMxS4zvo7tc",
  "key3": "YKw4bhQhLvnnaPxPGAjEEa8HasA5pbGZ2s9T9PcJ3ggt1kSqUdEryLQfAfkHydiDJ6vvSnPKXYBcEEsPkeEVXtn",
  "key4": "29ztkyHxukcBATM8qBdcDa7QhcackGD6ZawbPAyWLEfkrtU5BXo842TU95TsHu6oqJRt6DGtzSeCemsyzcbd28bM",
  "key5": "e2QeDYtwtLea2ei2RndQByVsAvE11TzUNAZhA3hVhVLH5hc5CWRAkex7U7q3QxwEzFPr6jLxv7G13jT4Hc5RxLR",
  "key6": "5KmKjQTSNQMnSTS63wVC9CA2k5gAf5to436KrKFFYXxADcM3xbCvaBoA9VpooMAbF7YYqmUGMW5mUVSXtDYKfuy",
  "key7": "7fMGVyfz8bb6fXNAj2qgcuZZiYDUpvjMCcXFcKmXt76wqCWUYs5ZHvhVwHQQdBArHKknrAmZ2fgHjnKjXqPDG52",
  "key8": "295UfPJmz8cvduPjUGL7NiiP652zFEifmHAiR9buMQCPG7r7C6iQLH5xRP1E33AFfo2pCKMcndgwTyj5oy4Brw46",
  "key9": "2HPxLmxfKM5iDhpLF5AVmaWedJ4vzr2tKGUofg4JCAnnrf54sFitvPr7DKeFZfjAxyvTqxns62aTdBbNqrVA12Sq",
  "key10": "2sNq74hi9bcwTAZBZrZ1nEJtZQJ64CLMJ3joLpkVRwHuWTmvZAjtJscMRB2Zk2zqTLEF2pDHbjeo1cEa2p5Jv7r6",
  "key11": "2Q7gM9ngYRYLfBZcw6uFCiah4VHamzWa2kmkxEueqzEbzsqCaVJVY7LxCToh2b6SmGeS18krAqeUMnL2TvwkUQ6D",
  "key12": "322BiAaRS4z6UVHX2YK4piqdQE7dshgYyFKoSLLK1YsmTugFCoNpPtajRpoeebnuymh6LisCNutLunvZpxuGLw3z",
  "key13": "5NLpppxg2LnZyyscey8U5XiEqkqiVgrZRLV4tVHYiYMcmvnXde1NFw3XoR8aC5BU7GCjfmKEGwV4AT7XHLEZjcwf",
  "key14": "3dZuDwiq7JFgNRkCHHfyu7YepAy8T8qhri5acYmtFYWFHkCKSumvhzeM5FbazdiCeF3RygL3Xwt7SCUASHLHYgnP",
  "key15": "4EtUekLN8htxoTjiDbPtJepFJcu88Z6Gp7qAFmPuSfS8r91zGyKFRJQG4u2h5q5R4YFseV7qCQjeZYuCNo4JLmnB",
  "key16": "2djdkUVBKJt785PSg1faUweCrd5fEoeLcfivPtGhyNfpkaVPHUjD39eMa9h2EyHhpyMVmrVBHTVXG7WqU23tgzAt",
  "key17": "fCQHkev4Ads23H2NrpeJdmNBr1MwGx3btuJpQL61EUdQLUfpuWFMPiD8z8NXeAfV6i6T6kzov3m48Z8i6sazVQw",
  "key18": "2WfQXZdLuH9TYDCPttUUJS1MexQunabPyUkbF56sAv7pmDDbFcSc5wPKe8WY7UuQWDGb43fLAtwBjc9HVz7Ar7Fr",
  "key19": "Aqaqz3Km9rTWrqBwHBoy8gFm5sNeiL4o6NuGSJX4zi6cVMSq3WND2j5PCu5pGnC923BCamJEYjfFmNQinCSMgj2",
  "key20": "35ZE4H8DTRVvGD8H5cRP82hPZVryfuJ35MGZAF3HaTCNrKJuQGdCJoXDEh4K5xRjrVBJ8vkifkhHh4YpXb1aEi7y",
  "key21": "qWnDSvcP5gkDEkUHagvaf9pkjX48Kf1BqUQtomgmZPzbHPtS7u3Le4paTkt5J1a8wWXbqbdBDwh4eu4f4v3M6UB",
  "key22": "3hpbdVx66MmsFkdFeVPrNaMigjbGchvAao9cQwkad6o8ryasm2pF34pkbBqPDYtgRm91nujw4CLiB9WVWzXeVRHh",
  "key23": "3k1M5isbNADsTyQXfKMnw7Tj87rmqdVab3acxyNryY5ADRaTMcYE8NmkWdP8TjnXdxFajYwa3yyyA89C4DSVs9pA",
  "key24": "dYgPpicGkAxPyVj8H9zEEkcehE8S7FotXHMxhPwBYVfGFBukwPnoapoRDTR5BxSgyuPmNnzhYVQLBCXvGJ25hbK",
  "key25": "5wxz3xHKmW4KLXEmavyfLAm6drBezPRgW2omjZZt1t41bH5w8tN58zmFpX59mt15bpBtfxWXQ9RSkLGw6XdXHmwM",
  "key26": "3dLHEBMn6TkiChXCkQeWnEongXViCkKAJDZLHp7syktqYEDh2DoPQV4RgaygtFa2JQ2ECXxk1gNR2cc24NNzFs6W",
  "key27": "4WSGHRWKMEQQeyQAwA6XL9aRoaKSucYJgmAk6dojQ9nEod9sAhCg2ydb1cMjHke4HTn9Gp1NnpbayvwVVKNi5hsC",
  "key28": "5v2Z1kFwznjmVLHTeu8U7ZcGVL5LNyfMBdBkYoB1XDsJeAw1U6buWHsqEyk5FwcEM9T2mYPGh9QcVcxiv3KG9mMw"
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
