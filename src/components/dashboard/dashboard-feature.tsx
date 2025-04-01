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
    "2GakXHHzJodmU8XtHHZZNHXYcngmYD9s3CWB8mC6XzcAhv96pBy9vNGbCXvedWqbCDYMjGgSTPV4EkaTz9QoYwHo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wnhkaEpw2prCCWWGsz3wERJvp2gLusY4kBEWgCeF7cuHXyecnPU2EHiYwCXE7kNRz2gr6taAUyLUeZgYkTJXwi3",
  "key1": "4GkVAxDUvTmmm3MKkCNgQULoHbP33B6PskHvyjMXLP9w3jqztqeWmVMz3FyQry2NKRHmNWaJtsEtWMSi2aszxdHx",
  "key2": "65Rb8pmV6Dj8iq9bGs7rM58bQgVCsmbEQq9n2oTdu9mN9sS6B4T9dboCa8kKCtz8SQqTZaudmviw3B7upjyR29G7",
  "key3": "5UoFbNVnfzGGTz566UG6whqa5B8hzty9kexurmgLu3DaVpDCsKho4TGuEeorwWhh7Kpk4GxVm6zTnLBGYK6QPj2T",
  "key4": "3X1GjKbGijsuHf6wtZUpb2G3rz8ysmhAR5ZVBArEYRZfFeTNB6SngN7JtcouxXiZ1NvoADEH5fZTh32xTNTmgMZd",
  "key5": "3jbnU9GodPHgaSNLbeNHGrMAndAEqeMknQaUYLMHqrMs5cHJzTZx7XPXkUif21JcAgsn8JvFdSsA4UMC2KUiHAzn",
  "key6": "5HhdEWTFoNX7r6mueCYFjcqFdV1GhwNQ1VbG5UgmMk6edKd1wZPL4nyFf5VBg7V77enK5kBUEnp43mzuv6W4HzsF",
  "key7": "2mKRmm7xhupf19kKZQgc7TA9pWPVsGm1FfhFPVNhNX6BnoXuQSUjwNSk5ruJV55BT4nAMT3oDboKRkc1j3Hiv3eL",
  "key8": "2fVFN2R2WHkkVbK7BnmyDSf93piNmTY1MhBY7sgT6asoCivfuVE7U9EqLyQdzorZvjAAWxaeu7i453A367XXBMK6",
  "key9": "2vfP7RNGQSg3TBNPtPEwBFrrztG4FVD1eKZ2WfSWxKMuMHn2hVwahzWHuYf2vsd6UPe4mY5h53CrEqQHShNrCU98",
  "key10": "32rV4EAsFDZ8H7dZpsDi93W3BTNmUJ9ngd5S6x7uvpsTqcMAnvyZmNp68quE8QgraNkHzxabJYS5oDNgp7Rbxfji",
  "key11": "dFaxCJKTFGSqxhmLLrgWfYQ1bqzC6bybE1G7SBiLj4HYMobb9H6eWNP1T5yd4qi27NSD7HPfQD2CDNXWtSiTSxe",
  "key12": "4ztx5XXyn2YKvHdCMNs3andqQ47SMBw5prUE9i3SadL3PHCVC7thyNtjbNziVbkcuB17fBZiYZSfiAJ7W5MezDWE",
  "key13": "QE9dQR7EGZT8BjDgrjRLoWxKZYdSfGj5sXRzLWwig4uVTxxtDBRynKsSBnd7byKFr2P9si6XDjNncNzVYjaigtH",
  "key14": "5TM7KX5huv6cAVBXo1m1ocLQE77CVwPnsPnSugyF6UCKDEvcaQgEUfcYFkCXVBVPbXk4R4joz8T9cL7zCqGgVP9W",
  "key15": "3NYfE6EoCWCjCAYr5xdsHpzoLCXvgTbDTo6NJ5TKyEy7Zr3Fw95QgDsa77cnGUtB6sEnTFZ4wDbmrguTNJK9Jorw",
  "key16": "JVSHc3hY3WoW31MH1ampPa2iiFhJL3f8Le1KN8GuYYVRLi5D4LNt9V8z9rjqE4ubReLYQVEyDWe9e6ZGErNte9m",
  "key17": "bnKU9CHzpJe5Yjegrn4brf4gcA7mJcUTpyfPfiAS72WJXj3zZF5GLuffG3t2N3xoierj55bDjb4g2PJvMYxBqeu",
  "key18": "49UvLsxTWD2ts8WxooREi7W28cEBL4hGiG6gfgrLGVK8ib392NAks8eNC7xgdyarPFi4J8UiEJnHsUCEFESh5gPR",
  "key19": "3L12JiNzVES8opyBJUzyyeJMmoRe6WwKe8fVXyC4m6UAghTDKDKU7D1dcsKRr6rNCAwib385dqK1cjNZ1FPNavKK",
  "key20": "tCirY99Y5T1feJMwayHT9YVVgVjZ1L82jeCW4dU9tiJ1Q4TXykyfknZPzHLes5YWdipGmXEY2XsT1URnQ4ebFjK",
  "key21": "42C1fh99op2L7LxUVuTegz9JBjXZwNSokhk7k3GWwriKzzE6cAcqXGmxfUF2jPJmZqjPXe1YqS44HDMcYiExtpPu",
  "key22": "wUutWn3n8AhiWVoDCYJ5J7dWCMREjcpvoH2NRTELz5Pc55TUeto68KEzzF4whaxiJtsUQJYKcQqEA8jZXmLsho5",
  "key23": "4e3u8gLZBQrsg6vXB14VFU6CE7WGbAAg3q1ZaJLq34oQhNiMbz2iNXrMDqZNf1BJ8vTj8ano5wkiAKcS1Sw7KtdU",
  "key24": "5MQoBWuydKLxzgNzRWYCGx5wzQ3Hp3ELtGxjQfSCpCvmbpRKPUErckqzKgGjjVhmuoxMGN4k8FQSymPw2tTMLcUS"
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
