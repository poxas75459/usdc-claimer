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
    "53aQm6o8NstoHtYsV4uSuhJPGuqtMcSeKc7EqFD9dyiZbPQXQEHiKQdktth3QpT5cLxSmYWZXbo1zLRcVLLiehZh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28eWqLhmYenbtDtfBH77ktHPnaad5A6KNgPqBLPvAMSHHszBqrqfFYPmhaQSYoyu2hKavN4XCZhxBERrR8gWqjAJ",
  "key1": "3rhN6vd5fUmGiWYn2PzCA8aTn1xmFuMRw73sxuVqdGSPn7JyrzjqpRLhodBtYxx92zCq43HGYnBTkPmxZsrh9AJi",
  "key2": "2s2fvvXftAuyzhCq2wX8PGPE1SLHuMuXpT6VzddnaGDJEDvZkC8sSKvsyb22moQSKJE4y1kDBqNPvR5AVYCcdckg",
  "key3": "5TS2amB96KaG4aMNYZZxYnmgvZxYK5WkR1AJ3Pmrr9KncDzRhaNnTDer6oUnMcRAjWXAEBhPGN9bdgYRsJNY3TD6",
  "key4": "4jMoeWB63yiQAXJP6egvwsXp1ppC5JqJR4ab1XgmNYNUwLHZoDZ4YdaMqC3crSWM8WUq9At31BuTiQDfEQgkHMaB",
  "key5": "49hdCiAVNSW1HnnD2WUui5Z5HwS1SaZ5DKMNpUfKtviH63kN9onpPqQGC3HSirYNUrkyYgpGE3hfUxgm4VzjeBLN",
  "key6": "26rNj9R5SVoyzwsxfyB7LsYYaTYVcsQnDiW4zmGCd3VDtD1qrYYhfoKqsd3KNxWVGYhnSaodCJXKE1Qf5cd5wYqi",
  "key7": "2n6ivSVrS7y1Rj3Tgfv2picjN2nuKR3732WCpm3vxQByo67GLNrKp3ssh9F7SXrfkQSzhAF5FgPymhsiRaeVqgDu",
  "key8": "ZM8J8uBC1Q2akGw5ygq3u1Ga2uwBRgvmu198njQmVcyhzowCHjuB1TWn55VEevMtoBt9WPb1eSwdGHbbbaqxtkU",
  "key9": "3UaU2PzokZ1Q4PSDDhGAqjZa49SenDcCh8BxL17wAsCxxZ2C8ofheTJt8tFM4qtKagevcJwxr4N6Kf9WHzMdEN8k",
  "key10": "5q8qgDEQ48prfntk2Tb11NNnCAcBQBjFVzuWFtA1Ax5xWGxEYbSpti8DyPLC5s24gE7RfgiGpikh17NmPpXLZR3A",
  "key11": "58xMj9xEntFhCGE2AYcSPcAShKSubaMXqVJQkxMviw9EsQUBpnr4MbtyBV6n8G3WkQfjRvpiejAcL9VH7E5qWqgd",
  "key12": "31S559JVmkkcFHGzFBcqqrHJrx5DNXqNLZFiTiX4AhuTHuAYyYgEUKeNYtfjkRoEh2oZFm5jVq4fcyMoaNa1UYPV",
  "key13": "3r3s7SMVvZ287wudwoieH4KwQL1gjwcj9SSL32ZwumjWPyTgbRqPVDWUJgXcRBa9rbcT4mEBmz6LKKVzxPzSsdmi",
  "key14": "3N3DYU8vLYwe7HGTjRJCHD4wDSemn1Ra6A63CvgtpzKTvjgKaUizzoSCkc8XLChiu7LErAptLsy1Q8MLHKa9af42",
  "key15": "b8uZuuXhHbViCzpWnoKFzH4GyQeYyZsFXtpcEQMnXk83LSvzSDd9YxZcAfMmrD66owZjKMpz6Ki7Fab16aDEtPQ",
  "key16": "Duh7YrX1EH3ZMk4invPr9ELAyFrnQAbCwwHEvdEUg957KGzd3RCjXTmCx4juBJyoaMa7AmPU8NGHkAPzZjgFXHN",
  "key17": "2aahuLmuBxapKMHvXr992ckSczURpAMDzwFkoxhHkR5tfDcVq7VegQk7MAX88UFiNG29WJ3Jf3kzNRMuibA7ALLG",
  "key18": "2nHnivWb781jJJhF3bVG6C7tYd5SQ8vaZjtesyfRtwYV4T53MVmzFBVvzZHyNwSZ6qFoEReVWHr4H6YTqAvtT2eR",
  "key19": "42X51gadLMWtyrDi1f51dD5CUUSZgnyFEnQDP1jRK3rYbxfBVVY1sXtCH2cSghUQ3corLd9awmsz9rPRmPkVvEsA",
  "key20": "mT9g66tZqnzbr6LnLeBQNMPz7n4Hd4EeNAsjZkAP1zkDX2doPT4bQD8i44XS9P8bd9HLnSi1Nos92LbMA3ekTNv",
  "key21": "dDQDFNMvRPv59HRXdPqpswxQfp1zNhkRrDqb8kHu2YG1xtTTpTJf9GB3BZEuKs4KDkuH2juJ1qqQjxcVYhJFKRx",
  "key22": "52KVBC1EJxiA7rsSi79n7y8mGRSFhMidHaatH3HKG3CwPYB5V74667aarNcbf3ikseiQypwAhKBspyZpQHgAaztS",
  "key23": "4v6sYtQ1XYjQAivRwsWtF5i2c28hx8jid1cwPHX3DTay6XgVNYjc7WbNAgQ7RSjpo3BkbsTAW4AmR8bsbcrnLAfb",
  "key24": "5FPzNpcL4gnSAxuYTau1iWefY2qkt6fHpvPrPvKPnRBqpsr7ppsuHPqw93dyBJmNzyTj9RySchK7UEK6EvZxN8N8",
  "key25": "4851QGeSH7y7VnuPuE4Dkiv1or8QZ2BbX7pK3dTC7snww6o8AXcvhYkCmEyJYLkhuhWvzkwBmFnRHtiJJ5bVDeyL",
  "key26": "YFaEyK2Snfxv5hjFpWxVenMbiUZiCYmZiHpgY5T2fHczEMZAXdYvJR5fgFE9bHc32d646hpcdsHMPAWKCsXxPR8",
  "key27": "AcshP72yV4KkC5h6nTeAAxSU6pGt3zn7bocMGWCZSpsaF3aXXfzjxHDUaSioAF7vy3XjcgcgUTKHfdeYDLJd33d",
  "key28": "4jGpXkgNfWHis7joPH3JYZnxdqxQwJKkBUT23VyvWG8yxms6NHMzCwykNYMmSMgguFwCcT8BY5mBXe9FazUKWpHW",
  "key29": "62bXBPt1Fd4M1MDjSLmSQqw28aCih2EksWFvhJMcnEzodX4QLLMw8xrxRYWPbKhVTcBytUs1ZpYgXuEHTyksSGAD",
  "key30": "3BH2dGt4R9z9jWeKueXVQKTGypX8X8FFJJKCNCcKDy4ii8uL8tv6D13ktgy6njWrdPH61e251uHvUr8zyzSqZvoz",
  "key31": "35xtNZooAvAUqD6HinDYwVJ3rcfTWwW9v8UZvgzoZjzhXBfhXmEbhTMXeJaqTx2moyig7TDs5v4emCcVAsykEnx4",
  "key32": "fCQpZkgBfPatkAW3KwaHba8tYz2AjfqTZMGVj8aFvCFzLgsWqDYtAsqF2xwHfuVZ3J9xkpihEjdyY1Z7Tbpeqgm",
  "key33": "3zqJJmbp4NY1iaa8Hacrp6rzs3xo32dfgnYoYN7FS9fVLQiKsfpXMLgiLBhT1wmjBosHUtGttc4cmX5tf2smC4zH",
  "key34": "53sL1JSDZv2G6DUSQV5GbtbaG2QWSKGQkHNC8N5zCi1nhQSqnqJmvz2EL9xpt7swRBbfmUFNGBw16dReshJBkYWb",
  "key35": "4Gof4NufBRNgAF3MBbfAiuoWxFZWj4iEm1udYFnPoSDJArX751waFfU8uL7PtY8TFNRPT2DfMfQbFbJCsm8VRwWH",
  "key36": "JeQA7DwqSpVDjgb29TUVzVGJD5nAFiCd2BNJZB2ugqZKWrajKpepdRd7eRfW3qL8aawnVCZS78CXEQoaqbesyPX",
  "key37": "5a4K5KPTLmFGhBMiiD2X3Jca8s8AfHqMBnf6bocV1JZLFrYTgK5tjdnh7UG5ZA6Mw4UQsCQ4vouj1U4SQY9pSC2r",
  "key38": "5PtYLmb1trMDZRkHza3ort3zq1kjQ942yew5LjFP3RhmpYqxHVqxUA3kmWP4BvVpksYTBJU17AJYctWTsyKmMdH4",
  "key39": "4XFq3nUeVMk8hGAPbWpyaM167sFN9hXhJhyhtvQ5EjZkShyR4B5dXtc9jvixk44FMckyX7yD89jDzZp1Es23Y69E",
  "key40": "2WHye582KL98XNWD39KJ6kLv1C34AcZKagdDkR22GjvCdLgWjQMkMZkrp1Yx78LjfPZiFduigVtFsKkYvt2tfBBE",
  "key41": "3tFYdVnwizqznk3tUBnTLnKDARqgutoeJiKXdjNtFjZFc9MUKgD5D6NCabmASqEy9wu91daRzHh2Ti9dsK4s2MhQ",
  "key42": "25NXGbBronZ3SrzJNSBcL9tpouQ1ASd5BKDotUqriiCFFysCV1HwbECYxs4tNQ1UfR3oKStuyWjCJKRd1jA6VpkS",
  "key43": "5mfRVPd259SFxu5PfaikdzJw5qMpcpmr1FyFn5y4emarLYErNsahCuMdhJ47tdmFGa1HKnVZRbPXuq2ofSYp3t52",
  "key44": "NMcACnCbfHttmP1Btkf5wSzKq9tuspgcGEVxoW1KSPVQpYnYsNozBqcAJN3v7EyLQtis2zrKbG9YRYLLfBGCcPP",
  "key45": "CkSVKujaUrs4kYSWGPT9mTJmgoPVMFbnRBPoZn5MU86L5mZ28xSovXb5gTX1yTNs6cmKVT4kJfr8wEEy3hsGZ8w"
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
