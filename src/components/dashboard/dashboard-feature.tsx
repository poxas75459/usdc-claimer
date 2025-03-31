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
    "DhLNisnDKKCxrysDLJhyU3TBLQ2qEFKAG1mENyGMJ6n1h5MwJS1wdqBo15DQrKiBpeyNLo7pimrQgBf3kxhzTMa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2auDFfKbS172SSomjaGYyMLxb32CYsjZcj1apjiCLizZgmGBhb1fv8sCvpaiwdUcKVtXXjQMco73TJMS2XCzrbNJ",
  "key1": "uZWoXzE7CsPc6FPyfUhzfu2m724fVh7A9Gv58ppemEAu4V8xSTHs2J4v7DXetfhHwLon6Cgsee4HgowZj94uDcv",
  "key2": "5woPqp7H76XhYuRYQEzuGfnr4SKxcHyosgtZZ1TthrMCvoL3mceXz5yvV8b1SJQgYPp48HvbtZVnGkzDXMkvBqaX",
  "key3": "5GSHnhZNad8VcYPf8AapD1933eQtHfMKHNhZ9zA5erw7EdKQLn9A7eQZWXjqJWNVB2Nibwofrasr5h3HttpjNcoW",
  "key4": "26N7udHVUCwPo7PJYkVoAJMkPL3hWGmqT29Qn1Yv1jcEFmCxNeNvkejXdEJnY1T9urZGhahgLjc546g8B6T7jTxA",
  "key5": "4BHFQJa5kc94mGJ3YUFsLGP3JepJS9R2JS2cVmKHig4ghxstV8KntzAZsjMEKPaYd3SLWKShW58YgvuvmY5SQ7hm",
  "key6": "3dTWJ2eRW4FvPUuUiLEqzfaQawgJ85uyTiyxV9ELWkpNYzeT4VrZfun22UneSZ552s6BjjDPQGkjUSGT3HXibmKB",
  "key7": "3s5NGszHy5Pz3F1wLk8euQigQBoW53FVHek8cMWEznAwNYJoFkmQJwKp8bfoXr8dKU26w3W7oNzPWzWT3nAUeuMi",
  "key8": "4Bio39iksaLHmr6k5A2zXkDDyFqmtTYVavemCMkkPjpG1AKDRUW3RY9zdGt9ya7mZ2UoQP8xWrK9VRWBdHggAdWS",
  "key9": "59y8hQYPrwvAULPjAR4NkQ38JLNnrS8poFQ31VcMUzw2JzuKtAg4E6Lg9HKMUz2s2sivgMySc2X5ptkZemicPQe3",
  "key10": "ax2JYNjVT7wwziuC4kzJ3rsbxkyYc4kgcodhoUmqtCq24vysX9f5S4jsGNr4zzJF4VHcXkTWkPY5KfpAqF2946g",
  "key11": "5EeaM6enUoq2AdNsnxjYLMvHpxmaBTHV8L8oBPknXiZu73cViuf1jHsjus8MCyCkLenFnHP3zUeavFhvUt9b3bDG",
  "key12": "4M8SMrPZ8KgJAnc55JTdV1GSVh3aBXbgJUDs6V8dmoj5HegLpWx1gWcL9hso55RC4zHuVZLuqcRcH9aa39XiDWPK",
  "key13": "2wQ5JnYQakwB7kHnrTYLeWQ43ypwrEDU1r2G85z4WsWUchYTg2pfgUyop9aokRhQttVQGUYpLqQ8uMYxj4dQacjh",
  "key14": "5WuwnfXEAdtJJKiANBNBYY1JiFwGiYjZkmKQvkFLy8Gc9Z75F9p2HHrYEBdVnhx5SCamE7uf6XHvWL6Dsxos4vJ9",
  "key15": "3WS2x9ZkNR1QAeMV8yoWF11YTHmqDEXQwi8UCg1L9pq4i7VBey7aMzJqJL3MFTses1AkJJWzahx7nAh9FMx1QcMu",
  "key16": "4nHxK7iu7S5Fp31i8paEhAx4kCTpVF736GuCVhGcUkbT3yHyoT4F2gRG8hbQdW5YT2CJ8U5eKpGco9VcJwwn6dbY",
  "key17": "4gukMRzQsCmmZ6vokqPXcg4qkSpExrhGPu9CzBfvSgAMbq53TY4CdRgFv1KNjSui5pHcbUXu8fLCRmW8ativdrUu",
  "key18": "64HRoma69MCnzH96UxbQh4nZMDA1g5eRzuhuUwxBfHFRHvNAsVpxKzQe12zefoPALSvmHWfLUBRBRCeb1DZ3T1M1",
  "key19": "2KDGnmTxNjw94pB8BgYmdf6mcuAe96ZcuKM4o2m7zm3gGzt6mHKjP4D6QFksz5Hc4akkXS28pQygMw56MuXRL2WC",
  "key20": "38HaNE7Lt9gkTTQhz49PWy5nGGWKJjNd9eiXBkDSakamL7XbGwwrcfRG3KMGukG1kCa7HsajcFHVBFB6g5BboNiV",
  "key21": "3FtT6r7DJceyDqY1D18sa2kx7Fb3JAwXBumYLRj65KHXPo6juhTiQScqonWdLe9CetGABh7jpFcHWzfwfrnnZQW4",
  "key22": "255cjy3AY5bSe6vhSoF1HGEK5vFfgqcTQiKaKJ7q9CspGQTK71eQ7XZHpmu9B27N8FbbtRNaSzqiEuaj9Y272UCt",
  "key23": "3BsS7v5KUJaeBcdwSwF8godaAJjV4bGweEes6eJv8D7athnyFn9VXSfaYMPjWuVDcACEBSVE7ckyCRGXHEgUFovf",
  "key24": "rFdoJVgVFfJsAzAwdptSjhKFhbsAJZ5fhduRbUtNrGovXgoU9RnJ4ZkCMg6sH4Ws1pdEFgKYgPQMvfYz4Hd5mTU"
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
