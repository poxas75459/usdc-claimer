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
    "2gCqp7RAKveVNt2jxTbyLCHW1sCeDsJHDttdUG7rcUThAUSY2bCjKZRSYifPAKy5PRiktoq1VFpiU6CvRiQeXtXZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GqFtwRhYY62xxAK93Y46QY1Rw1kqXeba9ZpySpxVqaVg1neVdcFe9SjPhFEsEoSMeRdWQxEbvy6QjMkZhtqQKr3",
  "key1": "3yr8H5XpG4nX1tw67HBDQwMyTU7dKYj5Fn2SGbWwtp398sFrWsf6pEmd1UP1WXq3u89PGhyQG4LiYPSWRCaKMq2f",
  "key2": "28X9dHF9dXhSXcNkBWPNX3BNBYcY1Keq6H8JwoLhp7uRD5m3ZpqYaqw2e73KAE1Mxm94ijdiGo42fvZjkEBken5z",
  "key3": "dJ9dTUAt9TWdJ9NcH6RXU7BS64XNDf8s29a8i4qJy6BDwopW44CD39f9zkFV3NPikmXQtbh2mLFyUUQEfUFKCtv",
  "key4": "27XYpLCY11YTR6fRbuciSH5JhsrEaLWtcB8fPwGZnar2ffQjnEZTq4J4a11yVVFgpZKLxAnq6Ack3AUPMyojCofF",
  "key5": "Ljp4wo15X6nAVUFcHZ7sa8U884owHLZ5qMEL7V42F1krJCCoc1C5nrQLNhiB6L2hcizDFf3Y1t19otTr4PbwpW6",
  "key6": "5mVr9qDxxavYLfa4QjJFJLo3N17WdhxgtvF2qLMMqpQJyKjg1LkNSttbNLfcm9Tv7aeYxNUbGV7iUEkLUj5FUF6r",
  "key7": "4tNwuUpWopyxUfwzKF4nDWCK3bmVdPNFdLYcwoPpDxiWoSwUPp8oVSGLdhogGpgffQ7Tk3sVcncDYVqTPPwwtAhy",
  "key8": "4vbV79P9vsEyLF5uAHUpJojRKbUd3yM6oq7xiYG3swyEs6HGbDZjBKz3mzLSdi9fcon6vAWHiJsFTtrs4BsSScGU",
  "key9": "TykTPh24mWwkrHddwzzMuo2n5jeQdLeAjqeRczVD4oHvEWdPSh5cVjrYwxYXcEK9SjADBVjoYm82Y2Qrt9DTprZ",
  "key10": "e9HDBkFsyZSMLXEDZYBE4tQwJ6hwSbusDgYgCZpqzMsm9yKRe1WbHKx784AxLfY7DU1bKcAwAD6eYzaiYGZTRtp",
  "key11": "eKtfh3xAuHZiThkx2YsdKQ6FDvaCX2eqCKnXdvZoajb5UDehw6oDX6Mo2iD6P7TPhAKGCaKNfadMS1eLuTZ84Dg",
  "key12": "jwjgVH1o6G3M7xojkAXXz6TNtTedYSsqC5j9H975rJLUS2ZXUD423XM14DuAdArwNWoRRTK5vcjFriYQ3ZE5e6i",
  "key13": "32dfAYh1UsKqqiA9PdpFmvmxxEmy1xgHdB6ofzb27hEt61CYVeZoXv7c4XpX1n4VT74wHuNADhqG5USxgyD7RxPF",
  "key14": "iJbfboDDDmoBKkVUuvp7n5qof4Yi4GrNNkrxqyTACb9sq34CBkjNBDCeh1yNQxqRpuNJKNcqNVsC6HkknwSZdL1",
  "key15": "4Zrfod38tMkEtYmmjhuVbBx59Uy6qNekbRjFfm6dCCB4LTovFPJCg5d6TRVa6s8Xvdi8eV7UGwrJkdTFokmagJAu",
  "key16": "5B3BuBzjqRaajmTL5hNoMbmehzQYNMSy2e6yNgrueCtySnaxAWRcX9jE73YFgwmjxhTV1sTaoWt8xZF8NqAJU9ss",
  "key17": "5pm6FiafPHBJ5rz9R2eAJjr3JAu9eH9BMtMJaFStYaKYETFWx54Eg3sfGCtnAfFr9H1o6CPu3GFpTsX9RRPYC7m1",
  "key18": "5LgZqNHmBmGe3yg1Vj7wpgse2DXMJNCMky4qzqMRYQyPHSpERJFBdZ77DfscnwCw1G6v9hokBurU5JoDhWw4R5Ud",
  "key19": "i6BRThc2miDap92i75TyAYGWZ5duY8cD2TCN1nadAdejQ9cSGLFzgR3JzPakaMfNjpJsFnBzkFNVaX7fDoyBWKF",
  "key20": "sLdAN8WN1iUBUYh5FVyqw3GAPPQeCEzKSk6wVMuFjarKrksXJunvMtNRT3w24fujZsG6wjbBMb1Y3CB6W1b9JCC",
  "key21": "4s81rQNBr9tR3AS733XoYxWQy9QAZWaHQdwLU9ZK18edkFXMkGXeY64m6zoxkLX3GtufKZfFTuQ9z6BBwjaSqZ9z",
  "key22": "3Ly8LiGvLbdNEj3ZdsRGymcYNNYesobPkTThndoUxuY8fLcNWMK16LknoFEN9CxDzSgBchUov2ENRa1otuSVyDJh",
  "key23": "3ox9tDETZM8MUADGqzSVqdmnkVgTkFgEqNwD5PwcveCo4NpbEEk5SAQGmwmuFTENSnGuWGcchCpyTRRAkLsLZuzE",
  "key24": "5k8qLoByctTquHCY7bhXkqepFZVsfnhuCSVBtV4H9hBSZzEK5nGvLEw4B6EJSdqDfYeSw9y6CbjQen8mGY1yaoht",
  "key25": "2kZFekXrJeYWYyYEyx5A8fbqA68WfmYuCmWmDK7n4yRM7GFeL9Mqs1Qo3GbfWvyQsEmud1zjJGJmFdVdDKU1mVtW",
  "key26": "AYCgp4ZXDYCLW4ESY52aYTugpmukHFqnkaMV3X1et3NpkQHWu2EDX3AGKpUnvD1mSwTvW3eXJfdTwnoaN4Nk9dF",
  "key27": "5NJSK8KnHD1N1zRXcQBuUruFbWiSpD4NjRenwmyJEumFnshEUJ1Noi9iWAqxNLLoBct6u4p6TEkoAMxdVL9Bnz4R",
  "key28": "51tZEJCEKsr2yvABcJhxinb1Qmy43WpBUsuGmL5gpP2TWk9D4gcuw5onDSMsnGJkkBaTWUB6nGUV31GxJPmimkbT",
  "key29": "gv6abMhg6Ce8rFyFgS3XaP3ZPdjNCRHoM23FEmpWNxZFn2zGsV9HaEh8zDQC1GaHWrsfWG9BtMVv5it713ejLBi",
  "key30": "5SJ4V9jbmv76p47HL9YacLsXZqYtYFmEqSCsD3MoFRd5LbQNE3mUCqHKKN7f4h9aCYJhWwX1Btq2KrdwX5kg9Kvm",
  "key31": "9Pb3epNK9MRzXCRoS6LvyR43P4KVpu2ugkAsoTRQEmAqy6NFCr3bvMrzCaZ6QhwynjPMquY1v6Dvfm4nBBvPcTa",
  "key32": "5N4JJuUNHgxrdZ3nxnhpZ2ZWRSvRtaCDujqLHBgUDJ4oMkYjAwnc7ATf7QU2UwY9cBJtPs6quZHaWkeRHskxuqAd",
  "key33": "4kQ9DSS3AKPvssUudZKfLKjQRRek12nBq3pSLbr41puCByTJCi9JpvQESsbGnGDPRZJ1UD1mBKS5JWZSqT3GoZGc",
  "key34": "3UtvCTrvP1xUmXe6qsAmBMv2ifbjcEME5AHyCmzD2cjv6xyti54snyYudaneb78dtEU1APDJzCoYByLGuTQYkdZs"
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
