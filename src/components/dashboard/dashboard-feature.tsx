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
    "2ySrSTMRYdWYN7ZM11CWXWWgckR2hY1SEPno5RAUSr29z9BLBt7gsdRKLQy2qxymyrFMrrY5JKageEg7nzZhhRBE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gd8rqm7G8VXz928S4DwZULpHoTwnZea8vCHSXVrm2YiWcophQTs2nazFHMcPix6bGyA6F1PZw3RZXwxjpwbTdnj",
  "key1": "2QMxvwq2zhmHfo6MCzN6Rc8riunyPwb5Jjq7Eg8AUT5rfwjDhTAv5fNsqEPv9gPJiU2ccAu2paQBaAHADaBG4Lpp",
  "key2": "32eRiVqQm8HuTHvfVMhdKLqPwFM7ADojZnarFg2x4No1CH2o8BGrHMVbvcX1UUXuGb2q1rrZseu8YQ3AvPSYyo5w",
  "key3": "4qPvHBxqtC9G3az4rsuZ7LCgetCWy2vCyVK5BkuGBtsd1J7ZDJD5pwTskDKoaGLzpeZJBibdpxPukFCUzjoRp7RK",
  "key4": "4eY22RfJHNviw1h4fkfvrMLURhnyNsFtWCxVNrhSPKfQcfLGjy3sr2ZmkcJ2Aci9qAiV37VZPgJdHMTTHUhiWeYL",
  "key5": "2rxySrVxHLB4Sjn9DLXUNCVoVWM3vdHWtNYncLmMfEAExrbYmzJnsaxvN9xr5SJwzgjQgMamFoZPM4jeFjGmeowW",
  "key6": "325rirFsC9rUQQYkLjYYS8TTbdHY2gdhv8EYKeLujkVZFgKWFQcd8LUSkh3Q8KrBNgcRiBeXvkp92APV6q8ZCUaD",
  "key7": "3MyfmQfss8MMuL5Xpne5JHfP4fRAdnEArfVc9nW3t13TgofVRVmLW3H6gpDcb3bvdaX1xhNGVa5AXdvfzU7SxFsq",
  "key8": "Dq6ovtXizo1gB7hDnGUdJZHQjowvhE9FmCWgtCqQZ4ApAEWwQAswykQaorJCGhAcHL6PANK9JeCbe4V93Gvzxju",
  "key9": "3uPGGRNQG2rJPf7UXsNbvEaHRJZuxVHZxaD9C3HdgxbjpSXDiWaSLzqEijK8TG7ZoQEopCQuZdY9tUjf34h837B",
  "key10": "2hEzFVUUnEerxSfLcT4KAVAELjQRu44a8WtmbeCqSTX4urE137ojNXL7jFo3TJ4y27ctWWd4MxnbnAjvjA4Pootj",
  "key11": "3F2BGpmwEvcCxXMm9HUKboroD7wdrK2j2XXL5TuDwxTE27Rqye3yx4hm9Vkwm36xMMovywjp1FvfucUkveNV8Mr8",
  "key12": "4771Hd7QZshwmwof5nvndzoUyxVukm4cM1g9FNMJayipmBWcPdhsJXB6ZAKE4a914DjXDcdWZnqLkCtikv45gpSJ",
  "key13": "2RETzGDgjLQZhWtNGvVhQ9H2RoQgNC1WY3JWWF3LyiyQ48d3egX1xDeEoKPxSKxUFeYKhQ5WdbNdeXT3NCPeapj1",
  "key14": "k4NeDBdMToXJSMqDBUbVCjTSkdb84u4UgTMfztPiBtrXFNNwwraKiajQszcP4whqDyMdgb6hu2792JrWXAdt8J4",
  "key15": "3pL7dG2ZrYBv7ZcfPBuXVEkhm79A3Y8xi9hF85gPNTy197tCoSnNuApRjJG11ApYSrx13F2xYbeuCQYVutb8QgD4",
  "key16": "382U72zZvgurwVhMcWQKcb23eoN9Q88E2p2FTbJHtqmAY8bWotpi7wa6AbGwjLQExG5dUdMbc8j5RajrCY6guShL",
  "key17": "3dGML3s6ZVdfyFTu7PZ8tQmKB6ABFa6xqv6TpMxcHdvGZ5v8iX9NJJHxM4NQysj2ofjWRsutmkWXEZQFDeKPacJs",
  "key18": "5w6jkqwtvjFzszFW3pEkRpT3ZowXf9rs2k8LYa9dQUseWBqvETsNDP85tSCVGWoPqdwL1QHRkstnZ6GSogHSMo3K",
  "key19": "2uyEAVXUTUNGMGjt79J253aK7pxMsAyNK9uUNTXyzW7ezVru38AKLuhNenHyrgh2pYxjYg2LGqZaocYy5Z5HYZGg",
  "key20": "5iiqYz9sA6yAPZeuNcRkvCVNtjxbwKEK2rSjqqhLxdN8FrXaDtNFc34tE8SUKKNRQv458WVr8bw1ns9E2hHtgbCS",
  "key21": "3NQZzAuKfwZNJD68auEeCDhqKDfdtJs2pSW3n4nmFdsAA5etBCAfBRadYv2yLCQyQE7yFL3wowWbgyubo4tzsMB2",
  "key22": "3A6jDhKJ8qeehdRnhpifrULj74e1CKkC5A5UmV85X6pcgjDrtASy33HYr3QbkQJJRFbA9KJX4eoqQjz3Gm9ctio6",
  "key23": "2gEjAkNrra7VVQ3d31KYmAMxvAbNvxymyq8DiY6LzfQacMDxsWUxXdTVGdjxiGEykxS3A7qoCQKURZyEgh2tSAp9",
  "key24": "62ztK7faXggX79MgrPkJBiozgutvDknMaYhkVVU3RYQWDhM3G7YGiHyx2rSPtH5VycLVRTw7EcfaTKxYXgeyaMDL",
  "key25": "y7tE1HqFEqay5jgRQhkuUQdRWXhUDjTYRqeQfPRKL293TfwU7GqtFdwygmPcaMSQm6fqMAqM5WCRPtgUxX7y75b",
  "key26": "41qH2V5xjSMo8U7vM7FZjpkWGGKuFteVPcVpyfy91QRBCQU2pyS9MnNLaScF2bRQ33YR1NrSkJJakNqfkQwmA1Sd",
  "key27": "4aoMNnits38zigyg9D2ARN2tgeud9JUMCRfo6HR6Y85irNETwYufuxEa7LofCmJNfxkvgFVCDNTci6NRwtJa9U1L",
  "key28": "5ftGXk5mizSxE1qVzkV3sfrzTgV5t65sw8Y9ehzDoKGf3JiGCkXxvWD1qXBKd6VLBUuoHdypAa6Rp7PeDSX5FMRk",
  "key29": "2SYbinQAwTb23e3A5sHvBAWsP1dgjJdKPd6QvA1Y6MYTdR9dSCn1VT7i3xyhu7Df7sGeHwFD1BJTXbdGyQcYma54",
  "key30": "4p3Yxc86NqHZYFgFRoSj7VfJAPfQrPi7me5wTxcPK28wqLmVePpsqjFTeXAGPQn4QjgvLJNefW5UPWjSedo6TjAR"
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
