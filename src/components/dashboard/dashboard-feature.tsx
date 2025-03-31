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
    "p1tJ8W2wEmEsw6wqMSUsaTbsE1NaraxofMuPnEpxRF1SMaN59ywhtLj8RHUS1Avjya9JTD8NT25HTZLURvgzBD4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a7oz68z4QX7xYoXkgWBnwYzcZnSdpBYWHpgTSGEtmAj4aGHMbZttkuLw3xaMdWadSA1NhA6VmPKZED6emF4u9so",
  "key1": "5YY5SZ6Ufqe15zK82FANfLdJhhpA2M2cRsh8Wn17c7fxxHyoZBkRG1bbphNdMo3BqqnNQXayvbkRrmCsRqB5tqWt",
  "key2": "5w7ptVEkxVJAApi4fXSMrD4QLW1D1gJHbrFJoGqYtq3CgvPbHmAkaJpt9x4JvbUViAQLiEzFwdigi3GWxV6TSkwU",
  "key3": "5c5U1nAAiQcV6T1JU2xJUzkFA7S64qEwhvKy9fGgjcfuBqRyTtJQon3fdchgx8xiLbDVByRq7xNNbBzbL9XLiZvD",
  "key4": "25G2bFEDBtZKzY7RzshgJcRNDdQ6guJ6xuUsmnokTnWZEzZxfpb4Y395L9ooZWn56yvjbQw5SxykrcWpxCTYztgW",
  "key5": "4rPfp1bTnbgkG92iyroaf75sE6zq738oNv1B9zHNtMewBLKYoFfVXi8HsP1XUQiPSBFNRvkgF1KVi7LW6BoH3tAf",
  "key6": "3ojSYyNn1VGXk5y7DShKVddGp9QJr8MatAKMx73DYgqrRPwdk3VMYaJHRcnvhX7x6Lp39TVCCJxB5Gm88CyW5wWa",
  "key7": "3mz5txsJ18215phh16eGLZ2DpincW9bznyJqYNxWDahnVHb74dP9K4TZjfEiqMB6wNyRzSDnzHYtHpd3aV7kYc7m",
  "key8": "24NDSSvdAZfYJX3yxSCawtaJ9Uo4xbRv8H7w1j2GGMdFFDNbWmGVqKkiZJvFJ3xtqfiTUGBABydu2PZZXKY8npEX",
  "key9": "4FEVKZCAbtKQA5HLfYqhPKQ585Eqb2JmJTrJhHnnsrarnkL6uRrqJ3mvfERCXZMFVGqebRGA26ETazL8CLm3xSZv",
  "key10": "5ANHAbEnaS6pxTcybgt74ycZk4Aa1PiKers7XdRALYhxguxBjE1w26cyVcbXs9btWfvzBZbivk3DD8JSZVnvESrd",
  "key11": "3vEn88hoJMWVG7vE7i9C8ZeotbqeJUmHsY93HGnxxq8LAhKnhqpjPkpP5TpNHRyiqubprFGSb1iJc8LUNz9fBkgW",
  "key12": "2n9njHfGSFx54pTN8XtZCqj46ECYuhFsB2v6cjHKfxCUYLxudf5SKKeHbe6Eo3k6rWiTswasAx4WJrYciGNhXB7J",
  "key13": "4q5BTQed6toNYmfP9j2Cs4zhU2vezUGFApbLTicByerT6Ma5Jsv1ZrXbYS8wTXBvrhypcgMDuEd7jQp47uCSrN16",
  "key14": "3RaBxPahYGeK8PquFtEKFoJhEnn8SCL1XnuEk4Sz6tGRNZonL5qHaerf4tLqc36RWR3R6K6DHYNkvwUBSetoSW8H",
  "key15": "4hbfeeYB3JaeKhQDXLRUiryX2fz5dktrpzr9QFPSMmNHfnRsP8UHz82S3Nc9YM1RjXDrZLZoimfU2rTb7JyMYYQY",
  "key16": "kC9oMLV3CVZK5ptsVZ3Cc3gsQPBLN8SxCRzLfLtcVEXT66bfPxh9mXSUYvrAuKXMayUqSsuwyxe726miUNx7A9L",
  "key17": "wYr76Kr3Ak13ZwFEJyNrCdsko7bYTw9dk9dWLfRfffRPigWhiDmd3skausiit6pdSyDJDefFsRmDXdHcakFj9nJ",
  "key18": "5t4bUau1L9FFzpe8FLReL1Uey9hpqR2qTg42dJpk7eEUdvZG7pVxskbxBtFrkidJD94meb9yEf5oraUFGtqaBmew",
  "key19": "R5DaXpEPL8KaqkLz7qGycnFbzE28Kr5pGtw1uG8sHLo4V33sijX18Ji4wmo5afTUL8AQgb9cHVetZ8cxgNr1bHR",
  "key20": "2AoJyHS89uzo53VqFmcHjs3mBCtc4tGJjbANV7GuxQGK2nExGbGiEGtSQPzvEFNoCeEcU5YeyjZcqhsCigmbsNk4",
  "key21": "3CW1narLQChr1DrSKUGo1scruWruJ4Ac3JD41HGm664sPsRrZoyhPPn18obBbvtAAcVPhtoo4kNEq9ykgvvacKsL",
  "key22": "52yebLJS9kv1Yi2B2a6Gg9d3TCF1N1sESczSsaYBDNoPMigcqya391Y9CUvbMv4MKh9NA6hrBgMJ2NYqeqAAb9qs",
  "key23": "4goSVud6bvYUNF9X4RCzywY3SUe4ocmsAVn4s3WctVwsoMiKSZTsd6diyxzgHtymguqq25mfE6ctnRDLuNQo5HAS",
  "key24": "4vUfXXgGvPvoUogXPqcaLq3FRwo6a3fvBwyxJbChoG5xSU65SFUpPw5eqAtY9n1Y6bp5gFqhYxF3oydCdunqFtJm",
  "key25": "3Ty7U9a5BiEgdDsarDsnyDoBDdPbYAhPcVzZd2bSa5CQDJD6PwrGsxBL7DoEgook4eyA7w6XLH9aJKR7qaAovZjR",
  "key26": "46oZsRUNi7VmWfcK1P8wS6eSiLRpvJvb7kJZxYdiFf1py7wXy2f8G7Nfs8N8HhF5T928fDKoCgfBVj9Vw7UYqfJ9"
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
