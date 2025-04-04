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
    "33TXiukP3A3QB9i93tyaKWgMRfqbEBMQ5PnKVXEeg1vRKyTddgn2oyHMAv3GxrgDoTqGDkPg2ZTqJjoJKZr6juEW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4egYV8wyxSQ859YAvy7vuPLYH6GMwCp4So8cvS6dRz7qXwFPoSY4ggpRBuUZnYe24eHAhW81V1H221ygQBtKyeK",
  "key1": "3YezSunU8m8hhL3GRroVew9fjX3uvXuqNBg5vRKYjAZMZrzdC9K2ZKsxuVFnqWhasgFHXAg3t5yGtEJRUhjyHuun",
  "key2": "3ZFikp3NN6HsbrspSBQTx6E1GaCBQUqcJigif7cQAxfEkXV4oHi6ChJR86FTvWhi8ESiXERcKKu38xrsb9RpQqEM",
  "key3": "4QhS3Jcxk3EHavYPcDMpJKeKoHxqiTMzu54bqPAqS77CDjw6XY6tiRvi21Zp5g1BsFBcfMJJGrhiXzUKAiJJUn5o",
  "key4": "4AMxCoSKvH6KpD7i6itpb1AMynt6mnuaW3NaH8twR9MXrTPgQpnLpA7CuiDcrqYv6JFABDoz9FckWFrAKzwZPeDj",
  "key5": "4xADQKuHEjJJfXw4qjT3nn9d9SkP9iqgNaTXGRwKFXcnbvbgkxDvoT73FvxEviMh5hwVwouHoukrVjCTuauUXiAT",
  "key6": "4LwgdNctZYCoHso9Yg8uG8BCTT5XyPcTzoSyWZ3VC8QDep2fD2DwoxnJvjfE13ib9b1kYZjtsPiP6FnTq12ysRav",
  "key7": "3PgH2QVau2QuTmZxJwjPRUpx5wPF1BnXsHQTo6om7mo2TR7H1GoxxwK75UTUfW8x1AMvaJyGhqXeNfJ7SANgbfnR",
  "key8": "5hjLExMDxzWSmxCyoF4TqrP5nNvN7CK8zMLDsis5kBsv9ucwSic36qPDhtbfNVLaRmzHeCYqEXzYGY7qhB76cx79",
  "key9": "5YDFEShrm1M4Y4zkGV4kNjFF6vW816y6Vah9fjDQnJsKHGGJQPpJPbZmPHainw4Ky8idNSjcERbfgpgmP55nQbfL",
  "key10": "4fZ2pS9Vrc6sHXN6r72AXZF7pH8L6xBCha9jVMLZ5NcESFvsR5f1U35yu5dQzN31w8iozSZWQarsZFh8FDe88K1k",
  "key11": "avvfhpgd8XL8uo1qrLxA4YbVeYqDimbNUxNP7Do4JskKFzwxcBC7sbXuqMDLycgp49qejdkdCmvNm5wuEsX5BtK",
  "key12": "fHScbEsfKLV7TYk37M8KXuzDpY9vDQypt64YNckmhx8g2wSytMvvVmsiPH1VimKSVHbR9G32VV2A68bFJkfikYM",
  "key13": "67WFFzqND27ZwRjMUSrpoULw97WgcH75pr7sBTDuWFxFY3mxwCuZ78BBfbE91Rmy12btjFUQsxUAHeiDH9fQPTi",
  "key14": "2aYkVPXF53sVn3dAgYJMPzW4DFQCg5HyJdp2vBZdcDhqefJouuJXMhfVJFN5uNSb2ggevhKbMnqsoEjwpT9G7MxS",
  "key15": "26AK8Jc4yXtK79cMWr5kid95Uak6s5GiKwHEHVtDdyBgDTdtKHpg7di85tnr5pokrWmhCuczw99fgyAJeNJ4zYUw",
  "key16": "Qwuqh9J7LJN28DwCwmVfRuKFtBZyJ4BKhEdyTu4YhkkE5m6vgUGfejeT5WrxpeqUQYLCYCbapEbnxsCnxHv2H5P",
  "key17": "46tf1UZeBAE7m7ywt6bxaX6QUAS1iLHrk1XRhKt4mFvzHpqSTx18bVtrcrXe7xFfBsTs7kc1xuoT46SqW9TNDSxZ",
  "key18": "5fyXNdhzjdN5GuhqhZyTyswC9xnhMXDAsfKWjVZMsU3wiqHpVCjXgCmF8o7qnGq3BZbAYKXGFG6NjVpobzsQpJf4",
  "key19": "5iUP4B6ic79dSb9M4jw61rQoQ17uGSXqMBhVF1Aom3aj8F83s2HM8TbpSb6RPFVcENyBdusLkhWn5oCatdYd1B3",
  "key20": "5Wn5ydhkCcQouLuRSXUBPLeBnFeQyALoE87MVj7dDqcLbRtGtquyZtG5gsm6Mvdfh62PVJ7osKuMSWjrGg5p681x",
  "key21": "3xZJCz725NNCQDJTrk7mGBUqoHTEmyze1sHSBWDJcTYCmu7Fr1yZrH2wbjmhvGWnjEyytzAopDboTQLQD7sXsjd6",
  "key22": "5Za5NY7AMSXz1ZYCWYhhbLH3YWn71igqMSqhikPEtyiqjB6G1ctecQ8BXzTrQ1oSdRG8G6zcKrQ96pBmwKxK3ZbD",
  "key23": "FAnEYUrfahE9eazyMQfEHw9hWc6deuR2iCXiHtRuu6MHhh948rFVavDXbNamiQBwYGuqtibFEqxrLze3tPtyG3y",
  "key24": "2NcYhZpj5fjv1VxJG9qWEDegGD33PEHSxqZ1D8CrTGfgrRcSCaCNXxRJu7hUueV3rjqBSvbgtqPrvRxp8wcRNLH7"
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
