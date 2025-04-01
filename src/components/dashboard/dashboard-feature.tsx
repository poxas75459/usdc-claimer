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
    "2yWA3nxzDMsVr7tAzXBdjXjQFPSau4akiSsqiZEy3NdGNsqitHXFYGpjdgDeXZXED69cCBLaYfaYKE8CGnWtBncd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2148CuQyRH8nNvTJgUyYtjTw2equELEhdQ7Sdj8s43Cx9HdSTwCQq9Nzda2THQdSuLuh8JMwV1B7ks77yyQ9DKJu",
  "key1": "jEFJBStDiAPxiY3V4AUFnDkGS5MQVurNX4hgdFjAMi9idRP1hAryW2kxW9uUgZKJLS8PkpnEvLJfXmnHrYD4U3p",
  "key2": "3SKWpQDqTZ6K9eph5P1bCuae9gWTiAb2gkwGPisx3u2qwW8LXELsUFGh9oEzqCMAokQZH5cwjVQ3fWuVXS9XVvk6",
  "key3": "4emmnNghCNvPgueieRcYe3pQZbRCeCfDCfjZnYB3W8ZyNX6Cgp8jyrb7dZZ2LxvJyhfHsCy4TUiuhdz2CNZerjMf",
  "key4": "GHQW8E7S3wpA8x1o8it2wcsa4yGJfEoQgtZzERJtjYY8mdahdp7pNLKL6VQfSsGTgT99PMCzV3FyXzDwpTWLHZf",
  "key5": "2wfHfE1PKQSw8jZwM9QeHFhXNJ8MRzfD9JpZsjZPuw8GoP4A8ocRsoHXoSaokVnCsCxS6CER57Ne6vE9xXQoZNpr",
  "key6": "5YmD2mf5RimfdPE1nutFdv6fiMMKhkoNbW8JVrh7VzdgKvMgVGDuEdc8Fz4b3hPzhSh1noHshARs5ybE116g5LtZ",
  "key7": "3AQD5KkFFjL7UVTJC1HM88aQ2c2b6SCQvNJw2RZfFJrPb16turKjD5SyRmSXe7pJNMs3zJnh41uK1qT8CbeWzdo5",
  "key8": "6353GLDhqvyL3HJY7vPfokRfqXKLabLpT1N7cN6884sChiUwnGAcY4rQhsjZZ9XjJcenZV3TkcQVKssSbt9LdQ5G",
  "key9": "2W2PbZG7XUJkAVYjD1AxAHCVJiA4UkNY36fBAZ7jVJrr2L8LCyPAABRs4SLW86XYSrwnhhdNFPoaq1QqNkNwVCmV",
  "key10": "CzVL5BSdN1MDm1cWKNDXwXggB8x66nsREhAmu6trymbjpKAhg8nd4sj3Ng2dPHPiApFxiR6CMegz8ezKJB8wujw",
  "key11": "6L7iB2avrHBBBrscui7W1mGDH2CY3yJ8xr68t54BaZzvuk6EKfcoMgtBzkNdimaZfUnLEn7pMLisPr6cDDpPmV8",
  "key12": "3cmM9Fdmhimvp7Ff4ubmwkMsg5b1KNX4uRtG5rXeagvEo53n6euvmVfWjkiye3nWmPzZw4JPqMLNPdBa4teJPuCa",
  "key13": "5Xq8nPbgYCabG4pk7ecmiMDm6YxKkPefYdzViawJbpHjcgPoiPnPiMNAVMSZp28nH3FRksg3g4ty147qkAa63gsZ",
  "key14": "JrbhPFUfzawFVqJMe6hqVWoW7Q8UZbbv9XKcYuQ69wyqffMcX8hFdFdW6c1APgYT1NwPDVL2ns71dpY3X8X24Ge",
  "key15": "39H72Pqxu5j37JZ8ez64JMkKo9Memz8mA5N9zAZs5KB2UMaDpgd7LHkMKPMnNcQpopMMYPhUB4rKx8Ft1Q8hMqAT",
  "key16": "iRddLSUCAmEyCxmszjguDrsMW9ZnkTREWgvDhpeyuqPoJA43SLp5hbT5Wx4d4gPUUuQpAHrWZDSupqeGtFxdar2",
  "key17": "5t7JZEnjhc5PBnnaL6uv7ncdCxdCo8uiQNrSHzFaqPueM71cguTntaR4EBqcXzoVt2p9mgzU22NBF3WU6RcQSFBP",
  "key18": "47VeecEPJXWjx7GYP7SVJUtBvFdXDWgpq15i1oErJ9hgXJii7jsmobjh8tPUc22br4xwrExZ6SwA2KtnPsxzLYDU",
  "key19": "2n7FPaQuBToXNgoyYLmyVjJqUpvn2PsUTH2QMkohDQAnahXY5NqtTXoAb9xb1gNMHMSHSfjZc7WSjkd9K4CxawBU",
  "key20": "5Ai6TLJHhips5ynR9p8yd6NbtVf3VaqQDphTL9T82bCMCQaeHT3fJHxKJAByDXGGnccuAmu25UAXgjZJKZYpCCYe",
  "key21": "5zWJseA9JkckuB1ctWGzrAcCsrZycBPAoFo7RShuiKRNHhWWohJ1cnWniYYeckMNC4882xkQaEfqo7SZQiQ1iPi5",
  "key22": "3qXuZHjgddGRKsp7g6RggsvGnFaDK3CudTuLobGVEU5HjTk9SqUHzU638N5rYnAaSs6ejz1dDsNVWLHtk2bvVG2M",
  "key23": "4txu7iNH8t7F7aGQ5Q1GHCy8bE8BPVR3i4rvQ6igpHA1rA7W3XoBdtMjKKdpQYqNgM9hbahaCRVyARo3JBZHqXE8",
  "key24": "4D79thg4aZRcApfJH6ysKByttSAYniyKov7S3RVvtJSR1oKkK3UBpZq3e3CC3Pabq3MZB45B3G9p1dRgpf1Tx3dH"
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
