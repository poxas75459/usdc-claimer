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
    "2maZ7JBrgLtQfCRHpF4pDXEkSNUpMH17u3fdrhnBRTy9Cjfsf3Xu95jZDXVZFyBinGf6f3JHggi16Xi1pCTxHMei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nmPEMeFSjdXSzqGCv1N6opB8HSEVwChGGRRLgB33YQ7oXbA6gdPo6AiD5shn6G4GzdbvWufauxFBp2WY8EnEt9K",
  "key1": "4gnDb6zveonvEoJsHGsMsYUHVgfrnbRZgwNhMBPbmBqLMCHCkbH6smwCFJZSk4otkE1N2xji6G3YTV44ZoZFjpAu",
  "key2": "4JbSmH1nvyngERN3yJxKJ86oT7jtXA5KbnhAToxN3z73euV4VGwLFaGGMwVdD2gRX292N8KQeCMYngSJSCYdTwS4",
  "key3": "5QnEfz9Z6y6qYLqCbH9FH6WNJsQgQVzQdMiZS67MM8G9G6bqcG7UL8fsiW7h3PKnwMcPJXGZQqgBdpA3T4eUKXQ6",
  "key4": "2XeFx4nPJxmjnqJcQsfkWque9rnAuJ17tY3ANBT5XH6bP2u2DgShrhtpsKmXfy63iHCLzyqo5gGLoK4oG6urUP7L",
  "key5": "4n5eVZcb1fGCCwk49z5opqwqH4oaA5RtSRfTzNBtD4MagvN36rwo1KF95TCRJx5KbNUMpE8sXqfSnzrrZKgWmkxn",
  "key6": "2CMTDEVoW5n6wRP5u5uzZm2pgEHHfaepxAyyi4v9ZS7XjjheEGYKhy1micwaG2bhXzEkFN74SkX318qufaU7egbg",
  "key7": "4WHq1PXKDRqew6YitVJ89chwyorGre2sdzuDUiwfzcqMPNLj5zZUkoSX258hSN53pgr35yd2Tx2ySsS42FRfvdRY",
  "key8": "4gQr6L952gsnWXLVSNk7GrbzWXY6mn1GY4fULezQtt6zjdVBPhYhp7MpdiBUJL867m2cXHBPtNMY3ZFM1R5Hrux",
  "key9": "4zjjHcpEcKBFGYp1tZ1dWDSTx7abZBLjeRKUsayF994Cm3emixkdbN4KvyWrNo7upyQjw1AwszeQASmCJMtgtnd9",
  "key10": "fyAiqHc5Xx7PVQWvTLGhHK4ewVKSn3fkBDMPNJbAtdSu4HUvya3s6SUiecNBoe94AWjbvhgViZHWJyXq5RubskM",
  "key11": "GraEgVPxk4oMBwkHBgXtzSbS1pv7SA42N1QqrYnC8Y5Gvf1181pjNocqsU6CdsvMYmkVbrpfWs6eSK6RW9zUchc",
  "key12": "2HXoJ8WmWqkpUHamp76MCFsHf5YhQuEghkEwY7cGiZ216MRcnvSswEe8AgouAtWdKtHuE6xTSU8nB6rJ2jyZiuWb",
  "key13": "3mEAuTXvmG6nWLATF1ignajcrPCgr7s33wJrEoh5Df6nP6jm7md8Vw2qUipqTtneSUguxBsA3YjWXmPwQ8MTWNt2",
  "key14": "5is8QqAng6ZHAK1xR2MC8HgBt3QJtZGzpwMSotKxUFnA4iEcifskBnSVCCEc7RKfgqgRD27qL193suuSHk5FFk8M",
  "key15": "4B8x4TFNDSBBeonPrnv2RVHMNTQ2g1crT9CeryM2xonWPhqMZJjBNyp29rMLnfCGoqbSB5dDUM9RuUAtKzoZC4cP",
  "key16": "oSPG7mrMvRhnLcKU2kZhgAQ6QxnkQEPLxQtCQKr44o3pFpQxHKbuDSowb6od6q4hczmVP647Y7iaekR6qBSxiFh",
  "key17": "45j4CEa4Ha3ATDrUHgjWwpWAAwdGqyfcZrWzujYMTQUxcy9pQ5oqBs8ig67UfEDLReVZBepuQCK9hov1UD2JKpLQ",
  "key18": "4vFhnwRVKLVCCZcPcYDUj54CmZGL2b1uRVPAfSiV1wFxWwMzxcuLT1krdSZ9uFhfh3e9pfykSauHNfqtY33nh3ym",
  "key19": "yaHftCWXS9aAMFDjzYUFhZX1d7otTnJd7X5FRqC1tEbuCjoRJ1dYCWrW7yZpdZ7UdiEc1JWQeTRRSfZv4ZJwFgg",
  "key20": "5cpbhUuhkTsj4g938pDpBVUSotdukWVNJifrZCJwimB94azUkm5NCNcfKaJ5dVTTUVtxnehZ2NtTrfttyfaG5nBJ",
  "key21": "2V3Jusa4YUiEktqE63tvTQN42noPKVvssQry4Uqvozu6MFNcb93gmSg4QrVTEFMKt9i4yDqS37MGfqffqy718p2d",
  "key22": "4Eet7ZQJRKgi98cnr6B6gKB77tu5ZsY5CRgZbAiyNGMm8FJiL9DwFg6QsssctreN4BuazBPAU74KF6fh6eQTugeR",
  "key23": "4uDLQjnWgcdeC3Kz429yUxb8g6kGw2dsYnnM4BH78ngm551cJMS2NNUjyWURytXyh1cij9mie8asdytsHrpqbn7r",
  "key24": "3xDgsH7GTuzhbBaHRdjMwEy67vRp7r9nDdb7acx59dugFHe7Upn6E4YfG4yehV1DpwGfXk8NoWnfdY13SrZx5jpw",
  "key25": "36BJMBa1Fk8TuiVZnDzDjrBHpMcikediMrSKGdgBs9uCEdJZBT8mnSNQxkiJrS8SZLYZJZYrezZY4ByzkoDJmoyc",
  "key26": "4vqQK3R4fnnM6k4NEBpodXQhiuKDv6hrLE9vV3NmRcrehELy17NgBqj6KXzeXh5NQTnkVUKot8X48VpGLDNjBfAr",
  "key27": "4xcXF25RDLHk8piZBqNeWK61s4zFMfFsm6BzUw78dJD8LjgGQ4PysE8JrpzPzePMs2gSbgYRT7JBSpZYR6J6L7D7",
  "key28": "4ZALGN982UgdrDTwW571kED1CTzyQBMJkA86mVLg6g93z7ubc2RTAE7CipjvJwufpd3csdD9U9aKuzPUb7CjLvkm"
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
