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
    "5JSQXUW97NbUTu11Z34LQSDb5b5wZDiUoh8znN7sy7eLigebuHtKWGkNBhH2Xdj8ec9pJMu5WU5zxgmrjQAwyupY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53hdQRTz54T6hJAkjb6P9XCDgWFTNfAhe36esK8rq7pkbCCJVnBJYAJ6cg9CH36Yg2Vaeovs3rdFN4xxgvWFF79i",
  "key1": "4gQVmrvjq85Xum2STj1e1t5zsmJa6ia7fvtMgoCxhaMyJQUj6W95jWPXLUFbo3ZM2yxKnTzg4baK5NDJ4rggD6Av",
  "key2": "5ctGhXJ7LBWTia4JZDQNUaizLaJ258MeLcMh3AcL5ReSEzgJfPmVD4ZzRH4ytrPxsNdryTUStPoCxyAejD8V85NW",
  "key3": "V4EkU2rsPMhkcLx1k4MMnPFGbJogXHnyGexvURydn2pZdP66K8nyqQmF6NHbGioMuq6EgkZvMVWzaLftF9xUj2d",
  "key4": "YF1DyeYmKSkNTzLaLxcZZpVeKx876Uys8dBsstnjbZN5aKuSfKsvE69cGFSfT1kGyXbsBhERJ254bMwYqzNrWur",
  "key5": "CsBB5jpm5xw3tFECJZeLnUJHZohhhyUsEjNxwiey4b5ueDtGJpYNccctN2ZvNv5m6gyTB5EPx4ny1AAZrjCAmWa",
  "key6": "2TND1XpFvZaYoLqCFJHBzFDNWdoUF5PWxh8zxPecjmD5ncEmt7tndgcgSwNS7jzLbL7MQdbk8XnB1WEWeth7NMFh",
  "key7": "3DSZNGJmrSmqRsnpy3fBXvKZk2oMBrPMLk5n2nAUYZ7DCwvQoryoMxo9TfesqTFytc7nEstNzHosmxBWTnUH2uhL",
  "key8": "4BFQgEubgsFTunBjwZFM2FirGTjngrcDA21XNHWxMXUZ1iqTm9jn9pnCTJMTjfuaFnio55DcmUPAGmWMfdjsUd7K",
  "key9": "3n5zd85jqMtpBqFiKSo34B7JXYSug42aaXnyPYn41K1QC1WdHvym7DrmSNso2xkTj8zXyugF9UfzHeqW4WdV7XCp",
  "key10": "4y61bzrUPB8UQRVzCfV9varcdvwxRg2HyXdsh6ruAoDKgkw2QYWo96joXNoSunpeZypnAzwbXb5z8gx3PnbfnYm4",
  "key11": "5tqq6MVVvw2jUXALbpscimTJqXCjL6DkEaRoPWG1TP5pUoc2frFJoqUVsEV48M2ZzMct4ZY5S4cuqJsrJ4sUoCNT",
  "key12": "2upqs3hDWhKxXFYmYAav58vkvgXZdyVs4ELVsgLA56aDiZVLPWkWbs3tAvwUAU2vmAnjS1t4nbSdQEhS9uvBvaGT",
  "key13": "5dukNFVzEZaGPkKoy8W2sYSTF3dwEx4k7taC4KbwQZDATgikRbxKSUYNF49zGpLEotshZaJWMzqy7TKD7MJh4kfa",
  "key14": "4KHnonph6tg5TyZrH9xMPbiaYixfhCPeYN27ps2LhYYxaSBPMmw6VXJJ8AR5VLWM5N1YTbBbdYKLg6zcXWvXP9Dt",
  "key15": "2ZGDryb7BzuZpwp8YUqbDApK23mj9JPPneBKYy6debpHhf8g99ocet6bwg3pKFmTxZXFEAbxscKF9YCZVfVhVe2X",
  "key16": "4efbTTkUAqNbxPppgjFQ1aQAh5qJKFYxxyU4xGqPvojhfhopf3g2FJiRRGQd72bD3yocamdtv4xhD5HHY75GoBhi",
  "key17": "3eSUG2ifRFJqVSKNYwdzdq7aSfd9BKzea7c6FYw8PqAfXVmGTn8ddcjpQ5tubQwtGBP3Ly5yLMfRYjP6veeJrfhD",
  "key18": "21U1riLCVV7bD29P19uBRBs1JsvY3t7LdymPqrggrt2PF1Y9myvXKwhmS14UM5ruyuUjY8uw73bZsW5Xn9vB7oGC",
  "key19": "522QQNPuu8e8xvANYCrNZnN3ZwgVtSYPJervCSNPv8tUeBBKFmxLUjvqdNqQtGdcLygqtaBRNnq9nAbEPskSakFD",
  "key20": "3x6r5Cvo2pUuArPUbjsKzBygjhT5HDDFYvFpMFuM4eAHhHUSHgZLyaGqbMwwxhhJcMePejkptCHDdjpHqxv1uRFd",
  "key21": "2774hioRV7z7hLwp7KYCuHw7nyyufEZRtNBZywV65KWwzA8FLNEKW62FMdpNTkaYBXVSrZrvmK3W41ni8nxLQcJu",
  "key22": "5RKCJyp4q25xiJkDLkGR8FxLXcapftC8dqY43dWzFmihV3ZeQXjeqovz7F2GTTP6H9ojACFKieMUvLoGHXLSpXVc",
  "key23": "4hTwtkFu1Z3HFLzzfUwXVgR5zFUvCwcKU8Da9rHQGhM73KxvHRDNoLuqRdo6yw36svn4jsCWFFFLUJQGSmgcoEp4",
  "key24": "2YBf5yaurpiNjZkSSeJZ4dsGgaRqkTdWk8QySpEJ36jeWvzFdFqheFxk5SPWQyLyoLc3jP5svoP2V8noZpaFMyQf",
  "key25": "xX1niqEtsPZgwGc5Qggu1BAwxqiZTvUNcWYMpsjbc2su599zchg5QucmzaQHz9HL2HhgtRfoLnkdv74H8wChQZq",
  "key26": "SqJfqTBTKDQxfox4iqNQ7AiZbZwepyQzAbUMTep2ghH5dbc8CqE5WeqoXRTG3AYmk89yaZEFmdjgyCnCsYvbNrB",
  "key27": "3EmEhvcbMGTxCTGEC2Q3aYWSCGZLw4Y7wterL2zx71Nk4Bm6eiNdDArNx5GDWbo5umiB7DqqrvgLxZMWnQFtFjWj",
  "key28": "2RLZRddhmZWomzLykb64LAynMZmnXk4cRk39bYHdy5Wnr1pxceWfqxKWJZKkoNDcr2qpHfTw6kE4mqAf9W5h85GE",
  "key29": "EgjLjQMZmLd8ZCuF6jNnHdaM8WGoGEqQXZNtyFeuMHW96S16xu4Hg86bd9BEnPubpVPXg1u2S5yABFdvp5WVd8L",
  "key30": "5pmPeFGVoCN1wuAHuNSh3aiKRKauegaGjqSWPv4NkXwWxMKdpnCzcyVU3prho15gqhHe5VhoSfJmyvZqkxgNtMJT"
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
