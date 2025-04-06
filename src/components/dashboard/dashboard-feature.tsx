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
    "7wR1SZRTZrFTyGNXkckrh7bRyamzJ5QYN4nRdFmzEUTnKMnkV6AYdgmFdVH9we88JYwekixWXfvWFNB2UY971xp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42BexKYvnx7VK72r17scr7mtD2yN788mLeV8KcfWFjwSzmWc6ehYdbKQDbrTpmfBHxY5w8gubHBnz2ZiPWjnqLRG",
  "key1": "5w8GQjwGJDHEaJLmRLe62U4jhyqoXcx4y6U93V6XYRJdiBimXbZuZtRXvsaT4Q6xyJdGZwJyVaerKoGE4HZJ6MVx",
  "key2": "5QAYJbDi7TzfDiEeSAjNvPscjwBb5qA3WKBK3nRjKf3wceCsvoyVn9LuzFDzZQL6z3bKxSMw3RqexjAmwAdoZK29",
  "key3": "wS3hzhz29TUgmBC88CGBWsLKuZWu4s9rb8CUsxTkWn4YGkD2x5DK3ndYMuXYSxPrN4ZGYiVdqkSXY3pwggHZW2w",
  "key4": "49gwVpZwh7YoXKDTAUVhkj64qWwGrZdsJ1XXitPnv2hZePeq3fo99F3vSiGj2DodixGAdzDUgub5XSFQuErFuY6r",
  "key5": "54XnLsj17dQAdL3BF4eC1YDopcDyyk8JXf9iBaCmy2vNQ8Z2fqdd1k5vykRXNsJRkWazM6ZCLd1uaEKAEW7HrAxQ",
  "key6": "2NLjZ4h5N59eGwqDWqFNijSia5TgGNogTyFnfrnqWqj7WGw6obsDF72HDL3VqfxYf5HUrgjNDqWgCHUnjB515yMt",
  "key7": "42SUgmKDntTcyvxqonz5bTeNSPS39yVBMmB1vjpJ29bsQULGiVouURWhwC4Dnq5o6PhZ4hkmDsmm6iAVDsgajb27",
  "key8": "37sESZAsUYzjq8pgcm8AcLaE7cRxpwuyLirNJeZJtX3bUS8CkfF2R6CgMJYXc6QzNpDifeeKTWYddcMsXVMgWxSh",
  "key9": "3dP5bAybw52vQA4T2Fpf45vpC7iGmfKaHcmH2fVz1vbUR1AkNcyFqmr7mJkpq8rrxQ1Xkj2CbXdh6JZ5NJnVEXJM",
  "key10": "2K2e3ZtPAZEjYDBUppSFKYrwfvd3BmK5SSFaCSJRqnPz6rzRjUivt1SLo1DkVFUKGk4pgkHToSbsewR2rZZtifdU",
  "key11": "5ygwNgocKgQ8jcmGQhGjjbYjuNeoecPTGYBjo8EBCg7vb2Nr3SeNLgLuppKhNqnYSo17mz3Lp7ign5DvezHPb639",
  "key12": "5ctatiTKonzrHU2xXq9MAhwCfEdqEpsuAACxrwYmJoAQxPyWEmEiqpWCS9TvQmEdGhB7grnsb6EZ7QCkUpM2Gkj",
  "key13": "5ExbiQYKGnvrCaHgbYPaPBJGPVunXLVfu37SngjEt7J8ZwW8gqFvyccvHZWzHcmN3W7ajGXFauakhU8bMj5Jyg8G",
  "key14": "2KYCqPmJWpQz5rUmiP91VQ73K3oymCTmxWyoexDj5NNV7QE2mXmGmEivJbZPg7UkiYQGwWPKRtCfk8yt18xnuUNs",
  "key15": "2mrBR24MnQbRMyZEM5tVsdpKAjWvnbrR42qqYc6V8pK7gGisPoAwdyzasyHfAy3ddPLnHBUgXwDTKcejieh8pbxJ",
  "key16": "3QFhfS9kUz1xv6MFLpLPCtCFdWuU3qnYbFvGgvo52EXjgAiwD9Ph75AfQHoeoNXdceQhRqsBqhFtEUB1DDVfthsZ",
  "key17": "D1cgar46x7q28MDrFShnS6S9CmgCwDc24LfBzqsGox3i9enXr3iVZoZERUJapkjGpadeFUBgrEhYpdTxh7anikP",
  "key18": "3TeLYfyngmoh459PMbe2ZwxsLo4CLQADYDjV1pnod2HhD573hJdAJQmAYezSycG4dBLd257zgcTVTa99KLXGbheB",
  "key19": "4EyXWaYDbqxXh45PjQWnfhzCNayRZs3nk3EuxEghTH7cbJ22ZTp2iFirSbdhMZwtywpuWns3iT16TgxknE5g6jCV",
  "key20": "3oAB2Zp5V16PM1o7uUa3Uamzo8GM9pJf3QvKqLVJi2emBGwerXAupnThdpvzavbj5NGmbpzv871ZQSQTLp8yN7gH",
  "key21": "4z2QKUAmaTtAKMnC2uC1Y9gEBWLZgm889iyGbptfueSNyZVMmYPdAdWpk2coZJVE3i2KnUt8dE5HfSw5XKApPhzu",
  "key22": "5J8tpwY1ak4RYW9oPNdyYKAxBgudjwDUCNz9WCVMdAHVkw8cad2sGdG53cWW6svEMFVR4ia4rqcwEEYEfmd9b2FN",
  "key23": "2Qkm1W5PF9SK5oFR39JoZeoTVuMFTWoBVYcMRWZ2Enkat1hyM22r3rnxKhJeLiwFhSHnQWrvWa1Nq7xJ21b3ecJV",
  "key24": "3y5r5mGXbSKxvabpAZxokPcB4Yv1VMsKqXq24i6cA5ND9DfWS6zahmB4TE1RECeFbUsLT4xE1KUPWm63d7qTzdYj",
  "key25": "FgidiYocd9C5wRUR73cAHP9wxUiQbbaouzFyzH3bdhmkdipzpmqQfmHXLRR3uPTxynVVPNk3ukZvCCcUkNnVQSR",
  "key26": "5JeKsmLKJsEqkd9rTYHXnvD7jkgGUfsnuNgszqYb8PestEphdSkoKM3GDFbRBMK7RLMYcKRZX9p3tnzvJtcKhzXB",
  "key27": "44nmaWG1uvUvsvnvQGXnxEC73nBVbEoa8sty4gepvncpy5CXvX98RcJBg2GgrRfiS7D55h83ujUjhNE68bThotSs",
  "key28": "5h1bU4n4W5RmYekVXmPaCkN6tWVuzLQzv7Kj5AVdWnsDxWsvSi8bP45j58YHDRU9rRgUZ8YcWLtviUxh9Mkyc54F",
  "key29": "39F5wCU8ag1BFs44PTHdPinEcitiArqdHi2FtJBbQwg1BiphF4ifpzz1KBHZBozdSmLc17knnHgXKaZtLnEkycX6",
  "key30": "4HhXeTXTLnwQWmGyTvgPsG7PoG3QMYGVEuc8JBrX6rW9uKpRM3eXzCGsCLuC38mva3PNg5CfZurHr2zw538fciv5",
  "key31": "3pcto5zHivYMuSHaYUSX2Mt3wCKTL1WzAmYYYSj9WSkDGGsohFL9CGsqaMVxmPiiKcS8gvScmKFUPweJuTxdVgAW",
  "key32": "4LtYHoDBjMApQueWDrjQto5XC8PY7ikC9PHYe99Fx9VHKxyhur6W3AQ19mfvBBRvhSRcoHCdBrNcH4yhWHmPTYZQ"
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
