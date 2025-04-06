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
    "xYGLKpWriR4pvyPLK3JxAYKb6nNsrhKSiyLFJQ53Vue3LdeZjPBkPCEcfhC7wkFnW65Cm2xvdYxyMrbQ2ZwnBRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5622C4D4PkrYiUJNNcax48ANXfGe7TciUNgTRcpVboRkDVT6nv12qQDi2mmp4P8ak6hBtSsUQQVVYib1GuAaJffe",
  "key1": "4zvdgZn1TaUz9jy9eaAWT2aXMyRhicaYjjw3LW9Fs6kSwyenqUHyumxot5s3XuVF1jGETU8MGtTEaWEKrkFsQgzD",
  "key2": "3d3NomEz8BtWUDm2PEm25JPea5iwN47xoMRz62wq73LTHm4BrJFsu8eF1trCFaiKrLmK2k8JQ38wpn5AGeRB32Z9",
  "key3": "2Fb2s5hVbpLwMxyDw3FfFeRhpoaH4yYW6n1HLuaAW3E8bFF92rBq76UWkp6tHmuM52VYA7LL1WRSVUrP7ZKytzjm",
  "key4": "4QHdS69eLyzaWHmdzyPVsaqkt4RoaRwz9RHBuFzHfQZJjNrjmcv47BakBAMQRjnAtysVoN9CpD2ZxwVvnP7TNoGW",
  "key5": "5mSqm3M15S4XBnMpSHjc3Ct4wYtvHgjeKnMtHeb5HcTcnQb7TE1RV7rsG9v8CJcGH7JMHetdaR1KXb9D5HA1JM2K",
  "key6": "3DhCq1Hf9CvZBgWQqskUifkyjQYHUeWpRrBg1qA1EVgnvvi6TrE7Sskzt1TcLHmaW8qhR1Es7n8zNtxt6WhCAFx9",
  "key7": "282CxY7gzhR9mBww3GFSKoLpgVkyKcRAKF5438vc6RAYLpdg2wanZch3HnzUcTxKUb8wyHXngAFkttYcdZy8LczN",
  "key8": "5oj41E2LTttNtjBhRe3pdWrc23vTcexk7RCPFktx9GN25Tx5CaPpM9m2HM18C5LSjYpoCSKQSEHFaZpLTYyMCrme",
  "key9": "4ugmdfXe5PbPuR4irXyhBbaKLFT9oD9WJ5BMmyAko8ypHbnFsfi22KEyq5m2MpjaKNnNcJ26k3dU812wCCFxmgyb",
  "key10": "4KSu6aLHbV9tYAGBfvD7LzeZpb1vAJYbhyYiq9Rq9VatNA7wmtazcW614bpVHDWGFNoGPxW9A6DPpEBHkC75PcmK",
  "key11": "3yJUVJnJiRNMdDhdTzu1qCEYuVSue16ZDy2mwRVqBMGTbhkmLCuN3vvnpPSY2rGcanwbqhSiWRNqkd8EGRgaoY2H",
  "key12": "3TfSM9L296hkfVC7BviMunMeYXhcGxqy5U2JkAR2ysSwueBRHZu78kVhjw3qxxps8YkeXFTHj9ZK1SzF7EGYAfsr",
  "key13": "2H8VejbJx4tX89t5EqzEMWbeDG6xu6eefphhUhoWARTG4ARFpE8VG1t8vizXv9v66CoWWp1AGAvt9zzo8cvehHDU",
  "key14": "68ZHdf952977vViZDxrAUbMqZDrmYmGXTdJBtB2f25vyxzFwUddnvyiqmVvSgxFEZ8xFgMhxKE1JWWG7VycwPD8",
  "key15": "5HSVm95o6vXtHCYiszadb7ahNncXUiGZd4nEGVjtG95Sdnp8DaDfNUWWH59D13VD9j96RB58quvuGfFugqB3xkrD",
  "key16": "3CJoDmqjboeLPWc7TMazf1tHoPKydZn71B6JUWuKK6CsjdVmN2A1fb77LUrTTjAkvhsEfAPAFadWQUxeGPCFr1t7",
  "key17": "hT4medBaPMQFm92xDngoC7MPYj7anPHVw1XVTu6whzq9SrEWxWvhuCtcxMRADR4VLVAM51ydrXiaBDFXY8yzram",
  "key18": "2KWzkWih1ZiMNtQW1C8k6Jg8kXAT8gHTfCWvsg9ZDbupaNfWs51TeQcM1rXAWgBUA8iDqdsNDqyPX6yUDQqAeBx3",
  "key19": "2dLV6EtT6VzhqnAtR5g1qNAYZi3N43Ns9wu3et6LWG96vFupfSLzfjUk5kK4c8r8Re2APdgzHa4HqLBCS9PE8w7J",
  "key20": "47chjjvoojt6ZdCJC4MnaeYyL7x6jeoA55dRWtX6wsQQWP9SDsKg4BXkRkZSyDnc6qm8XDnPAKMCR7cMx6WbK7DB",
  "key21": "5EN48erm9rB7kuC8AjWhy33MdA5SGRyXYDQuj3GnExzk2vVwL3NBybT7bN2qHG5ua4iKdM8VnuENFccR1SkfiXiN",
  "key22": "61sw3g6BMkwCCDG4fQhd3cp1NDe5Zcekd5HBG5AuXK1MKcHm6G55MgGMjTemrJwAJN9HUGhyzuXvhjPb7J61HBpz",
  "key23": "5iUB2kedGYiJciw7puSyHT7hUQeXS6wXn8yNJLYQm5q4N8MTjaycdftTJPgrEAvTShsZggRyiTBddkqcoPBA1wLv",
  "key24": "iAii7rFVANmdhkjQRfUkBQ4ena1XPKCtM6gosDEwaebdTtL83eoSekRKQPDcxRrVZc9SQjrpytKTpoRouBmrKSK",
  "key25": "YqzE23vbqMxnGKzrrWUQfR1MfoSs19RSMNCWsiD2ytTqrWQ1QZS6QWz5kuR5izL6JehsvqWcg3u2C8zc3K9Eo5U",
  "key26": "57t4gcJi1HAJWvKQ3eMyxsWwKvNg628wFq41yfUP34Ha2hCc8ycPq3apGAdnTnPTCvuwBYdEVorGwPCXRmB3LKRp",
  "key27": "28h7UeyMU7SY5DCbUtue1LANMW1amYGU7nx13i2zrjbdhnDmdUvZdcEZXtYxEPTvCEypY5u6MsDGEkrdhZvCLUu6"
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
