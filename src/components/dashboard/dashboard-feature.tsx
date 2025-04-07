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
    "ttFAJBDQadNyHH4g3nYe6fi2krSDQhJr4jfZxJ64xNdx6XLFhPb4KpRGJ1zcRd4XDhPzmF8Q63arPy8QP9mVJwt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c68ocDZAYFs9KRMLuKqfxRQWaaHDWob9MSNmdJGswNdCt4BxzsE7PagEphMCZGEVgW1LYL8aZ9WsWo3aHRTp3wk",
  "key1": "2Bk8g5Pw9HKAErj2cR2Eo8aTTpQxhfCMD7zqwVhPmNpkJ83YK16XC7APxiD61riHLaTsjzJGq2yRx54Cp7KkeP1D",
  "key2": "3cqG6Zo8VdPobfBhodp8Qnq2EzBxnvyxJ5WxvuwBm994k7bpGwcujA2B8XvjJwqRys4eBKWjaN17BeyMLv2h2xxo",
  "key3": "2EFSy4Ehtbg5PXpBbgnPPzoB4VwrnTgCNgLDanAPqYWbYydjHiLDybyyhfZX9geSTDAvsavMFjPJUT78fFUy1r8i",
  "key4": "2YFTqo1LKaxvK7p67dzX26Dvuxw2jvVFvGJgxFSYPnwogMPMbRuU5QBMxndfoX8YL8aj8i3TR2AF1DsC6TqTeHBa",
  "key5": "2K7V59LqQ4X17pNcxbQHnWiCbHvdRxRFYGipRHDLptLD4cmBP4svnKmGptcbW3jxZY8TXaNGHLzU6KN41genm2wG",
  "key6": "5Td5paFB5nxL6iyZracKEpchMgz8nviY4x5AgwSaa5FqngmtnuzejFUvoFQBbNZHvnUU5HeQX8ZSHKvGkyw5sGbv",
  "key7": "kM5Fg8QNNa3VqSgS3qL1MDmiURpojPfYLa7fc9uehqSL2i734v86wxqNc6i6amAFkZ9CXunpmKxza6pLV9E31NR",
  "key8": "3RxgV2EAx2LznMXAz1DXiKLbeiPxEkre1CoVxZb6vnSbrN8GCyVA3R3QFUV3aYUWfMA6gq5gp2ZhcZLvLT6jqvYH",
  "key9": "4G7g4gqqXQP1TdH4ca5fqxBEwhkgdVmrNg4aeo8tjJo1bnDWH1c4u1UnHUKqQubjTesGoab3KSBVf3VNN7cwiaiz",
  "key10": "2vTyo5DGeHtwPgm7JWYyovnzr6gFgsNGU3NvD8mYruh1xCCG4CFDp7Ynkm2TSZZPbrHjKE7Z57EV6qK1vmzJgHpv",
  "key11": "4oy8Sv3v9H89MFYmuMAFMXVDFU1VWYK27Bg211s56LK8v1KuAGFw5yzthMyZoqNFd7nCTA614kF3ZYbysXfLuF5R",
  "key12": "5ERbP21ngFJCJbEhMa7D6XztEw9cAefTSwiYTFYn86RioAeWfXLuF9vWMN23eUeQsAbnqLsgXtXhiAhi94tfRy2m",
  "key13": "42dGPpesRqynR15UJXt9rCMFBNcSDwQzCQe8U8sc9GZuLQewXYHXQKdJyL6iEYcETsnY8o16efFMFv8QczFQnS2F",
  "key14": "FHiE1uaLtB1SqASse6CKFxNTmvagwTXvsM5VPvx7hm1P9Qx5jK5evMz8KH64SgMNNpMHwiK9jQLGVbxGxwoZjhM",
  "key15": "494ktt2fjeaUMXNsefWAXBwqbHUzpN8DhoGqtaYzHbD8322DtvDFbpbMcXj2f7XzkaE5iHcZrSWBAkqLyRF7nQ6u",
  "key16": "zbNB1MMDwMpz4kXktRrvprUwfQ2ACmNDjJ6zwpnxYEQrSxaJYddwN8gpmxcVJgCASsTkdu6ngYJg8mkmLTkfRo7",
  "key17": "2wUReup23F8pFFYN8TznQu5kzJHGinrpkqKUdQQeB5R5QQVbz5aP8memYRuJZvx4Apv6xgpfqaRAMXWyAPVFSzfn",
  "key18": "oWANbFNWPSXmtmMixqcQh2FGXwHWKsVUc2xswyDrrA1nfXrZoEoKmVPALsXcxYu2iQQwZetDUwGCGQSq3zUnxNi",
  "key19": "22yQNGA4WqSpZP5MGymNxoekCDEGTeYnnXuutqe48jeRvybWfJmMDgYeWpziehJcjWB77jPNacHhd72gccpibRZf",
  "key20": "4AmgAhcGGNpU4kouVFzmvbXq5sqo7AS91bUAPiy9VGQAA5AAzML3AagYkfn4W4m2b95VSFCbhhGqVfi9B8Dm955x",
  "key21": "3FeKxw9fxFm4WM13BtBrJbXDqmEwAMXyPsyKjPcexM6nxgDi2yw1KARysZ3PrvKhrHamP9RMd2HQCj8kns7SSxTL",
  "key22": "4rkaH89YYcW8VivnqFQm5ftEzUct338ru6FXUH2Ci5qfYpwPg4jJNAVhXYHuikQ8f9xJZ6nhv5yc9pMPEu6yUsPn",
  "key23": "5bJhRFdvGMJ8F6s5VazWEF4TwMSwvad8NHV6zk3boarfTbF1Vyox99s5iW1Ap92Xa67N4LzDajshDgiuyyfTdtEL",
  "key24": "52crz68cmAz4eypMn8MD1NbftwXL4bzumfMtodSpxvsCUXCpBVgSbzyQzWWX4MP51tneWbmA4XxDrFc4NJtGEmR3",
  "key25": "xUirXYK3WegqWrxeDfgaz72tKt8h4JEq4dzHKc6dhQVN1iHJfpFAgyL6DfT1x3NtC3ePwoxSWusgMvYjrbaT1G8"
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
