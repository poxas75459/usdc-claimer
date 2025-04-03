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
    "3wtB38wLjgBGZYSo52AvdPiabiha3UfvWWtjj65z6koLX1U8nT845aHiUtnWGvex5QCRrmD1R54yNop8NHFd8t86"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wx3tVaR5mvs7D8kDiqYJ2m5CPxFwMPGt7s15DLXEzywP6qNVscKXzfFWYxD4eApouPm99L9yCSiUCQh1vV7cjJu",
  "key1": "3XhP6RqW5556B7aEboZa7wXmAk5sneoinUUuHADPnYDTGimNZHPAjNruvQcK6g5is4hd5kdVtzwEtZNz6QSVNq8Y",
  "key2": "21xKaJknKLquVp4s8anvs5uW3VkMUuyC41Uo1FjKJD67Eo3cwQrcdohFGZmdLbXmhojFeMKP9ZAbqrxGvqFBLqGD",
  "key3": "45U1RPLduCDdFfDbPRqQnxqrAZ6hubtjTsj92cCytBeDrGc8szDLYhQakJqBEHAx96qKZ8J5h876vZMwzyfBVZWv",
  "key4": "3PEd5gkJabCwLpjT7DRuhefsBW4DcKV8wfUyduErvY1PG5mDCTdWDn4DMojwpK86K9Mys3VuTfxbjaXSq5DH3rmt",
  "key5": "4SgJBKq4K4qzy2KEycEMTQK4fPAQvgNJtc9A21Hdmkiv6ye7Gb9TnBtF2yB4FZ8pNoPVpZP7uCxRhBS4PuENhiAD",
  "key6": "48v5kNWdZ8WCqkmykWWFQmAj4Qb1TZH7mPTzPz2GbkXFsHBdSPhxmoSurxM29LQuU12nEzYYVEWFpxVSHvrPBfbd",
  "key7": "61cCq9BRubu54q7iqP9ADEjpGNZR9xCQB9d9UyxzmmwvRJSfBnSkY6Yqzo5qEuyQmzWiB3DyPcTCBSTRoc6AxZXD",
  "key8": "3x5RwNNEhTyh5HmztUvX3qi5EnhD15a5cNxWHtYMP131mtSwVzDaFcy1D2F3ZEFruPd2cMinrg9YPP82ZEBMQmM5",
  "key9": "ddzi6nXH26fNABFJ7x8Z7MgJ8gWedm4rGUjsMvXgVEaSxxZMMzKj8HgLQZFmZawA9TcPia3ap2FUyKj6qXuT7eV",
  "key10": "3zKaMUHqb78vPwMQW2GeAKeYfufUJsmyKEenGbGJpwDxxn8nV6SCYESgNw3zCCW37Wzq9oV6KEhsr334usDuFAVE",
  "key11": "4Qj8gUXnFq5njqY6jBYffLc3FnLLhm1UYJJg9xpTEHHBfiVe8cyHFYpT21SAAGs9WcTJihLu7Q9LC2Zb9SWNkrrW",
  "key12": "4gGYg28LWTUkM6AMqP9nKGxrg79EPukbxVNaXfeeBvCm3snX2ixC4Jto1u24VtxbXEf9gTgc2X8nZMx9SzPTx4JC",
  "key13": "5VXobDfEANAdGUwDRzsMbJRmTjWnibkJfTtM4BwKSeusaveHHHcxPcYPG4m1zBuXvZZoz3nB36A57ANNiY3RagRW",
  "key14": "5rrFsXzV5rwm4g7NtaQKQuYaPVKZMYAUgnnS1SMDijVvt1wZDCsihoc7Asv37sdFdhJNULC3hCmX7TVcxi6m6J7y",
  "key15": "2vDP6cQ3Cyp1wRFz31eo8yiQUriV8MeW7E4BsFHE2UArQLJZbYJ7dgqBkjLrhxBLi2KpsPqpYBEeLno93estxcx7",
  "key16": "5uZdMdhe66WwLbth1Mvoo1pCFeyFBcTgP2rTwUUdVBejBhAbpaYcgreELmPFdHFs4gVY1jZTEgJwbTrABXz3KNq7",
  "key17": "3517CymQ9gqWsUkBcoQRug4ciWgSGSw8SxnjzdZvc2KzeCqkrvYn5aQS2ttdb43o6wDDwGPNCaDp9pmsncbjbLzt",
  "key18": "5WP17ZD7W8Rg6HEpEGGiYpxQSkFqSUw8gmUadaJnNjH2Q1UoB2mWxUAdwKwiEdNgf4qxEgq8v6DDuHjZFEkcXDTE",
  "key19": "3Z8Ww4PDANpo4RHooFQiTZmdn3R7dYjMopLm2TFmEpuA1pYRFBakoKYJLt4Xm9AGNUi5M3M9NbG2AJ1tSLssvsdn",
  "key20": "mKU9pyuwZB6Hjk9SxXzERbdHx2HEnbqm2EUkNLyxx69bg9TFwoREL22Q6pFHJUQriLFsXFYtKcLrM9Wgor9KRe7",
  "key21": "3F1Yk614htScgpQdeBg1viyZnVEEQCMvWMcXX2xms8cCHGWebrH5b1KpX26UXyeRCNs4Ca31QAQzqt3aApp9HjM3",
  "key22": "5BdpxAtXCy4cTasonkn9yboMzRiE3hST4AQAHvAMJEbgjwCGBCXrGnY72TFZU79Q6gkRNXeXtTEyGLA6gv84vwtB",
  "key23": "5eSNj3M7M9oSZX2A6JXFaAw8Q5Xv7U1Vf8kKcUBmREuTUC2H9mdYLgzUGDxihTG8nRxSuje7KJH2FKa8gaNEFDjw",
  "key24": "WtyQcPHrA2aMCJK9CPAavMf6VDgaZ4P6Ejmjdu1VpBGqkEMMrDSKfRGSGCgLEWktW1nkrH9SdcA47BskbKiWUu6",
  "key25": "2fR2mv3DZBTE82u9ymVsSVQXybTBx6tVksZ2RAYsbSYWjivYBG46ogGqWA7rxNVXjAsuyj1DQPEJyzbYmmiYwRwX",
  "key26": "29KmtW7e5sSaAa1ajepwDwrBn8DU64kzhJHWH6ZJ8guHoqrhbugScja7DXVN8ouGYKAS2g5RREStGLbNUQVd7z6d",
  "key27": "M6FQyQ3cYWETuV6cZzEPva65zrwu9PLCCFkgbuKfUbegFSBaM1CQEU49y83t5nCy1jfWBBSDGgzxnnj57ZvfSPM"
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
