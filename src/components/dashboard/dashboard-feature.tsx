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
    "bqayCadfQTNwuZf2RCH8s5VoQFb1j3WYF1Uxq8z1nPWmyn2foioWoeuxpyjeZdtsvGGLWRK3Mrje2vSofupyYfw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S1QQQFJ3StkoVKCE1JadLv73nWt7DyDUPLajdHLanCQ9mMXtizNrrTMHwhdmudBrN1VvmUpYVzUvhuo827j7iuk",
  "key1": "27TVR9odiug3HBmjAumwZPrk3QtuEeBwm3tymmiHQfjKfCHizydeAw27wQr5txcXNjbTPNx65GmZ7EUJqGx1VbRn",
  "key2": "KJi7iTohmojkFWfWvSqLoY3tBR6i1vVgtT2gTHpL6STcKJxpgX8WwJk8KaY2ir9sNN9uBGfsusb4s7aL3mcQPWL",
  "key3": "xGFSu1PxvT6Qh6p347uLuGcvQ1fxXtNnVRkobuikmBacvU1KNcRVxBLqogEp7Kr6JWPVGtEToTv6eXZhz253cNL",
  "key4": "4NBZeLKN9xpwNAW9ESm5CuRyg6L7YGQEuZHTC69gC5oRJUhfKNaG43H8ood4xTLsSwTSHzVtFgj2vsbLAbqqRqmh",
  "key5": "48jwnamAuaZxuKhTYSh7UHVsqjhBN1FSYWZxXRSrBVMMXGED8FqJ2mxfEnc7gM1X14iuZ2jaPgdFTRA2eBCZw7ML",
  "key6": "GbhAhcEBnE7XBcWgjH59ChbRySp1RcBQHaMNUFFdWscYmNpf5Rhvfd29s8cU6ksusTqk8eUfr1pHy2RrsNYLf7Q",
  "key7": "5BFbcMQgRnzCRwZuM6Pg62VpAaq3g13R3iiQ3nAeUMrAYqeKg9ThJPM11i8BFonqRgHj7rCFTAhv57QQtVGpRrMb",
  "key8": "jaD1k11YanLncZ1JvFr8Xmf3wDKygmJ5ZfHEsapbkknh3FJMsVtURbkoibSFBnuc55aowBc7Hy6HUZx8q1gB6Cg",
  "key9": "2wbeNT1px1GWAgBVB7nBLAD1yUWc4WNGSAtdvRnbcHidsCACGrunHYz6mBZN1jrEY54n8L4ruf8Rhoxcr6zDX2UY",
  "key10": "5v3YaL57EguFsXWBijVvTWTaKutSFWCidtafpHG9691VrapbXRmd2VuXNWuUdg6k4Biwexs1hGbUxd8Sgh1Nj5YW",
  "key11": "TVrcY4PsxyrjVbZRHPxsxZBSbGVMcgoEKxd8PeZd7LpXmEHi1gpGErF1VPdwSBgFHiaFpT1DAH8icBWbx3iVpVP",
  "key12": "3VeMa3xf7oneodm12Z8usyRMpBpf8qqxZ4DoEN24MU7XdTNQ1DNJLtcQwzxug2knfxqD4qDXsJoRUiZKNYBAu63x",
  "key13": "3dRSKyjaC5kdKuJcd7ovvRLZyncHGRHgSjPrisgbYdY2LLJm3PwHfrJYPeFbfhkfQnFq9xWYEJiXLKSL3nrD1Y4k",
  "key14": "5VMjADUVzqc8bb3VLJZJJDen8LYCpQuvMQRPPdqF7P52rr51fr6sRjdUMEcoEYhoXuUWx3iyRhAYyVuyKKHCzCDz",
  "key15": "uf64AaNmqJwZrwCgr2EJFAXsTnv1JFKZWUpTHAq9gCkh2vJnnMah2adVQRgKMwML81xDeWhQXi5en2NrqmweqpN",
  "key16": "3WnDaWcw3DNN3YzY2eYzP5T3XHdrDR4K5GZF4QKUWmtRXi6VSzs7K6yynjAgxkutwdZuYESwQpFG3dDgvxTHZGBC",
  "key17": "4zK2F984zkXDMJS9fgNHkDooPb7m2nn8xjMzTHza754LxRqMHeJv9rUBS57s5WwSQvG4ppzpDs38miC6Bw1SA4pP",
  "key18": "3AMJoFezYZAkpYQbEseogAfCwShDNtHM8q52LExzHNz7rxHEBA1usjbNpJ7M9WJ3BDoZNVLDj82MmZo4zhQnYPhh",
  "key19": "4gbaMp5RDaCXBpF5hmxMQAgdtgD8R8AsX4WKx5Q1UH2qcekGo5qm1vyQyTUCKcwQ7KDiMCusTLBqayzLhER3t2UK",
  "key20": "dUu2DLjxVc6dfrohGitVZfZY9w3pNz8SsyjJp5uxz4GkGyLXhRxbUbBaZMXvRkXZMERZojg2QWNRD2dfhsALhkD",
  "key21": "4j587szRNUBwCUrPNGS63q7d8ukFJ9FUM4SnKZ3TwRVf7LWRjPKjjwAEZdtGs2t79Vh9CJkZeREVeEiB4cjHnLuz",
  "key22": "3fsyk8j67o6qDHoCdStmZJsqoeywwxPExjdqbUpXDhdMkVMKpbh92kAtdJs6sXnq45nfXtaFrEeVqXN1iDaBRPNm",
  "key23": "5MnFWST1RqqMwYYuDYikBwCExVV85CPMbaGZjxt87d1rNc11j5yRLbrPEMFvdbwMXTvvB3Tj2dZQ4QL2MTxZVzv8",
  "key24": "4xiPvFt5ntie95kdATbr4tQxPsweedV4ZhKJX2WyxERvw46YEQFww4k4ZGZTYofuEV9PBnNzJGqSi3U4MoT2HQFj",
  "key25": "q1DdwEtRdviSv23oHE4DwpiUJMW91oMaLF4mnpcFwfE5y2y7BXtdDLt6JLoVXeqHtyZmkoDt6dfmdoi3JGBtK4j",
  "key26": "4mtLhGTahcmYpejKthnDfFztj85CAikNpCEsQbVqmXd9tHvEpVkChLU7THVvDuxLQprsgXVyQpLAh7ayedk48FLk",
  "key27": "2zMsKjEqzYxa8iXcigrJPW6eotYRWZZej2mcnVM7gd8NUcf1eHwoSLd4tYvtM7M7qXEqNSZQmYhg1qvHdRDVdu6R",
  "key28": "43Cm5PwEykfRuDf95ixzGZPB8UtX7sYNxxkemiz6wxvUatF9n2HJboGyumJyy9x4J965i4ymCRLYBUiUhwmzqJra"
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
