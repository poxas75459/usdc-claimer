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
    "3CBiJThJ8XND72CDoVBgxN6Fm5C5VyAYqt3xBG7BKAt32cE42SrvjmcQbr3eNYqS46HJnrzhBnp3QtHBRP4bFHZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JrUhvZD66trxwpWp3qTjAnpG2tosczYQomJ117UQYJKVZsURrH4bLq577cor48YPGXvvJBdNa3ynDC7SwxKqcSf",
  "key1": "4DtD61syLcKFjPPqz4FFYafz8vqxFmErzXKS4ELd5ASQJz3e6VL9mKzNNKcEZXAMZrGXivh9MhE1bsVC1qNULYwv",
  "key2": "C32Gm8jj5Kd65FZUMQmarAgi7PTWCuQrSWyZN7qeNBaBv7ZTc2WvZXoPSmVju6SY6ZtuXceCKjnDk6xLYLE6Ayx",
  "key3": "bGEoLtZCSBLNq7LXfcvMz3x1Ftqpv3qD1CGAbh2pPZfPGpRXVxjAKLRrvipgsKRSqnURSXeBfjpwy1nAGBKNvsE",
  "key4": "4QisAeJZossRaENjcaUgpQxSBqCWheEhZ6DJgPwGkB7T1eTA188GxHmTM2e6h9FLggn5W3Gqj9tcmHn3eCoD4fLg",
  "key5": "ncDqWajzKiACip9eHD1snEyfEk2SxMuB2oaPsqS3xPy6TEUEmzuYYVbweLfCQGPQhyLuU3qHc7DL12TEsKNB8E7",
  "key6": "5rWJM7nSAybQU7YBW5WK4Yt8CDUjUphGawgaXV85Nou8dodZkoR84ziL2FTB5porZThCziShokNr9xQpc5CrmZRy",
  "key7": "5CzRSRdMRxu8srMHRGQovVX6LQvA5GfCVx1bCtr8gJjB5kavZx5EG41ydSkfkpwjTQDD38UKJzojFDUTy8CEY7aq",
  "key8": "Rsp7xmZiS3ixvg16xcx9gQkpU8AwSzEPeKkQjobfzX9f6c1LPAbDB9wa5p8yosjgHRuqACamP4C44wpcarFMzGv",
  "key9": "5G6i6szbjn3goEH1WJ4uaozuooKFcd5RkCWiDgbm8hg2yV9cvqJqENzocyKqxHeqRmHAGn5tya74XK6J2jCDeCo",
  "key10": "36vFMWznPmwq38gyvR9JVUh8fSz1VQJYv6CmAbhJHFmNaSYc2frganBcsGbeis1fdmKPdz6PxpE6mxZTTSU8zvn9",
  "key11": "62ZaVgnvfM2gMkZKMPgaFLWSwNmPyEs7iUKqfzP3mE3bJ4GzCrvAzsmJ3xnsU7XsBzVAKSS3x6QaUndrKBSSCA36",
  "key12": "3girJs3cs5fwFcCH8DuKdqnPNidf5hF7MngW54u9CS2h3gsBkj3Aie1KCFHTK2mZ7daq5UPASANShanFXFCMYtBN",
  "key13": "5ihgA2dRSMNBFtDTRbRBjhCkCYVdGUt3odbcp2GRizCagzK6vsdfwtkNX6SSc2PD5Ec2Rw4YZXjr5gH7ibe5eRwp",
  "key14": "3Gqtmp6Hq46Hibat7t7vXQHhHFUrZ3ob2Kb1DLYat8ghUzu4CZDDxYANYWQ8LKNbwNhrdLyrEPNReDeEnd6Lvuwk",
  "key15": "Di21caUz3ZQz3DR6ufLQcvFXYye7ZXouAfjfy4tadw3zdmArAUDDmFB9ZyWQB7wpxUrGjYnhJti9ufqmWmvZhwP",
  "key16": "5fufVSTKbjDKp8EJUS8SXwfGCN7oh6sfTdgSiX8xUbexSFjk91dPYyBb5iHzZ51h3mzJB1dSi1nxQfiY7J8o34Fs",
  "key17": "2Qd1zvCLo6Wm5k2fJHxhohMiQ8QUjSy8s1tDc7CGRJxWAEdJQ159JjMVdSmDNkyHkf6D9H93c76wDs7ZrrjHatsc",
  "key18": "2Wint5t28DZYMySe7BG36AdbGoNDckgdJbtFQfSiQvAiT9kH247D8MToAeieSuxU9UQrhtETWas7nQuYDYuKocP1",
  "key19": "5gYwXA63Rqsvniyk7mqAgPCmbWEoaXGf4wgVinApq97Z66HUCBcGkUqy7YeDX5g4PC2D6bxH1fJrKyi2aKVDkv5i",
  "key20": "5Bi1kqBqPYCFmCWhQ4uuwXYL9YHjGE7ogB9FuXGDuK1m9a8BV4Ww4PJfuvmjMFxF8afAZxfDpcr4UwtHiFf5D8yB",
  "key21": "2RL7LkmoyNyAg8vc86g8niffbpovHWEaFBqtFKRP7ihQY11XKYdF5Bp3eTwVe8Rf5AmkMFhNQYakWKJBoHR6Xz6E",
  "key22": "2wGfi3DocQo3431oZefVx188Uc5fieWnYZWgZmfDNdSkmSwYuRm4LicZpsJxv5eKizdq4amwHVSjpSd9HPpieneV",
  "key23": "xtQa3GTdZkHCmmfLRzFVBAsKw6rZYXY7N9uNBhxwjWyU7ghVnDkVxEQnFhxJnregdB5Fq9JHoBtpDBFGLqBFwLC",
  "key24": "2xhnZw5bCMXAiSWq38ddYkKgac3gjWEg6VQVak4pzQZeDdgp2x9nArD1h73rbcLrgb3FXcWoA8yeYEM8LHSjSdoT",
  "key25": "467snKs5sYgoD6E7aVukCSnmYDSmS356TNgH2vbxqdx28BA6mTbHgXKMCmFe5ozV3Y1tUGQHt5YFf5CkxvHEZr7M"
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
