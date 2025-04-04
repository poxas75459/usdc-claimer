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
    "2Uy3xvSzu35yvrhziytmVZHeucbKfwzdqTvBGjZhpB2RcRwSEXyqsyaPgu6S7UTQcj2xiGdAkqvgz3e5QFc92AwX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27L4CuVhJ7Rd5ScerEezXB5YFZ1Ko7SPfSEdg1KBohcM57MRGEGGPF3vzzKAyygBKLtgiUcVEexmG66oYN3U8HeM",
  "key1": "46fSCY6NMWmVhn5GpshwGJ57wjywYbrc4HExnnTzEq5oTL5VmvsCnAzm8p5SU4Px8Fait7PiGAiQqgiNZhcrfySo",
  "key2": "4BiNphroc5yPXsYXS4CQuUVPYA1p4MaMbXWGL3aDN6us5nUD7hDQqsMQwAdhkmVTubcfuSZ1YhTYG9b6xhPtdha7",
  "key3": "5nUEEQFMW4vxvAf6ZtZzkCA4CQXijh9k2ij6oYjJFzr7DazZoFUy9MHqMgUfUK26YAzMB9NsuvE6nssm2dsnazmc",
  "key4": "4xjsknZY9rz1tfaZud4PsasMBFXJf94Yy9eExrMKjftRc5tiUjRYsMbi7WYgyJUB3HKkJvJ41a4CG6zq2zBb96cv",
  "key5": "4HZLr6hZsQGwTHX6zLK5x6JLpdEvrVsHosf8CiHAbNzKagKb5bVzscwwPwY7PRim7VLTMMEPH4Fytw6cFwECL2M6",
  "key6": "5FyBChRtxh49DXWjrqpDGZCokHXXyioun3b1WRhJjm56dCCA67DgPwFVueqCCNCHT8VmaUAH5p2iuhrc9VsXuz7a",
  "key7": "4Yh3sDDtfU7mzcmWqmSxwHKapz7gNja1x8JK4NSCwdAc5WCXgttdZAKwjeWhmc6ejpJ6w7eSb8UFfH2tXYRiFSSR",
  "key8": "5CiWDafL5tsGn3ZRkaBMjWYGr3neULAD9ykNaJrtb1YAqqXPWS2GumG8tAoNHoGfjPRyk1ekfWVBuBjfwBgvYHtt",
  "key9": "o9j39SiMXHfgxPHKQTwVfh5qHHRfsSxtRHjtWX6gxvmbuFPh8PnZi85PKALgq1PSZXrYNJVDasZCPSdwnNiuDqd",
  "key10": "4xDDw2o3viCuEByq4AnGnRMwA1eoLgBdxxs2AP5Kzc43DkeWCVSVaQ5kaicLMWq1msLVFWpD7DWCGp78VtA9LNYy",
  "key11": "3aNTBx2jT77q7v8h12tgQe9sj8N2GafQzZVBT1RLr3KnpRN7RHUKxbXLx5sXXaS9HbFum6FvaJ3Kfi9JH5s1uHnu",
  "key12": "4W2Mt1bTbXMsHgpp4knkEcJmPfoSso2mT72f5d58ihczTVFk39YHehS2zHsxArokFFtm6rmW87T72qMRrJtFCJaJ",
  "key13": "65jEKySHcUvDWJC2QVnL1kFGjHDdp7ggtoGjpUYz7DMNnz1CykZ8119YmiPM2AF6eQ7J2QvwmJzjj7HTFsUNevst",
  "key14": "27MjwBt7zc7KLsuXfQHHjVu2LarTM1UkD1sDHpPVE7rB8xL8YxBF8cnpDs8KzcCyiYLG5j3QoJEb8jiDL681VtYc",
  "key15": "3PaiHMSWDFQYFLKKtw8QkEqVTGCvqvKjiMhhBQ6KtEkG4vtaKLiz1xLrnSWmurffXAuWkqfwGfA9jLkZ5iCFb3Py",
  "key16": "3BZCkcA8aDP8e61oLjMweW5JHfPZD6vMJEgs3M9QJ68WbCSijDVJ2jJWg2GKuAH6ZUxDT5QyChFVkaajKZWgQYB2",
  "key17": "oNMBQUCzZDoUG5TKdSkiVp3CkFx8NBVYc1avky15JtaexpHeh8hhapSSWCCToexj3u74YuqVWcFnGAgUDVRLqQ3",
  "key18": "2bcQVhyB6XrTKGaLouiiRrVeRJQA1GEvjFnGUBtrbPKjvxcRLnQcXkjsuQHkPspF1c4Q2zRKwt7n9JHgB8YgVHmj",
  "key19": "5vcb1Fbq18PRvceWB5x4GUZBFjT84cUkasXc2Evhc23HzoxbAYobiVSTtq5XeBHtZwAv7Fd19NyQpx3htjPWp3mD",
  "key20": "3wXTAgSFagTD3vooouhaLyR4bwBoCSo1DHJJ681n7YzyvmpVksB6T2Z4uUPCoPqTxng3vfdzE7Jx4ogbv2CMCBrG",
  "key21": "2p9mFmtqKaonKZ3JkSnpmByVFLDFP8ZSKBDwToHiW6XhFajqrqUefFAdYXoc3qz7vjA1yWG5A6LWkRZceKcXGokJ",
  "key22": "5qfZeWfFUhr1NR3yicBtuTExQ1j6AjkJjEMz2q9EBDD6xUgugidXTTThWqGzapejzJXenznmrW9dmegxGWgVwGdu",
  "key23": "cbEJQxNTsucmw9KXahAcRmX3uQGvfsq6zX7urPE8iXM2zT33i3bTJ3itxwjGyYrUDuZt1RPyBAqfQLa3Vc2Fvaf",
  "key24": "4Wp4QT3KiTi7wMbm5K6XHokiSxgCn8bbb37iGmMwwCaPDEC8YrqsWvcdL6JFn8iz2kzzuXRWC4jyPQtPZpZ7F2Ya",
  "key25": "5Hgpq6b2cizcoMBdhUpGzBwcVvKnAtJePyrUxq2bsoL91k4yHNFeKcfe1s394Pds37MHrpesH8cWzqZUST455oNV",
  "key26": "iXM9GstzjoLLSohdNEVEYidYt4GEQxuuBJQLQFkxhiuHKGumV4cQaBrjXpRnhyjYeKxN8PbGfhEHFsgYb6gMXQQ",
  "key27": "2tntPztfK1xERZb7ZvWEiU5WWqqxsqpACY9c9gy5ojFcBvbuqSpMLCVpkEND1Xoz1uyx4brAkutFaLhG7XoXXFfs",
  "key28": "3ZpGzTkBEiZK1Hcn2fBTdGVP1PajDkGnjNtFbgxgamWp7miK7X4wAC2uq8ycACAd6L9tvnftrpksSvuUYheePvD3",
  "key29": "4aDgdQZ8s8ZEieJ61zWUWvq8hQ7r83QJh5PGsaS7CgiV4cSwKjNYJ8nKLt7mnZH5k2ewfQMSLcUwt6SAoGDks5ng"
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
