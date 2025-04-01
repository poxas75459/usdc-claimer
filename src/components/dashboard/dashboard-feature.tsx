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
    "237WnfAtydzmt7PkeZFATiQcQk9C9MJHVg1dJB9z1P6b3rbZvzzjLNyW1iKJdYUz4UArwU7ghVKBmUDRJt3Fe268"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sjBrahRwCRtjtcFxev7r1s7srgVVtaPtAc7c1niqHsm3c7edHHJ43tvcaPeejfRhcx16T1rUaLvpSHsRfVSwNyj",
  "key1": "4a6G3nLCH1abQQTRLwbYM1437zTVP3vQLX8buLxJgxK7xdrNcxmNFMwJsCHmW8G93BVa9qEK8bfXL8cahZLecoY",
  "key2": "FEe6PijCEt6gKWriYFaF1juR64Rg2MV7Z11wuKCrDFCBPgCoqBKvCy9t4NXUV2pGY1jFkvijtT29NhZmfJMtfha",
  "key3": "4sGybPNpymzL9bH3YoCAjto3UZvzS1fggDBAE7NzNzWwtGd5e9V1HXztEk4mkaJjQCyVR4DoyRnmmvBhjxP2FnYw",
  "key4": "2QmkGvsrtEBXj7D9az989hGKE3YWPxzz2oWXSZ9C1zh5s6RUZS8BQipJ8NEjPiAoGZnsRVkhWCT85DDqJuTGLD6M",
  "key5": "3GpViKMEtze262ydGq8hTc7KpZ3tXLxiGFvx2wpuMLc1wDF1Z5dGQZvVN7881iUPWeunevU7KBEAMT5rkGKFj8NH",
  "key6": "5REuWPNcku7rU6zUV29shkYgQyn29pDSWttQXYqryUW8kYo6j1jhG97sxH5Em7YqzSSqAHG8rAGuHhybGvEJuG8D",
  "key7": "4gLA3eiPC5pvgy1aUDfvtSNLUfmmuQJN3irc5EY6VeL72od4xaj31LPjNFft2nFU7u4xj38HrGhaNKpEkgtJSfRj",
  "key8": "5nY1ZiuAdXJFSqUSD29Vzh8GEX1s6HqStS7KKzFXNiKVNVKmWA2qnpouTnREtqG51sAPon6mzRnoJ9w7Yf7YvfMz",
  "key9": "P5AtqVVybNYZvhhx1PF5ZXJ9HdU9f9RLqGTUjsRdXdJGEBWgFtKUGgbM98F3Vwvs9dMKQmEM1h2pdoTiLWfFGgX",
  "key10": "4Bv3NgkARLNdq5D3m9TWBtzzUqmqKsVh4r2dAYJntMgzahyC8gz6KRSdnQ4rfLGBDWmvzBR5tu6HFZu5aCgyDnXG",
  "key11": "5DcF8UHjRZpQdXxRqRAn2jnhsN6cqmVeDRRhZGZhvvQzqvLdvbbMYJFt6ZZShVeHM2318G224A6ZHi3huxe64N8S",
  "key12": "3hXoFL6czWVpnnBX3PiHDYnzKa8eBiany8sWYe2CS212zvLpPbELtcYR6H9tzxVn6wpsN9bfZ2BoMPKBz27QJEDK",
  "key13": "2WvxNrdjQxGfDCsAiAxUmLGmTmpdBf3HcgSquAUGcGDBqZLRWhhKcFfM2Dm6WigEduznZwrJ7JM7juKPthohqkyA",
  "key14": "2uhro3jAy5ZqLEsBbUbZwB86exqy6A6aZr3Cmku5uV18ab22ZwbivzfHxpyQHyvXKdJTntdNj1WZqvi2NLmqx4kz",
  "key15": "4CX7L3dvfcSMF2jypa7WyVCP8ynZfZ9EpZSK2D1AWLH64HtEnL3bE4PxwMktBod47UnWwTqsEcuNxZvJr7pazsYb",
  "key16": "eVffFyf5FL3isxJfd3gCzb4Ecv7s6AGwcCv2DWGPzBPwMtkuGjMDC7t16dfxQ1EGbK3poWAKXEkjyr6M6oDQp8f",
  "key17": "3BtnuPsTJ5XZQYEHSXSrCMyzJpfAJzwz88utRpA1ovacd6AFF7StKUvbhdBk1YLGWVf3DtKMsyEVH9BNGysweuFt",
  "key18": "2c1ypjxhoW7bcUoVNdVEAZ6eiVRPyUPsdwHVJfNnQgLe5y4dRmT6Z4AToLekCpeRLY1o1vvXpCCy2ciJr8HZbmSi",
  "key19": "55L4CRNRAiqQhPmtuRHYQGrDrXQKqgAwvk7Su1GjLmoskhbk9xuCkD5NnGD2GqrjLkFxcM3Am6sqJa3CgG6Fjxzn",
  "key20": "3UixQc5p6uU7UmAmnNSXKjxXeoAHH9hgVDiWbvoEYFHDkr2W5UwfrThVAGG1j1Lw9yvK3JJa7ik9Aguy5BV48LK7",
  "key21": "3qGYEuScRhXoUuimKGgn7fTB25s1kCugemnzSFag3ozrtHvArAajxgwa5QmVMZveuq1i8KjbujfgyM8RfG2PMJyS",
  "key22": "3KsPyL3UgLJmE1X4gspWViifiEidJfLjqdz3zRLanMLk6xRfSg7sTu8AWqb8crTcZZDTTqyA9vL9VjzLGDc4HKmM",
  "key23": "3RY4prz96tetvPSc5fz7XTh6sQUhqj8xuFAEqBw6LLApuj8j7DXw5Hp7j9XZrZh5hRuxP7JnfAvbQu1vFH9VoUmA",
  "key24": "3tzh8CJRv9votwAcN1SoRq5BY43R1HzFetqVJKVTggrgBQ4d23ex45WCwhKtcBJLxLAjP795WmSrafkf7mK7tMS1",
  "key25": "2a9byYG2ZWaxtLy89Gaz9243fMnG4rYdiTDrZJ9VS2LXDrWZFQRuWGQGxGR55cMbbbkPULyUMLBuKnFF9eqPLLsT",
  "key26": "4RXMZVS354CLMSUDA6vbsHP1ECdYVjkUhfDacr1udcuVWZYxntzgDaYka3Hpfnxm9kiEStGv1Xh2sYs7uxwKY2iY",
  "key27": "4eoNpBM9ASffDpUeZWfcgxHQyu2FWzQruUbCe1SYjxbtCpKDrJZgGDwaGv899aE8Eg7d2qqsxeP4cxkCqz8M9zPW",
  "key28": "5oaYFSmwXF5uyyyBc2TFS7M7WzgCkjfdfucvTUbkHcj5EojPvB84iaVeUAYZMhHNnyMpsTdD7fPkB44EXpSDfBc3",
  "key29": "5QsuBPErpRLntQqfNCzcggJdzkq5X3dVjLVrN4zWzjMM9koSR4hhLYDpqhC8L4jZANrVtXyNfk59dGPcHF5aHWBk",
  "key30": "5agjRaQ6moTvLShVfmiQarWhKqeHYo4TLiCn5PkkXLeJdqSg257aXiGbBwuye1Yy7H9bPoTkCa8fE6kCrXafiVyE",
  "key31": "4vBapd9zphmyWyXBuPDtdtyXFnmkXUPhH95TipVkCLKS7nXzR7oBf8e26ZKfqqLPfchPTfXAHEh2uqbQSDkr2D1A",
  "key32": "2wztt3tYeo17mQex45gKF6FEPoG5nkJMuR7wxv5GJQJ7WCiFyiT8iati8MiENYq8u4QmL9GP6spKZM4LsjtNY1vS"
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
